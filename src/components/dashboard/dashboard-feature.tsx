/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4gNbgzc84hVB4Z2SkMktKTR97HS8vxTs8E6EUDMN8zMYcfWDVduobdWqYch6NS6zdPUueCLb1VcEiUrHHAURUMtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y5LFq9nuLpUWrDwFF22sHXR497mvP7sR8abQYzdjkwBdPtcyDsaQjqZQCaNYujVoHqejovZDEJTmAGNSjvTKN7m",
  "key1": "4PJ1muEU7csyZdUWJohoucYnA7cjqcEvhhz6ivvu5Cd7FWLNNvbUAubMViZq66VxrcFXpdmVwTrHvAyKEkf9acog",
  "key2": "3rmgNoRAzGUNeDo1Pnppm1fYz6JKA61igeJ1Szyhn3C4c2pHfVsNfkjiRVw94XRYnv4fTmWM1F2wqfomjZxk6bY3",
  "key3": "5HQnQYeFWxLag8b22kTMdZCF9mwEsnYCUP1Kkbfr8oCEqmthBbxsfSJhatrRUYo69tRrXiwKG1879F6dWjUHo3hJ",
  "key4": "3zHLFWF2sFdNNR3murtzmQDKaFi3f1S9VU2kP8tKmNbD8JPAm9TQ9fHXaebLHFV3vvHLVSRhTDdLwm6cbbvb161N",
  "key5": "3jRLiaG5jiarWEd3n31pDVby2N4WdDzsGgxnNnZbZ8jw2M347zuGceJUG55dh97n6SfYGC9fYzUkCxh2EiuTKsiQ",
  "key6": "4q2qeHHumzA4qgMsvYwFFJmp3fomkh8Kx196YqfkEzZxQ1fhFKDvU4tDSpYkH7J9ekK2u2RUKBQ51J5avASM1HAs",
  "key7": "25pA1XNdeyEtKFRhVgbMsZqYkQ1HG7qDpxThd9Nk59vZhs7q8KNiRAn86coiWdGCoHChCGEUNayafnH7sh8BMVdr",
  "key8": "4tVjeckDXy2XrWCYyAM6qSS6d1RQ83yg7UQWT12FmNfUSjzAh2juAka1zVpMgKeknKe6aoJCWENSvA9B17Xuepas",
  "key9": "4QsDsSa26QkYQrzZUExkKrduV8VQv5nWzhMEVqsa4przGas6NakaN8H4rANdzkGecPJE6uhvFYHTUF8aR3p5bpUk",
  "key10": "4zpdudTHWyvErnrigLEVCVCKXnVWVEeq7NFPDrpRni9t7aicB5dMvPYRbwQDyJGBUqpG6MXZPoF1YE2DXbFEz7vv",
  "key11": "3nGVBNM8ooHvstcyzWYwekjiUsS7qkdVWJ8saPKqiJbKoW4FjxXWnonAgvwprhuPWP82usnjyNpJTrU2b1TrMDou",
  "key12": "3mfKArzRjRecaQwg7R2px8kWTTnuDJRoKCHU4mHkBH8DfQWTjnh7dACSsTUw6jaG3E7e7vo8nd3DbuBeFUAMon81",
  "key13": "3soFc1KrUfJdo7NAsgetbgRvaZmhBLriwDQzTKUhkrWJ2CTW9uMwHJLc6GfzKLUM3rkSCfhbTTqktCyfBwF6vYgi",
  "key14": "3zFn69CZ7S23FQ9spok6rZGsyeWZtfRDtH9J1dJ8RBrcBhEXxcrdUaYx4rCN2u6cDpnkgcMNDKhXP59jpomhrrkD",
  "key15": "5oMBpaG6gQmLEchzrufrJtVfhm8qxdQ1w1bGETRD49occCAGctCDY6ndBdhuYYqsv6EjMTnc597MSqJXQTUnz71b",
  "key16": "4a9K6BwH3kkQUGJVmyJpfi1gENnXFEsWRiGk7nDUKF8j9Q494DcgLHc4Fg4q2DiBAjt7DbBg9iDP1yfBZA8FxGsy",
  "key17": "3iV6i4CZ1pWkP7nVHY3J6diDSozexfnJDtGQ3UZQQ335z4FnmV6QM3cE94ioHGbhPmKtWiE1BggUU2rkJct3iZ6L",
  "key18": "4USMqriTUT56nskv1foT1z99oj3JhsgUMPqVfhEzU5xpaZCiC5aoWFP8ysqCiQUxabgsu2f4FB52cTCckdLLy32b",
  "key19": "2zkKpgVpheJXScRCKz9zCYLNcE8Q1SinFYjyrgvBpQKG6FyTLsxykDPCjFDveemYj6kBsuGmSfjD9FmAeHbwznV2",
  "key20": "yxfsaSgDXkxDRcvCXQ8eyskEkLoVeP4jdEkJUdtXpqnnZpt1wVLgVV3PR5PsAyKurBqqagDJjYrqLyjrHs83mLL",
  "key21": "5wghe8vtWKsrMm6BKFdvKcZxvjYGnYP9opw4Ha68Qf6dwRM2jZaBg5SbXMYxLKozBYrtWVdRa97Nw3xoEAB1qFXo",
  "key22": "5RysDpAMDEffTHSrrZTPaJj3puhyN1XhuMvUt4uPpTvu8G8uctah9ddGMXDeL4L1DcncxosxtDVNdGvnB7FGP4bi",
  "key23": "2zi8r49JvHMie8KzNo3uD6V98M2FMLQrLFsVoRko3KJTwZLQi1aSDxM37EmPaD1X8b7KW5TxqHQNUkQjztZxLZYa",
  "key24": "3BVCRjmdTpf2nsAfS3sET62t6BqTGWgkYapnvf7kugZJxdpmxzFPxAeFDR94Jrv4wtC4WQ89fNMggLhSR4tm3u5h"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

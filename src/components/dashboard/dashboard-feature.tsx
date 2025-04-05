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
    "44e5oAJ3DJ8n3HAR95oDDcuaC7FY9cWWYbzBQc9ZUAH4npD6HG8ZN59Jfhu5xJ8JiyKuEGfNzi74HjiBqbNqDuAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yTwMtyBiSW8A84n2vsvwpQe523bibttbHhzLtP8tbLjY22CTtZFP62KYiKemLbHHwJF1fB5HmEVjbDEqr2T7c3s",
  "key1": "4UyKuDx1rn9YzEnu4FKgjBuxexGM396DJUt8HScEDFbxym7EBWXtV3TKjhGdQHjJtJRVx5xYniStyB4PV55qxf1f",
  "key2": "4fmCdv2T4gsZ8r5fZimHzGvASXLSL2ur3DXRoZZs2493yiBtYYEoa8hFZ4qULfrFimpRXWHzcBsKNG7pNNFuncCW",
  "key3": "aJoP3tTCjqmjjgbwQJRPgnRzoHdHZFvTDjRdT1n4ByhcBNYaChAv7Nji7iWDpefBCzFkiZMCArSXyy3QAbWaDLG",
  "key4": "gtueXiGE8Q7UHr6MAtifbwppsa3ba7f7zThiwLUpUn2LoGC95VjU4W3pszq95tE4TzPjd4ojRfvdCsbj11fyZ42",
  "key5": "2rVWzpkb1oLpLYo2tdahgyjxKyUri1Z6KuQmw2QASC5mPUyYzj8j2T8jnATjAjoiK3g45g1Q3gWpDceBaRDdpYcY",
  "key6": "1FfnGLvshb4iW3YiQ1CpNjg6QRgkh11y5ftfEA4HgSDYvV2ki9SVkLLwAQut6C9XJ5UKkJ3dqNkNMfGd54VtPqf",
  "key7": "2EkNvHV64miLQga7vfVR2QrwDooh3k65v7wKszxytjkwUNtZ39KES4QRVEAsWA8PLqYWyTjkyrY63tLGeLccMqFd",
  "key8": "3jSqdd9c4yYRyR3gSZ1J5xCoPXKD3wU1zxV8qkw9dCXLDU1CGrJBrqsEGgsUzwD6pWLUiQ8WTnH37x16d87QrAvg",
  "key9": "3Vr5JRxoTcMZX5Re4EB8NfcWPeBfgtGJcprGT1Vqx2kTQH78t2e2jK9T9QrH3RaDaen66543SC5AgosVYbBTku9B",
  "key10": "2Myb2KFFNjSe5qjccQ7RwWChrZ31FxJgGVfRgtfKhvZn6Wz4xD3B9k31nMhC1mNyT7oAaNfgvo1oHRKjnEgD1Nh2",
  "key11": "3AbumomL38Kizq8LwUFLrUHyLW2gfwLi3wCMUULx14Xu2pkKu8eZjabqPB83z4aAre2exZWVg4Qfy1ePyFcjK46u",
  "key12": "E8Ny6bsspD7m2eLMvsZ8zC7oHBHidWoVABgFzdyGyco56vJyQVac7dKUeFQbbwPPF91hUnbpLMUmx6KFuweGNtd",
  "key13": "26CMMd3NFPaq9MgBJGCY41c8QU3Dk5aGYTgfLw2tJSeKJmUsp4HRf4ipTzptRkpxnpzm7XXPY77vJfoDYtWJBU7g",
  "key14": "3Ca1WbKp5mM1qHpsctiogEZGFVX6KCtQrMZTKQ35fUetTMjV2WUT5G8GR5edW81A931Gmkd7sQdP94MnpGbmqBMq",
  "key15": "4VuktnNH277PjcsAg1shrwdF4SbwGnun4P7Bb2edxL5awho4QSHFBjhvUGENVH3LKZSeFWXhTGWUnAFbF1Kfcbcz",
  "key16": "3oU3nwgrbS6i3UuSYdnHAb1DFftBwBaUkrY4Vqf3K7mfJSpCyeRicLLCYmLvCeKRmQwJjZ1CL8VCPS6gXKEbxvag",
  "key17": "4B1gu1ZYuHzxxu6zJ9ubZSeonj57Y9rgUKHbDs9ov1jcVGHnBTn2eBFwLYxYbAmFstTLafa4ATjpBiq2taSfeR42",
  "key18": "32q1gDN3xniHyofdF2skXL775ixTUGrv4v1Pdy8qVP6QYcDj9t6tLD3pmDCDoFdtX3y6T4EpJbsZiTNphasgWYxE",
  "key19": "5V5oBSPMNM5TnmAPXUzxmtxMDz1j46QjPvCHVn4evFaRiexxMBQSJFXwbesfqkqnemU2K5ATZMfaY1pBEbCrdZsw",
  "key20": "2GJVhXqMDjGBGNH7E4V3kAde8VvHKmDhzRLHbAVshKvGbEggr5aAzamUqGKEPDdC9U5JpFfiyFftBtFYayHgHrVB",
  "key21": "3RSRvcdYR2psFm4aahnbZH9BymnPxiLrHHRNQiPAahD7xNcJZmuAJHUca8DdMLVXFCiGqL2yGQR8oiTF683o2Koi",
  "key22": "5L4RNEG6kjjPudpaxgwjMeQX8LuXyH6pPVTyHjXpfWTakCvYi6G1zy8gQFfWvnohvNM8WDiJR4kNJDcxem1zarG3",
  "key23": "41NgGGom8o4wQU6sPMXgit6CEFXfRB9ZuyHhW7vDJPgfbgFHEZWCBnyjkF8YnmiXNxb9eWeeSZpJUxJNiFkTdJBy",
  "key24": "5USFmhL59DpCcDJXrX9xLxBsJ8EDsiAByaREYjm2KVyuxTwULoT7waapCWiq3kJ2JEU8itaWr2YZWqb3LNSzYNtU",
  "key25": "5vRF8PwNfry3PwiHusTZiQ9E1gVuoRYxeDs3yR96GWDQsnnRx95gh1Vq1sYvxkJY39w7aarJBd8kUZCoFToAHr1A",
  "key26": "5QVKhjt6xKz2qzPno5P7HmLm4fiPCwSAmBjDn673otzRNA6dAUnT3diHFLCjDwyxF8Pg8Vv3YwUsQNvgnpvEfqva",
  "key27": "pPYqxVgRpS1L6PvNzXPRj46JgLDB46Bmzc3F6rghQTTjUmFzmpwiW4GyGFz6dTpXM9YzbTjZxTN1bjXkbWH3dvG"
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

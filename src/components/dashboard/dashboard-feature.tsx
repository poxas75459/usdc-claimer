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
    "279ywRFqot6ztAMDTGBUXWF391ex9owSmdo3DwveH2SrwYhnKUpbY5oypCXP3nANJCtmqYzLHvN4hMgHjdjPoxLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RovyCuSyfNLZ6k5g8vzrsxuzRs6GDDvBNgkwNiDQpB3x9CMrExDdNXvHUwHDqLDkaYKEkvJscJc53Qnb9mEgXKQ",
  "key1": "5MoTESpkQRe7YBYwzaVM6mFGXMtLdTJVbqfFUpVpFptGNb2eVUrk1Wzhj5qriG8pXM3nQgzrc9TjFmucgg2MJaMn",
  "key2": "4cPbAGx1BHt1bNjxDBcSsgiTdvjyXXEtut1Y12q3sC35xKJfUyfSEaYnTBNFDGzEetYWNEjyxryHskNez9dSV38R",
  "key3": "64mf5qe4K6EvbhsZuDfqDurJWYH9YXtmGMKpiocFC7YSwHH56LZKeah2ArNh1f2c7ja72BkcyXwFGie219UECe1W",
  "key4": "3wCfoXqSo4qDj88MefXkn4yKDoy24qc5xSYWXjpK9cAqYgcyTb2o7jgLXFxhj7ZSDZh4bFU6vGaQo4bGRZ9ztHXQ",
  "key5": "4iHiipzeog7Sevy1VjEQY4cm8grPgKc5axwXkR2x6uaFcmuJZKjX9Khz4Xk4AzYSiCvooozRbMFTbEotozneDKha",
  "key6": "3H1eYbYATMme9D3qUx8EK5r5zUWuR8cwgFRmsPAe3YL34JaUrS7KEYjaWJdUSHLBdFkJD9rCENbDhRMWEweeMhfN",
  "key7": "4pEQAMN8m2GrzP2yrNGx4CZDhp6ghxds1hwEBFtyJYYRCW45g9CLHHvFWfPCPp5WE7qoWug4WDJP5FsQ8836yAMG",
  "key8": "wVWvMAc6oonfNr8rogMYzCocWeZu8hx2hWnF5GpJ3wZEaQ8VnrngbEXibtJrbmbCsuoMXCYePYsyzpuZY9cxwRh",
  "key9": "37N8uEgA9XGUvSq6Bvrxhznysm1VKYUKL5BmzEUaEUrRBu6quCNuzCr35uKM9Wka4WBq6AjxsGDYmEc27nLLNkvT",
  "key10": "4aS33HiRxwBNeXZFoe8cjtEAu8ocgVscUbEVpdHHSVC1t6Mcj9B31rgUxBqNgT3dKwm6jvHVK8BqiSsm74RQXfWy",
  "key11": "28dySyLm9yeGDQijvuidpuC2RKiVNcChAnZ9jXmm5zDPKM7ZeC5kNWxRRQHPP8ZiPgtRCFvJPMaotY9h2KU61LBQ",
  "key12": "3FypwhPbdey4dMYw9igbva2Hh39fqn3TmF2iZpFUGn3snxbPkMj2dSduSUrfMv7JCb9L9Ut8hmAvFKFJfVUnMiMH",
  "key13": "65ScZ63HrimgCCourN6pd9WasLhBpgLYQWrCbJKkNzxnpFXGgcuMLstgmgGTNSoUYGDC6iwDdLzWZGTzQfJNZ25q",
  "key14": "5uDnK3LdrkfYZyuNvvriBZMAkWNxVdLmWqcnxgKwpSeXWjiWVKDtDPcrFGWVEw9v4NdEYhoPcUXHkdtLPCWEixi2",
  "key15": "2joPyeTdmvDVttuJ493oKbu2gyfCwLPM5FggW53qDW2z84vmN3ZKAi3dyFHEcsaNEtHD37DDDqBR7EqLCTfTRo3o",
  "key16": "2nNafaSbqGJBbzZAQuBMB1PGzRbzSRZgPZsq5XeHXr3veLP6wZ5N2fAUdtkYvYtaAiYan1KwW5nfB4KpAVtkz81Y",
  "key17": "25zbGFDPYC96nPM7GgS5ETqgpDr1hEj7yHu3wfkfGGoDbhiy1tvs3YfGCvTogYzS6qgyqiQLLCZaGGD2UqheVF29",
  "key18": "65goEeE8w9PjvpWTjhcdDMYjoj6PQt66soXFhGWKAexDeQU1kckRZbSEvRfEpuJESY6A3S237ZXNu2tDJWkLJ1Gr",
  "key19": "4Sa5ZYFSByi67vtu76fg8iCv9jSBrznCqCS12zSdkUcVw8YRoLV2EUt7aLehtdSf7yb9LQaXfoLuX8YvMYHxmZq2",
  "key20": "uA7QeDCnh2T9HPWM7jYg3ZgUaALjiN2KwXxiNjAXosFryk9osb2fWpMLZjcVnBMQponWtC7hHux6spvgdJBLGLQ",
  "key21": "2sG4EQC7zqbDU2uwzCwPFHHP8B21DMq5nb2p5T6ieQiknT54EbeHvRGNczNiLxJei4VsoY4iEGyGZw9xWuKBWMcX",
  "key22": "4CziA7XV5jhMUsTErY4RwWmzxC1a9XUSR9uNZYb1wkcWw2XaWvKpryVoN9rEZFmeBZ66wBThY6JTbQwcG3363mrZ",
  "key23": "4dj9bxM3v8xvQFNtWq5Jnvbcwv4PpAEn3JTt1ceAjjBb4sVyZD8tQ1KBRdtoo4HFNT5EZXyddKbypnNP7d59HNwS",
  "key24": "ZqfoRFpZ2rmx3LWuymsDhSrw1n5NkEid6gxGPXREyDG2i8GgVPW23vS2iSH6CU1PMAev3eLssXGs5Jvqswkdh7p",
  "key25": "1PUkz2WjRvY8r5hyNAxrFeGf7AYJXRC2NwbTGQ6SCwa39Ak9TEZ8N1heHYLpripAxrAXvGENM8fQWNJQrBzQcGy",
  "key26": "2g1xyYBi1eDSym5DEJayURYiaYD4ujeyU22ebdix88QsMKGE9QUWx5PYWVhGAaJbZA6unSvXHkWmxBKebgiDmSDQ",
  "key27": "2r1b8Xa9qRiVEr3afHhFKbiGwsTxr5kJNv4q4AXzpNdtbedE6fHXDGxKGX8kutY3oVokoHRemejJ1GRG6kRZiYf5",
  "key28": "3W9F66sGARzyFEM7NL4G4pxX27uG5vQsbnLcseJ3dEHSVpYuRf1wQbVxuetkD9y3dyxwRMqcBYjCmGYbnDeURuXx",
  "key29": "fAamJNoM1LuVfnuF4BJCmj5RQBnkkN1yMq33yCcdNfTQP1m237UQRcz2eEBCU9B2P1AqjBf1ik7xxtQZiR9CLdU",
  "key30": "4dgq1nHPbASV52mVL6an4pyMxDSGVDVVc7CJwuYYS57R3iVzt7VNaaQuftADay1xJWQ7ePyixEfdVkA8XJNuwbDS",
  "key31": "2ycemxnZkXzEfsbt3NU1872yDYN5RbuJVeLWzj6971CNm9BqrUUadGYd7duaHfbzoJTaGUEG5mgUCWFFSEgabETs",
  "key32": "64tB5Gsqh4BrKMB2EbhmVPcxFvTb3L8vkkqD7ZTifo3sKAheU3vL3PQyA5we87F4jyXjroee8kTRZB57a78ZNunj",
  "key33": "678Ti9axCow8u4Pz2THQPj13N94aguYRRevMpmwiWm7jHYvEgZccvSQuvGwTbzQAM9ZiKARR447dMNfdBQt4M4bC"
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

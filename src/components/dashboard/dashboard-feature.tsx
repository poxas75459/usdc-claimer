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
    "5b9tFzsMDC3uujfWDEygLyBkm5VzWzFbwYfEYXDSXMcbb2tYfPxryWwtw24Pnfs2wZENmJrFc49GiMceLtLh5eyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25rDueiGsasLuPzPHRubStShSxPHhoUqQEEaixs23VqJPXMqZJHkPN2qFaACqdWCVMT95wwDzYGZMU2EpUvt6zf1",
  "key1": "3LapdM46QRrvi9ow1Q7m4RVAL48DPZyEEJutNRyKJqZst8iXCCRBi6gF8R33poyLsrF2FDpuWZDG79qG9UtPmH7K",
  "key2": "5nNEa4GKUSSMbMDPDVCAcF1up57wJCQSPvqnnDABucsPDGeqcknV99UpdPQE4EZG5rscqy22pHFUhhQoqViMAKev",
  "key3": "uXwV2Ab3wiw9wCtPT6AhNvz7RUXBkaFazLuCHSa2d8ztR2DZ1BATmtUpssthx66D2qA1r9VwjrZbiejLCcyD9kn",
  "key4": "uTk3orxQYfrHwwygBiJ7aPxSvVRwZDSUwXuCYbqyKSwXhhg7kdJtJ14kiZy5WPAgwPmsbvusPZCtz8dV2TLWEt3",
  "key5": "4bA3TTrzcX6XnD58i4WCxWQzv8mC9nDG3StyAtLqSzSM93HyQf3RgScBCndM7C5EyGWu3cu9WRso4RqJ9CNd2kfR",
  "key6": "2Rcy4CiNr9JJr9B68H3dLHVgQKTnogmdfhjSRPKRMNR6Yjj5jrPqYWNQ2AkPYAC7xwejtszLgW6jZMNCLPK4RmDs",
  "key7": "4RXm4o9PcuYKy9NHuaPWZTuXnCWVMSwTSNG3f8xJ2nJXiYiJPd8RXDxTVYeqvvd7QTVgeyp2rwp5RGmgQ8x41ef9",
  "key8": "5ZVcMqf53UPHrhVr1FnbnYJpWco2hmqRp2WhEegS12saTNkVfGaaNmiu9ysbou3ni8yyDUgThz3ziFqDnnUCFatG",
  "key9": "3suVfd7gAsWaqqxW8K7Uzcsuo9F6VJeywXTUiaB3sAJd9bbPxe9ufTGGie9kGwpW5kVrsVE6mBeFESGVoeuubfXN",
  "key10": "3r11BHoeZ5oKQnZ38fHnBi3MXRrEaMR16ihSxTMv3A3zmdUmE7Dqi4otHWBxuARkgqbadjZhjEUFBtQiUuTtvKsa",
  "key11": "Zt9fCnfNV9VCMe3gANQ5pEK8nHatPk2Gpbwf998CKKUsNxRy8chf1ieJvF41Uo7wdEy49Q7eDQxwwQXV4TgjSch",
  "key12": "4t8Kx8BASNUh2u2rwaw3GEw8ayJcGh7BLgEGLa38XEg4k3KDRrtzmx5hMptgA9LcjNLbJ5S2AS4AqJjrQMCgnHwE",
  "key13": "w4gf6oFKvXL759kZ1TN9snkvHschqSNB5d3DmXae4iTsZhHWbxtQbaAtnmoqiaxFUWJ3AmhLJ188z3KJ3SPmxhX",
  "key14": "3tQh145hf3WZRJw4tGYEwNZNKYN8bHU2qHRsBEaS7Mr6kA2sr9WuB6UMBXZrpW1mzLhstYa9JeKbBCSjYDj2pGK8",
  "key15": "4n2KNjM6YZUFz7VhuMuoj4yy8jyFTVtRVLghsNy8gw9s8wU4EsqkvR2rh5NXNfzr1brZmdMpFvQU7AHMvFUv8NoG",
  "key16": "vrm5zvsqykguBMhTWKPgQdnwyajGawf49ojsTC6nrQQN68xyVX6ynctTH9VwKtHA34V3cDo2asTfAxy3vNAZbB4",
  "key17": "KP4Zckt1X7VBMCUmhT995M35HWKpRqMcLgQNZX4ZuDrPQkAfhfizkW4mcAWmvvAiWKAd6Q7ReKXqi2rx8Q3B6T8",
  "key18": "21Ru2zKqwidySzgKc9BdaRYyV3m4ESBVCYUATBs7BDSdqR6ziwEqgNKbEFk6g9zANRvStQmkoehQJGiLD9CW6wGP",
  "key19": "5bLSAU3Nfmiw8oaqKMxj86ewTYt8gjQbR18yn2eLot6xCx76mZomWwtv9dS1CmxsRpd62ZgxdZ34VNeN43P2zrjC",
  "key20": "4Z3YKAU4oLAXS36kCqiWPwrZPceKX7PArBqcwRNn8RH1jKJ1senBLK5azCjgbsCQziFY1DhCSzctvnwEbvwxyeuG",
  "key21": "53DsfGtNbEtnZNThTyV3sgAsFhdTsuhktjmawcxqfMvHfz7SXn3nVXc57Y36YtM1YiLndNemJtZc2Y44wqejcgot",
  "key22": "36XWkN5QY95M3WMeJYUzCRYeJskG6Dzyi45oqeLxQQYpMdJEDDU9W469aAMKuQYnKi2c53W6RELDbZZjR3uL3tdn",
  "key23": "gVE1uMyPi8gPzSgTxVXANqECRmbTzFH2PveMr3og1p9YGSg6TsANUM7G9EEnFwMUPXjd58qWnhcjb8Z2oemL3Hg",
  "key24": "65NJo8Y7pt3uCX8XE3p76VwXbC6EjMGoUrUGYXcJMb6bFvVEbJCHsXczeu47mnoVvBKhrAhqmjfwVyunu6ZDKQky",
  "key25": "2ZRM6u2t25CzVcZ3gQmuNBy2Qxf8qRVb1vTBYV43oY9qQNwA4RtNubLL5TvSi4Hm3f4RxfL84rBaR1NbCP1zwQu7",
  "key26": "2cZBEg45hqgVQhQrWySBM2D1FiKtXtK8rwbh9R1nJYap4mGKUUfbWxnz2JLcWYW8Dg7Fd4CJcYGe6hyKq7m51f2z",
  "key27": "2tcMN6c91e8QLedsFFmyUVxKuoWFZspv8PzvwzPnv2UrmQBQksbzLJFkwaFHEeiipejLUF6ezbBUNafVJzUuNd1A",
  "key28": "577ChFFnCMVGvpiAd8ogAyEmBhXBK58AFi9z26Ljz3BwZHqB2mneUtmBJijpSmZ3Raad2THHaAKWkoBrmjczjSSc",
  "key29": "3abYLLD9ba7hNtysQ2yUn9Zh4ifKqNJJaYhaoy67cTo4XJK4ooJ3hkXqKJmqS3QvTEZ2mx2FubuTujBJAQDyD5kR",
  "key30": "2xLGJ1Qzgz7jwsMPyVXvAtjXkKo8rVSUrfZ7qy45Ngp6nK1717VCJPkVR2So8h8YVoTMFqmzeDXYbCz2UPm1wSoZ",
  "key31": "2fYu9fpqJBnM1W3xf73qGnbmyubkHGW7JRhCLQygUN6HCCXYirG7RWSF7RrCTq35voY1Cqw93BohxPczxLyi4qj2",
  "key32": "oewftKLo2FAnB4fwf2dFASRL3FtWnkKhU1zoH39cmDpwbcbEyoYag85nzJb9K9fpXx888FobNU7uDX7oSsQ4rWg",
  "key33": "5xZvnbKTAwoN9htbWj6XAQ3jZsYswuhSrq7Q95oVtev8EXavsPVwTJvpTrKSFbnzksxkj9apZQwZz6K675F6Fozh",
  "key34": "3JUGDnMMrkqTcFnM9SE2eoxEPBB4zA57NeGvaj2SPmENtKTA7zbJDGpiUjdqBhQiqBaF1ZpSLL9eSqe7SpHdkFSZ",
  "key35": "3hbm7chTZbcXvuMuKzcaaQRfoMb2wc3j3Uu8oYhX9wEmHFDSagKZ7FdR3QBjT9AY1uUGXb781zuG1vtB3XRVJmth",
  "key36": "2mREs2bNgtofxDfHAYqWgK9zfbFbLxREPkJH55PrmmDKdUsnGFuFtUqPBDG6zjiqhDsPXemLEYM1SDCUaRfMUmiA",
  "key37": "5Rrz3DMkWJLnyuMaRFAeop7PqK7c7Jz4iGFYxdgigzcr8wLp4HEB3UdHU96FXEC4VzH3adGKyUMbgkKCHHJKovJu",
  "key38": "HXGHDRX9kL2bdLWAvJwndX2w6QPrqr5GebymfTDVqGg9J5e3C3cv2n3rwyYj1XNzBR3YN1mLUUb37w4NJfcGvLC",
  "key39": "2NCqap1yuqKZWUzuTQeoADQL7xHLCDkbd43Po2VeBZi2KDMha4hjJAapeDKaFpxMuvjYF1AQrrpcNiBWLoAkXwkP",
  "key40": "5jJhVuKzqRmo9iCjR8ApNuDiZu8auMZvyzWWkfsdhm4mQQoGKzSo9WQDSWtA1hVvhCry7iomsyNBrnR691M766Nx",
  "key41": "63waD7viZfGCCYPKPFubMqA8UH4S4t2CkHRLxCoDEk8NfjdvFVfMoQYfGJJx3qwwkD3xMF1YCC3G4Y2XYQqwfuH6",
  "key42": "4mqWYTzA2xvN1Poyq6ztFA6w6VSucXLPK4WpmMP2U8iPxX9i7FXrCXyQdQUNURTw6gggKUqNAVJ1su7opBQSG6e"
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

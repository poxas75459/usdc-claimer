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
    "5jafF38dsGyHQN1sowq8RP3XyHiVU69FazP6M37mr4fZojE9zZCNX7LR5TE1iP7Twd3BJo84N5xt1HSAyQBvA6hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HP5aUkN9KvFxeBcekbVdAVhDrKQUxu5XyTDBqNYm15H7LrsFq62uuQhbe1ycWUBod4QN49gaCUmijB8DuzKeAT7",
  "key1": "4vfWjWeBm3oh1EwcQ2eVQfj2N52PswTcL5KARtU3xKpvkCSDEWZWwdDDgHwZCoECek5WELJdagwoHvh4X5jzvqu7",
  "key2": "42uvdCu1gCMepdxi7bK3S6pU2V41eBANtKr6tR4FaoJsu8ikP8Rms56GpbdTxN6oYzVcqg3QxfgdSSbVHWBN3XR3",
  "key3": "4NeCawQMu61K67hUtyDq5bsNZBwPPSRsiwT7AQZKVJzwkQ1Kb3QTqJPeddAoe1VJmmUD5LiG7NcbHtZLSKQup9t7",
  "key4": "4g8UDeNh1VZFb3XHJ72kpDMfic37zXcMkoKvWMwKQJdQkbZmV9PNBT6ieWh3sJQamDvjEGHMWEJXtgTKVc5VDv57",
  "key5": "4EkgPYAbJ86mwQUADBae2n7iXyVX2LocmYtmoce7cttyy86TVrhbHFXWZXSQc8H26Xzr3sYUrzSZJ3WKcv9WQtQY",
  "key6": "3PPCbyMLZPgohkG2sMz46uGpW6XFuw7AjyrbEg2hauQPj9BJZhmCnJJrs9UVz4msoKSwTgGLowLCYwL3FdVL4Wtr",
  "key7": "A6S4Xz8XmUsNKKVdGgXG26XV4gQM4RnyQH7kiW5EcFvwdHVWHb7KqaBcD4z5pGG1pNYArtr4iquFJu4stJPSzpS",
  "key8": "4whHuCFRSPDWbcPGZetacRfpMcuwWfaTqUt1BQaERwLAPYWMg7Xpb2sXXdJ1opD3C6M9zhRhGPKMGGr53bAPR8fn",
  "key9": "2UbLTtDxTTY8sjv3RFBo1UXZM6R3chzy5ZsYPCqyQmKAdCXZpaBZpjsHP13SyLRLqHRjYMZaVZdV2ZJeKReP7wEu",
  "key10": "4p7GweWagu52HZQHj72sxbfFBPosPke6K3H7GQowFVaC5mf4UVLCUUvKHSYVsD6R9LVCgj3od6wF7UaDGUdiUWcP",
  "key11": "4oZrcu4Qm9P6mQi7qjhP82vVXdeS7DBthufHAP9ZwqDhd5eitUc2tLMJNtggwb4A1RhLAw13oRivembEdedVWHuc",
  "key12": "2oDSMPdxvweHawdHpcKWMPY6ZdwdGHsUKJanCQMiKCPaTfc2gPx4bt3pHQFdsS4JX4PX985HW83a3ApMgBJCeo1a",
  "key13": "5s5dzJ6GPLrLnzXtdbqDECBdV6hBy2GVTiqKb1Q8D3J8TBnWTRgu9VQJRUvHdRSVta8RLJiDxzNmSUdZj8PRd8Qu",
  "key14": "3WPY7fwEAWoYFccd1xWRj9yFTbjLFtiMfANZr7CtuKpxH7FE8NMgKSTdFfMtatNfJDWJbjnpGvP596zb1yQzLBWD",
  "key15": "4gkqvcSHr4Zt16nsE8ypd4W2uXfW3Pba4aBMS6CEhvFMQGeLVwmHyFyfNYL1rM5i3e8t7bJkHBXLjNSdzvJbHzs2",
  "key16": "3AiEG5WF7Nwg1xsTnzPLLw6jemC7QeGAngTQRUFgN8uSkLFsGBuZ6ZFdchS7JohpW4AG84GQJy9mRVc9yLrEGMZ6",
  "key17": "3FzJP3MPgrcgfifWNcqPm4VAcVG7FffJ4kRu3oB9AVa3fzNnZJtZMRkshcNmvoCGD2CWoLPRJikqcFucjGEHSC1S",
  "key18": "jJwuSSzLyMi1Qhd7mfvcUAXCULUv813dWVqZDMkedd3FuttAQHPuh1ovfyEruaCdcutqzsuTe17RiwkSWbbnBbx",
  "key19": "463G9CvAhpp8hRScBzxpho4iokxxy2yR8VRND8UtDnYayWKABCG4QHbJmxhFz6iq24GLeNP9nCQLTKWXtjDQAuVU",
  "key20": "2WDjFwDWi38BzbWvkBRYnFwDuP5uBvAqpWEAnNpqwActR6m7s7grGMTHUAGqxwi6ezZ74MmyjFBrUYpFifdtEQLB",
  "key21": "3sZvcfBWytaWH8Vj2TVzLp4so4njNnH4xeSBXmfCSqVN6MbJko3ehSzixkScprh47YpuUNKKkiZuJVH2QCPsmZwB",
  "key22": "2fsLwMTvrkeYdB6NuaGFZQPnLXaF3zY6YhnaDBoBYo5RdC1zRNJw67BDN9sMZ1L5nKQv1Uf7JUXAanwnJ6n6v6gG",
  "key23": "4Vs9MCzxQ9V9hgXdooYF6xp67pCY15dQVPAvKYtMwcpJbU6L9MevZGa4GSHeDJXzuxxcFxCJi2yDMiJmPSCayfFp",
  "key24": "5Txd5EpH3dZaT87FLTVKeugR9ve8fRNRewQKsqrhFG7Y4D7T1hLTaXLSqVnWe8Rrig8MwpeR1i54ECj5yvLEuPEh",
  "key25": "38g2eM9vLfi2XnypVzBVDXqssfGL1nd2euQBjo5JacaByzJjhHyYsPhKqMJUe6JqdrnJzqPN6znVyMzJKAgLGj3U",
  "key26": "4eiBa58g9RczhkxRwJ79h3CabBoyYUEdkjh2cisBdippSK1ZzFzTFUrhR8W42wBBBGihqoqfLmGn7pwsLVAtFhnS",
  "key27": "2gV9H7bN1dLGZcWM5LU2A49q6cNeJvhfbbLkNCrFNzdzBaFYF6pYWffW4guKp2aE1YuTwc2NTthZBMAxvhMo2Dyr",
  "key28": "3XN6zSSnsqo7r77F2U8e3UeQ65K3tQ24UxQNrBf4q46csh9o5BCsyL749BMHKw6jQpeH4r3ophZmMpNDMEs9nPAt",
  "key29": "3dEzANacdNGa1EmGNT5CiGWCQmBrKMPTVqTXEY3THCvow65x9Fjg1H4xDUTBMwibZ2UVXhUMDH9gqhGg5W7ugjg2",
  "key30": "4hdmGoAaTFELBTyBP7DDCgEfnmQFktebAvnQi2s68Peur23rBi8ERqVD1eBP5NHmCiBoy1D9YUjdCx2hvNG5CRdC",
  "key31": "5xhigZuCQUxGboEmLRfgxUw68haesAsJHeu4jXEWqqkSBhe7RuHrujtsCrYbRYPNxnZoKJxEDPT2YmDMbQnLM5ah",
  "key32": "5DC3uH7qEXrmRKrHDRZt3f3f5yMFZzADBxeWs4ateSkNGCv9WuShqkmLBtyWoDRMxG4bgBPSHUBUpmmra8QTDcCz",
  "key33": "5z45L3VaGCFHZYpge4p4hBbsbZ2rT88UnZpcqRKjdJpNPm3EWcXkskvYqCoghNiY6khZB679tbXFodK2uZr6xdp7",
  "key34": "5VvByML5D4HT2foL2dCmvqrPmK4YY29oTrjH6wYeLfQy9jmrtsP4LY1HxVPDirVpPwGAqDDWgoggs6ifu2yAksuV",
  "key35": "3VpGUSg7iANy1o8pJtkzKNR5atBejrVsih47QVdFZ4kpK4JCh8z7pYQBDW69uc5wUZrf1aXDYprt8by1v2XvSCEh",
  "key36": "4YB4rGe1pyPtQ1Krq2bnG59RjadRiyLSiusBVwgC4j9eZfATUHmjFL4NAfG77B8RPUnJV8auxqcp7x6X9Nqh1hVu",
  "key37": "4MU1jx5rtHjyHYEc7yy5kTV87uNrvpLRfPT5KW4asqATDc8MdKozSBLmNSoT6T3UYR5c2DbHqCPUNzCwTX8sEsSd",
  "key38": "4JerH9ckzjCKnk3EVVRSRoAo8SU2F4b67r7UAtwaxjp5rqJ2mjtRTjs2S4SxaRtgEPX1bV2iTP4X65FhMhhvn9Sj",
  "key39": "3HdpRgDLfYxbQQAUjnaqAUgSPUqNah21eoVdFLU39rv2EBxMA4eSDidjAHFJhmADcfER3sT5isePdZFyNoYdrETT",
  "key40": "2B8hwQH4dv1MYuo1766mVWnDxfuGEXeg3posN5WTk28TATy59DUo1SRS9zRyUs7zJ64vpPR8FXH4c8XxaDw3SS9t",
  "key41": "3Dfn7SnVB7N3SzEG1A3DYzfGJNDVvwbH73RJPyCznQ7LbspzuEk9EgMS3fwLDhEeMD9VNo9pvSqyAKTVD75eN4eA",
  "key42": "3R2dueUvGhcB5CS6iUFNpFrFfTpXLg3dyVRRx8JikGThiqRsUvWv1JLmRi4qGB63NLxSawhra1fnzQGzXZLZAYTq",
  "key43": "4NdGnpihKm9Y8SjJU4AAoEizXby97r4BkJnknUPDxp2NpNzQxgvs88JPP9oZFKtfQHXVWCUvQQF2tUsSutunVAdQ",
  "key44": "kp1uA6eBLeyKdU9BpNZWi6hMVjyR6YMbPAR7Koxd426FFwR2kZeiJnJVfsE6BMc1HXH61iQg2Swo6bJxs6QFbhL"
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

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
    "4Vbje4RwiNZNhCN5sH9d4yZwnUEcPbwBEryMbcR9kyQy4LUBeTAb7RcdMvE7zoiodjGHaKkNs19XHSLHh2X1UpZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t5Li4ztvNDAFd8TQFFH4p41nxG36bBfAJJ8CsnhCxhgtf6YZXMoPhPY6jhUdvHERWmnmwx1cHDemxkzqVE3VzFK",
  "key1": "4XpeUrxc5byKvD3Qy1df96TRMZcbYdtJpKAXBawmXEfXP4EAa22ryjtykpxA4EzC5xu7eEeabUxPnMbh9xPyaaiL",
  "key2": "2f6cYYShKRwoRbyfqC6qihXaoa3BPYWKCSYD4HcjMvtY3cfa8UrmbTHbRP8GY9cgmVPiWJJCDwaFZUKQKHqSZx3L",
  "key3": "2sD8FJEPamRnyquP9fWNPsqXsp8XJAV98RNhBkqFTm7nzzqepAdAz5qJENVPf6Ny62M1JpJVbVmfWY7egRguNaKu",
  "key4": "7h5KqVmxKfGKt6M7oSD7fz2TvCaaNuKYSdEpMVKiPSZwJucLikWQjhnF43DH3rhoMwddE7ohMirDiJVYXB93pip",
  "key5": "2Y4efLPTbYqd4PnwFjdR3uq9iAA1i1WzX2EF8qsb2hjqt9KbWnhKt9g7VerpJrFMWbDmooG7wzGZCX8u8ZpDSRB5",
  "key6": "ozba8z8XwwNU3XyckpWb76A1WaLJJrM4yorTtEE8gpvq7K1mT2u2radPmrVc6YquUEhopPAuL7463EPXUGqJ5XN",
  "key7": "nGhbxADwjkzgYbWkwP5zcNijBJUo7PbQMWKB6wuEhvQuwJh3eEocxkVsE9gQGfhjSihABXboxTmsNRZ2129amiz",
  "key8": "5cWZDCxbDF625CDZr97YEoCY78EtPkSc47NrKEQ6YEU3BFbfq8N1fayL52yZJ9RaMceFrYhjXcF4o4YtQLcMJw1j",
  "key9": "3awgHMJzonUuaUYjw6CtPth823mvzgkzNizvPxr5YcCsm7MeuRMU5EtBrQgNWimkNkacZjx5kCnB2izyva7ZzrWA",
  "key10": "HxRu6JWqH3SczT8Tu6Y5Me44y7SnQZ1bgiTSyUXE1wP3Vs6UxtXuELzwpReYSgHRJMe2FdztMe6a8ZXjGCXRg11",
  "key11": "3EApVNETrj2etuqyF6pXLBbEARyCtQEvLWGKdjeVJoowDzQwrrdqzk8edog5QvwZdLX1TYD3yVL8S27n7cFkEYj6",
  "key12": "4kYt7kMG5KTp5oSCwZxQbzfPmCiU64C4hYZ5cJq9pyWWmc1d4115eJHdf6e84Sh237EsTf2TwN5BgCqbM2N7zczg",
  "key13": "3jQcHwopwBmGk327HjbomuYcxCe9VpvwGwX9DDYJViAKQk9T5LAvygyDpouWFomhDsiYHgLLE6efFV3RWh7MeZry",
  "key14": "46Juyy8jZquzShfQuML21t5ypWw4LVDeE6SgS2dHfS3YAba3oDuYXPF2BYCkVeZqGxUeAyXGKvpKUp9iWViJE3a7",
  "key15": "4gDGLyeLRsRNucF6Xqk2PWkkmppncJqz3NV9MLTVujLVdVdGXAYEq9YQGqX21XeNRtHYuTxQb5HsS1x6nKXerZfD",
  "key16": "53s7kdHA8Wiknf4aTymCHcuBuoCf9wXhodTpYHcUS3za8x4CGq6x5gRS4orGh1wirfqtnWuuY13EYuPrDo4FirKe",
  "key17": "2mTBzsQS2DrYnbNb3CEyjwucgPDEC73hTkeANRsmiH4ecupTnjPYNxbwzQi2XeKi8fzGgMzGFCEvqG1VF3of8cL6",
  "key18": "24KnUFJSZkQi5WnGYdiZgkgSq1KW9ocKHEEXmEBHRSBs7gkmVd82yt9yc9Y3GGfzGZ8qfrifMQVHWLTxU1hcnTAJ",
  "key19": "5La2yq651UsPCWLBH9dsiLbfCTUXFdV11sBMwenRGugT9SFFbyFHEgDCqWJjd9xEBun3yhHquipsVuXW1VGjZm6C",
  "key20": "5BLijuo4xhZ7vr7u9UZJz7UfQPwcWMX9dkNySDg79CjvvfXTpxdQESTFcxUNhtGBjPVbVdDJ5wTEqPMNfTtnonS4",
  "key21": "2ezCt2FvRAAnEiGERXSVyo4UmQBvpMSgZTuPj3YU7FmMqk5qC5aH27sScxw6BSX117oPNiH1YSJE5EDNQpTTbqmr",
  "key22": "5cKkMNxP9JVE7ZaQChLmqkUZVGpw3vY7BvwKLDN68Bgjdq4bHAvf5na2wasVhJSmBw359C5CEa9i6YBLyBBn9voT",
  "key23": "5oDAnpTuoTtdrV1zxQH2ZVaUCQeowAMLEHwcZtZxgjyeetuz1yMjMQ3X7vSnhgaTL46hnWrA6Pq1rGeS5d1tudgA",
  "key24": "3oJwMpkF2jG2g3aULKnrEbrFodK76VCFgzq39SRzc9twQ2JmzM2cn7sZGrt97xyZZgyYxb3xQ9ziogBpPr7b4GXk",
  "key25": "Rq89SkW1dhUFcRJ3tRmawvDQXo7jSBPRLSjWx1aKWXqzFsmFagrdtZXZwRJDSDTmKLRB1NLCgt8yYbNGBaexSpS",
  "key26": "5GViz8hxA2RdDkNx1nnpHdDSZFoqYaaQAVk3CCKxXM3U7W4A8NsUCXg5VwZPRCcCMc9koawNF8kUjgjfPGPgvQU3",
  "key27": "2Z5KVZ4x2NUZtGoGUz87pc548FcLYkwpiBQWXaaxWSm57VPxJnmBV9rQzfXmKPhnb849dU4jkeqHztG1rczwaTD8",
  "key28": "3qg3fCerQ9HtUNKztt3D8g44Eg8EsyTZsuSoEjxdVbfEn65ejekF3nSknXVaczWzM2tF2KMvBBMCDF4xbCMZuTkA",
  "key29": "XS2BFvNAUhwvYiQ2tpGypy8uwHUVHjCx5gA1Ye4fr2RzSuiQC158dPybPvYtKkiB4xZdSmahmEpMEcsLS1UCJjL",
  "key30": "5JARdnoF8HTE8rzmVx5denEsnhTSyRrPz5MAhN5FyeJkJvDvkT3Swsxh1GPZeWq5KUsJjZKbVa14jamPjq7bMLYA",
  "key31": "62gEtzx9SL4zd4vdyMmsNi97nhtgeHc1sxpLB7Xi8N7Gu4B9foEJNrGPQvbnFf5BntB89RJoNF9fF5AJ9q9G72Pw",
  "key32": "5z2vZaNFvBBNqkj8ycdHtyf7XKDyxd2VyH2QoitKYYgMpHUMyis8zuZDLVrYndo5ejkq4XcLmmXSvwyp1oZ9bhvd",
  "key33": "3MjJK7Psa5reHCUQtoFNRn4HH9LrBytwSYrKjet9jFNNJDvgxpaCA4eMxZMjqgAWPeJKzZyKD4664jPi1c2vqT8p",
  "key34": "soMDMzZLEGnuH5wMhpfDU9HyFLRspRho5BnyHQuYkWmXQMKjzd24TbtvNxsgERK4ka4oaKK2U9EVAhcCDFwiQox",
  "key35": "z3hyUiU6VNA9fnYFVpTD9XcmiEZpxheJ5SR7NjxreLgqwJ1fdXfekm4fd7s4hGXirbiRz6rn9QwEH214QTrLPqh",
  "key36": "21gqtfb1o92ZzYXz2odA8ko3iv2LdBHHt4S1Qqhj6sH8EsjLx5Tfkn9mj5hQqtDrSafcxWtNr1RKu2Mgv8SroR74",
  "key37": "2WD3g7pLMxyvAKSJdLAuxJgzzJw24BS9sWjAuQzSgjnGm7HDiATuwN4e174VW8uR969j7T7P5uDa3K2s7MTuZKQc",
  "key38": "38PeX2cjLrajvciTRHF92Rk2PhXDSz8zbJFLEqBxaZ9nS7n97zSAq9cKLVFTYd9LsMSTaW5cp4njx2JZrSahSAPu",
  "key39": "21QhzYMkWo3ASZ2k1A5coc1ChkxGjhoQeyeEScLoacUYjsBho7wtw5FyD1xpkyLx921kEQDDuguKUfwbGVsfiUet",
  "key40": "2LnrEaUrLEbyKtHjajYqqj4t1pCWP9QR4JgCDcT2BZAEf3AC78127z24vUN4B8hYdxy4qEq4FqgpNFksUdNjZmzw",
  "key41": "2tHU9gGVoA9eW7etrZ6cN8o6hN9oCTRN4aaNVEBNHmp2g4GsQxmKduo67KYUzLUjuxun4tggpotKvjanahfbitQs",
  "key42": "3JVz76N6d8AaQK2TgdsQLxNYAZYVbZpGghpdwHqRF68sjS57mtkA9y4F1w65F4WWB9QnKD45cZgSCXfesV5zJwgP",
  "key43": "4QJ1xP1uaQm8Yu4cYHEgzZz8F4SADv1USM9mBsGu6QzQgSAGxyTH6CQuYB2onyftoXhd9d6XaxTDiVtDgGptQbaB",
  "key44": "3GQX5Mpkm9nVyx3M1YaAqHtPX7vgF2pRfTabB4fqGvP5SfLVoqrzoykjNSJL5p9Gvo7eftHY8DQZPxPGWink3o3Q",
  "key45": "4KA1qp68UgiAfpik367Z4V851KaVBLs3kKvGiVUUFuKmi7KSS2rXVXtnG9GDvNJy17ZPjkEkYdZV6xZNgf9Cd3EN",
  "key46": "3YcaUiwTvjgjbAdaiT2d56qMW42t4vKJ1C69swinaGtGgiWSMfBxKxSoULkyrSwBVdmrZp8VGMkohrqfCp1KuuLD",
  "key47": "iPmZ6ssWQch3JnqDHVEeTrHH3xiUS5aXhn3wevQAyK1WUkTatQ7qeUGj4GkwYRV3Lx98bTGHNYNCGEJoPveAPwZ",
  "key48": "2yHmRqXTjQALZBXJEXTxnSrketh9gNMmuD1cNfpPxy5ooN1HwRSbt77avP9yTB1rpNhz2upEatQdiBH9ca4xGqyN"
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

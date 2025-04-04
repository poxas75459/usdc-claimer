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
    "U5uLWGWNPsPPEdqVAN8aZnkZcV55vDQ7Eboj9ATFMWMV5NHQr7TzVdmAiMPb6eXtSp88ij1yr6ujcvYMGd9eaDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x5qwFYyXA7HpVjJZ12MJ7maF9XVh9W1HcJbvWDYLUEiMU4iLzXpGu22Cv4DN9TiXj8jn1qdoV9GfXcAqZaZL7na",
  "key1": "3cK1CNYVB52NbRH5qvxmbdfzaSkkysrdgArcTeYC9fTaArcZRhZi5dbfvJjCyZXpWeVbWDPJK6HE4sxDvDXvvxoi",
  "key2": "4mBQajTetyhh2HcDdF9rQeTJjxPAk72bqc8Qp4sCN2VXc2MCeZwWk9nsRUWGxpxUSwGNyEAcxrzfYBiTDmHSGE9T",
  "key3": "66dhFdVKwkQuMn6pLervo1ZdUFM7XoDVPzDJAYngD15UpEGLKAdg5XLFpL31GyWvz6mpmidQdJJKioFnxjCjD2Vh",
  "key4": "4zwVtnxAyrqAawGG6uKY8NCskxtdJ3jTXw4s7sETEf6KyW5opTtpDvVacTGHuKnBNv827KkAspTCYiFmpphYkTrV",
  "key5": "54ujZ6eUuiHeAyQgw5Hq66vHiDihaJobGC6gmoKofmKVqKjAgb3Jb7ezA8Tjv5PQirSDkK1CVohSQ5kg7yeLsQbf",
  "key6": "2ZsTzqQU9C9mqiT1uYQhws9R62PVhdXg2DTNFGsVqp2Z2y4pcppe6TTAc88d35JXRXcyuZCuoUgnLjngG8r9GbiC",
  "key7": "k6NUNUYDnY6NU24awYt9dCepUpC3L6nkM8Uy9ZY9oEGfyGuNsjqahmdTgjBqSj9Hm4oh1wKvGf5ZFQhuMbimB9r",
  "key8": "3T7dcPWudsnFAhvQ7U6cynkztv6t7SB5VC15yDKNhaXkN948VhJNSDG3drzLquzT4VtppjB73v7MY7JFnJKB3JG1",
  "key9": "58bbF4q3XRaVVBykj8Hqotf1CJZmRg1HXT5iJQbZPhZGVU2uVD7b3A8Hw6NZJVG5Z5dn4yHMiKUHvDEK2yX7c9Je",
  "key10": "4WPU3UHbUxB9wxKQkSgmdGqz5at4BEtaLhTUT9Bpog2UV9awxtopvP88hzb8yBJCsymzz6kh4qQwrQSrJhyMsKzC",
  "key11": "LErqk8WGAgf55PpCi4DMLPUZ7pFnRTb6dmyMBPLocF3gNRuyEVzuS1RAqqJhTVy6x2RFPTEesK9drdS4NjZGe5F",
  "key12": "3echTpaiXkX1KH99ZYVC5HM2qkTkKnoaWrWcXGFCRreC5nwQ1BwhwpMhFBwduWW97EwFNzxTeNQKg6ZQY68ezXFD",
  "key13": "26RJMwfav7DucHFc4528RcLQRq9zANHgcGaP3Tcfu8EnE54UDYKcuLimvAnsN7zzwo6s7zzBugXfcNCHdtdNp7fk",
  "key14": "3pmCHJs8qtxzL8j9B4dDDjXoW12K6dTDBdQnzNdaRTjYMuDueeSTT8u7MdAWUxc1T9jdX84Ndxq3CqYQ44fULnAr",
  "key15": "4osE9W48X9ZRjwXmhcm3zAAb1ZbSMsw3ELHxgP6qQLZHVpSMNi7NZVzwF19zT9LntnMfxgpqNaRktzqN8L93YbHC",
  "key16": "32WXjVpcWUdtRKgicWLCaiFgWAdAUbjS2ZgrfaiBNhLufS6tvt4BMsEZAs2Zthwg4QRsuyK1aZ2rwN9RSB1AfHPx",
  "key17": "3ubfr2NRnFbLh4ceHoGSA379dS4vhpxdtojz5sM3XP7y2DDQLUccotJVSWv99nFVcw4FknACsEDL4mYwcij8dchQ",
  "key18": "4aVn31jzJT8Tzg9auJUpHM7cSYm5ADEXctud8GvoHij9YEsSCy14XUHs4Q5hd19J8b1S6MCez56WmL2mUG2Q6hZM",
  "key19": "2tetjWxCb7rKPQMMK2jg6CTAqm4f91RFnD1RyfHwwahjpxXif7hnQEUV3sJUjTUbVyZuTVHVk3SHU8atKHLxzp1x",
  "key20": "s7fhXnJLaJnpEVnZneZZkj84wUVY1HQAxDQUJit1h5VT6UqhdrhJR1zB9sB8bEUr2pHFHPWSqfRoJESSSTX7v4c",
  "key21": "3sqgLJNNhVKQjAcjGyFNJeBMDJzvUfDAV6KjbQa7fcxyfM8QZ1sxKE5RHotNwizjMn4SYSApXqGviDw9imGf1g9d",
  "key22": "2hd6MCRgg3gAXP7f3LjFvnLFnkp8dgtkztL9o7S3StRzwfpnpAcZC2HqPja716tMHyJL2k4wLjwBNA9Loe2oPvqW",
  "key23": "y1BfiF1hyCNb7nb6FBJz1KobWuVL9Yhn7CHr5dcKpUEM119AiCoPtvdcMw8fEykffyxQacmw51XiRjv9QNfQosU",
  "key24": "5uitHMYQ4ZeFHGSKYqx7QFYWwgV5xbx7wm1Sqsntheuzj1CWMxqT3FVSVsjE4WNjpfvzo6fHj83puCP5ZtYzjz9g",
  "key25": "eVHSJ667RKVTVdF2Xp2fdFM3tzMZ53tKrEc8SBeahRx4kh3iTE8jmVcn4XVPpQ8SWa1abJeN8KC43uPfSJqneL8",
  "key26": "3bNHjubpnSpRKp8LMDS7KHA456hg2paR91PMDrKJSxz4ESv4T3BBKnRYbbakLJMt4QkgVjiibU2CrFDSNzWWZsxd",
  "key27": "NGKV8NMqWQx9VxiFKYi3xDey1Rt5dEqyYcRyafpsVztFGff1sKek8SQ6puRKjS2EdsuRBTgk35kMWQLojgH3MRy",
  "key28": "366nQNut2gWYwLbKNh8sUKkcp9GVkLJSz6hH37X5KkvteBYYgGShdKWZAuXehfbieLPL6ECpz1Z7S2LBU1PbqRjm",
  "key29": "3Tg97TdgcHNZ39yNHcdd3in68RsZutv6z7jQPCbSU1eyRQSP5hADH7VgrVEn3kx8TjmqgPym9o23tmL6JTn6CQ5U",
  "key30": "3z1bkBJ8JS7UpDuTQLkRmKbLApPL9zAkoUfnTdxonLkmPTiNeSTdyuAQTgwfPgmJEv6irz3zrxFaM7BhxvQxBfv1",
  "key31": "2b8SHQKRYsZEh9M67qEpTJn7knrLsuw3QQbDjEpsLpxcXt3wNNeZHnApghURPwo5EzT83PKqXrog7SNBxH2nTuB6",
  "key32": "Nq8fXd7FUJLQxGLEsxvGx1kbKgZzYWjPkuNZZd2TY9U6UgovUmHmsN7Za3hB7Ea8eisPr8rpwgZMoh9eJFcG7fN",
  "key33": "2mqzQpwoj4oryeRb4mHJyZ1xMurBLmhxssvYA1qBHVRypPikFVwSydyHdxEtkaGVMU2mFhNS7U7BEFS96S1E4ys7",
  "key34": "3GxnhKrqCYwnGXQZ8LVwq9DYn6CQYZrAXz2jcndkH7txP8MPZ5SjF4fqFtPZPjeyVBJ6bPzTgxKPQ81wP9jto1Wt",
  "key35": "2Lsoz9Vk9RKTMz5pjmHjkdJvnijH6FmXkfW2Z76kXkXF5jWU3WUPafvS7zTKB4WrXkth6rgQSvkhKA2wU98dfkrv",
  "key36": "4C5YBAMyTa8jtzLmVwJ29yv3dcCkUonnkdkFrZ5wLvQzhs9im18VVHQz2LPS2zHS6infcEmeMcJGdY9oAj5CvboK",
  "key37": "3fp3PkZz1WkQ9sqoHEhKFDbwDgcLZUGkENoEnqaTDuLv9jfaA4cUVdZAHGBNh6b9iZraqFc5nMUMV8EjuLvXypwC",
  "key38": "3yLo7c1MFzKC7tSnQSg8J7d3sB9edrCctadBskqerk5agdZH7tpuLxSQEYgs3B2eo58reYTSzZBEQtt1Av4jo6x8",
  "key39": "2nS6WV5orKZ78WnQa8T97ftYuEpSFXHHG1inrMw34KZ8RpXYswvsRFHC9BxA2HFkuMXQwd7491e9LQb66sRkncR7",
  "key40": "3yR1tVUoXnvb4JfN2ddiuQrAdMYKdTzVqj2hY5K1RDgRGT5hQEsiLdP31WKNFaUiBKWTc12sPD82csCP4cbhQWKY",
  "key41": "4qVMFbUqX1fnR3TTw3Etvi2yVQrPcGh8hq6QzH3pNsAbgYnfC5YUqB6CFNoUA6LGD47hpSBua6rJfiLJTPDMkURk",
  "key42": "veauTAPxeERMCwg3oGfs4ZiqqwT6M3MAeshq13q8AbxfkP7m2oQD3aGepiFf9U55cxRG5XpmDRPUuy6hT4whcHQ",
  "key43": "3ydUD5z1nWHzLUieM3U1dmacSd5Rm2xBveWXvzAurjRXjzamnsfAPhCVsgW4z6pcJrJ8Unv5oc943wyeaqKCcryn",
  "key44": "4XVgAfCrgyz44zfFjiJ2v5x9dL7dv6rGvcwRf9pBHz8oPdCC2X6TGhB7RUWbTHAM9hu5yVermTUhY6u7VS6P7kpC",
  "key45": "66226AjqAv72s1odLzhiv244CN1Vf1sm89vCLpKRkinknFzV2WCsD72yhAgbvdmb8FGh2VLtAX6KbUwKwNsmRTq",
  "key46": "21yNkUrLfJVtWdhxW1362dZtbR6ThefPDUjvAM4kUkcbdPhrnaEjquCxdqg96yfuUmHhBKtCrrSEbFJxp4An94DM",
  "key47": "QeHP1fy5Pfv8wMzkjRsj1HVk4qQ7rfYWfqnP4ndcg4h67WUGJdNCAFFcqLw9m7JsvBdN2Wr6Bd5g6oXs23usv9t",
  "key48": "5uu8cK8PAhn1MXviaKoPgkLxVZp7cw3pnhZF8mbxZUk3u3SR99p2bVwqU5cmD9sZxy6nnE2Yz8z6pqTkAkFFWi7W"
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

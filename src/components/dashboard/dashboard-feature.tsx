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
    "66tbuYr4fcDBZpQQGYJiGz6LAHoP4pMgdoj47oMxh6Cv3SBMeX3vWDf7bBwsWyfvDwpNmYSuSVRQ1RNLtqCCcXcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wkWufu8ZP9bPxEvLPjUZQqK48AGMYJz15FkX55eZRFLjEJVNmxmFmQNfbAg4rJZ5Q21mThqx1m7DxWBwT8q6iyt",
  "key1": "4u7kyLVkwpCxEuf9V6drhmrENeMvhe4TVD6cthmjZudCawRZtvmh3owTj38dwbBcAY8JPN4ZRDhfV9ZVyh9qUyQW",
  "key2": "4SPX6H8CsPwRrC2NNEWccYVbuhRkPCpVjVXfVJZZbT5n444UtU3D7ezcunHJ479tPrdTF8iY78BxCskkmK9j7hT4",
  "key3": "2pRoBpCkKd9Vm64eZnuiG93jaQf2zLHdBmX2UdhTnTNMsw63H9WGBMZuCdnT89Buh5RpTjU4rzrXGdgSy15KQorD",
  "key4": "36fTGKtuGxdVbAn4i8LuxhU1HyxJWhtB3pzkQhdJW5samMfJCimXcLJaYiYKxbsqpMzKm78wSDKXghF7sZvZiXbP",
  "key5": "ptnxyrZAtbLhUMKjHbwWwbU5GJar8jXan4LZtWmDku8e3rQvNjCADXWdPEYbYfr8JPC1Fwrf77j8WSsYHb2dH2e",
  "key6": "5uyAsZmT1GE2g5xNZm8N8muhjXBXmR9WcN8o1kA5mbHycytEtLSrXkRSz682zvx5fx9ayQfFG9Dcf8w7oYFrbPr6",
  "key7": "5StiM2U4qhVTUbqCKiRHUTab9HA56H7q5AvWBHaoyj4pM3MSaToWw4dVpKZ5bVAs3UQc7SX5EZWwP8ZSdiLXyssz",
  "key8": "2p7ica4fjE52yN1PsdaAJWP43dRf469iD3YYXwLEFNCzAUur6evMmAwSgTUGNpuHKLTyFyP2c8RizdyZabALcvTw",
  "key9": "4379GrqYu7oj9VfM9h645wzxhrvZ2jhcYKPWJoyTk21QVPW9nTUQ6SBiNe6PRTHK1tCchA1oADbdMZaCaW11axDC",
  "key10": "3ohJ4QCVrwT1PDw8FvpodxvtShPzM99KHwJ36TaRcpXLNCGfJC7crYLxbAqNTTeFLT9729E3rqHnQMX4sH66RKPW",
  "key11": "3AjszLTJ5kjEWqRs9ncjT9JF7yVVhNw3kqgVUockupTJDLXx27ZTRyvcw6KbPVrZ23at3suCrrbadjwjCkyrKetB",
  "key12": "2V5sysUhCJd4575hjk7usRFJrWbh1uPeJXebhGkDLAgrFZToYXTF596Tnwju1mnbQEuoRYPL2ha7Dfd8JzdtpxoW",
  "key13": "3Ev4NM1PTTgFtSBhRmF6kQwtTVxkj4KTKZYAiULTiUbz3Lt22hrbHRWrWWQPvDNN4vxKELxDCfnbS9SmxZtLHTFw",
  "key14": "2wsXKvXoovsVhioZND9o6aRg9NizkQqcNfcJmCEkRP1jfMchZSGL8kraFMujpA2Mav523inJrBc11jkogeqE6PKS",
  "key15": "kU1Z5eSYZ4e4BNbBLufPUwZ23beZPrqg37ttYKgfm95qbc8Fte2BZzk8ZVyV5YLpeEqTKqpt2H5XyXUjLQyyk27",
  "key16": "54kjRFVYhnDeT8cYUqh5AVy57hf8MRm43XdfticM2jH5YMc5D1Z5KwjAN5Lbe46vgBLNYJ15Bd3tuN27RXrzNEJc",
  "key17": "4ALMRgncvRKuLkUw56yAokXtrhZDwTqq5PBxUHBjQ2MKWjxyMXiRLYWZyehVqtfkpZH4UuRRDm5ExJ11Rz9Te2ko",
  "key18": "3zZp4mHMrENjcMCsjEA9hnXQAfNdbLmFZbADH2CcFhwDp91mfZneTQjwi9Q8tHvwXVUZkAeTLrufAzJf6fhzyG1T",
  "key19": "PJWoTzjxCvtBaLn4rdH1C22BwC666m9LwidAYhgcX7g5tTzvNVTSRhXQZyaeNfFzfaznq2aqHUEkB1kbCNi7uxv",
  "key20": "AcEXWMwyMT4TfKkHLdmM5dc4b8RbcYD1yh7duLQdKkrTaHE3cMFQk2xFfFvoQ5khvuqkV7JwWVJ2pLYgZN7cB1E",
  "key21": "2JgszCNx8EVqyRcyBTYwyWcNU95vA2A5dM1FTTKyytWBaNgV1S3uxnnucmen58Bjf6DQLaeBXGKPdTq2zSGGF8da",
  "key22": "3vkj2iow8WfKqoPjMEvsR2QCei5nH3nPw39H1PkUjmhTGW3gLQwk3xhCsk7jdJ4LWjndoaWaVCYt3R7idy7vVFPx",
  "key23": "2Qad8WvkTBmvspiW428A7cjSUUSaavFqCMndSZJNjn1KmVEKkVawd5CSTRXZgp6mYBoaTwugX4tfVkUHf2WoKXRm",
  "key24": "4jvpeKsWXcLC2qWxRoe2pxKCYsnxyba9FDiubWaboCv71seecbANDKLLX5QfmbUuyjS4z1Vxme4CmpJrLbTiBxRN",
  "key25": "53U8un7aWhiUoqU2W3gcqvajKdM7f5jh2HC2ZnCBoMEuBonxfcmbb85wZjn3xUtbRUUuzQuR7TXDDXo1NoyHHNqb",
  "key26": "4b7wtYXLAmP6XFAJvuGQim6FicpenZzmgJN3T3AZqKoecAzTFDkRnr6yqdvVwka5KBhHYwQcrUgRWLs12XJYbknN",
  "key27": "ADgPXvTBNfybF5qLxUDKyCHSSTuPC3eu9LyoM9YxE1owSua7fVGQ5LZ8YpD1gMVCWhF2m6HH77tteeTzSHQiVzL",
  "key28": "5LpWDRSJBjKLCg4A19XCPKcVF6UUyWtjsGDmSteMgUjvBvH1X5MmAYVLiGdJ1H1Bfa9oCvDXNVavXc292nMAdTsM",
  "key29": "2jtCPgkSeC7HmrVimbjMhA9m7daVBBzzhmwJWhuFyRpQprK82QiMLNiTmmPK1jHuLv1Gfe1gvgAhSfs9ajw5x773",
  "key30": "3ey811L6cJWiPzK6iuMvFGPp6j89J6fra9qBZxsbsugamzWJHYinw3SMc78xHmcbvZSu1PKSLPDNXdv2rF2aSJph",
  "key31": "2ShXADbzRhvtVRbe4K51EgQjCPxMwx3mAi1wQfyZJjTr3GhGbpotKQuvkSihidxokusYuTbt8XAaJb27CABhDNhP",
  "key32": "4KPoxy3QoQWWjMw5JYezY9F39anBV1Wm47W74fXygJiQZtyxxF5voAEQFXhWGPoFU2Y14zbw47vY1CJ6m7R35dZj",
  "key33": "3fkruJiYSub9UagxvhssJva5gGcYxxSZDo8QNr21vhG31Kxrifv9ohfRQ3sarc3VoPgnbdn1bEYT8xEofUVT9GWx",
  "key34": "4wQq4KE9nSKxbSh1H7C8eanhu5XQmNHB16NWCRBB2AC3mDsH4HAeKvHvLhbuVMKVnBWA6X4Z2yLRicYfMa5caHj2",
  "key35": "3w3TS8JB6wo7ScMeVCbJGA5MuxysiTuBvxnZsBhUeqs2EUAvmGB3sT5TrzQq5uNRvE1KxUccGWnRF2RE9Cw2z6Hx",
  "key36": "35n4qGfEUeg9z7KtjnC4YmJvYLX2oSJVuDKVUp7iNTjPmgF4tTbgyNfGj8Yb71vDPnTer58Bk6BPHjqGMjDUqQqu",
  "key37": "4aV4MTcrQrtSd87eUkexaJGHGHNkary6u9DQFKXKBBJTqSVGe7syWqtiaEMimCMHogmJZWxyeuTkyhtEMbJ1roRP",
  "key38": "3A3JDiadVTGh67uqHrKv3JHSgLzMv5L6pFBDcdxpjpuLZmU6tQ1RxYpLYvhiBBaA534ucB9gdvtLmY5b8VSQuUJF",
  "key39": "JcJSMm4aRZTRsSJ1A12LaYbUmxJAEPNL7a47wcFgV6wCioMN4hbjNUfCPFy3q1fjMkMdy61MMfjWg2WrvVkbpEq",
  "key40": "48hJ7VAM85WuacE27HZkoonESUEStovZfuKX22LkzxtsyJoEDxKSMtcKikdh9FtAGmHc7tcYvcRHYzntq9ZuJ7kf",
  "key41": "2JBCNqWvkVAgsj4DQwoA9Tya8PXP27DX7yuXF5bWvKmyM4SbtuW9qKYhjPt7BxuENsKRGif6ZxrbewuVRCe6zwyb",
  "key42": "21evz6wf5nCFUveuQpzmG51Tp5V7N54mZSQXFWMHJ4eX4yByt5BBfviF5nxWjmH3b57sZyxS1VKe9xJfLhBb3s3S",
  "key43": "2w5Td2vfjbGF8Mc7VwxZexqewAoTPebmqTGW6HeR6wuX8Np9c15fxmmqUTXnz6ynFXufm38njAw7ub2BqXURCWm",
  "key44": "41DNwbmGgGDM5J1MkzkgH8XFVVsXHaMjTGbQTDgxsfmZo4x5haAXG1HScMzS1unGDQ5NzJJ1YVB13ZNLGuk1gLYw",
  "key45": "tiXyaGfBAdhPdGhDvj8YZiPoetKp65NjqAFvADMTuB28JC2LytivzhSAe82b72mcnwaydXDp1xT7wehp9zRzSBD",
  "key46": "5xP22o5KAmwtZSaY3jYTcttKhY6FAYwjvCmSWkNSgTCQGWLywmRTojPQAUoc9baV62dhFJQ1eWUkgRiDu4wAB5Q5"
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

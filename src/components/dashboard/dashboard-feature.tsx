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
    "2yS23CRazY1tE8E4qDBXZj4JdwFueNBf4APaPAhxSC7fGcWfiNLdytwYvHaoF2WrzdQALUXQEX9A6qNFMYdvhD5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3usJf6GNPZGeQ8ut7t7akbwe125Z7YtYyBxKDNefvBzqw6ioaVDsSLKi2gbqQkvsAAaywszxH5B8PYDmLjSm8RN2",
  "key1": "5g5Fqdg9hPNbo6CNU2TkQmgNE7tMNs67G6nVXPSkFgtuRjo1FLKe8FQxJMS1bP8fqscrYmgs1KfNFehUw5tMYi2W",
  "key2": "5Zq7XaaAb9ngR5RTPfoax4GSSF62rDELZCBA3KdHeZJFvoBsn3oqarvi5cQjQt28QfCb2RqWULCkrKm8nMVMNaeb",
  "key3": "2bgGEuakc2C6NH8pXqURV1EYEg6jYHmUhv5jJJkTn6DeRyYuxXPQvfbyp6mwdy1UK97zX4wi3UbrcY1EcoGr5zk3",
  "key4": "5SGtsJ68u9GFgF6ekCHmp78uqBe1RLMmBGDe996VTyXFDD4PMwc88sTdqbF5MnVVcvyKqRkoXdU2DpYjfYKyvrkn",
  "key5": "SuxWHaHtLH1K4cZtPpkYSg7zbpcpHQUo4Zb1ZJJZGQgD1JS46TRaawH3AgfEKUaSAepwGupeLujGL7cJec8A2Ca",
  "key6": "3GvXYdTmZUhByrPsjy2khyZ1hRcvNUUvRXcFu8uQA3NJcw2nxfjB6VE8NKyrDnUz37M24mmLuio4Wr56xVV1ZCKM",
  "key7": "2DBwzH59qNfzy7Fyp9dQZNQPxsDc1wUFe6C7M1iJUgdwmxQYyZdxifUPKRxua4YnbX5Nc9SsxtYJZqmdK3y5NueC",
  "key8": "2LtZEvxECguxafKXJemvnhC4khdtotKniu14BAsh6zREKyJbZwDZvgeHsTE8CwY3qKQqWmdu5FFCLzVu43wXMdej",
  "key9": "2ioyYgnzD7QFPv2dbVGFp22xiaQD5Ctdqxapf79pgWFhfMMVyBMjBNBZwmapgZgW3zpnsNRiFLRqjSFNYZsT1tqm",
  "key10": "2o3JdHNF6rcXzZFnYwCn5M8SZCnLR4TS3Mbft92YZ3Coxzfxu5Q1feZxfajmERVr3QEnHPxx2WpfonSTnPixhrLn",
  "key11": "4fhzgbD1Wd5bJB8fmGRHYrafAXopFYkLLUx9ZZbqSyPwuo7JGy8rmfrvARTTha4G6pKGnbhrtWTA7BdHYthVy68L",
  "key12": "mf8ePau5kwkCx3fUeBuRw7neSbGfBmG5TpnuNEhitSMgzq5SQVxxK8E93E4epPB5sGQNKrafjE25qnGfRwxf7Tb",
  "key13": "2t4HFmDeqVH6QATM28zhNPoaQMz7uCGMYHQuLVksM5pkrn6vNFPcjJnFRC3WER3CAxHHEVMxTpEeRsMaPuJFPTgE",
  "key14": "666wxMZaoe7aF657VvYi9anC5bmcbtHcqfBDH3MD5PnQMLfSq9WimAptMPzeyuSL7nkivJvSxqQRBzjELUsnjMUg",
  "key15": "yjPFYYS2cL1ydtqk1BDwjB96PutXQdZDZufRwwLFjJxVgAg7qrivQRNxwdpNVcyPDGfro3ZsWuiDZmuX9fVwtY4",
  "key16": "NdgL5rGdgDNfuD5sRvoTF1eRss4TG8SYDJDuC4q19iC9JFqBSZ7aJy7QDMdnRste38bTF9zkqnLxjqy66xUqEVT",
  "key17": "5X8XB6zvLEv3LBNV1tZggpEhpgK7xDhizY4cHxj9kKZ5o8o8eULG1xQLh5jiQ2KhJaf1CAVGMQ2Wz6XyhpjX7wPY",
  "key18": "5vjSzh2FoZPSgYvHURTT6sYRU5akpWDbirwSgnmg8a1u6WHb3xoaWsSe5hJsvSiLgAkTrbdfFj92G9VE8UNKyrYv",
  "key19": "3FrPuMmAtqzKDHgXFRUCdGJ5bhnZ7bxjbYdc55ZP4CdDYHRi2xGfA3XsLyvzVH8nTiMp1nvDxKuiEkgCWqBQnWFU",
  "key20": "5mpKiKMhoDQuXCTkHVbJL2b9AQ79etVQ1vdYaq5evM9ezjkoRNcVmsDU35eDtYszShoQg7joMvfku1wPiWgaCxMz",
  "key21": "45aV29hgKKM3V2YTEnqtaRJ5mx5878wgKiL9kAwtCqn7BbujNZp2pXjvbNq7DvDEnRmopezeCAK28BxR1aYHJLwP",
  "key22": "YLiprTe4LLkA79SG4cpkH3tkcN3GQjazPJ4RbU3CoDd2ByFKetz5CSfejHyXoHAcXzex67bCwa3dpAGLcvZxgH2",
  "key23": "2q4g5v11e4vuPKvww97JLCeGhkV88DbBdtD2zkvrZsFFxTnV5y2CNRFfrGCWcxJCLhCa6TBRC59wxdPVBmTsDnft",
  "key24": "4GbhodbVHLP8rExf7fkDnVKec2TXuiCxxtVGE5pQEK4JDSfJ5ZqNL2SL5e2qwHF4YFynTVFRETs4JMyYHxTBSCnF",
  "key25": "sWGqVLDhWR9GgjpeSbGXBntTBwmwWpF6o7FCaBQEtDhZe8ETa85BnoS8NGCFY7Vx7CaCn4YMWK1HWWjQGsP2JUd",
  "key26": "4Xmd96PhdMyRPyQmRqBt1tig8sTJ8PLwrCeFQRJZkqNgbuUtazcH3mmWpP9LCq618mFq1ejwZdWJUAY4PvgB4iBV",
  "key27": "2P3w5FPK6CUya5Wze1N515vZtVX2ACmsgnVQnmZxmWwkbuTuz9gAjb4AiuUEMwJEF7aMGHxw4ZpweZxjDFqETp5z",
  "key28": "48Ep7RVNam9eai5tjoK4NAbj4TRLdr57Zwcyyo4rCGKhQx1NMMqWBEjp8M2yPLw27PUmoZ8EZS4GeNjiST6nNrBY",
  "key29": "3rJe5ifnfion62EiHpLQvcyF7hqizbR7J5xiWFqN8PC3R6Fr9RoWSoEz3vCBcp8PNisuVijjUgeoQFXobS18bbrL",
  "key30": "rBLhfmCMkr8NGv8iNJwT362CPQc66rBvvzXgfS8pDCYbCK1BrfbsWBPbrieBYLyKEwEFH34ys2QXf2Pxhddm4bp",
  "key31": "4LSjns8cDUPnX9DwqvQwFUkaS8sNMJoFcqmKmWUJ2CDYHC9nmh8GAcd9yK9uumrQhSS7CYopNmG4z18GaDZUEjYr",
  "key32": "5qkFz3jvapaze7FudjgHyZn9XPJuaVwqYqbakLqeP2iHLu47JdCmhqNNrJzoUY33LUo3YWXebXXX9bY24bks5Qhd",
  "key33": "4TtYxoErYwphGoPVjCxN579fYXs6a5oAWw9S78vgzHmqYXLMg3BD9YcRFpBfL8ocUHyWUowQPWvMqRANarBJPkP7",
  "key34": "3o3fMavNih3AsY2mM4GAHnMHSxKDw1og719DnzWbyYzYtigNL6HUhj9GE1N9wVVmfbBtprSx5qe3yq8T6BueGqEN",
  "key35": "5yiaZu2kdKVe6ZvjrBghMiMLQYaayHy7Z4jGdWVgXUuEWR93b17m6XAFwP4io7KpPYpeLnN68mRftmsNYUqkkcwU",
  "key36": "5FL9yDhVJXRGGKC4E8SWfZkXExNwgS9KbhFSoEwVKGuDSSqB55eBaJPwi88LRDcDqm6UaThTFMRHsoKWeC1tN8vP",
  "key37": "5vwq6s81mKyXEMVofmCT7xBX2Vn9uEn5sxv6RT36dsmf1FRz9EPb1h9MbpMJ2XvdUqszo6M7gpGYVwXaXmTf6zqU",
  "key38": "8gK47CayN2d9ibKDJku8SJbsD4mZU1A4Q6tsxepZL92YtkJsWbJU91k4CwxxGzGVSUtqAffeHgWUgWNgrRsWxfw",
  "key39": "2NsQc72gaZkBpyyTzEbjed5YDhrdNaogcCsGexkD4V6qg3pZ3GjhTEPW9C7AagnLrcvpD7NV5GxHo7J21BRHo8bq",
  "key40": "5DMnKEFeUEVFrn7Td93WVJXb1FN96oXh58MNbzP52GmXk3pgx7aewEHVEDuVveexnKy7J9vfufMmzCzsbGXr3PYx",
  "key41": "4yJbjyxeXChomRnapp5h83bkdWhtnkRCSK9wNQ9cMzUfLi5ZBVLhexUkJaLNZnmkL5bDHwyPCKnouTczTfcGw1LC",
  "key42": "2VQo1AAWaXcWcknMexkUKqRqnTML3gywbry7tk4LmoDF49d2P89Nc2dSWfB6mFMTYb7fZvJ6FgNavYpKipkdCK58",
  "key43": "AvvMzjFnXhbE5zRzU4N5Q3VBmNF78yS8b2k7KxD8ebH9ECprznBxhTzVUATFiSawjfD62fdzCHfAhLWQLdMu6KY",
  "key44": "2Wzfmf7BXPdmC1kJg22rzwqa4orVGHpxWJzbARMtdhoA46tkGLdDJtRahfx3Zivj1YFPtAuMn5ap7K7G4pKFmU6Q",
  "key45": "3QE8q5xSFEo9chTVVREpRqHJuGWtLztXhGtVXJ8bnYUjyuiLTpW7L7EkYysYxuQMvNmPstG85Niv8XbpNoSR2hjG"
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

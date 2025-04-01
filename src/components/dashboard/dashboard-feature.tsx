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
    "3SyVGnjyEtiREtgLRjm5gqMPcQFgRWHULbBaCQ1Nzz6b8WuZQYswv1f5bV9n2pempZShTR1uHdnpaeuhPrBhNdFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iL7LBV4zCfpFmLgyDagRpqYd5aUWF4zd7wDqmmNctVPNLemCaeLzdiCzrZiYYwgR2u7sQaeCHVae922Zp7LJtQX",
  "key1": "65M4WqCZD9pwsJLTjfryPbpNQog1wWzD9epd8yj6o331qSE8FZBaSLo4WViEZvMij4b7iSrFevzUZ16TaYpNKFCK",
  "key2": "524oY9f784S6qLk5y5N1Nct4EVTMECJTB94MpRALuBrqvs4EnL4vwccwLFRGm4rcrFCPNvfBBUHS4K3Pp57i92fS",
  "key3": "2QaZRzHmm741iQeVDtH3dhU84KzeyP3kX8oTXEb1Jieikurzfgp69oa5r9dGSj5UfPiu8QKpYGPXanaBkrpeetoA",
  "key4": "Q5JAWdRtEBHrc6ugK25ai9jVsoBjSgWafz1cnxBvTYEHvLoTMYfmjb4B2occGjxrww15bTkrJgzYfi8z2Hu52rq",
  "key5": "2rS61Ty2FjnyLGtxizofBjBe8XEwguSsWBc5U1v8SD5PP3X4NMGEsyzz4zHD796tXDsSx5e2MXj9aKdWUu979rWS",
  "key6": "RjatEErpvH65Z95KpVp2UkXNwQL3fJ1gkNfMHRYVyCTZuJZvizaNBXPtBkJmh9GokKHNUmHk5HKTrWE8pXFZ7Y8",
  "key7": "3EJcFgrfVHFVUUtRStFp9GTcZhiHnQ88XKJ1CyJ3KtLEg2cRnMVX3NLyoXCeYYc8Fzinz8JztT2q4cJEaseWxYas",
  "key8": "njN83jn7dokkMLLNv5CMcbfXJuv5GyT4kxd5DZp1mxNiX1ec83EJTSGjrePvX4NqopiNLRLsWYP98RSAwdjXBsj",
  "key9": "3aqUag8WTktWvuKyRUssdHzvogpie7zETqzUBc48odvWZBCzVfxXeoX2jA16vXEgfpDsbwVznkmeTpRfETWrFZyT",
  "key10": "5Eiw6eCj1BpYNVy5yBskyesqTBHLxc6gXQR2oQiWQx4mxfEw5NsZeobLgYJgVwZi1PMPEUeKKSQcjHR7WxNvKUB1",
  "key11": "666UnhEqxQUFYLiV9zcioeozti3oJoXfkouttzkiZUVWqMbAF4p8FPZ2D8B243v7WUNduKEWX6VtoGQ4eo7c1ttH",
  "key12": "CLsYmqPJCgY3WtAZSubLG5DBZi47YH7LhgrMHH29X7Zk1s9RBtqCDVv8f1AFt9uWME6gAViZpfsmanounN8sG41",
  "key13": "vtDuEK4hvQaqW37VeX8yvkb9TLmy2Dg2jP87e65EQCyscR62WYMnomaj2MsHxRPKfH9Joqrn25RvpUt65RXvDNa",
  "key14": "KxQ1ZoNuXrNsGpm6hSGbYhkQT9rwRixqePuwvEGSdH5mAAocYTfvoG16r6Gtz7Cki4G3ZzjNvTw1YrUrgvfyJ9R",
  "key15": "4Ds8bVe3bAW3VTNBPj3ZCMaQZZtR7b21WU1iJbQaeaEEfjaicgkd2iVyhvq3sbuoh72SiFp8MzhGmzMGFvmXzXAX",
  "key16": "3qMoBW2XfVKusiQ8pFjowpAmRWzDD83pDDWvd9DrTvEbczSwRB6KYHEeC6cAw1o2qYwCEbbSAU4NJUt3Li2gaUSu",
  "key17": "5GWCbTmwNUnV5QHhMbEKokWTSqBLrCCPyvdoi8qSngFYfNPSv97x2ySAWT3aHSwpggr6C6DaDWU43yCS4pSA7PKy",
  "key18": "5GMM4CUGoRQkbR1fFbNwKrwabnL3Qf9vmsPfsKHx4AvauZDwRUSNbxUZM4VHdAuFtMQrWeVfkzqbtxMhoLn6ZMBX",
  "key19": "3wiGegKMCoKz9KnMrup2xVVN7WNBTXxu5UbBwEwwe1sGJe3rxA8y7kKFX3ZFbgBSiCeo3vZyuk24V6eoA9bL7QGw",
  "key20": "4dgHKe3sYSf2L3kePHpd5DrCzt4TCJNybQye5YyD33D5kTyNV5kPwj4wogTGRXyXQ88RsBkfZJDejrzzPbP9cPPZ",
  "key21": "26omo4P2L8ouvbAvtBBxJ2MVaFu1Fn3FYiEuXM37eMmxxJdifTtsxg9CJZSify6snoA12T9pLRGyVTfhUu88UU4f",
  "key22": "5SEHLGDf6d4jn8HWZENxxQwAwJPcjWwC81vvV3zHJGdsy7QbwuACimUer8xnrekm5zQjnwEEwvvGnN4kkRjEq9hW",
  "key23": "2WmVgtSJF9or75gbFYyDhuAM323FuSVabYc55g81TUT9KPKuCfJcqqY7JPmSDzSHDaGEVf1Vt97TxjS5s1Xxuprr",
  "key24": "5T3kEDNjPXpx2Q31unBwjcDrcRJGXGy39sDKR5pjU8Jvkd8hoMH4npGguez5JfLn59GQztNACAZSKvksDwFSPEmL",
  "key25": "4ujmfgyaLSZFt5mxr2FNkvGrJTf1KEtdhd5wv91b5yzcCRobRfeqhGp7UcVtb9NjJpyqTjeqy1y3P3C9cN9mKWL9",
  "key26": "2DmzS9vEAARJTbsTDV6qqrjA2ReUK1YMYK7XvphiuwHZ3uxD7oYeeGJE1GhfZC8QCPTr1L9GL6o5SjKN5XmjcERx",
  "key27": "3E5fEQW48RfBmdQTT5Wux4KCdqSwzERnZQS92LeCG1kha7pRQPZY1sErqnitzDgw3twvw3MY5SuxHRczuYz2fdK7",
  "key28": "3fojTwETXupLcpjPetdWNB1T6H8D3BQLt5vCYRdn19kiBEU3sPbPawsRoSEjXNXeXmHwRLnWGntv6kvy5tBAguX1",
  "key29": "tNHJnJyNVrEsr3X1xggnN4vf1mN44RXYgP6tX3s1Frp9MdRxJtr9YguP9aJEQpuy98vLjw3rUiF4C1yuKio4ky4",
  "key30": "4Rqzsfe9TRLzzWvm4Mk6d6wg9Cxk1DSc54axx3BKHA1v9KPf5vCzA7XERUjq8hhkAq5tGme5wW6yBjLPp4ypRx1S",
  "key31": "fPRBMfjR3LUoH1ttsauQ3MRNp2eDD7Kqoz1rQzDjMViXmwSPfS5b9DxXXXzBY8vAkoRNiAD1iQGc4HvooMFVsi8",
  "key32": "5ABH4uxJo7XDdmLibiKce7BXD7crMDSJ1EripcM5wYQVDofRrLowhQoxyffP5B8z8CVbnWKDYYQEFHqeW7UkdY2N",
  "key33": "5LKWwQvDrn9gG5G9JzacvaAKCkSJKXHHNmEuU5jgucbn7PDb7m448FDr5twjyc3BDhYRnHhSeGcZLVJ2h6AM24eT",
  "key34": "2VpYGmRw8hb4DwBffkVwtnniBj2fYVzc4L44twxLk5kG8kxyDWKLMJYjdqKrX6tQe3ruHwUgu9EbmXX33Ndgiu4w",
  "key35": "4N5CZPy7Tcp2QrSmmoriWLcUSgFXcDFQraTXgXXZmutMxhDgDzUFSMc2TTshHmNCeK8ax44ZveF4h8LS5rfUwHCx",
  "key36": "2qpf1AcG9gjFZw5Hpfex5U8pHKZ6qdrNqcPobU1S9F5cRPLz6J5tfr88umkiKTeLqnZB2jq9bUBCjzTSVc8ob19R",
  "key37": "31thVaJk3GgtDab3stkxQrghDZQFWMXcHEoP38faSrh1rksrKKrN68zNYA2G2Lbyqjn2Kwci8wtTFfh6YCZPaXB8",
  "key38": "3D8TgCbyTQjXBpw9AhpAxDtmqoMEGbRTTJiqXn9pzxz64ozss5KzVfTg7K8VcxJMnTth8aGWatetKPNYTuBunbDA",
  "key39": "3jGQxb9ETFHxc7VZ5rVuciSwyptQHzFMK9AVjD6Rcqv5PHRXmoLZ4tBizHEuCHXL9wcJ5yVBP1eCDwY95zkd8gyL",
  "key40": "4bdZ4jGQ743RZVVeAYpgsiLcJxbMZ7VRrZwdAbG98Y8jbQ3jqktehPRN9VBib1Jca9UhBfAJrcjRRfBDJVgU6GiB",
  "key41": "3Paunwoti5ZSEypemKQksbWzaVsM34xqmVEUAFGZnScYMv9hQyiYMzA7FAheDoD9bxmeYALgrULEPk3DKVCL26TH",
  "key42": "46rSofhr7SMg6FV72xxgnWZkBeaPpdPG4U5nQEb6tNvf2khQMFhEmmduNmDVWq1BdQmQ6u3fHqJUL14rZo3ooYmb",
  "key43": "2wKbJjHCPdFha8CSUbjMgRqXrs3Sr1xFpWUYjjGtJWNiDZy8xPvCXhDdfKB5YPATs6ZDZ8Tme7NRkj12rvyfsuLm",
  "key44": "4GdneAaiYvdWa2rij2eNMHQEdnaJWYrowZ6bd3QBsdWaw8tZU6whFsYnSbDowfi883jTcwhRPZp5TWDFsyzoSfUW",
  "key45": "nbFmuEeQH33AcheTzgXzsw6psKaTv5LiNocXTtMYJ24RYTaLrmSEDGu4Tqm8syUUoLCcyqUyEVv7YUdxMS2iKuU"
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

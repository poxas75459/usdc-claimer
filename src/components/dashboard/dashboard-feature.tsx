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
    "uPkRyeWyLnzNqNzvSvLKpbqE8Faep9AWysmnUKJHRYo4khUgnLRDLgw2zKqarGyjCXir6UYEwW9D7Svu4NUmvJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wWgj2ZFr7Z95AJKWkb4BeR2idANEHPQfKh2nVTiWrirgZ3vXxfMdE1Ld2wemHnQcJZDGiZ3mUMCdB9gntKpHy7k",
  "key1": "ATJS1MfYjUxLhue6a4RsupeQXX7LdFzNRSwtU1shhQSAUWhpA45GQDmwMRYbuA75ywueRLUC4cQPsn1XSXgBYSV",
  "key2": "4psUPiV6941CXeCGHed7FDiknraXXiypY3RWVzmbA4HV9HLxxfKtN96kTb7R4A5UmNfaYH6ZCC6phCMFBqBCewH3",
  "key3": "49uCf66AmELMXmsf5nvcvRHpBL9KACMZb7v3Zvqa566XiuJVSyH5VRWzKRR4cZTYMbDiuCJuadK22GsuckZUphYr",
  "key4": "2GmBynjQBWXoJzq5wsZMwHq4sjopP32dUePguv9e6PwjokRa8h7U99H96tBsDBKD5mW5hHffXFJXV6Zd7bHnNRpm",
  "key5": "5uWcePzLgjPpM7dgLZNnjmomssJ1GefTaYVttmrAv8NmCRKM2QuhUb9mgAiUqP5Mdc97HMia4eRCfQBJXRioZqEC",
  "key6": "5yMmP9UF4Scw7bKSsYnusZCtx3Gmar41CGePDTQH4TBA2iBHTn7pZDZvCucy9baK5pa4TumVvfc8cHXoJHBv13Wc",
  "key7": "2SVyrggYa4bZQu9c8mVW3m6DxHpZqQb9pkoyh4JYSWhixXU3VrCme638cx8hoqU7i9Fovykzg2EUdRwe1V5jzoYR",
  "key8": "3Agu56tenFrmtPHJBv6npDv4m6zXoKJdcPQYZn9Bnk39aekfXeQM1TqXd1UdQ4yjNChMp2XS4cV8uvw17jcBTogp",
  "key9": "2pXzF8HCUGtGWZnkjBYg714Z8CWpRAcZd7kKnH4eWwg6o367CQ1mQ1fSZgoNXShKBzS7Kfcq6C1UKAQc5R5oGNwQ",
  "key10": "47u5R3HkpLUpAj6pQ4gYELgNNGyxqbasGqn4Xfn5oEKUQYd2fZF2bKK5TUig5JCjk241Y2T7F6c6Nv5Cs3cBLRPk",
  "key11": "cQZhJe9tDqLA4v6A1HfUXbftqZhqpZL61pdxwMKnrVLPL59zBvaF8jbEKiWb5C4eqVfZoXoahbZ4qPy9a8MnT38",
  "key12": "47B51Croqv8HFfN4GE9tLq5QQgE82pNKKuGWRsmiHU3uJ1BgN9mJKbiEJhVPtVV9jZPdD7CttPM5TgYBjHJt6QzH",
  "key13": "2GVftZGGbPQLT6iVwP2DAoxCW16v7w2L6Ba3hDep5zofMUgyepdbZ36kUhAxvqcXc6oaMsPv1L6426AwFwy8iZAy",
  "key14": "5dYPdDEb2EJktRYMBcot8C3uDMYeP63aftL5nwmk2Rtu6PSVAh8DVexiaXC6tAyUJPETrphb1SeaE5B81g7ss8UA",
  "key15": "5FU6Me9UvNUU9MuaQPMxYG1KyPB69rrCSZ5rKXWe27koPE5PWqrgQgUes2s33zes7d77Y9K815AASsbxKDboAi5v",
  "key16": "44tcpRLpFNR8M5roavBUT6aVpn5jumnXMtnEuqmPtxgDrr63DYjveRpZiyLqbiNEPKiv6sz1QAaaGiwEmxXFbVLj",
  "key17": "27bjbkKFE7muhZAW9ezr1u8f7jcx3K1MbzZ2FyVjELT7AznpKkp7AR7Jf27ntUd4BaD8Q3H17vwMVX5HGK4tNxJR",
  "key18": "5yajEFyyPG2TMoMAALxBoqZrPQF3SwAR7SLVQBfRpy4bzxnSLrbrskLJjQc3AP6qXcSncZztRePSPKqrD1AFZaaM",
  "key19": "3ejVtF3zaY278xmMatF6CcUMgkWqhwfgw47DZ8fR42fDLkQsWoHYUNjZsbxQnyV9m9qLVZbRtpc5JmBPFJ7sNYGf",
  "key20": "BcJQYiZXN3XJuifutSPBfTabsrcyMSQkaYez97T9VKsnWG3vYatqeV6MjZskstcvQ5CyWPmEGg8rZNvjvQ4rkft",
  "key21": "2fPqYAXiCZKyVGosGxLqNiFnpTaYdFcTgB6Zpahgrmr55HFepTPrgQjUP4WgC8HTA3iqdQHYkNb9AwWBnfSvGDd1",
  "key22": "2vZwkABDjFJcZW6b8xwv67YjuxRjQZw43r3BYheX5qmUWPe7heaSwj43RRsU65R2NkQLJf8HvKUy95SBg8mtuYj4",
  "key23": "4JmVdXh3KsYNaQXdA1vQxyPqJfmEErNA5ta6knSap8ruhCcJuwQhSmxxaF5STDEfb8EDEgswphiMfjeUjyXBe8KU",
  "key24": "5rov2mq9FFYA45rmPXTfDTgAjoht2Y4RVqKcQDFwNWMx7Bu5cj33qY9b2ohweRjtJkzqrxxzuvKgWnXLU5ALotGD",
  "key25": "5U2sRJAaPNCKKRCZ7QwRsR6A2pCzRLqLE7xujGBwC6YoTEnPW39vF9NSh3FadpojmkhkLJ6k9ijNusfDm6fks3mw",
  "key26": "3QY7ZK6xAksNT9Zwzu15iG5SssHGDGK6Sn5AvbVM9wruQq3P4kP3WxFaRxdgJCgBrNPYuY2zRKtq5Y7Krxm63fKP",
  "key27": "5pq2ncyagDyJY6GwP9PiHbXqNu7Z7pC9cvqTj8yvRhwdijPqYpUFHjCGaRFyuxnqWmDjDpytAeuJ8MMY5iS3HFMD",
  "key28": "5Pv2fN1zSLD8CUjfNe7KmaWft5PuG1GBUj2xC8a9Mpi52q72w6CvRbGu3N6L1831XpmbTmSKX7araEP9VnsabnyN",
  "key29": "2gfpKSoDZG5nKXDomrqNZartFK9XKDDqKHLxnbgj8w5WbwJHgzczgvL4oEXtzDKFnhzTKaREj5JFbarm5b22RX3g",
  "key30": "4xrNwfYfiUvdBUmrQuMaRAKXap7w3QNT6eGxRBpfCHSdFjgTQHM2WxxBDxxW1FyccbAPQvrU4W4iZZW6pyaVyHeN",
  "key31": "4AydnRnuaubiNFugkZSGKUhZMePeJxBcXpg34C5gMixBX3iT8mSaTXue8YKjzeMxuLei12hx2mVsSdntSy8kZ4gw",
  "key32": "2G6x7VJhJsJAAm45Q3DwUVKySPZfiNZUZqkfsxMLpsspXicgU5Y2MTicqfevq9RCe6vR2JZGnFkFwsGjoRmaBFRH",
  "key33": "5pp8VS6U9tjWEQrJ4Mwyfzx6qiwDkTb3WKbqe7fDS4mixWhrw1JK4jrBWMi5fc4fWWNXmNBD39q2qTicMUfVXyyc",
  "key34": "4ycQK1nhQk8U4iJqwRtvNZwFpPTjHMDSuFQrPetUeRsqNSASws39C3N6waNrnc1aM3SWQq9Ghz69y49i8BSuzQg6",
  "key35": "5PWSC7gp3YgMTMpY51hFYYF22EFhpjByxNVGmR7jx6KNVJHhh7RkAy7B8mx4EVeSmhW1DDoepcJs8x8tCEJcAr4",
  "key36": "4KuiLsrURJybyGTtxbGNggvSVfyAjvz7pRPsdykygN5QDCpMDEkqr6ZaPXQrC8Tuz7dQnAM1EPcxDwSorbRvQUsn",
  "key37": "YDU1Q6q4wSq2ujkgo4QLMWB5y6XRUUVe7G5ieM6gBdFWhjpQ1znFSYLqSiK7Co3opWngPNU2GXBEBRzDyhaa5tr",
  "key38": "tTjgWdhHmWzPjXKrZrkBndqL1mu6wahVUzauUd2Tzb4nk55hi9LREDidPu2i7xZNnfNhLGshy1RQUByib57toAr",
  "key39": "3vSqAzqa5FeABGy9fqyVCLvKvz4NdTomjRtk7R4RG6GxhLkrxa9f6Ru8hpR1CePREWeC8fwqBzMaUvoop2Mj1qpe",
  "key40": "49cs9ZeK1eHEbR6PZEopCn7zVMSbtPPpZZ3GEnBbaroubZhKSbttCZEJ2QME2ndPkLvp1qAWPZMkQz8NrQQisieD",
  "key41": "4yfvTES8ozyi2jG51iyFH7M9g3QBUQEeFaQFv6VVwxbmdxftAWuSQDq5aYRD7RHdYPoAtHtsGdsDWkz9m5Wqjsd4",
  "key42": "42wpEqVH5PVAwdjDvs3YHFpei5JKP4yG1hTx4mn3tH1nd3rBXHvJDMpZcX1AhTfrEZ5241KMqn86U5K6FjajNcLA",
  "key43": "4T1RX1uebDvD36kGc3e3WzVqHb8E9ZbTYXmAZCfRJqzSRn7xN3Q4ktQvdEaFnjjyE46BjKnzHEGnH4DixjAQ5jnc",
  "key44": "3hKjtTZPUTXTrQ6iE234w28GzRdxCnYabXV1jcuTZnvCV7t4jkeRo1dVdBMUQeRdExGhUgkJJXfUKaJM1Ln6Hs9M"
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

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
    "4cEgbbn2TDfAL6r1Qm1TNie4c7X7N7AmxTxQwNBrdiPPAuvxNx9qK8dM4TekU9ZQHN7FSbev8ckhqfifQd9tDyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ybLnAn7FAhpknjLNdbZyVfLRjQFQ2MdQ62KNxYoQDxZxgG3vSh1Qxb8yHcSzsQ6UWFKnh67GSd7h7TQUm5R1tfF",
  "key1": "7aL3Eq5NcQxTvEhURgudF4nGV8aBKqmzFDc7Eo1qiW6Z1136kqU8WvMJkbWTMgTfYKnQwoYLhUAHB1NNsiqXk3Z",
  "key2": "Wc7VuP4s7Z6gwpZWmyDciQ4A4PquyADkguDdwHMUkWvdkBP62a3BUBzBTQDbQf43B6dQuAYLy16mDSJbjesi6hu",
  "key3": "3hKJwajpqwuAmzw7P8BmNYksJuUWS7SQogLVUBLWqdLZ38LtZtB8pvXMTuHCuWgGHE4MA7tJFDPvEqekAfvYSkMk",
  "key4": "skFqZJ1v4w1BkdJcoaeywbkHkDzG6QLNwS6Ddn8VP3bFctPkGVjbpPxnfhTwSD43nZoesSWwuDgjfDExdggY7AY",
  "key5": "FpTxJaLhMifjQjKnmcqSxVSreMXuGVUHKvJjjXo3zxuKJzCDHpq2WBva2Xz56LjmgUWsJSbxhRrQuToFqB6SPJ7",
  "key6": "3sXX5cK4u3mSYg6SwXvJAZCpFxZymNUdFHLz6QvULX8zZ4oYSiUKuqrp6PoQz6V9AX9s4j4u59VtKYf9uFqtu76D",
  "key7": "66NNJxpKN1VqBd9Zr43CBGnv7pjZviTxzK4o7z8dFisKiYbfJNJr5jb9hwN1awGhhB1cPg9wR3ffZvqQ5AVLa225",
  "key8": "AAsLHBk12AxJzYe9b71EHwCZ5e2kF8GcR51pbJ2VRZ7k8HVCGkSUkcqZfMrW98EAGq1JfFpLvKWHspE8jTi8xvk",
  "key9": "5pyry1GCUX9WwV2Nbh9wiRhiNj4icoRdZY1iQwFNPxKgdQhRq5SiXZvdKihqnj6qHYmmFXqoqhWeNfZiZs6LSzBN",
  "key10": "BVJ2T6XTjYF4YrgMRypFMdDJL2sNkgRK9YmDCdKDL2Yj6ZchinMH9Uen1prx95zegq3iGQhchW6m23Q4d9VFqe4",
  "key11": "31WVSdh7VYqJEiibsGXDVYmJWkuNZJ9nbb5QHpM5eemBqsB8SVq6eKaf6E7kY5RAwQ7So3Nqq9a96gLnrRum3z85",
  "key12": "2DMZHCXpkiNLgWf2dy1N9hcxNMy3rxbbRT7HGikLkE6NEvDiPCXT6V4av5r7BtXFCWT3mHEp43pAHkddBpYsQFaf",
  "key13": "2NwGUVjKkDB1rk8jvfAfHqAHs5vSawP2X5SbJ37jjJbfH1SYqpdTcdMdtiBXykCyqk1PUqK5s6PkpngtirexjKBZ",
  "key14": "43rYqrZJZL3bhQrxuDm9ui6f1F1t8qbuyQaA9d6zEBJvmgccN7nsaqXqnsHD5kRbBV2nSwRHm2sB9rxbLBFYTszW",
  "key15": "2x3t6ruDxkS7SYSUc72DwGwTHVPttw4uwWtMBFXSLChRbsEGZ2bomY2cPe5b2N2yRRGEyCZqmEXQG7SweQCqGbR1",
  "key16": "2o8RX9dG6qnwo12ZmTxg5n6f3DsSiJjaZneNUSorUHesJ9jSgosF9aUqscEDGHSwrdaKZ1Yss9JKCKFhyvhwwk55",
  "key17": "2w7YQFfsuLgCgSaQvFGduMzfujnS8GuSfyNENKGqU3Ev6RGjHcmXfCwNSu8jXgAQpWZ7KffCxPJLR8NvkiNmXXwy",
  "key18": "5WsJHcFGpCwupDrRMvvUfpf91tAY1DoHCvAFAvZCgSS2uNyJUp1AsnmhpK5hbScTyppfYECu3LqqcpjtMFGE6ib9",
  "key19": "3RNev9sitmSxQAXnCSpUNsBB8c1BwDK8987u9s7pR7VEwP1FTbm8PqWbsoLG6WywXhjMzDrxGN4sCERPubwPFv7L",
  "key20": "2Z9RUKCtjsPdZTb47jFgV6tHRY8i5wPiaVZ3C9EBdEWbxwyXtSpKwZqR7xoEVNyYiLqkHgQuWtqG3GKWNG1fsJmH",
  "key21": "4g6xFUAGLdiHZe9PPh3y47A1ruYq14DcKvibmwHovWWo8pUi5CLX68WBrU1CsrbVcx51EoFvzL8BGAGq4CZNWMv6",
  "key22": "4z22Vsw7M4j5MQH13Nxd9pue1tr7LybvgyUMd5kUrqv6w9seLDPdADTTJ1x1TESTxmAiHxPPj6S585JVoAxNf2EE",
  "key23": "29tAScDGZFJTS5kFWHZ9c7jhM4pRkhWpcEsksYE1WK4o2E8iYnhxb2FqJDByf7vRU3im8sS6LQwT4y3HmtTD9QNe",
  "key24": "3hRqAFpZYPkM7epdA8UQF6grm2MAR64xmVjatv2mF63PK37ihj9LrtPxNutWyEF2KyB5QJsU1kcwN2jrGXX5jb4b",
  "key25": "2hkainfsjnSrcpPiz5a1qFJjgaeJdECs4LPgWHFihm5XiRd8fh7fuSmFGow9LxKVuVpJQufXxfj9KevArBeCCv7a",
  "key26": "4QSMTFxThqDGYqRaamWdNJ4ASrcJ465KAiyzRWnD4wpHqaPKVqLQp5DbVbB1U4RCGepJswmtFDWa3NgCviur9WXh",
  "key27": "XF1hdM1wTMy7KCrAftF7CPuHRLb18PhQ5mEFGf9iVswFziZbYnqzGAFtYSUaZXXwhtHSKavCrJfssnBbcjjmJ6e",
  "key28": "2AGjEMUE7RL5FsNA27TMyeLz2GjVH1rzVDp35bHWtKytxYSJjd6J7z3EPZ3hekXsB4ZUfMK5asLw4LhZPU7Z2xiN",
  "key29": "39Ld3PrUPtrneEfgLTzEWMqGzm22Uf1iDkPRB12NAQBtugRncbFheWR77VMTAahHruB1UCVWwKeYFHbCmfXGMD7h",
  "key30": "3DGvaTGVBcEoVUwkyaZezFnpUQ3eenbvCrHidJxReTmLr1Q9Rethwv9WrdXQTKstuqYcgc3rASHGVg6MoXsaMreV",
  "key31": "5HFShmgN2PzojviBpJhpM4DoMFK9rbzeqD6sZM5U1aW4WmD7uyh7DZtMh81ZMAq34gfcR7khH89ScyvbMkn485sm",
  "key32": "2Yghqf9PrKfiUYL8fVhxZ9uiRzHgYVTMiakUaRFM3Bvg77SWCzMSA2Fs4mSsLyVNMhjKgbM2eFMevFNEQbbCgGzo",
  "key33": "3DDjH3ijbscCRAAde4VP7ptqLrzCr2CMDp2CcMb6jBn7oCstJwermgMqkD9mEUqbnxjCgydJ34BD9Bm33tuPZfGz",
  "key34": "2TyuAprfZUX7Ssj75aFfgYj2Jad8u9jxj4ZkSehpUibccGyaLdzeR9ZkU341ChvGth5GCugEQ37WwEPTWHzHNt7g",
  "key35": "4SDCPqgrsL64XsQ5HKr1RnQoP3J6DZmcDdMqKA8JE1CJ93j6UqnwXo3vEsqSLoEZMxMCnWQwp4TJTirp8vpQzbQS",
  "key36": "2iQYxR5ajpaftRZkV5ACZa6ue3dAiE35MwJXsPFM12vyxfdzujowU9JsY5PT9xkaejzE7j95yfaKL4LvcFSfcfG6",
  "key37": "2mQLXtiwrLeRdfymdBWbiYDzbrpmQVYPD6RRL824aUoQrJVZqtnwQzyFzpx7hpepXQwmvK2wBgjrLuJDHRyEzfn2",
  "key38": "vwMgEJfcpBGBBTABTNpFn9c3A9KjneBz9ACg2C9vTG4dyZyvCatpwCJeKhkiDJcC4WJBqeqYdjFjJTuFHCrye4U",
  "key39": "Zp9KfotUTgJdarp59gMRgrtujdQkcEfec14ZcTcShRBtCW6zz1id9mkSSm7G6Te8jPcP3Ddv3DpA7aTZvYpfZaa",
  "key40": "GME5ap5Wgn2VmAydmnGX8x5h1bKkPZDjDXQiswMCpf4zRyjLRwsYy2bakYBK5UGS8qhG8WAJCX1roqFbxNEwQZJ",
  "key41": "2Mucc5xnyDzVR5dt68ZvTBuoTTeq18tq91Ks7BJ4ZfS87Pfq9eZa5N4NkxCQD91pnjn8UjDwSMYv6RBF3BH8gf2X",
  "key42": "76KdoZiBLCzQyMDVxZVMXkYfbbnsQKDGKaxZvbgGSKtxkemvwg9Fyrt3cFWsozEzfauW3EvsCTfStLnDPqfZZei",
  "key43": "2oBoqWN7FpKmt3yzJiNDfGNPbyU4HPqmys6HuyTvFLrHTefkDCmEvTXB5cuM6oZXXsjPRpct9gFM9bH3SA5As318",
  "key44": "64pBJvouBQzd5CwEXvBJsoAPvWNQ6ZzkmX4gda5C1bZrParTgGMqLJJJZHc9qvUWP2XMTrQ9CpNYVXj2bNE1EaYz",
  "key45": "XQGESPu13awz8xsXXDmmVV82pg95HuiaRQnyT9rYpnH9Yg33sPPKYJyN6tWpw4WhvkPwriDWKp9TGPNLgf16hu7",
  "key46": "5B4pzLZXU59bd2xSCwZ46a3ZT1JmFEueaqcqj6xqkRioeB6JNk9D2pYWq9YAmAnP5HG3H5AGQrFCH8rJshS1agQk",
  "key47": "RKGfMVrbTBHQsQsK76egyQCfpNEPMeVEwgWeQvdjVfFZfgvJgTzXX18y3XnMtXioor3gomD6kmB3gw9qYXAYVZP",
  "key48": "49VcTdTeQsZgkxif94U9AmsuGQCrStHwYmaUsUKoSoH9ohGEgHsrBrZBqPDwFDsKduZ23getEbcKavmxofSxUSPt"
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

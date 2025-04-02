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
    "58ZztUQPbJT6RBSv6xhcEFimSFXZj4Ca3tp428aUkarduoQKDNNBiHFnFomJQgNkavWKvUgu4n5AieTh44ehSUSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JZCg9DNirKVwitRGe4LTMM7GieDUyhKgzhz5bACNAC7E76wE6HMQoZyLdfc3D78eEGrVySTpjaF71UU8hf4V6ye",
  "key1": "5FpzPikMjyc7PkDS5tdoRW8kYE19eTrt5jEv2ZHTMP2xA811viDBgvafDW1j8774ZrpYeZtxCHEyQcxJnmadES77",
  "key2": "2mBSaeXwW8PhpV4rd38Ww8eQMYMTAniSou33mJfuhAzrMHcJnEtNW7d6gxyQuDKBjyRTw8L3nbDWsUZP1acsfFZs",
  "key3": "jrC4JwHaULeZ17LMvqYDiYPNG2nu9oEni31qxP6RuSnrnso9zjFEYRHVqQzbM3V3G9sGBmNQn4GX3p9wtjrb22J",
  "key4": "47uNTnB98kctzcSa59uhJqjcSm6rF1DN4xfeycRMcJoorxVG6zY8JvLMs5AxTGranTtnebMoyeDHd6hwMYbycbSK",
  "key5": "EQnxxZMuebbyxSntjNeb3JY7DBcMgpmoww81T992gcC6cCfVy34Wrx4cCJTMRQeEVVm9NjhCvnPW6vwCaU3TaD2",
  "key6": "2uXJHmiYE7RwWoX1K1NEYFNhs8z4ExikRdDutFMUWJcVvrcp5494Eu2FEsTWNaqhTv7LdPg8cUnR8YFQwr2QAmCW",
  "key7": "2UQQxSzH5btfnWbvWL9zZePZBMLETpBzAvJhxxWSqNyodRsRgGBjiRw5rqdawKMAdQ8GhzKZVgfcEPgLM1uhWi4",
  "key8": "4BJKjRaRHcCv3noJBs9QaScjPSKP5i3smHXFDeXRHfCCHUUqbtLzwxtvVgnT3bWEwNqvi7aPNVdPC6XrvUefdKzr",
  "key9": "XzB4d3ayrBCdroYvNQZLiTb8VhuVn8SCV2gh3YxKAUfEbWrfCx1PftQRSxcqMJp3vnsJcHDxnzj8rAKrToTFoEj",
  "key10": "57qoe6gB4y8YM2w64jrGj2KNU74KVaA5BBc4bNEZD5bcxCqFmrRH55MoaFc5ZoHtqpzUoWzvw3v5NxBuFvqAMuYX",
  "key11": "4DWMHnSPHKk6MgZ8zaJZxLTX6Y4QcTkxW5KrLWHdfzpKqXRheM8r3HsqBWffgjukaKhkQYntpnFVGmdcK5mtBGd9",
  "key12": "2TaAtAd1Wi3tU4KboL4Ab5a918HPjTaR3gqz73DrW8qhYYYbC5DQFhTQ4fdwNjmMnPAULiiM1FgJiBLWYUikB3go",
  "key13": "3k1Au6q41CVRNMCtHXVgLngmLFKQA55W75uyBRt4prHTS7GGu4Gmsqj5F4LEAJZPzcVTyYjzPB1U9rutq6xYd4pq",
  "key14": "N8EPrbSPr9wpok4qLWn2kgaU4kPkxLGaRvCWJE8GEWmfqota93d4FBSdwcWrnzbHYwkvzymmTc8sU4p9sUKuewC",
  "key15": "XkCS2dTTgPZJA237oL5J8sbd1MzfUtafPLDz3ftpRB4KuSKpNHNU8CLP4onbY4GFKh26WwZikyFgYdtteFr1aMM",
  "key16": "5zGiVEmL3iuX35XNq2L8VyDbDYpe4xnWBGbbJTB9tdKhrLmWD7dH8nqdQbGBsi6KWgzG1Zb6743Vqjpy27fFJin3",
  "key17": "53PS4nNYGXNAsUmaUwpS1MLcCU6bgVq9RsyPoDu54Lirek4XPCToHGyPTNfWDGLknYYWVFwV3R1FhgBmpK94Tj77",
  "key18": "4R1dFZZkRZHgHg8J7rsQxF2fUVRgXPbYX3kSMR4KKwLyC798e9xL9rP2FTqnHefpk54x8BzsAiwZ41FvpMGfMJy4",
  "key19": "74Sh6EZtZixdn94zv4gKT3UCGqDGshDna3KhFfanT8QTak72NMaiFhzPb3MffXEEyinaAAAJ377wXf7Wda3AuGR",
  "key20": "3yimHCSMEUMhXf1QXeK3aaNBwMbmKAC1wmE6aqR4LvGREjwz92FHLEZcbVR578xXTK9v5EBaS6whH9vfj8bbi9f3",
  "key21": "66ajbzXF8aopBFmdMrxDtokVa8dcgPJCfoqZweHSwEk7GRsAmoCcCRJqU8L6GCp6kp6dv43qc1zZMB3XFUNsD28S",
  "key22": "54RSo96513jYLCbRWJ9ihE6BmXuBYM1FDPUgwWey5eZXDN46hvozJNwoNMSQRK9Yvni1wkwpCSbdMtmJMUXtuacZ",
  "key23": "4q9yvM9t9XPcJNgefBE16prk2p6FuSaNyFHrJ2LQjehEvytfVVyB6y5TtGFpv8tKt3RoeJLNujPz8sQJX8pYFXRq",
  "key24": "2mNjtTU7B7epo9wwN21co4guY7GiQE78G3YJS37ZsSKGvEULFsLaG8WHPVfZ2QQLKgbNkeRnJNYSDcvq6vTFKkv8",
  "key25": "2SgXs6EmgTbFCoBztZsXZbRJnvX5Y5gTpdZKJHSBsPNx92Bm9wEt2zeX8TUBSkdo8QFmuNYn9nXB2obwSG2pnd2G",
  "key26": "wFXv9WtfUVbRL8FkdSwgmk92MAZXptaesgiDjKYt4Qk4FBpQqmqf9x7ywo3XHCUYgQ3TPYinjvydQzA4FqYs9Sk",
  "key27": "2gUr6eevBaryT4nGU9vL8WNd8VA5TYyWpuSnD797KgFT88UZjQ8RWz3QdpyeLcqhLtdeBjSSowrgxqnuPsLvCvjW",
  "key28": "2kmJtqzw6hTAkGKrKQKPYZq9aDUY5bFgmY8gSaVF2hHFHSKhe3qUhVc3jDg7FVjNWJNxUA2kPm2kysGBFrM6CsMd",
  "key29": "24mE56VdLdAfiFirAujumrGeyhAc3F11q6pCJg9SdmeH4KLJ3geTPbTjtkAd7BpvTQQiinvGVtRtr2TLXLnC5QiY",
  "key30": "5hQwbbn8G6AEasyWQVaMbTEVhzYJsZchR8C2eTsPvNeE3wgJrY6MUCeRVVwRz7Kv7d3EHaQvKs7LQZ13TpC3Sig8",
  "key31": "2WCSCUxspD9QeRXwGuqRC1TxQVc8EktX5zH73BqTQzy1jpF8T7y2A2QS8PXRNJJqSdkz44hqfqP9RZwLBBQb59Me",
  "key32": "44vcCLwAD9edcRWDDvG88DnqE2RiXxMng3bqeTr3qFX3YJG65gnh9uYjyKK6TFwRjFvAiZZSxe2XiDMF6G5gCmgq",
  "key33": "63sKKGkjWtrz2Hg8jaWugQv7YrvdyEqDnKshAP9c8JBFnUSnFcEB61kwgHvJBNVDAjEi8mtjx93qiPrCqDN3CVdX",
  "key34": "4gaSiJnUfjbLmTWGPTLG7dDPm2nDx5uoCKxJjwFueJ6gDtaXNDQZDjBjAbJu9Xwyen3bWZh57LQUkwpgDDrr2aw8",
  "key35": "4SYxyesr22imntasNHbkwJrQewYJii2UyRD89KDKQB9i2o7suXSfnq9rttk2477bUEerwkZd31QFkK1usn2p1Gzu",
  "key36": "3TGkFyHKbzW1hef6xQvQan6gqaC3zEhDCdNgTgwSrtRVPGeb6u4xCvPg1kAdGsQQ3aivndMCdmd2qTiaQa1y9ASL",
  "key37": "zuaGbkiv4GCUW3vbwKtaJbV11k8QaXEZRZWmkVaw3TD6hyVjXjfHbP4mGMixQzSouhMuUcYj8uuhFAckjsqmB8R",
  "key38": "gvRxnQmtXuxC5zNijn5qJWkGxscPc4fnbHXN8kxPhuQiAttepPmSp9heWJ96hdW7ao6Nz1BbNyj8FqrsXFAXLCz",
  "key39": "4u3o8aMjpEL2xYswKPoC1cYez8q7JbY8pkSSaJmesSTrwTvhqWduicSaivUABeJw2CrMBLeCdBQyvZzH2GseqUic",
  "key40": "46BHrGtvHpjYb6guZz7kBqEubBapxNijMNxvusPWS1y5sVQ2HK1Kno4W1G1NoH9B68w7y73fD4yBAuynhom45uPE",
  "key41": "5T1ASgH1VKfNqnHYCfrwWbEbCyrMjkpEqC8Ja3uJtKXLTVxzNzycdDKeWNKE7pDZoKYLxAFX9P2BSAdvq8BSu3bZ",
  "key42": "5knCoMsnaGguJssfgpzPf6vWuZ7gkPHo2eymSZz8RU19U85gx5TKVUD9PBco57aKPkkSMftDkftehpC55s5RTet8",
  "key43": "4oAw5kADsZZR3WHNvHb8nqVwQUXyLvXFe5Ccewbubtjves7AsghLtgohDsTGnXXodwbPCQAcCLkbkahoVunbXipT",
  "key44": "4SSbNfeGkZzmUkEtNAh4ehyKg8WSftT2TCTTM1BPNrX88ZobBrqRXoYeqNnZqnhHjpu1QNGpiv5cE1LAJmNm7X3M",
  "key45": "63ZUgyqhorm6Mc61ZjuhvtFZppLkjwmAEZXZaCPYRickBvvqKGhKtrH9BPzEcK5i2weScEYYhb6s62eQ4k5kcTrW",
  "key46": "5AxGfCiUVd4g5PsbwPUyUNoZpWwRiaUVak6QKn6Yafd8yB6pH4bLGkic5DfQetqt11W6K8tEr5tFeYpx7ng7q3sp",
  "key47": "64EUNgvqcP1oEfhcPyeqcWGyXNN4P4Wo5J3mgLoxVB8cgXMEEFoKqpNp2QQduozEjqKonUfegDmuJ4WkT5Y63KEr",
  "key48": "3Hy652WigzmcYC79N1i7UNLafgLzmSgaxfhZRJ71EULx4amas8QMT3Q2SR1uQgaFvEXQUJzmMCJVrR1Vg85esdA8"
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

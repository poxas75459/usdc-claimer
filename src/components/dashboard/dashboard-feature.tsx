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
    "2ML6dZgJ4VS2vKRiu27YR2yYQC7Nxz2Q2pU4fD4A6Emgd6FJJvqxBZZAtZ8vPkW1g3BoLvUJdvmsWxdqHrEX7NVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fVGr1yyMPhrAU66etzNVsLNEqZRtzgzikTw3q5Jzbx9EMu2pKxMChfeBmfNp2v6NggjW6s7m4jNNPQNTdTRMExP",
  "key1": "5Rh5guTqL4d8JFDFmjn84fhgDwuw51HAi5uCk948pUUj9HxcRqJiZ4QGxyC39fqdQqi3XKDhQs7nGvHQvPtDmFoA",
  "key2": "5qHL4rFcn428HtfNWUodu3RAL3CR8FrfRFNE5te6vnb26FBx8bnVp7VebpM2Qpy3yjuBrWYnkTzhBgMasqJtt2sV",
  "key3": "3ipGSmkTHYXvAPyPdDXXL18V6uB8QcgfuCpLDgqhs5Zw4cZJ9FW9ZxQyAxdE5uFgGfhoWX542kfyPEAzBfj1pohF",
  "key4": "3gsrnmJf2WSF1tgd7A5P25fBX8X6GsoRWtTYDDaLsgZ6mHAkNDpMBzzKhQaYXtXwhfaU7jc61JLvwYtrLf6L81NX",
  "key5": "5JHkpdYEftUKUb5No11x9Mq5qQtaPjwusn6iLT8ZqowWpfnJhb5mjoNzLnHYc211LaVKKS7qoSP9zmeUa9aR2LaX",
  "key6": "4bHvggqWq8nfsM6g1cEUMxbGZ3ZhGTFBC97xnKAZHtwVYtiQzXzD9F9WZxaCHSnQ1jyH97YZAL3XgfowA9HuZWyo",
  "key7": "2tdAsfGDVeqsEngq9iUruEdTWQLwzowhenpMweLKFJN4a7g5Ej2trLKahpDYuSyVxtUt3SJUUFcz5ozxLxuVBi27",
  "key8": "2KspyRszQUqjYrdJipKan6YMfx7LpgURFZr9WEW7eGGcpwNp1LcG43QNW3afpjQJRu8zC6hoNto4SqoAEkWaKzDJ",
  "key9": "KLvnbscYwGUVwFfzdwYSNXEXbE1nnBLQJ5zBC9SGEhVfpC4JtPB5QdLYkDwvX9pQqmPr1pdd61maHBdn73AD219",
  "key10": "3JXP6R6Jae9oQTEdFqnrCyJnZ1Woe2K4Z6fjD7CeDvVZgt9cqogbDPEnp9Yit8SbhRKyQgHp1THSGdaMV7vWfNmc",
  "key11": "2cuAA3VDjvuDqjxivh3mLpBmXghzAGHdKY9dti6qgisvDG7WcskqW36xZEMYvdXkiWy6sPAUQRkcW2r5FcJhDnUG",
  "key12": "5jS17MKSAyYcppFZah2AV6b5Zxa4DYa5dLEhZRfB1LokefHmCDiZGPjGzJCvfJHAbcp7PjV1W1hDFiSUmkkehZzH",
  "key13": "3d5id2nLaAqRC7uNon6moaXEzkv8L6sKGY9Pq8kXj8DUfBCbQVo9MPNEWoE8SwNZmtKNdMq2dAzx6WMQkdCx4ARy",
  "key14": "4XSnN3zRJG7QSGT9wVPKWgZXS5o4sR7iixh62KmkM54EnwSN21z3SJzd2LLQUkK5aMoK8wbrqANrk12ZAryHmofB",
  "key15": "5DLAB6i1o58Ev3vYVTMmbXgFvfNMMvG2goWoYDkAa1VUQGbHCQgYhqbGGkeGvymeQ1LQL3VmzXcr5M3p2yf4wqh2",
  "key16": "4pvVg3VJFCkeL54jF9GSZEcLtHJAUa9fgXQHzqi73EtrayzSCiJ1AMbP8WTtfEWSwVduv6EjSvizWnXu9Z3mervp",
  "key17": "4gdTyBSEArMZ4gYP97KRLhCR6FMeD7UA7PtSPATgSpid6yLxamh2N6E8YXAqo2B7jEKdpsYDupePA7s7niTTpTrq",
  "key18": "3tJBfpULRTBRxYi7LzmzodJJSAEJpbvn3XjjKSKR3xX2GsysdrfbDFxA86EAUHisufTCXUbTx1JZtQkT4KXpdX9T",
  "key19": "Gg8kTzqwbyqAs8xS93DPjWzjD8dfgGWMpcLXfSMEuTT61bvrfmnKFsnD336sNSezCErRZwbuay5cZhc8Zr2QHWj",
  "key20": "3BtCPjFt9jmEJFg5HKC3Da3w2MrgE9zzjtCD1zsykBYH6HrAjMvsU9Mh9A7m7Fto7jeB4ZXKBQaJf3mPbCjjUojA",
  "key21": "vz2GMukLVrVd7hVm83KyfQPEcMtL8TmrFpav8GfEZzqMrU7QKEBYWDCcqStJ3vxLwsaUKMbwtLYrLVkqQ5zncr7",
  "key22": "TDcADhP1rLyiHELJ8kqGfCcvWpdAvALBNtwpvogLiskSwCJtBhY9ucRrXW2szQo5nNxAFu8E948uJ45ixiWY4Gg",
  "key23": "3cdHNLvS13ZjacVoCLPGXhX5DPNj1u139K8eZxXb6bs6eNmJQEf6B94U4zsSCdwMcsZfhSxgEk2vDoKpAxL3Y1nq",
  "key24": "3oVz5maGBfjFM5jWvSJDK323W9V7UWfzHvSehmkafY24upXjZioBaDXXqoHncs4yfK72vVd4wSZB1qqe2PJoZUpS",
  "key25": "4ajJuDmvLDyShvaHZSnhrhhP2s87zt2HFcjE18Q32hrXgtuavLUueBXUK415TzWNCdxqUq8BfCPmWLjDuksGKxyn",
  "key26": "4m4iRhx4G7wj9W1iSvmyWiUoyj3x2jmCxNnDbR7AVQU8GTeNiS1sahNcxKT1XLf5k49XdYA8rYuT5bSj2rFv2bQb",
  "key27": "5EAEzxabw1FPsCJV7RuW3o6RsQerbcpdjpzTxVcj6RZipkKJUg7KkKKAUHDDz2dMnjwNw6TLffxFH6HrEsWN9rPQ",
  "key28": "2ovKhoX4VfUnxVVgYQtFZjP8gbUwynE9NnwrzQ5zrkdKaqvMPyZPLdJvb2Vb7rgpYjkTwXT2HHDwxbTPeSQWoDFn",
  "key29": "4L3CiHESJZncQCJ6pj2CrdHLabXuXc9Vt9qeUc8qKQmgJW8vBiiieFvhkTbjJ6ERzji2WSgjuLdBctX2vRp4jM8z",
  "key30": "4MRoaiR1qZo7nK5zBxtKhhasxnrAJ3rx5H4zvY6Gz3FqCyFgDvBbsxFwRdhJkoLN94NKMT2B2yc48K3djvhhAadE",
  "key31": "5UHFXBFHknfw4axHDJM2qXSBd2Zym9GiiSNVVxXLrFabKRjqJieABCfHDLwj6dURacP5ASuB8crnXN1eBDpReNTH",
  "key32": "MvuniEfhT1SMExPuaVskcN5uu6BYEU2Bf9zPaXbiskNKqevk8vPHxyMSTPCxQqE6kDb9SKL7UV21tDcCHVBxQPT",
  "key33": "2CacpqC7gJJmR4D7L2KfAZjq7Wxmc8VU1ekVC8DhZifyR14xF2hynpaKgpZ2E3UCTZ9t2xru1kiyPxr5k1zRYbdz",
  "key34": "41qzpxcU8VvoPWQhfjHxxiuvei98cUFXgkSgyFyfu4Bx4yY1tiSp5NiX5mV75zBuwh3EBPLNssvnrSGTphZGUFLd",
  "key35": "idC3rZRkknZ7g7ezJ3qaWdkuPmRTLkCtQN6xM9stGoDmFoVatXkcmNP2brtGGVctv9TmUsNY8U3vGz9LcRpjVLY",
  "key36": "4upA7UpwvPTcB5QddegPpkEaYayEC8i7ECZZgZFzBqg5eVNBAhiQdXtHDXW38CWFazxbzNhRVP1xQhGPnYPkGuMy"
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

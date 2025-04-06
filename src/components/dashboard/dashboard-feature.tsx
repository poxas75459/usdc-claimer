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
    "4AM84nfZHMgY1dwjCEbj2NQaU1mhs9Nhrr4eShw9qXdz2Kh4rTE26DYAQxrt45KZkznvceMCTyNUtxaavWYuN6xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dJR9yazgwwnAC9BLLmuxYbQZgX595wv3UQ9Q7UwSGb3urHhqVGyEj7xsvJXtbtLLU9nmuQPwCJidY49gxrJxGh",
  "key1": "4fsrTEDw479bXEqwmzuysNEGnuBLUpmQarLxEYTCcTEcdDkXqgZyGoyYMYC56eW7RPqTf9YMmpqYWepyMx6QJvXZ",
  "key2": "5Denx771u45x5Vu6emsBshpHtY8BaceGjpcY9S31SAgtux2UkQdoZDzZ2WoFev9EKncvz2V3o21PTvyBRGzBtDeH",
  "key3": "5k7w66rQ1uhFo3YhrUuGwxzX2177vQXGNPEQ711gU1FRAkJiboXYu9hUgBcZ3tjQoRa8LLQx2FFRabYNDWcaMJeJ",
  "key4": "n6ckALZQXuxKNwTGaXi9Y9NcqB2gARCEnUthoqFqSZcdFaN9QjNuxXkXXNVphWKubFGR9TuhpXayCbJ1pL5X6iB",
  "key5": "4aWApmWUS3jqrys7uVs7eTbKtYw7eQTifBrYphGptaR45nYNA5vmAmrWQHpszLxfcgiqSqW4xXpz7hkPephqAgxu",
  "key6": "5wLt7YzJEpQgW9QdhVX5tpxywBuJsbmAsGGbYVnQsFU7e84TByUgWZGEHXByJoRPwN2qN8vmf1iUzHyrxAQqEGKY",
  "key7": "SiziWDab7bc9KWaq4ESpAsZrBSMh15ou542J5N4PEeJ4d9Rk1EuzbKWx7NPideTfmoXBM9m6m1p9LnsNjVLHA9P",
  "key8": "4FPfEQ5rzpueUyuQb6vmHj2EjFyxkjPSEGzsDBFNJfyeuv3q37jqvhVJfAEnBNawvKtwg3S4iiRFH6oqCvPmCpcM",
  "key9": "4Z9A4aeuRpu3QXQnm4WisLrvuwiefWnczXxixt8PiMcVuYfKe6pL1yPAQ44r8iWhvobowgSssfDvnkSZJE859mHL",
  "key10": "5ff1vygjFNqsukoBavLr4cMJRcghKR4wQXYyxANodajjimefWHpxJnyVxS7KYUS7NdKCM9MZSKjgedUMErYPsHgq",
  "key11": "5uYmTD5FVoSaLj3uLUrKHAwDWSqQcRtT1f59DLQX9ugCMQ3DcziuWu5MFEESDUxNSsft9PnofKAJvyLwFszJvG51",
  "key12": "4DkpJYG8RQhYPaEVF3nd7zGDvZwgNwK9tcNnuTrMuDbVWw9ZTvGFt5CvuYcxTiiQAcp8RabSCV7bgRwugWv16Mfd",
  "key13": "3RFsHqGbEojvNurDWSYMmjEe7PqfhGWs8xrQaqHSQRajT5AQmDAjowE2FsmhPVeFbQJjLNp78NQN1QrUXXPVVbKr",
  "key14": "UZgb1D1KZWs3ZJWYWaC3uSk8nvLTyUKaHLXWZE6yeYwfswcUBFx74rvCW2bwNyzJYQSQg6pmWnGjg7eHskrnCT9",
  "key15": "616fhWaetBqtR1CwXSiPJ7Z9A2RfYrrjCq7SasTHEWnVC5dAZJG8UR8jonoW1PGTccrTENXLUhxhNEJgZCjWKWvC",
  "key16": "ZaBJJmjq7hFciT3nwBXZJqurSvDhohegQG2azvALDMykfmvfdxv9avempfYFT86KPp3cc5yLrGiVZb2gDNKfPB5",
  "key17": "2ZKoX8R4HpxAaRUAyPqfFQQMV9SNXnqeENPLAW7emyBgG98fU2xDHJztnkemqqjoDy6u3JVGnJBJHpAu9nFpz2hd",
  "key18": "5QGwdXRx3UAHoPSYGZLNZEPDqXjGpFdReBNsxrEjV4mJpbM5Pdj9ZYPEXKo44Jyk3MrKowmFpUdBkA81AaYCH7GA",
  "key19": "57kcdWBgzixLeY6K7pHMC4YgmeZxWixBt37CPQTScCeZ9VowahY47E4Q1cVw2LCeWKC2mKELiy6ik6REV9EZqd4Q",
  "key20": "iLBp82ab9YTUMvtX4VFUUdki8ULDbBoARjpLurJXtberLP83W6rVVbLmP6TjPFBoJ5EHpLPr6QnzaAaALMgskeT",
  "key21": "xDZ6nrjuogmu62N1tjJVb2W56JqKpi9snGbANGcWXB7bqyk3AFpqDEfVJLbW2JDvVHsDMoZtYf7ZU5iaXuh17ij",
  "key22": "4cBJ6cR8eWczDtK5WS9GTF9FYfNTf5kw8eaZS16hVbJbLdQqkmoRX36qgYNcTUjExEtAseQs54uyw62NtHG1Z1Lh",
  "key23": "2NUdyoXC66L7Uxc2zXruYnaMN7jKTkWerJmh7vQjdgkMQKZATvqZAgW6zdyi4G7jyjkqv4zE8BmJhP7y3JpEqgJo",
  "key24": "3KiBhv5jym25qqZFCabm7hLyE92zjXd8FY6BrCQf8RT1451rSRoSh9EotwFshEtY9TWQLJ2JJ9jef9R8rUcpaRQY",
  "key25": "4rDfT8qk4C2ZvT6Y5Q11gk6xasLhECihxDNrF76FwX2uchJK7WUMJTQDxdAH5LKmxqaoJUPfKMSJ7WeiVHBtwpkK",
  "key26": "3W35s52rZp8Td3MyJB31WuEBjmnTYtxNjTcwysTtdhnrdTytuHUTD7G8n1zBPygKot76QdDDmq9sYfBjLTsbZSaZ",
  "key27": "3TjZ2Jdzh6XhSm4Ej9h3WcQpXkP9a4V7HtSdt1izg6Y9LKyMoNfCPFJuCJ63BxQyqjrNSuBBs5QsEhqWmuYKmcuv",
  "key28": "YKbu5ANg6HG2eLLQp6UM7Qi8DnvbLrKfPfMPerLf2NG54Y1xzt8U9N1FGV4uxBTZGEaBTrLhhxf8hmGtToCncMj",
  "key29": "3xZzZpoHUwYKQ2qP9DkPSvYeLqZ5zLJ2fFsc3HtuQmH1xtW6UeBuk18YvJaYhJHBqNz1dTkR7QDL2jKzT3b6Z5Z4",
  "key30": "31P7nhfcujsBw9k5KBBc6wbFh8mPkscpKe4b3pcv7fSgUWXshspTzVVVV56icatxNTknT4ZSzu5noPQ1NQko9KoE",
  "key31": "5ufAbKrSdeBMY7e7XVsdjwPvrZfdTKeWPYoq8PYbNG9ZeB31nzsqTsgmTDrNHguXoUrHPVZ6GRt6KuoSeS13HB5n",
  "key32": "2VEGVfzAB39vtG3WZcag6D8cMTYdeZYNVqWTWteZ5nUTxWC2S6Q6ephtQZK8fAPvhWSMM4QAAL7Z6K9sraQbGSfa",
  "key33": "2ySasJ31q8gJswd1afGVFjNk3Y6J7fcnu2aRV11YL9nffrtncG34iVHk2C8L1qVzH8wjRzWT3gyasmobVNbLhGbT",
  "key34": "2QL1k1h6m74mCjX3fXo2uCmQQEtpB5oburnEH6YYHpXzqi78jQkFjcbv4ufmbNVfWghVsd19UCfbWwrAB2XQWtLT",
  "key35": "5RdXcxP3AYsTFvsnQ9n9VQwFj2vk4MFgw5XnwThYjcV535dNPhqAdqSQomXjmEbAvVq3EX4m2xvuRzbfpQMkct1E",
  "key36": "2ba9TU94y8LGfabf44fytnrmr59deCVM9VqSuuypLXLLv8PsPBovQ5vKQwPv2V27VG4maBf25F6i79uK8ZLTj1y7",
  "key37": "3m4saPjAkz7cDqgpvHECfX24MnMdWTxKAbXYCEAooFBbadDd44EvG3Yt6cgNfZbdzRTAbpzVtM6vbtxSHAyS2QBy",
  "key38": "BRVoEvDZsdmBgkDzujHW7z8RRmcbwsdHjJEkrU2JvpfLLwEkSZmiQsjnMQtFxhFFKdkbp2w3TueDhfX6x1kzszK",
  "key39": "4WUBrpnNY9Km7CMShHzaUNc1tfY6W7etJmdRHQA1TQ4sANwAY4t3AeNfjurpeo6ESrPS5xaPkSSaWWZmpnAj7kUj",
  "key40": "3QnVh5k9McMFvZbyJJEPtQ7G8GcufCZKqU6hFTGcqJvmDKcZGa8gcGJ5u5YArRh3Bj5H3HczBfBkrCy4rzpEEY9d",
  "key41": "4LEw7tJUuWBT7ABdMXoH1Bpbnu7xkgTMiFNtViXc1t1n2C39fRTRp4HAqGXPTBvXx1xSpCkATf7L7dTrvUHE3Yui",
  "key42": "1Ri2qFvLCBmVnEGC5FjjhvGYMCeH2JsH7K2zYpvrppJLUsXz1gepE5NVxXeZA9Rh7MrLrmkFvB34kW2HYgmB3AF",
  "key43": "16Q7Fxmpb9Kd14Bg7n1RZrrcbKeit51DPRn518ttHwTUzrMFXvscRi6731pZ6ifwrWSsBP3JuqX2iXW3ZyRdEG9",
  "key44": "3mzskVBqNzpHE1tts8dDT1VyCePtkaT5nmEzZyPBHbwuVxwZzgF3gqMTnDZ31EH4wJt8JqwYZeR7xaLk6bmXXhcZ",
  "key45": "2NxwdVNBJjeMFF6RbNztSCyyDvk5n6wTRTR32f73CXXDLxiVknpDR3nrkWxp4gMNQ9btHGjQeYNcLdx9jZscGkWu",
  "key46": "4zkGYHSJUnvkiDGLouVypEZSVP53ZJRzfdKE2SvtuYQMKNZdQfdWfm7kYVSNSbkJbBrDHAyWHtmWy9a5uzhHT4T7",
  "key47": "5rAMFxUhZ26DxyK2xAdz3GeQ9GF7vqL7QYMGAQ6M87ScpNV74HAc9x8bDf5paTgVtXmqK2mp7sbgR5bAZaVKax7q",
  "key48": "5mN2rQP5UA9aDBCXpBTtTxjCeo13f9PHB2a7zenvkMHWQEtUo6fja1RFSPHCAUDEsX2mCBRgtd7oGneKs927Mhpm"
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

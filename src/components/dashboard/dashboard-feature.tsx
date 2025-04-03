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
    "3R2boYrR4nk6kaCXijMQKgoxzVBmxf5JcvUemuSBn31gx6hp5t27RhJ9FAqDK9eqsbimZV1oD1CZvJjxTQRrQYne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDe66TihYxnJ7Lk6MQZ38YzFeUwtZdfoUFqLHsh9HdwoN9J1mAKhJCCkM848MKf1FGt95VWmjKrGvjkb7zQMqjj",
  "key1": "4TQFNtGoKTe1GWH2JoKTeMw6b6Q9SoGT9emKoTsRFn7d4HmLpdCvX1jrx1k1xsxKkkHLtMb73ekkn8NfJaU65q3a",
  "key2": "22nGv8jQ8CHz3X5AZeE7wPLiFc6wyHw1ERkDgp1WdSbnbdFk7b4F6fJhCYdUNWLqsoQHnHoJuxttmLetUN7WP8XK",
  "key3": "2cZFqoDAMWB9JjEmdeVUTZB7mb5DApwyDkVeZjV31WY2PTrVjGVXJiUmjdF25GuPGUCHWiu8EfssbHm2bcvpPB1z",
  "key4": "KcovuztxoaVcSc8SPf4s8XjHUrjpnX7rLTUcgavSxSb1VrTpW4SqursQydYgFQbwNsR6nfJV8qYqzrBKHcyjp8o",
  "key5": "3zeYVX4NgdjBNaT9fVBamJVQ7bkFA8xxcPrKReDJkuCmKByALXfjxiFtJ6f6CXdWP6ZcRdYD6KtT32RuMVkVe75Q",
  "key6": "2CqJh2zEv55ryx2sJ7N3epChLyNw29ftmX4H7ZwmKaexdYoa6RafbjJ4ZeXhjLBmMVJ7JaaQpbtnR4QGxPNdsXvE",
  "key7": "ygKEnbo29BGZYdKFtKS2NHesYZSoA6mYcEr8YW9JBnJp19GDTAn7drTyPqpfDLmxqGa9aSuhCESbUWabd4cEmf5",
  "key8": "2JGehSxiobDnsfKehkHV5g6sgKzkmWE8KPDJP1B9N1jGMfQUKzQqMvfxrSP6pCh4ifRWVXuznz6WA7PHn5sFQe2h",
  "key9": "2rWEr8ew5RhRyCv9HsSb8EFPm7wxQNJUeaMkXw1CjqTAe3DuhUbPE1kNowghVKvDR96EcfaPCfnAx8Jo2kGhyrbr",
  "key10": "3vkx6V7f9ueNtknYJrB6Bm49mGm1RJj2h9GeBLinzq3d4dMLGqrdFNG8mEGUeSB8jKYVD74RP1xEfC3vSuXiQr8F",
  "key11": "4UNd7FbnYRCLgKB6qRJCZv1XXPdWUZwDJsapuy2q2rrWjDnt6anSsxyTHyArF9n2EhFzcnfDo6yJqHUK2aLuYMUD",
  "key12": "32YpcQuGzHKKhdeXafvrkytREQLvgh4i4hba6NppjkWgKpLUww3DhCe4dKCwZW673xFfugAGuWbwkPjFPksgABEu",
  "key13": "5Af7yU1CAiRz3VvN6XEqm3QcrkpoFpbGtfbfRXxwYC6tCyUNJXqShWHjsrPN1yDRPK5esXKXwzYLcJKRgYKpnbsZ",
  "key14": "5V98HLhdD4d74hcMcLJsCPKoU2BCkrVqeXQddffHC3FWt5avqU24zqwefUWwpVBCLSgPzVkMccAAhjvk4ZwGiEGX",
  "key15": "3EXbVP8XQNCGSZztqiAjYj5Zmng3bBsDN1so5h19gFxizwbX43MDkuVEPwyWR5MT7GfhThVEDhY2Dg7166XHZpke",
  "key16": "34BqGyt8vm7X8BDS1yFM3yNaCNMBnm8RWCuTWftj63XDUy9CaYYQU5Hms82U8rtrMnyMkU53PX65AZ96nEfRtnAr",
  "key17": "kgMktEKjpRw3XzZmdk9TR7RKedFuLmDk91pvA1RnN4nkFUL8XwFfVoXDZvopeeoZ94xWyMgBwo6aKmyKL3TofnJ",
  "key18": "3RxCSaZuqPP39ekgyZEyfcC8hHxbhNEp16rMCQBxuM1P1PdTdjrKipAGeHW7vErcRk5KTh5Jo6jD42sNoBBXkcJB",
  "key19": "23hCJRT7fSkhCYjKZFPjVumCf4QdZMyQSBojfYbpVBvbVr3feYxyjNkNHBCYoANqon61m4UVaWuWECCNuVT46Dk8",
  "key20": "2ymddPZyqGyXGnDQrGeTEZnJUz5BLXb1b7kNym94k46ktD5FtZqufxMF5QEQHoCupcHT2Wnea5QN53GumyHUbhK8",
  "key21": "XQPYMekWWv8Ke9mgwKdThdWbZNiR3tYHeuS2WPpaPxNNThy6yW3WQen9SZ4dWVNbKUu6RHc5sWfDYjkiM9NPJji",
  "key22": "2kaknCaDkMAt7XEXimwodDvpEPZBrSXeJcPyD3pS17HapeYy45eGvRWtEAHa6zAH4d47DaGQ2rzDvEQPqQBussik",
  "key23": "5XeMQcCVjk9jpraXaQTXywVsYgxVRM28YukEdq7Kczwcmq8sXNrhZ4BRbk58BqzvyLQod5kFwNyprEj9qdFNya4y",
  "key24": "2eKuQk964d5i46wUBJgVDRwd8Fnda2hDJiZ8973SvYGrpgbH3ceyDsZAk5LWB8aMBGVXNKvv13VTJQqUKyeJG37p",
  "key25": "3EvQ9fUbS4sYZRGLqV7JDqLDgHDKD4MjPXLoEYfq9PrxhUfUKdY3o1VSBZqKWNYcfg8FppntbyyAejCRqD6cWi7M",
  "key26": "4wBiWfqmUUeZ3sJJGUW1zTs7j4hYey1d4gWVdXPgLgQMArzUHE8rdViX9uyV58g4fLik5Eta37eY1HGCQexDPYHY",
  "key27": "PBthx5rmYXohBWimpdoC4q9r7sfQnSxVUpUf7s2GExtgZ3hswntjSLfLE6TPWC26LfSrdrnvXbBJRDZT3s6NCGr",
  "key28": "3a1k2HFVR56B7Bmdg88UcAMKZexySPMtvD8fSqmtA48x8HsjjwYBktM35amHB6eBs3fAiCQDF2oC5jTesmCwTbvS",
  "key29": "3buuQUUXS8uLMxbqAGmtaTFZQf9CmNkYw3m5iD3wq8ZPRLVLSeS9mZoZFQNuGW2uBP121N6XLHMzmZvwEBY2EWUt",
  "key30": "2xefKDmzZv2LxXgXDjbVnemhbKy98hKy3SdUtbmjHkcnpRBv6VSiC1mCXYU3t6KEJ7HUHcyFhhMgJciMr8aA9uLN",
  "key31": "3zHUQ42j7kh4uef6aTfr99GtnpaN7Q2gvC2nHU82e2Ux89LHJoThaprHoS4Zm8bZqLNcj4X3mkPJoU2iDDRH3sn7",
  "key32": "5jMp2wM37dPG3E69bfqGHtb2eENb6ZZQwej81u2apESTyTLkDmspPasgSYL4eCPgo3repu8ZcvUKiFSUU7SjCgYL",
  "key33": "5Uqp57jXVvDAbGGWyuHDmC5cpGxwJ23QMC8tYi3CUUe9gCpKg1Kctc6hJP5wHG3mpQhJzttUucfHeqpVMSfwwBM8",
  "key34": "27T5T8N5ENNz2Lhi1RyvgkuebE7UdPJ1CjQNcwVi7J9s3vacRLFPzPV6WmurXAQgbuRKbLMbQnFPaUCV1XGfMqpC",
  "key35": "etxRrNSNmZBCCqhMY8KLiZpfy4w2QHDc8tT7rPHKzugDg2xQfF4psDoewrkBUiD228ThcMnX73bJYs6xBMxY3MY",
  "key36": "3nzSYjj484nR5xH8x6uEXL1jYUvfVVsUkcyDY2DLP9bMcnvbr2C4YeFxTkLL1pjrm4Tnn4Byj8K3RVBpSmemLvac",
  "key37": "2fT6JyRDZWFst39JhDa5SfUBHG7xpUoC4MFAJpBnZSWZZhca4FCf8ThRt4R6vbUGdSD4bKhDx8yZpwEt2yvVfnJp",
  "key38": "5SQQcU5UivbUWTNfoakF3X9xHNzAzonxRbCTGsDwZtfHhbjtjpngrtTmDjRUhjfo9wcKwbRh6H75UWJiiBddxDCV",
  "key39": "5dm8ya2R7jxn7Uppj7JdKxfGBjJzkrtEc9FVoDPxJTk6yMZGZ91eh9we5vn8XtcechzpiizVeeHhTQxSm2wX4omJ",
  "key40": "3KBDmopnWzfmb18uPJvjkdjzKayR7hEUvcnjFzHrcswwJue76Xiy9PfJuCpcMaTP96KV9kCKN6LsVQKYK1q5KLta",
  "key41": "4Nm8GeSSnB1azrUktQJbVzcqfwkvTx1ymHyd6zUj1EfKYnUXdhWWybZUyCCdoXpfxPbXNGsjbXk7oQdkaiMui5SM",
  "key42": "4ygpqZA9SEt3QWLsmQohaTdJxU1kpGAbfspfAcmFEyhc1882qm28qiRZGsfHJ1K38vCBkFnumnJanDbKwRz1J3wc",
  "key43": "2HXud2QDL7qEiQEhw4Sbmxt615LHaPEpWfd66PrSnnupcQwD8R85BM6ms8V2FWCxPy3hGs9cTSh1A5ib5zovVwv4",
  "key44": "24yhkV8V28ZamQ3pePXsw7ZHH3J9qd3hNdcNXhgnWqRh2AKwtREwgmbYN1tczGrW4WoNAvX7haaTFZb9Zih4gmgm"
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

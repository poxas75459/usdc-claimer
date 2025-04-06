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
    "29pxbiy1aDWqAMmAYGSPjUdoFa35ccCvNks8u2c5yeTenNdowpZQ5Qcu8mbBrqVfKzfcDHaGUTNCX84HkLBeDHdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZwGoj8FUbe4Ve8YCjb5wWsBfUbNQdX2BVmHmCznrubpSifhrLVYgYfAo4EpAcw6cfuZFjMFWTYrqUK8iKn29ED",
  "key1": "56zikcconXZYR7DZht7XUbZsLQEcbBn3z3xN25rmZP5g3ZhL4Uqtw9DGP9WwLHXxKS52gGXm9VXcJGzL4K8qun9k",
  "key2": "66ALTmM528r1M2ZBcRGADCy7xZWeY2kXgRbzc6MBvEjKpEtA7fm3rEwzDzVnaspzoEyx7uKuEg1p8nvrvADHf2zH",
  "key3": "2Enp5cdqh1eGspq9FZtmK4KNZtSAcLKVd1rj2YcmaduehqkEFJjuv9PZ523FMvoTsZqgGXfVBiZZKqwYyY6QCA7z",
  "key4": "254zLE9gzStSqRtSMKi3Le6y9yqnyU4oxrHbM5fjaWG8CnjTNv7V677HnBzAK2yyiPHWbo6zTEH8JX1jEH1mZtW8",
  "key5": "Hu66ZeF38Dd6SQ7wSRbv7GVc7SBM2DDMMUA5AML3ELuPHetH4FKyLb5MqiX1mekQSMCHzUmxq9GumHtgohKKTUo",
  "key6": "66CXHX4sMFQk34VCmJpK72dCLgXmH2zhuLr5qdQrAFfz5RxYDcw28qRyuYWC4bxbg7grHqhMhjRAGA6nYkWQm9QC",
  "key7": "4yu3MyPSWFRNqMQLsGAp9JMvuifZAHS98MwDspZDyXCGfgbtMWy756VAuGcixKb9xQjp5Bn4ZT9u66w1aFbwn1Wm",
  "key8": "3kvnjAVFLGq3iuDNA1dLmUpYBGivyS8big2oQRiHKcVfYbCxZ9MnMJHgAH1RDuLKG2MhhSjEk4oPdLnPdTZSvmNE",
  "key9": "oGvqSnfjKDAmzPudAZ34MeD6AyqwtDk9x1FgrMDX2oh5ED5xW9TGj9ovzKPszpaEqAKFuhnqyALkSEy9zWAaEJH",
  "key10": "5yWqAHJgSduUvdWUXvQuUevYRU6i5oiAYayJvcF2WT9wkRWyiRwdmBz9Lv7NQ6XzDfNKbtKw6v53Tg1Frckq5VQq",
  "key11": "3j6wTMNvaeVdLck1UPm7a5eCRPAoHFBqaCRWPYekQqdikjavHdVzPop8EVzPHEfi3ERd8YGmStZDqMwo9iVTcd4x",
  "key12": "3bY6HF2ashEDsbkaPByEDgq1DQaJG3nPvLfvKy7BtdNvoQUqw3XQs9Yrkk48mP3w6YsiRZkU3qJMiHEC75ZwWenu",
  "key13": "4Urh3MSicN6iZAwVaNCMUf8e5qtDcw9xX5hn2jvhLWYKPWiYXEUm97eHLWX7FDN7EFXaGsGiZNAJfLcyxYdzmNog",
  "key14": "3r9WvVV4araRsiaz6CXZvaJovnZJuNWEArmHWRaYazMzJMu5XWMkx7BwnuucdsqKhvdTD2MRXMw7sR4m3xkViDpT",
  "key15": "4G8YV8VNmqYn63nqQwdq6KzyoE5UeLR9by6Hgem1kw4UqGnRuR11VMc74NAec3sbRvMNabxH6q9XrhHdz4Yks1Wh",
  "key16": "55b9cX9diZ1xuWJV9qncQQz3SFWyb7aeZ3wHdj4QMo8deycnzK6pGeLhSXG3sU6eNMMSbQw72MPSK7eBqeoxKSnp",
  "key17": "AvEcDxubat5XRrvPtzZKmieBSaBYx9tnokyERNM1NT27isT8ngeMeW6q6neAjzWcS69DLovUuquXxKPbcSBEVQE",
  "key18": "5gHcGMbuUTu6HmEVNXTqNQykHQUaoGdoNWKvR9u7f1v9bdZ7YabbcU7dJ1VUfygrWhN58wfHvmq6Tc26Arih4Cgc",
  "key19": "5nxNKsHTziQGtnn8tQ3wAN4JdBNQWvCV13hVmvJN1EZNCpXBZdmasciQEzcpnGyukzTQzxKzdayRcPW4S9aScBFk",
  "key20": "4c8rBkSiRud5tcCGsTviSL6bd2kY2vCHDZtxq5Eu8LxqRm19SSPc3bVgwGLetvTzwXHC3meMSFvwvRfFuERbULWH",
  "key21": "3jiNdxrE5RSKoDR5oxb2qUQbxChXMWqSBwvPs3fxaqiV98dqsMLHE8ojHDQ9hVz59LHw66pRKwu4D3xBauWyCaYk",
  "key22": "43JUhJ1LncMhdUK6p5oGnL64ZxjotkkZRDiL455vuCfYSRcyJMAFAj367agydso4ry9Xd31EmJZCLUHxcFZNHieb",
  "key23": "wWwAVx5jfC11jbMfUvKRbH4TD7vs7r8QXEz4bHjAMpJsnxY9D5ME4xytXQ8bpWowGRoFQWp7h1E7JZpAaRKqGJt",
  "key24": "6296WKPMvvWtu86rDi9pJAeNQsRNMjt6ggTBS2XHANtUK97G9H4ErFU7WUXLXt6XRFCydZjG16VxHcwzxHBPJQAy",
  "key25": "sS3UEahFuwXaYCprCvuBP92uHvvhsi49nmVUnuuFdXF97DLopKk74buAhN9JcwXpvywF4rGMJtdRo1ki6L17vLf",
  "key26": "4yoQo9HWCrirvGWwWVrVcJgnKR9EcaXJRJA59NqNqHancCKs1yJ21ncSQmMJ7z8RsEaETShdRyEWVQHLC4YALyvL",
  "key27": "2LNWmok2uMDnSrFWgvgKXoDqrXpheVjxpZn64GMvncoNyj4VrkJNcRkDeLTB3c33jyKj4oKF4Ljp3obiaraJhLtG",
  "key28": "669A9WjvnQtPY7VL82TSsq7yHLUYBMQtebH9RsL1AndPaJeJGWLeeHBJ7E99gqna4RRUH8JwxbAn2LYwFKZd3Z3N",
  "key29": "rvM2NwyB6JJnBNsW29qgvu97tNwXhYXanZxNEmPkkYNiQqWCcJ24ivbmk3247U2uLC9khfW6tNU4jdGzQDVVY2c",
  "key30": "4xUSNK17ftPMzEx8x2m3gvirF7AVFWxNds14evze6eW5D7AYV5Zwzbw8J6oAvNEir5K55HNuANhSfXsEAxCR1tZr",
  "key31": "3FxxeDLKVx67ame2JCGrXEfbumP8d4Fy2j63a7hNcpDiMNEmLFqZTiBL5uRr9rpPxuEz7tgQTtTUcXK9WMJkaUuN",
  "key32": "uHgELfYgkRfkoaTaG5wKp9fFtq3wjRuBQDVmbpaFUh52xMvhFuD6eCU9Wz8Dk748STurQtFR32rsDoxdeXeb6QL",
  "key33": "2EvM2ZS1k9haFCFNv8UKVKE1g4jz3AUyHoWq9LUAhJgctvxjqZYZcNhDz44PNqvk7pzGf8jyFvEB3qjwMjJnoZM3",
  "key34": "cyQMrTJ2y6onhaN9TVCXTNPdNmzHmqwWWtS9r5eED1caKnQM8ianuSVGiHZarWG6fNfzyMGgbGc3HojiWLKaxMr",
  "key35": "3D7WH4KQ2qjLBNVRqYDbVNXokYtQwp2Y9JD4nJbUTHfpfQau6FupyAuo7K9RNPVS9VTi9qpVPTV1bNgqpiDfbcRN",
  "key36": "5ucf7dnobeLg4CPJn6wvMji1oDmEGeD2fWam8NaC7ubKSEN86JcPVRgCGcSWjmhNM5vJ5qJpBoDs8mE9BqnGyDM2",
  "key37": "2nVpJhtztUyz3NYnNQFA9SSenu2Z1BJSD39EWXErC3GGrVkGyiGt2a4zdbD8BFxoXaaUxLT9EtZBEW6WkdekB7q8",
  "key38": "gSexPbxcUSp5nWDDR4nKbqoxD6H4b8PdZVHPdeoyPMYGNYfwGnde27ZRsjzkYhsPypYRVfFqH9mNZVnVsmU3J2n",
  "key39": "RK4UsiDRiuA3McU91BeJSTJtQ5RLGc8qLy9nRR7RFPxLAZnEAoTBLNXr3MvLeTRPra97b4bwfybmMTvLfL2DEKt",
  "key40": "2bWK3UZDTdF6UC1aA9iJBGJqv6oc1bdmHsiyaTHo3nKTCAF2hrFsMFCHUcfgknPWNsXsFyb7C5i3zQn3uWXtDbWr",
  "key41": "57gCDzHt5UVy3FAkeYz9nrvbCSuAV4pM1tTtMK4Yc7Khg8H9HrNFWV15A3BveRTSmVZFYcs6wL5cvXFnhnBzwg5U",
  "key42": "jATcFShWjSRtAPbBfVcYPSRNHSs8zEzV1ASezi74TPZnws5RQrV7f9G7kXsLcN6HAu2PNNqtRyBBH1cBpuspPoE",
  "key43": "5dFv7SXmAqo9zptfTYU8jovmnfRAat4x2UJ8NRTUZ1nRq2SGAcxQkGXX7fub1qkrhQHEE7QkpKqvNAwjG7cztCBi",
  "key44": "3WGm6EWLeD2u7npN9xXLmaZzo9X7JQiqYyiiwUJTL5PCk3DWgCucexVn1ij5shyajAkkAwkzBxMgYf7vqKH3NaCY",
  "key45": "9k3uL4WyVWYAjFh8oznHQxLmCu9yyUFFAkafdWvsmHCcKr3NKDs25aTNDzckDp8fKJmTbCA4sjcDrdcUPWhY9LT",
  "key46": "5aZrxyNtE4NZXgbYLtzRffK1FheFX7S3YcVd9z5g5HFGSD2LA9kvvsxNVomPTXg8QZV4JYPGbDygD8y6fFjSXMRF"
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

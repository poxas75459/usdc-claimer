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
    "4uMmxaSWvH84AHsJxV7yQcWCmJBpYwhNwku68BNDDZPgLiSzyWXHjZfWvH5sogXs93vWp19MNCgRb9oNfd5iZ1W2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EcE2ZZt9hHPnHJ7JYA3kc6SzouT8YyWC4CoMuk1b4SUxYEyAXPL4hGA9Avpjz39Sx5rUUyHYykP15YqT6XKE2tQ",
  "key1": "2mnuS2TaL2tnNp1H9vxZsBTRmXjCKNA5tgKHf7KSG2xPgqxoENzvthpDpqRggWjyewAW7TgTR9gnVL7AdTApxj1Q",
  "key2": "5jZDmzj8uv56Le4VdrNZSL1wkpt94tH3orbGSLmui22p2LzHkMvydYDcLKvJJurG8pBawcgsVKUCt4d5aaa6oM2W",
  "key3": "4ro1vyrLMe1JR19sfb9UMp6xagH8RFkPqnuTqhVKRkYcJZ1BNpQV7zq1sKwF4XPaupGjmknzGX9ctLnq3MFz32fC",
  "key4": "Eommmqi6dAjZCvM4X9J6EPS7f4RPNXmYheN9nyzXBrFRYLwBHaUnM4EKp4eBLgP1ZZ2f93PEy6NBX9vwWNDPo5n",
  "key5": "3uhBCXrBhSVnvZ19KuU4BdKuwwSCGYW1zAyxRuAxXQ9yvsnGyoVgBGXdHd42Zw5qGdCPdmpY4QGTKCenDR3voups",
  "key6": "32jDXPUzsgJpRun4wt9xyGUwc7MMYUr6FE4jBd7y5FRsHXpf9zMoby4pnnX2N32PhzDvCukAtNtw4wD7cnqsTrui",
  "key7": "3j6gRLovqaLmKTUgm5VbyceENUJxgbBYoR2c5NtfUxg1VNjpXVimSvR4SreDfFUyzbhd7ZASesUU29zZHZvkRxDr",
  "key8": "2mv111HhV7mfiYbkmCZMmr2rgrVtA8Nc4b4NRFxS4HE65rRqyVB1zEtehRRALMYgKYGXJBCLaqHqB39Zy1rZVsXQ",
  "key9": "4vyLtJtBXiKPsratQ6C9Qd6t6VKJQmNCScZqEoNQwcjGdgBvPbHkpAuU9roEx3sQRo9R78TUqAaaKYf5TtfDtnqc",
  "key10": "3TH1836jh7eT2NJhDYfidLwjgq1Kz6YUQ8omHLZKAn9pXJV95SssARTW7v7ysLH8DbURUuxNrLgAj2QmyMqtstq7",
  "key11": "3T8k9fvUQu41Cdp5uyPQaAdasXKfmzxZVMNULzdEfF9D2xJULtvGgpj7vb5VzpnXZuhq9KXLMBedV6JvBjoRnfmp",
  "key12": "3sCaiSEZRLNtKQfmR1aEEvVobfS2bcm1MEy4FvXrvKtfdLami3jzQinC7JDawHcUdf2NVoPpoHGv7w5sTenQt2dQ",
  "key13": "zZwD7AVqC4JCHLxW7UwBQHSYC9yhANKHkUZA5SCe5ARmcBZq3wVjBy7VkhTimk1Kx2a4bCpLj6J2J7fR7LSxKd2",
  "key14": "3DiEXkZnu6QRoNF9YW6Kxg4GPfqkp8VtkFEVwr4GsXK5vaAQfFxHxcrRfCQFNwdRbHdFRD3u42xJcs5kCwK1d543",
  "key15": "38Sty1kkhuRfBWcvAMBCiEvspj8BKthAPDk4zBbTinQpMyPB4WrNT3Jgi8Gr8Mb8gPNBzasP4FAZUU1ZB33GsXQh",
  "key16": "2LeFjLtBCBs9U8oNttRoA7vqzyfpDmtn6YjBY7P9vEwY6yoVBvn747tP4KmVG1D5TfN174B146nmarSpN7WjsyhX",
  "key17": "5CD8VkJ5kRoB7fVeWPcEZjdLfQ572Zvp2dWLcFYL2XdD36AKYCU4ALM1hofutwJN9bttqS6J89BdUAZyt22WMh2v",
  "key18": "4LHtB6tsYEGeWCHVNm4u4nonvzqxzKuxo2NcAajCLwZaJSYhVwCpUwLLBwapqHTDTNZEJEwpDGtdfdz1qiiGCK8n",
  "key19": "2VfjaxFGW4hhfZTfXPHPgY546KEJ5EBDwBQawKyYFu1t5VTfKMt7ift6TxwiwAFHDrP66bbKbgEbcM1yEUSqCiF7",
  "key20": "2UyGCuK8zKKbguDo2nXus4uRK73eUZQaqER6kHt9eJM7PnvgXo1Rv2U7iVBn3AZGW2AzgVfWDUrTCZPmcX6Aqd8H",
  "key21": "2XmM8UAQQMF6UVAoi8Dm5yJYZ1kEaWw1a7FoKicWrVPjrFeNtfd5dKPVsv8K5p5k62wa9BQY7CCnaJ4hUtwr9yHh",
  "key22": "Ep4rwy6kmF3rDjjZRXqkWe5pNy9mHkAL1MJA1Q1DCD7ddHWBMjJudMjYUkqcMroMdXFxcDvS63cMiTxjq47dE8j",
  "key23": "3ijwymZ8YLK5yaanGG66fmdyhZHko2g5cvB25eheWj3mdH8X552ErJDT1WFaEhypNQrZUSvPFiFBvNbvkofEaNkZ",
  "key24": "3B57JTK5eRtWAiPiavPtCQV6qD5Ghwiubsa2t2QDgTBBJKfxotEpti5LoSTrrFtv8iX2zSvTvFAnDjJUHihYkiEd",
  "key25": "4SYUDMWpbTUnBXQvwhfWRGmN2cEvciSipqxLWRfLwRNDeU4QEWJKzy2BZjHPVNsuQVqnjnjvG7PYobVDinitcAQw",
  "key26": "4VUzKswLMa5qcbKib87zdtRj1zN66cKbB9oKxtdRtmbFuaJKAVZsR4mFXNkPKb5qt2nAvSTgaL3egfyovHLVQ2Z9",
  "key27": "4kL8UnQFUfWq1jgjSpJKiHTNAtbV8pPSCnXu2g5xQMvzu82wafrA7suTR6eiAyEQ7ogLE2U4wm2HPvzunRYXWdya",
  "key28": "48QhvDXqDSABQvkKbcjdgU8AY9uBpryXYCzDKzajjvgy2hYbe2CP4ZdLzujSBLTuVX3RJumQpC7f7iGzgFVc4xEB",
  "key29": "HjQNv2GDa9rCf96wjL7p8pWfJ3fJGgdRrKiuyv4ti8bDb85QoGsNd2S74yhwvJQNDcYg21EgS7ot6EHw8QiDeua",
  "key30": "2ZdPM5Z9vngepVzZ2erELRvRQvuhXjTRZeRZQeAQ2ERtc6Pa2XCSB7x1akgGydbceY2JiwvacX1cp4BK46MX3ZeQ",
  "key31": "5PwS7CNYrpWvPoJkifYeU9qCwdezc9kQ3kWMx1dQ9AoqfKaMKnE9iCwF1iWxhkQMzicZtBn6Ak6H9Z2hBYf5femb",
  "key32": "2yEtLBNasbDDdgJRMurfdkpWwkhDrVeVXXqcXCKZZGXaR9DSpgeMWQCDL4gihwUazfvzRh4Q7xV788quBm45zTWB",
  "key33": "3qoAngVRB4vSwwYR4Yo8aHdCpiSUYdbJZ2QdayYnTa4KHLDxx34sBdJFrUwWDY8pspaz9WEZsvhiKU95fFhvJLy9",
  "key34": "2PfXyf4yvsHrLHh1EcqU7Rj9w8UXcAMwLhkr6ZQTckt7KxsMRbXn4mg8utXjuWUztLo84DHuK955spdNWPXGP3hQ",
  "key35": "3n7HPaSAxjMD6GPnQVzi2RgFtnY6vUqLtZYTHykBmvbTKAUUDUYjXpoxCjbiiiN8riTV6t5rfZ235bFyfhjh48Cd",
  "key36": "2vJHncCzr4kLWnPFMRiLaTzp4kcjcQ5cJ38vck6zVHApFgBeq5E69wMYiY1Jct2XhyJ6TEjMe6PjVAXZudDRopij",
  "key37": "5CNQQJoJTVtr3PY5asN6YsQWyVyXZ6sjCyQyNzTcuuguEbUHW7ghdokKjFW2Qy4LUrB9zy1M2F8dpRQsKrfbUp6X",
  "key38": "4Z4rv1tSsxSLr6YBs2bJUyvyoTZMprYjy98MhktXuJpnAJcZd7UBayUp2Gcr8Qsttn6nM7QwtLiiRUm6DRaNtStU",
  "key39": "5CX8eGKYYKoGk1UeFNwZxMkzgTXZsbipv9F6SGBvKw2TBb5r55UPdzc65d2rbfSzkYQddWfoVjWAMdQ81SD4oT33"
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

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
    "3nrK7RLMeNjoQ71NvgwDTf5te5ZzjNf6LcKT1T8QfoMWNJikFP43EJQy9tCd8zeaAGBvsc8oHvmryrftZnkvuV3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G6EBn1mSYAg2Gqz7wEGHueKFgXv4kWpVCujwbcfdFBNEi1Eq9A4tzZ7WyWBbECQGmgjWrMNwXt9gjBUkRbZU2fp",
  "key1": "2pBz1gGaCgpwGxiQUCg6VJ1FBVxfWSxE8EKSoYTeMt6vat7rj8VChrkEXxUYuKRgZP8TSpjgPYe14Mcuz732FyEy",
  "key2": "3REVLSptUCbstap2YDK9dgRvVqCgA4tdSGwVyYaZwHjYCTy9qyVtWHocmSw9bbiwhD8ne2F5dFn9wNNhf9GQfhpr",
  "key3": "4mJb1kqr4MrgGLE6Zbzx9EcDRjbLxjK61Fzrjqk8YCxJQPvddBsymbdeTCKpg6L1scNdCZ5B9mpqomkAqcpMFfpX",
  "key4": "71ZBfSkDAmv52QZ7RVcPKPFX7URQC79S5ss4Ba1RRTE4VQsuC56fH2VqKbLq69q4Voe8h1vCrJRkjNodturQ7fW",
  "key5": "3M14Z5kaquATJRkVdQoYF5XV2URYmaaQGPy44mT2PDMmCLVw1Xjaqzq1PoZ5uQ6xJPupG7gugqQJ6C6JfTuZsaEw",
  "key6": "3BHFkfcS6yU1Tjqj54E2uhPLfGGPijzZ31of7xrwC2i4v8y7a5FcwFdm96pR5C4HrgZGd4xCBxdzp77azsC5CGjA",
  "key7": "5vPUHjAmQcgJ43sXpiksftD3MVTyGHDM1a6t8pqhnLQqkNUQxCidoiniytDABWkno65nEPGQjeYuo8ix2Ye5Zdmt",
  "key8": "5MinqPrwKyYzZ36ecLi6CX52dGjHJ9hCdCpppgXS5gsFseuYYAvPh74U6xiiX6MFX3DEqL4a4xBJJ7biWine5VZc",
  "key9": "2J1d9m4zZwtqcAo3VdTZQzdfifxA3wtPYiSH1r2FKtWnz7fcsujvCSZ2Y6Sqz5cUn4pVZ5CBNbPeVHEeRwMwkYZ3",
  "key10": "3UBoYtxTzWowXniXGzVQZ7j9cx2aynSPGUsB7iTSxUAxDBBxGwG2pSD7t679wBe98HPKkKcFzdydZSo34t8bdjtY",
  "key11": "52jeDpFt8NLX4tLUhEen5wMZxM7uZWyEauT3XDKux3jKXyU6Udcwrzhxq3qyi1yLz6LSfjXNSB6xF3XVcFnxnBkR",
  "key12": "4cJsfMfW9aD2UNt7jbzhXb93JJYUb9EhRkZ4XLRCxHyuZo6sLjFQUZeq6fLCQTcrpC6cBu373ZYfb8VN8nZAjfbn",
  "key13": "2hpo4dD4YzSd5rDEYB4n38wJmdxLvP4caes5CWnAQFEVaJ1s6rwGoxZ8sJe5XJcSEPUfDTXwzMyJHWc3VJbvtYxB",
  "key14": "Xnp3cNhAUTzdLE6UTGwTojVGENEqW7xgF2JmUYgSewCSBYTFZUjwFZh8BoA1N1rT5xswC9MsQi4R6XsVdx2gRoK",
  "key15": "593xKjhoCoKW98bdcrA9hkGdBBn5AqU2XPa2vi4FPRzVhZNY4q1mULuhfh9sEidjH77WjfPFVyPcq5Z7dik78CAt",
  "key16": "57vXzTneQQah66ggp8CERKU2gkEUSRBAaMvhmavAVfZYbidNNU14PEWExfqRdbXgkFuy7U8PeeGfCzS9itxyPoSJ",
  "key17": "3pG51jSYyDeSNXBwmqACg1WpwgwUuB8s6nQrqsHVszxZWqkw7njHLVubwdpt1bSmM7ScALFTxKcHJD7EaN5pPTmp",
  "key18": "CLw4g8RyJ91QVgkibinHgShYadcBXjLghG2prXCsPeTbZ3Z38jKNJbUTQCHqH5H1uKR3QaPVktABLUPh4KfRL2K",
  "key19": "2nK5J9e5aNu7sk98nJCpeCkPwnJqxNQKKGzSLFQzJPgZh8keT1zdfgNrrsRJEM89V8ZdrDYew5vsSDCWxvxUAzS1",
  "key20": "2zZtrQAJnEMwadjw7caVu17StaC4sWo4BjRLPmZsPLgev1KgCkRLuiFzSzHTFE47vhkXe9JeoBTuc4vErGftmsnq",
  "key21": "5EVB5AB9X47MGrVBxWuJzav7a76rWn4JQHgnhQbZJ5LrsKh5vC1HR6ujwAJuKTAJtsS1Y49xonkzxjonUDMZxAV8",
  "key22": "5WN1PFqtEYjevpqnRV5r2GSe9CoN8neAkibpM6xK6HfWPkMuPkY7bGJKY6jFHnuoRjKgB47vgNxqsuooctW4aRxY",
  "key23": "4ho1ANnFyDPD3HneX24EVFEdzmXX3CZ2gHftYhityP37zjMruQaqbrh5TKYduW58VAjHQGnZo5W6dQSJtMBjttNi",
  "key24": "5XcUPMRifhxbcPASu3hkuLckBPimCA29DYXZeXvuQpUpmhopDcbDhSibJMwYEy7xQoByDLWGVu5x22Nmq3Zy8Vgf",
  "key25": "4EAda39BXtTT8k3hUoCqtHZuwQpcA1tAv7Tix7nL7aGfHdWvPXA9V26Dmb386yJuWAec67nvqCxwZSFq7BqjxYdY",
  "key26": "2HJ782hXrwugwEZngsSAvd4LVAWHiqPqZBKLWtkrKmn7oRBvaJrreDBP8urnoZi5XoECGd4RJDz9ktTHnL44UBeh",
  "key27": "2ydAvV4KimDHUwVWhMh9vevtaqUzWsB1mc6ZeP5cXP7oXyt14cq87XRo3Hx2uuSLLYScjWwmPS1MjL2XxSzn5m5b",
  "key28": "59SNd33n6CVisvSyibt2YPmY3bGQjGwCJQMwMkHB77n85jpe21bHoNwFRis8f8pA16tH2QP2VhQ49iWQtH4w4NQa",
  "key29": "gS9zoSw7urUpy6CToCE7KJY3aqYMGkh14BJ2K1FMSVPH4VjZoiZBs1gGm7JhE9hZ3dw3PsxdhL9Qy1cqmf1VLXv",
  "key30": "35AYXjMCrEgqJbJkFHttkuCCkVt9vnPHMb5UFhDMs1DZfz53pMjNn5mDpWJfwKoZiSy3GVqgoa6FNABxL6txQdBz",
  "key31": "Wio1biiq9DvFjzMe6qBE1qdiwA4AZSWwvLnRd8TAVvMSSGPJ2sYbcWzhta9HS4jw5ehuZ5dsH27mjArCYwTXTMZ",
  "key32": "2CLcSj1HYZ6TCAz4fWoWu93pf8PYspibe5Q7uNBrrina6wBFp8yHFfaHZvVs8cqMaMMNAqqAXiSkzYmnkxhj2XuP",
  "key33": "246ShcQVXq2h8VxZcRY2wdxxE5LtWQbjp4vqx9Sh54vfm59FNvv6XSUQfeZKe43VNoZWxFM2qnKiQR274twjtFfi",
  "key34": "3qKymK2JUX9zrpiKUQNsgcv57FEoJGjbrYY4ZuKG3pZaaNeMCYHrozu16wRkKcPs8d23eKSZEfRBXkZicpFrEUb5",
  "key35": "Yp8dnD9ZoT7NVu4WBk3UHp6nHmN57Povd7DxAXpta6bELoXzTsxdCFCbceKLUgwWWCoAMTrSjb7PBBpQYzu53wL",
  "key36": "mYHpmmhpiAU6NGay6P12uni2RRVfMria3pnDEofVE8DoTbe3piYkb7Hz9bJ9gNQ64CKGjmFBtiiBKkpkX3kDFqZ",
  "key37": "5AJBdRcFJZrUCTxUi8K1SDdu9PtVbs3umLzYjHbepEGYJeh8ai4iKpdq3FkLFyVY2vASmtr3FJjuF7gXuha5qmVx",
  "key38": "2uHaEzXsv3mGxwNot5KA8uhtjZYapvaUNfPpdciY8HEEyGYH5NVwgAWgBR9sHfAhQaUiAnR3jC7Rv4qrz63jHLre"
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

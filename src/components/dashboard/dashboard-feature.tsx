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
    "2pvkmBJPBnx61kb9fcBu5ojUwWtZ8Bs7YnMqzGGUN18B7zkWn6D7YL77o2Rd46xE6X9EZ2J7f6tjxs3tcoxxfc6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uJNvPyduoihRcb1DhDwH4xBKfkooVnZUAJYrR2QdVfdD9WuSnpHzStBx3YnZJPw81yfQEadhq3h8fGBp6uf8f4S",
  "key1": "DDAWJyAvSUYGA9BWURpXfmmE1SBUSYuhf6Ew6c8W8ZupcvFAvmWAid1ZF8k1sEUQjuCn3vGdzABo7KiKD6DKPzV",
  "key2": "63A1ePnXMqiqEYdkk56zyBq9euPkZmAmggvgBpKvWMGnzPmU5cihzpdbWW4yBj5qEd3APK7nDddtj8FzAfjM8vd9",
  "key3": "28pNDQtwC4AVXc9MxEhfF7Bo2bu1fGaic4eboQL3dZRs9yAC288sMxGemGexbNd6PgwgBU3R8xbzMSUqHC4vUtkF",
  "key4": "3YvzQAgNpDsNqGQDBBNq6mbaLpbsPSZYmkSv1Jv39bPy7fLBcLyYV6J6e616u8Qiu6XrwyGrmPF7cqMGfMDgmmWD",
  "key5": "2RTZSkoayd92XYWcgeHqSGsL5cuaT7KrSFDUYHPaFpGgkiCFyf2GtYrc6YeAsRbQXmrzYnfgNNPPe21jfwQjkn6d",
  "key6": "3hf6B4KU5QcXXYsgy7NYH7kQNSwKmptyTYqE5ov4FWtdXfvf2he72BMxFfvwbWK9vMhuZ54QxcJQZWH7XEQ595J3",
  "key7": "4dg7z1ExSRYwMFLo3t1VEPLyddSVtAVAWqrsVbWmCNzfXr4hWbEf54QpShuLtKVA7YdhKBajMTkrSReEr5xXyUXS",
  "key8": "4fLadRCyPgPk2Dzq9xPX7aXwXuPdNNm1yQNqugJomNXVjL55JmD6ygZjtGhRPH5JxdqxnrwnKoDTS28VzdARmpXC",
  "key9": "3d49M474MX2hdkWZ9cZeSLVmeUfTaymZvciQLKH19pUeKRPwXxiC1Sqz32yax4vWiWw8uVJsk8mk6grP4Abq6HYg",
  "key10": "39YZoRFGLX83BhRh7rw7CKFJy7zrFnH38D871GVmkWwTeUJEevzRR8meGQUH3FCPLgh6j2SpHyPZHF6h3cfGLVc6",
  "key11": "5r8YJ1XFgnrVdfe5a42s2YP3HNnPr3SG3nmKZjBZh8sr1syi3KHJ3xjrEGCpHbb4UpAzbz4qrPetitu2caoiQPVH",
  "key12": "krofPwanC7Ys4zvTKZxSLrvcGCdrNh8nE1GFqkY1hLK659X7CVjpEKedWiHnuxu4CPhdQaYZeF5vcd46G7ZAXTp",
  "key13": "3A63znaM6rqVj19kxJrWQmZ18JFXbeE1BqM3RjC7FwkU7pSXCKmKqGR69KjaNqRaQ7oVjiPfVnxU5RbETnkN61Vc",
  "key14": "5EeDHLXwXTzpSmzdiiSmJZfiCaeu5qtyKMGSnGJpEC7BVBD55Sqd9paMtVea63jug1QqF8Y2DvgQuKmPV8MgK7A2",
  "key15": "5iT7U94WKSAyoKKbqGEsth37PeJJ4TTL6dedZ47PVxzPJQjDrZ2W5dR436QTUXCm87atAaMqaX3vjWDdstTEYhJi",
  "key16": "2imXb4VpTRrau21RdJEKyZNNKjTJQHJvJHWwgoTdqeiL2YvNjiYWD2s5pWexg6VtfrfJuDFv17CJaqXFsCwF1EQB",
  "key17": "bM5SoiokD9yBeTwezjDbt8qLx2ghoaDRPhi2JTjC4H3WEzhLjZwXVi5YiJxrZVVG7gH7Q3F3uA9Kh8MHRhjPb6i",
  "key18": "5EvikdArsdKSfG3s7KzDrMMgJddr31x9nNaTfo9nVx8LZcSX1hh2YTPGKgzQMqQ3KUbEpwtpzLM6TsSvqu3oJow6",
  "key19": "26QT4zhMZmFbLACesNYdQjfuPhsBQ27wBmyxzKPJrB8WiDUJjc6n56NnxLR6xnVr2w7igib5Wcx837AzR6QSdryG",
  "key20": "5Y34fCCmJ7QJJLKT2cnTSBbav6uMVwas4m2HQLGUSymMWjp4Z5Lbt4UGPJKat35fpVKPEZUMXPbUHvPJLj9KJERv",
  "key21": "4SEEs3oGGXh96vQhUJfPgn2QpFdXNxkGEd2wskkL1ghgMKws2MZozsGdEjiKWRdJY4zz236z9QvtfrdWQkYRvmp2",
  "key22": "33LWSAWGhHC3QnvGUbpqLb6bNNSLTbmMHAnE18hU9GGUW9RaRUMHDHKD11nqFvNKbsminb7vQ11nq1HWsnxHB5rn",
  "key23": "2sUdPhvVHJhL7dhPid9Hei8ZcgBx626xfv4y8KujwaRjtiuFHiZutZ7jwDBKmmte5yK3KUonMXvcCjYpqgB8wU3U",
  "key24": "4BXC2hcjrAemH69AiWcL97JFMyF1jjEctoDL3KJVLk1W1qAceLsJMckc1qU81YHdcB5rY98U353cyYNhU3uZzgox",
  "key25": "48fSkXdhdm2mmwTypoJhGxEajD2kPeuWDTG7WPxv9uBTU5gmkHkmdZxXEDi44yqX7zpgWZ1GJgQtqZEQdEaJfUFC",
  "key26": "5DmLmtsxL4b1GCNUrsypVtQ6oNxLdcscJw5RCj3VwD5frV7UsTGYiMKXiGkoYohB7TGaMkWJoyVq4xHFjcsjbFtF",
  "key27": "4YsNzojH8sSqE4KEMfz1st7EMdQW9T6keoF6yeuEUEimvBa5X4ZLNyR9oKW4mV4puD3eCeBVusQB8MMJUqZmnBHE",
  "key28": "5XK44Xrt43SXrEu58D7LGWaknRrnCajdUX3SshC4KBRPZ6j8kpB64AkdKiZfXEo8FrkkreFNrXBuFVR59K4hmwRH",
  "key29": "2MiyhqnDxb8zVAdJ8iWNFpQykNWdjRTCNGT5Ubdwth6Up5td5UsuZFUgGLuNEm2bmz7J35FXisjoBvkssQAjLkYU"
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

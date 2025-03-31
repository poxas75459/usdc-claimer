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
    "5hwEwwptpiyptxUjHt4hEoZwkp7ufAM6ZJHqE7rxaB6pav1JERfc2tPqmc8kPyzE2ukbbK31wFUgdUvHDBsKwSfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iF1dG7rCWQPATJnt8QaFZSb6fdgN5t82WT2gFsiY92uXiedKc4vLVXhPMZgtMGeZrJRLi8eAShJ5fQibm7ZAHFY",
  "key1": "2o65H4BPhY4FT6mUPGvzqC9rDwrzJKGv3QwXr4tAGbKtyt1EGZrmxeCwszHD8pTuoVVS7CUqcUSe2a3WcCNG6Aca",
  "key2": "4XKU1m8otg9vAo3XsjFBqVDUXnTH4p1RoDq5qzLpT2d9AzGpEdjgHh3rxR8ZVpgkiQ2NsFU1qVpHdwwXLYyDuc8m",
  "key3": "4yCZgciE4venrpyvHSqjk9ZVJ4otbSiPRY4QRkhUZKF8P58pTTtaYwBYbUmgQFJQxKhdQ1fwKYox6amwDFn82jne",
  "key4": "3usdkphxBMiWCSCT2jkJUA7vYyh1j6ge9CvPJkPJnTQxaWgb7g8gB2sm7c3bbZPMeovig15VxKegd6Ry22fERRyw",
  "key5": "V2ea7dMd1rQ4i2rdKmmwFHvHPZ9s6XuYj4KLue6sJ5X3Y88rTFUHRQecwGVhd5MAsDFRKTxTsN3uuMYZH39ocbs",
  "key6": "67NqRXQLU5528VJdnh7Dbx979oqgX35arfHrUfpHnhzAWsmtqZknS9r3uQ8sub4xbBZr7L65Tf3G9YyF2K4MuT4E",
  "key7": "uzHqf9ttswMqWZwbebMEqyqfxAZREZopcabMnzoQfEPGmPtQi3fphJnZfmh3WBvsmpZtQCrDs5yEHbvQwMLUu8N",
  "key8": "2zQE7sFUapUHMbJpK6V7BAxg1nA83atc7vCkZKhJjxqAriA5vofTEnBvcyLueF87NeQqdWiHBtdEVGRqLTSra6Bz",
  "key9": "a3wQRiZdaYguWAmnQtsa9rpUUd7MBv54ZqYcMG5SVMj3s9YD22umb5q4kejvswCXTyHGaQ4tVxxbRPQ2qrtJQTF",
  "key10": "usmTAi5CoJSTrq4JBkhiuTuu9hj8ZQ9mSfhFKUWqJobY4y6zHH74CB7qbUm2PokK9o51TgoEHL57QpCoVQjJ15g",
  "key11": "2T9Z64z3aM4QsnQKzK2NypkCKWqAQQydDsqqAyBpKKd8Mo7TNz5hTsDaRpWYNhY9GUx3QjqzbYvsj9KDokD83V5k",
  "key12": "3cAMkN5nVUQdk4AHaSctPDxnKEZEcFQ1CrFF7nXotA4SxWmkhGnGtUiWadNkdfQBjS66zbVGXmCNdVZ9M6wKGEiS",
  "key13": "5w9joxRsJGqCwagzkHMKmC2qLaFRerk625njdYnhB3ypGn6JNVMCjSEtCVs8RVEEqakvQvpNQrdYrRQ3H52VJ7yc",
  "key14": "3cCjKa5zfgTKWspsUQUPDJeAePBbYbFh6UnYJDFm6TWes3U9K2aWQkHBf7pTAtZaBfkriTNDNMNyaHrGobwLVtY8",
  "key15": "3eMb9WoxMmDme3bff18N19kKyouU4oGxR5V6pro7hqV7GfJ64nFXKbWQuqMXaH66h9fn7SA2fdc7ZMaQkpjNi1Tj",
  "key16": "4SB2Lsn8RHdhrHobwMwTGe8NBMhYicWrsZGftB81XSrn3PATMgboUCnxWTQFsF5tWXiF8EZh1HE3kVbWKPkbgn5n",
  "key17": "67agEFUvzxes4uyMK3hoQsbDQinxd2prYZpaSKxyMqk2RWG1Z4duyWbrdQNB9b8VVVdDnqCnVgvuF2osJDKx3QrJ",
  "key18": "d4ao29Z6cVgahhMWHWDXD4w6aMnFgiQVY4yz357kpfYXDezi67WzAbJwbmCxrcmzcTK5iPhKCmu23uSYiGjQfwD",
  "key19": "47EQvkDMvEG2qYLqJRNt9omh1LcHMNvEo7kR9JGk7bG6VvBk4J5FThetMDqkRdRuxqstyzZUasmmW3Kygyw9eJmN",
  "key20": "2winM9Z7xsVKccLwYcK9ZVYZdi8dmsytCMXusAGWy4pd5N8pJ3fz8pzyFBqjcJHuRTFiqx9ZXv128jN3r9Rjzzm6",
  "key21": "4Sn3onWGRPGFDi7xxeEKNaSNpvA5siBSH3qygaBx7mKB6MGX1gjVFeHkPe4bXLVeb5knGD7ACmJ8QVZmCtQhFim9",
  "key22": "4MWTSCGk58YXKVGVjm5ZGwhskCxx8DGfjfmQ1EJnrFG4A13rjmHu8JyWW5Q8rgyuEUgDjGw3kMdwa3yHy6QNwfTU",
  "key23": "4dJxA3sAkBy89E4JhPmiG8xSYgRzHoa2t7Ciq4zFgZbYM8HSb45jtmfzUmwRNKq5eH1wyikGyJzfTm2uWkSq9bKn",
  "key24": "45cN2D2PD5hCZEGGo5paPpiRRHAXkHJ7h6J8m3hqHBGrdNmLUR3KGLvLLNzDEpE3Q7p4Eb5AqxWUYjcWWuZsRa6X"
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

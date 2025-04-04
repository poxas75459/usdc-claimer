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
    "3UzhUDrBPwA1Gh8Hy2BGcRjRuBG3df3XrpzCn7dUdM46FRGZq56y7eFEiZVU6twgGbgVnmLb2f7P8MUs9pZGxGUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bZ1jq9sfzUBAKmNSCxCA7gtG135tWbzTZY9vZrsbuXwmMbspfuNHySpm9MdE55mPY6ZWNzU6SqscDDb9mNxxx5R",
  "key1": "4QzU1mAjgeYpbGftC2oaz8h1y82413siMAWdZxjUpVUy4geAkMmSy748pU8FnhNn2nVG5yucJ3gVxeoc2tCL47FT",
  "key2": "3k8RPXfid5bjn3UfPYshaVycq73ejNgK2sjRr7JEZag2771B6JS62WptNkAP6STNfAW8tP6QrUUTyE3BG5j6Piz4",
  "key3": "61Y2Yw8vA718CxWNpgLgDP7dXnL3cVZ5KTnBnSongKmfRpTnoJEjBuB2k39Efkw294Wnda3auYB7FHAAF4Vrm2y4",
  "key4": "gs1wqVrwNpyEmdG1CchDRpSY9LyY3MAoNyFzV9EPF6FKJtA3qTQ4vp1CFEjqHVw2GYR1aJ6Vp1qMFXEu5Gqv8qa",
  "key5": "3tcQw6C5o9CGDqYSnJHC2AbiSVZpwFxKrYTgAeXVC2nJ33QYneKGg9V5u3KwUv15N9DHjY19hebGU4mvxForkFHJ",
  "key6": "5QAduTMCPaknXqz9ynLf8iqYdvTHheafcGDAKob8nursSSJ3vKuycVWFmm54J3WpxawQFJttYGdruHLdPLuW9jnQ",
  "key7": "R5B4PufgJ58dgHR7FDuY19rxKF1zMSKEcXckh88rf1cTtUeHcXftDFinSkWN7b42CKLhwjnq1bvqBpXJEf3arit",
  "key8": "2L9ostZHUDBQvF76gGv4ujsLRWiNrcJbjKmqQGwvdroGo6Sq7Q66odQgJp9nTJBQNq4QXtke8nptdsYyMWrMPEuL",
  "key9": "5WtbJhjt8mdpoGWNUvduNd9m4kaS1bPBYw29JR378mT5wRHZEKhpyDUXfL9CvtgeZk1ako7uYKYZP7WMbmwsLz2v",
  "key10": "4wLts4LrZS3vKBJMJMDoRx2uLDWjn2raf4PHxrHBPWi9dNFmC2SiPhFnxwLMnBJvHbcbz28CxEgpuaCkbqyBha74",
  "key11": "3PGcX1uefppdzqNJrvw9K3tR6ERkt2CXa8sp8uEqKfb8fxnhYoAgqrU9uyiHyLp49VpziDreTZiwXqFn7eJETHHH",
  "key12": "5pZHZNwrsDxREvE7s2ucSrS5YVMyMJ8H9VrKLxQTEQj1AThwYDZCkgvT8Eonc2ftDfosLmBkmiD94t2TRYSJzPxf",
  "key13": "4ekBa2rK3FFK4Cue55Tw9iD2kL57zvezrnAjYq6nuhbTpdRATP1RqEzP7CxgT6ZLQs1pQPVcqGCMyHnzbKcdP4QJ",
  "key14": "2hsv6UWRvkccc3mfHHYreBut92WBJ9kKxgHWy6Z5j6ZzU8FHWffRjVrNNDU3Mp8i8VhFxjckSPXVN1csenn7KUEo",
  "key15": "g6WSgBUiF9urC3gqPDPGYbUXhEDoEzWVN2wNzcLWJjiQuc3DCaDU2R2g2oS97ShdZAtEBLozRNLoAEeaNNqt1GD",
  "key16": "2nR64n5QnuRcZh1578zcCGiyLopi3SM5ZnzpmPxs2J7H4aTU9LxzxsmwWuTfovHUryEHs4FkKqR3UC57JucwyBBc",
  "key17": "5YDJxiVEq7nZe45KCgXwqmZrT8oaN7ZAPNkaLzmXZN49Hvie3Y91GtzoYLUErDAcL5vV8WjHjiu6BZkd9oHqrUiA",
  "key18": "taPhaUvuZMUKbijqSVGnKs8A1Ns5gueQKbiokd3vX5SJaEGPNuJ17KJBxDWThGUuRVQbSSBnr7nz27iCJMUfjbf",
  "key19": "4HcSQJGcNC6dCyuejyKsiXDohEJ2wRxmtCEqsV5nJh6YShg2NprLn3WfYH9WCvMjTw7NCzxbdgEdchKz5R3GaGgy",
  "key20": "2S9JDBJJ3WHicKXwfYLCJgP2CheYuCP3EaUJ9cBmoSQEEiwCArZp52vYDDPRPiqjib5pw4Y5BSrTyL9Xp9MGmw3U",
  "key21": "3EG6utPYLzemHviiuLFG5FCCgp1etTp1zuLNkWj99yaAKFTZrk5HVL5VnNXrvHPCE2A2WZQDrhmJNaDtrHbUEqyQ",
  "key22": "4U3V6g6STVJSThwG7JKLEYczWuuFVwsfassdGaZyvs6hgbDFbDFGfW9qVtXhBHA4E2YHNWwbGy8eewrpLeKYcayF",
  "key23": "39rMZE75uPAmiz9RANbBt36SNVWjcN2F3kiR5RNRTPPTeCxfATtQ5UfX2rMRNsHQiVyCcjJZ3hY8qzeYozUNKbSR",
  "key24": "3ZnzDD1juRyX2xkxPq9ZMT5gQS8agGcRS2Bg7Zirxy6yK2fUMqqCqjthFUBBM6yGRoNVVgKiyg6PbqtMyRqoFYgr",
  "key25": "3LzwTR5iZHbHDWdxbJNutL8PW1RhZgpPJy7TotDbhyLhAS9hvZiMjjmjrRuTcx8LpgECfXXPnED5nSmrGHynPhHT",
  "key26": "U5juLRxPd519syG9eLxh12psmgNMfYBbMvxpBwQhpc1iJCLwQbphvNDrBeSfhVXyNCz32SretD6e1L6yhFANtjG",
  "key27": "275Tk6qi9TuuYBA5ewGZjo7iDh1BmbDezngokVmnFfQmRWNpzpsi9339pj3a7pKX3SSK74s5zExiaM6E92xUD7P8",
  "key28": "2gAaAeGZtgwEdPtDvPrLAxjZoUYTF65HZXeMtRxUXd3YwjrjhPUjGNjpiNKx2fq6eVfFEVwKaEUKsxbWLeRMyY1Q"
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

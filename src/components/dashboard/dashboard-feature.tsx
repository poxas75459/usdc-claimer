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
    "35kmt9UDv2Bgkp235wxZPfkAAtNdLbakiAEXwwnnjmrUMcQGjSjjdwFDxNt5JZMuE72tFLu82CHQ2YcWycQoz3Xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PYDWMJ8As7bdd6pzP8kDD5VJ2dyP9TkXBL22mYpw8RM9XHFSa5fhKyAmF4wT1dPLTuEjnrXubqNDTU7j1UiHoX3",
  "key1": "4cLnbbzuX27pGLQomY8dBLNp3fpBj4Fpf8kXiDRxe42TKd2GQERktySn1SsTCw9uVMHxWnX114coeiSiYGQ8qUB1",
  "key2": "M63RTVm3JRjYKNxaxh4TNLbZWCWhFjz4XREZzbYHQNmftbnntAjKGF31UxJH35sxiSvR7vf56yfuDjEUCCWokv5",
  "key3": "5cg3C5mmHUQQM1SZDERhZTyCVvUVxgjXygD8hsSHjzf4ykDLhvZTtaQc1M9kSLUb96ng9zYBrVxC4uBHdMvZoMFQ",
  "key4": "23SA56U7cuGuSq7BWFPUwiuAJY79MRHQ1tCgxBgm3AZMXV9mmgm7hiyY4AiJBK5RdnxdxJqAKkT5MLE6ZKz8ehBD",
  "key5": "44VZg4rjp4JDATh8ur5A9aKwMQyBRYxeDe6kaZQGAd9XBohDdwb3HA41HXLnodKFpTqCMmkCBGmyLR5RaqTqfnER",
  "key6": "46RnSoGy1Xexie3GMf3FTasThLTFqEEnMBsCz24VmynGBNhdma3rb6TVH1DGXjuPu54LTxz7yefVtuexqJysSWgZ",
  "key7": "4ME3ncjeFSCEZUgMVKM9ZDSmNoYZq1tGP3rQk29m8R8UMELVa2SQR8ceJsSqiitkx6FWA5UhRamgUY1JD2Aecxr1",
  "key8": "2rbbJPr1bykZsQYQt9bUTih4D85MHdkm4AjcGMZm6EsSUEvzUqu71Kv5aTutQJWXWWt88LzHFevV5hC8SCyuE3jF",
  "key9": "qc6qECcxRqSdCTz3AEYeGGdbg4A7wiHzL1z2hhLZd3tXRpZ278tioSESxkPQQkDEmbhpDez5vem1EHw6vgi7Lvz",
  "key10": "5GmWh8heC7G3idhYiF2Gm4iWNbKvvBETaBmDfUpwM2bPRVVfxn5DYgM5du3t4Na4Rnjz1QDbwtaxrbvNLQBi8Zt1",
  "key11": "3gcu3Hju44gsWW28mM89VjY9wAAAJ81AJrovSvbdWRgxHB3oRcAXgVNJFKhKLbrMEqzAv1Pkqevumy5rNGvwVqp3",
  "key12": "48ebopzhf2LJuGG3WkPtdrNAX79YfHsdcWeqt6jByVHPdTAxqXjASWEgEJyGEz5Yzxxi2HVQJjvebukhjk4VLnnu",
  "key13": "4NXG9YpTYkF7n8uN3fLccQbfSreLZyPCusXDBcUrWUKkmYfdVPHbu9wJmjb5NZFmaLAi22PobY4YXkYgphUUC5V7",
  "key14": "3PLZ8oUZdhpkpW6c7Z3feYt5AVjKxijnf41VhpfHUW2AusKMF8oqStue8uCMAYH3cCotLnMe7s8kZQRLu6SkY7CA",
  "key15": "35NBZNrLRvGFh7X8R45uoSZjYeetX28heEHnsGJ2BX3bTDBdrT6SiDQNAir1TWsoZj5ncBKniL7hhXy9eFkrAuhi",
  "key16": "3VbRph8k6jMSkPoufm2iC3WkezYHwg5Qfqi3J6oLe9hkDujA7Fcjj8vHx5vkRryd8AacYDanRmnoaKxu2NdDQowb",
  "key17": "n8RRKbJJaSScfTRNJ5tG4sJUS7rJYQsaq23KaBzDojPoDCvoPLpZosr9Z9UtjktPmt1v4mJoWhFgZB8t1qzkQCx",
  "key18": "2RcoFtPkcLAEAugwqHzA76Y3NfnyTrrt9CmH9Aqv8ANaXLm6Hbi7pxtUc7swSy6qwBtuvzGsGxWCB9wx3eTWbAGi",
  "key19": "jgZcuTQ4aAoXCqkb3vawMm7uTv2zhFZG8PsA4o6qscEM2nEFBwbys2XQXyDdUyAB1YwZuHr2c96Lw6X3fyNrEfY",
  "key20": "5sGBCrr6xtLAPwn8zhVXxqbU41X1dPGiqYWHcvM5ZVfZKCknmRLAv4C3Bi4PMUvp66VWN52iLeLASuDr2XBz59am",
  "key21": "2RyysyfzByW2LEHPWcH1q72qMiDQ8WhdU2khbDR5ZYTNKGHsuKJGxdRNrTtKmA9oMFYJtYuCQNLzL3gWsjdWyjVU",
  "key22": "4sSJEQWxGr3Ua5r6PvNmjoY3vtQUmtJTEeXbYdJWDUK1AYHFgNSULggkUB4i7KYNv31uGen6n931JpbxG6vwJeWw",
  "key23": "89nZMK8kshNW8v6CwgWD5CtfAZVMJZzDtAF42wJ9VvN3L7zDkQhWP6PRukp7vSbJr23rSVXuFVG3wX3udn7bsJ1",
  "key24": "58uU9v87pQxJbagV5bH8sp2EhJGn5YuDBxad6azCF72oE5fezRDfwfuGfL69LAef8JfgGiX1oZDheTEQuL4u5Jzd",
  "key25": "3hxH4SmxdDdihquNzcLoJgU48v2H4qGeAx2XsN4sNAaATyNr9YRXjnWnCcK4QWdJ4FBT3E1RDAhEsohDuF6W4N5H",
  "key26": "4nrpETG6QLkM23qN4EtcH4nysobHdpCV4tw2ZUF5C2q4pn1u2dGCfHiUspGyTKNdfXEUqMdfp6iMBh67126Vf5Pc",
  "key27": "5qjf8L8tRML4yhkzxc6p3TjZyyf8QR1BfEkytYeT3kxYfVu5RreamEsqH9YwLZqcUkfFih9MrScWHAxM7R137iiz",
  "key28": "53wzdJQPHWpWNLyWtbXchetNHJK59VQsJcq38WBPfbCzMoSNKaYk6FYU1z7Aksx83xCkjuqi4Dxb1X4yCbzxVPbH",
  "key29": "5kR87cg1wb46GpKNpkfd68VLG7t8KPyQ5EvN8JkpHBTDTiJhTSzxjXhsvKy5ng5BrVqfHS94qxSZkqdkfMZDLc31"
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

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
    "jjKU81yJpQQkiXwWopDkpdmw4DutP9fWFuJjQoMDE9DixgCNvHgPyHPiufEyUvLpEiek3yVYa2hVQwjAq8Ug4tP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AeAKwqtpEHtWrT8dt7rN7B7oXy1Bm5fQz1AkgyXryxtykYGsQJNc1SANBQ3ttZjwiSknc7pHDjLQh3WD1ZnDbi7",
  "key1": "5ki6E71aY7FqBmVLWBxLNoc5UTLRsLkKe2XUtLagqe7CQAo2uao1gpo45TpKW2yTziJUjQhFhXECQHxfaoFnz2uQ",
  "key2": "2eqmStetpvKZzUUXWCjNwwnQNdSeU6mw8DmkWoVehuPXzf6GfmhzpnyWTNFk9jrqhftZHyKLrWtbLowW9PW32uNF",
  "key3": "5gXognxyQVdYYaSPfFESz8Mup9UtYjVjr2mLR4pE4d543zknYMyKhkp8rDvpeYxBaS3WTkcaFU2yGrmuJbzD93Hz",
  "key4": "5up8vySY3wJRJU6WYDVynvHrmBk8kcDKawC3QU41wry1yEMgX4FxQ41hXnm4PX7GJ1c7i1YasqFMJ8K85YoHCNQq",
  "key5": "66Cik5ddZV4GrcdiWdwserHufMMMUHN3decWAz3yusSDZeA6yWBfhKaNoMTx1UvFVFpf9ZQFzWDhJHZQBjLBPSdb",
  "key6": "5DvgYfBhsaEMVtiFesD7TWCrxU86DbtEqhiGsRruDqTqAaogcKUEz1UdzLXCRpaN11iMoaKu4DE9CY1Ntdqc5j4B",
  "key7": "3V1VmRyiusrFmkoLZhn2rxLs6BSa7SM5V2Tw1wcaojxtzdvBZwTXLQcfZspUefw679LeMt6mnX9hKHAEHGi5UJS8",
  "key8": "2ZoXkFyvkbwaNApFBnTZb5fGvD8Rrdaouex5f1hdVezazUYL7ZxedAN7qBp9icGicpVzPGwLbZx7nQbNooNqbqVG",
  "key9": "5b34xh7EYAuM3DwME2Cj1Ma3LEuCFajF9hUon5Y7EcxE6cMUkuekDQrUxhoDV7gxn1ETbuS8dJrJe2rv3BQbSfMo",
  "key10": "37L5AzvKF5RkghcMLsmWaeUGQ8jf6TRzTbofxK8GC41StviPDTWdS3XRjuXoaAiEU6n9znQmkwBAvgeyC8yACUZz",
  "key11": "42jeokodxZ92t9cnTUDZQVFvYBEJwZuzHF1XaJoeQ1YDg3byo11GyR7fRA1Cu7v5sW5v1p8PSQYgXxP79FLxkYsz",
  "key12": "4oWP7v7577MN6dw2zgBALJ8CPbZDc1pXte81moDoHA5658ZCkcWQnuTXXU9JDt6EQk7SAvTNkbnUTdCZd1naTeKL",
  "key13": "4S24YGB8Ff23kKN8mCi4o4iSJFL1w4XbCZGXZcvdrdbgmNUfb8x9aPjnvaNDjoMAA9igyTBCTobJGAwqCuJa7TjA",
  "key14": "3JWQaM4fY6NG55ZK7CXALzBY9LbsybUBrGmfjnhWcUy7mPGcumMFre2Nn9QHtFR69AX47sbN9EN7YEqQN5KUxiqA",
  "key15": "5ris9hRC7n9ih2QdbxwboARGtXrJVEFzTvRbYAWJCvpx6iRBFH1GiFG1apoNonP6T65Wa4QHGn2fT8VVTQciEscu",
  "key16": "3iqZabC36RBgVnhgEpXkLS2XfMS6PgfzkEpVXuBiEmre7N2B6hSCe9pxcYJiGQYMC85DTHUx8EY5iTS4sUKtrSUM",
  "key17": "5CUbTD7TPGA6v6282tSuVfdBHHKqbgf8MYqrzEDBnR3AxUVEYCgDsJGPSXWHBjtWvDZFGZrVy4U4R6wLuZTUrkeH",
  "key18": "33n8w5BG2RYkzP4qN1CQbccHb486bzWaAwXt9X8Zdn5gcR8Lu3LF2gM4j8GChzTkng6o6yXgGKGuiPREYKmRpnfV",
  "key19": "2vs9nqtRdiNRrSy7k7LxWWdschxxC9CDE8CEzFMnU2AgcvJMKkuPXz3pVnmXsxKCbA3ovcs554SFbQKtfzzCHP4W",
  "key20": "G1hwNd3x7WMyb2rpBAxQNfPcCPu2ZNf1PdLkRKeSYjotdYZaZ47LVFdVq4XPNuAAfMr2Yz9eBh5J3uq6rHiitTw",
  "key21": "3jLzCpYnkSdcaPQLAfJ6eSe8TEqSGLAb166TVzxfmsuM8aXce8RsxBoZLVoYpm8u3QCYfxVCVBCjTFENGozUuT9x",
  "key22": "5a3WNpe1raG3WvZsk2veeAuXfwfTs2NYgbrFxzkeDeETUd2nDxHQPwZVxq2JjUBH9LhiaFqriWyKsR6VU6D6c5Pk",
  "key23": "3DmLx6LV8i22upjUoH9BMxuwKU2Ce1WygeVbaEVHxj5F1EQwHvttdacbh9A4jfDVBHdDVtYExjLs7ksHpBW2ZCMw",
  "key24": "2NBxT7P6zsaZA6MbqPspvgfTCSUGd1KPQkuPE7VMN89gykK1LGB5MdXcckq3CoyXvC9h2FGzhM5AczV5FSZZsKkr",
  "key25": "2bwqrvogUJ3E1aVW6tzUxxHvYK2MLmZGsmQTNdiDNWBUJik1CBg5TsFH7eHAdKZ6UXtrfK8QAbg7e7zXyYHhKeXY",
  "key26": "5rujPJkpnBp9GBkW7Bfj3Hqwiwy9cpEFaK96X4U2Ekiuup9F1bdcxsGPuYJhqaFtor4GFtLUQc3JS1PWWVv47FJG",
  "key27": "4s7ZTeqqado74MWkKdfTDtAMHxwjDdwzbWdgVQm5rAkJwVZ4cXdNePZ9wdZfvRKvewcVqwqSH6qs3S4sjnjgCtsU",
  "key28": "48bQtchCFwTuGv5oGMLV7equbRsFRGrgURndZmmRRdYNVW4Pcc8FzFb264nXR7jMzSEixnHH3bURGoRNY6BJsBGp",
  "key29": "Z2Vup6nFFiVpeXfmUPTgV3s6CFXT7c9fTgwVJHPBZz7hs4wUyfjMnBHWUWbsTsZc5XfhtdsTrx3CoaLbGkTfKDn",
  "key30": "4Lk1s7R1dq7rJBhsCPQ7SgnQPXpD8H3oSBXXQkhY352qmNE5CKTXQRvxBQM1z9RrL63j5uRnqtiQRnNr6EvfvKCn",
  "key31": "62pWvFKyBja3ZhQSXyKsWH8ZgTUmZp6qcuaHaEYdf6iuUr3fVaX6skP5FmrJ5FjG6r7J1CtVdhHjkZeGAShPN1s6",
  "key32": "2T6H9YWGysng5wu88s4Um8UNtXAn68tZhWH1ukvP6qSjixR4GRYq9e4vxsLMYEM5awhyejSXufubKnG66xCf2gec",
  "key33": "3Za9omgJyK7GXneCK7shkhMiBRGX4F1a3au4YSbPzij7ytEzgGurqqZS9Pw7sovcbF9gWdSpeDRCPr5tJkSa7aZE",
  "key34": "2gfcW3pLV7W6CJJbXidXU5WQpcuRENYFRTTmkWHTSxzz4c7VUghC2xZYUAoV8KMBQ3w3BJj2pgNrRXniQAw7skZK",
  "key35": "3jcULKxYZng95a4UwEV4yJowXfzttyn7DrFf7iFxwnr591RKAZBoVBJ7PhxJ6Fp6iGbcwXwg4JgAgdSShYnL5VnE",
  "key36": "4yqBywqHrm4Xgz9HxmECEfyPvm1oWBcEmXrWbn8Fq8n73HaWBhLTSoAD3XF6Wz7EHnfnDdeYwWrvwHs2va565PHR"
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

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
    "4pur7M7YWujDNRLyohYXHQ7oswrKniPVfeoLaQypCjMkkBdpWuG6nfkoiwpgHV4fj7bYxrfJ9yPhYdKuYUy6cZTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aehkjrPRGJQRGqka4oJey3R9LRqUQc7Pa19Ao8ETMtaVcy6ojnPFiXfPv1Gr5p1854fkdkrP94J9gKbtHe7Jyvr",
  "key1": "4aAJXHhQvr56HdjmUGdgkrBtMC5xVa5A9K3kuA6qH6nmFLFMkkZesY8WT2pbzoA6jeYuGQDwQqLw4VFNWziwQqCx",
  "key2": "2WgmdXUeocQf6o6y6C4YNBuCz2HsUSBiXBecC4pNiKKirQp1iKyKsWVVvRJ71WSYL8oxnPvXAxVAdZA7vMM3cP4q",
  "key3": "3AGveK9L7p6GJtRqDX4QTnDXbSMdymJGHvw3VFCWqi8pPKAxPjHa1anNdKBM9SJi1Bd9gY3MbsBFKVhFY2VKYVqV",
  "key4": "vPGLHdTbwS81zcS48g7c8VTV3WJLmxMX7fYMFiRuu2wH5BcHf9UMADQ59XhzsefK69Q8oNurZBWCeg9sAVFac3a",
  "key5": "2euzJ1YEnerkMQEW9y6aQzo7tZSu6ifoLoUNwiWmNLiSxHRUqULkcXwQKUU75a4hTCTrUFgMPKJJ94DQy4p4nYy3",
  "key6": "64ocvQvJab891M8Q5Gjfc7R2Y1uHghhvYcRkG9xWaGjJufjuhWMxagq1C3m7TTQTFFL1KHxCAnMinH8rQykvxraj",
  "key7": "49QVYQ3hd4PQRkfJFYBeeJ1w68vEtrhnqatJcnLyWyRHxXrnmTGE3VPFkJ2zNej8FsV9UVLivpfF9pRim12DXaaS",
  "key8": "2hsY3QurwN5jWouzPw1Uz316eYPQzexhNba2zWtANUbJQNuCkFDhQjdRsvbqdwneZjH5VpdVqgdUyo1NnspVKMQR",
  "key9": "4kAjYvaji9jxktyzDkwLKAjjDfzR4u6tX9iSuP5cVUheXvTAES5wRjooQbW2kp15ujFQCWgJNqQWYxVKgcg9iSrU",
  "key10": "5pV3GKbiBhqkBsxLi4pZPNB9UfkqPawFLrnZaH7Wg7ax62jd6vgRY29e8GcZpuX3BQXsYtzSQc4FgAf8pPhdXpBj",
  "key11": "5vPPhVbzUzhDF9RECqFBk6oc21As1vgTFdQmjaoEMiNSedfKtEe5JHDYJGXEJVhT74KqrETt2tyD9sV1SRswcJ31",
  "key12": "2uiFzMrYCmdMtu9gmezVu4PDHJQ8H66uApt5LKDDsEFBoJhAjxE2ymXE1GXUfqcuHojSzZ8M2Q8x3g5DyRYLwZrR",
  "key13": "5RCXiMS3JGiGBvpxxxGFApwYsoUF9Fui1iKtquVVnmy8Q9vLimc2NA8YhHqAJEr1tCyNbQLQZEZUeqWDCxiRLyfK",
  "key14": "3RQcVmNNGmVZZFAGkeMghPZEWmcB6cpC6BNabPocj5ShcSdqb4oeyWVbMNossAdPyknrfZMuXiyPw6cYrcWARLH7",
  "key15": "5vQ5t9crV4ayEiMKYKnEnHRZhHuH9TXuE12XvKiyyqr8ebcDgBYMkEtn1s3rnJ2cNvR6ApgbJn29b2z2HfyrL2hf",
  "key16": "ZrcnjCfB5YTeggmWTwPG9EWD6qG9PMAX8zXRFdHkuBUpwQpxsWZPJHBL4bBU9rQexs4S8mYU7taFGCqjoR1V5Um",
  "key17": "4d2bUzGXCVuyqpFiMdaGVrhsMbqXaZgP196AyrsePdNGhy5pjo2DDcZarZYwirXgS8BDNWfyNSgvCJ2nZQGvKEiu",
  "key18": "4hvVfGoQ56GboN5PpFzZYuByvg7Hi5ZgsgT3qXXBut2ieNHh5pZEYLLqVrGpb4n5TFZv6cMweAWvVp25rQWgafbS",
  "key19": "3TMM5jqLd1znzDMMaxQbDAgJFxNxNpE93n3kLjYyqpTjEo3vca14j8RiLk3RyaMp89YV8RTfQXP9hTLn1XdUwwyh",
  "key20": "5MUxR6wbYgnrsmaGeeRBXFpkh1qyHDSJe6P4R7FTWucFPiSvFJwTiZpLaeUNf8Z7GyuCsBikRA118wAHdSjoNUnn",
  "key21": "5wNzSAfQ8uduCgixayB7FY2Qpb5sQ2n53pjTeXeTJgadFPMcuW4nMZCrUm6oe6UTRNkCifPmbknkBrRPanVfeGjm",
  "key22": "53a4NvTMsPSA9pQRrCSEHGfsjskPZvrh8HgqTb3uepwbgsz8mqzRYuDoaCQ2XQsJebjbKD8Tgq4PERTJJxKxwx48",
  "key23": "2mcz2NgWfZhsyEwAuShw2e8MpsjseRkFfBFvr4aNy1FXGfpvNdtnuTLLTJrDkeGQCF5TV51d8WLvWstPxWvS8uGU",
  "key24": "3KpJd5tL6XACRse2qrBX21jWEEQyrUEfW47LZ1hzZzPHQQUx1Ciprn6gVGoYLPfvHokWFriVUHEUf1CADXLmUNwV",
  "key25": "356zMjsbWbm1pd8Qg3aiL9GpBsZu4fQ7anSsQUbVTpMp1qm2qw8ZHjKzxrJjuVRxiZJAKFNp1peJKJxYUL6W5MS8"
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

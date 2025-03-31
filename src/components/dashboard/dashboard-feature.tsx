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
    "47aKAg26Vuh8etiKpPUPGTYQaqrkGuZzB6aZ5UEmCXmnB5SbuVRsSzkgaQSmSrV69K8pi9SUrqvephPfeswuz7G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EUVVJn7GLK438dR9BJruoUpoZns7uqvxhsEHQBJWXhS7ue7FnoDBryn5XsvVGF64yPkmH25NEFf5yFLqeyUq79g",
  "key1": "HxA4BquLbJCbvrN9fr6zJv52ENujS14YqDzAF44N2BEMjTVTztuoyecEmAPxsjUkcq6P8wFau9XHZiHLYuzyW1G",
  "key2": "4gm9TSmzpLjTYT5eje6G7FNEC4aWHhnxjXv1e3i5uXMy9dLUg1Ys2GziaL2dRC5B6diNAHd1tu8SQydPYESwbXgu",
  "key3": "27BHC7N15fJMxyZaPkoxfv9vatUUX8NnXdeFg4cXxrduhHDwQHdRtFJKTixJfXxikHa1HQrVTafN8Sx8ngs7JzTW",
  "key4": "49fKhz3CPd84xmZ517wfTjyLexnyAjzeS9DBA1XasAsVfwDv8374iztxUk1tnNpJyToVC3waqhoRxtudPaX8pqcy",
  "key5": "22Q8nDfP528LnGV7Jh1rarZWn56VCNkJHWab2z2XqbjDmmAu6o2JTw2AnBRZt8p1t2A6iZPve3rW1zPaoFypPnXf",
  "key6": "jru6dePoLufVuKRg2ZrwHVcozZgqPE9xEJcQnCR23yk2gY3D5cFe1VZEhhECpwMXfJ8NtjEgQ3NSk8sd7oybNsq",
  "key7": "whsA9c1Mg9by8cYa49JXutNZN5ic5qiob9fmgoCmEbBa2VUeFvM6ef2pf7oTN61shyQsZfph6ST95BKRfD7T3VE",
  "key8": "5xj26mU7C1snvpUeRiDnucAyZZFVXTP8CnjrQ4zWgj8ZyaKipjs1QFH9o2RpPkywbDjXZok2JaTCc8uxkStAZNy7",
  "key9": "4RgemzVqbARGx84gJY5CQT4dJHuv21t1C3fQuN1TBs5jPn3g3H1pFNRBXf6UinZgPtAHcUQonHHSPZZ1PG2witVy",
  "key10": "tnDkHpRFYtiuZCxCwNMKmLqDX7Sfdwd4nfBygqMmncEE4maKkyYB2VV1tubrZSHNAR2zE3JKEdP1xXc8Amb7pLr",
  "key11": "4kZWH2mWZCdqxW5dundrZyYhG5X1cj2zz4FD7dEVzdzaWpxgUVwk324nYfwwemWwvvN7f2fSkv4Y6DZZiQAMwxtd",
  "key12": "5vTrZomQtHBrX4NYBp8ibF9hTcXVxvZoet4Q8HtLzou7bYKdAMmrgBWqDDAw2DjRjBpczXsPeC1yLcx6vN6fCiiT",
  "key13": "5odi1LVencuEGYYLVJ2RZtAeZYHgtbjExPvJvQRPdQSw58tvo1fgxdJiubCcUivDpGBKXin1SCEQxNHLCnRYhQUu",
  "key14": "4DuE54RLBp9RhqfNYUmsgDDMVQSVb6rtYqVeJsANeLVatLLY1XXbgBv1rcfwxyF89nuyz2yBfZGe86Kvd2Eg7JWT",
  "key15": "3FRHLoPvxikgEBCVh5R9Zn7CrNbyUo3Ni8aDmCeMC4z6duykFBWnFdm5UeLK35zcvkSL4o5FVnRYLS32rZPbK4sD",
  "key16": "5bHpevHCm8XGNwbAKKi4wgRZecfKBDDxzjAp83E7yAtQ4UyCKLSu15jpTvD96gbKzUUoLpPxwi8yNtJoYqVZ2WS2",
  "key17": "53MFAF4zDRjfV7yDnbK3aKQAADnruExpozowBNNnUQvRicN8ieTKHeUTA5cW1ydZTiTV94j7wG4S1mmPvWJjqi5B",
  "key18": "4Pse5fzh43QLfzDp9oPaorkPCJaW51Ufbu7KyNNjZ3BYEqyK7Cn7kedkZk41FJKD8q3iJgvtVHAJLgW9JKcaqWgJ",
  "key19": "5Qb9K6NxM89qcqXHjSfBx7Q5qyYSAWBZu9sW2jNjFuy12LkAKH3idN3EYxf1sBhG6v4Q65NC26B1vscBMkUuehVJ",
  "key20": "5eHHYo7tfDFKdMc23CpKJb3PsWuBBp4uutyU4i4j5Lh7AgVtYr2LSHam24VUSRMCY2174jm9UECC9MMkJbCAjdPQ",
  "key21": "5PDjStVtERBrEYaGdexd7ZyU5jsUEUjW5ceV9u8xtH4TFKnMxqeRcQbDaLRbA5MJrBsn7n72A8Ytj9znhCCVX2dd",
  "key22": "3Qw9J9Gv7g3G2girm3Pt4Z8L4sKkYJTiJu9N7pahgnC6M1Z2SbPWxTvaKiU2iY2RJQc7nQLbDHEkcKYmpeFWFygf",
  "key23": "2KFhWEeJu51DCXJvvu5S7jVNEEgSprjxbEVpdaF4Fyj16hRJABCcMcfWhz8TTnkQqQhMhheEZFjgmApQ7JsMU8ix",
  "key24": "5b11C4PzGX89nuRYT4ni82FtcZHSocf9SsVxaXQn8C19kfHMnvbLjoWMAT4Hppn3FcZc4ghVnmsdsUiBm82WRBVt",
  "key25": "3TSChS8V3L7J7FXSJ4XzMhdXwGUw8EdC3zrzqouRNcywewdTGJG4PscYTdEjEBdoHN1SN6GnMqR7HAjvuNQepKRV",
  "key26": "3UUXfjiyczV4kN8aaHCRkFKALFC7XWSu2c84Y3TcFKR1UBepNe4LccaarbXis6aKon4oaV7ZRwKQzQkDP47HzFFo",
  "key27": "G3u59EdMCbFGjedPFp7LfpELrMuoX58QsJ3H7ferTrHFdobciiNtWgm1QdVJJtScQmDZEpkcCb3QaSoGs4uWB3e",
  "key28": "3Cy8ZccWZ89MWA4vK4HueNCdvEnGfbSSNCG6eB8mYHNfdz9wjetZsNmYrJUaJkF1rmjZs3ymZWkQpAj7jKDac2yz",
  "key29": "2XFoK5WZ53opNUT5s3qZE7xgFEqt3UQEyC8vciDte1qPcT2BQqJJRJEQrjWa2uzxvj1U8DCd7hPRdzySA4tV6uBs",
  "key30": "5bohsE9b3YYajfrp33pF8sxifzssdMqcP4tazSjzn2XKXayHbjVGLVt2VyramQPRKYSjA1DCqJoMJ1yZ5H92pRK7"
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

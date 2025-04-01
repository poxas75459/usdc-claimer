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
    "2mxfPe5AWTvdkvNafwuoxpSKD62dQPhmZcEAEtrqCVbKPN8Shyy8ETmBZiiXYdEpYxk7AQ8z1uEnVZjgLz5NwzJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "foQwMkFYDmjKK7S7Ki6GptfvqQPRA37qQ98Bm3apjiYcGcZvuLRqtudJ7gNG34vHV1APSnkjoqEazgBkzX2QaTb",
  "key1": "4f1zyAgoosNHnHxCwxUCSkoiL7uusCdNTKYaFRVip553Z2nAqG23QiMMNzASE6dmn8geDvPkmsWVSuqZ8gXTwkp6",
  "key2": "3EYjkSdfDzvRJioAjC8cFQxUaU7VjSkjVunkfQTLyvbnJ62nbk5GnM13TxbQCi96eLMcx1Tmk3zCjnouZQeDV8Xc",
  "key3": "5tbv4xYehoQpSWt3hU2F757Lf6eLXzxFPvQVK5FGkRBnqdi7DP6Yd9JBMUjBMu81M7qM4Zh5v97jgjFEuhTgGB5u",
  "key4": "4LE6ygqUmAekKJmyBG3zWh3ZsmQoBEDjhFaULsArwZpgQKXMG9owLLhBz3jyGmELZ5ixqy41SX6aaYsAzecn1XtJ",
  "key5": "5ZUabPZiJEKMnuRuGXMMug1gaKdUFRZXByYv1szdCZuxmtHGxnDLVjvbFEQu8xSFckLLx1jbUiDihBkp58Na57ot",
  "key6": "4VhKk6LngvMQxHytFy2vgvGKi9is49a7zhi8fc1K246LAHDypC2TCHY5apzPvvkZQHbBqPxF34Tf8ETXNZGuQtVP",
  "key7": "4NEA9V9t4in2FgZZdFUUNdCcLzu2EEQytRNDbAztDy9F5o8SpxYYNsvxantKCjgVqYhFfbkPDJPMsMCnGFZKYwfJ",
  "key8": "43mrXLSukCAoNJzn3tuSsMHCVjLPrra5u6v2Zg77GcwGtZrLPmoiUU9v1VEnyGzLqsgFQyD8zcSTKGCaB5hfSXFu",
  "key9": "2XMyw6whCFw988cTMqtVsUmZSUuAxQoCyVvEqLKDySRwej4MESXNVDkXmzLDxLxdtk62ofg9HTH2X7J6Bqg3wvwn",
  "key10": "5TyT7j3PVMqWFFs1K4gSa3XCk97gq1UWG6KEKSTAKkoTNp9v4xBwZZ49Xp17dTydDqXZtyCQrzuBiDxmzHMo4Ft4",
  "key11": "5MwTcaGUmN6eKHAppctywjPdktcmUQev632hHpace4KbjGt45zQeW4ZqrasQBHFEQuW9MRoTAoNexHp2HN2P2HA7",
  "key12": "3iiYZunF9mpcek9UwMRyCfCQYbzNNTBFD95kSxFTPYyvuLurqouvum1UUj6NUNzyFwx4ibvFtEsmsX1QvZhL8qgm",
  "key13": "Bb16x9aT9Dmv3oRLVjmbnMGXVZanAnUzctNwVZ62kvp9M1rUmC7GYKZS11Wm9L7DELqQpx2Du92wSA1CSBgS5Ts",
  "key14": "4PRqGfynNoHxGooZXjrEByHmvERj3KBti1Q9VpGsW2BVYKeoCCmJjrn9LdB4jraapb3Mvq22KtfXP9egD88XKBHH",
  "key15": "4bN5ZsK892v6kW8Vbz5eRmkTyVJAxDPuM4D9ybgyoFnx4F7xsSHfb5SujCHSR2evfCDsyRNbUbuCbcDfCVorL25K",
  "key16": "5bHZeA4eAUUMuHVY1hSBUZn5WkweSPk9cHMPHrftv3sdmHAfztCtn7m2EYySSw8WQFEa1zPrXyU4WQvCSxG1qKSy",
  "key17": "4swBxupTcj5aBH7xFepQZDM8wpr2EKgJeijnbc2onC5G52xtfJeKt7nbpKSMZhwFCpBNRCHQjQeTX2jPfAqV7N5c",
  "key18": "53nnnLV76jT7KBrVjwHNbBUeKNHXVy9WXTzzN6Jt51HJt8tU1PDzhnXoYcYEi8ZGjqwa8MnHaWF9f6c1f24gaYuM",
  "key19": "2L5Ec9KtbVZRwnM6hdANQkhFV8U6QiwzsbG2HsJ5T6GA48QLqo4ZMjxqwwNLdXYpNQHKKmwzpGPQAtquMoXJ61KC",
  "key20": "2L5nE9G8MXBuxUDazmqH2y5qCYGWfUK5MMJbzRzpaTHryi256RL2Q2qLbrvNKdFJf8ox4AnqJBkHDS9SwGiSrvd",
  "key21": "4JnhCMwcPjTBEn7U4YAuDYw4HEJZUTFnSqqG1oKQxZZGUwhMNvAH4zZHcxKrWFdQ2qbyHGHr5sdwQ7wuYCj147AD",
  "key22": "4nqCts6CumRfeqQ1jMm2eBgGD24Fa2V7bmTmnSwrabKmu3Bq1u4zDZ1pvwPNxVfBtjaF9pAtmh2JBZ8FePQDfyiL",
  "key23": "5ay692cWGutnLVKo6rJwkCA2P9uGqitWWyDwiFmF55mWngQGDRPrm6RZz169s2QC8yweKjHMK9vHuUiEnB1Q4Egx",
  "key24": "2JnVqz7RXDZKMT61rfsLGjZ3yvagyYBFy5cBzYqzbJEShdjuV9nFQ19oWk7mfa4oAL29emFi2KuXvmZEmE5nhzVh",
  "key25": "2MGQpYNWJVZ99wBfXjKofvsuJuVJoRB8GLCmzXe2t9x923n99AbF8VwgR3qdBU3hRueJxXAcjqNY7QMpCqaoP4yh",
  "key26": "4ZdhkBdYAbyCFGqiaGBboLWrX9cGqZmnXayjXdHeiBjXe7YNwfVqpgzq8XurQvFimbE8C5AAj2S4nFxtNSwnkxRb",
  "key27": "5ah8iYen8Ec7zouGEEFjimupafkcDzJinn7SnZ2sgF3MD6umuiRSUfWHkyJfHreBk15Fko1FHMT95B1yiy8mGAyT",
  "key28": "3CsTfayc46Qdr5qf29xcEfYT4sL6pVvXejuHiPR5jNuWxVzVS9TiQeg2B2jY6iQpRwXjjb9kavvp2WqnQrdXjAau",
  "key29": "ZqAtvjQ3YY8Yc6cLB9Qm7D9XT52s6eYYr9JfAkfrhq2UDTmqSmHhkKKtdiG9J3ChzzFJwgnt8u1mhq5TNXDio8B",
  "key30": "5Kv76cd8x6Y3pwdjrnkmp7JtikPNRTwJZavJ3mWj8dsjg2HoSLZ7pKTd9PHxKgQkFwzZBepeVaVa73qFWejAbzQs"
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

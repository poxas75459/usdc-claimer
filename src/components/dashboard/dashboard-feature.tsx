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
    "56uCG4CtVi8fVC3VyeancY3NML92rXWZxaEoQWnYL11UfBYueddB8Dj4HBHExJW6a5U9XZ14JhfjwiDK3ThrEBHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o3dTnALeWJ1XHPjZ95fpvLDUmnS47aL6dWrwRZnwH91drDMTk19PwNYF6u2mtP96v33UYXCV9S4gtNtqeBcemaC",
  "key1": "i5N9z3d3rBzekYsNLBnNQe1A7szZ2hZwKsggctNV9cLoGMFySbeF1WgN3MCUaPfveG1qEMv7FB5fDZuo9qAgavu",
  "key2": "2FgA2gBtgK7QzufJcWL2Zoac5bxtcPfqBTMfCyrTASQu91dMcvCvsvs15nE1MhWZEdqn3o7riqU5o7wQiUeLWtGs",
  "key3": "5T37tk5LsKtC7QJB1SoSoU4VNEpY8FGKUA5Y9Kxmv4Xp9qAq2sEXd5CcQb6vCxKq96PfQMEq9uaVkquZq1vwf7Dt",
  "key4": "56A3H6eUnKghu1P8DB1PEyR1opp47avwf74t2Ds9pHJMWYvczoYZGnuTsxDbNuYuuEZHyQDB9kWHuCpuYpSgY6eS",
  "key5": "3YAnWxnzVVWDu4CZUXg11pcjoArPTU8TWEkPq7zxTuJaAKrG25eJ3vCkAk1reFojXTUqCJTRDZvBKgSWv1PhPMMe",
  "key6": "3L4mmF4gRrU5tZfvhwiGnzj3Bk98anz3mJhXfEZymM2swrLkBtSvzdhsL9SM8hXi7NBd2Y12TuA5cpLrjat3qKJy",
  "key7": "4SMdzG7QWDTuDKY3d3a9U7bM2Ld6cW9qNT1gD2wPP7cTSk7jFXmoUfgQfpJLuJsZUo1jot3E9LHWD8qQHzoLdWTr",
  "key8": "5r33SPnqg79Ycuk8Fhqi9Vnam2DqvWPM8HCfjCp1xm6HiyGC8uRu6NYqydkUdbapLukwdLAdyTWhWhzvboumQXkh",
  "key9": "3h92ns7sbtBVm5S2KkGQnwkaoz5JS45yAGa6r8hAz6oTLgVLYtdY9pbfjRC6EieZK9HxUh44jBmw6DgYMcMiQ4L7",
  "key10": "eZsYmsU53731zq3VjoVTz8tTY7ZEb6JfQMP5s2p4VE7kKjPwjvvf1KpWVEVrZMtxv1yYDEEBd9iZy7u774yTtMC",
  "key11": "38XiTCWs2LKr1fKBJ2hAEvYtrqABUcwKCMUDpR8a8F1F8xRksCyxwPyv9cm4kWnvs4ys5ou5XQpJYsucFsDZRp7V",
  "key12": "yiQd1VAmPbD7FsQvi8y8KKQwy6pyc8xU9CvKRtseLeaA9Du7CgTrHiYQ8WxhZ7XRzVHKwCo117iXGpbXbvns7V9",
  "key13": "2yZSHsdSKpNd5gjoejVxrRxvjfUt5SKNESa8MAYmaacCu1tniML71Wmm8DApP3ks7wNa1PsB1wwqEc5b8SgsG4yC",
  "key14": "6sxY31jAgWdGFYGnu1uYkiqHrjxXCQaTd2ayqDwXSJGMoDaYLbrS7EoVhkFFykrmD1MvRF19jDJXFNPYaUczvh1",
  "key15": "2qD4wZxQKzfFJUTrHGkbgcXbagnBEfkeMvC5onUDJHhpUocaucyyyk2qsQ9dJCkowTvWqsLPeRVeKfmY4KxRQkgJ",
  "key16": "ruMfRqQrXp2PPqr65wzZgxH6VydcjA5cXMh72w3rPJWA2xXdjbwCE4i7XBxHWsDjte1Tb8sJwpDvxcFJ19LsAaE",
  "key17": "M3xDfkKFWGgrZUcCMEAXfa7nb6putfkn88HC6kmgYWCUVGT2ah1FfZgwPpF6FVuX4huv7aZdi8dTTRp5LGALDm3",
  "key18": "2xw5P1ncbYCUk2Duz5NcziMTdMnjLQQRaByuJ6HUEPJy9TaZUTXspmhvnjQ9hoWDvE65goKQjrgbTjPDHzEq5NFn",
  "key19": "hnxy85TcY88BJCnTM29SZdgQmbzYxE3etNwL2715M68vUkMM26ja1e3qBV2Arx9Pfjp16925zZV755dB9bqG93s",
  "key20": "56eVDqCS4myNTZXLxYS8vnDmC4FwkBfqYq4CJjCni7ARFtUcWWX9KcAkh6N92VKa1cSY8cDADvdKjQfxfhirGm5K",
  "key21": "4DNtiniXM7DjJSAJNfAnkVreGMZ4hfgFUWyL2FEB2E6oqq146Lg2f9nE9bc8E6849voaFQrhMXUiZ2RwkQvfE48g",
  "key22": "2JMYtbeHJBFxjyPr3tz9brWBnURYnk338F3Pqc2Je2LMgRotnYvdVG3Q6GDYLBG7Retg8CssqVHqLTmzfnY9crgo",
  "key23": "5PsNX1SrmLKCaW4SF8uaL4bmjkAYtZuHerQ4eKZY1FNuP5xXaYFzRWkqUDabaVhTX5SsNnHAWPTTHWRQbP3wF2BG",
  "key24": "2wHbTdoJGb9ngsCVFDvMFWydwA2KCTrBwJovUfYCQgiTepiDiuxVAbzRxbQo4i8r9xWU31BLKwJEphxiaULZ8Jvv",
  "key25": "3WS2YNoEWBj1hV3jS2eqmHEg1yjswuuwFaw6iGhj19hCV1UkcVf5L1WnyiWqbxSZdKm9GCmej6rRBiHBhMXJuxB9",
  "key26": "5Zwh41jYbX5BNqKy1PdC4sWjpEdF8Yv1W4Hy8BYU2CwTdf9zorXB1m6aoyDd1RbEtbAobqVGtjUyFHSR5z8wi54S",
  "key27": "2BZWTnX4JXHxVUArYhkjeApb6jkHNHqqrGrgGTD4CHTP9dj5zuTSGYcFGYGEPkdVoN6TKpQixHeMFqWS7QQf4z84",
  "key28": "3KKj5tYJUFKi87JcPPbrDJywwUqg2hRRd8GT24NXJugbDfEN8mzE82EbULdKcUjjdRERQgBUcJa7hzFyUyUXuxmo",
  "key29": "4kEq3B8YMnGyJcbXQEbCy2iJPyFpb26xgyKT5eEqcCFFETkETxnjTrepskobciYbpaE4xKBnu1PCkwf5Y4XdMi9A",
  "key30": "38uDtqZ6o7g4fLwS6juMn9yNXGGsNzy25PsPzDH5MdPvRLAfUiy6YucoJLn8YQBwVSNg9hjQ18E8hsH2yCeqk1TX"
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

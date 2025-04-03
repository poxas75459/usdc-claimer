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
    "26xwHCWcMV9BscDiMM25R1jDGKqxHVegzKAymwnttEkpMLBWpfh5SVqDb5ZbYhaRDgKP3RbLKHYy7UgGPpaPke5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wTbEV3VZSYe2KiLRcVAYuaovtmKxPQCUuoRJN4hCXgfy4CGn5MSkdALnuknjabWgNx9HPcW1gutH1Mxp6UCXZFV",
  "key1": "2WgXLXKSDPCEt6UYW396cmvR58rxsRBXGRcM8kTueiRFYscDLz7UCPgBMj8f2J4eCHxVCKvvYgDBn49LZNXDy7Ss",
  "key2": "5QvZs4esLeEHhUX3kSh4hXfggxQ4swUukrGDa4miX79rpaHQQAAz3SJWfwUFwvNpQg2Pg7zG9KYzxhsByjrivDY6",
  "key3": "WLXqT1VFY9XFWXD5NLnp9Z1Ki2o5m7xYVHEcFUNFYtupNfv9r2oSHR2of76vfJjcjNiXZ4uZ8UZKMNYvMGrKZ3D",
  "key4": "4wrBjgyiGBBbYmWN2BzEK9hehah4h76He7vfM9SDA6viSHS8THwpFm5VpmEqfUcYVgy9kLjg9imL9V9PqtX2atZ4",
  "key5": "ujfqSqaFqQcQ7PWVCbuYHTZ14KAAhZpkNGLJYCm3Qj4qWQgGDaL9tgdSHuqMaav8hB5ChDYCUV6XtpDANZF2VZK",
  "key6": "63L3Qu7779ZstniDGPkPYvSC2Bw7R5xxTBuXssnfArdxoBbRE1BK87D8z7PbAkyaW2dPt9WFLAs5nvJsnciFrFet",
  "key7": "4sT2sE5VR7n4LH38X6b5ix6Xg3T3mNvTUCesYZGDynMfEz2XUYZMpgEe2Ncc8qP1uuRAW3pdYFrfonNCBPPhKt3j",
  "key8": "2g5TpGCgs63cHcgzTBwhvnZE75SqkK23kQV6HFJ5sivqFaSXFihgSNZowy6z7ndDpyEY8xjjwkzKzsaMs6s9MSZF",
  "key9": "2LJrvqcA7VamiHUic1XgiKaEmdbmkhN1YFRW1k75hWv9wt2QaMtoP4TXnkNRqCb3r3NsGLFBJpMjf8UDkJH2sT1G",
  "key10": "x45cHcKHnefXJjFYoxUobGn7cwHCQi6vv9vZkreDT16EV2RaDLurHQT5ALqCzHk7edmEF2hQu4RjjzEDEZsxT2o",
  "key11": "5jetAHUtcRP3qBDi4roUdbugYpnNiL55Y2hXca4vKgajFPedHtsoxCZMjG3RUs7jFc3GUwXBuPMiEC7MKPf3V2CG",
  "key12": "3p5MdEc6915CaBKYDshzX7NLx4z3gRTB6rxd1teCKfdwsC92CvtH1syXmJJFK4V9ux38yEagoR3vLmwD4o7AWB9d",
  "key13": "5k1EXm3R8ibr8L6q8AGd4GEQ4Uzqsw12tZ61yvP1WUL27cjwW29rtYLSTNXR4HjSyvqFHWEFD279zvS8oiLtjKoJ",
  "key14": "Dhm2iTMVUjhsYxsuM67w1AJJhoPhuBPkkhhSrwucpM8EmxoPy9hP6Z6fS355qvaLD7woVXBm5BQzVjgfteXvEjN",
  "key15": "4Ak3sRjasEb7gP8bAbKZLFghNE3k8HZ6KsG4YGxxWnJCMRPcHzu2MDhQcUsBmbQiFnYfg3gLVnECEfRLUAegb2PS",
  "key16": "4revXEbsfVTzdBbCqyUKQSDJJCon3DbxqPQXsxoy3aD7D1Beuw32NvRVktevbPfE8LwaXDLbyrsiAjwxJ468pFym",
  "key17": "59t7MybdwYQ9RaUpTgqb7BUvmX4psocvD9YeXGnWvmB9MMQ8KeiywZwFyuCKHjjhw3irCWkNtcRXgkS6dX2AewBH",
  "key18": "3HTs76vaqQYKztS2SxhZo4FnYFDKSd2mYecg3MVSpXcXBxreTDer69G963Q7NbGoMLpZSHKysBqScti6UqkpVYFG",
  "key19": "3vmbRVTvrvtFgrsso8sTMXF1vUDfe4t4ukEiC4jXcCZT7jFpV5BhugJWae7m8kcdPeod5CHiU4zgqc6J9VBmGaZv",
  "key20": "3gb8BzciLNG5eeo8v8S4HEU41KCfuz2dLwgvhvoRoG1mrsE5N1QSzG935E4JUxiZG8ayLiSYjBueBBm2Npfc1B7G",
  "key21": "5cakTbx1u9BYdrod7D8hpTW7fNkLSyb1Qt7F8QH1mvNrsHZTKYyDCT1Mw6f9J8v4x3z5i4eL4avQQtRLrbkZ33dW",
  "key22": "3CsU9LA4k3mF2FrPeG5RSdhNqULWERt2MsGY6C7whp47nzPJz4JpoLQCsTZt3qemo3xs3CxLvTUKacrkoJe5cW1p",
  "key23": "5ESYc6Hy2b3KCtGzbQks5y6YisTgMSUTSA8Ad1hfd3LU5G2BXnYi2JV1vZqrA1nAh6zBVEvTJ8fMEcxkgGq6BdEH",
  "key24": "3ucxPiQV6JtDE2U323n5xQMTBSAGyQZbzzyKM8g6W7QYtkcCXBnsZQmCK1VN4a5G8Rvc7PSnACsJsvxCVWcgnW4S",
  "key25": "2jqeKNWyCey99w6iqWbvLxAgYvgRUqgSkctJxawq2GoH6ktKRhyvAf9qa1bosHBUixxcLo9D7kTBAnh6WnnjxfZj",
  "key26": "36JrzKP8e2UvKJ5Aoek9q4LfqmZcw92dGmJDNzS7gQbtL5Cdgy7KjWaeZWviy7m3J2NcWv22iaG4tqkHHuujrAaP",
  "key27": "nFHr7oxbSWZLdMxLEzQa49Q4iWtrUmKVjDPoUKLiWYeqy6wf51tdwHqHQQfYtcT1MS66b52gJKUeNuJ5wGBvxVd",
  "key28": "M3TGUMnDe9kniMjudUnxM8TwzahAmRaagRfohzEgia3Z19Zgqq7CvcmmQkv2zntroBUxnNyZAqcVEPTJwR4b6Xt",
  "key29": "3hrrJPvTD1erWAKjM5uEVhvdZHwoyn5oUq3siRLX8PBM2ovXVE9g2hWz1Xj6PuVFFUVWmHNZ5duKYtLYYFfJN4B4",
  "key30": "3kHUPvosQmNuYX2iApYaEmpSnRsQMhApd3KG4wHHrPTZB2m9hW1aaYrZKCYduGJ5ot6JwDJ31jWL7zCQaVnnANq7",
  "key31": "4Tcc4QQJKuAvWEWXCTxU7F2Mq7TqR3gigD65xCRTikaJwNVSs3LCFZ8chV1rLi35Ek9Gy7tky3YNrf1wyXBr2AhB",
  "key32": "635byL96L6uSh1LTMt17a2JeFYfUCGPfdVuJSYsiz3UEGqJy4pyYxBZLtZJB6MgwMFVhpTpZDwoMTNtrrzyrTyEa",
  "key33": "3nm7M4XpdwpVi193LFrtLzdMqkSLizzQpG4q9J6nRsBMGUud9Pp4B8ntNWyA6hqZrhuyphYek8mK6H6RV67Ctq4i",
  "key34": "4gz3Y4uDaWfhyWPWoTxLF7bAYL5jsrWNDqLfcgGDvkDLqUfq9tB7YDfDCEqT8eFdEC7gqK4NcivccDQxmo3YptKf",
  "key35": "57gHPi4qbBn7v1zftbS9mC99sK5ZKJFBkRv8bZpvXnBBNgiT6a7ccTuaBqZUHtcNWqsqcWE8A5KLVTNy7oD8XpXG",
  "key36": "pK61SfC7LbcbxHEDqwEUx8V3piiJ767fuiPRuU4PahXr6ysuoiWfSuXdDjRuJikbtXPXmWu7BgZ5ptASLPbS22x",
  "key37": "49mJJmeJvG5UUUK7SojxFeobsAST7SeFCZQsGCqKk2rRhg6LijmUhGj7EaQ91xKwpCiwxJ5eakZHjeh2xGQd7Ney",
  "key38": "HTXUDsMjwpDPCM255cKvSZEp6bzEnJFKNSZhm6urjAPsN763SSKtv8GSpKF8X2A7AWr8K8uHkBbfYygYmEiim15"
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

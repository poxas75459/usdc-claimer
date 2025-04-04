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
    "XU1Tj7EtJWiS7sptcanMmzAuY2Bh4zVHZWu57tQe4h1Hp4ZywKsxNK1y11CehDnSUZJTZ7dhJupF5DrY96ZKEUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36UXaWaSBBuYacmUEV8MUJ5qHvLdqU5zdZWrR2QGpPGJBgaychm5WdGqHtvqRKjoYVDwQsBaC8ps8vMUXcFaDuB",
  "key1": "3VtsuNKMrJEQA4NLDzLPPnM9kXZR5XYV1cL1KW5tbfnLcwXSbbwVUwntbX2zCZe5R7SevsGfn9BDbbG7RqmwmTUf",
  "key2": "3Uak8r4rGFDdSnthpH3QqSmysB5bNPEGYj1wDFM3opcpnz3EWKiXq8UQcDXu7AiD6pYwWGT1ir5cU5fhbNwWigpK",
  "key3": "4S2jUjRgGvBuf3EcEtEUTLTrQvjWsmt4kUriygwpminzFLzHHPKKQjW5Tmh7EigFA92WSuo3FT4eWdQmDViRHT9X",
  "key4": "39Qe78BABbx5PWMg64QkBuwki41Ce4XnJPGEHVCiKwQVUZ8xbKEWmQdBEhvy8do5suQGaXxwShhyif1H3fvNXroL",
  "key5": "35Jnnzg3ZZuNa4WqputV37h1g8UhY992DqgQYBDbQtdg4naL1HVVvdMmQUhmnjRkHt1aEjjNiAFzKGn4VJxzJhUa",
  "key6": "2e569cLMBHouRdTqwegqsJqKMuAC1mrjb5eJXJMrVRHWz8ihKowmBsbWKKWAdXet3vXLbrcqqHfTzty9eENMEJg9",
  "key7": "3raoGcCYuCpHKM1McosczTvNMekT1AM2TA7nwk4whoiEfMSw9JCsZwWT6mCEW2mvjKfU64wEvPrnH8gEdbGYR61k",
  "key8": "2nSshjwu9WWS4R6WqVsEnuM7vMNsbqriu7m2NAZ1eVD5Wgeynn2jyv3oVR4XK39WhjUdUrWjKEnx4d8X91tbYsud",
  "key9": "4kuRWSCXnKKH4FCAKaWeUfoXRYcC4ajyUKxzLcdHzqpQEfsnUg3NiL1ar3MfQxzUfJVojbnWTgZmTtcTEPFjWCVp",
  "key10": "N4WbS75zzW1rhR1knVw74Pmvq2AYEAmG8UqBRGhBYgoMDrEY2XsDAvasFr5xy2R3mLtjzeykVd9aY1qwTNLVyXb",
  "key11": "5A3yEEeECpxjbkERnx8m7yxbyE3vUrJWAKLddaDmfmoQBrKKbYqbG1VGdoN7Ct75DbFeD5Ncak4PuvjcgzpmZzB4",
  "key12": "ZXRdVLU5s5zoeUaPjJ9EG8Kw8gzxa6BQNSjTkZCLWGdU5wnnPvdM1vSdNJkvp7w3pGZDH2wAqWDeKBBd7LisUeH",
  "key13": "3S3hvpu3GRvGP9iP29FJFoe7P8vMwck2mBP7ZqmM6kbCBEikVHv4JMSwCRWmFjfqym1J8vSedVifMvubsi2sybCd",
  "key14": "3y8xeU4TvnLiNBa1tv64wAsmgPUNcqgKhqRrGksjouBF5UN3Rp9ZdycYdYp8rpHHp9JbCfKaujkZbLVCT7RKY9kr",
  "key15": "mqLPzHmCXabzF3BxmU8i4JsrNqBRLGgWQiY2tREEBfHdZWB73N8bZS5cqoCWxK85gnVgMpSCXn5PkgH5HBvE6LA",
  "key16": "49cHU5W3NyPPa224MzDNLs24rWNVWZngTmjyKgHKbWnoJb5BTzWyBgvbr6bWsttCiMR6hZd2nKeS1NRSxRHZqizu",
  "key17": "2vs8NCP1V5KRuJJCyK2TwzwPpDw5VyZsZMnS3pAGV9mWEh8fTHyojMU7ffR6Y2VEqoWhq2uwYUmYjJWY5dDKanSD",
  "key18": "29NCVnzw7R6FP58EcJGp4nJx3ZFUKHRm6PF4jvXuUxtGEUMKsHWSWcQAeMkQfTq4CkwF8EVt4RZYjeasj5cTzweW",
  "key19": "21TqgjyCPiKphuNuaPDCmwvEwPdgrEdzvdKUC1bzN3AQi6wFYbNh9g4yugtZ9eEmWiP14THggeg4paP9awxAB3eQ",
  "key20": "1ERwyqnvNMcprSbWfrfNj6bgxAjaCcD8cMFWep9aRQMHf9Fjd7bpaMCjfcsMcTKYXX4Wx5etx1uUHTXKYNXnqjG",
  "key21": "5sh3YLn7fbdir3RKJCyZdp18M1PJiwt47C5MuPxPJUgBqZufr21MG7QwzPYokJRo5v23D9AV7LiwVuprFHT6VJ1S",
  "key22": "21fq7VqeZxo9b14z2NiVRvDKYYRSDL6c713fnRoJpV9oLvtjpyEjUKctJJdUSoccmQ1a964krb9vmrcMJB51XG8M",
  "key23": "2ojBkXAiDtTry4LJgLHKH3CMrQN4Uru6SDJj9xa3qSnvTwcQ7MVuMfL1ao9wj3Zk7ypXJ54drZLUmiC11rizntbo",
  "key24": "CVzD8nJKcviEGpfSx8ZMFhjpwQV5rmUj8XpYiceEvXsV1vwwFiaasYd2FYDTCDBXiEP2JNjmNP3uHVY7dnKXa3Y",
  "key25": "2UP9vJUUyNoVgKNz3o9tZZbEcPp3iaRUcW54RoeddipCxM5XBpvm8RMaGGkRdVJuhgKaqZ123kU499yjyZahDxjw",
  "key26": "ELfMsBN33mRwV8Hr3nGcUmzvyxcqFQmL4FnJoHf7CPP6C12pMW69F9HsobhLV4j6TzNE71x7yat1utRcHhsuNgt",
  "key27": "3u5bvrHrpJqQmj83PrNJjEHYzuS95YPjKobMvEXkmkxviyjpkMeuvDh7kkMATKTZqFCzYiWFNZHdsvKyUycSzr3U"
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

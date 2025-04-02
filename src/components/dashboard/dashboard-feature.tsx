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
    "YxgbwFVdBYnJwqJ28agkLE9cAb9cg5ZGyNLBrRqXNSyURX3JwUKAosPnTEWnPfWsYHtZfsFoQgtahuNbjhTnYMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N9Ktn2icSU8QJTBnXQtqbg6j2bFuWFxQHiUEZs4dvg5VatikJ9wZHW34Z1NDRSxHbrDYh5jBPJKEBybYZXCVASo",
  "key1": "3qZRJh3j8VtDLm2DVbiGzEk9CPeoZzMTq17k4cVjL7dizRadGHrLX1YRuMDSA4KMAmgow1nAknvqGt1vFNjdKhvE",
  "key2": "2MM7FeHEo6PqCEwkeDoBSm2zLhcdYD4k2yHXXB3Fibr9zv5js8MHYz4MiRG5jgFsGCvJkQ6QLmhqSHvTT3yyfo82",
  "key3": "K4aMGngp2bezTqCVc2hCiXynQ6RrUBCioST4VvMWQ7qTN3RFgJEgPCoTLZq8JxteYU4wtbtqZP8BHjvZkJ1AfJm",
  "key4": "2tqNBLSgriLuNGssaBo1Uqd81P1MMpE7NeeVmarWY5rcZLT9UfqXB5bVc6J4nYfm18h1Yy4LJimawSrwFfXcW1Kp",
  "key5": "2ZkiTV18GkLmqF3sctZAtrbg39t1sjyyEn9ecfM4FnG8s8X1jvSYBv2cDjjXrQQKqoSLQ8DduovohrsfM1iEebqn",
  "key6": "2Sok5SRUsbMhdyG4owSUWBbvWCQPQ2ULNUKSQXTf8DcLRffUQTeA57Ev7eEjsK98Chiq9M5dDfgp5ZNjN7GH1vUV",
  "key7": "3HpraKuAhPbRLWj7MKub4CP7Z2EtRJ4AAKGLrr4oQtEB7ZctpwRvVSyA1SiGYPNFHFsoMNV6NEjuppwjSW7ZLC1s",
  "key8": "4PGTuCbZ329Myw5S2KLetzDum8LoPKWriA6Upc2a9bvYLDwaFpFc3vZk7trFgXPruK65Zb1pPn9toy34jBwsQm5Q",
  "key9": "2NZEnEQ67ZDJ1yHr21XgJDHgXgboZYgos6nCAcuWrafgLahUfvcm4PiEGtiHA1cqqem1ccErYqvjJPY7uYfK2SqW",
  "key10": "5HLxYMntmkxfxR36FZAz4VrK7oDe47ugeQQPEk7UDXKUUGdWio2QESc9TMpXJk9U9PLGCsGUDPG5mmRPvYM3AbEj",
  "key11": "5NJrM5HmhDhgMvmjdLGMr9Q7A4kBdfkfMuoffLTFzjrFhCh8u3pGhmmWxCNFJLzgmd4nzZtQL9NyUHrsGFz83H7r",
  "key12": "Nsq3D633ze1A9TR7AMzscpq3qgDoMay6WJWDmv8UxkJuyu84BfRzAZyjftyLUSui2cMkPx5gabYsgPUhpVgi5BZ",
  "key13": "2tkGJzWR1RPB1zGvd7N7R1ufTHypvWdvtH44j61hwLFy8wXWfP2bqeBA3v4GdTP8rccrogVorZQrPoftmrDFgr5A",
  "key14": "3r9HGXFqmPKnyqeudU2sZQZr8qkGNV6eVPWLDnB4KavQfQFEPa9bP2EHxeXoHTEPrxQVMqQXfojpkDrsCRthtYeB",
  "key15": "2uo7s8BPusKUXuNmkMrY2WWeKjafT8QkVD2Mo9n3EQXLnhXwN7ouBEN8wH2pHXntvWHhLRqkh1FXTkeRtKaf3FAC",
  "key16": "5hRQkL82nsADWxh2YDaoLdSNwEYgDMwMFD6iinhC3nYcAwXLp8jooACeN8LFQ7heCUPmvjtkx2kc9H3GzYzbMfUT",
  "key17": "5nezdYy61YVZqRcsQByqGSbZuFAfJz9jrXmeYFftwzaV9keCrKydfcz9VYur2y5BjFyqSC8nMoiZKSravcMFDuHG",
  "key18": "2hNECvjaXRR7U54fDRz8R4Ew9o8U7Z5qH8cQrCqBEmu7F33XQQtTQwZ8HuezAJ5cnn1McNJgfHMhnwbKt3FCsoTs",
  "key19": "3WGFVYcjYGN9yRdx6uxSRn7Wer6sDxJx4KPHU6L3RLW9NcyFrWGetPL66jYK1FZF5YPxVaMeLqzP6dPhdiK185b4",
  "key20": "f7dxTY9deMU5pY7vQ8Ni2C9GKXTW4p78dVyMTG1gKcxXNjSBnwgfCSL33nYTLb7F4o4Yhsc2Z9ndBdPaLdFm8sF",
  "key21": "4KjyB4WPeNjZV2HrrccmcFpMrQeknFTGBffcCjeV8xLYXCn8ukVgqezajdcMuZnq6naTQsNHpTKLBfVxmQdMffPo",
  "key22": "HvFiESvYTfdamonKxGziexpHULPQKkCz7wRncywBWV8wv9HV9c7J49LnnwAgLsrAB7FBPs9NbgTuuopTVt3NX79",
  "key23": "2nhDzKRMuVFXx9nKcEYCBTT9M4W65yk1PG6GiL9A9LEN95WAPBvDV4Q3ydhnASMfCGpYDbGu477T3ripRYB3CHSW",
  "key24": "28SezBLKjcnDbeTxAzkiLnmySnoY5xuYWZeSt1RpKno4QNQR1qVcWuo7r9icWwoSCsjgAEcWsjWEgUNj6DHq34kE",
  "key25": "kaq1KS2AEsK3vnDyzJzoyKufpJMAC5HG5N2EX7UqyCpFNufzqfamcsQn9LFxECD1spJ8g6RXHHzG6mBtrUvQ3J9",
  "key26": "62uRfFG5bAf9GP2PZAKFTisKeFKGPmNongb3Bq79kVpnoK5QsLRqRT3UrxRvVZ6tunZTtLAzrFsJXty92cdBCiHy",
  "key27": "BB3VRnCrNChasUUrwcttd9M1dfHRont1hdxyNpsx8ztk4wihqoKyGbrvWddNzsJk1ZjZsCdeFE1ejcebW4SwBef",
  "key28": "3G6Qyr8j4zeF5YCnE7J1fEvSKkkEfAmem7JZ6PhgywGBx8sqPX6DSrP64fpvM5ieiskRcedUg1xdSLmGYxMcqxsc",
  "key29": "2kx4skKziwDY7bFUmEQj4okm6ozJgRxVdbjtfx5qBXDXWQgN4FXFQxT8HjLbDsAzT2sVGAs4prGtv1wF4MCYEwmR",
  "key30": "53aGfiqd6jUGUZ3KjibN2ZVgg6x59Zw5Av3fd4VCTpZspzUb2FRxehcM258zQb6pwWFntA9j92vLcwQx2CEyXPz",
  "key31": "3tL4wehxVbRJMEGLDyPFbpUqqC6oZDdJHLLL9uUpfqiSCgpBS7SfTAg5U8yfUDLtLa8kVAsx3CDT2vCovkvegYPr",
  "key32": "2CVXFe5wqeDyA8mKuHrgK1dcnNjuK8bz7xpTCvt4SVeYFjjCsAqrEy3kuswMGRH76GvjeRrAkKwebSizFn3SXAc8",
  "key33": "5J2Kzb8dXMRsY8HpRLVbUq22njJNa7hQdDgWrKP98fh5vRh9BSuoNsaEAaQTgkHQK3e7sBJAc5M5T7fJTGJyY7vy",
  "key34": "533x6V1FGKe83NfrZJA8nJw9VQ8SWn6UR8Jhd1qaMXJUX6fusNpFVNdtdWvYKdtZ7ePM6zfVg8JJp4bmqJcas1Ah",
  "key35": "4hPtjhokKxzqGGmRLZos23jHgVoMxeDzjyBdsuwjg5YsAeRfQNrN39T2n7894Rgko4dvM3jN4mfVWvzBKSoHUDFw",
  "key36": "4LkqNpaGrMpuoRREpGTuoyW3p2Y6ZLS9dbQzZHZAJkZK1UPgdrHtaa3crPx8FE1bijyQei9hZL3qjUjmUTfJyU4s",
  "key37": "LUxgNhDsDr8B7f8St9BBvSxByUnXe3frMHoNKKe9s6b9AnoQ5us66s762BuAJ6NQ8VzkDQptyDYjq3KyaLk5prF"
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

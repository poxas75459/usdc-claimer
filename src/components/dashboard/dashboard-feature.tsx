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
    "3Q24VsLSXFhTMSyPbxXeqohGHjrRASdiMxqxEcDhqFs1bKmj1B6W4itBc8ZmvXx97MQ3676CRTsFZnw1jzQWAEn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fQMev9H8pebRhJZB7wUKRBT2e4KCzurRzJm2GeLyaak6pFBuNbswfEDuNm41QYjDrixGNggWcvUgLdLRu9XWdmL",
  "key1": "63nWaAwoMY4GUqbCuZ9eNvVe6GMDu1XsxstzuCv9XGEweMky2zXPDt2Hv5GPjKH4AMsq5cFNyfKrjG8dnMemW2kM",
  "key2": "2DUn8Z4D9aGFY9P28zANFKd7CYQYSRS3YT6YKWTTy1RA3L6aW49B6BZaFpVGWjSTny9RSm8hpSRmN9SHtjwr3Rni",
  "key3": "4AktGBtozyrmxGQSjjUP7VJe7qiVpKisVm3oaJ6wUNLqzPBw5Aat1TY8S47U7a5bSnZKVpvkEPhCFGk1TiFz5UMm",
  "key4": "5wotFXuzoHDTUGsRMuYjz1bZtDTcaz4GkGAufGMQXkqJc9mhGHYSWgW4PcN1jQfuPiJYo8oYimrKWHWYHSz1g178",
  "key5": "4HoSb8y184xhjB6gV3JVAwp14vqn9gy9813TBvZv5kbxp5RbPK4k6a97W3NtyYsJ68BzZsWnLDQjRZvLEvjZx39W",
  "key6": "hGPSfa5VGwmfV1JRypTsbxTysL2HjL513MSZTi7GSKsZYjrZYb6g7fQUUViwQBH3Dksk1xRBcGSeN5W3UYhYPD6",
  "key7": "3aAAyMWo1dMfDJtEVSwRmEnF7pssfuSD4T9F1VXPSunnHYybi9S6rB9hzZizggGfaKCqz6eLfsMTeToh7ZjkFgiV",
  "key8": "3yhjg567DszL4w8GY1ips6d1tr5mss2qpQie7TaDrBJUDy2uNytXrCmBGCS2QebqAniv7MkvxwzsVenhRJaWqFKc",
  "key9": "5nryQLJq5WzVg7XBm1nqav5KA1duhRTorMGMaywcUgUMDBdgrgwCcJbdGFUxYvyiWHjG2hYrvahGLCPguwro8Wfq",
  "key10": "5Nf1KrmFLBjH8pQXga43fKswFsJCE8j3QozoV64RXHiLApDfFwrD73UnhBvsBn9B5hJWjAe1MU2Vy2xb4zDqzvi7",
  "key11": "Kqsjs2Qng5ZytrrCr1dJxCxkDFtqQLccENCbNQSE2EhK7k6yRzvqfP6wD8dFAY3TV3NhdcRvUQPBsTGsTcobwwJ",
  "key12": "3BJnNJobrJGRGbDPJTt18t4gWwsJQNbTE9hMH6NPjWRohckJbrLzNUqT8yJxMjz71CZL3wfVGnXW1HnxXoyrZ5UE",
  "key13": "4ZkkGrRJBEExm4Dgj9EjF15QT7fX7jdzzKE47SGx7SUc1gxX7myWg84cSK39mXvZqijZUsq1aTPtVnWW8nN9GtD8",
  "key14": "4QyoN5gnthb2cQxnprgFce5XdT5yDKVQ3XdoPmqMvE4Kw661t1BsA83TMkpbY5v85yeML7iDZxfAFoEG19b2TCKG",
  "key15": "3L9oLB1vjF3K4QfzjKZANRQGU1Ys3APHeb7cD8UZcvBZjz3NAjmqajkghh3msWYVBMMeVqsQADKc3m4cP31UA1pd",
  "key16": "58M7j6nA9WDRSiYWgyoNc5WXyPPu3o3HXRqLmXApYLtSy5jQF4E25hTNLCbwGx2SJu67Nhtg6jRs8x2QcwHE1BiN",
  "key17": "39PwyFD4EAJx6JfJXictFs8gE9oyHq22PbVJqvCVcXDySewJNyNCpVERRnodbHg17rwPcLe6GeFvxFm7vmiWctFS",
  "key18": "48STqNovzr8fCZnV9tGfGKy69tthSfMc1HibkEGL5Wwsx8Y8XKKsyf178ELah2Fwfz2eo5SAb6cHxY2HP4YGeVRC",
  "key19": "4mdEBdsMRZCq4V8ENVHmZfquX4Q22C6sjk69eAjKwrWHH3HzPnMXhXtCuQ7kbyPv2HGLf1T4E549v4XJh1yBrp86",
  "key20": "FFJzYzcMwNLYZeXseZwSFmWYauRtKxfo5tWKAEhrngKLTtGc4DXrxj3tS4113R4Scq22ck6yk6nkQYPYtnJYeyE",
  "key21": "49Fj6LRzYCGEZp8nJBhs5b48jUEqCz6AM1WD4tWqRovBkHB3R452pZHWdyUhVJW8Wtn9Szm5ZCvvFFd779Yq9ueF",
  "key22": "naXZKYoMcWSaT5NuMTmCAdsR9EGxcDz8oeYVotVBa18BYZRPs6ms4AnKu5H7MWNFoygvuS5zbBHVVhsZBqZk2sB",
  "key23": "5uobPdjTZz5iSN1doXW1WbhnVZxxG7KdKNLTbVmCL9goCyRTv8VDahqsMcmHwHyHCRyfqie17B63GLHKhyskR6Q1",
  "key24": "2mmkwS3tRgDkciq55nYAAAPNCwA3qsB3vTehHnqA6R9Y6d4jkTWukbJwBvR6txNjCUsKrZr4FoGA4t7ixzH6gcVn",
  "key25": "52ioYQ9gReAxoQ9MWtffiWJUtN3ZqYUCQW8EYfToB6mahTzwDn6hknky3kDRtogQaESupNQG5N1foUZ6XXxMKTnq",
  "key26": "58A78huh3Hdx6VdhxB3N1hzxajPt6gWeKf2YeGVUW9MXYPTruAHMkQq1DKWxAirrHWw8e9Di5eMbLyw8n86Y78ns",
  "key27": "4cpKbjMWtWAtZDkkz69afCX19pj7CTCM99ZRZRsKmX55cTKA9twZB4EiXAGPmKmnZDTgddYZhHVt43DYaLPgM8M6",
  "key28": "3rGH764sLMTJgyFWQyA8qL65UeESJa1SoEsPtTcMMftotLdSjDZdziPnMRhF6bYq2Pkxb5pRZPKAabWKiqdZALZT",
  "key29": "3fhPpBSaKzVJHTUDDakXRZrgdj3kswTdRTGB8LhzfYU6C5Yqd4ZuodhjV2LCtUS34XpZ9A3jn8Re2eDCGABVAncb",
  "key30": "66fz54emFC6RAYBQUnHdW9S1wGefQNPvbsK7vXvABvcJPj7U1c2Zc29n79Ujtyy17QVC1JbNuTkwSVHBTuXqhBdo",
  "key31": "2QMvRoT7u5CbXzyjEa8tkZGXWAsg5W5YCRMEdUDHhHhQw9JjV7EXDN42R2TGQWXnSKvLQ917BKbe1h3cdep2QLS1",
  "key32": "5mPMTQK2ATgE8uWTiH9wrVxZztgN3adf9FZzqmskiztPBZxszxmrNpjG8x8yQy1dVX5tL9cX8knrV5pd4TQ3EeNV",
  "key33": "3hnRPMX991mLM1ewAXHfSnaq4nwukH2dhn3cwf8ZmSJvpjhTmZt3RLf9afzNaJ92q6BiWUEHufAcMGayDx4GZkWG",
  "key34": "2wSvDzxkGhPoyd3hJuwe7DgbUJHu327T2n1QfCx13qqwmCm6N6vo4v457Eb5KYZp2h3H2Y494HR6SRvRtscTsekA",
  "key35": "5EJsHna3NuteoKi4qafL22TAGyDRp2oXp355Ag64X48Se5QnVAW3LPNWjA61Ym563F71N7DuYjutAmrM5Fs8JsR4",
  "key36": "5i72fpz342jx7uVQVQknrsmefWorXHAYXPP7DnhGo7DHoJXQKWNtwLMjYLgZKAJimgaduFGej1ejKyiEiLaCTmp6"
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

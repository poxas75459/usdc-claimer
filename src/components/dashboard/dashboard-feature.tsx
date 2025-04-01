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
    "2LHv6zVmnH8swZ8AVHvpSzaBfHD6skBG83P8eYjndoFCBvbBqYXx4LLR4KSqD3FAVuVuDkBxs332XRcHhV7y4gs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h34tw6fA5v8gCcm7GZTyqMTSLkJAck3KK7pxhd63xybAXMmBjp35MDMiuMhxDNnBjgdck4XzafoPaySKrSTztK3",
  "key1": "2kKqKoj9ssxvsdDmnirrcY2g2Xs7SHigG8m7omeQ7HxeqMZEqyLFDCeNqoHPY9qkA4HKCoyPmx1Pq8wAHNrm8vbv",
  "key2": "b41gfa5kr12tBf4FypZDB6jJFsbaskQwno6fsUYdKMUbQJqqQwdDJHy2Cu7wGV9uE4AoX9P8mEzzZzxf9Gvtzp8",
  "key3": "3GxCbSGZycBwgLjWkzb1UBNSuzF5ih6ybiDgwpXG5gs9JYvGgLyz6hcqwC7K8gytabq4qEfNf7K2aAzmwTvBfqfr",
  "key4": "2fcRT8YGhGBCbgjkBZyGJvX82tozdmm8BM1GuUN6kSuy2mbxHpTv8hpL4L48vZziArQmZeEfgiFzr2pB98y5zC9c",
  "key5": "y2qTyTX6EB9CqMpjbi1NDhNm3jj4hyi8ZCP3vgxoKZKGFyta9gngwsSXDeutFf1uAohDkqKxpjerTK2Ua8zXiwL",
  "key6": "4b61Lzd27E6V8TkbgPbqe6G7E58dkNpHCspyHwLiKCocYyn3PSeUdvnZrfHH1ShokTiRqrQDPi3vD2J5RieeSVeZ",
  "key7": "24uTdFPqRQVmdWzFWGfYvZHzxZ3ZnqE5fCbAZ4KdZpZpbrHfRFecCgw3k4qKwBw5fw36YN5xxhvuzyAAEtFMFzCp",
  "key8": "5bEda68ZkvR93ZDjNt9DVCKcQN8HyWFDxNGJb2UZ8A6BKHiNxBxfsN7a8m5VTRLbcRDStxXhacX7Cybam1a4qvze",
  "key9": "2pqxwhGTzeaFnRL4ATSyVBsy8FFkSYZYPVu5LppzYaQcUHwHXEnp9mtwCJhGf3iUYDRaF3hdJeB48MbPwUjjzH9G",
  "key10": "3RDfxFjqW4eTtnyjWsYjQ41muFH26ZBRqgrMRCer7oKAjkjoHSnCSHQXvNquipbPLEkjojXd8WGGngP71MfSxhEr",
  "key11": "2FNeYgPWERQvGfvJ8NPQHLC31qmYvbwTVs55FkkgUdzPxucL6FTYayQfZgQxTNkhrFmjzKdz7wR997Cz3v9MC4Hi",
  "key12": "3wJ9XtpAx4xH2xEfqSnPKF9AFpZvh7ngPb6KFLLtftnpkJetPpJ4WFiDEKEBJzwWBpTeBg8z6JMtgn4wPeBW3LhM",
  "key13": "3KQz9K27io4zkuz5wmCrJDtW2b3hswBzn7mxTTDQsoX8PhH73EMtctTJ6pA5xRJroJ4RzBFPsnBUJfu6sjA8Vosv",
  "key14": "LTYDQXkm6SZAV8c27fS2DvcKyxXgjr6DMYvkW22WN6n1ze4cVhvqNkaydBKFM1n4s6AZ3reEy9cq81D1PML1dUV",
  "key15": "5yUv4W5RRkhfQ3yTYfJ4u6U6hFdmy5g9X2A69DfQ6QnNfQ5ukZDcTntnVkGg4PAFjS7EpFofCEPm1ZxYA8ZpHMRy",
  "key16": "25zd3TDiapmMoXcioBYxSuHgsGrkW5XWqWByD2sRsVR4W2cZNyGkhaJe7aJWmkCY2mw9wRw9LX41yPjGixPsVzQ4",
  "key17": "5ZjwNWKp9BkdB8w6nsFMrDimHkSUQ79aDsgcHQHNDu8rCDAZiuSzuFNjxkjXxXXhKXQNMwBJt3QGdDznZM5Tiy76",
  "key18": "45rbUMsz9hzdUBSfxGcJs4hwBhu7mLbRmFrWE6588RTtyENh7cZ62GrhX3h6Xk4keWCPwez2np3iyWwMaFM4aaA4",
  "key19": "44VnXBcdq6d4gD9bm1Fw6UGxG4rkPHpz32fv9H2fbL41sqq73a4ew4T39HGbFDsAueGKWXAqY6iQ7B2672pPiqko",
  "key20": "33kYWgnxvDWetWYao6oVdoQ8SNRgpJSeDf2VqHVkDiRBeySQWEkgGZXtAD4sgzpBVxcdaBSfVrY4ryxX5EhGd4UZ",
  "key21": "2TiAv4BU5TiHJNhQenH4dL7QTsGnifS34i95iTVsV2bLRiv7a51orom12ktQvWUFNAaZa3TR2W249Xa6TTNB6AF5",
  "key22": "4aG28xyYY5Fj92untA4xbSeUc8f9yu3HRx3wKtr1XTpo6zjyRT2R1EbVATPnCvj96JJ4eLJnSrJDo41JPzSZs4ae",
  "key23": "4GWYMTLc7FHJkRWEbK4jv73SKxYBeBHjpENbJHTNgKCFMpXCQyaWjRsUwLW4P8mGqancAjYx9isQnGkThDPSoBRX",
  "key24": "kQQFzUftSVjwHXRjyP1yKb8bEtzWfgXQJPw7eYoggjYZ4sVyxUFfGRf4tZypJuHLN3833hvkeWbNk6t7hTHTyTy",
  "key25": "35mBKR5Ggo5mKPzLmGxNr4D6iaJMLDsWhXKy7DTMTAfvWHACVQKqat4Z3zHSDkaE83m14HPiZbXk9x1cU5e63sdo",
  "key26": "45RkPpw4297krsyB8ZPFqooug2uJWGKAKFg5pjdufZoYHPezfFRpcHqdPqvawSrpmvmyRXZ2PRzkL2mP65djXfWv",
  "key27": "34q8e9Q8oSgsjSHeNbrtyAGimvLo8vhPxpCDdS7hkE1BXXE5d4ZLYo1TLFx3NF9rymKo9uEDZeutW47f4tQZW2vP",
  "key28": "5JELXsxqUBWLoxtWQv8d2nrZ9kutaCo1gZHAxzQsLLDvFPHfKcnVxJ1gU2F9SrV1MTTzZtxpRk5pyTkF29mPNCNm",
  "key29": "272Spr6kRsLkGE4VvosBBYEZWN8oYqVwDogG6P3TGJEwPr3pQn31o7NXzkejg18DwYuuCEuTSjAmtwmEkTTaJvUg",
  "key30": "5DoLM4y1GDpYWwpabpLaYN35xhhjwy35DFdkAJHmaqa1AMF11YV1DxjbQdkcehm2U4ktV7sBn6Ti5DmHnXcRU5C",
  "key31": "4W2g4fSNMWqwG3Es4rkHRPMKk1C3PfMFpjxHEnZVwYmqEP1Rx6RFacsfakRb5JH4MrqXmoCavnyDbH48pa3eTaN9",
  "key32": "4aXg3Q3KG7LmJ9iRNujyCbJXaHpuS161gzfbmgd71Qno32cUXo1oYCE428PHnoRgryZsujjv5uX9rKsx7817JfDS",
  "key33": "2ek9Ykn8y4QxBPQhKJ4X5EAEmVdDXpK68ADx6GsCxaXcxD22iBaBsaW88jANHwykwNUWf7VeiNSd8aMhMDz4Udi2",
  "key34": "61sJnFrDhiGFEVNeRMarD5SEXQ6qAtAECQFyS7CHoiuRfqGKytDtJRoaGV7XGPAmYVnAfsLKA4rdMk3H7GjYVaan",
  "key35": "2FJadyUE6wZ3mNHqrntfbUurWZ4rhiFANdjfDzWRn7PcbnJxF5waY8V3GnBqbs8DTzaQzaR3jz7mB5g5QMRVMv8r",
  "key36": "5tTeQ3TncQFupMwuv6DUKiodjPy1HFQUwFxYM3Kk4ke9gDHo73ziyeY6PSvuFfmmmFfT3evNByxTBoztM9Y5Ag4q",
  "key37": "dQ9Z9jx45CRHeRDM3eLuKTry6CqiX7QjsHKEDsWmoGY5G17CMWLBNxYEwoWZ7ZqHPBwJeT4kKYGbPinFCcHFg9U",
  "key38": "4RQj3mxLJuxjtfCLED2jbgQQRKCisxdhqPbJHAvP8eWpTSm9ZLSYLooTvviHnYygykz2rLWiTywFVdUd4iXADDt",
  "key39": "5RTWKU2dX7NDZbnomiNXw65Fgxaf2z8qyxjyMGpKnTKVm5jw7x6YFUWb82Ykt9qCpj6abthKA9S455iZ9TiKkD8Z",
  "key40": "3V9tYsU86BpUmpQTAanafTYwvp1VkBD9XkvdrRVSNQ4J3Are1bSM2CvkpYpdNpFnYJ5ApzQGgevFFLasCt7iBeKR",
  "key41": "52DAWcgm1tWMAM3nuVZwbtYert4pRQ8JNjjvYQBRC2Pap5KNoFKMvacfu5Qp8ANpwfxkcx4GvjqgbtKEjQ74f72h",
  "key42": "3SnfKN5e6pZFhTJM7G3zrQTD6yrAyKrom2F7GT2sifaqcVv9KoE3Nzc272VDWvPZUzHmUWC5de2abW7BBhW41iTn",
  "key43": "3CZrkEjJYd37r3vQ8Cc47iAh6xZg2wQ2EDkufrFj2mDcvJXR2RttgVW79sxZZ612gtPqyzBEs7Fais7vLo4fZzjd",
  "key44": "3UbmudbMKwQY5iRz245Q8KzcRNKC5Z2q9CR3HyBf7agCBe659UYghjWFX9Yr3KYqKUWE8ZLTGTfAhTtsWob6hDN8",
  "key45": "gxskp2W4FNjv5NFjHDQtwbmR69U3girMYcqTAK1yf3QpaZ8g6PVa8ey8RRaf2zLPFDfTH38JsXKMDrW2BKdb3rK",
  "key46": "4fdRHLd9pCSrtNSgBHJqDaaRcMEX17Z2dacdeyVQXRYmFcMsd3zMogd9Nhdxc8KE5mzLL2jT5ikPQPZ7PHEs2TgL",
  "key47": "2KZYb2nrufBn2W9ra3VyHGQEbPC4NuK5doCceBnN2Ar3YRh7MfyruMFATecicPAwXJknC1krorevrvGq8E7vEQeP",
  "key48": "31Kv5Q9E3JrnbgbsUdnr3juC8WVx4rBSkKRSM7hTekUuuYT21fNnWjfrw3STnbDJFKD78dZAW73CiCBKswpCEvsp",
  "key49": "5P7nH2ofRput1ext25rFRTJhswco6PEwW3QJeVuvCgjNS8zVHQehmFepMxT2ybA2uyv6VotkGSL9aHcPxfRtG7wW"
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

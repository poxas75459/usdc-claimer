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
    "kWYokm6W6cS4KJzUTXMHFSsq8QYDnZ48VAwYC2abVUjxXdpcWQVqt2TfswpjQcYnBxV8FdRkqZHLX6H6Eg3uSsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uqhwqupjm6yXKrfDY9k2jmHN3Jc3HAYA1BWBvyoShGKSVaaW8EYgzwsc3Heug7s9Q477EuUeHYCQeYx4QHDt8or",
  "key1": "4da3GQTQ3Dx2q9HQmvaNc3xLFsbve4kBwap1Li6KAHrEUKaRoo1pWKqqXKwvhZVc3zjeAPykeyT7mVNtTg3GTKLj",
  "key2": "5q9LaX5jAFRZK1L5vooBGzGybNaC83JxVEPbRqGpg5qT6pJ4wpmzwLituooBKDeLLMWMhL5zdg1rJgg4esvc6t4j",
  "key3": "3DdAP7TvYwQxDF4nDf5B1Br8jNGbs1WCcXd2kRYkiXjDKGLad7TcRg5uhvGPXEFCxiTKvqgrCzyHK5UK7uzWvmdZ",
  "key4": "4hFcpqi4dxZQznjSqUYrFoLjyKGVWkNdzowqJPWCPKTT84w9tuK6KgSixwBZEwiykNWuGxzUAav239GuekDa34RA",
  "key5": "4XLjsm6zgqg1gmHgKn8iY7wb3LJJ3xUrqxiUvgNSwUMowWBeyaApMb13e2s4WMXDA4H9sALjPvQhVcMV7BK1LsMV",
  "key6": "5yzpyqDc4HUg6CJfmR1vbrTAC8a8pG2iZb6Wcj2CRR6J9dvUYkVQ6dbQsSpAzRqfFLFcZsdK5RUnNHs8X8UbNn5r",
  "key7": "4AHfKbcj2rBeJYM6XcYAzhz5pYNUgv2qD8psP5YB917jxcvokmRQWDAyHutH5G6xEEpDYVse5keaAviCzZvC5UFQ",
  "key8": "aZGQttXvXkCA38d4sAaLSeVtN2p8JWcUTRXe1mnHVZAh7Gd9uoVjXWtgK1n2C3hWh9Ngmn6mP51cg91rVNQCqsX",
  "key9": "2utg7PmuDfoP481U88RaMr7HVUfVRxxRiiLadKG3LDfZB7gzeU4QypyZNQHCP2v654sofTMxdJj5ePBG1EGqA98K",
  "key10": "gh4D8RdqiuervHQP8nfucPhbv8iivUHkg4NY7VZygB7EKKi8wbRoPXxAkzPNBwgaaKs8McFQ6jjw6equtHQUHcF",
  "key11": "5yLiTyb21nWfLkJC2nDCoSW7xQ8RRKWTxD3aBmPKzmARa8DgRxHU4nn9NH7Rg9ArqQYd6G7oEm7ZLdCMgzPmrQdb",
  "key12": "4y8c6YFmX38Ba7whbY6WsWaPgaaSodypZ7yKgx8H7aMHRSstR398eYgfAeiiRyS28gw3j4G7MELgHPtgbt3KjeiK",
  "key13": "cmeTyhQ2djdSrypeXSAVTGGoJjmXw5wVDnHq2pL5toka1M8VwFXkLrFxnpyKdL3wkHWGXgFybzHFbvrVj8MGXBp",
  "key14": "2ojX728UZVRQh2LxtWJz7Z6T8SQk8di28tyXrAKrhostDxUUkQeGMSwpbsfDB7rg81ngV5nCYVJ4RidQfDLMqz5N",
  "key15": "4GeRT5JVockhwwN338BCgHQzNyTLXrEg7rvE9rX8JHm1t2nhHmsGLPxAW9Hf1Y3sPF4JQ1TeBBEZ2Hg2RDDqS6Lz",
  "key16": "3bFUYD8mXqRUbF4Xnpq27K1FGrnguCtjKDGkAxUReRtV6UbcAKTTWbkpnzLkK13VrDZJxXymd1v2Ejx9rE8w91uq",
  "key17": "2TKzU3HWayii6U8cWDaFMe3Vqdf623CM4XNHv6vLpfkzpbkmuRa36aCYqDhBgPg9E1FJt2aB6nYBMesGB8d5Uw7q",
  "key18": "4LjCXX5fEtGdfevdSU3wkD4qtqiKYFhV4TSumjB9QxS2HpgEe1DtVu2CzSL8kyHngEb8eQXwCARfBZ56kPhTdiGV",
  "key19": "sr49J2YQFTFMRNduN6XeXKm7GTTRB1pHaA9dxKbuHzzoku6LtyWRyDHZNoZ5R6biXyoTQppcNAu47fACm7BUnZx",
  "key20": "5sCHGLhsJUtJj2QzmQontcJvxurwChgrsKSyLcTvjZc5VrGi4dZ7uSNVUnLfPzXtsCDWZTt9ctrzqvHp8bEzYia",
  "key21": "3hmSe7mVQBq3qwFbQhBfqvrTpkuCbT1KmLHArvdnUhCxr49tTaANmzWsbZDYhuWXjokXF1fHLBR9FHgkGMNhQB4c",
  "key22": "2YiYD1pxyxJD1LmQ9rrGAPSvKpYP1nNfUHtxguYVS5VJdrS8txRA9j9vZepXR2wsHYBimRLT1kPPAQWkAaBg4BwH",
  "key23": "5TqHzjuMtPp8uEmwiGh9h7Dd9yrCH1mc2EHLLQvuYYqXH6amkPFWq54PvfWQeGtRT9eXFyFixjy9vprGhNbY5pr7",
  "key24": "42Trc4heS4no25PWJeJB881udD1BwPN2p25z3UkDqNZEvFf5H4s1TJsuaKXR6VMJZyMVsLHrq9ZwioxW1ZwEPoK7",
  "key25": "EqjxNbkwUzryeLqfjj2aDEmDqcn2sXmTjNyL6UTuNwZCwtCsdXRjZKtD7VkoeHPkvVFe4HdGPpNkKtaPPGGaH67",
  "key26": "5H77ZDCSe1oJutTYZm9p4hRsPoeemck4SMpsUu5JpfckZgNTNDZooyenMRzDzVsrSS8FFvxsT9acWe7A4pUoPVEP",
  "key27": "2XokaQSFHL4YpAgzqVC58nkf65goyjaEf2SP8N5tUqJt8cHLpWpL5Cgtxd5qyjwJpFiuPUYwQFFJQ1uPaJvoPbCc"
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

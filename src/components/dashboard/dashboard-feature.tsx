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
    "5egGa4QmPxPxYcTYVwfDFPb9oU7PHNsMzwBLE8M65LJTfp4SaXCjQW5XvH8oHyNoFq8dqTCTSDU7DSaNFRDXo2Mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UqqLTbt9DPyvsWoqaLsxNYZeJbmYZy1ohR11dN4EYoJFjzLrZgMt6LhBozv7yfYceuSDXbHHsxdCWhXeHCG3yUD",
  "key1": "QfPagKzBwqfzN9Aerf8cNadnmoN4QEgLZGJUE624LniZgfu92QKTy2QN9nUBA63jppm3RoBS41dGH4zZUfvNqpr",
  "key2": "4RSeBqAmmTd6Y9uspAcvJAF3UPRmm8xzN6otAk634qxiRLweaEQY1kyMz6DYwUii8tB4PSm1VYKwJFrjjMXK3G54",
  "key3": "wgmSNt4gXZ3Pow84qyWRKj1zWeK25HT4DssgF8Z6UEB8WsvqMUL8emBAy4DdYQs6MLeb8vezbrbSbprZ9UVoQcJ",
  "key4": "wVtCV6Cz7p26eevmaSFchKkih2nie2JMCM3y546WVsKwXuJfM3NW1WG9hez4U8a8oJnFxiVLxbjvim4z1th9xTy",
  "key5": "3d19PWLCLwghDd8JFfZDrfG7iR5unsmq42Rn4hnJPike51McwNGmbZQ1sW2huP8yimcRJqBCMz2fDbD8hioNxoG",
  "key6": "4HbNApCUrXHEhJfTGVcDhVRmBxmQnzmfzVE4n5CYChEVRXA4izpkvDRiM7JWZ6GPAohVJ7jgyM7oCLFSg7dd3Vs5",
  "key7": "3wUjmHdnbZeNY4RiXavFZYPsbMmifNwEevtFXceRdQh1xYZY2BYBUj8XdBHEWGv7stJAbxHfYUcd7xgWRpw2iZYT",
  "key8": "heknVGmwXT6jPEKyefDMrAFySTJsc47vgQmDaPdBxsdBzssJ1vGmyMUHLLUDRmzUT6btWJjopBEMwEQZBRV6bSf",
  "key9": "jZRyVRkHQvjGtBErLtwVUbqmG2rMww3BAk85DwCF4Pq4TBF1gFaEyVu6hYZ6u778nVFxxpdw8hKc8hKSsHqkkfS",
  "key10": "3rAUf48BE7KWXzeEj2uHN3PqghjnNesYCSkoxMPPQ25Uve3irSbp3dKkNqKDMSCdkt1F88BJ1zgWSeqUXiua1NeP",
  "key11": "4iHB7op3Ltk145jwySq1xHumwwJwn3RkmCdmjQX7kdRq95uexEtegbyn3nLeaVyUWzybzGvefZb3RGyQe8vS2vBu",
  "key12": "2K3auZ556zmXejaJ9tGABwsbZgDBQRRXsBfT5eGJkpQRQQB9idcxmiv9Sorh3gs3HBJt7RWZDHhfVZirGLv3mN7z",
  "key13": "5wGajtaK3Siu28vFVsDcmgPLc29T5nwjxBHesjHfWTnYQKgXdGdYSxJrb3iq5eHH1egrhjAqLSP8oXYhokZiPkKs",
  "key14": "5URDTEWQ8GN6nHLDx39mk6k4YXXLPHWyHgSBR6NuXyToiK4oefnLYj3mPbzHvcxxinKZvE5Y11AjRaRBe5avBJ4v",
  "key15": "4q28bEMeLK6mwv79MLuNS9byuqhCTYt9KVCfNLq6TtQxRK5SF5Gf9V326oujL8bEpyTfxvTjzkLhnwzj6EqPKUzu",
  "key16": "9R7hq5LhpJQ4Q3YpsFueAx6eDy6A6LFeyccKGmj7qzR14RtTcfzaY518NVQp8YMLBk833B4ampm93UNCYhUh4Mi",
  "key17": "37ubZkzjhsPLx6DrZCScbjwD6UAbDBNvftbt3RW4rF8QwZsNoFfKvQiKQHMKrSmjAtXNX2undpysgLH4euuiMNhP",
  "key18": "2L27wcR2k8Y368sinKcH6M5s648riRpixbLfGPEWoTKsCrRhuyTMN3QS2EWn1YEd2cXLvMuq29yLemTm2QBfgNqC",
  "key19": "27qrZBMQ9EEJyzk13dBCSm29f7MAeif41be77gaa2wHYQ4Jpf3YupjBDzPpMNL4BZxKtAh7CnDAED7G8xQTYYaMS",
  "key20": "iDFvTecoRPLC8pReCWXrv9XbvEW8Sn7NKdnMqJ2XrQfSXE1kCsGg8zQGaruPmQBE2x1kKJySBG3uDTB4wE7boLC",
  "key21": "5gAQFoTJx3Byvv7hJDqRNJsJHn8yL1kdwpHRfzNERJ5C38ErfeW93dzaQZNsxCtENhdsujPsFduNjR5ZkQGsMsjR",
  "key22": "pmzA44MPVWvpyjn8AmtkRPKhgNPGipiAjaBSZmAqowYBoiV177KF8uqjWPUjdkN9b4JuCxszbtXCUEFAz5zY7cq",
  "key23": "eSamoeRWSJfeZj2Kjsta8Sqr4FUbMs7eDpSikokKdkDDXTNs2cdi4wm6Ug4nF7czdiCWkHB57oSocFLDzVPkbk5",
  "key24": "2BFYQ2Feo4wFA9iuHGFaFQ4df81TVAV8oL9Urt2FwC2Hn4JcpvRchW3gbnVztR6AktQy5LwRienvwahMaDYifz8F",
  "key25": "2ZZyAFEt5vLvNzmLkeLWMDRFYUK2wtuNjTyQMpreshMAxLYrYMT8r1tL2aozBbS1dAg4spDJqw93yYkyWtJcLz5x",
  "key26": "2xXWDFGx7UeKcgTKezc9zAn82WZgSz3qcZtYW33qQuJa3UHt8jEjrYg3RziKfybSqvUvyDcikUbLmGWJLnM2drxL",
  "key27": "2SHatDz8feB1Ptp9f3T9JTGYmagybs6YELp4MVqzwhi73UzvYsRcUvL3ZAhQ3qXXiGAqGgA8j8kbfyvqDD8qQ6ve",
  "key28": "3uDXxYEvBC29UymqUuXnrkjYV4u7F4CV1cEZJvRd8vvP4WcU65LoaCSqk9PoiJvUdnY9kVepJ2EMZ9pXCEW9fQKZ",
  "key29": "3PvPRku4JbUkMMbiTebuYH2pU78UZM9jks7oN7g99ZCXcSoPcpVxyMWi9YRGVwpQBhvcp4UpimePCAXzMk1Eeomo",
  "key30": "5idGq8115W6kRqnnSCM4zZeyRz62LSJXVTfdAZWnUTDzkxrP914KLk1Q398vrLUAYp1o38MpUS1ZpRKPVWMTAUqL",
  "key31": "r6cEpmA9m5BGzS6k4Mw2DeJHyFm1vxPL1U8wPVJqiaKLPePYqFurHD566MeztSiveEo6mGVVweLeUt1ctyTacqo",
  "key32": "CK1nL6AFwENy6KEqBwEZ8obJyDaDaf1wQjpkPrwiHYkZ25PMhWfanVty1bmvSWScageAeZtDjoyJJz7fVbPDcs1",
  "key33": "4rqR53nt7Hb9E9TkyPRuM8KuPG9RWqjsTm6A5HBUrLvwRuD82Xi7NSPmhMbVEvQ6PnoJ6XXEr8KwYwHmcyDeMSzT"
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

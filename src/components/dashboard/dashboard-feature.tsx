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
    "q1qoXi99Fz4wfjSoauQZiMDCuEEQXK1S9RC2jkjBXMqRVxSCw2N4SVPVLvT6T6phsrnivyU2KZMLk5fHEWDfPHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PD7HV31Ngrrds1eRTJsmyvtPJjQM8zE26pnApxiqpy6iiHVcGitfBXyiscJN4i97M8VzDdVzF6tGvW5gw9LVxV3",
  "key1": "2S4jK4TE13DxJVKbS53QeMHLSeHqwbjMudYjcCc9F1GrTpKVCixizDsKaXHFrDpUuzcQj1m25rP8vZA2qGNJWd9B",
  "key2": "zFkuQBhi8or2FmHksA54BuN6ou7LEvwUW5DWebN53icub9A172pEPzjKgNSw4Uqf2TEhDnQwZGC1Rsa6RaaDjeM",
  "key3": "5rfmC5EyYAPeY1wDu6gWxuSL2JJ9KrKLAJGuPCQkJYDVX1zZJazXjmynMk9nhdncrrU5MiegcqwrBSTN4Hd8uffU",
  "key4": "2qaii51UMFfb8om4wMoButdVgj34YdwekHFGXrZf7EkoFoWrKuSMc6MHx9JEVtCe7o7Y5jL2K6eKZiM57uBYEdqa",
  "key5": "4wBNJG41cTaCqY87cnKrRtvyizwiSjS9K756pFkL5tRwvBawfcKXuAV68PcraVf1L5jRb41ns6e7CCAcq9aMZ4d3",
  "key6": "25BVy5H3ZUBJtQU5SGNVUTneoj7fBMur2WigRYaNGdyJGqGQM2Tsod8kxvXHp4Mvd2fwLdYAou2vw5X76BkuzAew",
  "key7": "3Zteot8SLUrHniBajMji7qYTYHu3V613HLkhyp22h98ArD8JDXe5C8914Zb987dRvGo2QpqAh6Q8hDdcexUyYFvT",
  "key8": "3qYyYwzPuwcELaigGxWnhYBr3ot4JqbFj9FNmnuHTocvYKj5NiXknUaR4FeKHuYZoGQnNPAzpnvWMeaoinv9tYAH",
  "key9": "2bJ6oDh5dziZXFtb6ERA8L177THtDMjJten3e41ucRTBTkogmnVKgmnBzk4zpPCfoierutzFpVEnb6pWiUPope9R",
  "key10": "mu7r9G2ESPGrsjHLud17vqEothHVqnTgjHcTSK22MGdxw9cjL9Z7BxK1W1pijyYc5SBm2iuUPgHrQsgzjVQVvc6",
  "key11": "b1Ah8DKVKKXwMWitFKrKov6czAHSSdKp6xiSxdYhaosA7SBxie5h822PSyabHhdCAKccYg3FFdV7XhZvZiKNhec",
  "key12": "4NNSJcpbSrGKTBBWGJ9Lhz1XrRSkBEqLLNXw32BWYg3Wwq1epmwxU9XUjRS2e1K16Qq8Qz1mgWzgD9ysN67j6ugB",
  "key13": "667UE4qU3Uj57aPnap4CVKr5gkMnXgZzDbLt1wPQQ1tMVtuHZm61zb22TnnXZ4CNvEfkfxXqJiBrBSBbqP2geFqV",
  "key14": "3YYbSv5GJ3g7QVe9jTd12haKph2rjbPPUnUCPFF58ZdoE55CyAozcwSr98UUg5XeLiManq72dLRyTKJYGDmzvtNe",
  "key15": "2nUkUAJ1KemMQPT7pkS4nu42JgmgVnSSmdaQgh4Vg9SyQciSaznonsfToUQZwfRnDGD6VTQ6X3PcjmRZGoW2AGP9",
  "key16": "3VwNnUce5oabE2c89DnQ4UX5TaZuuN5TnYCR27wyyvh3oAtkJ4QyHSFSeMXRkMJkzUTHm3KkkaqcXKyzpRRKZMqD",
  "key17": "3DQChu7qXbB6W7Etq2jwczCk8zxvzJGTezvc9zJKvdK3FyqG17sQgTBenRwcV2rXUikhE38Jrh2kWnaRbZw8CaXe",
  "key18": "22aoA9dAYnD7U7tT6NaYkJENzApHTwzvUhquKMrVAjSwKmed1LT9GLuaNYTdfkMopZ3vUim4vMFHrHeDQbGrwwBd",
  "key19": "5PD1ZVKKg4QCNpmuS3vf1JTjLAdhALuRwAxBHj1j8JZPsjumbnzWmhtCNPKaMTUek5xyoMsjUyxqskw1PNcdKRC7",
  "key20": "4h4rcEC3JwYbG1Cu2cStR2heJT3bEgWrUh7vnQFF7Dprc6XEfxXmGNWnmXhk5AQd2rao8P2cyCKZY91d9h4kGWhC",
  "key21": "44WNh8FsBpDjXTFi32cVZAX2cQ3u6LMvUxYNweBKmpG1vojCeNJtFiuKak99sQ4McykSVjcbardgPsizw8xY45z3",
  "key22": "4rZveMsgXpPSEqJ6LEvLEiNiUDXGXFNQb4bxYwwPr4tFvJRuNmq6TW7Q4Vwotxv93z86dh8QUNZqqW4FgtQbAwyy",
  "key23": "4AMGrmqa3PsJFu4yBfy5LmWgZetie795W8CjVELnAze8jXYRvchFGefm8h7pRHjFuHWbB4sepdXBN9SaDtbmmkGJ",
  "key24": "4XuPxusDCS51b5jqq4CavYeRMoA7Bk3PQH2TLNHnCpaJ3G1DvQmhZ6PdqVqRmgHtVUtjcsxB5ewF3fPzVM2h8Sjr",
  "key25": "3525oQRGnGhnrLQQA8X9u6RCLMNCFjsKBDRogQzLVsG3RBaykL9bP1mQFy69RZ8oqxKuv67EhPBDGzPtk8tL9x6e",
  "key26": "3BaNcgV61EW3EYNYVYwKmyZX6WV4afCsbxEgS7DbNRdL2hXC4skE5y23ouLHcMdHNYtSKeR8LFa6B7LxsYxqmsvq",
  "key27": "5pnBzu5zce1185TVS94vWZcrhrjjjcmXJjJePoCYdkQpU2UmvHhnzkQLX9i4sYfW9XTuXt1NDESVXVU3FoqYmgQg",
  "key28": "4P78TaC3GnW5g7Un6sqhUuRSosTFMeRV6mM3HA5T8tYz9mV54fVtuoRpVmEV8ws9AcsiFRHcv5KCqHJhppHkEeyd",
  "key29": "4HNng2dYRRJcnnedCi9NEaJpWkQopLy7S1XwekUQZCAp6wqY6wxb6eDnK3vRpFVpwN7qBHbhpMcWdS8vdmqpv234",
  "key30": "4r8FarHUEqqmqBzkoLeks3mkd4pzpRn1EsJghLL2viGLrqkHb8MdjEH2GaUwCq8mCe9iRCkGmYkjTqYeBJG9JtVQ",
  "key31": "zdeYvVv3Ph9w3x53RCfBfjEGiuCRn25R1m5qV3iQ8Fqup35kgk7e6sdSCiuikVdguCYrRtdUP2QE16BCVmqHhaj",
  "key32": "2dRQ7mAoxLKxtzpfuh6mipPzA6i3k7AjVsxipqc1XCUhZ18Be36p8yEJik7mNSGuVdpGDX5zhLpZ5bNpFj5R1nYJ",
  "key33": "41Z37tgwR52PyXT45RctEspjya4j938SYC42BnFpyniffF1YVne8bynipKAPwunepaycajMVAoM68nGnjH3gRrQ3",
  "key34": "3tdiArWYU2rVyekqoLeccmkL9sdix3ZYf7PJoQ2D4Xsi1Z4r8YNSgZEZQrNj3H8CUMBT8FNbxfbLzSgG7Sbw9Riw",
  "key35": "557XY7SWeEwyKkX5sg262ExkvbjLCsmQPN52Py3DnRQfrPtKjTpfSAP1qfnwXAWrwDURw2pRuFLHPAxgxDMSLJuN",
  "key36": "54AsybHa2fuM833m4T4i6PRNPJscU7ggHfPfppoeXsxu9hLswz7nSSHL38SwyPvaLvqgYckxAZnwVRCorgMZ7Sn3",
  "key37": "3bQJwQGDNFEYz5Bx2TLxnCned8SPa3cHf4kNNoo2bqbV1DXEKbmjxS9maX2UQonp61iQ2G1RxcTv2dmQz9J9eTkq",
  "key38": "29ZK8EujNc1i5SVmtymEFhc14aKm3dubg2d5b1zhxfLhUPggZCR2ocAU5PwhtH83N8GfBdcCcGR4Bues18gtQ8Wi",
  "key39": "M6abkMipN5enWErjbxHn9FWmcKpqUEv3Z3VSD6Ko6rLwWksoNjhwPDrFaXSkw6qWbcAF1Y5rAAaznkcPtj2p5nh",
  "key40": "5yNAQzNCq4MCQQCkPytQLwWeyaV2qoToSrmDsqpaFLsPx2ZVxVxipVqosgJPuisxGBEPj6VT7H2ujz21z67nFRpv",
  "key41": "5U12c7YAK7yGxEngGr6YJdwVy9rDMr1RztrmQJu8r2xrBMoEismWhu6dByweUNVoWbQ98apopcDBkre2K6qunjLn"
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

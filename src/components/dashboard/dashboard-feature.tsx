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
    "2ER7T8FsCDfaVgj6tTDHz2Hqt89EGbG1K4Datssno8kUXRuKecShDEr2Q8DvUJ8Vp1DCXMsNywgwXNqBUUoWJqbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ey5FCL8oj3eU3R1H2tdAPnKTxCJwJSt4JRhNFrqj5U6Ajn46t4KHs28dwCP4Y8mGmGRJDeroGghkVJXw3NNsyFn",
  "key1": "5cr1bqrJ8qy2WuhRTC3mm4dMMaDaFPD8VhzGtURqxEUbax3Tc8DLYU7jYoMV3sBxBNtxy5bNch9HpAvhaYf5obCR",
  "key2": "4M6N4ao9QMPsdRgPoRdQKR1v1U2yxUZK8kGjNYwn76NuxJNyooArimBz2H6Z6ggy3wq8k4Tfc97GaZ6xjttfx3so",
  "key3": "2KC5EJ9iZdfPxhbmWft3pUGT2BgigZCzEMCwi11quKpjjKqfsq7ZKQ3dDd1bvViKbZ7jp4SbnM2RdN6AQGKQBXyQ",
  "key4": "4MV9xyAZS1SjuPMjbPBHSopb8ib1yKz3MzDsw6k5cP7uUgzxG1Ks8yD7kyPZHXzmh1pg7rHdU5TxqE87HXJrHyJj",
  "key5": "41FMGbbo8XLcLk9ieLtdqbDD4wHegzzLHobdeQizxN2UNR6JRDpcAzXi9UfEKs4gtuqPDzqAVzWS8FEYYpMjztED",
  "key6": "2f3NZHwEYNVAvGpur7GBesGFPvvfM63wgMfJxgrGhMA6KiRv6QwPmSxdxDPDHD4PYcqWkFTXD41hJkD7QKeGDgig",
  "key7": "bUdidhWV9pdeFipLNnzueHSg4w3Xz52qWKi3eRwDWZ7un3e1pHdsJCX7y3PZPJopY7mztaZqBT2h5jTZt7pUFa9",
  "key8": "2tjuG9m6iYrpxw2vLAxpAapEVVCNtC4XKr6ZCmBUTE8Knw6S4EuhzMh8DkFsJt24R2eTsDGDZyFs2EZMLbTKBfrf",
  "key9": "4udkPKCVZgQvq8k7vM63WS4qZz8UAic11exoYvZpcPCFyoDwiTa7jbHg4bNkz8tYuBSQ4RdhmwZSZjP7M9BehHot",
  "key10": "4A87FQhRao7k3ZHquCEY1VMKMAiuELPVyFF5QBoc35gqqVMEjeoPmQnCc4fjLfcJMXTxBAWqLRaCeHmZwDfa8A1b",
  "key11": "Eyk8QcjFRwbfWWAPeRRJt4UNpVZscbxJ6fv4sST3RzaSF5t2w2auVgtbVZPvQgGvLhjzjJt2qMh1EGrvFiqptnv",
  "key12": "3JnQWVL3MZDi7HqRweV5QRBLainEzeEeL43ejGwKjXyytz4e58tyHsisvh8fVC6CpXigYwkVc1trw1szqXvH98T",
  "key13": "3Rk11KhitxdWfMr3TtTpfwg1Hdetz9TxEa6PBU6JA6RcFg3FaNS4nViw6AxXFgkCoV6qqFeyr5JCFL5BV1kcLG9p",
  "key14": "PNqANV26dz2FQkQ1o8PGUHX5KcVEmJgpzSSgS6tUwfb8nrQYg5TdHq2m7U5ZyLmHkHQ3hWNMpqppyGDeapW3LiN",
  "key15": "2RBzyckRzcsCmrKjwf1izwnY88GRZQK4ngKoqL1EYbsSntfax37VeskdVsYUe4Cy1U5WsQQX1pG93BNrmsErA9M8",
  "key16": "PS7a6PQBmG7mbPwcxYfzjrbWRTvbBQBYUmqWQYqts5niLUKzzJTk7wdPcqvVFsFxBhDJ13qxjMQ25f8nGXjo6gM",
  "key17": "4421kZmkFvpNucyZLyz9pUW3e5h2QFDrGgPSDAkvywXbPyLLE5sKQNRwWXDUdjAW6eyBa8QtcFHj6VBrpGtqak1P",
  "key18": "552nJiMFpVuZeKQoz6z37qPWuK5cPAfKwv8CuNWHeiFt8fZTseZ1bdWLxhpRvCx6zoCZw4JpmqKxxPsbAKNGhEUK",
  "key19": "4ZuJqgjUgiAPni53S2tgXMVpURVQi2pUKUftejyLYFgwzHkwt7AcNkpfFWpK3EvR2Q6KnjEQ4xyA9UnGN8fgvGB6",
  "key20": "4H5k4C2xynffHFESuaeK4fuZYTdjkVUzqbws6WNEEgbPiCBDKiXDPKG21rCmW6AUQzgz95Cye2o1HoFsoEugLHje",
  "key21": "4UPWDn3ECStJsuTv6uVRtUfFMK54uvugHXLMg2P6j1ru2AS393L6Et3Rqjf2QaWF4QZtse9XDMed7bfP9toNrq9R",
  "key22": "5t1yjVEdqDVuK66uJ8HoDZ7qCyRXFwZhtTihKRnoU82NWgj5V7BFF2y5VgF1JGNZn1bAVF6NXxmsc9FRCvCP8Axx",
  "key23": "xCcbqqvTyvCfRGFo8XnwWGExjTeaxy8FuUg3cV1GBHFoCqcVquRjTSa2pHkJFrw45QJiPcRv9GBJAnrsCb2TVzU",
  "key24": "pLHvHn7NxCa4UBrRLZ45ErgQ7i2ZreQSqcivuAzHvz4vPZbhBn2as3WEUNFpR8DtTyPUCYuVpi1ZnUpUdqyrsmb",
  "key25": "5DtJiemfYqtTTKjp1ochfVp1WLFyfeBJq1yiJu31iYBUFX8v8DVWvhqkmFWHsTuC5GdBRfpRZBXLheAxovByNygJ",
  "key26": "62nQUpe9Gy5Danc9AyaqZhoMRm4uSdoESNpooEzYHsgwZiW3AjixotdtqjV7Ktomx7Smf797w42EVyeGfVzowaLm",
  "key27": "59VGZbwtgQG3ntVho123o1sDxEVDm2997F2RAE5diD8xzAxfGTMvptjNa1u9JTDufXXkqMimqPAEeY7JQ1se8TdT",
  "key28": "5VVmW8DWRccoDngA385JuLqEtLPoinFwXieSK1jhSC4v6NMurv5u2aYWNNQARjpHLewyJVPXg88kYo2SNtqBNEEW",
  "key29": "47mWNaYMprbZGwHoZU26dqkvLoroFEJgxoSnmXyf54H2N1d9jz9UPbqknfvpovoCjZrES3VnpKrQjgYm4yczZRr6",
  "key30": "2gkZk1pyHMYWgAgnMf4uuNPcoxxm2kiWG8jWCubakmpFLBbqeBZVF3e63UnuK3DojfDq1tCwwaBJ2RyHJ9yGTpTu",
  "key31": "3Z3KmiV5PGtNvXaF55GAVcTMCRyPr126Eeuxu5GSkqabjfB6fY7hEA6RwZHLeZRpVbNRTGxQFL9bwwcdm149uhqe"
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

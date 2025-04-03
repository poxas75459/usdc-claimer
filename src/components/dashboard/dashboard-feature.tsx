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
    "5VzT1ycvVe2TXQ1P5yAJCVYQi2TE31M8DstCmQLCWEeuDU9mtys6JaqrKuqCxnhprRQXLTfwmXpB3ppJzqxEtHJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fC9Pa21zXH5tRnxZg7FA8t6GNSqdh3QEBhs4b2E5yisU4nyYpC2Dd3f4ggct9fB5Ny231QRyHsmxxkTzsfYxRqV",
  "key1": "5W2VWnDE9L9VpCSkcxrS6j49sXwJJKKDXgY6NQp8ctNpgRaYQD3dbh6i6LLGnkD5ySvw32cvUixeR7pi8xbLN72K",
  "key2": "2qRRpssy39cS4FpAUS1DbhDZt5HPmipK3oizKKwbSEe9wkXJod2jdLLLSDNBsqPCXmGWKvJ5jMRMsj5Ryw6upMSj",
  "key3": "2TiqRpZQvG3GuHP2rpQkDG8Yr9d7usWeJp6p2i8j8tFy95dfiW3jdDCGEjADfiJNwytxp2bmg6PLpJC4nLwJo1oi",
  "key4": "2ZnhDS1tbwdNe9ELRZVA2tKtV1rX8fWBYG9H6JTGBzZJbLtyRh7f3jbSSmDeNG9N9FLt36foHjvq1ahLNafC4GCv",
  "key5": "qhEeiaX2FNxhMnMm6bXa45tNzVFN7xMzKBekqWTHhCqVwyxJHbLpmihKryZSS4uPFYRktfNuckJ64YWz2tPUxhX",
  "key6": "4fGx97zgNZxhNQetjJkcpDGyRuPHBCXhtJe2z7dpN8YDZ9jimQDkVpfGEm1vrg4o6o2CJHemD2i5mBrnUQuWmFuL",
  "key7": "5MuUZGf6ig3FLtSDYP5gPk66QjW3JPmJS9npauQvqfj46TbpQfZyugrhtJuoudRK3aqWmd8xQXQyhc8nUHd3cuNF",
  "key8": "JuwYnCwRMi54w6NzorQ3KrSXnBizYNdkcHZJfz43vpNBTKugQ7bRJ8YQoUGnsrGUV87PvXDjCP9pM8AwVM4pFC9",
  "key9": "2CuxWzUuQyrB4byrqz8EoDeqKDnFR11XopGyZxAs31HK9Gx47yYSoEAGrfHSp31xaz2HaUhgjH4538AJfYiEHvGA",
  "key10": "5dH2u1oSeefphdWwr69QSzUmBjwRJUVx4wcxdqiXX64XAtowwjSW9xrHk1RiD9Qd9B8VvoKgsgoubbu82zvzA1P2",
  "key11": "5dPmSqy9iCWo8KN2NppJfbYCuBNDHMmSeT5d7jxk9cEKTgS3nsb3SD9Q8PGcXCYmP2qRA8PMSyxvfAmUh2um1kf2",
  "key12": "3eCyitboTN995Dayh4ZAiQT98TPpGQcVf7og1NU2tLaB1jDiR4ybMQ5G9yXHG3ydrRUfrmwmhUsN27AzXKATEWJB",
  "key13": "dN6C9dve8rPe5rga3mXYxZNRvxbHFJWEcogdCmxS38owGY3DRpVDGygiHpYAWZDHWiGQtDeTaxQGxT7aippcFeG",
  "key14": "3CgeF86rBEhELC4stgEFRQitwdrGv63SEDgAi5UQXpb8MC19JX9vxkZjvdUAet5hv4eVjcT3fg4qXAMxP49g8q2J",
  "key15": "3STnE7aJZErNSAR7DBHoCGBPBECZ5Zk7J6aAygxeQCKv8dpxJV6cDoSmfaS9VgwQnbwDdyYsWBEAy1eqsVKGDwU6",
  "key16": "45YXGSLow7dWAst9tqxqiTeAEvXcd6RtMA4FauBkbFJWQK1KX4uFSAQpWT4KsEJn7D6Fkqow91BMWCF2L8QuNgDC",
  "key17": "2M56jWHi1ugZuhnRUjh87NuBuR3KYZwnqDvvJwiWvAiBKsVqxcghEiSmwrLJbTrASUSNPuGk6UsynmHfvG6FEGeE",
  "key18": "W6WsH9eXfmJfshXxcCyyVH5ULraS2s9ms4jzmT5rizh4dsCEut62QSZ62w9PDMG2ncqZWhNi6vw1DYQCGu2KMGz",
  "key19": "vaHoJieMBwrnUi9RePm5Ph7qJceyYcasKfbzetQiXFoFJHxf75LnSrADGLQCTvA95AKSYa3aMGdrJ6Pz1GJQiGh",
  "key20": "2KBsHickgBcJGWHtV75gepw4MziCRpLnvKR4K7du8BvhgR1mZYK3uv9ATu6TPRqd86fYGeM6Qjfev4dF1mi5J2it",
  "key21": "5rPStn1nCSYRBZZBDRW6u1eT21UrZ9kGpJhBQ7eb38YTjhfjHsoSpkxEoqzMMn7s7i56hiFUqa7d44W1YgjeoaaF",
  "key22": "2nCvL43YkjDW2evYcnAEjFSbUBgzydWd9dUs5R2jjcWYRns2UADitS7suRs3NqcNzU9sRSuz92XQqEdq9WGK9ewT",
  "key23": "3Ah8qR1VkJyb3cvW7768po6NvgVhGyKz8pye51wS3A3ttt74L9Ahw9QVckLcP4vF92xqT3BaSrEd79Pi5nnjBg6b",
  "key24": "3JdoS3q6W5mfdzZJMsYPki2FfUYd9zbAsryz87DLyAnSdP1V3d19otMb7YRivGm9PLCAfo5353a2RH4SbFTRJLG9",
  "key25": "619frVH5GoFn3WaJTYhfYMKnxVnhTSygaqmAfK6LPSkfB5AJ7rwCgWA7HNxhnXGbB898muENx99vbY8Mr8QMXc5W"
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

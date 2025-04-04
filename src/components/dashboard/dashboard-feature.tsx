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
    "qPskpGopHTHrKKqAhMSfkUCKHEvge3HTXTtNi9kbHVAgRWxvnjLPWw9e514PFU664Kea8xmxP6D15rhyNpNn8Mm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QkMxUcjCMJVfch7UuU3USY4Dtw1oTo541KSgaP4gKWuGZKa7E8mFfRrdW7QBBhVq2pjRyn8NYJdQiw6J8KD7swj",
  "key1": "4p2gzkYMu54H4tHMHNCQMZet6dycvkR8W4hCDpqBm324qhiJN33HhJigAKLPbsMecvevagtgEEpCuwktyqwmrobC",
  "key2": "53szGyWce1h6vZc9hSoVyJ7eLcihhXSFDaJbJk45dHiThXQbtCVqSRKmk5xn4E7c3ZHCXE67jNK9MXYKeQ3oTPMq",
  "key3": "5J2wfwUaxZmYfFTDsWqd171eEB7vqTkW3oi6tBnf6wCoxZCgsfDSUwyYNLqFoUkxyaHBmSorfC7QbFyTHNmQB6qT",
  "key4": "3GfJFKCSzZ6hrGTuWjSkZeDcSRcMoDtSSVtjFtCs66vuCqGy8PW7a66DYSPwqt73dVNMhVz5boQEjoZWuNBNhWK6",
  "key5": "5wBjtP3KFfvH3UkGRiQC7KPZfVgiZ4pofG4HejucmX7E2j4JBPfYBwu7Lrf1XmBNjCamJEJzzRPqnuHaCvfsn6RN",
  "key6": "3J485xiQFLcB1uaSbnBUQmsKHVSU5LMRPTEmXZMS367PPxaXTSozSMwWfP4dBZDiFV4UkiEg8RUSXsqREzC1jnNd",
  "key7": "4KSnt8TAxqZo9S3BG9dHva4rigYTY5E8uzLCM11Q3Z55XgsXiqqw1XF8MsZmKFCn6LuR7HurcUpEDbWeYZsPB5df",
  "key8": "dM23azSUx18DpmYGx2hBARG9VtY7ZK91eFiwutiQ2cEEtfLJqQqvVSByrB1kTbs32x9R5kwHTJoTFRd7dtVuM8A",
  "key9": "4W79iVSQnC6jUohjy9aQrW1KoPCSYb22jdjnurSnKNyHWC7J1vYdbNpg2sJSpVsCXwqf2HSbN6dhmi9bae1y4fai",
  "key10": "ycoV3hoWucMoRNWzzxuYmHKcMjdjAuztiWEqaL8QmQkB9YyyFZokuReeKaoVa1YVJg2wWGqZDxFKcwS38cvXtQv",
  "key11": "41yBu5aRMz28J22hBesXcDuqA2fK59a4mzypecwdKQD3VpcQAfnHJJy5SUJzNB12aGbrfZcoEHtvztBYRJdjYckE",
  "key12": "LqocPWsAAmcK4PxBGX6LaNZEKq8h564AueRvfXTU5jaTVukwu5ijYq97gBKDb8rZVQHLUigxM8MmzaXaKnEChgB",
  "key13": "3k4SN3HtQ9cDCgU4VZ76fV8MRWHTf1WfWJq3CrxwAJqxrdPNbsFFTRVkU9PeWEhc7PMesk1GVzsDdGZYYFmysms9",
  "key14": "5P1ott54ts5EyNEMUCQeErdX4YX2W5otcBKHmmtuJitfLaizTTtyW2BF5bQu38mjzYkHZZedo9ntYCEbNN6sy4v2",
  "key15": "3nnCDbJRRthbeKvFHsoZHexEBiRtiFBvYB6FFyPBW9r8Smei2wJWDSdP6UZ5bv3Ek8P2893hYzPpqc6rhp6645vT",
  "key16": "4V8jSjb3FFMVi19t7AooTF1p36Fuxc2GEmEGwCMwDvvDjpgZEsfKz3oNwbivjH1fDs1CExHqoEa71DAZMciTLSR6",
  "key17": "5moz2iDdovzzNw55QRwGDkVubmpx27zGTAXJqd5wEWEpwqJK2UwNPE9BrecizkUmZWEs2KqNCSPrS9jBPXKiSGAW",
  "key18": "4TLWBpn7cUN7818kKjW46q2CSyGF1Jz8onadwZK7kETAR95fvYgWx4qnnyZ9HoJc9wyTFQdkumPKKW8GJJg1E4fH",
  "key19": "64iiJzQY3fzRzDDLq3s8iAeJMatorghH8uJcoeP4h1FufYSBfTNJBCktE5Y7vnxdpNdGpW2BotbF9DHq8iHWhjxe",
  "key20": "4KbujXgnXsp18UNf3viQNXhGwEYhUakFod8Z2Q1SPKBEBcPK8gNBNtkrvLKpoogALmfKHnxyjpei5ZjGW7aNcCSk",
  "key21": "5GXcDmwpb2JKUBCwK6ZJztoZD25CYLQAcmrHcBQcfiHSjDfaq8wLfY8VP4rTAnpWZzYEHJr8B9zQne8idSU4VqNU",
  "key22": "5s9Uhty3KQBWXti2zJfqBjLL3B9DQ32vTsZ8kXAftHxB7WhViwcPMRg77VsTzVxHDU6rYfWytX1mL148Z9fGUw2F",
  "key23": "1262VQWawY8KtimzYDN3A97Gv4naXPdaYxw5fqcttJ2NMSxVrNjdubWb5r2HVybNC968RbbDt286QmTcNhQw9pXs",
  "key24": "3YgggfgkLuV5QTsdSWmpBUfQbiKy7yMhnJN9pob1EUaZVYbVzXHoNjB5qSvPB6oRVXoFLPibwnBgsBrG6iwx47aw",
  "key25": "5bygkTTrXvcTfr5WgexeFsYr4Gb73SQ5fz96e8Lt9zvwdKAq34ucfEeDxno52T77iXkWtrVZpxAWKWUkeEvZ3Q5k",
  "key26": "62Eazk1NVj6rHQ3d7cU26iL11XiD2LPRRhvgE8RJWvFPf9dCaZPVs2Tsf4SKygtcabfCd8M2HTzffQYerVHtUZiF",
  "key27": "2UJWRECNexJwoJAYh9co5NwGN6WniucdUYGJ4j7wZgQKnKKrarfwTAcqURTBS7t4NsErMKZARvSUca7PF2WN95G6",
  "key28": "5cqVrPRbrRtdiCPET3izBFfxi8vfBWAeLd7a4kUsZcTadjNKVZzpDz9Y3Yyu1VAPYhNK6YpCaZNZKk4JPE3SnTg5",
  "key29": "2qWf3togpxPjb7J2FnT2K21MZDtJpQtqwZeHXzHCyFGnxXKdPw3jswaoBy86N9oK68QbVufLWwhJeYfsdpcjqaLB",
  "key30": "4DcGU3YEnkvmdjPfM1ZaV81B4X7sMiBJnWkgoi2NBpyhNvytn6zc6WQqN7VuHU1TqmiQ3ANePm67eqfxpotMwxam",
  "key31": "XNVq2aKCXRA8f1i7kVLd2gzFY59GvVjXKHoX7VSyz8KDQQWSRhgo8mb1ZgMdKpbfGDbGCqC5iY2d6VC2v4sqB1v",
  "key32": "24sGZBe1ng5zFUTnBRmn9FPXojtjcLShcXXo5WTx1Fa4tmYpgW6i8kjBe8uwrEjoAvMB4TGvuj7waETpCAqwmokT",
  "key33": "5vGNLCogeZPeC9m3ZWrn3AUM5ESCWGtNfwoE7agPr3v3sqaFjzi2sZj1W3nfR2p2Yeu8Z1gqmB7TvRHn9uFFFWJp"
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

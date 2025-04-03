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
    "5QdM2EsPxKp5ZVW47iWXVo9m2FyhxPguM7DYCgJshwNY6Dnk6WeHYpFkkgM1AjB4vbmfg8HwaLZgPhgyk56Lka2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ReKunaRcJLQz5wUrVVxBb5rwp1xp8ZqiwX6CotXvNvsit9V2r6Lg9orGYHL2L4QusCRZi8LNmMtfLi7c9wKxu3w",
  "key1": "3FvN8oHQpdauFopBb1XSod2L4zpajsMbqV5f2vonR5avDUyr1jGjnXefYarTW7pPRuf6sKeU1XHw3sYiw9TUQNGT",
  "key2": "mSWsjptHoc1brgDTtsbYCWB4cASCaCzEaJZNAHF5xyDZHsHjh9o3ew5mGjqWZFTY7wGtCptoaeEfiUJaX9bFXSa",
  "key3": "5EzkxKujhqyo4ufxSyAfF8Gmdj7ZSZwS4bq85yjU8TzvY58m3ZoA8zganT8xz9TijdaJMUZbqxwLhRoVVmzvP85G",
  "key4": "3rEAW4X9UCjK6pV2o5NGLqiWB2NgfYGRWVaNtEba7MbFZjzyTKXYTAo7JL3NUNsVp7wyyiQr5NDQebHh8rP5pW1g",
  "key5": "5LM5URYj5AFzoNrkYqSFrQxGhHXFikCvWyPxjai45dZUy6pid84AD1xvrcACaqytfENpeZTayoYhQSdYiKbsABta",
  "key6": "5SCdwpdAPEN8eQwvZxmS8Js1FCifwUoXm1pARRQp5gEhQamoZDopUbPhLjmms7V3tSGG7PEKZvaHWT1LWuBwu3KH",
  "key7": "5xzAvLnKp1UV4jQPjiFQAwxfSrVbUHg9uZS6oPGzoNaZdD4Xn5sAqW8cepyEC4qdbwZNQr7RnKkfp9DrQUuSump8",
  "key8": "2ZRzrNizwueWVutvs3NpfZVddeCSGVsiAJ3knenU3MUwGHoiQcANCMQZvRMBL5SwG8qc2omTTFS2SEmSLfixYZon",
  "key9": "2Wf5ejweHygYEEvzimigwHhf25a8xLBZkNgSVjk2CMUASdWsSY7LSXxEzuPbXwvmzAGNoRbc8fnbyUpVs1bJEvZx",
  "key10": "cSLzed41tPh4DfvnxyaSUR33faVwTryVYE3UgZuxLZx6cuNzg6eJkYCKiREfN4E73dB3pcwWdpygzsi8cQBhZ8b",
  "key11": "4fFXchhGzkCbNxD1wKhAz73ccqpznEueU5pNeY9g2xmhWYFPcf6QV7J5ogDksnSAFHj6Ysa6oNqUewvpQYmZeqa1",
  "key12": "iiVDak6Q8ZXQkRBmdSjeSqYivKnT7hj68TWThRS1dutfa1R1aLyZzFpZKMjkaULywZaSLrHsk93b5vUU5fUdFZ9",
  "key13": "45oKLqpHf1oYuhTcXH2xQnVv1YRAvseCopUNyHKFtuY4DVJ5kRMk5B7n1kcREVjYgegTMnXwKR8MVSnyq1P1WLXb",
  "key14": "2Qsi4ZiA9QKss54NoUPZPLc7J6hCZCuRt1TdRmKofQNaHa7yAHz6AxsjdqwRjYNF1cwKf1KRHToWLMPhf1b7kXMo",
  "key15": "5RTpYwE5ixntHaJD6GB2jbMYEDiDs4cMBS1qGnq9zPrZ39qWAf7pNveco9LvHhW2qZ8sjyQZ6my4mXMswtrbFcmJ",
  "key16": "5UJhPotdEwmUqFiH2fxzbCB5bxisfAAQFNCURw7nzuCUfed7o5jcJergR8YjK42uJc67Wwjv2qKkqgi5y6PxVS2G",
  "key17": "9Zu6jKhiqyKk5CcAqFRCYRmpcSxwKBGWWkusMAiStCHYeb9hbDRrzHEKCG1yDkekPwZoF41ukMqqHYkZ7NiK8wh",
  "key18": "zrDaFTvpzxGZ7oa4NGy9k4JVeM1ys87scbWJPeYbiV2LMem9tFtXhdR13A5NiRQ2h1Lrd2hntk4Vrky9FgrgZqk",
  "key19": "3oohyR96Nmraz3dPrHh94T9T4gRauv1EBy2AJfJQDAnhBtnBPwwosG4kakq4SUEFpnL5vnLmyKV87AHtqTk5EGPp",
  "key20": "4pwsDMZ7iNco3gVb61rnJe7mv2CbdT9XXjSfopQ5LdKKjdLug7rkEQhE6xajLWzUUxEWD6tjCL6deYX8AnE9ivmQ",
  "key21": "84yLv4EBCWvawEkZUNJpwidLidXCaMNhuAv1CNuGEpgbTfX45sr3JLooeitZN1dgai6cjx1GwYhUsw1gEpb85R9",
  "key22": "2cFvi6zcwynJZdt3gn54LmpdfsuHfU9SrNLaZ8xhN914ScwNd826x5hNqgx5JKzB7TEwgCMr83QE2a1tjg2avtpQ",
  "key23": "3Wd2cS2YYPK5sG6pQUwVi26JpCuoWocmSAMe9aofJQnC98gpNMrcXdZzgKLNMZamvMAjR8gAcBbTuyzC5Xy5ouf6",
  "key24": "24iUGDQMxt3CYoqwpNttApgnnr87Ebs4B9hnAe1DrPkQuf1xphZTy6cd6JSmBxGV43YmV7f7iAbu5Z5BcT948eej",
  "key25": "4mzGyBbfPURzohUaTdDgSjWsSYwYSytWvPML6Mj8MhBR4qVvVHgaMPi7qwsMUkDthmx6mYfAnKzYrhYRwgpp91ey",
  "key26": "3xGjHikJkTapNqtLZ9x4RNcRWmzH1PeAt6mv7a7GT5gwX4fb3Fj6q79zDbHKqkrzgEzdEmtfPJQ3jetfgJZFCiEy",
  "key27": "2LkVqTs9nC4ahFWrdGmNAJU89YgWpycSao2Pa6aGJjnppHbxJnASdjnFqv37qPTYwd7EZS6ewMUCz8JT5XroS92x",
  "key28": "4KfzYkUJe6Maoij7BSi8TsV9G9Bh8kFVWzmbDEbxHAamiiYnrLpaMywL5wcMcLA5JpL6LEHJGtpd2Ao9rVGiNnBv",
  "key29": "484r8Y7fxudbv8NAgJdjCeM9z9qhMkrvS49dVbdpe17BAxrmW8Ju6tgsFZUcyLqGBHVDrBMNGx6LsLYCT2hMmiuv"
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

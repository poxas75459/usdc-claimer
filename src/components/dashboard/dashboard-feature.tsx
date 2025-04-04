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
    "5xf5LXVHEbxBkHeo3RDZk999W5vHFEb232hWK3SnSd9SY1priemeuXonyBDtQ4nveu2PFsx7DtADTz6wCkWhTaeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExJLfGwp26rdSQsq6Z4tWv6euetv2ZUKxDwq7c7zkaDBjZqauqMG2YVHMzVoSpryo1GYptmKQd9R7VndrMwGbMT",
  "key1": "4o4a2k2CJbtzr8aFQYyk7Tka89JASfKAZUkkKtpSVqn2Dnxya9af9FPVR8HnSGNTknj78kmxeegKfDVJtufb4iHw",
  "key2": "2wVhY9hm93rWBx76ySTr2cvxwzmfStM4QkTWhQLJNwobrLdctn3waEo2Z3HcTpoc4L15yEjkyZFnpdjAGooKAC4S",
  "key3": "2ptRoAXVWBYxNnA2jVrKdC5Q6zjPqteefPdCVvcp2Hk7TZLvhZPGEdpL2cZYKmZnpUD3sLGqgi3hpuP7MQFGnYBN",
  "key4": "yMvdhg9e1AGVjSMDnJMLH53ayvn4GUwCcph4sfCeoCZQXVrpQDKnDnKKvc8aCFkbAkw5o3MTX7rRiRMHWFhtCGA",
  "key5": "5mDk5TguTBRPVtwxfS8pPgvnxWbtY1pz6YhfpxBJ9MG2VKHaPDiBnVPAbkuunW6KK7T15qY3K7F7HFBFJbW7XYAz",
  "key6": "2Wup1eXXyDGrmjdFgZSDukw55Awu7RdHxpsDvs7wP3kLuZvukveF1Z5kzNGmxUsZAfpQjDf18FZftGtLHJL648fk",
  "key7": "3gbAZgPyaAfGzAUf3jHBvMAAUwPSWCKxa9xNm45sP3hVXSUs2ZU4q7gXsyZtF7gmfLk6QAPKKU5i4mV9zMEgpWR1",
  "key8": "5mRugKVAFZVwZrP9RXDeqYPehKySBhnJq8fmuzC8rzR7yjAYwshYWfnE5x1kTTZK8SsNeRYaBymwneJ96yWg3jFS",
  "key9": "2tkP3ZWtw4S7XhjMdM553BsR41hnsFqXADZheHNN9vK635Uiet7PBjeW6LH6BXK8CdxRMh8Z7zVFoXADaJxcpvgP",
  "key10": "ZzviFGgHQjgybZor5Xvo2CGUyHPST6V5KQ38sqYpruJcy9FddV6MhndCGMqic5wPU4nivxvyEVvhECB7sC4AZJ3",
  "key11": "383GASZvJG9MGHwojSevbbcDLjfv9QtFQbojeigKobn6nNCDtcJ15LJh49PJWmDZEzsqU2ZdFroHtLwK5ai93omj",
  "key12": "4nVAJ7kRNQ3jPRh7cb7h94e1oRwp3xZKpqbfD51VzPanmpU89ohUNSW4Cfbrkyt8nUYjzsCteKPs39gcg5h9nX17",
  "key13": "2TLjMTopubNr4vQWyRswCB4dhEqXC8E7dnY2AUrgiqeNnVLFZyoM9YpD3SRJx8VMzMcwf7BsVsM2Wz6CxxbUs1D6",
  "key14": "5qTnwQMLTxVrxU9eo2xytRNUowCBon6h53FUfcM8cxNirrf2t7DactRDGu3x4zNSqbqR5Hocb6RaPbbkcKFMjXni",
  "key15": "2jxGr83A6xZJ4jVmzNg8ByTiqqW4ngWzK9ypvvKNEkorpsRS3w4yZfy3Lu3YvjDA2tPS46dfwip5QFiNKu6YDcMH",
  "key16": "4N7ERiarHtAN4japCUEW1E5iXdgA7wkMh4cLkQsgjGq7Mzb8BswMFMdujLcn26ysRKBVZG269taF23aa6b3bvNZD",
  "key17": "2XrBXwhnHakUFYXm3rrrEUhstJCsqyJA1Avbv4SKYeqd2jiNF6WhqWk1LpxYgm6MLShBv7FgqNtuiQmPS83dpCmY",
  "key18": "2UHeb4wmpntJzBUcDfT9bPYVbFABhve1yuxuxpmeBPbix76U9LTFCe3qEyLc1uJGjwR2fcJrD1Fw3MkS5YMhHrFg",
  "key19": "34nigPH2kMXSLRewNg47LKZtbzh65bR8gFPP21oT5pi2VmL4V6Ms7jeUCKNvVGbEJmjX3a9JFtakG7BZUg1MdTut",
  "key20": "yDPdep5p3Mn11ammnKJTSggvdhTHBeeXfcS5moYBqTTizwezfU3H7jfYyzVPVMBPLodT5RAJAwFKqSwksqjJkkX",
  "key21": "4HuTC9gb1ohGx5K6qDoQCDbmpj1N6pTSwQdFZ7QsNi88TRsjkoSZu3ErbBfxzS98D65r2fYEBZDGn83ucfUbTFgj",
  "key22": "zHi8fBVh999wYkKyY28hFRmu7a3zv9GxQVyKnZBA8oVFpBFRNe4BQ6QMwLQxSqbLF2xp2JEtzoxTvYuqkkR1M9h",
  "key23": "4YSpTCoABKSL7ZB25K428woSaGAzWM5voTCv3rjWppgKjAWR4NsYuxQShzcYcD1V8UapyVougdABWoaAFkrGmQYP",
  "key24": "2mAaBhUWS6RbVSWEWurnVMZymyVVJ9xbf6cdbVvdogrhAb7DVoMs3wHxRaM37CSYhCDfy89AJmGjtL82jv5uvmBF",
  "key25": "5oYC96nCBTV4E5bnKkio6Ue6TovHNrtHR94YjkcQNBx7Y7bBNgH1GWhvjMQyyNJU6L36dnfaM4Hx3t4WfdSrw2RZ",
  "key26": "HR6SBjPszb6vknEMrWnNh8iBCJLQSWfMvfYUVRTcRSzYFLjjB939DB1fABpZuDWr4RiY7WUG6T1A4ZvoosRXrqH",
  "key27": "LhrWQN4qgc5xRRsJYP1Xia5cf9bF2kabrkeishHG47CCZgHquTz8ZAjEFahhoSkmRm4UsN9cLmzut97d972oijH",
  "key28": "2sKyV4YN9yzq2qb8UjvxeRDacdcR4pgbyM7XSkR3LXhY6wC4GnTYgj2fyQgRfTvUVNvv9oW7C3cdSjrGb4YYE2QA",
  "key29": "xzto43EdFuuQz2fzuAwrzJJD3RTrBSZddhyDkLYYWEJVzYaKY1Xpw1ZpbpsNi6BJ8wbKVDK3NNgEPVaZ1pPyThZ",
  "key30": "vLPSgJzaosND6hwYsqABhXdfjEX6W4Zi8imoc7qr69CxEg8S92LTbZnP62yFp5cmcy5GzFgHeUJjGvcjpMjWC52",
  "key31": "5brahrtLfTbcEcuNNMZTSawhQmfW7Xhyos7x6qzdXmZTdpNBx6Q2fJMAxcVtKUG1kw6CbKcUsSXS9QCtWHzHgqe1",
  "key32": "59X6Lv8WYaEbLUVP2YXMFT7CwBFkhG17VhLvRTbCAWMJbEZxDSHi9dpnDxfF9FAKzpSjDvpCE8atYvKkwLjHbkBu"
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

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
    "4nnP35hW2DLJQTSs4FW1AFkLKDBDDMdyU8A2tMH7aayeHzS4i4oNbhMCzXbH325uUARB43ETp6y3HgizjazfAjBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TQdAEUi4qhono8J6KyrxddBWHfLnMwnrpa6QkkkquD6NAtT3p5V3DmBE3va79AL2DW4iqnqNs5bRiZ44jmTJeYu",
  "key1": "581DbzDWMPXaawx5FhpDiwpGKpj6p5M3ywVH1x76M5gjdUzt44FMg4ebyFUubSJaSEtJe64ZXg7iwzLQnKTw4KhF",
  "key2": "2ZqqJwp4qEc3t6Bx6ctgdSy8LiKX2G1QKGRhTtWtnpbYfTYMU3pJc5uG59ddzhN8nZ48h2Qk2zqpoQxk34DRCNNd",
  "key3": "2DpkRfFAHcifKDcHv7VTeB6uoMj6MP8kPnHj5P8fNpM583pGtr6Szyws3B9pHiCNgu88yPzEou9SBYXkFTTWirne",
  "key4": "4ryFfB1gLs2Gk8NTTmQy6rNnyA8WBUY3zCVNTNpp8X6sgnunxBeEm7cGxSMxaz6M4Wq2Ziu5NQZUSXAcMuynkeHy",
  "key5": "2wJzSSwtUHzxBuxijHxJLeUi5Bgpc123pWKXHtLLto7Eu73pgtyaJLmHvCdWTQyA7K9qkzFeb1SC7rxkRmBYrSeh",
  "key6": "2wui57GfkrKH8C8WpQFAANjv7gLpk21aa9zU2NfPmEmtW5SNHctDoxnY1r4sJ6wehynJ1Fm9RCKNESVjpg1Mtfjb",
  "key7": "5YTeAeGLFjvt4NMFzqC7VVCGcYjC7ToaM4pzcoYVBAdMdHuiEHr4xVcuaJ5ww4Muci9R5TRr9Kzi1cpi5h2DQzig",
  "key8": "5kWihTSKyme2VF9pp7rS55ANkM3UhvijBerpjBRiRSQk9d3RcTWEacPUrwdUuXqK7ddhEqNgJ5iuWd4p31nmitP9",
  "key9": "36Y739JBg3SY2CzN23KXWR1HEgGLdwuywhApvmw5BYAmSccDeCnCkofDxmeFghMVRMWXSEmn7FVsDyRbNV1XGbHW",
  "key10": "2Ltbz4t6jbE5xmZ9tbfiAu3QAG5ctqKrGfmnPXbMNmDihxUmmGfGLNmwnKCxaaZsy1UQ6Q4kdAjgHW2TYdVRS4k8",
  "key11": "3HFsWvrfZW7X38Zyc3GrkAWk3SVoaLJvE9X69yUC8rkrBpr3c8DG2zEMb8d1LoiPJq5Z2YofbqRjTup99byPtieH",
  "key12": "2Hn4fTjvRBzwukpH3z2A4VgF85NYowppWU9GeirvoAW7m6Jd2wXEr6yssEUrdvW3hkxAp6WbssjtuEXG4CGQ2RQ7",
  "key13": "4TCn6cQw2XZtshvGS3EVkJ4CbEAuBT4MexTPfHSno9v86FPrnFcoAgvAwW3EuQ9yrf6q2ohLDgmVhH4xDzxn6JXQ",
  "key14": "2k9tYhriF5HL53uL2SwL4sNExYvyMRBsMNhKiHuFtT5eJBmAXdvZinMUXEhapih7M6E8yfdujeAwUTM87KiqwJLG",
  "key15": "3xtEFWnfeizSUPUzci1DRM8Vis7UWrLFRUd9WbeYvZmMJjnhSsfu4JhHPUTehkspLEtjhuydBMfFhfESnx9cSe1p",
  "key16": "7VA29bhtcWNkd1ekPVGN7ChmTmTT9enbJsskCnvP24em5aUzSGFoz4zAhHMGLRYPGjRtEW5XmmV8w5juySc7FH2",
  "key17": "5yCLeKTnpSXsdd9ncfeJ5hVaihGoG9E4A3E5H4rKfcjwBQfY7asjzxC3E7KqK7SCYZV8q1FXxLmyJ34itnZGrpj8",
  "key18": "2u6UteqkiG3VXvNaC4vQyNiwcBNR42zEyRY6DmQaLe1K41fpEEpN9QPfzPbg4X8X7WAKh9zuw4VGq7czDVcgMvkE",
  "key19": "bBCaUjSsfkBcxp29QQoYZHwXgHYRBqgZmkfXe5iFJRoQZrznwG9EpLhZUkZJiarfTwLazWktaxbXQ7Ax6He4DMa",
  "key20": "5BLvYj757Qdac2dpy35mXcQy59ktcEpkxB3HePZ73STnhTr9CFYVW2YQtuv2p88gzWFj8Sa9aDTgY87nj6pfAhh5",
  "key21": "oBMuh9LtfHJTApQ7YyKmWBWTe1cakkP8bs1iQNatiEbjr2x1dCHxLYTvgXCKPfR4x4yCo3dNCvUp9VGmXzWaEze",
  "key22": "516m6BQpJP5jdBjKuhoVHuXUMPMe1wF6WPBXnJFWJQisn4tN2JRABh7oFZDY5sYQYstrynUvjU8cemSxivtft711",
  "key23": "rN2RA9Xuagw97PKEJmosShF4mdhsYqWT3CUA1pCg1DYgQcsPh5PXA2QvyBipVAiumaU13uQ13Gzc5gR6i4YQruj",
  "key24": "qJJmCcxgrLSfa2xtbMjZXbMDQSrbiA6Br1ZYPuqnhM1bYcQ1LCmQjngmEPc5eZHddnZoNnE8E6b3vnqpKkfMqVM",
  "key25": "3SpfEhfAuFEcjPGcuJpYb3fkzFHUcZgH4UyyBHgRNVE75wFvLqjxUa2SVHmh8C8DoQ3egZuL8aMsaPZVkBEPqFdS",
  "key26": "3X2gcqDWGXP6qSK9juMWRWBdL8AMkYz3nmfYv9ms6D2NjZSXrnQQ6VhjH4TMhTix78Z1H7Annb7BmgK81MAgRqho",
  "key27": "3L8Wv4M8jifbDZGbd2RmeqWjnM1HFK5aAEZhzaMuEkw18oKjYo95Me9FvZ73L82qu3opLjJxKYCoPATF1Nygg5MT"
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

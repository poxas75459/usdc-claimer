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
    "XPYm6g7PN4Aug4Bg1uHyAuY5ud7gh8M4HrYQ6tguoNqAFXYFn1xvEAiADQxX9PM36xpb6tFa4RBmDMgs2xvi49d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oUktj68tChHdRdeGi4fkLjGSjvYeUNMzyHxSQv3tjH8DQA77b3ZM6dEeAGz7ZneQewP66Qsw5sA8M8cpguQKpRA",
  "key1": "2UvoTWC35CZpyuPH6yTKwVaNfiGcKxtVQm3Ah9AARDH5fQhTgjzMAKvdt8yjDoJsbp9LKdhxB21oHRHrgqruCFhY",
  "key2": "2ksqvxdDVgztxoozx8jpjwYgPJYTcx6GatJWPSjewutGiLfqns5Jzod7EgxSsSLMV2z2Xm1guo4RVt6JJmTwTUsZ",
  "key3": "3hmToPikSrfNGUR3CYmQy2YJ1Bj36ikchoafuZPHNqvZnRsF8HjLHQ1VGEviJq7rAt34upH6Riadg3DefVV3xjWP",
  "key4": "2KRoqeYDkAC1ksp6qB3EdMMPbi9a6fSus2KNrk2JxRVEi5FTWCr3Y17ehFdMd8vUsWWSwNRqQnSjmxyWscoUxizv",
  "key5": "4B4mNqZbHHSSBamkqF2cCGXPxgov1n4JKxRsS7kEcJ6X7jZqVL2EyYYsCXPvPExCnkGv9pPccvMjFATYrN3eLQvx",
  "key6": "2qeopy64pXFUBYgJ8fHxd72HFVjXnp5FGdLVBX7t5LUr8LFBe8SZE4VELxiVidLYcpdk9q8q4TQYUCti4CJmGNDq",
  "key7": "5e9eCwAg6pa9rpxNH6czYHpCo2RKqMmv23maLAGJAxhU67YiUEVUkqrKqLKa5dVc4Q3kUuPRyJVBqRhK25kLFCmL",
  "key8": "3PhLzyEaCJFVKK2McVXELMvtGxo6AP2b3Fnut1m7eKm63A8pbaQinQgJNybaYbdWty8uA3HCMrxe2QjaLmbHrhpU",
  "key9": "4LtFk3EgETkkDgzs2GNpQm5MfBFcXni3YXJ539Faia4uJBE1NLhrocLmucFLY5M4aZ9qz2EodsrYrRhznx5Fygzt",
  "key10": "urRcRE8utqyztnjQM6SGbK2dcH2DqxjhaDTAYRdtRkPsawYeCkzPGEE6T5NVV96ZKfLaxD7WXGfKckDNscH53Wz",
  "key11": "39yMS6jFjvwzaoHWqwn7y1Q1jnneBJT2fm6r1HkcvKVczSqifFZchzEzNbzr4CDMBr6r68E3vSjzh7konqABWfgj",
  "key12": "3PCaKgFp2St542V7a3MCfDmtjp51Df36HCVArzydcQ1jFY43ChxufeDqEtVoFnnuYt6yHQgT4DRpg43ZYAvh3KYx",
  "key13": "H1735dXAy9dC7Z91msmB7vnBkVCbf2bVvMEmPSfumY6Ts2PRFSkapeefhELS6AnGnoea2ka9JkW9ETZPHS4h4g3",
  "key14": "4yLkKw9V5c6GBTxLKyKr1J5xpLRKt9FT6BXpiBGCvnXZR15oYzTUzVE2jyPW9ofEgdvVeejYk7hmDFVG44FhBAEX",
  "key15": "4qSNZtuhnfuth2uZVbxpkmr5rAbPU1kFmH2EaQHfoMnTCuJfiFhZAK27eZ56SskszYG8Z2JeLq2ipwZzGJFHq676",
  "key16": "3S7J7U1Jqps53XZPLxE1vxxGJGW49ezDSoxgCvc359TEs2vaWpHy7MbrYUSXMMNJn8wynSEdyQygvHTMy1r1fYsL",
  "key17": "5WanL6EoFxu3fJuo1r9cxLZARTEVERh8XTBwd3NYW9EwqJ5pKcWHAW6Xkwq5L6S2iq6ib6fARaf8DCQNWzekM7kX",
  "key18": "4YCcnQfBmBTibZHDZYqRje55ZJdUxuk6BH31RNMhBiAsbnjVmA3jQWsrKbcCY5nUwZT58XUodAyscT9g8MeuyCD3",
  "key19": "3Zn5E9D4fDZTF19vtqckVvN29NKrQKKPKKDDJ6uruu9iEqQyTBgXbC5EQ2EcHYR3ESESVPyTiqZbDGaQDjsQ1i3m",
  "key20": "5ki43UnBbBoZdsAHGJNxGsEFnZVKZS3uo66iQgne2hh7u5Jvq62o6J4k4VNZ2gEamDCqSbYhCK4ravjZASz4b86Z",
  "key21": "NYDJ61iJ55pb4CnQGH1GKrfZFqSkgjZxAJqhREicXC7YUZR4WhSzrQvsWENZL9HLQ6HYgdWALaUShTkb79KfwzY",
  "key22": "U3VQGnJb4Xsr9zUn6fbH188TJ4kPCqVnFEaN5NcMwPpHkbyK3eQFvQ1EKmtbAE2jbYm7BFR85zCDdXBe7PzxnTM",
  "key23": "XGvS39DJrUvFr4eq1cHBMbiHjxXkbd98D5Nda8kzPnBA69aU38GUdi8XBsZxszE4rY8FDoEQdeYc5dbYwwVxoEG",
  "key24": "5NpiPvsvPXb7bqGFvjf67k9GtVz63uYvsri7wmwnRAnYbQs3nacipGHU8eaxNyq7ECqMTTRKwHUPUtn3uj1mg1tD",
  "key25": "Y53UAe32bCdcqMdkiqLUdADscRnWYs8RJ7q6zmAHN5wR3aKc1K7HJ3JKmUQH9U8Be3PQRtaZRtTVpbH7yiPjZQY"
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

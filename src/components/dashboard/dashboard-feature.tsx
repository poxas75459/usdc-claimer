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
    "5Gm8osYzLFbwiqdiDUbK8eLeSXiCTN621UpkoonS5W6VLTPCZN1dagoeMqj5dPXpWms1s3TU375trwMbdFaNZ5Gy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F5XAQ5ihE5eWvUfJ5TM2rpoZzGZ3TfKMbYXPwARihJC64VnHpNeMWjYRDrYcmzNvvwPJGg2eDs9RPhixgseTZjb",
  "key1": "4scKATre19s4KqwPTeykjsUJ1QoGixsh2EmPbtrVcVmpNuDvnhu2HtBuvjoJyVWFuJfswxZZCH9f8VWfB6JTi1Lg",
  "key2": "vAPrXoDzE95JesvUyEy9aVYHUQgt4yiXBUYdCVTRAPXuyX9Da2y7XRH6nT8qY9qR6uGdoLuGbE7HAeUksQwaccT",
  "key3": "21DTYCKbLubWwtfdmHLRLKfzrDh5ZKEEUAgENJsStaoah2fMMkKUppSRjyES9VEeof4tgYEpHRR5nUEjhMbeabJG",
  "key4": "saPoVkUdrpXmfuHzq8ED1tfUbu3v2HbSEtG159GZkMmDPs9mAVqR13HVytW3QPc2Je4fjXed1GTiejkbh7W5pbE",
  "key5": "45NoDX2psRyu3qDEuRHfwhqj3UUfpMFmUZSvbutNKhzqujxwuSoExTk5D7hHznZbnzLmWcLmvVS4sHVnBQb8hR8E",
  "key6": "5BM51Un9udKStFXNAPq8C2XQfpk5TyebFQGdkWVG5dPqe4kpzmrw3VbpyxxgHn9eQJTHYASLeCtN2TfmaDyQNdoY",
  "key7": "64LPM6wmku16wdTMHwLG7xZENWfffMuarZXAMFLksC4cMKgzQEmuFiXWbkhQUnywvgHScGjhnorWSUxP4P8MkVip",
  "key8": "23fwKDnWfssEVviRtzBRcYmeRJmjZBW1AP3UkpX9ebqADmGLwGAVfXwrZXo5pMDSuH6yPEtLTckkzf39xzAYXsha",
  "key9": "4gNaeWkPV2q8Aof7inBmR9n1CLqxG5yhDWrkAe5yVBH9SqCWSqMcXsfBuT82ibWCieN2SLkyeYfgwDMfcXVPvZuF",
  "key10": "id6cHNqnqZFZLccqFGDM1CHrLiViduWvRYeogYaQdJ32NkqvR5UP4Mhof66MCJbYfNGvUnYT1CPTpg6QNjcAvH3",
  "key11": "4rW1XiYuY4uYLMw3kzr5qfYhwJe1rBcX1n8n2r7xDvXixAfpCNeAKCmZinGw2GcYk8Chd3A37QxZF5SUUGEfjgsf",
  "key12": "2hn5DKsWoxLKXvEesy9iG4StfxeKScfoUZ88TaJf3PBFwcZVhk8zGB8j1XYAqqroucEKWkyR4KFxLv8u39Sfm1Ht",
  "key13": "5zCunpqcUw7sFo21WssbYExe6iN621o2kZch4xxEtFrsQCrwz9uNP7VSSw8xjWAXMGDJXXNY4TRr1SEuJgUmfhBZ",
  "key14": "4tnFgBoNeuaXXfMq19gMtPdCQE9J2quwNqLJH1wDY5R2RQf9gyr8rTqCZzxwtwi3m3HmzA6K6vjEjbDLd2vCJ777",
  "key15": "2M2hywjr12C23BSneCi5nd5kCCDx7x8iQgjYHp81e1UgGTJv19wW4VqQnsREZJZ4h9cBxz1ArizELmZiwvHhLqKk",
  "key16": "53ZgGBsc5w5SbQnxbhUFRjqhGeWHok2LjeSR1gSpRSiPc8A8KjLRxX9xsdLnGNttBvZ7gfuNpskcxZoyiovbMym",
  "key17": "4wefbxb1Fg9huNPuqsfAVJXGePGFd9SbsDBv29wPteB7WET6iWipSWNRR4CTKdvYwZa7gCUyLeSUjezTm1eyQ27K",
  "key18": "4gUtuf8krE5ewCpPc5ZAEx4NmvyB4ZfjbxQnRPk4w5GFtPX4tQ5dufsJi65s1WEF1X8fgJ1tbeunA8kE3HC51CxV",
  "key19": "5uKRe26sdPENuZZL7cJuUxiqqYao2wb3XGEcinJSpZzXkVZFWsQ1c4hiUdQM83BTcJa5tCeuPiKJLUiK4Ss1nR9w",
  "key20": "53xbS1mTLbnNtsz5MCwL5hn53WVd41bfdvB7mh8YoW3YHN2PzLspbnD7xYnwG2TsPk2neRWS3nDoDmjZJVfpWB3R",
  "key21": "5PffHGf42dCe4aNrPEy7wNPQwtEF47FS53riR1zneBcAyWVo9fYKMwDTBuud9bGWGxRH6anqqzs4dgL2RBPSjJob",
  "key22": "3X76kWaDHx8ZCCN66hKKNXkaAGuDrRL9XJW84BHSeMbeiWV9og9A5dN4JizTkE1VfaEaUitSEvndA2UbzoUDPWsJ",
  "key23": "5i5BZQr4sChQaTP1Kzr8ENsLo3a8nVrdPRU7pdiJdbwZ3THycb9PDsjsbRhPCwbnJEVg713eWcAo4odrbipHvsD4",
  "key24": "GguCEKcHJ1ij7Vjmsy2DxCu66RwDPv6YbbmbdpsGfwZFDzkWuLiEE4V486vqzcASoGbwiJ38DZo9PwGZ8r3KWK6"
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

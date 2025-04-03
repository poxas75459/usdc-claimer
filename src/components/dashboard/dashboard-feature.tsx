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
    "4yrxPeN2mJ58ZTD4AA9wZR1xmx3sUFYJmnY9Jsn9pvG3tWwgPsAFdAzKHrUZifH4ngETTbU66efumgcU7jwADZNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v8r2koHfM1z5hH3Q1Qgu6GTaDagEctyCWWqcS1JKFwhxaF83dwufjEyAuPsQKnBi4sEG5E17nL6wyCea4SrNmYY",
  "key1": "2zoWarQyAVZVfd2eZvFMbYe6qT7wcfgN413Wj9ecrwrsocjFHDRt2er1eon5z1LAhBMhZXDtnwW5TpUEhCeyvmKo",
  "key2": "TaM18His9yUhvesX9sJqsJiHJh7t7BuJ4CwfwoCbe2u5WhBwsmW2ZPS9fkMbVgX1anZcMRoqenTVRzReiV8Uteh",
  "key3": "5rLaHk74NpUhyypvVf6dnSi5oisa3qseY8RfFtWFVsC4T8ZfMseyfoonZu7NFAByYjMoNMXkH4S22d6ZEerPM31V",
  "key4": "Ca7wEBXy6qxyALjKUX357TFEqJcSvaab74cXfr8Qvjmq4pd2N6B3d1XFH1fvDMZEeBMfXS2JxHDsyzagHCqxyef",
  "key5": "4YS2LcVaRceBWbsdFeu8LBhLrBp8RPZpeBUXQyHBBTiVVyRhHsXaCQnP3aoox9mMRWqxZw9AA83im2FQK8SJma1r",
  "key6": "3f5rv7pUXBYNkzZU6KWSoc7DFQV7sWo81Aa86PG8ADhPPgbf2WBDTg3BGo3T4sUTLuLtKRtFWPRyizKfvQ3VNQwc",
  "key7": "46TrMeiHN8USrfzd1eQABJUSegstEnbtUk2U2hasG9EMEYpsAZgnLJ6QyircB4McstooFhF1wPP1jzeN4JdJRbtr",
  "key8": "3c8xwFPU5wnpPUxU1QFBVMUTJpRu98P3KQSEKbpibjRFLfmGpxYqqDWop7zVjWX7r8Mji3PE3aA7hfkKWck6gVEy",
  "key9": "28WQzNWQkHXWhB9ByyCSFFvXLebeAcMyPBFYijeH2qsypo5xTzM7JVm4kHLNNJfsRHv4rfmMrGoG4YToe976xJ1t",
  "key10": "3GPXzUDBxBSQM5Teu9jA29QyBR3K885nAxecT73G1zJzZnsGzAkT29sspPbP4cBwWAFMUYTLkFhbR6x6fNHoSaaS",
  "key11": "33cZySUKtRHnUJ2rfZN9HtfzWuExoGiCsGn1LMraz7GCyiu9dpZrmfM1VYgzgsZ6JAFnvjRv5Z4k5v9GW7oCMPMf",
  "key12": "5XbBwXuu2tmtp8KUxJQCLJfwPhTKPTSF1ak4SS5zRTF6jWe79PnrEh3XZnreyZDgVJh2qfLDYNacRJbiDNzdApVW",
  "key13": "4xJrYfUXVpMB4BJGYMrtWjoV5cUBryQrgJhetGCUFhVKn16Yr6AtymAi67mGVahRRQ5C5jSLYF92Cuf7s9NpECyg",
  "key14": "2ht4omRajaKUPE5f7n1FMK1cin1qmnhp8qwauGpWYPHSW6XMq46VKUTYWfQ3rzhd8636ZEH3dnq7SGuRxUgvdF8z",
  "key15": "zuykPZJDfUnxmnffEKW1avt6PgaJSzPw8xdE8wj3xt4d2NYvsKAe48nKV9Kbhx1pqCBUSf8qmd679Gy2zSXXi4z",
  "key16": "2Cjj7x8wZ2ivoE7FaELXV5x4qSLsvhr75BnpJwhCr934fKm22mBj2HqvxbHQQPVkSNLi1DkYFy91NgJK5mh6tzBA",
  "key17": "4AQ4nWNWphif4W74jejEWzoidw2gF5U8R7TCju8SSUhuWUfzRhRbVXvinnAVnHEx3vq26T41hgUyRbanqYZ8bhma",
  "key18": "4Vx2GkvDVWoXDbAEvScmqgVqy7oqyNKhZ2UZQsNbp6mjYefeTEDEdvRxUSFjZFGtMYMAeN7kmsQSFxJ7BMWowtA2",
  "key19": "21qCj8YgAnWCbLBXU3cDqnKLwxY42uMJwSCcGqNtdVhBZVey7BSoGKBVFEnCSrjqej33NWXSHzu7foaKRwfq4EKZ",
  "key20": "66pg69wP1E4JWpq7pQnfbwXpMAGTJ6dvVvqRjjUzMbnbk937kgpq6XHH7nGBxQ64gTr3v87gnhb1LjtfcZdpVAMm",
  "key21": "3RJ99J69ifKdA38y61VZwUDVkdBm2qu4mbFE4MCzgf8rQu6jSVjARzq3g4XseWGbN9tqMo9hpsLPjjeSstu86QY9",
  "key22": "CZXYtY5zemoKtCNUeskJovEA23oHMosP5WWTuSQ5fB2QdGYDpYrw6JNAaZAwLUkcgx48UkZKUexAo85kHRFj1mT",
  "key23": "oxhLjX7qsWYy3sMmNYVEUVHRSPWcN61tqjC17qotqqcPEChNoagMmiyZbt8sK7y4ryQm3dmd7bGKUKzc3H76nmt",
  "key24": "4V5GgrZiy7moXkHeHJVPJUaVhCeWLHWKhxgYgD1B17CiBVgqugDfBsVbF7h7VCRQbAMRrpxZ7H6NyUCx7excQSp3",
  "key25": "2f2wNy9inpANKtjrq694Xsn9HV2tXJEF1ewwnx57c1aBdNjLe9u6chM1tuzatgUQZBRszhiQJeNBpTX2DPsQNJES",
  "key26": "5ZCaRoQcn3fDzrSyMQyVCfWD2xnSpn1RtP6MpkuD2F8iV2xF4LDYuheNSSV48HKuE8eWEYAr7KM6cMjrypZ89hmF",
  "key27": "5JJKeSxGLeujHPS2769xSWGB69vQdMGA2jV6cb36atWWWmngZAky7SsaWBZyWZxNUfJjFRz5ikf87bpBUxQ7mLHz",
  "key28": "TCoY5b7yzgiyy64cJrHa9MRTm5Fqz8QWBCktig759oeJqchiPMYuLEgSmzhrUJf1BHqM2GHajMNmwyhnNGG98PP",
  "key29": "5oAj6qkLDCocYqqVPqEhPQPaVGC5yCckybt7PhnM3Q57gEKvU5ncv8JTFCR8zPqG5avCJJftAVPw6nVcZ8xcyG6C",
  "key30": "3dmSy7MBhvjwoNeofk1TSso1aPdN9KE2jdZ8dKac6V1ph9TVuZR1iCYnRdguVgaMDMJm8UDaEmY6dMrAU2WFQVJ6",
  "key31": "4Rid5CbZ4FBfT3pPUMqP5Qd2EmeLPmpz52pSuzZkpA5Wuasf7CDH9wbcGxkWoTpo8ezv9PMuxvmYqQo9yHPMo4rE"
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

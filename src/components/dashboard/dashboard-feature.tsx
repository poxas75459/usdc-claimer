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
    "4HkK3xzf9D6zjNsM1vm6tXHzST2d4a7HTn4Qgat2owhKdR1m93Suaxjx1NmZYA7dpkDwW3miu3BsFRqT16hcDFY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Ph9bmnjmhnVXcfqnRNb1bMPFWCdwumEMDBg6tqwFTLLfE72uXaHZd5CeiG9VdqkjCLTp47xdvDz5uYB4gJ5Wqt",
  "key1": "51TvKTbcZf5fm9NpSEuopHa8Hevvi9YR1aGy9zpCFydW6tBDpJ4cSgq6KuHSzgkuZ2Gjj1nRH1i3tCybcYcbYcXk",
  "key2": "2G2y578B6bJnqq6ieLkhrPiyMhAHC6QK8SEhniJf57w9sFnSKjpyFxt3NrhhewKLP6smdYMfVXAC9To1p5o2d1XD",
  "key3": "4aDkP9fxsn6vFmJBBHC2WGAFyqiQkUT5QDhkoust5aVR9vxyYNUak73eQZmzUaWFYWKCCBCq2aEi46QzHc1CQhKb",
  "key4": "3a1na4TK8YhKiYnhxcFCy4E2s9YN8U4wMyQkVN6JwgcHP9FN6qKu3LGEiAJn6k6YG7hGTL412UsJ5KSjf1U8q8vv",
  "key5": "61sGxb3CTarGabpCx7KrRfFvdLSzomV3sPPnwUZJ9Sp89N76tLAMwS7XX28aDgK9img7RqW24sKjGP4BjeY2iB1q",
  "key6": "3N5vyrhZsLbNUDgRyCRkVQkWsd3JF8bZfP6DdGuh44U47zVutA7epBveWMiV7pHptA3VpJ4pJiy4U3EDa2iqnPfb",
  "key7": "45cDRkDBxcEHWz5XHG5hNysCw7tKteLQdKfNsG9gmzrjFUUbMdjx8ZaFNf4cubFuhAVyytpFNNwn5gzcbD3DheeM",
  "key8": "XfuQAv3TG6ah47XiRMsKHZDRvK6TzsFLQ61YuqkYa7eJ5PP3usVewxeM8nM7YQmtWU4w6frWxHUoSofgs1mydEm",
  "key9": "4iGZV8n7w5uM6F3bMPxYerQUWEgeJwWveWCyPR6Zc1tWn9puQHMmnaK16LLsbc9PDioN6R9QUYUiv6F9gAvXHHfd",
  "key10": "42BKCdf2EddZuofVNwXw6SdNnj265BHJzAfTmkZoGcyUR18u2qfBQP8X8A2NEpTi1ZwCsRrEGoFQSaeNg4iaWR41",
  "key11": "42pfkNb1ugGShCAUZMzQfj6wqHE8ividMDUpZtWzvHnyj548gnGmLhfkZhhxqnnANNPBap9J1QP8Y7XBhUkJxZ2h",
  "key12": "JshN6dxQVmi2zNajeKhf1mRTsEUT6DjC9dTmW26gYsoT6qqq4taBhbPoTQeMajjYgMJmDG5fFkyB2NuWMoat1nx",
  "key13": "3SVEfFkJmGKF43CxqxsUJtU63sRxeXuCQyKuBydRAgeBVvpxN3ujDmTicBcqiicNqKr9bzyPjff8fzoBwEsChjy3",
  "key14": "2dR2WvPNRzYSS1rbwD8Hfy8VzvZtP9sY5cJZNotMYm7sch5Yk4fDEbRBqyRDG4nXpemjEkRweYtAnd7EepMVQyB6",
  "key15": "4f2FddBJ24FMo7MT5P7JeYeYktbPv9DSgBQy5q8bx3bvzM3fHAHCKkf4NaqFo2y28RaRyM7A9wwziaQDFHxs7XSv",
  "key16": "6GCo75SgxB3PYLLCspgqLBLe22S7cY4qT9R9LP11mKytrHTztELH2YvkHJs6bLco7ZFPaeQQ66nCbM2i7x2AFSE",
  "key17": "44V1XAsGQmiecPxeMghrUroYMKaRdDBaBL5skxTXZrAyLkseZUevmQvErB8Z4ymXaQDzkyDnVCh2qaM8RXLa3CQv",
  "key18": "4DoWMsnSyhwwaQeFTTf5iFRytBD2aHmnrRaynVPg85DftpL8wzsuRYedp7DWcMrkQaWAEtCkHNAr75Ar8K2LDEeD",
  "key19": "5ZBLUhrih5Y36Y6FE6WVABjqoVQsW76VrDV2MhdWqLFAsDoZX6L8M5eoWsJMN8KURC62pwBZgEmK39XGbgm9F91q",
  "key20": "9P28Wmd1mVD4rbnYwWHEYE2Nm3dtjteZzBjGg9NooiE55xqqVzuiiYd3Hz7EFCSBfn9zgz7A6iheipGv3fFRwAr",
  "key21": "2DGK2fvFWtyAk3by2GRYUiVLP1wBxFPNm12mb4ArH3izoACyoByvs7MromJYwrPD6v7Cef3fqA5y1eDzAGHNL42x",
  "key22": "2QQU7YyVaFJAnLFfYj9Kx2v9UYsvxuq1q7VoJ1nAHMWSsneMXGehHvgNdjJSMzcE4RT6Lz4VNShqfXuJdAv9Mq5s",
  "key23": "5Ebads7ao7emN8mAQE4rkCRq8m2u3U6rxX7JrV6Q5Fe1Hr9Hqb8geXt8Noi6zHVL1J5uCSMWsbwyDLEEDjnVj6Vk",
  "key24": "23115JaR3b3y34m9zfjwRhChXjG6kQ3qz1p8eiPKxrWDSuGAkf981Ls1epBYsPkP5Kvs1rUj1tshrU4y5RvoDsCs",
  "key25": "4NEKoPYaHmoyLeH1PQwyJFHh6vtEaGUcucympRJccxLXon3JtPpAx8etaQ2irxEnXENeYQjFNNYhCX1f5zhopifh",
  "key26": "58hybUw45846QKKd2UJa6EAeuo7PTreqi47MPYvfpEsL8bCahvUQRfaMNQGqDoviK9KLWzpYsVpAHGbs6BMSzvUU"
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

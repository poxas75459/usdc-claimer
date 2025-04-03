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
    "edHiFZTDDsTKeGZQTUrPWeWAHFjLqDYPsu3UTb9W7E8YS9NtgwvsmrLbaoLvejY98uanEfQLL4Z9MKRNvmRDUvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BKoViB4SxCu86MNfZ3vzLeUsXdeKUUMUKfDEMYEf7v8KeaigTU2qg87WLUzG5CqZ7UoszSgAVdmJCQVC5FDgq8v",
  "key1": "5rnNP6LgeNpwcvhpNtM3DzpYe3aPCRLgUC56n9mESxeCirvAogzuE73YjL23K1RgA1c9rWedWbftKucor5CRS8zv",
  "key2": "2GNQFqS5SXz5Ei7vad5AsqxDC4UXcPg3oCUg8CiYmjdnYk4pkUWig6PAmNoK6EvsddyGpCJtD4PTdhmmKNj4cHvM",
  "key3": "5YeYUgmLZo9hQJYUaXcKZGoDqyZNxAF5gmV2fid5H8RT7SDPFW5GGfnA12uYWqDkSAwD8oPUPmZdT8G6gc4Zi8VF",
  "key4": "66AninknTo7MCZjCvXLk2eBaAyGnXL9g4QfzxnUgsyEn81rijpp8hAB9z2FYK82HPiBRuAMsty67BCxsWNp1B7Xp",
  "key5": "aKLfdANKxfeYw5ZZZbn4HyUFtwMBdBfYjny2Y6JiFzKtXGGgC4AxKYqYscWMyc1KYDEkzbj5K78DufHn8FE2Ytq",
  "key6": "2Lhueti19ga7gUZYDQRBJjGFUVJcepCBGDzXcXU8Y1pPGgorEGHa7YevL3LMh2o47iEJWrfhwWY2DhsjThADbCDN",
  "key7": "GQyRsZBWysZkwB2MeDifuWAc9yNtpkHoi1CXDzVWX7V3TodirJw7cQ87zHuSsNv9N8sqBFkWjvJ6CSP9BDDgvC2",
  "key8": "5QQDtZLjJbPHj8i9udLDGbH7k7AQp23KeYxtGq29tkNMoVP9t2fcKGEBbk3WUx6DjLNYvuDBVktSViR8hQEchiqZ",
  "key9": "jXervSQYDsgQXEiZQoHDZ7QugCPP393XzVjGeb3r1D7GEE3jAs8pXNyk9tFKr2PmZHoyfSQkDYqSUndqbPMWwJW",
  "key10": "5cR9Zh5hkkCWLqE9pbNyr3y8V7AWfH9VgLG6qp16QBUPLpnfHKZr8b1vpL1XTqc6BqskxR2JqZe6C53D4jU3KgsK",
  "key11": "3M9EWp6Wrq8M55G5TCM3bY666yHT3EJYtfHzDikxM8Yb33HzRmEsiAGMj6SCuMU7yC4QaNqda9o1fKq472hBcaxF",
  "key12": "3Dvng3aCFpq3xjxpn7wb778gfMVBwqcbwSYUDNQsfDTTee3mMf6xQRXDQyGJUTYcQw68kMH1KQ6KL9uEQ2mrXB2S",
  "key13": "5yuTdykTEfNdk796U26y9exbPvr9WsrnwxcW1Gcx4WXbAC82ptfo5obpzbwBVR5GccwnGXZyNwncg1vtkP9yZcM2",
  "key14": "5wwknUdGwgkqw6RHYTrUVViDUYWiujqx9ZhZ1aoPKPJtNsZYj6GSLCgMwuMH4f1uD36soqJ1MHpKuB5UzKwpszm1",
  "key15": "4b5EFbSTA6vf4kpjD2RsECkEnJmd2hS4iKBG4miCyJHX3dvaE2gvgqFNs8awaVgzkmPMjsRGRv3tkqRwLqMXGYmM",
  "key16": "2ChK5qVjGn7NRCVXtnC9i7xqTKgmA429BDJHWGEbL5W9wrJDxdt3ZRxAeDdFPk21MaUZUpmvvf7JfPdRKHaQAcFs",
  "key17": "MUtqQCtairyRXKza2gLJMgwz4YK6yvcUT7yJVjBznvzfjHRiMvxBfSJprWAxJdZpfHD6NbHJFWRvSgovX2AonPg",
  "key18": "5vJNc6euB65QBr4UEemU9myhrMBuGyHYpbQ1vogBH8mNbtwLvN8pLKK7xq5fYQeDE9XzFcgiCSSwBmyEtk7hSKjN",
  "key19": "a1qW3MExbB3fgbBcnhY9GipG96G2ex5JUF556Gjd11VgRurAf84UpNvoMxGBuuqYX6MygUwcyvq4n7BXHFMJ7GW",
  "key20": "eERtbc3WfmJo8YbCy7vJaXBQNyAWVkT8DhK5Sky8MoguGyF6WtbtkFYZNDbmmHpBjn3rxrFErcTZe7GQhaqPorv",
  "key21": "5653RH9tqCiWGFmeRBk4qJCwCNLFKYeLkxsNJuW6MXebonxbLNz5uyEniQY4ws3D25953hycGpAtiffzu3AYuby6",
  "key22": "2rJmuGXvDXj81HMWT19KMMQiRQ9gRfacyAo8VQazDMVbWXEYv2mkc4s9H7hR3tjXTPLCYRbDrc432w6tBVXcwABx",
  "key23": "3ZM6hqMuSbMqegjp3itpeBvqnwcHJ5SqHVgCBETPnSVP97FvDjFM1gnXdLubGGiPNXAWEL2TdUGc136LsY1vRSyR",
  "key24": "3GjMi5Ra9fGhE6oCDqFBPTAjxEVwSqYrAGYEgH6j1aDGuEhiHyo6rCffcmNp1wbhEhQV7WupKJnD8Ctg8KQEL1KM"
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

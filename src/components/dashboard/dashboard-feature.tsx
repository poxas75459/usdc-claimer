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
    "2kK9b1o4bv9nBuQ3NJ73LUrbwtf8r5pe2Zau4Yb5YRyV3ypvkLtas8T3cwXgwWxEeBoSAWfL328Ukp77k4JQreyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EBmRjqFdHTggmicbAXe2c46RDDWstExX7ZxL9hgvKakXu2ePa35K5NdU6PJoEvSo9Ht95WQ2GVDFnUqcER11Xry",
  "key1": "4NRiVuDX1efyjDWv572uEQjKCoGjadsG9ztTDiKVKaw24agzyhsp13su1KHaxnPvG9U98W85fUspSBRXJNGKDPzb",
  "key2": "2Q6G5PSALumsXGjkeZnp9qKcW2HLf8JoZpXvyaEbtyihYLtx5nbcpn5FiGuMZMnzDHETm8RKq7ce1q3JcAy1Sgpx",
  "key3": "hA9AK3RwTvku42TuKyAj3upMZs42oDhhF4mMq7MGM5kJuTbRD6sQ5fauTno5qbbPBnULRR51dcbBjXrAQ2JA4Uq",
  "key4": "48UHqg1YAYRuNGywxQ4Pcoy4VjG6mxHbdracLaCXhJtKQPidnN5brG2nXnyyPSSmwEEG5Ze7T4ta7LMGuHRd7M8h",
  "key5": "5kBxpYuRnazkWpSyVnKVJrmoep28RXjkLcXc3Eev3EVE213GoWGzFjBJijqTjLmYRpz1434XH3ytPY2EgziYiWLL",
  "key6": "7NJaN9LSnZcx39zieV6QyYGHUghXsTcpN9wuZbjXMYimWfz5ytvkjCU5tdNeZrAaDeBCe6sGc4BFatVfWZFwnZc",
  "key7": "4Qk6wtzgd7hJWJbXLDH7A2tv9f1x8kx7Jhpj3QauHVAptVUuRbdmwqsBsyoaaF3diUrmfU7ET9JZ5cqGmDLbRR9o",
  "key8": "2Ni2ZfaLehNwNGgsGFekZtEtznHxg2FMVuahiH9cHpcGG5myesSU9zZfufnJ4NPQpZT4DzaVVhFCCGgqNJUpEywV",
  "key9": "59k1gF1wdsNCGUwEnYPAjr8Dmp457sPu12SzgfvFo73yiEpq8F7P6pdgCA7w6zpi85vG7gfBpSyUJqbThZBjJPYZ",
  "key10": "5Q6WHDm65q78nw3FbHucUeKoyCxi9WBq4DS3wSLzTfsNSa87phiWYdinYKE6masG4SgGPDtvkeBjeLHPpRkwUUEF",
  "key11": "2S5W9SkTW1yfcXU6EwdNqxWR836cME61kCiytD6yCnEVwZ66B69nayDVWbs3ANqxmLsJMsGmc1PPszQt8HYFADLA",
  "key12": "5Y2HbmVCjU6WD7cfv9WHoYHYMgv9r9SSn8PsNLJT8UrtJfdAGAHH1KmfuPWgkqVhqeefhwtKxdzG1VAaM62rxtbk",
  "key13": "3q5Epgmn3RE7KcGJpDVcXgfsow12Tbo81GPgsy3nfPMAgghtUDK9JJpiti1D48fbQsFr9ikr5DndYxupk42Uycm",
  "key14": "9DcEM64XEFnGm1CQoevvD1mD6NrE8DQhhWQQUEGNgtELaMWFuj1mRscxJ84WpyJNWt4uy7zbVh6HqYsoP9KDTE1",
  "key15": "mnmUs99VsDDDJrH849T9WiH3ebrRq2zHyaVsJM4qLNHq8MjZ3oex8YDX8y8xKDy329xu4roMnWk8hBZhb8Z3A5c",
  "key16": "39k8DsgWyNsHQv1GuxfLnvHfhjv7KgCSoViPf5ATvVAKfa56vSKVvSELvoshz7xDY9sek4cgQ5yUNAyfPParoAyt",
  "key17": "5jJaDokC4sRJNuMmwWFwipbb29m3eJuFdYnse7rsSdRE3MLziSo7ZjtxSPszTmQceRtysgNcspD4ykccKGcN1Xua",
  "key18": "4KWuhT3VN8Aq92YUwKkiPq6MLfdBDx6Kxof6UZFvjqVUJbQrSKNtErX2C5wMsQkejEgzQMGgxojxErVbw1zp4uMo",
  "key19": "4VPTKwdvHhtxR4yq42Wyqgp1NZ26VNjNheTdMQmuwrFmjQ4RA4t5Q1yq2WCBtWRyyuSJGzGMVeUJNABFaR67u5xE",
  "key20": "4efmCdhdvQ1W4XhzM1Hspo6xBaL7q9jxm3GNkiNz7SqgQFgFxXxxYZPCtay9zEWSt49qWkR1osfUJm3Z3zVs3b2Z",
  "key21": "2ruLMzRUvkx8FwYoZBZSVbRBPpH535c4DQRc9s2LpzkRBWFHYLqHpZRPdu5TDLrtXMpd1U7zVWiYXKG33CtwTioX",
  "key22": "5KRiaukQobhoYGjrHER6gqJCYWBYX9Rqek2SxZapsPaj2VCA11a9dW3KRVXEmoj3GLrEtTx8vaUpfpYLE8Mzjs4z",
  "key23": "5xM6anUzEcR9y5DJyCyk4yKF2Bk3jdbGvumKQ2xxYxzDYUmBxcjN7rq6McLhJkCraKaimHNd7wwdemq2jnbGG2ht",
  "key24": "QBXQinzspS3EmyzS71SQEaLdbHqhReqWkYwJ8n9S2dDSqPF3b9VUdFBjkqHxPkK8CHEUffTsCcHcxfDK8JFoksY"
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

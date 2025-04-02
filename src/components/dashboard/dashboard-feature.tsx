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
    "3BETbxvjadag7tvhtDEcc2mFE9bSPv7bZt5xo4j2ddbQJsyAWBFwFReCSXKSjLbqLktRybRQmV6RMHx7NHej7W4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32dQrJGnfDWA7ReykqnKLUFqtcnT5G6HgEvqXkPoCCKkTu6Ht4TuyJTCGjNxTF4fSQmrCfkPXkgek4NfRTBB1DWx",
  "key1": "5ce5o4BLR8MEoC4UoUG2oo7QkqjQyaicc8At4e7qjvBDzMPz344VZvJc1JfXhMZB7iM8gDvMZUTr7rmjWVxJkBWx",
  "key2": "2xTYxpTtRSDgqEiZuBPcDyfoxU9BRkCDP6h3qNejDX4TvYEUyM73fw3KUoTEzeHGCYNh1PoeGMXqDzBDLimfw6JD",
  "key3": "5cwdXWM6Kth8Av971yC6Kx5CnXTNfw6j4wCfWiKz5eBsFB6TvBFdeQaWL9tnM3LjrnNbzJ8oVZtv6nYjyoFP3Sdz",
  "key4": "2XzHDRitk7uZSuhy1y2n8S82PLUcY9bGhAvXsSERk8eKL5Y7weFYh5jsC4yu9r7zqAibfWxmshw5PSZhFX4w7drK",
  "key5": "5h5RkxdfWoHrKaaJoLBzkeBWTPMKMaCoYqe7k57vfRa3J2pv4AxUWnkSFhE4HhqvMxncRe8AVvXienLnRx7J6WBP",
  "key6": "2CvZK3WPjdc4rRRC1HxAUXAyAcvnRCKw6DF8NXRvM7ZteWDH38bCSbpLJdQgNRkDZCgH26TcKkjWmyt8tRgwwuNf",
  "key7": "2F6h3AWvedCkMunCGFtmCZaref9m22e9TFnLedzYyMiRKWXP6se76AKrJhtQ4rTP4gaih6GDk8QkyUNi9Zkm3fyo",
  "key8": "3ccZcmkuLqe9vF5BD5Xhn5nkCYduzAjRXNd2EKeSGarfVGPNSzipymmzsRHYH7F9Z4w7RizVZCrWPPujodwoKPb1",
  "key9": "38gV3rTjkdbZcvirnZ71KijvZ8MYfjePFQ4c8Y74VKbogw5NWjymcvCD2FimDQCNFoLfFqGJ3cJv3wUk8L8rPrsM",
  "key10": "2H8NZsJM1L8KZMePhNvcKy7qAa8rTjauK7B8ZL2f1na7FsckPABdRgph4V6SzpuxP6N7y5ZWbAedwGFoLWSBhh23",
  "key11": "R7xPaFuSMZwKvF5dpdNWcoCaFKas8CTqSxTJBVVXYoBu4oBGJ5RpcidM4FU4VAiWFZ574Vb68tQNqzZX1jC3ePT",
  "key12": "btpsHFFQY7U9xTsM9cSSb69fY1KTdBFSvxyR9S7uTydnHbRV9Z3n7pTtc58XwU1KiHR1NMn8Ygkqyw4HWgWo8hp",
  "key13": "3KNSwkuFa9jJTtcCzRdHPWBZcUbEj9gcjJfJ4RQEZBh9gorMn2Ad8mRVmY6ZpUGMZ9KgVATYyM5ri46mV1jBgFRf",
  "key14": "5BVeceUdHcwMnR96ATFrvbdnH2PKCYeKSSqiUqWtT9NhWAUTtDvvdyY8p25wEAoynryFPQJfMksfZhqnoTHAsFNm",
  "key15": "5KmnHFNRDU1Tywh3HED5q9J4cADpxXyo6JTAkwBB72rRrBXqApJ9Q5V6mjvV5NpRu4KNB4e7swx1EP4EszELJVbG",
  "key16": "5yMXnLQUW6hVpFrMgZcTTt37iAdEAZS9yGf515CnDb5L5G8qicmG7trvEgj6F6ev827ZCPp7tUSHVQb4pW2E5Dj9",
  "key17": "BUCTeHQpnPh6NSFYEHrSQo1Apw7j55LpLspHBHQKUJSxJJwZTeqr6QGCL8cznswKLbjQuU9ioHWGGe2Ee9QYJJ4",
  "key18": "5g7SxZYtUBScbWjmiUqceonKU7wis2M1CVopwM2oG1NnrbTTGbYM69YCjCtfyp1T96amePfjMNkqr6wjeGDSLKAB",
  "key19": "3jCmZGtei7UhpCYqEfAVXzyQ6jWxgxoNNaQKsXk4CrSe59BmsRasvWgpffhodhviRS7jF7nfscFEUfxBF6TNAeBY",
  "key20": "2Mw4MTBTNzw9rfp8a5RsrfucjChV1TLC17M97JrQwV4JDTuo3JY5txWddDWXuT6f2BcfnuoCBFRGhZH45fnmoDwe",
  "key21": "u2dFdWhG8MLTdVFibbYRBJm89ZXzbBUFvdDKC4s4v6ebKVjEFTsQJNkUZjGZtaWQrnhWi9K9LgJkFeYdBz6krry",
  "key22": "5Rp8HhGxtgYBybzbMnEEiFi1GpTRC77rahkUDZQd2GjabYPzoKBrnEaWz3KwStC4T93JSNmVw9zPmj4kmtknEmui",
  "key23": "3hx8aEW2GPYowFc4eMHriYR6VtWTfUjjvKHBTuhsFnhwYfsfbHwCZMnJdQ7RtFmHEsvdUXsGCzd7pW2ocMym7zvC",
  "key24": "4MKRLzD2qV98CAGntBHMAm3GJuCfLk2gxqKFE5QP4ecW2y26rwKTSp3gCzJvfMK5L1R7cPvPtXyPDm1ZXsLJNs3v"
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

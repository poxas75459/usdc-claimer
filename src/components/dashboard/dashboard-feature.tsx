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
    "3vx7tRJG1HS7UPbbPHSP7R7sJtyTQJmS72Wxd3HBmCSvs2gLEHirzdMR6a9nn3N2me48p27SRK1ApHy84vvKLWTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42EAMDMmKoAFSsYKCMmFbdMUXJKyi39zKRMiwLx8kfPiYB7hsQsdMo5NJ4KKwtysXc42mEHG95yGv9UEVHu9D7rL",
  "key1": "2LMdthXdTJV254tMqaSiV2jQ4Mt3dbNqQAyKNXm9ameKZ7JpPEj8AJHPsaUuUrJCWpZNk2QK5ZTfKqw13F339j99",
  "key2": "2zcxjdEEiPWQsvBZTmwKqka2PDfd3rARsAsxsEBHrtTm8g4Yh61u6bZVyZr7hnLdBW4BCmsDK4vsFScc3SNsyuYw",
  "key3": "SW41xcyx8WHjbpKfFrUyFY2bJTtbNM4GBsNdQ89eMhS1h1tqYVbmKhB15MD5yhSsih5gPEXSWvrmjhmApYKp21M",
  "key4": "5XcQm5ZWUKMrCeLoY4CLHDT2aCDEjgVJtp37au5og3sAC7gLo64Q2Cws6YnPXMk2z7K937ELCfPG97fUod5VmpYg",
  "key5": "5S2Ce7TXNdigRx5zkWPK61aqq9oFAsHb5rR3q8fvihCd5e8ebQ35HGJdQAPb84uoBEeukbi8PToNRQwr1Xb9AM6K",
  "key6": "5SVAGsHefft4h623VRSv4AXB3apDG8Qnd58GbgZYZi1qLgmBLH8epwmZNYeioRGHJ2vhDByMdogxjMotdQbGReu2",
  "key7": "3Zq8m351smJ5qjkbiiM8sswrtYXaTaDkXAG5VwGRtP54ycT5H3nq2aAmBMAsiw9byzsz1yS926cEEEKFqTShhTte",
  "key8": "393HeHYgxgZ6rUkn6u3JHkYpcw5cAFsgEvTkw9sGZDnm8wGimtrJmgZyFZoyWmBsg2eW5m9nUaUUFr8E7NDXMu9h",
  "key9": "2G3JEKth6tLofc4ovJPu971CuVao6uNRaJ9N1kjFMLbqJbUstvSjJ2hkmetpgQPasU7nd9cAnDpwj8NuTQKr2kgY",
  "key10": "2e6gntLsejAFrUBY8MznFGw5iHfLTmC5nBxHUn3c52extvEKMSfiNXbgz18fT4CU6PsaEraVS7eSTAf5CENqukeF",
  "key11": "voVFhDkdeVtf92ZNDJMDdVWFpX2kaBEkX9b33oPyVnVB3JmjoePFszQFuqiow61vtcv22ZQyFtJ35GM9JgJXRCC",
  "key12": "42ntMwUptxsUkW67pVrB2xykvmLYGYwXPWpvLkQ8qXw293qPHm9KKE8frk5vYhBxemVQuq1EjLtGuUzotk4PY6nX",
  "key13": "4TM4fHezThSqnrqa8rT2YSa6Qhhkm5hzZohJSqNvMXTZUdQ5LKC9cj6YyCp7nFG1AimXqt5JxGLzQ4Fh44RESYrS",
  "key14": "5T7G4jCJfu6ZBTgQfCrbjrrEdQKzpo12WM2FuivUzEY4fui3KoiQWDgiSfCmBZgxvLemxwdPnZqk4dDvsbGnMVi2",
  "key15": "3JbBgArLrHnuQFjybjYHAtnReB19YunXZbGpT7qNJGuTuEHnzfK46txpdS5WpqLfMZNA1n5LEmZvw5eC8BjVq9v6",
  "key16": "2ABS3jr6fSbbsDTnu5zntLjdE1ctTWYdsdvohMgz5UWUdtkpzjpe1z5QbUga8VCKf7GgYnBM3398TUbEyqquNQMS",
  "key17": "4ehPfvoeERoTjzqoH9ZCo3fFbQpTuxTphxdc3uaejj5p78CLBvCywjrkPAJbn5yh7gkRP9s4FT6pBUUNttxkMwyV",
  "key18": "4vvVTBwX3ZVuVPyM1bjvYkzj3fXpnV9BvvwdnquRgB1iGxtr6CgzCEiLzQFUnmPbvqYRt8QsqRDw1XzwhwrPjJYR",
  "key19": "dAnvKayBsopFHZxuJsbbkPsWyUFEEHQKKbFfTFi56fE75BBioHA1B9UNqrdjYVFzeFRb2hne2PDLt9bFUEkkM2z",
  "key20": "JTfmmf8ar9jmcZ9jprhTa45gkNwTHRfVi9m8jDEmB3YqhYjc3tVMg5PTofb42M7EiVhg4vWimz7PcUMtVXCE4uq",
  "key21": "VjDTLUSo4xMdZWwnJWTEomL8u329rRxzc3HkpA3naJbe15RjFFdVo9kyzdL48sZrPXe7YmpVBYzkDPRmaSiScUb",
  "key22": "2ckLEqjizyv14qfUYh7qRoWPpKhqeVYqAz9j8CTHPq7m7cFQ4ALPGsqF5og9LVwDuoTmTbKLEvqnijz5jYapHqKW",
  "key23": "4ugF9BaE5cpnZays1xqqNoKHfcK3Q34pgdc4SrBBaVKsA2y89cXxdzpEamo7ocsm3BLHubkG4E5shkWQQTqe1zuQ",
  "key24": "5BqSfd9QQaMRfd3yPvKiFAJ9cdGw7CgmtrDBAiFdBY5nEAQqcNMM5cZmcxRjnNTxkrySXnGrnGAGsSHAsiXTyjQh",
  "key25": "24qNJJqgtGcimq2pXYdyTTAbZ8s3VgXHQS7CfTBwFHDMsk5P7xA7MtVYybuueCQY8LS5SsZ9eB31tey3hQic9GJN",
  "key26": "5nVQBePsq8GH2rdXxAC43dCzfJNb3BFSt3cD7Pv8GFT8KRZ9EbJMnyXiq1Atu6QV4whEHqcXbfEkHKtFsWMapUDL",
  "key27": "451wFnDQmmGXjLqXHC4z76sYuXQJjrKVf1cY85gxosthVSzaaZRAHwW3znhckUYFjEEsbzpPKoohnKHt9g9rfNQC",
  "key28": "zBTx2GUV2tuAvmvKJBsphXu9HZRurJcvQZutindbBdnocTFDaRBCoW3HuMkM3H2Y35QExRuPaWvygzPC9JQfFUo",
  "key29": "NsiiUExYnD7RwXvEc258o462QEtYX6y511WrtJaM9E8yUPRB11uRejrcQGwEec3K9ECXat3x2Tx6S1DD1SKgvHQ",
  "key30": "2xvwUcssAJK5a2F24VwsFpufGVYFYcxZFbFXwgv3ckTzgpF5aJytDzUBUqBbfJkxfjgUti8wV2f5Vmf2kwh6MKAf",
  "key31": "3PXVnNGQ1Qgj1QnnoZcnjqRSXY9KMCpsBUdnUSAK1Xzb4qCFmJkNixfL6ig9MCmaH8X4kcvBJCbe6p1nEfdy4wrq"
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

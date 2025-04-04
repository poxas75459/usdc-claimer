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
    "3hdx5gA4HYXfbYSXj4yti6ScmigF455wVgWDc42M24VgusQFDr8UoS6ZPad2G5vu3DDFC9iDMWYcwzprxMeXMSn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J8r6soEGXnMenL66ypRZ159fZH9N2Gc8H1yVjdhCeRnw1WesRYQ6SFj4YXGKEoVcnmMQyPoQ8EVPMqkT4vH1G4n",
  "key1": "2yTDv6gdne6gxwPWhvSaeZVhFRYXCwijKdNUX1DCA8vVSpn8mHeqpv91CZLjuaedCjMZwB38pQafarYubrz2Q2z",
  "key2": "4Wrv4jrKxij6T5EA7gJN9fdNHWh3nN17jr3dFegoU1ujgSbzjMBFebkW4wcSSq9wT4A7VG5HsyBJq4YafTWwQs5E",
  "key3": "2mecUtypTvnDca5F5vUBZkaVSTbU2MQ58DeZU7chcdV53XmxmRJd1rk43nwCM9B8DCHqY6mRcTwPcxWgLqGzcYFt",
  "key4": "4JqU9vJnm4mvpxnffEDTE17PJK6S1daSVBnE5zzKrzJ1tgpNTpBVHDSDK6pxLGqhr7f6wd4EeeKU4j6AiwCeSGLk",
  "key5": "3PHxj4JE8K4Pd1cYbDPbJXDciuBfszfwCX7fkKbQ5utfUE3KnCZe5gVpPDtXcYuxqghmNpkp7riS7PXZuk2jXtqL",
  "key6": "ZqCJfqgzHrpSetYFDh2MTepXDn4Ha7ZK4y15QmatNNwEWaqzGhXmUzo3enwAC3ejtkpPertyVgJCcBsbfH5SLVD",
  "key7": "4bS97aCgdoE4FH3Q67GmFD9Q6dzbVNe3rhmXipnX32PHVwLQ1nLtgVwvVeuiqu5yWp5TUEzej5EpdxMPgnb5FiSH",
  "key8": "5YvSReTygUmMJ2m9qqA7bPhKwsNQPdFF7AqirHNq7Ajzne238FmXUWpYJfVbeiRw8gbJTrtN3UubWQWpp7Kqnndd",
  "key9": "2kio6CsNiQ6TDUVWte2za4D4NdHEPziysuWLKC2rTfQyoVmWf8qS4evFwffWijzko5biGeh9s1tqN5q6TpWedmqZ",
  "key10": "GjTkuhtCG21aKXMWmCKQvgEAvjWLyV6yF6NaZxkyUbd4JuroEUAsdaoJ1QizfhF3xLSY41kKDM3otFQrZDLpWHh",
  "key11": "5vYDjVc5F6viULAgzojrX2Evn2qj35SGuk8WDQ1vVe8nQ3yQeucJcfMpVJAihn5LkLfncQQTQsZv4W3zeeAAG83d",
  "key12": "2ekJvFR6BBrerj3rsqG2wSZSdisUxVQpaw4ZWG8DhbgZxci6WT3U2cdSpDrFnQ9LhLMf6PieD8s1kquTy3Azgxcv",
  "key13": "4WtX763wCDC4detsEDqXFTFq1nX6nhnUsDjYKtHppLoj1pmodXA576Bbg743cJ6NUKYaJ1WDB3YwVGzQAbCKzzMj",
  "key14": "4ytoGy7572GUPRjcRVExsh3A5UtW6ErKPL1T4Wvd8KEF7bDsj4n39neLdi9dtc8nE9LNM51SCsvt1qnvJLk4napZ",
  "key15": "4XgWDEeF1npK9FSepjP7Ay6F6xv5867GG7hZiTLkXrNA5eg5PqL8jAzwvDUYmEwndR4cUJrZJGSnuBDFcUmvVRd",
  "key16": "3WmR9WgjooyvKt6cNVgP1p5yE2QC5zuzfEJFbVwb9UrDmYJYMbs4rMC3qh2pEbo5Lh3Ee2iHgKduexHQphd49FBs",
  "key17": "knKYZbexpYJ1nYvUHEXja6BnKufa7AxNLSPnjpEKh3DM8XmkbFMnmRe2ejRoAehyD1TukwVSxn89ebqUHs36SKV",
  "key18": "2YCjRrAiUzwt4fkwfrcL9gaeqFQxQn75FAP7ov6RwZz24zKCheNW4z34Yzbc3RVwtHqey9duSabMKzGnvXRyVDrr",
  "key19": "4TFpN1E2iD3cBozpmXHqjMkTJQEzdrXsPcfaahPt3MhrXF5eTZveMo2NUzHJUYqkv4uuJwSTs2v1Atpp2p8W3oqW",
  "key20": "BdUEoeA68DeXyYrDRizBQSjKiyaKhRYNKqD4WmD1b234e6QKp6AYocXVHtTKP4x5rDBEwNQjdoCTZW5ANm2iMZn",
  "key21": "399kVZjAzqCLAcqh4JGcGcqjKGyZG58KMxafySGdqWAJktpCYqkKBBNzSokn1kpP3nfYbkgfmNQba2DK6MngZxoq",
  "key22": "3dSqK7GjswVjWD2eWEEkHcJKKdqjjozWLsUEUpDWxm3s88iHTWcuVzkYuhk6cieM3rQbBJppY8qxAukVUuoGwy59",
  "key23": "4bgWru9KGmfJpyVH4bwbt5YxEQBHghonqYmbfT8ReQFwQPW8gk1fFSTGrV72QU5QuWmpq74i1qNa6NFxp9cCfshK",
  "key24": "3ps6fDKYdhGVcLZwKKfz1KBLVKh9MfCDAqCsFFVsokFTn7698d6eJYkMYLV5JJASJiwxQzy5PYYQdiXfsrp1wmxK",
  "key25": "NMy5mMhuKTQi8EPWrNX4f8dPzkgNZdstjZ83dYYRUabQ5dL8tbnCWokdDhpGQdQipvfekzDwu19reLRus5TFjwc",
  "key26": "5oBSsGq3ooqTEpNV5tPARdcXeJp1cMC84LYMuAHpAEBk6kymvx8dNG1GwcUfv8ZwoKHYwq4mMinq7bqmoTkMGwK8",
  "key27": "pLNyZHHzjdJBJVCm6coG4xJyAXQqdCq8YcZpNsfZtUAVptMVSAuExBiMw5edeK4tycgA3f85qCoY1Cg9LQuaooZ",
  "key28": "2aXhh5xLiLaf77Jopxrnz61xvuGUB5x5wr8AhyBMViiTSZbmgvfy32aZCZD6csEYJHHk4CvVHJibhQnR2PLEgG3f",
  "key29": "3NTPyn5ue7WcAXhRjRy287Pr8XRbc7fgC2WtCeYp6Uo4rNtgLqQFYRq6gidZpcyu6GmSHW5F1THrnwdZdQGt8v7G",
  "key30": "4uEtaqLntYwv9cc4KaP2zUdwFKtHHrvTP5kMAsgF4FgrCZPBVX3psbPUuC2Ynz6FcLeTAYuVRncZKrQccMTWm4RB",
  "key31": "5bYgS6sayvZHgTEYdtbaYRVFGrNmjxyGxbKHwfBrd9sFjY2c9zF8oWF7VzY4GYG6aTQDo16auFyyUtF4HJ3yNKrd",
  "key32": "5Dx8P8Td6rGHMUbZV6hYBunDA1Cjb1zob2miCGxcZQ1dLXUX8xKQJFVWm4X5FYbrD9Xfe2s3ysj3DE45EpaTZ8Pe",
  "key33": "3DkeBanyssbQFkY9HAAeVdiSSiefUmDQsS5agbHTH95Ly5hPoQ9enRKsAE2rH34DWcopJoy1tXu8b9w8CBzToHFu",
  "key34": "5toEJrk8wEcAyaPpH1gvn23j4YNjw7eqh7Jnw889hJ2R5aGtX5kMSg1VKYbTaYw283TBGHQMyT4W1T9qh8PQV3BD",
  "key35": "5kDFHDopB9vR8yY7idRm6XpjWJxxeW6oJqi36VwM6U8eBNsrMbJuxszzt2KSeXu1Keb8xBhCYm3cNkj88wWicduz",
  "key36": "gwNp7W1cUHN5RuJyh7fhCKA7mq2HNBDii8CPJu1t9ecx1WsYdC56KD4NevZ4J1ywEX8SvS4igtS5kTuQWXS2Qix",
  "key37": "5NeVc5kLe2NVbvrq7jHm2jUPqXypCC32vNY8HRxzeSzZH7TzcaP3Kq9kxbPbvJWCUyYSrUiyaGGpTmgTJGz8xZo6",
  "key38": "VfczXntbiHumzNPryNKiiomq5ecm7H27G89rW42wyGAxWCRc8L2J8RbreoTUap7YVwse8JXhA2dSg8eoY4UzGxi",
  "key39": "2MMHNMBkZrYCsYvpTPB9BxYmCcgU9iTdwvwH3xyrPiPNV9huiGNJWUmoFK2whytajT1KckzecCWTxb5PHnXvVfMq",
  "key40": "24GRtzZn7DcUuRQm66iC49vnLms7WWNP8WgciD2gPFoCzE5DLRXNGAwSmoXWqPDwdVt6wuSNf79QoLFyFqSuBkzE",
  "key41": "znPc5v1G7jTyW1RgaKM2oFVPHRacBPdidwtd3iYQa1L6dj4bNnVKsPxBzieKmceAsVU7oiUduqC56wEJ9MjWcWz",
  "key42": "531Xv7XZxQfys1ucn3ysmEUHyUkcx7Fsj2XpbtQp4rhvdfhkueyLzZQf2eSPXdm1sJuhUAK8NjCyCTHA7FHygC2f",
  "key43": "5rVHdDeNn3vVWnDibjG9yyPwiivLTjytuansTqqkQQVFsrWQFEvuEmA3FW7HB3i6ZWrihNa6LxNuMsqBs29w5pm3"
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

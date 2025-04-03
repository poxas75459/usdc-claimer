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
    "2JD6RFbowdADRyorzuFjNuodJPftYrdXimpoUh9HQ1dqAQkzVKEqbwmDRFmKAXLXyJMEBYmvU3PeWsGHViJGsCH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MTpKz6zVHe89NWtMQHxMNwbShDYFrJig3Js4nkSFqN3NjdDbo7NKL3wZ3J8GpVhScrnVXjqKAsKYG661iYPTPt1",
  "key1": "4tRkShF6R2k9JZgySV4qPJoupB7GDWEPPtcDfbeLjUdunF1bZehwe9v2pqVbsGFPTVA9z8KZi5jQ5isw2ABnZ4Da",
  "key2": "2NWUnJf55TiwNUUsaGzX5E1qqvFaKqWLnYg5qUPxeA8qLxb5H9qKiE7qrM733CdxAkDeDfAvuXTtqYydYmQgBpkQ",
  "key3": "5aGVVwHLvZSo84KqKPnirZKKbZiRxgiqZ1rew5MUTpstBJaDnDUBmsTGkVTCorz4V83JrE6QLTP7vfRXH1BoT4h3",
  "key4": "2DrhD2wmqxJKA8fy6QVLJUo1EDVBe9DRTzTN84Dx46iVsiK4SQeTBSoeCnKZXkeReDBNradFgQsCFqH3Smtgozz1",
  "key5": "8AnLMdFvLjxsVhtkRhnDhZ8e2wEjJeEuYU89esTwm6rpEzGKeJpkeBrgF6CnHyBWBeKfQrr1YAbidf5vaarfZ6v",
  "key6": "3TYYg48yHhTHrUHjMA6rJFormMf3uMA4qDwmbXe1iK22GGsxHQ3BNkeMWBKcP7ZgscnjVBHXMZCgoHWt2v5H8ixg",
  "key7": "5qvFPbg7zCVYfJu5RRrt9VoedWVySC6J6iPjxyLG74kwUkJmx8rZXrSFvnumHbwR9AC1gYdw3r2ht3Hv84HGvdpv",
  "key8": "2R8iixNZon2DPs46adRYztJ8rUaP1LTgZ1NQu87HRJUe8VuoWTooHp7uuQYVXiKeG8sNFf7qye3QnnkxJGQj3bUW",
  "key9": "CPvURSFoaCprGgZbo7kYZYURQ3LDZe12uPcjSKSrs5fcjUhwJLY5sn17KRGrDPXjeKq6x3D3kBm2bYbezHcKVYu",
  "key10": "2paCMk2Tz7QC7aDroJTXbgj2ducgRBa1CDYdsSVERmdZFQV9GsYE3ncwCYy9dZ9wg8vuuxpzUWEqZL5H99fXS8eP",
  "key11": "3hRXqtDjJrWdB1EcueMXjq1wa2fM2jtM1DdNtNEgPsGiVZTD9P6f2rqUGEB1aXLxQz2c3XabYsrwNGvjXRK33qtD",
  "key12": "3Cn3j3avXsfLf2KnxnuaNLWiMVzZ9sMokzBsaQpCWbBDGXEhkprWkKSpvtgBBiKuKwKQQwv3noFwTSSRQtHuV1jq",
  "key13": "47jk3DvNyevjy1cyRuGa2roGqBkKWy8UpoD8UBdidx1RHnNwetWY5FhRcrwcQX8inBcvp6RMqiLKNiMNAiCcAsoU",
  "key14": "Y4ZuNCeWtWgS48tjmW3L4SEY5W3mMG4pZSx498Y8cPR4hSwaHsJ3irvfKACYAEeNFwygus1ffPni1refngQDHLJ",
  "key15": "59bzr5rrzv8xoRDyDZm3fevyuqfRi9S9dLq75qAR3F5jJFWC1CMD5Zu5CQXbcupgnaYtNYUKMJLo4Aq6DQv7FCaK",
  "key16": "4GNr66m1a8FjybFAFAFqFGBrXtwYJm2GQkSnBEnX5aTGLPURjfgnStHzJdzx7dbSQdpu5R2RR2Vkbbjqm1H1RJq1",
  "key17": "2dKoDdnLGn1pmrGMgV88C43wQy1dXBcvPSiEq8EjFQr2zkaejX9Eum86RDrqx6aC9R8ACGenMuNMrySoex9QsERS",
  "key18": "4RSUq1XkCfB7aMk3WS2haRKTczkjSMrDAPnNWQQ3nQCe2it4Lcf7mcQXH35WiN5uzf18o63PozXzRjaSkjG4yvkg",
  "key19": "wd1H5SxaaV6zQrerVs7vkcZCLU9HnNkw6BLG4ebQYoYgAsEqgiSfzCHE1hZSp85JdbRR6he8JJUULJFr45GFZoU",
  "key20": "33yGAP4kVxjFBUb2atc7VpGaCzd2i2vaPR1zLx2pSwtqYXPFHbVRTtdDiejGwMDEu6TPF4W2cSwkbn3nBhi71B3D",
  "key21": "36zQ8iw8Va4TXUynmdF5BY6Gc37jCeULeMKCoDAqsb1LgXbiVFZNdRKdNgPjLFFjJ1Y9EiQDQLELE5h6zU3DVuNe",
  "key22": "3k1jrULH8YHw3uvoLPBJoxBwv6QDSjweNyeXqucBggVGEmWTTNEwd4YvHhmvsaf6dgupVZu5kFhqhFnBvYhwFk4a",
  "key23": "3HqgGK8XxfYYrW8eejcDUmD4knvhstpBgmLWuie8NWqdPnxmvMgkwiiGMtP8kriszeD8kUrScHAPjCjFri6qwZve",
  "key24": "LxMALimt1JuPBqWSyfnHMoufyh6RgY96CW4NTf2NDftYRGLuo8bVDhPioW6MMtSavUtqxuFpm19PuwGpFdnZbr1",
  "key25": "3iMad6TA9WiXcTAtqA7sHA5h4TMD8bSx92rSxu1PpSebN2P1S3xV3Jk7xwNRSBRRW9H6xz2ihbi48UDALATqkzYe",
  "key26": "9TqbikxH6HHHhFtXFrvsnG8BVDxfCWqibH7wJEdxwuknkgX1racygZ5rFDbapbp7ikEcQyzRTuMVFmoGu3ehQtN",
  "key27": "5W4sQDszYEEWQ51TGQSNBGx1QLuXWPdfS1ozdSk5mhxv9oAprjrRJKvhQ65zhdvuD62na51oihXVjbTFZZUHc4qM",
  "key28": "5Y5aZxYSTWfWmgbVEVm1asBsta6tQrbkYxQBCnLzdNwMwseBEdUvZgYayB2Yyz1o6GpqopCZM6NzB8qA4SGSwBqJ",
  "key29": "s56rsDuMTMuEmYPxnD1Zf1UvtGVgrAkXBkWp2yiNtjDvA9a615iZReP8Xwn41rHPawuMwn7DzgdPvDTXVBxXrvb",
  "key30": "2QK9xvJQioWVwzjfKkva8VQ72ZVQ9veeDPG8HDM1Rs3WpFEvPEMdkcLnLHpZZNYFzCaCSLkUHyHsszn8WzNZurFk",
  "key31": "22WamujsS1KMSeE3diDcHbmqWfvvoS1ESXrrHosGYJrmgqBZnXxpCr9hB58gdEBKUbofWXMeSMVQCN8sqksMuF71",
  "key32": "56yP2xKhemW9KrnyoNYvHZm9bqEXoPKspC7BnNS6hLiDmFeRLrYnwuA35L8WFVbpWsVwy2ZXAj9nC6uUNv4V6Rxw",
  "key33": "3znMU7LgWS3gUggnfrkhafWqQWbdcUFixutjoZN8sM5AAWAwEue1ZEMaZPhqTzQou3yq3zyZCBdNLrb6GDYcERJN",
  "key34": "4CGg5v3j5f2JTfT89sYbd4uJcS9yka1YEhy12uBrhuteCKQbwyNy6YrxN4T1gh9MVGDvQvTeURjSBrbN4KPH1ndJ"
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

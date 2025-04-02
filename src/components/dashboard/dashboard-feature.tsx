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
    "2ciwxAnth9yvuPdz7GX4w82c4JzuKJGztnP4iDbgXUcJnAfSnhAh2JWCHpLZd5KbBpS4NMofXdsLLT3P3KXLeC4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QyLYoAm1svgv7sS7yiFZCKh1HkzzvfUfFpBAAAJt5fLPSSEZERsdgAXNssETK6cndfBdhmRFFtr6jJjYbmwaJfV",
  "key1": "4qsNezaVc1MdsnzBCQ2iTSQK1wLowz9oXc3kXTnw4CWooYRwtL9uz8SD7CZBQtFSqGCejVZjC5Uj3PkvEGawEyBe",
  "key2": "4neqQcHecrSTWC5u3VfNJmAbVtBd2yX4NWe95QNZfvXpXMgMja1mtVcpeoKnViRFQmsKJis6ACARKLUXT4UQVm26",
  "key3": "6FJYSkvi4PNsPJH46c8joF34Aary5SvGfY7SspBdBHAnkc5gx8MVtFiCVXbrcmfZ6XfxVHqxxqTaoL7CEtegwWp",
  "key4": "BJcYj1Z65L369Ws7QQp9gF3e9WfBvytC9BdRkthdugGweA54zqjXVJYXdY8khn9i3tMqvW6CSvXqYPYRgMuLtnm",
  "key5": "5qng9cH6WcugjpXY1PnbEDvFRwTUXGBhAnMpwVbuuHJFgzsf6jrcjSMCvxKodmm8C4rEmYjrpLku9QqnpuA52En5",
  "key6": "2u6ZhJVcB79vkCqVDc6DE6Mu4Uwz1h6hefRWhTbsQqfj9Xp3zbpqb4cS2ANRGHkYQgg8zhTdD5BeezNxJETM6Bq3",
  "key7": "XQZMN2S2fEsRztXM1YMtAxpnsgDnuESFrUtpAuoBu3TiskEzmi11B3iPyF6Neqm8gkkuQfCYAG9QsjiNfWFrWdc",
  "key8": "4aAiZSN8ZV7ytYcRrYu61wNshbMJ3QDdY59JK1hbJECWjhvPw4QgHyWAgHQHdq4E4HEaWh2WtUeWQgYKrLDVC8KJ",
  "key9": "213P4NHsEq381bq3HQpa74snJHjPAg5pBNzpEZpkrSTtxjoaxwNDJ1p3vaUAKRYwcCmgmKN1cEsE9S5v8LTP7nu6",
  "key10": "5RhWymFqWQwmvzNHVpR57jWVZLk1pwXjxwDtrMvqLzXjSYu96R4RVVc5V4rZFS5km2tArBMLCi94y6j1Wrv7L94b",
  "key11": "32KVXNNnkJ2nbXT4egGKo3zW9qmE9axku7upUfgAHrfAFm2vKU3xG9QmhD6FHaZGsjGQyYKZ6pCwQGgeNEu7Huvk",
  "key12": "2gyADAMjdD8h8KS1Y7eLGs53C43QtEdaT8rLWuV7DYQ4GBtCx8ufz3RXrx4zzfwXvoVDY2F1wFi3vnj8toiuYaHY",
  "key13": "2vrBc1DWV14zGBKFxWE6jPfTmvtqQrt8WYTgXCQK5Tznd9KiwRFPHsW3vAVRzFAvoro84UCbh3aGCMDFfGKpnyc1",
  "key14": "jqHtydGP1fTzPgTEwYC7SieGanrrorGEqSXH3W4b8EigGMAjjwJaoEqNxmEJRyH4vqrhd35nTkFuPRgDFtxbt5x",
  "key15": "4EHCjKjk4idr9e517z6GNhw1zw66daRkwEJ7j5DKt8f9GrmbpPAaHqiBq9mGDgCTe6Pm7eoNT2GUeqggwUaMpFQ5",
  "key16": "2NZWWkK7KHXxnneTGFyzM3yYKM4U3wb4kgbB5yt9R99fhAnBBXfcRrCd8Kwy7Xa2aFieaBFQkTGzcu8sFL51vp8e",
  "key17": "2QBCiAhC18PUKdFemhu87E6VTDYBRLzmXdYhGLdsKSh9kCBNLTK3qRUAniYZCHNFC5783Y2pcS2ogn7xj3YGjCjv",
  "key18": "UjV9PmvBEaKTtLe9Fam9KHLuqU9KfRnT5EzpD8cHrT5zaeGmcLPfGJyjssCGwfzKuVfmaDGepPao9zeCVsc4c45",
  "key19": "5Vbentfujiz68Lf6R8T9F6956vdd4gbke1GwdKBaqwugVeXNebvAYmLtGWfYykbWHh9fXgQ1XRQfUVE4AUzsvfmk",
  "key20": "5ciMqiYJEdjTdwi9WAa6Bc7Cjw9jrRv1n6CoK5zQJ6oKmiXaiAzRSkEGEt6nXtZ2p6nfKc2CsJJXyPo7CrgRgHF2",
  "key21": "3KvEmMVyALxGYYXMsDCq8L45yPbUYXgSUp5QiytwaxMgp5nXdgJLMj7kXegPcdjRaYh5tS2PAjZFF1hvxJnHqmio",
  "key22": "4VKsnAaf3uu39re57LqTEbUv3dqNpyCMPsAqPG8FHceN5DxJF5Xd83u3Hq4uUk73G2eJ9E36pZYhgwMvEyZcwbUF",
  "key23": "3fRB5AYkW1T1MFkm166zZCSKiz1KH97FX19mcgZVXiG7YV1KpmiYVDdoN3AFQbbNU436Z1WbxEB5WR2A2Vbha1Gg",
  "key24": "5wBb79TL3sUC3XLeKqVqKZLBjeeznsmoijCaqS5x9bmfx4VAdMq69W6Kqe2qMNQSbNYMhxkMLWJTqxZprUXb9gKb",
  "key25": "MLRLhzrKNSFrwPR42KUZKqpb1JZiEzGJ9eAdGBpxVV4rGe9EG9HhVyi4NoCsySCcQW1XDKMkxWf4L1QuEKc3pz8",
  "key26": "mCht6wzhwpZiZ5xSRL9FgKxKJeBKNVndiyGgLZK9y7c5uw5PDgwM6jytyXMXxRaBNcP5qYp4wD7zDAzqCnrahTa",
  "key27": "dqWUvmirSij12ScTfJ8ivSnvVYwydJyXe5VmvPyhqR1ac16KXdRwCPR4sY4FCGZ2QZhoJ66AJuvCdKX3W66UvXA",
  "key28": "3uFeRzcCrKarA4AbWYb3zfshivnWeHYQg6TKQ3Hk2kF2eYZqzrHMk8LzeGxn8e1P8Yxr2otaka8AvLRfXgxEhy1x"
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

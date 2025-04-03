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
    "124m8nUvQdgSXwaMVicyN9EFH88Hf4xi4NpqFAnQzFJgfn95aVPJ6F5sErMvU8ERxq8Gk5U3dwnGqNSWS6GUEq1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i877x3oLjte6gvm1TkrXSNpzn9G6rB6ahF9fQA4TRVbMr91AEGP6tSrvRqBcWQRiys1nCwbpYQB8zRWa3Lg3tjz",
  "key1": "3t8ZEabWDY5HMfWF93sW1dYZ5GqMKPmmcmVmqnE2aXppaWuS27D1EvsWvm32BieTJjKkmUxyJVfHVckdWtmGKfdF",
  "key2": "5oTvM7Bh9N35qr98oPsbekgryue4E32rztgFHwKoYZeYdqxv4XBYmzvNSqysDEw6qCx9jAUEFCPZgaogcs4TgWHD",
  "key3": "4uhy6FxSgEd8yHartAbCWeejnJpZHYWB37BGSbSnwvjcgromK7S1FeRiACuSpb13wk7WxQ4B3B941VywkhwdFA4r",
  "key4": "2wMv3BX9LkEfJnLWV7uC1kS3yDHK2ikFT4WnhGFgGL8a45xy6Yuo36a4s4S18fMuAzCzXiuDA3CpMsteJZDd9eGt",
  "key5": "4YzXLLbj4SnZ8a9X6QiVqTSXqMoPcpV54gXDwHXxCpfbXocK44bRxJ82GFBweneVQjcAyBSCmzZkVquAVWBc8Nao",
  "key6": "4EWUfZ4B6dFxj6z9XX3xoFdwqNZMwMKQkmp4roySJ2Z4ovP69oUh7iYreWxMKMnww9csuRfGCFUfwycd3RPxGCXh",
  "key7": "3AC3YWxbxhEgi5KcSRoQp6NkSznP79qAcx2z6f9FeT7uACeA1CEevMszancrNfDFv1kb1Ee5bGEVUP41Qs3yWFZo",
  "key8": "2A7ACsCTvARTKvkxLx9Ee6vqJwdPCAk9MZo6kBN9KM2HqqeSFfKTb2vA1WsXoQTGYVBaHR4zvERmNKdkVeYBQNA2",
  "key9": "59MdMaa52ruUbkQdKyJfFAW6YtjcnHMMs3syCiz7eCeAmcK7eCJCJ9915a4dBpzbfEKvVKHWYqynQTBaQbqtnq3P",
  "key10": "5Amb6wFTaH2bgeWzNSy4fg8iAQYbXE5K7PyA8miUPwtNhx4rLu4zDoTHTgGCRatVf8RrsLqZQmRZ2CuRp8nhSoqT",
  "key11": "5kEU5jAzXCKxJmpyxFxVeVejQpPF7Ag6g6qsFk6h4doekTtYBfgRWC7SZTPy4erxXRvucThjjYY8aai9tFjyQBdj",
  "key12": "5LaPtncAEKFgEyacrJ64SeJdg1G1fnveYRkvqPnKMHECbRSsvZYqQBGVXYUwkac1zT6RiRrTBGzydTHAc3Y48mdB",
  "key13": "62KserBYdp42C8ZKKNGqGEJ83nwjiBjGTKGzCTNX2RBhtWASuYeuckWatcRfScdeKVYrmoUNYBnqcWwAAZD84dLH",
  "key14": "5jem6FtCpSCuPZVFFMzncT594yFcD8x1xB92mK8o9keEugHzVXvDfnYiQ2FASiovGFoP59eTs5EH7TB1NpLKiFzg",
  "key15": "23pkc26ejQWFnTTaKqKhBGfiJmBE6b6M3e74U4XiNq9JKFBQ6x7Nynr5FJoDejPUNX57tTHWc61KHp3gKuUAkqEm",
  "key16": "4oTyhmvSWDKYXNBb15GjMtswEeDEvkgJAp7j2xnTpqLotSoYHXKkXp8Fnhmq7zd56fpBYJBRLAnx6xdBe64AEGY8",
  "key17": "62GSivkgRfCPCVjyzpAqMa4M3qTCxPcDYkKshhdaYRCTZQAZe29VUaTkLxxnSXziwuLRVLhMdwx7TKnDN9HY1RnU",
  "key18": "NBV5NZoceRhXSKDgZSViNhbk8328cNjQKAXbKnQbTdamBX9StdBn2vJm3iuANrj5u9XYMYSNqUANxXkv7f3oQrX",
  "key19": "4ydRAF3Ht8tnBHPuwtFYn6oSb5H4YforTSqRcQCuE7oTCmvJPF5vReUz2Z9BJ2Xg8YG4LWo5KiFugifyPjGBnAGV",
  "key20": "4SMazMwTzyzRWphRrMaQo7E5ViAEBNLLire1yr3zWt9j7dJVsuRypGJ6ZSMXEtBM5Em7yyK2TiBqRsB32zWiPn8v",
  "key21": "4vVbf7kAzcAjyZL8vhqcM3usWJgzTLHUtgZxRYSeJGHRMxxK1RyXj6nzH63TNtYodtY56hTUQgaahy6dU8VhKQpL",
  "key22": "4uqXwsBf69ugL5ThLbxG1s9arTtpWRNRx8Q1jTYswkLsHJUFtVWMZjjAMEn3eQ9Xp22HYgErQgSX3L9TFS2UVakR",
  "key23": "3cHU8mbaDseS587qNJy7bdTNWbMQhR7q7tkbfE8R8VD2CKzzaqbNhBm8R31n4bkqMut3p9KDnf58YizD8EGcA2Ui",
  "key24": "56EvN2r85fJmCEnxsru5qbjZWokvSw4tM6xJcvp2PPb27QHprApKb4RQeB5czefE2ymsAbtRgqj2RsWkaqH59fxs",
  "key25": "5vY1RBnuGdm7o4AJ6zu5XrscLT1RmivTkgACb7dgLQx6cFKGQfA9hbXMd36aZTZCxEebUMet4iiVvzG988oWdmEV",
  "key26": "3eYCV2SMnfhX6RS3jn9AkzMN9w7YLbKvpeBHWoKtHsSNyG4iQ716siNHmoRrQnDGjYv17ZtXokdkkYvVR2nDFmqa",
  "key27": "3sBWBg7a67BXkaWyMcBUHXEZKnoiZw8MYVVSVGhAd3uYh9Vqot2SiF8yVhpwY8aaQr2mgWktjPyxhrT4YLdcwwmu",
  "key28": "3iGJaa4qZMMRqYmtsBt5QzZUZqrmMWxyjzqZxBYTNWpkqTNNg3KuhTJmrtMLLAMpcfvKPEYFqRZUxcoAraqk6nkY",
  "key29": "25ZRyEWwiCdyLqbioKiKphPpdi3avccADJXuGMPogYpc1SJomdDDPSyAMKx8K5quhFYCziBX1CU34b2iJiCjupQF",
  "key30": "5ZBatvtgYRgzGrNt6ABFj85obBVSa4vQRRAgcdyxrEqXZ4X43pJrK4UFD1cUrcFyWMeuWzZQnNon9PEW3rUKnSr4",
  "key31": "zV1UYjW7NHDegLfYeg9wVEhtyNv3dmfLcr3QwxC7EDQoK5LmtbZtFYEwJ5Am1NP57ouApLREVMsyrXJ6DLpgoHp",
  "key32": "3YWtPCYjGWw6NrDyqumZkagWoqyYHXfgJBbECfSFW5koxZuKALHexApNyh8D4UqbTDQxpfK5sdEESpXmLSeukjkF",
  "key33": "UvVu9HCdd2V1GuWm56VrTkZYr8cP1YCyKE15ixhsFHNnnuKkz8aUbHX2gJkUtcV4UKUQoJvths456nx7ghX1EKi",
  "key34": "U6mxjN2j4QMa1jevJoWdxxp3MYBwvreEKiDCGroJge6wRG9BrvhDBXvdqBueFcfYcPwkZCCmh8LhDsa4cyFBxtQ",
  "key35": "ZKqTsQ4MY9K2xTNR1J9gNdaQQaKJgHRo8b2vSVyoatnttKpvgiCmfUsREXL2ANoFUczvgqBnYFvTxKMgg5zhWS6",
  "key36": "3Pd2Ufe9rRCnK5gvtEy9ycHvTMJKG8spKvJGxf32db4BhUZhSNsnNBWYE3vRqzasvUkHmvV9DwoBaniC8pYohe9P",
  "key37": "2XAT6NisZTtwkfd8TJ9mj5gVUEA18HtvVu4f2QowuMd1bCju86khFCu9VTDxd8fcQXTeemqQrYKfpjonvD1PVjrq",
  "key38": "Ca4Q38anhRhj6AiMSyaYF9pQjg5LynTWGh3jsi4c46vu2JGJV3fhJ38UDCSkB7fxyZXEDMEGDC3vxt4fAsXUYe6",
  "key39": "5rLMzavfh8Fe1Cd4MeWKHmexM1eaEj1RVKjyRaFW8DGNFqUYVjn7UXWqWWjTWkmDv1xKg7oosj6DhJLkDMdmwEDk",
  "key40": "WAYg3e5GmprsuWG8TE1S1GKahP7PksAL24LwwNWWUukESkbD2Nr1sYiqB1fv84bQ5RDsGRjK4jngb1Ja8iVKV7V",
  "key41": "4AfrPdTwC5YkNAiPWj8h5Wi3Q9q1joxT5NmRGnu9mRmRvNip5Qo49mE6N2NByjQxS4CZHFVWT5T3w7tDQQdtnHyM",
  "key42": "3oJvy8fWSwG81CrktPLDfjDmVSoFr7FB7qdpkdG1YsXWBfxGqoMQEfPGnVSPQwRF5yF9Rak2waZBHU3hBdTAqpg5",
  "key43": "3Vq96tZNigrfpg5tG3pt23KChRpcx2pyZKEcAqHYzozxKaqtGTX2PY7N9mS44gBstwMFTfA7v9fLh85NaB4Yo7KW",
  "key44": "2mj2DP2V35dSTSg9LzW6uDwLFhSaa8ZpEZRCM6RThbXQc5mzgS2dmbrpBRDeCNnsWeozykB2AurD6ZASFXQR6KNQ",
  "key45": "2PTexjVoWTdyEGgXTVi5esSp1U9E4pDCVnwfnVixZHt3UsSMTSvioQr1LcDCy66dRf7r3NTT23dJ5dvbWSRRcYpP",
  "key46": "uXN8AZcarorqUCKovNwqcGvFZXWKqqtca2vvED1k5mn8KoPbbicj1Xsm7fLTBQ5ZWcUPqUw7EuAt8nTEqhzZwTK",
  "key47": "4XupuRkGiRFg2vVmf5KnQoJLM1rf2uuSmAgbVuWk26CfidwAzfsBhzwGU4kDjKur4AFzS18Ti7yVCjFtZxM1Cm9h",
  "key48": "4YmYRdpzAUkzKnyQkEVQojBjdfRNiDGeFM3XS1xckVNJkGoq3REnREfeCvQPtWPTcZQHEyDNiJkpvLGf4RAsfhPj",
  "key49": "22Wm4w7bUPwaHT9UkA7gC1FHoBp9G6L1JWeDtkx2orgEu4NGqDp8xg1NQgqNM4j7GtsbLAi48MdcSQRQaT3QtqY7"
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

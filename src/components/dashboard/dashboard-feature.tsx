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
    "5v8HgiWHSrhqpYr236h3uK67AF8mV2wtgqhuG63L7WUQd8gLSdp5PUVtQwXJ5RvBqFMhtWbr8wqzKm8h4spA2dz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "487hAJHjHd8AH5ocYxxLjvfetcHSL17ehhbepNPzrrsCcF9T18kvrFZRbVRWGNAGzUVFkDFVfingn9et4QeFCVUZ",
  "key1": "4UYmw2zdpbppbm4MVC2k8xriBedPk5njSA6r5rqTVHD3Q7czuT94YgYKU3XcGVNHQFXSw83W8zSsyQzqJswU96C5",
  "key2": "51tUsmzL2mWvpAXFMbj251CPu1RDX39ceNewQk4oqtQcQnZMjY8TVw8NbopB7MAYpa141QirrUbz1xuuLevMAZ28",
  "key3": "3iGdNePaZBHzyKr7xu3XaYVhGoMwNHQzmfj9UPPUjc4b6NERHvFxaYKzsbA1JazsM1XzurXj5CKnPzgSfthPswET",
  "key4": "RN99jMbx9c7XjFgtMpxU7ozsL9ENcP2PcunyyqKSAP3VxjyA24HTh39PibVedwJRSwGCiPaENL1d4YxJ9v8uXdP",
  "key5": "2QRXowPZtkZRfr1RXPTTQDGhiwjCedgJ29co9m9U5arCPzmGeFDTrfkst5qYoVFqN4Lqw86YxZTohJsQHvjksLo1",
  "key6": "4agydmVVZ8Eu5pDNxk4wtiG5dbSi1rYZW8dRyPFQUwctZWhQQ78mUZtc2ebmM7qn9GBfTLom3WgKiBDDaAEWYiUt",
  "key7": "4ZSXa3L6UXfNYVecKPDxfzeRikhCXL3p4ZcRi2X8Mj7m7Xq3opt3K5rR99ydPxVuKLaxnsHZQVrqx6N8s2DmdNqU",
  "key8": "3nCzXatdcGBdHFVJcAAyypuGjvtU841PuBYQe6cUi1rfoMJR2MGwoTNDdTNzVRUS9WFvnFJgZ2PyuQwcLdcXvzMH",
  "key9": "zos2LT6E57XZbMyqtUY4iTnHXnNTgjSpvzmHTHJRmUFxpqwR4rriy6BUcnq3jnSwBhtLpZv9KpJr1iMeRjnKg6J",
  "key10": "BAf9rpGJMVrLCH5kxjQiGKxvyydKaLEcssTSLC3aYZBNKm5LCjJhnf8NM2QWujRwqcsqBhWgieTK2Ya3EkRYepV",
  "key11": "2SmSCvZUX4qRik7AD2HyrQaUiSC2w8cHZyv3QZTYjmV3Tk9Snip2q6NJtehgoV3AfkK9Bd1SKUvRzpWUAb7LXu87",
  "key12": "2MQen68xQTAjrPfBywNLrcEJZnaKDYxeXGVf9dDCzgdxUPVvRxqmgr8NnJvGYAPesUGqqJxH7stDALcQ1yaCSfpy",
  "key13": "4Jv9ti7E8bFSWEpZ8pukxrPLj8M5hwBvW4dVrACa9cnrkMfxqpCeR83JX58zND4wauPjzmZ9MofWB3dC2LAxTL9R",
  "key14": "2qQ6BkgSX5GBybWtqn7kJiKMDj9idozrqt7LdvrEfCow7ZELb3QvMkqoh6CK4b5rc2wRrP4oaihHbEYzGu9jnwvJ",
  "key15": "4CWiazrU3H42tYv6GF7RmwCZBSF36FSdXvtrcATJuUVPax8X7DZoY3mVfjWjuygorEvo6XRKD1DHs6CHZCBgeeRn",
  "key16": "3MDVuR6LzYaWibwdtSWo6RGMFD4BEtZLPsygqySUcCZRFx5uANq5A6Q68uHdXVmfXsrMM7SHrNtNWNGagmtjne7P",
  "key17": "ebvFcQsWhkPUS7EgTKnBGPEMg8YhE5Y4rBV7LDfyXVsi6Cv6Cxf7ktBEQEJGLEkMckcLvSX2sw2e1f7uvccCzzB",
  "key18": "3EJxW4BiFjKHtUV2juHv56vdUjT7u2syUy3wDYSckodxmJdTk6dR85GtaoL8R6kQbJpUcmTWhwSjr9GGk2tXYz1h",
  "key19": "3Xfue5iXpRveH4SUpZWmQ3keFTpz9wWxxwFRiyFwhikjqN6CeByahzDJcLhPvqzTXE4nirGdcByS7VfesbJzeLVx",
  "key20": "4XDuuBCe8YiDZZz1KBcu1M5QE7gR6S6UCxbSiaxpFmVE7gRjAAypFKdr6py4UhvRhXYWiUFPAknz4Bh7kT2xZ94y",
  "key21": "3Vie2QX7Azo5x1p4qnqoiEqkhEHEMiCpmo77PssAyUv1nY8LqwrNNBeY4W3CAp918mCiR5U7yyvdiGky6G2emkgt",
  "key22": "3ZnUqjgBtfNYGHZzfAhwDfvgGTgGDsAGxptxBj4T2BcJgnKcv3hTn1hjQ2uyAmfvjFJ3FfZ6Ak2JLUnapes9gyZS",
  "key23": "3JqTrfWCMtQaYj7j1FLLFqVwoJinB7BsDK7FuQuVdHtcZtMYP8v34cnUTSWRR8QP7iAyUwT2k27SFg81JiWSPvdn",
  "key24": "rk5EZSPtXC7o4eTxKRyGPZs7Mfc72GRrLUGwkrMaRCqsvK3zxQhSc1qp6UQVGkXwo9M7DnLvmxJmdDr7nNXYfBo",
  "key25": "2eWySvDTKaQnfgMDtUt3Kwx45LVrC1PAP1kHP2vitTedLeZqNcyUmktRJqvQcyz4ApVZTtC881ujw3oLKKkiZ1ko",
  "key26": "RCrxdtDhD1cCMipGP9ghhp9vNVMpsecAbjamooeC78kUvyrGHGLeqsj1k2x25RQM19YXD6cFcCtwx4E5XFLJLHv",
  "key27": "5uQfcZ365TyyA2Lx44QKS6rXqVVzR5GqXizK9xHyiuoJsvxw8DzAafq8dqk7z8z6vZsPXGYYYdHeV4drszhLf4zz",
  "key28": "Mxq3vkN6h7r9ucNU1apJU8VCC7E5uwzwB6vSGxnGK2E6hT9gCeHkzXKgRguwuBKEEFeHuJi2mQz4fC5YVAy4uQW",
  "key29": "67PsQvbtzc7wAhaqUvgmvyd87LybrWW1N5XzYqtaCWT553SvrPCXcEudYveBsP145XqRRsu4sb6e1piXfRBXXBWW",
  "key30": "wHYn6MsRmkzjLB6gWSF5qFrCjp6hK55Gaja8udGNKzcKuozJgqDP1suVPjUSqwboNaJEUzsmV1fjh9iq7aYNGyD",
  "key31": "3qxajr6fa3njiyWBn56s4Sw4ZbgPp7mMnasm2iywF1Z4LJEZ63ejy5ui2xRQGNjUXnNoTyRaerT4nkuxbMiudSQy",
  "key32": "4UcNwNycV1WGP5zjAnvRqARrcfrmeA2nY6fTNDrN3LNa33dEWYWoyHvvMCVbtrdNeeGaKR9Xj16z5FKut6oHmd46",
  "key33": "D54u2qEFfhS7F5Gjc4RBrsg1TyoyJ8y2xqSotdrq3YKW9fUGGjBrcsLZS29LtQob1qJvmKEeKegbofymdsTsyqD",
  "key34": "25w2Wuzhm5ETortL1yQCPNJU7iQNvVQsTPxXLNvjHszk47PFxXHHHBfnE6qXiRzSjDyr9SqUCyunRaGataPX4MAG",
  "key35": "5sovKm8CBcc9v8nkz1ybPDa4sTwiY7bDxEZvfLqXibtKTSDHxn2Gc9S6ibUz8Qk2hhtWCfFanHJ8rpnE2N3NGjEv",
  "key36": "5VJxK9SnDT7Nf5KmpRpbYLyr6stx8MS7WHvwETfuGEBDt8D4DQMoXdcqLed2vnFhrs2cPUqo9mQKCHoM58czJNeK",
  "key37": "p9Fs57UaVR3gu65nRoCpsXjHtRrey13qmTooMFAc5yykwWTJWWSDL2i6NGNZLa9X1RQXrR8vVSesEQLa8vxjNNF",
  "key38": "sdegYxcwVVcjHgDp948aRoaSTHZbo6xbvSJH3mnmuWaxHJhx6VHBrBLhRUPdVQhkQCRNVMxmJp5nMknCP3wVm7s",
  "key39": "2whC2sFXBRaniMMuPCiBuRTzxZVckKHShara6MxLUQDWQ6JBWh8eJnEBLATpRnJWh5hn5KN3zc3zxTpQWAAQKKvN",
  "key40": "SpLPeyBeqx5YEQXYKdp99KgVtg8mDgoJHttGMBSsQzg9jRRJumEsCopH9jesp7hoNMN2hdXsQkn2PAZNGaV7T5L",
  "key41": "2yi5JqCoaPx4rP7fD9qj6TgRWyy3BtU8cj8C7TWNGGdXWq8Y3tt6VvLNdR1spWVFu3r8wXwbGxzWFuo977oiztZy",
  "key42": "3ZQDbPt86kfpRTjYaywDLufQdiSyB3egcg5KvN1iZnY6WkeaEmG3fEXsyEhMkcBnx2XGXVmrFvjqEy6KhL6zrK4U",
  "key43": "rpgRqF8rvuUJq4a6dWn8QGUWfYkEYUUZNTkCn6hp2sQMAcSY8upbJ2gzJetH81Cgn8coaUh2edvsGqB3MX1uCEg",
  "key44": "3DgfjnUojBMoReRhrd3jvcMrzuuWwswQ1gRu1zmqbqtHM5dQrDQNLUkyuNzAVgKP5sC33uuaFpwaNYTuMfDE1gwQ",
  "key45": "4CLb4LYsv7wKwSCy2FFxcNTvf6xtaXy1iUfhg2JX99mjFp4WfpGisH9DGuTLoSZYaZNX1Wqb7JeHKTRECJNXkgqx",
  "key46": "2Z7W1u2TTdQmDBWyX3jtSYe2RfDz394L5RnjQ9hYfwb8WdJmRU94cBwtg8T2NAQNb244yC3yPxoEzdPoB2ga9YFS",
  "key47": "2KfBmkHQoFSqBjbfYy6jWiUq6ttnKii6BdTwDL6VwpmR4tvNd9WF3MjatMg3jBTpfZyAjPWyNWbud5n7zLYnSMBe",
  "key48": "5yKcsT1TH8tRhJd3vzz3uviPX8GAHNn1vVgDmBDi7BdRJGV8Y5fnpJ528Z6dPzNazLwFDyuqVbZrKvm3MJTyexcE"
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

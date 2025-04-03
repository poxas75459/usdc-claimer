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
    "67r8cyQ4DJJnQDPjbsvJvmgVyGFiaUK9V2GyjK2CfxDgomwQDwRxCnNEFz9rnaNS7p8vZL416xSHyMbhemvkgPFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ynX8MKcQNdnn2KfnCF1WVd87ApPbvv9nV1HivtDCcQc6TZWt4NrukKqZHCHW47JQuAvypj1x5beQNtB9aezL9Wt",
  "key1": "3Mb3tmJWJY6y9w6yu9EvSeKxpBiNZHPCD3HTozni6iFXhaqcWaeH4wQrUTcszQxi7fZ3hBe71epKfkeCz1ZP5L4j",
  "key2": "26vfA9fHg5nY4FLki38GJTA4pzNRvKuBnCx6GEwjnccN1dTN2q9xiMhqHfJHHan3aRhxvxRJfvNtThNbT2TQ6x7B",
  "key3": "57yCVoosZ3YhVXXhsuJfzGJBsa4BhaPhCxcXQd3hgMzEy2i4BUf8oHiT1iupqiRkididgCrSpMHqfJk9tzjjA8RN",
  "key4": "ihcL7dGvyvvdULahwMdp3vPgjb2UegS3erNTtQzbHsMVUU8tn8bBRkPZ9ksTHYyyuVtCh9zZAQzbKFeyEX7icEF",
  "key5": "3KRsi1QdLud8sZjLZEoxKWDUoHra7MnwZQkzPKZBLQiDKZvcAKoBh1xyNzmrjuc9VquLxe1orU2uvjqoAuYrnjcs",
  "key6": "2AC5qHwC6kcpQtm1mxmczLkrzHMaQUpjFPcwLQJApdPv4fGsUdDLCFZD35QgAye6nQKAgteTmFo5YqN35hWfNbTv",
  "key7": "i6DJw2TuVfxX6JVGz2m9ZJ8uhNBEBzWZKLFFafyQejnqBzGjDDpRzDt6i7U3Z3oNn2tfUCcfhz8ukG6Amp1hc9d",
  "key8": "4hotFK9Fz9key5j1K3apop3ZJsoE4Qf6JM3XhvWCwUnxp6XbNhbwsoxoW1iKXQz3TR28yJV4JCXhKGzw1uLEFKVd",
  "key9": "5oX6qnVejv2eBZwVvRD7Yb3i3fr71p8Bs1X1CaMgAuh2zQyuxk2NL5s1kzHx3HFL3BkdtR5QhZFkzVH7wvRHBtsU",
  "key10": "4AJ3YFKp7o6mLVFymkgizWZAR6YmW1jY3q8pox817PnyLMLZqjR4eLGz45vAd1eCi3f31RA5MhJgDxox1uqPiVLR",
  "key11": "2czX3VCvEATRrKRYKYNyQBgduLmjCWUx1mytQvM1ji4MSDY9LQmJTiXzpxFN2usLq5eM8gRULTm2GpoUfnpCGSeB",
  "key12": "5SDDqhQDSqNuQE5nWcJ93XiWiWMuoKeJWgJeAYa4XXwuQi7kUFP4pqRcJYaVBXo1c1HRYmCYqFSYjkKNZLreZ57z",
  "key13": "5zhDMeEYGu2HWGfW8rnEhBwjktCjJQ4fBD5bKQHLMG93rkRJGW8PbaN3yHpPhVVHHQ7mX5FqKwWvuNj9nWVp2ejd",
  "key14": "PE8szv8w1ruUpwkZETa8Lums1FiJHn8TMp9QkjWexM7hFDFMY9ssqeGRiDVEBc3zjZm3cXngqBRf41rNibGTAEJ",
  "key15": "54rgpKJi2TS55vJb9kZattGjNUch4AQtetc3igpaMszWKdiGvSggbgS2oLkqHxVVLzcL6YCthsts1jv9He7Kgy1X",
  "key16": "3w5q3SkjmuL1T7B2y1aDirJT3cYvnwRnT6dG6iWvxLvCeKic9NdoJLE5eJJ99WU3iP5moDF2FWtWgJXJWL4s8EB4",
  "key17": "kPjM7YavWYz2gpCQUGo81J8C3qZSuUqHwtAkt1iv1sNpVjdEhUcfHtxgd5N15K6K2oNhaNHYHLFfkENJTVUsG8W",
  "key18": "3Mm1VSXxmUUNF4HESfNfm3Y2Uq9KhpzKxJNrY1PrYTMGLyZZvCJQmJSnVjXoFMK6LsgTNqvVc58Rd2fY4NZCijff",
  "key19": "4UnNzWytT3cbQ23AghNp43Ngs61E5UKoggst3F34RfQGtKC6W7UfEKtDUjvzRCkshQuD71ZepPhMYQiWY1i8AQLX",
  "key20": "2cq2V6WxmNvuVqnjkFASGhYJFW1WNLXcdaiD4iDXNjXDppXufNwpQtPFzRQSpM6qJVVAxFM8RXaSfzBXKs9FQ8WM",
  "key21": "5hVogbTRD6jtyBANfg46oEdNFmPT5F845pVEqNRQ3RFTa1MLyD6JdjP7p9vzo1EYUjPoXpWfh65YTUixNQnC2FnK",
  "key22": "RGMfmmvdfDCsiuoXAQWk3yTnBQDw1t6bZBn4MYuaHjSAPy6pT5Aa9RXAtMUfNKKzhS747FDXDMESHbAZgoTpXpj",
  "key23": "3TkY5sPSjc1tK43TTorS88zTwfBhuSGGdHQRWkzTdZH3dPNBdDPwfkwV7SR3ZMmqvUVJJkRJtVgb6eRkKETczz9q",
  "key24": "2abk6mcnTx31vzNyb4txVMkficSBT4LyDc77cW2bCbexRqSLPxJHwo2qYWWsi9VD3hkYWX6Rd4QRBcoCCZFWW26H",
  "key25": "4mR9WPgW6Xk8HCgGmPuUwCBQc5vf6Lvpc36e35aXfV9MfKc8k5YG8J2zbTj99bhkiC17u1sAWxoGnPJVaJwF9DoG",
  "key26": "wzkq2PFKeTSgohcxkD6FwvK2YqgVdhha1ghyT5SQXzbGZ9cnTxzshAoRoo6EcjsMbuMJUnBUfGeM5HmyF6TaCzW",
  "key27": "67Bn3bJssVgxbjS8isTJZJLoDrLPh92tSuJZDrHmpXuN3JyAJDq72CJ8M1pGVnJozncg2z1KrPdELko9eMNe2HuH",
  "key28": "27FJNshqKGrtDX6VDWVKDQBSB586iArdSRwpXAVWwfkeKE1MpsuC5ujmC6UvpqVFFoNsFuXEKuBCaEAqKP1YopNz",
  "key29": "3x5usiRHbyCpF3aUiLWp97DGpD6VRkafdATh5hVGeJJEKd7zXTf9nW5PbCJUHYJzgJsg8yqneo9uh6uhsB9zyPth",
  "key30": "KX3ymStnKNDPs8GWEmqHozP9J283RwLiNHpA39fiXBxBzKdpKZetqyYsrFbSt3o92u1zHQAXRDijL9w6jvRsGkY",
  "key31": "nbbsrhxNBFZTAeqLSyCtKZ2bupkfLw3Lbf8axYfKDGEH7fm7ob8W7BbT2PbPkfXT9Xw1Um54rU6QkFGu8Zvp3Bs",
  "key32": "22rwBL3RFpJrvp6CQ7o6fcnr4yekFL6ZJDZbz1Lcx3AaZ7yh6SHX8y1MA9EdketkhAYv7VyWELhVtLat3r7mYVMV",
  "key33": "4urMsQHEX8pVFRHGsgkf3xwXTEr2A8Zy8HvwochdUuA5MXkJnCz12TLD67uNfovEEaLRbUTUFkT19jByEx6wABpH",
  "key34": "5Dz8egJTrgiT3HD1J2dF1JMt8E5CCwmKj2oN4fkVetL3fJrDmbyW6kxHCKhYuJNcPCTb7zhqJHhSxqya3TooqteK",
  "key35": "4fAvqPCJpiJcs2uhHnPZihr3ZstunMVoKns7yAyzpKnwQTU5W1vi9cbhScemPqdVFjMxD1RaqxhLRu4NP3m3WUXv",
  "key36": "61qJdybCYKzN4L7RddY6osUmEZKvAyUPHrCoTUNgsAKF65W2CcLKU5v8jP7F4ayZis28FRb1HFzisTGVbRyw5Efk",
  "key37": "3gBjZsF12z379UxoiMfFnGpcfeM7aNb21N9MrJJY278dxDXPUQgrfupJjwHZn2D7kw2LGPZZ5Qqq2XMXKLcu2dBT",
  "key38": "4W7qEDJsYpkxBcbtwuWEdw535YYL35jNktrbHDWsoTadMbnpuj4KYuWHDeXzDyshH1gS2FNMQmjPD8HHyLeip9z8",
  "key39": "36Xcmt9rc7GtS4yv1ZDCyEVetrLZyDaFvhMgbyCmc2FAy6g3sCzBbUvHt5eKuzisoW5oJzvb2YpbXjcq3aLNz7iZ",
  "key40": "5nEo3pL9HyEfEfEnBYHChs66cmQyCPdBby4yJZmiR28R9Z4PKKwmNtR1uxhYedXtSRBYAWJ7sNFyaUMv9ZpamAyt",
  "key41": "2AV627iNMzKnbkztZUVGKQQ4QLggGsu8WmLoNWAQ4EEsyD5RjYD2mYxiJgE84HAyECccV9g5TiNYT5VsrG7Lwtam",
  "key42": "48b1fkxu1UvSq9XV2m5xBse199rxeCiJuiSsBxHNSFEw9BANQusEgS9xrypfRnKek2iqFiho6JvAXThacHTaLQwg",
  "key43": "mqeTQfSVWnaM6aaRiDcKe5yS4LJDmiafFXiorkV6VGuaBGraQUPXSQS1WzLJcXjc2mhqKdApn9Km4VGam4JA19v",
  "key44": "2BzexZnfaUuxucvxTNz5q1LywbgDVEAvoZj9g2r2Jer3DibTFEC16gd8BJFsZVvPMYv11ABqJ8pR6csAyNLLmLXE"
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

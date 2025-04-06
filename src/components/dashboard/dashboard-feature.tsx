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
    "3x1kEo5y5cyW4yEthYAqDJFgwxFDQTz34jhNaL3xsvwmcdc6JVNn32LmKQ6ZYU6RFrSkqhrTxG5AGdHqKsuUampg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vkZ3kV9oLsA1B3RPZGBCPC7VM2LeKTMWL66WniszjsoUMm9WqYi95hMUM1Vt4DzzX6WC6G4DBswzVqVKRgZrkjE",
  "key1": "5tUz3pawbTt4A2oS2c5PojWiyt77ax8tnDFwUDKSMkCrfTjav2PnGsmVYVM5UC5V9h42aJUzdwerFxkYrPpGXZ4y",
  "key2": "4Q8CrAADuqewJWecNRxWn1HNNFAC5tb4g5Jn8P9mzcgM3htYhBJubeB74Cdq1DAuJA2t7EWBmtKQ5Xf1cBBh5JWH",
  "key3": "5SdczBe7TA64AGUumqQp6xrcqSsHYScPZFUcCu5cZGtrY8kv6ySPYcRZcCYBco3xHd9HCWTzXEHP6GThfdPUBf1j",
  "key4": "4R2Zs9GD7pSbXW35Zzn6kZaa3zzak82849NSW4Yjz6QKPjPKeaA75pTPXgoNPWJVrgKhiP7mYRGuMU1zK8vuzB1F",
  "key5": "5KrRDbYcaZKPzgF7wWMNk5MDxbm4vaV7hqNMVC9SXFuWDoVrrAqNscKk92SaDdCDqsFT8i6Xk4jUXnJVxsV8qqXw",
  "key6": "4q2DnLHDfL6kw5QeXXvZFkc3D8JUvFe4oPuMnZYYzGsJxHQbAcb76RCDanvZryMvC2ADXp2JSKPwvsRRbiidJZYe",
  "key7": "5AkMBPTcndVikcARqLC3yaxDJWk6v1CbRzHjwMms5Sd8z5E7c9RpooAjeV46KZ3SUERgBc5oYhtUqpX2cHJ3hVr1",
  "key8": "3nkd9D8ZSBvpth47b61ZE1FXgpKrKgcAh8zdi6sG9pW3LSEs8uMF97xHyZqFC8eAYaeK9xL4zXdCFpDj5UKqiCqA",
  "key9": "3aNoq6G9kQssrkFL5GpEjvnyJBeU56Aa8L5S9fErjMouYAJuo77N1PLj2wkGHKVwgpcMpnXJNbaMxfWFgH1a57qa",
  "key10": "58GkdrbirV6HXJt8cMLL7v7qXFwyBDiTjAXPRLU6vvZ1p5GpPfimPnBJtNDuk1waumHNvbXLBXzVkHycjnZMfg8W",
  "key11": "2kdCn82vKUcjbWqDRU2qzLqkeBmqezosxtoS3jzHmEZgYBsiqGqHCgDKZz9jqAMdU1KeGpoXNCju5uYHeLSdujVq",
  "key12": "3H2kLHwy2kaUcRhxKLRy89kGBkJ3B7QszTaPGbh6EYaBY6qgsXqFCkozgSYgoFvsHNXZY9qegBrfxJQpZsUBzPZs",
  "key13": "2dhEbngwcb2WkndWsHRkCodPJPNpmWwto6dDFjQWomnvcvSHqGGZL4pUQ6ZJfGB9UXuoqPU6AFcby5dLDHHYJTm4",
  "key14": "tpTyVkz4tsDJBeWBV3pT9YwMfbsi6SiJXQVzeEcw6uCFdhqhsTbTWLmw1JCx2YGTsoM67CcCnnWfpkEMncf6XfK",
  "key15": "3NkbPDrUWbn4JhYZA6mfggcM5YQQeGRA1LzsxuqwXftKMEmZpdrg2EboKfesULdensvb88y1aa5bH3TEdCJ863h6",
  "key16": "2nTdfem7z6zm3h3MmWdr5oJJLG3888cA8pcpUPGKMFgFymEGMuWDWL7MYcfCMFqWESaLSpzvqo2PSqsECGgYfohF",
  "key17": "2S9ZPzCcM7RL94Ymnj9MmsPAfx5rzJue78bLSsp1gfLWmiQZHGCQBLc5EyfcCTjFFg8yVHipS2xSSv2BrCRQ12L7",
  "key18": "4ELNo3fa33UDCxLXkdqtb1WtHM7DPYAPBbKywnQrx6wEQ3sFgT1zXu56J61E2VhsetouwTy8Nb6aH4u7cT4jZw75",
  "key19": "jWq9qCDzx28ZhL8mcicZTxeczQuDFQ8wJ1JGTBUHrtjTzmMot3EHNWnWrwssxqRJ5FZZa7z97yY6Hww2qXchyAJ",
  "key20": "KHeFBRrTfdd1rqnVYABoHz5Gzu73mJ8hRUza2ZicnA5Hgd1g6W1mv4ZazD7recYBaF7D5ucna2oZgA95ghoFU5K",
  "key21": "2GYv54EcYEHjLVC21V5yzstANm3ySNCKGUvGowQhjuAdHkt9MwaDJtSzMyNXAkgXo8GYE7RL9CSyxC3LRr7QZACY",
  "key22": "43HMbENLsg65r1ftCUqKPr5Rg1btiK8gKGds78DT1fWAEwF2T93bryPui8wsMEUHaXx5p12hU6AULQYU17TWQdf6",
  "key23": "4rBfR1YUrqZRkwiWhPLL7Ybspr7kzTeJyZn69HPULiEhC9y1Dgavum6UjrHFjTNeyjzwt1oeS1Tw2babKftBrHu8",
  "key24": "3x4fryvLYu2ozdiABkPUtVdE7p778vUMLKdNZEkmXXH6imUB9KyMxAn9FrVx7KqMvmua14MkYDrH1YPisUeXJoi6",
  "key25": "2gfy3VxnbGNd7Qxsz1gq6uCNeVXrwk3oB32Yv5QK83tbuTCCP49ko6TjcikZcsNW7Kzz7zdi1qPJ6HTbVdNfE5p3",
  "key26": "5bhBmbzVd6DBAgE9kK1apVmRpQsjk8qcewzeM7AFKqYhEmC5tz5CtE7qV4qi7fB2gfqcvTHS49Jx3zWBDXqvnqyd",
  "key27": "5Vt7BPpTJji4vvR1xMZMMkfxycs3BWeb6oZ7ycyzetg4eY6RmJy7RPnbdcvWSwLKQMES7U1RiUWGqEyXpCaZbUD2",
  "key28": "eMfkQi4PB1bUNU3KW5D1JBANsAj73dxN9MiRTQXbpi95jevJjhR8XbjdQffM7GvrY5kpzhs7EjikT9d4vu4Awzj"
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

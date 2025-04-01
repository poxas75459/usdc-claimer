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
    "28gQcGxcY8K8cbJyHwXkR59AR4bhWGuGyaVNqc7XtVRUK42rn1PP3nPU4YidjCYzH2DBfc7ese6i9JCXfrsPDKwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "obqsxCjPTQFfFPzzXvQrR2JMH2RLwgNMwRdBdtB3dWKYcYyjzxwVgJUuuM7nzP4cqVzzzRDpPsGA2aHPF9v41tP",
  "key1": "3YsmgDfifp5KUPHNGneiDSfWP49RSPKiTNwUCZ8xqYgnRkYLbSTf2ZjDMt7icMm7w4CgyQM4dpL3czwNgq8rvKKK",
  "key2": "5rVvYFCe2ciD9aZpLkTJ6QoRYXcSfVZ11qArpVkzWpLW68jefjwsKeXS8E1qWKjXFZ68gQc3FZ6rxPEWsfYzZGHb",
  "key3": "5ZkbksBH4muUiqZUMnKwguRKwvxzjojXUDuHatVPrh8uGQETTsXF8U6H35qxsu2y7mZUUzdNtAZA3zYFNGJuL17r",
  "key4": "5G4GrgZZsTmr6CT27o8sUdrrt45uM52mpcxDinBJxbv5PURdQ4U7ega2Zzu5PELAYHGhnSbsKKM8eQMGoTTBEJQT",
  "key5": "4dMQAtDzSzzarA1JX8hbZo7vmsBzZTFc7rasgPdFh6vPKL972y5wSv1ei7yR283F1ouL6ejwfzL9oTNvaYXrJa8t",
  "key6": "3uZ58tLmcrkUTNp5QRbVrqBtGrEoxZNVFjpDybBPQRXUXYWkL6AnZouhRQYoarfcje6rNgQRox5SkC2WBHBytqaT",
  "key7": "5JeQusit3odZaEA5C546xYmqpZr3TJRu4PVMw7ikjmCqwAS8ZnvJVwndnA3jjb9Q7hLUUpbhkbpFXLgGMnf6AmZo",
  "key8": "3hkuktLgCsXLLV9gfa5sEXCeZRnxT4Hu6kM5du7qxp4RsL5AFeXdcxEdLvNmMxE8ReyTunVdDxfgVx7pRNEuHHH4",
  "key9": "3bxLeBxeFhfLunMUnv7sJzGYmLN3EhCjR7KrCGwsSKoAzftw1njq3iWASa5rTFkdB9VhuxaHwkTfWjEaid2ZfhoG",
  "key10": "3a6oMB25HnwssuiJhfx3j8ztwLuKTTUfJorBdxLytbjAG5jCA9W2AiYrcsY5QheqKvPjCgwyJy8U5t1Lsosw3Jm6",
  "key11": "3BAe2NSFdq5FWE3Cm4AoqdWxErBdZstsJwzNiW26uBeKhxLAHVuvJJQDTkwr7kwzgiYWwHPCSWEE4W7pw9cgV3SZ",
  "key12": "5akJQ6VtiXapkht7gEUxJxzcPSbDd8fVtcGuvkMJXiJqcNTb7oGBt419LDu2BxgX1Mdn9NdpHQTTSsg3uUyLm9rv",
  "key13": "4ksZsrRAw7XwYPcARrYijvrq2pN98Hjgdn1792s13sNz4EB5eadR2F7azKkcXh2Ugc4GxSD43U1WeSAnnpKcWfWQ",
  "key14": "5Zr1u2TxEkacbGLAcCnVBfxP28BHRWGgxf2isKQjbeHt9XYGmUCyUnHSzHoSyUo7GeH2RLSDbuGHTFWcr5PCJHxJ",
  "key15": "3HmNVGXMJpvuHpT8Jr8Vrhnmm7T4AMgXinJJrosUiydPJK89bHFAUkdfJrc8t4PtfCUYSNo1ZxbsXNEDskawNd2a",
  "key16": "5pA6ZdjFeFevh9yuNW1yLMwozy7Qsv8xT4fub2b6Yr3RxrXUqg3MtMRo7yBY4QFSpsKXcwWE2pXynkxQMs7EZbji",
  "key17": "26LimjHnNXJNe8P22BUbJCLfbwYj3fPsYs9rTTuussEPdwyPKr3RkmaFcayJtgpVwVFw7SeMYB6rMcmwNa19B5i6",
  "key18": "LvQJos6rpQxxYnZnDConq6U7CTp8kBZXu7jyLTtx7tYdmQ15gWsvuiewYXZPjquRWraVF3y8Qh4nwBh6sML5eyZ",
  "key19": "VAN92yyVGj85jPY8u1zFFoeZyFrdo5ZnrPdkmoNS5nN15dzqoiwCHySDJ7S3svmyA8s6fSUaBiKhVGmWzt3tRVn",
  "key20": "3C5Rdo5uMP6QivfDxAc8fSTqduu7SR1276VmHk35upQa4ZMLVbi7szrAVkVY56QgqH3tdVeejmbmTYU3LvjeqEtn",
  "key21": "4xrbGLtZT1wWZPXs4rVHGwDgjKxTASHz21EiMkMUmnx59CvzdDtHuU6qarF7xtnsuWGVgZR7dgwvckDz4kMNkh5P",
  "key22": "WPgKfLBiaRonscr54i6u3TPcWuQMEm5X26nVzjAgp98hF399gs5Rjrdqvz6EkUVSjZtedsCszV9WeEz55od6oui",
  "key23": "3mi3kLxUvK44dhvSqUrWFstG4yXfbGiXEEhaZQkT5MbaJ4Wf7GWwR7674eeyQh6tXLnMxwfuWG58AAJQCfFs8wsY",
  "key24": "ZzMoYimY1WNimYt5De2tt2YwHsjcgoPFCcnHJqFjyxmCVEndekV6ECkRkfkdtXXTPyUJ8pPgk15Zbu4MXgcvCu8",
  "key25": "3GoosdkD5BobnX1bqX9GSD74jQJ5TkGwZFShUiepV5xXAxeohNtmV6yr6w4rP9tVh5vWW5jbG57AYsryd1S1zjA4",
  "key26": "KQnbVQWdbvzuM5puSeAohuYzWeGRT1kafKFmc8W6Lyn6B2fGi83yZdeWmWXeNfuHXFzQAg4UDW3E6r9wAefdLvs",
  "key27": "42VFc6ucuFqJsNZFXWKyxYSX1hbspS1NxzsuyC4ii2rguTjECLkkPoCkJx97GNJasbLeJ7dLFmCBjYsqPAUD4QTD",
  "key28": "o4WzMKnjHv6fPt6QYGxrQK3Su1Rh85FXyC2tkQPRUJmkj7QZ6ssKi3DTwMTArDbAvLYNv7rxkkrMBhpScyrxMYu",
  "key29": "4NWAogPvBDt4ykMRbm63JRz1vCKqi2wZA4AMcHBYohFrftzYRvJixY7qGRU9cvepSSern7KhoiDg1JYnheVTDQVu",
  "key30": "4akzNzHNveswQD4HU2sDQDFsdftShJZix8iBqNv3B74duUt1iAYz6dur25YVzwwcRebArhqiVEDfdudfcHvNDciW",
  "key31": "2HwXpNQqLwEPSzm2MnNzf39zaMK9A1eSR5UDrw4aTeBxQnj5vgn9XvHxC3pUcNmZS1zL4tZMiuLM35uEKr3qzL3o",
  "key32": "25rBVg9158DrYxEtUQN4sKbQnjcy9patU9VZDpHZhvPZrH1YARjHtYFgsfBpXKPkhPvzwD2Cri1Yrks1HV61NWGv",
  "key33": "5QmyVuQP1qKXV297JCs75rdzDutQWhwLLsUymktiNYryhfSSDPp9GEEv9y8VgStTendpofEkBLDqwWrLFn1aqUxb",
  "key34": "4pgoZxT1Tv5QG66bNtQbWXgEsY712YVHdaTnzAZdXL1UAqD3cVeJDeM91TvAd5dqbKDncSZ3TfsYn7TMkWTRDoMG",
  "key35": "5BJgzpivPMpZsj8HudCCmyjjvCr8F5eTQPGJcYDgZgLYd25MsiX4Phj9Wc2FiyenKZapPrKxB1CnRm6K422Cw9KY",
  "key36": "5t3uJgzgjYV82m1yEcci2YmXHfhFKcCu1CaTcuZb2cBWzS8vrudPTNnwv7G8SNpq5QSXNPhi3gsqwwYupjtRxmxG",
  "key37": "49PNP21rJoaksBtcMaqhgXbNioAhiy1XvSHk3HnYc5KdhoGCJXUcFbX6Vsn3FC7KPGp11uz4tP9d5jcfiVLvRf3C",
  "key38": "4fGj3HmPjRN3pKxRHUnHDZ6ZmBRiaYYekH1wShy2V8UQ6HaxrYkfTfvQ6KrafNqV5V48CzVFDcWiqHfbx9KzkP6H",
  "key39": "4gzGtVLCcj89jmbVrkZtQtvGPBzbpBpgH8TJkBua8WSEXidPxMxmUDpuwZ5N61iM2aKdaaJ75TLPxxpnZyaLaHZC",
  "key40": "3HrUkKs1NhU8FeHUfdHm2cbvJhdSnbg59e8u1QY5MDd1BMKkYsTpGitvJk515GQXuTWdvBqsrmc3Gqrtm2i3haHE"
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

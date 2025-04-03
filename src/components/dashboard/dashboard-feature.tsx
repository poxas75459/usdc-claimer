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
    "3gTVFD7F3V6zBj7nmAmW3jnm4Y7ZCXxyP1ocUXtvwmA146TMqD466zascEVM7HRoYLUxGfcPgt28giR43QfRdURS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CE5DThxySndkwbhaYBDtdv8dK8RLMUqaqHP7nbSD3HPWQSGtV4BquDEfLSr61aRzjFqsEzmzuJkUohxSEt3bsKu",
  "key1": "4yxBY3xJiK1VfuuJvbLuosjr2ZQgiRKSL2RhFMYsZve6AQmEtdZYT35PdDUkt27wreyg7ZH32wVhuiaVUMhsm8Ey",
  "key2": "3BbeeUBFu9R4f9DpW5mS7Ma6g1B6pgbR4qm8hZULseL9AzNuHHac1ieKzwVGk4WH72JWCnm2gf2k3LcmUfKTCenY",
  "key3": "iiey3XvKdA5uorUfWrajhvx3VyrwddKvQLkromSMVk6R65iKhdKsYMVsQUrZ9N8Jy8ccDSjpRhDE8GSpyxDEuNa",
  "key4": "9L8Y1LD5UWYvJ9FEDbCyrRZkCYzRe26t4jkXDLo9wxFGAjDCK9qbzNSq5XmwyqiHvGqX7hqE1FcLMUMmTawdQoK",
  "key5": "3Lp6TH19MDpqdwYkXNrVejoTHHUQMgEkocLsXhNHeC9wWJAL1scr4CPC3oRtpVFnM42Qi8BzCgJ9JayvzAgk3Cpr",
  "key6": "22TKdvWAwJDthaSADh727rb4CDMpozFkswoq6Zmuc6JstbDhiHyzfnCKSJXFomQegFG1ZXkTe7EoAHa1onnhsGUP",
  "key7": "5pKVyPU333ZL4vmrV4FPmk8i4unnwokE9ndT1FGbNmXV8GwYh53LpZEYN3JaBq3Qs836E2LftKUZcn2XWsaqJR8e",
  "key8": "35WVaP67vGaEDtftCvh5KLvRNVCYgQBUCUCuNSubea67Aaef1r8SxLmqxRSTdkUnD39NB44BfQ9XBjQd5CbPdN3K",
  "key9": "U6FzaLDogvWeuvpAw6Bvv3NEETjRXyFz4ZWS2pRitrVDuFa8uE2KozzJcBfocP7jFCneVUPgec4i5huGfUwpRfU",
  "key10": "2ydoSdJYuSEYMzEzK7ATqDbzsZpBFz8ies1JUkdJadWEDVZvBsjxh2f3uv1qEwe46MYtXnxeH2rXBhX7bnQfuiKe",
  "key11": "4t5bZArrKzL3ju2rQqVYgEJbA3jXQX5WSJFp2p5MPCju5XCdJgwC5CSqoVhYT8JZd8CUjiWw2Qu1myWL6NPeozod",
  "key12": "3RGQxJrQvGiNhfyNyUMqe9Wjji7MELRUfonKjD5AwhBCRJGi5Bn6HCRKLFo1znAXyhgdBtSJjCErnVrpmUEjXcfT",
  "key13": "3CoDVhBqwR1k4CtFwFb6nd8JNE5WqYu15LvuGzPApRimG5xkwDLWeVbq5iaNZVWn2V2F7G1ZrfbVCmFZQNqx1G5m",
  "key14": "5FZyjbYm6a6uxfVhr4XqZnZx2efbKhnyc9X1GZftfq4tuqxHqs3GCGjfBwqce8Yfk8BeKtmGJgvAgLit6QmCs3Wv",
  "key15": "2QQRpKZiiz1pC4hQpo3MYAiNqgp37JcYv7zLhBTmk8YpyrmV1gBQuzj6ARnzPpHx4CNgTgS9E6v917pE7nFWBFkz",
  "key16": "43C3j8H5Z4cNe6JK91CSGHKAKrF58DGBfxHG96mzubhAQZjJPsLoNmApDn4joGPvBFAECkXHy4CB1nJFBbcmoM3J",
  "key17": "62VZjLfLGNw4yQESoY2U5eUxQkEHfuAJoz5R7UftF3s3pLJkprmiDQfS1cEdq4jkB82yyyXyKdJEvMQuoHSXsVZk",
  "key18": "56CA73yHgBDKuqfL4EvqtS6qPEdmCjsYaKMBqNnqu5hNjHdVbScfrzvAWrsKzi4ZWjnzcMUDyv8sh9D24mN2XZg",
  "key19": "2q6vuCxftwtiQadghncFRuizXT88zssiyWNCAtNAb8G2ZGc7CgD9NDcWuVeU59NgKf1Y32YDCjpAUzgwpViEXQbu",
  "key20": "3oG43Tm5DtRdRmEopQhnx9aBeUERX81S14vv3JCW61DKRVTkGjdjPTkYkp8rDakLJYwt8HTVQ21XHNfjU3Pv7ugT",
  "key21": "5BXUjkSXdwAdk6xHABdbfcmeEkpDCjkoGkNYTTxto9pCvvD9fh6wMfJBcMnU9u4hVzG8toYE19modqo8ViPJ5TCb",
  "key22": "3Myy6HV2ePVnk68STcaFLtqFshBhEfVJqhPSVtU6H37QDpWqQPYa4LBKYnbvP4rkoSPgKBWAM9wqNgozJ7JddnMG",
  "key23": "AtSMfW47ayp4gQtxCtwekN5hVSxVe5jyhQTqUJPwGDxNRVhLF1udb1xz8iLveqdBRuibfKbd8UALWq16542QHR4",
  "key24": "22t95L4TSNWrPcLiQzufj7tkbciVj7UuHsJ27PNWvLLQJJVTws7c2Z69noRnWGKDyfnfbrsrnERdNQacPUuNKGdW",
  "key25": "4TXoXySxAGFXqaRCPbQFoSVgabewVaM8j5YGdEGyaBgPfzxaLdb29odw4GsyujNMSCiPYUtCWjcJFX6kZFeT3npv"
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

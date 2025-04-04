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
    "48iQeixo6cazjHK2jqnLm6sABwaU1HyvFQCctxrunnGppEGdXDv8GDp8WRb5P49zz8oHsD1aHfN9bfXiQU2gG28J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MYteCaBAJ5gL6Kpp1XhmW8GgLyNoG5PY7L6V9v9RpRaiouHx6MNwenF1EXpN4FZKNrq8cVnxaxXqjb8LohVZZtF",
  "key1": "5sLcSZGwn1V7s89U65ywSa2QZ16rvVuwGFbeewWmbYGS3q17dqcCaxMd7J9d32MUEhEw5ztnfHcSTb5L6Sqyf9Qn",
  "key2": "4VDcU4YzshWbgdv6njXkGawPGuLNpARQ7kvFwDYA5SdEMoBYPuPbZC22NFHXpCTXycBCqeLZd4HCdQW6s5HWpXZN",
  "key3": "4makKsrsUW1BvHaCHCTQG9oETGcCcVTMLNfswJwAfuuhDm22bcfG1h7jC8y6gS2AFwSoqmAJUrjNtjxE7aWavr5s",
  "key4": "2xWhQsVKmXBWPk4S5uBKick9qJHs3nFddftTWxeWK4Eap7B4yqxzPQUfkRfbgA5F76jx4WtsrsvSgREBH3ZCGHLo",
  "key5": "5PtRWrCLq8rX5Ge8kyCctL4sQfe5AJEoK3DFwThz8Lw4N9a7FBcaAzs1oyzRj7hcZozf5CFnVbNWoZMLEGEd5SWc",
  "key6": "bCg9a2ZN5qcAaLpg5eH9DZKQL6tToG5xC4cEh5xwoq6wWUT1uPpCXBBxkqxoMXnaxk3Wiqj8JWoPRijHCEESH8Z",
  "key7": "2JbwW6bsXygci2jCfNEGPk9DC8hqHGQmYxzMUGtnTfhrk2RTrLyKieDEzAC6A31oyzb5b4ssa8vvh5Dkr77Yhce",
  "key8": "4jHpxR2HM4V1za4VkPvf8qybbJaRzuHAjaBdt7tuYt7HZ8536svfQhX8hry5xSFWzdtugVgXzNBxi5d7Qw4nPjCR",
  "key9": "2FFPTCAZEA38rTUdhteUofLthQzAN3qdp14LAf4NbFncQv1q3XGX39Qx8wfMXJvCmNS2bYPrMucBvfitfvhqTRma",
  "key10": "5HK4F4PiXQZSarYSVN7ySzkZHtQmmvZrznYp8BFy2yywz1qJeaBx2n1owyYUMZdpqcPeGDFYTTasbduCXs6fUSmA",
  "key11": "C5XBVcdUXdc6TQijQ1wcGxF42WQB23bkCkK87ADQmPiNqy7HZyjzMnXgixnWuewvYXqZZf8df2pyUE8QGng18nM",
  "key12": "2b759VwDuNo4BMtP6vXVhqJfGxkTfCe5AYLatwyyg91PcqeqQu6irfzVA18BDVX792JKM5paKGJsyR99LXECGQzY",
  "key13": "3tGunexjtyd2v1kS5FdPpRyxCC8nqPK3ZpjvuATnKDALfCBqcEC68SVqkoEcjw6HRqdExur4XzSXE97KA6z4tGiK",
  "key14": "28XW62r7Y5cqQhaw5xJ3rdJKqYaWRvhYUdg295nFusgwzPHSbCwXKSiPr6oSBHcbtDr2BzC7BXQ9vxSGWePFLoFN",
  "key15": "5PDrVtLcESpoiprgvYUmiY9zkWEauo7XEh4iaggUi24o5vatwuUgXTb9mXde8hjR9bKwWJV5DDT4m6hGT8ZD1KoP",
  "key16": "3pp2uazJengrxS5aBH4sVpAhRCbL8wDkzPVEmvHVay1coTU8MJfRcDfCJbuyedCBqMYNgYBn6YNRzcU1qYo7choX",
  "key17": "3eV3j7GeGx56Hz7ELQVL1hHviA73kXd899WeQScshDi5v1VbvyHqUZTz2qdPJuT4RLa7hu57gTaGwqffiLGCFtEm",
  "key18": "prZHw1kjvn1qYDmo2rqQrKxt4suJkFm54fa87Gtf111m9B5zh42xnxYsF7hX2AFVbM6hvb1Z32GFVHbWXVUvSET",
  "key19": "4ykAAtf4ufmPmPTpoCCvJ1bvVY61ZJz1Gx2y13CwBiucKDQvK3aBAEn7ABAkr8AZohemZ7ThZamnQwegaERMmsJH",
  "key20": "2abwsBkZTWQUvaCcCTfNQRQJcoNnPnEj4Qa9RuA7FhxW1wwVBEKnRiT2BP9aeBDBEj6rLCqPw3Tmo4uoj3Q5xnKJ",
  "key21": "3kDmwiDzTxjPqWv34SgtY3J76yKP6RTuzVNijYFgLdzT5G8qdJVTnwhxXnYmgXHs9PXMu2xqBcb9L96UgLtZMdsY",
  "key22": "5fyZNV2zwVuhCS8A7B7Ugz4SVJpDDtwHS4FeffmmPLH173zDNAZzrF9ZTWC3ctRbbdf1mrYHXiE2MCZuEF4f9szb",
  "key23": "jS7xjdNLx8yMndfhPiTvRJL8xA4McvCsTqv67ZaRbUTY15ZiNrbCCZ48u1oznNJ9Nabw4yM45gkP4mUPGSYxJft",
  "key24": "4P4qZFmnqmof6HiUqqyA8RPmGWm5dpCwFuWogv6mXqAZEKq2CZ17ij2LFfAokY5QzQrUZvh9EVQdT1NqS4dB9LH",
  "key25": "474jdDhdkQDhVuFnSc2kfK1MtduEpAVcmbVTaL8NmKNHJGhQPinkBfK2ZzB5tkGZbpxPB5UjU8v3ep7iZjCtUQSU"
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

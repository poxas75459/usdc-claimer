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
    "3jyTuTEGtaSWaXcrcnB4eLSqLYHigsZ9Fsyz1AWiRP6TrLMPW6PKmGbuHCqyutR6i1Z4E8s66WexZAoh6kkxYGJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b8Kdy8a7nAeZYbdVkfE8qBDDUokVbh5Wz2vnhm2rWWN4XUNcrhBzgnUPSHCpbMSjwVMhxnLx712pS2mcnJcA4B",
  "key1": "4Xhhmi1Wh9NhYypWJ1Gn3zFaPkM7WWTS9ieyTChDigxKXLzu8eJZidGc3WM7vjvrKkPpn2XwitM4wDvTxM2oCuVa",
  "key2": "5En4WSWSpFcrm2oCD5fXkbZzHB9fr8GhUVz511CDLaQVGB1eSnQLonfa4kQ5KmwpYNhipM99spx5DkkUrXapqEwW",
  "key3": "51miQa7ZmLoorFffxPd4CRzPQFq8bDJmeBhK5wiqUouKXNSMWdHR2TGCT3mZpQidsFEYY6EfQSKRLxHqWMjEMH8d",
  "key4": "3rJW2ZCqCPJfncLC38nLYkuYNd6xEDaKmA2R44PvrFE4iN9CVbPKnhdd9tNqwZ5DJkpQ2M5uECA245ZzY7uXZBSz",
  "key5": "vg3RoxJDj1tUJE7Ex7vhDFwi5Kh5GYzjkcwcDgqAuCS8QD6t9nPip57SQybwqXLJvDcKwqTTLm5msZzTfEkgMhX",
  "key6": "3NXWJ8tAceAcEJuq9x8GUxLjFPA3sLsYbkuHVTTmyerbbzigmxi54x3Rkja5kyPRLfY2CoShCr7Ke8em2oL8NBg8",
  "key7": "32KSzY1zHHKXvFC1juTf9PypZSNRexf5Hrm2HjnsLQLNkmZysRRwPzpsNS9Fw6QnL6vKPwEHmv5PgstpVT3Hxy66",
  "key8": "234K21sZU4px64pUZxmeV5nY2RghQ87kWBse1Y9xAxMgUuDEgfY71bGE2zUuGeuwXz9cYd2S9UPHqZKvbrhBbP7i",
  "key9": "33A48cLAnHD9HvS1w4fK1SbByyX4K9mEdA9GcVdo16r1Z9yAR9B2gTm4ynuvaTKVqGyPZrrSPpU2EA1zTEyrz1ZV",
  "key10": "tsiomKRWLB5nL2GP1BSrjPjoxVsvbJgQum9sHcmDs5xAmRZvvu92Asy9zDHAe6NYCQ6zwbSZdUHwTMA5UwRLFvE",
  "key11": "4CTzVuxedtRHceRWViXpA8NdoYH9MLERdAmeCSWnbPxNFC7E2ZmAeTEB3wxa2QsQUa1tfwcAhCmQCb7QbAd57kSL",
  "key12": "43uTps6rHhUew4Mz5sBxoxVdQzFgPN9uXe43A4FVU7L6Wt1BDHJg2VPQAQEu6WcGcnXfMNg2wKQ9gLVeKGkctzfa",
  "key13": "LanMaJ4EJyzhizSd2qzXrV38ga2HxCy2LD32RDCqNjjUL7Fwk2M7itMDcjuFDtvV66Ygd2VxiuE7HcqEXgRcEuw",
  "key14": "2XUx7opcRxZcCpgbdi2pTSSngPyiD82cdBbfyoLBFFsH5QqUffMDeREUweLyNWehEoLiwu1yiqqaULS73FLhdxzZ",
  "key15": "4Lb7gJTK8tritu37ocdaGZNSmnSTGEqV7hfQk4WoDwpevHjL51yDnDGiVVYTtwo8Y5Txx4afnMhKghsDNN2zv7AT",
  "key16": "55BcmTqrKhc8o9JAU7odgHKWyKsb8CxVfswhFcX4nmB2b2Q5AbhLT1Rs9FYaV4Nus2zvdsbhYKUF1wXAVb6xEphv",
  "key17": "3CzzAUVkXUse2Gg2NAkFWXWzG1SyFtJ6EpMQizkzjMSwr3gk1Doqg3oCcJZmyP9tuC7AioS5jS4EAZB6ssHESVNR",
  "key18": "355wiKhboTt5J8ApTJKYJgw9XuqgFpkzZ3ep1R9cePvB3Et5RiJYknU1RYy3hsuXNraA18aeCzEjtNGFTkavhmVS",
  "key19": "5cLx4aHBpyFMQFTe8z36miaHQJkJQZUQJYz6pLYGoPmfmrrPnwM2sQykSL9oMvnNaYeV6w2JCVnaEHFuGp6zxzJS",
  "key20": "3T122E9UX1Hf9DAHqh25Y16CPCSwTNr9WEkhqfbQ4xoguMZri8DwJYBLPvUnmr9UVtHkK9tikbVZGPnivqXU3vqX",
  "key21": "mZxBsuen7W4XixdCSCWCtPZCB4jwvnrwfzyLG3ZoMVbtpKWfTuaXtmCLT8edKFuFrdgfhBKXaAua9t7BaJCa9RV",
  "key22": "ndz6r2tCivTznCLXLKrAyJfmwGUzdAHCNN4Mno86x4xYDupwU6UWx9jooZ6C7GXAMCHgTKEnBSLocXhNgQnD4sA",
  "key23": "3ctqKQbvShgd1nk42w4bnKLqLxUg38YxrXx8UEU5JR2Jq5M3XyCYRRUaG2NjzRjF97vKx2JdrHusBSaGVGGrousM",
  "key24": "5zwM7wcP5PA3LwdZEubKZmp4ddVEqBnBzVgghzu9atxQLhh5C1xPQsU8JXmbnp2KXwYCF3L5gnohwxBdt6xbaoi1"
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

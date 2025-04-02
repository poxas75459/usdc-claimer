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
    "xEBjDHeeNZwu4F4gMb2oPdprw48MacjBoz85kd5UJXx5zVMzHxtNVq31GhjADowsQdEPWjV6NNQTj6dF8rTSQNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMBWqDNM2cgpnkLANY6Z3F5rafsVSR7xgUw5T6uU2fFZM5s8AUBoy422mc3GVDxQqoppozfmZwaFXZX6zCy1GDw",
  "key1": "519DV3hPgofBXs6tCkM3UjkptqSWPWgVQyF2GwLwUuAXfgbPG7Y7jJEDTwm4ES7YNcsXpEcSpgPeVCEZsJnw8x5A",
  "key2": "5ZDEVexRxuhpNevjHDgM2acUhZeBeT1XwuXxpxs994naZwtGvpaPMzqPqHMAqv23rJJTSuoE1T5hFgnW3i52shDa",
  "key3": "39UMbXzThG5fYtPgmtNdakF4xdfPCxYN7gt1j7kXwyPJnZz8nvCGxxZ6EQn7ZXnqwsQYTdkatefuVKXRAhEVYd1H",
  "key4": "5RzhyFhEQHbt8RBULXXQQMKCUhFsVAUXtVjPoEjAzGATsiYPyW68ZMaZ711uEDeZ5Ss8LRyCNWXxeGhTcY8ttivj",
  "key5": "steyhJkxMHssSsZvdiVkJrw5YpjJFuDexphov5EFfCohGFpjnJBkYopicXnWc6JZwbC4deqsVeRSk8FwDpfCC36",
  "key6": "3KniRp8HpTHUGQvZezC9cjEZMiL1T1TmQ1hmTrYmdYz5kSgdgK2U3XJbBEEdVhCre3meZtzGNSCjqP1QmSXJ948s",
  "key7": "2wzhV6F6y54emQRctjhzkhYJRSf4vUJUQB8WDjLR7NU2YJ59rudKKWXYyQceFEK49dNbPQjeQhgHRF6MPpZtpMSi",
  "key8": "39yvNV3t7JwBTsPEG1BR51DhR4Y3AcmHWGBGKEpygzhwAJXp73gHra8XQxrDSe8hx6xjFwYTFxbntSXjqSJctFFD",
  "key9": "JNH87Ygpd8LgY8yqPPittnqyeapjS7sT6ojgTG6oJqzvJt7WQFGD1Y52112H28njKgRFZ9Aun3zuVkMPEZf4rKe",
  "key10": "vHFiod1hSU8WTSiCAeDsV1WQdQUePUKsUjx3vnoEQfYfZ3FdzQqWPtz4avU5n9CTibLePgBLPJKPczUEnWioC9N",
  "key11": "3i4oFKWM74Pp3BH2qZ2qJAwoD7FYR7AzVsMSrArztYXhM1DfcBdkVvqwsJSqCebEs5TXxPL7d75HYnMrgfAjaMiK",
  "key12": "3o1GPbP1QH5ZrJjk8uGgYS4TFmqCcjvPGwTXswtyctPfLgCHv99VQCWN3TATCxtaJKY1EJMg4zVNPLPfoKmHtuBp",
  "key13": "24eHbJPuMoxJNhdMBFnSnSL5sGGazjGWNiQ2L4K9Pqruy6GvdA8S6XskG432v657J7TjT3t7kqrFRUeXQDMHRVLv",
  "key14": "55goUL5jPvWUH4PA3UMYxSGgKrE28u6FJN7ZpChzo8kN166juj1pv7WD6wJiZQSXnL4Po8Dndg9NWYTHT3HsRMX2",
  "key15": "2gMTVEAc1z5V3M94pRBBcEMSPZacuVeJt6TDZF824fSsMD3cxA9WdTBPmCEYQW4qjrvjJYAu6AfNXbdF2nuBx7bi",
  "key16": "3sq76ce2C9jnfpq6ePL6pvn5mYFVryZkSVfG1UM44ACqxSL65FPNgEPRE5WfL8epjwuVXgNGXTKmQG6Br2nQGzKH",
  "key17": "5P6gSuc3BC9Wmg257bFa3TnMvk9j3G7uwXzBqq2DMW9F4GZTHiAvyGpDUgUgA7NeJDEQGj7W3jwNFuSegT3tDeAu",
  "key18": "21u45MAKdpYVC2CaFqsQMhdHx2ZpcHWEPeWhzeQKB7JGngpJR1K9ZDyJmqzhBvN4Qh9GsrpFqizfVS1bKML6Bdyv",
  "key19": "5WjcwMFLmYdQqtuvRN9PsER5tpyGzveoNqdNtmhy1Pr8P52p9G7p2sdkwxdLjPSNCDFtkmerNuoWQQvABkCsm3Uc",
  "key20": "3tMdBP4wcuTC8KASsp85TLdvBjhRgcPEKVdf6zSqDPHqMfuwDtweRyDkwu5G99VEVPJCCCFAifuViTFqdiyQPeMM",
  "key21": "Rckrygm3Ro1jNDVyhLb84FSfMLLeLMUcPF7CfMq2ws11KLsZz1z1bVkmhhkacBjVPEy63KK5zdGrcURNJbBKv4k",
  "key22": "3XJA1AR7tXqRLm97kEe8PrL2YLyGsKSJwRpwYU5oALsGS9fwLCdxADpKrnedC6s4auei6r3znDPPSx1kWQQcUNzN",
  "key23": "4wJKKsJVhVXnTUrWKcmjgiuFfPbwGXEZkNDDbziRJ8sHX2aE5H5oP4FAv1jHwNJtv5em9Xn9xoM6xL8yvMFQJasy",
  "key24": "62r4LBuSzVnm9S4Gy9eka6j9SKMzNW8WRcExsX5c399QPES35menk4Y5iUDAJFnvVraqo2caR5NNizzYP7MWLUAs",
  "key25": "4ouA8jSDLqdgxk5gTfLiLXPQ8fQm6JL2Cpi9dhfQyVi6fQFNZHoAseMkfEEprtHiJUgFVroPD9NqDeUfjkzLSfFY",
  "key26": "51BXT6LSKnuFi9r5R23e2dZrzjHtu6N7K5HMxWcNJN16VdNjbVxe1xbL5oThVu5eiNcnUgaDEbUJhwKpYuQxUFKM",
  "key27": "2RAcsthBrCsWMsA8y2uG7jJLDYawjB1bzaXTbfwufo6QrzUR3ESU3s3wGwG1qhiZsKyD92szQoDjPC6zsX3wKA5Z",
  "key28": "5HRtRYrXsR9MzDs5hrAGRpVjpA52awsbiCq8X7E4H9vvrK1iQFKnxhcM8pMXeaob6v5812dyNWfgHtwK7BU5WV2c",
  "key29": "27Ac51DtdkWAS3tAvnDUkAEaFUJ3G9nJ3xNARzSDT1iKRdetnZvB1krTGzuTaCwVEYJrwDzJLeU2XpkSpezzMKfq",
  "key30": "43kxGbjQHiJNqRJqEY79ixTRJTPNEhwLjnuNkpZZSJ2Lqw9KuD82nZds2nFq5EeejzD3c5fGgBuKvSauZDDa2eiE",
  "key31": "45TWUbegWjseYHDhjYHjmymGjJbJQ39SEGXUfzQBLwmHx4RqMvjfVnYJQjNMVSY5pXzbRJP6khe2z3zZ4SYt75Di",
  "key32": "qU3UiYGhs289Zf4DvxxvfPDAfphP8uqDHm5ue2aqZ8vb3ZUsAjBvAX3aAmeSxNAKVde3vhqoSFy5prrHrkMdDAC",
  "key33": "3BMSuYKbEh3vdxzH5RCpfQTG7zxn3f89t5Q82mwcV2xJ3H44xQPBqo5L4GZuWRKUvhudNUrey4ET4gjefkVGAeeA",
  "key34": "2jgu8BYjPnmXWw7NtzGMQuoPMxqMm7S6bm4nfAMQiFsfzi6bAzdoavVBdHq5nuVp5qVGMpdpoKkELL1LJCpGYPyU",
  "key35": "4dYeFuC7eFKsPth2MRxKh7VJ4aFUhBCXoD1oc5bSYGYW9csnDjnqK2gwYKk2BaK5yiPML7axosiqxnbn5dDf7YfN",
  "key36": "4JSk3fKFBBksaZagMmbaTZP1gzboMi26WW3DAoBy3NEwfE86FDbgUcEKaFWhoCRwp5X2WCWYJueVfRERHA2MXeVY",
  "key37": "36UisVWtuKmzUFESoU7UVchonxXf9epEYysVwWx4jDPuwAskWzD7gQqm6ors4kLiCcwyo6SdcauzzkpXTPsgU9tt",
  "key38": "gsPhrR7DGXhnyj2zHcCw957nTGXNBcdCUchSANUg1VK4nvQ57bHuQaWuxMpzAetCsayHYBwaMbrJfnik5yQ28yC",
  "key39": "5r6R2JpAmQbYwU5tBniSRq9B5S219wxHuSZgT2C9P7ywkgCUtBkWhyENuRFESs3hmKcHEFpo3W7Cdc4SyEX6Az7n",
  "key40": "3EGWzZ4uqLLBkxyDvR7Avg4pBsWRHxEMuKkv52g6kW5DvSzF9NXSC38CqXL3PFFBfZX9hQjuFAUypqD9ER2jDT27",
  "key41": "32QKerk7rBvxNsvF2hUbXV2WNLowX2yX2e8kUfsjUzNh6K2af3e7kWujTVLSNtK3fFuZ7qSPj4nnYo1h3TiGBSRt",
  "key42": "3LYXPHjXgiuiDuNnTWKws8cYr239y9pVJoyB3kPhkwMqe6jTAroantfYkehgJztohppqn9qTVCqdUtLHrFL1rK33",
  "key43": "XBJ3BGPsTPsomzhoDVLpPL7zJqfnxmnYaTTa3mH4AZcykHChUMh9vmYsXFFyyorvaXw3724wzzJrLtydSmSAXVT",
  "key44": "5LtkdMKPRZEP28wWe9TiioNLgnjxs9sEeLoSsrYE4V3ETvUARfQx78GpHJtE5XNf3vm97WuvibuQEb2EPHYxpApo",
  "key45": "fNgRTYUgxnkdG8FmiyGJZkChmY7FRr9vbeBNNKrK3JxfUczE3WjCoXuuSFPuvzaLAvdkW6eKfgjH4KB9EwCPPax"
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

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
    "5YxErCtaiKis1McsFvaymiWFMBPKhLFuwTezkRLnwPjtd3Am6n7xvZcvGvPaPnvFaxTsKAxgpLbvhqzQkSyZrekj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hAhBt5gtZXqqPASxgGqUY8xkTkuMc5zJxt5aAV1bzrjAXKZgE4qK5evJECbuRCqPDqARwr6zteFvVmJSggFQtCz",
  "key1": "44goiRnmwt7P4RLN87Z5vFmcQA16AaVRXKH2XVYaiv6mitRkqFi9TBMEWdbTMduJQi96XBNVbBTXLYXg4pYJKQGC",
  "key2": "Hv1nioqtXWwJjfKEJufL6T1ZvRR1xGKkTakFMkMijvkwyeQZRLtcBGwnTnTYLhXMZNkDYSqsXaraPpKYpN7HtVs",
  "key3": "2MLVE95B24j3jXhvpiGLHL63qVn9ozaE9PcyggzRrQdtQg2MBViGv9vJsK49oNmZVeK3p1dgMQsZz7ZkAkHYAC9",
  "key4": "2UGtSNAtGmPvBfStZR7t4kxJhbszamTTeSMGtyNQSCYKc96gviB7b5YSK1RRc793j9ApT4GfAXEuZxE7nKxgZLq6",
  "key5": "5ZXpecWenQbzjkDjRmwpg8V37gyAS2Zs7AxFZcHag8q9TigrPLyaFESimUYzjngu41Zp7HFYNr9pxm6asEuqU3wC",
  "key6": "3WWZXgs939MuU4K6gpwVxFbxfpkp5ddbUdUTnkCR6vJfJkmv7VhNbLo9acBSc5QBnW9q7tYoyKbLd65692dtdYMJ",
  "key7": "52vmqRP9smdZPZQKzWwoymBfup8pjNJx588B68BXCSUVPXXtwqyTFv6nfs7TwYWEpWj7F3t6t97ZxxkWRfNdDfWc",
  "key8": "266DKLP9zqY3mv9dcjbd45u4AS5kkDoY5mfRKx3wna3NbSxWNCxDmFavargH7amJ7hHSPqX3V4AfrUZqY6eiYCAw",
  "key9": "4Ap8XGDSv223Mm9QE77gteeBg8Sw8ZAkLvwiQvSaK58FNxDgpCmMQxUm9KgtYkqy8eXTttwxJBPHdHVycg384FHp",
  "key10": "5zz6bZk2myReB1iCaR45VvLbPFcVnz6MXPX1WiA6mhuDJr4qRVZZoQMVajNMRCSk51vawJNxrxM8gBGXGkWEWquR",
  "key11": "4aQdeMwBsXG2AswfEejFj37hW9auc5NAki5GxoDGYQfVxCSTosrEcEpRW9MgCVeyFttgPk2J32VDD11v6knvXE2Z",
  "key12": "e9xSak3HeywDmzgmkoVEeDKDRmEN1eUWdGboBRMVN1eEkY1siMVugbBvzWL8yYL6ksWcksZA9jjJ2pMtvyRWC45",
  "key13": "3xgfcHAgBPom9H3fZpjaDJ47zPXUWJnYQ7a2g5g9Uaq2iG3jKcibTVqpVhM8Q67VL4uPWund33gyQKxiM9ZVY8g4",
  "key14": "3MMezVysdom5g42q2sYauR7WYCe6MQ9dnA82GznxQdshjYvPipMBzwQSn2qApyMFfKsQQbK836v9R5bm38nuMG9f",
  "key15": "tgfjt7xpUtc9q67YP3zU64hiypEPJmHN7nZud8svNhe9o3fYCCNxidjsfVP3191Ldqqh4d8jZN9JoswGeDzUrV3",
  "key16": "44WhKsLJujasreB1fpEW2YpVhwfComnsMDvLyrumyzkaL1GzrxCj7EGcaQ9CRfaS3dXu75sN87tQQiL5k4n4bo3o",
  "key17": "2nwssdMe7J7jTWDMtYXKgKP5zdHuok8y1ijnRCH74qSb6q3tenane9hse366XYpUpPUXvkLmShKjqVK3dTGvDRKu",
  "key18": "3jmFLDdyYh1nyvAKyqgaNUk7uQDmuX5hNqboekFTBaRZEtZ2oiwubnSaS49VTmfMzPLniUbmBfepJhXYMCd1TWJj",
  "key19": "374Xq5B2LoucWBcWEGSM5LWD9a299Yz5xcBQmHsPDFU7TzfopoGjQyyT3gmc9hq2ZAFrEJQa6QNmnEzBqCPEcjEa",
  "key20": "5Y6vzD9GaYKkZu9b31EH4oYNH2j1cHJLTAQXmNHNC7VkQ2yjBHxixh6PrF1mGak2Cyyfybt4aJxMgXWYprgGEqh8",
  "key21": "3PzecHhiMt2RQNSWz2H1ZeadxmTt46HV3GNno7utL2AtMVoKxV4EYZ58jrkwwpeckMg911fxxkPXaHK3rARU4Qkh",
  "key22": "5oqxbGj246JEJFY7gb7zasCBWA9NjwE6r1n7e2FNdwgJAXjqUaTELB8p3PvNHCJMtwpvGd5JsgGziYXiLWJGXkC9",
  "key23": "LR3gHsGTLcHsV7JUKVJpZxumJTamJ7frcAB7sffbSe6yz36jrvqe5pSt4FGmKCLR7oaNSwVJdy8mhRtY2Ehwejd",
  "key24": "3A7TygGH12BQkTWMegwAVpkTyg7kQYQMJWJaQEYo3ZW2UFpRhzhWMKMMAcsRvVqAJENZ5S7E9oJ4ZRNsmxutwkAK",
  "key25": "2JYQyQx4N5Sm2Dks7NDgMin7P5JTG9MUYnRcA5wjBERdvQMcH7JdzsnarcR2haYd9jCeSniFXY2nu5v8LfG7A5TG",
  "key26": "5ENUqxf7CWhE6BWUnmwmaGQVCPR8zJfAb8xb6N5kyFCeHbitFPKidAHZcBX5UQQiYiEXvsRqhCsTaCTd5mh3CEKd",
  "key27": "5o9Yto3mpRGeqEEpTd2nhVxrVnytM8oqMBQ2JS9vcXszJneN43Sv2ZUFsbTTvTmcacCPgKMFSLtjL5SrdWcWyXc",
  "key28": "5W89nsM9H7XBvRZHrCAxBZ69izpGGA2L8VYTnUbJiBp2tPSwE6E2cRTAa5g9y7fGXGvytsWf28PHd9sfTcxm65vz",
  "key29": "2VV654mPuKi4ZV1rgJVaMm6RPhFyLMxLzT3hB3R9eV1t8VkefP149cgT4Ni16yRo6WD6VXhwVWDkNfSngZfBQbJC",
  "key30": "2hdWdRuGoCJVLpLCu9WjA3kkRiNakLGfPLyLguBzPaJMoKzCtGiBcz34gMsMNDmqsYr5w5UCSQ8JqwuuJCthbf6N",
  "key31": "BGwyKzjNrTQ7nahf5WUHhYqgQ5f8Ur9FJEGZNFBJMXMHdum7ukQV4wU2yzxWc49jQ4zSqvLZWPTUkXgvqGXMhuX",
  "key32": "4DnXiEiHD65FhsQeZQT3V6zxad6j31sb2GNF7neBWySDWciya6TxSspWu9aYDj7pLXJjQfJ1NcnvGqCuDeNx33ui",
  "key33": "3gALBMEGqQFueqQEPqAPR5MEnmWct7HhqnNbQwVcTiUqXbhyyi52M4rpibsg5u9frwzPpQdZMq5h1Qpz4zfsBzBg",
  "key34": "5YgyAdFuyP5bpyL6DwDGF68kmC41UVH44JWBADvwdNU8LAobkjfeQ1MHqjiTSUp4jKa3equXrH7SaWbLvPs9eJwm",
  "key35": "47etMJAysqozZjzz5S2xZd8nqLMmYAMdwAhzUswdi2mpgt89MgSZYGtCWouqNhKjbprPpjdkk91M9qS7ZWickmrn",
  "key36": "5wPbj3nBht4ScXtDUpBbDKBZdUpoprHd9dofh7VwbD1ZV5sEJwqFLZoLDNQn4gsHAdCmXw1fgkSnbgJjjbK1pibx"
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

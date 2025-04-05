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
    "3w3CSvuEJdjmjMbupNyFdzVdXyH8yRHdNLWf2fDHQLjdFsvq1TgaN29LM54cUqw3hcAwzFuVRPvo2KW3bYz7A9Pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Mx5AYupWWaMD1ZZj9rTvyd7UcVdUwN6vKQvb6FZ5TehwjR8h3yHH3J3QwAHaB7H66DMy2sdggWWApyKZ7tdtFA",
  "key1": "nFJx7NWRydonHbj5w1cBEMNv1Pqe8eGAKVoKjWCDUxeX2VyXr35yDPGzEqjr5FPVAu4kGSmz3F8D1aasKeTjqde",
  "key2": "5enBjAErP925jQFotfNy21xgpvkAVMWwwjM8RBPxVixQLtumVg1kWJEmQhoszTtNtg6vQUSGRf1nh4wHsC834pmu",
  "key3": "4bWUrG2iJnRUfSdYE7f8Rx2XDdopwHUDgZXWFBdS7SxZQEk5kNhAGR8VgWWu16Sb4nE4G7ijfDZWB6Q61NVRTKyu",
  "key4": "2cyZzXm8aQkYhfVr16yByGjrqWwktcbBbd8VzSe46iBMsnGH8SbTek4tLNrwsPUvSaWrc1UxCMmzCmTNTj9drHss",
  "key5": "4binEgaewTNj4WjqyVPByMyohXQf7tjTwJfqFJV6aKFsAdGuqKN1m1uHQT1LrMmrastLMnPcU96Ar9kGTKDXgYQy",
  "key6": "4sHNAUG6ZTrjoXjEZjnZV3LXxRruKeB3a3Gv5ycUfDQKwiUva1tWxhH41935PxkKknmmLvSLrBRQ1iPeYqKCnqam",
  "key7": "4WyWjzUKRUPPxgU1nm3SoRpdnr9faWr7s9j2ew2z8LgHKzuHVaK1PeD1JrFPncBymuNYVE6XNJ3xqivypeXJsuPB",
  "key8": "Euy6pQEB9GEFx7doRjVFXWKp5kXHaoRxoampuLyCZSd9zCpKobeDJK1YtXngbSfqmsA6aBaPjzQQfMmYHRLcr2t",
  "key9": "49Wn642N4ciKwmJjsWjWrehFrw6xH5JKHowYCWiHoxoJq1Vx6Bk2cUiUD8zv4GCxtkNkhnXmayMxKxenxEZS1cc1",
  "key10": "4Dr5q1RPnLMaEXzRmYJ9FW6Avatf9CvHKyRXQbSEosYinc766APMACAxT6TmfS192Z91Fjdz8NJA7Kn8sCiM7gCp",
  "key11": "3pGhcriegWw7dn9ed53gqNTyYgEP5Sfor3pHKbWnmhx655noofSwy8X4Z1sc6ts3GGErQAquURebYbrRUaZ7xPgj",
  "key12": "3T4rLGSGwkaLLwFPi9wxMkHe8PvvKvY4jpL2Htix7BbgHtcFnuiUA2sqEuEsVBY9u9cm7khN1h9jRXLKUXC8ZSwL",
  "key13": "vo4u5dfL9op94A6o7XFxLi9PCAQNRkSjByURXvNgiDdtrY1mAq7suZMx9NksuFoej5VGQUfaGuZpQtVKWLW777q",
  "key14": "4dY7jYH3qaMLsvZzyTqjxnHi4bTdmw1dGJQBqBgREDat1ohtNchNxvoYymQ8YcVFg2jNotamkbDEwCbAuQsvrgYi",
  "key15": "DjyyMiipTnCiptViNG9WwKwmE9t867P8ZwyPufbSyed8wpvneaomYa5ZLzjZkpyQ6qnyAnnoPaN6Vczm8MirJYB",
  "key16": "2awtUSbw3AegVFf2FeAQc7jUVEf1A6FmtcAXoJ3qHxMNiwzBqiFFi4QDz5ZoFpXepnjc6NyqBtuzzB9mSpX4gXUC",
  "key17": "3NxsHqiWHGHXuHpLvCkRoz2egXWeh73t8TXoT19WicB6zskQ1Dz4Pjn6bjTQLVBG3vn8vucXTBD8jyEsRfnfcn8f",
  "key18": "4eZ6QqDuDEvc5MHQFv1mD16BQShESaNyCDTKzXaNbPKt3HCxHQSCQWEnFfCRLFa28EP1sEcMZMtUJ2SPq7QHp6LR",
  "key19": "2dEbawS55ro88tjF7eZGpXhUmyMR8ZA83KirqThZsaRhCJVbgUbmZKvpySRQ27Zc7BcqhxWcBpWmNqtG8JBhZzLL",
  "key20": "UmpjG7nnGR1GbNx9MzhVr2wYUrHTVRkje1mMcjKcycYGrs9PkpS5D9MaGCymVDzGkkNUZWiQTT9K2ZHyf8CDvim",
  "key21": "4fddiBMVtWGNLpvrcdACxoBWXFNwLeAU96WTy261pC864bhb2u75DqeFa3jLc7PWHfWTMCufL3hZd3D9354De5Np",
  "key22": "5zfKv1XbUtE11WVCWXs1Jvp3aidVmmjzjHrNDPk8GaJKbx7CPzuF36uU711BXTTDm5yysGoEM9jH9KLzUDF1UtnE",
  "key23": "23z9MYdXGtSpvWksoMHMAfnjNoZdFbWYAFvV6VtyHHPq8dRnPSCcC79PAZoxbUbByvo8uWVdigkZAcN418LiRkt8",
  "key24": "5SkoyDPjvjitJHXfFRZzvo2bpVang9kX8qsb3wMtUs5pLiEyjrtAGhqMxjpyLzkNq2gqzZXa7jTVVsMbZqEnyii7"
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

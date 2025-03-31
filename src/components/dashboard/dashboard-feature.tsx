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
    "5UwjyGRYrBrcmzw1uWaz73TNvYffPNSJK5EmYy54Xd4yrgdemD677jBhs47aQ5HM4DE5V8Zu9DSbhzcp6hLcSfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NpfhSSeVZKa9GKfR3hKTCrMErT7qNotEZV2XBkoEbGuZ4Xx2CX4EcET7yufxL7BUUjUFgTHvvcy9w4Pj9aNZuHU",
  "key1": "612ofMWRp9HxwH4TEJSnn1fZLsWtjeAxGaeaaL4LLCQu6Whkith64seytoqRtyueeEPtQccJVChmHFXgpfLJ78vb",
  "key2": "4rms2mEzisRBxrU6ngS2vCn56Yrr33j47jdTVzfFqwZtNPnRawiEhvfDgqm5GhKrJS5o5x6UCYDBRzJvVeLWyJes",
  "key3": "8iVWzT8yjGVfwYvky8mutqA816ao69wwh9bS7MRaBMC6HCR9Kzf7VbXqrZhj9rwaei9XixzcFYmsTNBKd8zHQV8",
  "key4": "4zEJWriF1FdjmTUXqAVQBNMiU6DygH9UFNtPLUHfnY5SC2dUm69jWXfxeBgGRNjukSpfKGz1QnRmbfAj8Pr2CmNG",
  "key5": "2XA2GpBkKFtK2DFcGVFtUYK39WuNf6qDfRPDi6bc5PJFr9Gau2F6W7VBq2hbL6y4XgvLmVimDWeDKfwtkvRx7fWw",
  "key6": "2wcqrS6qEUFbvmeF933Arowv8EhiPzYGCMqE4NJoVC4rdgDFuKLqkhAe7DwWxLJs6Z7hrvF71beEXnYYb4idA51j",
  "key7": "3FkY26rbwEFgy6JJ2Qryk18PHxu1APdiKZdjNUidxp8yULLWExj1aJxDn2knEBZqyFYSyW3sgTXuVTjBEVCwJ1Pv",
  "key8": "4RQVuHitPHAbDLUbrz1kyLYMshyrvB5pQrHhdQMTDWwF1AQvpkLErXb1GS5nW2AnFFSEYYCi4g4JRikcDkLcvuKA",
  "key9": "4TG7cQfFUwyX2oB3JhGkScxZDnWhxgBGZnsi2YEahQDn58gD4pmuJperRVQT1ruKYhRx6gQ18uiz5e5nd2tp15Gn",
  "key10": "31HZsijoDp2PKSzQC8yPDvWobv93uF7Yxbxb7rBeHRNvuxQ8fMsuqMpvpKSWRM2Sij4FTP6TWFqmjE8rQGzo1ofL",
  "key11": "3j7AjUguHDPJQ5hL4eYv1vD8vJKYQY92FWndoG21jJtE1Wsjfdu7FKv1nJWSsPc6cSLRduVPE2ySP8KC3qiHu8tr",
  "key12": "3194FmeXjUr6NGJBFnjoZhpfjDnWD4AP72vjVaCwLqzpaZwBooLVhXSEmsq1dMtrYkm3iqWUbmVEGNo6TDiCrtUH",
  "key13": "4syTe8PXbqMWwXw7wCV2j7MRQT6rtrBREm1uurQ5Y9RhsHmLy37NPZQu2gxgY3x58WmE6rAgG21K2AuKSBtZMsKY",
  "key14": "5eMgfLv4h5eDMzQ42oq3aZJzUDyDF7UbdMMdSondRUCBTUWWYEJoghEb1VisYRbdfTqQQPm3qrPWzkGoFBVkNJcg",
  "key15": "4xk5dv87yrTEVdwM7xakWtAEoXZzWEvtBF1ZHbaqGYwThmDFLrA5Zf1Rb34nj9AgmpsKPsqHCopXFWM9WopdmDVm",
  "key16": "4KjxkfdhXME4FJWXosDKCV1UbVLGpX89eN5ynDHQbytCH4fds8HVjCExTvC3trkmVDRsF1PjFz1QVzp3EXomhdKU",
  "key17": "2ndJ6WG9kWTtn1WXYnGL7tzUu4F5quUP4HzMpam826JpTnnGgk9F7atfQszn4SfNHdKuHwPy2Fyh1LX5qoJzFeSg",
  "key18": "Famugv8rbhwcxADLZUamEzVonZGtGjDq7Snaek89k93SEciVLGShNnUxD4L6wHJHictPwS7rpyAypUkj3KYoQ7w",
  "key19": "3QW2mxpqqKczDkNZVZsAXny96vSjvqn43yVkZ9dcsPPnKdCre7ksBn3iJ77vouG7U3zn7WjqiudJP4t5qdfTkJuu",
  "key20": "5REHjmsNpjuftScAozhj2jV8ZU6uWBz3BQRKvdKatshUBWGCfHZ8MpmFMQs5gtTUSWUGL34QMrWRw5AptHsKwiUc",
  "key21": "bA41GwtfXjW75YSLYXbxLGpxbm5WqjFVdXVqrW4z6ZXYiCa6AU6xYDToo95zAPrjxVX1KcjnBP1hfk9kAmoUaz6",
  "key22": "2xAqZRLrTgCQVhMWHZN85v6edpkrF1c2mpYc2rPu9q2QVd7C5YyG6ELAJanVfiJHyQ2GhW1XQVnvTqrSUDNPAdSP",
  "key23": "4BGZvyuLoyFfwJwyY9SfwKLK76GMMEfKvBeodvQjeHHG8zbTjFsLnp4Cmg9qsmxTLhziAywCNPDr1MSvtkLDayg8",
  "key24": "53eCTwCctQ9DxxqB37ApDgGvB8PqRTjk5jfi4XyYX6nXPGhyAJ1FzZtDa5hTjQhkQg1jCkbpuTPmDG4qJuCNfpAc",
  "key25": "tjyj77MZtr5cAdNw3w1McrS1uYE9ZeXW4je3EKdNhBpbd4znMfMCfDsxHx1M6AddwmFZdWnsBEWTQZqeHEms9eP",
  "key26": "3T5HbsoXWEHRvmNiFD5MSo7HZ3Fpbf5MGVtLwZSyKqkr2cESxfXW6fWCNje4UWKhSH6Mhrz6bdqEhddhHRhqjRxa",
  "key27": "3UN7xY12A7Ctj652GuwhNcQq4PJsTVK5QgoNjfmzKyFKPFUwMi1CVZ7ynLnLXyv4HWLSqMJJVQwUTNkxWqn29vqk",
  "key28": "5bwCi8GQnCbXKzX3ShtJYvLZ7q1PZxi1BjJnGqf6kVagkTCtYBenrraZUun5AfyY5ybHuLXjqi3eseAWPQfw4q38",
  "key29": "5fM6Q1KGdSDjsXKBq5zHf3T54NY9geQ6UwUkD6tDBjkRyespDBWgqy1JhqecgNCEkFqctXhuR3SXHWZ3Bj3gc3XM",
  "key30": "5FnTmCqb6mRD3Rp1Cf3aQyYCg6KeYKfxg7MXBeckXfS9869FBbpj33t4BuuiYARCDCqkmxjXZDf79d9YGFa8j7yM",
  "key31": "gShdxffBzitLfN53GJCkWHx7a1jMsiUJMtRBBAVZ3vSkMRVzTka2Q5taT5vYz3TjH3DAMztC5Ns9Lyzfjj2Unbq"
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

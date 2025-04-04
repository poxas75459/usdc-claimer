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
    "23Wcnr7YFDgMj6SvdZ5WYBB28X12CE2wVJJqBiH1hmrS7tr2wkUGEeZf3hf2WAhg7rtSEDsqATjmZUFPtNwKRcaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o5pXWjmyq8iNzM9ZtS1DSEjbMxwTrtJuf2fjCeTqu1fYsed6gNQDgNxySUhzoLi2Ptn91CJtzGSUJoKfyjbyRQV",
  "key1": "2tvo1vYJFNVT6VanVToPCwPXV5NnSsmN4q3ov9y5WXufn1e4AEyeGyFGJYnwoDe7SPAmaAMzF25Y4GEg8ZYjHNLt",
  "key2": "2PELFGjkd3vGrR1o1wqGf12HNUQsZAu5fNKGxkPgCmaQEi8wZw32FtabB2nMEDuB85txaZvw95hztYUnyZxgLUu6",
  "key3": "jUusMNozKsne6rv9P8b45e5VfK584TtB9EivhiMKgKobFvmJzBxoapeUeVNuYkkKGvSwS5BufPUkgwKGxuA31o3",
  "key4": "4jHXaoq7XC3Rp8CbBiv4sM6fE5Za9FbFgBEUPa6XJw6qNXV3dq93UNyLR7KyTZ8fJhY51apu2f5gcDhi8Rg9R8RV",
  "key5": "5dhWYh3FSLDU5kEuwwBzA5vmoSZMGHUXCy3JqzfJVDdG6kfi2UuHQsYMpk9Q9k3aQ6SYKaXX9hQKmTV5V2MicCQm",
  "key6": "3E6Q54C1ckYkVdyoQnZM4tAornLx4NgDB1dNxcNuU1SsT1mgTG8tu5QJ7htHzUoXsJ7tiQ6zUpF8jK8Bd8Qsmboq",
  "key7": "1x861EQycVhvvVWQ5siptHzpv4NwArNTTfhkS3SU7tVFA7VpZqLG1KKvng4cgXios7L8NL25cqhGyNRGzVz7yde",
  "key8": "3HukpDnhcBKA8AzDrjGSWuDK2jK2qPyPCFiP6bvS4bfHbsPvxquDxLsYgfQYs4f9VUbZrcWEioRHzxedZFARABen",
  "key9": "5zoFV6g9i91afCNtoiP6GD3aXrM2kqEDCWR27YpTeUZPcMd4hgsCinHtwjZ6k2Wa3ub6RTnxNdsSFwhwg4PEnZVY",
  "key10": "WV3uh8K24qZxfST8gzU84HuKqfjgYiaDaHfFwfErLX46pwX3YtdyY6BrgnJdU6TYsn3URgqJqjwei5HNURUA9uQ",
  "key11": "3uZku7rUBN1JmDMkZaCFdFtJxAy7wFW6iazqzRbcCXwP2BJzGZscoZinH7KMYRGExgDGY9ogra6AHH5Rd3tkNhTL",
  "key12": "21kBVgddP4oaDqbpFj7WjCSpviDiv73QZYqM6yQjyMLtG9t271yy6KHAoqQ9k64LKJ6hMiFrDnu7JU3R4MuXy4hf",
  "key13": "tKmBYH88v741icJ3E9n9jfqP94hacTNCMqwXqKup99cnSRcL4FWgchSudcgs5jiNpBaurYZJX1meaNE7snB46Lr",
  "key14": "ZuTgZBXTLhkB5SyJZxPMD5y1EgLjKBMHgUNAgeQdXt2sVH5HixTQcdtNY96HsFpP5jusBKsUBSSyp7SgnW8M1dp",
  "key15": "3Qs5N2goiGA2y4DKZBHpKUDGcTfaQPbdECkm1qtqPXmn3c46iKQZnGRdwBhJK2aMg1wej2tJijKJfAZ8nVWoMKtD",
  "key16": "3Qw7jzxxaeiNuGxhfCuhhoVd59dqcE4STn8UQbBpUC55Q6dJB5WNW7nMaPAFfKGm3e8ci39zQdWADCEJHVCt2Vp9",
  "key17": "57KQyMNnJHVmdQVMrEE91ZPD7q3m4bL52pAGAnqrsMyz6vQVz5wydHniJ51mDqFt6MUDDkHNk3L9KtgNVS2AkRhX",
  "key18": "XyzSn1WwDWQWBLt4fwGXF3oEASxetKsWvStvT8KQBySimkFkUHX24uTBdfR8uGUqjMz8sTu8XemE2EdNU4e5kj5",
  "key19": "4oNm6YWxjNMHiw8i4BAW9179xQqNTJHaFAK7cF75ZBYr6kbSFxfPyaJqXKnMqZMpATZa3EnGHBxYtLn6CSuT1c7Z",
  "key20": "3YT2v8QhLSkuJhVM6rnYZ4QiYczv1qjMwYLoTQvEUUhR2cAQMhHg9ptZorNf4aCpJ2Bvs8Hu2cSEkHc6MbyLC2XS",
  "key21": "56cpoBAeA4jpDAGG8bJ4cD8hZMLNzJvRM58r2uhCgyVHfQCAQLoFaakPzCg9n4ySUnZvtxti8zNe4tjFfs2dPqDU",
  "key22": "4jaQDRaYqZXE8M3YcqfzqHWxBUzYaHazyH4ZUHh2dFCQmyPptaojosjtUth2iaRdBx1oh8obBoDdwBDBhMZMCYDB",
  "key23": "2zvPXB6KNvuyGo1nRvP2yVryqPYF8GBGi2mDktyvB9px4YePDiCZ7EoQaFqtckgHeBCQw1Fgoavo7hDQrZcsfVbc",
  "key24": "ckt6ugkyk2iNnnGDHX5rdmSLtAq2e81sEYdVSWQNMNTxDXeeGTQqjcsAzcmmDuGAwwEAPXwbkdax76zBsX1t9R2",
  "key25": "JwiiF4nueHnipSezPP7ewSjLqpV1DXrC2cf8d7npQgEgL8pTBGuf3YPjBPgKXsYHFi8dBTbNjwM8dS36DZmmVzu",
  "key26": "4gbw5uqQQA2YVgwontyTjVFCqA21TpHLkHdDDkTzLCjv7YC96uDjNhPoGBCWQvsPbSjnwviPzxT8Fb8YCcFj48CL",
  "key27": "5GjWNu4qazmhh59pgBS3nXWQENt8uwLhZHftpCFffeF6itmq3QsSyBFSwGSJAQUe7aoHTt52N8McWNcjK3fecRSD",
  "key28": "2LdKVbn7xmXwbCi77N2nnRLWaktCjFX9qNQFh4qLBXWJCEUjbpHLGbT3FFbPnmN6SbS2fTqdLr5fYX8nNXuoKesJ",
  "key29": "AD45GrCLmxS4Swfg65t52ncJboLikKnRfwY1ByZ4ftoX2YkKkezN5oBu2PVpCR2cSKyXYuHgG4h8TJ4cQpFf1hi",
  "key30": "5TBn5rjW8YTKv7dn9rf1BE2rav1yiwnn8g6Co1hsQr34siEzx17WD6q3MX9eGcdV5PqJmnaCfLbDs3k5t3QSphMF"
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

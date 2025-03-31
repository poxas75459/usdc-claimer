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
    "tpxRZmhtPzfehQsVWq7rbUAQ2Uw8Hvfz6Zi67dmdkqKNwhDW9yzRbTZ7LqrtWCb3YNcqPRAKrAryzuegWuHyFDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32frb5FUDcRQp3s51pqqfpf5tUnpFZ2KXkq6Dgzut2L13arNXxmkqaRFGL6uGoMYEyvapRpLodDgHMEsMbfQaPWR",
  "key1": "3GuvCg1uj4W7HvMZb5dszTGXCczQqdeHPUBigjBo2ysPfnTfbMwu7J3FzTs7bmYLi3tDM4J3P7hgifW95ckFvKab",
  "key2": "5HLKh3Up1in7yFPma8kz4jcrtQdVT6CvH43LQPeqbHNrR8xYCVEMgyGHtKX4kJevv7Kt5bJULyBpdC54fi3KFY6G",
  "key3": "4rqsk3pVe5z6pWQXAh8RnnHaS2BdnVjmELdNSKLeoy3swao7krVfve7PQEf6ucUPUDkvptZnQs7Ur1LzebNPRWiB",
  "key4": "iv215eoDotHa5NPwxs2kBUSXAnGYoP8gTHe7FxgP26VZWbWVQK5Xx3Ar8gDTo5h5dXDjw6LkRuUKDP52QoiuVhz",
  "key5": "4atBihKKCdPbBuohmjANFLQdoHbwbnehhfw2yuuN2qH6r46TGhXJSzXmUZSFRGho5EnHW4T7toh131hhUVgCDk6C",
  "key6": "458wVmYC3VyP1sabYk6ZCd78WPwd7vYRsqV7LdRs63Titt2KZ4HnVrWdV5VdCgQCbwG9fNHqoLd6k6ftiYAPSzUz",
  "key7": "58hcbWUCsHxEA5pA9BJ7m6UcLKDCK6rMb8nDjJJbsCFVumWR9gLHLeehUpdrTAvFmPcBKkpvoi2e7QG2zVBVcTAK",
  "key8": "5cTYrN6q3C4iJo5YrcpbqvKWWEFbkzP75YPxxBoPFmsqKfgq8rWf1viKP62dGw7vaBwSCc7tfv5CqrreA2sXwQ3T",
  "key9": "AxEUe4SA2Lt6tqD8Ks1pS1P2sRDG1KgiUxjgvqsvinotocdA3CgKajDN5VuybC1nka4KEiZvN5qjVKW1Wxx8vz7",
  "key10": "3Ng4KxtVhpcvpEJJi5z3nSWWpGgXAVd8aC3ARjFcLAQkk7fCLo9k58hDDBuXEpS2mYC2asSE8wecoe48k1UGksRZ",
  "key11": "5AV12pbWz9c3x8tEmsYEAsmPqERr9uVSA9WF4ZdaqD9yhRwg1jDfdHtuB2ForesNG5TFRzYxdBH2oHKNwVfQiLt3",
  "key12": "2g12bzTZgVYT8YHNUMucqRc6WSP7SWsxW2x3TCEhBxQTXCwJuy8ocqoLKtF2wx7GkxfMgZzUzANG7DvSPU767JjD",
  "key13": "31VmoK8Np9GJL8sw77qkhRpY5E8uVX8RKqDyPqbjsZDQXkpgmiz4SNkVxcb8eKm8MmMHFMTa3cNtdEVdiN4pReXn",
  "key14": "9SYNVhg6RdwKi6bse9UXBsBAPmemXp6UqM8SsQpinE8gWpPcWWkCzNAvLDKLk32ofWtxpZeRk4ZtLbdWSfeKjDa",
  "key15": "2nhdWgauDghdrAn716Bg4uSFasp3XevLACZL2qKyv8sZaozVt73Umhe2wAbhHffc3haFYEnmJsXeBoqbtefxpPwr",
  "key16": "23U5RkSw5Eb123EcfqHXbYPDX8hH5xrXjxj8jy4Ez5Rd1Nt97F4o3U1WUhmpf5HNrYtwHm1o3WkhrmAdpSSz63Xq",
  "key17": "2Gg5KrUnonemUkVXNmxyVytxnE9MCYcjA7NJe7AavUzQ5NcXifTYAaDF9BxRPZpHSMWkz4sMgUC7XYJEmCRcXGRi",
  "key18": "2mk1HBuwmJtfncAVJJPzuCmsxXrpjCHZ6d2j6mJjNG8HaqwmTkE6jAtKNwHy2fv3kARViVnwGfKWV9cNTVb8pPX9",
  "key19": "5wjswMqRHmhm8jx5Z3VUqdHUqazB4DpLKi6rBKSUnK8UzAobWBPF6ZyePDRMS9g79odT2zFyjPFCBAgnHDM4SJcf",
  "key20": "5CCyKyEaKYjfkk2WQFfssY38QdL2XX5ns62YBGEAMCXXjJrLVvkXcwT1ita4CgynsSBuNWwAHzwVSwK6mo6kxB5",
  "key21": "QTjPM9P11We6wKTWNkutk7adHRNWqt2PStkwqxk2guuUW76JPkMvKJmfUBnnVgk9bAYZYh9t8jDHAqS6oD52ZGk",
  "key22": "2EfTv7pZBqD1dB1Lbm7FkktAxPGy931JFLMscJbfvR6Bz7wht2dQwp6rZ9XhMtoegU3onS2oaQZs4tKDoHXF8wM3",
  "key23": "5gicUi98UM821mEKLL5FjAxfMgzZBwNSBcYGpmtbmPRk3QWPDHRn3c5MAmXaZZTUz2bb8BfYJ96JejRbi35ZZAdq",
  "key24": "2UPDX4jx62mnrSVMuPmojaBk2qthp9TCn5E7aJqNspn6wbywkmj5uoptovuYSU3tLNwWwwkW8UhsrWrfnZea7aR1",
  "key25": "4CcQ6Ty7Tg7qEaxu61cH9YADgg4EySrwhRcAC6KYQ5xVnCnbc4QNTufUbRcRjV8xSr2wK36HVt2BDzmsxwHcwpeC",
  "key26": "5RVNjjFQWv9NKkj1wC2ok7PMTv9mapzvDktqkC7xtdXQ4c5aKYRkbZ77K11nDwXj3GuV8oW64NVCjK63UvNoudQM",
  "key27": "3z8nvLkc1EuZiCkPud14BqY6vuJ9SjCMeYWP4kXamPT4vLDnkE4WY2CDpd9nhcgXxAbqw5oNDGGcYurEGE6oYLVS",
  "key28": "5BKYJ7UEcQAaSLvhttdH28Y7XVr5gvvjqz8iVSo3s7HHwdB7Grhcq9MWpRJs1UcAmN1c9HWveAzsvL4J48nM7TbE"
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

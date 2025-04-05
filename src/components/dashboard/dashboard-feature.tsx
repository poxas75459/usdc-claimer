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
    "4WKKcKuCA9WMEDya2w8fcTFfMq9AQLmsSKSv8zSS2qmYTvJfoSE4CPMj48PmVhbMgB7CKpGqaEkCtAGsGn4JLRg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "knyNABn2LGSzNjL2Hj7xMHVBanEgGuCFLtWwwa7rzWzuPxJAX5YqWYEHNqfX4q5NQAA1UzEbAw9VUAH5HQxXKgx",
  "key1": "2uhaJg4mRjZxiGvmXBtBs2ETMuuBqoFqo1vRT3J9sEUzEJNsq82CyEbdyK5FueL9NHy1FziHNbw6YPM19whNvt3U",
  "key2": "31LhLAqXgsWejLTTXvH5C2Ydpbv6aq3e5RaiHR6TezyCxuodguQ1rcUFVHPuDTKkqimJhW7rjocRCa2ke5HXZDn5",
  "key3": "2y4xUEZKz1dW5Zu6u8KJQ7fQh8ENkTmkorEpftqNZgEudbMDB3U1c9SGUwAFmigkCHddf59z5uX7TKVwAsdvR6Fa",
  "key4": "E5KEeFia8dnCepTBaWnBoZsYsCELWiL5ZXb29xvHAXFMKAMsQ4fVejAoLgWqMrdDMMt1ro1mWehkZR2g8hQJUyf",
  "key5": "2gpaF66GisdqmhZGiJRjhYCfZttQkcLGxpmYemTB9NjnnVgJRfPFFySVGLhW4kRxMsfgsqBU81ZFWe8RGneUZWcf",
  "key6": "4N7fs3c8W4XoVC7hwLNh5c2Deuiy4eC9x5GfeaCYFeWuSazRZ8fuyzwhSqPxWkhSHCMM4a6YWm3xHT3x74YGjexL",
  "key7": "54XrPhW15mCDpFwMMXUuBnMvqgccNKwLxUaVJekFL23jkH1nX2yYAFMcKoXaJtnrQJ8kMmTF4dcDjy9SqUS98KuR",
  "key8": "5tknThqr4CAoqQpwVpb56Shk1Tekb9sZSQ8hyZk8nwcrg9KYQaHpPt4GmKT9W52r7GtFHf3WfkVHrjKfrD7PDBWB",
  "key9": "3DrDc66DovWytZwsG5JyBGYawqyRbUej1CKx9UzMwVtyyeYJSjdMUi6h2hwh3CuoQB8avNiSJgrtnVCCJ9h87bnS",
  "key10": "66QA9NJT57fUfY4cSmqCr8NrcsGdZJn4uJ81YZfEYtUqy6DhLzNUdTuMte34JtZ4HmCgfBaedcvcUoLXajkESqro",
  "key11": "5X64pNHegRErtkvhVxbpur1qAQ1F5zohnKpREa7cdRoD831HmqqsXsNSz2RA8VaDXHPWuCY39PewgmyZL5Nc9eiH",
  "key12": "6tEv6E3DpFh3aXvs1WvXSW2Y4w78qF7iy9eUsnNaGTPG2Ct5Sv53txYowYKBXxiBzw5DJ3vfUydTkBFTyEAPHzX",
  "key13": "4uvzUYhsNagbSJzZCiNNTDqPF68EfAGHe7AGpxwwJJBJtGAi8PTvZzLhTUAKkQYGLDaBCNyEg85hhnH1cJ5BXTtU",
  "key14": "44eN6cowoXkHXrgiF1CmDBzedVWcv8c5ezGJ2aTd4DWoX3DMQVYthrne2sFfz9CDGDXGTaD9GJif7fMfsmfaSxpu",
  "key15": "2AEGgjM95dAyjgSey2eVZAcs4MT3n551zL73sqk838JdPbnnLkSjVCqERwgjq3tqw5DRwpDrZiyrb3cbWhPavw1c",
  "key16": "5cH7d6GYCNc3Vjrjyg7tD6SPjGvwyFoALhn1CsoU6m6vVVJjF2PkqWi1LpxFJhnEVWmuK27rZbpMZtSXw8RaWg47",
  "key17": "3guhw8BjrPzA4v8acUvHtAx3WeWaF178xforeryM6qaCZvkf5DhZLUn8TuzsFqT8m57wt8UNoBGgDRwKFwJpgvA3",
  "key18": "3ikju8GzCnxvvAN1msBHUnxpaqJDkHaxLtCfBTEA5BfTnE4adaH5dJNWotUWsXXiYwqGPGtKy6mYJpa23mEpLahs",
  "key19": "UAQMN5Dbhp24e5MR8f58w7Hr5aZHWcjhxhouh4TweJsWoZ6qbkbJic9UX343YcD22r3LLY4KTk69kEHVM6pMfRG",
  "key20": "4fToy8BCNvQ3qJJBEWbMdvYUMPzcDaaeHLfn4VRCsWJefyjcv93WjZTA25EN4pVkKEP8sbmJLkLWkSjeC5R3rnSx",
  "key21": "3jkPNeM5KopNk4NYJ7r8S628BxUogTpREmb8Hb1kGazsU6hRhwJZ435WyTnzmsgMqTuGGwvN6LCe3wFZYyaBL8MB",
  "key22": "mGnh9PgoqwUoa2xwFhX694PFtBKHm5SbLi85KJMWRabYNQroMKJijZNVJdL2XpZXZEo4eAUeWjmW6Ls99dJab7K",
  "key23": "5W1bVGCvdp5qkLbGu5BRJyrcuj6478KtrT85fg9MwPaQdooPvCXzXN84gJDLjzX5A9r7cM7LUC4tPUCj3WgpNyfV",
  "key24": "4okWFEdUcgVoMwVhFpHHVefvFxgC1yyujiANCFLwVRrkfQ8gE6QS97jxHZwXfA7mJfpgchvJYi6WXLb2bAeL8igm",
  "key25": "JDAY3AypRUuysX7cnQ5epzBMnTXTHrpJrRhG8tN4x77yH4eCCcDrNxHYdU86dHMK3zrnDtK7gexeYrgUe3ksXRR",
  "key26": "2spXWJEqNDExYmspczNHdJwwff47NKKf2fNiUQ3dHQEbhqT8kmkkuv4wztqw2nMHQu7gB96nMGqLAdWsqFwUscck",
  "key27": "3CbvQ8FYvowngnS4TcC1D4oBXHECBG3F1NpiRijsCCWVx1cP4DFPJZJofYVirnADNsb9a5KpWEZA28q339ZaVpT",
  "key28": "NXUDT1xnHN7W6FATbqXa8xZWsPaVfjq14XnxfTirLu1PebkWhEGYnj1fyskcc7QV3N4d8s9JDPRyWHEzZnk2xYK",
  "key29": "kwAAzXcC4t6zTXEXcBhGs2UZvyVEBC8XbYV5i4HXXFSUKXQvnTV6tfmxso8mRJrccK6Ko58Kg6SMPMiQVRe2jsy"
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

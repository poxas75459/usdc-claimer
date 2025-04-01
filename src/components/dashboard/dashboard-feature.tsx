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
    "3fW7He1Yg7cDF7WfRckmuzxFu3CP3AhWBpBMJHo3Bqi8z8FeChYTcxKJC48BHyLWG1kzaDT7U4dqnjWFNiJfy2KG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JhqwQWbdJgZaWw6efgoHSPaubp3P4Jk8fkUCJjztr6NsahxTxtHGQzxchTNwW8V4SMV9G1x91rxNoJca9sXPXMM",
  "key1": "3RiLcN5TyY67Tz5XzfMGFQPgeCPeFPCA9FT1XhoX8oWKHpHrzGahGw3jsdEY5aX3Yk7HZJrEs143v7n9Z2qJTPSS",
  "key2": "5jwo64GY5yxYEc1GRyCa9XRAnbp2ipDt85J5a5HrycFU9pSMz3dCYcn3K6yEy5ZKpgvkMAs9jxsBGBwSL5ELJeDp",
  "key3": "5FucXQhGcWtpBbAsKUc5Xut9juzvkQnJmutJLLCBGPxPh6BYU1sdBNjTRcs3wWiP1g4s7YySdhpuWt9AeHfpTe7g",
  "key4": "22UXHV3zRv4nqUo5aHJEJcenQ2MRyk14iRS1k3xsekQ32GmTrUDttQ6wxCKDqXtp8YbVN8Z4udhYKTMAGP9EQ69c",
  "key5": "9NfPfgqaevZpAHBB21uMFuCohXj2Gq6AzsbwshMQszkjhGg21vXQojBezjhCttk21pW6j1PpKUBGGnumFRLcPVK",
  "key6": "4vjCbRfuE5mFiZ9Xi2weNnk7eFvFbHmpqDmTuVm7b3u6enXJjDJaC87VNS8gaL2WDXwgtZrjU3MSUh4zLuLFnByz",
  "key7": "4EeF3Y9pzDccTuy5tvyguUopWtjW3nhGzdH7RpN8B5URBgZXjUrdokuhcUZ2PdKECrQYty1AKwbJtUY6NUtoJjv",
  "key8": "58nbrgLYPzkZKovVhjBb5wTrkdVUmZwSkRyMD4StVxfkjPNkfCuSdDCNez2FHjbYAoJ5e9hmUeyD3yBdbEG5PtLQ",
  "key9": "5kyAwmnWvAycAwMevXzUt3sX1r3ZxSamQjw7FXUCwUYfqL1Xc6FGtHGmpjrsTv6Vcup9KyxEPZVjMDgtU1zXN7bm",
  "key10": "3fhZPZGwsyTFD4bhWf4VBtuZT3JiAoGAWn2kRxGEaeU1XJdjRueymybR3Hd9zYHMtTLhKXxq1R1J8RDBz7ujC591",
  "key11": "3fMkTAN9EZTtauCEPNXQ6VuPUE5y2vHAojfaix68qhgcb4TJ78VkC6je1bMZc25CSxcWCQoXX1tTKx5ZpX6BCVte",
  "key12": "pbey68xPk2VQX9kmSWuKEvYa9MNQB1ASpCLooYAmHnqzwSHWUPxQTvwv4nFPqP8MhTpp5Hbqs38LcwTBSYor1n7",
  "key13": "4rRtSezL4P5PJqW4kkWmkPWEvjY5cUJXrYkUA8Z8h5oZGedqEXs882AohENpHR3gvLNqPrPUFrxv9NB9V5Acuwnb",
  "key14": "4p6KJRofaVwUDUzM7pqYBU9k3nVRpNFeDRH6UiXTA4YqvHDD6MQGz8DLELbo2g23EpBNoqhAecuQgfgg9aiaC4Ms",
  "key15": "3q2yphjnZAhXf33bKxyvcZNq935pFThegp7hDT7ZQvhNCcYZUtEhGAbyMGAtgzNvN2EVETVToq8vjhf74kPC6QiH",
  "key16": "LTKjwjijmYh5Ci6b1AtYWaFNGzt6oFCg13eDcvYtXL7JZiuEANe5FcjBZXY8UedKyNAM2p8uQV6X34nwsdSULkv",
  "key17": "JgER2XDTTzHHf3bbPqFiNzXKTm5KXj7y3W9VYygN5PeRjrGb8MFutQwqH6HM3Pf5WoMHvXcMwZqSJsjVcATwTex",
  "key18": "5n1fkbrvefd8T2dF1PQuiT22ux5b3iYcBZXfB9cubyySa6acgF85CpTJLqFYX7SoGQ1DdfGpguuj1PW6nChfxE37",
  "key19": "5sddMWWPVguHTvH6yLMrFEwrdY1fiaw3RPbQC1CtveLHmWGZG5Vq2DUKZgzCSGGHaVkBBrS5tbWoUZjbieP6NA5n",
  "key20": "4Cztok2asD8F9Vi3NYBYnccb8YG7pnV8hzH7SwSSBbGZMks4UX31Y6Chh7yEyEQv8mjDsCsaNYm1ANWTrqZkJcFd",
  "key21": "625oAAfeihTGbrdjizsyq4RvE1aA8AaeeeQnHZy7bRTct6fT5jPdbLMFbFpq92BbVM3Ye5yzy61d8BXjaz4NpZNx",
  "key22": "2DGTSLrZjDetQXixjNwRUtzYKoQ7i2bXx4WBuDAJSE1zeEMFSsX7UHz6DyCRXab2faoVDbtiaEwk2fDFK2Jchx3f",
  "key23": "59j5Z2XuGVU1WYVqmP5rWLwC8zky1tkHtEKVvW2nprXWwX4jUs89igfdsZNd8YbD3U7G8AJEnLtACXtUg5LCrTj9",
  "key24": "4fhJnHY17D1id3npu93Cy4W2Qu3bUjLxpejTUGGrPfd2xeffr2f77UwaDdMWpqhmPH9W5HLjDUCs7EG4m6N8ijuY",
  "key25": "5JpPBupc3Vnk5gguESURBURamcJstJwByAq4rKSXWR8rAHTxQP465hmwn57RpbF9k2tEpoR6baW3CaciFqZvb4Dm",
  "key26": "6QVjeVBtjcXnuTCfoVhFFhCUZaU2ySjTTzYMdvywQHywnQ9YUTo3msMH7NxJthnDUAH8jNRkRT2dKqkpFTKxwtq",
  "key27": "5wjWEd69uymBjd6JQhV4g1G5ALLoXWd7vePirZP1HytuowFxCrKgEofzBE8viiEDixt5sVuAZBZq4Nvg33xm6b4q",
  "key28": "4ithKfpJoxrYtJN3x8qY8kSino6dkuhdGhZXJPY6ZN5ajyhUHpfLeTG7WRjUn7HHWKrsm5MmDG8reDfVJymVJQzR",
  "key29": "4kXoz8deKQuC8RotPDCkSzWdrytcMfrsNLYzTvL3uFZAHSD6Nk7rL25FkY978CEuajtqhLqUDw5qyJrEP55o1wnT",
  "key30": "3TG5cFmT2wu74UzNhNjBnKX9i91gBru6xmAFquXkmLDt6pvdDXLRArkcuggDDCmjBYeCrd1TTzf7boZsXuNZyN83",
  "key31": "4NiVH7bJ9TR3JhbFAT8Sqxu5UoGK3njDsK9fb4cUUA1XnVywLAdeDjJ2jFHvWk5z4hUfM1h2s3Q4AZZBLMy4xNMh",
  "key32": "2C4JoaqygC6jhtSXsmDxY2vmLgQSzRfbi4y6kGrCRTaLuQTLZMpgjfzNMhVdH8FDUuPS4QSyrFsqoUV3H64e31yj",
  "key33": "3qEG5Vv3AEs9GnxB8d7BmUuiJaN2kKpnPHqNsEVi2FBFqsWzG2KTqV9DZA83VCbcrvUqDUSotWY5kak94gsQNzzd"
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

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
    "4sEPeEg4PQQyRd4cNj4Gg7PFWmvFxKgFrGb16h5AvePRrksYkT61dJNk8y6SJgb7VK73fjTBb6H3wvcXuE7cYn63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24PjAQtDp2GtvcapTgKdrt7X3W9mrc56fKo9tVneD44xrLTS4RahnnHPHPTpPGE3BLuf6UGXvCwVThaF4wpCYRx7",
  "key1": "34Wj6YzuLX9sKRUp4LKmApq95FdU62kiLm8v4stgruEmbmdaVtk6ABBFAS1zRK3g7KWgRmHu6aVMZ7UM9YeAz8kS",
  "key2": "54pzDStB7wwvhhRcfQgv5u8wLeP4LzpEm7tZnibVV6UE4E5DuYtMCZsd4bvo4bJeYp19Wtkz9997LmukzWBP3wkp",
  "key3": "2TharJjX9cGHdQUfQ7FVUuDCxYoKY76PANe4VqYzgvqwUTKwvZkjwNLbcxSQnwa83yMrmrrAqTm7MfsNXNZfrpQH",
  "key4": "5ecymjomd3AwbGjtcd7Qyztsq68p3YJ5cJVcGGq8McrBBBgfB7DXusCPpVYVCrX9nc2Bf5sYPu1BFD5opxvQScVC",
  "key5": "2igyfdDgursbcjdgrKQ3RTxiMGsWWWJ7C3juUS5pBw1WXoN8jgBxLFDJ4FG4pnWXXKx8iYzYFw2fJ2zmZ3Y7rJrc",
  "key6": "6rDJaPURWrD82CkmdxAocfEJQ5Xk45k8ojZKv1uVCajnAXrEXp4uiYp7Ub1Pea9ttuGxtBmZMrKtaeNM1V5iLAw",
  "key7": "3qpcPCSkvwYYiBEDTo7FPCKQ65vCbXjXTV95jGxbSZykEbDBFwgAXdc9PYu5WNHmqtnAGtx5YoM61KVUePyWQKmX",
  "key8": "cynUoJ8x9AY5hSS6wK4aTh7XWGeeeNWMMVDEr8nhTtgmhvGAcwVZy58A2FN3m7kezsYUWE9Mwy9YCtc2UtZh3jQ",
  "key9": "21HBx4pnhtUiJYGP2t9A66qdSJA7HZKHeGf7Mf12gTkNSszdxvEvR3uMzWfbM5BYpDay6CPXzEXmMpx241zLm3JQ",
  "key10": "4Ft1fbDjBC4VV23bhqJQ5ixpZVWbmeyecM9w8NokAeAbajqBHRWYpi9cELkrs788SAF665K7bxqJwBKVJRjmNHob",
  "key11": "2B4nYstvLTu6gMfTsBo8qFp3kpUcGmp7TTv9pcnpewa6duJPPnGuDmfcdZyyNoje2M6WaVk6Dm17qKzuJPLodsgo",
  "key12": "2jKoNxpkciqqcxmP5jNvSvqGLzCuz1fRhvL2fvdcLzvTJyiuWvEi1gsyZGrr74yXLmcsdGjLFnWeoEKdxN8SdE9G",
  "key13": "4FYDutiiUw9cu7aHUSpmUkv1S3aQjcHsqW8gWGLHLr2AA4ibjcavmDxZeh4vyErJTJSeTUT3EdSoSixhYC28kAJC",
  "key14": "42vJh8LedniXwzK1KoVPwSi6iWzQa2B5BuGL92832wDr2tyMtwezLFFZM6Ya1w27KgiJ9afxKx7R2nBT4yK55LaT",
  "key15": "JPXoJbPAkpgtzUxGKcvEuGvEosBT7FkFEEMUn8KhzCPG8iAmSw2uLgwJwYz5NgTB2hoAFLQvpcaWA9HMK86wJkG",
  "key16": "3manSnSqKqj3RP4DKjzRAqborLWFatbH3dtGy9Lew4VrDAqz9JmCDTxGLhS4QTk1V4163sejwW9ztR4ShRKVaGCD",
  "key17": "2YnvpZVk16U5ZqsHoMK4CFarYBScPxBDXqQ8FwtH1DYEQpw6eNYtSsxFh2NgohyMxrRBKGABXKKCtuSfTaUxe7SF",
  "key18": "2uyNVoNCAnnXeFgwaLXZPcibN8tB7AUGNXvkRenNarUXkzPXtheRWkKrAv4h6AQRLoRars8HwJYGoEqmuzxVnuja",
  "key19": "5Q4y9fdUqAQ7XVtWVdMx7EnEWUJdsJBQMTLRemM8xWC1LUwY5nVfC1yQ9QawDjvu9cwKwBEZHNV8KjhKrud7v5WQ",
  "key20": "PtB98PZ8imU9MY6uuPFYKSfdhaXfphEotdX3MgR9p3CAkX9LyUXtuTFFzp2syo8SBxDVg84caGDZGuSc48znLx2",
  "key21": "KNxQ5qrZx7Jin6WZs4qxN852Tw5Jhuw3qabGt82BvqqTvZiqoW3B6NmmGhjGzCgQ5pmUmuZiKFUCxU8iATSnz45",
  "key22": "4jn3zB1r4xp66egCUUN3wj999Up4L3TngoSfBmVn1UcuMaLegD8tf36MfpEkqDYcG4VoTwtkS6en6Cpn9n2qTDhC",
  "key23": "2UgWQaRaQMwbRZmXhS1THfFcVYhWmBdz9MV78Q4DYXZ6KKmEXwFBXZ3mjbrTm7sZL3FmTj4e7DqjggPBbwZrqMeU",
  "key24": "2L8j6Es6m3xLXQ9yzVzkv5rL4ZbVbAJGayAjHcxTEu46CQ4BHsCvnAyrkNLD3g5HhqEGNUQat2jbGuDcPoQZ9QfF",
  "key25": "3vt6fP7VyjfztmQ6Rj831epnPTPfmp7FvvqpKVaVKS8Ri275dzzKgLV83KT3UbLMhVNuoKUhFWp9E3boXr5azJ1R",
  "key26": "65AkMoPB8iH14LbuateAEDJT9xvJUw5WVN5pha9mhKSWqfHy5skb2goZVRGT6sEFNhQzGeSUAVWiy13tPe8BdvF4",
  "key27": "LWNhAbhNqgfng7ebKnvr82isEztb5Qde33BbeimC7mfTuS9L6P2Cth8mhn3pDVSDDv5i7JeS9aGYVEvVM3ref6n",
  "key28": "3xYsKSfRDDgKYx2EVEuYFsii9C3m2pgJ4dJHZVWgP1WzYVz8dqxjZbvad5nnFBjuzsmMiNZFAtQmyGj6gP17aSCt"
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

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
    "2NKozaXmakeUjTfQfrYcitPAhQkvYvZwhw1wF8wvbqxQwXW5Fc94hERK1y85purK7zEfU5pGYEQ6xnuxvR7UQ2LR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVDeqrz2sQF1PRPs3teSvB28944umytEQKWASEg7ah21maodfVWDsVR7XsNWPBxYRvnYE2MqWsJpqZJzYmnDQgu",
  "key1": "2SXkypJriJxEodAGBZBDstBhW2FBSgAKmbDJfXnbpm4d1AoXNDARwBN8pBkVGJrvzZLZZuYDia9duB98jZBniFZj",
  "key2": "3nJEWcGwvHWDy3ra7HsUtyZDCRsVawYDRjS239oG1NVnRFP5mwP6byZgJ1Kz4VbTkU28txsbubVfVyGyFYNTgpkX",
  "key3": "63jjx8qoJVcE3Vzxuuh48Qm3WWU3b8reCmyCg4ffZXgzvdQPTHUSJMVVs3WuiwP785TMcxxNpufkRnotCFv8kua",
  "key4": "2EPRnRxEbjW5wHTUYJHddvdXM4AWzSA9VeJVUNjxhXxCKqST7dRVJ9TkMbMFmTXUXi5SWwotWF5e8Zc8giDKxW1V",
  "key5": "2Dx2yXmwK9THe9u2C3gcs1bHdYqFSdH42rHMbaUJ9qyDNnu1eHfn58c384uEG7RGw2gpYtsxQRd5pPzn3cqM7fvj",
  "key6": "4BMqeKa7afUnjq4raWJaeEhq3gJod24Sf8jXWtdXJVdbWkbMgjN8SN16k4pML98XtAKEmbqDdWdC8tF3pCwVbqn9",
  "key7": "3J5Yv7vp1LxJeoZFyZ4YssPqJE1xmBMAMBaqwd6uGyHjE6LS7oGfQrJrQ2VtR5f3t13113mCERgwkCkN3K4WAvgt",
  "key8": "4QV4oLYrdC4nboqT1JKhqbeLTdf47vnUVbCpgndMXRU9txYiHYNBq7PAcHzGciVziNLqCmec3ZaThYea21WjTtke",
  "key9": "3GE8BZfNDCr74s11Nd1sFQVhUbF1oAQbumCeEdDhJ5aqDAnmt3Hi1fagDpSQQUvbi9XGDGUwXzHpviU8MKpxdWDy",
  "key10": "3Bqb7AzzkEah9pUAcjFuBf7Nac4nY7EL3nffFWcRyQL7J1W1qo7i5SWh3kNvJhCE5SPYZtCjr6hZ7vjHRjXsaQsr",
  "key11": "2Wwk99HjN7KKa6W9jc5jrKoPYfTk2mU8ox9kBiCP4T1PhQyjGqpo5HCUqem6QkjvxT84Zcev3sEgPqXjsauiQqo",
  "key12": "4yL4m812uTsAw12EJA8WggHYBmBsZghqq9cUZxKzE2mqLoFmH4yqid8ekWhctfHaTq7fR8aNFFwaJvA1caWQr4q2",
  "key13": "L646zLgk6WfEGMQhZFq94eMtT57yio1wUwSaJkn5Aq38NUporqi1LA65vHogBRmR9pYFN4rLwJHZw5SKxE1CZDD",
  "key14": "qWss1a2kEx4JYKQAmQDKxSyMppT3QBGztfBED3TBCvwhBFzuuTzASp9APnurifumeV2gw1RWhx4gfLGw7YuCzs5",
  "key15": "5fLSXFk9dd2C7K5JDewzLMWUrJsJpgQETYcRaGtxtPfkDJZQcDWRSpz5n8FkNGKe1rGqEH4hrPiTREEY4kf1oP1H",
  "key16": "3Vzbd3WjAp8wGknK1HZvRX55aKRMoHSSNPLDbMuSReNkJ766Vz5cPE3vai5wTyF3oCBkrP7TnYQ13kiK815JJc4E",
  "key17": "2c7Ew9ZdVP2Q5NYGDaiK9kJYvr8ZrqwE92DebkDvTjcqASjU3B5F9KxbgYWuBgDfxdQio8d5QBepsmVxZgzZab79",
  "key18": "gHrkQiJe1iHgzPnqcA3ARAam9waVxTs7GxKL3f59bmcsS8AihXQbfh4sUDoHvziakbPHcZoFkcvfeUfmUWg9vdX",
  "key19": "3gBx5ZWjc6L4XzND9K15UkYQwD8zkKcakdXNgMBJWRPVcPJjjaSMXDUurLJyh8wuEGtPmi3KwFaXAzEZoJUPfrkE",
  "key20": "2pk3KnFJezbwnCqBTCf8LcTTpf35BvGks3QizHQVVeZfD8uNxyfXgyRCtxCZtdZDmHxP4TCSUXknCm9b3Mj1TFEW",
  "key21": "4iwFsmUJ5LKxLEKx98hSTa7rA4B8Y1HA6GiWYRU2SKgc5sqcjWcMPCEMuNmLjoqmSigoewCiYGzGNkkjyehd6eSn",
  "key22": "41w4Dp8MzU4CUcSu86fojCXReaW6Fzg6BhtoAyQv6r8aP94z62e2cFY6ZuSVmYsoyntDxHSLJYWLG7KUSWuSibD9",
  "key23": "hhf6ipQWQCrKhvnbKjXoZUo7LKPVW4ZvNZjvePPkyREN1UnRott9i3xi9P8DJZTG5FgyfLc7DjzMSov3DTDCctp",
  "key24": "46XeJ5i4oKTqmXdLv1rji3UVcmpP8Xpet9AW5RNbP9sMSRs9tyYAverUxGuj6f7xtxJJumrwcwZDPA7kjZMJURRt",
  "key25": "42sXCqQoD4DczWF8eQnAnhf46iyNPAKM27U8EmkD7zQUSRZidDPWSGmCpYVAYPfRCxjqVN4g6cVTyb1zhjLiLK3o",
  "key26": "3XtWuujaMgKAtNDuMva7N6poc8JUqM8QnMoVpGU1mREvPZYef5hCNBK6BByqBfCAjBBmwuWersjumKjKUSqWHdeR",
  "key27": "Dauz8K4CobKmnhsqKqYtMTWy99fGVQmjGZpd11tqysEy6En5kSJLkDNQH5gpapnJtmgoLud82rds9f7HR4Q8He7",
  "key28": "4szfeFrMa4cpPNgXFDDvuGiQKpXuQ5Ywnb14AufsGGBayoSGszJnZykz3xbWXxcurbWC2DGz5Pj5uS26oSG6sj73"
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

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
    "4ZxeC5yp77ts7BxkyUd4ZQTPjzF37PKDGbmVHLZQbU8BN2KZEqjqf1pxuVLcGGY4gsrFWvaXTMjCXrtnqmcBj8aN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fAJkiZAdzdPoM4AyrCZK8Bk969GqLqko3TM1PQWuyQh8rKnzEGbRFJGn9XvGBp58CB9PXu7V8jzQcdYyeWZfawd",
  "key1": "62hVda4qDhoNqrZFbXeJn7LLLgkAmMTUF9haoGjvh5M3hhNXvcL57DGyysFvRBvpX836yJVx5vyZC4Y3Drw2E489",
  "key2": "5MaceBftZSVNhZsv7VG5YdSQGzkrfbCMqyUJkRfQeVvsgmZtUdXdHhUCdV9eytMyGkQcU9KLyN4TdDwxdb7cKyjS",
  "key3": "jQZnBhCFiHChkoxeJNKPmjrnzqyhapY2kYtvMi1X9sv2BcJdeKYiHuZaK7dA5xhPA5WdyqALsKkDwd7Q2UvgW9z",
  "key4": "4DkkaAXxxmjiqSn3GvNspa7jxdnfKafRahV28LktubNYCV9K4CfddnJNabFrYvjQKsJSwJSoLvJg29JNQL1ngdLp",
  "key5": "36rUnbVq9VE81E9c4ZLQxGcP62TvJe6jjPgHHafpcdCgrbSGDnDSBY9SC2sAT1ZvLDus7NpEyjBkfkhZipCLvCKf",
  "key6": "2uCYKB6qheDRUM3WcuDWWbW5LHFBiTvjgybBFMZTY5QPRQeszFFG6nH7KdaYFLRuhUiNrStft2apswCEwwjjKf5t",
  "key7": "4FYwpFMpd843An5u3376UoxnE7MBGPimaattdPMLwmdBxKkHrTw4xcJLZEwPQp82CLu4NLXwXH9ZTZqfkT8jWzpL",
  "key8": "2xvnPxgaztxfubsrh6RQGqbVXd11YxN4KrqgR4AxuQe5VvXiyJHH5qPp3QQ1wXAuDYVDFVvuomgyD9SYsnXa4Uco",
  "key9": "3UZWFxnXr4Qqu8HE9LGE4F2mYETQvbJxUdcfSqz6FH1jNqpYPtNxeKBNbbcNkoGhS6FfuyLGQNqDF7azzAaViezQ",
  "key10": "4FE9gPj8nTJXDEp4dUCvEGqXEFLJDDcYErZFsrHNL1NVP9ei8qkVfyiKP9inJTQA5zj7f2CKtFJQA9RtApWrVb1v",
  "key11": "2HY4uUfGcdczds5tt7A96ziczBK2tvhWMeA52C7jnJJA7LoEPYynkWrusBHwJ4ZNdZHkh5fULUBGW9cwezgV33ZC",
  "key12": "3zGA7bs4Zc7uRyUu8bJzzD6n1gdRcyi1jGn78upUG2YcBfimYvGD72sP4sFBLYiBXzAD1c7NvtqbEYznLZKzm8Ei",
  "key13": "5jRdTh2YnD7r9XH1o6tU5sLoY7R2BnT9bEAuGMQnKsQ4TRACpD3gAuiqh9VBATZt2QrhABuvuT7LG8375sNWAdZ2",
  "key14": "4EZF4D873WbCzRidsytbUBArTQj4KWfXB5rbdtfWmSmja2wvhP9rGPtM99CzZZsDqmzJnMCBoJGgoEAAA64uRGrQ",
  "key15": "LBg6NRrae96RyWD6M2pE3HgBcV6qgrCgk37P1FYWhPFi2fHzY2QNKCdFsbU17tLC38S5yMaYbNH33B3DuSZRSs1",
  "key16": "5dTY4XHioEYnrHayRUqEvxzW8uzvkwZH1in8bpiDg6ymRucMyutKxnWLG6gz2xHXcjq9pf1nV7MTG3pJbfKexN4s",
  "key17": "5tAHL9FbWAqG2kYtCg4iGRH5Med8sFLGifVoX4gj4Bh8ZQPRQAAzgwDiRF8Mb7Fh1j4axAx8DQq8PhmLMakTCxpF",
  "key18": "2S158QGEzG9TZhru4YrRqHhvC6kZTAo9obgRyCyqWtHx7mqWmoecqA3iZisQwU3TakgF2rycbCJuzEEAFi8TYeRN",
  "key19": "2g5XAKCprJnmMYJNjKK8FXHchPd5ocW3AmBW7iy3v7rUJQVNXpBfQLakFrzonKqWVuiJ4HmvVD1m8oYm7HLjEw7h",
  "key20": "5eetpKB6AiHhiFxswTQsN8bDv88aLjVtXLThMebLwyiiiRdzQeSxtDcp2D6LW9qDGyxLy24W8fiCM91BYmt4g4ab",
  "key21": "PAgEbh8MbNbd7pGDsiFDmKNrT9wouZSa6jFQ1LZLs742sdCVRvS9CZMCNFhhL1mtrxxADJNJU9bXLN7p2w9zCGX",
  "key22": "SZtTdyYC1HD6U1Ap1A19vx2DM7JxrVJb1DTj9Ai8tPF8MSAbentHM9N4xAf3JMhNMDxx9pdaVbkj13AtrGFYreJ",
  "key23": "4TKSPMJifh6aeimYJKgxagpoyvTB2T6Mzgteo38jBpFjuFrgw5DbegejXCFfmyUCdt5VxcHJDWPRpK68Uaoh6gNu",
  "key24": "5JJM35RYJjPN7C2U4NBCZhnrpqsRcBjUvWFjoDCxhyijhqa5fmQV4dJ9ReUjnQ2wyqVPT1tkF14k3ZE2onuu3Gts",
  "key25": "4tJGi5h3gq5T9mBbPujKhw5uCJgfD6hZyrF9u5SfWyz5BBMmT3vUxD44aeTeAxvbS2XVLvn67YCdkqVG9RNL51dD",
  "key26": "47NKWgyQfzQisx7M547jvKM1mEfhEnczS93pzvT4aBWTsyuUes8Gi5qeibfRVS5DjVAoi7HQJBRMv6QfVbUeNwkA"
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

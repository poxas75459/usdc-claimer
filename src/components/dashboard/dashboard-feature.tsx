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
    "3gE7sjcBSmA3xiDjyD5ii6f3q9jxTLpJdhLzMkpvxvPieeiz5atW3X8mZthX7REk5AEQymQAd5mh1nDGs7jBxW1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJ7w6Ac3ocxLKayicFMuXmecysBfR6AF6K9g3ES5pKjdT4rBeiHqoXAkYg29EcNTVXSQ1mXptR3mDEQt1wW6ap6",
  "key1": "3sYfm4vzfqbhYx3FcnLmXBXneXeMbtKMrZaKWFrGk6rUnCGCfT9Ao8fw3riGFreYEypTJQpVPtE3RoA1Uc5DyYT5",
  "key2": "3LwW5RvQ6UQQaDBTmV27BDjKD9BCE2gJpRxYLZFMPhuqBJzvVGcvUTiLqHYVQ3KjipvkxvM5Q4voqfGHma45iY3i",
  "key3": "2981FyRQT4JBhxZ6WJeqnGLViF9zQJV4FGRoGD72JiSj8b3qJrdwuB56v8G5AfnV8fLju8TiXtg1jt6ndK3mCUwr",
  "key4": "5smw8sSuo2SJhCeK6nsD2wku3Py6TxwDAueEqVHvfvjkMkwAYQamLW2PkUmWuTvrWwkh5ZSTPC9Mv9m6UGz6VLQn",
  "key5": "2TcGM7F415jmrKgvsZftmvVsoDe6qe8eAQQPWQdt1Y3n3cdn1RUuUArCCavSZc4HErSXZAZmQP8AUEzTDZVbycyh",
  "key6": "3HegVMURPzvQoAu2sF5G6GnoZfAE1Xuhw38sibjnM7ATzrreXPUnAQFWRcVniw2YeZ7GjSMG5HiHqCfEqSL1uVeS",
  "key7": "5zEJKxDW56vxj4d6fzQqbSZyLcn8Dwd5hk8tgmtN4TwfXkE32wQTC86TQF4bHcxrGc1U3da3PL9Sh3rFERmkZ6nA",
  "key8": "5v2kiH6mYSbgCRXVFFae6N65xGN69xYPxkjdQ8Pxj1w69LFsxKir2Ev3GRuTZ5eeH8n3cocH6Dv7Ay78dqaU1c5m",
  "key9": "wddpvLt77QtgjCzMtthguNb6jquNgtnBYwNtry6UACY2HinDPuf5E4jGY34WU1xF17NbCKoxWo3kyiCk8KNroAP",
  "key10": "zP4jtS9WXtsmUAMwmzK4LiMA3M3pcZAHh8NKbMqZKAswDgh61TWsAuGcWpiVYiMjNnB45ndU7gQKv4YXZjs3w1w",
  "key11": "XNEmBqqjJ96XiggWjzRFUCUP5mUfcwSgcR56mQcyxqbF4KuapC1RCm17ChyKTe4YFjWYEEzDzCTHCg2MCbYstD3",
  "key12": "3FNv6pBcbrfF6dNswDc6iqwNgSnsSQr6DMoxnAnVz3S5LYQfgmk2dHL37AjKafjJoMdP69E5h9SH4gbnGQKTQPT1",
  "key13": "5AWKCBpoSrdFSwmM1WmpR5ztWVnUBL8PHRNhJ1ZYojJJrHjALhP5UPGerosP7VMNmBCZKrBZgzXiDe8H7PuxJ221",
  "key14": "2YAMm4GFTN17DPFq3Sx9txqLpDwbtAUAw3SpGeeSCvc6RJpqZqU3oyZjZz6k4qRTAeksqbCsY9dWtnhQSfixjuJq",
  "key15": "5isQBfufMF5MybM176BVgpA9fyNVi71XMria75rJkpgnTbXqin3JQQb7GgSiAWnRFkccFi4jV3cRxwadn6rB63q6",
  "key16": "4tuV4Cf5VfNKQNMoVS8xE3jzdkrsTzY2wRdtntoQMruNqubJRk9BhWqrNRr5TLsQxvEKyBB1uoYUEWRS9zmmAB3R",
  "key17": "33kVH2SvCMvpQjMKtfyHYoCvpdf12CRt6mHcAG6c7XvsBPMZMe95p12Tsis2hLXvCxWG1wa28cMSH7bSqK4r9E44",
  "key18": "MM9R56Cn61kqStTwrDhQj97iv8VwtSaFmm5YV3Nfb4kWqs2NpHpArQbHZoQcArDaRpZWTvkYHXXX1WPcekLnQjM",
  "key19": "3Eyx5MJ5tYBQQnKNF1pmwTSaHMoKXYuHKXFPWzx926xQxfyPtZ1t95fZtfV9LDpRHSLm5oLxvaA1DZDcfcN3rrdM",
  "key20": "3uwk77CYuihujfPYHjJBsXmGJVoRDoz8ggFNDWeNZx5zyNr9NQLfFkMMtgVgnzyyUTRiDcfCEVVjGpwyH6BgAPp7",
  "key21": "5RPsQgA9AESErb9Rh8ajnthXLim1ebm58YanxidXhi1aL8rvCBRL1FMFcre54DN7s6xvzZk8tCk5LveuQAw3otRo",
  "key22": "65H4KcavfNd8T7vcRuryB7Bax7wYUvxRwQod4BsdhyjQTqDwYX785fPwrqQAzWyXvpAdaasbi6SVPuntb1fmb9Fq",
  "key23": "541LzcGnMVg8P4DFhcx3bDXDkD4uuyviVfuaWPbhKfbQ8RBMBSXenmRynb4hdG7V7uRsBcvGHVmWdUkXxqkYRTk7",
  "key24": "3NGhgssqgNFU6Wn2jrqdSGZ6KyxY5iVru8LALwCqrHxVpbeiGuVFB6drkQHJeQES5QNtMrDtrChCFUj1ZyHRHtHN",
  "key25": "4zdaPNQyGcdcKiFfN1bJvWi2wjRhiYrzmFkAKtWiE5XG6b7vMgNJxACtdFge2wS8VuhDbVmVooNssa18hXpm3Akg",
  "key26": "2X2DhRMtA4xcfs47Hu5baKpQ6ZXWVwgMTt1dMsykVQ9UZn4pNGWJrWdrFoys1SUDfpQKd8jPyGjgzXCeqQZF2jBw",
  "key27": "5KMEGFx3ATTjGm1Hh7WycmAt8P93sWHQWJ83M8kbq7gFJFNDRr9UCnFafESK37VwRJ21hAskpzjonABFboZGs4TD",
  "key28": "44771UJM9bTQyr6fqxHJwzKRQ9gLh3Lti1d3Tkg3xjwr5fPx23aTzh9u6FKDjeMPpuhJQdV1FPs7gXUUurhjCkEV"
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

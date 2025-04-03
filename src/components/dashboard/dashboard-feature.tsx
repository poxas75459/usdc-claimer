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
    "47B9aFCXfix7dNHzstNbpn1jYRD9vQZefhFeU8zU1hJS8HkA6JWzJ5mzpapsQ7HKvGEu9eojM8SFFkPnD1u3RYPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vzJh3Wtt1oTLNXKXckcK3rxFg4yAQs3czMfUbDCWEx37DUJNbd8WXQCmRDedE4UZMAxovDJoweGuXRAVmY1DCB4",
  "key1": "3RYZrBMuvBuKtp9EEgi29MQc9swEr773VStNZAHC3UHfUUzx55vHagZegnzwzTdmWFj8B6G5tPX7wLA1mrswYsDH",
  "key2": "Vui3xyrn3aZAGFc2mEQcCAz3ReqG3Sqj6x6nqVCDkzmn8KibcNMThWSeHJLRDtvauJ15URNuA9dHiW4c7VunEpT",
  "key3": "4XrddMjwNNRwGxRNXEukLTTNiPVsMa1iTgz9yQdZLVzSFJSRRM5ibFcPnF3a33ZRgf8LbMFUCgR8SLP1tqJoRuAa",
  "key4": "3wbtywciGwK2aMHdVryCVzFbRCsu5J3SSXvTY3Nrw9fUeF7DTRyfrnxMZRG2DUgHeZdtWhwMmMe5FES4tcRJNMpE",
  "key5": "5ngYJathwYLg438gqR9yrtcgnnvHWpNzoPcDrTuZMTV8Wi84vJMKrTV3wwtamvD7jpk9xCLKMEUBzQbeKoepXGUh",
  "key6": "2afzSLeJfiQDV3KXP3UYSxVs8yYBMcrejRPWq1wjh8JLd2q1FKotmhSM1kXrVo8VCThCTsbHseGdLmnPJJgQk7vL",
  "key7": "3tWHZdJZM9kD1gBvVszZrP7B5SFhdNBWp1f9Ht3EeT5fqwFibKSqeNz9gRtLVjQv59Rh2UYvXJMSak1huTJiBiDt",
  "key8": "22rDeTNUNSCKt1HefHRW3k21ZiGcTSJZiLoyWnFAsJouWqixbLKSn9XtxuucivQJzHHWNjxb9rcg7jQ9NRu5Vf3J",
  "key9": "2wb2v61xN3yabGchDggULzFd7CChFgc86DiJD5CQxqve2UE6yF4XXhQvVXyLb9qpQr9m8PpRquSTgVi1GsjwRXhW",
  "key10": "5137GPGQVszCnFJJFj2m9WezHc75UYHNUiTZRrYXbKJSc8MazCscEvMA1ZU3h9mjLmQJQnbmXpyvFtxoE3npBk3u",
  "key11": "417n6w95oa3pmSgbNMTJEDhP4pqPfHYxMV4tWb1jmvZUkefd9dikH5cvc8APYURcFQkSDJi5qZPsvD5oNdWikfty",
  "key12": "VDoDwTCTbU9Y1u3V94rvR2vdj3YGTeYwt5faiiJtdAcCU4KMc5xCzcFG26jcm4MLJBmEfBnWjUcM1YyFcmefDbE",
  "key13": "58YTqNt4cGXM81NtsWyZDNRAR7Pgo67sHG2QccNhu6HDVB3rZgLf1nS4sWiBzNif3AgsymhyKCoq6zrcwmNLvr9L",
  "key14": "3E9G6LZrL88qa9N3fj1uqZwGNzAwwZYSk32NyuFirUPTfUtdL2TFDp5AeuuxRP7XANp8XUVvpTkYANc6iaBHM47u",
  "key15": "44ybD1erXTUW3uSADK1HgYk2S4s3SQX4vKT7cXz9RVoFjEjPrhCUBm5d5yVuUh7sUw5DRZCLgkJKXESGZSE3hTkY",
  "key16": "5mt9Xg7RSd35Y1TTfRooPQqL3vLWGDLvRpSykydNZA8j4Vpr2VLSWegUFLW4qs4VU7btgLMwKF5sEK2z1WCSAdG9",
  "key17": "5yeGSXjqtmSF41Z7RBrcVKwmHLjTtv2xtVYp1eC5qqBHuE8rKyLo12hQwaBfch2KmcELd92h58pdVLgfgNALFCPR",
  "key18": "4RkNYEtXR8Pk5u21DtdLBo7ggnJrFmYkLhq59XmpEajFBNqqEPxBm8ChYFSVHZCFYJrTBsXozhJ2avkwtFzB6U9J",
  "key19": "5GVPsshuZtBepG61RPJPELhyuESeJJfswzocytAcaWT4vCSz6oP6r2VfKQSvxnwhkvGvHVsEU1jGnx9pcbLCdhwJ",
  "key20": "3EFvTmsFepWSaCUu81RDSsduAQ9ojRKsAhKKEXQDxDcMdXQJhcLQSPiJEaPQWMzGG3GwuMnSkSjYQ2gZ1c8Reguo",
  "key21": "43pLTxa5fpu8U8e7CYwXzUiadShutTdMad7ksF8NsdU4Q5iAMJis6npR3quoCuVDDGTpEDG7C36kgfBeHyrMNSRj",
  "key22": "4CkMyoPwiK63ZkdQNNsNky5fEzR5v1mUqxpXAi8xfiazphWYmYWxVomHocnrBfsegyLPtuSE4AjhbE3zH9oEnWHr",
  "key23": "4CQE1gGD9j7STixCQSxqeg47gFHX4CnQGzXQSWF9fmyKRzspuYXFWfo7X6F931oSRAHDCymwKwkAqcGqCsaK8HJi",
  "key24": "5PFfbEr7KfFtbXDBQcWw6CZvFsNg1TU33ADwiEyoAdxrku7mAKe4Xz5a1cvUYTjtRhSv3vLZxkpJYDztHenvT6pa",
  "key25": "5uQSWjQ8F1rHVuprNc4T4t22BTyLTPm6h6bVHUf8LF2uEPTwC2xH3Q9EsiQNuGmKvAXpQmdkfMLn92GXBNf3LQPd",
  "key26": "21hVYrqjXs5u83aeZXmRV8tLRyP2qDw43zQc11pNTvC86X7Ap3sx7w84BH47XTVaJd6S9qVuAaWciukCMetJqNRP",
  "key27": "4QsaZFTDZQqijEE99vNjRfF6JXtyXfofdRrYqoMPZUbMnCyqYugG5gE8XiC9FUcLGpgFnAPHrKqzjvM9XErSHD9",
  "key28": "4PZxoRJ3LT9r8VBXMR5UjJZuZpDbAuByrL4u2fUVacqdmDSN4aX5NFmoGkugLwtyZ6Q1XhPyDVppYABqVLGFb5HE",
  "key29": "5JKtNrptePM4scYkW6dN3Rw55Fn6Tnrhs9SY5NQkxGdMgty2r8rkj7W1LdvETCx4C1KPAg2PxkNpcY9s3HPDfMvh",
  "key30": "3UKk25EDqpSWp2ADwwwdaMC8MGqwqZAxcmVCJuXAoXu1D7vyYSexcndK37aMXYUBGrFxb1ePErsTDQvCgSNdePEK",
  "key31": "282PqLdvW2EmGw3Pd8FzPd7Pc7tqGUFFFHFt9cNZFpK9asWGWhg59W6zygWcdi4RQJw9npHNDpPPpjHL9ZUGZtEn",
  "key32": "5uTXFzSUTM43dqmKd7dj1miAoY68BdBP9LEm8rHtY8KPjdCa7WTRfNxLXKcFxtCj9wWTUZ2MLfdfU1SNiMibiGg3",
  "key33": "4dWyaMLks78gDQxo3WC4NRWP2A8T2iKuYPfM5XXTTHXDNajhd5rkPWC2xf79vasXR3otvwFTSxfHzTuXqwKQwvFj",
  "key34": "3nqrQreY8LgUCDM8LrV9EYqNVKtBG98FbiQPxQJ8VkTxHh9HPDaP62jzfjkG8axT4JPEf5rv2HXHqADu37XVLdZ8",
  "key35": "42YiaXEzFfnrmiPCG9W9Ex8B5T5ZaLgi5CWtaGnWzvvwHJeqHeEToH9kSS9pyRFMtVKmFuBz8XAF3o74jovCAJjo",
  "key36": "4YnANCbnWqTLYh3Vt8WiUPsBk8LhUGvEY9sywTfZtJU4ixAsiDqHFbMxdrF4TgncGtLZmjGFW8u2KYPpSXHQqfHG",
  "key37": "2rF3iAxS3CkpHbuUf9Xj6B4auHbuJXANe5Z78ZVb1FYxFT3v9jxNxn294dn8DQV8Svu1tL7YJMGVGFfrrzWEDMje",
  "key38": "3vXszCjumTLAhiQZwx8JKqc8MW61JjgxN7qQUvaEUXkwnm3f7fZnFnzbynEMccasrmF9Wp96wkY4Y4NsmiwiWgdH",
  "key39": "49RiegfvxL3jf7ntUN4LyrYxyWeDHxe8PZj2merNUV9DxSSuiQjrm211MSVPvgXtahF71H7GtmZ3mG4jL1SwU4yV",
  "key40": "4iRgPHBQJcRTJd128k7X8aeBy3L3mZV7dqigGzKGUhJRcqMuJBuD8JYYnB766mcxm9GTxLJdjvaX9UHfMa1naiDc",
  "key41": "3NxdK1V5Z1HAuohmqAkNh4nFeMmQKbfg53BqcQo4ASfTcMLNH6EesmHnmiTBn65dXpadovjLDs8qzdofVK3WA4p7",
  "key42": "2VdJHp9nwpw4HGYTU7yk7WtyqYvQxjvom5cNnGVRb472ToP3a7C1t5WaxZSDEjnKxp4Yh3jzYugDX5e2jnHYgZJG",
  "key43": "ZccEHWxF4EKg4D8BamCCZsdPJRo1t3Dxd6mDojK121PZLawA25LWSXrJbvkmPjoLBf6U64ypB4kbjTbg4LqrD2p",
  "key44": "3Vdq7pJeXZkbdssSBXEx49VKfH4Fj7DqZLe2QY5HBPuoUUUYHGmxjzkgM4ied4E1FQeiq74V67M8vjfCzmRwRFf7",
  "key45": "5eFi6mjiTvaR6q6Bpe3vRSPXn69no5mQuh6FYNQRyMC2kHmfbd7wzEGPamKvcYNRCMUV1d4Pv5LipiFKUBBrpP38",
  "key46": "2yxG2YzbtY1YozHymrEQVyPfKWS8R8yGEovp5QFggMg2rC96d4VsjKPj82V1EX5jQAWbUh4nC6Breycni9eSCovV",
  "key47": "3FZTGY9jc7LW6AZcMVt568P2eGV3MTzu1p2CXcWrazGvvNXUda73CwfTN4R2gmrwYu7455rSNHzEXuTd75EMWZxX",
  "key48": "5HzmogANCarhM8p7Pk8qake99Z5VGk5xKeyQZhMo6MdUy6FdZqqnqj1HGz8bSdS9xWnbHrubqg3p6YFjc4McGLxZ",
  "key49": "2bSQQEaqb39y4gAkmrEb5iPXXiSnvZ3MX58a93cSVRGvfXtxgqMHZn8iUXiLKtuVuYfgXPw97B3yR5NEscD3hbp4"
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

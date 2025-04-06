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
    "qNPeBNfmKPrCYCLCayarjNHsGMz1BxCVMGrX5Sa4egf2s4ne8BjnLSGknSQcHexqfVuvDhpghiJyYXGpHBepwBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "253UGbKBxVyZ3hAGwE6TkfPn2m9RbHawDVYigzdJZTjWNQpqUJZRypDWC82k9kYTbHLRUwxe6DhUHNXcExL4q15u",
  "key1": "4UmVSTC8Wbw6SoBcjx1ZSynFpNRPfU8xBJ7wuQeEzuW4UTz1apBJ59VwGt297a82wp22avhJyKQWePiR79WwbCsn",
  "key2": "2hFyVv3pALaU5QqJ7pqUVsaXHPDHGVKMuuU4Bh9CwdSg528S4GMYTNP8yvLuwMtkyK6Pq53KA1vhTkCM6ukdaVX8",
  "key3": "4255FeWHJFgtBfaCQidhHkTLMz65n4iGAsdRXqZdhkW9RpXpvdD7DDUGytpCXYBehkNfaW1T3p3nKTFLK275D6Pt",
  "key4": "5p4MbN4mJQsRt4D7fzt1KSQrbRNrcC9S5W5ne3L76zsNsPG1Trg3YaozXTgGxZcCzp3GY6k2mNad8Vti5vYi5cS7",
  "key5": "3VZ2HNujsKFqvbLtxMvHu1SfEMHqUmkdSBXk5josf59PNhP99j7YFgA1n4eh3n6r8ZT8qhzPt3kQWbSHEJDvn37p",
  "key6": "4vAt3oVnhjKGqz5HjJ3gXeNL8f3Uemizpvsr2AzNXGuntPS4yGeTeoRdZ5AiP77dZKRhdPWTvLfpbQM3dGGCyRuj",
  "key7": "5ZU3UB6YZAocGzS7HuV79c6D2p1StHYgCQEnGq6N3miDW7XHBuNQrHzvm8NRzcw1WCVrt2WiPUdK8YcT4XgZDkJh",
  "key8": "2q2xz16UGGoqXmqFDZgBxZRKJ47gCedxEokvj89Zmakv5E3u3CBd1v6EqT9fkJhCttXNi2mPZCCGsf1PomDDhkjB",
  "key9": "5jkHoe1mNeFMbKs5dKVdUpwAji3aohhanAZ58VvuEB1bo9ejnQHGbSVa4DoPD3UVtXVfZiGU6x1QLjySR7GrbCQE",
  "key10": "3DgAvm5nkpFpXJDAu5E5W53fCY3K58k5z6gwxcdhTRZRsqFrafatByZXSWk1iNkcmWFntqmQJqgUdPCZnLmh45nn",
  "key11": "5AF2czk4jGysP2sfkcy67TQcbBWKct5Bsf5RVePeZQ2vXARHaGR5D6NqC8H5i1pkgZMAZC8s1yJciJjqxkSvAYfu",
  "key12": "ZMK6xTthX1bL8MaBXpS36fEdLqDCi2C2f8yGPe4WJ5X6FGqKA9xbKV6tutPj8YM5P9NtkTnr1axLt8pCCREsQEP",
  "key13": "3xMsLtu7jWMU2HiehFn6iETzcK2h6khUygHxUmy82Cj1LF16pqijBHChG1EpNdphfd44G8fZ2EeHMcYwTpzaJ4rq",
  "key14": "57sLgAQrw2h1zTt51YNDEdH9ugUfL21mmkgvW912LFS3xfcJedZutbeobr5WReCM4DFTjZPPZP6Zd1coCj4ZdzjM",
  "key15": "352M9coxsembnnbT7oWQTACfzwu31tG77kM5T3xA88tfZ1qPPiGgydTE8yEU76uf1xRyncX4htKmVWuyaFmHNLVM",
  "key16": "4N61A9GTNn8yBeaU4ANavDhfQB24vngaGDCUoYu6tNmvR2np6vNKKGSTY8azDnpwf8FX97Y4q5Kou8yCm9GYr25d",
  "key17": "3eSLf6LybuJr7HcRfrJyziwZzBuFKJMrDAxAw6TvqpuWnfSQo9gyxGLdeaJPbEKYura8uyq4GVEPN1XbG7coMscK",
  "key18": "W3AJHnz97H41rwyvgenoY4b1Npa6M2pjfKHa4MXwrhZnF3jGwvD87Cng6415ijby2KWiVqKDhTwXFWSu3bJXY55",
  "key19": "ES814ximZDtfBzrGTKc1C7ViQNm7TZ2dULa87MEjURFhBuGKhEUckD2vZEvinGHw8RZy2JCPPSqvoRbXwnDcJaX",
  "key20": "2aw4ThrFzszBPcs4JMqGefeMvayadznP3KwGpb61NK97xnJ47AHgjGN3k8wa5Qzx6aqjK7UiZ3Sq3afDRDcNG6nv",
  "key21": "35eLmJBiVnJC1FXuZM8KyXP2pH4phrNNbvzG6zjYp8jfZ475SH63JrZrHG49cBXYwzZnByheoKs1Yhz5knJSV2P",
  "key22": "Hcx2jhRSvPjyvY5J2nWvCF2oJJQZR1hVpp5NvzDDsL63qPJ7u6KqfyNGRD9RMnLtidrfhmNW8WiqsUZ446UZL5i",
  "key23": "4eedKysJc24Y6TVsfXt2jLA1jkb46WnYRJJMh86LpA57m2hnk2s4M9sfPp4wTd79Bof4F5XWsbUo4XcWqySdLhFo",
  "key24": "NATCgxujw82CHrhLDTJwVKk6wuGRd1yCuYW6zWMwzmw8iFqytyFgi5R4A1yPrGDn58kAWCGa9FNbnqLvvX9HYvn",
  "key25": "2nyumozwdFd3Dm7seHBfMfwm2Z6Q2BRenXbMCpH9skkXqzHFxxdUkWtoPb2sqdJigwn11kXVC2u7dpJqm8EKGrHr",
  "key26": "4zwsru7hQfePuWWpdzkavTZZwqCqgerWUUsYRCBNmokvnxUT4T6C3P1QQbFMf4LQNoL6nUDnqHV9zSu8bTy236GH",
  "key27": "3U892Ncmko51rYb6DPFnFbhKvoYnAq4pYLtEA66oNE7e4EC9Kd84rs7YxoxKYFhqj5TvN4ULuovt6fH4Xzcy5sus",
  "key28": "56XFfFjgsArxsiAERxXEkmphBjddmgGgXmg5WhVYwzBgoHmMrzJjDKXDGFU53m995wW9p7Ai8noGkhcz414HZ8UL",
  "key29": "2ufKHChE969Qxt19DGDqUcMfeWy89xxrL81QpBVtUyjnSDNWKgyDnd9BRPToKYu1ihfzSj5REDwedzEDaTBNUBef",
  "key30": "4447egvACPpdVbJGTNVmT2gCqVjdzsZ1cTtdU2Je9iq6Rt13K72yx63DmKHxirAdm6SUNjhNFdbceqSpLmaoZg7i",
  "key31": "4Jvy4mbEi7TvZSyjfsDLaGABG4MSwVjobLNxEswR9qXKQAgWUxJZw3GEUpLWZMkqyXp7v2urgJ6TTxLbYrnwLcx",
  "key32": "2V9vjDUk174jiDDy43XAbB2zEyfAmdVysoTmwMwPQ5TmRbFRz8iMFErWnGKEhvweT1g1ZjRfFRgdVdnkhWpahaXX",
  "key33": "3rwfixMxHLuKZvRa5pq8Y2qQQZpYvFbPMNDd3qpDJzefZLk22P8Ybd9zW6uTQp2tQkkmhgmXFP25HKNHFGiiL6vs",
  "key34": "23yMVjc2U91ggKza9gajdEZhfpZuyVfUrxp1oQ9AeTX92cBYvYRgCLzFMFBWoD8oiuV2iMp9b2PS9So6SwLNgYpm",
  "key35": "3PhKWrCApMwQ8TrTBmw7wW8rZhWKhenD8HqRmr15hHFcwNBMNhTewxMog5HY6w6bomCd8bYgiHRZTRDoTgVr38wY"
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

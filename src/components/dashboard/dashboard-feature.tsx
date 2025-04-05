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
    "2o8VWjvW9cGJrz8WBut7gsWzwVEA8RibuYrRvbtrySCFftE5XmAmGze4oamMMSb3DXZXQXiXHdDD7QqgDnxUfiXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KuKmBCvPjRhbq9qqchzqRSD6yb37hjroYKWSbYx9NR4EqmEnyEDpRLKsedghN17aoPBeZZ3LjQayaHLxamvpxeg",
  "key1": "4y7C77qUFEzR1PUwkHWWRR3w5dJTmzWn8APNL9KrRJRZDmnbdB7RFoqwNWBn12AgCTxHQp5p4YpfJtjjESTT1PNM",
  "key2": "jt4H6LKUNnqwgz6Ge5XSz1v61aPExG7hxmfdfr3awq2pmh8jWV3yqzDXMdFsBg47oPsvQyChcNafjTHUoZqjGNH",
  "key3": "Fd5DooYGX6pbWvPKcnnjyYrB2qivA46bvkLuHs3kP9uNwaCBzzgDE2Z3mJnqtVRHt3Ae12uxYhx19argQEajMKA",
  "key4": "5rdci6jZGs257rjAmMaPc6rhFwKvrcEYPJgbhY43tMShAjrrYHJe8x21gJKW4WZNimRtB3FptPUTiiZnfWKTggnw",
  "key5": "4n6qwM9QhkD3nNE33NqoL5vAf6vptiSk7SmvtwConALaYvutjDEWRPKDKydZg1WyphBviAgp5yGehEg63gEYMLam",
  "key6": "3v4K4hH1ttttovXzAZzP26umYNNcZCd9vYeT2hG13LAZ7RPxExV1j1pgvrJzL6J84DTs5gECvz1pjo2cEBztgVsS",
  "key7": "4HZtcVTidy6qCL26VoMURSpaCQeMXwyKwg7NmdR7JtbKiQ8A91nBN3Foo6NAvAzx6Jjw5tEjNJ8tcbZPcDTfTxmS",
  "key8": "3dEnasbdySAEmdDYXsikn1t3GFGsBPeSjUoTSE6eRgwqMLMQqCTdMtRP2qMz3mWvDr7hMEeUYZvyM3vNSktvTyHi",
  "key9": "4z38TX2AvxjnC28pHK1dG7gnLMzJvHijNAdutsm6CwELsbfL7Fitog1ZVeocVsmhUUgSCZ1j2AjwXKAePKbsaGZh",
  "key10": "58QDp4XR3DE8HkheDTt5Je77usPaxd2P7oiB1QfepuUAdGKWXkmo9ewcYdxRrPJPyDa5pVX2equT7CrCEKosEqpE",
  "key11": "5buJvUFKLuzggbuowXPnuTkXe1Dpoz646ednasJySC5C6m4wyrfNzKg1Y8WuHwrNSzFE4kNuLMNgW3eKCJNdaqWF",
  "key12": "2ZewTdE2RPcXnaeh2cNDq15a9bQfTHq43LTfb9Pv3yrLQ7qDAKE5SvMX2rTYFgMbmhYGh93eufF5ZYYjSfNBRSPy",
  "key13": "2hbo6rwn5eiitk6ekXdiuKDA7rd1XkXwC8XJ4vc7b6k39mizdB7H3UYVkztu12aHoz3gTi9si4oxVNfN8BxiSUyy",
  "key14": "5uJH1C63A9WSw5Us82Aum2bVw5E6pF6nFWSyGaRXhAib3bopruRWRX5agz5Mz58232f7tfEwU3JEwFixiRg9CzEy",
  "key15": "hFzUoSeW2DzC6nB4FhZCgPTBKRPUQcyyzpKWjKPkef8VwYFiHbRB3QFBPSAcviss7nqstgo8NLstifdj259ayHR",
  "key16": "5zFdq6gMhqApCMdEWZZSh2kNSzGUudS46q5sDNQfFriyWGoDvy7aNGcoZuzmLQgCB96E1LMWyibv7zZbUjDcG4SX",
  "key17": "4T7VjPpJJQ6utrYRawjYX21p4agG52j22zVAron6vPwYPtEmPKz1ctuwqo6zcVeYU6MSDg2n9ybJESrcZDxEHeSA",
  "key18": "2bieo7UmiAzNqH4kLgdVKnDfpthThUR1S152bUcLJGhoAaPkkiMfirDS9iKKNa3Pn1eRHQKQUh6kF8UrfGPCu9aJ",
  "key19": "5DMgcVKKyBMehoW5WJxAj1mM1xh7RyQAWnjRqskxpY4WPLs78rRxNFwW7VWWfbMeiSTMJFen2gSjQ6DRbRYDkAMo",
  "key20": "5r4aRvwxX8SYVKkh8FjH18AT4gwHsoybdFS1G7QH1cw4L2kc8wwHufWqecWk1hRiLk335MyK23UHqCsRqZYemkct",
  "key21": "Wwt5cCEnr2Pk1seda9RyXME2uBhdT5qe9MX8caz19V3sCEhJq281XXGmHNGndXRQfbbaFoxD4FegqHJEmX5xeRf",
  "key22": "4oZpydcvpQ5BXM4CvMCKjys7CaMZP8Ks3Wv7dbDubx6RveNdoKk75pyUneFBBW9rmEE5kykn6UAdXg2WhGMPRxp7",
  "key23": "2heF9eGrmCpYJhh8JuAG1UeR5GjoPNSAjFPBVw9w6vo9gCmQGWDdx82wNSf2sMvGVLcxME9WLA25fcXivnTQMUQg",
  "key24": "5etohYs9obizZsXneRHCSvhr5XVXBJC667ZLtCVpxrBu9TDhBRtVsuHRPeJLUMeQfTtJJhYwmpePrng9nFhD6RFD",
  "key25": "GPJwnyG12WNoofsdAfzAees5EUry5NzG3mZ1xF5CqS4gjRq6RoDmWwkpj87yLbhL4xG1FGPNAgmyVRKQEXEbMX2",
  "key26": "2XG5orbcKhHfbpW3XPJPFmGmdPT5vCs4ARqcnAS2YuPaPgXrkcoptDvdG46VD7QiopvqERxR9yKHKyst4XYvUpoy",
  "key27": "Z6Foj3HgA3tA533X12gTTW2kz4bYV2vVo6yu3pkpuGCnBM5Dp3QQTXrNyGJGdpxmWrBfs4ddXv1jDMs9vDvq9go",
  "key28": "3snyQhNCC7uFGyHLdAdghXg25PhVXMVeuYei2w3kyb1jNtVMJrWpa8GbTdmntZgeAQgLsTfARqZCU78JYVUsyiwg",
  "key29": "2JUkajucrL3vbKF3wLCTwzow8PnWyvgZJvZSkvLzJ76pgM5YvALzD8kz8cLu3eDRHjrjWfie7eRA4txud2rUmaK8"
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

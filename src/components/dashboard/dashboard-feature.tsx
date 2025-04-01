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
    "5UgjgsgQaboQBq217yfFYdQafoP7meLKb4pbxrgsCWviRnD7daXjbYZyQogXxazr7H1viUjpkQUvwyz6ZvZgsdva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d6HsLuKaMLJrATpvxhdYQGhCtNhNtLrZHDRyEDd5aDiGjYD6bXriBcpZ3Dx6XjSFoT3ZgGvW2h5HR39uH2Hg5YB",
  "key1": "UgZS6Vy63EHuvERSd5UdxHnSWdzPUF7RpEeCptq3ivRSHoVPAJaBDzuWkggRXHUsMs4WHdf4e9t7FPQ6AfydETN",
  "key2": "58J1nvjA3maVhs4NzRbjVUiF928eW6vdpVNz5NGVbUwVqY3Tf95Ppw2Nk4gvvALPR8oaHtP1hmAyUTg7adCinD27",
  "key3": "4F4enLBP5niUpFm7jHSC7eN6sp3QKX1fU1V92hu8eZCDzYqeaEetsmgDUpzBZx3JVVcBivmpWEMwS7jDLHfAQpHp",
  "key4": "UAMWZn4q5yFFYpMWtLwLFXSKjebfbT48oyy2n4GiVSB41683DKyvEwhGeAvkByUf53QenXHQ3i4VjDXEEy9ee9m",
  "key5": "3a4oLGwaV3pDcMMotm19kY5bR9kC9J86Lg3PhJmaVvJLFFU6KXSfDDmmMkHmRJuNEio5g88VBTwekL1KRKNv5DNU",
  "key6": "tg9hcuMsRfLsziJxjQzWnsWgfDhfnfGSvtgkqCY6QktYuiuoX4hB3oJ9myjuLrfSFw49QKEF36UdxfjjXs7KaYV",
  "key7": "42UmvE6CZeTwxpsVziKdApBJdL1PcjByQNTr3mfNZHXEMqseU4DZD7bsAb4hpKbu2X6ZTE59F1NN1REKQtpxxtcS",
  "key8": "2N7gzrjXKikTQtbQZuCyPTzmGEmfrsLcjT4j1nR13zWVmi5noMTD1uo9DrW53Ygw8QG9PNZF5nKXNUdsjH1Qc2vE",
  "key9": "4KgE4sPipUQhYXYsRUqSB72AqY2AiyTJsuQ72JZeU1rdKtrwEX51ubCFxKoRdeSryngRQtoswTHdZCeAcbhKdpP8",
  "key10": "5TUKJXUUsHQTqN7Xicq3oPe7chUoDY3P8MxJuw2oDRf9jsQtXmCDxnQ9YW3DBB4iTbaWwvCs41gu4KPGJEtyQmEj",
  "key11": "7EpfaPR8ZNRVnXuDqTGzyZsak5bTJNSJK7DkuzJ37dsWE3FZDr5Rbcg6HtRZWixNgAVdkjnj1aPafqnDBhT9oR2",
  "key12": "3GE2tmudHZXt45gres9BGv1g7o8tcwrnG4VrPQS3p8Jn3LqmPCwhi1rEFaSBBuumR4E2WNMDyjnMSyuXp8dV5WEF",
  "key13": "pSkN6CKbEh36UyHoRW68bCPm8BpSfwcdAkAFYxZuyLtS25sCeCMNDNbFExRP6tezdjqjWxbxnybzHtR1UukEzmc",
  "key14": "3SY45YLzz1zbG7PRbJXY2qL3pEoyN3XMjvMYMAs9Fez56XVhqgVjPQjfY2JzLaA4S6v3u3ccvRNfyWcY59iG4Z24",
  "key15": "3iLrQxYZSaeQLPxjYhLkQNR2kuPZzxJFPfvQak33se6jQDJUBBP7GRqjMHDst9Pd7C7NNHLbBiUV2heJpdZs6JVj",
  "key16": "2TzkvdChrfpDgbHQKF4iNtKNK4e6cZC9hTTK7erv1esavF9UmAggWwHGEEWD7mCEdW1n9yCn8DbW8LxrPEvbbf8b",
  "key17": "4teg4vtMDjY7kLNfAdqA9ZvN6gkVNvyLRM45nUD1MtsSy8RtXpAwdaHbMj8wjiR83n6m4FoCzHntEA1jJ5UTv9uf",
  "key18": "48RAapdvmEvDXXW3ozsVw78tjtqmqTRt8YZtrRoDrDwzo9LRiHQFk5rc2MGepvhZjM7cQ3UoQR5wnCcwdQDrQsre",
  "key19": "2Qt9Ngtq3psVfKUoxBQDuZzBn62cj9hZJUH4utu2hXXucvRNXQq7iLkzLgMLJPz9bJTDs8785XX21VFru5cgCzVe",
  "key20": "vEhxBidf7XTmav13QkyNcBYXMvDgAJPjwdzHuKK54edHWUwgResLHs8DaqMk5Mi3ccJQ9Fz3K88nGxumtr3mVG3",
  "key21": "3xRXT4iUFQrSSVxQATDEWD5vSHysiCYf2qnVANmTWERfcCuezf1k5r6WzZGCWzJb1tMBgd8KuN8dx4oidy2gxkLR",
  "key22": "2kTnvFZNuWCSLncHqMUX9epn4P31YoSqNis3k22cQxYLRrJ5CV6i59zqB7XxVq36aWQ9WKM54HBe7m4jatpWs1Pn",
  "key23": "4zVXiHGVVeUkevmvtZ84iz6cn5vxLpX2Vz2tzkWrPGjAdeaLbzoxVP2BN6cjC9x1aW85XmqfaenGgZ2yQz5HJZSr",
  "key24": "4P7CDbjx9gZKy8228v7hsgpDjWwA5dsCYDkxzTRbgGCiaBhV554uqA3BL4KDxj8GydmeDJy325LsYUGFLeNhVw4h",
  "key25": "5R9drLQ18wmmjq11MKu1nzmq3eW6UpjL5fPkK9p5K12fwBfy95NhvfUbUGViokAkzdPDDChZXuXsMd8U8xP4ptyo",
  "key26": "5Es5dGXDCWgKA1e5PWGi3exSZmiJTXpMmdHdGkVDS1w8csvFXTX3minoCdAhce8jy4H7TnUp5kdaM1sf4LdRjeP9",
  "key27": "2f2wH68CXqXKXxJat7tQxjqKZAjD4wkwwNTsW12LArMq7QxnMnBivCUExjMAB7Tx4sgXpX7fYYSmkbiBrc8Qrwhc",
  "key28": "3XzCd63TnpkKtGfKR5LJo4zU13GAeq1tvw7SpKQGcu9SgFm6g7bfSJJMhyASaDAnSZ2GQa8zoWAh2QFeYsqRyXDW",
  "key29": "3esUHbJuFnmqFePzPweVuVCYffqCsR4WCp54cMEy7aCP3R6yHZtFFaPYosuwsKpr3Gxtt5AUiWNr1DCcMHAMNYnX",
  "key30": "5NA8g92PuAJwvr4PdS7U4rprPjh6wJyvWhPmRphCwTMZEU8phoqp9ihusejpmBWHLEquSDSR8MqnQfpW1B5TcuMa",
  "key31": "zZdwfrvPi332og9GNVfWVKvBMMzrT7fBff1FJLYuHhNaR1q29HyyjhTF7FXdFBAQBQSCHhVeRscjoaiTv71bx6W",
  "key32": "39eou1FP7iNXBYn2u3xJo2onqRN72KzDUha6EYuMqQeuRtCvWj5aHrvwUccA3xAmXZeC2AtSF4PQpaBDavXDwadU",
  "key33": "4Ffi7SydiiBqYbPBm5Rw2eCmmompPCrC4xus8tTjLhBTayb3HHHxKoDHHbdREChXZYFUKbMf7RTXXXCi3Tj2rPoU",
  "key34": "2pZGcqv2rDibSAmNDkonT8yX7N6o8aT6vnpL97FeSrzMcvUQvFBoaFfGXUdfRKMxCRifa3k3KFM9om3UEJ59cVr7",
  "key35": "4kqHUk7JFJxL8gmCWoLwL2gTM1ZkC1orZekHApcftWJnY7ZsM9Y6UPUmLuebbopwFyVm1CbpStoLFSSES6gWP1aF",
  "key36": "5K2XWcCvbQPL8pAyRpnMM3T43aJxQERDnYaK2YwgJPVSUj1dK4JYqRTXrFuwFYdiDDUKt7K8aGUTq6c2VudeZgKr",
  "key37": "cq9VFwGi791UY9s28vY7DbbvQZv8K6TEzK961Mkg9YZ23jry1q1FiF2fVvVfV3CesYAb5Qzzr2WrpBYirdDbPqH",
  "key38": "1mXPjJxpPgTehWCUupk2LWKRmdoWxBEAwseWvyH4nTFpDFrf5CDWpJvHtDgheqj69DrBHyohJmtcUia3TbmZkqV",
  "key39": "3LScQpqvbR9Sd7XXVA6zWjiAhCnvpkKzxKpfEhYjmwxhLdqwRtB63JBVZzCMyF9ozY54mWmJrNsMymPYPWXAhkwp",
  "key40": "5tBZ5DhxWfX12wn2TVjXPs5V6o3oDy58dSQXcoZrGxUvWv5m52P8nqMr92rTzXU8sXmQt2PBz5C59HuxBfXjKFoT",
  "key41": "prqwsUiMwDAu9av9YSYCj4zz7VMHTbiTj8Npsk3RMRkvjfc8DxLKawT4JhoM7dZZj3m5StyASeMhS94m6o9ka1x",
  "key42": "5UuQEcqyh7xFXtPuSLa4wyCMuN27ZFq6tbFnXrtBrfF9HriJwM3aQZVa4tyCwcHbVQzEnRFxnTUEZHr7TAaGwcAR",
  "key43": "4wpqWppmTPmtpi2qfU5P8eCziGVj6Any8kjH62vZbxo1gBmKhgDtt6eKVjQMcwtwe5hqgmqHYMjxF4qnXVdhMys9"
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

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
    "3vBEXU7j9cJBP5h5kdrPyq4sRRwW1FrH3mhHofgovB8Hx7SEdgBkLXftJjmm4WcwDHR8kuFtT5E7z5S6LwQ67Vof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XrSk2BimLoM23U99ZvdZYnhwqUoL4snQUQjPcFdokFF6GST12MYgAdHtmYojC2A12veCTskW8rokPdNabKHjc7o",
  "key1": "3HeNiSkoPA4qYD1SVB11A8bRNMP2DcsJbrgFvdU7eLZz4mkhfEBRwdy7JHnFwPV35FTbnhkADZkh8uv48XHu6xj",
  "key2": "2Dd7VDYNUFVuNB2MypWBonfWn9MDUxpDtWpKMh9bnMd2kAuVhqDrid4SJdsx8ymNGfMSctaLFZXyDESHNuJ821d6",
  "key3": "4QFEbX2P8EgNZm6e933soRmvJx35FBxod7LZrjjW1g9YVhGJfmGJ1xn2SLTLM7L8RF2SwrNEodohewwppg6zFtY7",
  "key4": "43TosWnFd5sFDTF5guxizNbMu2M7ykwX9qtBnuevnw7r5VJdgG4sikjvCcreXWrdAaMA7FbYrjw7HQsWsVA5KBQU",
  "key5": "t87xAJAd4a4Y4Kxkz3CsJ3wtsbmxWZwgrFfTGG7UG6BbfnvpFebauCPc6zGtdUSSQJWpsVL9MBXCgaNnRmN8gEq",
  "key6": "3VWKqqVBFyCFW5rx9EKNqXUTxCLArHToCkRdzby6bDrtGZ1v6qVLsjhgzaJkTE5vpuyi25fxqu795iyuh3bGWXVY",
  "key7": "65cHD8xYi8jfYyt3AV2DrDpht9KxejFTTyNmJZne4x1wrUYU9JguMg8TCEJ6TaeFHvJ2i3mZEkEVyaw7mPWQCsq7",
  "key8": "G4bDE2inXGcWismoMDydxcLGMryVdthsrKHS2t1vsLJiMbZSVE63aQcPmvDE63zsZm7KR6YmiW5DqivG9dNLxYG",
  "key9": "22sCZKgvcZEjWjsZUjRV1ToUAv6parZqyuDrV4FepNjcuayW95NNZa5Z4yNLrsK3fJVsvxft1CR8Z2Shsvdq1G9P",
  "key10": "iT7n1FaZpxrRQGU5wNHA1iPaBP65Hp7DFaUtr7C31FoWHs47ZXSe4FtsAFpyNjxh8WEEsfU6BAaw4xvKEgkqiFv",
  "key11": "mQGdLMVWgYpPeS6VKSrSjswaAvnfpynxmzeDsxzm3ZLNMS7HG3gUUqWcaSsFkGBLw9rCueUxERCvyq6he8wtBNy",
  "key12": "5Lk7d6KZker5kpXgUjfpifj95CmkHBWtMqQEhBg6oqLpaka9JMozqiBhk4dVqNCmrsJ1Yt2DDY6uGhBzSNYA9Aev",
  "key13": "5K3uUfTN1PJUiphhSjPtuqJZEDjCL7jSr7n7LkJc9Mc3qwGCRFas1rGyFzdRg5TF7X8aTxT1j89wD58mkJVxJ2k5",
  "key14": "281qZxwMMbcKdDF4H5w1gFFxLaxg2nj6rFW6MWQTLd7bPXH7m5Ud3VQgNtJF9wdFxBxhehHHrU3kcsU5dbBLhmzm",
  "key15": "Ycm4FNRHSwNCG9mShtPZ4MPP3eMGgmPRxDiWWuPTEXQXPtptBTwBvZtXTyWaUvYC8xzxXAeEk4KZCYfrKtL65w1",
  "key16": "4tZyBgGXPsKXdderx5pNgapWdsTwbNvKEvnc9gfd7XDbtHzfPctTNVF1t2h7exg85FnHmsVwhnyzGJZZM8vGY3Wf",
  "key17": "Kp95ojD5GqK4GmyqNtFf7xmQNXHp7Rwg2eTHau6DFVGzXhdbPVGYcmfiGdL3KRwEpEdToYMRz87qwQoK6qRx55G",
  "key18": "3iF9d8mDcNThbYBoShjQ1D1GYgFkVkmRmVUTcFkaz5YBSszmkzGwhsim86VaTSTKSdXiuPpzW4yqWLf6fR6xyMQe",
  "key19": "2AxgEbS9v3t5qRjgtHW9LQV1qCyUF2iHWAhmS7w9nHem9w8Hrng8Wi7GBkWTCfM6AWTHk7ffPYZcT2esRmNZWFJG",
  "key20": "2DaJvLx8XTy3coh2Zfvb16sBfZjfwKp3nSxiBUx5ij3wvkYtHKcmtD2PNFYQEp3xr1HuYHu2pmFDvaSvgowVZjHn",
  "key21": "pYEAFko34YWVxL56YoU3PEPgSJz5xTj7dbjftXYHx7thw6CKeYsNZ6uevv5jJPoiyLpWbMuibFcFmu6qSAysKFW",
  "key22": "5qRQtNK1LQFjLKxLuQjoSgRH76SpZ1RJwhFSEfgqNHcM6ticQwmeHYdKDMi3YPxN5mNo45VpXCunKPm75zGiHqXo",
  "key23": "59HTV75hnhyExzYshjvi75JYLKsKSy4FnnnkVMwZsxNy8hMSQiLa5XeAETBQde5z8uBePBCnZtMkYu5QKuQkWG7Q",
  "key24": "5yfaFefZXLwb7ai2ANXW2CpP4QpNrgWJCsnCCC9HiBxCyKyeqsFPb2YwvRx2YJtDQcCxrcy39pUSc8fwu1nBdNz4",
  "key25": "4CmwDoEQoC1a5ipP9AeT7fy8Cqswgn2F9DsRNpxqLqu4Ybfb9PYEwWzmVKgRe2zEZADGBCtqL2uK3UAxkPsdeGpg",
  "key26": "5FiiFP7dXp7E1HLqXxwAvLv4ht8bS5F4HDbtvRS2Yv3ecx5ZR6sC6qTvtc9D2v4mvf9tj8MBg6BvG2PbzpPspuSo",
  "key27": "3tHytC6oHiczxEn9HknZw4Ccv5RRq4wA9ML2XxiW7mVa5kYoQZxyJswQTYDmuDxf9oU6nA2kmNxYyJPt3EbbT4gx",
  "key28": "3Y3S64gRJWoY8h3qDVFeBe3d84QYQ4SmS5XjXBycDh6j7nEffb7URSNCZe5TpJP353wmL4T9rEj6GF9wrA4SW3rE",
  "key29": "2LewkC3HASLYcSJaqCXRXjgmyU24x4M6zikRQy5S3qiHiK7bbHvpijrvCWWLsK9NRyZdGX7dC4XdckANGfzJWRSf",
  "key30": "2RfGFY8CMknZLwitzPzCDHmmoghEjkUqXh8qjAD36TpSkHnrvEPVTZET6gX9jQ3Af4P6cdGNoVjUijmJ2i9uZHjX",
  "key31": "4KP8CiiTiatq9QiHpsgGVC8niZ919VGKRcvTRsfztocqjixduBSH5g9n5T26CjdhTFRGguFcuKSEFbdysoYEmUqg",
  "key32": "5EbzNfSTaxcn8yusyZVfv7bVdpSeo2vv34kTWXFAUJ3VrmCnJFK39MTyLPW3LhkA3L1YszX1QHxHvT63xGyWWkP3",
  "key33": "z7YW3N28p4ndtvbsi8N9j2pNHHCqMr9vhLDgUjpacUTF5F9njgufj4AhmhmX33DDEdq5pPv3hhcavqMPy6gAoj8",
  "key34": "3ycxjPw11ASRSnmmLHfUpZ7fWWuVcX6d8Cj5mpm5Pv23TJyg1wNbMVM7PgMdFJ2cvG3ZuvQ7tpQpguGoj2DwYc6V",
  "key35": "2fgHvwAr1gNJBeyezT7MG5eifV1eZcPtdhDjoJYq3trAxybQR9ugMfisqWBgDyt95gpYJXoWH87mVY7yG7Mh72sj",
  "key36": "4S8VPVSNUjbb5dxeasdxeAau9jip3jLA9o2JjB3BpggvFxiRhynzQDfJLou4ncUKHXJ18Y6MPjNKHinzYcJBuyid",
  "key37": "2goJooYX23D9j6MDMTPJEMuBHL1b86pNF2wR1dwevRVWKcvB9UJnKmbqCTTSMHtiFhaAww3Hd9GZ6zgvXem8PHH6",
  "key38": "4BqhHXMPDT8LQZfYHGmndgnHbFL7ddb4hjGMWeQAGWY5dfiARgKEeUhaqpo5BpBvYzPGHJ4k6WKPgpnZDm5uxYT8",
  "key39": "TixyDSmUkZr95R3QETaC55CCvxcQbeqZsuQSm4w8QouRnsT3Wy15FFe9o49i3PNG9cFB1sjdrfA8pVJS4mjPEBW",
  "key40": "4HhxETcVWWMpBczL736nyMBkRJkpiBj3vmZHAnMF3tP548g5woBUSKSiwNZrBLHWLFned5cKFsuEmBdwLHAXJmmu",
  "key41": "5nj6tLLoGaSkZvWcbzW4VKPyYVbTXmaxzhubZ83eh78sNsM9WfYpZBE9kLcaQJXot3dV3WCFQa8jL8oiWdGJjerm",
  "key42": "WKHyEJ551m9rQ1mcRDev6EfsA8LGGnGiPMPrq4dT7My4tEibiypRbWneCpGJfXRewdxadGtW6C5ohZfQwKHXzig",
  "key43": "5hMWBANvMqQmTtyV4bWDPpmSSVML3jacEdpajeeQEF2wAmXckUvNSnDPjC27ttQNYXD2VeuaH4xqbTT8QVG7QGSt",
  "key44": "2wNwLKW1L1PLR9q8NEbNTB1okrLq9woUnUiBLeiR5ZkGmm1L27Fy4gxXX6dfwckTjPNs9VBAEho58NwBiAfBJ9fk",
  "key45": "3Mh1m1BnZVzw9Bb4xh1jAyMQUrkwPVAnbtueH35eNyhc1aXDJ9qnsDjDQaGc5PDeFAYRp4EG1E1xytVX9qqaXteM",
  "key46": "2m7V9AAgEnXEkQUvWrjxPLQBQwcwNMz1rkbRpuTCVwiQAUuFjCkKgGmtKPZGYFaQ9JgYHPycVmAfv3XeJNLnpbAi",
  "key47": "58UZJr3x9upTNEhEBWFCDyFbdahhn6kVj7RyxAYiiXKdH2fr8kjguLwvHbEwLgtRkTxq8UQLBf1kTG73wwYh89eK",
  "key48": "48SanSMyzDqftzmNFXv82mwL58xXK3ZRJKan88WD5dU4BWugwXhQnSwSxPq8sZ9FkyiK6TCYyzdQW6xTVbNnGzwQ",
  "key49": "5id6q7onWAhbVdhwmYza3cryvbxEyizi4P9g5Bb5tXoL1QZLwrzcbys1iGVmePV4exsvhtuFypDpXxnUMnReRpZt"
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

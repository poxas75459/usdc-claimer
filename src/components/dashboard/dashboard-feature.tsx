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
    "5QDAesNc8V3R3sk7Bqno81kKzLd2kaVXo7WAcHrb8mtBjsMz9i2Wf59KdV6WcHzszbg2t8t6sJqJVMkH6u2UqeKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hKUYPozMoDyUPwehQQyx6kHX3HpUHzDyJNCVRhm4gWND7LJwmJJAnzwcRnc1DXueaSyYBdsLBTw8eW7KDrfTm4c",
  "key1": "4ESh7M2jgVdMgvujtmqqcwbCqfLYKgjvr47smBFnToaWjP7hMxLRU54G1uU3KjE8QP4WqrZ6Xo3xeZG6AyaqtwDD",
  "key2": "HomG81QztuFDMLmKanPnYuKtdtbX3Q5tR9TQHZJ8Ff6gydXg2UzEJduE9VvYNf9FpstQvJH8ZFJAJaPFccPrMEy",
  "key3": "4S7LXpcQsBfe6BgdYPTcZGnzCesDBUFNuzmyRDdWUjTrxSR33uFPQYmifXPX6dAKVxygjmVc44Mvz2GbABXPUgVi",
  "key4": "42jFSb15qnfvUGvvrAR6y31S2aHADba3w39eZwpMVrXUMfCFDyj9Uhrv2fX8mzRcrp1d5RYf3wREHqaynJEoxJMQ",
  "key5": "HnwE3o1PBNWFP795iPHygew3LLugRECLPyazucSCRxsVJT2q8MsDDaZTP6NxkD3K5yNkwJPXtFiCJVpw3KppRTd",
  "key6": "5J2BjTpY9TBHmdk1z6kqPBvwoG7FndtsEz1a8WnjzEPwar3ZQFvwitnsKaW6oYMy924rqGA8TUvPYfzYnnWngGrd",
  "key7": "XnU9osUCvTexwue7YeVLuo9BGctLmfMH53W62zTR2oJ3bQy7oH5U1GDbGdHfCmDHqYPTtLQv6iCeZm1PpZ4XhG5",
  "key8": "3bBCNcmxVTzScj7CenRer4ezVxvioaED7QZTk7sBXvcdvuEDnYzRgqcdKrtLyaKfDBnytN5qdTyaY99WJ35QSaT1",
  "key9": "YhJ8Qj9WzzbFQdE4DHKDEAEJRhpPMSzg4BKvJTY7o9Nn7b3LFJmfNYrzh7bYgy37RWL1JFFJ71Qt1gar5GuoHQ1",
  "key10": "3k35Ze6EXLpyMQjUnFYUK1bCSJX7cMXDytQQcHrB3SBmWoD7KGQZtUYvbQkrzDX4DiqAgCUCzSzcnbVt4vYMxMUa",
  "key11": "39SahA8MCAyTLvbNS5Js9FSeVw3JkU6Jam5Rkd4peuQJJq3vihonS5KJiPgQk12AxowKsdVthaDMacPWG51FAdsd",
  "key12": "5DFEAbWAu2dY6yfpsWgtPdXaeEHDH19VqLHTG63q6F2skSynCnukX9DDMXXdj5JfAfj8fLXtfJQnpog3SpGCrPxb",
  "key13": "5DgUctKDJZuz63qMc71aiUCLvR7A6RPAsFDU8EAjUiToBf1H4F64vRATJYUx32RYoYXBWTG3v7fRALvBF3128f8J",
  "key14": "576gt36b2Ea2u1i6UTgpYY787Zr2fnycENBWegeWtJboMkNahC6cApTVZfufaxjr32eS69Zu3Wz5DZch1bCrYtUu",
  "key15": "JeV5UTW6Am6FWc8mewpToLtTcFuJo8RpYuk7DoW3og1mQX1m4przGG9SUCrAxAXu3Ek6hS2WT9Dwc4ZHnar8HZt",
  "key16": "5b5UJB98xVzWgiSi22iXDrkcXZta4Wf1C12fam3fz26w19hPGP77ARfswijHb2DRb2LPpoJ2Pb69iFmhSjRcuPBu",
  "key17": "4Ha73FuTUsWyYT9L6LXKBuGkWvHp7WpGsHNwu9cpRA9fBVS7SmijMDjWZv8BLNtjvVbCkJEmrpXuMYteXGCrFAMs",
  "key18": "A5Nb4fcUxnD2HmBiiFPJFskp1tVn5bdoDYqAjSgRkbiDwRKivEvZowqZDPkabRyvnkTncU4CfoZWnNsVbP3UdSx",
  "key19": "5DcEpPPB5btTKTN6oyuHcXZG1f6nd5EMqVTWEYEtD39kP75Fbf71zNoayGwJ7rZvWzo51xEWZ5RF7C3o7998DU3L",
  "key20": "3pKQbN24W2S1HAXUMwtM3F2bStDm2973SMAnjPTCr6Ft2VV7NUqVNoNuhBgdgdoZ5A9VMRg6CKJMtiyvMG8MnfvK",
  "key21": "5vfnY7ZiME8RswWfSoenpLqtQZ6kdTeNK9EnGEMdBPUyTch9jCwB4um59DJckSpK9HbAjk8GUxUjsycCDeqZ1NWy",
  "key22": "4yR77RSe2PAgVes6fZu39aNywaBB7Q6riFqQ6639c4cu97hRz5qSp53r4ojtfCWMu6NzChkBL8bik27EQZydSijf",
  "key23": "62GNCHjeg2bJosHF9BrMfRJEmJ2iNkG8b6qwzmftJrMkR2vwCc1c5FKgj125jR1NamasmPTHSV6gsmV6vQxFQXYY",
  "key24": "4oaj23YvwLMVjajS4NuZra3bc4MqAFMzQfGwQy6y382b6hsjsa2kLB5QbfABWY15VstHrCwyMhEq4TMRPXdKq4MZ",
  "key25": "KGdeoWJioByWfinyHqef4DXKHBGvCKX1tFyYywQB3NkLvetA2znQzfW4fsiqpEkR5ANta9edqpC4z2Hz3GPgrUA",
  "key26": "2Uc8rTYaHj3BkJJTA2m3u4MoX9vQkxnFJbBsk9euuDapWW6Jv6qxx3waqxu3D5LznWSs8Bxb4aZVHVL3Va2DurML",
  "key27": "2jS2TMEyggmeaukz6sJj7wyczfjJb2MiBPmLhyudYZMzsZrQGag8KCffAEYKkE4CAcgQhhyAMfZsSZ28YzZ7D79t",
  "key28": "54CbH119qabaodBN9oMdkPPXWa7ywEZgqmiTURsdppUYR2kizKdZUFrzjftyewGa72WWkwQED3n8tnWEVJy1yo29",
  "key29": "2aTXCFoP3rj6MQvst36PFZkHnt9tP1vbANAm2ZxGPirwiY3xdRHbThqvZt5siTMHFYwudMBQdQ5XRYgTXFXabZ3d",
  "key30": "23y6pGx4NC3SLj7ntrMgaSnrQmZ2kzZZENgoc9NiqbSjfo4bPHYWryAYafjqSTXT44vEtxgg4HyhUCBv8qYGu3XB",
  "key31": "5J84tdEjCDfEWu1iLeutjDZB1HdM8NhX7H1kmdCvGZPBLvHVJHkhUTKDb66VVuYaB9AMEs7HFRDuq5MhFBPrKAoL",
  "key32": "2nZsWvjqf5UUcq31tLhNb9jo8gT4eCAKaUURzRcR26TwdMUdoCbk7YqJtgjTstZ7sEQzmv8k6bTQJoXKBmyV5LJi",
  "key33": "436KJc9YkvpT5EfS4UpZKcMzZHbPnkJ7PiezctigXg9GxtLepDW9eEoa3XUdShBptsVZx2PiUHTqTwnp6NTEmqpa",
  "key34": "2A15UGJXXJaQaDPpGca5G1t7wyFvsUUgQzgJrEcbvnVebp812AbhfHEGuyg525gzAbvrPskRi7rxUn7xL8qwzhLt",
  "key35": "67ieNxQz4o1Be25gLmcajtqGWPDS5yNh7MLNp5pLMBXrFBgn3q3vcZeyhysYbLKoMedt6M4xb9RRGftwdQYqD3CC",
  "key36": "4Af4tGe2Z4ZVBf6tP83XK7YhwiGkKPkyxb7wGaY6YfzrhopaZmcUWAxvEEceZSPUtWPtD63BJ47Wc6bB5jfNDtcA",
  "key37": "4R9iAE6croH9VLj1Umw7yqj1ZupnB5Z8gcusbgGMxXTiZCfaLAa6urtttbo8NgHf9WVScBAzF1vdffhhpsE6f4m",
  "key38": "5vsWoGBx31gh2VFYF2jFXVs5NSNthm718a2utAT2jxDaASXMa9bNi8NSvHbnebdyDC2UtGknvHsAjTxjXExFfSA7",
  "key39": "WFdi7zCyMRNCq1rJ7dBPyiVNWQTWKNosqNfMv1H9SBB55mwnMhyugsmy2t7YHHoVUogCziQLqc7GSHFqwzAJFoV",
  "key40": "2rpcbRpDkfae7yYzCmWmo85x9rZYTTv9HMRJqZQxgVT2GV59H6c1Vgjt68peCF7q1BeM9kXqX76T5hsti6ipCHSn",
  "key41": "5MJXi1onvjDBNm8nrWnpwbU3CmE84PwrQ1n6nqXnmHs4MoszdbUfiKFShvAah9caKmh3oFejnFwadXqh5gR21KLS",
  "key42": "5FntGa5rMQ8PQD7aU6rmuDoi5qrmD7zpyovYTe8Aa3qhJiRGBp8YSShz62EY6xcRVHtwUr1fwcbN5GGBh6H64u74",
  "key43": "5Z53JYrtyKfcZnY6rBQpW78x95t5b5XBwr3uczpNcsPcPeFHQHHKLgbUmJMvWtUnV4GHFqp5rpi9vW45wEE9p5Bc",
  "key44": "2eSeec963AK7W3ZEG3qpapDMTdkTwvVbDuBPiv3msULFdWukXJbVBnjz3TdonsdRCr1pXRAU22YUksyXZdMLrE1k",
  "key45": "5E9tWmrsAsT83vEcxydEqMRt39S249my5yFvhvw9bZ1kVvmj6tqYT4wQ19JZY7WxtoJ7SLhEBBkjYXLxdRvizbpE"
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

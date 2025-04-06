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
    "28R6DuviX9kbfPSYyTv2fzu9RdCrmkUoAFXsHUi1R49nrB91c8zxQ5x2HiQNp43zwq2wdsPp6Mk9wtyzp7GNS4QK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kr61eskibhcNx1Xrr2T7Tm5239aUqjCoaUdYyYCvWnZ4jC4b17iB1XeNEFxMyQng75ScRTGA1VzBbHp62TmmBwd",
  "key1": "51BmW7iUdtoYU1ugoxHqmXXwi4xEsazrWtEWq1G3Um5jTtpNeo6Zk1oUQRg1JUYwMDo8xHfZJagRwhT9tM13L4U2",
  "key2": "4W8KoqZry7H2JzbnmZwXEZhfdH344bpno3D2i9CJZVoA7F5YbAsPE3pp8J7yHJtZgRYbHYczbUEjXp2MXiKTNkCf",
  "key3": "44er4s3xjUBja5cscjiR9srL4a588yYstPci7eQSPkeHmh2GPtqucCEj2DGZhRPFNu6F8muAZHvKw4R5V5RbAMm4",
  "key4": "4koLksbJxFqAJMMkRSbBiiVtAbcxDdsQYGNzMjneAEpvG7oMfGBWkCag3HtRY5XvqcRtEvBPpipEZ9S2vEXqTjoo",
  "key5": "4BjLNYrFWpVMHvLx7nPSosgM18FvEmqH5meHyYZNowvpEC9NZAKajw49x18UZvcwLEKcgKnHnbsFWi6dGBmBa1LV",
  "key6": "4Usx39jmki4WHNqym23uNBNHJahc9YiRuLTvLd8rvMKaufdJYUCH5UHu6jq1kvu9DfmMNyzK7WupJnk96R2HLFDH",
  "key7": "3E1gspTro9fFKrCJLr6PbyjuUTJY65w5f5u9BcdNkM818u1d43u5fU7ETkJjyDNFJPjG6NZUCuCvY9KZyBEiGb6r",
  "key8": "2kgxPua7cgwKwsQxfJQnDDNhNfZFZXvM9uNG3WGvDaaF1H7uH1Zyjn7aaRgis6J6drv14QbabW8d8XLiNrNxm9BP",
  "key9": "5C9kmybNQFgEc879uzydFma17ebRHdha2136C18GAKwAoKkjpGtfEXoodAL7N98w1MoyjatPW3EWN4PnDbHs8T63",
  "key10": "2qo1qfiPPyQ8Yk516c8ahiCt6wVdThBjRvn7Sc85Pp1NQC268KcKuTivh7ryB3LBGqdismG6BmqcxC78r2EjYCHr",
  "key11": "3zWK5s4mRsdVLDs8SpYTFZVBoDGfpiXBHDo8C71bd5TG1tPJzRT2Pa8LvcDnd4dEzNwYSr7sLhtBjTHqhYbTsHAV",
  "key12": "21iNoiF331S6BYzkoJ9MdPSfQ3qVrM4A9FLGpiaE1zdFsLNajpLALQ8sCzFhhQp7rMjDrMAxq5Lm9yAYj2iSZMox",
  "key13": "2cV5dPoKJGm2Tkp3RXg7NTBqECAwJoXyPpoz7U5KCxr6X4gRuHEvK4DE5NdwzzXAXHfFCd8itG8GQwjC88ExtgMz",
  "key14": "SPgNbPoS3jpZt73q4LN5BbsrpEkk3vqYHdkVGdyLkWUmnoHtpESwMkywYu7WcGUvC92MvrVrNdfn2AgwiWxMqzm",
  "key15": "4smtHHXP4ggnyspQiCUbopjKoZ4mDEGifVcrWUbGZq5BG7vDTv4DCuwsk3X1aoJ43szj45fdXsu8Qbz5mM14rhAC",
  "key16": "4EJopb36yG7eHzd6yXSjCHRPLJhH8aLgUGkg2ufHsythTa1NEkmvfRw7sDiJr1Trw4KdGSPtgarsBjA2tgj5Tpn5",
  "key17": "5J6C4UybgcqTWtdYCnV8K7fJQwwujddM44K1Y6hR9rbBGtzNkQACcdwskqiZPVhuVH2Qy7TiamdNbSQXFP54WW6t",
  "key18": "Ynn8xVrNsUAkkyF4CX7bqHV3LE4FWcQPPR6xaVR6g6pV6MUk2FBVkYvjiABm84uUXYSJGz3xP9xxSAMeRuzAoSo",
  "key19": "3eHGtGqnWXauBPC4ti9XRn2wNTrCdVot9A8qQxK9oCWacvrQj5fYB3iZ71DSrexV6U3VAao6tv15GrTtE5aUwik1",
  "key20": "hxo9vwsoSkC7io8qSrG3rKq6UvETBLzwQN6L4X1NFX4nvTZb75NqVDXnoiUK45G23zVwbE3xh3Nicw6VDe21gSF",
  "key21": "2UBf7o1wtzBPRGwu3Rha8bTHj4TZy4MGrnLc2hg1BcA7aaooQmBNYiusD62DGkD2SZEhKfPztXC2rE7sJB8fX4VF",
  "key22": "4xU4FNM2teyP4GeLu1VZFwAVLga4vHBQ6MMCdXZdw3GUWnbbMsiAVFbnuyWgoV5V8e8p71Wrgt6k2TM6MB4dezyx",
  "key23": "znRhPPzgPRnZH5dZ11XXiK3vPwdHg7fzeXeFfas1JcwaDshjgC1Ekvhn11vh8NzeQCaJNoVixrcueGJ1UHufYvV",
  "key24": "4ry92E8SxBbEfr6PWx5oyLw7LdMGrMbBq2tYWm2z5L14TBGaZmYr38HBnELckPm2sxkL5TRZdV7Bv9VYTKMsPyni",
  "key25": "2pWXVeWFsyr2vzLNcbmciRtfgfCPKmXkFtxqcjrTfyVzS2kzmpJxai42hNqJF2SboySFtK2QX2vCVoZ2U37xnaSn",
  "key26": "h1KxFBvph5V8efNnEX5hdSv1a9Nkwb2ZeU1RuFJwsZtLebsfff4WpP5kWWDibefFTTKJ3pfYVPYL4BAUPoPoCDX",
  "key27": "4b4v8XZkByaZnFHRfoaoGsK5LU3KMtG6hSMPPs592vktaEEsZwiZEWC1FpKj7APSLG4z9mYGhP39WjfZEqNQyW5U",
  "key28": "3jk5zBfEdwH7Dz3dsGz4CnuWeF6aGfYyafKMmqS3iDa9CPhxcqpk8RiEDf1FQic2kxC1MZo7rRu1CkKB7JzSvcdG",
  "key29": "VShCy5HpHtuod9QRCvSY35VrZ3HKhCez8SLr8GBBmpcDkfPwazmGrTHxV1JxAJ2BTNrn7Esv4xLfvVrRDgayQyU",
  "key30": "5wAdjGJMQ7w9BnvqX3o3B9ZMZyZ9DXkwq5UYjJpRiBgNFPcWEbv1U9RR7VaG7bq53E64ueBg7e9UyziNEYeZe2QY",
  "key31": "5sFLK9ZhNyrtdwUwdnpeN6CnxJCCyB86CoNX5o9Qu6TtF1CT88jdXYXFZyzMLUnBs7WnkrC4DnGj674cZ3ovUbqP",
  "key32": "52ikvQXsgFfFZqXGykkeDAUADFognnzokCKzL2vvEvWETX6gJn74G2552ZWDErN1dyjif2dxoPL3joFJkrCY3b6G",
  "key33": "5S9eRVZQSYZUMuK1rczQaiPdUYjw7Qg9HkdxJT3eJW4osevdPwLRvya14gQUUAd69eZr5giqsi4oZe4hT17tggoo",
  "key34": "5preXVRJG8zHYFzdMmHotNBKQ78XPxnsDiD9xcKEG2UinP6p6Cknbt5H8CzmgNEb5ZDtYXbx34e8hUoWASHZJVms",
  "key35": "22GXQZbpgkCbfYhkH2fvudQd2g8zoeugQ1xfdWp57gB2Fre3SYorexVimdz5pLbmFBVtwpaKvpdVtjZn82kE9wBF",
  "key36": "2NafGoh4mh7dyrQeU8wfsy3JBJRokz7Dx4ZfRbSkHWeuSJnapSobAuCEQonCu4QbnyhzSmj4YpH7jM59HuiZ9hv2",
  "key37": "3fHsU2jXB9ZKKYdsuczpMtpisv5G1MQCTqSutGGnef4C7nYeLTHn5Rx6T58y2VfuVgcEFsYUcHAHR7XmdutQucbg",
  "key38": "RoxUGHTugo3FqtwpB5iDweDJSQQFLy6G3apoX1uwkDFe9842au1ZiTzrez9j61d4uc9HZBVrK6GJ4p6XoJLAcYU",
  "key39": "2B3hxTNjhfFACEj1BX8AgimmBByJ1VxikgCH2ZmExSrpHimJzeQsnAvJi6TB4UpGkyPGf5qtDF9Xg27JmjXCY4AS",
  "key40": "4UmSqHVabMkgZYaQw8ce7R7JQaeLLY2cneaPiz9Jnjix89jECwQvK8NYaneH4Le6fKdXfisntLDMZgH3pEa7Vf4L",
  "key41": "3ycQX1PFwTwsYPVEHVXDDwy61vBgAKVtHn84qyBP4cS6AjzbSP32sPpDW4ZYpjrHdsf6HH3pSVndrnVzYNJESKVr",
  "key42": "35FMcbfnfxBsGpENbgRsYzsF3K9oGSwC5nCJMyFUYa9w7vwYUKmUKTD7t5HvhYNiaA47Q9UWcpknWLB9uDiRKWeX",
  "key43": "45C7LLEwQ7zYfd5x9X2WRRvcsGNBNLod9YPaMYghjap29u7hGPW2UcSPDcfMuXYMFkyd3ZvVrCEvMVkLDQeKKrGB",
  "key44": "28Dh6sjuf3cRfQ9ydSRQNuBbQ2awyWYaJ96GP9cGx1kbGHoeAouUkNEkMXY2wt78KyDXUguLm96xajVPWauh7mGT",
  "key45": "5VtDxKSQ8q5qpfCVvfU2ZdjssgjzmPtJLyvMHXS9eujWK34Ezh55sWnnJ55RmiVBHHDuK1RH8t4B1kjW4ZDnZSee",
  "key46": "ag6fr7FtMhiekA4Z7X6m8RzZqN1bLVxKefbwHqx9WbY4wf2fifUWM4ScGoR5i6auLfFPTwSvEhZGiUaeVudeT3S",
  "key47": "2jfajdmQWrjJecNQeZaLs6LTvUohfv1U1mK79PiPWN7j1iPquZqroHYkzCzh14iWEns56z84kPphLktqXFJkacra",
  "key48": "39QJ1NQMi8ARB5dpLSTf4NrG5AfzJh5KDLBzbLthNcdSdTNj2XXjhWoGW4g8UBeoWSurYFzky1MeaHuQe4d5vfc3"
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

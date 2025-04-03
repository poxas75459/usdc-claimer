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
    "53marShjShGQkBUVghyKmdtrTNUjnCk7UJJZLfsHhf4JYKTwACiVnGLaZfHYcCht4on1ULxhm2ndvWmc5V6okN22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B6fsxtWG7MrCFK7oKZ6md7KKMP2dbbBpnCT7B6fSQPuYot8akbZ8ADmacdUE83k2vWnkNsrpU4KFMVXMj9D1mUY",
  "key1": "65qt3dDzVGbtnttdyL4k2qTLbxePh8qqi6WsQkyVBGtRzsRsdupFJ4bPbpiZzSpJHJ71HCVkLXa5mnnFwHpAmoQZ",
  "key2": "HT33CvpTdFJCw94ac6QWs5TrNJWU46SwufSHibn37yczpWj6GaVAEThtTbbYuv3bB6n1RbBKH3zw7DHCPSdUeJi",
  "key3": "4K3BCa3fQi2D61VGMN4hQfMqWcjp43sfVEwYfH9eQCTcDRwjrj1ppG5fR1kHMgeemFDMQHV3DWC5K5DE3PbdcyED",
  "key4": "4EDoFSmpKaKg5EF8k4BB4srRAGZuFi9eqP157Wc6AESPnUW2WZp5gTW12NhqMX3Jbi6stGsst4qjNKXaugVtgpat",
  "key5": "5CcgHHcV6wcaD2Ko4hTCdbk5N36VtF5e4MTmyAjYt5W2oukUPwfwY8NDK7BBmHxcscyGQp3gqxQty4iL1z4HYaqV",
  "key6": "3FHwEibqN7hare5TZGfT7Y7iGymg2Q8YfhGKxbCQpTuobu2YbncVPUAxPS28P1HsQ8RA1K9tdvuNYUZkT6WmwJ2m",
  "key7": "jm5rvU6HcBzbaD4mCTipgvngCjDf7GFD7QcWpcVyXTnho6EqSYHkFCfi2kfAQcG4bVJEaxrNJDFAhD9vd3gURMB",
  "key8": "2QnkAfWN8DuYXhZL97ssjTL8Q9S8fK1Th24zskhxDZ6g4FZjjzQgwvPKP6U4ZQUHVY4UrUCUHM3CxdKduFHtLcCs",
  "key9": "3VrSvyDB1oxsN9kjtwJ2Ri424FSTHFpw6WDVo4svzjpURU4FkHfmBsHJsEuEhJVyLQNaPpjr7x6MzuheSnaqHEbT",
  "key10": "CmxGBrv6YUsqPETikSf95ov1ZAMnQipCukaupm2B7YA3YcQXVkj3CjA74AcLKbDDbsm8CQo9YVvRWD67UKXBv6E",
  "key11": "3GTu7JEd9ydNt4dK7yT53VAGFqzCp7jCyESxMeTZF4ZHbU28UJUddpys6Ztdn2jJD1Y1HAB9qcrq7LqyTimmRuUD",
  "key12": "5nKfd4Z1tGQRZyDfyKv6CYqypMU2psmxjLDRSBv1ERh3bKWxUPdoUdgqbB8RC8Xua9upenbBypmgsQDG9q9AjGby",
  "key13": "65wqeMJKG5vfX8yEhFCLpzaHTwQzFikquPpsnNom8FaSk6hxdeAbrqQusQbX9q2gbJ1Z3oAKcN6kjzikmY8AaYRn",
  "key14": "3n2abJfHDXFqNMJY4NkcdvL11NPBbtuv5YVcRt2LFM1BVj4cYfaVkaSfr6cDnyaT8vkxK1gbvcf7TAzHae8ecaqc",
  "key15": "565ZMCKzPXYisMEWYiCWftqsCwSTcyDWZ1mxVT3YK35VEE82GmF5NEPbu89RQvYxr2hNGsQ8yecL5HC4WvvYWayw",
  "key16": "2KayoaLp1CX5t4gw4XBHQU5ZkPenTwfceyPzP95uyyrxY3xGZzHrhrdZztpB28f8P1aBZX1mUtmsQ3YVXZpNXvnk",
  "key17": "292VGi441GtdUdqm7yDTj8JmxxbSG2vgTsYTPbyoMD1i7bt4NBC4ScmnuHgG1kaxb425zpNKfJ5FQGxdNMVM9rvw",
  "key18": "xJCNrdZ67zzeAxtRyBBKfcAd3xpfU4Jztfgp8yMTJNrFSoDhkU7dQBjVjGtGByopiDLawnoXzK7wnfG7woDBCr5",
  "key19": "4hxPJNV51bMfpV8Y1FYbLrYJCuxnjKsLd5V4wryxJa2BVGkMDsp1qamS8kGpaK4wnP18wvwwm2mj93p23HnXwsQg",
  "key20": "4WyqhW4RD5cET9beR9ZA5VZiyFLBXohkBStwY1ZUH733a9pJaXbzg2bzs9bbZpFRydBxGtmkfXCVfwW5eR183MJ8",
  "key21": "5bbmX6UAc4UZojjM5qitVTYDy7b9gStqYULAjgYY3WWRa6NRBoTxiNG7GrAKg4nrRHfKPKF2wpoTCVXt1CZ4od8V",
  "key22": "cnFdPZp6MELWhpXzUUo4MXvKsxKwV6buUuW7hM9C3zXqT7fZpTJvZyi1ihRJwmynQupqxh19VWPkE9rv3kRpRTH",
  "key23": "fJSh22kA6PzTZ9DzRpzPTVtYJsbmfYgbwT5Zq8RTCymsVcv97aEGCANL3RaATtBaZ4e4CbJD2aeuUqj9Xnazzsm",
  "key24": "gxpeHU44TrKLeG6Pcio7Wp8jmmKBzS87btirVY1SB8MKWNQxcniQTZEfqdR44V4H1DGBkvuKJKsu6nkHYHYsN5t",
  "key25": "4278DKVRVbpbzuKaG7rLYcEgNxicG18qMmA4fJM6uzJmo2Vz8aRz4kXfnLyGn6iVpR2bXUJGK9y863zYsMDtuxV9",
  "key26": "4gN6LjoyYLAVrn63UrUTv1c5BFdXca9F5qQ1XgSscEKFJJ1nTJoBMUvjodpuBy8e3go18SY4oir7oSL9ruVdnfT7",
  "key27": "4Uwe6eNUDE93ErJgTSWrLJ1nRaCotDN9w6HP9nVtLsJNPmRjtAp8DHBmtdGTssuuernqF345ihpVuvFFkiE3HMkz",
  "key28": "9K38RuFZNq98cyugGCXu1wqVYqqBkcqeKfm9DsbfnVs3tvfYY5VtxqwhKgtb2qN8Ya3MPyq58gkA1iGtpwVHyzq",
  "key29": "5RRUUJqBdexdkTishdtZvjxuMn3pc3UQqfYwpnkw7AfnQPfhpD6qSa8ZhqwaTC6u7MYLq3YjLmVo9kWkfsHFMirk",
  "key30": "5c2jip6DzTTaSM6uKTeFeGzmCXJiMBkBzcNHU5qvMt85dRJ3bcTVJXk1R5jMuc3bTW1U68wgF454poXvUYNHriLR",
  "key31": "3sjqEZNsgD6qtUyWo7cSBd6P5iHb7p23F4s66ZSWdafdyzV6DzhJVgBMVknLCuW8869Px9UmnrQTpKeot82Gj8He",
  "key32": "1QoRpLwa1mBD1bqyVmjTrzmEP6qVjPgmm5VDUtPpzyE8byEUnRUuQyx57bWp49rBFXKNcAvpst5WhirHa4UcKsD",
  "key33": "jCjcXUkQQaJzffsbi65cHWj2xVr8SpecRcvtqCSqiRyhSFZNyfZqmgd56fUJHkWgKuow3aXURuyzeotLgVL91M8",
  "key34": "2a3ND8qrSeoU8Bh1QLzke9Jhhup2AsTQm6zsYDF6DP9MaNHw3iNNY5VJtP7jVgMSb8Nu6eGWBafts3goKwHpx9Nz",
  "key35": "58NNGsK169Gt6RhwfP3ZCMjKykwh3Q7mKzvuhiQNT8rsJN3hG4rMpeHpRBNsvZFFUq2R6hHG2QA7hGHHp8qukfsJ",
  "key36": "jUCQL56FNpiBkZ8auvQ57eWfyADZzfF92KLrML1rYnGmXjMLCNcNGRnoVrCDRFsKWczAnFKJEv8qvBVKcj2ZVmw",
  "key37": "YWgrchWZ9WXSnVNniBeqsxxLkSvyWdfwtEjdS3PHKa3NQeChAr6ykpKPVx1M3pTeiCk17gpPcRJRRU5AAuMyvbn",
  "key38": "5jKeCAdsgdC7tzFDGsJFZL7BJ1xiY6YFgogoXTpSNUVYSfSS1a64vxrRyEkP94uwVurZpPcNh6oQzaDjhjPh3sYy",
  "key39": "4DpVcz1DcZyrNT21YCNZNZ3hgXbHyELfNH7rKJMtySSkjJBtT1gV6XH5EPhoZGwkeRUhgRSS15qM3XGzt8b4CD3v",
  "key40": "2eELDMMAbWSGk9wUYdKfoSv8mJyKk25TeFvUQau2bBa7ZvsnMdR5y14yMQ1shhgSraq37oLyPMWqb1r2CGUdnAmK",
  "key41": "4uQztRL7MKiSrYWK7AhK8x5iwvxXtLUrTENtXeeTepm2kn3NM7sDNr9AJprrCy3DuPT9xMZo7Df66cJV7VZD5GMM",
  "key42": "5UBwZC3ff2eANJCYWw8uYbSbghDDTq3T74dnv2vyagmcmAzaUcWC4s16Hz4Uw5PSVuQ9SDw2KrU4yCo3wXy3onXS",
  "key43": "4TzH65nfnd7nhEsHKbTTYGmkvzi7JeYbRKxq2iuYJZa8C9NjCnEaEb6BsDBSHkE95WVUikmJqmnFGoe3KeVK7YwB",
  "key44": "5tJwu6xbnQ7B2R5Em8rLpWqKxpEUZNm1iuXBpPRuV73ZxkLsqgzztSTpbEQvgHYmeRefKQDkQV9nJ7euFEY6o5Ui",
  "key45": "xzDSeZmVV2PxZ4rNEY5D8uMWcf1fK7vodKDKjZS4MCFrrbLpVdE1arCuFG9ZFfbSKcR1Pn15xjVM5viAcQbp4iu"
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

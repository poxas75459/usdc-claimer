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
    "431VNa8bmUDEafvNvDiWTr5gJoHNLdBKroEZVeBjbXPjagEsp25Z72hQrKHfmpifnqPQwEoox7uLGLn2oFPh4ZMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mRajsKvTN4WAGLdytjV6PJyoDbJUz47353H6ccooWjijt9aevxBXMaZVowMPZxfbsBAupLuC976qmNKTJchrFHr",
  "key1": "42xsnpAAjmY6jyhZ8PCe9pz56YBoGRhufaZAg986mbuDS8vtjYzPh6CGX9AuN3SCaEBhj8UtaxwXdFvsXcRtnqy",
  "key2": "44c8EEsdFZeQc3T1bkm1WRi2tbTDL3PVejo3RshChV9HktsaBuniT9nW26cZ98ikSn7HkMBdZzgrq6UhAVrierT5",
  "key3": "5uJAYLPRAMAv6ft5SkYrashN8XLNMqp1VXMWjf2ru7WCcgzcNin98v9NtT3uhdKCwbHVWd4qfb7iaKHGStD7icyM",
  "key4": "5LfLPAuMg4h98Q47ZujkujzqHfTNgHqwPBfRCzEAd87wjoki4q5nutwB9Ue1EBEwULDkfmBhnYe2AbraESXSR3Nu",
  "key5": "2pt2DrxWGmXXBaUM9b3jLnf1hZRYwniNVrqNvPG6raLZUh2K8KPs9U2wgjR9ufp4zZHFyRzE4kf4jNKbi7tmHRoC",
  "key6": "2LiAPZK4dejEoBccdEnvydM5uPUpQeQYkWeDeJRNjQcf9haajDjgzqZbWvNnKJUjHMgXece6rqQi8MmchpoMgYYA",
  "key7": "2jSC9crsMq7KnwU9HWRg4yo4KP6L6yuggcaDeYwje4uDtRTUUtCJ71WyEmcHUUpnWVNLYizAfxuAMtto1wZSUQ4M",
  "key8": "3SSDX7Rr2iHsTAAq3o7SmSj4dfBMGana1787WTibUFizZFLeXg4nnCJUDzXHu8W1oYzXY8pmnBrkoi1YwBVY4b4S",
  "key9": "3UJbVQEmmedhm5V61oHHdHhP8VLvQhZwZBDBxmRrmKvoTXikfkdVHpnUioJL5R11Jix5EdRmnAZs6SpYSwaV4ehe",
  "key10": "55iMwFNFXfqNsVUmBc4nQKhBgD32Z8UNcx8ftJi72LFWYsoEWy91pQdqyZ59PmB2czXpBLbMuoynALxNnwkcs9sc",
  "key11": "5eay9QocVf9TSXVBsrFdYCGHKRcW9YzorP5WXexe4yK34F3RiakJcP9yVZnoCWXWRCgGtP3YfZeZmq95AwR5ftjm",
  "key12": "2k2aj82yPJKytk2wBSz1c3TeTTv1FtjdAjQ2P2bFetVf5mroGMqNx22aHUHYhTaQ7g4WuNRKRhShzs6HnyAn5oMB",
  "key13": "33Pq6JWCFnHTguDQwfQ4s1nbmqN2mTPpRS7sHj7pvCrj3LJFr7Et6GjiJrD4EkeYV8wDTiNz3cDDFoYmzdrYLZi6",
  "key14": "fUfhsdvrxp1xjTrDeVUnC8VXsvomvU5eFNzyh51Pb2tQEFmwz6Sv2NAZ25RSN6E4Z7AioMuyCEVWB3RFMKrxFeY",
  "key15": "5BqMTyUhx2TxSAoEtGd3rgq4B4HyeCRwXDrNok61p2nwB5Ppijug2Pdmkw7igAZaqgeoesoLjnuG83uFqet1sgMy",
  "key16": "4JWR476rzXiKfDUQRxNLDHmFDA2Q65oZhTukjApKT9PxTi2RzqNmjp6BCHrutNBTZQ1S3s2NCNEtwKTL4uQYpsTQ",
  "key17": "3oyesZXYFfHiaFjTJ9XYt71YcPr9BEJhTGFj8GuVQBu1aeDr39YriZieD5qW1fmDLx7GY8VSfUJGtT88PhsvxXHq",
  "key18": "5V5A8Bwu4MVMcUkjAsVVSVLdB7u35zwWBiMmAFfzG3F7YGkL1tF25Kw9gWh6Yo65UfzoTtJpMuPk6Zx1xiTuodjU",
  "key19": "5aJGwqiawuirW1b4tqNdCjErg7pJj7eJgJBBtF7vv8nWafnfZSMzrGZc4eL2gvPyYqvg5VFvQY4fSyrzJ2CHwqFY",
  "key20": "4VZ7JnPu7x3DZjSpUJd1gr53YcQWqyYMNQ17LAT3xrZtnnNqau5dzMHBdwTS2QtVA3Uk5zKAAWYNqsNbAaNKhykG",
  "key21": "5cL9Lb6w5uWUHCKLKnqa7e23AsL4Cbo1Jx3aGf55MhWhCFqYhtQVxrthUQGnjC3T9mhkx1eddTMZWLLzNoaH84Pj",
  "key22": "kbubn6SEhiiTnVqupQNvpPDCr2QARrdCQ3oJW3Bqxp3vRa8snao2HtuHBRVESD5jA3N6oBzfkeLqPmKcSuwZQwn",
  "key23": "4yyEvQ37JwngZXfUR43XD8nsyTc29Qee4weZwH4Db5sHWzkwFMDhXTSVqS2mCxv4oeQeuHixTPMj2RkkRDfBFmZL",
  "key24": "64md6ceS938H8kdqyhhZ65yHoRvT5nax3nni2SXgkxXokrmeQaj6GYBMLFDWafoUABYSq48NHXfcFAjGdaVtHtHY",
  "key25": "5SyZNxVkRqFS36DXqJBHc2u4KEcdBjNnfNYsX7sYGSyRXHsChZ7dabpFyvGiJmy7WEYHiwjJ2u9edsbyo9USkNwr",
  "key26": "3ovYzd5ywA9Um34P9APQ5cvjAbNY47D8YFUJXSeUZ2c383dZ4e5whUbeNiFapmdRYVHt7MEsn4WnZJRYv3eRG8fM",
  "key27": "33XSEjptSZXbN9ZFJwEGr1qrh2Y9BW946X9tHbBGbdTbVHzk372kUE2zj3Zy6FGksvTFmHSgKQ3urcjGvKe4t231",
  "key28": "5RNjueQdpuJQ6JdAThUaUVsD5EATpmE9kHJAtq7PnxYb1LXkgeynQxx7ZcpnNBuvDzaJqjiJF2paeXgrcapA2Mog",
  "key29": "679zNKCRmy81iqb5KckhauCJ6JWJ76ZEffscYSvhxRErmVi7nDUweHkkpHgjXYKjvq5jmznZcWAMatFezoXBwEZy",
  "key30": "iqY7fKW314QNGSPGCjhbcnTi4KhDoG4irpGzEiANFuA6fs8QEGwA5hLfNvVGrsdEgHs9FAuC4d8mbV9QiWsFDgq",
  "key31": "61GeTRPdk2hBwoZjXnvr61PNsyfYMqtEYWy7eH3NbDy2tDYAwB3oL4rvHGyxCdaaSpFgFCZihUm31FoXzJTvhUwD",
  "key32": "B478eUUvvyJoaEE1pECPtTg8SETYaics2bkqHPvdA9eF6f1fjA1qECWS2Ji2VjtK6b2FEYhjR2ByYStRjTYEcTo",
  "key33": "k266ALmwnanJfRscawDRFPfk8ZgGiPYbxkfgQxVSRnMR8ZQ9J8ugvTqTQBmJJubjdcbT1ejBYupUn9WhKUvucw2",
  "key34": "3hCdQydu3qpHiRm4acvJKu5K7DKLcYGnPu4ouPJmx9aHUFVmsUYiwxbjNkC3MWScRGEFrJhinCvm1CB3jLVo5yzz",
  "key35": "5vYNJCrRcEYp3TzZ4T3jLzCKxs68NHgH9Jy8xmnbHBzTanjSjDtnqFSF953iq88sPBEPgu6S7WR2gyjn3PCYL6bC",
  "key36": "KcgedrTCPiVdBkPcUgcU3oJyapomi7EvnjdFCYb9hzt7YkZCuzdUZBGmG6eNoBd36AZyfPRZrNEQYthLRB7mbex",
  "key37": "2mhHkGZzjoQZPUNZgsPNNozuurWvFZsRCi3ZTNxZNt64ia164Ybffrp3d6BqCT85ThfCEpymg11bv5w6o762T3pn",
  "key38": "t6tUcwVutZ4vSwKc3e16CtDrP4riQ5jHeuacfgyomtR42AULYMobBq8FagstmpZJWrLS6P5gozxngCMwPU83GGL",
  "key39": "2ua18orzz3rxiL9ikP9rWCdytpeNTaouZCrfQineFw9pwtqhXrpw5QrmozRSxw4its5i8kGpE5wX1JcKfiUCum5H",
  "key40": "h5Br4nyWcAVr36kBrprFBZmQiZnXYWyUowKC3VKZrJbrtNXjTT7ankFW6Btmm7n3PJFchbN5psJpR9Y1VkzyiqT",
  "key41": "SFLamoyWr5X2dXHKwmXYrEn7azKWaq2qbiFacfJig3pUrBZmyS8pyJAKUZ7iUDZcgGtcruHYmCVyK2uv6CDSRR9",
  "key42": "2DeW3CqPeQp5WAaYYQ6cXMtgVzf9gHjwVttVf8Lr9cHMyxkAJMdAMNURDRXjPegn5mH3mqJZKFhxaKSvrfeM4M9C",
  "key43": "3uUXDE4cK24YCH8tKbrTeU4r8nw93TYcWwygzp7ZVv4M7b2A6Vo2udeXo6aFo26EgStYLo5yQrf1UmsZtz3zmb8u",
  "key44": "4RvYYxTCwDsAVhbJxmYUx6aWQcBmpZJqReGMcsM3pPXuosgJsm6Z2dZ4E84tZRzvBm3ZvdHRZ4C6eyDhu9KwmzLT",
  "key45": "5aMWExtfwqcfGX7axDLDYUp63zptvb4vBDrbTM9UzDg4fXsUcZ4iMNNvZRVnUXKPMDWgKM7m6kyCvgDeyKWiJJSS",
  "key46": "5BQAyaWpNkYFHxPqcUEec6gvLYpdsKkQnLyNhvjdiDnXtCMBuQaX6zNxGYfCdiS5uq2qxajfW6BL8PpVdGbUeiDA",
  "key47": "2hwaR28mpF4mtMy6QWbErHb65bgBuDZWdHnQWamxpjnkM2HKxiC19dS6qjesK1y3srhNCaKpcoUyPufM93Gbvh7h",
  "key48": "5FYRYXgpBS8cs7aSwHcvC7e2Vr61LVkDricw2xmzmNiFQ7HVwjcvzNFnfG5Rwu6v6xsswRZsDxn3BfsZ1GCca6mZ"
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

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
    "5dpjbG8AoHy2ffaPZbvEJtr3wGu1xY7guCrdHey5po8uwGnKkA1YXSsWhHXfbh2FvbmmHvv7YCXY2BkjFvLc8mBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fFsxUm1uW2aX8L6DNo3qW5NmuzxZKjmnm8G4xB1zz17Y3hhy7Z6RRDyPuMPvfDhagNude3PJ2FkgXeZXtMamLTM",
  "key1": "3yjrymEv4mEMaQ3yoUAjb3d4EyfykUYvLk6WuCAWbNBD92LmHHEkXbbtixtwZMSYbEz2E3V2wJaSW5khtbnVk7qW",
  "key2": "2RaLhK6LnyvuFUGzphGMEP5r9Qa5kj2YoNhMjxb6sdKurq1zJYk3bHHGW5ymzVPXsVuLjEsYZN6J68NLoopnKdRt",
  "key3": "kP7u2NHRp2GFueHYfxAjCFvYKXwiuKyB5zHVKMNw6DrSsTpJ2nmHjXueKMJfSL1PZZQSJzt5pzco7VqNHgz7Ba9",
  "key4": "2g7qBbb6R2t93xx3xF8nmjLSVC1cJvC3qriidvqsEz5if7BCDTL3CA11752hoD8MxaXLxqYx9WisNv1QJVnMTdjN",
  "key5": "3KKuke9fXjWWFGkP7L3DCCTsLaYLnj4LyeZZcca8gBL7Pdf8ArMRUcWkv53X7gsdpB76Yoz3ponunqtSwpMW1cE7",
  "key6": "4HwUgzZWL7PfBH1JqokRgVtGQ6cDNvZYrHCQv92ptZEiGnKSfd1J6XLc5n9EKRnfGQLTth7skTt5vuDZEbcmUVSi",
  "key7": "2j6cmpaU3BLpgRtvx33heRANeZFQD6EodyphG7VRS66o8VfYKT9AxGTny9JtR4dYXXzwTveraxL9GK3RsweMBNbW",
  "key8": "2gQN86zXxFSmjFpjAHg4XH1XrSQxEWw8QzEiudhtsEU5T5Q4ecPAr6TeKx8kmTgNKMQweYko3m2LQ9SjMbQJUBLM",
  "key9": "n2WFG4FiWvEtiW3YwoM11uEKqJXsnUBKJD7eUHDkueiB1CDoHovfvYsL5a9LKGi4Jm4buNAPovb9EAtrk2QAtQb",
  "key10": "MieiAgzAj4u6UgxRWABBsAZhY3BZyWWzKfXKC8gXXSV3D9VpnxLW47BsZbULoPqNjf1vcRWpSEtPnZZ8aackyQF",
  "key11": "5kDx1ZKakWAaSxQKdMfKF8UEeonXvEAL6E3kcYjMqPmUvebXr28zF49fC6qKxkdH7HvUau7pcFuR5HXNXqUA3mpd",
  "key12": "4mDwfwoKdohhoTK3qSfJCXAtZNgj9x4s4qoLdyZN1EtvkYzNX144GZURL5PZ1zN3TKR1FWeLXE6godvMzXGzVte3",
  "key13": "3CeuHCe15Z9jHHiCFej2pY4y1D3TDrLk2HtxRKJgShJ6EtbSw2hi7fzXPKAduuutZUKN8ZeYAQ2GfKdx12evHqWe",
  "key14": "2ES99rji8uzzbensDHdYVDJZuHHLHWdPo9yGyeXaCSyACWy6dwrDD2rq78Ang5sDCtcRVyJZLJZaJacGwEHhNYk1",
  "key15": "2PJi9aaE6dJY1FqHJsVSJM76LXRgnXinEVWWaWdkPZXXtXB67FzP7EubZLbQVuVYmCxdmrQNsrRPizeJKqEBezjd",
  "key16": "4YSA2XEQF1dMsv7qCsj71isYj44ss5R3tYzvtJ8NJKoqtYfXqEKDjkAEHqurWySzmftgaof4edjJrQEHpiotYtjg",
  "key17": "2AP3NLhgFtdhy3yRshd42iU5mvK1fLEfSHzNVU2j2CFEpWnL1N1JgSvKynEgjTbjG5znEg8fzi5mDreALoyVBqNS",
  "key18": "3CzE4XjBw4944qqZgaCedrqNDLPTE9h7rh7FZP5NvRTLbzUZuPJudZeGh2roMKDZtsfn8yy1y4MugPWs6917bCJx",
  "key19": "4SDexxifve4JvmpSiJn2xenNUtvcK85rSoYCZDdeEShBY92wpv46fjaWQgoLBAG7uDoDQdQ33wXnAnG8umexbqy",
  "key20": "5D7hx8zukDdhwc9tDCfa5ah1mKaChJ4dUCTeS4DQFhauXxcw637cLxBcazu9pouGU1hGyKGGqzUhAGTxBHSJ4cy8",
  "key21": "ps7J1hJ1sxwbLd7NPFri73yncBbacjd8YUdjioDrK5TLmc1JceSXhPmPWKLv3pJj1k3SXFL5yDMFr1Pzzq88qqu",
  "key22": "5BzZHNdvqUGxxnPEtvTqtNXQcjAnSrWFmkRKyFvSL8nyKxwMK18y4vr8eYvL1BDfQGTKHxrnC8tqs8QkJeFau1w2",
  "key23": "3Y52BGCqZU9uY7h9i8tTrpvLeBZaQUtvJUkK6FtcXeeKazveN2cqSCEZ6Rxm5vhpLytpuUHHgbochuhjAdYAvRjC",
  "key24": "JHJgK8CcBBxzUVzENLU7144MweMq4bEYmhSFEryBBSB5a3RtFQm4mr2KeUPYPRt8yPi6e9KZWdDqSk48eRLQHrW",
  "key25": "59mVtq6JFXuDj68UyHha9WcgxsUGYZ4j6fWQRVCRNmx6TrJLqZiHMkywSoDdKbv7D9uavkMBvUs9BwQjn7GpjyMh",
  "key26": "366dPMTSuhnEAFtkJnqwYULgsrcVdow43S1hL97JkHBRUsWBmGfojaSYA88db3dxX5HjykQxKFMbgva5bhpM9zLx",
  "key27": "2bLeMkHo43PRLrcmMEVqE2ZWABRyNexyBLkfNEq5nQUUSLFFMT3TbncRYRoGdbqZHrw75YAvzMSWQZdQHL3wDm6H",
  "key28": "313i9Yz5RmE1aavwpaJKqjwVxzEU6z42asgZgicCtkQSLuXQLMYkd6Yy5BZnSztR3zE6m5xjcd1wGcCSM72xNGRG",
  "key29": "24C3EZsUtFUa8hAG3WDKsTdeYDwenBta9qC57oUMt7Yqn2NoiZBRibkMe26tt9GwusGXddXrSNFECkpqUzRS6EUH",
  "key30": "MQBc1epNTxmB1isU3wURT6hxRTsLdKbCRrsbftoDgxZwLkasitdQ83g3Z4zGdTUkvVqJdvMYzZy8tG6ZKHNV7LN",
  "key31": "2RQXJmP5HKVBRY8i7V1yVvHkQtTSMqPinmfo5kQXYXVsqKtPD4s3aJQ6fjcUvv3eEHJHtopyQ423YSUVdr9brHeV",
  "key32": "Yp7F81ofqQmGz39aMK89WQtboA53y5LNUGQJEbXw1AhpmXajH5hsxYiAazLDg9qjMFJBtsXruWvgHNoQtaPMd9A",
  "key33": "2VYo8v3eMLcS2JAzA6GEYjoouCQ5EVr1xny9vopkuodGTnoApaGtbjKf3JSn6zB6TJFZuFkVuHtK4Jig9bysXzsd",
  "key34": "3k3en7TsBA7DNbBR4UyqLH6LnhCHspjjK3c1ki2oL3fK3WJCmbndnJYtvSDoop7dkbKFs4JAmKqLBtsZznvhfYy",
  "key35": "4dZSzi9YyUdWcykJxjg3hknC7nTVJv9eK4Te84najLvRZsSi8ehqMw3N9fBZ11vqwEjbELB1tpjZWMWVzcBm18Rn",
  "key36": "bfvHnBmEoYyrtk5QuFGkwrFb7v9SUgLb4JYj7endufnL3gpHAbDXgSWUY1Bju1CSjPSqLRi2Pkx9aW2w556VBok",
  "key37": "UnCpcxwiC7b44craKeZr2Cxa9vkWqnQNhJ1hZDXz4ofAMcxGPYrSSr6GAqAydwW5GY2not5iLZp7mY7CAZYEsNU",
  "key38": "5GxHWUjznaBCHEGvDaFRTwAzHAVWgbsm217vLAuUCz3ULb7FS4HMS9PXj6f9DQVmBbkn1ty7WWK1pzBbNQTNnRDm"
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

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
    "CAVeGyFMzavYMNFDP3UwnZYebZWVpn3zhU2B1kBMunb9sqSDa5JqF64cedtymJk2mxMie9UZhw1yURXcq7GmdAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YpjQkX3czopdmXiPFyh1rtu3tSDkknYeGR2gBuAyC7yUyUWZqfjMYjau878EJ2bq1kzDafqgHe5mW69RMSSofB2",
  "key1": "dm8MFLLg7MrwLyamBCYPQWvD3x5DumHiF6Q3Xw3Ztc1JuEcnQwpuCwTE5VXamSf8S89bTyB7TkdcRG3kWCxkg7x",
  "key2": "4xLsaxPsB9UmtwKHHfgHQriN7DBTGKGQFQTGipBRNj3UPnFNyY6YQBPGvBiQx7UrXg75UaMEyLhqVFW56WTzQK9Q",
  "key3": "5qw2b5eX6JTXsihXzv5FPEDVJQ9BPAtFZjSy52oKj3fuU2x9c6RcEfd8wCrKKrSz8ytpew9Gng7sFUbsW8bAoiV3",
  "key4": "RhcC1kSNpwB6EuWjTtisCGYseThy8RQ3WLzBqpZEnoQhCnDyHThwf9zQEHJUqJGjdc9TZ82y8Yg4nUca8YXXWdM",
  "key5": "4FRVYBBgMYSK5JU9N6gCwyWHGiCTVv89MF98H1R3jYL2VSejJJzbia1HNfy2kp8h8BSNnEmQVCs8HhxgjnC33t2",
  "key6": "2smdMQ4v8qvifuHRS5KYia1yHkmx7ocBEmM4fGjhYuqdQ7TA1uEPpeED12cVQpMsTfkKeuAv5jrsCdPQHWjfP8mU",
  "key7": "3wd6Ws6jRDhL29ErGTsACcKSX3eYKDgXs3M4cGK5uj5g1tVNwqm6cV166X7uJXQcLwGMWPCks8LF9za5soQhBYzu",
  "key8": "2Tw6RCX1tyZeNeedwUpyvPRe4UoJ3MieceFvXNUZwob4KBdwLH44TNjnBswctq3Ggtye4nNJNWkT2rXFxKgKf5Sf",
  "key9": "3Hfeoe1DJ6UWpCgkKtiem9u8XdpLHSdLL59tcSJAd6zjLceY5NDdSjcpdStGdT9JftBNFs9vPBnKH2HWy4ZZgEPK",
  "key10": "2hqBUctrHb8eoDnGniDxTSDEtjEjsxxsT27LxXKKHqdEbPTkxXrcjYCJsJDUQAVECZFERuBRbyZMEJVeePHuFgiM",
  "key11": "5BVcgdDVZnVUT3zyHXcQpnwssBYhPNpNom5JqBExNByMUM6vEUvbgRBtiaRPMQJS167YGaw9UdAGUsgNMLnhELXL",
  "key12": "MALxeXnRKqEaF9dk2UtbPrjzsjyRb9AeCRiJApf9iLvnA5qSZLpXEtRi75tytLAPhPpxjL2KpEjNBaohG68inWU",
  "key13": "3MGZtRGeGM3ZCWbq56gc6HZf162fqtFnyxhkbxBcRWrVZv7Rwp9PhsdbvACvpkZVbxKWJvV7mKSbRQMSKKhX1N9b",
  "key14": "3cJzHAoz1fUf7STaAz7DPM2XLWegfWQt7ecBfezuRrQoCCQ9t5srYjYr3ZwXFuHdyzvcj5kDUoN8jHjNmqdrmbwY",
  "key15": "5pfQYxzr7BMANvDD8LaNhDsBdktayZnYweyZRbqiDAhmCcN3pnhNriYv1HGGnngoFeand8BVFfxHdhxuPEAKE4am",
  "key16": "5sxn9NcSPso9TVyN32y5DzRpTVRuBNubUp7jHkeiEVsZVb18YueqCoPKXeX8Dn8RXcUynG9Gj4QgbuKNa7gBfwri",
  "key17": "5j4q2tPHKgTz7D3fGDNQ5iiaBnXPuBz4tKPTVpdAFjxCJqW1LyLTL1A5hgTxDN1dWZ4WXE1mRHeJ5AngagbfMLdN",
  "key18": "2oeoJRgh159rxNwc7MDvnw1uBTR4WZhpqBSAKMenD1N17BX329tKdPDDxMEzmjuWWvaBi6kaK796AQ5ZukpSZ8BN",
  "key19": "3GsaARFawVWi4KZk56wBC3iHy43SG9BZaTa3sqeBcYLBqWJAEGucd6fmojFWCHsZjM5skZ5MiSJtjtwM5YGYSoik",
  "key20": "3noDGbd8krPHLY4YiSA7E4DXGyqdG4ULUvyLVTcwrgwY5DKd634WSukMXqXiwh5J8FTF4ts8ZXrGvArWTHU4BX5s",
  "key21": "3cNyLqqqPzF4dcZBTStgXt2QcYmoPZju4itLGRYunnaLAR8PUkkNhE6vwdC4AaFLTZnhTNgeBTbV25Fxd6tRAAHk",
  "key22": "614YRCB5vmFQfw65cpAeyazPQf4MoRBaHNPUskcrp6fm7d2TfsjLqn7jxBpENf9K9wacZrwuC1WVayUz3q3RvStv",
  "key23": "4AyeY7NjVMnLtJRFpsnNAqQKin4yNSBeZxUhnZHPeUX7gKDH51yoSEjFspjLyeeDrzsd2zG2bAgA3oHwhMVueMXJ",
  "key24": "57civreaQS4nQVfGzBHLJ5WkEVFisxCj5jxax2DLidVmnz3fJiD72NfGgzsS9ckkWxdaoEhjjEn9DbJZuA4n8UYA",
  "key25": "38z6C8KVVKvmJQtK8ds4bnQLwCJmrYvbq3VXoRjbzjiVgtSHtta1vJ6V4GyZ9fCyhyheqAEdqWF7VQP9MNoY2QCq",
  "key26": "2WVcDjnwqSVAnqXg6zcBMUuQc2NnFNMNVBEEXZZDCsjqp8G58FB9xAFTtSuFmDj6NV6N7QXJpLxuX3Y6nF7X2B4u",
  "key27": "2Az7Xz7crRcQSZT2iYnZpQDSSdGrqurc7tRGrYACPQpcWsXrf4UmG3ftz6BC8xv74VL4wqtWVTCqEDGCJ64evWR1",
  "key28": "25iLxH9DLoRR2JNmcvqRZsfWzjFTVkBVbkrd5gGXNsC4oADH5J8e1xZojHoh6QMGjG1nZr5q1XRMRUm6RA1ZBdcU",
  "key29": "rs2jT7ppZfQ2zfsbBZqjVYeJ5Dc5Xw4g9jEUTXVMPKZyJzKDhmC1P2CCXgEcJ6K9mBgeaRxwco6D4Qai7vJevU5",
  "key30": "57YbpqByM2oZMoHwNijJ8N377LM4D96UAmq9wTtAWRMRq43tQH2q9d3seAhHjzSWSTVgRj49yyhQLW5Q5SRDZLuf",
  "key31": "4jQsdpxiuRc4TSbVhrAGe84WPuAbuDteB8fjGhFKKQk2e7vQXs8Nzp8QabTpnminXStx4DyZSUUNCyTFdZgKhtLc",
  "key32": "51JgPr4ufmGeR589gHCRT6skfM5j7NktPFDDNVqtT5AZ2XESktgbPW7WxrA3cKutQa6ArBEm1PRtXGJWXnbuQTnc",
  "key33": "3wwhiFtSyQqFXUYywiMgxizDxVc8aGpnrypiK6Y38wJnKmBaXHeCWJLnS4xqMbSkdfJdYwhfGcddxvP2TkAEHKnt",
  "key34": "4DTGbwRVLKkFdiAZfg6e643B9948c3daHnAez3RwgFSpTqmygGXLQCbFQLexAbHQfxTChWKDhW35RSCEEipR2jRN"
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

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
    "zpFPzpaRZfvM8cLe4b5DQG9zvjHP294rutcGm8P9FTxSNvzysJs5afLjYkRGKU42jLP8JJktvgxoQVAXZff9ZhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jh6nEeLyjNudgFf5djCisTWUhfpdKp9EYKrAnDCk6uycayFdzzponwFzysfjyLxkMMGXMQxWRFfLtfAqBSf1Tya",
  "key1": "4ao1ciF34egVAjA3wgBaX9JXZeyKVnwooA6kBfd57Scgcqxtxsw1CiAPAR1wXxsE2qCk838KTv44aVLruP3ufwjk",
  "key2": "2iAT4SbwJdbrK34L6UrqY1ijqa5q3f3bdLexjxzTWB7mkDfPBd83HsKTQHCg3ajwZN2UXYsaffyCY6dXsxWpAc5d",
  "key3": "eRthupib8NgSNBuSUL5vTQmitM7ufhkidjycaPy65nphbt4tHBkpTFY6R9Z6bpWZB6wmMQsz1uidzUWFn891ZMm",
  "key4": "5z4bRioKMvDxck3KVCCLTKtjueyPdZD7ATbrQuEPUX7bY8B5K4VUiFV5GCKCyGuqfjDgy9YFCX27SpQ8qtz8883f",
  "key5": "39R3xykdq3HUWJsjb2XLTHU9etyTBAgT2FCUax9mQRt5N7wDTdt2MFV6ouNYftmKQ28r2p6nzRKH4uMTvhN43fEy",
  "key6": "4FokShabPovgcSk2VWb7XNffdyhViJncQsrMp5GDRKapA1HbdfpMLtgF7JdSBkWnGmyyZCbAkYE4mHsC1Cx5TxF7",
  "key7": "5Yptcn7oMvzexQw3WgFgJ2iScd8dppS5rGeKw6K8w4F4ZAHtjRcDyNwmR6RnpGBEaGMA2PEkwhbbdhuXW2sFCPwc",
  "key8": "4QZTabXeGZjyiNGRuwhd4uZxFrJjEfXB8deiZ1tHsG5AqA3zwqAufbjxSbpswTm7jyeAy1TgkAACFYns3yL8jw1M",
  "key9": "4nvUYrjqAuR5K4pKgRdsDCYi4kH63KPRLNHJHaTSd3EtXRaDMf6A4cBCoJshLwP8PtRLH9Xx7RZtAZQH3MpkbX2r",
  "key10": "2czScuZCEzrzXV6fh5A163pAJPDb7RWpceQaaytrDPCZH2aiEHzm4YjztcZ9ScAjKGWCGVVNs2pMATCwgAHyTC3P",
  "key11": "5W3F5yEzCQo11UwT89RE7stEHykjfksd3DD8wD9S4jWcXU66XfyfF4qpWwbtq7PJC7kKijfSSvcuQngwF9baQPUw",
  "key12": "39z6ZnYwZUmzaBiqYZnxk3wSbPByxXexDCxBmwUR1GpdXGB3UeE3QBCdpx8EnufpR4q84tWDdkonmMegnXiatjMo",
  "key13": "3TZcUpdB9w8NiTSHh31DGbZqQWddePQA6swse76Hvq8LuKGskBnXpBWCQJKcBj5qjuAfR61VmrgL9dA4PYtSMZGn",
  "key14": "21rq9SPuyLsorXwh3uZT3KWfLT6QdehZuSWiApGRy5m7idBcwgXhbr1BNHijWR7761LgifeZcb8azTi4dZpN3JGY",
  "key15": "2qQpsvPAigY5G9DZ9nE75kq3vQfc2aE3pd8ECHG6hH4sgwZaT8CfrvwYL4Q8EYbnw9ay1uS3vL6uUasLEEJftbZ5",
  "key16": "3pv9o14VFg1ghrUBXbWKg8C69SGT63Us36GPiidXrCD7YgAvsZ3UUWHUHZQLfGhht3BtKYepPKn9ZjycjY8aWm42",
  "key17": "34cX21gqTww85yxy6FGJ6xjM34KwH6WbZHgDnrdUHNYMmfEmKpcqXKP1GeY1zubNxLuhFynFNwAWJYEqpPECwZdN",
  "key18": "4VFYyoLCfYhvBUNJNPq9HvpLkEwmggSef9Xbq6CmAWgWPcM2uUSJ3ZaqE3SfoLVfPW3RYsKpRNVaPQE7zfHYKQgg",
  "key19": "5GTr9YCT4L8LRG1QYhVPadobkUxhCuqDYUR18iaFaiisCS7Xn547CmvAeprM1m6NQHMiSGLsCfNbnRst22GZQnBQ",
  "key20": "Em52F3KehzjTJx9Az4nVTRsTXC7kXm9Vtf8B7bxhXGB8vrtUNsDjffgqL6KnbJ94weXJpTqBbrQGsdek6KgHqHa",
  "key21": "5p163XRG3RBea9nTHtxh9uKXaY9iZ3srnTDniFKcXD7dFghYNE4XoMjoKJHZ9aqG5ZkczvakeQnTgNsETvsbtQyk",
  "key22": "2k4VLk6wf7Z7RJqLtNv2Z6niSG99SQmD8xYPhiWrHykRC9db1wvp6JCAbEZBwh3qn9Mp5FWrc9kEZnfwePTXwefz",
  "key23": "4bdk6buiWsZfhWKgxF71GZmqtgMELWXpob7WtwxigCxd7DzmyhbiT8AtpDWzhX9EY8Sd1B9fw1c7U93bBff1cB18",
  "key24": "5iwnQfp1zkXPcnqD4PLnePXva99iFwuXSMo8uEmxXpTh2qKhfX99YWqD8wAuLZYP93JwsYkCTDYzqt2mFjzKGx7r",
  "key25": "4VvNXThP1nfwbFKc8AFz6fN9dC3M4mENU1YB1pN5XNsukTErofpSr4c4vMyV3d12P6DzguCoaKEpBkbBoPMatsJr",
  "key26": "4zvehFR4n1pmCTxxKWaXChD9PSDAdhmh1hGSENnfoTX7UPiG7voX7jtTXvpvtBTWxvGZSYbKFuQjFbQpWWzEsezi",
  "key27": "5fM1opybBGjvwm4R21kLV1x7NejUAzQvL6RJjaxsrjkoouxowVhc4m7ahay9rFDrxrmJBr3a1SEFReMHJGem22VX",
  "key28": "4rVhMU92Mk5q76GZvt1hoCbMYWRPhDizur36TkZtuXtbsx6att4HLrU9rTsAtZMsZYvnYnhxEEHWWKaREa9MJEx5",
  "key29": "3ZtHfzSH5DxRZ7J2tubT7n6xTrWaQZn5mG7EwZjZjNx5iwz3sCF1EnG894jSQ4c7fAXT5bRuRnUtwAq67hohcCaR",
  "key30": "2y1gTzgpN34oE357TVRLPMqvzosTZ4GzGdMf7dWjTTYGwnUoovZyYWsy6GHpRNNwxPr1uEc1XdRkC4sqbgq5nNEK",
  "key31": "fZzZm45TWJzL2P9jhQXw9VE7e9rYQqFnnLA64tgzXKHZRvJhUWba73psuNb8TZ7r1cTZ3oQ2yJAodxD35Yr1FvH",
  "key32": "5CXYtkdXJppoHB4TiERCVQZ6fz1AZcBU7VCbqCjv34AqM5VY5mFx2iQcnBi7Gb2tgzBhgtGaBGWjSDbwXvEaten2",
  "key33": "4Aays4JBhqPHrsrJwwqVv7UJaJCTzqzH6wRa6PrJsr7iuq8aChowgd1WAns3ycgc2fkyfBpQ7Nih4fu6gdDQfGDt",
  "key34": "5zHyLDJ8gVeaa4i9ke5B1FkVxGKffxJbum9QcEZWpjBAE5E6UBL731UQERVi19HZBcR6SAUN7HGPtGcNhT2NCqL9",
  "key35": "5z2vQ4LdyB9NpfQPApUZEKbANB7MMUFN2AejzmFa8dQrkPWpMcuqQ42ZgFVrEDjZRPcd6yEN92LmYeJSdvn3Cq9r",
  "key36": "3fa1FK18n6DyLbxSdsDcSrQrovHhiP4YmA9qz2hTknujbKa2BkRteBKt2EXchHJ6dv6hPmdmhuZm6hFDvm5RCkMb",
  "key37": "58B3EcwRSLGY6P4LbktESrS4Z4MYRHVA5hAk6UeMmimWxs9tHMRLRdP2ijM4om2kzd2qBPBt1NUDc1t1LyQBnZq3",
  "key38": "5SSJ9DZKFb5C2qH38KG5AUojkSNz24V5Swu25X4SjJy3TYFHNZ1f1j72Fvonq2wg4txbCTMw43m8f8K8dDxT7e5d",
  "key39": "4yEbpFEQx64fouNjnJmtD15Ut3gSgdxVvBvQFJZWrLWECi4y8MaGDRun4zCY7E1BSJz41sqiq2z7YkT2YJkTgRQJ",
  "key40": "5uncm5pap4UoSM2p8ucxxgupFCdR5XFBYB4YjjBJc42i1D2RNpnjPLJhTvKVBnCh7BSgCvmQgUQUCpny3hPpNFnF",
  "key41": "A1Ts7piusd6ZciTwGK1qFe37xerniNptr3ve3ioe7etwANK2a2evyRqGaR3bTm6xK92VXpa9jB2BvuUR5dbkYuM",
  "key42": "4tufjGGUsdAp9DhqPbg2XyvSUrbFtJTiCW85c7zEJHY3G9ma6BZEbCz6hpPPvMA7RBESWZ5M1RRQabfAdR8NuSzX",
  "key43": "5NH9XmgjRH5mJFPwNV95LwrvqcLnMEEC3fou61uDJXDv6eu8YtKj2BU8nsEhRuWNemmSaoJ5vY8kKqNJwLTs7yPt",
  "key44": "55vdAWUN3zSapCGuXwPybrsHSUVLtSvREFPLoGcfdQPD5qCgTz9eKYWZg2BfrTtRjTcnnV1p8Bvif2rrrq5yXvb4",
  "key45": "4YukZd7BhJDsJ8v5ZP44AJMCg2LMXadU3JVGKRVzBy5E5yf8mFgYmQCdKRQdj4ardfQG4RNf7de6kZZGi6Jo3bUN"
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

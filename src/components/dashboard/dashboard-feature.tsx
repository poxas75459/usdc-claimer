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
    "oznZD4FXhXW1DUYFQ3gPBaoDbPEDwyB5xJVRkkTXiLzruSKAaCtZXVqgg53FRJuKyJZht6xt3u6NvMfZpYwzBnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YsJ8QN74QefbFe5RtSBZjGFAFqVQjgct1hPCNt5snTvXWUdDn8vXP9jMJHrndatwKF4D7vx43kmjzM22TRQWiLq",
  "key1": "2Yc8L2JbvH3XKZ5wXXK84DUkRuVNfNDoZ5r6ixPNHGNYBuuCLyp1zRgQJKwxhcJNb4cTXQRkz1bZncR7NcT4dx9u",
  "key2": "62kVtJHS66YJKoxp28vdNeKTrhvQ8yzrxfZFERzrLQvxKACDH9e47QXBZp7Uf4juqE2Z9Ks4415rqyBRjGgUoLeg",
  "key3": "25hDJKBpV4fZJg1oBeT8Qv8XpjhFCH9EUyyZu2FWwCy6sSjodQkcGVNposMtiTSd7ML6LenLALqG4n4iZNTTRG3E",
  "key4": "4Lr98TnK2abtwapSHrvykREw9AiF1VbmMyPERRp9zmGuuHbAn6UMNsEFiPgVXL2gEHwJBUfYfTYmsmUtwwoS1EVW",
  "key5": "6WmYaPD8DkK2RdxqBTVV6y9PYd3gEFcqrFQ7QPxUnSvtk1mzKCxwoqxjqMM7Vb5HQVwwSmszRL6egZn3dZzAY5S",
  "key6": "9aUiihoXJTMjPn4Bx4ARo8fr66BPFU8H6qX8HJQg9AKddVWqfxapiLCyAXP7juo8MLNACS8zUfPxWivU9Y3TXtu",
  "key7": "2UEhMwKXXjnGAHNgw4xAWKk4NiUYqThVwEipg8Yb7nZ5Vy6LTJyr9SAAS3DsBvbJhuwmNpEUQtV9pLbw3qf48iVv",
  "key8": "27g9PCU11Pf8Mfm8SuwLoWGRgjU8dkpfaRjXtH4ZUGoA7v97w8nUkbfVSZUAmWcqS4GxwrgLix232jJnss8jjyno",
  "key9": "gp4W75vfyGRvdQco7RdJnXnsizJCo7SX76hMBF52B1pi5qRKWZmPLZkLoz6RrFyNKwqgSAMMgWyffQn3EEca3fM",
  "key10": "5LupTTgtFXefP3FFgq2qom162HHX1Q2UoURLhTjc6gELVViaKu4z62qLGd63jyJZHUiXbvFFeKbZmxfmoXMkKKYN",
  "key11": "2Eh4L3R1RmApcbhKJg4d67MZ7vDLBAmTa2AKtFB1PBcfHG5UuLdN49cdCHfw63x6UsHwnH5DsFjGsCcVhqMCBxsC",
  "key12": "5W9CorC6aMhypQYxYPE5gcJ4rzS3GnXxfn21VUQ4qsCovbRCAx5NPRKrcVkeru4xrt2Rq4cLnCQ53NZ3mABX9F2n",
  "key13": "5gFELrcBy7S5w98oqTS7oSqsDhTFD8d1UqUWLYVVmefdb4HdYPMzP4mHF5iKMbivas6MDEfJ2yTaP9jDdYhz61XU",
  "key14": "2F1x5ppDpTWZh2fdfQbDXXA7qLaqrkZnfEp43AJgWyVUPV2Maq21C3goNhefNCmFYT5XPozy8sY7oM3ZBY82CmSB",
  "key15": "2bg6x5FWB5BjJQGvBvw2dwncAz8xbPsKPKL2ADwfFiYiT3LoD3smqR6pmAsBwQ9mqAAoGkYXgcGeBKt4sfnhqw54",
  "key16": "27GJMSJojxM2s3P2RaXdXFHKRj5EGoQ3cmfuqnQP6rkAVpF6cUzeUueHwEXjUjxZ9LPNtsfTLuP5tyZnt1zDPQRH",
  "key17": "3FLo4uXdVcFVnoe8Kn67RXwVpPKu3PD1utdAAbqWq75Xbb9wKLc98GtSrYdgfoyy4A9mTsVWcUANJArb8CQvE6Z",
  "key18": "4nx11mTdPpQbpyWTKjF55qWQAH8uv78vmvY7ZZiLaGNH5qDJ7HtUJDhqNwbAP3MxtvfiGS7K86rc4g4sxmweZEUK",
  "key19": "5JGo3A5vNswCV3rKAYzADTeHyKE7JkxHzL5TZho3SqUmLH8yYx7kqvHQhTVDk25i7WsaiFD4bnV5FKi63crSSL6n",
  "key20": "3qg3v65DjLr2eK6iYVyn7w5CZPEY2GpPe2NR9q7i9pzRGaM9cG12joJTYrYwdiSffVEABvNkTZvwq7c5Gnc2Jr97",
  "key21": "odBwwjsKxSNpeiJzPYFAJHYawAcgT6WV7oYzqxEudv6SL3wb7AHmDH2StZhhPyxVvvvkFkhRgxTDs5zsXvW8WNG",
  "key22": "2y1ngxN4RvULJpo8YS8eWRZh1xX5tDR6t3WHSSNTCTiXbV1Tks6TgpcVeRu83EpPE2GHL73tzmncZZdjBtrXs27t",
  "key23": "SqVmJvRpT6ezpDFfijo6HpsV9m4nn5LHjR8oQHgV2QD8BEWb8oJhmazWQaT6g97PeSBoYPUAtv6h7bJjb6grzWf",
  "key24": "3RzzwjQ7kGpvXvhdW4jrh54XL7Mw8iTU6xFL9CnsUc41VCU3JUV31KffhC4oKW11KzM8GDXMmEcB6n9vMW4gaJUA",
  "key25": "4hnrMYybiEvxyUN6PzSut1duQPKEMyEz57TPATfwk7ChiXPw4NFKugFMtcrKR8W513jhV2CvrcpfXBqx3mK1Q2Xu",
  "key26": "xmcBPhDCxb13TSy7dNjmbouZWfNNvZmoHxTc4Ek7LdZfDjsraf36t8TcWhF9nRV6jj1AN2r21Pg1NTDwfwWApUa",
  "key27": "4PAVg1S1PM4t4AEtudLwuUQPKWUk3RchmBgDgnyAdbwmhqhGh6wP4p7hzfEDp8JejzPb8mxCsPFyuvkRBv45HYR1",
  "key28": "3u9PrWDfTMAXP9Pc9mQWxR5j1qnJVXJxDHDLuAqyz6h9LBPzNZ7V7GD98K5UUdKLrYYrYmGP8ndKUUoKYCKwVuT4",
  "key29": "5pp5R2DHkFemm1dzoxHeyHJVQLpBGvtESRvbhQm8QBkgfoLjimsFJ3kjUfa7oEKftzJpvNA7Xse1bM47HtaH2eXR",
  "key30": "2rBU3LTSTLrss7A7LoSLTeLmFkexig8uJLnQhsQwudEEb5rqLckAcp1WCti8GkuKVr6n5LNFrvYDtDzJXZ4uyuYy",
  "key31": "2tTG8dYLYQNVfgpUbxca5vpwzcjYCYdfLwUDHYtqtJNGn5M3ZmnNuke9CuEzYXgzN4XrcNNBTuWNUReogPhsZWfx",
  "key32": "4Zj4uLhsC5d5ku1MksnmQ7jeooo9Y8SWv8ryopt2WWvUzDZ8Mg22NuCW8hUYwUwKnSMSo6GAPbG9DxKwKeC7c9ep",
  "key33": "A3EBLAuP6hJ3SubM66L65C6mcFHZvoaCyMSJnGvg1pLHuzSVGdTzDbQRqPp8RJ8iZU6ijb9f676jQrfvonCQMvg",
  "key34": "64b1QTCQEzKJ81eVCoLmEexatJgG35aJsxcXk4HmAeUR66vTLmdDev2HPukiSTDg7q9QXZdfzfHsKEzhFsuQj57x",
  "key35": "2LigTKEAy36HEcddKyh4AXV7cnnEdtJfhdbcibZ8xLcaaFw3YV9eL8dSC5YVW6bmv6Bt7ZAYGKdJcGnZhkshEWzU",
  "key36": "3BgaLnarbvNe84DyJbLUu8eTNJ6DjaUB946Co8nUuUjGgCrmbBBibzRsndDRyMhrVr87cqAmUBmguJhwq2kQbGvb",
  "key37": "SXieXXsvXxdqViqMMaUdvRPQeWJPi5knPjTmD8QceZgqzwGJzP84WVvcU4x55zrFs78cNs8YCGLus81Lchvprme",
  "key38": "qpNvHzCt6AxkWZfPneVo3HNFjSYJShaYKibyKbMbuA2qDBR71gNViTexpREmyc5hSHrBfWAbUDMZsRH2P74qwiw",
  "key39": "3t5nq8TNFPC1kED17Znfa7zGP7Drn4zeJjMqgHAqUSi1isz1GjVcEcN8omPxcnPnpD8q4G5R6gNK3UaYunX8RNit",
  "key40": "4EMHNmTYtACRxt5urvh31n3ucSvPcR1yPdSVvwmCfJibqj4JUVLiBZYNNDrzuCMQSKcvqmT6HPnK2YKvYsM6b5io",
  "key41": "359ZkYPdXrcYN91EwsVKDNoJjDJmzvn7PvVtpk2sJSS65RDXXVotVpvCfRtWsUHyXmEd3an2JoYnzWNV53FWNVVP"
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

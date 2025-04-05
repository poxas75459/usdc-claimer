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
    "4EfWD5nJRAiRjSZ21jeRjwT8CLMJt7ai1iht5FETHUr6Gu1sikv5zzc1mwkESdNDWFG2rrQU8zQjnojPUv5BZ23W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xpTTdBggVvrYx2zXEiiEgZJ29aG5XBVcJ5ZbVR8WLRx2xotWWYfHWhyeuq5YgFe96fhvp5gXVRfi2AuZZ5fvgcx",
  "key1": "63y9Pjo61zSnQpmGZZeMYNR9tFyqV5WBVquDXZZCNsdRw7nwZw35KP9UGK1viLHNP1BA2iLNaW5JNQbexCxUsjR1",
  "key2": "2CDxZrbNgaDmNEMGeRP9EE8oBkeNNgg4nwGcZxGvFckTbWhonwYvJ2uLjyiqad91DrtXhyRHrMDLJGULGLBv9vN5",
  "key3": "3e45wtKguSj2NfgbnFtvgdh6qJpe8p48XRUq7RMfMLsHdrdqMRUS8kPd4cHfx1oF3C3Wxxe7KUukoNhhQnVVCzhP",
  "key4": "q3ibiha5RqurGXwLyqUipE34Wru994VFKTxZuuv9nfMurVCU2wRbbg6GCjXPcnb8xZUXdV7mTjT8bDsMzDFwZA9",
  "key5": "4UQzM3GdERFHjCmyppxFsXivuaD2YfxHkVEQCdVrf6KF7F9iYDhzHg9KrniuXBhfmmvYafnLtKv5U7SNSjZ8ipyR",
  "key6": "5vdwXPxxBb4Lha3r24gkQidove5gGTdoAvGPsvKabyXtRQ8uf1WjDTNksC2RietD5oQuaQKKrSjdnhFQMZggd2QV",
  "key7": "3jy36nW1jsm2MRifFaPQNuUSGmrx35c218mLqh6MxGffwjwqDXGh6NHqaa3u7f65ZYgPWhz52s9WCdfK8csMRsUe",
  "key8": "2tdYQFdKrET2K3865BDvxowzoJjr57Z9ecXtxrz4pxvPi4bNRMPQR11k3zmxNV7m16a8pxm5Zd3Qidx3J9t5WTEK",
  "key9": "2MWn3zLKRHdtpNVH2TtEfeE3ER7fGHgDEVYU71bnkSHryuXfdvyf3ryCczgTvQ2mxgL39EtMT3LcZDurdbmJgEPh",
  "key10": "2E5FN3oq6pP3VAPdkntfBnSpppeZ8SgDoWkivqmVDvjCXBtwb3jNgZcuH2yZt34f8gcRakbHq1in3eDHxXT7Bcir",
  "key11": "481U78DaBvCMhaCys81U4J41gGU4KsvyZV2YbXUu2x2BRBgq5NJqEodmKNHjcBRPRUCxVSYGME5ShCNt8yYivkj6",
  "key12": "pTEn5MSq4aHCuF4YgfJfLoC7AbMqbKxsfA1MeroLHVBGFvGRt3wr84qPnTn6GCSUE3UFUUkivAqsSUJ1n7tkqck",
  "key13": "3uXjAT9dWQ39YaFboDmRFvvVhdjqiQ2cA49Afer2tTqs3ifbxpU76GfcSGHgJiq5SHR8t8R8zsRXnm13ZQZquBxq",
  "key14": "B8PYkHXC1PcoD1K5J1txcbKmzBe7CkMkziDTLhgr1ERmGQ5Y7WNZx8HLYYpgz8htjqioaTnqH3yndKdgXRCtmdg",
  "key15": "529zFy7DhywhAgR4gKPrLZETTZxBUNUkx6NyfmPNfoJcFS4fJi9BgfNz6Kq3fi77FqoDEX29ELVi2QfZHzZkbhFw",
  "key16": "3wqnjbfwTKeKGNWLohhaCPpnFoQSR31dT4TanHniGqi2cCkNi9ca9tkFtEiuwkPJB5qUMDztSNXjfntUkXooQ5Hh",
  "key17": "2KjxKFXdE3Fs5T79dT2x1fWhrBELaS1B9Eu5u7M3wgHCPsoKNVG9LcJ12HZYHQrLB16PR6GPziEYwyu6nLx9bSAp",
  "key18": "33zYFTgZA1eDJWQ9DjJFAFY6Wp2bXLEwpUUgzTLwLa4PxX8Jr51bmosDe3yhqd6SS4v3CJjaS75fVUy1oLKD4Ppo",
  "key19": "56foJxdmJue8qm6pZCZwSYWf5kcjDdTDeSfVRr4mib5QiGF3oGiTJiKxHKGFMnCp7AFwg1SrmV5zWq5s63Z1tPtb",
  "key20": "5RBpHyx9vYNUWVXtujtYLFK7348wgdojFfuapyuDTNZL5nyPVxs4tb82HBmnpBTz8mwCeeANRQRHWDxqbVoX5caU",
  "key21": "2rY2wCm14oWcZ6c4vJks4jN3wEdPxLfAQ9NVdFe2i7auLQyq18yNsX2Wv4JAWebhP7brXB3YS7YyEkTFav13A7nP",
  "key22": "4jJnBtbRBbQDdGyZd6zw6WFdURNFmWSmdcf5uFhBNEycp331puvJZLsM59Xnk1bSGk4ViARUXL2rSNVfvUT2oYan",
  "key23": "4dZPViCGVEiiAr51ui9jMwYYeubrfr36J5umffuDhXbu5TU3JSfCfBtSaVHRhaT1V7wsuSmr3axQDN38QCMH1Mpn",
  "key24": "2wMLNyUkqAankbLiFUoCBpn2wvtZ2CeLdDYq8eFQmf43Qs51KtsKpB99LajZv45HZbwzDWH8qeuYYNYavy2d6EKB",
  "key25": "2FCwskKRNhcvZeysxULV9qFaLg2Gzy9yFsuciFvm3yd8tbTmYugPsrQDxuaMFEXVwYhWM4T5JCCRWhgZHSiPFTXd",
  "key26": "28fqr4EzAR3y7SrGjd4XwJkqLeAbq2QHwSD3z5odr1enNrtyiGwUEbVdi1TM3xu7VH9CmBGXHzqAmvJt9tWDToHP",
  "key27": "2wSPwmKXTF3psA4mA285SsD9UkkQEdAdq2LoiyFEcUhhX9xm6sPktUgQYYsejgnZrtWk4JCGQxRYDU1BFBfgFx5x",
  "key28": "za9MQkKu8jeYgfBTmLpNrQssKdy7ehuTXjCEfcD61zuCjEpw5hq82uthGkSwtQ4hDvt5dGEodSDkYG97ha85ggK",
  "key29": "YPhoWobPjigEC8fg24uCzJbNXt3PVXox5LRKqgCckByXAEkqRdgmNLRuP1RCKHpqx98Vj4tcmuHkzhWZZoNivZz",
  "key30": "2MQ86HLbfL3LTRdpCekwvqLaczsHm65D5pLdqSR5oAdL3VxmYtzkBRrMm7NXEiLWuUiPKQsmfyPzW7udAVbu13xM",
  "key31": "28yQzq13R3KDP7habLJPdqo7RPKrg7WmAdT2J76jbp6atVaemGkvo2orEWEgcErnTBXVj1Q8yrCPrLEFxf1m21HK",
  "key32": "4Q95U34U1i9fapZeEh7Bm6o22Tg7RHB84xvn54sUUhu5zsPtSyx1Q6gQeVXBmYsMZ6EEqwbteuujy71FUij12oax",
  "key33": "yPr7JdL2jbhtL74ApWt1ZjMNCkjxGD8o6bcfWjBc4JoWsK8XmgyiTiWKFDcot1yPcfJ2795cZbUaTTViPj134nB",
  "key34": "5CWZ7SNc9sECgpRky3A3zG3ovZLHk1XZmPSruvjvWxcDjY7wg9g41gaEoFeVHTiF6gzWKvr2h9uBr7MFWnXeXMPd",
  "key35": "5kXGYZiEJjWRT78fKeU8AdYjjRpUqQwQ7wVDXmuhGN9sbY6ctNQaE9wDs6vvJenJS35L7usbwBkPcfE1i3QzVxLr",
  "key36": "4DH7euGSTgx5UfKMKHgBWigyAANGnEvm3JG52zPyRVSiDNCZjbKatcKgXSKwCK3cRYism5LC8WJc9yRxMYqdiEFb",
  "key37": "4bBTcyrQtYpMafCq2NzgBF8aREfZQCi66fvsgtYgiVrNV2pVaRRa9nEimcx1VagC5fRR7m8kapuWsiE3bFUGgxE2",
  "key38": "3SqdjXY1Nxafc9RbEgF3Gf6JstgnWiff1iZuishUY3YtnJbcTtcUWycCVQzvGkGrtA6i4CN6pQuigSTZZTTP82xb",
  "key39": "2aL1HqR1A1HEy81CmRwv8jMvAdLvzjLBvJYhtpgDpXiwTwwhSSihgvx5tH2ngpiviDnqMw2unaY3yoqw5tpCpWcS",
  "key40": "3SBhUF6tHes14N9gNy9tmLNqCT7KNXx8qT4EwwQcU75wLZSeHoD4n1SpgKt1p6ng43cdSA4F65yJUYHp9nzvTp8C",
  "key41": "2SbHRpmHQ3SAmAPGXj7e4T84yNFmqz2SHZQ3wtbZBcYJdfvMQTu82Pd16QG9ofMTNxTCHHTXcQcJvJwsRhGCXAtY"
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

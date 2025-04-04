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
    "577vqDMdEENQsoUSdunJ3DnVyUbHCg4GAhhVpc5Y3rSqRUmE8LQGrWTXTJsEdFWrFsbi9SojNtGBcVg8kgNjMWQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zjMUGsy9oZVCDadqUvdxRfXEKXtpf83sPWzdF6zVtiS9L7eNoHmpfhf5rEKkyiWbDHae7cGiCDEEWodiZWdzKR9",
  "key1": "BikopwC4yw2ysWscJPELYyFPWgnskTDVaHz1QGtEZxBByhunmDyZL3gW1hvPHtF5ghpDAjbLxAqHTq6XirsWLwp",
  "key2": "5NV4LVKpxfPaDxfzCh6YHGCXbjspLFawCddFYUxuKYL8GSRq9LYopQfV4ALsCyR7ifqgkpdYf7msauYBrspfjFbd",
  "key3": "2r7NpLsgmvrdU3K1XwdNvZpf8kjqNoLdrPTFY8KeLrTedQTzVx5ojYTEv9JYZryWWHsQX2vwKpMf2qK8QDhZpfY",
  "key4": "j43pgUMfq49bErRyYbXAfCDtAZD4P3DQnpaWcWTRZ39eaYM8QQ1FUtYDgtE6ZJ64TjLsvDTrcEK4hdFsZngJPGx",
  "key5": "4AkwH5wXJRhPALKQCUceGmjB8FiwDmDa2kaPk9LewMJrp97ZTKF6exxTJMCkjZqXhaL1zDaregPNvMM1dLBbN79K",
  "key6": "2uVj9eAYJrgJeMfrmVH9EpiWXwwnPU9bAmmaUCYAkY6N9AamdomEDftNQsUFbB7uJ2V5vnDSdMPppw5N5wz6DEKR",
  "key7": "4Z36y2JVAuNiFCZTJNoTXF2CAJwrjL1uP5RB8Zq3M7E3irFTpqKNvbW88hjyAg1nmBB4ur97H91gtAeihfBSyeC6",
  "key8": "3aCQ1JUw7FiHkWMAkubBzTp96MqvLtUw8sKQaW8y2MwecpPKFzZPuWSfx7fjKjzfZ8DFExAJ7viiA7KhzDAPJpXe",
  "key9": "syqEPs24nvh78GsHqqPGViUTLRT8r5YapZzsx4fcV71ZZ7pB68MAAoaJscdFEL5A3ARCoBnKEMP53omffragNNi",
  "key10": "3rg1F58XdCjDdcPY5Pt81qShL1gkRtMP3PWF2fAeGD5uruSGtoZMDpDvpEjXb9VgotcgCoZGkBB5GKZJiAYg4yso",
  "key11": "5izjnwHMPt2uGpfTYHL8gzKbjCLMywazHWRdZxFfTSLs2FAsRuwX7Z7J6qqxRAJEeggFjJaKLj67XCWVoTNzWFw2",
  "key12": "CV1H4FMWpE58TxBbsRHE8UrBjtRMLaQdiiefwSgFvb7KcBFGxYqxaaBdNYj2w3cKHAD5k8c9i7zPstWptLKXLW5",
  "key13": "23PtwaJbTYo3G5XQ2KTEXcunqRX7Jd343GVsYnGdhRc1xJU7cRsTQ3eL411d5Nb2RpxX7ADA7PSrWMnDWoq8F9uW",
  "key14": "2JfqH4yBoDSXi3RJ6MdGsWq1kp2mxMqPEbRws5EJ4D9mQAuaxbZ7eiSyqFD53mS713SaD5JPJVVR4UPmmaSxua5N",
  "key15": "PNgvPHzy1gLNF8sfEj2Wiftd6S6hzYXP3X9BW8E8MEaoLrt4SL2rbbQsKuFnNif9aQXXEqiCPo39Yjr78QWfGTN",
  "key16": "3pDWRfUtCwbGR25Eh69cQmwXJxxa23wdWnXKU7BcLjN5bLYq6bTPZp72oAucJoYUBfbJyfKJGwKJk1wCYfq5doS3",
  "key17": "423vFyW3oY8ipVaMHRKKiV7AMJAoKRpK6NpbqwfrwdDvNaTiGr4n63vwQYFEV2e8mnxJZnYT8DDb89hfiZLg5sKB",
  "key18": "3WpWap3wLva73bp3wE8nHrMhruMRzo8ZMJY2WTbRYkASWRkjakXQWRu1z7drGdCToFAkf4zPpdMx6Qh2vU39NeMD",
  "key19": "HEg12pXVnkG8K1itgB2rF8skZEy9PGdJVVDCvc8YYP5q9aaXLka9nZCMfmWubip5sdAQfWk4HHBExaggouUyrmb",
  "key20": "5XCrDDaiZHifuANSJZ1b4wFfX5S9oTPTC79AQgKwLkAp8wwf9LGMUqKhRmDzQCFSu4X5vG7JLGkhdhwvpNbHgt3T",
  "key21": "2JEEN1hdoho5qadavPegp24WsPQVxm3AopzkSNxmHNzcSeErQHVC1fcCX6SLbds7M9C6mN4sdyrdugNZYog2SiJK",
  "key22": "3Kbm5NxP2tAoyu92Njn1ryqKUamMSEkdD8E2wxiDqAf6nqyMbkgd3piqLDF22aZgqzAnmZSY3rNUn7mFRUwmCjEB",
  "key23": "cspFS7s8KJ53wmnbCndRwaWc4qrvNz9tSs1Hobgs8wEj6691ApAtKzMYseU1BRxLHj4nwBcwDX9JbHfowF2G51H",
  "key24": "55xWuJZgaKPGQ9EeUcFVvDJbNFUa2V53CFb2dC5Q4ej9AQF2S6XsXQEmqHYdWgDQCHezNz5xWcCx1xHU7emq4P8x",
  "key25": "2tQVAshrLtPWfxsdBJtha5XrwGwuDvATxKsUpUiWywPZgVytiDbbFWDHUy5msuQvusTeYYDX69AkDYLABK8WrtE4",
  "key26": "2HT4d1KdygNqmuFk2VfQJawdo1b2Ew7aJD7V3ij6Tv5piRg1R12FCdWSMMaGkHodRxX5dfNRtGH6Tg4kCCs5CK18",
  "key27": "3hKNPk4keSMqkEFPMZg5SVrX4CHUWNXjYJjVBTHo3PrdS5SyYf2ExftfENpEM7xUrjSVU4rZHqc9DxHTzmQfv1J4",
  "key28": "3r79jJaD6YsvbXD81g3s9JbhYrHxD6Eaevi5ceSrTcBdphRBE97D3B4qWAxX1i9vQWBChhZBctspLNjZSFizCq5U",
  "key29": "ygg56RBGyjV6jSHtfKUq6J7H31L5ZdbbkytH7dhDDEz8s1LeoSWF54jTKoMwWbT82AQWxmoeMHJbbHNqrNfePjH",
  "key30": "4uabejat3fW4tSt135cZe2u1vFXShQRefRQzW4GP4jF7HCeBBNkJJ6RkuJ8wM2DHToPcfRymX941TP5nwfjE5h65",
  "key31": "3iDiyEVwn8dWQPfBtMoeJUySdQGHr3JhA8jAwwhdxi2LUTg6Y87XWKGLTdzydh21VheceTrWvUGFch32r1VrdZ55",
  "key32": "3jF1gJaiKNkn2b94FCmF5KmpXUQqXrf2A34TcFZHop13HnwJYrVJBWtEsJugg5NzWjVfUhbzp5LFjmwc7E8gQ3HC",
  "key33": "491h6jZx1A8wKYdEwJM4FJYmAF1KrvBZzbNvsYP3a4iiJpLLQve6f3WWD12ocH6Xjy47iaaSCHDx8vf3hGvCTMao",
  "key34": "xC8oq7fKKQPoW5RnH4cprhDqmc9sCo3h214846qMWAT9Ur95RFhTWR6yvDfW6AznY9CBHRQgN74dJUg18V6HgdV",
  "key35": "5ythuzjEPxfT6AwnsnJZSUec6pbPJ1SSVmgoj6rF5awYNjdGMHBzA9unFB3q9uRq4t19Q51Evw3Q6mTpzsyiwzRh",
  "key36": "23bE7uEGBNrTuuEK4TXwVuNydCLmyacLkLWL1EBg3h3xGN2LTeoNasgEnRk6WpCoVvXxD19nGygP1d2ZBhiYKV63",
  "key37": "3GtZydPJukb5bVGXDDuPbppGqY1m4UmhpYsx8oQ8ZmNJv5W5x36ygr6jQcG5hiuaqNLwLGXkRKJDi8MwSmzVHGrq",
  "key38": "3KYC8cCqxSxuHckwDLheNACxQAbw9nCymYqkyVgjnqpWogfV2usJntLdf8gzrpzoa5jzKkM17kuLUCoVqZ6GURY",
  "key39": "2KZTVUAu8N7AiTihh4yRJ8DcfFXLxRLCbAcMEVmHyAWJCMMRn5GnZJzT4YEwoBZmEZyot774d3UXXfxe75m9HfnG",
  "key40": "22BAy7XBXFf5tLu2Au2Tfi85RBmm8nvd4kL9DWFLcDb3V4dwp8uScxwv9qkSEEF7kXPP4J7YzYbCphgoQQRj82CM",
  "key41": "3xBZbZBwzDDMporxLUPccpKmVCjwZG4fjHQM2GfShBTvCQrDjhoqe6Hu2fqfziB9wCiYwYPVrbhTx7Bg4pkbX755",
  "key42": "5UnBtjKc1SHKWUdYLUPskHdunz1PGaF5ke63rGNzSGq1YhaH4txYCz6w41AHM56D1rHt55LeTJxgyQ2BYhJhRPGq",
  "key43": "2AYjGjge81g9tNN4htnnNwVm98BZ4BaKRVR3s1hWfNDknhy9fxQHmxn3voNFBKiGcT52F2RRyUuSsfc572b6HzaM",
  "key44": "34UJUhgJGZQr7QWioGJ9yKP9aPK7J8mpRf24mt9tYpSgPjZ561521goPuPC2EMU3o13MyvJK46tP3VgHsSXsDzCe"
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

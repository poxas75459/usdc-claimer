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
    "34ST1fYMLSMpijKkphH7auTtZ2ikLtnsXywKn3JEVAFPH9j9XyVeLoWV5eHpHxwbWj6PUYgYBmrePVisUBWPQeeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N4P57Utb9aUnRnnzqhJVztGyNRFMG7TEAAfmYv6zJKF7ed62do1L52uyJWVE2imeKGRmq71uEqkNAGhAfiLb4ik",
  "key1": "VnLykmWMV1sxhCGbtKY81FFAtDnh6gftRVGLqrryQu9LrxPhERB9K8PHKB63p5MDiVijZat71Kx62DLSRZJQFcZ",
  "key2": "5VgoJmyHcWVjp3hVKwUANX5qnzoEjaUju1gPq7vArSFDzyc1YEw8xtmMprtAH1AS6p9CyRw9S7nEFLMppUdLnm8x",
  "key3": "2H9c9tFnj9bbbuW9KxNozWTMAa2SkYbKLSUGfTEJD8s3bV15saMNFPzAeBZthzD4gRxaEsRs3Nao2PSzfhoRr6YA",
  "key4": "5hAChXAuSuBHyuaJRehAr3akHEua1EE9rekoHLL8M5merfyRAkvXvgyPedVFYn2xkgaCf19jRbYRsUZoX4z67tZ",
  "key5": "62TawPZGAJQQwiV2tv2TV3jz118q6fNj6xksCKWUAqa6hVaXEYoVeEWHst3qBeskyg5wVCSc3zNpgYqMYe4W8oRj",
  "key6": "5T3SGM25eXDGka1NAVqvrGVXwoGMhWyFmMyjuSyg6KQf5GQzEiaaMt9PNyqZschxb67gg2Eehkt5f2PHSoV7ea1",
  "key7": "4oLjxLscFXf3TbC7TTLxXgF8PDDvTkv1eop4tWCMLDhPdxnteDgdWwKEcs35u3L2EaBNjnJsjLV2nu6aLikWMBUs",
  "key8": "2McCpqaTntdb9MDTrJjws8wKTSpksCCGXS1gbRWg9Kay4RZkX7CxZgw4LR7gUncaVajVpL4oaGFJAiMtHJLcQgFy",
  "key9": "4gjwouyuMRsTeQrwFC9nMR7GUHnc29gzaYYugXic2QUoL9wXJrqYoGqGnbcDdZ4ZERofPEE14zXo5mwBinbT4CeB",
  "key10": "3AojqWy155PA9gdgJsnpDNYGzdefzyacBS9YBkGzYTqNLMj9unBRiqSwJTMEkGhNASTycGA49SDquQxQMVTbhSNR",
  "key11": "Mv5qKK1W2TVAz1XWucNGYMXh8dGUdVgVS9A2aGuhhoQHmxRyfsXVdxN317B4V2XnGoaE3t4v5VgZ9mnsn4mPfHy",
  "key12": "5GqpPBbJzjzj22q74Ca9fDX4miJFDuJYv6pDocA1JvTJTQzX3rg2dV2ZoBPEMMGTz1jcKXBv98rX4aXerXkrTGAp",
  "key13": "3RFzs5VyWdgvKydzSKsxAMHkiqAuiNGx1UiCUc69nknGA33DGxbeRxw5DuyBkM2VMtjbGoKCPF8831bQEwSk1paF",
  "key14": "5Q1EVqvP9Hg2rQ7EkDtNWSfNH6Z6DiYYbNQ3j8xBoUPZGRGqH8v7zadsRQor6NaHSYn2yAyT1QQ22jRqjuLJDbJN",
  "key15": "53n89Eh7kGsEvqghQqCud3MnsZQWGfeeQpXcEG5UT415S8qpaLKQyUVGnfDLpp5JCTHy6tadu3B4ixyKBBqnYxFs",
  "key16": "4FJaRCNcTTsF45WdX4Nm3cfaqKvxk3m61d5nvQ9pTufW7aBrPkT8g7tNtXs7Lt94Agba4j2h5YTgQ5imw9qBfd7o",
  "key17": "4X44XASG3LJRNyPR3NcJRkA3pkjmqGQ1u1hX63VyjmstjouF7iVV4Ld8dAGe3inmjYnhxUmH18sAgdKLhVfhpbKe",
  "key18": "4J7hLt44mgEUXxfGDx33uQH4ifGgLymEhj66z7SPa3TZ6uFHcG9Me1eDvwdDKnhxNCzduCdAJfMMsRWB3sA89BJa",
  "key19": "3aL6wBPMGLjteK6pfGZtjZWGraWYiFgGF48gkQLFWuXTSXbhsno8t2QHkijsZWA49NHiE92jarjBJRAiPaJMfsZX",
  "key20": "33QZRMvVLzoJ7AJQ6Wa2AhL8xiFz8sGVc4oVyQAi6MknF7WyjqihBbRuiAeWHDFNqwoAWXnhjhNuN2NMryEdZjiJ",
  "key21": "5Zmop7Tjk4uQGgAAMLb4r7DB6vjfWcWk6Lzfzf42e5yQk2b2kVvnvvVtsZG1qk51BsQuij8ExuF9VJmiJemrT1ew",
  "key22": "5S2y1jZf28xTWFf5KLCb51PQcerR4fHhcYKHR8AkTCTgb2RQ82GpJuYmUiF6iN8A1MmpwCDWgXGzYVJBnBer6aBn",
  "key23": "fdn383nHUM8vnyhtETgDGk1jLqkgZagUcNLQ4XtGZgkPW8i87SJTquKzReNEFtSDDmsFoJ6g665igAXa97YUkaK",
  "key24": "4ksxZMiq5ZuLJBaWraRc43oTn2hzrLPe2qUErVqHRMVofHs8BeQR9tJKjNPLXMAWXYzQLr9DJLKFj3975VQR3d65",
  "key25": "3QQiNkSwaZ1Uw1LqpcAiEBfg2nWDtGB4X2hA5LgEpESqEwThPLMB5cjeyRrvBUSfKRRicUAH4N46teknn183ySPy",
  "key26": "5gwGjTG5BBE5Tzr422QRnkaU1Troy6xjCAMpDJGehFmss2uvG3V4ZYpPkWtA4ZTh2ZzDyVTETKoezSDdnZWddChe",
  "key27": "NiU7ZQ5xzb4jUqUtDCnqoE1xEqPc5PzyZ1hrBX6CUMGQMai1bjYMsTyDrG4BJkfqG4PTN8LBhBW3M1LWktDEAxL",
  "key28": "51CNSUJ4GJDFxrS9T88DR2zALFr6bvSqf6W4p9QbytnkWwqVKR94ftJTKNDP7qkcMUFTEbN7JWKkXstNSrsiQaz6",
  "key29": "2NaePMPdDMa96MUUsH4F4Dm8dou42s9pxw8ricDWwCKdLfj6XtjKgjpm3ESHK5X4wPWu1AsB7Lrpc8xRyCWgmJFj",
  "key30": "4Huismkt6BSbm7AR6U3JWQVV3aww2wiqXT4XHLmCj1opSYKLXhomdHFHSEx5pwAWitXDN2eEHJfFd6oFbugGsAEC",
  "key31": "3SARRqgFkZofnMuWPTvpQ5NeSuXmUR9Ez8m78JfZebwLg7FBwfymKEdY5b18sRe8CwQD6VN7XeieZN7N6tKs6vKc",
  "key32": "3PfiPWd7VNjihxjv1p5vDD7YjgSutwTte3ymze13hYhMzDp1wXvWy9JCEqae5jXDDgrM5QRM8Fm678SyUtMrcbRQ",
  "key33": "3iQ58DFLVw9PVkkotJHfShiaxFHwoBFppwTFq7m3xrLSZFUpLkgPHHztipzaQvmwzvdFfmkyizEcc3iT2DCRQHqS",
  "key34": "5JbvWywDGpM3csuk55tdkxoWwU5BAnFsMWDxkJ2mV5vk9m8W5Q1gj6Z8cDegMNou6NCUAJkuupHNPmbaG2XPoZz2",
  "key35": "FJDCrd3Gi47MYj4FuUdppzbciUzAZCNnUrgb7NDmDv2BGbseKm5CtpDD1wqhXAvmqeekg2i77ifTUDNsLKW2oEE",
  "key36": "51QxAagbXLWa3tswZFbg3r5G6qkHVNs9bmc4wp8PpKz82ycvufJiu5CbGivXJT6ApuKJUwbe3J77p53r5gPP1Km5",
  "key37": "66skyhQhhk37UZs9nRNSMDyxkX1cdKqR5Kd1pJzNAvU26KiWfTDKosTpjGm7rEcJEBnYFRijmoAAbgQoHSA81Yjt"
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

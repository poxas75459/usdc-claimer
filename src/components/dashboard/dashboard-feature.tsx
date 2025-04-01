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
    "2i6hTn36EZ3berPx9qGkutPesgQYoXG6ZFEB76RAEKgAa4zhVuehGzqhQJ4tVoF15dCK55dYeThgmsJzcgfmt6XE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24AtQrr7efaJqbA3q4XK9LSdUjgSNTRBx1f6XXqiCCBwKFGYgsqrgYs2WhvK76w4LKttnkYbAZ24RNdjNW2Uw4Zh",
  "key1": "2bryLe92rBDK4wgzh1tYweeB5vbJ7c4zZ4X6pyeqG5NkQoyLZBpHc26i2oUKgvpMn3DR2kCwgi7MUQHgD4Mzkdkr",
  "key2": "4JVVPhnb5nXrXUdgen7w7VSC7BY39gRFiBvisS9zULaWuNWufenWd81j8XwGHXfLu8o8Y2SytGWygCZgz2FMzHb2",
  "key3": "mGGzrTdrdG7B15hoQQsZTVEyqfttRS8uybiLvW6bAAaPQspniRTeUacWWJuaJH98ZNHeAn4SyPzXK1dAhG2oRjb",
  "key4": "3DPYKifC5jQx6FoBjvJwj4Vpo7ZxTVrMFeH3byeDeVEK1e6fKfjk5Zd1snwi7fA4taPFBqtf3P9aYnac33UiU5cU",
  "key5": "2A3F5BCYXnnisrki28FgXgQAnQjomH42JnZWxvU45okiw9MbbGtKqqKjWjNow22JX25qKvY5rLRKVgvSLD1AY5Cr",
  "key6": "7ZMV1PF6mvpYHhqwqV9V4u7E6NNB9eKEfrMuawLgJ5NHu9iB9hwbLMYNZi4oUEdUJ2pUksw7rEerqa6q4YsJc2S",
  "key7": "42XNF2J12Rzf1C8sSmnLdZ3RoqGiPdMnVNF7hjRDVqZptosKdGPgEWF9JDJB5mgbL6Bvpvj9Mny1NhhG42cxi9TR",
  "key8": "5K5Ee8fLzP9Ea4cDQ8GYQo8fKyDmUdgsYFnZvz9AgY9eGPGemhsfoAKvjCTq4r8BTGunkfFitWjVU8431RTMqi7W",
  "key9": "5ji3z4D85EnvFyrWvz1GKW6a8rGprwusT8gmd5BanyCtPwT9sP7n7s2WdB7NEjERUzTkZPKma2QjknhCjpKmdNNj",
  "key10": "3YGpvsj7FNA3EeAB4967srYyJPRfDTQbi6Chni1EV8xKdKiVLsUM1Dry3AsecaSmgPp16teNVbuRUNoizp3RGqL9",
  "key11": "zwG2hY5mpkJvrtEgHzWm3Fw7e1nmgxbRZ4HiTuzE7btK33e22hVF32cZpwqo5H63b8bDHsV1prpy2ZuxkcrMzzF",
  "key12": "38bBWnrZ6ixCahRnxgUMVirWkXfWR5TGj3rkGieiw4yawZmh4F8L1JfkqshAw5r4jPqachWBTSCLVrRYX2sND6cG",
  "key13": "42HQxWPMcro7VBkT3oPnLNJsiwKbDx4KhVWwwXQVyHUY5XL31MqiHrijohQnsNoRuQod1ABKDwJ8657PU9NEkg6n",
  "key14": "4fRXP2rpdMbxeqVgzaLtCnSV2MoyGHq2nWCToBBZSkd8CGZrE2pDWQodH4M57DvHw27DfXTui6SZZULSnjpqHSCx",
  "key15": "422GHAcPxsqrry2kgvAAknEDhTYAXjGkWHt8wyqgdQ28VLeh7fb1Ce3KN7GZSjcCNQbAq5SzcNjwM4SeysWJyfV9",
  "key16": "55ZZDWYJMueFfJaAM4DkwfC7dsCAFLYMN22cZNZ36Jxjt5ihrcvNvqh1t9twUSoLV9C677B4Dp5KEwEd6YrbpMgX",
  "key17": "ZpUn9UN57hFA7yxMP4ZGh3vKc3Y88v6PiUK9JGUA387hdEvuNorXS9pH4wYEd59gMBFxjDvZANsmLkaDMyNo6Xp",
  "key18": "3QNRSRX3JSZ2VkYA1W6DtZmZfzQGMDPKchPpHqYy6NtJiBxowWWMgBRr5ExX5r2HKZnRR149y4NuefH3nji6UGhV",
  "key19": "3uuzoMpz2AjWKUVAyzUC1S8ANrKouBDTHHKUpzEh8XQNMuXVbTYwvYeyiPNgX4DbDSHUTetxVi9LDgdC2pmVHmr3",
  "key20": "2FP8dkXvnu9KxFKyeM6ycoJniR7qoELY5NZkyqVf4KR3aFN4S2uqjH997GUA29Z1j5PpGsfZubvGeHqWnjcDMEQK",
  "key21": "5Dcm65q6oxJP5o2SiRTWya7PUxUCDMZ3EtotqJ9TAaPpDDud8c6gh4YG4sQreL5njhk4FU3wD4fKkkyzZaY6qTin",
  "key22": "2k98qkqyW7T93ZrSTLeMq8hKJqqnWFJa95qWMsqnug21QByFsbr4EWrLymLJJi8NiksGNbJFAiC7yU2ckpuEAjvQ",
  "key23": "336WuvS465JZ9TXQRfE9NVcgD3WSdG6xEaTXue7toFkro8qAcLJW4eSF6RpmGVpW5Ko16mboZKQ7ikJwoqffakzT",
  "key24": "3fN6xvjAU16wcvFTkXp3uihM5hNdnCB8WDYJpaEo5Kk5vWBMk51kh8CnQ7otVLY3mooHzr47V4tWJwavorFvzTRg",
  "key25": "4E5FYmCcPAKAUWFyr1gCUSFAQJPGzHWnQcL9GNKhT7EDTVKWadAAKT9PvHjA8yPRTNHX8jXvJX5KfLxv2213gaVx",
  "key26": "QhYTGkJ8v7XiPenkAKi1jMpLV3gqwXpoQX9scf49u1kD1i4b59aZEcyrR35t9yZfWY7sVHoqui4kYCyX9LAxz3K",
  "key27": "5SVYLR3uRmhqcbVnsxF9crdBs15JSwezUqSxvovQMUqeu92Li3wcUocZh74xTF7SahdLRifDeUEXe3UoF62VBGo1",
  "key28": "21uwMUZeanBMmeh8dB7URxnL2ETR63VHEuUqrVbaXxtwQc18prpdyeYgFWi5pVkGdtFxzTJvToHwY6V2vjZLzR2x",
  "key29": "2w8YvqE5Edv13NcKXLbqxPkexnvMmijxYy29dFaUL6V9ATJ4H2XgTb37onDzikTPVXPANp4s7mULXFPJ6cjPDJkS",
  "key30": "41XKBUvHXHS7pq9bkc22fBDNVXTM6MXTw29JdWS3izGLxyvahcfLr3eMjZ6nWDvnh6u74XZKkPvRsfjY36ZJ8Mdp",
  "key31": "u3Us3C69UWXzf85cWZbe4L88b579NQQfdkfogJHNJRi7A4D37r3Tz7AqgnuLdoKxfAxbaip5wchCRScC9zWERWj",
  "key32": "5CCC1zKhJHMvmupTTBZegwYz4rzsn591LuUBi9NfN2M3nsq35FzwwHVskXzz9f2o8oVr6zi6XMHBfNZAoCwfKvRU",
  "key33": "5qgaJZpjJxGdSgBt88wGPg5WcdvXKHjfLj3UZXAdan2uTNcbYvrF6aL5tS5CGET4egZH96XCtBbjD2VGoRNFPKB8",
  "key34": "5p4cYU6LZu4551qA9CYJxzF5C1b1jLsFyAHxAFLYi3NgTX86j3GJxH8vufg2qts9BNZZyutj2PD5ZCjPtKoGJrf6",
  "key35": "4yGMsY3RGWra98cdtpg28Pi5Y2SCuQvqjLzBMgHVYwJX5ZbLTKoX8ZDfXhkonfdmFV4gU31mxZdbiGGqiabD2c6F",
  "key36": "25iSUx8aHk3UUpcMephS4m1rPh4xnG4Q9B3UrNvz9ArPjUDM89Mgj6KEJSPfxXGfDKyb91bEmFPMNQPyXb3w6hAT",
  "key37": "67KtV2pU5cc38KUbBD6sUqmxJ2M79J3mrwXUDETUX8XE342HHWhii3jyus65qqpdTmUjHgEGyoeAj7Ya1uTm3m2r",
  "key38": "5we2ZYGz55CEzn8DJs8uPNeUcTu4b4tDuHkAgoNYrC8x66VvxJfu3q6YLKtFB4ufNG8CvhDDjNDYXppjPUrCxGrm",
  "key39": "4Adv6CqTKdZ1CCKyVv8gp14juFBTskMdkW5yubYYi3wT6ybeuTJeFgqeAwuZRxTeMpXjyhTMtScpTsmobprDBtxa",
  "key40": "59EBeYyJpE9M7ZFMJyhJUTfejHKneWwTK2m3H5PQYxo2S9STBe5CihkHs3VPzoj9CaGvqw6BUYfdGaqgv8pvBqaa",
  "key41": "5V18mkSd7MiLFDHXZbXMZm8nEn9zwEgihssLv3bvVuprXBH1jhrF1fiYzf4nzLVGwtQhJcu229gdDpeUb2ZLxkQ4",
  "key42": "3sNb7nAmGy15j581fuiw6ukUhuzYxAVNpf2Kywmm5dCTp1sSUBhHpSLxWBnMvFMMoVSjChbw76avsnLquEj176og"
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

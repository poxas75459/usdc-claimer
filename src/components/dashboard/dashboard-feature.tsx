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
    "4577LoxkG8wsMQr7YUWtVbvk2i1Hz9Nms3GMzfm2MCMUD7VTXzpm5y7Ka82KhugMaQYkAj8UjF5H1K9uq3i5GD2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47dumDyTFi2TNMbD2dBKs395Vv73c8VrGFErFYWLiA6cjgvyX3qwAswD6JRP64Cjzgxwgcyt8GGmVFn3e8F7QeTS",
  "key1": "5P7HK9kf1PhoMotm6wC7fsj3HRs3PVVVQzAtP9s313c2srpLEi83LLeC7AyG7DgWCRZdnER7jaZ2RqbdDhpDHSk7",
  "key2": "3JTrWL4Q6mY6eUjKaUG6ykKNh9EPyR7rKUQNKqQ44mVLuWG3UGhs9LEhxXFQHvcwusvHuPYzcjFxVRUZxEDLFFQN",
  "key3": "2BV62GCjmQr8mkLTFA1L5xWmSr3QMT3qpUrTu2yuVcybFo5vu9EqPtsPGipL4jfK1CYXYzaYj3YyHgLNigT9prD3",
  "key4": "5f4Qp4uNiC6YmVfpVWZW3kxZnmTuDg7xE2Qn6MGCpYyLGqWFmwoJAP2KD5sXgUHUe1sw2mrE13oMrmp1fFUtJfMr",
  "key5": "5o56Ti11ArTLBZHiUZ7pUA4MPMBbGCibfniYrN2GBPeFxN9Ew8rouvphTqn5dvDg4JWfQsHJgfgnvQhXQ5241BRG",
  "key6": "3mc1TupzSSv28SAEkgJ2TJpLKrampfuTy3RTv4GMTiGWyXeWSJrc9MGFKL2wZuVanfthD3TATfFic7kXTvFeZCjo",
  "key7": "7Ru19zVAVBLAeDd4Lz84yrn5VL6Bghd5mTGL4v5yg1Y16JYansxatAZiiEmxvh2mMwrNJ4W1fjWDxuxhF8b9Ebv",
  "key8": "3cCj8gsXYFaGRRExsi3ueAEH4NBLB3su7bZp4G1tFGPFJ1SvnKkXXTikxfQ72jPz3Ujnjqpeb1NC93V1i9AbB3fF",
  "key9": "3qZMTXF85ufkpz6bar5vWgy7DJXQJiWFbMVdrNzrpdCPJ4xpimNyBqZLpTXDty2SSmza3P3NPC5C4jfrN1T77nJr",
  "key10": "5CGrmvog3cJZW5VQHHLdU1j2HwykqjtcrmEDeANwGbTT5YqyUea3NrmBoZYbDbXVY5GrkBhZRvNfALczXrBZyWUH",
  "key11": "5v4VD9sqsVvRJJk5EVppH9rizB5hSsAyKdWzCbfyTZBnsKu8d9rZJiTBDkkRM1VqKuUzXEghDA6HFbx6iGHCUcBX",
  "key12": "4EH6Cyh1Gg1q1hfCQ8pZjYB2Y9bTeoacsUJFSG5UTPNEvssEzcvVHCBpvRQWC7GdzT654bAT2Qwwt8RwAhLwUn2W",
  "key13": "4rP16ei78NBbVtH4wp23hw88rTYjFfYbXgEVQu3AccE8RxeWvjPvwrhdAA77teLSKU7AUB2adPEFXmDnnMupd93f",
  "key14": "4oznCvgtE81zGR76aHXe7eWGJ5zx4rBngsKriVU7UhDgDSshRrKVyfWWs2JAFjQto9G7XTtWuYstTqJd2b1tzUF6",
  "key15": "3rtYz8nhT1nJKCfGHStuUh7AsM3A9YjkyNXgjCQ3fFdQU9enkLrZcAvuzxcJEchE7FT8HK3AusBVGZwjGptGxZKZ",
  "key16": "rna3Ti5vwmZ2rS4CtnG2YJ7m7j1X23A2qUcKkU7z5NCczYGQ45TejnipuhhFuANqKfabVtyGnF3kAvhCBSGuT6o",
  "key17": "3NHbLKcJyFRS6Ddke1m4M9sEFUM6CVDJU6KkSqmgdmDf1fK5Sg5WhAEKVTFb1PT1rrsub3frPUEmA2CHMESUA6KD",
  "key18": "51hW9LLo6dKRHKYAE7SRMpJpAXxf2FGKNG8vfKLckNJzoWUxMfci7NW2BqW8TdhbzEfeX8FiyjoeDUKJta3SLvtz",
  "key19": "55HX5exsRmYzLNaXcRhythTybMNCWz2bLeQKjBnbgZFa5uz7UwmTtZiTYT1fhJyjszHZECoRp8qDzraa9KXBfvJY",
  "key20": "NNWSz9ZRSa38xyGWoBMV2dBLhSnw7JqnP4b9Q1YhcME7aCjBsmqxEjdgwaCBy8mwGtEFmn6yW6J5KpPnRa7E7EX",
  "key21": "ytWGceJrbGYVmBhHWCccpnHRF3ecEwTsUUGS5FiTwWTHSiUzGAoR8zt5qiLetV3WWkT8xsLemZgfzePhzSM7XpR",
  "key22": "5dzcUTgKYGthTychctVsoMApbqGN5bBk5f41qfi7LSV4oG1aQaMFt7H76Q4C7uowqkq7fS8CTWD78H6JSihpW6t4",
  "key23": "2YMAMKeujex8GLSkR2pcfiD4zuwwEtRcFcqNMhMSXqgqWezHX9aXvfjukvYWytYisywXN4aCuTmqrWJLurJoyU1K",
  "key24": "Q1oi8hCUsVB2h8cU7ccMi6KtZr7mkQ51zLAFvGveQ8qZ74zpYmSkaz34rsij7Ucayd8LvSv9TQUZ5QrLRmTzx3n",
  "key25": "5Cr1WiS2HgX5Yp8oX4FX1gyGNzdb2k4aRWcNKsMegGwpGtfTZz7MJMdj6fSGKrQ99EXHATcNapweGbpQanvBDfRx",
  "key26": "3zZH91ggsVY8GN6cf2Bk934wNaKccNvAEF7yXtiWJt5ELQQeBzEfVSKz9SgRdYEcaieLWDym6NdT6tQ3EwohbN1m",
  "key27": "5SwSUYM1LbE9kLTssqDJARHgudUAsmVXQhPTCqgd1hZGEy4teAXwAqXnDrtveCPYGCAY4MwrjTPWWcvkPJpw43dw",
  "key28": "ZnmdpojBbDwZ4jM4vXsitCSpCg8Z2Ha7Mv6jucTf3yQJGFxXoZLr2UpG2qhyq5mBtN87i3yostoFrtK5AvmtA6h",
  "key29": "3YtWiKXe25T5VG37wV3B5G5nhj72DbPwUGRT5QgtVPxpoSUAk1XsakAy4HyfqQpvib7cYX5H4kyM4cefcutUnspn"
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

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
    "3H9QLoLLp7Yg9Y18PeghMV97C1JbBkdPhUMYUJWHfa8CzzXMvYmYuqAbRdPUjJzKTyyiy9V2hnZNGZQxDSaa6jYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WaK4TUo5QGjJu4oM5uDN1rPThqm3HXFuhmzWiT74kibyb3p8DD12KKSKoxMVCb16vGBjZA19VSwk9Swh6x3gjNC",
  "key1": "2qRU1tR35tzrgmEQQGU6WkoGF6PhjLzYEKiZ9wnNxTHqZJZDZWKQ7cSZeZ5M8ayCzwSBU54tiowuXkxH1UciDTx7",
  "key2": "64SjotMTu5CjamzUaPHs84uNNXnXgi9PdRS4WexRJk3cguDXonyyPuBfcb8o3JMVEctYEJC5N1njTQTDF1GXY45V",
  "key3": "4KNLz9pg2qmAYdV5aygarymNz4DTfyq3K2GG77u8FytCSGHjWUBbiGXGe92ZWHHAZMY5ZQsKEhT7nEDDwD4MagDW",
  "key4": "53urF8bkzzVkMQnWWLTkkkH7tdkEWwByiKwKBSau8Wbkzwp1FgjkgGqkQFAo1q5K6naiCAACRigTK43kuRMYxgSx",
  "key5": "5jSCvHNuWj8m4DiTWpP6pDe2MZSXH7tasEYpmJjdQZLWSVvShqbDiDjpmiyy93GceEwDd7Zsw1jSn92nuoKH4Cf",
  "key6": "AUsAXviuCXRo5CGykjoX2NUYdtQYUeqd48m15vbRAjCyoUnnBTkg6d8Do3yguYa8orWJwEHFCziPbwM9JNFR5MH",
  "key7": "5eUfpqiqtss9dqZ5VzHY74w1GoKet4Tt6uJb8Ab2P7WRTs1reswE2eWzrsaeZWzABvyx3ytGcGkqEKfzyjujvxbo",
  "key8": "5hZiVK3pWDRcitJb9iUFGnqn1Lvcs5LcyHDn8eeU7wqHUoSx1YzjPjWHPLVdV6PbheSfvMmoAMDMBWKGvUcSdH1L",
  "key9": "3u4hp9EPX2Z4j4cEwx8qhcgkRSmoG4dCVQTPrfHxCdZV6cYPp64HCMEBFWGe22Kp9AxoGdfeP4QuvzqJbZ9DJeoe",
  "key10": "2rLAT3K8SFrHhmxFMKuSfFUCDvURjJMh6DvySYXwpdkj6R24btgdX1mmK96aC7ySeg8TPwerwYWLvWG6vG2NbnYK",
  "key11": "4V39fvQpA9G4ZNPrPrb8yjUxMKFV9EZPpqakzE3PxXNwDdR2UinE3gAMCm2PiZSURi7nRbUQwHUsrzZbF7qVqyro",
  "key12": "2codaT1ETWaMtivmFpBjneM7MRpcq1XEXeYBNExPsJ1PBb7GUaGgbUArTU8LJQMHtm4rovpeSinjNr252zyL2azx",
  "key13": "2twqPA36BhTWTJ1dnh1B1tpQ1bNijruAGWo4r9qNm8fBTw5kTaj87thvQdweXrFNT8mtS6feyHu4VK9Z6VZ9V75T",
  "key14": "2uUeSupg476c7471aP8VuXxW3MAwESNYmotUJUAdXKM6DjeLQrwB5xY22BggCm9L5wcPHavqYHc7RnAiypLHTSZF",
  "key15": "2y5HcfuBU6v21eQygSh8nr2ATjT4E3PwadpBaGqu4kHBsmyEN98rapUfQqjGusUXLNaqxx7KgfwbfndE3usKSWNd",
  "key16": "3wQp7boFqFJggSSGAnRcG1WjrrVtyaaxn8f1t6Gxsc1NLjkevdtWmCLPkayGBbyvAHqNM9WJAGCu4uEPojhYzoy4",
  "key17": "SGEsAbjzifkAy6zrjF7YnNaEryoCYt558haJGkpEc1eKXd3kRuy6i4sAsUYzXWzvRQnxpv2o7XTqW2tx1EJYYqb",
  "key18": "2AXrC9abNWiUCR1MaBndSpAKYMBv5SmP4EoHzrsv8BuifA3EEEDbvV7NSAxEJYXaMRidja6TfzoxKyhtDwBhcNfC",
  "key19": "uXJ3rQjDKvruzd2vzK3bx9a1oGHgLXtL3KGGUQzmgRhu52gTgiAxmKB2kQz3WCMhXSCz36ahqDV81WwNtTbnSpj",
  "key20": "4L28AnrafR2WGaM9kumvwyoAaxnjVbZMfVkdu5jU3d6cDSk6S5kmgU1ncUnMmmFnsQbiL4pk4kmKvHKsXuExY7AA",
  "key21": "4dBHs9yiWvSgXEJAcTV1aY1SCBGpzk5GszZpELDnEjyWCSV7tn1mvQFCtf9p6tAhnSDRT9tjpNCvAQFhxhs2BYM8",
  "key22": "66N9rjGWnVHNgwd18L2HJFkLRrbckcVZoBHTXuHK6AYfTVbG61UHgHQCj4rDhxR9h19ocrJxu7RwTVxFQSazUEiM",
  "key23": "3fC3bJ9DFuijzEJfxvicRGbdtLKsaNUjpfjKwxXh21TAD6hApBZpTpziEhfJvQwwN9UJyeRcxTbg9ZPJ97BmYxdn",
  "key24": "3ymwWXRPM2ykqfU9945mexuuhLLc6jo6XrwQLQXhC6M8HvCKFuU13zQ8J3q9nsxtrV4bMWXLEoSzu4rQwsYepGxi",
  "key25": "YatynukuAZLrm6iKPmrhDfxbtJ3nA885HfFRe9TbNVaYisAsmrqQaskHM7d3io6Aso3212vFQNHpF81JfzgzK1J",
  "key26": "2B75GgVeEMoNymbCAfmqkD5UiDx15RLJHn3tTXXSnGLTgfYxYrRJAGXRNpdmD1KisvUgcoBgC58DB9WPCPmvLra5",
  "key27": "f3naTuzAFopHSUn8geNfsLKxmRuUZBMKNu5riWLPiizqzJKELJVyX74Z89zRAVJTVra8pQJW1CE9fDcEDg4wTEw",
  "key28": "4icuNU9Wop5KXVdWcv4JU9JdcGyFJzwRmTjmXQB6qLXDDeJZRz9t5EGTGKkWfScaiRpHw1DxL1RAWmWXcV8xYj8y",
  "key29": "4c5E5JpJNVH4ZD2tcYhRiaJ1iAbtNwk3fgzBTQLubi72UqBJVnVEAt2cSmsm4LBSo7MrBuRcJgD6LsKvePQ3S9ra",
  "key30": "3eGjKrqwmvzzf5vdhyxax7V6VJ5cUevFzoDA5i4WiZFnb7ndUPBS9JzWeWSXcbLW6jSegMV8hN7cg9CAUHAaUwwv",
  "key31": "3jQqCcy4kL3aaiX8bb661PbQbZpKUmz1VGiGhVe8JKYUvjW7Zvi7df3Ww3tYNGSKLCPHa7tywxmhsGCBaXEnbE2M",
  "key32": "3apRD56G3V86Cm2CapWZjFkzB2T65RQaVCJY6UhH52E47SzZWLwBGP2aUqMjabqCdd2u1td8d2BGPKYjrWba7awn",
  "key33": "55TACVEFp84YgXMGisFAYVUZA33UWeFGMRpWora5NYavpJjr7zAm6amCTQEV2geAtCHXG3LrxUPM7wntvxCnG725",
  "key34": "Bm4HhccLMGCVTUJrVnzAe5tx2SLLi3hxnzW4VZRMBFj5kLqSzniA7Xvr5Vu6Ay54Vi8iNt2XstmTTZ7mpvx3C1w",
  "key35": "5dSfThSSFE8w3RmG2Hz1BxGJYedWnTrWemgZL2pPcbUqMRSQGnFLrCG9XFYics9Jk69VqpxBRdnTCNG98woVxU7V",
  "key36": "2ofjP4xTgaXjnZLRvdXMKk9cFqCUtXVKMBKZ6TcweKmk5KsQZNbj9Ffj5WkD63y8emDrrNBJZbL9GRKVpyiiVHNM",
  "key37": "3t8YnJnPiKxgepxtVp6X5hs8h3eVos95vZNoBNJA5xkAqUnQxDN1mxG4prVNaSEJfs2Tcq4EF8R6vv8Z12jQ3vzP",
  "key38": "ddGq3fwQG3KqqvKdmSgArSaBNe9rMCxWVohgiAd2kGcjMPvEdoV2XaAFEfqxZwGD9vNTHY1c64vSsUym7pn5At2",
  "key39": "21ahjwjPrMCRP7KXE4YWVBgXje6MeJkDo6HyewBRKB2iDzZQrjvp5isE6YAuLJh3DzVKSSmaHfF2EWVab7rhZ6JE",
  "key40": "prg7rpm52X14JdBpTvxfxynXKex51N7DYhdC4P9bwmDPwE7edK7pWDaCPnNyMAW2EHhdmwX2ZC9fTGE6sV9gKrm",
  "key41": "3QtfKV5MJxQz6Lw8pnQN4CSgtBxXTRDoqBe9aU7TofxFYi42JTW7pMatkZ2u1iSwevpuNAcdMVXpxbwsmqBNsKDV",
  "key42": "sz5dRHbutXZGvwqBkmebKEsgRpGmQxj1ATQjQZG4FTNJHcCgphEJy8pwDUuc85tYR6GACLW4xYAPzf5GQywfRJc",
  "key43": "5znLsytPqhzCWMyomjBuqeU4uHoQfNxqZiywnWGc72h4bXmY7TetJ3CNnVg9v6fRb2V5vRT5Xg5wX7SKJEc8eGCL",
  "key44": "5VZ4gEzqgmq58ERCfRNZrypXSJdzakPvwTy9JdGWyqnY6A6sENdUnJ9W4nuG1bzgAzmUbofvDvPhNLLeBaddfwHb",
  "key45": "4eygRKZExJYycPbZgFbDpuVcMkk7CEnghcC4ycHPHbcTnkqtXaFcNeBkYWfxfacbK3pyeTfA4EevsXzEGp8PcH7P",
  "key46": "xAinKGUajcdmbASKhZGa1ApR9yhRbf1cJMw9wH9TagbAAkdVhT5wgvvhBhDLCJQBuFNAdY14UHQGLKaYVwmeJ45",
  "key47": "4joQQDXUYHpWUaSRxP7KTZvu49iXeSpd9J2cHNG25owLS1ttYpc1b9ybAuntDdDX3XnwR5AyqYrU7ne7h7ZSM4Uk"
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

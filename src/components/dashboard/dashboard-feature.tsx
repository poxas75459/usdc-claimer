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
    "62rVpsnuEfCxZy5Yfc6jDrLReNDNbbWke65gPb48HAYkzZPQYL4z2UBWd6hmWkwiYt2TU2YzsvcfxSG9p813BTPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iBLW7KtSPoPaZ4ZcpPFKZfWwbb6PfhuXwgigUvdx8DsxDJ3XxuUg1rYxqkMaLSgBBJ2EwDysvnRubtX8uMzo1Kv",
  "key1": "34vCTapnsjcasHuVh7skkB3uoFP2UeLRYwtbgZjWDEXNbyKRzAfBLUGko3mUUkHvwF38FjPFdReGs8Bu2LMT6vUc",
  "key2": "FW8GzFiUJLccm1FNnuQLZrGis6Vft4aJAGzNiyEqcqCxogZv573QcHzZxs45EvhKK6kcvWqy4k3TEzvV6SDd7QF",
  "key3": "4nXSBoh2zseDNJ2dnc6Hp7oL77L3do2QAcLouY5AvCHxJbJzqgHn1cjehrAzbWrik7Bhfo5PduHzs5gMZkushs1f",
  "key4": "dTPdW6FefFUnXGmmNJeHWdYrLnDvQWpzCs8TAwzpi9vCBdd4C5pT36dhhyjimK8vcdrKTNbKV7ktug62MXnjKsc",
  "key5": "4NsBsBNsv9NYSovNam5UCdbrGxgBAx1qvhtwWEGkQPyu5FBsMTdridXo1KcuGNYY61iY1EWNf45YeqhZfVTW4Qgo",
  "key6": "3dc5VoxALEDQu15XxmqMR2J7x1oNPyJFnuKhcizdACumzfcCSeBrQqG7vmqFtpZEkxwEUyZgVXJF7C9hoxpYpmRq",
  "key7": "55EHjZ3KBx5XfJgCA3oXczY5bZ51t2wx33t1GWMAuaNoNVK26LYuTr1yMjPLQZhYXhcar3VH8eum7Z5ywnsGHMY",
  "key8": "unMCTYsAHTwXHrVKKDfJMwKnpV8xjvbrQcjWaPnF4ikv33FEEDNR4CD84ZwBRX1Dha6eHE5dyEe8Aq7QdGjD6mE",
  "key9": "2siMouUYCWNjtfdBwCedUjML8XobJFNoKQ3y862oTKnKg4wiCuUskmcP9hKSRkRK9fvsYwVZ66VccFUxncNK78T2",
  "key10": "2ietyHKppXZykQyqSCcmMDob5YURWJKS4iar1erEwcPSBTFWrenWGw3ToXNM4nVBA9sbZ3hD3QwVS5xF2kSnqtRq",
  "key11": "4DEz6yNFKX91ueHu4WiTrXqANjqp9WzFZbiJExSw4ukj5v2adiTC5CFQQG9ivqDEZbwAmm6q9bb9DWaQRncmSNTB",
  "key12": "5sp63uF9CXWRKbRW8Xb26G2RZPdEVTkt54dHhrXeupH1SPLkbfkWnWMcXpyoJFZnjpns7jtqYFujYuYJDQhn63Ss",
  "key13": "4ufk1i3bpk5fdj1PJ9Px2atLNTFnEgnixMPJxe3A9rTEu5p3MHAZ7hJrsTKfCgQjQ16UdfGf5dis6oKERDyKRyGU",
  "key14": "nCZcdWaYj6CDEAQrBMkw5h5cXA3zys9PybLwd2bia7jcNugpyQXbasgaHeDKSH8Ncz7nqjNejkAAmSJb3vubnSd",
  "key15": "3fsGmTXKChxqoL8kwZ77eaHEy7te2opoPJ5YeMJvpPj14WpLaFgWQkhDHwL5TRrxPa8rwo5amFiTs3GxE8oHBKh4",
  "key16": "913FzKUFsun88hfqBCErK1dgccRkaQSjRqYnPQ6X1S6JiSE3qL17FeweHZHwWNfnjnRd7QDeMLWbKrbhBMuH327",
  "key17": "2v8mg96CwJhwE4KizQMZHqgjAXKwtdzUzbBvKJxf3sECvB3RX6xmLTY4wPkw1LBssJJEESTD9FvMu1sU1oHYVnVi",
  "key18": "3zHyakjF9GkU75ADsULLh9tNJz41uJ3mg5JT71iR9rrajwZeFDUc5HkLnpzjXsWep1pCfRBRzfHPN3798VMcuNiF",
  "key19": "3REV3M4byytK1aGz6opheVc8khS1CrRwqxvVtobv8hZPjULhq2iBexhUkjgPpJ8gSf3jEVgRK9ZWRzvciCPsXPo9",
  "key20": "4g23auh41HHXGYQWgZEbKL8Va8QZF63MrVdUHqBuHwdwCtNX67rEwKj8bu9aWSLj1YvCDyhbMZ3W6D9qDpF2CwY9",
  "key21": "2QiwVKwWxN9AX1UfzynJLQabVsdbRrwqJrxDt5RnnDE8wv6QfVVQ5gjuqhU1DitqyzEEk9EMnm1TP64bjYJd4u7S",
  "key22": "3ZVVH1k6F25swRA27VpdokDTfjMNofmSRQXKVxfz9wRVLFP9HKrVk2cqfatYkXyNeGxPoWRjvrYhJEqJ5e72v2Mv",
  "key23": "zyp23D2kxDeBXBzxMPwSRZWowanu76n88j9wugDmtq1enLN2t61Tq5dWmjczqSoE25VBJ65yHANFDc9DxegJg95",
  "key24": "52jD2ZiFbcHc1PxA9QzuULBB73uc6YPTr7RjWYEUDCZeAs9fGaqNbdChtVvZqMc8DdsygmHf99f4UeQCvD72aYFN",
  "key25": "5pzNhG4Tg2Wac3bJxEbUw1G91NyxwSbRxndGeRV4iHvQPHzUjf6v59YyhwZ845pfrfyqWJgaxFtCdRU6KdjhYDnY",
  "key26": "uHBzRPhii9cM8rsL4ufsziofYPgnN93zXFX77hFtMuSSHQddMLxFVNrSRtXv6MAdHReNuHGXs7MWzjR6YDt7jss",
  "key27": "5Mg3oAHJSs6FhX1hBA64rizBD171mL8G9viy77PeSwvNtAg3naXASeJwGxFyPvwxdWkHztX7WY8yoTvv7z6Ur2g5",
  "key28": "4nHWCFZ2iyp4kgYdkhZ6J3ENMEkVjY58R2tppvLqVFg8FYjGm7LbwexrnSkcb6Pma8v7LvqWvPec7gzzdrfoFaPE",
  "key29": "5syJsZwAVG7vwe1JZfj4FAHU8PRM66phUPb9dHaJArF652tZyYUVkUP8MmYYsXXYZLSWxkZ1qqisGcKvkekgA2PT",
  "key30": "4Y1mPLYph5rZ5MRNrpgaQGd281qvsprGk5LTx5HDMZJoQMarLExDJ7fQEpjN9w2RvaCSZwy2jDVhTdZ48eMnyumV",
  "key31": "5j1iBQ5Z8PuApKKzEPw52C5yhd6MBz1VTacQ47MDvKTPHL9U3XyTHKh5BAr2djvV1RMC6jjMiPgVwRt2RfgDQzw9",
  "key32": "qDqoSviiyhyzURojZVqhPDNzjzCqqMK5FYSX4ZZS14bC7qw5ahPRu8MDDCS8oDXVDvtx8tR1SWw4SxkoLd9ZGps",
  "key33": "3p7M7bnjLK1Ha8D9qMQ7DGBytrVzv2aScD7ehUpecP8kedRjc2r5jTtZYCimxKBSFrFSSH9qD6pvnzRPvw8pKj4",
  "key34": "4mFEihsHnkk3AC6HgqdNTfRGamqMbWsSgqhhQHbn1An2QnHV3sZ8JEe2zBnBmTeHBDYpJHEqU5zFViDFcL1SZkUX",
  "key35": "3NUXJNpnykfBE4UQaa9HumVS89dMoDt2VTi9j3o1ojuh2wwPWdNU22BGpFvAVeWHbun9jBqeWsa4sGFCH5m3cj2b",
  "key36": "5wHzBbRhcrSfXpdzouN5HbfwxGqVAsZUET7MffUccgHTPcNZhKeab3XdpxwpLWReaHHAGZPQPPAfqmovAj6V2cYX",
  "key37": "3eAvvvvcXAoxmSdprLECBtfKA9GthoYzDBHRtswM1DxXFifE97VVdVwwPqfWN2v7YdvWxRqfC7rQNcyDm6RNmkz7",
  "key38": "3nRTWyQTWApNMA9k3NzrcqmWHDjggZhE7MSRUvUScddHK4AB9p3hGNMWoJnPGJWjZrENuf83f1FTjtbWsmzFwgLr"
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

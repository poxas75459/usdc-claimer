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
    "5jUdPfebT4u1sVVX5Rt8xup7rEx4pspdPLF7boMNgxJxejEE3r7FzBovgTSUvSNpXYmAbs3G3LM8dQ3bUtkRZehf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QLRwKHpgQ2yZbV398Gt4GWjZCGin2rocrVRswCKQVvHTtbNScQ5pn3bTQvN3mqNbpM9yvjUQr65nE1dJnSemtu",
  "key1": "4dGutHVZACDi1S64dgaQf3acZHQMqRoW8Z9bS2H6PWrBVQ1oVdrphVTBhhaWCJni2oAsitqaffdf79YjVkiaoUDX",
  "key2": "23Mo9s3A24coqC8Xji1LzQLqNRwsZhuan39CwbPfAKqFXmcYbSpohpWFwbZDR2VwiLddqeF7kjAD9HveoEEwDeD4",
  "key3": "5GSuECAvDXNwypSP1Ejfg7ZjFroyTYN5jnbEnUqbL1Qwu6kDj1ibENw6UySwwsQjhKXBbKDCg4SWAZC2beyuXQM3",
  "key4": "2RE5wJbudHdFobzxYjA6Nvwk9LkNyz2RxYcbgTyXFU6MFnLbgrNkvuLnqxaeUMB97x1P3eJSMQjFJa7epPt9vzKF",
  "key5": "478dr4gLpE97YGVZQhmbWtVsABvyk2smuGFhaxRWD8DwcCPUjTLGJdigBWvdSmjEvKg5eD5sw4sbYPaSnFX7bvRe",
  "key6": "31bUE5a5PaWZ1wkY2uyAYn1h1JaPMuxEw9D7Sg8oeFA41Y7bkp4RVnWurk1UTTMmyZsfVw1Yhbo82T5X2VshAxPh",
  "key7": "5jjBSxi3G2XQx71pyaGoC59ZrsUCYh8QDGaY2VNp9yBRmmtmEhwvDfKieaMDpw62VFNw4sXmHuibQw6wk3UWaotw",
  "key8": "edcGkxHLFBYtNEUQVPL1FPeUYRm9deiosHKC9Zu1eNhHnD6Hy5AjJeTmPDDBcdYgc5KiF9WpdYY7JgRgmLFbojd",
  "key9": "4FJY3hmebTpnBYUwpvvKHJV4muojtEjWbA4c6iz97AMsfsbF97SqRqsYaPYEfr6KJnPvZgeaGTkJe3cHYxbGvMFA",
  "key10": "7EJo7aDUAWiLDURZ9qdpQsZ9KSzGywuJfknAmThJWZbwWC1hAPvkUUFubvjgYb8q7umET6dYbHkN8paFJMSX3xH",
  "key11": "3jdGHZTBDa6AJHCqi1bBArWHprgS59AcgW6RhD6DWZ7h9stTQsRYgpcwNTyysNii6SXq6Tz6jT53Yu497jdUwNiU",
  "key12": "iBcW7yYvmHtUxKXycx6vD1Yrwi92PDzMWyd1hTbN1RQ8nZAzrCH5P4Dq33h38KCnScD3pFWvXeo5Y2bQQQT82ya",
  "key13": "58mnUnTdnHXqgtGwKJPYswpbHspMV7UiuQifxnBVd8Rssfb23bDRtHm5zMXcH5xTDsv7ML5sSuHs2gV17wbpL9aT",
  "key14": "2xqhcDSFFWe7SeKW7cK15pX4s7dF8r4owiZHUdfuhdeanCR7hMpmUZc4KQqjKfEM4FSQnmgCv1vg2mPMjHJu8XTy",
  "key15": "3Eg3TKjhuJKSVkzPQ2XGXgo1Sh9LU1nDRUHAHary1UyyBF7tUXwL2Gt8kpBCiXeLEGLqQukuqFvtcRQ4u3JjHnTS",
  "key16": "4GbRrYsQALUtTFmPUXDn8vuofBAcmnE8z9ok26SP4aHUxYu3su4MbStrcUTRhaiANodX16hWg9SKFfufwBxDFw8T",
  "key17": "4bHA96X9kqCLCp9DC98B7HmYtch3cjFZbQ3UBRapZTchY72FjSUJPjAY8gu37TtvYXRSCSPXBowVysfFc4crXhcv",
  "key18": "2pCuWEdyhjMGkgeMe7s3TmfD74EzGKpZcTfnYJVAeohpxW3r5igJb1KQyV8q7Agi4Qi4kUGWzrQ1a5DeFvaTq2fJ",
  "key19": "3tpWwYHfpagR6DT6fwWzSA999gK1XJ5WnF6AXvHzVPoTd55teGaNruRjrgDg2VP3SrmfWaPrH34uQfHBD4ZPAx92",
  "key20": "3vawdJjGTNvpJAVBFrjU5uWKA6VxQPNBCherZGoUs3G8toEotQZabsCvu33g8yEhPVuaykrbMrhLkw41heX3Wj8k",
  "key21": "4bki74JzMAkDy87Ci2gWuewYvshfBJoVH2HPmn1qURtf2Vg1Lc6xuE8VMp5UGrLnpvkfik1nmsh33TdMZEPmgekE",
  "key22": "sB3DxXvN5xZB7DURatNcdvBa7bPEm2kbiSWSeZPkmRssKozRh1rdD3LRSimwpoNa8UUACGmzemx6Fqf1Jg2FE4f",
  "key23": "4Qh585tDkzwZkW2WKcgq9jzEABPHRxk4GoUmjNgLQSK6cFM2PJKZYY6HTm3DcTur8ztDTho2gyyWDPYQSMF7YE87",
  "key24": "5Sf7AdrP5DsNtArHde4YBPHtZtGRJ6ffAz17W9MkiLaFQSTDkMrP62yL6oeppWqPnZVpYbWAjwxvmQEz6J1mFHkP",
  "key25": "5xCL7uuPBG4RF5rB3jdpgXEspP53RSd5dMu4tgMbmryWqy5pgD7ARz45SE6bnkHjawdsg4Wt3wJvA5b3rg3UVThP",
  "key26": "3gUQBcwnpcsjKyFdGjzavXNtejc3pmfrPtcDmUM8XKdM37ax43biQ4dovLnf99GenR17Jrd3CERyBvLrR8zZVTVG",
  "key27": "5F25MWf2qikwRd4ot9LEyZwe5JnXSzb46mCz8Sp3XHFHXLdU41dPEaf3cNucUMaYRT33hTR1gRAkLZqR6QLEXYfm",
  "key28": "3EskzpJsmsp5ewapoSQ24pjYUXhKYg5pbkuJ37X1TZgebJsjT8HxvGgNWZktFT3359GBQjHT67n39cPPzK9LxhHH",
  "key29": "2VqJH6FtkzNopPh3vkLZ6G1PfziUESX7oWFkmq2YQa3uvs5pUs4HAsug463XwHi91CmoZTN9Fb3ZyGK6bu5xTXQo",
  "key30": "2D4wtgmJMNkFJXd7MoUJyrci68c3dtiy6TFyxg8dSqXorsEUMMiYemCfLbJTTkTm7auFh9auygMsRs2fTHeA4tgq",
  "key31": "5ksCzpKxH3yzvvbv2o5x7YicdCUs9NKJPnUgKu7hV2K7H4W8rVtswD4TJUcXyYm7YcSyEKE1Bzq7dTVvkxb8WRFf",
  "key32": "4ivsmhRhmYBaoPVfJeSUu4okdtMVbo7nA8FbdWPW4Wvpfb6JkoCvmBYWDJTeQaAJkmbNgcZ7BqSaWNtsuWXZiLTQ",
  "key33": "2ypaxvYs4UfgmWqHmShuBxkyoGwfQBR6o4VUui8NA4vM2QN1tKezjbAkhdq9NZCDJ5AXfQfncDSoaRWsBRcvuD4w",
  "key34": "4DcW2vF5pPAfNbbL6qKRFtrXWPrQKPpKUsSkMA7HrvahFKecmdxJPqbrfVKAnNVRto9vMzTxMunBXUrJ4fpdqfXN",
  "key35": "zwvyrWcxEmYtNjNkVvyCSoMJ4GXiE1CvLNytWzyuyFt9ticHfE78K2D3g5GsVx6RxHHbwczXkGdAiBNz5tQW18Z",
  "key36": "58zSeGTftukz4rofByVwK1JLiEYuQVM8pwBrqihgBWArGB7WZ6c8Aj9bVyULWFRid6oa2EAifH7T3xEotXR3KnDv",
  "key37": "2Fs51D7QG3E25YmCvA2hcqE4Tc8XknBwGjctbi2c9bGszVuogF9B6xSyHfqZ9xei3wC7WQ15tELg6SvFRYEFmyrK",
  "key38": "2JNXSy1vC5yDvSbUA7ENmjMPfb9KNjwZGJNa9iPHxrPeFoQQL4pzZ1SDZ1bNS4EPRkT5pgxzstFxiARRRqm6nY5k",
  "key39": "YtHw3NK8v4D3Rsbou8e1b4K2RiBi52kpLk2EZ8JM6e6d5hnttqbQeKFAiSDtsGKGuGW4Lc8rhR38Gttv2AeUB4W",
  "key40": "uxEc3pKkXm3nSwx6Zf6EeonZzuz2FrAYVq2jHwzjugtgGY8zgVwcoPfCLBg6WQfs6dk5QqAMTMCiiXHzT9TjnnW",
  "key41": "2Se65pB4XV8o4fvkZjzgzp621gPZPv5BYQYqqsWcgVEoKWQztpNXdGBqfTHEiHU5xAkL5WdXy2WYdkTcdbngcCxt",
  "key42": "3MAvkZBF3PS2d6vfkVDqFoHa5sEaHhTW62wNpkRYHCrk83jtZqQr9sCtL4stZowoJFcYjXrJqd7NmufwPE4dAiGy",
  "key43": "5MK1jB83SzQy2vURRp7mhBmdQx97stepNhgbSqxwk9gDqRWbHmXp6QPo3juA5nZ7CjvGCg8j37Jy4rfuy8rTXrDD",
  "key44": "5u5CeEMLnZ4rEKV9eWSg1WMFAyNJkFkvfvaZnuv8h9wTp2KnoFsEP7pXcJTorM4pfm5fH8y7GvVtfDKJYVowrumr",
  "key45": "5nmtw3va9kiVXGPb1fmA6LoCqSo5jHUv7UFvv98cSGB8eDkC5ZeGMbf1KHCTXmzRQAsn9ogoVcQRXswDnoXUYDJZ",
  "key46": "4d4ULcSj48ix7UxrLLRN2v736SkfqKUxeamiqyb91Hvwd2ckbeA91k7SzsJBCdNfHLsKMy7na993Do2XcXWb3XRK",
  "key47": "2s5yYYoUBAbbg64HC2Hngto6cZEyZAksz4gjnY8VGc5DB5mT4YoeSVRWCswbGZfxwVFueSoBchAXRiPAWNMc6mP9"
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

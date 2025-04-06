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
    "2d7EWKwXVWNMskR7qVaNqhRdQcweoi1M8KyW9Ak9HdxvYijo15ShEpEWyQwcqWUzqRDpXg5jSnH41cSyNjKPz6Gq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XXJB2bGM8GPGMmdN9HtNgnHMVRNbo6NWQJKdCUzYZZ9uBghRRtiwifgohaG5mYX3nBKydviXQ9pdvu5CjJYVVLP",
  "key1": "3voDbQG25h4i73sKLeWjzxYEp1jQsEKyZjdqVoHHWBmbtLbVHxVyLgp25WWxc3MxoA3r6SfFKAenVRdj3jopqowi",
  "key2": "5AmJ21hzsgFFQdyQsdRBQKvyPSfqmM89X9kFTVnbXG2d53F4dU7n3PgjoDzTTcmnDEK7pSXqkHgAY3e2XrRzqmrU",
  "key3": "3Ew3syH6YN9i3dCbZBy97HBNAJDdvDhf9oy7BUeEnEoajjDFNRFLaZ1RGqP4XLhhRZdkZSAvnSNbsXrkUnenksag",
  "key4": "48UadzRGSzxVZUJiLs3dQXPRRf5wasgtqdgGnige8kkgEEXUqgoW5AUPMJKNDtHeYKeaiEE3Y77Mk6P2LPvUkpTz",
  "key5": "JK2VUviDMNJJNUAfBuBzRmVnZZKXuL1a79aNW4S14zre8CMxwTf8GijXXybfPJkh4Jn8V5zUpYvbaJpd3asK1AX",
  "key6": "41J7VakGrFBg1cN6PUCzRREnNaAVx8t7f6tk637EoPduQYzugLgD8GPzmb64fQiCk1bprHeQnG2ARkypqU3Sev6J",
  "key7": "ZsbeqdrWyZHYsfU9BQjU5bVGvURL1JHfpjEEpmad2WRAi1eS96GZnrAoFN1VRTmHjb3NQgEdEocyPc1gPwAiRtq",
  "key8": "3u9NsQ7cnarNvBL6QtZj572CVKYa1LTa2WfPeqtTECmP1SDYnVMLZhM1v48mh6E5G38DEsPe7pZsgjKc5HnmdjEf",
  "key9": "3m6yayAc8AQYv1bDmpYNLPacGE6QoQMJrXgxEuWadAUQXvzRq9NRt64F7LCQ1BXKjt8CSWefqy5779bh9tJQNFZP",
  "key10": "2RQyFQ32fJkrZ4ti9uxA7F9DcZHvni5izRNunvhzUe6eAeWgEvcY5t8XYNX5kttXHQrWgn1fHrr7cBXEJCekZUE4",
  "key11": "64PXf3SuraBTp1iXh727UJ1fsWMtbL8nisa2vTFnveTk8ZZoS7oVThQga9CuNoGCugE6yVrkoEZ5cac2XqG6Dxe9",
  "key12": "55H4NetjtUTLgUipy34v1KWZFtNxmuj9mfj9mkTzLMnDdFuvAKEmv63o6Epkaet4H7pZ6o5WWwCEAC1ZYKp2JWCe",
  "key13": "PxDGWPcvF4GMBD1Fat5jWc4nDFRcYk3dVufpAJzxigevm4QMtoS4GFcv6Uz26nkuFSSpbx2TXHj2V4AufoEWvgs",
  "key14": "5rEiRYsUEqLS81UteyEyJtbudJdGxMnY1xXzGp1rPiJVRtUbroMV8AyEosKEeh92k4g4LoXJwuvf8J4Ym2N7KCJn",
  "key15": "Bq6hmUrFxRG4oDCRLmBEPadajQFq8eCMX8UCAwZL27ohNcMdvFjQCEdyr2cSHP38NLzngYzKWiNgBykjfRTh3r9",
  "key16": "5tcfBdp4Nn352QiFxVgTQmRznKMRn7MvMCDw7NjvoB6jpSiUnn3HfZHjxzCdpsbzB8wVUNjHJoYBowNngG1hsQWt",
  "key17": "2dMMzGYGLYZt3VzpnpDeeMDNSoZVxgbjcUjQm7AVtrjXKKXEhHu9H9p2c56GoEzi721xuVRujCwdn3ae9uNEDs5N",
  "key18": "5xLKWfjv4iRn7iTFXFzdZW6f1rGSSDrhVRHzBwSjka2fCWKcHEgYjbjrHqPEPNuLRzrZWWQh3MngKjKhVAN8GGoU",
  "key19": "2ZQdxwSPBQjuwV58KH6GAhRiwSXAWYFa4AVVmDKq3JLrpDinGM6nBfQkaTKVDHKuQzBsUurSYyzjBffiC4Jr6zPi",
  "key20": "5pV9uutkAzGf3S4a3dgWfWRqLSz38k7ACXkYDhq1PRJ6qBxyt8G3Ui6gy887GCBjY7wAK6c2tWkQAAvJTG3F7ETM",
  "key21": "3mG4eVoxUqiSrUdDV2DNMStJcAJ45w5dRQR3xCrgriMWAjSsodVaBeKP5EwyfRyPM7rw8BVkchmFLAiQhvMV1Uj2",
  "key22": "3ByEikupZG5PVnsbonwPGXJ5aapbmLtEe1rUpF9Xjr6v8NGp6HY7fb1o63P5PFpLh2FvWmbhmiMZMxMPoCqYc4tJ",
  "key23": "PrPcoMMajFScDMYajPXBbWivkmroNYHrQSTmn9pyxJT4W6ffiiMRuPj8biNr8GoZosVaQsbFNQyA7tQqWGH8yuC",
  "key24": "3KCzuX24QS5askHvm2yvubNP8oG8pRaEFL7dgJQejyBPptWjCj1jS5YdofRt6GRpXwK5qtHA3buwjtP6ZdVrgC9u",
  "key25": "38Tb2DaEaxWb15hKK5XzTfFbDS9fAQpeQ9zfFMMRWRgY9u3mEQKkHmnUhDefebXUMEcEVD2rYNm1gZh932HL1dmf",
  "key26": "3FRTFrD9F958kF7KxVSKZGJCC142HCmrYDZxJGbVqng7qTf9gq2QMzkfbhEQJWyyT9zAr6figYx9qVzMDafzFaUN",
  "key27": "2TryFtNYHBbi9r8AymALzYJ4nWMns1vY3yQsjxsJeqJn5Fk3Z8dX7UwttXSdX99dHG3FKGNniAMGWcG41GpFoErK",
  "key28": "25uwRvDmF3yTydegzek9zPFbVB2Xe1bbPDUTAdPnjZUC8tTkbeHnioAnb1H7mE1urnF81DdVqSSWmCkGgC7XawiX",
  "key29": "9ebmKxSWRghC83akhjcmTMvFErFH8vnW25pjsfZxhtxh1Ka8T1Fv86gJm3ypDeGELn66ZzD9Ss5wJpfy2zEdkci",
  "key30": "4RFFR5z98BVyEQJpZbJXnz7tNu2NknjVmbgxZy1xbtyf18rSM92T39faGjyYfVbwu6EqzHkkiF8Wfj9cKTU4e1fx",
  "key31": "4kExJhs4Akn4cdKnuhMEPuAb8nSHiFcYU6MZh1H6UHimBzQi7wfT6kppjH18aDXP1U6nPgtreqiDQG3KtF183gUJ",
  "key32": "4D1eFiyAMg7JitkDgpenNX7fCfvo8t8JC9hgBXENcAnN2LVRatUNaFyp7MKHmfUYb5CmNbPSrbjR4DvqMBtm8rPY",
  "key33": "2Kr9J9D6kPuuE8KS1HtukjFTU3SHoXjnxDDQBYCAYcWkdTCBThLRPDNdVMBwog2rhnPBg5XfeGbKkuQu1F4vhvjf",
  "key34": "4Kw5kq2WY9q24rtt7ugVVpAv3Y3ji1TJsXcjfv9Z5BnXiPMJ6kbdQbu6SKjTBYRLG5sPjU5EaERUqeRm7n94wHG7",
  "key35": "2gX7BbbFCQVsmoC1ycggFT9Q1VBPB7yekzAjZHU77nUzwQ7WMZzrAUDcpGr1BNVLwkCJJ3oRs3hxGaF3aaFbYhxY",
  "key36": "5NcW3VHdTo2dHHmhDCNQebCDJ66w7mCx9QKnVWejA4JtFwDGMMruEYk5kpZrgdqtRXpnCTB5k323C2CENQK4NCt3",
  "key37": "12FHuQyoVqfUuasgpdThs2CTJpySTqAeu3hymioC86G9wt5yHeyh4LXdxz7N38MxujGPUhbCA1sVXgeriTcrDvM",
  "key38": "3CwCf3nUDX5djE9KgcSV7mzsZ9nAfMt9Pu2M83bB9rYiH1kfAn9XY1Z659Sa9RPgZtbRA52fZvn7MXGdSjyo5pk2",
  "key39": "537t75z3yU8d6RbP6eTtqV1ALpw2g7Nqwt82PWEojxGYVcWemQuhkHqWGBaftADE2oWxVt4yR4UBDFBoYgEdoiW8",
  "key40": "3KsYH96yu2vquxcEudswzHRRtvrZA7BU3bsXGQR8fz9BSqsD2LqkwXrcJrjrbBDAgYbeG9dSsyyswhpppmZwRoCL",
  "key41": "c5KYT7fTa883K4fgYizyAPBsrhDteNnpnzi77yyFAsZUXAqEqizL7a17pBVVGGtt79Ae9ueiB8HJ2YXoCBgEsun",
  "key42": "2okkTFVppWMcgDsMFLTvvYKzQ6nfiZdLSXsgF1G2CNyEL9nwwm8WUejhbN7EUTSuaVEr7oE6v7QwEgxtxbwU3otz",
  "key43": "2VwGUioPGgWHV9kYSGFnKwmbyJwXZy7da9sejrQLVPA8y4vX2aTwKgbxxQGc9NSkrPP59uNwacm8pctxjd4RPhZo",
  "key44": "5ps3Pvrrg8ncvC3HdExqhDcoPPBpQXjSKTqB7xhHkusJXKngtZv6m7sSLLFmrNR3qUJD5ZkxhM2gWg1r5UwHRSPr",
  "key45": "4JyNzX6N8vY9NH6mPnWjN6PdKwnhBCngnoFFirBTA2VoyBzJC1x3ojts7iK8azgbdxFSDCsY3MXf9ybmRLMu8MDB",
  "key46": "a2ydKw32Sw7uyJHagR5K86A2Lu9geKzzpNRySHHscHuSbUmT13KaELUn8WGWqD5TkKUvjsmn51phXH83piBYAom",
  "key47": "5uEJS9ormzfSJPH7TkvyqFr23zPWUimMsJU3uDuujGp33qoeStRLCF4aKmGidYCLotQ5GCZudHtL1Lhmw1Ued89Q"
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

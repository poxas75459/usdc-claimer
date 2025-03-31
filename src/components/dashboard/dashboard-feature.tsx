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
    "Lq63FBbYRiGXcA8fHF3b9FQF7rz5kTvP3sPNAZF8BUVsVGZmBeFoLJAGCKEcurH7VrjyTH5mfuoaCgYYFWs3sdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NVEztQUvXvawZFmWgoa5usxFKPSjdJKvQQWePh4RVDdYz2B2EaVwjB3VK1mn3vZiAuMLnyXUg9gdsWer8NVAKGM",
  "key1": "4enfDxTvNYDad8Kg8DAUnN2nz3bEp9CagyAKruxs6h12LaqRBVyxmgQJVMiM1k5PKYtjvrqgu4A4qwTnNfGDA1u5",
  "key2": "4NQQEjpHmgzo9vh9Z9XSaZsEf8Puezce5mvbhQhZFghatgBwtdUes4HKmmbcKYpCadXzTEwas1PwD8ixUqafkZuj",
  "key3": "5dpUDyfdKgkeumho7tVmuF41nZ7BvLAxtTsYpotHkAjQPs6qfeAKAz219Pzjza7WiFHWXEPghMdGyGowX8fWviiX",
  "key4": "27Ns3AdUznKjNEdU12yjxhZMz7hoCujB9HYdJGyuWTL9Wm4hWgPxZEN5NmaH5apmcN5vST4AXxRsXVZbvXsZH6Bp",
  "key5": "47wY9vUDiKDyVjmB2HTZqrQFzcBjBMdztXFLXvTgEunwhrfoXpiVnRhmHchzZHVwUMmXccuG15DfvPojhtAQk5s3",
  "key6": "25n3ig6citPs74HK7Nm3wzFGHsFPUWZVLcWxcuwJoLVExh8zdMbSP4W3is8sKKHVz7PVg2W3DLZxT9YeiPHq2uqV",
  "key7": "2GJDT2tUYLtcSJmPbUwbQwDpHiM6SgKCaYoQe6WWFLeHFujEXTBPa3bwY5T1MKHXCE6JahrKqs7HysDww9wYr6Xw",
  "key8": "Rq9ZSVtLFGVuwxfXMjrg8E51ATnRVioQtkVQb2jvBZsQ6Tob2qrANZdC43yxuDoYek3QZB4Hf1ifa51D9vAZyo6",
  "key9": "23M5bYkpkp12pVUndwuHLB6NbDHJCcuBQYyUFyvjNXyZDbB8WzGgqScA1kWkVKMzjE1k5sJgrajqhJSXUHmgKe91",
  "key10": "3ybrxnLpiKyLd7eHpgwwTgVJFHq5Bf8ZMPgSwHRCYB1sLy1HpDtQha7L8PLcwwYbuiSpPs5XPPD5uBawsWyPUYFP",
  "key11": "VE8i9Skhdu4TwExoXBZvEoc5FcjLJAAoHCGASamWDj7W9Lfftyse8ctmo1XXETMpERtWCVR8m71H8xCw7tsgNnJ",
  "key12": "2T4a9nDzAARtmaCh7P842EZP8itGj9LQPVsNB1aycqXTx4yqcpQb4153FtWoqCKuhMZguoV6Jj7qsktPgMUHkgQL",
  "key13": "UyjB6mcL2L5m6kG9WVzm9V2GkLXroRDJMsDNJsTC3LwkmXRM68vCgdVADHAY2zHFCwsWEuW7YS2mU9vfnxZoYbM",
  "key14": "ptDe3uCWETdeAHnbVp5npgodwGct1G5DWx6RGzPSd8mmr8Rwpwtze8asu9k6cKCS3eQtSGYoXkNWhPftNTbdPcK",
  "key15": "tcFMAUQ7keZ32uTcq4YyT6KByv7M46pLUE1cj43PF4y5QrJitufhvvzt3Nyhi3syma7jjwH85T3gpTGeusuqSJW",
  "key16": "3b8ACJK9UzxKnRW6yuL8EHsQvpRiXXmW7kYq7qkwREri1y4xHqBFMcNoo2PmQYnoNLdHKSuxrcC3WZxiLWLGuxuW",
  "key17": "3e2ApkWeem3N8hwtZv8VGTNZviMTdk1yFJ6B3kEwrMxty2dTEB23FZ4QA19ZG7yb6EfktvGxdLmhiQeG8m6z8cbk",
  "key18": "5CK8u7yRdVEmDAjBJsnKRXq5Yt5kaiYNYAJhVjkbyBMUwvq1SznWh6NFrqRZ9LvWFQc3L3o911BKLCrmRNhCrJGb",
  "key19": "achcaxkcNz2KcUnCAPV7FT634EpciZ9FLgqUTCRZmzK85etSMTEubNJr4xkDtpN61Hntnb9K1TbXMpSaT5mLKUA",
  "key20": "4nwZKxg9oYjMK5WYnyDfb9DaPTYBm1A9LWLFxFhPXkUYKVjTwHDTV9U8xCtSoCH7jZDcbRrXfrXpXah8zzE8qDQJ",
  "key21": "42Qehw2YYcU9Q4xXfzdw7fiTDpYcHryVzTxEvqkkX2vsmXoXfsaNoQqj6CFgXmawkzxeKJ3jHKxSmxJK7wvxo1LR",
  "key22": "4thGpUkkwCTcUHpUZrAt1faQU1oyP1jvXtoLxXoigpgikT2nC7kanWwVw3WKFrBZdiiLiEvmHLwmnfzN7W3mLP6y",
  "key23": "4S6ZLQNz2nzrbkmrra1D4AXTR9M4ZKiAXQjmWE6s1KLagyHq3js7kSMWVhsD5pwFMmBvrt8piSV6jDfHhWYAosxh",
  "key24": "3eqEERTM4snpRDoyC6upxwKWTFXrRqCSJWPNa3NmKG2gkpv4Gv33pr6BkxNEH74fEKZedTfZ3YQPidnEzoQWd7ZS",
  "key25": "Btmg7YTc5t84zA55jNMNY3v9ZzoAX1uBjdySWKDtcSNMqMMEPAv4agGADsESWmx2jNVjkCU4FTbjrSUs1BiVjUQ",
  "key26": "iXnNxiNpBVzAV3ZNSnQB7huTcBmEzv9aQn4FtrosfwHRDrhiD6wddfCeWvaJ2ConnjrKnxt6ViKEsAqvukK6Npj",
  "key27": "4DJtLUG423SnXLqCEwWa8FLdLp5ZR24a52N3EPrtexRJ4PScnTbphXbmv4HjRhki9sbcgwA7LaRPhRKbxmgVSrDD",
  "key28": "c3pEuJocbbxRgvjCVqrkN4dFQVNABfMRiY9rSfhPw4jLZxkcdpnKdAzJLaKqyfq91TvjEUGk5LY26ynoKTSmWyZ",
  "key29": "63PruSnNVFuEUrXfdWNyGNUyedtTbDS7wvaBT6oTzXC1CgAL9gUJdhPekSrjVeDe6AKi5M5gGaVPqnSPvdB4SubE",
  "key30": "2nmsiHnbXbrR1GL3JPJiQ5t8ArgfyTeCjVPSCAx5nMzWi4aw8soSntwxdP3AwkqjK9ABws6xXedEo8MSePzgGzXM",
  "key31": "5tHZc1kqsYuur4Ukh6LJXG9xHJZsgBVqRy3jsA2KgviCSDiATJft8VZC3qcsCVX3ywK8EguXJsRTwZv5vUxuuftU",
  "key32": "3ZR5PC1AboRnEAwHF6FmGzeT2pSd1imyeZUcknGtjA68XMcjfD7ncBZKhFTeEDtSxZR52FNX5YiY5JLTC7W4h6xi",
  "key33": "5vpDpnvE2uDbXSzBdFJyzumFLnYXkzaYnxwcV3xCxJFWUmoZCq9DS7uQBfkrPFeMbmqG7itgJmS6dcUeeka1JWEQ",
  "key34": "5B1umc5Tpy1TTtDp34tGM29L635SrELR6AT7QXKtB1fre7ZS5tPwyxG2ZcDjopc4fye9YSnR2K1cxcmawkQYA4dm",
  "key35": "3bkQSQHrDaotqAB28q1vSPxWPovAnkD8BomvKB5mrLnTybsJRSyBZreg27uD7swQGwqszpjSkr3xPB57UgRfrDRu",
  "key36": "2Q3vW2SbTRo27HRF6iGK34zD5B7R5aFLux9dHHTq6Uvd6vMCAKnaupCFJcbwDwu99fu9Ya23NjuSarQ1SKqcR8GT",
  "key37": "5HAJRJ6zTUA7winAy6WspJmEdJcU1fVCXnqunqQNe3G13rqgxMGMAttWAcKWBYVZ6X5BLtDV1knyF2ViVkMHaru1",
  "key38": "3RQYpLVBZMR57CC57snTcg6erVtsC4MCBQ7hJhJjqaPj9hqDVo9Vyq4oMn8oaQrX2ma5eZDdWFKV96oBUcXHVx9e",
  "key39": "4mQk5ypykgURwwHM8ky5pZKzA2nLcTFDGQDXdErQ3BTdeJZ8vHzUUUyGW4UeopkiJRQXzJfTbUwMgDhBXDp5oCjR",
  "key40": "3q9wDd61Wt1FKF4NAtZu1afx7SyNffLF8LXFNqZFAsaojAKEtMsptRDbwvL6Vqty7R7qBcGJ2Si4kmnzqAFRSWUB",
  "key41": "4arfGNvvD5xumCuAFPHQMwi2tv769vQpMHEpdEgETihpFpVfKoNLir7ZhMTKAdtWEkDR4F9m9GvCXvqyJDsz2w5p",
  "key42": "5C37Umy1T2DqGDwRkrDBHSjwAyumXNTA56AWqJTHCdjb3opGhtD4UBvKMMTYvP4bsNrhjCpEyUoCPWRiZfc1hQRB",
  "key43": "3Cu78Fuyb5b11UgzfeMyzemQuWDjXcv5x4WrjnoiUsX45su4ysrf5VaHez3kVddwsMKWyVcFt7CUep1jc2NUesAX",
  "key44": "6pdwefLdy9ERbqvW4EyY6bAsEXjYusdeRzV95a8FWdz92GQmjorJHvvGyBsXnZK9tbSb6qthGfKnTxwNiX33XrB",
  "key45": "33uGuJjNGE4iqiQpDoo3JbFR1xSeH3JuAHZjftyJ5Sbvc9CKswFrsn6PW6D1u1K8c1anHTbyM6sHBnjEeH8H5n2q",
  "key46": "3Kebed8bPNQDBwUZ6fpdgjshK3EvCUJ7281BWJBifStJy2E2cSEWRFVzdaG9kVVEgu1HdcAPsqAhCgxDBrLSs11M",
  "key47": "5LeKD63EDja7AXDDkcmFx7j7Q6DxeiS9hXXNNcpDf5nyUrrv6GJHhJ7gJbmF23W9GeZUGGMBcpXXZ5QMdsNf43dt",
  "key48": "5gM1CEAqnpFUL7fSkxgETXBNFrE4kXcW4NitYBGgC6iYBpfxoAz8y7PbnPnCsvaEFyGNeeUxJNe4vnEyUEmH3UAd",
  "key49": "3jjrV9vmGhAfrF5qeRWds6yXZyTuMqw4mDQKrc1PuwDMKtAy64idLd6wqZXi3dRsDyF9vKQ12L5Phkb18TwLy8Ps"
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

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
    "2HA2jVUZ557qvE6ureJNWsP3yMSDh973T7m85BqCT1tEi6xqbeC9DusqTV7ra9zzJLnaSZtcEW6rrfx2tRueXoXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xi1eSRdBTRAa9PttsBKtqxQ68k2Dw9bhiZxhAUUa1c9vRznhTSjkMB1Aavjni21f6UhYTtcbeRBGwmWCN4oNiNC",
  "key1": "4tjxSP6A6UJJDF4mqDf3ytdcfMa9PX8oGHeYMPj76UERvN2m3E8ByFLjVLiGQsAVHRKLSJqdC8rXoB4Jm8MCVDFS",
  "key2": "3btV49yKyXYreYMg5RsBFRVNEmF2HPgC1pVF8HTBYAfwuJqabjuHf8XpTj2TKSPtvfNRGUYTD1SLEhNRpjBnPMyc",
  "key3": "TwfW13h6LKKBHVZbEvLx2e45Lf8W5sG3oV522GKJvXfTNufBYRPzZmePmU8SD11p6bugfV7uRRTscEk7ciuWAED",
  "key4": "8PcfXM2APcBtKjEoQnx66mbbpSnmqgejKxgTRWBpU7frLq3M7ktK6iyoXw9WwX52TAej4ZpmQ8wegCzFBv8kbVk",
  "key5": "2C49tD3RJnek9zFwdhdLAbH9e6kbQTYjbVmkU8AtbrGmUCd6ZjLx9WmVWfCjvWgX2pmvCpLQJH2frnbDWgS9BvaK",
  "key6": "67Jw8iu788GCxa46ZTajQvetttJHaSN73nAF2hb5KxhJGshsLYkDYY9CnnXxFXfn6xfgHntKthzBbmLz37CeSAc9",
  "key7": "2ZmrCSAQhaopDT7FKkXJeEGH9bVMHHutc77vfnQ5oWbXVNQAcFgZANYUVhu33TFv6ysEu2kjNLgcsVtpHJEwLNFT",
  "key8": "473zzjvix6DhPb7sLoRRazY7UZYZRbvACGPH8B6aJetGrMAXuvNLkDyv4mTszxx1rxKGjN3dJ51v7rYzaf9J2usm",
  "key9": "2bDPYjzXEGzxRNrmbzQhDpVMf6ciD7xYtQiyxQBULYhZirUXqMCuw5oKmnBKXANE3kA3h4HxFnPvt5TbSodxs9or",
  "key10": "3AVfPJzjmQNGJvqP2zBdPLFmKSJSmWkgSrQCzMj2q24Btowrj9dcYVcbCNPiha4bQskvR4rWrDU7P3zMG6qBWYAo",
  "key11": "5rXMvxmQYdiNiE3PCtjgx5tSDVeoN65fYZnis4zqrjZjYADLpdiYjkwFe1NWcRPwwFKic619npFjVbi17Z1HpAy2",
  "key12": "4NwvKGn9zQDtPqLGWGudSkNAaTRXtLaH528nCc8cstmLWD1zS99Kbc2WMXqyr4iE8ZCx5YGZdnBdMdUFMhbbiacE",
  "key13": "3aqAdz9xPydbsjgPyo7CJJTDMpxs1qkvKyTPHNhoL9GjYPHVctfMo3a9awN5JE6Qog5mKPN7Zp56crpfrrgWieNu",
  "key14": "55pAheU7JVc9qwnpPH6uB7aBCJv88NU9V7xRJLoSaV5MD7hbJGCMvQMe1EG8EqKJWimgmbFQfmXiMVf6PHSnWLnk",
  "key15": "5aosW8HCkPyPHNsWMzkD8WyDpiNBC8Eq69L9oG9krdx1cdCBhYY7N7153BG4EMJte5kVStc1Kn956HVuBkgvrUTm",
  "key16": "2ymgTPHZBAAZHgSBSf14t1ypfUtGKhEK5Fz2Df55NSTEeLjvDHNjRTJhUsVVi16gJUpgcH6jnVN2MS3NkB7Yexqv",
  "key17": "yJU1zH3yPzxRrZi5FknGWD8c6HZeDsWB3WdTVPNMmCCnZiPFe9EQ4WVxABgXYMd31WuJVbRR6Hqukc2wg1kDgfq",
  "key18": "5t1w7X2KgxXtx1mBXE3igUWtEYyVZoArMDNHrNFzZedjUf9HXHp93YxXGCsD33pXqgc32RgjsqX3tX1Djse2dRd6",
  "key19": "28ysVJ8PBUykz8X4Fy2sfKBmt6nSbjeWnrB2H943kiGLYwqMBWtg6e2Jka3mgaqLnEj1ypbDsZr4edFUVN3M1Dcg",
  "key20": "5HWwRtfwpEY6FdgeCnajAsip2fw48Gw9EUahy1G2aNVvWRueodjtqZNwQC7jyda9e4z63ZVTgxKiXayb7Zyh4ue5",
  "key21": "3JzoYiGSFaW8mrd3bTcbWFYD8C9kUqsKjyeoMqBGzzbyHVwepY3YyFwi6Q6db38cUzu4MxS3WRxhAn4ujK9Cdtk2",
  "key22": "4VNVauLadHcSxjgzQxfrDzXddWGtyfm6Ctj9baPz5zZqxvDCQ3Zat2PFnD78js5fhjgbfvVL6ro5T6fQ13fYpjvb",
  "key23": "2YVu22ajRLe5ZBopcATVQgkHTiz9v4ubzsu2w4Ddm1ctoRqEMtVtK9sq9iN4okizoFv4JeNd7ZH9XtHrKJhNrBsw",
  "key24": "57EBEqYxuKQN3wmXLCadS5ZUZfi2Sj2EYDwV8HwQqKZ7KrkUXZz1BCx2pXekKqz9bWeSUj5zto7D4BWpJnpTCamn",
  "key25": "4DUwuVCh6LfjDMq13cC8JjCo67uyMFaKt8pFpFb7oQoVMsATAb496DdqdEHNSqzGpBBnph6a4JRX5RSssj4Vzhrm",
  "key26": "3d8MAs8aWZRKfYoFb6wSGgdN2vmkTjVmro3JxgEEzYi6sqSgvQbagfuYQT2Z2GhRi5eVbFC8EYhaPDJJ6xJx9SS1",
  "key27": "3zWavsUowUpuQBais5PUkNEW8vNK5kQ5NXM8cGCQjNAcuGVDWoZofctCAgayXj5mq5bXcjyyBNNo7HnZLNWxzpZK",
  "key28": "2v9fKtrVTa8QNfYjMAyKSEt6AZ5dv2iURM41se9reSfwWyYFXjfo5GdhS7YsTXnBJYNYAtf8TDAmChiTCXuMaB4V",
  "key29": "5m4BU44RbZmiAoKWxDJEUnGmVP7ZQYS7maqxUrxPe6VswmVeA4aqpbMBKez5LUWVxfBsnMZXi2fYS2qXDmCyra2y",
  "key30": "QzFmonwyRdxg9puQvR8if9bqnko6ccBFvAMdtpecHkZZn5wEBCNc7Sb9BG21rNATWJg6CNjc7BkYjLSHm3BMJYA",
  "key31": "2WBGAJrbgDxqzH4QHDDmQSxDbt2f2BpsshguSmsYZCoSfyRy6ZbwRqhW1eSdrALdifLknyuKkLKwAxjaW3uEUswC",
  "key32": "2gDkAV6DnFHEbfQKyXunrXaXFqNP8VxPMUrcL27af7WZVVLUtfDrrqZSmCXvE5Uy6AbBcVRFE2YxSA2uszbYiBdV",
  "key33": "tbRwexC7qdeEPh42C2TPX2LYCg5h1J6n9629a817r8nzzFoZm7ifbXBs28mSYLgUM8Z11DKAtg9aMN6bkRrThnJ",
  "key34": "4ZCWJcEXuGNsdeZjqFrkf5mMK47YCEUauuq32kwPznZZLaVeY2Nrcfu3B9Lst1eeJ2Fh68w1eRV3hcVse2vb5obi",
  "key35": "4ky2GkGoZ3eTdPMK19VhNKFnttWRExRs6CjTzmvuh8cj8hufCQWMqhjA5vZmxpfubKxTDvBMkHaxWRFYc4Mbthfy",
  "key36": "AVAuzRsBDsaEwa7z2jmAjaEgP8MLnJdDHppmZAN2veVYQ8EB3DUJpbMM9PYVbSJbYvZyyKywdzW3nWXWcB1rtbH",
  "key37": "5op7pjwEomyCaxDhBiwvbjQtTXJFyY8JGE7Sv99zniQXnXkrM3jHBfPB87gorJwgYamvzo7iNqf5dQM2pg36PyBm",
  "key38": "4Ea16eM137mDC21QBvnbQHoyypP56DFYevscnedZkPwJHn3AiDAB1wVVhxgFfLTsYKmr8ePwn4rR4htSqbSbYEjR",
  "key39": "3wwXGaWwr2HrX6Qhz3MsyTLXen2sSCpHMacf1Bo5cSyCmiEpfm6WUWQqmHG9rggGQKeYaK94XZAbmkgAMkwffW9H",
  "key40": "64z44zsfux4VuZ1PihJx4nW93MoedC5ighZEvBCUZtDNu4AuwgHSv5cDSZMg1hy2RMdv9yfvuYRFitff7r8fPQUn",
  "key41": "3ucRqx7bTmRHV1izMjJCRhaK9tAmnoYtPjDgVWR1hxEsyDukCK7UCUqFrr4hHwrgNx9mrj18U6c5mv5FpsgUbhA",
  "key42": "xBAarrUrpGzZidG21sGY2Msv4P5PURbdEgSGS3WjXcRMzT6He6yuKV64LmnPu1oxJiursEF4R4ziovHWrFBzmDp"
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

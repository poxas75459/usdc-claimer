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
    "7oHh2gehpU8PXSbfD4jY9Z8zqVzTzjbCmRHBf3W453vWzJBfi1qsMS4Y9YVPnpBExWYaRXHCZRgnCNhvJWBiZ86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v5xBHG13JBHYBda8iBf7zMZfhNs8roKJnfDbmMZwrZcBc8z6Ca2RcCAzkK4786dK3ZnSUNFpJtg25f2gASJyAPb",
  "key1": "VC3TiWqDFKWtEKkDBhsfXADrTy2EjBKktcUN56a5MmCcX7TdKe6yiomwRdgXfJhq7PyHwkFoNAsTW36hbmWdUon",
  "key2": "2VhPJPVBvbiWPVU6Jw76RbWHqQjghXAijPACrsMaJ9iwCvmUBHPhNvDDDxkt4YVPndxpt9dTHEx7fxNub8Fo4GH5",
  "key3": "63iBzgMDK7LimkRSWCuQqVCG32RxXJunJfNqd75EXcVcyFm4Xhm4qog58EZVwD5qYP5V2fBXptLuzwLcFLMJP1Aa",
  "key4": "4nyaeoo7twRTyQ7wpmHCqSv3R7WzBAig2uzkykeeVGrhguFvPtMTJPNDaLMy8xYVCyKamZ5bCiu4s5kehibiu8FG",
  "key5": "4PC4p5Q6JeMVNJbYmi2qtG1QLHrR3L6asxnN6MRjAmoRBhvWxoGTa4BF6SYEVqyRM1WBtoTeegD5LcvQwFfT7bWA",
  "key6": "dr9ffUK9zatdKfZq8AJVDi7m8zjhPCoTxpbHK7axRbmb83UQh1DJSFLEGDU3YTyrpZARp5pFaRh7GPXvx2GRtmb",
  "key7": "2aW2RWTEwsuoPVZtugWBsw9So45oX1Hrsp348tGVzrq3wRA2i2xfi4s7sg8uktQ8bFMKr5GqVaKsGmxMq1w3n1LW",
  "key8": "4qy9YRpnPvCVp6JctwWFVq5n5jTWNiwgQqgqC9f4uAjo4TdPJsAjSb8E5y78JrzZ4grPwYtVv1eLcPuabrcysSpX",
  "key9": "5BVhKXc9yqwYvStCJSdXHWdkNvyEAqJCTMBQpiBJdAvpYbxmaB9WD315UAyoavyjAwHTDUBLhTPRvhgjFEp6sU2U",
  "key10": "5QGdZL7t57nvKD2jULSjebJ6C3ZMpTKofTz84etnPBcPDBP7qNT8kq94DrNUcBtJUGtBGnGRZ8YbtMRAFwXS4xgm",
  "key11": "2vXk8wzChD2vyEc6zvA1aXTdJbwGSL9ggHWDCMERSiqS8mwqto7SiAiqXfug8ki2QV4fomUtyGNEp4nEPiurCfpo",
  "key12": "4wwgKxUyMMP61QLk3WAYvEEeZLDZmwbcXwz95UoKbq5DSnTeSfgW8fa28v9WSaAxmSBv2eucTXC8z9N4mXGSjNzR",
  "key13": "v1uTW5TBXaGCnix76Pw3UDBBra2i5ngGg8rbBxFksReVLCWohjJK4iphLeWmyXy41piXdP45Kg4hBc8Ug7qW59F",
  "key14": "5uL2DmwJ3rwZYoBe78FsS9HDPFKPGPLkDAyQDSaQsYp2oDvhApNFMwT3fz9v3aMqhe1vY1hEWzMVj4u33q9MYCak",
  "key15": "5pywTqrTZBC7EY3k1mmoKwqsdPSBwFkqnV4Crk9SEuafyHgeZ95BWxfgLzhjeNd5YxqivEWXMmiUQMCQbkcbR41S",
  "key16": "4ofcJkuLQH4aCoKwbA9r6H9Cgiaixo85TdEjLNSCyKZXaeK1H17H7d9UjT55ZpfVNXHpYbwUioLsuLRHFEsGtgHb",
  "key17": "37Gm2PVtV33T9zE6D5T1FdsQhTGuYFaRK37Vi6eB62Y24nxM8hY9RTqYzcDVgTKsNyRHWHfzmMbnpfuzNA2j8m8T",
  "key18": "3Ux47D4yjtKyooXncn4Lm3BRLa8K3ikLNG4yhNh84zTU5N6PqCH51Nyx1itX1HwiRvJV1Nm2BP5fP32zjJdYRoL4",
  "key19": "57XJMQjxq82EPCdibBSrZu5iykWSxoirU4Tn4X3wnHktnk19SreSYCjhANoSZoeM7CHgi5s8u3mYgmvzSzuswuXn",
  "key20": "4Nj6VYrxy3mCdZPSP39gGPJ6mGn4R3P8VAqg7ee2gu2qELKwWLD4ZGwYdiQibxv5uNWBWfn9CMPA3Xs3VyPwVk3G",
  "key21": "4kkKe59mK7dki62hnikn2JY29KJnhVuQC4v72nLq4Y7wCnRpi25C1mx2qAWEGabKD3BKN7jdkREeRmk3BWk1ym64",
  "key22": "5UqrXaJqzuVvnnXy3xCaN3kqt7NnZdTkbRJhsGdZe8i6ezVpFHbVWAewTRH8SdZvJfu2NhUac4udeq9GWSGFqsQP",
  "key23": "5RgL1Z3bZ3S8rWi2Uw9QW25Yzc4ovqBeuVi8Kv8j2qscLRnrthTZ815V3SDqPw7WrJBhgNVpHF3NPW1Z9Su4GDBd",
  "key24": "32tYoGQwgCH2eZ98ocZnfM2wV4CQwpdRgzN8tssDJ5Qb7uqtPYok1aCt3S6DGFHH6zrb1awQWJ6GeaxG2hJVimXq",
  "key25": "JjQ26PusqWZfAdqtFwGBkN6jXJVY9AeCHManPNqL5wo9pW9iizyE3xs8QAvB9Pu3atDEdRuCHeGUkWHUcorzu1K",
  "key26": "4NzMhQwnxrK6ET4En4mkdGTeUhWjM1QNCbAKkVbKbUPJ4ZmfJUnzATLH7kGxGinwnVBYavFyikBPp6pAmEmqwQaZ",
  "key27": "5Y4EVqfBRJHbtpsNrPbEVxe4PACV5VFmy3Rbq6kMfAjYcYaEMztypNC17teNREj2oGBBTaKA7Z9vDgDpktzLwLh1",
  "key28": "4a28Fm2M8PxnFuNf3vCjp3xtzRihvfdEdbSss6C9mku5kphnbe9VpUyEXkBSB81breJhCWmsDL7CTFxeAZBoeyMq",
  "key29": "Zub7cCoAQwiZvN8wWCwzKZ9kSmtVDwFYaKBQ9tatYUMV1wwuShjARJbBL4jM23pC7DtzfgLbZ1Z8dsw7UzhJ7fA",
  "key30": "AfFcKdxAskKaByfwk3QaMxFfewHKmjJEfUMeviKLBaQN5tSmRwbQ7XmaAzvF8mzJPvCak6dLEUFn7Q6qmkGus8n",
  "key31": "EuFG5D3RosDE234t4DTwt4MHgpt8MzBcuDc4KfygXQGa9m6SLR3cEkgWf5sqmsvzUaGQi75ibWedE2Cy97smPTY",
  "key32": "2VLnnsarK8h5mXX8HPWWRBxaDPkJ2UaYqpsBwJ5TzNV87cUVa8Eo6RyRzjxx53cgb9j9avVBkezfTj9mKD8FPk8o",
  "key33": "5KWBHnQFnanfvGTjzYaESiFX6WSQwQr6Qegtiz7sqUddbyDwXQff4ngLHaxruZuf9EtCDgM5AMHMUpMt1BXUcT6n",
  "key34": "2qKnVgdcBNf3mhEAutCUyrF7fV3hCV37x5tNC17BGNN3CANPJ7p7bDrFqMmeNy3VR5PhXSUdKF6BijuxWvG9rM3o",
  "key35": "3Xq874QpjuUxK8zeoAAekR3H9t7KV5gy1Pa1JV9pdQSKVNhPAdLRrzGVRi9kfwbMxQxdSNwEGY7woBPWtgh4eKvs",
  "key36": "4rFSknWAf7iqzFhDcVHHC1bwGTkdoUTwkSpL69QPPmg75Ghn8jS2NbQZTh8AfbfofVaCYutf2pF2txfX3YJjKcCg",
  "key37": "58p6n3C2BaW6rVR52vrJJ6fcq4ghobANjBhUxXsDxh6PXE5H1SWT8jXQrJ8zUMCVkSGoUCxAa8o7Vsa5AvftNKf5",
  "key38": "2yDTPHghmEQzZ51o4phhRRJJofitsBozAouUhYwCQXy8ZziqhVnjJF7oAcmDxWeGeLDunisXNyEMgUwKFdnuzGAB",
  "key39": "nzCqfeWwVt8ErvWz4hUi2EhuoszgHFTRrBq5gTte7nHX8GjJinPcBhan6rnsbjeV824s6vQzfuSbryAH9TFmHML",
  "key40": "2fQKDHknAMwuj1nwGrdbo5rJW7v6SkSWfu6hqGFCK1dVPG5AcLLz3ZZPGLuA3bqVysWfiYr4N4SeN73HfTGRCBu9",
  "key41": "5cr5TuVwi4rVr4TZGu9Da8ZPoiKCQ1zu41dnek8JA45j3ovBJTkyfhV7Tzf4zHrfiDyZQNCFzPKjvBdcogkjPqrS",
  "key42": "38CAaShboiNYTbaCZbBwz7HiSsHD7sFZivjX1mwCfg76i8mzQ4nRmdhBtvKAJ33wci41Em4SGLszfYtNoy9DQHKY",
  "key43": "3maMEG4qqMHJfZPoux48TVnYip2iCZQA2s7t5ZdHC2BnJeGeUtRciyHcbynCGDPpJ7bvdHoLjdH8GDGZwXg9pHwa",
  "key44": "2dHCc5A6pwDXQxVgHTiMrj6JLXpwy3MpVKPDaKFxsJN4qcM5nuJ3SQz98Qfwe9k6PiPpdWH3Fdd6JeMBPVpp2o6z",
  "key45": "4FpQW1N1Q7GASEUzLL4MaNtRFSWgCQDsDW2UCiz3f8LrXMgDw83Fe35hy97HJpjKydqojqGUUdMBxo5UKdPQ9yv",
  "key46": "2VumYRHemS4iM6BsV9PSCZMzwmc1Kj3SKCiAR5W9g59LEsDfGiXqK1JMdSBQgV7bLBoJtDX4k3pqRXgPBQHCCyp4",
  "key47": "5K3hnkAz2oPpm1LVTnTZyGeDKr4pGdDmpbtWxpt6S6eZFT9rR1WMpU2oaKuQV1zdw2hX3JLcvRh4wNpMYuGumNTs",
  "key48": "5ETmsP741VwK7K27T1uUgGgp8SsJ5PL17BsKUj1tdhKvmR5FwgQBcMuV2PeXQBuJ2S1sRUigYA6fUMTVkUp39HjN",
  "key49": "5ukCFws1VJPRs3NPjMWwH9BFoFyd1XLmYPdNpc5JJJvgPk2mDDozmVyEt7KKaLz3XRj2qV6ytg9WKy6NaQP9P8QS"
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

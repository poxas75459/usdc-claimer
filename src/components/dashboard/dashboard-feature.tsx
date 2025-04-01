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
    "ET4fsgHsoZCaRpQeYq4WMKUcEpSBL5LcHZH2XFshFZqMwZC8aBM94HWcpaLgmyDptwndwGsQ1rTuU4iGMmePt9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcfuY5u2LhwGnreMmHDSjD2nLRNewm3Scs61t743cLizzhsFD9yicYpfBmeHzVqTaHmoyMryTTJSSRpxzEQ5kJp",
  "key1": "52gFtWW9baaoi4G9vmrjiudpgeCKBETNYjyL1roHneXy5ekcC9Hx5fMBbnDCEVQYZFyr2mm2UCHzNCHzhvonogue",
  "key2": "3iHtWqdkKshB5QShSqHKk2TaNjZD8Awf4WKTHFuRMRLKWWXTRLPsVfqfo2pw9jDBRrKUA9QbiWEoWv5R9ZfEARoM",
  "key3": "5K95xNtcXBcaoZJFbXPxzRYjjJ5qsBd7RrXfwpc1LoagdovGwrQkMYiosZ3BRFmS7E27k6rBfCoad3BVGgpWh4We",
  "key4": "3PVVDu8CBuaBRWTB2CiXxdrLKduzAHPqU5zPwTnFVbPJE9Awoxzs2abrQyFKy4ntodwmuKtJQacJifgsYcfDt7RE",
  "key5": "3YmNBRH5hqjpWEcjsUPhXNCYtthWcE54g42n17pi8JGzg3KBiKnSVBYvPrBDn67PbZbPma6cREboVm7gGVzvDZDX",
  "key6": "4eL6yLaxxp2XiMHSFiA7HiwvwnWioCdRWXKzd22AJJybTo9F7vi1XP6GzJUGytJQQQyNKZCSUTMwukCPbYiFf7Lf",
  "key7": "2gYy9XSbey4q7iiC9TweSCNPkRcuwmSdw7xNcdoJtPj7tYkQk5JQcfHzpsD6LazKvECN3YACLFRX1rXoX5bbRmgY",
  "key8": "5bTaEg9gY4uZeE5jmGAWQejoM81pZHJJQQWSVKcDuunLFqxKNbTn1QHHt2TzmSh3ZYL3rZ8YddnB9QD85s6Rv4L3",
  "key9": "5PBXTudRHnJ6xeMYk1JhTgw5RB7GogyJvTZfggyYmW4iBo4YyrLVniMPDtDUACFzemE2X8TH8QmHYki3BNzmdQtJ",
  "key10": "5tEj5FLNt1PPwEbWAwDnPu5fqFsXvAtiKA4WaQE3HZBjCiUozyQPcMHR6Hts5Yk4etAD5MoFEu25Wt8LxJG9Mzky",
  "key11": "29GHCF7rLq8rZpSZFwYLvK2xrwSSLv89xstUdG3txPgGe1WBhFDhEjSW78z5aTKuiQTUrT2NyZsePJyzmY8ytHb7",
  "key12": "2wT2kuNzWuQ1R1BLsVk92ycK2R24otq6nw456J8VJvmuqYeaE7S9UmUN4UA7biHZj3ccxjwfsj88iG9j1rfPgN8F",
  "key13": "3u6eKTTjCV59H4hqZTb7oCWm8mFx7Qc2Kdjb7XepN4GwXXRB1TmhuM4b5U2SRAa5njJiSPxUiwg5uWixNWofouMC",
  "key14": "3cV1NXtyjheMWavp7LjfQHAzMz1xHhTYGBgGDurY9kTBnc6QnLMn4TBtkhh4tXiL8uNNuyX2brLmRc4TADZMb13y",
  "key15": "28wgdMKAPuNAqmGk558rBCvzgaqMeMNefAtcWHz7gd5R9cM2XNTePp6VoAEZ11zMRTdgG7UitBPn52qwTEnzZRjz",
  "key16": "5aHtYZDjXBQYyKQYT7sJZXbnMsnnvNbS1PQDKAxACweipigXeskC5zMnTZe1crTGghfJuKaA9HubUYBjEx1dASc6",
  "key17": "tq92EAruSjQGyxaFxHXvahXAMmPyf9ZqUB77k7BN9RXcKLsAYkf73S7gZET9GuW5dm3CfpnboJk7NnBnxk5RyGK",
  "key18": "4NiXjEXm8TeLRX9UQGZGfpWYrEGrKhARAx7zg7EcuV5GiWgMdsZEn4Bq6fLNHyvzEXcKRhNVmNjMbeH3S5CaKSFD",
  "key19": "25CS2Dn5QX5zqVunZcSu2e2Dm9mYjmn7RMz4L3sAymc6XruZ41Ctp4pdoF78DwvSc4K5gDzQMffzA71mwvovNQVC",
  "key20": "3SQwvSEpGMzzZiz4YWmUqVbx7XGtRVd1ww4pCbDH11RNvPQAryuYZSxySVomLmi8Vhmw8aHxEmKUf6rSXd47WJYr",
  "key21": "4NH4dPzjKS4BGfdzreAWt8raQhLsJnGvFvCeLn1bz36wvva3hzLdzcNH4zmJd4UuvDCow7EjBU2n1hH32kLherVW",
  "key22": "3SyDkPJ82j3sf8PhspRejhW4MtdPHC6Ta1DaLNbHWbiZuw1vUzZ2FDncEbTc5wWJFGbE2qg5NJAdBpSriLB5V8Gn",
  "key23": "4Yt55EF9fzJDVmU6sYeSr1ZCbhCVLGRzx7bq5xCAmBzDHKRfgKdnpxorB5XJ1wF7Rqbstvxr5fWLGnPrgduMtV3V",
  "key24": "2yuc9JxDa9jvVryXUo1fN1b7uQi3XSxhjVbSpH8Hd6T7impWJ59ZjPU9NN2Q1mEQPN13GpJjGzqK7aSz8N7audj1",
  "key25": "2Gtf1VdVuPnpujMCrYRh6JLqmhRnZAwa1dPBQ4JwGdv1zkoitU5HBecDfaQ2xL3BXWqR35YmSyakB8igMqXd16fG",
  "key26": "2x9mLqByZC4p5qDKnsLM67CpRfbun6jrbEt7Ts1oQtdrowCDCk9kWjsYPMe4PzZMxXgoNixJDuCzASBcWnDgDo5S",
  "key27": "47A6GRHp4yEXsMA8FsMsmARpm7ji4Z2yanrDeCQMooUCfp5HAvBpgAc3Zz8WZVDf7GL8CKDjnQmtbi93bKKKzMba",
  "key28": "LPVmt2eRUBL8ZiRQnqJJeqMinVH4YM94RNceMSkPhcFffrnsRuvh68gtYfcSyjGm4UDYEJuGkofmUYmGMVUczCD",
  "key29": "rkGjAnDWxzannmgr9qb78Qh4jVL4tJijmXD5YuVMYuLtS25b95tikE7tdtE28pPFpzQvfMTZN9BKVeEJkEGjiLp",
  "key30": "4KvjnGMkcUc1PrLyJPdpctdcdNFUpydDGjwicus9C7ztpUCjC78v5NCxeRGHUrENQX7SMBBhY3k8s9fWZTC8ZdU9",
  "key31": "4W97HxRebSE7yZkBZaZVd3yzUmQx1FXZVbromfE9WRf66oy4NJ7SC72EbdvzuzwmGu7EAKPg7ZskFsKSKonQYYe2",
  "key32": "4XtGVS8JT3cDVUGRHyg3K59eGG6JptdCqThpEbjuz5pvj56KfEWquhK4NYC7WWPaRdCNjmq7GYJXFY1JaAHA3BwX"
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

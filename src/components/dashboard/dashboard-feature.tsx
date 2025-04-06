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
    "46btrdm8fqXTM4CtFusGZYiDLoJfwjZVSxogvUBjaKH7UMUpRx5rXUHi5Hhv5GQ3TpdhPip9iST7Df2ejn9anFCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FJHALFx8fd8KtMuv7ww49SjVf8ptPtYkYXzEK2t4XzxdY5szkenZAgjDjX8wPHyh7i3XFGS7LaDmjej2pnKtpsd",
  "key1": "4xJvSNnP8ApgwU7Vehd8siucjq3gRfBYJ95RFDmq9br9KKQ1wFkh3hEB3TrKuFetqzmEXGcefqerDw2kc2ua2peP",
  "key2": "veDPRJh9ECobbnMXDbsVYE5vKAJiouAqz54xqdjac7poL9NpghU5Maip5bZp7GD5c7VLM6U9ZRjXbkDCPQiUo14",
  "key3": "1rwKXFxVGESAfZG6c8PLy4wFoVuGXJQ5t5fiFeeKoyLWhaj3YWUHG8CKtQR44UggyRzedKsGb2XuHoJHHVdpRvf",
  "key4": "4FMM4eTScVrxeH3MgwU1dwQttepZrBkqsXsm6WvV33PJzq46wEeKkfKbUQmGFwGLWpamB8svLPwLvQzYMAfqumgm",
  "key5": "5dyR1LY47b6H3571cwYyWtw5yVQtg2QjQgpQrWXcU7CkZWCS9VdLP88GBEKrbK7qkDkPJAkqADrrKAZPkfxmCdBc",
  "key6": "5e2TDTtDT3qiGkDFpkqhZ6X15Dw1bHsQcnTKKZznBqkFn3ZnkpXU6coftfN2M8kGSQSHX22VXZee484gg3fa3cUF",
  "key7": "5BYCB6DiMXM6HB8rUMR93APfbnBhmkqektcSFY4LVmbMfXbtKFizcDwRM4ScnmUfVnsAYvkHa22LwY2J1vUQhdJD",
  "key8": "4gFSfvrzVCAG3egCAZ2xRBgGNHppxLGPBanT2EuCFiMo2smMhzvmh2u9ki1WzQTsaS3heCtrNykRV4eReENd2RzY",
  "key9": "3AjrRjXNdgXXyFP4ESSbpWnyiStH1zr7mr2DeX7FL58YyiJz9rGAX5PZPh3jHLEx2aGs554yGc4ek87JTZNQCzpA",
  "key10": "ZUznwF5wuFT8YUzKYWDA2U5Him9ktvt8q3qcqrCstAhiaHWe1ijoZyuJcmCaYnxxzWFpzV23fQRpL3yDRgixxur",
  "key11": "2ejR43CZpRvxiTkGXVUMEVZSAWC3ZV4CNJ4xyV4SWH4UifydDdVYPoiXiBjXgfPHmpjwtfMgDY4hmkaBdFXvYwpR",
  "key12": "29KZ5ecK7hEkexFLWRjE3cZhd8AYvy6Mpvk2tNq1Jx17tM5n6wJkdmhwG7R3ywa4a3TLLjZ8EwzERD7kfqkm8Ubp",
  "key13": "4YWBWwdz1RpPUFF7zDBJGysRQk2gGeK7rPGWmSj8hSJ33BGweSndmCZWbckhQvpc8BZBN2yNH9SLMQ8YDEkcvU1G",
  "key14": "66AG6Q3BtQ9vYM5GAfq8hfiGQcDYwB1cdMdCFYpuGRFQ5TuxwaVjVZHHafWHjcC6uJfAYKsqojp5V78hQjfxaqbE",
  "key15": "3CgDtJsEnFn1Y6mxFWnoX5qyc9F13Z3pZu4rzWnLsHbposowHFE9iLYzgpjGF8NVGFNsMMYsU4xXy5JVwcEiv9LH",
  "key16": "4CHh7tcWo9EyFETeaFNkbavn9AscrjgrSbZaGetMxMkQksA5j1WKPSd643AjWMHtnH4barP3PkxGxbE9GT5gCNLi",
  "key17": "3X4KjJWuGg1LrS7GdznH6g1Wyt2VbR7VuKwkBZpFoDUUZvoSKRFiQZWHS2urL5mCfuqgzbENrcPw4sdTcvVJFhWg",
  "key18": "3F2FeKy1SjFuKUZ7Hka8jLGmYmxZy4yM1xmPQ3hZtmgr1hGSPhBsbi5WhJRAFgEwFZozfVoXg35AYSk6YWcx7dZP",
  "key19": "63XyxSjdWhsCud9jVVRTtCanmq7wvd4pWi1UPTEyP8ZJWNsMVXUH2ruSbtikbWbEpWUziiQW1yDvWsy1peHDfN41",
  "key20": "3yFRVmEEEKCT6mZsNH8KRQrFfnfV1a2pMuPGohQC6RTp5nTuhwbAznbGgWagWPoWyvizarv5eXDWVmbknNtqyjFM",
  "key21": "cqL2Z7kmyRW1Z6RUvRVfm9NYPsLVvm4dxeHo8vsXy2ZkfN7RUpuUgR18CquCwnD2r2qtMqFnxsALhWdu18cpWrw",
  "key22": "4kc6t7iRG3oRsJyxt1vvc7PV9aznEU8N9MdZvUQTVrQsaCgfztYjZQKQyEAX1EWniLiYQkyx2N7ScqVaSA7KA5eW",
  "key23": "EvtYSTokAgSq5yS9sz6V4yN1QSWpaEPVVYTbA9FJ6BU4mdeESNDvSiomtm7Y7uDen5uvry53hP5gCe5RmwXqGLv",
  "key24": "5U8qRJZGJGWMteZ3ow9oUhQcrNDGZQYwqCt7vhQo9Xvdt8BZN4DGTzD8X8Rz3xBumowGxfpq3MMrVzffVMJ67Vme",
  "key25": "3mP1QuD3smmot3F3w8wjBKXwLwvnw9DGK1n3Ao78DyDTdJuUJRZaxjYm5QHNekBtNquv76Epvq1wetsPT71umdFH",
  "key26": "9P41b4KA9DwAxDXCi8UezTYGbVMWj4dhUN3UZUb5Mtp6MPvggprgGyTHX4enBVFkGKhCfK6EvhmU2ERrThczeRG",
  "key27": "4aJLqJNqrutkhoQLasZghGZztufSLq6heB6Dddpvr7vi11MsYeUjXK2Pbw6eC9ayoyUYBYUd5HHktjqWvqFfGhpr",
  "key28": "5SUK8NBKP1i78EknuvBBo9BB3Cc1uoeHS3Cc8hyRnqsxcM2mKw2L6dXdUgXsoMXVGkMjiizvNRfRMK1Lyen91Xyb",
  "key29": "2KG41wyTmcxvFXiSS3z8mDmjbHi8V9ukDNVBp9RVAWcJqfnE3AxiP7YGZo5SwaJ6PGmh445AauRq3CtkFdSifxE6",
  "key30": "21R7QsHTH56sj3nBQE2Hw5v4tadkbm68aTks5EdRpr2mGCxY3WfMyvFBTmtN5aJ1weu1dK2BvEFfCyGBKSX5rg4H",
  "key31": "2icXRVQjZV2eJWsdoEik9cMByfykYXNS7M5AYoCuKCSKkLAxzJ4YNFy3pPYmJSsJFmohXTXq5ueMPVS8jPm8Z8tL",
  "key32": "Tiz5u3CbfryLYAp5f4pmQmyRQTFyVxHKufrvRY4ozmWAownd6dU2pzx7yMHXKyfHB9W3MNRnPnaXHyYpNsw7zyA",
  "key33": "329ka7cFsgDpF7xZFQqSfn4AYDjM3CS5CZ5eYpdaRpK6V9rN4MRovX7qmmBvLJwAH46vJHymMW3bnYTvhZbeiR4y",
  "key34": "3vHPXmP3hnawm83agpSTxj4CsvtXPLYmxLHwk73sJVzS1ntT95FQmWymoStcVuqB6NJqio6y7UhEdZovd1vK8p4S",
  "key35": "NESe39Qi8gvsTzqvaD5Depju93LDc1Me732C2mMCofP2bcXfsoFUHuJRFUfCHrjXFmV3vJczZLpDMfZUbBvri7z"
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

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
    "4sfSavb2scHNJSrwfvmJTj3EhmPganKEjySg4kefpEXkXyHsUJEohDFK5idqSrNyDK3FckKnaRygToaFBTHN7PQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qRu2eAJMNzhQ6wqPykwPvxRKj87F5vfFxy3NEuGXPcnvMtZDGPtVvu9Frjxbuvn34DrvofyyRECR692qUH2NCJo",
  "key1": "4BbBk5p41aMAMEgTyM4BukRhtVssctHoTTAi47de554Pa237nzgtzoxw1CCFtAJVWrPXs8NRL2WSpj55QT6QT2uu",
  "key2": "ZuiUnuD7ZCs6a69kAagaYPbudW9avezC3w2HckMETnmRFJW52YxcEn4CPKhnXm55GB6Skg4QcLjaEKqEFRTrPC5",
  "key3": "2SVBqHQ1sKeCkN7rq4kpx4w8p1jjFLNacH7Z6HzBu9jRk6tbxUpxvmArHCqNBRvDGdGHj8E4WCkh2vd4B9MjLFhm",
  "key4": "3KVtWo8TYxv8pDa54ZxKdXNw9hivRfTiDgC2fsT481HvPNTNXTx77kmfTUvvpJXf6LchZSrarbwyXMdYwpF85f75",
  "key5": "tzi15pLhbD3yyKsHjnW89sAwKSr1wub94yA9RfhmuqRjifc2AK4pJA9V4ywFVWcgivbgz4y6yef1HeKqocuNjxt",
  "key6": "Vg7WqNNoezLg3Quy4iLxPiLYb9L9gotqvSPN5fqTogds8vVM4SCfBryxZHKsvziPC3vA1Pbap3yuMfhSaxYoWMZ",
  "key7": "2AoiKjDXn3gBVXWsjUz1NCJdWC1RMWg9QwSeGtNeUkUJBXhXy1PK2FgRkGW5hLDzufytCzbqQRDEyoFVWzXXo9AC",
  "key8": "5yBrbuUAWT6PCWekZ6EX3mdsifooPtiFLF1gtMbJwtc6zLwpysorr8EDiaF19M6sQw8SWvGqxCHh83vvhrDQbD5A",
  "key9": "2h1pMPJv78AggaHMHmsDFqgCWNKVTNMAJsrSjbweYUcUodKJfmToPZ8rt5aCCNem9hpatQ561X5GedVjLKfSuR7J",
  "key10": "JdL9ZBDki3MuYNtY73j7F3zhvf9m2CDuUBiKDC4YsNmCYAQjzDy5PdvhFrxjedaWzEWAzVmhkdcGLHDZJMGkbuu",
  "key11": "gxXFck4vwf89A13oiu9bkqB4pggz7Nr8EH4cKE85EMc5RXbBCuB5YSzdHZxoDNYxB2bXg6bqBDLRziLC83BjD8M",
  "key12": "5EwNc3shKo2iCNtRbm119RbZ1CZHdFrA1aT6rbpBdmx5bfcFjXgL1Fv5RmfW4R4PWhgvVM8WiybxLZ9LQNbPYyVQ",
  "key13": "4nSP3d6V3ENquENKqkuxTf4QHNuBH8ognAdNDF1nT5HJxN4tfnFnhMicbaQDkeLkvFN2QmEbXfnZ5tS7aPHmuE1E",
  "key14": "2x21cXjP7crM9bdtViu2dPR9p7p4NiKjC5njgiphiToMqsqobXBGb5LgTJi4AQZhdHJWY8gVFpUideBrgpXjpuUq",
  "key15": "29K759zhqY43mAkF8rzyrJrU9PAjxrcE2xW92Ub3swTZauzXVAE36njdG15qcxQw3nWFYXHzNGp22qNoxAfQDKy1",
  "key16": "3WueCvanyDZKkszFtSiRsMbrDEf8TyetbszAUqKMBxuizVkEdBdM2MzAd92X7KAtqGfz6JxTsoQDnqUi6Xefa2zY",
  "key17": "5sAu24ouywKhdiHdoQcC9wpqDXA7kdodwGphkwa2NcYYokJRD2HB8RAqRrKosmtokJ7k8jGKwkg6SeUAnCp9RvkL",
  "key18": "4WgaSB6dUFY2vCNGnUPwx5PctAqoea7sakKRf65N2NH7pfDBzEDDeB2yqGhGHbHvsatQi313xU7jaNqsAR2BSc3v",
  "key19": "3oDPGjvm1CBBBHkZ3iGMYABLAMgVqotnqBUC8bQt91LBaJHEBFAsZEWWYRbZdupUkUu24nDuf2SxYmzkAG1ynBFL",
  "key20": "3LoFJtheVc8htg23Yu9bozhWur2puHmnD9VpWBvRfaDXmtV1LYoVnciXt7L2LfMwm3NFL9tLAkC4K2BcgD7v5Z4Y",
  "key21": "32XBJ4v5aNxVQgmCxGmqa1t3trBzxw1ajwutMwXxENsyPoQCnh77Qp4auBxkVNA4J27JB5JUYzLfaAkHwrXBrdE5",
  "key22": "2M4y4b5CMVF9q2MRdQZZKaJKx75PVjCJRsQrS2bnkXhcPn6G7jtA7PLy5wMRSApCFijKNpHRSdc4yp7KkEFVoYNK",
  "key23": "WpfGUAAn3q3ZQSXBCYnakhBNUPxfE5PWpqhSM8kGQcTvD45g685Tg2QUvzEFLhZWFpyKDe1JQeh7f45rgKuwbH8",
  "key24": "Fm59xQHM9vXMV2VAn5i66K4AuxTcJDoMpV186TSdPj3UBSJiMsCZCKVavGXXHNaTvVkesM1LXbRwPpVgEoRLrfZ",
  "key25": "3uchg26FYrZCwK7of9cC2yCd8yr2qCNrKLHJSWDmEV6LTBnsuesyrn7CRhrrGQHCPhwoz95hxFVsTKXGxpZij2AT",
  "key26": "2Sj5gLa51xfdQUVJnQAjbwunhXUBmQ9E4i5kimwozE4SFgNrMp8LdVXuK7ASxGRDJ3Z3imprbXGVMY3krnDX9jAH",
  "key27": "2FKNRDZ7KyCTqNsf5Ztm2widnrzgD8UAvrePoW1YxBdw4fqV5nyyDCNATbApxHXL7bNURBKdBTHQ162QCfirMEXF",
  "key28": "WFf9oYyt726sChXjMhh7iC79JYXHEncZZ9eAh9nPNnVhXqre7iBVFrbV5oDtY3wPXQ6db1Ra2yvtpjjrfzAKd7Z",
  "key29": "rthq3zqZxLxmZxgypn41pQt27ZCztnH1sXJeD6LBLd81fJYmLKQSV2ScMRhJpa97uD2H7TyA1CU8zsxxAFUL76y",
  "key30": "4JVJ214NCCa66mbirrup1gUfnpwC3r2UahPN4Ee4HcXT2Wd3wRa8RmJqPqDNzWJRejcn47do64AfZkuqF6o3AA2c",
  "key31": "62eNw9CrKFTEidg6ahocbB9RZBLnEQukn1PrBzxZejpvoHegha8FFtsDGWMRmqh9Q12pmYwmJc9w4DGBouCJ89Cz",
  "key32": "ZyXhx426ociVGiNymiKn8ziRTSUGY9Cdodey7WNqWuWMoWh8A3kyzYaLrNuCdTp8EhoX9ju1nHxhNqWxM65jHx5",
  "key33": "3L3GFx2Ef9fURAamTij1KPs42cd22wVzMtUWBAj1EAfKEzktox3knDcDsVtvkH1TW9e9stdzkm3xu9Max1AKEKS1",
  "key34": "4UheLgyQWbwmxfRq97mwLLEqqNRJ6TG3rRhMYRyKXnhpfZmN7qM3RS3qde7LerAHsJWrknHU6HvERjsDoHRNxrfF",
  "key35": "tuo3rX6jCDyJimQVHhpWQHYwK6x2QE9L4ujTFPKXeZzKnPZcj8u3FKDuEMYZzhvToN5WM9wumfVZfJ3sZ8iY8jC"
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

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
    "5mxwdLjkinTysSJbcNFrk8WwVHJBtfUveit8Z8Aj2jX3knMk3An5Qhvz8zFtRt1f2HpYCJC67UykZc8VP5uUobkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xRxofdzeJXV4o27sgPtyBJNWieooy6phTkEKgY7GYAgW7Zrog6gSyA1CBZ6xvGSrwEFVTibjg4mHx5ER3WLx4ox",
  "key1": "5pyPnbycba6dKAq22BVVuarv9PEND1ofc8koL844NnxGdR225vEVov6HzeTEcjGgFkhKsYgnn9uvmwKEGfCaqrRK",
  "key2": "3KwkoqnxoAEPYxpK4ffwpxQqpm8UgfELSBjvCtXoEM7Z82wgtybETEdBqMRGYjSfzuAnPDdFQNN9bVvRFZz6WQZC",
  "key3": "2YKncxu2NeUSAJWGDvjy1jfWpQ3M4zxViFYh38YYPNns86aVU4gHJN6bfQjPPt4Pv7rCwqGbCay2HJCLmUb1N84V",
  "key4": "4H5YiFqfDZMm5TzMkz94S2f7ox7SRyTaHQqcJH8tPfGs8vCj7ejLhkiHQAfSC1CaZAXwxJ78659yqwqH1pyDjgoZ",
  "key5": "2kUZE4dv46FcaDxV2VoPnWiLHQR8oLZBhj7ewZ6t17EFTenRXG3Wn1RA2NERzJTubAPpqZxaN9uKapZRs7LmdRxi",
  "key6": "UMU6VpmZVUFHBMWx9AHg5NWNHuSnWUaoVVW2dXf36NX7m9Z18dLSKJzBq1ZpNArvnFcDGDCPe6FDZZouBVFBRXf",
  "key7": "4f5VhoufKqPZLwt3RTkGkexs9x9MfAgA4eqaLiFGG8ERGV8TbSmG6G16Qj6hReiX1TWG1UGhx9hRfXsb2ZCboAn3",
  "key8": "3yDWAce6xEc4SMPZMkyc9iuhDMDqUcMMotJr1862wwJ3FJDngjgW2LN5SzBYUnZS3FJutpf7W1DHLULBroxkmHMt",
  "key9": "26jNAYygedqC4whAeF8Mgjd174VkrYJbLHicE1YJiiRaFLfift6yDTLhLnxA37Vxy5yTLBv4sbjyvU48WRdU5Pue",
  "key10": "4Qvv9mkFYCrv1iLxnV4CXtagKuRSjVbPau78ZPWoCAAxRpgPDmGxPGdLWiyCnexhoNHumftiWX3j2YscYpd4c3vb",
  "key11": "3W4S19wE1eaJrMyDBaUHAjFs2GbPQFuHXb6iubfSrGj3LB1m4gzqgSKePCBAYRQRz75WdWyfawYG6t5yQsmBxj8T",
  "key12": "2DVshopR3CgbieCFFNCJzX6Ydw8AvXegqf4RjX1jnkbKEsrKugVzHvJ4zkKmsFk5872adjZ73ocMZ23e3Tb4MKvx",
  "key13": "zp9RG4wBSvvMTsH1trZGaAhJTh84ngqtRXLRBEgwFE6Dam9pr2qn3cEJetqasq1QbWZMP7KsN7qiWMsuDujaC7x",
  "key14": "2bwdmdcDP5Q1a4fxXSe2zzbd6t3Dm5aQGiNfRSSJFwAiEPvbQmFgaFvVc8ceGsXdGJpvfxXuFNs4SYZEtZM7nNGw",
  "key15": "59ctf5AdmfxeXacsiWTieUDMz4qo9pdBTB8T4HnAt1NxyDticcWiRuFyhjimyEMB2U4CNS5L1DGbRJ4QDZZ1JMNF",
  "key16": "nEf26BkTq5kY6fir9Uvw6thWXTmhzn13vA6eA1k5eRbJyNcp2thfUgneCmefoPfDFqsihRFx9yRL6b2Mf8CTjGL",
  "key17": "3R4y4T81e3JC5Zo43Ntdob3QjsA1JJCv6TPTfUBFunx9epVw8oacE2D1EbR5HfkRhrW1VyPTsMjBc7EfoEpETcCM",
  "key18": "HwaKnRDiVHKPR9RGBWtU6gDaT8zURfnLkn8ekpe3jHrXrnGLS9ZgWaJa5oxnUUWVt7qGffcStgN4omXaLepvxsL",
  "key19": "kF2uPBx3ET4SpuR32BFvoHAPnFomT6dFF3MZV5AViSBSMoKmi6J5FQTpewLwRX9nxdRi8sPcmsHsJAAULaGzzB4",
  "key20": "4229VARQp59MU2Bg8dQsKi1wj5odjDq5mHDMSshPqRDv3ew1bwXhaKF72FFeUpRrzmn2s9qKERFb9wkZHA7uqsc5",
  "key21": "ZuTncgZx6HdfTdqm4QDNztWbJ9srbb5gkD8iowdNpD9qYdQot7x5AYkDKHMMkBXqqVrUMRqr22HCDyFS8MkeTdT",
  "key22": "626K2nLa1s7F9w5TGeq4J8JHQutpWUze9ALaanuN44hu9iMtySZjQXy8Ndu7tsgV78iPkDxRrGivFUX2rNBL2yC9",
  "key23": "35A3kMLetCrQHAxdwkCgYL8UkozpQWn9s6WRxz7WyXK6ogXc7NNZPinLjdZckiLE3xLthSvjjk1arkhQquUcx1F9",
  "key24": "29wdLeDBSZ52qzkHHpswQjLbw2iuCRXbb5tre36wvzK11xbbTdTsac1wEQELERNhA5ZRf5bM1AiVF4GYr28G4nF6",
  "key25": "4hrBkmbuJrnBq1Wmf4paJx63r2SNLYdZdArdujrgBjYznwo5NJjcahfUqkPt3swfVwr7fqqrWpFpwnK7KYTECZDe",
  "key26": "63VWQH2XJbQKzuiTZZYQs3XDa5ncFFiRK1eQLgVQUvdTMeDfjTkCJA8sckHheeaLVc1AC6c3JfttStGjLZjb785P",
  "key27": "57vHuqVKh6m5GwPkPGVPYYHidckCCb5NuLkU9XbHzpV9zshtPQyeG1v7QGWTZfigUVtRibV8t8ob6xu6SsXJy7p9",
  "key28": "5mNPpGQUqbg4bEnX3Rs9auJWxWtqt3CpGr7EzYwiwghu1pdVBxhZDQaBuS9b6ymd1MV6QJ31pUDPN6NYu6BoSLBe",
  "key29": "311MiTGwHXkQDtvhPtLvJTs7cFiosxuRdcj2cZLY1T9GbtWkTf372VKtjNAGmu2iwnUwiBRZJSovSC54tvyCaacj",
  "key30": "5ma97yeadKjXQhMqYYrisogQx12PePN3VQviCoBob7mUcBLnUr2ntVsv9ZitYxu2SusjvLLMW6DYcL4HrNUbpdgt",
  "key31": "44jnGvDsuCmVcw47BwG7B4z4kFo5Eh2NZ3DtEtuGgCMNEa2soQjkJNQFzJErWHFVCnF5wkHpP34ibWWtNxYS8xic",
  "key32": "5yCJ8EZ5uAmZFy1CvVUbS4CSX86NfvNug81Hshj32hCJQpZ7vSXYGcRhWc8tehkz6445z464Kidvfhrnar2Aod7k",
  "key33": "57NAtTC7wzLiR29bhtnnUwUXWa662QdSU5dX23swsMEHiXuyU2FoDu4wRDTmDkjaz8iQFmqLJZq1Gyh88yUBfuK4",
  "key34": "2FuQ8DXkefZTCNuMAZ9iyistWTto1xaBrpi7mPonLUYckC4dRvPHUiHRxqqUErKgx4d18Fe3tWfviKnqCbhdLQS4",
  "key35": "3yDY3x14pV9hkshrk17YmNhqiMRY1yTqS44yiP4941HLLcWgT8pPm896Wp5yZNNgQwUYdx4Q9frn23i2dvq3ZMPM"
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

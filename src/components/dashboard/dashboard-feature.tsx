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
    "33PXtw2Z7z7neb68Ahu3gZe3YQfwxNyvMxeKt4Js48D48NTmCJAgnxhwzTVM21sDQW9qLm4ghbsaCFWWdRqXAyHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eApgJ9YRUX1fjdnaVC49xEFHpUQppiYW9Rk2XKmDggqjqmriLhqz3cbvDj3tHwM1pZpGTt6GLbmHZFMaccg37XE",
  "key1": "5FZHk843cs44AWSjmrCoxZadtCCbJzkxYpG3ZX7BQ7ZDnWd3TQdqipuC2uFSxducXfsqihNeCfPDv7cMZUmQDmmU",
  "key2": "ZyAY8yu89HuQbDQGcbnCTYCxMuBksZ56XLPdYmwKripcLwNcFAyzA9D3TkrKdFPfsTx4moZ2KnBSP8jTQuJSCgE",
  "key3": "3ZrPKWL3tXatBKs5ZeJiaVTHboX9tBPdQFUiVhki4uSqKW7jCzDTz29uLbGcX3j9vX1htobKH7JQGJMNma4Zxo4C",
  "key4": "3CMstUqPDJvp6Z7BuQetGgKeqqX5ZJmfEncAHoMHzYUELpNaapgCGyNJwjjujyVvFbzdWMxewB3DgvDKd1tS1A8N",
  "key5": "5Zb4iTHFAAVK7vQzMmLbc2BwwRJAsi9oU6nEC6PH63BPwH36nZXYzdjSqaVzMiNRx6PHWDiaG58zAUxow3fjmM3k",
  "key6": "d9yT1nYM9U3iqPmNtLDSYuWTs5G6SrgaoKaZCmUSdhpBGS76LJRyEGboCjEAVaGcgc2uyyPe8tjoiZvCUrta2EV",
  "key7": "1CQ16wNcNu6syLxrTUNscLKUGd7Nhtqi3vPipgYfWiTjRdFq749kBT1wj7rFw4nSki1TsEXK8htJXxAkoPUDKXH",
  "key8": "26fnR6WfQrDhJRrB1UNgcVk1uiBs6pZ4xN8aSUpHAo271nrCNTbHEfomLzxFKYg3mRokPAnTF64tBCgGv6gHcgnc",
  "key9": "2jUAUBMbhE5sSPTwRZagFMXqu9cF87Kxb9ednK79Je3ikn9okEUm6wabvhjSQVtkEuQ2LKgLSrcvSaVc6aBGPoVc",
  "key10": "5obbyzQhqAc8dUdjN9Vw7tUhy3mvDRxoHkbh2b9GiYkTxMbr2PqganF2jbCPj3REdWo2uj1YNu2CEx6BqpF2NCKv",
  "key11": "41ffcq8wFnuMmNX7tfkX1H15RT3UPAFAjYk5YyXnNZTD8egvjZmkimRkscUCRoB1DGX6R3o3FvwC6Rqo5mnAggDB",
  "key12": "22jP8sjtVrJiZmJ3xu4k9TcuSPZTo8ZhF5LHBw4gft2iVu1CsTnC7ur3ZHugkaRZi8W49pqDjhsuzanUFV83vMHG",
  "key13": "3txdKJRHjMmRjp9ewFhGUpHEijddQenbt6zJ9ArKZYAKwVq1TJoXvxbEme1hJxftVYdjsbMLDbf4BE4YwwpZ1zub",
  "key14": "nafPuhZF9TNGYbPywNkHC3YD7VbpAeZ2hVN2VcxBqzMuDZbgw41mZVDgyikMrw5NojeMfow5z81eYzfHsViHemk",
  "key15": "414HPS9DxQ2jnkbevB6BoywBzD1GZDBpujWYrUPcGnSW3eFS3kDDuFM2SHXCLfVJa7u8qK7XmCd9G9bskwFaYGtg",
  "key16": "2V3eSjECifJL441eSVDB3E8fyX8E9UA3Ev6kiac5Y3KeujLHpha54CjaUfbPm7bgSp4ifeDPErpVeLDMywNQRGQJ",
  "key17": "2XEoA99DneqVQjAJPXDGiedP5AVpt48E3crRsU6jodhfhiRWx8uy6qJZ6vV9mmwWAv7eirKByLqphunJ6SvY6e4M",
  "key18": "3u3SWWxRpLb6zW7VrPFYfgrP1X6cwbeQ5RUiE2njasqSVyRjxEFGqSrzu2rBn731PYPYzLHDcFWA6E28M3EYysoM",
  "key19": "3vFYFvbj9zUNrXHAaViecH6ATd6evqqFoSQsgvhhBggZZP9NCZNjjhazrWWym21KfpNBsD4thYz6LVYC1ZVFH2yL",
  "key20": "3ic2XVp2cTZjM4HmCQH7HzYfx77pRghTxbHCMxKkGCEnhRjUdWKdtKnhEUK2rfMsKycnxUcYD6WW2yLvnTDg2HRC",
  "key21": "4UUwLdhRbgP4yNwknP4Y6hXAypUVqGSwUBPrXq9moBdam8w7gJ7oneSFHQwgjcxkGJ5W7XgMwuGvv3ost4qUkGVi",
  "key22": "5hjWAZXez4CDAtowQ8mduFYY356zPzC2Pr8WUuFAVvfRzzMjqVfhtuXgHZgKN1qpbdsickKqS6RLimMicDdv1wPg",
  "key23": "5S72BYe8hat7RgEUV5Rvy5saYGYXrjKyuW5KWAdnHDNdTCnm6UE68VBVrYcYNabPrGc5xor5nNyrFhX2NFkwm7Kq",
  "key24": "2SzTbN5dM7JZNMbnBNZRP9dMnmcrPipgAe7CZ9PFRJhm7qcqt6DFuxNBhb2C1yoMoGX5KRdKPCTh1WggRhs2RyDC",
  "key25": "3hz34RGWqQC2pyXnKWFmToP6q3hnQgqvAHgpTRzTAXauHZXLWtcTyHhpfuCJBJ1hiBhv2fApMkd8NL59znUaZGtU",
  "key26": "35S7YWeNuPoqS8oZHdUbSGPAQ7LDt7G97u6kn4vFcs54eTtuCNt4mqdT2kr9tQmKUYy5TtcvqVUE8Y2c2kW8argv",
  "key27": "674qEcC4tNbtf5Yz3oQT78C3Rv87rCc9ucGZgXar7nDmBsM3cqoQ9kYDUYKvMERRab9mtUgrRC3qqBfqchu9ceRq",
  "key28": "5xidhEa8D4hR1QPWw4i69YNm8cJHAjNVEEtEbthXdpi4xfTgjXRVmQGVLigPPUv9daHhP3Wt2LGTAcJYPFEUipho",
  "key29": "4HUSY6ypbfPhcPWFiKjBgAKWesurYZYw8BtaP6xsniLjg3zoLr34vQGVwxZG5EdZtBgRE9nGmWEahhS9vPvVzaB6",
  "key30": "4bnc6Uihs2YDjjQ9z7aPuSZ25WCz7eyJQ33fCeXJJGCVSzVqptF69LmhDcGDz9ZvTvXN7ozqoWokVCBaTJhV2gx3",
  "key31": "5TYPWpaBGKdG4CeMZfiAvjj5UwSBFgdUPp4VuMLTP85xrj1EYDK9JqKqxhRxTJgFn8uRRSeFmARBkkn87nbHJDRY",
  "key32": "3LPXMjHMuRjQZP4o7WN5sb9hzwf1HMRSgEza8mGHAvbcJJXkQMwefPMuzTAVXmS5TPqyXqaRwRjtP2AhnDdrpU4q",
  "key33": "cQf7kf2WYeXHNcbqkAio1yhqMHt68LRSCc4sY8PHcfJQoDAEyEJiYqQKKsPo18kLX3jL33S38EM5TaniV4dyRuD",
  "key34": "EMUoLUwhaBaSjTKM4TCynRn9iBDR2SUnRLcsjYj1MvQ3JYYzve6wFsSJVj9hpN7QTgQDG38NmN34Wwfbj7n7tb1",
  "key35": "3BoxbPYv8uYqGF6E8Ueh8ised41s7M4aZVCccvq1FUv8AU9GtTwhQtWz1EQfAb5YzLMEqJAZ9rU1Ud6vXT3rsBH3",
  "key36": "2gP8bqWuTv5JFwF8DPZ8NdWC1pjT9dA4ijBfWceWvsngZyLqHhCPZUA4Q3TZ1qiMcq98X79po2n6AkPj3ouTaWd2",
  "key37": "jbt8ZmpgBFmCRDedqt5HbwLF9kcPKT6xnDUnprJnHjGWfzxLDA4xtrxntuaZHd2w1HaH6NkGkgfcqj4vEAzrUGp",
  "key38": "3apJWUUQV4uYeti9TypTjQw7ePzmDub2xxszf7V9xRZhSoYzFaBqsY91m2v3nY9fy7hv3BW59BaEzyNEP1Mn4zWS"
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

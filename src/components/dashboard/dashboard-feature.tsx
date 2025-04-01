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
    "5j3gpNbbKBcigyrKjPudfescBXzK9q25G96qTWwZiiUCPpZuL9WKLVuDqm2gZ5Vmu4jWL6JVxHajC1a3LTQAm4uu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6341u37mbdKwPTswEUp44Nfvqfz5sqgtSHooMKDmFAbodmxRTbQP9Vtdmh5aPrJNiPzi2sdDdg7Jayq6UVkW7ttR",
  "key1": "5k3wsjUsctdbrGZgDT7B7cGvsj4vmyAbRRTHzDWHzwydvc9KAByxnTEEvrf4cdGiM1u45Ea2exQmyWNKL2tbmm6n",
  "key2": "4vfCLHo8sfyc1ctBH9JDxNPsjEQP8v7wnd4E2zMf6RPHmywm5XEjFkMKe2175SnBcHce2N9Rkpu2QLtwXXVWfo9G",
  "key3": "4abbiMiYg5eGjUYCh6oTLbayo2KeNH4phdYrRVjwb3GYzst47uqdSPDnR8ox2kmExTsKafuDPbLJsKduzzT7ayaX",
  "key4": "2c3ZFXKJo8xQUQZxWbnpi21GMkBCTcwdaTTkFhUmzWRDU57vzpaH7aseF11PUMVgmAW1W1imuB7ZrCFPDoAtJrsg",
  "key5": "33ny8QeoQC1sHNBCiLWhngeE632UyNKXsBkzg8bJMCnRaLpm27XaU6LBesAqzKkMedM78mjMithV3FZN5J6WGmic",
  "key6": "54UF1fHEbDP588gWRMxZJzwzH8NndUyRDVsKHUTKDWSE6vmJmwkfXZfwq51nMVJNEv8M9yHQjygUNUKy4VnQRyeP",
  "key7": "4vK7gJuruqcfn1eQTqekvUaQcAq3VqVWt7buuzm8u6MnvFr6VSdkxY1tBBvLbk1YnBYvLzMiosFEFVcgwC5UFHyV",
  "key8": "2qge6P8arugbRPbsG6EATM2J5giYQWJpkbHhZDmpC4CyMJ6w76WBPh19RaP7ftp9ubqt3UtZfDmsgWH6dKQDhXvq",
  "key9": "53b2SiuyqEtSSeAY3GEWikR4Y8HesVH57fKQjo9gKqhMTiXptc7cJb6AF48pnesWdYKB8uqNcZFBx2cvzLrWBcv7",
  "key10": "4u8w9GQaAkbM34jkyA9hqqr8iAAoXrszZ86ranBQXkWh8QXXksM5SVuJZK4w9JWXreDuvVNFXYj5EZVCX1WxuAUz",
  "key11": "5D8gVHeBM7sFnLifHPME8kDstBd84krtkMn5dS3JhcWEf37rwW35HVmR1Yt8Uv7t9PwHDNRHP3N3rNoRjzUcj7Ze",
  "key12": "4sUTSX49PTVzz1AG5fJjC3TEjkF8hcN3p8iWzUsBswSTfAMPYkZRXG6Uf8sJ5Qe3oW1aRNx9uFp2XtYE3tm22qjv",
  "key13": "3Z85y8nYmQadMph4yyxL2vhMtTYseQRB8AYfMU5AFX6DsF7Rf3ghVLEVVimrimvry4kbEP2SKRKLzvjm72xgYmXR",
  "key14": "2Zr27JmuoDJoR4ZPHV7qJzuqHE67VEp4Bv48XywUjdeHfpjCirJn4KhYiZk4Cy4Ht93an1pvjQXpCkK8KqpBUHNF",
  "key15": "2hX2y2fNhGGBK7JmgiF8JSVqfLeJsLkCK9JoD8GkDWYifPy67NfH7gDr5e1X7JeaB4vJ6fiVeSuQJx2y54ZFCX8r",
  "key16": "ZQux9pUuoamj8sxjgxDacDvs5s66McU1oyXMRrfUpmyeWkpTXijbN1ojBDNy1KYjwT1YUAJ331RzUJHfRwrLknB",
  "key17": "3XkcWCXcoXjfMvDgCJ3eTdFRjNPg9Zu1kzUkfGiaynTimwipSXmMTSEwoH8PFHeGMLQzmxK4wwkoqYytpWdRicPa",
  "key18": "3u9Ui3qBtjGXS7xeVeeNefgrA1RYwTdYMKkkrH3F9yZ7i1a6nQgkyiJU62DxrzBzRh2dp56vywYzj2ytvKTVzXH3",
  "key19": "54vtBTpe1epTN4U4kPheRAjSrPYNdedLqvgDTubhaVzg3meTbYCGnJrxKHLdkHBci9SQ3GncuPJodDY6U3A77Dom",
  "key20": "63hmHe22n3ZNnpw7ZT6nwxvQtPK7AbxgHMUECm8H7bQ89Lj6hGzubrnSUhiKvPYh72mDej6xoHxGGPHb82Soegvc",
  "key21": "3kwnMuVb2tUirdhpE8FULJjn1bRHooYgTa5mMxfFHBTi6JXpNNYRBFmFWGGy6N8SVmGKKPj8DJPoJtnMLKYssgW1",
  "key22": "42f4mLohZTKn9co1dt1MgC7JkxdiuvzUci6S79q1VGMGUFEYUnLHMt8YZ1bfKjorVV5noRjdzL1aSwh44UU9WUMA",
  "key23": "jqmCd5RTqxYyXPbi9Vuqqq6XMtAX6SBra3NNs88z5NGRMoPcaFK7mcXVcCscDTzwFSRZsPWfbc7FXsU4CqsPJ6j",
  "key24": "TTrHRzZBFSgSEwWZecpgx3Hxvs5G5aqNjX6SLaAXjRJwFiZ6UKi1MpLaeQtNMyY9VSrEu2652m6WRqjBrLT51uT",
  "key25": "5N5Fauau1ZfgM3VSMFiH3EWgZ7s61YsQeJjtEDcUqYQckMgnLNMh4BS45exoQ9sbTcXDQpwpAuSvmtQxwD31CMpW",
  "key26": "4cdeMxVz8AQs1oBxt6SJvJDjQkqhLBBv81X6ajxxsZkBnyc3C9CSqDsn9bobuhMVWvPGBnA3ig7cn2TkovA58Gph",
  "key27": "2XRxAjwsy3rTHREouzrLpVftbPY9GAn7NX6wSujpVhGUCB8d1aQcLvGnga7bC9GBuyXgKwWMwCT8ReNRwqXu9uER",
  "key28": "2kPyXdm8VmvZEDjEESmEe2LrGj3KEF6hNdju3TVD7YS3bugzLXAFzdMm8oFVrKf2W2s9McqGuV18MLCgPypK8FE",
  "key29": "3DH5avG2JY1X1K8Uq3vLzX4Qwg9rQgxcgNwivsEG7oWvJFDghcj2v2C6Pt6CAEFjwJFcfjRgRXQH6ie69PqDBpJF",
  "key30": "5hE7LpFyZ6Z6hVnkZFAsuvmi6VfVJHFr6NhpH8viUR8ZudPuG1KUzhGV5vSDpqos3rssB7D9F1i992d5NA54GzEQ",
  "key31": "5p15PYNa7wVJVgNbTKaKLPECbhPMVrFR3YtHCnQkfEfeY3teskjEBgZHjfmEyxXkYafMEe9xtGAxvRcLDcuGFxtL",
  "key32": "2PWCXBkVksgDMYMesExKk8re8RXikzcy3cDHAJ147XvPYRfqJkzg7dxdtDwmCBNa8mgZNNUEBzwJoNwGmRrKGW46",
  "key33": "ByTX3xhK3SkudHUf6Zgw9ae1C9ciCkRDs3PtXZVYKoixXzB26gsiSejyCJdNspRBUHHZjzwe2MBT9MwY21bbLY9"
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

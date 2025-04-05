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
    "33HVtbQBxHDhKtsU5zN94UP2X4P6DveV8Z3TNjEpWcxoYMFodot7F5B5pQqahS6VKmEv2EuqFWUhqZSBWRvbikBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QdK1Rp9dnTW3C9PuUR9tk9pcwrYbF57y28iG2HuAPQXkNLw3nmjD3GZuibdJq3NrMFBJLfBQucvHazWPbXwEmuh",
  "key1": "sVe2gs8kb4uqhbXXvBXF7VYjDwZCqLMT2u7Q9YiF7Rg9QdtfN6dFGMqGj2SjyDkuNPSyV3vDnEVQeYSTK8GQoa5",
  "key2": "2oEtQuTW6boPWiDYVPTUFQ4txKU54i3Qo2psa2nRJaHZ8y154mpdVH2ke9hqj3xPfhUm4AdcvojjJ8uxuBB4vYLZ",
  "key3": "5EsVcgaCaGU4Ku7nu6DX5TBiMxKPo7GdXqDUg5T4CqisBgf5WrEdGgucEkadWFjntJiTfK4fe6PZViwDbt5Pg24z",
  "key4": "2S6ZBFJgDQhWjknvqj1X2cA9mb6pZn9RM7B4Ywg7HpENw2H6115keVCMtELyQnUGgLHBTNvdnrnJBJeCxv8zXc6z",
  "key5": "5HF5WkxoRWKRcdCk2c8Ys5XR1af2k4TCzE3sKzyw9gpiPyYNYpj3RSiaKHxsbbGFiyAZT6bD7VPHC1LyYKJQuiPV",
  "key6": "2u4zvf9j5JeL2Si82qXQb8Civ9tQrZAxoBqKcQAYwMu1cAeKXPtUyK8NLgBAKSXZrfhCZKRTgMnQMyp2pkYv45YX",
  "key7": "wdihivarXN7Xg7yWo1VGfXMf5veBsv77A5AcJxb1UDGHsqNzBJiyYqzH2tdfJ9F2QuE8QX2MtCUuMDcV8DAST34",
  "key8": "54v8S3T2bMPYXFksWv2HujQmBkGB8GiDoG5C95p1ij6DFm7r4nkUr7YK2RS4MEeC5X3Nrk1NFRbVXT9cUEejqbUU",
  "key9": "5wcn6UXFTTo3JfA7JadWVfsHWeLMWfAVd2PkprcUMXzoQ9jXmrv7wz79sL8bRKNTcEXXQmeijD5qPcf2xBX3zAYh",
  "key10": "2Fy7bwsmjzDYPJARfk2KzuyCGRvjDZYwVMv344usiAs3fRbpubbkA4DRj6Ucppo7E6SoDtmx1mRe3X5WtEvsHVE5",
  "key11": "4BGD6zYyViVMsD5coK1c3JtSyMKir4rWSfw81waQA7zxNe7JfDSa4szD6hL8jrL5ihXjaPemv6Q8MYukyAhZvQU",
  "key12": "2F6eRnmz2Vd1ScTJWERRh1du8kCE4Ess59CRF2gHkmNChz4rKAbu3SCvn9ucmxXSafEdvoVCKhV3GSTLQmUGqE9W",
  "key13": "nowxoGKy7uXrvtsCqxAQLdUAQbgBMHTC6PFV6g5wUkZWgv1iXu2XQ3w1ADohgLvmbwQnhLu25BizTz1suHk79zM",
  "key14": "qjVx12Hx2o7JmU42a3Cyq76h5r3ZdAwDtYNTGPFPg76ZSvVA69QTm1BdoKhpXMsB8NQnxZrAWYnPdqmKL1ojoSC",
  "key15": "4ZF9cdiX6GYToBt5z3LNiV5EAQqY7diEF4b2f2i8r84HTATTuv592AcE1M9NpheutqvbL9MboTeSjqGvbn8cHz4N",
  "key16": "3gkuNWvz8vNV8TXkxs6meB3ddkSbozEvtnYXYoFmyxEJkFsoweehXmF7d4Y6dm5WiTfhqEArdyMj5k6nwqYq6BxZ",
  "key17": "5KYv8kuX3GmqhaDKnBXZJMLThnAwbMUyHkVonSnK9AEAQQfovQxYCaz3KMmKhhouFwqFrRTjSiUxYh6roFrM9iow",
  "key18": "44d9cNNn5cod3HQfNiCVnRZX5qGSgxMJ7FFhh4ut5VhDqom8i1d76PidsABddvqJR1GwLDdzQF7PwpNGk1K8CNKw",
  "key19": "5mYemP4CiByoNQM4TWH7zaMkPBjTAB5tXNy6GWAx36dGZKPpFNtBzKxaUXpRSQADVG4d62xnEA3jo8fX4o4zsTLX",
  "key20": "3QXkoBoz35pHs8GseGqwtTDugx7s5V1XdzPhgQ2yXZdPVaW5ajL9GXsjxpFbU78Nciys1xwCeW5eLp77GTeCfupZ",
  "key21": "5zamAUGJeGxEmQaSSVPqRuNpt7ozDZkwFtRj7PJ7esWQg7TiJivtiQhCmAfJ5fA8uqJ12UCxTatxfwBP74uDQfGM",
  "key22": "3f3EFk8SzvmYZoPFzeoTdip89vjYMTcmqNUueyNem8EWyjihu9Pxd2D3nszUg9jFvYqisDCCfdDSAcqTfBMerqgT",
  "key23": "2BXozNCYfQjuSLjNNYk4S9YnqdUC8EVqbPTFK6UeZrUQvX7Wsju49kWcwiP13cJgn6v5j9CRwPYwqDykUXwfZnuU",
  "key24": "4dkf2RkSJcJEhHBKsgb91y1CY1zoevv7RHfak1FpnpFWHC79xuwQ17ZHpwnApsqp8ENGV4VNmPDGw82N5dq4ekUR",
  "key25": "3wgYgyQGJwnaf6JvimD1Fx5oFyuH1LYn5G6NjUV2NmAkngWtXM7qjrUE8Pkhnz3QNdFcGyEQktZrVpMWKzP3t2Em",
  "key26": "2jYJWoEZ9r447XXfJGrgLBLVGed32UwTr4AKfGU69fUPxD9SbJSA4kMHG8vyPvxTTRdfmS39Wu7PaPzwHBjAWuk6",
  "key27": "5YdFWEeFpwMz1rig552uiSeew949PutmQw2gbokRr5uewBNXpMyfA1QmdWwZy2wAjSZvoUrfpDvoBRoZNrNwrkwQ",
  "key28": "4DHarxJsxQ3keuoARwCDjJf9Qqfu2fXedxrx6PzcJW4V84K9RCrHg9Pgvv5vnHmsVLzXZnkRNP2U8ETRDg5Ydm2s",
  "key29": "2QuoPECmnsm5khKUzT5VfGaQTLiZVwS4Bdacf4GL5t9Ei6FmwSaJmGcndQV4pCEo4g6vnvFg9auszByBBfeURMLD",
  "key30": "3yzYNDGnPEqd8t3hdukaaFK7PCTJ9P65sPtcuig4AcYrSacQRJiByEKHmasdXAKZgZp2goDYryoK2J3qe6gCpTpb",
  "key31": "34NjC2bFiwkoQ2eqdTgoH3zSHPST1cYdSUp5HeJHqL9kw2SaqV6M5ptZNrNeFYaKptuYjZw6KiGuCWDXEiPACw5z"
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

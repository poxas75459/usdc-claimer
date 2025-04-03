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
    "4G7AYiuDnuiHeHm1c5ooeF5AvUJPhipnQYsGi3BZHqihvet6GDEKHCsKsGb7aMmqcyR15mk761LVpVd6L3PyLKcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hjRhkxod1Z5baPKvxH9sCBzLUFHyDf5gmxTAMZ7qA5YG5w4nThG9yTMJHrUrk3Mqxyq5beAthEn3AZAfvo2JFA4",
  "key1": "555htVSRFmTtbjuF59WvYhHbwcRNznZCKpJ8EYSGv8qxdzCc3en3YFTK2EHEJHf9XMGvcRTFi7pUhg6oQYCB9bQf",
  "key2": "5sR3KLBmgTwCD1V848TBJXeSrwPLD6B6RcNVd3jzx5gXcDUBndMneQ6hejPormUypLxQXZQ4d2sMbtMraRRoVitq",
  "key3": "2Z9TZBmP3dPd4VWwfE7DyYKXRaG8kBmwUtiKXo5JWht57zKNVfDNU2zyreddNRcTXBppCNQcGtjA8RjjorzmkAmC",
  "key4": "5oHKeMTZUaMnQWeTFn2mKWqj3UbMwPz95CBwUAxGrWUFbp8Rru1WtKceFAZBmn7jazEj3hPnMJt4cJytqqYePpLh",
  "key5": "3A7sZsm3XjjAMy8cqDVbEU7zqGkncGLAns1VYXq62ZWUf25Z6sby8Y4ovBM2MtvyHibjPQYofrSB289uAA5bmf8t",
  "key6": "W1adSLYEvbHDxiZFMMuzurqJ3Ex76muwGMroPC9Lrx7KsWQE7rZbtZoi1SnJSPAS1gr7byYtL38dRH42AtrH7zS",
  "key7": "4stGX6eDcudHZ14bG5pStVJ1sPto6Gdn9DVhgddjg6wjpDwVgH26jppzkGj8LeKnFFaiJEJsp8Ro8iEsKgsyZTCb",
  "key8": "2KLcYeWrCMXSVFWZ1SjRocvLUHzFb3aChpWXKBdDS53WvXeP5vTMBHq3wkNcejGqem2LLq3roCC7tBnUNFSgpBn6",
  "key9": "5iBb3vUJbNcneCPhSnWJDLgumoiGmgy6rCqjhD4L3ujEh1hYPudV5CyoRN8D4MHpwrpBiXaFiSqe1hsJQECdT5ss",
  "key10": "5Xmitqs2dSnwVFgxjjjGR7nQXqJmXAH4VqscdzayvkajfrD9zes6WmtTc4GjtjkJvso6jFBwmZg4YkXXkXm9rMJs",
  "key11": "3VzpjKzr9nS4HU4Ft1hjrwUUgbEv6KbrLMSzLUYGFmDHjPsrStQ9SEQQek2pb973kLKnoiT8ARp7ptAKE27xb88o",
  "key12": "2eFeVcYGubd9vgiqfHe6UYxY7HCQPeCw4j2xopJ97TF2SgnrFM16y2LRCKKR7aSDzuNVmDz7dhxxuWsHMHhKpdBX",
  "key13": "3sBjzHftRCpsUeGfxqoWnNVvgrDpfhcvVjEHFRwCUvjKRySSNjCdzpHdHYQTDM9PmZV3vMtZqkeZeKEJoM5n9rDi",
  "key14": "vGZWes7DQYRdcqp5wQHFabH5jdCby6FXxRn687HPGcPyZsNLXKuXhKefAjq5MiwwMPs89d25YHjtWTzKFHeHfRr",
  "key15": "3oyN75ieCha2a58PPkTo2PcoACTyZ8CUniPEC6Um7b3P5U9KZRv6uXTi5mARZTLRsTP6GkftS7HDQbeFuYCL36oD",
  "key16": "5qQhXzufFW9Ggy7NhUF8kXPfSVL96WYY5FFL9ZATpr1NGyK9Q31wiArU6kU54nia7q7fUk4uCCiKKCmQCBtqsycn",
  "key17": "KDaHCvTR2YFXDA8VDVSwvwMoPwoSsUvk6GwxGiU3DSb3iWnmFWsFdKdMNP6KP83GK5nXokvcBqCNzwVQSaukJBW",
  "key18": "4fA7aTG6UHNU5mXPyDF7nzhuaxP21gcaru6NZtNJ1TRDAiA7Y4VGgkesmgAGLH7gBDQPJZXbtchhXksmvtTTddwT",
  "key19": "2UHiKjdRcqFbihJ2toaNMLQUro8uhvf5cHL5tJ7No5QufiW1dj3HTs4foqicYmnbyPtTaoiqsLXrgmg3s8pv653X",
  "key20": "2pyxhJuYxnuDpFThsbFf67fndvqwAj8Fxkw8znUz5RmN4R3JVEUeVRobFGjNawezdohyeu4FMVYsjuarTesSYPNV",
  "key21": "5jfon9yiuLwFMRNZNHcccb2JDt7T741ucf8zaKYyDi4Co3m7Jq1qPEMSDx6nkDtupEs7eURia14Yr4UZ3ELFqLC6",
  "key22": "gTskR1GXDoT7tQvHcH4P3rp2wwkvxp1uwDbx2pdCCZ4WyoCkSeb3cWkeFgFAYWjoZEoVyJ8M6KjeRdekH6Zjrx5",
  "key23": "55mvTPox4ADCTr8gezWFaR3W92odiLhYbyhBNaud9X22j2P3ejvg7rZ1WAFPYhM5U3wvC2JvXTGik9EYCgQWabZB",
  "key24": "aGck4shpkqNE2Pfjai5no2t4yXkF53pTUy9rK6DyhEk1NDARWNpfW41WWJrBwNsafYqegLAjDhEGvm6qSf98oo6",
  "key25": "22wPDi3JhsZe5toxvZDNUKV5rkh3mPh1LdN5RhFxHF9cz6SA67VixPK6piYRxaDi4refoax8bPEocoVBz974wQwF",
  "key26": "26YgjrnQK1CEXfCGjPEzfMFHo9hq8knWb4rSrXMMmEwiwc6iQyrFhupqFokGE4gWxcueexCiN3SEqgv9iLbzvxsA",
  "key27": "okd77apvsraberSVdE43r8k2v48fwDtSMZ1rDJNbzYrS7mYkvv6VXT139XHAWyKyBCy4EYymgndsEWFr5fz8cyx",
  "key28": "4SCN4GxU7QWzDW7yLyNkAE2xkShLDwuhFxT3LdwVzMHt4ExfiM2wWKWyWC5n2K1Kz8AWYwgW2nNe2ysarWSXZVAd",
  "key29": "pMYwowb43NXN6buUHYNz8YQbkKiKNGET6WCDuJ3d8CHKQfqDPA6e8U6dzgMvkK4neFXcZLJe99iHuHDkqP7K9Q3",
  "key30": "3Jg8L8f2CaMkMg7Yipe6BKJ5dJB4i39NUFTdgoVr2wyY1G2RqNkByEwat1kMqAcThbpbN1aZQdcq6ZKwUbMqdYaB",
  "key31": "TQjPMiKhsFX9hPW3HNXvmUzjisMHGjpbDsLddKhiwR521hiMv1aWxN3GyQ3aV6aBqu8HnC3vMkACZpRcuwDzbe1",
  "key32": "5kKngw4pYfAqPTxFZagFnE74B5ZiEp11rnM9NA7sh4hy3k3jmkX5piHJq176JjyDJe7ZsYK3gcqPXfAxf2Ru8seM",
  "key33": "3WoMBnaNRtTRXXrLTkhjhncEajLxQcx4KWwhRwFheamjRswNHRRME51KggukKL2R3TsaS8che7KM5u2TrLuiAqsU",
  "key34": "3WjTwqTy4g8wET913zwk973pqYiQDsRBtxH95YDun7sXtQxUxbzpwKun5UFy8rvQsfVrCAiXzdhCa3xtWneo4snK"
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

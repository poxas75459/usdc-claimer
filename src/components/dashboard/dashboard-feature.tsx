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
    "5U69EpJsFMRhPkPaWSadvsyQwYteV2tuyr8pQMe8fPQYp3PfPdVTksniG2eNVR7aQDwyatTBws2nafsXA9Brr2RU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YktZnJoigv1FeEWdRjCdJxHn3xAsC5idBMBmWj3Cbzb23E81Cu8Dpt4FffBQnxgRfLYEgnXUC3Lq7T5dRdDMKpf",
  "key1": "4qVqVjJMwsPM6wLPdjVDeMhYhopm1yfr6EiiJzfxsBhjBwgD1q7bfbmZsFsH7FQm62T968Sc7yKTNpHvHXwvX8qV",
  "key2": "2u1wuyby1WqmGWRV2LztkZH9EByvUwbVEfXh9BV7v3jewNnbHLDgukWXWeMeGgAn873FinZhDrcewS6kqpsBKDc4",
  "key3": "21ks8hTWp3kD7fuZB57bVxKxrzrHsru2gZKWCjDgiNNzCvaNsoctEEmiwWMMLiwnrBe4DFsz2LqkFEbfTAQCdsPy",
  "key4": "3fQ7LsjdA6icdvdqfsBCUpBe1PmSFhfFXb4g37MdvJHJaEvHpmP7Kynwc1YV9J8irfqDBS9obgnDcoaKqJZu65ni",
  "key5": "4294KoVv5B3mxGLQyfmFhWdBWDFz7Qjkvybn5j51e6JvRuUtaZrCQM1zJLFqQrwfrywmGsVX9rxgg9FhHDTP6eci",
  "key6": "5TeBRp33azMANqhSZP9ihrAh7x1LWYUd9i4VEFzYk2WeXUmNBUtwr4RqN1xgwKKksCZ7qa1Xf478qT9Q8TxLbaGb",
  "key7": "4mjkPGoSqpvp987srYksU84GnMGdXXnnuk57enTimpTqST7h72XsRHZWux7ybByKG5y1wYKTMTTjbpV52NTWLQyo",
  "key8": "2sM73cLy2x73uNa19HEMU7GtwLGrfR4rSZVBZViTzEhN6Pi72TJDAEKwb2T23Z9S61GQmfDLWvnUQJP6jQTyQbYv",
  "key9": "2smJYLS1xX7Lx3csUy2MhG5r1GS2XgPpDMjWnF7dBKiq5wZwa4vaGzcEYDNmQYKpg8cSu3JEZKkcyC5taK6mhHFr",
  "key10": "4MkcoAojxecPdSgErHGpYDEiNSJViZcuBYJAENERCk9TNgPo79m469pPcURDodVbJuwJXxXj77DoTJd599sbWGqu",
  "key11": "bShVdPGowPPotDArZUrTmFYaHWx37TbJ8bFPxLpDqKHVVBD1KRYKaE13x3kG6pMsKfCMK6wmwb3NoRjEWFT3y7h",
  "key12": "U6wAodtAr9axpC5U6vjdF6cqfCRnmcTRgMFyYsSkJTrp7DToWpt9cm7Xttu1neUqAbdqEsQAk2gd1o1uSxtpxtq",
  "key13": "4r3Phjq1fwRvuBLdZNNoKAkeyHfCCC2st67pHhwidjCJK28rKPm9cCSdo8rx1xEwQhAvCyoCGcEdB7N7fSVM81fd",
  "key14": "2a7ZsjVBPtfUPFoNEbem6xtT9i6umon4zn7ZYzdMt2qHiBka5HA2phaFZ2wJtxZ7ELzZgRSmEBgfVw9mTTigqdjv",
  "key15": "4Y8W6dvmH53FG46xUHDCuwcsrgQbjzkZvkcaWbS8ksAZSG5GUEHTPDaErSK7dmDPtX5RMwn2ZkY7aRrwdbNjC5t7",
  "key16": "3f4SCjANHXHJ263FaHsXpwPTJ1A1pz3c3pJa3GN8aNB5kjwMhQ3bzzFBbUp236rTz5q1jJNhBepto1X68DD6SpAd",
  "key17": "5QmGqkBAJ9whYr839v2DwokZMsA7zuT5XQnqDLDzpfyhgYC9mhTpFrTjxYeHnmwoBAT5icUb6W6sm2QRP31R94sT",
  "key18": "28bE5MNVMZvF4Dhx413qU7V8jfBwNkQ1XBSfUVrs4bKvL7djrbvXyYK26SY64serGMUGp7Qi6WfzLA3p3ynLeWEE",
  "key19": "385pZyLXcixHQ4J7gmbeA15k3AUxRheU5b7GbwgHsVU92G989GqFQPcEcN6wBALZaUB7ZjsspXvBdCQK6o61LiVG",
  "key20": "2WSuAbcCLQhDZeaL1quTPhtHBXbZ8Lz7z9S6D2ErjHMmjpsKHGeY73b4m6fuUbZHtvrmvUZpU2cqw9HPHXzZ6SaW",
  "key21": "4P2W7tbPnbWPqEzypQspee3qcXtAnDRKinrczHYRqaSLkQ7aKLM5o5BGYVKxx72MhZtkn5CqkMg1Xhb9HrAYKfDc",
  "key22": "5GvA11FQ2vdFEC1RPMLJcjfkQ6avymvB39FvFxoSWmfBtLypFdSmyFvHuZz7QiUBgS8rZtdgHjjtcUVgXkPkG2n9",
  "key23": "5fhjv36hVCyc9pg6Rg3kvCWamkzRmrn47CHw3Xa2JAZmA6hT2LJJz2bTw8MycFEV7T3eYWEDP2xxDJmriWMggZiS",
  "key24": "5wb2PXk3hr3vXSmpTN4TuNARCDXwGbeSFLYmuvrzBxYeharnaVmGfmfJtdPS5UDPooaYL7B6gDDfSLvDy2vtAa5K",
  "key25": "Bdmn7sp7Xw6N7nXq7biNjRqqU1otfsE6q8fxrAqWyAgbkzywxsSpTprXc7JXvDBrmV71ikgLNtgsH5xVYBXM87W",
  "key26": "3kwm9L6xWDmihfeE8oAqm9dd7U2QSpcdmMTrD9qtDWm7cyTiWcfhNuyv5afzJ2TmVHan1tSgeftY1pt1hdC9H4u7",
  "key27": "4CLnJ5dD5yih9Lnmqb9jxKHmmWS9QcDyZwVpLYordfmYq5qkBTQenT8RJDkTYVHNzVeLnQegQhe5bnY2wDCBDSx4",
  "key28": "2inTXmKD6gq43AnbxmreAyVYbW3jmp71x7hVJXMU8Pbsr6PwxGbzxV8RpktNJHRKtTzsx6nquWRRWbRBrg6BPGN5",
  "key29": "39AXT8D7ULHiysrJLSoZGMhMckAvADhE5y4iGMMmSw2G7JiQUTV9wuZAPv1PjLQBiUuaHR6Zz14dxx2Na2cydZ1i",
  "key30": "5cqD7uAfmdeUSNEJrK9zrJVCCYTQ4H1WjCaQv8h48ptvk82KTo1x91zMACzXjeMAn7kKVUAmmA6BkKv3qLtWLjCb",
  "key31": "3iqQa3mV88T5JwM8xZnZfRDiuXw6QQoRRzrZRabW3mq7DjCh6mALBScjfA5uGLD26hVoryv1VG2aaVcu5AmyzFRG"
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

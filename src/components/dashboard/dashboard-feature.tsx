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
    "63bnX1JznZvHff8Se59rdSdPiZ6HC1Y3fVGw3ReKpx1i93sGx2cW2eae6ExAumQWNr5e378ZssCETdDzhMtkTDxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fz3Dhg2okeQjcSK3wfucbWWv2qvpKDt1Rm58QyxRxfbj9EJp2peCXr6HSqvYL2TssXb1RocMPB6PayeaqAGYxue",
  "key1": "252tPuHeqnwkata3GmMDZyYRzrqD4DuPhezv6Mq4s6kjm6oy142ioAZJZipKzYfWy1rFEzNruN3m1GzgV16hZzG3",
  "key2": "4RW6CdpnWvEzSZVoP2JXcbrXHU6kNGcRFNrQfQtpHPSdEgXdAD4b9XPg45q4HUzbM9c8gXhGt9NFrLbUaLvLF72B",
  "key3": "3akqLQ29xbwwUtYApEBkZFYdXgXoVB4G1nhS98PX6xPYjV2FELcxK7d7JZ6cdYX1KfwvVDV2Xq6sUiuATAjdqSe",
  "key4": "3pD6j7Lo4qyR9JsHr1xNvnVRyQyNaFrGaDfMnVq54S7zFnoXusPB16S6LKJNw9RQ3Ean9LbBmDesh4NJgqxLcSdh",
  "key5": "5kbWNQgjQt7xnSAa8FkLXodPJoygzyieeEm833qLWcVdkxVkaoKu4cpvjVYjYkZktFbpqBNR1N8LTAd2yAvGSMVm",
  "key6": "4k8RaCto4sxRzLJoF7XXaeY1h7iWCJ5Mss2iGL3nZi7VsoSLKA2NwmbAgXP1WnufyvB6iYSHGffSPeDmgEvqLFhL",
  "key7": "3vT5489PTmKEL5zZn7cpG4K3KtzGBTgv7XuD4auTmgHAXmHjBUuqh3r5XW47auahKDX7vUCnMm3FtuXEnTb7B3Bv",
  "key8": "5zr39PnTBNTBCummQpbKZEJTFVGf92fDcJfeGpZM9uLTHsTnAjD2dmZiJkAQsdKxyruyKVpFhzGFW2VUpVbncUu1",
  "key9": "5j5HVwfrnkWjUznLQ6QA136E1fgs3Xev4VUXGAY3MU9Vt7kZdjHHVcXjyxGmGk9HqXddeBMXcMoyashi9gTKC7Z",
  "key10": "4ZV5o46J5qXTsS2Ld6hbLRDWSjfbzb7YaWyYwmu3CShdPvDajdy8ak5Mp1RPXFUNeB6cC47n2doxvdjzBiVjjKK3",
  "key11": "5qcLmHexMeSh56NPhvk1swjvxQEvDXRc3B5h3ujp9rcF1UhRKFFz9Hf2sianrxpA4GTFG1XGKZHdC7VJvMXw9jo5",
  "key12": "5wCDveUfyfNgEpM4kAomTVJ694Np2v5BA3c1H6UKzysktMu3H5inDY41E2wcp5TXmKf8Dbvyob1qBQoKCTBh6KMu",
  "key13": "25KCun9NuncJ5BGncKPzVanpbEaZrjpaEG86PXAXTMN58QwptDhVGefer4xLK3kJQCpYDpt6rLHeHxFjXrMSC67g",
  "key14": "56kta7QqwEbpNLRGVabDdGLmxbGcMAubUoT2LHKLcGMCEVqvnHZVMYyTuVEYDNcYsARnB92PW1eRRLgKbimdMGir",
  "key15": "3e6En5ny6Bho8f3KXsXhavgGkNKZcYvbBty3dD3kg1VpKb168gT1su9irdnK93fseo3UWgJr7c6eZ8KbYkVm9PFb",
  "key16": "EYw7gjkvuqKAwcG22DZV4Khcd5V8ZFebFWD9dSmHurZQxT3vfGXUyNeeXUh9Db9EmwhFQ2qAc8wiF3KNTGbf3KS",
  "key17": "41PYSW4NgW6X3UdUWqTsihcp3u73TTCekN281D19fKWf9ZrXYdfq6iXh1e36E44tNHjWqBZM5sgSuy51s2uPHta2",
  "key18": "1ETvBvsk2Ah8qB3wfjxqVaMQYFv4umZ3fG2reUkhiqi5SRNxU8oiXinY1w7S4abYtZP2K121biDxgE8z2ZKQtCE",
  "key19": "3XZTmArYZibBhNzwXFCsNabdLWAhQ68uVddiPdxsxw8VzGya1F5xAyme1MihN9P5s8WsHgYR7NhzuTDWVE2fxNHi",
  "key20": "59sEzuTMC8iD2vXJgzGaymJNtFXtmDCXXZ2jqRVSST55d5zFBoGMbs7yCcWDenrgbdWEZJtCCLEWa9TAfvUmp5mh",
  "key21": "XvF7UUhHGjwDTXd8VURoXVXzYtg2Y5P9hwXz4xw5dFiCaeYyc7MHcSuJQGSe42JMfcM1uJ4xisuvbaMiVwG5yX7",
  "key22": "4GU8R4asviwxmXvdCY8UVUAhabc1pHschirYJXjghehwddbogBmfDx27iEtyTeGUZSh1d2Emaa5wbxUmFdd1BcSb",
  "key23": "31sHdurCaPB6PprrHTXW7a1Rsw2sP4icMonqfyRnfPrb4KeyGQu6DwjysZNhhasSW1GeP9Z8UgauV26QF8gebGmG",
  "key24": "ztNHmoz3bM514hZe7aD8R53qgjLko7LUTgbmuuVYfGEVTDoDUV69omiATDSGHgKSTjAefZZS1Ec3vj4mzQStHMa",
  "key25": "2kPiDo85fYtscj6uaRN5TkzWcdeoskcmFAz8eqdwwf369HcxffeA9YHDayTaG6vkWQe7qQiHfiLHtfwKhiBoigAu",
  "key26": "2Zhfqf4hoNpkVsPmz4VgtkBaDQ9vMdRxotFdLTc4NXy5MWkM9pZT85hSDvnTR5dsgzDz1i549N9ABrtevQzMKcbj"
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

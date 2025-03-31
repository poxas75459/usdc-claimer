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
    "3ybCXn6DPx3QD5pyMYHBmim2D42i9n6jReNtz1kGsXQGp33MU6RFqaXwGKyPSVbNXzo3UcQopgD82obeMnfS9ZyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rjqL3MVv1mSQtAYXr3NBToDc4mK9Zu3GHMZYMLQgTAKd9KA9u4Pj8cvKgsnnuA5PQ7Kk2tPQDzSKDCTmBckfhiB",
  "key1": "57y3Fvtgv2KD2Jwwto9eJe3HLHsp5jwKKyABjnoeWdgwBjVU1i848x1DJSTQy7yTtCV2XtgLpRUzeSsahN6y2Gp2",
  "key2": "54aJJHDfu4665LNh12x7iPc8VCK3Dq8rfaw9gAGJcAkDtRLCqvTkwPKyUaGTtvbxnf1JniooNn82mJGJAs1K73nX",
  "key3": "5hB9XMpZAg75uABwbZpR7argzDiqg31nXjfmMNfULmYhj6H6XqdGsbffXFntMdKY4FPviNeKQ5HccDg6hEH5gKon",
  "key4": "4WLFjLmKaYHTy8oYnyQsDYumtpoLLw7aoZBkwHepcSTdryEEAvg9hTnQhDWUhctSnfWpeDHXmpw8nWsJTN3WNxzo",
  "key5": "mvn2vAAsZPhWbc1VEiFzwpmVaT1a7ZE8P2LgehM4H3Red1uWF53aUNLR1Ns8K3BsWzdUYPrjZWjZyB6DWfkDvgd",
  "key6": "32TocSBbVHDXXv4grkjuccRSzkQL4NWj6cuiKTVurfMXFww7R28uCZd9y9EtLRyLHsdr4LBdpfQkPVgvibnRh2gt",
  "key7": "4B6eCBqcWJPQSRxwd36SZd2kyB5KamXZNZD6QScPDw9xqDEMEz5fZnUy9Fgey8QS84pe4iijhh2M4KdN7jmBN8uq",
  "key8": "2TxPXrNZY9rTQTDK1MTm6wLnYiqnGJhSSZxSeP8dqxDemphALc5tc8vmxDNdVWjVUYM6UsYZ9XsJvUCs1fJ8XjLS",
  "key9": "kqoq6Yu4A77TJAYgecLNFK22p23K8xvnDo42A86ZHDQk92kF55d3TmkMiRCxEcMGNY91bRGFmpAPMbWC2yvpea4",
  "key10": "5YLLcXEyARX2JLFfcDX9Jcp7YWV3LvssJFnSqWGCjUv5Zwu1aK4bzWE9va83DmoN2qZEsnhSRgLjihGNx9jKWWSZ",
  "key11": "4ndvdpVYYFujgJo49e6DRcxJ8jy8oJakXp1ZY6jKxN9ezVGQbd6GLK5JCuhca1iV4STEGD87rMYWKGgE3VJJfUPy",
  "key12": "2wq1s2zv4CtLc1sdG3qNduvhAB9mMWkHhrPqDPj5SKa9gx1Lv5ef3A1NaPNKqbz3Y6ogESe2EPpTwkRAM7mGqVw",
  "key13": "xfAzjjRDEw9XpKzjYr9tsnPUWA719byQwybxZRfyVsCdrotzz76amrWj5Sjcsq1oow2Che3Uf99rPPrnkGskXQs",
  "key14": "526ZGh2KKcMNWDFDWXcTUamtyFRAde3rjdJ8r95ahL13XRRMnzY1ABDTRHeME5Ve46C4G8VwqjudySucpcYQnpkK",
  "key15": "2hTjkRP3XiUG2Dtr6EGEgHDoXKBNZajtA6Cp9irsV8vx8NFftgE8riwzujjdWxWJVJsquHBS9pNVGuYFevfTSW3T",
  "key16": "TBnFvUJrh4vgUU3vfqXWYsPazf3r1unp3xCdCgesBD2qEMBQG2RBjCZwzgCxoGNjJuUwXXAzCfDj1kEzCCHec1N",
  "key17": "3KBfb22f2jkedaE7fMDizbXXFXnzR7YMLtmaDfX9MpNFa175usHybnJW6u5AjcW4W19RZHmaaDgxbMDwB31pdvFP",
  "key18": "3QD5cRegqFZittbVG9wAHwTDAGUQJVxpS3PSkz3jX16CEBpu5CgFfTdKQgwTWadkZnDCUkGrvpRQTEvGEfCxTJXD",
  "key19": "4uh27E334BdjLgHT5Yyy2UiPhiJfXVdTgMS5QrTABuvw3jF8LUZQ6nQ1MBhsmAMyAr6vgMYc5wePsH3KKFJd2tsx",
  "key20": "4wFQ6xnh2NKSHCJhaNgDTdN5FWFmX2to8w1VJALFKjPHXTBNjgzF8S6aEUocSUvt17XHh6P7WFF5NCVvM58WmRNb",
  "key21": "4p53F6hy25NL1QveWa7Jy6pYQxhCEZQD5bcRWUwgn6fSV19pbZxxELV1iqfhnNsp2vWo9WrTRCtW2TRRZyarDdGQ",
  "key22": "5bk2azAh8aUdfhGyofy8B1LeRvMkT4DMG9ecS1xXU3hGNT5vEMSc6uFgbWevNay6jzq26ob4Q1Km9F1fZo71UKvK",
  "key23": "4rZ1FbTXAnbryrbH59wnCVLD97n4ruD6Gw4mgq712Agi1vXigkB8FGPnLgoXmA1muudUEbUvwGUoy8C8Bc5BcFxg",
  "key24": "5qRZ5KK7RcDPRkL47bLhdx5FctJ4saLmC5gJpSPhtdW6hAVMKcd8w2MJaaGGuxGxJCKyX8oitvRzSyUdqTAFV26",
  "key25": "2aXRTmAHkJzUccCDNFcm1x8wDcX1i385Ta5C73P1BEGxwJFUTimDzGwMbX89iLaYsT8d4t9x1PYkZmFkrTiuKEA1",
  "key26": "4zSqccG8grfJZq2Adadkjcq7T53N5H5S7ELJhifPaLMPS5onbuQCcBKyJwHRJJ5XKtfwisTfvn9WSoF27Xx4GLVW",
  "key27": "2eH3Y7ocqnXWvenrkv66p63q6kNmq68V433ckKc432arp9zfYbU7mAozVMSzrwgSkq26a1KhBtvUU2iF1PvV39CL",
  "key28": "2hwMXmNyXNHKdDrW96PHuYLpDLqyq2FqwG9fcytUcw8AhjbKCf9sQudhPu5ULL43Q1fvnGvjRrSYYpiDg1epCwwx",
  "key29": "PB25aXqmhME5gko7xKGEEHFrdp1FHn7vFo1WjwFBV2VSxyH5yBzGXc8RFhN3aicQa76T7anh2HH6ah7g2sLcxza"
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

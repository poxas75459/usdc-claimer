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
    "5e3pD3TBJDNidxjitCPsJcCeCgwD9ffJd66xeJ1oKiXGtcpqvjeMPACsmCyPzCJHyAMVbpBtRH5nuMKMmREGrSS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CMtDCwFskWbh4Ls2MWcrS7Lw67Wc5y2LrVdviApTr1pM7BxYNhM1Nq5QoVWAuFxBZkvpxdFh8fCvSRXnFtvhXXk",
  "key1": "58zFSdiX4JZqky72kEg2DxCiM3rPq1QHPoV5DhnX6HRuXeL86MNwPG2m885Q8FTJzH8fZmhE6Y2bMThtR4mfWFKx",
  "key2": "T7ez6u9ATBKxWcvaf3wsVtgFHCrq3KzyQbf5Qitkt64MFf2Xk7wfqFA6KgVLZYBYp2XFXkQ14UjJXzM1rygfSYt",
  "key3": "2NVBaV41y2McHdGnBRAJht5rKQiwUZvUAsoF2SPZWT4Q7tesZRsCAXAYF1ux5E4jF97euVDU26t86764VhtYQ73q",
  "key4": "3BThFUxLz8RauMBDUfdvMfjdV2TegFmvFBsDVzBGYNM3iEtK2amFzEprYFHZnuwjuxxPajA7Bt43GcyR8BwhC8om",
  "key5": "2ktVsbkoXboE7QWuqNWbhVkScpkPPK7gAmFzfNDpUVebCuc9oj1WkEGJV7cfR55bqtUYUh3FHBJYXZCgLAFXtmFK",
  "key6": "5uiHHPGZzKUzCy7cDGZAbSVaQrRwC3KBEsFu5cRqGELbLzz9N2dZgrUFh6vzCLNFGsi53tCTJnZBzKnaLNEU6gQD",
  "key7": "29QWuFTRqoA5yopVDy4YuJDHA1eDNeosNuKH9UKiSmcYcrEEMX29YRMJFbuFcnHjmEZtEqP6hBN3dFtjL385SuQn",
  "key8": "5V1JU3LXwVzE9sSUFT2W46n5Xe6v7XmjLHt7hcEqLxY5AytujfzYPdMEJ32pCxvuXe58LqtjEZ9fqxiTr23T3ar",
  "key9": "Dude8edw2Nznh6g7SzPnKw1Suat9WYDFQrpzmHfCcFGZysV5seQL7QSZBoWpHbYmC7qQ6eXXTH9bao1q4PTya6S",
  "key10": "5bHgR3HGRareT2UkdzoeFEexhDsaEpvRaehHn3DqZ1xgWB8w1RGKC9GE662gZXjSniR4Pjvxz9dgHTZ7sP2pU1BR",
  "key11": "5KDR1WaWZT8tCREcgUQKJCkcy67uVxmsBc8RmQsFZ7BHAobwx6E2acm8GvaLxea6ogUKMR3YQ4WvQs9Wd4DNqxUS",
  "key12": "eiiDZMyjXLXuD8CkKjnNrepz6Hc2bwDys4xD7qzAP3LDDKE5zrok4mgeAVwVJ17c3Dpe8TGEWhRWfdSRSnc9Cbh",
  "key13": "5xe5QbZMu2hXKZbeLaENRMcYjPjrfMsgewFDjKZEzeQgJpQiZkeRm81s6gcirUJQ9m91o6ajEWPNYxx4i584wpwK",
  "key14": "5LQqwcH6ejD8yd325HQcRBW7UsUazq9DwrktCiCcESKgdo7osQP6tqZmoCSk7HgvTyt8UR9tyNbb3gdMFHCfCRDH",
  "key15": "5Fgk5L8z3bN8KhMyeqBonUY3QhqRLj8fJFauRqSHGCXRzPwhA6Ho8rPWLfJwoXN6HQ7ATR9m13MpuxM7urpbfZ5b",
  "key16": "3wnGR2pAPgKzMF2awVTJBvMS92APvMXWXaMEY8E1NZf1WYhsc7A52jcpQwXRPr8eBQkKLqV6vZRFMSGsC6KdXUtf",
  "key17": "teJy1irgDkr9zGYkifc8xC8FyokC3G46VTnSa78JhEyZscf2Z84TBznssnFidLvt9oy42UVbP6hYZhwHiq4iT67",
  "key18": "2ads4NmZ4tEXV4s8u4RFn6NtHjiiL2raK5aJUfRR4vhr8CWTkk1mwjV427794hKLHttDbNVEDJfgrwX7xfaKr9LJ",
  "key19": "7spHAEBKN9HYHzb9eZAkh5GCKczjVrzjohdxPPubJg8ATAGS5qUyjK2WPoy5iBQ8ZLT13SoQAf4qngr44R1RFuE",
  "key20": "5HWkM9HCLA8y435UZo68L9bECz9Y3S2Ky5LMLemZNggHDhccyPbufwBNNyUXhA1Y6BZdeibtuZawSMLTwz6iWKp6",
  "key21": "mboE8Sfm9dxGX9ZNAdvmp1RCricXAqMaWWcz7LLZXJP3bvY6o5SrDDtXnawQVUJdbkAQmYu8Fb1w7xjRGD4Xb49",
  "key22": "66WV9kjhfdYE6REP61Eye11eQwpcQEew1zALZqhciGtd7Sn7BV74n71xoMkizRk7kJ3xhqTZxxr51uHEDcxconEW",
  "key23": "3Tgki5NT87WY2iJPyVvwJFsKLjrsKyyy2LZiHpktnTiXcn4ugdFNsSu7tfQWHesrF6hVaAUWZgN43pRk2wJhsaDk",
  "key24": "deSvGyLWo7kB3qTQSGtCVVsUUquaAPM8McvVAiJwd6L3utpkcJeYTBUVCNuf4tB18H96oUHtsFn5p9daoCQAiuC",
  "key25": "4P2r7444TDED7G1mFQdCqGjdsyJhGLfu8LQu1ThPj4q7WvipbRPWL3ZErd6C41hN89CoEGAin9TZ6aXxNesdRZiZ",
  "key26": "4XcTHHb3mZ4f65pMBsWCPDFfhE9zzjqSEBaGsQm11bRLN9NvDmswzunFmqmZ3AbSuyxv7MnxhiprLXZ1tbBDWQvZ",
  "key27": "5Y2jN5ssKLsrPzV4nsF1aVs3rDr1HHYsGqxpHjjJBYnDW56rFatScdW33m99s2rPRfXPDjfjdqWDr94udNHKB26f",
  "key28": "2XkFJa8r74mMwfHwS9QAsKxhU28EqUiTAcQa3AMngxsQVTYLAnh7gjKoJL7L5PynSXs2yBwPZe58XfR1FKf9NU91",
  "key29": "2jVV1oqpSBVPdBi85Mzv6TxksoViMXcm2wzfLn2erwPvQ49ETpBzp4Hn1xFCoXkjSE1V8tuXYvZ9AVDRGi5XnDEh",
  "key30": "5MDYDPnSNd75ze3EGujQhzrijh8H37Kfyqx36xfzm1LRaEiNrUSKZxdkvWy46cqaYXfF4GBb1NaLjnhvFbXKfFjY",
  "key31": "5kU3qbnCC9DohZ1UMZTsKJksC3ddL53UBBy5w19BcYg1qeaut6TTgfghT3cddQjCFm41WdKFzUhiRdjWMS9wcohT",
  "key32": "23sX68E8TztoeMsEJmEEtTvdjTs29PrkPPnusBqB1zhhgWyChVzhfA92SytWuzbbqvsD4htWpC1u3pEieytbf9yT",
  "key33": "yVnNUTSBd8KUPwRbWoH8xgdw8eQUBaqngJJpGA3XRZW5gSS5W9C4bquU7VFzUCtsW1nmCfd4xuw1pF8H79bEVLa",
  "key34": "EoFK4D44jhPJpz1YnLibFtQ8sGpPiyCox3qjD2UmH4D82ry8KcKy4Axb1ZdisdCyHDrHoUexKzy2GpWEqj8myf2",
  "key35": "3bHSkajfuBFLffijgpAcKuajdm2SyYUpT3ir12riU4rUSPHzHSew5rMASMdNcBWg3ymkghcMf2vTyytEefALKfMo",
  "key36": "29R5L5fAotWmPjGBkmwpYEDiSMR2JZ5DfKgQjG36Hug6sjVHH1dQx6HrUm9Y1nVfQ7n7QhrkCvzoZviEzYYthVUn",
  "key37": "Gn8PQ6zH6n5cYj8ZRVr78M6cUuTmmUDPc5CTL9rKyBX3teSuT1QELsb6zE41LduvV6N8rRFHJzZKvWpVP54EXre"
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

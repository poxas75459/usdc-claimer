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
    "wgdTyG6foc2MPf9t9HLDyVTerVrHayCEBsikjNzKYNwCKFFzkfUw54mLm3HXdn11o6BcFn3q4xtw58nc5iDQ6Ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xW4y4sSkUPPD3XuwFJ51VGxzR1DTrPisB27nxJpbBosRhiZDC2ZespD2gLd7U9yegLAzd65pgCxA2pJsb5nNr3V",
  "key1": "3BAnKbo3MkCzTZhHJbShAWPZzajqgZ2tq5312gtcYvptrgNAUxddkFDQV1vm6h4B53C4tk9VdxzhpWrLzm5z7Y5W",
  "key2": "4o4JQ47u7muyL8PYLZX1ojW2zMf37LQfFj773FWqfkxVxd21gnoB3KhnsGdAwqz48CNddJFoWmDFdRBFwJm78Fq5",
  "key3": "XUYTVssWDTimaYhEVmRbmoXGFg8bjsshozR2Y4sGFisQynVXcwbgxwUG5E3PwU3zNzYAHwtCsqDMfhsChdZYe5G",
  "key4": "3YHGk1r6qbymRkgT2nHDtWrJxkLqNbTq9V9VFALyGdANeBmEMvTGDFfPakuxGd9uyJJbxntv2YLXMQ468oBnpedD",
  "key5": "3yijWiGfToS3XK6EYJKUiGDXTEEaJtMdE9A2ZkUr4hvDD2LMX7VDv5eoYdGUEF24dC2ahFJUbzknVcwH42ugefb1",
  "key6": "3Ktm5AvvcGveTxmQVcn1wxzsHdyzwtNGXbwuUGokn6K8kNrbKjNoo8kfWY4UagPNmFQMKdy9aYjD2jDyoSA6XJpv",
  "key7": "34ETU7D6bjzC9FCMukBYndZC71Xt5x8ragYak4G4pyC8nMhyXUTmXFAs4DRp1RKd44hVCARnHkwaYweAwgtEBCqr",
  "key8": "5GypVkQ5AFNmxrHxNdSdFjHMWdBMq2DBb3jYNF5YDubwhdvH6Yc6D1AXUdqK1GmYnnjgejzpondj5ym7kMunCPLW",
  "key9": "KxfGqwjG1jVqcpgdhQr4TA2stXKqZxGwbap3i9C8ByXmsWqqhXgydZ4zLpzzFdVv3KoFjeQQC6L37w95Cx12M2b",
  "key10": "5hSxAdJKyRGKwzdJn2rZCjpAEFHf9QfzdnWgHfhFoBdv9Eschr6PtgCUQEzgek3HG9d3rqz6hDLokF5SBXM86tG4",
  "key11": "3N9gE1XbcwobgCxfUcocNbCKNkKgejJCvBi3YAAix1bJ8zQAsD2fhA4v7JqwFBwfnzQyH5LjeBRNBSoTA8avfuJD",
  "key12": "2v495ubeg86QbLKtGVKejtFa4j6D9zSApQyppBHpTg1DmbEoyMGyviEq2mdR1XQLnZjH5J9gkCZ31v39uD58d4jD",
  "key13": "2JoNQLPeMZhxHPXhLpp1nc2EynnHBmwagPtz5cCWXabZwJsj5jCNNprMMU5XJJDVXoFKtzV5tA8BezPZQSV9gDfM",
  "key14": "3r6EBj9UkJszQz9stUdErREVvMd6FgYXGeVJcC1UKNaECNYY27S7mwTEU29G3jXapLY1YLXTgchqsqo4Bk3Fq9wG",
  "key15": "4639USbsgFcaSTP9aW1FYh4JMCY1s5H6nZJRJCS3SVKLqsz1tAswyGBy5wgNwRENnKSxt6n6zP1BoFNrF6rJ7HuL",
  "key16": "3D5m6ifkQih2Y1f3dhksn6UTHsCexAyA9q9ib9QKhDNAqRmPuGs4g7c2awRggrzz2hXrFxDcUA4uoTQLR8r8qeqC",
  "key17": "22Dy5xF71orPyS1N2vsUJtewRQSWHRnSdQpYfy7AJd2Tun6WvBcQqDTrDLNV3retV37a1wTyBWAa1cK9jPTEzhJB",
  "key18": "43fnKiVNsVAaeknX6sprvxkMfqNLF3kEUTg8bDj9KtjezMkncbAhTjeAhRLxpADKEJA6khfpL4X7HBqZCNj8wtE4",
  "key19": "3Y8Mbw1QfYfoAuKFxDAezyGtpfmAt42o2hCWfbMVmesSLsWg9ZYqD4w7fx1AEnbFA5JHpkKVgXvKHoaumzTs9tkW",
  "key20": "5EtMXPVvo8tgAZ8sMCfE7kPLuzvr6VNXVHHSrENowCSgSgeU6SoybZaSfvWGWwipv4zWpZPa1pycyeTBmdhxNNmt",
  "key21": "4YdTLYa1Zko223ZqHAMY82Uo8HZAxrPY4s2yLHKhqmXXjAMauXpZofBpAM9JXs62u7LDtP46fVuJswAK8DNwKLNe",
  "key22": "3Xh893UmHWaRjZvcCJpQWmjFpM648p2rvTuGm2vPkq5WXrMS4sTwJhEocv5C4HHg4o2SNinyfLuwngS3GWUDrzv7",
  "key23": "fJispd4K169RRLBat1sLa3Xb9C6NDBZKcE7toEmfKENTqkasb8zy4dB2xfLYmt79RY5pKG1LJYQj3PPDVmLNFbQ",
  "key24": "2T2uKRS4qnVAMQYMRiTqFRTGAzrnF7bhizVscBPbryLgEaHLceV2An7HyZqxCvapzXx4D76BoQDoDgu96HxWkQ4k",
  "key25": "vTKyeA8Px5xXMRJNZmnRnB41CVbD5kfhb3pU8tgGyMqgtTHWzdAvd73sj31nHwDagpWWt3iuZ7gotDrQhDzfsrg",
  "key26": "5uyQA4LDD6AWYSPTd8NspALVSaxtcXQZnbHdQEppNfsKmzDSZBDCwU6Hzbw8QiKYfqWfed8Zfb2ZDkuUqQ1vVXJN",
  "key27": "3dMCZWUtoTZtZiGccjWxaboQ7EB3ADbbCD8SxuHt7WKWCnDDbG8kbBbgY96YjDZNgrKaxVwaTr4B6FTEhsNTY4W2",
  "key28": "5nKCnM4D23eTZztfNarWR1mDrvCUQ4kr9RuV8UXZCUv3YsMfLKgomm2vrCCXTmQ6ZhUF4Dc2tfMtWRWYyUAsPKYQ",
  "key29": "61VNZ2hSyMT2tXXYf5oob8De8nDgaxoAmpYBDFvAA3ijh3Yxahr3KN1yXEGxodtbVASAaf8BbAK19qctNv6xdbo9",
  "key30": "5koLbMkF1LopX5MtbNmBdMkXcdypvztUJzeA4vBDLKRD7RQcH6Xoy5z5mVAQv56fCjcTinnCaV4E6PdyKqyNcuMd",
  "key31": "5qPS3AQWt3LRDc2WceTixZC3GpyQnX4Bs947q51UqRMoXFE2TDFi1ihfZs5Qy72EjfsPWo4jkvEB3whgFqdc84th",
  "key32": "zZeWev3hu1yC6fi7dmksv6RNPKMicqV7x7Jy8HxMbUyJKc3GrXu85ogN6WUfGHerWHVpAzHREuCTtWaNAV7ZLpm",
  "key33": "5wNwF6QByBYbZDbLFPo8dawqBV46wUjvQ2Z8UXY54UMhENLpzhzhdEX9cwTeTq4hKFanavLnnYRAtg1x1XUEeyk4"
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

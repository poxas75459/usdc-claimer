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
    "2WbyuvWwQFSn2JUXtJcCtYR2ZEzNUXzUPnJaHXkj8du537M6i5LdTH6rmvJrdx1P5JyFAug1WCQzEmYVpsm3FhzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h9hkY7Kcs3drArca2v1yRzrQ3Tri1KQhRqoix4TtKV3f5J7CaHSR4ZhiyPLHHvBAMEs2KQyQmdnZnGau79AbURa",
  "key1": "nendJ7NirVGG49ppUDj7gxF2m8igdb5TSzdc2ktCdnZ1iQhnqEzqySmgnbDUbWbGZ1kEy7ViLCYZnNoUu2h1PKL",
  "key2": "5P291sBR2VzRTxVsJJdhWPbGuxvPA7vB6qeCdttY3X6gssyhRz2hxa7hwnDPEPqgByqPgAQWFPLtoT41yfc4m7dT",
  "key3": "67PQXrjPNgvUGkBgLgpCMrKf2vGf19fz2mFx6ypQmZggxYxhS4hHeYeEpHvFnozJtfdeQ5GimNBryNhK3ZdzNMMY",
  "key4": "42xiG4eW4m9Kd4AEjSV7yBrL2qUfaUS8X8Re5AzUJsMJJnkFdLnpJJn8EwAupoapZLDTHBgZa1ofof1oYr6N7Ymf",
  "key5": "4YLf1C1bnEDXjSdxSFS13nFcuSWh7H4z73NZLHFBZ6siUP9iP8hbCDzwMVp1ask16KctGkjDMpfPxTa8XUxnJeyn",
  "key6": "2KPhahKKvcfZ2aak4NSrpQsCyyqS8LBWPL4MzLVE2ns3BS2DpHMo2ge8hFbhqGLkfJYkAT7Zu5hT8JwpcJswX9LJ",
  "key7": "59AQQDwVPSGnTWtBwWtfwe8AQowZHvaxewtocTFyHFSRbqZSKzp3GnU5CK84QQiRaVw5q9VuJy6NB59Wd9G1t7po",
  "key8": "Lu8eh36o9TUi3pcy2uUTkuhPm5jA7cAXE8fM2AYodSGuTwBNofhSgr6UwbQQvBv1FybCZ3h5YSYok2fAQKSy8sj",
  "key9": "4v9seW9aV1Es9Ydzug1k8YWy7akyFcrHziBZwqbiaPrARb81UQxDZHGumC3H5R2E9LubBiHDfD5h3iKkvLyQxhNZ",
  "key10": "36xmx4RYdukaEVrEgvU9AmEh1JBpYLdS2mJBdJXyBFHVqqmj3SsQ5Mzgr7XHWFMYHemn37PZKWBGsf8N7X8zfKAe",
  "key11": "4Jx5DzE1YY6RDAx8pkKTMdsnKrszf7pMQdhjFFFevdQnBqRYfbsv4JZBZozPVwGARVEDfAVZKhHjQLfEuDDoEc5R",
  "key12": "SLDiYi6GchiBjxmETUEoHfP4Fd1G6eSJsp9VmSsN6u5Twy98vZmYTgzvrrsybha8M9ipPHDNtVsrD9Zj3NDKyZv",
  "key13": "2TY7ubRyb7N9setYcST7APnRKJYkLw68Tenvd57VEMZdeihjtx1jQvKaenrfmnyctqiwKVmVMrpBuNKwKLcHSieu",
  "key14": "4n6bjSWzFpkofo3JgiEpzW6qWzPf2dhfcUs5fssKtSHLXoeNimT9df1tMJenJvHjPZLBVVRoWp4moS3RjGzTqPTr",
  "key15": "2YyRewFoeSC74Kiq84TLSGTur4U4GCawnyecCiZGcakBvC2JtH3y7MBYdo6jhvLFmwohHx9GMQLiDvrYMqauPgDM",
  "key16": "2Fg9mpVYFkyYQpNGzkqNARR3PfDFiGTJhpc9QxZ7AQZAveZgA1VSmeaFAfBbMjv4mj2CYQENZBhdAMktRsVEap3S",
  "key17": "5JMmDAFnMZJLHP4DFxTAYvvLew7CkS34bz96x6ZjUxnihicRd5uMgZHUjzYTpiPdjEFviU8VDtP3BsghuJDA8VCs",
  "key18": "5fKpNn5kYTuYrFtD2CNANw2E2tHinKkcaKofDG14CiHeCBDN7yecMq9poWiEzHDL4W7FUHTvgfvhGZ5T6j6T2P7n",
  "key19": "3VGvi5nEwviptN3Wb6h813DxSmjZNjDanyjJxcvrQQYhc2HU4HRzLhGGzhx82W7C2HdwfArmc7DtuE3phArBSUuA",
  "key20": "3KmL3M59e2mfZwALnApGXLGhA1moYnntkHjN4qQbvkCZtDUZLUFdBDoesLhCgKh8VD7e7w3jFYLJ7ZkDeUmTJnzK",
  "key21": "28UwzFn8x6jWBr59CDLi9T9nnaYJyTtyZbz23TTjhaqW61fRqczFVnYgRpdGznZGxjnyn9mJR92wrKdQdtcEiRbC",
  "key22": "48SEeNN6QRKkC9ZuTSnhEmUKmGHEEgQP2bc37CQU8miEQ6H7G56FCHirLQRJZLAwhA1BCMEm4hSuubNhNZL76zym",
  "key23": "5G4eBvuycFhndDhgDMXBQZCQBhtYqW7BuVhLUX5gxzWEU6AsL94eVpKrv7UZPozr34x8N28JhNDXYJEaLedGSrUG",
  "key24": "3bcgHDR1GFc73cHrc5Un1WtcaDt5WY4RC5awkemXKDvXt1oXHRZ5yYJLd7MUe4ck1FgH6XYpHh6o8EwEGDMDTnpd",
  "key25": "5rdhozYp1V2VRP2tVj8WyHuJspwJgC8y9DtxrGtTThN2nsJsMDo2XssSGHESg3A8Uyq2jrLDwgTW7Txk6mv8wa3G",
  "key26": "2MoVXH2jLZeo2agHNFmG9wE4JXTZUsuJMFscX39s88wcuw3uaixzWiqsHikjq1Jyoij5ZUdd8NE2BanaYQdwtvuF",
  "key27": "3hkyC8ZKRRyUNG3qQrnDcYR7AEwMgiehe66TGxWMALcEPX7Cq2jkrMzb6TxKgNSp4CX6kw85FCmT22cCXmEsGVFo",
  "key28": "5BrYRPJqp2pRJNrv8s8EJPeikvMLd6XQ9FN5sz7L46mAfAWiua9bVmKK3QmA8AWRLu2m5NB2guFFvALxL31SBxp",
  "key29": "3RPC2azfEqCxM37qhSUwFEi3u2idmtB7p28i3Y4G3LbnfhyXtNDREQGzambrZxS3kZ2QRuBuf9a9H626jzWJFspd",
  "key30": "5tqGdXC6GU4yQWdKseWouiKFMC1Ug7fxJYAnWbnyxtEUJ1aYthzsuuW1oSG63UgPFBdVqRsSMzbCUeC5nswUn8AT",
  "key31": "5FBKJ841AHrumbNeg1qddYMJ3hjKXKj4WSav9DWzF2Dpyj96QisPt6hmVrmNkUqZGDvVXSZ7MWNhH65wP5vuSp4A",
  "key32": "2dKWCQoikkQgdpuNDCVWdCWHtmzwwPFFCAPDSsCt2bzc79iEHhQsMQFWh5AYRQfpPC5iaUnHVuc6FBhNU4PApQ4S",
  "key33": "5ancobMjWw9BFR2cUue51PKgnkAnSQehABkx5phknynJJ54skc74DoezrbTeKZ5PU18y7LUb8ANNZpYw91pyNtda",
  "key34": "3M9W16H4oYPNrc29WXD2AUA29ixHpaEXuSZ8d3JoXpJiQWsGwCwcAaw7zUmsSRARjGDQ4m4QwWiwf17Corjhqhet",
  "key35": "5paktF3q5JsPkXUC2RE6L2npRfdWscVJPt73kmkHn524QCkyPKZtLmL9AJAstLLFEYdoj2AQdX1zs4H315j2M48k",
  "key36": "5FWYRanDeAZ5m2EF2dQyR7Gf9i2FYbi4XwA4o6BSFUdH7LLYCjxbH67gyy4Yd5qAWQnjv4vTpZkbvPwC1QVZuwZN"
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

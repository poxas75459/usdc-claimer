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
    "35hv1zaw9RjiNmPKHSyFHSf3seMPgYpDCcQZhcTG8HkgnTjkGrZdouGev9AfdyDLjzStguZx5yuxxBBogBijfpuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DSMeVELSwVG8SJ8xkWwytnso8Evyck8w6iAQEFUEDRu8CTNkdX42DVUdHQEKeSZHkwSf9Gq5Qe9qfij8WoUWWiU",
  "key1": "5NVdNtLmSeWpTmGGds66gjnxGC5sy5rJ7oBehNU1FAL6G6egAzrA6Xz4PUSH4XtP9EVD7hFYrs36DCJ17ebbbLhg",
  "key2": "2uAXvMXU97c3ZWsiPeix5f5ChLTJLwphxDPDdvha3UZUkZZvqXsG2DyDgtnLUjybW6PFTbnZMzFaeEJbodntLmpp",
  "key3": "7PtJqxiU8aBmxU94SRHEB7NhqptEc8dvry2z7Rye9ftJAVMd3YwWMZ8mM96WcukDrJ5RpvReau1br6hBkBPqtuj",
  "key4": "5cqhAUH3KXHQPXQSwNKvgafNnu2FuX8gDjk3qSnb3gHfKHbUstBa6YCrmu8VpveQjX9cSx1qPtLXrPCVqmDfca1Q",
  "key5": "5k4UZ9saBiy2Wf6uf4qrhPJSiZYRW3NSy7AqrWVVuBDF8kQep5yhCJCHHjGrxcarFYiLXkEL7aeFGjJourdHcdNL",
  "key6": "33ELHmYejSZtAtQPNBk79URvgmBCSf3CyU3vVd6BpMEF65AovrDBsDTQEKz6LSHXgBnWSa9kCxiEvERPnjWp6qHn",
  "key7": "qB6RdiKYLQmo6SFLvCqB3eH5UzVL4pLRUbNQtG3pDTEYAWGmS1CFbhRRN1Q4Cry2h8Fc2RcUyk257avrbyzKbgG",
  "key8": "5hD3YNZcPLkXv8FPeB6VBAH9A2mfNkR7t3HiZjXtGdmDgftSo5wcRU1eWRVix7iQQNCq2YxEWxCRRqEJFfxxi4Ze",
  "key9": "2cn9N15oV6eMaw7DocnYi3y6QcS4YHBUbYyjCocf8Xa1QuCULHHbJMcjtk5H8s4wQm9PmQeAW3fwNBvbd2z4Hj47",
  "key10": "5d1kg65iEoTcwStzJ58NUFUTdbQ3AFxVFYsVAH8bz9jqeAGcrJ8h6wvJzDnUnLLGFpgkKRjLvHGwfavpQqWgkXhw",
  "key11": "2PsKwX6eXvEDVGQtCgd1NYYu98PANPkWU8XrtmVgq26hYHDyUHqM88gA6g3t5xGEXn7bVAjer2rG2fFuj4ofyvoU",
  "key12": "3SJDWB1xAE3msLJHiDRTmbBgw2ZTa2yMKdDesHbsESA33XtVRcqtffBAnfBTWpExCs4ZxBYkPoDp99daD9crZkyx",
  "key13": "5F6Gif2LGkaPQxBZGyWWmUWApuRVhNJt7Ze5KDNcNTnyJfMgUwBvxSxEgCjFykKoQCnp8dpQNviXnaES8Ejn9Huj",
  "key14": "5JwTNf7sYp5t8QpzKeLZqMLuGUucJGN75CXwTJ2WZ4ZDe2tnNnXgoGGS3uEx7tTVCEpKL3bMpG2ojKbL5L2321gz",
  "key15": "5Qg9fK3TuCYZLPsKASHebZfNvtZRK8HJSQwB1YEcZewgxKH3qAeMX3HttnhdPa1ESzfWdJi8KRyUyRyYemzkpfwd",
  "key16": "547GjDLYTw19hJsnij2cvrBiA13Yn9BAY6zZLgTAsvQT9iUjKEAUg1nMBiEyNqCwSEUGu1VvGwE2HY5P7bjsHsQG",
  "key17": "5DgJsD43phoq21NNodEzdSpFx4EphNC5gRs5DBTvMmovQnk2udC2cYSJw7uygvnSgPUzLrQ863eZaRaDB1AJKW9q",
  "key18": "54yEiRwz2VVVJdfpwXY66QLxLgZLetiCtKHkPzZyaXkajBWyfN9kvHsrxDPJkjwMyv7eWNivNyvPR2M5ah6nVECh",
  "key19": "39RUPc4U48pguRc5LFTouT54YnncF4Wyvnd46yiV8LL7bNMGZXUxaB58ksqg7bZiKZy6Su1z3pYBDu6ugCeDspPb",
  "key20": "9m66UPyLdTcAnTuoQ7i8nM7VaHbCgRhYHkPy3GF5JyWo4PZkC4CQqkfFZFcsSUjPS9xFk7Gqr5SwdtG2mqqofaG",
  "key21": "3zDv7ryL6TsMVojEyjtjdvpHevBrt3Rc2LZbEyx9SFnJ5TCqMCdW2urHk8qPGaY6VDJ2JHnMi48HBb5c3QwfXKeh",
  "key22": "4JexKrktgTT8sqi3wwiN2v5jKP5PNKA1jvMrJL7iDaFV5SPq5vUHALAvKCXWYb2ZJw9PoFHiXxm3p9qU5c9ULa9c",
  "key23": "SR3SXn4S7v2yPUADSFuQiKCFGMa19ECXpFbrzkV6mrxQMs5DG39sHTLANFm4UazGayzvEVHDVBWwt5Ddxbfv6KT",
  "key24": "4dBCtsZMTGW2y3qbCCE6TdKjZGpS7V1JoKatz8kwvnG6f1xJwbZjdmn3p63uKYzWUWUxydmT1NspVLkByxAcP95L",
  "key25": "2rLgnUJ7jkGhQhrbdfo29hZuAvmQYxBZFW5VnA8DuMJhfBqX4LXZTW2an77H8p5CbGMw8rsLENiG9vJWVsyjpqPz",
  "key26": "2gz9a8ypQcMMRGgdNmBCD7Vdqferi653UdCPujLNYePz4X9f3mRWTKDtyw1ZNpzadnZ83dVYBbWT6HxFDXg5Vc6m",
  "key27": "2TX7oJDrt47GS1QA4Me5WfwMEKxrwvoVTtcdY37GPAPLrV1LkkYAhYQpuoQcCqGFgf1BEHr8PFYfp4XtxzsNUYWN",
  "key28": "2hT5zpu8Eigro6KjjFtVmR4WzXMqVSZegEEpxQEG5ahFsBeM7iWKFjS4Qrix2xhNQs5t9MunCXos32uTs69e2DCd",
  "key29": "55hqMiso6kT5kPN1hpx8Ymac4fxk7kgZN3r1GmmWZ9AjrayUiq8uqVsFan2fqENoMQrRxQ5ZT6e4ch2axx4CPvBw",
  "key30": "23XuK7Vncu9RcBLqAbSjFXF5trmo4QhvFxYFtJ4LPUcKWKArFzQ6Dozi5Ege1kMcefDmguTQjxHLERs7hTWdgArM",
  "key31": "2oqvQDww2SDdgpJXnvtAnxyjcGrNqoPck3EQD3LPpKhXDnYXZuqCkYhoovomJADL7YME3HTLRPN1zM4BBkefzX5N",
  "key32": "aazbTCifJkHcuG863BM9F9ys4Wiwh7jA5WSYETUgyzXyNiuEvAHCTMcNV76PLfmdgsmSezVLUHLq8QTsLiy5Zvy",
  "key33": "3wR5P4Q3xRQYRKDguV6MiJTmoQFgnQiLPTFf7QE9daC4b6daykdw1M5zETgC94bSqLgJmPfNormKwpDcx45akbiH",
  "key34": "bX5SYFgr5JKEyiHFtFapJzmsXJpxPgYbBo1gGnUXExmyMn7x34Eb3BiYTTAAj71JPRcsyUzvG1qpfZh2B1nm7we",
  "key35": "4veRGUnz2zznbiFmkAcM5Ecpi7VAHFHzAeT8hREbV7CqyWyt8fRd9rL7xtqrkbvf7uGqTGH6FCAnpEmQgr87bk85",
  "key36": "3nGDMVpCYceThaybCRQHT3qNQLfqBsu7wtgWzgt89LerPFWsSVLvca2PquP4AMZYerBtE16KxZCwVTwAuJTgxFFh",
  "key37": "2yo4TFKXMLrBm9JrXuRoQX3ZjSDwoo1ncv8HgfUPu9yLSF1fpfH2AMk5yaMzQx1SkXwEFVFmm89VpjcyMPAkPiRi",
  "key38": "3fC9RV5vdr4RyEMtExPUq7zhTLMKE3kWbrpzRkFnf1JAjhC5JrqtQWFP7pHfWHXT6Xuo6F25WNecLaAsNeXumdTY",
  "key39": "pxKaQ9W2kgdYtH5VdBXEmqtrD3sc73BzBPEsTdTR7H6CzfQSXPbyUaD6S92RoozqhBE1w5qBoDsrkAQqVMMpJHq",
  "key40": "5wcgrp5qzHrKs9fsNfXcHS6iDPbXe1S91jzLE9jUDPgua31iW5EQYQmPNRi4NQUQ5sAax8qodjt1Cjx7M83zFRGa",
  "key41": "DrsqkfY76rSe11QZ8DTCTopr4HicZLxhEE8rYrKu3Gma9sZ2opcvSMAywe2fuHF1osbnMAkKNuBtWsD5Ma1y22b",
  "key42": "2e8CgpiXpKvefJViN7NTTTCPVQcQmiVV5taT2FZcd9knfULPrNdhUFohg2vdJDiVb59rXd6KHFhrggvyvqyZWWL4"
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

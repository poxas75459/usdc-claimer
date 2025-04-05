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
    "5TxEKcUSJjM3YRhXh83gR5vgUpCY6AFDwZHTbM8xGj1xxcgTzPQXLPpzSienzM8uBioLajpFWMmWCUG54epqF6Jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HBaEN1bRQqUshqPCCHLdU7VCA9dnUr7nP4oViarHShm4yKTHWnvQowp7RdszQqQA8HYQ3Kc9qLhoMJU3oWPRimE",
  "key1": "4XeKxtmtpSQd3UJKotbBoZh4CaPqHxXX6phwzNG5H1MwocguRrTtyTsRbLbYLBzqiRKCtaMMcwwgBkVDNqAyVWGS",
  "key2": "5JFZErASQjnrchMCSLeJcKnGuA4CgyNBh6AouuBvCeXtRTQGV5AeBtPPrsYBqfM5mXY95mfRJnazPhWbFxM2pqm7",
  "key3": "TiX3wFtvaxssx15RKzSdzo7ggeYW2Lo9K5CycYjd5m4dkxB3txxuuTyFhJeJpDjEJ88AMjoWSig4EzdHeXWFBjf",
  "key4": "36YpcriBXf3a6VywSadNJq2FPTb6Xcavp83819AyfyAmDCawgNU99DP8MZL2YxWiXiav8fkkucZPqrUwiXFPXdGr",
  "key5": "5tWQdDLMfXkfc7KtXirqpiyb1zvt2LxbfgFckJtNdDmPx4Tf53NXrkmF3HpzN8786yzWhWcM4X9h5aA2cG5ohZ8r",
  "key6": "4uMSDT8JN5a1DoH5WFqk8AjTAudBEYMfWxnW9qvMPgBQ3W7qKtFS2HK1zA12qPKKsHSKrZyMXHSNjNiooRsQwPYh",
  "key7": "5ugy7UFS6EoREWFFJbGpLf6VNi3qqyB4TBvk2CPqsucbwZ5DLm4n2u39vXckbGyhAPnF9CN8B76vuC1wLL8XxcfN",
  "key8": "4SMKYopFdieFJZESiJSBP8oPWuRobXuc3ANftzoowTr9LEWwRekXRxaaWJjy1AfjaGoes4XA5sMZLYgtmx2tvC6b",
  "key9": "4jm6xMfkLcoiWrsiFg3BUHTJpxPAvsHHhhdnqtDeimSUZTuJA9e4JKspc7zAxhoY172WQG6SpajmHSgW1r6i6wRZ",
  "key10": "3CUsJCfrPNkj6xjHCQGG7TPXh1f2qB5q2fxL4CnJ9LYk9tdX28Na5rYbGVvMfTZPJPVdi8R1qSYbuwMZ83i8mWTA",
  "key11": "2ADztGRDGfc28B3uVDXVUySaWEKzg8nopbYHt7pJ5swLY1ybgN7otyJErTBZJ4yQrb8mSgqdkBJGvkqBGgcH2hp7",
  "key12": "bRHE1TEVTYyxd7NBWW7KgP9GQTrPjkSQMX2K7DKi3eE4NUCEthnRziqfP6D19aBsw9RGwJ3QGoRz6H6sBgg9fQt",
  "key13": "44NrHi5mscLi952h3tiCPPC2HY2BXTEbYWRBjwbw6pm4Wp51Vh4FpjfsMMUdLvTbaMoDUEr76m5DLi2Ub24KEQAc",
  "key14": "5fc2t1z2f7mXMvDmWv2d7xiEHNyeed5u9gNzEDxAyzePpLvULmynLyZ1hgQjAKbCy3EymfK66uF5st5FnWsrjQXF",
  "key15": "2qayhK5oc6dWsqXcopDy4QzeBZGLNRp9B7V3JasyMP5Ws6fbaSnUZa7CkiiRWwpmtfz4wMdhRviEfXroJxed6XMQ",
  "key16": "356i8qGiHTgMfBe6pcbdJS7juW3acWK7HjMZMBMxUQQCSjPrDwhgWebdt7h5ch3abAUs2PbSoaggsbTPTmum6pyo",
  "key17": "3pqDGjJogSPax9CivddakQFNvScf6BjepCfg6RKjBgJ416cnK865FdX173X9RMFjeToto5xsLw7oFzEKqq6xZ2Yi",
  "key18": "5H7ZJqvtYxESZBf5znUUX4ZqDsyKW3dZiXpA1D6SCn6xsxBB4x34CgTfj2hMMuRcfMhz77MxuViQQ9kZNXmvaPd2",
  "key19": "3NN6a94C5LuWxZLHoeoNBev5k3pq9nbmuKuyPQzXK1wVqPb3ReYeb7qHoA2V4ge7yJwXtP9myQKfTg3q4JypoauR",
  "key20": "TEhAef5zuHpL2gK8Qbsd7HgRBCdc9ZZ5pZLDxMBbX4Cevk569CkhTjB1aCvjWfZdccLJ2DFBtqj1XbnCo6dDVvH",
  "key21": "3V3vQfNR28SpXsz8eqZt2xbN6bA45VMA8puHDyUKXyunJjMuXeoY9sAe6ZK66gXMH1gzig9LVcmRppip9734oFF3",
  "key22": "4NSATymdEv3CR2QqS7j9JN2eh7JvFR3UBEGP2GPc3hFYFVyWsW6ESztoZ21TUSH6fTBJK2j1T1GsnbPVQazdRnEZ",
  "key23": "4L5oisYf2ziiJBP8RqoghGXUqYmN7wUijsrerS73puNJ46yZVsfNYU4pWYm1FWmnXS6WjWgc3h8WDkKJRdKdj9Ld",
  "key24": "4qrL6WRjsy7HmVwDm1ibf8xmA1fs7FNFey41PjTWqxXvdgje483zAGS2hp154zPmYmxcXtwKzNV2z2sCbZ9BqQJf",
  "key25": "55V8ADWvHrZc3pdPnNjcTrUer1Bwiwebc7rD1jnksKLrPfSgVs5uu4sPGimu9RHiwdjnSgyQLrfYdPzC8SyVLG3u",
  "key26": "3RcxffwrNC87CghCCL3o5efyspwYWLuuXm4ZRa4okAemYZyN9Rd8SatJsXQiPATutdJQDypBKBtsGRc5pWvCUVdk",
  "key27": "3VNCm4tY2QFjPio2tZQUyRBtYvZj2yXGG9C5gcD23de6CuyZStufJskTL1SEbpKzQgdUxnAwryME6dzTMPZ5AGjN",
  "key28": "5Bqc3gM9tEys6estjoSTTJM1CAKcSRzb1sG93vquSakY7qHh9s3qWYZAKP6ZcSwyDmrJABUg2X7CAsjbxJrxG9yV",
  "key29": "2RFxhjdTFtn3AgU2zhZkQTsbxDhq8wghngHcj1zQPgaAh7y8ciUXMwPP3gTvCbo9YaN7ruRG4xWHqLcJGEtb2uT4",
  "key30": "5sf2MPixYGzK8CmXhZndFFQTZQnxoHW3AjUJMgBjRAdPCXaDZ6Xw7nbff4d41aTpwA7rvsyF2bLxvq53Bujx6D7a",
  "key31": "UGWJxp5EXtbLBtnHgM8WJqoiGSJjyaS27Rxr64axXNEb514afXHL6fiqRyar8syi2ibm3h7tNki9j7u5Cofvrw8",
  "key32": "5Y93hoxyB2GaFNQFiEHcsJ5on6ukfZHZ9GUra5QUQ5rsGPBP8SV6sKJEWzn19bjxnTHXW4ub8iTSh6FdfvCjnTNx",
  "key33": "2YQ9qrZfVTJ5aGgyCMXfiCQ3Bbgyac9oomzXmfGTgYTqSuE98Rx3k7SCUEya8qGAxRhFQshGhgJpDtPxw1NjTVHJ",
  "key34": "QV8ykdnMEdExZD1Dn7Ug1dUDKVuGXX22NpRCNUntUTKEWJDDYQHZcrd1DBfTsqwYfQxr2DwtgU34rXSS8yb1Z6E",
  "key35": "3at9K2bNMHfiZS96iiyshTMGK2CHzGfsuEv3S5KGYGgU9Uof9B2s6nUDFkqQ6jtu9tPRd4uQCk2ccdQqdWNexBu2",
  "key36": "41ohPcfQnWkgoSL67iq8rpDtTDTybcXCP7TvM6ijQKxsDFt5o3uAFdx8gTkio9kEyUptqp5KezAWyuwzpqFcho5x",
  "key37": "gyBkLUHRH5KpiCFsJYUQyJhNzdVksurJwxeZ7knHHk5yCBs3pDsVEeXBuRkepKRcXNJ3hJsGgzM1eCpcZRrpPTF",
  "key38": "2PjJxViujVfmoWmi6wT2HYMhx1h66g2rKLLWmS6RTNZXU9TiWuVenpMpcvCBgvUmRDi3A8oTFm5WXTG5WPDLb62a",
  "key39": "3Hpg3wqciZsAA8bdEWZzQzfA4JnoJKE3FkJaLivJ2xapb96z7apomCHivNcoAs1Ley6ovvtBZUK3RXVbmAY77dTs",
  "key40": "5X4tUm7tsHPpnL8DNBo12orfVAtiucK4zdtTbxXkge9VDyNvcRCyWLopFzCFpwUjUriFLGuzeLw16uGfCnDuijAZ",
  "key41": "5ViwF3pBDCbfW9Li2k9CTuhmnDt4ZfM9cButGw28YRndaqXfVXGb9ttyJ47wX7kSrkYcZUUrjouTjCY13AqHcyxH"
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

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
    "2LREdu9Gz1us7kQ3gcem1cggpKbQn8ukfu6bUMrLK3UqQqNWGZJRMJ2YSTL9a3tw6aoCRsi1GCL2zA7e93Xprz7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GK8gN3rGe8PwR9ZGCZ7oZepbdw6krpP5fXKLTw3KctmpPFGHxcsYLeMDeHhc9vpCBMK5gdjtJSgHdLZKGw5hn2Z",
  "key1": "5rg5c7RFFhcBWwxt521KY6ZA1MJU1YWtKsrwPZhqj2GtzLbj3yV9PsYrQDnTx8J7ynxXeyB6HrBBVdSXnq7aUZcB",
  "key2": "uCw3fG8Ex4TLA9q788TC3gTc1X5v8J72viKegoqBdSnWc8z3WxE2SRJQAonb1PHSgxH8YfUtHkganGGrVwjxfG7",
  "key3": "5cdV3EQcuXMXXFgM5uo7VumDDRXSx4puHwCDab4a897MXUJA8jQqdg5at2tFQJnmtRvyhhXvCJFhp4ZpyuEX9zqs",
  "key4": "3yZsx5sBGprcotwT3Pu8UW2J5rxStsPK89vA6nRAipmdpXB2e6t4nE4haUD2iSFNnL7dxjw6EiVbrjYqNty9jEfV",
  "key5": "wvTUKX2nZC1UkC927A5ygoXyKKjGMuKKefAUWvVMfdc5Q2u1KM24FF6bXkf4nYRX486hBc7WMupDT9T68rociMH",
  "key6": "21s7Vvy5ZAACNBWPYYx2zzTvPZDa36JijvKdYgabpXj9U8fTYKmBWmLTCbnNPQo4rgiqEShwsLkGwQb1fs2DsQAK",
  "key7": "5rhiyH42DxYaSi4qohSu4qA7xy6JuEmvD3yPkMtzPxL8oveCZRMLfa9QX6iiL7F4ChPhwtim9ZMfa7tSTfq7jLT9",
  "key8": "2WnWcd2xsUrVkpb9WnBrbJkZSPGAWzDqWP5KVKpopgbgJxxnhXwSo1KUMaqt8XhsDeu1nveQA6yzTxmBN2vv1HnB",
  "key9": "3XLqkZadZWydr24Gt8NvzQ2z1baFUqWneVGYGrZztgWq8y6rXqQHoTZKuT4jmJezZRmjRJj1d8xCxQDVaBDdkW3X",
  "key10": "vHCvW2fASDQWFaAsf4bN5Hts1Q7i9udHpYfDAHyyHQrfBaYMDV6nrxKKT6FfPcNvGfsaPMjZJxWeo5uYCz753AG",
  "key11": "3Zz4FDXVUCGgka8S3yz9UaiVB4QjPSxFyZoZofJsqCSjVvi6zqMxHebMYq94jgjrHoH8Bk4DLN7apaVThTPwtwDt",
  "key12": "WcjJLojbBerZJK3gqzoisA88XpbhnRSfJj9isbpG33PWWFwNgnBQsvfqKYhaFzyqc5qTeqMxT5bSXGbYspUMRJR",
  "key13": "6RWUFentS2xmq2vZvQkZrhPEZKC6gM6MH6T5FgeKEdXHRoq6kVAT2zRjWUo49cKUVKfwSef4MyTbkHckhfZAo8n",
  "key14": "S9jWJqfMoDYgsgFnc9vcphMttp3YENLZaBufNx147pNwybKd7p7rzh1zTzzFpmWmJSqv3cwv82tHbgSGthNuBpr",
  "key15": "aZzRAfsjX47BfQMxL1ZFDCUmxzw5noxFu4VTJRW91gm9mzUVEiDFBJYXLsNRfPtanmpSF1hN2vSdfybErQJ5Pa6",
  "key16": "7WBAU9xHF5vpKnPy5j5jZXVo2wLKyWw6XrtKFJ6amk2sAaybhQN5x9UaiDHHqfvrpNUenGbtFLy5fajhLxU7xze",
  "key17": "5PoSdpqPaRnvTQZKVs2Nyju1TJatYPSS8UZ9aP9SrXEFpW4totZmerFQMixV9Gi2JB5Pke6zcqMoFeQN3g5kfwFt",
  "key18": "2REYmcffYC6mQg4uS3gyfYh4etviza6hcTRZDsyy34fvGk3hUo9JLNbhBJ1aTPtxzAiLmmH2haMunaYxy77kzZt8",
  "key19": "5YPmSBjdT4Bhecqo3PSEvN7UQodCvj7xXcp2VHL7MLMZgEmPpGqdQ2v8LAk1gTWfeqLaVxE3e5NgaULZsWNeKG9F",
  "key20": "5zzqHZ3zoNSjmyhv7QuTiPGYFzDgHtKemJxRgYxDVYFifcoXMUgTNLetsaD6yKvZxToa71GdbD39Watut8sRpSth",
  "key21": "zRAE6vvbXAkPFvYKnBV1qD8iDGujCaep8xfdWkCqfJ5EbfBbKeDMmD4AHZRvTDLESUcvoxJtRyYj1yR831qa4ur",
  "key22": "4fsEaoPaNtmQbLT7Pt1hquM7usU9EJv6g5rBGYA38Br9qg5tiHSoTKTd9mZdmfkjHJLvBjXmFMeeCFYsBVynqsmZ",
  "key23": "4jqgZJiiSwmqZ1aTZbXvLUudAajFQrdPrVMogRVezt1GBsXR1mUufQaEsWtBLAJkD7eTFmT9JEqvZr7cWMAjS5LR",
  "key24": "3SsXPUsKa67txKz8WBwr18YPYcy2KsNUDV3h65D7cfh6x1tU3vQV7f57kVMBdq8AMmp6WyeCMwfMo8Ka3WEBC4GG",
  "key25": "2RchBw9DuMVLPXhZkB5zSNGCt8QeSqEZcriPxBntDGCxC5pwESbBL2hvu4wXfZAqLCoF2Ab5sbC6WmFYA36rj8KH",
  "key26": "3aT5w83dJn1VakeaYsTVWsLtnwCXPnFHjUcENX4Lpk6uFEZpZMpZqiXp47WDjZ1TYBWanmDQduz7oC3szvF6W5AM",
  "key27": "M1yQNzZqKovJHyJonA2UyUg7S3n87FRTkNo4d68HMBYJDw8qZr3hyYzQjX9ye645YmSURzU6bQM1duqn42VWtmz",
  "key28": "29PbisxzVPqCK47JKxSTnMuMHcGWbKVQC5BgF8h5h7u6rVeZQgVjzGaUEz9dXd3tgrkfwi8XaanBnGoeCPL7xjtL",
  "key29": "5kLxjkhtqQmVujvmGhD6YJUYJifFKBXcLpfCg7HN2hHetsvQcpHSC4EwVUraHpwe4mLpBizxXD1RgCkrpmQZgtZA",
  "key30": "5WXbGZ3ARjTepWodFFkCQemw9FeZuNhmKKbLAjG81NGV9dc3DRDLBmb3k7zT9MuVJFjp9F5PEnJtWexa7Znw34fJ",
  "key31": "37qLFFQCnddkea3KJwwFQAFXwgXSyAhZcmUoPuirrtt9VKpTKZH7MHDzhh33cFWUCXPCNEBvzR7dFFuf28CxwGPj",
  "key32": "3iKiSQikjaHPYxqjPz5uxZXEy7oCxR9wNGXYy9ksQsRz8fMRC8tixFrHN4nxDfV9jQupfjcM2Vx3n9iYQvFmXmEo",
  "key33": "5sPXj1Zqaum8Yy8Z5NuxhhoQEwHd6sY2CZhWKMoTAccZX25UY26dCG94bDAbhdavM4am1EMd4M3Yz7B5Fg9i5BhR",
  "key34": "wXqgiVYKZNfxSsF1gjcNNR8tL4feWJM7Vu13VokLGqDDJD7cKhdggQ8Ntzm2XKAqUFBxo21KfhHyRzo8hhUGXfy",
  "key35": "wJZmvsspwDSkoHTocnHUcKYudL8AUKCaMB8SB9zFAnZPHXGqLwxvEXJs1hefvW9UBEzovs53gPS4x2ecmhbZUbo",
  "key36": "5FhmS3Krd1EM9Ms4bF8C1QCGxGs542ZJ67N1Mbp2cpuCKmBvGxxtCgfWubJ2GtQXPVSCnnz8mSwPfEHywrvzjwpA",
  "key37": "5hyWdy5tNqynRjKM4BamYigj6Xc61iSs6oXjiZ1cP5tbTMQbv6XAD9S4x5jwDubqWTCF6kfZB8fGdK4vDjDznR74",
  "key38": "3PmKJ1WLQGZMRGcp1ATSHXVC2F7SucdHwVWV5y4AepeKUM6gtZ7HUBRTR3XA9TZFWNdx8fs4kWezeJgQoY3AWKj1",
  "key39": "4fQCqqDGky7ZCJu57B6qMGkizMMamAZE4K4DdX916Mbs2T2oNNw6kWvRKdg5MH4BNwCcZ3AQpJqCujF6F3N2NkTi",
  "key40": "VFQKHoXDJLidQnN9LWT2urVJJwBhSjU37XAEZTPTextHbK6wvSTLQAZgKEqawVZzwXJLn6GkNXq2FyZHcALfp2P",
  "key41": "4Yb95ymKAoS2hHYS2aMAf7qcwWDLodBzow7CNJYSUsdhPvoi3nJTzZASPeB4DEV1yazr4awzbv5zeBDqD1dDa99o"
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

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
    "hDnCoPAqp4Wip3Xxmi35fnwT4mXmm7Ff3LCKepw1t4SzpxDAfAgtYUvmUi17BcBGkH78ujpiF3jRosLD1oYHDhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ogbYJkrUF4NMDf6axkVNUnRtprCmme1ksYrzLiRtFVFVdNk4pkeVegiFq34EbBdGpWsDcnEUbPBrmoSMkXJskj",
  "key1": "55XRnpKjMBDFQTjT5emzVPVjDXUCvKQa4o7yZSLz4JbpGAbExeykWrbGper5X3YgKXxKVVg7caf58m18cQVihzAk",
  "key2": "tYs1qUEeULSV1LpV8P1RDApVq2HhRKcrJ5pXpc27eJRvfoH99or8yUam3KMchf172Gz6k3X2hrmjxGFMxScMzRX",
  "key3": "2zojvoMovjMKdn9HZL4HQWRavtiiDP7yh3sepVrjCRv8gsJioqAnos7dUzFu2rcSfnsLZz4BsxXce19iSsSqzTTp",
  "key4": "VsSvbK8FeVU7VH1GpnvN1An5pnaaXfHHTETxWAgMKeAQgDtiCJYjabkCDd7q4Vb6gFgqnGBsFpKnUHgdjU9kASY",
  "key5": "2enCnz1LvdNWy7FoFmhXgT41PjBY8ZmmWAWrfXcf9PTLZC7J8Z6FGL5A91gF3hnoAqFRRA1pbcnaA3Bs4Pnyu432",
  "key6": "8BNY4DFPVVoWmuPqWpoxEFLA133qbaKwVtUoatPd42hjmFh91CSnav57atnGY4PwotxRkvBqp2cJMLpzYbN2W7b",
  "key7": "5ZXZhn3hHiaazqDauYocNq2cFWEQdpYyuumsANSfzuDCdUvZKkR31kmNnjstaAQJyujFjveD3sdqdrstthQpBfVE",
  "key8": "4xAZ3hc5QMtumLmZv4AquAJ1E7znqEHAv6pTX4y4Y1jF6UcRcfBrD1MXXcZ6JBYSghrZJtYmLJzifXoYioM96aGy",
  "key9": "rtLaF9XhKEErshP3BtHnqc1AJj4k2D9gaLJcfsiQWVFuUMSPVXj5hen2rmf6MB3Lncyq6RuPQkCwF6u54SUGZkU",
  "key10": "3MBQDF7LxHWyxYccGjuKQUTpJV5scdm8rEb1MUp98Tbw5G9P6MhEsHdYrXnc8knA1vGX6GMKLhDa4VjWAyN88en9",
  "key11": "YXwmCvEGsgFqSSrJu5UjnWjp8Dfu5iAqSvTeYvBzzaYwdWdzE9BJsebHZnktX9j7JnQ2bU8atEHSsjs52kkbZpW",
  "key12": "2S6Qx7KmqE7QzjXqsGcAfSvN9a7Rqeg62z2X6Cfd8RcB8fUwLtHwquQDgGcda6V37xPxXABDrQbCJiBbNH4PyqMu",
  "key13": "33MU73LN64hhCbcUBaJ2bQLi57uXVi4mK3M9EwM6N2r8gKKep7APNzqqQD78fYuTFm7EFWDu37qRu3XuH8Z2cbvv",
  "key14": "3h65YxhR5nAjs3LmfoSLuXygdThcCpndcQB3kwAHGiJLR4csVuuMzmzeF58vh7rLNq9Vd6bNftw9FKDiEXpidz3z",
  "key15": "3j2p7HWAgAXd6En6uzg7hTojLBvT3mEcpbFpFjJYLdUSUoskCt9nZvn2Z8R39ZZEVjqLiUYUbNSK4rvgEBgykL78",
  "key16": "291A6C961hzoGd1CB48bTZJLVV1nCZCKSM9Gu3EVXddgAwXCxtjscY2KdnbRM4wnRiFHwqStmqD15zVcjfCTQKW1",
  "key17": "4Pgopdo9sB5tGGEnWGmja9NGT6w79MGw1vMxSQ8MZWzCsaLfEPQhHxLKE36XiGgt2XKPrB4WKn8h2hhyNE41vEnx",
  "key18": "4Y9TUnxTfPD9bPoX4B84F3RpAwo3sTfsZrG2KseAY2LG7TAwTLZaBdMa8fTiHGqPmRLp2SBeaeSNnCekbyJ5sJJC",
  "key19": "347XVcVjFr7wSfs2Zffu9VEaUgazKXzBQkQLBLRW8j9zannSsQj1GAq4prCGD4DTLBKgsaHEAxMYVwWtYAJ4LKQD",
  "key20": "56xsmVzV1cWckYrexyYdo1yMe1HRQxjF8MmFPELrg6mcSR9ENZppuo3MTXXe3msVAj4xQh5uzFauqa9oqotavD2",
  "key21": "3kDmQi2sxeKJjPCSy4UjkNcYq15gQmXc63kxANQ1jWLChcM5bTRAso44QeYayHB8iQaALUUfwTJJu16uFqKcjX9a",
  "key22": "39P1s5uhQ8bysAS6XkYk8LYttM4jEfVtHWfCGXtHVKRchCFTq4Q6gwy3Gzy5oe72FBmk1cCRLHWTi9Rn6HUBgRJB",
  "key23": "4Vf4p37X6iihK4e5dXL6dfFxKNEde9AkeSGDMWUCgCfD9zTLgVTLWNsbeouo58duE5pAVasGR2Av6AMDR1QVXS52",
  "key24": "2P5aoC4cDKxviGXhpLSKF6izMPKPhnySo4KFAaDPKpUVjGdVo5yoGeQ7DcEHE57f5HBrsHpNQnJxL8y9rMQc8ucd",
  "key25": "3wXwnaUeFB7cC4nVBmtgJ4r4riNAH9ay6pf2TugKPjrALRQK6snULP9DoeWKoVufqyjo7UKPoiJ4GbpxPaP88zMr",
  "key26": "24tiGzYbFjo22yWtoopHApANt1tgH7HwfZjsT3RsRB1cM2PYGjajGp3QtUUrHuVnKeDzqgCBsK5Rvhm5CY35yrda",
  "key27": "3WYqHCbdgGe3pxkoaZs5gCmThWCj4A79RuTeBFezw97uvf5whuCgFu1HbxziDxEEdYTob6CftrtJ1ZTfJb9gH6BL",
  "key28": "3PHCckVQpNoZSyNE26JDzi2Th69SiLMscgHTG714uemt8EJzj9kzp7dcCctTUfPBERn6VxvKKjB24VCptc8afWsM",
  "key29": "4VjyQyNH2rWhrJCTwW1npMdMUTU1VrNTyikJZ6jryi3R4F7ZPMQuGLvDnv8ti4wKn5werGJQcRosiJ8KW7712JJR",
  "key30": "3pgQVrv6APdzw54joK6oKg5XiKQGrFaHMQbmYpBHsqRdmPPqojGuvVpzSu6b9sPuUuRZHfHfTcYtHCgVtd8MSPe9",
  "key31": "HXTDpgLZcNDpF3qfMYjQ6JHwNQjt8eARtToEoDcfehpVuKrXcqTiCkELAy1c8CfEBfTiwgaZ22x3iaTxQJyQVVc",
  "key32": "5oB39TtQwyCZB1f2DLrAuFWiLYtcy6F3q4EJV5ZeaGrd8eyVdjcqQdJVgL8agLybv3Jg5xiwKabMVewfv9RZMWsT",
  "key33": "3HH9cPP2AyP8Ktdu86BbuYxPvQbqWXEQpojcGSUbTq1vSa1RLJU4MCEmdLAz3dcncrnpVcW1N8yakgQME7fmVNXP",
  "key34": "3ZSNa51fg5GjphCT8fTH4UUQJrg4vxRZdVrQF1oiTtkBuEoj2fHpJJgFHnjwbxrKdrVAifq4i2ZUgkWwTqZjAzLi",
  "key35": "C9rcY9Fd1bfVEUK7DgGpdAB7vfS4WRzWYF4rdLe7WpWffJUWJygXvxWW7iHSwa2P3RSFxSoATJhaeM5TX2WhkqX",
  "key36": "4zKo6Dy92PQntx1m7S4XpQaQhbghdWZo7B1pFDCDkHBudBX25cXgyRtJMXZ2Mmk4Yaj7hBY8TgYb8sQ9aZZjnYU8",
  "key37": "2gRnThrmW4VJP6q1DFR2EgTYDz4MwtPUfH8avBkyFZs5EM7RpFRrp7P79uwaje8Vey5AxPsinGPvcS2aHovAxN9H",
  "key38": "29D6CMp6a73rZeHjJ7fEnCwndeVrB9pDSUAizK8mPJDJMiUJryEfwRz5vDcNPPD815NA1X37j81avfvmuJjcEyzk",
  "key39": "3k9z4iyPXcuRaDH1MjWE2k7gNCjW2BLSQ34CRBpmjWDCnkYm9jyxok29wvdmBVjiVEchhtYVsdzqEPpsnNr2hTfi",
  "key40": "4YzGsuP9SDqoxGUqBuQzPhCWfuSTG1rGCGxEdoy4Y1gvC45r22fGznhh7ugaPMK4QCtK7rPjRvmi1aiEdhV4k73q",
  "key41": "35NZAUfjtphmXZMQPgKssLN32EHUHZGzxBUtxuspUsZXQvvDghtLn8d1K1T3tgCSLVore832UqU4WproiCfv6WVV",
  "key42": "4v8FydnVyQSowbfsBMUNqfSnbvMvtTPaQRYfmzYAhL7ekkMSNdM3hAH9FtXKg4nFN5MgviJf7hfBoY5LTfDm9Z84",
  "key43": "3FZaFHhF7ri93AJUF3EDhA1nxbQUm9dDFGcadpAi8fAUPHd9DtJS5ku5JxSQxPkWakTWyyHcNZj3Ym3XBBeQYzrR"
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

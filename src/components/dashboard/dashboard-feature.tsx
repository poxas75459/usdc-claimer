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
    "3pMJQV9f3jTjLgv2UQRL41Cy4EMXgmC1S9w2X3Noo9g7i7Ft327Q83qDQqUGBjg4hzoj2CEm8XoUUpkwFwPiKgKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vMrGmzEP9XMwSZSph8aHk3qxESPmBznkgzxZtXA9FsH5z9PB8Tx7stqYhVZBWB86kAzEDikUY4ct1yTZN7xc245",
  "key1": "31Si4LVYPacCe2xdhU23VAZMzdr4TmdMSbhBoNLtv4YdBETKM7PbLYPCQKSNy5x9NY4CUddkLnjnzsXwRcxHUUfX",
  "key2": "5mNkZJMKG2GA7EW5EtT1xqqGgccbaLCPk5NPvSsHMKMT6BvFiRcYueQwneZd4nrZm9ZHrP7yZoKGM6UP68spZxFQ",
  "key3": "2yx6QDuQojDDMrp3qsedwP2hP2YPrR2jjEByfT82mpRXhoYXjUsPgr7eivGWmUwTdAHKN4VzRm2i5PKjBPkCeunF",
  "key4": "62kpMATeD3rZW77w1ViksKAJQnXv6jc7yFXA7YsMTJhy7fmAc7EWgMeU3o8dsSTJ8HYp5JaJbggHNBbhbKbQeKpA",
  "key5": "3cjvJ679mDwST7XjVnPH9wh6fm6UPCFJNMv4YMzMQSm93dHVdHfaJdEfopLFR8q9eFeafvbWt4HnwHSLEpax1C3D",
  "key6": "5b4kvKUr8czDKZ2bUf8ipnGmH2FtN4t6KDx3R6GJ3BjoJN287MvwPAQf5BUm5fc7HjgUSn1ykLt2LatsQMdozb92",
  "key7": "5BF4vEt4BLBjCQLnp8yBtQge1LtA2Y1zut9LagvHrdF4jDonx3cqkgLypKuiHZJURfpGmtxrX1M5Zd8XWaHkU5p8",
  "key8": "3sDPypUBoqwqnm6CYHJiAqDXKFSoXGtEH2rKAR9BK2ujC3Ahaurj17xPxnzk4zLYhRoGkeP7qTtwYpkEJ71CWCN5",
  "key9": "4G5yTQQUA1Av8mejocGs5MvyB6GYBHjkLp9hoQXafzDcvDtccaA991LgxhXBvpU3ivQYpuB7nn73hcMJWq38Adhh",
  "key10": "651bnk75hAs7xRhmkAE8GLPqgPThMjWvWg6mL2sa6TJmiWxwmTGnMBmPxqCDKQq2HsCUmh5T3iTZLtKT7d1tzMEq",
  "key11": "ivfxeRmiKgqZNmzescUrsccigooiLsLkS7Q9KpsuVK9GJTJSzZ5KdAVbmJEDGfmSU5e6RYYaHdM5VKiUsCVPMcb",
  "key12": "4627GEuuBdMJTxXj5tH8j38XJtaHVDQLXg7XpfeJhGPa2zTsAnoea3uDqdGT9866AEwxKp3FPFcZy4cxHcnJRogq",
  "key13": "51zYbSDsNnZc66Bf6NsiXxqzk4xDmxty3sfNmw4JZJiej4UBfoNQEWUpcsNCaao2RxbXtKLC9pg8CVB97NVYEMLF",
  "key14": "gAs2sGfhgDH2P3sEUYFj2FKN642FRctiGAsCRW3vXcLfjGmYQZVpbbY1mHzq3ARsGrZh5VKTNjJATVKj4VebiGf",
  "key15": "MxjQWeUevsNieM4Ws1D3jD7MDw1wBiGwcZWDZTAFrzYHhZUct56MZwfKbkYcY37pEhjGbDqoBcSBmTeU74FK76m",
  "key16": "tYNwqksbeb8rzR1c4DcXXoCQfZv9Wwz2c11dDfxLKZxhrNputQUBwVVWMtBpKEod4xPAmvfUtNVtYyLauc8uR1h",
  "key17": "2dYGghopTc7j1f8j6thTswVJaD3h7MFNbmXRVePqbobKD5yijkmHAVHR749mp6fRDuhGx7HH6w98sdXnoE5rQnaF",
  "key18": "3m5v1wQFyfjbtGdtuKmYEfZrCmWvpPyKonq55qebc9ehxUKjErKKzCYrZ4QKguUfbGwEizidEcypJfEpXAP6PWF2",
  "key19": "2SPFiGEC1jHpXPefQs3oqMBVdGrFuYp6THAyiCSFTxr1Veq143MsHQcbfvzt1QtrgWyqVULUDet91wGbpCrHYM1E",
  "key20": "5NRBytvPPdJf9BMUDkxNYnM2SGo5C1p2yJ91axRT6Cvg8zytGxpJu1FJcaVyTDo9wE5uykxcaFh4nV8WEpXE7fUp",
  "key21": "3DLa34UECt5F8Apj6u8eGaTM1uEaML8doN5J1yMq9HZXajvnpB7NesXfhzzeF8zetWpWSATyQPzQR1SdNkdTXBi8",
  "key22": "72r6QWALjg9sFRHi9XD6TW8Libu5zEAnY2hLWxBv4hJ5gF6nxEffP3PvveNxFKVxWLvTZqioKBuwn874Zv3TduY",
  "key23": "5YgqRihswy3jhQ1YaodRx8aMRCkSWQAuTdGU7ATt88BNuzdZSYJPLm5df8994LCDk9qKEGWbR2eCdfngsXk39fa6",
  "key24": "3ibQ9yH1v9RkZtzYyvdB7RDyUSeuggp5ULCmukEHd75wNX8rZNRguN6CxxFeLYZrrpJM9c2J18SGNvzkMNn6bxAu",
  "key25": "26rBEVCwkmr9aNnXitQ13RLULCQ1CzMdYda2dF6PzQHmQFpyPGMppEKUEMZ4rTb3UtgY31HfNoLyKTaAm22RYPsC",
  "key26": "2nqHD1SQwvCtUVV9fRkmCNn9823Pbz4NL7saxpuj9ynaVSULXsEJYrrWxAQsSfYRvMJKGYAGEFN8jR6TTzQBYWQt",
  "key27": "4DYazkfVUumKZsyojn91957grueqs6XLdNqLCEhumTsoq7z1y5XpjtENAhHtDJDgNFcAT1kqdkqGH2SaPumtrii7",
  "key28": "2MWP8jxLPX7UCdxCVamPMsE2MJuZD1LwCszTzfeEKAUKm2wo4bbpJWyV5Rv2vxbWESuwERFCegQkbAUoSyLBriFc",
  "key29": "4ZgJ11ibwFuxMnpd3rcJBZo3Yhps2qFoBXEQ8LxKJjLinchGJodzE9f9AsTqiK8vEabzJkwqw7KFYhCy5FHUiYM1",
  "key30": "47w6jCfYBpEL63uCmCjuX2P2aiiXSTTuF9UiFjiJmqNny52pTqgPPZ4Mo7AHctgXwRdtfv56G4bB8cnKkvyMUhiA",
  "key31": "3Jb9tDCvnhaK1ikmTxx74Y3w4xhnTvgtWqPKRtdu6btzXdd4ktT8j6jTVDrQMkz6gejZS9L2HcqNgx4roySfm4FQ",
  "key32": "2Y9ZRBkQv4PfKyTmHrmGLJAV5DQ63CnxBpMFqDa9vqjvfPG6peiMYz9kzeaK3XnoGrrLXc8qiaq7as9nwbZokmit",
  "key33": "5tKVTtF4K1CuMt89jEyvXP9iNmwC3FZaJxqY1CFKbK3gNvCwG4tSHyecxxLjHzy3nWd1hSurakUCQRsoBeSQKcj",
  "key34": "5iw3XTSj5mcZkRRpkW7oZgLZBaTHh93scyeMm7WGnywbJfsVypjrvoqS7Jzo3W55ieJ7VGz8tgXt8ovPZTrohdA9",
  "key35": "2Atvgsg98pynfU3x37Kcsv2fDPAyKWZW5Es8c7dDLEUvtir6XfzPCSn9P95vmAgZBgcHz6XTke64sSRq2orKNYN8",
  "key36": "5V1xj2dSqEDWiaPMpQ8oej4K1DJPpKu5AjhMDBWc9jp5qczHenAvKJXjApJPj5X9M7AbxHq6zrw5pQPhJQgJSiHY",
  "key37": "284bCBML3Bwu5GsxUhir8BHiQpvGAVkMW9rMZfoR3WsVCspDAH4dyVie7NbwMstBZJjNsL1RSSfaagwjSH1eHxYg",
  "key38": "3twU1LSv9cgjYUPB1ox49hCa7dCJDr6UVQF5C9LjGE3BYUWZiYfEuv3iD9sMNifPGDa3oMCmTics64ctspNTHKU4",
  "key39": "5FydQsgqxqWsN66zHPYxPB1HtzjbmZgQYLX64NtcddWwYoj4MCu3LdknPRu3y2bVquYCp8HEr4evdiq1VTpdZ4VE",
  "key40": "5eBrrKeS24iLG6YM59nJqZphaUtDHbPnq1a2JGGzoGwjCGkminVJdaHhNimsCy3J6Mh8XcAUBgvDU7ivRtCWa2pV",
  "key41": "3HBQFDAbCN78zpyhfd8CvFA71bYPyRmJcP1NQQihfpRWQUeQWT66KtdFTB8rp1d9gUBLjHtZGPJUyFSpVVUmrejq",
  "key42": "4VfNse8JCWpe7fXAzUiorbZhbeG1DXnkbGwZfquSqxDz2r3w2Ac6hdJ9sjH3QF9ZmKuJCP3LB1ELrwJfhUE8U2fY",
  "key43": "51AabiKVhspsR3pQG5ap8jYReKMKuK5KQ1RRhUmAHAFKBU4TUwYvUHkYnhRTFakNXaDoS1NZe4HFBkiMc83y1SYS",
  "key44": "4WineWzrj2XHWKNZiUFM1f6w6XXx2Ajw93KKTJbhtopoUu7zUQPMEUDxgHBCSQrBp3hEm2z4DXL9hddM8zqE7hA3",
  "key45": "265CrJcB3CQBQEvLiAXBRhCdqyHjZ4t1NwHYKxjLaLqTEk1tQ7e3VYwHsDAh8DVfHPzPgnoHC4RVBqgmSsqGGjJt",
  "key46": "3ngLg1kpooJJZ4iRjYf4SBiLTKjaFfhQ2mJXms5fRRWzwYZxjm3PNEFvEaKqGbndy2WwRTLzKcwUWCx5bQadhWWJ"
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

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
    "554hSAdAwaiah9Yf1aqkbHb79oVjcf5qJP9B9PQZjCpMevK6BYYw7AEJUzjd6t4p66DVaxESJbBXpGDHhoemesp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "648KYYGuVrwMQVxQ4JyR14J4k7jF8pDP13WeNFQ8H3AAEZzTQne9PEfLNs7LmM2u78UZZP4JCyw4SK3qweCYpcWw",
  "key1": "2MNQKYPtQRSvtB36VseyYzW31s5AYCgE3WEMt3iqDgFsQeaDUfovHhzVipHp4rN7ysV66AZsdVNsbcBcnHtBYAaH",
  "key2": "4E2VKVPSaewx5B54sWBTYLUhHi8ZCMmi2Vwmk7RTMiLUgbvz4uabFdg94UTzGnPSJ1PNX7mfgYZd5mK2jT2bKhRC",
  "key3": "63k1bjTPE3ruDScUfuLnRFgJUVpd4NSLQHKe9TaqjdbhZgYL97eRZf7r5h7byFkrQx5B5MRV6Lk5CCZPb8nmuN2T",
  "key4": "5pV21whiA2nF2j6g6c85FpWxcrxJmDu5sS1HMp17oFLULaGhATm58AizVPh2SyHEhbPr6fiR4uZN2wGRRv7V1MEp",
  "key5": "39tv7risVHLN9FMtPg96X7UocsiKKEgAeT3QdEhUTALqmFvVeTF2n7DA9vRti3fcWJr5hRkayvSdFuAwURfNRyhv",
  "key6": "4fg7fnfEoQ794ArLa3yyTo9q2CeMuBLqmymG9j3pUj6gbPmgcoyjVBncvL6u6xj9S2NP5CPod1gbMEXWUi9nPTHT",
  "key7": "2oukBg4Q68DoYxgHRr3EtTaqE4NQup3CpMHR8PjeHky9EZjeEB5v1kt8iXY1yURf1Hgew9L8n4UNG31yEyVwQgSa",
  "key8": "QpsqwYmzUSNWDTo6xQM25j2893sbzd6hS1SQkAyMoJ6o5uSTH5RB7e5Rmmok1nd2r2dUBnDRHgZohwD7yqrm5ke",
  "key9": "2de3fkKnQWShAfam6dCJ148usNNijZo612fLQmBWRFHkedhqffq1tz67pc1DAdrpG4taSHDb37jNVymgb48bQHo4",
  "key10": "2JCohuKzqCC3exrJASxWKLtqysycSsYLUTUNfLCSWhbGsPMSrZsmd757PzizshtpV9kojuNSy3BRYfgfSHbXEDQv",
  "key11": "3CKB4jz2qvv2zwSizfSR8RZLbjWupPLt6FaDA31cXnxzhNMRn7xvnGjEiG9LuJGvdKKcGN2r9doT99uiTXV664db",
  "key12": "5ZXBAKxrSmTWjLDya3ozgHo9SDUtF2RgqUCYAtRiDbCSbYX8ouZSuuxkkYQyWquJYevvWNr9dijgNLnwpqh4y2FE",
  "key13": "3zHxspaPUXaA6bbVuMWjMbc4yHeC9MZ4BhzgCNnuYt4BRe9SkPoCX9jpJf86Mugex1682ZTUj3brugz2oPVjCUJb",
  "key14": "4sKYHKZKUxFhQ6yRvcSubfSg3RjPtpLPnXst9F2pxAf9DyS3bpha7UUhinDvx8x7YahRsuXfRPCxEtA4vH3DUpUU",
  "key15": "4V3n9joKBGHBeCoXm7r7oCwP1PmyJw7qGp8VceanHuUQWFcqTtzY9riJ7g1uC5tvXUGtD3NZ2yvPb5Mfmh4kC529",
  "key16": "4CafVEoFEcTaWCMgKXcPYcdr3yg8s4X6pL6QaBXVShxkA1748tq6GiqQQd7y7pcwhbYDWxzmJfvFK6eP2S99MhQ2",
  "key17": "2AAT4HQ8KPAsssadREe9wavTPbQLas18NGso1uJJpL9Gg5DnCQuFkNWN1VAFSqptTqK8mHwWcuL5NRT51YccN1ah",
  "key18": "42nurHPHWNs6ZLQPcJTjQTVZDTBysyrav1wwK3ncfMtGy8beQzD81sVzAtj6ioDN5krwtvow89bkjjZJMoVbhXhV",
  "key19": "5mUGUqRJGfUUjjSPhCjH4jD1hib7vJiwQ2wG6rF352gqov2fjB6q9T2WbnCzC1ZH6Fvn3auLECY8ypWxRhvWMYSi",
  "key20": "4bA745nnckc1dbkkEfLuR3j2xcNSnsDbGWs2pW8t1wbDESmA3fGqjxU9G9dhbvLT1YvbPBU7jhuPNcrvjEXFKD4W",
  "key21": "3sQySpQGqjJZhfDZ28yU1AxYDffxoCHbzBsHtaGL3tRVqz9wx4886MoGGsHqvuibDrvr84NSSskEdzXgoSCUqGsY",
  "key22": "4WVtgdndAQiRxv9WNRyeEE1eaPesyXsQybu5H1bbYgYXr2o3U1G4eoqpuUdDHJ8kfdQ6b12y1pQr6iDgA7YWXcVY",
  "key23": "64LnXAcJGnagvBn9cGhtqjuRPioPhD9yn6RRqeJNkWy5zXNxK7JnHUPxJJLDFQGbjU5u3NbatLo8E7z9Sq9BWWT6",
  "key24": "5NjQaf5a19qTt4tzUXZRnFQc4XvEvXSxZH4ZhFEu9ViBexY5jNJWmw5wPjSQx2KK716KWwsSK2matBiW2coZDiGb",
  "key25": "3mx94qHb1m4ze2ufvgxhAtsgiiV1XXywezeMdRDW1tBoX3Q2cs6uMmVmJgU1hXTja5RvE8UYqWmQNAr3DW11avYa",
  "key26": "vAVACACfMfFhjsP1RN4nng5ufyb2mYbf4spEekySytEKbzTD3ZyVyx6AbNTW3hHcusnvi3aUEZ8czpas3Lz7xrD",
  "key27": "4Jokda65e6U2MvWwhu4Q91LvVEVRGTUbSxJFWkrD4wgqE6eUczTPGDjWDmzisCeDNgDmDZcBPMkUzrE7o72C8aRp",
  "key28": "3td1CsvhzWGBUGSHqE7JYLxi95AtLMLt3joCc6fnkWX3cH59MQAdCfsifkgv4DpW8ZQrEnMnvGHKr1KNd3HU4Xmq",
  "key29": "4PGf3MuvbKsRNw8JokkyacnDB2YLr3QSMkRCguayropHjmaJ6UbwqRNTPrv9Y3sXx5dEe7LJt5c5dCiwJbJNmo2j",
  "key30": "4Wb5PmBSMiRXAwLCkUcF6aCJ7mG3WQY8vEjqdMNsZafghUTcHxmsQmuXCyUWnJoX23mTcaMXS65deBqzxFRckcP6",
  "key31": "59hkkumXtvVDFkKypkkNaw7uzpBwZetkPxWPMzpnNGfeCELFjQEcaXdsFZeLpigjPqcGBa7iTfwoys9Ci9ZAjbtQ",
  "key32": "2qS2ij9FdvLapTqDkQ69feWfAjpTiRSysCi21EpNgn9ayMvFhQoyXZWYpx4G2N29RmSrtdD7ouH1odV8PuEYhnkp",
  "key33": "pNUyWYHfVjKsvdfPy3P74fem19BhX7kePrNcH1zsM1yYmsqCSQbWmycwxPz162dgbJXdkFuKRwDYShNPjGJqEKQ",
  "key34": "mDgFHaijMTFyW6Mrgufc3SrqkDHB3wGUqxq1o8Z3VsKGhQjKkQWpDeAPRTU8qyK41ij71DbnzdUFCUyHfKZHSPp",
  "key35": "4Je9JSjfmKP9uSCQTk2cVu2xLGymWovVtVyc6B62kgjxyoXVk87369k9Qp8kX7FBNY5hvugHQUPKUY4aA6RGho87",
  "key36": "4EAZSVuYgHknEkPLH8m4jUqY6DCiqxeSP6yT2uQrHXaq3a8RKyZeGiSPGWcwU2iodiRaPCAUPoHwgFXTyPqRe3Xg",
  "key37": "5bvFKBwEEh4togZLdqYSpVxGoPPo6NENDAzVqxcPq2YVc8qYoBJcMSN3x4a9BLDc6FafPsY5hQwynhPNrkJpVTm",
  "key38": "TcZPu11o3zLRdk1WfHgei8X38poyYVCSBE67CgTNk9VwLxyWKhfiPhwsbrzyyweNV9PJ47DMybWwVjQx4XKCP5n",
  "key39": "2D4etybnPnYBeGwDQMftkRR4eXkpxmHs8hJXfHu7hkAmaFRqh17BrLaHReHHbzKDDGkMnh4LA1QgFGZRQTxaSrCB"
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

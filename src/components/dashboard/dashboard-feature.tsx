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
    "4X67HJ1Rg4RxZLzanqSXFctHeFwccoi6MvFrFw9rMoem1zczcfmF39GZfN3BT6LqDV58jSyphi7xJRqittPp4cWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RrPLVRwsbxBtncxBrvvXNMjxwVXpytWeZcJpaHfgRwY4fVCQ4eumN4zvMaWgamUHQTVD9V4g3FRTt9TCo5BZ4S5",
  "key1": "3auHAodZ8HZFMsRGmugWFfU2bX32P73hCPu1DQY3wsgeWMYpptwgo1ztZGrTmEpa7ZgT4uewTZkigYNmKXqhcq2S",
  "key2": "28GvEa6SKxoX6S5dMioAKE97dbPyxMkjLtmuNeMrLF3Brcd1fUZHq4tC9nYkGk2yEq64y5H7GGPVgCcuYWR4d7KR",
  "key3": "anAr6FWsB4Uphiryrw9R5kPU5ebYPuq3nMr3QhqkAQwZMrNQwvYwct5cWsjKyijzWKi1FDrqU2CXNoLS3PdYcLc",
  "key4": "t14kLhC8eoKDDgQWS9drcjSDJcAP1HSS53aGG33F4DwSVPTD76MLtE3ocqSHAkZ6jzK4e4EkfCGDEgqUKoTxj6F",
  "key5": "4BbanxTZP1JQtHVfvT1iFCoUifDyKtiXVLGrzdpo93iv4TAcemAPaaf1VUsMqs97UbQQYEWeHLnuFe6z5CCtDfxP",
  "key6": "5onJWybYAPSrkfwqXdnvp8Z4zR5ErAhZMf86s1A1FKLPicDXeFwL9gaJ7jkbRmbLGqFipfa7Xh5x4yNstXekomHw",
  "key7": "2m1mpf9kVVsRSEoCpqF2tb7ftsvfGMsiJeMLK2WRvFgVrn5fRQpwJUqBukVgkEVGZG44gU9z3KHWfHkVA3ftT22",
  "key8": "4okwsH67ZrQRBKQAQSNiFMzYDKFrXfKXfxx1Poatze4k7hA4sUfXWiCyxQqzUHh6gyUY6guHrUCfVZEveFL36xy7",
  "key9": "CaiBd7jERWWdomsZGxKvJd91CdK9oVcybVTrM2oXGp5YoEfeKHSwDzvYwzGLWarth3d7DioWd32RJGfyoZNXshy",
  "key10": "2Hom9quT51kwg6CpTyUzByXsGTiyEzFHaE37cCRRzTzBFzQUPzYKuJhNRp1q5aLGswPrTKcCwVfSjmqG63ZWex9R",
  "key11": "2LQepBeeqVGLXdcA5A4Dpu9MQDWWea2ZF4MLMrN7pGnmk9zV3QkVVB4ttD6TZMChuaUtUFUWgHJ3FJoU2MpkeJD3",
  "key12": "5KqgzyHAM6RPDSDRHHL7tmCbLic9gXnyQLPBLXadhRJHVz2KVWV67PbEZxWT9tqCLPVz9CPt3CPLHpdyDGvWSUrS",
  "key13": "3UeXQBxjmZK4s9e5Rhc5tWoNfVJwi8oWkKrW2GoCdrgJQ7FS95mHNaXiUMeTidd3hpk1fKPGmN3AJqELpmknVmNt",
  "key14": "66HtR1MBVZvdMBJf1Ry45WRwzMxnriDpHLmu1gZseNbtmRSDdoWtKeoMXUunBUAxg5tczMDwj7uirz55rMc96JPt",
  "key15": "3hhAyyqPXz98p2ygbFWeetpeYNMaDqMKhkZrYVb8CvZDB3v7aCitQ5Xv8dZv3JMpiqPdjXbp7kRETWSAVLSvqgGS",
  "key16": "4XPxUN3mffn9ZDSXoV3ihufNw4Ft24M8YyrwUaUV52FzEbsE5wZzEc5wBnECiZLg2CkPGLGFbF29hzfd42TYuPzF",
  "key17": "3jkDwS4nsn3oKwUrf4kVbThLZQTdph7aaZLTT6tbUKBRiFRLG9FHxYh1N6yYbst39wPoN4J9y4rbQsUtP7Ugx5NL",
  "key18": "4p41Nuez6wroRypk1VGxyYaNF6zkUhDq88NpFfcggHVCrJDHQKZsMqdtRWTpTT6htnXDyGr3B6rkoqqVUKs8fbEG",
  "key19": "5bZe44paRKkVeoHzJFEbPr98uBQPYBwYLmoydoYfo8n8Z4RYDDWmY2xzh4d8VCMn7NrRUKbekYymzAWQ8BNQ3LNi",
  "key20": "5ZX4Cgkk1CFBdqBwf5fRjSjAgny5Vz3EozCea4JfSMqnkGTmCrPBt9BF2YwReYsdyrhhjuCUuaQXoVFDSQXW674R",
  "key21": "2egG2fAwAPn8nm1MFLgST3mV1YdZakEKtQX56YmN2oAjYMouYU76KHQRgtyYHhKrcsDw3YfxmDEjLGjC3AW9S3Uf",
  "key22": "5q2zSpRp876vCjfra592YJxdzeMZPH5RgK3qXNvrH9N66wzGCCXk2PQ9oTDRfgkFzgRqe6Az3gbD8DFcAJnmrTqf",
  "key23": "iWXnN1PssVbCtGuWhLThbPzWhjputkPzPc5fvkbrmK73xq1KyY6yQZ6EfmySyaLhSsZGLpu1W7duj28Hmv7P2x2",
  "key24": "57j1Frsc3qDhVZ9uDfJNf5VhxgSzRNu36nf6nJqcHq6ge4f9YFWxERbqyv931RfY3iSMyfLy6CKcH8B4kGXBGXij",
  "key25": "3v6JdwtwgAsmioWJrhmiDuQAZPtRg39o7HpD9EeVDFkZozN4iCcPGkFvk5KVHY8ihPpj776kMp3SsFauNsYWX8GF",
  "key26": "2kpkYc8BWjQMJjiT4BTFmjnUJgsuvU3SvSPpRFcLSs3PfZ1L7nVdXjEsNuiA32a4jjqmub3UrBJr4dmdncnQoGoz",
  "key27": "4KgstYkGLMbJBb6L2wZAnxwoFqPngas6ykwu6F3h1RPAQP5ow1Rr9PEraFMqjjmRRXcJn9iNh3cR7p2Xtqk4EC2",
  "key28": "49XsmDF3xouyWidVMxSy9Jeu8mxuTV1vjtWTeoZQJibSxkeQ1i6T6a8PeH7wnZqpZ7eWspLz51pzrjf8cC6UuTCR",
  "key29": "ZoYEYNZvwoNKmcb6qpHYHKrBs87xkA7otvBU9qGRBbHpEK6UDqPBVwJwjVwFEQTVAKMVq7M9nS6Zew4gQqbYVPt",
  "key30": "59Rpr93SLj9UXid2ni6cbqUZD2hXNKCY78GKJ5WeAgdrWZe27XhcgPJsVM1umrkrtA2qQxUGmKa1dGDgUGFsUPo2",
  "key31": "45V6RTQc3Y8EfuUxXYwTiitxLJwZXgtAqsAALUQJ4byhP2VdZE393tdLatt8bZxBv8LNdk4aGyXtLUmLfx4qgj5E",
  "key32": "5QAAYG4dmJdwXctMCzH6tM5YoEfhDXZw1jd8595ZzJBTqqMt1WKPgpezH1PEskD8UChhvLHQdmGTkEjaDG4jYaNk",
  "key33": "krej8MNKqsXjCperrqMVij8cwNukb2bGxLZQFBD3qdHtjEipisboxYXozfhFh4MUh2oirXudHjazF6PWSktDsXE",
  "key34": "3aYJDE1MqQdtotnjvP2s3czeB3Pc7FhkfDzZyihtFZpQ26bgZZDszdKvVKGi1SDxHe3wEk5FACnPdALnZoUbp9D4",
  "key35": "5KP5jyKEjwC7MBNHDySWgVrF61MPSjsyGZ1TaJ89yJ2Kw4FP5aSTLKAqEDB5vdLVLkpjEpwaoXntTD6NAyoFKdcq",
  "key36": "4A1LHCVSGykPNqJvxF91SstHnGeERCvHW1ARJZMRJQNAkxLoTqP8GvocskFjFGNaHaXtKwKrE9uqSuDu55fxjurN",
  "key37": "Ct7NcDBZk34tNHSP8S5diFT6tw7mcwbBJAhNQT3PuaMvUBvthRLWKDa1RTNtpHYPWE5sayn1W3USnMwCaDLLsZT"
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

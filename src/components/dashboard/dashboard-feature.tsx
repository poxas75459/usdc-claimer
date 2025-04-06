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
    "4SNChhTPSxVSY78JK5DBnA4ZvcEqaynwFqgFkeT8fD1BUisNjX3z2VksULsDdUwHwKJR2z3jkjgZ5bZBYDXkEH1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BByoo8qKVne4VFPDLSEb6HDRsW1ehqoJGFBQWrDErTfZZXtgbw4ZoRZwR7ipCuPxPpSq8VXqNZC8VVUbGk7z2AK",
  "key1": "1L8dgRppFqog5c84XxVtX5urwxng8yuxRPAZh4Cu3dKvoTCfL9GAKQZ9CPfTuC5gQizPFAXYb272scstSgSCQiM",
  "key2": "2zgMytKkoDZzJTZWYyAXdEux5uzcM76sx14JXBVihmZnvsdnKn6tFXLsZsMurBS2Jty6Lu5FV3Mr7VWT42NMK1JR",
  "key3": "2FQgakZCEYgWyZcDHeSAE4cVT4vHWmMBMMRUu12y4qDzatrbrBCYUbRhgpcX43oMXkh2pgmcKqAbjgsaaP4f9ki3",
  "key4": "5p4tGCwSJScdckm2ZgQu5iB6CfCLbYpUxQ8wYqinNXHBsQ9ZZDkWM8TkmEtCaoArxDojjZtVSj8spH5NZ5FEeYhN",
  "key5": "2avvje4WX6kQGNdjsm2xJuQnvfK81W4umWtkaW5nf7dZiqvhobZhEaiRctoAZzZ1B6RpQSXz4MFnjfwhRXgcrxV7",
  "key6": "4gtT599niwccHxTq1krLBp53S2uKPPhKWfFQDfLYXiMy5NZtxKVNzHN8Xj9mfXgTnwwfd3E7mzwyTQncEoJ44C56",
  "key7": "4eZeCecre8CsQ8YmHvcyRW9931cuU8xVHFUmdVBXQgRzLpahPB9sEroaNggyZZLm7dTUSyLafbz83xrrfoBswva4",
  "key8": "3bVEsKb6ARN7VMj5HitBhrMRWypWeaf6mVJKQz3cRhfa6PzLDLTuSrmLZtJSBhjhEGt6bVMaXo9gBTU2tSA4DnsC",
  "key9": "5BzJZnGw2y2VHDxFx7CcHPhztP7oxShNJFKLE4y37FaSaySyQzdpxfS7Wrke7yH1wfLv5UzJj3CGxKYKyaTShpVG",
  "key10": "5PcJe7RyrLomYUfNXwQyewwnkU2XPbify2Xek2KHjfCosqtnUDPZDsVt4MP4tphbmYAVQK4bAhckm3ZBDf7PWwE2",
  "key11": "3i1TLAWmqKBym1KEGoFKv99ncB93aMhrbEvPx8W9PQZDJgzvrexi8j5AM6ing5vmNxDEewmko5jfJFS6VVW9xGNh",
  "key12": "2j78UfANVsjsRxazoverrszv7DCWFw278zSsA1uSM3Zq17auW9C1oaS5P2rznztcF71F4tdyBwnYjZRujf8T2wuX",
  "key13": "5E9DcScPYxC1ECvgnDCrgprWZAHvm2QWZ6yTbxBQbVreuwMWhVcvY3amECtNgYRZRxGwmJnDnwbqSASrNKHeVk5e",
  "key14": "5S3XkQY4GDtem1pbF8vGiXtsE7wnD95tHG5qkPWc49AePsRX5TJtq1426z2x2vXDJdWCmcM6hmDeCJiHVrGQi7ve",
  "key15": "vXiFH1VhLvLnCntHtZBtTatZXKA8tSFo3evrdrQYkGNUxntLhYnFcAfLLJxc4TBQqvuBMavRUcsZm8KyB57a7ZZ",
  "key16": "2EQ1Sqk1AjaC9nEt4bdU8rgQstreTMC4QRBx3gpvvHWJw8oaBp8NL3G95oUGFsq5KdasdHWcabM2YnSS7Kp33twR",
  "key17": "pJdqn6T6mg96DbF2a7UZk7AU4GuWTBY7fLqNceyp6Tbyw3geEHWbToY5s6suw2RB8mTZ58HDdUx1ukAAnK3tsrT",
  "key18": "4CFAKSiNWu35Ch7phGJD67ZoL1fJVqKqYv9C93oPQZrAtSC797KM6QSWENHXeaGiGiLBFnbP9c8T3gWicQPx3qGE",
  "key19": "5vcddsYPjnCUF3guoixfLP4hNgB9bECYCrdGK42mRH2qvmpLdwKKG1czFt6RwFZT9TdUENYQeQ5K6GwVsNavFhUM",
  "key20": "8Pf7gKAfEtx5iVpghjkqq7boePouTrZCL3C9gdHb8BbjjudBTM73Cps876zjztXuazaihX7hhLKZk8YuD9uyej5",
  "key21": "2YPqqVX9fSV5iwBYE5WGzh61eoLWofaYjwS3xfbhYCxdck2i43pFWDHN2Lb3NddLeeniHCHssvRrSLSXkHYEJDEj",
  "key22": "5xU72dk43AXGYrzB3UmZUdn1PAyA78m4by6VSymCnoruqyQmNNd4birir31KsWU5f5jfrmAwgPkFrjvH3LeA1Fcc",
  "key23": "5kp2nxidhsoiNEXWW5EGQCCyakpoTXHtUQZyNcuRM3gvHEKtgJ48gjhH1cPeEFtmnKsTSQpiep7PWENp6PNDukMt",
  "key24": "2E4EVxjq6Wjw59exW9bXxvgtz7WLUvtCP6e9dL6krkDajNi83bn5bznDcYssQgbqF7F2ZjoJfBLzj6xWsFqRLgy4",
  "key25": "4vWCvzq4B42Vr8YYFRdTH6nweKJEBbTi6oMX6xn5iYjQKY1Ye4XwfhyFpgwmWBnRvPzF4BgdSJs2PbSKDcvaob6M",
  "key26": "5JqTWSmo9agJAFKmnF4UGBzkbyANCDthF7CCBZjs3HMFBVPhxtXGaJ8xZdvQWhT5nXVAvzfXA7PxWwNfVzgB9tZu",
  "key27": "28ULYvbMvoW45GMJrF4VqoXs7nzMh7njgesDLDZHMhUrEbJLMwfA62UjUmrZcY7mnpV1rJ3vQabhcgoscojD63KC",
  "key28": "biB9oQxKDV4nGHXNiy6bSXSQGzdffRN3U3MQcVf6GeTpSPJFg98VM4KYwbPk816MxewZRRoJ288S4FN6Y7xLDh5",
  "key29": "3Hen5JuQYwo5YcYPWnWSWNFmvuEqTUC57ZATC49jQRixjv3is9rSXS9G6CXmQPAUsFDYGGY75DaEwygTm7Yv8QWp",
  "key30": "5osdSo5tz8zVAq5qumJUGVDsVqFEKebJ3ELPtszV4hhs8E3b6GkKHmvXkemjxxdGZgWcv2nLtcDcwGFkKLkfweUt"
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

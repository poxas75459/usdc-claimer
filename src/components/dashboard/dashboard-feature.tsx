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
    "FHJkKHSsnKRqj9wn38sXBgHQGqBrq5yJ84PgW1SuvUpXd1rhsRssfUxbXJkryUcmLvV6s4LLDvWhNo6KRMi5jX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K8frEVboWxPw9vPAAzvAzMYuDd84kAxvfHFTHjpYV69GL8YzgtsRaBnktMhPPqfR6FRYoBZwhmhSsvx8eqr5Uxk",
  "key1": "655CdxZShAUdNLGzK35RmPcsEvP1UjSvdJKWtFJ9YKfb7vv7n1f3ApsYDZGe43RqhfoYUUB2tG1xL2JXSE9NBzSu",
  "key2": "5kjyusVkjerwVzQhg2TriHgbC2QBeVntKx1tutfHSVsTrAzHsbyYVBH3iRwKPyq8QgoNrY8jvWYbbnT233akASAc",
  "key3": "4zjXyswL22qreuPjzCbJqf65Ch8niqEnRDYtBhRi6SfvTFs8NjYZApVLjgRm2P9xMRu8nDMo4K4JwbefuMg7PdBj",
  "key4": "4W3EFv6ovaTW2E74SjjWMEJtaARxygj9Y3gm5u3vsXsGazbEUMcFD5zwgrLyxkiw724Yj1m28eExSGmnjxDjd6g4",
  "key5": "jTTEi5o6ee2nPtw3S9xXsBwRJfwUgYEbX45vS7G7cXkdrasVe2kXFk775ipgei1pKpDKYTPe9VpkVmq5CbBRirB",
  "key6": "3ZQsq6UukRwbuCSxXddVzgzwnHR5zio8RZgwLxrmv9NTREokXXm6cgpfVwdeBVWxpmVS3mfZaUiXXA78gXvidyvQ",
  "key7": "3rAGBSoMHwNfY9csnUNAAvXNtpVZ7KmDUFBWZ4mBre9S5thhaMqWDen2DPZxuPQ3RhB7TR5UAXx6ci6V9nRMbo7",
  "key8": "2hGLR7MHHRDmGQ6Nbihjv4v26Nijg5n2o5L73LbhXA5sogAfrhVxxNo9i8UZwBuRu4Fj2VLZ1kP2eAXm6eLRdWss",
  "key9": "XENprhmCLXySei855WenoQAf1p9VQhS4kr6TWjv2eiuvR85uBMP45JxunYQKXkxDXwgX7TcYFJnjriPgskPZZre",
  "key10": "3WFRjE59eQR6pFGp8fmA7tLBZsb1NE1v2Q1mc3QLT86dmr9p6g1QLwATZ3ACQhh6ecacVqPJWSX1nSW2Vtc7AuGU",
  "key11": "2CHpDb8oRPUV6aR7zmdRFF3tT6ZQb9CnC21YgXvcEbWuPYftR8oJ5mH4t7z2PM15JFYj6AgUQjUmwoVohPaJsj9U",
  "key12": "2VpT1BrWak5hGkL6zEvEZqUNERc6jsX4fppk43iAuY7atMT2TsoRZXAT5y69EjYn4hS7KavUmfz4CGkfjFdpDfFs",
  "key13": "5y3VaZLsmj9GRh1DJF2orRHWLJMftLRKx9JskzU4wuHeHAaDMjJ72BFbZADu5sXB7gDxakiDMu6zNoVvn1CEoZnU",
  "key14": "3uiu52jqwXj1rqvPQrYNpQZ8cTCw3bm9GfZ4hGHmyYQhwGLrXX7Bxae13VVB3GPLsUjXB4GfEtCFpxrUMY4iEyR3",
  "key15": "2P2uyx4pb3F3bQfy31ZZMSFtJxuNvmxAkEmT1bPbv7xSnZvdwew9kRavvwFvGkLMMDmXiwTr84ovekKtWjE5jndU",
  "key16": "ntSrkd4mfBRTdJNWs6BCZ69bxZVJFp72Lq76DK9wVa6cd7FKvU1ngT9bNa4eEbqhUFinwxJJB4KH3W3Z9FuhHd7",
  "key17": "5jKpRqrmB2c5Bp2LJsDMYQjNpc4hbdgZALeaKutUo3vWC1MUr2jJJyHEPGVwVnLdrPQg4oqpNg5sJEonLN8KU6WH",
  "key18": "4bc2vHsJuVsMQSUYnYcW27tWF7iT3T6cxni6ZkQsj4kBmrUrw2GXSDdNdPXBBtRbMPJmwiqfDeFbwQZPA18QtrVr",
  "key19": "3bpLAx4ipevaff52PrtUD13fxZa1w3xcGe8rRksstMoXFLQL2mDTmUGife1qC7HrT4VNsyFQtg9eN1ECGdqMpm6o",
  "key20": "5z4y9bRRCYiysTgJcALn2adxNKDy3rZoEBtb2mQUnB2U6RXYvZAMj9SHXrxzYzNJGHqni1ucXygaWRPQg33EUBji",
  "key21": "3fkuBDcU29trevdJ2THc7JDJq8tTjuebeQw6szF4gc8Ur2Z49aoBhTSQw6DeZNCBXoxNyqzLqVWtfBSQNQH952bR",
  "key22": "3mcgE3B6hEt6YoxTDc1LfUfSxaJ7cDV6dffczgaaqzYcBqRmPmXZpcQb5UBY2hTrFzKWv3HpA2zkiQNJoKgijyVu",
  "key23": "2d63aR6Aaya5yRKqx6sUnTcNeDTipi8PK7DiSD6nLLuqaPTvgz2AqXeNWJY9SdpAiJNo4UwPvrB6haivzLQo7cU9",
  "key24": "2BW5CtB8SoJsFtiwHPqh23NgdmgYUQNp4EizkyeXXoBDcEkXhb7WeVZ1rUdfU3bZYkALAeu1MsCdefQHFT4tjpWa",
  "key25": "JoXtACz6hWxC75AEafSQaSMzUjfaUD9JC4ACL4tA9rS16zBS1KdMAaGKADM2GdbHgHJxnbRQHiDEj7Wff7SToUW",
  "key26": "2hbHgv5xrnoQGJ3LxRUvDUsYwAAofdNt4uRq1BiB2sbEarvsT5DawHDKSEu4td7qqgxLer7M1Te3ZNZ7HnKqFts5",
  "key27": "2DoVXEghsXJG5bi5zrgp8ZNZFfk3x1Y9wHCDwcCcFacbjBc9DznEFQVmmibKZ9mGZfZvyZqfMBGKCvUV9ZRVJgJJ",
  "key28": "2BifkKdyNM9e3qBaudTvA5L1AA4xB5zXDuYvhzzb17dLh21UksHrrdr7vte8ArnC1KL3qQqWwP8HwoP1FCSqw7d1",
  "key29": "2bq9FBdC3HPv7kXpys9PfcoLC3H23w5CjgjLLkgRDnDMjqqjugRShAYG1pZMNueLn8L5k4vX9wdwAPynzaP7NLrc",
  "key30": "4Q4PBM5g4qpfzvDF4SynjK8v3RAmt75bEtFri5npnZvspKkEZvbk24jfxw6mqKGZ1AQTvUzQpmHsGEsK3UMGD7Fz",
  "key31": "5W2vZa53TeELxNds52D7gsDySEQUVDhPYoS8npyzNEWffuQmcTr9nuPHumLu5DmEF5jSAt88Vb29LZxjwnzetN6",
  "key32": "2UGGVi8Tcv7uu3cLKti9wjBuVxa9q4xiMfy367ci4erFm78fy1f33ybipr7TvLC1aHtwb3D1ebYGZzg4iQnHEzKe",
  "key33": "4jc5MdHsE2Q4WnHBZxcucqYeNyXGbGVLp6vJPjWdBmKh3rSqyV47h1bjkjv71jUM6B1HoZeELXYCArrdyrFye16Y",
  "key34": "3tsytmwPLtXYkXj54SyHQKQqhpqauvL2B7udk85jFdrAe1oyEpt2XudAUc5N73qemLjH94ZWFLhBzgJpNqH8AhKf",
  "key35": "3sYynpFbnPMuLRL1Rbxy1MtXW89mueTeDG7DV13AUUQFZrhM2rrQKgxoCcLcJ38nYwksLVGJAirrwCxLvqCs7bA3",
  "key36": "5urxSunN6w8a5MofE5a4A2uWyAVw65ktmm9eio1cDc18cpHiW4pHLriEbp2JhjE1Ppffa8YeNBstvVF62NLTQG6X",
  "key37": "23AuTazQrq4j1uPay28iNEbyWwJ5gEPSpdCgJYcAKZN1dCszttNsrNiwtgLBYFR6XFgAtgdBsxYv5ofK6YK3Fdqf",
  "key38": "jEK7xuRtFGtQbTVLtCNh8z35dpi5PNvKNCqwSyRNwqEjHJ544zPAbH4EZqAvngCrmccdfRzDdgk2qBZEjGMSCMg",
  "key39": "2UZnbZKQxNLd7Euzp56GBvzGpWCwzB7txNGwZyw6vWNrQmmwMcDhiWks96dvotq2ZSGjuy7aTF9cUqYmu32q7nE3",
  "key40": "3QJYLBfPg9N2rRkXr5joN6MYhJomW4YkHkjSWgyRG4keajzP5D9fw6kVLwE4MuC5j2r9cCwRDhDoP5ToeD7wyzpQ"
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

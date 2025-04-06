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
    "4Cghkp4LnTE46mb4UJXGGDXdXenYpBeRsqVKdUEa9VRjJ9PD3HLhw7Bo4iuGrvGnBYCaMjMsCp5D85w26dEwtMNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GbXRd39eVeZK6sfekWKRedtNN7XSUt24uFXVQ7HxRccA7VcSxLCbY7xabinA2ZXAoRo1FyLoqQH6y9btK3PXzGx",
  "key1": "aL3bdeFURnrDgGKa26WEhg3GETZe1zyAu2sb2wnubDjxXtfqUnnz1LN4UCg59Vv7DT6siDveXYdNT7cxHwBZxZM",
  "key2": "2ShWqMkWwvbo1KKfW1q7p1ziJsPcoswhHqvXEuteE6kJUAnxKEHFh3a9iZJzRbuM2Yw2r1LdG43wemHeP9dc2vWr",
  "key3": "EbgMJdcHzVr2daZvqkw3HtD1Y3hX3CvMQJRuz9w3HCNL1ShNQJGXj7LKKGcYMBL4DvAPGDzhVNwVZr71sRCjPno",
  "key4": "3oWxkkLjhdoUiQ1UETRvCmtzn1jWCK4svZdKxURreRMsSYCBiUr4rJMoDXn7fp5BLg7DrWByPiJrNCni8G8nMcDi",
  "key5": "5BLczGcbQNotBn2BFBwQN1TD45Rh5KY6qngfkYrqMmDTWPxDXSLe5duD3tcU2GqjYZwwGt8hPi7sGGnbQJW5XkCd",
  "key6": "3KxUXz31mL8y3Etz5HSNt2jRxmmDsKxWcSrXx3UNCe1MufKrYDwsHNvK1MAzQrUFdeGYi36ReMaXczgd9n9MBkRN",
  "key7": "4Wkcp7j6iqG4mNsKt4gAfr1JKUdyGhZLUQsMwdeAUvT2PB6Y2WswduXj7v6K9br15XfxefYRAjF1TZEe8NiDnoVs",
  "key8": "4SJV4knxVLnYscEt1NmYUx8RjkpM3kCasiW1VBx75njFcRTn7AhPRMQbGeAXcpQt4uKXJxHbL5GWjPYWJRDh6dEy",
  "key9": "4kWQkF9hCkbxTURMD363rcoScK7jXdbD9UP7g1BHZLWhekLncr8jF8Ncro5Gzmd4WfwbaUU88PCyWC58E7GbRr2L",
  "key10": "bZ9r8SS6QBSdAqo2LtuvdR1iCQWkfnWuyeUuixNxjQeGv9YMSD62k2AdDcP2r9VuGnDb4oDx26eseQFXT36tZrR",
  "key11": "4Lb5bcZdntEmb2rdVQAYHvsY3FiHAeJAb6Z5F6QGkZfayqX7yG4x1i91NxAUXFieRg2FFegAJAczZfeKCDWaRXGB",
  "key12": "5GPdpgaYz3Z5ijjamk1R19VYHSqZzyPja9BEinDmVq2CykZwA6fefjxgFrKSvGSCSW7rtNxoddH52WmLe3wh1Pfg",
  "key13": "2Rm2KtvphGo3Rph7du1EwLwzTReaqzYhRENBGC3q2xrbmepAZqpEnYsFvCcmSJrmfqsjbKjjZB3ShRqPhBHmJRBi",
  "key14": "5vtYjghicxmsvPf4hgwCjtaAFTJ7Frh5qufdSvPuwTN9Qsm12gsVvP3oD4aJJ4z6NqDF4T9nNtWVhiDeJxFof4VL",
  "key15": "3GE9ShvuqJAzDmLa7RKFeHBaYc1WtdWwP3JJ6gtQvr9SaPX6k17TVtMSPgy6fK3s6iojW8dYvA5WCbMz7ZHMo5Mv",
  "key16": "gXE7P11BcyLfuzc9sTRYVp8wRomqJCPSwEm76ZzfzCvUngjEtNBmKF9muxfV44T1mD5UC5LRJpCH9o65gRKva9s",
  "key17": "2wkEuSdhtrzczsWrP9bPq51xbLPRhJMWeromT43ZXLvfa2wDVQRC9dQyhBgvEkWqA6wrWiVYy6Vf6EiVRKHY6YrK",
  "key18": "5TPXR26zteJXwL4tUuSpWg2pRFNArCcLMmsjPs8iPMZjRUToSdQLyfFUMiXf9afVu7wzDAtrfmJLz892D9LMDJTq",
  "key19": "2Kt9s7MuTVJCrMXidSCN24r1MhF9dP3RpUmeFrHooBpKsWdjZF63NPMzccB2Z2aokY7hNLKrSLQmQU8yMUHffcos",
  "key20": "3UCejUP9Dqw3sPpKu1vhjZPQS8F16tVTHMEHKVGYCcixXhE5GPtYRxxYqozkFu1wo1ZDo5tqNYdTSgJJbbYxWA2a",
  "key21": "3rAebjCfFjaCEiY4T6JgvumKKebkHP96GYy4ELUkK1g2xZWHpVMcY4sriqEYmxii4cov2zw95UMsLQP57zR7Xoj3",
  "key22": "2rzfjQynhs9eAbuUi1Pkp4v2qXK3iJneuWsn11XSdpA8ZYJNEx3r8UeJ2TH4nELpjv15nHmd1WTwTZbGTim3BYsS",
  "key23": "4S3GVv3vv3EpBX1Lkp2SgmoxbxsgZL5Y3gGRz61P64kw21vGzXsDD2YxCxjH2n3FTLxZFa8FLae2dyMc4pbww6QF",
  "key24": "59WELxJS1LzmxYTdYQnxrLMN175ENdwooALaC2sBpr1Ytiby9mYvZWNTe49zox72CKBbEvNAniZrNF7yzdM1jWCa",
  "key25": "fHvxpds4Qr2KbuwNavan1oHAaKeaNktVHPNLXoAVh6U7KdFWsqRGFz8Cs47Rs6JLVGg3uPHET5EXFMXDwaRji38",
  "key26": "664u6fSE6hM1KCnYV9DYsQHE9pkUQbSbVX71KFScuaYuAA9cVw3PzF1XzsXryPTNzxuDFDubeps5h1mpx8p1TDYC",
  "key27": "4E2Xy26SPJcXVMXTasJ3nyDMskL181P8YvbJpguYfXoLyQbEqvHw1HHWBskCs5MiYNj1Bp2qe9iC5fYwBMEqZ22B",
  "key28": "45voet5Y8bA4Bg9yDihQyRQeTReGAVhsGPNDJBgQb9W6t4emajZE4ZyCuPCVXi7SVtAc4Ne1rQYcv2f4fvNNxSJ1",
  "key29": "4iKMQC7vJbRhyzfsKZYbANFvfrAJtfYFTFUtnpBfMHeUyXj8dpNHJYPs7bc7H4ZfmLX1WvYfhAsf4dWfw31pCW2x",
  "key30": "4gXHHjx4BYw2GUrMrUZDaj125XgX57AtQm6cfgtCdoNXhTPpmiRGexqMNYTbNKjHK4JqAqXho3gwZkttbMV43Bsc",
  "key31": "o2bikHkuHdXYJHBDy39bVXu3csMjWH6VyZnYeX1PRe6xgDoCS993M1HcPYaLDZNpQS1sVdTKZWssparmxrJkshF",
  "key32": "5thnL8JYTKKR1qC1hWENpWYjjuX8kJaGDgsQ6fPh3SSNQPr1yuUp4C6GdP1CumTe7p1KeKfxX7TVDNP78dtdC2iG",
  "key33": "2oHPBGR7fccippiELk5cofxUeWjsMNyc1GuwHtMqyLNZnBW9XMyBY1PJqpaCg7kqc4LrvrqTwhaHjWw7GjWt8yhx",
  "key34": "3zUnxtDMY6YHUNRz82GWfEMduvsksV6fTiuagbNk1qc6NkD4uBdGiogomfhMSakWebQzqmnf5Lxgsq3fg5bZWyUL"
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

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
    "x5WVW9xWbyxJVREX45Y31eDpEWtGskpZMcvpVMmB4w7WuXn6PWQVf1pHStw11qKufgQwoXUBVjJQGfYQGG1EWH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rAPMCaY3XeDixtt4wU3PYeUmRXqK7HYw8fiLghxnnLQnJxACFwfi5ReVnU6yMsei7fZEpPvzSeHDcFvV8xbbj9M",
  "key1": "2AKgWcVPnRTzb5WM7auKzsEsR3byS6kaCCzPsjqV6iPc62PzpbMe2t9cRMWjkS71qdeS5HdUtYSS1osGXC4zKvJ1",
  "key2": "6TJwtdYq7miBBbhh31j9bJDUiTZdkGKodtAMUggZzV7ncjjKDkcMMXPSTzSXNQzR3ioLStQSovjWrA5u49R4bLb",
  "key3": "eo5qS1Ng2SMeheCgg7gJtRnsv4uAz97g4TifFLH6MdmBWjv4joGJH2tfQkvCCs47RX2a5FRAdCBMwb7657xsdwH",
  "key4": "2Dkf5NE37JtKAbRf4QuEjzbbAH5sBQKz4Gx22SnGwpZLCws5CC8W7mU7PgHHyMXGcduN8bxS3KNzmtq7faTtf9jJ",
  "key5": "2whMKxkn1vutT6UKAPPFynuNdJvhEhJ8tayUSuUsSHgC7NdsSnDzixSWnLbd1A15sr6N8PZbuh1pDQJT9xRygyZW",
  "key6": "56XK9ivNpiPTHL6MPCcXtY2qzL5yC4bAaPM54NfBoJbhxPmja58ZTruw4zgThGcyMJP4ow9ghM1RuVkxeMWPqmBy",
  "key7": "2Vtos3v4LLJekfUdLTjR5xMSA8jSdduwFHyM1fRJa5e1Mn5QU65fBw77DBCWs3ry14JzDbMFVLMxWYdptW4vFZat",
  "key8": "EkUeBwcpEAMsQJ4YVZH2MBj9A4HyYJtGNecN2qiHdwe8zp1WmAnWvd6Ki7PkHHL62bezosffQQ8Ppb6sA1wg4Wf",
  "key9": "ZGhRUeWqGHBFZ8PrF3EXKhqHqDsGHXjo3caG7GmjWgueps1qdLbMBmkGkANTy8ZjqaUD79x9F7gPNiEakN4FPqK",
  "key10": "57Ab6F2L1dTmH4BYYAfr48sMhFgAtkAdV2FzkStx3ufKCbK48TtbEB2rShECiJwW6aKxbwtrJoc2YoXfCBV5SbvC",
  "key11": "5MGd37SFmSFHkWrm22Be5b18rvmQk1eRPtVERjyjTTAzbGoJdyBeZeFbXWQ8MsyMrkSAwH2xJCC4izaVmzxtV14N",
  "key12": "5a1Nfuena85MuLb8XuDybofBvxx9hbW4NamMJGw3kV7Jenn6q12W4XgZMy2CjfBLSmH6e6g5VfLGmaQ5dkuyai3V",
  "key13": "2ZFsqsnFZ3RDJCWYxYS73JN3RVWiQbTmKojxDMotWRM8qv4R5W1GYGmXst4PkcNrSpLT7CuY8jhEnpH6SaPrEjqs",
  "key14": "5ugraU3iKFVem4d2GX7UyTXpLLVCC1DyA8N3BCGGat4Sm354HegySKiUxNqGmHQxVMeCdc8nC7WkWnQakzz4RHAa",
  "key15": "3aHXnT8TCLybqjQtcrtd34p726pRQpkf1wWJuC4PaEagchPkYeLvGiU1qDYbKdA3UYYT9t1m451vxqKAoQmm46M2",
  "key16": "5J5Xm6HKwj7rtH154P9J9AV7nqPxoLo2HvLcqtGqrq2DJ37q1rzQ2NTVfByFfxPcJ35nGiqHnwUyJJ9WiMBf5ej1",
  "key17": "4pHoL979yG3kFfHeRD93ot19fU2n5Vu5v9mxVkbyNfwoFL1sBr4R5GPRNzseBVWdM1yFsCJdcbaT61nSRTZwH89L",
  "key18": "5txQeEkUZUPnvBSGnR7HhrRaevmGtmx1gokKMvXh7FxdmAcqVgT1yngBb5M2EMwhZPyeSm3kymoQC4Tab55aVzjh",
  "key19": "5MfSba51yep1RCdmice65TqXWJwcNQHmaVZYUaAnR8QYmiZPpxW6584CNJaHvrWZ6NnubQ1EShWhgNgLznqb77Gs",
  "key20": "3WpHFaWW1pfChuUK8xFt5ogur3x8M6DP6y5rcRD5JcHKyAfLxxEV4A4cZfC47WxQeE3iQMybuDw9FPgtd8Cn32hL",
  "key21": "vB9Jdxq3deCjYUyNGnNbxgwPFkPyVvjfECEu2mGEPnvMkDurq3C1kb3F4brbgjBMgcFisAQ7qyRNqPDKVRBwNsw",
  "key22": "4p79Hax3SRe9QsgpzbuLaE26Qs8bhN5hkuSN8xspzHkisNarHQsdcs44b494cf7be8zFhe8sVUNNBJNLTRY3F63M",
  "key23": "3SNX3WDowpv3g3uejpPB3qq2a2WLX7ys9DXNwBEsLEaqBFzgerPpHTdvDxRDvmu7iDwwq9dgdQej7RVAtbPK1sRN",
  "key24": "5WJeL2oDi9RrMakCPpveUQyMYGBBmyoEGATexBvz8Azx51wEf2DubLZ4XMJCXwJcKdnL16YomybUJYShBiKRZxib",
  "key25": "4cAwG17fr2h8RWZJ9d7AageiCZMqTc11NzFaPZiY4WJgV7kx5fJV98ePrRb4zfVKTwD6kx5noHimMnjTLqkgwJrd",
  "key26": "59ZiPXJs2orZgn3qWUtnLRjGNBxMpTyJdJD6iLaPfbKCFQ2ny2V8JKFBhzHk8xNcKbHX8sj6fU8oTTwADacHiWJy",
  "key27": "3XBLKNDe9tYVuJK4GbCbh1Mp78GdDxj9PxLwkKPW5XZKoQkPrwxKucnjc6wz9ozeBBcK64jMTmDYrW7VTaMLJStX",
  "key28": "3gxbLwZU7As31NdjhJfLQDEmB1b5BNVLjKiPktY8yDTjKZvjG4FfDLcWSEiRAkf5W15aUEs4qLGoFTjVSGLTJHp8",
  "key29": "oVLiyBtvwjATrKmF6U3X27AYeT2JobFpJuNC8z7VoS1C2zYvwoBEsAPBvQevpoNrEuFuHGooxjjrqEEMwxocGuh",
  "key30": "2QUYbUXK6i2tr6RuQJQhS7GRSk37Dwq6CdiUeC1m9jSSbTdvZ9Gj5AFt5gfdkK9JirsVFXYUWmvBSUyvJA9744WQ",
  "key31": "4NQhhF7ihjK6TTdMVLTTV89EPk153X8SnqgcnPvWYhtyLGdeZeBepMpStDPF6WxCCv33Bn8DBuwUheNp8yPpWHeH",
  "key32": "42V2Qs8XyZCHmxREtgxbmxCSiENBMPw3re9gszpDffR31LTmKXgc2uyit3cgiPKP8ETBBpxjVjHTQvWjLcg7SamR",
  "key33": "3rLdaUURjSiQnm8udxLhNcmSR35Thw2zhKoRCFY7BmDdrgknmNgJowKewQpoAby95q73eikAGKAVdg9AWMBF16TP",
  "key34": "26hexvNFptxzxtXCS5LycdiRuKk4J6tifc1HsBsVypvCwrxXefQRzBGcgGcYrA2VQhvJmLja7avY1RtQiDGpp1wY"
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

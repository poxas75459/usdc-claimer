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
    "53yE64ghaVSLEbVFsn3awBG1SCkj8TqimD97b2afhFLK9Pi5Hmu8CRExYzysRzxEBi1qAetLSv26KfYMEEPyjDaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58n1772mVFqzynAYg9uL5u79NZ4pPdu75nGREX5hMq2hk89LyVNzyJvFCYPecYFHedU3Tp5aLaEew5JUmroutb73",
  "key1": "3c52kpND61WYsEqnYtZYCibQJWzEGMQpF1DRAiCEReLuvU6YyzB5DyCzRTUJ4JAhocC2WuFUHJcFaCyZBgvLbaD2",
  "key2": "57JgayaeT4mNbXzbmaYGvZUrwN3s18oK2VsRFLVaifUZ9iDt26MxJMXv5e6AcQwidZ4ukdSjuv3wEpAw52nryjQm",
  "key3": "29bQcG4Fjw4QhuR8tZEi6rnDkxx27XnpiJH1PXdve5UWUr3un3xV4WbCfMfJRtUNy51vh4xJ7Vue5tFnPAQNR8zH",
  "key4": "fDsvzPxjj6ng7Vdza33vj7LTmEBtuqhoUuoAKdXEeUtZr3TxtWa1F1BJik9kQaM2bhwCrMxKEDoNaNCPQB5Jedu",
  "key5": "4MEgf43gS4Z65VhSUKdCkzU8MdcghLRbTyHVAyMcgmu98pvgCpVLJiETBgCRpxNdN5RqVb8NfYiafWis7SNRQFbp",
  "key6": "bJ7AUReXS78zT5jXdwWMZPazx8JUagcHaB2QeEAvdBMZW9T6uTdeHGZGtoScX92ciBhsHhk6J1zWpf3WCsB36Wt",
  "key7": "4Rje9crM6XEwNaHRyiUA854grvBHWGQYFw1j3QbnaTgrdKqWmE5ozJX1UaAPQR7JWCGUE6Use1HCPMpDUhJ9HnNC",
  "key8": "2dv6hBUrBbnGpSwoaV9uuMRXwzj8Dwqwq8xHhyvdW8YReFPy35bMRpJoQv7NFNQsFmfbVuDeVm8NwYJ4BZwHveeq",
  "key9": "5V1LrNRUbWRMdkvT749hRQVddqXRQsjvK6vSx7WzMLvqdtnaRd7mUcjyu4qWVuyokq6qUBDS1P18n3vCEPgVmZvf",
  "key10": "4BH6Kk7h24zGNiDwfWwLm4QteKyUPLRyDgvZyeBDDQuNXmdLa5oTBizC6Lpuy5oEKjv45PgumTKXeLqnim3fYTRh",
  "key11": "38kJKHzFS4a3pkF9nrBuoiALD3JE4RYDcfj3KNUoYfh8XmPFk1p5CEQWmF4thKWsUq4Dv9LpC42837SY8dBv3QRh",
  "key12": "3qwWgux5rT6ttBHgfwNtnvuYhuCPrSFAdXUTAZLcWkpqXwEAgULLyVzitvYdDcJGsgNYejdoTQbztJ93Kenb3AsA",
  "key13": "63sfiJxaYAXryK9V2GgsetzWjshsaBan64CdcAokQ3kXi4Tt4g3E6kBTYCo4NfPXVf1o1NoegwaqBxkUPdbfhtqk",
  "key14": "483i7NpQUnDMXCBfAwspF6vZjMPgMb8fYcUwmufVL2QTLXn6hQyuHAgDgXmqYh91yYFQFJt7C8PBMwxkQSvWoAY9",
  "key15": "3gBEUJPDgB5oDifPtae9pQPcPceiSvSuieUMGqnn4NmLRTMYtEqMtKfC7LFASxL2QUcmBUR6PcBHnF7dsa12e5RS",
  "key16": "2i4QXf8qx4JqB5So6AnaTuCoWzHY1NPUZhtWDooUhMWvcJpAZAoAbqKUZXkNaHRXAqdJPVcJM7WMD9uTNxhh9mLX",
  "key17": "5U63j2gYAFGAoWpbcV1wci9jtmihy6Ce9QhhyLQqHR1xeZMnuSKz8L8Nh94geN5ZrtBgJjEJ3z1r4kFCNnvogfoJ",
  "key18": "4KFCYPkMLJDqR47MgrPBgDb8n6vwnqd1i1EWz71pPvcP34kUV1NwyMfs4i82dHVzg2gJtuWw5najMiH389bC4DhZ",
  "key19": "yvn8N6Z52s8WDeZQ2kCibwtDAZEaaQKkRzgx5YAGU5sCqfLVnYH2ZEDhJXigRncdkwfvKPaNseCRgYhoKWaHinx",
  "key20": "5R1RrAUPtNv4qowoc6B6vLmXRCqzcJNi9vrCBKotGyBFQ1vd5Cmcpx8ra9rYaJUQTBPiig9z2Z8yU3QhJhWTav3g",
  "key21": "3ws9TPaGMJmCzWPWgnugE5XsNEMJ7JQTyEaQ6AJUmj1AouHqqannLk6mwECzvBrrjW5KuHVqpMDGEGWxQJyeKTVC",
  "key22": "24EngUGhHS4fDma52PA1ratrkcxzy2dG8C1qhsN1jbRjTWrVGAGtAXAyNykbapyEXuWi92p12QB9PwtGGcfwEueD",
  "key23": "5BxdP1CRsz6h8KnDaiv9rDprcTrtXymqvseeuwC8wVtYj3ViBTeZEv6pbfrw7etuc7G9uQGgdsZBuWRqbXtFqDCF",
  "key24": "5JdvzsC58SUTHsVjuZTJY5QhcRfxNs3Cdi3VTpmXyYUojXE3TUGcUGaZhUUfauDyKGFPuZZLtfJg3kKcKuETeWxw",
  "key25": "waDX2hmE8tuzTQHsFPgfxcDu4QwgKPkm4fyhzVUCCrsrLr66hqfuXCGuDogdBACePruGBoky9tuk9rgQT8J7bg2",
  "key26": "3HDDB2kAw6vDrxYAv3hi2EWKnspkct7d8KoPQUstvth3RMAErrAr8i4kkVAZaGc2h1GY2XVmAb8iqwjXXCV6CepG",
  "key27": "5u4csXe9EKV5p5JwUsEvQR2dsyh3io9ioR23NM28a25nRZzjXcjPARs63qr89ofc2EMomWSr7i37S953XKSQdwyc",
  "key28": "g5F5xgLW77ywx6RKVbeVgrrvW4N6qGWw76Dhem5c55dGKrBFTLNra9pDFWXJBkZu8Y9EMAgdLb7xpYwktXTTMKi",
  "key29": "pfjoMMHkxLkrDcnuy5U1tLrPL9wMh3ZBcALX52bwdhQUFZjCGSV1c9q3sz3naaNndHK7LRaGthaQb18RXFfKLE5",
  "key30": "rgHXm5f5Jgv9tT1Vg8wbbVAxwnpLSN7gJykL1TkeZ1VJLoGAXShvURGUdRnbSLgFpoQ3TuS13gUtASx8Awb2QdQ",
  "key31": "5B8MYmcEV76ALsAqxiEAS8pRG96dydwLCpDHQcadde5vuEYcCouqBZcwZhkTb7HEfeyuk5TiZsukbSQ9PgTNkq4J",
  "key32": "4iteLvTj7JHAeKgHU5cJ3BCY7mm2m7XZjK2C67aBEwzATLwXvNfTAL75YR6KkgRXUpYw4Usq4yfyRSd3hwEoZoGG",
  "key33": "4kMyijuNkt2TdMvq4bFfrx8xaeJBjH67RCf7Ky5QAZaQ2LEMb8qwjfdBS8p47reJj73HU4iDQydyG48kZGay3vA8",
  "key34": "61sMLi7AnNc9cZDoTQoMCx4rUYZu6K9uNCzhPKuBCqQGTs4wQV1k7wGQrmwWFahRoMCEnqvG9MjVKCTESbyDjNG5",
  "key35": "3ocDpVEuRkEYZ7qenWPFoUnpnK2xVadVybwPWgBow7PoB2pCgbpFgxQkFbqFi2HjPxRPFpMFgbL15d5LVqTX2UuB"
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

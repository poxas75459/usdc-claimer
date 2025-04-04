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
    "3WMoFnAkxDhipR1aTF5juCV1t1B8efekbmLVkNFjFBUHTv7dzn4cbSzswDpwtvhGhtEvkiEV2a2djtdyTT9MqkUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y5EmEBvBUu49qGERL5qEP9p3wvcgwZQtbTqgq8LpEdtPTauwypGrY9NEzMp22P4YbWvwGudUVB98sGuUbMhCDQW",
  "key1": "3XnM8YSPWPG2JgvgSfx43XMD3dgLbR4U55XybFcUqHVCiYE2soBi9wDS6XVdutTg9563GGXZQVoku4AmDAx4Gb3P",
  "key2": "r9KEGXRRdB1MWqcStFpMKNnrZbvPjsusj7PiaJwutC6mPeebypjePWTG1VtdgZGHUyVVnqVBwxxzcYHxBUnC6Jn",
  "key3": "53Y6F7L52wN9S4qfuZ8Ksj31w5MEg2zot7X1ZPaMUfXrXvYpijTfXtU1KVPxr6FbevwHDnatY2V5gMCeLUmYiDi9",
  "key4": "3Ct4dovZf4fPGqjSkj2hYPfksVYku1VfQGDaBhA4W5T6vy9Z8T7Q2SSRPzBiEp6cZusHCMDoC483MheEYmLZwXqr",
  "key5": "3GGovFouWNsWaFTsHcf2mYsS2NhgASSp5gMduvVJKVYBGrtTwUm4wXHVrLvkpWmL3sKMnk5CjusZQdtcJHFNdabs",
  "key6": "5Dy1Z8mHeDcenuhbtwLuxw5pR8Khv6mDk1z7uhh3a5WDDEmUR7pC7R2nHQoYqkysdgwCd6gQDEqVUFcV6zFmComg",
  "key7": "eFT9XrUjazo49P9XKwPPbPRV97htxfSXD2h6oZr8MMCkE79r3CRMow85tzyXbjssAAsqmEqNy5R4zsQVCWQyhJw",
  "key8": "3AhdDRN7hb3XZPYR6bGWK4fm8XnbGJCam3cS5xGFELPW96MBg474bXdGnEGdJc5iJ4iQEJnHLm8jwK3v8LL9kLZs",
  "key9": "54tLL6K4QEmreuL3VEPJYg4HiatSTKqtfvyzxdh2jftRrbETaDNtYM9ExtkZf8pEbwHAXFTdgr1fXXC7bdXMeCHr",
  "key10": "63DkjjLGdkytbt8kSAk6Z8KB78YY8qFRCBYN2VJrkUmpFLVqtTsLx7ky5GMZd96T2NAuh8SKSgH2fYYp17eQyC3f",
  "key11": "3hrycHsSPNrSiwgCCTQkG98A4YiiArqKdbNpXKTobMQHCz2bTzgRLjDbudyW29FgCRJ4a66VXbMD1aZvvevZDphs",
  "key12": "4CK6HCtrVMTW6vNCbEFgoi9juF5pZEZNnjCRav1aR718j2Foe8zxY16pEwPWo31mJKSZLZRLBtRvpewfUaMbc2r7",
  "key13": "bh2yihVSffPAfbVemVWzQ6dbnuwFfwVGsRR4MXKL3pmhMtFLNDaRs7VPGtszbZtjP5E3twc4snjYs7wFL9Hz3GK",
  "key14": "5tgKiW7mpmZW8NUfMgPZ23oCKG1x5jnkFM83edWh2XLYJtaq3dRgYBRepdpQgLd2iAMD8ZzqCsta6G9eTjqTeCyZ",
  "key15": "22FeqtbLyt8h86FbkpZZ1iGt1TVCAJtgd7eqgdcCVJT4cLKqTpw5A3res7SnVPSsRsLgmUVCWCbpijDLePuj5zyY",
  "key16": "zqbUjPDMgNCNc8dzvVhUSjAtUdz2o3YeKxDTumRmysQxyazX3cRouaj4NRGXTgeZCGkvP4u5BMrXcqiG5KwirY4",
  "key17": "4gPJUzWDcP55dkztijr2q4cH3Hx9sbzfqpvkjwAdaAsnaYs64dRxmvEvRiMMNdRxmZwUEzcakfeMqbtx2qewXT2X",
  "key18": "4TGh2PGDxUNWzHyGNDUEvQ1AW22yfAFHi9R7MKETubJJyLx4QNaGJpq1vAqSDxA8hqG4NLGMFq2r9Gubutv7XXHP",
  "key19": "4jQhq6GAxkFG2XYhGANvUyXMQHvTziz2mzWsdJLxEN8DmPgRwCsevPmMh73qsAYVNuSys7je28vBmAiSadjYgDku",
  "key20": "4sUxDmBAMgwwE7wMzAm5w1qDhjnovZtaiuUhLGpVFnLGjtp3kUcNWNSRj46CVdhJEP8VKxeoj351XtsAntQBvpVM",
  "key21": "5vTCtoAhjPCD4cgKdAcsmsATtuVhd9ZbVUcAmc5Bz2fFXtHshqgzvqJytrFt5aTFRzkiNp4DDxJdtd7qmxtbjhu7",
  "key22": "9kNsicQGcnNzuwykhQZUewDy7bQ7Reh3GDbo7EuuZT2M9C1uah9ZXNuoJvuBBp8GL7C2U8QnnmDyA3oDUtjptJt",
  "key23": "4E61SNkft5Hr8dLxEkdWB6MvrPG2k3KNEogjtsbBekaLFYgkmZqdw4QPHoeqSoYtTzNANhA4hRoq1XjntRGYGABE",
  "key24": "23TaSodnHG8seu4xWVzb2q9tybjsJmAcpkx4Ngk1HoJb4bDAqH42yX2yqzxdRdqUdqUo7eE19XSWbciVnA96oByv",
  "key25": "3HPJBmbSAzbNg7pLJc1V7u4bghxsWTYJ8djJsRCuejmbKccprbkhsMZxaDRDJJZHiG4phdsophkbg4JLU8KygxNj",
  "key26": "5VbLb5pi5JbuaMNPS9Q9FquazRcYnNzChJGjZZ2T2oR5cH72FciC1rGA4Vfh4egzSn2d8eGygzqBT4xjQtLBd1Gq",
  "key27": "3daaCgnZevRd3GSXz3aQn2mwK2gEmgFUrkiKjv9xJE1Adpmbbhf4Vdi3auoGZqAJLLxQyo1LHkVgcv6wotASMbks",
  "key28": "NHzeRDGJrDt622EdKSHuHm2Yt3FP1qVcr3utqtnZbbvW3etioJPDyp1S833KxkNEwnvKU6gk3748y8BveVKBGXE",
  "key29": "5UozRMeUZu3Xhy2ZravXsLxUtqkpSd3Z3GqXNyXCvLw6iydYUR33NdeFtbkxTRo91QTqUWxrsNtqJEH1JyPAFNrR",
  "key30": "2BMKKTgwEWGMyjXYGbCa1tLnQj75VipK4QTnvMSzWixfvj6WQ3Mv3dQekx4Fa84PP84PnSJyYjbKUUPecvG7yUA4",
  "key31": "5d3zP2UVKeqqM8bpm1gmWYhtQmn4WdfKSp89MKHP48C6tmoJu4wjAB6NKcSKErjS2i1eiMBZeSuiSz8EDgjTZ2tr",
  "key32": "sTmEjkXiHTcomBfeBakMD7H4vSRsTfbaiJX5oH5RoPGZXmVYUECAR7Ggkcm2ZPKPnfqiLqdNrAsTXQhgdYJ5Yes",
  "key33": "Aep2bGP5rSXTRRazJRuRHofWseGNaQGcHQRanSJ7PeB4jVfGJMdGrWgaekT1MqQv8VLcobn9oFQxMSZXwyoN44X",
  "key34": "biJUpKzu1PTReWxQUSk3Fxydm4uKPPEMTXAtpC57KPjhkNmkoLa2JtNiJoKkc9RidTdfugHG8jsDqUPCTc4yHap",
  "key35": "dHh11PMSeaC3LtAK3SfTNXwbhAvsWVunAVPf9ybYhsHbyxuL6HBTkiz8BRUScgaerT1xkk5B4zqknK1aDh9S19c"
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

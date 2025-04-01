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
    "2thRSaYhNffxaHdFjRYnwV2V47iRTrDCNv7kqAh7iRdS6rqpdb1j1XZnDosNCPNXGhxS6quYPPHq6yyWiCUfVyTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iTBCj8gVtQDf4eM3TFschyqLGEExJnx4EygnT7bSdaA95jeNRPApKnUc4rcsA1t1y69pXccwwHwcZjj1wPyLh2f",
  "key1": "jR5UttALSX2GiHKkkBwfrXFy8cJBixferaFHEA4VMwwhcAgKzmdZnt8AbiywarCBnwZqGYzwBSX3fAmM8qFf6ce",
  "key2": "58gMBpjtzaGVfs2p81mUYiTXuwpXmFJZGh7eg5jQYpyouDSHNjSwQ6ERXfDTig5dpveNVfRkCqNKferwm68kjB2N",
  "key3": "1YZELm1KMKNGgxBKYfk2LEpWBFa4BRJsa3DExq6zd1CNEM5DRiLR5FZbptTLSqT4KAZELwUsLHwhdZx7yJkhQX2",
  "key4": "3QJjgLjooEU94nhGPWxGvkvfRss92JaZNu36wNeEHWxNmDLVyAGpDtM1ok7ztgrP5nvjRv3QywvJJX4MW4ggT1fm",
  "key5": "5xNVcsGEyqeXa2YgjGEtG8CfupM427BZhMffb8k3WSPzHhmipuzFLx9VHq4bgLMpVQaAxxyhNfnjtsBsB1Yf7YKs",
  "key6": "haMV149PpFYJcPyDMQacJqP8tmb8U45ahQJnDsFZb2bdP7345eYCDTam4KPHAp2HgPoJwJWmh2nAZahp9p5Keze",
  "key7": "3iGTJNwAidqF7rYurGdbFQ646uSXAYjGXZWhNL9gGMKQy2Xuuz5ip1nhdTAiiVduR9PPaheLxXe3vAzHHaHF3aCx",
  "key8": "5YVq4BvQ3RQHCxZxdKxvZT28rKgTzHT3DZMvUrRarapFSM2kGdfp4RmY6s7E3FK11XRzVBFcRTVrm2aVPuaLPtyp",
  "key9": "4YXNBqSbSG9JWbxhYbTUTPuf2qepQBxbQUxpFQbj3sQQSBj7VAoK2F8Ve5JTv5fmpBGjzR75NKLYxW7peBMYG5UV",
  "key10": "2pesM6bkQA4ov4nMtuJp1LicZKCVQWeYARGEVndyLpCvHCeURMcwea9BYQPvMPGgnq4ogWUsiTtixMYaiDbURVyw",
  "key11": "4bpkGBiHj79BqWBhQQqUy7UM2gGkgWkeeYesGBMAARHycsMuAdarFFXFKXtj2LVi5TV6ji6CrRfbPyTg97g9ohuW",
  "key12": "48Yr7hHtyghnvdtPzYi8uKstd7FjCNt3FNwgzpXGFWPip52bJFNtYQkxSqdHsxHLKvc8BPR3ovvmMsTRvrsVoiff",
  "key13": "2UEJdA8vPvUU2N4gnkZeygYbzqsuFQJhNEwybtMLVzpNYW9d7z2S1CqcvVitj8RLrwFKSoKfrPtr7weDzHPPACGV",
  "key14": "5qD8GYqGeLYp3XgsXZPN17qLgjzEsR31pJTzCvxn6B94WoWjWyGbtomuX76AcPu7V2mT2BjfpCefuMRRdvd2MyK4",
  "key15": "38mAcBBjmyCdxZH122fTVhY2RG92ReBuDetKtAfAN9tvdramrQzYU4uDGAzUm6AUjuL5bsXNmFvwhos5hiCMFs4d",
  "key16": "4MTN4bFvAKPZDJ1GijMTaPtwi2XUeVTa4MS9oVk3ExZ8NV3cPRFtyhPNxkVdDpN7FdKf3mrzM2LaYw9HbtbjJjxZ",
  "key17": "3zWfXs7pfdubmppg4nfGoxwG6XkEimdDkP5rBGux95AYSoDAGS9f76tWSSj6WQNsz69K2n4VUqPYts4n5WQ7WPf5",
  "key18": "byadsGW681wyz8GWstwkdEJhHerBnffRN3HLqrbszXv4kizukT3W7A2DYFPfJ96Spr4WLjXFwGshMwDfPJGY2tf",
  "key19": "4WLaizvj92wi7rpoFAyDcFXMjSph89GC5WSQpq8UwejvLwrhX8syKKVEkda9g8UF8UUkQ4VMu1nYdHFNLNUKi2Ru",
  "key20": "vRyTc8qeVCXQBn8hVHKXh9soYDn95MbCHdzLRveEdMr17osMnsG2Txk1zs6k54eyKEosh7kMJ9e1wjTngCJKJdE",
  "key21": "39CcfVRjYRrmD74hCHLc5K9AmxdpXVWoXgoj3a2627wcTasUT12GSQSPQdFS7CiiiLJBVSVipjiJGjbAqvQLJU3Q",
  "key22": "3Ar4Zc1LVd3Q5w7LpWQhQgKMrmeWECaApyTHqhGwZ1KSyJ5bRyspjytLouLB6GtegfgzTZuVw48HH8ajDqDosmZX",
  "key23": "2hugmhCijbNqAdyBLgvvUUUHBcAqL2MFvPgSZLo46tvEfCi1CG1GPfddpzvaZZeoFP6hpiD3h1qR8UYBFN2MZXbB",
  "key24": "43NfBQn8gxQtg4B4osmTbGiNUuEYZMNQBemmFZwyB7WhNycqQxCofW4EjTgQCnszjyJKNaxYQ1jqGwrK7HfJV9Jn",
  "key25": "3kA1F17uwNoRP7Ux9QGQ2wDyvhHJB1JN5szRtyyrtEKFYkiLhacFk8ShLbbzCao4H5H69D9d4rmwViggP9cK3CbW",
  "key26": "MFQXMvZWaJwHfzHCgwSrMmSzv2qGJFAaiKdyBLBDvBscXeJS779KzNy6tqM2Mx6ENi7SRwVtk5LH2GBJamzdJCb",
  "key27": "3Zuiz2dHWHRPEJT94cGMWJdcE536MUa4cWj6bAB3oMaE2F9hhuZit8Dg7X1rHYbV66AdPy4D3Zszb8aEhMd1Z4mC",
  "key28": "2idtfKa4eyTMUS6GYVy5KXaU6TJWgct5wFcjL9wZE4zHjQUFhjyDw2vhSbkNhnM9nvyTZdXVRRc4aEdiJb7gPzqp"
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

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
    "4jBBsEe1mNgxa6vVDM2zEUH8yGThURRDdRzJ9UrNLWoyq3mVm2hVEgPeDU5EqvoeWhLMWXrANRojLbkaVPM6dbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eDWeJPGT79uoueUCWCk2WDuEsKB2Md3MmH2azYGFwZvVCxvWbvUy5EF3xMBAvmt5TMVeNPsMA6CpDp2N445Nsqx",
  "key1": "53n7aBMFfvhdoaUWaFMd3vT5BukU8W6CdNmHC5SnV54fFFdBR5VrtcSa8uchbXRCb4ubBYVtRhs3rzitB6xvkrBq",
  "key2": "38diMwTiikX5ktnCH3CoztQxRc7PJAm4og2AEB5fpUKM7b1XN5hy99nWbhhQBn6WXt9rXJ7X6QSujFiNdMMXpehz",
  "key3": "bncL7K3HzQ1pNun89wLVkLzCFAqBvHdJqWPkLYfSvammhMasUrNSSQTszzZs4RaM1j5LffRrHJuf8vUSuYToUNp",
  "key4": "5WdScvP8gy438SHLvAjQgzRiijAQtLvQmkTK1SHsN3dNNeHeT7EYRsBTEK18ngkgg3p2jdfP4A2UDyVrEJaRJtgF",
  "key5": "snokNzMpYrywHqR1VjJ3LDf2jigyuoabXLNgfnup8X985zWgYjoZEAWGLyjCCiLgCrMtyf1k5LSocoCwmtPeRuS",
  "key6": "4r7nBXGofVeU8DDVa5ZPEZmDehbFiaXNGT4ZcFV3UArY9hZRPHggAmGUyJaePAVfTgH2gNcWNRYPqRxYBdtkzrNm",
  "key7": "66FjExVv6W7r9wVu76S1WXDczMUgbJb78wu4FukxCX3rWBBA8WARjLJBQT6FYdC3cEtYN1XCRrUDB4Nd6eu6KmnQ",
  "key8": "63tpwiSEmmg8eaofGpQVffgX3t6XG5BZWeyf6h1eS31fv1oFsutxpmQ8HkJsREFaGCnR5wBRErGBpBuugcNsXbJF",
  "key9": "FSVmRUi1DVrYTq5jkzfJNrvpjCrUfVEdmhDEJ31bcFVXTmFGwK2KXwPQ8ipUpzP7QnwixnadNTYgHBGERCqbjKx",
  "key10": "3wNhoWSSdAfMi5y6nfgyY2tAr2AtzJqZwkpowoKpuUytm7QsqcvUvwsKzzh7Y7E8VYe6MSFT6zZYCrEcfV44aBVg",
  "key11": "5Uaapr3zSaTnu6NKGtGtaBj3oSCGGsQGrz2Bmdu94en5AvM6CZWedAy9bGYeBc8QM2MsGKfMiYr2Jg3EtiGVPXMd",
  "key12": "oDLoR1KVHoSYnXJo81oS5QtXuQXbJKJn7wcAdKExsomHMB2Uk3qj8ndzg6gzEpwf9t44PB2Vka4VVkRaijoge3W",
  "key13": "39ise6m8DZhMqAvYcNFf8jyfcDezkbeLTGkizgkC6qpQtSmktoUb7enBgfBNzvqRhmjsY7Go1GVpnwwcrChN6mo3",
  "key14": "QPSCHxv5FM2jU73PZsGLiGS1fu2MXWmfK4QDZVvR2ETNBKqYb6i9cWfEXyVghpTCvMgYA2VsP5SGEc3cVbJxvZD",
  "key15": "3nCr8q54Lr6fPFgAjUFqqCMeWWFsCY2NMetwPiYEfQpDkVRMZcxWNxSyLihXNjRZTqmPezpVX1whW17zxyV3zybV",
  "key16": "3aC3qge6eXDdnHrT8jJSeYqxdf7FoNAEVQM6aeroZVwYMbe3XWP1ombiBFFhj4q8mkB4NaW1dgsNirJMQypkDgfV",
  "key17": "2vMBrSYjKH5y1D6fshaBFYDTW2iSsiE3SEHhXet5bmMbZwrU2MLUYpMr8Sv67x1CBibcvowPHLyddvghfxtLdYvP",
  "key18": "5eZdZfzGyPzvNq6Y4sa3EcTyg8zEgviY7Fwsi1z2kY4d3Gf4TsQhg9xoVPF14XpTfxMhuEwd9VPxzgcwJ72g32Wb",
  "key19": "4dccLtoBZEAVBdbsYvJicjJN6KBFcxZb2eiVm9AnEEHrTKBtF4qP2MCwEC485itdvCCan4Ho5zsNZVr1Nbf8zWcn",
  "key20": "2hYeKg6VYPAcp9xWjJrUGTV68eVhD4i2uNtACf1p9Tu4Ztt2uM1evXHM2jX6gC3KbZ8DjWUEVWhpC4EAxa1C3Jx7",
  "key21": "5M6qwG3hUvESLQGfe4BgHn29nP3Y6aejTde3eMUDKxgbcRB77jKNR44G675xxoVY9brCsRKL9oeoNVXCUu2kUP7y",
  "key22": "4oYcKvo9MdKoEh2n8PvLCVD2mNfCcT9PBFxdJDrrbCgosU8AicVhWsHDimboF7a361LgmKU1hhQMbs9u5haiGH21",
  "key23": "53jtGhTEyi2VU9S7r1EGmJf6ckpLG7UMB4qyhLunWXJYbvsjy18fHvYmpWmmbcn3uazwttJg8DKr63rECpNhbneE",
  "key24": "2eKPv97BaUQ8PeRtjqnkkz9PE9W9qLppV1XNdGqNxMRa7tyMsuX8JrcGM7Gu8JjewQ4w6VYBykY3a2ZRPv1fhPwV",
  "key25": "5hRxHu4ELzGUVU6vbLA7zZng6cThULSmvyf6xLRcR1aESkGxGqRvqis23B7Gbnqz2fYK1j5oegXcTwGwvUFBYd9c",
  "key26": "3Y1WrdWVshsiTHFH5S8A5x5gskUg5c5Z7r8aokRQCPDrUgrETusMFALqT7Mo36psVfADnBxU8J7w3ZiekkdKioA7",
  "key27": "GrcxPRXF1bxsSV5u5xXf7qRERSZPm5RYtJ7kZSZqXaukRi8zyx81xoCMXhQJo4BXMjMxF5iVCyt9FVEu1kHSNHv",
  "key28": "5Sh6Me62HedDtnxox5B1dYdwvVDXz8NPx4ZAa73DGLnKi2BCMUMSrdBRBdtLYwSf9Np2qwfkvhqUw92HHJFCpDwx",
  "key29": "3pfsLsuny5RdZwPEuZ2doPxryaLZpZtD1YDKzuViFLxoKrWgBJ3zSfj3C6YNvyhGZvSjwzhjARw77MoofqeJAYik",
  "key30": "34BDnTZ4jCawTcoTGBTZ8YGE87kcCZaRWRwrFdpCXF4xsin62jKiBMJa1UtpPrC4qSVtFSnoXMx7MHZgFxnJzEQA",
  "key31": "4eLqM7Y39dunriaaWkxhTwBMLNapN9qwdL5Ao5CweVQnizKrDnUNW7bxsY9V1o6idtor85EZbtWQmj9iLutssC7X"
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

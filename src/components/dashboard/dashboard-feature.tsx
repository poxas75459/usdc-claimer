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
    "f7McHwLWNLvged5FuFbZiqknpQHCe2UJBRWp6SxQFdhSQKVZAojShuvRSc5yvZEtftYSF2k5j76oFaZE6HrSJzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vg6cLxLbSPeASxVqQguA5UnUTqENerkyjEbdxbRRSo3fvh1A3os7newRhcgKafCy8fjegP6tNXjfVmYhR2cvB9g",
  "key1": "4UNvRVk8QwKhoZPGB12Qr1krdyfV49XiXvGyVUtbLYAmkWWdpCDFiHYWkQSFZZfFFaAojb6MciAR8dj4bqDxgd23",
  "key2": "GGb6dfwPszrDF4fWoMkXnGa1ruGYwVG6WKe5WYnRG1hNHnjXafuFNuuH69Ffqmird47bjhXgLcswFgLQcZt6ThC",
  "key3": "2nwtaaB9dhnVdTy4vzgzTzRZWRmMkvSBzmXCrAUAupVgXHmFpf92Kv1iyUBW7DDMDKQC2s9sAKNWS1uExaECwjgr",
  "key4": "4Q6pWcPxyuMnWgNvDyXiYdyfutZtfLdFNN5ytxmfp6MDZS1w4Xaa7awBdSQ3iCMCNJ3wFQnoFv9Jx6TH2m7n4zB3",
  "key5": "2ZqbZnZuTBkCC9JW3xkAg9Pxj2zhrq8uKRRraPJnSxDcBD2AozoW9b9iW2wU6dNqga17aYnx59DVcGScvHZZmkVR",
  "key6": "DWCTKA1zRQBuGzi9LERwCKWQCGr6nYMkKwetuJ2S2zpXFpoy49ne1Pas1oh3w6kJfRvN37Gv1LaK5objaVGywDn",
  "key7": "3X8GfEiFYpy6pkEs4RpfovCLa72ZzwwUx4gbARxFUF1pA79XetRLbGGUwkp4sVkbhPDyKbE7ZQcZybG2mbu1AVeP",
  "key8": "54ybHBUPaUtJVHMVKdD3jySjy7qT2RgTAyoX8wLuMvjyKytZUgy1LmKQwWWXbvvZKbsXpFDGdeJgyrkKUzgiDxG1",
  "key9": "5kKMrFiK5QWqjFAu6ryXJp3GYxLFc6HksoPGgrnsHbQPPBqB31CnrrWZ2RFxYJYLETSCbKptDBcXDQAZDBrjePX6",
  "key10": "4YnbcT86iDpCHW4mbjLR8eE4EKapdK8MMbRTy169RDG7MVHxYiwWvWfew4MScDToBUQtmnqXeyZHK27FFdnkyMmj",
  "key11": "47EAHSejA3oLwByVk1UTDXiW51kn2gMtG9h1HkpadgDK538ru6Kcoi4DmD7BrfibwmXYzEXr3qcrMLkTazFURTwf",
  "key12": "5Em4pqqpDcTFzij5xAwsC41X6mUNnQeMKnyWjTCKQvXWcNqRWwT1vFJ8mguQ2ZPU21NzunfJzRMy12fLPTQ4MrGm",
  "key13": "4nfekY3JFx2uVuP9Smrh8x2kChidioDepJLkN9iLFgiTq1yRh8seDSisCEJUZUmuKocpfxp63i3DqE2NWz6Qjw5m",
  "key14": "EeyRzVKdFsvV4BRb4ABchixV5gLHVn84CYprAqrUKUYUfugby3mRAHrpQ4hKn3TzSMJzyscycGPckfzsQ3zK7Zs",
  "key15": "2yk4REcqjwQHAwdz3m8mCnjwVtNZPS2uHsM9RWe16vPgmfWxnNgRyeCM9Rv73dEyeVCTfY6D9xPJ8j7HZeMZugo8",
  "key16": "4V4w1pkqW9ZKcKa6Yonm6isULEk3KwYkGjM1HaDQGCAij1NiP9UNAU9cNnAwq6tZ9otQvRS4BUMMvtUTdfDBRboN",
  "key17": "2kqSrkCKLkjsMuZFcX5xMnu4na45mAJ85JUGWyypXQU52AJ1xgr36XEiZTddjE7EGdNDGgXMPZf5SpDyDfj6c7pS",
  "key18": "41Wpx67Bg5Saweuch8FoJr5ZrJzxw8uc5XTErUxvuHCvzukADPJarg3dZnye1cA9b9rMcPgFJvhuxacFk7v8Zp7X",
  "key19": "27zeHqbyHVbrVsg3wV86Nx7N9t23SZCGZZ4ufKY53uX4StbKN2qsJwPdpWgjJszL15an6u2GA6pJiSP2iiyTEQvG",
  "key20": "46GukFoRMYDHpWxDu4gWeuH4rg38yBcSZUTg5Utq7T1JgZaLqPMiguaU42FxmwQDCKrKSfXGAyxo6Up1PaanHPE1",
  "key21": "oDAgBX9xAeRSu5A1aMF26jPYMhZia7CSpPMmcyHvTgsVX4NiXuXUqhP4KqEap6qvbaquBWr8eDAmYvHCNGEDyYt",
  "key22": "5he6TtKFgkYAWiyR4Qqz5afttR9NJaFBUZjTBEgXepDcjxNw2x6E8sbaBwrwYDbSfLiYyeZ8FTjsEgkyZDERutAw",
  "key23": "5xAWmcE2ziayfJjraKFnrcg4MHeW6knj9FVT2YEsc3j29eAuN9cK16CEVmDTHWcHUTprCkp9WMNxZMWTb9GcU3i7",
  "key24": "3v32ugLSKBvwgHnxnMehApaPf8zHwfMWDTwmYWEX5FvZp7bLHLtJVtpsZ3gHEvsZi4z2MrNxomXa2bLGfBwjxUBu",
  "key25": "XnDAEfqqtRPC5EJ6tmGzWc4n63NHa3gs4cXfD3QYZWfQjokXsbev2W9Xkp4pPSzPijhqCCG7Ec2avjCj58g4NjS",
  "key26": "3ydB4yMkiLsP8n6P5kpknaPJzfPXr1e5NFfywfWSQVaVd2jsLb6CSw7FkBYqmL854qFMQ9Qkms8EE5e9QoFj1is4",
  "key27": "3cgdoZvpEdCsKh55Lc3T7nTvukDf7Lh3zUFL5CttDqBCoVjVJeKRsx2HrL73AXZ5DLpgSyntGtayfxUiKtmCwrQj",
  "key28": "4y1cWW3hxp9NH5gXEAGFxPQZTfu6B4xtS2P4keqqZCaGuMAr8nMDPPwyhTSTwTMRh5NqsF7k8H5mKC7ijQCFJk8L",
  "key29": "4UCdUtbydn3sBZmteyBG9qjAXc4eHeYETPMWtHMbnaHQ4zRtdpBbZY3mDNGyWcDP8i2izUFbGAJAz4Hpj4w7JFZT",
  "key30": "28ym1ugQ89Bb2t2gBvgR9jDt2PSeBjCkpYoPjtQF7ekvjWYSiYfgnSef7WutBzDnstA43HDTGKw74fGzTkE6RWrr",
  "key31": "5ptju9iWz63MoFGBEQevd15RiYjbD1wCMfHLegsqnT7J6BotX2NErtFHYmqsVZZtbH72L2yufExTrQpe982X7igW",
  "key32": "4JqhtqtH5nPMK8gNiReXDUnf1o7G5LSRnLDRmixU3KbmLUDZH2NQbyyJGLWKGxZnx9AzLmFM1YoPAFAdrB9jsGg4",
  "key33": "63KQ8358fxQcDqq3R3VXwT5gtuX4bxmXbsZ83mVo4h3EoZeLZJvD12nMikmsEVeRbxpYBk9r8ZqSQ6iryPBjF3fx",
  "key34": "3U7162myQ2rEA2mVS1DF5ck5RHWThWfffXX1EE2Z4vqnmv7J9fVvEDwtBi8mNUXqm9FuHwcCkyVe7CpTLGspim3C",
  "key35": "e2WgvkE15udi6CpCrzCHTeMupjnLUnHwfAfJrdppHegUrGQEX8P68EYWZ92vAzuMtEfgoEuHB5mvGdmUYsYtcCe",
  "key36": "2gLxA7tzUUwKB5HUMQNEMMK6QEuNMaGUwBUTzpoGrmfbvCvnH8oDAvJboiqPC1pPuL56nY3MLR1BGy96pQT4gaKm",
  "key37": "21wR7jf8662p1Cs5WqEdMPoyT43ghAJyxxMjgVeo6vs53BLUD7ia9bA1tD8VqnjQQYUDaLrmrxWxn6q3GbiLP8Yq"
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

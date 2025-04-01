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
    "5h3mTw79deRgoQbNGWeGath9Axodox6Qyf4GpdZadQJbuZpxFPw7UZHoe7rib3qVYwBcKtkNCf8nVnRjaqHKYziU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WYvHTM6wGeNN6avxgHtGqs6omo6wpgGCqHhNdCszH6jbWWF64Wpov6AkJXNpwFd1PQ6gmrRX9DD4wQ7p45p1nvM",
  "key1": "45SJbJuoGxzGAfixbTbjbg4otZubkEd6WD6dwcB9uiUHza9i5wSJ661ZTZVv4H1AhcgT6PVvvpHRYgj2y28ge9Lj",
  "key2": "5iz1u6d1AYLnekLBxXhxDXZfUm3JzUE48X8Lmodenuqbn79pzSKXHmuuH2NPsWjfdX7zJjPMbuZRSm2N9eb4Xoxe",
  "key3": "2aYC1cAR5NxRxaUrjY1KXdR22X1AKCT7BUyjc2cZGCQB6LfpGqchFCb3GZoiAPBApGzqhqbtJswUXJedyRVLXSVk",
  "key4": "3DqHompJaeSNeQeENnFRcQU3xXnNodpLWAjX5aJt4wLj1EzNZktPL5SRVpxdJtVYXYDdi97bzQ31WwAH16CWE2fM",
  "key5": "5VMQLWdpUWeUCiRC71qGf6S3CHJgu3ajzqPJyE2z6PRbzFKd24ce3u6ByNSTtRA8R6BeeEGsBb1KqekHMyTKxJy8",
  "key6": "4W7yaMEmpcGeFyHcgwewYfXT4QQnAEpNzLSPav44fjREBVkdM67w8u5VNEmxpAFvHN6hcqED8nWPZZT85UfzvcHM",
  "key7": "1Nc5xxn7nBe5g8gZaETZc9Qy8Gng9S9x36ywQg7vHCqFKSm2PiUpfNgaQS5uQpCasUgkUP6T1pMytGPx63WkDvb",
  "key8": "51j5Y6u5s6P9mJjg4h6EcDsnkexUj4GhBiNggUTrTkwXKEghN2sBgqveQFEKCLxRGDda8KejJFtttx7PxRiaaX7Y",
  "key9": "49o1AsnCUFFFwFvWdBURxShah9bk2grNNTaes3NrYbW145QEdznq3V2Zf3cNaJaoVWS26uyq5GvnysMCHaEB8yC1",
  "key10": "5GyFiGqFtGsrjg42ZWd397GNgvWwv5R7fUFJ1xHmMd557wd2x9Yksm9tAGCsMeidQ3UgYNvfsrwQQ61onbGCmTXW",
  "key11": "3mPmEy91RNUDJCdrwpsxhNGyTz9A8pRRPbJ2oa95iWZUAPuUeMW6v6DmVRxBpwoEZJ1b9A3La9rrcBDem3PLX1j",
  "key12": "2paVSdU2NEGDg3GnpNC4EgkgiRGCRzdAsttwt7ZoTq8ui2yt5axmQjgF8qKTLrKiabY2a5y1pg1HFLyYjc3ZhNcS",
  "key13": "4p698EUycUZhtPEbF6BQirftNaHmgY2GrDE5E7ugzEFpSjBDP1pgy4UQCbobKBFxGkuVBmyAxjzHjzTDCHWRNa8h",
  "key14": "SGQpaDYkQrCe7XTpWntMEf7fC3rjtSkeMYufZdGq4Xdc6yzCVfAMtuz9KZNzFxXeJrQeXsRhb2wJ6HrBnJjzF4L",
  "key15": "PxzmXCrEeKcCXbRPYhU6JPGS4d9wzDLSG2UEtsFgvvVoTomWgELZD7TZoT8DNtpUgtohmUU66EWHhvKEYvQExWG",
  "key16": "3Q5juueDeQPjFMR85MEBioCWWEYVU3ndLmm9X9v576gbwC9eZkQ5rDYpMgWpnWGrS3NcrFLRZTMqoh2RPJQmUC33",
  "key17": "2b12LkYPa6ZrxhpgF3LxP7kJ54kwipXK5r8cc6KU4GErBHuo7A5Xfyy1T2Cm216dr7myYq4VVvTgQxXjHUcAtrk",
  "key18": "4BBNHWxaCB39oucfFVKMfE2vriPgF4AkLgzwgLyVKDSVLorRc7qBBV4P5cM8vziQNf1mt2yqSfN9vCDsWRdTAwZU",
  "key19": "4PSfNPQyDrCG5zBi7aRx67qjaRu4fL4CJSrrpDPKnge3Nn45PHWpMy9tepVuGRjAPi4BrSW7SVbawQBBg3BPFuhh",
  "key20": "657euSYQ6Zq8CjY1r9Gt7nejN7ZyqEF4m2Xna8bswP5mpGZ3Et2BuHfYJrNe7QB4uMJ4dS7v34gcGYKvVzNa4HAR",
  "key21": "3YTaNg2dW8yBKkjQJTx1ySMQsf486GYsxg35ac1H9B3oypLquzkJMF1xyN4jeA3ADDbx5rNVAPW3du78r1BujgZk",
  "key22": "5PuYKJ7BhwpwCk4Yy5vkv3eiV594GfPCcZNE3j1ZMuTLatrYVqXjU5tz8RTyi8rRXFBHNWGcndgkZ7uqbcEjwSTe",
  "key23": "4bD6gvMjXpcm8WhZsZxD7n9KWHhzPkrBEFbqRvXnsF6hMPnQ9mV7Y7pCDkFfJ2PsVUY3AxnRDvGbaEsVEbpueZ7k",
  "key24": "3Xnu9c3yTjCnBrAfiHm62dtswgG6W5un14VnqUQQiYGW8Fhd1tsEkxL57VZjsV8U1D5uft1mytuxBboADSJBPn4X",
  "key25": "2bdR1u16cV9YG5BiT4CfMiC5UyUn2nxzaastWHj7tP7FFpPT6tVvCrYU1GDNkbmvjEDzzHrHga6ZCBpQWEjRq3Dx",
  "key26": "3wXyhyAcWBeqhcLST25zMN2r4Fc5G2T3zQWoBux2C6ZT7y1e9bVUSP8gLCYM3PeGiEHv6pzLU2yZv5okB6HhDnsd",
  "key27": "2knmHxoVF5At45tA5mm7ovXSCKxvJBwJAsYAydYpuLUAHLSymTQuqpuv3yjbmEEBgcFDb5c9w1MX1zcKxDn6UHbH",
  "key28": "UZNKNUc46qHWrCU5QbxCcmPt42NY2sMJBUYF1VzB36uAY9y3hjbdm11ZbwBfLKuJoZHjFZdvfQdaMUoWfwJLt4Z",
  "key29": "4yDqJEUMpGVrycHaREtBeUwMfb3yaK55EtVoj9hHZEGiPyuyr7JjrAG7d4JtebcmGbWPUfx7vgwpUxifR9yWFBRP",
  "key30": "3apXoKXJTdtSwwWMb9G2tUeYQ8M6uz4XSM35jon5KRcvGCzVJ9HkxAqBN154LWjaWzTeitqCGNB1gHWVRAvQXda5",
  "key31": "3aSQmovpRvAFLJXuPdhG7Wop3kCXzomc2z9XAwtifrVMmFNjerwUE6ZjpTJscJf1PGQoUhpE8wSrCzj6qL9b2R2Z",
  "key32": "2ctsHnCePEBpDNdhsigSVQBHztfRXbQYJqEskitrMbabfRtmPeKvv3W3SxH94JV5gxGT5DB91ycRtJVsXv1pcMBd",
  "key33": "3iP8dNgoK8kJz6c2Rc2LgTRuQgGnYdNmMFP8ZdmftWujwZJJ431uzN6wmyKtYzy5wecVnEK1YVVTSH7KuwGjkb5v",
  "key34": "2jtt44PmgJVqVL2zay8zLXn4aU7mnqBdf6SJr4sGPbRxtCehHGrLTJWi1bRYSvc4r5kdWtAMQuKFU6dphtNPhFUa",
  "key35": "3tEKcmML3Fjzk1qSz5pBNBpv19M5PZqWK6m7dW8fvvM1DRfYVVLyB6XyfmbQDe2Zh5UFWSSucpwij1s948u1eTii",
  "key36": "2VaXnkCf562k4ychSNZeLuyZxknndxvdFpQtrSt53gCgFuWFvCjn4zTne8Cig2zqdNAmfbBxvhQftj1hsxKYBSGS",
  "key37": "LEPmCbqRkLTNExJT5bU1Lwu3HhaJaWi9TP1RuC277bm6uHA6BxrVFaSYGzriy9DCAFCWF5hz4PJ9GvmUyJ7fsFm",
  "key38": "5CXJqzVhfyz4q3unS3u1A81JuuhJ12L2ChaRaZEQdGi3QWyPqpij1MFEepDQkQEmSjBC74Y9Ea658vCCDCKunDVV",
  "key39": "5uBSPDVNS3q5CQk8f291xgpk7KoHB5Y332rX2DKQPTHizdnsd1uy2xAW5MrRLHBx4VxynGpcs1WBGnsYURXDbb3k",
  "key40": "XLXYstVaeSn33p7CqaKbFiecr2hFPYTtWgLTgtixgWbXXCjPDjPPYqb3gnr3wnSWdnCCxAXH1YHc8BtYFivE6Z7",
  "key41": "2q89dRV4MRyDV76kKpTBGqFaHyfcuVQmvRvj8XHy77phTaURSPTLJKUSSj2TPJNLEaX5Crf71U9XpEwgpSqEiwWn",
  "key42": "2uywVamr6wMj3hRkpX6hxnC4SHBjZZyN1BUGzLyhaH98nQ2Ghz587GAKA847PFbomg3PoiPxa45JqTn2hWstEB8v"
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

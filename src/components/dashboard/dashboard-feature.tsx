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
    "4YUthtjyzXnk2YW411HsSvLewb31Makgcnbraxj8e4McQyNM2KW4x89cHNQUfyfsedriskjKAaPLVLRg3Xe5PesB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39YUKr2MvmFSuCj6EtUgay4LRzRpQDoG6N2Yt89iJYgsNhHemErXYhvj59MdzDpkBBcYGG339psnXuKJ5JcnET5",
  "key1": "3JdaT77BTFcRaoKB9PDkJtiUBPNE4o5E64es6pGrMWhQHfwGTv8uh9Hkd6dkhMVEfcjpEdmdimmS3rEy537Lzj56",
  "key2": "2Kwe8nVpoSEpgtJ3MF1yN2dDoTEMyawMuAiDXx97H7dz9g7Pzwdm7s9647r13AitkW68ESejH9a2h7qZaMav8vWG",
  "key3": "noX4QHaEmxMJfpB9jCVNcB6tG92gJQFwLnciZqN98nemZTxmjfxDdz1Gn7ovPB6b984eXQDToWbhWjzoJzNyTbg",
  "key4": "4ytQpKvwQCA25MpqSoJeWybqeiRx7yi6me1aCMcdzcpr2CyQhikm2kSWKp9QeLfySATsFL5oVZiqxmDkC9fjoAML",
  "key5": "3TXkjdwtVDrpvApABBAiB7YJ2vtdacXdrqnHFXkp1D4CrBcsxcm46WkS2nUbQ99oNJ3zQ7jv6iuSjqQEBXRTa4jJ",
  "key6": "4bmw9jX8srBwgPtvYZzVgnvpvUkv4bxSsmPYkRxzwXzLxbK3Hj8SQGNsYkUuNkkGxobLBxfp1UhTtdHTUs3P8yx8",
  "key7": "viYqswmB9DFgnyMQQjgPpjCcWskkY2kT3Z1P8YSxubzBB3Yuv8jFxaFg3yzk8PVojynq4DyG3GeSWq7kbk79tfG",
  "key8": "5yncbESYPTzv1paYtS3EWPBbWERadeobBC3HBEJd8U2yBz5f28xwAQauMz4xRtzNJjpdiDEna3ofuFdfbm1kfurv",
  "key9": "5UhJvuqeSvPudmWF9LwijuTNo7wgBKXbNYecBZBrXSKWFm92qwuSonsVS2rZ5ahdReJgtzFBbcfYH5mmA8yMdZ4B",
  "key10": "3zxCv7972GZ4whsbWbE5ULYaSEwzG8CPEurhsMikQGEhCKtsRBV6gERewDv6vwK1saCVpd9RWtTE1LxXsfCxHThk",
  "key11": "23TpQSzv4Wsv8TtnT49KJhRG2FrQuNTGWk9cPWhzte7qkJn58pt7Jg467tzgVKpnCKVzC7zf3UdfcsifNWJbffoP",
  "key12": "HKyQe9TY1U2AcThTtvhdXZ7tcUMUEwrgEQTfgPMGgikWgKKBnwHCCRasJwevEWhupBfbh44sLEUWMycTst2sKLz",
  "key13": "5CLUXFV3aFTCQUdLeyBKz7aRqMVHWJfbc7eEkaQpFq55GNApQDcWQu4BDjdPtEgmdEFPcysnwxpLvC9BTaRQn7Ue",
  "key14": "2jq3pCvpwuy8oExdVAT7gEojBxWyGEcwA6QF45kXtEPFZciFSwack9V3YKTKU8zTMfRArG8fVf2PaApnRTPp2q6j",
  "key15": "4j4DFTmDWPEEhG4VLpka3CmFiWz8JNPjDFFcSKXrYPAmW19qukTS24WgvmNy5cN8MtN8R4n2qgH7RtLjGdCoguPx",
  "key16": "4UfDQKvBjf1soLcqp2bsStUkGX4jWrPALm4e9As8xgmhnNvGKJHADYHAqfEECGdfwbwtGaxVPDoCqLkRFPbBgcF",
  "key17": "3qfz2X4j1tbm2MmAwnvJtwkUHXURWb2wvuNyHf2CzBSPPz4qKEc6dwP1A1QQDeLz6rcNMHMyz4n27LnE1112ZRHK",
  "key18": "5CYX6Vpgj8HEQbK5LDVdPiyy2UtoQtwR74uEeproiQ1zVxTqupMGWsUZP6uwdNb2FgjdkcvH7mXvPE5aSzEZqAVx",
  "key19": "5G9WnWXieN3E4n1Sfwzd8nkGwuKTXNvg1CNvpEsthgwHi1973rywXQx99EfZjww41ZszNCDmmxcSsn1rym3nAC7T",
  "key20": "4G2QBZa1x84wTMcmVNyvFmXiWhboYVX1jEKHQkzibnGuBvBpDzRjpohfyS47VvUWFtL9nV7spKX1L1jWN2Yrkvht",
  "key21": "4y78Usvifkze5Ah1m4ZpgG2TAvTSJfHB6ckK61EY7wU2x9q4GB7PmgShVZhXAdFDUuVLXoRMVcyGuWXZi196M9Hw",
  "key22": "5CE5s8RmnLCozpVdatQkhfD3TBqEW5fGyjpv8AUUpvPyYA9xXEvrhCCKY6tTNr7oTz5CHy6d8EYgWASHd8otN99s",
  "key23": "4z3XWeTVwyW6V7uJQ1ioB7HN2F2nyYkaoNKL8V6EN15GJLXuL3o85kJ7KGA61cLBdL9tPewxrPmGRqAzFm44vMPn",
  "key24": "5p2pYr7AojgsCHZJRrgBiCuSCjmbnmMGMLZwHhAQtFMJM7tWVN1Cy9ufZzVNk8LrALhWMBGFXRHKy8auLFNBpuTF",
  "key25": "VT9bSgeXrbiuHKbsis1VtYWsfdb5y8kjvco3QRkdxAm1nt3JBjkFNbjBMTshop3KqDPcoUujUFLyKZA18QE6Tg1",
  "key26": "4PaTZmrzWivxo9S6wd5YSncMUUNBDWrGcKPDhqV9p5H6qvepPhWRRgdheYEQpFkWbAYaWmbPFgrv1xCnu3SdAEiW",
  "key27": "3TzxsBYTHpWASqoKiqsfXG43fGVUZ6CDM14QY1EGxG496cWiGUpnwhhtVS7en8LEMAzAmg6C1JgTX6jJq6roiXSK",
  "key28": "2vncYk3saZJEKMuCrVAvEhKDfHxhH4Rn5vyVyQZDtaenhdFucduNp8xVDdvMa21hfbYpuXzNPLaveSEGKftLpAJ5"
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

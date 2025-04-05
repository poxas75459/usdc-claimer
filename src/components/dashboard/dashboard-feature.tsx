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
    "5WdAXkzJa7ANtKieLgiFedTNv9E9fmHgjxhDiJE49vrENWURWFGCVHAt9PL5y4HupJ6JrJ98QYgpVHvAGmiHDzpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N4CeMpacQqtkuZGV4zvdVLyX8dKy8HyY8Q9aqUSQVZAVaG68wrRJb9Eym33sCLm4JgPXLv4thSuN9GZt4Wpwjd1",
  "key1": "2wkSRw3EUzA4PP8ou1DoC3jjaJQmkgoa3eR9uohS8R5kQcPcMiizUK5cENVaKQM8i6sSjdDE7ipi9sc5s47Yjxbh",
  "key2": "3UHfeGtWSQvAEto3nH9zeATyme6AX14ic6JZ9EbK9NEoPQYcs7sbD9bkDd3FJ8MVWKuFbbh2MQoppD5nLngTagmK",
  "key3": "2e5k2GqnRsJGfs6SUFESrZsxAxQ65j663JhSn1mjKjUjq4xNkcmpBJigTadi3yGRMjaJpSDnunZBRdAhNrX9zJd9",
  "key4": "343LMtkGrx3jYcTcMberywaTERdDvG9ifwKYwupbkqEca5eJ6GuCgvo8drarf4J5SR8diYE4cAfvaixqsA4Wmru3",
  "key5": "39VAo5aDL127hJWX7TzAg8q9Xppofx4d2nZu5j2HDcrBTqDbVWojfoFHoti65iEi8D7Tp9r9fVSbYJ3ZMTDiCWK4",
  "key6": "3LR8RcUy5f2KT8P5cRbhYB2w6mk2D5zbJ3b7PkMCAwbgUHaqZGHnz4vYd2fxZaZSxv55tYwhddXAUgrV6qMqtP5j",
  "key7": "5G18miFAERTiqK2KgbyqbZAfKHqHji9fwx6aicXEGwA25fgK7WrYcUTGGYwRASKw8yaESbkPkWMKYu89kPJQzKaD",
  "key8": "3NyRdCKc29nB67S2hhyxMPfbYTT32VkCuGe5ABjfeyKjPLjEhVyaeUmArHQ7VMQrsuPkdbRiCtmX2tSkzcZ4oQtR",
  "key9": "38wbU8bGU3ahuBTGW1uVCMaDiCW3heZrquYgho1Kzt35h3xngXkHrZqBJZYFq546bXn6VaiwR5KaL2KpSVcwEn5i",
  "key10": "4yVCPE1Rr6vRukiPGZTTZS89Dushfu5rqUdYttfSpVgZp7patFoDg7ikpVTMM4mHGPrGNwporPPiYrqSS7ZksroT",
  "key11": "2ftpgXJje17LW8Tmi6SD65b7LcHro8CGRvGbbHWdAq9dux5UvpC9P2FUw4eB5ksvquEpSopQApYn4dLtprBz1grF",
  "key12": "gDjhGrRZrnQ7HwMpAD7VQuByhfYDCCgeATzDWEKhu6pPDcmW9mhqiLBmKM9pERtpivRbNq4GitGvgWy7RBCJWPo",
  "key13": "5Lq2EG3UweQ4P543j3qDnDQhwLiY1KKZvejMPuygNoLyGPbM4BWQr8L9djKmRwhM1H7RFCCnpeCqVSoyvNmxPyDW",
  "key14": "2DZ16bkxdwkwSLGQU8RFutjFAPEadE8RbugkwEapRrmFcxmYFtxzPiynQ1paMdGSB4CQpgSckeWYAs8QxY81FWiw",
  "key15": "z7bVomeAnpHmNyc6T3E2xbZsvF8kWZEh5RMfYRkkRBbT3xituSri23jUZY4Skxbb8pVn9swRkRitpwBS2vvCBDS",
  "key16": "FdWPqGj1b5MXN371PLcqvyV1riZfTavY3NpCxk6BAFBmz2dLQyMmU4VaiZQv6DB72rzfVdhmurm856hi8G3HYM1",
  "key17": "5nGoiSCnqEzGBjbmosHeMRLNiAQaMaQTaL7nVBniaKdTU2qT9TJ9M1ymyktxGRYrVX215YSG7wMTe5D6seRJbQ3y",
  "key18": "49PTHtYkhZXaAcy98PFfA3iRqHuK9aY9mFNVThh9HBxJrV6V8GrfMqz4fDfmGXNVtTFGLqSTTHwQDyQAPtZewzqf",
  "key19": "27TFiTx4Sr4aDtMm3EFGDX5zCn6keHD6WcuFgW4yfqzH12sR3KzUBpCthGuq8swX67GbpxxFBm1qnPKS9R2mEzqn",
  "key20": "GNdztvwezxQv6FgwigTfADZSkdysiZ4uzBsCDBBMvJSvreW6hcdy66oVfSWThLFvjxMhTdxxtHHQgCv6HQkGTNA",
  "key21": "4g17nDX4E2REvFthy9mrCW8Q9WitRzCCyA3ACyVJNGJ4rHEuDQQCv3874FNwSmiLrmA7q679ima3CCRhn3WuH7VP",
  "key22": "4wmi939XAbZ5c7KYcLbh2uQYj1yLB1JpGZ35sv84V85ysR9LRQRjodncwEY2wU6pPpUCFHbNiPm6a2Bp95F3s96k",
  "key23": "5nh2B9jbY8obaRPEGkDiFYVk5DzvYZDXLdsZyFMuy1xU9EdH8tTNs9mBKQSmdipLZFbnX6PSC88x7bj5WhoHpssX",
  "key24": "3MgVuv47rjspv7qFCFdLpv2Lq4fADdtwrkM5ZeqCnuTDgM1nRdsSvzpSf15KC1mEoUG7r6j9Vqo5KtGbsTDYCaY2",
  "key25": "4vhDcv763GArA1KrzKPe7JnBwaVEsKezk6jWQ7Ju24yy1FDXbHHyYT2cFbZkvB2JghKTtrKKEuYe8cx45PmefaBQ"
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

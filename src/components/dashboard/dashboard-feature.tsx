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
    "2tS6oxnRuxpWantNnUdxbaQnP979V6m5YUVWQs5iAw6rmM2xxG4yuBFcDWaZbYdZRij4qWF6BRNAEAZtKD4rm7yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CTT2K97wxg9eRYuePV418FQ1YZKtKjBvKPX57nruUB1SAEaCzw5VkCDEV35nr3F63G7FeyXMnJBvdZ6G9e1yCAd",
  "key1": "3NDZtuDG1VcKZPJFoHLoHzPTVNt4J6rFbLe3RN8jvWwuJw1F4TQG1zWQCjiPETMREhEokC9o9Q3RyW2b67gUbWnh",
  "key2": "Wwuy1Eh7Nn96YnoptATj5RLCNw3c93oJwj2iuoPz2oWjGWPjHViq98DPX5dJpNmrQid2Pua7vPa6SPU8rQTRzSR",
  "key3": "2BbrytFjqYSuxqL7jpYMGrBcL1vDG5bYvcWtmjM1FVBurVAQEZfQ4NuSwT7JutDsc5um87CswYxhjefxCMfon59i",
  "key4": "32wbA8CMVfJcgQ6caDxfUj8ihdCasZKkfX1xAe6tuippCXFm72rd6wvnSyYFCyMjCDcNoK41MXsmGCHbDw2UDLGV",
  "key5": "4n9moX6H4K6T5D7U558rHsfsUjbF5RSxvKA8YvhnH2PpoRBPwsptXacjPbuBMBJdr593PFut66fjZ9nzzrNPSTJe",
  "key6": "nsyyfZRH7jVSz7gxcaY9dx3VAQLcLv42MXBJ2dHkYcfVDuD3dPqQE7z32AHQ5sGHf1BYLrCkxymw2uaecCqxn5H",
  "key7": "4nSK7v9BEyTGPM63MBtBVRNRYxmRbNZ1U39HPYMAahioRQZUiYrkKjBWmg9z13LtH8VmMXYLk7jcY1cqupWXGJ1h",
  "key8": "2LsmiQQHXvhVYe44bADWgvCuE8VNhRQ1Yf9z7cyti6bcoSvtsfNwBqSKe3ATnF4kY87e4hNy4spyUBmqyWKyq4cC",
  "key9": "4Fe3Mo51nYaBb4JRHdNoJpjDwqtjMBpi6UaUrYRMWXmpRzHMQELg5GLvbmBbiE3KWFVpfteoKp9foFgpiHj8veNv",
  "key10": "2Yq4eWSyQHo7EhqRm8i7V79YRUb6HcYvihoWGdyrnWhL1p3cA8yBow1hqfmhk2k5AZ3MkQ1HTc9A9FijTW7qT3x1",
  "key11": "5BgaKwoWrcH7wCdSWwV7oyJN4i521TFiAHfSLWP2PmNBqjteec5w73UxVt4XqY1BGkeYWT2x6Td47aS7oyXyZDj4",
  "key12": "2yV28vMxnVcb49JZfdRR99GPzQxa1Apkvffg8fEUs7X2dtGkQVpWvEdz6GB848EdiqwNfAiJiWyAkDr8VZ4neo2c",
  "key13": "RC4uc4iR9n1xHXkf5qRZAjZVDBLfihomB4cEqrywjq6v3gR948326zgA7wYEDG4Z9TEhqYMENZDZ7tchdUudGut",
  "key14": "6VFMXmQcjBJLcHZua41YVjAtXgyjAbp2UeE5XVSiFRZcn7VNuHnCZ4c2s7HtN5Ab8ZZqGygaCjqv2azqYtUnxQn",
  "key15": "2S5imFMXaMQ9ppuSMtYKPdwErcQY5M1ozBympaK41ZiQsoPMaFJ6sTVfGv6uWk2PujiHzwjBouw9pGT1vYW5j2Hd",
  "key16": "4pSs3LgTSX8VFXCHQT6cW5fZt8Xk9HgL1jCpEHwEoSpeScKT94bB1eRVUaiKHbfPxi4h7wT7ZF39t4gxccqae3Rn",
  "key17": "5CRp65XSL8hV83kR1P2vQaQ82QKmfZ29vLZzFsuEp1LuZs3cdHY57U2GSssV82xJ69bkWPAK1zp7AxP2mHC5nacR",
  "key18": "66p5DjmVMF3jc4mgeMVFu2qfoWjAKjYeD3PKjEoNigQ5YmXkohn6v4Qpp8sWUTW18aowEM4A73KXeE8Q8iis1DEp",
  "key19": "42T7gXtP3kFTM5B5ZqA9ybaTEMoeVHQ91qcAeL1fPWnUbP3cp49je9hv6WhgAwqrLGbX3YZc2DzNjxi28rMGFcuj",
  "key20": "26UqZsvtEMPnDCvL6GNmHaJkJBthkzwjZgHVyoPv2x1x7GetG37yzYLAS2DTTcEYvY8qapGAaGbkK8NPyfxq2kgL",
  "key21": "V5qqG2abdAcHjf8rYjDegFrqQh9jvgFiWaVeG5JwvTXdPKJYfqLrC3XaSfjQYi7ymS6JjBfJNAwYcCDgHUeHzwU",
  "key22": "64M31gnqCrYNG3yTwrf3a2CLJD6S5kUGBQafgWbXzKRxxe6e6fBz3s29dXXw2bWaUBDsSUf3aL685RWngoow98W7",
  "key23": "5TTask39BvSuTYxREkhwCRE5uCNG7Cf6zVyzxPKUEDYukqDcJNWkbtdRLBKzLevT8qeUTtmaYebHePtwbAYrcqxi",
  "key24": "3BM4CiRvcff5cYd3Ng6pxsLZUWPTXGweV4YZM47HCSZCWfLzgbBQwPksQGeGr1mvTvS9ASjv5cTwQTjQc27zZf5s",
  "key25": "rAU7v3J4wx11nYJkSJy7KyTwY1hzYktbGESCiaNuxQxzwqQqqqovzMvZEWtY3Z48yhmhNxNzUCTqKmEoja11nH2",
  "key26": "4jUgVyhFHSxAavc3KeAbgbkAEhM9b9hgihr7PbusYJkFfjkSxELxvUWLdZdm3aFDShaVgZTcGb34MijzWLW6r7tM",
  "key27": "3tJBC4XtdwqzgkGRE4bx3whdFnX8dZFepfSXkD2iRFe2SCQRBScJ5wkToz3KQjMQpy6UnDbTBKgSoC9zjzk83CMj",
  "key28": "5zSa3YRaCBC6QvEKWznCYkTc3FCDRfqVmpox8uV4CJf5XXTgYq58r9LZdPiHpvwhGNLmDSdhNmZZyYcoFWcvTVpU",
  "key29": "3mQ2HdEFHavgJNev6XqMr1JVjADowiHuGSvZzfk9JfFSQy8twiRZdF3fdRH9i9yex7bEaPcjWzQ7zEhHgQxg76f7",
  "key30": "3AjSibJjg5uExN1wBY4tV59bBFNRxeaJJUqCxLwLyueNXkvgWYwdN3B2DszaNjK5LPwHxX56vxhF21vpDP15Uw5V",
  "key31": "2NHooM4HDE8Ug4sFgH2GnGLyatHXy5WXeYzShcKUBLzzkYKjYPfcrHax7DshEDUxLRHXAtZ3mVR1xA6VJZwwotVc",
  "key32": "4Xccft3HBidFE8JzX3CKkEjoDXDDRU6SpXsWSRTLR6aFTfXp3psP49BmqNaSasgfy36PsGmkMRWAfdtznwHMszS",
  "key33": "4gDrwmGfaBJnkQVTVfrxEsXXhWfui7jiJD7zkweiJd6a3cYa66TnHY2vdrepKxP833cYgCwG2ftysGB3wYqYZY3o",
  "key34": "5j6BXBuGXbcV9PFzutA7YMvSr12cRQn9ke1rHYN7kepzkZiDYrovJRRAekRFzBeY4ho2kzi7xRzfXmpyGVCTi139",
  "key35": "3oDFGvvuR5AUsuZjSn4Z2vDcuGE54DxmnjjQa8K4qVQWdnpw4GqVqQtqohJf4A9FzYG2sapdcaxp4uDZg9asGq2N",
  "key36": "3zMC1TsrAtF4mPLYaLKWKDmXK427zjDfSotRHEVYDnZxMi8rsNXqqHxDDcLeb5e5bMudMnkvxYS5R18w8y4SrToB",
  "key37": "26ZtEfiajuRtX9vjY7gjo465UEdk4TPmfGYz3cvpsAXnxtXD7SgC1Vspjh7Gc2pwPVWgsMKES6GbEAT7VTZBcHCg",
  "key38": "EhWH76SvdJVGLtmvpBcstkArPvG6iByjyZxq46hxA43sSr5UsWGxLbALRu4Bk4JMD5mynC2EdBsvFwGaYphWET2",
  "key39": "2fvEyA2n82XWxv5C9NuWhPscGDVyFty6hTjR2wroFkE6DSUmUxWJYmu8CB29ctqtqhtZvkMXxyPhqYERpS7pkToJ"
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

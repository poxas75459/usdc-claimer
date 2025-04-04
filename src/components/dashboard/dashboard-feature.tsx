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
    "3wGCdsgpsfR5pxFtvgsE5GGBmTQNKPH4Xf694xrxdg5FjKrpPibpB1thURuZGBc8KSXf6PjXSKrygbwDkeNd6pMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vsc9DjBEp83WZfmRwPcrZiJaeg7GSNsYSbrHUZhrjPZjfDhuiq4AbeadxVYZ4a8yVhrDBEjNfkzWLjdhjtsgKkm",
  "key1": "67n77ZZ2KJLiiUMRyR8xVFAAkHhTh1iDucxhoJiD4hneyMZcvPpvMXsrBBrK8jkbsQZQLrLFrt8HkkR3H5JURdXt",
  "key2": "2m4PKfAcf3Vf9ebV4H9sgARXYuY2qLvXxv8sxd9FvM1pee7LawaLwg7hr8M64eBqaYCGdDgk7aTVdqK97aeCugfC",
  "key3": "62A8QKjfznBtLV5mRNGnkNjobH7GCbywviPCPJERg1R1kgA51jPUiDnFbnFYDeiGJf9DvZvmcfTMdYf8Ck6yTDiy",
  "key4": "61GnN4VBhsWiY31fMR3t7tkze232a86i52eoez6ctFV4LMrD4RwTDMevakRPTjP7hah2CueZ3Bt9ZiwZqtkRon31",
  "key5": "5Dg5MWaoAHxKFQKbghHr172cxtJz4DfXwAezp7MtdSdhmbUzqHfQsCaKTB8UH3rcXUdiQb4YMjReNyEpLMxxab2f",
  "key6": "C3v7UmLfSMv9cm4u1jCNitL3PxsNS3u4sootE8761pivhRGEgqxm7zQRxkav2HRfWa6D9VQDJTgksgBSxacAwY6",
  "key7": "2MyFGq7qVkwncnpaqadBuoCG7pMQyZq71P4H9oT54F5JLfAvinBNXWjAdKSeCKr3YbtDv56K33gdYUX6Medq4Ayu",
  "key8": "4M5hVGbWzZqTTTaFFNKiqGFb6bxqcdzZrVHzg1kzZh4NfJx5wmvXico4VuJJ9mQmPcadsfRa7ymP2rUDhL5g7sPP",
  "key9": "5bgptMFmDEN9Bdc3snBMTzT6mUz3eAydR24FBA8y1Hw7pjUnJLkNS45pgVph7qexSrA3k4Y6vNDpCe7E3VmkyHBo",
  "key10": "cE2DWyViZwH1iXPRmc5PwRwt4SipTBRScMaMirFYw8de6ruR1DVnin7raadeTdRQb2Ps1h7sQuMjz995ZVxwTsE",
  "key11": "wk3GwZuFuHeVh1kbFmVhcbvnX8NoyywfgMmAm3Yj6EyDQcB5LsfyvKjFNAR6Qa9NCbkTiDSDJbhXJKmPNcb1oU7",
  "key12": "5Y4CiAGQChhCKnrYTRncdSLNTGaMG5SSdBjAEG46VzcMVqdU2VPUZzHxqpHfjjz4LiyE9CqPgetK1dRXaqCmriAW",
  "key13": "5cMT3KWcS4vbbk6q4rbqd59nMAhveiivmuDxKpnMc8JfD9W6fUNLaz19ioNyMNUN9KSVoKyARP3dTW6Hs2pcCwrC",
  "key14": "JBTSMNJpZLLj4NGXWzyPERxL8XicuQpVFCoRm7hGmCvytfFMRSvQTtCyF5yCieYS93FSFt7kGaTqdB9qPy6ugiE",
  "key15": "58EHVMtEcnJ4vMstEjXEbr32Tpf6uHRmVMnnTnFHrp6EzxfucjotMWBKDd3QYoXtMZua9rUsqZ7Rnr3SyE6kLo3j",
  "key16": "58DYdVCMtxTKnNmWgbAGEmx4dycmHrE6wx1qQSNJ6vciXQYTA4swn3buNuVrrgCvcwBXqYBjpGvg6p1jrpDZiMk9",
  "key17": "2w2odihKwaehwE11eMFgfVTjbJg9wSFekkQnMsPfddyerMQewrjmKH5M1SzfDyoEkhpjHpmXMKQ6cvsewvKc9zDx",
  "key18": "jyhgWjpLzGjv8YuyGFu9wa5EGtFw7Un4oPpZhgtyFSGNmWNBTG2qeBaeRD54Pg1SiPpsuka3WsZL8bwbCaY9n78",
  "key19": "2RDeks129sqPfXQnB2b4yVvxDhnsjzcBNZ2CcCn41yDZEGGveFWAKhPCeSjvgd2EH71i4gxe46fWUbdC8AzTuXfE",
  "key20": "3cP9PM7Zc8FrBqBqoa3Bi46VFSq2UsCTMMTN97wXgmX2gKFfRaJZ2uFpyCmovnishmXpQnXshuZwHc3F9r6RKcZi",
  "key21": "2yxaW9KBmrfFzQdD5ABL9wcS83GGHyZrRRX7qbjsFBc2PunQBGpGHKorVcxECMaT6yFsibjwnct5S9f9Ux3g17Kh",
  "key22": "24Tgt1zocjnU1pbNSnbeMYus2H6tC7UdE2u8XmCbFHmo4pPXvnsJR7joJcC6dnc4LhihoUkUPKCYGHKtZ9AtiWqC",
  "key23": "353CV3mHdeYdULNNfvsexq6LYd6EJCYev4TgnrwZ6psLEgnqVW94zQRMwWh9SRHG2ZmEYyMywH9CCn3SXVur4tmH",
  "key24": "58CryR9KwGwE65ErZsRNsuigQHsvG8dkYbLPoBeee4oQEreFF5uTJbgQnuHkC5UkRppuk15DcvuTimKb2DbyanAC",
  "key25": "3CEC7u8d32NpAdYrMtZQgxLxgCEQpBgvBTBKG4eu2FEFoBEcR59ozodGm5Tv5uz6jAdMRYLouYvb7GhBzSnKD81D",
  "key26": "4LnVGFY6Tg2UehTqLZY7n2nGpU9PMfcC6HhfZ1yJbDgbXiAZq6u51MKs1NuppwWmzFEW55nUugbo7iPe6hxG1aTV",
  "key27": "4bTPCSSeFbxiuBxtKqgxgbV84X4HnbEA6ckyADZXg1eJMTxfRJ3AQUbY9AMY3q88JGGihT8WGtRPfg7413nmuWEK",
  "key28": "kKdcP8VWFgxsgkBEQyCCBhUcTbCu7EKWu2h5ij761j3iCemTpLv7Ecqx9JHy2NHYtPMTHz4joHGrTnozJDELnq2",
  "key29": "5qupAnXehaFNYPfCX4drzgMXGRYiv8fVnaXfj9JQ4ADDPetXUWQgzN7KdkXNijK7Evthij4otNM4o9jaHUHefo5J",
  "key30": "tWQxGi8w1PtNUR62qf3SRwn7ZBippcn3JGKPuWTULLGiv9WJ7gBiD2srtCWyPh7b3h8MFRr3EsSyEVMBjLjGLgy",
  "key31": "e6cfac95CfBK9v1d5hbgSD3JemzcMfiwirHJUzxo1mW81iLNTZY3PjiVwV8budpfpZVQjpxs2HZ92NkwJZdroEu",
  "key32": "5uUMtcq2Nao5Kq7FGiWGSq4eixixrAzeBU3ciaUM95RxgQPLSyqhRxrCkG3hg1MoeY5dRv6GnTAX5M2kc5qvX6Rw",
  "key33": "bWXMPoVvHMvACjY6Gb3CD8ySkoZEz5RmrDVboymhkEiaMivtS7ZNtsJZid3Yf51xLqzkXyXWKhGKbuQ6yzGXyoG",
  "key34": "436cKX8wSqUvYNBm2ZLdCz5zZ7hAdaNQDhBdoQTDd5G1pQ6asefguTBbqQcaU1g7JdVF2DegkY7KH3Q7jCxRrKwN",
  "key35": "4eyEe7yDqJQrmArxoELgeavoJdtqPW5LuXb2fdb5wnvS3E7DXjP4zpQPQp2taexiAc7knFzZLjQEk5DAc2HPkYoq",
  "key36": "9AkvV7EWTshX2cnHhi6zQWvafPcqo3yDWPUd2ZtuUEycwmQ6rknDhyCnN6qM8TG8DAqeJERHFZJuVJLTqjTDcbk",
  "key37": "5XPYSGC75VpBXSxssSrY8KYenXj7zBwUVq8AZwoZkrUwV1MnqWG7WBUntUZh9tmT6XEjLMxRLp6Y7GuFBifcKGSz",
  "key38": "3186YqXCpztw6hkxr6tR336thae2s7d95Ea3vRLwFMthfQpuU7oBe6yPmkFGCA3DMw73VmeQcvdisrYtka55fns"
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

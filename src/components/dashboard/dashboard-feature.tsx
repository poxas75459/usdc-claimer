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
    "5iFiU3rVpJzqfRgzApxAaP72gydqyvPWiecM2iRpAoUxRbowwZhn3MHfJkTfcXXSwjBEAYjnaMk5JMrXU5QLxTJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQQSe7DfeLwmt9SQG1EUycbdQ1PuWmxpJUWC1D4iLpbHFPhA5B9QfN3jnUvm8E7AbJYqqwF11HKgyTyGz9grc5L",
  "key1": "3vuWcCiBh6iyMaqXM2hbJ1KeoamGfzL3Xaw1WZtzCMr8kpwjzP8inM3A79REk5ayFKZAsdGFg6fihWMhUVtrnGDr",
  "key2": "4mTyUcQgdLi3rZR9AALZ3E5AcU8DU6pgC3dLfrwmyz5mgvpCCSC7tWe1RUW8nroWR6W2pjpProQ85T6Ldck1M6f8",
  "key3": "2JqFZEM8qK4vdLwguvZrRfCvHqmeKj5dac3L8X3wmPDwphh11GZvoh1bpnr6vWnPofsb7TfNTVi7i8VkUKCc42Qm",
  "key4": "2Yoi2dJNr1vikVMMZPxaoYguZ1zr9utQVrrhYFQ5hfe8T4n87ytpB9zFLMwXq7vAwKkog8v7mMxdWJx6A5ov69u6",
  "key5": "4ftFYjVag6G1XZPFFPr3YcvP5gXtMY8QPpy96r5P4QRTi1tJUVf3245veeeucwhGx5zyz1uNUyZTgDqSomPZnWsG",
  "key6": "9Vy5RnQdpyn6Fz3DdYhVSE6a8Ztjuacy2EQAu5AUmgRx4YL1nku36wqcWWPDNTbTzs6HwFjmj62wUYmZftshn1Q",
  "key7": "4Lb6oE5YCR69fUkCySCaRd1nEKYL1MctmS3J46MGMBPfrT1TKy2cYQNtxqdvMb8FPRk2pEBiz3kNF3YNXwfthxBW",
  "key8": "54UYQyxNVkNFV9RYfwh8UKtpCaZSBiUGzJwDonpiG6CiFojMU3p7Wh2C71rhq8M4WTDgcxje9F1qXjAFQ1V9whXV",
  "key9": "3LJvYbUjDa4Qs8cj7a7KjZqHFXa2f7VKtvodEGWLg6L3He8P4bYqQJv7ySGYrg4wWQrrsJxdtqDpkVAS9fGpsd4N",
  "key10": "3ttfy8gyY5zGEXveSGiaieRRj3wqRP5UBDowVU91FWeYoozUxNuEjG4fi2Nc6uVs4sNirzaztuyRzhh3d8xvFiu3",
  "key11": "4VMQTVYj1TjbKoqM7iBYp2QXYjrB9vMkufiFL1HLN9PrCfYaQLuPcdEWVDiyzH6EaqPPswunqQA5A3CaP7wjqUTL",
  "key12": "3A1skHu7wBcLKSRxrc9TQUvatMinRnFiftsCQnVo3UsQ3TPV1oWSrfUi9GzzzT3MFugwar3LaXH7QNrsBPyVS5Ju",
  "key13": "25GbKEH9NFwWcVNT6mubbbh1T7Tef8Zaeaiqo8XwLEnYqwTee4JpzXvPuKKSRL1PwGT7LkSLNQrk2e65LviPACFU",
  "key14": "5LPz8D7yFQ4Zc9BU5TL1LCB8nRyGcYDn5yVFpyGsS4Lwb11jig733WGw61g1ssRgDUHDrHU3ECioTAgBxyht4nc8",
  "key15": "4Bf1GbQgnrVmBcmJFMSPhueDfWTK1putP5QQTfFCSjBdiK5kHKYLSypUec4LitmuiGEgvWmtBGhD2BhyKXRrXBrd",
  "key16": "4QpV8HuNQgpsD3XSZFgBrmCRgD9Rx3ZvLE3mbz3AVRbGaSeRm35Gdi5tZekV9wSCDUy8Fe5DH7qxfkCEJroeXJnN",
  "key17": "3pBY4oBaXSMq9hT1CYS9WKk7r2vBhxbCrc8VS62ewXJ6safC4cF6dntpjK23uVL1VXC2Anp82e9YoxhZTmXA8utq",
  "key18": "63xgVYbvicwM9z1iCHd2Ro65PCkAcUqCG1kRJELyHPDieCUK9eqPFAJXYvgWvn7W1DWGybd71yKh1ohasp9vTwYn",
  "key19": "xvouv9cBLVzwnZiYcChEW1ghvsC29pCQtdu6a2RcNX7s1SBy1KKUdo6kyo9Mh2HMGA5mey6u5Nf5vzDNK1rZ6Ye",
  "key20": "3Dy5fjXBGp5xyvKmKditknk4ichTiSjqaCYvZiEhR9M8kFu2bYwtTkXD56NsWkFtwaZBkSX8tpARyXZqcetQGkRj",
  "key21": "4PFTcjLgp4QzE5KmqEQWwq8TUXaRw45sjD9LTCakGNTAXpDrbBx1vNFv6he7i6foKhX2p2ZasXMPJ9UeZu5ukTJJ",
  "key22": "56CneyATB7KqTFq8eZ3Qe9tvoww2jgUYfu9ZK8qW9Zha3UhhjQzH9zk6y8Yv2xFLsLA6nXUwXZoU4aq2YKHwgFPc",
  "key23": "2ssbR4gR6B7aMLk36dMhK8Z1jteb4NpQZZDsVAg2iYzJFPYHp2TLbRoqAxktFz35rW5aAVnwDDUkGy69XP2rhLzz",
  "key24": "3tVjfJqa6hecnai4R52Z3nrbdYmvayL8PmQbz3TQPemtq9kbNdpLzrS83odKaQYkeiohCXUqZVTsR2uobFNcC2hG",
  "key25": "2d1EmCcyqVTZiU9C1CuSEv4dKRP46tDEpwfju4soQMSkVVDmn4DPseoy49bYSdxFvUP3zvvbyomuxEgjy96Gjgzf",
  "key26": "3smaAHQQz1ARiayumA6R19FLv6KisDs1G7BUjHVfbKa8UkXAyBjzfB8tbWwfStg9vTB1X1u5eXHCktVzZo7VEbyQ",
  "key27": "4EZexSDNF1ttxAtrzD9gE3VWmVeEyamQDnZQ5hpbvTHBYGhRb6H6fo9nPhJN7twg8H8MsiqYxkethz4hjsdyH1Z2",
  "key28": "3Z9yFiNYkV8meiimYA8hiheWmpDTqSswvGNjVzXeGGXuA7qRUJqNRmMFyNZ4JmFGm61gNFPEjxCN9Ekhq3WzxicJ",
  "key29": "5r5AbuC8GdXj8TrRyL6ssRC2Ay1uHMbj1MhvCywv67pcMvq6yj43pELvA81kCax24Yvkx25aTKtj1pBm435vcX7C"
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

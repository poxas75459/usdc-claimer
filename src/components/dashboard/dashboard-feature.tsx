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
    "4xsaKkrDNPgqhTdccX3PVbmiabZyxqbdoMEciTjuLm4tsHMsASJrSuEzr8t95oLtuSjL8HEZQFxM5gKmRZt89ZLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5awS3M1448bXcCMoNRiLWJTaQRgPn7f1hVSf7XGDB8NDgWrNFL9NaghUDwvQ6HQS3xvRXMsgebVGZJQ3bWJDDyMe",
  "key1": "2koessudam341b2aq7Agja6q82FU7enPAzNz5tntGV765dApwwJ2pu9WJHfJXv7cec3uNPjPTS9CZDZ7nznU8srp",
  "key2": "Wgp3xhxFm7yJoCwWTVQd3S3UTVgbza9iYDTQLjKBGCZG4GctbGw4iu86zRDgUKCYypvetiaMVQj3CvpmsokKJtE",
  "key3": "2UZ1ko5Nkff7G1BD3QaERAvPNSvb81HYF1Cr7SEZEocYGDnkgXwaXALaWvWyrTUQ6cZsWTii1zSsTPgk9izvPMsq",
  "key4": "4zx5uXMpd2SSTsbgqDVo2AEwFtvKAe5LJohLxgZ8VHra24itU2rn1GVutrjMbusBqkE1KeLL2JrobWGAp1D5YiNi",
  "key5": "5gieSvMi1MbFw6dj8QDZHRgSRRCG9rPMKNtEZMsYNqSxHatNaJCJJQDUJJ5GpXH67xYt3VsB7bAAkX9bdydEQzZ4",
  "key6": "bQdQcz1bUe9ZXbmrpCaQ1XHqeoNaXzGyuifuaEu3MzTqe1C5f3FETfzDCZywt3dHxeChb7N2buKD88kRhcNQkyW",
  "key7": "51FLFcLnjWGKNvHxfiDsoMAZLnvxqJGY94CVAS1BVfSaDY8uRovaaz1A6Sv1ME65MZmv37yLe77ucX1Jjh88gBHD",
  "key8": "j3C5nX47fRuwm5D7dbJHadkpAjP545ydSv1Q27Vxr1YXmNqELoGMAwsRs2n3FxM749sMxEtUnMmSSrU4v6xrfqP",
  "key9": "vzUdvtN4C4jxAX9Ja6Y3jqodZ48h2i5tv9sU9aNpcZSeW4GfM7nMKUDjPrDxuLuwVHWvLzdUmTVTCGCTkTrksvD",
  "key10": "2AqusX1LuBeGXB4UKKw53EYzd5R6oVV55ZuZQ1iNiguCmkhn6FJ9uHymD8AGGBEU75C6PhEStwyGxUmthXJ4mci5",
  "key11": "4sKtVAy5gETCHAcWioCzyevgpwfPbtwQ7MvDtoaREz8dAeBZNCr96eHR1ob245rEeDQFRJgYQSqUf7QpuybePrQz",
  "key12": "3WEdZaZao9Scmazt9SnjR89GeozP2Hjpuctm3hEhJy5tve2ruSP8rzf5fw5Qy374GDcu3BpzAMntkMAHFc6RixrQ",
  "key13": "Ea4UzH5G8bV8C8tNNTiYXa1ezhzPkV7npX1kYZttVegki7fPPquMXCzmtSgiQKqP7Wf2oandXjg5cG9ToVaqTHs",
  "key14": "2u8Qh5zKVU8XUqzYPVzxoj1X6Wc2Khkn2S5fwhfh1pVUdPXdfcyjdDtBaLmsJeWeSL9PyMbE2D1272kNePDg5H1U",
  "key15": "W7Ky42iZDxWnooFLeeUCiGmV9oVabjJDq6Vrq8aA6LoVk5vvSvz35o5bWXrNPfF8BTMn97ceh9HgCd9fUUmYpwe",
  "key16": "3SSo8gydzshKgxe4erLw5vPMfQnvMt8bSeXBFnzha87RbJQ9F6mEW63qcPsJEzvVdw54dLxZhJ9CuRi7VBteby9c",
  "key17": "2kCBxmq19rg42PyvhNm7dtnWZZj7fgagcnxcvp6VS5meEbmYwqN1jUkuNTEx4L4TJE7qxaqztk9HKRYXgkkokbH5",
  "key18": "4ETwfrYoQTgfwSYzAY7ks4ZMnrWpsS52e7p8cbySkaFtPPoQeyHREE3SJ5wVv1joWqxXtzwchn125b3vaXdouHwi",
  "key19": "3jZKP66z5YumKDPQ1jthbA9UveDTRtkXV2iktYbbAYdHGDtFT4vwgAmiiZEdxoPXxDKXmkn7zxw8LWAggHKk4iAu",
  "key20": "5jXBHm9F7xTaHuHdhyUJNmhN2dC3zr7bW2s8EKVabgn9dgagx8WFPuoJrJYpM41yR49TWQgEp9vgYFYEi6BrtLJ9",
  "key21": "4oBtyp6PmwevVbyFfSwt88DYC3vH2RhTpgqQJworhDAwaaJvDMNut8LE4AffwfGfCwrx53oDmukTAozrY6GHowqz",
  "key22": "Dr3wAzX9M1qjPLNRpbRo34P5Y2K7p7cZAomwhZHqZCZBnEDXJE4NHFJY9Vs5VvDa6ikr3xhwHuZDhsAU9QSEtmh",
  "key23": "5nnTtfFmh6GQyxAjqGJoVA1hSfV65z5vMDzwAj2dEerrtBnLCGqR4E5Uq48BSchR5Vdi6yYNkJKhWz1p5mHAa4ob",
  "key24": "3MYn88kxADFFBcm5FKSktjSeUPRXsAKiLEt8pLGJ2WM1KdRLZ998au3HT36mKVRK72JJMgjSGSt2Dr7gHcFaSJWA",
  "key25": "kV3w9AC8ynAtscn8hHySAT2GAH6JsugPvxrPhXrctZiYxZM4emymFP7quHfWsFbuLqmF98kpBzbkpdu3K32oqPH",
  "key26": "2SZATk1CEqt5BE6vBcJRqZqfSaTk8PUasHbxddQuiewDdH9n55KMDMrrTwiiFzcwsoURhbPDRHmZoYfPhqNcYEBU",
  "key27": "KhZVCf9wS4HfCGDa7jNkqSuboCYnbEQpJyPB4sqY1p83ABV1mNQmPzt3HBzXVxYxmXKdTLhqq6FbaYYRmHi5pyK",
  "key28": "3ypFwtc4XHfwwk7Z9NrAzmgiuGLs1bxTKbXY4GYn8VPJ4dhMva5P46CizrfRoiqfe6j4qAVPmQ7h4QDncRGBpJoE",
  "key29": "2EM94vcEMEceVwRuqswLpPywKGs2shFwzMVug9F7enJD4TcBdw3tTTu5hcMf29nN9ejvbYPKbpzmRKjZJn3nb6PC",
  "key30": "232HHTTAjt9d48XQrxVFHPAiUQxgcijNr1LY6gP9o2assSraT4iyULA1Nvey4zTXu9cAasVAS8nVYtzFqtUTTaZ8",
  "key31": "2LTdwv18iVj2E3uL7Y8Aq6ov99i7gtP4ndJ8V1AWR8rvCvnkM7ZH5dSUKNhBBerVk2reQSCuZ6FNLfP3vvHL1Ysq",
  "key32": "4MDpJ3eACcyw6nFg4RkzthErbijGgTSXLDkobwSZ6ciyPmHwJTREUYkgtDVgrVQ64qWgAPXxe1u5jchL6dbTewBg",
  "key33": "2eYc7xpbGgiAp8VFiZkJ9RH9MEnanzUCxgQdErLQnqdp61T93b6kXYj9bBASQRZLFjBFf4GsuJTKJNrbJiwgFBQj",
  "key34": "4Nc5E72QjyTUoQ7fQzPNSPWMnvWFWbpmb6FwwRUE3x4v6jrobsSeZERqka4t3nbKbmYAwTqgnpiQeacau4xf9xqy",
  "key35": "2mhdhjwzZC62ywFz8dsxh66LEfnku1rXj2wGeCWd1BRYCdDb5mEuf7RKProFH1aq1KVooLdiTtGcNfeGKcEKdUDd",
  "key36": "5ER7Qkmcb2opdoYz4oFsKCANfugTExq7N5uZhSk5zZgr2Nd7enQJgLDhcxwUZ4D9rv28bC8SueHHH3uMcsMxaUTv"
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

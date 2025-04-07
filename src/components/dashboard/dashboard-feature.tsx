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
    "229nNXUi5LGi3yifBiYZgCL9VctZ5nR6cySckKjxHyBAbodq3dU6Tydc8ft6pn9o26Ytd5VXUeahwKWFLZLvpzWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FRnv19bcDUxjFwD3tmerPUUig9ihnPLZn3ZmjSdwG8RVwcQLL7oLEaBMQ1PmQw3w3bYhgWZZr6B4c8N6vQ3KJES",
  "key1": "4AMAd6iYSGefCQSyXt3Wev7H2Th1CWU2rLm8FQQLbCUCpBDxrQR6m9y9sobk8e59hsyuWJBsEHiKX8gNS9wN2NSa",
  "key2": "3Wj3gtLTmVq5Ge4V8VSWYjjuuU5TbZJrdpBpeMAPgngjjpcPZsZFUhdoELcoZJEfTWwwscPPCbyfK86nHChMcFzR",
  "key3": "3rmNipKFus52whhGgCbmV1DA49yrG1dEnVsVDZa2HVdEzi6QyWjT7mPukgRHp3mgK1P29xY6p891JGe9DrPZG2vU",
  "key4": "3km56vnATGicDJnU1TLbKgXmqZ3VH8R3Ko7ucs3sQ2aoRCukcmFconMmxCwEFeoFPtjxhZPqzCrMfYt1uMah5xrP",
  "key5": "5XtguLPGpuBr9SpindycwatujfWA2YSG8NjXjioouNNW1sLiedwZGDvnkfUWXGawnfVwCotYAmxonceHPeeJoea7",
  "key6": "owhDGPapj3DFDoa8p9VBcWEM2N7AiAYkyrbhLEVU5JLNqECsY9wZTN1LgyBNzNr6GJCcHhHnVkueEmu3oEvrkdw",
  "key7": "5PCXt2eZ1u1jcVgyyRoSF28yadyD1jXdyYjvQ8PEWVJW3rWqaJZaeAh8XRDT9NHShgHU77zwjZyhRYZoTiFR1Xtu",
  "key8": "284yaT2tzEyVVvutvfQRuWwyuttU7URThipFWRmsTeyPXTYdQLB7DzCnwRA6ajcA72unmieEUNYzfKpFqMWp1aqo",
  "key9": "5rorVj1NCMzkbjYjyNmCChmDXmgfR9k1piKw6aGwQ1GayH3hnY4cRcxRTsu6gujXV93NFd6ucJx3oUQSauZBcC2M",
  "key10": "3DccPV31f4pFVjZ6r4vufrCzfEcxEQn7EtceLNktdF8vvquGdVvETWh4FDxqjnUrF4u3YUmd4MPpYunswQuApWiE",
  "key11": "3wXofS1UU74bfYq68Frw4iRsmdmeub59MydvXtJHi7Z3yzzVpeq5K7LwwYqUxogUG86QVoTQ5TWZZGuQf66dh8LK",
  "key12": "3jroqeuVg5wEkhqWLXaeEmTwamVyqW5MgYtZrz9BAtCn2KakBb8tbijELorEGAaoTsxES9JZ3gBqYxYxpDC1tZMv",
  "key13": "2zABbfvkpHCF5oxnUz9qCmDpk2F4iQvqhMzkkUzUiAdeoh24qEdnN3VAheVDsp4B9TK66EesfcQ7sJeKDXg6Gf2p",
  "key14": "saRxb1EvPbmUMGdWb2S3DSceYn3Ui7CsCMKzqjTDrKRNL7ea1xZdq5Y1GPNrRCRWnAhuDpSCwP8PR7vQCoshMbb",
  "key15": "kfeiuqk7VVpnXEvsFCzBbPKss2wce4XRxcsTAsrhvYYaYZnKcBDPnkbAHLhHHTbS9yRzxMcYyLzmzWCP79NdpbB",
  "key16": "2wkBHRrw15j3Jots1wY4bk7fpgXEwp43Dd1W4ZA1sujWMR2y9CH8HswM6PpQEqvkRqAwQMXrx5QDBXNh5JLRvJuY",
  "key17": "phEyoY1JM9bPRFDDbFiXRzcWA9W4wucUdnHVY7cYWstTTwKtXeSm8Pib7tYBBWUxAX2FmRkazZU9oivEYj2peps",
  "key18": "2t5UDqbGYbHDmYhbms6dxmaFYZmF3WhzEFZoUhcX5Z9nyEAGcDCngiWe1te1fVPSMfzbHT3pYYAhucuCUSus53QE",
  "key19": "2nHyfb2qtfoWmwFMwWkWcBnUYh4MKSkXSPy67f7Addqm2NzK7e8NNKsRSGbwq2c7FCUqvByUn5f15eFs961WeLAk",
  "key20": "yzT1iyzqQRAp26gAoU1L5p6jW2KEQaT3sjW3V6Db6v9AhSouwWoHMyzQBUBaDbw1Z7GJ8igyxubXnPj3ryy2nbt",
  "key21": "wMS3d7DVtEgbEv7Jb2Ut3R94ZecpKZgWd8F8TyaHJW23VSBHG1KXKc8ao22tKvisk9C4UawWBBms8gxqLRcNyD5",
  "key22": "4gCwrLie7K8FjQmQRPTDpFTwHrqQnu2frAFPJRwKrfstLzzSGAR9D3nCKWgV14U4PXNndwe7mJi3E4KGD6Zjypfq",
  "key23": "5x6QH4MknzHtWAYn5qi9dK8zPwGouhS6A4gGdr5fqPJjau8mwYoG6LqT29MuPjEchGn68TGURTsx4pnaWY6D56q9",
  "key24": "6341G2RbwrfTJLFkF4wgth3NmvnPfFDqLiyrSnqiJDuHYET9h5vqNcQkMMeYR7rMfdjBZA2ukQxnBP6iRq2QUPJn",
  "key25": "kiQzbsir4WgMUGkgLPjT5t7mRJSHaELhUof7h9c9CGWRV4R2Cq2a53Q9A2AqJNfG3So3xEi64F7diZgttgCTRYe",
  "key26": "pZA5ZVC5pjTdh4XtpvzWpt5TXYuEUE4w5DTrhspEmmGMnTmzs7dNNWfKhG6c4ZFrEQdKWdU1JK1YnqWE3Dyb97B",
  "key27": "Jnxdv4T4Dkkv986wrsV1YnYVuiFzAM746tUfH1W6gh7fMkm1pD25JpDq4ifgkQkisLGAcEpA652uRpcBdRgDjon",
  "key28": "sXyApvLngJ1fTEBVbQYHQQRVGpH7PKetEKmGM4BYCKd7N4bhWSBb8cHaG6fPPqdMUEeTiQ4F7pdJk1HgbXZZpmr",
  "key29": "31G8hEkkRRj3YRYiTAecSV9R2zPcJzJF5WLjY9bEmzZp12VxaYYQHdW6DDExyBhjjVVUn4Yj3cT8uHqfahfCtKaA",
  "key30": "4Lwyy2vYsSkneztvj5Y4AE8VrfrQYPCuncQjupE3zCm5HwgrNcA2r3wPh2pK7owHubuK2zoZmh3tsSJk8uye54E6",
  "key31": "qS6fgBdebygQjAnAzhxh9qz86geSdEN5rGxccosqnQtee8AtoxmvWH8WcyDBbtHteTcJgoWpA1PsDnrRA3q3MWi",
  "key32": "5YSLpDbcSGKcj6VFLeytC9EK4DEpnj1SLbQucTbS81X9WMUC1o4NZh1u5bwF6KkTrHtQk6SJGAbDNV4AU1R5pY12",
  "key33": "wv3fe7FP7rENLg3UE7fLumSf8qTR5aEkVLy3yZFwXoZXFW9xpM4E1sd2uE1f9YcSPL7gdoqzQ8zaPNLaPKyAxGZ",
  "key34": "4j9VN2bUnzFx4VqkSuQr8FNFXYCAi83CKfDhivEKCSwox5tptSkktB6V6xRLiMQQzhdis1GUiXevYFuijEsayF3R",
  "key35": "3nFK3a9RhhR3m6QhvxmdPLF5TuCQwGGdiLayMcL2QLsKH9Jj4vvs1hFhcuPaggxYo7NUadmarULoB56misNYwb7g",
  "key36": "wsR9RoGtQYPkrYFnJ3xSpLjxrnhaickh9zSp8UbhxKow7Xg1TGyh5Y9r3uW9o1PVnqwsXd15DFYd7LiPUH42L9T",
  "key37": "4bF6MFbdqugTRb9i8aiC4VTzckgvoKo66suAroiujsCA2VBgkjqdchoa1aeTaFbtzEtoBmnxHZSU2z4E7GAokxHs"
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

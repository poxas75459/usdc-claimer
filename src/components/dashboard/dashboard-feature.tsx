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
    "4dA2hKNLcnwgBYZ1TY6HpEXcU7t3wuVERGVYErh5SHW27ibGHRMJBAasqp1LeV4qfJ24At9UG3GFwQB4zQESw8yN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m1GPoZg6QvWHJrKYsA3X5YWxjbVXvxixtqthYn1gRntqf7dxjmtSnuye1GimimiU5osv8sfNFxXuAEq29WmXJ9r",
  "key1": "58K25TtgRWkB27o9vGpAfXomeyEf2PgnNcXxArec9UHH7gqw8ghQBdJ6CaRTZcABJcTKJBkkkiignxk6KaqRmqkJ",
  "key2": "2zsJqrcLacU6p1mrQFYMT847BspFCW1VsNMannPSYs7gPbkTrHghz1sPdGJQGNVKWWBZnpvW654zqxT6N6WioUen",
  "key3": "4JYS7EScbCJ4sAaaRtKqxmgF8xfSRzxLntK9bYSAUWjkvES7msg9A49sG4zGmuYJTCLEAs5nJhoAHPAHBUyGGpQ7",
  "key4": "4VQCubCt4AYeHMbC6zB3uwpw2cktLnWXi1xnvgWUDrtxLysJ6aA2bvvJUgH1R5fXdusPbVXZz4Gu9Rghjf8pWe8Z",
  "key5": "2ZU5Tg8y8oJMMRPia17KzkFJvv7SKVDDT4hAJmy62ykN8wYh4Z283M2SntNq5CvUJaLRwJdNgcc9rmmwhzKCyBSN",
  "key6": "248Ae7eQeX4jnFJ3MjjJLFW2Ro942cZHshiZh9ca1z7VNAkp8itveT5avoTfniGbjjqsS8q9eDqAPXWpC1iZ4MPP",
  "key7": "2JeptwAd78eVJZEeBeyM6Ww1sG9LLhbKahQwghUSAJX1ACqidXgCVzyPXDgjqLRe8uQGEWMmCAuLjpXugiVPexNX",
  "key8": "4kdDzxNhuaviGfARGzm8iRzYDveVKgTNY8cpBZxeyw5qy166gLoDiXSpkwPXxYeXBK42QRqb7PSp3QiGAj9wRHGN",
  "key9": "2SjBBXnUs8F5sgv4gKQrGGJtooh7wA6UeWgMUxmt2PeyNhWVtCtFbZmGFNaN2Vzfux2tuiLt7iAdbnMP5HUB4hpW",
  "key10": "2haFEGTUxiitBJ7KJxzujLSKdEDzHvFph49K3ovMeV7T25URPySdMhD8QCz7nR6N5oGGjCxkcfu951a8oyFKgyKp",
  "key11": "2Qd3g9T49FVuY6UW2swYd2f52WGLnFiMwtJbdEZcFzB6iMzGQeFunqv71BpE7xoQQFVu1MCqqUziX8CYjxPKtUmq",
  "key12": "2sykb6YYJmyYubSWgvVrxnCzZW5Vuo84XwSNz5G4jXsxvzjris6HzRjofH81PwxaVAhC3rSoYpofrBXiEVxT64gy",
  "key13": "3C3Avqg8V6zzoPw2SotPbH4b7ea3ihS6yvm2vk8t6r3PUGb4aqrNuUGoMN6yBLbGV6R7TYLVTQVPieaNZ5Z8hibW",
  "key14": "65MTT5RhoWaMUv5fAfGohGCw3bRLsx9tz8VGHYG6ctuAXi9vyFA2MAjccUtLMzeTEUYyQbCSQbULnyYwc3toEFcV",
  "key15": "3DCNCvDirwhhiMwvdBWaMfVd2MWoSvzGXrpiDhuMP4xEZm45qNCFEjxPvutiQJYNp9it5KsoqNx1nTQMwHqzJtD",
  "key16": "4agVAVGnBAddEeLVjEiuDynAYxCpPtxL34sCTx9WN8w7boaRUefdy6xvSKgmQseFfGsYqikvgYho9WCUZ6RjxwAn",
  "key17": "FJaJj3JuLge8atRPerk5piNkvCKrbw4svUBUNCsBMT6hV3ArXbebZbgJJoM658njThTNX2qyqxDSTYzp4j5sULu",
  "key18": "4Yhqx8rhDUnkdsWGTvUxyPrZ8pJsjb1eUXdEpWvTC7jAXXYWa9M4GzzyZ5fwcGmjCPfftNCBcAxyBJJMTVN6F5UU",
  "key19": "4Ztc2n7o79LwkoxLTVs9hWHAao2XiCF3NdDtdv8ZtYU9Av1TjiwVdAFUEXcKkdk6rZiAnAyS3XENrhrUr4WagD6B",
  "key20": "36begnQcX7ZUs21m5pfRTTpsMPMKaBsg8jjm2aTU6E49QZTirvGX199NA7cSn7cHJxghj1y7vM5ARbvBKxb7566d",
  "key21": "2pY8ZNq8af9VUTkdms23nydK4gQDTg3gAFXgGDtfqfex7VbG2dT2r5qCTgnjJQD6H7LhhRJvAhM9a1J5LnMVdvz5",
  "key22": "2hngiGzpEW1m1omEbtBqzb7KuiQCrsntcXxu7Jd2eFrFX87PRidrDaBEUVW7NSb6F2GDkEfQYPfYQHZRhnmLbzK5",
  "key23": "2Nd6SRwjar3Krz3jmczYqkFPrn25ZAGMWqLAWU49ARb1UgXFsmx1PZGXcp6CNabP9XcF3zJ3wFiDJrCX69G3G2kd",
  "key24": "94nLi4TER555AxoVeUNXmePqs18k2JhZxrbjrqDvgfJi2KnHLsHUrcaKzrLjFWFXDhNHeZkfwQRSjxkFeLt9vaZ",
  "key25": "255ttTp11jbEYyrbpABaCkV1Y2T68poQYtBSVMWK7AYxvYqCFYzrBRFa6KbeM2tJ7Nvrbyh9xjjsHnuUKwT7cyYg",
  "key26": "5LXsv1TmSLEPFgBJ6MA8WtS9rFbCfybfHCXfTJtgETmpkEofqeS2pjgJezEG5KbuU5MiFJtvSNPyT2i3xA64ZmrL",
  "key27": "4voNiawWX67UCyKxDo43UibG1U6Kp6XxRoaxGAkDx8K9pf1Qvwpvi8BWiAPgtQeCVncRe8RRn64c5M9NPiWu8HYK",
  "key28": "2CaUCr91wzfcjyqFKgXNqgEaDcsQBTCNVDi9Vg6Q6tR65sFbGKqRdLW291gU2ReQ9VPvpt9kbSgcxSsinzrJYRLc",
  "key29": "3JVwfu1wYi839vaV4vHy5MoErGQbqp6C1n2B6EviqNktDF5F7WAF1fTU2uLY18s83vRKdu6LzXhNYqd1RXPADGY5",
  "key30": "CJoM53fxxPBBsqEESc3DoU24wTd2sYNyjp6uHFrTeb1sjoVxrXzchFXVpQDNMYasHPcxVVLttWtZiBpX9Xe2ADJ",
  "key31": "4KbpezXARxZ3YihrfCPMBgam1hoyaDuueuZcXV2cUZGgwafVpuRiWgzDMfAKMj7j97rgpT7h5xnL8wZJbYD6hATa",
  "key32": "4fngbXp1G8dZH97opUAxXKs4x6BXKw93vVadTvGxB3RwE8zkRvD2xZhmysT2xaec2c4C11q9a4xHPnsiDbNGi8kb",
  "key33": "F7svazb2RRmHtgMhRXGup1aWk5aoGasAVNdHLRSjVQYqeEqgYUt3gYT1BgwUD6hssSZvhDuv6863aoS76qspCSx",
  "key34": "3Z9MHAewQ9Sqv1QxYD2wPz3dfbSJhz7P2uvux4wuCR1CVpHBVKAsTbNtKw9KoMuiGkDQGaEktfYzYN6gTE89fE6v",
  "key35": "H988VTAnvDfn4igXZQfygLgqw4GRjbEhSs51viKQYRLwnGcfmG4AbdBW2qqrzkCosKuJTZ7KsgsxSPMJDzSCTG2",
  "key36": "2PukH99L3s1Wc5knWAfdhLcEkf3tBuJSsCzNbMeYiiQkHo2245d97E4Yu69pr9Gwg7PdzBuJEmYAVfUqkWY5HjLf",
  "key37": "xtd1tJxoFPdpQJbrRPDUYJmzN59178HPX9tAyeJoKQjZNSnWsKWDXct5Ai9A7RdcYYdRjebzeiCN6ssXhve5dEw",
  "key38": "2VxRNcmfsLDiyLpcxNH3tCJxcR8tekt8whQAzoitrHtqXshZcQtht3HdoT6TruxumDpEAx1msUprBTbeTxzt2P2",
  "key39": "4ATUAXdfmMpWMds786LaUZBhWE8XpeW5SdZZvEvZMYeEdSv196wnT6roh7jYFTG49S3WPmrr9mKzcK1ph841faya",
  "key40": "3gguAPvxMLsuqLMFfvAquZFzAV8ujjUYJRgC8ETVfu6wh7dnj3zGtPGcvMqgVx2jAqQPwb5F6B7SqpLXnBQS3UNc",
  "key41": "5YDCbPRUqCEqP5sPtN1Jda96AHNLmpvZh5cjAXSC4QVwKBceDqDQz326PaVyaok4hyoZKiqtPbx1zg9ra1ZJPFBa",
  "key42": "YiKjYob3erraGP6v3E5djHA23uas48EvEVxiKTw28pyri8hCwaAEaJgBZrVtoXGxyN9JU2Wcn1GfyLAWFSWtoHw",
  "key43": "55fAemnuUcHsvGKaDSxqKLrm2Yj6syjcVuFfhnsc5snyTiTRyutsfJaXhvB4u9hM75BwHYyUL4hQ2fXE5jNCJ22o",
  "key44": "4Qf3iD2SfUuFnf13WAKwuDpdQYyW5sJ3L3KJ7fwVhNsd4Ehsx5WVJ1KzNs47apSPf95cqpUjiGo55ubGJ5ymhu8P"
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

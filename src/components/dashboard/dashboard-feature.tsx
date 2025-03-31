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
    "2e6rTuFQJA2kczWp6mwvUujXgJASowbkh9rkjkqndmXVTbxXZ4r9Rbp6o9qVd2qmy7VUBMGxeV7G1kzhMem8NoV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37uXw7M3bEQBhj3rKhPd97WaSXij9XkHM4yk7mXMeG4z8RJx4xHiTGiKQFY7QNMZLKhJYEsfT61bWR1cnYCoYrjj",
  "key1": "Baqy84FZAAsoiq6dEXqCsbddmcTtq6Ff1Epf9piAyuwafE9GySAnHDHsadFJoAjaodpWtkwwXvE9aqqSs1tLP39",
  "key2": "5HsR35b3dVQhW1QjgMifFX3gahV6ZWMobvkvXoGgBzRF6ss34Cxz6RfNANGppbgSB3n6C2gU2zUS3b96x7u74MNY",
  "key3": "6163gQKyu5JpjST3sSFu1Mmd6f1MfX74MHZCNbtG2MAymZzdg1Zi7GQEVe2ziTAfC93UsMdBNLuC2VywPC8XMKAm",
  "key4": "5uSX3tzb4xScpVcbmifaS3Fan8vVW7vdUw7XaYqeMhZRnDn7kVtJQX8kLfVEgiv9HDoNMuxrkY3CXUYi4t8uN21G",
  "key5": "2iJiiuo6Ayqmwte6SmZMpRMCdPLqAP4i4jFr2gyxQcxGduAtSnueux7eP8UqRtTH58tWt2Ga6Dq5t2QcYds8EaUt",
  "key6": "3ERqvURXt22JvTMd8srY1Xf6t9exU1mUCkELPg7vNPabmoapMfFt96N7k7xV2rfyaBjcGsKHEb5QQU7VfEtTGbqS",
  "key7": "4JQscCg9GoX9GrchwKNbWSRWBwbzsxABehY383dk671jzYQyVsWvzbiAZcbaQXjufA2eJgYHuk2bbpfmV3h9R7HK",
  "key8": "5m4SCxzUQnutZpNDh2Zf5Bis2Hw6LoDcJcezLbKMJ38AybHUXhbS4fmhGRWmmhj52quBqhkuC89RAodvkGt277yo",
  "key9": "27vBVU3QmnCXY8ybvBy535fJ67LUWcWaom55DM5Ye6EZ2625KGQdzRiyJ8C9ucDovGWUGZ4bgttYukC4HTC8jquM",
  "key10": "24LQmFEbTYtZnkLs1hULoL4nMXph3pRR3AHzc1viErPLRfY8jjhHsPMvYCxhAhbSZwustS5XXBWL1ptmKRbx9Jck",
  "key11": "PL8U6VTNLY2tcsr4ops7Ygiu6crhMN2u9avM1HbnYzm4QtLG4ZjFjSCYnZrhFp5hizEkXHYsk2yTTFWotMuUPC9",
  "key12": "3T35cBL9ecYEiSU2QerwVpvQ1XXcWrLuHvem7Fq8SD6UU2hW13ox79bFo1oVs53EDN5Xt8BF7mTcmzmcgdWRqjyB",
  "key13": "5PWZnui1UPSMHUyxEWGFTeHygRHPb8DWCVfEvTjb1yY7gNq89irMkBtntGSDCfHKKd9SM6dA2LjhhbVPfaHmUkRH",
  "key14": "462QSxKhkPJs1xggBv1GxopeHu9byoTdpKKVH6VyRKahqxV46S7Ddy7z1VJSSQWwoBDVN2ZKUXBRrqgmQGPwas49",
  "key15": "2gCtTYYGpzqzMV5F8wsvo1w42yGLtVAQoVAncGspH1p4bfnMNiV1TWzN5eUt9Fw8FsQiNgeJWFaxQrqw2jS2jJ8G",
  "key16": "4SWW2LTown2dHnbTS6LWVPhXnxekVjkurJDwFU2a9u4nbsRV6zAXtsfGtoYLap7ctfPuuCba5VtNrRTsidz6ZE24",
  "key17": "4UCjVP4cfVKPQufWssnaD6h6kmJuSe86WAqYMkKVnAjuZpW1NLQvWomnGzsW8CXDh15gE5dPVB1riYEBLx2cabXL",
  "key18": "3fmzQ6HGnjqzDarp62nkjLZmzWnip9oRkzFpywVsznMGPYzqCyKAxf2T37zk8UX44mN6sw9T66HYRo7heFTPvdja",
  "key19": "39YDA17xiBmkJfZtFCfJ5Fae664aDQZfEd7G7TthRjh2FXksxJaBxFPFD843pb1KAXFULuifLQCBjCGtnP3ocWAL",
  "key20": "5cWLCLBBBWtGWkcFPi1xBnkf75rz3jURMa3zrqNvYhJPjzcrjad3WM8CYUmHvCHxokk5fLMaJ9NCcUtQnusFcCmP",
  "key21": "52i4n6sF42ZNh4TgggsDYDALGgXxUKPhr9CX9zrZnZQXx7LZA78A9eNDGRCQmqe6j6rNbWp8CTzHUNfBRH4rqMoE",
  "key22": "y8q6djAyfTSb3ScrfDED53G6RL6bDn1c58EWbCjYpZPbaibuKpzgMTQcDDSB3zbKybK8DFutjekDV4jmFLAho2n",
  "key23": "3C2omDmFyesLDeKAPXfVQFkJ8Vd4f8wyRsrTj69X2akprZJNxZv3kVrx5PU3FAeD6BociBXX4qdS2wZhqTUmBtzG",
  "key24": "5LVz7KvNRP1X3XmD7ZkwLj55igUSEybmWhTjdubWneLmzFsRcZvSfGrazd5aiQopU8T4iq5Dv9Udto1E1m1joWB4",
  "key25": "3SqPrEPDkwLDRmMpzXbjMsVbM8rJPjn6oQuMsXRfe3HGP31n1m8vxQmNavBF9docsTnSVfLXSmQs3HaQ1Pkd3YJJ",
  "key26": "4ih9ehHMxTgEcgvXZNMAsKhDidameEmXNVPYMQe2UHeLTPZFeSMtZGVZXBir678NFuYfsW2WymUNyUaHdcvetY1W",
  "key27": "4qy219yyrgLHfB2kfvpdUi1vseER89V7NSvM7ZvBCEJh5dk2A3pWPNj1KhksLcvP3fB4SdPyS8Rxc3BzHgou7QB4",
  "key28": "3RKQ91DngQuhzNTnpVNYhA5uKNay58gGxd37TyyyMz2nRaBT3zmb7HmZyBUJSSQPMEYscyvDVUsEMTTWW1BGhHc8",
  "key29": "HBvTovBquFFwXvkUtjcayropuoZtdfBrDHFdUwjPhcuNr26nmhk6tpWzF4jeRzkchydxkbivZ1NuLwxuxQ9VcRg",
  "key30": "5LzXRmmjaf377mVtwWSCmUFpotRfzvNSgzUuHtsT4aAthadvhjhmdSXkswPA7miLiHJyaaH2f3dfFN6U2LfX8V9S",
  "key31": "yFKrQVLcupc1R3FY59dVVncKZtN6W1dy5GbHwce8i4uEyCGd2DHkiNTnVBVXTGXhCmxkMcSC1i4ajwEKZdQ6N1G",
  "key32": "3b7Xtfu163mhopPLJSueisovMFWrPdG1EW2E8XcCgzvTkd5LXWKV2G6MxD6cpUXRg8RCWCo5Fqo2dCUwNvkTemuA",
  "key33": "5un1sdM1JxYr7c4zVx62hiraLXp6nKnQhXRRN2PxkDbwQtQChEm5qo7PaEHM9mkFbekkhecx7oHZfbqQQmCzPr3M",
  "key34": "4Njf6NT69Hc9K1jeLQNXopWpZXA4WtgQxERQz85eqjdTJEAKD1cFMDBwWwnMhvBK9NozYYzW75PKhxQjJRfUNNfn",
  "key35": "eEG8JWMFpsZmwETNtNX3Vbbb8b6Vbw1N2ME1yZhv4xH5Y7JVLPZLKNAu7UwtRxfpw9P6aCANh7iVkPhi7sYjmAZ",
  "key36": "5uQGRfr7NzVhuxQc9pgyyE75qBB996QXPUCf7dRFhfzNJZnuCJesukpgU5FAgC93vLr4PMTbi4VJnAN7H8dhiWmM",
  "key37": "2GBzu2qPXc6wYPh2K9tzGWp2HkWQEwdSuJsEXgtcvYKLSEU4KexzE2SZFAGzg6aUvn57YAJ3GdsY8bmVxszGzEX5"
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

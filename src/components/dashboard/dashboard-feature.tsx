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
    "65tiWkBAVrvazzZz8UMygkb3gXmcm622juhaXtaX22PjG7CLJoRi2GZca86gNprkEttNNCwS11SgB8oBUuSUhmut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UnVPtuSCdP3dz87JynW5wNp5GYbzvf9qQZuVD4DZpL5A7Vb1yQB1cNhc6JskSaGVDppLKrrYHFzXJsKekJnsAR3",
  "key1": "3HrLoM8Va936R8fLqE3jLvHLfmCCa6kABV3opZKKUAFEdN7VLExLAo9oYMZhab46sHf5uyuiQtnxtRwTzazyWrPK",
  "key2": "39HZ6LGuMMFygAtJ69xsTQsgmtazxr6ANVdW2Fw9zEwvqCEtGDtprfTRdjhBXuJUc6tTqSdxBwk8Vbw3wFS7Hm5B",
  "key3": "2RKDRB8DCYiALkBo5RWskVP6pfk1Fd268RdsZpxtGdhpQPnCZxxTdfPxRAyyRBd42JrabpNLruc9v1oGYJzEHRKz",
  "key4": "4MPstiywi8Z8ff73B9W9qjw6yuabPZ14EAhuJmuGbNuvVauAHJAY5ZN6h4pVrygt2PYcJjbjUpYdPPrjstZi6hQ7",
  "key5": "4VJEuRsrJShLaZJ1JT47EjGQj4518mHhS6rXeEMXWMGTzFqphxTpUX6mrxY5AAsagwbDQVSNm6Ydhm3VcT2dxRZa",
  "key6": "4TXFs4EgMpH2wTqGw1cWKjiE5W1YK5FAwFRFDUQad7qGvLxLFkf8HtkARTjpqhgCgGs3ybUHgGzeEsJBcoeGipWj",
  "key7": "3k1iD5dvqfDXGY5UAfVXsxsLGwpdyPsf4zJwEgRw8c5JpVWE5vyoPjg9NqE4SSrdTya5GfAy2WiqUvBx8gJonMsU",
  "key8": "2WoHww6XDntGiszAy8fPEmF7jGK5kFFyafxCTuk7YipqtYvsPmWvEhpWyjCuduB99jvjU8X9V9Zz4VR4opc8xMSC",
  "key9": "3xLx4txHbJu8UW2MLcCR4VPSdT7cLRsuKcZegNuNCevnRLZxh6GBDmmBCWkem6pioEuagw24rwZEirbfp7Kdpthc",
  "key10": "4hxGChDN2EKsjrsWdA575iftJ4n1W5FTh4NdmZht5G7PmnUCbx9FSboD54jew1aYSBMR9jW1ZUoLvmWRGY52NphY",
  "key11": "CAsqodQ1AZqEyVwrT266fYpA34hsBqGWD4PfJLu1Vtu6NBtdhC1U8sEao8nmQQKb266YCiqbMkGkPVUdf9suuSa",
  "key12": "4twUiLP3Qaobu4ewMFxtawobHbyt6Pr2WyzPJGXyLYywE3K2KVVq3XkxY4pGUKG5FCrYCVhNWNJw4YEvJ6XzbzRS",
  "key13": "43WZoD7R3Rs3Bi9KZKom6x8GySE2v2uMPkQ26Dr5vpQdDxESwcgnTr69tCBpFm4vdP3ZckSQ7YygacZBbYTtGs6",
  "key14": "5Zhmtx5WyZE1bwDyt5f8zwkELjR2g4VmMuRHkDniXEDGGJ3gZvxDGvAMMR6vnhKsGSSLFJZPY1NA5kzKbWiRTTmu",
  "key15": "ntNUhtMmeRKum2nLCi2TRDmj53MfBupWkVWVT28vzKEc2Xqw7VsKbqGUm5bGyjEm58ognsRxYmk5Aq7UGoTpk8S",
  "key16": "vVFi3dPUYqreQmeJYQTd7t7c585P8yuBU2rYURiDNt14wADLBcitCV4CXgRqvSJScorXCuCGHRtY6x8jwRCiivU",
  "key17": "659HUxrjFAPpgfU4bY9JHT23ipTWbkCgf77Hayo15bDNKCSxtmWbkJEYs6dqDavZ1A7LFHJXJFwGChtjQT7wiodJ",
  "key18": "fEvxPS6hQKAMwnNEjfE7A8rwftUieyQ2xJrNyZWx9Koth2yN3JdVySpSgKafQsbhGDejBDJfT7eetahjPHcy7a5",
  "key19": "5nwTW1JPp5QcmcrKD742RRx87B1mC1V3LXZmpr4uDdBKHN2ScHCY1QKJBsjxYW9gxK2Nh6ZWLgDGuNRLP51C7tke",
  "key20": "iNCWzPTwHXSKKKQp4JsKRjd35baakp5yrNA9cfmVAHyJ4DxgG4zBNcLJWxTyKA6cpm6jAumAJWA9j1TQ51AMzB8",
  "key21": "5PSGcZpyouy1Z46D7xLsvxJPBGgfiNcpbV3tCx5r3chntvFgwBBprGzoboJczmcVUBtVxH8VGYD7Zf97Ju3XNypg",
  "key22": "DG8dQ8PThKoxbRbuEgSAguwSuArCfyyxJGXZpu5t8f99xao6vKggymo27EBYhRDiKptZNAnmr6i5hYc7g87zHPP",
  "key23": "2Bghaiq4zSLsGjDXQC3MW3frfgM4HKsbh4kC9pWhaVFTnPCM4nihwqkbse3HcWwA4d37LR51LsdbigPwYGEEfpv",
  "key24": "21JQidiz35i28EpLZMtcRzrvjt62JsEBy1rPF3cix212sR4ype2LFZdP4TMWzBNHSvwHm12MuzLZueUwAHPsqrRp",
  "key25": "3dbEzbSdohHZ2QtGfdNzk9u9cnTGvGcXrpf79XBELe3pqwzTQgBjfWj88u5wekB2LUU6YTiRZ5tL8Ht3imzZ7S6r",
  "key26": "3Q2Tr7hG2f7fjanFVbeqtZEpjSVvi224zjB5VcrBHoNNVCR95YjfQJPQSYCABr5rmAmPz8PdnJqKjaTaHSNKXXuR",
  "key27": "32jbm494MmP9Dxvu3r43fcCREJsY4xLoCu6gyHYLLMHYS4PMKsvjbLUGfZUYq8QpmQvaHbzpsyLvcrV5ai6XEDVi",
  "key28": "YUuoDZATizxapJXbdPw2CKsxLMvwWCp6BRLnxhCukKseaf8t6uoyLfVSSDyUR1KTeLnpLjmTokeUbNi3EfrQvzU",
  "key29": "hQBWT5apVXUeUNNoVPV1jrQHrPpE9cu6Sgc5qV7SBASsCFU5pDjXT8i8uJ9SihLobdXZUv25JfZ8jC56hGFBXFL",
  "key30": "4PqVR8RYnAbiRzPYdK4HaKXdcoPvpQpNB4F5Kim3eMsDvVGWdweMfjTufc4qJZVC4f2JmPYMH9HzBP2DJ7npxoa7",
  "key31": "4gCsnS13rvwHQLmpf43WqCiLfME2h4hxCqpZQRiTx5PLmTBoKQFeZVkn1bz8W1Uxksa8kFWkzqxn2iLRDQ4nnEEh",
  "key32": "2HEMcy2v2gnX4RqQfgRThLQJeHRTt4fcGr5BoQeR8E7y2BeoJJwx3pAxLpUgY3QGmwpCYD7hM3uMu4FDcjQEVXf3",
  "key33": "5D3wGAzyUf1Tj9hV9pE8Pd9TvwJ3gURsJKeHMK3urxMLjENmyVg8F9FmMevtYoQnsosm7YshDUSUUSo4tSvSwn4C",
  "key34": "5jYRdUCuXyU5jKKwJtNKobLqFBT99LW2DkSTbhGDFduni15vdsm9DjubL64MQDprUw7wazSCaTrvhQ4XLU7DjQkg",
  "key35": "2dpReDk888wLAavLwSFPYSzpbawfDw4eUjXHhu95xwcULACdLARb6Lq4T6NEQ8CTFcLcixeUr3pehBRtmKCzZsbF",
  "key36": "4p7DftFX6SuYZ5hnuPFksBGht2rnTqBPZRQ3divtAY2gHADVP9rMefn6SX7njtJAPpbp7ZoHTAJZRnko79ugmEYF",
  "key37": "aeLWMGD24eofzuz5wq8VcZ8q9EmnLm6ohJUB1FFoXUUzUAeJmtqtTGeyKkEpbPzKAL7kfuTMgcEZTbn9wjkmsBW",
  "key38": "4cdhmJ98uXde1bFBpLPzu8WVmBW3m4vU7fKy2efNkAUgiXMjXRtGghFZebwSAiRRPPv99PFsuq8JffMk7sUaPk93",
  "key39": "32yu8Ghib2he1fmNLCHSjQcyB5Yt7ZfH5susfJQSJ3q13gd2j9WxQe7gXz244KfDHx5Babavd4h6Y5LULK2QYFJy",
  "key40": "3sk2ozf2LF2pgwB9eCt3zaCibGDbxMFn3Qk5xDkTGREyKyd84A5VrdPgig5dB29yaxHFDQYxJL5iuD2kofPGAMW"
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

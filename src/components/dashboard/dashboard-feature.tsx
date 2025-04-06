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
    "5WddkTBz3nUuFdzSjs8Xq3A88pZbaiBeVL9EA9J6CxnMH9fanyQRKuLWG4gzFYZ8b2v3bYdsTxdawKAbVUvkb3z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QWevrgwBYE3U92xpvDRf8yjEdwyaa8WU2eUCm7fbeosFTEXxwn4MMZZJYNDDtU9qLSodDsaszUGvgbUEccJZ4sS",
  "key1": "3omXTxhXZde5iZr1QuTVg3ZtvxgBogYBSLPGKwfq5CeMkVVQV7KUuqVuUXMNQeje78RXGkPBVFirsupnTFUGdwU",
  "key2": "519SXyXTqJjF8X827H538VoxfGLpHp27PpFtVMGMS6P4JupZLkDVwR4oQ11P64YyZFtXN3tiCBGQjTStkTDaB2iW",
  "key3": "4RYfijAjjKnHYWf7Fo1x46VRH16Gbftv1THQ4xudkTvyCNoyC3PTbQxb9QG6qaBSWTEakznCymw7tEDFCtjQ5PeT",
  "key4": "4x5GhDGwVpmwuNwiBvBdSRytGBrMTizpoL7K2MiEo4tjLe7TMFi2JGF9tBRbRHfKfT56PbnBTuZUQXafhinhpNCA",
  "key5": "2G3yjbjnoBCTPRqLhccVXLHrQ78DyCg3s7cfCUCJeQHsMEyT6gyn8Yc2M3wMVymUwcpM2ig7T26Ty9RCyxks5tuE",
  "key6": "3Sg4C2Y4276DGon831T4pqGQteMNtQFmxeLEXNVZy3Bkb8TLCiNba4mjKYHuYsfwTe3QLTa9T2vWD59ExzZJurAR",
  "key7": "5dsqy9Hd9Pt52Ps1juhWv1GFGCQ3EVgEM7KT1MzxHFXDdUZ1RgDerT31MXePecCcArm8yryiL6LjoVMhhjstUrUF",
  "key8": "jWj861LgnkhbpWURn1dvn8GPxwwNoVmwBDj7TDnWCCvUqeJFMCR8Td98XFY6wmFtLmgUAsLfbdFLcfzRP6h5gEi",
  "key9": "JJnGFtWRoihvncHXJU7m8DpEwcoj68TWypkvxvJsmvccPWQn2MXSu3Ue5eKAv1MDgfepEirJZWpp1jWxf5REKy1",
  "key10": "6gD4kRJjQchX5z1BkYqnbnjkPe9CpvqTk74grkZg7X611M9w3zAnNw4NsRN1twToVWQm1G86VTaLSKoRymyybmZ",
  "key11": "4c28VLdN9Aacg6fw2GUCq5MU9dns6iH5RFQ7ah27B91C28BwGDzVAXsH9tKYstcdnTJJAkHDRE5SzCmR4gvvFadf",
  "key12": "4P3io1qty9Le4G1YhxuM3saCERjX385BtTTWZB95DC44jb8JeiMSFRFZB9Bcvwr9ywRMbvk9dQiXEMUHDqyjopTa",
  "key13": "iXit8madjGTd42LS68LRx6wU1XPtaS9tFPVKwxfZPuCW3A13aYvBf8aodg9wFZhqy3hj8FkpABSshdxkzePKdxe",
  "key14": "hEoDPjtuUUmZr93agqaNqwKyA1w7s4Bcqre9gaUxjYqMQvqQ6rJYo2QvuyqbeF3oZrHBKRS6myceHZ3bX8G5U83",
  "key15": "61ufg2zLisfDTXXDhqaEahCRg9UviomCg24joTn3finocUQKAWgS86hreJJ2CyHJW7mANrJEv4yUZh79HW7mCQP6",
  "key16": "2MbrYRLYd1sbB5GRbYtd1mKRbcnZymBys7kRbBQWaoQYkjTqJ6qBz6GyJt2mnxW9CqFbw2QzrymNYhDaLPzb5wPs",
  "key17": "3XpXcApQrZAaR2Vzc2aDF459akg6tV5yZ12TEvJA5t2npUUWvn3Gi1zY2XJM1DvhRUave5vgBSTrQZsbomaRoiUX",
  "key18": "4PWuAcXmTM6ycXLSzY6jwftS9XzPDqBVnTTtVPipF6MbyqoFAoecyh2Znsw4iGHKy4XCF1jv5k7GgDe6qP6Kyjxe",
  "key19": "4zg8KxG8qGezh57aGF3bcyYZjHAX8WeLC3Yt65X5G2L65W3oReG8BVDyJuXkoCGEroDV6YFfuKFKUJE43kH1X4Po",
  "key20": "26jCexfnkt34AtXTFqVqPGboiYb1MELEqCFC7Dbt1tU7jkeScfabXWUFPsmWL6qEUFsTLCsHagFwz9WjdknmF833",
  "key21": "ffcXZ6aVBm4b6DmEfPFb2qNfHR9daJvNgZChgDZA6qij4ciRibdCysMAFR3Gd2C2YwjouP5ZqabnDSgEasXdanV",
  "key22": "5M5Ye77rkPiVBWdu12wgfZk9eEn5TAqe1E1GuvWH1yaXDYDbJDfxAtYr5KmtbcDbBz5kPkQnqqVt8AKLadwez7W9",
  "key23": "2tHW2rf6ztgqLdSNksgUZMLfF9xNHoM9LJZGMfwW82uGX8fBYoLFXtuV9xZCiiCFV8N73spoEtx1wkhMaA34pvsg",
  "key24": "2HXe5Wx2gMNcSKTRpgW5WYcDdxZF7gjkjBb5WSStjTTNUMbxMFXELXDz6gBjc85Hw9MCg4J5vhkeFqhLPteZTni7",
  "key25": "FFNLKJqQmdqDvHU7Re81LvQKe2nbHiPaZh1V5LtjdzyDXdcxwBdKbWHFqkBgDCxAN9UHxN2KDJFhr3jnNdCpkGs",
  "key26": "361bjmRhztV8fyeu3XDJnb63qWSLtu7YaKMNMygxAFWwFS8qZ1NejT6FegekUxBv2bnBXRUdd2qhGNbToPE8k5XY",
  "key27": "5JGwRQipQwR1rBwe32auEvkSFicjHJNLdgghmJsGJ6egA7ksxcXqXfh9BcgJ5uNUBnWezYYKPR9wXEuab3t9FpJU",
  "key28": "2m1QHggjhepJiVRBjwXhyxj76mf11ErLFgLh4pH82M7fUJc1sQ4hmzFQJagJMqZvsC7Pepe1khzahuVLGpJx1iAr",
  "key29": "36R1HsY3xmvkRBGG5DrFHndjZ5BsQrEQthq9YibzL6KHxDNPHfSofwYYMBydnBn4uWWvGMNRuPrs3Na5X4NKaFot",
  "key30": "3PskPhdoYcspxZn44eLHCceXHasDbyNieEpRfEpASEBtEohKSJM4zxDAsfP1AjRQJPb8efiXBXFnScKG5e7Hj5Fc",
  "key31": "3nw3HcW8U592NY2EJJh9a6ZkbatiVboRp8nLi93RdXaPymJwfS3wv7zpNWGjNyP16f5xwDpo9ShWufmEHZByisqd",
  "key32": "4abdoLSRrz6nysYD4gdxKHP5Vn1vHZ7gUFw3isT1bxVLAiwyepqTKz1Gweak1tvXh7eUpfwTu1ar4rkBLEBgsG6h",
  "key33": "4kF8gzfz1Yy6Musnpnjfj9ktJDStu4oTTjevr3FTqFnuN6nFhuQJQWFuVmQowUxz8Xrab6vk2hvtyFSB5UjEsELj",
  "key34": "2CHQU3Ug9oNd9eQwV9e25YLyhKwEq1PRWXNJRU6RJpHzzUNmGrJUgKCm65rJ2xcuXD5rje93UUef2iuS4DLN9L8j",
  "key35": "2M2jH1nG4RdSPaaGQ5FNn3wBqDRwLzbRrJtSdpv5B6JNrYNpJPcLRGo6VHerT6eveqW5ayy8FkmZ3jVc8k9k5qqt",
  "key36": "3gK7Fa399QfFB5YPnvxH1EmD8A3bkkBHzViQ5XMsExLSiLtqHxveskdMLndmvfSkRQqm1qRRjyVBPrQe5Tt4JHBz",
  "key37": "3CABy1DNsmxUFXTzeWPuEe9Z8pdaRyccwsPvLMhPUQ1tEtKs4tMA5yypudGuUBonMcSHJxJD2xPi914266VN8nU1",
  "key38": "4PbPsJLMPGSXk4RF1xZw1ggCALXnkzFTdn1rS6Z8f8S27Vws1gBpbU87uJCuTC82moFofJsRa3RWidp73pWnzJTq",
  "key39": "4BnarNEEXobTADnpoXjkK2kvhYK6G8ohUyCAvytzhCApCaQ9pREywbjpRxjubLV9TVXkofnC9XjaT7Z3bRGmrvEU",
  "key40": "4d69bCDL1LomNX9RDizzbfv3kMiyTGJbGEVU7sHmsHXPiYqwhRr6uzBVcojNMPc4DGEQdAWB1TbGabphd7GZLiSp"
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

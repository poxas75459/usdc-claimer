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
    "4QeVScpmZX6EqQJeAw6M8YKcrKxFo7WCNDZXWWYieGTBs1hurLo1P4fSpEJ9D3jgTEKEwLHFQdfxAyRXknhaC687"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BvDjhYu6ywBikqECZeJb3FCehNpLBLy6Zojc9iqpav4suLgAditmQa7GrR5Pw5XM8sbGS8oDLdb8Ky4ZEXfTYky",
  "key1": "yc2k4Fo3WLWn7RhsEwYdm5jMSZf51UMG8rt5MDVsYaKehNxyvcC9e4LmMPjYcxkgxGCHbuGoV2QLAYnqPb8D5bx",
  "key2": "4oFdt2tYy5AjGBesdY81kFkacz65Luvk4aJJvRdrmCzYt5vchaCDasztGpn6f5psqAZX28ECzD55PWxe2iwgMvtr",
  "key3": "4csNtcSDer4ek9h3A74x9zKUTjTJpZUEUDChNGiTxtc2uSCh1b2GXz7Uu5q7fqRe8794raiBnE2gpSgXiNZLiDdA",
  "key4": "2i16tRujizAUP1CJjeFLmNGnpXUGrqmqKP87mydbma4boV7Bruoj6p8MVMuypCEjyBwGiizAgkjjB3wxf6iBJohy",
  "key5": "5KhX7611bSCa3eQfrbFP4dYVTbMgXdHuvAcMjkcifxyEHabtUfzqYciHixBWBYiRe1oHqUgp47768oB94UP5DjNn",
  "key6": "53mkLaDw2R22jwiDQfvx7Ma6jQ1xm6hFpCNuvY7xXcyo1851qhpKcRDfFmgdK3H2U7WpHenUwFodZKTVCp8zhUou",
  "key7": "4SJw66ptcdDTeLUZe4CAHAYKzfh37SDohGSpYGv8EGzTcfbu6K6ZZK9mHBZHdm225wGFxPxdtK7MCbPnaaQcsRik",
  "key8": "4U4kMsX44FrRCzMJxkcjgywh7oMDs4tJCPxBaNdxNNeWwbJwJz4qYv44mPC49YgY8fHdGS3pt8wMuoZgD2qz1oJ7",
  "key9": "5E8vuNc8ssTRgZgPmp7yeeHL6ChXrNfeYp4v8C3FHMymuoFGbRPKezKMvsCg1eLa2RPxSiuXC9RWgBqDwfPMFA7n",
  "key10": "5w9mbLLzDGSjtjyaMEurWLQYijZLpTW6kfyL2MaSZyuXivkRMMvNApNFRtsBnXzrXVTs2XFSPKji5AYUL5APbj9N",
  "key11": "5qEvgUwR74fMoFHoP1ZVrsWStbQMiJJxE2CzuAH8GvYxF9AeqpaKEzg9vh77BzwwX5spbAmRcPefSWs7ZmkreqNj",
  "key12": "39jx8PLqruQ3dt1nncsKxpyJhiXLRgLRrpqxVyPokXVh5q5swNDgKET2Eu8UswZz7qr9obsrM4n2UnZw8z9WyLv3",
  "key13": "49WxHe3T5U6uSrZFvMmQVpdEgSYZD2msqyui93H9QPjPeinJ1SrNbm9UdCzoK9iUR3eonBAtrP9u4G9eDEVHZsPT",
  "key14": "2ASQFrcSzPiAbUtwnYNPvVkVJpUiBEKamjqQ83Q4dSgT7YEPBaq9Mz9PTv6m8RyUUZPpBz9tnqxhBfkAdFAdTC3Q",
  "key15": "4DP5vBdRrya18Rxe1zQtjyDUS6kMf5RdQRRXaHa1otGAHwrksa1wCWJhP5Gdg6rvp1Czaf3Az4Gr6VzVYgF3M4ce",
  "key16": "3hccp6DNoKQNn3KYo96mgFXujfi9ZsCv98FECaAjwoyY1ES5RYRodPDDT1WoPQ4gyDy8SYwjS9V3BRTJBwrbe2JQ",
  "key17": "4i6uyod5FzK4BFDace3ckHuRCkpgHYahfvW2n6Nmb1xAgQgDnyQyy6cnMAsx1WsoXB6vnXMfkTX9DNqEEP7QaLEs",
  "key18": "66WGLesmjueUjiKwaUX4qyeEZtKmXJb2T17HqvWEH7PHZpuTrCLkFU55p5qNZ43vyRq5Q6yXb1u79yf8DsLSH78r",
  "key19": "xNZrNnQmBgUcPG1soRZaNhTUn6u9ibEgnDxGFw15urZBaLeXusbDB75KciiXj2suE2eUAhDfJgSCFSPaaUR58RG",
  "key20": "46nEEhRrzp7VXJSY3YFJ5hE3jK2ycL2sE19kYuJDb72PLgKPNpY1zKMFiaxaNkdwCMhttmxhSLwUmBj9KWmnnJ7g",
  "key21": "2zg1XfF1uQj7V9BQ9iqR224roM48wn6qXD6rg5p3nirpKz73VZkBBFZW1zFaDRVj75NvNdXj3CoR1hCmH5Nw9Tce",
  "key22": "5PsaFz5qZiMKqCwnvVETswfsioUzJf8dGNX4MrhRZXdNQ3pho4VDsqqcG9dQNcXTM9HD8vngymcuE641GsfRwsft",
  "key23": "2Ymyi7Zom25nbjEbR2PTnk6u6EvU5BB1gHXbfrXi9aupHHaurE9pHqUeBxa9RgSSPEpPgwU83iounpq6ix1uJzd6",
  "key24": "7RjhoMAWa8TBbYg5KacPeqywGPYUBXBgLAhoZYZw4CWAfwK3Gx36KwZPTYPNYy69dPX8M3iS6DCasE3U7G5oBqG",
  "key25": "3ax77XmPPzFSe7i7XpiW7prPjMAwC4rWDwQJwXanoK2fh1EhpMBDoidKt12VJZNFh2KwJiqsZ9mRaUFyUgNJ4GcE",
  "key26": "3q8U72Xi7fFbmLbcdbnGCnpUQj4s3aNULgeXnzJ7Fr9iqCS8g5S794Wzt6fURxRaVovvoHkR8p9XcvaE3GyncnQB",
  "key27": "61XvbW5h4PvvBAbzA5GXQAhAqseP7Ltqu7KvzkRfk4Bbz51y2CDihBhYnArtm88idB1jyHSse6JsD6CFkabzLqNK",
  "key28": "31CHGbHjxeMACFpqgpghBHTBrFABA9FaYsefePnC47xNYTRxAvn5nARnc48Hb2URCi8s8e1q7k8P9A8KMLdxN51i",
  "key29": "3pWdnXFA56DgY62PbT6b4e9k7yxurJh7QChnicuznPSVgFSPRFchPgqeHBrRAsDcA6zqBKRLojyLuy1Ad7RcteJX",
  "key30": "4XYCUVtT3pozdS7d9BWRmZv44U2prppbBa46QRnrW3VmmK7Y4MNwJKvmQ6Zh7FrLK9Rux9tjGZBLbaeZ7gkKfUjK",
  "key31": "5LkvscknJf7151hsGMJHogCJHqSuZsg67SiCh3BDyBoPjSbAQ5r98CCyiXuo1Mk2oyL5srXfEAnZ2pr6CVpCia8H",
  "key32": "bLgapJxDbUBvdJpvyAAcnLzby8xQhT3eYWwPMBx1bCpeijuWCUcxXgD1v1Ms5hwqQfionraqCswx2zUUVptjFdj",
  "key33": "3nAQRLujfmGnz7dBJATw2fKpDeJAZL1oAQRJZaCERtphqFRUcnd65XyK9bAZWbRCB54F1k3dcWACprn2gSFXhR7r",
  "key34": "3h8JAkd5nRHDpEd6YebdSyDCjLKqr8YvhtY4rb8kySKhHbXSGZXX7qXiyHKQjY4RfArHR31Kxgt3uPuQpguDFwzq",
  "key35": "4P2FLZr8w3gxZjyjS2EpZks7GLNpMUeyRbCin4eqH36FzDBFAwrxvKxNsRD6JBgnUzHUXYYVhRmzfnCAjPzmYnnN",
  "key36": "33M6U78cCjm6mHbMsLLkDrqwF9coBVJGtmUTc7TG5KfjV7bSBUkYRcaFhsdsax1S6YTfCBK5noxfGZ63Wz8DPVos",
  "key37": "SdbPruxnkP2V15UdiE2R2HhWcC3vXxNpCWgdevQrxcAtQSQN7njPzv6GsnqrBxYkLpX45krGGpRxRxLz3AKkdVt",
  "key38": "Xe1aLHGc7t5V42uuirEcv7b8Mx4Nf4UHdsGpXrhYt6hrKq1qXg61Yj2cgHycNFgKCAFJcZJ7cDTmB6fXFMm26dL",
  "key39": "3Yu3yLRhtY4S8g2Gor6hYT54dWwM7YghoZioVwc5qn3t4eHGaRaPaTzdgJonfcvQrNA4Ck7Hn2XVTLD7r4Q6NxyP"
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

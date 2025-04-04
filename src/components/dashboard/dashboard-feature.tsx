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
    "5d4r9Gzf3ms99WtYiNJYP54DNWMDYferY7Dd7ebLXm8rNWYdkHG7RPh3cmpfufGj82Bg7pfbHw5hFpfpRC3JDGLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fPaCAJtfbmtQoe43X6qr7QyFmwskp4uwFH8Zxa1QhYfa4zSiGC24R7HEaZFMHCDdCWxkCb6Km26aAPyiuffc9uJ",
  "key1": "3nSfHMkzEv4PYnRHCrxPTs4NCWQSXK9Z6eDQsy6mrkBEdxk6SchLE8iWb52Z82iaBGEEp7C9mf4jZzngsGveNDyp",
  "key2": "2cYnXBUTnD8255YsVjZpQxH1TeazEiDcTfRbc2rVc82cvM5XwXU1FJpXW9zk7d6j29zPnhKP93ux32Y9QpjaXTDG",
  "key3": "5hopAM6su2RHqGsP1K3RYpUTnHAnZe9tda7S6rk7smrX2DhWuVTTrhbzpY4JHod7tTzVze3fASB8HmcwndXy1EwD",
  "key4": "37YDYdqjCf1QmQvxUTU3Y8WpCSQ84XEF7A3QRKwq8AkFKXFzGtSU1NQjiT3yjvK51eUsBBH5y46BcLuFSyZfbG9k",
  "key5": "ufnFW3zpkCLgf2od3xyPKH3MsgB8zQuhZvjxHRynv9TuYhoxUNZkv4zGBSdRdWASGN47uZbYEqx5F3bdFGuUTpz",
  "key6": "3mBnG6cKsBaP3UWEoAaFBWcxQ6P73qQX9fyK7evWKe1RwtAwKH7tnE77t4zHkjWKRwHRUVyq3SjFNNCSaZopsRY1",
  "key7": "3wXxfii58gwbftExaPJ9NoSUF1z9Q7kR8Yfk7qMrmwjJSYk3RKaWyoiRBDy1X1eH7iKPHLSfyUFeJ6nT1PVNwwzX",
  "key8": "i7HFaxWMHMxHEy7XkX1hPrUh3g6nMrzcW1fAKzwHAzBUB8okHpegJoT3xWBg85HqPWQCPhGQCR3YgkDB8g6111Y",
  "key9": "2yj4EwqB6QbP8G8Dv4gkKLCsDX62CPom3yaRLuZopDu6PWj9C6f84R9caepxKH1ubNPPn2NdRL37Vw1WbT4tGFF9",
  "key10": "4TakmxpYov1PU3ZuVMTezoJb73y5SDUgMQZnCraV6LkJAgHnJkeM4hAuHQ4XVeAaCkYzz6i7PK8zGCocpDNSEnsf",
  "key11": "3PduH78zdrRg5SfAJ2zECY7pJXFZJqhKXSUYRLNY57M7rVbNZWGd2qf9cBqQUkfeoAQRu77NHyHRMeReHYUy6ikB",
  "key12": "2cP4eEP1D3AwgaHcnBDzdnDxxgKBEXjj6PPk6ZPDkNu86sURWceeij4QUmYTYequhcujA5BCffVU25AX7yzDxnj8",
  "key13": "vUJhr8VJnWfLCZeGrDoUXsr2vBucxDj5Rp88wKT6EHdvejErfXuisXU2TKYnsdfNDBDeoSsHTD7XDKynujA4YF6",
  "key14": "UnioHaHKCxXXaNGzxpaauoWuFCrovGwaN9ZgMrh6wmCTJTQtnDuiLvnSvJeA9cLTjSEm5GQt9cejER2HpRTHXUH",
  "key15": "5uFkTFnQNbMDwANsppQR77tQBGF233KejmoUgqmkERg3WY9PxGvLmqB3wPdJeERosnrFd5ipLd877sjkXTWFm7au",
  "key16": "7VTep3U8hmcBVz2aXnsAcFk7KWN7DdNb8poKA88PFoXoP1YnY2Q6FMQ4TESpHXuRagNrVAyJvhJoZrV5fC5YbP2",
  "key17": "3KEA8AwQRz6pw9JJGhCvBZzKW2wo4fPkWkNYqmEFP3vcfAVC4gXZa1AvwNvoEuo7J83iA4HyrWTChqKU7SPNuckf",
  "key18": "648jMg1eJBBQJFdVQgnHpF39c2BTA8Hef2GUZDZbAsMFFXKSSz1iCDAHUeyyzNsWWTQ1c5jbBjJuWVKeVdE1sNbt",
  "key19": "3UYX5XVvmCQpUCQ4sF6tvuo3C9AtpkP8dN6wUrrJXYoB8T4YMDYRtgbAxawvLkeovAkwXCSdfCfHUiicTPg17UX9",
  "key20": "35prdvqrWU1mG58J88jqQNUrEQBiZ58YRGCrejYmu13sszVASMRPssqmJ8aJChYvGRxPMcDtML8yxxTcvZpVhfW8",
  "key21": "4nfVfoqyhhS8FNji5MrejMEDtYYmERhfcV9gKgXz1Jsd9VFru6s3dUSscrbEiwVorC2qdZKLFMiUz97wp881EhhG",
  "key22": "5mXFMX1i1Ukuoa3x1rwwi5Y44JfrwhHRBS7E22UseB51PiYcZw2F4nBE3SDiUNi6dHo69wrafxWw4Znfo6RWrgaB",
  "key23": "4HzrbBrmx6DNizVWz39H6aaFwapo9TeremohkGpa7UH7NzahZFYMupk38RbUyNspaYoS41NWTm7iHn9Kiq7bJsHM",
  "key24": "3goKfQ82ViZkpMpS9F4u8iJmJZQDW2KtKCy1R8T4KMFEenCajXq5Gz23wLv52uoQAaFNas4Hw6ELqegkzKEPQsB1",
  "key25": "Z9uVaCqQCYvKtwBHJMNWXUszQupEajRwL4QU3KTZc2DmDhUrdVgBeD4QiyCgouwGrtkxWhYsxYsLgxkC4pvhW6k",
  "key26": "3YGBPEkDSDnzVYEKctgNvkjp2kxkFAdgTDYTwHTdHCnUUYqwtrKU4VN2gPF7Ae2wf7FKeeNAgEuepvnWBB7RrvjA",
  "key27": "4xbzk6yhwTD4iWaxa9qdUw8djkUuv6GTyVMazd2oNm8inkaGC3QsUQXu5j5cqNt4vp8YiWewXr8bv86uQUB5k4fi",
  "key28": "YVSaBXAs9DLJwaggnwiXDvFkKvYuBs6MxLstysMgmiFrixgixVWNowwPVpmtVE4GZRGPX5NWPrEwzjqSFXwroQ9",
  "key29": "3mx11YGFsNggzqm8K9EwwnUrzDSzL6ixDzQ32qNoT5TGX4GX3NmXDW3jHSp8tRJPy2nrWE1sDoSmjKd1JzPyDPtU",
  "key30": "4uUrrLuhAAFsitGzjNWuwjknKJdeb5dAio5NCMN2tqKdV3sA8HGjpJQ39zLmu1xTrfkjFFGHaNLJG8bL6oN13axv",
  "key31": "zSB1rEX9Ny3iLqHQxatc4ZuLJeUt5DRmiif8jPMqbg3kEkm4Huhmq4P5QMsSrLYN9GrMEX9epwvDP55Z8UexVti",
  "key32": "2YQQT2E8S5xRnPb4hopEfZgdHPxpahcrVvhZnFzJ9gJdqQANftyT8zzusbsASjnC7AcFWCUhqVM1j8WLS9ZhCpuE",
  "key33": "5BxP6vBZBGc9fPHBNbHMWNUqqwai1t5ZxknmJrCPZHtdKavconEXwe97eAa1xuzCPL7Tvbz2dRA3z5RbseFbr1CA",
  "key34": "2UhReFg65XFoW8FmD7xBbUEk1Kth37rmPL6FRaNbXDgTuxERJEBnycVNZgF1nhooys8wnEXiryNzgDLf32VZYDj4",
  "key35": "xYATU6RfEBNzeprhoBJqv92yzC1DYk9TQ2ydHNXVc5f5tKjZSPrTF63nwp3uizXXdJ1D4XBTv7HgmUv9NyvhW7B",
  "key36": "62cwKNxyrn3b8CYmDjxeMk4hA4S92WRVyFmddKWWYXUUmnU64b6dmy1X1Zw7WZzeUVBr856FvpuCoGDnFpCVTEn6",
  "key37": "4U6wJ8zfvDnSmktZCU7e6v43J2otQiCW4MBVuMjUv2n5Z15SkBRsPWZiF4TmAinCPPuvhBBarxUNs6f9nVihBvLr",
  "key38": "4py3G2vRf43RfUdaAdSM65ZTKDnsjo7cxLwyaprDqadFepZpnLUBtSxKKXrLXsWaZgAwVLXWSPGkpNeYdjQmoAG5",
  "key39": "BQrXbZF2EFE6qEfSVNqypcURU41XQduwma1nUiq6X22FdgFTUbwgkX5bZvwoYnYaviMe5p7FVKQa9dEBQYBynXR",
  "key40": "2EmN7wFVFhCGPtVyaX3eYzTJ5VQrXoABMQtM1Mm2d6LL6p91i57nDS8BNncorfXbqakBcnp8zYqu54LK8khPNY1c",
  "key41": "2Wk9qtY21svuwqANEDXg9pLHKQg8r2Pq3jB4M6pEHft9XLGw6YZQuibM3j99px84XQ9Py1TLnewoaa8j2npfSCfo",
  "key42": "5zr78n8zmqyTBBvzw5vHrSKSxS2VBDzqJyRRuSMQRcEh4aRASHMos49vErSijxJQVLb9fG2kDpLAE4vBT9XX84ds",
  "key43": "3suDTYDgokwo3X332zkkU5UKzP87yZB4TBvcbC7SgKQtG7rBhL5Y9UhHvFSPhLWvv3QqsSMW7uFajLbASj8LBA6Z",
  "key44": "47AeESWXH56LQGPBJaW8wJrkv8vaE9mrJ9AinJfj8BwFMJkqsKR64UFe4BD2AQA2EPe9tbzvQKN47x9dHKr9wnNZ",
  "key45": "2qrayxXHKQXdX9hfnLYkT72yKFX2cvRBYaL7GUfmNb5WW3fChTwjpCqjEroyC3oyFfM7zSUgrtQ3c3DoZzU2SFMA",
  "key46": "2xJtS1Qybc5WPbm7MF45rCVLiwFQ2Zp4NPzHAgpm62tEEz9M4dK2dhx46pCuqZ54wR9jiQC7MKa6W7yUSAPoLbdx"
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

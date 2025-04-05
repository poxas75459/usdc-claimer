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
    "4WC47n4Z7vw4mdWXTdFU7AjxWPRs68ucEYt5AFUfrSkKigCbzZPhRHuWJMkt3n6tw3afTvVtyJdHFontcnTqoLhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H6wbVySo58vffBcYwHfcnUjhzh6ffxYCBFLgmNzfePdSxX1qTDodDHJGc4JbxSMyk67X7S6uC9Pqkj96THUgriu",
  "key1": "5WCMzJgtYr8ww34jtfwnLurmvn51eBxThohtgPYEzsHRiGDNHzx1YsmRd83dtj9kgBdPTT8GnSYb8znYTRHtKB1e",
  "key2": "4ot17gLCec2vTStPVUbTvBccf1gqy6ZZTR1CXsMxe588rPPqcPh2epMf7BAu2VAk2EGjvhKW9tWyUwMArw9uTZ5H",
  "key3": "3QwrusLaabgJjZA96eLuByxB62bv4BbVmaXMvUH1ghnTGPqo757YcF6CvNFyJngrEBJXoPUjeyWzwBmkgWUqnEuz",
  "key4": "27yxesuvxnev85PK75nNvSRddxAAHP1PAVSwQFZW73DDbxD3bZcNwAUBL9LM9LQTPBhess8ftMJ4aL4yLG7R9PBf",
  "key5": "2pCGNP2B77kCZqNAZVdnT8J5bwipnRUJNgf4m5VJ42RiUiJmEhyg6zN6bPb8g6zjYw3Q4z2TEcfxsfA15q18rfNT",
  "key6": "4KJAR8sCoyq7BR1ZRGLSPmwCJYcDgxYSEbZFCLpryCVrZHAobRSsgkg8KCdAeg1rvNn9o8fHRsWtgXCDBizJGc2Q",
  "key7": "24BHE3fDytC82WBNSedZxxx2eYMRjUGsscj2JUQLBzy4WipjHUqhYfVXcBUTRKS864BhykffKZBoWfjBd2siNG8f",
  "key8": "67Wn4nJKYSu4ws4JGCbZNM8jGHQTREtFEeDivjHDhz6Wup7Ewe9UpbbUXE7uNEKadG3ZUCUdSvTT4wGe7Pgm4LJL",
  "key9": "4L1SDcjduz6HdDUfzQhUDuRRq54JK2H3nLeXHxyqQWpKgmN44RVCzwyvsy8NvBGXo1ouZcnXxw9uCWUo9tZRCPEo",
  "key10": "2sysVL3sdoAar6tM4rfoyobPUg7g5MFhh14uSDvHHe2Lv9pxsxm8CqQKv928c1i6w838bCpK28bniJutvz2MyvJa",
  "key11": "fVEk93Xww44W1XWvwxGJnDNiduGKByVDTMZCDXbtxHa2dpbksLhaGKrKnTzhXiLQGQShAzVxUw2atkGpL7vSB1P",
  "key12": "4XxRKmMFXgowgNX6aVUh41qWXVbD9vhnX9eRHjmqPsibyjUMcG9o3P9suprA8jkxQcwXYQ5eGfJE9rhu5uQZSKob",
  "key13": "En1qZMk3xw2qhp5Zyc4vDZ2B5VkfLuYx85Vu9dKvJFKAHAGGQTjpoBtry8vcD9jvTWS337VX9RAHwedMgpwRafs",
  "key14": "NHRN2c8iaD1JN1vpM6E7zWqjYuQkcMwbhtt4c1s3MiTmJeg5D1kmEYscjA3xnMsLrksUaGZv2LoWa6ojdBnhdXq",
  "key15": "5QjoyFHm5x7MW6AHtYn31Bvz2iKBmSqaFTen7KP3e864dHX6oL6Acx5LETA6MNodiXN3XAUVWHwtuPMeDKQ2AxFv",
  "key16": "c2E4S4sBCZBWNrnBpP1aWH4RbRcb1JQJGZ5zASSTbc3K5BCtXyqptsxQHNEvp69sMz7Pz1w27ztsE8oReM3ZyFE",
  "key17": "3Fo5h1kasfUgSxZ92N7nWyAQ335ByaJmibF1rSM1tx2BpiyS1RRNGPHsHjxSeFvmbYMWJX9LSXCWNfLsSKptm55Q",
  "key18": "ewDgt3nQhsJ1yEn66T25XfLYkG3uRewAymDKNCCSpwLPNsVib8QMBBv3nqYbmbgAq35otmaptvq4zpMnwDPZYHY",
  "key19": "wrYXaeYPdqpx7RzHVumjhmW2Gq4wJsPNNpPqQf1rZKGY5wd8Ao8zQXLJg3MEsxpCXpvPDUavyNVt8Gc2qZgUSDd",
  "key20": "3T78iwgq5smTx8mNxKK8wSKimL6RWYcj1VG8KTFAawPQqiRd8PyeeHDjofxBV4BRwS554VHk77AJ5C1388m17rWS",
  "key21": "3S3h5zxzF2im2MhwxJWr8GFphvscA6uSAWTc6kYZ2MJLYZUBiMJYqqVECKtdWPEVfrQZ4XyuSzPaW3kULXCVxsiH",
  "key22": "5y4CNCze9FNsTfSi35ZafukwP6LpD7K2UGP2DKjqcPmVwbRcb5FiUMg6K3KY3McUGQWbyAnPaGGbmmtP3ctzkhJz",
  "key23": "4Ha34o4vLe9qbSUjQxh3CwddDeL4ZgMxrQPJxKh7JgWYUNTLwuoaNT8T7AWHH33ADqVAcBw1udvbW8jNj8sBSXoR",
  "key24": "2qrZAqHFyhSodZGnTMXm2mSEz9PzHrDvH1KcRXmpx1bqwBdCPhEEZcwSrqwAQLgwtBXMXKPmYx6EgmndG7dHkmPs",
  "key25": "43C38KWcauPZqoqGfwnf67jgTFML3BwAkDZ7qj7nCAfHD6vGM2i4xsKKedNmrD4x5v2fjCJgeWV2RVn6f67f4TU9",
  "key26": "29QS6TnZfhaD1wxYQLQXQgA3vc9NJXKa5ohgH3uKBGzEAd4N3mUUqrzhAuhwtP191Ak9bgpQMQr6uiivNT4UBofs",
  "key27": "79qmHfsdk4vFzESL4AmHUAjvyUdVL7sR8tu9F6196ycvxJMdjiMQbDqHrSLEqNBVy9VVR8tuxeGK1auTVNmPVPV",
  "key28": "5mwPNc8szbu8mHGxLkMzLEZaa4KPb5MLpV7nqjb1DnYk8TEoj46jzZpggjDAT8a4TMnoNf6Dp5DhhSTuN5z9MuRQ",
  "key29": "5WHPXsgH7jbUNrDkKdDferA98tirU1N7tBm7i4N1Nj5hcp1EneyXK5ntXkhFv7F7uMidxJqQXk2PHYVoTxKxwCYa",
  "key30": "vBEpH5e9psupMLaQco3WhEDSE6HqesM1SGLKvYshkzEtEPD7VeNbRrWAPtrsLsJqvEd5XGGvyNBJpBiLDF7xFAK",
  "key31": "62ZEKFJg81mGRcTsTK4KzcGPLnjiofCDJw4AxyM8S2q4ZomrUZccDDrRCigxS85iJDGRAvmK4rkqyXh3xCnRYoVL",
  "key32": "3VDadRYgkAYjYNi5etUtQ4w7JK338GGnsAgfYhGHpSqyNP6nHTT8c4AYRQC74PKwhp25CurH3LTXr2DBGHW8kW21",
  "key33": "4SUBwXfMVFfbzQzFZRjHohWkqUkKngqsgrT65Uzt9GdHAqEZtyuHYYHdQEv3r2ZwfbArR8X5amd6rFzmtjTeECKK",
  "key34": "KHWWLr5aHMosNGF711FArUEszTNiLzTo2hyypcd5vD8zjnnB1WEFumnsCW1y6YhwGkBEPYD3vC5PvEUe3XZs1NP",
  "key35": "26F4G5gA11G7wEVGK52pHa2RMbYaaxkqhUoaStKKb3SvegymdN9TMxDXJKnv4ABm7NRdYuDXbtBNT8oETMRKLSdq",
  "key36": "548tqGx91YEYvP46PUz39CfzUiLuxbUe7bqemUqbcHUDmePToX2GMb4e6FBUYEhGXBcMPCi7a9Q4bH6GiMQRCXfZ",
  "key37": "5CFDugbHXPMgTLgzeG1cvj3q1umjEcL7s9Xt8PmHfeE52fSdpVoQRNVTbhcHqojRfD7RwHQ39Br1GDRAPpscaMEb",
  "key38": "2PSWwqXH19PXgy5DZA24xSKDNvdrDqYANtYQpwsaWw2VceKe4zWT7J9Cc5Pk8Gy9GNLyShwbiuTXcJ868XcbnBMy",
  "key39": "2mtzbaaJ8ujdcpMquTHk85S8tT9Kps6eGVQHEM291hZgTNuWkb5ARgcYaN8912kgYVTWUGsjVC6Dxb7QAjDpzC94",
  "key40": "4kq4SQxUAXQdcZcetkPkma9JxVk166La5fL6X7HRYaJChE3Pv4gRfLsvtszwegZA5VhoLc9jBiewe99YDdyGeTWV",
  "key41": "gG71AStNG3mCdtSANjcqgrHBWSK5T1B2zdpa3k6pQ4fSVGnnpJDFHezacX4o8v6GqPG8gS9jYV4A1ubg9j1Gtav",
  "key42": "39tzfkHQ1JTAnNWu4zbGHu5RJSbk7hLqd8UbkdSmnz6wL1RC6ivB5VgQPtYdfhEWGSMb368czNot5XyHL96Twsyy",
  "key43": "XBerX1kcRA9fjFg5XK7kB93NDPbvDoCrQzbPKjCYzwWfPYGEdCNY1yukBpdJkGBnBvwTemkZRWZbF6u25KWCuc4"
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

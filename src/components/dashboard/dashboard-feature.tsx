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
    "2t3bSvYovLEcG9EsRwz2hRmw2aDqDi2LZVXYde8qPXCBs66Lpy1nyW1UoFThhSmvHef5w2mqnTqyrdYNz9WTVoHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JZnxy9pwkhqGeQTmchZQNjT7F6K2fhaoRukzgKtY8t2He7EZizm7xfJbSfvqYYMVBV7B6dJDgr5Ee816WTS5j2T",
  "key1": "63nyadkSK4mwnAJzRzGegUhshwpkL7jzUWSkAHRSXpfsm7WX6wnPsz1SPotZr1JrfFd8GVydhhxmVeespE5gaSnL",
  "key2": "35f7xNsK53RgWvU5U96nZ91PAxFf9tvrbuLPEG4jeyiyjm8MMsg6sz4gCy4nLX7U3BfexxWnkuMYk1vaHZdieYNN",
  "key3": "ytjfQw6u8dqnotiQZKtu4ve4ixz3qyXEvSZWZGihNmihEGEXSnMKvkp1PKuUkj1SKPRN4RBw5URqWaX53e28wXZ",
  "key4": "DtXNNy9X5UVvbPdtEc6i2zoUpwwFETvM9cx63EVbS4Wi1aXQs7igQQVL7nyhBwU1tEq263LM8r77gZLbdWJmu9Y",
  "key5": "5JDctV5xwhD6a2SRrfY4VUGXMgUddDuCr9G3T4UzQ4A3bEgeiogrF9Ln7rLwN6qiMMwckmZ7nFffMMoYwAfEjhKV",
  "key6": "2kwzLoE2HUCRawsq7d5BS3ZY5o1PCuVLopsggvZmoJ5YFXuuDMQUtotuCwgGfb24cwaRnWm2LKbH36SvF2nHhC7W",
  "key7": "66a1VF5HLATWYgjzwFEdz6RA6m5mgx3daBZQzKUB8RvZgde1fcmWYMRRsDQ54HC2XqP2HmaZmw6Wcfwt1ndsPETT",
  "key8": "5shZGi6BsEHyb4zZmEsbzG56YND4YLX5tiH1ndWqQ7ph7pzJ7dLyxrNhvNveXDbsriwoXySwhz3iF82qTjZ9wpNH",
  "key9": "3mqJAaiVMDPvdfocBnBdvUVZ3EaLVvvEuSY4DHYKL5nhijJiLeGiMQVbKXNkwpZWZpfVrJH1LhLHto3WxnXvUjWa",
  "key10": "AFcncR12zMkNTCcb98QZFRnTx9pzz82S1GMdv26FmpLJ929TXSPn6w7RDTwgYJR9E18ATtTQhnmDKH7N8U7tB7X",
  "key11": "2JtxBAcSni9tdY1LmvsiZS5mgWg3QdxXCNj8x92KUVbfR3y68fS8to5BybJs52g2GJMFXpeoSTvcc1K4wpJy1cAd",
  "key12": "4Zyv5SHHj3Jo6Jve422myYbw3VDMU2aazzT1rDdyA3Gw4VurtCCyyC3FCSdy781gsMYxKTd7vrn8scS6FiWQzQDK",
  "key13": "615WEZF3W8r7UL7ErZ4zumjXT7s28FwMxJg4nqz27PZhyAsQKCgTnMtPZs23SmZ5Qo7eA3nwD4siYBzdr91eN1Hs",
  "key14": "2yzohqSMihmt8Qwb479TU2xTY8uFNCD46Be7beV7mePvAREBdypieoj2ELKUrhdkH3HErL1ngYYRG5GSPuTA8RTH",
  "key15": "2nAdr1F4HBWKRvDg1WsbsKTz1Fu6XEM8vD2jATgDJGFx44JvugwbJYkDUGmF2mkNs9oVLNHCLhUV7pGnPBQH5rMT",
  "key16": "2vensyzKdFKbxYPZpHe1isqPwSBTXNj5Ud9LFNtx34JVbv8sV2aQQzJSbheHGRxBcYT8wLAjhk5bBreSf6biNZHk",
  "key17": "5sk6vPUK9tKtKW6wVKwzo3KDAwefHyLaWev6bVBUKH6QHusTLdstu2QQyeCrAXGsmMv3BpyUafRzTKtUrA3n9dum",
  "key18": "2VkJ6XY14E7f9FB7cA2cMqhEsP8cwXSSReaneNm5Y6Upgy4xnRN9axMySj9YR1g67YxJRVTUoRXZE5NX4vM2Rv4w",
  "key19": "5CHUDnJuQ3V5c7qoNFTdUMZGh5yFU423vNvsueA2DBqEGdvcDE1rj19mn2WotRW3WnUeNZ5tqE8bi4ZYTQ2KmSnk",
  "key20": "2GTnQPe2nj4fXt2aiCJxBE2FpoQZBeeBMqNByZJos2wEB9ghv6GFenDQqha3hYY9b4Dpotb8eSvDwcfsfdZAnLio",
  "key21": "MYcyikg72CGtSRt3vm3rs9cV4CbNFyvFpRNZuHK78tTFtyiJjRqz9kDzAiRBMfiC1a3GiEHbzv6uVVZ3uEgfCAf",
  "key22": "AVw6PpvSKW55YPshBHCh7haBmWEduBS3yBaeFnvvNwUivmnDo2CdkMjM4X5kHpx2UXtMimdoY7VtQkSggwEmTdA",
  "key23": "2XwupfkQk8cHTv1HwiAdSXzWqrVmyi8BVj9iCsYCzynMn9DuHU1rmxwEin1FWG93i3tLqdwsiDqnW4mF8tDycZTX",
  "key24": "5oXDHeYUUigCXd1tFhTqkbAVCbsEgt2KaMdjeANkDqp22CnddPFb7dGpWc5iZS3wwUwKaiFhq9ZhT4nDmQi9SGik",
  "key25": "65dDCgu1SHGLBk37DjtyvK1TQYUJSMe9QYxAhJpFgZBBfbbC7vKii5MS5Ssmu94ax6EWdvrJMxm4Zy3rhM51CFQx",
  "key26": "T5fLyt1mWd4uaYV6HcpcuQ2NEAYetzq6g6dFwSkuySEKKgGoY8DVwea6A48ayvZ466nVm27PAJYZtYYZFHaf8DQ",
  "key27": "5G9rbZaLAaMB3bvRe9vEW1va421Fk9V5gzc5bZMhiVE6K7Vy71TKkvJ13kSHEia7ahhL2Ko2NBTX44vqyNkFm5t8",
  "key28": "4EbR3Jn6Tqowa7LKJdpz9MakkW7gfqwhxPUvipx9eHQFkofoBQzDW9J2S9opkeBtKp1h6eSWNWs6tT3GJWFuXgRh",
  "key29": "4av75CNGPxKXXAABnPRrGjk6oFcKUwNYb4FoFcWCAKRnS7VuhvMyUfynatvqN2tHGFCB8SDdWGbDfzBSUSWqBF1p",
  "key30": "5ePGPaVxEP58ua2BaMAg4SfV6EsYWEgMNCFLoNMjAd2drSSmsftJc17yPnmm9qAdxwJM22oYAWeqGxwy7qTocoe9",
  "key31": "4KHsxFEW7sUTfJFbLgARkfsD9EJQqv6fEsvFxvfsAAD6vpnfTWVhXvu1rTJxyYFtPfjGqcaLwKZhVXBjS6ssJesj",
  "key32": "283PMq63FBB79BAgZrcxxngVLuHWMuPKEDx8HHePbYrHzybMTwPoYGV5rh4528LTajJDs9UcMi3rqeLLJ3pt1x9b",
  "key33": "4GSwPD3kZodd1agkirzUwXZjosZ2NZtBbVpJ8H8CeZgBDG5Cwg4owRN7huQHraRdmQyHjL2b3fCs1hSHoVAqJvBM",
  "key34": "9W3cofrM7fcwJtLX1irsGFDYkdByYYuzGnnAEV954fcrFPXqQsgwyVuJsEtQwMgELbufd4xqZLB4bqcfchURMSL",
  "key35": "5nmmfqnfHHXnqfrKtXbgtLiosmNRy1JUZBg4YxAqbc4mWNmG1oczmXKEuNaTDmzoMkyqxuMj7NeSuZQtsYUFNviP",
  "key36": "3hpLiVtUEgd5oB2DXfEaMA3eJywhmR4RaHuW8YvCM3VivReLrFrw3D6fMHGpAbpLwcKQUH8ZgVnoBfYYY7e6N2n3",
  "key37": "2BdxWMjq5gHk4h9giPrtpXuZffHd9AbcMVGc97na7dt6WMg3yv88J6WMX7BMJ5MMLiJjTF7762vyRToT1qVGicYu",
  "key38": "3X4XtSuDNh5zbLwdNc2NsFRCB5irBzbLsC4cAByEQxiNzxVeryJhb9vwjF8w1h6oiY53iFyza4Uf4KTh3b9vwxgA",
  "key39": "65kd3C6gBfWMBZHPfRTGePB3qq5zkeCuperCgak36bPC1KiHF2MXc7XsqmKWgemvCmjX5LvU5Mp6Gs4YartoELSj",
  "key40": "arSZxCx6PBUVP1HKDT25ZGc1TtMGMsdgi35ErSox75XY4SqB4uM53GmTmjMFAzS9DfrjpTMJBMLjtjhKQAY3ya5"
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

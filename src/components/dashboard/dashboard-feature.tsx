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
    "2UrWePENh8onYW9kPiBeZ5AmitL2vvKVkojm6JBk1Vk62DziUeC2KnTESBbAKNNWUhSK136mrKqtWmf7r7zuvMxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N15Qe4rXuusoJFi46EKWjAbHJGfiuf2Lmmt3JFn5R5iWHXNkQptdeYG6vQm9DvQ2FUWyKvTUF3TkShZ8MVGFB8n",
  "key1": "ZGwYDP5kBgRK4dyzxiGamDSRnn4YQuGjcn3bzr2YauZ1BDbZ9LpBLNdcF1dkWcwzBXNP4vTBoBwbMoyVwKPqCic",
  "key2": "4LzeZUJ7a2gKUyTbwfY55NVVoHebY4t7RK6bVRGnALos3cKeXkHmiprPTJrGjJhg6a1f8cJ3x9hiZAAUGAAUk3Wk",
  "key3": "3uFhfd4w4pnbtooVRCTAy7mSEdxvmbcBqpgBh1SZpSWbpNRHANvg9mLUMsdsnEhVoDdEcS4ReZSxj3AFXGv4YYuK",
  "key4": "4CvV63oZafEth4WN7UJ3G4nThoGTBTcbpe6gsXtPgji3XaKmsqv6p52vUUqW4ued3ifG4KJMBu1xziJtoifk6eng",
  "key5": "2Tcv3DoVqUDKUE6WsTaZP87bawN3BKKwXF2CN6o7vkPkAL7nDmPX9XPyd8XUuiNidjSAFjT9MUtrMgjnCYcLMTxQ",
  "key6": "3i9AigoMn2AKyK2vJJy3k9i9d5sYb7RBH3Kzps5uaBw9J5PhnJrcMMZLTpkSqZiC52rLtQqu7tzWZETTsMhHn8qp",
  "key7": "45Gc1CCsyK98BQteSNE3Ur1pSwLZ54YX2FJfHrVDA27WJKRPkxrh53fikCu5vRwsXUAkLKbsGS3MF42tKz8TtuZT",
  "key8": "5G1tse8xQZ9NuFBsMHhqxi8fwG6QPupc1vVQbchwAEP3PzC4gyi3HnBjDcNexxuQxJxNVMV3KmwcKc8XRZXJZBym",
  "key9": "3b77jsAmLVQGjZE92WBJizHEuRacJzEghTTCGfD1VF9tREdLSLmwjTksk6eGXkupN61xmPfVuaKV9wFsEJ3VAPuX",
  "key10": "3Vz6UjCHXk2hRa5Sae6t7dpwTR7LGZutaJmEbEzP48rTJcRLy8P4vhBibSFSNkiNErhfaqCPzSDhowMTazKdosuH",
  "key11": "Si7dtCf3JZcW6KvBsFZR9AD5QgS9HbqrrLxwiVyDvUbszbb8Q31KKk62dJBngadBPnpttgZRbFPdVLiMt5iLDxs",
  "key12": "wSJrzYiuw12FAgsu2S5F4Zta2ppHjGEB5jMZgedLRvVJ72g971v4xNFWtdSWfBM7MnbvJ4UB5MAQNHFVzNwfvSi",
  "key13": "ijynPhLeUTCzu4cP3frQG7VU2Dno2cec6TMomRtpaMG3p4Y8UzZ483MzWgT1Qz5hChPobZ4PZhFFc2vi4Miwqsa",
  "key14": "4szSX9VuzvZj9hJ6j55Nbai8JoS4vFewfJv8v5Gf9CaBhycyGSQ4sYyjWYCC8o8TSqiK5dSMRvdwVzV7nksVXjPP",
  "key15": "5CUMmEKu4BVmdBjmnj2Gy2XL9od3eTS8g2ZPtUVG8njWsk1tdXkbLpQxigEj9M7DRPoAZ6PKGu6AU2obGZE7JMVc",
  "key16": "EmQqqgA9xDQQaDxSwP7i8H27m398kbnhgw7RjP6s5Bsx68zQcWhbaeNMpXr8sPrSc9kefYXgbjNPg9gPifAytMj",
  "key17": "3zcuqhFERG39cNFgoV2ARbCZcuqikc4Lj1iaRfTqLvA1BLcaxMtmDd2oTG82ZaQUziZKpKE1nvfdLpa88ZexgAui",
  "key18": "FWHC3Ze7GqJVj5mtpoaJDQb2aQ9L7jDPfE7GhaFXUA7fTZyq3fSybqeaFRQg1B3GED4oKHx9WZufAR9WYwDpr6D",
  "key19": "5u1HDmHUctLycc6VoXbYQLmETLJCVENJ5P6eeajBxSBTPiacYYYRHUR1KD51AB3k2zZBqs5bVqh3UPwWinaqWViA",
  "key20": "2822Y8pMH5NgiNHdqhzXG8rak7rxKqZGLPu5xaX6zf1HjyKEej8WXPAN1yfb89E8ZVBKtrFbCpzYehpQaUbeV9RX",
  "key21": "5BWQRCysgtyF2WvVn6AR4ss4BMFK3CG7UScYPiR8GFTBAyMGLRqhW454izd8x7wGtMWRkXxpmsPTTKDDFSbKoJXY",
  "key22": "2XgcARkMPyWPDKK4r2jSob3xE1MTNunkpgzENyKpyg8YvRYFHgpfsAhp5bJQofprxHWWr9gH9i5oS8WFzaFGmoRP",
  "key23": "5aKfH1mS7SgweBi5Yai3FC9VKeBGujJDqyanLUdN1QmwyYgeLbxon8GjM7S7aoh9gg3uZLjicSAwnYGiYRy1WnDy",
  "key24": "61Cu5yEHvGJ6Pi9FfRvzCPxXgFDCCXLSXHywy22LtQmYGB3hVdwc3WTawDRLpZJGHvSoGsj9rqrXQDYCpAs7hudJ",
  "key25": "fgzQdoWBpxxALLCwpR9kjAMoTG4xUuJRw5jQd5qrrfmJA6d1wxyXFfuY2EgRE94N6AH7sGq6QLRaj6fRv79L4YZ",
  "key26": "jHjjPJPr4f16GLhzBLfrarJxNP8s947JJi7arbT8vzaZkSnqC8d8GMjxykhP1m7Fqqh6ir2v1inJ3YWccXJnN6S",
  "key27": "22rChGHb3iGPCFRtQnrFziZ2fXnkQv7CPpnw5E4FsNWxKpqtNLwBvnDK7FWgH41eJxRianeD88EkkYqbzAtvpmLM",
  "key28": "4A3KsCAECZBLsN187p7G25yiLPSSBhA9gZm4tvuPNv2iNMsxnuR3LeF3oLD2FtjoN7QC3UrnhjN4KgtiecgDY1HX",
  "key29": "4SAfXT3pMHvGQaxPtxVMf43Hc2jCU2s8yzdpMpc31ZSdrQUJiK5ms7FXqzC1Pi9oWKLro3qJdSMtQZgJhmSTvtTB",
  "key30": "m8tZcqGzq8Ch8rUiutYR66Hv6PYgpxG1SSWBZywfmmeaH5F1AMk15VGuu6ioeC77dJKYNAn5nLxbNwHUcwtVZkH",
  "key31": "fXoHUSPZSDvjTzExehVhtNdctsWy9RwbVo8ND7Ffkp5h1AMBZrfAfHsqE9LPfZh3XuUe4XnkzfySEr5adN6HbiC",
  "key32": "3yUdGfyKGE5z2VgpCqQTnnbi1gAhQij3tpi9qvZ9AVzxuMKYpJXLHTYuenp61ih7BG942awN8Lr4xNU3ihnX6B6o",
  "key33": "2CiwK3mwiXaSL5iMWLLhgPdFnMRSmf3E9W1ak4anv3ZXom8egisXKmxjizY91z3uWK9owGj1qwGfpPMAJTWBjpd",
  "key34": "W17YoqvoNTtGRnqtmvhgwAWwx5TwVqJMXD6XnDi2f83wcYAHtjWJXYB82XGvYNCqhVVDX9KLWLhx4MWHzubNiev",
  "key35": "AgZUtWZ727GHEsVEThGNo8M4RwzBRUXgYocQEYcCjtCiD9iohGgXbnR7PX2tyrxsSDxpFyFHpDYAuUeQapyquMe",
  "key36": "3yudZRZEKRMwgBaRddY3kR45HoLXXrcfGN5rzJwe3b3gXvP8xgJ5z6MiumpLrFqqoB9tGJq6yPaCVkCPmTai3P3U",
  "key37": "2eNk2hqgbxQpS1ucCLoiCjvQ34sLeTs7PPCmAuEE3bMkCdthMTuoPQoihbGkFBBNg8hHdGTACFfVWtXGUwzmkAFX",
  "key38": "2SQ5AL2DPi652dGpy1mYCvZLjVWYLVoWyGpzEU6cMhsMitTPXVRHe5UZu4BKuRfY9sMf8XdbcSdp5yWwKWfhfYM5",
  "key39": "2bDRhh3DdZeQ498g67CSbNoriyFUnY3MyBsHgvVy81jiPf7vPQuhBEAsWzcQycyNizivY4CzBGgFNJigXnYW8fK3",
  "key40": "3SrJYorfbgnRDXgWFKRgoRerqNZie7UNFPXb6aJAg9n9H8F8dc8MGbNeQT6BVH5DGXCpN3GVmkAsfcZyLZvHtX6t",
  "key41": "5eW1etQYnM9LRRc9jddXUqetV6RpgJVswhh1EPJLx2rs7unpeLF2NZnSzySiUNKeGFAcEc67oz4UHTS8ax6tPDUH",
  "key42": "TRydRx87ZQkaegqmWB5fJZAwtn1Bj5ra1ZatdS5tFrzpK9ayabVJU3WFU274u5qLmUA3rmCqwC9FvuEE6q1BJmw",
  "key43": "4mb8gKReAVxy3MNDdkVAhYn33gJA8kiXc9S8cN1mbk9cpitm4wx5MrefLdhbeLy9pDvqGBRutewad7YBAJkBsSkT",
  "key44": "Et3gvu9hbMqt531SY4YesRFB5pwYbZNiRsdNn8CY1ifuQfmRdV4C5Qn5phwAXqSu6EJwzguBhRvnUWiwGzdLxRE",
  "key45": "2qNmDbvaksXTbbYGvfpneTEjdCuadaTPzB7xtSzWQusM9rUiGBxxmJo1a9ZdWRNAnUgF48q8DEeqGPjxVKysjqwL",
  "key46": "62xFP4d6nxPDHTb1otMbmK5L2NyWuj76CDm3DffU7YFYsCwX5nqDAADos4vKbVTp1s4wbTiTx1QhbEVM7VKKUHwk",
  "key47": "2ok4FfJ1USZMgCjCCvcrJX7GPPnBPkFcJydwEuUvpuDM3QQanZCQ1iNkhzfUkEMhFXBz3MmuvgVzSyogZjbQGuQ4",
  "key48": "2WTK7bcMF4pWjB7DBVJyWRia9eUsWjNDFgZrs8iZPN9MtFB9S6a4vcTFwdZ8uGcMvhE7PzutDKg9HL7SA8rB7bHw",
  "key49": "2wU3Gxwg8mjC8eJgpEcRLA93GNtfcUu1GMnnkjweXSodu8JBnrJWDzwWgeWKxTaSCU6QhacpmUh1hdp4NyzQmzoV"
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

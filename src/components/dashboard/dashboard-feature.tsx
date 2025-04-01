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
    "4PzsTjVZy9ac5AgkFyzfL9dYK4zrot4fyNkGTpyXCS3oHxJe8d1HE9YjgQwd8tNnsvGbcxjvub1ngpK1N8JCApko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o48BW86ThwxH4cepnbyRhrdr1pFSXqDucmGUXGwVfCy9VrP264Vajc8qQDXTmsnDF7XisN2wFKsyXzec9AnxTTR",
  "key1": "5wJEtMc6Q62YaKsbgNvxxiAAJrYK9eGgJmpsxmLoGQA56znDhvmAYqo1rsuXKVBJa45Gj4hERqQQqyyBxfBSroUk",
  "key2": "4pVk14PvB5LdUZayonfDgRMWryCRibu5DCvyxscCqJEs8UjWwRHxkS1HL3d35r9ieXiBunY8iFNUMJcDYujpuqdr",
  "key3": "5cu5WbEbsmoPCnCJJD8gUU6JZv3vnReDZZEZ7vBTdUPQ8Gy1PoWsyuG47Wdv3NnaU1JCHqWv2AW4W3NVgZVPMgun",
  "key4": "2GzHmMfXSwrNn8P6a7q2qZVnkGydP7zzEPrnJCfuzAf11NUtcHeFixnCfbKRmLVaztWJ2JzqV1cAir2LgVLnknqH",
  "key5": "4swnb7dx2cnWZsvMSWs5s9hpZN1nuowpBTVeM66Y96BugdwXrBwBErvp4X1xtQQkUTCM137rvLRtoyWxgByp84SB",
  "key6": "5SFYCFpVyrmX8JirPGAYp4bqPzDXYaPt7YiFyqqyw8SqWdwHibqZ73gsYMfN3hGnLLXcDK1So3sa8tFPkYBbB44T",
  "key7": "192kcLVzZffyuwUQh8EoxSfUeycFtP4X6NLp3gkrg3ZSotNfe4ivS7T7jXkLmCMHDLefyyFY5aBAKwpqyZowwus",
  "key8": "39q3eaj1f3pQ2zVSJz1Q5zn5NP9wbNG7Tq9beqUb43TioDVSnUKG2zByocoGeybt5dCDsMuS91vKY16VGaFFYgJs",
  "key9": "3Puf1K4xbZSiPh24gmk4nc3AnWYVLkXHxZ9mcnaarDY9aX6sVcfMC2FdCuwbcQc9oGEsL8VKaGqeh4WFceoLAxJq",
  "key10": "4zsRfiPmvCAQvR9YuPzWn3JJMKkayuy9eBPTnmLTQqoSQ2khB5Wk7ehPP3JGnXinTScWAJsbYSkYPRYEfG7NarJF",
  "key11": "HDzbgTM2nU2wX6Jwy8UFK97iASgG6tEWrNaPaFwY6cWZrJpdZQ5TVooTsSDeqEN8kJwFqqH57NHHeefzB6yv5qT",
  "key12": "5tdqbyqemfbVt5pBKehYJvW7QAgc5XXdYbpFGCubWP6HVjiavaKaiKcBmeTS3rfmFa8L169K3ssA1gA5s8A4Sxhh",
  "key13": "3U9kAkYLKB1jdYRovDog1dM4LJJApduRFfxZD7c8VwKe5DcQGRyJ5S9nfvS5wrg6sJ9jNMi8xx7sttHdSGZbX2Du",
  "key14": "p1LegQcjHsTobkEhsVpuL1pHgCDRPayEpzSfvmZ6QJAwBESrZFV7D6gupwat8oQZGLdVev1JgxX78Ywwg3NfVJ7",
  "key15": "CvgJi7Bf4SVvpqJhr664i8FJC3hHngYv9zTYEB7whH6nWZvr1zPAbBdGFmGGGqH8hE5akjmf1fPvMHZToeizAGA",
  "key16": "4TVZHMBT2hjR8sXg6zHvMhQ4hPQyfoZcGUGcxbyTn3a3yM1d7M3zX2ruu7AN3oAnnaDstUBeukdbSaVQGmqtKAGP",
  "key17": "3NBez2PwHGYSjA2XDuJ7D6GZszLWfHsquPjbUTjQf6yLT1ZXDAAdv5Jth2vxSB3bdqoqtjAvwFs86cfB8XEFM66R",
  "key18": "Cd73fxGZyiZxthejGeycsNYHKrg5NSSdSYdXykxUrKz2HPzjDUf9TaogqePVSMyqSNdvW1SRANYwbwcJ4RwY5CS",
  "key19": "2rBeuE7fobFHHSp2iF4fLSUMeiuQ567aNopPhqPCHUMna8jqCeakCSX8wP9U9uyyJV6NhUZkxR3ZCf2Q6SfFJnih",
  "key20": "vck28vU9jpBWBsNWGgFtto9q2mUNF5MMGnvHime2y5Gtfprx3tEfRFR8nbcnwdbttTpAc8c2Btx4iPFKqb2u9j5",
  "key21": "23ebQREy1P9Xm4PfsmgLuAjo5GE1gDuqb2iDViqQnMpa3xy2VASDm4yH6ZriBtc78xV7SUDVGnKiMVAGDs3YRxPG",
  "key22": "2eCpADziHjuA4q8pq8V8gyvLphympNuV3aHVbYTMpcFpSQtdR9P5BAqMsdJunbTFM7WdUfb3PQbahmctP8MyTaCr",
  "key23": "4wzd3b1zuLGgm2BLtePbtsJY7rypTe9GaHwvmfQ3vYmZiUVhxiNz1hbrnbgtKZ1jpRELDt7vzLffjnCEKFWKfCwG",
  "key24": "5dwgrrSscTgnFMg5u3zNhnjvvmtvLAf8y4L1VhmNJTxXcd7qBRTrwGii9o76XcF8uFBvVPc3YkSCaA7JJTuaSQ1N",
  "key25": "4RtFaasmxmVTjp9gNWZXAFzYMi66o1soisGXrjbZxBAxnee7Wp3te32phMGnGaMGZawBLKZghHsVPF5DSh1V82b",
  "key26": "5H9nVQ6iG4vm4JFmgjcxpaiG7q7KUM9S3u8kof7yNG5P1eWLpRLMsBzLnNfCQY1UqzxDZ7413qKBa1o2CCxrD1hh",
  "key27": "5XAa3imZ55Z1CqHjznouiaLioAQwnfEYXW2hw3CszrABZ3AN2U1K2qM3yPyT5z6Jb9UHtyB8UchW6WrVaY5rGQL1",
  "key28": "3c9h5FxphkUTdR99mwjG9Sv7JjLvd932hV8J2TboMJ3Vrpt95RuDQ5LTHcgqr5Uxk5VGHzLL7bpZnSgyGYW2qoCX",
  "key29": "pEFKgRwGovohFttfxGQjFLuAb2EmeDuHZb6hovDHXHxoYJ7T6ZVXwh9VXYnAmj6VeTefGvGTuBWv9EREoazBRDa",
  "key30": "674dDe8pbiuUx6AFSPK9f453sjBKVfarjkvSGBiAm9Vv24GCwDLhNL9gLGg6dcb9dYZz7Jinu1t1HMouadrqCnBy",
  "key31": "W2SqsD9CEo2FXDrNvuzvZ5mkQY9NxL6ibhTAHeGy13TRCvJjY3iYNbrvPCPK7YAJvBmdJUsXKG3U2oG8Vmdri5m",
  "key32": "5Q5opBqaT4S8XW4wkZfJtPpzUzxBsQQeUdCmUXigCzeTHhQjFtC6MoKnQowouMxXQr3SoGkjnFNPcuhMLTFfzc1q",
  "key33": "2hTkEpu53pSgUgmo7JkaeEzpBD6yiVCRd9FFhV5zYMKSMCwSxunqPd1wFtFJ9kqFCP2mx7GvpK3FHK1akXWGjvLm",
  "key34": "3N4ZuFLqDjkgtdrsSGqfvZiBYsXCRwUoyS2RLhdGoqoUakMw6mWmBEq5jjYPoJMRUaGBNfkWpmCz7DuSAjDmzJqK",
  "key35": "2NaHCUFw8sx7ifR6gVnTLMDssPs9BjsroX2hoLymdUJXBNmyEjjPshVG2h4Vzw89u236uckcPGWVUK43xiJnUUP9",
  "key36": "ZPxyA6aKr27b1T7Usb3hiFToHDmJvcXKmbREzMQgHv3iKUY8QAtaDhgSbkbBvc3CWBjrrKmc1E4GqMDo8SL2ZPH",
  "key37": "62nugd3tw94P43bNyA2fX8xEYueSkhtSNvyoa4ofiAFgSGQb74Q4P5J3sCJKHjcqQL8xqG4eUj82zjeRVS3tmnvU",
  "key38": "4j471hr5D9qbWXSdfLSvFJ3cMfWzMJ53FXm81bckDXxdqvghz9RoYC17byvZNcXhPgSy4y9g2h7gCt5UmfVBZBNw",
  "key39": "49upokBtqHNUwT8JFfokCCBgknejQXonNQ527sg4QpCCeH86B8jgmkwzCgeVnkoNmGBWWcuoXb5UnDLzJDKQap3R",
  "key40": "2SssXQsrgU54WM8g8QqDdQbzp6bzzyo96HtcfCHCY8FBU4Tg4P5GPNFjEKdDNY9VpRfPBMqpqmnugfaBF85MAh49",
  "key41": "3dsQcKhB9wHBgFXNHMN4w5BRuorLWRu5ZEPsP7V95EdsJKUuothbjhx4dyvQbvLmMjmnya58JwYmhPujfTFyxPdb",
  "key42": "1CVcy6VMDdkPEoHqVR4k4UFyq9DxwvMmnnoBUuLioqvmxa2gfUsWxAyy7jaFKHi6LxywgYwGU7ekuc4Bf3C4Xis",
  "key43": "RxRy4FUpd2NGRLrKHsGbMrg7SRZMprLiwN9nr9gRxUFSLxigS98tbFfN28PWoQnWokGMHCzbM6jEJrfsWHqNigT",
  "key44": "5RKdEAJS3Lp5jvW2jQQQp2CP39pqGGK66RAuc9cPL8vycFUSWGzZjqH1NNMZ5gCfZEPGQbcXMC8Zjshn4ZzjqZMM",
  "key45": "2VRdvmje4Nw5J2N3VyPNtcDbR2rqHBtYQBJmhNZSJotzTDed9YF8SwvxsiFrV8Kfq1Cc7qghBsdXJz6EWNu6WkBT",
  "key46": "29r6yeruDPr1BGkSKPD6CDTmm6Cffi9WojgFMLXJY8eX66VdWX1Y7ctTuwPjfwTBRLFiBznGNuJkvCHiyijsozz7",
  "key47": "2SrdbVod57Mz5E7SNXjobCbfnWzi9RN1Y6591JRNSuHFVTWmJUWY2RoX8THb5PgU1nVN7AymN6LQS1u8nm7ShrcM",
  "key48": "3RjZ6tk8odpWfXHB1C2U3iTKPAecS7iyF9NmduHzjHhsgsNCkkQ1RkVhiSZdGeHj1tFXNAFqYNWRm9MdZbMLDyue",
  "key49": "2e5WdHC6ZFNjdSNRjeBt6bow5LULGGc22yNpb9MpJuJHrcjicxrKGKwNmACXpn1LWbPDY6t8YvVWTwBdULdxnR9z"
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

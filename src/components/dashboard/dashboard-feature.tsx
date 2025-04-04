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
    "4FRGuL2bczamiGMs7RawD5PixAWnv1c4jX3zdVVPwPCsq2RKA4GAHcKCRDvzrj39k1a4K7Jh3QZEryufVZjEzNNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f7eJgqn1M1yMcHSLnm1mSHeaxmfweAFfRbzostFdzR5daSDJ622ReFWmpoBz8pPG4k4LFTr1qSiKqTqH1UTx8GY",
  "key1": "45YSiuu5E3iFZEwGvMSZ5K13sFrTpSj2zw1hd3WhF7zKibEdaym4Wp32sQ95rXhYhyn4EDpdtwib4z1dpgSgmXkS",
  "key2": "3aeTq2XJnXRxKbGgXMP7VrcXU2DZ76JcW1T52anVEb2N2NymgdKJG1YkMw6tfEGqvthnPZTEzDXhkrW48Sw2Vxpy",
  "key3": "3VGMnYeUGqNWRfratwFFF4vbUTapbXNmWRam1EpAC2VuWiPeGfqL6ZB7s2cAFg7PaZACo4WYZzZxx8K4CpbnTdEZ",
  "key4": "4ejnajT3ZmX5GrzvU72rA2WzMA4Rkc79PUhomVESwsimanjNZNQG9oqKZC8VyBtFDcksan97Sbf95efmCv7JpPVj",
  "key5": "3XmBPo7yeTTk2YVJqNnHVoMpPwa2fPSYtsXYMkoLj25BAn2daQSrHHTPkfPARaBvieN2peMBZfYzFJcLyC6teyYf",
  "key6": "QghGvzZPXKtDVpi24DmTSH2gJNBpUMYoVxtKsKWAj5dwj6Kk8vNeBbRsgzRUcbhrgLUN14G2XYHkSbt2NpuHzp7",
  "key7": "5XNdxgqNpqYzRnvAQBh1F5qMptmws2XTkF8sGZo3m4YwLiB2QT2kNMTeg6EFtZ9vEbaE62FkuuJKpJMU1diMGrir",
  "key8": "3fJCvkTdMC4cYKdDguw7rtBE87povN2rBqD1riXVgbuQmyMWZ1A2DYLEhz9nLJLTEnAiZBTbbVnhPMzysXAb1E2o",
  "key9": "iZstNxViBPhNckKM5SvAqKaBwcxrEVGu8gvpjvQS6pK4JHHHFmTaWgnvZut2KC479DRSFnYFDH1YfQKEdussrzB",
  "key10": "2Q83TNphj9LNWRu3b24cypNn8G3P64uNcLnaCuwYqv5QYKki6zA9ei6JV2EGBnZqzZtD13ehaxxEinG2izakKCDA",
  "key11": "3u323JkyfuXeXJRytarEAYvkVDrmRHJ4pir19bPUsUgCKyyEYzdxcMcyH95XWiw1awFvbFZzkPa17iodadCP6SPU",
  "key12": "2dAMAKGs1p7oU2Bu2wWp5yLWRbpWD4R1MMu559zpSd2jFNxdizvPg3KcJivcUZAsm19q2zPpudSErZ68ofwMSgh2",
  "key13": "2EiKRawJ3muPXTPEUUsz4UVzrYDKL31ehyrS3osX8Wk79HbvP6v83KTkRqppUCrVEZohSvUqmWF5RvBzjT1jC8U7",
  "key14": "3yhWstPeTfa4ah7sHpMmdaWZDBtPpwfMsEXSh6giM9vbYhdyp7Yh6bLFdYoFqbC7VKp2bomF87ayMvBZRDxi3qee",
  "key15": "gCsb2K9beovVGiGgz5ycdBrBfVbJAyq1S8NiPgSfiQcXQTTGyddU7tsQScA3HjNZY8eqG9hHyin13NrjGUAqhSA",
  "key16": "5r3ZV9abyxe7QJKH5cHuQVX6gGRkzVgMgQS4VzVnUixmMaiAB9R6gVPhwT9h3GMhgTnTE5MqnTSnL66to9e89vXe",
  "key17": "3mEpWnXkZAcgt1XB7rcbyMKLEKWth3RCq8tbQXxjhrweUeQP4nUy7FALersYNFMp9nCDJ4GNAbA2oTq6Ync4dbL2",
  "key18": "4hLtR93qpK7G2fmJmdFxcAMQNYVXYmP4d35DRK8Vg9Moa2R1MCmHfMQVQ8qSQBaRkNaT3mVGDMfRVs5UoqHEtuQy",
  "key19": "siYRyc6y7ocRJtnxTgW83RM1NKp4NZhjyQ9128eNT4fVL1VrGVA3Jmow1Tuaxjw2bKzs4arxMWtNuDso5HgbPRu",
  "key20": "V3rAvskgidTDiA5mKz9kx1cjbQGe8zd6UMS4hvAJofWS2t9j7aBvmotXb7iVAtjQXxkexRJT79Nc6prbEGK16Bt",
  "key21": "3JQciB4wSfT6Mo6KVVp4yMK8H8L43hghxt1tLb2LKQiiXTgYNvCZfPJjMqpKX3S2mHmaPy1H2Rdjg4YZr59scnb1",
  "key22": "3wUhrPBJmax8i5xKgEyqmNdaZSbTZJAPqk3YV8PNmgTMtKv9dKccbLY7ywX87qe9VZ7Ax1WSo7r6n2pBTWqjt5Gw",
  "key23": "rr3XmWbp7wrSobAw4rhYpUbCZSqJax4HvxPMviNJYco2XSn3gRaanXH7vMiJKuBqZWZazHvtgtgfkxHN6sJ6NMV",
  "key24": "35NxJ79C9oo9nwgWbrbqHcZ6FfmyEqUASPQsbiJqUm5hVnVLP2jamg68n46e2ydE4tLVixm453hk2HNwHcQ4prbz",
  "key25": "vJCJhjJszgiWpYoRDNeUNnyLkofG3vupBbePuyvQ6pJmqh3ySxnyrpnFzg2ec9Fgd3iNpw4HdSukuEbbFtfEHzB",
  "key26": "29h9vdA9UD6mhT8xbkG5nr1yr8ycLBBSSNnhnNSxKxz8a77supT181UaaZG4HJwgiovhP7cwwL6kynGyFxRyCi3C",
  "key27": "4JJx3DUPACBVyWcaFU7k1E9DhbVQgjuHzVM8bGnVVonwu3buz8QNwroYjR26sVDpvCyzofsVjV26WWLpM5G2REBN",
  "key28": "43E9W9ougToXCSojPA3Dorgjau6nnnjtRkgfB12iqj3AM4DShbxpseFezxVXdqEd8MW8ofQ34gbqGY2UJGcopAY1",
  "key29": "deyBkvdLuWj34kJ6nyK5JyDSpwHEBywPXwGKkk5c1UBs1vws2mT8u27CaH2uvFfJW2HU8j6hVQEnNJbNMZWCMFS",
  "key30": "2LuTq5HXKn3f6uxUT5aLtHjD7bpakXghNUbSFrUSreR9P1AuoBsZX27HWRCBBCFbT65rvYh8jXjZoYvjNboEc4nK",
  "key31": "cKz6af3RuW3dG9vwGKhwGZUfBkXNXrHid31TkhqiuvRCL6y8RSCFVem8ovRXY8cTv3ia7DGBhmmFgHpEgAwBhsf",
  "key32": "4924otokUa7r2Vm4dz4WqEfs5BUgxGsWNX3aoCVbpyrGHrNoA1sxwxzdeP8TJ2cPyYy3h8f9zEwYBT5cEPTLTCwY",
  "key33": "5WReAT99xT9QrrNWkRXjmCdk7WfBbSkpQxbdSAgopmVsUhFRN6CtAdvnSFDR2V3c7zZpAsCrLurk9212dp8h5fvK",
  "key34": "2Z6vwwJZmWfc3zvTWYC69358dvnBAGmMccGN87YhwLT2JNzqVatyBdzsNuT9MEbRK5fyro6sA65S2hd7LH2BLYem",
  "key35": "3AhLr4qFeKaBT2gN9HFCHsvWiZ1bZUsWwg3X9MTvaoN2N8iPy3ujTWCUzuv9Ciw21E8WmcFMjLnbQwGYeB2Rercw",
  "key36": "4JomwkeBwTXvT3U5E4eDK3P8yFut9xdCYeZqbCYPS5wcBEGt1zwsUrARqK4Rw7jhMUSPt9BiMURyG6AxdHnw1N1",
  "key37": "4NE1NmkC7yW5UsGhLoi9LdP62opERpw61qvnyagmhTjUNvsrMqCVR5S7rNp3WxqAzid8L9yccDA9W1fKak4xQbbE",
  "key38": "5aGoqa9EQrRH2yASUDkPiYpz7UdLfwfXsod7S56WnCCXwnccWq7RtcAyzNNBhQk7VenMo76DW8WEA2amfGkNLuN",
  "key39": "eeA4fJ1idriwp4JiwEusaPPM5d9QUk7DSv2HYU3nysBdZp3dPEWGDasQ8bExWu1iKAkjWQevCJ2p81PrmNdHEgs",
  "key40": "33ThDh8sXYCpjBxXF4cdpdmHfmcMfzRBfuzSSwVuGLT8RBofi6PAVKwKD2LqoiQXaiG7U3QX6pcDxwrya96saZ2W",
  "key41": "2Dwycf3ggigM4nch1ui2AerdEZrP5JThKVrWP9TxfF5HWET5wQnB8PCRvaCRASQf4Pekg68naiGDL6g5iYNEJrSb",
  "key42": "52dDCCCNiwksatXGaJvuNwptxyjDG7c4pq1jZA5diMkajtkxsjSfTYe3mdrQJGkBrWXPHd3DUnPoyV9LaWof1Hni",
  "key43": "3RXWKGirEcoxFZ6bFeUfN3kihkMHXegfVUZE4Gx9mgiNSmq4tAkyrVsH1b2G55QAbiMxH4eE47gfwRUjmxw8DEKh",
  "key44": "3fwmV6coynTQJy5uuByeVM7eUfMmQFMQzJTfnecsHykEFgMxr76BbN76Yoqoo9Xx8QuKvRmuyNRuxfFKeHYuvUwr",
  "key45": "twKEA95sKqHQm2RdPggUUbKr5NC2uDFftjziT3dRKSDQFgR8XNZ56v9rqUDNcqxJQ6P6Xp3CKRqKMPBTnE6JE7S",
  "key46": "34rkk4B37CDQN4q4Z9xqHbkkf5YsTyVVKYxgfRB8PRoVr478GwuNYJTuSCnnmHiBEbXo4fcWkca6P8QfJM5GH7NJ",
  "key47": "5pr7Dijt7trHW2HbV6C1va4JA48beH7Sqhg8Pi2kTtYs1dNH34u27NPvWnjuLNh1qzEvsR8oz3iwTWeFRM1Wxiqk",
  "key48": "Yabtab1WDfkWoZr5x8cwTZyMkjBCAhfmukAUKVpdW3V2MDufnBBN49xyDZiP1qsXrKJxd7RR9Qwg4qGk3CCwSFg"
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

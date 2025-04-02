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
    "4iFtRTSGfrWsLsZQj2yDduT5LhTNQRmT59FjWQTKACruDyGrz23K2KwDEWqDmk9t4AdBthq1cfs7mL9eUn6zkUsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9aAMMWuvKPoCmNERv8kU8KGw6XojKD19eMgcTBmiVtCokY8PBsH1XR4WqsXNRet4dASCmAaHbGW7QeV4F3Q7FCZ",
  "key1": "5x1FTQBJvcpr3uzQxNvku6VTbajtzz5QHYiNu37XNeQDawoi1qmSUjeRh2Qy2xHU8gXmafhd5EXKKZShnJx54cnU",
  "key2": "2XuibNSoD4b8KNbRcerv65FsLdoMm7ELTdtMqipoDbKD5D2f1QqL69DJyoCw1RschP75zAKpncpgRT2vLKkBrAq2",
  "key3": "R4R3d6rmjnzkgSgVJQJ8LcckHKhpmUeoxfFG9GDf4E5T3VEohBCoypr4Dp4vx4KFJQAb2N7dZPAvoRvEovuXR65",
  "key4": "7Lp9Li6xVbEHVFfosQ5AJ2Rb99urtiWNsmiAtZipmNGtwr62ohYamG2bi5oJmn8jFnon8yjHV2uF6CwsmHZR2Fv",
  "key5": "3vnx1AgtSyH7UyCJmimVodKBg8MgcFHAC7cRHSsikzbWyypuDtEQgTYwY8zEgKPpHaJ4xUNQQcnTA6qeXJtcUrSy",
  "key6": "5BZAWWBdfVrqtuC1cXEv1BjMSjy7gnkJmHkpB67WSxRcASh7b7YkF6nHWcnWsbVHkBFFSCnvG7a4wuTrGdyhxrF5",
  "key7": "5q9Uz6EZPkR5APyk6UtKh7ZYZ4quKp3huNFd5LiJGeH37LsaWWxYpqNd9NVRYvSiBiiyxFLLX33ZuixKpAp3DeMm",
  "key8": "4mLn8kg8UAqXxo3sPgmCGgogVa3F1Dh7wTMVPf8VWea93X6uGTp6XXXaryF7cpzD73rRQpqoi9PtxkFmRqSytP8m",
  "key9": "2SemA62JYoFVwzG2exEWmsQDrDRfpmMGoWz4MATsArLK8Vrb5jo2GWTopWUqDkhuMixmb8bZrrVRpFdirH7yDDXj",
  "key10": "2cncSgooTSFMiwqRJSzXswEYu6KGtWHeJ7TRc5in1pxcsEGcL2dAJtBKXpHxvj1LQR9aeBFvLcdHvQWiZ1oyVbnh",
  "key11": "khWiNqHURBX4kwkdofVfR67MThmx9s6fAzSb7zY2iXCgGSSaN94L8ucyA3VaknS2yoXEVo1MMVc6Fv864AZX7JQ",
  "key12": "61ppYnq9Nsh6x86r2W6hg9YqLnzm6ARB9joHnnePjGCYcWE44EU9BtAjC3kCioob2YE41Kz5enbUuPYwCSNW3T9g",
  "key13": "51Dp6k4K2J6rDahxQR571jmFP9WJTVtRVe2H3uTDXNET38ocXqMYs5UViJpGfsuqd6vGkNfxeqd5He9VpXyZoBYw",
  "key14": "46kXsBoTrbKXur65ZpW1wGHAqX5NrkLAfUm4RVf6cyejzkc2iJsVUnXv9CdGqQtFuoPvMWParycA3Wiu5weU1w3N",
  "key15": "3X2rTuoWUT8pQU7yZbvD7GvUemK22DmSaQpscZuvMuqcTyrbQAASVc3tcSras1ngh4i4YDq8sSwgFa9avHqMPGan",
  "key16": "4pK8sEr9BW7hprnZkzHvAK8PtrWo6t755mGtDGdSQp1trCSoTYyhwiKZTGczk3s74HnFiKBxbXhoU4u7LVsjam47",
  "key17": "55DGeqSsnRViwvhusnwYR1yRgs36mRibe1Zf4SoBVyBfGJc5y5zwmBJsEkkhoHRFhi72ZrpApwuxV7AzWGV3kmmo",
  "key18": "3v7f3YYBhHVjTf9YzTXnF7v8y6KC4TK9s9HAgD9BJjJWu3WoBbNYCmCiBtdfnzTTRYHfGCphumLg5VkfXDYKV1Jc",
  "key19": "2QwXEjAWbiy9YhTwB5tvjuTzzEiGffusZc743MMY3gQiymXPLZbkWTq4XkUz1eYWh65KvEBhA3CUGZ7MMxVoq9Hm",
  "key20": "2AaToUjAHZEap7E565nxEnVmWUrmFkGgpmjArff9PpazH6udmYUuPTpHSVxFEwLw4K1M4YoxJEf2egWpt3C7JYNG",
  "key21": "2y4Jr3cRzdA2tCeiqewRkcV3472uqa5Vxci22HgqzLCRJB6T6JBfSmYKhYhPSdQuXSNia3HBCtJb85VMQr9oRC7z",
  "key22": "3zyzot8rSJjUwsCcWihuB55uyEPMGJQqhhn3mBYa951H5K7yNLSSc7duVHCvNQJssxtM7cfyabvWTpokfxk4S2HP",
  "key23": "5mPcL6Zv8njhjSkFvYmnCoeYBuS24iK9Njdtyu1XthMddBpCWtCxLjnRyzGPeDrbxjDzfURjEEGTP5WQXpGWtJa5",
  "key24": "49M1z3RUhvLQMbgPsYNvXZhCg9VpjDUUHGf8d6hyje1rkQEx82yP1jNV7U99gjnsMPmgDNg1iaV7aFmL9FcsdADA",
  "key25": "36eKeQcVqA7kSRed1t4JVuaJcRqzJoti5u1h8VJw64LDewK798teueeTSg9yot9yikvsTgcafPqHf1tK5txAEr86",
  "key26": "21728nFXDAMeqv7Y3aCpcBbjrdNXnpbDwzoXH3Yvf298ryZGdY4dDtToeuhQJNCD8CLGiWkPRM7CVyXPjTRPN4No",
  "key27": "2TBeRn9YxN1My2hxSAU7aSw8pZZZHN8Ni4hEexpdPNAV5K1WuCou4yoP6pnhdQTyskzHwieg2mEzWUH6MgTaTQVx",
  "key28": "3NRp29PVrkmRZEMTak3862dtqTjtNPAwqGnc4pyicWdrM6wkPvXDQMgf5eC64Mb31GE8kJJ7MXntm5donEu2YHqF",
  "key29": "67giBWSLdcJHyYRc4BY9fZkktmakS1Yt2CDLCSq9nANqWH1RdPUdHwKmKw6xMazMteQbPSRWEx5pdyt8PaHxVcHy",
  "key30": "H2Za8BGg9rSCmZceMXFgfrXmEG4yLAy1YsQ7qpdDd5Z8xi1M78JKU6fXRyBgiFahybEzYXn7iBt9rDfGjFPHfVY"
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

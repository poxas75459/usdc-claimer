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
    "oiFdduEnisPTuDm7q2vZAfXjh7einwoTA7H4vZS7CRffKivEXDs1NbQ97QmmD1GwNL2oH6xfUtuUvy7GHFGMEVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DccHBWT6GgGJ5vEmTqkLeiaKwStTfx3xNw3uQHbA48ekTaK2qC6FUMNbS8yH7bf5FQqks6CvwFGHkbiy6XKNEpY",
  "key1": "33EuGNFFEAAs1Do3wHKAENhuo25YsHw5eNhWWjLfoqM5uXU1x6cgYr9VVXRuT6z4BkbGYE9ZdKvyXVzRKibNg6Nh",
  "key2": "2oocsWpFC5dqZai7cS8hDoF1wbPbGpxq6UFTtQ99MAPYWbVGkNrB5DGXYF2KXBQ6Bb2wdTZMwL7YRkxg6QahrxDf",
  "key3": "5LhhkxaAV9ErEBr6pxQbibNTna6dyFKo46u5dAA9jpayFyzNTLpYGW1aCivVaHV2wonSyJswsJRtNwys56zzgXTJ",
  "key4": "5kCVwGffXdWBXei2VXZ69neDPn9EphofpHypKAL5qW4D1pKhmFNjRgD8jYzWLKf9ZEsU8F28BjBbzniaJTaC9VNe",
  "key5": "uMAcRjPP7FTG1Ky5WQ3BGx6WXtjVKXdWGmZniEMS9G53TdgAPri7L8DpqrbkEvR443wnvJvW5TAJ4gjV6E4cheB",
  "key6": "4YifW1LPiPV14uxe7cjPwhwcGrHBq6AmoVzJK3pbKxXya9fLhgnNNw54QvUeHfYdNxcm6Yx73kMeGq2B5jnBr9vh",
  "key7": "kv1Mv5LQrVviTp4uwUURMRQSrqjcJ3FHMfv3AHRRiyjubke2MFrVYDnvfsjF1L7VgmrJvuDja4aVkf1jDoXNMas",
  "key8": "2ajyGVzPdDPPfYdH5VPX3RE8P566LntbN9QrGxHMQA32BTjxnjGZEzMxNfncYoqj9zMbRVqWWCxwzkgeZTosPZtY",
  "key9": "49EHHKDWDRKJVct1aZ2kXD5J4gxPveNBfmXDtWWCcGVxGZ8Nr5c3GmiFSvbss4q8RLMjVeSreqyTmFT1i1Cog95s",
  "key10": "5PY1RoXj6V21Agn8F9BcENEMSGWfw3ZMJ94PnqsNVgmyy13d6buDVZgyiA26HvHF5NBjckoxd7NHxTm4UNWmaJ5n",
  "key11": "jDGuwnFRwCv4cnRDY3HjRduaUFFMeZ82kbX9GJ8eVw4WUxWJyvi5wPXEfH8BZMQ3QokQXUBVLUr4GCKe1ykZAYb",
  "key12": "4wT4Ls8MKQTACoKvuBrXW197ju88ChcUo3wLoHqU3jRPcpQz4WE8d4XZmCgTZ8AQ29yMpGyns1QSQsSu4Jcuy7Lr",
  "key13": "3QcvZv1a4XaCRRDqP65hgqsYEgxkkjbcx7zoUym7QkrMohSSvMqSGLkMHuCnD9tMo4ZfsbFwtPMPhiSDcPJhj1zt",
  "key14": "2xHy5jC8dVQPEGAKLx2ZWsxaqsfe23sJZWi2E3om8Qji2V1uw5zsWDfwke2pvJmfetpXxA1wJWaZqmZyAmBiW9nu",
  "key15": "2gmHaoarVxhawkHPTbyBUKDiwQeBCL248pZmGJ8V8QroE8MtoMNN16tRioV6LSrhGMpLaqA54UzQCWznSmSAQ3ef",
  "key16": "5De3D4njR6XoNhheP8gtPEJbwNAPuCntNeQ13MmW7YQjeh3vxANccS6xZJ41Fki9i5TP9bcD4Gp3d8Q3icmECk6n",
  "key17": "316zBzQmmbsBsrzrph74tjqaQavv6muP9jidkKrSP7mgNZ1dANuGyXJhsuiKr5fXoyfxc1nCvjFJw8iJphedgCA7",
  "key18": "2PxGb9K9goijWQhmxctNd5iS3qNhVEdKL36XWftfEYvwQCPrgKaxmGaJbVvzGnp1H3XfMBZ9kHGwVCErYCVEM134",
  "key19": "3wTURS7puAPNU7D1VDfLWpwgCYHpYaZZgwgzCKpDuX5EuQHFwRtVKJLdHMJCp7wCu5iYDNbcDT22sZPUBXGDSJyh",
  "key20": "3epykRHxQdpdo72DWMZPM6sa2XVgpUSR4jpez7xAFrDzXuGpfDggHLivhPeaZTCR1FBF837QY3xjxGULW7xjf6DM",
  "key21": "4RBouUaASkiwXS29Poq2Kw3cHWmREZp3Qa8uAanyP1D8npT2CyaKTYZhwgebwxXUM9cyHZHeKvNePENwdEVywL8H",
  "key22": "VBGrRhW6Kz7GD2D6TEprUeejfxaGtYL8if7yYU6GMuEJs5Uk8Vhfmjno866nKY4ayvv91iuB9LHSppNjPGW9UPi",
  "key23": "sWdfaXbnYR38CAGfSXjEV9eLMPXwsXQLDRhS2UwkUwj5hBygUzKYHfaB4Kasn7uzLgyy9sFWGBdA5pziHtvdsfd",
  "key24": "qcbmoduLwLHGhBs1SLXciHLd1BzYWtKenfGZijjrnvC995QndWf48CgkDF7utyriyaigCWBkKStGBAgytvhokvh",
  "key25": "2oiahLVNVRSSXuxtW2PvDaeF7MngZzosjEfcA7EMn8gEgGnT4B1K7AdUgkuNoQJeE75YTuzb27AEkBfGd1P5q4ve",
  "key26": "2fbGWfaWV5n6DYfqZ1nvfG7hxsvtVWUw5JKjhcaddrgmdr5SVqSw6RquVfaLQMJErzD1NCmdEQekazjnC34LjBbu",
  "key27": "3TsGHdvSma5MFrd636yF3es42Ku4DxMpMRnqjNoE3Hgdxh9ZbYcQ6YHSRyhmqpnbEapRJ7TEHFgwhuUQpernvvyT",
  "key28": "3b8hFs61ctGmCt2kkuvkLr5SvisCPwqUJud5mDU94RnXDANbzNb5pNAu4ZbQ3GHZRbfLGjRFdbEn1Bb5Dm2t4bbD",
  "key29": "31GBtDz5ScYsHTbsVS9T7iTZk4SARbuwunhyBMWqpA553Q9bBvvZQJk62oexpRe4SzKGKzP2n4rM7w1rz5QRNLXu",
  "key30": "4LudPFZVTWPxZD1hXWoaYPDMxNqy4xpyCQeSYGXetC5o4soeo49R8AjeNrxbTEjZxeDvTKyRcCwDKmfB95QP6sdw",
  "key31": "3xbABiEMY4VJuk5smAhnkc5pyxhtwBeC7xMS3nwGs8yeW9s1cozrjonKuUpRNbTi3KdMFJ555Gi3baAi7bKreaCu",
  "key32": "3njpKYKHCBRHfRGNYAAmQjJ7kVN219VYDTRmwLbrnTWfqqfyPtBB2iUCP3qxg75JdU4c6spaL8toVR1eUe5vydZz",
  "key33": "kuNQcmesZN7KQtvrKXVo1Lgv47V3bCFSMScp2RWN1sq42nkayXVCrTT4gR8Z7eLfgAKbJ1Qr78nT3eVYXP5b5Ht",
  "key34": "4WC9GJu4YuHLizrniAHt256Xwj46j5LMhPm6vfx96Rioqi1i9xPwbb9RcYS7VLfBMRyAjaA4L9KCSGkoyppzzi48",
  "key35": "2en24beqf4a1DDtaZkWywCBLkwDmWfFHtx9rzQNoJ1iQvfPXqNM5mARZS7NEPxQcizjKAg7xHzymnVBuu1vJR1AL",
  "key36": "22MZqF84DBwcnycLcUE8Dnze6hLQBx5tUjtS44mniHZpUZtkA8YDYCbdXSGUmbwFxiLSZrJQRn8E3y7DLA2tjxin",
  "key37": "2sCWQThJpnyHE7YyUAHxQgsoxar9PRFCXZXMGfTd7ykbS2jhaFdkA5CuQERMD1H88EBc3aPiPE17TRqvnNufdDAv",
  "key38": "3tCJ5uJkjtZnGr2FXxVFbEESN39rAWdhhknNNtUY2VZ65W6FQgWCm1C91zYXe2PJE5KFvBWiZ3EingMuHCbFbzwR"
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

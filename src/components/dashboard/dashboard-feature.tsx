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
    "2HTyR4mYhu8fF2M2vQ6qbSeJZt2kcb5XGbmEfErtQado637spZSdk5mq7VWVSLisWyyk5LcopLqgSD6jVsyonT2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46dvcyzqb3LsvrJLjiXi78MQy5ckDi4ZVMPApemvzdJLoRv31np7e97V9hkqHQVVyfmp3Mc38Zbmb9EUXYsycoh7",
  "key1": "3RTu2Vpe6i9ScpdWxFtsgxwWdaM6c5aZPzK1EG3HrEgQWLCnbUHykVZsbDeTpjqY4MieGbunmiubWjvK5AYYSVkM",
  "key2": "L77SpM5TqMDkHUzCXxqM9wKbsBEB6sss35voGyqRTp69e6AtD3cwhcd29SRi6aEUHgt6u6iTaPvFVFEPnd2wUdZ",
  "key3": "S8c7Q7LMxyuajokag4i5WRBqe5KRV3z8sqvMDRKWtdTz5MP5JDTJNBfEw5NwKBX6GyrcSBitQr7yK5F47FyMwXZ",
  "key4": "2z8wVi9w3jnTxYjKDuYJXRyXyHUNHUiHPeqp8rWj8ozrRHXcwQbSwbgmxHKUz46PmW7z3FShKEN1DoberPX71Vsv",
  "key5": "5WtkKMGvDhKL9DJpfUc53XZB3XEmQtEp6Z5sM5PQmLL99F8rxKa9HMi3379qNw8CxFFNP3xTTNAAWVYF4KUdiuMK",
  "key6": "HCVn7q6Y5gUzPYZg8ibY4gb6X6pjQeJAeUzrqFw471hcpgX5aQdnvc2jd6FFjoJ2v1UnHs24SvvVkvoy2h9Hzqf",
  "key7": "3gxw1minYybJH84EXUqY8v2tZk88WCTTW1d2GuKPfyRfqB4hjWy11SvCM98bc8eWVFHUE8Wm8cvnftxEPr1uoD7f",
  "key8": "MCebjtqGwGA3ZvcducP1UG2dMPV4fnxptjNpBcC9xFkFgsmmKufAkyaoqAvyxFjM5nzS3yrTqyZMZYYzqjz5MKB",
  "key9": "57JbEcPS3ox8J1vR532LnnKRY8DQmTEoE81e67RxJZaqexzv8bT42J4naf5R2LHCtQLwAUkedUun6znPsqdmQapi",
  "key10": "5UgdHjMi67W6gpCxyWhM3YXyPzVMpbMHfnZejSMtrETjoV6mBZwf8oRwx4183XtugYfv5RUTNUoqA3eHA1QCXfye",
  "key11": "NND1AZrMZnuv8tvNrtCWgP1b8RSHi4kohSjZY4xDuaNQPuW52uA8vHQABw5hDXNRGacq5JXCHENrJ2JPA1RPws7",
  "key12": "61UEg9ozCyZxMraP9AJdF8YrVp6fyZdhX3ZeAW2XYoFzU9n2RDAMsFpkWwEW8QU68BZkZLHyDiMaf3VQsZzJCDJZ",
  "key13": "4DSyDVy2jE3p975vVqDWAewQD1CYU32QL5zrcvgNLcbjWg6bjXL6iSBx6RubZPMPtqQz7tjCYWvnvCvh71v1s2cH",
  "key14": "3jSU2UJWoMBiYxnoP7zMERwfBXprLK6DP3wcrMaXMRq7wsK8PYjPG6r2brHvFtBZrj3RMXLKN3XRVwx5UPx2vzn4",
  "key15": "3c2xdEvywDDAVGA9S67RMzgAyyHbzXqe9etM2JmmuhiMyJ68Z2C2jUajYykQD9YJKYRJe6ssdpnc1cwizN35eHbg",
  "key16": "3H15Aqz3YQPanJizMQufN8qDvUK6Q4iBjPsZ5f2z7p89pD6RZMuKFbCDpUwoFMkULmo78X9dsmZknvQUrSCaTgQm",
  "key17": "3gZgcdkkqXhKsw53mSVwKqbiHfbDYnN3yfvJ2GmkVLjYAnZWEmptT24mtdiZFBZB7zUMdx6mQ6nKPqwGgp4XsQoh",
  "key18": "qdFk9UvPXNV7YLyb8wr3FxTECwhGb1siUghLbggaAmspNi7e98kK5r39df44sdzDhivGUh1EWrWNCwP8999rpW9",
  "key19": "29MzFXtY9dHwFUYkKqk6gwpCdfdCKgL1bn33f8XgA8AidKE9G4Zi8rMD8mBtvhZGwrovc3BXq6yeZtgXM94GJaUR",
  "key20": "5pAdy16GQmEzdrPPLk4m3ub46YHTNgDTPhJzHqMw1Xu7HWYHGj2CxZWks4c1Txpf4kbzyUJuyRgEeeJfbzF9D33M",
  "key21": "4JzsZMjHU2mpU3NnuQC1M3i1HpJjfAzi81vt986bW5vUWxJo8GmSEFMzGw1vKkcc2qpsVQ1bafzL2tLtvEkMwPm9",
  "key22": "DLVSS9WQ9mQzeWdqjc25MbZy4NcWSxPrgEnhhK4KaXGdn36mcsZxcNVzWPwgLRU3Q7CrEp7zgRAnwC4ejRwZXuF",
  "key23": "5p8VZp2CVLHyssVxYWGdsLhGRjAiCRs3j46EchuBKqAJVUV2itCtGLAgEJJexW8BSJzvqoikusZt5J4JDrArVSJA",
  "key24": "3HFPd66Rx9dFsEQF6vtBrenkQ2Cy3ke282kGGrZtXSuPmErY4L3gZT1Cbq43h4Lk1oip9pq53GnpPbY15HgirT1m",
  "key25": "332hM8gdaPXGEJdMEKLPRRuUMet6U9ggHi6xcb9qoKaKeysk6BYrsWmpU2S7GFNk9rDP91QZtTm2ND1ctuuQkbi",
  "key26": "3HAsk47c8GvwtSBnFmtTGtS1u5Xynt1PRrSamCXoS57D4HhZ6gDthx6W2eZmUTizhFQvB4vxvtMj2qQRhfXBC4r7",
  "key27": "4B9SkCGfa8denyL7HtKicZKhvm8iAxVKu7trwLq6Etzpkb5kX55gAYYLpipvNABqcnUokqwUKQ6S8v7EbAUD412Z",
  "key28": "KNjUuBri736E4kABCpDrNbEVfzgqZ8RbLHPgqpZGcQzjD5gjBvkUH3eebLSyJCBU4v6Z1Aid6soFmryJPNZNXUs",
  "key29": "5HS1uU3bpmihUWTzrNWSvsuRmCz7GpW4bSA8jz4dZVbC2gGdMjvkqWXFFVpB97AkPypWFXqaMCgBQn3V3WEQSxfX",
  "key30": "4P9UHCXVaWULkHmQvYR3RzShmZDX7J2FztuhGAcPeg3ofxJecrRk3DqvAbtkkxgp3Y8HFe5s5iDR7koUVshB2FmE",
  "key31": "3x43uDihKEWd6VohiZxPa6cG2W192k1iPp9i5ajYDTNip9k79ubGWdPa4oFcXMPHXDzTiJifDXR2M1EYhUvL25bG",
  "key32": "ypGfQQ3BhLk3BEeZ5hVrERMCXGs1fwvnapTBTv5UD7EA6RdT2qLYptcWG41N3i8aQUXAQC82PSCdbeT559cMEee",
  "key33": "2Gb91sAKGPpQbHU2X259oKmyQfCwsdyGxeQ1QHfpgWqAzw75GAK53UFxXcLJXhuqoBAZmKBiGBnGYuXieWjTSDaR",
  "key34": "5oJuS7cDEg9ra9Y3Dp5R1ieeSYVRkUu8Ca6QtGGNJAvoNQGf8retuHafGLKN6svvt19eMwHaNrfxWQZgaVd2jxVM",
  "key35": "2esKkHUcVjUqbQx66RcFu4X2PwSSDo7kdHQkeuzoZm6eBT8wmB9kKriUMaQ7LHTDxBBo6o1AFNoZemCnp3be5MTE",
  "key36": "vkJi2GaeF7afZxRcMucb2YrJ9NqjdhX23hJWi4VyEtrYkJ5rUfvWzy2iknrofiD7Gdxo8CNUMW5n3ZmPFbgtfoD",
  "key37": "AJBzLu4hwD6tr6dCZiBEy8eAUpw4sFGYzAMd2KFBjC5Wm1udKZVMCUwmwP6kmJr8vNFjvXLpZX7YaFzysEgSDVv",
  "key38": "3mHb6kWdigpx9GuzCeeXZWRvGY83yzHuAtRJJSXQNDj8aN5vQiTLZh33A1dvopwaorWeys8d1P4BV79dNzRwE7wd",
  "key39": "j48wDCGrCWyGr8GypxJNhpfbMfpTqff8t81PmKtaa6GJPPXHJ1RhsYcvwi6ABjvaccHrCY7pRKf2fqBUEMuTK4z",
  "key40": "HGCwLPAVHsK2tP19zZCUHCbbS7wa5GubWczSCxbSAZ1LW6uPhJoJVr2CKzUeLwnAV4qMLVkbVMtkPRmeHGRmumw",
  "key41": "5jjqGSxRK8nad5XFzxEKYJRnntmMFYPsZrz6PAhZTcAkiL2JMSzscBr2g9JzBRwm3bcmnRS3c4NuwZiBEA1d79ox",
  "key42": "hNdAkJc9QamyYAyfmzFkq11BatqhUP1T9pLuDNfoQAbWm8KaEPSrskUqbTt4sd9Y1gXmsi9k6W3BDZtce4KXnrz"
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

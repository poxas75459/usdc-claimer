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
    "4kELmrZLn74Gfnsv9wS9sXrKXLDyUQgVYpvyunWenHJKVbEPrLv635132ndFBhZqwMENF9mMjzKxUsm1RyZ2cvdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oCkesGLVauX3AeJK2pGETz57RbgLq4BsmjwwrNTKeomaA7PNDekiCAZDzoe1CULGUqRRxiAvqoqncBysT1s36iZ",
  "key1": "3367HaLY8bCu9fftN1eGfdX4UHjzL4CaqK5iaHtYjm1aSb7SALpEPfVvgWfbqBEzD7KFiUnbhxF4xvHiQoTpUiQ3",
  "key2": "4FLnNw92xRzGSiAW11ynYFVpT633ppieX1ukTvw4a654oPcwiEEvh8yw9BQDUwESKmvWL1Hq5SNioV5T8aR8ZCH9",
  "key3": "5P2LfmMA61Co4dGcEWrQq3GaFx6hrcnZmgAdqhzNQQr26jqqC9jmes8S3458bS9ksPLfPEWqZ4Z4gPdKmsJFAjm8",
  "key4": "aAqAqN94DUVXPb7YaS56FbwkxHz5no8H9vxPUbP4HzLrFhDK6sPEMoXuo1S17pm8EimidHaCBg6wMqQj8Pvpxxy",
  "key5": "5KQxKLqn8rsNVRQU2eFWPNLCgRjiPbpbLhkQxd71aPEFtNtsrS8pNq5FWUe9NvQHLLq3edZZTdPaiEqXBDUFyKjy",
  "key6": "jK7M5RxqGq7mEHrorLhbagbx365ve1tjHzmhcReXFWYgF3ekGeY9KuWHDQ3LqdzSocG9TsahNXkjLtEoiS6gbgG",
  "key7": "4XEVjdzCQubm8mqA5iYEB3FxQJLTK1ZE4cPECAPYepV4sX6Cuqvy9Cm23MRCV8SKMRtxR4SRgUXu4jq2H2aNN4pF",
  "key8": "4xaumeDtrKEuGjYue4jcsHot1SvuPf9APMtiVTLhXtxRQaz1xLDsQCKuQf7mEWPhnCqQmCsogCYYLFpuszAZGjv4",
  "key9": "3688pGpT5kRyi3E9ucEUCnQZ8LhEnzfJHUHSUcfdhGWXuedwNEH3Ni2ySDM5aSkt5jmEPH6AwX64oxeGYm1xxSnA",
  "key10": "1WnxtDZa1qUfjr4ohSaqaFi5tPLMBKEYcEHSrE5kYreWRUWhQHxVbnDz14TPm4mZ7R5qoX1Q3Gc7WE57QfBFjA6",
  "key11": "39AdEZk4kfeRPC1yQDccyeuFwj53NrJEufNRUhBRHK1z5vR7HzQdapjK5gCo6pBjfpTTPafyd1eggUi6zFvMej7N",
  "key12": "3HqVAkKssCjguyaNSBff7TYunrbYP57iwCi2EXupe3eYMDTxQ5gZFEPthVYaHdcgXgCjkFQBWeM4NTE38SyAeqxj",
  "key13": "2mWP7Y7r3tG6GfKobJDfQe6fK4gAMk26pp84JrdxWZ98FaKotKraThHaRfi8rdRzbWXCym2X8NuJHf7qdYTbCKev",
  "key14": "A7Rs1AYzQMwMW5wx6jY21EopyNoiuF3rzyQrzJSjK4Uaw6HYhL542ut3zbAdusfvkbY89Kkn7n6c9HXjuXGxSoN",
  "key15": "2Vw74qyAjccJM91wLYuzoMkvFMRo4Y4zZPsrAb5knxiZxRVnUo9hxXdfqvkkVsTzm4ZYbdoJwV6e1UeB5KayDwWM",
  "key16": "2yoLRRK9TaEyVBKdSK46MKFjRdYx9uZmpJEeAzqoxkWySDhJ4iqJyDrW8aamz1U1seARJrKRNEtEw96DFarJu1Dg",
  "key17": "2hxeX1jYPwudtxFRayZjfrcV4SQv2s37T9D62JaaCsmbjyLz9SoHafGYxKHnXnPz1t8a8sy2k4YGqwQ2qDKdYMJX",
  "key18": "3Y4bc33xXDUjaYgUXcj1WTKK13D5BHn4wySJbAQqZGTUom8geRiWyYtJv7yaxfw7oozfLoXbodHXN7roiqrzscH7",
  "key19": "4bsBzE5gRZJ7ub1owkLBNDV31gmGYTg92fzJajNs3965gc9RPanLhQpSpExsta3tsdEdwhnxvfghLD6TuBFKeqXx",
  "key20": "52bRmpEZGpCrdoJBfbuxKG4TUUn1QuWTWUqJdxVAn1BxqpR17wqqCFM3KjguEhWoi5azVjQ7a76nYRsHZnmqmj6c",
  "key21": "e63xitBAVbMK9CMNMXFCe3mTHFQrNKF2ch4gZFHHUXmGQ65jZaNtxmGFcSFRdzMcyt8K8njzU7vVLN1bQFRTiZE",
  "key22": "EATRNvCdmxppeenqcbe1eNMXbBYVtbFa9pgDDRT77G2TguEjKkh32t9Z9ipnnQScA3Cq3aquHofZQLpmfBa6EGE",
  "key23": "3j7AttQ8o3uAr5nja8XuSY4XxCwbhdMpznXTjmfQJGpHZ1aVu4boDBAq8UreGej3k7gpqfPArKeqzcARQufjxuwk",
  "key24": "2f7noRgqAck5x6U8GqQnDqqc7FYFvg1adViJZG62PHAhqszn9fEGCohuBXEiWXVqf35gT5vZdrAwNFd9rQcVqPiC",
  "key25": "4vVNPkGnxZciuW5ZRDLmfJK5NMGQBr55QXCuU9gtqCSoKNbnpX9mpoBonYTLn8aAgdn9JabAumeynQE3hWjsgYg",
  "key26": "473tTd8r95wTs8Bv3duEbzTJrChPUWG7avhx2mdaZxY8Dx5zZumyxnJtbiJhFDX98PCMjX4CTu1NAuYbV5N6rAw3",
  "key27": "33UUE3PeJWVkq3cpmSoBCRyQRSxzbXGb76v7BvdNRLmetHYn8oCTU29ra7u9MbHwLKHi65JudWVtzvPvk1GZPpaW",
  "key28": "4gnd4EeBLMwN4SSwriPKcxbT6CHaRtsva9zddR6Wp3tz3Wq9cz7a4pEB8RwqYgwEP7FGse25n8YGmn1SMQYQj8wS",
  "key29": "4KD9JHPKWQr9TRyABKkKV6NG4Ck7dG7n41atXGAY5CyaQEDQABW3KF4L3MqD2Dc1qmRJ8hS2y2iUwcdkhtepYKYp",
  "key30": "4cbYHzDtCoFFieTb1JsbTKkWGEHZE8LohWoDajDxunwXizVfUQkvrWoxENPRsAp3QQ5bq9FrvB1tqaExGAe8osJv",
  "key31": "56DwZ6krpGVuwnucvDVCumHPdWHsovi4aFBDCTAM7SzhX3aao1ejFxnkXTmsqrMgSprpLgdh9TG81yvTPT1AjFjR",
  "key32": "5A9cut338bthg9XyAzVcYrVrXKUqogNwRe9PxesrHWKHtkToB4KLTwYLRYM3bNVcTaoQACASN85BuKiZAtqnZwj1",
  "key33": "5n6SbGbj8pdWMTsFwMNj3G5gscdLFNgW1PudhsqhxRJzXwvWMgax7ftyeQWD1QfUe4CNQ1uo4yk5tNi7EMwRm8ZJ",
  "key34": "pba1gqvn5rDHof6aqGF4yR5A5MwV3QcNQS3YBTxFAff8JrGSeimvcNJVYNBL5xyD5aaBiaw4gjUUzWxEbFnQ7kV",
  "key35": "51LZGEoYPvThFsX8supo8n6d7fH9KZRGU2m7LfVBFr3SbnBNy17D5gUJ4Fgs8igr5tfjcYobFx4HLDYt64ky8Rqm",
  "key36": "4HV3idXwXHz9Y68CnVMntjaaMw9UAUoBHhwbVjXjjksRZWS89wViPRbmxH21NGFxar3Bd6q7FgABhQap3y8oS6oM"
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

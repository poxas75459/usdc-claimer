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
    "3ydzbwNhG5AcVKRw3ivDUFofTBFBJ7fibJ3miawkVuR4fJzvtFmEjpPsvyVPrVNT6wNw6ooK4KKHovRxz5DUthmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QzsN13kc7yzG4yV2gjMrHGW22QRiaiXbusxWodDRoadpAx4MbW7WhbXQeQbYf86fopL7Vr9yNnTrwy8DQzki6vY",
  "key1": "5pH9T2dHdGJsfJS3BtjLeGxGcVJ2KPMxnXbE5zkU2CS9FQJ8jf5Xz4PRYWip886jShazqxK8m8WZZMc43rji5z8g",
  "key2": "4rjbPibdNrtZXQZ8nc8W21AAg52egeYuSfxiXmb9rcgrFgo9BRmWWLkXs2umLGQEXnTv8BaTp4jFoQuNComhAeDn",
  "key3": "3DxWnbGYYGdbyz2dGStzKTtQsAtDrTatWQwwbzJdcTyvH43qyqrSE8HHCBVUB66Y1thavbJfugX2ZJJSHPoXLCnN",
  "key4": "4Z5BnS7Q9zQTDjBD2vkp73494MW7NDfPavrFJQFeWNNpMRSyK9iWew7fFfMwSRYdgFkD7jYB7jbpiqSFy3R2nhKz",
  "key5": "2jRdAuwybLSMrV4h2stSvAFednSZbYtS9mfwEUEuh3RtMsddtoHcZFx7dGc8BhPq1sW3SVZYybkhGWPs5cBQRVE1",
  "key6": "5ieSgjaBVPuuFhSr1KzUSovSgEZkCHw41X6G34A8hgDxwQp46rVETsrnojtuuvtcxVrNk3sDUbEekYvW73QLQo5i",
  "key7": "3i8B7Whm93uRTdj7EMVaoL4iLe2uE7xeKcbxguYoB6qcuYinQVk3bXghfcNjq3MSLSbNqKxxnsbygd32Jy7U4ZA7",
  "key8": "3ieLPwLSZNiFYYsrfFJEpiv1oMCyjPfKzrLMLCdboQanWeUnSG24NVtwRrdwyLKDthAADsWFPH3AzwFtGhnDUDGG",
  "key9": "C5hJJKsPsjbxWWQr947ybK44fzRCoSs1X4LzFHNytK74erac6n42DsZN4aPPCRpZDuz4ZWtTBq3mfaeLea6JQVw",
  "key10": "26kjNzbZv96zuHUdFnXduYxJk79N9x7WwKyT6ZcsFt8DAF8p8wXDTHZG2gJCVfq48tAxsoxKf1BzqZg3eUtWLEit",
  "key11": "RdWtGMz3P8CHHGtnWEyBGACHYnsdGaBgFT5fRnzXuFEVGHtDfCkzHiizfwAbMXtYQCZ76DVTv9w1tJ664B2cfjN",
  "key12": "527zJVagzogesV96L1Vkd37FcMQM6FcVq2ftvczrttPJBYfZnsZpLxGUDqCHa2NxWUJGfGQUgsuGoYwKgwRWDQ6E",
  "key13": "usvr3oQ5y8RSRyQm4u4gsNb1C2CJ6M9oeDsa7CRuwCgY8wQHTsmNPfw6ab9kN2rtyp6tLgttkrFAiMDYkdzjD6f",
  "key14": "ztLViqoe71QPMX2xpEAjphxTthBFW4ziHXFJMkZ34SF7HBw76uhcBaxW881YN3bWdBTiDwiYhT4S3SgKx2beT4E",
  "key15": "SdomKui2pMcgCJZciBRAeD2hdnx37nC68FgEnATUSdQ7ZSMLyxsiG8D88Yumk31yb2T8tPrLSAkEjA9kJNMJc3c",
  "key16": "3CMMAYBW3RJjMBNKidkghJdowdeFYB2mMMNuJAPvAic8GFNzaAubyxna3tVLQ6cNPCNqrZFq38EuXeMPZcm7Y7Hk",
  "key17": "4CwAJysTpth7mVfuPGjyajc5bCgVwPUDTufsecZ6Lq7dTNK9h2CGCyM2jZ8VFSVQUTo4y7Dk529YctYpEgYTpdYV",
  "key18": "3bNceMpXMMJfbXbKTDZUMschhnkmc7xV3gSGsdbR2p6rqhELBU8kB6Vhv5oxb5ekrA2kjZ8xRyg4ZgK2XN4eX8Bp",
  "key19": "7TqnXSA5JNaXcaLMLnmoQMGYg99X1HkGoiDxgraVcm34JNJR84AFArFft5DDsLhjqcwkMqxzh4pPUYRBxFpuvfM",
  "key20": "2QKW5EYNEE98dgNk7XuuARMzUBCgJJYoxtG2tT19R4EnavuakQ5qYuZyaNs2aUHaC3hML1U85XYdZ1aST1bXgYTN",
  "key21": "31ZGSB8WFLPSzDQ5xQePU4ptEPbrjvv3h2WaBaS3tqgebhtZPuhCVUATxMZik9ZDKEofjCSf7eiMD8kgmAuc2utG",
  "key22": "5Zrxf7tdsK9yrHxVvEDVJLDhaBa2PonHau9ZeBEGs2bJ5WqvyK1JGYR5KWLjucWn93NLwo5yPMDosNynSobnam3W",
  "key23": "3YUBhEs1dRqYULo7R5HVoWSHHY5zWfTnhTR7Yvt7ev5HthQv6QMub6zZgZRwoFUDU5ERkaekyDD89nBy8GM8mGv8",
  "key24": "V4eD9ZyuTznBcDFLYT3SXoQnRjBorv8Dng7kYwwhUQsbLPpeZxdXi8k31izsK87pHcTUAKMPc3nUn3GcFmGsq1q",
  "key25": "4eJ9L5TKku1pMFQe2YhxtgXQ4K88aTFxu9HPbTctjdSKLxVzpXDS8UN4jKzipQZn6EpYNKyGbxTdkJYws5yMfWrG",
  "key26": "2heP46Jk9j6tXBeZJiXhtCRL889iLCBtP3VeeuNT1ANVznNFadXRb7kYqQTpotF3gGWf4Bo1KEd3XxhsH6k17ed9",
  "key27": "2sJy4QyFT65sRaAgAZoDnvuM55FkuWB12fNGTRqSGZnNJRGBKPZnbe2Pq1RRB8pV9M1uP5ZmZU3xV5QPntqiUPLa",
  "key28": "2x7bEUXeEwzN8zqidMiyPQ8fwwjTiL6vHkTzH6HioneeMbQanf36EyfF9K49AowFmGymM5fhzgnPEhr4Tti3qT2A",
  "key29": "5QxDB5dX43tu8XtnoESWP7yCNRKNKYzcVQaMzExkMeXScfuwpQUsNQXbX5xpbGmoEeMwoRTxFZ572cZYL1JqPfr8",
  "key30": "27ri3g3ZFZY2h3nQt4E9LbzCevBtf2hw6rKs4YZXdP8DzQ2ZDLUTziL64EzeKvCzW1rbFTxca5wKcuTv9o7WPxu1",
  "key31": "eDN7uxceMKvdY2tH69EFQd3bc6MPzRBxf7QmCor2TB5jb1MMNf7eSSGpgn6XBVZmFXMAWesUim2PgkQvJ2gPDEH",
  "key32": "4iEPA7sTHbotmPWxBmM8BecUSi8nLRvLmCJyB9k2VDode2nVokCJGCvatEsCTWh6X58o8hjd5Dj842bifdYaKqp6"
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

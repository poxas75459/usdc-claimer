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
    "4uaTh1U7zNCYSGrAsN2WfrkFhiPbbwsNZvv35CvmnNbzMR5c5uSSHUprdFS4gTvryb1x8BAA2Wb33zCe5EnaiybX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mAzhPNGj9xVqe1uHE4V5NonqsPLnvmLyqUXLVfhRCPGoCUteQ3oFLV1sTJqv9VaRKpEKy6rto3Nn9qCkL3Mrujb",
  "key1": "2MJeurXVQy2zPENETzwgDJpFG6YCabE3DD7TQ4DdC3HkGkes8sWqFHKvQnrsZ7eCBs8ZeVKCZVWJ3BkV2LenTN3u",
  "key2": "2RbD2HHJzjUCWsxZoZiKs8cXKNCgrPH95fdbvuF6MH2orML3Yw3e22SQzFpffgfcQzoeze861CufduwVn2UKcmGP",
  "key3": "4p4JjUfNxEoQyDEeQYVfU4KS3w9zwKaySZQF5PptKGW5vmDuLaK5akX52dTQg2ybin5XrjEpLPVMULrjp5NMPHtW",
  "key4": "23dKct5rVA8N2bQTsJSALBBcksva5tLAGKaf8PzjDFqxtaMFx1ycreFUKVEGpnwo6aYbKfYtbEJwmxD1DDnU58ND",
  "key5": "4ekpFN8zVv5PHRM48EncomCQXB3Mo9L8idpJrw2GS4toxom2Rj831bofWymVdrFwoN5h8pk5dShMPp1gahKf19jy",
  "key6": "4ykuMbjH4S94dmRTAW5bo6pShEFAB8DcFgruLtLkgDm5STyxVfwHZZdRerdtucCH53ivTaAU1Wistjhr2NyfVY9h",
  "key7": "62DgRku4ZDVPGoW64T3rNrFhiZYyczmgjUAd63DmXSinzm2UaKPJSEQSJPfX9bKfir6TBwd4pfjFNEgfrRvyi5XZ",
  "key8": "4GtggpLFQDPxrk8HvD7HkmXgyndbDobsMFqsc6gf55e4HVdR6bZmg3wDqm2ib29shD19BSUv5ETr5cCx5V3vGeEj",
  "key9": "3tgYhU4RovsFvZECPmR3JeU5QiAHBA68eVr29SJGeT6XG9WUy941RGX7mwJCKrcaKWF7wXS99rHgZGUnzx6ji8Qx",
  "key10": "TKFB7FvLhSphKCGE358YA7BF2QaTYNvA46PMefZRZzjaYFiXZQ4yYqFaeiJ9JnADShYbacRJXwE33JNnHhZzmuz",
  "key11": "5Lz4bfzDs5e7xHgHvx98iVmZsiAVPBC18q23MULheg1ZyYmeL6uaDWUJWTTERVFuUQQJ2f19N81r2AWj6afjsSLj",
  "key12": "S4mVnvhAE7hXje8FWVXvxFXdX1fmAzZMQoGoJWR16SP17EPv7LCouy6HxBgmPVgvRT5P6z13FztnpRnQp36e749",
  "key13": "2o9jRcrR2e4JyMU3DhYghgadZcuM78Lex3YG6GLs4mE1yC62HvxGqTgcjrzvp9aEqmsRMHeH4WZbHrWkG2nRCYg6",
  "key14": "5C8NLAeRgQTFrYzuDtQjxBtQJH2yuULSS7AuPdCpLukB7tNrh52dvBaLVPcMuftZAuLRKo4Y45jEZTnEYvDhbmco",
  "key15": "5HY3pqzqf8J2bQ7rWunNaofCwXNy9b9gc3uKfzMjGxSdCJmx6fkio3CheP5iPVQPyRDPcbTmtxUTZ6nGkckgx1Jm",
  "key16": "3RBC1uhmFGHo9cpVFkLF4KyeYcVTckHZD7pdhZGwqoWVKw6T2uiPdNb8DWP8bYPZAEPunsHQz7EEaSyKuTN38mEW",
  "key17": "3UBkfYdLKRPzftfbTUvqgNEqdR5AUpg948Xf2wzKfrpo4o9gsNCFZHhmCX6RaiT8tt3eDxiiCKAEKoRBx8nFvES9",
  "key18": "23qcvEWYR648qHcgYyyY64hYTDMtSYcZoY6xC2uPV21dRbuCKdsP9hTii1TUw7MgsS4RyBaRcd4Efsu7SwaeyKn7",
  "key19": "vrffEpaa4AN5DEaYSkdagnCCabXj9VqCoGckjcHBm3gZpywX6UggeFWKhimYfzhUty3fuRrqkTPY2VooPBVMdgt",
  "key20": "5mvWxsfGYqoatY4B51aFEWukgKsuqXScQmLyKsKrPcfCnHwmXLCEfMEzTEqgepBhovhp1ZL4kyaNEdMg5FqW5ozP",
  "key21": "48aYWAJoS8tq3eqYUD7x7fdjAT9p8g8wY3yLBx3Sk7E13DDs4mzbjNKFYUVQomnVdLTYZoqMRbW1aLssFEmvhEbz",
  "key22": "2LiGPDdcFGeE8dp62qFfkLw23pEPBU5nu9DB4T6vNbpFGpkqmpsV62zpkagFJy34vd9FyBAie6C6DRSAPTZ3Fg8L",
  "key23": "3keoyWCZkWeUvbQQKAtpJJAvSpGBVUq4HdrVvrwhv8CAcukqgLHqdrxwyGK73d29kfh7Z9atn3HeL4j3HNjiCxYf",
  "key24": "3THKUkJYeBCCCpHJ8bhr1u56tnKxTBwjiYmUK4BmzNB7sX3aC41q2T2Z6dia7eqBnwJaUeNAtVyMN2B5YomN5Wwk",
  "key25": "5pUQxpSUqi8tht7uXyhhjFBkWh3eFyH67mCseM4kGKSUBB4GqT7dr1UWyNUTn3Dp1HqVpsAepFP5WawCvVw6QKfL",
  "key26": "3MNdCyEhqDgbd2BfZzDUjakvNww1Smskvov4cGLUuBZPN2qSu6HbHHo1fTapzm31Ad22zYg9XS5npwnGjHNXQ8ZM",
  "key27": "2Z76jKDfL7exXdr1LQfzqPMhwFTUtsuFJBPmBCWq8Aj9PWuGp6NbwdxQXwrrwC6Lm4E6pDxuzY3p9aeUQzLVwPrP"
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

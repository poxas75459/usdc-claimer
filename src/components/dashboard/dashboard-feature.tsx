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
    "3A7rBioQmCuinDLaeDi1cgrQyxbe9gFdYa5hTXPXhbd3N79cVEEPFYbALpzBMp7DZD1FBohMW6o1SGtY7dpeGeXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C9K5PnazspWap2WiuZ7PgBN8RTeTudZ6P1oEUpuzCGUTx2akycMXzTHSTu9AdfeaGJHyCUfzvaKZZ7vyA5FxZkJ",
  "key1": "5NEWF82MReG3vP6YGTGABW5WKRCMw9h5djfU2MXFNyty9pC6J6F9sNkXDwh81w8T6jNKsp3UeVP26dbQAXyB5wTQ",
  "key2": "EWmfPZKwJnfW86h9VHneQnhFnptDUPKAZb9JKtu95RG2yFnoBXCeEzKamMRJEeA2BYL1y6sF5dGZ3DF7Qsn6bYy",
  "key3": "5BvJ4gVUDm7equSucpqpMNz8CcLmuTpicutcmsCr3S87oFGK7HsBu9ZSoWDbrv7KjgZswbnaBK7StR6DNEtTGvVS",
  "key4": "65yucLJFdtSKFWkimAFTCjw4n6NsSKwPEFRm2hgskTGEBBxq7sSxv4ReRKda4Cxnjqs5MVkfy1MqPqpEJ3mu3XML",
  "key5": "2mrtSdrrCsFHGV9Z3em76231NBz6xn42GtTwKieD3fniCnfvHmjMi4JaEiXXq8BLXLEpcVv2GoXuHmksCSLnd58J",
  "key6": "NV2DAXVfFBdv53p1t7nWjPGFtSKxh4QW44JTNUY6gFzLwBuMNgubWfZDZVgZy3knpMNpEQ9TsUbTZhQTTEGCs27",
  "key7": "68jvWgV8hhfjDmEVYpz4Jjt2WtuX9WuHamxohZ197kx8XD82yqM5rXfGKBHth3DbCC8gpmGsspeJk9ZAjHfYLtT",
  "key8": "2evmRMjBEMvk3VGMgVo23pL4RKZN7iaLHMeNBkBK5HdkexQpYAtiC8xL7qgx7LSKwL7HPm48qyQUFYDQPmomzPnP",
  "key9": "37FNuTTRsoCxS3SKVxzDS1ChncZ2KQk5Wad22nSuGMYqRiBwp6MdHQcb2YrH6bxA12fYm26KkgYwQZUjyd1u9m8z",
  "key10": "4W2W51D67Hr4apuAWPMqTHUHop8LFNTbSGGgMCUVBbmVpe2c3Bhh85NDaruMdBWddoTYJowYSC77yWNBY5fdrjVV",
  "key11": "4A9cKyArEarW9M7XfYTnpAPhkt21oyV3uXhUjKytGMnxoJ1UrrvUrgEpYwZmh8gWoJpw3dpkVkA1dDRcKeRZDKBD",
  "key12": "5mpU56Ca88Pg3iyNQMTuNF6U72XzneYUA6ViDtEDoi8PpRN1YNN2BkM7L6NC9HCz2HztkWFwUhUobk8qcUTsZkGn",
  "key13": "3P44rRxsagZattfwvYi5XETpHxN7uVkZdU7H4LhJQ4Fgz84TZAyfC3UhZ2zV51N9R47SXyVij9SmdxUXQYRBgjXC",
  "key14": "5HjXT6SGEaf1D1pe3oQ2wJUsK1NmohAsohQxdZ1egVnFcGUNtYzQtFeVczVNAYuiT3qaKYEtExcY4yqMXaQEQdfs",
  "key15": "3JJguV7ffsrKX7KpbTUjjEfctqTtRhREtu17GaGJseWe4fwwUr5mKfqLnYGPuWKeW6LwvLB79NKpZd1QH9LmwjEA",
  "key16": "V7E15K3yhzWwLZU11SSgb54ayERxvpfwxSEntyHCxBXseqfHyWvHFEMV6XYQBBXeM5mpXykc7DUsNvYxJEB2iuv",
  "key17": "fwTwk6naGtyWiCE4ee9HNPUJhRb4otcR1bUDuscmeRx4Hgs1AJ5Jqq9Rzbq6Rd9Jh25mx9zF9dLcbD7CFtJPi4t",
  "key18": "4w4suMgyTQUYiFxKHD7UqHgWZApUWwhuivYTdatQT86M2GkobJijrbByxF9BsKF9EZbwzwiUtc35mCgb4vWPf8jj",
  "key19": "38taMoUw4tgK4BiC96a7CiCgFgKW2aa6em5EyiCY12PNjXEoY4KNsg3zjVRJUVWDfbiCgVC3rttcdLsqscTXYG6F",
  "key20": "65HDqshBxWPVCuCGuBB5vixi3HvcYKC93kXevkL86tu49UigpKG8xszrfwzgdAHuyUShAwSmpSxoP6oW4z9yBuGU",
  "key21": "4BXoM2W7dBo95WsndGdXLohN2mt5ZKuPMP7iy9SPdooz7pxr2daxUP2TB5ksAsVh2q5KJSRpXvEAPDkJ5oFYsz3e",
  "key22": "nqn1B1sZPuRZS5FNPjCVH58D1jkFeh4Fcrn6SMnPS9PCbQz2sSNHx8hgug3RCkhYcVH7p6wtzhL8zU5NjDu95gP",
  "key23": "5mNRNPzvuHPeW6qiQw1h6sp7g5e1SFBtbinq3qxaHJQeikmsV2oyTAYT33pXWZxiVNZEiraAzoX5Smzu1cxt86YB",
  "key24": "HwgzUxLAQVfvxdiDQMPa86iMcXc8Ro7o1FAqrRmbG9Hm3SW8p29F82F7Mk2rBij3nFpjxWizTXoC5vELoQ1mG6T",
  "key25": "4vZQyzwUnnHExr15suLYgWVWFpjXfTAYt9yJUEDysh4gsYLHXuVZ7zhnxJARjUPrBtUmjqLgaBynugRaP2P2vY6T",
  "key26": "5fLE6UcSA4sX6KoFmmSxRDXWyJ3yb91pT4kHgx8XGRcVmxzg37aKtSJ6Y9HGFMueo9HRmqSzq2XiNSPV4ph1tLR2",
  "key27": "3pSSJqAR3cSsKVFZmAEypot6wvzzzBPsAQ7daM9UczwnVy1aM9rXifthppkgx2nu3Aanp7kRhge16jCeMwGKdciM",
  "key28": "EZnbLskH8pdWpWvXXRcG5DWQqrCBZC6X4r8DGWg9Tv78rhLSCDWXDrdiDvbU5VANWUpU5hw13euSXvPteKGPTLL",
  "key29": "3VjmKqpNRzhS87d4CKLnRpK6q8Y8iuuKB28H5BuK8tmtnPTi2MchoAGufqLVAEAjJGML8Dz7vtfNqwLtrseANTnY",
  "key30": "SoZvYVaMg5F5iXJUcvsttf7oDsgcU38tRfTyMkZ4rnzLnCdYjFX3s4G7toiVTCTT896Eqi36FYH9sZKhPt9PqjT",
  "key31": "RLDQCnoVN9Tme59fY3ktHo2W5TUZwGzRGpxJ9abpVXFKwJjbwMrSBL4WZSZWyiyG9TatmqwtRgX2MxFsBdxC5UT",
  "key32": "4obMHAD8svaJ3Mgrp5GEL7ZmgEuk7ecUVqDgqcHCXBYToJoSGTkFfTSYYRkUSYHrCqETcMsfDvSkQU1hdj2erDHt",
  "key33": "41DhDMn5F55MomZU5qHeEWwwPcDz8EbLWb1tLRDwkRxeN9oZvhD5dVoL1fgjzCm1uFTUry2Vb6sMiS2ca4adwHAh",
  "key34": "75etLRaBVHoUfiVSgcbGpDsvokJN5PvCRQs28djo5LBw7p616YoW4bL7puw5r3WpgJRMp99wNjhNaBd44qU6dt3",
  "key35": "48vJpkszyZzDGf3AjHgMFzTvVY1hkX28yxvAWxcAbiPki2PGtjyFoxVLvMbewsWLPRx9bQfas1A4o5Zz4ZixWeod",
  "key36": "5tgorRq9CmqaanM5VErxofxBnkBZp2fg1jpKtybfVzZ7tu7P6vhHpLLZbLnFWT2hmyHrEvRCrazx6F5J74aZsEFw",
  "key37": "Ly27xXcc7sPa3TC9bRKVfkVEcuEBstGuQjGYDceoqZHcgcJu4TuRJsgJa6weJBBcpU8ZVcCxfPDcKBj4msj9f34",
  "key38": "2jPRk4WXgYnY6SBZj3x44NRMgL44yRN5BPMULZKjj4V31FbW85BMmptJmSJjuibxzF18EorEjdMjKvTwUUQBwBQ1",
  "key39": "2UWXStmWJatf5nkX7syv7n4ZAewosveTPRkX86s9mT2HJxQ3zskw9Z2zUF1xYR27nn8skQcuvbM4J5WX8GQW6L8Z",
  "key40": "3KE7j6BrnLtK7asB5sbVaQzjq4aMqK7xRHVSRdJ13J3d5n7PJc5bWuivX8yqNvPM8XgXNTt1JTUzqPZ51JE3y6XB",
  "key41": "5VUyvhNMFA5hRTC3QH3sdoWpUHaNFiJDeHDfZWtkmggfBBpCUp5dcdBWr57oDkAk8YGt8XCQXA5j8horNacqEDFW",
  "key42": "U7kDbJ63HwmchwLD1HD9icBfTqRWwyryYychmy6L6eiwz31DuBPyZzNKgAUbsovDwaueytavBrJUHupVSFbawtP",
  "key43": "61hSBExKFAvMTaWCMkmVXou6VfWQuQnSqTo89j3oK4hSERJp3janxLLjW9R67LFXog7A25uPjPppo9Nq93X3Nats"
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

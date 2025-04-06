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
    "61ovraczjNMwP2BoeHLQnGxs2efXNEGrgEzAe1xUMDarw6gAJBhLAPszWaVuZ9NdbdwsTGaZmxYCxvB2bjT8Lje8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kwVqL7pUw8r9ZCpxRAeXRwkhebT3cZ5i8GZ7o2LpTe4bLWT4FhViB48HECuhcWN7ea5VqhvTtkN7RDEfXt9M8kq",
  "key1": "2ujujAuo77KzT8KRGXecdzB9KADCAaUarXk8szDpdu3WKyphvjEe9D2u1TufrBkJa8ch4gmjMo5nxCpNb2kUZJU9",
  "key2": "3Cj79s4tmtzAx5nYh5F4r4ohHA1TMMmLTVyiiNC6XWjEwpEpswbumJbekeVVLpFYLfdz4xu5b8HPJ3TKJjK91tMa",
  "key3": "4qDjqisHmn8vvzqcM44aVthxauRueUtb2iJwhwtPZtJ21fEVTP12Xz5nfJcVMCw9WUipWhxrqHamXjUmLjLzud36",
  "key4": "2o7vvNpPBYEKj6MvXSDZvL8ZDmZYwyKspohqtzh1TFphrJZ3J5btT59rWoc3i9mUvkT5XJBNvC6u8sTtWRA2KGtX",
  "key5": "rPoxVdsgobJmD8y92ATirMmbrc1m5mnPHupePXptHeVjUtycaL5zEgn7idz5CMyEAhtRr5DtYG6QbhJCrSxrMMS",
  "key6": "44BSP45nLJtamYCkZnoovmzPg1wjkBmX8qYdsv9keFHDhYfMt6pjo5yTVhMcxo4VcVaSfQa7Pin93JwULjGLcsUQ",
  "key7": "5p6JvmAPADArRSihtgK3zjRinrD7vyAsKFspfaqEioxDMdoMAKkbHY9UReYJ8tG8j4dYyMcdxyRuK3cqNjxNF28y",
  "key8": "4q6FCekYMfds4Bn3AgoENnEKyTrHcvuyR6MHYo8WH2Zz1Tkbk7SVCEeNHPURCDpWhEHPRYkPhmysiCFx9qXhY4wZ",
  "key9": "SJvQ9kBMovhx8FygjdtrqgeNR11xYNx76srvcoUVD9pSCTWrV47upTrM7d3LQgPkPXFxL3hhzg9f7fySaKdgt3p",
  "key10": "CFNqA5qGmKBtVQwvhaBDzDxi2DEnRGeWi797AMgu11Gv7JdRvUE2qdSQT5QSSspcFqzwXRDzrZRtTBSwiZXMJkB",
  "key11": "4pzHiBdAGPaZ1kZkVuLoDF2nuzbYZzBsBAgAnniBMpnGGMjtSMjZmmwP7A4RiviVYWDGDQhkaSyCirGfrn8NZ5Jy",
  "key12": "3JWxUPQPU2Vg6DYs65JYoGYJWzaTdhjicTZK3jBhHTxqVezXYkAgpPg4F2GZHxX45T2KkRMBZiYszSu947t4WeMp",
  "key13": "5v7AzJB9WjfYPej41LgfGPwPaq9MBtMhsTCywuU5m7RiQDoY8EaowKKbne2tLg6krcwV8GXvJLnYokWVNwudAWMj",
  "key14": "2avcSz9mcrjhji8FSPFyjS7ZzLBVsBUEKJiYDWLvYCiUeGhaczNcmXyxkZayE3MwuCUPsgt4si2NQPMPZ2rPRUgp",
  "key15": "3eCBMVnM2Lvo1v2pAPTrWHeGEWEdK8yxnFwdEivzoL5ArtT8UN7M5X6Dz3KxNN38Pn9UfUC4qZqpNQKw5JKJhBt6",
  "key16": "52x7EQUFAa7jct4bpvTCiJKrvZdGwtL2xD8sJcxRg8mWvGp4r12iH6YLhkBnCDn8X9d6mgn1RRUyU76JGY995o5r",
  "key17": "5hpodoc5DQkJjYhTXtVP6XS5gVoqEBDzUBf9c8SRC1bkZLs9xWZH5MsjPB2pevqTV6ydJMkJuQTu64QTUQWxyQMh",
  "key18": "2ytHNXr9dXLK7GHgz4GsZGdF7CQeLJJYvQ3sVmsbxc5az2yNMjwAuoZmgpok8ZZcAbTgWgDPcu74MKJX4ztsTZh1",
  "key19": "MAiM5692AunesrmJaXMUpHqCavFV7smuoRPMD93b1mqF64ndSnawG1v4Kjsz6vcb7P871SXDcPSMqXNen7nziwX",
  "key20": "5AX5ARQZk2mdsnDuGFgVgoezpULwLwsGoAy7ExFryZpH5QVuvLTPCD6Pg9wprQepYXPKXtXA8WUXT7Rn5MbrfjdJ",
  "key21": "3Ei8Y9YGKWGTLb67KY2jnkb61PxnJYAYsfvtbWQApWGYw1kP8EKNg78S7bTvN6cTMbwS4SJY9ug7yy5xoedqtQ3x",
  "key22": "4fnZzuYvxBW2LoCxjrcXcuUqEsryC75sDBj1PmdKxnVvpRZcvERsnJTbFSjbbeebgx3FvvJYSXzQVJif5C6ST7jQ",
  "key23": "ArWWDhy475h3kM5zjjhAFbQQ3h5htHcKiH72ykZ4SV2DM8yPskp1XQDoKMmWU76ArHLFEPg1rdnXPXUnTeZu3Ya",
  "key24": "4AKRBfggxUD9yEfVErDreXFzseXcm1MDLaWMEUhKSqt655M4yh4ZzzS24mJoPjZq18L5gWyZRmXdQQgXxUeEQgFg",
  "key25": "3DhMxcMAXrWXzN5RUPNEzJSf5HsohpQXUVevFmDkmdJqhBnBEGNoZ81qY7tBW4Jn5o2P8Qpdfox4uuDw5SNUzDQm",
  "key26": "25a18Gu4y5KJpUaK8NDYqTNmm4AWvPeJFJ6ePmhULngP6eVeSrG3y2TgahCypHcRAD91GHvo7A4MUrkuFUyuB53y",
  "key27": "WaaDM327cG7TVQRKhT1XHdFJBMsQCVnDfrwxyEcFkMnw8zwtbYirqgdcSCeN5KV82KiQFuAsw6aC6hzQhV55SPj",
  "key28": "5FGNMLaHWnj2LYZE3x5inW8PbMvzG6QrRxQJyk5JQcARWcT4RB5V6pD3aqLQ4fm9ujaUb3bF6yhSKf7HH21mZY4z",
  "key29": "4mun34jmbUmDHD2nDZjifuDyaQWPcsmBkJGGpfXWKEQPq2W6GLg2PQT62YTTfrczEonD11jXMb4RpDLccE7BiZmd",
  "key30": "3vdRodJfteUiY9wyqPqf4aTwosFkQwy35EgRvGUMzzJ4hL1emR3DpJPHUMvYnpREuceS5vaQmewMXWqktmmS4NHq",
  "key31": "49uucYPUjYJXuTHpnEPuH3fxWykFXNB4xTTZkmMSJQQiYEaReXY9axM3UZxErD78xb6KdbsMJELx7DLyM4ba75ZT",
  "key32": "EnakkpgJAj7xkWuUH95dWBS9JYaSiD3E8NTD2t1vxzLj2kCo3cBgqfse3na8eWBJneEHzAGW4dhUc6bex7Yzuje",
  "key33": "4Tkw5GVdcSQnEKaWZiRSAgUjTrkKiEh6Ej5rWhBr6KEMT2AaKyjpR3erKMFXXKwF18Ka14qTTedvBip2tEvJagr4",
  "key34": "5uPfT3t9AcHC8R5frC87r1P6CDxSamBS6Tj5sPUUU9DBMVLEi1ykKiWLCqmyQnkFzRprcJTGeEzz1Ac7LuC1TSNE",
  "key35": "4ESHFUHvjVaa62fLVyBHWHBUgFFs8veFqc1cYvvdYfuZ4GegweniJx38HDH6VdbTN5BMUhi4rHyapnEF4k2B4e34",
  "key36": "318hfL11Q7hTzddZmxpyKBhG4ZU1YQ3rUjdk2abwbeCcTk5RMUzjAKE49kAzy54fEDASnu6hZaJZiMDvrQWBg4ot"
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

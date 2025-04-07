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
    "LktXUrmbvWFyZ3fVQWDoMM8VXQmZHndrm36oVFyAKDoTThzqFbnQmLkRMmtDZYJeXqyWSJA7ze1zmtKpEZkDdJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ctN7PDYCKEVd5td3prrQyqYnewX4tqhTxwYQnXAmLnJxY4BjaB1onsAKmURFXwNYnEa5YSvLti9dbW3MZ1WPjPm",
  "key1": "3Sjr6dSfokXPns4ZgomMjJgM6fTYM6CGXqkGFjUtyt4eUbkbRn9QDfhxGSop3iL3cukUEACtTuXgZd4enEGkLnv9",
  "key2": "57itAFKMnNheCpuQJiitQs4jXDtsnBzJoaXMEmjfCoX5jPXX8DN3yGzWTF37GpebjnLgMVVfpvbKxWHJsqht6uaL",
  "key3": "7fcgcajQKtr5Cw7KHkoZ64MtzDjv6xzUpQe3Gk1NMNp22E2uiqy4jyQgeSb5qDkTR7AWX1ssurGW14VLjm6pTsa",
  "key4": "2HmUVUDwm9Gy4HcLddMcLi46KjPgKYZv1rALBpmqMJsbhHuLzaWPKXzEXNeas8y7cjxiiwurw9RveKmZmndhf3L6",
  "key5": "4wdQNg7xPyfbSvSbeEyD3Fho5bS3TcFdcHPV4DMySG1SFT1fmX6pmEsX4Eov3LSKSUEV4zdyN1UwzdGE4rVCR8tY",
  "key6": "4XP6bGeFiDTdnbSSbf4BT2Tmu1shrDqAuHfmWtkX1AtGSfEcthQKioxybA6ENb9oMwBNpFXVguwCkDRFFhoSzCy8",
  "key7": "2D6x9AJLRYKnj6WkPbE9ptp4jAHB2M89cXirp18yivWhDiovtrHAScrJ6HA2AAXiMQ2sDqSc4XhZF7ShVL3cgB63",
  "key8": "zuk849q4m8tuVBVN4hmdME6nH4dXTvVW9GNrvt2fsfEyV1Ydphspac2V2JHhNMMQ3echzmL6xRxd7KjdisimdJ2",
  "key9": "4NJeSZ4xSvAr7VqsjB7kzpUxJY3nAjTR8nX2Z9hJ6vGyda9a6BQ8Jk7CL2S5DAkvXYRm6j6NQozV8V2k811S8Pz9",
  "key10": "21ESUentM6CDpuSeY8bmcdrzWXTQEufAkKvjtARUK7aHgVzf46Y6ae5uFSEyXUZYkNctjoKEMifrGVcRtRKzSouA",
  "key11": "3K2bupJd8PBTM6A86CCpYkLbfCqQasjvpZgNYBcCmLYPJt2DLdHePwBsXPZqJnE8Tf8KKoRBoff8ymFE2iJxjk2N",
  "key12": "2onxFLu29eaFs6A4Ggcc8VUUeYVzyHrCqiKVQthXS9G2NQ8MCdCWaPk4sPsx1RLbgRzrrZAMqWPbFSbEcDJUtKV1",
  "key13": "4yVWrVnPyJRqiSZKQu3XzSgYhGxK9Ld6UnuPpTkpa15qeZ3Xxr3scjketrHdxuuTWwo3zvfSAjaQHuujsQjyqPuK",
  "key14": "5ddawGGA1LgtncV5gbipzi7URox1HRL5tpNgEYthC7WqkBKvtKaFybccnfaoeZsvaCiLWvSC2Qb5KPQ7f7qcjQiA",
  "key15": "2n128nyYwSNkgo4fRxgS8RucoqLuwNgL4idouQo8TgmbRg5rAVCKWoBU3q4q92wAn9vjZkFQfNKzhD442vqJG8AF",
  "key16": "2he6TUR1hJNPfxh81DBe1gkw9hoMRvDuga92RB5FzR4FP7R43ndFwWZ4jAEgZx6hFFpMLQZ9jcWudvfK2XziaDkE",
  "key17": "2UAoPybYVGtT3R8bZ7ACdKCyw827SFsQAdDGi23Qz5qmbxJpzhZ8aQrP7RB7gUULJP3xm3HR347xqxmmXkkU5L4R",
  "key18": "5qJVqVdnWh1jnxMnurHXWtHducHdiqy9bBMazJxjBA1f9H2eXFUt6xpewxVzYBuKZobbh7zfWpKngwCEJpZFfjhJ",
  "key19": "QfQQq2cU2M4Gs1sdmk5Z7KZE6cew5zMLUPRhwUNjjSrSb14otu6Zagsh8y2VPZTrQgCr6jydzsuTDcxdcZBV1uD",
  "key20": "d1WKuWqcE7SnUzs8qrFdJhwBdk6N5iESukxeP53L2qCbsSzGZCxxPzX8u3rtno23rC647nsehvZgcfhWVriYf3S",
  "key21": "3AEVjUkDL9wepj71pphLjB3q5ZAjUMnaqtT4AKRAGxprAMDmhV9yzQk4nbTqEXgnfMnX8Vq7poGUhizteHuRB5uj",
  "key22": "5rrgP8wXms53GyUdY5gWku8pM3N1hiBJNYRWPfnWMntPgfgunqEsyz3pVerrKi6ygLsx8QKvGPMWAebA34Av4yap",
  "key23": "21pya6RQeMf26QZgogREijqA86ihLzUmuTrcfGAEMRa4Jv4YEYearmjusBDJ34tiWvvhZkTBNCv7FNidiBqWHdXr",
  "key24": "2vSbCGU9CWjeLZ9qqnZpGeHZnxhqtRgFT6aEyjbjmdhwLVJA1hi1BHEbNt7B2dTQipUXVikPxVPFYy7oV8Ck7HTW",
  "key25": "3PBNZA56Xw9NV8psc2AytsYHBAogam33NDDSEWzNRPnMimNg7xyrv8DaLN3PVwpi2jUw95gKR1BpKjwWdJF3ZrGG",
  "key26": "4LAEQ6DZAqmJB9GYSp9byr4eJQg9HJLjVBRuPEvyLyHvaNB39Xkc72Qb7RCGqGfm9sW7agQp8y26ceb2AXFAj2ZJ",
  "key27": "3uzfmJBQkyPSReyCrX5iJSx6pGEVnyA4yTcEGcFEPSQtmDbrZBRXTD3VF3jYD3X4Kn4M32uqFJTaimBJwCxYf233",
  "key28": "413mtpHMQR5eVad3bNDyR3Y1Xb4RfgkcjXG2FSekYonPi3165juDHkDwkntbv6rEuUASPdRGu62dMPWckC9wMjBn",
  "key29": "38BKdECq1EzUPcSySu1qN5SKGNPRJMmDjW2F27cvxYswKEQUuTC2JENHp4xkfrNRdhncv8EuN8uHqYccjBiN92gG",
  "key30": "4oT5sSmC3Pk5Ywh4LmVry8mNsXN8ES6BHDp1AsXAHm6oVrVkuizMFwcZUAy3GTVhHYPSyQ97GUwdAX7yaRNEFH3g",
  "key31": "2FWJL63YW41iyTXoHFcpUGJ7fwkPWuYsoV6m4kWN15KBwi7xR1aBvytxCvPMBMEc3fjwMa8GVWRM8rLACAxLg6q1",
  "key32": "38hoBV8LUi8Ss71p1xMvT4WUmAQM78bR5HWJad21fA1RejtFMM9n1i5taoDqB7F2pxTXwJLa73aWn2RxSW2hxtcf",
  "key33": "2NR56qSpVDNTWM3B7cppoVWTzPYHBxWvqhJU1xKVapQNZAMnpwzgUBdiVMkxAGPK9vYXPSgm3TC9BnCMRAxyVyQp",
  "key34": "5kcwZWTB6sGD8wMScKNSGdjCj8AaWH9ZMujJfwMRnDTZvPmigvu2HM7uVZvjXYgWhBg1y7Gak6drzUuYc1dRK5Sa",
  "key35": "3yfamTYrxtvXg2h1fDDWEgYtesQH7mNeAXXbPu5mkbvFpxFZMLSQwZeYVGQqfJ5ho2xch1s8VrLGR87DBWuuMjmK",
  "key36": "2krh7dMSVRFyas49Zq4nrtbNmEG5L4uRFLUEcRhGPpRZbwGnFMprv3FJo9JnJ685FsTeeBQD4WdGby8mzW1hqryc",
  "key37": "3Cqvc8PjMVyaemPFWL3AxRV4QEyjGb2sx3ZZkhK9P6PvwHCuRZmDiKcqVufuqYhbATFqyuN9wnY1MGAgWwEQb8kJ",
  "key38": "tF62QXGCzNoSjGwxJAcEXf3ariHngLdXQi1TFor9cV6y5nzEbywxU7G9ceExoNoyqJmPnATrDP7ZTvdoCbfkHSz",
  "key39": "35NU2KeYbMGriLHS8MsafC9paDBvKzG84tAfst7nt9WmMWe5LCvEnsMbd9J1Enexo8FkawWYnqMV7ocUof8NrdxV",
  "key40": "2uXvu8BTQDnZzYHcPhRizoicjwqujZzzCjRWRjw76AgbkKHdqndC481bwLYBMrmrgpRenjT2NQJo6xcM5cRRgsDF",
  "key41": "2V7aSFcGWcXib5uNBsWmqAF9WVKonvqf5dbA1K5oiNDVTsiey43cHRbgDGf4UoZy8eAVkAqFdJBNu3vuRoJAzFaT",
  "key42": "2Ekrg71cAqcR3okRDdMtvo4Z4CG2Wnve2acp9pEfVz6k5a2wKm1fiF4AFipVX95dykpHLeB4Y1eg4FdufanwjME7",
  "key43": "5tdZiWDh7i1yDofDxhf2agfXm2p8iKoaELuPpWcS6gNrqHjwquo5y9thow2CjeWb5LU5KJ3cFEmhrmNMCDBG8DyJ",
  "key44": "62W9RQMBSqgjAJt6V6EgcQQi3CyUXCJVuCL2X4miL5sF447HTqkLSWcnE7LyyNg8jivjaan4hNSpQJyqeSodEoAr",
  "key45": "4ycetkWFfJUE4mdHKtKNJHmPxnD5SKH1vUrufLoHVL3SPsAJvv6HeTQbmjfyeGnTkiB7j7ZguEwUpSy7iX3GA5d7"
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

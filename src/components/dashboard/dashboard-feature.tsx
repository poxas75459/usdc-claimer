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
    "4PRgycd2tV2jdKmZQqvpVqBTTpS6VHdy2mmb5radM33tAjpJnbWcuMNfNiP7mryVEEYzPmHYCRNwkqHquES3aX4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dTFGNqZ22t97SQYoK4ynFpZQi1enHeGuFmHtQFnHEXEY5iXatx2xAbsu69n2Uovx7XrwKcLs4HpCiadjfUTCtsT",
  "key1": "4YggC2WTYpdJEAvAZZ5rpkUahX1iKiVKc8Qji43hDEJbcPSpSpeWJz7LAPeHeZVf7V6AEJUjmWwJZR1chjivkdtq",
  "key2": "2PDeuAL366HKp4NVgFxHYhGgijL7kwS4bd9s3iqJaTKhZwDiTnNTyUyJpSRGEAM77DjacQzSQ1wDtsFYZbmrALyd",
  "key3": "4rTdQoaU2KjTuX7rRsLnzDi8Snm8jbEraocA6e1NpDdCweMQc6Dr6y4Dcdxk8E8WGekqrWPt4j2XRJXvyAEcDf4v",
  "key4": "3KmJHhVi7x7FDH3F1L9JHY74Mk49DVfSEFsfu2kitkJj8f1SyAYZVt4noCN1uRtRKnBuHECnVpdXCvkFJj8VugXu",
  "key5": "3C7dSErpBy9yosvHf58MEQob6B2rfEda71Br5TjXCBg4Z6GqEzkrH5eS5KDuMZE9euqQXpHSGUqXTbjcw8AreFHT",
  "key6": "3mM7ZFn2YhWZqfia5Kk7fQjuDMRM8ZDZQQN8MLfWh3yi3sV6Jgd3NN2jQc6Rq3sUpVkdtoB2LV5Mt81NdxLBuJBH",
  "key7": "5Hs86TD6F3KVP7FBpJ6fvntJyxyfVQKs3xwunAUAPJB7j57AxaGjfmz2urW6XsYGezBnM6AdQuyidFRbLZj5DJK2",
  "key8": "jjbDA7azgdhS9eRBG84MrKESsT4NDuJyWBZhQGzAULzGnMGtrs8fYfUUKEXYyh5fmor2nqRvLoBJRBXnho8XAeH",
  "key9": "3ig88qZor1XXiQFyGwPjBDJGUw1RRYkv17LY6Kn5cLMy7G9PjR7mXBpHXJLzST3pgdDHrgT29ZGxscf14RyM5hCx",
  "key10": "3ip4N9KdmPvgmkk68jc8uYavWJnGSd1rkxapf83jmydxYm6RDM7zjDVdNvEK3zveFpM3aGzqb2QDYUCctTT7mKVa",
  "key11": "sX6TER8kfZxVJ5fgZ1JZb3spLgv4vKHETNkCu5qt9JVN6Gd2wAsHGvdKeTz3WgAT19gpfYB9HVLwB7pTrHUdxfB",
  "key12": "2LaGrWZTTcDdz7CACMHjNBcRV9YW5QouGGo9qrHN1Wh9KjgayK1NF5W3rJCPDLmotHGixtWUd8wT4kvSRxejzCD6",
  "key13": "499UWGmstgQKC571rnV1JUDh7vGRjzapVfxzxxiDTEtmh4QgWTyRxWgFwqr6JYNHZpMntaapzXXbAWJ7nmJvoqfn",
  "key14": "fQSq1UZep2WBhTCjmsWAPJuxR1pcFjXZQkodz7VFweSv9nv9UzT9kWSa4zDdDFj6amyMVBfg5io4wMbQuzp8E4j",
  "key15": "5ce4SfdHKyB4usevRHs9rxyCT5MHmAKB7Dcpq2WweU9nWeRspvNnaMU9YkjuSB31b6gx7j7BMtcQ82rJfXuZpM4f",
  "key16": "4z9eXYVNYEszkau4hn7F2VkbduZnd9xQBuNbwJEY2UKtxznn9GymuUXcWh7NCwpvbQPmgrxXekFoXsZLg8ZQHWXE",
  "key17": "56vm6aLb31X1vLV37hMksCeam8EfsJdvGbwhEz4TiGRxNxWu3xtghVXRWXPcWwY8whCVFdv4FXd5KHbLouqon6xK",
  "key18": "4TzyxRrb1n4FBmBShhmgQkQRhtjYfzHoM9uEm17jo2SvuzBazrQqZcH3g8imH3zMbbxv1hAn6Sm4wtmUdDr6FLdW",
  "key19": "5EnGCGYSzRtETj3Y9b62JYpRU2Q3n6AXXFUQbtvL2m6V29QPAjNiu5J4VTPhGLpsWuV93VwRxDBDyhQNLZn3F4b2",
  "key20": "34xSfTBJ99zKaqoLZ5LM5ikoQBKQLmveJd6rfK4KRLXC2dQgrPYv85af8fenZva1jKQVPWLGLghRHNtySCEJ7E8T",
  "key21": "4B5j9w6WkrDY56U7bPqU1LNxLYRBqkrtgzWicKh3nNM1n6Q8FmPmuGTcJPZeHYJMY5obbHZDnTsjVAwxLGaPiUP1",
  "key22": "3UKmQyF1uhPJovYffR3fHoa44UNedzAADnUjfm3DLfGj7PKWHfgdqR2roUPPjwPKFWZL49w1et7pPSMwGwWyMis4",
  "key23": "3i6cGt8Npx8j6qjgK8qRPUC9zqnfy7oc9rsxf94oRQTnjjFgKkJh1uXDDZmSPTYUx4hrEQ4BC97iec3JyfJt6GGU",
  "key24": "46vWr8cmror9KR4hR3yQxnYDLEro65tFiiqd9LhbZr2eyojDg1rNqmC6mfagueAJdSFy7AGFu3TaNPnHruDw5KQ1",
  "key25": "6exWm8h7UHN2YEdMWCq4HdMEjjSisLnFi9vrmu8o9yBAQPB2b68v8ytDBbGW1gMwYJKKCGK3Wx9NR9otjGhy4LD",
  "key26": "4GpejGy3UVToft4iJzw5PGM3KrUpGk9XdjckEZaQzHgxy65NY6JTmKhjEWjwfxAYzmp7X6DYSBiCRJkDfoGeptkk",
  "key27": "2jB7wii3V7j5E13zVj4Eu4QKREGqMzdPLonBcHoLdLmeRptJPun4BBxP3KX78ZcUxhHDJchXeA7ShtgfyeUo4xcq",
  "key28": "nfppfGUy6VRC8GfJjSociQVkzi9jpKPP9Lvv2BoZkAcuejDnKL5UzKKSiwZeQtUCCnhjMLm2bsNg8mYBSpzho5C",
  "key29": "4UuyHkhVsm6XdEuAQE1Qq49wL4bJqivkE3FG4mtYavDAwjMFVx7JHYJzRw2pZtQM9xY6WNQd49P2wB9EdefXQDxr",
  "key30": "32TFpcsriFBNvmp8fDjvkoe3VuAd46VxLXqMfbND2j7gNzh7Lyea1yvXth1VprUa3HnJvZKuu7RfmiAboRojLw9v",
  "key31": "3GgpjVmoTBicgSYg8wRZ8uNgqmnaCyd17JcphusKNpp2tdXu3rugxYsvdb8N8wYuomoVrSouh1NpfdJfrezRWHjW",
  "key32": "3AWG3hDfoNPsmGBWAUJ1j5Cjfu4Dh8r7rBDTbGeocLVkr4gVLnnSxm44bAHePG8pVCTTYcaTvDqhhEAr2yyNBfzK",
  "key33": "3x364Gs6fzrww3qxrwPQzDAZ7krH3JKMZo6CAQvcLqrwUZTSyMXokz4HtoeP6X2PpgLrmAwXsbBuxRoHpNffVCgc",
  "key34": "2uLx3f1DSMMQfLcsKNnfHFCaafUBPBrRfZRF3Bo6KQ3jsn864L14HBA5NM9Kf6mtiVqMtGWnegagPD86gE6WDD1L",
  "key35": "7MP4TzVm3LLrXYxUQp63pb9hrwjrFbkJFrGK5bXiydvQLPHqJMPBxbhr7eMQFAzPqEvUEU9kHbxHFrY6YEkNrjc",
  "key36": "2b6NtuEEXE8TGrjupL2VoSfkPnhhp2qZcYPNVsrD4HtX3iYoPmqddB6QcwNWBBanGmVJAYjguJRQde2HMPA7GGQx",
  "key37": "4YN1sddNabZ2SxDWnsEAWHJdXzwSmWLLmkqGKSBSvRFgNNqFaysjWbZoqttr96gu8fw8uRv4WkBmTakgiTZS4Z9g",
  "key38": "4yCPtu4H7y16qcC3FEYF8oTFhx8qyGvPrYHB3tu1zpdEi6j4E1TEjXpF9rEEb95rGbQqSomZLmmckcQZNxnjS2ho",
  "key39": "2KupKrwc4g56PEoCbxUqUnryu5f1f5zddwarG9vnSvqLSP4pG2U1B6PVyfQJ1wis15b9GGCJQ3nSBz8qxA5FKXnj",
  "key40": "2Sz5JFCcXBfWJ7tU1xvqPVYgQHJJHJxN9jA8WNrF6pBLpKYbHvLSWTtB5B42LYzxUms9ocTTs39sa5sYUdiRkmG1",
  "key41": "4ASLYP8FDq6uPc4uGv7rQQAsDA2t6RJ6NeUgn3YKqrXisXEcr7hWADzU7MAHkKPaFHrGkz7o4AG3AsmW4nYbDZTD",
  "key42": "2voLWGkwroJjWzow8euAY3HCGWK3S6Gish5paxrYpN43aGSJVZcEgZvuwGV4qffg3j4T6vdjDYyNkq1XMbrHnoXj",
  "key43": "4wShwMrsyrzVFv359VVm3v2J5cHACWjy4LAs54xBLpFp8WvRrEbUk929cbd3t2nGoWu9B3Q844TyXkfUHinoDSms",
  "key44": "3p1XxgEHq3p2hdg93TmhoyUPA2GfHeJ99PRVZ13kL1noYXUjhucbJHcg5ER3RXt8XH2cqBXX7KzGwkVP4hCCyPx4",
  "key45": "eVBizcfvkAiiFZesNUaQWz5FdKWiRXvSSwtRcYLDPnZrdgWB9Usa3vFVnfa8t2f5fGaogZLRK5CyDXm1QtgmP5S"
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

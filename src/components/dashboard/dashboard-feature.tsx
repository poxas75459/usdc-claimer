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
    "4gjdj4ufk9ZkFwJc9mWcjHmqce6gNTW6fbYio65s5ivWv1SwAyXEmptVk4A2yWEPgxdrciTfkx7q3KNAVNN3QMrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fA6r7tL6xqynAkcbqCjyhPpJqXMADhQ9swyiBKGkVnqqNd9hzZ1xCLGpSDNoT7mAqF4vkLQQiXaeD3Rz5M43wQK",
  "key1": "42si6o1ybmF5BE4sWoU63RchWKWEn516EYuahgba3hCusrRd2ZLZEhxsNZd2qfsR5mJKgQt5DWcjgwnuhv4ysQy7",
  "key2": "vXcFu6nK75EdKNjspzQLoJ5EwpXM3K9PCynPe2kKPnrfL3gk6a5yP2rEt694aNQjnu5VqY5Y6ER44MJrx2wNMTm",
  "key3": "3gq2Q7cRbkPKodRBYobkwxPvB3KzywuFBfdJRN7Y2BMBqBCtpCDtmKnqSAifpSRavTKnFVZ9xtUX27XUwGJZV6VK",
  "key4": "4C9Hu6o4DNph6rSywSMcdA5MAkpBhHtg7eKfYYYbPGPywZPGEntSBAcQL4idRYyNFysRGV2ZY7uoLb5SGkzwtyzF",
  "key5": "EztMNZxE6LfZVMcs5jeuoKoqXAGEy6PfVVq1V2rcj4u9fScsSKwcZEpRwHH6Y1nH2zK1hUCMspxw5i4hxKcwtwc",
  "key6": "2Xd1WBnNUbLMi2UnrXcmg8ydYPg9LjxHUyociyyuhLaQRTGjGSvKSM3eobM3z4fEVqRoccgJ8MCBWx6s9gfjciyf",
  "key7": "4abAFmFXHALFVzH3LiF3QNBuQM6ppYQE8hvUcqMEDFFSvVEMZDTPYkWu1KUc1V7K5QRBh1xEhmMTFuxCwWi3t7Y6",
  "key8": "47iqUic6kLn5URN8RuFLriD3g9Y5mdjhSxbArJSAsJxWW5hJGmw5xW6SVNw4sNqvtEqTnwss13aSm4wZUBhj7Edu",
  "key9": "2jrTVcX465icKfafe3nfQFDZFbJNhqaYYySvDTDqKvhQz9qUt7XXMCR3bEePaBtnnvryGpun5w1EEmF1N23rwLu6",
  "key10": "3wJcEQmcxird8VFXkzprbNSi3fLQfHHjqbzzqjJ7VtDP5kuwDMgfkXGMAttYjNW6x1u34L92sHbswH6znqDNHcRW",
  "key11": "3x6RHogLESHb8JSNzzUv8gXaiKxs6cXh8YWg2bF2Ux3bxmCxtjavEoLYYJEDroQbiAvV6GGg51L8jW7wswDvVSdA",
  "key12": "5VpgUceGHNAP6bNWdx4EwPgSfaJFWCpSfhmVh5wGX1sKatP4s2kSnbdMU5tp139cdJS9d9hdACH6XWzF6h4FCiz2",
  "key13": "4SB3EURqgbm27Mux8EEqrn8B5d6T8ttewUaQBQyacUpVSCkiFYgQpdFsGG3JztevtpYj3WLszEjJkq7hYKTGbWVM",
  "key14": "DivY5WeC9eyjEwjgv3GivBKa5Qab3e1Rzo9eAmLaoUkmDQADL6H8sXM9wtWvxqLugcUCbXSGhLSrXCziWFGT4tL",
  "key15": "3gU7HNRkF4wDwV43FiQ7FBwvgVMS76Ui4UDEYrjBa5fBGBZjwVkjUu97GgKRFigy3diqUdxFYDeH9kon3zXG9SeV",
  "key16": "4nxkiUnbMdcDCEqmjtPjA74hBx8Ndn83xVLPWp3fKeECFtxL4hQrax6B7hKFyy5jiY9t7Dfv4XD7HsFayqASLEZ7",
  "key17": "qd2tJ7gwSr7zx1vAS8jWGJxD9wsq4wZVv83o98ptxctbCQBaX5vMM3tf7Rp7nyoiHuTouWBYraWqVGJcmE6w6TS",
  "key18": "2DKPJMTPCvjn1455Ru8DoqUsTPoEYpUHCD2B8Hfhck7xw1dGNo2i6H8YjDyC2UsEzhfoD2T79WWZ8vdrXq5uK2bB",
  "key19": "nggEaZKWpjPLH2CiJXJMhhv5oGQ6AtFUAwkvbuSVTbSJhYmsoyRpQGyXsEQo2UteRQGp6ztmaq7SWcYnxEjVZas",
  "key20": "5XhhkSpNu3T7BuY83yGMZoAcZrXb4QLNPVWtef3N9qeXrsoYRymczMGZ3YYbxNx5sme76EQSPc6kc5jTu86vjJ7K",
  "key21": "4Lfu1BJgSiLwLavTxYn4TzoQsG2mMnGZ4fWLmZ8wemgJ24Jfd5BdRFyfa5bZEQJqJmVE2rBHruGfYKAektMuJCgB",
  "key22": "APLPJY7BbkWvowTkMAyhq9JvrkkfMLmoeqSFUuqLDg7ca5BhqCtjgwe8SGLDFbdB3XzLDpXvFzZnbiFE3jNMPsk",
  "key23": "5pRvebJTCSHtyeCEJU7wapLxjtAs4p49pAYMDvan8Bj9H8yVGDnsihzPYhq6fixEH5LY2Gkt2jkbaxN8x1iiCHvZ",
  "key24": "41UJ31M4fXqStsA6AZMepi4SvSqfDUeY3iCV3q7aFv74kT8AUczREgNqRAWPpspPHiL6Mfxgw875vin9miTdSRV3",
  "key25": "5K2Tp3Uj7MKV464RM3NE4qPDrRWvCsVATHvpir6DbvCAb5aWDSmXjqPUnVS41foXCeRjBNRsuCyTp2mn7GCGBCVt",
  "key26": "3Z5gQycU8j4agNao5T1ZDC6Ea8mMZTTHMsFnQkzuSm5Vbgyh3RByDLW8BUvCNi7VGgT5sYE8rB3i5Rs85XbYAoxV",
  "key27": "RfQHadWsMcZc2PdUNKs5wpikBegqCmNBFMBwj5X7rnFg1k71a7TPZx67HCuUCJqp4cQrXJgac4W7hyTLD5ue4LQ",
  "key28": "42gJdEjU7UMVk7nj1At9tX2za7V4zvvwLRiLs7eekx5KDVUapUPMNpfGb4yfsWgJ6676GK2ssGdSw8MY3fWdr6ea",
  "key29": "5812BWWcVcujmvxJDk3uKfQ5JqVN9CuHnH77pM7Mg9Js9S5mZmw9Noj2AjjgpGdQvtGKJFUYZz7gFLG9dSNWdUpe",
  "key30": "4nhNCoY46hG4kGUBnJ727h48r6CCfdJE1RXyjr6qTf5eyaaDZqyEi7uWVZgtaa3vv8mKinNxLCoE5Ah7RjwyfLL8",
  "key31": "2x7QEUckH9oepfRfDPMJVzQaSAfu5RNGXsDoC83XEPrcV85EQhjQrgdCBh5rANjzgNFTVUayuSUFYX2miE12FvpC",
  "key32": "2gR8ujKoBKHZizLnVpFks68zFAXWV1qxhbMTRxa4EMojox5y84EP8DpqJaAkjnyaHdk4WyPVd6KMsv6fJE8Z55fw",
  "key33": "Zn3kpFoUngrSLZt9cFzqESZPPunaBpRFf747a3W4e8Y28Ep7jvDJdw2vriSiYCiWUwkn6oNxuoG99PaXkkwvyJW",
  "key34": "3H9eWTvuBfM87wQajge7bvJ5NpNxybgatmwcMpS2fosCn13u9LqZbQzTu4u8jTRpt2cZoek8Svb5k6vaRk4RQ3Wy",
  "key35": "WUX8Vh8xtfBJjhbAr7HE5pgLEUKJ4B6F56fwDPruSK3DTzmSHae9ZhxfJKAGEdTh5hJzMhFy5ZkAH8x77fuqZyA",
  "key36": "383bBQqgs233AUY5Zy6TXsN91FnR6H6bHCWP2kUwfaj2cYHvNLYceXLytThmg4vR16BjSkvSUQ1VXywHQL5FasVV",
  "key37": "2hkARSehnzGgnk9ukHBetW8XtjQP8ZKa5z5puSVowEagN1NXi2WCwpRRRqL3K1gDVDtPyG6nHTK6WWSBycRGf7Df",
  "key38": "2haibmKfDtEqB5rFVxkYiVxB54EGeDTTU4v7PU5u2ogZRbXMnirik48H9MFPCCJremML6qqzHDLJ66ww1SC2Bgk7",
  "key39": "2TJquPBZtHnZaUW2Yc7ox4hf2GisZiedw2XUEPVBi8mxpb49rpYjSHKxemrLWeQUn7YwL5X1cXR5hhsKN1Mub4gc",
  "key40": "25USQXHz6gxQH64hPYw1kJDvUck3HKyRJMTMs5qheFuRZmwbx5hkAH85Kikvi3W9W4C3uhPs7Daf3yaK1oDHz8Qa",
  "key41": "278Wj2z2HKJxMmgi3QcRDvEAz3KoEU9848x4Q2LXH3iZXxNB1jsKn5g9iCa8RA9k9fbgkwCEnciZsAh1nxzjmPda",
  "key42": "63vftEhL5uQ5RSfYuAaQb4ftJB6jpCKptcdSoraonR3Sryxx7Bzm4rVAdjVnMUQh8er4bV3YjPL11SLk3pUxHaQV",
  "key43": "4JDhoaJ2LWN78WoEV3gpvgE9fzj9kKqjr2gwEU2rNim8CtKVBhv9wC4d2CcVcZ8tWUHbggsQzNYpBYX5uP4UPoEx"
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

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
    "61H6g1o4cw562TDTaYEptzquStKCH6ZoiD6sZd5NgopV2BG1jDcUH29NqsAYGv746umYWZEWx3u4DgQwCsktRSWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CmWcrWCuSetBUTrfHo9xqPSenQUBacYYLmzaXNz5g1fKaNJM6CadYrYxdRizJ1cUuPR7BUpxHt51yYfqMTwsWtq",
  "key1": "7NYMJMtQf9DJNtPjpKrJbp6mw7BDsFUM7UVXMZFWzRpL1ZdDfm755G4qgMrgq9UjibxqH1oUxcfoDF5uk7BXvrz",
  "key2": "5Ai7ojo2kTPHnmi8oYt4Bg72T6LU1ocdb3ZyXjc8CvJ27S6rq86vfWAdQh4sQnBJ3cNuPYMqta9MssrqT3XeZFr9",
  "key3": "62zuf1k32KHhLwf4GbQtFNFAYSJDfrw3tieXqHaY1RN9iqYetmH3S9YiNnxqajZYRoE6YkFod6prs8XojcNBHfHm",
  "key4": "4Dw61kUEHZXSgktNm2YWFGXWEoZn1ixghwVJPwCYDqakigAipoTbyQ3jSB1XG3VqkjWrDyrWHZH3P3J1EiVFY8mo",
  "key5": "36zqfqSXmJ7VWBAAuY49oBaBxm5bJnDCUJDfbxkjPc3BUhzNDUrD4HmhBDa3MYq1iEjDdB8j3ProgPckj8Kj5QfV",
  "key6": "3TBN6UzLaFXwFfffSPozSWjFBTdvh7nrqBWEmfddFVpLdzpNN1GDLmsAQ6DYq7FDmcjk63YZPGZ9RrAEeiw2ya4W",
  "key7": "5M2vGScPyCEJTjqBpE1zkRT3cbsEYysAKF1KGPt3qfnKvbLa9baqd6Jg1HoTTMfQxXGC5iiUhfhGbasNFT9Jc1C",
  "key8": "61Uq3LyG6RjiYpDxgrnfp6PE3jwfEUoJCudBGpVaHG44C1DmX5vwSEYciR11E8qUVPLerSrsCaUi151zaqT7yi4n",
  "key9": "5tQgk3VuVoAMLiaWo5joDZSTAFhLSyYr7x2eJFuiamWFFzwGQufuKgpaR5YQ9xnuUhSjeMm2b8afYPEGQP2oSxkE",
  "key10": "4ka5nx2ZKrW8UsgZrhRMk4TVQsGbkaBmUKv5QyBrjHj2At8tY7ryNkgS3sMKotcByoRUmtnn1eZayVxwnXLy32He",
  "key11": "fpZcwQt6WosXDTrDym9KEb6D7wXvxTVLLNkFRcwnayzbiZ4Gagauy5wZX3k8gxX99BNjG968LTkfaQYXNKLCymy",
  "key12": "FoCkqYTFJbZNE2bexGdBFK5cjQi3SN2m9peXTSabSXtU5mYzkGjoTK486XcZ6A6QYu1uzrqD97qWDLACSmiwD7u",
  "key13": "4AR83ynSyFjqxaiHomu8y5Qh94CGJvYmGycnbEiK5X54yREDzQqPomwJe4u4Ez9wo2hKAnF5HTSUmQTS6MvYgaB1",
  "key14": "5ERTF1AQTydfovUYPPmG6XdpgEesxMstzTYKk7hrfATaioKqusyG9EbcjT21EeARFkARbVhv54eeyu61MWDqP9qe",
  "key15": "3tEp1TAgDF5t7atMpdJFYGYDMPwfaWfpwVXEWyL4fP9DEgbwBWjehZkXK1sQuQgjwQRN1GqW6ruYMvo4LYhLZuPX",
  "key16": "5svVnmjDQqJnfie6T99SEHi7Yudc2J6TDvTYA59VQRT3bZiwtewzZWVPsyxqYcaY7kRzumysfvANW3cj9SyFfQxr",
  "key17": "L5PToD7vgowAjk9S6q85zBkfheHF5SULCdFJ9NDiN37D2C1tbTJkhNsfW1DA3eSLN8msPRVbR1jV2EigG3Wc2Jp",
  "key18": "2bbB2ZXMEGHjtsUh1xFPKRMnVBPZtzw58SEbTrcHNEPwHFjSFUoWA6DmUAUBqTUAcuns6R9tU7EFKKpG7UWYC9UF",
  "key19": "uZLtNCd6CiCd2nV4RbsxDHRvLjVS1P2C9o6nLBK8YMJF9BtuxFZZnWLwpsSXGUE5LpuSUqZfXKSYfz62MhhpcZe",
  "key20": "575UWuudfR7htWHnD2qsc5b5k2zjTneGHfxbdrcz3cFNwgPjyHbHc1u26Mr8CrCxWUejRrTWXz2ZMVByjwSKAKs5",
  "key21": "HTv6igTReZR4xD7DvtYYJbRo3JHcFDBtxH4Upj8v6FEEwpTb5vHWYe1g62xQAKdbSnXUcYMLWJqyjAwrea9rJN8",
  "key22": "X9ptxoaXz9T9a1FAgybo67JGZxWcaUnHXUKyMAPAvB8PQgBBHdsTKQcM3y5zeKkRiNTMF4T3c6VRp6UnUa5CCea",
  "key23": "cpYsgUNL7dBANgpSf6RvSrVaUg7wvWGXgnCikyMoHG68AjQVSjX1zumGrCBEz3EEKdaJMVdDF9JFWN1rRPDzpHi",
  "key24": "2CoPXF91tbef4bRS86fNWdBomn6G8hXrLpzGbNkGpMreincPeePiQsB2TGeY5XxuDSR7VuqPumDbEMSgpERSdN3Z",
  "key25": "5GRo5bCxb5nU1Z3MkzYX9Ft5FTnT5JgFqHZ3vPSYE6sqsi7ecTXaYXT2krnb7Mm9vLnNyz6ssMpBQDM2e23SkhZC",
  "key26": "2QtbU3bHWL5Wcr9itk5Me5KJu3Mw1QoYh1TiqkcVHJA6SJjyADCjJGRPvk8ZYK22eqyzJ52eEBo2M66h8X9KoUFy",
  "key27": "2fSGjfuwbfjH9HbgqzPiJUVU5U4yqPxmsYyCxGFuyp3Wmd8MbD2vYqukkoV2KNGSM9KfLbuztmtpUnCjsQMPS1UV",
  "key28": "2U7cWV7zPLcmT3ocERAQuaYdN57KRzoguDPSxAqkBt7Nb8zAEa4MoZUkAUe3rcPwsd4DNZNnnJSNyatJDsn2bTYY",
  "key29": "6G8y2aEf1Lk19SrknWGyz376GT52LaMjssSmFdjDDdYp6r9fxE7iRgz8MkaA8d2x5xTVoJrUCvZM35Ejrb5Cfpk",
  "key30": "39vZtNKaeNgKY8CX4eC1fm8wSUoNdUoiTvNNRkZ9aprqs29mZo4C65UxkJpRtPwaPHPG3FbCuQPZjEd4NniFVjR5",
  "key31": "TMAvKMgfNsi1tVUb36vkD5T2Ze5yb1UobfgTN58eV6vmana7C8oVj3A6WLPh2cmoXHXdActRQqwoX9mapMshjUD",
  "key32": "4UFyxxAoHQzHrfqsYQrAPjfm5cVnf251sancQSoUjxHonSR8jVC6P4Pcnouu28KCRLiseZUCew9r9BZCBEHXpSxo",
  "key33": "51Jzr6fz8LX78kY6ApyLGjricB3nFL8LPPEYECg1FKAebSREkziw9Gnu4VdBSFJaFko6HDHU9WpAXkmgpUykui2t",
  "key34": "4aFiUowhT4bE6mc7W3Rww4LWAA6apFCq7b7S3dq5J1pkP3yc3egMDxN6adusrYuSeEzcAMfJ5sUqTR2D1kjyQUfU",
  "key35": "5cgDR4KWV2soe5CySUajCfzqab134UG7tWSUSZSEp1k99Xbu2JbtBmzF9UbwW7TgByF7vZT8zprwyNs3JT46a7yG",
  "key36": "3gvbeYE3s5V7c25FZEDFqQZYAzZ1Ju1Nrermxun8C4441JW5CTgTUh69ppD89MQi5eKjrYs8wdwtnihYLKgDJCVJ",
  "key37": "3LQ3zoMC5Eepske5gqEVThHbf3WWZALJ5FPvvohWvtN74scct3t5hyQQM8sWds9gWkSmuMqNSQ2bwNLTdRx9Yv4Y",
  "key38": "26QicGyvBS6atYNkZnUQLZwNot1GCz7e84Ya17inh9d4P4pjnseecUzTphfaa9HB27xFZbDQQX6UiVVi6whHnPzE",
  "key39": "2MpQ56YnnxyEq7P1HoZUrYqZraoCs7FRHtcpqWCQd1LH4XmBDtX3sN72z3YKag2QkZ4VUtvS6F2udZK6q9Z8gyk1",
  "key40": "75VjMva2qowXfzWGFu6LDx9Hy5UTb1sWFnmPXGBHpkuDwGiZJxPQ68WUwsLpdVuSrojvjAuxvF9YgwbpgJ6tMxP",
  "key41": "219LiAfqrqAPWPV5eoCkLq2dPLT6yoV3ZSr4A5iczJBa2WeBx4cGxcBiSJATjXdPmtCA8HwrQj2HW5tMv9tXDwLL",
  "key42": "QhAs62cchxRo8EnwuzzcferNhpcU5Ef62Ho8pfbLkVaTCwJkLFehXx3s4pRJyB7QFsQ9DRYvxfX2JkpB3K12HKj",
  "key43": "31XJuBg9TEeatG2wtL3YGvn8Mu6D8bVfKQEmq9RPJ63Zn9rmympX1z6SpJjZvxUh9k22aWB7fBHsvxN6D35fDnRR",
  "key44": "3oWEn8qSjPFnkkQacp7DedUnRYZpqS3rqbnwfqoABWVsDcZ75oXd4Y5eUMH59Z5s7AAcm41AUZdjKqXZ2EmF1xbb"
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

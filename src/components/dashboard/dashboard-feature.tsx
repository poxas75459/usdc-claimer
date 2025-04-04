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
    "2PZ4w52wdqQUQxhyVhxQXLHppTxzF1noozGUAgsAiBAPtsoLPwE98xeAMDDGXLD5KrAQ4ya9ZY7NnH5RZAXLpykp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hc5zpHdoQHnGMcMXPJ5aJu1sbkRVwdqYXwu2ZgRP3YZpFYHnbnjbkLH6K4LDy3yShn9YT81yPP5snuxzb6CdMkN",
  "key1": "3eBS76DZDdGDmzMhGFRwxDU7AinEMyc2Do9q6AVU4Mcpw4eY9JPq8MiGHamj2TpGwx84hs94baq7eyR2QTqPCfxo",
  "key2": "C6YuCDyJGjkreM28zxEPDZhgR1cvNi64ADN4fNP9h2yhSCDPBofbEAvs1ruRwRcqNRT7PNff2aPjgh43dcZ8pjc",
  "key3": "2GaVUUSeoZ51EubanrBGsZV3jV63P1tPeFvygpN3pu1ur5mPGUaDqqa7avFsEKf5oN3NJYfQCwXe7fCg2JeaETPN",
  "key4": "4D7ZrwCHEkg5YyQCnGYxXo8cYHY5W4ysHf9HCQDXjKKp9QAPZjz99sU8VWLPJXvJ4WKqHPiuVvj8aNMnpYHp9Hte",
  "key5": "6ZinK7zthiQsXYrPtHqtV2YGkceSqX8fFVRmKHnzknwCHQVztX2Hn7nQTiUaJjjpc5ArgZwN4tYAyA4sj9r5au8",
  "key6": "Qgoy9VLgf3PopBCCTDCxYBgdwwLy1pQXV4YRsMnkBn8DXcUUAjPvt4ejRtRSqpEDsyNDDpL7Vz5ni7eyuXekfek",
  "key7": "34thGfX4ZpjqwbQuAsF71zkJNREKuWkrePutXs9xpbjAQzvJSWVUEvYkShxJckqS2YgrYXnp68SZHu3aWV9gyEsT",
  "key8": "2pdcDGRVTnf5eZEgVFSP3hCPApfLfAEL1m4qP2b1aavfJqXsvUU5wQZLGtKPevEkLhVu7DZTypp3AVS91arb9Pky",
  "key9": "4y4cabGFPEV82NY4PXN7afdpL2PvV5Kc7ZwKL3ico3GuLhuJETWGP6xXuahZyzQ3TrQdFvkufZusRJMFMWjJD9hn",
  "key10": "P9n5xhHrWdyFZM5ACAB5jurkoNqcdyXTKtL9wKA4djREpakUFp1p72oaZC1eBzW6nRmFrTLrDRWi9R28YkCyXT4",
  "key11": "3zrSPbeaKStpyC3Mc22CLZmxxhSnWPPrc1CcLCSFCc5CntjYnRQsMKRVNNZPWbAGRHBt2oX2pMDcQitXTn87gL4a",
  "key12": "axwbvMWvd8NbirKvDaz7Rn7CrVFht4jDFYqCV9VJxpBWqSAGJgxzeDTT8S2xEFzHx8vmTo2ZYuLRhnSzDHHpvCk",
  "key13": "2tbvu4bRxMPm98S1Jmr5cNvtSE2PySCL6afjnShJtL9FABHAVfB1edXEFT3cr3JFTvVAeZmRoyyNUPxGBSy4K77B",
  "key14": "3LNiugYv5hg434fGjrozy8jKoant6AjwLhsmctJknieRGivk3z9bJCm2fSfUXB36AxnLV4LUdKVbDeTPS45NhTXN",
  "key15": "3dc8xQsEnDZJ1DHX8edKytZESBhL6woXHxUwNbUhpd4PLzyvVzVJ23FM8M7vK8MSCK3khKv7cVNLpSwCc6Fo9K8W",
  "key16": "5UF2xk5KaPa2Y74fFUi7wT78M71nv5UoCgfHvoSbAX5y9pqjxr3GcdJJaQ4TrXATe4HBcGPB93crrpo1iWDa1WJC",
  "key17": "3DaQf5KqasPSU8VFv35odzUo1VjK2NZSwxHtez1KQjDgrzeSUx4yMy9Uu3zDhJn4LTCewgU6ghLXMpeRpVwwbCsG",
  "key18": "419ybvFYiiGDRiU6UDJY6vos7Z728qGFSZqrWafcL6cvob3dLdFWLMuPHFvpLdXHT1gzy7UAUuoka6Cc4mX9uA5t",
  "key19": "5XWq6vMMgZDrE3NNHvgU6DWZMQuwftRk1pJrnk18cCosbyQZWtwvmU8WzdApfs5cWWrjsoRr6QpHQe6Vs6vq7e81",
  "key20": "4c7azikbJJVR5FUFHfj26EEqrefGzMCxE2qSAptbb3XNh4CLMCrx7oRnoDkpjpbhQcifXqXiu5BuSvYwE563iMJC",
  "key21": "2qjDe6QBBuczgtseJXZqKjrT2gW27HvXin9PmLVt7X9j6APXTTR9oMZ1uQB8b2aCXcbqpxRSw3MYKtdi5XHTm64o",
  "key22": "3M7WX8STeMQw8TgCFhg15ktfa5MZ2s6gBtUAvRNeCctXa4dYg1mdZzugj7ysiY3ZBgevmLX5ekgTUj3PHY6dsyxe",
  "key23": "3doA4Pj6MDNT4orMFSXgFcMsiP5cA5XBvB4AbaLu6ytCyWAMFtaQaG9BEGAATqd52DLG1RJfKW1U3wLfzAxkK5FC",
  "key24": "43TxtGso1NzTtkeuRhrzzHWNptVvjf9fuc8vcuL27wYJg4kgamZBF9jEcLaQkSc7XstuK1CFujVWbiYxpBBy9V3d",
  "key25": "f7pT4ke5mjoFveKUhRjt72AHKuBBMxJFERvPYoZVNGSKdpAPC7xCY6paSHi3x4mergTw86KpMzdwcJr6YUsRD1v",
  "key26": "221jtWMEcijSMADvALA9HAzkwHas8KMruu5yGv91d9bidaQ85nkafGXHebdRRrLeAP1spbdmB6G1HEb65vuxjFTn",
  "key27": "5tNwmEkLCxtXKiPGKheMbXHExtvxtfvqxnF2XocD1tFjYqxUDB1gRYgCAWyQdXFTHiNmt6S72aFZUZcK9RGpXwAy",
  "key28": "nkttaxHD8Byrvs6oDuqtvPVof48r6mi39pT7HhyNTqH4uYtjAa1VPNUSRriZpGd5bMhx3D2SD45EWnWTKChcQJ5",
  "key29": "uspRC4qYmaW6g3ihBvbvwaKYbXQha65frx347zbusuJMpthDhzMoiPsVUhZmK7M2EPXpNnm8QG1ZxgheHZqKpDv",
  "key30": "5g72iFMnNQva9DmxyZ36XFQLZwAu1hKEuqSVG8uupEG17iGRt4yaQrm9qBiy8hpqUoUKEKcwMn2tCUYc2bUCp74C",
  "key31": "2i6S5FLZZWNZhbKkLDiqpsPqEy9JJ4cwKP3g97L8zV5naXQduvTjG2YFSe6r7TkemRuK3Vtfpvzw9QxQKjUBsHrs",
  "key32": "UcL5sKTFw1vECVhADzC2iEbHhw5BAAsEwDJkGuPncPfqbr2dGVzMn5xeAoZNmPjd3ane2tEJPYLhZvMtpD8oLsg",
  "key33": "4MaaBp7EgM3mPNhTtetmpjdf5YN2Sq3GRRagV1cvsuFeVhJXVFgyt5xAoRNpE5EgQCPgjRzhEtqqAQmYAvQY4G1s",
  "key34": "57egKSumWX26anzumYxtTa5GcTNP37JR3MAaUoDwKABBFYszEB1acMSRopZxfR5d9QFSriMjVprQtDvqdpQGyz5x",
  "key35": "3pfTRYnMu2nXhyDo8eVirHhwVVMzCnSp4HhsaRGg6wC2zFJ1nBeBGHad9SxoJwv4aWbTMVfCBBju4aNcz626NUMu",
  "key36": "hhAXHWERT3WdKgdhGaPy8tqifVSK49932hbE9v3fyKDtYvKsrJhWtSiq9P6yXn8ovXaKxXRZ54jt9iJWQ1hREUd",
  "key37": "2jNzUyAxRvShKTqNzDoumSCJDsUQaQ8mLe7jWYepzo1g7ys6gsUyHxb3p6DQN9zgiT6UW1XDRWPxVsvEvpDak23Y",
  "key38": "3XvN7jm6NN72q3fi3zdA2mbF64rePbTwQ9vMKXPaxJMHs8FBVZx2Q8VdJDPoxDyo7vC889PrymQudWPM35vCF2Hu",
  "key39": "2id3tFzFbUcE22PZZVmHrWeAtmqftgD3Ma8wDLEajKh9EoTuS61HoKi21Y1jjTVesDJDMSJ8CMCBKUamZKWhAm9b",
  "key40": "4BMhGWayg8j8tmehkHhJ5T41RnGNKGnySDJVzWMFXxZtaf42J2Ad8kzo4iz8p6D2gNW4B7PB8WEEEDGhyuqeSvrt",
  "key41": "QY4pHJS2fHGnE4FRuk1KAhoymAcP3KsEkxp1eYBa9aZTvSmhoBxF2TZtvufR3MRJDXQgjzZnovLPgPiuhNE16mS",
  "key42": "2ktyGhs7qecR9ZNeTD62CSc8YPux4EDYRT9ath6QNhjtoSzk23oomaiRe8EeEN25ds6nQ247CYWSHkjdpGCa7T8M",
  "key43": "2kXFU2My2i6o54H7iWAfrt1HiuBnYYL6ECBxWTRyeQUPfQDLpFtgH9sKe3GJ5JnhNZeNYfzRHyHoSk7zVM9SJgZW",
  "key44": "2xNrduCBqV8ZdgeW5NhvpkYEomfEXPFCjKZtrypxfzaMpjD1qLzWihhmFtm3ZgpCvfRBoTYNU5zuker42GktHphg",
  "key45": "6jbhnCnGza8BYpNg1UXpoPVwN76h9Zf7R1Qq1nvrKLqMx42fKMDqMhoWpo36mnHC1hWX1Xs4AdaJh9LwNfxbi4G",
  "key46": "22KEqfyh73iKbMEoRWJJvLEenHXJTA2LyPD6o1it48SqufoyN2rq1YdEk7zxNtfMcwfJHDksd78eZoQMEkykSYfd",
  "key47": "4nYujo5Uc9sTjpK85PucB2jwpyAmdQF9431zykjSSASPWbP3QURsBpLrohFuqPiPYC6NXjHMFLTJYZGkzDPW1XQQ",
  "key48": "2Wyr8fUQ82MohEDA6geCXWUeb4qBUgcM8yYfAkne97ZFvgfLiEP61krWWJSUw9hYkUhPKQtiWerKHRswYB38FbDo"
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

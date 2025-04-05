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
    "57WUxVyULC7Y5FBbvznnepsGjXRbvTSbypbbiA3NMaYNT5zcjvwbJj5dTHyWVqMxFQBiG8J3PQKuifdxErKNGmTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rr5jEBBhrNQD88HCPC5cpdLb6swYX37eF76w72QBnvBvGsH9WD8hZ1U5z8dRx8ZvJMZ6MeyqX7Qi6MvEZ1jRD4h",
  "key1": "2qQ7RsMU83m8dKbFpw1DJNF8GGBavCp93UrdVycMYGnLqY37hkjUkmpX7WETA4KPvZcPY9wKGXRJfGi6dhvnf4rk",
  "key2": "4dgbmzhz6T1XZ9MLsGStp3S7Lntr66yN8hKAjCBNBCXWTzpKaSYT4uGGryqemjvEf8sLuC4M3hhvErddZ9isbhyV",
  "key3": "4yEpiGjpmVpvgwxK2ae7oQ35dGwkEoFVdmEP5hgFSW31mBissXQSYQrHcR8Fu8qNaRmGBvtqbgjREfS8tM1Xm62d",
  "key4": "5dFUfXLHqcnmUhSPLD3h3vMWsjUEgNjyJM2T68t9Y47QLrBDWM51A6jdgf1iqaT3noH5cUL69FKYeEZwhFoYgk9K",
  "key5": "mzT3YDSqXrAfa6A4cTXhXK9PKdm6LVqKUWfQmyizWUSPbuUSV6P8D4NsdRd8jfmWkJC2dmKV3HPA3FPounF3yZU",
  "key6": "2jDkBN6zpPW4fjphdoJTCtiXvoqb1CJkGHbfjY6JvL4ntmfKcAnfJeLAQsC9WUcCynx1Tmus1KYpQuUhFpWr8tLj",
  "key7": "41zDCABeCMU7qLa7dSytbMKfPXkZ8qY21LB9kSXJfLKHUcBL21dujQXd4WhYLRUKQKES5kdXwhSumkYFYoYM37Cn",
  "key8": "4cgnP16eMFYF9eiXTuhcLiFXuYEzjnQWTkdfwdFsDMYHpG3oLxwoTUxEVgRMYY2SJAfGpUDME3bKwA6fEv4y5C9T",
  "key9": "2FJyxRejJ8UysB9dTLGQUBvWGTquFW54JcUwd8qhvz8pKBpUDfbng2Lvd4iG7c36hBU5MFVzMvd1mfaX4RKsEqZw",
  "key10": "5MEjTMemu4uzg8XhWrr26JMjH9Gz5bNG6RiSLwKQ4cpCDwvuWS6MvDMEj7pYJjk51cUZCjjHbfMuZxJC16Tm1Zax",
  "key11": "4KrUDxyGrRyN61VHaFbjGaic99fghJzSfDZd3qi6PqHxnrNuiBFBofBSE9CxFJ1DiuehE9REWD3NxSYMgWoYLYTd",
  "key12": "2LYq3MSkobYRmDooHxLAJvNz2B8S7QMP9FscJbBXxVoAcGypkZvAEAzDeosu4MENFfwxQ5T4DNpkoLULSSNu9xWB",
  "key13": "cgLMSRCH3iEd69hNJgaPTkupef6DVYiXYcTbWpN4Wsv2ARYYySv8VUvp5fQuwsyt9kvgaGQw4c47HsbEaen6yLi",
  "key14": "2NzaS4ctNAABQpYbd9Z8Gh8HREKM9VfMPWCc5Mjosa6rK4Wo2QoqSgmpXvEuzKoRbmJSVyMVWTUMvvkcqcJWPA2Z",
  "key15": "3Y1JkMGWjsoEw3Ud6z9j8CXPAF4rjXxDZgdDj58emT7CEBVWff8Hu79z3BUenhUWuWzS2kQwXBWmT5CMZqtipdWj",
  "key16": "XfDtSPVpvFJm6koj1PNttJQwHBEKr73zsg7CY1FT6nLnthJ5XMhc7o7trrDE7a7LjbgZA6hGqBbENEPRDdoZjEL",
  "key17": "549oKzCdbTFPdEX6cqtQmToZsYEN4JrzUhDQX2563kbKiaPzqDjSBF4uoNLLoUFRXXtSMrh1GhJ1hwvKiHNRk9vP",
  "key18": "34Z4Ni6kT7KyFq5XzS9kBeBrSzeU6mhJASqu65tZuDm87a2nPMGRUHUoJiRKQL6DGMZyu11N7eNibDZPMNnS5vgX",
  "key19": "3YynBMsG8uQsQg7AW2yqjnkE3f3eCvHA2wjCKj14weYDJqgPLeZRuQRQ91hpsCW3G6CBTKQxjoFxU1uGk9wXzeS9",
  "key20": "2WBd4TQeMmHnk7NUSnzdzz5KidDzL22MBBVuibx4t2RaPnEgAfZRhBqxrWvXfLb2YnLjnT18PHpSgQUWsZggP6ey",
  "key21": "5VwBRNs5d1NHL8xz9ZN7riDfpFwZXuhFLZivgKqS1JtJzckyzD5x5LNDeFyKPB4QgSPg1pcb4dQHMtX3PPehkFHc",
  "key22": "KB8ZNCcT4Z7iinQCPLDKPPMsErdnPRdKeSJKanU6gzU4EFr4NMDZ3hyFoeaVuEyn8c42K1136dWqx7nLY1Wm5me",
  "key23": "3EVZHHDpXHpJjZJvZDkydNdMJJ4QzwD4BLg5gfJWxVdisdiDJpw2cQX9H9rqe9ckXsApKdYirs5o6dQBdnZ4a2i5",
  "key24": "4H9ejxNQ62EbC7VoeVBFZqSJrgHCgqBVExiKQa3NqUBp7qEDTXr9A2Gdd8H8JP6ao83gXYa2qrjpGnhmqpap9q1T",
  "key25": "q4a3Mqp6ZZrtZatK5CgnX9A3YFYeWAPcH71Eoqbk16kCx1TtbUFbM2crZkBxcbGwxAof7LEJxaKzbrk5Bfw3nSn",
  "key26": "3eDCMuUTezHb5KESy6nnqs4E3M87gpj3fcwrRPpbGXBarZaj8GcZNWUaoG6qwy3mqRFZ8LM4EUL1E17rNCymJKBE",
  "key27": "5bsq8e7HoMCffEShXFuvF1MajtZJ1aYw38FTHpXWWEdJGgRGJtWpY2mpJbp9CcVcNefmNzcUmzt8hYQp5MMN2pdi",
  "key28": "3Db8xtr21LJjuehrv5mgwwHzVVzv54o6TEKySTpYMFJcu2Uy1SPLiY5CXSXdF2Wfgdzy5WCcvRVwDgRa4UsYEaBn",
  "key29": "5bW6cvBDRbpX8RAJfNjvSaR23ed5Aox2qANrFU5sWu68CQ53X7WGUsXRmKX7NDtoyhDv9a2PVw19ySAtpDbfKTge",
  "key30": "2J65ZkaakbVaY4hgZ8Po2PMZVn3gEbDGrJ5ELhccEd9E86ze4Uer4riWQdQ6eQiUJhBraYZNASPW1nSWF3vXRn8P",
  "key31": "5AzdKQFYYmshMmWRGrV4U6iz2bSZoZQuMhZeNmkF9howuYVCceqfp6SUnsnSC4kPG55kExHMHGZAwP6T4qx7RvcA",
  "key32": "3TTZcd7zGbqEFDDN6KfK6c32RXb6Jz6FuYUK9AzgJZr1zAzqkycLa8RPSSrmf3Cc77j1oR7iz4SETfQuR7mXXsvy",
  "key33": "2dWJQBNnToUM9NJ6RTBmKC5cC4Pr9ZQhnUNRL4inujWg3695ugGXR42GiXCw91Z5bTR5W4mEtU8EYuoULkrV3SBy",
  "key34": "4MRFTTEGne9zkA74P9FgDRKe1vaEpn3DeNV2vznw2vD6cZzbMbGNrvASu5oPbTpbe9tE1uzYyhpRe8SUNZjgUgV5",
  "key35": "41Mo8Q3UdXL1n4TKKAjSj1wUDH6NNxhhNJzJgfS733PCzRkzcNcKMmz9rRXAghfH4pGyjpt2neuhiRY9VZJ1AMQS",
  "key36": "458Wx5UkmBoWDGysvVGs81g33dkFKRgZbXXyoKoDgQtJmiK13NCWv11JUZus23kVQCAhCqRBxL7MzsD2Uz66nQqz",
  "key37": "5EpCRriEZRcFFYCtvAhz9PX2Zy1tqeSHmEsQ96898Pto3m4kYaQvqmrFX6QbMQEaiPDJ6mT7tT5ZpgJ2eBNCLHU4",
  "key38": "48zhsbHt5oVWQvJc5AftY7GUDekoQFjFxrRvoCMUfNvi5Nkjw4ubwrC1r6JaBLAdKYME76zZwF5PqgjaBez9ZcF9",
  "key39": "2r3RtzGM1HFaaPkkN6rx3UG5szXajj41hiC15FtoBqQNw5fizuf3J6AbCTEYy2U3VdEhckJ8vS3Vmewkw8NAHt63",
  "key40": "2ES6ogy8u9y2PLG9uHAqAXrusqXLStoZfHzzDDxBcyjkBvEn86Kt7PPHFQM4d4SrpfWj7h3s9AztbA8kRT8FwW7K",
  "key41": "4DurAeBfo6jwwXkpyGctrC1uXk6iuyzmu7pZ3yEJkBBv6me268Ao99duJaah56hSB7T9Gwd1FCbdDGDp5UbdisSc",
  "key42": "2rKjo2315sNYQJBT3taJwZjifeFZgkwMuTYPps4SGuLJRuJNAHLYxczwruT7q2D2EFxcVgtfL37dCpdhcqVBeDXn",
  "key43": "5DvqV3vug4Pabaf1Qb2cdvByKwv6jejzSMzh8De9JNAb8pFvKv5N4GqVASEAfQv8w8pq3fYN4qqVQt2kKqp8JP1R",
  "key44": "5XSpPSQURFd2KNe39e9vLrcFFVmXXmEcxn6Xt6JtihDxJBFVdjWhssaa1LQ1v9G4ZMebFkaZb2nTzcSsaiUrE3sa",
  "key45": "25f8hUz2bmLN4ReXi4nPFH67y55A6HBLSMevh956tayK2pDzd1ump54feNvQ3HNFC8QPDnw5oRCtpPRMdeNk2j1V"
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

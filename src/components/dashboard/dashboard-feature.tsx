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
    "3f2towcSccwN8QuEsK25kSbPmsDdxC12cKxd8VqtJ8pfoVE6z8cbuw8keDperpWUgN7ViFCVuUPuFVHFACuhT3Pn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YF1jfmT3M4Jv8npL62BGodamx2kjuzUrWBUC7Eamr4mvk54sZbQbDUJUUmEo8asmiURLSkKcZbjEskHqwuGEQwP",
  "key1": "2EZfSsXGFaTGPns3uNmKQZqafqkAFtvwGETVj8C7Lq9ee5WZHM5QyLiAzjytJPjpde99Q9Z66d2PUHPwLLvw9E8B",
  "key2": "4XqiXMJ3ATNAAAc1e3VajB7nW5gwStdES1qcXR1bXJTnuAgJWsaiiySKSq1jnM4xBNgDeTMsBtW2ciuoNRz8ZtCe",
  "key3": "4kSEAbniYwJc9tGA7NTR2LvDjb5WiRLmQEfbn29ArxgRTiBHoQNNs9eMgASY9qHVmj2C6pK3YZLFBBw1H7KL4Fzb",
  "key4": "57s5tM1fBZRmQZVY9KhvZgrNDyi4ip9ovL8RSAxtiTpvetAuVzKMUnr8YwjxnMPDtNXsaygnD6QvMwKAx4csUvdo",
  "key5": "5A3QUkUyzuewDUzbMdVcUDct1zEfJcCt5e5H9diNMCZf95sJGBjACaVrBgxZqQCLB52csKzd5DcNk1855ujrcMLc",
  "key6": "MF7UeZSfNbWNM5JHd2zyLFx5Q9HtgmFQfLzC8m4W398pkWisJVqTxnRoA3X5vJ4P86E4a1do8YcrsKSBYXuVuYR",
  "key7": "3dMZwG9eY9KxDG8Dom9JC6oRAK5TyFbJEkjbuJX2HnrLXs2xoUXWgJ39yARveB3pkHgt9bUWYRWmPT5kMk2Pis9",
  "key8": "4FCqQQyU8tJBpbM96a9vTfXDMzow55WB7PGqZo8vMN8vjfTVg8qcuJmnFHdS9f59DaKAUGHG353q64MiDjM223Ae",
  "key9": "2wXPgyNb4CepNNeENP8K6JgVyxLTfD3YEgEh2rf99MMU6hCVNANnCUatZv5CmpMbpLwyKfwPkaqzD76bF2XT7Ko8",
  "key10": "2NFZVoj7nNUj52TMrKCVHEtnuT6tcDeVF8Umfi3aGXfLg6JXTUBGFKr43pizHFyApX2FiJWbJkAEV8cQTpWQ8cTK",
  "key11": "3qoThxEbx8t3J8tSEYoYBY1fkjPALTsoJXPXYX1Y34GaYt9SJ86t6Ki4xNQ5K16obDLDdt42Mhjp1S7FTM2L7a6H",
  "key12": "4QibBbDbGhs6hW3WdBR8HXT8t2fCUG6c8UbKKJytcE2cV1H13xxrgTNLWRppGA9gmtKcwZfCJQAhfgYm5YQQUFq5",
  "key13": "ifjJpicFf7Ro8zyW7uTpWJuMCnPVWBQYeQYurXvqyWzXxx7mRJjakFdL8ogmKWsasJQ2uHTFz5fXzVExqGhfoTe",
  "key14": "2rjk9t14NL8sKhVEH9gkJogerEs63iJMvivFfpaDhUYG8YY5ALcN9z1gkvMiGbeFohu2NRa3bec1JPCyLgBSTwxa",
  "key15": "2Smia7GQcJD8aFkru4BciFp5sWmAwuaqGxyhTgqJ9dKYZf1w7JmzyooN6gL7j2s7MNHJEgV3JBEmqshbzMLvpDSr",
  "key16": "2LLsBsDwTyf14HwxkSRxNDPK9YRhMBiBEMyhaFmQR4Evf7c7RFQdUZxNcPuPQ5TTSgHGXrB2rN4bbbMY8PVw4g4Y",
  "key17": "wtEt2rY4N6B8znQFQe8z2pTEu8a1Bx1vVVUX2QVKZhi8n12Sh7kkR5dn8vsk9W8ZnkzkLqZhc1y8sZuk6EVJDzY",
  "key18": "ZugckhwEpZgrWXaeKxyWkinbdWQnKXJTnusBd8Y5wrjdPTVmrM5856BWpiKLPyNKKMN62shKjczoUReLDk5SKcV",
  "key19": "3M4CinQcujcHWKko6Gf89DRL1cun8pir1HNrKJJUp3iFL6YAFcG7c7d2EqkAi4w2ZDUuUaCVP9gUZNt6FL62Af8H",
  "key20": "5uHGV2Hf9KvJsPehrBc4B6DNTSpuJkJcppwVnaqNUMF2A7GZHh1dev8LV1eFik5xD1sGysGJRh8F9VxZGiP9zy3t",
  "key21": "YX9LDCLVo8R5pETwEi9ZkuxH67DvLqQt1hLPV5XWXKfP763p6jBH6RkduydmNMm1x4rwCG6U99EqCJFMq13L6S2",
  "key22": "3gws3GMXe8TRRvMkAX6Lt8Zpt3PF5t263CiEHQq7qBk73hytYZyvZBcUCYEUDARF1dZfDQnN7we7HQ1fbJaT6SVL",
  "key23": "3gAdtCGWzDSjAXFBGrM57dYR8Z7ifVwKJxpwRDVx36JFCm8BAnDpX2EgrnaXe3EDEeGkWNhwiLxM8ZA5cuuHxp7Y",
  "key24": "2j3A4FYCohhAubFRPwa6P1UULnk8CyKAJK1GEC6rQ5LpVe7Vs9irndJh6xXQ3Yv59cu7kNjfpxvpVHXLg9CbaEXP",
  "key25": "5PdtfbdRjb7WoPMfpNBi7AjNCUnZUn8dBxnW3tVu3LS3PaZ7v6Ht3bkrhsAeiRaCR68xnAWDXCxZKTEXAwy8cDD5",
  "key26": "2ukdEpvdRBeKHC42NWNmems3shroAb9rwY591PcSALA5JErsskKMxyN1bigeUd1rbPd8zaqoMwEk1CX9Ffc1hNUu",
  "key27": "HZ8HK2HfH2gPRyiTXQXH6cYd6JxEVeBTyVk7Dnm3XcHhfu7jKEeyfjSS8tnCpcXqJfSKKJtvX9XNaRtmjEYrMvh",
  "key28": "5XkzwnSuyfLbtpDZJgGPbnGcDAkHdZsQ54XeS4KmcpWxNaU6MzpHjc5gUqDHbNCJKTwGXQ6pWE57phUjLgg3S3tc",
  "key29": "XvfQSjzKb1AZiE32VD8qCB86WyWJPqD23FhHpyMNyig9AbvHkRNYrc92ECXb2TL7mpvCnX65CDPjCGGnKUPhDC9"
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

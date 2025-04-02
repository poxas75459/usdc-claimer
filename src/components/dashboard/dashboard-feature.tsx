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
    "3GsLwiXJxgAKx54246GAGRaLRr8zXrDWYpmJ7j76KhmxqdiRtH6thAUbDrU1341z8BjRF7ntAbhnArcZd1sq48ez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LJ6pACmU6N9GTSkyaGMywYZy5zZUr4EJDseJCeWNsMZRUuySC53Nsx35eaTRzyVn8WW51YKWCAB88jkADxVfinf",
  "key1": "4Jw8zKPA9ubhhH23Jd4XB7J7XaQNQ8T9CgH7nkzFnah5ovRcL1wUzTK4qRySe9J2CfYEAKbeyaGhfKSGf2vAzLg6",
  "key2": "4hrq1jor6QZ75cMuah7Pki1WD14FXLfu1iMr9keeSJB2BMh1EiNfRkKxhJsHFLgnZP1UCLJy8EDTkm7BVXn3HNNH",
  "key3": "2KgEwLLDYSyimNTPjrJYzzcYVhfybrsgifMzbj22TcvQTVdaed7JSHe2dGSmYmeR3DHaaQYKrKerbhZWxF3XMAqA",
  "key4": "4GE1eGmGLaTeHmvfVuJJPnG1ZYRRi1ogL75qpTBQ5NSygidSgT1MJRcoebUZdfUDMDHvAowBZmKKfTWAZk6KavrU",
  "key5": "5fsKMMoQNCXoAxYGsubdJwEfWqupCQwSNsrxu6rHbZCs2dZ5NucEQCJoL4x6FbB1pPwFaBzsdfbWm8ctVUaLFz3x",
  "key6": "cYh7WqvM5mP7NMZpuQFzb8XKerQum9NXd9xSg8jTnjAiRycQ8uFXn7Gex975xVd4skRmKGviZazuyBMwxTVpZoX",
  "key7": "jLt61ziQ2nmEY9iCWXH6BGqWmLkhv7WZcG2nGCFQMbo9iKftrxLEJ3t5nY2riaWxy9viXtsYqtCg3HfEqvjV4GE",
  "key8": "umLFNQiQqZ5qR5xCdprXL3j4Yjb75fDBBBZUnYDyvn5Nf98bqqkjug113DGjWfyG9E6wq5EWgBQkJQcbEbUjmSh",
  "key9": "5uvaQx3kFpbePRaJC62EJ9owmDKn7Tq81iS6sg6UXet9bjxPqeVecDCu3Q8kZisPH182MpyWv3qJUWeg5fWko4t",
  "key10": "3cHLSNF5oZZQBpv6bypBVY8WAzQDFp3oARR7E1yFycLqF31R6n99QjSArFzvYbULUkmnbY7xPH17JnU8LhzduKRi",
  "key11": "RZAkuAi7fTKaNsLqavTv6Dhk2N34ZRCuzBRx2w3VmyYEzyVgvd2sCHuqFhhTjKehkePxHDsxGvykDWH6p5BokmA",
  "key12": "3mUQWUo1V7wdQq1LJE2YvzFjSh6iWHWdUuVQ8Q35moPUVqZ88VRYUXptEMFZGeP7tyy16M9wY5rBjKpNzNjwtEo5",
  "key13": "81Yuu5iiCAkeqh6Ceg29ZnaN1TnNQANNKy3KserDhpfUoBew2SLzk3UBAtLFUXUpX6QwWiMMMX5M4WJsW4CZV1j",
  "key14": "3Hg8d4TP1VrXDdC6fuQwoMo85gPXWG8mNtWJ6dHdw5scdGNdzPfzHAuwZ1C9zMcqZjfiUkCYsohdAyCNgv57ZxDR",
  "key15": "3ixyvJyPRTtEjf9aatYXWUpe1cvPWZTv5aybfaDxDYTJksfosP5Q1qTSjutzcWz5RdnHJ5fkUDTvsjqQ8jF9ZSxk",
  "key16": "2CRLov8LHiECSTnkeoGBLGxuzmDBGApf3QBbMxasD6TVYRzuieFmkMw4oDocxGb7xMuwLhJBpQ2HfHxmRTAzB43Y",
  "key17": "QdW8Sr8EKMCrz335BiTvc1HCeE2G6vcePJmH9w5kMfCSdBFza7cSKpAoA8HFnAJt2cUSaJGVxMaMwirbzdTyQth",
  "key18": "dfW5LQzPS39c7pBDbJoppYLxsW4jooHm7pXDiziZhVDpGCNpfp4skEhnEoXyW871uR7WRsghZyC4QLdPXpYijgo",
  "key19": "7iR7GiwuZDJYyUDatoa1cdkcoToPYAQPfErinFuaWH3vH72dFiNwDaUEFH7x4MgSEgQs21jo4zEAwYEZq2zF4Jt",
  "key20": "tU3xQiPcQF79Anas7PkRi1KUboZJXYk2mNwJ5X2RH3Th6V38tYRU7nCVDTQugTYsEZJGqeuYGU4PAT5q2hJ9FVx",
  "key21": "3d8hFUSb4Y3RGk8LRVeB7hC5VTDxwuT3HauDNh6g1nFAaZzwAxpE4XtvhBJMuRwQvuc79QXev6kNZVodj1NkqKtv",
  "key22": "2XfPPZ14EeQ6uTa4LXFEYmPRMgLTwaDJxBjjMsA4quQeYadc82mBuNJDabTpDtdiaM5LDD23YG6NAxbsJDRbKZt1",
  "key23": "2xvsYPZttDojvURrWmCutSGBJgMSwX62mBpVMsqFdB55CXaCQxm2q185Vwo8iuhfiVczq7MMYr5Wu12bAeEr7Jhz",
  "key24": "22jvq4nevao9uveaLwfRdYJAn4qqSAkzDemHdoUZHSVe58GLJti5EBnqZM5T5KzJoNmbFPbifDnm6WVULAbsvRdF",
  "key25": "4e52BnSJ17dj4NzwUmXpyRQL7LrWDXtLKusyqJUHHR5p7rysz1MRhp9BgPEkqesKkMWgDA7aHZheUcXddQFv27Zy",
  "key26": "61Fx5Eir7Kix46zqMbFuxKUfuZZGA7AHFjtTbyqYmYHKvpC57tSxGFRig3UNSXyvueXnrBGWdVVsSn9ycUnr85XN",
  "key27": "xT7sax2WpzcAJU6K4hdwtjQFrrBeTHdjd1UTDma3AsurbrwDhLNDGJYAuSRvLivicDdvaSzejn28qW6Zo2fcziG",
  "key28": "4gHqGPyYuPLWvk8QkBjw3sebc8XVbGvMEKZ45bg5Npd4jgocVZnExZdcza3vWajgwd2MZBtaYrpeNjy39UCspHNz",
  "key29": "2sgv9ZucSjvafVNVcV8Zp56fWX2VWMUwaFkHYBbgJCVTwghuf4aLhxV6i2TUpthYCy6ztGnbj5LyN1MbzkDCKr1q",
  "key30": "2jQ4xzJLmhhpctqRkLLP37q6csgt3CwEhEvf9fiVSKK4PgqSk699Qde8qh4no7PfA7cwtHVm5rKP6eJnEs6x7gSN",
  "key31": "9WAkzNBtSKABAxDCusjhrZTcDD4T1v2BXTzDepaVCN1YhkP7RcYMzhCrkNzbpoMyTRfAv7nTec7hcLNB2aEXMsT",
  "key32": "2b1D572ySgcsbJB1NGCwK2Cy3DBRRcDRqHFwfw9qJikGhBgcNbKxPP1n7sQoQd6iA6fXmTxmLQT4aEFZfdtHrj7u",
  "key33": "BjfoBvwChCoBMSDD3cNBGUtBMdLosMcocYUP57nw1eJoaBWfKErM5XcL1jdxtCZpHoDsyC3YMW872PEineEkxVP",
  "key34": "5PbdrMj84HdBNStp9MrY6jGA6SQxJFa9cpbn2RygZbt6skBvtUwtrD6J5kmAxs1zB4bbrWeWxMMHA4Z8YH7TgKA3",
  "key35": "29G2xgwedWEBgQJNNd8dmqbUPP9MzZFwQrRpiM9Uk9SWfyLXCTNUstY3ZQP12W6bg8kRSvdiwA5RW3Uy8B49FJz8",
  "key36": "49VR5DdPGFunZU9W7sc2hzJfUAmsuK3nuJwQHudEMwXwJyhLujW3NLA85FKdAqk5XoajaMp8v2EZCC7y3uKWcagG",
  "key37": "Fd2yUHwxYA3q1uYQHYGH3xENR2mKXTcXShn93YM4c1gDsLDrbTaHKNnPwsScCozCQxs3TxMHZviXtgw6CTZkBTP",
  "key38": "5SH4UoakWcsySQoadrEMZ4BMp2DYMfRGzzGFNQdBmMfCwbotfnF9exZm4XJgZNfFBR8fCXvEqZZ6H6GPVXar1A6",
  "key39": "28nD2WAGu5y7xEJJSxnhDRz2mPeK8EC5wsFQ15V5bsaeRDXK9WbqsCg6izWTFw6xQhKPNRbqrdAJCHcvc829Vnxu",
  "key40": "uNWEoBSiFaUZ7T8YcyY3urbX6nBHX9wnYhr9kzM2F2whZvnjtLEJLeBKifW8MK3Wp2uLMgiYyongtuuTg1CK99r",
  "key41": "4pLcKCrz5FuwsiBC2judfjNm3cvN2qihscwidXXutXhMGvLfdNFdW7c7k6PWpKctQbJVNL45zrzzYaBftTf1de9d",
  "key42": "4D4nBMUTCPYBQDhe1dRanAdnY51KvvzT6vXkeUjt9AVEhj5UbNzuGsLqtqc15tXH9YE7aYrnpRPgWrE1kuT11gUi",
  "key43": "4kPjrGH9xZH13n9pABpN1QCqfh8HaqDsCxtd9hPsW7MQhrZbTdyfKvNTdEBvVijvfXpXH3g9jZc4kkrGVjRgRPe",
  "key44": "vTtLE6iYQZvzgyYJWtXTnGAQPHesnoTeGeAnoHT1U3PPhuXnevgbMRNEnjXbb5b18MHxNVLCP3CTJ2RqDdppXSi"
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

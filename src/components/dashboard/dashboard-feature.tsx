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
    "3pWvACPM4jPyQLDQf8Eo1YPnS41W3JFAdpzaPyTcut196rSdJLJiu6u7qKk6DCd57WcjX7NsSLXs6VDpYj1TbaG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BhC3vkySRCWPEYg26xwQqRD7ZHdYLpYKrz46EjvVzvx6jXQNh3Q1fsx8bkvDVKULtGD2qWSurpb4B92CXNFpCc3",
  "key1": "2ibEvsYibCbhwAgzKr4obG6hfPUWU7XdUZV2fezZsCRmnnN8qn6Dji3Ga7T9W3c9s8BnfwGDXjVRi3TndVUJZd4i",
  "key2": "5t2iHKkPSQUKLq6uamftnEcyAF1Vmczp9mdTTfMX6J2nEJPcYhqhu9VNqTifqDVkDdkLxnXpr9vuCWwybp9Xvcxe",
  "key3": "4qHHFvRkkcmNzUWoqPXf5vkZkZ1Xp5CyMbJGrxbwNp6LRSWZmNfkEEgecy4bxmX8oEDey8a5U4nRpdYShYtaX6FP",
  "key4": "36f9RJFNu1DwV2SBtEiX4ep8mi7cxtoQ1eANtfyZcRqkeaeESTjeRm5hHBmN6p3zicsiQaFrbwDHa1JSeWRaPPZU",
  "key5": "ebkWmVe1nczGw8V8piaJnQ8m2FQkRhRELFSjBShauTdkXguAYVyhsfma16aQBzUcuTN6ZFRD13YNyJFftsVeokW",
  "key6": "4Hq5GNFU3Zau4dgQoepdBxpscqw6NM2vYB2TWJfDKEjqUH61ccHnqCKjYqpyG5G9MbMbVZESC3qcWhZBFsbkFCth",
  "key7": "5NjHYjkqFnFJocAmPNXmCufdJo9HfbuJt1vfSS5ot5VhBUZ9t3qHiG1wNnXNXrJdYix4DScMbpZVQCsrx9aMbFM6",
  "key8": "2kFhYKF1gGh3YKfowBD9yqMa7rUbfaVh6sEgcUTQzAfng1AJym33LEuXDHKn4J18WcdSY9rxygC86ZcnirAGQBvo",
  "key9": "m44GVPBg4jbu1ZnJVcnpiGy6axB8ohiaAjGyfynFqgCjgf7GVPde9ZgSKGuegcZyMD13uvAkAQ5hCvaznPD3FtW",
  "key10": "5H9w5yxK69VffwUY6xbJDtRq8Bw41iiaWgrakxfJ46jachNGGfdtymrpmBMBwGxgczYbQdRUDN4XoyePpS2HWqwm",
  "key11": "w7EeoWCS7Y5NxS4LGoBALccvcPzH8bESKndCKWZbvLmLZZkMxdGerCp3zw6gV81H7L41z1Beh5QZAWDnZBCLXJV",
  "key12": "AyrsbMPyQXPeDnPFN54X83rBG1sF8PgbzCZXKKVANSzHshgmGE4DqTtPgYaALHCgpAM38SQ46JYrDTDKdrCJngr",
  "key13": "4szX64SxKasFGPSQNQVMEzbYhMCxknQMXsJtAKvepjYzyDSyVKrpzxkgMGZHmxfZQMjMYXZXvd9xQUoYwHMgWJoG",
  "key14": "3s2gGKVCpr4EYa2nM7Q65M6kYy6TZV2151tq6yGMhSk2jazo3j37SWBaeMyAeAR28Y3Wc9tFry9BKffiwzb1RXqg",
  "key15": "5rWeGVrTk75mp2kXSSM7F4eYga4pa3QoxTNBLALPBy8NQZ9CpHArHwiPy1NeBKxJt8ACDgMXnz6hfmAnmH7UUaGS",
  "key16": "5XvwPuowETnpc1E4aovHwTK9Y5LDQrJfAXzStCCq4T32xuK1Gb2NADXtvp89vnZABRciRHpvm56a7AGev7HTuB7d",
  "key17": "49gJhAKpAXhqg2pLHQcYk1BW3FFuv9fXBnanebcxWf9e56y3YSsFzLcLZBhJPVDjWag8XWHfcPPSvNFYu5SrgYPg",
  "key18": "3phcfKFEunQdvvEPFcfeCgUYTzAJE5KFHeV16qwPkzkKFww4pDgmYCoxyZXsePhwG1gw3TouJrWLfqBeEGqt5KAc",
  "key19": "4ZweHrtSdoM1TvQgqnP3p6DsqqbAvJLFTLByxcozLQirEEpiD9H2hhKSFdSLggSo9wNX2J8HpXZhnnfdnMapYmjj",
  "key20": "3PpdJ5GH6nXGpF1Ze1v7pa53bZGPg8ydqaFBxCmCSbpvhtFyGUwdfTkWzK8p2xF9GEpS1RQFeZNTahXFRSA6mXAn",
  "key21": "5JS4z7HhDFJDHzpLKYqsqxVv3mBKZsCCDZmQG7c4nhh6m7JSLL78Z5E75vQfQeZVKNL7oBHbc64KgjR9ah1g6Vtr",
  "key22": "3H2nW1KekjqCUQRZVotBgBKPwysjUna6evZpQffciHJVHwd1aBUAvpa6t44pAU2CraDSCd5NQYzm4w6i7mwNeGLW",
  "key23": "5f1TjHfDz1V5X5Lo8Fq4iWTyKuoBpvsm6ejqMfTHYVJEtSDKijgSM9aWrPxotyZHPr4ov1patDGMtwn6gbp2d9iM",
  "key24": "2bkKRfzzscJXWpbr5p1dLZ6ZM5FHTScyT8FoyLERHaJTWhshtUHworNxSomeFQ7SZddUFFmVn2FDGn8q9YPMuaAj",
  "key25": "rY6F2M7nznkeBCnceti2nXe6JNjvd3GJCpD655X5mBvTFDYcL86XbzxKACFXF9kQ5UZTNjz38A6CUZmw2itJsBT",
  "key26": "2wWG2VxiB5yvsxzXPmiHSeSVcJsuB3ZHBSyGWuLaBSmFeGEpFfsj5nqfGuEhWyRN2daxaGaB38KeMUvprbttvE4f",
  "key27": "3xtH3MgRHvJ7KDwhC2WFM2oWjqSY8agde3Paxqv3fw2YAtADvUQAMNq92rgBEFzGymHWEhCvbSMuX1oMn3i1ZXCt",
  "key28": "2SozeB64eQp4mbckuTkDxk6k6JqYpSqHN4ovuu4TdN8qRYCSzVjdUPCuFbzkraRLZf6Bzwo73DgC8VZba4bYLJxV",
  "key29": "9ukqBrectUNsJN7JVMNF7bdbnxgAxrJjsxKYfRShRFN5eR7vBoB2VstSfTaiaDcTXKbNzZHcCqqEcp7GDqw5f2J"
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

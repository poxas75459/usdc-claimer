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
    "a63ctVj4kbrgVYMofUJTkPCBihDGMk8RiUMz6ey1H3pdCQpJFoUoSHEJ4CQtyPt2ipbG1Fad1BYLAaiNNqj5CAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AmnqDqZKaze1ozffLUYWbayJi8pRftDWjAUiGiiNPbTk5jBqPVQLTPSVqeytRc5dgKRuHhVkwuMHutQxcovYCZg",
  "key1": "5Be4EHB6tzT8CZRUBettYoH5Trkj5yEUua5T7Rgnru9aQivvJqc1kRyN2VK2xmNEBVXFuJARnphxUt43p7QdhxGz",
  "key2": "3kDjt9W4d1MmZwoDeJrZqVLWbhEg6vRSanFSmCmMHMuUF3aEdkFUs7x9h5CB9fSxsadjvk6j56weZeTh3p957SfR",
  "key3": "5ZBQjegXDEmrvpVWnCkqSUU8pM13CpNortYYAkWBxpKqeE8LSQCwTPDXnqfhDyF4vEXwdYsdtG9dwVXf5StSmBXV",
  "key4": "5hwCYQ2rK19MtXZDNdmMtbZsviDvHYf4Ej65EBNkLdM69to2tEQsYcQadPqn47TfexBjhDn71SofMw3wzxU8Xywz",
  "key5": "4PuAa14MfwHrvHUgG3yJzjFQPUWKAYnYcgHNTaDHGVkj5WR5nV3b528La4YX6qXYNFxg8MdqHPM6rtjoJbgcT6fs",
  "key6": "64FSWcZvdu3XKui4yKnBqxYSva3iSng1h4VZ12HFavTq3BzAnoXoJ6C4F9WjMCzP2wfAr5rRmiZHFRqjmsb98NJ3",
  "key7": "5rbQ2ignk2TvKJgNsWwkTeFXTzSEB1aYZYPsHUAMSGML4yRrKEfURy4ZTtgpScrHFibqP3BPDgzeyjXsD1n9xZDP",
  "key8": "2dScNgdJGGQsZQ4Y1JaZrzshwbS6WXWFHb58c87jVi3UR3CnpTWxPLy8EYesSy6GgKNEEjJJZZxGe57V3XQWy1cM",
  "key9": "2NGneuazJZ2JGM7dGBwB1Eq6CgU3KJuHQGFPyke5EwfkTr3PwR5RuAZFePaGpMdCd3Nrrj1QFkRS5m55ds6TPubV",
  "key10": "3h4nWHYWzhQPAVHJ8ARXDEzsxk2ERWJZPGQQzrqF3SNGK4GFkehAJKZpCvNbiV3mxJH1T4VAtL6TKJGZ65hMpMT2",
  "key11": "63bTnB4kUxNAJS1mHtW9JSfxmFFXiAW8YDaDGEm5sB2JzrAPdAQDLn3AiPpbwdgJGLcxXqHW3vrFCxKC8sVK9U9e",
  "key12": "296HVPUKXCnjvm8kNdYCCmDQtJbDuUuYLcrY44gqPKmv22fXc6MYe6PRiFCSuApXCaMtrN1Ayhb9T57jiefghhkK",
  "key13": "BD26XXe3mdwPPFtDcVC4LwKHcpWAcLnhXD8gq7aGchofKEdzmfVgBz8YCxrL2y9wVEJCLafkfRU1Tnd5bKWWQMh",
  "key14": "4x3o48661aNrm5Xn6EuS3S3ui94nJewR3U7BfkfQdwb5TGAdAYWrUBFPVagTUeSD4rtieGoUo5sNYrSDKkTU6m3s",
  "key15": "2fi12XHxhdmXHsVUY8Cd2Tw7EpFwzRt7jjJHewhFitqxWDuqexptuuwbUTJ97Pm5yq9UusM4fNmGXjmikD5F2oi9",
  "key16": "25edqWDEUH3CFF7LjNS6xqcMBt3yDVyHgDp7jfE6xJU19LU2rQaGAv7tqhoJBLqdCiMbE2UsMHWC97oKqP6qSbxG",
  "key17": "4y6vangD3TcQsEM1Shg2kuEGAwhcbc2Q4aPD3HvyPXcH2N19G9wVMGq3YckgFwdECRqpCbxzap81n6uYJWwQ8E5s",
  "key18": "5MvgHVfik2X1XEMXaedVbtEXEBVonzsU7noLPJm9r6gpoaUXJCiqwwsuuTdmCgZrMDvmAX5iqA4nmgCv4DsrX5m5",
  "key19": "2FxrFXNmud6EstmvxWQs7uez4HgkiT4FX5EwjkWxnX9wRHMtsq2u5SjB927ZHTjKwLpF7fpiZuGbyKFC8MZMBN6q",
  "key20": "mvHuBhkVMgwvUoyMHwWR7AXT6BzeuTyekqZBsosz4UjGEYLX37G9rSLYucgaU3hY7JVuepnskSfjR8cvSkbtjsW",
  "key21": "4VZnWrXt2NSCj1eGoFCWTgcvXBFeBKmiifm7VCP9YqQfzhHnDuZASSUQYRWGNDVoTxv6jcMrCxW1kjnZWyQ86UA7",
  "key22": "po4h8R6oM9B1SPvpf6nQ19gPFXvBPEPkF71CZMeU6CbsrqNPi5q11fTMcifHivEdMqHDhDyeozKajEMwJscb4gk",
  "key23": "5i8Wayez6gYCv5p2TzbtPNPopumqp5CU4pas3aQ9ovGUwH8Ys5umdCecmTVn12GtVQCPDCbePmrPzXcz68Ev7Ziw",
  "key24": "4K1rJ3LE4qr8jBktkHxNcTHv3NSvi2XKtroihEgyNvE8twVqEWFXpSBgQbyoq4X6GAfx8cXxcEBxgqwjfDVtd2Gh",
  "key25": "2n1R19qWxuxqftVZZhC76qhz9Z5jMv75UmMf9ym9bQKJs9UgZynpyDdSGP4D2MaStSMS1SA2DhMcFZT4Ak39VoGA",
  "key26": "2oWv5kJmtEzmgcFLZmPVn2xTU1w6DdCai8VssJAn9CfNyaeYv9ygvREMW8bC3NYkPTh4eg8Eb2tQMw6HGfhTLhbR",
  "key27": "4e79D1G11mxVmwGPJ58Z96AJeR1JMjMMpfcAb9zbRx58UeK4B62FQG8RKRNLqFFTPgfrLBA7SY9WybxnPrLmpqDK",
  "key28": "vVADZKrwk2hQKKTX2btCCfoiyNbf3zsgdyytumR6Mwf13z6C3dFsQBnpvCm7zFbFoxg2ieeL1QSxyY1Z2vmxARV",
  "key29": "4ZHbfzy7XCV8oTs2yPGtEw42xaZWtHmZ3eyBfNNBUg38GKRHZPRy5FxvYioFxA2GyvaSxwds6bgaNSbAyPZDgg3H",
  "key30": "3ritkkoP24JrG77DNtJ1DKH4Z4uZN8kc2QURYUEu4bFViV8tyHt9uJscYSHNYvwFa2CNrZwwmvW4pBNrpTD5unpa",
  "key31": "3is33PYZK2qSqUPv8wEdvjdMvmPxFdt1kMUawwdhvPt9Sg2RTDmF4SCHyEVnWHnx7cer6Pp1a9QEPio2h9QYLcRb",
  "key32": "2KW7R8TncwfDJDrGpwvF8WhH5KJS1Xx8FJvGBigvhcThBuT9CEY739PTiqdXd1nvb5NcPUvtsUHFv2vDJiUFKVxV",
  "key33": "4EpfQLMua9ja8kkyf3d2J7AqCAeu9EB2bTTprwaNsYUj5m1bvUNwiegj52NpWbeK34PPhSUrjcy4eQdMEefevSNY",
  "key34": "ErpwtN4LRotxjXMjRE6iPY557jMfChg5AssWbLYtpTgPZzbJXgeh9ZR9ceDKHPtDDoZvUdJBy697z4jT8e4w15w",
  "key35": "5kTUJQKzb7cJD2emCVLYbX7UU8RxWLxr3ZsqoE3CgZncf5JyW6NksJneyC6HbLBMtthPBvyum4Sojm6dAFdFCNoW",
  "key36": "5fK3N688w9RsegpoHSGJxoH8wFYf2T9WedtGf35uUuL3EBG1gR7fvArACQW5yXGCUR9e88Qw9PJDUDdcLZ2Q9MLw",
  "key37": "4LCnfiMRNuYSBamVVmrULF73zERL4zvyy2jBnZF3MDK3zMM6szYXkP2zGSoL4hLQKgAW5i6ty8noBq5v44teR7AB",
  "key38": "2LZ7mRGXGudyLTjm7JFjuiqxzVBmkpc4XWimYo4HM3Nm2XKrSQz8vW81qLbHXSqQhUW4ZrnE58JdBV9FUsrzyEQL",
  "key39": "oZsanHT274ZbTWzVUnG7rMLFtKbS7V9xuLhLMreWcUkaotd7ZNoHDi8sGBarg7sb73WtprCxYDeVg9FNX9mtDAP",
  "key40": "2jLuvmWqBGKMioYQcJuqnqyReLhjTia7KgVdmF8QjG4GvpUNXe8wGaD49XKT9kWWMbC4v1691CptBMDHFs9pDUwG"
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

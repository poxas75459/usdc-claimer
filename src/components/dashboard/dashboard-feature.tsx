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
    "57bSoqWMeymPnqqfJef7wom6umqQTywk4Gy4JaeKMspfLZ2uywjEukhN9EwkXWmrXMi6XTQ7XMGP7STpcg2jC8ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ShtFBCLD5qZvWf3zRoFtQi546DYs1bsULrh1xGAuEeYv8RKiXe68FQ5sJVYnL4qAjJMPLiMhbNALR3vFMkQ2jND",
  "key1": "4aVqkwtfEcWDXwC7rQa1849Qn5s7FPwAWZFYPozjE98n5fE5oeWsmnjSLGbWc3AjbBBeKUU3T3VaZVXXR8EC9Jom",
  "key2": "3QYPFVefSBDnQnD416MFBc7ELzvqaZuwax6ysUPi5U1bjNHRRtVdGvGKFAUMKfbLt8Lf31wsgpY2PZqxD8hezwsh",
  "key3": "4tAs64FufxyvqfB1ReLj4cfEXBD1XhaA5KZm4oRpYMv5hh1HZfJ5n8Z4MYGWb66TT8YDFRGTdospyquCnqDgg4PE",
  "key4": "1a3MSEpn9cprtqiDEHeTkUu8kys4bbKpEaKkdChFShnVDqvEk1zJ8SxUGwbr89gLx4ac8yymtYKmoBSHMkLi65d",
  "key5": "5EnVCZWGV61A8couZhbFPFi9gP7S7j2XySEF3NS6aT6esPsvkEdnewqWsjJQMNurT7z3j9x884Nse2RSgxjDHUe9",
  "key6": "J5mg1o9oTiqSgpy4x4HgR72jzXxBAANjKCVA6cun2LdNW8m3PbE1HaQmXiKPZtoFKrxCNT4C4wvgjYQgvijSWSG",
  "key7": "4H23TmREdRF6v6Grvv5Kr8e1QmW618WDypdCYUsiHs2hbwpePDDXMhM7ZLNBxvnsk3aMXYbVzxJJwnPHRy7uE2BW",
  "key8": "2bzWWmtLZt1m1K1Upot4x61x5sRGSsqS6ZVVZj2CP72fHViUGdtaxjnJHaPb4riP1XFZ1sb5v8hpTYevfNoB3Z3F",
  "key9": "5kz8JBvXyTqL7hoKBj9TRo2ZEaKQ4N4Hh6ASMruLHrReQUAHXqRAkVnr1g8e5nwUJV7f85rK2s3MYKi7zMr194az",
  "key10": "3sRvmAcM2cZSbEZG7kQKxL5VPVn9n6pPSSN9DhMtJW9AJdH33y4u6bZgbr98aAQgX9EHLLE6dtXQqXbhXtg5kot2",
  "key11": "4aHbYzUv8BgNEghbaMMXS1eUHcr6jeDAeYftKADnjK4kCvb2zheLTGfUFwKPbYotGAv15v371igqkLp4Y8qUE5Ks",
  "key12": "5ZaL4rkdgK61XcEEJCX8MD5douB7fPmfEYgWqJgwVAS8xgrgYn1rhniuJ2ZRaczsybGCBFJQPa4yCqhQ9DQPEssq",
  "key13": "5fdTqPHocXWzYQeRXxvTxT2mHWumwVCn3H8352BT2ZJvk7C5Atr5DwjAKVcGa3C7WfPZPnCqyHd6D9tj93Qo5pXZ",
  "key14": "aVzobc7e3nKUU2yVyF791e1L8SfgXR2V7ARwuB58fF3LAop7tBxkMg99vSBcLano8B5rtDXxWnAAKeUnRK7FLhN",
  "key15": "4T7gfQjfxNmy3jXb29GbtER79URN3422jTyXsjZHkaeTKeLWyfJRejwda4uVfGZu8vgxNoz28m2dJJRXT4HsKwxu",
  "key16": "3VPFLKNXBLvKX4B46NhAK8rUdQ8waKM8MTjeBd1n8wHQwjQSrygiMfC7kR2QCUCpBLd6pcuetyPZeRMe7muThVuT",
  "key17": "4u3i7Wkrmmxwv5yBHCsGJnFhXnf43hJBwEeCvhRc79Nhy3HycXaFfhtQyvxZfLD6dSndmxt2th1YrtG6zf6e95cH",
  "key18": "2vX68x2JxCKvZu7AwrUZfavvRfTHaEizggPs3jURFF94P4eZcqDrWXuNpaJgLM5cWPLq6YguKsKajfMGnHVbNWtD",
  "key19": "4fZVyQFDEJ6zFDAkciSQaQrd3oLzxBWzn76ncvmZ25gvRRScVGQZrCq2srocWxPj1uEhUseUPbHsXwm9GobUhkWG",
  "key20": "3fXq1jfY5div4nMZZPeyNNEF6mt9SfuKyGchEGdmcbDXYppZciwPnsENAKBEFN6nMoEgyodU5u1WXyxJjbexVDA3",
  "key21": "3zgVmt3nxKcY6gKzkdV9GzixipKLSxeDpcUqjwAs31PGkS8m7zJHTvMEj6qHgpCmsCrp76MWkaFVBmwHKzNyLLsi",
  "key22": "2GCSZPFV85vcH5sVpbiKtExLn1X93qFA6neg39sNmrtYGRXuyGnctbmE9VkSJChUZ4PX8QqnKgpkaqiwykLBYrJA",
  "key23": "61rggc1ivmMmBuPwFDu5hr87CvM4qspzXTmqEbhpdA8S3hJy2tsjc6DexhAy4FN3X9TWXPJAR9cCBcaysY3wZxDL",
  "key24": "3bkomqZqLDPkaziX6Fhmu7Zqj4gFD9VLAnQRPLWPTfCPJwmz6T51JjmVBDXwGSZGF6LpUU1YXvvcSA4djqkxt54u",
  "key25": "5bKp8i5fxhQk7CWvW2vHXFm4srui63NfFWFCPQMF2Qz4xBmdoRuZK2rUD91o2WjSJdNVYdCEgreNkjQki5rL676q",
  "key26": "5xZwJ2ED5wZ87hugb5QGY5ieTRZNtbWc5wXCj2dWkDiMRurAntA8WkkyUDRrZ9R3nYv2kt44DbhhK1hchdycctHE",
  "key27": "5XLZJu46hUgxkxHRMWTACU5bYAesSmetLCgdrG6M8MY1DynqVuNZnA45TAWm6wQtFucGe8axUnD7tpB9TL1dxZ4L",
  "key28": "mfKrCFUGxnjhhPaRe1RvzKhHfoh71A24rv9i3geFy2pbRWNoyhdNEvRigYToJsNZxYeQ52KrxBVfCVVjEL53Gkm",
  "key29": "21XAJ7DF5bnqxHJQ6gUA94xeNSgY9r42BREbok3DWTaYbmAvffJVYfNnYgMWwpS86DWtJJzWnWjwH4HWwPmmb9z8",
  "key30": "4P7Qf6poes27qpXvbQVYmjEsT24A4QVTsfudiCb7jRJaXzwQjxMLwpJA6TZVuPLRsGFTN3W8sghkhxJF2oty3bmC",
  "key31": "xPs45kgyAfgJao5aSukiusoLGwFB34dF7fKw7Lm4W8iX3dAnLfvamiGaQKwGvJBxKf8BBG1WLpeKHPf4Nk7sf5Q",
  "key32": "3EwXLQowym1tr33t1Sj3WU915yHz38Y2zSVU1X8MzS8Mz4r2puHwqZwBxngi6BQECkbQhT1z4pTrGF2TSxrAazfq",
  "key33": "yeGH1aJrZX8FhfN8Fwroank4GKHhd8ZpVGpLf4wfRBwtDRuVxLmNUyhQZ2TVFM4xXA6Rzhxgs3VMKBJjjiBU93D",
  "key34": "51SerTyyV7DgoetbV7fycrwvWPxYjJZNz6Mw7iXc6pB1KbnA41FCWtHdq6rv31i8ksbmBGQ4g5gkp5nHHEnCC6LW",
  "key35": "2UVjsyo3hzLrxgjo8p8rzgQTqCWL7Wd1y6ny8giw2rgdgwGG45TfbMuFxPag74cRytwAZ7DwusboUi95iGaBqDHv",
  "key36": "5oVa7FfNKSMo5MfWkt45shEqezpeUk9Wwg7KVump7h7vVo2e9xZtmPT9QN9uJmJ92pzwtVr2bGPyTWkAp5iBs9q4",
  "key37": "4Ach8PaAnZR6eDHdgia7a229gkzDX8t4Uf9DqBgPLhwgJoxfSFnpFwFjdNJ7J4qZewKChMNEki15M8Q38AwksS2j",
  "key38": "2cBj4aKiT5MMmKcYsbNxiEdsCoz3b2fRZLmXPtQoc7FDuywsi1o7rsTzcTYBCfyZxDJJzBFzxTY1UcdpviT8JnT5",
  "key39": "YEMuzJ1UuLzAyao9QejeZ9VkNPXqqcBLnvHPLCZdFpDikfXv7wM3mm2PrF62oUj8EVn86KQoodUyUqsPYwRn9ev",
  "key40": "2PTUaGPW1BFHT8aHVXUSquTFboMxYNW7jYfFrwr1bgcDa8uMxyVJQGsJ4GiGEBjYwUmK1WCFq1YX5eaiFTtvt1A",
  "key41": "64f38wp8nbyhRGMYcE6XVSE6FZE7U2LRdZya76NUKQRnrAvUNgoqivVbmcE7nGT28z6ErYYvSEvFYAoGXRyTuQ7s",
  "key42": "65AxXG8nzAy4wQogs7VJDdqJnEDLSwmiCKtqDx5MdCr8H5QoDyJoMjNM8CCpT8FN74wASKErHCSsG7dc562xVb3h",
  "key43": "3TbSvAw12PeKyZvdD2ZCzrwcAK8emPa8oyFRsR2dw4NNiWBd9h6yRxryzEwfq3Lyw5vUKGnyizNnpxz5bCxNNJQJ"
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

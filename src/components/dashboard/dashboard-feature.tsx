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
    "46kvLh4CB37Tzci65vFUCtMx1ZnsA3mqBp9JZfzzmgwDmTAo8th3i1giPDYu7UDtrrZqeiWvtcBV8uhKMpopEeRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttvEAgx8v2YMB436BzSxiJCzsV8qnSqsXbNVBwy7okZow21PtywadXrdKdc2XWLBPCe1M1XaWddGPQERjhvhW8t",
  "key1": "5sh5XaEmZVxrTU257vdZ4XgnVsKC4j9PrNmnW4DkX6Tpwf9JqTTxXE5p3pGkB1ckfVvQUQHSewabCQfZciTG21qH",
  "key2": "2FMex3FwQVUtAfTQMpXBZXXo62ArL9DutLcKDnM28rz6ynJgqc5n1f5nEf1Xt5godjk9wYTv65gw8qwoEiYKj4C7",
  "key3": "2UmTTPPL4UepzUQ44JjDiaqfKRpPaL5t6XMRs8uVco9L92JAXeFb62HHSReMbP5jQ4VocwwKaTBDm1FwtJaeEoRZ",
  "key4": "nJGbxvmEAUQiBjKpVLs2o4xrp4GGoyJKaKkNTMMowf5UcFdjyPcTc2SXTprREfGFNZLUpVku7JyiUC1BuQTSYMq",
  "key5": "3s2sP5SSSLLFw32h9kFb7Jypd1j6r5zMFxgudJFpadKHAPrnvQa7YhF4A8cYDzuSW4P8424Jq8XozURMWKuowAqJ",
  "key6": "3Za9x8SfHqRadMFoz64LsUp97DfF3coCkWaiQuTc3KvKCQgKa1z8qhit7EjqoZVGZPtF6sLLAXxUCrFdDpVXS4St",
  "key7": "5mqpNdDdXzQ9EPa7nGKfWFqcJhc6D7Wc623Nc5JU4cmenBEeaHhn14UBsPLMTQ1RPsBvhDwCTNbSV3DdoZZ1SWEo",
  "key8": "2cyZgA1w61Sx4a3B9FbzBfiDghggxgDc6Rw8aFHAf5xDymzQ5qYritaSrF47JdwiiUUdkvb3rWX9HnTP6RemhAK6",
  "key9": "ygqFtQgUNHSPvLbsAj9z83TNvd5AqSHGRmByJB86UsbhCRDDYVYTTXA2RBCSmpRBTf1Ath8WRwMrwwba5DPvFsn",
  "key10": "37U6KLD8T1F2Eco2ZXAwNxkzF6i6m56qBYS7gVaFwqCLt5FKQE4nmqVQ9znYPWCXB66TAcfnfyh8VSLDbm7kUzWk",
  "key11": "SpXB77P1zvGxRKwesnV81hVSsN44Ryx9BSQYDnXSzuZBzv6ymph9XquojxgShPpHQC9oSBXCETge3doypHwJvvj",
  "key12": "5QWoCZDE3ZZdtJnXmTmVTLwQaAtA89XseNsEDe6ibfLDHyK9hVGBj5fHoQtrzNF96vycVe363GC1HnKUyZo9Zm9w",
  "key13": "63wp6mnjDHkwa4FwkTQBwBXbkCSvNk33b2zn2LwDcmGGvXmjt3UvzLiVZhwUVRiLUomFLLSW9mEa9u3ZLeiBxRoF",
  "key14": "5ik7Wm9kCYNtw2NVmaYeKLtpvXM4z4djaJHBG58ewozFSg3wTistDhHUowVkS8f3RKBwCofCso6ngEvSUNL8H3oj",
  "key15": "3KVPHtjjP5ykNgDBJSLEszZHUgCrunctHqjq5hEwq2UM285y2YepknrZGfZ2Qh15a3VNMSsTAGxQWEeSX9esaFmf",
  "key16": "2oboKHXGssi5TzQxnMK49EwPVj9gFaMaooi5HJyq5zaiCmHjY9E5DN7WTQV4xf7msk4WJxpJYRjLj43rVxv9PPs9",
  "key17": "4kh8mb8hrFUtoa23XxoqanRK84cYMFwemuHkNnsJLJbEW2Va1EKZxa3eKHinoySMhoCNxReFvoVKg7sWF6gNM53A",
  "key18": "583NTtPkNsDDS1VZm4FgpWDTCwR2LRZyqEE5U27cBH2ptxkNDK9kqesef8iqfBPEDrvC7wnoszx2RrGFgAnoeHrH",
  "key19": "jhboSBpp13dyWHemvBsjydK9Ys7Cq2ckn8VYg6gpm2AKJxPPxsmQXShbfVXjK7SrhfAdXhYafosr9KZQEKwENE5",
  "key20": "3NT7rKNBhJ9AxLUrkEuGwSJ81FZZiYKnHKv98wJeYL1KK8n7WLQGuFqjCWn56BhUtv1sME4Hy9QkjuDeZcfs4RWy",
  "key21": "2EQyG12364ZsjrXrCQBP4QaG3kTtm7g87BSTBsrgSzp8b4Xbq9RPrh8467ZEkE9zPsdpUwQKryFbq2kuNnyx4T3F",
  "key22": "5hywY7A4Ju5KQXHgmE1oxZnwXvZGpMLVeiTs3NVrtghZa5LhEDandfhBR6oWo8jjXfs46N7Wejg8pGnR8RqLW9gM",
  "key23": "2Yd7sUQq6BWHrz7VFxVjwd7M2NLsRVtZxpLGmktZhZ25vTr5q1oJxQGmcqtaMmvEbqnmbMzipPSdfY6jKCtDmLsE",
  "key24": "3QLAnnJGEkQZifYSMZQApXF8BnZKvNwUjZW46HGU3YbR4iCFXDYp98NqKQiDvav4DikpXfniNmCEET5JXDsu2mdD",
  "key25": "4xCFAzgGQtkpQtoWh4KBpQaSJg8sj6xCLszcAynEvxUM8mfdnWjeL3bkdZTD91xjfgJEmzsZ3hHTs7BoSmY4hhZ1",
  "key26": "4xopomc81yuUQf6BLBzAPvy1uSMc7S7gbfCc9PAuE1MV72RXMyaUkrPVDi1fcoKzDKkt6oRqTN7uhSboVLGJ9NrE",
  "key27": "3Yw61BYhD5TJxtt5xjg2kGmAyeHKGYteiRNmrRMUCddEQfYEZE41RHWU6oSiSDncMeNfacN9nT8TLy8SS4XNVD7d",
  "key28": "3sdo3Sdpsb5MSsbgxcg9VmaVwroYiiFRpauZRSNRkPDTtvf9L9afBrXaAxzXJca2f8ZVCTZysP8qKQeKXiyM9DuS",
  "key29": "2EzFMtpzgfH1MRczj7t6GcktvmojsTd6ZhzkUg1zuev4VC9UKReqxaB3rG1DAnpLtYsR3d9NFnE1wifcLjTBi2hw",
  "key30": "5mE1RDeyqaG2357pBJG65bKLa6usFYSDKi1jHeEiWSCkgyWNpr3VzJDaPqBPy9aHnUTYFgqHjMsChE29LrbTUHff",
  "key31": "3gwKENSR7wHCbUrsjW4fu5w64v1zYwjmQaJbZkJMTjzxew4k3tigSyUSrZSbYRAqVSEqH1yE4Sp7u8UikqxNcBsd",
  "key32": "3HBxLXCR35riCi5RacUrFdmxDBRd3dDJagodBoTt9TP29gzv2Mukd4RcpCfibD9ASrH1BUERcqe2GqPxU6HddP5t",
  "key33": "2ALisF5YnKqUrnfzE8AdYHYNNGPAnYy5FonPDWdGeVryySMykGi231v4N3Y8m8k2rDRjdgqKUT9mBDYYSERxvVTm",
  "key34": "PavbkeJpByvcduqk6arzh7Tc2xjJ7v9CdeLF8naD1mMvU41CAQVtLA8ba1sQXatj41V7jAdrUJtUJ6Py6rVofhr",
  "key35": "5apdyCG4J2wwDPMmV4tbVkki2JzTGi5vq4zcYHbvAFpEUDMyAARktWNpsC47xsvXKDnfK5Bezc7XjpRsqQgxPBK4",
  "key36": "4viPUBL79CMy4pNHWBrmSQoXXHBYRdfKRRXQGnyyqekWBQFDCNGwAbHMCwE1ygLbvTWsaoJrt143G7RjBiSysJsA"
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

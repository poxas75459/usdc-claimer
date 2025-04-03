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
    "3QHxMTv1u9FYE8nd2JGePz7Xzp3WWLn9hQ6pRGjyAWtij2zLH63eXacGgc3PTqsKin1LJm6511W6QhKJraQBA8ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pTKafFTGa7mU4RqH5jycjc4EnoFEVo4JFSGWZUZ1yjCYoL8xiGd88r9qkJQarkTFNnTKHZ7r7jc5Jp3ywJxYHSM",
  "key1": "4JPMge8mPiNsPH3RXn1992vHzgUvyvwLNFVzHmiZbxHEf4m556qzJk9XySsTvNnRmnCWGBMZCsaNkBEqcGRfgvAa",
  "key2": "k3qSBnBECujH1NNpgDSnC7CmvNSJzAKpbyMnDWt4s6dJnhKSaHG95VWwDf9fbm9ktPmWy5J4tfEmGmG2RwKLhVz",
  "key3": "4YVR49BJfZ6obTkGDhaM6muP5BEgRnBJA35GngKpbxnu8XwRsDprZbXiUhWs94fx86JwnzVRiHtE8mbT3DF6hFVC",
  "key4": "rb13wE5JEHEjBVt98Fp99tDx5SfnfLvcqTpZxXQDXzRScv4hYE7AvvvXA5mLVMX28pbr5Z45rfb9ZhepmVDVbkQ",
  "key5": "4NosZ6HLFe3PRSZELj5ARkdjyqbDzconSXvn91XwLnLgZac8asWXeQgNycMERKev9QACsEYhpSVQTPCefur5GBRv",
  "key6": "2cSsm2zYHceosDDfk2f1d7cRVKHj1T8WoDZgY93SKYGmeVZXfwuVEg79hXLvgdqQGP32N7auZDM8UB4RiWcbCeLy",
  "key7": "528gsg6o6fyoSdGzmkFXYp16nFK1CkQ2yuPkRKA4RW6nFpYipfhyf3UDp1PiYBzvWxd7fTihzxSohJbdfQX5hcko",
  "key8": "54xRv6uRwwt22jMr8jLyDz5SexpcYbTwpBHvcqNWuwukdSfnjbCZJk5A98yVNHFqZi2eAgxo5E6oNotVevBEzEnf",
  "key9": "4chN45nze2N8cDc3dZYchMTvYPAe5gWUEBPnoSB1LHt3ArEmxZadqmGwcMvmbTREgN66NLV3LWuGmcT2eBbLNDN9",
  "key10": "2WhnuhFCwQJi7rwjDXHB2F5QvcxnU7iTeS1bNxcbz16wddKxzCwfRwEQWiCT9jwqFN6cX417Z1bKNZiAhD4zEzhK",
  "key11": "3KuA1DpcvA9aWzkfHZYPh74x8MMZME6WMWmtgdhSRP48GVaF1eKAuAMij5SVq8wh8k1STbnagy7PD9ofson1AAgS",
  "key12": "5V7dXHb8q3Zdj2T5Z9e8Qwr1hx2GF2PdQAAUjtJ5n2Lcmn7fNd87yEt1AyH26VNo9EGmJFpRFGRSj9zxzErZq4xy",
  "key13": "2e44ardWiiAAhTzbWhVkx2wT1BnguP919zaJDxN2nGNEAWm6w5LW4pVfiiZorJDU4fX2hKYkKoY8BSyQiCQqVpA",
  "key14": "24cPQxCatiRJmtVjQe1mZZS3jQz5VdWfAyZK6bVyYbbbj3cSMEkzmUmZfsPHfhcCH4GPp5oxmaYAfdnH2imWVmSv",
  "key15": "2SLSZqu5UtzFZsJRNX6iBJgk8AfHdZwNd3deD3UcNrBiMagM3xpYtbPXgTYwBXQRMJQSP9ZQCmLQ4rw6ggcgPSnY",
  "key16": "4v7gFp27GQwbZiVcuTNyBJ84krN1kxpEEXgRpZDSs8qFFEfjYjWZKYdwq3PXzHeNZi8CtEsqfPsNny1HzVH2yonf",
  "key17": "xs3jkFvxbKJ3WWyNzXxpYSoAEEVz6EXC7V7Zv7N3jfyoaXY3Yf1aiaSGDWGUL18FNkaEiq4idScSPSCmkPphPth",
  "key18": "5Hu5RDTN12uDDApnEyyRKkzrYG3ofzzK6UZgyg6e74ciU8YHXma6CYXwQZC9PWKQaeVUFJ6otER9jH5y7NPHs2oK",
  "key19": "5iAimNBmEyzDS5P1Tv6H63Zz9HqqGLQeQQNKVQTyWx1FF6bgeR4g2YDQFAqkgPJpEnP7M1QkZZTWM8Am3WQetE9H",
  "key20": "36LcMS3oSoP78HAmnqDL7T4L5V53TD7fEnYthnYkrbBGtwXvpcp1fdXP4rNrHyr8foATspE87bB9exEjWfe3KpQY",
  "key21": "2GBkqt7EHNJxmocPmZND6XmP9f4mND4ofgBQ29MbchrQsNGjXyYa3gkWvyj3GAgYj5WjYoN2cRMuwF6J1sSVjJvV",
  "key22": "5WRWresxngsqTq2xApoW9eBPpkwrtQrm6SEJjbK5biBZA3QyVU1kLih6bGm54zEeDQfhipXbxN3Du9zRqsCw1aPF",
  "key23": "2Etkhx5WnumshAiG3vJn436MoBrutjmFSfc9F433xsQbkcp8LHpcEfPy9fEYMY3KLCPmjbRdyw3R2xUQ5quTcY4A",
  "key24": "5aEf4GPM3GMQDUiPUoqDgzxx6iNAfrGfjccKtMMxAvfrY9Y7YZtAVD4RMyfAUNZ4EHT5ZTMxuLWnsURj4TKkjZ3h",
  "key25": "4pJD4LCp56xRr4gBGRxke4YJzgzvoo7oyfxaW9P5XA9wk3f5FpNogYy8Cncs4Q4U3iDsbcAPZQXqjuP2HLPuEnsr",
  "key26": "59pyQa21NYBj4LdHdZLYUZ9ZiULe55nThkqL8vjiDQ137qwzrQDjoUtYn1PW7WFA7o8c4GYAu83TJfyRMfdFj4up",
  "key27": "5HHe7FeK2i3msCdyLaTVwDH7HtxYd9DsxQu4HuJx41gAtRQAynw7m6YrnorM1dPS8HMHW4YrnJ6Egvy2o3ZREjtA",
  "key28": "weCLPWgyeWCn4Lddk1FnhsSEAsuzg9RVUbGDRHLy2s7GR7ZFbpbA1WA6NkAU1MkHykAi3ce7GKhjiD9FwKpGy1a",
  "key29": "5NDddoaRfdJiabQuVLSfVUvz4o3sZFdZFxqSeKAJyn1BpetxnxS7UTeNKtX4vWpqEMiPDZEPricRREuEVVLPs9qn",
  "key30": "4iT1mqPDctKFQ9iyzMxgp3uCZEiVCwyuRn2FactP6ZJ93mUK5eaMPVgLoYWH9X4qBvG6fkZYef4PeevHj7mtkU3V",
  "key31": "5HdEQqf4FB4jFheLnykP8W7iVRDbHjMgs5opobXaT8f5nnc5ebE18THTnTTbndLqSU2xQTKTsDm5QSPcbQek1y9i",
  "key32": "57BJ5zMqkjS8LjPYM55emkVhNHvw1y5jsf7wDEft2kdgkYUXM7ymxaYLLLk9kGzTeDqHQEjAsefi8r4HtoZne38t",
  "key33": "2gKWBihQAnpFWD9ytsbbEHyDyysZXMXaXge7mWjNTHGjtxVGS7R4VnLB7V1VAeVjsZFGGKaEpX5Fuo5FuyRoG6FF",
  "key34": "5xaXscrajyF7GNyEgpKAMEmDwhQW92y4zFGdMiUVHHvqzF5aXvYuqsHWKHMB2o6xX1GUKjXz16YujRUnbpoLS9e6",
  "key35": "57ixhXhH4V89evVb3xgNNoVK9WHKZzE4yrgrEoMQcQGNqTZSfpDvNpxTDYVUjktwgfYABKuAzzL1kGNvrFsS21o2",
  "key36": "3yoe9HjNPKRZrA8sj1fE2AJztJ1C99PhgoKupSAk934AFphRzWaF8oFnv7pgBC6o8DH57wjB9F2TTCM6fhKz4apC"
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

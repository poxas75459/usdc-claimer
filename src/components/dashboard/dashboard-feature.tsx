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
    "RmETSdcpR6kScumZYZqZKrjZnrtUZJXdX3HEsgzu6SbBf4oQyYJxu9MDM783gY1T5iSb9ZJZ7ZycZD5DVYfS36e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pCGz9E9RATzHDByZZoVBusP11GXmuGb7axDj1Y4XAHu2ysY6rLUgJz5tFKpSiM4yxZCkKBaE46vjCUHHEJuGBGZ",
  "key1": "4kGAFAU3fkXcTteBz4b4zacrE1pwB1yW9opDRuCYBakiZZuG3DpgnZayCJsm6nKZHDc91kYYYh7Y9P8uH8n7q8zE",
  "key2": "4WDcJ4nT8DSY8EtyfLSnJ5HCuKuQ9k1idp2Xg4eACnYMgGu9pWU6qL52RfeHNJHZy7nBv9VAapfjxivwdx6ioQaJ",
  "key3": "47faRwib3ovQorSWB3LKykQTKY62RHabzvrKaU64QFsi92AqWhNxXTpY4NLJGUGEVthcrDHEHcDwfZWkFJKnjnJo",
  "key4": "3cCPsFzQJRQZLVegBXHTmFZ89vN2Q6LsdffPujfXxiVeVQWMARqYz16aobA2qHMs3v37CPExXgRWeYQhduDz1hDG",
  "key5": "2E27wHQXe92mbu5qEbdwWt4jhMPNi9MHsbooebSeNdHKcMqUtnWkb1fJLVcPdjFMYUey1v12Ghvr23NrgEqo4JKT",
  "key6": "49T6vBtNct7ie9BhDmLPwR7KujtJcHRreVE8utJytNxCJQ3YS2EL3ZUuL6qP273c6X2wko5KoE4g9nYaFf2CsL4B",
  "key7": "63smxGHioKHgrkd2r7ZLkqYVpxUoPwZ4ReEL9vnYtFD1jVoLLPmBfNtw8i4W7vtfbtGkEQR9sUSYWNDskqTUYd6a",
  "key8": "4T7SdKYAKyuhtx6iK1cMzgQxW1veEa7oFma8gTDASwB2jsDkHGeN58F9cPWstX9CJm5WrxPEjhCBFn93mWcRnUJp",
  "key9": "2FXgZVxqPy99XdHSMQGVtdEHaQa9SrWtHN2js1PHAXstE6yb76z6oDYTThjz3kbk5eoTyNzVXf6DKvVPgiABBLx5",
  "key10": "65BKzhh6uEsGDNAM4LSPjcewH6MaPPDqTxjhoY8x9Xzt4ndUBG1YhcdHfpSPy1LDCcEz1ADiJuJbVfz7hjLdCSsB",
  "key11": "32dm67DhkhASMHJwy5qPK29W1oDZyaeMswzJ8GosUYXZzBTpWCPKyhtaTffPqgkAL8GHbrmczLLFvxi6PRp7cx9n",
  "key12": "esj63ocPXfptHRFwQXczwbu9KDjdc6CmnUvpmZVUvrECkA9SWAEAMnnRTnRV7Ey8gUiXYoLSJyT52C88m4iE2yY",
  "key13": "5LRADzHTHuTvuRbLsQXQRzzjBiAqTCz2xTEvKMmd4wiajmBsmqCZwMqEuSe6m3s9etg3h5TNhFHh8KhJNGy7iVoZ",
  "key14": "4PqbUWUWKtLQPmNcUpBJLYcBFsN17DALPrEh98ft22Jqj624tcVig8cHnyZrQx9YdXzzyuCHM28bpe4jb75MyhQj",
  "key15": "dQSTBkB835BbdJddqiqTjUhFopyizVSzgr3NgT1NMoyuTZZTyfYvanKar1RSdr5NTq8ZyrDg6jpeAK2c5Kcntqb",
  "key16": "pCQt8GH5gVVZDU3AkBXDNmZEQor2B5zXWwrN9tHzBnk8j4vFaLLvLJUvJDAhoQBtqHajwj1WMcNQS6M4Vb4z3LG",
  "key17": "24dts4gUaio3dziD5J51bcWcNVPYTQ6AhpuqTeACdjZi5LdAzR6AoTMH9iqV6wqb2fLdRBYGnUgMnvwewcQCC8aF",
  "key18": "2sNoYxhCeQDvL6fRqSuLnw3k1BV1CUuW529EJSckD9JC7s7FRkAux1u58g5BBjBJ7jTxwqvdw85SrruXj8u7PCQy",
  "key19": "2xELMrMUKjkGsmfQm4GL1sDxgHrXRCqj4RhCCA7iJLprGD8hyuBdQHcaLv4oVmSwuaxZLbD5CbvrbJpGQTNjjstX",
  "key20": "3k3AzwZaKB8uS3oSsoVtLTDt2ZCQFY6CJ9VME7jcFyZSGxGT6B8uQfu6RuCd6doy5jioAkKF56jB8zxU24ipgpND",
  "key21": "4LTgDvtHk989s8f1XvhDJhHNM2eWAbqpxZJk7BLCfFBw2J1o6ZAoGbhdDhQSbND9G1PtCVdn5pJbpCh7sBus87Mc",
  "key22": "4NLBpNrAZPyTx3VeFxbGKcqzvoHY7pKFBnStTouHZ5KNB7qZuYVg4huGrJMChUm5F7crz24TzfJA3vpm8UnSXEnb",
  "key23": "5EEUzTs47VbHqX3HvhC3MhPyZNMjmeCRyykLDd1Z7h76i1PZRrnqGSfCCqQbz15FckqAwUVvGrHH6r7AFGPQzdQW",
  "key24": "4pMdBw6EgwM9gkoqrF1F1jbaeZZtpbqdJ4W1KX9mUZeB169DWinyLmygx1qNKsqJ49e7RyVkSdz5UEyn8wznsT3n",
  "key25": "2rsgX8SEH7V2maWjyuZmP6gQmtbkff6cRfuCigZuy5SWNgZ3jATteq1qt5DuaHqyxnnb9RpcBdpQvJCnsS4TvMAH",
  "key26": "4qHVu4qyHzMo5y2qhRDxj9iAxaqyDSEG6ino6m2PtsUCnzHWssRKn6eMf6Yir72BpVJqdFn7NVjsArEC1k3vjQTX",
  "key27": "3Sz1HnhFifc1oYQgDjaXG7LSKJJXXurKvZNEpokP9DYX1qPfroWNmjU5Ay7akApqv1vYKp8u6G9tF8j3Lyj7ipKX",
  "key28": "3M2x4JfqMxvpmCC6Yu4ks2nyYmtNBHymGhgTPcrG6fhNbaWod3CCyvR5xaYucciRBGegzi4X12FtwnGTpwjJ5y5",
  "key29": "235gymEFS2HmgULVkUcuAHJ63oFL2kMbwhJmQHE5bcxcvGRBBc3G3Rri2xca7p2PUb3A5NaTBvjCDUMqoHQkomQY",
  "key30": "5F918DAFr9qTrMBKDUAUQwp3qs7Jwe8htC1VV3wbuMK9joq2xRTKurfUU2GV9YJD4Y9NAtnNif6Hj6W8XgkLHf8J",
  "key31": "5j1TvEC3haawqtEGczL7FaRJJZD51e63LBCVVCCbeJWczrdF2kxG17tJeYWkAHYPPz59XzQSNPeuRG61YikTF2nS",
  "key32": "3jq2HE3r4TRE74hARbR4H5DvRopJUVwvz1EC6akcEHYPq52BqbaaKdUMAtSYWi8VzABmdYs7z4tCx2aRvZRhZxKz",
  "key33": "2HRNnbCC3FQQBRWnyj33zKytVcYSmA7YsbaUoXKiJZcAx293bZ7WsXd9D6RS8qwfzB2UkknwNmpQz9DJCCa8PhuH",
  "key34": "5JcHUq3yiQXnjhPoA6qGUdDy9MnFNXBxRkVwyX4usz8HZrzSQCBMc38ZrhyKeWYY4aqAdRW6e4RFTSS8d4xXWRkL",
  "key35": "3mH1VF2srmWC7Tac7tozy5AkPRMKdqyvCh9EeueWfbrUEmLSi3PG5zFLEfPmfviYcj8wZtRj6e6TVnjq7to6j2jJ",
  "key36": "55TAr8FG4a3574h9WVJdSaXV5TEqeM5yzCAax3vEe89uBneePUjybG8swbbAt3RwX8mbLHYpo9w7hUXGYjbn1VcF",
  "key37": "5quCvbWpj3gQ3n3D6cdX24DxP32s6LfhUArpzTcA2fagYpsu7GocCGu8EQ1Z73gHz38JT9fR9q6brgxorb89Bucm",
  "key38": "45h9B2ga4nqAnTLVGMNum13UP8DgH18Vid5TEitiuFGnv5zMQqNojpA2A6oyC3Uyn3hPhf2xH7K1GvQDe2QwMmiN",
  "key39": "2JcYEjoUXiqd9x7ELcrUxeH82NGoiLBsrUKMPb2CLaoLWFSwrdHgQxC9MesqfNXThCntHb6gMK6ZVhE19Kw1hJKa"
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

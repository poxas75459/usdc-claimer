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
    "5vgNUbJPeFoJYZJyF34ajcaPzFSzhFMjn9xkPARTrPpSijNZATUUJ1kgFCGz7myposDv4qL54HbsVjrwqujMQ2C4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36N4uUWzjyHWyo7W6ivW3zZsKpZxwLLBuuDdFdAgcWTAPWAYtDGXYx9s2a9esZivMKNzoHGL87qM47vqf3wADrFV",
  "key1": "3NPDSWodzFTbp2DVeX6KUNGGD9Ffzv7rLdufuXxk74stBd1FkNGa6REJyVyDwuNcVN7FgJbPWr4xxREWfHhnoTWH",
  "key2": "2dDFc1KXZR6ELYVGxrBWGeGJFjLAnVfisSJugb4GabEwLJqU3PDoStSK9DZhDYDdq2MZUEnqPW5psD9JgKW1MtkK",
  "key3": "5Cn7vRBwEHiTK5h589zfPZqPCLH7EiRdu1n6bFDx1K8WCSgKcLWXhh82AX7rdEQc2dfqVJWSrLLziVXmPTkgCYCc",
  "key4": "2eenpKZGRnLvwJF6P91c5qsepNNrATUBWZmoYUiffzDHTipaQ9fU4ZkxMq4Hjhf7zshu6X1o39VKjgUeuxQtw7eP",
  "key5": "XFr3meog2Zs3Ggbrx5iWKbWSgnx3MgM7hD4RXxttvyJqiaxJ7pUfoJcdzuszGDK1M3wDXYBJwZL2mbQoppCpCWJ",
  "key6": "3RjsvGKmTQhVzsfAQDoWfMenHEmK3w6p5yRX99TVUKjTRYAB7xDEKxdrjL2hWqdvyDn156a6gDwj9eQ9wRTQcNJw",
  "key7": "32yy6RJ1dcMF4jX1xt2GsKwfsn344tPxfASXoEVRrTbxUjScF5j49bk2qaa62EHBSavbLGwQGiD7vtZHmWBCMdhP",
  "key8": "2qaWT2Lt9X17YwQeUW5pWusjUuxZCN8p3cRxfQmnuZo7eLCdvHRanN43q37v1ttXDp7S8nZSEuwH5gWHUehG2a5Z",
  "key9": "2Xxbs4WZtrTBpK3K9pLzr6ab5M9ZcikhbXgCd5geXN1VZUL2zJoGcHULuTFgffwzx7qBP2f8Kiiz1r8ydL4RSvkT",
  "key10": "3JZgWqW8AGWxrWXEUyyAZBghimvrHALEfLsXCHSwUKQo5sKCgVVBaqhJVxTRWWJbyT6SkrpkWwWBrNvcTRjdyJoa",
  "key11": "4r6kXkAMfemoDzMdH3vjVkyPTUBDCwji2jWscUeFRdumbvPpA78FKDF71Bggtmy9TewEKUSWZH5wH3mc1kE5grdP",
  "key12": "yP49zzgCdnVA4DFb3Hiir7DqFWFtqT71UbZrNuti3hhw3CmQ1QfkYtaWHquTsiMhdSj8XyXmHdirNhct4x9HXXi",
  "key13": "N5XMVVL1W6MdZXGbtn3Bz27oYaBucr4WfLCgYFbGUNJcD6nLcV32mFCQT2gWEAHFa5g8UD9sVbpQd8qVaJoKWX7",
  "key14": "5StfdtMqK8YJjF78SLvZRnZJ9mi5ZgnHZbzgiqYfCj1GDNW9BhWptzfLxXERfTRhx9XaYN34NrJXBiYXqrQQi9vM",
  "key15": "381zfdpLDbuEQhktjAi3LEGyTYJKidL8GKpc8JexR8kFihBJPTtTz84aN9nXMZCEwGHYDLQqeBvHZDUraMBzunMN",
  "key16": "29Vjn7TKUnWfkntVvyNx8gYeJtQ2Uosza32rfNEthadWB3FDbYNxPBttPUDmHL35YqiiWMe2eTDaKhkRKyHxQbPW",
  "key17": "5JVDCPmZPrLHaLYpwFW5yCGrFw8v9Fds8xhaJu24xCZNEHHSTnfsMtFF3HroMNsyfBEAhu5fUL8JzjYXFBRpAu1v",
  "key18": "5n6xpNtyJCsQm5trrZBWZzjXre8TdmYqQ8Sso6t1yUtY5i4ECBD2Xj8obpbLMib5VuKdoEGvTTVw48sQocLnrJVH",
  "key19": "36kQtvZUYXaYgHNmYLPTrnZ1p5UNUAFhopiVfVnFG4ZkhHpvTe8VdKzijHZ1U6X1F9saDFRJpvRJdiAR32z6AxJ9",
  "key20": "3HUdnEkV5QEsXTyY8LzKdHVrUvcxUTmsXNfXZRg4jiLc4AsrcjgPn1wTh9d9otcsNGTcYhysp1T3iRuVHBwM48wr",
  "key21": "28siJPRMdGWueuAH1ZXwTz3TTEcWiSK1qS8dGvcZPLDnPp7z5odxEjeHqKpEyBszJw7LR8z9rbuh8PbTDddpELsr",
  "key22": "4MVT1FLCA6XrRiQ4p6ptahhkzbnaze4e5GPrJeHrJP5JeK5VTkr9gDR4MjCFcb2knAQKKRop5mbPwDBjiiuFM5u7",
  "key23": "vMAKX1mjos3hZgogUwc3oKbyuDuqzz4i126z2EiRKYcskV6CWeZyazG9ZMmRSEssJVmA88XVAPE5Nr4NZY3gMFE",
  "key24": "4YbNtCGzDov5osawBDjhKgwYzd8BKj1h4KKDtGfkvqkBpnTeJ627gdtfPma3LJYamZ2uU5aX6FjbRR1whJWktiDU",
  "key25": "SbnGTcdvaxZ7xUJKRC3CyCG3sWUiSNSiri5bVgpTEy4bpqnxfNuU6aXSCH6wR2fxVqQXvWfAXuB4Hp3iHTnLx1W",
  "key26": "4hLHWqRK991yKRGLBVnJcaxGcQ1dZNjzfLZdpLsAPCK8FmN7cseWbtBCFwFbFtr8ZNfCjUZzpGjamrvjGkucph8i",
  "key27": "4KVVoRs9gwN4CJdMJrVevNBneU4eBiFL5x97pMuYF3kNdRevarTUV5RvRaGqrkw64mvRhihuTKzCx4fZfKDhHSFF",
  "key28": "2WMARu57b5wbjZN4c1xJeisP557p4niNFU4rrpHpbzSgPExaq6RiZs579N8T5AVFA1vTfpqiHUCYDyRvjHzdzDjn",
  "key29": "3b4zU8pgQmYpA2dv3Pz9ivrA7DLdsgWC7qKGSt12WmDZ5BtpAvAUS2kVr5fvHkV58iJHEXRP572KL4AsdXYpwK78",
  "key30": "2BFSy4Wv6vbNd2xosCwprou4DQKMXw7LARidAK6xWvicqdcVCeEg38fC2TYqzvqQ7nWcB1vCVqMK1fJWSrmi8Gve",
  "key31": "KFyVe9HznKXGMrUbLaxMs1tf2SW6fDKDt97DjNZnFTRhi1N3L6NWkSYJ2cQHwYmKJrpUqRjA3UqCZPe1x2bcETC",
  "key32": "3aBsVqcZLbi1cjrQxWXrV6qiDGMXhs1BxCBWKj145G1eAAQSgE3BqhxVx9Nid5tBPSRwQ1CgLDJcEEYYWmEwyNyM",
  "key33": "4eT48qAwsA2SvVPWGbj2hwm9zA81JKq57yFJWCsCLeM2DuqTQqxhdFU8tYT2SXWFKzgYXpjQcu8JNvgpLnDUzD2R",
  "key34": "4fXzUUPrM3hJjpBQRW3NvNuqYZCZQnhsyizxti3Xtuui8jm62EKhKejs2tY9v9sJy9u1V9KbkDjfd28EEiFh4sir",
  "key35": "4qoqoBGsRZraGn1d397F5z8Ka2VLQHaADY9P4fAbrBuZUKWqRhdN8HmaFbJ5vVsDWvPXE4tpAX6oH2VFNYfbd8ot",
  "key36": "56qmTYgXRt2mBKhqUm5yKkxen87uJoM33oWRWfk6EW9g5Xpj5seFwZDMMXQpyNugasZpHUSskjhE5XbXN2yUvw69",
  "key37": "3AZ9RNsxoGEhLHW1EiBXmEoZPgabpsJFfzK4FDLzRPjkzkVeVygzsBwKJCij7hVh5vhATCGvDxHd4C5Q5XrUyUg8",
  "key38": "5wxBmVNdQ3uC2PKNsz3L5zuya6nZHXXwrb12XoFKC91W9T3JMNXeGFTPrRsTXWtMtfRU6FApaVXeA2QySHkCJzFh",
  "key39": "4A1K4zNH13nCF1istw5eHDUWPbT52Wpw5gQ7DvV1h6qZ1cxeFXDrKm3saSydin4KiriGqNTe2dAH4jf7awXAB3oP"
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

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
    "5aWToxPQkjQ5F17CrVxddbPGW9z84hty7ihBaWcW2CWLFBSaMohbZQZ9X6WU6PVbK41kAyVFYQGzjYNwpgaWGEDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BAgHvLDnZ1zJevYz1DMwebfrAPxma17XYTsXXQwjfMsAgMCytBqnnTNiKggymfn4UeGBPwAcz6ciX4ErFXrAsri",
  "key1": "4ZYSCNb5PgSVRuumwURaej6p7jc3AAJwd8DE9EMcRYGdKP75qQ9wTFkZRMfcb8DGb73HLdq66vSUBaQcRVhyXoPQ",
  "key2": "3fk91sg9DZovGU6uksu5GQLJMb7sSx6pPvXhgniSzCLKhxaFnjZP129Nk2oe7cju2nYNAenZonRHtBjQ6DCfp5p4",
  "key3": "5GmRvSDcS5Zbe7dv8Ns16iUeBQ4AnuxPbLJfYYcjrt9BN4DRAxnXnvL4HbTLbDBtuwzUUwLs1VLi3PqestyQvJvk",
  "key4": "3jk9TKei6kuTBe75y6WNE6zZq46ySta8cqg8wK4SQ4rTs2SXivDtArGARys1JGZFaBH4fLPFwNcscK2g5PUJG64p",
  "key5": "2zLdNEFBWTEXM3yvgmjYh6VGEawQzzWGPykZ2po4K2evJY9yhFF412tx74m3sPqaJfUYEYGnU45EWsBmjFoQyT37",
  "key6": "5WSFJC5n8GbFvGPvuvvy7kLY9jazzFJcp3T9w1xCQDb4DDeLqJ3eSd1h5K7ojTedKa6ptwMcXsfK3etWjFkaZUTC",
  "key7": "4G7BqqHN9zZeutbiEingaYVNaavuqe7Ld1BnF4N2eDZQLydjtJnnLisXU6FeUKzdYM2owQ3rWAGEaXK3H9LiEMHi",
  "key8": "2sCVSy8FWfifee1Nc5eWdNGcV25CEh9j5TfS8uPLdZGH5iDN8PJ6u3mN8WZfjPX97gviPpyaUqdtU1AqSUsRBLvE",
  "key9": "2hA928vez6snUomCCm9j3285MTaDtJCv7t1wib2ktmHVbCgUU5E82miDp83v9jheduJStfU6xcfHDLJ7FCoCkZiL",
  "key10": "5x332njbgxzobENquTiLbToifkrSxaDB4oNdB2mCDjJCUvf5vHqvXFjmfhz8gtH9vtsYUq8PHwpsH4yb73B7vL2c",
  "key11": "3cg1u4bXKH2hngvqmBpbix5c1bwa2PeE7XGfwkMVDWPdEh6w3M2eTtpFGGqn81gNtDKXAYKo1jnTmEs3RkZc1ePP",
  "key12": "3Sq5TX8EXGxDgpceqg4RbecyzvHvkMd4vWYEK5nHZ3p9m3e5Zfdy1qF1jVmRYD1NitWus2LUeScw94z63ftgVFe8",
  "key13": "QjhEbNHnL1uR5CiS1PU3KLG29UsHk6Ex3Yuz9T4bqHhFi4nsgej3wQhwNa6jrvXSv45k1JgCPpU3Whg7Aa6PWeC",
  "key14": "2NBpeY88L9u1h2TN6NGPaZMXeTjsXdYEZC6MDW6hge13SG7JYRQGjN9NvXWqNnLAAXY9knGrnzCeqvskHNuiaymy",
  "key15": "5AJ1JEoZCsdVBHQj2R9sdUDUAb7ap7fynBF1BGvHoE2agmimRwrVofhprT7x9uz1GZzV2fydEgWR6wZrcv2v4Xzq",
  "key16": "BeQ3haUvyBpartNcHQcxTsMMd5UuK6EM9S7Q7hGPN5mXojHSACbBdhVUFUhUy6ZoPTgZkUry8HBLTGpbnHd1a9D",
  "key17": "24wDDZ1GJLm7eyh6ESey93WNVeYStq3RdYHvGm9quEoG9h7pZyfi5RXnQRmPRgZ1kXQ8y7hyAnJWZApujGMQh1NC",
  "key18": "3mxsJEzNM7vsiyfBcy1DkKsmKH8Mo4jP8goTUobJsAqvcSEkF97vBMBoX2qnkdi8crE6ErqokfrHSCHKL7qZnJkv",
  "key19": "2WsAGD93Wk2UMZsDGUzTgyEiPMTQNCpSXhDTdUnZbFSmBdv695La4cgSZZyM6rk41kWPUd5ziRLc9nSmAZ4tBWAK",
  "key20": "Xg4rUsabkpxHCRpua6AnzHvUFbpYFxCmPt1MgDK1KCs8ZdtnRNQKSbXAqR1Nav4UrkkLPS7SiF1N7TXj6MauYAL",
  "key21": "5A1HxLBpQYxq5S6WqpSLxuZZBvyRGuhwL2CNPCLbKZ9z7HSqoAVxCAJ4UxWq4CmgDQLXSnqsj4EiqsMKFNd3KEP8",
  "key22": "MRQrFoHr2bCLeuVqGEPFJDLxufJWcUV8XLxjk8o5D6gDAZx2PojqrDarAHiB3q8moP1BvnKE2WwYYUPPV8q6YH9",
  "key23": "5gi4FDdD29bfDnozifpTRGghUTw33FwvYEGJ63vVYNv4EpiHznjKjNa6EAd83YeSjK5D5NsduMpoFRUma7pN8KMk",
  "key24": "NEJxH3XzGwbuR48Qta8WEy4zNPubKnm2qdsTMVjh6hrkz2jK8TLCZmwEkr5rmzRUsuqC4DfqxtE4dtcVuKZvJqE",
  "key25": "2auHpM3MfVx3SFAX7wD7k9h6HVabbAwG8yHbjhK9E8rQG2mTnqneu77DQssmEJje4wsmwkJB48UVgXguHWoaEyxh",
  "key26": "2t5JJc2kncz4o8sMpKpPn1t46PkY5hbdK5B8rXF12ozxWTngG5imRii2Cc6BsMcfQseJGLiGrhbbryh5WnzcZe84",
  "key27": "4zwthDCUmf7RYR7gxoVxP2bSoiedoDfNsvsiiPQGA4HGurbtXnzW66bnM8zc3j9QnZUbUYo4kJkn7Rgb2YrQJahv",
  "key28": "4hT8aZTGErA7eX1AMhHwtgytAMFZgfGiVzwiZpwkdKtX5SoH9Y2KuF2jK9WXjx2A6jrST4HuZDEr4ZErwd7fDkvd",
  "key29": "2tZB69TnFdm8Z3SCQLcTg95SQQ6r9FmadUSw547mWvUZYTWKHf1rruQKdpr2PVWwyQfdEbPDD6sTo7VQJ3SqKPfS",
  "key30": "29vZrXxPARZHcKd85KfuTgeDxpFc2bvszwtJHbW33Dj3xZFSiQgxnemHPHtXFsqLemUei7YX3saxxwd1RzVB7HZG"
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

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
    "3Qr1T1XZmejJhebtkZTjSLzUK3ztKS2dz4fdu4XmAHJ2XNtcDqcGSmGEvVPcdHgCoHQoUur6NkuzcG33HGTQNAdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PFHdxfzLAPvNnEJLDKq7TFrN8PzrnZFp4ZnYxspV27MCpKvUVjADGUJ74a6t8PcsujrdwHXYdaeaE7Soeht8WzQ",
  "key1": "4X6H8YE6eSurB1jnWEqF7EK9Xwt72yZYTQ9XHi5Fx3fEM6PH9jRMEt59nEpzaAmtnenrPqJ6q19QhejdENJnDcj3",
  "key2": "Zp9HJ3yuyDWXF4cFkUjcJzg38UNUi3cRYH8TfzNTxGA3m4GaPpoi8bUuNTJUb2iAXtdeudaRxHtJWrwpRPmZhTm",
  "key3": "MxPf1gna52twVgqnk71swGZHMrLfjzhown8PyagyhV7cCYoLz5xvbNxoEdpx6QppaTRRpjjLU5KMtczpdapoArB",
  "key4": "5kiVw6UXR4bpRcg3weREjF5RqjAiv1hZ7g3FqWYTW4LzT8WJY3nkedZ2jkiSm75ZJyYnr9qQ8ur8b51FBhDjwbJF",
  "key5": "2Z6aNqTJRboKhNHTeMve5nXrHncPehirU9w1VoUnCHjhg9y3HZN139xZjrf5bjaeS5oVoVmkYNuUFx5uq6sbE2WS",
  "key6": "3RTnAeWAa4M6QsNw96wWB4TcE1LAfNzpxiai1DVUGRZE5ZN8nm4KgqhL1w6xwuuDHujK6FfZpnQRqjc2w2JQiVr2",
  "key7": "XkNuNDR7Brmm98Hqhh3D5XKTkcsbhtdwoKYBQtq4PiKQezGMFzsAezAJPsh8QHM6V8W1pf35K1aVA9dScrmxYne",
  "key8": "2nfV3czoUiRXhuqfxVUxQh4tRpk77bCv9cE79BunUijRLr31rN8b8XhsTEbEYvPSvhLS8XJrwdmmqPtSDCPbTjPV",
  "key9": "2sCyKbA6Ty6mue1cmR5ZSF37G1SfH2dpMoPhB2F36K48ZL4c8dKnkM7uH3xEWwf1mvAaGJa8boVAyd2zkMZHMkAw",
  "key10": "5wuQKLazVPmCTkNLK3sB4Y45UZRhe6MPv4oXF2QjukKKjaxPHSeCPcV9dUqc4QS5tVnG3pwtQ7GvPxEsJsynvcPe",
  "key11": "2cMZrbrsrXw3nxdq5xwvDuw91s2SSffGMQsuvNX4kCpoZ6DFa2BVG1KRkoDXkUMG1tGoc5b99q4xy492NSyYWF6q",
  "key12": "3GTnNjTFYSnA4V4osmeHPAzVY84U92L1dwgNqE87J4FwNebJgFVqGMRh1bupakpr6yRFBuXH7VzZ9fEeqDErevzg",
  "key13": "59PPvAizZqM2wouw7PJFGnMVCAVTPwC6UFNM7gnETNeU6DWZErkV8bmGXJdRRLbZKXzHQugPK9tdSGASpbDDUGFm",
  "key14": "4mq1j9W5XcqLcp7g8o2uMaDjz9DK6F9UGpWmRWd7rnH7jmmpsK9AL6y5MsxEawH3wzTkBaUucD96VjW4CbQFSf2s",
  "key15": "2qagzg5g14Rzc1jnXZsR8d33ZBymQPqn1SvxHwqZZdD1GXNeH2vevnEECfrdFESFz6ukZgB6fVntMwQnQgWNqFch",
  "key16": "66dge5NaocgRQjYZNvRqJCEFDrxMW9v92khxTvntYEnM69ySxqaCmHDoN5bsbRF3UV4BcxnFhZeimU1CBVfLYZWq",
  "key17": "3HR62f74zZqYoyuuuyhFYoMJ7GmYJbYaQQWcgNH2W3toEeErNpeTFsfNwZHe4mZaPSxEh8owHJ33dJxdDD4NHnTX",
  "key18": "2vb1LCrtQtLBrrotxTrfBDuAVPrJnY6kEcr7zyYQUUhk9tDygZbf9CKiSrP1en7C4P1oxgQBD3WNcbWw1MLQdtWn",
  "key19": "29DLYvmDvCMSHLD8HWefHZTavoMmFpTg4ue1BZ9Sz9GzVVxsntxk2mBGzfL5v7NDs3UFP5x377xgNmrUcYMtiKQW",
  "key20": "3MAUxZuKku8DZ3wWGQQJkui1z2tAR9MvcuK3AV9z1KWitQAv1SA2USuhBMNDCVnVq6R6aazi4RXSoW8zN1qPGVzU",
  "key21": "476gFf3zg17pikixGzu1PahfMiusyhBoNrwiqQei4MVmkYPvd8E4Ku6a1TX1a8PqmTA31brjSCYTkYPT5RhWWugA",
  "key22": "eysDo4CTf53XnPqVMNRwSDbzmTnttJdaDpox6tg9Mu2LfSaEPLah1eiR6xDpbgn8eDyQYqXJFSg5oBCE4YTvLvT",
  "key23": "iderQ2UrMS1NTW4yYrGV3vNqhWKnGAejGWejGkPhYhQNqs8MszEbLPsKfKTebe6dJo9FsMQjpgvGCQUw7xh1nFG",
  "key24": "1xtqV4jgWucJ4EZLSubvWEmB1ot7HYXhjQRuLqeT5VNXiDPFHSvvUF8ei8ux9nvabj9GyTdZysPtyxRpbgQF6yr",
  "key25": "UaBVcN4H5Q2tLZwYhwzy4VizVTPh6UZZQYcVKMz5uc4RD649Q5ihrrffSvvRVdd53yLhPsFjaHzZgFTL6NwiYLG",
  "key26": "5oqarD6mKU7bZKBNfjZDMRbodUNJZW2qL6BBW7mWb57QDGyngTwbjqdGAS5vh44C7f2c1yzKZUvdC4yJ5Xep8DMM",
  "key27": "rSogSmtHp7RE7Ej7usAZvkawXqUzuyp38aUS39dKeoRQdGfQdrb5zbSdDTMWMvGCfrQhXM8zWtfarQ5fRGbeNaG",
  "key28": "4Hf6kSs74oVAMHYfzTSxK8Q48hV1kQVwVdiupV5LCa8afyYyafVHxPhYrWPQHp72qt2Chs4FKfauPzB2VPXvjAYY"
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

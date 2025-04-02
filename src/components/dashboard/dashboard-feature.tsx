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
    "48NRSKHFbcFfA8beuJPvcqTT4tjg7rhdD55UjGnCY5ELKuHg5A8gN8HRtNQMmkbzbPLfUKCC3TjD9J3EEspuzdtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pzBpYAfvmZScBogHFWkRGFaZ8QcS1PDypj2X3FJKhLqeHNiqswfG9GSRxANTAh2tB7znsZwxocaGaZTFJQDZgKi",
  "key1": "5MUEmHEpmVPi5qSVxyiCJbq2qGawwxewWvDpzCBqH4fKSXZgaoeBf3tKEG2GdLEChDNMqV4V4itMGtUcRkWD6u2q",
  "key2": "2Cg12MsiWywPrZww7ANSH3gjQowLpiyFfb1jQSPKvGEbbRy9dd6mXJFCKf45wbXYLVUuamxVCFeHCJnLgpx4kHUp",
  "key3": "AfRJ5RNSWyGrnEGuWaTm28Z279bJXoHtXuaPjxeVaa98hsNwtQon2Jt64GGT6WoCVFM4MmjYm9XtLghr6Rmviii",
  "key4": "5dcB9RuUfG5jgkg7nqzMGadLee73D8qRD4Srd7WbZCHP9YAg6bXWQsbDnsFdAcdzMqmfkpry5RAAQNCB7bK57pVZ",
  "key5": "588PxE4ySY4dRBNhKvF582c2PLEGBWG4Mo7Fsiqzy9318ucxD88kkvUQ1YTf3bvEDrg73NhiGAXMc9BvUZcZqhz",
  "key6": "C3LJnKKEpHV1APJfQh5WYT2gFnvguVnV82XaYbQPW9wwmRtiuR2Lv8akU1LhBqVXra2FgET5W2BzAoVogwpJJtV",
  "key7": "2LTjxCyFi8kbnurqsmi35dapry4jhLx3nZZnrdjv5TeEQaAC44Jh1m6JidqtKhaYq3aebVTTVX5fhDEWjKJ4Eq68",
  "key8": "LvRqH8kjLMSfD4sigJSJ5Z4XRYtzD9WKLmLRC76JiG1NZxxaEaNCCN9b5WuvGAq8kJ616sgi1ScFoKWYzCVqkFA",
  "key9": "38hrauQrJPXeu1875eCCPpSjHPADMbYGwCpvJ39GyM7YhbSRNbZX1P2UyGiWnf23yyDGZt55CcqwGN7UKuGhcGgw",
  "key10": "hWxtgoce6eQzV7hBpwaSaLmSZHfoCQEbpCVd8gSazoNVfb7GfPBfkB6yugMDx7NQH9CszDJoXw6PsUW28iiSn7V",
  "key11": "3z6gBL8qGzjv37bxEYzZAWQy1ZwG4Y7T9NxcwyP5HZJM4uLdEk48vgiKhnNFqD4qDyxuzAka1erT8GrTxdZrDN6N",
  "key12": "3dyfS7DokDcL2sCe8DGouLAJp9fAEuuaQRQgx12qjQ4v5nFTf6bXtVbE2ZsHDYzuFZ86txLr1urAeyggKopreX8r",
  "key13": "wbkz2Fyb63Uf4iRYf8F9evchd1zqAid8tstSmR1Tbv9LiJ6VkYEFXCsqj6A9Wo4pWDbq4SyoiwM1vwJz1UfSvLr",
  "key14": "2iMueT4nwMD8QhKNEp3N3fLivqsERYLkFjWwoo8VLfWQzmCfakvdT8V89pNB4fnZqBAjMc2TXvbWgNFh76xwH8Tu",
  "key15": "4jyDMSBgCrUsyXtgjPzFKntsuBzssh4qHVSRneq3rVHjXakqqpqyy8gowBZkuNXZXaZ3VMDHNmb5dX8vXWmc4DVT",
  "key16": "3HtiracxZ6GVb25JdCJtC2qJUrwrSsZTifsg6qfop1cxctizqn54etVN2Wq8KzuQWV4MSn8Djv6vkoZyhVMy7TSY",
  "key17": "3RM2sQgW54poNpNV74h2zNwhqBmfoGRjkAPyBJRpjWsGuKTfQ16eWpQMrvuRMD8kW73UNTDpPzSjdgv6imJAGWDN",
  "key18": "5XLWeSDxxwMqd4EBRrAyvHB9F9gi1Cxy4o1HGJ2qkdz1emLf6kbdWx9hViE8Fw2wZ2zdZGNok27eFLog5vpmTXjj",
  "key19": "56ApQ7ksuvfFt5wEEPjfZZbSyw4ft5jqGtoDZcFYDy56Y15tqF3e1zuRSCD5Qzb2bAHt6dFm3PhzzoGksTdUwrke",
  "key20": "KTPXPiAkam223PHdzARp2k3uwwkNU8zk78f8cVLVyeShaejd9csKMynLyaHF7RBewuV7Y1ufKqFMBZXGW4kZtBZ",
  "key21": "3JUBbhotDFmJAKEKp9cnhWkVhyzcTDfGyH9YwuzdEcgp9zWng1Ui1Re9mR4Sgy8fPTcBJYus4TrkRc2rByToQ9ma",
  "key22": "7RHz7w9th6myNcQVGJnnQjsGt9EjwNfc8HnFGrLDo8bs6CUUWqJhBwWntRn9fqW7FPuAAB45qP5jBAmAh2fc6as",
  "key23": "5L5BmPjd9FXnT1LfchHLZi777w9roirNULonJ9nci4pgR7dC1ob6K62E51wjCaAa6bfxHiQZbqCAkCfuZ8WG9wEe",
  "key24": "4ftMby7H3fzLNEvUEcr5d1LLTnumvyrBeVXmEg5tnmApKrG2meTEKyMWxkrwEVTA57GFuR82MRkjxn81hvcD2yvk",
  "key25": "4RAvYjXYB9Twc7pXHSGRVCGTBGbgSKZM8L5ufYXNX4Ui8podXMi5XcS9n1oJSFfCnaHgQf96SjpHPETKdCTCecZ",
  "key26": "2B7NLcMWGbwkaph8FVeUpfHa3TXtF4QngKKcChddvb16j5XvnQ63EadukMqiiMo7xCsbHW71WddGNNuUW1bqLupD",
  "key27": "Ny9CcoeUJBq3yY1fzVs9md4DvwYizBvaPQ2kh2RjHcCJ3L23J9tN85CW8YFTS7ZnURcktGcinZmwepZPnscPcGR",
  "key28": "iMPVgpxh3AZpcVmTnRJYjMmuzWvyh5wGde8UQRD6ABSrTyoRVMXViSG2KP4L9aB8WkJxEeuUb1v2RmdCvh1xCTm",
  "key29": "3Hoi7i44pHu3sapUr9uQfzKau2KVnC4c9Bh7RLWUt8mXbvfRxad5mZXmHjeNUYnvkudHp4pDePuDbTsHDSgztRXV",
  "key30": "4KHn4cWxHNZR7uM5jfsNFpNbEj1KibZ4iJDCsakqDPw12rbqmtnGRz7t55NrQtrrAfgFKjFSwbsjZTKPEWdMAa6v"
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

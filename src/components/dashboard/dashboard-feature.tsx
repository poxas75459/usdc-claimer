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
    "2JDPJ9qYs6bKYzYempxVr3N3VVGpT1QDWEEJRdxAwSrQDvUnJWAZ9pfpx7qwKqWYVcKbniXhPTFBtsZbRQpV6Uq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SDr9ycf3gJtH4CbDzm8Ggjf3QXTWkkGY3RaHJdViTCWhSYj7tNY8TzxCAt8gziy5vRhYHj1scTQssbZdMetfANR",
  "key1": "594sPvGjqH4xuRAXfsPpNE7g8bjcBUEUb7gmzqAEwRsyHUQQ7tsBrmuHtnbunSFPLznF849yqiyRSPm5kmLhYM8U",
  "key2": "4daSYpT8ZzfqpVf3J1u8LmJqEjdPUaRPtjHCHZ49KtpFrXLu92LaHqpY1bNXNgKa2aZqCPGwLvmPo2LdV9ybVZgK",
  "key3": "5BPUYfvARkYkMQW94MJqC5JKRSFVo3yKy9Nn8Czgf4Jn6Du3gxuNy4CHf6z3fVWvDAR9BFSi6qF1aiPmFG3a5aKw",
  "key4": "5wbyt4yZgEc1YCY2QNpkehYp7q8xhT71U5iarTcGEVSCodnGRfPLfsFNCqmxvweT3tJuxTEM2i7XzT9RmwjgUwgD",
  "key5": "3P8xwiuRvUbpgQDcPXETpJMT9MSW2Ptz7sx8oUNWK8BCoVkjZHWXM7YLka6XptQoKKX2pGy647m8er7fuT5fk489",
  "key6": "5F5Pv7t6xAZUcZ9Pt8rFtogae1R9ZW5svwdJr1PrjXqggRr2UQHbab3NGH12c7ZJt3xJr3M7taFTWom8AJk1THE6",
  "key7": "3YtgsyCDTxuk5UnfE5UgpGEkCfxZXu6JNWCkfngHC1wJkiEkj5njZ9gVvR3Sp47TWotgwehyxPeW6LeqyRhWawAD",
  "key8": "4VsTc7C7vqC1kgnbAZCaHT6uMmsmRgTxqKS2iktT5pfYqXg23fdumCSVK9vRCHJmyjj2wCm3pGa7tpkvuKxMR2UG",
  "key9": "3xL99eS4p2eFFijD1RkgQgaBg95p6iFpoHfrbj5jFnWwgYgWAZ5y1X5R6YMtLiuMBYQkJhtHaATYiwrYZc6GFmqj",
  "key10": "BF5wjw4y6qBFuzvnqCm9y7caHeR9z66LNjo3obVTxCPvKoYuN4Sqk6YXQ6QUpznhtywcjZppCmEz98EUeqqMJHh",
  "key11": "3ry4GVV5veyE6CYAvQCqWP8AAzdz6HT9qXiMnC7j68rLL8GHrUDfzwHjcr3AGS8FkLYFzpVecwevaRf59rt3Q8MY",
  "key12": "2iTkvh4yRDstymTfJHjmyo46inxrmnbveDrvmTpmnABqbG8MsX7bxgzCXeCto9Cht21nsEZQPicngrW6H7GZPmK1",
  "key13": "Rm5A6aaEbKcYy6pgfCSbPxC8Vd6iGJfrqXRCHijypwMwJ9kKBx1Wc2DabABJEgHbwvdCVTTxReYQ9AEBN6qDzoX",
  "key14": "577DrYJU67qgVhsdUzhZFAeHju9P23oiJycZTMrER2SwLy24w3y5dQYmEqF4W4sHvroQV5L71Uvt9FF9NMbU2Hkm",
  "key15": "2N6ADy9NMf7vxVb5ceuFuFHFgyM52DAxfHmH4vWfXYqfHkUqDRyYd7GVnvg9okGbMrxEfM4TfbrPzeJxRqCCfYsf",
  "key16": "oFH8QwS4dzkxPVph47aDa4pNv3qpevCXrRtuHhQbH2mGevUCrSY4szWgxVd4n9sf5ciVq4JFcjrKB8ioVR3FJv5",
  "key17": "3nkhtndGtR5qPYLuVMeGVQ9YdKx9ocrZWPNVbJkd2rQi9vgQQA7bKEQar97JrhCrBqS2iNyqv9qbgAZFQ6xLorPZ",
  "key18": "2QrRay9tRh7mXPxVqbp3JKgxDLD9gZVXfqwFdLrteChfAuGCn2QogAXCnEG78G3b9kiy9EwRksuLLvzbfxgoNSVf",
  "key19": "5EcqF2qLJz2mrxjD4sjBDBDA5P63CPP4CQQLPMpCqb1z9wph5sdD7q5TXxguBS48AJ1iViu4pJhc5neLm4zZPZ8F",
  "key20": "2rr828fHmtkWNhwjPPGmSaLcw8MU81a7L2kKUwH4gJnKtABpFxbR1jGGk6BaorLtbX3vTr5ekFS4obWLBjmhC9Kb",
  "key21": "VgC1dtr8WGSCSHoJPJ2zSayg2QwgntURYzakeViVM5N1g3SH6QW97VibCh8LBHjQ4ckEEriJZqmBchJNpHebpbx",
  "key22": "3GLK1dWEUzE1ScxNTGJgHwaJBNNAhAxPFVjLa6gGxTXmizgMJ3u7D1FRxFvBDu9ud4P6beWv3tDGiQpe2ASAyMDn",
  "key23": "35Syx4PQ2tEXDKjvLoVnFoc5XcVaj52te15gTNz1Vov7CTRLFuA1TKQeS1u879d8CcTRBTFWynjA4DMUEwPn2GUf",
  "key24": "ot1sciGgqPefiHpkPkB4upPAVjPtdVEMGy2BTXjGUSGSQxNJKLpqzg6ZwXhozKu9KxBkAWnuqsS8auuKUQVPDCF",
  "key25": "5UeGSdFoT3KaxDQirrjEqqSb6JGhTjdrAgY6VwJtnLnfovxwuJh62pPDFba5tLf5fHNkqrDg1UnkdYScLpGgjb2B",
  "key26": "5oUwbrwvSYG5PiPLKTF7cJGwA3pjSLEqsjrqKxSAx8koNhnqwxBSkbiWEZKCLGJKyEYFXqrnKdb8fK38mHZLRRi5",
  "key27": "JgKKb96Ur7X1VdQgzJg7zYxr6M4Nfx1EK1JWoFtRUsHHGzDVt9as2ztAvZ3SfohHeM4yovAgHtWnQaNsfscHUhV",
  "key28": "3idhp8SqmAsnCsB1Jr27KFCQpZCov1JkxsADUVTkqikWhnGHDZbndo9voVG2hXD9VccuyRUGXTEVY3VD2mfmF7fQ",
  "key29": "YiRa7PZC5Q7bKHRoRgoNGY25TQYUrD7MbT9w86CfDHUPZ6B9Z1wzhnTMChR9jYDL5AQG77NBHPTvXHzXqXRCbyw"
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

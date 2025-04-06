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
    "3wePbSLGS7acMsBvMgx53Jbn33mozJNkcnd2CftYqH5N3bJs5L3vnGE8yweuhmiFzi78YLKyeyUwSkyihcU2B2wG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fYshcDC6ErjJGXRgsCT6vX8HNThTeDwgvQDNByujJjtgmjBdby65o6XQrS5MmDpDwPNiT3tzNCAQJnYEJiTXKKj",
  "key1": "3twHfjRkKhpiWFa9tuSTFjNMH7ppBtNeSu2pkGfmTLUFZivMiUUhgqJvQoWPSmSsd6u5xwZA6gXZF8rZUYkzgYFA",
  "key2": "64ftbgyQsW5h2h3KRWtsztLEK7XYZippbhYnkBRT5hXe1TFXV68xXVixZhWQV6DQe8zgjT929FV5nDFjEx5viK83",
  "key3": "2NxZ1Vo9KxqWHCKydrZ8eoSopiWH6GJhJdJX5Tj6mFhxkmesuzdtiGtA3jyBHcmNr5RSAJPrLLTPEdcCXE4caLcz",
  "key4": "dZQcXNUrPXwDMXyh8LWFqkH4fE65b5ukSMtH3wDbChnJkgkjG8RwFREi4wLqdcVD7h8Vtvwfm775ScQ9KakCPcP",
  "key5": "5BriVWXLYhpZ64EDnE4G4jNi4MpS79L8W6RnmFU9uifiiyMMozfo6Fcq2BvaAsu7g1S3Sv4RN1yEBywxNpxb6nHi",
  "key6": "469Y5YcdNwrA8SGvYtZVKdXJvm8qmX4Q5jbwUeAJ8gU2yxkw5NaqY3JAacYY4UKwf7gBjJU6HUejvifHAgyMBEW3",
  "key7": "3PE2CYCPRzDEDBQAUKw4JPXVUcuUpmgMJaiXwnPTrtA1CVU6RABqyKW4uHZtBPVu39U9QK3vKAYYTth5T5npvvRk",
  "key8": "4N7BRb2sG1NLSfNnMjuPDhrCeMQKGde7BxuDZ9SxFQ6TspP6kYvcq3Ao3QAzV5Kxx45CreMeiMw3f1uCCEeNUeHd",
  "key9": "4ec2K7S15EpmzSAmCHo4aBLBdSXLRCUNUmfFmCnEUwDvSiJaZd3GPFaLdLMv1c5qbdknaMLs3Fpok3KxCRERMQ7D",
  "key10": "3TfQq1wpJgTLgWWgoHVVgDxyeVbnHQVV5RLTwrsCxD9z2XeTfDQASLojKZLpgokdzhjZ3EyGLBwuFDv6thF3bkQK",
  "key11": "7cQpW4YPZnFPTnhc8frToyB7SmNrXEbq4zfzEfH17DPqcuG2prz8mnZob4hF8PR9GmU2hB6sd1roBDX2r7D549V",
  "key12": "452T7C8wBHvaXuJbiuvo7epLRXC3xehTVnPXJxMkDwAr8GwZKTwfjvf54GM94domvS7jBQPUR6FXAqdmDhRXvSWq",
  "key13": "2EMRGQ9RzULw6ieNwRV88c6DeeBgqPxHiELTix9virdimhSGTmKPGDLReMXH1PCHXPFe2iQZ77GHAzF9B5jL3iVx",
  "key14": "PxXyp727j51SzAVJayNhpQcjiETcHeb1LsMU1TQG9qh8YYQsUL4RASd2pGth8BRNbohF3Yaw34miAC6aG6jfgmB",
  "key15": "bRXyNDUweCqkiNLvaiLPFqP9t2xyu1wGwjY8MD4rS36gw2a4ZgGLnpqB3tXiJ4sVakd72pRZ4xj3BhyhivXVAo2",
  "key16": "42FijPbRjoWWhKb6eSFUFnVUMWQCaqvM4TiU8uDwVGFFayctsDr8jKebs3YnFXVHdS963JaEJ3F4ZrL6G3uJCy17",
  "key17": "2impS5WD6P6W9rfCh92GhYnhqCg2gBJ3qZiw2fhVjyxedm19Y6QaQRQivMQn91WqXSxpvJnVuxBsaxkwJdsZYu4G",
  "key18": "39x5zwLYkzKRrA1R7oKA7GP3YW8NNt74qiDpmMuFMrgPVLkeYQSUUKbN8HKDpFH7Vdb3tBPSLgAXLJbDrR6FL3UB",
  "key19": "QkJnJZXdL3H5upEQrcV1CJ66yswFGgiGzhiFCzsPMfpgTkJYSLf3q3nRA5LkWPHwxm4xbFCPtYXK4QFqGLfUAoX",
  "key20": "Mg8vZStNhm5Nt6Noeg6BNCDFnRcad9mnxmsDt7omnucTYfdFzgCv3iLuFQnKvsT8VpvNTjK6FjgGm3D6Q1K5mNP",
  "key21": "3T514jxK3fsWvKdwbbvU94CcjHcc7QyqBKSbiLfsYTzeMqPguZfNEB9fwbVqe1B9xJmx4uLy4Btkhg9izpMYhfhk",
  "key22": "2kPQp7wTbQipw3wAzjdj8fnJQ1pVecs4CykbWoRaYHGD7GApKZh96r92FvbrLT8MARjoQnpoEafhapk8F1hJdg7T",
  "key23": "5xwap5S39kUNYYqLaVs57DgsQsV5peDqV6VYZ5M8ZicuJqFNDj3iDZEZpV5en3xWnxXooQZGoE3i7K7rGjqQNsXy",
  "key24": "3ZjYFRtwoEZtTkjPNGrQzJg9CAFGXmKkvbqTrBGQvB33HAjm7GRFEGnLSp6MgckB5z9tpFe6UX8fKT6JAF5Akj4e",
  "key25": "5GCN7CvhWrCRH7kDEvDvstaqpUSZwqQUzh2ZPGx8fe1gU7Fmm7oZVpEbaqYAcTU1jzxqiVXsSo3zdWBFqZLMBYxF",
  "key26": "43N7H7L5XEfX9CiyHNBb6ozvg8iXTRQyk2CRdbRuLRPz2nqtmta3ozYiV5io5Px4CgNps3VGpuJA6DsabvX6apuR",
  "key27": "45GzKFzxA4bN32KPUMHAksHoEyUvWmPGwecgahUMrbfeJsxkwtLTSeB42wD2VifesX6WwT325tiTpu6YCTrT6FnH",
  "key28": "2hNcuoXxGLGMeFUx3cE47g4qG9JTriYxCy9Zn12Huph7jF4vCoLEZt4mZk6AK7kzU2bcenkfjtV7S4tZdZob4akC"
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

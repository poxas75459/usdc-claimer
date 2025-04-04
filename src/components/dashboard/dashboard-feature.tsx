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
    "5ir5ifwE7YMvcyNB7Nr1JexSdJzbdtUTgVoFp44GEswVvEubcVaQ3vfPNdEdxqvCfcuW8zxugfiSmmYVdYHcBoAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pZg8dyugtT7gpHTxis6EosNpu1dcWDXp9YcgBrooSrRYdNPX7CwPtLr3LQbaNNqoRxLkXw1bDdxufnNZWhc4y58",
  "key1": "4warGh6CBdHgKFPQRvbRTco5N4JNYUFyAUsUmNoSUYAea1z5uPTJCZSknHVH8ktbP3L5PejymJ2gFnCbJ8NnCrNE",
  "key2": "4jCkJm2VCuKaGYKmiffTfLL6R6qimzF5pKdVL61QbMhzWzMG7zFGXZQ8XtS1rKjbWXfJU6KQtZhEtsceNhjyNtVy",
  "key3": "5KrQnxcr45trBjfkNciXWG87NoXn3RuQZWmHyTuMYDwQwwGXsYpgLeRr5jiQ1TLW4A1mdqcZcaPZe4JYQnBywH8E",
  "key4": "4VyWUX5JdKTiB8yc8U21txPYkHRS3w8msvZc4jPj3ZFstHVJMiiFYKmG7t9Sq3Cao7ThrR1gHxf2JNF4AM5KQTP8",
  "key5": "2p358FTWyi99PBSqfzHZtFw6hymDcUXAq1imMQ5nQDAWyayFVFLbRJL7BVgMMAKX8Xkze4AESyaxCGgxJT6bw3cN",
  "key6": "5xVF6Y5gKJ81h9fXFTxgaBBxYcvtisxEDGBzFKTiDCVazkRKPeG2erd1uXHn4hNMLgZ48M8bC6FsGM7eG8g68rBh",
  "key7": "3qWZjH4YHp9vu87dCLw9zRRdBgd18ihJ9bniAavFyK7PGfV1iJtLCzqw1n5RgRhAq6AhLVh8Jz2A4nGJLE88rxrm",
  "key8": "Dts3RaPNnVGYEGkUwWvrpzBFATb5ePvS9gQCKNxcrXTDuqQwnBBoDWX4e7unDraMgXjSZ1nddw9p3LcySBJUC7r",
  "key9": "3QX4bbfVFLs7FkwMjeaQUipa7EDH4JjivCWqYXRRqxZmnDdyZ6S9JBhtPwzZZyJZUxMEM4aGvysyyZUMLLVAB1rt",
  "key10": "LeTaBVRq22mfTx23PaD2KySuJCDAhuBf9JuBh3ECGhDnqst4rx4g2KbMbWUC6sxF8R4AXAZ9ePCMaeTSXhYssjW",
  "key11": "51L9aY27nvhGzmUvynzjZoAjNP6dQNGBKR81FeYa7hYrEjYRjkrkvHNro8LyxDvhF5T2QQjw8NCyuHK4HudFVvgs",
  "key12": "5PVjj2crcAJi3nRijFaa3j6inuSg45YwgQkM3CHPPSJTo2PVRdYmojrAV623wV9i43YwwSv7kGXFtQs4WpnpSS3b",
  "key13": "4SBTEsJ4erZ33t58TtV8v1upTLeQJpXWnUjWiiH3ymWCBm2q4PtXzcjeUfbjGxi57nkFQhcVsXPQHMgkWwPFR4b7",
  "key14": "bkwWufvGeRD1vFBDu2kRvdm1UAS865sbMrK6AhXKiBdasTbLwnmf7vJ37uADuGKsxV5BEZpUj4Rpo5LNN1KYHja",
  "key15": "9Rav5UeK6p1g2YsKJ56zY3mBwPUoFsugA34bGMtirTUZpx2c9cPhBHyRuqCvKwqhbJueLG4Y9rRxrcwvZdsH87a",
  "key16": "5j3RXA1715zR6Gs22QScbuxD9gpuk8shFqRjDxKEuKUsWppMcwTMf8gpJLqrsLMJupMdKvmNwtXG8SdgwHbMPB5A",
  "key17": "32B88odkD43Vxbf6ehJthhZ3CPSE7tvseuzyAmzRGVmwufGzEXSQcsBkEXdnBMSdwvFYSu1CB5izH2T389yQ7uFs",
  "key18": "4huxT51c5RtREzURrA1sNXBYFERW65KR2mWTsHKxrA5kmhqUicoTXUXfrHGezgoZgHU9sC6eXfeuJnHSnRhH99qN",
  "key19": "3C268utqBuuFuuap81YgY8DXyzBQsXZ3aLU32pdJJD7W8HHm4NvuTi7PWwMwNj8hH6FaThC5MxuhrANd9A7UqzXf",
  "key20": "4ZYpRV8qJpH1yLkAzYSFbRx7snChhz3nbgUvsfiPGXaZ7bwiWYkjoSFF8uhA4eDNKpSxd5oCbBHDTL3kQcARyYKm",
  "key21": "ysdd4pnZJT4sHYj6k5E4cyeSdr2TAjtA4Hyww8ywKH8ZdzMFdcZFEbM8mGiWygipTcW1Lco25tPK7rQ7XSe7Z52",
  "key22": "LdtD2HRgpftw7xM33r4D3Z6jt8HTeugf8FGDZrMN5u9h9Z28eEu8zAY9s1YFvmwBizevZ3da2jWg1u7D1eTBRPJ",
  "key23": "2WRoBXE79XfHz1PsSy53Ft1KmqsTxZZweWGojHJ9oB7QwsDcBwTLQZQ93Jq8p2sTxj3KozkL5s9yBgtrC9Us61cq",
  "key24": "3XgZqJrC2sVR9kFrSDyEjge7x8umN5Ryj5FAYvpzBLJ5rqnkHkSH3EHa4x6pBM6pkxvefyWeLT42GjJLHyoKGjXR",
  "key25": "A3AgAcWcRxVLAdNiCjnhsULHTHM8Ch21JRHGjTyRgAVD7WhNkdJ1MGKNfbk6EqUDm2kYfoi4BQ439wbm421ugvX",
  "key26": "57TjusK36vFAzfdScFiSng4arytc559muXBm6wbMYyaPsrWd5tjwNpYGLKembaBkp98Yi5YmRsGSp8fXBPCUYvYG",
  "key27": "62LBkhi87jkBnNUCeLioioNQNHkBdYR2ebFRa7geWnCq5vHmHZs8UAPs845jCFEfBJnEUtCJzDBkqQFZLZMYQBbb",
  "key28": "2z7WCye7X55ZJhp8FJmTodNjUbngKaYc7gS7xnAy5GAxZa84UB1wnFL9sa9tpKESELf3yue246GbES91hw85wbuR",
  "key29": "EyHoixsXupTj1H8kgXVA86oLKMgfmteCb5jguCC8qYJCAZrUjexdj6gM2XGumt48sTE51Gsxb4ZV4VbuNwqHF4w",
  "key30": "4wojbm25vyoMbnC1VbJfme8gCZ6FjDjnQwn18nbJvvRHRb564mEcsx4JmbedsPbzGg9P3c1CnCgkHpkdFL8dbqNj",
  "key31": "5Gfu4Nn8oDgqadad93QJaiJcwgQc8SKvzD4UHgSMRbXji8khSumvxGGZkDCAiqLRuD7SmCp2FPyK5KKhjFgygaBK",
  "key32": "4UZyxSXJbXsDwWphi1ECzY7ga9QU9kU7TJacxWwcWkRQDQf2C2evAAWzSPAnhH9bpySwA1gsKrhj9tDaj65V91RW",
  "key33": "5F3eH7gGoBk6AjE8F9DJWDgkNAb75W3y7KbEdvy9scQSEhGpdCJgMVvLnwTfSRw6hUiGpH9gyQHvw83dtT5GsxrZ",
  "key34": "2HQrt4vNCmCgAx5EFhupMv4Es82BuCcMRqPyYaogGenkGdKKADYD7RGLCw7W7qZNjrptdTeCne9jt9AmR8PzySN3",
  "key35": "5sWu9U88xvC5Vrsm2swrMf9ovSfgTzgrWt8pgAKtQ8SUdUXnub2W3PcKgoNRobW4pSDobWQi98yEwbz3yqFHRPHg",
  "key36": "46ChtsckyvUDUn2iQCgWr9tbASFDBa1Xo8tRoNN7k6hnoscgp4vNhPRybgqRp9KT6LLrhyq3SGYmbVAR99Sw7JR1",
  "key37": "3y1YHk87Ya6zmFWv8VjkQpvXj1nWbXdQe5jDVeYaQTKkRpbGsuYo4KrsuNREkk7Q48Zb2NUAGwD1663KPKn6Gz5h",
  "key38": "jy1RYnHWHh84csZiUy4M6utrVLyHi9McKCK8u3jcHniWBBw357FdzdmBCcVZ5NrW62sv5m6RjfSGtSEEmejmpNC"
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

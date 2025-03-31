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
    "33sEwAYLmvWb3fmVhhSqV9sJgACDaP7c6FuFHeyMDAM2XQjVYr7UCdwUp91yM4Lo7ZaSqqW3dZoHCkZpnBiR5Vdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CB8eCwcPv9V8U51Noe24gmjYo1tbJsZKZGPvFoGxUL24bzoH42F5sCE96uWV731pRSn5Fd2hTqHruk1wXo6Tvhv",
  "key1": "A5CG8WJf2Bmt4cQg5a2zgmo1i4Fsz4eik7QwxLCou3Nvf6TiK4RnmVck2xnEv7a8JbhmgoqGkgx2NuNr5cm3gaD",
  "key2": "5Rf7SjvntEdVuGp2kzuPkPeUHw1XvSuqwLrJ88QNpz27GDmMSnx37vQc5WxjP2sTwBJNxDLXuHPrNJ1Ad6Wk1fUx",
  "key3": "3QzvQ2ASo6BU7RGsjAL3yoX4dLPNzx99gqip5RRSpn7hhY3awe7Kmk25gReoPUz9rtLvgAjz55wBYSsHwrRAx7F2",
  "key4": "3VCKx4EAhGQ8Z7e7PvrXaoRsr553rpLoQpEZxUbJh5CWLPCua7s15w7jxHHd55vqUWCfth5miXMuFpgcR4P5TcfY",
  "key5": "5CFRU4eV9kBYZGkFbPvqE27Z7Fi2ULeB8ymB3aioiVuqeMDduCj3sDF6Ry3Tk2rDTJ5eR446NtKhpywmJnkEMweF",
  "key6": "4CZV6QEUP1QYS5e2NderG1YgVCbYtcADnD4RMt4dCqexGvsBSWKb73jrvHUShsdq7D1meBLMtDYYGmKwGmhg1eZH",
  "key7": "nMjbxsgXNTkqhTD8PvDfnQDojK2Evw7U3rN3WSLTWKRktabLQZ2gcK9rEUA6P6NK9ZHj2sLDDhcsf1h8cNjrQF1",
  "key8": "kdae8YC3CrqaS12V81HYUBMqwCwiX3YCFEDCYAx78j1tFn9pAumusCi1M4wdnw4hed3mXD8PxPBRmu2HAh8Mvu4",
  "key9": "2TakLu3RS9JQNhT1CzQip6wWm2tXks2gZ2ftcAVNjrqjs2kXmXtsG6FoMC9EXWMMYEFr8C8qCJ5AKAPhG9dF252X",
  "key10": "2Vmw7JBEGKBfAmpsj8Hj19kPtWKusWSDD2PSxaue8UPY2GZE7v4GzeNhFix34pjBZVEnLf968UZyoiBmUMxVENpz",
  "key11": "327bnixvTVCW2QWo54SqsxKZipzJPY8Lir9NYuyM1BTQ64VV4joy3ZNPLVsozDYBXStCui1r4YUzuhPPwWnmzHm",
  "key12": "2M8WhPGKjptnS7GyMpDFgWouH1ToTzt7FSBERmvvctbPVvDQFG9XRXEBtUFbXiujnDosbuUfEMiHCSYgkALCnuDY",
  "key13": "2v9ps5Nx8ULZFHzcHTC8x39NuWGtHCZd633LwTarusBBwSoN3m1zbxycSKjpY8GsfxTuBxJexmo8FWFqz5uLaUCs",
  "key14": "4V65ucpg76DgzbjJKR1zEWLaqDwU1Lo3W4qXXbbaPm9p53M69sxXuyhiYwoHF6MCkMJky4zdYqA746Ye3uwHNauo",
  "key15": "5BgFiiBFHhRYhkyudFw4DtRPZAEvonoj7w24vrqmgDi4WpnVDRj5V2LVqXjaE5MDyNMm2mu3NchnDwA9XZTLg3CA",
  "key16": "2UNytMAk7Dezr83eNZLhssSzQuWd25DppCkVMXDmuCAGyNTVZDneouwBk627RjX3A6xRGEDEHb3FG15AfyGUYwb9",
  "key17": "3V6tybzrceM7MpA4VqeSfQZsLSk8XCNzmjwyXY88Gwuq8gdgffPKpVaoYDiQ1rY6bxqK25MDVZHzLtY2gGuwtGRP",
  "key18": "3mnR5MtnhZrFdC9ywbEHvcngcY75Q7DwUbGNvK2unbRZaCQ4BDM1aeQ7ULtL6JaD7Qf64rreUVtZHu48XZxyaup",
  "key19": "2jMjYnfUivcm5GyQTFL6o5DHoaS2Q83e59nAU4KWM3S4Vn5QGYDBgkeooExYsPVQKwLF3eRkiVUGed9V482JgR3P",
  "key20": "ZYn95KZb7jGKzrWAYB9b4CZinXHZdpBK97zZqLVxUsaZitm4BfYyHQFkSpoCDuba1gyrCJ5TCYLyuzrBR6YeThB",
  "key21": "487jbCvUzoLNYyu4mi2FnGZqXjHZttBWXFNhNyaey4Zf52UkmzbmmLeEw1FnPnQuJa25zfHh4D8EUQR6S8qiZHN5",
  "key22": "5gwD82rXyfMHVzJnQKTpGFa6TnHkbd4nJ6s41ySSnJjDJQyeZsSCvopNu8rfb2fYYSvXCUgLCDrjvxsB5HWMg6Pi",
  "key23": "5FeLXZmZb8oaH6CEzj9DqvVLpcVBxEpRnZxojDLYba3RJTe1Ee1W1u8PLxFmMhY48s9Ejk91uyMebwKU1nbooxcu",
  "key24": "63sj84qFFv5DtDwA7tUvTo4sdHYv4vpPi4EJGdbxpYpELi5tYPjNZC4mFuru7sAQm6hUWecftWr7BLYhz8ghLUJs",
  "key25": "3Mu3CigLHsdn1s8KwJA9np1jckctevaMRXS4Ch28ATphBKGpxk9zeAqi8Aph4z4njbGJ9irkNsxV8GPkyP4bpsTn",
  "key26": "4FabhMi9v3VGgBcEVhsm7mrSd8ev6nGkxaGvvP94FXsBreNAfSH9G8mirXN4Uokik8yKMWffMxVB2NrsKSQFit2u",
  "key27": "5qY2EW2GCSm9zGAPjbfKs76RUPrUcBJQkmv6r8PedQYcn7MLSZPdaWZcEmTGVWDZU9fAkCEMmmi5yT8A3DR3c17R",
  "key28": "4RewWgWfvbDi4pbwv9oheQt2xaBehooRvSS8V6ijyCsYX84WHBGnegkgBKqg4jBH1eXgod8vk6r2yvRxjgE41wRE",
  "key29": "5yBA3CZ2qYmPBUTqeb5VeaK4nyfXDjio6ueZ5FDRGowbxPmkmPiwm74MSmQ44DwJBL5Z29FFMWAGJnpH2Wj5dcF7",
  "key30": "2nHT87WbhWjSsMUnF191dgqdvC5bmH5Uqr666fofiBufa8HBwFcHFGg5zKqgnNDfYuTvixZwuhXnzYoYWPVfxsWH",
  "key31": "4vNVmBfnDtTeei1PNZ26zUQjqxtdqe7HnW8QoiZ4novHj1risYbAvKSjPm2Be9BSQH4pa8HDcoVHjpaC9L3JvzVZ",
  "key32": "2cNczMdaPKEv8bqDChbi1U9bBRQ5D7rQXm1BvcW2g2fmLrRKdhpLiZwNikWCXgmjMM79M8fNQPZD6gyin8S7cLDN",
  "key33": "4wxpoPcp7a1F9tExQkrpzGBuC2aouhUDbjqEGCQc7S3UpywfFRCqYM8BSSfPypJuxwnRVK9hcwuwL6VPjL5WRpo7",
  "key34": "u8Tg7scNHX7ChPFLEjhZwEToaiKgwccJzTJDHfTPrzJcwqzvbQL8AjaMD81SEu4ge575GFq5XkEUtTYmcH1ZZdw",
  "key35": "2T5PdAMDoaEZiKdHfWLennVZCL4u8b5JL5wCAGX7oHV4vd2zYdyEkrAy6k5waEg6WFnUXZcFVrPPyNV71xJkDNWe",
  "key36": "5UtDu9eoKxhD5PmkaVVYsBYsVsf6eVyGVzCirzFGSyQ7e8qQHqacvsfnx1uuYSoPJxeoAumDHdKpk9T1BEr4AEwu",
  "key37": "66kAaGwGqE66WB4gwGZrreXnh8WnRwGhqjgy7ogzx6D1eWvXCAYBZq9cj6m32PakS7pt6itWXPNDHDcCGm4UqgZD"
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

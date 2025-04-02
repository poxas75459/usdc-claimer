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
    "5Qk3Ay62k817xFNJP2t33qySwpDgHa18AgtzeLedU63YXnmfEoFMVoQyjd65nHJ4cVnL5UxMp2qDEkKPvt5YZ5zR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1MHnjPRZ7TaPGZZLnNavk9bX5Cd1BJQvtrpMdgXNukAsf89KnrXuxPGP5N6RSwZRvCNjd9Dxq3GzYTn9dd94Cc4",
  "key1": "5NqugxZadH8HTnseuxL47XfNArtpzUsMkAn9CcMVLyupTwqVEz9JMRe6GKvfLKwv1CDVj5EEXDHRHhMmhe68u2h5",
  "key2": "Grd2kpcCcQQKNc9abJSt7dTuMy4TfC1wM3SssK9sr1Pgk5SbLWNypfjpXQrDFocEuxiha8HRzSCyMZ5n1aXYWJ4",
  "key3": "ANy3TiFV6T1izwDAFVAfiu7g4XEfmTGE9ocN7Zh5ZjQwEhFZfQZ6cDSwa7eSU4mw2JdX3yzKDwc8rG3v1jcvhCj",
  "key4": "3HpUt2XNjwsDoRLXkLSV9iPVHcDLFUyRCC4QbJhjUtRKe5WCVrLSBbPY5HEdTNn1LhuzMt4qcBzKHwBX6KNaXi3r",
  "key5": "5c9TgSVLrAqqKMb3URBhS2sBjoqrusv1YDeErWbq44Z9BoEfZGbCxaw3Rs5Y3bVVX9Te2Y9VB4AWhnBud4jYKzCo",
  "key6": "9BR3RhNjKmiN5HACW6eMi5m2s3LMcGuPtNrwPuvQgUX8LyWDegiwjaG62BfXhHnimYgpXU3Ukc6pa7nKnsReSr4",
  "key7": "JgbQrwLfDep9rYsae3KxdQ36ojrYpXg2rTiTiaqejoJmVrcKD5SvyuNdV5uCteSHcPfrK1BsMGDyq2RtXMrAEKY",
  "key8": "2TWuW8ra5FEbAjVhL2MEjzy8Jbtrh8pZ7vVFhkVVzwVcNouDMPMf5Vh7migivHnVaMpncJ7qUWxVkQvLw9PVCSCy",
  "key9": "2tJPMfG4sYQU51i4tfV7JxkTsDcBUA1xRUk8t4LJvVcRXV1GCVZdmocL8mFBu65A6p8q7HvFPG9xVuFvWgk5F5RV",
  "key10": "2Zo5XbjR5Vy6rgehTdaqD5ToW2aPLW1KXmmKtWzvYWUvY5T3JHhcu7Y1Eoydo9g5srUpwGKWEWy3hLjFCc5DwkQQ",
  "key11": "5ieu7SqunDQdDuwrBz3n3UqKji94RfdnEav1JSjGNFyJJFLz2pzsSgycuJHFDis1FGKR6nh6qoxeKEeyDW2bhS6U",
  "key12": "oA1z8vZfrmibhzcwpLp6HLwRmJfAthnpaGMZuhW8yAkjqVXJmm6vxhaU2qSVxqrhg3mDn7x5M7a9dHg6hnGA9B6",
  "key13": "Ac6Up9fFCttNRJ7FVt87n9NhVSSYqTJnBSjwGJQcD8c1DWey43y3iX7M91y48P3eEjVKbfwJQ8hxU7EiKHLu61Z",
  "key14": "4fRzGomL9sCp7goLfZePXL4MiE3QHG3zx8zzE2kRgBUwWPA6dQB9bnetVbKzdCtxsdcKvTEF1Q254BhajNFVxGAk",
  "key15": "5j2232pywuKhJDDedz4BQkqfsP6SWaBFXktPs5B8d6FbwD2cNSq2LArrSX3pZmdbAw2rqKKedgUAg58F9TfkfX5W",
  "key16": "5dQsDb9u1xxj7aTZDSyikjZ2aQEWNuRStY2RQgpoAoxsEn5PefgvURqt7JjCtHcvJ9sKjP4BiZiQu3YADVHGZDo7",
  "key17": "5XGyfuDTQSQ1HQxwx44TbNv7pCxstgzqtxjr5eHBtU9UZ5bhMJ2iTDrQytwazqG1cJymBsqJbPLqiDtWkvmazmZM",
  "key18": "4XLjtYjWUtka1BCyPemVmD1Lr45j3yjmfTH4GxvbQTSeP7JgPGPmLRtuMt2efbXvd3jyCAHFsacxpfYVEEFnCyGy",
  "key19": "sj7Psp1AoiASwjjPJPYXHkfTxjBQn98cuqm7s6tLLG2F2UswusGZiHoi2eXmTrysPxbMLeLUXDf8tHyr1zYAHSf",
  "key20": "x1uaaJu45NGGVD9MR3dfC3uJjpTxuqBRHabefotwtyCEjvRmZ9PpwvVzRDHmPjat8ffTPEF39f5MCGaaDhb6PhR",
  "key21": "48HsfefGF1d1keNENoNQ49QgQrjdt1cyswjbcsE2x9kDJkMyaTvKGNXcCNMYpmbmfnMxw2Ko2KYhZCjdBPiD39SF",
  "key22": "ZiCGaW9KDyam6P1uVqJaBJkdkjeokmcDRf3zF9cSPdXjBFfefkb7s2JZ9n8id1imSpasxGcsPfEPomQk2jMRXHC",
  "key23": "3eyjnDmaWfXHaowy4gKiDjACJCvQLVF3YzaGa9EdCqJsWu1zx6gnxXaZ9XqwR4jrapeMPqcP8wqZvGh1uwA7uyEK",
  "key24": "5cM3zuyy6dFadV19oyU54aRebXAq1dMHFPeQWDTV34AztVfuEBy5TfTtgrSn4qtp4NK5nvkBYH4Y5RwZmyoyvMvQ",
  "key25": "5bjjHcjGcRKbBA193HF5wXUw8WX87N8hE6H38XwkEpxEYw4JYELDdGjhavZEqLK6NVD8oSEtdpLsdGe34wXQZb2j",
  "key26": "5ooJgdKg64fkhoSAgiSV8Es9HVEf8cfzoVbgyfn4kRHSuvLU7knajEeFGxPKrphdFwPHuEwjkU5MBCvt38NXNrab",
  "key27": "2UibFZ2QKNNKaFxG1B7mVkk2UabdbeVF1aeb5j1QsLZyNdhGYg16TN7NtorR1BYjP8tcbYVD28NnVf2i7JaDY6jD",
  "key28": "X8f2wVN5d2FxzMTysJg8v6A6Y9NyML81XPPrrKoqRFEgCD4jdJLN1PwNgEH6SY6ysPjRwsgydGy6tYEM5nHYRsV",
  "key29": "63nNW1p23nvmHcBB5vvzEKbK9nYjK37uWr7Yhxc51uLhmB6o5kzsL5SZSpAMAdRtTjLXZNhHfkivwWica9AL9Tgo",
  "key30": "5ekmsxRa5gJoSUV6U6WpQhDT6gwN8SAFy2MQbCbBsjnoMSRkARPBn9FtxGSicVMc4SBE6Xq33UDC4q2Ze4Z2jkrW",
  "key31": "4cCjRtaSSPUq19kXa641aGpnunLBPooAWcqkK4fBTndF9sMEemJr3cncLhDqGjBsmN6m86VDanFdaD6V72S6JTyG",
  "key32": "43B8Rcgp32b2U169pUDfFC7YuCJaVVhJkq4peudhLBqjQG2k9CACREJn177KnNk4KQF1WqovzaFeiYndcL87B7ct",
  "key33": "5VAXqKoyN4iH726rHZVY2iae5CnYPf4ut8HHfdL6ujR46izaKr9WbQBy6sgvEkiT4CFQcR4LCC3fdmzDZow21uXL",
  "key34": "4yDKKD1DBe4PQ8n4nGpg3Z6224sUefbUWhGDgfobtXm8RaQxxvkjUjQyseC7orZN6XE8Wt46n4uzqoJqjV7Safp1",
  "key35": "34dezniXC2RyWdJaB8C1KDAkHyLvtxtuv6KvoBrujTeRXAWJPAwC1v4bkVoGoWUEmp9MCYcUT5GFdodCipMzQAcB",
  "key36": "5FACUNZKSBMDPbW8kADfvxdjBQUX6pLjHNWkWEpqga7r7PPVnMXkgSPtFQjwjza7WPYB8QTXPNane46V1rrCv2o8",
  "key37": "56QSVyf97Szw6sQ5VaWsBcmhJKgf8qLLjacxNGdevmfBPYmYqhPe5nVXYLmD3gwrfEV11Qp9qxvs8aVVBB3HjmQP",
  "key38": "47bPZQwW9NWhAddDAPNuuRMSgjjviYZtA5XLN2PADiLkcG7kXLDqDVuwR7ZRoqFa8Ea9ZvRkkK4UW4X7jbzmq7nM"
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

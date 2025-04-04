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
    "22sqHEfydRpgnEDpTeSBZ46xAuxWcsubLrbyNpq7EChfV8e1j8yab2QraVXeGvNbbL7APJrUT6NXVNVGKBdc1Zbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HPCXbSLaFvE3ddjPUXwNr9YndzSqxsutg57zUhhgL8S1NoEjZdXqXa6VsLxxrJfusMEdYMXu9F2iWsCeWmXAvzS",
  "key1": "2grtfBnLUDvroRhXbErb6KZD4f6eo6F84c3HS3bn8v8MfYPFTXwtEVWuXxSxfBiaN7TUthGyhRYDwrjiX55ofAvP",
  "key2": "4UftkeHRqYYJ2pTN2nQJgG53DDzAdWZEos9nwCqD8jbxMyYFfGcJRkkiBL9M52i4Ly1zUasF1Wq5bPRKSFwqQN6Q",
  "key3": "5p7XGnxKadEH5W7jBaHci3gzaNVvw2o8gXrZeJ2Wgu3B5N5pXjYoSzH1F8u89ivn1pVt5nZE1RrFdtkuYNC3MCor",
  "key4": "4teVTKRpVVGwWxCGmvScwHrGQdpQPCEBaDkh4hr4i3b2rjr8ZUmH5MHYC4381S1mcdhS29bEBdyE7hbYHATBLigB",
  "key5": "2ed5cmxnFgHRCPi8SvhxWKDDoYxpVdYdEA24gjrUg7Yu9yjqSrCX6BfHNSpjMg4U4YEXZgdkBWnEknTMWfYWzomU",
  "key6": "2A9SW6EGtXKXqyNKCtFN9ufJEHeWbqEaHrFvyx4tZvowhfCuaxxoDAUKsa8ed1qWhp8Cr2G6RLjd3GTXoFsckqxk",
  "key7": "64fti3Cie392n812gxtmUwLqysh628otC2JcnEQimCztwpRdT6TR33K8f2qcWVAjYvCFuLpPPHqppoaBTEn69LJu",
  "key8": "BHgN7m9shyiXvU3EX8PZTDh3pHaDA92VSLtWNMxjEh9psfFC75M4UdJUWXcQstSdEKj8nzQpZzuENiPqv9DYT5x",
  "key9": "PeC3nksHP2MikfNYXg3PbZmGSxrsXDxxeMkDb52rcrUcVmcVcp6q4FQ1jZX6XPtg54JCQW3wGLvU8ECeKjM5Rzv",
  "key10": "4XtXcf2KcaoaG95FDPSwzMZTGKcYufrTZE6RzfkNfx5fBD969eqLHH5jLuThEpeojH5jQDjcUuNddejQJyngFf1C",
  "key11": "b7cFDsKnmaMGK1xFGwPuFbpt7iADtDtpbkCjbrdmpfydmFnv19ApZgMTNyz1qNb1JcXh7GoLGVsHmSUtHZqdEbA",
  "key12": "3iUpwaQ89CQiLdE3ApVwxhw9BcHWHz7Mf6ghmgssUZ7tpN786zMtff9m7TZZrfXhoUqyVdrFUAnzTR2Pj2kNMt4W",
  "key13": "4QWwPQMXYNqNVpqoKWF1u7S79iTmUGHcvk87f1KyVLqwt6N6QZyh88q69id6ktRjgj9rfWZAw2gq7YAeVhgwQ4L9",
  "key14": "h2aazXJLJdgxEMc3xkhfYuSXXXwe4t5JmyUB3aAasPonFkMpnt9fibMA2RS6ZsiLmUp3QWNjDvwgjVoZJt3V2FR",
  "key15": "2ZQdMo96DVojnenuExr2k95NvKELmp4nJErWQ7Ykzdr3vfZ6txY9qjtHzLnNwffneJTLtd4KFkJFgP5b5NYpq1Ya",
  "key16": "4bL4QYR4HXkS5yHoe78GCRoycR2bjURFWS3qHLmz6LG2yQCWX5h1sdNnBiGhb2Zgp6HzV6zttENt2JT5ZbC7Be6A",
  "key17": "5WVhYv4bCjoQktZfC1pcLqAT1G2fk6kHetQdeQfhZYWicGuvw4jEhd85zTAP3tbRpNZnmVq6QDQFAN33iXGDgEJ7",
  "key18": "5QTPQ9eyjqkE8FPs89W8KHHL7z5e8sM6W98qaLmfv6STbnhXc4LCHXQ9i27zCkcmsqbjQv1hMjAhjRa7esgkePGP",
  "key19": "2LhzuWuDeaRdpZBCatkEenm3r4K7hHukWLnD3CGuSqX1AHkkJQnJTxEEA3N7De8h4nWZV81fdar4Wwk33Rtkn2J7",
  "key20": "W8Mg1dPUXnhxTHbtCxa6P9FwvQ1cUrtHneJztAcaHj52cH7kuNfGXxQafikSVDWrnZB3ZMV4J77XqJVyowYsCiy",
  "key21": "629YV34KCV9Y6UQ3Ufzeht6P7PyHED8uFJ9gnyHk623hkYLqqAKHcoyVUywHsLzEVkxnejmsCAroVi5v5ZvVgWxU",
  "key22": "2V2vyM57DmnsH6ztHGe6pCdycjfAmADC8pHbDothCmmk6RbkVitbsyoBvwer194RZLmU6bWRhd7HXo3cysk3dZaM",
  "key23": "5KoCrf4N6DzYj5ip8yeYM2TkeVyoaNhEMpWRb7Wf9zCNpDG6ts3ErapZ9f5PJpriLqVjeBTYoDUBngtH6UdJthfa",
  "key24": "5uLZKSkWakgFcLdKxyQBrnLnh3wbUNDpNuZCi9WrCpPftDjX5DZNdHqnVwdWKgLa7CpBtwbwC7qgfqfyzdhpAtqF",
  "key25": "59VhQkiHzt78yYQFq51qBHz8bzBFZkAv7Uj1xPsBiVigYEC5bS4d2CrfmKxfQvpvNTy6o3FJsDSsVkv8h3HaDWiE",
  "key26": "33mXoKLxBb1NE7dWv8GGb3Yrn7Vecne3qSj4vF8zSvt3cke9hhyQX1G4RXVn8hsHssnUVxbGsJ72uwmsvgTzd6oE",
  "key27": "3MfUHKCHmSW7VhfyrbhE81kV7eb3Y8JEzdzQBkBTyoJ5us8SvWJSgDdxCCHfHo3YpR3nLYEZn6Ebe3sjC3MCNqGq",
  "key28": "4cqm69AKXNnLVYhTs8pVdZHnKNn3Wy3Q2PdWaAeQG5VpiYPPkLTfFQec9Dog1kxGESfr2Ajq5GwsmNreX9RMPFby",
  "key29": "5UekBteY3EAb8umY4rJTWje2Q1eWC2wavxo7J9mRQPX6x6xQnx2ESzvHhvVQ8SKcUw57gZERnZUvJqfPazX2iyRd",
  "key30": "5wyDSESdQatg8bZNyX5avuw7qy4yZXZ8cuinqkcZfAy2RYnNQuxWNyGjpF5Hf6uNtAZtmCv153FYBcUU3NtGdasw",
  "key31": "2PBAbcwWbgFmzmLfBZEGzhnsBZaQZYJ7TM5jppRW8QputU9wmY3vBnzd4XVty4Wg9wX7aHqH6Jmdn1qCzzRhAX2q",
  "key32": "3g1ttz9iwGVpfE8S2qFvgoAD3QqsJwpNLRC5mYPHWDQEmAiXedUD3E6KXC5HTaCwiQMgnWpBqVnwyT7aWEV1iwu3",
  "key33": "44i8w6NLuaXSM8qD7XygAAcwCcPXctWZjqNn74cJePsQjBKb1RFMgpaCuqCzbsiMCWKtjsFzbtxVisr9R9LKnWGV",
  "key34": "dwAziTuY2Cvn7o5wikSJ7k4ofBpUjjgmdTYzCJg8wVAew4WAZ3QNGUxNWo2bUF23tkwKWENq2XhEATxLwDnjqxz",
  "key35": "26NiU8oZHQDq3uRbBBVGhb1ZQstx1GYfvSTR2GzGuT5ZkhypukQoAUP8a4dCipUC2e927GQDdzeumYMUf1LMZaHU",
  "key36": "3rjcryMcrxxiiaVd45jSNDLMoL3PFauUJVXGohA6jNAPZEoPCUjuZjBBN9xMGj5k3pZsbTNrUA7Co1XF3RwW7Xbi",
  "key37": "d2r8m38HDcpCd9NM1v68b1jZHmHEXkZrqB83vvS2EsYgjKqteNGe4nyHYQ6pidYC6qTJbM5A2wvZs5BbW8A3hqW",
  "key38": "2FJ9R2xe9JAa6S3YK74pVTK7D4Njwq2UvR8z3bFSes8A8s1dy6d2KLmDpwjdDuCXJMbDTLhELBpcuuzUsswxS9gh",
  "key39": "4QthDifNebP21hwaUysqMU6nCdEzj3BsQE37e8mnPjC3z7CKrtDxSReY9ewu8iTSbSQp3sdPdHdnMnWun3WCdoH3",
  "key40": "2j9BNp5iXNkFpe21aKLucnLcFbxKry7b9X3PaL5qPQPVwgeGHHcBp5xtMAkgp6wEKBep4uKhZqLTUELBDJGao5wu",
  "key41": "3bnEJA8Y856sTHiuuDFBFabi7iuZSaNdDw1zfqd5stDfsb7jzuFLKcVu6MAgci9C9QDgxBX37iMgRqLCPxYQjfM9",
  "key42": "ecEmHuzV7RzzF7tHXc64Y9AxNeTV5orxfMsR5r285yfXgqpXfYA8VVWe64ZPouD6b96p8P89tEZ3v6ZA75j45nJ",
  "key43": "3G6YvXnohHeXLMjwZ35WtUuyyjPGrFLw4tuDjnQjfbittZgU9UsakG6YkJPeRKUJnHAShurAzUDUwEB8en928zBX"
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

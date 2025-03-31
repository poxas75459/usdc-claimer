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
    "2Efqes6GucmhEFDYLfNFqWrLgZSdj6ojcDk4KGdrCaEfVwg4jiYsqtW1qhuDJddYPHVYbjq5xrmyA3Vk5FHjPCNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rDFVVJcCNpkgYg6zySrcDYXBsmb7YeyxtJG7hDwBkchakjHyNcpXgv2xcTSqQkjfGgSBg4FFijMdfdC4Je4eUD4",
  "key1": "4n17EoJ8Wu3naLmHcqPV6ixYoHHe1Qtzuiwz765MyL256EMXfXhbG6dRYfU3cn3PfD8vN1TNVCfHRVVbiPb2drFf",
  "key2": "2cKFofB5yYc5hRmgC6ZbmtMWmFtqNzK9VNmFZaW5sQ2ZovHZc5FZJ2Kn4fQxXKczBETpuMHJA5U8oArXjLUhp6NB",
  "key3": "2Bx8ixKBiu7yY3JH9vXxgTBgisD8we2oZaQ2B6mvQiugTwjDv4e6Wg9cSUE3iTJ9q6whk5z256S15r5214GzKhxH",
  "key4": "2NDepiPRyShRWJQov7iS6MvMAh6Hukr1wSdryt5w3UWWHWp61NkPf7JbivkY2FwiK3yGorpJsXzCbe7CjPKFaaN1",
  "key5": "5eezfvkkpGFieiwhjymnEt5enUCk2o53iZHES8MqrmTLEC9wEUaifxYUtTpgKZfgBxytAeXKQFVzhM538jBfdr5s",
  "key6": "58e2Jog3BpkWUfvxYEUXx9f6iKTYjfrWKmDx8o9K1MMCZHXxt2cti7FFvajZSNxbU9cSYKbxndi2ceyuJZHVY32N",
  "key7": "2RDVbQeYQvAffVqgASLpc8cw3XAYocXzNWHopywcTVtx8FQptnyBzPEUKnn1vKom93mssDCds5gNVYKbzXTFGaRY",
  "key8": "5BVbicpC6q3VxZUohBNXqhBEG5NWmow7rcehF6Joj2wc1NS5RyMNvxHdgKsyPZBjFDkn6hYwvHSVLPBz79bydHRg",
  "key9": "2qKBLWZ63YKTeRdjjfsESPsW5RSje6o5PkMmZbJeiUKhuEfoc3fY9DYadYBNXFgovWvXybnFuNDmLnHKgYJA26fY",
  "key10": "9A4R1tDJFnT7K2cgXRvWdHYFJUPjb8RvhdK6smw3PAN2hugyAmNR5euioXBmgkTdEBnGrGAtxCjPqnFete5S21c",
  "key11": "4s9EN4NAS8t34D1YpsEZaw7DvEDGvL4g6oqfnLaGLBaAF5XGKmHqPLgQnZN8UxdkPLVJi4AZF8QTYX1u5q2rSH78",
  "key12": "2iHCXA2tifPem2u6HxVrnRXvop3tf3eW9rPanNwxAGmN8ahY1wmu3qHPyxvsCoX6QvCaSKNoVoG2vEprxrnfwnvv",
  "key13": "wBcoFHzKr3jpT6CRSBX3jXrezE4bcDRD7kvjK7aoYchhhbXcmxrh6jX2faoX7sux8bfks9VkaB7jhzfZDxiMb3s",
  "key14": "43ES7Vso9aqHp7FsBxFjuGxQpJki9neR2X43DUn5XZYdcyJ8h6gwAXq8KztgaxZqnvnqH2RpgUncGMRDemhmmxPz",
  "key15": "5UjG7vtPY2X1ActxxHiThE6hYHWvVao8qRDqJCe1JAPjKRsK4cbCnGaduDjyVydQhthzDN3bGGQDmDRpQrTs4vUx",
  "key16": "34iMaKxehbnHR9F2y9ns7HkZuBtH8QyXxUbeBmqVMtsr25Jh1yofaSYwDnMdti3rRs3r1A1oYDLdeL811NT9QeEZ",
  "key17": "5WBPuzPwzVGCCqxzfEwv4YGexfp6c1vTfrVib8RMUwaMP5aucRDcRDCB9D2gzrubuQMyjgaQNX32JjikAphZ5LaD",
  "key18": "5YHc98NYmFaXc5cJyjKmMAkpwV86rJKjpXdu2Dsc9tkZYiXEUhS3BWZ8jizo2uPrWX8yTuT7zNVTzL8Z557xp174",
  "key19": "4a1ftoLmomBebgibzkEPSozAUE8Fgi5U2i3yGUBMTfC5PXn5GTQWb5aioeADAmyxKzz6g2TwJ3QqSAScdkbpdd1t",
  "key20": "4jwF6Yw9Lo7u8FatqLHTNcBuS232h7FztE19GycBu7DzazNTn93ELEcmBJsjBKAySQ2HmjiFSubKodmr3QMjhdCX",
  "key21": "47S8WkTMPpxryQondJSVPkEz9gK31stEtbFMehb3j3XeztQhj8r96XTpGinpdFtmRmPY748G58aDYJxq5LD1JrKD",
  "key22": "3AVui4TaeNeCamdhEFwu32QCL7h71YT3GgEiMHQGp4cgi9Fjz7CQaxKeviuquSJfc7Xg5SC71gHa3CBHy1FJo588",
  "key23": "4AKuwGaZkfPDKFzAXJp5aipyNRyHXtkPBifoRVHyM7cJ218zrnR7aoXtnoL16aU7qcNkqPtQoXdqYfGTUYjaJudq",
  "key24": "5ecrVqqi2i5R7Kxx4FxNiGEx5euvETMvFvmGqK7SsSHXmAbXeVb1CZ3Gg7nBdLt196jAB4TvGApeee5nbw54pmXP",
  "key25": "5hCZWW7y3NNhtVK4hrG4TaRBjQyuwZ3ANxonntK5bBECVWraRgeyYq7UJP4qL3ANoaSaC4yb4kpK5sWUYNmaCDeq",
  "key26": "2t3nCJLX8r6Piw256L9jJGEmk4z4yekmiJRUQwqbzALCjqLETyYZT2muoD8wiFLxgYkGav4erBXGtRvRQ9Qs2R8L",
  "key27": "5zhWK3aZDJHQBPXmvB87adczfMfDU6t31kbyu9dYyf1pebisQFX2NCjhpUvdBqM4VH1SVT8jbhdfMHMcUo5s6Loz"
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

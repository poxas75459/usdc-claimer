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
    "4oxBuP7PAgwbT5o5tioMrrGBBb7D9ByTazuJGtajAjfx5WhBo1trnyi5EsmaLUS5aVqE7Wq7UQxzxdF6EjR7HgK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43uQR2WSKbpGVKEJ2pSAs1sFcxmvWq7WSZVZpg3dbeTNwZpHXhXpJpFJLv5a2vjB74i8d8Chk4gsADUJJnUgiHoL",
  "key1": "4naPKXH9iqPXTpJLKwY7BLuRxZz6pAfUAKYvXPHHtjAqDp24yRR638uuJKy6TAPhMd6awbBDi9jpVkFxkhLFfxtS",
  "key2": "5JTSvekWfHD2V2da6SyLnnfgJtQBHvBzfCqL6rM6XCSsFdNAfus2CDwCs7tZKXS6r333A9L8Pz14yCGxx4yyFxZW",
  "key3": "2bYYnJnZaAUM6HCntkCeTfKoHcdFB89F52HyMcRo3gbbLNDN2LwRXX6AFt6e65Ek8CNgcmFZt2fXo4ruyxT1L7JP",
  "key4": "sL3RSCSSjg9trNAjrF4AuXTd5qSfxgToeASvaz7aTWQYKnXMNfmhwvFoGL4gnFXhfAYd1425pP3FPyngScZUX4L",
  "key5": "49pKah9d5G1vUZ5e5pLh9pViGVLCWMxWTicrXdKwcTGrKq1XSjGiJMAUSZvL1cpKGYVea6aV5roxd7fr8dBjy1Gp",
  "key6": "3ibjvNHovFw9hTYiPBpxPd6zYhHNHKjs1F2JJ1UuRofPAdDNCgi76N4KNMxkDrnE2zHrYLs2EwRjwXeHey5uLK2i",
  "key7": "54ZiTc1SLgmMZU6QrdFAWdC1iMdR6jk3KNuN61f6zodtiR8QzRoLEUXrWpJTgbpd99rHWyYtDQoVNDYq8FKEitNn",
  "key8": "4J6LLX8ighczeTiVU5xrgDMj1e4XEsRFbAUQ4KHfCTBDtUUs8T9eahJnepsZSZcKpybKAVmNDCDNXAfdZMyM399g",
  "key9": "35GkHdJeu3eHoD4HgC78y4xVjfQK63gxcEK77bZp1NoxcGanFLeHZeKrBMv6r14sSNfYSzrgNwbLJAU2bWxP9MYJ",
  "key10": "4FbnepAaRSfS3iUN77Vh38q4FVxfMgwa9GVV4nCLqz2quhw7L8UdXF3amVK1xHn7hg9fUQhASFGBrtmVKUoeccDF",
  "key11": "4NBaYSUyahoZvYKjKAJ9gqiZ83GPJEyLCRpPrSMzbGLYeLKRuHGx7DK2fMAXf9u9hGDTVfcUuK3HxcjSj6UePmTa",
  "key12": "5pbYJNXt5LEGHyf9gEm2qEQPfLe7C3NPMD98t3C7xi3EVaXV5TYpmAfwY6s925cFNDYbffTQaDdCw9qrnenMNgeZ",
  "key13": "WfrzxLfvPeT5Ew7y6fcGkwaRGBRoNbLAWvFEedTaP2zNzp6H6uZN9zcBjoc2WkuW7hENw3AqG5cr5tqPiTgNWWk",
  "key14": "4x5DvQdPYKuAbHcRGTEX5ANjyBRswZ8xENqe5aP8KGHBw2TvRumENHV9XV68kTFE7y8hoXKxCUAJA6rt2hhsQGjV",
  "key15": "3e9q81bcdwW5Rz8bprRCjEzXmpxkaVf4y3Z7Hv5zm2FSusuwf89BxTrbkLY2nxh4X157WiSA8meo6EHXCHqeq5tn",
  "key16": "BCiQBo4btkoLLcBA1YBXqFQBqx9skTUFHHuMHjpZdJTfXjkp3LzDmiyzqoW8x4jA5kFJieLmUXhp5acwXaYEzed",
  "key17": "Tw8ATVTmnFDQjYxitAqKNLw2DtUVcFviwnRMfe4CLCifZAEK79HqrAgX5Bb2Nzkd2AizapMddRbYciFnXGUxUbK",
  "key18": "3gLE12jFMcS796RTVpwnHJBhVjyTEKsgUrxm5edAFC9psvFy8nsGiG2NMCFzFUmNVNZ7VYAXYE6c1RYYDmXKnjxv",
  "key19": "TMPku3uRoU4QhRPzJqmNkNUCDFoGLTtschQJoPaEvmGicPqsrdNnV61jPN12vE2EqygH4pwcc9tVQejefhqzh1K",
  "key20": "5sZJUppGFiT1YTePoeQ5LmtnnRNQxpoxMJ6aDQ3BTdaRKS6BTv6xdfLo9B5GVkzveRdRsZU3M5NiziYQcbD28wsS",
  "key21": "4kdj1HA8FTfFVUE9kBRr99zyoyQs3u2YMgZt5HdJmbkNB3TugzChykyFBiGnQtBEKYg5xqJpQPj63S9F2duC9m58",
  "key22": "4tNy4KcGGdrHQ7HUb7foX2pjBJcfY8SZusGsnuYzDgP1zfChtm8n76ZiYZYWkvxda8xZKjJUYvLs2Hbb5cPqhxvE",
  "key23": "24NWZn3p2TJMxDAx2aMgzBeCXGKhtq734FznnWsDQarw3UmAoitnvBhD832imYJsk938NztFouWJj6cyJCw8vRU3",
  "key24": "59aEjThYzD2C5qT43SguDtvBGqWzgg9Qf6qghMRxbaUj5VoC2KTzrmiPYr5AZfocJvPNafSWmmFwAu8MpA7i4C7j",
  "key25": "37RzF2JY6SUeVdTHCoXcowJF2RLz5mVnYq3ocdyQqDf38H1ZKjZL4v1DKewAkRTDYLKRPHLNHsQXBYEEaTmcVUX5",
  "key26": "3SQjMgpd9uuyPErNnvnerseBPc8UqokaMHuht8jkmer4HbS1jGqvvRQfwmAQe4VKGJWv2ve9oahWGtsLRrqQAjfU",
  "key27": "45SLwU2gQfRSNV4M5S7grS2HH4dMw6uzCBmEHAwfNUjZEeZpJuFQbS9YK9er82Zy86cnNLUh9CGwaGcAc3n2g5uX",
  "key28": "ovEUHRjHB6vYgBc3axx4YBXEprQjqyGJNyFHDGqFiw3cBGJP5rBsmHQKDww9h2R2XcWYHV4XMxQ5L9EMRiHM3WQ",
  "key29": "5gDax6rQRm24WjEMsE71HvSLV9bMj8hchJERpqpUUAeZSDvmNgdMM1dL8jz28brNS2hGHUSD8WY6zhHByqu8DB7e",
  "key30": "4HMmagWUgu8LjQvXJQddUNRr1unMJggCVJUxKBCs7NanUfQRmUj61QUespXALquWn8AE5N928xVwLv6y4uNSTdsG",
  "key31": "42FFgV8adzAJcku11DmcqkK64sD51z2Viw4tTVaPneqPbzzzouAwDehVhjc1PEvBChCAd8jWQgTU38icjbh2oFt7",
  "key32": "36Yoreej4nioZyMyR7shqzy8m7Ci8SDDzPABVFfLnG1EwhjWScRmiDzGKvNQx8eGLLpEivSR7se2QJPWpA34FBqy",
  "key33": "R2MMQtBFwR5eUXLD2iXbVy7xJ596BtaaWbhtBPXsaxzAa6YsLksCh5fBLV441PaC4R1uEfxHafvcegJynbuhRdo",
  "key34": "FbRreKoUZtV9yhhvyKcPW7qccpJpFFF3MFjfH8CrCXHipDhexGWrSnhuXnqnQ2churbMFNTF5f2TmzsD73aBMCz",
  "key35": "4mvKYz9tvRKLcudceaCJPjBEVv1yDKTb65Dyqnh8RZafn59qBaRu21E1zdEeVMuiGPEAtb9KYrWEhbXdzWoqQYiU",
  "key36": "2gQkdRFvnncuqCqRFcMYuSeAS4YPAQsjhByrN6oKWfspkB33A1JD2tE6t18UB3EyWhFF8fAp6uugWRhAGSyLCsEq",
  "key37": "2KW8nj2DhAfW2LoFSp3gGbervv3jvyuCZTzoSZAtdDLX9UAd2j1B9HFbeZqDq5AQZyqaVQzjgpW2RZkUrkhnbfkd",
  "key38": "tRfBAgAtUFWTRDK9ubuVb3FvRYp6kmH6rPrL2LicSuyDDZgibFXXd4ttpenzvCbSUyXrZLD4zUW8qQoNeoP6pKQ",
  "key39": "44XBVbHSq49UvHHfTJJeJ6boVNLQ9DFk2wBMgEg3d3oCy8vnsFaKxixikjv6AXdYCrCXGkiRWEsRvw9YWegKxQwa",
  "key40": "62eh1wEeSiG3KBY8GxFv8oR678GQHDDfWTnGVCdjSVw1XX6yqshfVRkoVF6qu61VwXWVYMso729xeipJfau6porC",
  "key41": "5grNtFEaxRr62R7nSafHepjP6aiowdqsuY5yk7ZrXmbcBtkBLHadbQTuRSb5LMahJdzNwwXrygGE5E3GAF1Q9MsN",
  "key42": "58YRaRHDqtNbiJ1XW1R8dy6CtM8p77skSRc8UbzYa4t5LEDEh4H5rhooKU6wArcEk8nZMtD5oRsDqWQSBRHfZZMN",
  "key43": "5KhRTZDfFcsuHWgkxgnC4ghSNUdN4jzMAZuTbML6b3QSBGJm4gaL1JnCzpjo2JJ3WHHeoa39oxrE1VhEdpd2qGJV"
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

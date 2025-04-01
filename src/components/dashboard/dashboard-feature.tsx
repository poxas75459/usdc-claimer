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
    "59BQE2khs9US7rZrX3XJ8e32awyHn53CG14yychU1mFrTjnW2C4koLaRTH73BdSZTJDcGdxL87ubka7L3JHTeKeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G4UjnBFBnNzHNhHb5xFKGW24xL86fMDS5rLZxDjj6KGDdVRbp3Lugkp1eSiZRnT7sRu2fBH1XttkDs9rJxbiSix",
  "key1": "vpFy6eqnF5LrsvETTBQiM57XZfDebeMGojPDD6Fvnh4horSL6tReCmoQuzx3XSfi2i9tohAibqezYgpbk186CrX",
  "key2": "3orE6AtAbPWDsC2xeyPA1RYyvk2QdqzC5oMz4dBTJ5diBCg1KUKvNVsGHG7g7pfP8hTm9tiFuKiZLfLVuPPPCNti",
  "key3": "3MF8m5hP3LbPg9Xg44UNV89c3XNHG3WXMGKx15bhSDG79xudLtxUuCFQBw9nVaEqahnM8AomEQ6xWPw5Xq9DgWP9",
  "key4": "nPTz3ShbixvdcFCsY3Rfte5UR3Bb6hbtjm2bP8wduFCaLxvT12n8MMtH9aefi8yT2A4uxQw22iCTuwxVCX8VnYj",
  "key5": "4rADDa5TpAjCUDMcSkVQZHTorGaEjyNsHCmot49z6Ww1NquzFLuGPdG3wDVYQwQYr5rxWqddfoVKmFVQuDQw7eUJ",
  "key6": "32wBvuidn8t7aGLYE1ZHguYeE3wVtYU6Gh6cddwisG5Up8Nx72WyAE7Jg79hVQhfgFVebXZ85ZBFbZrFjHoS4Dnh",
  "key7": "4dfENAi7TYUVAnVraGJnjkF7vqn1Bst5isUQwRSLfJGvoicLQ68nFHy94LfjQcGYu44eW7FyVuf4cdBD98kh9PQs",
  "key8": "254iWp7aqkAWhtd9kq4UudPKDHbS2b3b5QG157dmgEW5T5ryThVWXf3rJPtMefg2FfdqgwVSaqdunDZugrkz4Xfm",
  "key9": "4vJJ5RMVjsK54RcRHJ6414z42ZZbkDdPhH3VmmgF8JePbwvo5KKa5wn4xsMWkGVDwq4T6nEXk48dJ16GmSpDE9HG",
  "key10": "4prgvh6eCZUfRgSRy7eq3vNVyCdrF4SW1DMQenj4Kz8SvPffdTyUqckR6LL5bnXXGd5ti2CcS8jyQ3EWwZ6CEov3",
  "key11": "2q9HPZM9ke8qfrGN3w85EN1r7xbJZTqPaxpL1m8DTLozroV1TbocJptjvkEovQw4XtiTAukvoVwLcRjAViporQnW",
  "key12": "5EfX3XubftRUFgEuif3TdQytt8VkAx33uWXoN8bbZU9oMqJXBtdCAgWUDDaDpCh4RoHHj8NDiz8JwH4R8U3A1PR4",
  "key13": "25BDfhJAyVMLrdHpnNBM6igbFcUh9Wdkwc1CnS6Q5xoDy23hRv3fJ5JEVxmGQUF1ubF4ka6WDH94etJK9ccX8a3a",
  "key14": "2Sc62ZXf1giM3dsfrHirDvMFXJGdSYvA9M18qRVk5vaXhkRLWMFxVxVMeCbVG6ta41FcdKYk1vSbbpBcVL3Zhm4W",
  "key15": "5P2kbaRPdhUVCMvA82VLGnNizbSHn5bBXpdxkPfDB14jL8w6CfPrgvon6uvrtufit2KKyx7HF6jWhQ8YbwiGrMhW",
  "key16": "4SRjbwtpAcBVQ1KzqMxoWALmhykR2ZbDPQwk86yj82kGm7xqwtMSn8mfayZzgbghdRaJuN43fvwRxzqzpCVceCj2",
  "key17": "2wuaZ1wkADK3Y1hnMkr8K5uJX75GaeuWncGkZ5cEuBdij8uUJAEn5QDTbsxVgKtpK7rpK6WffxgBwwfdGW28jKck",
  "key18": "4DLKmTMdjwyb7rTxyXhkCR4sHYf4cHL4g3w3WSqMPdJHZo6wyPNuF4E5MtvsZ4RZU8wN96KpPPidmickzHZWd8ZQ",
  "key19": "4RxC75igjqG1c2h27Ypy4RVh3vieFvvND8jKtqpuzuFRE4wqjGc1xKBDyDsSSEhAvYFiPJZ9zoUjCrJ7Jidax44f",
  "key20": "JMBY2TGi796NSoFjT1ca2CFHqykwZWuzY4C9Gw9NPv6qCA3cGKKBo95xbwy5oarQ7TRuvkGgZ9nqFPWyKehdwNi",
  "key21": "AmKZTmf9qeu398UZaZXHduG7ZEhagAaCz2UzSeQ9xjN3s8cPjVmWCxULGrrdc2GD8F9WJrzM52pCUWr1BTUBCLs",
  "key22": "HMrgYoarQWRBx8xxJ6EoPYV568PCNntkH7qBfAF2Jt2Ercc2g7dknGo9LEMjjJnoKv3SrUX3FX5Yk1U6J7xDUuR",
  "key23": "2afAGgzD6DyAdHVdDX8W2zbTqX6XQNXe6jAfmVWPezjKLo4RnL6R3RY2Md3kJFVQR7wcvm4XY82sM8yacKfCXMvU",
  "key24": "4kLdowntKV9dUuBNrwjWJE1mxpWgtqug9vjgT8BPPYGx32fWj3GvsET2VoQ73JFxyxbGaUSmzprfpYWD46MCpJ7k",
  "key25": "29Z61CFR47KXojNASRVFZLiNaPxcDF4irKnVRRv6SvKDEhUf922JdMoJrT6jmeG8jGtLWgr512ub2PAM61kPPDkH",
  "key26": "2AnzkWpAkgSd4o1Hq9LVhL1aoQroqQXs9j93w4x7nn2bJt9fS3DGVVXvow92rFSBQGavULKNtnNRnLB8QyvM6yQy",
  "key27": "4XyWf88zL3AT7AhrUrZUmckgFvjq1kAWzAnQ9KBc2rBcHBPLHSfZMoRWGRTU9nH1htuSiY8tE448g89XPwusVFku",
  "key28": "5tRfgrzBv43crG5Usoy6c2BuyLAqeSt6QupqFg8CYJ1PtPPTX9BkkjCSP7a6QvBjS4SREfshc2TSvxi9bPPheJdv",
  "key29": "5gdSWGuiSurEpgZ4UQgXYbcge6Bxfrq2t3xhajKXRQspbL4mntekh6aAw8JRDAwAqPQT8AKnwxBWVyHw1YNoNGAK",
  "key30": "5SwhVHmhVjM3P26sCfpXUUPc3CSMywJFsCA7Jm2Ctjhp2UexGeFQspXkU7X6x1ookBpR5qk4BKMoUvF2B7VqwHGr",
  "key31": "5gtnMv3Df66SJPJycc5jetxpmiZDYT9WgAEoicYRvxa8MyEawNP71vcRYCzNXzFBsPLdrBNsrHgAhcgjTmDf15Y5",
  "key32": "3t4qXghMSVe6xeKjQAxQnLGo5qVdzysfi9zu3Jzr7Ah9SSHbNKomxxQqkxMU9LYfiUwYWLrhdYyY6wb1CS9ej8Uz",
  "key33": "5qBGGdMqK1DPRKNCTMFnJ8ZDAUCqAaoeiishQbtzK5kgobRUxK59HE61FEBXzNxSBeg8EAp6iUMPbVfDnCF431vk",
  "key34": "W17qsgLCgJbcz9gNRTFZSvZgeJoSMXGKZYhLsuX3b8S6puo6B2dNcCMfJpgDJmQW3KSHM9V28iAJFAFhZN9savw",
  "key35": "DKLqLGBWJRoUEyarygd1nu5h53K6PCB9XhatoRPsEe2wN1hDBryvAdi4TaW8FFc2hJcSwLfseRiirp4wTQHr9Xg",
  "key36": "283f7LhY9MgGCrRVp3b3R49CZsYNNgLz2ouYbfoPuwfux9ZcyFAaATEEUaBXm76vy82dmwQhYedKQJ7YpbAVe6vk",
  "key37": "3YjfqdoacCwh32QjizffniPSWKCcPmQESW9BJP69TViTQmcSUNE51USQ4pkERs9j8tgVSf7B29UwcEgJRzFthiW7",
  "key38": "Qov5riniNs7fxYVa4rRWCH1KHQt6Drne8tj82sFRq8gmTAURRT5vQvHePsnocVMkMFoLMf8Qr7tc2k5gcuRZyYF"
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

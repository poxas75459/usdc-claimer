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
    "3su6kPrkMiEjvDfJV5tgBpgsc8TnqmY2qHCUt4y6m8QCe3nzZ8GML86iG8ChprtWdda2kMK1v4kneeYk27PwYjEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vbmyq9PRA5Aj1t8DLeiAoc3Yv5AvDPVvXzRwtJAcW6NS4rcSwS8SBjxXs1gnGLq2JvTV6b5gxobP1ob3ANM8zbc",
  "key1": "3zJey25xycAweUT7fa4ucdUnrQCr5QLtoPr6oWLsAifick7dwtMjoVLHsmXumeSUF1zT3EaVeV5GUpcsn15qjT4J",
  "key2": "4pQssU8S7orP44hVxQAtFdhEouVePrWvyoD8BXJPYJejHqeRnnpNNxwZ3WNtnRJRWBWQDQDjZ7PCgMFMU8bPp4vH",
  "key3": "N8dSMecPczDsjxt7NDWBKmzhdcs9hhTxoweePBYwoqgCpPCbxKTSTei59WtoRbN4XwcYggLzqQP4xABedVHq8wY",
  "key4": "3pK1NiNaomnEkihjraF8nNPj7shwJ27C6mYe5QD7bxxiHisp8iJrjFGKWLKo24YvX4v7djQEdtJbje9Nhofhi5As",
  "key5": "3bEzMrudjv43ZWNyZA9Tbghz6wv5wqADZaqfJKvpt93TnyNp9aC5iqicztbyyWPgsaoT9ZRfrSdBz1Dw7xn7svQT",
  "key6": "4P8rLacTUBhJsxFmePzrxo3wtQJa1AWmAMchwYThqALutQtQ1Ck3CV2dHVUCFExJxSSFc9SZS9ZVCY1sBWtBpmmW",
  "key7": "317Px6WrMUwydMGaAkjQK1qsibp8r35NECMLf7d61CkymLeooXDYfCNVQvZe36icsEWKCPmTEBGVwaPNR4FMLCUn",
  "key8": "37jKaXFvsuK2NjFA7t6vqC7jfAgbLsyfb4kKzG4ivSsfLdzfiiJ3yry33UbGWXafeeyH1t23yDFSPHeo7CWKLmsC",
  "key9": "VfNpzEYg7yDmQ1YHKtxSgic3BSiv92fWyXX7rj5vnyf3Ei3KBatpGYvtDM6ejDqyzp1dEYg3HM1xbQLMjaT3B4p",
  "key10": "SF9bAdQbMmGwJNrdKQkwbvrtYwDKkPZsowbSkkcJPTEJ1C5wwiEUBXrocJHxDBrSY7ZQrrwW5w9xvQKkzHJ6Mg4",
  "key11": "5ULswjmyq1rzjwCah8pvFVB7CDgWjgsVU5ebHkw5DQDomsruZ8Z7aeT4q2d4gyBfWapoJQpRrBjZAtWwF6AYMzum",
  "key12": "3XuNmP78QqX3b99qXbFwHapMb1E5mvjQ6Mj6AiLfhYopfEApesRXArTJdYibzG9HbGc5JTErQPvxoDeAwA4cTo4S",
  "key13": "3HYHV7h2Hhpv8H8cPMDStfRCfVgsMAGzrwF33SuuEvuNz1Hi9Zcjuw4TadC4uJ8hD1eLXScDnfMojrUhqrDLCm7R",
  "key14": "i5wnJPUogopBs1QHo1pqpRuUarP3JknUo5ZfiTRL5645WN99vQuYbrjVuhdCuVxdrSYfrApjPw8fF6Yzo9wZigk",
  "key15": "2hQCfSChTmoH7pwp3PUbixZWdrwhbgWNN2hF8RWQ3a6QEBvCA4841SuHZnf44887SLuGUzKRv1VXRgcGV8XZ3w5a",
  "key16": "59RvTyk8f35LczDnw6diicGFmfmmF4z4wEWjvPPa6Z5WhPZoiDb7jVtA6WTM33SEyRcuyw5osz5637AAb3zUd3bY",
  "key17": "FRVrWREWmNHCir1kuyVGERkZZUH154znq7W1M3j8aUauMaaHP8Zxazd7r7dJYQxwpATU9zBAVbWp61EmHAUyGvS",
  "key18": "4tzSGcdWdtCGaqRxotSDhnuZitsYM8C3xW2ghkect53Ht9a38MkvcGQy1EeR53SJDR2NXvpZc3e8wNKwyRNYCat9",
  "key19": "3igtgvd3Cyej5XHstdC2RNKEMEfcXSuH1u35MexRQPMvn9oM4v3D5vv1KXShP9XUsa1uVwv5TSK9LVgwFVmESJ4r",
  "key20": "FEnZPju5s9QdGECHiDFRrVqkDQYfLrCtYuUFdH5MEQs9AiJvuLQAnStzQKadMTbpe4BxJWUbcBYdeAMb9trsAjD",
  "key21": "2AGbSnUX2YrU33Sp7Mjx4APvuYTVXUVjEBC3rGvVVh35VmsTPvqSjhwzkrVgDvjRp76SJfAeHwBSaJhkeJwkmSk3",
  "key22": "4VHmpstVfvr4b6T7ojKhxfp8EDpXZpLACPomkEAqXiK66KfMTFUtsTb7445ZtDnLXZG2dVJMZ2dyYg5WL4JMukZ1",
  "key23": "s3tRgFq1ZKNk2J1yVb8KR1CXv58eSzQAhSJy8vnpa581MjpTKv4g9wChSFLvoXX9gwAd83SH9qMSiDUAgaMZk6H",
  "key24": "2nqA1fskfqi1bSKd1qsexNxhVLpmCjZQWYgZKJkRjEKoCRCVE51GtfBNvvfWEiXXfD7qJS5Lagvs16RGV2VcvwxF",
  "key25": "4Lg27Tf8WWWadpsESbyi1ZndATZhAK9T1odS7KXLwYQQHgw3kVs8gTGkPeFn4dzWad2iPRm78eMrwinL88aHTRKe",
  "key26": "5twVsdb1FHfv4B3pTFRT4g7KRHZL6MZAFiaPoCWxWsK8D1n2XUMY92K8TmQG6moTDLGBUDLdnXrksqkKzFB6CFrJ",
  "key27": "5W5oR9RDgvQLzmaEiHFqcLgU9cDDMqGPUKJjyn19y8Wobz1sLgr9KHSXDYLuuutRvijok2nbdJGC6bKRCfjsxrsk",
  "key28": "2hGnCbybDHtpprp8LHR8bnyfXgmMEQw93UUrB9eszxLsrBpL4kALpM1S8KTEnUBiH7CoVLJ4rQHktvraMycaF7bc",
  "key29": "583TeQHT9XxN41kr7ZnKTt5NnxdEoPWQeeh3HAyM9Spfb1GrFLXvEpbHyFkHjLY5PMsyY9ASNW1VfEy473dU4EGH",
  "key30": "3cULSWJgkhnNMfS2CvYxXT8vgaLiKydHAgMM4SyjScN1AM6qcEk1CnoGtbUUdKzqu15W8sadjDH3MwhJ9q1cxtUP",
  "key31": "2bwLvdVQdorjsnyVLqRJFWW1ZQYpj1PGjzVAiTpQM2vPdecE5ZhrQMyjDNoGbbbRPLtvCCGfFYLNc8b5JfP2Jpie",
  "key32": "2xCnDBnmQKk4QeqMjQoUaVsYpNzyjWaKdXR8ihoER8EagDakRY6u2Uhq7uc5M2H2mSp11xftBca8UgeYohk1GDPq",
  "key33": "58pd7G89bwRYgbYPmQtPs4dR666e8FR8KZsUE2nVSkAwDzEB8tpV3REKuLJZ6aM2rzHgd22qBeTMxHWtEURtnwvU",
  "key34": "jmdqqjkm7Pxn8TenXSQGr98GNgrRoVUD8RC7KnsMQ5Yh3mURcL4GfD9RfyAzcFTZQqPnwcG5tBK1Wd1tscFjLQj"
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

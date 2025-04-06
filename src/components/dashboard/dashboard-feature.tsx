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
    "udoNz4kCUuYzZ7ikkiUmzAYo4asmJavYwMDqV5GCqTeSwKuJ5w7hjVZcAqB3soAeYsynavX29P6eSDHAjRsn1Zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZWVKqmUsXVWRGNMZjDFh7f5oNRcmri1skk9Jng9cAGPU9wR5rcrpMJrKySWgUniLk7KWi1xedoYCiCGrLkunX2x",
  "key1": "5jMW3DudSXoNcAJK8HaW6D23EB81REiVt2WYgQQK5G1AXmva1CRC87trxH8jfFqzDxrTuDoWHzs4LNRuPvXSuFLD",
  "key2": "3fH6ugJYLowQ1NmK4Hej3DcpxBzF6xGPH6UKZsc65ZtitKsFbWBYqjGqKUGc3yj5n6kV8ZZB8mM3UHUd127sRuNc",
  "key3": "XNwnN6aK1EJw3TXKC6fGw8vmWxCnYhgTzVxFxv1wk4A5BxAk1LjKBSBtAzaNSMZ4bDJW743q8ALNFymDnQJaDzU",
  "key4": "5iogCUuLiA28uWPAow1FMw9VE9jZeaPL3uMzSHivdM8EUWKBd5FzGof3fXwxvo87eiBBRzx9Hs8DLNNVVMARyK9q",
  "key5": "5NiYruM1F1jsWVob1Kwu2wPpmDRZtxo8EGVM7nMWZv3vACqpbUXD6upUTLYegUhaRyz6Fbo4jwwsiAf9d9mrYSeP",
  "key6": "5K5u2aC4BW5mGhLkdsjTdqaSixKwihFAhtYevJnVcjHHD4oF41aELdjsyLqjgSzzCTKERzFnHbYGFF5GwRWi4z5i",
  "key7": "RpvGrry9ACVBMQdEgGrZkWUfSebxY85yF44tf2hVug8iVqPS7Q7JBCDRpMLaWstEWvAgfMy6ZtYjLg2cX5t42ae",
  "key8": "2YvEaCnZs6RxNJ3dKbiwGfE6qYWZagPWgnh7DbpbUGxhNrTcPqNFkLMfZeMxDmZ1CufuxFhjbUbUqADUxK7YFJ7e",
  "key9": "4wbjUt4SUx1zoQXE5jN7jGs2z8zEyaNPTRZaBzCyww32h9dEYwXE6KLvFubZkv8ygk3xAfeN3C8AfWtXgynMjQVf",
  "key10": "5gZuPipfBSZmyRPdidRns6pif3BiC5pJpcVtHAVQVnoLyukRWJb3V2thD4DEF2TvAE2zQk6hK4Zom8ETYoj3UwWb",
  "key11": "4DFrh6hPMe8K6JzE6GfQYavpujJKDd9oeBxgnUnnY5GgPW8TnxWzTqRpo5cUqvyWKwjk2wEjAyv5oceHLJu3ALpC",
  "key12": "5pa9P9tSXHzT6UCifpWJHwj7bjhBtDj7EpucMobeG71FajUNf1iCKTCisfMHkhLydYTgPsoik2j9oCcJEsFCjHRx",
  "key13": "3TzgKurQcN7ZAQRhmGsaYZTfqAJvvnBXSBB2xU5xwTYukXw6L4jjX1b1BsNpYGzXdzmEnirABQeZwERbMjTN1NRr",
  "key14": "4yPuCQext83JpkVbeE6yUHKoJJJQUapY5nPx5gLUd2rSb1iaFncKvt3wCeB9d4M9mM7qKwXnmsvcyLdB9Fbr5A8b",
  "key15": "57BHJ65ELehsxKUdmqJDk5EKUqj26bHppPgq7nF4yXLrQW2Dedoxy3L5dARUcMuRX5mE9Bs5LkcWnoENmCLtsWAw",
  "key16": "57hQ3fadRvgiXXLk6TPpHcw9Q6t1AFP26Y6SdxKQ4cRKRKdVRjsSCQwXfAdHCXzjfAjKemDvVEWj9RYapuyxre1Z",
  "key17": "WRAyLn3TzV1ZqThc4pxUtnG2HeCnT3NWkaYJbMpGDbBG5ZAsWhF7jZtTagkLzbD5XzerqD9xW6KU2qXwm41Jdux",
  "key18": "5vNsLsJupExqLpaTTUL9N4vxjAzbfYXUwn6hGSCaeKw9Bo3JaWNk6AUPpTjoqXMJjyFdqjpGUeusKLmdAPgygATq",
  "key19": "63m8oUnZjCMzq6GSRaKwUDUy1pot8NECzPq8L1f2ebkcE9t1wh9TnNS8f3uCD9C2ANXMgZEqHfExWEgDLMcocNpv",
  "key20": "2vR9pDSBRY3hKe4G9shjnhKEe5oV9U4fVN8zBRWQ9N4EGwQvhoTpUihCSKimErx5DPhzFm5zspdQoTvRTKuAAsd6",
  "key21": "61oFQHPVuq4rLmx1B5LYNAVEPFWosQqx7nzaZ8AoGWiyhqRKUa3ZsCWsdHZTUc8W3KiPE7FYS8mAKBASo1yvRLzY",
  "key22": "5Bsm45KhgHPozYNJkoKMV4cPTp9Af9vp98EmchLPZuFpL5HhE1nUFHUpDVujr5HqQ9V2REPd5h8hWMmSeRLw9QBb",
  "key23": "2zT9tvX7d98SQW5HdW98FgsaVn7YaLwx9FHHdykYN5K72rW9wepJk7xx5Qq9ZmSChZ1hXBFtQbCBu39jL8VCVskK",
  "key24": "3iQ2QnMMriEdM9F7RmZQEj4YKNAQkv5wWVC3PWX66sfYv6ATwKe5WSjY71fCWzmdcxit9ccinHVKNSVHF34DphgB",
  "key25": "3JToinAeeFNzmyFj4QiJz63zxDW82J49FfEn1TxSFqbSa9PxYhXBRpsaApkZrgRD2cUBjPwA1vfotzwngEzF9782",
  "key26": "xPwJoYMt6Nw8bCRyui1wiqpLyHunCRCZWxzijogxbSGWcrtSwoUUq7A6pPHKjt6vQBRrjWuQjoMS4GFWQipvvb5",
  "key27": "4cUSqSMVjjStLrHvcoceRNR2Z15mXEZGtfMvqiE7gojbwgMmPna43kL86C3e1oZsRdtvDZpoFNhE1bbeBz1SVa38",
  "key28": "YnwiL61SDCSgiCM7z2ws7MLSCxzxeg4qvfQorFKsBvi583EoGqYgAcZSCxSQHdr43gYrWtvobrgPtCmTEzLM1eJ",
  "key29": "24o3Uq4kZc4KDCpY9u1qPwvnbe3dpBjQi5HxXEQwMJLeua4WWnL9xtik1UcRaD1furhPTFg6zmrgBq8sbrzNjKCx",
  "key30": "4ZeZih1YbqTBwNwnnz2V5pXQVbUG8EgrCs4npbPQhdZMjbRjTevGCniNuoDJSxUmryUiEEQ583MgVAzDS6eQPpGe",
  "key31": "3d9VawabHTbNB1Y9CxWpKPy4uyJGULk6JzVEaJ64hhffUYEj9G5kzyQB9ebvyr3xqLPPYARCsfT8JEhqoCbBsmyX",
  "key32": "SHUb7uUtk845pvw58zAnzDkTeHcLKaMcE64EUSUALe1kmMcWoJpbb4hsnP3Ri7pB2AUcQEUxa5an5k77Gv5h2Zu",
  "key33": "4R5iAh9CbvSmWQHZU38DBWfoWRC3nXcfo9Jcb2MMS8pGXcizVru57rQzS6k2jYAxEqxMHzfgTXG4e83CHrh8rJxr",
  "key34": "2Dw6di2j3KXz7qN7Wn7M9m4jB83cnVN613EZ5ZKgGwqN7JwjHC9v28wvYUcSvzQT9xJKosqNjppKRmW8CfFgBufA",
  "key35": "53Ec6CrBnkjJN1azqymyEygeQfXxxwnkryEqAtPr7S9qemUQC1Fci7zK5fWCAHDJoij2LQ2eR8U9pKKNHy8EYRjN",
  "key36": "3Qu9iBfoGNNwZyk3ChgRwXvcfB4d2GKExk72xz8ckapbB5wEyp5Tscfn8qMZdhtofSAoSbMdPnfKDcL7tDrFTjuX",
  "key37": "4QEESHJoGVsn3vFUFeRAwsNZ9TxQne8JFMiH5bCAPhoGax6WZ1ZfaTZHxzYwDMNojNcEPhs78DwASMvVTpXgbmfG",
  "key38": "4VNJvarN639VAoapFPxbWCy4yD3hYuJ2D3Pkkwbysj6mceVLyYLhomtGmDpL8QxCSH6QrPrJrapCv2UgqWfGSFHE",
  "key39": "4AJrTtwMF9QGqa3vtR7ut7ULiEuzBUxnZo7mzLQXDxAsHSK2avnDw6FNVRG3RpmyKzkvyLc7hcv4Pmv1MNEdutwU",
  "key40": "4shPfbhSG8NDf6KgHqYSeWrJWNZrbTspLWXjLTDCwjACbmjupebVhgeewbmsdStJtrFr9TTeE5XLciWWm5Vz1D5t"
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

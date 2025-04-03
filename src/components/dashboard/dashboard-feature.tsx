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
    "3Lb6nxNUNxTgMbb5sE6uTzztDgUrSjftZ4HTttvHPdo3DLi26pVaG64kaDCUDUbcRVg9pXuBxnmRBoG5Up8XHjxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TzW5YSQ4BgeV34o35J3g48vxbAVJJvPVngmRQBeXz4gr1STLoxkbCJrX6o6e6JWtqkT7fQxj7qtGHA7CMWNRUVS",
  "key1": "HRAKj4GeytsX9ucFbvZJPJWJXnY8CQeksCgvXZyMgRQHen4qGiZHQBXzHfnfESGQHeqwTguPnqWKfUfjB2AhDrH",
  "key2": "5W5Dcb8N41ZM4uqzP5RcG4PphbSbZe6Eo9F7ojV4RVjB2hdXn3GL9f2SuWtaSJMs55AjxwP1oLYfXz2dJbgWPyj",
  "key3": "3srxz6EZFzKQsM7aSu9Q4AcWU1sFQj1eQzW1zYndZ2guCewJC7TkoyvPwu9qcFWEKDed4G2AtfkJsg43cS8Ce4xz",
  "key4": "JPdzWizYZoZ6NMFEyRkN6Qh3Sa5g641ATjKDkvJGWoCexf9shF2XfcDg9N6L5ePFFuqHq8uzVkt7sSBHoQx5E3f",
  "key5": "2wU37pHzioRUTWvD1fT6XGGnAx6hREdx3QEMQqW6cgs4m1nLYFQzFEDKzj72KEnec9uKBmLLRWUEZY8YfciYe7CE",
  "key6": "5DKoYvbjo6iQnCSrNTGdr515njkRLTYve6srH5YcLxtzYapj1ssxHjeJmTQ6P1GKkgQuvkFUVEdWscA9xUG6wgUD",
  "key7": "t8oCqQ6ngwd7b8f9TdsfHn9Xj9UXv3EruSgBKfaFUbtJV2dEKrnSoRSHuAJKg7u6kLP7SgCtpUndD9tFZtWDfHe",
  "key8": "3q3FuWrk6uhzpCvD8gXXdQiBRRhsGmubPUX335tR2BfpdfPKat5fj4qwHXhbPFc9PD7waEkJyR93R9g2pNJjSRRn",
  "key9": "27bkH89jSHw3JWoKGxteaetwFtgNQ1owwnRdqErZEmHkWGgdC6J9M2dzkMqYbwPsFj8afGRkZ4NnC5SHUT63tv7L",
  "key10": "4D9GWF4i8DhtNf6nQocbpTtrVdPQk5c4KeEdyNTvfAe1MFdTLgT9AYG7AWMrLsfwbpzq4B8pA23wEkCCKFhCoRgH",
  "key11": "zkH6doqtkGUZhoiVfWH9JMRQxG9cbuefTeT3sYiK3MzvhcttWS3dpGtriviD1VuYRNVn26m1KsEYVdYTqzjDNGn",
  "key12": "3agnhQWaaeTGne7uqcntVd5BsHVBwzvj2K8ubXTHvq1VGfrniEwiwK4tkuWmJg9rWByhhToKBFwe2TxFbmbaAc4u",
  "key13": "5EACEx5KebVfR2naEdy2bSKamfvnim45E1ddwfueHpWHjcUyNsdCkx9QjNg3xJdiL33dUdzJDTxfKZdS2KwZ8MjL",
  "key14": "HRyizQ9gbmQ2QuitRQM1QZvX1AuMUSb6LdZFVSNwuBw1sAhBU4KhKUiFCNtPZhckvYYY6z7QpFifJfArdRyUGju",
  "key15": "5PkDV4HZZZPHAqEa7HufwEGhPnGsFWJrBHq68ajcRUGGyKk1YqSfN3ex3UKRGj4Te45kz4zt39bF4ZRZUDrCUJn8",
  "key16": "2ce7EZJNDZuoi8C3uxv8ow8rXyRYzM6wxwiYrgKwrFnJatCFJngz6mA9Y5UWuJNddvFqMngzFj4LBGgpZ53uzZAW",
  "key17": "573BhTqAfHjyZpcW5K2Rc6GFwTtZKHfweD1NfLM2cypH72CsqFn9Dwii7SHhyi41oAsdh1ADNJSfKvhBFwHSJtkG",
  "key18": "21jj6uzwTBN2VTGL3NwKAtQ3QNtGuqUGm7dUsot4ekSG923cka3aU8C9eJtF5c1nznYDJCjgrqQoVTphcLCAaCCF",
  "key19": "2UadwmfQoieqdxK5Z9g9DdxqysRgGboTZTLnsaWR67AbrGRByZP35FqirewYAK9i4V9eCMaQU9whMSTqKMLbgsPX",
  "key20": "2KfPi3vxPKeikTs3oMeTTkCyAzF7iyqqtcCvFfjYbKaEaGMWQUWbzUbd7pm6ciF1ngS95Au72RPbf73AVKzM2kEp",
  "key21": "RGqh41D4KwHZ2WpwaMCssLPqX9Xms7nUxHEzuw6ERPa8aNjrW3uAHxWfjgsTGWex8ENzh1wR17B1AHZWkocx1bu",
  "key22": "3Ex3WBnDm5Kst15oXML3EgNG3WKYgPu4nXhYp9kmJxepLmQ1ZxN3LciSoRAoRPgeFc8hJzYh2k7z55ccSbeqk5de",
  "key23": "33zwTMsy6QhyCfPjwSsV1XcENs451VSjfogSUw5gunj7TsZrCLujgWxL6atBok6w7Y9FpgFSzm9QeyJLDfDoxZRq",
  "key24": "5bVdeF23E581nTJ5Wt6nnMrz5nD3mf1PTA5cYfXAutnLoh6A2oZGEgsvgyu2vLAT3ECQJrSxwXh2ptRAJxrQiRgz",
  "key25": "nGXRXeR3Rqq5Zs6URJvC2Yi48wDn9iqMu2yVMjjY1sPfXhqexabATNgaS8hB64xHFhGNzCQ42zctdGEnhcNjj1X",
  "key26": "5efwF81tXcdQeHhr7yCaZwYvvBBd4Pe5ik1H5XxG53RJ7QLdduEZk7ZczUvUW9CzV2AjE4uhuUg2xjQpnisuG69E",
  "key27": "5Kf53P8HmiCcdJM6BrRP9z3Q5bwD3D886DiuVRRHnCgDAYKGHN7ebDHrb54LayR8MuXBtpGz75KgVj3hEAFT3eg8",
  "key28": "SGyHyU2pwZDay1oYxkEws34dGccvuF4RQYxoBNesbtT7AEFZePoE3aHeAxKPSqNcqFciqma6X6BghRCrg1ckHS6",
  "key29": "35cyqg4FQfYuSExbhxtrwZjxZdNVSbztvKpBbgGHo7AuxvhgnEYsWzEWmLLRZEhQzPKFrGT4SokAHVUtMygBUjPW",
  "key30": "4nBoYfqhKjpXcfZLBJYPTDUDJ66FERreuy4JE7NCQqkoNVrsg433p4UK6CSkbCGmkHMMyXfznnzmLE1fgaJy5YFe",
  "key31": "3NFzTKg4HZvj4re2j7cen87XEzUkgsQD5nmTpR7aiBnxAKv9SZKdUPDFhtH25awJ8hsi3YkhdRccKTWZm7SfbxM4",
  "key32": "41q2Gh6Qrn1Q6afMeBQsdctTsv42nTj6SfFjVenVkxxyhuHnKdk1QcCv1scS6ENL7E7xocpsiMcDZAEQWzWSGxBk",
  "key33": "Rn4NRHjVznLFzNJyLAyCg8UCUcr8QP4Zg3BMwoik2VYq8szvVg6r6vx6cY4ELGt6qHGGSJu9Q41Hxx98qdXu8h1"
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

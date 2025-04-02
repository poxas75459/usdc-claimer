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
    "2EAZrJaUfHKCkDCnNNWan2CKz9tirHFYy6qPjoYoEaR7KrZZyqNma7g5yzmNToH3cCt1cf5Ya6Cm45guWPfZcm4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c2WdmPwQEBhTrzoGCWLyhxhhvMJfT366aZ1y8QPvzfLYNtVoRCjL5bdmcHdRds562ZbtdYjLA5HbM9uHHjdtP13",
  "key1": "S4eyYvBoYkjEtYE8NqXC8a2MfuN41KFC4LptzXpCKSbB7383vnb7CJFAbMU73JyRzDVYHPmK2botrtyK1PFYbk3",
  "key2": "31X3oiPFs5NeFJiEQB6rMweCQbchokLG5wjJ5vsmTJW5dBRBodVwp2bo3VBWo7ZBzzZ7kULAPjD8b6BHXwiySYVu",
  "key3": "4ovF5hrjwWfCci24BTjXX2JDGqCiYCzpwtSc1PV7yY2jhQDgfo1emUfEs7iLq8u8RaR5NM57FvMyUN9cSZPTSy2Y",
  "key4": "3mhEAH3ghtBFLEuLiGtf1JHnQpYgfXcRKnXgWxRGDDz1ArA1cWR3zqrZiSZGGLvfioN7i7FFNSJK5GJxH6hWdMik",
  "key5": "3NDZ8xx62QPnsjpA3jpZrNha91gHPhRXxSYYMJEDfpVK1F1zG4qfw3x9iQbnBYAkdaqHd9uv1KLW72EJJYHqxA4B",
  "key6": "5KfXCbSc6kWbpFZEfextSCaj7SJERDgHjcFMsodMMvEymm2CQckH6s9ymo4d5PYhSnk23uFqGTdoFFS5CipRR5HG",
  "key7": "Yb2nDxN8GcW7Yqf4b9Yzg3WjdjQn2TuAtYxfxWkpJHFez4gUnxt2NGfATdr4G7fTT7dJiM2KEj3Xhjfz1hheVLE",
  "key8": "5FjnAH1CPfjYk7FyoD3dj1n9HuP6yxE98Z7rrJPZVGsAwXxK49VzhS7LhD6wB6N7qMRZwKC1T1C6yFX53Eph9gYx",
  "key9": "5xGu7kvyjTZtfQsxb5ghRk4QdSUfK8L3Weu5yxVdv7JpxUk7DTw8bqKEkEsYSXcWkXWGPqHCbpkHoxZVzFucRbh",
  "key10": "48YB4wcyq755en6vUzHfaMZV2Ah4osGU35YpXhkTXEzQ2HYHNeSYVUYXXf9xpEyzKShQVjRYMfKkEqX13pHmLH2Z",
  "key11": "4N1HkEqwqcdf1HviosizQ4KPJKC39u4NpA6714fMoCQWVXEiNyEdCidebsumzSgeYPxL2SpdfirHW4zD28K4WVo2",
  "key12": "4PeTTCxW1ujk9evQBK3Uz8QzP8TGW6QLCHiYS29HTHQPPDkA2YgMGkwGqUmDEuxanjeHRcfgBpA7acwtqME2A8z5",
  "key13": "2wTLLnZRdHdR9wc6DnzvbbqDSTuRDZUG6yuHdeXiEiKGafpw6S5RH2FEt3JCV4GupDsMHumXhhRBajdy1mmzYBCo",
  "key14": "5c28vX6TqhCUGtg4RXVVtLnNjUixGfMfmPQ2VfF8dCcZt5MA57nAteCECqH7UxbsHExL4DpjrYSTEiD5WqAmpJnR",
  "key15": "2aebbZE6ExG3vTdYsRB13d3XQfGJ4MJ6XCSQRcRy9FK8mgwCYAAk5uzQ6gViT8Asxtjbxn1Dj2Dqh5X6ZNpsmVMz",
  "key16": "3AC8Dvwf7ZMPN9PhEyJX5sRntbNRA8LB7A5NyTQPEeqDLfNS5Rbnc5nge3EbLCw3c836FBS6ruuyhJfxDFLjdzEo",
  "key17": "33Fw2MTMPoEDuV2KdMYm63BgkE79yLECobSHNVVfjL2VppsN8W1cStmXnDf4xXMFAM7dZNdebEuug5a71GN8GLzN",
  "key18": "2zsFm7KQ7wtMK9SS63KqqURYGHLmG2WgM1G3NuXqYKP65eohkuJCinM2s8kDyyWaYt99VurxLDZmJS1YTTjtsNqW",
  "key19": "5ic8xBwozB9aBM89k4rwfUcTHmC9TGQ8G7dKEACCX4tqCg5CapoeYBXDc7mPaXohy1K3893kZuSE6mNSgtghCKVA",
  "key20": "4koLGcLSsF6vRHxh2ZKtu2Ms94gAzXmykye216wY84T55h2KcLRxtu8pmUKTHNvvfaUDunsVWvrnK7xqekeqBCJ3",
  "key21": "3X4Tz9i8cb6vDEGMHz1JATnTqL9xD1WtYt6WYJuWwvGmBj6cTmxi8Sx8iUDe939FuYYbe4DAWNHuY6cURgAojakN",
  "key22": "4E7B5RojHPd5vTqtEMf4PGyBDWFMzK4X5WQAe5A79D9eV5q5SpC31RhLAW6cKDBFsYxsgcRCP7PqFQAnxCXrB3ky",
  "key23": "39s4YdCUKmJbDaHdgoRjbZGg9iTQ3njeg4fQxkhgSVA2QzoHNYnJSyvQVJhFi8RJEeXisbz8qKYxSgzKQMz9ghSA",
  "key24": "3EAKuPHcSdJbRZTeGgwEqjQvcnZmbqansMj1U1pgq1CQ3zfgEyf4G9G1ng8weatqDoJUqGq8Te9xXXLrYygwwWis",
  "key25": "2NYZxEPXB2chGMd8zoHeFCCDb2SCvuAbmwdYSszk63ZcCrLtEjSwpYVSoNKkYAuN8BZv5m3S1NgF1W8noxSPkfWa",
  "key26": "5BshB5LwXZscE7977xdwkc82qC5FgkNxm7Rk6ADw5iEUfnwpX9aqCaLnYZN5JdKZE4T3tCkC57LhG2R5pHA1fGkH",
  "key27": "2cMGgdNfDEAg2LXA8LBe25SzQoByQmheTzAApbtK8hQikxoNzokgtKfRsvKUULPSnrcTVRGGHaMQFB4zHYp6dDov",
  "key28": "4MPVuPdpfo21kjVMvpmk7kJcAYZDCBb3e2ebUc1CgUbCmuBaoeuDe3S3KA4cvxnmmpMBTffsB3FsbGm5YsE2TCNj",
  "key29": "2mkRpTCLnjK9UuQRhcuedNDQL1YmhNvTYUV9ViYbDKFcnK4DtKw8mu4ACTvkW68nQNcxSq6C3Y8X8nA3Z7k6y5ea"
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

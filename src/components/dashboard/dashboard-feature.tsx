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
    "5hJte6a6BS6ZrFnAzekodtksDTiBaaQ313Xf4mgAF6pTpWwxryY7HZ7g6XzBH7mU3Yy2LnN2mNtNkBeoctqyWmdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JeG2aeTh5u7FAY7zWjAGyKd1gmFBhvVQxtQTKJ9CmoccdB9rCe3ZYBogX3xU43Lh9jCXC1KZ9RQv4TEeUFpNCVN",
  "key1": "3caNr8ekpUwtv5e4BuAZsgZrU6SYtnwnPf3h6ZEUcTx8roFSGzrHppAb5NnCCrAE1cirQg8GHgAaAVVCSL8LYFCS",
  "key2": "Ffh37trehAY5QUm62B4QZ8M3YPfugdmEoaGnia22PjXtMBdwiP3fmJeeeEi5bfqewgiSxUxh97FujXEHQPiAtjn",
  "key3": "42VJfsSiswvND6JUHGQAqNJqLXEwkeETTV8heCif15p8i9ZToKkhrzHJiS58eFCjHxYgdVtAute72njum9k3sriH",
  "key4": "2VaoemLe5AnsejfiN29sDymasucshkda4iFnoH6qeH1HYve8mr4z3YvbFGm7X2jADZmBKie5xCGeyzswFvC575TZ",
  "key5": "5ec6rTWVeyVXDYcRvvneKg8pi4HeWDUoK2o6jd5MKdMrr7upS1YBkHhPFJezvH9nmLNmhtSKaba3R15ya8LsEk5b",
  "key6": "58cPwNwpBp7NYrAq6QXAto4NMCt5ymKH9osX7LbHWdc99zzkMLhfD39jevNGiDCBQHxWRW3FyGBCRbAshpd67adj",
  "key7": "4ozeY6r9YAscvbUBrJ6vFfKaz1h3n5EWvvYpGN3TTGq7zmRP175sQXLpiJSMQw2RpQbsTZn14JR3Si2CNxeKE8Kn",
  "key8": "48vtTgQGXLCtGUbZSb8dMRT1rZU29e3tKnHQFDK8ZsaQ5WPgo8zjyjig3ekZWqg5n3a63DrtcHuJxHnNbrWs2dKG",
  "key9": "4NzrdnaSZmeHPoc1EbtZsEF5FWawkLX2GbcJdyqA9h5SyEs3u9Kgoa4iKRhhuxbuXmASgUiy7wF3863UoEGWW8eW",
  "key10": "21GSgGukU648X6rRvQp8jYUQnAAbeTHJfBJYWVrC8DupSME9k4V3pj2TM7aPsaZXyQkZwUPQNEu6iKqUWx2V5V9K",
  "key11": "3Geq9bUfYHUY2ngUbNZMHD9ekXCbSS85LLERLTSy4jh8b4CtFxcdQkfnW1vdiHwB48h1b2QZksR1GKmSUGU2eeLP",
  "key12": "2SA79A7mnEzuZJnx6DQ5xckKLd2te1oNZgeQZJHK1Lykueb3EqZg5db1SigryHpaTsqpU2Zfhs3ATYzNnqaQDLk3",
  "key13": "4Af8qwK9Hi6tNaCCyCYKPccNgwrjhTG7deavCnjQp41VHe5j3xGRJvSGGbozhqWgbua1q4C4onAs6rqEVmkoHo22",
  "key14": "41d4hT7B4Sth481oKPXkijMkLXKsqrWjYbMx8vkECjyqwU9k6uQuVZvhULkcmAnsh4E6rJHwPttzmsNPa6Z8ikhU",
  "key15": "QrRQX4YARwEFo8RxSX2uN1rqBcGQiLCzF3Cp1SHPBq8zd9uJ6ABpo96PhnbQeg1qVLbBCNEaQmSRsV2S3m3JXGY",
  "key16": "m6gi5ZdLgyrNPGyzdkS38TFTEcPawF58HNuc4sBJUzZ9opWe4GfKLFqXzYb8aY2ezLCJMYhDaUxyTwoPBxfUp5x",
  "key17": "4VyW55enxKQMtgiWakNGx1K86reQEikUTYo29ojtCx1jsXkGxkriWMkBpdcLVwtEf1pyoeAf7RLh2w4SAVrkZWH8",
  "key18": "4YTEjGMVob1maxPbNTMakpcxFThVPGuMWDyxskrvm2vXTsbukM9red3aVKP1BpMcY4sGXUVoJBTMGRZoZ476H2p9",
  "key19": "2Koyh7DKSZizPGkQikMvYdFJdFVTavD8HE8XgAewSuUesZtiW5464Doi9CZWETC7w7xZwNdKmRxGo6qEq4UKyn7S",
  "key20": "2935dmhpBUzZXJfEQgPPL6gZMQqfNEsTb7gAoF9BLjqUXK65xmohJKnx88S8E9PFNMpzmeUnvUB5nYL6yaSKByhU",
  "key21": "aA362moVZG7X6bug3EPaLf1MUvRGTbfoQT7scFyjkr5kbZHjKYgZ2PY44w5ZyeUc4jJUbCLfsBnxZ1Fp9iH1wk8",
  "key22": "4QEvG68TUQeabCY623TzmDeGtDoe44X8PWpt7M7nVY1X5Gm7NkTLxc5DFXhUNnGzJ7iM1FXAKcwhQYAWaSsYMwYe",
  "key23": "52J4HhgUL1JFMxTZrmgjHKSktLoPGxhds4RvNRcDmjmykveBGebnU2ksruW7x8nhtVGC3Qhpn97ECAV6hqJqZqm2",
  "key24": "2BUZHV3ZzSNBpwME4NsKAMmFDiasx5yDNmPgDo9Wis7unRUET1GGQkrYpDA1watuomGTsf2bJz31gzPTCepPXAvQ",
  "key25": "2Mfzv1bTezd8Vwhv4fQvuigv58i1hqjADzKP6sPH3eZkxoMKp4y78P6VaFxoozwG6Xf7PQgjCNLtMKSC88tVTf59",
  "key26": "5tMcEGe8GL3wzx9azHSfuuG6gcUg5ygX4UzskCg982ue6ef3G98myTXBP1x69m87NaoTsBnmf6X2W9eZEmRK6cos",
  "key27": "4k3aTNGTDMgubCYqz574yuUsSauTz6etakPLXDG4GPq5Ca1GcZDSgkuuyVtiJ5vPTJjw1YMQFhMf7Y9ZgwkYX8Em",
  "key28": "tJKHjUoFTf5FpyTiVzbCsBwws3VYTENPQxVzxMPbSJYrh9LXrTyY5KzY6FcubbyBDEFrLQUMrhgMatJrjuaU4YE",
  "key29": "5pbwFvkqFWSnhBa87k7X3mT8qsGQYYZfDMc71fc4cPHx3WmhQCuZEwf3pPryM7M2Aih5fTxMoQUyxHN25sKcaYPr",
  "key30": "35Uyb5NwC18PYoGCJacDgc7BDoTV98yn2bbhSwv6r7WzxEyTWWRutFnWfudr6eHd5NRZULNZ91nQdu66EmPFxGQw",
  "key31": "65ZRgMXXXKjQUrbQdsHqtbUgh2UoC6iXB31WJQvz1oraFeSFrq3wnW6Kgxn28mLXGwTb6VQuVkkH2UWER4aVYrAM",
  "key32": "NfcZysVi9JTomVQSbQKkv3yhqGhaNGiSbFnZkA4cnPZzU7usidRdExt9cm2oJ4Ni8iy4wjboK6TVSeS1rFor8nx",
  "key33": "5jbWdKj4XNUJMbADFQNEKCn7iKFC7NXxPRgQXZ2Lm2xvMPzRwEpqQStf6WMtsxQT6RcexJrDHFMWmNP5U2LHTBZm"
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

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
    "362GUSLmEDUqDkycssLAoBXR1MGbXjSqXV4tgBwS8RYZ1HFR1FJ1Kmmt4NrqNHPvN1kDFKDfC32XdS9EX3DQiV5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VjSgwhw6q5B7L4HZT9D3ChW42oLnqRCaNXydVy5eREco9JRoEdnqz3YdAY3M1mKWp5HRTCNrXAqtD3DRZKkbfT9",
  "key1": "2vDe1UL2iJjZniSpmRn7BjBz7abmrtWxFGUkjnrkQk1gmbx9w9heoFWidMcc7xqBe7VC4kAxQxdtXtSLhcduRgPM",
  "key2": "3BDaWWn6cxk7m4TA3HaZzvqdXovDaAy6tn5tyGicjQvadYS4HvLBMCciSuPUbPZvPbR5it2RhtwG8Z4Bu7mDoGaE",
  "key3": "bF4FdQqzZG5J2nEf3FSQJ1MHcp4jZy6xJXExhAjgExAVdTxnxhEp54Ep6XpgYDuu9QRwJgsfCtrWX8gDqfAnxbK",
  "key4": "5QvwXxjEWHxq7noAEvpprmQ2GE1MG2gdtRc2So1pFkKyJFcvQZ9gt7SbV7EySuiAeMWfzXGwyxJgWjei3YEoMTxA",
  "key5": "4TyKTmYkRez9JzFFGBLfv2ZzDKnmydfrn6KCceLgQjP3PTkNsGChU6RPk3h1hF1xF3zFD26ZdLt7TSWGWe5Vmg7E",
  "key6": "2pmD7hB67c1CYNPAMQmYwVd61hfLSaHWXATxLnin3HBHTsQhEDGVkUqRQveZaMYUjKj7JbaYDbXt85JpYGSZwcFj",
  "key7": "4XuAzXBt8pTayunELaMNhE85t2uHMpgUWAG6BJi5GSG4n5Qj5fFwDvMgrYLCSfVMfXj3uGxfKdohHsXBAxt7gLnf",
  "key8": "JPS97RNPK8Cn7b5Zw75JEajc9UHyoZWUjrFYfGuJwG2WpzUvKgjeswECc3q4UmienqV4wffUk7ZDJFcwARV3sdG",
  "key9": "4uZvxSryFCft2DvGd2PVyp22g8DRsYYSQoUty82KFKWYKTp6zPVPVVoAeXAJhExZLaeqaR5UWCQe2rveTSiDyu79",
  "key10": "7zMKVKeHtpZE8UbLoJ3M9NpPSzMqdjnydMDSx394tnT6NtqBD5ke42t47bkDeguwNpRmE6f7cv4zHwMU1t6CG19",
  "key11": "5Y9SnDNLR189vNDsmQVgLt4BkJW5DvvznVPTqVrQiQFeA1niH2FGQPT7XczFjKkSqRv6BY6t61nFf6PhmVs6xGJq",
  "key12": "3w8sdXhezVATb7CARLo5JS4QoqFowJsAxyEQQTS11fbuyrnfp9Xq87D1ckFTST8hdp8TqzaCk4qQ37J5skaHYNSE",
  "key13": "SZh2VDXrmQCbswWqHUirr5BJJUK7SRnQ5gQZJyLQDu8bkDWARau84e5EpGVNAYPC5mbPTd9opk8Q1vDQ6tQiBLt",
  "key14": "Hm4sBaNmgeKqcD3oVeWHuc8Vqd2J8kzJ4zVZrsBxLgsAcQnGvw6zCHA4ErVCGm8riN3BoMBG9msvUifGydmFrLH",
  "key15": "5Y5fjyE4uFAW29m1dgLgiVScxqoQnLXvBzuGuH3hciPGRHYaMFcZRoLPKhAAmJcJPaHTfAWPVbsGdshurqhkTWiE",
  "key16": "2Kg8LpER3fJ2jMscwFJFgBFCZpe2BbYh2BTWC4oGbhqzzLGg4sAg3EGksAXaM7z2cDhbvYbeitq212bnBqf3Qq3R",
  "key17": "HiMGLEdepLMUSzMMokWi3FkjqituPWyzeZwDYehGRj3qa7uFPrLPXt1y9KuuWqHNjmrT3RmeBggPJE6ZcDTQcZ9",
  "key18": "mF55i6JFoS7xUQT3VjxTJRYbDzUCJGWG5JEC1CkFCi1ZiQ7VKd7XFH3UEEtjqWoqsrppT3VEEXzsvuDKGwVyxJD",
  "key19": "4QzWoy1T4iaginewrkgktMJLAAzFvkLUa8mEDPCaWx6RApHq6YqsMJp26PgbkRsNyZkdj4HPKgGemD3kGfceDRy2",
  "key20": "4bv1VEZxZ2hZs5UT48FyQgoZWZtUGPx83TxR4Yj4K8phwANTUZgKwGWbnEqqXnAtezVBbrSTzjaiwWMpbxbFkvZe",
  "key21": "5ti5exNfRXnou68Gk61XZrrS7QTWwLWhqxMS5iHPSaDhQZfBxRVT7ZhDbfWBty8iWXRmcrwFSDMNYU9iD1uVonBK",
  "key22": "LRGjxtpSxnDuuaXLav6MpLQix5xvJ57d78abvFi2UwQCediFrDjah6bWpcDwSbQfQfGyEV2cubobMQA2fV6JCRD",
  "key23": "2pdY7dX1rwVZWcyQhFUDNcTKJoZfbs2nJHgxVVmrwb6wGANJdyFn9b5ARfx7E1AE2eCqqyHWpmeo6QyjqYraw7T9",
  "key24": "3hydxyahp6B8ziK8w5zhMpqqG2yjc73gb7pe126qwedtS2BsYuAKNBQb46sSqEp7y8dcgnPkyspyoGgvezb52n4J",
  "key25": "2N5RMe6746DD7X2JDfCDgx9N8bj7sknfan2orr9TwvFbpXiJSSA4vbMLw5EmjNWi4PYHCLcRsrusLjCRzRkGopMf",
  "key26": "2LFmZjxKVcWAtL1xEDM6XWS41pfy627KkYUo91qbykx2yVPrGMgGrS7R4kbMt9cXUJxxjC5vkyEjvWND893B7bHR",
  "key27": "5xtbsygdn4pujgzSkz6ksEyVjugN9MG3biSgG2JFwzBbZnqXynQMEPbrUSFdUPqwdSgzpEyJqm6Wbtyp5BnSUvVa",
  "key28": "U8i6fEHcGXC88AsMVEw4QsxWa5yQaz2pzQkRh4b4pJJf2G7bhVeaBn1YqiFcEW5vBShdFXMvqhMb722Bgt9r3hz",
  "key29": "3L2YuPJf29wCoCf2JuCDg5XtoFKL9yvX2wog6r1P5ySA8xDGgWB7uqXwc3n7KTBM1Dp6CzSE6dULoVrXhRNjVrUD",
  "key30": "YfudzBKRYk9gf8cbwgaKkMJpcnz6398xcDAPm8bPSqNvKrNfHUeeSPudfsveEtvM3McDtkCVtMitmyK3ebwhWH1",
  "key31": "4wucPfAXEL39cs3ZKLP5CSBiAby1JiFpjWehWFxPr4hBsnmhK5gpgRPs8DdVHnvoFPQHWQgxz9hK6o5PhHsuY3dF",
  "key32": "T7AunLzttauXDziXWtfzx83PPJzgTkpDHXRaxy6xRvmTDjoPBegcDj845n6K2M2aQ5BYJQ9m2Zfonc6uxctGoz6",
  "key33": "48S4udLwgeF7sn9vetKpZAzKkVWTuP9HoenSpfti5Q7GzCSbMhsbhwZgVJq9AbyFAz4iFwfceFtPiKbhPaiicVxR",
  "key34": "4JeozGCvUK2xS45gmy7DPVhTjqY2NCUfaQhpoXvJFYHyQNrqS4qdvmeb3nLKUPLLQXPCorknYkrriq6qDgFhdQ9f",
  "key35": "35spoX4ajd82pV9VRYgpESAHeaSK4MnVmWfUWHkfRTe1qDNH17upkgPCvYzKT7dDC6azaNBmsqNSjBE4ETRG6z5i",
  "key36": "3DNy2ptyKKf4wxtt8oAJfkfEbQiBBqciU8d7iycZs2Kmm8u6j3XqHw97Cs6KRVYoKJP4CA8u27sQshoxEEHP4zKQ"
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

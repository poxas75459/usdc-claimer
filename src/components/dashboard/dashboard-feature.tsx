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
    "4K26i21doJK1bbvWFDehANfeUaoWPA1BvKQv799HCQMN1UwnSZNroxH4CYgHZmx9n6Bj1936zHGrJKybqwW3HMau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eC8gxpfAQipRqechcBp7xteQk4mQGjxGNE77UqtosQ3rQWjoGc5C4SQnxMopdu83qB5oWBrsqiub4ZteHwgoLo6",
  "key1": "3i8T1rjQGZtzs5Dfh1hCuPq6WtN7eQ4MbmJB9uqYUFT94UdDA951MAEBizbqJkGcmUxzpKGUb9pfnMqTXgQ4aCUz",
  "key2": "FmYQWQFDBJos4i64crMzx2dqm8k2tHaDJEzyM5xgdNMmybLm7mwZ7Qom9A9Vykt2pzDMoPEocdMqvDRUDWQbb4w",
  "key3": "S2KHGcf78xjEUfr56VwDsRks8xAHUsnXQM4BGeXmK2DFeUTyYe6WratSm23NXuuA4MufLdZ691MUQ81jHBp3bmo",
  "key4": "31fyKygxf7XfU2G9cFMTTmRb92A2RHeaXvX1GT1meRSRgbs797JYSheuB1BEnoC5HT9cmw9GfsvawkK42EsxhAfC",
  "key5": "3wtn2oFUuDcYStTzteNUhxCLHv7K9AnTf7WSqDmgvVbwH4cMkvVRZHVEbD5j51qv4s3zKeQojhEXg5WMLmFJCDFq",
  "key6": "CkBNnogWzM2THedhSQKGqEbCVHLfSdb9Yt7RYKu8G4cidDvcnefsTCvLb6UZ6YrbMBcuaqxRKXo11mb41TpAvY1",
  "key7": "3WXQp7uhZXVJA9kKKDrshN3X2DR71b4kqs1muMoHhdX4FaD12R5tmQjmF6JVj5uDwjaGRnPp9crdQVePf4WoKmu9",
  "key8": "3SyW8uD1QrBSv7DGUD4b2jFbn9xzjkdS4NNQjpY64Nho8Yzs7emnHHEzy6zGgis7jhX1n6KR5tNuSGWeve7VwhnQ",
  "key9": "7wWLBrVoi4VHVd3GM5vjYGM6QcM7pD3UMaAJLjX1xDMacDubzhnapqQNR7cVfKqGxiENSS8LCoKP7A7jQywwcNC",
  "key10": "3oZdimJVSvvFnRksSxLrLtdbRDD56tYCvq9ThKV4EsWmkrV1cX3Q5p1RaHw9qcex5E2r8Ey4WenUxJyFxSv2Yeb5",
  "key11": "351KXyFnL1mDyhuvLELT2QxuvK3ma4VUHPbNX3uK9P6eWRHJ3pojUSvQWjZrZDZzM8MEDGE6r1ri9pywJrbsJLMs",
  "key12": "3kk1EycD8F1JeYAirbKtEuv95b1KH7EQ1xwQemRdjokrnzC9Si8cQpysvmvtKZvtva3Wyby9aAYSRj1vbjD2amgW",
  "key13": "2EzYzR66LiG3wmNua4SWJCNHokwUkesrrEyy1UKNhHUkV4hJNM3kXAa6DuDUnY6iifpvfRUyZiHscTTnNnSvqTB2",
  "key14": "3vKEphs2e8uw38PX4qXwVHppaLMRzAzprWnbfTQ24ffBnVYYRYXCDVuNeeYTLKcdAoN6Bgm47NGKaoLpHcMuh66t",
  "key15": "49p3kweAALMAczMd4uBDTHprVBiLKNfiZWYNrxjiQVoP8VZgoip3fTwmHk43esqzMTK5wKmHzkgZ5SrGmmfab1Au",
  "key16": "4giSgSCHpzKgg1bDvYXsNPNJGi3H6sVby1G4E1jo3Gj8nVHzaYm4VH4Dffzya3azGqd31J61rZyXQv9o7nY9FERC",
  "key17": "2kJSSzo7LDgoYNFfx9JAy1YtvsafBW4hWCF3fWN9sKuHZq6THo1caX13f56ss3XXv2RP5cdnBrz9N4h91DyrBhnZ",
  "key18": "5mEUeWwJvNY2fJqBPZtBC3mJdfkbv9wmftXWDKvmEUwiWetxyMporp2fEq4urFLMMaytSAGbqcw9YkRjQNkKsiJJ",
  "key19": "3Po7chrPYWbrQ5zWjPJ11JvYsHrG8MQ8s31bDUckvzgFMHzXfYoS8xEP1PH9ep4QUs3e1TQMCZvAzhFeWmjBXniJ",
  "key20": "4WvJs6gvnNCvhYHbtMptQyfX1d6WU37aSb68XB3QoyPqDC7NZvtdwNtQ9iJ4DbhTuGGmcNWunHJc6UFV5gEHuvYz",
  "key21": "4jtf8wbo44BY32JYp53Dbcc6UFYu7oLfMiBoDMtDTeyL2tkVXFkQ8oU6vb1XatpJXW9TH1srVtr7qWmPo9GZ7kBv",
  "key22": "3C5QpDFbCBbHeXMtrkbAReaqNzBvNpLA5WNzsB1F3JeQW8MTpTVNzAfYMz39iotZ4pCsYAUcQEsFeTyvX6qMS1mx",
  "key23": "2pwmsT3KF1cwsvaZo4qM9vm9ASRuCwH8y19WiiPXSY4P5d9fSdA9yszQuUgMz234L5XWDunyVr4qTWeBrCBGmFg4",
  "key24": "5MZzwAbd77yxpUcbqna1hxSRWNHJrzzcCQEZ6cDsfHn9zZHY6rYeZonoiHMYcy3YfJgz58X5wjw1PLUK6Xc4NabX",
  "key25": "2N2hxKydRLZvqRQM5J1sEwWfSfvCLmPvQnr89LMSqpYLtPdAKxRqiucnthmRZaND69ofjPNAJoaRzQfJto91oEm8",
  "key26": "3cfikdZhv198EueDG1YngYc6HGEmdeZfaiy3z225kHj9LdE8XexXpkp5KzdJkpF4gQ1QXDDsQwmW7UVTHabeHay9",
  "key27": "5THFmHLczutzV1Pd1fhbnfZwN8sw2LAnTGtUUqsJP9wbEsb3pvVV3ekJjLpvLJkaMm7CyvQzmmckhoEAw82rF28E",
  "key28": "AKbPTbm54TarMUgbHCtDpxzi4NT29GeHX9PL1nogiFqCFTKuDsMPDAeSiPCr1VpvML3ff9vxuSZqrDmPDdbJgA6",
  "key29": "AXyGrp7uqHzqV8LYqmqo4FbWSkBXpM4tJoACJK5JqwTRnz3yEQZjaXGneXsDNfWoouPN47f217qVxwXrdgcr38W",
  "key30": "2KbLZy4TBYa9a85ggzxAPTHtAdFFKDZpwNf5o2KqgPGmKq43bcGRWw8MteF6KPKTtzxHa9FzVQxFTiBYUvhFbxbq",
  "key31": "4KRZepwj8kKMCpPnFsHzA1NscTQ5eHPW9FSe8Qh8kFGPhcg6yeaarAL2qAbTkMLZYrGb21NM9WQFBqtLnGEReGxY",
  "key32": "GW9sEDhWir2tqN65WtSMvr4pb4sPZjHdQWasC8Yd6zvdc7hLSPCwY9eG6WuTw21Gs8dYwgcHmxReT3ZjBPFsY8v",
  "key33": "3FAcn7jyMpae9tNWAATqNYzMSu7ZHecKq6JZQaGWiEUxf8n4y6y7QM3HoisKHP5GcapsyF21jz4LTyXPYKpxPGoW",
  "key34": "cuzSV8XhTorWvfKkQNy93qwYZVsDunNWAmB8hkqEcjjCo5evCrdSKb7tehAgzvBd6VHS4KfQhqRX6e9fEB7inXc",
  "key35": "42fnuPuPZYc6KCrHHusekp3nkeUpGVQruKqhoUwF1fbGUNLomuyc75JM2cHnMeTNxpce7YF4oGkVX5UkRiyCj9dt",
  "key36": "F3ZumcQRLkfBB2ENqn6RBBUJQUgoSXhah3kzwGr3y5TrZyRqF3vJUkX6yZGtGFPyg67NwZYSTZvz7qsv3zpEEvr"
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

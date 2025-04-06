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
    "343sKEJs5H5187xazPTJWvWgFoc2mCUYnFu5Bd3eK41kwdDedw3CPccB2UsZyscD2qVMR5Lc3mijLueXVVRCqUVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G6NkCzLMkSrXJVPy3EXzSkd2J3bjcd7xFJo7Mxmqy53gLX1wAHKNAzdsQAMY8HGs9oAuCw7f3ub1g7tRPrVsCdw",
  "key1": "2jJQjdwNiKfvBD3sbxo8W1W5gw5DomqH4CSSBnHWReL4JgsNq8hKmWBaaghVULHDkpeu4fjn9uHvfxwP4yxH4mb",
  "key2": "4H8Fp92TAu1FCkCGScLHLmjin9binm5bS2YK8GiUSREBWxoR4HUiJg8CgZMjGuai5RccYvg171A3tXmya4Myw9Ft",
  "key3": "5nnWejBb56KshMs3PBebmfqGzB1zPbALnEh9izUn9D63RQhz5qLV47MrBd18yK7MAN56B2MQCLNLA9Ft8Mb7UJ5i",
  "key4": "3qzQSYkW3oj2qsq1vXwp7Hi9upAyPPHvdLLSAU1rEyjCpDkhCeWuLsDQRQFUYLJHyEYwXWwYpKG6XnH4kRYkbRn5",
  "key5": "4WktU4Y6zKAHWex8PeqsTxoQsVnq5A3T7oXywiYTkiWVy4uLECfRSz6ZzKkju8TdT1vwrdQGqxwmoUu91A4ESz9T",
  "key6": "UFozFfjnoPR9XG1F8TCPa1zzwoKLgxZ1RooJ8FA4RmKEhzChqso3iQU5RyJQLTtNVozEgreww7ZWJQnau5MUEun",
  "key7": "28F7y1LWARbPNoHfo5iSgv9tW7xFJbU9otMSStC4c9aDwgxHH4gYUTqGuU388tY5a9akTrNifigbTEJCweZc1FFr",
  "key8": "rDiuSyxm89Vdmx3D1PDXyTRw4fV6K1FH8cQNPCPbpTMTxVBEpQzvvEhQPAC4RZvKo2z8UWA9nFQ3pmTfbWHAQYA",
  "key9": "2LhGThJCim4zd6UcMkzQ7UXChxd7tawEWBMKMaNUovxS1omdFf27YZB4Sc95gvNmuvZdmg7AieU7ia6NCKQYGQpY",
  "key10": "28ZteXZqew7GWBLzxZmtgpCKWpHcRmq6BgbowQZ3djwquU8ktYNJZwi4LQRi71nVGBHv8BuKjFcMh4HkQ2gxUjvi",
  "key11": "5ZcASnaPA3CKBgTawXB2Yk7AheFAfcwJUhfJq1K1tdKzH8kABTEeAZW13S5BEP7fMgJ15gHT4tSW65VMj4DNbpY1",
  "key12": "5os56dMSe57wFHpxiGN1j4eCvRNZKUTD1D3UP1Z8QBwRpvM9uSKXkA9VGB4whCC3bCE2DjmfzU5MQ5ozBhfHh6nj",
  "key13": "jZAy75CwTVPkSbLNZoSbU8gb9Q8VavoCQczDnBzUabAuMWHvihzSiYN1dCshbstdQNKH5HdBFV6n36zBEnkxQU4",
  "key14": "4owMtCcMGsS8HP6uZdE2qFkMzxnYVbF1KPm9tBfsF6rvzk7UYggZ9xzfGSk3iFs9zHoXcr9UgzAdYVX2MwP63M2x",
  "key15": "2nMCJYcj1u2QJRSLmSA5NF5pKCZ3y6kAVkBiKttU2NtAD8VcystSzUTwsedNV77ERRizzHnE7XjskJJyrN38rhA5",
  "key16": "1295Nbt1s8cUoWWnyFoZQokS6H7Vqtrn9b6dRcz6B7vykQG3kBR1tZcsNwGk7DwUNZwKLhM4gWCAvQXpBVW92jMa",
  "key17": "62Yf7wsDX96afSTvLhh8LYmuhBkNPQR7qNeNFvdSJ4SbebpUrJNNfg8HEHntfgwSj8RBbjq3xWLY8HDuvZNFVy8z",
  "key18": "5NDrmosxzt92cnZwGQsa2sZtK1qmbfsAoeWPnsgs3sudtcVJnfU726WwMFUYGZdZioGF3GvBYmznyvStqo4M9HT1",
  "key19": "55jxfxCeZj6VeaJqzaVDBR5T5kYqZF2dULTwSX7ozTWkkdfPriD23nuLXdLY7EhWS25yoyBg2LsaH8zTSGKj3ycH",
  "key20": "4tFXsGKha5UUkbLDccjMLYminMkQpu9euNsGLhbg9BQnWPSjtwBoCgs1W567n9VbU4VnYqisymmjGrz4i9Ucngxa",
  "key21": "3JsHd3pfaSou8a79CPDL3vpCsSFW8FEradmwsLRfcLnwnN1enZbYp3u787xS7LrRHgoX3FFfn9ymJR74LNAiMNR",
  "key22": "kjNe7i4QXKz6HrcSNwrcidszJpmphV8y9TZBDgr8KRes4i7c9r6mVEWNGR3PQo8pnDfTJLPhgfXqpTJRBCqWHwu",
  "key23": "65b2hoRujy4x6DqEX67TmEXDTEz7SZPpZuKFrGWb4SDTjv6RPt18saZFAV3TUkC4CktacvfJc5Zw9SgmuHzoK87v",
  "key24": "Q5CcJu65dRMf5JBJge22w8oGE9CVwMNGMGoriTLWEZM3PsjN1sdbPjst8UFcESS196639d3ANsxwCJCi2cRkCyG",
  "key25": "5PGLEWGNbMUbkzS37iVyTfBMqUeKv7CnB1ppfesP3MubdwyQfhbtXBwYLgtPaXeWEoLT8pTcQB6XwCzTdzQhxwBk",
  "key26": "VyGUEyoDpD8ByVCLiLKw5a14rhYq82TTcToB8GLPfHK4P9MUNA9oGiPDRb6KqCqg525gVuja7CDeqijHaD3FVbA",
  "key27": "5wCG42Jxy29n1L1VNQ7Cq6y3gDLLCER5NE6CpxsSrnW1q6jMyZnk6xTm1MPPNkXUoBgC2dAtiMGDsWVZMWqV9P51",
  "key28": "JQXbxkUDvtHd8b5EATsWZCf4S7RFCUVX3fE11dsRWHk4aUqNVTurUK2hKncaKk9cr7y9snGSfWANdbegg2YcRaJ",
  "key29": "5cPRBDRrNFBCuccMqMLpmiggPG19AaoRGox5TuL1HxaSYEDzcQCTbJ2XeKbHRnfcnfZ2fKLh2dA5FxhRX5ybpJoo",
  "key30": "4u3DC1gw7jX5TdZgsxKUkiALGVMwzsVv1dyyTUeUjZ2qwdaHxTQdkhX713tv5dCLchZXBuXLqM6TAfGqQzcrH8cG",
  "key31": "3FWXn3zKFXBXoB8FqMaLjoowR6uqCSxhkat6BTxiY7LDH5b97umxEk8zs9weEBKRJ4dAPVMgbbRc9X5fbPiDxpCY",
  "key32": "ZKBpR42saHMnvB3GLDGRMQ5VHjYjGr9QCEvwNB5dGGgjnB8gGK5cM4uuZj7PrDdJYEnF5YZPV9oWr8pVaFXxmHW",
  "key33": "4eWYuRi9ajeheJGF7tqTN27sUzMQTBs58aVB2fdASUY1kfs4oBHxnYkDfKSQ5eZ2VrTWhrZisE4oG7ozwhkwptfB"
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

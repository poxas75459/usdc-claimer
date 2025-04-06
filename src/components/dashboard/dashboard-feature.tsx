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
    "5TU8Q9sBKdHv1SAeECeV8KkmauSp2g5gm48u1dj1JsHdzHCBhUAb9hh78oegTRsxgDiCaDAK6cDBo23b9naAdAf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fpT1n1h6n5hKjWN6Y6xrKUXma2gZpvcnhg6HJq8LtPhgFgqWycohGfrJ2tfQbaFxgt5XoE5do7fzafWbHEm4nzk",
  "key1": "323ReE4LFCLfUUkWhxQ4SEXrcc5aVvH2fNbr1ApNW8EggpbuYYfGGZHHGrKMv4ikpy42ydMz1n6gMzAfAtUTheHd",
  "key2": "2mSJBQ8v2nMJGckEfxGREe4TZPAYQyBntUzNZ8BXDGuEznfuya1fqkTArkEHvecMkUtJvrwuRwWKiw33LhKFHqLu",
  "key3": "3M1xDSHDQokjsWtLsnbNnkPqwWLXK4r4hzEskfNo9LxFddYFf2GNgry7qRjUwv2twkx7FT3hY6buXioeuaBm2mvd",
  "key4": "2xW1UPjzgi6HnfYGif1WtN4f8CpuBeMb9QUjWpEVCbNhiRE415Ruh1nxxaUTi6J5CgkbZgpJy6REBTs8VVrHRMd1",
  "key5": "5T5fHQXpu79KFEYdAUvsCirjw9LhamcHpUckmzUGhZaYPRvKbt6gZJ1Keg41uFQxHmwgun6vSrshGA9hheMHk7KX",
  "key6": "WQvw2ECUNyR4mvN4Md18ojr8uQRnQU364LrMNFRsqRXhLqH718vRgEUCVh1bc1rXaeZ1nWA2XPHmJMm7mxpYqLJ",
  "key7": "57gim4vMttpd7hLQFqWFQ6rDGtASyr9TXYUyNzthCTMLXjtP17YpYoVEK9xRqSUBfhSFFEsoyzianMytLsV59fi3",
  "key8": "2U74qiatAM4J8mqbWcQswwCnEhshPp4Fz9Pm9NDCN87zQKQzKBdK1smaYqA6Ay6w3p2azd9qQeftKW3CRNWs96Qv",
  "key9": "n3t4K4f5ff4SNVNFQNfVDifdvqyL2qFSbLhhCWnikePcAANTjoeFyvSjSVptjf5yVidv5wqH7SZGv4SYcKvs7cB",
  "key10": "5HQ9uYbXbAcavW2s3AwGeEMak5yq3vcg6S1GAQk68Rx8ibTjm5ttsyD5WtL3b5UnEYS4P8TKqLKBZEeZafGfz1cr",
  "key11": "2AAxhWe8oGXJfq1Udch6XXtq2dpyhG9DH7jro6wCTBjNA8diT9Tf5Z6YHecmfoA1M7gck1PmYWZz52MKVjmDLde4",
  "key12": "2SC2bGzmBtkHJyErdnbAjRn9t3RiUfj4kmBw5xVU3yy9k2PA1C73HrwWnhiNj3XYo8PiLKBJmeQc7BrPi6X99wFy",
  "key13": "5kTSQcnCD9GWnTF9XQwro81o3R7UFz2Hecb59b72q13jBiakv9sQLNjAozDwSwBUHjC4qXQSosiKwb7ud7AyHLs3",
  "key14": "4CSAJgnKnCFyzPybEVsJn1Kun9xMrPGjR7Hureqi5H8Gerbf537YX4fhBWcoeQjC4NhoAmeShyxn6xfEADzRiH18",
  "key15": "GsA6Nap32FyDpP2z5udgMcGpdzSSRbWf61t2urfqjFMfxRSpSPmTXhc2HowXjABm27Moi5n7MW3BHMhqnpKDnbV",
  "key16": "4tnyfGSrTSZ1sK9Buu6uWyDkt7USex1B3ZzM6S15okEZeCdsMWzoH3XqUmwRdCicyHiM9XN4deQ2wByZTpd3CCWA",
  "key17": "XJBWmHgyx6P5EuuRrFoUoc9YtmyBFzckBT8qVgxgjjDYeV22BjRZbfkGSaRkv4AeBfXCHFFoqNnTrcArmqjq4xX",
  "key18": "3VxECpyGe9ipnBBU2QtBEEdCCbCdbBdx1p44qyYnyLJ244Vq1yqMyqfaPafXmhPKMFDN6fQhSXdxC3ywKpDBfdCz",
  "key19": "2JHHYNKgkYUfp1xEJKAzivfaMtZazPttFT41zNns32zkQPqiRDAtn9A3NtucebU1u5vqZDXeR6qcK22qtXZHSoVo",
  "key20": "42FjPiJMrPCz7vWbwyEBZrAqmDiCpAcYSegACvf9vu4SYKgrXQJdQj5Yhbk7K6G6MdaYSy4hDkkGZgRYLppJMfVW",
  "key21": "22TJnHWf8c6cUchrSUPr1epyNEoms49ZLnPJVGhAZbWHB4Pa21EVwCQnqQ4zZVyx5PQpTrezAYktmjabUQD18F38",
  "key22": "58hSUEgdMK3eEbCitZ9b6KhHUPtJL4KQW3s74ZFdYH7XkF9Y36fE5xVPHwxcZCE8LFvt37pvqHUMYeXQLvp5cwwr",
  "key23": "3gxq6rL5NK4tfMQMfVzwC7vmj3C33QSomTZeinkXzEsLR9SHBoW1tu48ysWFQrS9NnAEc73ixLRHBf2Em6sTwPoj",
  "key24": "2RtzZz5fsLv7hFQ7UABW3PP3TDHmNns5D7cJ8hKtnKjEb7fPVGdK8tqc3cepe3PLTNk32RYaekckoNattDdD2itj",
  "key25": "qQTejqVAEfwfQWazVcTqJJ7HssL7jqPdJWXEqYFrPxMm97zpaVeJ2EnPzUPo9f36tfHsAHTtDB4Yy28tiW3oE21",
  "key26": "4vaJxVRcT7dtpVfXA9UqN7BHtYhGyzVyfrVRUfzfJZPvfuih8Un6JDV23WVsSUMRXrjydn5ZbsxSFzu1MmYZhJku",
  "key27": "22YRYbQYLNhR1ZcmfNNEZsz9W6u69uVLWftW7W1p9Q45WpAFMcNMAU9vUGxzYP2FVzh7Uy3ctbBn78XU35dJrarA",
  "key28": "4sDgXdo7pqWVjkz8vDqxaFgnCgLqRUJum5Rv1qbwhntmVxfDzAHC3pmfXAu2AYK48aXi9YoDXpQFmG5WSRYEfT36",
  "key29": "2evgpyRNtNE1GS5kMUuCxW8HJhnoayFfPceKNy3pFo9bFo6XD2ZucVzjGZkibLNPTdhxvnwKYtLQ2ZXxWntPWjXZ",
  "key30": "3nqnQ2m33efzvoeV8uxT1zpo63aKdYnz2EAGsa5cWSWVzmqANh8TwoNQHYc6wGcVEky2QBtY3nATqwtdwmv9Y33T",
  "key31": "4inZQWNHPjxvtAgW5kMFPkD272cgqM6L3HYv4wSPFzZFgx73SFp57A2hZihcEUSyLj27oDgouaQux7CZhr2nkkGn",
  "key32": "2HwQZkzjrGKxWGqWrB3x87skXFDJWpYmeJg5nUipD6jeYfR7pAxXjdPc8CsVVQyb9DHdFAwDLcmmeAeGdCbTNVJc",
  "key33": "3aF4xCTpmLjodRH9Wzg1FMzwPbphrSz2oWBdrgQ4uUhNSUVsmM6qfPxm4Anmhfh5JNSAddrHGhLQMVzCmcP2PrUs",
  "key34": "5jBc7zxZgTxqN1H9Xj3mCJ1kNkbxSCC7ZvRG2oe7rKtqi5NU3jJkkrTa7URHjcA1eJAZsyKEuJGhN9s5vrqtH5c3",
  "key35": "5ubcaZW2yv8tXurCR4ST81whvmowJziDf3XBfyqy44y6WCsPbMYswhqNXZkdsV7iedeJLAx3A2D1HFyG1pMULhTL",
  "key36": "2DYWyb6e7a4aYsoiM3M7kj3QmZug6e6Up68dbHpyTtFTArjFH4RGM6ouHPNar9J5TbtmBDMtEFCJVgaxD4bgTERy",
  "key37": "4X8H7krTENt8Jedr3oLorAXQcUN3aXYWXbmk8hbkEDJwUDQfC1MiyKLND5wUndZvUpDR11v41V8tjBxPyr2bb9td",
  "key38": "5rGcHg8c9UmV1YDnz7yiqkcdCMNYHm79Gpy8TQLbXLmj1QdGYTz2hUEY5yBtQuWxBcrJzU9MFecPkqmbuEkR4bCd"
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

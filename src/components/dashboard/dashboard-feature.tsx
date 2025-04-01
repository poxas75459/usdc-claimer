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
    "5ojhj2n3BfzVbEtD11w1BXCN4zEy84GHkTcSXLiUfUa2wwSUbxvfWSNvAx4Jf7G299LxafwP9mDbBVmJD7EXreei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eppExuK7JpN4PLmVYjrdmvBjssLGDp5RVkENA42xLo5yhDfQ4cFQrghVDGXu8ePJk7d73zP8vdATA3z6Yj6jkcd",
  "key1": "3xJKBfagu9CBg2emCQi3tQwrgYZ6Fhu93f26ZEr1QXBiy8ofgenxfGzFhJruUHhSCpjZwQq9oyYDj5zd8RafgvrW",
  "key2": "3z8sbcsnyxvRqzx8UTEfDx99jfV5eUw3TkM2FdHv6X38QUtobbAnTcz7jSM2MptDXyTsEJmZJisykvqHCWZZDzrt",
  "key3": "5ZsSd7MaBWsQXauLoLKGyLrFd9amf6V2SybSsg82PxiXwnqfqbxzWgGVxtEQJmfuDuPDENUuBkttTWwd6yRgCb2X",
  "key4": "2KpaPpcvk47cB2RgHffDP2wGTWZTCLSLCCoTo7j6pca8nHSRjE3Riq4MXq8mWbn3oYMNQuWNcPQjZhhU7HXJQmCy",
  "key5": "3bd2mHTGxNu8Zr6hhawZuGheMmcEoB4TT9ZYYg2BLbExA4QD7puPkM9kkArddQYkaHwpkJz2A416JMxhwqxHKm3A",
  "key6": "yH3H98GXqmTRXcdfKLpiphpKahjc45zrsS93iko9Cfybu6ZigEfKQBJLaoH8THTQDveRPGwtHaJynVZiWFcnoY6",
  "key7": "KYjbZrpja8ugRbtZ9d8kWAGXKdKAa1oweXFZVPAZE593PQowS5KMwqLq2RcFvge4oz6DfT2D2SCRLVaojkYM4Us",
  "key8": "3MCkXvzC7ucb9eNRoWWp6KV1H8peg1R7TEMHm4NHGCBnfAufiAWrZH37bouJRqHnxpGu4wM9zE9BjDNakQbPZEFV",
  "key9": "2BdK3wyJtw5hDKXj6pjAUtxBQdupKwHzmfQgwPcydC7tSXFKWvRMJELzJKDGRFgBSoPpqiWDG75ZJVnTS4ipe3uB",
  "key10": "3khrx61Q3b2JW6VfR1iW62hWmq8MtiVRd7YjtonTmPFnRuuXF7D5sit3iQ59RXR94eWUqmig3REfJ8rTLpPRHjCr",
  "key11": "TcCZhyiVBZi6qv8KWKa6TCA3oC16QKtwQvwUZeXpMTyuWmeimxMsH8q2cuQLTG8iTeayfEFJqZpTq7TR6SyFk4Z",
  "key12": "3nkM2m8cWFk51QnRPkkt3HbtYF8prtHyAAyVfGvmonUawtjxwNLwuGSSksBCW9ntoJ1uCy9AjfQBnZEp6sT5CN6J",
  "key13": "2x52r6N6G4t1TbeVBKA251vVr6nCv67p3iM6ypehpkgKY9pxGV9aPf26bfSQKnmS3cdUeA22LpFpDusK3rMfFyyT",
  "key14": "66Zkm6KSwUkZvkFZRNf5gd5QgM8c8GU8E1wUExHSTSVVwi3umK99xQ3thCxHLr8ruzwGMdLxKrLbVqfHUYfW12rt",
  "key15": "3B6f85xepxJJyLQpHoyV8QkoW2tnmwL5GUF3s317uky8t2Jd2Epr1qmEEoLu6epfS4R8Sfse7oGpVrVUTzfGze9P",
  "key16": "2xirSetwVVLiVvpzjfxwfez6MeqqPZXsNM4W8zj3aecAwDpXJusazBmfvt1e2n6aCqJspmRFnxvaayRn9cdyPXMH",
  "key17": "42Jg6XTjyuv7CgyVbcMQ6i7r32yK3AmoJbRXvcGgxX7gxWVzjauWohARX2xMVAdEFjsWHyeMce2nskJ7n6tBzNjP",
  "key18": "4MjJpZJ1JCUTenPQRwuBPVVetRAVjEvPXebtRhqMEwKHiujiJxUaYwE8qeyts4u5Mk2vYMKZ3T1KEJPaXtT1CLVE",
  "key19": "4XGwRB263AvSeY6Jmq3Sa9JwhAUArLhvY89gxmbcF9BArvbMP7bwwrkepuYRgzAjd57uFkRPMihgYzUQ9kddzBHZ",
  "key20": "37xm7hqEimkdjw21Eq8FFxkfrmrQhfRVAogkHR7ZGSBPyY8oY976Qc5CSixYRZo77fYMqMzDQd2uQ1gE21F6zM9W",
  "key21": "3ruaaMtLbFBPgSaSz7VLLrY2Ni9nAsoLeBhjoFsKx5MDrfoa6aSeGKqZr6hvxbH7Y89jmhSBmFCiiu4EJDNvepBG",
  "key22": "3no18kwvJZamqKhdFhbpVF8mYAbUpBLNWo2BScxf1Lv8exstULt4RMsA7YvdskMRFU9A3oeWCgRtkxLSaE5rrE2W",
  "key23": "5LFTtvRPh7DTtjTdbNEfGMNDCRTXc1XDefEzjFokWSsBgdiV6E4DhuJtNphKqQm9Djw25sT4pF1ggasmQy5BNPRJ",
  "key24": "2sPPtzj8UUs8hb3bvHQDz68RGnubbGXruT7ajTDUW5CTexNHQ4rhTuVQv8wLSvxmog8zcuBGFLt1vJiZK2sTUAiH",
  "key25": "4WweVZu3azqFDuWzkXbXKG89aYVJU2SeFyBbjrupz6JJBXssqjJkYqYJWsSQWo6GZDRbLzwEFX3hxSJSyzKgmFeB",
  "key26": "CJYoyT8zJfoVdvhf3tjEKDzQ1uvC74tbBufiqcrpS6X2FE9oa9aHAfQKTFApyg8TttCN41VFE6UTwVyEAR5pvFa",
  "key27": "2Y3mvBt52GwyEYnpaTRrwuu1hr9qvEn5rY8Zvpu8r2GhmPjuKVTATKbzrpW1caXmYP9kx15PfPnppo2GGiHUYEdF",
  "key28": "411E9w6DCPNA1QGFdjAYkLsmQoboui5zaDJHrbiskJLoaXdnJrkuNW3pFRLVesiXFHEy2beh9SjGRsuS3qH3VRRg",
  "key29": "5EzDtix7RdXsSft3aP3LZp68ar8ThjuuCYkuZqTnDy9dXKdEUUhSixf72ACrSSm1ZetSEjtBswGTQXZR7UFCp5UX"
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

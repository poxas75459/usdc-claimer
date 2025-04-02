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
    "3MAuy3WoYLfcM9hZa8j2QfsHGHtxzLUaM4Hz8hKw6SQznE1YAio2FKrp5jkXg5hy3k4UDKQTR6ttpTXU3k31Zgz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UCp5hRXGsNqWdLbM3rLibkRaMmLqueiEo3wU4KmS55BerJeHyzqdo4pvczGR33jgZQ6wNE11jTwCxLRuJKZEEqk",
  "key1": "2r1gaztt6PiqANPkSz7Wca7Ue6Cfiu6X7xhMvQy4gXQz5JA2VhZpTLWypeDKHFE6UBp5Wk9A5gNY52AFKT3tYtKH",
  "key2": "PYJ2tJxSXcGyCV1MBnMwhD5hdZmTL2mR4ZzyH1Yz1oErSjnL8NDXAva38qUTKV5QQBnKU6QpjzQXUNmRLFj4BaM",
  "key3": "3Rme6uppkkmaQybYCCCDVoxu4DUzVLyUpjvY29aiFW9wfMuTh9Axx9Tyqz3vdSijU9LBAjrFLr8gwsB77ffm3aia",
  "key4": "3pmPXTBrucX9UyWAwiXaMFhsndC7x5VUZHyxpCYxB3vu923GgJ7Z8diprTM9YF68xFYwqdrazfjo7HmmicENvbjA",
  "key5": "3fw1oaWmVcuotcgNECfqLqkkU5USCmSX5uChvthBg8S3KXhAuJr9c3fNREi164tJsaaKE8JKfbiC1Ktd4FcU8TD9",
  "key6": "2XkHBhHTCW37efChrRvw3H6kmrRwWeQzjKwnaSUkwwu4pYyyX9Nxa8PYWiDsXnZBNveFn4gChYUVMQthqHzdvmc",
  "key7": "6RpmmyRjEm3MmBnpKonaCNAB5cp1HEHBHaDFb5F8hJqwjJVThyKEQ8FPBNndYF5YDqAm6sTYovSGdkfiMe6rWZ3",
  "key8": "47HSmeo34rWhgXDv8qxJ9fSGGLR768rnQ5ZrNYcRUQjDmE5Er6XbJLbHYRPcdqqxtCAGeFJtfU1RZsPoUHt83YZh",
  "key9": "43CBz3ErzL3C4zpQojJcTgwGY4dhvXtCf9jJDefQYcf4oqe15W5WJXbdXxCHp3SgW78ZfhZViMg6N8dfx7N3vzbs",
  "key10": "963r4cctUTTQZPF7QuYRKm4kpn6eu43AJGaMD8mzkEXqKdCsgPer4tsQ9tdD9ZhXzdKbYeB28EiR1ZwyQRcYFSH",
  "key11": "33DibkwfdKR6cnatpFkpib8UrxfT1mhebEtHe63FA6hEWs4jsqTK2cqXm3YNKGPyBjE1CbZAdVPeXyiTNEsa4Lt6",
  "key12": "UuLBYF1U1ngpL6eaFjt9xGZ8TunK15upKd1CqzYuQcKQasB5y8HWtTHXAEFwM4KLaxu3u41Sr4k8PsLDo3kG5bh",
  "key13": "4bDwoE9t56qJKsJNsWcgu1K7edp66XQjthgp362fMNnDpbWqHmKGcbpoCgeMhXFex8in6X58tE4cLu9bpjFsdCHS",
  "key14": "37SZ9EsAoTp5hxdnZXDEAV1Tum4LZk71ynMS49EFpWVLj7C38hdBgcvU5sSGqWyv9VLYSsF7zYqpfQRVcBK13wGA",
  "key15": "4UudiK3FJuabFpqXuafdgfSJdDxptAq9nLRqLxmR7rHE4PWoZKdHbZxFXfMZvGaLUPicFFLCpftn6TJF8JBPxMsx",
  "key16": "38dkMaTf3N1rxJJ8s4KQsQJzHWiqpamqZ5zsYnTzJKgdiZCYfxukJdzbEZiBmhWk31XnfxusXH53vaj9y4PBAUWv",
  "key17": "2RYKY8cCcEq69JuUe1jYmjFg5oujnqSRQUTEmxPCEtJrrpjydafKA3BgqsTc9Hi4VJtLFtfu6iD6r3SmwNGUPvhw",
  "key18": "eABR8rE4C8ULwrKesFeJUiuGpWCyvVN4gRU6kBQvyDhr5Fbrve9KGS49BYdx6m7XKS26Gue4aLGgvMig3EU4pKP",
  "key19": "JnRa1fdyCgScJK9f3PNX9z2nMgymRK62cJoYdUniwHr71TKeZCTBt7hqg8H5A5c8U8uQepZTBhV6Kyyg9MshHbi",
  "key20": "5U4rFV4EzisPhgN2qeNvvhanzEs4T8zgdZ5jM6nGCciGoa8bxnyNGc4dj28iTEDbFXeKRxDDXR9K1RVUNqtDHrzX",
  "key21": "KRmD5VkjcM9s83eCs2xwkmfDb8YpUNbPtnA2zEBAr3rimygiv5ByJsrQT7eKPiYSyoyhH8cYQmiMJVFaVr9ShT8",
  "key22": "37nDZwWifmZu8gDzAkMej39XNS7Yb2VfwMg3QhxebgqacPugYaFW7g4U6xcaxzvJtqEpDkreR96sfAFcBbU4A9DJ",
  "key23": "2vk7LZKyLzKFnUuX9S6FvJg3TdVHwV92kD2tYVMa5PGcX3Ue64FstCkLEjtQ3af3NymZgqgpLWg8jrmuMi9BsS8g",
  "key24": "5HbphsE6hMwTt7HmCR7ghsuzVbmjs8g3d51pfMbA2d7r7UYVqqDP3sRk8RyPqHqTaMmucuw12hQtuZzefWnMbDxa",
  "key25": "4VdLaCD3zTM8mQKc3yLoonYNtDWES9Sh5FUkEH9xWkUEcte9eoQKyGA5mGmc4AGhXhnqo2YbBki3gYVwzor2hVp1",
  "key26": "emE5YMgJMZEpwCEEHXqPBVRir56ZUCbxceTtYzS2YsrRYEVNzneynagnxpP3WmpQp5okBywWF4GMEJEi1gAdaDZ",
  "key27": "3qHs7z6jTGZK7eWcNDE8T6cnfQpizsvkn3nhSu8P9EPE44kh5FDsVnjppp5URxyz2evefu2fRR2sWYLnsai72WjT",
  "key28": "2gEVRt33VzRXmyFkZJ29pAk7Sb9X379bcSHd5EZq2SQ6eWW4b78G16UVcwKGWUnmQUBsVpe938tZ71fAKKrcitk9",
  "key29": "4GHXCJSZFNCWhYWdGQ3zY8dpqWcMxvYhiweGTv8EMAGhqRH9tW8prSkus4kBcxdSURhcfoZYwo9n6FynZbR4EeUJ",
  "key30": "Yp1sDoKxFRP8o3reYRGRMK1P9vAGKdrihAJG8N1d9JEYpN18icKqFpdkmMkAvoNg7ZbUBQYkibAK4wyQjFpwxxW",
  "key31": "61dwJZno8Q9bmU3fNXE3sK8iteG8SzvZHZc5vKLcUL9kW3LUFRUEgUPPajxSyorQR8WC3Tmz4S9csJc6iZbkwajn",
  "key32": "2qfHckPQ9ZtY24x7wVQ9U4gMHbg8wj49HXmipEgiKajBafLTpiNG1cEWwda5hKy4DkHm2jZPXrPunSQAKMUjmFJM",
  "key33": "4XTuVF6imwnyvFtZQgDrzL6fqwuKissA2n9YGoQpnMqj4U87J16dDv1jMPQ7kQSczfPmHh3zZoE9RASZRSBYvasc",
  "key34": "3rHHvHNjAfF883VTSqfiwqvVDPfbPvttw95xq1TG3u7oWo1WnEnecCmMjyWGNX3ecYYYVSR3xFffigggApyhFyMM",
  "key35": "4fvsvMc4UBLNSgTDyis9eecW1PfLnrBNBQbcSFD319LZiRxoAYbRUuELnT4esPpogC2HhnfEaLjB7HGEQeRJ4MM8",
  "key36": "3grUFyePFEJQdRr4X3iwzD3fPs9Yz1JpB1xS6sXBHxcHvmWyMQGpAK8ceqBjcGNQUB5GSq7S7KxfpBeAkhFjNSif",
  "key37": "D6UntwqCXvWLLNU9YD7gLr9nwk4j8pzHqn1NnNpxapvYaZ6Knw3XyMZgDVEKARLoXaomzBuWoRoKZ5qL4cvLGJD"
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

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
    "5Rt8T4pr8SBTTZubCPSmi9yub38X3M36bMF6B7x35i4Dz1GaT5La2NBHDj5bRzuNbP9zdChJdsYee3r9jV8gGkM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xVoSmk3HffNnapGGHdUJaf3e4wokPp7Q4Z5snYP1JUbXPmPmrgEe147WSrv3CCtotwpx4rAwAEF9JjMNPRkto3J",
  "key1": "5NodExGpDr173h3rd3JWksy1mWun2oeiNqUHTRtHn2ofG5u1pwVVEs81T4vaXWEcyaqRjhAFSPAQj7qfiqixWqaU",
  "key2": "5843y7Nr82gE4RcsKDSoRux9kjLiuJHDbKEcgz54LRiyqHDEkKQE1Pk9VPAWpm44TgtEj1EgBcjUVSdLmQukuoUA",
  "key3": "5NEhzuTyhxiQD82w4BBuKrfhQQb85xnunMTiSZrCiDByjhsW6KZJ4gaK3sQ4iXjuLQ8dfL9CqbTmh6W6bHPYVZgD",
  "key4": "2uVuRwMvTpcYqmCSseWkJfQMSY4cF1DxLiWkVrfvw2wGKd5KFCfGXdFaKSZRDEP3GjYqzERpv1itfXvjF1TDJQhz",
  "key5": "21yPiznDnVvHRV5QZrB1DyRXVBsYnxWCSvyo2WDiDwp8LXVpZaG1Jap3UXYyX9cfuiLbiVpUsiSPmvaKaarBFsbZ",
  "key6": "2z7HgW8yPydzCw7KemMu86Rdh85ff9doRXGzciU9nXNGyKSjBjq3HKTqkfyX4uW82pN23Eo8tEffgnsaFs2qoT4N",
  "key7": "5bPp1seneEkQdWx6kYJRBWpBCMsJzGuuWupG95Yk72tT6VMoAZWutddZBCn4zowCEBq8Pj6DCFDuC6iczCa7MEeL",
  "key8": "2M72aupBMzxopBAVLusxs7XiNws2vqCcR5Lvix6fgTbpCHaLAZbwNUhm3HpsFs9DYSaYf6qpBRCcLAG1TTkF1Fgk",
  "key9": "4hxtwQeHgK8LwAMGguqaCx9ojpwzLonv1Dkw7ddrJQzebqcS791X5FCTQwANQv1MgLGjTJV94VjfAncTNgYqnxeE",
  "key10": "5i3kZ6TvF8t22btHqLxzHyzBP3AbCpmCe1B3q5E5rDQYaWRuQyPWLBzVCvyF1uCf2WTt1cjLh6U7bcPShGTEYdtu",
  "key11": "4pEzoWkG9odTkBG7ZeCvMw1C6ZmFhBNcEDnEJuemdZ9GPKVjwZytLuw78m7qqoo8oNajEqKUQ8iXDAXsvR5NxFAP",
  "key12": "eSnpcQLqXbNuZm3yb6vWP6ZKJcoDdftUGYS2cr3KHyu51vkHyQ7QSQNgWAiKS8242GxzWiUXQ8QoPCQnMEDJGEp",
  "key13": "21UhBpmiodoHsrob8UpjVSZdYFEFK1mQYoegtVbZu3mnbGc7XQcWY5ELMS3eQta62z5jgkV6ohbDL5QyKxEe3dqr",
  "key14": "175DhiUS65uKWVXxVgSwDgG2iNW1LuncPGuSUzXCQS8x8DL4UbZEmJLvxbC9ZzF1dxFVVUmGqrVHWfQafFXYA5j",
  "key15": "64ZYDkkZTC5NKqo9ih5nWmXQ8TribRM5NeP351Nqx6krKqxXJgSpZw9i1eA2pJL4kgdhGzmLWNVp4r7Q9ThQJjpF",
  "key16": "pecSrMCUVUEi3kuX84VMXXvxDXx37hX4BAa1cFNM44c7dAMuqei6eZ4MmsGtmLBtu4s5C5mKKjnMdJHKSkFSnjm",
  "key17": "5HhEh9rY4N2pXN4NPtNnyJkq7qEFUANCw9ZAG46HSnvqbVhUM9Wnk2mSw2DXsWt7sxFiwBrLCtQyMt8LmkVmLDdj",
  "key18": "5RwMV3YFxecgsDX6r8rGa7uLyqnYEoC4GFYqY7VQnBvCh8uC9EUkx981tp2h3qnXWGZNPZrsnPjjvCa1kisy3SnK",
  "key19": "niWRfBKv6aKETpzRUWrSDxbDhFNH2qFDNkFjX2S9mgBvsMNN8sZUsTdCd7yXNtp18WuQZ21hA4r5LiY7JDbyeVc",
  "key20": "4LcT5iMZhhVV2yMK3FNByv36UcpJoW89uNUX7DzTkmRUwJCs1XUAHuXvDLtHmgdLrrJuToH7ov37fUFu14sKJghM",
  "key21": "4rQuK2d6qYJtoVbEWEhAaS4L1MVXJDGhMM3FwvuscAEuYFvqteqLYJcWE3fR3xiSn9j1rxbyb7aZ2omfHdjJUg89",
  "key22": "hkdSJe8w3GV36tGuAhmdorW68k1HfQuvQyaLR66VFFfpP7Qo2EHRpjzVvsnH6JWkaE2jTipWUxKa9wA5RJ1Ndjo",
  "key23": "5C2ZAaLfhS4eyEcSFapceiVmxKRk7nh2oeubDVVyk3yGoJiXKWVd4VCwXCbxdCwxZduMLd2zFJsS94Pmof9KNbec",
  "key24": "5HRChiNpKMRn7Cvodv39zywjxC7woPhUQxmWbhVNphQAkhHThgoEjWvPurGZqhEQRS4xdzrybbJqjJDbN2ycoDWa",
  "key25": "rCKjEmB24mFsvXnoo7YdEh6ErioEMBtpEKKhdhnx4WrQYhKB2Zv99m5gpgYcVvkdG4Y3wcFKNmVhrhmQ4RRU7km",
  "key26": "5fuavAoNGDsoQ8Dc8py6RyN6BJKRixmtrb5ia6v8jWihahGsaC7Hts2GYzZfhJ6pKXfZCxe5uU5r6YinHPv9Rbh2",
  "key27": "3ndVz4zX3gbA6q9VVi1Fe2sMZQMUB1bCRY9vAdQG9LdwUcqmoQeQot5RqYsJWib97H7w5shtFnDJXKnpE7cPy5ga",
  "key28": "5LfJw5xe7fMg7UWpurUwWt84KbxxDqNnJrTyLaJNxmj6zfLnUFoAWswT6BEcUrxHyo56ryEa98oQ5k7TX4tVwhHf",
  "key29": "4RHm6roeAqEtjod9nTaahcmcSUk93iQWCvG17JbygfH6AjeBfRMBJZ99oN51BdbxWiibeN69hviivXzosqzF4XZK",
  "key30": "29rRtvgUyJjPtP4qUg9CtxBKo5j8ZEyDYnwfDQKwjudZgf9WVwE13hTMjYRRZrG4CKYnUAvxetxta3zua4njArRP",
  "key31": "irvYKpwFaKoyNETyhQwFQkw7x9PKHPhbwbAvEvzuBm2UP6Yqizg9yeLUBnCSk6CN7dujQY47pWzL5ZThaEZ7vcn",
  "key32": "3pj7RzLubvsM1jfVboMmX6kTx5rbYWygADG2iur7Gf5ERujwUqXC5MttTzho2XM7ZvG8Yuy4h99Y5GA1npVCLPtc",
  "key33": "58ti8MwCh4ZJWXAbJ1n2UqwD4NnJxq8LvUesFFYpqmR1meuxPYB5EgZrQ4fDJpSuxZFNMMusvqpxh3FHSEr3MeQS",
  "key34": "3VrtyEaYybbcQ6YfoVqTJC494uHKRPE1akwxWEcuRLwMyktReksKxbJHrmgaTzFJMQSbS4ia6yQFWErQmoW4ZEw7",
  "key35": "4q7pehDMrBGEVkp6j56jDKgERUYoc2dLDWeARsYsDZLU75euAzYqQ6dfzqsFK73CbeJJGonTzbAugEvq6WWP3Smd",
  "key36": "4tRGn6DeFPiRJeRxL1qsoUhw9r38yjkLvzY7hc57amx7tpKTzMb1CSAsLwMTSyvmtCpaoHLMN5mLKGCTJeQu4KyE",
  "key37": "3E68KGngLuGquJ3mWV5U9Cy76Dpb8QRnVZu4fWCYfRGZAEUq2nVmhvBGiqn7Qnx1egER7aDPwmbaexyRvDCPNRen",
  "key38": "23LjVcNMf7PJmjGZcwJLgCtTBXafKwExaPbM9mhNqzM2oFp3heQNxNxYmPCMY9MVbbNByEFgdj4nqS2mLXyFiW7D",
  "key39": "41i5pJyxPRbHoy5P5wpUNfZ9w5P3trkvQNKv81XBn7MLuvomzvprvnrt7BqQwAjhKy8zEinYW71sqH8rynV5vEk6",
  "key40": "5Y9UduqZRLejbzbF3atF9ExFcitRYrw6oBLnLmTubJgQ8SyPuDQ9SfM4ozTGwAQvbRbPydGM4GD8Uvz4euWdz7bM",
  "key41": "3cP4TRHwGf1kEG7aFhXQyD47DzB7qyEtCshKm2snk1v71w18aXuFTGxqqA3vHFrMihRDTyRRdGE3KhRWbBiPggYj"
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

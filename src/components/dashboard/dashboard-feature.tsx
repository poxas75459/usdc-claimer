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
    "2MMGFgL7XqbQWCejBWuPGKzjYF5681x1d48ummewxUaJJU4PVvyDZk7vHsWaUBwhxKtSzmxnthyGQBaHJaaJoEXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QmjRrfirpuanUCAuakuacm9dfFahcL7fsKBmjN67Trgk8cfshrFWQYS8ihJbkWbSm2Eqq57tGLTMk4h7jRDPJv5",
  "key1": "4gtiwzP87SN3GqEHNh46GF4kwNdYxXhtAzzyAM1Zbd251e9xz6nBG5uz22ngidW9QmcJxoxSQ92VPKJ9evH9yWJM",
  "key2": "39Ag8DYpQEfy4E892eEoLgmoHTuJLyPsC9kZY89ZzXhTrkj2CgkKNxfSHkJ2qLPnxSPAaGnuQEiGYYChUqPLmSm5",
  "key3": "4xmQCSPrDKemYnKg15S1iD8pZGQEX5ykan2Fbkai9RLLEKjZoMmA5e65ghvhe7cSNNRmPHox3tPuFBR19J2AVeVs",
  "key4": "3q8JD8yX7Hc8omPwsF5WiLyMpoHdxC6TRGBi9hB8VJNLmz5faSuKCUEGEYodKoLZh3QnYdGi2P2mpmB5SCKad9U9",
  "key5": "3vPe7dWjRaywQmgyoc7PsLaCRw7o8hVBDtMgbshSSaJqmLyeHJjYLFT69e7Hcu9t9GkgJ4H3nFAV4FgNiEWo429S",
  "key6": "tCLiSQVYjB3PAwpxnq9XUUUm5RUVsFgdteQHopbsT5Rj6Ha2FTTzC1iQNDX85iuJpf7L7vsp2gSUq1UgKo4XkZm",
  "key7": "kiBkyzLoEYue6wC2wQcMzUK16oGS3bvgUKmW9G9R3zB5muGNKbzdZVXei1B1dPoV9gAtdjfbtjXQzUZmz4GfHuT",
  "key8": "4QfNHFBGcK4Qd9zCmQFDugvbDdfpxLnm29suxHqBpKecW2s36WjkBMMQPrPHSCH7WwEuJjuyGXR1utmqLZUCLoov",
  "key9": "2XE7cLJkToqkZqSYdR9rkDrjwKNWULPzsZPyA29WtkQPJWMsjJG3KTAFVW93YLDJ5sUamv9TUsaUEKAkKN4UQs39",
  "key10": "vCEuoMhyguiEErCdAgmdmjrDSahJ8TG4yrCeMvxPaZpqk4SLbWQhbAjG5LoJxCaUCwDL2bKGZ6RfGvMqG4b94TN",
  "key11": "2UcDQ1VzJpt3AHCBZEdMSqnUs7PnB4yeUTP4J4UrRFdsNyJmD2CeGMhRqTr8zayx7bQDLHmzXXYnRvks77h5YFcR",
  "key12": "2Z2aYj9zKJqB24C4dtK1Gz5nqQNTT9Kpp3AxMUgyrCG76nYkjcfWrDkKMW4m4Y95iVcs2VcB7r9BrqwDMXMHaFts",
  "key13": "2oZGH4eWt6YESCkXzVg77KDu5wNFLxU24DD4RJ77nqVMgrrKptoZRC569vBC9Rc9qAEWmPnu8TNHyrxkdup7KGkC",
  "key14": "2Ejyt1RusmgEJrMjYxMQs8AtDScNCVoJydmMkqLEjoHCqT34h1CWw5iYeA84gsrTMN6F42fZY3d2T7YfgjSFFJw4",
  "key15": "5DRZ8YN2paCYCsdWZVKABT94s2RBMoewte13Hpk4pbUPpVDnSwxUC7P13DmUNkPCQxi3bNRkYs1ZWmzLzUk2Wu9w",
  "key16": "5koVxuKwR2yhNBDdGR2BUiTqpWtcXUZ2ddCSE8mBcBM9fc6VXXWjUFAG4B1c7ux8X5FKTaf8MrBSyCipDPSRTL5C",
  "key17": "3en67sZQxTPCoLiWrMuzo5F1UQmu8PXth8ysSEumTaHMo21rfVBYFFFfTsWdRr6CN3HkCFZNwu2p765amZsvb4qE",
  "key18": "4XW3AQX8UF7aKiGEjXirsY7Rd6dS39Xg3ZgneNiMRsjbJCLqWvRbdhrfwjdEi1ccokTmiuGTCsjvcnXPY1JMJJs8",
  "key19": "4YaJv3L8qBBUihWPMjt1WSA4XhSvqsnU1BnxSSTtrpoz6aYdfiMAmTzKTPecJ6jr8pWmqMknmcF2VFHHspQbnX7B",
  "key20": "zA3K8QbGSR5iS1KbP6cMo8w6fp22PCJF9nf9rC9dLhuN3vcWr7bDD8W9jAKgZy7F7QdHnWZSygrHBQbZULmecZ8",
  "key21": "4Wf6GoSHvgtdxdPsQV1Q6vUaEoR3ivhKgwdQEzyT83JhWjNgXGKrdGpzGrsfXXNigqsuwSLRMzJ8eWQz654RZcng",
  "key22": "5nnNgpKeNtpadR9xeDJPLcUPSCSzzWuTVBDXx94u1QYSYRdw2nCCyhooUu6CAPVJwC8S7ZAgFx5Jya1KX4zP1yCe",
  "key23": "5Bonn8WnZkV9So5viWWr6hdqe9m3Qt6buL8PoqsgKfQwxpFaR6ieqBCQstHEKsREuxhw4NS7LYH9AyKerRnjsKDB",
  "key24": "2Eu18MaJtL1v6YZvL1RHqwQuTUodYbDeeKikyeaCz84C3VCL8okLfXnXgEibpQKRxX2BGMQ3chWzxQYAfsmzZvCN",
  "key25": "5E9TBgDBpv1mz9tzoDkk9UX9Pm4TeFZYkNsW43LaGsQv2j2TAEiAmcWgiZT3FzfEc9ZqYJB5fQk77EBzCLdHT2BF",
  "key26": "2f1UzK6a6hTjbKiAZsxJH8fnn7EYJmXXG8U9eS1DxMb2F6f2XSzUVf9RmJ4QerGYDziCWR3GC2PExMUetLZpPtiM",
  "key27": "5zeXnmz2SskpWgcCSMciRMg2aXfqpaj4N5trvar3khZaJHf6ZWGNyD1JJAnBJ5gfXa1sCqrrPcHWyxTD387SPokW",
  "key28": "495ntTn9beQyv62YuPxoWvMTJFJCzny2rjHAjnN63f9TJo3wragmsLGUNDjtLFt4KhwPcRxNN5458ZSnSdZAT7Gm",
  "key29": "2rjU1b6jE156kqWsPgdaADZCmFzD2q7XvVfPnoLC7TbD4PJbUkrcJbMNYyQ4NnWj1HpVsizATjSJdcAsvPgeVJFX",
  "key30": "3ytkAEh94MDwnSHJ3RqmofoUxMkk3YUC7m7qxxpRMeqyotSndvtv9XWxVp82Nwo21sSD1cnCZNXEqSzL7hjt3P7u",
  "key31": "51CqeqV5Fan2FbqpoXmfzxNQbxKQiqCLVAqZJJYA8PZQVwVdSw4eL8Jxacfx799W3sHTBSPtWqj5Gy2EzRCW1KuE",
  "key32": "4eN6Sga6SBYZMRY95kZbqH2ZEuQFU9hWJyKxzuhdig8BSgtRsNeaYQcnCryg3FaSFzwfXfpfJ281Rw4uri2VvTqY",
  "key33": "4vE3SANj3yiXaWwWJRwAwPZHLSNiDGEVok9W8NbL6HtdsMe9ue4FHw272qMsf6ostFrnGPfZoRbq5Y5PEe3CaEw9",
  "key34": "56qD5P7Z68cddKjE7ZZy75B5hVAvh83qwgtGtXcoFaPjEZfT38oXWMSyGCa4CJZgeSJRpupjB5kCmpe6DHZV4YFS",
  "key35": "2NZJFnukCgH3EVRPjN1K31CTRWCxhEMuYVyLqS1W8by5Uh7U4XMfzgGXazHBKNN8EEtm26fyosKrWytJr4jsJwck",
  "key36": "TvAVRQnwhm26bqNLykod5g4LtxNsnQUPbcb8mcpFxGVt6RC6n1XLdXNTQESC9fiUVyPnGzYdit9x1pQgbaSb7se",
  "key37": "2oFZc7frnt141g9DYas2zzt5GsbZJxdF6uxWVnghrcj9DF1evKAPwjbc3hX2x5wKBsphsuZyNnNr73NVyySuZpww",
  "key38": "4gjA2WHYk2qYeBHKADMuhMC6Qk7aiGS9TPv8Dqg5gnMU9K18vrHgrLKi8kQ2DeFjBjrYrDBjmvQFbMYknegVJJvt",
  "key39": "4qnHoY2kvhPzYc6BkJDRJuVH39NETLJduoYdtStWvEPTSL1h25nZqUXhCSKp3MQuHtAym6h1mYyzSknp6PTtZvdJ",
  "key40": "3RxYPLzzxvWf94G48xvRWWcQ3LGF7d5mdiZSQQVEncyNN8zpYqJFCPBqwU6xRKKrsk34JaW7dvyeNCGTynUcKUTT",
  "key41": "4aoLwvyWtYuHhwZ9iamvVuVp9tCeArXJbKnefY3c7t8JUZzzzbNjMz3oL8Xn2Rzn2saBdSX5KjZ7qaqFfghXFqu2"
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

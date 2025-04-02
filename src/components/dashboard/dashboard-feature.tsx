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
    "NdnCZ7YSm7sPCYa7bGg9UsjRtD9PkHoD5jxx5jAia2CPdwHsGvZJ8WwF8dNDD6WSL4FqvQtnJn82xhqPp9PFczP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z3U9JSKRurtYLUMrEzR8EPFTRm5kXELsz3L68aR4ZNTpaTGSnGaTMvcbYLCEAgP1yiSB6dgX4VZ2fmaDzXV7Har",
  "key1": "5kWzytZdXMDf8L6k8bJinWyj5Gtos6RgEKcrbjZP8H4FzqkqFcqwDUzY3nzK8Rami26LjzZzDEZw8DDiYTWoLKi5",
  "key2": "2foTvBPjWCUk3zwhWbgdB2XBf6Kfz1AzKxER6wtkjo9YYZjfxJ1yrbt4uvJkbKEbE7WAbG3HBn7q8Mwch3NH6RLD",
  "key3": "4SqmNS4DtSwgEGoSSGRaXJw5cT4LzLmyDT8Vhf5DqVLZbgomyPbeJ4ggWA86PHcvoNbbfJVymmwSnFi4XPE1PuDY",
  "key4": "2CDLtojD7aVnY343jSWaKw5hGMZsCrCG1iPzX2ShwuCmSdW2ar3KPKXhBY53AyVtxX7bx7N2NBcjqAwEHteD6fTg",
  "key5": "3PxoXUkhgFkXZtgHtT4JZMTbxC2xGSNiyQYdLUfcF5GSWWN9YnixhQUTApb2Mwkd8aSf1WQEZaugGyJVJQv4UFtA",
  "key6": "eSd8wrND135gMQUjJeXPCvfd6EA8niHSA3P9WdYZThBpyT5zJX2Mufn2sN4ekh5wuX653NVE5mgY3xs9m7e4f2e",
  "key7": "rMsbq9jqJF6MKH5NF6yA9DhVez3oM8Jan6v8sZSjX4Y4EGQQVMqYQtz71iCXiQ8vkezNq1u6nYPuWEks31N6Zap",
  "key8": "Un5yfu69Bq8XMK6SfEiPdv8Djupo2eVA2LMHy7828JEAhFwUWufuLLXt9NHf61f5KDpJ3guUBpNdyDTxBobEU4R",
  "key9": "5Pxxoh8n1N54XqUNZW1uJ22JCh19eGcRERGbnWVFU3Dp1Sz1vL73Cp2WDSywQYq8y6HCWtMJrLgwNoiCZpHqzcYG",
  "key10": "skzrx1uwYkgSV4spjK1J1u153gTuHCttU7TenzRRVXMQdF2uWzq2iABsXaVHzZBjTrZdaEQ7e4zSVYrWWnZrzWk",
  "key11": "nGcrwNjTc2ocdd4xNVpKDBU8hrHFAGHG6NiG5TShBP9LwLY4DoYQ8knSkQxQVMvGzL5y5ZZstwF8k2iLz8NtwYj",
  "key12": "3SqusXGwWbtFK2Z6hQgfxGuNLGbqpkrtQP1m4LjCd4rDZ4a6Nd3VvrpkUQiuKNjz8ZUWKcec3SwfvJhhHNckZnRu",
  "key13": "39WNsSiLTrCcWL2PV8i5cejcEaxo5MNXq6DkbhPTZTJaPKdin2jrDkTeNs6dLxYbrhgbtNDw6JXzvkVCtm3mHppn",
  "key14": "5NpxN9Mc1zMgbjcbddWwxS639YbSrPcjjaaHK442DymiXBHJ3EesJe3QjxbF2fpR6NZwq88qpVMB43Ne4QvL7Vzk",
  "key15": "4BS1NKkKx5wyjqeuxwR6yZxorBdpF68dRJ5Sh5QgrKZej38wS6DRe7jTDPvABLtmYe6ecXQYWp87Wg5vsgCozabs",
  "key16": "byFQB1pXRB9NddXfAQCfZo4osidHDAfsKEKmeag9eAba89o75tBoxCtyPZ5371fv82qW4SEW3gMuruvHnP18Tg9",
  "key17": "d75PWRgQnDDvYdGwqhsTXyumVvDgAfy4eXUibwqn4vQNPpaUjooqcbgXWF2SS4vYA9xcX8th8mV1YgSRfjeUB23",
  "key18": "41VRcyXgkMGXUuszXzL8jH2ExiGHHL4gfHEMk8x5EEpv1Hj9AYobrqETjCzbnXZG1Jc4gmiQXDdFN2SebNmuz2DJ",
  "key19": "5AZ1UgweC2AKBVxLK7758sK9QeeB7LPPkmEwXi1EpYku7p5y8Kn1mcG9fr57ntwyH5qrwxfJ2ZQAkRLXM3rECDDu",
  "key20": "52E91f4GurjQ7PsmKeNzAozkwVQaYrGp94eNZiLBD64QESxpiezJN8RPxNs6f2NMgLiEVSqyjFnPuYFDFd1KPrGP",
  "key21": "gyP7qbSWNvPxiVnCkvhydh3hCqzkujV6voFHF7y3Q1yFLytFDa2Nq1ijPSuvgzgLX9buLQknsULFmv4TZ73H8pn",
  "key22": "bFxgbU2NUY9uk288tks7y8LwZgi8mTQPEB1ti2EGDuEcAtPCqYz2AnownmHgeqFLer6hL5ZKbLJM97z9GiU9TuH",
  "key23": "PBL26UC3v8TUFp14P7eX2cyy263BSoeyTZkL9yes8fkn8sKEREq6TAjmTHvZbFN3gKgRHaEUmQSCiUL3dPkFjrG",
  "key24": "YcieYJVHzvtjGJXz7yVxoAfJaNunL57zFhLTCFwFsy9voKx1FrPBeocBGZKEXUY8xz7FnS9g7Pat19ZPDKVNaky",
  "key25": "3STkKwnnah4LV33KkpKojZCFqo7vseLgmu8h9LawGJKu7QVeQ38SqLPDJvE6hXYVNCmkNpWcmQhokLSHGbG63WWg",
  "key26": "5aP4M1xJpfmNEVCSdT9vPZLiMDCvvzrHJ3dqSwYzYuWwpN1EQea77Euny9WtgfWVHWtytromYWYvhuR8NPi8ffLZ",
  "key27": "UzAEmLxMxoGvEU3DDNsmcDinjRNBWwsHApTXV4MzCzcEF3jzbzkYfPRa62st8D6Rp1MEaqJPKxmhMeo2hAmbWuc",
  "key28": "31HpzwcXE1a5CSnz7yQYcwbNZME5REC5D3miKDXMgP9FLJBvsjDgfDDaJWXgim4pb5fVpAZngyPh8jyy57okSSSt",
  "key29": "3U2QpHCHxqtiHncvjMZPmhpuGi15r7wywi8rb7sLYHs4AQ3xDPSkfbtxJuk93XDjxKqU3HF8GNzQB3QQzr2bCa54",
  "key30": "3tkmATCWWeBkcva4ezTjCpRkXuTr3fjEcyHJQpCo9r97sLZmD1hk1QPQGxJoXuDsJVJ77DiHiQR1pnfZ3ZrRH2Zt",
  "key31": "3NhZEoAEaYykQqKMJFrLwfXVGRMtoLVpkHLQFkmRYZwBtd5zPuadj7uo36vtSNekDJnavr1DFACFf6rEhcbHZi3m",
  "key32": "2dejLboCobA69hjfQ5PKBbNyoJnYs5eN4h9zt7WepmmsMJvEERzdZ42W48odDEjTuvkBYXii23jEnexYVhDhfGA7",
  "key33": "4yPdDR79s95jDWxCC9VktRAqdL5wXhBJUosoqfLU5KrsenMw1Bt8ZQm2ANoNMecu54K3H1yuhfYBmo4hbxBn9dWb",
  "key34": "4SKpUxhJt9GLpas2UdwrHFG1LUTPodURJ6ACMDnaZrnvU97VKRuuQgrUGsznDu95DarPzLug39GuByJ2aQYTJP42",
  "key35": "4vd8YYeYZVLuMpviVPzLrwRJpHj7F5TopmWxKs49Xvp1uLTd6rova6Pzn7YbRzLT35mz1qtBPeo4VwJT3RH9SxTA"
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

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
    "5BJJ4qSkPMYnHc1bay1CGFKmDwzQsMjrJHyzqzQhzBc6Smchjk56JZ3PHfQ6Yj4A7cLVckpvMhAn8HdxD5vX3ShJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jDRgvKequxjuNav92mm42HXBvNR2nQUvGQETAR8jP4xn3auv6CdGgUuEFmbZVEGHY3ci29aH5yrLLnUeGrr7xhF",
  "key1": "5qt7hDmzFoPKs6yYNYHtG7xwsz43SDAee2QvWNLqRBEBLojysrjfXsQoL5Q9GERgMWGyyu14L5bq3jCcoQV37rm5",
  "key2": "4EQqEafPb9Q94orvWJraHu7rET1HNNL8dbXqDDGTLjS54XLCAb4XxcaJ9YerwECgMkDei558LsMSMAMtDtT48qop",
  "key3": "hXM7qmmBc1FRYPLuC9hRwW5NPfrkV1uJ1Tct78xuFhoFLbMkPZujowhsWwcoVg9L8wqKQndKKqR4arKmQML2xJL",
  "key4": "3MAP7h8uNP3uYaokmfm3bejqTDpwgDhC7WWMD96AptzQ3BpfFikUUsyivZXSAWqVeSzRHaZZwWmcwz9pgvdjQWL4",
  "key5": "3brpCugbZyLM3vGq4ymaJGRmYbPUfKycSfdCi4AZkKiG93tgy2vWes2ZaVxQjQ2EcapF9CH22aiYKo5k5wGaqh5Z",
  "key6": "2cARr226jigRBrbHQwVofvWpuuFKRuk25P8W3aNrKeXXEkZxHF4KFdxjhbojk4pKHW2qb4gy6bx3GCp1rCDkP43U",
  "key7": "2WETxFDPcjLwGFMfdMhk82wt5xYygqvRMfUAytoTyYnfLF8MG7v9coaefSgD4nLhRqX1hdY2CeQv4LTV9DkxgMt2",
  "key8": "46ausyAcwX3TBSJFqkfFtk9vdfKcVNx2qPfDmnkShoFLTYcULHV8wBXYj882bnVPXVfuQmB9Ysmdkte7EMLpf8eG",
  "key9": "2pxbbvWgXYzcNXBEUjauZdNDo1meLkwpWYAbbjLAmZqYa3CVvBfyVXpnvEJ5NVzmHcHoTSSUbv8RjCvYs1ym6dp4",
  "key10": "3kNqtNiQiwaMLGfFUDRWvNSQ3jsbDPEQ1oJunnS5ffQJzCyq9PRZ59AQvTwkWKYvpm9zQqELmnVY1XESaAdRoxiH",
  "key11": "3z2zxFiY8yXiuapPKNxK6D2yw9JHGKdQQeuuNEEKmi4QuAUpvEhPkXhka7LuEsHSzktVV3KptSMaZBCcVUzsX9dV",
  "key12": "4Y9ehvNcWU6H1LyTBovy5Fwgi99myZ7jyDfRBVAPcxFvAyYecVUsXqoiSscZ241xFH2vnxQQK3AzdMgQJWcrTyCR",
  "key13": "5EMHGCmtk3HMzLPW1rso51PCHUUbNm7sJvpSTGg9Yq7FwtdNR9LGAm8UZwkpsiSMRq8nTXo4qT1SVDJbgB5c7392",
  "key14": "4Q3j9MWh38iJybmANDbBtNEVop869gsHoa72MMdBP54E6ETSLha4PuKDT5FQ1DiY5tvfAiqLrQmjaqrCxZB3GDoP",
  "key15": "2THS7nSqSiNJWGe7GXFFjymk7sJqzimwoP4irZdyeeCu2FY7zs4eW5vE4LNLWPmqzfhJjia9zdHr6apsEJfhQ8dV",
  "key16": "5MDXSGqu9wBbYcPQFnbWNXLuZLExMukGwTNCf47vwqW6PzQDXHTHHxqzzfe19KF51HwSqJiCk8JucFCAw8LfrWva",
  "key17": "2ShTVgrxZJx3fGrMYUfKgj7uX3SXkLg4EEaTB97SmUrN44wi1LkiRo3t4SUdQTz5GKk67K6X8GRKQJVySEJmjqjz",
  "key18": "369t7wsovaDeAkMr3o5WNaSFzRS52dc2T4q4EBcYKi6EggnxRE19jgBGtDzypZRkufv3Sw847qQVv8kuCThEDEhj",
  "key19": "3RR4uvzicMeou9aNpJdaiY4mACAL7ZY2YDPRym8LxtmGdp6xwdFeQqh4CLc7jEnP7e1xWFtA8NwmWBTHDvzXyon8",
  "key20": "2hNYkuWaFQMQASxAmYMSXPCw8y8WxqZGsSciVYi6n18LrHBtPvsU28jBXpkf5NzBbCotGbCXyuNEwDB3pWw7z6qT",
  "key21": "943yJMfsLUKbX9cHPt27iFTUcUi3DN79KbknxsbJiWmPJT5XM8pQVr8P2LFLuVaZErcL7gJvKiXg3N384sjBogw",
  "key22": "2YytKjhyiFiE9TFpAWyr4njxBqDCLgb9TFQQDs8YgDcGypyqJXTLhE4UJW4EDvvz2NA2gEzTMw6EuCucbA9RMoGc",
  "key23": "43HFAGZKnhotFNCkqKGhUQGbZH7rzAWR7RATugZGe4W1zKrQiEpm7KpbGfqR5rQXdTW8JnBUz97AJJ1DrfrFqp68",
  "key24": "2a9eKuPjYmWZprHPwEoyDUzoBnRtqQYEUBz3BFTiwL435UbcvPTXcSSUyucYdcxiuaQSP9gEqsPgPPD7oZc8fQvy",
  "key25": "2GjP4JGPsLZE47nq9zN6gRjmdCWR898jHbt7u3AnuW6Tj7ijvKd1H9KYpEz97KAw9EWgds3LBRidq2XHAdDaFvgd",
  "key26": "54jr9DXGSpiZZPvUm9NSsFyuHSMmWesuvQgynQcQdKxQPuJBUJkZEDq7mX686cZkvG2vgVYx1sMcir7npTP4WYaD",
  "key27": "Q69gzPseKSytxzbY6JP9dXshS33oCLK7GHijngaezMmnUbsM7evFm2mFXEGKmjFSYVZFRZ941PvGiGj12EzW4y6",
  "key28": "aV8dn58yTXSyzbK8oTDuRRk5Rmj2BzCA4KK9m5TfSiNjMES8JjbH9uMKZEKe1e9AEeG3StAFCYkxDTSJmd2dEuH",
  "key29": "bTZL9ceC85gnB7Mqvq6kexUviGQFWevuudNch6knzBn64A7CmMH9QmSFf7acKbJaF49LzLTUKm6XYBfxsfP3ACe",
  "key30": "5nS6eLN2AAZwQAZsS7n4eBNkgcFDgkZc9EZ21N28KexqU2btWZxxMZxmNbTBS3cuy1G2gFS2oCFGVVdzL2J81fmJ",
  "key31": "4RDKpnTLZpoJGaUuMqpMnMusURLfGphsaSnXWjXdHvGTQfXoHFPQdewCwaAP1aE2UN3yqqFaz9un23CmcBPSGh2y",
  "key32": "576y1CprFxgJtWLg5cWCMPHjpDaFC9SDtFQL2dXkpkRd8H1EGMyeGWDVGuGe7cD6cXT75Dmi95PVSYmNiz9o8sfJ",
  "key33": "5fZTQnc1zAy1q7QDty7RLfyMApDQfkiSe4iSxfuhAMAtexLQ77evT1xQwGe6QoNCvWvfvcaWmPoYcg1GwTrsZYdu",
  "key34": "35gLTWBsNvNvb52VAWZtVsokFkP8rzHdZmeTnmk8iiCWPvZn54ghcCRD9sYQ95MJYJv3UmhwBeqJfudVb91dZNHV",
  "key35": "39iG2CoyQEKQu642QzVjhkTBoHjjF4CN8kMVPeqdXy62DRsquKE5vuf6wTtvAf5xiBsrNiJ5sdWzRGSWeFDkVT3H",
  "key36": "4Yk338CriCqSCH4ZtDqjzbrypD5Ck9Uk69SzHTyqg9u3YACW5SbPAg7q43A8wVgiW8doqHNg4UUvdAanPdnE2ZK8",
  "key37": "4pADUj61m6HAL1qdckuYYD1iuiLknQNddkJuC6NpharCDY7dFuZps44rPqBipxPJQv3vrgFfr1gthudKCZymvtmb"
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

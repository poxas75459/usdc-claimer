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
    "2T1j5oFr2J85JJCsz7Ntd8e8oPp3Pdum6AWYTmQZLj7hSLWseAzoaZbcZ841CuEAhjHi4tgt7xKWXgfJWheCpx1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ozBRXdz4aqgSUFESn8QsyF3PtGaZ5P9Hhth9Ctg3j8txBhVWJNytXXzjHFVSK7GP3rzrr7GbVrcYhD9wHZv1Vh6",
  "key1": "2nmjSNvwrism54geZT7HUo9H1mshghhyoDopXHAyF9T9XnzTaTXXhS4BPNUXxQSs4tCyDZ3VEHQs58G1B3TRCW6D",
  "key2": "3gmMmQoZfApxaWneJ8smCtt1Q8N5iGhQuSvbgwakfmuBSh5DYqotn4FMyKq9Uv4rkWSiAwSHxJCr99P2b6yt3kRi",
  "key3": "gNA9aXTPHrNACB56EwLY3addEEYiTHAxthi25RLgtSgPZMEMyoBEorhYFxMrXa59GzFB8y9bAkAoK8Hozc5aW6A",
  "key4": "4FMFYhux1ej3wJWDoibqpomrwfazdqPKDpENjx81vVE9c3j445Z5HRFdRRoYhsokcj94NA5xdDPjY22CBrgLMxR9",
  "key5": "3XmZroCkiSnLYSbBoKyzvjH2ASdCkVCzPobDW6VyYvyhXpLdRF71Wdj4QhB56VSMBfX6BHB4gEPRDHFaxTmS6qWK",
  "key6": "wGimWiePTTGX8DiM2T9eTCxNWfo7prkXJ6tmpkN24fgg3n2S3gSw6PXGqi9qwg99YXUt5fsumb74LsCmgVxVcVu",
  "key7": "3yMktqUDibEG8dF28TTfUGjdzkENsGoCJRQCZLZE5Ue6cRFX4J4wdLGs6Vbvwr61p8SD7gTRznkKPnvYJVRqSMw1",
  "key8": "Wzv6xJhX9ZYSeojxVTpcvKFneTBE7CJvFF8ZPZ8Gf9k2svQFeGQcRgwbBrtFh7Rg8wvTcvXUN1y2ahCQGQfS2VA",
  "key9": "5SJxF6YCisdWgph45xfF7oA2RHeuuYvKW8QtCsK7Fm8oygrvTsk4Wj8YNAsojWHoWuBU2ig9P8f4XeQd89iQXUqd",
  "key10": "5VUQi82JkgwSNNEX3nauZ3yDe3Wi4KEFfckjxVtrCiyoRYUPNsgs3iMbsMyH7NQa7teGiiHeeEkuy5GGB5PxgvSE",
  "key11": "cHZ1iXfFi9y4WTxPYRGobumqA3sUTcnzWvq3jEJV5DjDuxZBkftUusJppxrspPuCaFtSjoehNDCdPjzPQCZd4L5",
  "key12": "5ryW4mtbRyAMyTxE5mbBJs9Cfta6EHDbpMgqij7UWK27UhPQd1PACL1qbevMByjKAruJGc3iDEdEY9nKymqT3zFg",
  "key13": "3S918c9goYSQEUU1bMHFF7iFVdkPQP8CBwMJKxASfKfVUuTfGhVYJs43prpiL83U4FHsGY2XnpX28ZaM3xo7snfY",
  "key14": "2EaVfvKHH2wTpmsBSYPX2VJW8Rnpy3Ex88Y5k6r3tdwi3Tmh5Lpd2khmRJ5tETKW9GJixHV5ABAnoA6SJpbcjFUF",
  "key15": "3GNz5RmDb6AeZZNV3hYoayoMxTSgrSCZNuwuc65rNSUyiGYh3bX5DoPy3nMm8q8UUWkAC3fREjMPEdC6ZgqPTtU9",
  "key16": "43mWYmCnUaTjDhGNw5j1xJCkCcJZ1PGYENeHUbr1Bbh9DNagFyHXiHbyDiqzcDiTf4cx4855KjfMYuSB6XHozECZ",
  "key17": "5LqUQc1PXEod6pYfaTU4FuyvaGNPKD49oqf4GBbK3QGyYxgh9WeLhYdj3akQaY7ogoEj2Awaara47QipcJALgG9x",
  "key18": "5oXqfGo8dMgZsLyzzz6JDGtEzxq9UghjLErrd7AAtUZc8MpGiHZ9f2b9KuhfV3VgTWA2WreTnQGgLJw6BE75WhUZ",
  "key19": "uD9SWgut5SB2DNmskFLsh2CDw7ew3wxm8dYLuGyksJNKKkMfMZr6HVrTLg7MnZhNtN4tYR5dYNoYKDH3KUUhDwj",
  "key20": "2dZ1WgWEa3nEX5e1jA6Hszz32ybNrrAEiYvE13qZNUuZBu2qS5tFtk9tanZnEdKmE3ZkMi6kwZ5dvnXjkNGCgW1s",
  "key21": "NajzXYdskrMuw6zMnzToyeBxsQGQ1E2FeGsFUEWhBoBVyYJ9EfJkqUAHHbJhoDRwmk3FTtnesJTS1Qokkpp6dwh",
  "key22": "2XZBC5vqBY4nTDmM1QLZ9UemVbdMhZUgy2UrguZAUBxKuEBcmWELVzfqstJXLPYg9kR4pZpbAQ3xbcgRaLvwWf4u",
  "key23": "5agNka5YX5axmoXuHsPbDCb4UCnGyeZuSf4ZscM6ehUaxHRUybtH6HAecvPBzisqGEqQxzjhnfm9wq1v3G85vtwt",
  "key24": "47E8y9ho2Qses8meLQ8o9z3rpZoieF3sYRcgHkEGnw3SXj3rDJ6fhqtSytjAb8sZJyddt5RLhrR5p29JHFjNHnpm",
  "key25": "49tmhXqaSTVLAjhjDKWCHd5tUpYGgqXgZUD2QD6wWhtD71dJ59v67d3m422qgxuFdTbEZAdU1GVKmcMMvvrGDzDC",
  "key26": "isxGtkszAK76hRrWkd9KGn1scy4P6i8N7k2iRZfsZ7Ka3kfzmHaEWGWihdRQCcc4RWZN8DJN552f8ySyoPgNevp",
  "key27": "3PLWsQ6XTAh8fc3k8uiPB5q1Wx9DhcmsNS5UudPrUDniAmACVwVFA7DUJ8Varj7ZSD2WgDp9gvyZY6noncwAnXWi",
  "key28": "4dnJnEvzpGjejtmT4HYxx7MiWZWW8Mzx1Mo6BetpTzhorr52iQ9JiJkCCRpPBcw1u32iKdw526bWaJaz93Ta9Siv",
  "key29": "2UGPJCQ8Bv3Aq7DYk1yS8wEqWv9kADxHY2DTtAQLGRKuqVbBc7zmcVswtFukfC4cZTa532VUcafECDPKV1jxAYQF",
  "key30": "4BFmy13JcW8Kud3h6qQH21oef2rt49hThK39bQZMcdqNA7HA7KzMdLksLdcXTbin3nk4YLR4642kV5NZBJCUFnoj",
  "key31": "4RZpsC5H4KS2idPKC7iXYvehAECNb5uqwovTApNboNwcwk5AQP2UieSVVxVPQh9BxHRNbAJ4GGk3sVZrDYPxJqqq",
  "key32": "rG2y2JZ5JzudvS8pmi5yb7mhj5qfVX8gSydUkyd1GNpvSBs9vAK3rreb4nd6YLcQDz6mrsHx9XAH5VABv3YAgzw",
  "key33": "2QzeDkPG5omnBDpm41HRtWNsptudtrJoGT9MpCrJMb1BUsnBio2hupVyfPLircJZpapL8H2iU4aXzGXLS5juKrwL",
  "key34": "R5DpgYwvm2YPsuCe7B6RzJXnoQ9yzxuCL26X7mKmJNU91p5W4kd36BmLDwp5LVPqeFYoCNVYwUdyoTXTWtPp6hh",
  "key35": "4XMeE9FujpUW7gc3rEEnSADtXCRr1PJsb389WhTyybGYLUmK92GsGwL3ugXXxzYzeaM1Ncc4oygUMGzUpda6oHeq",
  "key36": "dXH39jRp5ESJCW9PNmejzstQkgc2W3KekJWfHjGxdjD7d3TFG3SffRVCA36aCSpC5qhjKfE2Cwab3qJ3HzhL7Tu",
  "key37": "5nXZfDDsPiBebpB2Q48whtpxYYwopC7gxTxDSMLpRQMt5cMJDqiPxMgFFvrmk3GKf2oHymsKVtNrURJXjNKjVeGv",
  "key38": "4BcgyBy1BaqnqKCNJygfBb1eWfGz3rztFaefjyZLY3V6nao7huHDk4FnW5aEFFvTzwo9huuKD1vKAKxSp3j5rzDd",
  "key39": "PDRzfML2q6CBW7RPuf4qwN19ixtg4tmUCF7MwPtechWqBrEErbCUAZSHAhLWtLsxpwJnivWCQ5wjQCgWVkpPC2y",
  "key40": "dPx18gGiyNG2Bf6PgD9rEjUYtNaVxoyRPcoaxuqaieSSFxJzunpdj4Gj7E9s7V3Jhq2rb4yHdtz2X2ihJ9vB7Tn"
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

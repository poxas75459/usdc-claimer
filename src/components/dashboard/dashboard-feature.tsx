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
    "4XCL1Z6n8e3XYxdQYP2osnrVwrJSwDmFGSPypgAPTdJ9Fxqfimbqx8pCpXETtbFtQkjCo629g6B8KAsWTJkfeiSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cS8qjdSnW2xanBjT57E7T8H1KaKrKCPn2VXJ6YF3apSYK3hHieRDLEZt1LkpiNLcwVkvQvvXAX3dsAyzJz3Kb3i",
  "key1": "3whfBgq7tfXuYPv3VGWP4v4VA6EKAvkpZmbNxNaXcuJtFQ53KQAUrnFLLQo9QiZ7xK54LZQ6m5nn3bMJchhvtz1y",
  "key2": "2y3X72UZ3K6B9bZQFWiQ9mTzdm4XAepVUA2zjMKMbBj7u5re4DtwhdonuaYgHZiUwV5Ye4dAki2ZmLRMkFjN3M4",
  "key3": "38CiLtxGi5reLpfZrabu5DUJRiWvTRyhS2iwfaU7sGyJ41p1m4gGvw6Xws1V8YJF5qu2u1ASVXv6KZvknz6iUQ3P",
  "key4": "3DB8hcoDmMarFPwcZMoMDFJzND156ogbMLBQx98XAnBPcFZEoeXK5r9bevJM1xDF26fhnpwQBhWwYD4XLmiT5GR",
  "key5": "4MfUSSuStcu1w2dRCdQwNr99Wu5vfLdQZktrMaDQ3FwLxyAzMuocbDRtiTDi8eMAeubkEJAsrjaZid7UZHZoRpjR",
  "key6": "3GfPfnGLei6ts1JmeynWhjLU7hyywnqNjzGLnS3PGjtsYEY3KtSDFYC7tGCfDwutdn5hzgX3eHSXmn4wEQkWgxab",
  "key7": "3q68poawad8kfTPqUYxiKssUAqYVsMXJBdFs9iWVk4NMMJUpz473pbPBePtu1bc2zcRh5qQHwy5kXkxbNMTZVvkZ",
  "key8": "29iJZu275dGVg9YwtSj699VcSaNSKCr8hiNfhJQXRWm1riD2VEosVWhsP6N3xdcTtVM7eepvJchFJmwUWYvwx5ev",
  "key9": "5iZtYFkwmdcT8U8Jt3NdzxJutwaYXUCz6chwEj1YFVC3ue2xzwKpFevvGt4iYKKWKLFbdC1vMcaR53tJVadGpzom",
  "key10": "4ucb1hRsnmYNddaa4sVdoTXEKy9N8HV5tsPDhHUHnBKbTtt9g1jyUp2n5Jprd2bRzTGheft3i6D4Rzk4Nri87NBU",
  "key11": "tDnjV1kZZhczXHozHpQrZnT2CcJbMHERZJ5Mk4MQNUBAUnRSjC5CJAce5si6BPoyxzjDpCJNN4iTnUYnT9Cjur3",
  "key12": "5M7YttVcRx1sAK1MBZzvWf2tX1hYVdCVhaBB3wCcqgeh3eowU2pgqjiyTsQ6Yu5aEb1qoD46HpYzCTwhgSTubaav",
  "key13": "3wAEACrW5k6kbcBcjD4UMioL3a5TzfcW23yZxBqeUH3Pz1g3KXsquAqHDNDVDqNLVYb78AvFspwBUE68F6UY9LUo",
  "key14": "bXkhYoaNRoiBAtZMTiKNjT1ySF2pGKiQpkRW8p4jJTNrkyoXXHrtytHGsw62MMU9LvgxFXeBt5xpyZ9pDg5pc8R",
  "key15": "42vexvYEeMXU6hTka4yZrUcfT1uo8ttovM9uYtBrH2LUEy7UquLGPFCV5B4xR6F2JURN8SfZnEiRjuZVVLgkiRkr",
  "key16": "4pm9cohewUky62Bu59AUSqdWdWyeNZxHx8keqNEkD3ZFBNYwDXq2UoXKuFXmzbQkbgErbUhx2dRavzGEmq2jcNLH",
  "key17": "3ugA4VcMxG7brJZTFJpjPYich5JLDjMjFhWvzmPUoCrMEiyjkwrHu16tzVYSjx28bguNPyHF7p5QNxXFKVrJXXJZ",
  "key18": "3WPkPwZy7JBNnW92iqP5yTFTfKW7wCeCbLBCqq41hruNuEaJ5fraPgeSSTKm65xExWpf7vYPjinCrTJVQPNuJuQW",
  "key19": "5sZgFu2hxBAJt1NW1fdHqWFx9M8cRd7dMxruetVei6NPbDEsys1Z4JdvoNeLpZs4xvXGmsRESoYns7G3JGSCXCvK",
  "key20": "3TbFwHBEACw5y7FtnKYdjCGT4SLCdLPvEgtm74HSw5A2NNSK8UXzoV4GqWD3BZg2Db3xa8ZFB2hVeUufsvFAdk47",
  "key21": "3NNuNa57KvQmP8bwTkvrtmTR1Q2MqJk176vCdezPhGVH6eawtn9zarLJHvpiN66DK1nch45SQG3UKzuBYyWzhE7i",
  "key22": "4FDXDQSwnFtjsWuCyg44FwUebon69byp6uwjX2YYe9KembpW7GhqsaVH8rspqwjRsaEb4pwFUxk25dfx88Mjqf86",
  "key23": "5stYcT95D9hnbmns2AxEQVUJEDKwMjNTUif3Nu4zeU5MSLauuUf6Nad1XSSLRKeQS2iUuybhKQcfdHszkqEtsXJL",
  "key24": "26fC4MdLuwAsrh77mRnk54eobEzftkuBrkuouPcAiejegDuoXS9DckJogSFK55FYb2ADyUePxmVc38adMtFiRGTf",
  "key25": "3eiuBMrwrU9DiUgJ9AgrvGErSsdeFTMNtCGYhtAPxdEsEC3y5ecaMAT4UDDySrbdwygQMoTwMoFmdcNkENeXvfW8",
  "key26": "8nmcFfWRMM5913cAFLHiRT6CSUTrEBBf4NSVwuF8299j6TUFavtTQcKdytjymfS9HkAvzRkqvzNfY4sNGBWZKAf",
  "key27": "3uw6ezKC3KYS8YRcrgWASfRU1ehpT3X4bAojjPbBYv5YSNFT832F87XDE5QXbeb5LZ3iMxd5ARXtHVpeioqFkt9H",
  "key28": "66YXpREJyN75K7S2GVkwv2YPvmVVtkCQMUP2r53DRcBXr7bJYuZNRAK2cKFc2UhXUk7XxpQQxeeyHLjMXGtdWCCK",
  "key29": "NdBLFooTQW3roVVpUfEpSSVR9SgLFxiTj71MGuYcsdtu2jnvN3C315XZeqbESYLtsfFcYNNu3HR6qDQKMERrm96",
  "key30": "62FEa7bbnakhGQfcj7Kxi6jcse4Zb18ZFWPyk69mo4MndYxaVuEyWQw1ahQHZLbK4SKVNPPRD6gKK72m6juds7dt",
  "key31": "4pyAcDodKpQGdQcswBmUMs4noZGHkpe1G8pbSVMEiUfA1dikJtqkxaDLjXa8qHeF3cN3c5mfz31Pp1R9FcBFCeUN",
  "key32": "4XsSJL3jkzW7Jwhj9oFF9nAMozn26KtyEobAHgm85nb1Kj6vjFqj8Nzocxgdho5GWizvH1LEcfwyHS6m4jDPe8dR",
  "key33": "EEeCdiCwzy4ZKz68jVTWi5otdd1proEdrJuokZZvr6FHabjtUh3QSmzhx5bQBnUVgeFKqvhBeh8k2hJ2HyRLbyr",
  "key34": "38iw8gbL15y8bt81t1qeWCaGPEXXjB1zT2F3kTvFuhbvxFxDnVNC1PWTSzCmmwy1tkJ4YQ8gzeXhmGDjs6dShpWK",
  "key35": "2XY9mHDybH59E8NR1fXkW9ZCJUsLyrAJTqrgmBgMpZ6qEZRkJpMHUqm54MfCm1zgewPtoPWojixKnadgA78Gkkwd",
  "key36": "2rSv33TAeiWRagm13bMFfiEm313cdVY3v46J7weeRkGuNve1p93rwBVz9ej2Ez73LZT35nCMzCdbDY95wxUtgfyE",
  "key37": "X8rj56J8LiWUwnCivVJGa4CPQCo51A3PPbNMTF77dwyrfHsrmq613KSrrsaPcRpyaAPr8tJnksahHtbhv2Q8QJZ",
  "key38": "GGaweZPkuesM6xXk4SJ31u4YZTQx9o7SQ3zAuseAqso8HVXchxtLyP6VhmLNj7befx1qCSwXykd7pWZGauDVHPE",
  "key39": "mjyk7Podidhn6DsWtYaDKrSLPCDr4pdvcBzHSu1bTabmDFWnrvK1JKemCexFAcdANcVcHpBYNure2UdsrgWnzH5",
  "key40": "4MHqGpiNyChJUhYzwU1sNkP6CCLAHiLDn4WwnzNa3gYFPjVsqBgfcUcKeXPHtMcr92natam9Cp52gYsaP7tAi7ip",
  "key41": "35sbSRAwnujQSqPC2Lsvh4UMx29XRomReB82ZNCfPFePP9ZZbKYbLPZ4LrEcD7CMwfmddef1wteDJvkWA4ztQdvg",
  "key42": "5yGewYXL6R73WGgPisMLy6AoqvuKWT27j6YatN4RSLZ4UbxCQr9mEPK3rRKbkbK4T35E4FSHUaBiDi9FhnwXXxXs",
  "key43": "62XkRh6rjMrASDWs7LAXZrmhG1hZfF3DLH1oXS3J2A8ajvJ7tf1QhqEGcTDZKkpNYXTrHAgqjdPU8Zxjb3FQLwcn",
  "key44": "65MrtTTEGVqnZyigo1GVjYPbUgo385nqDEamtu2rBGu37gFN6ZavHu27uvHmXYg5WoxR77rG4hjUZiwim5eHJ8Ta",
  "key45": "GPPVuTRdhgCmQPp27zxY351sFSygMfvYhmLHgaEPjXJEt3ti318yBEi1EeX66tafQWp6ffYm6isUiJQ9Q6AQzpE",
  "key46": "CYAzQivP3f6HrWVeKkKiGgTdKAfXWoTPgP1T8XiG628RxYJe12pixJUukzVYMUVMEnXBdy5MbjwJkLbwg1xNtuq",
  "key47": "4LUYTVuCFYYxxa3JwHku6UuzWe5RF3WZN2vhXrPJuLM9ZM38L28eDao5oxTLKLPEChGLjs4khtwqeE4YpgXCVgyy"
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

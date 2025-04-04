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
    "3zSgWBYZHQJZ3NZqYqSsQQByQW1GvKK8crkzZH6HAUyhfgwFUFPmeTXDH2mqtai9e1ETBiNMsHYuMjAtxHXaxnRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eNzVBEvsNVCyKR7bKXUR7o5xvztvRh91BcbNMNwTRM6kthdt7cDfgThnu4mWRuWqyNSt5pGwzRFJkEKJ1uvBgN6",
  "key1": "5AdcTH8EGsZscKc9cfs2L66n1XU6ddZMQQAkJ91tRns6SqkHUGDoZi8JNE7XaE6BvoUQjbZRkurCCgGgi5HVRiTP",
  "key2": "sePNtk7TXu3fiWWc5wDsiBHbfYFf6LShPTrT2wbjKRK2wcCN7C3iSFHkFdZraM88GSrNPZRu5HYc2eJwkoXAomb",
  "key3": "3hXb6ZWpV5H2W3hHKK8oRwzamDdVJhKdy7QZfuoGKJEZvDZcZ7d73NS2ZMN51JANEojKLu442nZVh5Crv8Vkb1VM",
  "key4": "5JNPebYLU9hQGjN7BZ7DYuuK1mk6i3D2yfcfVGxiCw3YyKeL7XATXJ6nDbxDWkp5Fe2DdLkiDqUc9cTLc5KCGp7a",
  "key5": "3zRxGGnfRQ7tewZMWLTKdsxc6jnJt9nW1pDmqZDHTnJA1bniE4QncPH9r5Xu1pVe7ScY6HN5EcSitVbyRfbsDC8d",
  "key6": "46xiPbe7oZXivYrTn3d7evtnYsAeLggUsdDgwwBjzjFPSkZBkU1Bmu1w1xSUgupJWSuFBZYyDUXsH1nXRBFLqkGG",
  "key7": "3xQkEcpZ7xwAidUYukHS3EzZ98GE6Cp4eK9QJvWSTZqfdEPSgDdppvcQo28L8kjJN75PaQ55Xs3yZWoUR8A42SHs",
  "key8": "26qsQwPxxfDhCPjnGcAc21UDHTSsdRtxgKtmSjcSeG4GGyjxTrqd1V9Zh4RmzScoB5kWdzvpyi4P1CDjDPNEVq8m",
  "key9": "5fgFPU9BdGq5RGgxJGKzdzye5H5RwUxFJS5yWRctjqnGTjyL5kSs1KTaSZhg2wmmhxr8XzVakjD4kgLUCcahSgrL",
  "key10": "J8NvLxgWc9ocjrAVWhE46S2aq5SmUAVeCVq2csR39QJRrXbTYhk3gxrsXJ8BGuVoZnn25qydfV1o6vShueDvBC3",
  "key11": "2vHEakKjZva5mY4X47HLQfC4EaceguHpgsK6vuWpMZ6Ush7zeXbuRN6YLaGsLUU7ercBpXYnfuMGXmzgV9qoxVb5",
  "key12": "5hq5f1CLbSwaC7mjzQZrCnDbtv84pFPq4w8Td9TP8ZmBXLmn9DTjwPRo4EoEUpvKg9JHaDf1tRHDvACMiEvvofos",
  "key13": "3JfsebJDbszvtYeNkQEw6ayNeZQhWotT8JrRoDHMBv3zL88LjaqgYJz1jXVvEPAhRpfmQzrRVyD7SSE49AR74FMP",
  "key14": "2pvSsKkngMzjDnUHzfrUyZSxRosontw7sLH1EHx8aexF9iwiYMAcUfwPoNDt5GSfNkR2Hohite2Zk6gEz689KvpX",
  "key15": "36iZfEMttCcyhga3XQnb2JxWxCxGQbHHiWkdTEN9pSV9HRto6noWQ4Z9sYXmQVk3doUS7f3si3j9QstCyNzGRwRc",
  "key16": "5NbxLEpNqjf76BMNYjsZhdMCBMT5nZTyj7oqSE7zGFBLJpvc379bJe63wuTL5xBd8YnFrG9ZdFWtGdKHiz9bDA1r",
  "key17": "3AbjXt4NgG1HYUywvnesQdYfS4vQFXNKrGL7ijtwHfbFnNQZ7stww4TRBxQZBmU58ub8Lc4Y6Z1gCf3CuxMBwRYS",
  "key18": "3KFAVFyHzQofSGYWgkcvroBk2uJ6mcm6tTF66NkfFf6w3wFgQJ6xEysnVfrNv7yUCCzD1RCf3gxg1DF7Hy43BfCM",
  "key19": "F8B9QySVGnTzLafhtH1pETUEDVoNx7PArVEZoqJ8fU871YtbKnEN26HPnGgzC783eTRfDqehSAxwqf7q7x1NiBJ",
  "key20": "QUvQxNU3fUN11oaKW2SLvmwLpbz75uvmxZXWgd3K93j4DQbGzkFBphgyy7Yoda7NrxRY4UTssJm5gBk8bAqFFPh",
  "key21": "27oBD3SvCgsuNF54BecGsirk435kqW529NsoknTViTb2wi5qmKZuesNx9GcWC6zc22LpYktUf46j9wiP6KusKe2B",
  "key22": "5UPjNvUM4tE7kjbgSyeikYSQnwBUHZYyAiQNXAwNxzup3tanCFuzezhnAs6RhxuKpMsf5XtLqS9MDJy47WxPcSsZ",
  "key23": "2pMU5Rrik5tyaM4cZgURk7YLphzThrmkaLiZfSsBSccHydTedg7VyAvJVF94T7a5T3FDPrGoXYyquQ2y5HAeNvQh",
  "key24": "5arjtMW91Sif9CYGrcnwgHV6FrtGV6GJPBSCbhW3HJ1eZEdSAMYm2bS8fkQbpyQ5pPNeyNAWKXJaV497zi4BTg14",
  "key25": "QTnNnkrxY6GC4LKAPjYmG4R9dJ8i4ToQ5s45f7xxFydJrKhS3qdp1mRCX9CVBRSPYDuTdTKHsXjrrzm3dC9AWUG",
  "key26": "53nD7q9ppcXnYbJk6gnSERptJUvQjgv3tNnPfybM92fsbtaN2rwb5LnibQJ5aqkrB19r5Xkt2kp5xEUPJNYCdnaB",
  "key27": "fJufgKJ3pT3mhsdYqJ4fMnF4kBabcdeu5UVjbZqPoESzyCzkjGnyoWCJb3ykcezNQVDWoC3kBb3NXbmDK4cnBYu",
  "key28": "mCCpAsjPjwV5pTJV4ebvRETZCtsrkmQhjFLGDHPgQT5jC6XZczqhMu2vDvVDXqPDWLzqGMNCzjegBMsUxfWTQSx",
  "key29": "kqscC7A7HoVrPrYVtbruesgAhkYDokeqWtyPYTeGHg3hD99qvweqq4enLHkThYkK18iZkC8AUyo6Yua8APQE9Lu",
  "key30": "2Vjn2qek9TpQgtFAUXWcReqqSfsCCmLvEzr6ZxZsdLkNEAYxit3FssrshNauozGck5eBfZJDWj7Vi1NPHJ9U9TEh",
  "key31": "5hUhZCQ8tceMNVLAKiym4ZdCKXWd1ApxEnnBFKGo8TJccnwTm9UoaUSoz7MC7QC3bw18H4Ehcf842L5gERPvZhUm",
  "key32": "NmjbGiL9rXdZQhUZRAfsNzTs6cx6s6ntuUxEsXbxmu5EqYrKX8DCKSrU9YnGoUTQs6dmi3o3pUQSqFXkmbFrWZY",
  "key33": "4XK1CKiCVWkx5PGBtg6jWEbEax4RvRAJaEvK8YcXbEd55D74xKs51xZFbLYVpvAufzMBbag8EqKCnwkwtfetDdg5",
  "key34": "3uUGNU7PEvBYBrwctx6GDeqifjAYcTRtznZ5YW8pebE7BSiu3fmAFSH5qRrkjbkj1rMBWiD9S3C1UCBpdwFxTMKC",
  "key35": "2cALQ7j313D9kNzqvNb4R2LPns5QF1mnqA9rekw9ZyJSh6iZeBpa9AJr2heFQ3c79rW25E2y4mGaYwAYeKiZYdt9",
  "key36": "3E25ZVTSDqViPJ1gU2hXaFCvV5n9V7S7WktBeGenr2bJKvvjaFN6JvkNC4iUv5Fyny7DpyTZN9g9JTZBDLy2NuU1",
  "key37": "28vB8PJe3yNpMa8qVzdPUH8h5sv56cQuBVmu1jqi9Zr3Tx5pXaqUAYGxxFP3SAbXjbfvWrj1QDfLGFB5bMF7fUb5",
  "key38": "2gifJHY8DtcABE8ZwYEjNGQ6mztx1eQBeiW2rdv4Q1as4LCgnvXrLPxwzyVz4xyzzgpUuJHktTkSTbW4Bo9Qj5Hb",
  "key39": "4yum5XQLJZaVCopis9jtWkH8vBipPLP9qW16MgoKeTHHGEYVksy5TW847E912xjBTtFZMBSp69URMmv8SAFKe171",
  "key40": "LN1WW9TeWnMwi3YrWz4u2oCwYM5n5un1X3AVBe5wdyC38kisEUP7jjKevrrADXMnskios8h1sEWj57uTRsEkyMN",
  "key41": "YE8kTUdx2HJUQmmYfR1wNyisBwyqnbQsPABoqfrRpywPrX492zMbfUGTsdDJbFMbid8wnioPqm18coqFn5ifNLC",
  "key42": "4CN2LJP1xoi8RH4vTwbCYL7gLwMFsL4FLs1iqSZt84vvbUbTSy55LEfQ9sVq9AWERnho5JSCBi7jk7bki4nYi2kd",
  "key43": "4Xi2PHhJodN3fdK3eS7xRmmMwWMw7yXzeA9Cz4coMAKmf548wFprRSD8Az4G8wSvvRhtAAjhgfpQCEYmvN6SZ6yL",
  "key44": "36JwdMgv7QtoDeHv1Lwnt5EVMuBtPZZJgFtiuspcC8DQZaAmuuFaXRgaMxUGCEYig8bDjYHGqBP9TQShbujS1yfy",
  "key45": "2KPcjWS6Jg3wJwAx3x85nM6LuukFxXXmEdjykYP48GxHcDMcLFAskezZywXXM1DyvJkDEmRpcGPNrBXJxgdargAV",
  "key46": "3WCxfEyHJoVcGNGFwzeNAaUXbM9TmsPRDCTsqUHV1dVoCDgjJR7FJRP2ciqxaZAHG2rhUQXypzEPpMb7pZNSSzSh",
  "key47": "4HrJDV8WWWkgr1tqC9R1SJjPeu5ocjQV75piU9qvj3mnDCzBNSrkk3xozDPTXSWuXFkfbs2QUdrf6hsdSDk57aCg"
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

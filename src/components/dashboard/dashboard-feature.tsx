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
    "5BQ5M1dprsxQVaJYSYa33vehZMdxzW6wThRpTu7b8ujTxawcDUT3DSRjwoQaK3m4Hp8inMwXjyUiTxFoPD4VFDZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQhQe9QibDiUzDFkr6CXV6BrX9zTznxtr1AMoMCgX4zAeBQmtBg4NPwrXfHwA5xYCrped6ZGpaCpcL2Aw4yzSv9",
  "key1": "qEY1TNnuWkWFGRyu6pGneZNbQpha5hmsgifBv7u8ZPLbutT3PBbhywumqP9jHBWGXu59JyYbsDnmmDxLZtaqhvq",
  "key2": "58pScuag9uVQLUoSHrsyHwAqrn2ymZHYLUAVG8CHRe3TsAyRnAc9bw7F86CU4xZnu5bFRwmN6QLS1cExdi1CTpXc",
  "key3": "f2oEySdejTr1kTkU5FjkAz8WQHZMW1AKdX6VH2eCMEjrf6rUUxCggGiShYGH5c8xN9nTW6qj9KgMkwAQGqhYUSS",
  "key4": "2JsaTSPininpnfDXASncFPFvBnYBroC29i8VNkvHUjMg2rYZBynvq2wC3i6TYu41b8ovFWvMkss5QTxCi1LtFPXx",
  "key5": "2ojhF6qCPDNkHEJ89thJ43sNgNfWD4qnkDbcyD4zo3qFZZf3kNY2hbaxebTjXzoyo6xMcxzMieQKCxhyutuqMLr4",
  "key6": "66d9JE69yXYunXUJgZptG6MdeBG5mzoV3sSAm7729r7pfH1N1aPsrPAndK4sWh5ZvnDrq4PdCCbEoyoG9fjbzUAD",
  "key7": "HMwbgTnMrfECNTNw2wCnwQe53NNRJyKw9aUvcmXpNk57dNcpQimyLwFCq1E1EdPWRZQDdHBNHXjwek5BR2qA2rW",
  "key8": "3HobGyJmRdC6JBHxdXFZN6PK9BZWCM9LdWoHeZPVJDwXz3SbGkGETNQ4BmLYHingLXHr6e8zb3CiiCic9RKpN6Mb",
  "key9": "2bCYF5N3heXWRaB388qQucEBM3ferWzASwxEuNM8p6u4Xon3JGzmsZFdjvUDeXxKAuL5kveDwHV3EzyCiqfED3t7",
  "key10": "3AuffTy1vA36G1cynoCsF7kPbwKjjYhGWw4u3ciked8ox8bwHbvoGdy9EYwq7i3RqjWbCwYrYpmekFoZrUq1kMza",
  "key11": "3aUBbLXMEEJ1RXEmaHdJCP9iYy113TqquRyEmykgvJkdEUWFBGGzdcaSHYi135nfcJD1xr8TVf6TopWL2BCoKUw8",
  "key12": "4yVaPXJz7TPgbWYmPCMETuuz2UWwH1UqVRHuruZHPtFRGHFRjW6PWQjHwBFSPLi27XQyPyRKQRvt7jXti3Btftx5",
  "key13": "67d9qbPJZmE4va55dp5MLp1XkK6zvQsbaDSxAZBq48Hz4mhrQ6msCqHJCQCB78P1zSVUNwKPcWNfdNMuhVvm3Ehp",
  "key14": "5qzSimwVz2FLZWY4PYFWeHbSjWPCjVdEv9yVcXHxHMGrR4ZKR5U6KeEYTDLPELGQxrSo5AQsf8GuJEQsShhTTQEB",
  "key15": "2cLB68AZiJM12BTTjtW4cm63oUqBFy62xfqPt7DbRU9nJSH3bZKdAQ4bffbo75CxG3g6dMJqDv9fWyPSY2Q6CiA6",
  "key16": "66J2pMafjDsU1CnNNitcHcLwwFQftSpKGpX7B6qgnVSTLCQceES5kPfEtVcZPtPTKK3rry7UzqNyccFLKu61PZ1m",
  "key17": "7NHqa9ML2ayuyGtwRPCEqrRHhrb3JivD4FnkLSNatsk7ZnUqujJR4EQtPah16KWBSFh2LxMHqCvWQ1M593vgmyV",
  "key18": "f3XCbqRzoR8SkUxumErvHXEQKXVU3jRh9XF8Htu1FtW7kXaiZYxXgf7KYu4gMDJWzXamvuUWBhR7Ro8rzcnFsG6",
  "key19": "5uNFQ17gvUSXpujyV78X2jsH7TjnVvEu7cUEof229p35d426Et4Dt6V7xJkxeoPXEqeAfENsuxr5P6Mi4RQcneFY",
  "key20": "59ZQhXJsUSFYenLqdPMxeJMyNEqZBFCvj9mXhYfip5a3Fdzn331LDkuENyNXKP2hxTELT7YwPbeEouDXDeh4aQqw",
  "key21": "5UCxQ51urkLYqiSn1N1mdck7g7x7nQ31yRsiVVqNrJgngdoRsXz4NDKf7UZgh5JbsoVyrQMV88PZ4EzDwBGtuC82",
  "key22": "5cM6NKXskHcvF9p6oBQUBXs9i3MTNqGci2MMDBhph3D8MppEXigzJzhGTUpXtrZ5EBEbgKZDUDi6zrKCnbKVZmC6",
  "key23": "4qPAsTNKQVXYT99hGDbqMRRRBsRzpvt1MaRU7MWqu3dcTfnM3tJLxa8p2nfKD47X8os9D3F1bbfrfiV6XzdcbAiY",
  "key24": "NLFqS7Lz5tn72qQw7U2fWZP3exg3keDysci8A55sf8aFqBe6aTAiF3qiq1S2opda9ZcyeHtxffyDHgogQv2AA6a",
  "key25": "2QmBtfhMGW9bwpopRwbdxEHKfUALkoCqTQ15SLHNAGEh1HwAvDJWZjuwdMUL5jAjRr4N6WuXB1h8wDPXcDw7EjL1",
  "key26": "ABwEaQzwqkdYRnSeQnmqv96GBBQA654kD4pw6N1AhNpoNUAnpVPgPj8VoCYpxtChjnxxb2bU6oTjtUd6bGyrcaP",
  "key27": "3roR7dWa1wsryBXqBMYDQGUeBm5NNEPUa1pUKtSPruxeHtXg9iqPN3PDBY6GKshL9AJovUeu5o9yAuPvZ6Bg2K8C",
  "key28": "4J9tE2SrgVYy9WVGpAxU1LY24jTd4ByrG3Px8b5ebvS5ga9TXiG72Xk3WPpp3S5LZVKYqrX5dYC3AfGyJxYDJcsf",
  "key29": "3YHrSExTSk49FdJ5QL54AwyuAz5QdwHoR7iG7BUnGb77WMfhkSRQMtrDMJi8MxdKue6fuyNLwxUCT4tyrwwkSgJ9",
  "key30": "VUjyzVVDwg2GFj9tBNrzZ18d2nizbvzScrv6x4S8tN9nV7FDoramjeJ9TPz35oN8vFFMpdrszhk1HXZVzKGteFi",
  "key31": "Mv4HJHDmnNJ2TMQDDFL2mz7Wrvusy15kzopcViYaA7zHqcyiV9pJtM2ppKhmKcWEi8duKUKNaYhF5MC4AvVcSbf",
  "key32": "5JV5kPeT2RE9865bjmrnJMye4dfqgenXHwinyCHu81KnyCr3EmM7RDt3iL6HG6gdrEvnreMFQTcv78kCCh2dnSD8",
  "key33": "25Y6qwDBGksTpLfQbVvBwb1hdUJ7bVN8Y4Zj5m3HXqKhpwXvTVprcWhMt7KsM9YW5t5DuB9FkFjevcbYFgyMrNPD",
  "key34": "32KQR8RAVioaxoK1GkyN9WZ12jdZ13eDgmDG1bCkaZEQhBzEiHK1mujajBerGWSXng52zHovmrJXgqEkEzLJmoL7",
  "key35": "3WWQzq7s58tTaAMmMMVGbCNYMj2qeCrhsZdiaFRMFknJRT5GTR8M1cveANUXTgQQxzZuuJEbkG8GywAVsQgKeAVn",
  "key36": "4Da87hgy8MVtT5U4VbWEDZdX1kbTKBQ7fjZBZP1MTzoYAxFnJ54hT6CGWME145wKmEy54173gGU1GHLxyZpiQ8Jk",
  "key37": "2ZnQWJD9xJfnRhoxouLpQKHMZNgyQJ6RMKn24kuAFfq5u194Umxp7SSmk4UWU2yJPm7VNkq19oQiUa1GjfT883Xg",
  "key38": "2K2YE6Q126DLUSXze4L8YarPxc5kW4GV2gw7U3BZ6ofvCgfKsi2qDRTMS896rRXhGGtg1L4bYdMNRT7rC5M5eUno",
  "key39": "KfsLxX9dJoduNQPZ8sfcdHhSEKNzeMHZHF835rY9wKXPEnAfmrxVKLMPkNfSE5s1sSsUAHw4qLpz1MUAJFPyHGr",
  "key40": "3q2AEUEKmsRT2EVqK4BZ6h7kQurKqeD6NbQvyqawgM8umYLzeuyxjmWdyFyC3UUHwwvJzwW8FPVy4Cxdhqucj1G8",
  "key41": "34s9dxm2nvWbSgKLBiK2dWohxxTTJ678upw2R2snb1YSRss5QF6DjVimFWCUfnocXz4ii4g2FEruiQEW5FKMNTP9",
  "key42": "yoJ87CZVsCn5sFfgVw8Pi3zC1h6cTv4YESWftV9nQ37FqdKZTo1BUindF6As4FELaMJxNAv2ZkHEE98Yen5mCbq",
  "key43": "etVt7NxeqXwKcgazF3DQe3Wf9PXFzwULNZCSXxEhoJQ1KtqBYatGt4fAAKMt87qvsZNEvpDEejtBop6rAqhfU1o"
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

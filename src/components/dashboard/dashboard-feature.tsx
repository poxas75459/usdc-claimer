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
    "49qWga9DdhotExTLrTVZPDmutWGx9eEW8tBixgM1RPzJN4eQJ8b7g8ctcJzYwtcGG8Kp6QLTTGeyWk3RZc7FzYvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KmhYvEkYUCyM6UcrpZ7FHAE3vs5sfxq4g6d1sxafdGc9gMaA8YyyMozgYnnyZERGfJ9xdDuSuQJNoBuisnRPnJB",
  "key1": "CyUB6Li6xSX9SFaeQxQo1uvLKBpBwzJhnA1uCkNYjZzfSQru9gyJkrprksBQCeiLgsfRgqreT7F3F87VewSa62V",
  "key2": "XmrF7PX7rcRNNZiDJeQLHoNKxPo2iPkCy5Uu3ZReZgF9r8TC9zLq18MRPPpZDvrP19qVpsob5N3vwcuy82ZkEAE",
  "key3": "4ZDfugmqLegDV3Sb24uskwUKDp47uyH2EyxUKAi258rWuNcgAohcbHEnk5BLfCafqztovvhbodR78bgWqfwgKx2t",
  "key4": "5Y1dwmKaXS7FRzYLuwVpyNDNQbz2MgusWJdbyiMww5ixHwef9hyntHK95QYwEaybzdvNi1khrmtSo9dG2BFDjWd7",
  "key5": "3EpgdNDLJgGUF5wJv9g8hPnouooUwunwrtKtqTLtz83VbJdF89qiy4mqArUKsXBypWr41hc7ESMUmD5r3Cuz9d9v",
  "key6": "5nbas5tX8DXnCkHc2TGp39WwwyE2nFSCmPP7tkEtcKApksdRbad6DNkwmsXrkzcHJ5RgmQFMS32tZXHvr4P5oRDu",
  "key7": "49eEHtNYzboqijZgSJzPt11QjMf4ddQn6SsgaohiwKXiXGXeFuerRhSsJ9osZPorPp8h68aiyizSrinCPcrVyrMq",
  "key8": "629FRYGi99Zts1fofFStQyvRuBVCDvPmkkud3vq86BovMtQd4sqsFLkwTNPQadj26uMxLsSpWe5ZkU3xCVpgaDdN",
  "key9": "5M6tMUzWkQL4QGyLc96X3HpactgcB3QVdrs7zKMHde7xecSYV5BNeAJBTwRCAb1M32q6A88DPgEvzPZfbL4VJsjF",
  "key10": "5kBUMCZqtU6oiD3MvKBkJPZNdseYZhfNBqPxEDaL48dDcswDBATYGKtCyn2QEup5cmbLKgWFtSsakyoimekcCSYh",
  "key11": "2qk2pBud2kQZP5wWke3XaHKhJunR6n1LnievcRhMebktgoRUwhDhBcmLZget6dPM2Xd1SqTgZBMgPPZUjrccNy7T",
  "key12": "ynvkVniMkbaxK1ogS9jxZpXJVTU99xAd2B3dUpKXNxivTg8NFuxwiAN8WkWxGXSUyNSb8zHa52fs3PfK2b9pUDM",
  "key13": "4UxwP1xxjeCNTMeUGxgQqLGE2gFwQayj2tFHC1Rg1Uqby7LMiaidndcfaL7Yq3hiTGMg1wkHYKZAaHibCc27xP2j",
  "key14": "2x2nEFuYp4RJ1yMQFovdf2g4NffpDhocjATDcE6uTtbraEEYnexCTxG5SPntNFng91vrzvbt8TtnWAg7NaxXyb6x",
  "key15": "4DmhBEm7KQJpodSoMsMT2x8R6CDz8TJEWvmX1krAwNBDEZ4X6AhA5QcujBPgXopEDfx48SnUMtvBjRoDuagkudPu",
  "key16": "hWPHokdgA7chcBKS5gwagZRx3RrDRPkpauYLoxJRoDVedDxj5XPpvVt6j5suJzvcxgEsuQK7LvZWzAswZ8EH4L9",
  "key17": "m6hW1taW9r7K9EQVQo6cKeuzrhAiLBf59kvhpCK3NsMFGTX3LGrrtLtpyWDsZETtmtLHBvwQWXqfJuXdKRB5frp",
  "key18": "529d22RvweohyStCfCCjhSdQCF6hHytmMkNAeKKYmGEimJxyxEJRLdJtsdJBUdprgwNjTeHtc3KPqKr2uYVhaGC5",
  "key19": "ENdmc84xG2fyNAbz61g8PXLwv7va11RChxfRzSfw8zWzxw1WMbXFuWCoDwD9rVhkeoRXRQyaUfk1vPP6bpLma69",
  "key20": "2iPz3e43and2UYRBGyBBTkZp1LqjQ5GXfGGoxJ338kDZisMpxD7wFSHdAu8mx5AuzQAx7Kx1g4kU4do1L88thTuK",
  "key21": "3Ttuw2RATq1eEmf9D1S5qzQzazvwAFspxhYmfYuHXHqVLSHJaqtjFBj7CbUgDfywQtsoNB2zCpiU2SWB4CJEovmU",
  "key22": "3T2Mqm6jVW1Krb81MZhqjDsEUjN9G5mKWNrTLJvJoA9owXW9PsxMA3kVpZtm3PA6XuYG1Gyo7VZLoC81mxdPSwsc",
  "key23": "Pm4Xsc6ZzudngmTzQTPQdhf1yNEQhf1HtPjEhv1FQAs9oBVExbmgpZihiiFeiQAyMVZq6rbxyMtRVvbHrZWsKJU",
  "key24": "5CaLjRzpAdBP55LmiwJr8PM9wkvmXPqZXWacW84Tk9bHo8FgP1KFppiJMpSPa8uchMRuMzawMpaSbjrQvnzVXBys",
  "key25": "246vEXNaCKxgEid1NU6ZatTfLCfBrXszEynP4MQaU4PCXj4kYA33vTcSU3y5RoCPW6YzMLVdEcNjNQSprN7FSCuz",
  "key26": "3WM6n65nx2JcbAAJnRyuaYeauFJhm6Nb8DAPqja74f9t1g7c985yC84dVkkd1e9BCE56hCTmWvTy1tM3RqvtfXTG",
  "key27": "3JvuvMEKbXcNaPhf44qqueKw2WQFdnMh8oujMaPu9oZDgEmzhBhqVZRJWMtqZChC4rEQeUDRAXBTGnmpvLZUc5Ga",
  "key28": "3tTeYqwn3fdraX4Ah69JGzeYovqSkJqLWfkuBDwVSLyc4R1ayCMpZe9W8pvmxaSaHKrNeqvdDA5kPZXVCnwefJ3m",
  "key29": "2AcevfkHvDyBWiBsiirVqEnwoRnY2cGZhvVcUaVSLxLovdchjB2UhtoqAr8J512jD8Rc6qMx6REEnpRhNcmmWTsK",
  "key30": "4KWeuB8cou34RBu2P2ydVdtqb1s6y9K7PC8uzanBVxsTQF9xVwR48FyS3PLUqYoDyg2cuLJGKQEPjuwZjA76dRoJ",
  "key31": "4UqEctgU8upqRSHXNtwmre59LkHuQMWQmWCp9uovFwb6hnmjLD2xTzdkT9J8bRNTomGa1epgX67HywiGkC4gkRND",
  "key32": "5YvqySMsubLkFAfK9VtfVPBjxxeatnYA9pi9eurTDkwNfjHwXGH8ocHnzbukViaqm6x2UfJaMu1a7gvgucZL2myN",
  "key33": "3TqY3Upe6oEALFnh9PHJV1J1LcZ6kktCvjGtGC2wKrK1LD1nDP9RcahaagAmWuQaNskpRPSiCj41GZjRS9qUdbjd",
  "key34": "2VdRa6rEpo1L34BMQwMtWd8SitkpzoHU1yJc54iEoDjLGM4Tyirg5WEiodrDniRPtYg44gdeaJ4uvdR6qAeKryZe",
  "key35": "Kii6SzSrgzdc67324Pa4j5D18G6Mh5cJbq8M9usUDVJ6WabJuvbkQ6fFjWkvxxrDBcBpJ9MJVxZKEregjjjkXHi",
  "key36": "3D4SiRRBxZbndR6hdxqbZT4bKbEfdcfpaUkkg7MosQz9yWRzByorpaitNzAZiHhVoXDnhy7dc7m3ujzweTV9hz5Y",
  "key37": "FP9SD4asQVCeXXt2aUQu93VWMsQbmE2vPwwU62vj9oh6NaZ8CxV7WSK15dW5codd1trwYX2Pv38UhpqXqB9oe5p",
  "key38": "5mLMutdobnefKaEy5eW1k4pJ54L1gjmzEknEfKQaE3cse3utLw3cHs6LYHDjbiqiyUocojjuNF6hD83iXnBPDRWo",
  "key39": "dePWZVTc8ZnQCmxVkvgWFDhpYDh1dm1UTW28rRs4rhx4jkNnpM8nMuhhPDAG1dQMVK2WThhimkY29UnWs4x5wF3",
  "key40": "3F3cRLkzM5E1K6e8ohZ9FyeGnsbUUAVrWUi2YcFCmFAx6VRp2MDuKvxiXSaPos2SCNrKzk8dmmB1LY2ttR1Qvxkg",
  "key41": "SVKSPXjZLtvPX4j9r8JUDozi37Y3WEYydjULao1AEsQD4JNsLxFMnGcDZf9Q96ncWt5zHbr9agT8izmHEutzmwM",
  "key42": "4RxYhbuCeeWSUAXPvVz6wB7waSBrLhbxCYW6FBQWZLJJ62dZqic5mHLsN4Vnex8ezno35F5V7bvxKzc61bjTDn9c",
  "key43": "3huPeZeWtr2Hu2JchkepWvk5z15DdPgnPaLQyDo8NMRLmNUZesgVTGh52r6JwYYAjQndhaq5xsdU9sUXej5YsLH6",
  "key44": "gwLqHyJ43aQTMf63A4uHxcmuYjCqCjuXeVN7m6pxwEJ8LBMS5cVZfnvUU4Nw6kW1UVe84aN5EZRMMfFYhMwrqeh",
  "key45": "3b2ufQXqdvDoaD2QCA6qh3gT1BrNDVffH3r3LVWAvfdE9Gmk8LYJHsUaHbsLrPRFDd8XrcnAchEqyDdghkkt9Wuj"
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

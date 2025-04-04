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
    "mErmLiBiBncXVQekxZmoCRLNDn3Ezc3nnikhJHXtCN8RSxeSPy7ATHgfqWAH6LLcCDHFBBz4fW4W3h9SHT9bqDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d4Q7MdTdsBvrHjAQoLxUZBQiM3uSiP7E3wvCSDezxUrasV3kcRt6YhjbUGU9hyh64JcJ22mf4ttkdogUfDNVdJt",
  "key1": "37Qk5tfyJ4sdEBMiTaMLKJbXieBnq8ymKZEPxDKnjmWcvNu5weczHo6ja1mSuSUgsneBVfQSWUeCazLgabPvFRRy",
  "key2": "3jj4vYbDTSM7BPyY1N5YhEymq5rpuT52uXya6hTaNqTryCzNjn4rRGNQyxY2aFKC55nALaR9qwrWL9u4A6aHWPCc",
  "key3": "3KXjHj1ogvC3GpvTxc7Y482pfbSBFGaJGUCwjzdcEGY6h4wexU5h3JBszMMRdTXxEz5pdto7nb4T5kceqV3rKpmg",
  "key4": "3QzHpARcMvTeEX5wTbnEh8LEq96XDSQev6PDA2A2Fr5MjeHsnHGjx4j7Da5ec6SeruLYd1xJLGnQntK2nkAyYcqx",
  "key5": "5KQfXSQyfXejA1NB79c2mL7HWNuaNUkqwAURXggSwEEVe1pxG7XavwGqZvvjpF1cewqurSjgVivkNCEL4W2FDQLV",
  "key6": "oBrVLcc4JWLRhbyRmWLbB3qBPd5G1SfjSC821LbDLnFehzxNkZ3qK36VShTGgGeEkkGRuF1eZ1nUcHnMUyh7gKw",
  "key7": "9s9YrRMXHUdGd6HpzQaSCdbVXh1RHXfhovpaNeiT1QojWZDDT6xyW9UCzs8rso9P2xewFGpfEhvFUUYgycz3hpd",
  "key8": "WaG35a2zT6MXM9EwLDhPEDUwguDhDu4WA5wf2BEZJZeZfuKSoSGTQP4TzAbawFYXtfyMxCU9dHoowfT7gTwbSYV",
  "key9": "3bkSVjDJ9LebUSPrMn7WxAtZ9vQ1DAAtWznXFstvpKNVRW6PRXSh7mMdkrHZ3PN363dmrXcvYwDT2F766oHNx5sq",
  "key10": "28e5JyPskZ5w2nsEabFKaVhSmvaiBDjTchk1e5GooWaWxPsn8mDyo3QKzfcznSyjba3aXh3JF8KG2iuKFkNza7E5",
  "key11": "5eRZwUJF5xDecDCMmvMVPxvVEv1kyCxtcf8yiW38Efego9NQvFaDKqHEVNLAMgHRFoaYY6DNrqrHRZMegoAc9eFZ",
  "key12": "43YtRFyatHNHdp8acsfH2UP2zeLK9nRQBFZuknYs8jGZckq5qQA8QoAbiaNPboy68J63dZ5CjjJ3refHQm5SeXXQ",
  "key13": "4PSMAEpuuMs3yVAFf4KVqURwQgREUj183R24WTxwAouPLp7jWi7Xmv7aRYwwACNnGLSy8FivbydZ4FxQtJoKTcHN",
  "key14": "5wyQhP51AExDBuWGLUuy3Xs4fb4AejuR9diGupk1hNSAWvtHJ9KUtJmHJC3YrNpRhxZYxbsjiZSXyraZAnXWpGAz",
  "key15": "4k2gHMAXcVgewNRfvv1g7cVm6qkeKvGXgghogcooeNFtXkEKJ5yF1jCZndLGTysUGrkGbkQSQRBrKZKEr5LyjBeG",
  "key16": "5dbr5J5Z8KQMGNSmuujhmyWCMgFYyooSBBGzcejnbhJFuA8foa3JNk2WM8NpAXp2EJ3rqXtwWphbur8A27NsJaKx",
  "key17": "A2BH4xNHkh4zd6q8CZoTBJeWwGvQsjspmNCSRGXCSewusFVM5CgjGxvgfx7k47KybBUDAo3wRYAipjM5fvyLJWE",
  "key18": "MwRDdige6kwYtMkYV1ZvCU8f3sKHGtQLieRQQ22BkZMuex1ML1imZZTGgGxCLY8rFQGduYLsbjbUBxxZz4dpTXY",
  "key19": "5h3oTxBZnJyYMgjEKmWJ5c9BN11MsjAGKYEAiv9ZWAeUWou2NYWZCHJULcZfZiFkEjqJ3k6zuDze9kCrxuYhyWEE",
  "key20": "5WVwzzMvyEbsYtRQSf3wHeKeUxUJ5CtRyy56xEorT5ZUT96qthEogFWDoxQeUqxYqkNXxRcWrCRdMSX8tzW56CLU",
  "key21": "4GXpZNPrWh3p56YFivC2mqkvZAwLAFu6y3bHafoSSt9hHVvZFwEmRQT9zQttjVTxTffGJT73JkcGMbjwpURmec4N",
  "key22": "6482zmRPiWQkqAYQbQmG29QEd1PL22MEqbXd1Der1eGHLyMEJgkjeN9mgXY9HpWAqT8Cm4TKJCMYKtBcrvFvL9jP",
  "key23": "yMaB4bo3CLqDXAUGFfMgN1aj3qFgN98pR2hykb35wv39t6V78fScsX8qL3Y2Gn6kKGnWtSvDT7emskiEJeysMB9",
  "key24": "4hyqSAwcA3AeZcsaHyLXpBrdS2ppyr2Nq8a4QnoxCkZWfoF85n6agxAetxj68wF3fg1siyEsXsSbRYcXhrFL6vZ6",
  "key25": "4dQWQcS6T9uTZRgAJE2vP5BRept3rP6nTAvpmWBprb6z7x2uoacbWrKEuihUHa3ST5qMthiYvhhU7g3KjQfu4fwL",
  "key26": "5VkacGrwBhhoGtxpTcji3EsQag7uviYpLD7b15DkXcuNfERpoHFdLBJv2m5YqR3mjyMvY2TXpRJexck85PeFSHcu",
  "key27": "31QzGpnezMftT3S1nC64g4itiB1nBSd57Bdj9mAtaQSc6rvbLTiMAXxTCR7fHG51RzKiYWSqXYVCgA4XqskcMe76",
  "key28": "3mSYS6t6aw8cRuhpM5Mz8G21vmNohZ3H8jk9qZqacB1adPcZZt4BHN5zph7EHew18ywG2pAhMT4u9zwasJmxjgAJ",
  "key29": "4KXGuoWXTYgtc3XaX3jgAFmjsi38fjeEECnu1jBfmfsreXwsoZEGjihiNwrCwezPGJMuW2HttRmAuGtdPhf89Mep",
  "key30": "52XZ4YzRiq1MnAbd8cFjdeMponwQz34gCuLfywZeCx8vsN7aq8mtyMHg5cQ2sv55t1tm7BSt6noXjfDqvgnRcPMq",
  "key31": "5goM1rUkYoBHBomDWoX9KUGraHd7HoVLz9ZxihHddXBMiPMH4VrADBNJdHC4ysA2Y4nn9cQa2NeuuuChmmhevG3B",
  "key32": "4ijcWPqZpeFfXF853EqH2Sq43Y3ZmksFHVihEYdkUqTejKpe5zZNAbACSnfYJUqFcZsg6CXtSE4VyENvf7SUHHzm",
  "key33": "4BAmRcoVSYY1j1ANXCuiqFFV84vd7GBTGbCJHUm8ZVetTaG7oKERpErUrDkUGDWrQ1P8FTw3ibrbHg18s5oZQLKJ",
  "key34": "xDCSwLG2jZdmRw6mR8Y2VGcy6koLLFf1KkZsvztSBHrtGCtMNsA1Ly6eJkQ5bBqBEoahoDn44xCiHsUrZxiDzyZ",
  "key35": "2KsNtzdSYUSwNmgCK1LcrKDP7T3SEHKL1iaqXgVJX8PBXtKx47nXQbre9sYotdSyae61dHAkUXJK7CunLXb92FV1",
  "key36": "b6XQMjp3pXKccjZpXeca222Pg7z3QvH7szV62NDmSmyThTw7tNBmw8TMxugzRFPhgdGeKTJp9ij4sw73UrLPAaf",
  "key37": "2Zpgyqwehujsr71MTC4SuVcZtBKBLG4h1yDQb9gq9ebJ48Dea6LCFUfhSeQj67TnH1Nd77ESGNBMzAGCj6fZG63",
  "key38": "rdjVJPT9Mw6Bsi3qyCeEPXpPxXempxqPicER13shwGccc8sp6HjdqGRdbjVVmDzQss3yoRTrJ2Co4cpsXPZxnjo",
  "key39": "44mD1ALndiGufJcSt9g7dFiJ8ctUFGUH1ZWa3uTkR7bokKYQSXMC35gpsGmD4UHi1Prm3Pua8UXgYZcqEdK5EadU",
  "key40": "Jty8T1qLifk6ydqK19ioyDWPLPYkqF2Wt3Ey3hSDpMPcgv34MpB2y45zRSYsrmXjkCuQGcuivMnYgXzv3N1LFeq",
  "key41": "5mfQHJrSNzbZ79ykqvCk6t6VrCArSbcdb6YTxumxUo3hH2LYyZfRHmDt1hRoHkub4gv9uLdy1J2Fe9jFf5ajaXoZ",
  "key42": "3dX4kxFpKUhmroue3uXZKs87d8PnSZJBVG5D5Jpew1fhy1LpSh9ttYfR4oHV9sPZqbguBGbST6FB9PNwpaYSeWpo",
  "key43": "29CPw7nNgBKaMHj5TDyBiKeFpjkeuyajcUEAhcW5i773G22LreuyrWuowDEFVRSpycMnTjiUKHSPN5t3y1fUMjVR",
  "key44": "246Nj9TEF6vcTf9s7UW9Q4KBPNaqhgEKs1ZctjhsDpghYdVe92Zh8yVpRiQbycNPobqtViT6Pq5hUYt8S6sg6Vx7",
  "key45": "mgNykrmqXFaFuurceUK2cEdmPZRCfsJxBih82NMbrpjiew1eaCkRaTkKmBJerkAD3WgqCZwfao7g393Wi2vg7JQ",
  "key46": "4Sb2ERu5jBfVsQLNnkEnwSLbgunEYZRkfBcwQ1noGJaEwDTiJC2KxdbMbLyYmqeVviE5Hzm2w6MyPnYfa4F1TnNW"
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

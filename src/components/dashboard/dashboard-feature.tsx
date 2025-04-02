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
    "5BABs31JfNqJiMNaPGaym2hciTZwRNTN9NRtLydSf2oJ8E7dFGSveSczrF2Yevtf7k3PjsFnCGoQp7PBkuoYY7We"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4frmAn747MAHbaepcYSHem1gN8GQbiEhgZCvLRYQhEVrEZtDTLV174PkWekGLJJxtHfm6dkksh8fQ1qVR5LoMiMu",
  "key1": "2hryzZebwUMfRnTE1VbC6Z1PtvBc9Cizg2uSAS41uYGD8m2d2mecWz2RyYPD6j4Lm193QidCZDNZdjxAhkeTF8FF",
  "key2": "47p5VYiH6hwnyE64unUVaoERn5P3t1TVZiRz9V5HpLy6zcDsPbudgSnHGqC19M5WZU8icN753rCemPSt4PSyYzL1",
  "key3": "5vJSn7zBAeTJRPTRttbqkjvh1Nx4j9UkSGH8PHjuaqHgFGZiDKaz4YoVuymgr9b4zQQ9FLLNja1472XvxT1r6AqU",
  "key4": "2nUE1sKHM1qAht2Uin7eYH1qpbrGwAWFmo5EwXYRbfYqYhWWMvq1qVzLUCC8Pvc7rdLzc7T9cCwyZC47B27ePCxt",
  "key5": "4d2tM3owkwM4a3yMmQV2qrqGVy6jivybVDDZY6AifZ7WhaKhQgigpBwEp5q2Vpq8ztoF52Z7YdZjVHGR7oiAZHbw",
  "key6": "53U2W97Nc1UTqiH3L79R7Jgftc5465A96hVLCGD9jUyBPAfmCSd9pD99jByBKX1xjBpRkGmmWBAXjzuKUxqu5zBA",
  "key7": "3qYY7rSZg172adq6Dc3DPBTjkjnA6YxLaytswQjzctbNPAEQUoMMXvU23ag9DXgVYXSVQta39LKez73pnuuPidFY",
  "key8": "39FugKk1pqn3YLCoiLRHem7ShYFGBqKzacMnyJUK7pA3pNjJdyD4zRFpvWR8GiC5xT4Uobtdtk8UyLc7b9Rdmcfg",
  "key9": "5zdgVmo2kWmWoRsEwHNG93LwGsmGm5pBsZKtizudayrfqAaG6MHwXDMGHwXbxWbkXYhvJ6mvWeSE16hQNWJj5K4e",
  "key10": "5kmrYXei4LwHGUKPFR9gTxnMHe1BPfqS3A66NuoJA4i4ozQzd8fJWYCqd9WCzv23yFdnvZGMRk1MghQqEqcEWenh",
  "key11": "49zNc5k2t6d94ycTPKC7GdNn93XnT1VE4QaTpZqxRXqQkD7dSsBpanZj1puSTzieZCPP1TBCtsDxGoAAbZSdLMLt",
  "key12": "4ahcdd5dyR5JCXByeVf5m7qfoFD1n4jmNJ3ScBTWYKPu7QvALtWu3eTZparPFSrG18HNg2jghkzeb6azaCJd1ceW",
  "key13": "3RW4Qw5jCS8zy67z6adaDavSUEd9JKT7KKo3213mgm4uY5PUZ1Mxs8eLu2dWW9i2HZJQwwDLcPwtAfBDCg7euvqj",
  "key14": "2EunVLGYhhFaQUxK9BfuCmLemaNDL5dVKU3o7rAMcJTVM95zxnRkhBbUNQAJq3W7jKtH4wPYceYk4avBsaEXKpvY",
  "key15": "8XE3P4ta5dNSLZq1yQ2MuspWHtCaZt3johrjLgrGCuxbYKknPFcf27ozdwwKajvLFyB69m5PgSuqaJvnqwnmTMd",
  "key16": "53CGvfGid5MJFSDXNV5FLMWBihe1QiYfDcawbVZFHWrTNRB6WUBRPwUE32mXhJGSQcm2J97sJbHXkTHT2YTigMCa",
  "key17": "3sdr7odvY7s7Pbb4MP1qtSw7BkPeRK71vggmSmygU5w7unxETJhhb8oCZyJVayizgV8jqyhfYdGcZ7Er9snBSrH8",
  "key18": "3XyCdyrb9XBj7avGdqd7xmV21KonJvtWqr31hD3FJNXzL1BjUSuaauDnXK25NqEvFkLQoa2QXLxJkVJvqVF13DEj",
  "key19": "4xjnjWPX6C5hrbsZKsYuo28FUZknGmbdpPypfZhQSCHWuDQ2p3KZPM3jfwUWJvKpttYAAeyvKXy5oF6B1HCB8eAG",
  "key20": "4yFYtMkNZ2W6odVmyUG2t1WF2h2PvYTcXFf728HdtBYJCMB8vgczBZ7nKt5bbVwdVcZa4cMNzvJnS1J6PjP6Jyay",
  "key21": "GiRxmxQupBDuR4Xe6zebfJbECnRSU4CrQYifQNueax4Ffk34bJnBBnvjWoYbb1aWzckmUUkN5dTQCdsipJaFZVr",
  "key22": "prKJKcspKkLU3mZFu2VdRQnXQT3k72nRnwQhCYFX2XcMKhsckSxTJsqrPuEVPTwDNXcm3r5cZMUhfNUeX3oSj7c",
  "key23": "2exzwCAdnWSgqSu6W1Kwa6StvMcaouKGNV6aRqTGmZfTcLgU34xKZYbCuV8DxeSTYPWevN9FM2yvcZoguqkkxBsE",
  "key24": "3jKARGsAPqBvT39edBuYCGNUWgZbk2qs3ZcYq6Wt3GtqVfGnFE1hY7pSswACGzCK79PheB5szQNCxLw3qxoCTMMP",
  "key25": "wU4j2eEihkKMkrwtGJLzKgnJrPg3tBUJht828yPtF6JtSzfFFPRokUTD3192ipvCywDXYaLP1RZiA8WUmATVbC5",
  "key26": "4UczzYuvoY3NGx5RhQF8RMDA6FSPx5S5FtKMzr7cboimdE5cudDJVKFfDzQy531k8dXyGRMkLJEWxBqYabQpqyda",
  "key27": "2KGnFEyLZfo1fyy8N1LMheub2K7Wx1tk9qU4YgC8JyTs8rmkeKxm1Uh7b3MZnVNW3cDgfvzpjcDQKSPPTqT76a3f",
  "key28": "5muGqzTAwhkgPs8b92aGvAvivPxb9o8XS2s7ShTguhQNEH62zWFTomJTAMLgsC5tnz3m1rxUnhaeMYodMwmo6LMD",
  "key29": "WWeRN9P42mChJ9QrwQFKZzj2veiiUyLqnocfidqv19KQi7QbSGYDsAkihBcbX68MvjNA4WxwCD7Ah2so3dLr6Ev",
  "key30": "4ZJHi6Yh9LJUaSEsHX6CYFXXDE3wbsXdbYUSd9eLSRM5GRfViCJE5UDgVT1ai34dYADnAqhKYNebrLbg632MqpHU",
  "key31": "3y6BJms8c1vNBnbnUDrsDVC3qHLfhcnnh7jQyoFbXwDJZjY7nqkFWVBMit35aD6vCFBq3rRiV19tMy7xjEXngDcW",
  "key32": "4g6AnxMLVhcxjv5HdMrsyoS3s4Q23jfacAHqe7qGo39gVLFhksXkQrKTn7BPcMUb2oqukXuE37ax9hpti6fABWCX",
  "key33": "3WtAJ4PydFfTx6qdLBvc2V5xwBz1t6snD71Y4kPjKBsj9cWz195fkwZDMyN1rynWp3zGsQzahbA7KVrV2fBV9JTz",
  "key34": "2qVSrRrvgGcCfawNk7XwHXNoxqD45k6V7THb8SmGtU5BHwbwHkps5i2pDiiopgRkAxQcCJip3kaQX4mcyNstxMYC",
  "key35": "YAkhyQJU7VqXY8NfeJDBrjc4ynzNg9BPd7ygTveGYhvFZyUkp6moeUhUajAtByEoSy6z62wPbmaQ1JSb9nUyzwf",
  "key36": "62EW3iHjAqBonhBjJmQa5EUMvTLmDkhim8W3CAkQyVMvuuThQh8s7A3m8QPb9s9mhXf1zeov6eiTk8td2rmoWBHK",
  "key37": "Ngo4Nvadr3PsGBt2d9s34t7jhaWVw4CwrDMTo37CWb4GfrWY3kMBRzpSZADSkU3B9GSWcAxF6FyVUpdrR8tSfNV",
  "key38": "4kuGLtuAufD2YCFUw1jWgLRvSsVPUqEyuCjwGCUXicWbo5fbia8HSKj1VQhDc4Z82QA3pHABeh9DYiqAyqqEh5C1",
  "key39": "49av1UF3Nqw7R4Dc4Q6onvJLuvqrDxZJxGe69G7HMe7VwEefR78zTin9fuUhcc9mu3SWpF3uZb2amaBrBRx16WSj",
  "key40": "5JBg2yb75LZoKeTTkWsD9GycRqMxozqf5tiR9qrRDTq5RqLsJRViRoA9Q2FAdyMgptzWNxaSxp48tBmDbMYSiq91",
  "key41": "2ajSb4rdKkMFoNvZwRBo8dWQ2hEcXXZQHbDeGuM98MMAFVCMaWYt3uW8ovLa5eiCpsvLub8Lid1TDG1CyKuNeBYq",
  "key42": "27Xy62Fcpi7tv29tq5u7HtATiv97Dj5XSV7eqF5vvX2W69o1sEgEkT2ouPpFDpTnCn2WzJuaZNahXDwikFMaAoU7",
  "key43": "2QPE6e1aXfPCxwbiGZcgzW1MWHfb2Gs8rRfn9uzXLPcXfUNYfpdrEhjRz2e4KPL842su9JgRcX4yBp7t8dGJeeyN",
  "key44": "5FbCDRHfDPZBHTdPqC2goqXGvwWjZvwdHEHWcPJb3UBjuvDj2b6P2eMkFBJSASGhD9mhYVK39xYynoMPEvbRfUxj",
  "key45": "2kmej94Y4SeziBAWekZDTESR32zGTGuxs27gEAjLDK27tQzJYcAEZHwPW13AqFjHZqKe3FTK4FN5qjVPKiokdX34",
  "key46": "5MrLz1MjKX5AALMPTLWbbesqSUzwY3rLfHBrStuFvGC6ZNbg8gTR7SRz8fkY1PKRHYEiXe1iQbeDcd77hSffxVD7",
  "key47": "4Tf1qnJoxuqARUXjXUQ2oo6H8wVjuAXiC7hRqMQBjQ5f2LFf46NyhEdckYP6TgbDvSpCvynMnkuFrw4i7cWjr1u8",
  "key48": "GABrTxaVPzihWfbG5Fhwou61C86jri9EWU5D9AFgnFnTUGBvM5TxQyWiWH7oe21cuBwxrvW4HUjtF3pgUmggXno",
  "key49": "66xcbZ7XkkQvGQHwCMzketwfrh5eiJTyF6nAqL8Nxd6NK6mnRcnhBTr1AAfta74n5yxnh7j35pgHei5nYdZi2RCU"
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

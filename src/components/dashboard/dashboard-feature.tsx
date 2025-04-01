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
    "4Dtbzo4kCFt3ytFUGz9hcVSBK1L4rJQDPi8WXnSUPMdBP3ho4ML2xFL2Rr2GpTdYgPBjn6ZY7AXEyeGyYo6VPtpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pakBUPkvYsKbrhFJPTiiCGQBZG1pMHBhh7XSWT55LKpVTzS8xCoB4Cd13Pu3s7MVnuTkUcLPLCBmi1ME5pZetKV",
  "key1": "28BxBmf6hzU24uE7TxAd9jE8EeowTn1po5zciamXatDY44E1t86VKPRHWtEPZmbsSwUnJkUDC3mrHUPLmaU9DzGa",
  "key2": "4tu8KkaqR7Uc1rA1QDZg25mXJu9om8ySpUM1U11SFYc2DejbRdhgYoRrAAH2GCWGoVXiksj8Thtgu4Z2ZfJPMPwV",
  "key3": "3cXkecxhUZFrPCByHRQn1M8bk6d5vzESLno8rJioZHA4ZAYKTaKN1M9zCL4bWCo4kLoD25E1escjgNLmqsSFyK77",
  "key4": "5VmyfHGEhL8kaNcxTgTyw7c9NQRjNa23LbCVxFBTKcWk8CDHM5Ccxy5m5BvvExiMfKsKSRCFTDX4pH7LdqdoJJWz",
  "key5": "2fNattnoXguNAazk3m2W2wbYTp1CLpD612cxkzhkpo4AqJtUoGHmzSjWLZDU6rBBSRkLKvJv8V2uzAUoYQsZzP19",
  "key6": "3TGbVMYLuNLF1sWnaybHS8heTdWrMAc76xnhaoCjsn1TpqeywnAKgStPskEyg27dR4XudaM4fesU4zahB3ebXawc",
  "key7": "5zRGqiPW1LdnwJAkSJFs3isbPG4ecgWWdm9iv5meRYHL92rkHFk7r7e5NevScKs6QkSsbJdNZHuMMovV39ZLZ1br",
  "key8": "4GGzn7rjEmPHaTFeuiNoJFf5XJteCk7gS3TBH9zG6t3GLgDvUTFYKVMANUQL8CE1gcvkCU5LmMUmDexFvGHnuGmC",
  "key9": "291omY4Jm4Ek7YNiFF3vq8ahxgnrDx44xVSdyWP7TauyQh1bEge4bbPzjLtrns56gJLxokc757aK6AUNhFUUpAS5",
  "key10": "5Hb5VhkZBvVptSxjCjtXkJPpEekGJgFoSr8VfRyySxRQzeb1H9mzM2uRrFNB7ohtPAwSJz2QMcB3yy2ze6F9QpkS",
  "key11": "35qoJHbAR29nHQ899mqqWqxpfENksuz48BvaehEWVjC94Aot7SyiuM6FjPTSv3TfxvFJQ41FAidaCDYFe5PmdiUT",
  "key12": "2kkZ5WjdsMGM9FXQ5XMT6KhJEfTSww2mEN5G6JJb5NMW8kiLTeJrN8Po6yT8oqTdMfn6Rfp76HJvrJZkmPS9Pfz",
  "key13": "3sZW8pKyqxzrSrT8pgqqvXa7BJAWFGX4M8WqE9zy5qcCdPxJDEnriRkFCjRW576E4rkXBWkUL8Qd2P2K4VkVhFr6",
  "key14": "5YVX9XwG878JZ2ynkxKmErbbpP9151A9xaGYj4SPnKgpNYHL4P7WkiHsbfDmJRcmYcB2AEJfGLWiptARAnqmpYxd",
  "key15": "HxqSvxKZ16yt6qZwT47kMVjrj7tQkFeRBthsCBfsDDwbUGcft6QTAq9ZYbXDRreEp2SesfAxRVTwxhM6cnFCmGC",
  "key16": "eHZgQwxYuLadSQb5DsmQq2gzfYbP7hXa1hjmkbiBzmBF5Uu3KCYexrqbTeV6Nps7AifnAkKmBXyhQUA4WC33HBm",
  "key17": "3vuL7YnY3ZVcDY3453R4jnZhNSkHLETPFjBKs5WEt8fQ93x2Z7YR2jxDLdrKshTxPBT9R1rLAuuLd1GkRwT4ihrY",
  "key18": "3NEZdF485XVCZNCmDbRo5mWcqyuY14E1A92UxrRk9bUcKbQhZUqwdMZboDRPLAB3AuviizYUsQAjyfQQ4YD8P7WL",
  "key19": "GeGu81uS9DbMaphkFz3yUSnoCi2fYttssmdqPNppJtxr82bPUjq7THUwtfWw3idugdxE3oxHXq2hH5i6DSQdSwz",
  "key20": "4cXnQwtkXHEqNsXTqMpnhdbPY3qKZ2uwZ2jtYwC6QfwQHefPKkGJsdiWYuUwLShyCDB7NWMXKk6nNFqbcSyUxQut",
  "key21": "3yfhpmTB8t5JHL85hjDL5NxXhdE8mACRcHm9xTkvREkmizWgFYTeBSJmSPVL4pSHLUdjDvviYT1kyvAA2b6c9ib3",
  "key22": "5KLXA8RkDWTBLgxCHnHAGyMsoxQHHNfbA966KgCiG1BKz8PFZgSFP6iDjxvcwKxu9TWA4PLvVUwHByaYuDg1H3oV",
  "key23": "4kYk3XRtMkdbVn3xKb5UHyDRwhxcVEuywhnF8b8NrDBy28eHaB28AT9QBTd3WgVVzwaNyrUafFGM3MnfXbwoFgRM",
  "key24": "65ocdeHd1yTDmR2qowUxXvYiX65qudTmcBh6Td6hn9daVE9iFWe8ZaXrSku9Fyrpd576QqQCXyq1KJJtDq24gGHj",
  "key25": "3XuWeuGHCqBULBmirophyVajnEkNKx8tBDGqzVi4SfQpyxD76D3pYQuzj3XxytbuT2oZuZs8Ph1zCZWvjPozzYu7",
  "key26": "232aW9G6AJe7NB8k7CDRHh9Lu2JioVRsLbchRoRy1KBwweypYNiQSErgJv7S4Qvk2veg8EwgjHJxo1q3j7j6oPsj",
  "key27": "22uHeCWoiLYTGB467HxX6NbhPJvM9VMsDfiiu27tisWzQhpuLYsdzBUTx7WpbW2fqbbTb95LiKZdMwXyUhchSmUC",
  "key28": "3AYzXS2HMnyBxWUkp8Aq1XiCWHQhRiV6dzZXSxLfPTU7kFSQnCLpuyRx1Wr75kwdmQke5XeUN1oaJdWfhAYbQtoN",
  "key29": "3sQMMy3254fukeh2rkod8Gfv1xvGVkfnwEas9rd9A8UBZtfKu1UBcmXYjLXjvYZdC9JBrz5tip93BnaBvvA67D4K",
  "key30": "3CtC8BoA98xQTJdLtKbqK9hAh1Y5t2ureamWaeUBLBA8oQR8hkQxLtsMnYfPLvYPrQNK9qfYdzauWHi4FBndpGar",
  "key31": "3KiQxFLS9aFrV2HHHaU9Y2JUojGVSYkCLURKBWRMFabFHHst5HCaU8iQRnyuxoALS6EjHht17yDJs4pxq2t1XTzS",
  "key32": "2AKu6C5T1Tussj84TP6fpkEg6Eb5m9o8A63yuGVh5DgtgHttqUAcVo6Mh7GsXnqjtva2z9HGaYKjc3xrvwAQtUrX",
  "key33": "61LX5AbHSaMZ3E3n32YrqVvJ5s4quMTk7eoBh986PHtTXgiJn2TJMRJZjzPmLFnrVGSGrZz86HdfKLkBgh6UBJdA",
  "key34": "oQ5F2KSCEs1WwXSGJRR5Noti9XApSVNBZwjuedov745DDbv8Kx4oqarYykaMgCgiJD6C3822vWHagcbQ6oFpXjr",
  "key35": "2Go3L6Eqyfekj6VMA7YbSyjjcJFRGrFjPe7XVdThtMkeRbivMsZaUsTsa5bvFXjvPYBHdfidH8fZncLifHYU7FFP",
  "key36": "hFT4P87JdE4gtaMvNApV8d19yVhLpD7UJwMKdi7fyPJiJACurEwuniyPyNTQCpNietvim4tfmj5vutnRnmnLrSD",
  "key37": "4zNifj69ijSgPsQzMejTEXXG88uHRdbzwywTPD8oCT4mE63cpdQw8gj3vzBHRH1Y96rBzNrfWEjeFxiCtnBfQo4E",
  "key38": "G5KZZcys65dAMSVR94kemajvLnsu77PX21qDez47s6Jzww2Xc5918wAMgfxJ6J1Pd46LQ7i3GKLmJn897Bzsh35",
  "key39": "3vYvWPmc66uhxkhtiBHk7bEmdaJQ3eenr8GeieuywE7bRTUeoAMR53M6rWt87Gxx9p9xfVPyjv77ChRtsDSJRQWv",
  "key40": "4TwMRKgJPfJp8Ur7C2fT3t43WUki4Mj5cSTBT6Ws2dQgczL3zUvs719WV9NgrT2scDx6EP8i7Qvk553TZycGoiv6"
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

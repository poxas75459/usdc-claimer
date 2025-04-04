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
    "3AkxaUdeFd8UD6MaeSjTiQkRSRJeVBPVPuEXFiNsZTQ4ftWbWPW4sna6CTWWJAgGkaASY2uAbZBKGmZbFFM9sE2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61eCZnjAKSpfuAiGDyHf7d56XQRDZc1D4CS2h5QZxWsKCbQk3sxz3CVESSiZ6YFqjV5qdPBE7RPXMBSDf1sEM8XM",
  "key1": "2NbiyTPywprwMx4knmhhFwSHhD34EBm2zCMyCyLTPmJpaMPbp7SA7JNMd29fNhvzcJ5Srykvuz2sUqVMB7VJf99W",
  "key2": "2jAi5r4WdW2fFvSC6onBgdVSSpehAq41fmUrfE9Kb7tzU76gM8AiVZNM88oJ1GtPo58Bp8LpPvkFWWXGKNHntioB",
  "key3": "56NR3wkZDDPE3P3AkVdYjaZzvnACtCyqH6YwKAUFuuzdWWD9MQSGvayVXon3a2DrrZ9RQRnSTU2CJuoS7Nn8ek7w",
  "key4": "3P8c7vwzHTyGzBwLK7XMFZ4vsBekvzoHdqpmSZ1tePusQ6S5vbVqWDCHzuqueKL1o8d4kUjpTMX4gDUVuhu7LMTD",
  "key5": "muqcgsysNhoSa6eDurKp6eZBWNCzXyPVApbVsjwSkczoUiKBVQ3yrHsTt6Y9ik3D32R4NxCFC6PAMFKbeuNtv5B",
  "key6": "DzjhvVwuckuxZEGBemFJWSYLKh3EQP4HL6YsHvYbKXdm5GJ7DMnVQMi4HEhwXSfs67i3UMnJAmuZfNsCwjXapGJ",
  "key7": "51EWgmQvMqPGTELxxPBvJnqM7oqqQLTtKo9vYmjamFDaWicSZne3UjfiTmbwrdbYXAE7i7Fhv55rjFEyXucqsadr",
  "key8": "4fgCudyEbbzntgdV2FTLTRLLBw9tE3oFCrL3Be6T8CYe8TWAHHXzuvEZ5uoEEzHscAKabT3VetL7bGYc4vuPybhD",
  "key9": "4pt2HDzJbuQ87mGpRorVXVhMDZVJbKUYs3tyUHujCMfWGEciaNciYvtBDurHJbHBa8UrxkrLSUoWbaFMHw1MU1rp",
  "key10": "5hn1mZWde4RZU3TZhsFPmE68DFUsT8tXuqByf63W7AYrxdpMebjuwomQEC3V5PVyq8Zk66frH9Hb4EwwMb2r3sRE",
  "key11": "5LUZmYyoR9fz6y3ijzWLJ2Qg17fmf2jwz8kbAYMrxtVBtKZRroeWxPTk7s9zuzVodr1EVxLkxx93A7jwmH3CjfYq",
  "key12": "2nRNCwF6EGUt6cX86ccBnoyW7bBTM1XmPYz7Rx5FXS2SzmTk6ycNXvUx8efbPQSv8PUT3obCodyAGC9Bh9Cd4Qh7",
  "key13": "3J4kQL4rnYaboFFDQF5RpPweJzHAFNTFKtJEzVD5HvnqfBFzzpA4uxf7zQm7UWnZNk4tHRcusLFckGmHjnB7gie8",
  "key14": "5yR5uAF8PHzzLoyz4mbpepo2kc9d4HPEKVQQZH92jdeEmTHTgdA74AEh527NT9ZSd93PUEUXAupaC1N8ypRthX78",
  "key15": "KJ3J7i6icqxyPN6smfPTT7KtJhqjpsKuekcjebLS7QM34KSRuARBBE8qft95PMMxyFZ6i8uc22yY9qt3V2LYcdZ",
  "key16": "xUtWzdmD8aaUFqKT4wV9mygJNSEuc7RtBCMLBQdApx5ySGjeUnL6GDzVNfgBv5PRWARi6WDXBUYiepqiYCferFP",
  "key17": "5js97RyWm63iXxGQm6ksxYzUJaXep2urui1sk493pt4bos7CXCL4q7JnHcqX1DPG5iG31xUHUaRzSHQz8Ne7vdjq",
  "key18": "2JwBqJiA1pNrymq6URXZwoDPnmxfVWYxtQhcok1y7GgQrRwYK3D51xhtJd5d6hoXeXEfhz5rmkdjDwdXiKnVkh32",
  "key19": "31XTAnWT97qFtWKQuyyGyanWGZQA5uwnuxDT4W5i9DwcRup964373soukLvCqQh75afjjVHiDpA7quen2eqM5qBC",
  "key20": "2fxr6fm7FkLjWLeHKCPWsRWxj5jnJLaaQm3ddgsQWcL5iDwbECDyeZZXpgRhvD9a3SpAvbNEvfiTaN74UzJNC2bY",
  "key21": "2bsiMVw9TxFMjgyh4hNAp7EfcmBvH3QfTyM44MeAedcK83tU5mSjbxXqmBXCNCQPuGDhLRydbPrMQcMh8Erp8PVj",
  "key22": "n7834TNZP4gkC8p2mLAAe4aDT1khNETGVN1JPyEDmDpivEwWkiJotyFDW2Kbd3TyxSQj65M5vfu8qQFRWJ6Bvnz",
  "key23": "3Y3M6szE9ZeevYyDEKN7UJkwxpUto4wRWLRXdhsMEdwKGce2uHVgitJop8pBqN7n1Cvmh9sj1sEKCGCxiGARtUS3",
  "key24": "3dqyhiVeyDXejqcgcPef3b9D3ySh9gPBTWqCyNDRvxGyWjrDWC8nq4NvcnDX3ogSCaZN2Yc77T98qp2Rug4iDLXt",
  "key25": "47xnvePucrhLet9NdFGjX1e4ALAbSdmXU7Nvy31i3usg8ZAbHtFgbGJ3eRBwCE7AHyozcoo9Pcp9Y3ABfJtLwTC8",
  "key26": "3Q9pH4ajvCmonFomauVQG5CF8BQW6mh9wXNF5pVYafjkfq8AdvxStV84pr1Hcb6LEfkJG3bS9mJggr7LYhMtMy4A",
  "key27": "2Fi9dHyhuUQXt4T4mxq2mc451Ffvp2VhzbBnShjsFqSxVe5Fxe6fpnpopBnuYLw3RCo8pH5vts8JGCWNbHvYyNN6",
  "key28": "4HemzqbcasDBbpAPNYnsUTZwpgrd1bPDhdkr7UACsTc2rNhRzHCAkWiFFpNujLxLoMiV4SqwdqARShzgAD4H1gzj",
  "key29": "3XoYXJmm63AjZpdYD89WpsWYKpbiN1SGMPQk1jCcbvATz5adER1mYYqTffTHJRVUpoXyt3xoh9nAPeQRhtVv9ADg",
  "key30": "31wegyCymp19FNKHe7DzfPuMG3LmojPd7kFXnMxfJgyLvbUgrfjShqioXX6fGcYL2UG9EQWbaSS8yA9gr2ZtztvE",
  "key31": "4aAQk1BSf2FwMgFeRdbjXNcyqVaiHpVwyhcbGqtX5XyrZFzzxA4kh5xRFyASs38hh37Pey199dwXUhocTM1HXsed",
  "key32": "3CHc43ba7TJPiwwb9D2j3jVQiKg4sAq8BpFp2yjaw5K2fbq3zCytZbDjPaGLtAGV71wugMn5BoBZ5PxMK35w8qz8",
  "key33": "3vGXhwoo5ASgUTQvsEqwvxYk744p6Ms3JnJDry6gdgRgKRdgjkpc8V4SgWAeLJTpFaQS7avbcQbLReHFnR2ZvpMZ",
  "key34": "zdAXcdHD7LEfm1GQxrmTYCpXZcusSs4ZJCFz9DjDuc4gfFRVBxxAsksozjmsUmaR4a2eyPCbFU5SNHkN16WT3Ad",
  "key35": "QrvwJy1FZ1G7ohXga4Zhs7Q5Z8yLn9xqgndzMZq5EXGab8ehfai1WT85KHBPr3mHE9zsDTaCd2btPT3WYtGrmuL",
  "key36": "4gaQKuThQfNg66rQuoQzfrPE3CgdCyywCwAWbpeGNDM2Ef9n8rAxgjpoeoqmjNvwgM7BbNQF7BqV2ZnL1dYDkT2w",
  "key37": "5RbtscNwjEuUmxg2fS4j9wPNPQe1N92bd5vEhhrYDqFbWdxPKnfbGJZz3mgAnTtdoy7iE1qkk3BECE2np5WC3kZA",
  "key38": "5c2zLJSQTRGbgfSNnKgVFGEBMZ9mJb25kcyqgZ1hs28mnqcf9gsxwbLoKYSs9ybx46rgrPwvDnRW2i3RW8rPT4iH",
  "key39": "4ByQSmHcZtv6YeHSU4x5EVM4i3KXtKhun2PVtPGN23bqrNmDJe612v7owTEeDRsr1wHX4eFZWLGY16N3E2DznVoD",
  "key40": "3fppBDk1aPaR7u1UPPtejhckWLWdupDrLN2pzZTxpZfSY7cXNgkX5uoo4sj78wqhnp6KbYQ6JzKuUqZQ73YnQe8d"
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

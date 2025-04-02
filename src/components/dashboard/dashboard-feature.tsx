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
    "2XE3dnDBmzaFiBKd73YwaF3WCk6Gq6D118atXrYjjpFEoQyqBRaZ9HDSgCfxn4i3DLEV8UHXv5BYUjUfcyTaBWZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9nXz5ncVEG4qEv3agP8h1hdb3jvs2oFJHQGHAyTxXgPNZ9U1Z31mmAZtB3NZWPT811f2sPJuFaNLPgQnBbc9ry",
  "key1": "3aHHnHCX6t1XAykELtDuW6ZmdPaZimxypqcqY5KGF7Myh17s7RKoZBsEHabPVaBctXw8H1zH2ABFc7XcSkB88HHi",
  "key2": "24Ri6mvcgzW38RPeZ3z1AYNQdttaGp4S6ATqJh6WLWbaEDYqeEWodtXzBKdKNhpHD8ejLesQSV9DvT1f9FXYHW68",
  "key3": "4HumnYKqBoApYLxEsX61KnCcX6FjDGG1zSKBbmtPsrT1v4cjkNRThrH6cjmCdMUrPtAY9ZqtNpvrQTBHzByykWYp",
  "key4": "4aRjCvFmYWcn3TTvHUSiRctC1dGK7Fzot2SutHpaUp7P3FUAk65chSn1AcbuMWqw97mLEStVa5MrXfQ4DdQZ9CRE",
  "key5": "5ZzPUsC5WqGPn25KkwSnquu6d8eWvVSA4wkuWFkv87V9ZKVtQ4yohgvRg34SWFWsc9FvPaV6sruigU4mYjyY1bPr",
  "key6": "2oYYgpPXDZd2e1FVGouDnHohv3MWx7wJrmBgcif2BZwzivrVUX6QAwjtxnkAy6ncuUPmDeL8MikujUrMxAvDxy6S",
  "key7": "4TA4dRr4sNaWG2rcn6Z9RU2eQCt44Zv56jSbHA6FwUZsoMX3yZk9Sdi4dr6xhXZWd4EWCAXs6do8RLAaDkYvJteG",
  "key8": "5ePgadHMzvPh7cad6ZxX9qzqQwAwCZUYAZmeg9PvXYHYZVmSbpvXVYRGt8ykgwgQL6SF3VWSmVDujYeQMv736Hyg",
  "key9": "212v2CDFPdGTWt1QHrmLVYhgYH9d3hr5XSXhirfrtr85oFm4Ty3mR3U7WxTHkn5X8p4SyeLs3ebcCRnMWXLi5j2b",
  "key10": "NTQqLjthfJnt3TEfheJruSLtuSzajy2Pjoqvt8LpAHocK8vePVrZBgYH5Gt1uCuf4a9C8VUGcCNRm4YLxM16gWT",
  "key11": "5uDhJwRy3TYYnkTrsiSgYJ8A5E7JGnHoktL4SDgW9aNoFLHeSryC6C7aU5kAEeB3LzhyBAgeD6mdfUoM1rLatt2G",
  "key12": "2bszYwYCykpqGu5MT9q1j8vbFrxQEZZLyXCCWXTYvE1xurVkmrWWCfeUQ777ivkvGKAC3PdMoR35R3gSb9Vt9Lsg",
  "key13": "Qcc3UPXDLTYS6P3KjTaL1e339rTcBNGGNJFaRKEGQbkLxZjJvnQouJDaXXA4SpDtQL7unKWmDuY9Yvfj9A6qJjo",
  "key14": "2nss9zr9DupL9fwgmYVsoXiGYrbUPURFfPUKq1NVmAZGpS9p1GYoueBLVfvYNApe7JuruCcPUZhDFSQZFmzeTSHD",
  "key15": "YQ2wCBimYyxE5CqG4WbSirVGrJyJYyYHyGEqskC7wPA9Y7WzCxhvh9sBVEwiGFhQLzjFEHJQz9HTmUWmfXh39zA",
  "key16": "4bHwfKJVFtp9SAQ84iaHjkW79TDn3jRA4b37CELtTLUCF8qYjzCEwb8wMPGZThD53na4P7fJcGaAn7qYPVCPNScT",
  "key17": "2oFXsfb3qTKatF61MepxuZfmhKZGqwcJjAs7GVQ6dZchXnCCc22BAFB1vz7fVCN7VzFBs6o4KQgofSGhBfGWyWNm",
  "key18": "4wZgDui4ZyyF3MziUVdFdeQz6wdAS3TQCj6xVJWvtedjxKYqJmcrBHgugu37qpHxaQ5i95e53nsmFS9TS4izgB2T",
  "key19": "4nNz5HfDtqEHiKXeuKhC2dfFVWaV9PeiyCuR2jukLXYunufcPxbESzYASSoWbRyw4nXjERL51zX2bMCn3vv1af3m",
  "key20": "3qhG89KNmqYFPBtGiqAF3dTbRxuoTfijTyUhf1JcLrEmxoAkM9XfWNhL12qAv8t6kV8A73wdF25SJPcdYsin2hf3",
  "key21": "5pPbsaBcUh3NBpdaPthTqwK3e97XWUNN2JQxWQhz6CHbA1kHKLgnRvoX8urktDKHtEAZ4iiLr5UrGPPt29gb9hfh",
  "key22": "4ojRiCVh7SwDeU9ZHfdg7oKqCM18fYbx8w97eqw1rkq6tmzi1Sm5F9Loxjvjv2mrUi6kg1R53EoyBS9C3FevZU8L",
  "key23": "3gdKWuux7fofBPzgd3oEkiyZqGw6wcjfrEWJ1K1Tuj75tmynYS6mshSqWt9jhsskum8vWTfaQsEBLzWe3jceqDEc",
  "key24": "82v5NJGogLnFLjvJq9KXkyrKUyQoixEHxx7nZbGt7LCKVwLJL2RFvBJ5D83DD4hWUWtygAzh3cNiWuF4zRsnhTo",
  "key25": "5Uozen6TnRgwUzkoLLBjY3qkoMFEdfsmaPHTp5kDLoL7w7vghA7nWnoF94YUgd2atKrRgnrdd42rYm4UqD9oAB3H",
  "key26": "2ywTVRBvEU1bjebijDyG8ent7EM1s6TFrcVDxx6VL6zAALQxfxe7SvvvPbEp7r5BzHz3xvjLDkNcMy9emzWLWiEv",
  "key27": "X1CG4bK3ur4K1AZX8LWkWr9TfDuJpEUHn7kR4TvyrQbaMSo9Tz57HvjdDydBGmYNj1MA4tMdWJBLCTwCRTjtH5x",
  "key28": "4oHGwWnsWD43EP46iK5jtzcVSjeWHpPQ9ErMpC6jYZRqKdYnvFwwfMtZwJ86FuJDjQxEacSf6zwdjp9umDg6w5yf",
  "key29": "3wcQxaX4XkcPbtJ89p8LgBwBKqFmSwTbSDRrFhVcJhuK17WEumsCmHrxGnDDTpHsJdifkAQWnW3rn99PPjN5728",
  "key30": "45wzNUopPWpEVEqk1dboub1huZQd955QLzz7SsY3qvDwvvRSbcAnjhApc19BNrsJWEfKC47pxJeqBuJmj8TMspDs",
  "key31": "w33VHV8iNjFqowNLCEiMFX5TdtE3cyXofMcGBpHw1gtMF292X69Upecc3kS5rpngUru4bh26U5G3JYR6Z1bbxW6",
  "key32": "2asFkGrc4Rv5kCWvcHSNE9QxdfPXrLGWwPqtDnNewH4BRRFmXPV9bpbyiRgWvYdfUVpkFSSwuTW6hUkYtxvbEVK4",
  "key33": "FGvcrHJ5mLRrsaTca9JWJKgDeLxftF3VmcKPyz2Z7Gc6947xjEarsiJC9W8m9Q25NW6TdcNQCMximXChgz61J5K",
  "key34": "2AvZZHD4ZQy2GnHYoGFEVnQEkjzUqvJXz3KrBBAxcxZUfEMKHphM8B7LYP6N4jb9LjMcd4Ai3GoKfZA3U3tgruKB",
  "key35": "3gGUVkd731tUL4zS9AHvJN3ch8R4VDAfu6nxHCnZpMCDYfMpJG6csSpW7yTvcj8Rpa4q4h88CNGj7UgzyWydqTmV",
  "key36": "28Y1gYUw2GFoccFeRTMTAGsk2C79Ws4avqwzNxAdYtbza9TLRLKv3CK1FtqQg4vyHjstZcB9BSVHcm9gai3VaucJ",
  "key37": "52kJjfgNepjfwJ74M4ZUoyv7BpkAVSBRfMHeDqu1TKpJ5AH1oJ9p2dKn5KD9VtjLVji3h8CSoUyUtjM8u5rYXWa8",
  "key38": "4KmGg9dVKqCWpn9Xshh8Lns1swbvfMqAD14UEeVH4WrnnLd6hqcj9tryWD51P1E2ScYuvaHS4U5xXS8uwWy4oinm",
  "key39": "5Ux7djwuxmBAkRVg1ufF9s6kaJhXm3VD1CRFxjTzSEkXUxaCLVJEeeZyQp2QhCu8t8EzEqc8KDsKDD6WfVAXwfki",
  "key40": "4cL65m46ToVyHhLxEmeZH5AtM82RbJP2TAu19hDstg2M9T58x8jsrtmWxQWo1Ypoe77WTH2XZuBWV9TZxwaZsMM4",
  "key41": "2zjPRQc6Agp9uFPJo9w87WEoFw9Se22J5pAbwznzeb5ZrnGowN6mBVZHF8N1tfJDzYhsmB2nAq9MSGyRSMgvDbad",
  "key42": "cUzmLuZC879epeGxRAtZwHnU4sbU2Li4a8m6W7jSA8u8sPHHFomaUUENoM32eDN8ph3LnJ7BWm3by72zsiBLJW2",
  "key43": "a77MmU9RbYwsZNV77xDDi7iHMWTGDKxuYp1aezBnLzox65typXdLAFQdLBdFFKkTydZiSDmmmiBYuV6HN9y67K3",
  "key44": "5rwW8Vi69invbXoupvxd9zJRfcj9UFTHZzZiZFcWQgdF4e1Ms2vsQ4TAtdLeqN45mH5Gkbv3xvfiWmUz7Sz8kczk",
  "key45": "33GRi9HUNUbNvtqpJ4BKsZNvYtbNTrCzn8vfuo9o7XvWs5fFmrsGrgQtbViEyhUEXhE58wSx6ZSucj1ZQB9RpeAG"
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

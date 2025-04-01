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
    "6EjT1iHErbJUjwSrDSGXf9Do3jDH9VcfWNyBHapQf2J2J39Pwocv97rMf2fXpbZXMezLnhvtchv8pBVh6xuFJTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h9PEdzdLTN7AhoGMvKU4hppsVQjk1Swsay1K2rn6XbZRgACcC8bpqCaiDAkiYA1HKiEmYKxfyjqWmAyW8siDCnd",
  "key1": "4K6gvS6GYp78RGMW1rqR19omAxFhz1BhD3fd3A9qV3VyJK8j7zBTuqwfYkLvt5ESK2G1gMqF7CNrW9s5TidDdxFQ",
  "key2": "CcfUZLgBNPmzCz8RzTt9qEzJXpyhPAVtxhJNaXcSpxgfGa1QTMrV9Ev16nBarLyFYcFAysHxxd6LEZDAGUwNsxZ",
  "key3": "5EVQXiSx9v2vXAouxhW2LLcD5Kgo7j1AwVKXV2sKhc8uLoHEVuJhKokpTJ8wWxjwz1xRqTDWrnJkK2jBnq3vNc9L",
  "key4": "63jAa1YZgk9RxqDM4u2sMqaEeUqDotubkqNtaXND2VfwE9HRpDTsiXRssV747SGrLsTiAVXUC7Zm8FF6g15rmAfr",
  "key5": "3VKnwtrurpuBFw5V8PCBvFurK9KNxiGr6RshsHc6j1aRrfhCBXqFAjDXMcSkw5vvtZ7xjC1ejPnMW1XYTnvTpYWU",
  "key6": "2ymQDFAd49XtKhVo73389dpK29uYViw9BSxeeMdLJErv4JBJAN7MxVPv27df2tnmL4wz9kDW977jyKiMRDxq9Wai",
  "key7": "5Eebj43X3fvTb2BoXiUgmr8KWgLfnYXwjaXFKa4TfgNcX2xMGoYpzYi1kwautyeDZ5pX4J5oYDnynU6KRFWeyJav",
  "key8": "42rLxth7vYAJxQ64B3RHrnbLmp74Cx7nbxx7eMaKAkDMusgr2vkx4UAzs8vJ85S3kZjJhxz7kh1q2gVTErgCSbuX",
  "key9": "5bkXpLS8vY5oMgehUT4q9rPhxjx6TdW17RwRK4P4H1Ks3dG4uboWVibzwWCRVQ7BZFEJeUk3x5k2Tg78zJig5vym",
  "key10": "3ivemLpuLEu8y9T6GRD2iSQfNKpUJ22K5moG7danVmzBuJpE1WHbkMEutMk8XjfMKqKjtijVLd2Wdj254cCoKwfP",
  "key11": "3LibuhbmBUkRyifdLgDX5sSrgHxsRETDHj9rQM8KKM4Zi6nyNDDaYLb7WxTBsZzQsAABFJFxdVrsJ4nTtUbX3EVa",
  "key12": "2dcq6WfRhw5RWPFhKw8RZNJLByBxsYjt6ByCmjT4m9HArPhL1aF7bSaEZuuWj9A4w3fUrDtk7EV5B5pYp5nNUyC4",
  "key13": "RmYZa39frkqWuWsgRwKPrtpvF5UScs1wN9PqY9mB5HRptLhKyENCyHeDUmGHKc5zfnZrt56vV5ctmxd5NARssPH",
  "key14": "ZYmVZUvtpUgJDbiMYjGudVxMQD5PWtmgBH6DcAHANwqp3uW22tnvqxuuW3zQbcbfpVbrEyWfPXbjesL7wPhRQpu",
  "key15": "4LfjXAP6mFGFzrc8ET4VZd2C27tXyaqViHvamSVSq3vbb8iSASV5biKjnQ3DZxJwtci7R74mvHtK6AZFRHvDE5Xw",
  "key16": "3MKrVQ86Fejf2ygnMytpKQHVdex1bxV3wZxVjYKeorqdq2iQe6BTXRgmPEiYG7vtxmY757YhFtJPHKpt5XMoXNLG",
  "key17": "4aXcsoRnwUCeascJYciqu8yCi2YoyjeU5dhf1UuNEm2wEGeaToux7v3Eowj76BWAYdqKtA9WduWpd6frKP9ygFEk",
  "key18": "5xqij9ScPCPG6AueaPTPCjAZ7s58UhUraDsL7MgDbdz91d1UKXhbREGaqtcpxzpFuGVNuap4oiyYdqvehMUwMW1a",
  "key19": "4DxdFWQ7FvYAcpoQdimudvakzpRP4165sM7U9VkjKAnVSDrQHRzAWvUeoqRGubvJPJgjAPUYHmiYPCcYnvrqf5M7",
  "key20": "3K4fG8geCQKXwiUZRE9T3EX1KfF93jKp3mDVPcLbWWnXcmGDhgEbrnnAwrH8eds4ZJE3fupa4NfK9Z3Z9HJJ6xT5",
  "key21": "2Dsz8uFPPFuy2Bvsq2WtQQWzNRfUqraEuTfe6gCbnWghGG1hQ1tZk4AUDB12E7LDqY7YX5hzsYxMpyUxdTcnRNLy",
  "key22": "2XRygMmP9ie98edraSn9PHAuNkHxN6HtUfLphuTKXmAqPxTiPDicgMtg6yyLXU8jX945iPcK5jzEqFYhdd8MEj9e",
  "key23": "3ofkcP1Jtf6sBNw5hGXxefrWhMwFbTr3XV3DPdFtWriiAtZ7ra5NjZsY9VEcgWBMUL6WqYXv21zjssvn6Dh9uZS9",
  "key24": "38NgjPioFJCEMdEjR7wYfR18gdz7j7jAkw2jZBffFdWVGgdeSLNzAVFautAk9N2we79NGRwVrZBpr6q4rFHBMtkZ",
  "key25": "3xyUMSjgxnF8pCToimVATjLMdrghB4HwHDg16T7odL4vJTbhHTjkA8mhg6DwRCL23Az1VbJrzjtFrXiAUJtXcNVL",
  "key26": "3HprJfigg58G8GFPRmWqJMAn78YCX2eyUGNDUbHozRzVqGwxtrUnRKrBYxFg7REWgKnJNDPGAMRPidaVbKx3b1fa",
  "key27": "4wAAJo3vVkBoKusCJEjGFnby4Cy9Pe5FJFji7tEZ718oWB2KbKTUzfon6K89pyiBGcQpx52UyuSiubkVH3tCfDdu",
  "key28": "iYQDqqGqY8gE5dhDPtt695DGgAW6Dx4SjESadHzBmJm97MeC1NPfDSbq7oHeZr2GSydzGvxHSYRJiMnydzSAtdi",
  "key29": "Ki5trJRKhc11tseEjnrFRS4QBar1XPByHJBNkJrAaBqWPGfJoJ2QdumuyzJRnzZjBf6NcrG7cRJqJ5NyRLY9VW1",
  "key30": "3mK5tYk2a4CQgB1kXc5tscZKg2cFyTWap77VPSKeLTGffQ4ghzJ1mAjewQrwXLJ5CXyyPuAVvLny1hJ6oTVJ5KNz",
  "key31": "4AQ3GwzFPZY1oesG21bTYR7axnGvPWkkg9p8NdqBYsDZXaAAJ2Hpepa4uxAziUc18BZehUDcCu76CWz58sMgP64q",
  "key32": "3eWKcMf5iQSAPvTq4TyxoTDuSqXW2kZpBhf7TQq1P7JN7R7piMshucEzffqvAGC1SZHP4mpMbToDuCgGsUiyKrm1",
  "key33": "2hnHH7zc6apWeu75RWxTpfGon1Tb9wmeFFXJdR8Kvn4UpHEZo7oCo2zHTX2ReDNxjQWwr8tnz64ARp71WnWfJxuF",
  "key34": "iXV6y2YuDZ9TLCu8NHRUt1EbGRJUwYspaQvcsi1hQJYFzDUJuBUV6BhhSX5JKd5wBCedTiRhHYYwV84NgKvgNDX",
  "key35": "5hzyWaHrruD3kkUzZvPhvSenqYmQF8jXiDn7H6n2X9Qz1gT8Xg4EhjBKxyGXpKDg28eaBqBTnCxN4RchfyBdSMCU",
  "key36": "5K1N4XhrdavhWLyb14qtaxGC7TkwzvLF8P523iJN3Hum43dTQCLyrzqM4W2gnkVGP4cspmkA9Xaiy9F6jqqW35Ht",
  "key37": "4tY5wbjSMqbvTknweU8aAbz18yZ1r3P19Bc7Qj2exbw8DoaFJL3xoeisuPU3Aqy1iAD6YzwtHdQe5GSgVCUpPQYh",
  "key38": "Qio3XXxduVA9sSa8ZcdeDcAHDutVGY96QzAn24814fHxwmhPZfrJc38PDBwauvv8PAHQwFUtn1Y2b9UuhbwoV9m",
  "key39": "eVD1MesK3CjeqjsJh7A9dN964ovXgRqcwHAJKjUerDqZgemNKNuJF1FsTk4tAxAHqthsChEqy5ozhm9xQMvF5Hk",
  "key40": "26UzPch3e35KNMA9RUSxfvwZn4qTbpHfbLfLpa7ZhBaEvXJeVVjJVgvh5iNoen8sP4qiuQvadBfQeBjD766Si6XQ",
  "key41": "aRRQTjHsP9r1WeyGuE192jZVq5KyzKCzs46C4Vezy7nQa9NxcjJJkMapGQDwLzJ967wwCooxfpLz65tcPQ7ZShq",
  "key42": "2gTd7aV2cJsoQCy54z3Y3c1x2ranEAALMbBogXZSiQv7eEhQdwmkZER18RKbJiTK8stZxsDfcgLMkdmyDMtbH1AS",
  "key43": "3eEqQobiyApnHZrgT7qhTav5g34hSF7p2iUEEVKk5SYpm3KFKe9wbY62iAUeb5qGUcu1rA7c1Xr32o8XuaCTLpj3",
  "key44": "5f5AaeoyGDtAG3Rk8V5ZdyaR9tMqmijtUrLata3BFH1wDemQ3ioTz74zKVMog4ZYBXVCngxPKvgpajbUmjrKhJnx",
  "key45": "3UUHpJSEJqcUWjhV6DWmMV2mpQHtvN73BYYgzgTrqrFePpGAxi7QrRuYudW6psVinxLuxqcn2fVWFREceja9jYQs",
  "key46": "5rqiLMPWZqQFEebNr2Yx1WrLs7xoG6QkeY5EfYF1oz5whEFjhzc2idnSRKcWTX5H2ixhMbqL81KDS2fnJzWgSxXx",
  "key47": "CYiiikuWx99HdrFCVEgxuNSHbUq7wtA2HmiiALQvscd8aTYzoBWu1BxdUgCi6bUFM3GudzuX2qsj2UiAxoGtLSB",
  "key48": "5FsYtjokfXckcEdazHQxzX7P2X4G2ZWz2ZSAp1ZHHMQLPqF65mSPPoMkrChiaHHGBzncVbbdDKdjso2Ri6fTi93v",
  "key49": "42Jb55oJQxRZZxRkzwvpQ8Lxi64SLv4eysbfiyKRMTf36RfCXfv9i9ptqwqA56nkSbxQg5TaJWAhG59zbmM6Jfzd"
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

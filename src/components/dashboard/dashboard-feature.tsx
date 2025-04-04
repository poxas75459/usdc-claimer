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
    "2UCWux9CHcozNgZ1TurSKf4qUMHotnJa7wBFksjWGj7i1jexWvBBZ42KawQbHgjj5cvANBDsDG1GLHnApTr9q9iz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UxJhDJmjx4Xmx6jpVT5hPwP8VbMDpFU2v7EGDAf1sHjXNf3xo6pWzUZj2oY71LrD5FKuW4yHsFZc1f8z14zXAvs",
  "key1": "2AUz53fNnnFBm1vw6QKrCnHPiTBbHxdQLETCnf9DxUoRmxjgJ9ofVoSo8Q1L6ptzwMtfE72GyCVBsKqE4VvYTbN2",
  "key2": "4JkxxLamFUrggYWHXu33qNyudWvR3YpLwZgdUmsvdjnDstuZT9UUMdAthoJ5io4BuunAdAtanWnLrinR5g24b67t",
  "key3": "5dVgKF6YDxPebBjcj22awMs5njWoNrLf89U6Ue1YPKjX5ZcLyEmvFHqSx5DvAMdDiQeVxfJ7fvSGcEfkaADopukk",
  "key4": "KCBCCSTAsrPYxqxr6CSYro1BpzshLyd3SsxzSkA7Xq3HWM842T1X9erMhesDLpCtzF7YgZ5KC6JqKbP4AaHiKy3",
  "key5": "2ENitX4Rbfve2vuhyAXP8w1NqGvL666AP9aHuugwK9prVp6LvKuBUeVdJArA9XrJqPvuv2WSkHZRXKLXBWBiH4WF",
  "key6": "4oSFtunjG5kkF3u115bLsY28CFh5sH6Hgz62gG9NFeT4xx6VrDCq92XRNFpykXgpcUZm8fhrWGjX1ThE7yL1PgLa",
  "key7": "3zguGRPUhDrx639bBrAJvB42rYgthiuwExnwGLCZoc6cfDpMw9T6Brf2CsJZCpeoCZdox9m9fKG7ju79CrxwNa65",
  "key8": "3CsWLok1tpQXt1v26xfar2DCguuNpu215a2gYEZzfQ3oLLYUH1GEDRoEPE6vMCuRERR1YFpX2sZjS7jx5GeSUGfx",
  "key9": "5sMwpHbuGc2oi932V9Rsu9pHxE5rHRc77jfASg3XDvsL9gPTFmLsfwtc1FuWBmJwnUWovnDusnncUBCNbkFE764X",
  "key10": "2hc8mPysdTiB6kA7c2RAEDXHM31tz7iyV732z1oPo1wHsp6nqT8Jq95bCVkfmoBkAPS32c7Vi41ti6HjweaHhfS5",
  "key11": "27twALqWnK5o69BTkpjwv4Mq815dcoNGe22BsyDQXaSCL8G1GJyQ5ziPrGKywVDLncHtr88ghKxxDwQDNpAiKKXW",
  "key12": "3iU5FMcCSN4MtqQQ63bqdyKBGbBjVFSaayXHUxEh6dVfk3fYngmiiNUsSJEyT5x5MzNXvquHt9GtNoE6u4bEYePf",
  "key13": "2sEqz4sNUnDw7kMhRFdVWjmbdVpKoBCKeEuhdVKKmD9RMzP5JZRugxp1YDP1Vw2P4mNt8czna7EKpqrpgHSSRfgL",
  "key14": "AD4YrmmBFksMZQvUv7wFzAB3C2FwcTwaJwSRriLTQ515JYbZmEPFUYeQv5CvPeSRuorL154gFBWxjf2Knk8LNR6",
  "key15": "EGPq1HVWC8ME61JFy4QykFydioB7XrSMwrC7xV3BDN3ZCkVF9pWAcFQUaAr322mU9JE8vqJWNTwH4ndeFMK3YuT",
  "key16": "2g88UacSR1UF6kUtmekWBAwZHJgLQRvgxsBVU5CQjnfvxXnQ7dMnr1o9T8BRXKFGPJFbNfyx1Patp9ZD9tdfpoQT",
  "key17": "VcsEfXNe62vgmzarHRUyvCxBG59BeR2CnZZH632b4cEgWCTmiKge1KcVUfUYRwEkcqNPhP83whzDmyZRcuUtnU8",
  "key18": "5qF9vDzE8k1hMCj3tKGRQ7NcYHEswD4ZnAqQvb5c6F1nkJJxgYxeMRKKwqaaoBsd59V1zM1w19YKwcrFvwFkdfEC",
  "key19": "3oRoVrb7niuLgqQZAAG36K6LKqdPpH932fMNPYcadETiUbWvfkM3DvgwrVo1rHLieHErM8XSjrhwiZBc8h2ZUgLP",
  "key20": "3uyUbj3MLjnuFUktuVAZ6wGURWMwqDqwEsLtSjDDJJmBWSYeRFG84z3rLpbBVtMAZq9qeKHzrfVGfUMANcq73Dqf",
  "key21": "4YKiaxEPdemZSaQDGPZ4MJ6ZdCRsfmE5MFJHT5KmhFQmbWojYHQuJP8tnKZjMwMUG7r7WB4QDZVRqvtE4iPau31",
  "key22": "5Wf2yA9XLvjzH736Aj5KV3ygG4UUULTwMn2AHDUTaBp2emjysfeZ1rQdE9RRX4fRNDu7qZtzFY8JpYP69qA2Bfsb",
  "key23": "5rHQXC43ddCoWpN2LkfyLeX5eeVQP2ZBJTMPmtaUPMkxgmsXs87DGrDWvk1y6qEJXaXuHeMe84J69QWvJC3JvSU",
  "key24": "3CB1LYyJbzkRiv3bVCXFcku7QUDBSgiVRvhxXkg7j39oRAPwoyRQxQoXQ1PHmyteM8KUJYXtm2fWkVV9MhtWFhgY",
  "key25": "2QcTqJVUooUgnKwbDuScWVmxFcyCUpRExAFNMbNzwkomMAsz5Y1AW5LxSLdMJdoYXSGdYzkTmS9eXTRaZUByQKer",
  "key26": "5XDaXMWqn1tv8TVF4qUkLXYDcFDDtcVmDjpySxrqHZpqJKqk6K7uVJpagSDro2bauc99hqHe1tuXvFQkJLb3hJAP",
  "key27": "4ppeyPm9UqwDTMYCw34cxcpzoHY9QcmVDTGamnKibPvGdnp6p3XwoZzEapBQMppopaZWokYE7cxb29MDmCDhUwQV",
  "key28": "k4Ks3QGxPVRK1wemcWmJbB2hRxLUAh21F5UB3KcpnSuH5STqnsfyHjX9peLXMaaTPECof5QLxD4ambU3hN7ptrj",
  "key29": "xJqtkNZ3jUtxmuf98YjMuAuo6kTc7pzELDu6WGeYzZbgVNUwDjTT4x1bWpjwPSYBCmNhAzCvL7pj1Ca8d3NM8dA",
  "key30": "5C6V9QQ3tCF5Rm7jKkFoPgeEEXyyjVyM9ziEjQRZ71zQTkmWJHBdvxK4ZXjKb4UUqy79zmhNeqSy75fyRGmP8wKd",
  "key31": "3vMqqmomoND8ke9FF8Yuvrb3RNZ2whc1uQVHZUuY8zRS67Cn5dkxvRK8zzKbJADaC2kX6cd7uHRKEGPqzyULsoUX",
  "key32": "2uzjydezsDhvGnWHAf882MXssQ8nrQtmVuhYjAQdxyZsf1Kk1rdKwdxHXjMoZswV6r8E2R56Kg8gK4kfDoq5WA13",
  "key33": "44jHDS5urGgnTi7McYUcPdAyrdbeTuMkPkS96b6LQSemLEEKEaA425YAojbx4FX6LF9YRQ4XYYf7BBGJAAAxVxBJ",
  "key34": "4zzJqDQbi7M6k2wRgPD7WUJnH4qsZxk1ocaFxG27bCUrUM5jBZggJu1LmHBYgPTcGrRSJhWUgMsFv2ZFmYBmpAVY",
  "key35": "EufHFo2RL7U6LQnFfHctjUQZLHGKMD1zANyTjKguYaMyQDjEvxZqjMWGiab4C6inMBjUCaGhK1YS4TaTvK3DeFq",
  "key36": "4wTd88kmFvuNShnP6CUFXXuHuhMEZkb815Uhgj3YTmVHbHybbDzCx4KcNCvT4mehnJPEMGGsEg59zyu9eXFJBHKb",
  "key37": "232WSEd1VN9Ecwhy3YKcRPbiNgEseJqutR9MqmuNT2HjAnvunN76YJvg1cnek53YLWqMJZrRkYLkfVFgnKFNAQPL",
  "key38": "2C85AemZso9E2HVdxV28SDb2nANxDPoVnbFgbJ4MKQLfacqS9yjDvqmvvc8eju8SVnaA69oAbhEMuAXm8Uvoi1Ce",
  "key39": "3ufNjCWDq7uaFEMyGLbPiidLBMaN9GnLMQanrydrpk4zeDpvvRiP6pFCBNmhoi8gUxeS9GSt4QxudCBzSEegDQqJ",
  "key40": "rPJwbu1Yfj7v3NWdYfRo9LW2zqzazayyjYrHrwr95ewFvYsdKU8SXKZP46NcaLUr63LqRh6Sd5VSdiRu1WFs8xn",
  "key41": "4c9sKo64y1TjTFcSbPPg8R3b1jiJiZhc641EsYWVxgBrBDMMDAwJCtdNK3vy6pggTk1MsjmiM2G7RtSxinMseC5y",
  "key42": "3vmPmW5nEDXDzuhbpZqXJK1daxUsNjTZahz3aWQYc3e6JeBhd7ty9kyWQMTvDYRRLefntSrDLPqbseBaim13M8QN",
  "key43": "3z94mbFJxMmANwJC61iUvkqGkyBSBGqPfcUqbSHVjnkVJYcnkpKXW9SqVKqdVqxwmYSZqkcCSSFAqELAPFeHtisT",
  "key44": "2NPzwbN2N297QVoCcUXWQMJv8AEprhy8sUrJRRfdLGWB8qwb6B5Q38mzFeaxQRVnnfeLupk2BX5zdAHca2jAcKCZ",
  "key45": "3cjvCsoSaud2dk7L6QgrW9STb8irMy9M7fUwvfi4KkgbX7x7aXScM41d6f178jQt1VegrKD2atBrYRPnYENDibzD",
  "key46": "452shGfxigscaDS7NtXeEN2aZvwmTyVsWvMCQm8x7eHDtBkPcQhNufCWtcbsxirqC1DjGkeMXJGjKR3JJjXTztQx",
  "key47": "5MuCRR3S8prJ92a7GavcMTD6R2L1w1ayTgqmqb9krusgNLgvkU6DiDD3rugAXyNwbMB9JwLQgbg3QaVo3M74pxx9",
  "key48": "3a4nQNrk8VY75mVv4FQR6fiBk7xdiSZCrqv19M7546LWrfzg7N2F5Du7m7Es5ZDyg2nwkxbqMkVPkBPPpTp3vJ5v"
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

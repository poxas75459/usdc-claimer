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
    "2h5aDovuvtiovu5EQcNcgW1rLB7uufhyioNa9dpPAGzeGU3tY3WDyJ5hEBtVsehjfxavsgsr7zQHd8nCqEnQSeCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgoKrficGo1V41nxqr5VUsyFYDjsub6G2jGpG6o3sZBW5pVKpEjNcykfZvdY21NQ38bQr4taJVWYxdnng4bNMuV",
  "key1": "4Y52LZZoQZExJp1PyxUFPZCNhA1XxajPEUMWxQv8hj4svYhTvUFFkQiSmpdFMVyg3W27SiWVWJrGWyqwkzjVTPBt",
  "key2": "3uXox6M8hiKhJ4TUs1GKH4SWjRaYo7C9dnuUYdgsCi1pXbiMXYqTom7LnzWMQJ3Ungv9XmPASkVQYCuyAaM6ZjtR",
  "key3": "6DMGoAgHRfqmGB9W4exUbAekCwbRncgX8Zjb9XgdLpuNAjkJPRmZWzWdUd24ejeqi7b8Fs1UcycEhvdaDhzr27L",
  "key4": "LevDnZcDheWqtvmdduQk8Q5Z1B2zEqPhLfdTGostph73f1W1PGTLPCyX33kuuxTYUEXgLdCqzQfurqgsMuYP4th",
  "key5": "bnTyCAzTAVHGD7Fp3iVFFNV2fi2t9bP3ruAvmwxuBL13NpeSuBk3SzoQXjTetNHD36PQWRhCKqnFDjaKW3nFtKx",
  "key6": "3KMmkRBQksX5uypxZ2h2AXcMChTbTLyuVzYyLga7gLGHY9DjsaQpcQnfzTqRGWmgd6hHhT3yMuACE6hLVtTNv9gZ",
  "key7": "4NUfP1fMe1xoFsQWsCWsMN3iNVia6eoMB7tBi6gv37TvMDrxcyBxtg6NMedrVR9pFEJ1E7DaDq2U4Um9FZoCTW9",
  "key8": "2g2nBBewztc5byhb78BSGY1TDCExG45jPry1PSwhpfm2GtoCNkpXMMThAGcepTftXct6EDtNvs5o6BQieiej7UkG",
  "key9": "4LYSihnXCiTArqpCZDD1LfhWVGSug26YRsFSAQN9nAskCKJiCqtJ3g11yjxTJhCRBXPtE2KLQjUPKmwR5vnnDWmP",
  "key10": "5GgAzTPeWWoaeXQLycaG9HRczjVFY7rcYWuWZ6VT4Hkxn55yocTkG89F5sw4Yirvqvcu5MEV93fJrTjeWazHHtXT",
  "key11": "4FzHcX611oAZC2jfxGs8XV9SQ7rN5b4i2jKGAw5CqJ8q2aP27fNuhNKA1HKnUtAGqvJqyGwUMMggsuPysRvuzh4w",
  "key12": "5g3zR1qSjry7EhaLyCnD8MBgaArUPkPYrrJxovvB4siNL7cfKL9kLsdUrg6yoiBZ59yWsuEBxaR511i2YGieP9Vc",
  "key13": "3GjdAsRohp749ybDPzRFC7YYTeLq6NAFtyVmjqtuECkDwmDXnvmxkqeJ28sFQ4qdVXibY5aR3faTCkS9ML59P8Mp",
  "key14": "3YnwdvTyfdeQP2VaUxwGNZtgPJ8nLfU6MKF2feN3f7kpaXQoJ8rfgjutAnRjFWaxj24vG4fdefAd1KmSBgZxnVha",
  "key15": "4fTAiZ5vdtVgtWFDDTCCm7QGEdeiU4LmjSuHf29PzMD5d9iSY4VgpiSJEEyyDHWScPjv44LxUcqNCWg9CEx6sfYE",
  "key16": "3G6gD2w2Gg4SKjAbLRr3botJiuHMbJfC831eZJZawWa79QCoVNaTgWsdJB9vQz6iEaioXMYrBauwmGQCY6FD4iKJ",
  "key17": "4zprZZ5mV5Ljm5YohQrsBupFs2Q4d1W9b8yW95rK85KhftwYRf6H6wadEuLwo2WUdvpYCeZ6Dw45LqLwjmsyZS2g",
  "key18": "5KASEzYaHWxVVrxUqGRrEJhLm1fjJ69sZU9juTnQH2qEdbftXP5qHJbTqWQduhkR5mZuYR8PnuUxT6JtLsQoQpum",
  "key19": "2EoSFPT6thenCrWjWhhY3hfdjGkhCY1NKh7YucUwyuzyawi7gBVw1odiJN6S6gNrafyxDiqm5WipyYFvam5qaorE",
  "key20": "4x3DS2Y4pJMhNM3aeiNCTJEYaAKKEZtJzG8WxbhVYC36PBPE4fxY8pQDZSTEiwnVV5G1S4VaygMbYBva82Pocotj",
  "key21": "4qxeZrELqA8k7yMQ7WjdDiuSTtTXaAotAtu1aLDBD8YT2srNfaBtXFXaxScGc5KmrZ4WjVNKf7Y68i1LzFyu1QtN",
  "key22": "txRRoTcKo6Fx4XT27QZSBBH4sZxMpQGq75piaZTEg4ZhPnN6N1QQSNa8rf3VvFEha3n2bPCraDqj8UHrk3Dx4Hk",
  "key23": "3cEmn5R4hke5vV4BdqfSNHrQaBkSyhwMArNeHZEwmndGV9G4kJNKcNJNgScegu2ZuTa3mR7xWix2xHr2YxbsKdJN",
  "key24": "4chZhQLuUHPnTGwBEDsjJdR55LGrJCkuEXiTA9PT21cufrwtXjayxUrSVC8tj8wU8zNrmyXrq1STPvrvveKtn1Kh",
  "key25": "5rgHFy2J9mrXxYjG91AEZQw4saEvcYrjKFxACBEAKWfRsqdqCcq6gQTHGqKMfXoKxVXmmnvmzrAYoaeJSpg9icWk",
  "key26": "43SgdHmo8tjxq6kF7itAijrvz4vacVewQr45UfFcp4w2TGezrVyN7MDHn75JnPoV1UsYKRyWwUw6D78NqDjRKDdC",
  "key27": "23eqAwPKPzdTJcZ2dh8d397Jj6MNjt5cHp7f6XZsezjEo12Si41nCG4eaHjRAvHWFZ5CVPayQHpdnRLfnHKYcTCA",
  "key28": "UP9ubQPACBcsLK3q7dJ9zHBpW3LadHm1Qb9R9gwSYhfHbtrFqHyXyoEq7huSTi6xP2yUizsPfcgb9Af5NbHhZK8",
  "key29": "2DeN3DKQR5Qa71KgBPPbA5v7T7N7pqbhZk5qYy2YG4t6U5uRycVMUoqsigmA3Bhjx3ki5yMKAwoWyitt8ceWVxVo",
  "key30": "2j6NwicKwwAAtp57euxHVfoGEUaqDHpdGzS2SoKovqk7j4ikSUG8weC2hAYmucna5xXFtZpCSsJm9sEa9LGtVmwo",
  "key31": "5GvFQuDXt4DCH2KwfzFmsiADsmvE3GpqUbquGySzSHR3wKeYgjuhRMCiN5PYsMhtrR7crXRGb5VaKHEogedW5Uem",
  "key32": "53QGAmE6Ew9dDUZyUCXJKZPsQCMWAfQwVWrcJ2E3kBoQ1QCfj7P3jHL2PcsPocWLvXn3zcurWeDzjsDjCUsJ7c4V",
  "key33": "3ncqNjR7Vmsf79Njcv6yzC7nJVmvL8WsQnRAgXBW38cjQzXSXSreGM4oPnJAHo2WCrncSu1cMZtioKmHrrZw9cYi",
  "key34": "5swTTXzQx76CET1cCTMJ5mKGe731jo61Si4Bdvd79xSVkAaXEr4Ks7c5jhPMV8534FvsGisP4yceHWrW9GLnG239",
  "key35": "3LfqTUBYZhC8mqNj8p3JyYQgHJFtJ7KmYvf3gtUqsFLsUgbrv4VVgTxYaNyqWxKA4sWJN3PLE3YaNAm89s8nksK2",
  "key36": "4twf9dpTvwcAoJvCP9rZLTntmRaVUxTcBkTYUMEc8aFNyQjwqLchj2B8ew1sNqCrkoyvuiRqtKrqHm61nVU9p6WS",
  "key37": "5hiddSWsHMbiiLiKCnkQpDrX2TnNqjKF2oYxWdmECNHHrhsDaq63C2v9xej6296mBmPDBwgiXtfrg6EN1q1uJfXR",
  "key38": "4U7BM377Aj6k5UNWgfs5ni9VCkz4fUSRYfbydm4e4oBBpJjrR6cBm9EYgAMY93BPcf1xVAwT2WpibXjJPPB4pD44",
  "key39": "62isxsWN3686PshNb6qv8xZJKiMYtUjxzAqz6t7CQgrCtQhuHGXPxwCBWujU2g91aEAj1MiPHKbQoS7m1z2tPcqB",
  "key40": "5VAo9P2uWe9qn6QCvR9raNs2eU2sWMZSf16vqo8ympxaTLrdB2vEJC1LW27xZnZ95SeqSefAxfhFYxte4gVqbj2H",
  "key41": "66HWFciANBKJKimGGskaTHNpoKhn7MSZQKKLnJExedhpkJobc5EyKATnHr9BNAn5sU184p3YebjTd7Cmn4sJwDRW",
  "key42": "wbpxCRE2ynDTMFzNdwTBiTmQBwoWPeUuriWLZuWo35JMvBSkCWFBkTutUh3sxj2CWTpjYCHX83HjsNZQQDihzFa",
  "key43": "PGH2A7L5aXbdSd2fXB59M4rbxQ6EHQ1QqcYwZiBPu65thZ1MHnUGxxF6dCcAZBBAeihJmPVZpgNMUZzUBxNSvez",
  "key44": "SZanoaUW9av2mp65UQMHn4kDyKvvPhW4zD1CtkqsqLEYhpGLJtLxpgrpsVKBLCCjskpWZ5omrfyZdPF85nzH1Cx",
  "key45": "2SEY276FqsFu7RyYzsVXHsGDEeVkq8XpFZiCP2i4a6utB7eLeY75cH4dJvf4WQne6HDKjAPSw4foHzXMnjjZMDvV"
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

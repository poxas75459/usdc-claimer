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
    "5FZ9XXk9T6sweZpnPSmABBebRF4Mxbrwumm2StnAma9pCNM9T5Fmqbcu32djzPtQqf4WWNkCn8bM7uVzuR85MYTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uFCWvi67be1aJXYc9btdEDqjDEd3UJE7yDMZGFpnQtfVkdRVtoKnm1mkL44sAG4QWpiP1EDv5TtHRvEzqsPkCw9",
  "key1": "5VUTEUQCXMHuvPHu8fXAVnDW8N7yCJdoQARgQ1mNgWjXPobnUaTiHz4fefBVAjj7k8STuwoujJuTXpNobvCsEMWm",
  "key2": "5MBmSYSMHP5tXM5DqS91K8ujoQ7XZes4sM4fVdScym8cS5zeRv7SVVTXiAunwyhvCmqat2scqhKJ3uoAXwbvY4n5",
  "key3": "5xifSYeDUAyGFY9Vtz2UcPmeYDwc63fny7wvSrikD2J3nYgj2aeCgxX6tSk9cQ4PGUwmjC48hNGj8nr6ssa71wna",
  "key4": "3zavWi9GsBXSCgANzweFkwieKC5uDb4zmCZzQvxkS3Y651fLJT4CscPvsg6nXx4mqcvjWFgfKBziB7drfb7n3gtD",
  "key5": "3wCCFHwy3jNsDXkk8XA36CsLs5mJnCFKKMYcxAWWDJPNmxPTGdYdXFYAjWq79RessWPXWdzwsBPfebAzR3itqgeK",
  "key6": "41SKzaQm9RRr3TeFBRejprb4Lf5RgmwNv1ZBU2qj9xqcVqWbNerT3pyJemjyLXcLUd2m7FEKYsGFLnhUzBtnrCi4",
  "key7": "37odiQKNfgchcAZ8H3shA8jXj7JcmoBeCjJKUTgsZs2XNFiVBWUNHuCrM9o37FSAhgwsdKxJfRMHeqad4QyKqsQA",
  "key8": "5RUAfMhsPPADbmsFj8y3PSrYr9KYNo8qYXS9SYx34gGEpsdLb78Ja9XBZcCZE6Pv3uDmTstG61bpfUFaGGPa2gQy",
  "key9": "5cLUeXuXWbEwDiB92JNyKaDN7rC5Rx3AhvN6C9xbeUVrR7HxS9HSgrsQRc72f8Esv2GQakMafDBDWknx5LCnGjpn",
  "key10": "RgdhqVzgpsHVwG1rgm5CpLhi2oP6wXG95RMbEVbCYjurt5BzSWbRVKK2kuFtd7MJgKebPbN9639nxDnRQWoeLwe",
  "key11": "4edWQ88yoEJ6Lc3gzJWonbWFAZikwG9nfUkxZvjPaA7cvosBCLkZQqqMP2kuiPSq4uZKSfmaFqDo6MiZfuFqyrrb",
  "key12": "3T8GsuPmiYjBhAKmk8nGhh2KNCSV6amLCN5V8PAP68JgpWCtCrTeGyhRjqJNJR8ojbAvH7FMYFnQbC8E3J67irmj",
  "key13": "45gfxEoEztzeF6noYUndy42yCL8X6u44k8iqZ2wtmuuhQQFuUcNT6Gb6bDg7Eonc1p1XXXv5cFpce6Yy2HWUtZ7o",
  "key14": "3J9h3KkCmuirwuBF56yj5CumCbVacgiTNcwHDnmqbqsPYsmDE8iGCDFDpGQYGpcRbUmMZ235d9zNyeRHgh9cM9Ba",
  "key15": "3uxii9E8cAY84EMHsAytFsQiikQurtb5YT58f9d7MKfC3UraAdR9eeHSdATThDQqVNwryZcVcp8DuR88hPHiSbnD",
  "key16": "2B4MXe7VyS9gkL7E6YM8KWdbVK9LgYVzWjzgTenZrCf91CK1gCuBCgr8NL3LW5iFHLAsC492BQWtvQopM37TdDQU",
  "key17": "3WBNkZrfvRmE2tXFDdUQRJnAwNeqqhLM4AJVsCcXaVFL9HbjztbqqW5MLhuB5GLi1uopYS3yHtjjRjopYEKgC179",
  "key18": "4KwzZGwanT7Tox44RyWo24udv55p82aonngwPsB4Mv4FqaZeTaNfwr8duJUULVnE6YMjHLWfgsZqWcPBCRktvPCo",
  "key19": "upaeNLuPSB3vzDkFF5h3oFgDx2qJHbEQaf3svcfsMuEtns54SM7kt3Q2qV9QeujekCtAuVgMuJWX7yAavmEsJsC",
  "key20": "g4ym3Yrhj4PTXfUoKckLzug8udSRiZA12nv6eL9J8EDvWwMSC6CPR2QjP3byuvcK2AApdZ3ATRX8QoSy8zfcrsK",
  "key21": "2CDYzdaYffBwzALQboN7pAGgBu22NYh9xp7yhVjrrnPn5AndnN2iY9bir6UcZqd6YhUGgX1jmcBL6tz5zVXr9iE6",
  "key22": "3iy3ftwQBjuyTtzjV1tAZRaTh6aLbEJoShjPWfNKzisYq2F1RDSuGVacTnut9MCRGpXL7tH5h1Nh2p4WrjZQKcFY",
  "key23": "frQss23fx2ABwRhjodMdGcukiD64cfrXDYc2RfupgFCiPefuVp9eEFvsvZ4rjMqazm7r5puo7J2qASsNf5ToKgv",
  "key24": "NwdtT2iBakpGKfPECZPLF16B6nZd1a1svgBBNDjGHpEY2QBcQwEPtCaDPJGBpyuUYrsu1hhBTEAmX5toTQ9DGue",
  "key25": "3UbZ2vFM4oupk3vfJstohqwP66myjMk6VByWTeNfLAj5mVtYFLp8DEH5zxVRgt6j1ph6uAKLEWcg5PEY4HPxPn6Q",
  "key26": "4iNZtsySLASt1h2qAMinV46tSLsrjp9NnkJpiHTAg5t27W185NhndEpQ7gPQzXeNgRLqDvzLCBJbZiypNY4d4NmK",
  "key27": "3xfLEYGZEe2GY4QDqW472kXohK8XfqBr4wFxKGvB2B9NppR3aWos9HDMUP9EVbJZwSDUU42bquyB1x7LBTUANhJ6",
  "key28": "Fv7G9KqkAGeUb68eyWUPpD2r58tdHmQJMEbYb6myM3zkdxunG4mtEDaZNXnubWF4KYRVUDEQS338udRqtcECMkx",
  "key29": "2L2Q7gXdMjiDCVDswfcQx1hVsGbWtYjrJfUpn7kwTYabZwaCRmSLAPBq4n81pkarPKw4K5eF54SYygYWbj1HMmbf",
  "key30": "4Qdif4cnnRT5YrURcM38AvrQAyJnvWt9wnG2dVyhQLs3YrUA6Vw1gsuR3GVSWs6DeZNTYYkvptw9eXyZDP7vMurC",
  "key31": "52gy95J23iBq1U2MwAMZsrox7GSRndnQenq4AsxKeUFLPKQX9P7Gg8Y4CyskE32rW9rir17EdKGVDfjk1smUGgif",
  "key32": "4DivDXhss8xJSj1uH4NJdCpmyJHDXch3g2FnkSRetiXi9RsKsdoN1GR1wfGZ7jFiUcUPRMyacx2d6NbfRu19EyZM",
  "key33": "5TbqcLmUpdSi3jsNoemCWA4y8ZTbiKfGRfcXKMEsRxc2Un4AjVHu4yAAiTUz3ssRKzMQD31unv24HExeYcsoCJE3",
  "key34": "2GUtCKx3mMD3YZtd6Pt482rjzxVSDKCrR9v99SXsLLrZbu8wgfTB36v3BwucwcC5rgEanbBA4ecoJLm9FRdMG63E",
  "key35": "2ZUN88FQP1AvPSASzpEuV16J5CM2HaEx3GxokhH7kZwaVdxpCnZ76DfuETdHPajQw4ZUT22wY4WQDETWZy43G66F",
  "key36": "64W84by2D1FUUw34m22CMW27M9zmPqTVEMbvxyKRaJ7yTsWuC5H4Cc4S9uAj6P7s3NFf59hHqtCTTpPtvrh8nwVx",
  "key37": "H6DbhdgEDXwtagBsCGHNuG3bHeeMEH4ucivDbB7LPUDYict5DLjSQYmF9UYepUTPhb39uq48hyf5rJgKjbTe9mY",
  "key38": "5PPksASnFRoZUqHRzV12YfvozDZ71Vzn89dgC5vgFbonfp8uwQGxsucJvpnDoxwWRpoU2fee6ZHfzDtsZGjFvp3t",
  "key39": "2ZsUzvFU2bvojsprbwCgkG3cajzpwjekYnnGpKfnigRzV4NogLureawP9XLCGKHxJjkNKrJwPhKBkkPHPJ4WV3Sm",
  "key40": "2DjiGYwcoPT7Z1eNf8Q9AWKu83d6rRm44CUbSFheQjofdSx7dDnGqaKemvLZZTQ5f2ZpDL7xKMnZZJPBBKXQwyNS",
  "key41": "5A5h1sp7zMHiZfw51V1F7Cq3rJgoAs6PdEfoetcGxY8qMqg6UL5uPsCGp3EFToLEJWH9XZtFoGpyQo8Vx1DBatnQ",
  "key42": "4JRMRcsw9XtP4385UJKcFaqzV8PEDbe18L5LfgNnnNgqEirQ8EFgAQFY2spTwBRaryPcaH6zq8M3m6Lh3u8EXczE",
  "key43": "3EKNVsSsgxtUmiAjgQ34ap1e6Ftb67KqUMYxYiX3cJ8KpygzmGzVMNG6X3m8rVwPoEjd8wccvNBSu7cWFxVxMNDh",
  "key44": "23PeBEBik5m2aSS21szKMdaHuRewMLEACCued5FcVDbZgGzXdsH3zkrUGTwsQDx3rvenDmxpQxrUaz5anE7gNsDa",
  "key45": "4TAJG5wM82eUYBCLrRmUcGuWzjsu7Nvfa5Asj38sRBqtV8pNJ7fwaVmUVBp971RcTPBBxMk1e3vZgKjrqX4NqL95",
  "key46": "2cjUMptKoW2STFLp3QnBe9D4buMzBCmPsP5ZcVBR2LSN6Ny1iibVT193uk47NucJHoJBLx3q4TwgGt2aispbkxQd",
  "key47": "3ETBJEKmJBbnWmoKw3BaN3uuoUZCnXZJ3az2aKRnyHK1iJo3ae1SzZHN89bWkDYqGvQJmtqAYYzY2e6htHW3ChRv",
  "key48": "4BJ3dj3irtEbvTxkF9ZzkX8YS4JoMrxrpxReeYtHZAKUp8ohkxGa3q4nPdFqZzNJ1DA67TyhU8m28HEm9j5s74F5"
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

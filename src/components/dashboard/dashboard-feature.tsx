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
    "5j567Uz51xwtgHZX1UVo7N6qZpBxKeUaH4RYLvdhD8X2Wv2tMGj6ZXHdfPmm56m7qyYvoTHQdhq8Q6a7S14FNVD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46V9uuNFEZfmiZkdVvWNyqUQqaahNDd8Vqfbe5oYxXgMfEQcEQ5bEHJZcGmYoZVjedngT5rA1GxRCwDbe1kSTn3x",
  "key1": "GfQY1mePfcUD9ZM5A2myUPY9iQdD88acLg6YXyT6pAfgS4ogX9AL6Sw3o1vwarB5HnbMcybbXDiTuFw1xvhEynV",
  "key2": "3SrvwvVnzNMyZxUseDZsupPcTpkrACrb5cV26MCv4wM6ueJ9e5VWam6EkaKUVaUDUiToiqHcB7nyfyDCigSpQWQa",
  "key3": "325ckZmCi1T2fGw9jFosvfSeCpe6kjttrevT4XKhsEBX3NbJHjiLxTvA9Px9QP2mRqeBBzWEDxS6Zo4kboBiW1uo",
  "key4": "2n6LUYUPAQym9tgFoVYxsd5sgBeeYnKsBW6Rey5RxnMk77DCCwgEQtfLHGdD2bpDwXCFKqaceVBq3ECYxv7UnDUa",
  "key5": "3uz5iq3oWEDt6nrM1CjBfgYyWtSfb6DPqGH3KCQ4QAK7vgMDYJiJg2FAZs7zsm6UuxzfLRCdBhfUC1R8x5Do1PnT",
  "key6": "3fRRw9RTjiDiRAqBCPJ4fJbJ4BK2dsVmfR4MZ5LJjB6MRRJtLmk1jJW6iVMGJpSsKUF3sYAL8oqqbkcW36yJ23MB",
  "key7": "2XT8xopJ835ZMJjp7RTzNZkSGzsiEXSaJZWrCE6YGYkapFkpwm5YRR8NpVoSam8C8L14Jd5d9aM8KvNwUhUNSwqE",
  "key8": "2dERy9Kmuy8GWkjB5jnnWaJYgm8DC2RaLNdzfVDgCMNksd2g9ZhTaD2sWAiLgRHcYHB7MTbRQSunq7usEfMgGx7Z",
  "key9": "2BrUasAJVvLgAAYBxtJc4rWi3ffF9gJW8BDBtVYKkXGecdKTEsVwkmDs7VLGygeV5iwhVEeQU5Uu4dgV3fuDycZJ",
  "key10": "5sWXHmcGypmRhpLEgjQftwTHqwWVdj2jESgqhpgGHPL6t4oFcp3vuzU4w5eo9cNPnUmNqg58eKRs9sPC4Z1CCGCw",
  "key11": "5PGjiaF1hYYBYbmcYMVq2Gbbu8Z9W9XepC7YaT49VshgnGqh58DqzW5criCiyGWTTKoGecXT2JS7uhGSNk9BGrQP",
  "key12": "3FSKESmS3VxppWTDEhMpd8kTieKTt27vD54G9awK7mo6NDWyn5iBiJZNCzfabkQ6Lp2FPYJXDD7xhMDLDq7HmBN4",
  "key13": "WxHJQFnWAYdFAG5KBkosDRpbutggpLhVazBip3Vka9GNE5JPKpLjJ4XCgDXt1VvFYffX4nE41g9n6Dtz8afWo6w",
  "key14": "5iWsYevBdBATNnFvygthWvXDFQpts4RNwHADAHYuSRmHw6qazt99mLw72NALXAE8iKCwHJJFteEZGVyDX5cnXiv",
  "key15": "4VUzCb2NDXb8PVFxKkRzgLwoe8AuksbHv7ZoHozABMnm7eCbPDLJZpdwutNRfYMMxnbeBkDaiXeUtR69UM6fuP9U",
  "key16": "2UpmpRBcVC3eN3n6FpwzJkBiDxUTWhb39tZcRE21GTVbTz8mHMm5gajBpMNCuvgwLxFqvWc31SNmNqjVkrW48GDy",
  "key17": "4FWNpNLzWkj8QUCmwweWbgxuLJmkCCC4n4EYHcxtQ5wfKLdwyHiqNLGJmV64RTVVBsvMKQCatrFKtNFtZ4QWLZb5",
  "key18": "3Ds7YEPeKc9QPNA5RaJsVFvza8avTpTc6q96Vru3oj1gcmKkhCSnWnDN2WkpzXnvSzNnoX2zQ92XqRoffVG99Jv",
  "key19": "42ioVAGK866wVqju2wjMvyMx8smvxjtzYBQzRzePPL5CZizedX5Rt8JqbNMsbgRgog1XSyKUKEHEnVTp9aMzsRAH",
  "key20": "3K6JEvqgP4Xn2Ji5ehq77A8SD2wMSXeaBH6fKRLgW3tK65PCXxKBBu8B7W11rZb4SiTtkW52VQn8Xy3Z8ADFYFEx",
  "key21": "2MLtva4zTdeRGwxNac4mz8sYMCUrYg5PNxgKnrtxxwHcNY2BrZx8XeXx8TLKi1M85w48FFgNi6LbutRqUACYnXtE",
  "key22": "3EpR74aoVARcYcTEr8H9PGs4vhuZRMxrTULaGJuNGgE2jY6xCys8Jq2Bt88j6DgzN9y3zSu4cKGdttWw8SSmTxE8",
  "key23": "i9Qiv1sbwmbPY4e1Jaaew8ZhWneBc9TuQh1WnNSaGdr2Y4SA27mpgjw7MdPVNFpmUBV4SgFs4JpMfu6ACn8FidE",
  "key24": "E1kvepPhjPW9WobdauBvYp6BtP3tPQJWzgjEUufgksjrPAj42beA3LPVCcksc8mdcWt8P5KbVUka8v1Bo156zD6",
  "key25": "3Gn2fbvE1jvPAkCg9DQ1R4h6WPRSGUFcvqQuTorEKQ5zL3VMmx3KdabaQXcKHpG7iUsHWNixUqvhUYTuPQRiUA1f",
  "key26": "DLYMDCnHzpmfL4ASP4FrkyD9devG7PCrTQx9UhLXAnXwopZz4bcajnjtLkvm8SaRpd5AdFw5xb6sYhyTQGsCVtr",
  "key27": "3jD31wY8btgazGbp3bmpLid4RZcXWYv5yrPWkWRmZx7etDaSicsANW6e74mEHatXyKC932U6R8THKYbHztJcRUyk",
  "key28": "2NwWzsBB1DJqBSp1pd9UcQ5Vxh5V5MnpM6KS8TU1atGrrVC93qNN8ZXKUL8xoxtzRdJAHR9MjzYNpiYnrJhn1bnf",
  "key29": "4CkvQY6He4EGtHYmw8P9G3V3SJu2Ejh7zA8HN5M7LrM4BBr8ejZ17Nzw9nhcqdKb48QmLx5DfujMrp7TqDrq4jrP",
  "key30": "2Td1Htdjn8oDQ93RvbRHEHf4KzZrbr9CZwJXPDFxFazcL1AbGMMoB9G3ZVjKUDNvwdEyghaxtAhRpmzJnApNFbAD",
  "key31": "4CcYYkGKDmZNqHj64ydNxnkYyszyRTDYDxbCuqxeym8HfdMi7Z1B4kTWgff8wBQCaT83RKSQDdNdaVFobSjfVDAf",
  "key32": "4vKQmRKPAnN2BmdgajKuE8A8xmUmJuW2wbc1ZQGrui4nH6UdLHYEpqcdVJwDqMMQzFWonW29ZcMbZe18jZPECFW8",
  "key33": "4EaEgJPs8mezfSNEBcMgt3SqUgTAgGYEmxTPy5d4Lgm7phkSC5UTDAdGxxQ9jkKX7m2PXECsquS6iJ6ft568ikCd",
  "key34": "472cRMmQcnYMxCTzxPLCYYkQqwUS715Mm6ixC9PM4VQa43dwfwRvgt61UQEnkZxXrxWu7UXrxc6PpusfMovSWGHP",
  "key35": "bXDdS8PM2Usppysw7aQjsFnE2wiBo9S4pPUF8JVHYHa8diSd1o9fKbyb3rjgQgk823rPj6YHrhWDavL8PboA7zv",
  "key36": "3rP6S4sPjfbEJjzw86qv4go1bMYmm4WW45aimXPvDXBcEVhtu24XC1M1TaaFRvVBgZ2JS8esehUgmSMfYKtSHxGc",
  "key37": "2wAb4TwvJnRVPgbV9YbGMR35hVhDB7ajqcU1oJwsgaHRFDmuV7ezCaJfd91yqVDe1t4t4BTbhUc3QPgD4LSTFjTt",
  "key38": "iZYTWNbzLdWMuyBnpBW78VDdL9E2L1RFpXkpHs78WU2zKrFox5uW6rcby1Xs7ptbz6t9vLQByh8UcLYqafMFApo",
  "key39": "3PCkycgtPzLMnwiPhX6wE7iqWZqTDm7Nf6t4nGWyCE8dzQi6BR79Tmer3eu7Xde587ngqLowLCwA6N4Kvz8TPApT"
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

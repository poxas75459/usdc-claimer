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
    "5rjFrezU2rgjXuwF6mbUHkEwb5Nw627BR8NuZSkhkCMqriGP3TztJioYyo4da8CSsSuENmLRUcYxzurj2uZk9NYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sNSqinxvy66fWtcP23WjBmDUJjC9gmaHxjYmkwJsgxXxQk5sEy1ktT8VhH2AiHgwdnLmCcN4JkJnoXYZfjavEgX",
  "key1": "2Zgy8pHBVpPNx6mDk5n713x6vnpUScBjBhdn2K99WJT4hKqq7aqnCiq6kj9mZUN5oKGCRB3d2R4CDLDQ71jTJrqu",
  "key2": "auZPNSfgKXeW7BAHHM4PQCvJkYnnSmq1U5ynGagU2Bx2z79r7w1T7BusrgF6coGebRaXsMW384dNLXYCec2cgxj",
  "key3": "2Uwm4uaTvHSMF3Ri7bzAYh8KnZoQZu9PsuwVABv7UqwDpSaTAarNCQuCCjL6XmanaucEMecUut9RXjdu2cg7dTkr",
  "key4": "5AB7E6mrUY66Gtrn7BvPHp3yZVZboaA9jXA23xhDujyBLvEG3KdQnMdZCLzUn34CuRafzv2YbC6aP2K4u5WPu5Fz",
  "key5": "38mewHjGTVaMt3VUHGkz17co7edwVXvPQKachPywNEoFHU1Tfm5AbwrLUd34t4Tigh96hZcmSZjigsVYcdjZtVbS",
  "key6": "H42QdSHJrMe8B5SGKoeHXGk75jPpmRVhFM9TkveAGJv3ZUbSJnX9BCHN8wm8XL4msgn83yxpWikWfkod9EpW7UQ",
  "key7": "2btz57VH4bxftJYXGpL6kX4HUEFEbVgF5A7nHKjVFScxwwcXZNXx6JQ1U2po2QcLDx45eqYxRRaU23MJQjnQjRDp",
  "key8": "3VtC7g9WibSRdazRC9Z4MmRQGDNu4dEKLt6PZnrk6JrX2AECCXGqaHvxs4XLuFccmxCcyM19Nkb47rmA4f6cy6bn",
  "key9": "4gWFqonF9zzDAgYUhZeMaAPezsB45A5ZPdLwJGJKhbvLo9kUWst4SdJyW9GHKfoNC4iVzusw2LgSZAWs4GVmN2rh",
  "key10": "Ao2ZUnwao2isD53KqCRxBfLoeJFXbeM9daxHHkYzhMotJDWXAK8WfSVocomrMz9udZnXBGDFpQTdiYv51TiVbZx",
  "key11": "5NuuXjYSLehtsvFiJH9yLXZZ8qW5Nyp5tJm97YK9gB71VWN5izr8sQVBGX2wbxC49ygDSJMhjnZAmtVUP8dboxhy",
  "key12": "3XxBqTRNA3Vma4rouiCCz5A6qRJ3BKfdgQFNhhx8yC1KxmSYNiFWdwKgKmXACAFGLU4mkJpiBngL5CerrAcNdaQz",
  "key13": "4bBnNU4awJiboB6M7JbvA6ACdWAsgG7dfQjqcJhpR8VWEXjLxGAyS5QrEEPG5pzxrHj2CdRLnkLQBSCkjNmPbH3c",
  "key14": "3FAyK2JKTba4fGNYxWxkZeq9PYaKx8s3qRAR37XLBVrVSgf3Y18gicJkkkfzsrBuhnMoNWoSSJCEeyggXvG5hQ1j",
  "key15": "5asVUF8bTfrkxVzg5cLG9k3xFfLjZfpnFw61eQz9SARnPrYucTwYr6UgkL6vBTE127eg3nTy8CErRLWMFpqQWcZB",
  "key16": "3xvQU3Mku883C2ir1wqs1vswWPpFXDfmVZKprbtwcK58oYBVgWZwJCbQLCwRRtUVukNv7ZVtRtYgSMMaGCZmWR3m",
  "key17": "4i99DZiqFXwzQSBWKDDRYdmFw8EBqqLddXqFQrsD42Xb3Bwu2fyR7aZyxHWqyv7jmeR7VizMbvqsQuXGAPiKreL",
  "key18": "4CatidV25BGrPuDKuxn9zLSDqZvfe5aKk5PjCz9p9BgakXcPc6kfJMYiEHvMwwLEB7MF3UggTTeVyq5UbvjV8d5Q",
  "key19": "oJpWkfaSaMH6A35G8YuT8htqq3zNadyDQREfRY6qV7gmf6hnYBMUd64DFKJtikafXQtAY2h9jRU4kKeAxYMDAqX",
  "key20": "34hPEFL21NEgYvGgYGPFEyyiXZhFY5bvBHYosWsZyDrkSW36sG7Cw96wTsDaaNBKPUKRCstb2v6wxhcCrUGuiVge",
  "key21": "4i5eFwfw1e9nVpjts2UJkAz3VkAtHSVryDkkb8QwcwsgvwcD5NXdokispdsPP246Y4Cs5j1dbt8ACyc2wuvVCoq2",
  "key22": "Tbvb8K9G6cuPwHXf3VayXqWjiXFAV3Lvx6QuPvEfyzdnoDPyJiv2ntkEThnfsZMXeUW2eXKptjJCEFLJiJqaL5g",
  "key23": "4M9L2Rjyr4Ef4wY8GiJkotshLYyp1fmygqzZy52HFj1MENTC3eaHhaSx2AFswm69pF5D6utyPxX257izzwDZrmZ9",
  "key24": "hkp5ByGJ6SmYdVVp1EynxVdzhxo8eGWZ34xuSe13RXeM1nggC7Hk7jXctUMzaT4BWLWgGMzqWbXj1SAXhSNqWdQ",
  "key25": "5y8AGTjNAUuFq2KsshfoyjKpBdZkoaHc3fYQRgcJvTkm2F8A1xzdxb9cafCwPeGAguNq5GE3yefcpk9ghLCMateF",
  "key26": "3LDXp6sXAykZZxXg4Sa2XShyZj6yPVTEnRL95DyKN12ozyubT9Hp3u33ZJYNAWA5hd2nGQvRgLWHQEDsbBrQ8HM3",
  "key27": "3NLxzb1HCuT52UKXSeNSrAYnphvhtpeDTVPCmgdTecPhC4FN6LYzqZw2Dqe6iR715GJCQKmHpNPJqgSyXd5tMVkw",
  "key28": "4A2CckfRLXPAeFbZx9MHaEKN7gVeBax2CvRnJGxzcquxmPhvkGx481ecGchzq9hCLs8gp9kSWKSSZM96WRqZwq9y",
  "key29": "3YBPBsKmfkZn3zhstweNwh9H6sxDUDQ8ebfcLBmb8pp7myoG3BMhL1rNMBUR88gV4SAFNDiG7cMAWQeqBAHXyRyN",
  "key30": "2VytiuFYNLRN3REGYbdWnDyUXYmjvKLJkYWTLmKpmHGZPWDddbWKCw9bSm9iCU75Zmsc5zaMj7nV49iHJsPhvU6A",
  "key31": "3m4iCvxBtU3ivBavr5Tr8j4F2kgDvwpvfiyijo1VqokgsVN8b1C4z464ayXU6Rh9Wynikm5Vgm8j76Ck8vMmmNyq",
  "key32": "2fWk23zkFsk2fZLS9Jy8ooCjpdi1Bi9nvzaWEEGJN9u9MbxvMURKtZcUin1FwZGsssAESptR3LLzFZyzbfWJqwy5",
  "key33": "3iDVVdbx4yWPDwNHezoiomP6T6aA93XySmbGwLo3CGNie9Pm5MpGAh9gLaPJhmMmkretGdHySQNrZezHeajc15j3",
  "key34": "CFTLmXaFg3soQQVMJuNVxbjRkneSjXL54m4QSW7VWWtpybu4o4nnJJHFkB7TRn78a8s8bhiqZ1D9AymRMniL1oH",
  "key35": "TsD1gcUacGvUjCrEbHUrcnfXqxdQiyEFh2toz9AukMspZ6CxaVDAPFtCkNzHNkZiLPUSrN3JoesFk8HBCwkjnsM",
  "key36": "2Df4pnZjtUk4RmMQkDi4uCGK7nuGNcTjvHf87iXcHCwoQZQyQ2FfdmN9rZUxwouASAUZtwb4wTsKoM7JizxjD7qt",
  "key37": "67iLhsjEnrnZKn7s8tQMqzBcQWVvcARJWfd4TeWirqSuyeF6d4BcsbY6kbqYwjau2E4rvRAjghiWtVsifhEx8yc4",
  "key38": "2wFmFVkxjnVur1jkCWZXKDCtdsTsBKCf7puB1JuXJ4SjiMtHe11HhjbkKkF4YMPT1G38HLZw2EGCYVYBAMdc6yCo",
  "key39": "3Bn9kYFXagV46wrxpdD8mDZ9vR8soRX1JcfThmBnbqLQTyWFtrBgTxYFJiWxAyHZyvKMUCGqebRiHw3APqmvjciN"
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

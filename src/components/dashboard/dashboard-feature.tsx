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
    "5s5CT8Bgozgu5BGvQGhbfYxpDuJ4KCPmjm1F9pnN3WXx2RXZyJu2YWpSfZ9Sh9b6FXDiUT7ziWeZvHrqY6ew5pF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LivwqhMQ3ndbnv2T8BVtusCzMEUPDUoMPbxyzYNqcN4RekBiTZX81HE8AoXNAoVFjgQiFSfpuQ1EonPyRYziVQf",
  "key1": "6jLLNGymKG3beBBKCW9ECbZqcBsVa375EagA7Hc6Tec5SjMv8iJ79wTfwucpHxjEUKFEfLiPe9BPaqHsDZavCZJ",
  "key2": "5AT3WCXpmQiY6gRg3UeNUoRgWEDUaBWMzyV5AUtNNTX65jvCyjAcSJvU7M3k7J9MaXXPYsjh2bmGpvhKKepPW9mi",
  "key3": "3kHcqDS2jCCPeGGAGcCQtBpapR2jbax9LciCJFZBk78WmRaDvkq56MaPPBtMEr68tPirz4DCUJL7t8hBqqx4s1v",
  "key4": "4Fwfqb6gPth7p1hcRrWbviA1PE1rHnCGG4QhsLaADh9PoQ761TaVks5GYVMEcbgm51mBvGbvw1Gp6xgZAWtzoovu",
  "key5": "5SSNKjpXba9ndL1pYTWfYpsi2XnJBqmDSMwAr8KXrb1FomFR7jqxuykXt29u1qHSHFV3rZDpsJGcrVTt4dhw8WDS",
  "key6": "yK9CW8hXKj8yT7HGDrUsvh59jznFvreXSPLCLqfzRHGiq1cqWPjXTPaL7uKGrqwmEdNkP3fSNPR7fLPEn9ayt9E",
  "key7": "3QRwzhgzPDtM1cZCT9i3hmNzsEsnc8t6LcD3nxgWytBRNydaHsaJnPCfW8KuXWRBQpyDVWFVC93dNXtuPj31nk2K",
  "key8": "3RqS3DZiJ53rSjt9oCGZ4tgjd84c1wADmjBzuAXKsiuUFZsgKR5kfH859BiPPY9Uth4PsAesSCzSokFwfmRj6s8i",
  "key9": "5ykYSTFxd72JirXrksMgsvMJCdmPnrrHkMrz8QnkwwMv4aNFvwF5vg4XDphKwEzZrQpknqSGzPsSDP5664YSoHa",
  "key10": "StdWxhkaCQo6CascZDoxwbDpoXodxBSRsWN9Y1dc8Ko1BiAEduXau6eYWRZAzSmr5uuZcpnyuXa9Yz5HcUnpPnk",
  "key11": "CxK4soUA6BUh745F6q46uELK8fPs5isBgrij5LkrWqZpPzqsTt3wqzqyugBZbLrNVBUK459TBoYtMyBiYL1xRNA",
  "key12": "243aU7grvRDnY4BdgwU7PsuF6oFUXZ16GAUtm9qpsG9yRy8kiE8sxA8U7tbbxCNFh87RX93W2ptwWnRny6G2rg7N",
  "key13": "3od54iJKW9bvnWUnLrH9WacZdmz3sc8zsNGHoQa36rvZUG7UtZ1MEZEQmhGDohceT85Bzt7d74zFZYXE9kyuSrCL",
  "key14": "65SvmTfAiP8hFLYsoPJQZDmY6qeifRfH8APzoRZ7gvot36SzqvJKpRKeUEmQMi7oirDkbtk8cTMdxNpxzgKLJ7oo",
  "key15": "3zFvVYxVqy1vwGDm1MEiqdeVn4WxDALCQPDEx3ftLsvBcAZLpEExaP9KbscPYaxLfjPhx26JxZoDztcFRyqLdCRa",
  "key16": "i38npoCJXLBMwf9Cd8yNKaUa95xA2mKoE7wTL26iqc68dtf5LivvsUQiUXGmx5qou9r4PmMqqNZpFGu47Ywcj2c",
  "key17": "21j68uvAj5gvxeeZBM9g8MVcV5emYSJCDS3jKyWXbddZYTmQQgZmaFSpLxV1yKvsndWntujTLHbjrZEwrcPzaSkb",
  "key18": "4M3TWkarD6HBzakHhd1kVUTqkEPKisiobNdrUUa18oLVYLEy6n2QB5ZYrYFhx5rtvsW2vT14aJKuB8fsV7nn3848",
  "key19": "287dzy1dASUUC6Vv1FPK1YVJRqUQSApNNvwYN8VLrobAPFNZmsEoaCQnR3J181CtvdQ2iWrsAbBYBpXeDxv2c7pL",
  "key20": "2xLdo7j3AG8JRqr1cqzzMFQ6VfBy4cKba81RHv3BotPkt4ao63C4K9q5guR1rb6BWDCXTfhbAnxrZheM4LaK7wbg",
  "key21": "3NKRfKt8DF96mePuCdYwronGewjpm6BhDmcWCwrjtFuGz7uiGrda3L7aWBbGXafrriYgw2EZSVNhcjCcro3RVWcZ",
  "key22": "HfJ3W5KkAEa2M3EQUvyrgXFcWfnsVaztHYf15UjGogcx6bPdQYd6Ckd5SpeV9L3URN7ZKDASMA3otMUn3HRAP6L",
  "key23": "3TDxjTjFvBh9ZRPDSNasVGsYuubTocMhyX9nRVJG2XoQHuqfh1oPRUxtyypoYsH5cJW7PhyxEegQkWAEfaEdmM25",
  "key24": "2HsPYM37eymYHWzKEPG6a6TiScRdmrjNAvbNvXyimspJ6Y619KBq18ygFDyhFB2ZCySPozDyngrxw4mCnxNHSSGw",
  "key25": "SPXbk3BF6Xdx9nGo8LrPiEZnvcTEcN48e4HBxoksKCbYauS5BFgK5kBMMtzH5uwvbR1bgiYJRNsFNvWko1cYV64",
  "key26": "3zEooFuGbrP4J1Es9JpZwi6f39LuvNHAR2mzYYDbQNkfisgntb78eDBaFmk8ynswtB13GLT8jWocy66AoKGWnr3h",
  "key27": "5DRWj8DeU99na6fosnXFVEgQ96SwkgsBb8ee8JhGF3hRev4LVDneuX7uRvHMUKBF2qqPrVSMkSBLTgEE1YAukR1F",
  "key28": "3HEwiDAcHaeMgbNdgrYgs93x8DK2AmKCGw6CVuLbN3MpJS1Uz225pahLYxeacaufQs3Ld2hBKky8S4pzjfN5vTGd",
  "key29": "4ENCbkrdZS2uLVxmgeWiH3MUSKtpzngR9SegBb454CcCvP4E2AwKqVJcqkrvyukNeTd5aDFs4LupPa6a5XodLS9Z",
  "key30": "5gY1HoCErzpme1nUk6c9pFnUAMA2XpQNr8WSYxdQywqhcQn8bYKYPeUUDodV5vbQUFbeuBm78TohtK4GEoNut7Hp",
  "key31": "4KyZcYdqUvhiYPN3FSAwNRRiUEDQ5FrkMwKnrbeYuNN17mQ1jFWgpK6hpEaQpGXYjbHXypEnpGtXh2zDr1KShG9Z",
  "key32": "5YQkSYdugFqUEdxXV9csKKFMNebdmeS1JDQGp9hCVuzL2L3XHb9AjYFogpJb9cp1bw1qLKGWjc9jRjxxmEoQVkLk",
  "key33": "2GUu6UKyNW6yB5XRRXydaP3TgLe9TEo7tFa3h9iPrtURw3Z5r3gE4kGYZui8tXK2J5AjHyUbsxfAXfhKr1vPa7HN",
  "key34": "2UixwoMnbnwQ3XkBtVak1TDofajcK54U9M1phhw1QqAtmyseMYhG392a5di4b1sFEaXj4xMFPnEWykJe5nCkQ8Rr",
  "key35": "2MhXzmdeDe3tDCZGet9bZwWcSipZ6Z81UtzwwBNDCMUXCTCF21xGuweFeNQaNk2a9nxshZgVjC554S1fQYzTd9jC",
  "key36": "3NaZEocmoV79mZLPFcLYCkF2NW3FDGEJwPymZs4eFdmrXbwTD9puXb1n7Z3FSCoPNKFnSAiN6hYkfXC99bST5Knt",
  "key37": "28sH9wHohrgruk1RVaWBxcnqLDvqSJkmjAxmoM5mBYrgPTmHJGVwaPaVWfiLeQyFo3ymH8D9CknCPc3DqsfRyL6D",
  "key38": "WeAuyoPgMV7271NYNvBndcpUEZ1Y3F8AYw3j97qSH8wFGy3Cg5SWvz9DxL6BDgPQwNUfMeH8NFxJVZSusk56hFB",
  "key39": "5a5uGSVrwBupPJ8MEC39qeyDWuQfCkraoadJ79hvXrD9vJnWApK7qrZtZxm7eaBzZZPY3wdwVvzJt6f3VPpZbqi3",
  "key40": "bKDNd2yCtjnvPaEHFYyWDvuc8z6ZePd7FgwN1P7gkUY4CMXbdifq96QxgTGRbcyajJBcQ65ju2NNQGbESJzpAnr"
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

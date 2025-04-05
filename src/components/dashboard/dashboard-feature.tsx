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
    "31XFgoRqdXczdMPq59NuUKX7MUxEdcW4wQanWizw3jARRMUzUDMRNKyVH5T17ozTAoMZdvkPHrcrTCVUQFcR2BxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zNoYNVdoWMLz73GXD3mfeHRaNv52Tv8FVKcNqxcJps3iCwKvc7kUTG2tDBrGVzwZP1fEdYZzefBPS2bkyT3kVHP",
  "key1": "4oEhVTD4cwrvQQTE2ZRG8GPVFrD5t59wwow4Rf4symHNwp1QYYj84iKytd88p7ytztuSi24xkcEMnwNi8BZtLkA7",
  "key2": "VaTAUCtYssQQmYsKZpWHoFg4gFnmEh91WfKw2qzzdGL2q5TYNvXGyzqLmAvQjMKZtFGxQYPYtJ18CJ5M3wcmW37",
  "key3": "538UpqeMLw6qbDLzikeYcF1nGnX8YrfLzKroYmjX9Wnz6AVL9YCrkY9zkZbWPNmit86bSCDuKoSzRVmKNmknuNSM",
  "key4": "4dnTuK4HfHeRKLFws8BAfQpwwUiVw1rddkLiSQBPpWxZfzLkJBR8CETHqsKCGEGP6GSRawv5gQaUzBUJPWR6YBie",
  "key5": "3hACfQFwEuR2s8Geg1GPh4wGopoYDQDE2sxC1YnwuEY9XzCnYuchZu3xGNsxyDPHa1L14XzKvCrBjvSZ8P6PjD4K",
  "key6": "YgrELELZRYE739SABC5q8qcPxXxuhh6PNhzNCwVyY51HihvJ5nba99cR65c6NkAGzdwxtFSu6kxpSUGzSSzzfTt",
  "key7": "wrPyAZPRdyYvkx7QWhqbA4w989CJqscmDf8GSyDppAeDYhYsLgeNLYbunGWdFTA8fbNcyvdyFm3Kf4AmSQRS1GS",
  "key8": "4aqSf9Rg4C4ffUTEz6cbdPu3DqEHCzFencNkSQKxGQth4UeRrPj9odHewKkth6X29DvUKVcuhzstCb5fG89rB9F1",
  "key9": "5FsqSWyy2ppJqGHpqZufA6MUcP47kH1WsVXvNbqfRYDPZqw6Sez8ymGBhwH9UzWD8HEh5UNFi7aC5QAZUbeZBME",
  "key10": "5XXyzQD5of3zgL29vCvKjqbvvAcsBxUdx2q4D2Hc8pcosWJgqKUMKU9pJHeLAftKKqeJ9imhkME8Zb2GixnrvJGN",
  "key11": "4kkXMxFr2bbFqRR2LPitvxEKZDQ8DSLLxEjCJCxRfHnQQioyzctjeG2KrmzvrrtikxKHCwMC7VePUjt1ppjma2s6",
  "key12": "LvtXgqmtXFVqmXT2Cp5jzuhDubFeyE4jbn6YReshKvzXC6TX4NEFYkk8bb8CnpX8kUqMtwt3btunJNRj2D78Xm2",
  "key13": "fGin4Y3B2RucBZTJauXBeuUiVMaf4Nvmm9Z4FyeaEaejgv9Ky79stkw2qQEJzxLhsubHxLqroXC3BoMXqEZ5EBK",
  "key14": "2dg2JAGDGpNMbu6ANrLNJNZ767KQMpu4ajiWDFGDnZiSGptNMTo9xxFAirix2FMNrhPYWHgfKYthixS3XiAXsJfn",
  "key15": "4xRFEHg8568PYSiL142W4VDQQZaTVGDm7BGgdTUeqs7y9xoXthfmVGuUXUJnSHRbk9AXfz8bKkvxPFYchZetkFkm",
  "key16": "3pVbTtitMDEMDQwrWcK634t2cQjmYG9PXQqpbEwf8auFnJo31Uc4G7D65DSjJDXi24v4xy8LEsRKbUwjweayfrLe",
  "key17": "3X7JSx881gCddsQnVoB3uMXnepPGuKuTjHXZdBs2uphchzrr1Co8XpS7WeWvgxpuxw7n5qRyEQXZteiA4fpFagC6",
  "key18": "493Y2EaQ8L3vugisWKddeS7QfFq7LEHGn9aEKidBJVTo6amTyN7VjohXWJnUEr11TvqRXSD8g4FrgtKYAE1JjHcy",
  "key19": "DHRjmL323TJ4YhTCCvmvUn3gEvvh2wdNf7jVWEVMSM4WDMgEXBQRrAQHeE6KK4yEGheVN5C9NaWyFYDtqoUSns7",
  "key20": "23D6bmeqZwwpvzoBxnFHXUL7GCHzBLGoYZ1izedvu4bijxJyZfZupGwx7XfrQ3r9YvdwpmwiDh4svfDnBpcwh1Hw",
  "key21": "2w9e4faZgkvZMFqmfa9WegkdUctYdTG7YinkLYQZGuMRC93p7Y3dwTSMRc8zLpS4enxFnfm6W5c8fZdKWABEhdHf",
  "key22": "sPbGcQim2HUp5Jx9VePBgRFGT4Znc4HNUkhmPjhnBGFrmXHMFkED1EEYUx8djW3k9CovB6aqjNxhzcSfHutWyLi",
  "key23": "5GmUGtem7NCZYBjaCYAJwcas1eWG5MaiZKkg1VAbRkdzhk38E1Cxaf56e5hoePVh1M5tas6YiH3p5HZDEqqGvBHb",
  "key24": "5ShUauCiYVyYzDtAZq2Fo8tUUjagr6A5yydq4d2oscVhfFV9nUZCPXAF5bDze4789go6awJ7iDy9TKwaNmVL7d1i",
  "key25": "5A1NRDMGxUpXwvwum5ZBDf7gEb6oQvwW27D2R272wo6Wrow57AGEuwLbPu8C6Dwz6axm37av6GeMGTwVhb4Em7K8",
  "key26": "5k28hDqfEQ1SqRDih9K8G79oAwqbce1o17Ds3Q36G3JChjwL2FqVJF9wdzHt1Vs6pqMgW5QHXo9qC5Qoiu1isn8J",
  "key27": "NdSgoX5MoVEXLsdeW5tJeh2KPfrCMFi89hf1EMTXpQwu5JrdHJ454vVK3cjLuzJxpxw4XfWuPx8JS3F2CqPRhEP",
  "key28": "52AMJLz1hS3MZymkzZFdPZ3PRkigPTT3WCtn8UURRAwfG1PKn15BW4GHSQBtxuqN14mFcLdKjsHcf4tXJRa48omH",
  "key29": "8taDf1x9BgTZear77Qe1hwewz9AXDv1n6d1wHwiQdqm9t3GKHKZMDm1ZVBuMmsoioeiHv6bY4kxo7GBgpsjJCXh",
  "key30": "3ZUynTEmLdN4EpP9aGyuWsHPC9PNM1KBfwEabKo8HTmoj1W3txmDgWWVizVZU5UXJcMBpJre2TrzpuTK1zy1dpHy",
  "key31": "4gNrxQ77gfHSyeG23puNAD5akNQY63r4d8Pud3eiWy43aXfmCsBq2u3cJT89a17ircrumupvngaFDsMCLjwGV1xt",
  "key32": "4rmTvzF4aB7kRBjzPe41YAvZt3j2GP2xHBPvz33vSYXeNnEZWRc3AbkLSFscNgTmE9j7iHc6VSs4ZkybbqTqe4RV",
  "key33": "3stEA6KxLj5n7xrsZsefF1RX4Zv6mVzZaoL4rHTSWBiuNM8seXTdLkZYHk3MR5WqUoV2GGon9Q711XZUgo82QE5R",
  "key34": "sZn1VHKXv5SeBgfU57qAdnuhFP64y1F36aqJCJDKN5MX2aJkUyjUTSCAUPGwp9QkneNDVgHhYqMbXnDyE4co6tA",
  "key35": "5NjAsAQqFWanfAPGrjgS1nQBReXFU4gJPUMHyhaXZBqf52XaqHn9wx3Eywex1ivvNVW72vvZ6rwYXxNGVg4bQs8L",
  "key36": "7p88hQx5oLcuonEAJXxarSi469Ey65Bj2Zj85McVFu2fcPk3nyQkzFxvF5R758EohMthxobABAHkiPKsK21zMtX",
  "key37": "ZJtVynAZUpGn6E7aPoRYv2ZVy4H9Y42k9oiABn5Kk5wQHZQsYeZwcANDLzWMKDnSZiSe5GbzeSedA1KY8oF8gW7",
  "key38": "66QV3N8yC66LvXXt9z4pkyynWrQqgBNYcpVerd7c3U7eTggSTarxubS4FiqFWQEwzNFuecjNSSm6k5rhZaDWSBCW",
  "key39": "3HYxxF3s6zot76WUgM1v1g2E45DV4SDYdT6Q3wWCJ456jfTLcB7WBehiC47H8A6LSuk7JmiTnuMihf1JTrDxct2R",
  "key40": "4atjU3bxMU6r6zTP65M1FGUD7JDZkQJQqRmGVBmYp3ujtEtg6GH1YaZhuTLYKGmPocS5QzkUrQfso4bWNgRkMijN"
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

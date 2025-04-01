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
    "2HrVu55tymcpnhKSTL7obwqTx13QZ71RzY6L7P1ZRkjq5e4SD5FV2TpZapmDi83aopf4yZLoeAE5KdQUTAcxWWUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cw7QbaRYqqTGt7yB1NJW6Bz2JWibrVbYbxUU3SRqfGd9mUSeZhf4UuhZHZGVMN3C7jFKeQEisSQEwgTc6zYzY3j",
  "key1": "3i8zi26M1VVmTESZUpiNdzBzjsAtwXYdW5fUWrGPLSJXDceVBfL1yD9rXSpr2EorhsK8Gk9aCnS8U2BAxgVZebZ3",
  "key2": "tXeXmU951U1ThMgBjENHhK3j6YVyDyk3CsWZWLGHeq2SR6Gf34S738SUp9HCBU9QwLSrjpMKrGWw2HD7b3pKLcS",
  "key3": "5vXpFs4qYGLi4JjCAx8BvkYqJfAHWhW6JbnCEYjfDojkakuwQRUDKeQ23rF4jQhEcnm4LJ3TYoTYhNtTFS5Y6C6a",
  "key4": "2AC6a1PxZRYbWgxMxa6pJuW6ar1pZUoQq8qUvTnSFe5QdU6x5uZZFCCaiHni1fL3b8BkCa6KR9MmNMMTSxV8Lpc2",
  "key5": "5Kb27wH75XX1Qm56k45WGhz5efZYmb5jx16VC7mLm188KC2J8xu31MwLJxM3Qn3jL4XVrqEDncBvkp39XvNe1xnT",
  "key6": "Nngpdpu5f78ycmzP7UWfu9aQW3GBs6iMDGLcCvPcL6FfKAr5rvE3VkLhyJDq38skatjcYMEDebqTKPZPhn6iC3X",
  "key7": "5an24rKPFtu6Et8ze8begrRAkqVPMGcEBT1C9MHcDB8EFqchStYGm3inUSHhmMaqdUM7s7h3tfbAqjQQiuhuPLYK",
  "key8": "3XQs2fo5sCLYHtWi1QXYHdcUMqqCmScoEKPwc2TUi89z2jTgLMf2ZLodmvNEiNNYetL6pnCNqmM3WqKGmzJGHcqk",
  "key9": "4YKMQNwDWGQFCbsuGDaPqhuEFRUN8TjJ4U9tMWFd2D6Uum75214G7Apik4iUJmUKdkwfc8KPLpmsgurmrRZ4LhxR",
  "key10": "4mnEGWH1cgCPcW7AA7CgQ9eEKDyZnoaMbG2UWnvpGPmxHwWmors5kmEP2NvoDFgp1cv1vCLn5khK3vTTy7rv5Gss",
  "key11": "YVpus5cfo6oo2iHF1jZjq2eA1ENXKszEzBs5yxTqvU2Tad4HqJLZvd2GTfFn7jQGfK6VWRaFivp5MN27TWinnkC",
  "key12": "PCxdxAg5bFfsCrLfe6GjkCmLz37wG8pogeGQ8NeKKcB6i6A2Tgn3ifFRkVipTVDnrQboyvhdkDyAKbfvh7HHFwa",
  "key13": "GsBrTSZNQrptXc4FLgemyMLLUNKJdQhe9Kd1vn1esAY1gB54RAPVk9zHoQmQKXQBrqiBfKmEC65YrJRYGShtjgE",
  "key14": "65ArsXdK7wMyohstt498R62kDimFNgpu2ygU3EX37hrk2RAMetDCeEmDPwDTiXtdU7y22svjVgzgxBPagkGcBj8i",
  "key15": "3sdQ3MgizPdSbEdpBf4twrECjhyKQyT6fmrSHu2QAb9Pu3heL4C3zkzEvALhfKqbcZrCxnJRAhpbnKqRKJp7HdXG",
  "key16": "xNLbRYeAqaMDyRPRZgWPX2hJbewb2EsUV4Gq8B6P9hS2bwQZd9pdLzGvkeVZHRACyYCydQ6recWZdwt1qSp9NXT",
  "key17": "2uVHQtEuEaktjQgZ669HusxMqUaahEp8yUTgJKUeEDje37SpBoe8mcHZuukijwPuSLFjXmGDUtfA6WcWg4MvAX5z",
  "key18": "4LWQ7FGhFsEYzCC7CZuFvyVM5SUoZ5gbrbQePrcXNg1oxs6MxnSsdLunpZqBFpoXby5tz4J38bNGeuzri3AwKUYB",
  "key19": "49dKU8TJjFTFA84tZZK1Umn4SPouTEHyh8KtAFhFskt94ft97ASA4FntwgKH6DfGMnkG6ARWPKfJadPhnuoJD2r1",
  "key20": "5UhyyLuXoVyYuzmfuUXifd1CPzFvWqCQPhmd7r6sZdetWzTj2D3sgeQENrZ1WBHfbZdHoQM9mEWWHwGifZwyrEdX",
  "key21": "3wmoAuVhZtE9mTawhMHoeGzG4eRrEkaAm3ZXrNr6CS2aceowpC5EwN9rV7eGsMiwVPATD6qRmxpQM15Su8jsBE8c",
  "key22": "4pVnjV2vbRwBzGbxa8WqDdZ1hGDW7Zzt6AAc63aPurKyqkme3M93BCE844g2FKyCRQYVWyK5SAmpZmthzQHHMaeg",
  "key23": "4WX95Rf1KFJ39rwBjMdrihtEZKED8LYaKDRXnCkpUgVj4QmzfsC8Z9wW15tM1PqmgkyFkdociZ9GqKvDajwSQvHS",
  "key24": "4Rx5fNo1wdGUS95gyJzy6xzbFqmVguoj6EeYiz9pBUNawCCpKpTHdQTXivDa4GyYgrpT2JHHqTXAvdUy9invcRVK",
  "key25": "3anPhzGdEZLedws6oCXt2sv11HXsmUHLjrcbYBeib22vZrDdwTNyMhJmSxwLFvbGCYTjrNSPBhKgUCVSks7VtD3p",
  "key26": "4KHxjQjg5v5rR2RiSmA3gc8scLXG85npqF6NeopwYithbxfo8K6A3yei1bPcNaWvxdPDsuxoUaDGYR6ziuJdDHzf",
  "key27": "34U7M4mXLCypXLuqWhz2JUy3BbjTcks7Pa9hgmK2iwx1yyZEiHsHnBDfpmpYQqqDkfNUcFYpAPqLrHi1yH8rLBBk",
  "key28": "rkhJXkWf3h7aJPG8qioiSPCasyk3EPznrVVgwMy1a59p47uaoAqUCYUfXyurMhSkHircRZwrvLuNe2HBB1ejqxJ",
  "key29": "44SVj5R63C5q6FT2BqAx5wiWnqkMn3BCVbnEnfNevuxSu88WixSicHhznP2NMQMtWJFDFzeJzDDNNYkp9tuGTaGo"
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

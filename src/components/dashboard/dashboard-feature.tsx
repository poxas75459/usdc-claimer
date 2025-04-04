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
    "4c2rtBbPZvk3rXT26WTMMaWRtG9Z2d8CVr8UuCi9bdgSLYzYDr3J5oDzU9B3kPb8sFirDbu6oyzVEJftsN9hmTKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56sspjbHdFwNJ9nSBjAKnWM8L1oj9pCk3yFmjqv73SyWRtGJ1RP55Vk8T3Htg4dq1JdDF7emButCrcppeb91ynyr",
  "key1": "65d5yQ6v47o2HCnfLB9RiwtXnoFVr5yDBfyXXy5GTFLgxiuDE6kBTmRZ9yxAFabgjcVxiam8hk8vjQ4hs7oM5378",
  "key2": "Wq5bXnf9DUy93ic1pFswzXQpGSHsasGqpo7c8UWMwv2ScjMwLMqiuuZKcuy8RMp6pXpSUpZvUuryVmTcgjLHTHR",
  "key3": "2GGBcKfDjWajLKHaCURfq5fSfdTznk41QTxsheswtKTeec3NQNAXBvaByTak7NWeybWpQyu69aiCgQ4rne8o1QDL",
  "key4": "5PVBLZRZuwbDAw7DFbqxzcx34FCPm81ewKQLzsBUwzbHZjxfbh9pugnSQ4rEMhrHdHgQjG9ucMM66HC6eaWFHZr7",
  "key5": "3SVmV5RL5CQUZQRfdYBHg49oZZHvXZMFS8ytGM2yETZViRGPF8DxT5769RmycaFGaaKJST4suxsc9Am5jRicCdGc",
  "key6": "41AWXCsYAu2yBFxM3eKfPLDAGTYYPP3wfVWAvj7eXRBeYBUKDnu94gnZiS856maDcSuXabmZxEp3XbNH1viGW3n3",
  "key7": "42jyYVu5KgqEKdCPCNAmHgv2948BaeCTaF6smr1PjrwTPFZkupGpDhQBXxHwCAMKrVkL3hapFaCjnpKxpj7PLUhF",
  "key8": "D8vtK1j4PXocEHyh8bdvNE7LcByHDNCSCg5GoEtDqC5PX8fj1FoD2DtWkwq9imYgprZEgLekQaUYbqFhjpLnZHv",
  "key9": "5FJALYo6Z8bj3L2ATFRxfZLcp1THBJXWsZ7qwhNY1DqUS9pPKr1F172Lhp2eBG3UiFgFqFsqbrDELNr7WgjUGhFw",
  "key10": "3GMVApxyRRdftawxubTYRA7TPi1zuuA5Se5zSsRMxfCxdioHZakBHdy3Vrva3J3p4QHpxHYttXdFRcFi1weatESS",
  "key11": "28on36KGj7Ujwb55pkVH9dN6H2tMyugZinQizeFo4XgCP742TxU27TJh38gAX5CQwdsdnFwnMKRxxQ5ZDJYNf6Jt",
  "key12": "Nw1x3T4gwRytkYBi9j5LQgArv7osVNqPmyHUoDYZUx1LgppdDSgwX6GESQUBwGzuN3WVZ5GSqqfsuQXPnBeNtGj",
  "key13": "5i5FsVikH5Ax3osvUJk7tkATzrR7fbtgfciMHo31rRgxjxUDkmzovL17238dnpTr9jxsXoHKznDJZwX7L2RcTFox",
  "key14": "2A5kKsLmv3zVjnS9jAJ2r7sMm3tNmS8ZD7GBkLcH7vwzdcPHsLg799pHC7oTiivNuGE8HHruo9fQ81q4ZQHW4HKf",
  "key15": "536bbW6rV7sps1TuFNgcAc4kJF7pb2z8dBdA2HsvHRXwkXgxjh97RHdgvqmarLBTFedfG7GHqDP9MV3PqgjXMJAg",
  "key16": "F5vuMVy1NoeFiMjTmxZPC7AD3Sh5A9zwyFV9e2ra4GhL3u1w2SizKVkJbXuMoM5fzu1eD3GLXtXp1zRo3kKiESb",
  "key17": "4yfKnfYijue2ynHf5PrsMtoNAa4dSkBkxToUD3ugLzKegj7VR9RJiWWLd3DpwRy8mnSg6om7QkHNWSpu9VYoraTi",
  "key18": "2yC6UhV8BEFd5QM4PEvn8xZoUh2mhsT8tMrBujLrkRc4FGDkP71z7t5XwpfCBAoBstJs4wmYd5fp9vH76RxV51p6",
  "key19": "63GrbWQudjN5CTcKUfF3negfLDqq5TMHHDEYbF4Jbywwds85BibDNdzTua6G41xawAF9oNoK7Nqc3qsGc3uVH1tH",
  "key20": "3SujDjTRRp3BXF6Xrmemk5a9hMTKkbw1ME9MYGDNox8QyB9gbzX811wiBR86M3t3FgnFEQ6MdMRSJ9frcZUhzruU",
  "key21": "52RN7QeSmSeHXRLRTDwCTGBYUvGEipZfaSSdn4aHtLeSU2cHnQhQcTjFpaPps7YYY4WgJBW224TJ1J8jhgM5qJDK",
  "key22": "21VfBTPM6kEUAPG1pbjz8syrozvPMPjQJ7eAreHaot6j9mFSz3dcBdzVayxPbHCoV4NnhwToWrwLiSGv5UEhsVVi",
  "key23": "248AbAQnQyuvJnynFKf1DskKTV8JX2jppKHaCCJmeBNws1dRxUbC2Fox3ftDujzpFmnBzQ2F32PATGHw65XPTsi9",
  "key24": "3YNXxiNsLC152Lok6Bv8VGE4irJqj8SifgTcy4EYKKXQMWDrbr7FJsKctRDwndXQ1DhdrhrAHjHxGVZmdAvFXeqy",
  "key25": "4VZmnFv32pWKr1YX8fnbuPAp3D5VfSyY3YZh1aSmvCoKyGn3vL8KR2XGAgZH778xhYoKXni6go12PKBmrY7aq12z",
  "key26": "UfznZqPiSMRMata7EenkbZvd2TApeUaNmarmZQxdbVTSK6Zji4nA6PFbbAwyiMufmjmAEzdg8HvmCSZxvu3F59f",
  "key27": "pxYPnxiSLiorprMUbA5ehijFdwrHJzKT8MCQx9JyxQJkb2JqzRAaWK3wKqZ3Fgs4VZZzHuG9sTGrP2NYFNRXWZX",
  "key28": "3PyGhLNid4FGzJHRrASUbtcgawhBTkBGJbCrye5p4oY8fEZjjpxefhcHWvKk6wocYkdjE9DtPim3BczfFsAZdJX5",
  "key29": "uXSwfy35DbJNrNuVK5P2dg9LtqR9bhW8wrRGUjuqbUx8biYP3Uqj4ZsG64rJPhBvumS6RZdSfZeJvMgZxxhUrux",
  "key30": "5p3AU8mAQUAvw4xR43mfg4LwRfu3sCQHPK5mP7VXo2UQD386okQiRDcFEZ2hLRKKE57QGci4hgFJNHm6aNqJATDy",
  "key31": "5QkUmmxJpDy4MRXkRZoGLgpUAktXyWML3S6WNGgFr1tMt6y2rxeDcU4LKds2eR6BJask2fVhz16FakbxvQabDrPp",
  "key32": "3KWyVjpouEmcMVHaQyhYVuMJ62dwwZRxuAWJ7MYpbNHoHxUjmz3Z4Dpbq31pnS1A7Fc4jKqdqEMgYHZzuoDQq5sp",
  "key33": "5N5F7Z11SPHjp5HqS4DLqmJPdVreXaMbnyTnsxW8sqvUu4xJ1NNJotzs6JfvEGxD25gms3oHFtNbnuHqkoChKCNc",
  "key34": "3eyjrwzEgrUCvmGLbWtZB748DHBhGJr38AwXW8B9pXBABzf1753KVyjhwASaYK88fz8kSWAFrSzz1hyADqvJk5fk",
  "key35": "2tkFkQTfEVYwd44FFhbEpyYSce7pyBoNRmhejrVKcUHpyJsnhU6ykuLNtMbECAZTndcqwmxUw1ndmoJSp85yCihv",
  "key36": "BgU12xaofE9eajvPh3vaKrqhuPg8PsVD4SKJXFPaQab1BYELBdwaNBNCNyFagddzeGpbsxLnhahRpwtYRn7AGMn",
  "key37": "5hsMxq4BQH8sPP464EhL9FMkMyaShpBTD9pde6knXHZsEZEco9eFU8vYv9do2QJi8gQLFipeYbzHqvCXYLC8csqR",
  "key38": "3xTt9yUCKKA8hL7r2sRcZVYCVXutDNpZ6Mcq5ceXTZPkEfkhGLogepzawuDwiHTKzi9HcD2FLxqZZh6454WQmhAa",
  "key39": "2yPLaSrv4iaevCoarRT9Pg3PWq4jHXBHUyTMgFQKWAMovc5PXBaNETAZLJZRJ9Pm3nkfcQ1JL7DhSUfJdPnuDUJr",
  "key40": "3LcUSdK5tCu8PYrMH969mZGrqDVtmN4ncpqCS1PJf4SDL3ZHKheeon4gTkyST6rgPEuhHzicz5Xjy2KT2vjA5YT1",
  "key41": "2qLBrjn9gwteKXAFVfmZCp7eB7M2MuhmrFp2Cyzg9BLUwRGat8uT8uWLiPJ27uAHkDhQY1D6iXzVFZqtWPbR26YR",
  "key42": "5p2iu79BSjY1rK2WRrWqgUULxzJgE5bKUXppAhUinDNGpugFEBZDLkLCb662cfTVAQKm9evR2MRyx6h89B9wF6Gd"
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

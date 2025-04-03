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
    "5UnmfdD7Qh9u84u4e8s2WVGyUBu3TD3QqhsqREhGfndDqGeSqxkuchKcCTXwDCR1jKJFqiDiy6pYgubALZefFCYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CpidLFuKk1T8qLPX1AarXGcrCFd47vBiJRaUsz8PKnMca35wqCQpFrQPQFkNNEHcSFRoDtfxyVmyQCBpX41J6m4",
  "key1": "5avesHL5ppLWGG8zg1VSsYvt7AHV7RuMpNR9kFf5xC5DPegEUwbt3nGbYgJQ7jga2pECFRBDdTbYjjxLLePzuvRf",
  "key2": "2GMJq2TQ2PwDViiWisyTk8qhBbYDj2Bba97YhxorFKnwWjQnHSxNwFwBYBsowWsadLLtXCcxu6Zm3wfhthUB3jWr",
  "key3": "3ses28kSJ1kVQ8YF8NgRWjx7eLgXTbtaQh78gGQTr5ZQesnjr43WFrckw3Cy7dioJuB76RGVQhMgKiQVMTgjCfXm",
  "key4": "4hwRMVf8bRZMwGABicAcvvcveVxdRGZQGVfxGNgX9RgRRJg7E1S8SEyX33KgpGMr4z6y73iF2WM5FnWTy53s4dF3",
  "key5": "5hJTmRuCgNjYaFPgfYXe9nfUDgmCSyb8H7E6moEjZXUFSFC2211uE7orsTHCZDcnUpPkx4s6xtA9mb8kFQfuhoEi",
  "key6": "4AVjXGze1VCjapcgKLemHxEf7RavuhbSKeM6bLcypbTAmaKNksAsBnfN72SbFxc6uusX41oQVFKAyYxZUzHz6W8V",
  "key7": "61t7JNqCfjQfQXXJdp5iHjLNutr1kEcxDmMCpBM3xqNCkvxFGCTe1omVQwXgT4WmCs9QqcGcEtbx3hgRcFtjrFMu",
  "key8": "XQm8ubuokKsmxrE7iZiEdWVJS73RVqYRRpde5ohSbSDGmHGXRqM2d2XYiQfWGw4T3BX6wWXb5mbbvysxhtEwB6g",
  "key9": "4XMrEWnE7JZboLvf8ZH87oDDXg9GpSttsPWkSETm5Bb43oCeRrdb64p6btsjnnYazJG8kW6BrFNLRJWwJZ6TB9a1",
  "key10": "3JK1fPMqiKfkoR5PHXGWt3Wi4KTEpwHtgTmhd1Qe8muyJSESV5P3nWEDPsALPM85zd98sBETXVB2oJMpLC4Pfc7m",
  "key11": "FgEEkb9nsDfMDxZNUm7fzq93Ji68JtB9Dc3ZLTiKF3BuxyDdCiwLx9YmgE7vrNs8EwUnQ19mpysuXokdURp3CCN",
  "key12": "4SBTDH3rwaadJJ3bMDm4mXYAtFfigjGZrxhffPS6t4dscuw6r7GcGbvawRjXPvGmwCWNgzy1dCvKJ71JEtUXH5Mk",
  "key13": "2yJz4TGYSw7pf77KDswXMSLc7tFrEE1G4yFnFuAFhv82s3TvnbRvzyvjoAiPi8zHtnwVeBMndHsjDHpjHa96YX3Q",
  "key14": "2f2eNjVHiaqEpVBAb78S8ketMGnN8ev9QJqkBxmfdBfM97z2dms9Dur9aXN9pZCQ1Vt2riXKg7ZGoL1cqL6wZwuf",
  "key15": "33iti2Urp1HAcXNBZmW2Ppga3TpapkE4ooryR7RspEggced8vzeDiufxiHdKtTd9MHoW2Cgfsdoknjeh4CrBPw7i",
  "key16": "5wNHk1n9ezxib1W7P38DFpSMGZRACuizctJBoR8MvxCNL45ehmiWjs8LYD7EdjBRvhnv9vbhv56avboHAQEYjFuc",
  "key17": "3ihoWjDiCFkKfe6FFi6KfxcW55wekRiaJ6mFj7TTByQB5grG8Utm35CwyPRcs7esk8KcPa1SrfxTzZwJTc5KTaii",
  "key18": "5n6YEBFPdaUJ9ewYspbjiZCPKTQWNWCXNfLyWio8KnGRqnNCUSnMgw1AFMXWdfuJ28m9vtiwJagXqhaC5dtbuuzv",
  "key19": "rgeJ1Zv9FTBCNoHVzs2ity2kG5RB7v7r97Chbo5zfW4mnD8PRVskwLdYrcYFGkJiF3v27dFHChuc86JVkCENiTG",
  "key20": "5aiHVdJnwhyaFR889dKcJg5wTDZwVvS6JPjQvz7Swg5ZHHDbEEtsENBZJrykfa7qrfqde67Yb2x8rbW3LuuffZiy",
  "key21": "5egFAAJxvyWtHAvtFcEh1hvbiyk2KEUr7JUCBSB2WJvD73Tdtu8ZqZR35sGGrgFssakXzQjgiHYU1pX9Y8bnFhF6",
  "key22": "3JKkc2dtXeQ3cgzxpEK3cL287dKEmkdRv7XM1zd2CKZmqy86kH19yQTv7hGeZxHt8HALBR2kq8qHuTuEWX6Qnvrh",
  "key23": "4DdK1MMy3ghoL2TdKQNbGNgV9wCeQbwGEwRrT4Sd92EjSEZ37pZX47Laj8hBBXdb9N9dU5ZqH8Tws6CRGnA8Wm6C",
  "key24": "57EmFAmBcCdAjQ7K58M1Cmrh2Mb3Qi7tjNtGfDSeMSKerSddSSKYLMD3W7iu1uY6K3xZfJk4TiackhR1nsj9ZUjK",
  "key25": "42435Ptf9rA78tfaDj1fWMS96bbHCmC4BAkBAAWxiRVGUBrcUBUiH5CVxaW9cYAM8bV217HN91tUAeQkYuwsZLX6",
  "key26": "3fk7Dnt26fhYDTStFG1hQq2YsvxmCk5yAUBM68UBUMqqwp5EfDKWBKHoSJ7eWyfdNWYBqKCQgFoDRrdq3k96rHyS",
  "key27": "4dUaehuHAiLE8rStUcgkmtcVyd5jhRHezgmzShqdDYTMeX5344vUvGht7icwSmSrYQSrXJFoMyZe4k4q5v6x3yA2",
  "key28": "3UWeVzTNpXRrgVrWqEvTPvkMtHzrqSNYDvFJu9YKgUdNUCQRPZaXRMbKRT9uQnXEsWrUrMNVn27qAYF8oqtTT9yU",
  "key29": "Law4eXAcFfAC9daMbvASvZnGNHaicTcxuT3dNxy4W6a9NrtyW97uCGdawcYX54fb3ZWD1qW46fBgJhU5g4ruA4r",
  "key30": "2A7pt2Kmca2vZ3B8kbQ2GXzC7yYPo7ZRWxSFbzN4TDtbYZmaavYgd5pcA94dYHJXhubBBtfPcvzo6hP8zxjD2tAt",
  "key31": "37ubEDkSSx3SA6wKuiuTfnRnu2taV6KEK78JWxYYkWhe5HBrtJ9VJFLqQBqrwrdJ3tnkF3puLuxWk9cqAPmigJUb",
  "key32": "3L1Gtm3GVwDKrxrZwfkm8nWw3RCj4zesZHJQpuS9RMQPubLtNnZFupEeQY84ujjwtyVQv8FHxpiFCTanxZcBv4kr",
  "key33": "5EvioAACTb2bdhvgm1nW4WgDtePVrfoLhQPCNH5YRsqxwvSapvGXucrbzARxQVCyEJ2BNeYAgeKhjvhc97K9ovYc",
  "key34": "5zzNDvZKT948xM3Y1YyKT1DgfaRUbgHowcXTeq7GS2C6av2yLbJEK9sPaL4W5fSWJnowfANW4xRZVVLMjtdPbH6C",
  "key35": "2qFAKS57wZRG6xZofmXzUj75ySXRezk6ZGZquzeaNC3gHVZuUMJKLxaraojBKLXozf5G68LpemigG4JcgoSjAdN4"
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

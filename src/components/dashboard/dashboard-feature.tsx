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
    "5Vx5gL8DpViLiAF2wNUCANDtmtBUgHPd2eQC3EKF8Wax3dAxxwZ58H43bsgqRxLFvncoqntJrq83x7Vit78yK3rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YFwrNuq86wNeCQo2hb24zTGSg1TCtCtQ8HJFKHGQWzAF4K9CBRrxF9MyszfDGqRa5cZiosVvjsNaWQ3MKT1y3AH",
  "key1": "5jThfVPmHRKgUs5FzH56DvVYesq24hEDD12EsQL6VD1fBb9vkor2TrRaefsfRSHHLJkzNvsW4otSCRazBSiKYKAf",
  "key2": "3eWMZZkRwECF6ZUWrMZajpoXRrPTDWAhLSiGeLBdMV6Uxa3Ht6H9ncQih4HLYXsT4WgBFkXrW4u1wWVRbVHNbchy",
  "key3": "62xLRcXxcKjrkGgaXnnjHjyYE4CHScPBCiuT7LGjeqFDXHPxHVfYPD85dADMnVrTxWt7UnLx19rn6RrPyCjaYT6i",
  "key4": "3bXGwhKTRxjDejkqufhxUwhvi73fhDzmu9Bq4yD1b34WDBDY8J1xCAFUmvKL49L71KWmSbDL7yu4pvNKuoEt5NL2",
  "key5": "4BJP5LJdncqdMtvdqwWob1grDkb7v9VmxtURVxpyeXRWXA6attk6dQ9qheUCmkDAF46sVLYjk6LmuVcVGrkvTBys",
  "key6": "5GSkR7kM3SUmjkZtSN48qNnWdQsxqu21yGXJZRjBSnA71zVPgtNXRraRQyDCdHJvpzkipn86iQxN1HyaPPoDdkNy",
  "key7": "NRL67YTJsm2pvMqzLzJqXGymLM3aKzDAFTrXK6hwy8hkQp1rvXpn2NQXTvima97pK7RKvm2dPWZpET6bX4FNCdt",
  "key8": "5Q4pxftFjpGxyScvPNdu4F7JMiQZB9XcvUwyZDd5xQhQaueBq5squae6Bdp7aQZPqdQXr2J2qoDkzSRxRWpHZwog",
  "key9": "3PAVrCeSmbYfDZqJbC4bm1KuTZ3duCaunQUZVpaQRUGjM1CnpaGznWh2fUgGVdRWYd6HuD4M1cneQK7ohsiPLb6W",
  "key10": "4rMh5odATrTuRadqVHRakrxUjSJXakg1FMcjGjKmZwLWuLep5yVyuveUPxVtdHBxo5XhsrmwHnWiHVfngi3YTyV1",
  "key11": "GcJjEcjKAJzq1nphQtdfa4VETe3drfjUpvmUMUoUXG6xKydctDzUimFt2pQ93u8CTU69ms6HcDG3dvk2iG6Hnfw",
  "key12": "29jx6sPWMgyhouBF2WbE9rYLvscnMaAb8fhKs4S3irP4UbbCxam5futp4uHHR3bzfBtn42ThnVQXF5cm8NHTfzkT",
  "key13": "2rDEFJztVhrvb3hq8r8FSS8ipEqnqx2eD5XTzSc17XVjjTckgUpGx2mSLQJP9Cxi1m2MvPrPYrYyqXE5nN6dqQCZ",
  "key14": "y27rPNnb4qjKFxZgUWxphCGFZtTRapqMH7hiKrdawf7yDD1GEWWTzp9ZZrgC5j1ZrirrqBwZwn4U4fjEJPeGv1N",
  "key15": "4uZzmZtAJcRKRK5LXKpHiYaifQF84TNUdTj5UsDwCPFk9ovp6nN1ECEf37CQreDU4uxJsFvomRE3gCz9d86NPpQu",
  "key16": "2GFAYzcMFvHsjC7AWgBfVAe3HJAJsmWqYVWhXtWoG2US7dmB15LmamJ437Q95kQshoAFSxznLnFVY5dRQFHMhjmy",
  "key17": "3jkXgoXJbjsXW3TVZ4PFrDdSJpjqjNAx7exdWsL8SpvLAwkwcH8FkXsMSoCyNYyri6MeZ7ZNm25QkXWewDiueRq9",
  "key18": "5CDWdrjZnauXYMHpVxwzJY8PhGKbG6bfapjFqMB7jSsTfTMxjRSJikcMWAiVBfAz5azcX4Nd5coq5rcmd1xXWU7x",
  "key19": "yQ8xemeuG1d1mgdWrLeqQy2Uqs8kfRy4p21cdUShRTntpTyJBLHsKJxBsKo4Qstj7X8bkWPCc7gsRZnwLSEtumY",
  "key20": "4UE6zgoyKHvucEoAnZEUdY5oMKS1V22J9Rkgkq7qg1Zs87NAm9ZCfB28soiNcqzDQwzgV47BpyrsF2irFTxX7W9F",
  "key21": "4Ejvmt7v6zTiy7jZ11eVZAGHr9UrWueJNDHscUKUmZ77Vdj2XaBZBKoZ3xWF2FrJkAmvxSy1N6Bq8FF1G37Dt3f8",
  "key22": "3JriUfDBVELKvyDF5dzW4aL4v9wVC5tUidpcvVM7WqrnPTFTYtUs2fTmXgsxAnQYDEUJA4sH7ed9LeePBucMNtsk",
  "key23": "4QNtZBZD9WdVicYiDwAXra9J8bJuov37HtfD27pyeZwyFerdCsvCqH33zH9GD5Ajs52SGsPPAJ6dYJJt11kvPUV7",
  "key24": "5rSKio4pDARC7aZxQ9V4HsJvXU9Kt33iSFzWWKW4S2Q8CEFprNmP4kqr3ZUYNTSGLH7GKuXtg4F7oW3JyjJPFasB",
  "key25": "26gdfHbTKm4AJZxJuizAFKkQDbiaDE4eMNeixw9DoRc66ejbv4KZnm7kz6RL1TFfecRbYnH5c8hjnjDEUTQpoiWo",
  "key26": "5vzxiJB6kB4TrhVodLVQw2JJkFUGFUBfEGNi8LRb4iC32QiaKHnzFiC1MiSV9y3Q32gWBb8ugppkdG7TK32gYDuG",
  "key27": "2nSX88e9eZK2ojfwg6AiKgutTaEvLkJqqYv7JiNxtzBsG11uxDKVh4tkv7nWSYF2d7LJvEqdjSmjq8p5EtdAZC1",
  "key28": "4Ty4FwSTbLxrgtW4Mur4qN2dM75wgSWTcSYcJJvjZvdbX77MFPmh2hQUFzvVcAYmx9BCBbjNt4sF6oDQCQnNQ4av",
  "key29": "4r4S1tHdwahupuhrmPPshPEtk8J9442665ShUwYqkjZojjC54Dew9F5WYUWiJo6EcKgffBfTM7bK5FYssRD1Kpqw",
  "key30": "2ffbC2cKeM5HKWNiRptFXwgTNPCtQLoB2DDm5LJ6Prnj8x74UzxPbp878Dy3TR7x9x64KpjPz8cyqWEwUgV9gRmM",
  "key31": "5UQP9e2btgucb8Mz5YafXp6soGYmimjTZGhr8vekopDHVVzEeDn6GfqNKY1ZFCyRHjUehUpV2t9377VYX3BtascD",
  "key32": "43wPxuNHVnY1retXSdPEXXgJijgh9LPhvSRYaZGFMBG7imrJ6rSYC73uzRS2hT7u99S62ux8N9ggLw7vDMjeZPdj",
  "key33": "62pqSrrErAwAxtKzAnXdQmQooVhjFNhVfYoRvZ7wi2ZqEJDB7FE745CVNtEBZcGuNChGFiESRQX5hxEAwgnFhPV6",
  "key34": "5iuGY9TJwaKkeUi8F2YcNzHoeyJhQuFeCBDmUfrmq6KJugxiMCniVrXUm4pkf3FbbUPNKF721ajCuSyxxu7yt33g",
  "key35": "3sDcXh87qL9Hp2NtxZf68YXQ9JNWd2os5EomAjz2ARZ4px3kYQjkTgnfvfyhxaTLeJeQNhxAekPRkTDcMVyEMALC",
  "key36": "4RxP3cRNCvMYH4hF7bw7SagNwqZ352zau54BwDvUDdNLx1SenMDS4QKkSMGjeLivP3KgDidVEXFCdv98MSHBiCVE",
  "key37": "2KKDipD8m42dnvoP7ZYWPoZW5W7vED86Qh14xGZhax3jTjZE44j2xRWgLbZMdv7ncwtn4AA4zjqQQCsVYXaYs8qE",
  "key38": "bJUh6DoiRjfAG31grypdvs2tGaLr5bvcKW4NQ31ktoFoZJDMMPc8tSwhxpdHQHYCBtM9haNmfzN9yCqzTch3rN9"
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

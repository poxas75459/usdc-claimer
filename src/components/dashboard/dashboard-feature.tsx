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
    "2A1vd1ysHiwfREPueRhVYJ2kfucXUZvkXSzdu41s1oftSa3ihpiU7Gdnv1iQThDbYmvrUX52kMEbhpsGoXLkrQtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qD7yeW39tdCzPU4pmfN68WLbAFknwKMB7uWVAwgYxDfxHgwBCvQSWSitMnDzZzxXhvJQg7SnUANXY1owB2J6VM3",
  "key1": "Zzr3CCF1A5JktjuVUtbc8vGhAW1djEtnNDGiQsg95Z1GZLXE4VCpDKiHayPH9XYgjgmsyyZdAECjjeZcDJ8DSdf",
  "key2": "3uqYN4HBtWvqPnWXa2afGFeUbqHnAhx1jcJ4HtEynJ4dJEEMLSaQxmJH3gSF6P5Vf9cFjK5p6SjeDLaQKgc9njyW",
  "key3": "5Fh5SDpwqCFM3H8TieytwCecKdEwhbmsnDhQXPXak1rF5JCwh5vC31w8nTKjh7hSJDTE6AqLfxM2bUTKCDmWFZNz",
  "key4": "dZdWkJZF6XvixUYoVyAhkRczohGD4ZgFm5FXB372kBPSKfEXvofX8mS1MffBEJjLSmLaSa45MwNBCXqtz1MiQnv",
  "key5": "iWxtf9xSmXtWUwxVq2rcgJe4AJvjLAHLNKoxH3xHGqqBmqkFSYtQMYoQqHeHQwr1M5LVuUu6LSkjLvafzJkifKR",
  "key6": "aP6FztGPK8D58JXprUiGKHPpA6FSNzFxStB4Ecds8gSVv1oKrsby5SbpoYmym82AJhynm6VawQEQJEDhjRSvBEe",
  "key7": "qEXzpUnFVPe9W8pZZcmhKSkTG4qK6eFp9sHyMuMvSQ9U9mHwNbADEZKXH2HpTkPUMwEdmFj571cTPST8zkcm7Wy",
  "key8": "2Uza8eK8e4hqe2sa1sPxf1oMY413owdVJgh19nCG2DNf3FTuaLEdR3p61BbDhgmzpWjvQYp2mLsYwMb7mShsJ1WD",
  "key9": "51MDuf3VKTrYhj4NmVLNmv4dkWfhYxfbQWgeXxgzuVLWvQJ1vGgRi1VLosLoyxEGN2pGbyqcTFZxWZLZxXa6m714",
  "key10": "5mzPLDEZrDLjPpmGoSZAftgF1bXnSivpQQ5tQVnQ2mAEEHujEpbK7aYx6pJD94He1pLr9BCZNrTwSSqxzERvh9cE",
  "key11": "5MEyTMzWRh5c6wqyxvzUzfxFtkatjYEqXX2TmC7yETR7vxJoiC9xHLLoPBf7Rg1mMTmNJGvY1pRKA9uFpoCeEh1j",
  "key12": "sNxuCwURMWoZaSvJGWzpMexGbBv2Q4qTz5FcjSFHT2SmkwJtJmedanermwFN1vA9mqFcvYkQrJkbXbRxkkZjqcv",
  "key13": "5dXaBAx4LV8r4aXhyREfqrfWQ9Lmj5ZthvxBazmUk3bt5B52eYha5LF2iv4KxGZJQSDmWYziMNy31BmkmuQvYPWc",
  "key14": "4ut3FuBksbbNmXF5XNWpwhxfgbo5DUj6QQVs1FhGWn9WqUzRv9k8JAuvhCkDDfaF9NUAbZmfxSnvRbZtNQ1fvHNt",
  "key15": "2Nd4qRMNmq4sGS4wfTbAdyNQCAVfguWoMPGX7XSWQhu74xZMFZKUpRKycNS1fiDtYo31L6YXZrZR7RjbTxuPHf8M",
  "key16": "Jk6bcLpziEUQGPhDXTiW6RU7ZJTEQ9cow5F26LtX6ijNxUJWoPU6WkqGa2QummDe8dSDRG1kuh2DKamydJtonLf",
  "key17": "4BtLNrgSWRupq3bkVJgFQfhcjaFBufKaPEsPCP2F45ixwAbyTk8GEFDXBTFz6cR1ZeNCN4qxtFq7UnppYGFCRKWg",
  "key18": "4fKtxWG6gR19ffkyomP2FvxhGkZhhCRywsZbyXpdREYsHLzdJ3NPR6GwQKHnXx3YHQHMXxv2JtW8bkgXubkNmfqA",
  "key19": "46j81QkyxBGMXGNYv5jDVv7Pte3dP7ZSJCfsc5AC1SYfSEjLKL7mQjZTCBBDm9ndDmuYFzdtdDuY4Ea3rBykb2Ef",
  "key20": "5e8LvYUTFS1oSYsQ2hbCxbFeggz9MiFjs2HuqzXTNzCELw66rrmHbCVqTyEPQtELe4xniwXbUqkJ7R2E3reCbiqZ",
  "key21": "5uQHTnQQNpD1Tn5mHSmDcQ8qrcw73xVp5HZUgRtj3c7WZ3GjAxPojx1Rm6TNo1Fhd5zE85wTihnEGAWCdSUFiYMh",
  "key22": "3znkYdyymiHQJUzT3KWKQLsXAp6oLdjBo4XJ9YPgPYQD3DDFLZYo9EPoQBJCuQqpxu2ngavdWricoRT4oCHmAQg6",
  "key23": "2KUXWQbjFXUEMN6fN23mafrCM19H6mnNSbFHN4TVTcCzhkadD5gvS9fFNQoJUxxMTJFEghLqMcTX4SZFLpRU9s4S",
  "key24": "3QcX8BLpiFWAyDGhWvjyKmn2a3hPQiGcdosnx2gVkdyWtgruVs4oV6bkR4ipJNypUvVjsmSoJrtLvRDMgGi9grcJ",
  "key25": "2DVzQgbtDbUwkCScnrR53SHULisvBxwAKdzAPJBJfvx34GTy2k9aX114sNyc3vUhVu9TqeSUCntFKARixU2X8z9R",
  "key26": "5RKyE8W3HY1YSY4csUTTYA7KxNZ4rQPccuTXfxHP7Qe6GnMjYDQJbjbEJzHCABHfJKgenYqUHM2SfjhagknHSVFP",
  "key27": "2vHpf1pdPvbZ7RTzgtL82gmTnpAAFdq8wr9MFfUunpbBNHAonbFgp54fwXaCCYSPvc8BCkkbAZmp5q9wfYDhWv4U",
  "key28": "3a75xzm9rNGHmeVMWr5ys7uobpWsz5B1r9jywMdE4iFUNZa9SLX3PSBvHEq3WUf4PmHZhW93fuERCokEYSY946JV",
  "key29": "3ZyXYYxh8NAwUV6ogH9cbvJ6CT6bGqqJEBVoEDCVdAscCPa9UEvi2S93zBSygysCQ9UhnkxQkN8wa3ZxzDAjxawD",
  "key30": "2LH4a4eeCtdBeaqiWzW7cWFxcpVfNXBMH2BdFniXK3A3Ftd9yB9KuS97gHpmUXSrR9H2n8W9Bi2PYM7Gq7zV8FJ5",
  "key31": "3gXQPzTteMxWjR9bPjQirg77twGRshhiPLb9ubrRw2jsDVsiy5Bbf5CPngFxcwbUU6NhiRnrUDX535Mp9HJQ3jnq",
  "key32": "4qmAr2nU1vLp7kYh3hkXbJWYHmvKnrEVSnM6mCL5fbe3nyHmWSThaTMxzwcuXBYUDs7KB9gmVpzaHfGRHNs6cTQH",
  "key33": "QJsV9RaHJJj4CfvcCfJohSdFewvYHWBTshnB3NovD4xt8mF182YKz83miPCXEVvZb9fkAQC1oDoqtmbKkJyXKUd",
  "key34": "2ARad4uYdz8JV1obvSSgXmLLhC6i339yXZreTPXEkKCkuvAAGFpjCDQw6K153uY3482vmxoQmD1NmuoaDQnaNfPw",
  "key35": "4anoNEwg8tUJchw4KtyKpvPT8m2b8wMoCEmmpW3zvhB8U3XxGztBkBMqvZdMQYdzC84nwbLXnyfoS5zbrJ9uxorh",
  "key36": "3rfYnSeEGZGjkgs9Son9UUKJc1U6WkgSNQXADf6LkhsRMyvwnJ5kzvoosoPQKcxxdT1FUPCPyMB4sxbQkQQwJT2A",
  "key37": "4yhkSQ74VD5dWoxCD1bnR38XZDynZKvsjr1eeT2XYU3H7Mb5a65c8oyLoAM4CRFz7JCGXYxTUZbnfxk41cTib3Y5",
  "key38": "5SLrrj2kGhAnfaj7yjLPTP6RbFy8gVdwnDtLgHVmWr9ynZ3oKGDkAphgnnSFdA1TKmkpi9W3iTFtU5Ctv5chqc1W",
  "key39": "3kpTzv5MmCnYcHCeB2gZ57Un5R6KpiRn91fBjimeFNpqQS4ctbcFwf3eipJAsTC18XP6cMeSnp2ugCjco7eHebFA",
  "key40": "46TFd7kKJryYMzVREu9SGELxzMncpk8tMpdNKYrprLs1NAJpRHGsNUNPxYbu2cU3DppXdWbUVcUn97cChhz5yjoi",
  "key41": "2QtiK77FBuZMXsU6MMfRBanviWUah4D2MeyQNF4CXR4rbfFbQmvs4oNw2oG2CjgveU6LYisoLK9ddgte9fbFNmt5",
  "key42": "5N7iFEAUCEkGXnYJzzjeniw97W9m3sQ3gCUCUCVSWoyhy42xSjViEBBGqAYox1HoavJZZnMKeqyGD9JLPgFwJVkx",
  "key43": "47G6tmNR9wyabYdzHkax5ytxxTyb4ToZQtSpMjzyui2iAgb1yka5YA6cpYqS39FqwP9T3X7vQhCVRZK6AUStDh2z",
  "key44": "4yGvzACeosCM12RYQaBe9H94XD4u5h5vYu8qiwFopmWKYYBQ3vRWGLns5Ba5kGMVyRA1naPVnCrmuaJUd4iSJPM3",
  "key45": "5CESgkSDuV4NPRwGGnN3zJPMv7jqKpU2ujsRjRf1rdUwhygdGS7V8xLrAR5Gc35bDiDuiA88HgVU3BA3vfy8h5Jb"
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

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
    "4R5Xe3rFpC7yzoi8XnymgTQyXvWt7AeR2VAVFvAquzRZaUQwKu4SQ7KGgeuen1vBuhsLodQuyez9YcBqakYfLr8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QMYtQSzHLRmLSLaNzX5dXD8wDL3uc8wjRFSsoURJ8gnPZ6kkr6Pc1RRCfgPRoZXXyZt7NqNf4gfzWLH4TMAGt47",
  "key1": "34ZKVQ5TpHzHxpFfBA7z9U8fPqHW8iAUqvf874oMWxutF8C1pEp3mWTLY5qJuiU4haoHNqRhHqpLJTRPyBqM5fSL",
  "key2": "2Grh8abUG5KEpTJ4T3eZReYjdTrbJ89HwXnhThSjGqpivBqipqfSmzatdqpCWNGzwHhy9TJpVgZP4vLEoMHsptLv",
  "key3": "4pgw1rmTpbZvJSfXfhrde7Udc7xpYJ2ZjtdRVEjBZhFcz4ydC87gLAjZc4eJKshmZxfd5hB55exnt422NpghwLX4",
  "key4": "4JFTgMPNcvccitM93euwSQhDyhygkTSLEFD4vpcUbd9yGruosmhVKLaZ91JiLKKHiwJhBkbyimfbHN5BzpcGRfM6",
  "key5": "45bp1HiuxnxQ4WYCZ7A8N7ytx8ReYqsor3MLgLiJHSEHGER4efMoTgmY2Qc9guTfhPt6eGqDSPB17AA3MzRQf6bC",
  "key6": "4q1nu6H5cM83ohaBPeaTwrj4LyShjMCrLDawyK3DqKhJhJxkgy5aYQTm43LnLcMTzwnqmoE7fxvT22mSAETGogWg",
  "key7": "5yRW7La8TYxcDZUSW2u4pbgtkRQ4JEQTmmxupHUjhaEwTH9Fzjt6wzb1p25mtjx4yTMCmDU2Efh6GFzam1danwok",
  "key8": "4jEUjVHWbX3i1A69rrjkr4H31SZxc3k5K7eKYqKhit8CZeCdpPbN1m3X25zYNkAxUb7b9A26Atp7tFUH7zLugKL9",
  "key9": "4N4LHkHQqKoV6jXXjuFgQUWKeDsm5YFgKraKKTNRQ5ZdHnxB86QT2vsxUhEJCEYw76PthXihqshX9siYFiHW9H89",
  "key10": "2NhKNURmaYr7oh6L6HY3ALCzGZEQkmKYvfRSaunccS6BGSWA8tguMtsb65tmr9rqx5t66cWChfFy6H3cCMfTMGXH",
  "key11": "5Z5sE2upvv64botwsB8dbC2GnFx67vV6m1j5kBCY7Gv2UkVkBRP9VBFMkUn1Y4Bu1Bhg1ufdXGgreXJ9VDC56AA5",
  "key12": "5fBCFrZV5u9HQYf2pwjH4dHurLz6BB8g9z3niJSF5SKRT3ZXdGFKsX5XZgpjyxLPMxrgU63oJsoh7wq8VABBGdyN",
  "key13": "42JSvjUQ7BFeHA14Xx4VsVqMtsUCGugvQpR5uGDPtnbALmTTCXfkv7Pi8D2afZag5nsNhDSt15fZKWMx9vS6razf",
  "key14": "2Kgetrg35WyJub7e2sWturV9vUbqMogigMyi38cjsyMUv4bzquExKct4nRiLcyed3grc4Vt3UBAxLQ1PgDAKsZFQ",
  "key15": "2Qwb7UQLmcoLBXpeUipkrv4pokj6ptpyShgs3mmFLHaHTXH46GmKbF2AD2hAAdvTAeqcoYZQ5nJLVyWXkr15bf2g",
  "key16": "59hxctL7yWaxPK4CeAZVbPxDvpxunaDpr3zbxSiPX9x3JSzkErVCny748XN2rGdRCt8LD8WDLE2w1nZPJnXLdPjh",
  "key17": "4VhfSgxCbk8kg1oPZRrQQ4gzq5CRSpS6pxEkN7VhrCr7nA4hF21a2cae7oFuMeJgkmioXQBU5G5MNWTX8STfU6i8",
  "key18": "4pH3tLrsFfAMjPsqotxuC7CMv1TuK8ztCSXzWq3rizFEmZp8Q7S2ae56EQEnWkMdxXKXHYmqWEEx41sfqyNiMoB9",
  "key19": "46vv4uGKwBPwQZFtEshKKfm7Dj4g9n1Nn4pdurkpTFEu7novzWGn3R9Jiiyp2aD9YBUh7qHZVuJtSPWAR6xDyPC5",
  "key20": "4DLvBFjWQtPtEpUsEkNZ5uJuLLZzX56LyuZZfTGXEEAg9hTGWzRoiVeLWk9kHg3aYG2mNE1WrhqizGb1LgeivbbL",
  "key21": "aHjQLLrHbyufhDgmV9UT2zebG4cxVqjpFXZpNP1zQVEJKBTvRh7wYDyUMpWZ8kCMnrAbFNoqqkLgVhu2vj62ZLQ",
  "key22": "VJaLLmgtXPkJXBNXVq96eGRbu4zi4eZFQomR1QPHiy8iXrNWMjZDx6u6cLJs7HcyBwjrrvGmR6Vda9qYt6p8XLX",
  "key23": "2x8shifefCVCmzQPpxJQbpYXx7k67DCsmroVZPrAStuxwT3iH2r2KT4SaRY8peBK7FbbzYtNTrirXU5Lw7PsCaHy",
  "key24": "3uEYssG36dC4eGc92eM29aRihKmkLRgnLG5YD69p3CGsWfYe4qfa8t3wCMu8ZFSyJ6hQFbE23Z784LNKCNhiELb2",
  "key25": "4YWaFpL8K5Vi97rvXVnsPHEcy8PtHfP6pGXXjh4kAyw5Z77F6NVKG5bRLaM6UkbUHyMq8vEELCXA5FVvNRff5iYP",
  "key26": "4ocwGmtkZKmPQJhQBWqN6W8UVsAWBQDCiTJZ84bKvDGCndsqh2AkugnXNBuK7Xp2XTanaAFpngJtv6dQHJkvcrd6",
  "key27": "4mewwoHmVZUjUacQyTNimwwjpA1SQYJUbdi2Xfe2oaeP9g8tfVuMFPyy1eeXpRPaA96ccMw3bgpCXptm2S9hW95S",
  "key28": "3i2YxiFbLC6YXfDAo1zE1S2cExogmFsfMyYr6GJnF11rMVTwZubLtZyH3Cxha3F1YMWnPsJuLeLRo3mu7vzh1cmt",
  "key29": "3xWKJgRNrpDRkHdR9eUatmBBRRZS5G53FQMjiQHpaTJfvMcnLhX4qjVi2T8NbzrwNK2uDkHzDtHZpL3QGtBi98Ze",
  "key30": "3qhGWBWPaJFi47yzQPBuEZQK1Bg97qzMMjxE9osh1whGTV5xJDDN6c7Fth6MWtec5uZiMtFppMuzDhFi6DaF8LVF",
  "key31": "iS1tkv8Ls6WAXtBju7t6oWyVPVoffdfGzsBS8DyvRLt64MeVQh5hzxpBvnYQ1dVcdanYnzAnBxsQZeZu6CRtkxN",
  "key32": "t94i9uz6F8EFP4TeqfgHaMh3KCcj5VrpiWwgMuyfmJsVcczEpNzC5yCAE3J8VhwWT2txaZ7Q5yvQk5vnR8bd4WK",
  "key33": "5o91Vgaj5QXyGfh4MQuPEopZ4zDUpZcrr3djFXmRKdPcVMH18tSjgokF4NaB92qAYoR8HPa2WksRLUpUzKLp5p7o",
  "key34": "NEvMVJudsjXPXQLRFoWRgQ91egvzWifza966vMkM3B4LufrRDf2QDeRAmte4mYThqLxgCmAk5iY2yPKXz9S4HTH",
  "key35": "BevyuK4T1tF7Td8NajUnNMq6un9cbD3Hh9StfphdSghCWPyBFGVxW2vyJg33bkVVgS7oYaGexEsxfUUSNPLBQih",
  "key36": "55cMiiLyx1ksqDzBwiqeEVRmtdqHcFfCZdWPbsaEJs9WTwv45LncgMy5LJw31Dheq2Mttn6K4acX6DyWfwDhoNF9",
  "key37": "3iQyp5ruRJSadgqwSxSYHC7stR6Z86RxXcfNfNZpASDnqPTm8DnDKypgAo5nqKND2QWendGZxdkncMVfeGV1mXGs",
  "key38": "2PsJwnf5BUN55G3T7JHUYdULDn7uRSbtvPcDwymrSiVH9MwLMkiWJqX8NdNW1ny2bs9sWMCJGPNVwihwFEn4AfmX",
  "key39": "28x8mTNv8kb52vUVprXd24X13Cori8mfAn4mG7hNPJw7pzuENFLaAD5g4PTQa7BRdUwE1tquGtndYH5ia7g5Cmsn",
  "key40": "Sfu4DKFEksuwmyjpWp41xoyvSnXdSiB94BKhavhsq9hpsVpLQy6Np9Jmt2cwm7bviE5fvKkTWXY2s94zyFA63hJ",
  "key41": "4xgpanUfddtZ4L6AYNmSP2ya6SMhghQhECpWVCMwDzXo5CrpDxcXhHHuPTxKW4G1d3j4Wfon31MbyA5H8gbqkfb1"
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

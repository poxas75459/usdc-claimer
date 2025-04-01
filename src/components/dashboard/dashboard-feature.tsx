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
    "66UVjX1HTfNLVBWMhUpXo9YRojKAhmCvLRefDxsaLn5hrLq9mifvPWkyGWXp1m39annjc1tUaUSDCZrjZA8CheoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4swEDgQTVxA6FtGosffwBWXcYt4rgoGk5CTgSpraz3NDMtCYF7Cqwtst7U1kqJHhKAkU4fn3jN91M6TMbXYhkdLc",
  "key1": "3DKkrbrDdSFAxGprJqBzRHKzGVFzKUwXf5LxzEMGe1DYvo4TqwoWD18ZYCyNJ1uLr6SFdNwN9N7mUhWpcpNLE6q6",
  "key2": "3QTEmQqU5bFeS9EqoLJVK2uiHUNQ7mY5vYy3ch3QDtmsKEfPVBCpZcfjzzhPd2pW43KbzMWZkm6GNXeGwnRToHjG",
  "key3": "2qkNVehTeBSQcXjhf6zRdbkPyUR8oTd3MQHiLm2uPTGDhnFV5syqY8yYeRCTwZjg8bjiVa2hYZBN7iuRqHe5cyXi",
  "key4": "2D5YNSBLRVX6MT2tF3imRu5EfAz8zcMQRjUeVJY4ncWraVtAx5t1QiXguXPdmpVWiTUQmTnE8RmxF5ZCmQ3EgwtS",
  "key5": "WMeuRWfnZ9F384veMVUg6vo11KPBjWw4icoBKub7sfbQ4s2gjqTspBSm9vD9XbwLf86KBTKnqGfyj8vW21vkcrP",
  "key6": "4SugXyY4M4fx9JSmBfrGmruZW9R52tFLG9Rs4Kqd8AzDBU8WMjQCgYxeVD3ccsj2EUuh5W26cyMFkMaooWDeQ5Mp",
  "key7": "5pXgzV6XQ75T1GsephkvzuWzuDqii9wj551sXDy3NNj3Y45SXMepvgGe9sWUB9wUocAcW4PJjj6ugbPTYr4q2cDj",
  "key8": "3bzKhAPmR6MRmgbg5P8rwwcK8RkFXoyhrazFaqVaoBBSGqsC1JCsdbgToH1zwsi98ym9xzMUkAKwf42XJuCXqg9i",
  "key9": "4xpXrkS2NpQf9k5nk5ohMEhdW8sZziiLsKaYtHpnzV63aftb4EXtFRgYsE1vAdz4SKYosaJ2A2iazFSXTbS9k99c",
  "key10": "3e9NVXi49EyhMGaJDsrCpG7UsXreUt7urugNx6rZVTSdhaW9bYvpBEe6jVWjR4EnaJJMLu9jHtWYdw2ReVwRRwcx",
  "key11": "4S68hqi44a3b9wtqNa2ZpUd1SczyfLz78Z9RBjH26jhwByrU78U1B1f1ZaWpau5ybNaJWTmwZMnV6UmtruC3gwth",
  "key12": "5TePTGStS7KrnyH2S6Umi2GAGGeBuhdzWX82o8pYg2YuT8uZNeXW1qxyLiVSSbgaaLbSuFGFCzURUbCc7sBnsGrs",
  "key13": "65HHBsUMUGDxyBD3KX6LodJxF79uAj3ovseQV8RaEYNZD8cpViXpzw9uqmCffmnW2PUVPyHao61p1pPUvoESJkEs",
  "key14": "4raLQFPxxVRmB8mjXTfTg5Vpe8THNDhj1Gzacq9TB1WYDzWCNt5P3L2KRtmSzHeDqK5Xp1DCaHfqufhZHfZqwLc3",
  "key15": "4mmNioidNynzmqo6sNJAbuGXq4L8Yz9PWSrh81cDe7qsD9rzYGkvkqSb4n3hm6A6HGU7RJciTQm5fkLZgLhABGBo",
  "key16": "5BbADZT5zSZs5AEZfxh1NeFzwdC3UdrA27A3RFWyd9DzRDaHG4CiFnZtjRejx3Q5GoRCBLn6SAQ8Po553TyP6D6K",
  "key17": "2NPSrECfF5Ta5KS9N5SoThj7joUQW2kgHYkxyRr5SnUtrkvFZxy1JDcQwnmkMmAGwPoFRLjJKdyVXSPsnNQWveon",
  "key18": "3oDEVFWDos1GzHnJDrjAEEBJgwqGXZ9unSJL2UzWPpUouzEgL4aSFgWp6fe12Q3baFoEBF2Rq5XZZXvgfdRFKZTn",
  "key19": "2f2NFTpJdVRkmGsNaQM6yffeCUr5Gc2ZvpNJT4ZN2zD7AjuKYN9kmZuWfvoUzamFMag9fs32AuMathgpPGNxToFy",
  "key20": "3LyZrCVQSdjfxfBq1K94tzJCEVogCZqPcX4UXqRFqsyoZyh2A42bMN8r1wKPd6rjWx2GG9b2jpYD9vKYyJUPRFXh",
  "key21": "4mppgtvmpYYsECVktakzDBfaVAT3A2Qorke63STjuZW8QsiyHKNw2DkG6AcoYq6P2dyLa7JuvSWe5bbrewiiuwwF",
  "key22": "3Jnp3B7drPPqa5eJvUkJLcwmBW8Z6Jtm2S8HVRAoRHZCWgYCWyLTQYAnx7FHs1VkrnE54Pvor5RJDPEFPUSM9Ddc",
  "key23": "245u8Arok3CXh24EeRs1cnTovyELHyYmMdyogVmPuZxk4et81DMJkxZhRd1aqeGNeD9MArMEQ13uxLzbq2dr2Bhs",
  "key24": "62VbGA4V3YK4GKEjvBUF3FnTGWw7U793WPcBNgr4Rgok3Pm4ixkur73DkopxXE9LTuYvoxHQvX9rbvEDEjJRtKyb",
  "key25": "4KkXvgaGgY3r6jjQgiFTRTS5G5Ct61ZvoNe5j2LQSKYQVzewThVMZuy6d8Ss6S6tyG1DgAYS3J5VXqvKoBW8Cv3W",
  "key26": "4TpMy2F6E3NoV3VXP3frmoiCdNksqpg7hHzb28YUhZkJeUJ8TphGJ1g4fuyUxpcJ7g2gUu1LznMGwMtMJJukrWK",
  "key27": "4GX25Yj6xqccBgyUbWmMb4StwxdyBWE7cfb2Zd9C4NEuonCEFpSZidQ6vQusLaNVaUKJjy2uWpKd5MhAchE4E135",
  "key28": "5DyPizxjjKbd6Z4J2kfUJKyZG28iinFQWwsMyg2cghWYSubw89azqXAktVYFgWQ4mgiVZ6WK9EvZVMzZAahSxYNr",
  "key29": "3sQuHYZeJmRqMMdwQmzAJqhgdC55kovku3y5XL5dF4hcj7R64W6o5paCwtN9KL9BoNY8awbsXCUuHzmPG3aqPVzT",
  "key30": "4vK73X83bVs9jZHT3opseYoEuZU9dyPDmWtvoFWSss4Pk6DNnmCAGGCkjvvQqPefM63hA53BoUETXrgwKU4B9Qss",
  "key31": "4dK5vjU4Mb3LHj18UvF9js1ke79r18Em4Ta3FrKppc6AC26PGqyQe4JCg1wmBMG1CD6CEakkMvzoSQe3TsBy583m",
  "key32": "3RkutBckGCHvs5Jzg4aH3QrNGB6GXc31sGJm9LD3ENsrLDkVWYvcFbMS7gVxCdrjkWCLrkFd8A6shZigUC9FLAHQ",
  "key33": "4c4YG7EP9NhkY6yjgdFnb8PBFGqv9bJBkKXvGaQNbj7RQVzb63TfZXKpxacZUMiVZkK8Ur45DJdyqvgKJYDMTTE8",
  "key34": "DSL7zbFmuqiAAZGbMNecTrL2Z7pfapW6TRurDdh99ivwB2pYVTM3bVtv7AEZEi9ns6bvd5NsU6WjgJyorLNbQUA",
  "key35": "2VFy8qE4fju94AZ9hDieakpYjLEGwM7F9eRSzHtRiv82PYuCqwmGJNpYPNdUJVCe2kuASLC68SwgvNeKEf1WsL9F",
  "key36": "2KRukMz9LpDUGvmyTRYYCnpgLEanzs8VMiHk1gFeqtqiMeBYQPo1W3G3oFQLiGfiXkHAoscpdee27CUsLSyJYN33",
  "key37": "HAqm4M5uw1CzxVAPWBFqPwaRyDiCYQczRFeFpEVFzpEV3Wka9VcQ5z3euhCvyrNRhFHYBFc7XWXRE1qLaCZRSsS",
  "key38": "4hUHHDtZx5YjYfCAz7pm4TMDp6MMxEFjGFS6nNErQ1G1U9YdWZoSD3xf5TdqqLzJtLotUzm5ng4Rt2NsLLhmvuEZ",
  "key39": "5fEP7ojRoJgnbitbmxomrKphxfYJTMASMjSUVeEPQo9PUMduJJ6FpYNdT9Xso78wASbrYC1SWF4LVLUCJYkZUVLw",
  "key40": "3CuNv9rYdWpdmZELVucG4CqcHTRsxD1fqoYRhczUz2X79WbGX99mTByuqBV9pwvtKW8QanKffTsv8ivLwnuStjBH",
  "key41": "x1dFrxGdbC5mYB8Bs4eRTPgaa6oDhNhK18DYMDBdmiD6gwG5dpzSgrvFDeqfSEwq3dLtwSZ6VBii684o93QSWMj",
  "key42": "3GBRG3w1MC7p34wJre6tWDgsPsBbwJzRad9LkGrL11R8YQTqMpBsy7mmp9zGH9P49dYppK25MyFnKMoM5nwLBY5a",
  "key43": "4w4c7hY46srF8Xqe33oeEDvffFFuiZ2UjYS5RPdCbZ6tfo5oUsyXBSLocZ6qjAzen1sZu4EWDYheZUHxBzzYKxXF",
  "key44": "4MbGsjDkewufM9SA7fQysoVKoc3BQUANHQEPDHjZ5AvgvcmfaquzzRT93ERqqF4xLRjWyT4ZRv573NqLPvfC4uBo"
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

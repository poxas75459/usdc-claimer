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
    "4G3YbnTJSriyYjQJkWAzkwo9fTADpFTKVrBjWVkM1A5Hov28zhDvsa5kF41oYP1cWHN87RimJ9u5LfV8B492Utp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LvRrXaZs23GHNjkw3Cbs6Q92FADGCnCsVgSYGTh8tSfNFx63ueRstifNAPAPLtVvgDVvUdMreCYfPrV6XVASwjG",
  "key1": "2bbmTWXGZVUnJNCKbQZHz6iXphspj17ZoEiHCTkBuWxbu4rHrMTCE8g4S1GgtgRiLukMmPhxGjJTganbp7ervNZQ",
  "key2": "3fdMYNTVpsJChBLHZhLs7c9nzm3fkmFjbFwxiS4Yv4DRFjaCZExfFdfHMrXYGAdVMEckXZ1hnLhoYyge4fmRwrgJ",
  "key3": "45ZahR8GXmFaPQE3JBEeUnk3qaLH4tDDvXvVw9TRNoNGTgRRk7PxzWZySQaDEtoKfz6qNgtZ8MvJfboQS5zXQxqT",
  "key4": "HoHH4dg1ThmmcGQqBR5iTYwHgwK74VH9r52ZQeBntCbMCAeBnpMGkzQJoS881CZJ3cEmVKueEqYMamN93BUAoVF",
  "key5": "4pxrFcXsLVF38xQRyyqsH1PPHenaTsDikbY6buur28vXuSZ2nYZsN5zxtBPn9PjdeVcfcoviUyHR68m5oi3rmbxg",
  "key6": "27sfVuUb3vRQfkuWPwp4cgEe8MRtgmpZBx9A7wMRioEzbc1iSFmbKnmBcUHFfgJWiwzY15qWFLPUCtSJoVcANFSm",
  "key7": "57kGRnEGitfGrKW7sMHaAii152wRhPmfKUEUnJzZ3TLoDVmtunkT2BjrEKu14B7ffLtkRtR24TfwZaNZFdxkLvYT",
  "key8": "5bgQRp3okinsArAqz8m8qsdxDFnLASGYLPpAtkCrUXroPkXEWupGUpMQuWVvw3ZpSYQU3yixqcQcqHANoKcHjWP1",
  "key9": "2b7KHoqbtDtLJddLqJcAUDu4bADv466ZyGw3TsH7HKGuhguswyeheFcgM2y8DGHTFa3614UpfcrNd4SmEMJy1Rq3",
  "key10": "5x2Hjav8F27JEg4uYVhk5MJudqkF6MtcxBt79GkgrzqQF6wwpjUTi6pGtVKCvCZF5aNRFCuzJKdfR6MSbwVMh5Yj",
  "key11": "5a93tGeGsaXU2yWjmR5m1GcqEYfvo5yifQGFSRXWyAvTSyr3XitxE4w3ABqVZgURAuYgVoMswpnP2Fx2Fx36Um1B",
  "key12": "4zAiu5zKqXcz7rhxVZy4dtLCUX6jJ2TkMgGKWu635BjGrxaHekh13hh21rtMUupEEYP1HFWWDuJfuwhatKu5HGdL",
  "key13": "2dUTpi9HrshCR96XMPTSfVR38WsuSrxRNMJrToxtBrjTDfx4P8a2T2pMhiR1q32FineFrp4xcaM8AsdLafkBrQkq",
  "key14": "5z8r99fYVNoRM2PJThnged5LonbXVSsNkoVBNtDiHHankbUdp4afxdyPxW9S3bA13E699tDgjiriTet1LRVQCmRo",
  "key15": "3aA2wgneWS66xt81k6dXS67x8wAdLwYkGffLYJ9M4H34BpzoezJixepC6uFr1uSx5ExPXX6z9BKZgtXxVsJK2VwN",
  "key16": "3dK7rEFX1kAjJo2ETkLbwdnthVmZJqbJaP1KWTsoXUXtUkZN14CnqscA9BU3JPmrECPNKyYU6gN4jMu3Are3VLC7",
  "key17": "3XXrgJAvzwTk9twteTjLKRkFNoDsWXjEBziSWjoRcHUxs722YpKzWHQUDU9VWeQXyLqGhCLpSg277WS8E1AJt1AR",
  "key18": "Z8JaUinGBzR3yjnLgXADAeu6W3C417SFKrenWdhSoMHea3tF8oeMZ2m7Yn4xF4qsemocAkNb1quQ8SMbYjyUPJX",
  "key19": "2xq9My7h3W5uypC6tYE59r6Na5HAyMvbfHaSYWXw8TPvvmEMrX7FveqW5rZzyaEhaH4nxN8NihsxH46CuNVmXUan",
  "key20": "26w2AzgZjTkBemxUbBrpqo7KW3fAsnJBEqVgcYi1J99y5cMPmRSDCH9K8UiPHZU6N7nWhrzW41uBqyKocCLgHh42",
  "key21": "2a1BufuTkHcesLsxW2Wns9ybDrkVGJpkZArNsZQBNfhaTkEwijwV7nHgYnAY97KkFAF8hV7w42QmxadWtWjd8YxP",
  "key22": "3YJbpzqF4zXYMVeJCaSPpAFQ5Mx5KZ6WNKUbNmw5VM34PDRtvNLkqrA2UBd3sg8sz8DauHYGRpnQtYAaLmWXJtZv",
  "key23": "3c7Kgs5SDfYBnMzLb9DdvmCZixPW162CjNmyVd3aDFKazuxYZmkabaQSVfg3bMLyWwY8kHPCXg6V3kYTzS8XXhyB",
  "key24": "hNGZwtABpGeBvDet9c1pxDDf7WZ9mWGSC7CyKJz1xkij8dhCgBvVzN7nENmAJ5r37ykSbH66WrKq6RreQcE8cWy",
  "key25": "3wU2VCKfDN2kAZ1XJMYH1TxxevaacahKeZyr9Z9RJMsNssphiiAQuzJfUN4CXSezYWaQPTtejRr4DXVD23bSUAei",
  "key26": "39SYepGYGs3a3BtLEcyA3YiShViDuo5QzXc18123PMbLBbpMJBFfhteP7Cx7GkqkwRL2sxNUBP4K5oa3iP5nu1GA",
  "key27": "5wYCBPHLWeECH5hHULCno5zEi7nmS38aejma43NTszFNDAHzNo3Driu2wSTWkaDnrRsMp4Dg87q2NoMcdVxeQyjV",
  "key28": "5kmZoB9XR9KLL9gx1yGSShCU54Ub89jn8owNdgoQjkxyTrZpe656KUSEeB7w5Mb5S9wC9dTXLjeSWbJX9cGEpZMb",
  "key29": "5eopJPwbz7gDgUu93YC9Bu78Aj8xdH5D3orpewkAWY2nBk5goGLYQ1Tk6kNPwB83pQHyswWRV19fCxgejR8o4QjE",
  "key30": "63cZP23fRtKAz2nLuxF1jYo78Qw1yEay7pvb54EVCXfcGH24BDjTEsgHw5pJ4edEmX9whLKj8Rs5pGYuJLJvBki3",
  "key31": "Q2Mj4EfLHDVkogtTQBahZ88j7NUMZdBpgzc3ZjXFyUF96ckPcqkYeQVdYqZV95fPbymTWF8ScBhBVBupfhZwdtX",
  "key32": "2L6X9Y3FKGdU6Vou59Q98sfRXkVQfeSAjVx2vgg6Wz21xKUerq6wHV34odTwtzni9NsuWnocHiJUrRuMb3YGnk8U",
  "key33": "5Wjf34LsQWz6uZRfmwNCruvd23Tszxk5QrvNTitNqLMGUu4qNwsHnc4yowshdq9sJw4C98krJVHbDYHVkcRjyzGo",
  "key34": "5Bk9kABAaKpLq9JeQbPtpcskLyBCwq8XEEitAmzE7hFFdM1GWncqmQuJdFvm2qLX22aU5tn1GdyopGipJUfCRbeU",
  "key35": "CFbw9pBWuxhAsFWkwR8j1vtnYLzXSUpF4NUhJWx7AFQWzPF99eofWA9LtMCUub5nxpYpwgm4fvkd1TbuWvMMLjo",
  "key36": "LQxXi2LzPPYgomG1vfXPP7an4ShKT84kNfFx69jLUZsQs9qm5Lc5xadtmBKaKJFPu8Rm8MQA37bU3gydL2fKYVi",
  "key37": "59Aw3jB9R7CzkCTKVxY4qyrDeMtv1PP2acU8YShpQ8CS8LtmWnLp4573CMNWs318drTbXKHBPdouJUa4Ds8G5hbv"
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

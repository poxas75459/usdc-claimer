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
    "4CD6YNa8grdoLXmxg2yZX3bgV9NGV5RsP86FEVVwdEXZbFrw4R3VxeR3QtyQb2NBEEZL829jE2bVrmB5cTJbvAWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FRRBooC4nJU3npQs7FycNTU7VkwJ9vmDBWXLoZieeA4tsZKG1MEBz8SYqVHDM9XrnTT5HEEjM8B6FWS39KuLHR4",
  "key1": "LCcHNWwaz3aLDjBwk4jeZLAdTmEqLRwBgtAsMv9gSMqaM1aLL3FfBYtyMWcXpDGRpGEoN8fAW8UsobQwG7P7rtg",
  "key2": "63rJmN5kXNwz73KpDwVv44WVdQMd5eyMg1j9VFXvARHQFTWZzpY9vAh31V4k1ZkqjfTHrRXya8Ed5TYRv7HmWF8m",
  "key3": "xdiQ8eEmpbmZdUypCcgeAtWYW6LheCejySrGDZQko1MZDwwvCmEcwoqpXeNxMFFZYwh6eGYd5fUsaKTz3aiRqK3",
  "key4": "4imXA7utE2NcxSQvJ3vwsRoaPFZxsMfR1rvLAPWd25s6YNQhSvLmwwCztAfLoQJsLE3qmr8v3oVTzUdLfqPLMAT3",
  "key5": "gjBNatekbpyUBVDm8bHqsUmKjzhomq3t25bV9LuVi3pMzTZG53dVXLrdJMWzCv7JMuaTkXP3t3qZ2Wc1YRQnH7K",
  "key6": "62YcZWC8ZUatFVDYANzeLQyHFjNVANu81szj6AUHBWnEfJkdkNBuD6317Nw2DdsxCtLoJ5Kus5HbK9p5b2qr51Qk",
  "key7": "3BTWuPRuJSYUgfbRHT65vbm3Go91Y31qsyFzBs9o78Y3rVU68sMW4aDjpwtJChRzMeBpZZFdqk8UxLodQzjQHVbL",
  "key8": "vfowytSJECbUW9dKYM32koRasdwnXZfXwoz5bso9x9ekTakqKnUNQXH6t2o1unDNRqaN27h7AUxCqiDPbL7KT6C",
  "key9": "3yud6ocPc5Bh7L8dpHvr4CZ1PTdwaKF3fbgPaERL7KrkKyiAK4UBiZTwxtRsxzhf6qfDva8Y4cs1cSX8mGxF7sDb",
  "key10": "4eaDYxmYLhBbb63BRvy1tsM3JD8z8R6CTG2bLXcHn3EfaqM76oofu4AZeArH6ajNgAAZbLHmnLqRzTPnNXFw6xW7",
  "key11": "3QC5DNLeAZ9p97WWM5RFbpasQ1bqgDsFYcvQHaE6zTjnxUxcTFEoMAA7YxErLNmEgMFyifEPT87s3SotnYMyfEqq",
  "key12": "KYDBqruwikrvpTH5FvfQtySRWxfAf3xjYPUHpgoaH5Euz1utSToraiYVdir8NxMpMsaDvJrou5fE1JydroL7sj9",
  "key13": "2grN2cKNqs1YUypcJBUjrGcFCi5SLL6QoGwQamvFJmZ5AZfbecnrvovouZtHZ7A3wUMmKrqFLaE52d4FojufxNgu",
  "key14": "51YDyWmXqK8n91CJFyb4gqgGR8JrBC13sm1cUsZjjKBhoKwE97P759tVsnrhXk7v3BPpecfyzdq2DB7VAkzUEqiq",
  "key15": "2yNaMsEtjVHy3beeKRXZfGc5XgmVEzV3ptPzRzsxpjmHwrjnBitFqREDNwrAZnsNRkfUgLsmGsRLvpmyGdJm4zgA",
  "key16": "5KGAnpGfsTnTxk2fdEJPWLK9buWFGYBe4jozqxqLBvygxyEpAGcrrhzBBJ7N6fx4AqaWaEroQ9SkEhbkm6XdhSaV",
  "key17": "BGq7mp73L8fJs1B98NHB2eBrnLrAxotyJvGSWzLaRF7VAMS8pR5M5twWHxxyXFPimCrJHM8GQNzGYzJSfmKizZf",
  "key18": "3uFWCiycAYVfJR3yj5XWEkVw4rpP1b7w3eAxq7QY41MEjyhB7FoNKJ5598cKKtET1dcgEDwgHPZFfykXMv1uc8zM",
  "key19": "274cmXcYcT6V4GMRdteu3xdqTqRXuFHXPZrs2KCA4FzSiUP4n76s1Hj3fKd1UZWf2gNEV4f1KQWKMnE2sXBNbJcY",
  "key20": "26BY58ULJiPbqmBVHuYHqHw191193Ljxb2ZATYueiqdWPNxAueAAQNnAZeakV6oWr8LyQX9W999kwKLYoyXCcAoc",
  "key21": "4ix5aFUJavxeFFmBid1pgnYyTrKPmGR5QrG8bgDdrV77hAUE7m4CHXMFbaVoBYvAD9TEdcQcBNNCbMntE1YNQaAY",
  "key22": "2gGSWDH3P3yoMn2AaHSAcZYg9wepHUFphiT34mEedXpuXkNa8xtorJL9LC8zqKjbgqwGx9mFHgPDtznAFtBKA4x",
  "key23": "3sPBrtdfjeipohAxFDrZaheSVWJNjZwcdLW7w4xmJJ2tECL1PMH7YNMXb5gDHGpuNEV7yRjHRDSUCBfqxPTidcyP",
  "key24": "32ToUWa6FB18NND6HzmYzxu8tjTybVgRxhRGzVELWem4YTLo5h8tffYerCea95eiYm16Cm2juVdK54xMQAHLhCdu",
  "key25": "3jdSXswYqGhcAo7jx9FsAJWgGobkbxQ6nAeWPtWukt4ez5HtmJgoUtGgZpVxqVu76dQTX6bkg9tUTgJCvhTGjMf",
  "key26": "4PXkATRQkEY2ZmFjbxW2nDQajDbT7cxB4gCXoG7vuU3UDBXmwcidFvQnSLGVTa9Wd7FMUx5Bb55o39UtVsqdmtzS",
  "key27": "3TCTDsWdbNLhJDucVyPqSBhuN5x3oWZmWTbq8PSLj6oXYwak5CTWhBGmoVKf2o2k7Y8hZeBkbrBv9y9kqJVZDByx",
  "key28": "4dEfGKTBV9bQqnMK3G8k62Stwu7JvgbgbhtYBhDhPRHmzgFv7KE1ZJ5NrqjmzrsHBA31EfrqVkYknyvtLa6rntjb",
  "key29": "2CeKnfNMvmucRjmDrzqTQ6xzuuvb8sQgrXkgjT76g757pgryMfjENAp8YzEDfDP5Rj5daoYpXeUVBwsuBnyCR2zt",
  "key30": "5TMZgoVBDYWTAXXRUbzYc5rAPX54FeqFMosbZBqZcbLHBbE133wi2ZqCRGB4UH3EdBFiKA4uMSFnetTNxQPXqBHA",
  "key31": "541ut4dGnkLjgNAf8BCUx8nFSm6ruRrsbHbDkBozJ2PAkF9bty2FGKfUJLA3gfpn4tbRNsXPmw6W9QF7vXuJpjUP",
  "key32": "5jFJsXUwsckvpuvUe4zigLsLeqMaYmtwY9Wfi4hoMWQTnKGG2n49Qt6G9iTGrTE8pfppWtHT2ueKd8QEtKVP9YWL",
  "key33": "35sLkn1TUSrcUDesFxcmzyxWB8zPivt3zKNNbn7dunCFa2fzagLjFfVbJ8QZ7Wr19sPQCV3MDTGdS5nHFCR2xLPR",
  "key34": "1mV7CcDhiApPRLCo5jU6wfbSQLbLHYSAPYBuD22xHEWYCvxtBZuHecRUo7nfmCWJvmRbNk8FNwTo9JoZBVpN3Vv",
  "key35": "3GeUxyQSKW13fEDv3Ngqd6134wEU4TAHkseR9hBiqXQ9ATk3hPFdCzMQL7eP2W8L2mBTLjkLdzQG7EoSq1p4mpyY",
  "key36": "27y6FqapaeKm2UURJNKoegr68J34sLdsxMXJgpruSRDkVxyCNVFtMZJ3jTGTD9GV31AGLM5FrgVt4Us2YhjfznH4",
  "key37": "3VwBzQ3z3nsCU2a9ZqwSXah7e94HA9GWaL3S9fJNDftmYTC43hoaWYPerYnGzQDyX4ETuKQc5wkzKwqDvMh3K7yb",
  "key38": "4qQ6N9jtUacXY25bNKZNLXJss4gsiH75oC8AoqGi1UdhgS1Erz37PBGvBWE7HVbAADN6MpmWH3uy4NqMpG1PYr6m"
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

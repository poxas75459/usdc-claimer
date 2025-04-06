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
    "WKzuv3SJ9Z4K3CCSJvHqnkQeT9y9aCMbZugVxVc82M455GNqqLR4hb5cGmzMrnPhtsnBxwqhgXh64B2fXzye6hm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AbiLMrXmqkDK4JooWzh4hn5nDTpHHg32bUp7fKNCmuiNA594jbapBs1esQP6zMyvtThYqDPa9UZnCGGXPUuhd2o",
  "key1": "2KVA17Ktj46jTgQC37gqUeaRoRc6wP2heNFMGUtbG5SYpbT7Y93mhQZBgG6tkzu3rXYF7uRoaAMaLrhrBkXpJ1aq",
  "key2": "4EMmHLbUredgHoaRLGLodcjCSM7qamVPX9cBHjdF21eoEBha7fYyDrzjfXCmhNX72TEBjiQiNPRzEX9fAqvm5pCB",
  "key3": "7J1ygHkNa58ZkaiXYarNT2YMwckYZGxeuBjQE4HzhdTJfFCQsnEMXywYkrGedtZLhSiFnP4nFkHBdDarQhzGfhW",
  "key4": "34Kg4BHXh8CbeFV3XAdndXyPH4r5qyVZAYtfR71SeQY1XGdUJSWhBEdLUrjSqUmMBtjr9wViATcHKVFYivrtUGWj",
  "key5": "UiBd6dNvMW22hYuZm79rTKFT5PrpuBVmUnt9oL6jxaCEsJqHmN1bv5TSJc5Y7iNY6ujDM6wfv679YKQWu4FGvTD",
  "key6": "5pTiQVn421iUEzA1cu75fgyiBnCnZMPG2e7eTVJ41stj4X7f9PxiBMdWuW2T96ckvkCn2HjAejmqmVspEBGT4F9b",
  "key7": "2UJUDLugtmpuXaoDerTK7YAXgbSeMr65usFKxrAPSEZuoHo5oVLghVpdt2qCp59SoVQ7hpSyYAUwiztQJDKiozv9",
  "key8": "4whMKKHLxmu8hN57sJKRV4aWGcD39X1yEyfUmLd44LYQEMqKuC3k6eXu9eC8Ei4mHTKh8DAQnH9QQ5tEepyQYeDv",
  "key9": "5tP9L3oMkn9tu8TVJsZQFaetJh25REgcKZVsmyDcZHEtaTGSXGkMJabqjgi4NEN3p4kVvVexFt9KgTkKX3JbER3d",
  "key10": "2shq5oxc29F9N5sMHZGA2CaQoep4aZKqDk7TDPV1NcC955jiZAP2LCv8yUgcJfRvqHfBT3SvMa5Xgv68byU5QW4J",
  "key11": "2ZfUMXC5gXUZBie5TMehsrGAAL5RBK5nfRq3adN4ZzB27ctRa6dUxgDkLxyBX28sopMmQQCzTTvabwuuX1VhvPp1",
  "key12": "4x9BAVhEXmbGBpJceqNbwBehhTem9XFhELkV9BeugsDmTh3quZHGQj9rvZsxieibXLL7RYwEDqYVKyDhZRZPf3Wc",
  "key13": "3yqrEmMJxXA89cn9mfCo7Fucs9TghYEQ9x5MVerCe6cjkdH7FME6PgozTW1vC7EVuBPhUS1jTABPw2z81jchdbNo",
  "key14": "62cA7t7he4LCFe1MjmkPSazHP9LjWkPDbwvCzxqDwq2Xe3Zeq7YnHCYAbGsgh85jnMQJ6CdzyMUNL47CUCQCP3bt",
  "key15": "4pc4vQFuzqvxVrs6g7UJtFvzKXk6iyG66Lz39qViMovDUkwqc59Chur9is5CAhmtNW6yHLjhdTgkptwdSsgDJu7F",
  "key16": "4KKsLXppJtw6oa4Z8ngxc9wEkjJ9w79wPj2vBG7u31SPeC5wupkRb7zD8VAZZcPH6Y5hzFS2zKxjx7wrVQZF6ioU",
  "key17": "T8D6dbdFZNSqJQsP6B8eVxtiUDntpqBunDKD56Js3GFRVyf2z2oMVLa79f2cJjybUemWWpTrcv3y2x7Jn3invgY",
  "key18": "4j8CvnXkCsPUJgEeJzU8waB5n2m4DkNt2PyDZ86sQiH4sDJru6gVatz71G32DSMwkW4iPXzfXgVf2CbJ9fz3h6H6",
  "key19": "5jCXG8TgBN5zFZrnfmFTSfhQ6qQBZfrMSnj6CGqQh28BZsHQaoJh1MgvDGQsHYQww22airo2Ni2BwkYF78M8aCN8",
  "key20": "3zYxuP7T8k1pUbApTYw925BJkVtdR14NicAW5hNoMw3t5Pw9KAk8L6zADQHsz1vDpfo4GozzPQwAi4vTgmBNeFsF",
  "key21": "3mPANNYP3M1c7j8nHRfoo9vLmsCgudHECFPjyN8VUnmLQqBXkTfurgrjSAtiRmmyzKH7L3qUdkFpANGGqtMGbKb8",
  "key22": "SmwohWCzPR1nCcNzkF9fFWQUs9xgCYKRcog9tRkSuSAEfBKC89FwvifkR8CZsejd7SdcDenQi5UZ4BmDfQNzFj6",
  "key23": "2mhLydo2uBs3Wmq8eED4MeruXe29gGMnoVur2C5hsdRvTkdetKYftLjKU6KJRqUo39dqGZXiVd4ZjQgonHbWDREz",
  "key24": "17NC8VMG9CYZmQDcA5ZWXqwp1z4rQHAp3oxcqPvWm8r5PLdacuPKHJn4ayt2Hm4Mm2ENbFuZGrjFRmQgyA7XGCX",
  "key25": "4dgbirrggCSBtubY7m5f4qa3wCju3ssd2CS3WdskPBeU6ehuMz652QxHhzQhZowsVkzPaLHMJq4jEJvHGxoxj7yy",
  "key26": "62rrCkbMj4G2vZKvj8tKtQwVLeGa7kECyWBGRTjNVR1AZm8JYeR19ttxcLpj98iGtVtJdFE6Sxz8K1x42W3SSSTA",
  "key27": "4N4xHZ4Q9tgkQS9Z7d9tK9jiPkm9y4kr9Y4HQv7fmFBYJdtMw5a5hXJjL1st5PTLGZUaoRXEcmpeG8nTNifchM3L",
  "key28": "2NDziFYodnMz6N1sPNXLFC7sdRngMJZS64mFSEVtJZFaEWs5LrarcPZqoWJ4SR1W1KguvBgV6DFocYyo3FtChkPo",
  "key29": "4k1irejjaUgyko5Q94QzhQB4e3HRc6Tnyk1zykXypTu4h2hK4TCxDfJFzAW3MUAkm4iTryh4GtrnWXMunawFs4P8",
  "key30": "2ivnwk9dejkGRqgh6AXcDbBodThb4ss5YYSwnJaeSyg2CcbkyQgj3jTZtnbiDMT9uD6CykcvK7xJZVxtP7TDFUZd",
  "key31": "4zup1JyFvkysfbuJ2kxNZjqvz8j83MmCg86PerVeSXNNXtFdC1MZTPk3KF8dwBspWZPAksik4f5kdUa3BjvVEcou",
  "key32": "4J7WvzGSar7LPAwUajTcHCffn4DqSsmEWgcKd9p1njgTnKc65Bn1WPnmLTSw6RXdFCWLZNFF9ZPLjKGXqEic8Qih",
  "key33": "LGyw6paTC5t8muHHEXFPutZn8ruEwuGB3FCH9NsKkxxX6mKHX7pDDhDJxtSzYnDYEhgFVafdBw1YUAxgMcjBGp9",
  "key34": "5ef4XAmogTYKYCNLZCwq69LAq2etKG6WUNVsQMyzyD93jgug5PPEMfm6HswDUURHJp1YLrPWRcE38yQ49XBx78AK",
  "key35": "3anZjwhdJTchXm8mYMG4ZoKsvaQ1s11WhjZqyj5TjdzUGM5Jd4MZQ2WyGCLjKS3wcndKUHFSCmnrBWF7MbbjAb1e",
  "key36": "4v1iBxRBQ48RFL8AVm8qxAfDWzTJCcqBNeLtDcnnzZTJi8z5mc8AG8fRpCdRNYs83hUcGtK5TDUYWsTaL6SKJGNx",
  "key37": "3UvQhBGLiMsEQh4gAc4t2RG8DpMaQLEpcDiqfX5StD1ovBGxLP1CKquGC2vfhpZ9sWFKPCAo1ZmFDmVPzL2xRB33",
  "key38": "2rBio9BNtitE5b5bwpM6ygkjsZMFTTQmpu2QV3hBbFc2cywkVewSbGXJEEu6a37RGaq2m7ZdnjhmTcaGeEh1YDnc",
  "key39": "JQnGfTsAs6uZ1fqRrrBt7V2vnFkuFGX3oBsMWbMLRtn9FuVNvnbUQgvz64Aj6WeMUzxy59aXUhdBAuAjD8Xj4CP",
  "key40": "qCjTWwfZLzR2srURtFZTzfVRY4iEGuGS4VGhFFsfaQAjzevQ7YEfr6nJUR6oYx98fcbToHGcHcFGAebYH7tbeZB",
  "key41": "3GGVrinRhaEQsjzgRNGimLeByvTgb9PmgaAKi8qdVY92f9Y57LazU9pb5TxKXo61rJvqJTMcKFdxEZTbXNprEDoM",
  "key42": "3DP1iEzf6gwZS9GWvbxVrmvgCQ3q1K4euSkVTBCRo3pxuXMu1Ezg9Mc8GUv1HHbdtb9AUmL38Qy5v3sLLuh6jNQN",
  "key43": "4jj1NEBC99iwuyy9RXg1ngbPvwpRA4sRyARX3EfWWVmiJR32qe7Vr79ViyEJETLNPzW6q8xyWDTZTn7vD5qxEyrV",
  "key44": "5uMg53iWjJLpvkYgYwbC31HaJCrYmN4isAiQ4NBw1wv4a6jTYE19N1rEqn3EyWNRjKCksZ6cr5jMaAzN86SGwE7B",
  "key45": "3UFCKX6S55yThewUXfcQ8VAn5eTqD8t2pJST1KgWbSmKDj8uZ7vmFxP1gh6AdGv4L8ZMQPiHxaVpCaBAgC1D5tqp",
  "key46": "2tAKkBmn8V4Q67Huar7xziScFBqi2DpYgYrpUy9fjrwGNrU6YP3YpHsbmH1dDZHfzWSPEFY24aX2cXnMW9ydURRo",
  "key47": "35AKYDad8titPysFyMcn4NCpRP7wyjFuJr4gDDT6wUtYH2jvEj7ZuvSNKd2zozyp2GuCYr83au1pgSXJV6xNNi5u",
  "key48": "5njDFHRSPqAwLHqvGSQbofgw5bMxP1DBtGRpEohnCiC3KwqYWQgjoURmPM82SKJtBwTYjGd3h4QN7JsicmX8KNBu",
  "key49": "42LCDkhpC42UZUkfAFpDk5PDz5gh4iffjyLzEnRMx6hAi3EVtZTeA6eLjkMuxE4uLVukjkTB3c92Hv7XDg8EereH"
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

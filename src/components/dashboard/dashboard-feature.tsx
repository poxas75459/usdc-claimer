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
    "iPz4zgwSxniksPCRAGAp4f1w3sZqeJvehFLmkEPqD7HQur8ZK5sdBdBZe5DRxQWAJ8GEjVqWJZvM5ZoEzLRNrzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tvMvpSGhJoG47V8uuB7EuparY5yngembA5mJTH7JtFPEaeG3yZ253ttKuWiLkPfDTs64uqTivV1S8MJmGYEz99c",
  "key1": "3SC9m2jbFV8mtSKwUS9J9mSR2zyJfGpGzKuRDzeZW25Szn9ufuDM1suzTp6RSzMviMhuqZ45PJ5LxRJY6Xx1VzjW",
  "key2": "3wdMgFhdrH6Knm1AQDA4wsUwE8oMuW5pshLRwnhAd6otaV2qNcuSC3H7GDeLVL7DKyTzbBJpXGzrqQv4QayT8aQ1",
  "key3": "rSTDTY2PyTTuBLCpDQjQExJHSpshBU2AHLU4Rjyo3eMRFhjXcaxU8mcc9gUHW9obsZiSUwRVuNsThs8e4XYMYcq",
  "key4": "3TjVkK3A6GfkkJLDGkQW2HdwhrBZ4NGMo4SzNUoQxxmRuNw1hhzqBDARpGT2sf9Hzvez6qiysKByxc3jUAKTdpZ8",
  "key5": "3JQoFHThwEAD629DYcuY2s2rHYzuqq6PMpk1acHSLcqb1DLBCGwki1cKjHfsumgwcjeKmiyPqj3uS2SYSaPhyJku",
  "key6": "2cRHSEonZ4TZYo5dwgfvyjXVE25ADnVQJ3vWgAh2Azcen5SMj3jk9YYDV5w3nCBzHRiRc4DSWqxEUz5WPe5aPzGc",
  "key7": "BV1q9sy1A8MBH61AWStXfCurqfm8YZhTFSSAQR9gymbsDbLCh4tnrpFN4JTRFYMYYBrFq5FhvdWMaFcRZm5Zi6R",
  "key8": "5rqQC3D9zVctDLzUpPPMwhGKjbWoe7cVYJSbwnoB9CpfpjrSVK7RsBCLGftrTwNsavkDC96N6T65d1fXxRbYAmVU",
  "key9": "4XJJLyvTNsmR6ndLJNwBkp5kZQVVFqm39BhkbbmZ6SCph7gaDYWCa6kVE6grZ68RprWd1MP9wCHtB4cooriq2rRp",
  "key10": "5jdry8GYYX2ZipjTazn2e2WoMBfSySpWRp7G2CubLnasxy5K2H9YkRAJ6CMDPtFwBkHhvTT4qCokhxQZHgPUq6zq",
  "key11": "414iBFt9s5JMJQMgQKbXzEbFQzttuFkVGhoqLUfC87wXiFwDqwW5u1t7eW6diJA8Yo9SuqkpT7urQkqoyHW8zoEi",
  "key12": "4RsL3m7kgc4bpLZNCChEkpyZHRKu1NfwPTvtH34x6Mq9fqne6Vyg7wGYFr3H1v6Xo4P6QEtF68QrVHY9ALYN84MA",
  "key13": "snk2h7YauLvgwgYgfWXUKCzDsEydPCdLd5Zq72gD8ZmU7eUVe6xKXF8rhusDR54Qbbd2NDmfVvimGLM3QAmxJDe",
  "key14": "7ZksNmWtckphm6ye4wqvax2qfffGPpeK3pANqtYyNkqSGeZa6Kuiba3xXpPB9Qzv9CP1BVTacYyYN8gRB4iELmm",
  "key15": "3qYhM31nspc6U6W2Rzc7hA4TFR7EVx8nDPDW5YC4x1bD69GqXWCa9ZhzXRLE2cET6V2gugMmVXqASTjL8sBhNQwi",
  "key16": "HDvmN6eRx5ov4zBv6UvEbZbbLi57pAbfj9V3fB8B6wFsLouHM85bpWEHx4LguCHdjh2Y6UeXia7uA9NKq9FwjpY",
  "key17": "438ArQ6c4CwBf1WU3Yg4BuzsTEZPLFvSKkMqLHvkv7iMQdGEzj3QLEaDzAsukueuXmMceh16RkUJs5MXGv21cjZM",
  "key18": "4WZ255wZDjAdvFeKgCETkVbeKKee9FbZ7YwUR6rcHax8G1EXhAGJH73AcXgtrgCfrECwMWuVRpLh39jgrbHkBNH",
  "key19": "GY1812jtkFxgZWGAbzLrvKWdLiH58JR9YWhebSPvtEd8QymGQdM6wfZRU7XNNVeTygMoYgD2XuaYYCbMrub11PH",
  "key20": "5BLM9mNNiwEWwchfpnXBmX6HujoToJm1t4rD951NZ5vvR2MXBKKYzEzbmACUSXVYztonb1gU6qM1yAfyt7Uy3eTz",
  "key21": "5D6Ko8a1YyhKi5tA8Di3w27ZQ58MyoQe1jvrxfQQbgX4NmHcnxon8uDvhRs2CzgChvzXeakNnWvrKSjefVqMF8WW",
  "key22": "5FLZgBwQVEb8VAcpxC4Aa1kt1QTDUYxazDaAxKeG33bo5DV6uFguAQMSQEzwsbzbwmX7wX5NLj4Y7CoCqxAY8m8n",
  "key23": "3M8LqYM3e9yURJsgx8oN1LADNy63TnwqZu3GyH36tE9MiCJ5U8wJeNJ3dxToQu9wHSDPG6RBTa2EbRcE5mfytY5B",
  "key24": "2rf2Hg9QRVPoJ62TEMMXEmnQS5wXhDTVivkZhUwdn1Y8BwbM81wqnp3y9vGXnud9bGzVi2pZTR8qejz37LAvJPYr",
  "key25": "nm6vJpzkpU54dDZ3LhLBvqfTodsCABgj4hu5b4qBAGTfGLZk7Kyk9fh1Mape8FHUSdQJn8h27hNrpcp4ag2smsA",
  "key26": "3AckHXcFrvTxcdVP6uybRmM8NPeVuTbJ1tVd6HfESGPAC2puZg4ei2LiZjobsKrbC283g6cWvzUJvrFMHBMH4NAH",
  "key27": "3PqFwbBKJBWedSobFcWkXMQTxUyoKWDZnCfy1WqKRPyVvwSefLqkSsQgpQ7xtFsnJdCgdaBbUce3ypxZoNubxh2Y",
  "key28": "2Jn3YZVCbJnEpWFewc4MYUpJcCHL26DhCJBkTk1jsmTWfWuieZHfnRzjAX9qrMNNoM1VyFpt5aLUisBgG2VUF7Ex",
  "key29": "3tSXGWHsevNcJVc9pRcBLMqSiK1uWFxyCQyqX4WTG33Wvh8auCgBpJY9qZUtqrvSP8s4sAoMbmsDpm1FKZZ2pnrz",
  "key30": "5hUZogH2JgPxZ8kddoQAqi9GEacZS58khwtzPtGvRafWw32vq4Y5p2RyZ7Z9XVjVGASLkxQ68QB1iTAGtr8evVyP",
  "key31": "52Z2zpmRJQhY1se8Azt4KZtJSUBFWVtWw71tsSDtMqJtRaxYv9vWADKUgaBH4GefXPwN3Mq9dMMAiaQvoGK1RYLA",
  "key32": "5anRLezkxk16R6BTrkpG1K8exsQNKB68CrtAtGhWKSy6m96BGDscFcJ7TQKEBMrt4L4zJTdvDgnNYz7AN87NBeWZ",
  "key33": "5J21CuRy6B5pBiot3jheAGKs5omnWpNkgxSok2BaUa2shsu1udJ8AjrnBmUyxWfzAuci43LDWjTdHJMovH9mKSCE",
  "key34": "4imvuMwx8dPzTvt45ZJBNgNPhLGyxNLM2ZAovXDERFN4Grn2Hd6kXfhpUEnYXDJkzx5mgWc8NC7RovRdpYdNxU7x",
  "key35": "5jCje5n8neayyqa7rT4xhxbt6C2J5mqMEUuiV2gDGPStcuNg62LFTE44NTbX85ngAAc6RGKhmyEUPiuVUY9NkNNj",
  "key36": "221TUbYhxdhMYLrnsuES3btjsoWYYDfokEwh8tw2Qdghg7a3xQN8EW7eAFDopZBgLwzz7DzPHEKU7Tej8UzV1ysX",
  "key37": "4fB57HFttrwTM61J1FJPUXt2zeDN1YDCjcLgrTbprimQ5tbF9h5r59n4Xjg9Y2jWurGarHbLjUk98oN2gXdS4yDP",
  "key38": "4LGkh25g7QCApLfJWbX3BoJfV4xvqD9QyFPiEAx3kxxsEZe7evivHD2TDENmRxZgkt7VUdDbRXD7CNB2GdQjUngR",
  "key39": "2K72fJERg2sTSrpw5TtPDoxWSy2WBYoqETyoJuvaASbESyHeRBmzHmUa6LAQ3jtUj98QAUE9Lg46X6QokNrg1Wjh",
  "key40": "3tZpZUuhLvEN4YjtDZF5cMaWXg4vioErJ4UGyD3FEZrTpeNHXDZoywY39jc8EPt8V623rYr69tpLjwtF4GiGLAg9",
  "key41": "4JfncfTJJYjqBWm1KRBi8W4999pWGyYitoWVMSa52Hfm3rwk5EGsjzinjdXB4LGSHVmNUvPfCK79CyGDNQVPqKe8",
  "key42": "5ULpgki2zZtEt7ZNZ2j7Dbi9a7NmJAiRDJrsNroZC3NcouatbJgNV7SKvh3xQw9atfMDsXVtjScyV39YFegtUNLL",
  "key43": "2V9tHSHX3VMA7j53NQJAmSaEVtCYcxLef29rX5vWm4XhW1zPfkervViSc69PpySmNthAMRZkUptt1igCeS424JS9",
  "key44": "3yP2FKkrL54BsBMWCNVHiV5oozpLMgQb4qz9uXFYwQ6YpzYG2di5PFRR8kincnKSk3BV2UBER7KmLL7g55Uw8Bzm"
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

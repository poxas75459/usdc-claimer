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
    "sMuU7dp6D3VdrGRuLVmyow2imQdbdxZQpvuHujkDmX7UvKv5AxNvHeVT5x3b2cDePUSzAZTFw2TwCb9R7yfLWQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sG4c4Z9MB66FaPxwto3HddWNpxGXew7vtEonaeKu2wkp8r5pDP2pXieYCGU8sdfqxQQdj6xRJGNWdHiEh62Kq6P",
  "key1": "5XZT7itCi4piQmcU9akxp6cDn9WUfzzPDgHqckGDSiS5wVS4WjPxgj3dk9cjWwCxADGLv8V6vz4jggtMtq25YuoQ",
  "key2": "2J8kV59BNJ3LPyhHifJvdJBHdytgpCMMbeQysYZ3MAMQWwgXYM4omKXQAkQZQKbJD1sJPWscg8YVwdYUN1yxB4RJ",
  "key3": "P1g6twf62JsLvmBx6vimXcBh1pbm4qL3jk5wpKX83bSpMYsNHSgA7iTo5W5r7wmUi1H95oZ12omn6r3RHu8kvjJ",
  "key4": "4X5bxcVRVsc2WJpma83TYT6AUEVgHg3cp7jdxfLc6wZyWx43NFtcnxioNA5xvQ5e8PZ3YrzExxQA1HafNPZyrTWV",
  "key5": "4m8NNGScTgbTjiVRdmWyhbQnEYYbnshZHU1oejvJfhnXP9WTHU5ekFkXbGsVtrmEs2xnECNDWBC6WaGXzxnGfBf3",
  "key6": "66yZhu6bjPwm6utvCSmzH6etFdYJWPY6DhzDMgPCgeCrRcvCUJnc32Ck9vvCLATRH9RGmztd4jKQ1XqnHp4zhW9h",
  "key7": "2CwCHgDRVopgX1WQwMXooFLY42uJ8rS5sNmWvVYYe3WT26p2Ma6Eiho91Z1cdGZi6ZsSFNNbmwLFuetXk31omoy9",
  "key8": "3hDnVVNrCXe3Y5UHAd29B4ngJg1vExPQwsJLPLL1PwNeSE2RdDXJUSZjv12t8P9Hok569b9kxwCgX8Qnh7ztqTsb",
  "key9": "4pW9o4BJ2HNtxtk5NycAHzvNbJb55L1DkBLHivLAv1dmQZ6YMJsjnWsa71BkGBoNWVnch2Xsu9X7CHpZsiZeQ5dG",
  "key10": "2P1ZGFCyZSXBFbTWi3RuJfsSWBs6y6mmvXFAxe3UGzYJwkWkUPgPExQfpJ9KUmfUBXHece5vQLXuBaQFdT6qryH7",
  "key11": "2nvzd12QRsRGQbGh3mhjhSVbzC9iAh65fFvP3a7iScoX9mFBPPBkXjnexnU56NSM4keAmyWf8ikNHNaK5Xd1zJzm",
  "key12": "2LwtCgh5LWv7BbcGh7fGbnuZUYNzLC6oj4ko9XuQXgWocWcNZT1LcTi7tc3mzMN3bnsfCYnbByUZqiimoD1dHjbu",
  "key13": "46LYeRVfbFwTCT9iGNnv3EdfFpkrv1QPJk8QdXupytwA9Z4GUBycEgZXDQKVqNns2Ud71uxDcSuvevgGeSdsRAWt",
  "key14": "2cPW7EshYWdp6AsiowBu5vZ4pSTbFg6YxBnGNsbiNJVsdxcs2ZDgapp9c8SxfKtB9FXzqfR9WGeFQGZ2pTH9rptw",
  "key15": "2CSGfGGRpCpDFSuomGDE4jU14WuE1qWqCSWbWMEA2n8yNoARXxwHhHhAbzhdVvW3DkU9KrUSbY58TP2urMVSts34",
  "key16": "2h9mSvHon6dNaPESTCWw5VKEdaTegXnqokQb3utWiL76sW3zNXqWqQrb24UqHhGCkMda4JXZK3uzikspBjp5qsJZ",
  "key17": "2a6vCagH49QTsDWCyw3thtmtp13KkpDAu7Zw3uhqKnGGb5h9UUmBJhWxaCFyAtdREoW7nThz2H5VYxZfgFM8PuMA",
  "key18": "24FeqCrN6WRSsKTt9N62cP3QEMqCTsVvGC8jK5TU8Y5VGYjyXitfBGgqTuRZFdoqwbA5qLa1wQq35P7mPu9a67V3",
  "key19": "4rNg6jNQiuG4DH1CC9YCpSiP9oWfosWDdnihQQVPs4NdiAXzc5YVjLiPtitUVm8GMGUPcQ1BSAZJzKq5dR2anEiv",
  "key20": "5qw15hUJGwWPDDPjHTDAHGxJFzeQFX9w4ozovPjvfqAVau38MkZF4UMo3dP55Xr1srERxEpreP2pCsJJE7kNzGnf",
  "key21": "3VrDrWeWSDmAsu8uvi7kQF86KAYwP1oLF54no9HQ6oDu1m68fzadfsCsDio8VapDoVWY9WTdXcyDRUNF7Wkn2AXU",
  "key22": "vtgiXgkzMzRQ65zuPgqkHLYDoHgcEBstyJSdKDTC8yN7GCwtdvPuFYe12pRPTfX1mV726J15GqhjkR3CCssLuWB",
  "key23": "BBN6CinaHsZcvZ68Ra6G279YMMxdmV51sViMmnk5J83e1XykgtJ4NXApqz5eGSBS1Mu3GGWQPGTrBdW8e1Y9KSJ",
  "key24": "4Pn6eTvNPYtDVqU9SsUaMgpLwvX3PPTZTGZwTX9xhkM8XJNXznFwTBLCU1XrAsNUYtZUVb63uGjWWYSdLpESG633",
  "key25": "3PEfmkd4oQrd834tJEVw9nEvHKcy8wntaoUc9VZH8S16z3kWnxFwwAuHps8gkvsVcncq1fRbQXwUcyC54ZKsC4Lv",
  "key26": "6kQMZAyB596mQMQHraxQMPZgDgk9gUVmnwQusPKWa9K1ZHe3Ni4BLCa6EFGmXBoehsrVqC3Ec57rSw7GXnN3bbc",
  "key27": "5DrhTLMCe2YKNTKPyDi1xdNJmkv22TYwrCbja1KxKKL28Pwh54mrK2ik6eEfScEFhJkfd3tXcRw8iHZe7a832mhN",
  "key28": "4qAyVNDSLjY6Maw3i5LLJpuc7fHQzvWY7bvL7GZLgAwpy51QKHaUP4fVtu5oaFqHkK7qZ92Zck4gjZNiHVgVg5SZ",
  "key29": "5izbPYJSPksWYNCE7mhKwYqNNX1SfoiY5HMFqRNBZrpVz6PgVU9P9vjiHYBWx4MgudV1jqoo7Cq1mKokyq6c79w9",
  "key30": "4iMXzeCTPYdeGUPwqrCUB9ozAYoQdxsgyfoUGKFhqwCeofY34n4PW2phSNHCKdkBkYK8G7rqc9utCVfeCMXVgGNH"
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

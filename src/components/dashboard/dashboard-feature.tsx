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
    "32wW84qxR3an4WuN99ARkAwTwSWFV7GF9HJzeMNdFr1CkVbwnFsQDto7vZDDHHNKm4cF65iGXAiiZyhUgcjxRd7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UZtfVzxZgxthT4N9UL9ciLx2oXjQNc2Ms7drWcMggrSLUF7dnZiWzcP6KYP1gCiKFEamRJvTaSHNw1txWGrr7XL",
  "key1": "eWYgtXbLe6fv6Lvy7agRzgJRGtsMc6JYKmNwf8cFjnLoeCWZmv13aAASP169yF1KqM9MLGKmXeizNvpn3pnnqf4",
  "key2": "pvVcArC811ZP68twtFFZP13WcUvFXwsto17PCT53GKBgEh4CKxCnSJqWkttefR7mRhQnjXK5er1dFxmy51YsWrJ",
  "key3": "59gqt5YajRyYtM2mADuwWijkfJpNHCyB6Smq9uNa8i4PmhLoPR3KQwm2cEdYsd1pVuWcxnv7kroQtgqfL2nvA9Ac",
  "key4": "87eh9uGxEj5bmg8BdTxkEygcjrxb5XfUxHTzG8q8owBHp9rKpufaRH9bGUi96FRMA1RTWc3eCtW9LKR2KyuigMg",
  "key5": "3puukR1nvPnjifNS4MneaPajjnFjMWUMBrMwm8DJ9yhABcWqFArwhbooSqPavhaqBP1zBT1QefDhNFGwMPsBBGQG",
  "key6": "21jpdFtCHq9e2Bw8FTPjVeV1mAREHKykFgTBzHtmiw3JjXRexqugE6n4qwjUQ9TasEg37hb5uD478FJm4ikU5tHN",
  "key7": "2dRh6v5A1ZU2ASxs1xJvKHTqjZpGpwN56ZPyFPgRQhxYcoGtLRMQBKgs5tnMLcqqRL3Y57wSRWvg9Rz7BRLZRh3r",
  "key8": "TeUPKKdxY6k7KzZDDdWcDWhwftCdv8L1Fy7q1k8AYozENSWD6JKYCBM3dbDrUyPNmqbT7npho7UUKvGTQVwu217",
  "key9": "5ihh8T2JQjJqhnrnQGDAtJbZk1xs8RzksbkGZtfrSbGRZymMMbunKBe42u4TJkzcPj4E6rQBgah4XphNpU9b9sYY",
  "key10": "5X51vLbw4G9bFD9mje24gAMEY4rGEcwq86S4Ahmtb528UyhxfXGYdyDgBgBBggCUSGC2Cmy4cZtMVSNNbj1HXziz",
  "key11": "2buw3pbeX5x7w7TUZQLJFN9nzK1dDSpzXuoRc67gQaPv5kyptyma3BfL7ugNupGttYuSSxmB4iKUp7nNJHJDGyHb",
  "key12": "4zzEEGrH3EDaAvTjvFxZaPFnXge8hivy2BazMVMcQmLUGkynBjTpzW2eDr37vqezLgsxiWd9o6CMXQwnm4P5NmFk",
  "key13": "2djABBBw5JQamshMhC3utgtjWNf7KPvExDxFp7KLtnirdfRdsniGyJZmXZdDPESCddWyUQwkADcztty5X5LdysLv",
  "key14": "59gq9MfA8sZLX8teDMkJHBWG5S2nbA6v1X49ifXgQG5FgfpaKSAv6zKnfmuj8XPRpSxZZiGELcn1m7C9MUrHewXu",
  "key15": "3Htd4UcBkf35iuuAhtHdsmgCBRxUUdnHzfs26hfFKeRbP6mjVqVZ7TAR2QAq3Hf5nBbyP7e7FuKBsiw2JHkKhkus",
  "key16": "3g4wwnf2Zkkju6G23gT3eFpg8uCr4Bv2Uwi1p8xS2QLDTMAw3nFhzbH1KWDMGCNqcCQK4dPBCrGoaXk7iAe4wk1w",
  "key17": "4FfQ7xphmC7eSWs8qpTqVrZYd1eSzsLyBphYo7yPQBHua8BXCjDUjR5Z9uEsJ6q7seUB8C7epaEj8JyQ2utNbA8A",
  "key18": "2zGnb3g51hZPTA4z2tegXMYXQuMuutt57rR1Kpj7rCsQAJuR9QtDwU59BUwSPaTU71AVMBgfoZL9BocNKR8AHS5H",
  "key19": "4kQwZz1x59vccRi8YU68DHPWBCV4aUS9zU6w4pb8zUZixCJSN924GynE7F9nA226m7gvgwX7uQ97VcxCEHxSn6u6",
  "key20": "PWbzfxs6ZuNaiP3dL7Er9XTg2jjo7e6asXqoXdFA5FVsEW4PDafpUAc363bcnezWRmm9mZ2drw6LNUtx8bENtoL",
  "key21": "3Hs7GGXsATrw2dfigfVqDrvGWAwX4j7mkWDiHYhrc37Waf4Ebu4KeSS2fgiw1xkZBWqjqJEzge6594WLe3aHPrrH",
  "key22": "k7wQvoaZfhB3d1AtGPm4TmkXHxJuPnKZGwjVEhDD6HPmBmoBSLid5RsvmcVxfPaff6fNVDXU3Lq7gNi2wdW1m95",
  "key23": "2ZicrbUvEKtGfhJQoddwgswtifcNEbGSaEbU5FHdt6B6vZZY5ypBLY9AsLdsniaeR2Dk7JTLbuwPeN6qAZ2H7hX6",
  "key24": "4E3XbyjJnCxAZsNVoq3anjwStjShJ5Q5rdRfGhKeoxF7rYUwDyES9ZfsZ2yQ2yWs1DUXDg3nmpChKTpeCSq4xRhb",
  "key25": "bqSb5e8ruuEFiwJNR8kkDfUsfY5VnnWMZet1iW1dFDCzWRz4ineWZGrFmGEZKE6brRxRGdXbaVWACqKPx3DBQbF",
  "key26": "4pAyoHYxgxGnrBf7a2dFJz6QmMCvuyrmDywftkhMEEookttcK3WxePQh8pyd3GX4TVEkt7hekBsRV6JzYTbNauNR",
  "key27": "29T1nwcEz2QSeVNgyNAR6QsFrVDk36Epn7uCLHZRSYiJQxPoKDWDeyPNda8rSwRehR4CCRTG9ewHGqBYL4XfYGEE",
  "key28": "3fKMCyuU8VwihqjA4u3v1txXNjBnS5xsTxwhD6bF6ZfJvp2WEVjRLo16WdArn3vt6rPxRkiSev1xNVa2GhU8PMg5",
  "key29": "XtwdimccwrSFcA9T534ZnXResMNoZPsbZgrMV9QoBXpK5u1LT2SnVHzvcZwx7JpBonSi74j5p1PsNofpXaX4sNB",
  "key30": "3wdYtzFyFZzxax78hpTQ19zGy2XKGiLsEdfHGUPJkFLA6yHF1mdq4rkScXzkP6rPJe7ukPx4xDNmDKxf4jSG3tem",
  "key31": "4urYeqBDtt3TP298zXzwafLKmRp2May36WbqccRf7yoqjxnswMamdDw1fPzo61yABDCM8qKqtFXmqj3fp5Uc38uE",
  "key32": "5ed1tZocQT6XiiEQGLQ7UgoNro6D8W6tdooJEevovNQvQLAbiM3afuzCQ45CFKNqt8aUEtvvCeJ5Uqbp3mjvtDtK",
  "key33": "5nWDuYCTb4TQyhK8A5mE7X9DBRtwXHWvgHESPN5qJr4muyqUWLJDvnZWmMU2JZYzG7rAnoeVo6x3bTvTLfkKbvrr",
  "key34": "2w24MdZHTwsvzWYX1qHLk4EBGMquS45LzA6gjJWor1smiUaLBZeejLqv8JW5A9oSBnvgZG1yiXyH4j6VAbscnNeS",
  "key35": "5LhrCrFf3js9eLubbhLKHZa1GiinZtrKVpqQKtbTvfBd5mLi7eti9HQRjBt1Y6xwiVsUE9Cq7SKWaDBxE5aLtNtD"
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

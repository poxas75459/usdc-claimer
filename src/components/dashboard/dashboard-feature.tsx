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
    "36YfDMFfGmYPti3aaaPCKDgsqZCeZUT5iwq3Lx4U6Pmdz5kHRmso35Bn8hbXvBWr1hiRBdP5Cq95CLGcVPvg5kge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cqzRHx6jGonW4uXCkwPEjPE9SP4ybBMULG8Sn3JF6qMJwxaFEU3PRSZ734Wjk4BxjDLDgeRNL6As2PM4CyjsXeB",
  "key1": "5RMGz1VRHv1A1KPaaJJUt3wEE4WG4KP8Xx7QQV3DxK7esPWfeMc8GTrptQRsNYXhDdT9zxNXTEt2ZQxrHdsNAzmL",
  "key2": "4TeTwQSdQYnSCSLqTcxDe5wdPMse2ScZUYjeNLJ11fjK2dfqtjdyQtDQVdS4qmQnMhWU7nHbEJoxmYqZkfWVx1Gd",
  "key3": "3CkB5FP3oYMW2Rk4jdwQwJTcgG7g6wVgY9hLFhHfd9ikvcg3NZURsjQ7k8kaRFEV3GEZZw9a4CxQuYkRx7nUgip9",
  "key4": "3a3FykbYjr95BKH37sPojeZcN4FMDo4Ada5NQRWrMVQv415SarrhuXWS1STsi5Az2mpCNmfdpuNSJNzWzrKqWWc3",
  "key5": "491EkWkh2PDDdkFfc1B5sp4eaJL2WULYdunAYQvmE5CFE7VNWYg8XnvAdrhdE7V26YkvReBgtph5fuT6BRjT9w2n",
  "key6": "5VzhxeHfiMsUxdSGEXKjBmUwk19umv1xwKjJHw8rwCL8L2H4S1fZofdSxuhB3VCYRKMFDRLP15egVU51mszGmRaP",
  "key7": "65sXnLALhSGmjSi4TJppLEWMzRFhpqo46bXJNQsm4HUe5PSnTUMq9Vap2MsAAAnZWfMS7cgDe6SjrLBoTF18pUDX",
  "key8": "2VFa7cXs4rzSdYF3BQmokdcFTxuiCtccbX8aphfeoU3KT2R2v4DvPnoPSpuu47rV5cYLMR3XgvKirtRf7c23qVwi",
  "key9": "4WFE8nw962mcDkRx7kc7r5gmkrPNhXXff86PaQhKi1KyGH6iDPWVSiQ38CMMV96kcRbsAFpuvexSarMRCK6FPBwj",
  "key10": "2xPNDB2BoKX1xLswX47PoCU1E3TTs3KqsEKVUPLmJr4aqyu2jh6qrrTpSXpcopSRSUrUiiwLm6mtcDZTgoiu1CAW",
  "key11": "5ZSrz9AHxNu2iy7XS6JhTibwAvuXdMGHwKmxJg7swkzwVSYhfmdKguCKCEn8YJuTywZuoHcdficcq9VpmStpn8K9",
  "key12": "3xsRFqAYHTL86jYPaL86Ynvuy5ouUutiQkvKsk59Kdi7VUcnWVdWDMwTBktcE9dyCogzDQh5HtnRdBbXJDPnjSmJ",
  "key13": "3dKZdxTkyiKKzwFBqxKjwA59zYDuBkkrEtRj1puPvPaafawrNSLzbNAQANSTEAHrbMuFFGfs4gYK28u2yawWRmrL",
  "key14": "PA61wxr8PQMjM1pGhhuBR7F5CZ8xWz8QsCEVNfPy2miDZCe4t83CAFkbJ6yKNFgCanrkKnvsk3B6PooA5nhTkEG",
  "key15": "4jqfkmLf4c7XSLLybYjUHpUK9jSzU5DsvaKLLEkGg6fLND14W1sp9eo9gmCAaxMCpLdZe8hHDo1YCprXHKGgwL4V",
  "key16": "3odTtAvKNgYCPHHzoFjK5izwBhfN7c3ejucg2MoUmREnTz4uFLnB8qFcdLfjNMZ8XMVhyorDh6wSwN3c5CSz4Zwe",
  "key17": "5AKyDVmgqVa39yPKkjjUvWuCTiXyvt53aomM41bn2t4GvsT3bLJerMSmPYiGy9XSpTvEsd89x9xUbbdXAXN9DMQb",
  "key18": "47oEe2eB2vf2ssyzBZp4oajwXbZdhpMTiNuNqzTq6QwkZHZbzooG4L1THHfcmXFNtyp8Dh5WNWRScCAfQmnegT8T",
  "key19": "3Z3bdivfGTB5vSkfKCZpocVwSKMqhspNgQTPRr5TCq8kzUao847hGqbm6gvdDNnHnNMUDNU9zT6QiTVQcoc8hddx",
  "key20": "4RSyHB6zYxFkJCEM2FNHoPYMgF1vMHJeUvAKPHY6Jsrgot52Fk9MmFmvcgV3veZue7e3EaezZnVh3KSBgdiX9yzu",
  "key21": "5bB1Qh2MRFHF4em4tSVZ2oB9gvr2TNxjLc579AEBZCGaQs7Y4T8WJywsY5BfTFjYJNe3ub5iid71Hsithvc9ZY5o",
  "key22": "5RNCo2cLSTfbvbS232Gww8tBkXk9WWAnaAsV383ZJbvFMCJFn9gYHMZziWbfcG1bEe9kZe2VF4zc2NVmoLLmQAXh",
  "key23": "5vr4QXPDrJFQ4H8roUVpoiqZAUwHyyBzyFiCpxYJqVbHGLz6SPMutuvdSVfop6ENcwXdMHir1wYYWoTazYbYYjT1",
  "key24": "6631TUKKimj7UAAXHTdkzcJqZZa8EVdGpzMF2A6SBst8EYZ7P8kaz28Y91PMv4HuSgdP6i83KouDrEDR9WyP2ZUr",
  "key25": "3G2SuUN2GUd8GnsyBgjXKpiJgFA6Ucrf9R1bjwYhzR8qkDpGd4VJXfvejFjUAa7qqf6XxFGJCP4RgVegjEXGEZGe",
  "key26": "tCi1ycCRFnbudtAWDVSB6Jq2UXa5eJGwM2692G9kya32wHfvQPCB8mhJFM7thR5CduXv6uZfMoqWD95wCCyaq14",
  "key27": "5X6f5HComDunxXhjXPGcsnyf1hTTSs9uPnjwxkD6kwpPM5kvPoW1su9RwMHGqGLvwZ6YCFNHuawASN5Erj1JkPsg",
  "key28": "XaPQBQQRX4LASLGXVQhhpXMKZVm9RwEjoPx5ebstzaNR51zQTbw3usQzDkshTignhp112wwKLvEojmBBEcaFFzX",
  "key29": "2zX6RhnW61ChE42BYgmwdHAZ8Q9rd6oaP7RSWUhHrgUAEJXN91ZKTtMqJrS9ZdFyKHLNnrkAJdpGajgr2xSKEwyR",
  "key30": "5ArKELdtFzCjAUN4R1aDCdDngrfTRyxxYUg63PuA4eJmCPuGCGuqt5EKyeuBQL9AdBcmMHUPfMFVWfbomDc6yfwP",
  "key31": "2HhhgfP2Xsng1L8cFYRYXGzUwpNKSBJk7Uf2jYAJ9js4WnugNk64pWaHWk7WRR3UdPqER2u4TACfEX6GVBTCdb6n",
  "key32": "3dpEkcpdmWRd2vsbL9ZHgySbNkUYhWebaSConxHvqFeGZ8p3r3ApJrvPXxQRGK48mNs79RsTP3bVaUi2TNTqJ1eF",
  "key33": "5MpazhSwHvDubDSUKTWZea6CD37MaP6myngwyRQhue4m1LWkaTxQ8xhaLBq5ezmXE2ENYbmcygFLfDEPnLpBsaFc",
  "key34": "5N6W8ReEzX26swhHJNYQXQpjCuKHK8samV5yzqUzUCpTDQpSVsv9CzHNCYNTgJ2m2arsqxeoQ1Y1asgJ3Z3mgTE6",
  "key35": "2uJhBHxAsmANBDvN1LRS7pZGWLNd9QfQxiFgMFEHNhZpXy4uEJJZSo7v44wt7Uq1sK18fLxhTLb54RsmCpU2JAtz",
  "key36": "2catoCx9Mfov53ZYqtSsmCK2rCCaJDVoigek92LkVxrDUHbFk7y7H8R9FaNJTnmzXrC9iXoY2rgX7MxMWnfswpei",
  "key37": "4JcG6CE4qWwtuZ9qij9LW4pbtL97i7zR6Ez5eUCrCfRN558vwhrFg6V5KdgKkHMK1AegkJF7euuTSeTPefYAzf5X",
  "key38": "5ovEkr36pz5gyoQEe86oyu4VpGzSpxtRmnqLAVPqGkdaiaWgYgFimx5u9j96RGejViVPiwkW3TvrVEFpZ7gzJWWB",
  "key39": "2K3WvXhzU7yr4hqQek786BUFymGvC1uZN3LsSGghk7LGpyrkqf191hQB9fzAuoUPg759cvqM1wc2yLkDpSg7re48",
  "key40": "5coLkrT1cUxxfNZkYxB3kunhg8rLfvnFHV1pYhMTMrf4fo3UjypoGL3JJjWA9TLezGuq634sgKC56NvYMdQHPdr1",
  "key41": "PXnCEQ7KPpBFDz28W8RVYrRVEz6i5hY8aGcKf1njGs6BVdbodFpEmEobXxu1SpM7CH3DB6Rru5QdmFmUf1smVvF",
  "key42": "5Kov1kiCFcGEojruLqozuvzS79ewQXuzsZkLbYTYqV9EPaJHtjMWLFt4b2VwU5jdogYUapAgsEJXrmfKR1UJvbRy"
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

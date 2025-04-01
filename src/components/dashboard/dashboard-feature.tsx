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
    "4xtzdCTpbAdWYHCWvWQnCQGWW7eFzef8GxUhUd8vyvz9wJEtUV1qch29gT5MbRaofubDQcd3WisWRvY4kjTYJmRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yG4YueCXhLxGxK1ooFxJM48FVsy1F6ScsyDu4pLKeTbSCKgcvH9zoihvzCBjyBUjT82Mw3DK9pDqrcaQXB3hLaw",
  "key1": "5wCc9AdAgH4Ac28ybpbonccbiMM1euKRwZdKYefhucZbFT9as4GLohUeTbgT1idjp2UMPBEsLSzSPpxGRRoq4k7g",
  "key2": "2dH9wT8gQJCC1kKajg48XP2PdRy6DE956EtgcmW7xdeBaiAy9CZvtGhJ66nzbpNdcViAsxVttUzWtCap9GZTB3Cu",
  "key3": "5FPvCWoeAEhYNaW14YFXAFuQp1xiZjTqLuQNfhDBRZStMzSTJTgpiVP1VNZbvfB46zfsxZbpZekwEGck4Pu4tpAy",
  "key4": "5zNvbmBc2duEw7znFUNtRTSuv31CoRohrCnzjTBULjcZJCu5Q4v38CrvX4jA9XKt6MEWYDCkn4bsK2hC6kS6T8br",
  "key5": "47yyGNzEuyGogU3JSfZ15NNgQsy82ATX3rWC3yjKy2aQ8GamvDnFBXgGcNxJj89YRENkX61yuDeEUYiS21A3X7PY",
  "key6": "GJiKr2uPv33acm3FVRudLRfxGfZSVfj3m99ALV5CrJPrhfWMejeUrHeuQa1vwoGdoSEr8fmv8jrpR4suSPYm7Kr",
  "key7": "2RiZHGn6Zqiu4pHezUfuZjho8wD3DHrKCjVAhExk1eG8xjZxqCPrRbtRSb3zY6tAaqfiwjfvxCGo8knrt5oVQMpi",
  "key8": "5J5QaqpuJUf211pxfbQFswL7mwck36rzAds3PVgK5iWUx5ZFpzEAPRLTqdG6LLWEfsJwuXdE9fkW1tmQi2QFCyig",
  "key9": "2nkntk4MJGcj6dxpwAoWgp1Krwen6jAYjsijZFM4kPPwMf2Y9mRY6wfYnbm71B34GGAQq2GKrp3gZD7atUFzcQdV",
  "key10": "4KeBwkP6exEJzkLDSJNjh7NJ2B2PoFX44LEe6aWP9r6cyWT9hMpbyMRMTC46wTjW5x3civSguUjQVBcx5Bi6Z9Fk",
  "key11": "3gP194W1KXt1a2i5DWAfXUPcdWdkNRBzUPBwzrg7FiJxWJ6BtasuntBiYA48ZRGVDdkw7K99H7wfDfinuTcPJeDH",
  "key12": "3Q6t3SYRTX3FpPbFZpivScGZYbWxFDPAckZDLigaE3yDTWa8gwhfMVuF6qZMZxpCk7hFYZeDTzhrp739WLBhsftf",
  "key13": "2x6qVAGRZ7NckCzre7wpa1E33csVoKsZqYSr1AZxx7cf6VFjvAHcZ7uR1Su5wdyk2ELZkLQS3A2pRJaVFLuXhzBZ",
  "key14": "zGTHcnXKu77Yi6fDaHouRdYs5NZW5QRrbUtVrcN3JHvjCpV6diK8oNb47GHirjxJwWjuB3mqUEHQrk1Hgt4xtVy",
  "key15": "5o84r4kitR17BMFCP1kY7cLNSHGPq19kvXd1zSCeZmHa3KWz4iFgLZpbGDXtCKUknkaFYy5j9fQBueKZ7VQwwfWb",
  "key16": "559Ra7qhhHg65ECJdPEbVnb84FbnNoMJTeqGeybk7uS9s9iPjEtxKqeRAYUeVb6bZPF2kvNoSWcfdrC9aKKAs6xW",
  "key17": "MnmaoCBSNojAgZsEFZmVdSP696aa91prtBPgvMjmoLFY7ouRkgrCtnt4Gtb9BNjAooVx3aiSq8iYjktdURsfuvh",
  "key18": "hYNRgxGJT9fjrBMtwZx3eADdQ8jZp7D9BtaGBHnByBkUG19i8AUHRYCZRRGXEaMrnwm3qvS14xbstPGVer654Am",
  "key19": "5RBozcAYNdZbL7N88BAN5bL4NNXbE2r7hYdvi9gqfB52g6opgzRz8kjctZt2Feu68Mw4YyXrJr9ofh2R8nBfTpRs",
  "key20": "2svz1G3w1chUdNKPZi6PBB3iCCMvToCAYYag3DPKPEU3oMvWPoQSjZmcJW9TL5LdQfz4PyCuz34MjHJfoEzPGcHk",
  "key21": "4J5C9BJ9d3CcJzPW9afgB9iStQoPKsyZ9ExHUajEqY5pvJXgF65EeYsmGxVjsHo8VP2DJbZYuVoeLzmkqwSc3Kti",
  "key22": "4ZZvpzjrdvFaSa8upz48qyJHxdKYrhhzhAVRjHvhR22gFu1zPtWiEVXWTa8sXf3oM6M1iY2TkpAArBNUQUcAZhzL",
  "key23": "5uTM6HcKP1j7nLF9hnwxC5r6v1ezSBM1xK9fsN5H3Cv722F5gVMHTM6rGvpTVX6vae2xDYy4nUiidVw8WC5jjdN4",
  "key24": "44Vv5QCoKs47tQZTVWfRnCA95nHRcgFUNdtJn2aZmBc682rJyJo7tAq44CjokGgmj4Dh9oEGftFDih2nUsCeNic9",
  "key25": "3Cje3NP7VZRvB4cdN37XwAuvfqw3AFUPiS119MFvDZcLNn6TVd3r2AULnPqV1CGg1UGvvesAXVnLuFWkmpgPEzjt",
  "key26": "2vfh3m5LvrKV3EDdiszJUXoArKtsFNduxp9Rj5LMHggVyLL1nb4w85ZWY8Gdjsjs2fwM7Aiw2CyGXjp7ZRe2B77a",
  "key27": "5qWkiRRbQnSBJvW2NNDYNZ4FMbVfPBN9oWR9rqsBUhyNE8cpkiYixhfH5VN9RogJAhxPUrCefbzHDN6yNwQ59Zxa",
  "key28": "Zf5dhgbccY1rUGthNtsetzJSE4qEYn6xrX3ZoqD4wxRo817xD8QEkULtzDZb47Pf9rxSpEucNHZMsuzLfemo62s",
  "key29": "5FaxxhqDsCeQXBRKoMX5VGa16sEeokAmMCRuCj5jWdMhcfWt4Uzqs4vcTvkJ54KtiAKmxWptYtpGWuAnE47h3jLW",
  "key30": "E87tWitF3kX4cNm8ZPbHPfym5gQiVhPAJpGSGXQB673nYoCnHL6ToBYhMEVFaXrFB9NnqcNdR7tiYh7MegKFGLo",
  "key31": "434reUUcA6ubpqeSZFTpULCHCbFEpUaozWKMX9q5ctbSUYv6L1jqKSLUGLfsuB89v3kdyfDUBfs4nhZYGTc5aimz",
  "key32": "2VStPhEbbzLkQQXPc8dTACrkEkiCYKScSL46jrUuC1qfujxA7oxZKf2qDMDqdcJTvnWcJ88izJcUzrdVfmd4eJ7A",
  "key33": "5LWvWdVS14gczFEHVcanYJy6ZNz56rSUNC4HD8nC52oZzS2XEpMmxJZdQtcDUGF1KM8JQHJjrYZSKRorkscXLdtW",
  "key34": "2kxnLGGpB4mbCs4HpCvKpYmppYGZPzd6tUP7KRvL5hvZfQMnn62UrK8QzW2gqtRYYtehNY2Eh7wZvQD3AT5Jyu9E",
  "key35": "5gyKEQSdannxJpgvoJBJXykPttYBvaNLTyP8iwJhpNJMAxFeukPk1kWLtvqVBqNs2TihUCf3J6ZpD1FAD6PAiuPj",
  "key36": "4rxWEaZMFxr2s4nQ6AYWyR6NYrwa3SYkxgB3Y74JTECfVbvQxTAvDJaqrfpXoqjr84g6Zbw6crwwxMf3aZRnduqs",
  "key37": "5NJTRW4gact9WkUcmmX9qoRi9Q5HWs9uBNWdMPX7kLak7uSnxKZdYormUA1GFtrGbAEBZqrpEp7jKQhW8v6q11sW",
  "key38": "2QE7bC3Hcx9DHtajgjsT92UoPmiHCjs2NQhQSDHcmGSgSzjaVTAZgadLG1gDoDPiN631RUwNX7rT1ZybHELuHTB1",
  "key39": "2HeTzYDqqpiCCRSpPxWR5FB5SKuhvjrdaUYuFJmtcsW9bobX11m3UoJRQFhwrcPuJFQJZAJziZKtDRPTMLcWU3wh",
  "key40": "3i7MrkWFtRvEfSrap75hjdZ8xuu65VgFb9xR2BkSgNGNBdsjXPcU9MR6CQGL671kUF2NZ28sns1tLWgKBqpzpczA",
  "key41": "3pS3uDupGybcez2rvFXWo27eAid1RdLLvUut5jNq4hn752oFbxov1Rd8LEg8UBoQNTCGDBExjBjWdnWV3wagmEK4"
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

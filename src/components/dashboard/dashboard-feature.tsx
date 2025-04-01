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
    "MXPRx4tngXMXVSpWWhJScmviMFPheBqgnFagh929LspHhWY87qW2BmCAjYf7MmsvUvgD1pqi8QmTDupj6v6h35n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z6e2Gr1PKjhNMpAn5coHqHdNDzc4ip4CoHPffEEsvwsqyCVTSzeZL2dBBt9sWHsk9zdndT392JcNekLZWj6Ztvk",
  "key1": "3vWMrbhyVBthbYBBjaYWtLidgavfRp6c4687pDfDuEGypnhx1XRcVyUcnHU3nVsJhquBMBwHrAR3T8dsYDx5pELv",
  "key2": "4y5f568ezdoZdVReV7wnK1WLSqXhMwEsP7ncmxmB6RP8yg1k4gNBdhPGvim1NNYQWWbG2mHaAorghfSpYZrJU5pu",
  "key3": "29EQbQYcxFu13VjFMBNF8oAQaAsDGdfAcgmscFPcY3nfdwAKpfmbyuRDzR7AvFkJqjK3Djo4ixXyYAAkHEPpgwQN",
  "key4": "4GRcLt2TsXykKFih9CATKY6YWcgr5ZUVYhrzQ6nywHrdUdTrTVf1VLf5sKJ59CkjvmDtRAMTZHcpXcswt1bnMAHN",
  "key5": "4xApJuQQ5XFRDXHjRo3mp3ZZTP9g9rBiiDAX7cJbpYusuXyAmGvZFth58miB14vavuVtTkku5gJWdA15NFDJoQLd",
  "key6": "Rh9UdPSMAfU19Cqjo1M3eBCcJ4NoQp8Nb9CGAd8hebqA5GdmgxYCQxndgJDDQzwBWZS71JZ1WYKUMW4k2hyyEC6",
  "key7": "2zA6NjHXDkzKuxZu7urxeUNDnNUjpvubCF6uGHy4pu7Y5qG53tPHnvP4tksVu7dBAf8DGYKPHmtKEY4G7sxJ94ZS",
  "key8": "5kCDDLqwcWowiQNqhaJNXYfn9K6emcBFiHYzXA73AViMHLYnvsZoTffSmQwDQZqpATCXUBJK2BSsxS4qQ71S2vBR",
  "key9": "22FKdYcUYFq7DdkFaQLPneZic4Sz12YZLdTbrCPmyJckKD6Sku1sibsf8RbK5mHiVghtejzAFEoYgJRMJaz6H6R4",
  "key10": "4fgHLMCXKUxieoyXgpw8QzdyEBVs355xnvseQ5fZABy4ahSvk6BLZdvwntNrA7KokDPtCLMcp5uvH8YS3dMPDjVH",
  "key11": "4Qgaspp99jrS2TrS3rqBd4N1CKMLbXumMaLkj5AWnC2Xv9szouhx1KKcza6k5gLzoQEzoiPvH5L1YiNgFSRbSPHy",
  "key12": "5xF7crrh1ZhQxdNmLW4a6PcuGJymquYe7mvXNAsYt87cJ1MWXu7dAW5WYg3xh2PHVimtrfEHrxAhdfUmffdv2UKe",
  "key13": "4jgL2561ZSWSGDuVPCmbkXgDtWqvEFBo1881GkHrjEfKeYx7urWi2oSJQp1HirB1Mo8CGpRkGNTUPhkHtxxojgYs",
  "key14": "3TD8EVHKVe3qAePh7j3RpYvzHVGfvxaGLDZdpY5Go1fnRb9w2y4NZbfhmv851N9g8dG2gyQTibDHagSEsRkDsG1z",
  "key15": "5CkKL8HY9pjwYW3FYZP8VfMsiheVjV55gRNLDKpBdUwrJNRWMv1Gfnrkry7SrTTZpPBkXvh3Q4akmTh8N8YwFRZV",
  "key16": "3NgLe5DxyYQ2ZLbdUWfJaGPjz7G97ZF5AwuSHDoDaz54CnVoKyv48UAvvyftSYAmh9wsmnMqgyqXdWhgTZJqEjtJ",
  "key17": "4SGT9JPw4HYHbCmtNwVChaK4zsBy8HvZZSUnDDw7bqB7ELKFC9fVYKsogPJMjsk9AfTbpHh6pKrHmgcjCgfXSKs4",
  "key18": "juVNxS3jFVED3U3KiQxzmk8rznmkaR3iCJqKG4hb4coe8UMibAVwHNDbF3KjtCCpY6VXK9A7ozDnQufCU6G6Mni",
  "key19": "KYNdjRhz7Kp7oLwpXsqsaTukiabDDwtCfvj2Ty3pZnd4b6fmMGNmYs27oaJ2xVu1QbHisqZbw39qcbu6E3ZfgmL",
  "key20": "4YihuP83z7PogxEd1m98RCmjXzt83B7dn9EZYBvDJw3Nv8sSLXQapRsbHaYNvwEKRvfJhhKszGXNAiGHbKMMVzYg",
  "key21": "4Wi219FM37ZFE8X46evgDzHLX7Vvqp7E1HNNmQDDiMXA61XFG1s3TA1LNzmG62SCfvDs73u9uehTvz4j4xF1twi8",
  "key22": "Vvwr24rcUZo3YM5bwS9HyQCrmiZRNLHvPsotVx1xxLgva51GkGdXJawQXL8j6qhhNBtbACow3nRNTyjDnjLgenA",
  "key23": "2aUnLqoz9Drfwo8aC9KPaSc5J46VVPHhoGtVh1TbeSgrzJHrRDp55fUAXjongU4GRQ4t8ibMAYiusL1ki38P8iFb",
  "key24": "jtZLZ6wboEyPbADSsAA1quj8Hn5gWNqVmMU2aVzo2LsKdUEK4P9knHkRaLbAQpWHHHrzqENKD8eNJ2fezeDomTi",
  "key25": "3T1jAizeSq5RgZvGTq1n555h3mNefpHQEaYjNngJSf8AKhdMwSvhZrNwszG4ppEmnbD7wdV4SEjQxoRyNXCdhr7J",
  "key26": "5eT3CNBmTsHJ63QCNkYnBWxZZUgALYAzhETBVrEnSuzKLjEdiBzj2h3pkCi8Yqtg4tQFLPwMAz2GEGnekPY4dg76"
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

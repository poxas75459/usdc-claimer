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
    "B6T4rE2rgbVxwQNTqNr53tamyLTSpYtBMXSTjfW1VrXVLUXZsULpoqrRaH36Vn61gE2fZDj953vNcFVLWo7LoVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRfwYHwPxMKnvQ5RUUtMVEM9U73nGtoqzm7Cc2RFCceagGC5YM1MiMpSuZ4DhDjMPYwWLswdjTqUQAFdDwCopdT",
  "key1": "3oYRdC7QEQsbeLRWWayzf4wpNf7Yqavdqknx1x5mq2NdyoXRsdY52E1DhWRHeRCoxJqVZL7AcPXQ52KXWykMxh5M",
  "key2": "7hyDsYmVkAbbtnYuRVBxawTSe8echBVWeEnUuvxfWAvGJM7MCJ2Pezgfme36r7d9QPXJkRhSruNJ9FsyvsTunqB",
  "key3": "4GDtt4nGX4kiyP4uLuv8oyWEynJzYyT8EFxgTokfz3rhL48voXmmaEcvnn537LFnN9r7ym9H1LGrLDJfxWNZv1LC",
  "key4": "4H5ExcU2L8zgAZVDSu1ig9dYpXLxf5dsMq9xaDCq9xoA8U2rz1QqGQ9441g8uHHta1TStBQLci9cHPtzBGPQgKD2",
  "key5": "2SvJFyzcEcHVhH88Qo4xiEbobRMtJnZWxoyJuATYEBiPuZii4DVNnduUTmzswtLpXAb17tARAeDP9Ahi843NvHq",
  "key6": "2fL5XuVbyNvGQ8HtjxXMdHSP7oRNVW9uQdvASkVx2mw5sQvivGQKT9VZN9vNsVyRUmsPKGJ1m2EUq9CPBnXoqPdW",
  "key7": "5MwquFcPmuviKsufktV78HqPF616vAxAdoXAT3aeYD57Z2yWLzmdKXbGUFjrqdpB5dAKHC517v2vXPyYTb1nRqeR",
  "key8": "2jmtHZCm2u6PZyFw6FT6ZpwP6K9Fe1uzeSoWcasujJnvYqS8CCSPXKvsXZLXj6PzxZ6PLmVjo1JATGkSFm6g17U3",
  "key9": "2wNjeRunB7PB5oqrsW5LcrG6paxxPgACtjWDb44xZ8mAyFryV1t5GbNokFAAL85M3SGiioQjo7NFgjKEZXvrMJCF",
  "key10": "29RXdPhHTcynTyfVdatDAY2PyosBKxfRDo1tk64ubymzQhCYAN8JDtFjnjTm5zo8dJi75tGmc38gx2KcPEkonLXb",
  "key11": "5s4buR6audfdH5575s1QfZyXHFJMdvGDpr1dUW8TXTiJFfxmaGH61jKX1GgUrEYzsTjbjNnqDA6uaqoXZnsbLvdZ",
  "key12": "2UV2GBa3e5CWvqGNGLZ2AaB4ubJN8EaaERfeMGpBfEsxtK8GmgsvnskwiK1tUUtRaUTfoXM2zzqkobJQVdRGSAgq",
  "key13": "4TbxqiFEQTW2WtACuAQWbDCw4EtxVJk21PtgAtQDNQbAqdvMCAq9TUFSuLwLAyD6jbe5Q1eXhtV1e4N1aGerRjDT",
  "key14": "4qFgCu6fdCJsskG1tQGBArLQ1gSKPVPUAagApiZmfqWfnniFFCD7ApXVMaVLWgHtEaamjX6YcnkyQSzX192Hfiu4",
  "key15": "49d4A9bBy3zYdkjEQkWVr4J4MboEjL3s41cEnzxsvDzKMc1EnDenFozb4urmuLikWkpDAsfhMC7YPsWZqMtY6MBc",
  "key16": "3j9JCPXZCna8yKm6M7o5RgP8R9546pEoW3BoJZnPbSCSuiUUhJ1WqmkpcbafPzyRyZfL18JvFMQrKASVXaUoBXYN",
  "key17": "3rfuF5KHknXzuCcVETkKB8w7Jgp2e2MdQAVmS5AVGAysc2dLCuciY3x4WTym7Bx1kT9ZQxuCWHZpUiEyBCwk1i36",
  "key18": "3Rc6V4QyBU99vaEsKh7UxZKobqkHC8KAkdJgSRTta1tafJYUPvRKedfZ9PtWaoprVE7VzQLF7h9ewmnw7osRCaHo",
  "key19": "gGUpgdyCiLsaw7DZzfK2PruwQcge1bsLkACY7MjAnsUeDNBHtibY2GjkP2joRHpKhLs4NT6zPXJ2Yg1k1EMA8XK",
  "key20": "5hoahGXyouYmPRKqW7yrWBJZ9Tmj5kSLSu3tei6dWLShyquvKm3yiWqL2qirtBRg5xM88VymawyXmXpyEU5z68nN",
  "key21": "3yvcnSuDiwU9qnyFLpc3NjhEAxGgxinXt9mFuVaVi6ajdFvMfdhXT2rPM3txvHG9XnsmEzDxuky3xbXbmtYUVNgv",
  "key22": "Q9or4AZuwCND8KLq7mb26gMxXtRTYQK9XkMCJCKja2gGGGhGmRz8k2ykQioo48wXcyXwiepg4J3DFTq22pePC86",
  "key23": "5r9QXV8SJBmospNujdr61hG2S1BUFVYzNw6XSiVBH5qaCo9RbAWwkWDegTz85MscUVcMXnV2gArZF4D82AAatB93",
  "key24": "2YH4DShutqTxc5bkVgoAZ9Tq9nBsvRRD8D94E4j6CjbfuKMCtTdHj26RVtD8JthD12cm1zKxYZiZvcir4UiYWX4R"
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

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
    "2FXWF5wyddhut83jVYRsmd9Z7uboNmoCfKRTTRfkio1rz8DVtxL5vTjEZXBr8tvzDRRcBLjjhynS99EKWeXgkxKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GFPEfrnoeJ68J7BeShnQmg8HEYFgjzaARRU7UBaSjDXiurUNQNpyyTVyFpRDVASrUaSbp9FhnHj6YUUjgkaBZJV",
  "key1": "5hQMPx5Mad3Chvhr8eTA2Fv5fuUHZ9h1KVnFwW37pnotFV99CffYgUcW8mmaXPjw8xwa4UZqznGczLXGw4HbKhrR",
  "key2": "4woJVjRPmtzxwAuCTCuEyK8aRGF5dqvsBgXiL8d141PRpasBbc1PksYrv5ZWLWLNzs29NPiPm4YkaVuLJYp5YHoG",
  "key3": "4Y4CrtoUsiTBxB56SnyciH6hVsXmK68eCxsvw3viGhGcWjXzGgXsUwpVRBjV6WYfZ7tnKpSffAnhEurA2Yzys715",
  "key4": "5JVojSEUw9RB8zueEYrDTfcS9QFQ81kaxoDveyQ3hYto5oRQEGxhWsSJVqZHLzupTdwNhF2vHkeD6FVRtx9QRENE",
  "key5": "2pVYnoqZupo1ZP3F5rJPtERvidFhV53842Lhq6JC1JMvEGsEbZHhkUKBXX6uhjJa1oszdCxuTVaGuLmw2vuesyFQ",
  "key6": "ZeWB9qWGix7EPCSy4DTPYRLNdiyfadn9knKuQ88Tdf2UsHyaTKkwYWBF9DLt4K5Ma23SL54MdQwHQZHymQu2sXA",
  "key7": "4VnQRAucXQHW2dUJmY9osQFDyHKeHgBu31GLieVaF7ndJD5T1TG3VKcRaHoG9Zj1yUD5xqfj6CMwdQjqopPSwdRt",
  "key8": "55n5qYHnRLQtiB8zG6fv9S1evvb2oQgCid8dRP5wLZWJgrjNvZf6J87Rr72dquFkmEDTXiz2LivqGmvjmSkNeDPz",
  "key9": "4mtcRR4E4BUANXguJAvi7qQdFhf4dPqPe3rJBT7rPq4AivBNLertuwT2p51me4kLYnff7ehfrsy8j2YRwPPJTA5P",
  "key10": "5wPJi3k9afJ6FMcRyfCNvTpkRNq33JGFLGQ7hoH3T19dt7XN8iPBuKDErKUu19LjHJPqbUAKJPafkJEYLe1prv8A",
  "key11": "2W7WRU33Sp9MYke5m7aWxbFKDex8C9VXpucEEFLFYcNcqcDJfxP3JZSDyanfjnHgacN2wkYzQoEYwRL7Qaf7kaLF",
  "key12": "5PopN6NMWi21WC8RAgVRxEacFTmZy9xv9aQ4h6nFD2ZmC9bGFMMK9jeZPkQz2kJHa4zKZJDcXsMaDiLNtQeEchF9",
  "key13": "VrADJWY5gC9z3UJX6Px6ccywVDW5TnDxAktPEg1qqTQ18xevaHBxt9f1FmrbiJRtAS4a3CfpfqiX5P6moSSjjiZ",
  "key14": "26x6MzR233Henpd8f8PrzFBHCc9GbkzXAzgQBoNCFd5YMD85r72EhVM9NQqgU78iqDYKCeT3rURdBd5GjHj6w41q",
  "key15": "55ww1Vga5ceBmEEPE11iKLhXb2rRT7PDKZTybGpe2S1HMpTdEnhcnyYZd4zXbQY86mvhZBxz7CEiqQUgXwy8LJhQ",
  "key16": "4NHmqEGfToPxDm86Y9LxhoHWjxkWMZuUEKeWC8ZFdNfubGqU9MHpQ8p9TsaZXWSpUNCU12gpBTDv7a6kM3gMGVme",
  "key17": "3wmgu3iCLbzpJuhynxXT1F9BqMxgfe6upBDiG1M1WPqXZ74qLmwL2X9qbuGc4xg7V6JGBs397GtyMug5oMjMRKX6",
  "key18": "63ibiYFUPKinivac49oqWkkF6iRzCBi9opEQ4iTExg2gbt9fKi29Qn5benZb8BzJbHZkeh511bsyT6gCWfv47EdJ",
  "key19": "4pLLhNPVq8zsAQtMqdB8U3U15pjZq2vaq7GCRX8RRakvqVHJLhRn9VVPh8aHfeA3Zu5YeTKfuaZnF4hAw7mjqQvS",
  "key20": "5nEKgJxZSqizpnPUU2jo5D3XQUVGWF6S9dUpxumAeVzmhHL43ZTzcSr2D2z2VeqYxG6GwbvLxxCgQf5CGGk4V98G",
  "key21": "3eoC3bHDZeQF2XAfydU4uS57MbGXywH2hdLppNXyci7RXHwfxgb1sQMi5jmDFAdixRN2G1PyY1CSYVJKgxDkNpKZ",
  "key22": "4zvAm1mwVkkbsoBHq9LCWXJhDXUbdmdSMN3TnWYEHJLgXNpbxR1nBYyFJL3d8W4pARKVji9PFwksjL6DcP9yTRvJ",
  "key23": "3oNEddvFtxwAE9Q4j3t4GuM5VwZMzYtTu4H1WYe7oqG3fCbf8pt2ZEGZsnBNQTqmFpK9p4K2yHFDeaVQGNX8CA1A",
  "key24": "48QKoQ8ZMds5XDeD799RG7A91jxksBT9zFZp3wmtyEryWFh5dXL37zh2EvET2iWacWtKL6b6AF8WmnQFTt94hetf",
  "key25": "FDesrMFfakad1hfsZF5tAc4aWyEhmdg6tgFKRQP6LdcemA9GujTTURhePU2GsiBcq9mb26kB4KtquTpaYbpJr4A",
  "key26": "3nXSwrwfhYnt5jWx7kj2asjV5BYtXSN2zYcmAjUdb1iH2xPQNTHDKL6Tt1kWYwpKDC1WpwoVVoE9bM5GxtvZ41ao"
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

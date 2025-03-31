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
    "2LugR6XgWtC2CTVzYoKe6U8pcQZv5T8jM1ZjeT7BPZn8rqEWkEhquWGLMWgmN9WsjUigxtH91ZKQwRy4iF3zBzok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bWV2SkTPTQaEEVg3C3CoMhxCoxtsNPdUX1Pi2HxDUu5EZ5gsNcSWfsesSXSB858MxJjkMvCvHgMDnv7oYmKfnU3",
  "key1": "22imYAo6NHYyP3qw3CCKRVWvrjj7FoCtdky19hwV91WypruSWeJZfeYzefejbuYWJJkQcaW7aMJQcq2Z4CWPHbRc",
  "key2": "5kXUcERRbCHbcubvpj5bsD3d1zqd8rvCNTZBiJfW57jaQaHT1gyDo9UWPj55XZqgBn6xkDAXz2V3tEqjM5c9ohbt",
  "key3": "4Dw4Qg5wyVRuHJoHwSm2sa1TK2TEe8pG8qr6J71EJfr5oVAGVkhsPLvVZf8RYaLKNs7Dhux4UZWt74NBDLPowqfo",
  "key4": "qEqWBo1Pbt2FtG86SiTvVFSGgB6TancUwGwpdtWPLJ8v64Xkwfx1Miy75vE3Zpd9Mwzq4YuT5xE5WzKiNfJpSfd",
  "key5": "5jhVPzEntxkfH1eSDp3bBoispJwZjMDNMXq5Sihaz3Nw5NcdDuQpTQCxZJsdDbBXs2fxyxbi536CE78yysKuG18m",
  "key6": "3ZkxfyZiYqEYdif1G6RDM9GP8nrtpkxHYjpwZHtXbVkvVkDACgsXvLaxkMWKD131PdV7bVdEWVp7bXBLjBRuebzd",
  "key7": "2V1BZyw6mq3CDo7wLyS7jcJ1LDakADiSK9dKy2u5McbzfLhc8tvT9uNZryFAwHG96dNySokzefcnZzK6asghvq8t",
  "key8": "o9j3fxybJ1Erqjtune8pyk1N5w4GKgYob6HcDwsWGM2tvEUZWvDdboHz2MtTv2WTz5gA4bUVUuEBSKwx1sdnDvV",
  "key9": "2CGpLM1CvSDgNChFU4F7g2QwEGomVW8mcvKKB3bRVtCrFempXKGcT5SwAAiGzdW1mYQNaser1wtkPyNSRqDaB49o",
  "key10": "263NYyUVg4KVkUxQGP5fVy4yhYuXMbGK23ewWGbC4S6sV5ZCehUgbD9JjLjvYw4QkMi49EYignDYkgqfHU6yoCWa",
  "key11": "9HzbZW9Uofu1NyhVZhccrPbfuiikjSkyHHTaY7F1bnYdWpCncjR4yzPNJCM2FjwTDwUBVHVP3UHh2bPLhAo1ZNK",
  "key12": "4E3CyYFmM2H2famzmNqcPDDsp1VmmeacmGStVLkr1inGe4U2kiRMTMdRrNf7zSELzy8ooRq4cvLH5euf9gDhLxmx",
  "key13": "3Y9erWqqQKkBXXL8fNB6MS2Ye6sQPVzy6VN4cbbuHBk1fUVBUp29Ypy867zDSN1B2rxnuVa9Tut47t8ownoGdRdP",
  "key14": "mBaFmcEhTu2EtrUtzvxim7mpWBzf6cb3r4Q6nGcaZo1s4UpNAZe8JwmPLA7Vj7MH2beYVTewVZ5oAMi3HtQzWMY",
  "key15": "3tAmPHfL7xj5Dq18eXMzwi3zuR2CSgReLxg7HdHSWgchuiBapcZiwUxv4CAaxSrFvvoQH5cnM3Q7ZQWuypLFZjTR",
  "key16": "3zoCGKDzNCic3CaXDGchPuCCkpe9rUcAoWzsrvCkq2UDV6En2tN1tsu4LM9YVLdhE21HbWpXFeZ11Wq3Hj7vcdMs",
  "key17": "44CxKMjBKrCQKXJMZMcPTFa7Kd3N8FaXR29GWt7Ttai5VmTokysSAtHZ28VWXNNNK4GDDqC8CkqVLQ8diZtSJJzs",
  "key18": "22D1r6wNu7Pk6D94SYQ8cXMHW75ppCyXwNzsVrStejcpMdagi4JD5NuBRHecEVMSxiGeog2TqZJuYXf5ZAXpWdMa",
  "key19": "518KziGVt4iwyJd5niBVjH6zaBKJ2hCoLzK43YoEpSEtoKmUrc5jsd7QLSXKfaD5u6Ju74sUy3fN5F54L63HDcZ7",
  "key20": "2oFpRevLD446LTnPshKk2o1wcdfdiL37Gt2yfay6sdkfkNMXhFVChaxjejDaVW1R3Mw65NEzoRRkAFLhDAG3bwym",
  "key21": "3owuum2N3Sfh4e4KNT9VXnvgbyatafGtdi3ByHVfsvyEedpPTrzVoPoQWZajmZhhguLsqH3pqJaaR2ABJPsEPqLk",
  "key22": "2syhEgRs8PyV2hqrRL4mZEvnNwPnJxFHrRntgqg6icCuZQ9PBUm6AKsdnPNeSnKygiZmccaoPrA2pbwgP17ZdwW8",
  "key23": "2NbxsHjEjiup6CtasyBmU5Y7t6B7XcDYrTq4xYTudY7KKxJQ6K2B1NJ5PKX6SR8ZMeBRyK8HhDDGoZEePAgoyySG",
  "key24": "2mfjHA7fhQK44XUinNRc2mwt7GWtdEAKqxQiZ11CEBWQzSGNXrgVaYF5X1czhvCsg2XwRhX4i3ViTZSNBKx9crAP"
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

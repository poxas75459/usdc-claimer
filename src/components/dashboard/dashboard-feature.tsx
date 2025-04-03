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
    "2oBs7AafN6JHsDGmepPXcec2nYAxe8s5VrAdk8DmrbjSwf3vE8MogBPedvBKRqY5EGTMNKbZeW33yjJ5vaCU7Kih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BLpXghuUxwKspb4oqh8RptWExRoBNM8Pb3TBYEHxFv8tk9KjHCte4VE3NNmFF9hLPdKcAd9YZ2hpfK3fe44hg8q",
  "key1": "24aN9Joowh9y9vAHy2vXSK9xcZdsekWaafNTdZt21a3zzXiqng6a77uGsJGfg2LtPqiT5zbX8Ypkb16JtsuwCc9p",
  "key2": "2giRy1WbMoHxrL5rcmyQeX9YsTXkeDmWc6tH2waNqfkXNDipUf8sa1w2a3Mhy78HkrewKp2vcNtnWAQKLR5WbTnE",
  "key3": "4V8VS3rTxHZxMEHVV5esZjSdRePQPJLmCmTneBgfScGJGq7K2sbAzxVJjGCnAZEzn64XCiPZ2c2fvH9GrpHsDU4g",
  "key4": "3PEaFmvcgH4xcF1QQkmbnXtSe4scswZ8jKQ26UE3wo4pYGjgVZUBUY9YjKDLmEDHyTi1UHhokhfVy5DZ2XqgvAp2",
  "key5": "3eh5TxxjszBGLtxJBLGDAeBYfSoZDGJMryqnsEz62vJJfseFN5U4QQGmQ1R28T9hFmejhRbxU99uYQm3SVMCrcBf",
  "key6": "2Fc8RRBW22qqgvVGrstnUmFzkJ51fVeAJ6sr6SpT9xeKhQaWadK2qPSz1bbGcLSX6iD9n6dgU3hAJihd8t4hjUWt",
  "key7": "5NTcVKUPuoXSo1KKRBnhmFyrTDhS19KnqtCGXcGQHAHo4v926SC2BM99zi9rD3ChhmMdRq86UDQtFQuA161Way5A",
  "key8": "2dpDfJxdHTRrxPSjCrf9NnpKKfKxmThnGE758aqTZWhAHShmYAQxYWGZSbc38BmPpHZhAsdr41KbZSFrr2UefWYu",
  "key9": "woYMpzdXWqTzjfpXBGYtWdQfYe1UhjJeXK9K9sFiorfVZd5f5QXGWjmfAcgSz7HDe8i9JhJUgL8mcKsyXR3HeAM",
  "key10": "5qxnrv9p2iwW22tsR7fUXZRubhUv1JiCsbNs5RvqycsnXbJZghkgMCSRMuArQ1S36itQphraNPAFQzfixrR2U3z5",
  "key11": "5Xu88WrUsCXtV5rxepzCxmr4Xe7E5du6e6NmnKkJgLZvHY6wP75TAwi6cGfTBDmuU5mzAVfj3ae2nhJNZyPQbAGb",
  "key12": "5yjB949o1jTfzEV1niLVNp8SQySLB4NPZwS6wZESvUo12dCUp9n1aL3xEbkrbbhNx5yZBvbt7b1nV1oheoAnNpvz",
  "key13": "4ghfnrZMcwTX34tLffxnmRyp1u8QNY2QSQpypcHTzMqEiBC9EAqoRRD1SkCe75qPVMw4MCdKSA6NNW9hGrvVYMHg",
  "key14": "4D9R3QtJXvGGGAwYWf2PxiPpJNR8PEC7NFEq4yW7W1pAH9ptyi1ZLvUVRr1wXPiLfKcPDELscSbtbm4ubhGkNsSr",
  "key15": "4oP6J2GzkBi3KYZnuLqgF9cf5v2tWTJ9f8bD5hm3iukfcUfpn3ERsBFXsfEVD4aTLR86L3WkquFvcnasUTKR8PGt",
  "key16": "2Xg5WT8aAQ5qf3RrkR6eRGyYxuyRG81ZhVhbwfhj7kkDLff7ZLkT26zhSWC7N6pT3NBWhZfnx1kf2GWVjbRxUTGs",
  "key17": "2VXaEYvaAcMRzsJSi2ASM32xySRT51xRwVTmK252BpAjJ3mSDgwimzcBChxRih8nhtxewHzobvKJXBzWyLPKCQon",
  "key18": "5oxcMhE7Ld5GqZKgg9Qu1wkWC3AHDPBpL67a8WBeMLQ5r3YiDqtMJQPziHasfLGKZYEBR8gqmBr6rRzxS9Bid2Pz",
  "key19": "3VTFPewQsegxzPZGy9Cz1pgnjzYYz7nb7deSnuA4fijCPQ91XAjAXQLgfpnH1XwfBBLQFHtNioCFqgGvVHxhuY4G",
  "key20": "4prxhRfJxcDNRMfR3cgzf54ySefVkNfF37gCSQX2Zk6upqno6EkgYEMsST9nZ7rbV9K5Kr96k8uEGtDxzKxgPwce",
  "key21": "3HhFVc5Uy5EcZASgETKaXHGtJ83siTJRcfBTsvc3LNdAmuchvwg12VYL44p54jfGQUv18P8BxhEJWjSvREVcTeVJ",
  "key22": "3pZibkphGAj4QHB2d5cNarxJ2oEnRFt38bM2ZaCmmSvpUJwdhgbQcm4mxAxmRsFsWu86XvtSPdUmw7x9wBkRXsMS",
  "key23": "4EfTzaHVNxtG6k9qgjMTa7m24cqY2A9XSgjsGZ6iyyNm1Z1ZiGn5oei8RVjU2MqYUUaGCdmPPFzT8BvGLEfc81uy",
  "key24": "eT4J1j8Zeq57rssU8zYoERgy4VH2p7N7j1FAJP1ZDS38oum3RDczNViWm63FSXJhHws4JEk2HFL3GWyszrbqFS1",
  "key25": "pGaRgofmdQv8unYNGpH4WBtTqSxt9sDWX22ucMZPWCBWhiGCfq5LLhRy11MFmeWaTgW4WuQEM99XAdD794kfoya"
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

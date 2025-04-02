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
    "64Z418LLs71VmUobwdMVy7LQUcNHdXyNnauY2zEZanqozp8frE3mXgcTGVxk8ihJJ1soowSqCBUc6UBPEkZ2hFG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gn1mNCFWECwrbYQxHZq2GficKE9JCLNWN4RtfsDLXKEDUaU9Mdwb5o5iBa3AgUR5L65GTYYBgePoqFosHdFqtWH",
  "key1": "5enJqJfVqB6tYiZNXQ5puNYGoUWMu3PfajFtPqfgxZRgiEL32LooCWXSR3SBBU3nbCCowZt1tjDnPjsYDmyFt1x6",
  "key2": "2pq5W1Feb4zYq3fBu7MZxo85PZ8VmpMUsDKYweNfNb7rDxywwbgEgoScZXJG7wwCzQd3DNuooizRUXxir4k3zpy",
  "key3": "5HDiFcyPZteX6SGWkgTyBCHeWqJNSLzBmCsDehYYzVQBSAZkPr8MKZbCQw13a16Jo7X6qSeiYH2FTtNZrCyGZsXe",
  "key4": "3fgviTo19of16VTSsTaFRHviDJneokcJ2NNoeFRYmHKTqN8jM1kXpoqfheWHsyoYV5zUKKQi326yX2s18cQ7Bh3K",
  "key5": "565JZLX8ky8jgugdukAABaxgBP51NEDu6Z3ZEVYzDTtZYvz12Z55pXNeEF7NF2MGk6pMVPZJCTzrEsxrproSLHnV",
  "key6": "62DQp6t9HWnzyvmXV6VybWihNDiGoYKh1BDYT5UAf33WGphtWJtNWwu3LJYykAA9UvSyaqZjakEVAc5v9omdFv2t",
  "key7": "5az2kku9hm9TEhtXwjaKcidWJUQiiYyafCUUyEyRjpu613h9oYMFeamCNeYttg7Rp8sNLqqWKbzFYovewQTbo6Vu",
  "key8": "BJk8VoPmSi1WnBRaszKDcXcwCsk9u6gGxdMuqG8CqXprPzDLF2KEvdJdghsAG7B2tdXW2eBvLz3MS6MuzuFv1aE",
  "key9": "5o5icYitja6jkHo9kv8BQLA3KZhkuAi66J9dDhrxXvWWqkDrGtEa19K83C5jnDe2dPQSm6bA5mwVze1AJypfwAHM",
  "key10": "3SrC3utexnc4DEVeyaHE3xRaLCyRdiw8Prk3U3e4EoaGUTDQR2e9XspGMMLdbhVvzKHNQEme7Dp3dWf8iZSrsaVu",
  "key11": "56eaaECecQihr5PV25Afk3z7kgzHNbXTasPU9fkXnGH9naFHpYZ4Wc3ytWqCkk6vr9t83Q2DksCTAdnu1rro6E8P",
  "key12": "6BfVqragEzLTzeHmqEumjtHT8a2sNJHUSHWNd19xPt3uS5T7uVZtEiMzLMFhR5UAAK9sQjYfrgM2fkbVFiusQCi",
  "key13": "2BvEbvhjTgBPa5X7aAyJYaj13RCXxcZ8LueJCZmMqx4qPD7bPPtD1Aze3nMwqPjM3uVjLPMKiwJXcTWhyixAocUY",
  "key14": "4ejAbBMPzWfYbRXUvHBzQ4C9gdZ1ALiiv8bxqt4YbAiW8jQTw3HG6Urgu8DTsF4hUTwcSpW7RSgFHphoWTWfeBML",
  "key15": "3WWSrgxheVi6ZCUY6DnjtLmxRVxmB3uPFsfpkHSjsCojcJq6jGGYphsqkk3tibZLhjrqVM27Urdd57f9HfRtz16g",
  "key16": "4jVQFrf7ihCLfTEHVSVdtE91a8C6jFMhTTiDDPjZfbKQ2won7px8w5pBZPgT9AL83bhf5GejnHHeXBm9TZyqwcuc",
  "key17": "2it5yYJj6PoaTVeY9ptEHpubnSkwwNG3MH6JfkrAoFCfBQaPXz1ZnNWEmPcLTWrJqKFW95Q1XbTYnntQwchaBDsH",
  "key18": "42ZBtxUxMcKn29kYnN7D7BLomzwPp4Swp7edGGMbMW5YtpGnxS8MpWYNvTpJ3NtMmmperKKgAHDFPeoFfaxUChVy",
  "key19": "4CFiVUw1ZUrKhZwRKwCsER3F6F7r8KZPeGThvC6De24anxutFcjtJbnf13cCLmZHLeyaS1XtpHEnZpSCTZSntHMv",
  "key20": "67AJvWLtrF852hBYx5eBc7DDYKK7JhVjYwmPzfUHohfRPd57xfiKBxJ621keTMVWThh2U443BrUGi3Q6teHE2uM5",
  "key21": "jtGMDKj2LqUuyEcH1NAPBQakn5e16Jd9Jygek5gkCRHrvHoBjdDPQ6KuDA4b5nRMx7kqQj9nRkGhBBcy53nUZiS",
  "key22": "4ezxdz6wa5h6YEvSdwe9jbpy8LTcfmMNPmsJs9Ph1ETHo2pmam5LjfWGZuya9WhpUooAsocfsvBPzhsP6TvN62oR",
  "key23": "5d1y2UjNZidPxrsNxG9skAA8SrGkEH2ASSCCmaH3n9LSyM1EW6q7Zq2cFmtTE81Qp2HhAFMEvMRykSMqQhxSTqKy",
  "key24": "6R2SiYegdWbe7yY5aGfgTsHQFeDZxt8JswFbZutNTi96xkEWEGjwRhFRBFS7fXnstKXGXNCcr4c7CAgVuUUQS7g",
  "key25": "4WNvYgq1imWggadhmTPeZ4vcB6N96fpz5gs89JHmfXHkEdr9irCyhWGJo3zDZowBBZ63dD2H7dJ3g74QQZX5QJHN"
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

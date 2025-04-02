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
    "4cSLUp71UX5HxwdxnvXYebgQcwQ1APBGXvquH5QdVaeSDqQgBUMqxUFSHUUYGA5oTLrS3sQGeEfjrmMWDCbRUNKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i7xaAfAR4gjA3mpLLkbXeB7qSG6tQEuFVPKDSQipYK5YLfLJxfgTC2Mn87tbHZAAgZ4pgAiH7iKZcLNXsSZYuh7",
  "key1": "4UK4jX1WUGYwkhc5oUQuBEnUMMCJc9y9DcbgFJzPvES9z3bQ4odXMrHeFDa35aBJ7vkvQsosEihjd7aA3NprDvsR",
  "key2": "7JXvZniS452G9JMsT469hPHFMbqN3CWWTfMd4zwes72ZC9aNWXpVU7FhQPshHgbaAM4K7g6CpxepoMKYWDzhaHP",
  "key3": "4AJkkMNQ6KgEjYsmn3r4r8WH25YXY6Rbzm4cikJ8eohyowzBLfnbwY7eQJvfXBGFZB7cvCQtvLLkbzbmZkLai7bx",
  "key4": "wtAJHidXhA95gKcMbkdcnvAUwzMvShEiiYKuxK7MBhKg73V3U4LYxLcVvUWCzkvQ68oyB396Pvo9e5MXCZwawJL",
  "key5": "2ACmv5itt6rAe1YgPcq6QgCfW9UNWF9HtQGtbLMq312L9TcdT9tRUyqB36TAfk4KMttCPTrpQjamGEw17vDoQU1n",
  "key6": "XcbyEiuWo6bbfA2as4ASe8kDhmnQneVpMq9Zc6N8737CRk5sZ8biEqfLURqKmWXhRQ9Wp1zcnB5vx9iS6mcP3Xg",
  "key7": "3mbAchigXajdUcJqvVSd7YRfqSFg1JgnEJjyuf22NXpCQAi9GKUdNauq9kpuuREPjVHV4pn6P3nQXdy94SKmiJeC",
  "key8": "4gEsKdcQbkhHcd2p5rhVEhzDWQHuxcqKpPEakkJ47eSt8yDqZgGxBMJEWicX8rNpNunpc5HmPKwRKopgDAW6u2zd",
  "key9": "sciqHhRwQkoMTe7Qi6eJi3ijxu2XRuvvCipGuGXvti1yckV5od8wL5MeYFJA3MrQELGNpxUTX1KJLsjvZYc2jgY",
  "key10": "5mNShNnouveKbt3suS9iHyq8tGM1FNsVtFSKevQGfhTknAzMFJTPXksEJUDXwEnFyHVAAagdA4E2oN9U6UBViLSA",
  "key11": "2p74BWiGD9UZoLdVQKKnP3JHJwAK97ysvPtswkGGgN8UvHgyr2AqDtApVbYFzhyFUTELkyjC1SEXUitGMntgTLgB",
  "key12": "5shVygNDknnxxwKtQ8gxYiG8MiNh97cBv6S8KqXPqGWBGLfE3pqZGc9j9MAdJfwNgDWvEtEB1DGV5GNZGa52iGf9",
  "key13": "3vZ2PpCxfMQuAEBtVwT89KBSoX8WDe2RCi8vqj5DYKLq51UxJipMgcq2qyiAykPuRxoyfyH6sKeH7yxyMRBNRkHb",
  "key14": "25tiZjwE6rNFLLs8U8SFnGJV3vjAiHqk8Qp8Tjgf6KT4Qxs1i875hJT76PSErXKZbRp8WTbfQDEYVX9izvSgCkFZ",
  "key15": "wXZfxKUmqEkn5FPKwdqgMrFdTENhUkNFeYTixhWY1U36usTSsL8JPnnAuHEjjYJ4wfpuqCXj1zGWh8LNQGCa1EB",
  "key16": "2V98uSn6JukxkfCvypPWofhEJeJygSabiX2XmXi4Vd7aWPyEYPUFvVNPwZzqk34x7bkkZAYwfYYVWNh9kchyqwNH",
  "key17": "2vsbFF3uQHGoj8ESveyKrBUfyWuaCjymD5VUwTZFuSwnxtfYvsmSyWVopZL3rzDkZJM9KvVTF1jAjHc1EPtVSC7R",
  "key18": "L2u1HQpYW5Xbj1eixNhFQHbkRczyVqBpu7F13wB1GuSTt3df3yNXao1NoZsCTT3fNqcKLUcCzRBxSP4NvNLtDwe",
  "key19": "51UDwXZTKHY8n7MaiHE5iBW1A4igSJUBUNKY9RdHRQt581v3eDE4qBkDLV9c99umjGQCDTMcp26hkGe7ckpviU8Q",
  "key20": "n4fEMhe1h7xg6qnTxYm7VEXyxCGhLPPe3zn5AzFL1VVKDAWBY529eipDfd5pFtYnooBa2i58siXxg825QV42ovU",
  "key21": "5YCUYjp9tBSfE7egXtiPCWrZ4rsNjDipLfJmKDqWTpwiQH6pHXmzrYFFWhWuks9bB6211aa85DNPBgKpCptfK6Qh",
  "key22": "5rtBfDvP8575oNaEkKvkfcLVExAY3so5zjRUT7VnXsYg8TkfBEY2YQnTZ2E8oU2hk3Y29ELiXfCHbbtZzeVupGA",
  "key23": "3CFgdcVVSQX4FCJQyu7PXbqMr2G952AAjfYTm3KQvsnk7T3ccQBatBimAFB1VPw1U5y9gwWFHsQNSAqVvT3znn1b",
  "key24": "2XZA7uzzuAoVdZEqk3R1sA913Qzt3rfZYjrCPMNiRq8EgXpYzPDmKidDbQGSCRNJx25uzzWk8jjVBe3imM4NxP1x",
  "key25": "4aUMexkv3zzTRCPQj6sf1Vo1kMnUTdNy3eQxFPYf9QDEcTrgMmjV1jCBybKZyaD4AX5YWf1e2fDQX1aW5jynZn4j",
  "key26": "67kpfokgtJEF8dYsfgxg97ztygN7eocNYzAXZRUpDHkS29AHpmd7cbQvemEaB2bViSJrUYf1ViLAoVGrgSifQZ7G"
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

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
    "46rVjyes4GJWj8aHm68oZeo49dgf1iurF28URFhjSAZHs8JhFUUiUpjAGvnPKzWy5k6ySqeWNtbNrewtF6jeKVeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "553p77ZhTTdjF4LRoTZZze1re2FQGuvfYEc7CMsF7TMjKdczcAC9RYAsoAc6hgpKkquifdNDhCVedgxxsQJchGYq",
  "key1": "2mzLnZt68Ecop6LN2ymgrdMnFhBkVvH7Z6D1zKB2TEwNK4VfYAuBKXoHJGR6ApnT7n2goZM7Gt46a9G8FcgV7g94",
  "key2": "55hoaaCXmLUCs5qAMVUT5aTVKvoCGwEiZj2azsWLREoxgCFpqtxqxLhfPFVUC4tcnXxvhEhYXr3Pz14RYsRTe3g8",
  "key3": "2veMzEUJwfZg1eWBPXo8HwEp5a9mtHdjGNLVtxivZTJZYfcGCmmFdBtSGDWR6QJGhNfV5PyRCkhLQssPjGyCGxPg",
  "key4": "3jefx2U96gUHdyKH39fhrpDHLxknVwsp8u1Dm1cBfnYaWG22ECTJW39qafWv6ggR6iU9GSjVCyyd88TtMk3aSLBs",
  "key5": "6vNVGJ5ezfrEqdgiqjFvWW7VwcRs9SE7fBEFTrANDugm4AMkrz26Pi5p1APs6Nsj2PLryVStGToHJmLi1uQiYU3",
  "key6": "3KxHXLmiQMrES5xSRxPZfP82sYTGmjZcV14ukTkPZ17kAZUKt3ys2Wevu56f9kipWyR7aa2NaziQSbSiqueUuyiW",
  "key7": "3YmZJucbUYAgMNSvchRWuUUqHTnYYYCG8L2QiYn9vFJwvM5y4vCtqdx9FjUrj9exidd4weLfhJ6Q1277qPqbx4Nr",
  "key8": "UQ6fJn9qUd7VbrJNsX9szxZ9g2EfbaSpo8p5PNrBnwAyKJuqjZM88TNY93EiUWZUiEnrKJ1ZSVkuup4dxciycEw",
  "key9": "5Me9aDbqAmdAXUUk7iUJ9a6F26JbxwuxiGKi5FnTbBiPzarrmW2a8oz14Hty6hhs18GdP6D73WouKVodHn2455vD",
  "key10": "5a51YezBGxDoaqudT9hUrBjkp9z9UtT3PSYm8YDpKb2QZG1AQNvNVrxEwAnmLyehTUSQBf7XNuZA2yTiqH3BPfty",
  "key11": "4bPhfQVQX3FGaqVgL9x8yu5A1CQJUNG5FKG6ifCzXtfyRxdCoWxDZmaw8YVzW2mJM8zLksH4oZfXTzv8zV4VhvDh",
  "key12": "9L9LiSvyvwN6DiKCRCC3sdeM3HCiqnWHVaxZoF8hRnzzBpGMUqXDVuLJvyHTM75Z1thCTtjRU9WoBTLdMTfGbYY",
  "key13": "65Lakx7WLE8d5N3sSTWzxCtCuN1HAoA3fDeirPG2u7E1H72N81sHmYk8maikkqqd6xVpdhTqT7RFRki2N8TqSsQ1",
  "key14": "6262Qy3qqKVfyLFendJXzXRym4ddHAnJ112jSZ54KL1oMhthVwUr6DiBVVU13vEfg9g66ENKcisTZ4NZocGD3UBH",
  "key15": "58ZAnVHRrFjyvePcu6kydWLFkRQw9SuwRJZbehF8JZNtTmRKXu9jhEL4T4fsfrrgZtvCscoidQAcJ63TE3Sbahfj",
  "key16": "5XJvowyYV2utkrJxG7xLRWTGNTke1GrZPzuNXQ4mAsGuhNYPqMT5F1TQwvtLbRu8uxognsFYth5GoB6x7wGgiui6",
  "key17": "3tXXnSL5Fvx53NDbRHJmpZxMTS28NS4Bs1E2xhnKWBT5BPsYPnn3uBFGsBQgmP5wuh2Tr1gA6z3Gu4CjRZpNDzMH",
  "key18": "2WiAo4L1a39EerqfHbgpEZXXdQPpuocKGPHwowMoYzoeFWtJ3y1qEPoBBnxzLevss4AKfMpaRj4SdELJWUeUXads",
  "key19": "5gVq7FypYzPJuwB8ni1Sy2Jkd4tYZKRCbfspnKzJJtbBkJwjBk3ZnvJ2M2wq3XN4bVD8BNSpaKAHb77cKCVAtZMx",
  "key20": "3PxC9GpamRhiUjkP229FdxWMJZ4FWfuzQ98A4y178MiHxpQYPU2kCi9uP8xYP3BBXf4Qwr1dpeVSsdn3skTcE3F8",
  "key21": "w2EnCBn4t55QNYwT95cUZPjUx7tA3Zgz1GuS1TddavBANVPMGwwNqRiwXUTGyZp73JBe3pwuWo7L7Sz9f1cFoWf",
  "key22": "4uxLdF2zNRTSBu1HMQPSTbEFFTs2XPGoaGAiCyL6GDmbkS5XHkd3Adh8zA1qqnGZCFbvsYTLRJbh4pf1npPxeQv8",
  "key23": "2M9qNKtj6hMuYmiX27qNWF5kmhKCNzJBxDSj9fapPVZzTFKqL52DDUvqXnB6BiYXHBHXrq1oG2oje8uJP61VtFRs",
  "key24": "3TunB2JqzYzd94DV1TD4eX3RwLsFBnWPArFPtLPNWpWnMrTqGMmqkDtqsshPxAGGX1uVh5DCjNqMqG2MUJ4mBrax",
  "key25": "3GVNX8Ep3AFzUD4cxuSDfgUjF5wL4neFSxdY7fSYNFqRm7W7BYG9DVA49tVujr484AXVQfSJK5uu9ABx2pz8TKiw",
  "key26": "5KKPA7rwLLFZoqKUmNEh2j85j5ooVHSdPcCZxku9SnjwFnwzJnjaekiM5i9cgymMGipMFfvGmmMUTXJVWTaETCMH"
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

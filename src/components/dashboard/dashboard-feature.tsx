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
    "4sNweBGQDx2TMvWXyubkuE3iXATFbeHqxb6cfmzAeGSPk3uA1LAjzZYDi4wZ5e29FUcY5PmtKPwcy9pGLm9Wv6Jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M6C1GaqJQxnJQgVrhbXmuTq1dNHwFqM3eQjzvnRwwD4tKN4ueS5hC9XkXXgocpxfBd3hWH7rkehb8wyv9TnBao7",
  "key1": "5jdURTtVNfcKLiU1re9ySuN6d37DGdgYfucZjnzaQtnnbxwByXDJSCFrF9ASdBTugSihkJjHxPbkGiwEReUjz14d",
  "key2": "4BCcG9iTTsYP26o6GqzYmryjt2D7C2W9ibufcVAbws8T4mPt7s9xVUFsxAbQw87Dqa41txePzzxmjE9XP2hgEktv",
  "key3": "44jqFPW9hW87rqx1sTyvhfcRdtspvY4PPrGQXRhPuYSnhGZn3UMGq2cggKtboK1ewLN8PtL9mGX5jP7dBoEwVJvR",
  "key4": "27xtdP7UGs3yy9Zz8yBZRuaN8MwxepvM3K7jzs5KoNNNXRrG86FiDnmeFV7zBmEV9x9N8xHPVAkXKCWtnsWYbra2",
  "key5": "4igK7Ku4q9eLuPjX4YMzwU8eFzkCaZo39ogasgJLHyPcg3WbErHm33MHzUAvCBWn44CW48qEXSvM9dmGB8en2eBD",
  "key6": "Qv8ZhpYQqoNgBEGXcVJURdNxELD9vmeVRdLK5RCABjAgvJLEmyjE1T9a9wKVHEnXwPrhfGiRmuuieoufYjKKA3F",
  "key7": "3kVdLxujHKU17USRiYNzwgvyo6zbVBZsEojMnJDQNmJeK8azWhaCXZEBn8sQpKkP3BjXeGsnHVHuN45JfwpP4yni",
  "key8": "3J8k3UkjBcP99LjPPW1a2R4w35wF5V9Qd41VbEsWKmeTHXga8PUsBVrTnDkMfGvUjRRxizmM4suLrboitUzKiX2D",
  "key9": "9hUsdGb7nggdZPSwXEAVuGAAXR4e2dZaPKfLfi4UxWVivKmQgyd9o5ztTZrJH8DKfi4CFYsJ55qKnpUqrcgvU64",
  "key10": "uEhLKUKajpN5hGA7NfijGQ5QMD42MNQ6Dm9784zKbzDi5otzBHb5VZPHxPg1aBkMY5VYSFV6JHFq9WGH9Zojrei",
  "key11": "3C2KVbkLYVrMUrQ2kPjZ4DLWitd8c6Pajs9VTZikyzZD5Fiwc4utccUYoVKqdQrrbdGawgWrNtctkZgFo9a14y9s",
  "key12": "4kG8x5vnRcgTRptfDbWK7Ua4zyW2jNduD9MLLLNvWttFx5uCP8enGMaKRPVmjWhimGjm1VJSm8hFCfkvY79SGUmD",
  "key13": "4DTeFDFRjgxPJcbgWvP3eE1VmQaMmAd4mMp8v4BFoJXueKpBYgyE51sHsA6UMmg86eWsAPYfiGjMLyEtTGQo4Hfe",
  "key14": "2A7iU9VAVnmgBvmh9rwksFoazUcay7K1E2yEL62ULskz6EcFohJt5jMiWS1iz4V42JzazKvQyc1fJ7z3KAxZb3Gi",
  "key15": "4dZP73NNiu9ovcqX9DYFQXm962SQAT99AWoE6B273AwqbyMYarn7agaDVrzG5Pf7vwbRn6yiJUa54gVzzJnBTK6J",
  "key16": "53tB81iebMPZ33VWzEmxsJBc22zaZC3JhWLT6cANPUDj6S6RFFA8Vb9mz7tCe32ENFzXFevXBY1eRZv6mkW6Awe8",
  "key17": "65KzUAxgGBSDEUzbYa8yibJQ48gFagmnAskhGKzWQ2tyeWFqRuULUsdXPrDwseMUqNJcZkEXN5mNx62xBzFf4TRD",
  "key18": "2S9ukAPJywfXgCrFxozjX2romYTHKwVhdG58sACba8VK3gssz9j98u1BK8mJxiNgfUCTUCnqY9hdLZkzDEw9WQGG",
  "key19": "yLjkEK2e9Y8BypKKuwxbtFTG59fgbpVPEZJm7V3dzjFR4CfCp37R7uLjNTwM8AGy1pnSFWCQUBivuGvnX1ds8q2",
  "key20": "5dVMzSWx4Ejqurf1HGZ8Ejfzrjt3YkHpPSoJb5d6tFchkQ6v3dEqX6nz9rfX5aRquyvUNNpN4JuHj1eZMFiaHy8H",
  "key21": "4Zgdj3yR7echhnAaRYY5cDRVCXHqPUbzRNNiithxvyNe8LrtqbRxxUmD5EW5xzHYX6WGmWLJ7zBTYzB4HnrJcgzh",
  "key22": "3UPwk9a3M19scfrFfc3pP62y6rpo5nreU9zPFTedcLGsAVGQ36UGdtsYs58WPsQwD7qCnn7sevywowQZExNWrMYH",
  "key23": "2Txgd2Jfe1Rc3zQanrXziB78BWw8QUY4Lw7F6rY13wtJ2i8tCJRXUbrp2b2LaAw8Dm1t2w7SForPu8gXSEw6kcGr",
  "key24": "2Bxmx7qxoNrLbY2SZ3VtktuwRc1EpQ7t6xdaE89pvMCzHziEBf3uX1eMruoSQTbnRd52zVoe4qAQgwVX83TEaXEk"
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

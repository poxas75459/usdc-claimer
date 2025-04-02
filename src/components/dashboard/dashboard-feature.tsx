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
    "3Hij438L1h5cvakWBSj3z7CQE1F5hamg6onT2yWpj8aVdgrWv1rMH7wnkMmjx3K53D9oph45AyGL3g1soBbXsMiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ec7jLk9V3aYrN8sqE3W4AmgxDyYMEkJL8BpkHf9MWP6PmtAB1bHPtnGr9B1X3JFMPUcazinynUGPWJ8a4EjiRP1",
  "key1": "4X9TC6o8t1xNe2iTYpB4AhaAYepoL15iSwtDYDYDijppRvNR4f93fRzxLGgeUajRzo6rKdVid7vgnxHaTqfBjshb",
  "key2": "gU3emvXGkaFcezTDtQGAVPQFnUrXa95uxhr31wnYCFt8LqbWvWXdUZo7CPm8sbdWu2U8nmWqhRfbidCaa393ZXm",
  "key3": "31BwCuUn6EBFBg2pvpZmLMt1tXoaqjzaAFTETf1jmDwQYjXoBsKC3RHrbfFt59aCwsMFGU929AwuYYANbDwTo41T",
  "key4": "m6xpMNsnagSFZdxccgKVFSe7pX32rnbja1YHkzH3TfztXj4BSNFAiKj4Kj6jQDf7Sz5uNHG9YfPeFkxEyf9sH9U",
  "key5": "3C2DSwGdvxMHZM4RwzrGLFVc9ZcVi4bnoGieYrwEukJFVhrSnio9rYwvLpptPgGAZdreWgwKV2vhz7LyjLLjmeJt",
  "key6": "4T9VnueYLxZ4EUa84capE6cJBv4fkhFJYJageZbo7s6y2Xn6QKyUrcvLD7kM1NPdfUe9grM5K3y33oP1SFkyamE9",
  "key7": "3x2dLo9g7ZbubVgjn9s7YN6jwTNmE5JgGh5nNZpHf36FQu7MrbrjcGxnqVrfLyRYzNdfkQG8ERi4vBs1eQTEESyJ",
  "key8": "5oYtj658UWEMov4kLYwzMLD5ZKL12KmjsWtdXjSgpNyqxW7irKSoFUD4SgV2LpyzjffmaHBxE8VZ9LvGGcrLp4yG",
  "key9": "3trjp5trLuNtsmThQNFrG11hEQwV2iFj25rcuucZuKN1aMQYbtEzGJPEZ8LvStPHWzLx41kysFzR6DQRfvMXgebn",
  "key10": "4U7T937h74oFEXaHybHAfygBwcHZuN96MqCpZVmGGsDVBBUenbzDUKdUYvYhmqqQdKj8EKC1F3mxPj9TfvXn7FHL",
  "key11": "2xZHtPCtzzNrmBQpGFVALgLxxYTXseteLu6ty7sLHyTkLtS4ac25zsqZUtZSrFyDQ17p69C5gcEg4dkZQERpJhW7",
  "key12": "3Q6J5XJx4MUhGE3GXeiDoR6fZcAC1NZAZXbfz4bgbpneb1o3G88aQhvwZUjma8GXeqUx8W8kiCR8WiWc9b9VRDyn",
  "key13": "63qAgMoDUJr3hcowP7WELGw2QTxB2iak3GG8n2wJjjWZrDHrzwrrkXME5vP7jwSBRoCgVLK8kp34U5EJUh6dVps9",
  "key14": "2c2m4jYFqTiEpy32Pe27V3Wz3xtc9ktdBGmZrMEGPTsv1vq5NuoV9YxSus2jE35QfcKTMvgxBy7AvCuqHXgxYpGR",
  "key15": "5sAqQ2ZQrfHohPiXr9ecDZdkNuazXXeTA8faREuuDmDR8jrCbTh57jaznejrCQkTnS1qdZLJVEi5VEFZn26z4eWZ",
  "key16": "vbUtPRmQDYs9cH72UofmNAKFKRoU7w6Z8MC5wndqa4kPRbBY3wakz2Btgs21qUpz7PFQzNtNXX8RAyWbUPvbHcP",
  "key17": "2rQ6iE5drJbRUUCfVpBkQarCjLg8S9P8xdYdmEwVLJEJJYWD5XGQMjRuv1ErEUVQLxKwCScSeubVhm1NBGK1a1MY",
  "key18": "2rSzTFtmnpBWfdnyvt1KqFyGReW2bVzLJ2Q9HMCcBkZBsUu9Lj4RfBbZd3z5Fww3zWKzinhbqhV5kVhHi4TPrJGn",
  "key19": "Znyquqvgc3UNw2N9zZGzDVwu68YEd21jqLbVrSbz3pEKBarU4VuvwzcrhcZehGWQgPRY7bk2g6fhVFwR5nCcg3n",
  "key20": "225C1jF3x1dmiG97AgkxTqbCisRdNsbw2LA28sXCNxnjxbiB1TJK2VRyRAxM2HLQad2Zyh4vCbrJhEccwoAU9oMs",
  "key21": "5ZyPjLjAN1RF9f5veYPqgkRMRtFk9xyX29yV3gxHB2tc8Zjht2Df1jhovDUGA5jCetoYYzuAznPx7D3Lm37aChXy",
  "key22": "31jJbLgJ1hfFJ7FWG2Vo7fhkCCLopg7rhVtTm6VdFqtN4K5f3LG8ZaRf4kjx4cVagBWBWaNbTZXE4taWjgRLpxNM",
  "key23": "4BPd8eYFuVgADyG1V981wTku2BH5FciEM3fDPumMigYBrZU5udQ7N76aaKRCfpQciP6cooef55fV73StnEbnzkcw",
  "key24": "26CVxXuPmo64J3hZdwjSmFjW8EzS3ZdjxFaeFzPxgaVPVBnhKrVkb2V3x7JGkgygVqu1bUGH384iwQwQ6jRL18Aa"
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

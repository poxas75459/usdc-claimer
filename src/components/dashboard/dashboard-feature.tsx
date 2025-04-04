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
    "5o5R8NNt2dRKYjDDNc2u1mvnvth6Ghf1uUZSZvdH6Z9hZUc5cdWozEJKzbb1jpWFMMp1pw2pjqVFMC7ibyd7HkZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wEwSSmZXA5u6uYSuw4CAqvWCG4j1uX8SU4Bm6gy7aqjt1fJLk55wjhUrJzdpu4eXxGwooHnH3kRCgc5nvtgens1",
  "key1": "4oq5agAN3XMrbonwwKPGGmTzJgc7rv6VroZUyhzMgbL7qnwKPNyY2fHK7ESeuSHanJZqb8r3Du5nRHbMSFS9W7UD",
  "key2": "JLS1iKLjYs91fzxpqbh6468kpRTdt6mj3GfFtRdpmpEerrNgHQ6aNRdipP6bXNY2PiPhGs97Sb64ecrx7tagf9N",
  "key3": "5g5NoBBvRepP6HjBJoutAor68QL567hxR3texRdDB3A2HwB2yt9woiuB6f6UP6hcVusLtMjqJMr2iEhwooQgwHEK",
  "key4": "2FcF9Z3G8EfmMSKxJUHacB77rTgrV9aZR7CcY2ope7ZrQXRmW22NkSLBZqtRnY7rsWkSgEXt3wVuhprn5XhbsF7x",
  "key5": "yTXd4QhNTAT6kVpw9KUBDwXvND9c5ay8qujaYfUK1ozN5xByFX9gBmYR2ou3pYnjXcicmefmq2hHEEJY1PG8J8H",
  "key6": "33fZ9PXWsiaiUJhnhgd9bWABRvMnuRW9B1KzphEqUegABHpGGY6mWQJAdetRZr9eVsxRzPRwzpw1CWCHhg6Poaa",
  "key7": "2CKUCzHw5FAgnyHByQM7K8s5vH6mPHPJgA181UEcMPQ6rk4dBheVtRGqaovfgMS5B4qCFLrhffzuz5v5gJ53SUeS",
  "key8": "5BbX1e4MwwdFfBbHX6xNp6DNMMgeNFawHCp57jYC3NMPuFt56qNxmx3broC7CaxAixpbheyEXszHn286jMhDAauq",
  "key9": "4gYqrqjG8BdEVHSGchXkJLuebu5N4ynG6TTWSXM6VBeqhKpddnA2M335BAbPt4AfYfjEuRET5mu1FHPYmTSt66Tb",
  "key10": "5uMZBmYLrCzGxTQP7T3P6CgFhzxKPEtu6hnSk1w9eVA6NWPhc64qYJTRVHhoNLzPv7HUeJFkWh1vqBvt4PVP9j3d",
  "key11": "W5wnFVFRZdZ8aWZRdqtYpksrc9SJQ2MZy8nF19SiXjJYBCWeFfZQ5yhLv6HQnH3cLUa6FU2ZhB9gExL4A34ZZaF",
  "key12": "9ejMvmdzBWpcbvXnmu8WizACM8Xv1RsubRw7BqxjGLN93gs3B875VwPtjgEPwTJc7MZENmjPzzwpvEutFA47Ltc",
  "key13": "5DCtXJHo8DLLT3S67BRRa6dZfHBeFnWHtkePGLhqCRierpq81833viAXN49dZF5umdCe4aMmXKkE6ohyXQsSja5v",
  "key14": "3chBM9v8h546AogFpyP9Ng9RNYdzh2weuK2m7fKF7DQeKSR1pyCxaTEF6Th6yowXGxRpuXB1R7t8J2UxUAgQHW9J",
  "key15": "2Kwm7yQyw7NjiQbgGZbvmeUG5RE1CqSvaX4GJG4NzSE16swAJosyFLAYxssngJFtDzy9sdLSjNJie8yCr1UCr2EJ",
  "key16": "3RusxR3AkFqauHUFKrcduCjFZWTwdBkvncVUe4oekWdkASRzxUbwdU6w48hHdnoLNvo4vokzSZCntctSgjbPTmza",
  "key17": "nnzgCMCeGtvg4hAp7ghNGNHgvLM4KR4BQFUG3AXCR2Tu6f14791ZyAPEdYBqdfSSnpDnKVejAFvzjwZRvzzDEMV",
  "key18": "5h3y9Ytcpw1SmTA2gafHoP2SMFfDtehuaoZumezQXR4VQoo52cSRmMqWpAGCTV2H29MPGdNPLkwN2mVa6XjP4fJ9",
  "key19": "5S1UwGpvMvqYKrxUfdfis46k91EnkeiwMimRr7yxUimQ5yDeryFkDQnNwdqaa211VDHUjM7onaeiekaSS4CiY15h",
  "key20": "2x3NqvbEGuyrnvHhr2zTr42Y5rGX8qH1NyaL6CfyqRRrBj87uLSFqpZezfPYaGhS94bE7nR8DahaBxqqsp4Knr73",
  "key21": "2ikPXGc8ddUsHpdyUxFwTNgektx3WDwXh6ivcntd1SeBHNvtZzred5HhPKEpuNgESXt6rpk8YXRV5vo1oD4L1B1s",
  "key22": "3Feh3bWnPJFfirW5GnaQyojZm89f7CDR27zexRzWvtUbpWPnNJUwJcupM1Si6jRU9TUNEYaHQ5z96s61qvXkWCqZ",
  "key23": "33cURMCYhWhwK6GEU5UfCxjjxrtfrVR2J67NPidXpHM3fAd8YsRorPuHxNihqSSmgPhnAwCVJma7u6AXPDVxzXVs",
  "key24": "43CtuEkx9WtkCdwVArQiJgq7HCgGR6rMiULRsDvyrtZNgN7xHA5i1yM9YV6qFUq6pFux9CyYiU4d4U3Jq3vevKG3",
  "key25": "4YjjUtPVMNscW4YnzSyHTZmYNANGByZJionGvoEbB9QBkS49zyFJRgLWqwTTXeK2mRw8BbG3AscSGYsJE9w7cr4B",
  "key26": "4ByH7XErxJGYT2Bt99S9S9HMmStL5FUueyARz9XrYgYD1iY6TJoCbts6sPerDm9VnmMKevHVAEEPkzB8BvMYgdqB",
  "key27": "5fqq2EB55SSdF21zwTssBA3JNVjtD5ZHSScipYDMLDEpgHW4kk9STGEi7EXWDEcysh2SS5wr8tNnXGV8wMasAbS6",
  "key28": "2Eivhqd8mECxBba2ZAszMVahNET3NaYoVpBbMrUJzxLjv4ZBbKFR2PgmSv1z9WcFJ7NEtzU3DT2NgseEgzxmeBYZ",
  "key29": "CtJmHQmGa6dyEfXyvCSvtRBMYenxe9AVbU5jEcjLH7sSsKfgvtnJGaY1yHFHiYEH7bDc4Ctt9f7WKCXFvags6bT"
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

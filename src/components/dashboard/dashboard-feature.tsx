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
    "4nGeTy6L2UntoWHVPfhrkMK1j6ncByPSa8tgnwAtQFzLhhEPAviuEBmburu76F9XPtydQf1FSWWR1mzdRJjZtgb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RYbHSpL9U61yjcLE4CVqDA8c1nHFQtXJHPvimMKDyaX4Wj4c4RQLbS9tsRRRn4qkcDfSXCwMXCADpDHXzkzjAum",
  "key1": "AqejwkDp8jHWTjVfv5LMUWQmVhCCjQ8oA3qXPCrRwEhVjiKR1eyzSWTwcyx7j2Wo1zPS8TnoJSk9BMhU6Mr4fyr",
  "key2": "2CAzDh7AspBeTat2CTJPtNvtr8yAQ5bjzxYL9kzQdfBcXgKW1UGVLj3utpa2mBc9XjyLTvBo17iMDNkguW7y7HF8",
  "key3": "2KeQYkwD7xJ8WpQLYeXz6xzC1bjswJ8ow7r1jwZAGoxtcXv6SjfF1upqepZgMrATtd2qosSpXPonRLj8C3p4ztke",
  "key4": "2MTkmgeNiRiTpufEiigidvxoZcvhumVkj4sbpu48SkxHEDJBk6Y2QKhcHGNLY3ZBiGEJ6JES9DG9E5YZi7ASt5Jy",
  "key5": "5o1bkxZSEjLYhWoHW7dRA9JK1x4yi5LJ4mmbYZrB7Z4PYYxcixvf93oXDWQ765G9F3SK8QGDDHahuagpfrD1ownP",
  "key6": "56k1mXVGncqJgFQ987sRjXT5bxvR2q8JmJ6dALysvm639Cj7Q43fagjbFNYrXB4wzRyBNHc6AmNyrpcYpQjwWTuQ",
  "key7": "2d3ZdmGboxx3B9fHeNV1KcKvaafRmhp6UzyxKAofn48J5b6GSN4PF67uySN2EP1tm7PjM3gaDpgHkzjDJpdPTiJZ",
  "key8": "4eh9iCn6V8UX1pY2Z5JpNcsuXXXSRfNuwByyDUuLhQ7YSps4uMeQcGxyDfqKcX5qL5euGVbsRzU7D93ur2YRNFmL",
  "key9": "2i1CTPkHcXthAwiBGmbhzyqXWYjLwybdQ5YcFvHcUjMcPuAgqRaLHNxAAX9sqnohG4fPWzWFyNKKEAWVB5D2FD56",
  "key10": "3ESH4iHQahixfcUrBwhNNZ3SuMRWcv1iYp34MQBj1TRQM4PFwnoLxiCwNXaX2RqCg2Dvma2sjjcNX7ckSoEWsefe",
  "key11": "ZoUT6n6L3jZRrHF1vwFueLirPx8PMkKsk94gcyFmknqY2TCUM7ANXzNDJ2E2FxW44KrPtc3oYjjsptVYF4Ck1Cw",
  "key12": "4vDJNyb1ezi1djgeqrnf7GnYezBLKZgf38LZpXZHvmMmwfpsJJ1vRbiPBXUEgbeWqVQBzen5D458RrAa2aTishWt",
  "key13": "4CYfjtF62sMvfTcsYajsM2PV9QhcUBuy3Neoc7LQADgZUrjTXZVyQbsdnT3wRBG7xQMPyivom2US5Fe4re9ExgJr",
  "key14": "Dcdbf8gCjpAMKe8jrqX82QZZkniR5mKag2Y15jjF47ErmxkyDp1L1eQJ2KmLsJddcbGn9KF7Lf43NwAVCxJJUEE",
  "key15": "48yXyXrHM41Lu1zxcK8hMc9KeUGRsadn1GLTrtSF3jByZrHREwfZa9jTpsCWLpUGRSCqqxRRdwB2nNEi6Fbm9UKk",
  "key16": "5P1HgVnsqA5bKhiz9PwR7eewvYJ2d6Kx2LhJNoMJNXTVeSHSkUrXnNuKQpf3Kx9YyeJPpyHuUP1ompVjVubzN8Nu",
  "key17": "DAmEYbkPGsMjB2dBAnQ9rooAC6gSdMcZcrPAU4fZrV1JjJwHsU19pGJjmLKhrdC2SohFmYCeBCVxL9d2V2Tsjg9",
  "key18": "5fsMjK1Bb3hw1XSoZf5BtFwfqZXax4TNGGQabBti7QdG2zMuurL57fSFnFGbDePxqtdyxEhSTk644Gt98MSiRR84",
  "key19": "3uSzdVTZc2cgStwmy9SsLM3936qXh9E3XMUMKGKJEcd2ZChEuA9C9VeKKFJiuXdJL7s3U1uapqqAHvzJWya655sK",
  "key20": "3Mt5rw2odumcRsjipzJeCsEx27XxX3HirLiLf1RGroKmLVE971gQYnNm8yD6YdeK2wQUy61671LXxGXSaKyXdCWG",
  "key21": "26gz2a6f6y1eipNmrg4KJnamPp4nEdSibeb8mh1ehhVhTK5rVJpXt1BcVKMnCdA7tMFoHzKW1sQczpWTExUKNeb3",
  "key22": "459kfKKtdjV6jTpNkbzdHaRuYqBzRZjXezhEvYabpxwUm4Nq4duAfe2n9ND4E5hSihHhQrD6dPXC5PNYnPYzjVJv",
  "key23": "2XYcvm6q7haKNp3Unv8kHE9Wp4rSB5xzPpjfaddByPgGLuzEVP6CD3Y37MGu2LNr68WXm6r8wPhEew9UecYqPFe7",
  "key24": "4QzcjJGbXo2HDZCQGBsmwZYueEsQASb8M7H5SVcg76qjnzUnCmTgGj6pn9fnskx5retJhKNrqRZpxMujfFfp6yxK",
  "key25": "4vVc4SvPFCDrfcGyLxJ8s8GJtbpKXvKctugchbshexKAa49rBheiqcJpXW6NTZ4QcN43srNExaVkwnawzDwjGxXR",
  "key26": "311cgZQRMcHwyMTij3pxRoaGkfHZU4N5PWXxH4uUZNXdaSh8c4r1GAiw56etwJtcREMvzBkzCxB1H2em3zofyGLG",
  "key27": "4cmcrD92d6PjccZwN3KCYnazYXai6URL6c9rkv8tgjT9jduAfm3K5Y2Zz1b7jYf3FUe4HwiomoHr5UCzLJss97Rv",
  "key28": "5LuGdYC6zCPZd6dJaH7n4odhq21bTdZzegXta4cqDaWXQA8nmrEG3QPxHrMcUtRT3Ur5KRHZ5Vk1t7PKJyD8BPxc",
  "key29": "4MQXVd92eK7P6CUyTmqGyeKSKGSKEgKSbYFtDHcdt77JD6759aVNwttQKf5QAJUHUjFrwWsaoXUFAoPSxu3ZdVKj",
  "key30": "46dsL5fVZkTEn2AizwtkpT5c3UMLWrrYDvKSaaFq57fsmxYjzzrRCgrb69usDpSnwJotLmBuNubJQsQeVmcmC2xJ",
  "key31": "5yWJvB1TxKcYkVujcbPUArktE3ziD8ErGgTu2Hi9frs86H7ay2bczLHafGz7PcAgGpFHiucAFaMnvH4Voek7qkoc"
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

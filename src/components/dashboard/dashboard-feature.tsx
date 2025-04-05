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
    "27JPVs4x7YZG2T9DzHHX376FTMwEJzawqBBQzDabkh2LbsfpYtYraCg2aLhrZJmGaXYane8zEqaP2jVTX5NriEpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qBruvRrvEBUmn86wG6mdxfoG6rPFHPPuaf66jnjBqDSwUcPzhZgHpvBTgEkGkxRY6RPB3Axqq3cHKnWSxd1VvNg",
  "key1": "4gCqwQjvJoTJdgsFQZejRk1waLJQVVk4upcmxUnqoX4WUyNoWL5NJW5jyhmj5Esr1BzZPJn3hL4MYpZjfXRMeFJD",
  "key2": "2wgVFm7Dy81GJB7VUvB3woNBcUvT4xPxWTvt7NduG3kWNYjovhE7ufhhnMwd6rJTuquNsk66ZXYXizGj22HTaYfZ",
  "key3": "4LBSgQ8TKWMF7Xvy2g6WtMZZKw9nJ9L1ZfL5bdyLP2zLHb8xefcs8jei866H4iiBpq4uxovbXUuyQxR9Sw1ZDPfa",
  "key4": "ejsSYj4DbxyiLv7CLa2JHaU3L7xvvrZXcHVm5ZG8WeSjJypewjnqVhcHArC3ySEQJSXueiQgEeT4WETpBxuZmXi",
  "key5": "4cc2Afw9FdKYELPWrcBqptUx3pGHu41tEy861F6kNL3AtAvn9CoSxyFXVmBbonCWSAMhb3oF2HWzeR3m7U3H6EVX",
  "key6": "4um2a1PWCu96LBuX2chBnrHR88CeTiByuwvKWgUcfCUDkcFciyx6ZfCRXAZSSYtyvkZ5tTMJL7pjgET59YWaA3yV",
  "key7": "XJ6PimViWbynWAcdJR6ms8sCqmq5Uv7BhgDXXhkzFvPQV5kVJhJ68XSX8UnK9GAFT3uYthYyqdRsyMMPP5UJfGe",
  "key8": "3AdtkEdfZHQi4XA7cCovNhNSXNWi9Er4uPoDK9HLQUhEyyWNrJeEifVGh2S4MMauPFcfNFJ9MSxLCPuGZgwmewsh",
  "key9": "48wjzhRRUMgiGeBLDXqrq9SreWKt5RToseK3KHMDMT464AA4dyrtT1HcMJuC9UwCCzxDWSeZYwudeE3BaqKojHjf",
  "key10": "2fYN966bqMYuQZizDniwZ9yAnGTqwRS2C6zpfaMSwVGLFsd7aPC968QAUsJUEfjbAnmyK3m2TjhZEMPqYvPF3zM5",
  "key11": "4YnZZh4B34XJa2v5QsVFffQ3Ui4xymCVDXd9bVKx5qeTLHtuFQAiFp4Kp8z49tkg6WntBP6tdDNtQr1xzHzKknYc",
  "key12": "4seiMY7Gs6oo6yBVP8A1iSUXnYTiu7xT1eRN7E7EQSXfmnUSyAwQ9j8YFbic7k4db2JvDyh5KyWHtwGxfFgRXwxA",
  "key13": "38fD9nJU49NQtBqhC8FFwRJi5DSzjSZtkyzw4KYX5eFjmpKB4Cvm4JVP1VBZEtWkjSXVjzL5HitCzgUhT2fzSphh",
  "key14": "4ttzpcqLbc3yELtStfHrXpVYRuVt96MR9gcAfciCE5FeJ1Hwa3RLqoUDMm6L4Pu5C5LaCKrwmmMjXLfDTfehoMfW",
  "key15": "3mauS4oCKt6Swtnyq3GvLmy3cMWDGHJnXQ1ZkY75mcmTZp3BCzCinAPnnxoyuY8FmhNJQkPh4sxDfKdumy65xt3R",
  "key16": "5G1J5pJJ8JPhrpmD4S2jhLr1oMCMebMNn7bunuMP7bu4NWKec77vPGvhTxdeEBDbJWkk3jYBQcvFwvMVXN9bbdB3",
  "key17": "5LuFJ3a2pjWZ5CdxksrCh2h2HaWvPJFdzJgQjbxXKGaLnB2ipoupvnk7SQyqN217BaKQvRHZRGxBqLd8fjKC3b8r",
  "key18": "XM5dmXR1kCsbJMbG2XivB3y89CtAfk3L1svNnRt91upPoGfUZWhBFjcyEHGzXk4jAP241aMzkTPAaMqTGTDggik",
  "key19": "3bVaD5zDNmbV9A53FLF6HAXBRMnpjqADfy3zN6hGtf56sENn2kXUxMk9UY84heYbEZsefNV6m3FgKr5dowXmDi4X",
  "key20": "5isfabwuSY58V6nR7YrfkuZxFksyxnyxgVkDfLmDER4C1xgLgNvVikg9PFuH8mhDUdqjZwWd8RVoBYbPiZrk6UCp",
  "key21": "5fhigev9JprERKhwrxEwpgXFKC9989CWRhbdEmQ4twn8UURn9kAdKW9RYy79KZiAJUkDZ7BaKhEeTjmXyri9eCeW",
  "key22": "2g9SmwzhbFJDvnHinwePe148DMQMg9nCWxLxNqwQ31yUe6HpK3BSd3Vt8HmCe3HmjkuXSABvhe9sGcBriUdLtyzZ",
  "key23": "4Mzec1o7JK4R3MwejBfJvKuW8vWkR7x5pSwUeKfErGzu6z6bPBsYPtJS4PocZpb6SqCw26dfy3gZnxZQ4fMfxEE7",
  "key24": "5wffREEU3nkHrVQXy2atZu7n9dNqKdjckXYPgZuZdAj8ZeP3tWqLVsMTSMYtjhAVfhgAuW5WMy8vkEP3K2mEGqa2",
  "key25": "3KmCJRWNbcjM3Fp5BBafd8Vt3o8Wquhxso9BY7H1MymfPdmhBFa8T31EpESnVCCmkMd5WRnsVrChLsrVYGssY5x3",
  "key26": "PF1yG6DRWJ16zj2fSo4ken5pZxU5o61CheFQJQpqms95RSTdcqGucr82wChGpYWUTrrYoZ7VEBmRBfb9BpuEVMj",
  "key27": "3gQk3TaAZVKnEKmSL5DUqW4WLXyCUG8189FZuxknJEYuVAULeDAod9FTLRFqot7HMNMMHaWizSotTT47aZA2Pc7d",
  "key28": "qNYR34ZEFWq2V1p8bS7ouGgzHXXawiS1NwXtDdK84RuEawe894hiRsqEhqfWS8TQrYGTNkXf5v3PVBzYxwa3guh"
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

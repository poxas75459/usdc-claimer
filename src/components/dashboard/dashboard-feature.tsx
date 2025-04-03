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
    "QC6hf6uXvf7ftsAB93sey6TWeRDadfvnFtLJRcy46bzQSsvCpNZfg9kv2CtJCGVshC4YeZP7siVgDMkQFixNoeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AsbSVEo47xDL2X8Y4GdFcZW6X8zr6EvHzeq8wKYu7kmsZ3PUdFDHNGpnWtDm6avxD8baYUPAMnbFuQaPErdfcuv",
  "key1": "26XEDDwRzCcYVURfkWDGZSTH7eBoH2vVBqpq7ANExLpyVkYSRe8hmvZxfMxJ5xEZYwn3N4z1eGFLw294FjtDDCEB",
  "key2": "3WGHvnz77LGmU8RknDRaX3J94qVLxfvjuAKBk1CUXHqSsYoDXgh1oMCHCn9tzh411Aezt1FE5rgfNJpsoiVQhXCB",
  "key3": "5hXuGP2uonkFxYJWyn2cR2WX5EWPQzfnyK24NxSLrYu2LNbgajGhTqLDNbZCYsLGLJu9R2zaeWG7mLrutiRcCnoJ",
  "key4": "41JYVbHaunTjdNPRtM3bzHzqYNKPK2KqsUcwJqUmo93deb7EzHVh2sSM86u4PBnokMARGoaKCKCDwfYM4PEemBGm",
  "key5": "FnwSZHTps117LwHWkaPubbBZZf1Qq9uW3rtvF7Sn5aUyzW6QGUGoY4xHRVPg57gmwbozuB5CmKpctJeGhyZjZWA",
  "key6": "3xvu74nkzyUNrnydGtH47JFMP6Dfd3LkBSu8BpPnLYSEq5jSF25EWxTkuqiJEq83H6MnSMPg8MMXQhfEDjVgwuEt",
  "key7": "E8ZQNPMTu8K8SiAMPHNUQEUdgbST56ziF1KZ24vA5nir14YXgNqZmCDm5VPSr1MCBC8dkors1y7PZoxKrRjSRmT",
  "key8": "4z9sDYQV1R34DLcztNk5YQHfZvXbyhGZAkz44NcjcYnqQ7ttbbMGTG4E4aTtXDXqUpxnPpEwPTEeFWxoaKk1UcZo",
  "key9": "5aSSwgH6dzkriXFRk7BJDV4s5HrgYeJSRwt9pEc3qNnfS7H7sokH5b5APsz7kyDJehwXtxdz7FM2Muv2cVPWt3ay",
  "key10": "5bndCKb63VaPx5NZGYCGjfkCmEnkbH6tGaBFqDkZwFcoAdCZVD26vGPZ5GfbuU58kATE9JhKrBLMTt9h7UNJ9Z8Q",
  "key11": "5sPXK4WbxhTP2d9qunPhCYeMH1ivMYLiBpTYiXCA1xsEQG8FfrWYosSrk1RwbhXFL1XTJ4LmM1mmp5GLWxNaB71S",
  "key12": "5qNSpfyTAmCRdGt8Ymfqt8pd6Ju56VEW8TNCAZuwr2Hhxq8t8CYXfxGzHmvj2f7HKwX7y1WkK8B77UqZMGn4HXks",
  "key13": "4xco6n4k3u8ozZJehkU72Z8VYVdPsBEzwmdUANvkHGY2aZEt62wJvJA4n6rsqTJQcxAMePhoAeWvDfgHEJ75WrZV",
  "key14": "3nLhpTTC1o5CF1Br7Vh3QmHRGvRPoY726auZuoC7cU6dfgTuDpzgK2XGV98vyzJfhps2vHhWo5mEwPYa2pe2YZ7q",
  "key15": "3XbjrtngtYDnvMiXTFUAGcsJ6hS6S2vbeQjuNKpHDRF2d79UfWsvkokgVGSfiH9CXYEBJrXKyT3qcj9bxxErPuS6",
  "key16": "3sW7pq5PyNo97qcfDYHknMtkpMjFogKCEFpivD8FoakSE5AWSn5NpE7EDyoRDahk5E1M2ictvfurxvY7CxaSdBP1",
  "key17": "4sGnSvreJroB3TgXi6bBA9BVAZim2ipVdnZJ42m2eGQHdJPy8emEfQfpHJmY4o8Xm6Yh5ESB5d2bB5zYmVvMHEkv",
  "key18": "4ZoppNuDzZpsVqir8z3QzwyYKUQt4cRAbjdMHyRRCfJFWU2uteTiJ9orVj1WdFv6A2UEp7sfJwH9pPj7FXRLPtQ4",
  "key19": "23VYHzYhFH5g4zx71hvSYcHHty8ue6DHEvRPQsJgWEoK8ksxSTRs3woVZjrshaq9kFAaVmXagv4EMdp7ysiKBDwx",
  "key20": "3dY6ALK6s6HJgA94ZKmt8HNAaeQvWfDzZpzmxfwkMsMGC2Q4peBEk8rJFx4VNjwWywdkkfbH8UhDiaZGzFrfDQ7c",
  "key21": "47akb7RdjXhkaBjBfsGS9Vyr4H56TpwcpvwFaiCurjpiato4hdm9yCjh3rKQw4XDG17jsVzmtPjebWCUQ2F5BE2d",
  "key22": "mYH3PJpS4V2NSkscHeX51HcWD69r4X77LfUD1nFLeNhqJK2gE8Kq6vwuoCfpDznY7LWj4SCvEdU1J1qBDCGRGWF",
  "key23": "3upjfveENQu3fH483qhc63usk7hH9PeJRsaKy61Ysia14DyAqGtRxzdQjDfTAC2T9JXwHnaJaLFCdsLYZUADCSyx",
  "key24": "3bc48TiS6JFDbfnhVuKgzoRBaW84HUcNM9uP3QzbGt9Bqb6hGDj5uAdPg2LNepZ8M81sVjEQVxGAjiMmciHJJTWu",
  "key25": "Q4SYPMWUzuavgB65Y7CftJwdMrhhf2efoyAeLZuQvAMqfkohdSjpfk1huwwBpto4z7qqVk62vnK4ZjwB1CGPuwa",
  "key26": "3kRfJXFjjv1a3L7hdrRbV9ojAkSwwZSAcrUBSu6WyesPfFFbzxVbb33txfWac2sU8N8fnmWGWKUhBWuxpAj84FWq",
  "key27": "jM3gqE5rTnmmzpVrGfjZzEzocdcWwBJV6x7iPjb4mwoe69uLjLjKhLHNdeKwH4BFbeZ33K5yqS5Gz9TZFCNC8U8",
  "key28": "55VhJozyFTxUtHqqQkytqNVdEGSW5NJTpjUeUceL1M1GcMdnqEfMcqFxx8n66yg46H9soK2dBJZQLSnQZ9UymLRv",
  "key29": "4ZuPV7X6ZxmfxDhffffaWFrTWPZEPbyT5C65wVefkwFEBUE9GMjtsxNLXXGCz7BLAL6jfNSmT6t8ricFYMeCWWqV",
  "key30": "5iCcibZMsEnhgF6wsb4XKTU1JsYex9P2koovtLvoieDGLzRbsogKhnzmrwGFmAzDcrUYU3T5GnAWwLPChYTUy1YN",
  "key31": "3Ngu1UNou3tE3BbAYve7ME17UGzAoSZxjTguvn7rtHcgJ7w8gSMBFHZw4p1L5EcFhX6iKCBfXZpGtK8rSWk6JoAX",
  "key32": "tdGNzhZ19eMVCXtEB9H37yak2Zgk6n2zAr282rnXB6iaSz9NfzggZ4w8cGPsct4UaykDKeNNY2NdHUPW8eRv4G7",
  "key33": "21jhknH8viDnYTrqDKZCzHMTncH1Merd7nxqATBhsYrHm7ZY2PBfois68ruAH7k92ZxvmtY3TLLBKUJ8YpdfAdDU",
  "key34": "Rzj6rGKDgG1pQhn2RuYbyVoxYwimcGeCZ3zsZXe9q9wQiyfA2LarPyEs7VHbRf7seCWDz63SzuL3WURUC6HA1N1",
  "key35": "4GhWiqQKv5DjGR4NLvM8ihccjjgNi8musWFyJokBcYadvJksGQwtR6JNB7sKdKunJvQ3wxnK7o33CmiBP1r7PEte",
  "key36": "XwjnccqC5nBqBYibkTM9rmugUnSnphDaPbVArwBjSVprjKHV2XrifrLRdVbxLpb42Sv3mAVMwwELxmyJLKNUvqn",
  "key37": "2dN9tW5ZLHx74Cpr3porodWZaMP1fQCWqGZJ4b9P8jYT5moJyKwrYv2UvQYXs5K2SnV8hYXiTGDNi2Hzgz66enPw",
  "key38": "3frqM8QK3NaMkRnL67q2b5XrRDGeWcc4oR73aenYxV7A36B9qhysn2JsxfrxjNf3cj1WQHUfwEEH5cJF85tE8Q6t"
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

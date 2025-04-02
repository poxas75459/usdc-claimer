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
    "jALPuAU3Ff1RDNz9jkiSgxkycYSMVtgC917kz4Ein6gEb2skt26Pi1BLZp2KmA2iXDt5B9DMaj9zvCrDxooPAtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uAKHZZ7JECikkUSj6G1rpzH4uTDCpFLkx3ZAD2wKDUczvGFe9Hk7L7kqyyxWVZgS8k5YLN9pYEcHU4mggUXN26B",
  "key1": "3MnVxdGxjntdJSPSEnGpSA2sL3aF7r2PPks8wLKofCSQrbMzGHqcY6GbdNLwhoWQmw9qao1ptLgnjb55LY3D4neq",
  "key2": "3DC6zTFgfmdxzmiWjEMVdFEXvFs8UyoqJmpuvRsCMieqe1br46LJD6uXm1brshtv2njYKdxHXxvYfNafTmhVNSB1",
  "key3": "osXcAwhruRCjuEr29m3nj9QMavkQNpw7Pqsadx48oUJ3MyLwsteZJEp2zhewFbjgS2J5RiJgw7Nfk5Nv7WQR7C8",
  "key4": "387p65CKdj4tzfD69sKc52BZGk5VWJN6KwikPU2ZDnwjAutGk2f5DLciXr4djWNdL8sdbjEKBDFVTXtpHU23RVGU",
  "key5": "AQV7fBspz4ZdSYRVZR1GqtxGS3gP5tnY95a6N9jS4bHm1Bc5q3va4MSoZ8dJKnudNYoi3bGgbjp5naXReZFtCm8",
  "key6": "2UaynBPvG8e3t3vM5TdiESVSCrnYkZgPmmFLygYqXfPFMCWxxNpcqiN8NExRB2dxvbs6yV9obGX5pFKzpMKC7qNW",
  "key7": "oYeLVAyXhcLbRHN4eQP5uv9FERc76ruHHxUSQeNMchHmdptTfjzAZny74A2h85udF5WyWKNrTyZWzPkXsozCF5f",
  "key8": "5cLVGyEHY9xnoFNVdxopXRPMk2G36zeqvwsnNAZ2fP44P2HfPzxDkq2riMzUP1pGgoTomwhTBRFEdmEGWTdSo1K7",
  "key9": "3tUUTCzKwPzmZNmv42Q67gd7P4P8yRYAaNyxYJZvFs81Cbndn3vvxMFE5wehjqF9CifPMjzxwpqEnvupX9DiUYBb",
  "key10": "4ckGA61Pd8dw41Qf1NrYUhbPPZ9hjuEbeZZTfcaAmP3pCPFNRpDYV2FkZXgmBmE7i8ZEm4J8fHFGZBEKFx5tV7ik",
  "key11": "eaqTNonfiVWXMjsGGELtyGGZu6vU61ktXii3KQwtZKYqnsqP1RnKX1tF11uy8wij2fd7JKq5oXDbgPJwxmciUHR",
  "key12": "2kjb8Lu7sbwQkgxnUVNgJjtja6zzqoqMJA2ssiP982NqgbrjDZzKd2N3iovskFT6KontQA4USEUEQYtGEBU78aDT",
  "key13": "3bQ3dEjG13vPuPiCAxGY5jKVBYuwE3NCrCKGywYdEnYqasP1RLKLkpkaNr6vZaUm9jQpKeyZq563sn2aN9twoSi6",
  "key14": "5PYWWCqbAGeuyuqKS2BwoEzJAYQgobxzb5FJdrKnSt53A8asZCBerLcbSPoas4GvLMDUsqomPdh2HUP5PB4ZnNae",
  "key15": "322jifiGa8GHzTyzmiMz34fRterVxHh2xYFdf9KncwusMtwiQ1ZN3H1YvvuqYCMcDUUnrfVzRuk5NrKcQ7HHLXtL",
  "key16": "4RLZCWK5dLdUTnRryCVj2E9CW8hoJRZm6ComY4mv5tsyhoDTJj1a1uD8w9WAbeaFmYHbP9bF97SqxpVFP5S8ZQ4c",
  "key17": "3KtDgkf9vhwp8X5SVUGvWYGCNKfpUzY4L8yfdQJkZrz5JUbVrrLLokNfo7CEBmtwAcoDRjHzwRLsze9P8xZ7M6s7",
  "key18": "4scs5n3zYkmt3X2QqhqGUhkzHARfw5D8N4DBkqq7n8sPTQrn3XBomjix5WSht5mho25tJ3ki3f6oW2uSpgnsby3j",
  "key19": "25E6sKULEqmNvJToFtftu9cUpyea6NupTTif12eAk8Ta2cirYsT9p6moE6DELNrF5hZ6UQTbCDbA9A2QdKYTegtf",
  "key20": "5B42MyvLs9cDyo3GVm9vEJXTPNG4DiJS8LNrzcWADDzXviPVBscSMFBmCce6NDCDuKLTsLwXqhbw1h9pkYYxzZh2",
  "key21": "4es4GtGnUb9nmo6qvQ5o5MqzdMJ5FFwEMaEWSUH1kJunvjMynWmTgUEKdaC3fvZzR3vEWG8rA9KbYSHsmgQ7hsRa",
  "key22": "53DwtKurjRNvzCbnPyE5uEVqyC5Y2igRim3EzigEKFiTF4bwgfaXjtfvDsjXrzCxGwF7ke4BxwwYNuHNcUjpKda1",
  "key23": "2hMh9EakZGKaPdy4GwkrewsXp36CHhSCRCF2nLM8rtLwUWowcyR4Lfo2TWcXR22x2wGgCp4qx3wfCceHdygbvag1",
  "key24": "57A1g7HPTj9cbMgTkYQRvqWAEdQmmZdotWcDaBQp4h75wjosTtorKyf4LSZjUiHLJJcS89HkabDz3puWNmDvTdEh"
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

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
    "87hVivcjZJaqwinfnYPcAUpuoFmroaNqwLTPonQe2qY7XVKHdpQWP4WzQozLx91UsxhdcQZj9NMtnBsLJWb9Con"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U7ZaoMDntHQAcbkeEz6Vt12J4CRCDpMSzJhHR7ogRM1485UfxZ4D3Ah8UiWSzBWinCb9AAzsjrNFzCYL4TDXZnS",
  "key1": "626TUrTtBXVA5ufcVkdDDMctUuKWQo8JuPYLJRp5zWhf8xzaq3s8xzZZLCd2UPMf3XneZMqR4fCzkZUCkz6iVtCu",
  "key2": "41XSm84oCFYM12PsYFPy1tR5ELjQUwhidNRWiVjFPCdZnfARnujwLRLW1dWqdbFWSaibRfsY9z4hK6DjiH4Z6LMT",
  "key3": "2Z7Fown9qYrAbegPixzjWRW5PGAenaY1XjZ2qAqSzPzSEmi4iBSsa1XdD8hQ8y2TtPZdmy7a4Pfpis3QfCdTP6wM",
  "key4": "rhasoGYKrthM9FtmvBKeafVv6wx6QnFzQ6EbiQuZu69PmvdwHAHHz2tCTgSuQdwrXBxDzYp2N2VQPAxAv78qYma",
  "key5": "2NjbQ39kKdgaPJPjqitGXst1FcRyTgzu5d5CBqr7GM7WiH7xNLJC17GPhYkAmXA13ZRmdh3G4tktcrysapFNf5xk",
  "key6": "2z9adfx1SwjvCwadfj6k9q683P7iKxHF9HoCu38noDRHaJQJkoanFoBBUuyGcUstSpGS924cKRussN5xPfG3TCjM",
  "key7": "2jPwV3y9P7bvLEjG6FXaqqy7yZ2vK7LypzJz8RvUH2K2ZxTN7PcmeFjZLmvThH2rpdGUh56ZeTCqPs5ztis8LH4M",
  "key8": "oYXpP2Vfr7NCBSpVPb7k5vfJq8Rv2E5fpsmA9rS7wrVkEr97NPTkbT2AhYtssme15PfFfxgJwbaNU7WGXJK7TYE",
  "key9": "CzEQrzFYbd2bHPeci3DCEUQjsyiah9fbKXZXsrKaqbZ9p8x1A7MDBAhUNNZFR4kqcrPJKMjGjPhV4KGqq1Xjd8e",
  "key10": "CsifGLDmfmFP7TvZL6Ggo5CzKc5TD9uUZxd5CiAwa4pVPxcnYxrCkYThkWm69HgXmiC3pjgwqLVgidz6sSCDc6n",
  "key11": "xwqFsrNnniCjbPyu9NZoLbqP4QeYqgoPLGJJEWgpZ9nDx9asneYRdZq7qWGr1EzZbZTAMDezQxb33JS5jgY8aDP",
  "key12": "3vuVgeD93Czm5jjE4kDn6CmDDmRNqvnNzev4DDLRSsz5EDcQgKJg2483vJpAN62ahgucWSGYjSp6gGDwyjaHh3RW",
  "key13": "4LihWV4jQ7EWYi37eGtf3bVRcmQfPBHL5T56qHNQyf8wCqw75rYCTZV1Sbbpn8dGM3mTg8ZRL2GRYbAY5sQg5DJY",
  "key14": "37MEAXGJFTeRfTadC9RS2cngWjKK6zRjWAaw677QowEHBR9wWBemVPNJsgyQpJ5dwPZr72eEuWTaYVWLffadvZCF",
  "key15": "4B6NSRXhghpEhgKmREJUWmb6QYKy5oCEGSSswk4Lcqj9NfehUBiXgENPuamhyPEsxjXoV8xWKhzCwksYwHR4V4Z7",
  "key16": "5uzR4drLU3AGcRqwZjZomz4YaYbSyFDhjdtrCxUbx7wVYHxE3LP241wTwiy3736WN4etdwvcBUq1Un4EkYyZqy9W",
  "key17": "CQxz4WjGVstzKSCgchdse5tmuf9ephaRwajnHue9RaSFYAhq5PS3qemhSWDKuQMhp912QVHngtYD8siXg6TXBrb",
  "key18": "5JuQk5YNwuZUQnpbT64g7SfrPEEifx1BNNWrSnewsBtHvYwtHYrmVTXWBaBBw7j1AdEFQqzqwiiUPRoDPnomZZbE",
  "key19": "4zZ6WTeC783nfwF4oghhSC4ot6mMzTBVFvAy7VrA8jUJbaQAtKKSNHMEGmpNxsdiMxbwwoDrX6ejjPTLmZyw3T6b",
  "key20": "4JkUowXt3CTg81y1brpNBzTAHzKhb2hHGQfT89HMX26ESJVtvcWQ2tFvkzjpmMrTkehFXqtrjCx8JbrgWVPquyxD",
  "key21": "2Jkxtmu6KFUk1vFpaqsTY1YzuwbSFAZCYisv4US46SgXL3XVeRDvcrsh8tm1hWxi6Ntx5rKkCnj5gHgXfsinjLdP",
  "key22": "3gGJr8zEHM4d7bcsEPCTh3oGWPRPrKcrdwK1Whs1LdHuv1UwXFgfamN3FVsZkwvRhLWNwtb2RrjdZXow8AANMMPd",
  "key23": "5UU3stMGLCCJNEurpzUFe85pwGxUe97mX3voZKSBWFfc9cX9d43vR1pCZkuoFnHMo8VpkVhEjmRT58sqKzn5XjnW",
  "key24": "3iAi7SXkNGGwhXnRNG7vq4pHEvFgJwpLHXhY4kpTcoVSD72LvBvJq8DMswxDTc1LCqjM3VntATDokNudWppna5AU"
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

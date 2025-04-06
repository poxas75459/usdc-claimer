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
    "azNHQmhtuk4sHGwbeQLpDLv8zb25RwZ87QxmuVq2RDsgQrQrDoi2gHPPmGUGbSty6aCNKsghwSUSFE9UTHXaMay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o2p7s9mRQ4hj1q4rth4dQa811EyGKrRH1aNECqnfxZiESiwrb1nsv1PPPVGbj34H2J81Pp1BDVYxpyG5PxoKjCP",
  "key1": "44Vg2q4NoPHPbZePnovPorEyafxQSN5htLdf9PW7MhhTnFQxTFmvzzXAJVLyghJscTyZd3rcebnbTmeBg4dwXJgF",
  "key2": "ANubudkYTpBRkFptZAdCCKr8vU557o23mDJYKdvkhvJ9qqhTvRxxdxMoBLY6JzMeLTZwCoRNBun7629DCS9HEwt",
  "key3": "3pcjsgxXRbM84bJKP8CNyRviykPxmyXfi4arRnpnrSZk3bG8auRPPcrb5XSXv5kWnKWQsRxy29j1sgdyoUBd8xu5",
  "key4": "5iJXADxHwTvRjzVSZDUcfmTbbwWmbckuPJrFgxDtyBDD96Bd3KT4RA91F7BiDLbUCVLocq5KDtx9WyW8mtncXvk4",
  "key5": "3RocRxnRJqfrN2JffGozPuTLRotsPhCbVfS7SRWNPE5cj7pdR7ixjM1V77FkuYju6JTARMAoYR86v3kDS2wDdasb",
  "key6": "2Ka8QWzg98H9Cix9S5LvvrtYS25qWj3AcPrJ3xuXWztjA8Rh9imJxVfpeXfZoXFcuxMiapva8XWgnEAhip7r4JsU",
  "key7": "aNAcG8qz55FfKt8sB5X6Z2Y9Df1eGBpvhq5vTBCDfkNYoUjhRphPhgTgUMSPo2DDibMPKCJsxeLrn1D3e8TTfcu",
  "key8": "2Tz5XUeW1iDBnCYBbLkCyAJdWtrnF7HagEDhmbCnWuGouW8Xn1tQYUdbU88CPABadZw6V93scDV1V4nMA7L3A7cg",
  "key9": "2eYtepc7Mws7sJDhJiXEWH4MbybTkDtAzCCQbejRWmvxHHwhyTCm8wbQiPeCibNj58q846Pccjivd9CmMWNBmZyB",
  "key10": "4aQ3uo9YdcehfrGD5vJV7US5anWg6MjnVMLVEnqZw1a5YWksayaHgzVfg1FwfETpXAvY3DNehVSu2jDjmTNjsyq6",
  "key11": "3BhMM52y169HmHz26dNrd53A5qJNGmJBUYuUZyWXJjmt1VuDSEUoyf1uWQirPHpUQfWTPAW6mrr9bbzPj35xuoef",
  "key12": "2BVykenFn2nR1rgmwdT16NbLurUt4Kf3xio4yS5RDdG5UHB3Y5cLwPQ8M6UNt5vYk29XxPrKnZPU62hgzmiou4Vt",
  "key13": "2oVyE7QNTSJJh8wMptF988VfJsjiAKa8k2CL8U2SZWyLZG7iQB9U3V7U19HPGyCxzYnH1DETMeBpgEZqWFdUctYs",
  "key14": "2rczyY3HATeNv3jRpKzn4BXTpXjUSAe6eQrwRe7pj73ypFZiaLjmbnRUcBqrzNfyaYyA87gMHcJDNE8RCk5dXoye",
  "key15": "5PrWkZewQhAoEaCT3MVDopq8TTYwB6G4DQPqYu1BunDxnTnTfhaZF7yQbPnr591pEkuWPCwzBhrBphLrx4m9E4AR",
  "key16": "4bo9oascxV7j6qyK8XL65YzrFbpn9e55QWjF3zup8LS1e6gtCaqzkxDqtMCUG7CXE4raZPcRhDBHrR8Y1gwhyNrD",
  "key17": "5qsX8EX482ja4iRK2zZBFaGSpBmvfr1TMQeWcHqnWMMCo5nR3NfvDoM2PBJyvMtwPdthUxc2pVpcUj8n7x53ZSpQ",
  "key18": "5Xvg6sFacxc3UpoQno83DLhCZg3wNSP4WCo1wdJsHhb6x8ZWqegkZbSadZf6R134CgzDkSYLXMCspjWyVq213p9",
  "key19": "5R9Us8RbELhci8CAthbA1diZTRRMKy5jA7JACKPSrvWUihC3bfVnwUCBE8TZLdvryN1NL6tjDdEixGTfpxujxW3K",
  "key20": "pr8iNuX6DYyXh9nqfUUtygwqKj4zXVDTixQuVVMueoW1dnvALJFdtVan8te4yQijopw6kgpSpCMDEa6NSXvsQ2J",
  "key21": "4pS6dYQUtge4uNUNuPerSMtDbxs7SwzLgph9tRRwny1NeacBZBeF4tMFCG45VPorz5zj3nf8L4okWMU2BXvoHM6P",
  "key22": "2nuJpud2dU9JeUbvRhhSUtFVZoq2oAhdCkXfD43PmVZmxdPYNm5WAB9tbDzYcnHXoY6DjabpMbvZ2bSVFLiv6aBt",
  "key23": "VTKNYfhSZRJY1qHpj6fK4G1DqCUv87FrxhjBtr2GwpCWnw21apXF61r7XByYBTZmDyt14rpv8X78PrKzaXbJnBH",
  "key24": "2JxzXns4bzX6iDtT6xmsn5v23La1w949Lj2CCLy9xCvJJ38mEnBXAYXMrQki4jNmffqXJDhi7esgD2XPmWvxn7PG",
  "key25": "64h4q7J6XjguE2wCkHqMxXeQs2ggHiPdHEx8JJDMo1yHHbNAJq9UVKQnEjbCFrMJMarcjEndCMnxsARGiK5SmkAr",
  "key26": "5vxkD1QTPuZpqcMhkHfCVLDBBBUcGetqKMKcuPrBQMYWsSsybhDn4YMyJSMweWJgCUtTBw2jRwosE6YNbhewg5Un"
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

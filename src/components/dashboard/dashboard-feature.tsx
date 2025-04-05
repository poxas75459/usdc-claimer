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
    "4XXZNMqoJVCcaRYvM54SFsYCDu9BpvGjsJFUosXLCYEtZS2qX599PVsVdSY9s5S9Pu6AcR2XzXqbU1jn3tGsWmPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DL9cewwEDQR5SJduwYjpx8P2p5D9QPjvZuUXS2wy7aJ4o9jrHYp5gct95Hdsc3swwV3MTnyZ7rJYqSvRHoSyZXJ",
  "key1": "3zUvNAqnSFWfj2U6NYy7FaHDpc5c5PypurB6kwQbHek4USSMdVVeGJCZY9ZQz2xSKE9dBULQTHFF96iD3VDouwuE",
  "key2": "4bCQyxHEe6rQzFm6dxkkb1yqf5ps7pLBWVo7G6PjnaR2FDEH2vPokGR6i6BdwdHrAKBcEjrNqoKAyDHbzBLi5uUQ",
  "key3": "2r1yUVrCcLMokWkxMa4JfGc22AUaUJjeMuHByi2AmY8SFTquMtYQW2RjHHCqtfNXNHcbLxyqu6vx3YTogwysGLuR",
  "key4": "3ckq1nGbEFobfRRqfp6pRNE2x8PKVWhv2bC9v8CtZwNGYH8uoQbNm8HVKTqq68EBgHHoFMEhkFhx2bots8VXqTHN",
  "key5": "2wgdTkJsvPQFiJuyC58nEfq28N26LRhS9PkLwv8A2MryNP4ebr9RzwFSbwv14z2eHukTT32GKkXwsqxLbF8AUyLB",
  "key6": "2x1FHYW94AzNFeA3RCN1HjzX3nt569zppTstzRnm5ij7dWipY5kkbV3RKx7ZUjvAbsWbxX4jAhWRUwU7b6ZTywFY",
  "key7": "3KNntXoPFaR9QiQK1cyAtsRKxQNxZD9tPT6UqcCXGFrzwCBsk5Wxa7mHEjS8cTPPCrFeM9iuvPvzbmWEfL5wLuf6",
  "key8": "EuHbW5RbsABPDhTy4BRZwCCkrBzrfNybPsnbCRfxmSn2PgwN9KKZ3xdB6f1s2Utr8TcsKUrSkG5obX9enrvp65i",
  "key9": "rV5KxKSPEeAwjBWWhpMfUGK42Jbg87xBfJ33MNnHcXhUc7BcrQXdRZCwzJCJ2icJWYvvc2rZwYYpBu2rB9u6qzL",
  "key10": "uEELfTf5Fpk4jzcZyjckfL3mh81rb7LhgL5BdoNqYLU3Pnd7ZyMEAp53quqghtaMVbr7RUBof3KHQTNTfpQrhJH",
  "key11": "2VkStAU4E8uGydmMY3o6phf6ycBbWgvSALqTcarv7T8CSpBZPqy8MUXcvUviD5FimmrbYoJvNBHXoSirZ57JXiXG",
  "key12": "3UCrmCtnMBaZa9Jnv151p83bixPmCG2BxiDJoUaqLekLxZYUdpV1XM9Lw3UrYcrV8MpoEwgxNBpUL8N7RBqgbqke",
  "key13": "1TsJMuc9KbsqoVTJ65xUWL2JgAN3eGS9LYKJLgUiMDqHRfd9RbwE6qLiA3jjgwHWjP7HSRkLYQ7Pi6F5BLCAFJA",
  "key14": "TqDiurHkpxczyENqS1DATzMfmb2Cx4E439tem16i6uQN3bBoSQkChtKWVXv1VgLR3VHHPHARJHZY2Pp6MvTwHSj",
  "key15": "MTZMLzFChYRk5cz7w4GyrqJpgcCUHRiss2v3ixkEoMgyLri5Uwpyt75uSasU6AuJjSVpD131F8QYhKAqWppJtRW",
  "key16": "2ZSEHKCdasDUnDtJEaud7vwVjusLXxvKvk1dRGq8N6xdbJ2wBnGbV1XSpynTxk7you9XhM3g7UuiXqF8nqeCZgWk",
  "key17": "3kGwneUdevm5iu3SHMXmvzEpS7Pccbgvfuq1cuF4VZgKwAgXrxM841qj1dq2VeUsN2h7MMrJb3n5fm9HzxJECBQV",
  "key18": "21edFd3ERZrsTQrMESwaGJEe4Fy3Jdzhc3meGXBoB1CfbDjhJcDvPMmVo6XydvguMdQp9zCxu8BwemW8RxtKK2Jq",
  "key19": "4hvbhhRn7NNfEJ6F79a8TdRFcgmTpCj1RZU62Qw4ZGYEycyA1q3x7K4mJP7sDSniUhTM6hDBAH2Urz8p2ACf38Rz",
  "key20": "4agy4fq1i5qPwQ3moDTQfSub2HTuANWX2XnR6L9RzJJt32S2CvW1SmWvGhsJPHgVGP8DNmdFFY1DAFJhDnYftuRQ",
  "key21": "3WeXKyyDpWzzK7nqr7mAP976vdXCCdt5hjinhvx1gQxrgwWTaafYFDsc2FRne5W9gCfBY1ei6ksY2LRxgAtDsH8",
  "key22": "3nkx7vBpJupqsUDwYKGqkHWUspx3iD9EVxstLmxhNwbxrKUc4Bg7GWkuAAiFk65vyVChi2f297ZCm94BEsyoPX26",
  "key23": "49zeyeH4uyyAZ9RmRQEw5GoS98JDVsaVqEezR5uKotBcqaiXofgQWZaSFtbpEH589Mvq8FDW19ALoTYBVGJ4yvFJ",
  "key24": "3ruV92bSkRqENR6tDgypn1rGm4yVCeVqAysvwDo6wbcDfXFkAFmUtRvQWEkTFxYJmDa5qpc3xfPvP3Xwv5JmqVN7",
  "key25": "CVkrPAdbQDuUUbXzmodot2AYHXttBYWYmSebnPRnFyfjea7dcJuMS5JECSUC67GfFtrhw4TXMoLwrVWe49xqK6p",
  "key26": "48hXwn6oBwfMLgCZpBp7JCTzQg3Je35eud9H6c7y4bDB3anj2g6nv4LZGVGJb8SaWoA7xeA77fvjfYSVgUMX7pyq",
  "key27": "GKK4v7nKApiq2ddBUvPbHx7zAz8kAr5gp6h43vHm49cjL448wUBRMZ3aaq7qFw5WeGFHCJRBqHv1QSedP8k1Pv2",
  "key28": "5BFwtRw4VxSNncjckR2NxTvpY3k7eDXkCNEsBSGzqVhUd6efzSEpoM1dwqw8tNKSUjAkVyZfCxMx9oRvJujJxR1V",
  "key29": "4W11etYeR6E54ywQVJCDAfW353MJqwkyW7XiECgPNjppwTyNu1R4SonSZ1J6eYAuDPno8pzVa5M6gWwRncyVf146",
  "key30": "5FGRKh9pRUkANPoCJXYjfuB1vu3Q1WcXBW1h9DA74q9yeZ9HNWAStH7w57aL2Mk5B71dFo3G3jvJJTDxWW7aBQpQ",
  "key31": "62Y46KXfuwterEfXT4vNwJ3pHmXRF4oWMuvKM9VhmdPdEWVKkhRaEqpCdnTr54omCMn61TFhedz8ztH9MCD7jsiS",
  "key32": "4v22ymaK61JDGDnJ94qgYzcTDRyf72D3dHUMxVniyTJAWFi9G9V3hB2FQBJxMAaDCd87GWHuSvffXo1ay3ZhZGUx",
  "key33": "4HgtZ91K1kXdxGVxvmyCBsJ5RcfKMzou9Y9JQ7xtbvA9adn4L1xgRdYqkYV7pjCdhFXKN4bjyYbmHPjeTnL4sNPZ",
  "key34": "TbkJ5ie3iMoWuqHenc1tewFuxHf5umLxGifBhodhXt5bhwSmeuPFDT7VZTnM4o9xQc9CRhE97HF8CLjdZ3vBq18",
  "key35": "5Vfn9v9wnKMuYqYXYGmnaxHND4XDw7jYY6iMW2QaKCMHyXa9iBowyFMeJ4SZynxeRV9GLSPT5QmBY9MBQJ3AoNmA"
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

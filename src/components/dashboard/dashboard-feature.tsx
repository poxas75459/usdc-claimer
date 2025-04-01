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
    "1FWDbJYq3kq4UgVqYFvCidtFh7E9qQ5X9YFcrX5CCYSadWsy4UUZgpSjR9vFH6xg1uqxcfixUgqMTfaLMHrgwMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EcwrnwWP5RoCtRw8VHjWtM1ptMVz3E21EytnuKdVPBGySzxw9hBq2Ht6478g5eKAFPcNpdfaB8A4K5h4WVB5RVv",
  "key1": "3sAbpAWg9mdXnaNMrEyeKq53jWBWCgkCXdsgs34q127dgt5zdgKM8cp31XFzdCxdUnjC31h1YJU5TfYPvM3iqd2k",
  "key2": "62ej5rirmCMM9r5HpzT5KLZeNCD5K2tjiBbW4py9zzhDY6jzARsk9UTtEssxWtnijmy1dRcidpQnXvamVN2nke5v",
  "key3": "3SNYyvwmL7Qsbw3cV1DCTipDQxHtjtraBbXY5x4nHb3AXYRCBfrTS83ba5HnFXkLjd1dPcb9Jyt5PtZ3cGbnMKRb",
  "key4": "3BdA6c4mRLeaUpJi6EeRe6CD4u2LLwLXhF1eB2xC4ZcExCHVEQzFvxKsB4Hfter2j8F16dVf3vw9iHJLbor2pede",
  "key5": "WQvYEjhengmC6XkJTNV1cXpUjPqS4ZjCRggoRZEjK9UwECw4JxUVxPFUuLHwatNosSEFBYovBYkT8GCDL57WZLJ",
  "key6": "XAtnCkjPytFG9LXaEocW5hG3Bv1eKmd3kPLxcrgX7GzBCqj9tGrG5sMiztSntNQEVHWm42qUKtybjwoTTQw3bT2",
  "key7": "2pei5ThZmFVbqzEnyvkoduyUUfkrF1tUDQWDZ2w8xJ3mGBFBmagpvHTSEL8cjJjfiRJNAQETHXufkDWcednSLbBw",
  "key8": "DuSYRxgZRBDPQ87Dyji1oXXHDP4W2dtC9auvtC8eLQ5qAq86HBXtVEG9TXucQb38q3pbwfgyVUh8ZdPinHdYduv",
  "key9": "2SEVFpc2PrSCn96hKyyAVr7yaDnAvxMLuyHFW9GxZBnwrXEXS1R7V8bSWw96GQyRZT5kpHSWMJUkrBmzWQTMjXfn",
  "key10": "PXmGXvcVrDJNKhWQvB1Ez7qHuCzxtoLUELgPPFXsxA2P6tSLKpSgLXPSjcMEhNiR8NfTrEMgPKq5LQd8jL115Dp",
  "key11": "sD14f63dA15nTXqTsqddxjanxDZaXpZUoLi5MsxFVP8q64bjoJQB4ULm7AH9w7FAcM7C5nM7cTaE8qK7XGNieM3",
  "key12": "3iqhakNDfek3qbezQkmeLx4SEGFszugmjTfkouDEDqTEaKfTzFTNe78QdhR4hQqqXNRyd8swwASmCRnQwCK8xiT3",
  "key13": "2cq8GcWNtfB4qvvMcgoTpWwemaCg2dK9zRvAut5YbFUk9XrQ2SMFJ1EawX6Hv9qZBXb1mfRCPcTgCaXD7oLneF1h",
  "key14": "2NeKV7QLc56jt31fSF6XkL7c7JBLAjStTNso7HxUBAEi3uTD8ok4eAyHsAmycx68qRyy4DM8wFSVGx65qFHZSncN",
  "key15": "agg5K1UCqRiEw4m2YG3SVCPVvtCYdyFoZ4FDKQ4v1YhQde9qUypshZwXqfuwGcnT8v13t61VrY1mC9VqXvzDYhx",
  "key16": "4TAbHnwkDDRSmnkS2ZELNCn58NE6x4iVEVk4PEkDV2uUVhBhKLWtaecPbNndPRbsJN4i81vBv5bLMju6HGu89JNK",
  "key17": "5cyVwKWQycy64CvTvRGussBE4D2agnzEjJTuXdQapQLKEA8d5zHQ9q7p6tPpRE94GC5ZkiwUD7n1tMPQHnvgHQhH",
  "key18": "23VtbgEQfhKhgAjwhxKbNfzDQJG6imQ6rJhLTfAZT1sjU5ySWQ9RN8cveKtvywY78Gb9PWAxoxX28612YGK9uQJf",
  "key19": "2QTA3Nybee1arutMcSXdWc1ZAPjNLBDCc5yR5hLAhmaPZ92kZSDKRfi9DX8qpA8f3J2rUzFMGmfok8Fpw1A9yPA",
  "key20": "5Uz7S5nmiYEFSPNJ43xXwcpanKXAD2XSFvf6iHFW4avTtkL5aSrYtYTreSWUU98aNC3aMkBo6dMbxD2dEzSxZE6J",
  "key21": "2zAiJwhB1dmi6ZecJ7QVXoo6SCbh3oLhMvwogtdLjnjWzR5Mf18A7K1vfEwvWHDS6ACzYujkgKAPTtYjFD43Rnjy",
  "key22": "3HeLsK2FUCdHueS2LPUGDxc6zWFGb7Exjp3YHjMdujWfA4Ly7hEt5JW5Y6T6jVGK9EtULBfr8m99p5f8nYVyopxs",
  "key23": "5hNdrCpoZ9Pj2n5m9uYLpXMgZhXq1roXdU6Ebd4R12T2zFRvkQz1rN2VrGmgbtGxgFfw4g6pEbqrohtSd2rHnoMM",
  "key24": "rvEbGf1WJSBdz3uo5tXHD2jq8YaxNMDaupJjTGW9D1vXFs6YmMgEMrYu3nTb4mnERZmnoBq5WUzYjgonDH87ggT"
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

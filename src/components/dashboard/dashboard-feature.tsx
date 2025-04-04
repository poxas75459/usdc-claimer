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
    "44zz5Qcw8VXnXtPvZjjos2cdV5cE8UuHahDU1TW7oebdLkn4YsV1gFDWojdWq3LmduLTWYFVv4EuJGrboWqpKqUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cgD6eAUUKtyHYN3bjhjY9cPzHzLdMAmC3oAwm6ZgurE1nTu91PHJE5xK2cyySDiBViZXLguKw5pP3k7BCSJsG4J",
  "key1": "3YbyJfFZqxFRrxiiw31urLnjY5fEWMjteMESZBrNR6ufLFip5bETLAsTFkoPoHv4wxXnZqPSrF46Aqd7iFuV4Wx1",
  "key2": "b2x5MGn59q1jv1fRmijn1YPrTznFGfnT3tj9D9TGgefH1HskHbmcvdujmQxGiPLFiSpQ8cUXEPxfyK8PmTqoY6f",
  "key3": "6757nKQ6g2Y3UVDk3Y4rvX1vuzNPMwva8FUC8kYRdeuQtxsqkQaPQNr12tXRemNg5TRZQxiuPdehXVUQHXR84UEk",
  "key4": "4GmtxttHwHtQbTXnyt4pxyVkgzJnyYAjHVCgGew6hWWc2pxr55gJ9dSvxd5acMbob7dU9sskrgcwDwdYN3Cu19xi",
  "key5": "5nUGyy9zgn9X3Kd3eGFCfGTmDV898E2TkZd4wJXpNS1FCB8fhLm7YQez9MMDvHzADHUfSnJqpm1EmEgbFu7nPAm7",
  "key6": "2hy8DmYCdfytWP5VM3tGpQwKb6Rzv4gXN3Qywynz3Q2QTbyzPkn68VunSEzRCe9wE4UdLiEGgVr5MxjDkfZWf22F",
  "key7": "4atoi1iFnPvDWR7VL8inKLHYgj7r6hAosfXwXeC4K1LQzF9hByWLvQXwwgXu9SdyxH6svtaixAtSfvEnAjkyc1GW",
  "key8": "2M1vHT3Jw6fL6jjvXHDziPKRYDkSBKY7VkU9CptxhPpDQb1nE2UHu2CLqJAonpzxYE1ZiMmHnA3qNJ5Urd3Y5xM",
  "key9": "5E5vcu9W7ms7Wf2UV9xbUyHVvkVCe4Kmyz7451uburaXUp8STZpf7fdvGbhvKKqykAJsoSeC7ypRcKe9jK6hPTEb",
  "key10": "2cBDTfkDvX5oxiqngRDwZXkUuWef3ctnouDjnC8zjdaxbBbHPeHYQWTkSQiNGM9PFUb6psWfyvxVyNrrm6PmokST",
  "key11": "LBC78ZAiMWvcb7of2WGiERepERkAGhFHAzYr5B7YeGUjsfMhesS5M71oEWbqug15zZLBnrC9NwJ5KaGP7fjGrth",
  "key12": "QLucMsQDxq4SxB67jK9wX88x4vrTGHzP33VUKmWTZ2LHguVtM2Pt6oEuBBaz6fr6nxeYfSVbMmhxUBLjABQid3z",
  "key13": "fUcn7FUwRkg9DHZTSkEeUKH5cz8mGBWyvXeRyKfdAjXk2sMztVbntK1oJ73cfQA6x1uiMNSxKi3d4dbmfdfMHN5",
  "key14": "27mDkJfiQp8USFnehBdejWk8d4kgXjqyknMxVDRnpdn6pRW4kLyJFsowykQcPzXnPgaz2F2xtMkmc8KSKcg1h425",
  "key15": "nBCgUfvJnJBAERmj1Y1v71SCjtAsr4tU14ZHEkT7BcmumZwhU7VqQcXcPA6t6yfcFWKLfmdKqNG61buEq22qq2k",
  "key16": "4UqyTMrv1y5E9P4s1WVdnvRVE3GJPyGsLyco98thJ1FPcVHcigtDKnaY2zKQgEHRC86biumpxYVfVVXvtUUsAWSH",
  "key17": "oPPc1hxmwhwvuFbpHh8sRxqZupchjokRamPhwyv8oHFe3s9q3ukMCvfe7J3TunvMxUcyTwUK5Cw7sLq63c6ihia",
  "key18": "4xLWxY4uZjyKGYcnyv91Ci8p5CHQ6ad6HuoEcNoHHxvmk2iUhPF9bhagWP6i2PzdMCYAdKbVKyh1MLYguwFzvMSP",
  "key19": "4ED7J1SZtLh3jKohDCNCqhoLhhoZQrVDCesTWFvk5VnSbkgTYx9WYB2AnyUE6G9K7Tfee7hUb78We4mEfvwwE93H",
  "key20": "2HC1PkoQMpHKprnEUCgN8txBNtSQdhZUWhZc9Jr1gDyco1V7yoAHzTvvUQcFquupnQxaZFPmM7hwMHfXkojBBhg1",
  "key21": "61uMuGoGC1T8Mj9JM6LiXdFkYuRkf1X76qoM95BnZGfT36edkbMAbxdRCyGozufFf6uVwVWz3wmDsBqyYr3EVnTZ",
  "key22": "44fwnrCT2N2nkQ9uoatXMRwBt45SDLyURNDoFCtB7WndMjQ6LbJGYfDTRhS2hyiSfvmY96Bgh6s3BQfHAB3GScTG",
  "key23": "4hNGuthbdtZWze56KXpxiLGyh6Nq8DHmp3TPFufKwxTgLSHDZXLDuvWJxwPozLPhjyc1g2ULdJcWjwifVyiBNRoC",
  "key24": "2jMdDvC4rB2UKDwnPPkMMG2jUs1k6ksLfnMSVyzCrKccJMuUrVPiyujDt9YLcAPr3ZZaBBovFqjy5z184yS9NGnq",
  "key25": "oGaKT9LGNtzsvBAP8nU9njHx97YUiuS2j2JV94quLJGTcq1feYfmnxp8rMxAg9yqAXUYQkLUPw5cp6vFgdFN8e8",
  "key26": "5r8bAyySJw46oKnV7FajFhcj5rTc5Di7pdFDf3APTmKnopCSNsD3xWuaHHr9mc7onvy5qcPndkSsBSJu2xU2dEJe",
  "key27": "28DhxXZvgVt6eqDGzZskUhC3qQeEqpxzX53CqkUrXBLovxzP4vMzPNd6JFDcbSjvuHjUBB5vUv3PVSLfwuCh5PZ4",
  "key28": "YXqWACNVSJF1w4wAT4aC2zmHkD6KuW2jCNxdPHgqHkddMaaAeKMaugwb9B7wQdUgMHHSCxC3XxKJU5Tiqx5HwKo",
  "key29": "2pHmP7bUby63BS54p4tpnGyky3cFMZ9W6NvBTeBeN2wz7VwJMs6fvqakf3eZcZhK8w6SVJj5VDSdruSax2ACmErE",
  "key30": "kx9HyQf3ccc6mWU4aGJ6LncGYJAqfZYiTemC76rBySfUBZPaDtQrV7T4dnqPnmtP8oGBQTZP9otDQpb3xAGzTZh"
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

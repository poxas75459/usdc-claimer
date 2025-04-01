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
    "2E9ye5teExwGU89T7D7UQqALFyG8ZFypJ3MhRRqgL9yRQ1u3Fm2jzjPAvnuxW2R3i71BoUp59LD2SDHpoVdpzoLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DcGLyNrv4nh7bBh9r3ZVSDxs7jFNZCfohKrb3YVRGXTrLpLaPzqYsCEbYs9cSi7W9tPsDGFeRjBWnBMuuQRnvM",
  "key1": "8RSe5repb81a2xERhWKThg1gQdbBNFDeab8FqfFJ4DGhZSVkiAfoJ4rzuuAg1F8BMM6NmhTGnPmPVVmUcg9sFPw",
  "key2": "2zjFRg8cKcyHH9BwmtufFdJgb89cxgT58Hbm5kEhn8UjJDqDWQU9XLhygUF8Qs7PV58HKnt2ZiZu5667VRUt5St",
  "key3": "4CA2zE9KgTUaEb3zGnWQeCCZPcn8y2jYhLN2GCLzsBpcnMiUMJXG1bQfNBNzer3fpTHjt2TFqpnAY2E2aXvdMQ7j",
  "key4": "3WdNundjczeExmFnaZwJkSzDtMCXtHHViHY6kQ9gRizWR9am5raW6dKnwfWmfXJF53y7WbWnHAmScNJcTYHccKo9",
  "key5": "SzKvWFwuwiD26qVuY3oi8TZUA8QevEHSpthCEm97BqHsDz5b5B2UGrsrbZvRgbFzE7X2x6NSdFaKZ2816fUTL4U",
  "key6": "5sPuc7u93qS4iA2MNmLeYj44PnNcdZwxCLf421KjtEQWNNtFe63P3yYSfnQqVVggAshAePnrVon3SuuF3gLSKW6",
  "key7": "2c54zNCpPQ19kA6rJF57CoGzxQqxhVsN66Et3MC9xNVyXt5g6RHb1NDxQeRtem1KrxAQd25nPkeeKtHSm6ZAfVh3",
  "key8": "62RC2ErV6gwqyK19YhCmx5T55hsa1MXm47dfXhNdXruEUmMmmY769112CHxCRqShJcSVADpNTkh1vgJmmt5EB1sq",
  "key9": "5EUNMqGib1yfYNe74YaqRDq87vtKP7G55KY6SEvoSQz29veVVaV7Se38HXfQF4kXvYDM4DGGwQiF9AsDFeUXAowq",
  "key10": "3rNs6DMcoaqt2dEk3aSVT5J2H31kYW1vq7Lqw6qLhQKKVJkNMJDQLpEmmxGMYpd1v4JTRoXWDhvzafmaBkZr1nat",
  "key11": "poFL2HTM2a9B8nMkjnFGLHmmMhBg3WyQZPPrNG1Tp5g2Azc83AXSnWHTVKWiw91gQMKMo688R7kNqunr9pwzokQ",
  "key12": "59Z4EMnwpn4CnRUjUW1fri3XeqyBtCTNgmdr4cVcZRjxBJd4VkHb5RVX6oKXW7CC1a3SGHB8n7tZej8fpEwfYyhg",
  "key13": "3fd1JZ3B8KXmfQw3meRAEUaWb2vpZTARnXFbYWz3B3w6r2bCvSh1AYdtdCFgCGdtQ41CATkw484JUWn2587YUp2z",
  "key14": "4nMMo4diw3QBWNoYpCsnSgyMK6mBh2wfMQpwFbjmvthNGe39RKm5ZztctcoxR1ihfNJQEoD4DhEe6fLNNAEHmnBK",
  "key15": "2fzvMPgT7x2Sqf41V7wDVDwzfXY9SPQzgjsm83MCHw2UAcgGYcxGomE4NL7g6pathq2uWEbFBvDCypZWnAgDR9GL",
  "key16": "3dFAdPvAXVKZHekhqY5UBTYJUY9YJ8fdY2tjUqN1gQTPmgbQqECgGfufW7JUBfizg1RsQJN2EfwZ36Tphk1pdR5r",
  "key17": "5doksKMKMGPeaS7G3XbgnhDv2CHxppPL7jeETtZ6bon1RZiAEGDn7Y7RmJ64NHswbABuPfbcBwKR6WvPJP4vcA9a",
  "key18": "4ZKxYBdm5dE85fKyVZBWbe5jM195ao9XAYzVbF6DpMqSXC7wvdKPAPF6R3uVvjXtTzP8XKHmJbd8Z4ZTk1JU8tyU",
  "key19": "2Whqmjzq3Dn2kgg3vzk496aBmvu9R3MahEBGJXcXCfn2iyecfgpsG9rbpxyCV5WWi8tw1xZs8nNR4f9KQsADfydg",
  "key20": "4V3M6shtF4ZgMQssVqFCwRRPeds7NQzfZNLDsmXNx5vHffBiZhewADQFaSNt1DbGL24FDDGoGpeaz7AvKWE93EPF",
  "key21": "66KJGQ5ZkJ6XBpenbyCo9nGwXzuXUjqyTAEK1PFnkYLeDsRSPpVXucm2LYXSLzcXXJKDN5mqwVLEBrCrXToJEEUF",
  "key22": "4Uydr6oc1szyN8v8eWzwg2ijgm2pkFqfijddthhqgnYqzE5j2G8sWLLacwETQfCzXpBvzmBegtvC3ctW3iUyNMjj",
  "key23": "5ZNY8PjgM1e4aJrsuzZ6L4tLqBE78VsCJ2TB3VMG3nGPvvutnPB9kjSdzY2oeGNQX5Pa5tuZDpviH4SnE23JVh2C",
  "key24": "628By7FZHmcTB8pZbmreMWtBKvnutwvx9Fs7Ma7fDaGcuRYtJHNAUd9XtvEtMW6dLagTedGXMNS1KTerA7uUT9zd",
  "key25": "5D8LBj8vfvMBCM74dK3iJnEsV1Na9aHNXDCLvRy3Ky3zcr66SG1Xpdwr6CdhRJUk4xNNmsihMKoweREf2mwcVx4o",
  "key26": "SK8ie9FwK4K8QJshxH9f2kGw6mn2r6tmqRtVABgwim522a13QBzjyQmy3Axq1WLKqthrL6UW8KqeWHt41i8pKQ2",
  "key27": "5R3Fo9U5fxzjfU21DShnREJoMqrifsWrw8Ni9NX49yfaDTyFf6PEhEgnedtFJ4qN5ubFza97cG5kVNVURxTfAhrN",
  "key28": "5gfYu9WVMPToyGEVzsomBerqGPQQmsKBaehGdtJNHnRrqodAnPCdyMzpJoCsboZ1KGNtWzw5JWrQNWVHsidck8Wi",
  "key29": "5gzsfcSTa7i5yGLb92TdoC1kKZqSxKYWTmBytsZfVCDBh8mzjrqhZ4fbDBpaCLaJyHftMVSa9QN8cZ3rSfc6TD5D",
  "key30": "4jKnScaiux5Tg247FepEDfVfHaDQCq4R9WWGrvd46AH21oF2EohUfucKD5WWcLAWNMStdse6AFf6iwghosjBSKcP"
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

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
    "oUTmgY14vsK76aJmnU9rcS5p28y9awLkaoiE5UJsDzD93iGxfAGAx12wsQ6Bc8PSz1AYgNCERXcQpCnwrDwpCEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eLUZXo1GMEkMrSPDNZQMWai2ap3iS3uLU9uUppgoBVYp1p6NJSYB6iyxbva8r8nEgoXMJkENJEWgoe1TwLCxdUK",
  "key1": "BqWaS93LRzjPUZJveWokfEuCPacwiGXo1GDYJ2GRKT1UdP7yoH32i2H6PpdDcXMmiN7CfHS8nvTdhhWid8G5kKM",
  "key2": "GfvcPxyewekS9LmHjnAG2hsW3B7eA3nvtdrFfA6RZwRFTzqhA7kmAxKjPHZ3ymoeiXeak8zprLnxJGAbYyXoy7d",
  "key3": "4WeooRtEVc2bTvnzZcVo5UUSdYpVT2dxm2crB6o7ystK19MVdpn9MMfNbxEbahAdLqaHM8Wqr1yLjCieWarjTLVv",
  "key4": "2Nyw6WQ7RkQdZsKVPRk1iFTwrkih96vCrKPUwcbk8xT2VjUnpDTqak8ctVi99Kz7pJpHxCVKPuRzHGnoSVmzoiAH",
  "key5": "448t6jWJhr8qawGjwh4yLbG3cvivEvQaRv2T3Z4JS14uzPQo8S4rSaTXTijYeWKroF1h9GJ6H5j36fBxypd2ohEr",
  "key6": "5ithzGtQ4PMTZgKcDbjeMiiYw1DZZdUb9Bbztyo4bSjFnSQznYKLJrBiBkNqbnmaT8RLzhL344vJrGokPcRQfq6b",
  "key7": "23pMPkUyLfapBDq1aUaCx1rVE6kyRaGEuBubB1Zug9iQvRsD85s1cebeqQcxoCpxEiQB2YxNP5WdbnQi11ST4qFB",
  "key8": "56SQt3WGvLAmD7M3jq36uL3gvrofznVtdSQcuSnMkUyW3AMEeymF4ZEbCDVCm2s2DHBVgASQCYE3eMHxNeCBxpq9",
  "key9": "3qPHSgDE1WbCYnrU8WcWgKJDauf27xBmPxs2kFENhSH8MsQqVZur2m4N971JroDFFKfE7Xcv5Y3TrgMT7PS9GyuQ",
  "key10": "5PkuLfEwQUrngD2hGcFSCuvBzivTnSPBMoQU1i5Gj5BGwhE3Baz9ghsZdeWuA6coF28hx25ku3MJcHWAE2pGpnxB",
  "key11": "2yH7qeqsZYbsyQiZSkTjoxkawFGF8fyPzh3nT6ddju4w6QKrQmHddJrPRVHSAsp9jYgUc5ZVW6XyNebhtiT2eazT",
  "key12": "2iTH1m1YVwhNfir3gmPAqRHtZj9D6cWbNTavkp1ETddL4wFgoqDmwSjtpogNaYo4hktgjRmSaZEHD2As4TqBbpgo",
  "key13": "4M3Jwk1mc6DdnETmJ2wmCN2KgTq6tznnLRrPqWujwGettQb7Qd7TJzPFzjECCgeZvgE5eEFAoEMF7yzzmo8ipLjd",
  "key14": "pMLPgcupPYZQbXWxQVvdzuzHSxM44CSRpKHhZy6C94uRihyQswEskqASLkY6C58PDC2qQ6GqFCTiwMLPj4CBCro",
  "key15": "58nQpXukqZkBR3ijnYrDgqQe7f7aayAaZM2XF7KDTZDwKxAD5jwir7bG3dXgUTAkauGWty5xRE7Yu9CYZqPWLqPC",
  "key16": "MzD169D6kk7Heng4B6HAG7URzwUC2X4CbpEPuJu7ynXamcuaxQ748EQghuxZsRLNk3aMDayg9cTGKw41dS4k6aA",
  "key17": "niNPJDKa4XZLME2YWuJ3ueb2TZtY6t9KcNoyFcwKCcxnvFChp8xb9ApbKEPK5sqXJrjJFSRZgqNWDrLSrTXg4Zm",
  "key18": "JVfYEnrjNWov7jAXRb44CZctRQobvzALBMVVCsKi8AFrk9J3cLWH8o1H8wZTVcEBSyfv2hEXS8nC6kWK4EcQvyV",
  "key19": "okzyTVVJ5r7zdvsa7Tz7PLUpHqpWjHgLjMkvRegfspVhfFbFNhTpEivnUHJo2D8QjSTWs9o4mpSJ2BC9EX5SeUe",
  "key20": "wNwg3nt4P6fgGnmPtU6ABekEKEam3C1PLr7QN9nhBSWRjsZpfjGm8P4Ls5PwKhVAMxR3Lxy9vLiMg9z1ZeNdHmm",
  "key21": "Kt612DazyXeujyG43gtbSr147vQJDAbfnxJs3EZeCrT3chjk8MSNqYkmQzVjMjdb1pFLo924J3nf4nePm8eeEsn",
  "key22": "3KrVUNB43qTRmewcYDvVm6sBnsyZuxuujKd5JLqoGwx66pEmLHCYAqTDb2RL5zojFbrJneVZ48X2wGjjpyewaMhH",
  "key23": "4BWK8fhgFcKDwa76DL8dTPy2DYuDPf5iL6a3TjLJSp2rU3GBFo61YHJXPRFzfT51PKC7hHg9KXfYSTFijrtF3dH7",
  "key24": "5eySQWZkUKUoR1W7wwTGaUpACLjXRTfZBQaHTNhcFmmXtCaHMSA37H9WM26k9FgQX8YsgLWGdzgap16C1QJr2rDQ",
  "key25": "3diMrinTVcMKRtZ8rANGg8uVSULGfarby3vWWo5UK4drShWX9BJKFxzgNuub2CjRBfA78zH9rN3HZjRMi4tqwNsq",
  "key26": "vh9oKbXspJaZ7XDmNT5Ci9BmbSfjdbGktGguPFPy8RxEWD4E4aR2MkXPk7UUxMyqa1x5C6RkG1uftByRcxTb5qo",
  "key27": "3G4ZpMcGgLsSEJLrWrbtZQHNFUUXKc1vSVkAaAdJTFBaaKmuBWUQ7yWP3CGabmKv4rzG4nWrEftNNZC3CK1zPbtS",
  "key28": "5D3BS6KYA5AzRynj9LNh54USyH4KQVc5eZBnwfFBo4PApBpntxLBY9zUgxXXgsnN1hTCFwkEE2gF5xtkK5RKhP1P"
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

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
    "347QrgcX1bLF75sD12jxH651sCY4uRdRCo4NH7oBK9BKeA76PmPJ1Q6zBxQSmXcqcP9Nhne3BUBGW66SVSEcDMcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D72HhKS15jaJQeN1AaxbEHdi3DU5tEnc8J3TUMHXpRnkw3iwee1GL7foWTdxNTm72bZrAfW4n6e7QXV5njGjont",
  "key1": "26fB6owjxQHsLTTcWHBNfaAE8EFMKrFqQ3VkKjLVdGxNGrmsoQYxSevHVf3JfwQSUZv9cFQKicGRz3MrS9Qbi6Ub",
  "key2": "57DtcRGqr6uZ2cjH5ex98hJKPffLjfgdXxnwqPqoqj7dtVwaNHCLkT6TjtauQMfswMcj5eL7TTyLC8rJTGLhHBsg",
  "key3": "CkHN9nRhpnqGuXUYCJaSMwEjNB3fmizcCVVXceF3CMbuhq2zR8apa2HHR24s3Sif2DiTK6Pe77V9gsy4oFKz2wa",
  "key4": "Bqz4QKYe9WrpSuiCcTw4dMriMSPZfyQFFHaZfPRrX9taCTRvmZLdZpSri5EJXgtwDyPw8jikpZfpbSgWaDxm3pd",
  "key5": "sV8aC3CM3i2KXAABmiN7bYaQnWFiSPjTy9LHE51SvwbCufkGqK15tkNAigxzyStedov3gp9cxKFDrBiAuT3GNVS",
  "key6": "HK7TtwVGyympEZ9BAf5b9U8VhGYMTxzixNePwLLg28vbTwCKpZuo7C1y15qEZH1PtquGUpyJpxWH2aoooHReKHH",
  "key7": "5DAxRjpTFYkJDksVNQTHBBgNaWhzTRtVKeR73srfQv5C98maApWGah5ercR4diYR8V5FTVJANeXa3uob5JFGekDS",
  "key8": "2oRSxnXoV3mNw5NeQDZbZPzgAsGk6HZcea53wqkAQFb7AHE9GVQyfzuY1S11eHZBJXy6cXXvC5kAsD7UWv6HZXTo",
  "key9": "ZitJS342akt8aFqxBpxnFDyCQuLk4jpPDQ5cNp4cy3utZs8eJypy4ra2CHFptWh2hpJeC5Mh4yHeRg8wwzsSH9s",
  "key10": "52oFbB6ZmQnwU1f8pevfx7oQcpZfZ8p1t3SwVKaZph9zH7xkrZCNgrGGLVTXNKEgwr3eNtCFqyBUJ29nnygFhLm8",
  "key11": "5t7KznoqWAbtLyRCmTYFWkazfVabfzR3MMyV2fxtVfzE5iucqwc2d225Zgtx9zapDHpKei6wLDkpCSYHTAnVcUVQ",
  "key12": "o7AA1nKwenSsRiGHjJGcJHtLME8ggmQdUgkeHr1ZMjqg4giQxr8ufYERzGNJMXsihWiJf3Vn3gkQgkSTTjV3XFY",
  "key13": "35TRrVGsA55fnYwKiHUdfe99YsVnMsU3TUBLGSxnz2FZd6bF7ZzPezhdhuYGgtaj8hjfvj5fqPWhm3jwCh92notu",
  "key14": "2rbQs7XTGGAyaQSa2aeF1jPme9qyzC6VUHp71p3hNHLkJLvGKQpr4e9FXjeiJpcupaQAi1dAtKgpD8fu2eRoCNYz",
  "key15": "3WcwLsGGqZNyisege87Godb3nFwsz4H2arYFCcTSwfDsWDiTA9WvMLZS85N6aUmgqzZYpyj1hLhmkLDnVc8cDjVj",
  "key16": "5ndhCobk5sRNGfusrqN91ESqU6yAzkCN2bxE38VQ1ESuVe1dnyPfYjj17NFJ22PJSsE7zSEiSEbVQafXz7zox3DS",
  "key17": "5aMvSJKGgzzfCUAB8iSM9htUAxnrTtCW6cehwDe83HkfFWajTz2iQFGU6kAXnmUSDc2qGJEq6UoqJmLXk43mDy2H",
  "key18": "3WhTYtGqRXgrS54cdN2YxJrfN7aC9cZKMF7NTHrRjpPuLH7Tx9CGcQW9rRBq4XCgYotmWc7dDBpV3NwoDp7hefpe",
  "key19": "4Cna629k47wgG9ghqmVGe3BUqLbbF2zfsueYtHbqA1MPoH6fHWCEFa7HNFKtQ5uMRrj7yYMjjkSEcEkb1bc4GUN8",
  "key20": "9cVE1vUeRqXJoQ1aoU4tHBY7c471PWHy9Xngfw49FJ9sPH59WA9GyenK6LqsiWm3iRR5Fw9D6MZ978aLgEcHAW1",
  "key21": "38uY21PMduo5cnKNU4kqevgXSMLEp3WwwVQaAiXKcxNbmCkR54xouz8amLenwFeYiDnSmbzXtow2iaJqgefM6UaA",
  "key22": "4Bwq6NrCLfpPcNyQ2cCQjN9bswHhjzDGZ392gCUcS4XhKWxw7MAtGuWRKJ2KZVdvJdfnyvfXPt1E2F8q9AqB9pHg",
  "key23": "3XwWx7hyJ7jbE5fzCwsMyZuZEM6wM74rfw5rvaiD3mQMrmf2VoRoQzVwSL5Hm8fuhYYDqbsjVjvPqWYXfC9hXqYg",
  "key24": "2pdAdRMWkVjaafUdkgZme6vMUohJ3DHCySDCADXgSFZtP7zQhzJQezx2GD6ZiQ7dBBJa4XwaSBDoyULgSqWFEoux",
  "key25": "5FiBrAM9w2gHDukA7tqhYuvG7FChvbpvnBvsLReeSQL3dcUNk3CkBcsnT6kQYZryfEPDG31SwCEKjk8nrDea1LYr",
  "key26": "oFHe7fFmBZuWFgpddbYRbpoQZ5RSKjNFRNFnYiKDgpFMrAGgukVAJ17KfLcc11W9xDEmtsWX8UqVaQcBJtH2iqQ",
  "key27": "5cDfX5Jp2WmV6vfQjo84pN5aY59rS2dxWphkKYNfErGENNmeUYRGu1wbQomFrEiLjfZBB36pWkvCgV9bZzygRao5",
  "key28": "4s3x8gX6uTpqDK4b1cb8i3G2kikkWd3KpaMR2CabV2BXneiwBYDf1WWpozptKNQHm511Hmd2BajummGQwaKVHMJQ",
  "key29": "5HfoiSxkRTfmRHoTQMkq7ex6BvHbvmEqWBwgJ9Kct46yNfFCiNAYhrgLBZo6E8nYFY8YMn6LwHoscHA85mM8b737",
  "key30": "2jSUvQtnieahkTVM11RfuV1xfR6MiGHYFtTKtNuKJWF6jtwp4YzVYnLYrW3XABxyNyPFwuWGruba9VnpoMYyEf7S",
  "key31": "22wZZbg1nUEknwQc1L8urACVB25Lu9aiqSjxAhWpdMVycu9V4zQnSXnLePY2YS9SSLLEx21vaRzYkezjH4ZenyCJ",
  "key32": "2P5sAkHXawQuYjqRtcYLg3JvaS89xrQeGbbPvJN9jUtYtQShNVKZz8amseYDekqCRgTJ7KJ1iy78QP4e4tyK16Pz",
  "key33": "3mzTq3CKH1eLqSJWvT5U6P1QMRSZLKUuLy1kQhBHHu938oMiXzovrBYSUXfmzL2xJCpPzZBRvnK7dXqiSaV8RRSE",
  "key34": "4wTnSRkHXqbh8wT2ySCB2vYYVB9gyoC9mFkJQE4L6tqREvRcg1vzXYM8Nn2Nj63fQAh1iupVSVGwimEquDLGZRvH",
  "key35": "3aJ5jqAuM2dNEFnsp8Z5A51bB1E11bufe58F7akpmCgfctfUQ5xtcp9zEftZckGpEpPU2cjxQEQ5oXJPC8pa8uxe"
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

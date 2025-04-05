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
    "5QfaJm3joddDr6GK6JJJBtSfazd3MuAXwiXms5hMCJg97rjrTt1rS74ieYFhJDifrcUcLwvLh5p2VQ1eApEfaYEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gTVdb3B53LJawX4EeF7WGe7zGQrYk53pNRAm5izwt9WnqV1ZApYTpb3MR9zUm6uu1P52vMazBgfzmToc4aMgqBm",
  "key1": "2n52zLgswVsMsrceE4tFbeNbTEqQDfBft5YBjRqBBgNPyJqHpan8ghpFTgB3fWxKjKonRYWnv2uvqffUcxRKZoXR",
  "key2": "5wYsA7R3PN1XfoH3rjV5Q5BurQbz2jsTRGex1egT9CfZY8secZF1TPswFSKiFeqjNxZT2yHhfNczeyKgYqAMkfjD",
  "key3": "5phFp2Y5GWRAD85XS7r4Vp6b4iboFQhZujSVU3j7SYeLqeBgureXZHtfBTLHS7dHh4WVcdbnwvEJMFdJzVb8BgPK",
  "key4": "37NtTPUXdG4NWFJkbyKAg8Xmed4v6J5GNdb3hztD5zqZkSTfa5CyQXxTGY6ZdZaGhTJhh19gW9JaoYJhbPRFbYi7",
  "key5": "5PNn4JozNhwf5BQVAU3EssAyr4NGTnawkt2QsC5TiXNR1ie9wUuWPa3wJYez3bvGamew5VvEwJvqd6V1wRuRSehi",
  "key6": "4A97u51Acg9CRU5BfGYoWjpSgqPS7GRJfGQ6uvKmv8AN1mBkjmPBosaVo52cuuCyM6Mm8bBpD1vrH5oZeDQj98o5",
  "key7": "62vykmdPn1n6mBBS9TBH9Y9bnhrV9uuDs3pzYWz7BVWfUSCVihSZKmkpdmoxptnqHespMfyL7PfLgWncQdQoQGL3",
  "key8": "2eBF66R1CWfsk55W1Wj3d9DJKKBB17hhxsHBjhUjw47BBLWyRswX5fqGrwTv4odfLvYGwnhEQmwK4giwzCSB3aFP",
  "key9": "Lnmn6FwZcFpMwt6q4jnKdUuPhiiWUMYjxt46oy9Nq2mHh6ujGi5uoLfBpPWH123KFZngCGriQc4ZWDD1BHQwSTx",
  "key10": "5jCg1HQ5wo9xuosEkELiypH5UeFWFVcAtWEzP7fAuXKkPQRpADGKDdgid6Jg8GrAAxpTQfFjq8Qmu5CP6hCZcNS4",
  "key11": "3CGsrYXbQMnsKLLdsEgMfBzwWK6WW474EwWgxCcUyG3PoYsRSQDDGSbn4fVN1skCD3MUqb8sfa91tmfSbyS7ttPY",
  "key12": "5DjD3dwghy5B49VP7GUB7hkMKEUgpwJ9Czgj36Xpqw9R7puoAaDnJHZaZPQZoFkT5YvRELxYymXp2rQonC2qMJNu",
  "key13": "3xMBZevPjnngVQYULtz3jNw9LTQ8jK5oKo6cpwiBPtb3wsbUYEdKe8dUF46V8HPsJ7eYqgPuN7z4FumEv1pLej4n",
  "key14": "37YkaXPnk5VhsnzxQqfycbV6zj5XcEKHFKN7VDHoWSTZG5TiN5iABvXqaHJAqFQmmL2118pdwTZaPTrNBFBzPHy1",
  "key15": "3GByMpzwaJzuu7gTbi5GwXhRHFp5DZcdXQfwDQrgW7jvLxuJFpaKB6xdbjC9MsFQnadJ3iM3HTrZSke9DxRtYGN8",
  "key16": "2ArwSQRYsJuPm8aKJqzXMQEMv3vH2Rfq5YMW19r1mzQJNgVYNVFKaD2QLJ392AduvGwsqfVSoiiKFdYNnd9TdiTt",
  "key17": "5mhsS3hFztcLRKSScRTuJKMMiFEVkqJFVHjne8FSwghEmVDrc2bwPCbudNxVrFdaNQwqR23ryPrnzfuECgjBChJ6",
  "key18": "3JzPgg17cVnh8DJReKRiJfNqbUfkjhPZx7NcTtaa4Q4Qt3kpdtvTZ8Jivjz1aeSEeemRsRujnCcGg8BWwcg7Jgt1",
  "key19": "CsTETmFj4TLXNtYo265RhEr7Ni7cymvd57nx9i6reyJ5mCjnP6iuaQojLfUMEB1euD5v5qY7bAEdZRXFAhRG1xm",
  "key20": "22YefQbUBkS3RZh3CtLbsztxMsdfBmKaBkYjhBJSuPsyWkpioAPjZke399aFn1hBSGcP51rT7tQMAAcHzYcjMDbk",
  "key21": "CdSwAf3yrR1wo3tBo6fWZZLf4LZTu2YTgp87tLtVAQwEX6kaqPDQQHxs2of8ZwqZS8GKCSHHAqiMFbDXStMqyve",
  "key22": "5WcXxZqjXrjJz3uT9NaFVYQ1y3RyJfhAJjTADxLTkbDCzj6UHxz9iTZiiyXu1Es6rhSqGw9tZ8hawPbnd2AzBKHr",
  "key23": "5vu7JbQR1yMBo5WCrXx6cwUjEzRJedwLjs8HJ9UzRaX6EVRrzjP9NE8z48UezPWEGBR44txySFBDvHXFBCNZHLCj",
  "key24": "Vy4RWwjjJaagL7St7LBBoWc1jwf6LJdN5D29DHNFGC5BMmaR4ixbNiX2ifUHhk6iPyXyLnnLMkR53Nfvs1Dbo6F",
  "key25": "2DJz6TH17Q7cbmosA9rWgkpzVbZjeNokdxi3eZE4b3ec9sV1LQL8uNvhKTnTdmaHboz1UoHoqMiXb4op5eatKd1o",
  "key26": "3UXwSVmvhKiT41ajvuyP2CNqnSFLYjKNaCUBvCH7AeF58q1drg9zqEZMUCG3R9kkSZEsdg9sVpKNWPbZEKnmYs8o",
  "key27": "4PD5SeMb3skTuknVGrjfPCLMmBmxP7Lbrn91ptqpGaSKeb9L5ubPbK79b1Vep9nZjDgEbxXxtRT9gZM4ti4vMXKC",
  "key28": "5G4dXLZNUZeiWXusVTmey3UxYyvMtvpMJuqncdHQXnuppBCUdd6nC5zW7zufVYbQemQJkDvKV3Xrp6Y1ZpPMZiGm",
  "key29": "266vQu5PWX5sEH6SLCSC1wspiud7k1rqcZhT5FzPnUTY8bvPeEjnobmdKB5QKJbLA7NPJd68osgfumT2xev98STM",
  "key30": "oqGpdaxbxqsHBpGbw2poPTkcf6Gw2ZNvFwmS1AefXsYAywWPm9HJ7vrcFyETeTGTHsSqjXR9z2odmapb4Bo78aK",
  "key31": "ntsHx9yHj5Zmp3Ew1qHCFUwc5N6KWjyHYqK2enaA2rZpi5iRh7t1yBhRyV7qE2EidE58eyTmJrtWNKDsg3qk3nQ",
  "key32": "3pHdH9LMw1FSZBPhx4CpgC2SMnFkEMfc3LdpaeHGDdc83CBSFqdUeY4TuMMgQaSdoftxV9imJXArueWeZD9Z3rSD",
  "key33": "4mcHML9Sqi78KGYSwGzsoHxxrF3fu9PCUtCYudivZbAcozPuELmxhkz3ktaEkHcVdbAE8kVixt17uQ6EoP3kEteV",
  "key34": "479RKw4wAAM6CRk5RNRnE5DEjxJp1GVdPnPumcpVUEuyP1w3yFCcwKZyCynBGFjzvmod4TKFsSgJKXZWtjgGMaDw"
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

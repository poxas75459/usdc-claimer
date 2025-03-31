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
    "2pALKysRHE6YTBTf6ijERN1QUbiv75XHVSSBCCTA2ETc9LqfMKGipYYWzewhL3Jt17JDyAy9Q4V2ijsBRiyjpjDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GhwsPieZzzoRNLVLvgDkgAGHdfJMP1QKRDNzPNU2f86dViDjTFeodvx5wZBPc3KU7UZUuXNsMAzgNCZyQ238xKR",
  "key1": "42n2TrFmdfKLCcqekZFuNFsDGazVSc4KfCMWNBgNv9UYX42U2fDCzkDyHGdYF6Db73j99FUcG44AwQTDEs6BhfP2",
  "key2": "3HdNoLxbStQuHE3ftcVz7PkajDCRMjLXt48Rk6u3atseKBNnk69qfB6vdURhqXJwMT9F9W2n95PoghKZL3556BZ",
  "key3": "3fR6pbyimfUixj8n8uTFr2T2bukKZt3RwvpEWvhASJGSxzUf7vGuCbRd499ptaF4dkqKgygqkumo2uDkjPSNh4sg",
  "key4": "4V43H7xTtJCHzeEdV9YyP8fznTBQ6rZ1DAcWywQSoJyNYgDpycTujLzXhnYxkTTzKW1DShJu4MzbMavzYtxTC35F",
  "key5": "2ZE8h6HJv72nsyyT7SKG4L9oWQmxvjAvXpDUau8LLk2QBouyss2A3XWbmP8DfzZeQutmmWVJKaivX9Spb3fzRbKA",
  "key6": "41CNrSknAc6fz9D2qoPUFfBjuXU81n4Bgfo3SygKCRGdnALVNVLoYhp7iBmJj3nM7wqhDdHoDPajabpQZp7TMDXN",
  "key7": "19dMUvHxCCbwx6TgLwqdFdHEZthtrw9dDco6nYFaX52uvLhEReZbNQkwd1GX7UTdG1FhhduUfUfhheqt9SG6zkW",
  "key8": "2K3BdgaK3HEiECvaTuquBvK9fKny5JS7v4mVDj4i8uQV91mVvxwyvePzzxtXPdFPnPmTgEWQ8yFUBCmkxvkM9K3S",
  "key9": "4zSTZZeLbyC7bJZHKVAicesAZTYPmd7fmow1yEmX9FUVB85o9wSU2iojRPcBNmWDwyPcj2xpu9EhhEH7EfAaHoCa",
  "key10": "4YQRSNQAkUQMkTSB9VYg1kyH1myhtEJ8PG2xvR5S3gZuEzxcRGznuukW5oTNs1XiDi1ieVXRkQxq6qiaCkzq3VD2",
  "key11": "27goB51oah49aaVRmKLwVzDMoisCwyX8EEjgamHmjMuzqAD2PnfokGtRFyGsed8XUafFomansCikWMT9rUyxUHEk",
  "key12": "5fJxUuJUo37oDfGLjydxiNzUYCQuFVucbxuJwio7PiX2feRJ85WNd7aJixzZasHvZcqL9DHiR3J9eXLS56oXduuX",
  "key13": "6mhwiprPfLmpoKfipsC6qP65VjfJmkez19thmE7MJKLBqqzYPLyyqAVasVtgvrQp2PEsw4vHftvEGubwvo7eFSG",
  "key14": "qk2T7EnLwegm4ByHGC5YaPyHujnn9pypnVpKFidmZ8C7LpCPt2zSV7ZQDXtRBuE6ns2G3rwdXey6FGvY2kbRtYQ",
  "key15": "2k55fbE4BN6RLmJMCas1jBo9978N4jmAb79yj6nfQ9Yy7KALxQpoCi4WgRHtqAc4ef5MxWDYPM4LYtQfbfKcmM2P",
  "key16": "3vKXgyXYZfZDg7RdaUTtTpYDqst1nvP4sJ4tHzUY845Khz2wWn78jWwfXsqg9sT5gWRNGEZ1ZMrygu4iQdfbq97J",
  "key17": "5aoTzSLvHpYsuz1hE22G2hGXYBGZtLo7gVMEsg3VJiB8xMZgqKZw6zfRRkaEBQNU1VEPv3SprvHzLXcrFn4PJ31L",
  "key18": "3gV161bCeWfeSws9FdtTk58JxPT6rhvQ3ckE6neGvuJX3B78ewKmTjoenMa8EzFabLSk15vPFpPXFfnMx2f73oYV",
  "key19": "9GNMhbguJFK52JPgphQ4zooy86T9TgJ9pyvL4uNM6anojq9FZ4LBt2mPpFvvYWhsJ7z2QBZxZuVWzQNdptcx1Tb",
  "key20": "4iVNQ1dTpGUBHieUmzTtNLsVF1QYP6biLQDZPjSrs5z5zf2L7QRNTKAD6BdU9BdJVxrXa9sAfTaxgKwLfeFL7ia",
  "key21": "3xY2PzknXfrRB3ZMLuXWRv2wBHkRWGAXE5379SRyAWgAjwHbNk1xqGLz5J4C2KcmGULh1USznVsKUCAL5oFHt4vZ",
  "key22": "szLtQ3RJmrUo19bkANMHmNd4V6Wm7HktVawntPbnseYWSJpGSUcbZc6jyUaTk667rekXwgExYrWTY9aGMWFV3wJ",
  "key23": "2ZGPBLg52YMsRug6vtCJASaTKyLAPMaTW6NT7EhuhWhFvdqSKXz1jZT2qdkXr77KD2svuHeZWbjgYSfpvP8ud4rb",
  "key24": "3AcvFBLFJ8iz9MKUBG99JMRitnjY15QT6UfKsGBaAojjBnNvemWtoDqWxa4cPwydjVXzUS93fnyT1ziYbhpXwkkB",
  "key25": "5vo6ULCxRUKM4RQawQox49UfR5Q22RBUocNwWyjDCyZgTTVVdj31nY4NPHbE3bPCjy3TKFkTfgrvT9iKfag5GdDn",
  "key26": "5X9CLjvGLHtXKfXCZMp21w3f3DqXZNu87bFjkgffHgMMKyPB5NjyVt3DsZBvcDfTMdN7T395Bm1Udv2q4Lc7qCpe",
  "key27": "5neWGjZB3mJuBNYwbnayCXujGXbdQRHub1tTr1NuyFivRJzm2wCSJrDxSy19DbrtSDhm8rvtAZ6fcjEEZeG4GXg8",
  "key28": "SKeHXMqdr1s1upHm4dojQeXjQ5FHGWJwgQQpy75qkEAEBtBzpG1WJHUb5S3YCk7GbfTwzW96yjVtXRyap7okjSk",
  "key29": "5b3DWCn81oPuCw7jkLcitVFzCEwkc7LJoowVVhPz61jq92yLzU4SBGc9zWNn3UtPd8AHfUADCo6YsCPKijSwngM8",
  "key30": "4ntoakM5ov66ihq5nmkwHfjNy2A7P5YCPRPvwG2aYvMg11pYDyJCH8DmdQDGyNknYS6YFUWf3bWG1az8BwoNqiUm",
  "key31": "3syLDxVGsz6GRvM3h3dsziH9fkb4bf8L4MmuFnpvaMXZ4zxYCq9yXnCL3fWqSUaCipxG64MH2MwAsWUYzDnpT2eB",
  "key32": "2WkfFEQjNgb5BSqpTN9vXoiUf75C8WzAqurtYSES7tE7QmRNnk1uheHNABACsnFMh2G9LrQ8mycRo82EH5oW39Qo",
  "key33": "3BKCCKeDtMAtDKxrCnktCrsQ9iC15sciJgxwkVPCECuq4vz5WckuCJJQk5w81MFGgivqBeriXdXuHztWq4prkYUY",
  "key34": "61ezYD8VoMkQYy6WQ4AwtpgYogN7JzXgsa2ZYhQkGSGQ8FkEmE53S8bZbmQ4q9j5NrGRexiwi4gHuVAvcWVrGNu9"
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

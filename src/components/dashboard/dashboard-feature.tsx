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
    "CAdNuWroXMFHyKYa6VrnRRm5jbV5HrkHu1BaVmWC6e23SJFdubqcNNABn1sNJkvgKzQ1abyDxqpqqF6RxGvLkdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UFGAdXQAob2hZFXNCx7Fo9CyUwQjnhA2QE2mxCDBcqgXUMaLuECChpUv3fRaoLYWZEHZi6XDoPiBLkXsi49trCH",
  "key1": "3n6uB8u7GfmzDiSiJWVzpMrNvF5yQXXgjxZwC8yRPKmdBD22iwdbFbBVPtZmUBW8848azeSXpLf2h9tSMzUQqPU9",
  "key2": "3sfZfXbGKx93tTGCCX3U9K47wk3gNgbLPBCqFSQcCaXk8zYQig1s2cgC7romsgRPZDAsJxysEvBZ7xFwuhtiY44W",
  "key3": "3s9nt2kPZsDP2DsDeWopmW6b5Se9fJYQW9Z1ZEGGMt8HtYx2GA4qHNKWkt5TJQE1yHs3byz6FJ6y8bSVMtN2tzBp",
  "key4": "3hHHzE3bK9ZNPFNxsa27ioxieMuVXYtDHUEV9hKAQy4qjgSocUnr6iLggwoxnoTr1PZcvDLpzBUEZ6EW4xD4mmKt",
  "key5": "4XfW56WrF3pLdVN6mLvDTaTvApEzV9BQfFgDELYQ9mw5J4JkgukugKzth8drjDv5yrfty71bjsQrS613C1BNDMW5",
  "key6": "2StGQJXXSFgeX3g8ZHX1gmecuqTPL7C4ZnZhCoSfGoK5ooiwKBfSsbeHGgzSV7MboC6nkGfRWaTq7feP5njYhFhV",
  "key7": "3Vcr6snqhopRZvSxNeWm5oSUm47JYtNRNzqjZxRjMhjWQJgKYDWEXa7ia5kbBsu3ELDt2K9bxp7EVQwVY6G6y2QL",
  "key8": "6FhDXyDZRLuGi1Qvx9G8o1KdBzyydLay6eRFPavY5qxuQoz6BWm2oELcWpqLmUujtFNTQEx3qCidX7kF4Egh55B",
  "key9": "5US5WYkiaS65posSi2AvqUuPCaUD7VsAxx4Prg4rMx6yzW3j5YXyYystcQimoCL2Q725zisSVLZReGdvjAA6ZMjk",
  "key10": "4E1aoAk4vGWvfoiWePzcgVtekH5F7X9LdTa9FwhdwGRk72oV4BUtdvsxq1iP7rxVWeta8KHsAivNFauzy3wYmh1p",
  "key11": "2yJU3ZN6YFuqq7gGCUnvMQnX14cjnSJvgzJAHHDm2dNyTYHUzk1MGDGu2cZxr5374bpH7Rn2BFz8rem8bpQHaNPB",
  "key12": "5GGp6g27HJBBJVRBjy5ydbk9ea3nwh9oPqP4Q4MjdkNU4UP8SWBKiuedBCyMyNV6bozPxgDN867KvM8PViRh3gvk",
  "key13": "3Rj3qFUQf6YV2et3Nysp9CtB4ZB8vJYLhfs5NHtCeEAHWDgdqKV85pRbF37thCHFQQyRQdD4h65B2GAsjJjwhaug",
  "key14": "4TSqs5ZuE73XUqodCE98oH4usovdpQA2TWTqBGy2nvfBG7AFjqEVkGno7Zrm9aJriikbZ3Xnwi38vsXCTu4ujki1",
  "key15": "4H1EY8CF4dPajjjBV2CyzJnEqabpaBHCQREwU5UgZUcPKtycz6VksaE8Sx4gR3ebbFpKHo5Ze89m6MSGdwmrd6Ac",
  "key16": "3ezc7RVdnwwG7ErEv2KGWec2rtuVp6nePZsZGVsf3SCwVhXdaaWsRXCsje3qEwfFWPR1GSS72Zjvgq11yk4SzSKv",
  "key17": "5BTFvaEohnnQK4CMXWaWakiPWUQAc6X22J4JeiSqaewWozyZyhDL7Ma7D1Y9UoSpMeXDbRJ2NQm1P1Hf9UCFNKLh",
  "key18": "NzSdm7B1sKVouGqrzQdCUqNDQc7EWiPkdQnVeF7eywvu4LJFedV4dNYiv31FoaVAeVwR3hsCFrHuc6abMf2ZWo9",
  "key19": "3jihmu1aq4Edu4Kx9DL1ERgi8XuKhgMxmCM5ffEUJrEGVssduqouY2KWWbQ7Em1su6XZbvAQ5zqZk6UnRfsh4t7W",
  "key20": "5Ghz9VEqXKUJxg4WMn8AzPiXtEeEwvMju5aDoRHmMxiCGitpeXM76yedvy3qxZBkFavXdBphbQyG6ZL6QNMa1J2p",
  "key21": "5GdY5dD2Y8CN7ZF5XdSSAwR6WK7qYtQ7jnBefWUcYNb8QaHdfTPHJcNVBExTd86KW8YkQMHKGevCW3Wo1yuPt7Lz",
  "key22": "eoK3RTgFM7zzE62iH6CvvzRfzKDnEwrfze2WscufRphpvxBG6ZTZHEdPLj36fnpjGC1Pyyg7QVidhirfPA3n7XL",
  "key23": "Jy3vcRBamiVjujc6hTWP7Sk94drJaMLiVJNPSa5gc47HbjBuCeFn5Sh54SRHp8LkBbia6tY5e237jkkRB3bErXK",
  "key24": "5329SSrpZyqMCsoztg8Sg5qg9B7XTm4ANXr65iD5MgnRAe5neJjqtsMMYwDXqVP5PJfpyiL38e9piniGnzAosR19",
  "key25": "4Kzdx7CVnq7K1GTBBs3aMLjdXnE8yshQkkCb45jJ1MTkDvPdhZQvDEW23My344fj9eoxiZUKki9UMkmP4a2j9Z6o",
  "key26": "3pZqLh97cxjKFHrjznhs2L3FUf8caSEe5NNvi4gLZP8PioDusp6X749DoELKvJ4UqYJR2iC6pgzg3AEuDAXMsCyd",
  "key27": "2LrRRXoAM75rKgpcVGgYmFz7qijsXswDs2CDs7hUap4PZSZ5kWVH7iqGJ2W1H19KSNw6fC9iXnvZr7VrjdUvqeUw",
  "key28": "2i7gCNHQQP52BodHTeFFtMdci7qUpKzB59asxYALWEoFHc6TPsuMi3xebEDcPo8weams8j1a9NecqtXmGLgNz3eS",
  "key29": "45ZpGmizkVKMdtT5o6Pk5e6rdmsHHEnQyZiXyF1eLRpve5GFxXwdnBjFkm34DHwfKTM5sdEetggV8NE2KEnBm36p",
  "key30": "5bmoRDWDGMAzR8qySEWJY4YZHuStgTHtmCR1NdNHvq8oR2B93DNJmKU1gKFcFQXWXqHBUsPBbKhAepZbUqhnEFcd",
  "key31": "5ZqjSvjAktgqmu9BnyicteDf1kLUa2CPQv5wNZ3e4TES78Yte1G3QFJQHGWLscHKggdfDNRfE9JPcK4yMZigPT2m",
  "key32": "2nk7Lmxx9BgtwmhikRjc4QoptN4TMLJ6c9zHRjH2VN1Nxfwjo54uLXAzSyHxkccgDwGXLPz82XfJHnaYtxuNH3w3",
  "key33": "4zd1avMaouKR2zhsYmBPSNYQNuDMESxWPtPX4BWjEWYytcnvZVamcTK2HFVuirgkN6k1B1HKCN2HVGrTjaEfYfwd",
  "key34": "4CRkQXsuqgd9i55MzcnMi64mjx6mP6arBEtivgGjprohhTEsJdmDVPS3ELVQfg2Tuv5wbi6gRHr6jvxnRTo2d8ZD",
  "key35": "mzTWZqm5jCBfRPEBcdak6fUsbapvVrfZ75vWAFcd34dtK6riR8inyHx7ajtQswHEq9Y3pQeB6FV46iu1eLnLrc3",
  "key36": "5U5Xne8QNpebvZQHERxZLG6pHbb63q6vQKXiqoYbNkfYVtnpvPHP3R8oje99hYRnp1pzGLwBeU8TKrkAFj4aXZ9S",
  "key37": "5KjaXx8s2Pk5fE9aU5KG2PrfF8NmgWwfRPtB9uKEgDoWUQoAaedfzRX7qbWtzG8anSGhg8xaNF5WTuKQoK9bwQbZ"
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

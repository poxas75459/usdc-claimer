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
    "4TT3e7aCqAXfwgEXp5QPE2h2zZL1uGz21ZhbkYVpSb2FBRPvkEKEVkus7npvy1hPqBqPfyx6urwbWVx2c84BLbYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BL9Mvdexw77qTwWFQ1B7ZcWRQ1kPtmG3RMx4FNvUvZPguyJMcpziYHXWRqHKC7dXwrfGWnQtTcZ59y3w4wvqxMv",
  "key1": "rJRFmyC1JLuSYhs8aTwepNSSgU4JSr6KABfm3K1MH378zBHBEcFtv4wfMSWDnsC7wAiJH11hJNCGWaAhEEQiJAh",
  "key2": "kX2TWpiwcVEmwdfRcVNb9qHPyu32gNnHiwdbGSnh2ghQoTGA5f1XT4rvspaHSt6AAhvf1dZrApQXsqoKWwd93pa",
  "key3": "23aTXPeDMTZ8Rmm1evB3u9mqu7ozy6VPdUN5Kv9Y4iNcfY3xBr7wAwLz5xbNWs6ehr5Z74dipzRcnSyncrVRAQUR",
  "key4": "4uerxUVSYdZpwUVJEd5JpgyXd4DXxHXjSApVWwnb6DoDaAQvAUuQDkfnei2DUp1aJFrxS5zUweCEC56K1pD6pGWS",
  "key5": "myPaPN9zuLqdMscTyBQSVyYAXfEKjPhZumFX4nnWyEBLNZFwAHMHLRc1nGkjgwXoY4K9CkYnvV3u8zSgUvWwoXK",
  "key6": "2WdXR8D9Yg7obV6bF2UBsA1r91qrdm1ehdRw7sgPg5SRDPXc5Qq31Mpc7tfkkwxPKD7ZqzfFcwRzqFm3iJJjiSxm",
  "key7": "3zEtSYTtuPVeL7Bzk9LiUvYr43muA7UPDXuEVQzSoi3n3AT9tEwUjG5ZHG8XUARTzJAqdupyJqistkdD93GrmaQG",
  "key8": "2BMcAXcnv9cL6KfFGs9AURMo3xtywfJtiG1mLV8mADC3q89DtjawQPH1mU4yMYuq79FncUoaMbdFyDnpt9Br99ef",
  "key9": "58rGt7t469xXZL4z2MV5MYZCMURnBh3nwdgYMNma5Uxx49SuCoCm9rjrYJRHMk8FiX73so4g3gJEiYuys8jVa368",
  "key10": "2Nzd5uHa6VMyo9y6Mt4bxcFs1mULjYFu9n7E3mMHBddumojNNdDu6nYkEmuGuFMUdTRqjbtoDsW5hvJehenX2zDN",
  "key11": "2Muqn3oDpBPgKC6KLpUjKGG88P2B6Q4RKLexEa4qbbijjSnuPNeqUFBWRNGuDRtsGG55GHrm7GbT2zcHmJX3Mqu9",
  "key12": "kQhR4MW5Dpcg74MaRQZtTfYNLZMgKZL7mLhyMivALNECTLgny3VbJxWVmP8WKhZH5EUuYxDWVnJekRqVXXvBfUN",
  "key13": "23Xa2xbq8X8mNgKxoV7uH4L6AAdyyacq86MZXhTRkM21soMGDrUwEXCSb7hgFXb9Uh6jXJ7FhSfBFKLfnPx53sGX",
  "key14": "woTK7x9Kg8mwxTVr1jMJCwt4YQGRNyrQDv66L8yQnipXZ8opTSeDRCDvB3Qn9aXqvs7Aa5eZdmTgEerqaZBbM5S",
  "key15": "5NBCpgbD3FLRb89hjTBBFahesS2uE9w9nB8Gy9k7RiwGuVHPTvnSJvtKdQwXidFZqGjdeWXX19R5vxnPYez54BwX",
  "key16": "4KVHnC42RCQ7d8iA8mPjeUcFYT9rfoQL7HxRS3NtUZhCp4JdBKx6Tj8HN58e2eQ1wVEgf8qQVJKKd4FQ8UJRKGTN",
  "key17": "5y1z9p7nSZijFjqL1sToM6RWjA6A8eGELxjTpga8CsUsTHhPhibqhUa9pu3SoZHbRCTBYGr5r8sL127HkuSVXNV8",
  "key18": "545o47vgqGEmS6x7EtSeSbmRrD5VnDmwumbJxDdsASHHuBFsJUUVB9NcKz7uCqCT8XRFHSFuKgKFt9We7DTB7Uwd",
  "key19": "4Gm7sHFkYuAqxTtCPPLMAJTicWTQwMDmHnqYsfngQo1bJJu1K5jQTshjRaLzjnTPs1E5au9dbTCmxJcEDu6VHT67",
  "key20": "62DNpK8QA5mNBkUi6wzUWNF16tvQzpes8gkpZQeJy7rWxAtFzrJa6STprDDN6jqEfW5HZWcrbFLQESf9qdyUKkXr",
  "key21": "5m6mCbXSKnvMHdW6EtFEu32w3oWZbe5FAnp373c2PyiH1iTiKFFNYzziN294uGekDEtGW5Mi8r9zqdks6KWrfjqS",
  "key22": "2aKEt3v5bN7A72831rw1QjtEkE2XM4Ukp7Hswt8XgLLuAAaRtAcAVgLTCrdu8mVzXiR3qtyYRob1Ywy1YLedfvnp",
  "key23": "61iQftHStrPh4JKLJ1zrZneaEo9a97SZQ6Sc8MHPbmGFRe43cerdE32H6s88j9uUYupGHQ4D2tG7bANYE1FmQ68e",
  "key24": "3W4RcmAza18isfwrQydCaqHzseJCCPR5nJoXQqjWR4UaqJN4k3HxttAJ92GDEaTiB3u4EDxdgLaEGMUoaQboCcQj",
  "key25": "5xNt8ALSjq9v6Ax6facRkXdQAGFM3SiddqSR1Kj5G3g2PBFnTdzM3MrueBeow3qwW9b29kSMtvva1corF6yHAftL",
  "key26": "3hHyyjpXQXqUPhaQVtrqfAq2fEy5Lys7sXuWGSFBgN2ojsoCBdkRNCRJDQP2VskuHvwMgbWt8ynTmsdCMRZmyF3o",
  "key27": "3NcgB9G8Wzvxez49yXBbQov4CrZfR3XtHaqz9RQ5sFjmie2c22RoDnU9m6kfNsVzG3CCmdDgPJT8PX7WDiMNzVd2",
  "key28": "tMZHQYSctLWqxBKfci9b5K1AMpwgVo4TRe1BubKQPBCxFMGgpx5JLaahwvnaTgrxWAbm63E21G5m3NpF1CZ36ts",
  "key29": "665z3DX5koWV6Q3KVEyXESLp9RfkGTRVhHFEwLEGvLe6f2U6NKkqCxaTDV5dNsge4SiZfg13Z1LEaA7hLLvbjjyT",
  "key30": "2SVGcg1rnGLqTdzGn9J7kM5KjjPziDVeTkHBiApKp695od5KyFquoQ6ENvoo1fis93rYCsEEPqZj2XwJQ5hgXwup",
  "key31": "4XpE7d17nMno9KnJv5u31abWB8zhVgoqai72975kLuJJp1edWzLzxR4cwGNoVsafgMgZeufihVXdXnFyMb6VXUZP",
  "key32": "4T2CFfpLFJBYbMufpm5iBKEUorEUYTQGerPt8YALi8dm5KAPFuG2rhqE8CWysqBRLLa65YC9v2bmcYKraeTZBhWj",
  "key33": "2FACR9kxVVRxpwZc7hHkdmFBauhb6WguMD9e129AmAe5TqYCwB1w4L9odjttKMYkDsFcWFNvmzd1Mo7guYPmzB9h",
  "key34": "2jg9fqspcULXLbuVSDz11c7Wb5DsK1zm17EEzX5MmiNNArDwTExvc7iiRDD9o3uNCXks4z39uS1ar4DkkTpqMJos"
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

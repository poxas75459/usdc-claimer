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
    "2yUQ7ibaazu7ca9o9QZCLxR9AKpEHQLSh2KQ24UyVu5WjUtEojqT2WJDzSchtmNoJKcxjRAnD3stnTxqe1eg91nV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n12w3pjsfWgysQnUAxwpRjYwLi3URouuMoUFVL8VA6QHUKxDb21JDi7XKKAQUKTmau49y4nSL1hK4wdgyoXab3b",
  "key1": "4C1jeBYhCEgxqVpCEMBVtNs1T2CdF2qtHqeEr1FALSJrbJ2zjyvMypipGYzYfDtukYKLHNPtt9neexjPvktww4hv",
  "key2": "3ALvfdzeoxHxirrNvFAhy6V1su3JiTgJD5d9LN16RDnVtMq9s2B1aub9oRFbUn1s96uQeiE7pDcVPSVrQGjF4iUM",
  "key3": "43noBznkuWSBEPmd5nwHi23od496EYhbLYt31B4BgY4DMQeVGfE4nay9Vm52vjo3pyHfDBnedaVggzthV5zJLyZs",
  "key4": "63ttHYBvgoKEJ1igRhxd5nJaLDQ9gKdmRS62dXuoRBuMKNhyirGNWT5nrgAKBXEVH6vWPNowyr5MZsSp97UB3nK2",
  "key5": "2cFaRt1j9DurQLwAEywkGfYpHQB2Duf3x8XkhVtcbyK9DhYZhbHF7MAyeX1jxf6H9MwQjAY5rENT7MuLBBZrx7iT",
  "key6": "5RhHF2ZWQfkw3MVRPiT7wdvTYwWVsXt418HjSJFvFCyBBprx2HiWbV5nihopdHduX8dWS7LQPx47DBVstCgYVw5n",
  "key7": "7V3XUgyaos1WeZzguUeJfKvsQ67uDDw5CXqmqkAuY24VpaPvr2WXrgx9cLbkz8ruYNqbyjT6sBFRjbLw2Jia1mi",
  "key8": "2j6wybuvN9sB7vFkzsntMSsr7Wedsa7ku9vgX3UbMnULgjDyitvKH3d6yhQ7Rx4GTPPPQXnxP8aJJeoj4SoircUA",
  "key9": "5b8DtREkybUhszB6FCnYAuLfDRodbetd2rpiTwHmsABJPZZwef5dtU75oVgPFRgPN2dyMrZz3UmvJ5W1AeJnnGSY",
  "key10": "56QuWHSeqkjzFd2gw4zEj7WL2T3LWKdGSRm4SUFF4DLKSqxpLTDDveZDo23Kv62E1HZvmwwdvHJhnYabuCiTyh1A",
  "key11": "4ro3bhtGFRYABPThdyZcbsejsxihCF7tAYAPWBZLwEyUfHHPqXZVSkdJMExqhzsq9GfssWhmLEtCoU5GtMB2hpm7",
  "key12": "4orUyRzE5btixkTy6W2X2wPNSBQkWn2VmzCbKvH6Fsz9uwV9SVN6AZiZbijeou9m67AEUxKGsPjArf9uhFAh8fNC",
  "key13": "3zboazV4gLF1TKzfgLnLXNMjXEgi8pQHUg8VLuy9d8oRaq4rwbTwrhfg4NsED4Du1CiHUtkkMHNXRazWuco63efF",
  "key14": "ZuqRz881U9EWNWaC8KtQwB8iBXtFK3JQoftLFYGghy6wPQkgafPBcVfRrVhJdu5K64PY4Tci46x2mZQ6ym92yPy",
  "key15": "67T2WrhB72V826pN3Q3iejHFcavmjjo4HPakqF1Kr3DdTgSyr5TyHFwHEnysk3KLuSVpiKRh6qvTJvfRbTpod1KG",
  "key16": "TE8YhhQfGQGASPCrUK6j9wG7wRiALjzcYYEJihWNHPEFJEcEyQMbRqmWJSSfFGzFqr4pE9cSe1KHpbyQGLzpjpJ",
  "key17": "C7o8GFzzomzWxD6qMSf3DwdQ7BW2LCQDbyU2unNyCqfSAxfm6GuGkHo7C8CTxR8mvfhFSQX9gZC4wibeHkradA5",
  "key18": "2iaUEhMNtzcLHKVqemHwvfwnfud5twVtVpyRQwQE2J9L6zrafVabRW8fV4Sjzqw58YuAPUW4FLWQyKjCwdX2kBhY",
  "key19": "2HtCyS7fbx97QEhPkTjuwkifNYHjXXpcnGUFK5Knv8TSj3zaKtKuKHpKVhC3YU9zN2Z78jz4amskF5ooutqzo9vN",
  "key20": "4y78C6fBGpfPwyJemgeRWRxKBZxUd8a7w76SiJ3YkXiaRDxzs17MApMRsgpHiD8JVPx5rKUEeiH4V4UzLeHFsfZ4",
  "key21": "5CQiaGFfeKQ4zd3LqNyGbHpHZJHNqYyLK2HhmC9uLsRi48L9mGKRTqr2sbxLpXXxSzCfqeFFHZVVEgiGDi1D5sPD",
  "key22": "47ZFNKDFmzr9DM6n9eQZoXdE5tEYqcBqmd1tb22uRN7QruoF8tPpCqVQbrUHbGN9SAvr3B9uVfXn6caWvM6uHihb",
  "key23": "22Wums8bGAqyaoVFdxK476mp8MjXo2B7fXAsa5FAk7BwuqCZrdim7t5tfde1BncRTRLFWgi9MaYYaWKqUY9ngJH5",
  "key24": "3LqFKDCk267u2VrfBNUjZV2cdKYvriXHAfRPvF8UukRwo5TFNygtj8bsjsWSHwBydCkizbKxvF59e7bgXwuKdjev",
  "key25": "opR8t1rrcJpVjBJp7Tm7bbvMF8rbVYoPFZnsS4VuU9oT29g5WgiH2Pb7LFbvsAsEcMwZ7jY5ZpYtQA3ca1QPfq6",
  "key26": "21YZrZZhY7NfuG8gnwz6gXDH22JUK1G5FCTVYgkiBamVXH7SeUoKxB4M7frvAgxHFWr6P1zJbjpP2PgoqFuY26y2",
  "key27": "417X9uQ2S9UBLFfQ3rCnnJPiueVf3e7cQW1gYaHdsx8U4nx5cH3TCyig1VxsravuDGhV5FMWY7h35HBgwE49d8Vw",
  "key28": "2jXA1Qtp7XGaDwBWRqeBTZx71ift75TaS3dadtpW27Q1JAzqyqGGAZmExnsiY9UraciyAHeYFYFagiTfKwqhbGpR",
  "key29": "37NYFFEFTUPAyyRregkaF4njkey53VrQx2cpUxv2BpEgw8vYbjtXC1XtXkuMmePT7SesS3qPgP9M7tg64nEZ8dVU",
  "key30": "2on4wa5Wn3h8xofjKotJViHPnv2sdjcgYUtb8EGjwpKfQxsCQvsZyBen1EfZ1wznW7GgZ9Yp1NYskUUXwCUcNMt4",
  "key31": "oN2oTijrXyATnP4ie2bH8tyvH5FtZjeWzHsuQNWW53aMXSWsdKGujrxXYmh12sCG2Ce9Hy6iHLVKtFSUUjtqt5j",
  "key32": "32p14yjSmEg4mNb3e3ifXEZwx6V5utd2Qm6aUyh6gLJjirtbpFUSHyaLfGyPEZqkMoevG26taTHE61J3RowSRuHF",
  "key33": "3UjnHryGrSRmamnfRaKWwqEHHa7f7dW8Mz2rdtFJ3Ubt192yZzp19xLs6qXovxuHESU7pUZ3Y7ioJtns2N7X2WJU",
  "key34": "L4gfKyzab6oRGnT5UhxvcFaWcHArAjLEQbi6WPY9Hspf71KiEuhBYoeTaNXausH59Yj7gZZUNCpHj1Y7KMrUU5c",
  "key35": "bgvm43KBcWTQJMjyMDmxebhBmL5UXp18tDGR1GyNvVJKV9bn3csAw4Rx5ZHf5nMvqq5D8SUdKnxTVqZ2BLr3AjG"
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

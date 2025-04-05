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
    "mtFfKQ7Dvohb2MevbvUu2YPXNwoE92pLcrJhELbC3o83QDqxn59kcxMCDDEdGpchAb7MTofW7mf5qHdfDyQvBzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c1NP3K9F3BkYqU1fmd3EdvSi8AoDwoMpkRSHnuBiCGRfyRS2Kcbsncz41wv7XtvcR7v79MEz9H49AaPjp8CfmyQ",
  "key1": "yCdFvo458Gx92t4haCLdET1CqybU8ReXwuYnT2pJnywg3VFhxHMcmL8E5WcwwhXLKuB5qu8Xni9JLE3VzmdJg2P",
  "key2": "RpNucoNMHJU4BnpfUAdzfTEYSE4iwgosmjne5A5zz8hxVDjnkaqVLvv7xsv8ivBVSnVAAtEAeWEzPTn7AST3JXH",
  "key3": "ZJNLvGqBtprB3jFgXqKT5hN2XwY2PVHgnQKfxnDtegABTiNomu1AUz6cvSQdEdctMeUXBJAMtXVtA7q1AVCQtJ4",
  "key4": "x4YyaEN197Ad6GTVd3mFg3p4FoQm4sa6NshgktEASGaDrrwfs6hHpwux5bLcn2xw3qkfvoFhTvLuBxkTzMRcPf8",
  "key5": "2tMvKUY1HXzC9YuYdzrUTW6ijXXGyvufHYDC34rXH2xqPrc19ZgcCc7PiHqyuqiq3JVba5mTKMxbUMmo8eBPLtgS",
  "key6": "4rd3aYEGyd2VtGuH7DCjVV865bHUNvskyY9wAn1vvfhjJgDBLwKCVZAAikmLw1kyKKj8aRNGB5HF3ZpxES52QAWF",
  "key7": "U8M962R2TwJTBzhvNU3kw1M5C3YctUCbmfqTQy2GjVEofv8Uib1B4d391ps47fUkhmF3VxVkMAuQQiAhw1L659o",
  "key8": "5YtoHJY75C719wAXQDiYvYMuq3vg9Wg3rrMubkuQRcW2G2Kx44XicaSag4L3pJToKGEKEJQvXv6wKVx6CPV56EY6",
  "key9": "2g9QsWK5QhX4HRFr9mpq2w1sTmsuEXyPLJGdCr7NMyEoPG9sy6cdPJGj4fznXgfRKaSWRRUEHPFLosV15uqFPms5",
  "key10": "3BFJXHjmNwkMRHFAdDz68MXDeawVDUFBQLufY5gsLX5RG6yvdy1dqFRs5wxFx8NanxstN2kH67SuAjfi3iqj7U1M",
  "key11": "4RLNp4gHK5LxjcyxnbzTBMYPSx9mfN4ktB3HZjM2E5ubVKuA4WWBTqDdaykQPxaq1sxcQrSSJHLtSyMuwi5CQBY7",
  "key12": "2fskb4ziRzWGdLL3URtBYSXtFahWKHDA4Jc8n6RnkHmEEqrH3nqZHnLph5ZfkCfb9UDq4biTSQy7ywM97MiHjmdz",
  "key13": "2dNyE3wRKFX5ZnBi3s4Gxeqotyc5J5r21TZ7nJYjwAwnfNrQas4AeUYPjsu3kNaX9GZsMFCq69Au2goCw72mUmqJ",
  "key14": "5FQYo85fzVPzcQuPvwNMezkRbmd5hyec3RUHZvJX8jLnL5BmQj8VMJqtNpUzNpV2MAF4qJFmAMzcY9vkeT5n9zmY",
  "key15": "3jq6dHWon2wLA3hBJFPYY3CdHmE16t6sc9WcrDeFtbNyheekLKysnTYKLmjeYZJzSQ32fD9pCtFcPCPog9sTDL6j",
  "key16": "2FEVV73TdAHXbZsjE6p8eVvpU8ZYiVpsP2CyRtiw8eK7E4MamdsaY75RZH4hVWVEcMBZsWaKZSKWARcCYLhX7hfk",
  "key17": "mBDwuCQhocP3Ke6QkfKvBSYZWfE7cNW3cKzb1D6ihFKo6PamKLxVZgtJHvMmvzKtffDDqwKUUuoKzKT7oz4WY7b",
  "key18": "5iz1ASG85BXmadxKCHrVfEQuNs5Po1J82T8MHRh4qxbbCbwbDNgAqrDRc4keNGcMtwufPFr1UkaMq3J799dcy5tS",
  "key19": "YWxgtzz28jycrYBbWZNWuB3JUQJGrnaV4ktXWEL4XwK9zngwXWY6fK7kE8SUeM4RmWQHrWyjQfHadW42u3pUTJi",
  "key20": "3A7YWuYpxq76BjkXjVNLiLvnvSkwXUfrGW6xJMQ2XzEbAb8BpswxHk1mkZZzmK4wAEiGNTFFPeYGVsnnrC8H4ipw",
  "key21": "bGhfD1KL4NcZNv1KF8zPfkBvU1vHbfZn28S1ahkw2UqUtLiY7YVcMpLUNvNE1jbWNk42kjPsaFnWUxBVNonW9Lx",
  "key22": "wdaZo2jCAJ82xiVCsss5cJx5m4h9RpSavdo2VBqCH7LE6hj9mVSeHKvdzWpd3Bvro5FVpz8Lr93eXnjgQ5fwCVn",
  "key23": "54nxAZvNpnn1zxSWHTSDRk1QjndhgXKQy4U6xzDwuMbb55QSPz7Hzuh9SKcgCzkeJrdDoMUSZrMg5R58agMa9TCF",
  "key24": "a2hGY2s5tedzoSBGSBSnoUrrAYPGByTyPxgoq2GeavgZrvzp4DCST3rGScGuoEDJeReZ6JMKbnyTKPHipkYUvDy",
  "key25": "t3jg84NBnKVAJbZvKu69mrDNb8RtPwM9PswikNjA8ZHnnKeyjynrtv4ckgvnTNQK2KV5uB7Jn6zMcErni9wkZDq",
  "key26": "bbqqVKR6jcxiqa457MGJWHFyCy9xZCxxqRoftD3zsiUrRBjEjZf5BA8pLcY5rfF3gYeTP2jPAecdGF3tKL4dM7k",
  "key27": "278VsGtdugEPNb7b8Qy5dyevjJSefv8w2kJKvcShrUVnH6ixaxXGtVtAxkkrkEteezJ61LCkyYTRnfn3X6ztzEQQ",
  "key28": "RcYUF9h3RvgRVoQ2thuSZwQmUjzFmfm1zfsC2TM2wQBmKZ13nvMoMNHitCxo2NPdmP2FaYujcKSu4fAHof6WGof"
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

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
    "3vH4u86maXUsmRJ8GvJmDo1kmc2T8LTweaasfLXXLX39x991eFgHToTR5jQzo5ZABQhWCTF6eFg3nB3Cusr2ZBcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "372h8dPyEfbHuADQB5JbvgxHamPHA69nZ4cZe6m7w4YuYKVbS7dizP4QQ86eFqFWG8txWRNXMxk7XVRVWDeUNLem",
  "key1": "4Kc39AnJKZqsD3S4vH6mgpqQXSZ1CNuPMW4LVRtJ3nKSsWHb4BMujAkf1WVe3Vnd1X4vA3M23XTdipWSfjcgfZEv",
  "key2": "3UZk1hgpmxXPZarkJqqKR347iJ75q8NYWjZEYvWcLToD3scxPj2QwXhSSK9z7GAiipSFM4W73YXx7Vtoxp2Gc1BM",
  "key3": "4JMFoTDxguhAHAZkqhPfjTCuvPk9eDhFXgySLFvVk5HrQcPoE4MWdnZGArHEbk7E4tH9PJRSdYN8cRwuS7w2KLUU",
  "key4": "5yUG39ZkyDh5PxJwXnur2GuRjCri18VXoACcmZhbZLTTZ3D5cPK5TH5Q2i1Lsjk63ufQ7SWx1SN8LiNe9iDrTnx4",
  "key5": "2c9rhSChaaZmeZCpCqVsvGYbzFvZKyxMQPPYK7G8q6ffvK6VrZgsoACU447BhK98Nd9HToexXuKEF3fRUGZ5bHiR",
  "key6": "nxzn344zVoKcJWAAkfgeiFMuXSA4XpdLtqxYt2Xpf5DeFM51NzSvXMYYGM57sGBbP716yxkAjafk4di7PFNkT1u",
  "key7": "2UuyFtCGAENSHUKzwpPz1rAThe1gCxFMXStrrxrMSGjEKv2fuSW1sCibJY1szziMdGa1QpAqz71N44HxFKrZ1Ky7",
  "key8": "2shqWbjmB5HnKfd7DiqZK4Gr6gAbV3nvbdRVz4taTexZedJNZeZ86457DuZJ8debFwNEhLT5BQGo1Wv9fFK7X91T",
  "key9": "4Lsj6M26HXFXM5y1XSt53XVzrR6qKyLYqFi3XdxfzLpAnmfUrYedBUso9Gg4KiQCdUbBaBZLF5qQYJdyK6YvMXtP",
  "key10": "2G34MY3L7LzebygvUV2QMeSpAR5mXpP7DcFYi789RBKcm8b5i6ussLwqdaFK4o4cBbRZ99b1YqLfm9iafW8KSmF4",
  "key11": "377HWCgQhMQZGVPbaBkdhTjVgrBS2zE9j9DqbmkEjMHoL5J6QfNV8xz1SQkRFkM1VWhxJs6hj5v93HtijX3ZDeAZ",
  "key12": "3K1coqi7jMfZBUN45pP89tkbTmMFUUNyVpmi45n6c9TdiGTk6o86t7WquyM6WAMbJJdRpm7bAhamhn5L6nFtCF6R",
  "key13": "3v3vFHGh9CwaVRXKanca2aouXapUKw6oyrvY5FHGZ4PNcebg7LVsyMex3VpKpK4KyNJ9Qr36mERWJpHoRPr7hyZE",
  "key14": "5KVHZ343WYCe6shD6pHH7jaD741CJ1J5zFNonsUDr8e6wFhufEPkrD9So7gTE3DVGBaC6GgXEHrtyNPRstyeDQ5v",
  "key15": "3pLxSnyyBQaPY1WAkLjWJHVAFKtacT8rGzVj4VrZLfzjQWR9vxHPNv6VkfWxq6zR7RsEbtNkRyVBoV8s9MHVhf6J",
  "key16": "2kXwb6cjBJmesjL1uvziLyV6jk4JvqkcpnbXfEK9Syj268fUjuk1eZvbvfNBtGz3Gq5wYnVwPKvZjAWHGjH51j1T",
  "key17": "4YxKgbM9deFLbVHJhYA7psv8V95WpbtAYuRMs14T73a7W9FS5TzRyPdqfNfNqwX8ss1zpSHtx6DV1y9r8t4frShQ",
  "key18": "2AXcfaN6gtoCzyXSn53Qh743Pw5muB4pperY57Lzi5LvTKzpPNRCucC8BMx7GXcxE7Vaw97VhbbiSwfhnmXL15LW",
  "key19": "2ujVL1MG6s2KhDiMJ3gBKNt42tqYamqUxduj9NqkkuFPYFyYEMQviZRSZormp8DrNsVxB6jHJ6wNPv9rS22Xmf3U",
  "key20": "2wEuyc54ViTqgyHZwSejd4REZmLbiZNdqmgm3VeGNSbp6M8x2txsJojv9Jb5Lhet8UodqXa33sFnrSN9pMcbS8bn",
  "key21": "5duxkA1Snr7GSpxBqnKtbYzjJqd66CET6KeUuMShuBFukEPxrVA6yzcMqeqkHJ2n1GvtDwaNhtrdB1UEjcfVgDrA",
  "key22": "2vj4LGBvEDqYayovgLhhvmWZAiFtLye4CAUkpuCsnEMGiXvwWH7iktnReheFY3ZBTGNuboVgZznPjHmcnhJoQz4M",
  "key23": "4skmZnZPNmGJj4euHAW1frJrXm79dbJXk2YrGsSznPwxnbAmLvk5Hvz2sZTXeReq75b6zBZwfijb5KiRU3WhgoCR",
  "key24": "5twavr7ohkLxJteXtkBmTZcXeGtp6Nyd6XLGtiVbg5E7SxL4VyomfPc8e7jTi5581Lf8HB6Nwu6cfjsUfFBUcSvZ",
  "key25": "2biv7jS4sEEALLhE16i59kaE15R4TQgxEjfCfzs5fKVaEDeKScBUpQ7LwYtiChZZw8gq8WGPcv9HAJhf6i4esMzT",
  "key26": "4m1iHurgk9focPEwdek3QVwkv4W9PkRpzErvJacuExR6bToHdBBNnijqKqVsWFGLPhtsgincKKWAZLUQ3EiHudSs",
  "key27": "4JtHgpMJpzJhaHJMvKD6zeDfhmapsggj9JYFP1ovANthRAeudgLBCzRhhX6NaB7KcUFnursBVfvSLZqPVjxRSitV",
  "key28": "3tLH34oZdft7qrNd2U6Z1kYFeGeUZ6h87cBSAQDNzo9ujU4Nj3HU8eK2tMWe72WYkvpjrhZ5FHnrb3uRcAgg8sZH"
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

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
    "3nesWxffr4LHBeCBHHXWeYxYLc6MTNgvex7nDQG1uMbpdyyZvbrcJVPRUwxHvDeeLHmQoZhXQhwTUibF23tpr5nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVTNPzfvcV8GJdCKhzKd4wDJsYwEcJhhCf2YJ2uQVoDdTSfn1nBSr877iJ1Q2z4a3QxWZQ6pS77EqKnxZYFMBSv",
  "key1": "4WMJkpVdbNzB85AMoLszhTF781aksyAgjhtArZjFPxxALDYNvzqCVnwsjmU7QKTE2VUASmnHDCGvBmWpEvzPeYoF",
  "key2": "5p25N7isevsd6rTtu6b1MGG71sWzjY5BxPiJkJbB7e6xR8WPrvKYUzVyguxB1bNfne7f733FFFrJX7MTt9itbA5W",
  "key3": "662aez5VZBZTdqHYKBVAxpLFz8oArrt3WRRJeabKsWtxtoJ3uxBz51A6cJnMXNRZ2EvyxKsefHVz49BVKvb1gYYx",
  "key4": "3uLE2in5eNSTBiUp6UMzYeuxAdTghQfVy2VjbSh27SrkUwnCeCPAY5GUPxrRqBJm6Z3r4bdfseSXyK5PN1MW735g",
  "key5": "2J9J18gwdheXAusoWEuZCKzpJajRRWpzvSLthiKYcv7cjw3iRSP4tBKqmVJCSiU7BbHzVVNVsaMqx5LXMaAPWHJB",
  "key6": "5qGyULMtPJja1ReQfMpzeo7RgZGQmbxC4SG5uTJSPiw18z2jpawAyyMvwtv5uVdSjvB9fX9XB6uTTvLniS6fMriu",
  "key7": "5bGaeTTnWAF8LnyGnqb6i5wra31y9DgMs1nzuhp8tsiDDXcBqqg3rkggwAHcv6ESt5SbmeaHQ7HemvKuENFehVQL",
  "key8": "59gwhDEcfWjbNw7RSiTk8ar3aCJA6pynZt5QTVPRC3yLhPbCrBNcjGuQ6JeAQ5Mmdf8MbGMmWsJtemesoVXU7ZAk",
  "key9": "5iiwwJAHpFZqrrzfp6BgSX1UJqa31am1yL3wUHnh4zcfK4kTu8mWZrPPB6C2TbPQpM2LJaRGzd2KiwiFDUQ348dg",
  "key10": "2daYw5siA9UgguwwdBX3siZSfiqWqm2uJUJafpMaoa9S1sLgA9nK8o1ARHJYFs3Lhxy7V3CGdqpJC5nqNcvL3N87",
  "key11": "2E1g9jbDxbAafaHTr23YXMijfosvruuxpC5hKgyN2fhP8wJDYRjUrQMejWQBB13KcMG3N3aZsV2saaESEHm7FUX2",
  "key12": "2egG2gJVv1M7XS3kNKzK3a4axeAYhL7fsh59fGXKyB9yRsMdP3umuX5iY6bncY9ipbP69Hr7Sk4HwqoMeDY6jvnJ",
  "key13": "ubSiSEsNiKc5RKeYXnxwnpCthNjRhuT1RPNKcYMpZAEAnZ5RH8JRQMbBC24kSokza6Kc1Y56WfHedKt2KXgTwFQ",
  "key14": "43YSjT4Antzq7mKoSFyBLa9ExmvEz3jsxgKmKvaGNYTGyLhTfueJ7NGu2EasbB84S7ASTogvPvkBSSkrLqbogZhk",
  "key15": "3ma5mw9sei8YVYfYQ1XtWS4t1jtGzu4aR3qAqHMWtHRzRsD18PcW6QUyH2Q1q75ipsvB6NctZZ9K3k5ib1qw4bv4",
  "key16": "2G36CxZJePQV1ZNkZq1He35rA5onHsQ3rr8s8Lq5Hs1GWZRDYPQ5yeRjaDjxZ5VjLYeDHtCGMNCpN1RiTpwM8zWy",
  "key17": "NtEAaMbuYtLf4aKpEwmmiSEVL51mLASeM6ntnP3cyakk5G2RbPxXxyZB8JgGzxDiiYnnvfE8w6xhXFr5zF6iwpg",
  "key18": "T1fqdcyJvisaa36ECZLvU7cXmUGnpvxYwmqXVciZMUrznFr4GDPRgikDpiresvL5ECZLeeHriX9ckkVjsZ5Gjq9",
  "key19": "5tc7QeHMSmzPwuFmLNKewBxgS47frPLyhJfTQfJNXaKgdRqK6dEwNt4saRcdHYiEsp5aQwScxwHyTY2jL77ncF28",
  "key20": "5DAmfvrYRXiHZDP22ysfmbHA7QnXVaMHuGYQ1PWVm6wsTQ41BpHhbxKgMAPGgRUnyxpb6CXn8sNGoZz3VwB9ifK",
  "key21": "4kWS76bmqmA8Q376jSz65anZBxHQNWcRL4y3kNSnUc9YrG53jgT9oZMedgHncGRawoYiQbhMEqscrs2q4ZGbdsxx",
  "key22": "JkZ1GESRVdPpFoEFEo43KUJiPTgdbfqiiAAKWbnCMsK22yKPE4rEWu97vVas9MQT186EUgTabS3rjtUq4Ko2DtX",
  "key23": "276LjXjNvhaxFQRJG4ccB3NfuzjeXMRyFzPyuXPFfRg26PvD8nUv63AqQPjEyQLxRnXmU8HpLDKWys5wZDQpEiv5",
  "key24": "4EAGMShVtQgp6Q8LhLxQENQzasLegsCs6TmgEi1vp5nbHpdTXctwHZAMCGi2YMnsEakJVGzEHYYGob3FnwRNq1dJ",
  "key25": "SiXyBX7NuCbLURAT997XoadtSajaABAKqcWna4GU3zsqXxg4TCjM1Cpx4n16D4wBNQUV2r7pus4BWFihkEdYLXi",
  "key26": "2V8YGkSs8TnYwW6voE5h4xaHEm3xAN5CzCykBbDRVZupLPfwjVtrukS6M77Fap5nEMhgi7qkLE2UL44rkQdwmu3R",
  "key27": "4PBsoKjcU1hVN4ZmZGVe8hKbhXrcUoJq3nLEbSPbhASEPh3DHZ31cFoHwwkUMGzWXi9Kp6TZfGqs3iqbZFTsbchf",
  "key28": "4bYPjgEmH7s7Ac1pMV6fiJPZWethyPxxQ7HUQiHyh26s5XPiQtXhom9zzp9raekKZDJovV2oRJbFNTYah2QLZ2f8",
  "key29": "5r6aKRVmCj8jKq3X4Ty9CSzXjnqVf87o2mU8h7y9vTDGrNd3Cvi7AfBzDfK4cYrB1JXAURYN4oDgEmLRJZT5BSVf",
  "key30": "5ReY6FfD85BQ1Ev9Hn2F1m1KFgkYGm9b8A9D6qsX6kndc787KVqTyLMoBVJTfv2GgJzA7ZzitLPDET4GEnUsjdKZ",
  "key31": "5xtSF1HuikJnUwhnAjCuKnRRej7HYy6HYd96VEw6bYmHkZaT4tyyWznNHgEUrZGV6de6m5wAeFdbydpSqT1mvFt7",
  "key32": "2pi7GDMJrJXayDY4GKMHx1MWr73VoDcTrgMLoobp9WW3e4uERNeoAo2DZomvJKTuyvzam7c4B4t17YaXdG9w13jf",
  "key33": "3bYiPJcpxrAnfdBbKAHi9NR6tFgF7CmssnDiMCFXpEYLmGcBfEgcfaV2vKbGD9UjuWQWZD7MziVGvebBdLZuvJF8",
  "key34": "vy2NrMw72Hr6RxxHdiRT9nVBMHpuUC2FyAt9dCfbUYYvJAB7xMDaFrRtq3JzeTTsQVNBMkM3XYH7HWo8KB5ajnL",
  "key35": "3pZ3NK34C3yqssXAeffV4f73BJ7tq8iRje7KtoRLSxETtc1TBRYG4kWSXAdAdQLRdYNdy4pgAGXd1mcLSfNS8Y7m",
  "key36": "4k2UPwpm9Su6uDacj1mRrUVBJw8XmDvH9FzoszCbz4bLbZe7RCxxb2LYQ5oBbqVhqmXL5aUXvLF36L1LxGUrmNtx"
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

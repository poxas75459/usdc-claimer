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
    "3Sdh2q6WeTatcSibpxraJYjdXc3YfbMju2pjkuvD9YcqF3JtMxokxnov6t7LQhirjAQwKM7yz3FoGjgH7f4CScPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33u9kNrSXxPoimcPCtRgxjfe8myzuPy1SZGoiNSviSoaRg1uX4Wvu7hEX8Vt5sQJhp545bfSNN8CSRNVK1gr8NEB",
  "key1": "hzmodhNKSBnfJXG8CwndPBXZMYZVVdgr9Ka56NLkCEhXkx6oy4sGgV3wUWS8ArdomfEiCwyNnahfgPhnT9yg5Lb",
  "key2": "3Ksu5m3q1Qi2HMqvA3MgMijciV1MAitbBRcCzTBqNF9en8YuYuWD6Pya6gHTKtBAbFogF7G3NiApHdpkVs5cwxSo",
  "key3": "yzzWEDqnF4U84cnEdsigSJFqJMWagNj2RNjzLmBXFYPXJua8GBg1iYMiFWtn79MJW2iegELh9fSk9DuFhm48gYN",
  "key4": "464b6iihtoMYbCC4xKnf8ULcDrTxWJ43GV4DfAmrcUfpCqr4BA4eATbhoh65rsfiSQRrHcqW1pWkcPeEnTXtDJrD",
  "key5": "5w5xB67GesSrQXzPTAjHyQHLxXZvv8QaPXD3PJsXqBD1vNZP2HgxvQm1CBFX8mcvTuuDPmp6DWTiGyfjwwuF9LUT",
  "key6": "63eD12JE17jKuZMZshnvQ3DqZpN3j8kzMtzYcdtD3ofHh59jatatqm6wfeq77tjuuy4772Np8YaGnN4ojXN5w4dM",
  "key7": "4jWMoqQ69RUQZn3tFKyziuhsKsQHL6eTQ4SYU8bk8yJHUQy7AsDwosxbrEtrNM2PZ1Ha8ruZP3CjUsJ6jiTwuSp2",
  "key8": "2ixsyRfRS34dChVNrSwbt7VKRqWiAGvwbjL9HFLxeZy87tcdqqYmPhFnDseA35TiQQJkDQsBYuiHrkgyNduGfAzR",
  "key9": "56ArX2LbL8RwsWemUMtqJz7DVotrURmeZ2hPipCikPbJT2TjdtUEo1sJcRFViYAm2TJbkhQRVTQLiesfmu2qpjaB",
  "key10": "3XbPvbWfEZzxmfd9k97smBcvmnvgMYi7AhFdwyZv2HezckspuAu7G8b5GPAWY31RyNggkENkwZwdeJeH6McYRb1x",
  "key11": "4TJmEFgRsE8QSSaVWSibFJW7ABzBHnm7c1jUhYcyrddfjux5HgGKPS5aWUjD5xqUDVAVpcZGkAWPCJ4T82egCMtD",
  "key12": "2o51E36vTaNsGkKuxrdvDuDen3PiAovEDWLquHcYhJWTr3Ry5xWxSkZzchiP86SbUH7jNH3asHEnZFQKXAtT6Lp6",
  "key13": "3TqjXRit3sn6AZtLgHpq9nGCohDBzUX599CMnvZqoXwFR3Gd8czaGkTy4TwBR5SQKZ5wfV1UmZh91KhGgnx5kJGE",
  "key14": "FxKKSNVwh28E7URPzu2Bs1Vo7as4UQvPyG1P95b41Do6zgMxxbzKP2mdKnZNVjheCXEK162zahC3dtH2Cz9NUss",
  "key15": "2uzfQqLibw2wkziL17cWaLJUtKVdQQAUyxR2zYkjqYsBXHnVGZRZz8jdJRskk5RzLKtmxVWG3xnB7pa9Wj8dhnKx",
  "key16": "3LKujuqkjdf4aRTRLDky95v1tbHCBK6PDhdPCWUnTC2oyV8U1E5YF3GzDmnBsUdn5LT46oEFArYNTCnJwTne7q9X",
  "key17": "41wGLMrLKN5ub367nb7oZtwajctYTP8tLXK2J15enkhWDZMii2GQFXC7gF9cqBL6JZxsz2ebJZKeX5r8wVYDGqxA",
  "key18": "3keCTQFoMovUDAgdAJfydJ4RzE7tTHfzZKtbNSTYdmkyZ8X1KEjWvjQ267SMzfwDfykbp685fMMtdQEhJAZu55Ty",
  "key19": "31mYhKkwTUL4DucjnZ8pYJrdgknDvgPdNPk71oYaUVhcdmbh6ZJf7iuaTTxQnEr4dcpYrZA1JEVjpaSnaWVEgxU7",
  "key20": "3fpG5i5fVZpWEhsCpwmXA7uC6hvfw9dDPTcEmKsjMw2v3PYgHJHcYYDoeMXcEH4PuCnrGZ5wgp4V8Ljzy9CMwVMQ",
  "key21": "3qVKMnRvhATcUeLmDHbEPyYTK34kDLyB1vsxdUqWHYK5WiHJ4N3YW4pWiMhdJjVKjwqLCY6rdbpD7x46vKhf83v8",
  "key22": "ZDHqAyPtYw67aYUvsUGtJtGnHpyYVzhhaW7j5ZZGL2WPaCJQindTUPLu8tdM6pKuzkm5Ay4RLyiiyw8mj1ApSDM",
  "key23": "67hEy13wxsk6S49AXvQYeyS1UWc9iNMgMXqd5K6wF2gCaXpxd82pHQFgMgfKAPwNAysqQLADhzs9SCtMePemJo2G",
  "key24": "4ix6wiT7Kw1S9Teih71TUZRh4x8jn4NQ6JbbLnPuMvS7QAvrFaGdDogx9gbtjattcjV1E7wASr5EDjdNbng6puR4",
  "key25": "2zC3VVZzuCDqMrY6YCkovVRy8Th2QiXXiDxdqDHtsR3uYVRbDqo95ccuBmmq5fDcoMzFN48JQra1ttLehM9KmgyK",
  "key26": "48Loo1Fhrkae8qm3cxf63JTc8uey98W6V6wduXXy8nMGHM4yLQA4VFzvEKhyETYCWESskBjcj239iMYUhmojR51g",
  "key27": "2sMqKv7L5vyqbyn1dFjGdpbVgCgcfYC9VrShCGzqiT5R7zoUrv4utmyWJaGAS5mMUkvoWX1wKcnh42K6yGw24PA3",
  "key28": "4bfed7EBGyrbC4Lednw1VECFcMqZsNY8Jnmm988usTfy3bUTXjTYLxsoKUjYBbu9U45kAbLnvHQuMc1spZiChqZ",
  "key29": "wxjFCGoGATGpf3N6UMe4zoEGRKfc4LVxoQE42yAKhak5fjwsPkWQyixwksJoKHVYnT4dSFtEvGM6vTe5ezk79D1",
  "key30": "42ekzUPuAcP94u1Q3bRxmgbtEAmd82rmf2NYoNcnVd3e2LBk6LThjXumfUu8FTiLsTmLfdtKL6e4ZRXgwRQxd4if",
  "key31": "5LQ6CrSgc2G1C5MPJP5owdaMY5R2Q9TkdF4pgfNWCrTdYymy72VNcg19NxF4xzryvZVYTccqQr9LUkaft87cr9LQ",
  "key32": "m3oVNwXmWU75izLCYHjsKvAZtuXpN3Pd9tdkbVh9hfkrbmu3uQ4c9KF5kyYnw8TUERPJ4feugDUcRhWkJzwuHFS",
  "key33": "5B3AzZaS6kd7Cj3iUuSuizxj5p2PYbEf8StxUMgvFhyuA9p5FGRd63d7nT1x47XKKQaEdp6iqoeQgYPiyaV4UUka",
  "key34": "2tXhUbgsDe8EhzgD2PvjdtHco5PC2H7WoGc4Lwe3qErGs5YycsEZGiSqVAhBfrV3UZcxLccLbstGYt3UfZScxwq8"
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

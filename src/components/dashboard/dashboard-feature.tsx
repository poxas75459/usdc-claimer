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
    "2416Pw5zaUt6TaE6RW5qpAyZtKPcE7UwjDK9QxDonmZLawB22opCabd9YY4eZWvpTEndeKZjcCRjVK5N8SxWKUrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RcykxdBPStf4sucFmz3sbjSEHdCwS6UZpLUHzNu99CAWqDnb8ZT3H7WBcoVDxkiNGSH3vccCcXZZbkiWZThoNVe",
  "key1": "4C4TEx1rEdNEMAK5yUKmTJrPp34iiabNjDkXLauBRfbVRYXRHeiaWZcEsTiWqYZUD4peCamJQWC221dAZwErUqjs",
  "key2": "2psUXQUEwosiiTz8yv8BqfaWy4SHWXGR2LC1Qxdf5XzCwUNhT3fLrfUcY3wcVfKNemSZqu2RzrSTAARgB4JgXjuu",
  "key3": "5NPHc7mndYLBA6aWFnZFDCRux9wB7cb6A3xdc7wBEbs3Y9Xam5EtfcRPXFqNYW8SYYNyLiyxiYQNskyKYC3PHvi8",
  "key4": "3byNwxFv6WBwq8HFZGwJ69cg3v4b7JY6pZNhawTi6Aaa83tEL9eaDfc4NTQGb49zTtBfJ8opo6VuLuyT5ZvZpuvN",
  "key5": "5mB8bUn1yDPARuvHF1AN6QKAPaMjkoKqMakScvjn9cEgLZ6YqQV95mZxmHDdtwHeZYTP5tBUKJj871BzEKKXcEEd",
  "key6": "3tvL4Nj2L77UcW4cdQJRGdU28DLZeWuFwmNpnhixVbx4Nf8Z6Jsd2BYcsaVCbXnhVpkh6zDc4fguBYdveozQgEQL",
  "key7": "2viqqfDqSxKJhuVBN2XGotuhsJkxJsXu9FP9VGsjCuAw8CsrD6fgXV9juaqkD1u7eBYauXpqaCeU3SZaQ91dQ4DH",
  "key8": "4sxPDYD1Nrg5txiqQSWRVCgNPjfMkMZdogVjrJQCpgrGvUDKZLeT3rupFwR2X9VynzQi9udBFCZ6Z71T7R5NBqjA",
  "key9": "31rFob2r3bV7Ubz3N41ScnXXncpCVtDHFo11hggUGqm8GGT8j5CN9JGoMp1eYGmtijpMcutVAdsBHddC8HZoTZAE",
  "key10": "4JPmHp167Ba34HDWBvmWymq7ZcqHosj7WN5PCPA3eNZaX7HX7TJhAhtzmSvqPrio946Mu3xTwjM4FVTWd2ttSbyJ",
  "key11": "2zmNW7inK4odx3tkfeBSzj74JLUthHEHLBJbmn7waU2Z2zpzYwMC4g6FVxmjxH98LgTb36gfk4F3KtUcswAngxhQ",
  "key12": "5pMEL3R7jnfJd4rTVQow8kh3pA39CP1AHbhDHD2NuGm8QLxHfn4A5W8CFgirbJwoMV6bTZUjSQMFzd71F2CbZM3t",
  "key13": "v88WeKGuxspNjq9zk8s7u58BKUW9GtA3WuaLWSAtK4NUvygf8VHHrC3W1L7WjcNAr1TtC3UoRrxh7uN5cK74AvV",
  "key14": "438b71ycKyxYnJNqBWX4cHjrx6bcvVbenz2Sk1kCmpGQZkoQ3169dqu6UNJSAZcmDXEivHC2SoXpgVHiW8jctnr1",
  "key15": "4PnX2TDLVseagPWBUor6UFNkzVTVkzbQ4jx9XeVSzXrdeMvhh8Dnv166wTiAwPS4dfzeTs3W6kU7YeihCFQkUMjW",
  "key16": "2qhjieczwANzs3GCDvRaRDsQeMuUAGdqSg1Tm3qSsW5YdoMZwRteVrtjLendMUays1kNJitQqT7GQA1B7tvRXLfe",
  "key17": "5Cs3cmf7GMs8TYnThJaMrZZtrgSHXHQYS5ZsRkQ5DB2T2deArNZtxhJqm3PWQgDZki7HSm1nAGZ26q1N9FeL8T68",
  "key18": "4nC1TmkanRAPZLiez13VF99i36ggYFqAPhqPWZFXrPAkZ7N1m8wGnRaAPrxab9WJTg55N444QAtPRznYAVTW8sj6",
  "key19": "5fTHUzrWbvpemH1F9JUkvgqZngMVvwBC1kiSVjR4fhTfbE16Wr8bu1b6RL8fEXSMrr98NTCDmvji1KnkRabdEMkZ",
  "key20": "5Zx7ZtPxTediS1xprWuNmS4LAr5PTkb4M4sUCPWj3PHqeCcw9Q3hJACGX6eZs94XFvNSmJYbpoxKxPjbE8iXd4C2",
  "key21": "2GoujjUAfr5fEHMihp3By8WZ3nLxYR3PoTFVoc5qepyToL9qddn5GhspFqihevmoKd15Sa5henwkkvAB5tZSTqUi",
  "key22": "2VV3gwPPJm9mbPeGprpi3NMRG4mPYc4KFA9aA6N5rftPjrrF9KA68Un8fGGzYceeRnR9oTPwDL7kPzfA94t3MFa9",
  "key23": "5J6oK2hstEtwyQTW3QkDkkrVdSbidvcqQ84BCjzyAAMxe9jAVKje3Czj3psxwvCKpWFr6aL5krsL1fiDZGHWoaHy",
  "key24": "2TXWVCu7Rjcb8Fbg9XfenP9ijiAJed1p6cf1QaPTx9sbhuNdmV8pXdmnu3shkVbS2v71H5HJzXgH41FZympKCJF6",
  "key25": "tvvnu2TK1WCLmZAVFt3rAkXKChX2g5AcGcz2d8yX4gD5virg3LRzKaQonHGHnH9NufBeav9Q6GaMznytz4PaqML",
  "key26": "2izfxATVDuALGqsL9vQkQSWWJxGmjR1EYVYwc6uChrQs39uq7RR7Ke2GueHSZd8pKhbbwEhFUTwy9jvccBEHVhWE",
  "key27": "5TQSdL3n8wHZENbTJsqK82DH6Ce98Vvzy8N1q4rUbvA7rq21FPGvTyf3tBWGQBx1N8LAGKRHoDxdYQQiRfx2Kh6K",
  "key28": "5X3PAyee9CFARsDcDk5BKznqd4L1UuvAVj27BVvXwqBTrqJbdtyNVRzaDWe47azQZQgRwXTNFxxpdQe6q2R4rzmp",
  "key29": "wwPRifVXaZuCPgmsSP8z46CMsTXD5J3o38Mfy8FxFMKRwnebXfhHaXeTZxukd7UJzX8exYevr69Cva7GVTQziZc",
  "key30": "TbNB7YtmFQBbbvYupvAyTBdMG7agcsmghWXZgjpqNubjcbe3eh5nYKxhx9MkoFPsB2z7kThrKrq3dNAPXUaeLmk",
  "key31": "qf9RRyqsrNkkLaFLqRpAWdUsnimr2MJWY1uK68gykX3iUhXyP4eMatPxAA7AHSLEnb1EcU1H2hw8C4aqNaRFgoz",
  "key32": "2qcnzNUdXPGUEnBkkSEyqwJTFm7GiLcYDqJxmzHzw7uD12J52o89JJGp53SdomY3yxXQMCtMZJ8irGZMeqn8obf1",
  "key33": "5Y4tF2SPtzJTgj4mbfk6aXTWsbdhbishmoDJvXLmKkcQyeLpxiyszuPZJB6sMQyLkRGoFScxYnmR3YozqSi94D8B",
  "key34": "3Bv77cxXcoLqQqQevwNhJNDQc84VaJJM5aABuPyAxGkk5ZJqKsr1A6p4stEe3KZGcsyh7ocdny1riajzD9u4maEk",
  "key35": "KcBQAH8kcvYmFqyWuVY28vDrpyJTt5rh6W1hNGXV8tx31EWs4KB7SCpmyPBBWDUroGijuL3aDChUW842AvrgevF",
  "key36": "64ai2upfvRjVtXMFB2TYasfhdAMLmhL9VZ7b8UsSFVRrtJmoycrKjbZ9vJjufrExpjxXBJjcGvwbeE6Fyb5z1aaN",
  "key37": "j1Dy9GXdSGz4KBvcez5yz9Q4W8qgpVx8CGS2ncqseZVSmDShz1nZdFoxz2JjcrH2ZD1eFR5tXitokYX5pQPieai",
  "key38": "66mAXdc6Fe2d71a8xSeEW2mFK8d3KHEFbFjaPKmpK3srAB6QYjYGjAUWrG8sWkLmb8rvcDX3LhyA25avsKUySbyv",
  "key39": "2At37Qn3vNqhuuLyqRCs6crDmsgTkJrJzKS7noWSGEnCRBBatsuafwzW66JcWTctD38cKr1q5hBKYEwGj2s56Amd",
  "key40": "3ee2svRQCnR24mbRtqTTq4xBFXjZYkyEAaeKkrpqNR7sAp2B8snHdMYdkpBbq6Ngm8kWCr1yH9XnW1g6shuWD5Vd"
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

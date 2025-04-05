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
    "3Yn1ZRK9RAfyuUsSFXDSrWjxAEPwLbDS3AQNdtuDkpPv3LGhP9k6gfLkbe2DVbExxL5uzn6x5832b5jXWMWsye5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "368ySN5iURqT9s6P84xcdH43cKK5R5Qu2nJLLwLtC3fheZoMudX6JMX2bbnG8snwHNBJyUEmkM79muDxx8jtJYha",
  "key1": "26hq4NGLerypybnyxFa7PZ7YHqNNVgSDxTk4cRiTGrLC1KZwWVJ1eYWLmoen6hmqxHHpCYe1TDsodkXjPuXR5FFn",
  "key2": "4F1aMXE5KwpszKKX65cfKV6qGJyK2BtzEowaaszrJ1dTqfwd1oZoknXt2pAPUvkZ6A9ET6JKpkTPTcqT78Z5i3SR",
  "key3": "3QEhs9meTTAQcJxJ6CvpRdy8AKWtjntDKMQrUWyCMJbH9G8r4u5ErQs5cMx3wwHS5Jcnq3BKYP9ghMt4xrUUjURC",
  "key4": "62wUyvCfnqhBBgPi7cYEKRB6Hj8nZL1S6vfhLhQ896wJncjPUs51vW3QwLwQAxsiC2LsuDuhi5oBznZssexc6U2J",
  "key5": "4dnG3hBxwcJTmNuvUK1a9udwmYC5RBcP82nTNNNyqzH9MEHDyDhCuPNW8s9fVFYvNdd8tVzkVW1CevqBZJePX2iu",
  "key6": "2GL8KwRSSUUmBr7LBJvjcE7m2fMicq7Lwfkp8Z9rMwYh2Km6GesvdAhB66Begxxa5HqpXoG9VdcCp1wyDhrAHWXo",
  "key7": "2DvR84YtyXZCREEjCgpRSTuqr81BsnzkuFvTfH2miwCRfcSvQcRkeLjgB317wYLyQpMmLDUSyML3M34zEfBzneCf",
  "key8": "9JdYRH9Pt6gUdHtUsA151FjdSNtU72sMPQitfK3ZnenffhwDYcdxEeEz9KZLULv811u44sDZv5F3K8YUwNkxBoD",
  "key9": "HG2UaUp88w5cjTQKuyuZdFJoagTRQbJS75nomPHsj1uYRzJe1DMP4UtBkU29PbatHuecYT5zasCJqmse9rytYA2",
  "key10": "4LSWJar1aAVbC3pQDBeSeinisZEkgRfcXdmSz5fBYoaVwWi7ANbWhfaQDmo7jQMZiPr7QkW5ri4bodkX8ETEyAi8",
  "key11": "2EbGcmuAaNngEeFo5ENarKxVqFNkzxUoKbdnDGHMueWCHfQGzhrsCBMEYxJJgKG91e2SkbZEQUk3iAGLNpdmDifN",
  "key12": "3EY5woD7yHodVT9oXc9v9NTEcNmNUoe2E1Rr4rM88B5mKVatBth46XQW61bAWannkHR9ndrkaZWRok3XNwBbG7pN",
  "key13": "4vVx2X5DYU589NUo98CSRtpGdYk88XVt6RLpFfRTbmK8JySpTQ32dUhM9VpZXnPrauj8QPDRRKGiNVDv4ePEvjgP",
  "key14": "5mL24yqG9TF8n4MbvS6Sc3EeDYm8LgxkE1urFSzYjmrXzKx3M4AXdvZiQd5R572mQ1KmTdQ6kMe7xsz9zjGKe3mJ",
  "key15": "5SD6hXjTyCmYNzkAqBS39wGTJtCPtwfTzt6QNud8XeiizFojpgNxtM4Gexg1npwqkJJDgLozTQjQk6GZjgXxqjwt",
  "key16": "575t6Gsq1iCgnWohz14GKfpg1MCPRSUyWkHp26DR8V2LaY2vtMAovG8czKfgMjgDy7q226ss7sMYdv7Qd8r6vY9S",
  "key17": "iE4zL862mVK8tBLKf11pQPCkEiB8DR5msU3Ptv2wTHTAmXWiaY4jym1GqeXzn29bN8QKChf4PhoZvaL2sVUFPaM",
  "key18": "37sXjrFfEgtZTgzrwC7sWgDJijyXWWy4xSwgPXBw5H2crtKm9p5ewtTB9d6jQpYx1Kv6W4tyDfwZPDYa4uhgouGZ",
  "key19": "3eoLQDsmaGYDE4vPerbkExQvz2FDAM9vHFkRWQEnia3aa7g9LhmRMBSJmzGgN2a9aneb8rQ64ceVEnNLLN5sfotH",
  "key20": "3eHH8vhaNZNKDKPRri7ow1hFSfoLsUL5KKfrEGRYcJZEYJwLbCehC6xo4rwRK4oqFtkX2yVecKTt41fZfu3mP8pb",
  "key21": "5DkYow6dxDNguVY5Lw1YyeMrbRXYXTJAFpns79hoBNqAfq6HyzrPkdy3shVxt8Q735cVNCdgZ1CxjYkE8ThNRpYq",
  "key22": "jBGhoBCPGXgwy7ttKXZTZMqh3rqiwRHykxkk1yf7Leo6aGoe7JZWEFRCHtsszjvTmygybLsCetSsvmTjtC1WL3B",
  "key23": "2PdGYD1K6jT8yQ6o19d7upAQNY2m3NurczDbZAFraJSHCjU6JNpyjhkBQTvZjuDVbGyx7kMcyK8PMGax2TBd3Sat",
  "key24": "5zMiHqtbKRKkn3CvyS7aaJa6J42As7NbwzGcfYmgwuPYuJtm9D5pTQMYdsS8hQZsdkeL7RKUaqqPjHH2FwC3kgG2",
  "key25": "5Eqt2tCYTDC6veCMXdDdEgPcbthCUpLpLQ21aawLatZmPJ8wCAtEAw9KvBdFAGqUiPiKBDseMz797g6MWUyoAZjv",
  "key26": "5h38LB9XQ5s1JxXsF6jECi1KD4Ne7GrpCECEAk6euWZC9KwyCcbYFusfmMnCgKuDp28BqSygkGwA54tvHzczdeSm",
  "key27": "4f2ThQvxYvpX463MAqJUSC6Cbb52gkPMxCYia55fB2h4b3c3ay9fwBh4QxEVCykFxCEuWNXPQovujW1FJZgY6qg1"
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

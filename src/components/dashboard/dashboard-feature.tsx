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
    "3P5goHPf8AY5eCv7nyLctVyfYspLhtaKJTvoNaryeSmReajjXc77p4X2utVRzenNztbR652hvs81Je5aMsd7bLk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sfk4SbydXmQmZGhA3VListNXv93vw1D4mFgeCEAYGWrVPhJzmXwCTpWVag5oXoVZfebKLNoukWmuecUbQzatpJL",
  "key1": "FakakWmhi8kcuWHabAXsT1ywRNAmid2Fk1m98VZ6cNwBoDVmZMVdh7o1D15g5feTWuPwcjYZJPGhMVaxKmEH3GD",
  "key2": "3teqoii3TevPkB9u3ssCLe3vJ9m4pKfQ2HDqci52rJzoeNds4HLupGuGAXxWnJnnqoVU3V4sviJUazHfdkK9dCdD",
  "key3": "2LAa8NwnBSpUPEPNSEBqKsFrmKZCRZPApAZfVAJhKyjS2SD84M1aaq7hEuqkuo6KNMAn6Xv7XAm39X1kBu6M4yao",
  "key4": "477bkhaZ4KcwbaSc6wgbRcp2SXsonyKTz6Pnfc5NkjJU6Hdn3wofLoN8VM2bRYtWA61QMVUQ8yWDhKuPA6n6YBJd",
  "key5": "54W8kTGcWunXHyQ7bT8PkM6ThX3g6ksRbWReFsJdY4E27r3xac1o7k7M2yS9s1jbd8n23tMV2WvtKZhitBNnN9D2",
  "key6": "2XiQdTpiuYtyqLUehLKntpLpwZKnAn6R46JE7fmf7tnunsAT1i1EsJLK4eBn28TMMvGMLqQ51SGpA9wP2BJEgiKY",
  "key7": "4buhgFUudmYM9Y5Hncfr3VDESr6FhcQB8fW118a5AA1ifd5PeQ7N2aZW8ZggvA16piMh4Pmg9eofoi1HFVDjW1Gx",
  "key8": "2x7VvFc33TSQtCrENB13jtHDnvXQvBh9EHnubmAtcz2nJHsZQmeqDtEcpGVKRUZvrJ3vE4wkwgXcqaimH69bQWH1",
  "key9": "4sHfgBCsc1PkF9YMmxgz9DTUK5aCxzAWq9ZpJyN3cP6fNY9zZ5atzh2JV9phk9frBFZ7AAJNGW9kyZhHbvfD3GhF",
  "key10": "5zg87zE3pmz1DLoLGy25zMsHa2b2GjLbxBG4noNbNkYn9bvSomRNaJx2VjNZ1pmrn9upXMPHaRsnFcKjEBQ1G9t",
  "key11": "3daKySUvx5PR5H58yxA8QoH3Ebj3JFQbR17cJbHysfxVcn44CaEuR9XihsGx92w5wU86dHxAPzi4HkeQkHazqCsy",
  "key12": "64mUovtq8xMN4ZUjTkJxzfkUUs4SaxoybaDkJsy1nmyU6nBGAFUnQiFYiLVGW1EpmthPYUECZkscjRLeb7oaeECE",
  "key13": "4RhvaHAxBZ2hJgN1Tc4zwXqcTysHhM1vXDK7cExENgEaydzrWP8ywzs7ND5f7D4Z3KerjDYDnL4aFaJE7nk5qDB",
  "key14": "4KtZTbWavTsALBEBYpDFw23PaAKqRDeJmmMDikYdpoJQfGBTbizBEnS8GFfahMZS5kNL451pTMhoazsxAC4mW6DK",
  "key15": "2or4sjHTvAAkszgY6K41wqC5TECLXhESj1aqCmHqtrxaqGiJk24hsiys31X5FK786eXhQxwnzgjoSc7jCwibJLni",
  "key16": "n6MgMcFj5dYki2siU5DnqgnnWjZTpVPgmjoFjjKNUm12gRTMfpMJVrz4fr4kSfbV1QYmf6uWzyTfgXsXzQgdgQr",
  "key17": "4x484bLzFWVv6L9Yjug759bQsJL8CP6GZSu45jwAZMmMfmp5jE33Gk1sSDDsf722xEJEdVnT1GUBT2WXuxfz34C",
  "key18": "aFeCj2ZAvK2QLmFUy4wAHP9xrhTyisfxKeXUWLt3tWwD3ToS6Kjfo21j4WytZZhUCN7Y3wVrbeAVMVncM7NMab2",
  "key19": "prhUiWjUbqxs7thVm5Kk9NSHrMYc1fqe2T4anCzN9K3TrC8Uhb6dmxQhT3cZ4HhaMNthQGqqzJs1YE5RnEZ7Mi3",
  "key20": "3REFB2gKNMJrL2t6XAJALU76RoLcvLf1FYEYt2KwRbaZ2Z8L8pchefCAwbKq8vBqZD9A8Lud3nk1EV3Fc8dr3oxj",
  "key21": "61iqQTwe96rbWnVxEGucPkfGU36DSGtrFD9md4L6s2gc3fUHWQWBuUbHQx2HsmCMDBR1W7vwMxVpYBFn6XgvcXvc",
  "key22": "bWyYUxbW9gx6nXjopvEhyBTFTy3P9KCKEeVZaZov3Q88XoeAREejgtUvTrmntWeGuZPj1YoPepou1xR5QkTHhMC",
  "key23": "43PY8A2SX6EyFCQ55ZmrJDoofqcCY1b6AckFHaK6ZuzQeHXHhB2VSeq4f3t6xLmyFzvXWFnRZHeD8z6isrTqpL7V",
  "key24": "4RGrvpkwJdBW7UgyHyLho3hHfU8wK7gWtYct6nUzgLSKV83rWJw7mJTWdjbsjhyrJNRdMCaNEG2oy3daHhdmjtrH",
  "key25": "A2sdw7A981xngFUrpuF6e6vBpBd7wCFSUicgfzp2Mrkh8Akn53F8wvjrr8SUYjo2FeLqbCCZ3LDNW8kLkRW6XUn",
  "key26": "54jdxQukc3ufy1SRp9S7KzYUVbspi9jC5PQsnetwc1yZM4NkXqo5QxeikpePDgtKVS4yULXjnorawj4wD61k5gWi",
  "key27": "5FrMDMgGxza2x163yUfqVrWxnnVeBwy3ijfYYqA13VNus7ww5Uy3HRVo3KnjL5WRNTckyqtxNmfszwUCXeD6SVjn",
  "key28": "rd7MAEuZqTaV2rParkzwE4z3cHn2PcVFuhHY3quFQEpr6RPtbsA4sLPVx2yLpMTkoefxGZLnbgRgUF1sKUy8fgS",
  "key29": "4HbfS5SaiHSQqvVMJEjxG1XemBwMcJK8HKGukHXx9JnAx4iFrB8isw84WRZwk2533fqdbGAPtm6NyoyRGC5j1T6G",
  "key30": "3SvqSeV9UuehSTTmUi9EtX6v5yrJhob3e5874uQCH6h2WDPGxXeJy7JKp4pgynjzxvPNQKzkWMh6EewPjZjsVFHa",
  "key31": "5od5a6b2nFWQYeCBRijSkMuMeZuKpDeDvN9Z1dALEs8KHVTJoF5P2wCTvbHmngvFLLA9kVi7kjb8dwkzTbE9BaqQ",
  "key32": "673oQEFhmRP9YXX2RFrmdfzffgDQqqH6ZYPUYivJvggrXN6qGGX4tUuPHk55qTUw6qzb2h8CH8YbuSGGc4NVDnne",
  "key33": "5d6bJuJDQKLZrRXLMNWY2ZjDGF6VQdZQrD27Xcx29h7E8D8VjEWvm12X78U1Ehfhd4S4Hvyavy2MTkGvnCZqrk2m",
  "key34": "3xXh1kUghfZMUeGSy9iJHJssRXDojuqGvzRFrPtKaLhjeGWnBzVGZPWP6934CiU34wxySEeTp9Ftr6umJ7p9HpBC",
  "key35": "5A1wMsB45aaohQXxmzBvXTryuxqn9ot6ktvEdRQyAMhshoVQLpvjMr5PNsLnoAsAA8No1VeCNU4fwagcowBTJanh",
  "key36": "5YaPz9PufLXkeNzpzZWRrYHNtrvX7AWttknRwkkiQNnqfdJyff2KhBWoYeQNgssJeVtjfMDajVJA5F8DGCrL71pD",
  "key37": "WXEuoG6Hdv7tCyVWaBjQ24nntU1Nh33D4Scpx2DN1bHkDgrpZefZLJ5TGXoU7cMzkEY9CPTiJVgAFoMuqcctm1G",
  "key38": "2MYtJP5Niz7grSAqLbRWEKygNSf8CWcpWq9c3dahArM3bxrYdyFZQ6BfXNBMM7cb8ADGS8k7CgciRWX1QUNVW5eJ",
  "key39": "4UCJqwqfGhfShfoa8UydW9oPYPLuJcb9oGkhQVoCRnYibZG7WHW9KVN26F5tSqCAoDaqHzskA8HapVYw1pxzDx1o",
  "key40": "4aWoRws4u4AkQvSomaSmSqjcPy6qVLP6YkcmHHC9j334U9A44JUJeRTKqXkFL73GwMd7afrwGVqFtMYrgt4RacfD"
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

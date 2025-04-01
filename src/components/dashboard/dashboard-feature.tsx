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
    "5jNtKXDrpMnfxNNUTJ8b3DkSd3PGR7Ey6HhY8Gv3eUimAmrRQiXfWh74zuPGLJAa3w1xWogBJkv6mZifEUMVynwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MJr4DB5UyJnkBmfwf1cwPUURKwvVBVcuggFcGs6b76wwHkrUkBbM54mWXEhKJba7M24Jt9QQT1bb36rbbH2tCYy",
  "key1": "2v8b9qc8L4fwc9szm2mVLAfnugm4xPyXwUFDJAa4kAyn2CENPV5twi51ZcchTZCrvMfGTk3r917gu8Uy2G3qojWL",
  "key2": "4Tb4QxmQY8X3KTWnSPBR4YSx36rLutF3r9DFuSa7aAqySC1porKKH6JaoUUns6CkLPu2WXz57S89DykPCNLjqmii",
  "key3": "3WNB5gJem9ugFHppLpmhyAjw1usCuVbJCCHNtBJ9pow2FpHnwdWug8zBDLW7u6NJZhUYZYf5jgCMovxUJTSNnD4n",
  "key4": "USzbfgfn6Tzwatei5vkG5aA3U2TKV5dU5cEvoFNZM7VK8NVYVD7ZsTVaR9JFHpPYYnFsgASffMsgbryyDmaE9uF",
  "key5": "55VgszwEegLwHJ6GkYT44JnjnXubDnSRWPmeadfL5mGNFkQcq9Dy5jSysCAvLDQD19CM4qD1jpH3ZvDy5zNGEL2H",
  "key6": "5Qc56UiH9Baam5QYoPpvH7jA2HQA8Fh7RZSents5pzRr3VYswkEPeHuHuM5JXnKbF9CUp7awRYxUHrMezfe7DUaL",
  "key7": "5J9L241WiTiiUcCFppV2iU5YdPziPM7tCSLDpVWrMXRiNDdtYHAyTH1DJvj1WRjndEgjUmPkx4BFxw84xJut35Jc",
  "key8": "BiA2wfuKFt3qnkrzqUM56YWBhWi5ER6Kw2njTD8tEgFZ9fZrX7ZDmHo6hXpyMpgkD2N1bfm3HVn3Q4RV1PkzkED",
  "key9": "ZQMQ4Ev9PzAQkXEBR6JNxZpCh3tLmyoEYkVqJMD3zeFmRbMp3K8PgL7LdRB9EUpyf7pGzkfW9cZgU1F297nM94r",
  "key10": "5J5r66N7A8B498Lr8ejcW1tcWnecuwdyqtnnkF7nMZMyCjmHjyaKF9zCJ9a8ewrceW1NqPU6DwT4neTR5EChmRzr",
  "key11": "RtouXmVfuPjF68LWGSkN2iPD29GTfxYxagVZFVFbt1BXNWj8AnNfDF8m3BHqF2AFo2YNAzvxeE27WzgfsXyDYgE",
  "key12": "4ytUoAV2zqXAMLW6CVLFGKzLN5A4J6wp4cuubaZvLxcygrFZnXzuHDFFpTW6Ww46euZYU598k5Gy4nU1XBoDLyN8",
  "key13": "3DLnvsKb1KzahcuCyt7cb16E36KjjrdaYz7Q3LNfkwPnLXkTbny2qUgnQFStSLyLrapd2Y9o4AhmowfkaH2jvUU3",
  "key14": "4UGNpEo2Ca5MSfcc54dngT35Sa1KQ89bhuhmY5tLJYqWfvmAccexPEkQgnDGpyAUmM1D3kkH49o479M2j7koDnjN",
  "key15": "2mAw2gtEq2LKk2iCpawQWfajx4FKThchqjWifKjjk7crm8D6hFTLq72LM42ddUfeGvAgHBN3q3rn6ePDK3dUQFCB",
  "key16": "4jKUkwqLzjvz6DdPtnzGtTupwFDSdiYjiztknKX58HxhJTN4JrffzzWrh1778pm2gmppMYPPr5DdG5K5q5vTvA5a",
  "key17": "4LSZSLRDPBasrRKRkTxLU3fcfzqyi7SD37KVydbMHMvdVA39rqmJ9ECxegdBS9YDchRhQ6tNouLMGn1nSmmUQjMW",
  "key18": "31dAqkNLxDB6BndmLK2inqRH6AZVqw6hwcpg6ZmFfTwb594XUhhJ6y5YWaoYPxUMwNQe73PQawmzX6oRBXQGM6qs",
  "key19": "2aaVVU4Cte6MquQk9N3r2Vx28Eg1Zq8bWdRUhgDgLsVPwXxoRZ4XXAR6RBtJmbFTyGjZrTkCU2aJwHd88QMgSLig",
  "key20": "4rE892ZrZVw7q86jrLBwFmpmuFwRbNwCMFCJSad4EJHo4Fngyq2FFfqbqdz1VK1fbJiGhxZYUrRjBn333s1Q4jyp",
  "key21": "3tjpgwETbFb1hwxriH3t4bXx65e9FiAujc6aHLmLC9VuJ9UJfZFd5eerEgVncft8JwYC9fjbkkzeQhU4ADzk4DpJ",
  "key22": "25xRjoQuuPCfR2Y7oDYcXsinQvpb3zPbNwbNGgWr3gWwVpSCPEnurZsMZU9xhohJR3Bqv8vgzbkKCSWiiHZg5bcn",
  "key23": "3T8DfzjPQqy6Vmqr6GgYFrKAwWS9SpMUiktus6qHKjAQ99KHLXAXvEjuzeQavoR9veQmo8xsfDR5W7Vr3i1Ww95n",
  "key24": "YTskxKLp1beroZ3URMNxAbCwwg5Wqao5Gm2ph2wmnuFPiL2GVy2HZUGC3k2Mk9K7PMXmVMBdDmdrAdhPURBMX2z",
  "key25": "Aw9KJKuGH9BxAKAYJT3eAKU8Uw4cLtPeBh6iyVp4ntYtSxBRQFFb9gKovAHhYxBXyoeZWYsT9kFiSGTP7UgWey6",
  "key26": "61aSFzbtmmJLabReog8tLVUozhJTnfQZnKQ295pHfFoC8NTFLCEs9WBnkKcrHmHv9rKiey5pcUue9HA359y2BQyx",
  "key27": "3JTjq1LwzUKQ7YQ2oDuJekrmQBYiT79Y98zWp3gGTFcKUqpkZ1rpiiS94b2wyHHFGq7nLA3Pcx9QE9xTgbWRcQuZ"
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

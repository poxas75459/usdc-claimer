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
    "vMUTzEb9Q1Axma2RFTVVXrFZp3JMXeJjDTkMNP413k268uoTMvnMAr1wnCnMhMpgnKsdzymxzR7xRLa1SzC2xhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sqFn1QhCqNoeQCZ6Xp2GXyAkDRXGQoyot5rTauwVc6X9iQqJcKXxnU2SStHAiPKP76WxpTEoGdnyWXzcMY9mhXY",
  "key1": "4m6XPzvj711xa9mDd9oZp2zrr5y6Pgsqqujhwa6eZTqace7gEoC7cTpVyTvNjbPzfzedjtG8h7JU5CtcbPp8MZWp",
  "key2": "5RkGkFB3oRaHGbv1rcwZnsMrufMH6R1XfuXduUx5Hfx2WUaDTFtKvupM9YSPrydFcGHm13SRvxdvEjzw6JL79tgW",
  "key3": "2Yhhc8HUxA5ma7gqMaabRwYjwdVDwm3qRzUT4KopGVnRJ9FG4EJhrpRLBqdsabGpHNenx16TFpj69zB8fTjd68bT",
  "key4": "5uQzr4CUKtowzBtadyv5vBzv2H8BNqwXXT14zqxnAsNtCExNaz7PQKte3qVBoZXqGN3vTjTppcAR6hT89wnCc8xN",
  "key5": "3TyaEjkrJKatD2f7oXJHyeqbAV71yzzCYpokZPPrityH8Emuk7TVbG3YcUTCpN59bUfjiKyLZWaBjdDgLgof5zNH",
  "key6": "2KTp6u2Mrm3otDpWgbi5yw1whVeTXpFCAfuuQPh6m3Cx37PXeBMpkYFirufCvavVyfaDj3BzNrpQtQ2w9MBcE4Xp",
  "key7": "4Agw3y1HZmm6eSkLdWtjvprAoFBm3FubZGkG1uHzdR9wA88mCYTtkBqNpg4vFCMbeyipnkR3VkCtTPJATSERsVzT",
  "key8": "311G2AeqpgTLvEcSRJHDBtpU8Bx3F6D7WTmfvWsKrD23B22UtRAYbCrsZepFTBmxbxRVXHjiBR5yAZWAnHc7q4mL",
  "key9": "49EvpFVxMKVefb5YRZpMQuj5A7ReoKvRFFSM2JWLXKweMeUPeKrezLWcxtxLoYUnsN7gTqwynFbppf8FHSp7Auwt",
  "key10": "5SNpTXRq2LxAAYMWjCaWYaqHkgVtMfA6cxmLYoLQQDmJDWSJipcwZeCvhzpCh1LiBBap9ijivMm7C7xHhWvNFd4w",
  "key11": "4kTysy5WHhrAobftr4ttNw8N6CbzNkxQqwVQyXMjfF7rfmdu6q3o9YsDydHJcHU8kx5eHqE2VuxRYESizhJGu4Yr",
  "key12": "4ZySJbEDJt9qCL7uasJhy4HrGAw4Sm7jXrMsowCg319NpDj4kvekdHgJWXMJq1rtXnStWv393bywmb829mcbM7JZ",
  "key13": "2YYU1aMcEcnrqhPiL6XdhJ2KnrdkrtRxnwPKXyeNNMSXm1AB9YB2T9m9fEP4tcbxz6df5EpeKFTqfC8MLtGJcMwJ",
  "key14": "3CnkxxiSDVLvLcnkATEDGGxutfyyzn8JdqHkEqcgJaykkjaTMuXXTH2BqZjDN5ecrMRauQGcz2KryyCA1aADYZkg",
  "key15": "2CVngZkKBxinw5KTT4mEGi1P55EaFNnZpnZC9se8cEvmeXYDfHy5DJWo12BubeGE72AJJeap8XijXM47rBHiPE7A",
  "key16": "3RENSQJTFtpnLvn2y1Ro1f31J2XFoY7ZfnBFjZA9zpoaL8SGZZg3yQkwZYN9NamEXKQUdaBE5Y3QCeM3MEB1CKth",
  "key17": "45sJ81owiBGhLJv4Zui5NneoaxqAm7CemxudKaN1vXK6e3mXNs3R5WvNDetX3CvSgpnFpqVaNJUeSwoGgdhhcj57",
  "key18": "412cnb44Tqe8pvDefNHf7ewELYzHZ5Lqe8JWYap4t29Yn3Agaz6chCNQz691R4N8QdZ4gVQdZfPXXebLBYLSUFJA",
  "key19": "2skLnUnbjXPUpAxA663F4NnAnaDrnr5w3pTwYPQ12U52imLoEDe3kCuQuJNCADs85BVZw8UjQj7piXFgnEoa3Co1",
  "key20": "2FqZsK6AGmAFZddYBNyoG9jUVcefMz7DeeKMLV86qAfLgWmsJv5w17G5PCXqrVssv7erPAweYsT5KabCgwCZNUsS",
  "key21": "2xjhPHgkZmzYZD6d8WG23m2EKpvbCg1uuuNjguZQNxu7MX2votsTfiPyMkVKwh7XjKbhEzK3gNZ5nNSaEYpR9FwL",
  "key22": "5Biu3iTM2GCZEgX1igDskooqSpCeANwPdnubioGpS5K9SnZynHgAf7VJ7E7kJLXibTxcdhyD63VJjudCVTSvjT6",
  "key23": "2xwaRDiB7xfNkrsuFVBwMCyPRajUqeBTAAP7FLNzpvvJQVqZSYstqP8EVaaRv4B6LZBmvSKfGvdyqDpBatWKyenF",
  "key24": "SqFJ1HXr6V1yuA4P3CC5wMsXmgtTqG1GC8viPSsaEjgCqUm1cqEbwUar6Bz56RG3WJ7UUXHC8u9yACvGnU4Rjia"
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

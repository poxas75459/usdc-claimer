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
    "4Pa8yB9CqGav3qvCGCopFmmWr2Fq3fc5LVW2BcnSyJDT5G2zYwfC7cMpmwpNuCnkxj9XECNP3zvcwN2Vzi2wjqrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UfMqEsjVa4ZrhJwTXo1bm1kiq9v83nmjRPASEt6B3AxgqpCxsUyRcBCeuourcq7F4rWdZTvptXnwCWThLA3U7tS",
  "key1": "672QYcbXnGWoqjL6WrbWjBPPL59rT2BSnBEzWRo4KZfcC5rLPwnwRVwk3jpWNrFxFJYaqmbihQzXiFBWNCUtzj7d",
  "key2": "2Eznk8xv4CgueuobvQ8wF9Xqf99hp98N5wLXQVdLW2wnjENYJUpvAfh6u58vQajhAp2Q1GdyUahk1GU1vucnbwa2",
  "key3": "48TyKTdui6qQccJG5itvnXEfwTU3L5eHBneD5iYqD1PKQTz9DEnySxX9APFpTeAfAHmxspShDbWWoBmKokAfenCX",
  "key4": "2rXkLvhPA46GwCPXRMfAQFyJhcQbM4KUfBZyho797fZhVDrc8VPCKPU2MjohfjHor3tMPQnMZpyunyJzCBYxaQEc",
  "key5": "4XkzobmMxa8JZctPDWhmfAVjqW2zjoETyrDNppBhcSzDJdYs2ZTpvpbXMDAQZWgkBPTeUYKhyTKM5fnWjV3zRpwN",
  "key6": "5G38qFYzZZmQJAtxCPSTVTH8gcDiMXyau9VPcXZxL78i3Gw6J4vZmGvsksisPQPL5NAXV1HeHrFzF8GzYrmL9V5Q",
  "key7": "5BhQCWQUZJoYocjyzF1n7Qdt6rDmWMYHKXiYkQFS5sj8ei66Ry8dkttheb6GosEoY7NS1xTVGekwDycUxy1gdnCy",
  "key8": "3TTtGhZ65vvLnCxHTvQyBwMU6wTcWWyurFFii2B7RsyBqddh8ij8vpid6n17kd8UwCrTryCzjym5p8oQ9Jk7tPAP",
  "key9": "qinyusmKHQbvpu7ovd8TJoaexobotqKwSb7uxPuEsMMW1J73tyDguFybTPZqAE7UZqqXYAggp3cWYyU5bLtXCUi",
  "key10": "48BtnWGoAmLsydQsWMK6JkqXPtsRNKvh1ynwszCvUtNyqRDoeJJrgj89jAkExXGMr1eXXwMHhgb2PMcvaA5CBFNb",
  "key11": "5sFcr4DTaVAZ54dU31ujUMrpoSQmizAXkckB69piiXZk99zJZMVWvbfKENgGySsgRbtYWhpDbE4SEs7f92ukKkuq",
  "key12": "5V7arpuhfq2QG7oAQpMF5xcs5WdxZCWsa7YZvPq8yyBqrLDQpYTot2EGvt1G4DvKdjsAYj9TtdHEbr6h6Hznnxqd",
  "key13": "51Bz74Vw3WdcXhULNH8gjvtQ7Vxa5Bj4hCB7cjiTAaMmELcC5iy2BBB4YdNQWc5mumMXzvFd6H5qPVuQJ866dGQE",
  "key14": "4M9khmkfwcrE5t2S2zyPc16zq4yQ2XA1nBiJVgk8merz4C4DanTjniHGmGssXzqXDxjVekfZULhfRjPn4Y9ABg1F",
  "key15": "4v9NM6J1QKqTeyqtcGUg8dkLDGgEi8Ai7qujR6PGCiWYGjEad6DTEeTrbfS1PEgQLGZ381NmdykyeqA7y5oFEQap",
  "key16": "Js7qyY1mP2t71KH6GXE8V3ypuFpAfyM4q4yNmDGCHcgas4uy96xf33JrG2bcWNt7n82XSqvPwAzXemP4EgDzFz3",
  "key17": "5gpCkmBv3Yu21pfT3GfHp8dwUYA9rbRKkVrKNK424VtCW8msZW2GLTdjFXpdCAe1yjyAZbSNGj27m2ELk1MjM6J4",
  "key18": "5HniFjERW2eZLBwHDjzgE3DAruCphqVEScjGKgrBRkRUET9aZewcUSESvGjbhYedxPYjoDRPhBTNyj914YJ92Ur5",
  "key19": "3gdbsUgf2H8sqLjcbuEV8oZvjE19FgQ5cw85L7GQkXm2R4og7PcecNtn1ECwxh2yPf8EVYVk1ZFEgogcQegWT62",
  "key20": "5TkWX9RZRmx5Rnsbt6Skagp9qmWH3YjYsBmFEzBJVEQF7XDQMkHcPksub9zVygXaXQUpGpFtc1R5CCcaifvFLP9N",
  "key21": "iydbtVaB1Mq8k7ZdGMd4bQ2KWNQtWDqCBqnqzzMLVmnog6BAAXkDs4VyB5fwuqZCovpuy6wdHtZca4sjHY4Zu6n",
  "key22": "2fVUUdv5NaABy6shrEQzDghHoKLNARDvfRD5e6VLqZhJtLpM8dvvmEvpusz9w4YuyKYPctMXAqMTWKUgEPRACGRp",
  "key23": "38RVdyhYZBkYkppVHwamTuJKJJgh12h2W1QBrtkA5LRcnLeqJRYVzeLHwfBFmR2B3roL65Erq1UfAvk7cpWFDhKj",
  "key24": "4WSgefueKH9JwqzpBKppYDAM3cSgNU7JWFBWLkFubpi32z87bjosvvvxrfJgyrPzUF47AD3PUKCyxpZqrxedBeiD",
  "key25": "5kgdJhc2kR6VoW6g5xuhguc7DjySWvyKbn88tDCs2oowZacHNABw7Avv84ZLUx14n2sgpNS6A93UKzJP34j9u6sT",
  "key26": "5LY77mD5ttAxCniDuyCtjPYFyPBdC77gU7DY5MRvjMPMcmmerPJFf9ivWWtNxN6cSfSCWTUkbfqUkXtMHJkwJwso"
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

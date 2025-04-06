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
    "3X8Gwwk6PusCDuL3EEiKw9XPzNA7ANgFe23NL6FNeWMb8f4Y3kf558UYFSbVYRhhmyQzLuSohRUqCgn84vdyfhdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EzeHZtFTENmX3X482xpH8c1e6hdY6vNUZpKHLwKU4PBnLD8vW3aWHCwnb1qACgnswL67QK3pq1J466JGmneH7ZT",
  "key1": "2PtDR6fRyTrvjcYs9c1ZkkXk4g34rCrcgSUgdR7zsDR1zjbZMKQDHFiMMiiAnjn17zb68if7omEgzvH2XjmDqTGh",
  "key2": "4K871DQBYnCctTzVUCmJej1VN1s9fPo8jYsYqeoBiai19ASgJdiNbePpoAFG7QEv8q7Mmcg2A76fcZWDXPZSxJGD",
  "key3": "4tJjPPLhKAWKkpYob44G5b91bUhDciuhwcLr1V7HQqRDr67z6tCAJd2u1i3AdokGeFywDSLqqyto1WFiD1QqyK7s",
  "key4": "2DaZUgPgJ5oRpkoWuc7nH1DpnSsrTzLRcrD3NCyP789cKiMxZJEmARTzBTmqjuAcJ1Zr8EbqhAYdmtgNWSmQe58k",
  "key5": "37yagKufc8wcxBeqrJGpUC4KVYowwYG35zQxFXh6mVdtt7Y3BBPBipqoVv7WZedrR5x3jubSuh2KuJ1CM8EyGrWn",
  "key6": "3FpgQfoaawz1ZVX86QYYnTnviBBQeZnyqiNCgh5bjUeEGAAQbApVjMAHKqRdESEr7uqrMhXZDU1chZ1uzampPDcA",
  "key7": "4Q2i2pqHfvyvUJYjZCwReYWPMCqeUiQCdpc2DbWhEeJGu4DRAuJcS5Pu5tVG5oFRoptVXF26PHHBXfX2858uWLhr",
  "key8": "51c6h5zLsN72Q15vVWTSKiVHT4w29MGkDC2rkbgN1V2U8iSQpH4avbFbgc9jbJ1rNY2d5jS2ETybdgDDL9CBZYAA",
  "key9": "5bm1qxcxJvHr4V1wHCgHLAeQ8dagV6ZCworubq7iP5Va3VHCPbfcTfTCidRKd4o7rjkKfWmHC8tmtzLFZxVA17Et",
  "key10": "2haM873tqq3j2g3jV5iADe9hzoYjkjrVvbpCcKynYvAAbPvWxNptjsL4cV9mEnw8QkRv2wNyyDYqhW5UTEZeHrC5",
  "key11": "5u8zwmhG4ohzMcboQgju7qhnuzpJKJKVrybedzpq9VRnynpB8wvMr7dx7zV9z53oN3vEjBy9G3WmNRQA7e1gd9b",
  "key12": "5GP1NSpHB2qq3hs5NicQCic3ZHkGyNbyiFzcNZvu1uFy2djcVNeeKbVUKeWfw2UVnMCH3a8csKmrGBmHNKpMUNuP",
  "key13": "ams9sVd4ApKUJzWTHtZ5YU7qxqL1BVJDseAmNixfVZ1hsisyrGhCiZxWshPeFU7b1WG27ARNjneRbFt8FVy5sNF",
  "key14": "2nJoBcY6TpG9xnfSPFL1BjShXPFsN8Kkh4x9riQ43AxMk36eJosfTyLrW8vy7DvvKw8ttfEVH9HtYk1UF7SmF8ZC",
  "key15": "3GTSc34mrXBLF8iTzycgiapgunVG14U9wyJbKneQSzrrqTzrXR4Jh5WTaHKHycXBWzktMbMh7RbmmhhNxQBsedQu",
  "key16": "29YV1UoqfrQBYG34hCJqQfcMjWY2JcgAsJECitCNXqF1pjhPDRyekdS84Cgp1Qxf9FLQ8tEi43A5Av6by5bZX1gD",
  "key17": "4d3jpY1BHDRyPDT2ZXrK7H6PcTspBRxYftuV8mCuFfuMjJaYsvA6qeVXPgDNEptjENUdcpm9MtgszFWBsU4CUpGV",
  "key18": "3aFp7daV1g1gw1ASpM8ySQtCtNCxtneWUnrg5RdUWJPEfJxj4Pe4AkrH75qVe1cbNMvMu7GXvaqQXMCAEnKKEGtm",
  "key19": "QSvuXoh5xvQDCRiH9dQBw1okisQooUn1bqvrRkjtpYDTb1kJwxFwioWrqMw7gfgMke8LEG5qTZGWEpBLBeMky3g",
  "key20": "3cXsnLX6qgXTMjirLV9FU48m5s3vKHr4LMtJwPQ7z6gadsV8k9qFjjeLdpTdBTpYUBJo8LLLJcsK1TCiaF11uGTZ",
  "key21": "3caDL7k5vGSWaUVzpCkd6Lj9C9xYvhrPc8Ro45mkzQigZZ8mT9cByzFioX9hdYruAW9XMu4omDCFLjCGWLEcR1xN",
  "key22": "4BXFd67ds2QNHBFwSvhyhEuPfF3rZAfnAeZJreijPDNyfmqAY1f4Xuw4JwFuuJZ7m6r5h68i62KKwvEF5SoqQdW1",
  "key23": "2WRpVktdy1S7VU7HsSWbPSYsQuwyQ1ojbWv2fL4ixehLghto74JhqCDXox7r3qz63zqbhsZAzhjHejyWNt7FNm7s",
  "key24": "4uqeu1yLo6WDq5rTPN8qCB16CjKSnESmToZRRpMJumNh9qCSjNtaMAdtU6Un66dZnC84LV4hXuCbmNQR3XT9gr7y",
  "key25": "2uvRM5z1n8bGAJ1XLsqDTrM8emZqrqT33cD8hXu6yPpjf4jnuYkgsqeCPNbUSwMrX5WC98iCNv2PQP98nqnu4PM2",
  "key26": "2t39LYhdngBMNRaGRtsXoZ4E2thLwSkYCYJTsz1v15e9jUoLQgVhPRrBhsko9CXotyAdo7MCLqDxKasabgeWrhbt",
  "key27": "2MPMzn6AmrYgEevie6Ak9fmDYX6gpZccTkPkLzbo7yjHiBoFFwibMrBu3yexF9xbgMxKpDdywRMfGb8PiMQcBph7",
  "key28": "5MKkZv9PChfJoGEF76uQttLb1aNDn3dk66AiAUoqCyLEkDzGR5gYLQPTiHXN1DUb8PWZtkWSFf4RAgmVHWuUu2bP",
  "key29": "2FxqLKWddC5sMMU8dRVre1thEKFyoRzFP1RNjwBm4aGKZ4BdVknvRBC5zm7z8Vw5rEP3SaEQ4mA5px4gzeCazGp8",
  "key30": "5HwrZgJ7ndXuBB1DtmQkrfqKPYQ1h4UE59yCzEP8tmFBsbFvLvMTack8VTtKQjknBzdfFG69zELwMmogLCttT1Qt",
  "key31": "4RGhhM8uLQz6FxasTLkkkX9RRdRLZrhFJ9S2ooArgBqpnYW8egqCBSsVxgAwuPH8LpF12pg7KUZk9TUvSiC6vqMf",
  "key32": "2DyW4tmeurazGrGoTETKNS8gRyYgzau12eeWHt6HxQpgzwexsMrb9sUMyDZXYBXUND5m3zGXUXmwQK3bQSc6aosP",
  "key33": "2Et193v2BhNt6xgX15MVWjejn31QEPVZpZhM9LBXkkVtpeVSgJ6nRrWjoQLz8smwjgAUq9mnYCpFKVQXQQynYBPQ",
  "key34": "4aM2cNWwSoMme6yKH2K2xWJCgxkQ4A1nTXHKTv6o1Zwenkmwhw2yGQYgzWcVRzg6YMgtb6c3W3qcFQ69mupbPDFm",
  "key35": "48K7J9K6dzhpsPZ5ninnYVqk6X4HpuFQUi2gPAgUWVpgrhKf9Kvw88UsiBqU466iGfMzzP3jePXWQUnoRNmjsGBL",
  "key36": "4gLe8nmofyHcTLRtB2iA79wZJhCkHer5y4RgUjxe3NDs3At9ZPf2RrMVFmrzpAfdDg68sy6DPcGMgtqatjkaN3WN",
  "key37": "3WLi81sdUV4v6f4qw32WrW1DhPtL4QHbD8WmL7qdm24bTYqdNtbQHKpGDuL4dMMW8mVwoNGRU8JsssHqfCN8ZHGN"
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

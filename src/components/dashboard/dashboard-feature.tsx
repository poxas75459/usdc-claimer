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
    "hbPL6LetYC6tnNegSVDrbXhzjb9T67FF4RQse56QK6KGfLfaCewr67cSFZ3fZJ7TbV8FQMvA6SKG2jRJFEd1qn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G1y2L8WuFWqp3jLCQ9xAb3oMsBx8RiWpapP6kJaBb3cddPjtiex2Yp7MmMFvrNZSjLhyPkWn7LUeWPkFc38PCuq",
  "key1": "3UXrz9JSWfcpF63Pb9n7oRX8TgzWWDbGC1QugE7qip57ez4TrMrw1M1jYjHio2wroqFUsHkjpLcCPfYg4crtYQX2",
  "key2": "3nED97JbDnervRWZN9HGocP7YwcnQUT5UJQ2DHL75DBRNkDe7u1NbkfnbT7A6QFwZ62TYbtmceeBhdBCZ5r977Z3",
  "key3": "33Vx5PSQBi69Lvo27G7f3JwaHEWr3rj6vzDH8rHXZcpN57MHjEa34ZLGNZPXGtmjnJFokeNDtergRj25YdthJEdP",
  "key4": "3usbCwENqWdmdT1ciPDQWWcp63Q8CPMkvhaHwin9o2TUknTc8tZf794J6baZw2LAfrzArGXrA38eJ7zCPgPmw9Z4",
  "key5": "5QJy4XwVFq85BSZhrcKR9oPmXBLezFd9z8xFpiP9wt8QFbq9KrFMtDyzeamX8fa4KgPwQHToM42SEcNRefh5pA9G",
  "key6": "55EhPE13Di9uBTrLSLuCBSpWbfkBdJrTFyBGTpxV4yrn1aM74WRSmcgzJ53g9r2gR1JoTXBMybFPZ7pnmvvtdrH8",
  "key7": "5xs8bFuBGToF3VaGyc6ptTvhChzpAm1WCz7awiSpEDpVjwQsQNZPNWMp2YKvy7L2BZSa244UBWxyac19yDbBUGHn",
  "key8": "5eg1Eo75FGKgoECc5U6ZuBnEv9RhnsxdJYujwdzXUmsUA7hLP6tmrUpuHVp4Q4QR3icgjGcYQu5dcvUbNxjP2t3a",
  "key9": "5wmkTYeMjgGa1YiAfDPz4RU816Pj8wnNs4FRS23swXkhoZqcQLC8Rchp3n5GHj3LBwYygwj7ma1Qy5zUhPpqQL9L",
  "key10": "4sSBJcGpMM3JkKS5MYvWzg83Y8PnSH1DQbwgkTyKogyJcZMR3PcdHaLBUsZeVhuRkaNVUkYhY3BpGLRcdGaYW4CJ",
  "key11": "5DfBFS4MNyPyXR96vQ67HDWthSuqm84iZ8SrA3wbGWDDWG6jj4C45AzhcUhdPA2ZDPzbHH7quh1rmVXEJ99ciY7z",
  "key12": "2wcujexXDZvS9QWF2ZMobU2Ya99r141LC8ud3tDpV5z5QGgNnZK9UBozpyCKYKzpQMSetsxsSegSwU3XC4FZYUKX",
  "key13": "2jRTGZyexrhGhwFYPoKDLKPghn34GWvXdAm7WmmuWsuTmkoBxw45qHD8WFqm6dUCn9bSwMRjALXE17orLNUYN6hY",
  "key14": "5YYN4dduNmcvZivwc1UADRCMMaEXWpGkfSwZNDdn7rNpV4HyuSZoNi6Nx9pn8UKmDeo8xFNvkLcsnxALv5v8UTBx",
  "key15": "52u9fTZfHxD8c9Nj33mPv4KVHFiGAFQ2WW2VQHDgf8vZMduikCY7EZjVBBvxZwiS6cAaq6LmHEiPQhJEY9FXzTwb",
  "key16": "4h5QZasajjNQrgf1eHvJ2WNS6skz8LrBd8WjepD6bhUeCfGxQVeNT7rozgFk4vNiC5s8fQvN4TPiiSzaUtBMbF2Y",
  "key17": "2kahkfE1gscYzgNGG7S9YgwXgcwjsQ9BQhpQ3KQT3Wj43Kp3FHGfbDotDZAn6eZGN3bWh4ZQvACM12wZJi1cYLHb",
  "key18": "2oKwHJYzYVy2gbJW76SA6fuVUcJDGK31roCr5FptRkxwaU7kN6ddTMQ7bwPqoqTxsLRBoDbQGQiLUVRE7iSc1ZA",
  "key19": "61QNocmGwqR3gyAJG5R8tmVrrweAdBz58NJ55VFizYcxFyo6d4bv9XweXkkmz9ZG4DuGkQ6Ef33uNgxBEx8CNRSe",
  "key20": "3BuHHKN8mAqoopjHXLJJwfmhZFwpP5R96k4T1btb49wMa9TUThJGdgm8dFsiqsvLMRg1fpq6nAUNg2mPXMvBNafc",
  "key21": "5kNNA5ef1DzpLibsCVwNaSdvi1RDe2EfnVhJrX4bYMx4vor7AetBT2HDM3PwUX8BTdfmG41AWphEm6v2nMqQZ5Jz",
  "key22": "3iXg8PMQ6risnh75mBtrqP4BCMLvdVwu1gQLVrfpxjZ1QHkiCnRj4gDaVuV4kdVsg8PVekJjAR4L7WJMQkDvfNRf",
  "key23": "2Ne7t9VWEj7UjC9GDsmzYMzopCrY5Zup9ZSbZYwzziVb57dCNtCsd1Di9yFuvy4YQC5ZLSkNQ6TKkWPWGkiZMHmA",
  "key24": "33n7QYVamj2n7WceBwMDFHU3SxxyTFLXxezRFXdtvmfhZtHrPQtv2ND7bAWDDR4SkmoTE3f8hY6hghye9sNm1kp2",
  "key25": "5N8XQ1SqJRoM7vNDoNoUUsYB7zqG4vYfNwe42shAVhagUsTNV7hxsxjHrUPFDdp1XfUJDQXQyeiPGYrV1tHvgVRv",
  "key26": "25o1htpi4xhzV5mJ3Lduw4rxuN5LNyD1C3bMqxCNhh5icHHWeQXThjTLxzyYin6hoMPkR5hDpzsC7ASzbURHqsjo",
  "key27": "tCV89rWBLp4RWGADdRcxBrMtjzBMZQdMRwL4qCT52nX1NPiZ6AvkRaJiTZTjxNd726ML2tJJaKV6nq6PUU5yCY8",
  "key28": "2odNLjz6b1kbexS6pjnN7xMVUvcmYoqcRcWbip2ZV5drwGcTQ84NLP92tHEZpytPyT6JikgF8FcNk5Lhx4k2DW7R",
  "key29": "4wkuGcLztKwTLxekHzNQjKGQvivE339UiRHFRsm7GriNCp5CCX4mfBfs27oUvsWCjyDHH6C3RDJzqVQKiwQvLcfc",
  "key30": "3js5yrwiqn8Ztqi3kayn3Y4UByvA4MGAxZM2vikZiwGLEvpM1kFCtJucEFgGWtXdRxcze5RJind6LAarn8bMuWhH",
  "key31": "4CJpkdRw5JTtDijtiwptPMTS2zNKUP2WR7jj9owmQkMBuKZV3STSUJg2EHeQN8Y7ytHWAveiVm6mPK3Cn7xNXQZ"
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

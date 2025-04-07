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
    "b1QtJGS3v8ozupafQufj6J6bhPfeyQgLM3GPss1TA7qJY8F4GFfc6kBQ8CuXF2P9vwdkUimw2gPSXiNKw7ndeYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfnCpYtyLxTxSVHcrmTBR4aZZoNn1kbLDdZomsk6LLLxxBsrQbiwSC1ZRJpc61jijoKmVcLiR88oUUPD8Eke3q2",
  "key1": "2bnBU6tfn5ByJbEKARUhBLdFw8N9ZvLwQUgkuupLALppMWdePvh5SJ1mQ4BqFmAinNNUZae1xa3jqZbnbFssG8X3",
  "key2": "5cAGrAGV8QNYuRQk7LYGzLrdWP8V22NHevk49JATeTPhTwLNdhXab6KmdyAAZasow7LbS9KdUg9Q8M2H69PxTrKd",
  "key3": "3sBJb338mbhmdy62yWdKxjqjhm6WPg9Ha9yKLbfCk8esgkWLtMz95ZkKFEfZ1maFrYqqgz8Sfc16CxEXzZr6iGK4",
  "key4": "7LGPGgmv4V3Wi5LMjQnRTjW7424r9wJytCsULEGUFMJfMdctf5mwSdD6Mtsa3RtEzTxXrZ1daZropv19KpVDExz",
  "key5": "2yh5pEiyaLcVysU1pbBCD9B9MH6VL4xSSTcTuaWA2k2bB29Jkz5KFak5mdEWxAMHvb6otbKukTdMyt9ey6SgcXxC",
  "key6": "4CqbqBuzVAxZSYZg7CmWivvJAagTG7sySRV7VdFJws7omBDmZRmBNnYncgpXmo7iLB4NB2ePvS1Vt8Gquq34zQvq",
  "key7": "NSmtnVgGmw1sZtHMDZhUYYhNb1xEm3A51aL1zhxwhjjPrktdpJVUeWqZaChsj4sWspSxby1u29dxb5ezNpX1uJo",
  "key8": "2duUNhVjd4Td5bLKH9a6fTKJRufB7dGVwgcjWYFWiTjNqoqTzNG6fGzKdbSpbQQLdFBgTexujrB1N1N2zyANJWbQ",
  "key9": "2KqroyUauy2zGr1wBHa3jLuiNjo62h2EHZpKMoNAAaZr28pfzGb6Mi1bQgQ8fDd5xphndBUww74q5Tf8yv3GxYm9",
  "key10": "5vpr2ZfXrAkNt8Bvo9sVUqj1e9G7mpdwxfXpYakzM6ZQ6TKTfzNv59Rubg55nMdjnm9D3vTyMPfW5BJgtYGHcrYF",
  "key11": "5rc2xunihoZS33UJ3qoycKxnzCtHRaF7WvaQ7SwnHKjqEAMCzVXE3WaiCJi5ee2toAgNsZd8VaCC2GrebPMhg7aY",
  "key12": "3PDFir27rvS3gLVLBbkjSqVNhAx8uHQsscQ5k324SqdXkpcU9VFV84Kj5uk4C5dz3EPja8wimYXGV6ZdXcgjuFn9",
  "key13": "5FNMgCGxENhzMX13BFvKWcYvwYuPXAawe5NiPEkXYJwHBHJRf7fVgHZuXa7kVehEhM8VNWQqDpEZcdVpymjUGMgA",
  "key14": "2cBXqi6gp3D66MxpXuJuGPPWeaMduRiqQyDVhKJVtXxzUqvZihDTaCA1yNxhpYiMsMvDCicXnNWgn76y6ZRZD3d2",
  "key15": "5eRm3XSciYp6e1TtdW2iPUNPAM2LZ8iUQLEyKD6yrRDHNtkMkMREea27qjWJ2JqeqtGNs1ibxTjkrrFjN91hynnb",
  "key16": "3iP9a5oCphuCZZ7SwJkPxfHwb1CZwJZVoo1RbCy2mwZR3RuctLmVVj1sUvY7gmVzGihnMprwXWvxVBB9jaDr51y5",
  "key17": "2bchi3axFESFEAX2ozjtNr4NJ13J13gSwZ9YitNgxyoY5RTYrZTu7t3mmiatZQtw32T36kAABXnCoRAey7vCFgxR",
  "key18": "62LApVr11Mcpe2t8FuQoPg9nZvM1GKz4ZbE5QERCWRQjEBZt4FfwhzWEYauqctiY9gLCYQubnF4DvFhKixgBeL2H",
  "key19": "3Nt6d2Sp3mwRgEuxLjLqu7YqXhjPKum36vHBw3PKCtCZ7SNbjzAw26VeoipjfAVZ4cnSasxLWxzx4yFzwPYpEZb7",
  "key20": "4C5e8oudf58EEe5eGq9HEtqYr6ztvsJDC8rFUNhk6dZM5CbWuwHMteM5cbb9xvSrhfej1gB36ofcR8dxfJX5pTVm",
  "key21": "5M8KwRjadcqe2QwaH3jy3V1w9Vdp4gjvBgQuB7Wy8hR4N2Jj52BvJwVYgJHYfVkobTwDg6spaHXmzGHjSdz2rRfm",
  "key22": "4XtoxCRqAdz9yZd2255AcX9z6dMYhekf5kPUzSArHN7n17JGjrNR2RmKGUL4H6x1qCifc3SZUz1ki7b2hXdeEJme",
  "key23": "3a9ZKnUzjL9fttotqyHu4NiwRbeUMTdsNjkG37jY75jitu8RrTVamH4yv8bVSeDnX53dsd7QNP6m4KDBjeTzCwZv",
  "key24": "2HCdgJoJDxmz1sCL7zgZh5Upjqcmo2UbP9HoGKMUgNoRNgd4opVtSFwpAtxVHnnutmHHwdsFG8GasiKKhxA244eU",
  "key25": "4khzjoUczUHbKj9wF1k5NqcazuauoQpisREv9rMaVjPUxZK5N7pGBXm5KLy2VfdqW6KzEuCjpAoW1Rm7VFED72vE",
  "key26": "2uJZxYSxW4CWtkUu2qCPGFswPzspuyN4TVxjoejGPLp3K1AnALPb5fZPWzeYouaGApxxvYnXXJWWscfGzkYKRkUr",
  "key27": "4H3Zb4qpuVKG2NVdteXFYmiMcifQZM5dK7s1ZsQrFDasyzrMgxTHCZcMyLQ8jYnieZ2ByTAuiUXie6Q75QT2khZJ",
  "key28": "5wUy3FGBx7AboWY5aBaagHjNaJb9NUKvjYbfaEG9Hw5svezfiqyim2dfgoWVRyqd3XptGhHV5W5X4UNQ8K6omK6r",
  "key29": "4XkWhxodXeHXXur8823h4qPZijDgcYyVFuE8MuenewvaX4GXFboKzybEWnAbE9BPP6CHVg5UoD1eNqcD5ZHdsiZ5",
  "key30": "37uqoKk3yEWWHcbfGdhUh3ypBc6zwsejxnpUxth2XfRvoxpMru11GUfh37oGdCZSzYyyCkyvUNoGcTjnD5uw8eKA",
  "key31": "5DDYQjBf657WQ42dR9fLtdBzBGAjq3JLuGAwPQ1cDRMotNGnFnWSY1m8WJoq37RV7sHiHJE6mhxQquYh4sS121CX"
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

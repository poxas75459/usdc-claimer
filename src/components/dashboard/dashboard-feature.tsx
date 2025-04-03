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
    "2zHos2He9EiL83uCKnseGgkcoxYF1gxyfeSTrRzDwCb2DUmF8knQdfMyZtrDFc8iw7rRDxadBidumaaWsXXAQNKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GqV92TR4L3v4PEyA5gLZSPMSCpuufZFU48WmStJnXWQzD4dti24WtGfJXKZM73Ex54XBguJ2gZN9tAbKixzyqoM",
  "key1": "3BPJRAJBAzWAoXGUvSegSPgKRaCoooyQ8Lo9FMCcERcMhwhoHzeoFed7dfTGGKghEBxa6QNrKZnaXjFrdgsoRyfT",
  "key2": "KxTSB6h7JQuVmSXw5o9nWZ4bbjTK2oU8swa7J1jyAarwiSvrfQ52kj8UdgXrksnnx7QGPbfCXVz4nKbR7heVkzo",
  "key3": "372JELkhRmmpUTF5gnivj7GjLjw8Ve5wsZQ7ZJmCSAo6wWBGYEpYMeue7EqyNLSoxkwrApXLkkfLaTs1iy5hRgEY",
  "key4": "23iCWVgVBRUajoDzSAJS4r463z3mmHxHnRXQJNRByh7APRRcbvHM88EARkM9B1tLZx8UjuTSvCfsTcxWZZ2e4cb1",
  "key5": "3qAWmPBg67wgWzxUu2PRUSLFKxgwtniLzgHhJi7hWUBrSbwM43d2pXCxVKHgEEG11PE1qLHNWcUBxe1XKJcdqiHF",
  "key6": "5UY6GNwQWxsw3GNmt21nukfGH41ws6E5rGh6sj1fPetunUwmNUDgt3mUKUxzaEMLtKBrpeQd6UHneWXqNMYfyXxn",
  "key7": "3H4eBZSg7dwg8aXXBFg3yzFoVTJkm2G1kfUt1M7hMTfszY7s2eDF62zVXHcnp95uD9N2V2QKg9ibvYoUhdKYSmEL",
  "key8": "TpL1px4tUvUzJH4xb9UP7zrZsV2fHx9F6Ha8jnUGDuZxG4MBRNuVSiRHqV32DM32gEgAx1rHE57qXYoGvKeGoho",
  "key9": "5n3t7Tc83e8mbt8Da5LzNGFUG442BxQqBgVNJmddxs5t9boFbmXtQeP6Pg1Yw4czL5twoucgRTW6mwjpJ2Bq1B95",
  "key10": "5S7pydiqjnxeac7oXQXEHys3UyTiLBqjPeSCFsszv8mmGbrjEoYMFZYDz8tDrG69uk3QVStnvWMLFCVBaMaPGDEi",
  "key11": "2LjmqvRST78euzC5DvBhcoSvxg5YCnkN86viU4rscED1yjpXDTsFQoxL322ktZoeyTXP4iGEpj8twJwxEeU6HHYL",
  "key12": "4bqbBXabcAfudcgzABcR3DKkwQFeCpn9J9VL9bdK6YgJP4VkaqCWRz83ZMpdLJFTMdghmQcU6WEZTTD5dvYbvFEk",
  "key13": "2WACVHn4aUAgcB11CCLc526Zu2RcJwHbYzhYDBj6qbEAPinuW9KcPN3SWwUveAWsWZtLEUQbLkqoNQfaTVQa6nF4",
  "key14": "5UjsqYMwDEtMwEmf6G8bcpTVC4AFQKXkQDJ5VdrPSjfWQUsAH4Z2jKGajuggGGFwyXb53wVnxehjxRzRMZ8DzNs4",
  "key15": "3Gk9aojn8TcRhoWv7pnqcWubKWvvkZDimqxhJRVJK2Ekbf3AmmvEo5Yu6KPCNTcvhMs6zNc2vsutJdmwdf9dKLkM",
  "key16": "8uBtWj7oiK5nzJuCp3CPPfECxfz4K5Uanq6iU2A5Y4v3yiqNpTRRVD7nSZBg8mYetj5xrGJTHBbo6WM5YUFdNS5",
  "key17": "3yfMtVwEthYSQ3RVvmYeTe1U3YDCEc6UewUpsAckMv349MzEMc8ooVhpE4r4UD3sgSUHMekLZKhyKbnDE3dqsB62",
  "key18": "4y4HJJtnShDxexzLxaRz2F4SVAE2LMJftyvpyXsuNzLpZGHSagJx8KtLzs3cUZbyoDS2eALEPJvboA41oJJ6VrqN",
  "key19": "35rkVhHLC9Z9G4FnVDJWHpcQ8TvnCj4PRXRUufawkMxjdbE7URyzmrubef1kdnsRvUKLUTw9Y3ECgVV5gdZqbvp9",
  "key20": "61VfiMbM42VFCU1UamWwzqPwpNpvBWD4tfL4Ex5br241TU1VavWycGPQoSr1NRcHw3DX2HqhjYxBFz3LB4cXCAcE",
  "key21": "5BJuBeSEoWiZR1iRYdhqzMvEm9XG5f4TcWx4bJdTVG7Azyznfpxvj11mzotpGUdunUPpVLkG7i2n1JJ2QgMWB623",
  "key22": "3KgDxj95JgiKLmduNCUWMViX6KgTDmeHj5LLWnY9f3NAGP17zaTu5pG6ztFCuXDfwqmNmYvBjnDrJs93CWvcv46L",
  "key23": "2onV9QxMcKig51srBdHgEU9ZDnBeq4x9V9PGTfZZ29dEezSBpMfQcL3bAXRqoo7uA2GU1UtistrtD9Gh1rPcESz8",
  "key24": "2K6zQcmZegf7hwApmXRHupCWSMbSR4c3Sie3RoocFVGMDecGNksTFqZen9tNwrmUNeWy4oMYWp47CXUiEL2rkCYz",
  "key25": "2AUGGixP3b8mEhLzE6znoN2R737C2CRWCYK8Ke3QkDmWFJw6VeMQvj9Tu7etvCNByj3t5S9X7s5QpWP373FCJqSx",
  "key26": "5ECnU5LUSeUhdFzFL9Q7QZgws8St7vxrrjdud9DgmMNb1ynMbwn7krRmRmkyHqrxUpLoMamoeaauLku8s8KbYPDb",
  "key27": "4UVU3JD1ZSU7LRaEroJfaGi8adim34QfbHEM2pBrdbmqWNZfahFxPhT43Aqp3Wpyqknen9kg3XB2SUAUdGcVes2E",
  "key28": "iZNcNmAQ7N6M1JfNpNnKZ8ztgQyZLBvcuEg9Y5gMzZTrCefT9PNseGU3v4EWrLRevxrpCmEGnrS8n38QD46NZpc",
  "key29": "3bxXsENH8kw5rk9BMENohWqypCtWL7KBh1Z6Gbf1F8dKZoeZsuwhDxgWuyP6WpJ2ANgpxUCqBXGBjpu86VoZ4YTR",
  "key30": "3Tke4gEHxzDVK7Na5XZKFBTfKBYknqyQaXzttD4EpMnqLr2QRz2n5425GAZRqAW6k8uqFRo86WhzsXk7xWR8qrQM",
  "key31": "5MDAYHoupM8kYJEKX66aTxh2uAYzy5AqKWLpbpRqgf5ereGRi6gTYURvquqccW72pAvNCDW7KF2GXJAGcjWMRv4n",
  "key32": "3ampUYh6LcqJRiWjUdcwswNfaxFFvbmMV7SP9iWzV571PHoPa3puAQ6rTcMs1pAyBAfx6tmTWj5SqPCW8A3kpBb2",
  "key33": "3gKzG5ijQtX6r96rF6dRxsWM63yeHnP9msq2XruD8FqhWCoLitWAhzfZU3VqzGRJTz2mK2WV3E8zqBcKb2RLDpaM"
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

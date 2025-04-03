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
    "2TQJuoVh3E8qPD1rh52NRxYJ8MwBZqrLscMjoRX497ED9bYJdPB7esRixpcUDQDfxVGKMxbB28AzX4vPAWchwh85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SX9YL8LVk4qSRp5ftkTZQD5uzEzcuEyzbEcacxbGB83aQfcQJFufoZWyE6kwsaWoScmbQjjG2Q3mBunDxcnheum",
  "key1": "5BvWpGEFKGBMEdLTGgrziERVYtmxW9f6iZKj8aCbjt6inxWTqq2Wg2XQDWTG4xbeUPgNs7YbyXy9j4CvMTCLZHz",
  "key2": "2btgHnokVDRBJXpBtHKLw3gsD1aUHzGVmx1tNpn16hjgUSobHYkRHD1zUFMFsCkZhMHS9FdBpCaWdcJdVFRjmNNX",
  "key3": "fe6uhh6QjyDtRE12kBQcd7pwfgiMpZMnKkhpaT1zMnhLCqoHeGZd5nmWEVfR8C3bLF639J5rh4KoZCQ6iy2C7dY",
  "key4": "dErCWG7AbGgB3Zd3i2ESH65rUPeeLxiqHPYN2DW8gyncnhnmaq1tzrGvEoJAjUp4YYuej5auUzLa12d5c3vwbqv",
  "key5": "4AEtpSoDhgzKZQ7nWdg7bPfZTNiCyWirwSeoNqoG4U4JM2TjwefFwF7jGbLUed9hBU8ij9awPzpTRkT6zsnA36ru",
  "key6": "5iUmkuF2Ty51p1XLep6jzXXb6XGZWxAEvdNGkqmN1a6V7NC7FfSrsqe2E4PCzbKmjZLcnitVDsJMFyP7n2KVoB86",
  "key7": "5jJfFCwZtPb3wqp3CUXEdx8PZPhGy6HiVzs3bLXpcGSCbTyRDdkky37f4h7c8aSNDdaL6CL5ZL11jgxjVugjGeU5",
  "key8": "CswMqwuZvvLmQQXF585cfqMMRqtDEuEXiK5LbeG8bsL8vLaQnHoVGNYboyfFeWmXYeP2yhRjYXzQPA7QhpCZbFh",
  "key9": "ecTp3BTNLmvY9mymATFiY767viJYVyiZwrqH1BycKQmA8sxAHP9E7yyStu4VsGYobXLLrPwz3NWNmwarG4Nc2r4",
  "key10": "2QkYrifDMqbPiStXW93pAznjcPiF3cya9UvvZqAVPB2PsCVEatCJrLpdWCXE9XnVuPBQ6jpPrQ35EArkwhwnByns",
  "key11": "2MDLxHXaEjiKKN7cBmThUTzkr9uv7rPsfJ64JsfqmkzEj2wYk8BVCoJ2fCZr91gW3zEJm6nhpn7fcEBESpMzHALA",
  "key12": "4qQxXLuVFbJ3kcnLgFh8mTVvCrN8YiypWLmDoKBEjGrpz1HxZpDS7SEB8KQLFtotAYKL5MJZeHYYymY8baLS1dy",
  "key13": "5VVh3qsFxx9mwLqRZRE1YhCi2ccESVihiPXikdjusdmQXZ6pfybWmXFh6cTCSQtEPaSHuPqFKNRSMPtu89e1dApv",
  "key14": "SPMLopWHPiUsbmw42qvJzR3Jxw2c7ZY9G9u51Dcen2EV1z1rfGo4pMkWrJtMQChjKviXYytJ3HvkNXZqx4eCdWw",
  "key15": "4Z6emHYZL9wp1hZZ7i6Xh5c3XDC7vpGSreBJAyitChRZo58GwG48zVJmcSvMYXgKu3buqoWYsQMczy3wNHLhj9NR",
  "key16": "3vyBniEb6qB2Eeedr7cGaWEqTdWP2RCChL2kR1TQ9ASeXGgBDZz4DwWfvjNDBVHAF89pvgXRmhGittCTRY3gPMs",
  "key17": "36oBckoVyZf3e4ceNugs7xVeSU5ghJn7GyXcGiNzmmms7abKETqpLTRo1i6KRbbk6BwZKZ1YmBDAnVBQPvWT2ryY",
  "key18": "4AkiezvpRXU58gFz2RWFT9puwS2RCgApPeaToJHY26zJdvbZkvp8XHp74xTcXCEwZk7qHdcRcDrBBNrjfkrtscs6",
  "key19": "5ca9kjNA7f5gpe6ecsp52aF52WuCjNxKJV1eZTsnQDv4BDqEXxj7SDfCFXvxezW68BhVVB2YJGAEUjGBjxjtWju4",
  "key20": "KuVP1TWsjQnjGtierUayNk2ARjhHtVgnPq82sC8sWKDEWmEhFLCmG3B24ANh5UrZDBAJoh4YjjHXxZemuHtHGcU",
  "key21": "2suLu4TTyUc4GaFPZGBotAzMCph7QsTnhcHjkkhaWgyHBFmYFZnYpPWaVqVJccTjJkjfwG2SNUQJPwUY6Yvr9Zq1",
  "key22": "2qXLaMzmM7PgMqMQCQidoQ7ADP8H47kuyawvwBV6LHjroYXM8614bWy29jLi39hLDyk31ZLcVNE6KQLLUiusbx2c",
  "key23": "5D6UorZPWnYQNg2SE37ECoB6zhK3CpghQvAky6NatEhporADMw4Qc7GUDPEHXgL3wijVoppz6yKk9VFCc5EiKKUB",
  "key24": "5Eoy81SxEtWWwZv4GNAr3h8pgz5s2CmNHkESMr4hJCQLV3NAnav36rpbjYpRs3CFnQcN56fvCUtvgtwhG5TunKzq"
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

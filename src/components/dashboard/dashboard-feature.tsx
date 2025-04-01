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
    "3hA79pG88QGfNHEctBWQ9iXjt7H4pwHgfsGmxZy2B7j5xGTDhWBMZHRVsLRpxfohhB2hYv1FQEamyMyJWGxd8ZhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m3vKuse9FJyZL7djifcecvudDyNyUHphuHTZvAnmRBe9jem4omwZqbHpwSfktNsiAh62mQk9vwgLgw5EB4fjMR9",
  "key1": "3d1o8YZEKhHAw1tDgB3T5D3nd2S9bes3dsqX4UZVDQH2ANGBiVC4kxJP9XniEPVqWbJRxJnbRZqBvoon73uv1VjM",
  "key2": "33eSFizQwkwAxLBrduEhkBvc2dfp3SKUUzhVcbUMjdLF7SdxBVxX5SzMkp4JeTRT7ZEPvZqCaHqjWehDxcuG55oG",
  "key3": "5oD1P1kEQsfpJZYnEogNofzcymP2CqHU7XQyvyeyT8ThBHpuAAZ3htkJL47cKwKTCsm96Wn6YanWYWZtqKFDDe2S",
  "key4": "5xPtQpoc3ZiT5kboTG75x7Uxt4u79YkL72h7zaPLBVZBLEuq7kSiCrFowG2S2hbU6bBEYwYepphoszRxonpj8cHV",
  "key5": "4eTV4frfKQeXaHqd4dvohbr5wuxiAd6iwrUavi19k7A4x2poNLFJNFpzDKNGcJjAPV8tKmh59wEgnQeiUnmGQxTL",
  "key6": "5z2aF2Wxc9dvQmrc6ticJA7pew5zJSAmAPGpYV7Lj4C4JVacfx3sszDWHdwSuQe967nXabVjTLMaw9AZ8mbyX9o4",
  "key7": "2CDps4z3nxYqNeSaD8UAenToZZDKZYgGG1fKNjb5y8GNvhsSWyVciVVTWVixWBd7TNAmCXjoHdwJs1hEmZx9HMLF",
  "key8": "35wN9zqbLELGyJ7PbwTAvyiJonuxz9MWMgizfupQLVXWWALirKt5MPeDYpLMtsThW59jZatXWAkbDvS85Bh1kZHA",
  "key9": "2Q4dPo1EgvadhJoHhbSRkSEpCntnsuVTNMQoEbRWLvsehC6sQtLa5SYwBYrDujruvhpvNJbsdxEfMLRAVdfRjzSy",
  "key10": "2pJ6bDx3F6qo227ZqxWKP7ZefAMFAwX11ey2JLpqegHEmk179FrQbPEVeTTwpd3bQbWbRDs9JVumPwpqVwbwjJY5",
  "key11": "2pK49rMzxUCaLYLkZoarfgM9BS2uadERJBwv3jfnRYp74mMYynABMWNRy6tJLA89YLo5EvUzznszH8ammToyD8kx",
  "key12": "3EkiciM4cCnxQvQwZiEromSFJiUKsjf8ucvjybiRzKBDdEgH5WQdTSjVKsznbN6CejETUBHgorRUNiVE57BkUJyh",
  "key13": "4pa8gr2SPFnEmfy5GkLgi7Rnh4o77QefMfcv2k4quM8KNMgKZPagDk8xr4DbUkF1JG41q6t2fMQUsWnqFFfoRKY2",
  "key14": "3YGgv8zX1KuMDG9tGfEw9VqfXvZyoGLS2o4TkaprRSswbRetLkfAciRqZ5UhWMN5BT1thcpJbFV9PAEnZ4RsEaPM",
  "key15": "23gpcTNM8vbbpkc7mKR6bcBkhx32kAiUHwi2mGSFzdPT44MFAZqhrej6JfZGkL1PmUjEnvtezPtroijpaDiUzRg7",
  "key16": "5Cte5kWYqHUdXMysApSz6TEtELUfQjBP1cSPqdKYZ41ZogKPYMUsQroDw9h81zKD2kugnpNduBX8NoadeawazV69",
  "key17": "4bL1fBC6bbTKczGFREsruN9LTxFrYWN2UHS7R2ZQi9Awo8buBtW8qjwDpo4N9fU45HEoYN2yNLwNaZBdq2whv1F6",
  "key18": "4wxR7t3gnK4tcmP2MwKQ9nyuQ9dimqZYAdgZxGzNoPhn8d4EcxqeR5YeKYnS25nU5GHojTx82Tod1uBYUzr8tQUJ",
  "key19": "65kqfSJEuuYhFP2bVGy2HEYg7Mt7gYjcj554AQexw9Qy9Lvs16xtdyq48f5sY2FcNYrysA8zuCuNoqifr47MBgTM",
  "key20": "2MTUziWfdPLkDCVU4Fsvs9diUV4tfjcyxYXZsKAujj5rhDQUuqGC4ta4cs6e1Ybpx28cuRbZmnP5orQvCGQv3yNP",
  "key21": "63rmqs6NvD9uW6hYPHe9V6UD44fC2bw4yZH6Znam2fZHRbNg2RWzweVNRSbXRuruxbDcbihGhEF59uez3ujLfXXd",
  "key22": "2RqgL1QBLrARhJxHgpJS2m6WBbghauA6fTzoydaCiiam71MQYuL1iKF6RESGQLe9r7j1S88x18D7LGtQ8XppEMsU",
  "key23": "3pjG9eXfNKdfoSvNpN2UWzeAqdUUL9FMeBuktZHhjqwhfuaHkS5pV3nrwsYp2CypZSVXMfYM2ZdowBUNY3Npb6JW",
  "key24": "23g7r2AvdtSyPiB186rNyRm1N1YCpVxE2CpBypjiPngfaBaaj2RpcWN17GBztmSedpHBzadyzmK4dPYtiWAFBdux"
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

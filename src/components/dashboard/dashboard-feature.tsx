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
    "5WinMsp4nfb6s26LXcAgAB19h61Z7HYxbCV1v66a3dQeyikAwsnmwyDDeiWCLfDWXPmkQXpEGJGch9BBK7c7o6U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VwHoC8CCZC199JmGQzRpDK6tN5dEGdVwTny34PJunxLP7sTZBedjtQns28JV25ttVomYf98jWCrq2s9u2wzdjVL",
  "key1": "5YsJHbz4ziuxbJ6jkHnrywzk4Rq5X4zVo86iQKKtwKcKzZLLxxkbkZAKD2yGYZZbNxHF1ENHUatX923U22ajYitC",
  "key2": "GBgrvkvKBimWA6eW1vL92oBpN7ihUw5R4Rx1UH1mMAQ8MxFmMv6ykprufj3nSdDyakQFQoHa5gX6TcLeiabyrs2",
  "key3": "3QvkGgjbjh46hvwAKSCBai2R2RADoqN3QpU4PWSPnSSxtqjP7cuMjCzzfcVvoqJpPiv7qUHKzVWH3WawN1DSVYdM",
  "key4": "FNocYmVwjNs7TXSd5YSgQd6JNfzSX3xSddKmWj8R34ujiTgkTkcx5tvt1wS2vvjzGzThMEG7YuQVmNZxT7XTsd1",
  "key5": "3JLojjx6NRnPZDmy3qKHCuc4rvsqB8p9HpsQKndJ1hHrgtS7RnebHvcGBo7E3R8fND7ywEk21cF8n4x4EiaQLnJ8",
  "key6": "4tPkvkyK7ETn3ZUwtD9PCmYoLwQbUgzafNQDQu6vaWdpqWVVj82eMicpH2ZEEnMx3eZKohBYrvDXVzDtqzbjs5Sb",
  "key7": "3DQwzMKpZqZZt9RTgVdn66wM7gcJTKESbPXBJxAxrWJHN8gbQF4Qsqg36Y92HEBRxUoFFD8qCbn1fgNDtyN48WNf",
  "key8": "VikUSYrFiQpu7fSYNaFiC9qAUS88Rn4uC5tSLLPsNiA5cKcMuhpnBN7eVxfzocyASHQVWcLnAoZYmJvEFV83h7H",
  "key9": "4dUQBYeF3iCg9LSJd6xa1Zvde2Sjm7rzVV8UQfegqzyKdusuPDUDAJWcBHDqX84rhYHMmy2zdJ5wTDViHiYeSeGY",
  "key10": "D1iNmND1i9sDSqcgd8WHjEKbvGxqgKXKWZe2bEP8xdF4FXW7jmgYnJASU7obtp7cKsKXZDE8TTfd7mByBMeNXjW",
  "key11": "2BjpYMTr8HYj1m1nHeTsbep9axxSpNHvoRrfRJ8MZ46Amzu3NNtyC5mkQqdj9hifs3wrfKmuYvzLq1DK4Z8cZkmq",
  "key12": "2TcvT8Bm3X4ZFAiDMEnzDbRveriFsxN69RCCbgeA2m1ciGWQh5RjPmKc6wSd8CR8NQkp6W29CZFYFQzhoe7iWFz5",
  "key13": "4CZh15x9DZdAgeiy7aSPfWy68qb9ZPYVv5MKcpgaXcBHARcP264yv4BkVfDh1cAgWEQNwQiHsiSkqDPbXv3s5ps9",
  "key14": "4bMRYQr34LbWNTQjUzQDrQyLrHgW6SbF3Na7pN9X3rbeVYRf1gT8jCTyb4erC3Rv7p9o6oZztHDJtNKmdFypw5CY",
  "key15": "2A4B4qM4vSVQmXuLAKmt5HAbKKcz9v6HCkSQYrAzzMpyBAU5CEsabpAr8zq65oMMkkQzf8E1pw11k5YXEYKUdFbV",
  "key16": "4bWdb217bA15Ns1AJiVcpY69DWocPrgeKKx3cHRjAT7R2PVu3fwDrZBBkWxYVNUrZmaQgUs3VdusM1k93ezuMoME",
  "key17": "24qiHKneWYb1z5uAo7wP5yE2yawJF4tNAGTksfvBirb8n4vzAeeFjuw5Gbq5QhVNPz4dC5WnUZuQiqvwCZtHP3rU",
  "key18": "5zQYExcrdzFGRZ9MVF9XCzpvXriHiaQWJNfSxHKq8peRWznFG9urda5sZD5G8kaG1qThdKYdcDzPqRXCUHGDKDbr",
  "key19": "4P2Wz57sdMwmxztS9UsPW5LfQUbrqSjEv2YeULYdW9UqGAGpMsZyZ23Tp3AMhj7waYbVDQxitCC45mSnJKQhufzb",
  "key20": "2rfa9E3WNgRtg646VoVC8SvYcTMUa35HC1V2yfDhiom8R9P8e2TTQf7HJ8hxG8k27Upk86F1Zmm2cyHsFep7R1kY",
  "key21": "5QKdJACkSCd8SQW4sXnF82JFEWzb5YgkM3nv69TA3LTKHh7XU8FLzjCL7CmnfxPFqL6ayvgo4cZVZixNWv5btu1q",
  "key22": "3jF1erwfRcVYDbyxSwRGqEduQEhEUHKBDHKgEGJvJwhmcrXMAdZeHUo3GUbBNLoExqrhc3bLZmoQV2SjQcUVSXnk",
  "key23": "4SoPV3qtcD5U4L5A8BbUaa1hGJD54CbUC58rtmXD8C7enKobVsFCwnAHuJmMMDVhJPubdWhpkkaBomGG4MdMcoTM",
  "key24": "r5DYCm16XLXrMshz3avpJHtTknYvSPYdqmSmoDhEBuAeMxuW8wxLVC3CU1J4DPgtNcbgdZ78qP4PvnjSz4CG1hQ"
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

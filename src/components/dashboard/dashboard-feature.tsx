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
    "3V147rua5mfrp1KTvrCHjefNYuzAkSwmX3rVeTbybEwxjxVtyTG6pLArSPMsDFxiemrB3eswrR83KZrBizyq57zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64dxPrm7dzh4SjEUScm2Ksw7dE9mFVEvqZEUX5XUVZmAeck5FEvsndUAvrsyLhTQFxGFC94xdQsEv7n5zcnMtaH6",
  "key1": "4ue4urr27fTND67cS7L81e2Ah1vS3AxsauGVtnQvhnyaWmQu9ipry5cUy6wt6RJYB1YT3uSSryZJBW3GCzLHqVUS",
  "key2": "5Las3GN5YPDYCt4EbbZtgUzgsH1ndYygjWbJkkjEWp4vQyhX1QD3y92yjLEK8oSeZuUpmqhfQ6KDSEw6XaEdp3WW",
  "key3": "3q2PqNwbavND9ucfx4VDq3ZvzsP2ioq5UgDNXTjY59kve1izsU9mucfxDyi8b6oDZscvTm8aA8rZffMCYivLjDJb",
  "key4": "4i6eysLuBr2HjPk3d66LFmETrXghiq6mT46HmYAxg1oUQ39qbTQR5aNAEfRFynLxDUMJ6BA4K9weDnAy3bpw1WEi",
  "key5": "2gnhJADyCJSwMaiAnLdu7xenmBzpyX4bhVcdf8qnW4FTj9PEhLvsMmoLW3Titq5PHrLfQBDtNSPuPTV5reYLzKKu",
  "key6": "5nYs5Nj6QSFHo1pvvFWrrvMj7sLj51Mi8ef8ZvXi1nCLYxHU6b8fcTS2Ln3gaHZbZSLC9vEnRZM2tRp23pDExbqa",
  "key7": "2n9YvvE1nNRDdVK45EsBQXga8NVbETdr2X8Ar848wUbBJwz3kpv2rWQhjMduYhHxBak74A7be7XB6ExMTPWpbuGa",
  "key8": "3S1bHNx9hGX76mH48WrgpjT1suXzhSM4HiixNiBtfAJBgsyxz9BW3jXQN1eiqcFkCLcaQrduihPsi4WJgmp9m6V1",
  "key9": "2z22mDFBScaYT7dJ61equFWtrkyqBCLMowiJy6GBXyikzh2KQBAwzEYrJ6jG8NdGamHHQ5RgHRo7HmF1nyu96avh",
  "key10": "3cMLY9Cjpr7BcFvpzH5DPQgdENv9nWzSktqsPs34vgnMraQWRXm9i1pCunEjJxf8J11pB4PfHPaZCzeR5obKjrk8",
  "key11": "5UjuPe1yDpGTzKyMFLijLJz3Kq6xYTLLkDoj5Sa4kr4REg69JxNzuRxKQj3rriySfcKifEKjgvMMmhCFidnbq1Tj",
  "key12": "2Dtf163bsvD3sPWvs6jXPu2P1DrEB5w2hnFwjahh7KQBvPVBdxH38dWmtybKV9vTEpFZEMEbZoeU4Fnx7uwBukZR",
  "key13": "527RTEZ3eKQ9SyidBbnXEYz6ZRusRcYx7W7hK7Ec49RxbCdnG1AETbE2qoDtfbTfFHRas4WFeM3ge8YWPoYV1chg",
  "key14": "3QXn6TsTh1ncUAbni9uqMXrbS2y2C372rsu6qHFJDLMWq597HzZJXLuGLEZdqUvDEdqmdo7njExiKzqZHgLcFaz5",
  "key15": "58gUe896oVhi2YiMdCcaxRTdQYZoJpiDNtB9GhxcodSttJac3QPhQwDEXoukL6e1hzRpppN8TaP3ixNbDkRvmAUM",
  "key16": "5VW56bnJoXnpvFajsGTWP1Pb8cWYjp3dtKoc9s44ittzFNAY8GZ6eiQACdD7CConebspMammKHSJAq2CidReUxf",
  "key17": "4zGw8Q5yu7tRDu1n32WrsqkaS6dLZa2ewzH4aiT2KxE3UbGx7FXjT3qKacCsLNfA133jou1UywreABNnm9d5Bvci",
  "key18": "3MCdQB5nqfsDncvnPNHG4hsf9j9dayw6CDD4haw8ixZq35DZvhrivsCH9Lx7mvrUXnGgMVMiBdXRqrrcuoxVAEvf",
  "key19": "55tVUdi3BGQJCSmeC9ZcWpSPnG1NwNoQrVeehrf6MjWDtXUoSiKajHsuJBvV4SoUfwvD3L4LEdJWVBjM2YSbkZZY",
  "key20": "65aoRrPiSsZ8Fp3WSTUgXypKGQ7AQXr48hvRaw8ZKDoRWRRM5FZLefox83MENoNvNCZTLaSLcbTRarNzN1NSnnvP",
  "key21": "3Yc5aEn3oUAm2DfSY2xGLrL4sAQ8dxLBGN2k2nZyGJ3mjRMjwvCMbCTjmrmnzFZyV79MazLH3AqAqQVe2GupKmgS",
  "key22": "5AUspftNFUXCe8Ky3pMRYPLAYi4wT8xxmUC4e9uchhb6G7rPh8Z3H9D4YY5ZggzJZz13tYFw2JxPsoTWJctyUa24",
  "key23": "4WTbyJ6QGVcFPPZVvowht7dxkwPLjrbtgNeV3n661BBm3ToDM9nWxKcxtQdCU7SHXN2GMgfQxVZYvBuUKaXQgHEd",
  "key24": "36SKq2UYivoPxJmzeGEbsGer5GQ46gNCeb6gzrLJ3sZVK1CpsVKdtsb85VoUZpXutpgFEyUvxjr5N17zB49mcbuN",
  "key25": "426CDY8rK21kdqH6DWu2iubENewpV3EzbZzn8qV58SK6etMywqqBukNbfCdAfgAPZiqFn4wRVCAGihpEjuj8mtED",
  "key26": "22iZaR8VBZ8k88f3X39bxJa2suu4SzX4QS8xWm1wGrenYcogMhWWMiHAKYv7aRhWimHzPiYKDa7vtidhYK9qghHb",
  "key27": "2Y2SNUSHA4Asmd9VUbm579kEfpxVhqtv9JdRFGH7Pvua2ijHVfakxKNx8MppBZdtmwnHSYBt4WtZVFphyygLMXtD",
  "key28": "5H4wZCYqM1qV9XPHM9tyDo7uMXPudzq9MXYXJa8bNsrFV8ANof9rSUKUtTPquqFDc7ybjNvpPFpjT4oV6dnsRevN",
  "key29": "r4Xr7ZvufCob5e6rdsB9pramHqFFwo33f3VL6xETHgpsiTZWfZLjD7XcMDdT4j7oR5ijjbUtv87MnMiUvXAdzYP",
  "key30": "27sk2rvkX1xf5xti2P9mZdU5vhT43fdv3e2aYFctwAuyu3L8wYFL33UCnFh8LccueYVEdrnE2ezJn4JhqP42qENV",
  "key31": "2jwDsxJoEAPacHqFjqvq1rzGiXRvmJxvc4cfMRdeRJHmEF8KZrkCBqT3xy9knECH1SUBL1guQ2woDfcjDTnsiSXa",
  "key32": "24JpARBngW7gX4nYRayVp2Grsft7G3U1JehnsnTburfi7RhNTP56ioiSUk32ASz9FUEfyAoQtnsp2xYg2TZUh4wa",
  "key33": "29yfY8wND1L5f2qK6yBj4RbbJcMwKzPvPAsXCP4VbGUD1WrnzqyMDx6p9jyWQHebLwcFfneSdxxWJFV1cM5FKm5G",
  "key34": "4wYHiz57BXfMDkxEKhxPyBQVLNZnThoDdMBNLv14KhJKRbaAWUhtym8YH4JxiJA783dXvBDjUfVSoeHS5qv4REKY",
  "key35": "2WeritjUx9tEUqZnGAHaGz46xGaY5Dpxdi6ZYiKRNwdQwuipCnAE14SjdXWPy74CSVp8RVGWs4uWcvwbau9QD9oa"
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

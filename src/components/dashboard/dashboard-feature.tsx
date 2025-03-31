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
    "3qWgPymkhvkzcXYxdYZqRxfk9d6FxoCh7KjsAUKs5oSnD7KJ2uxwvfaoSQ7snwS8F846vWpk5XzWEJoPzAsNtpoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bqpG4MAAxVmFqHuV4BsZPDqh5dvp46vfNFLi8LC77Gghf9anB2gDomm1F1d2U9Uzr2CMndoLhaGi4SYbzRLLNCr",
  "key1": "65zajbL5GpVtzMPX2EmP5LwwtbiCJHU7vVJfKfyP2kfCw1R5QdCZ64krBc18r2QYkgdZAmc5B9nBZz7qzYZmttBX",
  "key2": "5t6Zn4DFi9v17aj7yQ1aEPJoSLj5xRPXWS5iMNHoy8Fifh7YxR6temRNrBbAazsSTrRXEwWGY73m2VBiy8uS7fo9",
  "key3": "5rP3YNDVVEaBe4WHnHXX2ze5HxLpQB7JS1YD7tZ9c2LXNcRz5oLhsvG8hhfTULL1A9FwNaT4hA4ua1A3XYnxRQjY",
  "key4": "5d91MKtSVhv9XdPK6UzzhDJ99AZVL69gnZ63N8pnToXECi5jg95kgAFmsZ8pUqCYBs8x5XidARU5j1ir4Agd5DXF",
  "key5": "25ojhaMaZPZcVEAXH7yjyvZP64tLNckQ5ABD1f5kXNMyMGcm5RuDvxECDydGYEtEQccGDma6fFR9MY6BN745M196",
  "key6": "3w8pbMXUbVQURMv35WABH5J2u1wepgT5H91PWTkf8eEV6pS9o3oLYxUHbG2KjnvtPpfkE3FGorjWKYC2soBtS1bq",
  "key7": "4hQCcrKBdAqzFkre6dyZAjj8QjToU98pQB9LrfqLvDkS98j8KKRttKrKxMHkyYx8Vz7nqLoEHnrR77uKr9fdoVfU",
  "key8": "2YowMX9PNrD7uzNqQD4qhiotgsJmBTKJVVa3L4EawfJToDBqDLG8cLPcyCbW8cjipHt9Wqe2CPBZhyo4NxWtUrX",
  "key9": "3ZjQpZwMVtVdQZC48wP8L1Sadoc5khz1Y5Y5u58SAEvvvvqooktsyFQdPRdDWTKc17DgDSNXNNMS3UwV4pXcwVDj",
  "key10": "3wTCTuMobiT811XKXj2mcxrF1VTGMKfhX3jtXZbRJDWMLGwc2oxV3GRCXaw8afytYsB5auPXnyYtkEwDxpXwLvHm",
  "key11": "3HueEM1RziDnM8FL2gJUv139zfGxm56TMJp4xTRse7o2H9eaKt9H7veF6wRkBHCtY7gX76gmNkx4YjNbYtrfWMms",
  "key12": "2oyUrH9pA2Z7fKGVq3X1vNMKum9KroEzbv5LZ1NpU1qcePBpbEqqZnwqiVufFJsVzpYuYgYfirRoZuAJfUreSfFP",
  "key13": "3xFgbDpj9TsNeeXhYYdH1x8yfBvd9KUvrMFH9cakeK13z97eTh2JpTZDJrzygNbitW2F1ZDaRLDZ1JzgZnu8VjeX",
  "key14": "65uwto6BdxZ3i9qWD8NAJMWQSyK3b3F8PbZA8XpNc4P8RnB7yZETB5RHmRA2BVK6vkgHAmyZmnVHGmgisKrbmJJV",
  "key15": "2NnNW99vzsLRK6pNzmvc4fPQUH6DfYjgmmQ11RCBmZahuohhiHPcUg2MCfvseBgkVoevtVuYDF6NATvriscUBK2f",
  "key16": "3m31G4PjwpJLH9fdrdmKsbZ4TWDyHQGUMEH521FTNCkHsGSvQky5Qpfp44A6SZ1VmbL2XsUNhYWK4WFbHBFw2PV8",
  "key17": "2zqSHy6T7VLkqT1iemaX7szH7jJySUrH8zsuDJ82YtAdZcd1SYvNjntbpHz7r68tCKE73TbazoAhZJhsRYcYRKQz",
  "key18": "3URh5yB5Y9KsQXQNHFci91NcKGAgt9CXHGMxGCuR9fbPLQV9R1btPauxJrLKRa8SAnKVr92vdgxhMPjfYm79vUGm",
  "key19": "CzRoJooTZPL53noZNNnkJfAsqrKX8p9JycKRgTW6GpUhHdCBag43P7RVeDZ4jLB49jhv6rvHLhLgFd7PnZobtZ2",
  "key20": "53JE8h9NqYVGuLDgom4sczSX2i6pnpdJFg6P9FDvJdTFYoaKkrz7FsCAvcSDr3C8qdUGs5sbTxWndoBfsUgaTVGN",
  "key21": "F4ig1iAkAbJA4gbSp5BLjLFVgdd2DCWsRnq5XBXF6VEyLtW68sCXu6bYSPGmEAuu18YSrGcLXHCsgtEUGxraTuh",
  "key22": "2mmw2ETHw8yt5jf3zv53vaKcE4AzdXHRewHfdXUGVTMjTfo3dMkc85BggApYFGt44p26vk9cqCZUneJfmXk8y32Z",
  "key23": "eqAReu7KCbgqTQwNE5187xmxWBxjwy7tR2evHkDuyDJ1YXrRwYuScFb4xyMBgm7nTdSDyxeExc7SGyRD4LfejsQ",
  "key24": "2gD12d8B3tKvVePsPoeQ4nuTvxo6US2LJUfRfHzEyUVi214LynGcRLFie8agmqbZ4bNc9Mv33HteWR93y1SDMVmj",
  "key25": "4uExrUiZXzuvJcBQBp5hf9y3451SRgcgUoYVJndeGbBUtNuB55oCnTU6CzWtppYMZbPYMvXFWVb8En1hRFznGAEo",
  "key26": "24RUQVLYY4AdgMgxWERNtr1hQ5ohYosi5wGDFWgERotXjW2ozZs35vQTdoNa8FcPmHjzFzyygrH18jCdRs927hT2",
  "key27": "3QP7r4UCGuNBkg8PwBwWVPD99RaR5KGHX7m86tmRcjFMJFGqs4v8tuThDjJeri8puBWF14mW9K79qj7Mzavbpmsn",
  "key28": "4DZuULFNhQYbJ6U4Kawpym7WN7iYBpjUmzNA7SrvaeyuK6Uj1aFf1WL5biG1CLKf1cUsugCeU5nh4gsq2n1kokcS",
  "key29": "3tCyYUTSh6QbmVh1pTSsMAVQ77uZrF9W8KHdGBSEnTxvUMddzeDp9ZUDjoqi6uhQP7cSf2zwJxXT1c7sshaJqixM",
  "key30": "3enuspCHhFpwe3qvdJfzJDoo73PTziqW1yzGgtGU3Fmw37YPHz19WDUTDEKHvpzNQsYDNopGMFgQGKHbv869A9PV",
  "key31": "LckL6F2LHHXd9V596bv8PCWa8CyRey43DG5re2rcWpehP1Vb7r5yzejQr7oW8HjqpMHew7dVDat5otuPSTQmWKe",
  "key32": "2jxSjVw83omGNoGBUnXRtAjwNbPZmqXB5g9vyQyVB8aT5QhqTQQ47mc1cNca5U5wMxY1MvstjbKPcKE9crMTi1yk"
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

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
    "47LsoVajipz8YpRNxhEoxPfofRCV3naHqK2Dd4kaAj8ASmkf1nkJCfUGHhUrdAFiHcvMFQ7Kx3tdTiNZVx8kbpR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5itFv8v9DNssErEK4pHfNqVpDjy4aKGLJjvJ4UtGzTmwAyo8hBFyYJYz6zz53Y5zUPyfMma5CfSmCUHKbWMfS3vn",
  "key1": "S7uoKhRqFWq8N4jERbnTCcEDcSZiyz26yvSt2ry6mW7DapiH9oMHwzUcCrYjmFyX1oorBRAXJNEWwCxp514JNU1",
  "key2": "2KFT9FcV1GaQksRa34EMZiampAUADgFgqhvToTB6suxKcsfERgLLbqHpGvmoXUAQWPk6MtKmWXauHRRTnrTrUsiw",
  "key3": "5fVz27pYgQXL41eSLiQZK4SeNHVjQZqwrxhK5UHC5r3PgHaLJ2LHPysNDKRvU4WX79rHB7LHtZ3tXY439FBrZbpo",
  "key4": "nt4ETViRZcUvNVwB4hJNswjJJRgNhkuzCrRXi63jJ65E9FsFN2FXWwxVPU2ru3ZvE8mHpBqQxUnE4YtCyYdFf92",
  "key5": "Gvu67ig1JWYgfNLRAKSDhtotvrQL4FDxYS3AvqYUcpiAJr8wT9pP6VWUpgAytiytidHg1cVzfVL5KtJftQJLR6P",
  "key6": "ce7sPnNaEALenBCvBidMVEAb5mPX37nEfmyugV2agxCHUcx72LvMBzKtEnPgNRayMtsavg7THft8ka9jYcXEJq2",
  "key7": "4hJSbjFytFnCNnAciRtsp4mJ8oirQasXurACGEWKtvaLcZDYTaopqNJD8BJCLN8iy7w67eCE3d3PEUWutkiqgQAk",
  "key8": "4idY6pXwUq4Bp65LoJ2B4Kq7W3v1EheyXgkJqDrAhbyKwAv4fFPuHoAgWRrUWDaJ9gT4wPU91nq8eU7uAgD4ntSc",
  "key9": "4RfsBmepY2gMtsp3Rg9VwNNqVmN83gp2pnNRpmXapnnYqLDmRYuwEdSumM6BYQ3WE77LhN9gSdt2TFk5bR4iCqKv",
  "key10": "2gcVzkXieHSCJ3tr2dfS4RrQvRuPSNRmDdyDHjWzhBCYYxbeTmAHDGy3odns5gRFcwVK7m3FugDEAAS9FytTArxi",
  "key11": "1pwAZcVjDaapMjrmrcJhnugTdoMqDx9L5Nngy7nL2gqtucW6XkUdtxZLgzWgHU16Z6ig9BTNUvtERXd7gDdqhCK",
  "key12": "iB1YPNarfnMVqVSF1hCdbtrCZvU3PAdnnBvoacoiBA1B6A7LvnXwy8EaXFS4rDxoYkVwWVPLbWbf38AA5J3NJQT",
  "key13": "21DoGTwwUTk53gnJoPkLDe1zSvvKSU4n5YZbVF4zneSXMFdZLaLrK6EpYByjLG8wy65qWwV9EUPQBQhaLHwMxDce",
  "key14": "67hSgWBELpaqFRMpgDf2pdUnKG6ELEsLbYrxZr7anMqd6qXvXnEqKfrGDmSjUcJDKB8F7rBNnxrTgAhNk2sSv3Rp",
  "key15": "bTo1PyXebN4hzRrwqhPPk64KVTsukBRLgdXySdPQGHxfhBpbmnZtcuiJdwYPNxWN5fJhKjrVthWTWjnemdqpq4g",
  "key16": "5hqqf5uQ3cwSWPXE3o51fzW7Cg6F4TU99AfqvbpdZ6DGWXfdAVkrQQQPMSEfHEzUezMiwMeqTCYu88hLoCvFmvtr",
  "key17": "J72Li1eEpDGVTjL2hrPoxazp1nBRfFptoxFk1BuHiF3iXfXqa2zD53kmJRU75ZUrJpRJDmG9gkKLvJAh9rRXaYW",
  "key18": "2RgnbPjXLCK14N6yUsZr58gWQJo1S41b8f2jthgbhYfbma9HGKT126997Azb16ANg8tzCHhg9kL8BtRESsUYSpre",
  "key19": "57YtDSrXSo6ZfmUe1Lyp5MSqtEUbYdSzpQvrRTNQUueY8hui6F824mEgnVkXWdUyWAZFjtmXN7B7xsYvgEF6rg77",
  "key20": "3ZUM87wmmxpxqoWXVmvFGhkPCATWUfG5UGKzETynmqxj1THhutWgzqtq4ZGnfC2FAyLjUrsqgGeNy3fToazNPXLn",
  "key21": "3e3FwQv8p8PhAXAtNSXDvqntUe21Mq7axxRdY5H6ss4CBLchjpVWYvCCb9kDHhBDLqNZbwLMYbtMa2JQGvAhJmCt",
  "key22": "fD3ZeXP7g927RcwewXov6VNnarUzi8Q7roQd4VcNQLwy87ZwmRGfjHuWRfQbQ3riozqqSidauRxwiG8jWU313iy",
  "key23": "5uooGVTuVBFWYQkGo5AoxrQYhpAgjEVQ4tYR7EGBLLTNzoKUnRnFTW5oeuFb1Qe8Cg5N4TnH5CRfj9sQiw732T2H",
  "key24": "o5wyNF16knNJXjz7w5vvofgPzpG6KAjT6Y6xfBZx4xhaovhbbDDNMYyX3P3xK7HSjwE5xZegAef7B72UTYmZmtQ",
  "key25": "2XsbVCPjU4U2AfCU5QiLB4moeQoZGnhfA9ufgQFaRxWcPmzkgKMA2PS4x9JkkHPcjNg2pqeuxWKLz9CRdsqJmaXF",
  "key26": "5CwU82x7fj1UcyfQqkZ7vhf1GqJ56KYkZDKQNFNAwKHWwKpXebgZEkYBKMqohyUV3bacvAsiSWq4VbrxbyQw4qHY",
  "key27": "5MrmXKYoC2ze5JYVWgKV1XxJJ2CaWQcXvNohNHQJZdXS9xFRDjxATQ8X9wT3b9FmB6mZ6q84ES7hTYLUXn4bEykh",
  "key28": "3TMyGBMLff6Mb2M6gvP9KJNTABTSdr6PeXpVAL1tCuSfgWbhtp43yF3LZuy9nRVCizRjoruZGMYieFb74YefBdhS",
  "key29": "3hNadTLT5nRqpNcg6LKyfERawaY8MthXTifrcDrbWvqbYFwBxMrTonpVCFkXW9YqyGn1wBTfmRbBCqT1CEKJAoQa",
  "key30": "4MS5ME6pghRD1UM7u2yZuT516eLUdTfBQm2iy1E236WHD5rVzcio5CMs9HFYwQCX3Jw2QBzHAFSKebLRPheQXRP1",
  "key31": "4g4afa3BsFPBtDytRtGNVk9W1XnMwnsmBtgwbfAnB3vNd5bqBXbkn2aGrVBWxJ5ajp8dNHvNx3MSgFh7QqgvCVgZ",
  "key32": "2YcCnNDDjKSsXZ9vxxuiJKMUgDuQDusq1LQhEAq9zngkSNnvc7D8NWvU57Ai7cwAxhbTitzwQxQujyfEkTzzJYxd",
  "key33": "e5LTUYjaKi8XhWD6CbSVhw5V7rxEdk6mXDTeTFqF4XsaKQZqhDJC7M3zcdu1WLpiazcMtMH7DBUZymLwWbNZcbc",
  "key34": "3xmrBt1w4FAWxBiSUGk7DLt1snzUJ9o6fUg1Nt6iYpcLSFLSMcRhyRpwiE229w6w47q2AsewckSW8TGGX9Pn6nVE",
  "key35": "2UWuhuktJXh9MzJPoYVQAf54CrfZjJ4oM1cx47w2JZ6MpVKNUXaRBpVas22Xus28jkKJ36BRPPkCvL2gARkG1ofF"
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

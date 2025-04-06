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
    "3QzABprfPjT5WF3oh1A9UfcyGsWygTJs2dW3U7d9Waq4bvvf1qfaWUfuQii32nugiqvbYrbE32YBNQUXr5Ycn7qE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SJiG2NCnNKNNaeUp8dXu2xtFoEFXoVmxH75HqXcwNBMZejZYWWjNjTenmsKmcoKCwhoHCovGUrhL918LRF7k5er",
  "key1": "39bCruY35BYbw6J5U3CyT2dtmxz1eRPhxnCxqQL7ntcLoDbaKtv67xhmbbEyKgCDvj63YqenjEKXSdMm9crVZhQM",
  "key2": "3VjWMjnLkjid3b3t7YCuEHGWH8EADVLB1gprxMT5Co1cHDxKSr6v5jpZy1HZZ6vQeGzKTEynXSBLCfLVsGxTiG5G",
  "key3": "54RGNk6YUKkicWQ5FmXBpri84ZxYoPk69ymVQphjzVmbTESy4uX8Jmrha8a1fDF5wPeFrHhn8CXbXzB9PGhxgH19",
  "key4": "3bjj2jyb5xF4umwp2dF4xo1H8XHkqqyFM76dqxprj2W7FwLFJKDEuoW3C2LQxUeWaQcyg2hC8FoitJC5J3xLwno5",
  "key5": "Pq23KzJrRe6QKxSJr3ZYcGRRFmnFk42NxWnzCqTQ6kbzrowHDykEvskZT1Mp2tujfQ37jEAKUDsrzfuxqXWrFsm",
  "key6": "2qyTyHQLcfosYHt7tVdkL2AwqvHYrQ7PrYNaYW3FBDh6kUbjTsW6dm9srAz5YrWAWPfKXXMqrJ1BLDewmqWEiRoU",
  "key7": "3eDC6Tw31knS1DEy7bmxbQ2kkumspssw3GeydB86D9GLpzW1Uq8BSatbkXSkyA7hZrMjLspLGznEC1cqw1ApWdMo",
  "key8": "5mjFarhYxRefXKnYi1Y2mEDfjXmHZdFMXCg49ZCfkPgBwoznFLf7rqThYU3N8uQZEg6MXMoDwrrvX7tH9QaAQYZy",
  "key9": "5J7VXrRyNDPPiBR2TskcfBxoAsStavb5FLxt668gKWt6MzwUPPxqP1VKZPfBXw2D3BogjS4rgiDfvo92JsGJucHS",
  "key10": "2wMSJHiKSPMSPR8M17skiSz1QoYXngnfpwPfKWiG9LKjtnjfns4DWUf8vT24pKVvQ1TazbubQAcxJ6MMEmN6LLpQ",
  "key11": "5xyAscLdZ2NngCFFFSYiT9bLVsgKTA4kwv1s189RKEssbUH4DfTZhPLXzyMXTiXypQWrii35D5jykRnCX4tc6v2C",
  "key12": "5VmG1xsTe4rk5rGVeJJ2HKmSVbdK1sPmWuzNX1uFtLwNK4HY7aHCwrpxPwUy4cA9AaMQgZyMtdDmSsMf21PRuXZD",
  "key13": "2nrpPZUZafpfn1GTSFnoLhEzdj2wH6KgMTBcsEKV1rv86LaCFxkVid9DJMqcqPExCRQ3vURGpn95oKScJ7F5PkdR",
  "key14": "5GyNiyCbUJMQyqUaDDQg4QRSua9GBjHDPRqoLrXSZeHUYhobZSPzJaRgW4fn7Q8FzQqyFHoHrqMeDBqBsergpCPY",
  "key15": "1cm85x7iFgcpZ92jSKbbzwvvqtoYrJbuJWvbfonpcEZRsK2W7FsjJfRhBShdG5wzqn286xmgqnVFXuThhVqGarf",
  "key16": "3fP9nqPjENAuaDvSnP21gcYuHnasKcaNE9eJ3gLzNwDkxWbV6DYHZchzhn7V6x9c787JfBQQQE1dTVhSsxpSopH4",
  "key17": "ww61RFNPHJWRGZ4z5aUHyijFV2e5NoDZG2is2FJRZFsQXVrMLWDRRRbR9CaGEQTwtBRNszYxpz2TsbHTpHSm9bP",
  "key18": "3Qx3XHGwgUsKVCvZWrgvveRDmUXbns68u1hsnyJkbsQNTXK4DKs4crvLgsp7Cevo2d4h7A1uBusGx9VfR6WY3diG",
  "key19": "5XLsJ54wqc1ZApp1csAz9NDTjyJLPtb31cSvz9M5sWWhNBp3mwcve784K1zhQf4n9nq1QwH6qNaGdG6XhdHBFEz1",
  "key20": "4u2hKjYdgmR7QxWsLoKB3rQtZazgseua4Cendg7VPv1EfJYXxaFaNAgqghKxxYbpuhdWRx1RZ96gjnxQsW5h7PL5",
  "key21": "3J6oKEesK1pUD83KfyqsJrmZUH7QzjAauXvME9wji6mh5N2ifDUqusdMyKd5xAcBzPyHfh9hSSZaanGzpddjwvi2",
  "key22": "m8zevFdMZX2ErCE6yq3ZPa3z9nJNcNWYc9wPfNckHqL77f35bocu5F7KuNqscabgGZctBpXJ4yawVRzeNrEQEYq",
  "key23": "62a7ozD7F635r7BynsDeu2tyjUeBwhdAUn84nTq1irLGVsQsshoV1uh6jhVcWbX6gkFe9wh2y7jH1PYntuVk3mCY",
  "key24": "3DYHShryA4zqoJFrFC1DSupohXMVcVd3PMESrZNRvWc3oU23MSMKVJfEiK5yhTDeNPiweEwmexNT4nKK7BuUmM5B",
  "key25": "2jLTkQaHxcpQkpWvShdUdB4ecqkWQLcyU9Cr6pgf8p8KCZQuxP6XHGi2jm44p9RwJu13GKJv7fjuLZAJnsWf3tSu",
  "key26": "2oekb53fhtBquu9BWmBbT6mWPtifj9ubebbuYGtAAzP1D72zMyeKqzrEKHgkR6B4CdFZMDvTxwrGFLirqyKdy9FE"
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

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
    "59LeoxeZ17DxtMSDMQH4U71X4spjAi1VvrdZCumEvcRFrjiwqiQzEv18t6wWup4pzVJZcqFdxjQ5f3SustsyHDY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "216pQYQTKeQWUfiDNLrqpjbu8hRu2mVWm8aACsz5iTGSZZHCJFigLeD3LJ5sseWs8xPDBA2quS1Ch8EUsUsnrdUC",
  "key1": "SxdraeAPBBHVNTQh6VrohfFaYZKvPaZJwzm7nQoaJktvRYVSnUoHYkhBCYdrXikdc6yYBwpn6KJ4n1GKXQkfcMW",
  "key2": "YbrF9jYJWMYtHzAHs9Fdd295aVYJUsgXkUzn9v5rRki8d9Wnc4dBAzEmR55y2cVSCJ8irpjSaanE63Nh8rxXnZ9",
  "key3": "47TG4TSefkrvZDmTM7YizsnrPDNBVK9tHcBVmwW9f6YJBcDXbKvoCQHL7u9KHPZMDc21bUTyvQMXnDsqc3Bwzejs",
  "key4": "xwox8vfHUsPTRyaPoZEPLBYoAsFjXwBxGMtQHjaQ4c4Bmv5YfkvEwq8Vfy5jRqnLnfMvWmMSoArDpAfpDBiU6ey",
  "key5": "b9oDira85vn6cyY8gp5FqCmn6dyawEeYKaPWZ3DNaTyVaNXh3ADmnjHgjKqZ5UcVgHEnE6amg6mYZ3uPCbaisWn",
  "key6": "3RsLkRjzAB55o15NmsDgCGhVHG5sbGQ23K9WGm6Qw9ifvNhaJY5wEcZ5w9CUmzKLbLXKCnyKz99oJ2asmAh1uocQ",
  "key7": "BWALf7EnjTbSMYjH88xjd3ByQmaJV1dv5ferknbmdqsqyczPadcfx3ww5a1ryV2cxKv6oePaWrXa8KNwkXjqbQa",
  "key8": "5ekHdQywrWoN7XbmZbxDeXkxvgUCDYDqeAUWiYwJ1ZjMhRF1ALghWRc1H6MkhwJ3Mz9bBxmPtX1ykVrfHpBLdXoW",
  "key9": "nMQgUYWGqcUVgjfWWxPKWTQ7DeyzyT9LVNBXU6sPekcrGZaGLGMWSuWbyY7Cf7VPUfWyMjmMuXrVMNYDg5SYZqK",
  "key10": "5eVuNBD7iQ7LVto9kVKPbTu3aqnDEQECQBLW8ejYtktUShwybWA4qeDoZXT8dLCAAgmgQT2eJvZXgpGLEXPebizk",
  "key11": "4VuQK1cdBWhHLsKKSR8hqn6edtKZvJgX6DjFZo6SmYyCqSH9XGUVkuQBQh37HjEsQMUba5i49vmGXAxPieZ9JLyx",
  "key12": "iAFkHYiU51dU5oV8EKFDerLUGfVaAsrSabcfzB4baetgLzRpddcfm6bhh2N3rpQZPPtmbU7Jk3jA3yH3UaYwQDJ",
  "key13": "5bL46Pni7aTPHsfQ2NEL5gQrYapsb8bDaCGMdtiAixBWfSgKfbsFECnYaGhnQ51Cyk67dfzy9WA36sxLK4wCx8sN",
  "key14": "qr8nZ6RrXqvRPYEWVwM32aWXvDMn1KKauHzDSiu3k3baukyGfY3Keqnw9jF6dkvFjND9UuESeA6jdJ9cQrvYgCC",
  "key15": "3QGWxcxogA9rezePdkVqZdxtGemKMAsWdVBzfVPxzC7nc8uefcA69HGPeFAjh6otPV5E4ga3X8xJZSAruVzZiZfv",
  "key16": "3gkcvsEePbA4G3pA56qzMAP58iARDmWyUXStwsJPXTvXsxWistZSpqfVtUydtP6zhVQzLVWG3JodgZyLdHzWuxUK",
  "key17": "4JpgiaNZ3xNw68nubUfR8eahNCRcPLvhkJFrq1yVfDazKx5MRUc9u8ypD5rDR8t1vvxPBkpA7DvMivymJJQQGjuj",
  "key18": "5NUUWxC2LXnha3iie4FRiM8MDdnGd8f8rw2kbZnz5bZDpUAkt3NKVSM44qG7zcwj7VgDBQ1qjf9sxw11apkB5MfX",
  "key19": "37E58Q6WTjPKpsVTGjajH6T1pttpr49KNZ4kKWHJqNhumRgbQtGJEmu6BMXFGf7p1ATtNm3CoKVoCwGY4KWXXw3s",
  "key20": "4uFDkmxbFU2e11imwGRDGzLKdxMZndUZXe4vZq5PgY4eurPAB31M4czUZfsrY7KUbZmYNyVcue2N5fCD8os1q2bs",
  "key21": "66c6i2dPdZvgveDsgNzmq5q2uK8GQiuYytPqDvd23CAbTG5EXdEcsixA4Z7oePGrjFE5ZUdMZ1LzTcpwzFZjJ6tm",
  "key22": "2CaZxjUyDkusFfGC4jYBkZEmJ93WZb5BpBtKGiDKc1qPymAjNNtQgjF8YbEy4NUwr8PBaA4X18jg7GHFSt1KGjHV",
  "key23": "5yktJABVRvYSyDTXDe2byDRHxQB7jcpw3uJqdikG3bgngPHdTWbB4t7QMiYcfuqgMfF42PuCpLpLyJD9sDYoiBW8",
  "key24": "387EtpJ9TgB6qX8PsgZFAk2MfQdq6WszvV7jUpuyG4goTGAE8o8dYXUptJ366rt3tXpdxSknrC3scjfYAeXZR1Cc",
  "key25": "2MdbcDv2yX49YreWdUu56oujNkiRBFC5vLfS31K3jdjipNQ2YBY4xzNgLE6qN4HzqAuecQPVLgqdREegS4kKEcxd",
  "key26": "2VABNBLrRvCLQacvjmwhfecGqj2nFhbNUmdBcRhkFSo8vzP3eu2pZEqXTwhZBq7RqW2rGV6gPQAHSQqf1R26tpbn"
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

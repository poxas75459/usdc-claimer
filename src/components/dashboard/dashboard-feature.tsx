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
    "dJGR6H1og5c2KLpbQPLgrfxyR3vCJjWUwqPUVJhxUFTRuxx1aACCyfudUhw3gn9GNPKTRRpLS3QB819WtXk5GTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HRsxPSvzPbC4Ma9hGeRHhm1DbPEQkwqg1sj8Ven4atkP6kUsPbZHcbcBsx9Sd3f9KQTyLFr2Ht4x8dwmnS6WdwC",
  "key1": "mrdZYc4FEBHPea3iqfJD6D4FLyxW6RXLj3Z3L8tiDSD4P5DKxQhNgFJ9t6jV2V5Jq2urNP8K3E2BcoCp1VJ6g8e",
  "key2": "38Cxwsbytmp2kaj7JYibDSara5J3r4oWxAW2vDdu7rPNWu6PpuNqfU3zuvykRwYD4H2kxVgFnnXsRzMR3zxpCRoN",
  "key3": "4zxDioHCgvTKfLWhSgdHdMJNgvfQvcMz5dFDBPx7p44RLtXmLrVVbpUYZiB5fwgho5yCv5TcFeq9dBFwA1rpmqRi",
  "key4": "36VJju925qTwRRLVQ3h7FNwRfsMZbTU1s79kz32bqw9EPSrdXy5BAWzk2FReiaxjaU5fEHufRS9XJFE3TAN3L3zS",
  "key5": "4Gv8X7ah5HgtSzUzdhwCH764kAgJajqohSr8PYWy744xegiPynm7rShToEjkSxHYedsp98FVk4YHoHaTtpBsa6cf",
  "key6": "4qYtt3Sf1EMKXs38DjGUsWsA7fwMdyMFtMJAMZ7ADRQDtceDNE4kUpxeNsHLVT4gLm2ta8ztcD7MVgQMUkRs14Vd",
  "key7": "5bVUoFhvkb2ctq2bboasZfV7TWEgovper4fFjKuQH8p1rymwxMSH4AhF57iiT7wGPu2FhaZpUirVPavoiWJwDg4h",
  "key8": "5Brayd6m6ZX39UtgV67UHN8igrGkj4N9qFSxLo52wEqw7v63ASg5huccF1BwZ3xa2ZjseKY1rcRZBR1yQZpTxhQP",
  "key9": "3nF6JityxbRp2HR8PwuL81g2qCWTedZ3qmULx8yfvsTB1a15RxkHEYRXddH1mp4vPMMaWwGfEFCi58agwqD3aV3y",
  "key10": "3NsLGThpuvcP1q9V6ZqjSbAYdbBE2xteQsZMkcdswMuvhG6yFiLyqmef41vrokY7LSqT21xeEWQoNfCFg7UVxZZn",
  "key11": "3d57FGWkrVHtGyybYbPExMnJszBVAp367Rj29Y4g49CAgMuSCayNiCKQHiVeiSCmwWLUwSfPgjDGqP5NQdaijcf9",
  "key12": "3AdgNSYVh9R3K2FefA2rH5UqroBkqEZye5VeNESpd8SWCWzFvmAcqSetX6XG5JSKQyU6otzN1VKNhwZhnyMP3Egb",
  "key13": "3cSWujhgW4GYGGc55EPpvsJXBkRry7aajZNrU6hL4Timrci4WMb7C3DkYRzmz9TbbBDCRwUV7kRYStF3nyAwho4L",
  "key14": "5P7sUAbjqzs1Bn1kHY47MD9ZM7JukFu5f8xnc531CfyPojNq6728eGuBBToziEFgFuykVzbkJ6XKpbMVYUoQQN9n",
  "key15": "2M7KrxToZ7nJtMEiUDKgA38mFEvH8HkCUh9GxwVePJZTCYbTM7etVEJoS4fUVgk3hZSojXoRFPjjJQmKuupYT1Vp",
  "key16": "ZQfK7jG3RkzsZjtVEqh519PizBeuiMpoksn78eDX1N8YP2jk6GKv3s3dqM54Qk7Xj8P4Ek9uj4CGFbMUbtNTeL6",
  "key17": "fimNzkZRwiF9fDaD9oFPc8nG7jBfGa34cK8jDaAm8toLNvY5cgxdpfsi1cLF2Tz2PKZhyzTVfaA9hN2LXw9ptE5",
  "key18": "3MABCcBqezGUhxRtGLhV6nudccDmVbip6HpmN9TBRCeTzZpRo56hXFVkatgYGfsbUyXTzzmxiEeqn2RJr68NbYLh",
  "key19": "4QSupkvwfWTtfj9gT2rgFGiucX9s1SuRsSFC2CxNCLiLoz9cwdvGbQy8i3rDUV1zmaPxfCXt7M37vdMJht9DMZgj",
  "key20": "4YmfovVg1nSF2NJnRtJZTQWX29TB8MqGnLoRc4r1c2yakt5KeS1RRZWEDzurE5EkVfF3bATgKqjSkvDxNpAHfP9W",
  "key21": "2HYCoQAppvuLbQm2CTREhmBSbXyVmDP49DJ6BeeQQt3irt7N4aQ1xz1rXZ4bGbbHfaZbhwWBdZqxNmf4BMYpFB4y",
  "key22": "3gP13nqncNxqREiAWbmqtKn8nVzBgY7M5phVDFeeD2vK4yR4zVoKbwE3rVFBKb39LrarMqL4ebdP5EgxzsWf8c8s",
  "key23": "63gQn6aqNb2knJaJs1eMAcGuGvEy58pHMbHptWjkWgT7b5sK8wsU2ab2M3xJzEB1rikBSjRdq1zAGs4URotz1rnE",
  "key24": "5pXtxVYoc7neF2QzP6ArQpCGueDtMyQKEHhN8Dr2e22uhJ12bsrqS1vTazrBYCnyAkX6Qd6yrVCCcL29NnKFkXfX",
  "key25": "35Dbnsn1G3JBPJKkihhQ9HVQaFAYGQvHkwNUqrP7WPqwqTMiVUxiuqf5osf1pcojKX7yVjCjy1mPTuwsdwZEZ8SK"
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

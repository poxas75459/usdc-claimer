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
    "2nBKtsmC4fYFRmQeXQR6YLWVCD17DQjmDk4WLKGYmmkFXVBc5FMBwUCtXwqQxG8H8wMhoLZqXQPj8DDyCn8DELrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tYbLbUfiwCdowYtzvjF7v7oSStio46ak3LtvUWZDZj1Z6x68PG47GnwgwNLgPAMJuM9VVVCQ4NkuHMjSUqJ3pwT",
  "key1": "3U3sxmbSTdi9Zr54wHS8b2qq9L1cEaPDurfB79BGwRcqMKA7rWnbYuB2Gt27CtFmF6y2p47StHMFaAYdpyo12yvn",
  "key2": "3kA3YvXgUmZgvHjH3YfCkaQySA2LxYtJbhcesGm7gsWbvhi3zjhLzGwZ9mn4FhN3911DXbymJkn9K4Sh5aHnexoV",
  "key3": "3wmmfUi4w83L6W3MqjNcsK6D57hAWhmvN9xNuP29AnPAGxJRqe4UMuC6E4yJWYzNhQALHSBeKeDsFcBx6vFe4T6F",
  "key4": "4zQH6XrG4Xnq5BM1MbeWhguueUcZGUv45XUJAqFUi4CiD1a3SCQjJ5TuAhh9BsFxjEcBxcBM5hQcfpQFJ1gufNhq",
  "key5": "5fm4CzfqMmGgemtbAMcSBvVzkg6DuXWJTmWANBTvFTxMcCdM39szQ4E6rqvkYBr2AkqXm7wRTA6wZuF5CCmsZbzu",
  "key6": "o71ZhWKMLPqMLdKfmNUhvQnNK6aszZ4GHRkfRFQhu89oUibgBZpyYzej36BcSJjfcMzJ8xySGZ4yjYKDWPxmE7v",
  "key7": "2KGpSTuB6TYwD1hUMqmMFeDCWksZZP2qSu1TCCGgktoZZobhzf4j3EWpQSmXtN69uiAym8uXzS3QkTKBQidxqyWv",
  "key8": "67qNfMH9QdCmibyncK1nGezdJU6ZLyoHDdpHwHK7UpHGjsj1Zu8hskfXkxUCjkViJdznvo2Ljw4n2BDixtPEda7P",
  "key9": "2cKnazX16bvQgPpSHxB8VNuduUyovitmGCnQ7YhQu4j8X9JmVKaRXr7J3uJtUY8Nd45XSitEHWyUZwFX2knQy9qf",
  "key10": "451Cm5awZHn345kieYWC1m2o6dx4WYvbVS6x5jBi1W8dFk7udutfpSvRm82VS3GBVoi64r5JV7EEBcfpoRK5ouff",
  "key11": "2PYUB3u3sjDJ6PyrdB6mgbLNRKAVHnMmpzCoT4iS3n6G1tZTPVgUXRPAkpkx8MxyR8fLDxBsJ7hgAHtZFNYCu2Cj",
  "key12": "aoCTm2kZhyUhWGyzfc656FrKbHFevxu6cVMC7TVp6dqpDgXFxeXRm4xQQTZ3vfwTXeS37As4umUwkfQkgkdnhKj",
  "key13": "tEPoMt8rVuaMHMr46hJ3mfxdAweQM8pxfdHLCpVqMSuMbRKmzmbBdifDxN9ABknpcqyHvNHVapqX22mNNybowHf",
  "key14": "5sAzMMK4Z1oyTYCcPYYPUoWcUUKHTm783dZ3kAXXhJWHpHWMtSYH1wMhJ1Njuk8km5u4zLhVZxeCxnLAM738HBmq",
  "key15": "TcRAmqcvZZToWuuXpSVYv8vSnGvMHWTiMkdEtjqfcajpyPFHBkFf4T1XehaX7cCvR5BvXrmDqbcKC7PtsHcUqLS",
  "key16": "m6PXbNU7XqEJJ5D9tYzuMkM8CTMEqcyJ7VQ9J3bLqwUkarRY54JztvLPSz6nQdbJS2rf6Ra3W5XRbztHyFYCaw6",
  "key17": "2tWFMBFJmJRrk4nVSBVbcenwYMTRWG54gijAX6UEUFLPmSMYwZh8oTtouVZA8V6KHqDouDJDnNEfXSNisTdeJxwG",
  "key18": "2cC4NEvGAwEVFLq8gvdcYU5pLKT8zVkfxM1R3SZy9PonCgQapCQEJiKe9cghva2PVNYbwaWHjpprk8v8oePxiXdq",
  "key19": "2CUQSic5LKPEJh1Vd9hE3eXWqZx7ywm7G8r1fXqcgjQTcBM69zmTeMpu6f3HArXSUUrX7K2SPwnFeMe9uD1NmMP3",
  "key20": "312qPiCznZWtamXMNtDtEdEck9DCiGnpn7igfqsK6MU8mHC4YZRXke86VRoJF7W2CWUGkay5iUFpFU958xqVSJu8",
  "key21": "4LpBVJYQ3FJQf3zPkuvxpJ5dnD38KhgDAdkW77q2edmWWCqtYqToyJjYEiQ8goKtf1kmmD3oByDA78Giw6aheSFP",
  "key22": "5MnvjyYaFGUPNDDMiHTyQJwQN7QEbTgq942bQNiLpisNZvHPkaiYLZ2bKgP33DtU4aFAdjoyiSrwCd8m8ahyBcJQ",
  "key23": "5kyzG88WBSZi57GZH41quQxGTXTipHu5YHBfkQYxTgB9Xkxs2yYvFPoaTnT63hBVMzA3S6oLLq8N8T2DWqGoJKuB",
  "key24": "JcB5Xf9xUf7wf7eQ3sRuU19QY14jaZkY1n7m8wBqiM1MqcB9cijnroJRbqa3V5u1pqUTfRsSf8VX1AB5dRHyHCQ",
  "key25": "5HEmyKMxmrcn3mGS2Y3y97kxd8VjsGnjZeEspi8pNHNMFh5G4S8iL3zsukSufKUGKZhaZzUBCv5TfH2oSaKapebY",
  "key26": "25QKA7qtKLN5QxuTp1hHWmeJuXsZ3eYD3SvxHdigdtCX66kHnqVG7t29ExdbYVp2PEreoa8f7EHbCni7qxot78jV",
  "key27": "25FiPUxGnqFizLkPi4aaSHvKYNkT1V2mvkWTfCSoNJ3HrWm3Sp5w51pRg9kF7GAxovp5Y4RrpE1T9RXisZz687D5",
  "key28": "5q5ihNmx5moobRF6dkZNgvos9TJigS7YTVn1jLhh4pnf9qRK5bnDNSANfcXUhfuQMsbvQEE7F7Usp8yB9tbuyoCQ",
  "key29": "64L3dbpqFaH1V9UgVv2FK9SNxxdCsZ4Aiv9zUtuEgh6NvyAB8LPQg7mCw6Z1LtpvGz7aaUgKrLh5ZbDHS9hHEYsx",
  "key30": "4LVZJ58qKtMqQAebKD5wyDy1mSMdaWfaFj992XAm2r1Wbg1e8sz7YSueZhWsJsFeEYqD9be5MKsouA4njzCKhKjx",
  "key31": "aGUVBcWrPsRpUH7iL188FsfgUtuN3aMfY3gDVBATqRCJsT6PLKfrBrWNbn6iyfWff39DdY2ghNNGcj6cCQ4woQv",
  "key32": "2w1D6qnAuDUUDofZMgRmq7CjRKRRVw3wufkR88dr3CwWDehiq8StascEWa9zmWpFGgQpLJk4hY3SKMu6KCxP3yJZ",
  "key33": "2ZwVhvgn3FjFvvpF5qvR7r7KeCC3gKLkcddyTWrqcFRH73hpT4c3ohUjTxrAYYXf2oENXUgHmx2yzU8RJeeJZEBX",
  "key34": "4Wug5i42t4z53SJe7QnyH2V8HwpdekRLSdoWukKTVYux2tXtbkR9gTe7jiRrxCAZpRY2DmkjXhsznEvp48qRXPXD",
  "key35": "2Rudh47pNcggQiiCQjyKM6Gj75F6zadfGEHdgbxYDnWt9Undg4ECDdvQTxjG9jTp2KFg12mLq727UQm272LYH4TQ",
  "key36": "2gHhUY2895JgMnSdr2dRqNC9vNzwwEkaF7MaQdtgp19hUWZrNr2LzhmUQoG6Bzzu5X9KCA4imNUaDWeptbiAUZZD",
  "key37": "3Nqr5nKeUb4gF1XwQ9i1sDHsnwp4QqZybNLecM3Ny5YTS7CmTsPCU7oaZ2QFEvs6FLDpHvLAvkMmPKVprUDD95Ek",
  "key38": "2k6VAHoc6n6qtktwsvtamF3r9R9AUhsGA2p3hJ25j3PwBZTvEvD8sUKgMzC8paLYTpTkfaZzxias8YizRxh9v8Mu",
  "key39": "5iW4QPEBECSTHgS5aTLo6yUnVz6hyDg4QzY2b2Vahi8SG72RhoeWjuf3xNHT8HivkvgA1XQar1KG9U1r8hid2tq9",
  "key40": "2UyfrzYjxKpsmNBp7Rn4iTJcQav8YefcHzjPXU3nAPtg9oCSZFYokJ8kRH53V9mPUJU9Nd8Abfcnq4TpdukEF7sE",
  "key41": "3fkYvckqeKCgYrjtZXjEnXsab18QKaYZxFCPedYmbrakh26SDPBWwWvSUqbW2DeKchKgRFkwVsQ42F8ax147Vd3c",
  "key42": "eXKhwJb6RuX7gokYzhccGP7crTnhUZ1WsxmjX5ukhSuiTrohiBqireUZhZ4zbR6x61z73TvdXaYGwgExXuTJcYd"
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

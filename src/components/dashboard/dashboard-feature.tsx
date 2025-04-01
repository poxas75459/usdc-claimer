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
    "636d33oRNwkafJyaFG8bYEiX6q9rH6xpiQj812DEmKEQarqoM7DoRbtcFS8FfG73Msi9gP6YoLfWgmPW95iSVzsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DguTtTgBbugak8HVKecCKQCUDxsYgE4yhD1eXKnE6e1svpDkCfQC6M4Q9Qu1CFpmroJyvmeNoWnXpspsqQACTGK",
  "key1": "2GgSejM4AaVip3hvQxYHAeao9hxt9Hva7oCbnGAy9Q4QrhgDjUtmZ2V4JgmnrDWvBbsFG1hWENyx8DQnqD4xtUtn",
  "key2": "2nrC4AmSYayg7zVJY1GYLFsFz8PDXPn4SGideEuxmqJfusAz8DsJVJSLSXR3JZ2mQHcByF2Zp6k8ePKSbgwx9ozh",
  "key3": "5Rv2pf7hs7Rq1nXvp7tAMWQVuWSM5qnqdHHUgSN1fjnHsegyebw3uGkfUfA5VcqE4N5ATFPsCajZQkQZkNfic1i9",
  "key4": "2sKzMfw71a1tWMqUL45cSTpxSdiWmpfBgbBM3ooZXnHD7BvcQXdrnyHRCpfod1Puv2ZWC798nyvE7AJ9iAH62weW",
  "key5": "LyNcCmg9ekvvbD3xykt3o5zkiRNuDWzxtDUJFcPpTh8JV4hwgB6gLr6bZFyrAXj8g5vxJjtUqr6fQhTN8DqcF9T",
  "key6": "4PHYHEfCiPQmM5wJU4zKkgt3PNQPJPnVBa9wes3CCZwPJKJd5hbRa4R23yHp2S43JADAE9ii4v8uJ7A2EvDVMovJ",
  "key7": "5uWoz1mP95Fyyawek1JNYDbJZA7DNsziL4YbXgD4JJd7TNL9VWs7SxJaob8kqV9XKrbqT7dFbLbQVPucYvqKGN1Y",
  "key8": "6D2tANFQE7BtR4nTRVW3MUAWr46sLCXgG4YHzayLLTB9MsX5srDT2zQq2VzFjQHYnNFmcnPTtgBTWgYFpwC3bqS",
  "key9": "2Ba2Q7MjGVhFEdNnToUgDnZ7EHv2aWbFzBrPCaZ2bLRJfaVTzLGhqW5veuDfaCR65pGhrVKLjbTaqQYxiR4rubzx",
  "key10": "5rKAEHop5nqj32ob3XbA6uL9vbs6LSR8p8DjTWysm98rQUdVP4ySoKG1ovK6wMo2WjnZsdKAteqHmDRspY4ubAPS",
  "key11": "5gpSBhjPpm4tuMS8sNCtiGpDb2aHKnZPSJAtvi1HjtNAvNoRiKC4EfD7U4kDxgz6phgxdbSJfM1QKF33nCzoJFHk",
  "key12": "2EBkwbvmZUqFgeJBKNVtMwyQQ1HrPifnp5mincLzhrACk7y6Gu6ZkG8vZPY1HvsojwsEAuCTYxUvWV3qF2En9vtH",
  "key13": "2qYUfFL6gdF7BvuBCBn262sncD6k7Ew9BkDqNcrW3Wu6wUgiSMkFm9y9cAe6DzJ34x4DP1Jh3quYNY6YQwmCRGvS",
  "key14": "21iXwrjWuov4hYkfxiNMJd8qi3pDkcN6QBxXvDzAN9o7c9LBxeVwjDs6Gi3XbmWu9Yw6AWbpDTV2ffoPG45vTMhm",
  "key15": "4HZEEtpm5T6bvyqCVVqy7UyHnxxFJvcE1KAt4A3nTkpHpSEoB3XYHYuQcyAhVM4cxWXYSLupGv4qCorb7Mc73U27",
  "key16": "5gFeK4SRKXCyRvNsMxSyGDJfZHtdSJBWaqDXoXwaHLAzk2fTmdUWCdLCjN5E1EZp1cAGJgvMzwdTRZspvPcwsDLg",
  "key17": "4fQ7E7ym9eLfBRbQHizb7chfi9Si5djim1W9j3wFaHg5sGNxDdwK7R1oPaUGN8AhPo5asYtmn4woNedYFvzf6Aag",
  "key18": "5segWeXVVdtcqRHjdsNYMQSobnrm3AgU7hPi93891gBtu8dJFJsBrysQTERXmXbb9rUBSVcVsWMpmAYSgrobS2WL",
  "key19": "29kKQPpifxf4kqZuzqWb1AxicPq2HAjhUESSPRk8sJq6BDBsYsR2tK9LtcyX7XVG67y8bdf71gExkWwpTF5SY5q9",
  "key20": "35siCkrN4DmpB9DzUQdpVcHbMug74BWcfia2R1EBeSKksDjcGUKPXLEhNysS9GKrbpuWggbL6555TfD1wHfZGJsX",
  "key21": "4FMfH3xBYgkQJxAr7P8jbk6yDsVYibvUbwV5TVTFKjKHfCcENgQQrjA6F3rJLoVW2HjJx7ikxtjwmnfi22Eou9Hj",
  "key22": "3jTuDVpT1xYXpn6msPr1uTH4UmoeL6mZsxLMCvAPzmb1y9uaefKckTeJhamTFYcznpN4kKUrrJArTA5JwMUhEbn9",
  "key23": "44no86yDLvdyKZvXKyQpfGbexx5c6GMFFdXQNATp6J6J253Lx6QM8wjsFd2SEaumg43Wcu4gMRzBf5QNPfYXyQ7t",
  "key24": "oZP9AsjVKtHP68itH4Qf2WgzCMztpZatzXSXpCtMdv6GfgfuwLA2qR3Vava3zfb166rreA1fL4mMopvtGSiXj8n",
  "key25": "4AbZP3shcCWHLDoH8ghnRqSwMz3BYVFcoxyQzPM9js3k4C7e9MRJFWYX7rrxhU8aUwV3A5q6DA61RcyhrneM2144",
  "key26": "4tTV6wHzYNFuDX9XSMZU8JY9pWyrULqz8z8WjpgYwgBuXPvTU9h7yucJmFPi7D6obDvAD8UCBjS7DsHYh9Evdfof",
  "key27": "4KzpTRvkiNAuedfyU5Tbb9kJeAkm8BAFVey8i6956FiJ4Hjiuf7RZZF7JiVhvSLtXRDj729JJG9EB51s1AuLQ6hn",
  "key28": "3Hb25S5SbJ5MkcaKF2o5s7DJCWUUNNagBH9obd1cL9gizFDEZAuB2c9F2cMkh2UMTKwBJkqMiGpBn4dAViXiyoTp",
  "key29": "2B5N5ZH1Jb1x9erxirNoxG27damdzuMxuweVm1N5famLxBBmt6fjDzmmR3bK845poJWhFUCRmLjjf3Y4fSumX9f3",
  "key30": "4VoAuEzh81DM4gEVxANWKYMBKFn6V2wsuwqzMwvprvZUXFPwM2irMBEM98hCsCiREhYKY1byD2q3AFFhk9wWh493",
  "key31": "2DHD63drBbxPmuTrfr9nW4VPUSXQvenzxaveaeHKcaHH5jJh3PSVFNefxkQXufLn16UBRKZTcEJBGoQkZZXXwLms",
  "key32": "2N4p6nrPQhew37NiGqMgRwNNUJaCCnf2JgUvMv547k3BixkyPnYRT93kD8vwkge1M6v7Y4QekYqK33YujxEMPXNp",
  "key33": "5Vnr1MYBEm1azkKT3reJ63GRcoMdXLgmbmq5pSmUhQ1LNsRPBZUWmZtwUtbiSEhdAdbzMcfxyMJpnH3D7TQQKvKe",
  "key34": "2hVvr3DBipFfEtGjbPAAiS1VnSDoDM875XrStgGtxLWUCfcqSgB2wYmZiJDJ8CZTq9HaBgZrhRvundTGav2M3ozz",
  "key35": "49NskNA7AhB8Hei3rAFqeaCg3nNKQML6gDU9dgrXjW1ogRBsEG8roke3j9GCvv7bJsMULLyXigUSHsiHe9f7xGcC",
  "key36": "5nE3fozUHkikGhEMSUNvKN7bKTuEVoMpMUMKRTSicEVGmJDgTcUJCsmg3NXjdY2vab51C64mzL2ebwqZp3zaHddh",
  "key37": "3xM7Yu4f6rt8b9ZKMpoe3ky5mMrUSQFi6EuESWVhP9TXfFU9PGCwq6d9DFUTHMyho4hn2D2rDMvtmwRGh8j3TiC2",
  "key38": "4CUbavwdUKbGVFfKRPKBDS6Ec5wCMasJoUfSzVhU8mGFgaL6eDKmv9ruGqYsdg8wav2xTu26YKEpWUGpMLRSA4ee",
  "key39": "42jWNHszYa918L5yQEiY8hPexNx158orKRRhs1FjQu9Fa3WKDAioEAZGE2mYJeAeABCW4WdVhSDwkg8Nsf8P3PDj",
  "key40": "2jzV6JmJnKkgwoWnAcnSK5fUyroKTj5u7hdbDeC7Kvh2oEhVsJRxdaQfRRb3bUDi87G6T3bRQqodQBgcRoDMZHgS"
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

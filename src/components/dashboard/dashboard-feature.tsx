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
    "3oXuuqYKxuPZTnQJZWRoGTvWn3gxSMZ1qYYkXJej4muVyfpF4HXbZuMUJUVoXVSfftBSSzDwxgGCxq6uyo7LqTmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oHppK5VXWqmP8KRLcTzMC3G6eUicu2txCCp7o3uqMcN6uiLNgeLDoNPWf7vPxiXzLUmy1TTYMMMWSiNNPjY7Duv",
  "key1": "icy2kjGgxZkQXHfraiXkcpDn8yAv7x5wndT23r188YKyb8ka5idPB1d4TvKLL4VeGc8PwfesdSTCkFEtpgJwoow",
  "key2": "3yZH93KRwG3BLkLYfhQqBi14inHGpx734XWuXzqJwpjMQoHYayQRmQmaRGfPPH1qisHFkxrUEGMxwSDUV4ghDi7j",
  "key3": "57K7HDhESmcvyHkaMuBN3dafxm3dnHexYNdFniXK65xqay9Art8RutkELc7pRyYofHM8Z1mwRwPPWcrQFiML1NRP",
  "key4": "2a6BJN5A15GLioT3PEUCDVUpqkzWViT6JXu6HLproTMacDTNrzqMBXbftptVGWRhsN8D7u645A1hJLjVjTipFBaB",
  "key5": "3aHuJEdESXkcKr6gkbzkMvSjCdRy1S9ZUhv6AfdfTiGogHweyfjM45r9WV26D9K6JB55753UnWjBfToKRZ36v93s",
  "key6": "4Q2qXzTmMei96mQMEKZv36NqHQvkLNcbybZedJFV8kgWxjDwRn9Vc3kHmArMNsRuQcNwWW9fzCE6Z9cXrMSoMDxn",
  "key7": "3zz1HxQnKAAWMDL4h3Ttwi31GaH33G99m6hrfybDUVPzgWCRYWHyoZjLAJW9TYakLvsonTwy1qJy4Rjw1gPBuseT",
  "key8": "5XhgyQ4nJ4EzgSRug4TcsmTjGWHmjRZgnLcMtzqtTKiikLD8D42y4yBrGn5yYLpKxSCRFcnp9xhRrMEjcgRuKHSS",
  "key9": "2BPTS79Rttb4pEZC9EGS69e1AxH7Zmjg8dqK97MVVWAPNctevdqEW42xB2rmAgtT3tVsMbbr1bvsijo2AZsbeKen",
  "key10": "4oGX9EYELXm5ziCNTypQxPU5HFTxBHWRSMbPhRhL5XS74Se7ZZL1kpmFBADmvN1UVMAzFVZysHADYvcnZSumRRT3",
  "key11": "361XSyNKBHfFjW6KkVp2GkW5sH4Y9hbMLmgJTgs2FtjwHFmR52J5RJZeH25MXqkzVYzwtZ7AH3F8TFdqRbUvPhy8",
  "key12": "jftUVDC5dJ12nfUX4ZL9ndLK1F61hGxapYhfz2wHY97fGiGPRDR66kCcyWKoJt9SxgGaPh7pDF7qQ7sVsDyUKUr",
  "key13": "qQ2MYcJ32GPcu91Jrg6T55EfSgqnwtgdT4L7nqTyA6GXp8YBs9Pk28ktrLcmas6s9K7BSpq6kdHZmATeEawxNzH",
  "key14": "5TRF39VH3R55KiE7LtPa96bm9YnoBG4WjDqY3uuQoqA28S6fEMTYhvKbw5mSRNnpFasfqxhPTUMZ8rsps1Z1Rki9",
  "key15": "4oFEr44MpiTypZMek3ktoAhSgiCb1wWLBCRqDUobnY1iXigJhC6VF2AgDsmxqE5HYmZg5EAwRQCppbbNmUjem8E",
  "key16": "2F1dcy46dbJZpR6d4mQ8C1P1Z8Rxv93JtdmNxptZHnbjyAFKYWtMg5GYrgCUTUaHtqcxNPe4G61ARjGimaQk1Kws",
  "key17": "5R9vZmBnpmXvsedu988gKqf9zBaqWbFTANJ3ZvjjkyprmAAGF9BwYF4NgGgPxR4MQqaxa1Wa67vSUxFQXbKTVW2T",
  "key18": "4uSa51HtdNUmPr19KosNrFCM9L12kjZmZDvfZWXDtRi2JD6ujr7eS73Rcqh1WGhWTHmbWEefwKJERf9gxnjoLM8h",
  "key19": "5WgaGdw4BCPpqCAePEagTUxN3DvSmAuW4LPmRtidoKJoJp1aoR5RDivJk2tVLcMYdTGZqKuWSvWobXf1g5ErswoS",
  "key20": "2ny6VVHFxAcu6w3VKijJTWJx1WUE1k2yevoSHGyb9jwzAzcYeUYrZdtLLhEA4guLPBF9JMDXsfNbYCzhAUwUu34m",
  "key21": "2j6yxxvVFFajJRG6NAXxVZGUqm8RRHvmZsCtZE4kWhhG1tqw2Q2gHqMwp4vFDWmhpjC5yB5JpLcZkx1s7aKV9DCq",
  "key22": "RwQqBEitibabjb1c3HaQ2hoMpzimj3PMZJgrU3qftbpQsLBHivW8KpuS2PQEJJfQHGZ5AyJYUGZngR92RsTkW8t",
  "key23": "52e7xYApyRRMRVEt5wrkFQCumKVvrKLEMb2kXy69vPRJtTioXuPbS1w1SS418Y4YUiS1BYuHy5M7Qh3N9DLm6cMP",
  "key24": "4MCn7b3nJK5e4waYLSw1D13CrQrxdM1vjFCSphrfz9k4QgtJVFj6TgGoy8UBj9tMyKQPUtqRiu27dtyQXWEV6P6k",
  "key25": "4mCVMCiz2jrtJ91mjJypyMgDVAA6hDFRF7tNR2vBhx8onVPoXoEj3M8Nj5DQETXNFe7b2tW6oNh8EX2zfTzRc3Rq",
  "key26": "4PfU3UFKbWCN7qw7eJMoVZdaJUeKPmMyGESBdHnLNL3UZ4ui6Qv2o87NJ1AnpDqTueWsUfTKAj2ydz1nyWu6zL5J",
  "key27": "5V7rYTUAB3XgtoarHSTP7UqBXQHxGfqvp4pbJoNLE5pwv8abLz5mPp1yCntb6MAT136bBf3SvwBQ3euWmwCYRot5",
  "key28": "54fJmb7pCy2doUPQWNFMKvtf67j1R7VWkevcg8NrnXM6EzusT77c44Lbu762iGr8SMHvSai9hwRC3nTwy8yqAzUx",
  "key29": "5avpCArREKG48CjWTHshK8wsmpP9UDoJPryxcHj1iSnHKr5ad3qPcTQHHwZwVPTZSjWvUe3NmVodKZRQE5XhGpQ4",
  "key30": "33B8vTu1oY3hJfmeJxzmULHKA4PoVoJXcTbTYofMbGXdYp1ukAYLpPqgURtRpZ8bjG2YD4Kamo88nDtmF2suetgP",
  "key31": "61LkJmq6b99192Zq1BGyotXeePZeVqi68zqmQDJYpTAeKFBD2gGbbHC4qGK2dDmAmg3XmEVd7F1RaDYJzfx1mthW",
  "key32": "2vhXb9ezrE76zrdRQYQA3YBcRb1XnGVifA3tCdmxDTimos9w5bPcGkhr15QvZm8VA7uqAeprkZKM5ARkpH3462AK",
  "key33": "3q7mWkzUpwC8NLX42pQC7RGupkJyEqjgXmcNMvJPVWZjXP3Nng2yNNtVwkMjgHoqtZKJckz3PTPMXJxjKbScnpMH",
  "key34": "3Ek2QZMsPNPaPpyhe56meR3pZRJFMtkiy9trU7dHgdY57gpLmf2t79kyEPnVKm4cXMvF3pYWwfyQBDqscgRJSAwY"
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

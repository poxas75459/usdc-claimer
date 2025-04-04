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
    "dYFsCxtbU44viuETwAd9x5dca1TzikcdZCx9bVtFhrxM3C4Xhmn92JqeQKh4cR5V36jR2TpEcVLMEi1uzsjq4Yt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRqwoNCE5oUCwWpyc7mQ7RMDKQmGQY9yXV2nxh3FRb6y2tNPPdvW7XQhrXoJoMNvBjrRHVBD9XiVNEZ4Nf6ywZj",
  "key1": "59MmHrgzuKT4R6KesougHCoQ5axfT2Qx9SS6vuB5ncbEDqtb5kkdZgWFA1DfkkaCqX749N6dxyLuVGFz4SN4xHva",
  "key2": "T9tJYpvbJ1q4ZSC8f2PuvR8Nw2kzoQcrwyGPgk9MquATo25DkjZDYwbXwGD9H6yENfsEm6QKv6jEr3cZjbrTeVt",
  "key3": "2GVNkLb3Cp7UmUKTam4vuyw8LTqJ9HoBicuKfQQ1PPJhx4tqwkhpvGD33wBYPQEbmQ8wVAPahgGVLmdUCpRnVCLd",
  "key4": "4sBMTxWbVKc58C7iJQfWitkikqHiV5bj77K8wGTsyBjwrrARWJnMm5FiJzQsB1d5Dj8sucXZQDDaNdwfHX5GUN9A",
  "key5": "iRo1LCf2nsCLqR1DZhJsmXuCAW8pfDVHMQWDEFrt23qrriVx3jJiaXyUfvMJsyGRpKDuaJKWEFZP2qHNM55ghYu",
  "key6": "2FhWczZgQrtjkaEmXzQTvBRSG2iZt8HCAbhn1qbBHWuwHUr138Nv7w9b15suZpD5SzohKWiET3fBKtJ9cwBR8SDS",
  "key7": "jYXTQfx2EsHnvMqEdPvN4p9RUnmRejtD9WdHCFkbG2ZHHXghVeb1E8hgiYp4Fyj3Gkoi3LSNs9LbJ3TTeeYTM8D",
  "key8": "4HK265k7hs6dvpTbWaoB1Mzyxis8NEMbLVmcKpaCqMrbP7c4KvCV3CELGTTCrTRQDWBGJ4fdn15B9C2AVrPikhqw",
  "key9": "55rrpCJn6y5wbYNvJGpbmZMQcxPCAe3QdbpAcEA1X4eK83eD6vanX9W7CpQWUwcEPnn2M5MkEa4Tiybb9423g1TW",
  "key10": "52WjQbKcGDmmNW5F8JzCerfYR8EDRQz4zYq8eAzshYb5wfHXxJMRgNsS4mvfL28FM1L8mSuoMFcuzEoAiow4cjZ4",
  "key11": "4GhEha1owBxMmEs1nECL4pjLczs9ZF5p5aqcKWym3UxcyGkwvgyumYvk22bKxwXXyHn54EM182EfGCtJtymWqsRw",
  "key12": "2mdraTcYTByZDPH6V6ecQpPX9PksyH46AnKJPvePoxUbDNtj5mEPx2jRVnpXHCg5PUaVXoDWnikMN1WXkz8JNDzG",
  "key13": "3L1Y2y9BjthePW87FkYp9neoLRaLVjXvq6sKaKdD8ftqx716bjLCukNxuegoNxdgRWnwL8Q6ZNNdS3EawPkp9UcU",
  "key14": "5rjqXgNLwdMBTXNXAKN3x9ewV3fsDuM2FsA75hNcF1CAXfVnwxnFLTAx2dwKP7ZP2xSd7HiJp14Dm3hKjgmqPbCy",
  "key15": "9qWBkuvZyhVzZyaLEzFJVNwET7ckbSE7dGQ3HyXWhBTk4NoGuDgS2ed2iMv6EFoouYmhLBqa1duP2FVmDBweYPu",
  "key16": "GwRo8S9S6cSSZZek1ieaL8C8aeU49NTexidJU3Wn7HxdMMGAPMjY776P66G5MGUFXiUk2wnFVV1p7t47J8Dsn5v",
  "key17": "fZBJBNbwRKVTQTyW4kmPpQi8WD2nMRwYXmChjmosd3i39HtUGcv7uPHFAfKWrnPrZnubxydvFnEFHHGvvGSJ8cr",
  "key18": "3fQgZvPJ84kuvAhhfwYDZjotQ2GAsaTkVcjWrZBd9vw9YLK2CUg9xXohq1MC4r2v6WuhAKfytCrRoVGpm3jdUXyA",
  "key19": "jMmmAR2Uin5GyApqCt5TVNXnAff9iuhB5RcMZxPCNPLdEJubL5tGpHDRVcekFxzBzCwmHenoUBA1wcW3Ez3MNJS",
  "key20": "2XeRrqsy1kDdm7Wqn1uWQ3wfWfDF2tFRSEyiMqGGnsy4osKLfSpjALPL9FLht1DmHaB6GWVGY8MMam3aCiCApaGz",
  "key21": "42SQfiCnmjfF2DWX6fQRNWFhBTvsdcJURn81ZHvT4RWwqsVHGHrL37cHCt1scTbruCVST42WG46KNdvfR4kHCHYk",
  "key22": "5Nmer4mZxL5FdSDt4M5ht24D9tKhDGtudiHXD4MByWs8maLukSQym7H7uC8Ey847wxBSMzYxemzrwd6P37iRTXk9",
  "key23": "3HSSce7DcNZJPESPAbkGyvkSn7Aco8igZLpz3SVjEaTnA2KUZStYPWAZE9EfqcMNJo7JLGbxKjCjE2yVDNxW1HGb",
  "key24": "2mrmMYrGeT6tXvv2ELdB1mJ9abiqPMmQbtBuzZx1YXL32hSWkC7AQgozwXeEsMfD6p9AHxAEFBzT2ZW4BCoqfeNk",
  "key25": "3RiNmSMFtJT81SMezL9XnQXhstVcurcxgLk9YdE6WCxkUQSC13vaabqEV3tNs9tUrt2cqTaKaL7Wx15cfsARAVgm",
  "key26": "3rrGEyCEFG5tWtyzsWGKzY91UxT9pSvpkAyP6JXfjduwf3VGPZtLEeUgRhpDL2vA471FxWBosty1J9jX6n2MnVhy",
  "key27": "2qAiiFy3PaWzT9ggr5bUUV8bsXHZUDoF77uJ9Yx2f16iDVCdCLPWbCTvp9Pt3c8fHq4KtfgfTNQEn5VGoHUBAi4t",
  "key28": "4nQBDuxSw8Rfcp5xza4jfibyHFzpDj2UH9KBFB6yKrEwZAiMzwwPPGS69YRAzvRVRFWCMcxP8vFTCmyLjvtTLGGv",
  "key29": "runrobGZx2mdLtoHEkn1xU7dCVSEAg6A8TkvcMv3Q3MRWLWEzG4sjztCRiccSPy5trEzN4C8QcLUXWrCDTvJqSf",
  "key30": "ysnbFuvzfJD7F7fpYTCPNxa7g4r61svtdjGh4yLzgxx89WMcRj1Rvhz42n4wdCDCrmDCskACRmFQzDrVQQTefA1",
  "key31": "5B5t5jVrZ8YGGe35DRQL16hAF6LPwKQ9eC3edfPKiz7s74QDdvXY6AWUF1VbxM1UrNZvEiGca228zeayWymFHqLr",
  "key32": "3nTRD9kxNoZXmqMUvKhmKJm8hSHnddwAYqpYpvnFEextw5413RQARWkfv45RpuqWL1qedndeqRNmwty43euTr2Eq",
  "key33": "xHWZWb9FhtkR9AZSSSygfMXaArBC9TSWmrQxeBJbepHPpkeWFaFfY3YJRpZoqakZUJn7k1W3yEVqcDDX37Cm5cp",
  "key34": "5wwZvVa4gQjbcbsqEoUVBGxMe5fLrJpomgHPZgsYuY7K8woG54vZZ231cbDLNiyvtjuNEm5DA8s6FrozWXnY4Bzh",
  "key35": "67ZAMNQTQcnRES6XQ6crwJQW26LofeyiFTfnbD6sbuAtjF2mmxgbK8dfezw27FmUzAP24wjgBbJ2YXP3AyshPbw4"
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

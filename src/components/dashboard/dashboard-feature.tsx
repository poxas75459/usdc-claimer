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
    "5oY9cuJqZz97ND4WiKfw7QHwRoAfgYzERGELqq6zMksd9SWjAXAmxmDpz5VvZnf1ZG1XUDh9hvmd3Mgc9VxtupQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gAYkJjG4zh8zWuYpX9BBs8TLNsHoKHTdyKDMraTviYFV7KEeVvzpCJa9KkkG7xF9NuSq7M6ESJ34CFSDFpuXHyM",
  "key1": "5fTg41BshTiQ5vTGB88xpRfDSmcKgKjBurvzjn7DFPdnJvme79FTyupVGat1RyfEzo7AJNLtom7baNDmQg43iorq",
  "key2": "63ecbHFyHjkjXxj6GmGEMov2Eqcgfk2S5Et89gFg9jemprAaiSw7xeNb35LpZ4aqcZ4QfcpoayYzM1grXKryhFKY",
  "key3": "34fW4RfeQkFTLeXYXk8FzfKMeSuB841v2EJvJd2GmgRRJDMBPVYkhya9XU41ACLECZnYkYUxZ16JmdYxDbcEpJL2",
  "key4": "4H574RRa6ses98unmsSS1nHs73cd8waqZ6yftmDBRozGp7MmEK4VxA7tVXntkf67uGGvAnbyEzzPJQHRPzpYTS4U",
  "key5": "NE5NUjaqSnfhqePhs5rQz18eTE5nf85yBQCs3R4KecrRvQh4MZYyVgXzBzgHhKdofSjTiS1ZkoDBcuC8HhhGinK",
  "key6": "3qWwMP4zUYyNnnA6et9TeFvYqMsHDpHofpJiupHgeTBWwV5vz6rG7yXccQNRJ4GVhzhXZVxY9wPSap7DfgErtDgt",
  "key7": "3NZu6KQFPcKK7B32SZMVLk2w9j7sjq1AfpVjFSv9gwQGreZCBrvYGgq3n4BwocXEocHb4tccE47eu22GMhyZDNY1",
  "key8": "4Z4VBrH5ke6KsddgBY46o1uFwHFUiMXXBvAXWrDrVCmaygRyUtTMv7JscduM3X3TsuLRCyXDLMfZcihJkXqSpqeP",
  "key9": "35zny2gFuHgG6QxAHfUvQLJi9YUUjozXhZPuF6tpUArbZETGjmGsCcRuep1de7batd2NssLNCpodUqZbQVkBnYS7",
  "key10": "NJUWSvgp1YruF5V13egxJYBs45i76gmWmAUL9VWmkquL1frJKhj3tg6RbD4JWjYcsYk4MgMU5vuTYNihjXVXXPN",
  "key11": "2iEjvNfcLNZJLLUf8E5jCAMDrFyHrKXaDYyNHxdufJ54yNoLDVe175LNn69Fgciis1bt23ZmyZ3ZDeAAHBWDLCSr",
  "key12": "5yXnRbu4h5SuJm3Vk5kM8x2VwGSnT4bFnp8GS5SzcXaX1k1v5KjmnryqWSM7NCMqTSmUzqgfTcmbDJ4FJKB7nGCn",
  "key13": "2fN1dmKdDDXLrKqdu3SACqrs8STCM8fqZjN52nyLSNg31PRC8ZVJWa5ezdt7p45RSPcg2UXqB9EUJz22v84ES43n",
  "key14": "65B8Vocoe1SNW3FxFhRRPEnyxoiPBeofw8tNGyamKuXJqJ8foGVBvnxmdUJMVTHX1wcX8NF1PPpdZMcLaj5i2md2",
  "key15": "5WVTCcoH2BYM1Ug1WXYWBuqPQE2NFGuyDEzq39qavtuWwo7HqrDaUn5nPaEPw9FYBBJuGdEtGdDt34X9RgDLpcdU",
  "key16": "49anvdnJDyKNffviZYvJqXAkrLh56LssNkFyjPKuEzrXHKqm6T4u6qVahiqjEXw5LmRuUfuYnH9RBggLGWg4zG7u",
  "key17": "5SsAM6bdMnvvr8vZuX4id6RLg21Xdgxb3Y2wLQmDLy5PLy81Nzuac8sfBqm6mxSuGTvh2AioSKKjUeX3PHCTJmME",
  "key18": "5CNLTCCy9eBBi31t8XUgawew9LaBniJPRfor3Whwp8HeH2S1t7vfPWXDyDQqi6ZJFUsdvsPzaRx9mG7UtKGM8Vfv",
  "key19": "4XugbkFXBB4bFijk6XmmZK1qyADXZ4Yw5WpGdFcbJbwaXxaecYEwj5gmo6Pym1vjARJcGxJm1dDGNPXsFiptBTMV",
  "key20": "V3ENLoUwQb8HE2FtCkz5V6XGarWVugW5AU2ThZY92ZVPUDtxh11j2P4BEnR6sS7nhGkoRFzvYrhvLPZAHDDaB4V",
  "key21": "3gujKZu4MkBqUeEgaf6yALUhvMfGp5g92Cfnt8g4SNBCG7WetRkDqkw5YVtUYfdW1oSTTHjhdQk4HQ2di6BEQp3F",
  "key22": "5uk6e7oVSQvzPBCkxMCVxUK4ZrrmqkLbWqzH2JsbvUfLGaaPUJBPqgiCF5gRfLmzzqN7byb8CTQ85Z75BV98jkDR",
  "key23": "4Nff6GbqB6aDPAedSXu6bWtQi3wkncmXc1MEu3jVvmHrS4VP4S21ooREcMK4zEgNekMBd3tndWv2aq5vws5aqArw",
  "key24": "3EMRBjfWpnsEMo3Wj1AhZut2HzTfNpWkoVQC8Y5TRocPLAWhvEGDNmUYKDBxePgR6pEsHnHqhNhumNrC7ySeiyR2",
  "key25": "22MJUScq3oWK4evWBvwfuwDKYA2bETJEGjPgN776joKLx5E9DLiKDma4TL8dh63Hredg7ShbwGVVgfcVrhnxDAgW",
  "key26": "63vkzXZA2AkVNkdPJPPcXsrpFZmRE5QrRWP1h2prEbzyvQiDKXPJUri9i1budGfNYBKaVQZf46J3nfGesHUm5S7C",
  "key27": "41Du1ouDjNH4qeBtJ1ubbsPqfm4Ue65RFFrKV7jyeA44ocN8QPLV1DZr6U7oovyvv5gg8GKPUwJWKtQjYi49ANLH",
  "key28": "2C3X75M9CuDD2dygAjmx1je8VMezitdWtvT7SKnwHyyZYoicHZJM22Y92aiEZmW1K4AkGoDmgC2pJdRStvQNzDcg",
  "key29": "4Rx6BPZ7N8BYiF42aShmK3y3W4B3bDHqcGYMnwzrNbrX69vX84gjxQqC3ZButAMpkYpcosxbzrNaawn5bzCqkkH5",
  "key30": "Abmns5Zt6m2bZoguCGHufA94qDCaSrWNv8RvMzJWPN6DexmEpznJZLqDQSpHX8QeqqEVjeZtyztryjposTdHNuW",
  "key31": "2xaSGqDs8vANo74z2vrVtkMYPrXUXXAznYwAmghZt78i142DGtnzc7VqBToMUe6Ftyx6WsZ46Jqr6z7YLvFWdTCE",
  "key32": "61wy7FWGemWcXcTqVPVt7xyQ4PmKGSA4c1Wmx5DEeG9Jeff2g5g9ydr1VunLmyodu3FGs8Xt93G79XvL1mGCDTnC",
  "key33": "36QfhVKuKiiTPpDiANmcPHHEK1izaTNLjw4HeaHTqWvbQnn7LQwZe15wtTyexpKyKCqYEqDwNriLzEy48PrSUCYj",
  "key34": "282jWSXGR1VGWRYDqxpAWUUpA3fw6VevtoVt6hpqB6SHkB7j6ucsqKmxeGAg44dm1g2hRScVCfRRDP1eE4vrAZYb",
  "key35": "2HkfuLD1xAH8xB3KcsxycknCVtHKVWHyjfkQiDmBSVociqfv2DFvnZ3QibZg6tnMkFSRDuS6zx6D5E2RApqe7bgF",
  "key36": "3xuVuq4AHhQSRC8sV5EFsiCgQpvgSLePCznzBzcWxioeB7ybAWnGC2JuDR4Lx99HJhUbHxt1qvEDFhRJGDvUwPAG",
  "key37": "59uTWiDuY18afzSxSn9RSXdWoAhJFWvED6ctn55moBzfqbm1bAniWDHjupGEN8byCjSWfVvxZfvgUCAE6W3tQrUE",
  "key38": "588pCPwbLUoS9iT5bWvTA62cpqkptiCAGRVCr47wVramBoCUD4FmzDKbbATTkSB5FcrPPeeU1YZVWzBmekF8gHxG",
  "key39": "3aPwsSfKAWAzJxwNU55cuueKaoZPsEBHMVaBuDUzMxrjfcJKrBAVSN76eLBf6w3JQyH59NYJ7srsRaW7Shs2zpMD",
  "key40": "4XqpXbZVzXeJT1tdEvG16tGY31M3iRLf8tN6tH1rLKVSRNRv92MsTjyqRaVuGBR9h44bXjR4C699YtTAPfXTLpaH",
  "key41": "2qdDudqNardcfLe2TfBw9a1fK2GNmGbW8MGRo1fnb8SwxiiP7ej4Kw1pxDvEbvWESGLgKFbQ7xmeYJKmiS9AavU2",
  "key42": "49q8oxsmPShisySWEHYYd9z9LxmbKkTNgaJevWtcj7rDaCSF774jSmPBac6ahyg21ZbKXP2Ui6ywZZCXd9DwVTtD",
  "key43": "4FXeChjT9DxPjW3UU1R5YrdpvnThu7TzodCMmFq4Ehu93Uof1tAmB5kMdCK5B3mCLdzq7WvUhFXik4xywFSYbSjA",
  "key44": "vhzzqXy24Ve6rdkXbSz1jWYWG4xr1D8SusMYiYX8TQXYoEwjJzU6dLG4icZbfEcCyrM1GXso9fiHQtDRGkRutEu",
  "key45": "n6JC1Xc5i8ePz22FknW1xaczX2osUJYKGFCVwvKdKJjn4Erv1cbqaDDQeq8e6YgKa1JCcxNJGd4WV6dDXEvW6nw",
  "key46": "4XrBpXQPydhgNA64yeA9zDurHyij7AZKdwtuTURvtGaequEvHjUbcFDQ2z5QPHW5YLbFvZecgbs2U6oFTzCxBY1q",
  "key47": "4bqPxXcax5dsHeqR2QHKUMfa3ZciBdpPbWSrQF4nkKcmwzyLrwh8MfFDz9Axs7a3sKvfZBSdngeNiKhstVeLRdw9",
  "key48": "36EYP9PkN5YRTEadaT4HYBCso8MbRpTGRumFHmCoG9WBcYX9GQwxC4azkWz4NDQXR7rQbC1thdUH7c5LMaJBdziU",
  "key49": "3QHctJB98g7dcffvMz1gHkGjnjDu4no4YLYmuDUUQdjLVfQxqiwQip5PP4SS51BcWm1pEabMEa4YuiUwiSpvUGgP"
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

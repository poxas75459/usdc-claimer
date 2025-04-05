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
    "3gfNku373pQfG7HxjAu4sJxpyH2pZr1c3veQo91jCmD1tqQvPNR3ezJPp8PhzJwhU5xxeecqBiKLMouKcpsTRufy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WosKfj6qhR7vjFmegL4gDxpqoTtWgnnLaYc2KqqjxGh5VpARMiJcui5Zadba4aTd65SHQFieAEiHNEMsepXWpLx",
  "key1": "WrqxXL7xnkCs4xG5HvnztMCBEBWTctfhn6EUhzD8ABXkAQ2xSbdA3hskgfk1LMJGRfdhwhekUwAj4AonJ4hdHR2",
  "key2": "4Njf8X8o2FLjJV71yLoW9XL72Ud8fkNiGeDTT3geX34fvcVf8ThxnArdkTWSFFC6gkq6vaLRjYHo1wBpGcHYLpE9",
  "key3": "8TMDLELurCL2amGrn2a7X2ofkKJTcGtL17HUQwLYM2h2pD8uVqDXiPSqq6jG5f23D5W6eojEmBLxwy1yVtJ56T1",
  "key4": "3WJq4QaoE59iqa6Q7bSxr7ZR8AzgB1dtWcRaQBDkwVrwC58QQ4KjU2yieAonjiWyppM278Rk9G3T6XszgQkLXMKJ",
  "key5": "51StiwPyiHJ2XN9KVxKVPrjU1PxMzCFQp6gPUq465vth9cdUeY9kbqRbbu5p5b8ycz52zbjbudJeoyZNdcNa9K9V",
  "key6": "4ezbtXrNcsj5UKZhkVJV5iuc2p9o7azDffe4XViFvtmR46iM33XLdsTUXRbgeTUdR7bfwH4n9P6rwT24MeJJyKbZ",
  "key7": "2DQkEEGSuvCph9sTKGYvZTkgkXBT2GQ53RhnHi17A8txB8Hwv9kMHrJ6qqgLSdRJj7FUee8HRhc2fD8ouUVwAMmZ",
  "key8": "4Rur99GA9xua83SAV4y1WKzQcNLdGdqFoFSTRfrsJKoLC5wEkpR7FdRqk11SJt6Hmbcqq6tgSNtbdomT6dKmHVZv",
  "key9": "3M8Popn9VuVC4tc14VcomNXkSze6zpVZaRx3zhjFcFmVSR4XpdnpH1K4nKcFWnJXDmAem1qXZzs9xndVjKmDwnD",
  "key10": "2PVyKA9q1HB3PmxHmcFjwMcyz139jdcdEccNnfgc7tDH32dsgeK6saagUfHaR5PjVSg8iKj8KHcDcJ76tm48aPfs",
  "key11": "YMRPGfBZ2EPCYTzE9Bu5yaeCKhkipae1Rvb9mJVLkQozTvrE6yeQRrQtmEDFRwssyLH8xmbYgxBCeFBUsMnNKqF",
  "key12": "3JLubP515ZL3e8tpBrFJscuZ4GgFQtF3edQ6qobm9dsLwU4GicvoLBnMUzQzcfsEHnHVTzaynHcE4yTE5dKQmEC3",
  "key13": "4AY4oM1c8aFuyeSYCWqhdDRCHFM9zaGyq1pCYV7NG2Rfb2wgDhZCZPcEDyqcL3F9RLycWq3ZJUgb825RqqAxiL4x",
  "key14": "UPG2Z7rtEGemNRBHZFDezqtUdzRAN9LwrZuqHhEdp6b2zVCNqtXBLQbzeWDZpqRYaHRnxtX9YQzfBghq33t2iPq",
  "key15": "5sgxQsBUmFv57JTiRShTy2HKNE8sMPTfCjyoLbjJZMmMy1T9tWK3iijbynyGjkXnztFh6yxKfuUUf5ujVPqQgF2D",
  "key16": "4hzxj91WP9pYsq3dNKmG1vGBUvY3VinwkZPnydQXVbfTGLygdCY2rX6fjRbzutLydbtE1RGPbHW6wGygaX4kkTcY",
  "key17": "2AfDquZBGK13ZqFC2w2pRDPuqQxRM2MfQG2rbyQf84sfrFhqTtV6NSVh4MfrA2nYh9ZuZS2D4vQPVJFqr81jSUBa",
  "key18": "D6nL8wML7YqnWB7oWtzkKmrZPsjuQx7LnvDU2YkEaoF7JqQiHNkkP5dPzXLorpxWBBVkpxQpQ7b1eD9ocpu6ieS",
  "key19": "4e5qaSFoR4penaUPvVxk2aZBhN3TjrQJhe4LngxrwUMRpFnMQtJjFqHSMGG9vs7ViDkuGwoX3BdVwW3epfxt7sjp",
  "key20": "48kuT2pEsxhECe5Jo5HN1tydfg5dMjz1s97a2AK6rjs3dKHaKMZMpqAWqcp7F77WgdaxNxqMRGFABfdefm3abmbC",
  "key21": "4psNZfZ1eEj8RHsZkHBsxbjDZHUi37stsTyDcUmTPYGJDVS11zTNxPXLtuS4ZosZj8jBxFvMXDnjeKsBwhRxHkiu",
  "key22": "3cGx2zskZ7JiN9h51uXHLqAvFn6YFxuDmweHRnqcpUEr3Dw6e9Z1tDVY8PzekGx5pvgvzHRswsWCjESpyrRhGtkT",
  "key23": "4ctFLzwncudVgs8t1NTtcj7U6gjq4eKrTfwq8e3wDkEwqgyso4nPSXaHeosTZWqfsmpAz82HAppGrpTachhg4gdW",
  "key24": "4vMwkHopdjCbVzLwHVWH2AHRmioa8beBWf37hP1vKLrAp7tViwcjkYXiFE9YjinRGXV79qPyiS8kwQVgHhwbbdFy",
  "key25": "5BXWvsatMc7kEiYnqtad1PcLcZmyBqAVLDZrPGaFGscYXfnbRZNh2D3ffWjDFKTTrAtMKQDoWMqeMooACvk1AN7d",
  "key26": "HybWXtnrns8Zpx6Ub8JRCNmaaLAKQjRaLAQTLfwJ3NbtMFMvriEu4zRUuziuRmSYd47NFuX8NtcWr9NMCMgiHFv",
  "key27": "JjrqZkkbnjyVFQ1vHZgD53JxNtneBzSdND8DzTgnuYy9v8Y2az3y7RnPi3p7ZaLTr47tqz9T8EuaYQ5ae3nuanH",
  "key28": "4ywdAufCKt2qfCr2gDAFbsmDy4isfayFX9QjNFRztM2GxnNXofUCEVwWnYeXChbbUWrJRhEZNqvsZ6EopweZZTiP",
  "key29": "2SfHRKoKhCWNLdTHua1eSzjbWDDFcVu8ZrQEk3jHWnVg7Duup2xKzVpjMNXevZ8wk9K193YLGDwUheoXA97U9pFj",
  "key30": "m3gosMSWMhuhByLvNYH4tuCt23GZTexjRTd5xCAH8ABj32s6hk6bJPoKa31pDhgVtiTVMDABiBriUAvmgVP2UKN",
  "key31": "N38nPxgsSZcPRy2EgTN7agFraB8n1gBpoaQ4W5NTtwCQfkKbANhSo8xJKtrR9pPXjCD7YkmteYwpqiBSeJHNajh",
  "key32": "4foZzKTFRHPZUz9yffBh1uSotjuHwqo1zBaFZ8pQzHrMVZzeSkvvSv2QoBs49kWcT8DNwHGY5BvMzk9cAi2QT9CZ",
  "key33": "5KGiEWwPmCcW9t5xg61Ljt6ZF83YMNX3WDys4untFS2s3qRWBt3JFYXwFwarJPry6du1jewoAzVzVqwaRv2sdqDV",
  "key34": "5qrJkMENzwsXjZckWq5cGmBSgmBkXTkhbehhetB7boZynziSp5m4aCvvb2SQbQBJsVuQgnbZHM8ng1ajQXCP84h1",
  "key35": "4DZan2VZGNuRLjdFB1UL9Fc55WJB44PzqWZqMD3LFtrEbUXeyeAVZRbk7xZaBf5eYr9mnRikQ52CjojUor6AYAqN",
  "key36": "3wW3KQMNEpZmyid3V7AuZqPJY9quTjsbFicawzHFVsURg8psDpKZPqV31Eiyg9H3GMWSiGjZC1xmnZ2VTFeiP7M2"
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

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
    "2zKq5m6uU3zEWYFMyAhrMQndv1vmdBTrEFnaPVhMzpnarZQQRmvwgAPfXQHK7sLFf461WUwMnCzcwo8pWdV7mPVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "574ezYYKaoZzZLihkfi4fwYCjkUe3N1KLxf6PJvPGxMHtTLrpT71j7VCYm6GtFGN4M8TfLjXtopunvBWTRv9xKmr",
  "key1": "3Yn5VKubo9ciaXvYAS3PnG9kfc5SyZ28ttwMYHdo5N4CZR6EkZXnyi5Gharw32DeLYz7qEFj76KTC2y8buRzComq",
  "key2": "3oumxpUMsRtN4W4sLGHauLKsMPCtY9GNdNHzGw3SSBNBbKfBdbCscDPoebFGUmFXC5AvJQRZvE1qCYot4ja3YZ6J",
  "key3": "4zD8Mkk8xbEjrEYfgs1uUjcCXjRtLeEpNL1h8NB2BU2nKkSzbxxGDKovA8PnEywMkP4PKi1pgL5KKF7BpX64ZNiz",
  "key4": "M9754KBRgLLt1rpz7rhek2t6TGiX6ARMNg3K2U1qfYY5X7caLw2epCtmn1qbVmrZATyxH1LNvTETyH8aQvXsoT2",
  "key5": "4TahumgJeqMtd8Fhz1KjoxSQs6Y91Ub6TFw73xyjXGtAxpLam24wi9F1LgYYACJt61qDpfSCjNE26Uyzpbnwwm98",
  "key6": "3JNH7XzLVYCbBf1Gwryh9C2jV5ZAd8J5FjwMLqqTSHoCvPNmAV9zY9zHk1UMcV4Jxeq5EeXazb8Tvrsd9Gp9WLrc",
  "key7": "66JsPsrXYe1ZGcNSxQD2nauXvuiaJtWiHfzfPm16rcXtCEjnEnrmHuiVuKwoqC41CpDHxWZBzNVMbN273u9Fwzym",
  "key8": "3624DvWQbpxj2KTiUeGDmX7fjxnd82DjqtghZyjBomtyMt5wJxkLmQ7vp4i6GJ5XoTF97FSAUDPKVBboxxaNot3i",
  "key9": "3hN3KDdDuSVXUa95e5kgEqhSAvMDWtaRSDVKeXnK4381B66RRhVVPHDEY6FnREsFKeN6MkmGQKSUpZSvGc4hs9sr",
  "key10": "4Zqcoc4RVhbGJjg18d9FNQrX9ppRCy8N8C7YgPBdbJ9Q5zfkuUTKvufKvLuqtnn7FRv2WRM6B553ct6Kvpayw84P",
  "key11": "34oGm9jN2qu3afd8dEcXVyThjU6KEfsQLZZa2mTBhuofGYXuFUBASLeSx1iMZvtgZJrBdX5uQwUvDD3X8M1wwhcr",
  "key12": "3WnWH12wxFW26xoTn7cZ4TudDK8CgBSjs7Qppyqsg2YTASmbRZCausYudFcRKs4z7cYqxAgfz4ESEpfr1rQVHPnE",
  "key13": "4WENSzuggiLnVwmvH44gHp1EUn2CL6V6AKLecij3SujxiDE2y1eLRrc6iNqv513R3gHZ3cG2zANSW9hMwLK1DQDy",
  "key14": "5f62hGFSuJDF4rXkBnqLni1EadtaGZiYmz8DBbf2GYiLYRJu3WvQ5pZrqrMA5ETsdGVqXbSj9nncgoycSisDc2AZ",
  "key15": "2m6ZsQCPL9mANYVdAUAzGkQrqwDy4DSkEhPftN8PuYjKcC5TBsomGQ23iV6KMcyTiz76Wxg8ziPeAY9GsvLhRb5T",
  "key16": "4AUj8B1hsLYrQSEmQHpD4jDkVnSivvyqnadBTkfx5ApyZmYZQkpBok16abtbyFZ8C1cXAUUJrMptfZBxocp1bWy7",
  "key17": "5oeqXF9eBjLJqhikePMfdionV5MUjaBpCbm9CbLNhfJ9vNzKmbGH2Z5teqSPgo59Q4FwrfLbebmu27SQGQa1D1ET",
  "key18": "akKtraXtm3aPnV3C3nrzaGSgdwNZn1xv95n1zy3NNWCU4u28XZGYiq6A4kRwPE4Xt8XseqLjLuTPzFYPA6TavHt",
  "key19": "3pwcpvDJzCkrcLiHM6KDpNvFXpJh7P8xfasNxfd8TDqpFyKhYazsJmroZFCj9X29J2WBzQqwFTiLrEWV8Brzop6T",
  "key20": "iUtXBAG7XEDQTaFKwLjBu1C2CyEPoTKxXsDXSodMf3FY94jLXdX4RfKLb879edKeA3oyvbAuCYLotPDatKQSxbz",
  "key21": "2KXw23CnBZuzL1rpAzGNkSQMd79VFyXSax6dyxZrRKvKigydGGzd7v6sSJWTFSW8SwwLVjD2Udbrvytd2v1BcdrL",
  "key22": "5QEjbT7nw8DhFSXMygnLsyV26yDbrrjmzKmueJy9wqWQA5k1xEs9LfiwByWXK1rx1mzNfpbKNLiLdpdsjgpxQTwp",
  "key23": "mFPsu6uqWdkCQxmpwukS83Qs9zY3ooyeVqy2RtEAC3c7pVhykATz5DMxW5fxNBY1bztu33MrHfzbFE3SkCCqYSH",
  "key24": "PQpKpTepPWRaFhQBGd2APpDnr5M9TXpiRUZxUb8qVX3dz3x692oB79NkuEsZvcG5AocZUw7d16mnmpk8XkaBooH",
  "key25": "2Aqqv8aDiF9nt3RBC4aa9aZ2XgrLxQDXPrHtuoJRacaetfMUDtSaemEmUp6ncF2e4wRx67rtPM9c1NXpA3iWErAr",
  "key26": "2xosXuzfHM1DdAj9HwPTneGY9yiGHTHkehpsHawrEVc1WJYvF3n6W6bZEcwiPGCtkytyYwrnDxb7PZBfDf3KmVUK",
  "key27": "5Whinnf23rsLTTfCS6Cv9SQ4RsQhjvQDHw2iwbJFZXkUfSBDPgRs4nfbTCE5uRAUj3TcHKYRZUWY8gmycAwSSCYK",
  "key28": "5jAvDSXDcn2pkMay1UuZ3wzYXXUZr52yK4EgmUncTKjMFMTCnKk2UQuwE72tori91sGbQhwjk45V8muoa1NNPuWi",
  "key29": "5T7EKX49qEKveTSVgPKRCZ2Vei9JViwtamZpeDf1qzpjxEsGMmJ46uA7SFyA9AQkYyLmiZxQuAmr87cvP4EpvRxx",
  "key30": "rvYyVZVEDr5msFzzWAQomDLhgNt8gwNunxsc9JAc8eTuawGWxxpeSopjXXQUf47FiuUnSzmmNc78mHfXD7UEUPW",
  "key31": "5Fq23keZjnPHGWtgxPFUX7Ex2JPN2njf4EtS18QQQ4otbnQ1d6VHvFqyLcGMc2pg9qgeATYxtxE1gQwtbzwqhqzD",
  "key32": "55y41NuyUFQqeC1zo3q5EWBsUo7rtper1NUbmUTG7zJzj3eUSSnLrNYdN3x6NNMemsE7XxTZapGPfg6dgmQbAwsZ",
  "key33": "fPfUfY21KCnL6Rky93mZGSYu2pL4cbRp2XoFEh7ZrextKsxDzTDKkCnB15Rroqbrsts1KzMA6SUUffsTPMtNrfX",
  "key34": "3oaFF9SrBYd5iAw6yh4AdEKFtpDebVKqAoY2cBkGUMoWgvLPA8xoNHvTfHmuKBkPYL11bS6cUAtBRyx45Y9gS6Vk",
  "key35": "3Db9rEiCYvvcJtjGHeaQfB3uD68cqdGSYsnPRDKjG2H28W9WDqu8Au1m6cuVJ2V9nsgtfoKf8NSkZ6f1HkYxBtdF",
  "key36": "2mZAr1yo4BYCfKAdD7zLu4ZndJmqrke81LGv8uvo7mTVLJHHiBBQXoJ19TqVh4gsamAHRHfRpJL9NpWGf9noDohw",
  "key37": "3pMLsJ8bSpXKqaZ9DN2jpUiLV8To9LbzUjLRmiZm4E4CUTPfbdQDPPxyq41PRcstm5GkdpcVzmk28m3tgATTYxti",
  "key38": "2w7RXRUVBTLwmQKy8to8QtDm9YezVK9UVVWdkCDuZqofXSLSdL534XHrSH1rqtZHtZ3BkqAF7J9sV2DhEGpgoG1P",
  "key39": "2F99zLoGTdy34pn769a7cGMGVbtYFRQi8o6kWMki2CEX8utpgkoYuBdyHX9Ki7kpkQn7iUa95nvhSe4zST1eHZqn",
  "key40": "58LuHCFYfcVoDSXRJ5x4zR7Vr6H8n1o7E987jd1PmVnumGtPr967PrLDQWAJUA2i8ibb8oog7TtBr9p37KpHC5BE",
  "key41": "3eLXXKDsZQacQxsynUv5832JVF9ofiQJAA6DYJc1hF2i2R435xtAdtXJLjDp1Crj13f4ERHMRFYgoGB2BjcTjwoi",
  "key42": "3vaUPyzL9u8TpxgZdCznCwjvQWRnf2rVpe55stB8AKPSSTBCh1pC6bcCsmt1PuTn5xjU3njwUJjNcWeSkBV5SsxP",
  "key43": "2KvF8QcAzEKKE5uS5kiE1e8F2yUBs8oaghmRes8XsmoBfqpo6aCNYESNXbLLJbZHKtevBAcPDdYb7k14HzmrdT5X",
  "key44": "3AUmpjG6qTvhnuZ5NdXj5yXXT7xfyZK9M8isKHqP93aiaxCTNcP7xW5F5Gq3f3n4mdMRnF66PGbnmYHge4aGCsjE",
  "key45": "qJiuKsiLS8Hg3gdyBeQb58rXxUs4Xz4ESYyeDydZzcjbx5yEceHHn26yD3bPUo411o9Vipj6YkT4zNRHSojopng",
  "key46": "5ALqr3NXaAEMqpeUzn2XQPJBHgsYUk3PLaW4MMLyoQJaZf86oBGV4rsmPPpoqA98wAZgqG2b4E9z4naJpmWGPB5J"
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

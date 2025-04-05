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
    "3xLBJbbZV9N8Kkh27mtwDQvKKY6qtFghHoiHsWfv2AJ16wJDwwGe6b9q97L4W7ryawCCqaiA9FMBPa1Q5XvVAbmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mcNMVTS3exfMkXBuxzVafwKRjB2A6gDmhrBzinkSriomHwXRRoA5FyhZGjVvbkQKH35apuvVmJtZhVv3K2nVLNS",
  "key1": "mv3PnJ7tvUNb8BsZJkxoctWke8RQ36odAtPB3hs3eWW7cfi7vsAnyxpcgwat9TgVSWBDf5t5LHX6vL8E88K7a9Q",
  "key2": "4kHR7BwgC5vdgbUCs7GHa1hwQ1pY5Pqk2dhFa6CZuWPf9isfHUghNT4Utxoskk84kcHs7KXjiXF6UXZcLnvGUQVS",
  "key3": "6NDPSPaPcNR3MrJFCsbdQYFBMNP3GweXyQbZ6gg9PwWcFRLM66U8rWzKBD8z4w6vmS5KMnBY5BGrJtrcEQDVqWW",
  "key4": "JnWhSnC7KNFKz6sfpYkSA4BtQZCKbSnXRAZLsPNsMTjLW92z86cnkwtNfWfTqdVVjwSWMoZF7ZefcWuEsm57XV6",
  "key5": "5YCGZLmb4FQob8WK43E5PTmU6xaAG9cCGvuEx1264PgQKj6BnvMyzSb2jmMDmfWamZqhpMTtCtnzy6XWjecznFrW",
  "key6": "4jmxcfDSz7PWZtAiRCTJyX2ertwaEPKunoZmHzKJJJ7dqFYR8qEybpCjSWDN3coh5qurG2JhCftcjwUGHfk6L8h4",
  "key7": "5bAkRvhfKpoRSWKPJFo2PTzqYXQQ1b7xRxECLAgpNimsmD3AKWVc1n2FecALnw3TYWQiz1y8MwBwMnR2ByFsuaCR",
  "key8": "2zhNs4KoFJWPN3CAUCTaZN6e6LA9pE8BbHKpoTbq5J2XrXKbWSLRJaf2EpQrLgWsGcxPLZFkJ9k9SvqvL7Tv1vFM",
  "key9": "4vpz5TDUbYtKvXbg8fdR931aMDf9p4WtwrGXDwk1ukwZ61TbW1aDbiD6bUQZRhK2oNSGi3LtCmYndaQ2HH95tQZY",
  "key10": "UaRc7hWNzyrnESQPKFjn8YRBkuxSNbUyV3GZLBQv8wy3JW2NtXB3FyehrAbfdqeujXs4vJEMt1KT2o8sGXZMqYu",
  "key11": "5JZbYgfcjLy36J9GUVQd6FsTpvwkA9v1oSVi5pgGCDLrXQ3bnBvhhsnLQ9Gffm9qw56mheomuRQ5wyvnWZZEuNjP",
  "key12": "2o27fwgU6BkeSNRfkYGP3gE5swD7QZZXR6pRhNxtYuLficRvGaobpXEekKjE5T6sSmnpEwdFea6Ppftu9CYAvFKs",
  "key13": "2erYmzJuwb1w3du78fzh1d4JAFmo3BMcs6Vp6QKePVWBRwXnEyrF2dfSyuxNo8AiKorxFMcjAPc9to1a3Va8r9WN",
  "key14": "oSxKJjngnGyUc8wPo73Dq18jckKcpaQi1CNHcpJtAwTJEsx9tJioAFsd7VoLtWqxaMbP6yj9X8E75KDAL5v4njw",
  "key15": "5yEXfUZvEeqHMMjSh1gX7ht55P7umHx3d1T4RL5xAkz9SjqJBDkjMyjM3ekQpjyWGAV2vY7FBS6RJFaMxLY21Mes",
  "key16": "5unMBQr1ftB1PVaqMiR6FZymJMZpRkdiRjzLhmZs5VovfWVjoSBbcgY3qna8pmQcBabxaznAarNDeNjRf6YdgU5B",
  "key17": "Nkqcy9Fvx4f1jqQA1ETz38V5ymbC3U8ifYeBTJVUz35uNt5brRCLUtoRFVMrwaxn9qdUVsjqQTBmjbh5zXoMcY1",
  "key18": "2FBGCy5egjTARBVY6Yg422bKU9LRFbsTu6A6cnwYCAz8782H5A7HF1jzPfBsEBZivtQQWxpeRzTgh39iVACJShdJ",
  "key19": "37GQ1zZJZNTQMXL5QspS1o3vQ1bBS6qfEXTZJSCBxDwZRLcNnncbGL92MeFhAiKNnCWmAEHof1kYCewfYcFQnhDz",
  "key20": "YQ1Q1xhTdM7cH7bx47rQKNwtobPz8D1RShBZHDre6c14eGyE44BNQBh3L76xQvQcwtTzF22nQnTxmriax7G9HwP",
  "key21": "yfij7CDUYgf2xGk9CzLJWiPq5EBpvKfj3X9r7s4HCmCJwj5Dig6tSPNZrRpvH8uQDwWukqv45iLfhdCFoxcaCji",
  "key22": "4sPmyj5k7p7XYWezQiEyGZxL7ZQsR3bM6zJdwWs5zapVFLRRATMZeb1nWmVnjsgygDbAewNk1G83pV5pj3JfUNqP",
  "key23": "3HyBYhsQk1BuaftRaErwHXmcusPRajNNn2WXvzLtpAxuuuCYHf5PbaMR1GRtvaBJHq1H3kWdfLGrtumnQfJ9eACs",
  "key24": "3neDF25PkFHKSsjFHXsJVwiSbM75to9EY7pNv2aVBKXnfZBsVapr8EpGLLYTykKxtKZ5e3ceXaorY7fA8G9i74rm",
  "key25": "qK4JeuoCzuRtxjCacJbWhdpx1oebFGmEEo9yMq6Ai7rLFgdEZgUTzuMHWMVZnUJHQnYmW3PpBon1m4DY4ApmWHh",
  "key26": "3vdqWEjvaoWvs3hzZhnDJKeGgujzEHRzTsGxym7voAs4QmcSh8cou7RwWo4i6WgZUsAuNHQAPZ6gCDmwZwdy9iTL",
  "key27": "3KPjahtdnDchsknsKcQYpK2N1ZB5YJZfuNWQzp7TxDP2H3U3MaRDWYKzBWh8HPQgbGutE6w33EYm9aMKpMuTCXjP",
  "key28": "5pp9JhLbrfPv5yBEeeNKGzibQ1ojod5CHmuLqJBoUzetSMaqHLVXSE6DcLNjSxq7Hjob2NcKK8Wrm4tSDwRtow3T",
  "key29": "3UoLgMrKEXkBTpz7KcUoFF2zfu58mvkQHsuWzmKLPuqNLsaiQGj5cvCq4QuT5cMb8BjGJoQjkdRaMNBn6DnMCqne",
  "key30": "Q1SKF2a9gxWsCGKb7A6tNz8Yznpqx64xJpo2rnxkPwjPx7nanzn4PFydc1ZNrjFUM4RFVvXP7VfE4P9XDn4tatg",
  "key31": "5BH7WobYUSpWpEK4Sqqw5ywcbG7cfLWibdBFWsk7oyfnVRqCgjGeTQcg8ARtukbvxrK46K5WThr7HNsdGWkc6uTV",
  "key32": "5jN12karavp8wEV692DqcXDDzGCC9gUetYDFZCJKFxWmLmEPnj6M6bcgmmimEnBkkD6gHExnRTHZMSa9Vxe7By43",
  "key33": "o8qYchijSh2N6MQEjtqDDnSpaFSZSbBL3ENYnvP16cz28fWAbifMCCqp3dybesqQTiQjZyuNNnUh28H9wsu2mdR",
  "key34": "QrqKzkT6gvYwdYwhKdiBXXQgVG83nZQrtCDJAbdgy4JLpUvHF6pmqDN3554PmZxgtasYd2WxNsLFLPcQ9QQdCgR",
  "key35": "52fmCnS7dizgzwpNjrCohsR3yCMm6nmHx34dtfRanb5Y8BALdUavWWQscreFMFQ1JMEj9zJhZ8JygnGXE3uhbiH6",
  "key36": "1qwSUnKmfTHoNmnJ4iV27zEtFM5Ati5xr2J8UBSrepFtJsVP5Xe6LQH5Nd5tG5mmDG2GLmqeX88aBaRQtsNbA7",
  "key37": "nXjnwaT3gXdV91fs91t1uYUiywiLArLuR8oGEjFHdxzTgDU5pHjRGnSUVJVH6Qx6e6d9nX1w68Yyv1UmJWJBjz8",
  "key38": "4hYSF6dhJpyvEZP9r8nQyF5UHt8iZUJz3ZwHULzF1iqwtQ1P57tt9pxTqL9JBj5y7cxNEWWjgP7GhEHCEY4vVRqM",
  "key39": "2PcjH3xtU6oCxZS4HnkcsbXc5hqLv7WTQeFZmLkffYUbZrnafo4QLZom7GyB2TXuGCrLKbXxSGVuf99HdZdjNmK7",
  "key40": "519A4sxqofB5t7XisajyGVjpARMXT3GJAP6RsRTvzJzSDdw5eR84T19FvRGnN9MLpuDDN61kbPN6L3nyaLvhxGsV",
  "key41": "25B4pYHPoWbgNX7aNHhfmyxzHagumRHYQ4peKe9Xd42WoXP22EbndcNZYnMsuPAscc6f9y5pvmhBMxnQwAngfeoc",
  "key42": "2JwC4XTtjN2M4JRF69YDFh4ZyocF4hm2g8w8QoERegVTTLZGXLqbnjbp7c3TdqZjEQg37nzFXKJmnX1V2y6CVC3H",
  "key43": "4knre2zHaZ4oJo4WVagxosy62qwzVDkV8NdrKGFX2FhmiBiCESDkvk3m5UHZU7DUr3WSKN5z4EfZx1D6btua5QWh",
  "key44": "3M42FETQ2C9Qq4HURQ2nESYm2nmUozZ3u2miaH8kgG6K51hK8EsbgzkCYwhJ88cCbZ4othPjdbUHLAfP1kKYUG6D",
  "key45": "MEJrwHNTBw96Gs6offTqu2QRVCHFcmVjZYYG8CAviLhSSE8WRgvodANyfdugZ2fHz2s1d2PKiG1tQrmBtiQRcPh",
  "key46": "3SJqjTzuXqxFYPDkWVov8rrcJnKAXWxCXha3JvmdPBi1g7SSkWbWadTtn242A8ZEfCSoWcSyU5KrJ853rAAF4K8Q",
  "key47": "2Ne3h2AnphPKCXgQmgBXo2derdqvXSL4mcNerm1cziHYW2t9bmYmaaWAkGpLfoM6gHfqQ1aPf8F8nrGzrX1YLiF",
  "key48": "4aZkMJKDRbgUfzS1G3x4WYpim4PPtaouUXFq2usVCuJkks4xXixejfeKuRk76YG1bdWerFQy23qwb9JuutrsC3sY"
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

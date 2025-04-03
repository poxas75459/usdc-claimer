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
    "3iQ6AWRyGVnLJmDPHYAQWmBpjebKmywFdpkEYnaEZz5KvVLkDqSKFALj8cc92GpqZLfWUAFGs8bGkyNMxWhDRPCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QPBLLwPX8NKAq4DVTtACACP5mePQ9uF37fVG1bfRemrYsN6ef7mu7aN8WWq8CAF5eKfKNUqmp6YFm4DjJsvaWPP",
  "key1": "axgALaATj8MkwUCyA4usx9Qr2htYYqe8Wa3Ck6436nH4JMp2bQ2c4Wwmpt7cdmh8K2dkrKwhu2xnUy7FYzqSdWS",
  "key2": "3tNTZR8EoQTMtapEq7H3DzcJ4RvCTCfKmMuXWCvSNv7m42YVj14SpPVEegfCQSQQ5LrWbKoFH8Nu9yUuZMfPmvrg",
  "key3": "4icSH8KR1afWBZNm5Nuwsoexck7VgqoUsHiXYX3hLZ3ApN9UCzqMR2iQnggU1FMX3TV6EFoDxfp6w4WTFBbFXcac",
  "key4": "3qJPqaxzhkTGZqJLpFpvFJY7M7wv16NNxQhm8SnG2Gga9actV3RaGKfsSggbzsDd8FQAq7cV596jqHehB574zwj2",
  "key5": "4t84cWfBndkUeGR79YHaSQvdfyS1hoFCJF1nerSUVGwmWAykFp51u1BkW7Y2GXVbs82KqFkW9UnU1SRbHzWzy8NB",
  "key6": "4QygXRw6P72uRNUCvwpFJqhHTCV2R7XKq7VQ6i6M7FDiapMoKafM4AL5XqftDwLRYyA68fwYZiJZ4pMa1ax2zfBc",
  "key7": "59JVqQty96y4wJvuasfEjtk2EjYR58WsR3oXCDdUqFBW3SgtWwehjdoL6WAovwfsHqFdG77ARF8QqJQ7GaEsgiQo",
  "key8": "524QipBTP2rutF1kR1Pb7HHhALwaK8Z3dzU5uzBb2Nk9Et4vo3UbVeJn7uroRdafgXNiVffFGhvrbFmWLbnfoQxD",
  "key9": "2ESNZ8BnXeHDV9qRyKzjzCdirZgEqpSQ59LdSn587dtwNXRnBYgBtDtGTWWNuk94yhabjHz8ZS2oEPxVe8RaSvS9",
  "key10": "2v1xSmVxhK2BPLhXcm1f53TwoDoxgB6wUeBejHeTPRj7dbVpFE2KVagRPBRZVhKpGGvszQqjPSpjgfeAc1LpoLWW",
  "key11": "4ur8V35dgbF2BwxHsgrBzHhPS4hLVnuftamHEbkk7gVvXia38FaAxheY87MyD1Usvw5xiA2Gshjg59H4WyomS3BH",
  "key12": "49pkJfyh6tAEwFT6Xaws2VsR3RkjyQohegGJaX874KrsT56MfTohMxWfwxBCFDTGKqp2FFKkDPQqRBdk9xSAj5fe",
  "key13": "3fkr9NfYqAXvEC8wTnhLVW1mh2vS6uZVh4JiEBFeaWTWxRdatsBXmmQmQQDw2WbPm9o62TDHHAwZ2MZFRJj43foB",
  "key14": "3gWSSSaAfAR3QGb2jyzpsY2NMy5PSraMubYAeaxf3YCQcoPw3XeqEEqFbSRnakPNQQo5qbvptAeCd6X9KoiQmJMY",
  "key15": "WEPftidUWDDZ4YASyrp1zYLpfDsK7x2XHUXgiGDwBrBq5esCRR4gjhZa2tDEjqkydwkJu27yUJzQZUuHShNUUBv",
  "key16": "3d3xWxvb7V6qT7Wx98ixxVKFMkmVUzJ5bqBuRjBKtAXLXEeaYwBtan1ZmNJzMG7NpwmH3A3i1JQ5jGddFRrFfgin",
  "key17": "4y2q22oN243o8W541ttMC3GUwK17BLo4PnAueMYpgvpiJ1AAJnyKeogWNPqHAwbBDprziVjScfiNAbYrwDER5Y9H",
  "key18": "2yksJ5CedmxQp8ezmKuQtCEoM4u5pZMK5KMn9QKGNYTucTiDjmwUxMJezAfzTL8tY7gjQkWGGP11C8Qb3wiajeCq",
  "key19": "4AXt2waebaA1tQRcvAW4Si3ZxyhnAfzaw9SuB3RR6AfGmSzyRDp1kjJvyeJ99Ue9ZbXay6CZUdrEQ88ALNjpEheS",
  "key20": "4qWiqYtMW1eYJjLoeyvZ5r8BeanVxxvJzhGRt2hXCM8fPSTZj9ytjwzJ9o6FxjCwiyAkRNjXFdNWb3bK1DH1wyn8",
  "key21": "3NGsR5myScM12XVUjCC7MAMGLvoPMUNJRC323AJVs7eW3bC4poZELZGpbRPN9JkhovvdwQXSZdbBdpiikeAL2DhF",
  "key22": "CbqhZWeRASLjcc9nCbqKfXSfT8fQMDhrqS8qap7RXScYsh6wYp2huHh6815vTTwuVoerf7qDaq72VLYDxAmAKFd",
  "key23": "tU6SeRNLYvCPJYbhHPP9cJMLdd9p5x3S8N6JdFpw8S5jKyRV5HPBnEfX2ngtBhwx9UsajrskM6TwXsUfWWoU5oZ",
  "key24": "SDp5RM8q3R4qQZ5XAYqvqrsk2pU2s7uESdaGp3gZHn5D8AmJ9ydjd24CYwxerHpmCuieENa13K8iKkdcKWkSzRi",
  "key25": "huSn25HxXVFvE6UYvMjBPipSNwccZRTjnvx1vFZBgcgbef3nTkRu9wyZFqfJcR2hUNmfojGtwheNGgTHMwcYKii",
  "key26": "4ycfDiWubnrgWSnSRbSGKcAnq2abbdaZBpGRqnZkuhUH55nBKtyA1nTZUH4WvEn73ZTRR6uGwy4envD6JjRgmmAf",
  "key27": "2bP5CuxexUjK7pdfkw8x4WjL8HJcfpvxJSxvTkqQzyCHk6gjUVGBiNLLPLvpj82AF18K4bFB29YkWabFRSWkbR6H",
  "key28": "31uspGKBn76ZtGKJp4235KT3VyTerjG99Q9fJpP5SSyFWcb5npcnYMzU1RjkLHVbgTtYyhc5kjV12QouVugYavqe",
  "key29": "473Q43XE8CRfnPXWsCcow9Pangsrw76837S5mJNhRgW361DgUYp8TPZwreTibRBB3t5zyBMYgYa2Xy9NRJtjvYSE",
  "key30": "4L4MnW9D3Hhhcnux2Bi4aqKAQWqiojakitBYXCXmkQWKhJqFBzghpMwJfX1SWN8uggrEwcfEGBekNHR7UuhjjL5t",
  "key31": "55iHQpRwvSHmrGXwKvKqfvteKZqSw7gMUSFsLxG4D6Urv7YuvkBy431jnJiUbQ27cZuYxhMm3D2u1dL5HNbNkdB6",
  "key32": "Rdb6dLL57eZ13352w4FAUnM2suTwUNP5dF9rjBJNG419dYFRxD4ZX6D9ZCzdiemPzzP3pHJCx8wFEqzMUfAFJHU",
  "key33": "iYK3bL56N63zMJBQaixSaLNPAFLuhy3g4v9urcf2nbRkeQrgvoE3QcFLmJoNvDzYxH96em1B9HibbGcHHXqfoRp",
  "key34": "5sXw3rt7HsyvURq7dNKXzGgqFhUiJZBZ3iGm7wPZRqxXbGN2xDYRynTxzMvtYtddmtRxsncNVdUDmKb71Nc3Jvp4",
  "key35": "4Zh6sCJKmakA9168dkBitkaUYqH6XZYhEH3uRabS4PjVH9EePvXvFZ8z6FggueGJLx9251nEa5dcXYTCs2yZvmPV",
  "key36": "Ua3zLhMXraB7maAiobMpMKR7JATTnV14oN8Cde5NBKJ9kurG81WgS5KgkMUHVHZbvVHQmQjShGVe3DmqXD9ZWRV",
  "key37": "5DSpSx6Zb5SA8yyKsrvgooxW12DyfYveGNa4EU7iogw6j69XJ5YfEuPbkMy1DNeQoomtuFHV4Z9MGfK1XNURGHzw",
  "key38": "2Q5MWRVoKxbeoswmptxZbHc9yBh764LjuJ4NqrXV3xVkBZvNpWpPYk6Yi2m8tyGZHkZ3emtPhayeG9kY75LbTyUx",
  "key39": "4KoDAVwSDyiuHMqdLbar54jHT6B5hT7N4sssCvAY9dVEWGorCywN3dPpSqBMHDFap1FNfq9HTSmNX24uEERgtdde",
  "key40": "53b3gDrgDXqVoLXRjmT7m8v78a6sSavoSds5ZLxw54Ui1N19h3soC2ydD3foFvn4XMhfc7YbC6katvHsjG9TyCZ2",
  "key41": "3qU97qmjsxff8vTq44unDnGR84wbqGwrL7SaJE7VK78tgqn1qTVjMm6kiirwqso1ANDhK9EJKHt5mwbizz697ZxM",
  "key42": "3tFsttfuA3nGPWXrcBTPHnQMR3Yp1iHSdVAha1WdyUizxwKLPnQTEBV4LmUQqzLFiigLSrZWSDyPVUk77nxEuiJN",
  "key43": "2v2VQMp85U2kjn6P9TkpNcdQatYy9PEVwvhz2Ms99cyFxq9EbPPAZTieLq4rdqyG22fFkRkv1fDaohDNJqkhAFxk",
  "key44": "4cGMwkHNF3owBNcA7oeLeSqZHhm3TcXBWcsakDBJ5hozLcbqFFey2tTXM8Sme2wgpGuRhBmXas18e2rkSz5p8RFG",
  "key45": "57AobWirh7EV4V9eKMjW8bBEWBWwFhxcM4LDhZ5vTUGCG2NEaKowKqEPMFP26LXUZEmCBpakutQXVXqcA7fchhZe"
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

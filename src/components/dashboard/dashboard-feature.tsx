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
    "xoiH1EmLJRChbPpsUaLiKZ1cmZcV7fL1caWymRmXZB3HRSWBF1BJzKd1qaUWQw9guS5QSkRfp1y13z69Pezv2bG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24HBXeTkeWACasCiqGLqeEvdX17Y9EpAMKiJD2avT3wKuY4zxru1XpdtArc6C1SiAVhVpVc9fpV42dXw4Ehb2wcT",
  "key1": "3Z5qNkGB3V53rMZMi7ZHbQpDcLihU6hdDGK7dcGY3z6vj542i1SawHijMTfd1VboNkZt8yuVNmMQeiD1KAWXvKtG",
  "key2": "32zq7t2uCt1c9Qb9cL1N9buzQNd9mdxZZJiDkJd4bNLVfTcrzro2ojTo4gScf8MJZE88bUnLkSPMqBuVo6XQD6s8",
  "key3": "3PkUMawQJHSHkUWXYnVVhGsXKBCSvwJy3BoLxKKAfcynUbAWzUf8sQqucUNCNAYohPyWV1bDWCA2FTXhfxj5aXcV",
  "key4": "3fysEPzqpK4DFz23EtbtEuVGmmzuzHXtLkygRYV3X9h47R27U52ppzvxiLw6BBf7SYLwWjtvpLhBDBidUU87aRzd",
  "key5": "5hTPxW14yXPvw65vLpdFYbmhM3V8QpEnPNhmAAb31kFdABWPtwoCD85U7hYb2X5JBJkna3ZDRAXTRmVatKB9d3aM",
  "key6": "649Db9vUfTegAHNv1ZwTNjDzMRsGTNoYxcjNtEUjPBtHqKsijgZKPbaZzyETZ59qp4UWuBoefaP9KtHEaXbZr5mZ",
  "key7": "8ryX3bMGxPvmAY3KTVUsEVzXTYtdYD8EWd1uHSaTvEDXmERUY4SJpM9Ctqza5V6yce1Pd8DfUYaVQSpnduqKerL",
  "key8": "5GKynPDqfTwAWy1UKbxHZ78tBpgRd2zA9zVQLrScY6sysgL8GWsij8tYzBCNeE9LxsmVtQRRx7mveUpn4n8w2WrG",
  "key9": "29whvCXqjvMchcRvhfJCRKXsTXMxDC7BiJBMVQsWXmnAhEW5GEVnwBd37ckLjDZxwgGdgU1EdXgLXSL54XDTD7VW",
  "key10": "31eekxFvZ5cHUUBZQrHKU8AEAu7Q9NU8LAmfoxKHt3ktahDhGeZZg8HhpLyobfNUv535nNg1eYKYBwfU1zAmSTUR",
  "key11": "5XPizr1Cpjf5xfaszjxj6YDTVYWV7uu5oVv5JvJLzfsYg71MtxwXWXagtHgco4DiiYkcNjymNwYBSuJYCbQvG8Ft",
  "key12": "3NjMrXXiQcnkVpu8ARBGHZm4hhbBCvqAmbtdLgt7twmhwF2AUfLPPh3p1h7DywV2AGDVLJNbEKG2ddpVpJsaYh1J",
  "key13": "1DdYwQcg3VZaWApgxvcLGGnPtwF5EjHZJPRCpW47P8Ym9s6WPUQii72D5x9ixapDbFi9EvytsmbDwwRWkoRh8uV",
  "key14": "4w27wAQbr3jJh8QxApYcuE5HKWPo9zAhy5YD8hZGx4zD1pFibUgPkT2TVnwZbGbaPDvrfpbVsHy9TKEbAZ64TYQX",
  "key15": "4tEUY6yteXeRjZshmD9B8JCoxBYJqkeDM4o3KVpcHzPL3vWiRQb1BV3nwvgqJZHRDPLH8HPff5ukMXCc1bSLpHhV",
  "key16": "nCE7ZiddTDdiofcub1AUjVD9hgE4T8pP1XwC5bi4vBQFWU1YCWZ5tFs68U3ho4ta781q5katnydj6bDQ458EbhK",
  "key17": "51N4pYxL8m97gcvTbryTBVvx1bJvKdif66NCVC16v3hdyPQHAiasprs9ENnErdMH5QznzjWNq5ZRJRcww3EYs1Z7",
  "key18": "5w1V2NNzU8PGZeYbxqDkyWEL4LKHFsqraEF53UC2Pxb8VUuVZj5AqNsBbUMsqfo1B8n8BFfdYkzh5HmNu8rT9JBp",
  "key19": "5MUYeJ3feqV8tVJvHKZZ5q3WnyiaBQQ5xaQXHk6SXNTm3HP4g1mohbdyvc5QhcJ5NJCDwEeFbVnDN5eAiJHpEveg",
  "key20": "2x4TqQpZCqtqXnvRsgFaCpS19HaoCLVQzZvhFwWzfN3xY8jywojprDxBmkzub5udREWeJcwnr7BaEcggNZB2vgif",
  "key21": "2dDHFezFSNKJ7F8WLqdKm2zFLRuyPDe6GzB1RpeCfZEZqmxM285XGruu4Nud85vKMCFVjX8XoBU3duKmc2xjeU9p",
  "key22": "o57rVoY75JU8Bp9FFaf5Mr9tWwrP8c5Tvy5FZzPhxo7Ra8fAEsBcugVBoV6HyvpSJJJnwnetxehGzy1xStSFyuA",
  "key23": "5ELL7t2gRzokKuJG9m2hgeg2wKG47XjBgTi96mB6YzpRrkNG7sU8BEyGpAPg3kSyLZe3gS7UJqYWHoYAb9qLmgGe",
  "key24": "4BqdGWEUU15XBczWGytvmFXdQgnTDmVwY571FGn9y63WDbPY9dFniCoNZkxg3oYLpfqv9jFPib2ppvDyexK6gyZk",
  "key25": "Q77YP4Luz5cU5MXYw6Gyy48FHboyMXjv1N8cMdmkWeNM223PkULEHgLPddUCorb5psSqjW7t3ofsUZhzT6zRku6",
  "key26": "34FEwcnMUfXJUbqA1kmqpzogjLwdxfg3NgMUKhbGcX3cf5j9XuL6bTvJhq8fNeXSgqNuT42MsR8FcYPB7aQ1vnaG",
  "key27": "8MnRC5Eg96HryKEFEyYhNtLNLEMJyoHS7QybyGrHnnVdTPeBPxbB57yWejrMEctSmnL5gxsDtn2NcxfPLnQ91Bz",
  "key28": "3t1jX7V3A2hLJo7SeD9hJh2jy4jwSuQh7odFSjsUvkvFrkBv5o6HdsiN5wqKgKjP8kZdDFw8bfbfRJT3ptKASt4x",
  "key29": "27pr1NyDUKx9s5e1AwjBoa9PKxJ7V7Jx2bdrtgx4Np9VSRcta6NyCa1ewNE5uiZez4AJiPho1ZTJR16USMcPuAt8",
  "key30": "3NQ41CeS57dsncYru7YxBW368N2YPGTxqxRcjkivBDo4btSDuZbUVN3PURtnCx1mEf62wJ4aa4brtUrdLKCY3UYw",
  "key31": "3unY65MVCU8HJXdPkBNNMWJRG2kRFehgtVRyWaJEaHD9Eg1Cwypm48Mg8ZXAHD9pYy3TMbgCu8PPoBkKUu9H4Njt",
  "key32": "3gKZQWhhQ4pbNwxC4cipghMvmaAfg2bYWUSxdcYvuGBppmFDd4ZXrpRCd35R6sqVoTEQ8QYjcvvoPsTru1N9g4S8",
  "key33": "3hDobym7VGsEt1id5j5TKk4wH6Qrzni7RAzjzZRHhsnXDeWkdgpQ1AXVDzGdQzsmCxwqkkch7QFHrvb6vZfvo7XM",
  "key34": "46uDPYMFh3cuyfCavKKubfswRzBvUde4VMHj2jqqgQg7k3Mu84gRTvY2kFYmynrYFdb9uViQFu3kQSew2xFZcDtZ",
  "key35": "MDLQKf66s16cWusVZkfxxqdwsBu9y4tQLwJuFaLdr1FZeRSXF9vAuURaHoThLbyddXgmcsvohsFL33fwSyZGv82",
  "key36": "2zWLCrH5ZV5CSBFy3YdXL85YxKPKTroVje77GwR2omVrpGcsbyAutzmKz7AumuKbtUCUuexSbq7LF1BCQ2Za6Tpg",
  "key37": "45wCdqtDsceEoarcKcwGfH3nptJPWk9ML8KBybNiMxeWRUoPPGfYUhS6tqgCpqaoWWLdopkQ6x6b992xMbBXSWz9",
  "key38": "3t2wqrmCbfVnNVR5twzz9pUXhyQ4JkNWz3Unrc21P8RftRi1yca76exStRY4oTuapDzoqTpGuiwuYoAFBktXUeoj",
  "key39": "3BQrgtcTooYRTNEebN8AAxwRCz3VrWf1ofLLtMu4A2isP2kxkjgDq8iEZThb7rGNHNr4DrtGgJ2h6uX1SJ4QDEup",
  "key40": "Z62nw74hmkcXnpKQs1P85uyVhLk6FxT8N4Ue8Ti6rtwvSnetLjMpWps7wnzaSMPUxRkwH8tdTQghwov9CKQW5Z2",
  "key41": "5hnP9RXmshSyZYpxkbq2fdBZhdTG1r2XZVntrozorFZinKe3djCYrTTDQPwdctBzTWau7J5CFAECd3VUpFMbm71M",
  "key42": "3Pxq8MC9bNV2MaAeCa4mhFtCmC9mZCkbauBQj4iw97FA59t787WgSkEoGQcJKxy5tQsRSFvkM9UcvA296opLkKyd"
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

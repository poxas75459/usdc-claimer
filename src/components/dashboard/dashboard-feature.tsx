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
    "67b68TmVVM6yi5Dk51KPnhxQfnqjrYUjgwC1mC18Kwu4HT4bqSfBta4EGSUp1qXb1BXbN3C1PBdwT8YTKYradgXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dT5JerYYGMAmx9qzkZiiVn2MzsedXixD7gfWjPU2LBHwNptYkxQcWJ8HHirzsn7qScGGzn59QdDRUzwEjZDmQqY",
  "key1": "rwYsFcEPDjzKRmFS5juqQziEsHFaf7pyX3u5mFYnNgqVT2F4wbyGC2FZwt4xFZu7NPHomUREkLeH2QMxMtf2JrK",
  "key2": "3ENyGjA93k6sN6orXCLxJdgKFXkqUus1i8frgZNgcWoMqNy6xKCqxcqGV3wozicxC1dqEePve91UMrdQtuw8Y8io",
  "key3": "3HW8Xns13zYUC55n9fs6xNJ7q7PVCzfoWkzyYXbnfDsuRZvE2kfTjGsHmV4uZqGfBRsVCgxk5csKcFZNf81JRSr3",
  "key4": "XX7LTzm45axYntmS2yUoru2gqN9BRvvzMFhDBtUbnq9KvtxTLV7vL224KiubNLasrHhBaNjrKh2gyhu8YStMQav",
  "key5": "zMxSeSHpv4q7fHu2w9qEqgM1KcfZYza3pknrPcEBDT3ciuNGF7dxy95GXYFVhLZGhc4nrckwqqg81SmFYFjbPu4",
  "key6": "K66RLY9vZU97gmvw7TLccJKvWFnHWkm7zrDDBLV2Q19yTpeuQnTUJ4WNsNmnxoEGVrR8LodaiHNhmFiq7afENdV",
  "key7": "2NMyPVHJJ1FS1m5UP995om5PHVyCkZrRbyRS5dgS3fTwG7a8cWLtfKqSaotseb2YoFPwrRyio2wSgP4CGP7ESj1H",
  "key8": "3CYUaLcKH5QVR8hS7BZzx6akguqzyjm8SR6Kef1VQW6SaJ3SW2mdw4Hc1K4ktdH1ExBZT5qu9Bqdg3B2hop2buiQ",
  "key9": "5UAwhyrcRCe7ccmttfbb3kwhEF8NvGbsuXeQUpcrpJWtArnPeBj1qWFMzUorkkfto6mnue6tYyftZSQYHMJUJLys",
  "key10": "2eQkhBfCtsFNUmD2hP7E41itAawhaXyUC8DZ2CqD7LZxe2yaJU5FaYXwpw9aVNt2BFEiKTTDck9dFGihMkuQbV94",
  "key11": "2nXn9RK84gGVAuYDH8TAhohw7ZCVQfE5pUdD5soAw1aSiYH543kQrfw1RWz6ZyKJabCw79Ry9sQmKdjjj287FSyE",
  "key12": "avmacYfBaKauHP5MiVUjZBehyiMRFjsS9DEGn2WDALDtoCZUJnZBNowJRbshDwjk2pfL37vda8Wzzavg1m4REnc",
  "key13": "2EMs97eAUFhQpEDGYs8xmf2eXnadRSjS8zHr3EKTbvaJA6GVRqeE5yiGVAoYK9s6yR7yqwYyZqWKHTUcsrSrQLnc",
  "key14": "21M6wJ8HupjFpehzk1Ve9JgUjCMpmbshRtwUERUHfbBfmHo8q2zGAWUdbbGAwPFFhzZ36fjTemE6RAHNUHvR9jLx",
  "key15": "3HZuAA8vhvconc1EhkAi91uEKyqsnJ4TTLq8JKWCYmiaaMr2SqXMRV9tvKnMT8S8EQtd3ZheoP1PJSjtJwE2m5f9",
  "key16": "2eaXKeGZF65o1WQcDu9SPZX3eT6vTnFofwDahNL88v2EzaRfNSeXmEzuhz46td86ZnRYo8sR4dRKXtX2PPPtMKjG",
  "key17": "o1vfqJAcsWKyzVMsV2ZVnjyBP41uZWKEwyuCta9ZexTxhJe4FP5oSMdjdN8yAryUkG4t72ypwyTcifwT3RMqKzm",
  "key18": "51n3ULZapUiEbcenan9YQC9QJ7CGaqbEhTaoFLMwJ9qWbKdAqT4qJA3dFWXEegkehZQpBCUWTjT2JYSS88NmbPwB",
  "key19": "Q7SjFrP2xmbxheAFBdLXtGBoBfrxWj6ddmg4vMYhodUKh7qBTDoAUhKGRg7jJKxdV6cYJh3oq8xqGymt5EcVUxP",
  "key20": "2EV53tAbRdRS7WAoFxgKuWpMxmt8h5kh7tQudKbb2BnGDtCMCM2Sv5A7QEy7Vq5JayXmrbw2JVhApqu2yawSLsu6",
  "key21": "2WCASzLxPnWSHZjm15RitayTb7FiVPrVU8UBUq4zNMTi3X7LyRtvFn692hnrkYtuMfz6eYG82QKg48BLQZF1HdG7",
  "key22": "48pjg1e64vjqaZmWDwbqu5rSukoLmpdjkzxREb8u9nAZESzmnFDLSxobMvPKUrGA9hv3hJnCrA2eBYUSn1pgrLZz",
  "key23": "4CWc6VSjBmo1QRFisShPvJtVbx6U9T9yJVZQ9mYxj3V1Boea5EFQDgHj1GkHwcXi598p8SaVqPcUAJ54GipxPh85",
  "key24": "2nHq2C5MmKqZxYtCsW7adcpLYciBGuBFeuxaxu2QtgtDn66G6w1KYxxD33MY81FCT4cyCWAprNvkdyaUcEN1i5R4",
  "key25": "41y883edTQcPpaNzs9eAWbF6nK2Mh5A2NiYupCWWF6raKTGL7gm7dtkrfZsDwRdnaWeUFE1MbewArEGiiWqxw87f",
  "key26": "zJMQTH1LRQSsgVhhgNpMra58biaja6CC7o797yHPojVNrFnDQ8fnk7EQvuK9zx7q6Y9phZNW25fyiWN3QYiqpDp",
  "key27": "31XnXnCyiRQTEWX3fcQwxc1oVZN3APRPYDzSebhnCoGJezfoijS2cvHmxcc1Vo37pn1sATmksXSRGCKLyQtzf9KA",
  "key28": "3EmWhQg8xQD4zTgXUJQkwQLd8pfx82Ta6wiahxVGpBTAjYdC12K6Su4MjhZmeWYzZUqYy7FXRPfn353wBwKYSz4H",
  "key29": "5EvG87ajkLfsNb8ytuqCXAzcVnygk4hUkSEHwtsuVnf6mreyrzGDS9hzrYoSPMzNQu8iUj6EKYR6ygK9WikszxPo",
  "key30": "4dwdzotsusBAgAE26JQdEm7kG4kE7UVry7vB4LdkHdiCFZK6knTWdfogdtTCc6URCNvt2Jk3mzToz3CoDwZSF5TG",
  "key31": "4YmkdzpV8ABtTKMwVCH7bp5JbnLKiyQsY3dDzvQ6zvKGRSNRx2zVm71T1UtSKh6f4sK4YDweEeXnyMA8kvcWahc8",
  "key32": "4SvYJvtRX3tjJpsBYJfgR5C1fZAhyVLHLdu4KnAM1Jnp9xpb9L2bUkqsjtMqqEVUTQMf4rS1edLYWcyQEW8kEPV1",
  "key33": "33e5KsHLznQsbwWhj8YhYjnmyEMbYyaKgaGLVAD7So6YhV1aJPa3DEEFrGUxyfPCVbGX7YC5ocbeJrFmDktYvgJ8",
  "key34": "cvNRzJEGE7fSxa1M4N3242k7KR4ciUEP3E3qvJUwZQVxJ9vAwA3ozKg3KiczyqysVfwGpN8J13YYTpMk94Nz9hz",
  "key35": "4vi9jdTKT2CupqaVtoAoKNgJUAfFRJWt38LyYMA7u8Frm5FBLV49LyktVbxwt8UD1jErRAdVGuec1uvR4MtHK355",
  "key36": "dcLFwbz9cnPKGjRAJvono54nkauk3kEmciTsSQwHFNsqYB3bjzf2cz7xV6nSKesyRwWsbvfM2d4TJMQ456X5QpT",
  "key37": "3HBTYV5xQ8GeqgSa5bK388pwJmvPNVZ7pCu24qQ9tac818ekxHyis5SSZrSzAsp3sPgR6nJqq6bjbhJrQdf4kSft",
  "key38": "3aQywHp3xoALjphFpBktfUJJA7xyXRstqpRfikSTn7nvU2V4Np3FFEDBcHgaSTL9bZvpdd58qbX9mYTwFK1Em6PX",
  "key39": "2ycPBQTUjZ2Z5QXTjjTwmdJP83T6dYVUW4tTErabcBPHFw84W6utTDr1hsiS2a8Wm3V77Jztx2XDHmm8CATRhhV4",
  "key40": "5zADjuHS6MA1JoUBw2EDBQtW6UHPrnYAdwiXYSvbikmLCFhYL3yDYhvH2HQPsUjyK9XtNnYLrUEJRtDxVGRi7LDX",
  "key41": "3Jwe68QmAVN4EVDxxQjXBS9amaoUsdKRjsstuGqSQwqHQPC68csNdZZk6sMZSMr9ouWPStfe28kmXmqWKWaxMtq3",
  "key42": "5D3zKEc7fXhW8ir58YP78ndP39u8W44v1bkDbUe9ZGRE1Pz2s5ASFsVXXeJff3bueAEy9MMS7d9DHJCEiUT9L4tP",
  "key43": "54nra4f1W2TtQ3GCGNvJ87YBdP98wpDTuUCBSXVpPjyztNVqbj817QybHydsStSgtUHh9Sf3MC1Zz6tj9woCN2c7",
  "key44": "fWgqXJ4Rd2tPZhZTtxBFubMvMKD4CS4azXXWJk3ncehkPVcpsuUdzRAqUmTpqGivXEAgnA2Pyc5L6h5sBKWFcx6"
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

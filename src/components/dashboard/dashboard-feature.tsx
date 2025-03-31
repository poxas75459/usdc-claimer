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
    "62QW7yqtGRBkHbbZi1yiwY5gNKk7pk9vQAmMRpnxvr2Sr1JMYphdfeBEAUesqU8skini2goBUfiKcr47EexbHv5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lxmrqz71AAtKUBTZoLpBd5XEMjCezhwt77QjDFY9rfahP2pMLtUZnWdVJ8u4uYi4Y4URZQUmfiaLS8deqHZ8K4m",
  "key1": "YgQZcsPY7afAiiRyKup6WiLxp98V1yUUEXZPhkzrGFRM9F6XPQ1SNSHFgJ2Am6JrR6Dq3xiCwvxBgt9Pkoorp3w",
  "key2": "46J1Cr18p4v5xjVMYeT653M8wK5jRtjmUiJskTEZeiJbkySguea5waqs5MNmwhYvx36fffDMKUSzTEMG6jLisWkM",
  "key3": "21goKow8ijaad1q4o4XRASq3HabgjrtPpHvREXgg7aqEzEHkS5ZMQJqf7u86E6jrexRQqSNVCUETYc3Y6vUngJqp",
  "key4": "591M9GTCr4KnTP84B4x3Z2oQX8eab7pkW1ABo9qCUZ4PbPYjRgBLbNwKCQTGQFQiPpYo76MPbsd8AyUQnBp7rEGG",
  "key5": "PEDc7UiL1GkYLacqFmDe8Jpij4sANQ35biiBNc5fg8fZtEj348GJ96Jk16JB2MjQZN1CZBkVfR7AaokGQWZbUCG",
  "key6": "54RVJTnCxNJtKUKX4wzSc73eexYhgZCJKNu6HkBc6Z4EP4WxhQifeQzoLfeno3P813GDf1D2d8qdCyKws8xLe8z1",
  "key7": "2hjruU1SG4SkwuDEQyyqutRJ1KVfiJ8ea38Z2VXgzBwnu67f7TtNBMqTk5KuEB6E6MSZhsyP93pcHw7oCwQi28ms",
  "key8": "5xVdrz1Ah8hESYdBAGo5kU44TgXbRtDfKQ2jLdybJQqRMR4X4CX3VWkHZhqvBV81LGuy4sDh9PUdooCkwUqZqYUo",
  "key9": "35TsPKUpsb2SbAPxtcwbpe89YtwMRy4Krb4BqydjCSgd1o195udoGAHzBc5HcekPdvsPPFqp3oGB1upm9pyv3K16",
  "key10": "hMQDxs4Do5Ge54HW2A1YY34yr2duanaAgejvsvVEKLrzmwQ4R2x3doCUjdpauAb64tQhxKYKFk6PBbiBS4A4BDo",
  "key11": "23djLfbXjnoMgNmdSasHuvBsvHp2mhugrAmjNvuKXFaWPzQAy6dYuZRT1z8X1a9LM8rqPxJyCwGzfBjUnsEhU8Qo",
  "key12": "h26ETaMVn4MmyYaX57YFdoJCcDroaLXKStvz8g8HNQxfH7BCbpsUZ7X1Tw5dBsnQT9giWfJWDysLHNPHMPcYQ8e",
  "key13": "4UHEewZWrVyFzoKquBMEb4GztzMyxXh2RzwuB5rUeTkGgaFNv2KaCVSc1v4CwzHMG9a2qyqEMzChUSSNWkDBsyG",
  "key14": "4FLrxhwf8ZdfqECywTRViMYLb3GBtJUrrX5uFhuM6zwrL1wd44wefcC1a3WS9uhkaHdCjmdyNCgmDAqgFdwFGBDx",
  "key15": "3uMSm2p1fyn1kkVZbRCSLZV8AHD815y2BXHCXTUfZnRNSHx1ZyEXLHmBPzYKpGZTjELsUAnwrK8tWmQsXeD6Bw4w",
  "key16": "2wQ3F7bUqckSEvm3G9vbYfc3vkGW8eW5X6xDiCoSMS1RwxHm5QjWqdPq5fJYDVqxQi3EH5bBHUss94Zk2g7bHDGT",
  "key17": "2WvYMz131d1sqnYMLYp1woickeHnuHMvfDh51EuAZjDYDy3SqL9FzTCS5fYZthV1EhZg4Xvaf2PQA71LphQK9yMB",
  "key18": "FSz1Bt9gmnZtzSej9TgCykVPF3o5c5EAHwyxu4TWraqwr2w6sE2FPHHW2RduGiUvKq3S1KxNEnTAQi3pDDSUf31",
  "key19": "Pk5svjDxosuGm4xUp7NUxYP3jW9pDPUNF7UntbAGnKHSjyjnn7ThC28hbGBwP7JWULhK3AEdVSGi5gBGsghDajq",
  "key20": "2X6tAZb3iV5skLwkjfvouUByTaStkHrDrmG2sqTx1GbvWGBbofS3HbBLNiYJYm6t1xaud91CinBiV3zH618LLMCi",
  "key21": "2Ziz3YTXBpfiYQbJMjBFrx9si9ir2dHey7NBAgFmmiLdbsUAq4gt4HripcE1QfH7SCNXbznKfmPCPE88C3PPt6v9",
  "key22": "2g4vRS75sTjzDPojy2k7hXbjrpjRRhE19mwWNUJ4aLqZEVxGbeqnN3UvfMgHmK35QR4g5363hJfdVwGeWBD8Lrnx",
  "key23": "bCWo3gEUmf26oqMhA6TzJAd8MGJ7geTfGNmDEhQFo5nVMoCvwZhn15mQwvohkb3xKBxZjbLwVN31i7EErmJUbAa",
  "key24": "2GXBAkwKZwuJh6QePKtxDXcLZui5h83yn4pZx8hdZg2j58EDLLh1dovyLyAqhy3cQZYnLhicYi7dhrrmAsT3gnhL",
  "key25": "3WqQmzzdFdw17N3JA3WL6argy4qd7n2qJKnZt2PzE7YgtevBmprcs7CeCpX2q92myvGoXUHsidexZCnepnXwHD7d",
  "key26": "3U2rzL4s4wHNH3s8nFqtXNNNFbVqJD8UWFz3crzL7KgmP24bVwQw78ybTviGY4aDo1ioqvPEqRvCydQnCMnfgJzw",
  "key27": "3x2PPSShzJT5FcQJsZQqLAuxK2T3CBxvBA4dn8s84MWams5zv4PAC2kgHZptNvAD1XGzJpBDGKii3dTroAeLWjq8",
  "key28": "4oPNuH3rzcjhTE8n2ds5JoyCAqpc2p7yPWEh9zq5mFEkxe9qBe3EhnpfadcxJKSKPa8fbeQpqaALACzGwysgU1rW",
  "key29": "27g9ve76EKsX5e5cbY6RoqnHZtTs7GLkefPZeK8Q8jQbcXXrhMfjnDkD9b3W4bDorCxx9TDSQ44DNVxzwNbPJUAF",
  "key30": "22NfLnVAgwUMcmHZxFHLvVGhTBzjmp9kCVw7obt2oPZG1dmnkj4kCw1oUP5cmiJ9DWXYALC2spHEHvLsRcAkZwc2",
  "key31": "66WRV3Y8bzTuHBC1HjbeKCaH3x4NYr8irYEZroCKmFybNojNYBcF2Y13apCMhCFodkV496f6u7UHhYgK7g785yTx",
  "key32": "5C11nbDJjpaskyDuhKaujgyEjVRznPZ5hh4heUrvSudyCSH9cAVG4Wm6TPDxD7eG4XQRQBMqKnTESUH3v4jabuTf",
  "key33": "2d5cvcQ8LG1SiCvg1tqnhstCh2YM6sJQjhRrPq9UEqeGC6sb5ef9B6iK5bTNTSH3tiWgjFWNba85StDCs1mH7CWV",
  "key34": "5FNeVggRh33iERyzesxNPxQhaTMzJDPm5qmLQRuZV3Sm3ggYwfM6sovyUdbT3AVkyujC52pJVqqP3iQFNjtoEhP9",
  "key35": "46oiREArTmSnSKUtaeK5f6HkuphnediGXhKoRs7zLXodaiFcKERMAwgMDnwv1rcCdifCtQa5x34pV7i3GP26UqS1",
  "key36": "4Wiva8Weo6tbFctYz7jfNuaLAuiZiM8t1oN54jTba5VmYkeqRV1MzeAZKgyBNiBLz4iySbJTGtn6KySHEm5k2RXM",
  "key37": "2GeUhza7heZXjtfrcHz6ALRDadKL6LEpECDT96nknmKPBHj5Xr1mY2PtdYwCNrbsFD1Me8vBD7i2xEtr8ToUXHix",
  "key38": "3UwFFw1BtXq4zZ6ZCYG2GKKhYnDp4p3qcAZspP791HDTCvaHCQY4rxXzCpCNJ3RQHg2rwZZoWCCD71p2pHe14qUj",
  "key39": "2jA1Q6BCnWeUmZX3owPGdxPTCmA7xepeBLjjWHjUAHgXj5i8tpxWwzBgdDPWUrkTfQbdLrdojBVTmbdPZqc3LRMZ",
  "key40": "4ZnfhiK6CX6sLd5cwd3guNeL9oHcuNsgY82v6m76NYXtDWws5bauTpy23dt9Y4VaZPdKh1o7LntpGWWynrk2vLok",
  "key41": "34mhAXPwujm7g2nxFLJtU1pWUXJYVVuqWBf5Dgqqn6aGuTFn9uGceb9CAbdmeUMqQzwNuFiKL529gsBbHcEtfiVJ",
  "key42": "5P2CDxcCCBB2kTxvkrgoxDaP6EQGtmdFUDYhEXqLxNhjhCyNPSHTr8BzjvQPnF7Rs3mn3hof5bnoCetdSkButkZM",
  "key43": "5m4XidmuJHdLtxXPuMqckG8hEJ41VGJKcmLdFReFK6MTEMqxu8iMg9BDd81LtZkKLsBGwBnxDHNJhVJ3qe5XrtWi",
  "key44": "5DgbKxVPhKJkCAVnw7o64xNjr4bta57Cug8Qp15VWacuPgQiRuZeLSBr4LPAGW2GkE1YoZNdfJuMvEqg7bbTYmhS"
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

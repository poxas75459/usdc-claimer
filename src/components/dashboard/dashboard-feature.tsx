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
    "3xtZogxWoQusWgaR3RzD8DjjQfkyENBm5mxAcsEZeDBZTVRmBTbK4yUwxrvYvgWJtvo18m7EkksGNm69LWHWZfAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ALCjMYwzGPuw5YM45fHkKxFJT4TqnAyvfrxCVBp1g6VXkDZsU7aK8M6ekiwKwzYKEfYBbTnDkkn679ZX5ywS3zQ",
  "key1": "5A7Qj2Dtjr5Q16TJU3kcDbK2ViyrPDWHLcumZ4kRNrwFtWudzCqwPHc6RiKhTuvaa6Cu7xLMqaMELD8gNTEwWMfY",
  "key2": "5DuB9bz9k2kT394akrdxGeLy1hJ4yPBhWPeHG5TWimA6jbh2KZsVNPZq2XzZvnotYDWxPdXmjyPjRfUuQJ7fednj",
  "key3": "44ePiSjxKJiXP9fiVuSbb9Unwy5CSMsUh7np83p8bx3doXLmcDFL6nyRy3jfk4iRPnTAnhJ3F1QA5sKLDtNbPrip",
  "key4": "62LWMYhkdU1hgjtpweZdWPrx2zpy4nZqQu6ufc583sjaKSWxLppjokAnC8ocG8HUYFQGXQWXc6SpQNLc4zC23wuP",
  "key5": "5LK3dV5bsatJCUTFJCb8LnnyCVqAAYXBwLiE9PGGiV3pqVeYW1Ssko2YcK2rWjoEyL6f4Q9KqxfgqNv4igivQ7Z3",
  "key6": "5A2YyfrMqPYV4TU7m1wPkdEwM1Te5xm5rerjdZNGyUJ53gN5TZUzBj7CJSg6a4kaBjD2a2US8q3Hby2Jrp2xXHC5",
  "key7": "59vDW3482J8dnFd8nJzGLnSEbbAXzgsXRdedRkcZtP5LamzJbkKePAyrkVQKya4GcPedEu6zzg3u6Waz5SDUeuoz",
  "key8": "5V3vqUTtzTib6uLknJmMAGr9avs3RGu7J8jhG1mJL4bvhG6vy1Lp3jnxtN4Jm2bo8YWYQUSWUzpQgB8PMgnQK2PL",
  "key9": "TX3JQkNaSN1wa3Ewh8GmpnRBZkpRVcTfovhsNyM6D7oFrKXS97mcKQfCkuK98uSnsoS54yjQCZeqZM19voUQkDB",
  "key10": "2isRXfsHZq57ACeKFFcwcohM387MqM5tUYfP7t9CyL1ZN91ivSm5SMwy6sLNeJGXQf37A76SPUouAY79cvAzYy2T",
  "key11": "4EYkZBqDTkFZTkeunQ9n2gLcbWdGVkkLVjWz8smLPSUMGtVqG7BjaykYrP5YZ1TP8jHjkAZr1Zr49ecDtt125dBo",
  "key12": "5QnskAZzd7wZhSQSLM8Leu2Ai5SU9ekB3BafK3arkh394SEGkj46P2VyrwtiDQUR4wZWVTKiGRcUydEmZa7sCLRX",
  "key13": "4AYMZJe8EkZJxEVisPzMHZg4VSnqUDr1irpF38wHm7pDKhwZ6Cwk3Vtcq3wverzXH2LnpGtDEW5BFL2u21QHiwWU",
  "key14": "34tpDHmyQGTBNLfAeKKTkksbQNddtum5yQ87hMjuWzuXVsWJA5Pxyo7RiCnDu9mc7Mobz7z3jiCiUaWDmTMenu6N",
  "key15": "2foVk869KHH5xTB3R8SYaMJVSfVyB96XFcdcwZU4FuecmZFtbZWKQCLXBN1nxYKkbKsvJKAooMKaqPkVUetuFKJE",
  "key16": "u9peHAyBNfE56CBsXc6L5GNwifZHa5pX49iWGhgpTcdGqRwwgtHqvUup4EiKTcGiVRp4xKuds1iCbd2Rct3RVrA",
  "key17": "kqGNwJ1TaviV7NBJgFKdg2L1mqUtqCHBgnJvEkZ1TphhwvGoL28EZQ3XLVTkfhMge96FR9xaZjxohpeRrZPvs9W",
  "key18": "adnM98nud3MZz8Bja9PgvVpBFeqcmjwwmmVtJApDEhGBWtvNYUkNhRmA6vxDddXdb5mgPNahgL6XtjiAhZFUyV6",
  "key19": "3MYvQRBUW5RAAqG3Px3gk2AUHFGBZQn3b1Pj6vjXzP3jk2nV2Asf7kpgEMAn4Qj7PSM5pgzHWSKLpNYz1NGVU6cd",
  "key20": "277mmGF2FgbrwifwSvH2UQMdQy81hvXD1Lu6EW4fuoR1qFoRaJAzcFXPzsUyNCnLrFtTJFmSLUf5ZMRaeE2QiLE9",
  "key21": "3Q7TWBJkTTpuB3ZTBoTF5GQQ4EoiFdrEjz5o6xNhAN4Now3psKn4mY6xFsyKrm1yxWYJmwKADa35snjey4G7gSaF",
  "key22": "xtZQeSQqyMWJb8UdaHWq3LyjTS296jMSrqH4tiMqWYygQ7NFbBhKrjEjC1nHfYwWhX4jVTyLFWy85F6QgHvD1S2",
  "key23": "4jDvPqMf62Gg5g9PWTMd3hZJh1h1nXZwesHeKyu6NREWQ94LrcPyGwRYKz6x1U3QfGFhPB3HMiFg47oAXRjZcKSr",
  "key24": "4eu2oqqMQ7LEfbUpRP2WtfMJ5ejwRjqAYHLkggNCWRABzZDYBppYsP7z4pp4AQKBuoswMd6CBxMENDdFhURoQfiw",
  "key25": "5mN3tEMAhwYk8cecRJM3nSzkPCL3ba4xZpebraWCaT5k27u5nHa7DhnMVgpPysEzCXGqyrEi18xL6ZzidczrsyJL",
  "key26": "23RvqkpKW1zhMtT4bBoq5U7JkHWdEDMn4Q64nERLeUx5NMppwtqjumP2L9SyJMPvHpyyYSDqXkfxXdk3ipSJguUn",
  "key27": "RokVYuo4hpeZvvXAqhuf3Vs1rLFTf346VqAfSR1YKt1zyH7vsWs1em5LZStgh59snpiHPQQGqd9iPFAnKnS5SdS",
  "key28": "3pJyGYo47uTVnHj7UNsvN4tgJN5VMU1FtumVLTLwDzwZpHZ4wiBMYDUMxAPAFK3nFG5cSj2K1iPwfHFdyRmQEGzb",
  "key29": "Vnxmqnr8dyXgpyCFPPKcmyFkKmFp2fcnSBuG5ATVwKTgE6LxWCeXnAu9pVjrny3mBEz7EV2pAUgUUAh1Xa2Jvka",
  "key30": "4PHyvWicdRDg6RLyg2PtyYAoPxvkWBbjhA3RX2zhuwTiSapKNAb3yndpnvhc3RXyxDcgWqNki4hiYGTV6Kqxx8WB",
  "key31": "3Zu1GZ3e97Tzy2MWrD6zsTa5iC92p5RAkRQaVc2C861H6UL4nsLay2hQ47CxBKcUcQT3JGyjRMuRp7votMLPCEde",
  "key32": "2iDcSHuqAj3Pf18Kwz1cY5QyLKmfsSRXDf5Ak3wn2MPZsUpkDfVWg559wyFaQNbeEewHvQAS4HMBvqPRoRGZHT75",
  "key33": "3FgxinHPMg1NnQMWg4Hfn8LWVVFoztKY1sDsW1tTjNivSBaGRtxD8F8djywMAeLDP3VypNL8S6kDfdTTqjZxj84D",
  "key34": "2aC5rLCBXtuiVTH4P8fWL5P34225623RC1LB4Cz2ChYEy1atwrsjEX1JsE1tyVosjNJmvWK6oDXN6XCoZgzsHGb1",
  "key35": "36mz3LBfgwSApnNjGyvDgKk4Jh4VWJpWaTGTzSnw3KKmW49r2Un9ErDmt2eVBsY3qhzNZ1qVQ9m3j7ZHbsMCS4W6",
  "key36": "4cgZzWaAsekG4TFc2Wa794KsqNxFJGnGa6wAUiD6oHsxgyt7G7YAmWSiKxfoUdwBN2AnqWXDz8WP8FA7Zne41mrp",
  "key37": "Gmkj2TQ5nuWfjKo7pbHM4oVYRdunM1EmbJKfwwZiEwAhHK5BH2igocKCDr9NiA2AD87FJU2HBE6tpmfxbzm4JFM",
  "key38": "2xGvj1gS9J3uCS1DmZxGX9FDyCqnW3sj9fgB53NcsGvR5RSqsrPcbGWuGTZyv5HbPvjSgfLcok83XHS8Mcjjbr8z",
  "key39": "mrLD19ynTrPQwgj98s3zY8CBXqakUfoq1NiQfTryaR6E8MtNSBj7qDTUKfJRasKeEyi4eu4urEmACNkY3YBc6ZE",
  "key40": "4Bwgd9C3TpCDSiBeWmvKXA7Rm3mZyDSk5Mq6MpYDfXzny7vXMpwn4axzmVpv3UUeEBZoxWbRGVLG2wtdpr1yRDo4"
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

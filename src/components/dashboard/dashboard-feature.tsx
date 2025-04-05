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
    "5h2sEJbFZ6da2inue8rLSp5xfG2QjSzXivUv91XPCqerYT7NKKg4HSfjS5KpzB3wrRzbVuKfimwo7M5yC5uyZ9Cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YabYst4LcvKU98gH9BNecReqsoQzA68HBMV7FUeFWWtf2Zti4dPudD3vb3t4kwnQW7878xJb95Z4NR77aCjDSym",
  "key1": "29vKXyzFKKdSbNqNMetJEh8ca233L7wh3CFx1Trw9mfqMmbStGnUENFsMeMZXAJRn1uByys5qtUsXSAYbdMUDdUM",
  "key2": "5a56NetB26ctXdeJc3FXStHuQDhVCd9Bk5D7vgbt6QaDUuW5JFLZkYW6vHD8P6SLQG3h9oap6vx8DouewYmztoKP",
  "key3": "5bpkR61CkC9G5tPRbCoimHpfGVGpw8Fms11oxz8LZyxLMWfR5g9X3dnZG8a6bgeR8gn6DAg8GypKXqfx2LHTiYYw",
  "key4": "CpoVetkZnFihqaRQQsN1H8xyejRskrgUDdv2m9V4Uum7ERuBrpYs2RHHCmwXzTbiPgUSA8M3wBERsqmmo8XdtK7",
  "key5": "67LkjvczKLC2mrCYuspL2hmtQaodxXiXEAMWNSb9Uxhdp6GRXnHKWd46gzCwHokhc3L3uBEeZcA7VLZmLopwLwcz",
  "key6": "3gLpR6yQw1r5QZwwLmRijieNscsqUrQMjNxbjKwDtVgrfZAKcU4x46EEE7Mgcp4pHNkijBxf4Qh4KU7pTYMeE44Z",
  "key7": "4JYQaNdGBWtfx546rbLLfsYUHaK2W44hxTfZipdvqWk195C4LaYsRQpyuGK8eoZRTg4cZtDVDCv3Rke44cUoiwyH",
  "key8": "2UX6jMme1JUzHKaC2bYuq9iPPuPS5Rp8u1hdtWPE8N8yQQR9j1DbPXe9XSUhAwSwhgxkmFqt8hqzCpPAAMa758oy",
  "key9": "cqmp9eVVmMSARkoM3rf5x2d9afNPJqrz9c28oA6gVbpmuk1PUV41MGaLDV9ExKcSa2ohEtct1rWsxCtq1A1zwU5",
  "key10": "35t1sMQHDjP9zyha2X9wJkUVRXDoSQL95G1re2LTsgbEb211vx8BgHGp6Jys7bfvKLXyaJMfeo44TQuSz6g9U5fz",
  "key11": "45examiot6daPyUjXWdqetEQi88BQb7eYHmSB5KmCSEitBskgREubFywqxU2HwhnCE9WaP5bjvXvCf5kyowxR2se",
  "key12": "645g9HG8aGcqa2J7ezPYjXXutPBzH4zufT2U4o22GgP6J4qtNQ3ToiEprhY4VUhAcnYgQ43dSzpQ9godWzriy7MN",
  "key13": "39AJdnEALCfr67iSenL78RVY86mknHon4KHPxSxsNvtZmuso9gTfnRC8rx2sAf8tVm8V6pV9ju5dFFYKPuTrcTBF",
  "key14": "2jo3H58srNWbUV65ST4QeiHVybq4CU5DUhx1sFJGupXnhLGWiRny6tptBNP3aNSpSuLAm3cZiEXu5zv2GeE5y3aC",
  "key15": "4SEDNopajHJLHwrm5HgnQff5mDEAKjhNVV3JUoKAqiLsznvfxH4eFCYrmp2qdspeHkNKRWVLr6qjw4eymkmSDAxc",
  "key16": "4BZ5J1uXqRZsChgftHoCtdJTZMcQeJpJeKa7vCbe8s5CuYr6NHW2XKnYjLYPQ3aXjxXNTE65hR9tzLZs1ok375pq",
  "key17": "61S3k34RDhM7NpPZeRArias2AiEa1EhEAjvNLLJog4pL653iZp6ZRsfWmuvxgtQfojSQerYw7hJ8Kemu8wML8b13",
  "key18": "5q6uXhjVT5VmVPd3AE5Y9n2WZ51YDdyy7qHQd8ssoWzyPzozLmG2T6Fk4a23y2D3zwzd2qfuHXTzyC8BUnq1rmwS",
  "key19": "4U3wknzbSKaXow7N493Z8Vidpt4CJr93WLLGQyNTwGpZ8XSuYvmJ53g4ciYjdSVk9VbBDYgZuYRZsGRd6UkJY1d8",
  "key20": "5dTmgrc4qwigY7eQZbQsMYTJoU2DT8X7evcUAPKsUAx2D4oByie3UZh7pqwJyQLiNvqEkjP8EsAP3NcMy9Dw9Wdw",
  "key21": "65J8MqvytcfDHe9CYyiKYzrJFusqHNnsRrKxjRqLgF965JWYoTsJNnNDftaYMStN1ekk7uyka5n5icjv3quTVSaD",
  "key22": "4thH2omNsRZyifXjjQSJB6LZzN6BF9jJTENfKjeWV1ZmPRRiopiMtX2UVsc5bCtrNPd1332Snxtkr2JkVKv1jKQU",
  "key23": "4nWVfA9YTe8KUzXHXAkhTh6Q4h2gCrZUN3fv4NBhPoYBW8KH9FfktAwHUXjW2SgiRVidc9Qys1hBmxVSbCQW4Y7v",
  "key24": "Z3h1Fnr1fnwN1R5Cr6EfDLm139i3fHHs8bJoFmbwjeDBp33ixarXzZX4XPjrsdhQiQStYbSrLD2qxCQLgshgPPQ",
  "key25": "23U1ymcPc9fv9MUFjsCq7PZDgnEvf7Xmox3rP1W8ZGGp7EsfUzuZ25VfCiNGHWcNSSFnHLPcQr1jwHx3FmxABawb",
  "key26": "4xu3iES11iTBqK5nkM4CZPsLM41SkdWux9Kau72cB2N8KLVSZ2rEBxggxMzDy1nLMgMREdRUSU9yyhSnAxXmLzK5",
  "key27": "2tN2BiJEYjXgBna1QE776KaBbYZu4QcDgLUkzJPJuaPFoigAz9qe4uTF144of6J2E8vKunWGEe7MnmH4S19yHxdN",
  "key28": "5Mo3aNVeuUNT2hhGSdRwNHMzhGKoDLuPorPfafZekVLXTCuNQAXV9WLG8jBQU6gzNXA6gS2VxLS2BeKbAmFzKVfM",
  "key29": "2e25aPDQumgoWaX9aeZK5E38yWfARuFMNwGv5Rwgdx5BGASfxiaU1K757eRYmc4g1NA2MF6gFesJiPYxA5VoxJmS",
  "key30": "3S3HcXEscqq4XUxJCysTAcgJv2eihgNHkvTPHTFdc4oGZiaCW8H6Qe2rpovEzWEXRFdYaL3KYee54bZzeYfMJCtq",
  "key31": "HDF9GNTzWRLK3xJSrjwvAGtPKGRHoVyHWgF1on4vhVtGuwHoeJxjaDg5GazHeXzfYN8UTtdtJJ8n2ovA32At3Ar",
  "key32": "61bfRnArJ2EFuqMN2WggBnbpSf49dfoW9P15iDHbCqyDtg1CAuB6SRE8N6cbG2zqb7HJrNPkUKz8VFZQyDweKiUy",
  "key33": "4Xia9GjFFewUtHTszE3TBdiXqLCn2QmQkHhjXZpdkMbsSdPw2WD64WPvNn9BWDEbWsKahUsNbf1kByv2pyEmo38m",
  "key34": "YrBofg7DaYRXrFBrYKuZdP3mL7t9HrtxMoMipYAnLD4tuoodknw8Cpsm6BBToBsn39an3uEPvsSq9EMLxXgaq7D",
  "key35": "2sQd9ktKL3G2F9DHF6PryPmE1JhBWmenGLg56BmcUYYJGANJfZ7znotrC2Pr5WPExVQTgcpyiy8sC9PpdQNgjqMs",
  "key36": "2pc6sdASMHUL13cbtiKce95h8usb9HSftv9dYXMNvWZGdcTsnS4UCavQFUPvjHKMSGykVLhMveyQCoUc2DvA9ZAe",
  "key37": "4dYiWARzmviD6MEdyr88AR52CSA9RB9aPP7kAeSvNfykSFANJW5YGoRvvxp7158A5YtNRbHaMcaxELpfTsR4ytG8",
  "key38": "38ZHatj5ka4dV4w1jSFFNgMVWvnFibt2FkXjQYU6vSG41xAnwYfghZcMH65LJL2SfwSPE6vR4h1sAgcQPRgjmLwp",
  "key39": "4JjcyJyMoE3hbS8krjDAhkzeCPVgo4Q7vqUkyV46P3drtdd69NuurPBBqz8B4nGiV8LHdnzvfht1E7SBGGMyaNfA",
  "key40": "3oytTQ8UV8v36wZzePAsta3pkyK7XbdA7siMLeDZJ922c79PsLGnh49D19a14h9y2rYY5xUKmfoQGQW7duYKGbvv",
  "key41": "3ALg2coTyiP9eS3SLBRTTcEhYCk69yHMgLqY41utTPnMahqdXKS7nZm6ecGPgAYTgMdzbCjWH7JzCtaMApn9aoKT",
  "key42": "PWhfnDQYFjtrcnAjy8BJj5RsbWcWMS37eDu6a9QB8kJs8ujFykAfzve485LrFK8JFK1JfFhJjjEZV6hT5GNvw4A",
  "key43": "4tKXbWJYJDFtN9VwZhthHdgmH1YLjsWmydrjMnPayKSHHNPHAeyYnSP66rTSJkDXcUu5cRi1kr7nTQiubagoJpPL"
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

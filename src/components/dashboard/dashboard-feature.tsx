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
    "T1QfDnXeE2SqPUqQ3zN8bzH1jQJifw63ktyc3LnniiP7svp9tRrvt4o7RLncKSJNbYuSEQRy8KjbcdkhxrpzuT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4im9CGywkGMjKYCxqurDjS7DkRQuqfQr28VVUfAyWmJWX28qfXzdqqtJfQQnM5hib91gTeP9qTZZzFrd2tK8n8nY",
  "key1": "4XheeCk4Rqhky7nND4kKgxN5kWB6AY3kF6Nsz4vu3xoFCgmN2NVpBewtZC9CiSN8pWLtSo2xEcGb9yQpL6kmLw2E",
  "key2": "2Sai8PJferWnAXsBRFL59Hvu4Wf14jAaNVewUeFTptUZA4GbrSrc6wXtD7AcBa2yJCaJWCicqc2HauocEpwmuHsS",
  "key3": "P5EpcYVRcpU1G1H5f8uRYq3w8tgZWqQgzmYzSWgrM1qZLsUY1i7vqLgNimmDFdDtdX8wya342hBzYvYAVz6up4F",
  "key4": "3oos9FS3sEqc2AyED9c3NLnL3dUVoAMW1B9wAHbHEfAc9r227HyLF7n7ESexi7xBmWp7hvp1uUZTqP7TTsSWW6BN",
  "key5": "528TXcYSdiSfewibQfdP28f2RhxGg1JdCmVprbExo1h9GJ2E8UHyvSf5d336VvJ7qoqJCsEc6j4Af8va2bfStdEb",
  "key6": "46EeLwzjBvMyFcjbiJRYE5jb7LSh3trequ69c1AEgucVuooAZ3jXus9NWwp311YenT7wRhuuTGXLW3Kr3pqPcafE",
  "key7": "37bnWUN5UpKJdLKmn5vfxTaqvRJ6yPNsC3NrwcHLLKzng2QZLAedhEi4ARkg175LSY7yywPGeGPacZ9FBCmy7HDo",
  "key8": "3tbuVPBz2wKGug6A5DzX9iSD99SXjbmg2zgETxQf73eJ3Joc8fL8SfcEcRZe5Nxz7NYHz54dV1LWZN8nbxATTozZ",
  "key9": "YFnHcy3nNbHov1dKsXJ6UxgAXHqJvmJvBQ6V66hvzMFUHjLPjoECZBahKVqJDVbXCbxkJQ6tzhgteTWTbSG2RE1",
  "key10": "33HsQigrpLT5r1Rcu63mT2P1c5ionETNZQA5QiQMh4mqXov7X74yMqYd1n9n2DravaC3PBXf7y2Tk3FeXZskC75V",
  "key11": "3rQdYDLk2gdGiMsj9NMoX749GM3T1kkJfDQ8PMT9SkaU3Y4YFrTXsXBwZeuKz3cAhJzNC1SUpEkiNGxUfsfk6GkH",
  "key12": "5bf3RAvXjaFDusaCArf4LNyG2D2S2yzUmGNJENQ3CJ8VzyUHDxui24c5eJVsW3icVhzNjuLwzeAeqtHwnerwjtvD",
  "key13": "2ie1Bkts8FWBZzoQJhKdbjvRhE8eRRRRgb81j82jRxdtCe6aNPHa8DxzrjVrDXcD6xRbQKJGZCmipfow2kbqtL9G",
  "key14": "51VvNyeCv8co7P7kBCL8ACKJwtKDALyp5iQMKREaRgqddZheUZPpxYUEinpfVfTWuNVC8ndmJNgfzKTX7NimdkMd",
  "key15": "56epkRff1yynxHGr1AspCUaWVNz6mYKeRMWJ8PWNnaRUF5HQfsbr2ojykqJeyknENnqdFqEF271ZKiGG7hoUtbL6",
  "key16": "2VXjRUoGKiH3wvjJNGwsAmPHG7GJYGsgohxkVkos65TnQoATN3oTf7U36jkqTkKpQetfKf3oE5STRpSyETYS8SVH",
  "key17": "4u665DjyCx9925BDMZqNcmbZFgPZDfuXgMwpQ2iWzTEYD72FcQuJqh2w45hL4Y9hqGt8tiLifwZXzfvkXNAad6fn",
  "key18": "T42TM4mYBLvBghrnZ7NqWJcZXviVqfLt7gzudekXGHQpwVdZLRctDc8fEBB3hVsVyAoZuTTXygsbujUEvQunwg4",
  "key19": "9LAXZf4YJsJPv2Ls1mZVTXpUhwEJ49mozVcx8jXg9Xm75bVuV5Bj2kKNdgzP6CjCnDPPHZfrhghHPznRyLW6FW1",
  "key20": "51LiANN9nvSciwasp9AySjfBAuKoqzFaGfNSG6DCPijvxwKcr426YBBT4pEmhmB3aof7DJacHQzbKUBa2gZ989VL",
  "key21": "3ytxmbzDz6eS3ApEB1VEqsa64o8vRf9y4sPcqsU5rQKF7g4iqomn1C3CVgice1A97nf9huEjjy15ec9yMsrw7CwG",
  "key22": "2hviUVUj3pDKLoHkVdc6U8fiN6bCRock1GkxY2YEJGTReVuQqum1JWnsPTVCXfoJbkJPFnB6N1rWs77YwgXxQrSp",
  "key23": "3V868cFe3kmkzaxmgJ9MAGUEVHGxsH85nMWDjioWiMaJHuHZPo4t2v2AHJYgXssEExy9a8jwWLKtC8gmQtAWYQ8H",
  "key24": "rYiB45vbzcpMRj67ACce8UyHZmrwhTroS969G7nYPmUf9DuQzgPpuGBhrCfMNjKRx7Epi4XamREaQ4SMpZqLo4f",
  "key25": "2FiJ3Mnq4LPgazUid7wKchciSxBk8CUF88wKA9cfdNn8aHZXFfK7T7Ttoe96XtKcLJb69GgcBw44vkNofrPb2uKa",
  "key26": "5G97NLUTup1zgRM9APE38zT1FDvNELHYCBSNhkXRqTmoL1VLivFZpPqZfyW6Z6dt26iimnegcMFLUJmuv7iADuxy",
  "key27": "5dAYB3xKqo3c85f4rcWuVUwKpgfRNPb9QwX7dpD6TdxmtoVo8BoXTaVapph3SKHJ8QDJcCwbiz3cxUkErQAQHvDA",
  "key28": "yP3rQNzjMafPyVG9GGmB625iyHRzTJmcwdpm3RnxpfEWXiYhRpTtNU18GiN5xd36HAoWrd63E7if1Zgz1NYrDkt",
  "key29": "4cWA79Uce694HrA76CiJFoWDH7AkPSh4Xu9fakTus6haHDPLPHuQ6jVjoPPzAtGGCcMYrgxdCcqyhqYWn5hoY7pM",
  "key30": "5GzLyE2mfTUW8WvdMhM16UVybuFnVu9MUnFZ4KdeL3aMcfemkCSY7ZEtxzr3WpfeUTYGxHQTyDQ2ibnXZRmZdcCS",
  "key31": "y376QghC2HePwuSFEXJW4bBAFhBWhwy6JHrvrDMu6JcGaZgDQZnf6xgNQQbhDZGxKvHoA7W8qmwzZTb46jKTu2j",
  "key32": "AgRHzvNjMQue9jUx1DF1hHT1EsA8c4W85WRxL7CpFo3dgcnyMx1TCcSCHQpGyTXnGEWEmdwNindsUw69HRYvpRM",
  "key33": "3Qxkkcwy3LKNU4BdMsJ38p4yuQAKfoqnt3bMMUTwSZ5LnAXF2snSkXnenf3wsA1vAJdW7ruDe4Bcf67HEkyZZ82w",
  "key34": "cnJtWUC7jdap2HN12j7HAoCBaWFCx6RGa42mfU1hVzEeTx6ZLwZBuR7BMBVEfKdSEN6qDhyXarU5x2TcUgytkxH",
  "key35": "4w6axH6Y9DkPDMiHk2y9ZtxfKXQdkq1TKsh88NhBQS41CWStXdmHkWoNbAwW8jzwe8bacfriz3xV9325yyvSWw9x",
  "key36": "57u374eL2ueY8p6UbjwsEgPuWidzvcvXY9yxAezd5a9MxR8jrTHA1AVB1gcc5wgSpGoTraKGdhN4T2n1Rb6MZN2y",
  "key37": "43jXDMRGUc3ii7pDL7jnYYBrHcSByiiB5aURe4GA7nPdyfCvVJopYzRg71ckomvMkppnSVyGcSiogXYD4VnTsPZ6",
  "key38": "4HGATHQRNXVSTtbVeHB3xNrsnFGWiqAAj6jozLfxhrnK96WdPAb2XN2GRmheERQbwh8vD3HtEFUoddXProiCtyCr",
  "key39": "5x5ZW9ahESHewA3kbyJjxzBiR3M1vgvPhR8enqFZUgKzwZpTJKEBm6Birz4tMKiygXdj1oEy51Qry6vukau8x1eM",
  "key40": "4kdsZvwZ4PwkyHxDnvfYFKe2Cgz1J3d6hNJJYg5B8jcep9gW5KJPkkC84j8hqNccD2tEfv6KUje5uvQLkft174a5",
  "key41": "3cjMqkCWoeLNxtyrFrcV5hPtH6Pu4YdYtt1voo6TsVdvt8qXrsUXH4NVo3djcMXY3ZkzYJHKDYSwS97Eg9ZuE15A",
  "key42": "4xDBRXiQgZqKcDxjbBYBioDZ4ZyF8jooqAAsn6H3ZXbJ39FxzHNoFmi5udvQg7wYcr1vy9riWDfYvfnAJcy6wRqH",
  "key43": "2XfHHmUc3a4tJFiSE82zS42cuvgwUDneeXv2x6DSEJXRD25aJXm47TVS6RnvjbGVXJnKgtt6SmgDGZReoMqPV32u",
  "key44": "2X5AKdW6tssmQaG2LWqc4a9GP3HpUdRtL4vn4bAY97wg7ZKPtaTs6r4X39jcqB91jUGeDZCn5PoqYqrmvaXmWdxp",
  "key45": "5vNAJUJt3WjGHzGXHXANub7xVD8w8gCYBVFXauhXtF8Bj3enwHUzbtBZU1doUNdRSex1AZU8cGvh2eE3mhvAoQM8"
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

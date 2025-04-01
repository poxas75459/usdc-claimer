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
    "5aMHupfHNXmKeJqaobSEVEAEBSuFKPsmRrym6677zHGc5Hax7CR4AVxvh1PoQmtjR1fXN7Tz9ABpnvqRopBifb9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59xbkuuCtHKSDUuRbLh5BYT4iQS4kD1tXhAybkehVNSu8NwiYACwdJjkaeq2TwaGzvXPA4HUuZ4H56Md1dsUEJ9Q",
  "key1": "34b5jbAC4XqUwrsyXEL7oEbAsxufhtSNeW29NaL4Y2Khu8cB5cEByHrXKXezeJoRwkSA9tNrHSaEjrNWLJ7GfoNP",
  "key2": "4KK9YP9Jfv3Wnqo17P1mxyvZMenZXhsGxw6hrVFrWLEHBNokDWLpygnSwUs18p98GdtMgE8G37nTcQ2oBHMucaX5",
  "key3": "3xw44v962MdtVmvMXw9oM27GGopceVnEv93sxSwuFssQHZ8bspUJx2M8EBppW1wG4KZVFBGAEeBhwSgv3j5ovitR",
  "key4": "2NzoC1wWaBEa6DNnDtAiUqmow8pjznVfigCnjoDY1uvZHaJUTJo4N8XKQq2NnzMKDwJG1xsEVPnm2Ve2YaQNSnoq",
  "key5": "4VrCapqW8tt9vBDf2DcGnmyb8ruXcCSwUc18NDy1E7pe7TAnD6tW2gmnmoVjFYKgRcbnKD3Qyp837HRDddrzQhFe",
  "key6": "JVbdL3RPCpGLhAQ2seHGdCMzpH16e4BezVdFZg8nz7q3NPqaNgasqpNcDt9pTv3tSQns6CdZaPZFtiniRLURo9g",
  "key7": "3dt5LTDS5kQgQ6aCmK9J87ARqtEZhvSf9EWmieoanufseQBBhsnf9iTstK9xYJrnWW5YFay9ce6PekNGpEEiGoY1",
  "key8": "5ZbZNGeKcjv9xTQtrfQDaQCZSPtuuAkLhLxjiuUd93wVKhJMpBJEfbrZoqTTezNU7KntEN5u7wpStNRC7AXWjDBB",
  "key9": "2RfR9k8KRYSFE48Ky1weXh6VQ2uaBTpUuozda7Q2yJBeCefic7T8EbpmtnLofNiUYPrMpwNrPWfH9VyGkbmZCppz",
  "key10": "zQD1DBWmqYcFvYzuYkfHXgU71rKjRwJsa1hvMNcm9ixCE8LovnkDKvNhJWKpbWz5EDCck8jKG8h3C99YeL4jqma",
  "key11": "39rWzjGjmtQXYC1ZAeJUHM252kJNWXDwhmAwyzRrUd2xhixwrGaJBjZKW6LgJy1o8PZPooMoCQUo8G8Mj8Whp373",
  "key12": "4Ta5VEhNezxarExUf9oEYe3hraf4QDiCKXUzv9yGgX6Lnp2btsasF65Nu3bDs5TeCwUd7z7kh9CFRjxJjq2XJ5Qd",
  "key13": "4BAbucgt54ghWeFvHLWcgFKfeS17GJ7Ed5bkjNKu3uKo4JzZn36hNRxL2cXYwgSYash3rLf8JtfodpdDJNTtTmn7",
  "key14": "4iCu9SMwZW8GinNWNtZpzGkYFWo8aHf8cUbhrE3BLc1apY9nrtDeZu8jGgmVnBR1ej4FVBr9y3spf3vc21ueY42W",
  "key15": "soLboUzwZZWMeZSPmzBgVRFsxHQUwtp4D4sjnZKJ9xR7Nwb3TsgjUhbjUAnHzDTkSP7mfJZvw3B6ZB9dhY5Sb5m",
  "key16": "2LYN7UyQNpH7E3rEkngqUrFB6b6X5K1edXtqLxKHBtx3zoVJASvZSEbhC8j4QYGvp9h4YCx3edesoN2fyN9Yc15m",
  "key17": "tK5PcaLeZvsMgAMGSa5BsojQhUarZUWKKfvDfHD9xZ7dCipAd9NPWpC1Y3i2bcyqdhASN9W7DNBzq6Tn5fSbLdM",
  "key18": "469afnEDuAmb2KNF5uSHr7zWupWZSCt2pzJKDH7kcPgAciE7zjEpEGB4FCr6t7eQsoTmBo2gn3Q88APeCEY1nJ5F",
  "key19": "2nA8srAAcXCJiLwARvvHxdjWDZTDakKTPoMh1wTuP1edVJd5ciRqTg24Jcq9xBr2pWQMPLcBvR7fDAKAa5AS2Dhj",
  "key20": "5hASPquMJvcfpwt2wLaqnqQuJk6wz537V5c1FQQduQxQAEPTeZRYeuQbAYFpTbCgvuonkcBQs4fKH9SVJu6dmGbB",
  "key21": "4duUtKfTGEjCNECYYoqPnevKtUycAggjdnGt2RNU7C1LM9hDNigUwYR87WpCrumSYnLRXFnx38y5ZkY9zbNtvzey",
  "key22": "2DaGjbiQksqvdQfLo3276RLyyc1sx76XYDDcZBuEbobXUFLR2KJLqisBiMhJH3JDJWxcnEipzgvuRjLAGMLtobDx",
  "key23": "DFjfHsqnM2TvrDG5v4ui4WAhgDCgwxBPuZCx16M8JErW4dM7fnXHx53wgprCdvAS3H8CeMaoaQDibajWhkyyJjv",
  "key24": "5Q5ZkZGhwHobxzdAYXFugUrKmCX4qKRuE3gq2Rk1VUtwKCk9BuQcoP2nrc5nU8g65w1UrvAeovqKTNNB3UmHSLeD",
  "key25": "RasM7CJVe3YYRtMFAmTBJ2dEeQJq2Rv9krVNtyWB43NtR7P1HeHsqhZ7y7BF1dsF4tr7ac13RVneRmbQqxZWSz2",
  "key26": "2cYmT86shASAD9nGRnw5vhguNfPX8qEgM6ASNp5bujRpPj5z5seVLrY2edB1oKYq8wQABjSzkj4idkQou9xJwGbW",
  "key27": "2f9eNSyT7Hu383ywi4hLxJAdPmxMDwE3RM8tddqsTnh8CU6BPrtRFeuxP4M7mpDUDWjd6pVo4vJ28ZTBJp2d4K1V",
  "key28": "Q6mcwoiutZ8vkgJnpo9p51Yoivd3jRd6q82h83YA6xN74JF6Ci2LuBVpHWSkxV64YqhxcByNjEf7fWYvTjTRonV",
  "key29": "q5aoVUMVs27Vmk8tjckqNJqAm7cKtET1dX1DdcqgJFxeV9eXTQXp73xuyHDSMHHBbecGD2QhFV2zzArxqG2E52D",
  "key30": "679C785zfatbMspaS4i75DDGwr3HXPxtuKXhLtvqJr3D1gMvhLDN2QowLJh8qrEbMFtTdBdXqLtESZyySqwfmZnM",
  "key31": "2FgTpCFXu7HsnEiaq1P9XHLA4T82zR2Js2Qgp99Z2SWsCAxEUwR7Pp1NWYTGtLaTyxoguZqTWA4UEHFxwFKf3LhX",
  "key32": "hq3bGLBgUrzpKNUkmA6vcr79YCv9HwmFadtaxthyFER6akrEnJYnNftRPjGJJb8tBijarP9peC73mioyU5NdsxC",
  "key33": "3ZQytC5y2FeztaFFWZgbZBQdAofSr1mPu5A387N59wpcb1o17owBVn3daYmP4QDcajNGyT8Z98o3XuitZjH5q3hN",
  "key34": "3dJ5cLFyBQfUj8qYnpnCcP2jHETKuU1JJSjeLJpWGYsgTV4jeuHxzv48n8HnnSHZdAk5ppYoXFiGNf1Z12tNULa8",
  "key35": "48G6nfkUtTcpUeSvysuWzBk4SZbFxgtxwGQ2tnDDbg2GCjHs6adbBzTQXHxeRqFDhCum8Hc718voi8B7dEiyTupN",
  "key36": "4ujxxC9tqnj2KQqLA4Qn5uGPTXfF3isFBp1MGG52iE8royK7f9H48LbsUTMgXsF92mnedbFiiBZXgnf5wkYK2awe",
  "key37": "2qFh2EzT7MAfaWJggmueFCYAxavsE9hatX6CTeq3fXD2pJvVeAExNzxeEAbvWUDpJ1WM3kkCUZdbWNAxGSp3ouAP",
  "key38": "7JZ7VKLN9cSRfdPEXfpdJoCKbVaZrgTapJeUuCiwcVm779ybzXxNRReWK5nX135eCaV1fc6vQa9PJssWE8pWf7t",
  "key39": "21Emudax8CGAF25YomYZUTRkH9kcgNNQgYwq9D9cTBEypa9hX6Su3dGzuE5MQTzPbX4djMx54kQkPQbN9oyRHFGG",
  "key40": "yfyE25STqM4ct2YihobD21QmaFquCxh42ztz3KFTVi9zTquYH8kygEvEDgEWt577rzds7MWv6F2oi7c3JKDx7L7",
  "key41": "316x4yeMaKnjCdg9wUrWSc8VLhDdMvmP94c4i7rwjseXjez1dABQHHPjwCrGWyN2gG2dT3DeFTjVFVGo3YLwu1pH",
  "key42": "4FRY8nrr5XGDemokwByHqK8mQdqKUAmJSyB2YjZAcA1G17gRPvxGznLycF6XBUVcFKE1FeauLe1MuRke7yYZ6tMA",
  "key43": "3DVSsNxhhCButT6FLV1MqKiMbsdEB7MVwVNrxcqkfBQiCPTLcMVwty8PrdBcXpumjCd75yH9HF5DAhVPb3dNZSk1"
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

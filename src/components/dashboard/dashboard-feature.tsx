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
    "3MVb2RJ7dB99hoTSk3NGW12DWazpD7WswfyfyuTM5eapBNXSGvdHKcAoCTDFZqWPpkakKHw58UtpaNsyC5iusTpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1yUPcg5mkbgkKZnj6cUqGh5KNeNfnvksBT92MgjzMxZgW2EfXpDAdMroJxkzqb6VstbRzCuJFnJJk1an193k51e",
  "key1": "46PWbBkHtgM4dqWKsAB63B892DHWupeeHpQTWj19VxKtmxD7F5FvRuumTRwWMHuc6whqSgKtpw79FVqTqGCUkrFP",
  "key2": "5uUkNfRBbKr6PMLvt7WbPm8eDMULrVqRDpxdwReSWE27949uaLsYA1NTSkVgGzpxeEhuB1kh4hbCwpMvSm4w8LdL",
  "key3": "5escwzTEF6x8cynZb2oFQsLHCpH3KZv2vi3maJjFkXpmS7QRDCwsqfLZEAQtCPygutmaXUoMf2ZC9Fx3wXcQ2Srv",
  "key4": "4BcSQ6E1B2CL7sYXoDXX9uRTwtQmwkeBPB8Dd1gMRujjKKbVjomu6draUBHsUkAa83PCeLEXkbq4Lmt6dbV18UQ5",
  "key5": "4sHf4QxY4MhT9UtLqNRwiaEyzroVtXFZJYdzXJeNqhJ18fjq1ovL7AvWsuPfno1QGGrBjKp6wV6R25cbmEKKXEWX",
  "key6": "51q2md2xzG6FEW1s1iXT3333WiS89cVifPfhULpRgJGcVZCo5RRsZeCHmWKv82APw1UpDaWSCBk4juJuqWqjHRW",
  "key7": "2gnMHQLM7HudCCWnBVhsPVthRc6todVazqGjffnPUm6wmfDjgKstsGF3nE1ebE4UtMpkEMkfWzUUgVWkXJsprZ6N",
  "key8": "4oA5F5zVSWCdXoGechhgQ9KUWninJuEzaPcXixQSeQT7dX6ZNJifQB3nkArJHi4XU3ju85NczJZZMau1uUjJuSRi",
  "key9": "63gk5Ke1EYkGgsQ2rorMpFPmb4kV2fPDWUKC6NbeeFwkY1eu8X4Sycfw4C8xZ71pHhyMTTBZHhBmKUDvtqzJr13c",
  "key10": "aeLG94iP5nH2Yg3khN4SqcEYpQNfuk8zb2bxMTsjt1z2cX8GkRmW8KUD3A57sXh7kFgg54G9ekaUrYyZtJiJ1pR",
  "key11": "4BntU7Ayw92PpXEVr6caaSgFziT43CqsK8sErZE3BzUdzMuXtLJHPZ43VKHcqAH9RGC7bnKAW8Y32HNLeysWbZPJ",
  "key12": "4sVHmERwGFsuEHPQkGJoqYbqDSR2pN99HggfDb9vy6otr6mHEZxpsjoPT4qLC1yyG8jhA7oFBp8Tc7EMauBHGZaK",
  "key13": "35LSDxSVhii7kG3EUdxhm8Y5LEXiby2gMQYqh1J9Qfmkhu1q8Nr4kLxf73ragHv288WXWMvfFcfSrkY9jRKBx6Xs",
  "key14": "2rST2z9wegUxnbmUELQEWUJhuLSfHmfAANqTQcXRqzjjxmApo5zdMa63w8iJ8kiKmNx9iYRxMy9y21kHzSgRPrrf",
  "key15": "615qVHmA7NW5DAdA635g8GS7ZCYcm8L6f26BCYoWvK6bairF72a1tjM1Ff5PCyg7VgU8CedLisMsTxfz5J3sKzAP",
  "key16": "2XnSYXha9FWMgTea6Pe6tgcYM1m2DQa56bo2hAwXbkGs8zsU3bWuwngKQb1V5EY4nfCSprwDVYDnPYdwTH5jyMY7",
  "key17": "2NzCzPw2M4xv9fjXJy3BTTpvWoboYiWdAcLhVpQsnQaV75Yna46BXnwz2Ea1T3YTCaGtjMJknqqNUG3LVYrzkPyn",
  "key18": "JUHx8pfzgrbw6cdTGsXeoVq435W4DAKwo72Rq6Lnf4nDjAVbVBQDGKqKozscEjjwni9Utzf5ix3jMcPhDNuEAxW",
  "key19": "4qSFo1L8qvXiwx5cefHmnEbYfVmhGGJLC14YbfDQPZhBCpP5FYwTQUzcuWAU9kcpwfWWkc2WyyhnCC7WUz74ed6",
  "key20": "2Q1RC5RfF3nsZ5Wjfg9s7PL36XzsnRa9oPvEFWNdvGw45Z4Wgr3hjYbTVygtArgoMjyP4UJUt4owVw6fqqkUkr9R",
  "key21": "5o6xVdmfTmoNP35GCZPb6BhPrk39vktcTjzsC7bMZNtkKVmEfEBy8Z9uXLvQotzmJunmDQT3iZRaKN1pN2QnRt4i",
  "key22": "3VEAwapXP1kSqkdAFgvnJ3b1FjMa4RtFb7d9Me24amjcjx6hSLzSH1yT1bd8DGQLgR1J8t8wdLiujnDSVT3ajJec",
  "key23": "4KP3rusHXmNKVKAmV9z8N4rQkLN2Gc1CAoUy4zGvy88WCt8WEpGMKu7fhCgCbBoo8Atr1rCw3FZR4qXFGztM6umM",
  "key24": "i2HciydCFqshPwdseFNfuGEXhRvCYZnGNNYyBfzd1bjm8m4vV9oA7yi7tjamfpya9JLEGTegu9AWAnEsVySWbNa",
  "key25": "5gSGyxU5EKi5FnXhmkXRyu5MjeoTXQR7zi9rCuz7k9TPx48jpAqgyPrPdp9AJmYH7M8KLmiUVBmcUD4VuUmpggWK",
  "key26": "3whZnCdWb9MH5qwZNFgHMXjhbhHYKYE42RQ8Los1u5LKgJG4tVojD4jEHvjEpDctfsQi8RxUBcXHSrEi5fyYLeDB",
  "key27": "3BnXpstUevUqZrbTw9B1FaN1ohV3c1EBdRSWDaiU2uxFEPovULwptP8vQaazLEvuB7N5v3VjedAPct6D7g4GSsro",
  "key28": "2jdbZm3nZP5GBTNvgG5uYA2jaHekLm65KzVCJx8oAJWoZZTp1mrsxCQGaoP6YaD6f3ZdCZGJWNTjNXfnwQG8rNrS",
  "key29": "3AsFc41aES9ErkZf2EoCdVKs9WaSdynYzom2AGsCCXyCi9Wo4xJ727M8x1z1Sudrh4gVEs1dA1Vp5GhzdnBL9pMH",
  "key30": "4PWqgF6f6PLhz5ezppAPJFQFisTX3xh9zNfGNcEyxFCXH1EKnhbjbomP1ExaKkYnd9D4sVeXXzqKA6SKtTRmC9BM",
  "key31": "4QB7cwkMWjUYD3wt1xo8gFkFWx8taKf2jzpsAbs8REuoC5us9mSDQbCYPbz96yCftqdRwVymm7Y7mjHMk7pQTqPN",
  "key32": "4zMW1d3zxEkuW3ShYa3w9pAao4MxMEDksbCJbEkyu5HS4dRijtxmjD35YbCHDyy58hoT5ExBppHrm9NC52BeMnLw",
  "key33": "2q2zD3e4XRr5DXucKxh6rcraNK2hwBjRbC3uTpcnBSh2bPV856HFyRzPgtubZGBhWmHJT4zydcq6TsekNb8kYvTz",
  "key34": "4PMuGTscgoPDmhCK4N6EWmCaQbraK1gd2eG8Yf2VMxEne3srBLiwpHrckUWonZTd7kmytAnXKoFN5XD9srmtjsk7",
  "key35": "4fpxE5nHkL2cuL9CeV9CcoqkAWsgAmiSmctZua5znppBLiqfUZ6aTE85jXRZFbkahUS1JXmfGaXYQ2c6D2Nz9Gqs",
  "key36": "3xitXoGBh5qNVSq4UUFbC1pBa3UxamAfS5D5othDX8KRwCub786VbWLuuv4tn49vf92krAjwXU4yKrK9FuSuke5K",
  "key37": "DaqrWCqzeLb9UqAQADYYUWXta2afMgHDCnj55UqPhcyssh67bW1noZVcwDsBSJ3SeqWC7aZqnERyDGsUhmjXhx1",
  "key38": "5T5KGeZuvHGfBrQhLASQ32CGm1FLaPh6gGyiW3wEd3YHxwYt2taWxkiPnH67xXfPYjAtR6ZMhVp9UwxJRcGSZuDg",
  "key39": "4kEuDAAgTBVTc7sUFVxVxshG5zq1NsQssCNybLbn7TiCyeJHRhFqqc2qS51BPTxJBXaMYtjTuJkKujurGQ9P1tED",
  "key40": "24qqosvMXNjgeigtf9jPPQAqiWAyTqwySgQwkMPGpavUhtGXESeFWArZ7DEd1GRpetjrHuHAUdFuTp3aCdGwYE71",
  "key41": "64cMFfGMm5jz3htzW9AmVPaWwqwYs1rSqMCyYEaMWLBL129yqS6n3hbfiHMuRoFmixr3x5b7xrh9eqbG1NbGY92m",
  "key42": "4gBkuwFhupkieBwY2M1CFJMtBNveFHh16k4daFvGfoRANEmZXjFDz25PdrXWtMGXuBzhQHQ3oXdT5oRj7UrJhbmJ",
  "key43": "34iZGcpgUbCCSSQ1CwjG5KTLggTMhxsxR5iK461xZx6tdgALbKYoHpDsqjSVPq86GTwnajdwERdGDvLLRqShgQUZ"
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

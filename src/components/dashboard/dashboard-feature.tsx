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
    "59vFLTa3LJbwkgz4tmivHmYfqZiZAqpx5nxYTtb7qcpZseTZBevqJYX37D6sfP9fHMxuULt1qZiXr9nzn9tMrDXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4avhxe9ZU12L6KuLP3v9B8xNq9Gtwd2waXadJL31oejNmsRoP89kDQp5aDnVaMhHznWyiZUn8FcZDKr3Q9MeSmPY",
  "key1": "2tyueMb7Lqj6m6qbj5F1kAruJaWDrePhrmosdz4RPymGMVkXwxj15BjmM6KwZ5nqNb2EioWKRyeNnjztU3XHg38A",
  "key2": "2pfhexSfHe3ZZYAYdHp95pGdJWTjUGqRrTkodwNWeFXmdwGhjQ7WQQxLDxstJYa8EEdAUjSZD7knneLBrMp3j2p",
  "key3": "4Nb7qWKLsoDihN73WXbDmtoeJWx1s6Vq3eAB9d6MjPxxJ6qzCsRFmq9rjGNVRaoRigKCUYk24iRQLY1Tn4ARm9gf",
  "key4": "5Y4H2LgviiHik9u39MnNTGXogi1tskaZTuDquYDC48rQkXxg6uA33MVeTVrendz1im3YWP66AoJNNijxbhN587Ht",
  "key5": "2JQ5qdtM5FEC5z5tBXkeS8kkQXryChdDnW2EfbJtFY7hWUNX24FSLrZUnPedppvSPU8NKP9w6aUFw2jr2QW6uJm6",
  "key6": "2JWTeD85Qjq8rPPhiGV46E88KUtrY4rp6TCG6q8KAa9gJL69qLp4PxYPVcP47Mv6obquziFKr9LECfpWTDinVwFk",
  "key7": "Fbah2Zm2d4ZCvaNGJmTMmgueA9Q6XEex9Amp9yaXtBSasYQcBWXxk1pqR6j2vCQUh2V2EUkUqGQDg4T2Pji92nn",
  "key8": "3qoHXUNcwTtTWXPzW7ryAoTyiTvPLHxXtC8gxgKPAgiAoUWX8TSm3M64LqbPLMmpT2sCS8w66VdRfdLh9HsLRtUo",
  "key9": "3zhFL4dgncjg6VRTaHQFZjvoGnobYSJrkcnGFQ6LjUpnK7SK9XbHkZ3RtT8UdV5ZLqMFLudK6D6tEkfKmCpcM49o",
  "key10": "2JYakETkXnxWsHsKa77wbANu6avaNq3Jw2beY1Ekr8K9g1q88caLd7G44bnCaUx3LGSWyyX9bQVQNkzBNd8cDLXL",
  "key11": "5z6LjNHBytAJKVztg3nDhYZerRCf8C43M1omnP3j2DtH5cZk7fygvqgbcityyDweAfAkCXhHGtWBgYx6qdyNKKnB",
  "key12": "aoKrUgxQT5C7Qpoyuf75MPzJm8g4rr7was4s9ttqFm8K8qXef4j31PZ3w8wWsZ3PgvBbtBcHTzBHKYRFGuYxd2Z",
  "key13": "3p6kEHZfcsvvXcmajfDZDXJ95AS49vFRdH9xLJCokRtt3SYV5oURkHwkRCdnTuxRDyt4iE2jRSZuB2on9h6WGnMs",
  "key14": "2gUDpa23zUGFYiiF5WbGsLoaLphd3PZHCzrnpUU7nBENKGBR4G2fxJMiFzDuxPnPLg4abvY9p5ubxPdRXT14WnMP",
  "key15": "5iHVF9FEPhznvpeCruaR9fwKTyjKAFVKvmxxgwPjuj2U85vtcdMXX9QszJ8fjVcACSghnxHQA48ycuD9Nmggt3ia",
  "key16": "3koxAua6BuBdzDToG162LzdDxEE5S3yETf94soukw8im8Bt1ufCB4Z3Gzzw7r9QrjPTWvfNtN9HAqrWWUEfpw7MJ",
  "key17": "3ytbnAoyUxzSGUdz6mAZWyTRmAfZQMmJq4a1wMbHBd3JfF3He7jEbNfhdSnNFsM8YQKHiazFun4AMJmLt3sya42v",
  "key18": "4EjkUgdAo2rLwFGTiTrZNhazsoVoXc7PkVn4uj4hK94LWCn42mVU1xkaPeAsv1HfGtCCifyLPK3Bzuf57qA19Diz",
  "key19": "2vZ2KYtErG7cX56JU8ePwcmjx2sJCHTZ5LaB9RmBXd4TdiGWbpAEsXgkpKfmco6ckc36dgkuBy1qZzQoYbF8tNYY",
  "key20": "36QoVkVZYtyDkcetmPGTX4uS6hb6fN5eGbudN2jwp2agRBdREjmX88xyAQrama4ewcUfrFaG28kzHbz8k2LWapVh",
  "key21": "465sDFN41L4THVr97QHGGygeXaRXbKZQKnLK9yG58f3r42Ch4wzxQdr4hVWGW9VydK4VPUiXZQdWCdupnpvuWJmH",
  "key22": "5U7qbnT7SEjhqsUdo5G5ApiEkXLum51SFZ3L8QjRQLnzXgRoCSiqrQn6J65QruKmaXmUborr7XWrYfSL4tSBo5qW",
  "key23": "55GZha56g4LbkHhLspin3j2iTrRJkFo9h53vGqVvk1cfZ3Coo98riiebe6dxnmvV34YY1xEGmegBod5MKg4JYUWi",
  "key24": "5e9JibofffaJALxbJfkT154fuGNHAbo8JJENVP8CUb73ctmNCtjqCwgu4z9ygoT1L64QE2te35bAdg8ExpBNvDC6",
  "key25": "2c4AbRCh9K8cxRUEWToDSKE9oSiQxTj2Y7Y4ZiSFf958B2bcj5r8GUWFkrJi7GFvGT8ZArzx9vPRygk9pDXWWkgr",
  "key26": "3mzPPKF8Zzucd4FdGFzCtAWYnqfCSN5j9Bq5wzmnyLpZtf56GXyiEN9e6NFxqRvgSNH9ZEEcgGMT6jcYzxaAeBhT",
  "key27": "3jkm5888jvwAboSd4B22RFis8uA5eUSYLAhzXskvRiXQzGPGqZDEGr6qy1zP8RKwc4v2CR9aouWywMxghSxVYxcx",
  "key28": "272uudSNUsnPhRck9WgbvGWboVDRC2bnsFS9Lbx3FtTYrTfyzjeeqLKYinHJWHsYYGNHthEfNULFYAkC3CnXm91b",
  "key29": "3RY2F7FLoYzAHFXbwbi4Bqe5Smu661rc8qtJwM1La6kAYqQ1TX5wpGnFCkiGXzR7huFPBun5ndqh3drDGxLFhizb",
  "key30": "Y43Er5JqW9mS4qWQW3TsuhusApYqgZ5KhpLTYJnX8wa8MsU6LnFKK2XyRNT7eMF1p5qA2ZNwNwRN1e9NFWYK7FH",
  "key31": "2jaRnFEEpwQGWt3XqjqpwpTTVipSbbkq1y4NVKYUgETJkn59WN5kRVwXbc6dhuFYQEpZLRfxC4qJyezPua9a6kqH",
  "key32": "4mgasg6rby7BwbfAm86gs5v2Fm2UN6vkRD8ei9roteHD3So6bnXq85nUBQmrvFY5JfZGJBYwMCL2eNFoKyz87mMw",
  "key33": "3EvsrHCkNjogiAshm9ReZzs6rn4132SyYCtLK2E2Y1FFmvtY2ayrGB9V3FFFM36Fu76a9PGkyQw16Sts8tBv6uKb",
  "key34": "24DPsCt4H4ejKijK3XyFnAcV4wq8CXKEbULCmH3S75LMK9h5qc53ZnKtssb9jpmd3obr4XCkTza9yXfeuiPv5ubC",
  "key35": "5E5nw5om5iPVQ8CqhWYhHDWMCrJAm48tb2JhLSMFcuzTKYNtGyhN9DdYxSKx88itfgS8gxEFTm1bL8crkfk437Pg",
  "key36": "4a757nW73afEsA3HYMEhkR2e1RsdjexDFymi9ijS7Fe3eSKX9J8zPFf9XsNZHkwa1fsMf9KFAruJooXynATqcts6",
  "key37": "4RqA3d6LPLoNPYMzJhpYrNonuccdeQzs8GQV8MkimBSvdTKbpgCCP7mjfVGkjyVCUEG9vJzPwHPF5KDrcTBijR9r",
  "key38": "4NDt5FCsjX9H9p2f4j5jFcynkL4QaP2PmrdeKbZjTWR6py8SyvGGRH8r1uHh8SeTLJ47BaGBfCXwzqsAbEFiYbvk",
  "key39": "3PxAAEzqyDt1uExN8s2MLKV6F5jFh49B7E3MLsA61w3u9bSGp1ot5DDP64P5HKuMzqSwiqbiuGbh2UVipXJyu2mf",
  "key40": "2HnvQkTMXcu5VbsmZ8NwkfuZLZzQ2AZ5GY6oWBXQHh7Jg5dQW2MAcqKuVqNRmnsaqVh39mdSGphFXUFfTmnC2xq6",
  "key41": "3febhPUrPdniAfm664YNz9gtySMBNWzVu3V1SuVTaWawPKKwKEovsHGzBisN3xYcjv6agaqzoAySopmwqx5PvyEj",
  "key42": "36QBY579ciSTa5fD2VL7iAw41N7bQv9TaekUvzu55ggABKEjE2ciTXwyKPdwQMLyHMZaNccN4UwyFKTppbGPCPN3",
  "key43": "3HBgL4nTHeruVADWw1XVsVwTagtW7FtEP9NUk5zh8LBUGwhjfuELxHQi4mDukjwsfMef5dtTHjJRdynCkCY7JbP8",
  "key44": "4Y44dB1MBAaS8ihk77wh5Mu6U8ntqZ7bXRLSm8QYaycdSVvXAw6DmUa6gg7LZjBLnyYrgEbUDXuTR63qo46PgU2T"
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

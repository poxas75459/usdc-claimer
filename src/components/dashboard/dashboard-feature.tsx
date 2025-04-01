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
    "3wr2nTNQgFtjrBcf983WDHcKUhjzhKRQAX1vvLtnYs578VJR67EkdpjhUioLyLFJm1LMdEApgPhczEf8Uvbxhdpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kuL3DKwXNAv7DPLkiqbfPEb7K3w2t73kvp5iDfMs9H9rozqGi1Poy8DT7aTZ1abTxTdob9arVNd7NgmJYrDhMEf",
  "key1": "4XTyjgTeDd7ieDAgt5V4JQs7aCNf3VmMX1bT2Qc5YsSiBpBuhT9YXiLXfGJ4Qrf6xA28aaY5CcdmN9FRGZcAjoQm",
  "key2": "2R4xGpvPsoVnJDuidaW84x87y5iCpDJM3XE1sLoTitRXMTHnntzXQ8Qbe1pg67jmVAuec3YoJ2St6VErdib1rpTZ",
  "key3": "548c8WKCEvokHJJ3Hqb8YZnUBiebfk5uEjsH4rHMpGPkj9qAxVFYb6L8QBSHyPU5uYmzN5cbwpfYMS994NeffaZV",
  "key4": "4MsF1TezJDuXgDYYpqu7JXDuQsNch1WR7xqAgU8aEryaidEqcK21g7o7UWWvoREBZ3dMZpWaN5sroUAbjTmByQ2C",
  "key5": "E5wgyPQLKmTQaJc1msteWNr2CwawJnzrxMGBLD6ProLfjZ1jPhdJTskokGM2MThDkmy6Utw8MjGfB9CkjBt6vQ4",
  "key6": "3FmF48tjEpzj9g49nqwjqkmc7JWtUddMrF6RjgxGwSxXJx67KavtpnBvAWrubKnDCTed9q3kEa1jsEu2knJDht8c",
  "key7": "fMB9zGgn4ERtB1riNJ7tBRraopZ8TxMEn18dPyGtB8PGX2NRf3wm1XXfEPGFC9Qqt7SCJQiT9d9YAhyLYi9j7Ty",
  "key8": "4n1b8EYe2JexwwLisx8rQhQLuLTNw3J8KxppTgLfU5hRhAd2sr9ZmfbK58XSBo1QQsW5zW4YaF8q3XYkJZV4uojn",
  "key9": "5Hj6SajRwPwHeb1zDwViS2NDMbrAdcAFpo5FUcFFjfbjagPmDh74fFUqB3DuN8ozqzXMpv8hWDAv7AYuWV7EtSHr",
  "key10": "2mAeLpF8WSADaqNRky8yUv25cYv5XirS7AfV155bagRQE2dwjHV9FQhwpcHK7Djo9kQqdsio3nfSTxPYf8mrjzKr",
  "key11": "4rfK4PDF2HALXkzHhcZremMDWW6azM4Ud3gWX1SQN7DFf9LNV6AoTGD2iMETMvA2f1K3uZ85aQ5WX9E9eo7vFGe6",
  "key12": "31sWy7mJz8icbBhE9fewcn2cV5nSceYNgTmfrG8oSQ5Qa875bej2F6TCjeMyzcVerMwpfTPThUU6JPcRSMaeufdK",
  "key13": "2vnHp8dsjPDNdCaiFtTYcsThLfQtvQGqFTiJ14nRFfW6ht5uye6a4VzWf6xxaUTNSn4W7AJHQzVB5koLMssQCH6n",
  "key14": "4wDTLd4ni66fuLGJJoCsFxk56tt3KVBBqYgHVjehwdWkdN9m3tq5uX94jvWyo4k9H1ATzvVJzpzdWrv8YQGBzq3X",
  "key15": "475SNCYyWHhiw4WQp8eCHRwTjpyRMgNo1Dftk3JXknPqGXiJHMwkYspffvoxLDBdnoajTR7fVyYqsnnYrtrgFrQn",
  "key16": "4Z3HpYW5P8Ym5jBoMy4peuhpzoBnfVWpkemDHBJWM8DHuLpZmbWjj3WjJgcWrZqt8X6P2Uf9PYCB8TYMCU3EL5pa",
  "key17": "9i3EM39rBkLBDerRAW16xzxFNSH9FPoTdG7mT9SDbgq5WGLLrv5aZjBUa669Bs2RFMowxZ6G7SrT9rwjdxmBsKj",
  "key18": "S7tEhJxSnNNhhKSZ47XLZM7LJxZrfV715xgwUXEXZdHexRyg6rqv1Atkd62be1aWiKxGS53Z5YW9iTh4YBq7MzU",
  "key19": "2mBkZ9Erou32fqJbdiu4Ez8UdZq9azEAGETafoeNPXnHMh9WpirMPmardDmtUxmCJr4JgwSafek4K54zT2eXWofU",
  "key20": "5F7jZQaaaTfpVdVH7Hz7tFpBzufHZLcMgf62eq2JgtSXXq4kaWELM6P494EizrrRKg8UwoZ8oRiMjbCJjDYEfo6h",
  "key21": "5BuLRe8Bf5z2jmxfn61DCTNmZSHRLW2eRh2HxjsLdXJEduSZuu8pfNMUkP2kVTgaEjc6fAZ1t4G6v3E3bgsG7JGv",
  "key22": "4KDj4Yc9sv35HCCbq6kjPJ1V5Pnwgh7rPGwoo3gbrWfBNPJ9FAwPeJsvsc6oDvMGAAaTr5GHx5C3rKyA3krmbxWc",
  "key23": "2uybVaxZydbqSdMFdGQsY2LA9Ub8xYZuYtEkH1ZAkEGMkYLkgbhegaRLVxdN2ESELTXb2NuVrmp331suBfsUJVhZ",
  "key24": "8Uw7bEUqYvADjihobsJAYm2kxmUwq3Kbs3oQ4icoDeSpm6NvZ65SB9bZzG6pHptTRpMZEvDjPwgUMX5EotFy4m9",
  "key25": "3WeayJf6L57i8wVmaurRce5kR9WXk9pMp8aYjA4fhA44D74NsHVs4bjHFjRs5W6faZVC8n18qfBMHfFDbUAKF3mL",
  "key26": "2kbqET4KxDByDu8RfFLGBWpgJuRDTrLbUnVmJBbyAaRcKxiVrSSKEgmSD2R3phmdYgsqoc9TfChMg5Y1psoHhL19",
  "key27": "3hvYB8iN6X7foMrC8LypN3NTUBN1HV2y4GqKfiVs2Df8pfamrQGuXVTqYSBWFScCgJa83Z7tPMn8tEegfwg6Dp8r",
  "key28": "5tDyVRUSxTbTEZvEQgBqq7mTrBXPjnj6pkrE78jSM6QNMdpYobVG94bnMsyunP244Q9UuFHDmKP24xLFnGq1hzsG",
  "key29": "39xQC8pCs749bEM1gcn94xrkNuUpbALGTWdYRpS8YpQudBixofpq9reP2hWTmzi36RWa23M4BLe1jyZZyWKyYAJA",
  "key30": "3ihpz57F2cpNa4k3zmCGCaPxNUhdeA8cEJfr4p9tv7hdEksUTrnuKvEwpeQAt8hWtz7nNLYMDKSvxeNPyWbo92xw",
  "key31": "47Md6RoBk185VkgLYsCU1MgHXhxNa8JxVUFnLv3qapmaFGrupKcf9cTqRtZy3xvJh7ttLsmreR82FHeDJMQGQtoc",
  "key32": "536DJDCApgGkYrVWFXweJJ8j429irhE6dAQW71nW8vAdGQE1hFxMQeARA4vCU9u25qjz272Uqadt498yT4cQiAsx",
  "key33": "2GCF7MCJ7bJjerDmj8CTHJdVV1a4wRcd4qmyv3rautEzUN2MgHyTiXEqxcqU94bBJvBUwTv2EAzPQK3RgNZfrces",
  "key34": "3B54kCsDUJaYjoAQUr4Gi8nUxCLZu6dCr1Ed8rH5F4p2yofo6W4nckDMxYrZRuhiLwJgw6nimnQsbFPnrujmHfTW",
  "key35": "4oHchdvR5WygGj2ZvWTSL2q8xz4ipy3dhuMQMptyfv7DcUafHq2MS6HqdjevaWkHusJMzbdbGRRANmLV5AQpNZS3",
  "key36": "4XrBfAJUZYZNxR7MMPb6iFTqctSUiKHCXhDV5VkoWsF7aYB1NfsZ1RPZZfyEXz58YC9yyVuAmwJ95iKTwxpmSLc2",
  "key37": "538JBk9hoozWhJ3MPchXmPXnrGY7n97WkEXswexPcknaJKmJZa7VP4nSQ5yb4FtaxHK6vjKZcpH5vBDbvvaVitUA",
  "key38": "2s6at5auqzBDCtm2vsMsuoMNbmUwVm35BDegEhEHqkrfqoQ2ys5Ao1bpXXYeMH6648JyxnpM59bqdDjRXmAXRSTX",
  "key39": "65mzUzcLJ94oN4kX8X7u9vjW6UoYPS9cLDQHU1jUxMTDjH7Xe2Yqn4S5Un38EiSfVtfoMvwoayve7t3ig4t4ZK4A",
  "key40": "57kzuyEAbwZ3idLFAqe4SW26vH2ZfQHCKpwzobQWMuZYHEin2mJs8eXr2reSa8ZWMCHVVMJ6QhCUZmch4eU9D3az",
  "key41": "4jRTov8aZAJJLq78yU3NwdcDEUE7K9jiu1UJXzM3Jr3eqBW3Jam1UemCNeqGNFttr526ktW1Bp3RvSPXx8sWUWTX",
  "key42": "4jfaUkeE8eKKPUtPyDXS83wJWMAj6pnTmu9kCgpUxB9Fd2hJHkExdzmNZG2dj2TKyyo867GqRxoVNforoFciSvzM",
  "key43": "4QTXRSFPirfHr1zbpfTeQjSZbX6hmkB91bR3sKSXy3zmA78wNoMBhdAd7G5BeNRVRaxPZSNXJxHZ7Ghv6k6BHu5Y",
  "key44": "5ND8MeyuseFmshDB3ecd1vsKPCgriTWN8M8iQucFVT8gYiaknaFgLYzZHLNE6g71SK7qT5341DPVs32GEkk3zNoe",
  "key45": "272cKK58WCHRjyAUg7gUsCG6tCec3AkHf8W4UVs1Z4mV8hDjhv4hri8YWAaVPswGNXqJCMELP83CwwkP9AEnYodT",
  "key46": "5rPYsodwkDhmZahqUAJs4wQPvFNFdRvuJwGx5DvcKFfYfpK3VRY7QK9oD2u1zs8Ecxwf9nm4zs8HyGxFU5sfhW45",
  "key47": "38nZyXWJQKqc5jRScpzVJQhyNiEExRw9DzZVX4YEqkSW1JgDmxWqsq4NFgPf9CEQexm51zEHKUht1vy26ihYPhgd",
  "key48": "47s8nynptgv5geFbRNTvy7VDcWcLzBGDrxnytrEqwVY66xvLyYf97SkFum6Pq61bQ6kKCuHmaoYVnqeraK6PEsLZ"
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

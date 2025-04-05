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
    "3BgjtexfF3DLzYaUdJ67JkusZFXoM9GRJPd18Bx1FuuS9dJQTCumxdrh5ZUX4pxvPWnpJ4MjSUDje7ccgnKcAwyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5shNYr1qZAUKWG7KXYr3R6vKHXVXZsXntGn2ZxSsudZ47VYrkfCYKAzRuddxQJ4Cz3dY5jEZ4hLPcFgtbS52kT6R",
  "key1": "3Ai4HKfkM586ddS2EtSaQnyes9SKk4uY64Niwyo9A1iMdoJKJaSQm2USyQYukpFW1yekAixKE46G4GFhTvfdXCyP",
  "key2": "5PoMQEkVsQHbiDEhXVTi8U8QpMU72gpFtpqbr29SFaGNmGmGJjBuisZdjKC4kEnxGpWPuiGB68JFJ2UkvPg9GANH",
  "key3": "27SXXqqJJyj3K3vxdtrwRSHztM5tLj6zvmahmM892eL6W6gZRf3mP5aW5GfwAuZc6zETfUF4kcDJJ4qq6a5V8pVs",
  "key4": "4rtP3WR3Cir1k88vChRcy7BVxtb7oz1i92FYBzLzeRT5wryVVnbuNsmVGRifZVf45w92tP8jG8nsi1tLbtrDjTiU",
  "key5": "2GUa6oNVm5nDk6ah7T6ZKV6tY9hk98aVYTjx7PQy99Zv2VknxeiRZwACKwqnEifZNtc1GvUGpoZaWP8mQf1vdwy",
  "key6": "43cnxX8db1MgCEn8Mgggddy6VaCFq1VLoc66yKZPqTaXLeVhD3SQpMQwUS4xCq3qWmCFAQy2TdaTLTDJ79A3Yv24",
  "key7": "4RptsSmE7ZuYw9m59n2Mz1vDDdnhGL6a9wHtUgZuzMDC8fpgQfNDek2y9jiEdCaPc8Zfa386ZRfU32VkHH4WJp5b",
  "key8": "57QEwZsVBm6x8grGmD86hRPKsxfBF8qwLtEq6TvPF61YqyH4JYwyrLfZ5pvYU9VaBYXn1xGfai3KPmbDRoZ5QSoh",
  "key9": "5xSE3QMEaKdhqMWDG4ujtsoChrLCP6cBtZ71aVGkNp2d9itqR4rNHnthGtzshfhUVUmXyz1hVZ729fiSVnc1S54R",
  "key10": "3wqkG7yC6BFQLmmh5aDYeqLdNGfkHqQ2FsSU3La53q6MRSfaRdEgbpZj7GpBvf3292s4Zi2thJZYjVP6ScaFiKsY",
  "key11": "2VB52D1DZ3hfmcDfTsggZNvPppGL1gXYUHTCrZv57Rn9MfX6YB3o5yWBHSR51FRURTjmeZY3qqYe9vMyoEuug2kW",
  "key12": "DhvW8S3hDX9FjRsZzg2Sfuu3uS27Grut2kATGrxKmdN3VboYC9i7W5x47zpnV5YKA4vw9AYs5hut35gM5Biwohv",
  "key13": "2rVGNksUDSJAYYcGW4suMnWnRUYF9QKX9gPgNzNYCxxJAGXx1TpBC2ucZSGwey9awCh2GFWtwhU9RgYi6nrn8mTz",
  "key14": "46hVJ1kYn4bXN6zseVEvhyBNDuXrLoHdRcXSfqoEQGx5WvibPt6UQLgEMNKstNjUHBEFrAP5MeSchMSnt46duYyo",
  "key15": "S7LNxgmWJmjWELVy3YHnyCrEfpdqm5YSWDJMtK3X2P4jHcbq8569XkmiYd1N5gbpLWyM9RBnzWgbbj8LVi4rycq",
  "key16": "5vmck8LDKUukW6Pv5Qc9WPgg48KVVxGTBk9sKebrL5mLsf3z7N7CLoaRf7Z6C3p7TDizfPJoKj2pHawVPMcpHptp",
  "key17": "27tsrTMSt46T1vdEE43cae2ktBSucWisAAZUT9rYUi6kyMGa8EufiAYy4ChTQ2UJnUXczT5sXnJzyS4w9xQEwPkT",
  "key18": "4kp1TS5GkQUeZ2xwaLgsNriCENFkFao2FUMGRrnQR7PAUKkkMeB2Pcqi6yQ55d4uXZ25zbt4cEkHJ1VJmYuRpH9D",
  "key19": "5y4JC8MugZwfdH61DKHSjq3SuPjjSuhywkNPG3C8zu1dsjSWsTZ1K79BACYxRusvPLKy7jcja61U2y8unq8srW1h",
  "key20": "3JE3ihpxd1mrLsXstu3EHengPVjcCuHbn1pLYBYe7vvEgwCyrcfyGpk2afvkcRCtKELQqVBMWecTEgeGeQBUv5NN",
  "key21": "3YNcnUZFkEkH6rztSzT3JKpas9oga1HcB6hPF48exGQPHbhpZyFdEWVstpfN2MrfVks3rcbQwJ3boG1CJsDY35Ki",
  "key22": "2pv5WJvKjC52yNLzTbboU5frqCt5v2cm7wmbzmzrki6yQ7syGUMxRJdoqhNbzcAkR9K58aZUdgFdJ4mmp2XnEXgR",
  "key23": "3Q2sJ22Ygm74XgrZSNkxDJV7Basq7wtR5hZUCuCi4QfsZ1BJra2HPWCGTio1QvJxduP7QBkoU6Goh3nnTCCXcCQQ",
  "key24": "YVzL5wnvPPHU2YgobF2AGAbSpR6iWL3vKFoCqrRNEiqLo79hUcmJZbRa6yiYqUCwJDGKg8oMSRVf6BUJD7KPeaS",
  "key25": "5tTa5wkHFny9FqVCac33dUFxybsFWNanqBBFd9yETgPBJ8BP6qcikhLuvBkr9GVChRw2Yt1igBzNQ3PP1dRFLQ9f",
  "key26": "4b8nkF8xNAXY8XGy1RZ9g5YGF8mj2h11BAvtrw4Gfwf9ecmhRRbgVZS5nqeEm11C5soS5Fjq4Q6q6z7NsijLt5YE",
  "key27": "2SJAZaLVYZwbUEqEk8pNiGHW9yr8e8UKdHMKBwkdZGwBiwaRSMsgucwnUxahqBbg9WaXUhnb9n6FDS6PyrnuysE3",
  "key28": "4PoLAZAtQ6KiMRGgfrUz6TLE9r24kvQyfDRbfxTcrsPcQ4R13sN6wXqwXRBKTL9Tz7E9BiNd8cVXoCgyde8SSqKi",
  "key29": "5ViTQvQ2L1Z4J3c2sYWL74B1CvZh6f59M9XYtQYHrm1VYkaFuusb2gkcAWzMU64Bk74xpr5NQRz4hpiDZRBR7AbW",
  "key30": "4pwBYrSsrQWh6YBrJ4XL559kejJVNN6VvT1xWgMLvJxY7D4QkHW8e6KAH2RgESjKAkUGYxUP6pNnTQLfNMMCVBan",
  "key31": "4U9CtKKTKgXxQPTY2LHE8pT3NuRnqPETrtepkjko7W7WWhrSuA11476cWvsw1u219168hjMTDvyA7bVzBxsANAw7",
  "key32": "zk9m3DYkGBmZdJ8VKcskpJqsn2TwgQ8b7o4iJqMtMow8o2nYR7DtD8WEYKATkVb1pLMqqqEqpDbEgupKF8EUssY",
  "key33": "5x7b5U6v4weUGTfnGeqXs3Rp8zsM2tzAh95Y35yus3NwFrXXKpUdzc3k6CqVaBWVXemsSFbFoqfC1oT4UdAzddZx",
  "key34": "TSyJWGkrPBT6sAid8Qn4B2b1QX4L6HqWbqAuBsupw2yDXq1HFukh2qFvTDcSFXeZNeBkqS8bgdUmfTiUswcWAhd",
  "key35": "LDRGVCi4d3RTboZRXbM6XZocMwn6ozwJSpMTzjNGbDyWq1LDQLJ7B4nS75PSnD4fKc683V2jnLdBGtNf3LLkjYX",
  "key36": "4RXWHQU31n6DBcmToPwuPqLbNS2xtvvyzyu4B4gEdUEXu4zpJrrNrMPB5huh2YEuz9efr2z6qF55vr76BWAuZ4gr",
  "key37": "2EBP1PjMg5zqR2L8y81k9pSY7LyotK7V1tXMehwsExKahr7DpStsLXu6DQCkt81hvptYfANi4JY5JrfS7dGseJ5D",
  "key38": "2sZum1uNcY8mRZoWsKUGspzRUj9X4k9LeLxooNVLFfshhWtVTexB4ZRYqJ5z2rPVdBAmzuKUzTmmJvKhCN139qiZ",
  "key39": "332r5jfpb3EfrVPMdhDaJBLWkzyvJ1C1pvAGijZUQWSD6oknSiLdRZ4Q94FhdqAiDM1vuZdXAysWxC4n8NYtFwvE",
  "key40": "4GH3YLL6u82qhPwE13sx6BpocbJTRcuLTpNdLF98dUc9td4ZxqGL6KxaKYhs3VvuAW6HDyCEAAhi191xqsko5Eod",
  "key41": "5wjdLcc6BhiuqCZJeCAB1TDS1j1AXwZDP9USBbMo7PVdASzHsVqPYsW5rHbe1qZhEfm3247z4PCXmEQjycfa73Z1",
  "key42": "fJRXsDo6WcgdhWyCxfEPixM4JwzyEwZUeydQ9JHMfpnVMtCRVfci1GAPsRZAy3NyjmKfTqnPCACfTTFhy9SB32X",
  "key43": "25i3JQbuD5emrHh65rtQ6xDeELqb7JASiHH2Ce2LeRABrbaLJZ55bVEG2YzwUCioCVCFTaxwT7STt3ZamzsSoouA"
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

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
    "3QeWGVJ2kcqcuzQ6f5MJaov9hEf2bQDrKv3KEjQuDp2A74nfMxNnEquv1Z4HbFiFAqrAAYkxCmoz6FkGzqzDb74y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wAC6rk6iB68z9dHM1xSLvSDpYiYqjnDJQX4i4rDT6SYkw3qr3nK1p1Ukd6MMR62rxZoprJyAuPcuh5Kzx83crkY",
  "key1": "33PhoxahHu73pcZ7239JXkFz1AToHBrAiGfq9GF6rc41DRD7drTTnyoCTQJtg56NU8m9G4vGaVUUz7R59AvqFK1o",
  "key2": "3vyiyMW411fTuSCZnztHocEJE2h1Bt79fTjc9KGZ7VRdBZNRDQrVhTbCv47gnNJkfwn5bZfREYuQpCp7hjPZf3Lt",
  "key3": "2227DW5LoFhhWBPoVhXziXXKBCxwjYV69Z7swVE1b81fhhRa5BXiwviWcVwXfXZBdg5KbeX43vbCX1y6YkFWvMZT",
  "key4": "5S7nLhrriiiHvJkP1fc7BVwEzXMn24LiJXCRRiKymrDRFurVwMSkTQSPpMbPLmCd8tYWce6wAakLdjro17CKLxVD",
  "key5": "2VCc6Y7MCJi8zhbVggCUJmNDQsqFmxq99S8dihUVHdkoofvHpuXwi4dZvyrK3ixf6zcrPJi5cKTCkU1At8UC24RN",
  "key6": "5vJZwtpHfuqNX5AChW5TKC8UCVNPAxv1gHU8mMBwNh1jmYnohwbHocLZHksYh1RQ5vjCmp38NGzrMi4hmLH1Gtwm",
  "key7": "2jWw7tHqSU4TY1fsbWTNxWCsSkj9K3ThN2dA1x23REofwW6KQhRMXJWyXGRBTBdetdNajC8HdL8EHcZ8v6AW1mkp",
  "key8": "53sBav4eUxKEvQK7SWojMcPVMVK8Bo2RWhg3WZW4WZbPHhquhknDNDR12phDLkhJbx23buXsGQ5rvcUHpHk9T598",
  "key9": "33pwcgfwCRFCVC1S71hznxJ6rV12ES7SUC4NpBAGGEgJMRrYs8wG93p8WZRzMCWn3jgv5AhN9wjmuZameXerfzyQ",
  "key10": "3eWeEXb9wCKNq1bjgzVotdNb6wBtRiaVgLbhKkLRwkR62uiuGSnRVAXo8tc2tJbbgZEuezApnUjPSKS5NJQM412z",
  "key11": "4nF2dnT27UPog66JfL6YQXD1qRAZ395QpBSY6gN5GUUj7dJRap2yWqZkiR4s5Q9A9Kuax9jVm7bKjZi9YRYjVusa",
  "key12": "4tbkYQPkjWZRfWQmmHPz3sZBtR4ZvwvZvYECXTX8buW8gNzSmZoUmwaDQQ23ZfVvhQxUfssUj2DUvhESXDF4E8h8",
  "key13": "Yk9xmhmq35kAsQc54V8BaWEj1HBbBkdNkXvVZHU8dQRn3rEXQi7JrLmCo7RUUPXnQBFU1zgCUNvN9wbAd75Sg9v",
  "key14": "2S5Fb2EPHTd7THgce7uXFEHwu3KGPzVB7WAD99qUXm9SJX4H9RNYnRpypZ4PrWZFVJVPkoho4ZwrAXbK2esMVHpy",
  "key15": "28hYUwhLP4W7P1hys5HHBfWaWNL4ccWQGdtg4D8HgWsv3upRdgiXY2DQQVy3W1WQykL7c3K3WvEmu3h4KCmuH9j2",
  "key16": "hNGDSLGcWaDbZaJ1qacSrSHjoQS6wjnXZJUR7XKsquqjeTnL5cwikpRgYWXn9mEVzVmiRypYHcndsppyefphyqr",
  "key17": "3WuuGU9tiQFFpAUf4HC63vNMUUvS8VXHJDRbCoRaLzbVHriFx7BG1nsrhjG9hjBGLELsh6y3yzFVraUeszkp89ns",
  "key18": "2n6mPVt93FEbQexnjAuvpjb6EbtakRS22CbuE5xw7srXBdFAiTi2FmA2h15CkmvEdmpKjSPyKz7RxW7wYu2UcaM1",
  "key19": "53GPqVHuGqKu3Fs5jaBpGk3RLhtG3g45wMpgp4oLpRmn2Lr6fgYrCzypwuMiZPaqZYiLFCGaYqGvg7naU5KAaLFc",
  "key20": "2Hg3XS2U6xbB5FQzvtWRcR6A8WEYEvXNMv2uCN6mBP5x1PokA4rBkyY8Ug5PeUG1QMVideMFZ8tYpZpjB57UieuZ",
  "key21": "3wpDVNJkR5LWDrnNdj91DEw3AoPESrU6K4fwzAykezxwfJR9z6FLXopGSziFpQoZsShuDma2xaZxmXrPnCxBkGnj",
  "key22": "65LK6ABnfF7Ckn5y5RQ9vuBWzBsXYk6dPdf93W1jt2qo51XDrChGG2RQAcu7qGFvardtTYkp91Q4PzNB6QMPUHCt",
  "key23": "gqh8iTFQncaQqtkj83ZT785DXH63PW4pbWCJEgKpXP2XX8BUip6uXEK8CCpgZuftmLXzWjG5hYFrhkffSS5j24K",
  "key24": "3kJrKHaoSbx7RUDkk28qUdUreFT7V2Vq8KKL2XiwvCNH9vJuMSUK7bUrbK9aEhyCyXYjPZJiuc2AYmfUe5Yeech",
  "key25": "DN23uPNNEsFBDBAHJ76xoSmei8RZ2K86tbHXYCgMJN1HBQixnBGBKkFyjTpy2yfUQqZEE1BsaHYt6oG8d58Xcwm",
  "key26": "u6XhqWEqcYY4TzmMZjFQDryuDpzHTLDSk7QsndS3WU4S8M3TsfayAY7Y4k4QhRCdMTp9yqVTbcBb76dsj6Cc2ad",
  "key27": "2a164uqSvE7b3vgYCQmTykpsjoPy3aEDmxwnXnC7nE2DD3iCGYNcyQsRavVZPoaULCCEfpDPLDp1sJ331FGr3UaU",
  "key28": "TWwVLTvaQ7XGh5qH4HaTSDFE11G4h9tSMZTSqqyA921XmBweCH2aeT85rsqxZtbwp5nsjgNLLDqBsMRNHvG2YbV",
  "key29": "2c54rDgLdqHVSudZaqqwFH3ufZPRWDWiMKk4VC1M9U6Pt7EheHcbPBNaMSFkFZQiJZ7DvzuZrfjUjZmTAkouRwnr",
  "key30": "LYkeMaz8EbrKiXjaQuYUHLhN4YiNruYr1W9A7GCiQg3RvGVXwqXSVtSidbeNXfu2qkBb9CQCkHahXhHzNa5bYN7",
  "key31": "3YepnDa5cK8x7GFTj5mi3Qy4WyHzdEsEQVWvya7weRyRxLPAxurYvsGnmjn8ktnmxK3H2xrc5wKuwQiMJSg8SJRe",
  "key32": "2dLS1ZCERVM13JUwXQDfRwiTrzn7ZxEKorjPEkPNr34yHYDjsGZarwZvwBQy4f9UAk2nKoUw8MQExcdHLE8mYZp9",
  "key33": "3UbwZLTsKnmdNv62L6LDQhoLFY93jCBSKBdJZN9VKvNKkhqVpuUTzbSykVKWcXxyJqSFgnuGDEMdbyvaNACE2DNN",
  "key34": "3gJTNmPNqQaCxxffWUfbtMEMQRYgsgGL2A4WbZ9NVsbCraR8JDksMGY3RmjUsED17WV7WNsUzcESJuJuUrBzm55o",
  "key35": "62LHHY2bFJhndMqQshjnWa792aK34by5UkKe7pcxsHyP2xqiNVu1a5GR3LHQbhXzxVQku9n2STTUQ2vMaSAFHBbD",
  "key36": "4ngEBXyVSZQfiRfwyZBUAQDTwzB5bczPSg1eDaRXKjKiSZ5WSzMMckrYy9nSDhVCpDH9g5tuaWz6Zr3rr2r9dpCR",
  "key37": "2rz2ieM8gZwu9iiAyYvzJkoqzZNEj1DHCraJpS7regk8cTqXBXyvwBwAgbJNWfZJsbLDgmjLUKm34mQEqM4hPDgh",
  "key38": "3mptx226mn6rSg7cZFkMdL2tjwt7dTGycGxJ2Rj6LKfHDr5qw4Rfe5cvZvKympgdfSfBpJBRdDd67kcbXnb5wxCt",
  "key39": "2HGNqAX6mSFXif5SvNsKbfRqA5hUXcEi1nK3yUZpGTBhVQg5cU9xBYyzZPckUeDcgkFQq6VKK4Ke5tuK5Bof6UZG",
  "key40": "2U3aTmGhGfkwryyJb7tDMhf7KbDbcRf5WEzL44WsM5pg492wRqJiNLXYTTEyjci1uabpQMyryshWVgKnPV8hkvAY",
  "key41": "3jRAMMMoDWKFqCka9A2Yn1ZYUnM8THoXGZcrDJxpkR23WsLJGjtNNCdfvLA7dWgRLtpqtxijec5Ug4iEY6YWvj9j",
  "key42": "3cuPD4Kfd3YzPohDTkY6JwgqfxjrUPewVAzUVuyGrPgkoMr2ZoZJE5PdiQvC7aEoYRwdSYeRpVFwDUQgWJqt6iaQ",
  "key43": "65EBTNvsGFQNvpqnNGNXttmuhew8akscfpT5Y8ucfy1Ao4DCHGScChbtdZGvwni72KS2FjdggNqqRnZATWMkU7kq",
  "key44": "5nFwcdsUiJeuV76kdZToEQ5akpAToDFTZrZEfFnLK4qtJsNddW9CfcKNf8GoiCMgF3z75RpuriBc5H2DyrqVsqvd",
  "key45": "4TSBjcGqWorMG6Qb5CzGKRNvp9SJLsqwYvAeNmvTS3uusK1m9Xu2CSwpCXyWS2LWA9jDKM6VmVDkqut6J1Q9DxKe"
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

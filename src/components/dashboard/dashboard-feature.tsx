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
    "4jDeQcspr31dNKL4TQmz64LUAW5JVWTf7XtVBka4U1opGSc4Y8k2CRMXuTv1gy9jhcAM4JiCLdvPa3EgyNuqwNtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xN97FwqPeZZYjc6ShXq5728VhVjWo6KoMajFEL8L3T8fVTid2bSVwCYjSjQUYRPrZhQgfqAdXugvviNp5q7yPz2",
  "key1": "2qF6cVwxUwJRpqKUYyCGHR3zWGKMZ1DsQS3d6L49nQ3KTKLQdLN1Q8JTBGCyyDaBzh9GjjPzSYQbMTwcu9wg664T",
  "key2": "5USKCKf7AXEyiHXpoLB9FEzbgrg5PCHhxnKSq6wbKXL3jaBL6yCJNsAatf9zPKwLDDBQLFoK2pxbPZUepLFiHEjE",
  "key3": "4KZEuqwPbALWrhC7NrteCCA8y9dQ8WuBXEHgmLFwZbSeDsGonMTPEssiWoEbuw26tXNzXgZHcCMd9UXMGLV7WaxZ",
  "key4": "5vDvKwGDgU2caTiCoMEvxUtzMSEFb6zsPrMqbKfL7bUQkRgiRXrATztDp8qEsaainpKu4jXExKn2djAnD9j9Lekr",
  "key5": "5s9GFDaHHVkfVrEAGFDNm3Wb35aCriQBTGdA3Lnh9n6DsrpcP7SXiNm8eRbjQZADBfqxCoDfDV1Npde6QHCvEqKD",
  "key6": "3as2SwFQmQvXM7umRmhGGiqGoRSVKvoRLXjbGH6eWTmcAFLAuN4wbpEkLsz2T6j3fNZfKKcSLQwoaBTXNzvyKsmF",
  "key7": "4XhiFBVrh6XbQYGQVxvmQ149LCqTWUeaT2wbzQKwnWGedhXEAFEdtHGeTcf7gcyLgKyyKXC2VeZgxiojh7dG2VYh",
  "key8": "Pg8J4KNYmSkaZKU8sYAjcrnD3Am1dHxSzFREvsEzVNfqWgd2nBUSFhTKEAo3ptzwF5iE91y3oeGp1sQ2mSGHMat",
  "key9": "4zhQgfvXJwxUiRhKb1z1Tkp9RxUWdfVda59b5F3vNzRBkghrZkksPTSMLuWhdVnV33Vu5td4jCSMFciNEVLKiuxU",
  "key10": "4sxKyRkCujxPyNdjUFcFq4z4FHxmce1r1JLu5YPu7kLZhkfmGpKL4ye1uXNTeQ7QcWmqyHhVQZSCrbenkHQSDWaM",
  "key11": "5EnUQ6mPwEifhRvWSZigccooPS5aHuSQKVJeZo9nrS9gZtRSuxoQg3nmjw6E11MQFFNn7BN1WyYywhE1tehcDBzj",
  "key12": "4XMWWukhunaJ9SFAWEpRJnodxfk4kS29fQpewgRrqFWYWMQoByBNZUp7LL3pA16cG7uqew7cuTtdRNfYcT9kGefH",
  "key13": "625WajdMEhWd4tPsrBbQenDEKGGpCkYgHzRu9U3K4xdSEiEL8PrC9KVmCUDfJLUoaAbFMMy9aZdcQeeSge3XWnBU",
  "key14": "5w1Ko3zDYUktzdpoJqGXzB3wq24n9RrH2Bm3Z1hCGT18asBpFcyKBBgXyt3zRG9nwy7nKjm2qHTJs341Ehfs7vWQ",
  "key15": "5u8FRFA8wCPb8RGaPcnZrjsPHxQEznkufUBqevxwCRRurGcaSCQDSB2LemSZVYmGtDNJDsaV4JUUttNYzmVN3iWm",
  "key16": "2FPMo61zNzuXWh4o3SZZbg3Ctk9Wn9Lq72X7AawEaUVz5qp1Rq6Pv4qVXEDgmryPFH4pZfBRoZSW1LCtTHbDxhs2",
  "key17": "4anrqp9vYbwxpbEnrUJK6xdyvUcyVuS6Qam43Jvpoaf9J3GFvPMwvHhLwDvDn4ZfqnWU8agJWk4PcE62mzwkaxR8",
  "key18": "g3kXHUJbnQonRGs8i8CVWANs1eXx5T3xK6aKy5Q54zfyJfUHJpBCysdUFm6Q1nG9rLnDa25zWjcgDt8u1PYoTap",
  "key19": "3gqghKRgkfoFt3ggy7aYgCwFu32bEMtsBZYtauBVqw45TKnMNr1n5VNwVUnrjMyDbaaHoskwYDjjHYkG7N7X3Zpx",
  "key20": "zpJh35mSwV2iutyMbycSFwXhDGafe4NpzaUpc6rYVd8PooDpb35RHqcuAupYimc18Y3XFCcKQkyAwhHyHHWBGJW",
  "key21": "3sFvTNCQjEzdrz3eHUejYhs4pvX5peSfiZmdMoznmFbTERJNPGDjJWVYreoAsk84ic6omct71sRgxNHgRKNbabwy",
  "key22": "2JWdGc9bNjQ3GZtdY2FH8vwDUPyNk3Evhjh4URgkQREgavXw63kC1SreFT7wQTryuTtqykD3gZid44r2uLmqMtiy",
  "key23": "88abznYk1vXfXKUMBKK79Hvm3twqFrvarrT7QngfMbTHHdXqz4uaqhZmZdDRKX5LDe9TTXwfJDF6ohZWNTg2vuR",
  "key24": "325s1VDjFwyPVVF8S7AjAdxqzQas8DM1rh4fjP1hWM3Jj5oMnj1p8PMpNYGAhF1zkEVryjm72EavVvj1xe3ps25T",
  "key25": "4Hh2k1pYaYDbiEJx5sSmdZpnBSLRBFTo11du3oJZnGzux9VunAuDUB2SNJJtcZV7sUHEYX5Mntu9WKYzGWEZrS1C",
  "key26": "324dMtLharH5uRCeURGySH9qHF92jH95sP78e7QVp5uMMrLxCDJBc9SWTkbMBiKFwcg8RXepfzg2wihM4VdhcQqa",
  "key27": "2dxguqvPA9esWBZcjXVcupJnZ5fbV42QjX1XHz7Rx5oWxghFCscCtK9LAAAuomzxrWBdJpmyX8z3uCcBRpPUL3pg",
  "key28": "2Fd9xiMQtnS4NG4Pw1cgkCgU66kJPfcd5JNoJcg9FEJGYyGjTap1XPPHhhZX5G8V2FHBx2EH5v4TycnxVwkzzyga",
  "key29": "5GegFEqJmb3YHStqiHY1F1CkGb6NMMiLF1pnXNQaSPsjn13wFiy6Ev9Mxgcmmw49JXucYj3nbNNogXLHdKhkGfyY",
  "key30": "3LQPKKEWp5kUWEnbhLQFWiFmtKQnJQxLe4NuRgvmoZ1uAdKtA1pm1sEfqS55TifcDPPbdCmyUhBQG4rVzVx99N58",
  "key31": "3wF4QHiwvqvJxwi8yiMTrD81M1aLiiokCVkcPRjWDshUCh1T64pvLrb1UtR81Rq5AFwVyefa4hBtVbr8XVL6PUJX",
  "key32": "ev839TrsEcBzF98s7x92dCU1EnNM2gDqh22kaLL43wHUaCyTwXCYx5t99NME9nFthtqnq47a5YxYHkzFeZMFQHq",
  "key33": "4dMtMH7osVvaqscbKSUprzqtzAbrGZ81PDh6aYDYup5wudMuJg78a4X5JZWY8hC9xgwGh3gTCw1XWc3oUFYwBpkt",
  "key34": "3f5GCrkmxdYdiy2cp2rcMHC9KtDJynQbD1QkjukUcoHLrEaunXPfTLDjZNX5j4fRxSYGJLSfWT4oDF8MFcvLLfrT",
  "key35": "4FSLU5MGkydtdB1m1eo2Km9vtxCcTfoAe8QbixhnePGeJHKTp2TmLwgFj5Yj2fhfvRG2sNzuHBmhEXKdNEZnyrHJ",
  "key36": "3CCXXS3UaUfFQiZSbAY3uXtNt4ftaWV6euQEGbHGnjhHpNaBcmcuq5oRMkWrz3h6ivudPTSJigac7uKHbzV3zppR",
  "key37": "2aCHM8j2tTf1iFTP8KwbYu5orgasm2foh9nd4x9huYf9qos2Y9Nt27sgY7uDMZeBczvRmZ8WHrQ45KZ5aPvTqLXX",
  "key38": "QHQjuumtyeqf3ASpYLfPRKj8Se46CRnNRPHVkHVQwTJnAncJp6Sh94G48JQjGdNgzdLgdANJX3xTyjxfJjoBu13",
  "key39": "fDgD1nL4HSPMm81JDYP4sMw5HMMyqv1ej1uWg9U3j5ZNJX9k1AYTbF2Lvjc73pZ2dVbXNybvhyVnT39q3K8jNjj",
  "key40": "k68PctfMqnZjssTbFP3Tm5uyMeyxfGa8PhbcB4notbQ7nCn1gNhh9HdYeUZPy5m2kWiW91RH1uByKkZ8i6Dxr4u",
  "key41": "fdNXq9HFmdSZCGKJfH8ZPjM5s4XRpKdf3WjJW1uSZgqHtpdwYpuEmUVaDGagcpYHWZwYEYX1vrPk6rtXtGePiPE",
  "key42": "SH1J3ykCo3YUbj9fRTeH2fuNms3dPXgyEVGSjqsobeGEtoat8NgQXHtsXFwHZZzt2Wy6D4qetBk8WRBPJMRgJ78",
  "key43": "5zyek1HwEitWpdkkfDNJLeJmkJ6x5zGQsMMRZZRb9tNi3P1zZDGebSqigmpoorgreUJtp4Ey3rBCfieVzKzdenah",
  "key44": "5YzgB4hLTHHxoyqa11S7qv64Y7UKeHDDwQMenUZZcZxqtUh9an3fC6yGf9dLwZMS81LtiWUy3RbnaJG69ZtKqdVa",
  "key45": "28ZPwUcgqyiMevqJUFMq7dNjekwjFwsuFGurLxiYiV5VCAaKHKpDzUPpb6WBBChfFJZep4B4JRqpb9XNdZJeHuJk",
  "key46": "2afsoj1wGCpdzPrvfyqAVdVWHvhtVHMKDz9f31JCh4ygsGHNT37ZyzQf8GxNwvfXxM7aXBLQjqwJzJNWHMEvBwGR"
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

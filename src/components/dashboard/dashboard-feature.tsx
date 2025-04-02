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
    "3UxLcL28tJrdfpTD6Uvn4KahrWZLcE7DRJtFjPUvhs2uy62Cu72ngumyLDdeU86aGULv7DYaxL282Esi3guH25dv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o6ESKqcA8nDhPxcCATqU4gBYWrgo5MvnJhSzYwZ5CYe9hDeBfomLHxastxjF5B75VYStXRK1i9HBxevzvkP1THX",
  "key1": "656NS6HFSphB1y598wKpGvv7SXwj2ddzGtUv6f8SZ7G7sUZxz1apUKzZTrDFU1W1BJyDFbJYNUvKXnZ9881mPqxt",
  "key2": "4CZ45VhbUu9YnMpEJTv5NqJRDHUduKLwJNygiPSQXhAmvowz7owAkLpQh9SnLT5S9AUWTcLxfrknEQiZwXtp15eH",
  "key3": "rDMvGZpQEk11wpzVHmWZ6UChrHZtBi2d7toPMnERbqXXzDNhGkub8YAjMbivF1H1Pke2vAD9Yytr9EVt1wKHpkd",
  "key4": "aXiaTbHRKbBDtMS5NoTkgKJeDXRuUxejwbRqsfeUUWH5Sga7dM2LswCMjjEVRjYanXkgDjx6eDM9P5Nz5wo3xDT",
  "key5": "aJzuJfJERHcxRTW6rm5V3HTXQM4Jd2uMwj74WEBw8Bm6Ezi5ogqXQMebdfsdBoPFfYvX9VJzSrR5YhaUoLnYEjU",
  "key6": "27mLkZnNLHtMXfHFVE6HVGXuVB9dRPBpmcTWFJpwMNFMH1jHixBTp1pX7FDM5enrVRmbewARwLp2UMjJPeqHm6Ns",
  "key7": "FiqfTc3SHLVghi4B9Qs5T965uWqLkhJT8BMM8T2i6DkzpvPBGjucRYcNVQTXkyehek7HPjBZZuisoHsDsiiq8wq",
  "key8": "23kKY6XFCY4uWsy1bQtHef2X2EXPj7RTUUBLubrbhWm6uZZcEqMDH4vmXQfeEqB63gTW9TwpJDTjbpKhGWby1iVC",
  "key9": "2o3Eco5VbNZeCJdKdLSCk9xo11K7Q6TSvtsRSgkEDhyeojJaPzzNGWTVpDHuk5mjYB6bqjX5VmLD5CpPDQmcB6HF",
  "key10": "5LfC7TWm934jpBctpwQYL8N8ZSoKxeYYjsWh1SPgvPDcn36GLg9mLNmoG75fw4YwMQfmeV4MfKbdymgmT5e2F5Rz",
  "key11": "4s8Qzg4ovDusNjmuFhsQ7KFapqz78hQ7pjtCJGVmhVZu4WDNU3TEFa2dvw9UKygT3AcbyZA9awaaDoPyHByzvygm",
  "key12": "3c7Eybzd5hGXfnio6EYH1R9zJuAQNdxnF8ghqHyDA8xNuAbNUSMFDGxzQkJezhyn6oBYBd8eAvuH94fXKkPjJcka",
  "key13": "4p349U1vsG7q8AypafzzNoJGkpFaVGz5GpQYWzJ6dVTw663FMfCJBmUYQromEDthCdwbb7JNDrhDeMvYiQJagFQe",
  "key14": "2cRAvgsakb4WRZNoT23fukpg9RwYekVbSDSJg3DAHNaNMijrqg6xoFvgArdHL6hsTCBbdct1ASb8QCaj4zXF53rN",
  "key15": "2K1CmugNLm8e4zdasxcgizBRZmJDYdKb31k1aL3R8K3eVBhY35HmGG3CpTxkwVaajcNWkGVFa5Y8NAgbMEc5D36m",
  "key16": "57pbmtZmbQAqTRVYvVHvCKCTv9b5oz3twrhe6bNpzD4PNknhLrCz2QGmmBUnMFcYWAETMm7n2qdoCK9XU8sjQUvM",
  "key17": "ipsSPhdhpkToWsLAxQctoRzZRBFqi6W5uQUyxePHMtM191aFuVuzeLKp8y1gX8ZupPSVKqQ9azmbFdFm4vjHEy9",
  "key18": "5YQfoV1XuegqgSzRh27CqhtP3VGohd4poB2XG5jPw8VCUgJApzvL51Kk9NPuY5FqhjmoEWkWdmYU6TGAvzLVGHwx",
  "key19": "2q6SDVTcA9p3CUvvvNCxjKSLcmCDZ2muZgx9qeoYJ9aVYSy3BYPLhMT53QqWtKs9sz47fyTS2TQYM5Y2EMS8DCVJ",
  "key20": "esfEjo31FEN6ghdQhY6VnKJP3BJcDLJUcahZzin31n4WWYNuZKSxpzDmPN5FFn3ngo9UezmzDimy5KdirQ1GCnt",
  "key21": "53VzPDyWj1n1JJKD4FKXpRqd6jAyyDqaGj54HCTw4NsGDwZ2SdRMawc1pJwxrUMeGK7EtW9mc8pThPhwkMDx1gYH",
  "key22": "3zV1Cd8maad8mGtEF2LBH4guB7UTZJDrjJfq1EGi1arQaJCSaUyHp5z6aTY9ZfxUzBoyknBvb41FFjMeDjXqYCsX",
  "key23": "HZxrGSXwzuGcKKyu84KxcxddhmA1vQgzvKQUbLYZt7j4aXDgUCYBnYYuMhFQKkeqtiDE22JZMgYhsK1cRzdZBkb",
  "key24": "5xXRozNYtXc9rGJ82a5v9CpHrWhRxmJhABWkQGNHicP2wRZzczQUBUMqefUADQ3s4ngyQGbp2GGhg82CQTfXwqHd",
  "key25": "3MQMYemJWP1vf3WUtmgdoPqUAh4w8hvM4v9vp4Fp84M83s3H5Am5h4tjYwUj2x173P66RqJgPiQ7MnsQRGdJqgqL",
  "key26": "42Ln4VxZS59QEb1usQEbRZdykFMrAmc4QiNtH3furuJ58F9Z6vfudqgk3qMHA6FiWKnfTCnyJbP56EuKnVP61WCF",
  "key27": "3FV8BUnYB55id7ZMzCUSPZTwNnpNjxdjKGTunJvkoezQQwutcMY3cBfxEnH9F8eXQX31cKf6k4aZTdnPKnQrGhCL",
  "key28": "5JVjGhj58yjdrXmwnmT1CT9AWbF16J3AW48uhYs3m8RwJV3EjjnuuikLLoqwR2E7LKQhun5Z9Ey4kbhMYeYYt3XW",
  "key29": "3tzjqnSQgpFhki9zJgWyox5vrtvMsj8KYFeiexgeCfPyVizrD97oNabpVBtMHDHhFMQE4aXiHd9q8zWXNf3m35Tq",
  "key30": "WTvyFqT7u6GyEKrfn7MV2w8ecV1JhXbw7Aev4oZJb8w8yFNgTt18oaY8oKhyHoETv55LkPbp4zZ99QQCkUo2UZm",
  "key31": "4DRE1DHYtQQjDTxaeBfYqPpCwQEuBPmGA5yjcTc6hLucqG4pkY8TkSfbqtbCFCnyVSudNUsK1M3kGvycZpXNUdCn",
  "key32": "4ZtEPTKLuerpGBZmgMfzo88gJQEUt2eeQLHvhXHTV98RWxLNRT2P8fHYZbBNSg1Lkhxryr9MyXHwQfBsShxtnchG",
  "key33": "3eewezvxMquKotVAJmK8fLPzxQcF81Z8Vfk7q2pHY1BS8AyKUgfjmHAbkFUHiTK9QxD2F8azwya3LQ2Qqdview8P",
  "key34": "5b6F3doEFCkNaH4QWbvEXBxFeBkek61nKvwtMbXP1KftyMJ6JfUyjAXNg5StkpNfeUhJPr3mNgA85o2CrNmwax6k",
  "key35": "5BM5HfAY7BRrkUskaCMi1EXnDmbYh96Cpzz11YwkhDXGrptpnJfg7FQrPpKDwe3XsVvUM1iXMsEvj5upk3sSDHEM",
  "key36": "38CFvWiSxnnB8Q2t2wt9jAfVHEcGNEW6YuY4CybfBaecHgshru3hjrzjJuyJFesLLpbvaq9H1Z8QgfEGN7F8Tump",
  "key37": "VW4QHLYfmDjnoFW4VhjQREJqPxfGEYooCMgHeYL6qx9bPktfx9CemW8oWeoMLDJb8QQosnXhXLY2DiCmPwLiTjK"
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

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
    "4Z4ujkggbMFYXQUqaxJimy8rviQAVT1DJ9nkB99SBWvSBwTkzqGRwRmeXacpkMZU3zHCgUkB1MpvxjqDPCi52W7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xTQszsYDzPDqGodqPFFUA2a4dAocQ6vytRHNpvAJyKpQvWhzbAPLEp3Cdd4nvdBkppUURnqUSCNJJQ4kW32UekM",
  "key1": "53huK47VZdddxXqZTARpR6evZJ5iqRFg6HR8ZhbgVTKFWDPrASoLBYCYetUsgyoWQxpQaQR4kpMX8TX4NELeCpiy",
  "key2": "sHKhbahsSunnT9kV55oWnFYKMUiupFYCfydUgDc7ZW7eW4aXrY11AY7qaGqXm525D5hJDwbjPw6KzRzttrGzzuf",
  "key3": "7YbysN9ySsx3LeqBjjm7rRmb8gq1ouhycpNM8Ya2hLodeGNyWJnw9cAu3FbtoVFrmwVexX9EGUF5uYhJMVALSUL",
  "key4": "3GkB8rNeRJAuWnfirqTRGErBDuaC2GPUDMzWYwDhZtwkkZXYR4SvE1J1y75Q572gixKDV5v7f3huXoeDhzhZUcNX",
  "key5": "4hAJ6n9PiEQqhYTMRHGJBAAgjMPyyzFk3UzyF8Uz3uTzdFzNbRibqMfwXYoWDqihoMD1Nn4m5ibpFnKNg52TJaVP",
  "key6": "219MzxQCBHDsfW1HTcEnM3XZ5oSm3ZPFsxAh4uWsCHLUN4RrcpMCyodo1ndQy3ZNdMTkXMKPYMPqrkEGCZPhBNa2",
  "key7": "2JhYgqwSeShgdUjjyTNDaB6budrwP9empG4ZypN1D4ABN7ptYPRubJcxyLuqF8UW8aCaJeWZm4QUMyNjBQWMZk7L",
  "key8": "2qdGSE7GBkdQfVK2UfrKGt4xWXmsQVKKhjv1j8ymtRSbvipqAebqQjmb31LXEMFhXdHgEzsFWbcrMYDaUbRnvGDG",
  "key9": "2UN1NTXGN7gSb38ungyZDmA6mkMVedZNsCy632WhZMRwJBQvgRaQXa6onP74ioHeiCqpXyjuFMwWLeTVHfihgDNi",
  "key10": "2UDQ3nkKC26foquJ6C4UYxKG3shkCDSKXtTqt3Ztx4MRPYmvASo3WxmSDZVdx32Bq4N3ufFJG6JsV8MXUJ6GnPW4",
  "key11": "374nsUxPRak7qKvuoUzm7LVWa89tFTybWpE24HMqdMLYv7oaRQnRRg15kMtHN5dftQta9btVVwdNzhCRnx1BpJHo",
  "key12": "3JqQK9cgqqtaXivXcqwZDPvoktRui771SFuuL8xRJFbrkKsZPGwaumG3yi378pXHV1jwacRmzxV787niLaBsAWVh",
  "key13": "3Vfxzo7KGkbwJvHcZ7TxYtPs7uu3NnUfv7VwD5Mb8goeZdZicPjdLo2Bpd2PjsP1aQB1BUa2bYrDDfMYRSudHiDi",
  "key14": "3inXEz6dND7P9qoWHCoj9MR175VsGAL2vyUwPZBuzd81FitFDLMxTQ3c53WeJFuwRQtpyfvGW1JRfnUP1wBNex5p",
  "key15": "63h4e65bKvfs3igVo6beTwy6bJjWFDQ98wtVBZ1sCSJebD6iSNwau4pwLWjTWzZFC6P6t1aomZGNbwx4T4suAhLL",
  "key16": "5b4RpzAn11ZpF6a8imJw5jU7fZPkickknZCiw4BVbTpuLP7zS9zBcE9paWUwLx55D3z6cQA9aiC7QY57Nz8a7RVk",
  "key17": "2JKkahK1fFnVL4CNVpttaWCPnXhXBfN6B8GpKfvFBtYvocHvXR8WYir6WbSXDxBRaqAqkr3Jb4vMvPD3JTfkYACy",
  "key18": "4aTwzcg54y1DKddKahBhMmYvy1fxFpSWg7MFrdqzfdCnKN2TThLXUDTeT61PHLRxYcacGkrEZh49U2atcmgbD7d4",
  "key19": "3gxJ3DLhYG11aHSBmNpuRUpiBiKeAxrkwdKbCfp5Uy1kzWuTpDxG4YWVprFrAdrwfzLP82jYsVt9pEeYiQDLNgrT",
  "key20": "3ds1jMT1whxpZBGThY8eSHqyMBdZiMadHuTfW7mfnbXbDjm7xavUS4q13LRfcXVdRHdm6ftwhSdgLv5Fd6zEW6bF",
  "key21": "2o9w3ADTHpw36QYyVj2h2hYY8roLi7aXtU5gtEdb2aqgKfNj86DvqDFjDne5oytU63e2uzP4kafC1G65a12FBb3N",
  "key22": "2NoQkaLSEbjz4MZM4X76cvPKTR2GT3fRJ554sGBVyqqSGsjDeZesn2oJzx6UbSeC1g6hbrMCDV1h99y3UxLby15A",
  "key23": "4bQS41bpLJC9an82tZYtG2thjfFdTmdwgpicvsEf8KgzvdPxYYpeXP4PYcz6X7nxDsEQ3SvA8qZEaubnSXuaUNnU",
  "key24": "2C61j5XtpEdEcNq9hReNhDEXkPmqfWgRrcmUWWXepHna5J54BhTU2jdg6L3fpwaQvUPuZYjFwVWftdWmHiDLCryV",
  "key25": "64WHqa5TWFehv7NzK4FFpFWSLdokiLne85azgunoqFh9UYNmrmza3eQmvKZGWCXi84TrH5wko3eT6CCguc9ap5k6",
  "key26": "4jAgi3vxefPXGAtxrQnoteUVsaCs4wrx7waySoCeRLH7bELDgi2ZxVnGegLsvoSGVZ3c17tZ6XwGGuCiDUJAqE1L",
  "key27": "YEDkTudmpZdJZavCCxS8UA89j1et3uY7i6gPijr5uRtB6hSjZo2X5RYYi1XBLaKzvsbALvHXznEfgjHzukuxcQr",
  "key28": "dpWVbn9NC55jfhQwXJEhb9Qm64nM6U8Wxr8uWbVPdXNJWdq7o2FPfepqyXWoVRm69hNvjnWCv6NzsYqpRAjFp5E",
  "key29": "57HfLeLDvXcXQPEo59tKYGZSq4Qp4Ak1SFxvdAcr7iF4rpJWDF7aFnGFqfMLHn443mm9SKy6JDDii2oR8oVpHrGH",
  "key30": "3ZiYfQiapcRuZiLq9c3NmeLeqJdHZv4fUbP7APkJ7hvZPB8iYGKByTwW2XViqyYAXwKDyX63U7qmvxC4dddK6fvz",
  "key31": "3KpsaqfRiJCcPNShfRQVjwHKVpQGjoGeinYmVHz5dQKkzeJ6zhPpQh6jnMzGDpLxB9qmKhSD2H9FdZNnLyVW2QEu",
  "key32": "29XDvZSwAmn1phX5v8gRMSSzFAuMBgtnKJMTmJxHJ4k6Bko2C6a5CbbiJzxuSx59C8Emymsspeq5nW8n69zj5nvK",
  "key33": "3SmxpMtb6YJDQvP7duW7gKaSMxds8bXEqQehpp5TARUnnheesHufUnbbbgCUCCswabquy7cKc26N8YpnF4HFcWCB",
  "key34": "3sDfms9yHmD8cJCCo5yaF2ePxD7HCD9SD6CsJzSpH2dYGrBZn7qwMbPXmVN7pbJ8iyxp9VMSaZZJT8eTzNmQdhvY",
  "key35": "2uq8JuYxgpsHmtwEYJzq7eURZUW5pH3CVe4wBVKPDJBEZCpkYK3AaDbzjzoHfNCzzTEBygQCLiv9aUyP5BYbgg2",
  "key36": "P65PR6CThUimn2bXLUgxSbQZikSiAttQnMbX22Bb56jEcsGjgjpy2xxPkiNu8ZSyRqmGCe4e83t559VeW3P3Hfu",
  "key37": "4WVCVekGMpZGyqjJd5gokHKdjwdsxUKvZWpjwzSe7vE5UVdsjM6Qo5mCh3saLVBnikHBKtEmYKVjV22mXmFjPNd7",
  "key38": "3dZvfJ9E4YaoFbUjTWauxrPkb474RdevjAMMaeKCpgr3aoFNkq5bG7MypzGwqecMQo6sJnFYwEHpaGP4F2FqsE2T",
  "key39": "eghHAYqkHUAfEoMwN8h5dy9jrPTBcWsBhR9KFoTnE8EftU1LssCxJ1fHGYJempB1GniJkDaUg6mX2WWiZ8Qjo5d"
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

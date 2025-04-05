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
    "4xzPj2ZTS35hAuWxushG6hDYqqJ2X4zo6DR3qRNrppf6GSeDyF1jBbKKDoySpzWxE9WcpFYR4RhtvLo9TwLw4xDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8kYoFLoVrCczwcFQ5PAc1hdunZEPqe1yg7F1LvcXh6BBCcFdtNUYGMyYxZcYbm2EZPuFuPPBxLm2opBx7xHVo7",
  "key1": "2JXkA61oLzDGSjs1rShRwHqtpjjEmdLH8kVrdMvTGZQHxj29AjjnTgxNmGUHCegTU2Y8J5jvnTgTQf5zijMSWnfn",
  "key2": "5wQ9gB8LLANhvGt2X4meEPVJ1rYMFjLrRjaySvsXGZE2STR7yC7h2whdUTRsZJNgEjhYtgQY1da2LL1jGNZVETv",
  "key3": "61FN1MWKWXGuKzipoep9MdjEa2PaChGoJqGV4PrsyQ8VSVbdu1gMq7Nc77S6xGjAGNBoRj7N524cd79Hz1xTTnuC",
  "key4": "mXj1wqd3aH96fdaxdtPhTe1WPXFm2TpiXpPJ8auJQmnhvUZa4KcNTWJYuPHj8Xrs5tTHg8TydsJ9mWWyqVRqNek",
  "key5": "5EJNHgypA5vA6CGKj1kstrHGwUssLNGFikCL1cRYAjXwDHP2m4AcUnwVoXxBb2pgaUtq37NqcU48zUL6fXQZoVF9",
  "key6": "2jKkDpWsy9pavMTcyk7k3Uck1Xc9cBrBDsLJNfDrySkA5NQjQCvLGXhhkFdyqK7piUV5oKN2Rrff4Ck8tcfFc4AP",
  "key7": "5KaUpTYkjurRJzXr1qGmi9r3tJyeZUp7NXpargv3b6rMRfFxCfL4bKj2tsiYamzCHLn9wx5aASmTDQ658xNGuRv6",
  "key8": "2HmqujZVFzfhj1cXjPciFkcwF1oy9g6Ctv35Pjuiayy7y3TH1i22msWBMM1UWiMTeYDHzrQB8Ptq2kdiY6B2eZ22",
  "key9": "32bYvcdC92ySrcdmzcaS2Jc9P2Gie9Ec5xAy7KNYDaaLVTrRGtz5xT19TSKDAMUfFvH8sw1ZR49eY4z5cea7JBWg",
  "key10": "3F32NpbGz6Hhjp2wAw8AKxWWeeghFFbknt1J1DkcKgQex6SGjiRf9JZXPNEgr6xPSQMp4iW6TXLmRfMAsnizc9f6",
  "key11": "5EsycJZEfCs1iPWBG5vdQcuG8sYYYpVmE3HgRg2shpz2VBjQV6CJstW1ymuermUzGWkzTYTCqBfnQaZFFDU1Mj7q",
  "key12": "3ve3agS4PP97uvDgqtEMqUvEkMPapnA35X6uafSdzd1HoUN5HJ4xhnQkWz7MDVmS9mJdPhtoUi3x9cBVcN4rbanR",
  "key13": "4fACeY17diu8dUQkiG2vPVevWWADQhVeDQqUEnusBgb1PgFGHDSpBJJVD9DtQBRBiaqcsRVSpyLXaXT6WCMdLrzw",
  "key14": "3Mh9xLLDpNKuRFiQ3PuLjA4wi8o7MUFvsDSh2xkS8ko8TUAuzix3Jv7XXxkVGavtMR9kgjME7vF6zJUDz2Wo4KeB",
  "key15": "38FscWTmFGxGZYNDuiQnpcVX12HzPZA8h3SjeTVPrEiuqBgwuzu8XsUNbN8UhWYGLth8WV8ymJ73qJdeHGxPhXus",
  "key16": "4nieNwVceCwhqNBjQHRLKEcQgcLgVwEfqnezi6G19idig8qKHMPHNYadej9Ec7CL3CEVwaiGgkpLDTLbgvtL6zjL",
  "key17": "3kp8gdvWewF5yqF6vxrSVUCRVtw4WgnpPuPr1oxCY1vcZsH3jUm5JCqcLX6MBKwfLPxkiGVw3ibbSXpjguwSDF6b",
  "key18": "fdF3eZ8C86Dg3XpkicBGPbehWmB5aZy57WNWEMKCsRDK5FnCny7xwpdHbymEcHnRYHjHXs5Th3jn5ZCgx2kAZJV",
  "key19": "bzJgbL3JHVcYwKGUZyfr3r1KYoouJJz9Fc6g68d8jd6oGsaPeDhxzdczRfergSu8QW2K6uK44DKL9yzYD4i2eLy",
  "key20": "3xiBAwSEUgooYxFUSnCL13uDY25FZHrf495cxjzm9wUyshSy8sbgaQzAfAD8BfK7Js2B5Wa7UpsC1b4nZu4mp8EM",
  "key21": "2fPDZd3qjFXP3tnivYha6RATpPU4AM2KUBHs6ACioEsqgbL8Kz6HKk6RqudxyruaDFAhLbTsMhuvEgb8VeWA6QXi",
  "key22": "3ACMo7ExZFbDwiRmoSGnfpsmSRik7JnQznXYUwYud5rmpLZgyH7v3ErGeJFZcfXxNp6RRS7Xk5XZnRHEgCdfV6Lp",
  "key23": "4d2mNej6UkMo7x1P2tQ5yVYUDnn2hodiYNnDZ4XuLBWmhZXKahJxNxscAnCLE1sBiqTPEWKQx7dix3FgDSCBtioN",
  "key24": "2mdoVeo8xYTjCvQTivuRCWgpTvyRxLqSUhTNQioFpWpT2jGN9AQTLVqCmkvjQsb8ZCuQEN1UKVAo8W3hEZApFaXZ",
  "key25": "4sQVDYyopGXkvubqSkwkhyjRTX8VQnBj27YZnFPJ5dH6BP7zVdAhdKy2MXZiiND6aAi2kdVPhZyzhPvtvSVR48Nr",
  "key26": "2DQ1nnvh7fLLFKjuEZGv5firYsiUhuqAG76UZrAnsjYZivaPFRfb1FB4KQenyN7DuhPnUhzbTsZP28vn12tGGTtn",
  "key27": "2zDw1PrJGoURtr5XziiKPeQWCaHsjqvYMJmjSQhmRBsK2ahyvevYWP7345QokjGWL5FdGweFfgkChtEd6ZPxvXNy",
  "key28": "3HWzDUXtwQ9TWMiLL1bgN9EzoBRDUp2MDnoRXcHTapQcHCjZPAwVPqwQyEy8cTdHDBQoxc9mdrc5ZHFFwjeeDJ6e",
  "key29": "5myvU4i1cnzCrkLVgEp79vx8JFCWbfiCLCpcgNxd826qubNVqN87FqkShAKaMjUFqkgSxszju77CaKQd4PTUyDsV",
  "key30": "34rZA6kaEQfv1UUiyY5D1JeTbh9LZ4kBZiiqvGbqZZvN1erywrdfm7EgUuyX3WtAAhHDCxJJrUG8HtzMGydNCupy",
  "key31": "518PTu3V3hx7jAbLYkrkCveCq2MmNjr7ZiVFcLvs6t2mMtXnoeQbwqX45VDfpXX2Xwhxw6tGHZgztDwPNNRgZnjU",
  "key32": "3Cp5E48C8D2aqxeQuAMcTbY5iFeCQYkMw8auezZrTHisQLaVMa8KA6r7FeixhxePM9uUSqzUy7p5AnEJhmY29jCr",
  "key33": "PgP36PyS6hFjtF68F1c2xRk81RubaXbZcUuM7Zr1HfrAcpSVkRDVgvYp4oGHvrPfKXSgJDLWbdLFSBxYKpbpMMm",
  "key34": "2XeWjkXPRPd2Z5YpGZxnsr4AXUSm5UnRy9dkVpsrbJShTbevCDzUuSa36wZafCh8gkJTzDMNNfhChYFh9LSwo4cm",
  "key35": "378M7ooCMvgu2AEybEAUutkuzVqjzfqd8RTNbi4T7cSFdzAZ2syGUuQnRfFCqbo9HidtteRCVYcRPzFtmqYU1zuW",
  "key36": "3fhE2Pn4pqZ8YARsrRdFGB4fsXSNQop1izBfveU1jsnDvoQnVwZHQNfvcrVkyEsMYecbhgMrygfaHxoo8RLsZXVK",
  "key37": "4t55Cb5mWikpnu9a3u6Npr1knSLo3Ra23KAx2VSU7tQRv9LnV113HYj9XjbavPD7iGhe4ZAFQdCmsisydKWGoPiM",
  "key38": "Um8NqNrct8yAqir1SYwS1L6TN4Yqc64gdEjTUHt4qwy44knkNzLabWbsfdVWybuXtNiFsVUzFEnRmNjvVWHARFg",
  "key39": "tpkY4WMDkaNWkb1dNHz2PTJUUG5mBc22PsPZ7pErLBc4oZM7RX3che7VPAbFQNXTj7dnoLH6Jqn8SuUHgeZGDAL",
  "key40": "23FtY8Seq7Zg5uUVwLf7MuPe8oEExAF6QeuLPRQ4vQyCP3zCcNYbJnwv6hcE4J7mc3GSJrKDo71PQQDGyyxE9Q9d",
  "key41": "4NTf3ULdL2MPhZSEeEfhPbro85PuGcPVAhmbvBP97K8vpyPzgmu4rVBMME3rKfbn19FBPD4zsduzuyLztb15dS1Z",
  "key42": "B8L9bvAu4ns8v5ZHu7gHezLp469s1vEokHNDywDEfPUTAuhpCPrh7gHi7h3gPMXLmNP5YEsobXdJ4SzYsh2oXwM"
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

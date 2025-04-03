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
    "2XLtztuGUodxDx6fk5s4djsMKDTx6ysSbnvwXZs1nXFJeyjqs7EkUJhhiMEN4cUqr9jE8FYfqizxPgp8MzBgUQNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41JTAC9nxgzWcXvW85QT9HvgQZbwnwNPfKxnspdJqtqPegf5rzSBQXm3L4xwNVBd8HZrRtbfe87ChoKp1AsMs5va",
  "key1": "cnfdujGdQjk97m57rKEyTktBZ9N31huEaGNvKgKnDuD3ZQvns3HAbNsAgp7VsGnxbD72L4CY47xGsA8pfwKrwoX",
  "key2": "v3nc3cX2d8oxaHUqSpetYwTgmLVxFBbnAzcfAHjvKzeavEFb68S2JMXAgyDCiNtBf7XeFVoMBFJhuLM928ejLG4",
  "key3": "2WFez3AjAP8wUYzHCps6foc47qS4rbdFytN1wMCkyzeAoDwmwZmtFZvKbkxWkJh8UzaUVJXnfayNqMLfzPEJFzip",
  "key4": "Kde35nbGsjjkXJ27Xe74SEp2A81YWX5AVfFkBShpm3UNHFzGXpUWefQe4KDGi9ATiw6c2AkkKvuh7qP3oGxq1j8",
  "key5": "2dxYAFAqnkyFJnNM4JCvjZCksxQFH92SQ8UtPHy43eQdZjvQjFsuNgqdVLiL2GUqE19Deci3keqt4CdW7SWBgMii",
  "key6": "3v7Zk3GmkgRFG5t2rnJFxZfbfGzjMRMYZZxPc7J5FGFogxbvRgZqVXMLyUTinso9XSanjVX4EK1gWnnQt6wg3DGA",
  "key7": "3r9E2y7b5P8MiZAJJybTcmXt1oWNrcWdpz7dFCpusmacqeME68tXQC84bW8ixCuyBNtDxCpAQyoV2FgK2eCJp4qf",
  "key8": "34Mg5nduRuaNArb7drcyZijD6PqxyaCxLNtKu1WofBD2C5YZi82R1WPVWhpb3n2tidrRMB86nuStBZUQpGCtBjuB",
  "key9": "NRDJN12i4n63S8oREtAjtxaPk87E1eSh6ugK7gVaayL2aif9WSJ1vVcTxGagxEVkgMTBKvg3V6oVMVQpdZg8mgz",
  "key10": "33PNPjRnwKyjghABe9p8vM5A2RtXRz2MHrPkNXs9y4i92vx2STAWdHRNTLS8fQGHKnsnpsf3tgmU82YiJ6XxswdK",
  "key11": "3AYmkFs5KDcrp9KHdoq2LGwjCyLyhmv6gv2cxoGCkebnYrzuzEd7hNvyxnUVMT2SwpMicjLKoUwExQxwGoDuiaE1",
  "key12": "3odyW6UJLWx3hgoEFBBtEBzJsgkGdmy8FjYTeFtGauyFAD6yw9wWBzkNbtcMNe2wM1ruCMA5oPkuKqJTBWMUKYDQ",
  "key13": "65PtmH25qWrYhesQejmrHUrhf4qRv43xQQwSiJXgW4G8jSLWHhPfB3aSiKY1Jfca8M3yTBgKmbVEp8TfhZvJA4yQ",
  "key14": "2ScfYnQv5q6nyw1CEX9GCh6sBo7RYUpkwtNCuirrVJHDVpArrqkWxHUG2xgiev6T75qjTYmeymDASA9qocExLgzK",
  "key15": "h3d7t8HE3dh1e4SdNfhkMgVZBoMtZNDMhA9cTjiDqsZtJPJKwqiqZmhJQUzfceup5yAQM2Vs2uqWy89dJeTSBPN",
  "key16": "3LPSMr8HBSv6Sse9iBiGkaufQjEDWPSruFnyHVUoH94B7kFYS2dbrSxwgptdrCBEC5Wf2sEVKikzNh9KBmgFNiNA",
  "key17": "4tXLMpkfFKq5u6apERm8KppC2FUg1zehNCL9R6DBLL5qMRpYPca3FKJSiDLnjPKE48kVFMSPfWnR7Ean4SsMkEBi",
  "key18": "hnKcZ9pje1cuNyKbxbHqUCGUWZuZ6sQDdQ1Eph8kmskEGAX4yzk8R3Z1nSjbczFduCFwbTBruPZcYditYhT3nvG",
  "key19": "2apChYMu38PVw6RugJzUamJWEdkZHVsh3QRMXeKgWFCpGUsQGXABPLhECcCesM4eY5AEi1QtSE9dKw2kUybWvd6w",
  "key20": "4ssiN7YbzxtYcXcuTTj3h364ahM1gD4ZAhsVxjou3jgRCNXDVhZH6HFrP5DJbu6NXeA82BA9bbpvWdsKonFzXr2v",
  "key21": "4tHrzUggFFy6ivU2dKEzEypnHb73RDPHiGgdyGi2TadzgBykidKyKXUaCFi71okGP7bs1CWcc6hcpiJeKjfedyTL",
  "key22": "49p51ZsMEBM6eQnpeLvTfSN6HqEeNXdK9vbv5T2poXxo7Pt1Sk1G5ZJ2mTehCrJ1AqgDuam9Quf3kzvoR15H8gLS",
  "key23": "3TeKvZ2oXTH4efmZ1WPqTVU3SmGGbivzHFfWXTXg64sV3RNN8CzzeL34kRXKHKcnjWyKjYZGKqtvqF5DEJRJwaxd",
  "key24": "tNr6TsQie7Q4dZpQsQWyy242ku4RfTSjxMo4x7tFvr5zsS4a1jwrCnGZjxA5gsLuzzgxpu4NuoLTYXwRZn6JPaw",
  "key25": "bc1YRxXAEzfeaTCYLSuK5shKJH5Ajzagd9hMbTQ5yxAhfuRvHxtr7CkJCnebAgjp78wyREdStb1QCYHe6nbwqv6",
  "key26": "4y9w2GuhKkUnT2MyXPMp851ca4LfJmwYtBHzyFWP1u2FcaxxeujUp5heiWhWuvwKXkypA4cJ7kwLgoVdJdZzC6Uh",
  "key27": "3kjYcrzMKWXheW3zMTQgKQUb5uArNdwreeVkq6H9yn2bENy8RdHXQuAnEF6pWSkieSQwazLC6Lm77fW6kz89wL7u",
  "key28": "5LayKcxb5q5PfioyY8xzKjP5XyH6HmR7rrejMd9YEskk3PcnzvPU3NHnFkDhWRGvaRRMMajsoqc72yzFJrJ7cAy5",
  "key29": "5Hs54ePkF5ABBKJmHdvrqoXD5AfmFJHpj7AjmSwfwVREZBGCzCct6DCnKsrsuWpx1G4CN6LqWpyskDkTkPAgWeBB",
  "key30": "5kfyUAxH76wCX1RYER5SrDTmqBDbBtrB7hgGjgF9RY5g526s6U3pCLvE6jVVJJ4dDmQNv7KcuFmWDfnavrQ1hHq9"
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

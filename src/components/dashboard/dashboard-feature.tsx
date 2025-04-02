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
    "2yrdALeQQ4URqjSMpZWsYo7u46wVt51ifipsPPeqfLtpC6WQ2Y2sLu7exzvNFDDSZWKARfYa4q5yrxhAjm9EFD8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aSRLzcUMTg2siLYojVhKPaFw1Z1Rs89GeFLikk6wGxGdsWcS5fXu1nSa8EfYMzSZM2xPkpHDo3uPkteChNaqmfd",
  "key1": "3k1EKvRx4vNGwvgzRDb1yZN4vETuXMdrF1bbENqubRigqPv86H5PZL6ZiEr3KkdHF6NxTwZem2Q7sFG8RjUNPsXP",
  "key2": "5HY4fLE9nwxCSBqTDF289pAw7kT2ED9Y2PBMq8uyNi7ysGuGcbzMptCZmMybdzqxprH8upS64nV44SUNirTkfMCK",
  "key3": "5rxXXPY42MazYTZK3oyAsEv3ta1kLQ2HQiFXfDEKj3Ys5o1PZFpmVcUijq4sK5om2LCygExZYnzzEJWrPKe4nA6p",
  "key4": "2sKfXByvQ6ghWNfNaVuU4aDLpCSAGc5KPwYgmroZTFVUdJn7KiGT5oxzYwHz27ToJcL2LXWLFWaxGR539GfwTw4s",
  "key5": "KcwW4qj4PYN1TakDfowGMSEdL2MTwmoxiFbyFVYTU1N1AuF3tB447SZ6rn5MLSWt5vkCXATwjo9zzL5b46rGHQK",
  "key6": "3W6b8gTVs9A2yPuhJvXQqLqwaK9K8zst3GKXsBAbVcKinbku1CEqxNwcpsWG4Kq5uYQXhb7X4zhVUyjCsZkVXyBh",
  "key7": "23qV1wKkd6bMbArJe6LHZJxuqbh3KfokF657jsfMS8QJzqUMz5Nn3hiVDxZWkbGJV7f9drA8ZdS92DVWzW5A9pCE",
  "key8": "4K1D6bjp2ShAwUyY535DEb2EdWud7sXpNNGgAtdomz3RhMjzZph9KcBmRduApyUKXH9RMbdJnryKFBQtaA7Hma4p",
  "key9": "2dNudHWhBCN5uwjvApeZC2CofN68QLwqvudZ3vRaCABBToRefRwuydEjTGCz47FdGgptpyV3iarbpgFbwDzQbTpE",
  "key10": "3kMkRm9xfc7qieXVNv3t3PXoaDXu4dcazGdnBquLzoGwpDzZdqEpUCsrNsDgXJPv386y5Fz33h5PQA6TkPAxJbUY",
  "key11": "5gzFFhdoeE1RcAjjXDPxhowkfePfDGdLdxBLGKNVDRYNxXycjgaKnWwPbb5ihFa9FGnmdmqtQm11x1SjNjQiBseA",
  "key12": "2hT2X7R5j2mFB5rPeeBEwibA4YhjBn2Y2FVJZuHQM68meNeodsRoMW1Vu3zkppM815TbCqQqYPxZMwgFY8psDZFG",
  "key13": "G2xruThxH2KaxRDzH1VgqVbXSpjVMtiKW5H5ZP81R9WJ9FrVZ4uBV1ECsuuWQFBgDJkxfTA1JLQoWa6V8WNwzPA",
  "key14": "4iVxCLX4KQ8Yt83zFnUFCDQjL555sTPgwP7SCJotfNPZBKNxq81JJCBUwttakaSUzSjxVwKGJoaowDqEKwfQLe4t",
  "key15": "53sVxXgGeS3nwqQrA1g4h7D6LbNDQLsgRF1wknYBDSjyHfRNZigrPjACbADj6ckLzLd75tZDQYSRnkNZFYVUctFq",
  "key16": "2ZF84vzmKWfmyfU2HtA98MPtuSGmhBPNrkAytL786UXmGCCD22HPD1tYV8GBo3DNeamJBfhpqCkXKLihNPD4Xva2",
  "key17": "66hZJemFLhXms4Tq2xZQhdLYw7SXfZkiGNpsQyMiKq6ADtxQbcLse6mh5D5u5oHPGx3DQ7kDxmho49jPbgPas6EN",
  "key18": "3Gy4kpdBzC44x92zjdaYWGc78NUz4ZvXwKzJoT6jZqyu8UDi6TSygHPnM4qxUXyjkcXwci8c7Sx25GgEUnzepUxh",
  "key19": "3GmxgQ2wBEKccBqDydtAh9Yg5bxGHC2U5TznFxZAcVw6dTRw94AeTF1qjSVRThqwDddUofX6femjkNHouhNSzfPw",
  "key20": "21dDd4fKKw3wWEpYZggByEQppcb6xuzYgYUAASHb2VeiVYXd2s2V9iPbR2PHSzn9u83CfBGyK42BWhE989ZwC8Z2",
  "key21": "5Zb3uJxeHg7KExXekfzGJAnTL98w4MZ9miQj2H9keRvX45Z3Wv2gmYRKTqZUtjaSYuhs6YNknShnggtmn5YPZbMP",
  "key22": "3rzod1Fzhdw7B1rSMyvNuzKJAd6BUExCpTY4cPVBexLEY3nvfZizaprHZ5ouCX5MFWTXrzguMGTW4SJA8mWP9nUo",
  "key23": "jrtushfUzNwgNJu7AZnD5dk5aMPxiF9bhkc2EE29aRCgJePg9XwuXm9Zu4zdktd7Kb7Yie1dNmYFv1zMKjAqhPT",
  "key24": "45y6o44WpVPvyv7buGcvepV53dSyXfciFHmR2Xi1YnCicEATP9wzw9LyxvFdvM5hni87c7PagHiVkr3aHSVPChiA",
  "key25": "U42erQC2obMs2E2bm4bdb3NkKkAXApNXSYcRexAnkN3dvRUbgwwhEv6qksgm1o2THosf4c618ffXSKyxRAikDjx",
  "key26": "65zmpdb4wxQBmpP95yHqwAmUt3qLFGnU9mwtdLVaot8auMGrDGV8TT9M8CkFJ2fneGJszjFGeKkUvs8yUduZ8oze",
  "key27": "25siZLTzS7JsaKkYGubQzCjYffSBiEA9hhNTg9bXHuTMXFzurCfHSqY34Ycw14yPpZfi9gmGPv1ZL6h4yfR5hjUB",
  "key28": "2cyhCypgcKmXjLicMNJEYApsihr61fV4x1nVcKtaBPXwZNy3SXr1rhrJLB8c6u7sZcQxmaykXSR8Rsq31efdgXWF",
  "key29": "5Wi42iR6SKWb8fPKTzJuUq8ssirtwTPhqK57bgLb7Upoz5sGiuBNraKmq4eAYSrW8EHvRpaVzYK3QxRFSgdbX9by",
  "key30": "5owcmX24JsPAinps9ajVJ3c7s4aNWKfQtGacruacuSqtUqfZ1ReSP8T91MeBmP4ZNxmaZybWZDFZ1shegCq17VxK",
  "key31": "2SasoFe9mw8nXRwr27rdSKCcwMNTYNsHBbSax9pb6jxrcx39BzZLqakCpmenSUdCpxP49JwLB5s658ueUNtaHdYC",
  "key32": "fjzogjrgYbjeCvjiYNnUXGqZXTNxTf4JU8gUvS6JC9scewJkvx8Ej1k1MduWSVofWvQ1uHFaZ3AWP6nq1YMtusm",
  "key33": "4kgLtvkjvsNy7Ebeae9EgnvhxRf22VSEamha5W27dTsQzomvUKTVmifHnAtFDxjxXUh3XazxM1e8orvHSv4ujXgR",
  "key34": "4R2botShZmjT88doL1LVsFd5S3SN2t1bx3EhH55uDP9sHWA6MZawQ5fJmsbfhV9C9jUEgwWXbtzogsCPjN92LdNR",
  "key35": "3gZtzP3rTXk1MiBrorqCSHrP85NjGZ8JKEwTJMBGCFW2hgE1T3XJvytgjGDakcXeyWZg4MfzWGhbSFEh7KcbG4wF",
  "key36": "LiQxuEUvH9RQsNYiVF9PPSYQ7RLEPMyDkP2zwk5ps1Eqm2dJmqGd9gJ6G7RPBpvpwL6t8wv6w4dPvtkvebxvWPg",
  "key37": "9tmw2hrZBmqLLhbYCkSPzsGWLGJ7XQELaoSww7Ca6ruGPhRX8KTY7ryZd3F1isCeCCBvVTRXGj4sLBGx5iJdxxg"
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

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
    "4cGbnkdMcrqZc4f7m3Lst9CiZLZQT1aN7WrExgwZjhf9itgFFc9TeWjsJB9GFHh5y4tfWLRwsnqQKaimAy3mtFac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mE3YwsbvdfRV2CFE7o1gACgvn4q9eiPNMXHBGJTSvEPepU8kAeD8nyPZYNEVWXy5AdBYu79VciAJwV26hFrGF7d",
  "key1": "4AqgKf4y2gVDK9fZRYnKhmD7r1J3dib1CjJ9PCcWqwVe54gba7dJB9A6WNmgp5ics6p2A7dfFjwSaL5Uw2tnkyWj",
  "key2": "ebehWc5ePe5rNCNz3FCBzUvCvMdNA9qBhZ2LvPvVGaJ63cwhNHhXhwiLUK6FN6hGxSoUTuFSnKcZmisQqQYbYri",
  "key3": "5AynW3k9u9JVai5q1Hi3MkmqxDbMLP2j1P6Tmn4xEqQFRnqJfWxmvfJ7Vi5UV8ZdEBG6TKrQmMGo9z6QWoLMKKCD",
  "key4": "4FL6E7wNXksh6LoyE5VgeKhYcFCMu8g4bJ9zqoKtQ58mk77pLiwgq9XDJuKP3TWVK4hxr6X78WPbUnSGWfse7SHT",
  "key5": "5gEbeGxzYDYtszCpLbBbXVUmCdaEZ57WJ9Cz5MyV54YKKcg9or7EcgcvWgcY6v6dprw374M4bemrNYEWH1bXhnm1",
  "key6": "4f4MLMqvLU681C8Kns2C8WrHi85XiFSqnXiYZh9cVYVru6PVn9Es1xyPPrq7RMXe8KvgktRmLQ42YMdbs7ScM9VV",
  "key7": "2m4VAgDxyjzxszcNE1HC1ZQnhQLD1E6GCszxLjEDEdEu7xzSFDxuee98WrW7j4xdekXrYqu3fFTuKWywuNghtLwv",
  "key8": "Yorz72pNxkkCs8jPFnDQC5x4JFPkYtEMkoYMd7W1LibJaSGQ2EAg8XjFQfK9w1yPqk7dNRGbK5NTb8kQ5NWzR3Q",
  "key9": "5MF7e1nHysqVgQCbKPXRD58eqtgRGcdAXuTDeAGeiGSScq8F27svrdGyizmX32MfP1v8QUj5XnxotuNyvcYVBK27",
  "key10": "5C9Xdu5bmriUwGtuDWPnZG9BFtomMd9rrM847zFAzsuFUUZDy5cgDNbt6SvoYNvnrkp51J5jp7eLn6HPmYfSAzzM",
  "key11": "7qVHEeoUmR57v4DhBeh45yFqJJRzdbhib87xXTjWXSJDiKYsCQqjBG7ZBzqaF7D4PsNXMgsNaY8QzXPdiBxwMvj",
  "key12": "wTPSQQ3VvnaLFgyVMahtAFUg416RQ6QSwFUXPReeeKbXyeo4jJnDDBBRzFAbaZ3K8faCF7NMdBk7LmiExnwhtG6",
  "key13": "PrU4coosUNPRkZVHsb621iU62NJ2yMPtGPBAombUq7EBGoG2Qp3N85QvbQeHHbnaCXu5fWqDGNLVfVgn1hq38ow",
  "key14": "4h6oUZEr7iL9qbFCuWZ3W61CSqBL5sxhRuWUq2kAqVZ7QMtFyArG3aHWNyfUHKHpdYia347uE5QwCwxTNEVg4Wu6",
  "key15": "67dfA8Ua6Rovh2enBJAx4ShCmqQd6uxB9cTMw63jNXySftfNtsoQAwhD7VQTWCGvRjK47vcnVcoak1iGc3UsrXVJ",
  "key16": "3oGoiay8ayxM4symCAV3Yt5eMmvuSWwvqEqA6cW6e5wnyrRTMzHLBxXfT2pqrTcZhCFNbp91bfKo8RAL9X9hBdPx",
  "key17": "2SMAKirvbepWkwVNwPJkqCwFfNUB8GHqqDgFShJF4yWKUs6kGguLNMDdPhgaF4HAPpNicC6bfQwrBeSJsP3MM1Aq",
  "key18": "2kSWT3SLQWEbbULnfCdHE18XtKUqWxqejbTNnp6VfJ9k341CABA4X1PdCDn91FEE4aDjcv67nCB5vG3Ekq1S9HgU",
  "key19": "4XydhipAyAZHErz4xMiA2ZE3PJ9rqD8R1Hiyq2EKfp5U4TpDg1GuziCEv3zww5DcVKmch5Hzg2HqXJ9yk5g9czkf",
  "key20": "UvvaEdhg8SiNyzTjhqwaiKHU5mAKMTRnq4F4ff2qaptocEqriNEhPPsDLepwKfbssxcDLV5f636Lhvhk8xyCYUD",
  "key21": "3kh4evXPqeFJjHrZj2LBGgzYb5EkiTmv5HS5cYj9ZAx2xASeL3qXaX81KvSg6kdBxQrs4PYvF5ogihioBB9FGrZs",
  "key22": "6HW5RxvsGoozZgfBd7TFpgb7HQt86vD91FquNwaCSdgScfYytDiUK4Sa7swTJZDMAU7PESe8z5fEUnj6C32AJ63",
  "key23": "2DgPQFoZZcghBa65N7L8YvNc6AXE7khBskStsWxCfcPS6C6rmiJxyPBGX5iJooKq8Anbhe3fv5LGQhCPXwUPdKey",
  "key24": "DVt3MfjvWSiJ16x8NX4zoBZHRtEBEpT7SKnTg4HVcRXZbZDCa8cx9vdaBYn2zrzF5xjkhiTqxDH1LcwVaCgAY9R",
  "key25": "2wHaMnBwR155tFSaA5YQFCy4tcPQDfefybdAU54cGB7Df5z5oDAp8Girn8ZuUs4GjFcMcZxdarRjtGQ2ZVy7e9jC",
  "key26": "52C6DLcHnuVUS1F7oWDorTRBcNTyUED9zWkRQArxqerofFFZfjLnM8t4vpfyfECjdFhMjkxi1p4dzgwvi1qk5Ydc",
  "key27": "3SEWNTKnDWCuzEsrGUJdqDvkoTSAGLPqxHGhZumGrWSZR3yTVjz44z3TzLc57usjNAWWgKsa41PMWzPSnNpb4it",
  "key28": "3u4FW7ddAw3LTgtu2Gpz8kxBepVzEi38BqJhFMhTigxfh7h1QYYCbh8xvszk3CdoxVvh4BWuWtpyz3pjRw61zykM",
  "key29": "5uowE4NXhBgEkRsBiXekBwAckwBGJESLz9QzwHmsFQgvdg9Xg6JXAcbM4bGudzdGjWytfxdsmigxeVe2vtpvUjmE",
  "key30": "2DCeELLd9PnXVEtyPaP1HYDLt4raeRp14uHjTmX6YRkBGg73DR18dH6ohFUuoJTY6jn4Lce6tYozaPmMN7oNFPfC",
  "key31": "4AfAmAW7UePV9sQX3qHRzxRmSNoFxFVBMHsiYJcScevQH4ijJte2igwrSaH7DCEkBfnMTVGwsiuTXoZEmeu5b7xW",
  "key32": "2W2D7ZyCnXGgR2bYzKkmUbwyA2LjGgUQjRHC41UkuhCNrxNMFomiP8Y66NKHz2VXL6gcbcgWx7RztH9GF2C417YW",
  "key33": "j6HJVfxyqcaxNkJkkojS5XrEyP12khQoG13dgmsryQaXDFJRcr4LvKLWR2i8bztuft7Ax9vH4MvQQ1GLCsFQWEE",
  "key34": "25EXV5DZ17wRbFZsu8D8R64vcd4vRtVFG9cxs1B8ngpaPirQraSFSroEA1aZjopwmk28d8xjU8cqcv6zFvExf2GM",
  "key35": "28VzM98Dyk4o7HXwDM8NmWw8haUMSmvMQY5nk5tVTZcoGQQB3xQAQzTXk1QqGq9Fp3LsgnJz43rFs81MvuN8vKPo"
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

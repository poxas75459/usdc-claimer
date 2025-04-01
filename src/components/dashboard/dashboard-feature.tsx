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
    "ETfzxw3g8HYDSFG9g1p8DDnENjhHVMpMEmjAtETE8uqCySqkcqKfPteivaUmKrDnMpU26GECejC9ssKtQ1Nu51G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mFvdauk865XShnibtmywv7YmmWgBvA87kG63g8VyCkpeajkpGgM32EfAPFeChCEj1fxsJmafaBfJwbnWPeGeKEm",
  "key1": "4rDm7JSjypyg53J9cHJgfeX7uUjnAWar5WRD1jNhVYfgKiWoMsxnfNxsZxtLAEv9132gb1runbz1C53TWW5P7v1X",
  "key2": "sBGz4NkSKqj9ZqpuaCxqpidVfCh8giHTNVknvwkoxduc1jMLhNLTwGitqUFw9u6Njs5puAEFQhMjFwHJTAgdwTy",
  "key3": "3NFYGKvioDTnUTZ7UpcpDeF6tYLCpddiPn8sj9bkWFJxYRV627sAzdPpNcGjgBWCNRsNkNe5BPzvSfYh4YgiYBFx",
  "key4": "jWtSuoo2hXBzqMfNA2DfDR2ByZTErq6qcHgo7cQ7ZD95zvGRci1eG1PVweDjo1FkPVnkGDUa9tsPYTLxTbxqhHH",
  "key5": "2Kxmqxjs7EDKj1UNVBrXZSpra3DtKtjso7bEYCvqWcYQa2pHcYvKrMLCNu2d7QqhL5Fu24mjJHiWvC3atAbP1KYg",
  "key6": "4w4cjYjS3uU9eSgt7QbqQdS7Y6z29Y9XLptqRuAPqPyXPKu7nGLiV3qXrcpMbbGDcjp4pnZEZtFLntz4KAXqVbGc",
  "key7": "5w2uMHH5fNzNjpz2fXbeQQPVsbLfLnYyUodSr4cj5GBHTBRubRMiMSt7VywbePwSZ9zq9LEorafpAikcjNeD4Du1",
  "key8": "yvYSK5Ddo4wLdXctK86gGsuEciyTgEWZM9DWmdCUaufLKDjoc6bcR5UinRqVdMiyKhtqFC3uFXbS5jmPuM1wkuJ",
  "key9": "5gPTMd8CZxnqgZ1JAcBtqLrZ9gBL2V5zGBtjpbgoGQoxNDizF3GpX4c8U1AAEUwVuBRWYLPXHRgCcNDYskb42nQa",
  "key10": "62YazmDzqmhLb69RSHWAhHGn7in1vKjrGcmb1B5Su6xaJ3kQtuvp3QeSvKDVqMNDRUXrSUKUtRmqyCQTtAE2F6KH",
  "key11": "XdP9p4oiXdVz6SSNCWPiYaGX1nXK8bkaghZvz5hMesU3ZRoTQuZGqzStHr7S1Jbx1yRKcxyXpQRdWeLkpPJh8hm",
  "key12": "nhK3XYZSMgoDxDi4YB4USYEZ6AfTAZ6zXSWP5MRj3v8kvCXrXhB4fgHRgpzKjJgSEvBmDXit9vJtMAStfo7BV1a",
  "key13": "43dwri6QARW4CDLJ49WNiXe3yhNn1g5U2vmpr8tNofurpznqb5GUauPmU58MQk8tYL1E5R6D4QakwBBZCge5kUpu",
  "key14": "5VAYJch7r9JcTB48HCbGMPXrxiDxFWVkL2ASwprxpNiqn2vYuhFGuceFj8NwHk5TVT67Y3Q2pUN6oZHiudx2m29",
  "key15": "3hm6kSJpVpjeeCHTkn493KT9KshvgaWdHbj6jHmg9Z8RsUMD9Gt8Da6WVY1Z8sDPsnC9WpDjvr3HKE5H2pQBDcMb",
  "key16": "3eCSTikzvZtYBxt5FYoaWz18bWQYnLrfwjj5Jik7bznz9z47crJyjnHnmshKtzNiQWhTQTd29ukA8EbMYoqztRsP",
  "key17": "fhhGybgc9bhMVutnQ1X3wLGVntXtgepZg17ZzcUL7rHnjzkmDkcCh5DRZnVdD3x2dHc7Yx9FEwBBjov2rxVYxwL",
  "key18": "55E5EwuC3yoEDqaKzAD6BNaAwWdq1WT3ZtUnikfg2YH8x6ngt2fjX1Y2bBDqJd3T52QyU5jMtE24Ed6aCUdp2hYZ",
  "key19": "g58ZpXytgSLi59aPFcsGJhJxaGeM3EmCfa5c3jNpSAYcQ2mrEnSnjVecAGQJC4teKoTLd2ZWQpV4BV8QnoycXpK",
  "key20": "5xbcsDN3fv6an72jt16Fmzvwonqs7v4hRWnqjxXXsZCo5tajwSyebxyFXTJk19SSvRvFZf3NpF4a9SMGQQKudD8C",
  "key21": "36tMp2DLFMtLQv9APAkwvpMF5QwrLgu7ALU3eUvGPvQ7CLd5TvVj3QtiPT9STzzh1qH7r6ca6S2Ax7iSC7bLNwiT",
  "key22": "cPGmM4jb3vEMReaN26QhrbxUJEPQvtizZVKrdPZb3woKNbTdmacsUhhzS9dNSMSkZefF3PjByioSxx5PD3k7Lpu",
  "key23": "i3XuSNC7u6k172JXm7V6ayrHhrgd86EWnxhtuHtZeRNiwcjCN86Mo6PaoyP11AswvGUStHzyXxCYMud1CGkWhZ3",
  "key24": "2ByMD828ZizFMG924mKo2n8xBUpTaBMUqGq4ktdayHzefyXr86EGvjbE7o7LhCGBy3pL1SSvYgR6XSZcugRRTvce",
  "key25": "2yLBP7BBZ35M7VK7pyqLJQVyHpE5QBgKWoNbsnMcCPvbmdZN5zaevLAGniynDvWFgpyF3cBYF7FkP446tgTxKVd5",
  "key26": "4rv8B1VysvMYiFkt1pRJzhYPM3TMc81zC1H8yv9aJhm7j8jPzqe61iRdzYH5UGGAUPP28Y2bytCpAN9LL388SHaS",
  "key27": "AnNRuMH1TsUJQrYqykaks5EgcveggkPgREQvCUHhkjTwLP6qByQuoyXyNyKYkDNEvLMe3LcEbZV8qNw6ZKZtZhe",
  "key28": "5XZDNYHRNdYSgDm6887MkmM3tqhHycNxj28ZVoScpxPKZQhFjywEn63yXBjVbSTR94HrcNzb8KXBPqJ5v7o3hfG1",
  "key29": "28AeHv6rZbyZZPG4haMS5544wpLeP945ochqEdj9iW5RiZj9g1ksjX1u64CMmnyzX46fN4g4wcLGhDABv21wurMe",
  "key30": "5uHhghWBignC1dMapw7ry9ddwwNAgtBZv5jTVYHYKYM8c4ZB5ryJo9G5UirPPTS7cMbUUQEaoySrdYcvFb6YBtzZ",
  "key31": "5WsaYbQBmGf548VAvukPxNyXZk8YHsAqQgScY84Sckh9syXZTFXzcB5Mhj9WfCcZaTK5DZVF3PgnhgYd73BPGUM9"
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

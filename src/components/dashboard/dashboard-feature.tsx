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
    "2hrKgCW5QnPGVqoTq93Hogy5NoDTeN9j5MATrEYy5j4UG3vQBUvaUAaDUpzrpDmdJsXBtfprR8aFVsehrPsSCChA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bk42MTTMGBokJo21qShZ5AFGrZiE4o8Gu9NwZT3CnnYZVFL4FKEMVNy87nyqXcairEXwXjP4B1jpHKufHEmNEf",
  "key1": "xAS8RZ5bD8sSxWHGfvWmkNAuRkAMdCj3NQTieUAnJFiQ9Yceukjhdg12yDFVhR5zsuF2st2unkBCtHrvTViK92e",
  "key2": "4QpVjpHcY9GfaPBtiY8h96BNUsF6h7GRBCYkWr2yshdTKjh9M3d7RuRu14YoAXXUNnp4nkWW9ayqupdKHgfXme5c",
  "key3": "22W2unnk14qMpnXzmBAwNXFD19uEbZNgZpSzcBEBhAtvFXH6d89AvVYTGbbPT5yXVy6NCAYLtfiXN1rQSkLL2KEp",
  "key4": "2yBxGJEfYepkre3tYqtcHCbxgiLeqZFHvswMpQfUfnkw61zmDwVng8LECTxsgJt6s1rFeWGDLbGGN4uddUJ4JZp3",
  "key5": "2w59VAjkueZNdZuUmJVtJkHuxNXakABqESiKFeSUymdiTLTn6ettZx4YqP2NHLRuA4xzGsVxijKGFDxFg8T6hDks",
  "key6": "46yJ94u5WCbQpC6tQRJPvFC1cVeAgZ6qt7YBfTML6G2wYtZ571xD8q7jLx56ZCfZMtg46ad2536tb5osFf74npGU",
  "key7": "5fL7jYBp5znmNXrKmneahsfrnLsTXLo4KfaPmvRi43LBoo77K2gMjZSSrZUDMaNUuSoctbbHAETS12N62gEVsFNQ",
  "key8": "NZEfwx6AU69Vjc6biTzixmnHehN6Zyo4MuqodNoEiEipL2MY5jmTi719wLfRpkmdR58N8umENKukfshAQQxB6gf",
  "key9": "2akkQQMg4BPHFnH98DaFCPpSUFy9g3mZW8sJSxKzWGn43LrVcvJ5jzGeDRuGqVZtjDmHpAGyjbztoCfhV8QVPtSz",
  "key10": "4biyTyZhAfWdEzGczr6gchmFzsTDGc8avco9wQ95kLnsbR8o6FdzR5WKHxDm5h6t2Syuq8wb2AeLw6a9LPWFxyqd",
  "key11": "5B1cBcbaPxME2s3yKg96dHkwvntq4wamBpnZDYrBrxV7Ghm9JGne6muyNiSZCXLNA5iKBbSQyUfzj6Pd3EVNCxuw",
  "key12": "5F1YbjyePkCo3NZdP8kNJ9uQZVYiWK5jw2xTXsu8DxmJKGsFAtnRjYGqsuGK8bYCTWRtCHsPjyxPDmL5i8xSmQSt",
  "key13": "2WtpxZ2E58FLfUm4eNscmmrEJvMXxLFX3qDHKEF2AddeLXJivcptDSjiHpkwXVZagyWQKvx8J7xL5dZNeWH5LQYH",
  "key14": "jo5AihBLob1sZf7WB1FukYkDjFgtSCHa1pjGhN23g3z3JXVzMzni4ZYeujg982bsp1pmBwWMZM2ensH7FkWDSLz",
  "key15": "SVSTSvv9qap26j7enWYMuxkrzU2HsSSXtyzVPDndMY3ZASqdFm9MqoPcPUG3RPDzqGERUtkJrNq8Xszay9CPvE7",
  "key16": "3ftHm1SCkTG4H3hagJ3WbNJ6g5HhDCNM5DL3f8Ky6ATPgEJnUhr8avLkxTtyfeaVMb5mNsk6RRRcknXLp5TXREQd",
  "key17": "4Zyb3STspVrYrzv91DHmoPLL3jTNkYbHnK29Ed7Uf8MCfbbesEsuN34Hhah5HnfeGH7kvpYfWTetq5arrd7muAyE",
  "key18": "2iFbVzGLHE39DTqtsnFH668K6ZSuC8GhKULd8tVzs8CsE1CkWAcBPLF6DbGiFPkwvyHnNSzPiioVfr5CsptqtE4T",
  "key19": "49xaiUjs7RY7UdMSFo11FUumZHPa598ua6kxRbJiJxvdy1Hdr119ktK3f5cNMnaobiuDcwrywhCZ9amzTKaB3ud6",
  "key20": "3nUdDRtxdSZUnrduPqfwyoWNEYizra8JaqcBxXVcTEd77HrZ6QmK2LNfvEvnVkeMsvtoiGuYbMLKVKxKrDnL5sTe",
  "key21": "2SyRw2L4JZmkjY7GoBncBYXBJx3EynXJeGfZurJehuKvxhMvcAcPdLxw9QKnihbsXLLTtrEZu8Fq9CZLLkfM4cAd",
  "key22": "3A1kDCBjnp54KLaY9WtvZtMSKcpYqLMstVrEjosbWzfYddXpkhAHWt6xERnMMAR49RzjbUzSvcQ5YuKemfPSQn5S",
  "key23": "2Ad5sNpBWWMUYWUEMiLRJLK7WDepJYptaefHAWm5XCV9jKwbTkA2Ha1HbHbEBuThGdf4mnJjhQcHYGCfz9ZJipy5",
  "key24": "59cxoMspLQUZ22CLr7XSZ6eA1k5qZcARgePM2yE8HXRHoEPawUKVjH3nvs4dQ58DXUQKTxEAuxWJheVcf7WWfxzZ",
  "key25": "XEeUjJMfDY2caiGde12M1gLSpQZZRPRKRcarQZfwzt56NCSDKjVEJT5NVkaekPSD34P5mtT1ADJbqrJoPjZgWb9",
  "key26": "CV4VyADtKu6yEbyTosrxLMbCw1zxYhVZFkQZ87dQwpdh2W5fH9oRNkYhYZ4qtNTvLgb5XCuzH1d5ofQjbwVzJ4g",
  "key27": "5RkE1wKtKELdL5Js5wdXW5sesRYBysy4WqmAjKq3j3p24ASb49Fn4eQ7GBEg4FfX1QRnS9QGVCPhcUjba5CDU3o6",
  "key28": "4WRVVGJV68EKk9xLLeasoe5SjUVNbvRJkWUadH3s6hT25czMHLRJG29cAGd5dhJiqYMQomJkJNZBZqXN5YK7tGpL"
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

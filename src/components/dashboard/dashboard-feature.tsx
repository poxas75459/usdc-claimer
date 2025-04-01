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
    "3pJ8heaeG1DC3yySTFeFH74J8Y1qW6XeGNbYGvyB4Pny5x3HSk3vR8wgXdP2bTZc9PVehapSKeoYgHEUcuyusViS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J1anhxac69zuDiyArJkFx1Uo8wHqBgTb5qUsxhsrSzMvz1duSB6hWnEQkhFMgUNgiQkVbWStMwS7MQx5J8BbAS6",
  "key1": "46FSU8B2GNGYqTFkFi7xXyjZ9CrbWBhj33Gg8hEk9bA4JLVYTSDgJoX66gm5DxUuP9kSUByL4EcM2MmAbUjt5dqM",
  "key2": "2C2HG1C9wjkiFzyxDV56ENHVKyA94rrfUSvsxroDM3pFWrBLvLiN148dFWzsBeesUuLLgCSeynjDT9n5AxcVhxHq",
  "key3": "3PCuGuFMvBBVisuYpbAv4U3dsRDNEMkk7f7mFZ1SDvH7yXk56UdfSxD1wQ42XAkvditmQvGwpSKR2tiNkwm7XdXZ",
  "key4": "3v9pceGK4yyiiwQ9DCiX9bRKcBGaCePeXzHbFAXFqZtduLTBGzjzQCr72PKDornTcSifiAzAr9nNHJZhj4Ymoh48",
  "key5": "Hjteptx9UQFZADHxyqXgRKo6SuZavbTwL4URRS6fDjS3w9XFUvbx2LWjkBLqNmS1MP3ufQujHaCuu6YTZVt87YG",
  "key6": "2WLSZb2tGUDzBhBUA2yR6rXhimeu2MD1cUKPxt6hdyCf7BF1PsqYjrQsVT1VGSdPcpMR1gCNwqt1vCwSCs1gCVbB",
  "key7": "5ophw1r532eCk5eDjEXS1WrHiLs9CdqpLk3kowu8uE5Ttfr8C3Q5mfQ5UHtegLjEVdbzeyRDvCeohweWU1VxX9Dt",
  "key8": "51w7WbawRcTaftnvRLvtA6xdrcr6sRN2wJcrCuHbKj7ZozWwdmeeiYA2uoWXGuUzaoboaQVHgRv1sbbmTxR8n9jD",
  "key9": "5k1mpBYdaXsVkH9HHWAkjJq9STtwoQrUj8q1EkCj2ijTtqaSnMMNLo7HV7EVJZ7er8CckfTK1Q6aFCmo48ZmMnmE",
  "key10": "62414GTwEvn6X87PdPE6MhBTNeEKycDxSGCVfJM8x6R2Hb54FRexuJ3U5WkeK6k1b7CLJ9oW6TP4oe7XDsU6azpu",
  "key11": "CAwLiNcysVAejFigvhuk3rUyxXsqLiyoHkbKakoBHMjizbhKaUL8Y6wCTcKzcnRaGqjR9Ukitas3zmGZRPSfmf9",
  "key12": "5KxdotAMCM7R4oUZx1BQ5v4cUiGUZLoydEnjTT4FtvS8d42nsJZu45qKWvaP3uLqdHJVv38sfQRNRpj21vqZe8Qi",
  "key13": "3TuVW4h1pG3qdzvd6ey3pJWoaSohuSrciUAcWgepxNXTzwNtd8TsCNqAMUDATtRwM3iBtoyBfTKEWr11ASRyAHhA",
  "key14": "3iJ7QgNA2SCign2UhALg566hdAhicZNFpsEh17fPphQJ55eDthpwSDU1xSEX3RtssWMt53qii7YkcmDVUBiAWQV7",
  "key15": "3UsdnZt3kqvwmcG7AozrVGAWoSV54L9Bk4zyHJpsdxEA6r3JdsxECE6TK72g57n9WYVt32QbUVXm5cFZT5GJteKx",
  "key16": "5LCBoPfWN91VSLr279w7K4RKMK1UGpUxVYbZrvEMgzzH3pFp9KDCM8XhMqKVpz43YD2SpHQnV89ofagHX3nUGc7e",
  "key17": "4VgEzj4Ci3TpheokJfUZCfgtH5s5aeAfNHtixdWd8TLEFLyWgY8LtyQVHN46UriAHTwnNjqW915cbR3Jg8Cf4D1Q",
  "key18": "4J4MT5Wy4HweCyPcRjnqeMTAadgZQ8MYSxraBgLo7nWEkrsFcmBMJgqkXfq4kh7NTeScQ4WkXFdD6rmu5nZqPFCT",
  "key19": "3pBnyqRCkERa5WmuNbzNb54d7iAhGVkkKd47hr84VcQ3NL1cQGyMjaoFPrC4NgEFWWRzxeVNtsbodXaEexuRuLrB",
  "key20": "4UWSFbScQGxnqoktT5fnViW7mm1tjV4QhQkXTSscumBS5AmeB2ncci1pkmZwLAbxwb5TzmGFL3KV1ycJc5yxZ1Gj",
  "key21": "5j9J3xYCGZsL6N1SsHn14qVt9fyqmevsG2gAoAcjFQyqqZQJUCSpQK5cCv4ks9yKH8usyxZeJaJ1WRL7GCPnM6HQ",
  "key22": "4jxCJLN8ESasbCBtRrQQP2VzWcuQTnCxRf2z9DirXMj11ZAkn8L3M55k4TAKVdpuvWmn3EgiK7njSTuUnaHn59Eb",
  "key23": "5ShE8orAigXDfpWLQuXD8gofoJrBmGVcLkJa1ikTM82fC9ySvxmWRnUcGcaGkY1hpBRcuAmjsVA8xKNsrMH6fDDM",
  "key24": "4AmyBskBHMWnEDXJRt7vAYMcTJEf5RRJdFgYorZ83mGVGqPS8xTK4CUw44jR3Fy6BpBAGtqr7SYmMdyBRX62qe3y",
  "key25": "2TZwfBJFhj8BhwN2Lenvc2sYJ6YdyFc7MeTRaWjwUuoei342ENMgALqNWK87UTtHDCA77JTJwgR9Umtuzb1TcZUp",
  "key26": "4VrnWHY7ArioMJkUHQdYdMrJfFMgbEPXAFeunXsDNvwGBwiwSHUkqPhjPbZhQnGXY3BYDyPjLogJz2QAh82t213G",
  "key27": "3YbKvUHUHTTQ9c55zT8JJGyYMqBSJJz3CxmGbJpUC1pSSR9w5a997566JgJU5KpDYWYqkXKHmGMTdrdRCdb5BkDR",
  "key28": "2CTWMEJu84cBV2wCQDszHkEXfdDwphM4ybU97WTV98CNvP3SjBDKuBV8r7LXwfo53tToj4Gpr8tucY9fdLWcaPAm",
  "key29": "3e2mFaYXwZ9ssxr16YtwUvsksUEtCbAXnqxa8ZS2FHh2EPCtxy2FwtPZwJuQoJn2dzJuP6gEK8pM4EyZrAvMd1E6",
  "key30": "RfNraejJ3HcxhauNrvVAESa464WopsCDvWvMgbVX35DZgJ9N3b4LChzcZWdBXzY8agNPq523RV8tw5pAsyNSjxd",
  "key31": "5zuvJxddXk5QYTprmbeEHqe4P2pN9S869xtQf2TeroHnUtPmdiQBp2Lyvs8N3uueSPfW8f5NBNP2E5SPwV6ur6CQ",
  "key32": "2Qj9HHZWtQiXKxGDcdxtpgDuoHE89cMBWweYcddj7Jryd997nhVG9xYPAQoHW89KGtiS4ovPTqZ6YXiQaJjjXUh4",
  "key33": "2BuKkU1cDdsmHfzNqBKZTtsHgoPxNpdWcVbDJySiR2Tq4etSbY82BHVmqt681X1SkjP3BkwevsGkZifXka8TdR4s",
  "key34": "5BUaHsMCjh4r9cwRrnwctbW6BtB4gUQHJg91J1vaKmXNjT1F2WnSgFe8cUsyUNQCyp4RfHssPg3R2XcCnuy6iLWv",
  "key35": "YdyPpH2sNhGt3N77M7NhH845tKvLJ1aX7ggWC4pMGoryzbV58rG6BMbdSjthfZZueqRgJZzuXy4b3UpQgvNWKK9"
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

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
    "63GQsGQQBVG3NxtnxYZRkorVKKKxt7CamLTLEq9N3X6aqjNiosWHWhTfPH4MRH6HzEmNzWEX3m8T5YehRx3LTZSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EbfuSv2YZFngtfnmT8rQBjRCTHYX81ai1AQrroFcB5d5JULd7B7qFKxrdef6G7dQWm5USqzkYwG1ex19PVwvw6e",
  "key1": "4GBpnqAwDSEtuyKMz5UaG8Gs1veknk5MTNDMQUYk4bKbRrtiiEKay8oBuR3dNDGQgjXMV4xvswcWbQ5q9xh3MS41",
  "key2": "4t1kEcpMKJ1AG1fidGmYpuQRi1ycqtR5XLph3ANtBy9dfs9rmK9CiNErWzZ4suiHawbbBQi3g5EcxpRoK5Xkv56d",
  "key3": "3PM45rBch589nsdzAcEzXTdTrLLMtmCbcGvw2sgGTncxAGmU1Hmh7dz3yDKos53GaBrG4ZV3kbejJr7a63K1r2X5",
  "key4": "3HAzcxXhNnYAGweNikMcYCdcCJQD9msVtnGsrTevX2X5LSBwXXRk2xdDucWvmnmkHKpwbFQoBtGbnH8ra4KyhwGc",
  "key5": "3c5cxzv4M35xZ2PvpeJhyHLetgQXzWnawTf7jaj7pCYzJhjP6Kh2kWHJUwirntRrtjU1MydSyFjEzsd8cZxgpJcb",
  "key6": "249gu4SJiEJ2M6s3N3xvFYvxJmc7s4kWMGY1nSyTB2gh6GfdEQjci8tu2FFbGx912N6heshiu1CUDGr98zniYZVE",
  "key7": "4fjDzGPTgDr9iHP8n3HPHDM1C8FMJqLgGnnVu1VCVp1HMkzSVpvacbZ5MU2WPxeYougQ1JUYspfD7eFi9owkWkW1",
  "key8": "5tdpenFPnRpWHFB5iZp3eSdvd21v1SCUrfU2uDjGoLKqeTPc9PH3kFDvNRyr3CqeDrck4VifcAX5497VtPxkM9DD",
  "key9": "38KBs9gJSNxEx8VdzqUAuHACpB4KvdXSbMMg5bxF6GR57pTevVUdYumVeH2GGMDUdqWyXRXcyTV3wmFYWuBo73y6",
  "key10": "5t5hpNKUro66fAbGfsK3tQ8CLr6YemEdFwK6Qdk9XcsknN1Q2mZhVkdzfeer9BKXZkaWtx43YoWjQHHkaQkF87Ex",
  "key11": "46c6Cx6RGr2jFG4oDSTcLMSWy4Uewd8t11RcUmysYJH2wf7dEfFwHkCCSRhAMDQZJ6gT5nVRC2fjRzTdeFEEDMBz",
  "key12": "55YxfnzzR66aaUtCB7weBDeRrY6TB1Wf8Vf9VVAVw22dGC4q8VaTxMbkjvdbi88iqX2eDRdNLF4PjaJApXTraiyQ",
  "key13": "sQty6K8fCRWGnjdSmgFfd2GsRuwmwyqzkx8s16EizfY7Tz64TqjGbQo2Kqe7RowVwnVHekZiyDwymBn2Bhszgq6",
  "key14": "5rbQRywpm5eviaZvtzQvbi6LFEcSCn1Sz69SzQ7LMSULyNn4LKosmhHFhQJzdjr1SAdKaAeTAR9Z7Rzt7Z6XKemC",
  "key15": "3j94ohTpvNwxyD1XFWCMzbLnv42TTe9wwT2WyPJfyaR6SVmGMjVMmP3LU6Tq1uyEzxfLncfRqvKnuuLVa1AdpZ1g",
  "key16": "241TQiYbnFdsKY7UhB631Bd5RZm2fVGzkhxFsM22oW5ERxCpWXh5uYRRmRuPtFhR6N9D8NA5TSUsyiAxvKXDoUfv",
  "key17": "232rB3W7fve36zeSj5WuAePz3CxzKNpwm8xKCCY1VmswpbVkntHggNchQcxoRnjRax1hYUnLPhJGrabWWphenk5M",
  "key18": "5wPrJjYj8adjDHLA4j4MteNo98RXxiq78YecrPFTAowQuMAoei379ZwdEQsyZAvWZbgS9d6rvmkSvNkvHWPYXBUc",
  "key19": "x1XXiwEPo7W2xEvzXgNsghkik1iBBrx5VvbZjYBFJLCpBkcCZYtme4wd6PQG9MPafYdp9wSJuQPhLNyv1WjaihD",
  "key20": "PqWm4mhuCK6CTCGoGXbePq4NtxK6vCefk6oneCGsR6tH5Le5RR54M5LC27f7EPFiYCr6JbZafXUPQgdnbwqkhgH",
  "key21": "ifCX3YNg1zbA4cLZTqpE4QLbeByqjHbdyi5RcRKdeYpjrs2Bqtc1Hejcf5u3x4Lr11afk3uv6eLjHLedL1RCTEB",
  "key22": "4EXYesgaUxevBNicCvaCEYvBq81a29Qdin21RdfttkS8UuP6sGrZwNJqJ4o8TxEbT325xpXE6EMK2kioQJ69PgMU",
  "key23": "4CstNDU9EHZNbyZusQ6MCapXByFvCmzwJvxQyZ9cdkMfeEvYMdgy5HHvoEadLogYcjBm2zzJFds2MjSfgmxsnEHG",
  "key24": "im2CtS89SYM38njCvMnjfxvxzJMNYWCP1JuSSN7tHoKJJuJjarMFbVVfnQE7ZEC5HpqiQ3sAqKkmUYmjJSNVEo5",
  "key25": "4Jrdo4Lk7P1ZYUY1gMio8XY9PvjaSEzMNXsN8EdLMPFFGR2gpbxhziP1UxDnme42sEABc7FyZw8PSfX7CSouee5P",
  "key26": "39u7Ebc1avcf9bDmzswpaGQ3f8ry3hhHWY5cieQX9yk9Wo5UyPHDDKHt3RncvtqFTaHnQiFTR5cc6bNf6ubDkxDk",
  "key27": "4Dpr7M8RX6dJwtUYq5gdbQiQsra7a3vmW67GjVQgFQvuRgHUMQ8rq8Y2SCphi7QmTu8nmkMAbhGRexEmrGAyRo8j"
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

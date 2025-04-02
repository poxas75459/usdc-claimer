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
    "3qZwZ4XojcYWbyJpETKVMHTx9hrMHLCLiXKMgzbyMFJz36EHD37c3i3BrzbcGpiLbEoQZRKc14QFDcg9UhDEMCtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kqjqw9VqJqZLADNTxVNPpbeUKvr4o33iXnf8D3uJHEqTamjEMsx83ELjvq2ZrbCzZp49RYpBh7ikf8R28zuGS8n",
  "key1": "yyZ9uHSJthhm475GowhZjMTBNExTL8S2cVwpzFDFYZBmiQYzCWQJhBvUjXPBGVDXv43kPMbEwZYnaXE5C1crzxo",
  "key2": "5ppVPKGkM3EBJ6HEeNi6tXamb6b9DjhbVzXviqXeQ86N61F4XfC6ctMDtfLbC6dYkewYMbxX49YAZkaqsbY4mT2c",
  "key3": "5qjyTpcB69WAUhQWMpR8B8TGVZThcmMHRnF3uDSzd8W1UUHYKYaPAKGm9bSYbBNkVfB9LEWmStksvbpU29PbVKP5",
  "key4": "4NVfofCf6CgdXZ2NqokeRx4qhLaTxbQCm6LBp2f8XZeAC6YPaTmjaEJKMQJXg9HsVuyCJHtBzL58duELH4UtNM5t",
  "key5": "671ogzrDmRqdR2kdUBQ7vFhXD1HRz6MNJwFPifcMhU5A8JgdhrwLomcPTpAzFFzBAdtGV5WqQ7VXVT3AgneZsgUn",
  "key6": "5tdabY1jLhuswGy3p4pH2A9z5t2QTEw8TwSQkb4LpQdk5rJtzMG1ekzyBcMmXqw7tVCxKuH892GmyRTdnbfpkxZa",
  "key7": "33JFT6DuC7ctC4cNBJoMWVtfDE25dXobDLNE955Eb7LxH2sQTUgKSWsWU7ZkQhxnFYqaYcGseML2PQBRoHi5M9je",
  "key8": "5ybpXqTMJ1nFw6dck45UdL9M4gHuRfxGKoxwuJ7KBJodxMnegYXftCuDv6X4ntFvYXw5rKXcdYC4wR9FLcBTUmrE",
  "key9": "5w8zicgpsGhdQk1ZsA9GAaPai5g4Xg4AG8xBm7P6zwFtVC9ZsD3PzHK8vagyCBVZw6A281Qvyqb9vDJgaYsQbC5H",
  "key10": "2VxH4RivQwiUiaMoaEWZ9UoSsS5tTVAB9mqgrDr1zND1CLjZfjPrCV7hthgzz2ce7t1uqiQESrvzyFKJENZUDNT7",
  "key11": "2GVPd3c8rQtpkD6L4CNT5u5bhCxkBG1hxx5yA1oGjYQCZFv3YdWwUztCjmvz7GGppUAUPjhnJFQnfaQ4pX6FCP4u",
  "key12": "4gwU6uyMggy1kQus12UsYKGJTp4JwSosjrYcpNGHLNFYyVK8x9CAvnpR83uj91KFq77d1PKbW5YvveCjMqqs5QrH",
  "key13": "21SteMvKnKbGbL1y7ucXazQvUPwA7qEXX8Pbi4TkMY5gWmBz5gFFYjPnpNootuQxQKFZ3Aqh8CNF1MmVKUykjKSP",
  "key14": "2prwJdyK6UwmniFSYyLQdJ8t2J11Dy3Rzbkf3yV6hUJF764nEhbyfkspsdfLZVrnMSShspN84H7kYz4ExbJLAwT",
  "key15": "mPnvkUHYmUGPpP3F6FmqSbuEesYtums9DmvRwvaWGs2ybuPYb3MpfbNsxnuzewbtdRduRpWmF2Q3sUWm1MqJzSm",
  "key16": "5TLSwRvEE495ypG85aucvV4pSARTXw7UHRsp1pF523dZHmsS63Csz4u62aZ8vYH4ZwTix1vBNu3g7U6XGETgShFU",
  "key17": "54jQz9sZkegndjeL4W12c4sPp9uaRxyhyer85xGkAXk7utjpi5ho7hUnqNnKcRFCqN1zixzQpZ7kLCJnrxHcs49a",
  "key18": "2zWnwrybacDNDHHftGy8JucUE561kGYSRunSas7htPixdUoxDU1PVS4zj3sCP4zpkd776cXGuzYDNjhzQNZUcWzq",
  "key19": "5ktUtu9nNHyMVpCFoKuywXukoCBeYyeaikKnhodT7YywugvKdygciMtWmxLJXTr6mnW6p4UjhCgi89wdmbWPGZ1E",
  "key20": "2dcCj9HQv4Uj8JNkA2UPcQ5f4fbVSzhaooQ2Envh5UamVahQVm6ARiovKrSZu8RJUGDVKhBreBmPcWoLCGiPF3jj",
  "key21": "55teCqT1GAeHzgDtvgrsEovbet2bNRZoYe5t3LXmc9Bso5x581EiXv7v8jJ7M9BQAZfWPLJeJiWK6TqXNfcjwK8W",
  "key22": "2nT3xDSat9HWX5K2n1M5FN3e8vPqSN2bRDSnD6bjh9Kj5aTgztBCSraV1fHoV6K8fXTfNJH3gMR6uorQsf1cNBYm",
  "key23": "Xf3BuKf1LKaA16QBrPVCBmJKZbdG1VPKPDmxPFwdmjpmZaD7BGyvEpRFF2DvQ3hmrPCRiXg2ZhhW6gVVV3o7t3U",
  "key24": "4g4opofR1tY6XTFv3vDVNMUMB3toPzxzrpyzn8WqHZF6L8h6U3pMAYB1QrFuVhhtBVkDo6dGiUFGtsR68K6kVTKq",
  "key25": "5qbmmimiVtk1SNkgDYpEATG9BZPGTVfJM6t776uVsDutRAStTMgecnBYiTyVWEXQjug79QacJ8NoV4x7jYAvS9et",
  "key26": "3TwBDBeNdNeLLmGpUK2i4fwhprWvTL2Wka2HSsQoFA3gnPGcQcXXMbABYtdbNznoftFUMHy6Q1Q7BqaHayzy39SG",
  "key27": "fFdJ38Gv2m7bZWjaAHZmEx3wh8byPDF58FZJbFFA3gzGTJTtcvwwHzFLMKPbBbNmNPXGEiEVKEeqk3jJsESGnmf",
  "key28": "4xzR6u62Ji5wbhuKcjodjWxALNrHncJVuRU2rak6XSoP9pg9Dm9C1Ccmm2BuyDBEgTgJDhdmjy8XE4TUUv6dwxpX",
  "key29": "SzwdtJbm3cb2mSks7TSPoL1KzhXUKpQ5VpYsy5dCmLzRXFspzW3VBhFYKJhXPd7zame2y6SAe15bgGKpitpsrU4",
  "key30": "waUATEuzLm8mF9AqdsKoMjVGkpzaBG82uLk6cAzBDRF6wyNECs1wVHKnhbhBrGgv8JhqsoemKNqoacBDeCMgsa8",
  "key31": "Y28s8VZR8Ge7g9vABUG2SPXX6d6z4yJPLvQtUtRsqjDQPZppPPmL8QVvwgimqopRCgmuCSaC9TcDcvk4gZCenHv",
  "key32": "2Gco4W8mmNuopjA14USbRi2mpPonZG2hQNcg5BBhiJX4uGZ9UJSyRQkJmUK6HiRPWdwEKYQhyHvceUH1MYtCD8pE",
  "key33": "2ib85ErM2iZPCGpWMi9HETAtxezLAUTWFEGja6ydxDfEGhPtQxSLtqzBQbwvtrdKrcNKSKFoEEUp3JQH23BzpACR",
  "key34": "mpjAXnuhE3zDeW9KPGuDV1MEKd3WLcuHL5mJziw4zjP8tevHqBCVm3MenKD7rq297gzxupiEWxs2Cz9raVQfue8",
  "key35": "3FyJrB2TbECphew9hRCx2uc6YX8xFgYoTxgw2jwxbSjSMq5fZrtMiJCVvRZausM1fmcmurYEUYSqNBZp9HcRd1dV",
  "key36": "3JxrqKEVw9ZiUoQ6nK5hwhYzcuEQDcbHUiu3SZNz83b8N4jdSsGH8NY8QxhGZq1K8wvWHZdkMoAivQQngE6MM5q",
  "key37": "4Wgq5qhMvBHFAd1zdzD6L816uDsQM1rRtjiuj8AmQBuypUBfNSUD39wv6bjYyWuFZoaL64PiE7VDqJXi3gxB6Utx",
  "key38": "3AH6D7CDTCs19qDMeZ6Q9ko6nXFTDJFPETnqzBGJMCzEqaUMF4it5wLPNSQPhfSQGQsYmE1wYhE1x5q4piA7tDbE",
  "key39": "U7M65ZF1tKhze5oNUn8xgWTrntzUyuNRBRS42SpMvR2yZSUcpKEAkLDfaSyCbvymNrEjSr1Daf2NWj7BYJojWr5"
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

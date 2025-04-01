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
    "GzizbEPdhiJG5xWEZHtg3eZrxCyAPpGdH7FxV4oLyXtkQY4vt5wXEAjaZ7hNerLD17Wd6DHTW1kdCBgEGn6KqJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ggTom6ZeCanwnPoLG5HFdq41i39EQ3eze5ek5ND6BbkzJ2HMCtAdvmxjCnA9DC6hkWTdSvm1bZFpYddTC2VAtN5",
  "key1": "5oYURN9TfFDesfxtbwE3wEkesLPmP9r94KHPwMRYRGoByAeEaRKwJYCA2kvptyBcAAcRpQFbqavo2RVfN7kANCKT",
  "key2": "5yAgSKJM4A8Mo3nvV5AqSY6ooYZxrwdtwgCMQyACvMca4wS6HDKr6sf7YycMs9bsFJSmKHA6817AjfzxPLDeFxRp",
  "key3": "2ZVg8hdsVxXfDUHFoqFCuJNP35C4MkWgysBC9jNZG79ajwN5f7dnPWP2Uh7BqB29pR6ADCu8Dsfcp8VYk7dXD7mX",
  "key4": "ybjQKYupjqjvHnaLSpGduGJLbeSHMxbXewzxzbbFZiubsXw7BWqYWEMvxmH1UEkWHpa82LkdVgiP7pkbcXHZWLH",
  "key5": "2gJtafavzcymXJRwPYtvR4XotDAjuY3VWszoB9jpa3tqnDy96RxsaqUv3QY39suVFERd5R6p7NAKz3kXwWjK5jJU",
  "key6": "5Gb9qEK1uUHvMtg3LaF3ucnRxMu8CLss7gu2MFmb8xhApT1uHLqZPuQ2ph5h8uqdLSCpsCZysn6r29npAiZ9bdXs",
  "key7": "2B1scgLDrWNXhzCp23qNFTFKnQygX2A8kku7m4VzbQ5RPMmoJ6HAUfa3Kp3ifywGRN1Y2ZByYgNKkVZSQBE8fkzV",
  "key8": "4wCUGuLk3ydAn5HncNJwFsM5ahri7bqyxLpDVfecWPaZxgH7M3VGAPB9Q4fTdkix1QjyMvVTgrD8ukHqZAZdLbKW",
  "key9": "5F5RhX8mJTCiNRVXGbGvGRdpG7G2hYmamZ8Lo8WHiLdJhxZEQiREfeqnCrqxLEMvFeJQSU5m5pzpKU1MN86xUBH4",
  "key10": "3rTsBo8ep76JStjz2WsrejkfBjAKhu9FRTee3C6GGm1649YEsxdgH2LRfGUegC6qqkafDCNvQBmqatSAASydPw5",
  "key11": "36zB3tMJ38khyVUch67FTnKYpqbAy6pGzQJg3PWwe96UhRRsDSXZpkoQ9WLPTYYrSD9gpHurdXtug2JWAEjaVTYr",
  "key12": "AD3tP9h8VT38QDyHorg3kUFsGPbebD5n6D4fn8WFqfMJsm5aPg6MABMcJVs4xuA17nidwtGYzrNCGsxX4sVyCu7",
  "key13": "3sRUiJdduTgadLe3FAZasXCHSBeY5xEwkjTWtR3mcN8aCXUF7xHDbzsRQwViukujswPJi7nkFvKmn1v9hbfzD6pC",
  "key14": "3tfLqYCgUcoggPu1n6yfiYtysSJfC5RGbAX3qQQG929Ve3BLfXTqF6bHkeRE47LjxqAPt7ZRrBpJtcUWG4Avuerw",
  "key15": "3FcizcnjAMfVNVGNPmoWj6ZvEHdTTZUC7RUXzB9R5sXgTHHT5Euba2ptgfEzoVyE6ToWmuioFUYFokQe16VNze8N",
  "key16": "5B1ZMCnYzwR6AXUh6WYACToGq6FLxJ2PbKX4mF2q2xAAhJ7NwZSiTXscjzQ2oXmCzVmGwVB7SVZTYEoEw6qzR493",
  "key17": "4WCpCMSzmAa39MVo6R4sfap72uENphmsR7sa4kt8iKeGYFW5a8rddfe33vTNUBR29WxG9nhVK8XEL9yjEswPkeg3",
  "key18": "CKi9AtdzL1NS43H4brGPPTPiHVRYoLmAXtuYo1J7kA4WTBoYV2tXaBR71tVUFKjTk3ECffMKSUmn2959gbNrWbv",
  "key19": "49TiYKhxzM7bsh5B9yUi4zQD5FtjN7t4AKRtZaixuyHzaeaTmC2CpTR3u1rPDG8iZjcrzTEYpd5u1CtwMRtUyRjL",
  "key20": "28B3QH4evpRTzYBdUERokqtCDgFyTB1i67zQrFxMh87PXfuBRoy5FQ7Do3a75TWEQVCDT2JbwTUoF6dadV2xHvid",
  "key21": "2v2k5bx27MyVtN4higpjzX7i28pXNbAuKQkyjDVuPpSquDSs15nQDSMEFEXUtLdtsfYxLhtgo6GgrxG1nFQ9forb",
  "key22": "mgdb8GDxwV7Bh1bAP2Btp9nUwo8WdH3BSeYthyUEzqiwWgDGFknuJGYjSuFx8DC5c94uy5s76WEsUT5iMmTSiVj",
  "key23": "upVcMcg4rPFi5U83LD6nLJkGjY52VeLMnd21u5tyMzmAPEwPAX9oUWhsfZyqC6SoX4iBZLRqG5VtbWT3rkxkdeb",
  "key24": "2ngRBrvaZHT9yYvErVpwbmUTYoR85sNrTVmLLCLrH53LWNMYuUQ3Zgu7qVYBcdqRQJEy4s9y9j1dh7RDnNQTvEHH",
  "key25": "bWzXkbwxM1XCMdUtHAf4SuHZPgY1Rai1wXzyJCqdfNm9nez7BgV97bitoB7S4uiaVkaS4JrpVENBE4rq7LS8HA6",
  "key26": "3uKPtofZoFJpZDJaXfkpFrCnsPZBvnSU38y6rG5Jhx8nyRvBgtRDFm3Z3SAbuAhiSiiEY5rK1vAsAKxwiUNC2nwy",
  "key27": "28R5jtQGBiQbn9VTndG5hC1csNNQZBboBYA4k7RLKoY8kCWrQdxWZNSZeNNhHdpTwTh6CyLrSpNALsYVyyGHXH89",
  "key28": "4AmBZ3MWQtYQs3GB2NKkKNpjDoRW67mBtg4oGH9w2XX1MtNAKDoXzzQmxZeYpJvvMU12kdSn2gt1EPbCwASxZAvW",
  "key29": "3xacotwKvKSdsqeVrNhHMBBUE7VYQZRYGTbb2Hy4nd8gUVNg1PwWYHBWJPXRpHYgfv96A7NicivhMeYiPJLKKScF",
  "key30": "2uS8eeTxSxm4RG45NNUQyzHBR83CeKHUnqqULvv9kCoowpMqSWvJhyh5KryR8HcKYdV2RL66jfvMDyJ62b8rsBNQ",
  "key31": "4ponMcVocDiAyit6kwNXaMqwtoirtcqCGuHJ6sqhZZ55yEKRJgKGv9hvw4wPTNSDB6W3f1bxMxYLX9uZssHDDepv",
  "key32": "3ZEtkS5H8Ld2pxzwgEobUczTWXJxprGWVdbMepmKreBC3ybg1u27sF5SEW6kjFVZNPdLd2F6uV7e6oGCo1kvnwrj",
  "key33": "5HPPXqRwQDzCk2FMJWDbLqsEyYk7DtDojTCNprVuE67WcfQzazQnFN6KkoHkMD2ZLWFNm2kCnereafMQ8oYFJ8BM",
  "key34": "5VmiXiYWF5xVEZnzEgXb7VD657KhAH2S8UWTNHe6sizKPGK2EwRQHpcNHdW9Vbck1JTR1PpwJ6CkURoLggsWLt3p",
  "key35": "5fu7F5zv9vANZdZyLEoywk2eZkWhjGa6fi6dx67T2nPgFPb89Cpc9vquxRBQRwKuHwWFFpWr6F6GYZvzqK8k6FoE",
  "key36": "px1jd4W4g88jaYrcMmKBQey7z96EzWYUcrifyFzLKsBUXhDdWb3fGSVt6ADNRgAiLe5pDrHXqBLvApF3X9B5AL8"
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

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
    "63Knx2fgfeAyp1KF6Wd2fv6f2bhF852bUcJzaUgyJk3zUMXoXGtNeUWD8Zh63GhMDgjTDDHX6F7wA12y347C9nUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CY2XYsUBakhhpXeMtqvL36xgv9F4SHA55HkXr8ebJoj6cNp8qoGifHPQvvJisb3131CSzcQbUePXywrVqx3crVQ",
  "key1": "5tQTVBUbt9ToYYcjGKzhHdYJtHbDdBULbSqpRrTtm42KRNJ1akFDhVFrsmREepJFbNcXJwvNBaJnGgEPJfMcK8Ee",
  "key2": "42zcrR1xZrTmRHSSeCxQqcnSjMAiv4rsC9UTizLMPG2JwigeGc7emrzPV8KDYwhCCh4YivGWknUQsEkCuDENf4bA",
  "key3": "N3Ukfo8v7aLRzQMPzUB1RkTtyQqSH7kcnoCX5eMnyZ3auzZrK8N2nWqXCitzBz7N1QHwJv24miccBjQstWtqpWj",
  "key4": "4ZxkQjudeUTFLEZbXDa7isyzQFzW9ya7K88Aiqmkvsh27CELfAiH5PvxZ1bb3Ljj4TNqkJKfKt6gqquaTiFnhRQR",
  "key5": "3ZudWZUDa5Hopo7rspxCyeHrbKhbcfVGgsizJi5gdZYyhZNphuDiJokSUAoPspowQmbcrdGrWgdc1qHoAsofsuSP",
  "key6": "2JJeZFWyNuWEMk6ZtqUSNSLSYdSPwtWPZVaGxTmYrJDGoLa6iFHsL1dXEqcDft1GwLzswZMon8YFds8JqPeQSpKG",
  "key7": "2RwCaS2aGM9QGF9EtQcZrVtJY1Xx39qfEtMKW17KDWu38w7Kfi5YKg1Z1SkRce2Sh2P4rLu9LhX2fN9hkae4RWNJ",
  "key8": "5hPPRBR3UwqA69mofLz1gVKnSGiHb6ck16ozVqvnrAJf3e5GJ3hWTLJfbAMTZm5U8RSvcEmnj5z49KgbHcCuDthJ",
  "key9": "5TdZeDkzoVMSY4fQgM9ZYDn3cbnX3ofyzSsaNo1b5156cy7FXWmYKmedtFBhq45CkqP9RBvxfTmGHHSi1cjB41PR",
  "key10": "35eAaTnBwPMTPNyqT394HSouiKyBY81bScAaJnREqjPRXYvYBmdS77HgkwrAZNnpxTfbp3a6Yxna35s9Mw2Z3qbd",
  "key11": "3KQYmGDNavZvb468B8mwA9dgXbsAinnN1FJ3pA75ceBpAvxmkP9cEtD9nK1BHkebHkzkcztkmwCGP4RE1ps8199q",
  "key12": "37rfgyZeg93gpi9x1fG3VnmimV7mQeERyBtsvE3LJstYDJMpKK8HKsRSKvFK1R5UpqQgU2SV35kCo5XY2CZJ97Ro",
  "key13": "2pXmqCt6SdvXKhPb3SS89U9AR3NRUHBnJDBZA918cWs67MA1gqEy9K3y1APMsaym4188D2rtM1PXFreMAE9F32Np",
  "key14": "5ze1gVJ1xg5rRoNZLVJyD1nBvQUTNbzs6oH71UkDVKDJW5E2JNDRo79gpUXMVAxuSWqQE6TFg1PLMvwMtmb7QWd4",
  "key15": "4RhVHX63dahhnqf1KoGCaBBUWe1ydqeJaxtdkSXBMdhcGkjYKawKWG9HZUt9DS9jGaKLxmXP9oR8AMJeJ8R2z6vg",
  "key16": "4PfrCvatLRJjV9YNP9zm23MvwhjKX79pp1tZisLt1KSwAzfLYHHopUUtgNVk4WxmLGdYj1MTTxRYWkS6D2zWQf7Z",
  "key17": "4PXfDrdcgsTmMg7oLVVaeCKUGAu3QmdwyJudjaXEBv7WAMBD7KfwSjYqsj4uAxN2F2SGzYYUFuReZGsPB8Zi5kEU",
  "key18": "2XgC4EDBsjakp7zj4eckLMVaSvdNXALKStFFe7hsRsAx5nH2Dv8saMgFDjK8AMw9MfnvoYHUyL97CQWun7x8oy52",
  "key19": "5ooPkBtEd7WqJebT5JbTBuukdaTtsbRAkk6FYau74BaQzt5Q64fyxN1JfP9CamBqnUxrsp2YCeXrapSqYTVtzBgH",
  "key20": "4pfuAMRvLRMrGw1JsieFSyUScUm9RH5YWAT4Xt8KgJDvQnZJ3LAXx2yiBRxthFAycLC7qwLGDgZf8fZ8NpiXBgor",
  "key21": "2ERzqC7bS5Pyueq2PwXmy7shjVDQnWnArBSa7eP8hbEQDJiz12huG98htDdFo2erZPFjgvpannigAxmHQGFuDqyt",
  "key22": "dzaY2wJXpDp93L636epChdsXfmfGNpEdwc59j3gb2LzMbZ6FcWXHaF4Deg3Hbn3omgGBTYHq2amT7Xez9CQEsUw",
  "key23": "2zhX4gW7N2QWSSHff4chqB5No6pSNWwUsCDyRMD6MbRm4pjjA12aR7J6sP94onQAyqJzB9PcL4SsdMeaNQyGFrvT",
  "key24": "43e4idcqSr34Mr8P5yK5UyRpmNR5jAye1PCuiGLsd2PKrJdCDAx2aAefoDvRz6D5UiNn8buABbao6JeKiiqw1za5",
  "key25": "HY6yBr1xwWDyZfKF3eDbe7dipPVmHedBGHYTsynzXft9khHqRRfi1ZWhJUZGRiP8FjbnpMxU8ZU7JcPngCkUh1K",
  "key26": "2bC3g3xtm4Q7CuMpH4Tcj6fNhFJDk9dd5Tx1coq8zDe8CYQyZ3vK5NDLV7g9fVHFyhceyRNgaeoDizv74oVnbvq3",
  "key27": "2Mge2gdwoquFNLYzfHbisuZbgj51XU6DBML4THziZTFpjDESonGHrastRfEAjD8doTTofSTQSvJiZBGgD7fGuN4",
  "key28": "2u7waK5Z4kqo3sYxgDyQgocmTUBZ7JDcwR3yaXqTwKudY6KYtrCir91HtMr5eNAiyqP5NSMXHKes9kvoeWQWXE19",
  "key29": "2vP2JTVDDUbiKrwh8exvTYnccotV5VxWav6Y5pSCzxrJ3knz3Wh2ZNhL26BZPdLBpX5fuHN3i7eyPi1w4BkwknA6",
  "key30": "3u713hVgX2NufnuFLhe7VWCpmH9Wgr9jDs29w6H2wULE9wJkm9TTRks6hNYitxXZxiccjA4ycX9xoWfRfCEUjXUR",
  "key31": "4WKUdHN2oeDZm7AUnGBH36ngGDZkvUmso5XQkhVxKZYknxkihSswi4yC8Dzw46syx3iJC5j2MTvCW9F4q2dtmid2",
  "key32": "ukBEwQaDLMFNP5zY4J9YsyLC6vDhaBQSLimTonj3v4MeFbvGbAu3cePPvz2C5m4X59zwzq7e1xc7wf8r8cJBXyB",
  "key33": "5hEKX2hGdukD1GF1jYiWPqR1SE64s2iqK7MKDcuGjGXPgAku6yz7ZWB2VSFpM3hEYtGKVGjDXzabE34cpjo7SxSm"
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

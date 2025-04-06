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
    "2xGSRY7PLDiShDpbv5ckrgeHmFHyY6ubxgHQJfKqPgYMYceR53XRt6vdPdqTKET95awpTGP49wtexem27TNxMeVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zLe41Pj4KL3ku7fhGqd6Y4uD5WpsriuFmjG5B9G3sN2fft2xiX9yhoHiwyiC3XbU4LG2rDjxjp5bzCaTRJK3ADf",
  "key1": "41sW1bYQxcKFdwxXhufQcLmXeuWgqEiaJSLwhpaEhao7E79WHSEGUZfnn1zytxYh63fwKM95YbG8sCQpuenEeAvx",
  "key2": "3euSrtydb4XVrZrHAkMmS9S5rA4uPq5MQKnRGN8mdH9b6HwtXDAfCt4aKSXM2cUDmpRHEjt1Z5XuXjuacdy1XHVt",
  "key3": "Yg5k4STRBpWqQgrfhEBBaTZSpJkbtirLXwojWSXwaqVhUaji3h2nLYdpedDqoBgqVvQAxPE3xZDKwdVkditt6Pe",
  "key4": "3cqjcmCeGVKJapi9Be5uxszwGgiTkCdWuWznFmCSdLyScMXWTcYBJgsd1ejXjyBex4YxSA5jAEkn3TzvJ88XZy8H",
  "key5": "4qZkAq3d1mnsSCdVS51JjztGxgLZWH89Pp2zGB7yvnSnVxcKf3mqoF8ev65Apx7Je7fyTunk5XWHQm9W4ugNpLu4",
  "key6": "3MtvwVH6rEAaMaFLSR4tMNX9RsvF9Zauui2aGekgj7SqrbKSoShd6NFUYc9A9dTehFGptN5obYKbHiNCJsHfMzh",
  "key7": "4a1z8N8z71PonTgdtg8YD2SBhoq577sjSoAwwSaUsXFLs7hMVgyFbUqLA8iuXsjLuQ5iq4NfU6HQ5RZqos2tf67Z",
  "key8": "2VGEdGRcNPTGfz7t9UdLA7LzPJLDpQjfLdXTrBYr7G6KbngXV1xg8ZmXevCE3dyRaQhLdJTQwvYWvCpKmK9eWLpj",
  "key9": "2viKoAQsz231WcvpyMaz9eRk9GN7gCsWGxsdjp1366Cfo2itEpv1kD41WBL4PEfC4VoE31yUAFZkNGTyLdRt61Hq",
  "key10": "2d1gJfSFp6K6trGizjXEApis1KkkkpM93HCDR5X75CGbbwwXhxkCFL1RUJ9gGXeT2jW3st77rxkBDrd7gbLdxRPY",
  "key11": "5LwPoBEy1GYWqGApqA7kpawii7B621DN4M2fDHvzaNQVdApNcCiGa4GsrnubtUmvUZsoLKnDW5oLbTRWHJ4i3fH6",
  "key12": "2esqFJRzK32VY7FW3MKcx7FLaD5X7s2vFHRwf3GNDBNof8VSgurJK19XpzXgnXrHA7ScCcYXQV4qVEY7TBbAWDJq",
  "key13": "2Q6NYuQxrqd21pGhtFufAJShAExA6dBXdej459j8sgbCFRyxq9KyM4DAvpR1LBdH26G5rLe9tUczaFnBdkQ66SXC",
  "key14": "4oUn5h51Wu5A1W5CkFLqtgrY6YQkn9L2AKd2rAUM8BSC9Dv9DXW6giQVAEHk2QWPj16cSzLmeMWk15NRFeVSZ4bx",
  "key15": "5CprLBrKK4G2QjwpuSoQMseVwXy3NvFJK5hta7Y8GrT8ab694f6ExSqzYV9AouSjLA1rrVRCbNkmui6NQyMxDo5Z",
  "key16": "4tCSkgQxXwEiCj3hfjFUBEcaURbMVb8MQemau1SWxxWs18M5wef6tcUnv2QvW8UWarNSsbC7e5BVsykc85BCewk9",
  "key17": "4WnL3aeVCxx15Q6QEMmHvZUBixoTTPbECcJ5hzeMfy66ubooNJMBSYWVvCptSzieYD6W5iGZ2U23D5N2CjHXeTso",
  "key18": "MN91gieaqANfdiEvEcVpYC9bGtT7wyfGrxtx52V9Yw9ptpACvBTP78RztpKQbzVknq8nKCz9dwmPig5hrAN3H54",
  "key19": "43czMnRuQ1Em52LTKaMuTxCAPKe4g9hjhR88wqhBNLtq3njsxb2MvNm62z1Yb4baeYkYBvPH1gNC6fHYMVkUBvcp",
  "key20": "3Hbp5Qgw3AqBiPUBmuyg63Vj2zxyi3JS44AXGeuN4W5pjZtK8z454gHFYZ2kDPtLDizCMKt3VdSNRnE6Rqvf7KWy",
  "key21": "4zakXeNcDkLz6LKe1GxyJcUUqDcibAikMw5LvFTE6FAnTdJaGqEPXPfw8VHwd37M6UVs9JtSEMddR5bRuLSbkvKR",
  "key22": "55mAFBMSjqQYBtuFmuqCW6duFzPLCTid75sQwYiYWC5wnUbDcvCf9ZVCT4XwHZDK6o2TNh9YHgRAKwjxSw69U6bU",
  "key23": "4Bfgg7fyV6G7wdxPzDeqcU8Nf5sZ8NC9GVx4KxYYNw4Prw5pUkMXgAvEm9hnbzfz8GFrH6Ae6DkKDAd2jLCmFwgR",
  "key24": "3GGNzjGazHoRBQPVzJqobTTVsStJwF93bF4bjo4nR7rZLoaMcDx2QKQx4qjxe3ZundxFcYyZSt1qSauWPHfKq76B",
  "key25": "3LKSHFR7uLJU11JPYBB53V1MBUTwyf34APTTyD8Ub61trbdQPifNbd9HJM7EWM8JZcYd53SFR6ezGazbi7ADfXnz",
  "key26": "5NtA44vQipeFNJ6zmCSdbVxZc39Rc8YE2maqdsF3atNgR8Vt27NkBo84gtVXjWraz3V7AtzFuDPZkEfmKZL7Hpcc",
  "key27": "67UfyG5s7q9TgQh766frJjkGphaTFayHZRH9okxErv8UMKZPbTFJ7uUg8myjAcMKqv1oux4dgs3G4QZh6fFck8TB",
  "key28": "5xusVywK4Xcb7zttbL9A4Nuk3FxzmZNAnGxwJTz9eERAzyvhErszovBXyu4v3H6DtA1Vc6uevqfmWKoAT6tcLMCs",
  "key29": "2qea1KNz4cNAhDvVjmXU3KMovjC8dxV85KSV42WobYcqfp6Yfk2i9Ymdq1m2QAQ2j3RQa3XXZ75DaZrwTJAutb2q",
  "key30": "yjtFCXVzjK2wX7y5YjyDHUnPeig3db98iWEKNzDfXpH6Ea3R5TVfHzaRJTRh97MyLQg8FXAn1vSDP4YvkuwWxNv",
  "key31": "2U88gCYcLUz1AxaxLp1Kd3rHY6zpAGkXwdytTfNXh9qqshcT9QgywBKq3VVrTYKPjqHK64kVUfmr6oGaNVcuNhiA",
  "key32": "TP4r8YDWSx3JtMH8qocJxU8zdt2iWkQR3eERgnZbGur1vwKnQ2aJjz911mPkJC977RuJLm78Za4ojxnBGLBRtJu"
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

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
    "CdUw6t6FkcA9J9Vb8fbBtm29roWgZPaUYmQkjjkM5HQtwYDqzXrLmTJeBmDeUQunLnvfv1WLQ4StGzTQBnyCFiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N9W9gyMSHi68G8jnuML52L5qMRzEJgzHPPTiS8iDrYUHJuwYa7umCATdfV6qwGzJXA83hsxJHVHe1SHofKr3Vjv",
  "key1": "5AihuUFRXaEXEKGLfMtceCXSSk4V9uEC4yhffNh1J2FBmuPX8PAPu3xPgDx5NegEouaUWFcp19UALBq5AohbXHbh",
  "key2": "3qxkgHF5gnsxe7bNiG93U6XEnAYr6myM4mhagdrNmu73ystf9bPBaWFxLGJ1iGnTtzs5ndUAbhGZ2VyWwgDjfjoA",
  "key3": "2MC4i14vyW9uNZmv8EzmriWWrxRutdnuy41wa6CGkMLoaYCkrTSeX8FM3imfZwWJVfie4GdUTkJxNqiY4d4mF9QL",
  "key4": "4n83d5fwAuY4PPoAA6yvitCqcjfvY7jVQqAdDMpufHFwsRaiAHZVDgnZYBrvgs1GAGWDe2ts51QR8bctnz64zh3s",
  "key5": "45VLED3eMzbaRBCjYMtBCjQQxNNXSjPChpyJi44FLZKr8stHC6hgc2a7kNt5HbXH4sWXtUK8Qa2tf6kYJiVmALnc",
  "key6": "3hW4ahyXuVNUgpb5xJUqFLT4EkytHRGYbUjoyaMp2VqjxLaJ7aBAXCTKJ6o1ZuJJbZSuds3QEvugYutG2DN8MiQ5",
  "key7": "5Fcs1sSLWCuskCyJbhnY3BVUCr5gnbS5ebCvhJHQh9d1Lb1ygk2HTxoz1y22PoCir291rvtAufjEeeBNV1GytzUc",
  "key8": "UbNgLEaqbJqrYw7sMAZ3aRWJHMS6Z1aJirFhJy8GZsYGw48LcmKsAQRbbfDHG7pURPjFaAcAMVvGoFiqbsPgzPY",
  "key9": "4Sf7R7adcmt1ESsdXXUynK1YGg959zoBrMouEMByaD2PZmHbr83qQJ4yJtN8ZXTHbedYfm4MSNubqruDLe7KnKBy",
  "key10": "5U5xiUGuoPqi6YcrJdqW3shNnhDqLsuezPNHMKnsHec7pT1k4BoZdkQ4Q1CLNaaXZV4hw7UyRiSCmy3VgQmiTkMo",
  "key11": "3QVqUGzC6XEtLSWY9vzSejG34PSSNp5HuuqRxjh6RL3NEJbymp7Mo54c5m1W2t3jAHkVrF9vsUqDzXqgfzzzpdUJ",
  "key12": "3vT6QEKwuqyjJ6Mnz2FGKKWHahmPYutVDBWZi48UZ8tAmhzok6n1ZhszTo1Tv1mGarK5SzLhq3wjpuTdnV1qQsab",
  "key13": "3VkoK5UXfEBkZr8pHXKz6y7Gv7KRJ1i5wea4u5cBhwoDc8aJp6ApStb5pMtSL9KN2q3vE3ANifpQCv93ny4MTFBn",
  "key14": "3VKpK3BmkzNn2sz9NQQnyPviJEKMdkH4EejU8RBprb3xZ38z3bpMoadhvxrLsp2BP6vR5rVzizG6KoBbfzdYMsGU",
  "key15": "43e4A6uvYkTkuXJ5A6zJwez77UxQ6hT4GvJL4crrPYnsgaNecGcdo2MFyYsKUU8tY1ak4M9YUB3hoiunGUzBZqoc",
  "key16": "83sRaAXuLn1v6FBQxbXKHdp1CA3E8WzJmAVWaTmkHH4HoQtdzygAQgibX9Yo2iWCD2zqhHGqxNSdArPTe3CTCjH",
  "key17": "25t13m2FcwHn7Ur5uCsHGQT3bAYc53EAhQS1VQmCK5XBf1n1HVQygT6V3vc9twxcjTy3mwz9TKG5xbnGJrpASpzC",
  "key18": "2kpceGv6jVSJjjjGZNHWGDvpPkghPg5t83cYW4qHtwv3jDKxAmzoShdAX3j4QZwTaDL5A3gEJRhfZ3E8P6fdnVhX",
  "key19": "3j23WWe4HTaPnzYdN1gqJZS4K8dJ9Zcx7hw3MDC4AGHJBcdp3vRBcQdHaaGwvaVM24cwawGC98rrhm8yLhi9KQdT",
  "key20": "2JtP81qYdsFsnHg3yh87tek2uq4WMpnhmwjA38DQVxeFdmKxMia9jFQRRfeQXWNTB2AaBGF2hkEDo61NehdWyEEz",
  "key21": "2sZ8JU3ChzA7ivs4PUgYisofqPMSCxp2VZmM5B8ZMfwjPWnEdhGXfrURPU1NtcXCHtsoQJvbZktEfkkHtVj5wE1K",
  "key22": "5MRnVeQ6XnKwhFtHP9gvBf9Zf2L6KrHVbCuevTKh5fM9xgaroQYpaCkVJ57MkhfBuXFR14zfzxxM9FeR4ozQowXf",
  "key23": "4LbmhPB88gGfBYFWbv36rSswaKE1wxnweFgkUco8PMmfvjGvG6qp5nKgSbR6Asav5FtdbeesgNgbWTcJvdUhxtHT",
  "key24": "4z2Ev2UuMF5F8oc2MwbpHeGU7QYW5bKtPRruXTKApGJprnCzPw5TjTR3Dd9hWNQDy3MazTMXLSTAuCBwQdA1arpf",
  "key25": "4CwECvp2aniWtqBpcXBQMBUczn3qCZT19VqFwx2XRBWtmPm5N8x6soYJdqTrzMHB8bcJ8nNLJSsqnAYxzp6YH6Y1",
  "key26": "4suC7vR1BYVyupu7JSxYQJfutwSeGvjtWrWxS2CfLMSPLQs99GdRe99iq6iYNvxe3PUQoLsJdeVCCuBsDYP9ZJLR",
  "key27": "4reSv6goj8gNbyKjQ3F7NG6jRUm7LvVt2XcY2hsXEgvuXc9g1cwZtuy7MoAzkYFhrg7SPLFrrh2yFHgGfqvUpkz6"
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

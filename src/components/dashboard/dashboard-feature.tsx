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
    "4qdGxivtaDMoUiJvKhtg6g7aNJqPnj28nsfC8LBACW4JVtkEdRKNhV6ctCpA5u1UjHxXA64ntvpP9AEQeC6Q57ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RnWGeboVHuKhqwVaWReavDsSoATTHEGMsD9bPpDVvzmbWMNGFqX8SWLj1DGAmmHtzaS73edg5Vv5EDHiXEiypdW",
  "key1": "viYZ79Zto2bj2YU97kqp1eQU8kBbLLd9PvkwF38UnsNg1zMF9JNizkKDg3YorUtJGbKmAQJHhyrqmzBwdVYqu2d",
  "key2": "3bdVisBRXbgNo9wdpV1vy6zskq76NoDb3aY6R5yBWgaRBTJdR7MBhNvV86r7QfGdG45ajgQVGRkS6JvY7uK5P1AH",
  "key3": "3bSTfXGRe29bpptpQZvhnTxcGJnBPNXCvAjWBo8cwExKhpPLquVD2b8M5fdiPScRbx8BgCYKA5VQRbdxAsZybCXc",
  "key4": "45fnpZffiL1DHJaAXrLKbKGBnhYDPyyT7tK91LH9eqHURExJ5k6wx17tcqeetxxWRtktnQhEJT2J4DXcidqmjmWh",
  "key5": "4Wi2QcFSJ4VYtNzJqTi9WV8N16VMkB9NkpvyhTcwPcGC7Vjrq1Nkrbi9WrMgai891YeKggz3NiogeXFJtdWDr5RB",
  "key6": "F9hp9CYZcJtTH79zSn6FvWTYbqKHmpSKdWqJ5cy7Mcb3rahpC7hGFcBMixYoUC1FRRixH3kd7QVoaFCqnaQpzNa",
  "key7": "4kuuYzi39wLx8Jk3GATNBRfn8F8XLpHXdiHrtkyyAMMckJP54G57vvGgtnL4snv9F52GRU4wWoLg6Byy2jzdUrcf",
  "key8": "3s5XEhoaqsjVnPnXxgn1vvhkEvjUN4SdQaMqeUZwiV8xaGNhkyLvMfAGDnoGkKZGnVLWjRqX6iiQ9eft9yh5fRsW",
  "key9": "5KEAfskHRmuCD8De7FKWCfngEuLTB4i3jAwUFUgwEiydBe9cEo7MSHsmqTbcCGuN8KZjsm72xw8vF82XZXFMdNnn",
  "key10": "oTUKvwUKed5TcxhAGQK9Wxi11Q6W6zUCkMyyet3ysWbTW92s4iTy7nuoPwujvbZzzq5owZ1ZNnCWzyBK33NCyPG",
  "key11": "5vgVgevjAR8cfVwqeAzrtqXybgCdDYy7YXy927PZ3McGhwcxbF9DJh2rjUPTnE3QzRMzSamG9UhShDprV6THdUjG",
  "key12": "567jCBxUby6axAWW5tSrhDNR263qjsDGEtYAHjT2o4WQMYfLoGChbjaNudZBDKE613ns3No7BcaZGWhUMvb841fB",
  "key13": "2Hy7XzdWgYnwnr7YvZFFopTwWFfq1vQ5F8gJhuLpYGxo5emiNc8FYCcr1T9XoB4RsVPbfTZyvBzLL9j8Vdih9cvS",
  "key14": "4LTrMCMKFdRpnCwQMKwijypmQQD42KLT7G1eLwCZWGyJbmCJ16A8QKmhokG8NHdpXGzCSR1ydJQoinTeGV69DxaU",
  "key15": "4ntayeDLqBiekHV2e76HDjqjy87CSepbDEzvM7nEnrkKD8vvkw4scWq5wMcesx8DA6M2SiHbFkXYJa9hvZiN81Yi",
  "key16": "2nxZQpJBrMJkM61B3RYXjuE72m2dyQQGgHR4TLM9AhCXXh64MEApmHWUrhiY7V8FoATm6KTYJa5rs1hgAB8iJqqu",
  "key17": "zWu2BMrSqgK6PpAjC1B64vj2aBeTxizTa99hG358oVdejfUJNY7m5edp9FrtwavZNAqiaXCD523Vc5waqbJjJMo",
  "key18": "5EUjpPFsomkMvTpKguXZVeEeucNvuw6346WPJFiFd7yu3rE4suauQ7wTveeGTLRZFWY8sNmFr2MRaCkrrA8Kjgdn",
  "key19": "piddiw1bzGkYtuvm4aw4zkb1jnCKCVQMrPysqR7ayj4hGVW45A23tyBVb95PncK8dkyNahMZkxZWJS4T1YpHvUY",
  "key20": "2YLPPrUeEFZJCxVcgaSHaLYeJUJ761h2J9REA98NqFpM2w7Zgu1EsGFBTNMJ6uDcx6AF6Q1zGi4fdXzMCVcvCc33",
  "key21": "qeJYEpkPezdc2kuhBP4rmR191KAVzfL2f9d9er3oEoZXJk4TCcjXj5Lcj4ovCqXevUhewuA6H4caysqoLjMxuP3",
  "key22": "2bH4qUaQ5BWhtT26NGj2Dj39Rv2ZZq6uEV43ionHxoWVc5KUN1qNdGjVXacfvdUavNrdWS5pXMzrQQZrDKFQCAoa",
  "key23": "45gGqcdMqhwagSJuoJAAXfB8rNjKKBsPwt2VztnezPVW8rXRAsBoJutRc1588yuFvwe7oxrLKKcKE7ty7ijRXg7S",
  "key24": "3my4hJVRN42t6SBJV3cxzU9EqR3grVZcqxxY7id9zfknrDgcy8moEFZHREknDtW7AZCh587bx8f7Rh811fQ5HrcK",
  "key25": "4g8rHmCiqEAfWaZLjPAMakd2LTBycZH1xDvFdPgi8xGuxGmLBqXqmfoiatyEQr3PrSs6vbs8AiTudpfbwH16rYQ9",
  "key26": "3qPQqDugmr7qKR5f7wHDQH4U1Ve1pykVLpjdcxhyzGZdM2TRmgoVqNXbvvnMsyw9bAuEhaJKU6jsxBcYjrkpaX8S",
  "key27": "3QnCCXAbtH93KZQcpF87CP69xuHJziWn5fVe1Rhxe6YjjjdmDNj6ppqzgnA52ziedJLSDYUSkYAdzsBXBDjMP71T",
  "key28": "DxhVgfHyWfZeVA6xQRcXaJdau3RA6g2RoWCERoP4s9qTMaKvCZDTWBY6RX2BexqFswfVwodzHZHF2P1UUTzLvQU",
  "key29": "5WjADckMPs61JcHHjLvq7aVxEef31TQYG9PgVHjFVktJp32qX58k8F7wiXwhAT2mNvjG4zDr4XYtAUHLfdyE8Yyq",
  "key30": "2MZ8nmfmhjJikgAHnvUYeyYCsk2vpMcRhTKdtRdByKvnAbWc32PnpVKdsUYtAdfd43hquG6mn99cwVFF1e1oXiLT",
  "key31": "5DMdRv9MbMyTYLKiUKj7Pk7ChE5MQnqYXk8FWa2CvdqXxm8V5FKa3m9p8q6B6VzkqXCEyLeytw25oigKfbS6xEzV",
  "key32": "4MySG81N8xvkenz4LygxPAGP7xASWifzbk3D4nHy8Ls5ZVAusTp5prksQ6mW3s8qYgSvgQUzDMp89YKBs7xG3p5H",
  "key33": "4zhNqvr8PW56u2EqGXEPnqkM5SGCwjepgAm7MUCK86PiUkzF5PsaMevUczHKe7S61yKQQbADog5yaENsbtnQfxmf",
  "key34": "4ZiYjLxyc3sRzc2ToquFsxB1vnxGAAuLXXNvaZhh5e8nukrtneboy73kbTWKFZjJXybXqsNuysKoc8691yRMeVHK",
  "key35": "2ZwPUxExhQWCX56DbJb2mKAQTetn3MAXAhDUqYjwS52By4Bdn8T4vDSZ3rGWJFh9h3c3RUGJHS8LrynTd92ee1kX",
  "key36": "46YYD5d7nfwUJFkKs9T3PynTjVMbLC8UJ4U9GiWw19aB7Yur1mxBNrpheG5TYK5wSfJbpBqwQVK9vii9861zoyxs",
  "key37": "34HBx1JF2t6RN97LKhgPqVf49vFqj1N1GYRix7RKgo5iX4WzFdocXLMKrMgKGGKtgzusZmgiRhhLXhWn6ywup7ux"
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

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
    "36SgMbVCBTHkgdAtKgmeMiQ2JC6NbQZzYeC9x5s6tWmwgzephzAgL9i5gCjedTy5dvNNtfb9ZkHBbpDcrWYpbJqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MGTTc6LWwSdYATZGNy4zkMMGaRTHGYQcU15n9tWCw8DM3VwqemCTMweGxm6yz5NEfG125aDVYrts1BjFWUKw9ZZ",
  "key1": "3P9YFnqYX53gTWBiLoZkeYU4gXMpVqCETpXyiTEMyQQG3rXcVCLwhp6yGjTPLKmoF7rJxeYipFw6e2UPpiEa8Ybb",
  "key2": "5Yp5cwCTdVMqgoGH4ahk1MRLRo6MiLtskQwuB7hSERrPxTqBFcpBKeMdPyAWLAPUVRGjhmXQf21Msz7BoFYzW5eZ",
  "key3": "4cdpDc5fMBNRDBWUwxboDLuW67xm2tg9dEEV6ZFcEqee8neFqPpoQpDr39PV2GdJo32DPvMrYbvJyW1js2jMnAMS",
  "key4": "UDgWze3VESAGPk1GuwfTCebzCKwyTWyBqFRzBqWYFUcbZPTiVaZZdRB3A3DT9wEnMH9kt3sXUxJGArSuXejXAoj",
  "key5": "YhmDV4kgtKm4DzjGCPNV3Tfrbi1vEmyQdAPyxNLvnagVGMcGxEZACuJe7jTECyS6k3RDQzrFm4jMXiWa9293zpv",
  "key6": "8sQEFGoks7XZGv5kzakqVYMUNQbTHErFokaqcjMv6gETcRM7bTr41jGAiQooEgj1R1XxrLnZjmf4FhJYPYZecc4",
  "key7": "3Zwu9UfwNC5hHVPaWvUhxGZSgKHhEUzfSYhjuJeaxdwFZkq2woxResov5MKqwrFmBBhN9HfKyx1ECRmDDzyvtz4d",
  "key8": "5bW94DNxyo2sTvcUF33skUFanGcuh4ynSFWkDZSdhXKbtQHvLmT1dyoKabHumBVPxdb7WZnF2MYjFfCc3KY8irX4",
  "key9": "5Fz6w7neghiK1xegjRvQipybESuG9HnE25zBTW5fj2kuQXh7S7xQSVSkhstyDqmZYAuE9B64RejcoGAGSYrR5DYV",
  "key10": "297EDvfsTdL4LcPZJgbVaA7bnRGNj3HHPX8UoRzsfAMn68xQJTcoqu7ZRuSrkg8rLrPYdk5mq9RtzQ5AnBZ6pgxf",
  "key11": "61ms1M5wqsYbXcixeWYp5K858qkvyuuVDgKiKbRAAvqyw561Bb4dJb3fUiNw24ZCvCnwu5FhETJMLA9rjE7LzriR",
  "key12": "4R5N5kxboAmiYgUsdMm3H7oa2hjzC1Pz9cepB5UiUBJCYkFFYfVBjzpVbhJdoVJdtQhjLY8WLzTTNPUWW5MbixE",
  "key13": "xxbTkMAniMRhBJHGCrJsAXdjgyQsz1HB4gAXTntGdy8iCUD3qXZGWsex8VZqXc21W94zKeBYSAc2akpGjBZjVbU",
  "key14": "njySRcc4oDFY71TeV4eFJ8XbbcZoAUjWYVBb5h6Pc1C3trBRzBRYeQitYEq9ZJEoWv6kSaZHjyYAYzoJ28ekYSn",
  "key15": "PNCiHBSMLHA8puuLmx32os5aG4fe6BX4Bc3obbLjEgjzXXJrw2LewTZnwDcjSSBP5F91jan8JJsu3hvAWq7uruQ",
  "key16": "5qiBfSJVaSkMSMZUdAVt39VxpmbMmy7LGap7KwT5JE1CbmjwYCyS4XrMhuEi8jaevBAQaNsTv1wfEGXTGYCNeekD",
  "key17": "38XLVbrnRjXtYteGgnHGkD87rqaC12NQE9HB81RURgfPz9ZdL76cw5xsK3B4Z7TgjEoC6KfEmHF13xWTU6SrMKkJ",
  "key18": "4YeFcmf9uekGNAHN1qSoMcLjPuSEETDB4R3ZXP16pCaeTm14NckN623cfcSUP5WmkX1qHZN2ENnEkcrZpN5utFuP",
  "key19": "45QXf72Yma7A3PVtoGAfrjXorgRyTEXxwmB9XMWLiAcEudNKJER6WSjKNWXUGCTFchxbePS3d81aTypyuY4ctcu8",
  "key20": "4hKSFiYmoZVn1wZbPiKPHBAo8nnKHZqfQ4kmGz628aXggcvqoPpJxP17AvJFWDPATegdo1P9324NrEzegUuUxvSu",
  "key21": "suPSUHdZ7aATKe2gpzr1DDFrfNmEQ9bLW1AWxGAyZ7uByDkYpjAk2GYsKUXyLbcnJTjEhvigGTm2TDc9MzV6mZk",
  "key22": "2xBsjaUZdARqmtL9BnQrfQi2x5rtwfhpUdabpxia4ixGfpEzeHgW2gMpoB39tHMEskmSqMYLFXzYXuFgF6E7W1hS",
  "key23": "2Kn8iveH5fVmAX9XcRu9f16ucqyijdFUoXu4PAU9JJJDVGX841tQTyKFcHxrfe4uGKezzjvAzWNapvsrVgXtXv14",
  "key24": "RUUHiw8ZA53EzZ6PSZ9EHnAb9MaGzRDvgmt8MomMH8AaoPBczY5CXoteHNeRga5jGyAkaLasusmYk596XnvNB7p",
  "key25": "3uTa2kBDknD7zVGY2JjwqLqh3ULN7NCFpbZMTqP7ePanBwBA1yMA1VECT8zzRqPEwXcaXRBX5ToqzHDnkTaqf62b",
  "key26": "3Wr3J9TpWcHBkptJNktTg9EcdJqwGAf74cN8gkqJRqqudvubG745yMV3ZMBWoCMPjdXexQRVsQCPRocSXXBKDDZo",
  "key27": "4WB9tW7vF5zcu3p8o3JVKUsgpgSYkV5gMsGUPhq2i8YwVqqePu2fgNVxdFa9AUkm5xMdQkVvUGgG5q2aucTmyxz4",
  "key28": "5jyQH8csnsQMpgpbYukCk28bUWVLuN6xkhzvMQU8Q97aFW6XVvPkjWX2kfHMPA6CFSVDGjzoXEPpdGowSquwyN9k",
  "key29": "QURWCPDEwDtDCjKCYPGRwFp6STt71STZ5E6MKL6UPe2zbEA9npaPw5Jo9DSsNh5veUDXNENEXmHSsMotcUyTg1z",
  "key30": "2WG8hsbjqN2Nj5YPWCkDZoyRhoR1w4kQCR76xd37yggCkDd68518DMDKy2y3kNRKyPCGCG7BhEMxQ624UyLxLtTG",
  "key31": "8WUyVr6cr3rXVyeT1FQqLAmqntZKEuvxj69KrbhfgDfTxyDx6yvBvt9Sn7YJ8qE7ja9hZD54HwDxMqFzJo8w135",
  "key32": "57Bh2WhgD7qaEMSY7BiJQR9cqbHt7ALHLa9eUu7BmmSXL1EZAwEkRWGmqwxQbKVZJ7zrvFihhKn7bwXkM6SmHCaN",
  "key33": "3zTadDMeF2dzjHgp3Ho8UQrNQ72uCKe8GkDudE43pJcu1pL4cZdKUrYsJMv5dteuAippL7qeGtbCVZUK5jQpCxY7",
  "key34": "2jnHVXwdAWz1DE5zsp87ZNsVwkhpS4cPjkfq7tc8QJfGNwPAsCUxght32FWaSKE9YiEdLHL4MDuhMWwoDzokYZp3",
  "key35": "48MKbPvfYgPcmqYEnMhvcyyadNxntnZ7HZJKTpdNdt3fwme48tYHNPqTMZE6Ly93sP4h6VVvKNtvkB95mL5xy29",
  "key36": "2FuBdnfyYrLgtcyGgzx4TKMmBnf8kv9f2C3LSoixeQKfo3NagyYyLsiZmn9CTW9vQYtPBD92gRQC1SefPPcqHWyU",
  "key37": "5rHnmTJEWMSpMp1u6MFV8snSstXkKtdzi2Q7aGX2AxdKeph93eirNeTeJyPbgDMChhQx8TwJNTdf3cdKAjnXSP3A",
  "key38": "2Qqo2ZqGejJizXC1YTPYXoApB8Ny7nc41vKU8ChaMpurqc3WgqTqutPmyXiyE8APwan73EwUD5CueUW4aFwybFVS",
  "key39": "4128KZtAxF6mr7D3Z4TcFdyLUX7MSkwPhfVgAFk5soXapcVVAP927wcqHhKfh5q2DUt6oLXZKx6J2fPSAFz87rgU"
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

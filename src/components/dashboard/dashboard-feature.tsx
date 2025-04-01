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
    "2XjDzNpHxjhugw8ZAbyWGhY4CHkng1pbxBv5AGbEfagKxZbLoawcxeVJdBs2pPTS8YWeFiAW7WuXMxhSrYY36zqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xR8Kf5qPxb12QZ3kpLpejWirUtVzVHJoE1pE2b31k4AvYuej2AmJBPmd78xHNVherqPTjWucMCUn88TofKkF77N",
  "key1": "Hvxap1xK8jDZeLwSaxvGtHyTWSQGbQbjq7QNbeDwSgGUp8yYCaU8w1L6j2gneG46bKJAfLmnWbHND2qJh1VD75S",
  "key2": "2TN6pJzd1HqNfTrk9Ts9ntgeDiDL84XEmRHkrf5XDdxAeiXaAifX4m7nB7jTzk5uSZZ7Eyk1bY5HyvrRdoUVRUVV",
  "key3": "5gaUNkNXhBHi3KxuF1UPBcJzzQwNNLvdkcbjAM7qckf8UKpRSc9LFwZeAKPjvhQMc5cLgurcmZAwKedWDKtcJNJw",
  "key4": "3Z9pmLgVQteerxbbp4j5Un8LCa29ozLwdWLyqiiFStcrxY9GvLZrfPwHBeb4XobXhTv5Tn1BzBNKtLhNXnGbxrQs",
  "key5": "5aPSVtEzcNXHyeTKAQ7uiwe4zjgaTURfAyQacmZHDMDG56TnnWztddcG5THrGpL1HoQPRq7MkNYJLyMFqFqKtYYt",
  "key6": "cn4JHGnj5BzMn7F6gzHUrUjznCXkAGWAoBxNA7FYF9tnWaNiZvxJGUTA1csHsVMsWMqmDnXFSskwumLyTKiXrF3",
  "key7": "GzzLTYo68ZavFg6JNVZcrYSee4oUPfjeZYsxBCbH8b2qM3iF4YiGncRtx77fU7Ge3uMQu7KeQ2P8F58FS8rSPBC",
  "key8": "Vm2HnMiH8mWtnSEYtCR1ZLzTEJQdgCknt7KR9Ce94XVKdDGCPxup7fo6xnyYNN7wkkGyVyVbHNcCnxfoMVNQ3Uy",
  "key9": "4f31jq3vjKh7fEfVWxQ88f3H7Wz8WykJU4Vx39Tuwto9iAeN12uskNox2cuw8DcESUjt9FnfNMGRypxoN28NhhEg",
  "key10": "5MwB468ks8C4TecCiwm9yzQLtqArVgt1GAmyrCCBP5VKcsUEkMUsvCsN7v6BhhS4pYBKLt5ptriaZmRhU64D1CMH",
  "key11": "5BBTUPph3yyUAM5k17i6hkZz5HVvUez35KmhJacUYcnLGRHqc8ssVoBtz2rt1cA4gAWnuTw1GTCpceAnLooSn5gh",
  "key12": "3AgghhoquiK9SKZcSmMrcFMfja4WaHPEjKFPqCA2Xk5pL1gc43M492auwbhgePZr3U2AqvXhTf3a3Vjc3qBdNje6",
  "key13": "5QdhTYPuM2e2rtzdBN6dB6RdHUSMu45eRRoy6oeu87rjEJ6NgESaHmvqcReHadzFxT2ZKURBotdqBr46GNRb5wwv",
  "key14": "4ntLTws4aa2WzyBoQ59wg2seU173faMWG3FMn7LyPRgM8TtRZhngh4TfGx1TCn2rmX4tiJ3DUZDDVv667iPzV56U",
  "key15": "3gCKai2dPE1S6MSkHxNx9WKP13s46LX3mmWazs6pgMHRqeQ8A7RKdmYiGLUa8cbTR2u974z1aTVxLh17p2KUWuZY",
  "key16": "4SWjkWPedPD2C8hsjyaWKR5b2ifYSKzxKpu2uS9jfcsVwQoNxTECgwpToaptuMEdC7ttbRj7nmihqyj42RXUJoBk",
  "key17": "4nqYLMQWXRwNFZgLXCCnjJ7svjrauKP4SToRur2uMfHYA6DReERPcvfV33kg98wQGZVDmWxLzeJVfT9A9M3Yayhu",
  "key18": "37vCacyYEfCM7xtuntw9gwaiunn6T93khz6Aj4ExWzNSJWSoRNyucQmy4ELTAEzYDPZLR5PV67AZuviU13EYyKNo",
  "key19": "5BPBhQTm12PfH4tmoPyvANT3sRyxck6YbfsmDD7Y7J8SWrtBuTRJyaRvNXdtZbVXBFdEbLen64ockFUJZykpqYwt",
  "key20": "4JDxcPHRReRgF2J5zaqJza33wAv8rywwyt1s3kRHiT2JmaoW3bz791QCsYj9ZKAsG6uRgRsTbxtVLyvmkSGbAwbM",
  "key21": "2qrPDzJ5JaRiizRLoiGMUwoHzZqQQjuDQe9t7nwt3drjS9pi7xtiPRHUvE4vq4YGK5SyvGF4HJpdvtcs5EzffyqP",
  "key22": "3yWR271G1tJWkJTrSDN3pctN5YdTem28onypX4TRrBdjcWVjcAYW56CX29PoNGxJCe3NZeK74NXgudN6tmBU4hCn",
  "key23": "vwiRFhA5uFAXaAtEYXxLpf6nn5oYVioQmVg2egKdkb1KaUNt2pdnH3SdGJu66wYYhE7Q5H23yb4yw3cAdaRGSna",
  "key24": "5xLLGkkVyBhRs6TMbCttSXJDpUYbdWZ5RqEYgkY1h621uXEBbzeTiuVHsmSn8iLcCiCpwFrnxa3KuKC6NcWMSScW",
  "key25": "62yNu4hVt7NzycsJrh7UqNBqZJB9fxJojPUzikJvY8NrbbWmrNnr5opxCYGvXTz6gnuXMqy16kp1a25fsdM2Yc7s",
  "key26": "514rh4Z2kyPjZ26RfTj2AvS1ccpGFA3GYNk54G4ZEkuyYgQ6BcjKyAhiDKG4RnhHRkBvLY44ZotrYMMW9xhhVn87",
  "key27": "528AxhjpUH7BeU4zdim2RKhC2PijGWqmJx7oPH4tr1Fw3oGtGAieF71GUZQXuKW4ZWXQuH2zvWpV6eh9xyAYMJKF"
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

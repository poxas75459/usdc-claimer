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
    "4wSByb7XYs3Vwm7rMKTt24iiBZzGgKCH6YuiugTrjCkr5GyH8YKMnK4GUVKUqknvmBQvY6R6bAdHwSLyZ5oP1JkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uM7esHAJ7G4cHkBK799dAKMYZ5J6q7ygADvJNmnWJr3r98TW8VxMkfqZjZyCBtCL9bKnfaVx55cHBo8kjRG4TDb",
  "key1": "2KqnM6T2dzEHwGHgjtSbwiiZBsfMjmmb8VcALKbar7BQZY3bxgY2PFekuTcpXSFZH8UtkzgLQF8vy45WaM2JvmYx",
  "key2": "4521fAd25UxMCEuFrjeiazeAjo1univ3J77XGhvaYLKaLuzfRv7ZjJF9s6kFPT25GDGgWVgRdvLBt7T4UpeKU4De",
  "key3": "TZkQ446nppvthtx3BpP3cyhTo8W6cjwDKagPUkn9QCaCGWxqRC2tV24MNZXx738WxFxstFUFCCtkgG4AMonWSuM",
  "key4": "4jRr4xXyWrsYL6NdWav8gTfFoHf2epUyk7jVQ35ufKwXETfA33dWPAW77BWtMnD1TEKcm9iHA9AwN3gZgXfp413c",
  "key5": "5vUXXsXHmGxS8QYMpMZTFxvTRYu4DUTRXShY8dCB8fy6swgvxy1ueSG3MrA33vKZJEYgAzbbYM8RVUyv49CRc6fp",
  "key6": "dbREzLphgXLG2BUq4Cpz8kHffb5cN52Gfi7NsiyNi6UUQybHbGh4iJdrkr5g6Ux3kK8tQvy4aktYjkZDMouWDNB",
  "key7": "4DK4mf5SR3rHgtW2UX2z5fq86iMVU964PYtAio3uB6Pebgc6YKDyZMEU3SoyPDb5rMNRj4HsWhpeyt71SnNVRZ1j",
  "key8": "3JZ8h2ecAj4ZWfbJvFVFcfwHcDzurVbtKDihihDjgpqJhhqCY7Lc5UiN4hX7RkX11RM8UwCTbvFK2F8conZKju41",
  "key9": "3pRryFN3buHouBgWkLNrH7Uy4MwcvH92zuBZ488P3kyY8kRdL9Von2G3N6Pf8V9pwdVajkzYpcu3Zu29JRNtg5DD",
  "key10": "LU1YoKzLaHvsq7pGBsudCYGsoxT4iiMzeJX2qsQCDgrfbVGEUruCrRQFg9k2NkXA8CqSCRM5zN769igKMyiWGqS",
  "key11": "5NuPcyx1J8jJSQ3kn4hssnwiWsGSK67EuD6NLz62dFb532ZfXdemYvZnavJVyyqgitp6TDdnRTgofN2zPwfo42mN",
  "key12": "51i1bUSTD2eSiDhDGmtLeV6t7kQmnZwbUEvmWL911sJQnAJJw7vBnGaLfS1xzoYavmw9rXBTecTmTFz3JmGSTtey",
  "key13": "5WC5Ei8vUuxTGeH4sZatMGUfTHBcTv1fdAMjCrz1UXg5JvDkuFEWXKv8JrjbYxiuBqCwkhetvDXC7ZpkHm3xWP7Z",
  "key14": "5WVrYhvQbzJpf5eiXfYAFVXLMKRhMKaQCZ8z4PSrnxaPQG1LgdDJYcBpWM1CnxiibaQBDNpejSknioveERaRRb4W",
  "key15": "ukGVEd52nPo7kNH2Rjre4WFtj4yhZD18TiLmdxFpDH1nSNLYWuQazahLaTyR2mdq8hCd9Ko41x9NujMbvyon75Y",
  "key16": "4GUFdGGxafRz5XGPmdazdDQpFyTmGpHfWMaXBYMMXSnxjMVeNVnvM5xYHrdfxU1CQUMaQssFXd7Bp5dtUWmSdNuA",
  "key17": "bASEktd3fhxzCXMiaFiL7WgNps2hHCrDnhfU46rera1WcpZDTZK5fXMGQ27pqtMZtjxgXyctcFjzjih6NDWQSTB",
  "key18": "R8rp5kGhqXp8CEZ9ganqsLMDfFm4mhpH8nbRsqguruYnEP6BB9BFUcNEmJGrnN8Y3fmQFABEwdFaxmBFrNRMEWX",
  "key19": "5EZ6WEKgtPLMxXdud5qNNkRotZoCwzKHvjhuKgPpKw3UXDcaaJZvSauwoBsBRxjRN9ndubunUbsr7LNr7Rc2jbhB",
  "key20": "4eqVqDGCf1A7Gcz6E8PkPR34ztk4JwCAFhiD8NVERqD3h1XNvaBfoYjvRoyXb6PziNkvKv5ug1QQr5jqQ8jeCZ7u",
  "key21": "2kXTPESzy4XyRuYNxAR58zNVDVaeJMEnR2wwEJ2CKQr11yn3L2JKxPv4dN8cTPy961fswYSFzHVyGUfe6QGPVTZA",
  "key22": "3qouWRKhEgJuWbpd7FCqiEZkJ8oyceEd3nCgR4Huv4oQNmdLe3HS5NF98dAJxijuNqaij7QkeKxJNjS9bbZJ5tci",
  "key23": "4PPaQj6bJgDBKMoVAgcUpgggHgQcWq9E91qZLijdsUn42o5o6AMiuL2smufXMCEN26Xwsc28mDg6JEWBNbRGLuH6",
  "key24": "5tjuNDjJApjWf6X7jreUFJdFsrHm2EVeBuPczgKJkkSKftP6kaAo2dfJpH2bdGu55dzpEP22GaaE7wmMEMUPVdwv",
  "key25": "35dhCGmmKPoAzTkULYKpT885e6uakfeY4kGeFg8T5zqjPX2UrqguDck4srnSm6XoUkRspsNpcSBbwGDvJkd2knVW",
  "key26": "d2vsXAHGRZ7ro2z8P2f27ms3TZkf5KMVJRQR4XQ8ePt3yNM6NxEeLtYNPniYVjSZeLieKoETzYxPf8FQgxQ5Cfg",
  "key27": "4Z1jiMuxjRhmB4nvQt1M9LoZVLvWQgcuJKtNQJiv18PPW762bVXAEDGcRSTenVFU3dgnjBwfAHUr8qb48DvpUSrN",
  "key28": "3ToMQw5GgfmF8GvsvCJbyDAu2idSFpagcZNNfzrrxmGUVcBhT1YeVTNmt7xgYFHV5BAbKG9yEXwNmxuHb3wASWRm",
  "key29": "2YToLiRjsnvjZ2cwME49yYimjNucCFzCtGFZjLFCP5EdtDnMQVMszaUKcxKgRSfwaNBUpx35wiTjbBZDD2ZLQSze",
  "key30": "3UFHN1ZfnejqZ6QZRqh7bPxif1QqXd8aEAQPCDHdXPA5qqwxpyGnErzWR3En7M499g2YHd5usg3QMXHZ2mwTpPC2",
  "key31": "44HwZvzC3DCsxPTg6Y2AMKGGZRAef4xp2nRL97QzN8dnez97UB6BZGXxgESds2FdBE8tid2HawQw9qcobgsCWT5C",
  "key32": "4yfVDDgUeFmoCxydgv7tPgMf92wiySFxd8jSsg97pEcGTQuJ92BSA3P4V9FMutEy8AieM3MJTTWGKUPc2yJbupqw",
  "key33": "5JxF56sJiU3hFRDvpGn5S9U46Cf2ouBb3SyEVTX6hMD2PLWWecUGeQ19HNF2bHjWt5uWbeVvvnA3QrtM7ZJFgooz",
  "key34": "gti7syRnkrGnPTDif3Xy3kwzDKR1Lg96mnPKbrFi5avw7J5qDUY36cPirh8RCoBJrEHwVHVpns8fYMsg6B35y3y",
  "key35": "38nHve9psrn5rCA4W1TMAEK8iQcDTNWzPHGcv87hmEyAPygvwZu4NmHpQApRhk4uSTikdZ4v5nyLaXcGMyQjp4UL",
  "key36": "Ryy8cMeu7Xd8VaTpyvuLAgiUYQTBS58PGbHUVt6ekBbTPXs2iEAkA6jKChdJt2JEeW8sYHq53v9ez1XHnmHmJ28",
  "key37": "5vJXrBmzCR9yjRVcpJDkCcvkTnsCWiiLf3nckizwu5VfVuTsCMhHqx6kT5nGH53Kxct9Egj6W1Jj4H4eD1ztWa5r",
  "key38": "5S6wqqJ98zQr8VjkE4dpcr8WNY1FQRT8LXo1My8N8tCQWD6uVYguRxfK86gcyh59tsKgtnJQt2ycBbWESfHvbj6U",
  "key39": "4LRSLcjm6PpGxwp1JFtJYB8VL2818b6feKHKjo5dGCqGDxVRHZdex4pwAjLNgef4RtUebEF8kgvF3Z3YSL7wBsku",
  "key40": "5xBQnLFHucHLQjtVhWd2totkHCP7do8zZNUMuAeW8ZSTTUobMrXdvBzgkLJW5qwNdmDKpaLP1WfeNFYRF6zF4QEi",
  "key41": "9dopJpUDZFEM5m1Vbz1jxLTEJAeYv4fDDza2CyCLVvcjzHvfJ5BHmcczg47V5FK2Xo96GxjUqMYnv98TUKod4SJ",
  "key42": "4szjDNLAMuM89QSDzjy6h7DzgJEWiYKySZzACfApr3bvzGQxG4CBQo7Ymi7RMiX5sUnZ8u1fUZjNFELV5Bk4j4tE",
  "key43": "4EmUbmshgrFwiYwpRyB3KFY4TJnfkJZATBRrLZ3anY2qZfmRKpRPTY2UGKYG1xabYSvrgpL4VQhcQUBJiPd6CCgu",
  "key44": "2HB7hYkZtgheNV7535yFPKACvu3CPBSuESfUiqEsEpP2Mqc5F8Cvp9dZJNRycnLVeMCKBCfdYKxo3L7mWtDSfbe2",
  "key45": "3EDVU5PA15wmUwVuTBU7ZtmjeyALzeRnpvDAkJiE1MRSLEeQ4JxXgRP4GLd4PKtkyhKCo6ywq4ffWoMUfTivbr8E"
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

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
    "3HidDPLqBiP4VYCsLCCcannmx4447wZi7556baVjvsM7gYS5vadUJqrKs8vkbk89cLmAGfDnft7fpnwejPUZEiz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XxpJYTjerazgBsGdvN32FogZHLXMYYgE2Ku2gmhV4RLvbBDUNPJu6tHfYbiQYmQXhZko9BQnXNgqy2boGGbBrTd",
  "key1": "2QorfisnNL2vNnS7GDvmqNUxJLDTVvDEQ7XpKZUKGkTHgEGsbGFn38okUKGrg6EnYuG1hMSy3RWsQagjmBTTyDmM",
  "key2": "4x5qacxaQu9vzqAHSHKC3dJps3MqBHLZAYuaDYKLp94UiUVvharyWDvzY4Z3UtRyvXv8MrryygsmgqDjRM7zdcqZ",
  "key3": "ixodCD2kjMDHtfw9FiH44BgPFJM7i7QECQCrUeuB7boYtbBuWghKbQDiHABCGsMRmmfU3FFMMHc24krXXjZJmWA",
  "key4": "4F3hm1cKgSNZm56UdQDq7jW2hJ4MoFm4je4N6X6o7CKcggGA1yBJabKJtugDex4ZjgSzNWE72iWeWU8krEUnmqvX",
  "key5": "5gjCMhrbNv2Uih9xDWNbJs1WcNqW8dJCaBde2apJd99cf8owCAUHhspwz2x5P8RA4tXf813nMSHwoxnDaz8mfEa3",
  "key6": "2sRGpJEKM3MTSDet9kzxcYRHDYKss5EvZGbnDfWTvkBBmif7dW898reG7FNw8Ni35fwfHxua96n26mRxsv5rY4Ws",
  "key7": "5Eba8MwXGEYH4CCt1o664X2jXGd8F4iR52n9h21qZEkZNxPzcgLbmmKaDaFCYQyoUbTeLL9PsnNsYxtTeSVASJiw",
  "key8": "57VR9jVuYLqwq7Z3LgzrB1x7NwsSeHbswXaKjGH6UuxoNoyRA9aFyqrDz7Zu4UZnHWivXK6tuqiPvNEvApVZw2Zb",
  "key9": "2fiYZaAcKoz2y6FHy35iyxBJy7nmZCoJQqCkdWCQbUq3cVbBYkw3XnhkJc4Bh3yXg4zZa6H7UneiFkheXgyVSCsE",
  "key10": "46CuUDAxU5GY7T852dWqZ4HnY73ban1WqvVNMPYLJcFzj3hbZmwNZRaaikAn9xfDnFn1wKQxzc8yTVs6a1YMicda",
  "key11": "5dSuLkmSX7NAsYfmoY5VyS419v5yEp6r6jfHJcUfARGsRGxNE4168DUVyCAbZseeQD1gjDPQYbfNSm4vPdZSM95u",
  "key12": "5jouHX18YLqUydppwqbQTC6ihm4S9rddGwhKNE2CsHkJqtaiEjceXC5Drw1SQpVpQDfzSAXrvuqESDo78JwBV3BL",
  "key13": "4WH6DWxhdA8jdetUPnq1xF8rfiGXe3SjGbJmpj4YHnH4ghvdbb7hjYUQDCyTMfrxxQ2VKaKwvfdryCjsYJEn27A4",
  "key14": "C2XejyrmczMbzvPwTHbS839njaUujPivUkyFFyqqhPrEfgMxvqrLrtaUUX7MXfCpV8TmVnsH29u5YrCYcksiVTQ",
  "key15": "3wMYTfr3yr5qvgsbiUxAHNsmrgQEajpPqJyKZgGFcMZ82wZ5HvCfkrSGz1abn7H1XxgXBjp1wdf5MbyRqhtnHQgH",
  "key16": "3TevQUb4HptcjojSR7mMYpdupuYzP7khw3RtQDFPJ9K9FT6S3rU3KsPGJK3Df9dJ39JSqBPK1JuKeq5fWbsReMkc",
  "key17": "4DDecPa1M1MFTPDnrT1NMAqsTEUNS2f7L8HxbBmgasLyGg44RgLcVe8favj8vKsf7kdHJZCcTVugJEBsQn1992Eq",
  "key18": "45W2Z8WXr1auwKRRNVjFRPmoMahgSY4MK4JSsj4wCRhmtkFBhFkAWZgxFg6TMzw32zbcifB8VHD6Manvh2y4u3rr",
  "key19": "4Dmb9RR2ZmosPtW7FXDbcq91DmNqfSaaBxB8bT1vwDC9nMf2c8PYUhcbwSqANtKT3KDahEx8jomEiCqhzfHq1St5",
  "key20": "5jG8BybbhjixEPU12iNf3bzjwGcHw2pXJQFh3Tb7Wp9icA28Um37HEhPDP4qzpRpgvnVPgkqy3pYQG3zDMGddusE",
  "key21": "2M6wuMk3RBtrufVdjJ3actrY8jJ41S8KC5kM4gaQZZd1FhhsowV5ie7ivcodmVhjYL67Y2dYYERxdvLdvbVwXPhg",
  "key22": "KXyaDjT31omingTJJ6A3wJXetZBknb9hJ42gohcCSVCZ94MtryAEgA7V6CgnpvXjkcpfmVQq4XVvjmrD1HRbhD7",
  "key23": "1MmqCSR759pM3j5uJMwxrT9jZ1Dyo1zvqxP66xbwfEcBhF9yTei474Xbx3ULc9j1aJYtChguFCobztJk8r5X665",
  "key24": "Gknm9FR8RruzfAmCBoyFLqkGqHo1miYjJ2W8M1jtnrnLZBUUxPuPdBc78pGqB33eM1paN1PKkTYTXVnJgnnzr7P",
  "key25": "2pT7uSd2Eejfh3qKMxK9dzTrVefrkZSt6JWrJW7MCy7h8PqjTWgAFxVpzTYKWxCfsFP5qkiKdQ9ZXXwrb5dN1A8u",
  "key26": "2UjKwm8ogZxf6mKzzaRBs9fzNGgQKakChXt1143nYc7NXXihwmiYf4Bntbz6nD2gkjPyzF2GKkGdT9yhsMSCDGNz",
  "key27": "2DNzr3Z1pNQShDhkzRPEt79r8e7oqJo3qeQbNLQmtz6fY4Ydw4n5YX6br6LkFhLYMdpn4i9He8UQkVwEY9cSJXVT",
  "key28": "4Jk621pnCsByRfu3AzJqhy2fNF2BQfw7pDUsF8YjPQKqrFbyvRRhBYV3kQkYyKnC4dozAb3TdgzzfpR4ZhZEsEoX",
  "key29": "DK8YJaxCUCErzfeaq96v6kcDx6hQPgavvsLWB3NK4iB71God1BL6P2EFyuSgS8z664hSWrtFQwEXSidevvTCdxQ",
  "key30": "65nFHvZ4f5CkAH4xejyfmYHSN6CTX6nj6DHknmXfuz7XpR72HFwkf3BK5iaQpQvytajPZik8SfHxpm6bGKEznP59",
  "key31": "wVgkFmYwyQdSxP1s91fmZh7bjKv3muB36tPvQiwcSHhD1ST6Wb2aUZNmcomWN6eYMMdnqijpycR3dfWbAKBNdrC",
  "key32": "ijk4h6UYycJtVrzJwLKe5nSbNN6r7uPcSauJMHWUZ5nJKkdoQ7HpKzSThoyN4FaUu2Hqrr4CrNUPdkbG4Z1ay2c",
  "key33": "2SZ8jcpdX3RSUt1JMjLw1D4GdsbwmLu3eMivuQ1jSaVuR21wLQK3DdPMc5qgF5xo9TSaoZ1RWWBjAHTQ76Bzxr74",
  "key34": "38adWUceSAYSD7D2DV9Y7uMJ4eW39D6QZcNyoFtdb2UBZVo9Qx7sqpVVVDrSZsNxoQpTjXRDKenN6axy4NsNv4AP",
  "key35": "RmmGtHsseFNyprLQyQtouiGFwwWzA8E9EydQn17Q1Tvvo9RF9QxvtvPSMdmzkyR3JVS62rtFMU3taksLXM6THAS",
  "key36": "2UiW2Br5dpyCra21nNp8HVf3YBebHorUxKcDQoZtGxpDHS8QQnx8vxGpDjzBdDQ6GCvL9d87jPJQK5LHidqW2Fgc",
  "key37": "5Ez1P7CHJLjc8FnYm1ChiMZL45PCTGaswjW3v7Zj6bUBs6wTLokTjE2MXACzpifF1T9FSWAE2f46QagXhp24Rapf",
  "key38": "2onSyH4f9H6B8vxSm1SbUCf3XqRW963wEunDCL7UWjqa1cKUpMAURp2u2BLWu82HQuDPGLKF4Lrg3oB8AcoHgmGs",
  "key39": "2N7XwBeFzfNs2YMnqYAtUEPUk2aWPpkKuQZzRykFYhTA4Gr4Qbi2XLw3Mzu9S5GGHLhkCqUGrx1ikKiKi3Jsk95M",
  "key40": "5jYCtLHGM4Ubc6ev5eBmZ5Jjgpk4ktKabRaTyQWmaJ3Tvn35frJSM3mNsEJmVW8Uee9PuC8YXMALKt4uNnwzTR9h",
  "key41": "ZkyxLz7dB8fmGpu3yFvYdhrHyKx6mG1TniCPoGQgSXdG6ejToqDF2p5qvYWasDjR2e9c7htMuaXf6qTKqw5ZMhW",
  "key42": "hscXVj2DPJsgCSyamDt942v5AUwkTHiWsULtJ6aR256tv5qJtpdnUDL1kGvK4QmWL73saou16sFPWkYktgAQPL6",
  "key43": "2jmzSghVPDkuGcmchURfitmvqze7pdMMBBFhJAF9ePzm1CGwCoLGHAsB7Aphi1D3NnGPoszb7tU9VYudAhARhooX",
  "key44": "BoRcN4GCkUxkWCafEYwReoUFXXkR8Z5u5mjut5BFRfMCaS4zkNsUVG42D68sCzou7bR8TahBSyTN4NV79yNshNZ",
  "key45": "4XmGQAnL9yK3QdwNXFnSsoC7nMUpMALZvgYfCA8jM7z3U5zNbUfhobToVWEFWHA3UbyZUi2oEmazFiKQ1drgTmap"
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

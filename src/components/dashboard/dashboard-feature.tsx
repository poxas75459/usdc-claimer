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
    "3rZLtWJb3sY3MbU24ZLRiybQfJTcL4o68KCKFszdrotFG2HGCxnSesDxjeLL8Gc9Gwrxr1zyospaJDxrAK6Sw7qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dTvZU24pHGih93anJbt2aYGzPrsbswoMrBmwtUiAQeqo6136bQbLfeSifSZASD3sxUzVhHSWRwnhGj9BNCfWRGU",
  "key1": "Cz7k6bhZayXwo5jincH3LF881PkzGXL2wRGD718MooUc8RchdwbPfsJVetCbDufqYtWt8rbQYCfBiP2zAkGLiMp",
  "key2": "Nd2k3K3J9NniEcJ4Y3AZB1cc5Jy6Sz9QW1gVovmtApZ7uUD77M9LGqqCMh4cPfzK4SHYXqYt3YvUsB6hhZyX7xh",
  "key3": "3JmAoqDLHjpZ8aDkthC2uD6no9MKRjLwmYHZPD3esfByGiRGvuNvV6RLWpioY8NjDop6cdY38mS99p7jE7UNhWZm",
  "key4": "3rKWaQjmyDipcUsvkZTGoRA6xL5vP4uZFBGm3p4kRE6L2rLyKTFFJ3f4pmBKwjzpwoG9xfbVP6EK1zSCHksMKPyN",
  "key5": "RS3JEaxKREhDNPazjDqvMR7pfQgWzhN58pnXH13AfzWfhLQ5ctZRdn7cH3cAQJKNaDvVA6htRLiZ1SpPY3aiNcE",
  "key6": "PCnD1CXSFCSewwnmbuxaqVMoqgEnbS1fGsSbkPYQsyi3KhzMgaExB5N2trAyNUrsaPRxXhG5hciA1QrXyGpYZ5u",
  "key7": "4vwmGBDbmTYai737croEqt27JeotughNn12HAbRGyDAGSH2vnUaMqSFQBztoro3TWosGqMTypNUGzirFyfT1iBuo",
  "key8": "52c9KdAsksBMhbtPFPYcjcXgPTxunUwrsxNqHrznh3yvkZncRtNUjge7bHV4aYZaNRokLxCdfSjzSHFQnt6E1YEw",
  "key9": "5WQiMr9zhytcNpUHrqrF4EMXL4GoTnmRH7vR61zcpgjQsskmXApxEC8TLBD1EznydyqaPaotAXEJ8R3HEXjn4jed",
  "key10": "49CgAVhFAnGAEPwKK1kMk9W5J6Pe2NutrqhFzf3CFAJijYa99RYMMSR8nppbz2HW13z4ewvhX1NtjiaibMLEkA2f",
  "key11": "2e5PZWw1uS44oNaGdiVMfjLahzWLzsPFkTXHemVtQyB6Dz3wkgoE9jETTgLNiKX1SFGxWYDQmiMvBCzZTDEgPLnD",
  "key12": "3rH3fCttoxC5yk2jfXN3KTdKFB72qX1VXkHDArM4xpK48wWvoV2EmFHvT5VoWciS76G8N51YBCvAiPtP7qX5KWBB",
  "key13": "42Y6pDzvzwdryJQDuD6m3hVcMxXmcDNymXFJqq6MaTwAPcuzQuXv9y9mW58Dec6m7ffF79J2vXpMRp3ZpUck8bym",
  "key14": "32FCsbfCvxzatCukxSUAnDQqmoF46wLAkrx6v9ZmZStMk5n17WezAgxVYLdBA9vHEEsomL7epZPGp5djXThK4fd2",
  "key15": "2JULDsWGNvctQvp5CpKvmmtBG7N7kQFzkhmmnpdZ1AATsqTXMhoE6JfG7SmjEzeGWkHgyzXzzDbJwAJmMf8kob9B",
  "key16": "3cZRHv4S2VrpNcADqXH8ruSY4EPEZavrLCDMwwF8bCzLZ7BjVSkEWt9jMw774gU5bXqsSS5c8YTGQUjDj6gZuCgm",
  "key17": "2m7WiJYZWHG2uUrCzLVy2iye7C3oRDG6vjq652WL9dCwwi3Qmk6mCavBaDSPiEjmUTZWzT5yFrPWAwQjpXCwcYvj",
  "key18": "3togZ5e9duXvYGc23vLM73BCdYzskLBy1R1dfqMK5VQbiCmpUDvdF7JEvMKtzhSm13LWJedu1MyJikD2HW2bhUbX",
  "key19": "4V4NjCeTVAB3M67vgPyGpxzTwvxdwAaGsigoDcANec255kp6bruzHgd35PHVQb18Jtxpqegkqbyod2b4vhPXAGhv",
  "key20": "5aK35AcySiL2GWGnq2gBr31oFnvhcYThgouzwFB6qAYRDaKKxiQ5k9uX4MYS1L5kqTs3tF1o9RDhUr5hLfHXV23W",
  "key21": "4KWcuhP2oYHTX8JiGy7KBAm6vaaFRB4jDS89zs4SkC8BzZMvSsmDgDv29qp55tmof3uxQ6htu6pzKYrqPDQXVELo",
  "key22": "V7zZYkQTwEyuAMJbekFREJy31XySTn1eL2SbAgbodJDPjr4ZMRJrASJcR4TC8j5BVUnKZBei82y7cQ9niaRiKKE",
  "key23": "4tkrzgyGr16pVXJFBEcJi7jaHryu6LZ9R4QPG9G8FHXvn5YSAL1mdVo2vFdwBoPUHkyLXR9hnwt4cVkGXEwzfkc8",
  "key24": "4StmEXSn1naRubJMKH4W37HmqfEP5CGLGZaq87kdFqG3KHR6pq1waqzb51bmo1bJfFAodpDfehoDeednUkFS8WTw",
  "key25": "636zpe8CjuYSckV54iySyXbT2UVkTN9k93KF9UCPrVJ2RBH4BJMhEPa8PzDd9FV11m2gk1K9U3ne75AceG4BC4YV",
  "key26": "4knqf4GkZEqxcLYDGDmdtQtJecYxTjKh31FchC26jbHb8gPkfwvTigsPzJ6DBpmXwaBDEK4YKfbVXrTouvzogKfw",
  "key27": "2JHB1XnSb8h2c6WB53v4wNTGMdNSb7w7RwYcpDb3zzxaXJuJrVLGHi8wwosjrXUP7nesGsWngetqGyhGhkhZ2xw6",
  "key28": "5qZz5N7ZoFQUpsctLRnaBETGia2YwJkPYvfo6kkoB2YFieRYDRp7Tz39nB4KfvMm8PhxpEi7deGJC9VCrNzQrum4",
  "key29": "5KHGTqRrVvyWexzPDueZiNgupb2UXBX2iKCRjPwe8b1QTLjzaf8VnkgPwQkhEbfiuMw2FpnhnRtUH9UnP381Yo8p",
  "key30": "3MY47GSTXMbqE2Z7hiREuvx48PXiRSpUtF3yYgUdR2y18X5MhK1BWTSCHFDQbXEdPYLNChZCmd67sYov1sMF2iSV",
  "key31": "4BzQ9CY9prus1i5FXUUzdMG3f4UNyLgZtCUctEPVHZGQwJmi1ek1zsJ4nwfcFvH6gkyHTCtTaZxjLxRdDrUFjAed",
  "key32": "4qpFLLsYYMvMgH3jp5Ug938QwGS82aQe9nFD7QvyEu1Loa4YjidQE8keVam58SVkn3QXZuRJPmUhaLJ8HmzL2ohZ",
  "key33": "3saLE9o9GKJjdYg1KS5D6NjFbgrxuPkmG1FTWeXGTP8StmmZdTh47G9DsmC6oVfG3QCy86fkKgmAoW8EqLtcLrfC",
  "key34": "5rSQHg8n4YyHLqPKKh12ZNjPkifhLUjtiBA78u1G6xtpcKrazEJyauvZ1rxSrrnudhbTb96a5JHauvqkJu82Ratu",
  "key35": "uSksiPjtc54ehiF4bABJvUZHdqFgChemwgrFhrL4vNc2BSKhuSBxKigQJxJ7AjqFxrGaqCKAGNoT987DFcStuHT",
  "key36": "5Kbz9kxViXvLdjgzF9FHrCK1GBiCGdALHtQrJyxMoBxgb5Q2GevCLdVsDuWmHvTTqrXzpoQdnXVMLAaCoHXW2zGa",
  "key37": "CetmpxDgcffsXFTk1AEPdev7exSA25s7BN9g2TsuNLoNZpStzo5VH9kDtz9kX1ERipdRaVXvYiHJVA19faAinyb",
  "key38": "4eKLmRJdAuLBkYZnmAwMbymm2F4d8TAVD7q8bzNbhNAdfgFitVV5n5phJYMM4gFPTXUqECSiZBRXU4TRcbCWedr8"
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

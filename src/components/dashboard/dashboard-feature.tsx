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
    "2tMoeKTkYNHQ4Z4BpBEn8y4i1XwGdra3SDpmVMh2NEHGDEp57eto3LuYpzAovyYbfivaiNxx3ivq7isxRjRKiGHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AXFrm4qf8EApwWYNzSERFZtXS74hF7bHMcQESAnnAN6mWh9MyLiL8pUZ9YpeMsk4X3TmJJuqkQzfahgDXFw1YtH",
  "key1": "3ug5y1cSdUvt8iVd1mDbUGErF7FTWTPBtCXy7zFUSK6n6Ewm1KLLjYDptJYSQcZXEmS4wviCh7J9iXVHkuuYPmK5",
  "key2": "4EaFtyFZiV3pDtRhBJBbzprdppA42pb1TVb4TuN4B5CkkVhpxGDdQ6xqy3gmryozWBTSHpygPFmNd6EdtVyoDbwu",
  "key3": "4QC2x62j1GjQpNYKR97pKdwQAnGxMCErLPQuPCEtW2mvKqQSDBjsZFmhkWPsfFARXurweZnN2N46ymfnbYYH14xS",
  "key4": "5DMnsvE3H2G7jF6GDNGTLRrSbeofWJLZ7yQZFAmpZDgeu3VyuMpYYiqPs7B3NyPufPkZhJPbNhQWKfCGBRGUCJXP",
  "key5": "XozdxCVizLrMJ5TZ6iLtYzXcRpn9e78Bb9UTE9zSiK6wT1AqPJwfjZWG3jRqevyJ5eDwCLf2a6KRFS15yZSvyk8",
  "key6": "USei6uVHBFbViU8xh7FV3k5YRrq3izZieY72bDEXiVA4j6G3UiiDe69bPthdxXYVBMgJUnP12crKJdrFSdxhYL4",
  "key7": "zgjZh8ChDfmxif979YPBoAH4XQ9NHiZS4bmxaDKoeAHKLgKvBqdNwHa6VRAmgSGFWnJB3xdskC3uW3bR22gBimm",
  "key8": "3H7RN5V4X3wdudD9C5vERmZz1xxc93UqYMHbbea5Lr5ETaTkBKnPSL4UX44bav63prZyjoFMDYNVuL3aUQZPtt1E",
  "key9": "52rrhShPnHTc6beX6ZWUVVmBH3XfDLnpmVBhrHjX5rGeD3Z8oRajn9gjk2iuqvTiWdEmUqgCbohQXMX3UzJ61QEk",
  "key10": "31BAECyKsdKZmJ5girEw9pCyVFoKkBBV2cUqSuZLotwAMu2gfsxVUMG9UPfDvidpAjGGs9qrUsNMTt4iTtyR61fa",
  "key11": "3pm4QVdJTnKnzd1MUjzushhhsyMMUWCDo3tV53bkTRuB54KwS19egRa2jaz3JzeMbGTUoMhZFrWPuRHr2iZMVyqE",
  "key12": "KzK6tvcsbDWDYaES8rRaZxoVj7ve7Ahtj7iSMp8aQD5Ct2m28ocT73HUnWZWhUvDT8YZ2swRW2VBJdU8b9cuNLx",
  "key13": "42muCy6niMKj1jZPfGGeye6TDuXphg5hq4zdEXeNkvc8GfxqekmyNrADXSJwP8DwTQNHd263ffGXtdUcUQBTkZab",
  "key14": "4zr66t3gmB6uN7ASH5B8M1zNtDfdL29JxyqGfaBa1fTSiVcAoNuHqSyEYCqpUF4XYegour2yj7tPuZ6xjb4TMyCn",
  "key15": "4E9Urv33SWxQxHP9HPpY6X9kk6FqG1XUaQQxBe2YLL6a5zoCgtRHF4YAcZbuf4N8utphVvBMMit64ou97NEb3qJj",
  "key16": "Q77rrekP14uC2RotWRMqmMTLx2NkWS67bUj78LzoeV34PH5hYUvY1Dy7Gnp9ZjUHbofasUaBBJTPCH1kAPNa2nD",
  "key17": "4awdEi7noQLbuPca5e7e4g6mze4jRyXpyn7k4qJQtyuT1kfxHo6qiHkJ1h7weteGhacRnmRzUpPX3ZpGihrRxfjn",
  "key18": "2LkkSMGx2qpFBjAhEgoza4AM6TppT98rwkR3uA3VTWPAzeHdxV9AxTWfQFmvmCZNBqQJGgPUHFWdiSPB9rQbYz7M",
  "key19": "21vboRyhJuEfX1K3WNYek6P6oePp9GHiVxzyuttatcfvRALjPy5QmKBtxxDH2sVui3kDjQjAj7DzPatg1sczHmjm",
  "key20": "3MzzDZeHppacpFdE9nCRWDZwj7X62yJaWcSUh9jWAvfxrNNtk7RxLh66S3DMP19VtAoCT5WNMb8rJHhpYQ5c2YnS",
  "key21": "316PeADNsm9jGqMqoT68NrXrzLwhbCR4kksjNw2eA3bUoYJtbTbgsi2F8XseuCav1cRUwR1t7iF5p4igMR5xw19Z",
  "key22": "3dcD3cUtMbxu7BPW3DbKURCwdF6pyEDoVHLPi6WF6atp9QjB4kX6fR9jvUufEmei7JpLcq1xMg4wF5Ch2DSu1jPF",
  "key23": "4PKN469o7qEW4qivNvbHJnxUBxr27TEr7cc42P9z3AfwpomsK8NE2vzqEvtgBWxytRuGcvYQUW2frWAzPxe1U5Zs",
  "key24": "L5t7mqebC7z7skjoFFmj4XBJmetUGWgRqNDtTmw4FZvPaRfTZ8isaCz36ngFPi4x95TcBWtwiq1CtXSYbe3YrTf",
  "key25": "2MwqECD9Gu142LKPR5XHtJkz8dLnExNuM3MULqPgvDNE2a8huAC8z1bKAMu1AvjNiPjrbw2GMQtvzw6oXtZDEKDG",
  "key26": "4Qg2MwTb33GLhqdBwK1CbgMS4e8Y2HjgbENccpcrxD7oyMrVNzakmwKxR4n3ZeN3YXSja4feJe5eAnQXsoDXMqpb",
  "key27": "5Uizcxyd77gVAMsXg7aSGv1G2FgpdjddCNVvtFwEXpX1RiFXjvbdguuMGJsrKkbTwLg1p3SKhxzWAQAh1DUVsL2P",
  "key28": "2tBp3WKmUKg7qLaeeNjUtkGK1zHNQn7ngP4i3NPnjrztZvdKD4maLY4ZchCYvJwJ18Gj4J3mmdCH5XdJ5XB4fsT5",
  "key29": "5WfktMyiAs8cciATCeYNPdTo1cSTEDkgpuUxKKhwWfuPWhxnLPoxG3viASLNvVpkQw4viG2iUVd6XB2KNAexNUoY",
  "key30": "4tCrLBJ5vroYe2RNf89o4yYscZzmnKTTuCchYNidqS5hv7aJqMaj2B8LVMv7t616CVr7651zFoiyykS4ZzEFVzMP",
  "key31": "4xUBjsgzKvaKNEarNiJe356XqN2U6jPrLxNeik9jhd8QMBjSFsLX3qEXm8uDDnswLkXDXCrMRkFAWEEos66WUbmG",
  "key32": "WLuLRHvGrfBSTKo3YNbkma4p8tr1kdemTy2AxJtyBFXBTHp8WxHqQ7vcemcScj282o3VwbYtvAVFjvDid4uQVDd",
  "key33": "PGj9eh8NZYEvbHbSBPaaKg5APdU1i67EXiKbupuDUUQRq1TAxYpSSFbZdeFFfg9BRrMydbWDf62Gd4Q4u8yBWkJ",
  "key34": "15pfSr8mfHg3X48hQcoCzrnuLvtTWufRKzVrJTTfFQMFhf2S1TATbBdjYWHvqcpja1npz9Cz8YJpHDWuTP36WWB",
  "key35": "3qde8ZD1K5kQWDTM54jzNQKgkzyVRHpkevuLs1pRj3yodYsREDvp41Sa1sgzz7zDqbvXEHP3r2am28fYJYdqpjJ7",
  "key36": "4Gjd7fGbd6AmBN9J2HrKwBNuXcn4FyudVjUdnFzD3yvH58tm4h16YioyKP5Aje8JjYLx5qW9Wi7vLCJsJpa22gt5",
  "key37": "23UaTkNsRLCDyX2dXzNGFAggk2JynjqBkyCf8UJETZqjK92tkj6k3JS4Vx4BBkitgzJaps7wcFFw2HRpCjLYM1MV",
  "key38": "24GeuCmNHpGssX7s6ADFSbFEd5Fyfo64r3QZur3dECeAy924y6tKDA32rVQwjg4VQ5HD3Mf52izjSojTfkHoWgV7",
  "key39": "5ZStXyajTyw9WyumvFgB8j1BpDsFhoNosm4C2YtPpPHD7YYv8hgW6RNv1X8mjWyjz2Y4VBK47ng5YHDuqgEgnCuT",
  "key40": "3TZEXYr5T16Tp2NTEEkzwUU8WvqzynJvqTaBXZKtZKpUfv2RP3fX5p9bTb1Hx7KUSpDHnemM9jD8Fy8cApnnAJto",
  "key41": "2RHsQwXQtvvd1AUUgXKJ9YxsSPj3MPXvPaHD2uTu82BzgAN3qGqkRU59XpZZavYzYV2M4cdjnj3ido3Tn2GoDde9",
  "key42": "3MVxHzMrFkET9atM7CgRMsQX6fkBVB3GuGmwSkKJUpLSWCLqYtt6wp9NNS458s9NRwirQ1ky5aKdFrrLVzkyH3zD",
  "key43": "4ZVmi8tRz8bGQ5AaFpftdtPnHrDL2zGqFeFYPNbsf9wAD1wt9SeCzaj6uDx83EYSm8KYGjK2qjXvZXFpaZ3a37EY",
  "key44": "3EkuSJMYeSKLhBypCTPCC7Uqn84yUoVWTTj6nWy3cnCZ1aDHxxc17mbx4E2BoqzVvju8VFKZQLsxUkTNCzmpJSwG"
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

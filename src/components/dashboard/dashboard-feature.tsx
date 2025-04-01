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
    "4veE5PnLXZYSL838bMis3npKywXX9LBqsQeVCEH9rg38gRSDgSFywJWLo6ZKWPzNVjkF7tJs2jDkagZAXUDis89T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41erUfAd7c7erB7ixYByD3ygMpnyN2F6jYKvj8Yn4TW971CkJqFV9H4jqDYaitqbmDjzC5LEaTaRWS93uLhXDJze",
  "key1": "5ycN3gKm7wBeWthF7BjTM7Tho6v1P2Pnj7BQEyS4YVFAqRRayaXR1eeHBiLpP3DBR7ogevCaq9cWTecf4Thar1eo",
  "key2": "4BCs1Zmtm1vPiUtBxsXt4XxxbZfHGkQEC2GiVdVUXdHw6vd5mGsv67TJGsgT52DrfBjGCvzCcx7zqfufiEVaEom3",
  "key3": "3vJhMWy3ieGK7cL3HhJCHAyMpqofUx3ctkhWTYn5yA9iBDKmH8g12Pf9pPYPctJF2H9xPSbHAfr7FW2v1Y4yvTak",
  "key4": "44v75eSDGuQgBMDKhLzLhnbABV2oZ64upmWcHKFZSmZj2NLCeUsjY4SPtHNRcYEf4s9SwAtuwdx4kN1Wk9f6dXkX",
  "key5": "55oHUkDXtqeeJgaLRTEebuB1x874vrpevXEmtKqXYsLEsCnaBe7NL4LoPMJVMtEDVQysRSbhrXRU4xwHkb8fwLs7",
  "key6": "2HWT659SVPTbg8nWoSpTTLvcjwjteWkgfk44FfVquJizcpTUa5FhJhLpeyDnEubHHUQfEaLE5tB4BUoxVd4H9u5S",
  "key7": "4dovLHboT9hPhDxrcgFJ8nR4Yiu2Gdg8ftwV3AbTAJa8kvgzLYPqRVJpD86d8a3gvnXnUhJvJT9wZkJtWgxiZEPm",
  "key8": "5nv3LtbjEodDGVcSzWvaV4gw8oCvbKvfV8bRdZfbHURBffEBRQB9zrBBx1Jg5t32t9SpuVqHLKt62D7mfzs1Lw4e",
  "key9": "2stqXW4qyoxdq8CsqtUjuJMDm4zbqb3aJ3uFacQvViadr4a7HxM7DuGLPvU5oc2XAohBtB6TucS1dy9quVznWmTj",
  "key10": "3A16ice7fKz7SpqFbNpBBkftUcPZ8CPnjix873ua8AYQJCGd77VJ6N4U9spEKbJzqabcBskqaMJGZobPaJwXifKM",
  "key11": "5pHY7attJBPPksJw1MpTLzmkeT4EQiSsNU9TNAGWrQMk5GrofSgbB88qtJ54SqwiVA2ge1dW5pqTCMrJ8Wi1f5Fw",
  "key12": "NqT825Q1NAbAA2BwWr2owEzF9kBxTq9qFbrGF4kSCrV9kzH9ATMmYGZvnZG6c4UBVF5chKrFmpEk4szR5AJNbFs",
  "key13": "3tVzLrXkFeNLRNGguUrwMZZezN5D7HwxSac8XEsRpNELynvNENRfLy1JpJbfG6jK6hFZsfQbHeW1HUrsjDzyqfck",
  "key14": "3GNF3AvQBR1zp5tNM4dAoxKxGJnovGq2exNDC93M5fUSfUDbbQwk1TBpzX7TfJseq4TvdhcbP1f6hi6KQmAGbGgm",
  "key15": "3NYKtPa6JGTznUqarxHd28A9ruSXzNjD3qxmKZaGw1n5N2iKFjvdWMWVPtKPyHWUAwzsaxivq5UXx3jTsohM6JQS",
  "key16": "Q5ipcCfYS7go7Yvi4DZeJc5BuHNMmvRYs5Q9YroCKB35jGJj6jvKuDD8Z3moi1HuD5L5nQuv93gXwwnwdEq28yQ",
  "key17": "4rL4ZF7BLyyrtk8yoYy8YQgHYpVkKKr9hKZXVNXY2acHKiXve6PTWy5RiH6yVfMaq7qqiTQMGDPU9kiE3PztF3yn",
  "key18": "3Px74VxFytmzQcSjeBW2NRfsyYKDJwikPAD9bubwTLsbc2fhxCHLDuuZT9Gb9SphS4eABsMYs4Z8t9mDmxUqPpk3",
  "key19": "2NM1AbGxhup2P4o7NyqervPsudZBtHHqbkT1FvNJ8jkDUqQm3v5ZsuAEBKWgXNeLsHihDKwhQs7HqWsciN1tX3Rm",
  "key20": "5qhHYykf3pn9jq9nRgechkfvfKEcjUJnsE4Pqaw4eYup14t2HncsSnpYLFLyYjTqPXqN91yBowPvJqf6xwDph4Mf",
  "key21": "5aWqoPYXndJoJ9k8xstjVbgGcMf2SCQLQavDWximL11a4vb3eHo6JqKRk8itUkNx442kNRf2yTARPU6JJoNtW4VJ",
  "key22": "4r4y8Q33Gdvs6EvW3DYgDckBk9DK9BXpQB6EYLq2MSiQe4Aq8uprqXv82hQMYHMAL5NkjsD5qY5oiTALpe7nfdCj",
  "key23": "3ZWwnFXEJr3x6rZsJAEuL8sLe1PGm74XChxaHtu9ccBGo6C3Roe5niAZnkvynhYomaEpgSKV8JgPhU73iEYC5QTB",
  "key24": "4V4yVi9hTcaFbYzuxvxqtiCiZw6kpNyZbPfen9UwAUyh6GFWUafkJTC9S76U6GeMEGYXpQjaW9hymVskTaC27EwU",
  "key25": "5R7K5vSkUoj7M1u1iEdHf8qQbGa5FawFUfmeeBHHXKyanUhrcnZFjFazZRw27KY7w8zAB4SaRwfTcFYNubf3hY3b",
  "key26": "5TpYtLxewduMY5PHoxC9VNG1siK8y34MCLPvb395uq4eY5Coo6yUdH5gGWSJkmKhfKgixnsVdPGVSLEkFj9S8sGz",
  "key27": "51CyHfhWznzTKW2hzwxawLoQ92ZYcjSxnAtZ4kabgVRgwkknhkZHKnV5ApyudJxL3PMB3X1hdbeyKbyho6BrZSS1",
  "key28": "36kceQsGe1UbAMVe2bpoGHUB6WVLT9Q4aD8jLzp1etdYNh9zz6ni3iLizyXQKgRpRtNwYeMXMgthWG5VgU1WZDU3",
  "key29": "97aBM1btwF5N2onXdDu6zDqnJFHCfgny8XCjsvYhzitDRdXfSN7URD9DTbGbWpLjWNx3a3LM3YuquFtMcqUdhmr",
  "key30": "2Kjvd9yTGkuoka8ZMgcKR4iQSauk4E5vqgNVb7xwLbfJNZUeSDtWtq1gY6izgCUqeQ5nLLXBadN1PwcymCwxyiyd",
  "key31": "22ghd3FX6FF8CKAEh1cP5JnofRXVxrKJX9GMxqTjwEg2vdrfaGuRA8cpPnWB2tdeKSgQVHoqMMCyWrojjpuKArS7",
  "key32": "4UVtQfu9f33iRrsCDumQALB3mBXJuDiMLuvMdNFXAtj7h8ZGzm2zYFVAKetGGNavLZR1RLsmXnACz6M39JDgQCHL",
  "key33": "4wXpSJWHwvY2JWsJqZ8ybt1M4sk3mqZ4KSfqkiKCBh17HMu4HrNoorRvGSwrPZr3VdquCUtn6Nx7Unur2TV4HL8j",
  "key34": "63M61b5sSHGXC8f8KaMetPjk524w12rNfwaEgWayH7ar5MAWXWaU37zRJToXBGHUZesPAtru9N6gzAx45muEk7Fp",
  "key35": "25zuSRp6s3MmY1HxGFQ2cxAfdxr7y1zmJV6vR7yh8YtAznEgVdAvunqNXjTH5BeVfx1G8Er4oNUZWHoWikfSXw5u",
  "key36": "5RtVDXg9rdJDeBx2giH1U5L5RqYfZhqsBnmARWq4kvHTtQVBKzAndTcybEDri9kjoHoawUtXPiSmbnhDjGfCeKqf",
  "key37": "wSYCuuovyguwhu9z2F8uRi3eQv7oeCvTMAHF9wafoSQUAweZpKnZiG16NH9E7Dn5ZcTHVoE64WtkgAiThr2tesU",
  "key38": "NwMKhPCEtcTufujXbruZdzu686d4CBvVHL3HQ8jTfrP2TvqSkKC8CcNQvMVxwsL2qBwhvv7vxpn71yQs33y1NBX",
  "key39": "vpWNSUrtUgGosXdwp36TrnRpHaoJwaK9Qqf77fJs9ZteGxU3z8NNXTXPArnA3k831ctXNdHBsE3ovWCmq3Abn8a",
  "key40": "41MNoJp6uTU9SisF2v8epvLEViu8mS8tJFEHvKxYDu3PqdFVW2C5hzRch4dZreb45NVPNQq457YxbyVxK1Me5jdX",
  "key41": "66iDZ7tNd3za8gvpMwfTqjMnH9VXubhz9uVmahZ83THYSHuiy9Vb2BEXmdhhvstM8Vg98SQFatwc26Ez6RAjvork",
  "key42": "gRnHGZZodiBpXkif8wQKDHZnr5T3SQbJ7tauKJ3zQtbQhpr5shSxSWqH9qhkJocFVMT2kPEEn2jkv3SF9qNoQsY"
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

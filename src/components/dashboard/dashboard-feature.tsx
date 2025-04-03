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
    "5ZHiXkW7DKRiJ5GqEtTkjAayDrskaEDtPpkZ9Bre2T6mzcvLCgbVSz8oMxhMvrNPdG382hW73ctzxNjunmXkxuhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "axponGqTGqh3qgw57Qr6cXre6RwjZwRxtcz3rFfA2GrxueeCESihmDGpbUGS9PPttooKRGGr7GgP3a7uaEsgbxG",
  "key1": "2EnxAqi6gHyFEkFL7S4HzXDGAiBhAe9XaqwYTiV3bdLPKg5WxgdqsL4qN1hPAowH3nmgdgjhuJGqjxpXAYRUSm2",
  "key2": "4oMnbRfCfruBcXXgM9amwNuw9yxJPpGpgwQuJGiN28Zuq8UTLfNuk61gv3S2EVPiffemPNP5ZKEvmFpbbEHB6V1k",
  "key3": "3iPCkFqWa7QgwzRoZkzZrukSyjmdXacgvNsBkBQ7hScFWiqDJro8w26hhgP1WQHVKvVRbYmMFdeZ1CCnHJhTtKus",
  "key4": "3JYVQ9La23ztgji2xJUwxfcAfprADf1o9e28e7hJbFtMa6gqqjApnJLUJfUstv15qVpvTWfmGMFPH3v58uKNssnA",
  "key5": "jmvWGBFeArEqLp7zcsqu9ebY9hZz7yVfa7hyDRwiamN3j3R85Ru5Gk8ovEvAT9DSrNsUbnHwMwY9LwXC2X3UaTE",
  "key6": "4Eqdfh1HL8FVyDG2Ad7s9kcYJiPab8PMyC3ykKMENkGz6nhDd2b894Zu2RLbpVvhkvHGncbafMA9Y4XMTQ2UZquf",
  "key7": "2Vd34SKhCACbZ1gTLiwahjNv2dqFgccxNXW2hE6F6JzsmjoVd6qANY8Z1jKTTL2CaEz4TuAg2S2RN5KSx7pfN7u6",
  "key8": "5E8phzghkkz5fz6QqbaTqbwzW1i3PyVtRxyJZ81VVQXrtXbdvSuTa3NwLry5t1czKNtb3YRzvbco6AbY63fZ4oq9",
  "key9": "XrQ8mGHf4Ex8HQXY3HpZimr7KokjEfPcqs6hktzEuNEdtNPY2yuqXr9eBpoRNWTv3ZJiPCUEv5Mh1cY1NgUPnda",
  "key10": "d1sQ7baKbnqEpe3jgWMSGws3wXTZzLf85Ynz16V8qHcEiWoxsbvQuErQVMMwKrGagCVmMnZ4jefm4TYVyTprTvJ",
  "key11": "2i45AK4tCEb4qwbw1rFc2hEPuztoLMfHhHkMZX1TTGYWxFKTPzyMTfyNeKbEgGLygJQjMzQ2vSVMoQeQRPKHkqUR",
  "key12": "2s17EVJojvEL9LtDPR9gHwBHd693Gz4uNUfnBnpAnJtsPoQdkgvAuL87kbgkwNm7udzmFJCyUMubjbh3Wws8uVes",
  "key13": "wJd6Rf7vXLaa5dXBHc5cHFQNXA23rznCwqamn2F9hRjHzLh73qA714Uu9mUVWMd7jpMbU51dpSeZJX4b8RfWE8z",
  "key14": "4Sn6a7XTdMfh4YrsnqNGEDJAismXyJfu3d52SRMGniSrcJrkj49E4zUE4MRJj63Ja38bLRF2behtTAhzEjq8MrPy",
  "key15": "2iF8vGR4SvzKY5zanQgEV7m6upt9bC4ohLBY6e8KdR9bg2ji6xzpqyWS8srvDgyUgCNwRbzh8RB9Ad87e2oAsHQk",
  "key16": "5gGK5NyKXtxFM63kZcj8PYtN7hmrsBz7TygMfh8pGHyNhqKnCnjK3MNuHg8S5CzV1tMKa6qRT2N6qYWPVNFWYxa5",
  "key17": "37ntqtDxEjy6i6kVN7YCuNZe1QH2zx9V6UNXVvzSdsfeU15XDUam2HQxgPoFkMjHvXEYpRMxznUch3e8TXhnA63o",
  "key18": "2KH2MDhSJWQu44oCXL8FMQdJBpgwxcv6dik7TQmWQ7tHaJr4JFLy8MF65qyfkNhDz1AjtMrCKFDbrXSWf6MzjsNp",
  "key19": "5vXLwiR6Fo5pZr9EEJLTgnEFDGgKQ1bg4zUPdFAtE7kgMV2Guaov42pbMgHnWBuzt4absPPSqZhrFRsPQVTWPNM",
  "key20": "66AXthUHW6tHmACPvkVamVoZ1xxjZcfEYoEJcA1j7wLsTRokw8pEktDV4qdA1sdmLuUpuP64ekgYS5vkDr5BXENB",
  "key21": "21ttCvqsMupxS9QVq6HzKEG5gCLUVm6EgkXQFBksE4Yn6EQzZSwX6YZjzwTWW5AgYfZ8PNRkAEAGBMuQBxTgs9LM",
  "key22": "5vRb623fYNhuiwjcp9jqhTV3ayrYwnexqMhNEigfe2W6gaBZHC6VpgqRcxbXUR2Fhk7Y8nUYB8yuf4uek8CsxGbF",
  "key23": "5j9thmSiGs7iNxFwDJSgKNLuNkYxNmjS4i466TaJgvZYugKiSzopcGbP9onG8ZbKzJpvSMnNaJML9vu5cfVftN8F",
  "key24": "2GuqaqQ72DAYCYahGkwQPoUSijiSj8wnYvBYiFMog8KBgWmnp4vo8tjANgqJrqWGx9p9iznLeSAF32jBknpyzDSW",
  "key25": "3KCfTtQztykHArchkL8j87SwPnrgdMgusdq1iSATRhoFC48eEdDCEykFCn9yfcLDqAibvCBxKe34c1MN5iw6NCgT",
  "key26": "juV8T1UuJXJT2QjDY5D1gxHecA4jELL4CeT4UaJ9tVCePjGU57okv1X6F644vC2969GZZWia5gCofU2wPvj3ypH",
  "key27": "5pNYhBxvsyWV9L3PaKKCG8zoyr4Gx13Q2gJFKXhShhjLHtg3m71Kwr7miYboT5V1Bh2qHedB3DQ6r9hYUqqJzj4D",
  "key28": "A4jeA3yd9Nrt693fhm3qbv3179X4hDnNNDMg4HK6ejH98aAq58Tx7bvGiGbomk4LbZdaBpeZf7JxoWTa91UTHCJ",
  "key29": "2YjLxTyacgFdFyW3o5yG84kbjFMKbpq9hErUK4dVUbcrUUJ663WLWcqr9MG1srQ5k1n8nn3Wt85Gywwds5sYeZAh",
  "key30": "3Uj3ErnWHzcqz7iLFcVpSjdNmGoi9KdadcSM2CZHXAs6NyCB8aatB657PQspdgELLTpeNS4r3DGGYbYYDiK7ZDdv",
  "key31": "4KTM8Wk5nzH2JdZZsDDH3imggKsQedVJ8uXj7pCQLYEeD4ztCYrTWjEcEvC5EerWsijgvXj5PznMKdtSJLwhipeG",
  "key32": "2MszWnk1GVfKA1AceCnewX2box2g4jRNFewRWVHZanKAfm2uQvAtYMheRz3Ym1hUPE73SVnVRumVRUaQ8XLiHNZH",
  "key33": "2GudsHyA76K3nwrHkEgRXs4T1sVZv7jUVKu99qEaH55phBvaVTGSF5yZ4zqQdXc8869T8xWswN5w7skvcjuMuru",
  "key34": "2F2bowsPkPK9QeF7JHQ6RzHyL91zap3nuQqd3wsspWJyLZC42iUdG5HFqDKLs9QQSk6piocVZ1bnQwkEUroFJiG3",
  "key35": "3hQ8MEEsoqRgJiwBpSJ3LKNmtrCv3FwX9KrRJVGnWHecEmFXUBcbALW6WFbJVRByF512Bco49ppw65jY2KGbh22g",
  "key36": "2xSuV62ahqDqqxWhMGscP8SHTMKqNK7VuQWMMNF6ndiBFtjb3gtTrwKh1VN395s2zEFbKL1D3PQpXiWD67ys86FS",
  "key37": "61nQ9Zizsn4DbobKFZdygwJhDsoEe1WvNbUGqTD9qrwbfF5p2uJhnLcYxu8wtLxNA3rbaLVvrG6KUTRTTyCW7fEb",
  "key38": "5gDEuogV4wWBabE8xDkkjdn8whn14voWsbjxoQYyhHCv9y5q652mvsLmsQ7AxbaNnkWtTemnjehLzDN3oRK5wMqM",
  "key39": "2MEJhCMgB9DV3r4PC5JXPcw5t3nZGew9fJJ4YUv95FBoLtRzpNuJ11PbJqcCj6ZF4R2cadmBGYvgCugmvnE1K2GV"
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

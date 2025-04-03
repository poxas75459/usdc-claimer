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
    "284rzJ3UDfXWcg9Rfwsq9zCKYW65YN2Bu79Jnp4RHPJbtPgif4e57DLNdnKutGRqATHV9j5K3s2GquMnBVLU9HPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qv1tNgkngchpJVZTNE3FjZTiTZd1XGeXr6c2GNuEDEXMrJ9GZnJCy52yqiQfn514GT6JqFSCTk4dr4KcHh82jDK",
  "key1": "eUPDHTiMqjbvVgSvhyvmhUT5QUFGBVWjk1yaSjJktSx8oxYUnxpfmVDsRsra8ReuJLPKU5FCBxSohnzXgHgkJL5",
  "key2": "2AWuYRjsqyUezQapJiSFWcvo82h3qpzYUc21wbCFTecv99CW42ijfpoQ9i4LhR2zVyHiYuh6c29KXemkfUWGmnV2",
  "key3": "4mTbtasNJgSQudPoBCWqBfr97X11EywceN5kyHaN4aeNeWEcCZhpE9RVZiNRGZF31Aps65eMsCFLNgwVj5KgeMFE",
  "key4": "4Vummb4jVnzBixC9KfvCoYZiTRcoUHTaJ8fzmgMGjEjaQBDrdK5oi5i2W5d8PN34SdAeCD8LpKSaNQQqWQjKCZic",
  "key5": "3ifT6WiD2vwibn7PNNrBsi8pdpB5tqKw8e5bX12p73SaLRPPczvYwfdt4JY5hCRygNs7Reirb1PCqkkw5yxNiUkt",
  "key6": "411ahCrCQx3kCo1uzvDRjTCSycApcfT6vSvGbce6r6ttKxiKSNH4sm3sztvwuVeToaiKbEgTc8pz1TdYD5KSF9NB",
  "key7": "4e5yW7JzU2RsbKs5at83X1LLXzaSq7d27iajWdfi1UQjoX9vqM9Cme1fEU1DZ5kEU95tvGongtTpPcuN598cb5vh",
  "key8": "2Yrixb9X24CAi8bUvY9WyWaVE6GmRJibzakyZjcT6aCxCRXiyoopFMGzLqQAJh1J8b7RCjmdw4mDAYUfsnjiZ4qX",
  "key9": "3rkpcXTPQd9HsgHEzXLq7M7CHSo7hv3hYT24K88Aacgoq1bWb6UwGMKGNfVuSSWKwyPNpmkz1HMfojkKjKv6LQ2S",
  "key10": "3kvNYpwV51hgkvVWQbsB875PhdXG7AxoxdKr4WsKxMRjmxHPRjYj8NrnDa5rge2WLjjFbRM6HSrTcBEC4jukcbuE",
  "key11": "4qBt8pbMcoAucTpAHydPD52WgRBZ4dwqrtQ5ZegSfLGFx6dWcvZKnhEqmwnv8rZ4Lt1mGvw8eFjW26QQLqXVrf6W",
  "key12": "5vW45P8DzwsaFMTBmmtaEpfmch1BH7hVk9N7u6qYpTT5wXWCsE6Vqip3Li3htyzrcswUijXp38KSpKCbjhLWRe7C",
  "key13": "49esuyjvG4Qs9WJj3Qw6zQDDGJJa1SSR44zh4x9CNzMqquBqvCRQKPeqj7z75PCK57W9ezKoKBMxieVR9448hhzs",
  "key14": "3tzJuSzyA7PJ2tDstPrcXFimAfB3h6BpSLnzqt4nuGFLpxeEN3qjxwnsXGNst3qwpb5o9Xsv7eX7bsfGkw2P53JH",
  "key15": "3tdJmnfR47iJ8Ct8XsfHPUDDzecEaYNV26NbPgNg83fMvss8c8m1bjBv8Sr74oT2kc8FYKAEingmrhjaNaAEXWFe",
  "key16": "5nW1LAugp3PtYpavFLMshna7GGAwqpqUE6HLUmCG72x4fth3JB7a9vc3NtxTFfyKkBJdUYFhH2XiU2qBb9sRZpdG",
  "key17": "xSi7J1aCMxT5hLKqa4yDUCm6tqXbf7gwRfFNCMTEr88KgcTaXcCgivxw1pc1bs9kf6ZzMozaWhvUTGDRkSwiwin",
  "key18": "5X1f56XEPCjLyWYtDZchqbv9C2QpJQs1UZ3tbwaNK1cegTqN8eRFPExu4CAxpS7RFmvnmpwbXnEEjNdvpi3U7fpM",
  "key19": "2e48T9K7aooDZqS5og6D7avQ8BE5gbz2eY3RX5zfVBhqxKdTABd8oYQRFMbzvdjpzt6jqCAMX7tYGj8CAZMKvL3n",
  "key20": "3vF4hX3DB5tsbxt7dC3VXSxRNzaeCANJPtsyFmKrMGqiY9VJrM9ynbvVafPiFbUfAUpacUcVRpJiGZ6un3SkqQW8",
  "key21": "5jwiQQ1VE9oRMsVQffJHmEbaB1ZvcPRacpCPztCrzCJXbzX64AjjR68D2nHv2mRNi1Q87nJmeJ4QcuRy5nZ6TThK",
  "key22": "VxTwpKBVonamvvPyeAGqWSnjfCRBg2A5v2FH6pSTTNYqzDwVE5Eq34sCRAeyJSq7dNcsBphsCREiVLWoMWLzThg",
  "key23": "ePiH6bNJaoXboYv49BU4uitZgmMgpWjtnJS4Ziyuj6hBUXTYCGwHdUxoQ7Bp8nhdu9UGG9hLeGGPAyieqaYAFN2",
  "key24": "62qSAaesKvBSGjPs7AjQrdSD9iEZPLLRm1teCWaeCUPG6yDoTDaWZQEHCHJdV7Z5myKUXhXsgxNEseDxEuLc39Yy",
  "key25": "4BG3f1ckj1LYUrTm6VjKibN1A2F4D6wf3bdkQtPWjmiHN2sK8sQgntNQgJTASB7wXZUx7VHR1Sbx9ijKTsrmKvDG",
  "key26": "5Nm37tj2HjjAWwXYa8sMSAgumkFACKkNy5kMVK7w24f4uNFZ7aoC6873oshuwfaHy5tXtKFPRRWvSFJfEr1sVvrr",
  "key27": "58H8TLCKY9B4VFsrAwh9HtntpdECGzAyEw3Y9uRTtnXMjKsYFRQWqgGRZ9q1tPaSUZNjkYmRVcYboHyTH6aixWHr",
  "key28": "5fGs2BMZZaZ2y3GniWCAhDF31NfNBVGmcnpfwRUbpAotusw4NaPBqPFu3ekY1Sc8XDqyKdaM1Bk9yX5C2AeZ8dzg",
  "key29": "twcWjfs27hHazCxZjAN9Pr9Rb74vP6bY44mzqxB335BBBdbaqk8m9t1JCgJUUdGwp73DwkQAPaDKpzj1gojEvjh",
  "key30": "3fGxrddEpmcVbPsajxdtBNuHnZhnTypLs2cvAeEyuxnkDeJ9uQxvDrYMqD4VtTkys3sMfmGd4zvEZuruLM8TX4Mz",
  "key31": "2uUyFjALDEZyNB4dMC91ujgePErKoB8WwtepiaL6NtLGgx3AfdS6U2nYSNDSpwbGEbiiq7FvoHsSKz8uzwgXWwhX",
  "key32": "3MNwDgbq2Cfveorw6Vh2s5oCzfSGGwwd8w6tmtgMwpa4SSKj4rzLEiw56nv2JK2dM9qVNvHwhX4W62cm8aQ4arbh",
  "key33": "3Nuaa537t5AffopLJacPMU5mRmxxRkchehkm7MtqQA1LrSVE7fz3iEb8szV1MeEG5mDuTDC4dpHqBK3yUJ8mTJ5d",
  "key34": "5moXtGSpRcNJW7avaprHMT8VoinM5XctHB5vaGN3tcqoDVYEt2aRDusXewRhLRDZw1h4swakjTeqeKqMLbPwU3w8",
  "key35": "4oUKfTfutzLmWdq4Q9LWPpqBfjHzS9fFBT7ofpXdrFVWNzo7Nt9CBiQ5FPyQkrUryWtR9hdR6yjLQ4EjFCzMBzFR"
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

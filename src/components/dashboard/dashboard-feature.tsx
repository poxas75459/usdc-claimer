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
    "5wNcA6PnetwfXDfb6Bp5yaqhFyAg8CcrtnxrXFY3RdtcY9wMTohmwfRTnGL9atTZ7TtiuM7TqwVhp9FqyMpsDeXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dxX43QFjmRuKDmZJPBKN9t9x6wJvfi4yNC7unoCzgxLuwmKt3YQrv9BUxyXiMoK8iJJoKDvVEDWLqSa6xnugDS3",
  "key1": "5ii516E41b4Bbxo9ramZvehkW9XfbrFowrYWf8BTZYofrCk4W5uDqJ5LFdrSD17wqRsZui8ECZYG2UvpZVbyt1dh",
  "key2": "3QCrjkF9uigPKpChJtjTrf29Wa8H2aCRhCB3TtXroB3rfsjES7oRb1XSEu6ejFjwFCNVJvJn67eAhjjsuptKA4Et",
  "key3": "3qTw81aipAuvM5LiLu84WnexKBimnQrfGcCM2xv1Jr8rWiJ5P4dcjYBs7dPxchr8zhNgLwDK2E3pEsJw4TeVfPds",
  "key4": "3CccHhi5n5Cxs3Uj93hfQK3x4gfdswAG5q2Usqkq2tX2rQ11t6B9CV6obymUsy7dSGS6JwVaPjUrMXn2MXUiPssp",
  "key5": "2RTfykv4ca1iJVUm1BkndzbQoaVMsmP8iGTLfnxgnZRXtPdLxUpg2i2FAiRvBHZCZCAxB2wUpbtHx154eyvnnXaH",
  "key6": "458FJSPXivkP7bprwEerZQv3Y74pfqtA3apJ53pGhHDbZW6JDdWSQqDGeQZjqWJAij6pG5RBcMEzH9rA7kU5u16M",
  "key7": "3XHA4TzUr4AUPm9dMvuRT9imAztQ8pgiyUjv5zqhuVYNgmEbLiy8BCYHRfuwvPFQAGUReEBACDBSRwp598Lf5JbH",
  "key8": "5egcauSF4UAeaQUuyLXcV2yLZPindv78PXEQpKSq5WHSRZJLbq8vKrC9wsVPuH2sqhwS4vgicmfse4GGoz2SiWBB",
  "key9": "4kMCeRE2wNX8jS5A3FQJfCLKvccfMGC7ew4tnx1rrJdKjizvq8SRnLZSufkmeBMR3jzjDUSxdcJQo3xArvtNaQwW",
  "key10": "iJ3dBs6ScrDJJ4hRX2JzgUU3uAtiXe6ofh2rpxdDp6Z6Pch29QqMcBfm3duzFgVfXcAobMG76bSgjqPVxd82Ekb",
  "key11": "5jAjTGUirb8rVQGAj54o3xEtLYukQnd74LXwDZqZCWtTgePrrNu6i4ikN4Eu4gRYjccNQWeMhr4E2KfPwvyhJhvf",
  "key12": "45VCcQFuSgjgAnPtaPgM8yC9mnxNA8RGzZQiMYUAmFTo5eSmg2Da3EKUFoHe8DE3LctzZSekUmniZQwwjjo9LmR8",
  "key13": "4yEK251wN4QrwSV1PUqnSxkwmmhJzmoARYFzTXvjtSWu5ZrmRfQ1aTTe1fMGNZUMpAGeT1u2xorkETrLTQ7uaN37",
  "key14": "3rpJwubXem1pdnKvodQh3pd3C7SVF8Fo2B8gTNHxm5XAP7MmndHytUr2szbDicZvWet8bQyeKFmeizPmdYn886wc",
  "key15": "p46jkiDvTXevMy96CWWzFv8u7pwHVps3DoPWipUKArqoZafM87U4xAMXRiPgQYs7uH3i6V4rbuNfry5xB9BiTU7",
  "key16": "2QsT9hSUUSxkFxTgDQu1JjeyG2DjZwGLXFypd4g9okGcJBDS1TYfoEP8SuaY48mxZV7wHdhe9FxszpXdZnMrq89N",
  "key17": "4dsBC6JdFMvoJtaLepzyZWh1fyRVTT5QyXVRat2b1CD4uWoATPYHcBCqox5YF2Lway1KpC872RzBbWA2NvppFUFw",
  "key18": "jZGgN8uZaCRP4i5UmU2pt67MedbYeWdJ7TkNrdZ1aepSMN5QoyexjhEjwy7rjLw9xSgMCb7oz577169Z2XFQubL",
  "key19": "NkgBo6iSE531d7s8JFjZnaZP5Jb9aPUmvww8CQ3PgMu9g54iuDvVoZvzeE34VJi9q3qCZDqizMdt3d6zxke95xT",
  "key20": "4rCkujWXD9odiRPcEGDBS65bz5Bkkoq1pXiwPzmodANCyVzxX6v37JQ926GtxPPVUFhg15UcCQyHxrCFm7rx4UQA",
  "key21": "4pZ9oRUTu2QFZGEV4dAyBmSu8eJkqFJJVbUAhRw7gHYYnJSBynFNoEoZ9SDhTkHfcfLMqpXKiF2vgh7P9AnZrhuL",
  "key22": "CtqQTDrT9uHKqx9iZWt9knZfpzX2LPgsMvTSGPEajh4oHjwZp7BFCmutuuwL2eDCKWdvCyMYjJDJ9J1hHJSPDoT",
  "key23": "4bgjN3eLFRE6TxF3fSjS1vaoqJTz18JKdDgXr4kpg3TqhpzThf9XqwaYdbnDRX3Y8bLjQziCT4gP6WhDDqkHJeRW",
  "key24": "PKAB5eavSnquQeQs5Q9M1Po2C7JPd5vatkmtHs2eows7HubWgPSShp7pKMfPk6xXhbRiT846CByrFq4TfTWTkzc",
  "key25": "UgaxJTvhnQ1GPzimaGjkPE2JNyp3eiiYiVGceBhmdRATNNjvQSEAQA3x1cvNyDBnePg61i4euioym31GzNXyf6t",
  "key26": "2qezKFy9D6ZUhVfyUVwj8n9CxDYg9eL2n5UWUp9TdedYcHcW6znCqTdxyhi7yvhBHVanftbAHUxpqGLb6N9EZDRb",
  "key27": "3ryQptm1HEGCSUrV8xQK1h9zeVDPMFb1DJcU5Upj41oY8KuqsRAfm6A2n5gbDuJtZVWAcDjTbrMTzteSUpBYC4hy",
  "key28": "3Bsq42YGuKYg3MCAHQEw3KpBTikuSjTvE4iQVKP7qyQyWncKAvvBRBPnZXWRw8rZgvQGCWSD5XuzBXp8bTTegqAQ",
  "key29": "4BYV1wMQez26krsfhnQRiSRPZ24ns4qEPi6zE34jk7axFLaGyTH6gMGggkChuSdFUHTLNqFaM2hHxJ8xikNsAbP5",
  "key30": "4jdHQ5MumcYD8NsEJTnJf6BnVK6hT8Xmr2XAdJ75xm3vmooyKbaR1NmoQ8X2R3agtgdA8JegwVKA79QeufDfgUy4",
  "key31": "4upyqzEcNKG66Uaokoh3Xz9wSAJLWQWQV3GvgdQFWP1bpYFgCrcTqSK1qxbMiPHUrrEdTz7Y35nP75c5m31XnGRG",
  "key32": "2tFSyTgCJFdsf6Fhxh7a9SnrXoeQZ2c43cmVDyw6JPWMs8FJzJ7AKqZ2ZZ8uPUXcBGtcxZYmhgaVvvpM9BAKwbYv",
  "key33": "32WKXSV2BGbeqgiRBpTm3VbCbB7QuqeAnD5FCtDXC7gyLdkVM9D41cn1WTVjaqYfGwg5XuQoA5DGigNK5KhSAJpe"
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

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
    "2qcM8moKW28qvbPzCb1Hjqr7sJTyJMHkwyqnMzhipU9EMFTf1gnmDXT3pMxrWLXVuzZcyUqmdSThsMRmbn8hEtZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c6Af5nwfF91wBYXfKgPHNEWMGKTys8E2TfPM4KDc42h2V9NbmWrdC16LKAq2t36iLQUDpJVx685QizCBPcuGirA",
  "key1": "65ncSfGm9HwwR7FYpPUesGgenNyy19MfbnZht4Z9ZmF18vRAy1G2di3SZWZV4EoLyxrn34ezpRLfngRbyg2MbEgs",
  "key2": "Zb3FsCAkWyb8yc6EWBM655AKwLpE3LvjGMF8dhDeTMfsdTxLQLSFs5EqiYLMiyYaX5kNqcxt5exEtpq2Hp6ZhC2",
  "key3": "3YMv7MfqGtBaBRAJJ3fex6iHx7DGyHTSw1DjR8qBX3yyteDEEmy4fAmTssgPqAE52Z9hKWwB7N5ePT1gLxWE1W9a",
  "key4": "66Puug2W6QGTEW9ahjFLRzMcUhvHkuHNqV8XL1nR5DsN2g9duEpRhUcF3mfXDRDWo9eAKgxx1EJLZESDYBQETspw",
  "key5": "3wRnN13i92PhvtFyMEniwXYeAhG8TLk7YpiNW3oeTaqgapzC7jq9gvVwpmQrzVZyZ8rx2DXJRRzzS9AhHjDNRvEW",
  "key6": "4NePkHkgoH45g1PBieYrdC8j98mZKt7erdCzKEFUDRHf5zjFcAa5tcvYPQPjV6v1W6pvpHAL56DytbWvUsGso829",
  "key7": "5qLobt8H3PL7c2cgFj7bk7fEo877TWV2K4uz8TY6hgpmb8mCBSWYsNuCLJmXNphjLSnkHXoqzJdarzWL5MvA4Xn",
  "key8": "5bGdQgBRzbKYTHHbS6APEF28i9EVaAxgk5duSwM6saLdfEN6TH1Gy9HVHSRudkKNDiTfuXKQgBSXE6qhpdby3gEP",
  "key9": "3LhzAZL2TKpoBf2QJNnn6vLBV6GXwQcNkYs5ti4rgANqwqrQY8HSxKiTR7uNuqSb7ebZ9URA86JQFLxUDyvXXdsV",
  "key10": "2qss7oduJ2k3EqS9vtk1uFLZ2X3WjSLswB8VufkkzRa87MNNjo75aGRywRGopLwSgkYAhS6pw4ad4kJDmxD8jXkk",
  "key11": "4gLwUMupZ5MKQme1i4JJwg5gjfvyDMwqz7Z34vEneDogjfuhTUSPJe3gJXhKw34DJvJdmxJoHyDkgzJGFNNrBUSi",
  "key12": "KWxh6hQ8mwUiKqVx23g5sHF3RPDNW8ax1W48YGb9PYrbDLpm3eczsYSZv1QWuS5jTJZen9FgKg1s5ZiU3xhYFct",
  "key13": "5jMSJfPP4v3AahMAyhpiRrXDdYoHsVAFkr7QoF516LS1fntoaKtoymAH6KDUbJSPqiJ39CjUkBsi6g24AhU3Bq9e",
  "key14": "389ABtFXX15EYomzdPV1aguYBew4TwixqERENireQxwZTTYD31QJ4xv1rqTxJJhBnVGDQVV7N2TCxMt9WT2bPgr6",
  "key15": "F6x7PehUuuUWBMNsLRFzNC9DhqM7oLtMKxw9HSyJrSWgRn1xsQhqV19BeFtAuZmjtuhY6tX98DdbxmPMeGEbZff",
  "key16": "kqB5oR8yfsKZwhoUfvzXqb2eu2WvaNSSWRxSdy714fLAGUNM5Nrcd7nmurc6vUqurginu9EFUx7btRtFakksZCu",
  "key17": "LEYah3n2hNKkwrnvu3THBkUF7h9daznQZrH4S286EPg31HTZs9Wugg3S8Rem5p3R5oRbPPCo7a3SXxU8KaHQQpn",
  "key18": "4KYoYeDpY4PStxi7GHaF8otYp6nVGDBECP6nzVhqB2itZK837ppRay4XTkcFTkRSvcbsX7TXn5LfRpvgNSUDx5Uo",
  "key19": "55Y5DSMtA5H5aYgZmTkrVopzYVSYMxznA7ZV7SG47YRr3VuqK7fVoccTnR6GQXmoh8D4PXQ86FcwGZBETqLhoMTX",
  "key20": "SdDBLdXy7NkT58gLVfYk5ZSb5xrcNMz59uMQxVBNiknG3Fh49bgtAEwkQ1bbuuVJ1Vjm8ijfhLfiPswV32V2vqX",
  "key21": "3P6zCJMhmv1TvTAx1vKcVNRagYdS8QPTVrjk3s62PwWijrqftGnqek1mMmptXMZdeehMMYa6tmmiHv1trUxQCNwn",
  "key22": "2TRfgehchSG1rMwV8bZ3ABTqoTWpJUdQZp9tHbZ97DzSbX7x5SMaDSpqMTy4Gm2SHpMZruDqsUAqhC8GRWQhMdqt",
  "key23": "4Wg6VbkfmePscDAXwuYoYDd7tsFEPWuduQFBotWSCtLPcRbeamMV2BRrHvnqjZZdP4vggddRML3J3gs2aswvooYS",
  "key24": "4FyG1S14mpZEW5oYDn2hPZeBzQNqBcWaonzMAvfMLnYc1UsDWpD4PHQpDpLes8p4A4hiffZ7eR4tfoYRrZqr68rP",
  "key25": "2skyDhRD5nXQAs6VdUvUhF1uqcBF9pSoXTYu73GVV4MmB9aBmrGAak78SoP3U1Ahi5abFs2N7TLADAMXjHSk17Ay",
  "key26": "3m2P2SvJ684AobMd2nanpFxvGLuVtCStcUxm7m1jHGFzyq14FvSzdGT6cza5jCUmdzGzgVPupz81ua1wYUnvrs6k",
  "key27": "jLVCFk44quZVLJ3C1KSHRMXDRjkxxsXKVcyPBNzqfrsxbBAy7VNxZ2k8CtMHbGog2xAYo6JkVpDkTV7nu5jBmbo",
  "key28": "31ULwoXynubDiReP5pPQbaizSevT8CDkwXbwR3es64czkV6bYywNZLcyYptRfvtxdtmKEE3bXuh6AkBQK8ZBJ7No",
  "key29": "67ZEhyEGGMNJ5iCRq9Yevh5DDrH83NVJPVZikaLgcvoLAvzFVHqYCUL2WebHuRK9HCmaYpf5aPRbvHxxV2w3JEu9",
  "key30": "EpqrZNW3QXMs7PdSM1FqfAC3UCAqwX6q9L7BJzmAYu2V5vx2vFHRJr5pt7uyJLTGTqut28BaEwUfED2DfDHSdqN",
  "key31": "3aR2e6dRZRfDfsJZjNM8rFqSU7tugU9VYw6o3AdQqRHdKb2NA4RxUJynBNXsSuDD6HcntpcLA3kJVRMr7GT25n6t",
  "key32": "3ErQAkxyuZiYLawxvAs4YS8QWzmZ7u6FJjSKzgbutfbjitskt9UnPggRKMdCpJo9hBgfk4fQgSsSxV413f9CkTs2",
  "key33": "39jseSmYRvGkbdMx5jgCBowAGwHF4TxonwVKwE6MDB1nEwLs5C1aTckvDzd7PAzXbYZRMaGrKF3ktyX2UGms3pkH",
  "key34": "36UMQdUNNte9Kbfo5a4Aj2obZisS734GmuaKNrYFMEyGzeW5ujq9bP4s3uCbtihVLcMDJhmqSrrrzAxVeqMqCfpq",
  "key35": "4bufxmgr4emBJvGmi9vxnZ9aJ8cdZL12J3MjpVgaV6VHSzaCWRbERwMVvuUSk188QcuceYQaXxZhHtt9Zo6R9MCy",
  "key36": "3tYbPvNYjT1Aff2XkN8Sfhs6stj7zvhpJ7McoU1NDj8TiXA6fnnULVuyWnCPWCbHARFc6bMa3XPC34QXQ9M5WrHM"
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

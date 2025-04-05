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
    "2FFVCxGhheY4yZN6J4xM5x5Kx53m5YRdpoLHN1YorMFZRN6684NrqiUwWXKV3p1cBhqwnaxPaVRbPmgHRnLqpfCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k8ro6CxUvkJ4NRmUR7hpszosfs6K8S51nSSBvL8m22xeRYdnrMuoF1fhkVyREjJQffreZoGbJEi5VWV7xWGNzgS",
  "key1": "Bnwphk3SyWL8BwQS9s4dhppMmRFPjJ3iFRKT5k1PNuTULa2bAiRq13CbSuXgsixRVWC1qLGL3ovcD4FCSNmoz1w",
  "key2": "5BfPgSYumQA2R38sXVcdoVX4tAHCbvAAYeDz9f6RwDXc2iRyxUcPWTjPyeoGDUjtryQxaizztMhBJzjLpSFPSEek",
  "key3": "53vb8n89rVgZjMmbABWsWA5qmeHbdvhsCLEQftPzBVpBg5YWd6W86CzKY1GbVBL5BurG6XnmJeZMK1SWEsa2LVpK",
  "key4": "33Zt4fPwWwaRSoyQsTMeWgHQ3kwj6MRauxWrDVhQCzYbQpexHvNDSyngpx6H6Q4mQSHBTicU7xdrMihE86UoDMSJ",
  "key5": "3rtVhuCSpodZ9aBo4rdL3aTSc4Y8z3ZX6XF28NDD4m2cogk9RSd3JyGQ2xeVS6WqowPjGuqFTdnd88ER2nSMaGz2",
  "key6": "3YkvqDcrn6fHwoZH9h4caPEgWQzxpUYt3ALVs23TVryzMBdeRKuUGBRUFafMneLcbwfNKKqpfhUQLTfpEfu1SgEa",
  "key7": "4w3ZVfpTfPqq1CTfMM1QDqfH81ihGfAS9xVVn7jvEJyRcGE4LbJDwAV7XA3MFY28HUQQPXZwufuVu8SKpPZNrjgE",
  "key8": "3ntZspMSfVaZXhhBkmYq63yjP2YKZzWCLPPdS4JkZZZktVMqKPAdBn113apKAPNPnMFSB3fswD9yV99J22VwpGzB",
  "key9": "2dbMmPL4N8MhJ17LcAgmfZQ4KF9zKYynYPAJVJUJF6Y8ZnTQnv5gWD2wugDBNKF2gqftSKpyvxWDnrUEW1k7L7Np",
  "key10": "4MteccoyVLSEL2J2ixYXxHbYB6pBFX4F93D9oJoLEgFpbvuQzWwmzt6FSzooijqFLQnEiDjNc4ve7dGqkGgwesVG",
  "key11": "32FRnMFyA3zBDEFX7KM4x2wH8ZVpZ9V8DMHnKNq7pMCugLaDgBX7FMjFznJUsmEtU43arCwP5SJhSn6hT4nrGDjK",
  "key12": "5M4YjS2aApDpg4U7NSPTgHx9e8f4k2LxdjEww33jHqRycLmGwe7XyTjk3yjJ9yPryUZDTt57t7gwZWw3Bgas2RqL",
  "key13": "4QMiU49UByt7zucVyArgpWNagVXMq9mtm8L5na1qCRnteVkzLYvfrUvQx2onneXa4ho6y3jz72t9qTWXRmFBz1io",
  "key14": "4nbiy3q3rjF6MYDsWZcFzAWUD5JTZxknXohTBbPyyQDR8jMEfdUjfBDj78ZNg8WSPBKywXT9gAYozJ7j2Wpj9EWd",
  "key15": "2zN6A3h9c5EcEbdY93D5Yf5bwQxMLQSdF9GB3s1xEkSdar8obCaHEGPbZy6k3V1mF3HQ6bkwAUp6T8aXh34chJuU",
  "key16": "28TfwAqj5xG4wrYK7YZWmyed21kUYxvLQBy2jHWcy6kc5sCe2Wv4MaL9xxsMTsEgtcXFpExYnRNfskCXnKxf4Mxh",
  "key17": "3Qp1tgX961SDLbunquQztMFmsjqR2oAHTivthnSmW2jGkB987SPu3L1NtsgkgL7vbUgQF4XDduDMpRtavaXjtLYj",
  "key18": "3kyBuBmuwXWo1Zqrn39RRRJctzgRk6pXymqaZzXfWHHH59LAsw1FJEWiynd1mGJzJcaNFZfanfoNwToFa9dfWrUv",
  "key19": "23BgGtyXiiAdemUHgFctznfR5yGF8rHL9JeCP1A2kMM2UpycV1MF4PSxHWfZKtxtfrRx6KjdVaGhk3Gexr95DW7C",
  "key20": "gvyNcV2QsUX5Fwxry8Hqc2dBfZaVXYc19b9jhG2qSUF3TYftQkwWXUmgUnaodFpT6z2ASTJCCwkYqErNvgqdQR2",
  "key21": "5zb8Yd8ERXdgTMqcDdgP2ZzvJw6NtudTjeShsaoQNTKbLMfbpXG3pNRFVnABTU1ARsn5h3X3oVagGoaR2z4XoPfX",
  "key22": "2qkgMLS9K5kFb9xkSqH8DeHar4SPpi19bMH1RnqL9sqneighGDn1L8HDzFyXYHEUPdib5t5RVkYEC7F3KDmuDJvb",
  "key23": "3L5pRL6hu2JgcrUjQjAaHL2cG7dBCxv9SgatWF4SPcNYMYGY5gxf3adN7BXBf6AH45Bcd9y4aG6mvKzeAhvwkGqd",
  "key24": "283htD8ojQzEqQ7ZHHYUMRjAutobXaSabTWNh4uMxFK5oiRBW2cNKGnbVKTnyfHKcRyES5yyXdkoX1zRM8nr8zCC",
  "key25": "5cwgx5YgLtf9GXYHUnrvh1ci1NTd3WvkFcdustuPHi2NHsMDgLgAAEtNqaSB5hiptsv8fkHs2pyu3YXjQSjQdiWf",
  "key26": "3ECHRYyWb5PBqLic3rbMhrtHtQpbrEGEEasnhg4CvN2ibWqGT3vqa98GfnGg832g7ThP2gV4QZzvo4zLH75o27Hi",
  "key27": "3av7YY7SjunJWbMAf2scphh2g4qCZmV9wY2CSyF4MVuRQC2u1SCsR2eQKRUpSS2qmLAxT9mPXYJPtT1cEmwuiMQC",
  "key28": "3PboAwSVaDhZhsar8kLQ5rYKPEydNEEyAZq24eaMt1RJwe1LnViYpjQNdjTZgqGfviT4RiDRCDq8cBjViRDghnqA",
  "key29": "66bQNFQMKwxd8eQdFCX9hSntor5Hntfa8vxBHBnj5Eac5E1QSLWsH7g1m5hj35H51DNiDnUKHQegSk95gY9LV9pC",
  "key30": "4HxBRwr2WvXbn26Ms2K43kRsd5LnLgd8reNb9n8cnejdp7R6bXJzA8atPnQptc41ci8GUj3bC2rrbLjryVax4dEz",
  "key31": "5TDPTLEK9Y81Moo3LGVijPH9eCEk1HqF1WfjHg2GrgV377pmdJPwS6tkbC5ikirEiT1n1X1uoLF6h8cXvepmaEZ3",
  "key32": "5A8eh3yeZrayqKBh2y9KWtdTre9ewHhVgz6xHi9vxgVJk9CooPBqteN653i4jovTGkjEPAVG23kDtJfByjuCVFwq",
  "key33": "3oLwP1HLjXHNKGmHYUKbYRLURN3cvTFXPdjRRUQxc31u6A1xAnRShUyYZPskhyve5Ndw74h8YmFdNMQeW1Mj3c4c",
  "key34": "3hVJFnm1QphmctKKZogQD7z8TiaeYZREeJqArsfmViMhK9LAJLVRWSQBL2pUPyHsdQY9zL3M9Dzvt4ByLZS8FYg",
  "key35": "2SWUxQQUeTKMgjk9sxw5KhNyZr5QBHtJx83k3SVd3kjEDA19NyovKZ8WQQDL3DLmqP8HoJpX7hNwsnjFsFPKLSdN",
  "key36": "2YpzyUAtGH8NYsqfToupb7QoUgHommYUVmTK4aYecpL36yAj6cTQpdhvGZAx5jQiUxNH8JRUfA6dBfoVdyXQoqov",
  "key37": "pnzr37BWgCLsrE1XiJhFP7XUoXgKXkDWjLk7jbQ77D1rXRoxdXbwBDtED6NgQQJ9Nxp4fBHCxAE4Fuosw24ZiqT",
  "key38": "45XjWz6p6gL2pxb7Ucn5goV7d6AiX6F9S4Kud74yax7R51ZAW2Pfhp63mtjg9SMnebKjJ1Ne1Xby2XxX6wytSjir",
  "key39": "3iS3h3LddqWy9xStpFpmJ5ivuFkpsH2s1VmjquuQmdahet7mqbUZqKKHGpqT4bGbafLpikss9viyQdmTJmdPfb6B",
  "key40": "59METRMvvXgKsxkwNqJMhmMGvtShHgTPHiCK6tUKZF96Nvpu3hEkazjYc5HLYFr1Y21oNtWgVwCpf4c7DExh4B8M"
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

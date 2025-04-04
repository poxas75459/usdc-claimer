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
    "2v7WU4FUUSsbwRvgJSoVzPkVpa8aGu6LqxtsFUV7oFJzxFTPdPVjUUgwZA71NtFJjAWLfFrs9gPHguRFMLnyqgFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNfWHFPDXYkWASs5J6jJCQdL23MqQnXWnUDW1wvk69uxBxx4y8Q8X51af9zr8Zye3mLH7EDkHAQbJnFHQbRxBaw",
  "key1": "z1jd8umFFbSDBbTG4s9rnHhUMxqZvJrMxPZxSYY6EZx4Cbzvt1iCsvaxj4Tyv1Q2uSJ2SSNMbT5Z756UNLJQdeZ",
  "key2": "4Da4o48BmGA1b6sVy6csPZ2GHgKGyFPaAje2zDGKW9KJqGFizDiohgTDAo2GG66CiVwVwwiAWce7aXFigjpNPyKE",
  "key3": "5qNrntHBwe8vdRF2ePxvYT6d6kv6fVrYhUV1n6WagJZnt4XNmoWZbHXQJaNB8Myzt8DiVXp7bZshBtwFxSr5HTN",
  "key4": "6s8fKwWXQNEMB1Pw3YdFdHHRNBQ7HadoBAmn3dveYXtLCdEhqoE5T8FRHcpgoJgwQc7tY3XPk877d1vUrGENNFm",
  "key5": "UM7QqS6r7knVK2qdQjxZpbTc849VF3VEqqYWyifi3KxB365HxSJJAgNxj3N2hCb6zprN4jsCPiSQip2PrLWUgbZ",
  "key6": "4vEgDcLY8spia8CxVk9cHetBxHDdGhRR3HMjb2ZpfUHMmqi28tgKoYf23ynxEnTdNJXXKXoroMtWvS75uTuFki1q",
  "key7": "4JDdAtG6kEh5xoLmguKJUiyjBHvB2YEPHrSRWJiUWsnx9v4wKadbzKMrM3cUvR6jVFCE623bPFQyTYLQEdwmsWGN",
  "key8": "4p1zRwFd58tynrqQbxUhY88DqCoLkE7VEKUXqihFo8D61o5V2UWJobQjByEPcyetMUUhkQrNNcB5z9tNN9vNCtbU",
  "key9": "3UK7ncuBRL9yTfw2v3LiEQfBmseSLHRmdJ36atrHdC8pFrLEPAyCQg1PCVGxvzWFuZw6srRaSRywNAN3AV9oa7L3",
  "key10": "2W5MPeGmmRjmkeY6idMghKpYrKehBGKugan9CBjboCyryuyzZoJ3oBZwNebiH7rFmuHU7QhffwAKzx9DukRZBy1T",
  "key11": "2z4aSQqJwrj99JZE6y93J7fhbdmiwvb5QZQjjcK6EsTNjF4uvP9cWpKT6nEBWs51cTrLGcfMtEHJHjWsZznVxuHw",
  "key12": "5sdrd6wtJN2WpNT5stG9iFXHVp6sfwUFRvAPK4a4SCwN6CZWQkbSQKyJMXf9kwmAGRmXSeUiSdyQcG53cneZWMN4",
  "key13": "3QJEbYM6xKuhUt3kp3HJSDwJzqBJ8ATkZV7bQLmiTPT5Y2Y8iBvZxJ81sTgBAPGijdAEv8SMavftpqAz3d5PSFsY",
  "key14": "4KV9VwQLvHvBzSb2ppnYcCWz3GxiuN6vp9Ppz6vHGwV8jBB5m6gTd7x3t6vo5FuaL7S9siZwDJ2D2VfKbSAmLZ2K",
  "key15": "kHLquDDHwKYiXrEpWvwDfmr66tGnnJvugdMt5QTjo5PaYLSiVK1jtycoEymDoeR775EyjFQfMdox7DqLyLxUXuk",
  "key16": "4mdoDENDDCcq93gJ9nB8itadCQPHJRmufMwnGzR32nMm61RSwaB1Y1RXZ4crqjL38X1FFGpLLi3AG1KU1HzZXVx9",
  "key17": "2tikxifFHHSNuhZ8WAjJeNWNFKu7WM784ogYCpxpY7XAnHuPpaQVLZa9377qCuxmAgmnQHKdHWz1ah4fsQxXRQyx",
  "key18": "3Zm3PXGgdNuDqWuwcbR7b41VcxiGzV8yhB6TpHqBaaJkMrQgY1WPjoG7Dmc4Y9xxLiR8o71CRk3SjgERdL9dutRS",
  "key19": "2H9EzcrbEZS97JLfWDBzpESSXsjgyDDctkM5PrQzPVV1qZCJiy7N4bjHUZmy8X3LX3yahfYcmHVejiuMYwHTL4sF",
  "key20": "XPF5y6J1jLPt6m326nCgp8KTvKjX1DmXsAKKJVSEGhQDs6qLMf3teGpi6PAy39TAQRvLkA3pQFX59rfoEahE6mE",
  "key21": "63TzUvBkN37v4Be6BA8Y93iWCtbfLRq3LCXyicXNmb1Ebpk2KmzxSVr7w4t1v74v67vCmWPefojzVG6LbUeo6koB",
  "key22": "42WGfUS8sAT63GB6imobfJidxjRPpBBsa2QqAHYfsndEFXAJ5E1vDPqJgHGMwGuSfqqD4esMSsLHRu9t8BGGaTiS",
  "key23": "4eUJuj8M9KSTxwhJvMmtRBFp9hnBgzmi8xLEy3Ao8PomnyeJG7SaoTNqyMcmcZLGazK5SpPtSto87NtaSdZnWM1V",
  "key24": "4daoChaFr2y9BFfhLmrJ4SD3RoYZwsa7AaBqsMdA4EB4mi1LmQyAMGJ6jm3znNMRF9AY3JEtWki95ZCxrAAMdqVB",
  "key25": "55NfE7CgGoK4cXNsKVkHL8jN2GeSLGGHYbdjfcLRjpUw4zyNNGzcBb4wvwP79vncQN17AGSaoSAWtyyHU6MEcpYx",
  "key26": "3DuGLME2jmQLDFwZCqvka6YFkVpk8FuM2zeuLntXPYYDsgCwnYhZsNQJb1jMoebxoBicYKfpTd5Ci2qbqjes9Fdk",
  "key27": "5adP9BPZrWGZD6epg7KDQrQPjxL4M3DJjkyniEck1m91sL9YnKXPGo4AmZwQxrF3cLostf1QTs8CoiW4ALsM7s2a",
  "key28": "y2XwQo2YAd1qESemyWMegaoDBQ3PGL3vgmBQyGDg8MCse48ohoPPCj71J39yotmEfV1ufZkDMYoHpTKSTeqm9ER",
  "key29": "66wfkDf3kG4fSHFQnC6o8cyTcaqU44brwZuHJeaKf6KQWaFtVtDDMZLNxEnqWXH6G2wqmeBHS2qC8BDmQkHux9HU",
  "key30": "4zX6N9k9i8bwDYy1AQsrLen7ngZyXzMyem1bVRppjhJ6sb2HcfXiaVJXHLCP8cHvYBJ1HnapRJQXk9JedTnL2yJX",
  "key31": "5xi5P1MEtjWkmo8hpGu13JGu5FuzCbhFvYHSw9JbRfked8Uvh3qWS9n5Z8cUVgqX1RXnheg579ZUHQxfsNqjS22P",
  "key32": "3Ju1VhhKDfGEmdh7CTZBa93wPaW5DKAdrWvWWGEJ7poS6nUqdEhLUEbWP9mgRk682npWEqofPyZcQXN9v2wGNGEV",
  "key33": "4iBEweViwQMowKKdx6SknPzVPSNGREu7tR2YLucwmg5i3xWh6tGjGyvC5Nx8sKuasLzkN1YuJu3VG78qRbcJpcGk",
  "key34": "rrsFFgKYFFnyde236WwhNDxge2cf1HKBVGc4qQ7gjtUh2VEGBT5hz95UTs5ZomR6rwej7XRKmujxMLTWffQaGhn",
  "key35": "3rvDzt5k8wb3p8feKV7TbAA2CPFSKRoqfrESfBP2PUjMHEvzNivQsdE6WMhuMaa1xCSqMsk2DRBADaVxx8PNqdhZ",
  "key36": "5avcBD79zYiscojSF525Bgvf7kQ852YkgQf46K92DGpjNjLd9WoQijMSy6UuF4wm6LCPgYLugNw2VtJNQ4vV9hwJ",
  "key37": "3imcwaQrckV9CG5FgbWMjF7dDaR65JGXtRZRGk9EPpXTtvyU7YG2qfxL5eYdUVBpchMMDoBZyPsnxEbBUVYSsYPd",
  "key38": "2SauFiA7mhK3JnRt4FGYsafSPijwev72iK1JBwFZ5WweCeb9L2V2XUwEMsUEgR8hHuBzHEhESK4Tj6axJ3CrMU3T",
  "key39": "5f8AWQCo3ppWf352sfVR6DGey5Titmr4aXhWp3ozEGbUfus8534syKkxLWxB65QwHDuSphroYnBD7gBvFtfiDyHz",
  "key40": "5b4bTGqeXrYokzvE6MsVkcP4ZSATQk7DkYVKwdVub45U6YtqaXxY7JNHFaxWPNhDviRTvYnvqCqDjcGB4WpywxYb",
  "key41": "2fxWBVBC1WGbSPdg5PhzMAnSoYgNuvehD1KqBj4Vd35pKMC1wxCcwBtcbGdR6Sn1NsW8iUXVuNATcKbSfCwcquft",
  "key42": "5nmaZxb9TZ7WPJXoCPyfm8b23N8ERc42LvkoWMNLF8CzePHLmDJncmDZAxcJmrBro6e74fHyvecsParkqC2e6c5u"
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

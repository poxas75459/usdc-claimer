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
    "5VwSDLVM8Sfg73zSjkZyfUYz5qQPYgL1aXuPhLjQP22uyWjmcJtPbPbNpkxtfs1AEvozLRN2jejw6Zy8jzkHPJqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gguG6JtR3kEuqxR5BXF94sAURb3gpVGGAoYcDfSaFgVsJqzngLsGUrD4jyMVyBWKCcF5cr6C3Un7WqhuNubG75e",
  "key1": "59j383buwhP1EQjZkH4h25wdL67Dso21EY1yGdMTUdAfGXVdTfXfh5QPJ7GnCdjNza1cAaXGAKzftpNV4rB7Ctye",
  "key2": "3g3Q5BL7pPYoXfTUZhwMCKQFRHGVXntGzFub5BmGqy8yG35t1bCXAE6nqbXUDxvKSqiMqSGNyTxuo3TyyCZmU3jG",
  "key3": "4mokoCtfeRv7XZnxqmKDe8QyYBABjG8JcCs4tGwzM3ucRUvUnUFiBxrs2sCW2enSbwjyjF88bshK1Vpjn3G7Rpcs",
  "key4": "5pFuARZxH7aENQXZcD6q4Y8fYCyq2Qd1E6Libt15oWp13mxR8fPDVSqLZjAVHuopwRQWLR96F9eghjauhJsWW7Co",
  "key5": "586iJvj91b2LWx8fqgUqSSSvNCVNNLQfrijHrcnYKscy97LkSyaKgR2xgrEti9E6J9gNTWiNMx5xQ2vVqzTSWf25",
  "key6": "3VTwe3gzi4czZCP9VSgGqiP9p4w86YGosuKwkZwt2PuxK2ms71uZvd75hMf1U9Zva3d6x9afuEFzJCwZZmPqAUCh",
  "key7": "4Aq8zkEhbp8176hN3azNnTt62paGrogM8UcWM3T1QzcekFPRmbBd2cqkVdXmHq9rvcGKG7CwrdckB1u61VDubdpi",
  "key8": "4jkYhEoA5w3zVm37qucf4Wuzp6qrNCVhQGgv5QSziY4PtAmQCAgwswP6H2U8tK6c2hGhMSoUbbygKRkpC519Jc2U",
  "key9": "3VnFnf5J2pzRzFSPJVs7G3JatHk2iHj4QXHYLznE17W66ws4NkKJz7NtCDSTw1X4aQYATgQTf5NLK7UF3DejJiCn",
  "key10": "3bKg7gDhHKU1aNeeMMrHkBBxmTq5PbmMx5uUPVnDBEZzbhXdLPniwgN5RzRPi7pSnRrscYv46e7xvDgXZrvV56A3",
  "key11": "CRyGe2N5rLbS3gSQQvtAYsmwNLp1DXSqQdHFd7AzYydGsauQikntbRe71eWtdphTJJkGFLD6fH2KXwzSy6pcAWQ",
  "key12": "Zdea1c18u6htXoczyPN2NbX64F18A4ygpaEje845PzNt4WWZvCZXkcxgTqeC8eX8F6Snwuh3rJUSactZQfq5NxD",
  "key13": "AKCFfXVxDTaruSySpdSvmtdAzpN5fRafZL3nST3w2CkR7fofhecE5hwYhntDfo5CcQWMSExuTHsapa8iuEtpgXi",
  "key14": "243M6wQLEuDs7Ejwfi9jAvd4oMpTAH8Dpm3gsT1U5yuJt4Z5mDgR8Ki4bME7E9zH3N2B5kn3MWwNTBsuNH6jbRKA",
  "key15": "55caKo2NZyyg8p49ztQjTELAYFtyAGgthWkccKVh3bnrMzRq211R9D8r5m6VLGJvCW2cpQqmmUP43zoXp3famubd",
  "key16": "3aJhMwtLCuATPCkvpdo3P5pvmiehSDV4iQyQFaTpqBQ1yMV9fY5BFCVfJHQW4rLzq1s715pJQkExnp3jq91Jv4Ui",
  "key17": "5yqYevUhcP5GadBYW98EFA5WQeXoikyYyeYVD5woDRFeD1xnWK9Jw4gUei5FkA1VbiCE7fJid9u7hVBe1zABPqaP",
  "key18": "3oRdqnP44SJkAMBL6mqg7YCtRgb7j24c1G3VhJ7jfJecHr8yScud4WdNi7c81pdextw8TvTxugqEgUQMAYg4e1Vv",
  "key19": "3R3eVGhYYTf92gNZcMFmDC5smqz61yRLQuFiMNTQfZKbSgGnR6UJnaAmcuYWUcCfCurnUam9gkyqx9QrmnNk6yWC",
  "key20": "ZB6Jp1v1GBQgLGQxyyg71Q519PFHDah9X77o5cxMEL1VLU668HqwNujjVxk6wBbYXbXsamuVukezz8TY2xuULQw",
  "key21": "23enwsGSRFMcsb8v41ZNpvuKkUBj3kcJSbPqKEKK6RvKwUYf2YgGzrjmZPy6KyHNrGPJB9oSNcyWH3U5XL7QZrB4",
  "key22": "5ArSEUEvxTAKYW5JnH9AiYFdkQBpsqrbh2D6g1a4PNrDnKa6Qer71Lasf2sCDuuhQAVhnwUBU33nb5bucDB5v9tG",
  "key23": "35svM6sQJPWvPwmFj8DHZ7dM54Fa7r1L8v9zFF9ZBKfehkBDnL8ERH5Bpnbh3QXfQYat8ZS2oRdMu4pkZmrwrHZF",
  "key24": "3jhLZ17QjcNZ3Pub4XmJkFhuBKga8fDxQPETSby4b8eDng62f2Y22Za6rgS3t7ErRrGMKAv96i6ncjqpXQDXQNyg",
  "key25": "W5VB6YhjxZn2WxuHThn8WnW6DwUd6YCrnYZtpQkFDZpTzpcoR2Q6nCjR6XS4Jxt8sQCKYx4s4T3Zwt7fYa6VdSV",
  "key26": "3dE3PQ44REhHkDzqQAZbgiHt7rihvn8FxgBzkeLRt4B5K9GUkN3p8Y6hudN7mPUo8HUAzXQVTcFyJcHtvZsd5Dcf",
  "key27": "36kJXCW7VSvzVMJS9Cn9ENakScNFE7jjjABdsZQpBf7DdhQQ4aJQuWGwXbcd7xTDXSFa5veXferbddJ2y4FfeLFf",
  "key28": "rEweHjbXpjcRCjidsK8zysq3hNJkJeDhusTdKaRGsqQnnoU7G4u5T4uC7sMgpWaED2MMTckCYtmgQPMgcnkh4Ei",
  "key29": "3T8gVPMLDeqcfAYaMr1k53323C42P495Gw2vAtfDotrYwXxMMBozwrSsVWXWqmzMbiHZLWiCUWvgRnKiReEALxVC",
  "key30": "4LVbpFNKVH51a1ZahTn39DQhBTR479KBKbV55D9f4rf6iHHzRxpWHMzuywwAmhQdQnFFfEmiLzazFTAm6fVP5UtW",
  "key31": "2p7BQmWzV4V8VZ4WSTmgP7pvh8o7mGf3AThom6w5VksBPtsGXrtpZtKJA7sYUh1SktDSL25VNkRqBrFFr7QKCCBb",
  "key32": "ncZYCQaqRL2aAB93JEFrS6EQHbUeWBFrgeRFCp5EkWbBaFDKCtDyM9xqkdTgA7cp79qmwnJ6i6Ymtxar8vJPH8F",
  "key33": "mGJebDQGXULoibKUPJDdXvwNnz7YqCFGJbmirFXQZqR96HYk2v4UfRDoKiRPAGB8bETS6QDpwnvohYdYwZzuKQq",
  "key34": "n2n6p1JB6XdJDPDcrc2Jc4pHPBXQn5iya3wd6uDBhLxGqp8NYMKFTZ2wkGRdJHnL5Wdn1juX21R1BejoFuok94V",
  "key35": "5D5rJx2RMTYeWfXhA12yJBcHei8ZzMuGPkVjW1cuZShTnRfA2LkRf4wJfoGbMPKyWA6HG6StfUwYWYRrcUevDnbf",
  "key36": "3peJjXxReHkrALYKr7ZdrrEtHmU1akbwmZDqHoVMdX67tpXRZqahxFKAcEfw6UEENfAzFc1yoqDJipWXUsoT8n8w",
  "key37": "2vtmbPWYzLWmrNgZyznibE7p2AvuYHSYErfFy98fgVKabbbUg2tW9BB8ieWMPiMhtGw5pBBAuibiRWeYXobovS6A",
  "key38": "3HMkDLmHm4nuaUyjtZ8tKEZe92juckLYfLEMRWa4CL8KJiL9stJxxYasqL6UnnjN4iZPhii18GctXuRrFvk8ovdj",
  "key39": "4rBTr33iPP38tdyeENrSiN66GQVXhGUV7f9Kdi42yttw8TDFZ4v1DqdmY4DLshvD8HN8qcUTLqTaQySVxevd4K3K",
  "key40": "2nq72reDFCXkq2i6xe997GSFGpGMFssjJVQ3GtrA18WHQfhuxAx4KTZcDngzqgXoLdCrec3zQgToM2eLBcyAtSFU",
  "key41": "5tm8hASHGRhXBaozTjbJQZSDRnVHGJNPFgp6S35KmuX1Fs6qthRn9MP3xBo8oirm8vAczeR7dgQLiZZ4XHNfeRU9",
  "key42": "3sZ6z7xfACvhYLaUSnXxhGCv1MFcGVii23rDTBRREjXdh7sfyPNftsJTmJovUJkqNierSdqroQrfw3bPte983iq",
  "key43": "TU7fNR6UkdSDsXof8XW8SS4iHrmBrHkPECruSo2NxDu44AaxP5T8p8m9mtTCRHU6godiLq5ZGP1zjtojwDUvXmf"
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

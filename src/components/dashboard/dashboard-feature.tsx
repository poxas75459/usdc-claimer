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
    "2CBEvfn8A6ripTABWFzQ2aZY2ohd4xYwJ5WxQy3DtgLSVY3PmVGuz9t423t2irXtFkUVFZoh2dtxmoHLxP619Kgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hEGPhQEF7j9oLxA4v8LaWvGG1T7Mxip96xGTkveNW3JEinbGWRfRwiTibyZroNYi868SbTqFD2YGPURcMP7XEyA",
  "key1": "2b7jJ6vq2WUwrtBkM1BQWNc3y2xs3xe7gHmLpRkAJfDMW288rXhYBA56FmsPQvdHzoZXpjcdstSod44gnsXgMrXk",
  "key2": "5wPLfBovJhJeSjixRmPJBV2PBGDfzxuyVjZeWD7BNvVFHbKJD4XUdPGjdDQNemNqfpBzrqzLHPiurw8xzU5XMbM",
  "key3": "3AFTkP9k9ASKkaJmF2MnbdXoH39vqfK5nKQS8W1pWDcty4pbijJJeq2zYvjP54WYLKfL75Db7zSXUhkbuxP5FgFJ",
  "key4": "4JS2zw7ejqDRfoVPE34ukHvrEFqJwy8mZ6gLygJ9d1cG8Rn7zNU3yepTMSighmoQh6RddRygecPnvYE4VeSxWBKp",
  "key5": "49SkgYRTjPq6D6SHPeaYcirUjkUdRHFtwcGeBnrimRWUdE1nty7i93z3Bqp3V7voYVGkasuSyXg9HUgiaV1j2h5S",
  "key6": "4VstA8CTUmeW7p8xhCdHRjiGtasy7eQePGYHu3nu8Ems6EqGBqUCB3HVLvbNDhPzQf8pyXdZHwHZBK2yQXWorNcA",
  "key7": "5U4TsGSJkczd7NuPZ7dcgpMQRiEpA7Fwy6bEZPndJrtVfXUJ7HCnRsFtajtAWynbPdbQM9hhhTLDiXcqoj1NbKTe",
  "key8": "EiqCWu5S9CquvU8vfNvnN8E7eMWHRVhtn7EBraJnHKmLhaj8dr5HvoWz44akLzCXaHwwMkSkoLuLuL6YvdcB7kz",
  "key9": "3yNBSESGfGqQmPWFj1srojFnhZpezK6XZrvZpDfUtmZRtUXdw3ucFcsNiTL7u2MNS8KhXNLoDdLhLEWHHHn9ZprH",
  "key10": "5zfM6wSEZKypbUdm99rcy83reVTqTLhzGjnPpnP2yKmDSumddQDJFyJi9FVEP2a2WjMw29ZSF31FEzMhaLvmiYWi",
  "key11": "3EUeB6B46d5tNQbhwLUx4DfuvovWkhetMT3uAuyW8vvi94gLUakWzno8aBrqfgffbM2773jS1hNf29fj4UNLZbyQ",
  "key12": "2FLn482dTcnFnqb8mXJRFEJngBaQLGLzeXpGjtPYUBd7mPDxjQJ8cN1SFDweMzr2tdKndbc44BabZuLHx1xmLt4w",
  "key13": "5cqCwJ7CL9S3ADZcm2vG5m7tMQiFyDTV9DdvP6SLymGf1QskPJ3yknxf2YeinaQavaMjYgPjJQSQ8CuSDMNL8Kt4",
  "key14": "2eMxedoW5npv1Zx6DCf7MfnJWdvo2h543KLJyocedADjLnVhJPYa7zzBX8cupFNptE3wZW2E4gKBqfJtD63iZMpc",
  "key15": "2kV1zdDmftJBjJf346vDDMYWNb1ZG4dY9nT1qyPrcGLExRE7c9xqEuRsCczM2gSrdkYJQ3szzixAy5VxLM44RUk8",
  "key16": "54R8Bm2d65zGcLWedU77KmrNAgE2cvzZmSoHy7iJCyMxcT42tKUzEFD5oxCKcYMEJTSBJmJmA9axtqApCPhXTQiR",
  "key17": "3mQCtzHeaemANavnCMJsEnJu2BbiZRLKVkHFnKvNaaXhPg2mkYiWMjJdvDwZyL9o47BbfHZovmQRt3JyBdACmD4r",
  "key18": "5oBDAhE8HTZbNYM2MDqSmAgr1vNsnHmoqmAbnbFN9vAags34TyqYxZaVtjjXRt4LCMynMb5eG4yogpp9Ro5Xjo2Y",
  "key19": "2r7MeYZuJ5oLxFw972g5FHRk6LfaNH2Q4eHca86728grkoxsQGAtuG75Q4q5GCEXJGxywJd6ff6m8CagNwBPC2s5",
  "key20": "3tPifeF5f3RtKnNvfohTG14MmBhpzVnnHXLMHtrx3RJ8UQj6kciSWnAZuPUUGtRW6P6NKcA92cpgp3F5QYj8VgNu",
  "key21": "ntAYkC3oBEyzpwNFYc46R3fTHhCUP19oHxeiyXVs9ikLPSXiqb8MtryH7uKc84W6mQsaLHpr1fHSokC3C6XE7rz",
  "key22": "2ttxUZDReVePpodQXzUa1MtMHEJEp4A7mLRrBfdDRqt6RnGQc35fyyhfC8vHU84vuhrFpeQL9DepLkmQBr7jEFrw",
  "key23": "5qkGkaZRhXTEouBchHKVi65QJnYHjj6LcEB6rdDzY1YVePBMZjiv6wk7AZgE4ex6CW8PxkfUUjgJHyibw8eaajvN",
  "key24": "Ais7CRRjdWh2PL5LJprhBSeKbt25ynrJA4ofmq636zhemPJLU8YWLNGFsoi1V6ViA51qp9hWBTHysfeenpfMR6N",
  "key25": "24CigT8oX3LKHu9RLE4wKBVxK5s2PzbTqBM2F6p51wr8P8p3y31nVnXVtUcKev9yZiihbh5r5wn8H3k7YHarUNeM"
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

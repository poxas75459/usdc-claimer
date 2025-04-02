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
    "2o8HNC4UXgy4ZbsiYfLSy1pfEpa1ddyeJppAHB8W1WAsgDRyQqhFCPzfu8GUAXRyrmd6BvLtXiWchCrhGHkTpcar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjEdGjhxwEAyKLpyybxvSsKqrJukcjW9vmuCMH1nFMzwURssFaXpe3JawJiyXMtGhUc5kkLhwk6bPbpNMtp1eTK",
  "key1": "4aWZvBaseUbrv9BbH4TVF34EQQv7RLYL2nY26qA843EjdgiDjxYVUkf8rYbkVYJNY5sfpNSMGWZz8YkUgXM5Hjqw",
  "key2": "5UhsVLa6uTuUrC1Uamq52v5hMrUiunr5i4xgB5PZPGPb4sEHwPUYfByt8u7bQwr7XHz81Ms9DTwR47wnmWPCUWMV",
  "key3": "2eF5BPCvkTwG1eqEWFD6DBYWFfnzmRUarmifoLXihezGpQviybsBGtxjbYjNEbhh3f2sKwNhtSfgTKeHdGuqokNt",
  "key4": "2y48rya3EdYgeTGAu9zEAiKXdf6iSBYFr2c62QLaFULrwgRTwRvTScH5vXA7atuzLc3mKBCtcbntha6XnX1gL739",
  "key5": "4ZpzLaE7aShm3zP41ENPVeZtvz1YnXdCqNd2xSSmSKHXgtvGxzSRPbZpHTMxDqjT7vqW9Ympj5uYNC6hbTTBE1pc",
  "key6": "397WTm8ubnmXFjbRHk4utKXiepHZPPE61Xvdxcdb6toXS241HvbPj78qqEKA3ZUgB5TE62w1QpU8Boy8v3jKQGCK",
  "key7": "QYDVBgTdi2QJZgjRhiEHMeQHcVVwjoZTnyCk1S25D7BVziuXjyHWWcoaRfJzJzXhJg1N9vNRH3E9SKWaiZxDDnn",
  "key8": "4PB7i1bwuGpsJA9DM4yMfNpY8e4hjPyCWijYxupRwSRm4gB9CTbEtbiPF8WG2TZ2yBccVhxMGfgxrButGYuYMmjh",
  "key9": "3bcRyqYBStS1Qfq4NJj9Yf76wAcegpnU5djAt6QyxpnniHGc8zCouCtsayYn29Uuw87rpiZLTttLPHh3GPDZVamp",
  "key10": "5faW3Tdr6hqh81xiyHexeBu5uZUv2saqKXkJ4EuGAsaLwSKcCuV9cVWDbzVV7tsXtUH9mrcVu82Y3qSkfuCqUuut",
  "key11": "56qu35TiBDqJBJS6d2HLKqkxRNi7CJUzXUPGrPqQkpcQfNJ6kCrQb5wXGaX5mY9YUQiPgVMaENqR8rfeAgztGqrh",
  "key12": "2y9HdzfN6JHdVVjWsQ5AtyVcxQkhv5PetLD7TLv6dTacBTWi3dAnbqWcdnjJ8YtXFDLYSUx9yNCnTXwLMCrpVe9g",
  "key13": "2MrGSA9AaDZkQKPcTiHrjpPN7SgmBCuGv6JBBujmefSC5ENF3QN1L8sphCjcCSZbF9dHobYfQCT6zrqqTffqQw2g",
  "key14": "4h2yaezSJuBbpNG5tU3Xk2UDiKh5CD2LbefDaqVhDJhx5WHomgXixXud3R97199qetth88SBr1853YGxBnaHi2uQ",
  "key15": "5Ppvn26WhARgTSx12GysJXTuzkG5YSyniLTyngvu9anoxAgADBBFsVuYwiqyG7Mknck5aKSjpvzybf4gDeHCZKyX",
  "key16": "2XXpY4fF8Er1xaKEMoukTyzvsN4meBZKnnRD5vK6UDzagZ6Z1XtmnwpqLCS3vXcLgvHPQhBsy9tyutQyzXCwW4n5",
  "key17": "KCw2bharkYen6mnprocMZuE2mwhyPYLudpcP2gkzQG5mQ6Ums1Pon8RpWpfSFpk1a9X4WfxALJ6tJA5J5tFBFaq",
  "key18": "3Kv5muGMtcd4tEiRpq4HPjwY2msjvF29c2wCGvNnP7QFawFGUQDJiKm5maCMbjS4N59o5JNRUZuv9LXeBrkgKE9o",
  "key19": "3Gwi6renRKpdBZFDiuv8oppBMPeenfx82Ni2YtVV1i9MAorHfsXzD1PxNz3bzsdGP31TBSWnFmaYkSn7dRHEQJuP",
  "key20": "Kceud7QCyH8sqpadHkhrymTduuQYgQ3DkqCJjwvh3DMb8qkzYwiy3AsvjkmvPxjuMm2HuP3wyCTUKPcaTCzB9Vs",
  "key21": "4Ro13RYhrqmx2h3nRwfeht53Uba8cCoyxi5aicgcc1jqPffmPuFwdNNHzBiFCzRVHiwdf7QiaVFUz3CGC9R1dqFo",
  "key22": "4PgfJ8Nb4k1bodRjPf1LGazsP9bpZoVN4Dmge4MdHydbLMMqHwMwJj5cPgCHLecSkb1cNoofUyWQSsF2gAuvRbta",
  "key23": "37s2DcgCAc2gTSk71PuQoDNqD4EHGWxR8iyBthJyTxCr2XHxemtNWLhq2pANieG2Bf2zi46HYbCQNQRdt328LMMg",
  "key24": "26ykBjch4VH4W7XhojCB3b6X12bRpi7nqTqtYwyxxi1WhtFLE8GqpD3mCgzJ58pbPMJHDoE6T6jXMQwh5BbKBskD",
  "key25": "2e4Hx4XDvtgXtKMAHE3KhuBfLFUP7TDuob9mhRjSgPx846n2JEcAwfzec7Ca6WwrbfkWwkx9mcSPHkqNnZzPbkra",
  "key26": "45uQjhfNkB1gKYtpKoesvR8GATwLFbDpvRT9n4rVZG9miKrD6xdWtBRkFenYct8daDswxs1fLpvQm7ooAbpZtHef",
  "key27": "41fYKrnQkjanbVwnjDGpkPP7Q7YSjKbu1D2aEEbtWq4WXJk1DPP1aEpA4SNTNcFAUwuKGKz4mzadCJCBCk3nAJ55",
  "key28": "cZPfc65Lt8fz2tgr5ZBP3h5gNgFARcqBM3dpthjePVyA6pXS3BUwyjZx35xUFCXEyjqTxMDWK98cw2ZcRqWiQsD",
  "key29": "4ncY2fR4UM2tP1FA3gxby6ZiWzkNEHsy5sXEMBcRU8DZeA9tznc9NRkzqWWjB9tBqSD7dXMbyRtVTTaLNGNbjvJU",
  "key30": "2dBmcTWtGWEvhXtTWPVuqVNwMGMRz1bVpY5hdE5JQzEHHE2JK42Tu3BfGVYnR6ARbg11DLdWoCymbTdcnfruLCaC",
  "key31": "5rpAoyisHZHc5MXkZZwnPcQ73YSQMnUr6XWRvjUAt5vaUR8qJpBtWdMZZTW4RgaCW2Tcejhfain9rnkpMsdXujui",
  "key32": "4CWrwwhzy8xWTKf6FH7TGn5QW1XzsZCYYcTBETGCbGZVcdsT223tN5XvDkLjFY5w9RH5PRJdddL9kcdUy4wBVcC7",
  "key33": "4ENgV9skdwr9nAAwSB7v8abxhCjUuJ7KXkZknY9XYfw1zhEt5a5ZXCoH2tDd1WuZcVmZFvpXiR2YokpWS15LC7Gq",
  "key34": "23t4MPfzWDwdBJ97g2YXam2uEYVRxiZBVSVaUqWp5jMcBjNCsFkUmfjptxJ6mRpYF9TRRwu1oEz95qJ89FQV2MDJ",
  "key35": "5fMewHUJbghwmsuWvCxffJ4TH8QF4mPDgoobb4MqG9KgwsmdtzCxKRW8TGdnijiQju6Q4mG9PGEkzo8PsDQTW5YA",
  "key36": "UuJMzfYAJsezMUuichihpfAvxrZSEtSHRXQcgNEcocHM1HwP5EvtAAQ5V1LVd3csSPeYGALjUShPNH6frrAkL6T",
  "key37": "2C5t7ahQtggs3S5P2shLYdNtZPnR83PJLKSPMdgAkkFfR3QuWoRdBSVhbR3xympMK1abLDZDuYLtNusu4EjPss3d",
  "key38": "5KnGUuNhnRRZy3qW2eRTduekk614fx5yiziokRM6RvSvtWuznWCNRKxe9bK9EeoDkuMJhuaSivHRjkdmiT6z3tEF",
  "key39": "4kKie3LCBqwhyRhdzb88DsYuU3zMkbE3pXpF4tRSCpki9uWcstHBW9H9qVkosXsSREX5ASkzoCoxDTmX32mcWyQb"
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

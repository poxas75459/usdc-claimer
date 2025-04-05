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
    "433X7sogWZFWHFfVZuQjdmxYxfKPVwUa23zQAf1zFkJaY6zVB4ifvAAsm7ycmtE4P9tQurB57JzyfP6gjBKAVHSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WPopmmJm1fnFH7cDJgUNZi4ggCywvDFfBpzc9BrNV8eAkEbWjqULQDJWbvizBRmCkSr8xts3KcjkDA8VR7136UA",
  "key1": "43657D8cAyMB4ouTQuNrCCnHuSn1YiUEM7WCc6JSLbDV8x1txDQYSbuc4Bt1TuJnRpJvYECijwy4DPyzyX8wLKj5",
  "key2": "3iyHQeutnt2QPgvYtkVdGQQnAqLu1o56JMzdSbw3VSR2pNMACk5XoAa4ZPZpRpcsQRGS5G6JmV9EhPD1kBYubKK5",
  "key3": "2Z6wycFYPDeRsFiUK22yCG5vUkXsKp3ooamGqkBJ9TuiZfauPhrLJVpxbYmfNqWShXBqAF6yzvQLpQVXTD4wRQWo",
  "key4": "3rThA8AJ499co5CpEXuq2PpZt4WcjCXxte2uPgHnttW8cGuV4J7ycZT9SmBsmxng3WijJfoqViyCx62MQAbymqom",
  "key5": "2De6KUQkRKrCNim2P1curCBEKvNQoWk7x8zTmms5LxH9qdsSnPR8BgYwpcaHSM22wfx9T5Jg2EJkzLhMew4RKCPc",
  "key6": "muxKDgpwWWUe87iphBJmLfjRinG5pdPmmfzX1stbCY5qKYoVJNJqg9Ab8xkBcs7jK6Wn5zmhB5wiy5CwVJkgPp1",
  "key7": "3hk1KkiqNKBZSVSZMEFPm1KRw8ndkhoAcjXBB1uw8aGTA3SqAH9nzEfMk5npd5rYXFkYmC4iSCeZKPV8LCbhQJvx",
  "key8": "3XKJDKPnMm3BEpgGvf97vUHw67UrPRpBKT3WnZ6nrhnpHdeBWJrUDj5dpLpWFykmTUPh8hpNjQiUz4NqUM3qZmgJ",
  "key9": "62UjUD8we7KAHhtvsx4g7NcUpbYgn8VKAnkg6iRBau3ZuF19Mv6b6H6bdB5Vvab6aRBxjAHTsz3xr9jnkd9N5S81",
  "key10": "2njmYHT5S6k3adAs31LMJ4WP2GJtsikCSkMEdk1qHRrKeuJU99sFeR7th2iNTYQjeKdABxWqcXwgjNP7M9Lc8yTb",
  "key11": "5YdSgaihmwTjmNKMLcoKryg4qmZSqApQtvfB9MnPWa5KmP4oU6929BnPiQsErf3ouVnKJrFg54ML22yGGTDUKmBv",
  "key12": "3gYzRhbgSfF5nK1SUu5Ee6mhw9KLgSNXob2ZmbxMLFNgLacLu3tD47qeFKE4aBxW4jgrD4X2EZ36wnhxL1wT1Lix",
  "key13": "2vN3orWGY5X2VrhmBEu44ce2zCJinyqkxFasTXS25HvKRDnQ7dJETSaVLB5sRF9b2qruyEjo2aaAUrXcUjXPh3L1",
  "key14": "5eg6bHdc3P3ivb13NSQEroTzh9C2y2evExKyeJEasUuihUygMDJ5a1TfBBNvS1aDJxBhf4mRb3vq3mcAvnCPPrKo",
  "key15": "UffTAbrCMJpicPhquR4eDJRBJLgAV8Unw2KKGyZgafcmsCzpSZ7tGzBL4b7E72mmG3XkkqcsB4RJX5BoQWbbr4H",
  "key16": "275CzKBvBAV6antub7Enn3zdEwHgKnJNbLwcHyeDcn36kqE8fNrrJn1pTnnDP5iPLQYb5VdwvjcdBfS9tEwLATLr",
  "key17": "3ApHtXamtM2mdobimXd2bSei6CC8S1EygUaE9zPcHDFrPbCigApXwc1X9icjjX4xYUaNhDLLZn4NexmC1BBvdve",
  "key18": "7i5rygy3peS6YHiTFmoqqyRagKJ8zEHSdBJDh2si5tswSrYwaY1RCC1xXijMJ7dkPwVofaurjnGcNhaZXAPYZZJ",
  "key19": "4ZJgqEZTr8wiH3eCj1kAdmqFGjUgNuoYf54SeZ7fAENHgRQXc9mnrc2Het5oc6Kf4Zn65vK4Vev6GUUCwWY1iuYU",
  "key20": "3qRqpbzUvyGbGKeCR5V3DuAQBbCzXjuEEVZdq5BMsLtJF16vPrJwRjbPjvPCFi3mUyLcjuJDes7BtPAyceN31tjD",
  "key21": "678P7XykKhycXn2XASrgCQx1i2Nn24MhdYcMq3tHvnghV8ZfBkAFW2hqbGfosQ4JRRqrdA5brDLp9DPV23qcQFTS",
  "key22": "Pe2Jiod4CFDP1G3J65Ycj6U68oQ8JqmG4ex4GgeGNFzMiJ4vfiTTVCYZHasd6qQvk572e14nTrHwL45q6EracYq",
  "key23": "24UFKs7bkLSf25SPxj5wtA8cfEPVPiRyM5N1jk8PanE3VfpoL3iLstwEFiwQztHea5HaZf167q6peQrbZnaijt1T",
  "key24": "2mpQ39uRJ9z9XjpTcmTFYBkknU1ztrNBdGNCeRNctT21YJGQuwraxZgzDmUad1DPEBUvq4hWT9BRL7PPe3jnxZwD",
  "key25": "5WSntG7fqJgRksbotMqBWLWaimqZy2cfxitovniRU4A2MWDzRBpJnJnU9m3dZDEHSo5S5yd7uQS4Di2kaUzSFZTF",
  "key26": "3wQw6gZ1GQMEdfUsUy5biG7QbG23m1dxZG714HzJnowiRLk8vM7B2wNex6my6vrZqcnByBpcckA4dvr1sALXVHqe",
  "key27": "2rv1bkPMibyZbSFsb5GD4b2rMX4sDu2Hzy61xh66CUdhbiN9SrfZFsxCeLtADpP565vdQ8Zbni4q6Mp9vVvSLdAX",
  "key28": "4fyTyRPQyP3J11QbGLzmJZjR779pbBrHtZEd874PKeYpyvn91zmkbeMmQmHxXgXd3VTPMaq8Bai2hR5CCoczc6MN",
  "key29": "4NWQaZtfAxxd4Ti4ep6GcMU4MUxpqz7BPeHCSwxP4d1wyKUSe4pH1ZahJH6Fz1meYo6UvZ1SEy9ujq3cPC3mEez3",
  "key30": "2Quyz3JfZPz44yw5GhRG99cpGTuM4pHDQWhGZqRV7PRbZbKbWjE3Y97fgKfExHVYwZY5LGMxDTvN2Np9y4AMjprN",
  "key31": "5iiTiGrtDCRFhU2tk1DuZJNq9UAieQfa1mDfJh2w864rPKpMMvcUCFhuFGjdZz8jHq9dBFr5tgSYgy72Efte2Ldx",
  "key32": "2iS63Doxw2gkDweGDrPWmn2tMMT7wnaFeF7UxSmh5mZe1JEwV6rTJKmRWfqGj7id7aAwDrub7V22a4ox8WSjYBp6",
  "key33": "4568tPUN7jBQGBR3fSLSoTYPvH84kqcXmf2GVHtDp5gDuECT5b5xHfvzHagKFdY79s4n8xenspSJgiZcCCxqyepA",
  "key34": "4D6uUNi8y6RevcNqU8kApmvQEWAGxgyVZgDdSrzxF3sfQh38bmobAyDSNAaZZf4fQiyeGygMi1PVoFULdgtJnYcX"
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

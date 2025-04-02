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
    "2jWvpLKNDTJKp8WXZ1qWMRxDRQEsvwBVWKEKBPNDGv9m6qeZHaGPhee3f3y8Jb3adxg5LR3NL9pg4szzVSJFN91C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ANGtcsqzinXLhjQymBPUr1DBynnEqh9TRany6xY9Ty3BGDtDuP3Ve3xUgn7pK6wdauceam9zAfM6AKDrQaqvjbf",
  "key1": "MESgJVZ5n8scuQ5qawGbCYMdp8txg2ikQA6pxv3U1oCF4VKebE6X8tWXQ7PRpp7XbzcoxzWsSD28MuKLsUPXqCs",
  "key2": "5t1ug6eVSPd9DpT7PEGrBT1XAaQPgz2kdNY26jkXaceGz7AXzwkjqb5GkmUA2fNYG3evz7cd8xFpKE2K3TUvgtGD",
  "key3": "3QzqJ7vkfWY9vjPJZmspEuT2F2ie279Xj3HyZVhaoQcfKuvfzFTKC63n3ZYeCUxFfrCdozJABCH5Jp2uucLbppn4",
  "key4": "3Yo2EM5pcc2aeF8xNQeU1H4S1MSi1Xtg1miorW1LjTUhALxuG1SoLNM4JLi2eBfBtM6xNgZgRq931NUMGgeU7GCS",
  "key5": "4G6YdmQFhr17C6ea9xx43y4aGneqrL1eYxs9q48UuMnQkpuZAkUxr9in884kHggkbCfGDoQsvV5A4bFGfbpcW9x3",
  "key6": "48ijxGw1TTMgnjZWnopPxZpYSR1Lzns7QfHyH3Fv9MERKMs3rKXt7ExMtCVdiwVj9yBFmm8kttJLy4y7k8vy5h5",
  "key7": "gbZjs5JK1tqUgNYdTt4GjLoyD9RRuQCUbSoaaNPbGiVxpaQS8caKnWdF5gYuUL6N4nPc7P1y1EdU4qqW4awDg3J",
  "key8": "4QqLMDo7sfwXKfmxcLa6QwsYveo9uyBPwGemti4fQRi1Dpf5RPBJtkUp7dGXctbDqbZn7wcpsvYWAMpG9fPLyPLo",
  "key9": "5MN5EMHTZi3Rzisd63Ap9Y8ngtGQPXQo1oaBE2uxP3B5wZs8J8tg11TmQqP72jYUHkPAxkF7Dfcd5KCebUumRXoX",
  "key10": "4gFnFZvAdnVQxmZK35WJxbwAJBpgbUTLm6LANiQxNWmeths6M2uhxSShvo3wPM7GPYzPDrZLRH9rweXnCR1b3Ysy",
  "key11": "5zepencCvdVK3ozVddkgxpZ9QNLNKQ5d6BhwyMTjHG3jfPBnqKBVM9E72cqnRdEc6PXeyiaucYA4XiqnRpmyrhy",
  "key12": "3sdRzzYKavXXs1vvoqnU7ickgscC2X8oU3vaYfbMX9UAs3cfGyPoANLtvTx6hBQzR3YGgdM43iUXuk1wVQ6sa8Ub",
  "key13": "bPLgkDL5iWb4BetU6PCVtvD5riUXLvqmFY54HMooexc73RebP7RWdPNtpL6mfYfSNiG1KCqxX3E61iWWqe4noAk",
  "key14": "2SmXs5cGUQu5hbJ6DGocyngnkfF1ud5wbV9v1LedF5VsBqJBugYKKhQRcky94ph6B8XL5DgoiUkUb9voPeTmtsX2",
  "key15": "3T9gYfVgqsGSmVwAz2xYozZSojrX4p38VGr5JaHV4edTEKWqp95G8Z9DbsQVxziqiMYmxrifWkoiRg4u2JHrtSFu",
  "key16": "5R8ncyYNBnG2pt3FWktcRFyKW4uJckdGEw7rVQ7wHsBy2zBiggQWbG11u5SeKZXcTPfEbtM4zdXVP5WvppQj99zD",
  "key17": "5PdvLNezXazGsxg38Wf1sXAQHfsTpoYQEfVBZLNfbGT5JNwYQN6P8JCWWF9mJjLkK3UpWCmXL68YhdiE9YT4numP",
  "key18": "2qDFrKmkyjLucpVmxPYewJ2DhXdA684xehhMh9GUeK8frbLz8HhyL5Gzwnc17Rn1x1itWh6LTykFmUUR6M1rwgxz",
  "key19": "21QLWX2us7BhUrruhYZWAsvrrFMtb1c743wHTFG85NfV3FsfpJ3WyA7yecqckZcugttSdgPU2RgjwxSebf5x88BQ",
  "key20": "4yDgGRoTCQT5S3nXS48YCddkiKZvn1tw1H1kvrj4NHY7xdpd3qnMXZVKDDwDji31dxhmpiniXRPPLyZf9GSFNe5r",
  "key21": "2DG5DCqbajvtu9UJvPMc5jgoVsSmtWVCcg6VEZekx9jv7Wdrubxh9ikFrDCMdKJsi7dkb43RLxaXyhdQ6M1F3MLi",
  "key22": "4BFZ1o86q46d3KLCJxUwwFjr6Cg1YpViARQsCxF71YCMXfoKUbwegeWmc24fqrSWuEz8W6J7Es43td67nyW1xXRq",
  "key23": "27v1beCAp7fbawEZEr6dhoF7hnGSA5YzTHVdoDMt8xTh57trsfwcXfuxsCFnbXEemnwkmGBexjZZCSwQwH1teToG",
  "key24": "28b31HSqUY6BVKjphsvFi1KrY3DvMYyMDP7irmKLFx7RamcE3teUDDCVjKmZsFxKnPYiooPqkciHaBBHR5nbuRRr",
  "key25": "etNi4qheFipSBYWSAajNt5nj7NAvXk3TuYyaWajzrSAPtPncsXingeUN4ZZJRc8YBxpCosLvwcS5sLJM23uhUPx",
  "key26": "4sc9UvEdDjiEyZqeR4wpcaDBGERCrNKZ9YdeJNwqjquxDsT7fTZgkK58HKrce4jSeKm75G96YGr28YCnPL655WZX",
  "key27": "2XzMC4TUhbtLksHFU7nTN82ydZQaHcDMSCauLBLZ3WtuSibF9boicdPEwWoyDDvRiZURmdZuSTHJu2STWRWSxrmi",
  "key28": "3PJrt2w8eeARusAYNQK5P9VM1ufjnhrq7Bs73bZmqvdNKrwc2pycWmQRRAVVFskXMvdvu7eTR85bptwM4yLRR67c",
  "key29": "5Pn7rQW6kbyxeRdRdPz9SAESHnzaHUsq7dSsLG2Qyt2Qzt1yzxX7j284a78euZMRokbJ1MesSKHvvDkEsKrRgUJ7",
  "key30": "4LASTnc91thMzRZFuU8dpRAe1iimpvFRt8yA5JY5EfbwNgcB2Wqo3ncUjLkvZaryysihNb8ToDkkeNao6iXfeZ7c",
  "key31": "gKV6VJD1vFyEDVszGN27kssXDeGDQSzaTASyTz8qYS2uXcPLZEnP6y7LSx66CZt7kdg7Hxadj937Eg5WeFBe19q",
  "key32": "2LQpGQ5VqfVz6CP5zNR2qBP6nfzb8FLcCbVK1sGJvVhUp61oGgyYXQhjLJuvjdEpMxsme5zXJaKrBwDjKhJu7iYJ"
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

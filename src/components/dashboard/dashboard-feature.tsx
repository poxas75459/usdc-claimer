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
    "pc79QtiEvqSokBcM3tr5hnA5HxqqYakcd9yoGDKNoKt2bqx2FwoqQonb7UZ3pw7y8VqciPnd2ZZVt9gUBSihGZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MM85txGXr6r7Kw4EquZiSgX7hZZ5jCibPYKA7fyWPnPtrP8sAR32E7WvnTQWuMBozX5n2BM2eQgyCrG78Me1i3z",
  "key1": "2B7DPwQtNoumTTZhEXbAeAf4SCQGaFvQmqrHEeQrAXSKocD8DBcSuRwuC7zxz4db5oCjRVdBGxtufkKXxHiZuqBu",
  "key2": "2mHBnBbz2sJPQ9Ds7v6VMM1tETTX4KHFkvBzWH6ReMGDD1SAtd6LYFGGt2apbKKstNaYaHJmkYFULiSRMapYD3VM",
  "key3": "5wwyhBaRVbS9q2AWFMkzjBeuV6H3o7dPM8h1oeX6LtGe63LfXZmzJAQu2R9AkyRhB65TgQ4pj6kQDXU6v1iMfFCa",
  "key4": "wUUW1h9ZyFmZsT5h9ZhewiTJsJ4SgmLTSyCSGvzVQGZ5DqJtwKLLzBnGMtEdjJ7tXsWBBfWuqJaijoBrNosXRQQ",
  "key5": "3HmUefBdXfmgzCFLBsSfybUqsi2pZpZefhR2jBSiDtGDT3ayMVSHSR5qKb16TWRMi3YVxy5gdNRsSkD19DsdzfZd",
  "key6": "5SAA996bTfkfReJ1WsMzu9219mx22Y9mHGaMMjaEwnBoZhWJ4bngFMJLaMU7QFEmsbnsxFfNyoit7nYWqBUVRaYW",
  "key7": "5FJLfQuutmpvGF4fGPifd6eq6Qpu3N1a6uk2d5dVJVFbEUouBoPSvh89Ege6JfHXuYaSmsy2VLNASyzJA5t5cZa5",
  "key8": "riaCD6xM8eyiYeDcMhfxpTtPgYewc9d3DQ44mNVa97jsF22fTpWJBhPzVT4thh52HBhtzkwhGvxFLs7LtHFU184",
  "key9": "3GQQ4y1neANfpwc6KWnhuuTaZxsxF38ev989HtfwydwYvsWMEEX1J5emY9azhyRpfoKDPTt6kjTWB8k8DaWZ7psg",
  "key10": "5UYrqpUvL8moZKpAeNpAENCQjf1S9D9z8mgvphn5rPVDzbndaTGME5SAy9wjtGiC8AmS7AvZgftt5Rt8gXvyHJLe",
  "key11": "5AWWS1APYtVwdfCVuVaLR5b814vE8yYxXF6XUtwXYSEn3bY7t8k5PiGseNLmCnHfoMR9YjP82odLryrpHkbpjvLM",
  "key12": "3KQJ1DS7AP5fxurHwh5cCJhU56KkRzv8JbdgoamwCWyRDwtCgbFhfJWxMVnjf5Methi9sPH44xAkxrQ2Wrxw9a7r",
  "key13": "2bkrdQuuhnq2Drhr1pPk9n8PB9m29JyDEBVXdenFfQTugKUsu4f3k2JofNcXTbYhdsnh1Jjq1rRGHx4NqmQCCTeM",
  "key14": "cieZQ18U8GGX9Es9NAkiLokQhPHYdZPevVL8oGMyAyhGBrY17pBpibGhyYAPptwKMxSvaJQYCSrZUj8LxS6gDkY",
  "key15": "2pVAhAAWEsEX8eCxGxERMnR8nRyseditqv1yXau2FxeeE7sJzJYhJVqzErFxqn6QkvDgemXNin7REv1SbChxFS1m",
  "key16": "2xVqEzB3GAiJxeL66vq4XVw47Vi7xJ4oB32Mbben82f8xdJJ2da9Ggc2r4W5JFKkAf7ppa4TAcJbZLDvPdFfX1yW",
  "key17": "t5K7iGvTxu8nDtWVUmuNHBtkHrUHqc3nuB7vmpoXULm96Yi5XAiByQL4F217vZyXyg7xTYEpRBLuNruPsuKZ9kU",
  "key18": "2kYDwKMNGBmyFxWQnwJhPBWSwhhvRCmyRKhG1cKMs2XnzqJVDt5HAPUugqE8r8AjHVBpajuBkpVHPDXT1G4jJ9yQ",
  "key19": "3qFiPNc7Lzhj8kWKhdVqGK3JwFouiQpxX3Fu7EYZiwq6ysEKWV4F5vism4x76itPD2KD8zQhyVuhDYLe6aPAxPLX",
  "key20": "33cYdc75rtA322uKV1fSd4TahUDci3XkcWGZ2eXUYWzYaw5jeD1XGWKGM1rJpP5JqMhAjvdv8ujyjQ5MQYYd82Xw",
  "key21": "2nWDfYXwLGR7URx7Dj4oDsDiDnvUmPwVGHyU6ao423YN9GYYErcTxTWPASiamxq4Q2F2ZbxDt77QB37Js4QFUHJL",
  "key22": "4yKZsbrSvsJgKLMQXWEe8oSrnfAyEDShfa6Gi1Ut5q7UFUt3auySZUbsxSfhHcJmzNiB4Rgre9fDpdJYeYGm1YuM",
  "key23": "4CaMYbE4Nq12ohxeSpXpchZyuTnwURCZF9jghzSw9cT3PS6gEf25ki2pL5bqYwmrpgVuTaAFLEACy5BFwaKXuWUn",
  "key24": "51EqtepRGf2PrVLFBU6kkmiFmyY9f14rwAQEPvZxhP4xH8o5BnoFEMxyuSGdVe8Qc4DbVxM7KFjvpZ9Edd96LeSd",
  "key25": "2J5t9d2de4bPPWiP1NyyYqQhuw6YXJiHu2HDb92qm2AB1pJEpSufTnvVDqMCSKEr4YrUvyUF6s36ALgLskSvQ1nG",
  "key26": "2jEZ8qTN7CYGUhgixAcLSixB7YRZmANENtbc6v3AodVbdXbfMcNcuL1uDy6VCC8d2FLNhjhvbR7h47EtxnL8bu2F",
  "key27": "5GJBD9dEaz7HXbdXbV8yxXKVxusDFfB7Tfh5sMaFy2Vajx1WwQQ5WTsZFz9XJ8EEZ8xkTVRqKHdq2sWQ1izomyP7",
  "key28": "3URBeXX8WHynUk2QWzg1TEe7s3AoQmcXQYHA9zMjkvVVbQUmi6BhwDrBwPMRwX6yhqyAJ2EYqdBfKsdm4N5ACiHL",
  "key29": "5r332jmDoPu71xo498NLvNK2Nw28LqjMgy9Sit3svtBBkT8jMqzgDneLU5ZJCuvVGehAs51CqBaTQYA9ztJHLJhx",
  "key30": "5g5ViFETPyfqyumWbDT5UF9wJT2TbgoDLEeFeVbLUTJuf7nkWHuWYxMsm4q1gVV7FeJfHyR5iX7MhC5kP5id3gBD",
  "key31": "4PbUmz3GcP4AqdZk8bR3w9iKzamuPysAukaUG69AyuQRniYN4aS4DdZZwWsqkwB8XAeye3EH37SxiL6pjwqhn9ui",
  "key32": "4AtJyaGJ3QN76ctd8WDGb6f3jyT85opiNTGhkMNxxVkUBqz2vFKxg1W6ddZk5a2G1a7AXJY9LVZKA4iBKHH6SUXn",
  "key33": "67paZPuFkxUpAHFpaHcX2HtfE1dspXQotW171MysWXqCsYyTPKhfkCf2hM2X2eYxtQC8onaT13nyRTWHqrPFLsEo",
  "key34": "o7xkL1AUx9L45KEybL5SuD8retp3Ca3DS6WZu1C8gEkDMp5rWzLTW1SGtPvKG9ANnFgZkRKpfNnb1ucJwQDVZmK",
  "key35": "2PX6v65BM9bmB1dJw4dyEJjcBFN9X7EhN5KxHua3yMH5VbQqdZTPaMcZTznM91gKB48Zk2h9sR1NUvqFx1iW8oHE",
  "key36": "3pzifEcqrWnj1YBp8waBRBJ8inJxLK3kLF8j8SQRDmgZL8aw9PS9trNfVLNohPeVPo25WKxX72MVZ88rdbFZmfcZ",
  "key37": "mANh46xkfxytSmjYGkFF7352YMMJ9QmebRmecbgGV5SEUYDPzxkmXW4sAH4KLxCXRnTp7gDC6H9fmEAvtbusd1P",
  "key38": "36K5Xfe42gSgVvZbuAeP8pJgU4duotyUvbwLHp1BEVFXSrN4my2wZZSY8AERGKisuEaiT4fATBEfRaFtwfshG4QX"
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

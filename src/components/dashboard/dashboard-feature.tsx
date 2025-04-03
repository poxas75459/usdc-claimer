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
    "3fgg5pf1PvdkbrmdsxXjaQSs75Ykuwp3uNAp93iaxXTYpBoYhqSANfSMGZytGeNksveZsYH2c5tLUncSD6rkG463"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G4pMj5kRNcPRy3B2yXGaVeXnxfzNfemXX6dHtpdhjLEzgcA24H8UY4qvwLzaTEYs9S7zQ7eUoMnS5Crj1Rubk8C",
  "key1": "4CVB7g5zfu447qzEYfdePpJoJaF6C7kp8P3RKXXvWuG1eJfruYHba6F3pnQe1XgJuBGdHQqoWKsfy91S5fLJeUFh",
  "key2": "3MqNzsFypBtjckXjVHRRrhBXv4AJukMjtxCTT7ojhj5TAs6TYg72j5qwNPcSbVr4J89fxJR7Wx7dnF3MwQt66Jua",
  "key3": "25qkxD9Xo9eDxy8AB2x9m1uDTSKafuf6AiBaYQmNihPBSrn3iGk5QntratNvV5VjFdUEzoCKTMDBLukDmcJG9N4H",
  "key4": "23k1NRaRqh4JxP1zNmnkTomhcLvrm4bwPPba5TAKyXBn8e9n8hveDeHc6tdQWVoivLobnkbqRxyjFg7X39iR4obM",
  "key5": "3DxjX3BWiMuy7vy6HbakCkFojmbuW4YTQpZGuwstqzyhC2gjUZqU5NkZ2WpysDLgAqiCbepnLYo5zQqjU4cEYVkC",
  "key6": "47EstEkxJET9Vi74LAxCLspUBtXTy7QG6fwWSPtVYCmRHAy2tLnrBJszwpvzTW1hMxiDFRsw3tK1RPediDsUVqL4",
  "key7": "3NrsAjFVndH4o9EbGt7ifi4E91zAsEFoRinhwQEs2xdCbqobAN8bFWzYbpDGUJPTvYJ4kjNHgFuvMHMf1pU5wHZG",
  "key8": "DqLSoM8mhe9NaVGeXBkxPHniLHvJ1j89Jn8SrkhNfrKXFRB1x6PHGb5xDxwtMwtf7syNgBCn9jyAXtsX7eFKr7z",
  "key9": "2153fVbuyrCtMsMHJN9vosPYxu7Y3gMvWwifNsGzNUHUnJDMyMZR5vZBBm4WGCxR7LTYZDXzAJYdgNy8kZQyisfA",
  "key10": "3USxR9PvpYZrCP1SLvYAShtv7MjotsFJ99iXtYm2PrrDwaH6YJJoEvCrVfBGcoRFaR5mr37k3LwhiQDSf7nKYLm6",
  "key11": "o22qTdayEJwjrT3QDzJedUjBLerRPb42ueHtNM3HTtu3WwKWsW5Se1Rmw7szyqM99t52uTeYBaNDuGEDq2jXiD5",
  "key12": "2Rt9GWorDmjGUW5qZKDrbr7xRy53p4ejajchWh7TCmzpnFqmmYJTq2ovR4J3GNPUdXfbz2gnNPauh8aVyYpH1aCg",
  "key13": "4xS99kQAezkNNZMunbe4DTrK6HF1QWcRgcptSQoQWHLNa1vvJbYPEmamuWcsgEhNyacWJQgKiDP8f9ryY9mZ8fPN",
  "key14": "pRpBNG1LCdNFAcSAUCzQsNmqceMptLCSN9KxHnAezkzDuifaFfRnZKcw1Z1stQ631tNUxHDbwHsNHrrxqDvHUP9",
  "key15": "2tHqKZmTEh7cpdKuLfhzy4KKQWEvzkJxzaZwF5qJGpLXL8myWjU7xuoYQqpAZ4Z8vnNDQWr4r9MnRPYCzMeauqkq",
  "key16": "2P2R3kCyjkkwdt8GWCAZFfSuHQMCq6BySWY7bW6LkUqjC77QM4JyRLgVNxxFCgmQqSmZ1V6K8z3CFGXNZeb1GL2u",
  "key17": "61m3TpGieBCHFDgMoX1BtdmWAPi1jPbH1jhvrrrqEQobGg3n9pfYmKTRB8PCu3EWWo7npaGc4n2eZ4sNzk3GGemB",
  "key18": "2MQFuCMNbQ3ra5xQA2HpYM9Ku4C7tKfsFHkyVhm7JjRASYxxGLSRkwqb7QAfqn3oP5zHceqg8PJWcswJ3NC3r1Hq",
  "key19": "3HWnqtLtwNzb2Vysv4k66f3Rc2yUEgHjd57c8tGsJqsdMQxRw6yTrUJpgQLj7rbjQaYvDdJhoz7tVZ8K17UNUbRc",
  "key20": "PoKnAYe5X1YfmugDzBj2WU5jT1M3Qruz78eQrJy7LvL32xNBrU5CpVxdDcvNBfePJDjdy1xZrTpPRHs8ZL5pQ7i",
  "key21": "5ssDmeG5jLviMt63Q3YjuxNRxgdoR4mT9Z8kkgtENT6SKdUAgujd58PnyRfDogbr9A8D9TpE6mqY7Z9SEgRKwFvX",
  "key22": "5Yvanj1hTeQyYNAmt3SD1i5sXdF53pMKygd6ULasq9TqYtVt22yth3eRhNnicxAe2vrJ9nmDDYFiAFdtJxwggcGd",
  "key23": "2bZnJPfiheJSn3Ejw2TYB7L2wHkTKy8Nr5MEqLGxAemTLw2Xt2SDiGBTx59o5r5CUcqvTmxS92grpuTPn5okRKuq",
  "key24": "4KkbaicZykQsxJU6fYsRZN3Ypke8t2vazXSCf72X6V8gww8xtzz9HR2SK7jDiUWDYo7pZGoj5zQhPGtXiprsXAUE",
  "key25": "4CNVkBVMnr3kDrV42EHP2eiyMbDbGAPV8HKQcu3u3mZy5cUt4yePv89cekgF3mvzr4ieoJoQ8S2Te1MQSsidWzhn",
  "key26": "5gwAZVZ84m4X96ho7gNe8uEKfRnSQyDdYDzc36dQzv1RxSVoaSjNGUXWzgnAfyKT5EVh3thGqUbDjKs96f7S23r6",
  "key27": "5nx4ceLiN8nJHYxt4QUkhP6Nsvs5toXhC5BLYUNoDEXYSzHz7rckEuFrhjxjeZ7qvMdkXccY2kMmsT824ST5gUB4",
  "key28": "3ABErv1cjjPhyHaTYacR8nXcPv8Vpmaj9XwZHqxHNg1vdh5dtbxR8AxF2SuMSHKruPi4iM9fvuVqQVushSQWZW7d",
  "key29": "2nHbP3Nq9FvEdLBLUzM3b8ghLKXCNyLe99iDkHnUvcHNQzeo37hWCRhLb1pB9fKXUiuuW19e5GUb9VmUiRZvEUdw",
  "key30": "4tVJozd2LcS7CCUkvR5aossV65BTaS8YQ6mDsqawSihPhYF2CcU1AwFeDq1yxTUyvesNpTorFp3JxmYBFmxNNA7C",
  "key31": "4Gy57fkfsY624ZVDN54kX4xCVXttBMQayiSh2dDKZH8ouyuPBnVqcoJ3Ka7puTcnTkvWqgr6xA9dh8B945y1Rt3T",
  "key32": "59RiUP9HKpNPFrqFdbYPVS3GN63v3dNgJKWoZSB3AAv4nKTMjFp4vq62EU8zwUwKzHjoHDPdjcZtrxLUsZqpfFGo",
  "key33": "3g1KCVbXVw2QTw4BTA2GHw2ccsP9WBLZQduKcUmV98uAKTGhjX8aHReUkHUV7Dx2sJUn3Lk6ru8nm2r7LWJQbBVN",
  "key34": "2aLZYccoZ18F25hS5DxYxTLLAWomwvVQLz338FaDQGMaq4gDSePCCGhjMp35KeCcurqxdcRULTPxe5zAaKi2wm9M",
  "key35": "Fb1ta3X8bY21NhUTs8bPtw6RR82vQrMEhCPQyJUqkmW3cCUaCnxB53WWVqbPJjDjisS5U6o7hzTVD3NiuxZq1y5",
  "key36": "5iE6ULFJWZPQQLPR6R9pYKc1ZZXe67pmpG5J56nYhkDxBKQZe26FjWvjw3dWwUfNpdQ2LygwTU7UB9EbpUWUw75i",
  "key37": "AJe4prFXXPZ1jxc58qUFccpKvSRF2pwMmuzf1g3X2Ap6P8jVvMcvWYZr1EWEWG99Ur5rMUohRPd25RbDjaUtHxK"
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

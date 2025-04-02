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
    "2nvZbeGD4oNLxzEXXd3TrzmWPFax5TiHjdaYu1g6FRJRhi61evfveRhRv2nwg4LYU3WjmrJ3APnXEUvS7eWjSzmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUDtKWzRUs4ivnbiqAx3Z6LWDT4NrtzYEGmGfUzTBz2g3Pi2hKRqbAi1LKXmKr9uCqYECBHB2dKRureG4hWVjU9",
  "key1": "4MBmo22v5VH1i1Lh79RTseuJuKdZ6cVCEqeUfMKtvHcCb7W8wEoTFoibmajALAB2uv74ieYKYYNdKw8FZT8n8NUt",
  "key2": "4ygCwxHAkCFsZr1uS3AZYepFaKzMpD64TnKVHZBThwQLcbdbgjvEgCpnqUewSD8zZUmgpEWJ7MdT7zt2jh3fsZUM",
  "key3": "2ruE7hH1Be1GrU9jasqbV6x5EpNQaRmod1eAVMXLNKrbsJREeWtWJjbY4stZidfC4jYC4zKwHrjt7JRFhZkZeKfC",
  "key4": "2mCg2fiXyoBaKk2BmiVsSGdC7S9N1cjUc5VRoVuRpPNAoca4KE48aHpXy9qSG6LDQvsCJ9m7xMFqn9oWMFgWwRcA",
  "key5": "4s5p9UVvVa9kbZD4AMUjDiMfVTskzFZtmvUGxA2DYErBbktskmTJ3MGE6abjaEinJKhiguKT5XyMsVDuw2ndeAcc",
  "key6": "34dVkYdMf4UQbJwCsiXsbbcLqZCksUtjLqVRKXvEatKpMKHiEuNb6X5BpG9Ed44gykqx4QgMwzcFJSMRqomrVZ7R",
  "key7": "4GmbiBxL5in8r43eqMQPHgMXaS3a5jaeQtkRbudH23soTx7Y99RshvwMnNHnhoYsdJKPi4QAxjQQyiD7Vfz5WMue",
  "key8": "cQaNbygLCe31ugLgxjrVG9D1E69t6hJikeNDkWQ6wNC1ncG8Qfi6oQHKs2nzqyqRCmWejAHrL2RxgZLkzGBgbsH",
  "key9": "iFxt3NQSrXkKiHTVgJXXuoPqAor8RXQh9uqNPSLVddXVTdwizj3bUeYTtPZEKfQqpCuSqWBG7DnqpG8xTbYaNLn",
  "key10": "4NV6xZiJYMNg8kutDY8SVfxHxowLwmZvztLwCMhxQAD8V8dA1MZWYGnJy1cA3buUP48aP4Qpd1s7po3UfGFhJj6W",
  "key11": "6eih6EAn7ihSnDGRKCi2nUJ8jZfVxjBjiciv8Kckg75rj2umMBBKWViRuPvFT17G3q6teejokJAsQFpKToZExBc",
  "key12": "2Eo16YFo1n1LsJMcLSHp6vqEADVKfGu7MV8EWeRGjfwmdMeW2FDVBJFvy3daQd4NhgDYGNpmDuZCPM1GovLzWYak",
  "key13": "oKjCyT1iJLrjb2PPMqemUkuNBP1TNyiNLgDucHQAjBQh8ahdSFvNEcFrjh8C95w9ZpxmWWaUVv6x8XR8KsJYgmU",
  "key14": "2fRee6JiMvebTc2n2SBqonai8y1KWeK3NmkRTonhbHKHQ1M8boXVt8NzmFjnMDoo9eRQTJt7TetpoGwKRxv8v8BA",
  "key15": "QhRsqs7mL6vFh2dybCbxM9BKvTQgDevHEo6ettfRq4k7TcyCzpSc9r5S37jmpisC8kGkgyE5RNRz8WeG4swX1gB",
  "key16": "3G5HwEkLUutYKY7TDE2wVwHmF66sGN62FJ8cYPy2GsWvRR4Mgbv5X3R8Adgg9ohWBG3HG9rFYArk3xBHGzjF1VBW",
  "key17": "2Virn5NYHAmKVGw7B8qedtPQXbuRHnF7unkPFKgTSvesg8DNJjp933y4Zgc56V3hBusCm1RjzTLJ7V72VVAR3GbT",
  "key18": "2kGgARGxPY17F32rq4dSS69bAwkEWNymPeY1EJbLEJuik5u9dR6NhGSA1xv2ex2bcpMnkxYFJqj2Xd5bZyicyuct",
  "key19": "32368dZYPYKQ4AaU65S3uRgFHx3tR3hsxjvjpbruFvAQ7ZZW7VHe3W9Nsvpc241LSpGBfUCr7he5ZVns2S22fqve",
  "key20": "4ispyTTuAsz3zSt4smmZ2p15rTReC7dPnSYoPzzFcPavuJqY77BEtauXqig6E67p7Z5Bs4HcYP2rThY5vsgX35PZ",
  "key21": "5zQYofeWa2TLAQHdueWEG2wwkYMzPC7SzohKwR2KBi67bewr45N3UWFnm2j8AbXsZyTXasrqszxX96NDRpYUGBUh",
  "key22": "3GoiZ4Gt1LFmPaPTxFQLnqZ4D5yAito5q1YBo9hmENtwPDJhMfDmNhUBFwv8vNRKndimpZnhCWosgHD1aYV5HBtG",
  "key23": "5N59fhX6Ah7Wf3gQoxdipMqckddzaoxHhrXSzwkbd1q3tC1dVWyxfvTMcwhAvmQxvRnZLH7ga9MozHv1H6PyWad4",
  "key24": "aACr9Lh7LGLSUojaZLLpxh62XhUc24cbzNFYaCNBSqjKr8Dn5oddUZ2BH6N3X8AEPGSDC1w6JrgdhG4z7WD1mnE",
  "key25": "5zrivwXx7hk1KVopeNj48fSzuU4jxkXhSj6EVRYMuFYrZt6RDkAVZv68xUNQnNfPQ4VhxQkHmdtoQmy1seiB68cX",
  "key26": "rkhgNVDTzi9YC4EQiGZpdj9HfiUXKRkWJNY5bbxFrLr9LbCyQ9N985SRnJPenPZHobjfEd9Evsb2zcWtwtQorLh",
  "key27": "4YkV4doExDmmCBDrjb5K7KpTANPWXfpuwjm3dyB68FzYYaY4mpta8c74rFCEMXRQT56v6LNjvQnMGL2RoU8tY71X",
  "key28": "2ppWAkkyeYbz1d4pHY9Q2Qp1bCu58LD6xzgGXnmJvBhyFFqvfy6Q3uhUE2w4dBDqw8KrJVv3P9uAWm2JBtSkBD89",
  "key29": "5MLvBKAors7sSVVNRz3JjJaNENi7XkCkzJ3qm96B2YoAPkfEEqss5fEZ5eePgC27TSuDAFpXcd1iyKkMWafywLxw",
  "key30": "3HaEnBFFZhCYvC1pqEfaFU7z89jTEeMDYzwftBy6JJhFdyjtKY64NJXemKWLL6HR9kwitW9L7QKiKRrq5ymhKFQj",
  "key31": "3N4xrx82pgiwUGHqoPw1qvVsQ44Hit49Yp6K86s1pB5xAchnCC1uJH8mrrCyMbx9odLZaKUQ4hxn7ws91Bm5myxA",
  "key32": "49hrYHS2Hwu98oxS9i4VKZZyqMTP9CjnzYTGjJUjwFE3HsebEDSfgBFMGW9BeY1HiwoXBz3XM7kofjKngxBbA3Z4",
  "key33": "3ek4ksCXz6vsUurKG7wqwniHknkvNkHXu5XWYWPiyBTXJsDUvVjk3YCjE8MDJEEG3K3FVLepr8oRPyMkSiNCHJtN",
  "key34": "uoqNpreeMLGFKoUFEsgPCpR7EsQQ5TCPMwEgH9XgWR6Q7nQXV2BYzN8ixGFMd3DgbBSearVm5dhyTX8eRRLqhy1"
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

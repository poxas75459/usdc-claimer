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
    "2wm1Cta9xZJ7SoGWY8vRNPv3mUUPn6BvHZAXNFyphDoACB1j5jD1D3neqELU8pWgQ3GE7PmDYDcR7ypkQ3RToXRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EjFzJLEqAGe7miH8AR6ySETPLHRzW3JTdF21rZ2LgmoPbXzVNFBw92DVC3Kc5u8RXnT6Y9ZhPqpD36aDULTwVtQ",
  "key1": "3dkRdrHantuxHvR3mYkwsgyfDEEzbSR6hcht2qhvKkYa1AxGPeE7U5Hao6GZUcBL5hDJVndTL6maNjX7EVcp9oNr",
  "key2": "4Hmo9NVUSuf99fwcZ15LVqTaND73bzFpWDxyfExGaEcF4SwqfhxKSE45BLXxZT1euHEXBcVvuePGQJk4wa2WCNeD",
  "key3": "2i8DYqqazDVQQeuLmmcBiYF2pQqu3NVXqJND2KkFF1ifQvMEaSKydN4WRKAHne8uXFEZTvRFumqBnjopZC3Cqhg1",
  "key4": "2cYFYNzmWvUhUUNDUK9GoJ6tJgsdj7dHQuDZn9akAUodq5BzB7BQApaNGgyjb9CWQH98gArVu8fyv7S8g7V618iU",
  "key5": "3xoQWvnAc19L8ve9qXVrdW5JNkya2bXTMQBXB6UxZ67t4PSj6wHp1pvEmg9B71nQrE4y5BMB5NThV4pJFKcYJfrv",
  "key6": "5WSy5YWwKcziWLHgnieim2VeyBsWExcESCeTuX234uV3A79mXzQSnHH4CfNDJiXuczbiPak1RxLPCuwhQzFsoZAS",
  "key7": "2LsiT9P7KasNBL26xWKqR3wGTidFhxCEDCBaAEoQMh4KqoHS1BBVhTBvcoBdc1Bh95d4YfXA1qpy9b1gku3Ahhos",
  "key8": "5fvEe9PNTsreF9dpvxiFsqqCuw5B6uB6hd9JyPHQpXM87ug3uzKFX4wR3D8pQeNR7BuVkHL4u9X9f5FTP9JyWJCX",
  "key9": "4nhaA6odFb1SnAjEfwUePTatyEyNynK8d6AP3EWcoiBfzU5LXkw8K7Dhm8PyCyih1n3o2SG9NW6M3nrd9jmMPrdv",
  "key10": "Nbs7vjVjUFwDz7q2Fnxb2RyoeeAUDPCixrXipmHhb9TJ9T27e3qQuknMSnPznV4bqZxcHodkWRmauntfVQsxLnA",
  "key11": "3eZFucgPp3fzJzUGEtEL5wESKE5HYzCuPrwMjsG94mWh87a6Bd1uytLyASMrEwVDhYsWrWocQ1p8ecHF7H9conjh",
  "key12": "2rzWX7pNAGjjxpsVLnzP3wZu6RvCrZuKKYcS9SkDLqNQdvXo8CXu8U4X9gxBqbBVdvMd8XuLrXtgxWVJ52yD6dT3",
  "key13": "4YReVshFD5qAsk96AmnfuTUiZpumSqptmfTVVBs1zkoQoqiqTKhHmT9tvpwZneMKKkeSiNa4JRoDueAagaBFdGLR",
  "key14": "Z9ptbuzsA9XToJUJx8S4A3uXXmV2e5zD4TCx98g4MvUA5UDyuXQmwtRjZNXuJRhqFrmpbzd4f74fzwu3mcHaZuf",
  "key15": "3EkutqDwLLK1mDr3qDium62voK8rLHKhcoWUrPbUZA2w75oP1j7Vgd7eLY47AUfqyqN2qMHoe2VGg1cWHdx4uJ3y",
  "key16": "2DsXUCGsW8iBbnRu2Rv4XmVj4JaLR1S4UYvPq4MKq4j4338DtDxAoWXwQeWVuh8BcReQtNJVi94V3QJAy3LRUtq6",
  "key17": "c9nZbm3T7BH17frq1gAN2sVeA8k8TuG81Vg8eXXCFU42ZMh8ZnTkdqYiX3pBo8Zdr73b1KY8oHbb87W4Jaa97fq",
  "key18": "3hZ88pxdFQc4sAWpZhDWQryez64CjetVhcrUHPEqrg8prgD9FUZ1kLXDDP2jJQspJ9wciMhWaQ4oYCH6ge9GRgqb",
  "key19": "5etPSPkrTnzgfVNeTwCCHY1wmjDL25ocDKQMFPe7wvcAAVHu8kEG9SkR3Ggxit2fC3My4amgdZqJtRZeYPnsMPwn",
  "key20": "3mBwGHKMTX14XHn2gqogPosoSucDFGhgKEowGL8MmKSPhiyqVRV9nmRDPaCnKcB9z3AcLKqzxQXDQ84fvJq67buz",
  "key21": "5KV3A7aVVtuY2jLUD16N3nYL4GCuVvXkVxuhpdZdz2scXth3CUy671ieRxvxwTGQUJEnBdk2D49mz4BWUPch2eHC",
  "key22": "jqiFg6Nby2Bn1gJbuQX1b4zVfR2Z4cmh4yFirxNwbADdsCJf8Z9gcEdVKDugLeD8icZhutwBUDFJVWcBPp9qsiS",
  "key23": "4MoaAT65MCC6fw6g25ithhrEuLiuY47NSuB5LUZJA1JdUvVFkBB6jLJ9VBUYyYKTgfVvpiNj9CGkF5yN5NHbW2w4",
  "key24": "4R9p2NDerj7ZwgQvT3fRqK8PcjFQfKYFDKsMhGMxY4sy8DXe5w8RRfixunkB268t4o6xooghKyNvFYu9q5BjPaBx",
  "key25": "2A4z5XoUMufboCcUeXfmr51eSMrzevgDNfj43juJMKwErti6rFoRWMDm1frUb2qcCRL4dUjVYSqSjHEYLN8Po1Hp",
  "key26": "4jELQBiBDVF2btf3Jj652D41zgLwM3At11nLo1ip1kdEoUpGmDMeNBacQ2Y8GoYBTDbuKPeQmjLpKisjAPvA7C5K",
  "key27": "3druwmQ9pZGQTmxKA5oD3xbn5Cz6W19joxUdPKZk77suDbf1dkFdN3WZjpCeUVvuVBJRdsC8y2NaD3X9Ay7QayWs",
  "key28": "5SGwSSvDn3qjs4SypqkqQBFQGS6imAde6GhiPAqmBHHvTaTB2LkmtS7CY6drobzqUwCg5bMdvhuDej2RdAsgaNfM",
  "key29": "TNoBULgy4R9QSmBaErKoq14saVgtkD4L4mwtZnyTZ6Q3XTYgSeA48uyTUQKnqU5WKni3XEZhsVJ5GdBpqz9PHkP",
  "key30": "3maicWgxj5mKZAuAx8uz3DwmWG9GS48qbtPJhZbVjSSqbTyxoUkCwamdiyaCEtjfb3tuGJjWRYEGyz5xNu5BtAEc",
  "key31": "5DYqtq368zdTVEwKnDcV3V3i4dVuCE4rEfSLE65iUWdwRGZiucAhrLGXiXU8MTySkwyCSAVvnviM5oYCQVjRvqR",
  "key32": "2oqoXxo8JuB9pNgs3TrkPiVQZXpZ7LP1N41XxMCktwAXy6f4YFM3hDLTpzuTA3zxbUNp1NX8yWAFUHoFWnNhuU8F",
  "key33": "457CosfUyRxEW4XSEnZa6Na2wf7A6P54XCWotJkqHXUQFPmJp9jjQnYVDNtqu9GuzHqG4PeHiRbSZcEUgjZUE2Cu",
  "key34": "AgqpC9oiibwWVuNRbX1JrWViWc1d1Etunvho5kYsBxewmwZdxnMTn3MZNa3LMbmH5X9WUkJDJeokeyJyzwqYHbq",
  "key35": "5L38x9fgLR9CwbTYtE86FNFSUW5vKfk91gg7itBQLtVmo7qRcbgkWoy4fnjCrALC6RWW8QwbssRWhNJNAEvm8xT6",
  "key36": "rKb9R3dfztsCJLpXr3WRtngHuYjTEhUPehPhd6wbLvEUSJwKxrFeeJcsEqeVNVp1cqmYaQrf9sB5Tx7imzRXecx",
  "key37": "538AnMBzTwD4yyukd1L8fyLdVTcfTjyZtfkrfBnENNkSMk16exdNNAcrDswNz3oFcsn1XU17UjUgozzYGJE7STSb",
  "key38": "2GfxUcX5SaPWYWtgiSQSYqBB7gYWgszEWjNqjRnV6FoLWvWMC3PGPUDoe8j6XofC4vijRDHAAEBw2Ei46Cb8oqLK"
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

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
    "5GeAspzG3Bhbq8PNDTspVLMcqSe6YcWshdb7j3rgEDxhubobytiRE8dp7JTnsmAs5PNrDE6FaNXwpHL6LPEfxnvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wW5GnxP4kHL22K2t7nTRy4w2TQEVdiB75Ti9XdgKerHw4y1SmbpNM3erhHhz3wV1UR8EzwpfYSpjUdVj7PXbj5D",
  "key1": "3XrLzyohZA5ExbQpNVfDQKmy79bL5Y5bSFLpNknxqeckJd46kDbzBrbC99qJGSHjDKxA7cvwrdGJ5JtCN7bczyEJ",
  "key2": "4yzrH27ZFSuw4THVyF7ur8Lq7zAtjsGrnxCCthNhUsNXnp54vbR1FTbjPFJwX36qp332D4YcTYNQ8Cq7cuwekEMj",
  "key3": "4qL87jkjD3Y6w3BvEms5kmrEerxLqkihkQd7byYgP6aPaEBeG8AMYBhm4ijUH8uudtqafPfVaJr6jMK12fww5N5y",
  "key4": "2pTPSEPYBZw5cYmcjpuSCkkuNDigqXz9Ud2rCKfKxiooDrYqUeqJuaZp4orMqZbjqmXLE7JxQEF8zor9H3obgT8X",
  "key5": "Y5chHX7x9DWk2gvjUDhoqbTnQRaeN9Fob2pNGQ4xRhWMnjvnCvabTvAcHsaaoXZsp1eRibPQKW7eSgjqCzMuTGp",
  "key6": "Bf5eFQYhY6JotitHzeRTvjwxVt3NyJgNtr7hNvgu4NcD2Ew2uJW2PY1TqmWVNk8snyHQmBfFKMuyypEwhLcsnh8",
  "key7": "5QskVL71KDzrRt2qX5NyuMZ7q8U3KrH1Kg8KQ5dQfpkNMTcFDxjv5RrzRidXQBkLAhniXcM7LE9JWq8jxpdq2bnR",
  "key8": "f5nkwTCD9hTEm1XKuGp7xNGDA5N4M6yxyBoMDhs3m2TP2Xrx6wZ9hivRisDwEFhusPuBpi1u6nnebv4cgtQSjJA",
  "key9": "53Q4JTmNQnkL2KSacbrnY344xikymr5gu8L9rGNFCSsYvzd5J6tcoAy21PeX3rMUmeaTLU2YkPZxCfdQnQpLoSiw",
  "key10": "3ZirXJLvx2tmugRx6EseSB7dY2n6gNkMuTkhbNfvUafeN5qSPNiSidQ7owARyBnhA5QTCo7RqjHZxtYZtrdCGtHD",
  "key11": "2MGVYpJ82dJTKcJ9sfSHWGMoUqk7ZNNrTp6T6vBmkTZk7mS1ZJheqWmCYdbC5AcJ87UMGwg5QHNhmDgufNNfTRp9",
  "key12": "fB56Vi3xrrh6aUKZCrH8MhzzAx3R7QN2RQJYpsErWo2FH4pnz8Lw9apFQHJvPWdu8wQzT6jeSr2cxbKTZEZd2BY",
  "key13": "42Cfx21GYvM1U1aLPLXrfLTHBDLB7JMkKZmAVLekuXorcXWwyWeAxK7PKTn6hwaqxPExFUHqW4SgJfGY8amkHrSn",
  "key14": "57W9ui35dzJLKwjab8XeaSo7KYq7Uwvp9ag6RqSG9EwPDxXfhXYNzxkXWo4ULEsBUcUxY75ApqmoYk9jgRonV1Gr",
  "key15": "486h5eegTh1GnUR3gNvw8ZEHNBA4XxFWUGhfPjQ4hHdcTr88nSj2nekdi2uB3wtR72wEDm4cqDYwAYdAauERXMCs",
  "key16": "pbVb2L9XHdq71gEfSjKAmhJ9TiiUtMLZFWTSWaLUaUA6143TtmuTkSskfDU1pHwhDVacCvjTRKsxm4SaMsFbdTC",
  "key17": "UbQaAmKT5n6p9RoxfxrhTqYYSEC48g8B8PmZ9PLJ34rdgiDVTtfvfh8a5z8KsxLrMkgJoSgwnLu1xG9PJDvwSfN",
  "key18": "35x8FWGoUKqMTnR12FUBB55MZxRzavzjE2WWjDqhfZPaHi7Y4o3K1UwrM1QYvwGmv3G6GMPGnc46bKf29ArCpaU2",
  "key19": "21bXqLPAyr4z9GiYqqGq4x6cmGGV13vqU5JUjXjTr4nwo4Xw2ein7zVzNHqyhCQTyCMCb5QxivEWd57WbkgU63yf",
  "key20": "5zxDZJ3prauKEuWoAiY9WM3m3bYWu2LQ9zaLiuPfAY2wMVyyoE1iguR28qtCsTSMjt2vP3cDCScHe4JrHkNApTC3",
  "key21": "2TnayfriujAWDa3Yiks7CedKovsmmPQ4txC2r2QiDgP6dAs4AExqmcRyMwp27HFP33fJUc18vkf7FkAeZrKquptg",
  "key22": "83d9SMWavm4rrBxx4Uc8yXXE7ibPQ95zy4ziSKU8vW4K56dr2eBAoUKwMXRTHK3djwSmUyU7tWF9M9TMiwPBdWw",
  "key23": "4aaurTwSvh54RB6VurkdY98Urqs282cWoybWQJ2JexiYxReo4Csbrmm4rEyViGHM7GjHbTLdW6bH8XhvQYBL6mDi",
  "key24": "2SGnn8xAGmJQPmAMUJhbAierNPeSWxb2Yfy7TUyazEYhANx23MwmoBsdKmgz4qTWAMRDkSvPMjdsBvgXPfbpLRjG",
  "key25": "5vMFxqWWLE6PxQ4HSoXuiQnaUkSBmaomsejkebi9PpFfApqz3iUxRQSNMx3UE1EcKK7Atp6zRSM7qzLK2vYnzypW",
  "key26": "2v3hZ26ekxLh4PygxbjGBjY5gJvZPpZCRSzJavc72dPyPd9STyHxLcuDTcsQHc1Zx3KspoqU1zerKutxryHP8C4a",
  "key27": "5qG3gh3chUWnZvGBYipeSXeJrqPsyFA1XRFDZLjP19kqi5RQLnbnjULm2r7Scr12FFopBFWETGAAPt555TkGGp42"
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

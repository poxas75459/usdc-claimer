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
    "2FdKPiBygLg7Dk4s46LorVc38s5ZHPTi48sxLgnbhZK7VtA6WW37MRgdEBw4HVqgxtUvFefBbpinPJQspqR9Ny66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d7NPktKEcJ1bBY5U9m3WeZWmcH7pcCa5wkmdj6aF5wJREDzbCCMdu62xM9HJrxmci7x92QwK8LyhRiPC57oj6WA",
  "key1": "4eKQE1Efs1e99p8rta5D83dXphpLZjHkJWtgy1rE3v6CCZVrB15phUtbZDQU3QYmHveuXzbrWeyfe3RG3hMPEwxV",
  "key2": "4jrvGKeMxwrbwmtxenaVcfmM8ijgrMraUhQiQaVLXrDWuHMYxJFvQEkyatbYHWrP9kHPp7SGb3s3yx5phkN1mfzU",
  "key3": "3FfiGk7aWkaNCwqMz3oKr4c4qgaLJJ3j4a7LMF6nYEVs47GFK5TpK4wWBW8MyGihT2pWZScu9Zy4B4h65V3riJVC",
  "key4": "22m8DdQTKAq9F5WQdZicsyY7VrqWTHdtoGkje8mEh2Te7MgLtobx9WDEeF6xZpzM64s5r2xRDwjyzjzz2g7rq2WY",
  "key5": "2hcFNjRZgBUP9tVNfLJmmNc33nAuE196KaHzcJ6zaUTYQUx9bRRedwLSgRW5G9fqHPUwS94RfVMvsvjyp8Z7LVVq",
  "key6": "5h44hgJXKhdh2FDDyxKZYePDjAz3FmNA9WFy2Bk7dQdhtLTs1sHFr6EVWqqbFsk3q5haaXDE5EoAGCw7JxmVa9q9",
  "key7": "4aucpeFPNSBGti5dceGkgrZmS3V5NrKq3n12wKUjYcTYoub5F4GsjXE3dKQbVWWpusvu7kehnQ6vZfDQBvEqyD2e",
  "key8": "4GEY2tgLMmQdXHHFZYduwyw2hPogG27wAepdFTcPAZzt2qStQ5bhC6abupXVUdTfFZPzCT14tf4w5Hf2ZJTMZ6L6",
  "key9": "2W9j13LbV9BZsjYcBYybhsNYLvHWLT7MGQe2iBBnxdKnpRF6GBP6SE6hK9TH6gZGsYPFVGVFK95qhT6J9Bjzr29T",
  "key10": "527BbwjgCppfWugieBviQq1EYy5p8k35V3w14KR7at1nJQ2uv6d4Fj8XKEZY65JLPwgicGyT3EjpUCuU3FoRbGWN",
  "key11": "2Q46uY3j5RgQwCAxVDtyNwX5edr46MFR1CCxBECBEqeKnXT1inRnF5HV4wy3jjW4CgwrR7bXcKZgRhawzRapCQQu",
  "key12": "2k6osZc6z4fPFtapBv7MdfWyZmpsso36dz3PPi5UkJR8VQC6WWxxx5s2RsgEA6YukUtcaEkcEostRiwUXRiPYU1J",
  "key13": "52HuwuVB5ZxPfyPWDg3tpS2Y479i5aadJAfPm7Fy5s5WfLJxfx4bLHySGtUEtansVVRQs4uJugt3sfA1VShJTYAx",
  "key14": "4bgtvunuMBKEyBpxwc39HCaLT3TwygpR6fVH918uT8ohvYWZpU8T9bddnL7iPGhwWQHR4kM1UziEjA34r1Z8EEwZ",
  "key15": "3gnX8H82eq31XqmStDcEFHnzeUQtmc8SuNGtNd2juPmRZVT2Qc3EQq7XFsSMZS7o7npKxrJDdPaeT6VBqqufC7d8",
  "key16": "5ZTBm4MqAweEuqW6Zsur2ohrA3q5BaYdJJksrFwGYQriiifXLiHcHsB3FuZRgq15aw5NkmP3RG1x7d7gasbwpHe5",
  "key17": "3p6nYrcB9e6BaUhUtHnmqPaauL6NDk8nsDwoR6F5pbB4BXG3eNRdSDVa8eGg2XT7DNqKoHTXzHwvJuYje7qx7x3J",
  "key18": "2kH97btwMnScEq83np7fxBNAcx4NxjrpuDvzqJYvZNiA26sjxtenNnzmRFzyVUpGc4CY7EusGuDiXofo1dgpwNAX",
  "key19": "3ckZQoBLMV6NC8k41PQVgGCqvUYBYyEAbJ12D5idVde3NFpLFwMsAbfVW8dGMjH8CSxsW7hw7Qav6RwV6N7quSbc",
  "key20": "2rh9TaaXdYjYQWetTn5YoEs3qkATzmydNY3eXxDm8eoMa91H6dGhNs3vxYfEMcPuurYzgK2zB5oZYscAgqbKQyBo",
  "key21": "275ykmmL5J5DmrTVZzK1v7rs9rtoKQiCrA4N8DmVsQh8meNxaH4PqXrb27tC4ngK7c8cqX2JobpdzQdQRPhdF7qv",
  "key22": "4A3fvDdvm2Z9gzKPYzTdThWLXavAKi2ZCkSk3TL5YhL92EUFC6bVftdYsnoUfUso2SSeSiXa3zqVkKTWTJgkN119",
  "key23": "4EowEEpBhXvpcCJ2SxPX4C2iJXdQyGUARbmVUHnC7f65CweTUfpJC1PUn4jv2CLSLNBnA8JrB11dH9eUmdCRZwZq",
  "key24": "2k32NBMMJUFMmTmnCq5XrrupxPuzePPVTxWesmJfB6jYGq2j8XfqqHM68N9rBaN7C3UtqgqLXhEiDctZNdZoj41m",
  "key25": "36GN4Mw1XoF23LgbTzASSEiLZL2ntkQKWqXM1NGzh6keBbYCJQYRHbZBagugkR7HNXwP8xKMjUz7tY76VbcjxWYh",
  "key26": "5LvqcFNyFWFZFotH9CDGQYN7pgMcFp9VAkkJFEW6pqnnN4YENaXx1aouFsW8syqku5ZVzm3KbPBuG6xyP7V49kyN",
  "key27": "31TChMSuK41MZWfQy7EGqJcgw3CF6H9p6GmxS1i5UxhViYDPdbVGnMEfHrfMYQsBxbUgMz4Kmd8DQHpGTM47SYe7",
  "key28": "3rmJ97Tkfrac6incrDyY6jRPjS33VcuYEhrLDge3hvhab9wK5u2yTsp56nYtYvPUvQrB5AwyYTu7wbEumDJuvpgd"
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

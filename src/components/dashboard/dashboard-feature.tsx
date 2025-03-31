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
    "d93CksETuVGUKVGWstMQXX8eK9RLUabeWKwuewYrKHoJ6znPJ46wMNfXeGZp68Hf2Vz8XwDuhJCQf1QmSw1CGbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23xWo6Y4NFHJNZqrnKwuA2i8VjxobtLwfnmoHhZvopS5KJjyFAvzSuYbrbREwQTTbGki48TQEej75yyjHKiz79WV",
  "key1": "621Z8DsSGGqQQ6VUitwb313FzNQCb4LCvAwDRcAUj5ekjdCurRfQ665qSUPsahZB2cMYKa6FbkijQ7YDiBhm1wyk",
  "key2": "4sXG47Ls2PpuVPeKcRdW9T6WScGdjTrV5xnBfurnZHpbmPQFZs6rsgQxjL2RwRCT9Z52fxLG2YPno5VRaERZBhaG",
  "key3": "n5927m1SxwUTnQgPQpa9x7TccvoMLr6EfSsZYZ3wFCiwixK4RZ8AbV788mkLy7xLmXLG4Vfkn4BgBcrC5wAcLqK",
  "key4": "BigfgpecqU4YH6RpPo9syfdNCbD1MHyVg36vtcMymtnddd5fJbspQLraTSkaxkgouc5af8usfPisMMDXWwodWMh",
  "key5": "3xJ6V23K6F3CRvEVK2ZoQsUVpRBYkfWAbpEUyhw5mjpzPjujhT8R9Y5X4TjvonA8ZAEbgPjK59k7BG2EA7uvgocB",
  "key6": "5QfPpgbSb5Ljz4CXVsU2pEubVZ9d3wr2uaXiS6zEqg6hb5Peoe6fPZ96RQLjKDfb5wbwKhEZymjkba3haT2m1jhL",
  "key7": "51FzG3Kte1D5EzGwKmg3wLQNRaVYHDdUv4mutqCi3fuVeWWgrZSPNCyfceZQuWti9MAQoUznTCpKo9S924QExKbP",
  "key8": "3nwzErmPKfNyAXS6nvUPMVG89R3cyivrDWVGbiDWyr8WSvc5Z5k8oZFTi3AfmsYEgAkkzm4TFgyzisU1dm5gzcJS",
  "key9": "59nWaARCu2ehHgbPVzKsMtaSdcwhj6QDajCYRK4uYgbaJqti49PA11nAsE27WMo4Gh3bMwe1JyqX32p8obTrwaJx",
  "key10": "5nJmTB6mp6i1Zk2RY4F4Dor3LMw15Woewtxgwx32PxdqYH2Cvqy1KNpoARZuETWej2Yv7T9p2EFzn8jEfFBBnQHn",
  "key11": "433WUexdVkYkZxhjDRVJuZvF8aR4EzNAJvN5SKRuVQvk6WUReJZXkGemc91yTxgBeGDKAzZh4CcKutudLL68Y1h7",
  "key12": "zD8miXeqYYVnBHQLP24uxHLazXx56dTd2aTLvDkS9b9AFUKdUsdYfbxJaWEJqxWbAFFXg3iiHXPnWLD37Q2Ew9v",
  "key13": "2DQfKumi1nHn6CmaVASjTZktdEdTHuXNnZjQUMwWqicWt7joksGjjDfmZQ2qWJryLqudtdeor3BT5L9a5Dv49CN3",
  "key14": "5WkFsJJHRMRBp8CPRDGqu2ac4QkRK954drRmDSEvyMj6zN5wK4WxNpx9Wyz5GLk5y6TAJaijbLMPq8Jd1odBUJfg",
  "key15": "2fdmq4w7wfc9qsJw2YwLzyz1ZgxUt1Y2mWGeBMYfmy9kshcwHDebQMxYWFZuZYozfbnxTUERB6jWFDA3U1zuAWWW",
  "key16": "44Qsgvj49xai7PuT5qbK7m8ezUDD4nc1sVSyeCxsBKB1tuE1R12ZczodgLsT4Cc8MfcKmwEmwdTLEbK91MYwWV4h",
  "key17": "UxgMpJLtS4TENTf83rfJBTPdRmgCw7BDRDSdqSKD8Rd4itgDi2XRBs7KSfJ8ZANtBNvhK5p3zyg7iSzpFqZQ9dv",
  "key18": "4MZiwKdYrtMwPE6AsR2Akw2e4DJz3Ku2FzDAsLKVnui5uskPmzSBSBq7o3icxZmsiWzWJHNima6bzZShgaAoSii6",
  "key19": "2utuMcNrX3c551jhsPnCuGbt5UBjCgdWNmeyBnVyKHFFFyrB99drBuAodpu5hxnZXPxuSrJqLS4CckvQ5MDnWJrf",
  "key20": "43wMdoaDFVzFWz2RE7JNumxBn4YxsNfeyy6DyTTE86JyZuHo4PxmYKiiUcXivMNiLN2jqs5xnPM1C5jkEMGjLWei",
  "key21": "45JDELgUwMxSE2vHJjH9UunXLzEkAAjWFJvsyCiXeWHpbwoaCbTvRrM8mQjdgtx7561B3WVqyNZLmJzEBtWS1mwF",
  "key22": "2CoSP2HvyCVT8zVMYy6EQMS8M47quJX3jQXyiSUpt5CHp5jE7mWmA8qw5nE595GdwJFV3V5ieZuTcodJ7gmfbdCk",
  "key23": "47WNUgQWeTUNX9uRX3jKsM8d21euSFJMm574HXt4nhp26DBLbaFdPL566DC9xrW5u5yXftMQpsghSHZcmKxTLQ95",
  "key24": "2evEDXj2rpm1JGhKpm8hog46wYVeqMvkUvtfQKLtvXrioPF1wGLEgcMGnumyJ2wAwXLP2Ndeve1bHhD6QpY3YvRh",
  "key25": "5MpsB3JMDkKN1FJzwPw2gzAeeg4qyQB1qP1dPLBJtkSjQ65xHdhnKvs7wjhf4enDbngLfVnKbt9PyyUKC1HsSH72",
  "key26": "3EPULHdRpcSmgqGNdYgLgs93npDKpfujoLvwFBHuHuEk8WdDvrgrXa6KgcLvLj2hVoyd2jQrVQ2VybYWvGkPeTSx",
  "key27": "52wt2KzppqkQNhf23Wtc8nvCs7tcssquSAyoXKsPiHsUctLcLZagfbDe4Fm3Q3fB2nJ4Y2GZSEsemfG4x1WbWbnW"
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

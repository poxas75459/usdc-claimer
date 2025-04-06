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
    "5oAJVVxnFR16onNajr8CXyi3o9HAN3nBcjqB3r7CzygEoHo7pkja8Jz4dt5S8iSAbJT2tGU2t2cg818QpJ3GQrMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nJ7Q9ZTMdfgNXhuKKFdYje7N7dxfaQPTwKr1VxDEF1N7THW21RKvnc1ydTyRGPXkhZReDZPsTfqCxkGdr7dyKbS",
  "key1": "TC6gtaaivqNfuGcT8gnuDyUhf31AoqjRUhTvvwqvBwDm2paGX1VUvcpEfrETJHBV9UsJWPSXt6HnwpUg4ZL9eBC",
  "key2": "4Ekx1yygFMXXuKfixDmiMeK8L9M9euwZekbb28yRwtHKf8NyYAPw7ZtZU5LkeER6kNWBPVsECzwNug1MzVosMNfE",
  "key3": "3KpSjhu9y5rqpNgW93XQ6DUmW9SqdL2Sd9a6hYVeqwrpG7fkPESYUspzUhtKu1cFTPagzTxKFGXKgdeuiBN17ywa",
  "key4": "2HwfDfcznS1n9rtUnSBaS7VRzfTn12N2h1XbS5ZGWmcC3eBgHk7yA3LwfoSQSrC3wbmhnwmX59uefSE2LktmcRzC",
  "key5": "5YkvgpryPRaBdyga341UQjTMftaAMCQTsJmdscnbDXLwV1Caoa35DnRy3PCBEM8CL4TXbweSpzuRBPMyXvEFYe79",
  "key6": "1ceQaAzqYk2JNieZGzK75oashVzYBC8kZTwdyu73QiTqvyM3PUgKDfyVLfPxN3n6V3f1FbNzP2WfjDq6uD4k5rn",
  "key7": "4KA8LdUQcVWPU3CggjWoD5aMfYgg1nD5otUa12jrujuPEML64mTN6Ht7CW5Uyfc9Z6Y8wWZyn9LBsZinKPeFsyZm",
  "key8": "4DGMH25dk5Q9J7tU89Tc83sX91jaau1ocMG8cTNVQd42w39eRWdF2NqAMoj8sm1kz15F8R2YqAE4TWP9AayS8Rha",
  "key9": "56RaaxaqEgFAG9yt9FNEQ1gRoPmSrccko9maFvJBZmhZD9X6MrHvCygEP5A1Q91jwyikkgy8d6xZECuD5QEN5oJv",
  "key10": "3tPbJF9hyc7m9ykDvVHi8hCn7WTpKK11LNjwFPPDW1XoJPuoJE48xf61CT1ASQJoenxUdrxRTZKxNnUQ2PRd2Y8n",
  "key11": "8Sbr9tEJ62NyNFmDnrezg42GL85cCM7adhtTxfsCQt9MuUkPcZWBqyjpabG3fDuigt9ZcFCT1GKigJURKGtPLeH",
  "key12": "5dznrLEybZ5vtA2bsTw9YBvhoLFLdUWFAxwXsmuqrQ6k2X5eZVBDE5u4S7EcLqHjxbU5853LKSRB9RqKTsrF7B62",
  "key13": "BWTwQUhmjF5DoA22NKhYrvSA9EbGbv1EZtXp1g4ogSY9cGYMNPsQHwPWsggyMftepSfot1uKoBHJRafCyQ6ATEB",
  "key14": "2B4314PNRJSx9HFomwhVxGCJmytVjPs4Gf4bKQdGcAumivR2ZXgDrmNpH4aXLuFFaLFyT17ybLFG3QvtoZe3BwnY",
  "key15": "45eh2ksjMowSLhu75hDZastr2oJjMFE2ASSvcF68uTL9dT89wBzr5a5ZqjqWdKpJwovLLLRqYa6pZ6YRfr8mKEJJ",
  "key16": "5JExSR6sxypCt7wvUXyQ5Y7rf23DaMrmDwBCnbgiNN1morDycA2VzLQrk38sHpE9kY4E88KS4Et3dp2RSo6otTzh",
  "key17": "2j7Y3gcAbnCX74HsNC5ysAu6vze5ev5HPZ9cdTbnqJAYVsgQpAGvxwjuJ5tStvnbmvKJ34i8KzbSoNKTUjVBsUFn",
  "key18": "4LzqQRYW6NnDznKuDcHyiTvNiTwDYsPPYBygSRz46F3sDAT3fLres24nPRMYM45sw6dLsA8VCnhyve9oRV4WNPKt",
  "key19": "42gP9JyEhd7tGuYCw9jmoRrhoLACfNj7FqJPHTf51udSBsaR4gdA9J3PvM3ZYHa4dzBRnDz9Sw8ct5cUDco1UKLc",
  "key20": "5716SGTJDY2bqC1KY4kxokhLB59jE28vAYTttckDLJvLjCGDKpuGEsz1Ksf8yCbU4zbCFCt43myPE5jDMd2PNEkc",
  "key21": "3M1Hjo5uzmT3jarLpdXH4mBHhKEjZ9AVgjDYfan3X9uKSKKBq6TTGUsBduTUYwkAcP2nKR7oDjvAwJfFwgQ6NB71",
  "key22": "zjoekWaioMix54k8VhPDPK1Du5NzpB77L2XqWsWv5WRWKMsC3iNjzrvWf6PQSPEZ4jtZAwuw3YcJCm6V6Z8aa1f",
  "key23": "21hfdFmiJxtpEGaASzwYMf4P71oRFzv5iSDv9hkRU62bz2Wbgtw7QGAKoStToKYhNeRJ3ScmdYQh2KuwzXGYPABW",
  "key24": "5ZmQduVjGSM6z6TCQvxWUrmxxD9cASp5jiGxEhBbpvcuDReHUVmHaYSQ4EDkGEVBQYaiQeXq8Z6QcxE7R212Qu83",
  "key25": "4M34n3WaR9iusG23H4pNFuJm99FsTAKJKAy35f1zWsEcgAq7uXEAgaENXxsFR6FmMH8rFJrjphJF2jh6pYXh9u1E"
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

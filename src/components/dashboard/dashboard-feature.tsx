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
    "5uNye2ttgd9C2Te38wF6zscaYKpfSYn7MGiHg7cS8GASz5Tcz3Uz6cPNVhuB7shKEopbRaAn7KoXMP3WwPGRojKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kCX9owUP9quSuAZKqGCgDK8SvAC1JGZKp3cyct2GgW2eqeBoUTRY5moQQ5W6cuQCJGiauHF7rdb8ZMJLTacfs8f",
  "key1": "4B7nh6PnNCcz3EknVhtPDBpKKjAPmYNiNaxckLd4fVEfyVic3X1zTNNBCMwBup2VX2E2mnrFWHpnuFmF7vHXYVHZ",
  "key2": "249BYoiqjBHxqeEng7PF9M1J7Sm6mNMGvceDcHTNUjbuD4usFyFuvMzNHcYaiQHoz6PxERu2BD2AfWumtJ7BzJcc",
  "key3": "3xFpWgG3X5CFVinMG8Rswoj3PjVTn3HraLnNx8NAghRRACwx96Mq7hoiyxqtYvYUYfcTFxxht94bFJv8CYRybkna",
  "key4": "48cD9DAcbdkBaKr6XLP6Gh4E8UF1GPxvReXP5M5TgYAEEQi1KkWmxsuyuwHNDzYeW75evpibTo4odYB6HvJ9dpZx",
  "key5": "3gaktEmc4G6ocJQBbLtjsPL9nKoQuTVmnhiuPCB52MC9BgPfj2JRu7GPBq9pc1jEcKs4633TaGoqZ6vZi3izZz6p",
  "key6": "41Auop1mT4yjmrXtec49wXoHBsNuMEhE7nzEsq9vLi9QPUTMM3Ymgz4zDqhpXt1zCuPbyszqDogcfoXrNujcnw13",
  "key7": "gLajnUhQMS6d8YqnScu8wt3Jfkm2MeZxtY3xCoTLPcD3bvHCZ84e5G7VZPxYV5sYkDKVt6yXzLsShhBU52HLEj4",
  "key8": "5nqdjAGGqE76yF2DHA1WJ27XHZeUTA4MYBdJ1bmAZ7KPCeMRhsVW9t7XVG3ckAJCGkCj2A9hG71FSsQ5pf7ti2dV",
  "key9": "kdt4owiLbMJwZa3XTRowS3caffQ5JcCF3PkSKdzcdp6yC9ox2YR8LZ3NfHFLvdDNXAzKwdnVpPcXWT5q9tmXdju",
  "key10": "3jT37UwKnx25ADMrzn3kcnQbQwjkVZYSniTncsB1ATNtd179vfXEdE2YcUekTYaDLjwRHVEiP3Qo7LQKJ6XU2DSp",
  "key11": "4bkfvDoTEYtqv2kLWubedzmRzvZ1SYx5VMjEVPRRGgUmPJiqCXUyvo1CTAsZ6Vjq33ebkjsqcvj4T2SLxfs8vM9Q",
  "key12": "5gf7qXW9PVRTUKKShWSfcPoqMLqBoJ5kj5ou7KPsxkLNNpX6ZZ2pQCr3pRq6f76Ce93FJawfLEquTD1KMBKCLK4M",
  "key13": "4bxYdy9BW61TbTYdaGprYSC5VywHJwMd6t2Ep5raLBtExVQEH2VHVexycdmcdUXN43APuiAppFmVF4BtRg9dwF5U",
  "key14": "5N12MUstNSZHxcPRMxUL13RacLgZjBbQu3iiGqHm4LPWrfFJuYsXSTDzpctAhtizjsWrs3Zxi6WPyYnTYXh7V9Mu",
  "key15": "5NWT7JrENnKGGrg2f1m1QVmaCkZJqHGvXxjuX8YFiRtpx7qbuSWZVYbfgfwpJUUEib1HDxLH1mLVdzNwjFdF6P5e",
  "key16": "3T2hARnjTGPtUk2U9y9fxgv4B8tD1zm1FK1PpVRjjU7tTEzKmcAi5Nc3jgjtmqnsdM9f1PscvY2FWooYJVuGDU4U",
  "key17": "4VHbGrG3rEd4BBDXVJvoErpNYhVFTfa1ZMM7SDv6EUsCWY82cGG64NTpQeB8jvgR146ehXU76PPfHXKph3ssnqmX",
  "key18": "5HDvP6Vv96KikQmVCJtt821FJuwK3zG3zaKATidcJZJ4dDKha9ySJN82F1pWRK3rrrKrsVmhY942LB4erDVBqFTN",
  "key19": "5wZSQQqKhB2WK16G24yekF4fuhVCm3BrB1c2uffk7YjXNJAuamGaU8paGjS7NE2NmwKmJWNDgaPawsrFaxNK1y4q",
  "key20": "4B2etcoYqxkc4NnAg2u31Yuq4CLVGSHsJaVEMtvQeCK6DvhwLe9MPRnKMhpCDqqjBryj6tXBSVPct4Ac9mpFgstN",
  "key21": "5tgHqWkzQqPyUfhVXMYj8e6Y5VNaqN83mwEYGY8CdhEgttE6tnC1EchnrB9Vk5AK73jgNzRwDS57gVSSpxkuEo33",
  "key22": "5WXoVxEcsiZsoHAJ8Ud1vHKr68JxeTLz2riNZ8m6vF9fKLFR5Nhan5FqXozypmf89Azwmix891QxEcj1XyBAiVaC",
  "key23": "SkFqEwpuHK9Zsjeao87NfnASXN9cVMxkhmKQ2Hqhxuem4KeSJdrQofJSZFp7AJiw5T6FwGyZdToJrztbR1ShjCe",
  "key24": "5umocgBDTErgLemPwWLda7m5Pz65bcUGGs22g3p2sxrFKEhfNSa7N7Au6vj4mPV5KCPrknBcyZCzqAawVngMEhvt",
  "key25": "5VXaTKK77UpKhEcAQUsVu4UoAmVrTLpY2y8aGCxoyfHvCHLzjJUTUXnB8hTtM7x25qnppSUMYs6TA8XWEAE6kF5n"
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

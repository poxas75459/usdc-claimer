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
    "2sTYPjxWsJqDL4biQBBsfnsFzLLrZ9NgFYHLPemne95vz7ctwyvwU3Cdos85RT431TcQEz8HTXAQUDG6wN9RzUqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CxXdqqVsqq2kELaN7rbrRbfaLG1kM9AX6t2c5oCRn9V47AVSxgPBGYWa6USaXiJyej4Ya9BK15E3So3zJ7Hz4N1",
  "key1": "4ZgT9XJGguD7KuTEC7ktERUvn3xfPwMjpj15pVGL4k3gMyjt4X5eKyTvKnUYs9bZfseHhTMtFc3rQbTm8hYUVEHB",
  "key2": "4hmXL45ToLPN8fqT9MRfKB1BTsLwefysWu5qgnTXLhdT7ofAtpSswcNH2tiroXDGnDHHY2mQin4K6MioCqePpSaM",
  "key3": "5XwfkrNhiYjmCZM9czG3RG6BLXdkiEgxHbVbRvcwiqvX7hoVkoPvo4kgNg4Eq35XGzea4RFAT4pRqJ6mtAcs4ajt",
  "key4": "UFziZVjrWzgPQcbEwVATW5pe1Kf2vgoStw7vUfiBb74QuiJYEM2eUV75H8MGhuAJyHbbjCZ1WNLSPbefPndEhqq",
  "key5": "2RKXLGbgEuJxdrK8THhn5FpqEafpeJmZA3fJwMNx6W7Q72ZPrudWU3tDXBhSwVa8x7ndRceVNZbS4h3qCG6JL74g",
  "key6": "P4w4rVVgoo2gZKBuLGY6akvM6Z2oN8i1eXxx5urfXfGCgKWRzX7GxmEMQ1m1X25opsA8yjXDapS2KFx38qp6Rpe",
  "key7": "2Bkg23Ee7Z9o5BZuuwhcAhmCMhRQZ4uYSxcE3sMj3GDpnJdg8gyuCwCcL8xoJAD9PtkuynuDSSBRq9UEmsMAtaEw",
  "key8": "533fCkLwpnW3jx6o5cWoK4LXraqkytqT5HsTd77wsTJXsk3BE1ibnNh9GGVfM2ykDPJjxtd5R1KATVLPbDoX977h",
  "key9": "4qcqLDjYY8zehiWHf4uAdPMCbyX26pS99aZfrGtsJ5Jccx1t8HmKPghKQ8P52TJRMUkv2F2XZJD4PvfL8JHLZPbM",
  "key10": "SCen9XvvmUFFZQqVXYPBnnuz22BSjcV1Ua2gmnewxufd1V5b3qMf931cm1bjU47P1sUPd3yARiMKVX3FRdiSdUf",
  "key11": "244vqkcKsp2R9u8jA1TEbKyBErwN43XxPXiY2m3isC9HtSDBzTjw3dSUZRgxgF5oRzUQgkHbSXgqhZtXW1yGNhjD",
  "key12": "VbjvGuyuhZwytvNXAEZ56qk8bkA7EvR7uNZtMpRtN3g4dgq8e8GeWCLrnWMqX3n5FaA1ULs7nTfv6wDrSDWZdcU",
  "key13": "5vks7vVMqe2NGhbS5Y6DcDFE1Nqp5gNfFW8CiJbRwPPUp4qQyArhDYP3Hh2R1FTDpMqcfgUMDdKtdeDKF7Ag5wCA",
  "key14": "Jh2oPJiwSoyUgTYcEC69qQyxgFqxHjWLEbafDRGCtdUd7aXuL3KyLi23f6X61EztGiFR6KYPxyDEZCCucYzW7iA",
  "key15": "51aB5jubtMsLeYQv2JZBwdemMfAW7s1yPYeoAQvEs9Z6xp88WiLeA6oE9Ek9TNQiKj19zkdByiqj9t7spGozCPMF",
  "key16": "3BQN1Vc6FBfdpe5zRkGahdfVvHE8PqsBq2SpJyZq1bL7eNBkFKjrNvq8Djn3YdxJo8xHZCPkWcPJp1gmRuGPKBWc",
  "key17": "4oxgXJuqnewcEDcahNJsgQanTLb617iFMzGyoaerEGCHcBuw79GzrmsrKtnvsTCwCPNSLV52HNSXigYZrSGnQvV9",
  "key18": "4Gjtgc515msyNcbiGDMSnAqt3vtnMk6Kh4brccNxQDALahaBCjnLEpBFKgTVHx36QNq8Bvy5qaGFhSuhGYtRhBzj",
  "key19": "3MTkNvZDrRwidgU4T5Uyxtat8Jwd5UKos3BfWGoNdjC6UC1CqUUAaQBSvzQnHm6HzmXbGKbRp3Ny6SZvnVfp1dbv",
  "key20": "5Gtu2RspUCFL79R3Cd6i8wxbd9CjNF8JgzVHH7ur9KRSF7otce2EePuzza4LSL9mc7JDsXWACofNXVd8azwsC7tt",
  "key21": "2cb3aLSKkju3PNPtJZ12jTQdvKof3HUgtCGoiT2aaEnNo1yy1Mv2RXhk7id1EGuTHHFGG37dGsxTunKRqhk6k2Yc",
  "key22": "3NXJNv5f2Fmf26aGYMCKZKQxuPDCzTSuxmfQaS5sKm69jeLRMvEkJuKfzJpVFmaW9iAwc9hFQmaC5UDxcJArkTjN",
  "key23": "5J9KkJ6ZkFxWwng7xbjubPoGSwbctQMLhuV5CzPx8yYSPHjX2exiwC9pVFGaTsoBFAnTNEFghLJxFbxy3ShvGaeJ",
  "key24": "4HV3xxfTJArSuJM1KbGRqD5dcDtWbWCGqEgv91w7CNs69RVcdpvGBb7Wd6uVf59GTKA9FTCfnGwYjksddP5dVSQh",
  "key25": "2BDcWsUbT1ewx6J3aS8vBEvZqJ85i9VdS8W7kNMFf3tY1oqaiV2LjoDJ4VsMgBmbFJFmitjP55eYHGbUWSxz8zE7",
  "key26": "4zSxLk4p2NZYayEAb5oQ2848K7cUiLs2ianXDY6V6RVe7y271AZJ5XDKkDy6DGftv3eyEu1oLBqmFV6Cp3SuGfCb",
  "key27": "4yqdhtJzXKfSwd8hkreqFooCws1GaqMDULR6YgJkrK6Px5yoJxDZiDRC8V2skDgYjvEEtJGZydLNW6nknDoqujU8"
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

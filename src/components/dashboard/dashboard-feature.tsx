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
    "3bD32VCXnosXY4u2SpEH3sWxPkiSPqWX5nUhJxDFEmakPf2domfJK8V5nbUXQfUSB4NYvLRVx2QaPJtoNtN8Jktz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iJ7BuuayMyuUXQSWGi65b8okYcBD2cBpAnR7eDLWAiJRN75fmzs8PRTgpHjNVbFczvfCMJVGDHr6ABZBPfbpCiv",
  "key1": "3U2q4e2R8DF2otqZWV7jmZYjN6KM567SCXvNSEet57zkgrPx94JQfKkt2XCerncxmj9FSJu7fn9mdZ6e5gbYtmMs",
  "key2": "5DXV2iBuWX8pUKnrxVns2QyUaamPWHLtTxrZ3UFWysmr6hV8u7seWjBL3tix6Lr7qwiPViYGytMg97uknSyjm9ok",
  "key3": "5dTYaKr5naKV6mCTjTgMecUovejTjuGEEGgCM5vo21t4Y2DqGKeMWd2Fe817M7yKDta1b36J1GiHsDFnKdpd2Gwb",
  "key4": "31MmnEpm18CKF7USrpfgxmGvyRAb3wuw88t7VVxnVrJ9qSiHp1R4Wd4o78Q5XghjByWqaKeAfzqVBbq7mMtbuFub",
  "key5": "4iDVY6c7DFRPsn1iZ8PcKydxPBZSEBAtdzZCvHshkZ9SmvUwAtVsa16cvGnCH3R4RDTYH5sQacoc7aZFi1e7iycN",
  "key6": "4cBna9gJ3F1hBvEoDAoiUpYwFhLiUTmtu5SZf9bpVYzH3pMmFV6kTvfDZNbsJx6VX4oxgbD3enhNYUfA9UPUdpjq",
  "key7": "58hJjPp451cMSeHc972p5z4w9w2VPriwu5q3v48PZzpwLo1vvXm3D2nAxuGJUhKUwmasEkK8qXHZdfYpq7gwfkaJ",
  "key8": "2sNcnNj2PPqTtAzkhpPAYRsV4qLCcyQniZPC4TiBpyAXU6UGDtT4DUxMfX975xBkfw6u2bj2kAjdP93chPLZ8VvM",
  "key9": "5h7eofryvSQYnu66zNGZDxE2zcYZSfFRsnBFn9GxYiVhSDgZu1JoXVGdXVkBWf2sptau5QDVgSMRM9Zna6c6qjNo",
  "key10": "4DESfbxUdrg6NNYwKQ5dd81vBY7GNczAsAhm3LqLB2r6j3zQgKRDhYy6wCaHVQyW37XF7MGsG2JAgK1x9MbypjZB",
  "key11": "zjzenyfYzq1SBeDQ61YQ9tqovhdLBb87Auk8x4dkmp4ftwyXRvowEKsGWyD8wBSAFVQ8PG8oG5VYWa7bVGUD9cf",
  "key12": "3rbXg7dhkgzL4QsB5LacBRHmUyim7HJBJyvWwxqEWDqnEP7dBrndpnqFwsywRdg8K3dQjNdkvT27hsLVWbGTobzc",
  "key13": "1ruVadGpqMm32fbAUFR8hPQqwM8kjiE6CC5auNVGg9NSHKYM49Hdpn9RRaM2dw9HxkD5T7C8erWKHwKqDD4dcWt",
  "key14": "4RJQGhFvqu9oQDDyF7xWzK8QYd5gfejfQaWs6bnnTLN5j3NeY1aFeErn6ki8xd9ceQNx15PsxydHyHLk3mpi6vsL",
  "key15": "5xXsrJWowWb3bPFvz25dsraCNVvoj3mhrz47rnVbvEq3THzBZoLg8Snys5NhzUuJKhaRnSWyAJUkz7moncucnfU8",
  "key16": "5X24mN7kqX46Ln6sDK5y7wZbRYK8R1o5rnkti4V6mZjyopE4khhEMfuu4cLUvmtowQ6ejPbSzsd1cv8EpVGw8Thh",
  "key17": "mXwMRJA1ZnCrDadHjdhB46PjsGCfgf9cEc4DZq8kBcYX66JX1tht93T9m6wbpTRSLXc2EzeqZFyiXphHYGKFMPZ",
  "key18": "4baRZVhs91sNhi3kbjE4PfXsojMvsi2cqbrNvinppiuMMi5T6p6oLnUtvWsCAyhYH9MbX5GwEEnpy5v43VFymaBy",
  "key19": "3KVcZiZ2uBQAb1YWXkLtC4365kYodTUKMYWpZjPjUgCA8GKX35xShLHVAp4uk1E5pgfQzwbgNR7G9zTJQfZ2Kcmk",
  "key20": "RdGupRPxisQBUKLB7EzeMSVsirAfa6jZvAQpEJjdk9LwTyXEZc3aWHt9UNRxhUPXMPxZzH6dqWTZ4zEXEzE1VUE",
  "key21": "4Bxxqt8gLDVCyuoB15pbXWZ9kTnBzkUyxQzhcYR61qGmWvFarU9vnVnyJRVPk58JVMtRfi7kSfLcS8wWvJvyrqgK",
  "key22": "Y1Q3ETUobdvXR2nYePY5esV947rVE7HR5GpMCxuQ1upKNvBrV9PZydixR3zomkUArqZ9YUhrpaFJS2ZqAi62gpb",
  "key23": "vzZpPG3V6C1ZEZom7Kuuvj7ZqVHptp3B5iX8eMVsFdP5HQnBVERyJWWhMEhpudanKNZRHoUAFL5RoWcQbesbY22",
  "key24": "2ibENjaqEy5VgPt6U175mHBoEMpb5gf2ZdfzKsF8cdCaQRUrkVaRX2TJ2i6dPe7qUFJdTuJpuV5nQfSGAGCzZPZV",
  "key25": "5ZcYx79dQML5xC1TNkE5oj7MMHFBcMPPN1aupTE952sXFBjSL7XhPdDxMizk1h1DvuwxuqhHs3kCekHj15m4VU6t",
  "key26": "3WrXZajcJXS66pq84yFGVGAf9CvYTCdw7kkvxd2QvLiy6GDPEgUcATwQ4YXWmZo2Y9NxE75GpNLCDXcX6264WJXM",
  "key27": "55p9zG7VCR85BcP69UDYrYryzDv2PCXrugB5QH1fpNYQFmFLHXy54RLr2P6w3PT9cmfaBidsugbuXCGsD8BDfMmT",
  "key28": "38CNN5fxXp8c7Hc8QE5HneoXYJRsRpTWiTyYCShmso6qwcsx3BN8wMfSqqszHF14CzLxhnNgZvBBdU78kniRPkFh",
  "key29": "2W672RCNWY8EZ636Gxj3xj3J7wrZEEf2reMsiNy93pYyM94S8ifo4RRjVBiztZf1z6KhmSe4khEw12REqd5DM47F",
  "key30": "5V7oZMCcNigca54FbmiRMJLFbRzTq8deJPpJb518rDzRDG4ndx8uNsX4Yh9x9Ekve8xvB9FshY5AhF5XLQqFSjAV",
  "key31": "4vgj8nBuV7aSHoNifxagTc1co363R8HNHtWeCj4a2dUSjEWZZ1RUVzivEghRbEiqw7zu9VF5xaeEuPVBMETrFZ3n",
  "key32": "4s2T3Bz4fDEzS8W2yJYBnhFaqv14r5q73WfGvjchNTvHNPRGj1Dj4bmwZ9ZYntc1peoAEhxMoYHiJwANWP6ANquQ",
  "key33": "wydyFWCRZRmx8iPL3aaSiLhYZm7a8zW9EKkn2JDX9euJictMHzgggUbYmQNrUkP22Y8DZn5pDqPoFC1CNv4aRuP",
  "key34": "5BgUp5sbbGkmJNHPdK3dbvXVrJLbYpUzXiVqaHk9E9Gp9c5L3PsoCbmBAtYES76ci2oUCUyRD2J1cMVg8C2yUF8m",
  "key35": "457HNPemvUwX3afLfwEfVmKcRxbXPbm3kH9CdCW93F7MXGSux56xpKdNdX2v2q4GR2pkne1fQn9cdNmzn4Y9yuzR",
  "key36": "3VgQYMZ5c85vLfPpUyd8wNsbA2xD8ZP1AP742DQvvMB6Ru8BP4gaEV9JHZxXxSSX9EoyXXj8eysDggrG3g88CMUm"
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

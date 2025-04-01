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
    "2wE5CRmm3WiayJ8X6mn8z6pFTWd35uw6tGn5msRn5K3C7xzihv3KZ4wwfUrFMpp3dRF8uZ4JPgq7RnCMHF8WQscD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55KeTnimD7pNnRdXTiTJ8PXL7mMg27Mh5WZ7b9C8vSZPG4H9CtNepfZ2o5qpXRQEUng9UXNHvbzDoJoWQ58E1Zgp",
  "key1": "3NKDGcCaC77KuZ7X6GpXNxMXpJeMYNDUE6z3XARKL7gmhjpeDhcHgSPZrskY4dfGWAr4LWDfUk6WVyWkRJEmLb5o",
  "key2": "49tjUuZjcygwUTAEXZdYcyeXv1oBHX9SHQwXWDEJbU5sc5qk7PLGzp4UuJSmscSQGKmYz9srYMQTN7YVE61tZzas",
  "key3": "3qDS1okP9mNyeknCyJkRrwXgSy8wyq7QEjiX7d78CabPWCL886gWDNvucGw8VhdUFYJYcNCkishLhpHcwiFa5Q2W",
  "key4": "2VtjYqP6ri84RLyWr5uFPrJ4ycBEKnKk9AdnTzfSyZhQPJGZ1FneCKz7pBgHphF8fjNiYb3GjEws2sd2zc44iSiK",
  "key5": "2vsoCpBuNcGcfPodpSs7NEkijpAQ6YGBiv4XowBUNc3yem4rVngYTuVpG7DhFjs2am2VcN3CKxXZsNN26UYeXbp3",
  "key6": "3apCVYDPk5TGjny87PwdH2TVwViYhUBvBcQ7LjAUxukeFSaJ5CGu2s1WptKtYuzDo4U4e1pUReLh8NPGP2hASXof",
  "key7": "53syu6hf9EKryom7Nd968uyyYTYQ3S8b7yCgWDSMLWBvTugcXCzg7aEXo1EZTVyWBKMAtcKPa5cUHLDp8rQuG27i",
  "key8": "4sPFUshicD49Df1wfUTdAZR1dDSZ45eY9EA2f2ZdViPFap8d69fWysaHcB6wXfRCWmnoprSDWFi7YeNfK9zdpbFE",
  "key9": "MYMbU7oFRWqd7zWCF44cQLjf2yKyajEpRzNVwKvecKcSgJmW22BBFiZssAg8pghYGSiAWq18Fy4reoTC4USHnGh",
  "key10": "WGMVgsBAvgvBMq82qDdXdELosM5iKVLrkK2dSQnyZJ69RPorF6GiNsvN2WdafVetrrD5dzVKHV6mNyZS8ZwYaoM",
  "key11": "4GcS2sRUC63yYC3YGQTXKcB4NdL75zrigX4sjhzj558dy4U6GxtzpvtRXNZQFsaEAMYCt9BPCx3js9iF8GHbhjBC",
  "key12": "ptb5rqkeuZoyYf47qpmQM8zhVuFozkUajfjJaEUJjHA7y9FM6bFeyFdgyS3z1ZoBNeKBKsk9odquLQk7bhfdWNe",
  "key13": "4712FCs43EXeUVqyUWsmuFrSvkBt8dquGs52vzR7PyKVDGNawDJafG1kAjVuifKNCFg39bzAiTsTavAexmMqLF32",
  "key14": "5wDxfkSVa9opC7xCuwD2RtKR4Tyvm4Do6ghbnHsLSUoSYM3TEDER7oQqQBos3ZGrTFTMHg4ZqmCuZu8cXq3zvC1c",
  "key15": "2TJ2TzwWD8vEKuKEBiGAZRhr2xioEgzucJdPBhKGW2uo4QyXoPm8R8Up8XVCkhYUNHzXe35XENimrGpbAs18dg5w",
  "key16": "2YKM2fY1VHkVMnWHFCiYJwx7FaSm4CzR21U2R3KmhG6tp6ypNbZanSQ8ZHx8aAZDyXAH9meKCVNdmpVn4KtzruQG",
  "key17": "2m9C1PkoEwu5fUwsypyx3QyfMg6pCreDHVKnLKeJiXT6Ny3exGFfKC5SMGFRNC93ya1ez63vgSMCoyNmyhh26FJu",
  "key18": "iRot9rbj1s3b1XpvShgrmdTigAu3THPWt9PrZD33W3zccbG1V5LTvtyQ8G3Ejz2SBgXFqEpmTDhgZ3MZryaWh6Q",
  "key19": "tzB5tioZMoVxPq252wCc3ztWPeNNVEHQoK9KB27Wr749YnHNqQ5L2B8cP7adjLGnEcUEH1AFt8exKza6kZQ1LP4",
  "key20": "3PwKVnGa6vJyFBXCo7wEWQPFEdWyAhcxLHckE7Sm4LitzFK8DXAJWaRbwqYp8SfVsLXbTZuEtq5jmb9ELRbw2gcA",
  "key21": "2sU5FRu6xQ1aecK4QB2sWv1BCcpGRXwUWKY1Hbt3guMEjHAYEq6ecetKGWNpis5xHFaMnxuUvbacjPt2sgj5tqU3",
  "key22": "5AzEp2LW8RN9EMoNaYqZ7LkfYfKe4X2p7JACXuog8baxYVEkkKSEJiWxp5UoApxbgjgoQ4FKP8iH7YQUKCRc4kjb",
  "key23": "5Hy4KJFRDk1VUrKgGZZLdquvWKXfzF6eVU2SXxB7AHK4dfz8pf87oxPNSDW2g92RWmY2YKPL4bFSwGLU7qPSg8ER",
  "key24": "4Eer3GP3FLpaMMCVfkTNJ2hG2SwhZUcfsUCw7tvb4G6m8BoV1VyoYAzyx5TxQAUWNKKqGiHhqzvvkAZnuPwsBxg1",
  "key25": "oubZK664PRSn3jzQ1pVZYXmnqChhHq2ARFf99HZaYE3jnKtVgAM1RUuMnKrTimXbjNTSxiGXQYffsP5UWR4AGrA",
  "key26": "3jZcTQRRAcCkdAPfbNpWaPAyVnBNA6MoSqbkhz7v8D2DTB3bqorS8sXSGGvKFejXTVjdVdipsAnDh2Rx9nmw3TB1",
  "key27": "aEwTGKPb3q2FofVonxktzFGGdeoeU7wyUHwChttRKSVGbY1HtKC9dmBtvJVz7zDiU6S84R3WQxStLCgXyBppKX9",
  "key28": "3bTeGwmnGiZkk11qYR698XoZfXQgrt5dcy13z4uWv7CoPgMCvMcyL8s8tCceAucUR56t6QG2xQ4XqHRweGNRroHf",
  "key29": "3dgrTZ17a7FUKnqBRUb9utEvRMejtn7fs285SsUDGufRq1x8ZvDU1Dyn7H8a5wkD3w6PWJkXR6Exp7vUStYhVAFt"
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

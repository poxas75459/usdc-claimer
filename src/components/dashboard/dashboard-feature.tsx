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
    "47DvLXjbEv26cXFsm8rZ6dx36t9j539aGp9b3vZYn4HNUdKB22NDVZXKNhLd1mRVxxVsJsQxmeQfHwgGzuUrAfeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o9w9nHhKknRkE5Rh15XaZoysZuNYD2ZVvJvq9mv2EZq4F3j7SuGPK3Wy7Fv4tvorHhVrAR98FXPdvnAWvXZp6rH",
  "key1": "41kJ6ywNfMbxiDzfJiziJctcWyhDB3C1i94rw3D5E7LMULJJkAqyeMiiWLSF3yAV77J3Le2v82MiYXfMGh7eDLr5",
  "key2": "4gADh3QskTL1usTTK7hqgbdXX8fCtJumDBYwgcuxSeUz3g7tqHBcg8aAwbmioxREshqf8MKAEq6KYsYQMVWZofnP",
  "key3": "3UAJt2WQkYdBo6rHoXkvQTX3nNjg8KWcPh9X48kY5qLDiEHmBXiXLFJe6WPe3KQ9fAQcpqjMcWumnWDkspDnjpBf",
  "key4": "4gcUM7Pf1dBxcBxByhB5ckVuuzpunoC2i2mD2tF7Qbie5WgdkcUfa9RJCTmWyaSrAKP75AoZpXa8HeSELSMC3Tsb",
  "key5": "5XfEqHhtZDqbPi5gAjDuXPEPsMyowdy7hRBPvPJeZfCvHYi6LPo1g52BLwuxffiaq35vngbyzktNdTEmfSBGuMAe",
  "key6": "2yQ9Q2nG9obFDfCdv7vTHmDVfkaFFaqMNwJtZH3YqmYd2K564XMsn9gzG7DCmSazsr47Z5qk4sY7Gr3VcnAcj5fA",
  "key7": "5nyxnhHi26WcM1288iBivDDwFuPpN3i8XTuwD3kkqBqLmtBd1GNrQvaYGwLTv4CBL2LPFNtvrWkfttoNyKxeeVKo",
  "key8": "AwgPxqWX4Z1dr4S7JNLTzdC5JwEqGDGGxAj51tDgDVxi2vFsQGA6dZ2ZHySCqcEk1fkQNPApsRRuoKuPtMQMHFG",
  "key9": "5L18tzTDzgkZcHtreJ5qWPywRvuorVKCKTVRR4qRfKyeYAGfTsaGX5wubKRmNTHVQ74xnFU3xukAcFptZuUQ1Vr5",
  "key10": "yuyCiFfPcsuSgHyFaFAtRgQehxir7thusEMK6ncqUMjTvhxLYbcujk7D1PkPhYJGxb9fWKrxoAE5MSMC2bGZYLb",
  "key11": "9mgznGVP5Zn6fJ9DYTyJ3essRSvWEbKpXHoQSegS9sWBmAK7sKpV8QbMwTBWYEE96vfzGW6rT4HsgZb9QM8ezcv",
  "key12": "2wfCLvMm4NVdb2CLAwbRjJ7w98LvBZKKE2XZBJY1hNofu3YbWLkNWxL64cctXcRR3zVNsdGy7TR7YcNg3hEyyh4L",
  "key13": "3A31sXyg14MJLDeYFBSUYckKaBjDJ7r1NAXX8QTwoP866HWuDhatxRdrtbqE9ViuWR8rrk7ZwbAoCoWQpKcpPpsV",
  "key14": "4B9jxWioqVHkP8iZuyDDy6WPBnWQpnaGEYWVNu6dQFPJ9gsFGnVPu1anW1qvZtFLiNwTCaKmD5T44bMHVMLm1tM3",
  "key15": "2S4A3DHKRfBTR1hp5KqGaNoDpSDDEBoiEbyzLEM8GULs5z6GxDw1YYpRrRBNfX824ZNVhYc6Nc416t2B6c6rwPm9",
  "key16": "56VpCNvhEAq1aQvtdq8YscCQbt23kMjGEhStzqkURJwrcvTvqnKXgEJF55n135FwA8ztuQDRir9kjo4gK19MfUK1",
  "key17": "3RZJupdPKANngfAaZ6Fdxm6BE2CLiQvr6yyd4XuswWkmUovCLa4xK8K4TrBMNwKa93n1AwjNuuwDc63DS6BWC7aN",
  "key18": "4ZSPKLfP5rzQr4jsoXKPgLzu85MFpGbmwASarLYvn2sR9DHgSYK6otRryuxFv8eWeDW7BJUkekoXJMNKG7QS8zej",
  "key19": "3dkV711SmJK8jJPpWYZo27MKQ92Sj5PScfKswcyBgoXnaU5ZAfWhc4F3TvGtmbqMYV3BwX93vdCTHwtbsWRhbFMQ",
  "key20": "4FiGiUbPZjX4FmL35Q2YpkP7h3R14M9YCummqTh28fkvWA4wLxDjLwLyQb2kKyZGdvfww4z11y12iCSUh8Tr4HLW",
  "key21": "5goxhHdY92SR5pdnCCHztdPde7preBoNVJVh4nx7fVMLsPAfmH16cWjkLxXVm5xsTxpasdSXSn7aK9fJNcgh4w3S",
  "key22": "syP82W8fKkBy8BXiMtSiZUBT2Efp1kmFdNe6nq949jHWXAhymq9P1ftGHFoZAZXDqnAdLyZHo13CjzdTUrUcCCV",
  "key23": "4RkDFtckZpqMhwcsZMTzWBQwAUPvJGCuc4eNxpfLgJZ4Vw4pvfUKUeNihS2VWgNCoWTWZcFz8gHmo1iApFG262na",
  "key24": "4J2L7LWgrLGMbJGSSsGk7kjtg1sz3DTQ2xWjCNQE6zaTiSxaP8egCAUyL2o7UYwpdHVFkFdD6pDzF844jEA12GMF",
  "key25": "3yqvfvzZp59TNVkr7KcCR7UucicTCLmjPmRuJdQQujGQqKviJFaLo5bP8qjbQjVXzLEZggFSkKy3AnEqyq9JcS6E",
  "key26": "67NSD6sckWociMDKVFD6N2PCbxcnDQqgJCFkuBMJAQx1fmYpGPaa7sZZYHkAmrmPgoNuW3bBhi6r9gp4XqYiUX2R",
  "key27": "48cSod6LzS2K87AgaLVq5ktBRHw7UTYQnQgSq9QgWvqPZzLSF7hZ5rz5xs1XT9Udk5jeh6jiBXDPabffjXUW36fh"
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

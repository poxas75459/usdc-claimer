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
    "315pLPUT3Mp1AppSp1XW346XJ36Wkk75xyjq5ipqtE98HqynbtuStep7fohog2dc1nUYN2NjshKEtHa3tmJecngr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TztMF4B71J38YmP28tzea6kkgf6SarSwTXNZe3KPAKQYrGHuXviNQjFipjJoYejPwth3Zhkhz8qncUZcYjbCe2a",
  "key1": "2oYHo1FckYgK6KpSaeiPJWRyeZ8ZRe2MMCb1G5Jvn6NTa6BSbED7WD67P9yF46cF9FPfhTpbnC97EzPqRGkzp1Yr",
  "key2": "5ryDDru6G3Uvid1b5wtmT4AC31xzMvCvURxGeQQUiV4wtuJAd97fNqPaLGWbnzE31gd3rMY8cUXHW3AH7EkDFXfu",
  "key3": "5EF6QoLtQtpHBk6JBFcbUq6chrHoYXcbLEPvGxUqoPM29U4cWyGnFfrTn4FWfMySeWBU5zvKdRFR6K4e1o7ybMwk",
  "key4": "4d1FA2HBuTQXhxfGtbUc7wRaP39dLzGts3BgumL4jwRWxexjy5ZeDbzJ9zZq8ZRKZQkHS2oJasJta1x9z7NShyJW",
  "key5": "3FoZw6QhRjkG3uiyW2ECtmBRC5kavTVg7tFP5Q4nVP5nSEA47UQbGpnYJJQ3w6PDNMYaVfAcrosL7sDtdfEXynMB",
  "key6": "4WUKhxMg3dEdCjdgf1NCi59JKpxBnM5dbScaUJsBMD7aqDS2rpEAd9pBfejGUPie64B78gHAWDXP8uHYTuMr4MVF",
  "key7": "2wic8Y81gRsYKGhe6L1kAtpJybxPffdzP4UEfRL2Yhmn5ZMN2jKjf7xo91VQ74G4ihga1TRC8UWuhgHGh4ETdnqX",
  "key8": "2RM1REZWHSLXhxozVJrjt16Cid2z3GEDnAqG4utCALC4Peyrdp35c9xqBKCmVWCfUjLJUQbZvwYeQ8SVSZVQyQUV",
  "key9": "51xdHAaPjrPKbcfJShgroc7AV3U17t2huFGJrdXoy9G8QFkSozLbRA39YRnnCAKpQ9ayEA7kGAhH7BQ95DHrsQKb",
  "key10": "4qwCtB3ehNBxWZGxvNJ22gySqrNXzfW7DY8Ybo6akYCw821Dkxxn3uZ5qQVJ2e97yXoHaB8fuUhrBG6LrZwkWy7r",
  "key11": "5eKiRLXH9YMN2FeLvqyHu8c7sKKApbpXcEryvMykN9jM4AdPwEPoxKsvWyciuRs36qGLLD8cJzFeHH4SZqFR8tUj",
  "key12": "dxqJGdw947ieAhcvXknHdmwKAMJSZXQRw76xAh2PnBuKHLXnNesCkM1oXk3phK6wQuim9XvT7wtSHmGZ2ehUM3u",
  "key13": "bCAAwnhMtdKJVm4Wk4iqMoUvuRracn6ie9YmvAzdEQ4SN49LEJQKMGUugRYBS2ATfNVf5Doh15GRab9gXpyUAdx",
  "key14": "5RVsrC1HYzcAQz5kbyKGqsYzDihHa9k91VbVnu25jJz9ZbU8WEoe6iPjgQYbeWGE57ijLiWdkM4L6h4KBxRLafzq",
  "key15": "upgFRHfEqda88SYf2xeWWbq5oYECvYgx26mAA2285FCc8G8ksaxzTR8phLRtp38MmVCht37T7gXbtu4hDHi8CEe",
  "key16": "2RxXeJxryWVLc9GmvkfBdxYh8oTeTPzEUhJAAvrrgXsbaCet4DoTyd1sLUzg7UTP1kwzhohdCNsT4EM1T4U3huMa",
  "key17": "2hmnd1MhoAJTSm2zw3KeZUrrYfshU2b16ND8tMDNiiLvnM6kidf1HokVfYZ3pXTdPu2SDu3c1Hi3xtH7BHYJpCxh",
  "key18": "4JvmgeQoJazaLR5vNU5BMCVihpzpF1U3eDavyxrJ8AaEyGEYUJ3wSvuwjhZVqhvMHTGBRaEx5CgHGUNmyJaNDpgy",
  "key19": "3Bx8arFMk75NJfVW9orahfdHuS895pg8NApuBcRExYZKF9VTgJ4qZa2wDNpeYZRqmyKTE2UFfGuRwQCke3JiymQC",
  "key20": "476ELNFD3MgrLj3ECdttzoFkTuMqP52fEmzD6cRXXW7SwMJ1jXnYawLNBy26Q4pVxdrn2W1z3ruboH9BJbWnbKrG",
  "key21": "24zMJ4PMQSvrwoZPzwE6iH5gVAoZZGXzU4HHQsznebY9qQWBv4FRJfhzepfagsUeV4bEMeDdUzvvispah5sG1M5E",
  "key22": "52PRVs5KpKUYuvNG71qv4JMS44f7WTLB1pM59HK1f5q1mbvogJi3kknscJ3CArvQWBrFBfvrVXofWqovYrwgPbfU",
  "key23": "5KADEs8bX9Fh2dgRUy8v1oXhnAqUPQxa4J4cyvbLpKnUsZutmy3YnN8A3nDdBCoBWUCDR9215oKBtVLLE17Ac8iU",
  "key24": "N9PMuTYXpLyfJB33wvNBsDW5AMo4AbsGVqFZHZjtZTrfTGMNjyVuvZdLrn3asQbZDVguXZ2P7GP1QUwBoR7bxbP"
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

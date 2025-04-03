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
    "5mfgYQ3z9trLEPy7wr2eVpLFP59nMqGLq9DidMXHysLVKgA6oX17BczqXuU7VbjkCe6MtqeEGTemXgTWVtMF7hkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rpwm714byNf4NUd1J2jPxWsyoQRscx8mA93uCvWVYay17Af7aTJQzi72WuYrVp8npNczuxvaTXSmPCtBdCyvkzd",
  "key1": "3jEMJAviqyrxYQC5ijs2KduqxJaJZqfc8MFBgWS6h8eLPk2pbLQFkQKRJA38QrpNHPbFUQiM9CEAw3XjQnEKzHNg",
  "key2": "3T1FdCG7jzRgrR8GHxyUHnpYQ4zEMhqSbZmewEtrQhuNL5TN8g7vaJ4Xused5rRv6CqymsRzt3JuTwbGHspT8HJD",
  "key3": "5Y4WNz2LFsjj9VGqcDSeUD7LdX5nW44uGHYkbyuwZ4EVH8cYJpbi4jxPnNyWMPRN57aHYJ7UdxeRCvSXyC1fpsyq",
  "key4": "9ESBZi7sjfr8emEP1vyJucy7ttX8ya6YBA9ZPNJZX6BCXgeNkZ4P4avLCsVYdSMkXhpVDBZ9ki8FehyfYzBBHHD",
  "key5": "5bVrXkysbxyTvbrVhC8TdbT3bG1vsH6MnCK7ttG2qtwLZkV27S512cd6CDvnvKB92Q4oWEEzXjcCwBZzS6ioe38F",
  "key6": "4iHDUFeQ8neW8E7rTf9AS856UiZKDKJdexUshsLBKHes3dsEtGKwej18CsKzPBS4iT3E31KzJrkYXi4TfxV2ycqZ",
  "key7": "4C2SxXgXsgrinxQssyJSsekCLuNFanZiU63oi2riEPET547MWbcfSwxg7ReuutHLD27BPyKRsapXCb6HVbuwcHuR",
  "key8": "2kQvgPQ8FU1Z9XSYvzguRsYLh9fF1sK1zjZgn4kt4iXoJ2Wk6FtAmzhPsEg9hfgauuu4qLbeJ1VhmRxUiJuAJuGH",
  "key9": "66B1niqdEjvqKihujZ4ARUst5rMnbRTr9AzNi5AESshftw34JX6wBoT4HPWG5PyVxGBz8UAXdAagh56evUm8arfA",
  "key10": "2Y95qgxyu9aYRCtzgvZDGpgi4CXMcxq8vQtHt8R2j6UWvmETdpjS5tvkFvNiojvFTJYLLKn5HvGU9ukCz9EFa49J",
  "key11": "pxuxQ7gTKX8UkGnFDeP17V1fKC6MbBtsPvxg2tYqQ33391fk8taqp6eUM1t9LDFtdBMendsqjgDaRKiwtnzGdDj",
  "key12": "5QX568HcYAi3Y9yi9dZKANUJFeg5Xy7cGGQGGG9K6kXG1zzwDhKgKfVjLgYQ64XeMCLfK3JwqzJKGtgmEEpUH2ES",
  "key13": "3Uv7chSf4ZFQWaxfac5m6eMTprg8ZhG1Z3v3G53a2dhRt1mKNjeiJ6yZTsxSCzxEy2v3dCo4gE51sbkFqPR4uiyE",
  "key14": "66EobhSrm8z4tQoHcuxHL1Uenty5FkFNDY6ZPVNoYuGzQqMbcncAuwesHoqSNqwkfzzrRcc5tYVy7ofc15dGGzeF",
  "key15": "pGTXjEjHxWPPV2NMZBi4v1WGcJi7s33zcjixiCa5NEncoh1EuX3rqJsDqPbxndudnCpHaMbUFtzW7RrwKFTyqmU",
  "key16": "4wGp1BYC2AivvPVug612b9c1c9gkzASnhXA66GaHZmaxVNU1pUY8SDfwxRo7X2KPBE9ErDDQacZGSfBSzGgTReau",
  "key17": "4gzP6sbnNRvBHfBM8qHZRo3cRXozgPw4yrRcapTieyq4iE4SK3djn3QCZYxNqfQmoTFwHioGeotPHHXQ4SYvdgq1",
  "key18": "299789j5ue6Zq4EKRn2NaFyyXPDd1i296mYJatFPDASQuotmnSxEZEETFMwHvNrBt48VkWtE4VLDFEz4XWGQ8DeK",
  "key19": "Masv3Yzj8c9bQnFuTJc3hVTuNJQxeBfCossh9Co5tMMXo93wcTHYYNiGVzSa9KX5aJudpNoE8QrBAjVsQeddzcS",
  "key20": "3sW25rLRPRQA8EeXhvWkzRoDDW6JR5ZycBGdoqFtSowcmtMTER7fbpUpQ42EuAJFVxJEw6da1X5yWSwwRd2SgeZR",
  "key21": "4n4QmaGhzAkh8AMbTSrTP7HVQCxJD4FdLG5ocQYXPeWQcLF4np6s9PmuCdm9QbTzT6VkNyoabmiinnUUiiADMNUf",
  "key22": "3jQ9uAUcCMqqjrLpvzbnav867DtZJJAbQvuhLCSbcr7Hfw8AsP1cxxG2JNUn1hhqucu7MVWKUtoTuPim4bPjAcyr",
  "key23": "3M2WMQfwvFQvi1SzVkyw76Ak7VHEGqCbuWjpejR7qCs6zy9by5nVWXt72o6K5YCUotL9na2CiymKVJNcFp59GyG9",
  "key24": "2nps586gAPgF65oHd9hSaWM7qvXQgiRWYy5M4UTDHTGxixsYbUpnpAQUMoGsAiDKCtk2FhigqJ5k6cBDpRMb9X93",
  "key25": "kcgoJDV1McZnWbSKBwpP6f6zXJmnh58hemRiqELsHTzvZNjNs5eJKER5NJEYS3ttEwHbGTDuDYK2sXWRAS8XigH",
  "key26": "2Vweg5bPzvL86dL5MmNkp1QM9NGuxzsqWXJcnHAeuH7fgwec6yRgrfisXLKRwQSBJQBKNvjjoWwRCXbMVJtkDwVX",
  "key27": "3cgLgHddHUKYvaqZZNfj1RAQn2QQ3yDbrf1Jc2XvLQQVthEhYzfzWrHuKzktpxMM9WW5mF45JAyi4pWFz8gY6rPj",
  "key28": "3hGcomAvNbNkxaMhaZoefjAEC3gtUfyJgBffL3qCAoAh2xFt8WeiRrrD2Xe739icjukDjLXTNPvvPwA3B1sth4tZ",
  "key29": "3Yd7meD2bxEf6Cs9ga3ghWE1yg4nHhP1D95a7czL7Z2cBDTtnqxPGww1HGGVTS5yry4q8BLsqx6jmXhhzL5c8TSX"
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

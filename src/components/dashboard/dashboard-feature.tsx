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
    "4k9UFah5ofvuEDjefyT1yjUaj57M5YSmCuwwgZXV7vNMoCfq14z9sK55v44tykAeqnvAEFsqJ3cy5QU7zeb5pSAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62cK2kdE8WgfHuUoXZ18gbM9vb7J5JY11ba3HjNVZsu56KnjTYoU4YsNfwR9LZJ9T7ksEv14YNeV9FXVKkMC1gDm",
  "key1": "3eaHwCXxVgN3N1L1SEhmeVcdEiecWsFH5wYiMDHMMnqt4iKZ8yqsxhVaMdTNve9QZmufh14aGYaXZWPJ7ynJmbks",
  "key2": "5Cs4ditN4pVC62HuvoBjrfFHJ4gVV8BiTTxV98ekY7nE5RHd7qFT8uZdVG4bWUgrfyzDMJYfm5tkWVZc57qXPrRf",
  "key3": "5VVQUKiqiVe19ugx6YpZpbJMckB9Qiv7jZZyNptxnQF9ZDswr66nUa4HQJnrMhfttZPyFiRbtY4NBD7j6iuPyEHa",
  "key4": "2KPvio4pMqLtawM9G4JHG8BMiVwBkQ2A83YpJPgKzV7hH5699NZbbkY1G3pnsEoUUJcKn95rD3WaJ8nUwsLo76Bm",
  "key5": "5jgWtxg6oiVps9jaigpnTZjCgPMJkkbnUYrC2SiNJSJuuZVzDEycrc23Tdpn8AAEjwQaVcwkNYYat3aPwm1JaZdX",
  "key6": "2egh7Q6zfquJGuZuTRQ24Vy2s2XxpRbzyfNQkSi38T7dJDCiMaXdHvsfADD1ifAioGJp3xfSHu4YPysGrwukLjey",
  "key7": "5EeWirMqjGdw1zipWC9RNdv1YhgnLjhvqQkGLf85k6e9jr8i4EYDMQTutBaVoiczsVESK8rvZaqNSsFPFCgjpsEu",
  "key8": "wQY2Q8QMtYheAzrCP9SpeBhijbtsqxZ7qTaR8Q6KPA2qvK4Xfekybmm2FhYHXnw8qXrJaM1uDS22KRFEvYwRrkb",
  "key9": "2rMZf7keNenRUYoyLRxitbQTaJFNCEnqphmEkYik9k2sXJaw2pEGfC2Hiz8THDM7rzydtssvKNpsrPnbPVtxmMcz",
  "key10": "4m96hbAMG7gBS262H2facVebyriYzB4BHACrqpCZXMPLJf8zKSKMctpV2Z3ic4UZgrJYJV5CrhbkoSGQUoJKvrfV",
  "key11": "34kRkVgDap4WKmEM7TLNzhM3WoYKFbeW4vMkJJJuthALnjPE3xAG2D4ayLjvYHfdgVS1d6orZwSaX94WNaSp44A",
  "key12": "5wYdnKzrLq8zj3vdLgPg2tuRjY1GJ6228S7uRCba5AeP2RcRs3tkXSS2GzjrrCz83X4VHFUJdgE5Dd68GStsY1EB",
  "key13": "3quu5Rw2zG2pXZTV3y2W8r1RwXgEhLJbUUchZEMDC79k5fmbHgq81kmYTb296M7HbrVSYG9C4y1bpV5XzQVWvXkU",
  "key14": "8Vw8Ys56FgZJ264z5dL3pEF1ibdfStUJnqVSWBEtuUiYGykWRyNBXmQMNZp5RF4JEoxp6e3euug2SqsYxxXQZzy",
  "key15": "HB52LDSy32hK4MuJ9Qwa4qTuWewdNkb7nBYoGuq845t1ggwytibTwMyDzhy3Vg5FzRArJoZL3u9uiNxXkjcQV1j",
  "key16": "3pKte5AtUaHMy14DfrkNVsJvJxvt2Fh9HYGLVHxeZjWjmPRGQhCQB9QBe2QLpomsoZrMkR7K5YwdqKwc3c1tZoFV",
  "key17": "3ztjRehX2hVaZdNfgyR4VEBUuoEMyKnqAbfy1VcBN61RwSkKapsZ2ZSuNEhoUZFtP8qSq6bsqKSMfzJMK3wQf1w3",
  "key18": "2NgidQTmf9Xd84SHzSka4Dn7HbM7fE86CS8xJx4gU3H5K5Z9UHtqi7rRTUS5EBo8PyVMDBcT686JuhkGwyPq8kFR",
  "key19": "5dm2hc679GjY9x33fepaiTJbzWESZsiwxbcmuTRBXBZUtdrZs1tVQ2yYufmCUyMMRRqJRViFKAEmeDZcBUEYtYfK",
  "key20": "zJZSWR2DZGL4H3uendkDrCufTMf1PPifW7D9WJ6knhAHpE1EZJv5QNJvGyqEGMxvCBt64VZLUWf2iAxix9Yebuj",
  "key21": "65NG8ZELaVYNtTaYLmp6u3tz9rMYE5SLkpR3Ex7EiCt17ywmbr6T95ZRTKpZJaaiZwv3uBPj9jGZhJwiqgWBp4Lc",
  "key22": "4K9cBmvWY6Y7jRRXSykJDhD3Esk25XuiGkkusVbCydzNRn8Ko3dqBq6irf8KtdLpv2PKzC4Y8Qo3GeKYf6jP7DKd",
  "key23": "35XxeLPDyENPJSK7FD7ijcCYEiQCsZ4NozMxkjf4gy35tWcu8E2znBv3dyim9HRaH6EQJ9EGMwLjXEdMAeRfMgF4",
  "key24": "3XaKfLv6wJfwWzv4NmqqTiBcyYuXgzyGaWnU2CA9fGVy2H3qFmgeHHcKKVDcEizZJhfnb3m6FV1ZXA18uDS6LEtt",
  "key25": "DhbdxP8DMBbsWkK55JZBeH86nAirg5ocPfM56LmDybBPmgznyfeYVtjoDyFoNTXhRYrM16vvrKuJCFCBou3YE3H",
  "key26": "4SuYs1PsiVsYh87WL7WM8AQ5GPMZ7McBBgqkmbnm3YH3CTHTN4zX8q6SdwTRErPgdMrUm5cucnRzTwUsC8TEqfQ4",
  "key27": "2BGp69cPzuJniSuvRXxWUjVZMzBb4JbyQSF4afBzUtFVkHTbuYXeEvFgu9nocMLKCmwNhTFJqHEgVwXMguC29rz1",
  "key28": "4sHsizrJUL8jZ7vbGk1KvZUEqYKzerF1d1iNBTXSpyTdAsUv8U5m9bj3WTYzYPSTNvnuRbyJnGPTNrzSaAL5e6o2",
  "key29": "QtMSgvH1EcXp8e5nJ7cbXjTFoyP74fNYoMqvTnXAVEbJ3BSp9xtw4irZnLicQvuuxMWtvkQdA5vG7SF6qnTkWZ4"
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

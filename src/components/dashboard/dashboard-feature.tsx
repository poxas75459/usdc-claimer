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
    "2DK4aNggkFqp9hKpWfqXMfW7rnALBA9Hsd9qbSXJ2j5ReRPqgqmXfUbQxT3CkG77mEYi7ncUaxud7p33UZFsd128"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1pW5nBUrXVBKJ2xkfXQKi8Zwr4S23F7tPeqDKg7w5LGST1khSQVuyJ6tn9FQyFJ53kuwwyK8BmbYVJ2HBbXMmp6",
  "key1": "2MEoGUVis5E3qqPFLzKG8Jndh8rybb9guvCsuGt6x8YMub3jCzYUwDmrh1XUJ8fTdnwvTgG3vYAkvi35SbNZXsJc",
  "key2": "Uk9PTvyVUwFkd9ccN1vTpRov5Di9jjwo9A5nPW8Y1uJ7jtcpphPsoGbX1FpLumBjy1rXUeSPBPkTH7w2aqQMW8P",
  "key3": "4Q4nbk816s4r8aqjMHREznfSq5dqqV2ktVPqf22dHZUQA7MTewpXDXEBadz4KMaEDqacgDHCjMM871uJyoXZaHog",
  "key4": "5qLvWi3WTGjeEqey9JrsPBSszkKUidMk5ZNcj8Q8KjGvvKbmkXn6oaLmNymnnLP983k22pEGGzhM2ompDSWr7ZqA",
  "key5": "5s96GdTDrVnqjWjo7cvmWit4Q5RdTWav17AhqWZUc9zizZjsvKqSeNmhycCtf2kmuc8iPnBF1WKzUXzWYZaPcnZz",
  "key6": "5xXnM2miaZFGja1WtY8xrJzWicWZc21H4CVPD7h19KSzoVbXWg598UMvncF6XALspEYoNsY9HCy9WhTB72Giat6b",
  "key7": "4QUN6dsihxFHXcmrWMKqQoxGa7iY3RvFFc4ZAJ8NwN5SWk8gUP1zvs5CUz7yJDmd9CsxeE2KsSWpoivFTqZ1mdJU",
  "key8": "55qn5fsizsk5U5jGcpZ8AxkaFG7CDSZUmuN1kCzC84Eg3qXT34iTbce44opUrc7hQffFJwi9bLoG1G8F4nRryeet",
  "key9": "8vfbyyZkfKCF6uXwkP3GdoXZk8RdHBR54575a9yi2XZj27ttfswtWRALPySLCzxSYcDUkLQr3HJSTwEn65vGYiY",
  "key10": "4HWUNSgzobBP7zFbx2iesBQEUf14Mf9zJmcEp8fouBGyPjq9HYhD9SmjZtdYUVNcSpaDHX9KmM56u3GauPJRFS5R",
  "key11": "TuzNekvY7qwEMoH937TSYA47XmzxydqcCUf1RVFNyEsXkqLZeupboQdULw2sox6roELkCMYx8jYDYZP2co2s9dE",
  "key12": "3ST5qnG2jhNoipBbLsn437xE1NmQFUL8o2CuMGnFSnrNZkBfLr5fyecZ7eewhAuReyWRC861aVuPvoxWVe9VSjsA",
  "key13": "4QMzNjVM2jibzxt8a1dEEQVxKdSyuQGU9mTfNeTpuePg4PTCpswzzDdPoodSg5VFUeDGCMFqr8vCS8wCziyN92N1",
  "key14": "2qV4noBmDP4QTn6fSyaSSy286RLNaXx4hmQQYPLPfNDXqwv4Aa4HTSAJYjTJfNEeXhxaxCwz9JH8tJdLykLyYCMZ",
  "key15": "4HRZ3jts5ndGbBvwohcMg3Ya5HyY3akyZgH1HQyYBLkEBKrv9ACHHzVVSGc4UtVet2t1BBeVwiXhoHJedBA5yQg4",
  "key16": "3EvZTaK4imsV4kwD7mzMFemrRHkwmC4eMDTnyNhz5JPDhicyAJHYFLGtk6Gs6pXw3PsQ3JaKhYB328PRPXVPnC87",
  "key17": "5APaxYLVKMu8WWmv1AxJYxsvhvCVRKC875tuhEMarGrswEtPAnRiyNj7TszVekbG9w3GaSMYNEYBce2pfGDW76gW",
  "key18": "4UCras6gDvBVtwuQoV8yb6u6kNP2hpQikBaDo1Pb7khBBdsJATF2MCe1nTkA4SeGr2gJDKpG1y1uPDdBoSHAigb6",
  "key19": "5hUHrSX7XFoggB3xZSu5JHkACdA7Q6sfeNEna4jhYSJNNCZMKAVqB1hh9MYCcaMjUYriDdEigJg6YAX3DjCknCce",
  "key20": "2vj6rkVyMTkxhoKSaFQcZEB2unjJydjq9xUXjrAE54FmNuxLLJJRaiZSzjru6LLFTsU29xUW59GyaB5tYhsjx8Hm",
  "key21": "2geHh6omFLvF9znMSs6YYpBgjJjni21RXpwGruzKbSQ1s5YRFfDWdurRPtWpUSqy1biZVwDwEvEQaTfqMJWUWUBr",
  "key22": "2v3T3D8tR5otqFPpZ8tUzSL4wcF2c4niu8ZGwffBT88XpPZ9bmRWU6d13Vh7954XjVipGgP8U8MyNpbKVTvk1A9X",
  "key23": "iidqPVFueW9ZEkqMR39Vrhfv88B7egL4KTxJx58DqiaRVQ5kgMShVqpLYeZZgFYj25xxHkctqzJr9SjcEH2YvVb",
  "key24": "2UQVToZZZnp5pyZCp7qNfbm8zXoHNnUQVR8Jb94GrYf1ESNBdswe5ouxRGXMtbBe7Btsi6bpBTUmQeB6AwL2Rj1N",
  "key25": "3YDb25jTVz26vZyLT7giJMVM8Kd7cz6apuqH2HW2utrADQLSS3dcDaEH87rMBRQ55n9ETtVdWP1c51jrBtBvjAG3",
  "key26": "Ni72LmhbaZdv8paMJ2t2ugmtVm2xUdrTjU8YUwG22o7Cpq2JESQmgAcV5kC8GJUvFxcoQnWUjJbcwptjptN1Afo",
  "key27": "5xQpHfpR4jTDCEH43HsTgGsUBLRPSWuhRKndSRc8TYJjZdvEx5hKzrvbGaG88ngjJ2s8P53TFD2mJdRh81Mct1xK"
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

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
    "zDxpiKXQpPBn9wccMBpnSpxGtCg7ftTbgfvao1ZF9LWMhq1UbSBGb3cm5dccHjQgWM9H4Tn7nWha7pTJSkhNhUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mTCaPD6it6gzTxK7rrahHPdCxFW6CDGrP32nfHyQ9zJkJEq4KXBKuJnhqiP6c91mGN5x7KxyVRDaM8J1cKn6fe",
  "key1": "5kdJYNJw7gC1geoRfXxeZ6ufJJ8HmM1avvXBgCMi6EUstF9msmhxiib7cDUPZi8FKXW8iHRbc5TknoJ1kiFq8PJB",
  "key2": "3PGF1fnZGxSYDkyuuiZFs2gGJgKdq3NtnnTJcJ2yYhw9R2t15dUjvnmegsNE4HtL5tSamxWnCUhyzk4GFKCHu52y",
  "key3": "3i8TyJ7bUfmSW2htjUucXMfurkdLcMH4P7DSX7zZWBx2KD6ZBPGiZJNMSP94coHR1ZSiYLn2dhbhxtzmb24qHUk4",
  "key4": "3bFunKuRKYNPCA2233sc4h4SDWaR4mFaqKrBCUkJtWeJdgr7X4T2nVKM63jjqcGRquqgNEdkxrq1ZBt9hjk5vXVC",
  "key5": "5bBiVoeqr2aU9wPMieVh8eqyffk5vkY9ehL85XPEru3nKAtP7oW7KjRoTXmUYtFptRo1p8YgLfehPdr1MZLs7a11",
  "key6": "9gWrtywtLWE8HqDvXvGLdonA7HHN5kpEKi5xhcgcchH9vsyxJjHZvD3q3SeZxsquGN7EjDSAGoB2Z9JFBurnYfS",
  "key7": "4xukbeeTThhPntpRo8KMgoioD8TeBtKR3z6X2XC3vBzD1SJqBpMwSZk3E8FAXmeWxK8LxQKTXRV5fPuFZCuNtPKp",
  "key8": "py2duqDLwK41Zio3uBDXx6FZUjxyKjfxcCGP6yy32mUrbSb6X87q1jN47puScY8FUP69moKVMCKqZDzjwWjCvsP",
  "key9": "5KbB9KPJJgvrusw3K2A1fXVSvveT97NLuyh6U6nhhWafFxkR87ZRqEkn2tAHtTsPLnUNxMKCwoZDjvmgH5zAYw8t",
  "key10": "2nWx6w5mBm9PvkQvTSmfhNKxXoJUSuLgn7A386fNtzHBAUGbM27SXcwPnqyabkzbPGzEjvEpqMfqh3o7mR3TKFYk",
  "key11": "2ZwXZE1DNeGKiUw1utxwHZQ5NuZgPfmoN6SteNP8NdZodCB6WNRWT7qKBPdVxyVWZSt34dRmAafDVdPN3VGXmybj",
  "key12": "5JfL5f4goAPuaVhBQfe5SzeCcrguxBbMdQ9wh6kwADac7ZnKh9sZ86QnmRUVzLABP3JcF3kPHv2e39RUqSG6wi6P",
  "key13": "4yDwo3bmx4mqmzPZS7613mb9nYmsArGkWXFwrNPLWuHG7FLrViyCpgQn1CnCuSiYpEnyHWNxFEYuib2MHnLBFRNj",
  "key14": "sFiy2jyhnLAMaUfpQE9m4Lo9JfMFNwGuGDUteWF2QJ9dKFCevnR5M8jNE2kZgK51Cd66ybwhBDq7WfznBe9tmMz",
  "key15": "5a9iQCnR8PUoFs2qkxV5A2J3bQTcdPPqMBxpiqxdGudvRSEaKQEZVVW76ch5oKyyckp1HV6PD5YNjzELdxU3B6cu",
  "key16": "56xYgAApBEVpC6ff6XNgAdQ2UApmatHXufmwstThdZQb5GAVEtgzT8MbcKA8FeTZDMNRxw6pNenHccQqEAM1rCz2",
  "key17": "4ZGmVJruWE4To9YXgAsisY1bkh6zGnmGR2regWqL3E3kVsihogHPb7z6dt9TEn3bkM13W2pYWdogdv1ZwZTFQL1N",
  "key18": "5iEDHU1JEBk7CgD3uzfpyAzwAcSWr6d6zcxgcsouPx4Sr56eSzJHFvhKQrsbvuhGCJYZkrdCCf6pQUxQAYHDtUh3",
  "key19": "5vAwY8g62KsT2TGkA2yfBQnxT4vhhAzdRk8sfDVshKk6XWN6ZrohLAbSeMhboDsmeaFAdrYmUnbagug9q2ywjMr3",
  "key20": "529m9V4Wny4dRbXP1pJGjAJUe1QFar2kKDq2bmdtxXPLL8qHXyW4y7AiSwEso442NC16p8hbH4YkbEufKLEwgtnw",
  "key21": "2aK4zhQgD2kt7iVraSPpGJ6Hwr3hSv112TNyEMyhewr4DFrvBzG4T9ppPYBMprkNQZWLid4H8ETm4VKKwgb3djgj",
  "key22": "5J1yGycq4rjohGCMut2p3xDQGWPmMgJV1sMxYEFrywMYjTnFCF67nVWcppv76yYXEyAFEw2gv8Ub8CC2o2W5b1Cf",
  "key23": "3e9MmCmbF8k52Vm7WJqZqYwPa9euU91oUMVrLHfaAHGvBXmQ7XXKjHJYUwyoHPNKoYDMJw5v1Ha68SEEmh8kFeHJ",
  "key24": "5KpqDM8WQMDiUDsjHUvBPctRbarqg6dT7rBeHdJdfpHdGCLQ7YBeY2SP5mho9yRLFPRb3iZbWU22d6azKz7gN19L",
  "key25": "38hEVi889PArcTaPs7bLmWpXB1U5JPFr1uKaGLhrEDXjsC1pgg7jZsAqpuQRATQ8gb2gwDEZVqZSiq2qPgowEuGN",
  "key26": "2AmwXzz7HQbyVqXGS2MHszCqNrbDQ75zurVS2MCGweBXmTRx4hpMRvKkW7jnQFhvrKX5L3MeQBfeswYYX8VDEBeV",
  "key27": "2R7SFssmQ9kk53ftrGbTsRkw9AqjE12GKndjsZyCgDJT7Hud28mUrVS9BV3f2bmQKGQ7b9TiTZB4iZmSQ3BibhRT",
  "key28": "5yoaPwekMvAHzYRQUzXtYmdrT8MR9VUZHoaiPG3P3qq4GT4LmRnDnyt6BLHtKQJCzQSm58MsyQ9qY4z1e6M1smVK",
  "key29": "2BDZqWqLADq6xFSGsWdEtpN2mGawHp7VL2eMWcm6sGapQkGpSp9gDYd2W6eUP3FKNj423weZrsKA3rYYciGbX38S",
  "key30": "2uFcpPJMv55cWhSkLWHFHhSKKyF9goL5XjmtkfWpT6kvUZ8KcYPSod7wahNVU3WedTVD9uwo9zE3MS3gufbGv6CR",
  "key31": "3gzwQFGSgnNhmeHDDdYso2rPYy593kyzMwjwXKfFobtx4v8y7qg6u8mnMuWetE5o2HKEzkgyeeLCrBoadNPmMuL1",
  "key32": "5pTzRxdq5qhRYv4zC8oJQBnZPDTGUApnUL5fhvsc3PfMqk5tyYcMt8f8mAJ3VytxDfxpxPfTAKL3GZQrrVbbWiJr"
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

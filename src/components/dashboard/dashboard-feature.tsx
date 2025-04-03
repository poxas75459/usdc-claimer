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
    "4eAEt7bgyPkPcBDz2c5KqofddBkWAsUfBKtm7bMoN2wnWvFWYtjP5wr1LMssbxHoyTXGN6KwFDFFxdosrrHsiosu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64XtG41BjdCMSb76KyvSupouaPBVmx8CPD8qDfqR5iqsMQTLZppKyB4U5tyRQkQoEg2WjCuwFvWbZEg9bbdnWjar",
  "key1": "2wMEAvacmYXuWao5s3KnHjviacaZM4GHsC8vrpW2DUUBzw9XEHkUaHghW6iLuBcAgwtyiA4gXxgEnwc3JJUViMYy",
  "key2": "4PUqCjKDr2W9bCPRTiQMNcH1xbo72cuE9RPS98cz3bofzexeeMpukAqi4yhifQimEXHtirGyu2h6LVM9nQcy3FFH",
  "key3": "5bBb5JyrByL8QrTmLQpAFCm5h6peAXk6hTXbE8ba3KcMqfGNPJBLxEHNfPi1kYUnZUfw5i92nAzHPGHqJfLppkvc",
  "key4": "VLuL7LANwbJ4awwN4vMJCokRXfUrfJ4CYjXkpd716EB5YmoQbVqnofWHcgnVqJej3FaM2fPK8h5CYubNZVvt9Mm",
  "key5": "3pKAqARy3AhTmp79QVWDSfkHppHskQLpTzqDaKR4wnhVQN9nLMZphdPFt9EirJXHgChComhMDRvKzqEMjuJpED2u",
  "key6": "4EH18esn1pzN9yRErbBgYn9p592HwEonXJfrfwLTLvLjTEBtCevY6JPNZJY1BQpPr2SXezyiaQ7B97RhBjiA2LuP",
  "key7": "5kARtNtrExxCfdyT8E6oD6jEiCoqpv197CurXtcPcw8ja4XSvpGUyTDyUcZ92GzAukEftuAy6gfRpM4o28cVKHWV",
  "key8": "38JmdbRjvmjTJy6f45ceAACAB4JC9nSwkcoZwLdFXUPxg9c8GTMyjDF3MDRNwu2Qd1jxe9TeQoniEDbqhfP5WCbm",
  "key9": "4vSV4My9UHm3jnUep87pAhLZ9HrHg6kP45sbQPiyhDST4uLzPXR1qRCcwfDmoi6cWUa3Y6dfCxDmtraHwNWd67Az",
  "key10": "4QhfKW4Saao4SAqoiFsjN3Sf2jnrZQgiXgWqFom8WVRWgu9vAtrPt98eunSNbH24AfMC7Y12AoeadwRnwfm4ae6A",
  "key11": "2qttoRnf889hM9mYYkxZHge6tadeog18XPqYyCwqyEcRt6gpKY5ecVeKirSxg9DQHxwBv1oEbrqmpD2sJMy4BFWg",
  "key12": "5xi8X2tWJJCmgSBipBYuNaGzZU9jHY9zL3HYLcogyoKk5CA4YpJ6GXgKtpirwmGoS8QcnkjSrf5F8qgY7jKmpLtb",
  "key13": "fuFinUCuEShTJ3NAdGPpZYi4n745DSzEw1WQX2TR1rYJSgRVo2QQtLjgYDYRniXwPoaps21FTBRJsTWb9S6t9FN",
  "key14": "2a7c9cFxPYtfRJz7MYW4866LUytKWAHEjg8gDJ3XE9HFnuWqAPiesYsMBzoyz3wb8PnkzFZZ5a5Q4AUmruuqo4rw",
  "key15": "mEnoM1J9LCfxhLduxkaSCyYN2ujgYtBCTFh36zfL3tV3tqJ5aai8zHfpsP16bF6eNaVd8uVnfRkgfPGm7pKeWav",
  "key16": "7uGqmByK3BR1VF4Ghg2fpshiMEbHmZT1RUex28kkyYPcLheKvLWDvFFW55DUrLUfjsLk9HbrPew6o68aEz9vRH2",
  "key17": "2JKngax7CZqYHvPur8agb5yDEXPMRf5tuFChaqFeVeWf8hS1QkieTNnZJZUNrKrySd8bdKDxWeTV4voiY1Ji9D77",
  "key18": "5QBAWXAhHtVoQCP32nbjSf5ZSfQuGX5qM2kAGZ1WLyRLH5UpicdV7tMpUDeyy5xR6hBNQCRYCCe4gge9dUTwjWYB",
  "key19": "61juy2GWyz7hB96gPokXnyG1FDLadh7TZCaFSksb73vNeCUxTdXYqqATTkZQkSkEwAJ4KhUH4cW3jkU8vMmTS7g6",
  "key20": "5BMJ2gerNeHM7icrbZUgqbm1xLDfmTNmpGhYp2AL3kaA3xWA9ZiM9hGZ3khJbst2EqA9AFQXs7bmfeSDC4Rab6Ag",
  "key21": "3iQ5Y1ESfh1mMQz5cKjWf2vABPkc8R9azbradH4k9cSvKgtMUt9aNn6pF4waz8KNTDxvnY4DaxEUkqgavxWesNJD",
  "key22": "5GmrUzBs6P9AMMyTy8K8xA9XPF3egyUvHV7SzXHtBMAYX3K6o7pTj6oxkREGwN55UzSrTYLKiL8VmGg9Q5GukVDa",
  "key23": "5wAYAZ3W2fvvttEyFAZFU9thb4oUrvBVu7FefFZ6fD2A6JwcRDtufPtamKbu3NUTHwQRGP2kAsEUJFJQDsTJDrxn",
  "key24": "5ohVSQNnT7JhoEm4SV8GiSUth5Y34aj8zEE6S1NmSZjEJ4XyE3qybpMaCALR4P8wawi7aLetMjA8jafzC7ZxvdVd",
  "key25": "Eb8rb7VJMBNneX9VuPFWBF2DXHnQ6ByR2mNTjNWAbApf38hKmcVjXfuGeuCVQfj46ufK5UwbxpAek67T2vo6bjf",
  "key26": "5GrEvSHaMqbh9s5xnSYHMJZnh7FRVi6jJfANU5Cu8jEqKxooytPvyTzTzE4MzzCZdGaKqJ1BtpR7XQrFRZE2emm5",
  "key27": "5ub5yQ1DKxz3DvPV94Z4jNNvP4rCBqHrJsUew99dBe8rWYSe3VrWRVwGgwovwTRMpX2vv6uzk4MTBZUR8ox6S2Fy",
  "key28": "stiC91WG3jduAV5SgwB4Dvy8v5H1TZEKRexarJF6eriTnPZ2r8sHZB4FuXApGiTdTAL18ftzDGa4Ti885W8GSEL",
  "key29": "4oamg3baoEW89MrXwX9uueJNSUWbapPatcjcDhe5u1xSejHQCHf2hoKrMUxP4mB5HzLGakt7v1X2G2F3P1Mnq4Ta",
  "key30": "2vGXUcmo5BtdQezQtpqCKduR9KZ6GD4VS2XLZ8smARPuaCGbjzQWDp1BDtgBgAz4eTbehadLJAYKrx385ke1z1Bu",
  "key31": "499kRB94U8GHtFoX5xGZvm1nrAqDraTCZTn8eFDEqTZQLQnCHpviu9D1TBFqmfNhNrQnfQKSDyPKALFJUAzCMdvp",
  "key32": "27qESXmAuobcdw4qmYTTi7RWeKgksd1EzBR8AmPjsE4PudCywWWA9SG4oT7iJzS2kGxuULfe2DaJuYnCBprpZsR1",
  "key33": "2EbNu8aSRsZ6ezvn2gaM245Q6SpFtg9hRgUS87e4wJF8J67S8Tjxp5e1JfjCrmZu2RjQajFBZWbudDc3772vQrKF"
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

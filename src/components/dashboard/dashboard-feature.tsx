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
    "3xsFwMuo3BDDTUeoMdnaw1nDcBvaLdyX4k4UfTiwpUHS28k5nq3L2CAMrxFq1VmR5sh2gYAwe7wGASDkBHk3Sxak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V7L1P7BRZiAcewySHKh3R7KXN2HFLotX4Nn4uWFNwSpGMXP13Vk2Bx57Rno2W7BEviPYsQSMpRBPu55JLAvyQV1",
  "key1": "52UizUcxWTySicfc8pXPLGNjLXRWARE8NUb2sfwqXmYQWHC7Arr1KiLWQiqxWSqC4Zu8FnsDXxmFLYCFtu28jmnL",
  "key2": "2aNdwd6RAGXfW8Tic7Qag2Np8iQFjPtD5z4zCPEYHaDKUzfpYPsb2dp21LoYXUZba816FDKEzkJAQ3uikiQs11zj",
  "key3": "2FKurNF71VGaf1zMx9NCZcenSa1uQdMvLLDCc9Br6Fw69yEnU23SiNrReVbb22W8ijs5dMBoLqmJbmEJLXW978jU",
  "key4": "iiTgVSiCQUeHJKwDq5RWvwwckG1RVYnmCfj5ratdFqe7pvnoakWg3fjKHjQi9smY3RUvKDPfYAnqx5yVqT11p5x",
  "key5": "3qpeCnFP3gzZy9aT6CciWGZ3B9bTr3iDjxCEPZs7tugmg7V4mJFAm6n54pHjA9jnL7AjR8VAXHVjSuQYVV6whXiQ",
  "key6": "2GJK2VEwLgxHcfAHjGsFBC3ZEnqM5GxgWKCNwLzXzk6DYLCocBUFnDxy9XojdqGakVdJpS5af3xrEkSVcQEhr6RS",
  "key7": "2D1Wgnzq6crAKAewLrygH4uxuCutGbLX3KrBcHvE3GhxvXAa7zqrWSm3M8EbE16yMa2YtLHKPMRptDLykxJX63Xc",
  "key8": "25sZzcWSWrmojATJunAyJkXJLb8M9jJMaHdBj1UdZDvN1f5KW2ACJDvZMkJqvUC1EMCe1cTq4pfN1hF5xXYARLno",
  "key9": "2kUxTqPkn5t7K6EeXT3wfBGUhpPLsWbUoYHdvnP3iiXGRH7oLfk8j43cPerR3uGHRrqqTAsHKTUDJYbnUccmTMeE",
  "key10": "4eXYUhCQTTWPuyrEBiF8Y1zz7xCGnVbSz1ek92WhEXQt78qnHGyWQfbTCK1PZ9cMSQrcb6dEkXvZNAJSg2etAbd3",
  "key11": "4vHWryQEwrLGz8KHDbbyu5JAMsEADeH8fbkRFskdHLNyrWs5iTfgQmAinLJXq2oHfmtdjB2qV6Xuy9DZMMH5z2Rx",
  "key12": "3JYuBgomvB3yGp8N5Y6ExjeSgnT11KeUtgYxUx1WwpSYk4Xr88i7uSqhrCoEgW514Mfa5394PE9tZbcfwBuutTaP",
  "key13": "8CAF91DhHfhxK4TGJrCZbABKqbeq6CLAp2iEwR6Qzjb5C2rvgxzmT7vsyoxZQBfmB8dEAG6ztpH5LxmiW1p1EhK",
  "key14": "2R21xSbeJmVGVsNzWD5WHsW2sfzk8JpwxoL3ZQTBszKUKUxmYjBsgioCVVn9AS7gjRjQMzfMuHtggiSeTQ4LmKMb",
  "key15": "4iWDkrmzDb1ST7JTa6pVzJrA6BUErPZAf7YC88pt8EuNA777hdF9WiVEf92FZdQ48YHdJLWkaeGsKr1DK1RdjHWX",
  "key16": "3fdmGdDjseBbieKjxtCDpavrjMHmBsLdN81BMb9e2isV7oUNYD6Vd5DKaNz8jFMWJDC7JdVFgk27DMHnyncRdMDh",
  "key17": "556LUnmSX3yx7aCgvgDPt8Rr49jqsTcshaJC9mCMvpg83p72oDFKwgPMu1acNuvrrV91qmWpu8GASsuvUcWJEuKM",
  "key18": "QjZMab61G6ftAs1HPhgrjrLJXA6pidvw6XCeUD3XFZoTJSBgyTiRKE7sCVLfoKX9VkmMKc3GcYUVxcfqjzeVjyi",
  "key19": "4UkSBfvhQgbs4Q8k781rbc1qF57erMkvDb4W94hJom6qdXF5SXFDfYwpMbhqFbKtKA9couratH7Xktb2zxs6Xjna",
  "key20": "oXKzGa1EQ4JNcDTN4M5UwHi8Lgj8xBCTb9Xgp65rsNQZkon9xScLrVPuDhEaogyPjyvRyW254UtrcZfYmG29tVi",
  "key21": "3uxxkSYfh57LJA9KrwR43aUiFuCVSsGCmfjTxRzDHRwNE4k2mcDYZ6sbvwqPLknuuvm2gE4UWDAZ1fxuVCMEWA37",
  "key22": "4UoLVvDnqtwmDo9srp4VrriHXwRT113vnodTeAkoQwmVBrdL3oiSMRr7jpqf2a4etJGdBLfPau4Ug7xn1aHvi4yE",
  "key23": "B5Y3sxMRKXX71CHpCuBoZLH5rC1Pm8nAHzM2Rte7bbes7m3W6NKuLEk5ZqLRvHJRkvyAt4JwJLSU69iHVPyAbxW",
  "key24": "5GkkZb4VVqSw9AZmcSeNQ7cZN4JUuX2P4Mz9YUkKnq3pMdgXaMFLWU4ouxbBAaceYPibCiGr2C3NCqRAjXBkkNVu",
  "key25": "27qTybFHUcW4YieY394e1bGaRp8dGTbt2SM15xJXHSYfwYewcTGrat8ZymMrcNxyajaJEkZfRpF9YshWNuELy51i",
  "key26": "55FhLKJCMvBGqa7H7AqpM8cSNt9nGmpMk8XJbzGHgWSoNx8Y2pXL5nZn7Qd5KBH4HrZNyBCW4RHhnGzYdxyXCkDq",
  "key27": "vt88EQp7WQdoW9M8SQBTGB2fWVyViQcC9NDQ4UKwhKYAE3Qv8TCy8DiCV9jbZkQueexP9Td2ujNc6ME1anhEptm",
  "key28": "3goHKfkZSqp4nmrkGKMa7Vzwe4LVqkV2S619PqvFdv4NEXETyzyAJ7HERV2k2SwwWeMLB2VA8qm244MNCxrzsDCL",
  "key29": "4paaydfK1zRcdmqetKBmeLSKdHmgxpBNKCMb1X3xURj32ym4hcfWk7AFJpaVTgNgPGsjP5EY45wvHAp9YozqZLhi",
  "key30": "498AgLMmbfZ7t9XSTbTQousNqV1fWD1G8HqiznKHvY88zjZUhTmywmRJcoVn2rJqP68LDdAcj9rxn7ejT8P1jsX1",
  "key31": "nNXJcefyji5SDHofZLpacH6nuNUbqYpkTnGaUcBt53HNBUzWLc8rqsWHrWkNWVXiegCEA2H7GcRfWgGCvjn5nhi",
  "key32": "2DV1GFifeMB4tA7JUiCuMCTYQ37886PJqJxqxxZUpLHJrQ2F2AjV41LADrxEWuxv3zMT9wnawAUH5xgBNzxVzs3P",
  "key33": "PMPQbveBhAFbKuC6kAfbawwwcAHLPx34avQJ8R3sJEZqihfS3gYoVBXfWGJ82CbEhiBMWvbjMRDxAELFwmoDxhs"
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

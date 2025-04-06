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
    "3RwocwSPiKXrHUNW6k1i6XqWY8rnEqoHy3VX3jV1ui2ynkdwKhHPD21XWb8axvsASxCqR7tN49ScRGL9yKui3rTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oDcEQDAdDCdL6pXuxjy8zYckJz6qXWdTBSMqAfUxVX748fr2uTkMCrRVrQ7xAGQ6fU7M4PqYNC1FiZiEeqhAqkR",
  "key1": "4re8SnNcYC94iycmegcSrZ1zgwiqFFUaXgBb7YeyCHtAkBzRefNPKiWbNMrfiVKPkexyjJViTpo18jEsNPTNAY9j",
  "key2": "2VB4QUCek5voQJTPFoyir6j7tKbQ9XKAegriAmAVUSMf4rKb6VqCfPrci254wrdah5M3rf8aFHVuoDjM4Znq95jk",
  "key3": "4UcwpeNsSFiFLZ4gSFjG3wYy2RyqkXJonRgEZFG1SYtQakK2sXU7bcKfLcgR8LijzcNKgjkini2w88fkFqTKGZ6g",
  "key4": "3HYciDmQZ91mE4av7ceedufPRVqY2kKuekZDHBzrYN6WJ2rpf6dVC2Lqhoo7eSjjL7svBhiDcEk9xHT4uRxaX1wy",
  "key5": "4tMqG5oSGfy8p3ySN15FHdpa77A33piBshHofWxQAanbTm5oPbREaKPsxuEoGEoT9tBjdxegjVHzYa3hUc9HqLXs",
  "key6": "2HEy7sa8EGgyNuVAvpbwfLnniGUR8htZ8AcuJg1mZp762zLzGBwAzTeTCsTPr4VMDQ9GUEZRPH7wdREt7a4GttXP",
  "key7": "2P6XEtn5pe2oK4GmiQgW5FXubFhX8CCbSuGTRPjoywvHEeyCAsNGfdCeZKStT3GEukeYU9YZ1P92rAPLcAYoucvt",
  "key8": "2WqHFsqeBdXfXvtSMMYMjntoU3guCkMovk6fB4tAxFwYzZ5S1zKynwut6RicHjgMht4BoAGpeZsoiifqzqk899pj",
  "key9": "3K7JJqUqHh9fPasspD9fHJ7pEAxh1rJFfJn9YKaoYb3GYMDP2FCeo7H4XyEJrT59ow4K5gBrY2KksVuuwbSSPQZ",
  "key10": "5nmy3NUbFMqAZizET2jhoMuWRHdbtvERwDfcBnhE5dqN1DuGUypJmPMFkyawL7pZWjfV7GWtz3uWQZBi8XPkgy5p",
  "key11": "MCx6F6N7LpzT79uDPhDjDYfaKLHtKgZwAoFQPdpTUkV6PmisZEbR2femVoSV2eXQSJKmin5D9BCwiKQUWUTVdYJ",
  "key12": "2WiUkFpEKumLvtoRbfGR4kVvGwfQGG8HkbnALSMQh4zaG7Cxr5pCsmY8WynzHficn4GYjLzQ2mDGqMchyFxXCVE4",
  "key13": "5vtEr9rRwhfEnetRsYBJFD16Jq3btXWPhqd3KwMqR8PunEhj6xxQxKqDNFihdYpFvJYDgdNw3Wrk4vPHf7rwNPr9",
  "key14": "nTVAefddmNkVvo9T9MKsUMBAsqMKyEcfvJQvHrhshnpHPFi55TrXxJqNeuU8PiZXfNveuy2EYJjHJYspQdm3nwq",
  "key15": "52Wt8SgWpETR4GJ9w3jXvCVyRVHxHfMsFCaqAKtBrrBTRNJWrKuW4abB2CKTJWAMVegheQt5vKRF1Xzpmbdj1sbK",
  "key16": "4YT48hpdLZMAUpV4pC71FV6LRVXFgybVjE5kb5GPbYBJxecW7WdHQoFKbgn39k7B1SJtxiPz5XejMnguwnzzymoX",
  "key17": "7mSWrJMRtuUezTtmGbySjZVaLNgpwutijkoWLXete81VeMFioVcDPPyKWXLCica595PCrQMrwHzC4hWTaCbBcW6",
  "key18": "5i7e5xgHQ7TcXbrMwXRotDch71gmSh7JeDjRnPepYJGgSmTfi5u6QXPHmChF2t6riarzWsmCgBDneyCtLSUrGchd",
  "key19": "MtHLvPLeygMuYr5dwFKZdESWSRYRWabkeoB8XzLYXyiy2jwe8FkEySvKvJu2vJNj4wLjdgmRo8HrtYmwr77ot5H",
  "key20": "Jtxn9f7DubsU1P2Fi3VmgxUPAq3CRegLb5t1CsDGBUNM7ktCQapSUni7NWrzKywsFjaAbxpRp13JqdRiKgo8uD4",
  "key21": "4GRKEK7yZBNuNSLYV6Kuthb217nW7aibvt1gdfNddj4Hfcu5SeJikV8wptxyeGCycf4TJDga7Md8sitRF8wp9h2u",
  "key22": "2ae3Yq52Yn9boDjYzs7Ss2LpEEsVDxSaCn9qjMj1szSLLdGWtW18R4iLTRcNiW8pALUxTF2Hhrx6S2zJqsXK55WS",
  "key23": "2XBNwqLQKXQeP8GRKW5kiVvhgcniCGfuD18a4pXp6Lx7oDqVvmH4JR9CSs8kX5zYsxoWXiCz8YMTqU3Hbn2NBuBy",
  "key24": "3dDk7FNrvZdFqZfAG8RmVd6atCwDZ5cZeX7aP6LwqmumHPz617BERZnfzfpbeXV4gBqyJECjiDAwMfngNYK1t6Wh",
  "key25": "4nft2nev2nxRXqAa2yekR3Hbmq31ZPqQiRiaRNnMvoczBWqmqMEy1tRCWShQsGJDGfBLnQxW1QYgGFbUV2njq5i8",
  "key26": "4JDLQnYb63wohjKPAy3ZgXrEmYrY8U37EfA78ViwbJxXUNNs4PtpBbY6a6jMhHadGp7XwDKHbDx8CoPF8sz7TkTQ",
  "key27": "4C8dAW2SLQmkk3WUtpmt8AYdXMABx7y2ctvs87g89pi42UYGs7i58hVjHBh5NX5sBmPu8WLssNfRfdvGPi6YN9bg",
  "key28": "bGHpShkHEnQcE8XmTrCDZyf4Fv3GpvZq7cx5boZEtLgWKKwHAX9RWcUhrwEhCqNmeTCsGsuaVNc4NbHbTpHmZMo",
  "key29": "49CTM5XG7LoZFWNHW62MZGcZT4yFs1v5dVThMD2qrCtAZ2RiS214WZ8WL2EDwwshjYwVVTHA9DkbSDzWzQD5Fvvk",
  "key30": "6MgW6y7eTZCVrX2L2R2UXN5aJb9EBBhzKLJN59BxxTDhSZhvhBULMZUwDhWqmuyXUsyWD8RFP87xgQnDUBqppEG",
  "key31": "58Kt7zE2a2oTQpj7RWoUhkhLbN2hnm482b8DUi67PGPnKzvPm1zpTQT1DkyiGhMAfgozhXodJospLbbHX7ef7YsU",
  "key32": "344eVSF4t5wppcx6kbFfbAwiDsN6tE7v4spkT5MKzujtfVRPEtWvBJmbLUQviZGfSbx46nMYXF67sPG7gtp8GcDb",
  "key33": "3CMZPH2d2DUNMD3zzZwRECiLBecCPNKjYjQXFoSSWykcSxrNbAGPQQrBhz5MM8E7pNQMcZswtaguNgQNqDZsbn6S",
  "key34": "4GFhhEeji82oZcvC21L7oC6RPYaQCMVPzw8JzaSM17C6xWDfjM92stjXPT9ztJvie3fqujZnHTNJbSRLyRVCgY8z",
  "key35": "3YGzwwLunY83QzY6jqJ1Td4XH7DUv88CR2ZVi1pcHvHeLWZu9wKdHxRm9SxjSGsTpFikneNSCc87izaMWpDTokDk"
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

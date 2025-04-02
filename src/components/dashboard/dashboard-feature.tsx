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
    "4bgbwNfWk2woEqLwca6N7MnqXGUzSt3eeSc2WhBchXAtQJSTUVoFaetAiUP4FyQyd2Nh1qg6TPtGhnBYYEsqCCdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jd4ZKTfvFzN9BetoDQGp3CorGtyKiwUaSqocbNz3dAGhNAS8bi96LCedeM2ExdPhTNpsVXqW5R1eaXoTW5FVqm9",
  "key1": "3GAzeFxoUtTb4wnAYVgMuF7ZBBRb8WDzq45DqLXVg3JaarPHtb6TADQFxzfYkYQryoAu8LzXdxo6NMpYnyQmBa9b",
  "key2": "5JAKiKSTXE82Cx2aJvqnULjGoupegV4yTXnVGJf47r3h2CcwVmK4wfyLuwfpt8PdRCauzG1pfcGZxvtrT823YJqx",
  "key3": "2Ugit2SEAMxvu1bh2yBWnomGhmM7bXn8BYzkXfi5bTd8SntzkHZoLdzPpQxjJj1E6P9CjgYUh57M71jAZpN8fsE7",
  "key4": "4dSHXpKCLKnRPifQa6vfQiTaXAqDtzwgiE7ma6uHcu5dvCjPfdaELWV4ymof5AtCDDcwjZyTy6jpSp1gJZE1dCvm",
  "key5": "5Nk8tQVwiL5ZYcr1qQrHhyD6Jp7fynR6hjYStYBXMvnnVpJWLXAPJASZM6s65sHhLCK7WwLqP7nyBLAgX5gTEaXu",
  "key6": "51BAS1dRihaKsKURNUMkDV5ZDDw6bbTZQwC68vVC6QCwqFrzeJsxEu3XdgZ8XbRQ8PA2Bj8oqjttn8aA7qpvVxZW",
  "key7": "NeKdhXoykdE5W743MokMyUX1QXCJ28boxfuNwaD8P1S7tpBEMZ76D4zbKum38sp4DWx39fbMovPiYzbZ9DewSUF",
  "key8": "4YuoEQ4sMyMrXhMrxyH71tMNb9DieerbamGyYQHtYSG7DCCEriCv7a5a3gzRNTdDjK86MKRocTsHWECBuQxBj7wm",
  "key9": "3vJLbTppxWAuMdNmVRw1ix6M7YqsMSjDFqDBLdBvMzZ2b2idjiKwatkotaTvYFSahpH2Xt9ZdRbEUUA6PTfHRpPC",
  "key10": "2KKgeFT5uaT1LnL9WjJ5UAtQedhokqJmKBmMBT1uWLncsgEQY7x22ykF4CujyMWt7VRV5cbEPqmisfEK2tSkHrDp",
  "key11": "5wWtz8AdKWy3xhtJYC5et2eqmJhyQgq8hM5nAe133g8FJZcBKGCw2mR5VxvTXnMhCJRXUZ9yFQmKG5XnJG6C7rNu",
  "key12": "3CDTReAcuWgupenK4bnLDrVF6nZtVVJyiEFLsr5oX8FGKW72N5ocuyFcVxqr8iMrJRSint4wgmrkzyWrk5e5hmeb",
  "key13": "Shfuy6yMcZmyyxg5UepmcGFJhQUHUWmSyoqWXhyEy96proLa8fiGkAf2oV6tm2P2yDMxifgvQT6w1dSd7QF5VYj",
  "key14": "2NwbRB4BDpLHrRfjt6VvVtxEsRTHq9wxUNEbZfYcGPKcbRHWZRbULhn1DEpZWZTzxUnKBBFxQzd3mNYcehaYzYN7",
  "key15": "28SarwogaJQUUWndChu5nmZ8gGTEUyLw8pR9DHNUo4KXp2RYH5UzDvJ2rf1tY3CfjJuzuBK5ntQWJ6LbxZnjcKE5",
  "key16": "3bcmWYnrPortfxevBxseH3GNB5R6YWoCMsgURNs7QEwc2pKfHhG3KkohLr7dSbFJRhDkEYikELw3mbqsMH4JqLbV",
  "key17": "33VDCwDR5oUgeAX4PNPhbK6RbPso6EfzsktJ1HiNwtjWdqHgb4uh35FRkbowCRs3BRC6rQdSSrmHzcaEoyvGNE54",
  "key18": "3B1CEp1kDxr31je3NPVd8RhexnAaEqk2Ewf7yGXFnoyEyUEtf4nnwGMQHQCUnVQ3YreMMUt2oTVYM8HR6K8NFZTy",
  "key19": "2rJonRyLzGR6YJkQQNAYmNzNwzs2h2j2dch5ydN29snyprxJf6r9SLnib5VrE8FDWFtCNk6D1sbrkHiczA3nHQWd",
  "key20": "4Di1B1d7mY7FhHhcXDCpb1Agq39xbMmZcN4KJxq7B98ghup8qavL4XpBBvxh8CXv9AW6KC2MMKER73DBKSBKYg7k",
  "key21": "2r2nU92jd1SMjqpoDaBMwxSDCVDr7hSTzEt9BmofrcsU2RTqnGyi6wpTBTMrFNEZ6Yz6Z7gBphkDxmXQ8FegP8j5",
  "key22": "5pLMDPsrzmd1EDLbVtMyoUFvnGVPtWDd7xJ3SkvkCieBU2GoKnM18fjvyMWdqh4bkgSS5GQHNzCVhjdXJXtdeojc",
  "key23": "2b1pWojey65vKLzLmojBbimBi96f9DaVkxTv6Aj5yNtWxjqmVhibsXT68JQ94aH6fEsmAA7LPDBpyDNqtxeAmfBz",
  "key24": "5pnkyR19pYFgBt86tBHZod6PeA27Y7ta5usfd1W7LGv6pEpS5EzL94pZ3qGFBLvG63TYio1Qp6xTGfaJ5s7VKf3d",
  "key25": "SmsVwLB4oKGEjZeePXyXcVeVcimcKtgzLZGrjjMPU1bigg985tCZjGMXpngJziTVF9iGKWzSLvrsBacWpqfugqQ",
  "key26": "2s2E2i1taPnEBHpqwN7NMELUNRa9tKuZ9mTsjXduzBfzonEMofUGidYKq7nfbTVrzrxFoDty23VHACppZ3UbR2R",
  "key27": "5EPx76U2X1vJiSPoAJV6Zm4MQPfgoUv3MrDWrKPiNSwYYRP1SYyWpdovzJ9s57ib2VqRM6Y4jkwGaRoK8heq9tSa",
  "key28": "21o4K3brHEX8qUXsTkqfv5SVBSNYnsAyw3PtcDkXJfyjJN5TVSF5GGH96ThKtMBU8Gh5WfsaM9GCFzC4FFUMjRmC",
  "key29": "2jzAXeQYswzkmsmBTJ7UsaAJZ9AiGM347VU4hEiSFapanKzmkWGiz93AbAcR5j3KaCdqS6XTd3GZcQhqmuXrG9F2",
  "key30": "4J8KixtpbhEjEQzxZTy4fF8feiA1vPwzdScxB6gQWeSvrJdfLsKVAX8SYcuD3ZeHrAVBUhpktYDdumCSuoAL1H8R",
  "key31": "5EN4U1sYE5DraC9QpUoQ6cV7YWjUE6n6yVSXccgYCRFNUsPwS6KPCx1DRGvXuHqM9f8xjHG1NJ57k5KF1a7oyHAJ",
  "key32": "nrqhTBMRZAZYeTQyYZmDK8CXdcYP4cAwFAZvVrszXXJB1vqapTgcGtfwZSpEGwzgiUhknENS6HrdQVZoxPXbw89",
  "key33": "6G2MMbYotufxMBgz1LE8bDJ8HofgVNkm1ye2GpusSV97jy8QfavokPi6yZAqAQ5nKsVwWALFiKg7bQxvjHjE1TE",
  "key34": "2NcKFD7E86hwppn5jmabLFR3MpDo8xZXZWRYgH1TZagC4L5cHn7XXpbJYAzhToCkftkURrDLUa8G6keJKcmWjM18",
  "key35": "2bPYFiATXJK46bDXgYMdHE7VfzorSibKDANPnWAXaGtrkJXo8oMhJYUjT82SVTp4pUdVFmxc9JNLqNLfxTATmaA4",
  "key36": "34QhLhzSLBjSdjx4ZGM5oEmGzeSS996MZJabi4q5hJWe7K8rcbSPG4vEx2QyQrc93bEdBXkqE6jyWM8GMNFTNUMp",
  "key37": "2MKpUKVcdFFtefGdfTz4257LcPWX9XhteQfg1EpWm7wBPJ148tNcZjWpgEfUZA6L28teKWFSBmJRoVMWKgT93SZj",
  "key38": "38dfDTZFTfz9DEjCsfHnVL4Pwxv8SXxe413V5tyuEPZ7tp3vfQfjxTsZqyzgVRAgw2fu6bQPnKt2CXDyHyGqFwT3",
  "key39": "n49q3fARRseLL7EJuZ7KfV4imRCaM7ZgeiLhEZt2VpN9YWHzvbwQCEx42mNgVrGb9EpziKPm5yYK27bt213bjiC"
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

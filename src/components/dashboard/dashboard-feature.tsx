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
    "4hABFdvsLn2YuKrtMwhkj1WRaPwewrM4yJAyFuYGZdVk4M2fTQutuNTetpQVsYrpbWALfPEVzwFKinsQp9vdqQra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "376Eznb4ABGF6fmLx8Q1tMuEcqcaXM2HtYKRZRBsgi6fYgS4Ru75PtRKw3GytUQahDP8MSXcFiTGzJDPUGJur4yu",
  "key1": "fbh3XnvnXveCGrYhmKMQvFkZ3JiRm5ZiQbhYGFm5fYcTsUZPMrKRmfzfjysMqiX1NUyN5VR6UCkSiwnbdq7ZKoE",
  "key2": "47RrkbdTcuSmkeTGyxyJ16FMBFJoUnKyHqqHaoWtBNmKbS5tuDZ12RvJiRs2rC3kzDLazdbxAL8hXVvSx75fcbmz",
  "key3": "3JUzKMGcSWUdw1ztRpAFvTtfYwcsiLf2PGgBg6NTKHmfsXYw9n1Xjdpt3nX3VnbADRjh4xPzBgTyutW8CSx9Pw15",
  "key4": "4RCd9sgVe9gRmrY7WHWcZ1X4o9cykXmJXSZk8mNVAUWc5tKJFodGMj8jrt2jykEZ9JWBAQRA26L2yesQ6AhdgndW",
  "key5": "2C9hfiWP2cLt6ircpQ8T3sXQSQHcseh1MPzVKARBWLAp2WvmRtvjEW22vCQ65YkHjEBwDjo4a7aiiVXwBff5ANPb",
  "key6": "5UwuVgxPj2TUeubqsJ5pPtsGkM1CFpkJsTASY9BHR1akiwxfxhE5FXWMJMXE9iVecSeYsT5mKSjF9Niu8MuPBaNg",
  "key7": "dTXY4sc8bAbpcuEesZ7gS68aRAqv9dyco1eBiMPfZVBKXz4ALFwhhgiazwaocRJdgmVYrwtQU9jLxbX4uRGSfPD",
  "key8": "2yGdhLqEfAbDk3MiyDe5P4YJs8ybdA6MSkFuAnCYnyeJ3yoNG7vBQcMx6cNBKtbyEa5EUk9D76pkdP1tg6MqoJ4J",
  "key9": "4BDe4YTFktXjKPvXZ7cFYFWvG5mY4k7JJcuxZsLxoocfRKSmRA8MDSZPkKhroJCAaonqGdEPbjUDvrwTRKXVHRH9",
  "key10": "5RK2k7EKZo7X3UPYHsF1mBVBb5SuHvNr4T4dUTuZwUfQmEtpEuJNjPTxBNnSB9xZmyAGfT12iLZvNFNZwX7GT1jA",
  "key11": "3GMqJkLwdqiPctDR8AxFaaC6E4FiVyZf59f2m9KqrF51yD5htSX13kmJo4bMdk7mP2ezya7iQJJkF8ViCXJTMjGd",
  "key12": "5Q6hcZnX3TaAfBNnymCJn89UoLqZ498uajgqDmNyZ7nEWw9zpoA5bPf2kYwJnZ5hkyJw6niKhdh7Ss1qcHUtDn4t",
  "key13": "67oBVR8J5aRAGzJ7z9B2kcK8orrdq3r4nqm2EoZb8cubQMY31fZw29hNRBkGzCpzR5wrBNAhJc68VNJShyMgumsa",
  "key14": "5K1b7BSMqQxvPVQkh2bNrHDVGkHXUe4DLDUWqeTfiJY9rzVjPe4HwAcg1DuTuaETNeysdRGZX3phUyWR7wMbMFmu",
  "key15": "3KLTwfRbvNCHSxu74xfDSrKsDqT29qBUZgdscHLWL5b3587NDXmUqtBSsKZZZRxMrVfshwrEjMDghrmRrhQ8pV5x",
  "key16": "3uPWEoVy5af3wYMzM1km96yLR5Z58zigQVQZdZ9LoycFurmibLpxz1LMVnK5vBPxjQGroCPcB43Q2wm7Bj7EJQsg",
  "key17": "5fGA112q3s7anX3HGPB6JHwLuK2nk3Q3eU5v3z8aAHdy5kgGyZyDzze7Mpqh1q7fnmzTudzcJcc2bchauncWXykd",
  "key18": "3yNvNPGYpWjb6LqHq6LWYP3XbYb4Borg2C9a6NSH2xTbgtxgrcroUJ8hGD1mrorF4xsjs85AYkztqwiXgJUG9oCu",
  "key19": "h6em5YeQTRHkwuyHvH6W5eAFBqYuPT97m5u6ACb1aJwQQZ4YCx34gynYVAJTtoj9gUYwm9Tc46YkJHBjoZNwtHH",
  "key20": "5w7F4ohwZvKPvAqZAiMBSqcCRCLoxRWNFbjXoyv1feQvsKDxx2SPjAzUJwXTkDafNjZmkVvydxTixE39hcarnLfi",
  "key21": "3ygrXazbGoB9VMHPwy8dJ6PCJuB5NBxXwPK4UGkpUPamQGiz78UquKGdACSA8L3Dj2U3L4xr8CQeU7ZBLfvj7z88",
  "key22": "2E1j9arrprJaJRC7yYxHjNYW9sxgx9anv9S7a2rAtenNjH9CkD8BNrKtUj1XkD3hDV9Q2zQ7gbCBQyW5DUBWQenc",
  "key23": "54i9dFuBs8ThXohYX22KB6u9V9NbdnjxcrijKWrEAyYG7kfhzdCz9m8UATtNqHVqrrAtA2TpbHmqMEd9uZKxuUBL",
  "key24": "3Mivgc1x1ZvDYnkvKVhdiz4QVrKQ1nq1jv4MWB52kbR5qQScWr6km2nq1ANhuRGAp2qMVYmEcNMRqJ9y32emvcHx",
  "key25": "4ZBCGThynGpWjYY4qpFkKDLd4F3FnG7G5ekoKLrb76y8vwAMXRHn5CzwNUEABm686yRTN231ZnbjiNR336SRybQM",
  "key26": "5xsYaJwt377TZgV9jwv4vfQv5v6QsJRLygTKCBovKq7LPXngcjZ8cdnVNYGJud6prYeU5uA4sDxe4mdXy8H7vUVG",
  "key27": "4NiafP2Q4C69NCvbv4MuE7rATdo5umFLHynKXYW2E2R4Yu2Jr3sMi1z3VyRW7DwNnuy4i6DtFxL6pVmBDQyvgrd9",
  "key28": "46NB7Pcx1Fg6g37u13eCxBWM9aa6YPEyDvvtaGm4GpSWAPJWNjBokSDTMGkfehJTejdsrDYZzwWLwsLujUCpjNZz",
  "key29": "2E9FVS2KQYR2yvSNefy7PFBcmYkvLMDKrxnuFxooM2J1oUcFqt8ceiprKhGQYUwQCUp299QwyN7WThspTTXLKDTp",
  "key30": "3KkUfsGWggqDFpsjhrzFW21JcwayGt5emASVvcwfXtYBvxU2rLYZh8qAWNNue5wnTXLYs1W2d5EZi5VmVMvpk9AM",
  "key31": "3whLqP4EwJTTYwQFcrR1dfrJVHrGekaNhH4MaLoEeYjUK5KTcxqVDSWjP5Av9xWMRgvpvZBY8xw476cYdXLmitDj",
  "key32": "4C4KuYQNkm35xitx4JcHFqyfqKRSXMRZcrWiFQkfThkAxAjoQ5cajUGnDiEh6kqouWT3fvZLBGZdM8bdPr8UR8Q1",
  "key33": "KtK14BjoWXAPwi2E5SoyNjfyFEExAVPwMQaNKzHKErC93sDjLNmQ6miir2KodJu4jWvKyPmSAtyEZSRvFtD2wPQ",
  "key34": "2azLk2KTnbcRmfP79nEXKMDUYE12aWCDTsQxzCwSHKezdgkkRHVHwTLNP9ihERYQjm6E64VS5emtGc7xrCRRrVS3",
  "key35": "nTmy39FUgs7pWBzxLadFtjdHUKXDJ1LoDVGRB3BT2wSCJyxK5wrskxKd8HGb5yrhhQDfBMZhwba7wU7ngKNNa6C",
  "key36": "4CzVkhzUv4AGVbggJX84NXL8MrBd3J3BZW2FS3Nmqtn5KiHs9tDcyJF9WfD1ZukT6pKCFRSfrDDor9W1zt9Q3ifQ",
  "key37": "64WNk1AKpDXipm4YMTj8fGNhKkhA9TJh6cwtugikLKZrooKMvHmY9eSF1SuwjqEpVvvRej9qcoGTxkPidBEvSN58",
  "key38": "2xGBfnWkNe3i2vpKJT7JkR5jzTkNwArscVQhZPRtZT5rJ17B5kMPKakLcNe3NGj45VvcrZP3kb7qAvdXkq7ubfUb",
  "key39": "2hiYC4cEbAm3eRE2jQQxsBArwzBKmUfPeQuAJ15pPD1uRUAjjZzPsj3TEUox128zypoEh5XfuhJdqGJUuec1DCD4",
  "key40": "MUUkxg2Jzq4WDNFBHUS7SQbQSzDwaKkmWQDYUX5tLMk7wGCwmC57o1AzwhR62UopBKkWa5PyrrgtY9dsqSkrHsL",
  "key41": "5jezdatb23KVs6fbEdcV9HAznLTFPckFPG9u79zR1bZ6GRJm2tLuX5Essy2XjR2ZGkdsEPwoiDRpRMZTw6yi9qr7",
  "key42": "5JB9JtXwUQJArNzeVYuyTuZMY14ae6h2mPqJ54V5o83SwdQE16ckfjDLopKZ11FFkiA6j1A2FxBS2PKue9ED3N4v",
  "key43": "35ALdo35CbhVz81draZvHFZRnPJmcCnpXFEbfGBip9akMSJQSovADPZJ2BGeJyn48W2uheSduT18m4iUqPfjjvrJ",
  "key44": "7eQjchoXmnQdTo8UVAkmurP4JqLSQG2WtduVTM3AiqWfceuBWoVqMLBo4GyLUCKxKiiepMgrUKUzV6CToyJNeVE",
  "key45": "5MSHSEbdXtvtS4zdGUynmByn7NKsfrYJh7VeUCqSPzGfdTjKui47XTtdinuBSHA8sjdLHd4uYL3kFaBbcFV81WFi",
  "key46": "3dXPPojnfo8Uym96dw4UrbQQ9WFvVapQ1jzTvJLLgbbkUKWH88rNG5YRGARFKDwzDnXhVcFeyjGivCTiiRYnKHDm",
  "key47": "WhMSue6HqDcA6eYkFhAWkqansf49PreqofYCJPtAmSZMA51QLta1EwxjZ3bvfpTJ6HHnDg8YF14qy7LABCQBA6U"
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

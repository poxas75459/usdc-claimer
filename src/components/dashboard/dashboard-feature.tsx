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
    "5iRT7NQRt3zqsRn3THSMVd8vA1sRcQYWBz9d4hTBK6LP4o6TpddjtyKBP6Fz1CDWnjqhrNyM6supdF21Tig3bvf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B7xQzm5hEdAdbBPFtKUGuzNadXXjcZkY6J5YjwARdXNxvy8mH17rG3apoZ2UkxTN5XTAZgHAthJN1Gx9s9yd76o",
  "key1": "3e57Ckha14bgQG9csEH3rGft9D93HhX726b5YTVuY4N2DvB14TcznqmhoCNkAtLksKzn2gAzKTghoMzGk9DbJHGX",
  "key2": "2X6CwirA7jfDd2xE2kZASxc67yLTzYdCE8Gjm4E8JgHtSs9sBvyKZy9C5Ueeii1Ewfi3EZjXaYiUX8hHxtt11xWV",
  "key3": "49bZjZwrMhdQoQoGhQifb6Fo29m7A9SYcZmAopSQR4wh5vQuLyh3THBnDW2k29gvVfjtSZeGy5M16Qg4Kiu2q1W6",
  "key4": "4B3oXS2FQFUuKivZMY7ZoKk9DFD8FbYsZUBDsYCP4DcGJ15uyWar5h1Kj6fNwzNHbEcZNR6dnHEY8Aby6vrJSgBP",
  "key5": "4YNEGbPKQN6x6zwhjHiS4rMAqd4GMC9MgKTynMv31CChRExoitVyidgL8AjSUFS7bxaawRJksLYGske4UxWAg7kn",
  "key6": "3UBShwhQ68DuAqk4zAGAq34i9M9m2VeVKHv97byniUD5hS4KLBbesQUmGD6iRS6q4S2c9raVxBsvNm8wRyXmXeDb",
  "key7": "2N2tnatwGAXUMAyVdhLs5oajgjoUnRKgyAEM71Mob6BA4kqN2q7G13MYDYQo1zYpujj3446YQahNfCDRgm7XbQz5",
  "key8": "4ZU6F6sHb2VbHVW1rhVshs3KH93yj3zSrdLN3yJgyCwcwSXXetXvzgoXuwEnZK2oAJvB8xLoJ7X94N5MeGf6WeSp",
  "key9": "attsU1X8uv9HVZkx62WrjR4RVG9XPoV3ub2agoaiR8vzEVijp1BBYSsJecdPnF2rGwWhnDzmk8duS5zkfLmC45n",
  "key10": "3TEYLksrc1wjVe6GAtXSEZNB1h46jtijoSpe9XvGrp1oYG4aDScaUv8ngv1PsK7p28cdJbxr6UhhMWBsASGjwZty",
  "key11": "3GAAexzCAZGSu2hxmEwCoheBW7MPqfC3voZmDZF9PxcPB46oDEEN5N8bjGuVs1w5BBmLroh8dB6NtAvV4yDmXj3R",
  "key12": "4KJhQgrZqbh4vscPAdXYn881rNE2tG4wcHGosBXo5Wq3eDXbaVXjjwR2VuuS6BgCSQDoj9YTuwiLa3AgTcL49CZB",
  "key13": "2C68wpKvz82ytbAxrEvahCthmYj3aQtYxU8kUieS3SQQFqpbAKhjUijEETXCG15ZWvH7kcjvokEzZyXanoT5nt2a",
  "key14": "5yKBUUgKzp8P8QxzafCRguwmMzcru8LoC4t9fFMgz9kR9CGX5ZzxB8CwE2KnRQBNXgCtAwQfhMCDRBcZJvvwTRDc",
  "key15": "4M75HfhJCEk8su1sFnnuqAVj6be6hKnVK45muFazAThs48XBvz1VZNFpwbJx2iuHhYAmZ4XC9xswNgMaveX31kzp",
  "key16": "4fYmXFa2pW8ivkiMwmrqcmNzMzFMAxEiEQt7b76aghR7NBqRJ3y3tc3NycULoFTTWerddCTGMSFmP8zV8znhzPGc",
  "key17": "4k892NCvaBUfHkjKRbmGpJgDJ9tbauLywuLs3PjpfX4cyMwWEpS6kCuPnPCxGmRbfiGn4oyZxVr9M5YLnu5xsXCe",
  "key18": "4rF8DnugBffhGd58SRAgeeV9pytZqQ4Kxxkza7aKzuVWnFNyHwVu97VxGACKx7V3V4ua3z3PVcpPgVVsTHgtx54H",
  "key19": "2VPvAJhKa6uFoBPxeYMNwmVqsWWaJHmL7FePsDcRq2ic218WjBfHBi2oJMiUcoKvNvNWpUWgDm4gzBQEfk3WAu1",
  "key20": "4PsuVZsSjN8UPAdsVPHBJrmsZNTAxKMtgG9jQjq9x27xaHvVBFmKJ2466H4MAVA8UaW6Pjo7z4PsbXS1m2RPWteW",
  "key21": "3Bbun5JAfmbrtdHXHN1bwgmnonvf4mLw9S7WTduia1qaYfDhVQjCbDDeHsQ9iJ6dD3Pbvn9TwMQu4C4Bz1UttZgL",
  "key22": "MqMjP2MBmfBp9HUQh3qew8SBifSGBJerVnB1bYEw4TWg6miTfPq2YSJa6qRFBZh69oHa2c3ZdJ9apc2EMdYiwkP",
  "key23": "5e7hV2EGB3hfrgkZso185Kxb4CKnArweLgv87dbhjHWmvjuz2xU3ZUdKFwNRoNkuaXy3PzVJvHoD4A6L33x3NwwL",
  "key24": "5pg22tjg1BhyT3YL7hWW2p8mAio7NsBmPqn8vgRJnbgH91sbkgjNYSgSce1ZqZMEyRToPsFS9Ry7zi8F4wHHezj4",
  "key25": "3YWjHiTndE4FUHfcMsvPbsKcbXzZAuv9TcG6W5GSzWV1socUDRxgqm5FRTohc2gQRPw32MqydsJetqJiN8P5yAJN",
  "key26": "4e8pBXnCQrSevg1TrZSbiiDBjnLbLHQLbnpHR1mad5ATAe5H9gSV9zKdE6s3m4NKVdahvrnvsCn8DwBT9xyDgNPt",
  "key27": "2tBeSLbYV3aG5kqq96nP15sAo52SH5mvPcjxvT8YXTBgogxSQ9qdTyGJ4N3SGSNow4JK8ythpzTYW64Jni6aovke",
  "key28": "3LVuiX4NCWnichNGPe26pDK7s8PCw2qra1wapAs4YyiMMS5gTYMFBpESCJHxzWEpkSMNVy2ZbzmspVA5WmrNV7LN",
  "key29": "3cvkmQzWABu16hmAhVjrU1Q6oi1aJsxrf8YfDu1ojH3nNgNWH5WRp6XxAuns1gejqLcnsv9kgEAQWEvZzouqDbqy",
  "key30": "24CJvfqbVxtwUt3VmYRTcYphbx9e37BgKAmwXY6p94RsVyYz1hpMeeAcYXAtd2LpcSMth4FBJNWSGmkBQKzXfRVe",
  "key31": "3pF1UNNCJg3y9A9a17si74oFW11nM5QsihUFsRE73FCWsCVerKhWZaCdcs7vQXTqwRL93RNNWVwtDrXeg9rQe8gp",
  "key32": "4ZYwAXLt5LUhPWDJejosbv7Me9DFP1e2wB537FkGc8brj7brquNAYpe4c6PYF9TvYeA4kuAPS1Lbmi9WCH189kFi",
  "key33": "rtYduRKrmbSSXENuMETQCU2NJ7DZ97Kr53SPGczd532Jz9XBSFzw3iQGasLoXPyK7EG6kHUnCmDMyRi4pe9hWhf",
  "key34": "3tPPgMT2oXLoUPUyX89AjfDkx2sjKzBHaBQrDtYjEvQFHZJ8JggXU5hCekP1ZrpyVmgFayVUkgVRHSh3Z2C1tKRG"
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

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
    "5wJ3MTVJX1bmUHEARYYLw9g3ZTEuLdPVmnzLowsBDpmofb1XmF3EShvWgGp32S4fRaPEmroZbe3HoTHCKL1U5s5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RT9zNEjJctKNuvUjy2nsu6swCRsacnmgeLk2am1Gy38p9TcFT3KkfKJBo8U4yDBtjpCUTReQVF1gaiAi8TpiG4b",
  "key1": "4KbMRmDgC6cyqcD4q6ofV1STSF3dHeecgsaBxoqzp2a3Z4KjXb4t9NF3pXNwaMeMG4UpRnJ9kVtA94wf4RQci43D",
  "key2": "52RW3GqaGTDvvCNa3q732xKfCRQZtdKRAkDEuGwUvVnGiRCh2WNyPJzfLEadVaj78aCzRJ8mKWqKv1fCnoavoMTJ",
  "key3": "3CHCqu3XGJ95sipbd6PSsk6kzBh1s3dti1SSuAEYYMgcnhJCMBqWQ3kzMXoZyGeXfUmZFEKC9jGVyFEM9yYnPnMJ",
  "key4": "czNm2ySSTGccsNmMXLVw1JFHAhcv2kCZ3kKcXiih91QdsWit7J4JZ7K5bcUrJMiCDVkTjLEiwhBCxbZoX7N94HK",
  "key5": "5nheNnyGVFQQzV9YvjVnDk8sNu4wAhqdG7Mc9KoTgquPZbe9BLcSU9cVJ68FBiMPSqUHcSTEkYWmjyuWNdmHr7PW",
  "key6": "2zQiLNWU7JKdHaGMKeud6Buk56aFUzyVqUvvyync6zyWaPGTebTKMvcoaTZaL9SzzYmj7D5P8XDQVQZDM8TE8P9N",
  "key7": "2qsdZS4qBkoaKPjJa7tdSWkpaddCmAFuBrLfRVBqCnNGrEQLFf6MkswYfL9wYuscaHddw9tA9i1PGJ9o7mMGwfkQ",
  "key8": "2HwdpjU39U5vhXcJmHVi3Lj2cESAQy6roJHcfyTkKVvizuPsCnoUbiZQokxwM5D2ah6faUExpEEvoSB7JsKXePRA",
  "key9": "3QjnZrvJ9bUxREd8xabbkHdyEyvRkVXLvbpaZqkRM8xSeLa7snE4jy1AZ8WmU95BBRjbP8Q69rqK2wi2EVFep3p4",
  "key10": "JFL7nzkZmFsNAv1qD2FiDcRBNq1gEuqqnC9efs6yfjWzPwpgPQmDfFCTAKgd4sAGbU2T5oGMDp6QHxPB1MhHkQC",
  "key11": "3VN6udjoG7jDxEAtwUVfKLkEeJS9gaN93G9ngBkcXcoR49WbyuysZ6TQkEfaxMNL1ZrxN2zLku1n6AZYwwnGCmUh",
  "key12": "63p5TFAkcxhCRXubnRfrNQXMmdMhNEUBkPrWEP3c1kPzGh3jLrevC3Q8tWBFA8hJkb6e3o4EZJZ3nyyWe6dbXfSc",
  "key13": "2jbhq5YCB5Gy4K8nUG85D5xQNzNBt9nwD8tZ56kQNoBzdnS9EkStMA1dPz3efDdy5YUFPy7N6Y2nECTcsVNKcQht",
  "key14": "414bSAgbSrepC6K5DWczrcT6WejBiQkYmHmEfqtF5fUrXeCa5dfQB4rdvu4Pgh1o7g6EjzDAWqVpudLTukTfctyU",
  "key15": "4shUoBuEZP8rXLzvEdsw4i1nAsUL5FFsqTmBb1TnjShnuEzNtqVVrbtVoFtBLgeSxrjSuv7Tx8AyVRSUqmDRBm35",
  "key16": "4yBc3qmU12gSwdtmmU7mqGVTGtzGtrWqgBhVirW5Fm6JWNRK5dV7qYgend1MNjUYCm8o3hmXftBpH3TwPmsiGPXi",
  "key17": "2SGiW94f8qDtA5BWvvDfZu6nRRTAsa3fLAGZAUqq3K2a5Jc64eAkGwhhichhB991QBaiEwhdq6UcC7tdLbM1XKsr",
  "key18": "3ioFEdg8oqJNP32nSupqghkJcUtPtE5D5hthxFy8cocafkWkzJXxXhCKJHFfc8ezxoTDzmvuQJTKu1hgLu7PdyE7",
  "key19": "2tKtGFbXSxxyFqE9DebHRGLyLp2wwPoZgMCBBYTWSLuDtUz11V5XWrUetSZGdkUSfHYtWy3Rs8y1weB8PsRjQXPT",
  "key20": "4KgZT298a5ixYRjyEBNh8gmNkBVggBBzjNxEKW4CjLvjHnVWAya1r7K3XtjPFntUnPbgGHZmsi28aPnstZCcoxiM",
  "key21": "428z5mN2HCg7T9XLX184LMz8bjYtBmXP2rMPM99ivqgMH2y9cLQEcAkNKBiFTSvEsKLmaejAczT5Jw4aGypVdLw9",
  "key22": "2BhZ5eHnSh3e9RhHV6ggHvZcKcCNYiJb7hgo3HFLyMwAPX7JscgKTaYCGtAu2hJBQrR65BMA2RKBwypG6zvumgqw",
  "key23": "47a7KyS6Qb3AgYRe7jqjS8hM4EuzxBYN4VH8etnrLpcamNzNDLCszWdKPsjKrZATbAbyDTH8nC5smQ7s3jq4rg3u",
  "key24": "kMXEGeDuxhB14xXW27Gi6qYnqgUc4Qo2EV3q3d1HwFZ9NgSYNeE6s3hg3Ymh1ZSm2wP4cs7Qz5R6A5GwMjjp7tn",
  "key25": "2fUKgK8uZKeNi4dAJHwvkS2eGbLyeiuH5mFP5V84butcd48x9ew73XqXd52GntQhyhpKxyz1zeecBAXwtMnmGNUY",
  "key26": "23Wm9rp8tKxnXRbbRfuPH5sCagHJDMDBAoXELkXNWZzHhyThA1fBBKAjABtuNT9WfWw5qszfy8ozcbPX7EX68Um3",
  "key27": "NUHanz1GQgnzR8YMLXaEetgZJF6N416A4C8iVs5h75zjBxF6X6wFXU2dxr4Pji28536agSCkV2X93NDiWfry8GW"
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

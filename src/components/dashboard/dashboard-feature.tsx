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
    "2fojeP8VothJzpLsdsi539dAGx1s3CXHVoBrmn6yztStw3x26Jh96QhMXoSJEGqiDBbS6UL7BTNywXvqiqAt5KUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21eJ3cCs8ysnsWMRCdbT7Q5xhJUmoyQEQZvZbJvt9mV88yijyxgREYiVMPjsGpEVk5rFb9mE3qQdEm8XiMKMKHEh",
  "key1": "ujzZSUyY87yES2g2NrJKnJksDy4Tc9nFaYujUuAoygLWa8TgZxUtqz7b5nMMFkbbixCew2m4PwrKcQsrcisCkhB",
  "key2": "3k42UoiEUER6Ad7XnZJN6Pi7KMeYk4pPKVd8Z1KNw5BfLJZRxBT3Lg4rAyS87P1CvfxZidJgwDVQGjSoPtCGR2wF",
  "key3": "5WFkuXoxrAGiCaRgEBdt3pWDkUhDPiN8TyALugCMrfL85rBBMR53P3HSCLWwh8cAonzS5aVF3TrTr2VWCJGcLMtV",
  "key4": "4Ebm8k17La5ex2BGHfmsrcV5a5YAW1ZY9t93Rv6VBKUHZcvhPXuhvVX5MJougHqf6Am69nVYEv6xAmWf6ukKCEDL",
  "key5": "byTdbfQi7wDJX2dbYbeNafai7etMhTEJhwRkAKu4eQbcogftfjP5fN59VLHRFDa9KCuwPic3RZB8WAXuwNuzm49",
  "key6": "3Sj7gRB93CEaLDXJaHxUumKacR63W8CWvmTJ2M2k9JYmCvHZTfgzXpg2Tu21yWzAKJwdnPJvZyXDjqQqWfy8aj5c",
  "key7": "3p2BYVnjNNDXz9tM43ihrZwJZDjaTXcxPrsYqDj8HUgFkho2TgATezZPtEfMkVqo29Po5HztmUw1TKPUNZPS6Btq",
  "key8": "3AxtWWqRTuJ75Jb4wpQ4kRCmCmobAomnH8n24YQMqr8TjysmQrkQPmjpuNXv3egS71oYoYnY6NWJjo4BQ3GusYn4",
  "key9": "562w1U4UEcEvhA3gCRifzwt2LYUADeuo7ZdR53CM6ZQPibHeEBNq5bSQbfUVAmgj8UBLAiZzev8JJrM3CTr1u6Aj",
  "key10": "4bjzEoMXdfShprKgneuR4qM7vZfDXZefjbqMG2q3K84xn86gmT3LHjzy91oGWKj1m2oW1UxZrf83TuN7myuFrqUN",
  "key11": "3FjHirwyL6haGeFnWDj6XBLNCLv1UJb58Ughmh6qXhUd2AHKqDhLv3qSpvYRUroubsduFjWCrrQ5b9jzxkVRbKLx",
  "key12": "2PHsiJ1jKBTg4zpsgGdWKdTvtosVDi67KHJyFxqMjHMMYeqXzgVtEUKKP95AbpyuEJrGCAPW4vbrY8XsNUcN9Hqz",
  "key13": "4EYNpEB7DjqfkKwjdPujJvtV6wUJEQSBQwnYXadv8AWtkuwSa1RV3jvNsE8TYRk2xStKZP5eXw41k2YQHrJpwVdi",
  "key14": "4cToxU7ZSNddbQsxcPW6bsUgSsfpvHCgqJEXafZKCZm9jTMYPjcuQdK3aY1vMJyEcBy2KxqogtPaqtXajs1mn5uv",
  "key15": "tGFrTn9tftERQCSnRwNKALgMDhbHhjzZ9mrtM1yFUmx7fTu5tGyLJskPChpwitdSF5KxHfZPZAozsokkg7vfsvv",
  "key16": "4uega8ci8MMxiwXtnkfW2sBXCpbCqHjCeP47z3jkQdzovWC8podf5tD2yYdZnwFxKFUWXqYL4G4o6n5eVrE7LxWC",
  "key17": "AtmTvgNXj3L57Z68WuZn7qn7ez2NVYogfoEJ5vAwzwzSeehv4uuFmuTWqNN86AESaAMXV4uNYCY1jLGf7haV4pa",
  "key18": "3bmLDvouWk6KoM2324KHghxhpdCogyBeejdttruYYidsNHzSEPhSVDZtT99ARCEg5GeP2fkiYFfUkmUPXFXESuf1",
  "key19": "57Jt4XgEWJimkQxpCkLVg7MpLyr8uFm8aXiScb2wauYmvh9FvyahaozwTzCQMqXizx2uhiueDpEATjAuT2BL7noT",
  "key20": "3V98UDcHHVMwebaggrM11asT33dHaXQtD2BpzbEwm8TfgqwnGRdq6x6cVzi4Bm5XaXg9iQGNWRYYYVKhRiLBoSQ6",
  "key21": "4oerNNYD4No289kemjoPwzZvQGeaVsNXYJzCPewBwXUfo2yCtdbNRLyJZsADCfkuEhHeYCeV3WzP3f9QfxhtggL5",
  "key22": "4rbNCBtQXqXthHnDC8Eju1kgBoQ523EwQuzyju18RUHbmGAvL3mcvvuL98LubsKFsFybDhQ5EUMaxurDk66Nhmu5",
  "key23": "3LfH6zF1EkD5cGnP9m3BdKAEBdHyxsBrcjQiS6x6yf7sFyyfHjtbhiAZnq8G7bYVa7wVYXbQsvYeFcHBS6zAhJyV",
  "key24": "R9xhqWDS5CvTNUwpeG83dTgVNRh6zNbhWvkWYukyUT2SZuwF2PKHTCtYWJy4NURQHewCCBydtVPVcvewCKQJSUx",
  "key25": "5hvqonehA8uPCdPD2Bk6jGY4WSqtNtJCxB8ZTdpBsUQPohLMWN84VTek42SrBX9po7jbmmSqZZSwPd1RNKcjZzHr",
  "key26": "3GEPKSrK71gkxEZiWTRZmM4m5CHE6BWn4pT3Q52caUUwGgxuEgCzJbgEEEXskRTutXCsA2ovyP5JQ3sW5WrcYPLR",
  "key27": "2CBnyXqx67LTwTy9LnWovSciBsC11eYyEoyrtB2SfYaijhwkw5mAdNQDzxDrH4bFsFXT6nMtyXUw2N4u5r32x3XH",
  "key28": "huuiDhzAUrDEN3jJRgfLSv8rQ117KgxBDCmhEt8k9yyZsnNBkezemfbLkHBqdhWyP74XjnWPdBcRgSG8vHvaGVi",
  "key29": "237x6Yc3A8W12oAX36wBMDHpqhS5qDcB8fSBDkPhkWeZyRfn4yMb2hm3n9gFmdYf14huNRjVaR4JTdqdUajWfGfU",
  "key30": "3C3qmiCF9hFdSejRDpcXdDSBqoBsQtpas6K1EQ1cYnVdqzsejc7EotbWcPDkBZQXwvg5UJ5xQETaLEt1EaXfKjur",
  "key31": "5VuCzmEddFH26ZHYHFtXiGLJMCu1Tb9zTsX9WJAxcBVZsXYdAGx7CKw8Y3DEg7hYqe428QhKDA4xdsn9wtbWeacL",
  "key32": "LpYNfXTpF1fAMHL1TqB9KqCMdr54L2TTWdXhAbwRxAHhnJuvxnvieRDa2qAo1N4oEhBDZdv8SR7Na46cHXe8A9f"
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

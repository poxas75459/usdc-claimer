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
    "56TNsLuvEHqfTxSN7NCsBxVDzMtcnnsevZ9cS6TdMectmHV1ciSEKU14uDbqRqJCg8tb1aMdwWeReoFzJ7ZQCgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dx7MFqwK8fA5dbWcpyHnBsLsszxB7FvF45fJhH1hBsgd8yT7syguTsLhbbcsXh7MYWGEaQdDWQjiRNRhFc3YNt4",
  "key1": "FVmme3TU7NFfBadhpoLww9hBZqazCcE3y5PdM5Ms8yLWhFUXFbajV7xtWUWq1vUq6kfntW4KnhuHTJ4U6FyqHXm",
  "key2": "5n2MUwGjjTUZGEoPAPBWiRM85jgkr6hF9CwBU2NVYaSq64huwYvYRWXwDeK3RqCfJ8o9cJ2fnmsVF825GAZ7inqP",
  "key3": "vDY4mtdLBU2ZuajkTQpdDaC9oaTT45CQzoaP5T8uu6kENJsoUbN533zQ5hj5aNHgf56aCwYMfoyURocXDPJo1WB",
  "key4": "4R4jn6oECNvgYWgC4XQRqm6tZmXCT59cWQknZnkbQFSduEeL27kK4WuSU3ncpi89Ycz8ydYGztLqqP38pnUMJSSj",
  "key5": "wrUrRhbhfsyYRkbuiB1YKt5QCFJGPTinQ8bYcCR5fW6xWSrFHbwgxPwkBmDJikUXaskC9Bp139jb3vzGJ1gwLdz",
  "key6": "2L3v4chCFacdFCNwTeCnYevYn4db9TQV61gi3tN7HVasfkskeXFXhPRzMzjGm8ibofgw7MN2kmnTKgUz79bq4kcN",
  "key7": "2KVsXJjRidYD6ii5yFuxqeNGT6g6gGB3LJJX63GHMPouhjkgpyg8jKkAZAmD4cHpaiKw4HbGCuDHoJggfQtkvRjE",
  "key8": "4kq1duJVubtqdKRMbvUhbcxwuXDa8GC4P3rjjA3CnwofPtqtJhbVeGxGUNWBPUZyXyivCYCj1yS2cRVdRWEXBvfY",
  "key9": "2zRMuaXuZvjNwf5Zb1jDnvsgyMEtswDc5HkZS2fgoguVW8gEehhmBXNu9LxmzcrcrUQhFGng714UkA2Gv3xA924Y",
  "key10": "2c2EBsisT9Kx4NB28kCt1rKZ9N4uTk8fAQG1ja7reAUPBSwgUv7NeFVDFn3zQwYL3udiECPTcrzUHGytLumVHDBN",
  "key11": "2RU3hYs4SRw7EDLwGiPMRbJasxLf7cKHTCbFPoTGgeqSGgKgzeRPRpkNj3kerM6gmXjME6NbG8vcCcvhjzHdenZ1",
  "key12": "3Xmm8rksNrQf4xBrDdFzdny62WMZntM1Qritf7QEkxUX2zXzJz2QhX5qxahobFz1yYgazdP2jBrGBs3THm1oRVtx",
  "key13": "YixHj9fhwUqfsSEhEAunNvEfft6LXc9KFqApREoXMnet3fh4xoWP2dLdLav4MA4Dpu43bHJd9rZjgfQT4uU1cen",
  "key14": "5f1m64uTuSVwK83b27AS7jm96NLy3YmojnsSsX2jjG1VavsaHkyzZbdr7f4BerZ26mXd9BunsKR43KbGmX5hKKzc",
  "key15": "3tsQ8u8weWJ68suXVmQbewJvAJxfzsC1cXHJwUjpLrrEFTnxdRAwYsvXwSeEtyHe44C3318MEHutGmVh9NK4vveB",
  "key16": "7e1qfnRx5wvV4de3ynYrMCtseTDS6Q8YQEZWLfWUwNNJBDuaB1yf9x7nXKH5JNQPHvCC4inGmPPvHXEhp3eagnV",
  "key17": "5oaMfnXbAGkdnLxamTNQnhZ9D35NDmPuWcgZhJ4hBNncgpkCi7Kwv3SbgKb97shUQy8dgLdSnTzW1ZHqNjaogQiF",
  "key18": "5qkLGeGaB7EzLbGCVBACaNhuKE5zAmaNEAj3MymEGBYrxfccGiXs8d5seWXeDpSvNNBWAzqGh3sExcmnsrG2MvXx",
  "key19": "3FERbodAPtxviVFbSvDVBudwyEycZZTu11kPyQWXXHCEt31hnrXFBYAtx46Ep82ydKWsWz6dWjLB2fLQboDKYQn",
  "key20": "3xU1QtNzTJNb8Kcfqtuh8UcrCUQfAa5xcgt9hFaCuyPtUWfRZnyqEAgHk68VAfT1hjPczjC5dRoKZgZQYkUPeEmF",
  "key21": "4P42s1i9yGMC9pKgwoze3XBgrTTyUjGx7r1u99XBvRRknQfy6C7NV5AHtDVknw5Gpj4GkiDsF3puxSudMfwudBAr",
  "key22": "5Xfcwjq82hbyjF6pQdQWm36QsyKNbJxMNyUihcfkyFV3SxKwo3HR5FMU4VSjRvceubCFCx94xZit8SiRcb6ifXUX",
  "key23": "5Axr2jrWVDhH1ZDANPBbnzZM6CXawbPd7NF4MGYmY3jf9L91jeNdi1BS2ZZv7ygwbLma3mianesBumknTR5b58xh",
  "key24": "5FXMFDdSdtdqX7EPyzhnx3cpAKVmTXZZQ8J1fX2S4oHqi9wcUsPTumqH2KhsBzYe6peNjXbcMRuHZmKooWw42r7n"
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

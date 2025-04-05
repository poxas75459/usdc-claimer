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
    "5pVdHwZsXzfKAfJPFQhB3HYQRXn2urGpmcq3TrckE8qCsgoC4GULmWCQM34NdbKmP4gzWoVmirCbFDyxSbH613Sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uNXFiTf7UxtdXfzE8TxZ4CmEK9rGLej1Gb7TtLW2zY96co9XAA1aA9MuYRMDPys2VsEsRQMtFMLNzdcoraPr6e",
  "key1": "53ME9d5KuJXkcwRf6N66W3dYsRxWpNHyeLpKEaPR2hXd36rWxeGHgtRnqzThxxVNVksjYpLk7nhDFZxJ3vP9pVk3",
  "key2": "2JTqeZWt4cxvUyZn2eHfvCTRTXKoBeUiben6xyBjdQE1GVyKTSQSGZpJTG1zzM5PQTtrepDb3pvhYAAYUSZUzK7P",
  "key3": "WkBMWTWL7bH9DHjwFxNAf87ECVjenFTSLfmVLuyan4QX4v8cpUYwJ3JGqDYwmJoN6tX6pjkFP6MXZbhXZNMpshy",
  "key4": "4tRrAiLGjW7VdkoCAs3bafZ4xVJRU3NrB6vLQvUjuPjLLuH62Wjqr2HDHXmDQdFMAukbeNNfntKCdk6TYoeXwSzM",
  "key5": "5duwh572rPErg9pG9o77UeUqay9qFFnVEF3nFhtWDpu38eBopCSJ4scRP9VAozCbYRaSvw8N4KJzYekD8Y1pzmAY",
  "key6": "3Bcsemf8J4fWT8yFYEodkDTkEWEKdB612oTAzjorAjV5VMRkhQjEHTw3aTRWgKRo1iv7WPV8r7fhZTpFnuUkBFCs",
  "key7": "5LyYR23NugQ9opkJJqYKmDsG3dwZbVyU8cBHASkxVaFGKrkDepZieZYiWX1HaKkNyhKH34MYWcYePZaTAVF3gd1u",
  "key8": "51qUDoVDNn4h6xhc43ycKmkBaCSpX7a5AvMx84Awu2xyztocPdL7kFRuNqrE9X5W2SBHVKhe62uFk56GCAjyZH4o",
  "key9": "4VAhBVchQcQHDqVZPg4Q5EBhgvz3sbjJBziZXVtQu22adSTKMVPbcvxqfggPy1VdxpmEnfkvcX2ixbMC3pfZdjh9",
  "key10": "5GdBeorBAPVGyfKSnQjeELbcwANbWfj1mTHNPfksDiNEHE5rVp1NBFE5du4ri1RJdXrL3jknM35LkjscBzkuwRUf",
  "key11": "5kFrJwznbeX1bY4KjqogZbRe5zpw1TsVeh6kieopnreod17t6izrv2iPcXqtwwbaxRHTdZNP55wJ1Am64MSF9EYM",
  "key12": "5FPJnH6rsGPYB6ypJDaCoieVYJHe2wMWvLYR96X6UrYapu8xViQYLWExoyMCpLf79iuyichakZda7oVpu3pRp4xE",
  "key13": "3ZQMccCH9jxRCQ3d4WJL33Nar9vxMw3YDgYUdL9HavDjGnP5yNemsKFbsX73zZvgspWHEVi1gFKpsJrHGfYREP6m",
  "key14": "3bxX8XBVzWReq8q63mDwoSQdtKvHtYfy1Ktb7uUFZ6TUJyEEagCCmpYMwyCC76SrwLeqWQuY1tNEEcBr2xPWqLrt",
  "key15": "3Jn3JQB6Lg34GG4kiGfnhNJzXctQ5QijUF26BANsvF9stXWHNcwC6VmEsQEzhU8CLabm8wKx5UgBgQb8MXP9geEq",
  "key16": "8oqBmiJPpdcaPWzGe7Lenz9dMhKc7tqSCSedKBQL4y7tLAeU5aMapvj6tyPLpY4DuBo45LeYbzTmL95DqvaDYVA",
  "key17": "3yDGLVkQumamjicEausjB5C7uxfQUdz5BgxJM6w32xPCUtboNPczmW6dvuMyx3Xjmyfpx2AYtozF3iiYe5UfmdX7",
  "key18": "G4UujcFDxbtrbPWeg1Baxoz6B4ESS3M1HFS6g2Kxx4tNzVvqeiJ5nXyv2QGakVr9dma2ahKrKk2ANMi3DAZUrxE",
  "key19": "2VGX1icJc6stJeP7bzXDbX6ebJGb3zf3efoqpK6awCon3x7fQgVLQieBHACjciw7orPZgDuAe7GiHoycKc3ves3H",
  "key20": "5T75XUkZw3JYmPAf7ESBrQssbRGTKN7mJLEX9BrWtRRKsWyYgU5u9EZFjvTHUWXpZTrjvqs7QdSdScCTq3gYfdcW",
  "key21": "JNMc5ocqcUMSeg4ZhVfTABhQQA6wj5EqJXWiaBfDMpXuBiHzNT6bvEbyzb6Gx5PdLUNnBbADGMGo5SXDsZyqAjP",
  "key22": "5MwD4gUeDe26fXTV6z9mfLbAw9PhGoMA1YPTH6Uh7cBGm8bXXfTuCRpNCGGrqNkJr6QnkApybsJgLKhfMNHkEYWy",
  "key23": "5GJjn7yNr4QxgY1EKzsiBHtsgo9WFSBYkj3vjXJKWgfpZtRdCF97sFeftWp3tP85pBxrwb3SVhASTnku2Pg86y8M",
  "key24": "3crpHHeEYvHreeCFqfPtrYC2JD4vHiSXzLMKADpnU9s7DXjcUYuoP4cSxZPwnxAB9jz8qpzhPeu8sLqJJj3mYiAG"
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

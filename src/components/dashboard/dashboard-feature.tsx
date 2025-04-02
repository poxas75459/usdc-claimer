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
    "4EktL5QQgrFqSWbfZ526FZFMwRActq68KWGBCLhXE9zLoAy1FTHD6nCSXTzWQwH8DrPddKbDnzpzvS6xjrX1CHXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48LtibzBCCP4tLZYnBGCqJ9dTSMqwugJssDX6DHNx87cGByKaMgxDsM9CMveyCwJwrWH9JAkJcZzPqhhPv4DToGx",
  "key1": "28EuQKyGG46DqYF3Cv3VeNuVUgo16HMuXv6qbJtkodGe4uF3TW5b2AhNtPb6ho2GC9k4FTq7PkAenk29AuPg15TX",
  "key2": "3YTLjgbW36d7VnhfB2Km1aezq8tqqWRPH3m7WWq67zBVzaUkk6ErmbT8LqVNgDx1SqNg2CUPh96HtH4uZEuKJTcX",
  "key3": "4k8N1nqfAjxhSXr7RjMjCqPB96Gip67nFzPDQzXsdtJ2pm8ku38WVXrDDoZpTHvUC9qnqKH72RtAhoYbw4sLLAFx",
  "key4": "2htoBf3VyWivPW8Cm1vAbHWpYtbGgvCfzn4GxbuQUmyfb1jc9uGKpqRd33YEUN5nom3kuJwfLYcLCiGd4n1ZEucg",
  "key5": "CySwztL5i1sFDC4g9wxuXZNvY15RsJQQU2SxusQ2yL6zBiogEKDLWovWrCCYn3UH1YuSTAejeAWMeZLdMiYh2Ga",
  "key6": "5hDjnCQMgJB9Dvcu7ZAVJ9yq8hSs25363Zk7MGSiyFc3gzx5FoHUBASMNcL7zm5MhHsGwhFGTvevWFFJx67hazAJ",
  "key7": "64PRh7eb9j2xL2smTYw8MwCRjnvaUF789xazDoRFFMYfWFnReCqP37kGYEWRzxAGEh7R1wFGXu36nPJZCQHiekmx",
  "key8": "GC3QVRES9z4W9W6FLfKGCMCeKoTZY8hK34jhPN7Aeb1GQzLctBABLFdCiVtUfdDqUkKtvFNwdg8qqKzLNgqELPW",
  "key9": "21G5VFi3FyBjSozFbWuAEGdFmRfgVAEXtyuLewbGJfrjEaehSSSXrmuNiBVU42YnR2fEuKQcJgjmft81C4SEWFt3",
  "key10": "29byyMbGEAySPeqrB1bekhmh62XbuTdNxJWXbpM7u97DcnWo5GPkEbRjkK3bgLM6i8p8Sey1rE5zA38u8jVWXuy3",
  "key11": "4Te8GYjZSq61UsCcBcv1XsVjR8i1hC2BS4xLauMC8uBxghecsawwBXPEBFAUKcaExtYgUwPYCtiF31bK1WPLwnqE",
  "key12": "4bt7B8CkgAHFWx9QGEwv4RS4TaFmUZ8SYr1A4CAZV3diqidS4trR21bxY3gHoCnBHt4NxnL6Q4ryt9i42chX1bdU",
  "key13": "2NUzzykuhL2EqNzxkT9G5Pd1zmKhodbyWTbZgM2imdt8jXpDkHLm23gmb4AvEhBXfdHiQ5TrzyPYHZvTAJh1S9Ps",
  "key14": "38sv7tUgfoHVyJYnXJ47XndJhdNEmETCZ8WMW7DKaML7qQD4MwdM7m9T3f1XcZYNiPb9wEzABSDXLwSZaXakHRe5",
  "key15": "1qnSn7cYPj9NEsyLU9d2GwLwqCwXXZHDFBwPHBr5j3oNh72sjNAXECrQhC4Uz9p5RvW86UNdBYWywoNdx6Fik6G",
  "key16": "2tBgGYgttKtXCNnyKgED9LTg8TiT8chRWHUE4PwiXzUstndeRmMJ8ZKCa9YJYfWrRsdfFkE7YYZbS1143kcaAGeU",
  "key17": "5iJidqVpyuLpoZYjNxEYJTyg3qF7dfg5Xdbr6X95cgSC6nX6H2rq9iYwHqg3EWeeypzQSXzyA2J1dvun6V7GHNLK",
  "key18": "41b5PTVDzbR8wWNU1SbJ8Dgo5mLcefKbV92bE1s2mK9c71Y2KP7VoT92ydyT5Lg6uRL4XJvnJvwZ5M8KFCLqNT8v",
  "key19": "3M6VLtxkGjEY8LsJ4NmHMpsgQe3cL7A4apMCamBvfMNRteXn6zTaJ1rqFgVuwe8iCneFkR4bDUEyxfGXr4cVbmRf",
  "key20": "3qeN7Kfm3KSJwJ23VisKNk5RPdhf75jLSkEVKBjyXEg6KydD2FvMfqTtk3icNiNN2xL1nhf6FgttZBRXs3hr9JZc",
  "key21": "25jWDE2cuV2FjwaR8MJuGV7gqjx4KodvKm5RRwBqXbDamAy8pxZgSNmQ36s5Fib2qc8zEZcgLPtQVvk4VXbZ26KC",
  "key22": "4CHEwHAwUrt2raKvP4MwqngPS6mUdUEAHpYVadFhRSfmqz7xqDEzFz3dPANtGkG7xzFwozJnTmzPHYVVCiVFQuEQ",
  "key23": "2tm55oGbrHbACZDCAG6Hciphpq5xGrVwRz9MaGLaa6zVrUuat8TSVHuoKgkmKHFaJMKFYBM5uDKAKSRqbtNS72sj",
  "key24": "3RkNoQVzE1mWJs2VMeDdDgeMMc7ry5sY4HaPyNVypqz7Bgaax8fyuHgo9QPknj6WaFPLA544zumaXYBnJhx53E4e"
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

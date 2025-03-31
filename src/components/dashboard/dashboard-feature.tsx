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
    "2syBrX5Tw4hGunhi8CnceyX1QJJGF5S3DRWhx3ooDNhUBEHRaaoXb66cXUsAaQoDEr8TP8BhgS8BNmcZJnSm2ppc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N7BM8Mvqh2rDJt6yEztkpPSnB2Y288Vu31gxjr5gBCRKWCEDYu5HyiUTF2tifu3dGzzz97zLUx8h4JjfrHf8PSB",
  "key1": "26Ds1RTvhxZBJcBFsr8DSDzKfdoQZDA3pWEsuwb3FSJvhVtbNSvX1Cywrq7skitK5nMgSUCeWfJhRdMEww1jrVJn",
  "key2": "onSaz7Dj5kTwyPfr3L8euX6vjS4QRVQuJNJEYjzyCYHRSCq8EVNGjvsa1XTiAEHLnDi7MnvqnZ1F1xhPZEs86Ac",
  "key3": "39J7owmr2GHWVbp7UZcU3gyBAeHaJmZMSgLYvmqYaz8UFgccZGXAFvw7YZLo82pFvyU64f1ufJbs337kwAprJYU",
  "key4": "5L7ofTvQzVqVSM7353vTCCp92NCNdFMvQfobNqrykqBM3xhAcfbcfcdHoGAyYwcYu39Dsa4tUrzb2k1eQUGuPyX9",
  "key5": "2o56GzvpAMxAnm5oLWS1XRcJiaP8an1zpgyq5tRouY6eB2wK5xR3CGKByVsK8UARnGNrW3t1fht2f2Ry2aASaLc2",
  "key6": "315LekQcKHeRGvut8vqC2JrYtedSHZgyfEm3YCBuUeA2di54McsWz5ckcDhn5TitnDn34Ey45m8FCXKiYp9ik5rN",
  "key7": "5S3MSuQvahJEDbh4xxZ4u7pcdQzcNTrd7kxaBtgf6XGtnNTh4Q1pukQLWDUiPKyAM8LuUydVm9DLdVcGjyc8P7if",
  "key8": "2hLN1ccBBbJDKYLXRebBAg45rq42LcxPeHESCuoZ7dwkyFsqAbMYDmG5a7MnWZ2poy28YTfeLp9vBjUQjxRejf3N",
  "key9": "3RYejLuPiLYQb23CRSmwiYJjEntguPcNY5na3BkzTHiuDRw1SoU3zTbBQBUh5fP3c9Cay6tyVJb6nPKZDfjQoCow",
  "key10": "4wDBJ4Qab1xNehVZtMEubPxaRV6kf8WeShATnxktnRXC6j4cvxoJXAM4HdZtPuerHmDtLs57B1hpgcbH2Kc1QLgk",
  "key11": "4MgvQxK5s7r4dhH8DBd3WvwLZLi91S3QtJ6b2v2Q5HMfHqTcke6tdkpMn9SEd1HRAqxeuyjQMdxvbnJApBgcxpZa",
  "key12": "8LGBmEWHkzFqWWc7k5FQ1rLBFo49M8X1ATvopJCdwunSPXwFWVgTUhae8L6AH8PnLfF8NcgDSxRB2fHikezzy42",
  "key13": "2SXnGbmZSBmaezpMskNid7QccKBscGNEYPZtLHmv8Br29qvgae9Yz3aDECSjZjJkP33HLUiPGXx9G9UyCXCvT94k",
  "key14": "2co9KsEPFtuohDaMkP7wnyzLUWH3wMQZ8sfJ9E2QJ5Ng1EUdJj9qoPjHRvqGcpZYPqsoGeuGomvDcXWvxwJ7oR33",
  "key15": "44PBwpDYtx1dZiHtcqHfBgv88jpKGLtxSLP2ThhunaRBnkExfZx5CFpwbAZFF65Bmp4HeGgC2unESs3PgeVs9vnG",
  "key16": "5XkNdhzuL4jLqh667vunF3WoLbUbU2ZFBtb148wBdQ5YXQvhth9oGuYXpfyibF6TKUMsSHw5zSqmQVN8nyyWtkVu",
  "key17": "2su1qjRAsDCiB1jjFkLMr6fBFcWkfQryaFZcAcD5gb7bLNDbZty27jkASk1cBj7MBEqTKTYpik5DTkXVwGyDGKX8",
  "key18": "337JLPfbVpvZsH6NDpCTGXDrn3CGFRGi73FSzy4zb1NqLM7v8x3WZEQcKcuG6e4U9WJjhpEVW3zrKYQUYCt6MgBh",
  "key19": "23L72YCVZ6UXntUL6PikSEZv8qRn3YWy1dNXci69hPbPwc79pEPhZYq9us7wBkcquV3FxWkLvDD4VEpZfPtJBz8k",
  "key20": "3pPCTKX54ZhnKC8UVKEht1u6AWj3EPbigvsT5Pt66DtFwHJXoLouhUyNxWTAPhdbZBSJ9kmRaJ1qgtFAEJTpTq8G",
  "key21": "4FRUK677mKuYhkrtRtPozYcGfRaVmHGKsHv5u8nSNg8xhb2Pb8pXkU3kEhYBHhahvpnDLjkVrz3QxJtHKisH6ErW",
  "key22": "5wdo869ya36nXiAmUF3SB4ubreakAEs43SoSkoEfP1jqVnmqxFfQcS8xZntoDnDcZ7p4vfaPaeNZd5ctiqEUK6cD",
  "key23": "35UzuTRtPuhV4L4i91E4DWKmQGffK4W19rg1eXx6345DkWw6AwprL77Rzdy65EMbbYzAwzrbUN9VFouy4F4wygNH",
  "key24": "V4K87DWPEoQX3mjd1Fih3vN1xdnjyH3KfPutcLvsPgBPciSXseK6h7mWwZTcMtdBEpjT9KQsXzTdo68BsB8T6ST",
  "key25": "1YgBo1LR8oAkaRRHTCFNoVJGBiQU2PGQh6X4swuEXRnEHrs7n6hiNyuChqjWSMtXqrLK6VLxDMs8hN15Knmf4U7",
  "key26": "5RBPbntTfVfPqisjA6TxkYEnDZeiLX9jzAeWtgpnipTwcQtoQgGUHnmomiwf9Apm7vtLG8MwqQSszJz6UuQCbwdS",
  "key27": "2WY4eEAhqMMiuq7QEJFDjtTTqyo9LrPudg3eaetpyk1krEdSTZ2ZRHkipKscVs9kpqMTWs3nA72A4o5WoGLvnwiw"
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

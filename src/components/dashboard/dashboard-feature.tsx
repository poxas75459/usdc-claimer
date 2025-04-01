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
    "jf754JSr2gMNTQWiEmFx2tV95S84yfmbBoh14TRPQPPWpMD8meLVW2vGWthVdyTVjtFioMdHQZf43SRBjLfZRPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5caPURJRzWaqgm1nTAKnmAVzkgY9Eie6q6oHZog59WENc1ewt9uhGHFVaj4CtauncTtqUuC9MfWsFCf3Uq1ea1XJ",
  "key1": "2nKy9bnRUWoUFphqZLmuK5QXj7JB5hFw3KAMV2DyszYZQRs6KiKpr7y49Ve95oV5SWh8urXuZT8V7HQnxGAxjdaq",
  "key2": "F9ARiTYyan1abfx5Wu6fsR1gprm5mDn35qFeqewo7BssnELtJMw4rAcdo85sKSH9St1CLpBcxvBjfvr7KcEpKyC",
  "key3": "2uVmg3B78ufeJXE421rjqY5JeeF9TzTLgftiH5V19EriUtsuybGhZN9XT8rVp8WJosqXZa32gdg3ErrurUj3AKWd",
  "key4": "HQSvhfqryEVtYeDT6Tri9Q8tzFKpoTwCyn1hLeafax1evHwXexcZozdAquSxAVeyTiD8AwmkDwPYkntzoUqrD9Q",
  "key5": "4ifQumkcx8fBiEJRNgrmjETJkwZVZyZme9xn2XAvBQSBGhMfNpUTeJRsVxpRAnLv8ap7vmojFyBFEUMM2j6y3JvF",
  "key6": "2aT5yY4SNVn4wbxhmiFWJNf7DXJjbjL8Stcq6yxqdMgcBjBSJ12AESgaijH5qpAp2f2X8jqZC4b79hRra9aemyPG",
  "key7": "3LfARDaHUVrEq32eogLCcxJQv7ZpVcRysgiHxAixCnKZMFrvCvE3XeUG8wzrvJwzu9aKKGWgFbxRrCYzV1beQTGL",
  "key8": "2wo5QHh1M8NLac35szUn6RZKygTQbnaZY2QJi1VHEv73yuaeqn6X7mJvXWuUKcXN1HuxzZwCUeigQqZKerkJPqdV",
  "key9": "2qK5q9G9egThHLmt2UF9RnPLXFW5q8utUmPNTNt3ejuGZacXtGMaXw29LGYzwQLQ3d9HvD6FaYCowsCLZ5Q58d2g",
  "key10": "5LKPNBChqYEEyL7rjWT2C1cGE5QcG6r9sbrYS4WC9uJNZsm2bmtqTGoMp8ukj9Lx7G1HCNx42ZSWVE1iEzhGoK7u",
  "key11": "2rXjSU9SgHm1oRDrBMuY7Re1CbmHTM3Y7UApxAmY4fR85jKmfFzWxudY9H9Lyjh33375otHCyfCZ8UQHtiqyoh6Q",
  "key12": "2Xby6VZs4u71sPeU48Zx6fDA6b9vgdGvZNzQsCE7FecjpYBkze2n8776Z3RtDBBYQsWq1HeYs9fho4bAmPMP2w72",
  "key13": "jxuBKp6fQGVEm5bkz7EJDLiUFgAMvNgtVjMzPfLdmp1K82J6Ry7ng3mZyWhjhubHQGubo9MjmLbVyRoGNBspMc5",
  "key14": "2t9yYAyJgHidfgbLSjMZ7jGaYHHEVr6FXQPvAKxr8DdaQHmfoBPjTzpYCK2dSD2vYDYzLB8SaWzmiYeF1iqvCYaA",
  "key15": "Fd6jZytWXFBjfaPerPuE5P39kuECDAQgSkL2wHmDR3FWvCnZJP4web6gtyWpBRXmeLAnko3uB62kKpSxxiQbPk6",
  "key16": "nPmopUyAEGMYHqxVTe6aJTbG3qjoM8CevpcgnhKuongj5Ynxar5F8Hj7NC9fPM9hzSpaa2KzLj69VDV5SMCqboq",
  "key17": "3AF92B3rVbfmzNg7xD9nL8KpPBk4ArXBdvnksw3P2ZQzZRChaL4L29XmxCgxAfoS7HQ9jN4B3j6pEmU2RPvMPUj9",
  "key18": "3KWknaaYRVMgqQzMsFBnAL3CstZNfetUDPHfMeLZLhHSG4xM638jiomZUdPNPSsQHKkEeMmZW83d6ebhKbe6ABQ",
  "key19": "3TSoS54J3fi4fnm5UCVvC3wWCtko93X24c7r6Te7DXKmKKzYvXPkR2Hg2jqBiENc1cwXA1yPqcWjSN2DsXHies1B",
  "key20": "f2tbjsx4Sk9RKXAjtE1w4Bwzc1tgTfkBLRqKYcDNyUhE5WSN2CCaJT9zGzJJqUKhgzzFYsEPTarAsqgUGcotnUF",
  "key21": "5ckx1q33MF4dPSDXZmfeuRcQts2aagSkU1MbCBezM3rA3KRizKaG1JUjg6qwGENxSCik5wD7JEuvMMepNkdLfAZ6",
  "key22": "2iS7CrHj7EiCSsfwYWvJZtNPh3RUoS4iYWc4PTrxFBRtpPb2i3Ngj4fT7XQy4iY9RveyM12vdjdthZdXncTJPBjL",
  "key23": "pvsd1ifoCkju6tVLeRViULArHY1mfSmXvHFije21nSHRQ2xgCxpr3sNiLmFcTfT9yRGcejyUokLLaHvo5rcKPAh",
  "key24": "4huxEY9eMQnz38X8AdhSQrRxmTU8xeEA28whbiAJrv9DGZQzRiAtZtTNb7KMBp9XSgDVr2aGB3UefXTL4hZXeEAP",
  "key25": "5F8y7ZgSHrRgh73MyKqfWp6iMDBsuwDeX7ESCSEEehBASLQhqh4VGVVxXAbyfQiJQPwFFcgQ3CSGy5Zg5c4MtT3",
  "key26": "3V7mRVckgFwbtD6gD8XT63znSDNHjCCNcXEpsEenQjqj5rG8kiJybfUZiCFYUDEWE2AmQaRVZmGKRVBmG8UWTe5f"
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

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
    "8rxAKdbPUHFpiT1xneADkuJoXumitrLq2dmxxx9BidVvs4c4yPuVGinRN6J8iN1fkZszWFPvXUUHaA9Vh4HdwwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w8un4T1SiZZe53jX2kGUPgmoErHZ9eohpyTk9g985aJFUyjndNWt7X9bh4w4eqAHaVRWr64vz7JKZH8myDiaJjM",
  "key1": "2VnphEjT6Zmvfaxn9DqCeGshwhpRUbNDmWVyuMgZ72T6FzCW8fNJdodTnSLzVCoXrPDnBcDqpwk5TGzNQT4pG5G9",
  "key2": "5SNwUERrcdxfaPsdTDD1jfai5oiSaqbRCXe1srkFiwuPTFsihRXbdL6WMF8dbG7PFsyqkR6MCcn1UTAKM9yGLiPU",
  "key3": "25i8xA8wRJwsFrZir1e6DfkRFrGgvTyzeisBnHs475VGyRvmaCkWmTBh4BXcjK196QUg6U2HPBUeQBWDYn86zweA",
  "key4": "3Wy5TKCL92sVnVrACk2hVxiQfQpxqnZ2sjj5sC4CComtyDmcpo29xvTma5Kadb5CfiXGMz2kzvX9VvyQA6hsoP73",
  "key5": "3Up8Vw8NYg3TAFpSSP1Hy8dV3KtqwGaVz7in5WgVjsQpvbVEUufLPyvgFkQCQT1phkJ9Pi1Nv5FyfeRm86XPuTE1",
  "key6": "5t4CRigggAWU7ve7KSnJttCDfaussYY3NVF4ZsyyDcx6PVRbZHFF7G5AQT8o5w6oJ53AnpVy6yGTaAKidDSyXbza",
  "key7": "3DhBkCbjym3NAcRzxGZH5FGmprB74dcMAQUvFmUdBDgURg9DKLWV5wTLFN6pAYrHFDbikQ9E4BBE73VUt7anyqn2",
  "key8": "4bew23FegDiREcEipbZcjS6HTb9q4tbodc4FxLfSZcmEfh57JUyVPrGGN361Wk7aDG4zs1vN9Xp1feQ3ox8yPEqU",
  "key9": "4X6QZhsnPSNHa7um8aezgfyVBi7eB1SQa72YZs2Yth534wYfkcvEW2Yv717STxY5X8V2eu3Qo5HwqnJSDvR2McWu",
  "key10": "4M54Vg4mHxSaWPhEYd286R6TPpqh7TuRHBKRGUQiBNv9CAforEUmRAWLFZUHHozyQ2rZa7jMvGorimxEv1LgEV6G",
  "key11": "4HLqFfqQfbyZyiSPdC6fm1mXFeQ5oGausw5d1ZumuV4VPo9i6f8FSYsRsBN7FQrYvdxXP2DKwbpjfixhxgiVcriF",
  "key12": "uJdhH8Z1cLPV3vW9FKUuEijozS6SnGkLDNYKgeWpdbhY48yYZpXeqnPmRNZCGQfwdwf2AEyUT8USkdaeJCkCCG7",
  "key13": "3qbEU2qBZmmQJftGpbqvTUKPKioCnsRfxtUQssdptmbuJzJxrtFjSnHpJnvywfehjCncHUjRqLJVye6L9V3VeTJs",
  "key14": "5RM15BTHkjJb9hsKnoGafWkouKYyv16AVT3wFuVDEnAsE2HFWRzTfR3NrsHuiehjL3Dc6RPNiSKxz5GXk2uxN1uA",
  "key15": "MbFxqA52zFh7oVjcX6Fe5SGk1SXhtJd3uXQ5e31h1bPvHoVJDFfzcratUUvefSgqm1vKX5w1diHaPGKxtn56ELU",
  "key16": "3ysd4wexGc5J3U3yGkZd7bmqECeokRgkefQk9TbUpdeH8ZAaJhE6AszHY6EGWzEpXeNzsh3abr7h85HsAg4Sr5aT",
  "key17": "24htKBrityNaERfk8m382nE2dNPUaz2TgtxXjt7U6WEAJbk14GFJz7SJXf9XiFF4tqu59oiUJ9JsTqfFJWo31xvL",
  "key18": "5w6Ss9HNBBXWA3A252xJaAiaraTYvX6CuHwn1RErWEcJSb3bDbRp1jkjJi9CxixxCpRmVJVQs7T8wBxUjZqwuLDc",
  "key19": "2C8wSyiWL9diW8Myw7Cd1h2dshwdXmW1vnVGciVw2Ud4VrPH3BNwD7eG7M8sTxGC2149y1BJFfbfgUtrYFf9v9h4",
  "key20": "3HZZ6FrY5uitixoRs98xd6KYf4UsigBvxR9e8R9UMHsHKRNrZHbVBuKSf3FNnSzT1nxgrvSv3riXR6pZZVjDWb6",
  "key21": "62Co8ewhL5Pd4LDBvebbwhbRzDug8aG8u9PM5u495svtuopvmcRPqaBHfaWU23JpVwaF3MAHBNxoVtdgqJwXNfSD",
  "key22": "5ux6fJxt8PkKxEHHs9WsNff8YhCbRHbBbxrwG7kTre7ufmQeRZcWpB4gs34yLR3TB1XXSLfGHGpcY1rrmpgcr2Tw",
  "key23": "64C57oLNz2uxzWb7AvBBvDnXwrcFjVRRBzCaFrwqqumvEu29JXh5DaZ1183ouxtmfsvEnaHJRzvfFHKcXAsmsWQb",
  "key24": "2Ph7PF6eb4rbXBWXZg8S6rsurqUGALSQTbMcaEVVkrkZJPf1gJw1Pw2AqdafuND1fo4mvDGuxE1Ym97rkPzTqTRE",
  "key25": "3Nhf2W3QnfmPqHa9rkPMAhwJaGP6GJHwW7kFubEvCeaJCMBZ6N2uGsg7KKEmsu9MSz6xDeE8tDbqMQkd6qu7HBxh",
  "key26": "35G3BYhBRHAsaB5VRkEdme46A29TbyimkyJZ6Y6971eVbXuQcVYC8QCMU9dHck1MjApExtjKKh5wbVixC1XfzqE2",
  "key27": "5271h4ie6QA9qTZfA5jFAC7v9JUA6znGSSNZHnWjCAThgnzwyH6Sg7nbAW3UtwTNP7vKZnBgLdsxbAZ2awTqhL3v"
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

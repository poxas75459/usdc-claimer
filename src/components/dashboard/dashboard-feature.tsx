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
    "FbYUX5cyvGLkQiNY17x39mhMLpZ7w2NdAJu5zkGCxdU6uZw7cVj97GMkFRLvguWCfYJEAAEXWdzG8tJcjvqMw7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ombEUJPCwFSsvjJTNMm6SQUGPjevi8X3WgHFRScgWiwFaJ6cJTfmas6fFWPXrtfyyVGoXfazKzHp6kAjSvjJ9jt",
  "key1": "2HerSrUGQBEndCSPHFLLHAYcSozj1LFyxGGhD48Jfgzmx1snJbvHmbvwP5S6d3cbbNE7LsuJE48D5fvZu9cPFjxS",
  "key2": "3Gwiz4XJ3iJU36oN7ouFdyXmAwaQrHX68qrSTxHwtcVmg6pNAAUREzKycgiowmastsgbwWJGd2gLbReJYzwbtBiQ",
  "key3": "HLT6G42iTkL5sCf6cFL9ZpqW4hRN42fB3dEn5gATtVcMYfnooQY1qQbwDoQhi6yFB3qcp9bUat1skU811RAD1Nm",
  "key4": "2xtwPsiPtTaJGJHhJWC6q8UkhHVkiYXmk6WmhYK423dwVgS4iGQ6RguUneMrvhnzLRfbeQShH9bEW1XKh94sREgb",
  "key5": "4itHZzD8LDfG1CE2767HN2RmhyRhYvYJhLY2x4SLZvnB2kRE8j96Ec7KTzgooGeTDHCYQRNYmHZWTyufccFNoiL5",
  "key6": "5iS2Wvs7kAdASFZur4J57ah1mcpcWJmBY3TwqV5gR97nduX9DMUuEqU6RfYMHSzxNHgMapm7scjbAdkpWw6V3qjQ",
  "key7": "5GvzkpCoHJrDa9auJAhp2weRf7M57if9nZB7SnkZq4VjfFtcBuojjfeKr1GvamWGpjJ4cPiofhx6s1Ctayrb24oe",
  "key8": "4RPxsCwxEYggN4iHkdKiDEMtBrfSc5tE8TPcfEv9g65MLM8RBJpzfciNSL2x9bMVUP9qKzhZzr5LL52mRtQnSZgh",
  "key9": "4xKVTL1MafXcAMSyaCKZhSKzNKTkiCUduARuMZ6WsbvEKwb2NCELWvuRNTuQBtKwCRsx6i4SdYNFuBaPqRVetyow",
  "key10": "2K3GYaZHyCRMdtzZqVD8B66RLoG2rNVKRojhTpHc4WVztogfhHdeXPSEiBfuk8VatfgJQ5yZpJrF2HjxbBbMKLLA",
  "key11": "RvwBfQqb82qyFgkczD2o6jc9hMYE5ouRebkVwr2SzDy2VbgtKG7dfEnmZ2VaXhDmmHVuiQVBeCEMS5dvic6SSaS",
  "key12": "cAorUEGTjmLNsuUrxKEJVUBQnti34Hv1cGJvKqGGPuJmha9wkprzLnZfN5TKHiZ1YruNTy9ejQUNswz7zHbC8Yb",
  "key13": "2ymqW6LgBeDQcFwp44kR8cabcP6Skwkk9tWm6mcs1bfJmAB2kA84sg2FBTxPLRPCmdbDfKRa4YuQowfJMxcBr8Dx",
  "key14": "5KJ78pGsnpKRmdKMMHnh1KNHBVKztn5NWKKtL4ZKzscw3yo49cmut9G9XXZK7h8HzsGvV1msUmojHPWVuHxYFLWt",
  "key15": "2jSeS3vP1EiE58ig9GpsoCGfmEPFfFG9r5JkbyS3iFGaJ1vDnKLyCHt4xaLqoSRUirQq8q4M2V8EY4QEmA3GWRB",
  "key16": "4cyXZCc89SEHuJoBkfrrJe2q5mKEh3g1KUo9GajGm97CFnauLEZy9XfRtcvgY2QCwTkSJeDC13tUMfDjV7dwhSts",
  "key17": "2ZDGJJR8FxPB1f12BnDg2pU3xnGbUqZaWrnUqTge2T6ZGXxWQmjN5gm7w6AAPe1Z1FKdypTTxQSaNMpDAE8dnKxq",
  "key18": "3EnaCdawBnJUsTfsCpw3ptEchdinf5w6JKQyb3pb4xtsVkU26YdvvYAsiSeHYE9tgfJ1BpH6HcWhBUuAGenoiTgb",
  "key19": "53DkKKMLg7DXXK1B5CnMrWspquqykYV3Ne4DqHdu45B6aQ7e8B2aCRr6Mn59Br1y5TWD1hWa5kyykS471d7Zj68o",
  "key20": "2mGMmeHGgTxPwbYPe8BsNBDGmr5uukuZvddf6pyN6JC6mAwMR2dvLaau8ztymqgwXbKkFp7AFmKQdgDZKzsbGSt6",
  "key21": "5K9Gs2XMLyrRsQUqiKewfjUCcgZYSFopeZwtxdYJbPgPK8QZAaZGFW8f1L87RbrNfcKkb45ZpZu4pxLUskyzh9Vn",
  "key22": "3Q83v3vinCGqsiETT7WhKmB3JoBYWpAmnQSqS9g3R5Kt36GX3DyJt4tKMbhUAcjvVbWSNUBBLCN1ZRBLHJtEkvS7",
  "key23": "wP5UvL3Ks24tSkzE7rxfvyzuHEHHTHmCb11rFbJNStjtJeB3PXmE8s7PFccT8cmWmypa9mxugoi24hLx7u7P2v6",
  "key24": "2Tzfju2aTRU7tT54U41TrQhzgbS6CZUT5aTdSwpktGE6zymefevyPgocWgxnUuRFd8J5rQkYN2KtRibspbXGm8mH"
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

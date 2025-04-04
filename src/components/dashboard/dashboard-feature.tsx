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
    "mTyH76SYr1PvzEeSq9YxxsJmGRKFH3vNTvwBE9EQz5Ukbh89vNywJKuEzb2imBMr1ao5WBcgTjjLrcudAxT5KFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rd8WcXj3bk5VZjWJNKmiMSH5a1jtRzasVCEG2Cm9sPfA25Eh7PL8bBXMNLZkxDzUEK4WVpV1e7aPGAA22GaPAH5",
  "key1": "3zpHYdbFYXEY8qYCH725iXF6V4FnqBAFfR7fuzwF38m1nmXMFjqWtjwixAShdw8RWB9cm15jdNuK9g5EtFoUf7bV",
  "key2": "2qtSq87jJvSszFd3cZj7ihcu1hM4mC48yhPyZJedaknJWF8KenBt5uFG3RtyWd2s9XPCUAu5A33FZtgxPWiJd8bC",
  "key3": "4idn3iF85TQWYcuRGkcwDrAU7TKvb4prafhVUwjYJCEpE7D2vURp35q85msSAnszm4XzNLvbuWL8P2gyVRprYfJY",
  "key4": "45n5F7g5y9xA6Ai1nZMzWWeTgk8qrtRTw9JvntjVjMfvAsi9p7wAgTTnXaen8mtWzyJBCJaAFHFJH3drZEdKf3ST",
  "key5": "4oiCR8G5z5jwJnuzxJ4tofMqUVWQJ15L9kSkyffRBYt8vHjqdo5ETGtMg6pP5kXezLmecWwWP4kgpwbKjNnmw57z",
  "key6": "2E9ZVQipzdTsn63FeB7dnrPxp7pQvqrjvtmWn1ZEtFcmmYDNYL6mqcJ4EUK4qNaKWjwkQCkw63PVuRm5wV41cdfq",
  "key7": "2p3Nm9xk2ESbfRmEJ2NwqF7M5nvVEkm6KVu6hesCZLHW8Bkii17rY9z5a2BxfA7ZiGhbxCsU7NyKEWjUof9V6d3A",
  "key8": "44wUJMgumtPLnEJnNcp6mAGdoMHAFYLqWYNUe9EPqQdL5qt25zEwBYj6Evd92CkBuBrpQcWNJ3Ca9rMocRGKi2VM",
  "key9": "5hpueyk98rNkmzTaAew4gWgof2QQjTKRAjxKCoBzJq92zUTivsFUMhFPtPBM52g29vBwYCQcjD3LM5hYknTimfkW",
  "key10": "3mmXsEv9f25mZuY86Fo7iDdt27G8SYN8bCZ8JVRkfagNWH1MDghEK2FkM3KseXDvxJsdUWJttrwWUZ8mTZ6oUzz2",
  "key11": "2ZnrdAcaEirZAj6v7edioxZ3icGDKRDx2uQyjt1LepUA4AsLY58fMjQoEiZNboLiQKSNedCeAsGz9s4N8Krv1qV7",
  "key12": "4GcjkFU953ZjKeNT2fsgU7tmD38m3HNXoAoanZ6KKUWPXoUZdfDrw5hD3B7cFJC8KVTmYrSwDrrP6rJJhpZF9L5d",
  "key13": "epK34XdxfMjHSWWFbbf34By8Nh47dcygFUYZNuVQH8H4hp7Biud8igrhpNKL1S9r5YFnpfEMij564fKfA6CXwNE",
  "key14": "5VvtPiwWGYmxYornP1Bt7HRA3Bxec5astutkECGFABrZkWKwMDYrbyW4LenxVwvSeFeAh53xGqHYViMxLUoPi6nY",
  "key15": "35TkZRMpYwPwLAWr5L7cBgjByWWZE9v5mk51W4nmNp2CWNdwbRLDSRRbQtHMyFZsrDjuysK8k8yNLkuqUDxyVYzu",
  "key16": "3GYwc3KqyHC3RHfYJht8HbRubAYw26ztXy6GCW1rVAHfbbwE29VV3hfP8C7kPmCWLC3fiBNpJNKnXnEUSiSEfVC4",
  "key17": "YsS7a7medcEeYpNHdD1zydmbP6tDsTjXxCjRgrMqxzKWiMasWS7Md1Ze2iyKCCWYG8fF91E3QaNXFuGLyURTviG",
  "key18": "3HPjSwxgr7AouW5frVtSUF3QwoRQABnqPuzogsKFnTo7ZSmwJnXKJ7g6RB7rAZivtg7Vtgt9ETvTwjcoJtUtw8iN",
  "key19": "4AMcQdVLoFCKBEV82G8BaeArYWEdexwGWiDMK6ySBNXbvVgTrpAKPkk7kZaAR6Bn2rNr449BFjuvd6CwtF4sScgm",
  "key20": "2nsFMAJmxmrK59Fyv1SKAvyR5tvAtUFmEoWthntHkwHrK8ANCtds8u5AeAjjHpnipFwGo9bWzz7x4RfUe7ubT25C",
  "key21": "5KzWrgZjR3N8zejrtrRrgQwF8UXLN52NGLpu7zTEVs2Khx44Z8EjRnexF6JK3R3qvc5gRbGACeavS6S6xxAdEXXj",
  "key22": "6u6Ftzd1DxUFz9GD6zWyH6R4DsmbbdS54BaHtQHsgXGm6PVGGuuv7vpAj5WYMtqDn4BXDGHFS1mVJbcWBzicpiD",
  "key23": "4Jn5S1HbD2htaNYFVgLvQVCwpJZD9peddCHcJrK3r2rkP3znRxM8QeyHHR1z2wk5Cfx5u4vqTFCLgxz5PmmfMCp5",
  "key24": "Qo2hi6LwGhfYDTe8aC1hQGHaYDZwjux4uBwfLGCdUbHDWw3sN5DoFZPi4Z2RBAWubHt31f6dcyYqfS9PF88nCsf"
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

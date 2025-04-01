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
    "5FujNVA4TY7EKSdvb4DW8uAVzbL38j1y8Q1k9RHnVnzKphSF8L2UUaZiDX1g19yYhM6x69QH3DZT8TW6xxD1UjMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "miDX6X3ofKXedSrgvtgGZf3B4MonzXg6hzFdHWUC8PXgjZdMwbCHLXyCU3KsZ5RHVSotAiHtj4NuC8cEb4t7NmP",
  "key1": "2pDbjERjyG6z2mdNjFMdcZ6aatR3SYSYT8nFFMn3x2M5zAj7Hfhh7QHJGYQoCCDVToMJ4tT2U2neuvfV3dfJZP18",
  "key2": "48sYMPR1MFHmYFDD1eUCZnDe792F32wTY6bz2CzYDvJpmFyNSqkY8i67MXMcejeRutmEqGmXFfCt2b7hsCUozZb5",
  "key3": "2F6mKyLtzAAo2mb5b2E3o9kHSgq6CPKDd86Nwru4kPFbwCG15XnyJR6XtiR2EvwfPKk6zPWBJfzEN5s6hSfzC6TQ",
  "key4": "5vwz42hWS6v87oVd6zQXPv3FHJhY3jB1fosD9XhrDRgxPhvUmYcYnKJktBwuFbanbMR2zLi9svKPRUjtPxjnuRLe",
  "key5": "2FLiSSHVcFhgGGLRpwYj3cUfF7TVeqkAxC3MF9szZxoJTyzttBG6SCmE8d8cqzMt6F71Uwrxbh58WXYA8enKM7hQ",
  "key6": "61XhvceEQNMv5fnia9zi6d1k8h8qr4svF4ZRvz15ny4J5oJBbYJAcNPCvM9mJEnmUz9VtBCB3fizmFxfajcV2eWu",
  "key7": "5pMfB2AGPW2iv7VXSDJBNzfAjxyza3LFb6t7Hms1MSURyV6GyJVdHhnvuT1PiTQGf9ZuDDnDqoh5BEZJvzHRRLM6",
  "key8": "5SjD5nphf8wHsaDoAEYAXhSnQ1rMS4oXYAD1DxmPozNFWKXZuax4AbYKw8deQcmfBFwKBiJiRh526iCbxZupespU",
  "key9": "2pvDYGiX5EWzns2M6AfRCHeoxL5Na8AAon9rAhGtHcJ672a6eB472Uf3RP9rFzGRqABFCmZsg7dAKHeGUQySiVN4",
  "key10": "29vPs3WfyWqrtPVpBRDBLxeF8TmTwt8a4xCYtC2SzrUxFWf8Z1Jh22BNak3ZNH9oJsZG5q39qbppoR99JAgWADi6",
  "key11": "4J6GTSUn8kGxGPvPmpYHMM8t2X2oHSRRKKxNvkppyHxVnkkHB2Npf4TFGR4ydx23h5R3aaUNDFfvdzuCqiwLpL2a",
  "key12": "33bnpB1W62KZwUnLi7DqGqzSP6prnbwXwwjpw5etN4TodXsranB3BhmUVB3kocq5UTm7AEygY6EZwkw78ugsLNAw",
  "key13": "2WcN22UhWjduskpZ5jNthFxwKGsZPvGWZ4aGj3F2cGZP31PKomdKvNj3UzXFBNHfQ8St4AivvLgjN2PFwEEU8xN8",
  "key14": "3T5Ua6etUBPrLmtKcoiyPzBhBt39eVgLkUJfEwmVjM963t8jsNi6ybnfigodN1uoi6Xuq88NKZkBeMcZp11uwMar",
  "key15": "3Gq7Q2g6cxk9aoiKYcoahRvqCXeRPPNTfpyBeo5mYBkkmqb6aHjEP5yJitr4baaej6C6uVSrPK13UP8JcHPbXCH2",
  "key16": "4Tr2Rta6fAWqDY4dA8cqzLwdLWUWRMtfSNmXZHGSorvnTaWDGe7CDBzDMVgFBcpRnd3pUj38ELY5n725cbgcrZpN",
  "key17": "3zQNvNnX6TPeBpuuqiq5xpTZvJbUyswTtuUz5uNZoj8SY25N5wovTy4zyvRMSi7jvac8jezBTswUrctXJu9a4STX",
  "key18": "5XFHuHbP47F6aShimsPAphr96ZUci2JoiDBb51qHMeNPywsYR5tMTQYjuURkdb32awaG6r8mQRA8YSR2C7cSAMS1",
  "key19": "AnGzGEHV6zUhUsmubCwAZAKyemSy6i2iTadQBzfH6qPnth2Db5Um8KiJyY9ALddGN2zs3CuvHF3zMDCJPEiaE1t",
  "key20": "5QAVrm9dK8hv9975FF8iZJX8jY8eJADy1wLFkMhXiKzhNjPM9Sefe8sUoCS9hs9eGsQR2nwL1szQ9nNNu7BhrukY",
  "key21": "2ER1PBjvh54BpWkcLbv8Sdko79gaog9vPQ145gNPgRwVNqmzKJTZ2UJakG3eSTv7LbS69RKb3M3zVhnVVDTDh8gS",
  "key22": "5FXVvWqEbwzhDgLcTezGcxEwJBHzL27C2E7HWZo6hwb7m2NLdemmcP7t8sr835bcEc9M1SpDb6F18FWv8kM24Q5m",
  "key23": "46EppM5P4npx3RE4C9JsmyXybdMinNXC6Wzx6aXta3n5ocTPdkMGv3f7up3iYake2MJS5yEvgCroajEUyhdNaMAL",
  "key24": "QTwyoVt7itf4hps1g7k4wssNigDZqNPuGLHWsSyzhjgjHrQHTiYf2DsLaGsySfHomBAa2vfTdZCLsvmzTkTyjy9",
  "key25": "39RSSwGzMqfGdHpZerzQ7EMhWKXh4QNjTobRtvak33eZdskmqf2Rtuf4WprroQ9UApEoinWMQrau3CVtqpX1EGET",
  "key26": "44ytd6SebuL8tHn8RKffMcJcU8ByB2sda7rn53V37CiPvp6LugyZVbVD4k5EPSZGFEGCH9etH3uQReqfBGjDKbjz",
  "key27": "63tgtfxwJPF3Gn5Rwf4jpDrganatwe9E8KtbrTgETZeSWpajCEbyiN6eUdii9zoN1vEKDFXSmYAZeEyg2KoQui5K",
  "key28": "2X2YSgtk3J5AU7gnfehhywkpwUcFZZiNz7iMAZZQqUy4UNf7X7a918mai7Q99t5JPVYogRjADYCkjUPcXn2xXQ1u",
  "key29": "3uWoSnquHNLrgCC7bimNBxFmyKw9FgvruEvW8J8qb54mNcV4i7w9iKrLLUVVFhf8YvDYxiWvW1nSKvM958ZoJNcG",
  "key30": "3g1LVxC92dbhYhmG8haPxRPyAnvoL3g2ejgQT9Kd8smmRfohCNJA17P5gysHQfJ3kSWrks3JyrqLpwsVpYB2ENnS",
  "key31": "foieHXW188qyMMWUsFtJrfTfGLcJSv5equUKs9KaLZAixpHZCqdby9FUcg1PuBbkoCm5fJBqcXoHRj4txn4k2mt",
  "key32": "33wDnRJL45FZYJhad752JBNNkRZnbTukpNtiUCZPsx5WWFBsUKNVpoSv2wF1dhJ7e9LtUt56oVZws12trCmH1dZH",
  "key33": "tmkdGhqPRARwBpRCFHpWXXPrmBMcPfHtcW5dJGGXNuHB8qqetc6AyZ9PMKvxPQG7spp5sbjq9QAi4jtXBp2MaDs",
  "key34": "5NptAjQdUWBqSftDuWDu8PUrWJxY5We1xvqapj1QrFYP2xt4BPKqvTnt97QYVwnmfCPzFcShQLWBkbudYX8YCDwa",
  "key35": "3xQkPSgjmACugiyzvu2WVKUkYLdJFkg21NaQ7ULfEQeVujbAg9mRNj7Dva2c6zZddrkNmFLmRmvkLQvww7JLY4m3"
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

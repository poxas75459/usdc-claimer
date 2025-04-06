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
    "p3PjoLe9ftL6R7ZwKdKTvtXUr1DqZNdkjLwBXPP3xTqJCtDXsLjmjZVfjow2ogxARHzfwm8ASEGvEG46NzLnECL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65pF6JXFEopXbirS6Nhyp9f6xW8u1S6BD6CBfQqUVM3igKGj6yMN4Lc6g8AWZpqVnU1qXwnxg9TdmT9RX6Ww7zux",
  "key1": "23ahheHVXYWZX3QspQLBTQrgCyKNu8bu8E9BpdWtySwUonNTKQj58ipivZnRyNxfF4xeTGQEA7S1PYN7h3UES7r3",
  "key2": "4iuHR8aeRgLN2LbfMpkvG516JAP4XUi9mSSRSzhkewhHXMqAzaWCh3UvniZ8z3rsoSRRCmAEFEXRorMLFDxpT6m8",
  "key3": "2F9zssYocPZ2ync1Nhcnnz5SKJKGZ9LnUinpH5JLLpdyHfd3vDaHP8dhQKikUmrsuHMkHC41rv1oyJG6foNNnM8H",
  "key4": "3Tfm5yzMQC5WAM8yftEfRwM6gRzUJwnewDHcXwveLn8K79PPtYG3zELJu5qus8P14bJ17U6ed97wGBADWZRCSEga",
  "key5": "5xh76GzTi1uRA5gvq1MmZzbBFpEMLssuDU2qFoe73SL6yP3aeysqpDEw3qidLwzn7x62oqDGCHJaTkAK1imh3p9",
  "key6": "2iaX6cBLs7CAUeafDHkWStqw8a8mgjtAdjTS35TkkmQwENFet4dGNtKxmQafG6X6W2guaQx9SsrC7mn52EhNtECo",
  "key7": "k9FeeQ3jpnqfPRiULnHEBfcJ5h8yfs8gxquxmuaXfWFceE6fYNMqV7o58gT4bqXARhaqaKVbYe9FfENoQnGPCxC",
  "key8": "Cf4YAU7m2wPWuywuCDk4xNUUo3KR4rG6ByPHVLV1DKyRJjE5w4ZeE4sVSwunQ5VDVePsL1ogUnJbxuJuBkVQyTZ",
  "key9": "3u1RVB6AdYKrpuc1wNYqHuHgE7FCwuJxsDwjEDrbi825DdxSL2mc7ehDC25KfshYDbbyTZJxW9mD45CWNjLFWJuM",
  "key10": "3oYDC2aEqwmz1u2EhDQ3QnynnRzXKYjvEXkHHhYmdZvL4k9FngKsEaKjhYixSUr8WhmZEm4uQWbk66LxiSVSm386",
  "key11": "52WmRWCtiHnLKYBzdHRLMQLRkuTSxwWfnf7VnxgxbjxoApAqz78SaEBVQ1euFGgWX5174uJGta7hAnkb8s31pycq",
  "key12": "621cPoFUdTMuPfZuhMYUJD4cEp3RSMHruq27mRfti4k4FjsEWmLFCNoaHEjbom9NavLT2N4PM3FUYtogtKMHBauc",
  "key13": "43RmfBQNBUKU2smbeQxXnETud1dFSjmGkU9Ncp2hQQe5kdUSHKsUQ77o7uyDcWoRR7KTM7MYi8vsVdQSrjqbXMP9",
  "key14": "4Kez4S1MBpZTpJUPJpVwq8VTXR9zxSP6jCoozB548m72fV8wuffUJBteYoKQwGoBoZZ54GaLUdzCiaP6CZuA4nqi",
  "key15": "4BkaWUB3UQgsgmTm5UM5CoJZ59rcMYG5V4mV3A8c3Xp6mXT9ZgEt3CbbjRP5uzHApCVoNSKxdmuRdPVeiQeiji2b",
  "key16": "43cyUdDdqnZXUMDSEt7vHLNFEGitgw3BthkvMCNxkf3oorRmHB8zTmKNwmu8WnsrbTrJfZd4ByeBiyCcEx9XGK1z",
  "key17": "4YvsArf9pkZkhUPNTQcBydVVy86E3pTTyYRbSqwas16gK4s3yS633Twgem4WZFuYdYynCgJnFPnr7ZJ5pcgxUmMq",
  "key18": "iDQn3QL3p3Dqmdt4a9de5dnDJvaDSWgvZHi2tsW2jWDCmNx8MeWpcPgRnY4NkSmkHKMfDXBZiW8Y6Rxvhcwt7tb",
  "key19": "4MAWMR3A4sg2G5na5ed5N5adhVNruS3yTqDpv6CWPpEEKZTLTctbm5aDpBtAEPvpgN1kwT8xEbKp7LeQ2e3n7JZJ",
  "key20": "2xMtP6jqSMobV2wUTbWhYdUzFes96F36kukt4FyTHKyztx4pSphR897PnFbSkeueVoxJo7qbR4Qa5Vukkp9McP66",
  "key21": "4N4bTCpvBVN4A1x8na3849bJigGszYUinW2kUhKhHdKZmUEw6An53BwYamEdwbg3FbbwJDb3TqwGe4UNR7fok74N",
  "key22": "3LHWYxkAvnagftF4AyiaZ7XGp7kzVHR17tibKiuvG4YxZkrfkzoCr9vhfhCjhc8s4Uoy97ZQTn7QjEMEaez6Gmo9",
  "key23": "5TZ4QZSoMELrKaCSgoSuSUTgifNFov2RBSdtXRYjbF5KeRt957GLeGqaExQPKoRsvDFAzd2t2B1WjdPTDGr9czMv",
  "key24": "2v7M9HYh9R11kZuA5LFN6g9DPDahjGEQvp3ug5uf5SwWJbxvVBLXMPtcDScB62SH9v6KM1dteip8zGGm7RESkvpJ",
  "key25": "4sNKjP2Ajzu5k749HdLE4QMCG6thN3J8XGEAzrHhf7su94EQpQwD83ajWa5Ysq2eLitKXQ6TdbEak7XM8nBNDqgj"
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

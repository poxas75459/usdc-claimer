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
    "u7tXPGVhBUoeHU59wwARqfw14Xq53j9YrvFvjcCjeiGkgonApwvuEQsWQFs24rhrqtg7jzHLd7PDj6HV3VWW5RV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mu2n1BpiJeMPHjk4bD3rBLSbuugP64ofmEBKyzkjJoGScjL1kn8uRnqaJfGxd6ihcHLtAfUzJr61devTpv9aSDV",
  "key1": "4hcEnMeW4ge3y2qBWBcNkXw2aLqfgRoWfp5DQDiG3iD2d3Cbuq6MWvrdyFciXT3qcJr71r4QiSuVrdvzp8wtXE2E",
  "key2": "5xRmRXZx5DRgDPsLRhDA5tEX5XrPSoDveQNnPE7Nv2G6MrY36mBhChHnnVeZ2m5qcRDZiNEeCXi7uvpiGYYhCcVZ",
  "key3": "3RwtYsX4YM6UceQmq9y4A12fBtrqGDWygG646rkCysWvb2XkZEC86vf21cSjSRLa12CQxBBtLJXT4hULgBsSNEVP",
  "key4": "B42yDuVgbafc8eB1QcXjByuG6tb9Sw2hYFj6YCiXyjnuWLH9PWx4SnjHMU7Xof5CRxVW1DEboXv3daexBJYSUBr",
  "key5": "494F6kzGZpDKFjpB3gAkMuxTnMSjMd5W2FcFLgnHgtfoEfhbLP36gG1QiYpTcMBCaBG6oy8uYk5ehPq1Upang8ci",
  "key6": "2M3Q7uu2NYrxtAcuunZ9gsS5FYhNqZFWdm6DLvtA2D36UEeZ4YTYneZ8a1nw9xjPaJShKzaauBDSgK1yzsADtCG4",
  "key7": "3BFVH5qtUb6XbW5eh3cVHTZrzWVBj51pvmTTudchfU1LL5TCWTncD172xcVy13QsD28DLrF3yWcAHfBVxs1nqJ4c",
  "key8": "2RveJr3u1fr8Eub61UteQv7pw4oRDhTq9sjiECZp3PLbkx1drUrcPaAvF5EBnD3befYw35uKqvUiLsuh9Nv2hWXq",
  "key9": "47NQEquTt8S3jaT6DAiiJHeAZrEbfM4A6qG7yBBKhsZhWTxsMXeWHBMH8yfjMXRvwAHfpW7VxgaQFUccdmHfcAqm",
  "key10": "4hwLUU7bBD4WpKtUpeG7BkmVGpKMV5CART57zfb9KKSKMPRGNJTcxk188yZY55eeYTVUiLJmaJntXENXFxPXBRoK",
  "key11": "3ucfoVHhjRuXAGrwqe3MzHJYwwjBTDfyPfJ4PXnvLpNs9cMqaCsMEcHRo48i82odzYipQ1owdANLrhxCgKiAfrqM",
  "key12": "5dH2gecJFoEtrKBva4K3DNpgdSVHLxjHnnKFLqJ1jB7QTUXS8bLj57EoJDM3NHTiUx2vcuorUQxohCbmWstPEqCZ",
  "key13": "371CFTqmxcpk4jqt2w7DPV2Xva8HjnkvMbH8dPNUopyP4NtiQakYMycJekrDNysutKuXgNMttivjMbYe9zTHAfzB",
  "key14": "5MmAnsKmSz4f5MctzDNWa3PebVaNHXa4sxqwb5vytrzkHMJ52hKnTwdF3Rydufw56fh3dNggoTtQ7sS4v8km3oo9",
  "key15": "3sMPch1Pk7szzREPYv5zPz9JunbEXN8LvQUx3gjSsuRyzoDVFZuvXfsnjxjjrqkFiGdH8xeCRxFRV3A3pU1irCWy",
  "key16": "3FowXjctXUSbepmhTr7A289hXAv9uhJcfiabFrmTAkuWeqYbp5NcGKXqPvZ5qRnzjqfTyPHDpz2W9sHpuutXnST9",
  "key17": "5VMpmrPPzuZXUijChT5EXj24ecdVhVhaV6n7JHhEU1WJ3XehFDGGLMEvpcMHd3DTDe45zw2ajTV18tPB9x4MkEDQ",
  "key18": "2m1fQBPn1s76e2gqnsNSq8Wn4WzKQMXvM6Zs3mHE2TtVRn7daK8DmWAZ38QHfUoHE9S3MUZ9jK6wTivSYmiGdewF",
  "key19": "3HZRFJb2NnZ8yZR1H4x6NByAo5giqrDhSrLmpiXKBuaWVEp8nZBFQZxwfKuqev1oeo5v5TpdJBuQEdgXqRfSz9LY",
  "key20": "2iK6XbGyiy3WEAALD25uCRpLMsyiEoQc8XeoSkvArBBydJSGQnHba8TP3mtx2YLqVWVQgdT6Mh4CkuxYm6Ws7ZVY",
  "key21": "64ADfVsojG5bUUNJrKwqPCJHQMmNr8rgi3a7JT6TQe8NucG6UAUoH7wwGNjafQjMPuTcjnbZcroeVBmu6XWgbHpz",
  "key22": "3B3KavAa7uyfRzPp4un96MgckEsLuQw7efHTSTwArZffRamKbGnpMQ5oeaNu4Hp7GRrxQoaNiLri1asQyqxy9HTq",
  "key23": "3TFr72FoEhp485SgwukK9u2zGXhiB9r4v7wn2ZFoxmfyBLQxavCBCCCaJRGq75Y6TX5Z53sSmgMoVziVgm5Y17rz",
  "key24": "45jFrJxS163mefsowKtcAq6PXXubbZEQ3bLR7QTWzVspaiqaaJiHVEvX6BXvWfg5NndKs26D69RBTm69jd62teJU",
  "key25": "3W5QbPqEk3AFzFm9NonjVrHNx2g4uL5vtD1gUZ26Yw6vV48V3Y6F9Pq8XDXT99DTxVaNmfJhhdpqtNLMJwaPwUir",
  "key26": "3r2qfZi8KiFLXpfpge4br1hQYeSuKQrDb4ieb2kBoozQot4upjhzBx5nnbsCYvD3CwScGgz471rYM5YcX5jqZXaL",
  "key27": "5NeaHxgSqdrLSyK854tgEzCQHvydzfDQK1dkYcKRHW9axE3mjPRqiYw1CTh9zZBfrHtNhxj6YDwKXggPJm8QuH4y"
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

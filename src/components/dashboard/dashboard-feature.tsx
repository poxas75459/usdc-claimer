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
    "3UXSNDKDHkQnWdfceb4YLkWj9xqM4zXPqsWwQQeFfG8Yqb6VvsEnRediKeHRcMLNcQN8qRntxLYdnzNDvMbdoBWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aAtgfmhsxE8A7s9HuFijqiP1Zn63N6xyNRLAdC1Qv2DsUbVtp7jeJJFY2pQLZQL8L3N2MjtdAw3q6mfFu93eGy9",
  "key1": "2ayr5j58UizkkWyWFWjQLkHarP8gmDJ7ZVZa3FNzFdX1c82szqEq8VeBbKHeASx3ny8GXmyX481tQW5es9yLV3hT",
  "key2": "3juJPDijxEHfBvcJeLwBSuJczgDQXTRymN9SdoRcobAjamSA9prJSPfq9YxFoRhHKj3W2AzNYWGqarhCv2rSiGE2",
  "key3": "tGpXmFdaYCMb5NzZo5on4wAVyG95rqG3v8JarwuK9Xjs1tRVFe97BUqfdHi23G25xLZ5yjT7Uz1Y7599a2174aF",
  "key4": "4LXC761BE7YpYzCBQSFg2bzn4WseVp3Yio3jbsKRTpFyPisF4mNwvifgPTcGZy93a2UoxK9MGsWjPQhwXYT8BgrJ",
  "key5": "3pWqEJKC3q8QvQP16MszT9muSt7PW64bbXo4a5dxq9nNojf9EuQtEyarS7QKo2fQ9HrbLJiwfpU4Td6zNiMKM2jD",
  "key6": "2cNAGBrAAkRPNoUAjBUkwvNMdX5EeX8ctZ6rRH3o1YY3GqNGuAx828TTp8o9gpBVJdW2dTTyZmTK4FaKvFVeY8e8",
  "key7": "3j53hrjhVmzYGBy2o1TnF8moCtvkHoDyzeKxCPj5L5qyZVWfctKrDGHWh7FceYJBB2dJDW2D7Zhxp3x2DSWmgqAx",
  "key8": "64ZJ9mBq7tSrS2Ud8e1ufAHfYMGpwCq18XdYRu37dgw5VNEGiLrMjrwiM4BgV9pNFu21PQnqn2MbHYfMVKJyaRX9",
  "key9": "2R8XdaeXaSxVVvXcG2P4GFfY8svrjctARnRheGrWuxbP76SjKBQvg7Y1Y7sDqsvpV68DxsevaArtvkSjaXsdybzw",
  "key10": "29yQFXiufmbVSjgbEK6TXjHPFgzHYNNQgkSEA92yY51mcZMftmfjfRbKTtL7kYkQ4XGua9cM2kNV2iQcigADQ1Tc",
  "key11": "2D151QD5ZMM6Fk3wdpsjaD4Cm5w9h9koxPomMzEXkw19AsHWDQ2sYWusnhC96He37f9i38693BWWwix8CPoGibYs",
  "key12": "3N5oedFZveAUm7zy2J3YxeeRxe9w5TzQy9sE1G5X3iV2zgCsZYkBSd2s9GcvtEaLP9vXvqFY9HaHFY5iRMLwSGeW",
  "key13": "3ZVbut1ds3LtTuLrp4KdGfN56QWhMSq9UNTzsMrSKqwD2CGdGWNjCzRHBceLaFHe6YC1hzFwpuNZVeHzHZmDuwnM",
  "key14": "5iPNMiDmvvc4dNmH6NY77LYb9RfvCHj7VB8ssAf7yjTo5uqMHqV96ZXUHNomgieuoRcfUxK7Fa5GSwzDnnxHzxHm",
  "key15": "5x5crLWobzjEitteEPCo2xDoVQCrQVtpBQ5nqbX6XX1PJa8XJyPRBUKkkXVQPSutCELCN9dCoXE3LaJfpFggtMCd",
  "key16": "APfGCLAmhHmVEK2vzVkSJz1RNaMjRoVURqT5kQNsJVHtftmgyZC8dSbibCtq7zJBsWK6WujE7GLHM9YavvYpMxy",
  "key17": "2hDvJph24L3uVoenHJbfkrRyRyF29XVCGmFPjgQFv22AALsyCHPkgXrQZHrfVVdXU93iubknQiQXkcrpVcoLLZJP",
  "key18": "2fQEtiMMYgeXdaRNkY54QQjqjbup4bTqdcuTVH3pcvBgXWT1Z8BGcpeT2MmCvuhgtijEinNAZRVd4tQqir3sZkyM",
  "key19": "2bpdpsSKiiDwyeoiNGvRrmW7YMvP2bmgsQyzE31xeaphAfQTkyv9WhT2XSFoKGJaS1faVvbP8VvmxzeAW1yP4LjB",
  "key20": "2gSq4oNMFgNFjkdW2VykR2EVF2N3afT9CWJdrY6CrMbmUNYPiWwrxSbQ94NFEsQjxsiw1pL3P5TH5gaG5gtW8m6J",
  "key21": "4UnkBj7frf1Uo6JHfMPqD9D8tcnG2nssC45dFo8T3TBHriYrbzmYDbbwFutLBjmyELKnBoZFogTWoJarpyy3YALx",
  "key22": "3ooSQhS7GGMVVS4ekvBjqZGRmn2LNpw3tvHShzpyn7dMftN6JtsG7dqAdAZ2YCZU99i2giuXFzyLFYvDmm9PaxmU",
  "key23": "4QabhmPH88z5LEgbmAMC5cJfb8Nu2Xko39c4fNDrJG5oHb3H7VdHbsHKv2FGAXiHV9RSzmC5d8xvnhdExrp5gpdm",
  "key24": "4yqWh5y6H7d9wnZewvdLq3cHrxJD7bAhBD2KBBxd9EfCECWeELyvZqGdDn8PL8XF9NTCVgXH5ZavM3NnyCKFYiFX",
  "key25": "4zQGWUp164RF4G2nRrcFe9F45S35X6Q1fkwq9RGMV4NzjfN2EB6RfwFL1E7GYLSYi5FgvZ7sBqsWfoi5qQMTCT6m"
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

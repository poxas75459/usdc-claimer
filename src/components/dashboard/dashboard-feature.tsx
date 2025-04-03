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
    "5JbrNi6eSxGPkjDh725gstjqNMFF5qsoyvzZu5N1TeHaSiM72HCUf265QocuCHoj15gLaFgvNJqBZLPAMricUzYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hHJgWKoFhRRVLJSXDCvWSvhSKnZRepxA4DjqaxaachtXfLLWaUcpEQTQUEcWFVbWBWAwug4g6pbtvmzQtbLfxu5",
  "key1": "3DiNNVLyXCZx66mGiJgJncbShMT1nrzseRfx9LDZfVvxaJ48pm1iAGa1kdoCxa9TAitg5sBcS3HUhufTK1vz7tXo",
  "key2": "iGkGEpyMpec8trMvV7fhS1Ye8MZHjrPLsb1DKKQqw68GQP5cU8o5KdeAwewAj17r6fF8DBJo9jqBK3K5vdP9BNS",
  "key3": "2CNJoFo3vkc6QyQppV3FMYKy3PobHNmJxzTKJebnqs2oWQsBPfTioBRtdStaxJ4dy7BFbQYfbNtJwL2QwM4HxuV5",
  "key4": "2pH2fWYXwAYBhy343tZxwSRYqyvMPXVKP383gctLPwdqWnHEFkzjajXWUtHDLHcSqBpKabhvcHCS5Fwsc5Zd2kYS",
  "key5": "3kN1fEYpoMchQNkkcaT7dFdaF1RrZjJjwZDbX9AF6VTSkyCW3iiX87TGqrRCyuxeHZohfqPb6PKfUecTEZwS1sft",
  "key6": "4x5ikm9QHQ6phSCCvGZ8QvfRn9d8WXegwgbaZQadY6cpxwYaMnjRz1beCmZigw6ihVShqqo5pYW4XAX3KZHcuwpM",
  "key7": "YPmDU6BAJwKmVJaiaev1bNxrPmUosYGWiAWgdQgq7HJPNLyaq6gy2w5FPx4BsnbRoiCLunWTJ7P8aFsg8YeFPb4",
  "key8": "5oHnav6VMa7ervG5CfACWxgGscvdPWR7Y1QH8fMfjhBy8snihLwZV5gj6QjrtztTmbDqPyFBnuJmRbp3uYyc1oH2",
  "key9": "42gPkv7ec2M97a6BU9HafkVDYhf8UPcBvDLKDRfgU3HYjS5C5jjjSXWrRvWjiXAPhEQoUcz1ow3Wq5xYii3bogeR",
  "key10": "4vnfYFgWxQdf8PaQY1mHiUGGvX3kXxCJmVUb9yVUZx1sUYWzUopet6nczZvTGig7NV242tK4KvuBpew1ZGYUf1m2",
  "key11": "5A1d4voJbfzdCx8M7DgqmU9DPSH9HPEsJasjq6Wz3zJNNK2kUXq3sdmVmLJZS5XNu8GTEiYJoenTWYg7dvvDaTm6",
  "key12": "Wg8Hy5GpyfAg3imwtZquxhuHeYmLjSzgKxfRS8Wp7mqqs8JETQRg9QvtarYjzv9QS1oFXDzz2ZUawwqjXw5qUYy",
  "key13": "ESAQjRgyxGHbKX3ZWaPYSck1eHRTFjXPdKspMWeHjMyF5jeKrugMF5nrwLWcMdp6u4tFJw4iXDCqJV9aEDTEfvX",
  "key14": "LiE8oRSvD5Ukx9Q6jKMP6Mw1dGAErZ7m992qDa9rQwWXJkqbkBJK7gNFzxAxbP8neRxRmH8Wovvi8fBeegdCoWa",
  "key15": "67BvRM7SDYrCtGkU4qJSFSRbP6awQG1H1hFeCYYMoLssPwF4SHKAfKENKvYzYukZynMataMuNyrHHJ4EHiqmiexp",
  "key16": "3KWffoqToJJU3YJNTN4MjwMUX6dpadAjZr3nhgfvJkZVauGJYapkB7zo48JYxfBf34AsinLSNTAcjZYR2KZBAT6s",
  "key17": "3KhenvMwYCSpVGSvuoxUaeLcxjHsomNFmuSBhsMNKd4s7SXq6T4DEA5zTBXLuMxkLFRv9WSo7qo9bgLRYnmdY7Yz",
  "key18": "4nxowHiKoGz9ekQoMmWpuPGug3rZqsUD6Q1gzjT89YGKUfWKSBaYSf2NQdHFxeADiTajfNwtmeEBjfizqmczVEns",
  "key19": "wmRxJLyuMSd9WPKcJAh2a3v6FejKZSFx14jpPLyWEuFi7JHKzTMiaxs9jDK1zKmRCPPiefJhuSLFHBv1qXKyoeL",
  "key20": "Xgx5a1FXWrp8wacPN6ou74bDEpWGXi6cyNnk52zNKJSHP2kPEvfXgWTfB6in7Ewth9eEtU17o5CcrXnZdARxCqG",
  "key21": "2piDbNNQKuNsenodoLLvF4EF5n8njU6yuj3CRUK56P19d3HqX86V71K6MjYLgPRbmiE93sHHASKN7osaJ6VgmAHd",
  "key22": "ychuHiyy3cuGD3eEi2TMQbggr8LVcf8dLaVEhEd5h2oJeNdm7u9pogoKBDSCMP8niwXx9CkEMZ17NJwSwsJ9jVx",
  "key23": "4QaDXD7CJVbq2CPkKzC2gwuLrPWyLvnn5nioAv78np2eDjVziDkNfDieMpVTLjU7NQtrCH7XgsHUruhPKcG78D36",
  "key24": "51MtxVXkctoGWx9zhHG2Xpd1d4vzLcRxuHej6PeQ6R7NZ3BeFPFtmbDUYz25nDvfPVftrvxvW9DBKLrsTT7NjyHC",
  "key25": "2qnBGTW9SEEiHDLAv9Cyk9uBK5Zcb4gojzWNFy1SiJUJi21mxLNsCSLmnto8b9zHgfcDnqFJtSsrKhNryUMCTLLP",
  "key26": "4Hw9k4EQGCTLvnK5gYbCNULYHg6z41YwCNchdnHH7yyhoSiqNEU6gMXeUAuDGhNeCx6LpSztYTEjBomAmqyfKEG4",
  "key27": "5GVJSoF1mtf6FQTvkExJGs8YBpN7PVyoatM1oQKFEiGEJ7dxap65HLVbcUfpa73PnRZRjbKKSxWWfKPgwQU2sKSi",
  "key28": "7a5RvdB8BnGpztP9NYwNGXVXYiQGZAv9qs5PK9HxCpke9jKqmhpdawtETrB3XVFyvayWQcNcYCkNNZjAFWH8vLR"
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

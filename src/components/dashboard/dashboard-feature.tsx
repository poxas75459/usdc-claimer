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
    "2oHLdmCDN72ozrxskKC76KPHfVjQWZMu7BAB9oa6mLVAMJFDzysLopuK4b2ArBXPvwgqXX81Nd3k7heffiZM3dAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i533QafzahT8nDWkZTv3Zzodk2ftApSYpzWkUgUjvuZijBNUDJwp6UYsw7GhXa4vwfiqyAW59QGPA79QABKzh2j",
  "key1": "52XYYHyhzr6wnyF9rRa5VeX3sPeuSbiM6HPb2mqkB7nkreSiJRryvjAhzDE6c2baXeaiNSGMZXivMSKCji23Gzkq",
  "key2": "275PSVQ29Xbu5onqizVUFx5bvyZq2HbKzBzcLXxRS11zv2aDtMaopW3RRS8toQv7yXu3NtL1DxuApCu8rxf4MDcx",
  "key3": "4PEtiXGsY2UaehBgTouxRsSPdD55ft3aY5YX18pfFV34aajyFL1DfFpGczvK4tCjem2YxHRaQiE5mWLqoexerh1p",
  "key4": "5s8yX3hvrmnD1a9firDCLRZo7GDVGd533VgGyC89ZRZ5jhAdjvqGPyc4h4ZSmdZgUfotn1zNMgapbMkTBwaUJBqd",
  "key5": "5Rgjm4yKXU7yJ3xMtG64Nj6TBKYuRXPmarxuhNV2M98QUYimff8WocHAQLXs8kvLDXoD6ymoWHtozFQcG7YB1GEB",
  "key6": "58A96kdYKuMRvGRExkne79qae4j1z1HWYhQMZr5R79hWmQ3iLB5UNn7r9FdcJFrgG5CL2ZQLnq1GsiNHKrtMvoJ1",
  "key7": "5sgkMNJvvwYjsoJrzHJks1MSoSdvbnDug8x89yxyW9eYGUKVX6VwdYUeUWnrU7Sycai6ptLy7bjrFCgUES6KwYYC",
  "key8": "3aCGjUTJwuuRqK3YJzFv1UHkYaVu5nUqmkaNc1K2LZmikWXY5F9XJp7VYoC7QRw1mShtm7dWK5XVZncNqT8ujZYh",
  "key9": "Xi7yEdZFbRTc95zk22Qpx1CYWbmzbYbDTjDnMDbCFHopKiFUQfwsiM5L9PpJGLwoVa2VAUrhoGkGHVAvi5JD9eQ",
  "key10": "bvi5TyU1GaRAUJGp8gZY5xChE9igW6YJhRxLuaEPRmTH57w3T9bCFRQLxb4c9w8Zm2ov5rZFDAGF2ZxWesDhjjk",
  "key11": "48GtHSgaD32SyJinTVhdj1XzEpPHvMaCcpbJVjuRQKXHYvEdgGJHsNBngjLNaS3tCSgUHBBiqmwr2x5KfiEKCs5Z",
  "key12": "5UF3g4mk5b9gVaQzTUbHzGhgpcqBhe5Qihpt4dFfXMyscRXLEYU7yFxkFokZSWdQ2qwVfzZoMnHwehSfScwKtitK",
  "key13": "5MHDhN3XXJ792tf2vKf4acBWtPzc62Xwk2hs84inAmfyy2jAoz97mzYbKjRzBWKx3saZvykVWnaiAzj5pcdJb9YK",
  "key14": "66tUkEcAYMnRJ9mJJKkN9XV5uXC3f5KECduMk99r8yMxS6StwvmkqWhZfFAJgScvMrzyBvgdmectnKnE4YRYmVVX",
  "key15": "4mWrW5VDZy94oGaszBeXFg2sX7BRHFTF13zZGNiwSbSPvSYfUMMYpzRVRg4YbixJC7NCQ9TQ3GW8BdMgCmTKYkEm",
  "key16": "4ccAikHwdXC24cyuvY93awhtHcLjGgaqYjt4QR2AwRaBxmuJUhsyjYpknFscXFZ7ick4hih5eMJVnuRqdXSitUe2",
  "key17": "wfCyqUWaHQMFPn55GvC9QnErdqjLmGhPeBbWDvkquKS2E8L1MTZe8u4EQG8U2mSyUCoBrrxMJSvZ7SjFrFwAUwK",
  "key18": "3SDu4o3SUaUnoFjjvfJtcuXzm7mcmNM9B1HqMeDa9UJbVEteCbu5vD3yHSgoGxUGcyseVwJhLDWfE8eZhtz4hsnC",
  "key19": "wZe2CBqqYJRkZP3f71VDhj6BmiZxBQZmZoXLhEb1xTZRfhzhL3zwRPMMobopGPLMEJ1XfzWAMCbbNLtbWGafEdo",
  "key20": "4WpbTCQFsbiV6TNY6cVQEmJTo2meFvcScFNmR89nzo2XBcUbYAesJej5NXtNDQCMtGJbgbQVLreA4QKcXLrbRK58",
  "key21": "2biEA29mFGEqrtR1XwsqyjzvEREMEsrmUTrGuUHwqb8DavPePLPdHWRacCkxfnayPA9J3ns6x8XZn2ATKkiUFuwY",
  "key22": "4wD4HZ9NUbHQzJUjqFV4uaTuzso5B3FD5FAkSBSMn9egEWL4LPaNPSa6SQQi9933R1c2HJ5itiZA1DfXAGyk9VGD",
  "key23": "M7jpUsA9hB1xoCAgTashcag69BSYxk4f3QPuEp4GchFmwYZfkba9nsNxt84aV75oBceQcAjfodxCcp95Qpsay2A",
  "key24": "3tzKEY9GSA2n8KdcoUisMdjRPcyAYt5QnZo2eH6tihFN7CJq2EF7fXk5X3u1irSi68wBcJuWLZQerdMbHSarFTV5",
  "key25": "4Xq9Cf1Um1Mmky53ewWmkAV8nJJqz5NNAqKUdCUBdAHJv7DSwzwuRZPYF2SquoCMHhPi6EegzXBDnTaF3f1mQRqV"
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

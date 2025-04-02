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
    "5jvCD2qphsJoqUpKw2ubtdp7JKcX5NycTxKnrfGW8MTKH5LZwcWdKwwVd6rLauhoNa82uGAFtagVR4MwHMvRHHxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2udpP4TXmntMzkGq1CfhYUnFVdm6bJsyg9szQZgJh994zuB1YgqkXs7KtrKoNMnVgTyuFa3oDoHrbx73AAMpASzq",
  "key1": "3CseiDuMUgk7BvrQpisFrV2YzejgJUe1V7kUpbojvdc2UwsuKKmFvX8ekAtS4zoCV6mgZqUuvq57YUKXmB9cFnff",
  "key2": "4wxAm6gwG89fH8MwNA2FdGqr8QcZCMXswKGzyiUDgLvjfnXKAF5RALQsjcgvJEbynHVcqQA58baQFvkHdjLFVff7",
  "key3": "4NuU6fcWdbV9Z3XvYG4EJjT2Khtof5e6xoNRZvWwyxUvdpc23mtRwk8YVmcmLUjRDf9htAMmbWzobx4MH43bDRP4",
  "key4": "VNxw8BWtaMydPjJiikL3vGDKb1Dz8EjFK3tPXg21Neafbuia4vRdqwYhS8DuS2qFQpAeYdhVTgTdto4oRkAnJPb",
  "key5": "LM5RGi6xYKhEjM4wPUDuLczjnkJHDqC8Pf4jKQKWG6mq2GZkpbQ9xkkssttPgyaCKTrsBJ5kNwktJgo5uXFTgsg",
  "key6": "33D6EtiywmMqneMSnLVqCyCC2CSAieoiCvb8At8sLuK3Sryi5Fvv4uwrvouJ79jWmm4St7Lbmi1XXNRf1Zye4tS8",
  "key7": "5LHW4QwPfF7e5P8xbAFxwAkU1sRsbfTosUNLYhSX3YQ9hG3ad5thp9MxjkPz4SaGLKNfAM5PnyD9Wf1zoNi5FBoc",
  "key8": "3tN4NFm1o6Nvy6ywsZBPhMkrPGr7CYoexDt3aTbHbwkfbkeo6qeXXBwksSJhnSzuWgs35dK3a3HsVbKGYjbP95V8",
  "key9": "345gxGJBoiX2qjybxyjveFfNRKZSNFJRps39ujUCzBqEofXdPJzTznKk8Pr1wWAA8UPhhxXBfHgLHCRD9DeKrJfx",
  "key10": "5a3nQLdeN5sn89F1VvAf5PKWuUUcD73xL3r5hYMV3F83A3kAUVAPR3QsV5yZQfZeBmTAAE3CUAXroF3qKKd5XjPv",
  "key11": "3mTdVnE3jHRPzR4ejUGMEtCQibA6mWpWHhTQf7ZsDRRpYdqRWMaegGNfiR249VZJEyBbxK1g754YcFsrre1z3AXd",
  "key12": "5RpbrfGk1SayEeqJD5GcdFX4jaoXmspbrBAecZ9bUX244nxtW95vKdjGEBynatwW8Pwx6kr81G8XRN6fbVPJHn23",
  "key13": "5huvxntu4RxCavSbPJt2DwqBP2D843CDHqsYsey5CzKs59SSz3CbiM66s5Ws3gbNM5jRMZ6TPsFbesZKmA3rYHsp",
  "key14": "4dNyW5RbBky43N7Z7BzGwJwx15QRiPUYhfDLMkHk4zbSkQJ9akfeiMfPqrhWBNLmd9cVQEgxnEWCYokButXkcvsq",
  "key15": "2h6m4BXCcrfgnB7NwJpA4VA2yadbXBbSpen7VAZNiLhJ2eEoGkgpK4EiHiywHYkY1BtqwX9bryrSyGL94vfS474J",
  "key16": "2uBmVNwCeNFUpwmZ9WUGqM7bdvdfQabjPjPQRwGHKC5NKeSSNbyF2jqQVoPNoaEBFcJM1tsmuWmma4gNK5ynhAxL",
  "key17": "xSCt8xVNvhypUiQy744VJcTHwnUj46mpmbsHsAVy4w4erkJR6BZGydKGJYGhXs9gQ6SNjZDGaaznjmJzy4yzQqz",
  "key18": "U7hm51PoHiQ2tYEdwdxrEf1pAmMKbFeaxpsRc2px5DQyU9sZovAq4HsUtDrBkTQQobH2pjBVnYm3iBuPvFz3JW4",
  "key19": "4gTg8o3XS58uToKne3vub1QM6MyJ8bVzu1vuGyPo8AX9wodZDS24CaYQuM9TY22AdncN8263YDsy2h3DviYGJuUp",
  "key20": "5dSGCegpByfvqf7akJtjzYDNmh6XS6jow8WdvCUQguhAjoN3pufrBMHA8TN1DqGKJASB1yZyBieYpUhZ3vmTXnm2",
  "key21": "4F9aroWT3oRpobbXWo68H3w7fExD6zxJwE2VP1aGvbzt4eaAAdBmXkejfQ2y9HWHuAK2D5fwPuy7zNYBZY6N5Wna",
  "key22": "5nMCXvzK5KDqaX43f4unzuaeQhRXoGBhaMe2cDP96rnnwkWmhAHQZps1eSfdnfmmEdkUsauR69fDfywHjFuaRmkm",
  "key23": "58zEFcmM2SYcAuR62snfkjouYRgj85WhrQQPMQnhz6NmtrHEPx6rod2C42byr1621pWiQ4aUQjY8Y611L1H5KTnb",
  "key24": "VYLz7prKuqHvjqo9vHv7JMah2BbWqcDnkdXQ7zbbYMmAEEEkxW1xXtuPUkNRttuAsLYzN7VmMzwsLU6Wamh1y3t"
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

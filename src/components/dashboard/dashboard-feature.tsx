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
    "mUTbkVzLMTKGd6Kt7QWM4Fda4He5KSWrJreruCJsDJPbHj5hK6WQwVgYNAYvVjyPKLhC725ghx29aNMWqwDeb4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dmYNGK9Sdu5yYR12zNkDGz1RnNt4h1miWgLpQfVF6EwFJ7Abce5b7RfYyiWmfEyFnnUyUywTiXj9EnjL5HTRs74",
  "key1": "3dKJ9GpJa5LEVebc667prp86mhNDSc5EJYx9HVDJMzZJmJsH1KxyeKPJKedVoipsQQwLrDG4giSJN3J2Q2oL5WRd",
  "key2": "tEC9qf3fkMJzwBzs3gJYWRHoHTQsZUcrVw2WzFnpZNNWeJiJp3uFee3PepNBEegTFHpofJRahxBABQfHFZXSEZa",
  "key3": "4F91b5ggqdsz5xCNDytNct4sNRCjQWEytK8RA7RGse8G1Qrbxx5sW3HHMqTteEg9tQoLVK78aUPr8HDagyNF92q7",
  "key4": "3MTk58BUndKh1GCzv3kY7KBLnKn3G5JWdJ3P5R3p3cpyv2wqDm3pkUfKs7qygLBdpFGjbk2DK3iKrCv4MMbF2gi8",
  "key5": "5YrXxH6XTM7Tw7EJ2VZ2Cm2fEXNwGSFzo9L7EkGR5Ss7NV1w3F7MQMyyfEjLku8BFzD9bauq8xYJeQ9M1McSKQZm",
  "key6": "1ktCQUipXGyJ3BCBe6my6oqrKvKbij6EPxmL5SUBAk4ZZQ9AVHy2ufrdLuaihEPhdw6hSm6kCpQDKe5FmiY5UBQ",
  "key7": "3k6iT3ySBRbb2cJZcVFdUnrb8LZG8w9sZDDrkiBdfNpcN5Gh6LF9HPR7fPAiFaa7PxqVtNFtLJi6abjQiJH2ewBY",
  "key8": "5ZRf9uJh5mNfFN2HEzg7DVovBeXsARjqnS1WCRMd8Gn1zmt4md3gBoH7oynvm1u5gomxjsLrznCm8TwQPRTSUBCE",
  "key9": "2CcBRw3sGmdrXh38ohgCSmhVW8LDj3FeN1gZG4X826nxVVk5QgqbWpj9yCEP86jCpAERA3tuwdqzdoWdZjFV7JgA",
  "key10": "4bUX1qVWcki8dCLjc4PgizPkAZdyiQF9bZ8rrLLN2GeEfKN7a3hpxnt8E9pgDFXcBsJKywGYPCyXQdb3LPszx5k5",
  "key11": "4Y74EGwbkUcqakPHCZwmWvfPM7wERKmutLYoaoCArmGExHftYfeB4GGB5KVt36DUtYY9dGqshY18PdA33mjEfcV9",
  "key12": "2MJ8TMg6gNuW86BSeRhd522EviMTufmcFWhUQ1cfM92gG9pMJGc95UVBUkAN2PktTLPt1YEKAoowfAyousQxSvLa",
  "key13": "4iprypq97SqAQwthmQWkZAftodXjbSQaw86DEdAauqL3bngLJcPFT8CnEouDM7FQnViiWPVho9vSLu7b73SiPdLS",
  "key14": "4q7gxQEzrDudbW28EGpqdDYGLvEE6vML8puT5awiLCrtuwDULdjMMqXfUDFQY2A3dW49bk7isSUYFd6gPm6ee97H",
  "key15": "66JKbLLbpwpF1bEJhEm4m8FmKAXZw1Lpkr5EaStGnG4AMVB5vPQy1uHVUsp3QsMPTLwnq4Mmq7spVqt4Cp83ESU2",
  "key16": "xmfSJzCV9fetJZKiQGYWP9fYqAyseCabhHXzx8MgU3bdPSy2LH2tTYkJqsTqw6AQXj6Pk3pAhoLxQMcKHCNmFCE",
  "key17": "25FR46ZrEHErjKrebRWxKeEHrdm49cx6T4GPVqzhFL9ddXb5u8D7EVyuHQr47pXRjEUzr7bKwvaaSL9cHJ7ym2G5",
  "key18": "37sJHwqThQhccG1pZWowXxYrY9QGWe3nJBkZiKDB7gDtwZzcT8wDJHZZYVWTit872h7FLBppRUxUhbtKGWM2NwEe",
  "key19": "3fbqxqUwJoVYT5FiAGB1QUq7uGe1dDof2F53a3U8c383uHSJNaugoheKDySYqRbHG3yksUEGqdh1aRRhaEihW8P1",
  "key20": "27hU5L4BeESWayU6U36AnKzBq23GVLnhqWr3ddY3ae1DfmW1kmMfR138vWRjojnajV6m79q63wJwwUKpxd5nDP3E",
  "key21": "2xaCXSuzbzcZnEk3cpinBzzjdELjUa7tEnN3372ijvRszNqnTwtntAAgUNgWE24zTYfcbof4Fjpih5QfNbf4YUAE",
  "key22": "vSB88f4cAsZnpD4fvRCLwjpEjxfPJYDWZv6Tno2yirmGG12qU5U3eDuFKEkbgsSHsPegtTSwPo7WtNbM6QHvhna",
  "key23": "5sThFbLLFSTn8isnzYkrVP7chGg5Shds2g3H76FPDtpRgNH3hS4hMW2sD455Xs7zwYAz6e5ztX1wQoQ6k8eya3yA",
  "key24": "hqmLghsrwT9UsMM8xVVXoUtnLwn7GLqezXZGGrBdWPMNGEL8xnt2xhqDsaGvAvAL1hRuUs274tse7BZEhfeS9F5"
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

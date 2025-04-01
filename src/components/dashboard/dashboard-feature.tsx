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
    "5EgBzj4MRqvpW9eXBV2N18nH7gyDxf22yU9QBZubSEnAGouMVmdiG37gimJXGNXM1XkczBptFFBpxFK4bYiXka49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Vr8sHAedgVCHnoeVjsKgkxpze1q5JrYujfbxNZKdB6qM8uka6LS9Gr6j4nUQD5vMsdnjKgnHa4RzdCd3VG4gqy",
  "key1": "2zTJX2VHtoM436rCSHKuGZUNEWUqC7ySBP5vTXay15sjVwxC8eWHtX624tYDEVhAV5XcukRhvoasxHZkCL172RVr",
  "key2": "3QuV16JxKJkbAgWnRc7QcVmEEUDgBcB5aPfGNF8xkaNgXHtorarRbGHRY78WCtvdJoYJNkhYY1P5YZe8xoSL7UcU",
  "key3": "JkWKS3URi2AX6QPzkEST9xPbKedEPyiDg3WUEaHNbBWZ45dejPBJGgaPPS8bMgBhRsckyqeHCwC3Hm6W9tcgtxP",
  "key4": "57TmFrehmNtxqoqh758gkN2f8wg2forfpB3RmXQZ1nc1v948NUJApYnoc4cDMLEZuoSzypD4Tf53Mp3e1dSpDgLD",
  "key5": "2LwQ9PsEidzerV2TVb94UcWv4dVNhyW76mWDQHxVqr27xAebuX3rZx3ygBdyR984vqGmeCChGsFRsrGoXVaBRgYf",
  "key6": "5uJaFnXx7Qvwowrxm2CjS6kk5W5j5vMfZuY2BaKBHHdPRifPEo2Gc1hnnF8dy6WtZQ3BbSd1dRZGqzuRR6nwdXaj",
  "key7": "3sCfG7KMkjsPG3Szm7qwvuUYpxRaPhaEp1i7eLvKt8CiJez8X6AF2bjtmKVzhRgrTpri423RTRWGxEovtRjyNB7a",
  "key8": "4byR9DsrmoqKBipYRvmtdLDCM2uoYdhWJCYEkyMw2rMDt7mZxAGd6x8vHb2HVXyQfoq5XjmDzKodc96Cdny4TGtM",
  "key9": "f41G3o5BvTCYhqpDbM5HLXfiTbhYm1Zu5SBrxRJiG7SbqASHwKcpKXhPJPjxiXSEzsfHC4nBbvL3Tws2YoDjvx5",
  "key10": "5EZcDLYahoEZTtXM7vBzsHftvQSUYKj7mPPEwmFDBs9P4W2rGSBsnXcK7s68peZdC9Go3qjxgaGaKPvsQe5DHPiD",
  "key11": "2bcraaSwU5TSQFuSPJca3kNCU69Wj6ni88KdtVYT12waSzffsvYfsw17RSGQu1i7Wc52YuQT77s3RxvZBJH7oBCq",
  "key12": "4bMcN7KGDg8aKffQ2dD9ivY3S3rhUGb3tcszX19Jxvz54m9TMZUym88cPoQHFZ1VWBJ16MikGJV7LXzdtGEa4gEe",
  "key13": "2w5zNWkFXXGWNEwaHBMTgzwd7A1xvXg6uFzUZ3wcFgey5MkiAAHXo2bVVm28cegSTox2FmBWb2a7V1wVhzY6Kabg",
  "key14": "4qrZb3XKCaVG3Dzo3fpSQDtisczddL2RcoUDD5bSRBRkKnSxamguPTzcTcxaCTHEfHbRLDUy6xVbSSSWAQEGUfHH",
  "key15": "3Xc1aq4GSzsMSmSz5PsfhyeKrkEwa8KHp1SrGSdvDHC6JZyLHocBuKte28yh1YEL3uYuRhUDYLpiDm3uMNHFDxZd",
  "key16": "3CHfVT9kYJRRiHZ4n9odLUnjhRB5DvGBKiK8FwSdZWLgorYKohyKiseHc8oWZpXbjk5KhU4mDx3W5JPUUsXes39H",
  "key17": "2WJLWXpTBuEzRxqSawzM863zVvXFatn8TdMXzshjq1zXMTGuEyTi7NNwjdU1eGupXcn8dgg5AP3u2nTUQAbTLjcC",
  "key18": "f3je6U9ETEK3GwVFoado6dei2gYV7UgPXHCVnAzuD87QLtTGrNETeBsnFD4E864mmV4EHwwZAh1tQHTNmjwmapj",
  "key19": "2dvM9uWGKSXVdrU6zgiQSuMCzMa3VU19qDGKrGDzQR9rybwyxVxwJwLwCAap4CrKg8SXHyjwhK1mYF9f99j2x7Lh",
  "key20": "4n8rJCStDGs7zYkWSAt9Tv5vUyyqgrMqBJLnV8fDRVc115i9Xd8uDSha1NenBfLVc9nrjF5KAfJmGctX6CdzqSx2",
  "key21": "FGL5d4yYVuxBUKxNarnezfWjRecPxbKpGPTDbbhWFwd4AaDTQQe4MPT88sbJk4qvStP8FcjmQRE8H6TJxGcZna9",
  "key22": "4xvocVjVwsJP4TSFHDfrxCHVypqeWgK8zyHB7rYZNvaRvqt3t759RXTTL2RqRD6dNYc8my1ppe5UfR67SqiBNR3k",
  "key23": "4CV7bEKYfVJRANDoAJZ8dZXxkYke2ng3ghwL1JthAEGP3kNwg9REGQWEeLtQzEkaUoSna5MiuejvjNv3agGCUzQS",
  "key24": "3WonvXGc6gK5NtfgJCWV8LAKcVcxaKsqUFxwPSxWiVaDK5cfakmD1FzCpXofvNuBtXa1aMN5LsYGDo14sEy33bw4",
  "key25": "3zeyehKtraY3TGQcy4t5n8sjyiaXSZm62ZBCnCt8Y7nznjrSf7PYU6cMEa3HEjnzUf8eukNHaUHu7wCHx8pG2QWH",
  "key26": "3U681L5hqkXEoddRiro5ubFZusSEgpL7qhzJXpjHfSqedbEeR5DnbrBx8FaFZbwrRNVKxvmDuQJAFipe4HcQQZeP",
  "key27": "4JApgpXN7yEM7gcPwG3JDg6wi3tB5dnWaDAKa2KHcbcxvuayhFEufVAoaQ7wQoLtXnEhmkQE1ifMHpdMevbdtZ9E",
  "key28": "CNSbLhDV3cVFjA2Yohe4bsdp38P8gEQ8rrDSBk49k6nwYyL1mT2Z4aQ2NHFzJBepS2GeLUD6piGGVNzmZe7yYJW",
  "key29": "3MFFwcv6QUq4PHE91AmbqX6jSerbiaW7vEVwXkMe4aTxNMB6U71D42fF7xL6dB2iDTS4LhMa5bz4fEJ8KPUoSp57",
  "key30": "y5eK7RgdHq8FUL5123LGxmjbcNVLfo2QSBTnHFvHujvbVNEFfAzY4zbEweKCK9nUHSWUzrXdooeh11qCRReUs3d",
  "key31": "ETyXB5ZGHaSBazGVhfMbdTcgJx6fnPciM8RCXRZntDEACw2hAh2h3U29ECKG5TVhSV8VuYn4HXzcn3axEmLeBYN"
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

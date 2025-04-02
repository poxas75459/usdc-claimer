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
    "Vao96i3B7s1u2RPMdBcBShFbTqt4kmKshUt6TKdnWv4zhUZMntXT4rMQ8DV8XEhigrDaKtVfUFHdUKRQWMeUXh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XV9zEhbPTp26rKUaTZPNLs3WmWcmrqTNheKszUoF1oVBRKSqDPbvsRhZuRDuw6kyXhyfyBRDTEE4rCyoPijYR5C",
  "key1": "4HHdAHTSvidgGXPvcFZdnkZciZc9PfdohiXYE8P6DqK47cYtHNQK1vVLyBgn6seZ88ARRUh3nUSGwBqUL5uMZHh6",
  "key2": "3NQGdcbSch4jcLPZk7wW5u8dSGTTCzxCbZhbYFtDfxLGFkZP4q8CtCtsk4obVkDY9YBwRubjFcvVPbfx6nhe5p9n",
  "key3": "2fNMjdH85PoRQBTdRXDw8ziBFzFSAHMZZqKgM2YEaNJUyaAfwTTBarQt1fLGHwvLJjuDtuPvGNUjVw8ARQZKVskN",
  "key4": "3Wi2TbGbGcha39HiYnmttwX58yjzhDgGRzCGExKt8q4VqAP9WcDSUpYnHAi4xdbtv2SSCcwZdJXRDZbs7ZJeqxeD",
  "key5": "3ESbs3vojNPDMBi15wkH9GDajC48S5oHmniSKsb1REMRmiJo94LjrxvmZzdsmqtLWNUznrKc9K6g2bEQGvD2DBZb",
  "key6": "D2BQuzJjQ5jRjPjSgiZgKCPXcHuYPofyFTKo3rXMUwTjjGXEES2ZFCNdEA1198vfyivgizHc8tb75xovZcABxGF",
  "key7": "JeKufsYTUD2x8snBXK7x7sxCGeaZg4mRo37hC1dhDpqsckbaUDvaVMacjCx8kqSavTszoTb3CQWwdV6W2CAXdcV",
  "key8": "4oA2YkiyXWkVgwpsEZqXCACzfD2q5QvgktE5h2V7S8Yc7DRPdPzvzTcR9nNEnaVewnWTjaTw6MC8RpR9sih2Fo8",
  "key9": "4SvXxKvBbFrDPXZC8oDGaDE4vgjBy31NfoiTFoKGxggADbgsjL511B3e6FjfYG8aF4rwgMVEAfphBAefir4fHgv8",
  "key10": "4CyC6jynimzYzgECGCAv6aisPE9awJCDPVYXxqcTGmv4XHE4D5HALFq64LwuWW3LjN1kbYdaRe9SgYBCJZxS7YM9",
  "key11": "xiNXyYH5Q5Ea73Sb2mpPPMzpedVDwqbtvuba9QMKSFwbFTu7fQpAcx87WTeX17KX4GfzBM4M5hamuxxkrbqWgHm",
  "key12": "2GbB6mDCmKPrecUgMezxfBsizG8wQxZtXF6Jc7EwaaPXbvhYhegvXjNB3D4TPTqjHm5SdDYiY38sCgAD6mxNrX3o",
  "key13": "24R6GoT9xhZ6dNVeWpiH4RdGZA1iYohWtwffMXz89AK2CxDpRg4mBdhHDDgWxYd5pXboXVZgqC65tqNEcbBSkxMs",
  "key14": "2JdostLSyr79hYCy5zfkGUPjYh2RqXxvgHEJhixagzkiqgWxZya1gWvF12CKTqfXc2yFiw8Djc77Mp19pA83zWv7",
  "key15": "2366bz6hstR8fsVFYdnzwMAHG8dB16D5hnHNErouN6yPVTDgAbeBAJSZ9iGSiZvJSYNosnUgvP3xkaqUXfZ7Mhg8",
  "key16": "5MhFiVWp9WH3tXGhMRvDGwkegi44vuL4fUMNjd46kxpA8QwvLCJQU4xsVTcnoJRY1deJn2qL9ipGTQ5GcY8NSoGa",
  "key17": "5EzWjZCpwGcmaP73Qq5DtKH7ruXMvUTahFNLfxSZma6Qrsp49MjePvgT97VX8wKvh25r7jfmD7kSzjL39XhzZ9Mm",
  "key18": "63rGL9BMnysiLnFNT1HpMKmaykvaDidiYCB7dyd4P9fSZ2PRyK9USKo6qywvtXQbxuKSsCLWXKM4yuz4N632khg3",
  "key19": "vo8nYH6sFRMdfLRdct7YT96Dn5VjxkXQgP9YJbjNYZoRVXHGraMWCyMpgceWv18mKFpo4vm45sSrhrDxaGTxs9x",
  "key20": "3YjSLgmkuV2CkgKmi9sxnBPuH61vdRTmQT95ee59TRu2sXaPz9wnx1mboMmGxdFLvwgdJ3itd5cqrwdCtTJ5apsU",
  "key21": "5mj1oZpWKgLfCX9Cu881b3TBvQo8vZ2f837RBZYhJc9yWDwT2qiZcjFGJH1SrjtMemxKvYkxwTS9Bz5AxxDh5GQj",
  "key22": "3VxrSNP47JshnoNMsmzswWL92HwV5bqnXnvqoTCjRjyFPkQbRWYqKT7qAKrpvSvWWpdomdREZFjanbuXBP82E3JD",
  "key23": "2fTDKSAHmeqne4FUCmg7JYGzras59QQAcRdYyZzxoQZ7usJLbVKofPJhmARV8U7tSopKybg8xiX8pUi7CQU75Vn6",
  "key24": "4JKwXfvE8S9cezGTazuJCuShFw1N9AhjwsedJQNXZ9ZY3joGF2b9JD7QcroMQBrjTU9MR7fpgSMR1sT2RETzfvo1",
  "key25": "32uxwsScYe57zU7oq1kYVUZjUekLN4UftnhivByDT2E92b82Qwjj1RMANfaV6ChUbxa2X2Zms9e76PxZBJKiQWJ4",
  "key26": "2PmR7cQo8PoXZ8LfWB9gfERP3qVxBCkejd1FGmL7AVPdHUkudzp71P6cjiZ7YNyhGpoERDm7hkhPN5cxwJ61pWjj",
  "key27": "2m7aMkBpWpKtvd1PBkZkW8ymdny1eSqt2qpdHLZuAY9WE2cCbSugQYzzo3Ek2iDx9oF1HF3FxBu1RpvAKbhDvph8",
  "key28": "5H8yQaSg5zZFy2EMDWQDGjvQb33cPq7uRpzQgCyAGjr9ShCoNx4Q47eVDp8ybthCU4Hz3vSf3W1cJcmtMFLvr2e2",
  "key29": "46wpgLiFnVmX6f1XBiZ123iXbe8LRsA6uizxeuF5Q36pNBUUmwwA11WJpvWtXZzFXfjKNAL4yaLTcmkTe4YLur7g",
  "key30": "3QjYLZTkTvdmYqBnBuekKSoysf4UXSZmZxAp76FbcESE5PinCzdRC78kZe3T1xv2rEvRmz9nTYnePDPjgsiXpUuR",
  "key31": "2keGiRhvpSvJEVJ2BNf4ps8fNneE9KS38D1Q7gxKTiHicVZMbjVNxaL1WEhybNRSqhWESdT2biJe8azRKBgyVNr3"
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

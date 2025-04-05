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
    "44DZ4CsgsBULLvCH3MVvTxXRTS6GVtHJLPiLviSHi2A6oLSoXnwd4pDchcuFYrCao9EazRtY3AdBkzBzwSPTMb33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CFMXBUseGCCFWkWCFcRbc6tEDxFfXa8EcQB1FPecyCSoqHmBQv1SDRU1rCTmmijSvL13xgXFt83gMRBxQgPgEdm",
  "key1": "35SGo6XHSmj6jrLjWHpzaDyS31ZmC3nKdqfiHzapG51g4Ahe1xL4uPfkssR2m8ZRXowSbHuqxwPCLTucfaVYbVUb",
  "key2": "3GnahcSbBta7MztH2eybZmgHi6BaKNEQBQkXCnP6cNq2Xh3Br89CfdiW9x6kF6hnDjLjwVC2d4GCzH3SLctS4cL5",
  "key3": "3HdCDD5h76AQXmsb2mhNjK7pmdRCsxjbGTK9QR422jxNfM93kbomzwoKRvEEooaZRx2znzeaYeboJmjjgdAeZS4y",
  "key4": "Dsqs8LFcF2x1n1x9ar6FSEHZcnVn7TbpKJUttsiCSUvSB1DUX17KNmFXSKyfgAdAqKXDo5YuFvkEqLA6A1zUSJj",
  "key5": "2XjdVySadSAY9ZtWUXmLLRQTCrk2kyGDyCnw983GdWhWw7q8VkHaZaEQH62LxueKgg4VF3UAhbDpwtSBSTxh14XH",
  "key6": "25seGpSquHRyygjDhNQ759QKx9QSiKeT7ws9qbckPzvL2s1FakzuS24n5cqZtVcTuKnDCVn9Ka86n6TSvqWyb3QP",
  "key7": "5iXt9GgjS4wfkAmf6sKYDxP7hxojmiQX3ibP7fTZbXxDuFgVBCrZU3tR4Mo7jdDsepUkK6v2v6D1TQRpudgYh6EY",
  "key8": "o1AP2YfZRZvLx76k2bvr7QpHg5ksnrkG1kMneRHS8NK5sDdgX1S3DT5PYw3KeC8upvsLcnGMySwzZ37tpegUZji",
  "key9": "4q6KGbFSLT8ziCUjgBCGoEetqxJFTgwfuRaX64nHg5yB2yEsTmNmJWvpxoN1tFMoaBEjEYAJV1fCXed5S5mWumw",
  "key10": "3tujErYijF5f9KTSxeMsgKKPa3VCrnEpx66hVKKvtiP7XQxPfJsGH31TkQjUcMR1z7s5FwaxzBKJybNePX3JniQn",
  "key11": "5T4yG7aso5NJ1EKTJcUcXQuED2GGFkwxeie7dP1pZuVEXh2Nez2Wjk1K84RdUhTUUQ9eGLG1z3veLpqyVnx3xCbq",
  "key12": "rX4LkMRAfar6i5WMJvVxZdpGFGWbYNgv3i8SQ9edDGEU6vpF1GwNYztJ9TGmwXGFfZaA9aZcyxVqCRLKeym4SHP",
  "key13": "2xCXNJ839k45SguyANjiKa9NZK7HRryu7MvxyeFUuypo2dEJYLCmCs6Zj3dRqnTh96Z5ntyE8N2cBKReiMtnBkQm",
  "key14": "3Jom2vCA3VfG6FfwJU73nXWWFwBs8oNsRmFCwC7ojfzZR7pDHh78BHR5wfsYc7TDo6cX9Vne6JuyRa9inrhagv4Q",
  "key15": "257CT5yamoWJKmXapUJ2x3xz1WLgjfxj61qfrts4rHNmQfyXLm1QgTqSpWAqp754Jbn7S6MhRvHchfDFPgJWycBk",
  "key16": "5hd5CPcFUXvRFTJEJsRTN8hs3Vt8rgQS672qrBf88b3pxgPDHeuDqZDbemhqz2R7ZbLTLRDDLWUM1w6yGcGHUvFM",
  "key17": "3sxZjvLJuUtB4ETZ1XuwMJ53jEAjjCvBAU5CGT8N69CSKYt28TPhXekkCeDKyW3B3D2cBCjPWc8mraMGKBFowTfn",
  "key18": "3fSGyFjWMoLH5y9XZBo8xwqSMXJDm3vN2ueNQedWBM1iSEkx3xPe2sMF3ZdPFXV4yUB7oPtjLP6Dn813j521zws1",
  "key19": "Ci64Rmn2L7zfpP3o6APdnqt7DjiLS9Gx3PmUKLYcjAgvWNQ4J1AgWJXiD9s2u2AjWcwkKb7B6ZSRY3Q2K5zqQ7L",
  "key20": "5cXE9ohitcmH7Vs2ySaqH9bBLWrabsdMzHjdH3TD4kq67PLA5WVjUJ5mkRV8mscGm4Z2NmG3JkQ5GJNrHhZ1ZWWq",
  "key21": "8vtsxjrKxU97Yt68oESFDYDuJad7yTVeWuEMB1Zj5arbE5gJV6x1oXgQer6fgZ8ghbyUoBu3e5aKNHKHGjWuPNx",
  "key22": "t54etDzNp3rHboQVG71KtCXf3u2Wdjpnu4Nau9MHSxtjqjEBJvNd1WhNyM5UU6QTUJ3WNGTHiujJjcWxzJSsjAj",
  "key23": "2jqvodPDCjzCcvsfg3x8ovQEWzTkXZH9hdnpRCW5Bz9n3WjHxx5bY5NA7fFZhrFcqmMVvNj5UGz28mBhMRwPLDyN",
  "key24": "iyhBksTUMy4ECfmcH6oyXse2ubzQv9PUx6iWvnzNrgHA2sHWxMWAox8TpiQYqbTP8vFnpRi5jKKfLYrFV6iFRmn",
  "key25": "4LZ9DXFyYaurASsk7iFEJzwtRJBNxnPPVeK1wp2YiyiDqUeG7wpfx4s2Fks4jW2AzAs9GBxQCmCaLot3W9ob8er",
  "key26": "4x3vo8h9ozr33UUJhYBEArWLYwvNHLrugsaTkp4zYTdFWN3shnzJCSfbqt2VLWf9HatucDZfutmSn3MQjCBgtyb1",
  "key27": "5MvqhBKsUoYgm1bL5EPRQAzTbWqsyjhzRwJwyTUfyHQhGr3TJHorNCcEqtAhumJWVBn1p315qwUX9fYsX791Vkf3",
  "key28": "3yuUg1zvSeeXQywkXtN4BWBGYwVY34Ha1Ak1werxDTLP5vAD4k27NfPQ7CqH42JdSdn3sfJ3c7UZkEDy4doTV4Jn",
  "key29": "549ddWXX3Pwjkaokecugw2vr8xpaNgj6DB1niuRm1tgYbdFPkAz9ZQa2q5FEW6vBu4bH2SmtyD6Lc6gMhtZDNEKg",
  "key30": "5a3EvriMTXWgAw7eRbMCYRHWnZKg4Yjbr8Ay9y6FZygFW5rT3boPm1SFZ69YwwDajxJsgZAD6evN7oaFK444hN2C",
  "key31": "4dvMgYSHSurkBdk5K3DtctiUYxyq89vBmbvFzdtBcKGcum7J51U7hF1m6bDnwX4TDog9CdRYNHmf9UtEnpZ31xXN"
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

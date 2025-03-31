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
    "4qHjMmZnYrUjsKRHkXEo3rCPAmskHsp6Wyyz7yRhhopFBzG1PVCu63rxRFRg5G9qzHZqAujavEvB3hWntKkHdFsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YC2WeDg8pysAtTdy1poCNhKxSh2VwKy3b7XCyKqqPUFJR6AGnekRJWNAQi9y4GWokVjzaxvVPrzXD2JSC7i2ESK",
  "key1": "5Nqn4ndE1ZbeHLHnGCc5PjZZvEdGpWyRrgv8zUSiVaNjV5KyzMfbwbFFz2Tx4r6Z4eNHqppzBf7vksPbb6sitbw5",
  "key2": "33D68oWJtAT8a4jgXVRcUKU8HPaCqakDwB7eTZVGuQBffxnYPgCfqxTtqB49i7A3LaYugod8FPzB3kEvbimWDEz6",
  "key3": "4CMcNLZajfwYWGMnfvJ2PXEWHr3YG524Q6KUPQdEjHmUgsc9HCYBnk6hK2AJzf7fpg8pcvF9ZYu1c5v5gC1TFzpd",
  "key4": "xfwqLQfjsBmTJ3zFL43jdmC1PLeVeabUr1AgdBAzVD7i4CyecMzWjmbhT663t7TQUX369LeVoS5U6qJn1hLmiFg",
  "key5": "2rrQEcD2iJk3CubBJRdzkvopTaPH5mDfa48FDSSmeZp1aYbWsA8JJy9fi8xvkftYSJsMeq8v11B66Z96Y2f52GxG",
  "key6": "25NCF9gtNtxxkKNDdqFayJi9xW3iMjPqjpCv2XxjfTGHWk7DMPHbWpx93PMJeuL8k9Uv6r1i18RQG3MupqCaoLq6",
  "key7": "25Pzb743bTkAWn2STK4Mq3nMPUokhnvRegNMPyfi2UW6UXuVNqcRfrcZ4AWNyJMJVx5rpZaGZExiDYnDjHbA49Vv",
  "key8": "5F9KTTwvUrt7VZJP249US7qK6zxVrSjwcbqTtPXrzEZeNQLuoBpykrEeNrcicHzmk4QTm9WhJTZV5sqGmFQxdRFb",
  "key9": "4s66NEPxuFhS346SbKwxFc7fT6vfgWRoMzh34kwP99xY1H6QrGzpNNnpc64ADXuggZads1znvBqcrnATmmXatkg2",
  "key10": "4iubzTaaHEm5yqvDiCSXdcTAaa1LMdfjd7mn5nGgebmEdiohHYV1jzvRS4LV9CadQ2pRPYctQmTzgcD27bH8tYBY",
  "key11": "59wziQsb7wnv6zeWxKuDPzScP4Sh52vaGdB2ygZjHvgQL6nDqXzWDTyCQ1WuNSDs9HKEnFToynG1sW8aeVNoNJF2",
  "key12": "1j7KinzbF8239de78QPGGyPaLUvZU7QWFaRuVcmSwp5AB1DB7S9ddmWfR98H7CJh13iXfudUtneHoGMEG37ogjk",
  "key13": "3Sbcftvi3RkDGFcQpmgr8tn5ztgSDcKLNKRntDDX5HEshvah4QVf6nsiNDfS8RvwajwknVfiMtBGfteNDw1h1UuC",
  "key14": "5zjDdJ17NQfAWdsfYVcRSAyJNuBzXUTWZp5VJHEqkUPeYDKS9esodWYTWq2zmy9JNFhfKy62WyXrLNTVLFyTNfKX",
  "key15": "4ZwV8fN3gHT4ChG52VcZ7xJ9aUExMmfKKUKkPk6U24NLBvF7LRdffmMc6QAejooiYjo9rBuuqQsYysZrX3NvPUoJ",
  "key16": "4KTD79ZqUgXic4swdoKffjgTTayRaoPsWY4gM8JCzyKKvKmqRfjKLtShLQGVpdGgYe5mrPSHCJySzc68PAZer8x",
  "key17": "tEywyiB8YCqtSC36nqtV5DjzQXTw1TtEkCGSJmYnA7rSKA48gvacQxGoRCeuwHKitwTJTK7mwmPHwJnS4LMv26T",
  "key18": "4RHcEdFDXCTbJKRT9x5XsCBDLtzmGpxLr71ktyV8wMP7Srwwfv286NpaGSXrQHQDTaMuct2EjHM2Fo7PjJzhR687",
  "key19": "285yRgNcuvY3nFxE9w1MsmbynQV2cKdB55cawAWmFd9AD8qArwS3NfPZNQzgGJr3tEovJ22EbMzbRr6dWwiq2aae",
  "key20": "2v6ALETGh3cuM4esQqaCpZh7GmSdAuM15zEswEq7i12vJNkMEszJEvfaNkYw2BrvyXHCH71AMXSdChB3bfaLyzQ9",
  "key21": "641zYXQ495RgJR8GCCV3b9rVcHGCDMrZ7mJKjgZnpGZ2Qx7WVZfwuNhXHZWyeQuUr1Yge4tb5Uz6mmrSX3soqff",
  "key22": "XZNFGbt9E27km6ZGRZhgxpMGe1445fXVgWP3j6zZoTbpVVJxVk5rfq1LBxoZUGUWTQWsmf2JSBdEXkfwcvFzFBC",
  "key23": "5fA8whV4piLfYC39S2gGAVJs7WKoGDvCQu1umaY533bNU2ww21jn37PJor3VyN1JgNBXFR8AZQJDERb489gMSmgS",
  "key24": "263PiN3g7dGSTWTJewWZGLgD9qGB1ae1tQHFBiW4BqXSU2K59WRxuLi7XyYpituPCfHsDPfvJtFz3gG8WtMuYgbU",
  "key25": "4r1vzzJDygAwDHZYsoRrn3MCmnECauCk7KKoQnZuoUQCDpSzMNXX7qAVGCcUHvm5CpyNkhncr8tCxig8MyFoDJpv",
  "key26": "4bztCVqwUgLLr7oeReyVbB6bj2SG1cqfQJAXzQrusakss4svWR28NyL5mwkoBa1tQGJm4wDWHKRz1DeasBZtySqb",
  "key27": "2DSv6VZkTrNyjgcnPDtHrcejQch8FkGGRtJTup3KAzdoNz9CyoXrg8zTB3mTWEfsvL9BsR2g4mJdomtYve1iSkzG",
  "key28": "59PoDkLPgPudz5GXa4VVtbo14U6XU41ynYmgni5TVvxfCyjVrZ7Krtd9GeyiBVB9LF6CeFY5RMoV4sP3D1qWv4XU",
  "key29": "ahsyAZBABjCEbfHmBENXFgEJb6ZpgxiorAHj1zCmSUCuehxGv9tXJMFgZQ6gVbTcq3LrHAAszmj5uSrYHn4WHfR",
  "key30": "3BqiYLCGvAPjTB2nFSc7fCVBv5GEY9KN2nQrcEVJLBCySjK9knbqHZHDXW4eReuZYL3RE9uxPqBLU9jNKo3h6mMq",
  "key31": "A8FduyT2oW8P6o2hfVVX65Qd58W9Ck4CNwr34WjpVo41zjydDYe6Qd4U5UqvgiopBzU4SR16sAfBossbVbhqotr",
  "key32": "4WUdwfHxwFyEn96SR5hzw9R4chm7yVC77QmshAcJwNdwcyYwWfG8oduXYsdZEyomR1BHzerRBgTKkjNWo2AhQMZ4"
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

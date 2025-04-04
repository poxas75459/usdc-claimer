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
    "3VUY3fWpSfie7SXGVS8NsvvfGocKzk8hUhZ8m3JnkpeTXNhNaFfKHZSMwHtn9SLo1b2SxiPLnJGWNs4VKdtiyEJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DB3HvbkrVQqyJLuKwUiQZ9F4nMuieDF2TXzcNM4ZQn2whC2r8Wi3cV549M7MZQcDpgaGMGSNEtF1pSDe9m2F9dC",
  "key1": "4Pua3CUd8tU3xnsoourN5zi3GT45Rx8VrMJebEmU4UujFgPv7DVcFr8KkroA6ZeVHhtBkrwqtf3UdhgUWnrit196",
  "key2": "5rVn3mwme9Eh6Nxo6o8jdZCp4GDHGZji3rEDA88QXq5piHgzU8QPjA16SFotFkn21ZgMkP2uFCokSxd2pajp7gvV",
  "key3": "WXmUZ2fUQ6rsRJs7b21gaGwqSqEgoTHBFkehXs7Z8S5yYAwhzgxU6XDFNeJySDR4QnmYfKcjUxphPCWr6X7QyQr",
  "key4": "Q6dywDgtXFa6yRseQHj5BMxxB1BxFVvEUR1vnJLWcSJDHvAGH67ZxtWr5oKpCmzFv5ihwjpActZdfNj6gQ7W2cA",
  "key5": "5j7hPxKLo9dmCu2Z5mUzwyAQwX4YNs1AR9UeUT37vQkP6hQWEhu6yH2GSB2X99UM8tvr8FbqPXemPHD5fngCxBYY",
  "key6": "3b246Yd4cNpviddtWJKqDob32rPhsJyrRcYv4rRPQRfS9DRxYKVvYbzyJU5a12eGhgw4S3pZFqm7s25DJwyi76Re",
  "key7": "2ACYXG2dqjjfEH88s6EPPcaGQfQVzywkzttbqakzSHLJtB3ZmKazrpUpmdR7sXUqksLpjr3ZqzWkBsQhq9CnWsAz",
  "key8": "4VRDbZ3mNKG5aZWDg8Mu9ysN4Tmev8LPbgo9TtzLwHSDN9FhjDQwqBoiDbt4AEPiQLTjeueXg5xWAnWPMx5b2LRQ",
  "key9": "5J3YvdEUjhNMz6hL6AZusRyDQ1GW6sCV7QmsbXfQ3d7Hk5wYz61ASGuYg7oxarLHtEyeLKZVxBqssAx8MAfsfAHV",
  "key10": "3AuxqmV45nL5AC3soHWJYBbEsABWxJqVr7VxeZKJzYMqtRt3bBHN6sPHTcHRZawQRQKvJRTJUezm3DF438rLkbzD",
  "key11": "243Wfja1woyHBkZP7puaCFquBwpYCCpP7YLF8JYnHiQ3EPSp6yedJsaEh2wA64Z1R9yGx7iRBq2L1ATNWVFFG1tU",
  "key12": "41DWxMvUT17mKcYU2ZhQmzWt9tLYX3meE6f6Bb6gsogP22i9RoLhrmKkUTmztKVS5ePceSxqx78CYGDR2o1B3mKY",
  "key13": "3RmXD6TyPZVjhbqycWU3EYduKyRxKTSnkUvtFbQzzmpq7SYhqbVaLHzSthxysbDnuSy4yhhtdSDtikmNxKKg6hRJ",
  "key14": "39E9HMYksAURZpmgXdUYAFgkzjBUqn1C28frUqKY4ikiWELakWv6iaqBWDRgeJsgKbsYHnDS74XG5mf8UvPuerfy",
  "key15": "5hoJTMsWckjG298aji6jJifMzVMDR2U4AavZnTGxqUmS2Vq4gbdnNXSWDCBueRjxvFUb2KZBqMDJ7MQ6tsMzK6U",
  "key16": "4dcwiycBZm8FtwgrX6x6qx1d1wJ5oNXArw5j35xbM8XUinzGjTydSJcESXPCWhhzL2woZQowZY8oTUiVjztuPjar",
  "key17": "bLJJXBTVtzW8Dm7SmyQiubuZgJevVSUFkdPJ8X4FH5erj5upUFHyApCQBjai1bFXnYHt37fiBiGdxRDd2vHs7Gw",
  "key18": "2PUVM23nzm2t7uxPn1N1ZGDrrcZQJGMgB6pGEki44vLdiKBnahumjvu8m3RDFD1nTX1GE2C6unKSUHmyaV8J1vgJ",
  "key19": "43mpH2gFmsPDCMymE25QmnMLjJy7CA4YRSyZmwgVUpW1SpdAX1iKb4c8Qg4isForcrZpq7UNL9P6M2JZzhrsqY1W",
  "key20": "2N2Bbc5knPzdr2ckeCn8QasWv8PRFAxR8opqb423TJUC23F1PsJJRpqVmifzRqaa9KG6aX8Dw5sUuEgTsNv34dKy",
  "key21": "4FtuL2sRew5LXp6kN9NLSDbN2TwrC9J3WuwnWwLzSHFrJ86JNyrLiA7M8fq6A7QZFHwLpqX4Uqa5GsGWP3Sr4B2N",
  "key22": "2gvRcYtKMZ7DpM2CwHt4Z7PFnjBqj9om7VeeiHJp7nZ19gfSSDiGqYh6xeXXeZfDNszWSg3rURmVAbNZzgXtqq82",
  "key23": "4nGis6Lg7pxDf8Py9oTU2d9s5pZCb8ikbTs6UfgrDKv66rnxC7UAD6WmsqZAPhJQNQMK7yrpk454RyYC21vuzft4",
  "key24": "5qhbGEmtj1YW99tdpLH3aam1GS1AzURR6QiP56YtEFpEpJCCcoNL4TR7FWjJ4czvdTShEV5vykAGFmTDvVphgBh3",
  "key25": "3u3ceQPtStMoXFLqnJSTrLjzqSrecCTUk6WD1i2K3cAgjnzKEEG1DSkB1hfom6g2Q5jb6NeJCU4i5irMwsYYk7Np",
  "key26": "3HsZKkkf7KU7r9ks5WSv69AdEHYQLxi21DbMm9xj6KQ3UbnZJySfPBnHeiF5t7fjjm2kCunCmEayMBGrNR4tSonJ",
  "key27": "4tY6h1yvUQDAopZ5AWvYGqFgKifhL2h5UbmVNwFNLX2cK9m9PFDy4GixpqbL9K7rK1QiPtPYmQw8v6pvatFCNJyZ",
  "key28": "55BJcVDAFCJ1YMuaade5KKteHBMjDC89QCGhCgZyyQmTpVJPxLB18vYThSxeNbKtamWRJfRfo5vheEPNjxxVS5TW",
  "key29": "4nV6Yr3otpS9DBQi2ssVpMWcYfDevG9bRiKqVP6L2UkhQ57dg2CHs8wEk4Xwxr6hSNRjtpRkw49hPyq8PQ2R51Gd",
  "key30": "3MT8P7Y38H4b74FVQFY3otESJ7iabShZgqvoCRbbfEACrXpztMGtRP1X8zPnRkFHbJuws18THRwWRgBYGboqmprk",
  "key31": "EiPhsQDHZo42zWQnV57tUf4wBmHarZKUXWvoJVLrz2mHdQx39pgrMHNyn4apdWiniSWXdMUsMGDwYBxFBY42qGh",
  "key32": "4NbDco6NPXVSMvoUVXg3wQdY7qpRmHotyw3VsFnFHZ75t1dTr6XkCtZjacP5QTPfKdAbwd2DoU5q4Rs5uURNw1kZ",
  "key33": "4k6sxJhiK4ijtW6otYFGdBM2KbbecHJdGxto8PWeFQwJkcmkBGWUQJHxUuZ59jGd9LUqfNcx5zPShTPUPuqQqoMZ",
  "key34": "GVtZjeDUF6gBHiPppobeos1J8zPf48Gp3VvMYDWiXPVmftv1ASwWVbF4VuQSwSDLeqPprN3yBebDCsWQ3KjhxDk",
  "key35": "4gqwNt4YaWDn3DxpxFhzFwp2MyckYk6PbKQ655mBWumdYahNsvusXUJWaGfKL17FXtFLTLH7hnL8oa7DGFtojmhJ",
  "key36": "4gNXSc4D1Vh4N5dsXp9vq4iuSwZYGQLhSg5w8vjT41RpsHPmw94hWDqiFQjgLnhYWLb8SgygcRLu5f2P4CDzPBg9",
  "key37": "CJsTf82r5bYy9iuRfu5Lug1j9577jMC6R62o2g1zR9DknELzpkGfhVpqhitnyxtbXNGNZaRFZn39TFEQoWuuypq",
  "key38": "eBMxbWiz3SbKQCMxZe5iCVAMFXK54TMCWBGoJtiHYwVA1WTMUPbi7ayDijcmjrVCnsUeXqWrjUNzFc7Uy8quJHL",
  "key39": "3CyiMM9U9PFyaeUxm8gpXjHF7xg4SVLCLRXCcsGWAGhtfMZeeQboaf8HpD7KEbBrnsqbrZC9fwEzET8GhzCQ8s6t",
  "key40": "5zBue17auqy29eMxPFUXQpadUNuaTQd1eioLHtMtBpkbZFmBBTkx66qJznRWjkwo7tkWS7PS9vpBVQCs7F95uzp4",
  "key41": "4Cdo4krmd1iF3A27w8wGq5tCspdHxKEZ16nagCJWJgiiRB2FZdDewV7w9nXZibvUT92AgDBi6P9XcvJzC8i6juYz",
  "key42": "4qJRjfnEi9qPcpx7nQnBoJvkNwVqMoT2nw6KnvWK6riyrxaB8aSPvSg5S97TsCt2t4Nqk5YtuveDR6nFM3jnLmVi",
  "key43": "hnTgD8qfrLYTziWVhxnc6snMENJxwcu2NnnJqUa3jeRSVikNnbTd3R6VUmx2b5qTdTwR5Le96WnPXYPUbehGPne",
  "key44": "3qDf34QT5oDt398GdGZKj9GhNa3eMxUe4CjX4UTGBqETa9DJRtDKauuHcdANP6DiA9zh6T1twW1ALeWTPcuFFT9H",
  "key45": "3BfSXuiKKFTsAr8Kzgi1LVndE7da5gzrS4VY3MSMqLentYmYMD2LTomZWsmyaL7cKF1P2bSAtwruwwXxq7mcdJ63",
  "key46": "6aVB3qgjqZmerZpe63VsHHwXtBKYYpJxU3wszcYxZ2mWyN7V6uC6JQTAFeJikqbb8Jv34RLiygsQPbtyPEdX3YV",
  "key47": "2xW6vEnh2iY2TvEkHRpE5RtxN8hPRm9aUBuJW8LKxLwhNWofCckGVMht5aa7D7Nq6ckwyVfxCMaTpzDc9aCXawEw",
  "key48": "4EHA8m1tCFKA3KJCGR5gLJmvwtJyV89m7XJ21V4VXHeYSkVQseRdLZx1GtS6cRgautSNayx28f5YcpkMXbfuceJ1",
  "key49": "7ttVwxpH1zSNBYYTKZqevCKAx5bvgU9LaTU8FzkwCceqMVke3vJQYVZsYbyc4t7nu7q1jpqsMXC97h1FoJVVEf3"
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

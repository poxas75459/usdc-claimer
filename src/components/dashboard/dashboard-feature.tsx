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
    "8yJg6aV8h1Pf6bq6ypSBRfHktRfPzrAfJDxXQabfqQjfY7a9d1zbgNLr3zUt8NeqFwhd8A57JXG9gBugvu7w9ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zMvDguUEwA9Khx3y3eLNP8mnzTALvsmecrQRxufLp5b927kHY2W4e2vHFXQgC7LDJHBPMENKuYoJBCYU3veq5RZ",
  "key1": "n76ET7KQNH3mmFrgYhvJpZHs5QkCEQxjsQZL6emDzRjTxgrT2CHWigp13DEpypwvVER9pBMJFzkZJMmnGcKtrZV",
  "key2": "3ZTdCvYgu9Qk8Cx4NkK74EbJEGgDDL6TTMufJLkiK5Gw3YCUxpAZ2Q4nPstsUrzNazB8TdivqtkXGiVW5uN9RLw1",
  "key3": "Gx4cxoUqrryqnrKqrjRnSan4nCEgz5Hn7j5YZsPKLNWgjKoMRkcZGUpqNkSGVbMg9g1fsG3NwubCaziVs16BrmL",
  "key4": "2gtGGLbTZcTMbsm14koGAGC3WKWuZfNAHxCjyAg1R1sM58AxTCnuBX3Q9Mzht6pdxdWfJYyF6uq3AquS7dzmFQcw",
  "key5": "3DLeGHYkfoGqzHzVfpweYsrHQsQ4fmWwiDh9oscTZ476bso1x11dvKoaA9nG8oQQ8iq8GHh5ZwwJWCfugBDgPvu5",
  "key6": "56N8tiitDEChPA6T2CKep461cvWKZg4ARw5xKaNGNKsLJ76bhT34c8PnBPFpNAmduaV2UaTieDByqNXiChaPYjtq",
  "key7": "qJ5RrRBFuCa27xmDEBdob1tNCcQTVDamJwMueuhY7vjsz5mZECaW4AKzxrYh3cN5ndLokwan5FKvGzAaQX91YNX",
  "key8": "iA67HPiiBgCoRRWrtppzmEPXvEojwrew2bpy3Le2oEBWWcSR1YAP9Z9zg774Bimv4ta9CdNT6GkJhUmycAvKh2U",
  "key9": "61kn9q3YjWYUUh76L5huLiveBYekYsReAYpw6se3v4EWvHHPU9qbAbUefsctZZ6HyQ3xfZe1NxNjN1hcBYDowkvT",
  "key10": "5Fq9v18RSwkRqxd9U3hDeLwZYeMmRfDSu7yNTdthD48eLhrKDWogx8x4hVbqaUmFSRv2L94fK1H2BcoPL79Uvxsw",
  "key11": "52wyFpJHbQsufbVfvJisnYPVqpQQp1FkjhhtfW9do2VWQi2YjLNQsMvts43EymrRRhdY7kqUnzvBhXfM5x9ER3EZ",
  "key12": "56zvkcjy36smKnWdv2C28e6kfvSN1e8ATiWfMDvAzKqmZuEciNZiaHvH9g719DfdVDPsAaZzGNZF5MqTJ4BPyuT1",
  "key13": "2RL2onXukqH7MfCTJhkYHuN5G9eRjBJWrKDimyVwte1uo2vKX2jx5xuuvaEMqsvXD9YofRFLQFCWQkWaBCwmL8er",
  "key14": "66pfELuTrb1pA3kA6uQpUrRxC9F1ED7NWQVjYj9wEP2aJMQYWUtVWqSWVXztzjYabJ5yqS1Mi4e7XNmjRn8gAUXJ",
  "key15": "2ANC5zSoU6bs7SVirKh9MdhVrYn17VPfYFpdrHWrh2YU3XdQDZoCBfP2jMcz8LaV8fm9R1hKY5nvw8i2FLzqBQEd",
  "key16": "eSbB2XaUvcRZxu4S1uaRCZwbnup9f92prgFnu7AJpUY9ZpQGL5oCRxkz3KhAR8ZxuQGdvmY32ix9q4549FupGsv",
  "key17": "2CXxtz9XYhG1Mg21VfBVPnri7fFNmcWuQoCSp8mrpdCBZ8DRgySVFnT1eft4Z8LWYFQUcmJwsrZcC1Zderm7crbV",
  "key18": "4ZXmKH4h4DNkkWJcdkV68uPzPn6u48sJMSfrESjzmsZ4whuyfR9Fs5cU4q5WHEti6hGU6Zv9wBmA9aSkXrgq2Eit",
  "key19": "cjKLGfJyb2TXg3rS6vePk5mEXLqqU5WEgkW2Yf6238W5UJNCjHqgn4EHhPD5ubct6scyFdEwMJrRUiLYMiDwygL",
  "key20": "32YYUt3hkAECvMWv3gvGopfMGq4tU1BSum3okLaHKvMoG3gRGSSF7R9pcnvQMRCXvsNii8d2VvUWF5wJR7KY4VuC",
  "key21": "2ac1jXNKemsfwWB4wQCLDLwHGvE5d8gjVGeT8XBg12vabhF3VV3gXEsa45A2fZ1SB8VTNKjtsq7v5fZkJfoTRphr",
  "key22": "gfPxeuHxVKkF7rvvxvEUkBCa4ahqnGpwn52xhRypwNJMeMSZUxAKGmXUmS12xX8J59gsMyZAEUqkZpFmUSGfmzA",
  "key23": "vakcfybDz6RKdUj7DYA6rB9JNs8f6kkGi72RazpqVhmtq4XATRD6wk297QQxKAxae1rufsD2f37uMhy66AcYdAK",
  "key24": "61Ft1JvnXpVEtQyDe2DDv9x6J687Nby3E6MWszwyXiVv5jR9y3xMN5gg4EDmWmgUBLbynMyRgEMGxYQAsmxJiNrR",
  "key25": "4NDBsjyko82AMB96RD3u4n1utJfwYr9yZVdMGWeBSFAAJtisB7zQhYcQrtrprnCGdKpPSDB6J6wVvK8pMcz6xnM1",
  "key26": "3GMXkorGxkGr9RhbkaXWGu7SSqDx6EaT6FfZ3bPgx8ASeShRPveEVJVrpKKMg4vF5KVp8Nz7nUyorHfsttNf4iAR",
  "key27": "bg8QvCaRhPJ1JFeQvYgLnZE9RmjYbsKd2yGmaxb2bFoWhNUQiArcS9yNnchVNKa1tJD3rsnbi6BpYSQ1v8svFBG",
  "key28": "56GbEz41B21tPMoN5HtRJAp89i7s91mVUoqNDa152P8YpbvZXU39iAEqX3swrZHHdWuijf6VaXCqNcrWe5kYhqmQ",
  "key29": "4f3t8mCYxUZADMFF9SWBrsyWF2mUwvQ1MkMappokrXh6gbPZrQaXiiT64g6uf35KvYs6jqPkJ1dxPmLNPDfESHUM",
  "key30": "fNnp1HJK6UEwxV2LQSe5uqmqPtq4Z4eokCFJKKMpcMig8HzrtLcFH8nhKoMVCSUZS2SFjxRTHaLbjW8Umnzr1Zt",
  "key31": "4eEhQhoP4dsV2E6wDfn4qb2Ui7tXDe18VSm5rYGgNA3dzXnkgc8Bc2MLrfSEpmE47nqeHKNepCM3WMgx9q5aAH9G",
  "key32": "8zfxn8uLMgpphATMF1W3TaRCtubmfbLEeUFihr3X7MC9UJpynLwdEYQMSZ6sBcJtDSVrA1o8vj4nAd7e8JXQmdh",
  "key33": "5SMTFUtVLMd85kiHwc1jFnAVHEfb8HpPQtJ3uoVXyXoKEhvgULBzszL12QMi2WNzHaW5C1kbgTJDdBZaDheQTWVM",
  "key34": "4sTGPrf6at4zMGF26vCc8pohHbYu3XXP4YCCfyLKCp273k1svqAN9PzfY4qVnzXviN1XAJC2zsXFc4tDtVF7V38G",
  "key35": "2LCYhcXkZYnBzEX2Yj1X1WqiUNXULn5mRJd4n3A9R2u25Vy3gJthzBKgUTFZZomQ2CfnCocjFZsKPFcGbBQKMdXc",
  "key36": "ZhP5DBUFTLC2pZXDh7bBSa9Xapg97H7xhiN3qThmD2ivxP5aWzVcNgfS3p14XEnnaKpAaGj2fSc58WYR6sG4HJQ",
  "key37": "zcDmWpMaotAgQ15n5Wy6HDWAHThXHSNVH6cbudjcASBGChgc4XmzHtrb4GpwybbqFzgkgocgaUZgB5JqvoMoMjR",
  "key38": "5BVNmk7LgMxLrKSYSq9PbXxREu9mWGJu773ALXZHgduW4NK6dYLaXWBtZvF3TKAjst4dRBrwEVN8eccdqFQ6v1Ka",
  "key39": "Noo3B6ssACEF72ACD2KVtD3YmDR7Bh1s9Ub48PqZ9wwVhaY84Y2GnYfX5z5HFFxGVFRbqT4vJR9Pu5XRi2h1M53",
  "key40": "x85PVQSg6v4AAL7QnAjyDzfSzKWjBUqUDTfFjNTRN8MFADsVj8VG4y4piTxJTqsnKvbt3ttKfqjS1W4wn4ZewYN",
  "key41": "5KtucBU5fm6Rpf93WSXExixN6ynPWnHUj8vVyaLUujeyZcmZ5oBzJSRorro8pngpqC3MXiH95hF9z4RZULykNbqC",
  "key42": "37LhfpTHSga67hJaAGk3t79GftF7og54NkKqTqcogXiH12Wg2FUsWiQ2KUuu9Yze4y8ZxWK6NXcCt8FukJhUoT8N",
  "key43": "2yHJnvSsjj9wB1f991yezsMxQ41GUv7qXGsmgpzQKXyeQeQg1jtq2Nmb5VizWXkNuES8yxnpbCZ6XiSJTNYkuu69",
  "key44": "5kapeRHSpscs8sXXSDynzsbxxFaVy5RmxkukkA34qxXQZawTTTmcUhfsgLAo3R6if8DnsBync6zudgPpE4sWCarH",
  "key45": "dvpTvSQLrajPso9pAsQ44fzth3dEuZpAiXQSY3ovcDsas9VWeJhhZg7hCqwD8VeyQn5b5qPwMpUaGJcDX1gMq1n",
  "key46": "Qw5MTTkwAg5142P81TcQoCHfeyBVqh7noGVQKLTsETBYZJjXx8SSvP87GVocXdbxfRQMvmvC35h6xu7xsTQ6FAJ",
  "key47": "38ShYmtA9ApyGWx9KwryRVsyT7fLmCbRdDiiwf9mdveGQsM4mGFhrdFDXcuGhdpWSjVmiGhdEzHN5cpKhAK7Jpmw",
  "key48": "5LA879kYxPLDgPQEfczbFxdcEWv3ajMzh7QPHtLskEXizj1S5pci1AQzYbMu1rJUsT8f5fFwsQzfcAfy1ZA55s5T",
  "key49": "2wTQENrJcZw2vu5AtoWytz8eANNRNhVCUoEKbLZUogHSqG7YUTj99gKVfVQXuNZPsg5yWV2ScURA5UJkhHsEkrN9"
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

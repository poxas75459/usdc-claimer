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
    "3xYhkgAi7X5EWnzssJgXbm9RqseAjgkMwDA5NpMJcPgWV1u5Nbp6nLYLEhCizC1XSwdNyrRsWZUhh6E469ARcNhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u3ZoYNZxFcgrwkTWksQ2hJgeTPSjb5ZAK3q5H1opAjad6rWcv2ECTA45S2wXNg1dqBh4TVTfrg4DzsEDXd11mix",
  "key1": "LT6RcEULUpwJrCJmbKGyoY4BancQXahYwZMJeFreLxoZnpbaVKEARMZjkPyCMo38NHs2iV2jmdNan7NnK88D4Zf",
  "key2": "4LQ6mJudLmQFRH44y6fwXj6MsDBgdrwB6guVnkiedjGNS6E9dyGJD9cMMfAyJsRcR3f1VQDXE1aCb8KCV1aPXyEf",
  "key3": "2S2So1jHrXysXrm5CoqDX2LVgZPvk8xcS1KttWQMkNb9s7RiH1CM8ynE2cXSWJkBaxFaDjRnq4KxgKSUUkeM5Zhm",
  "key4": "74bHjxwSbjdYgeqM79UmCxA8gJE5S53t3Jn2Hpbm479Pogjaomy6Pt94WkZHz9QpvUif5AdeMWtKH4uKxmbXpFk",
  "key5": "4Dg8a7UxjWGoQenUhJf2NxGJrwcb8qAZNTbnj1DTCQUMdtHvpRdoK6HdrB75jHHrkyBtypJiDR2HpQyyeCvqiAJc",
  "key6": "6yrK2kN9E7pyPFFREZoZaxRNp97Lyj7j78WJ6fRLDjAJKokhyY78kmFEmDtq8SKtYmZuMchE8LhTTpMP1JXjYjQ",
  "key7": "tb9ohdNP3hj3fYUEPh6RQssjqCLC5oS3iqFke5AKjaqp1oLMATjSKDLtf9nmjCavxFHb2X9v49m3cyVcRGGAWtg",
  "key8": "2iv1EvkNo6jqnVGUju8Ptpng7gG94xzUR5bWdWhbWWwUfoAu7Nh9QHXb9jit1nEm2WfSRQkd8MNnZrhNasHwhR7w",
  "key9": "5AX6X8JHPMvimLWkYw8BS3LTfJB8AX1xrSah48C4mdr88tjxgQpdKGhvmoWWMp9oFUU8HtmtHjSFXWXafTr56EL9",
  "key10": "5KcphVnaBd28cVuW9KyHK6hyftS9ZC6NfVsQXiUrpnsosaYH2duL5iomsTjn2UjHfoH9gcWf13LS9GBDedGL5pDR",
  "key11": "5zBpechSH7ozn8Cr36h8cPoNNmgfAzZGuiVqEcrN8DsSLfJrNGGvELXH9m26xD4ofhbQMGqfjBcc3QRGxEKhJGAY",
  "key12": "2KY845ikaCfMoYPm2rw2VcmRYRroSZ4WjwV7rB1C5ofjeqFQcPZF2UiPi5FmfB2UJW19vDbn37EzSW5bryHNvdst",
  "key13": "xVZUCNrKh53UNgVJxkyyyF2voJwK9D4vTrFrW8cXTY3j2NRAaCfMoVnWhkH99sjK1bSP5kDAu1YsRny3r22cBK6",
  "key14": "498S2aikueBkPwJ5Lg9NWkY5mnJ1gxsq4mXrjhGXpoyKzjYk47yTX1nMttyvj5MVgkBhWcukdTbCWUDHtTmnLeYo",
  "key15": "r26oucBWdReEScWEuoJGPke3PJzS6aAoCmnFUF61dc3SYaiPZ3wceXM7Gdsjv5T6q47tr4VvzXQuEHGgDCyNkyi",
  "key16": "3cXsmN6mB8JQydSFDazr715dmJEUV7b6wY69pZXkyEpJWYVRKmWxqNP6NpodSc8KiPd5ob21aDZeZaHJ7RLT6bzv",
  "key17": "3JJzFDLaCdwKmvnS3EZQEVjt17k4oCqtsrS168QWF9sodF7F3CrpP5os5WgPzrYBTxGVwxii2CPuZxfR4BaQVhZL",
  "key18": "4ioZqz1YXKv5yJNMZjBqbtZtkRRvQwun56srYdsErCSv9mPtejbxRXRYzNnWsEzXEMZNDbKo9Hr47HQz9atWU1kj",
  "key19": "3qM77KNrNM46y93KRHFr3VfEgHXPUnzdZZPf1yQJX5E8JPujC27YKNxnr3mRHskxbPodokGgaoWPH5HWVGkqW2BN",
  "key20": "fCY27Lr9UaDjRmRTKSxsZyqzCB7YamwDpvN9kvBaVXkXfZUkgNLBL5192XeK6a5DEewQMeMLz9NUuH4fXV4aCV8",
  "key21": "3zfQXLfqsfbKkDuY4NZHi64enGhG85i9W5AwVTC6xY6i4TMKtD3QQJkRsXaxkbiu7gkdiHSFAWJ4daavxYSqx98s",
  "key22": "3BPE6cTgzLfcYs946TqRSFUdU26dDdHCnMJTyMWWTdzDm3dkr72pB5TSy9sf6rc43CPsGi7kVckotGwYREkbKk3L",
  "key23": "ssBXwhDxwBWqpTxpAn3zYxCBdsBiYPLwHK2aTAwbYVGupzXqB4pBoNFwwGyLkdwoo6Mth4CrCWUkKCNW8VgV8Di",
  "key24": "5uq2XsDYTe4TwREoVTg87o9UDP1TwFaZC7AP4oZVBhH6YEgVvaR7MsoaQKeZPBBPBuPeKEqpkh7YoJ8QwHHQy9tW",
  "key25": "58LHActgZh67D82AhrY224BaeGHmRm3dJcYwpFKg6m7WHdNHGHyoheeu68Smy6Ero4FcAPbu7ynz2414kkptTXTz",
  "key26": "56yD5RhVuCZ7q8K5dyWW81o3Qkm9gRtDbYtYfNpB9Y59AJ49nCFoqHgdBzHjjasu55yWeey4GAys1qXh97cg5CJd",
  "key27": "31rBWzDXaqKnNQhQtxkx4phqyp8WATKvyedtH8YqjpWRaB96HXNufNasJAJSPXLPvZgEdDrQBjMeGnwisLBsNpDP",
  "key28": "4QmoGhfQcoehaNz9tNFU4SBhkJTKVbTKCfxNg3scMVNGC1M1ZjnFU4nzaSMJo9dndWn4sSjZw56jZa84iicAZhB",
  "key29": "3x7ZMwiApR7TT3L5x31NA6FjrqXosXRmcTZVFqoWYYXiLa6UzdqU21Jwhs46xhru8RwvrD3z6qHQhg5QGjZbioNY",
  "key30": "xFLjAHxwAhCBPZnDuNAi8NQ9CunQVyYZnYsd5VRa4QqGBsJf2z9ehS1sTPa6Kv7eekMbqJhTwra1eyfoUJPTdHb",
  "key31": "3wFUMgdxGYV6pedYADtnWLXdzP7Qo8ZRD2ojEHo6zky2nXmYVzv4miuvjD8e2jHTyBeyj3VFjyUft48JSfaLizLr",
  "key32": "2NkbNQZAqg9gQM6XcqGMUiATeXeaiSi8KZs9HrxkJcUDRkU5nzXdyFZt5pavDUxyGoAwr2K9AjQicqn9aGzJNNhM",
  "key33": "3ZqZqtfKGQesoXp4GLpNAgvagJVzqVjHct3psF7oEbf2meJwbrYE7mmSXUZE1BQfpQu8mVv1nFCCav7neFfqbgFd",
  "key34": "41K27Q6aDPgSHMRKEePPz5ktRLca1QXiEZLJD8YDbaDkDAfm4F9qZPg7iYiDeZ7mqLEoXnaogeMWT1XW6qgs3XPQ",
  "key35": "jZrsmt5Y9KZHEuUp1kWbW1w3QQZ8u3soRi4nusgHPkgeqxSdppebvX2HbUaHB21q1NyKuTMoQyjNZTZYkpejjeW",
  "key36": "4shymaBbCLC3r69sCo7MsteiSHW6VEgtJQozb9yVNDmV9XkGGdoMT1LjyjsCBbNcjTWUxDbk4r2bH8yCKDe65Dy",
  "key37": "5fjyM3cjyCTErLcRYDQbVTwn9XMTN7NMVBvhXnQz4cH6rWDx1ThwdKMZx2ZbV4sZ8iuK4iShDqmyY5hRPRVokK8w",
  "key38": "ka8ry7Fdq2uAuGW3J8eYKdtAFmLSEMgQZc5dH2iustnFRoNquVPwYuVWdcXRnEvAYxN6FnpPF7D4TVSYE7TGsDa"
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

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
    "2s3F9oUxKC7k6b9zE7Ub7jUgdW7NCc45HNuwWYnbkZJSsEZnw3obnNuHo8FbZwgpVmMC3EfSbXP3iE4SqmKDB6LS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oBMxnbPmXxb9PKrU1biafPqRghYVREk73tWfsGJXAAQXBSCaKqpq5D5NUWsgfvHhSkbcZbTy7oTMBvHHWiLhUBc",
  "key1": "2zzdefsvWrjpjnR8CyaJX8s5xBMJawjHzVEfAAWheZ8B8X12d9cMHofJzvzPK8rQHiU25tbHVk6JSF1ZLinLMnEk",
  "key2": "5es6bG13SmZPxJECbE8bfC17PLY4Nki4UdWjahRdU55KkcAmy3aYmPSjTTkfyAQYLrUu5oLfD9isEJn4ZZq2n8kc",
  "key3": "LGfkEjrH29PAy6A8hvHn4LpFGRMBrCwTENC7ujyg8MKVQYdg6kwKjd7MQCrNqj8K6iketXoB5g8TNgBwYVR3kzm",
  "key4": "WLEJiUFgQKxAykx7neqU2vBArRfsySkvWzhMKVLzARMKSSSe2ZNX4e5z8FuxV7mh4DqajQdcPz4zCSAta3WcpJX",
  "key5": "24JD8A53HbWPBJvWtN4wXAzUnGSpdEm7dZMnKHTQrbzPh1E5AVJQ3zqbr4oN2Aman9Ykk1FxCwYvu3QroqZ3WVbp",
  "key6": "23DovWP2EwjvGgwHMzsTLt8R2mnLJLBPCC6tR23j5kEcbDVWGFY3jKswrWCeXUqHiSdRSrcBnYH9guDCmZNPog1f",
  "key7": "s5AD9xJztKux6xMDduNFdj4YrJ45vWGmU5CAm6zbmBXhqEpYWa68z8ACLT6GcrHYysZwihRyDQ9pRwjPpwMKajm",
  "key8": "2bLFez51dwudZG8LtUeQiu6sfHzBnDQSRdb84F5RiaisHcnU9VH5bSxidNWTJLm9ZgWGKYDJ22wTcQwAZHW2Erg6",
  "key9": "57F6SrWGf8mQSoZevw1trmtvt1zo3AWxKQQY67b2MXB8FJRanursJzjSEGThfJV1dhwRK5SnUp55khw6aUEMNoeY",
  "key10": "4c9yY2x4PCkJktnXE17jbiqJMxGixgWfBXznT2ZEjLFCbg9xarxRZ4TceaWJmgGgYK5qMRQuZo1v3Va2Gni1RoKa",
  "key11": "3MhjAqbWUky7o1zTTQSxUbh5gEYqryxA6oFhhCqdHJaxWFpQwfuHtDrnppPsYd6HdfrwyHTa3v2MZkdrBnoJ1WQT",
  "key12": "k9onsw3QPrrjcCcdHkHFgKHbpNNBRZ6QJ9JyoiQ6G34YkUuJkx4UnPc6PvdZt7BzkGy2McexzwdCKEeZidx7SNe",
  "key13": "2LQBQTbyGPYoDnE2PswTXnr9Z1ND1bkcDRVj1AZqQKXgZkr7ajesyPnTSdJqRSd1MTXyKGNxPCpvTtxdmaBLdk1z",
  "key14": "avfASYxTmu5rHFiDzHNCtdBgEjzZK1AQK1HKXUHKji5z87BdAF9aGo14ERH2Rmq2jmhvneK2Mvyo5x4HRcndUQs",
  "key15": "5dZvokvFbVEKHtzCdPPA2YJrNqenHHi3us8rGdXTh7cLXG7z1XsRwu4JBAMFuyZ3YwsXBuvCexhG2hZE3LAUfzAm",
  "key16": "4cr4x8dqLRKqy4fUXRhWS5W4vKn1qmhS7a45b1S3PwsZyRUTAdR1RbkShCMQnwe1CQESXLSJYCaUtC6rdgGVYuPx",
  "key17": "5xNGwY13D9aAnqPFCYEPTKKdx2Ystb9Uayepjz2cNwDABdEssmpXqbSEZEBPr1SZHpbCoycqETnJwWprKWx8Jf4A",
  "key18": "4CZ4HYifK9eQWK89tLL6ekZwu64yQ4rJ1L5gccoDq5FpmxXajCfi7TCM5d6wNpR5DLJ8kYDxmKYfgkwBCMAxM1sw",
  "key19": "2a7fVdGJVzmUG24w23EumG6EACFHmXr9eX9jXQ8s25ZBYDZkzdRNSUeq5AjQPMfD9NpuMVeNDAE8aeLsUgE9PsX8",
  "key20": "2StJiuso2aKcGBozQo8mjAWTJ5eFZWT15zDujSioqqdrsRYMm6zJ49neaqC5iySiiYfo5awmnXeNkEzuSMXsibnW",
  "key21": "3o6gDCiSH3ibFctop8t2L1NNzswFFruP25PPnKA1P3csTiaYbvSsp91ZSV2iygmGBpGZob8733Lb9LfrQKJ1BboM",
  "key22": "2nRpie72Ni4zcCd4syzaTt8Mz3imD6VgTGwr3emYXNfULiysUiR1bTKHrvzp4riNd86viDxZGCQvDc4UiJqzqjXj",
  "key23": "cVWT8mUtUeEXTJHxdzCwbEKMmFNhp7pPcGjxXroywEaicZeLCtxR4jMYZyiCRWE5ZSKtQEQik7nDdXC1B2RMYf5",
  "key24": "wnaWr6CMkgKTvkv3AEMGDDXeXPVVWzWT2vXs9kS1zMERjTdNNNMhiDm58x4JLi5J34kE3S9sBXByojxCgdR28Q7",
  "key25": "2gbXQZHyg9oFicZG9SWBLHx12gJT8UU269dwBpeKiiJH43CaDcxKoqyBXRuJakvibNhSeejcQqDVxVNaVvPE4QuV",
  "key26": "2QEFZEQ5C46w4LH4LbxKT4RmM32seUqo1tZn1mMocC82DBwdG6j97FCdmB5kwnf8XxmYkZZr12MWSBCZwCKjqyy7",
  "key27": "tK69m589feYbpEhGhTEjzUwzFZhsK5BQyPMXTZC2xE8fftmvH1xfUZEHHTaHLVR8PQuct5QZBoGJrfhdqFL9VZT",
  "key28": "4mBCqAWQnbKVgstdKiDViD5P1woYCQ9hWRLd8HJzRicRGvw1btZx3iK7daYJzK23hRGkh6sEhuju55ieyobqNvUn",
  "key29": "3QewCmk4exCBzZkHpFypnQHZ7r13PCbyjeCqHJw7a4avFoJNbxeiadLz21rm2Aes19nPjgvtpbPL6ibYsajNCpSA",
  "key30": "3zHsthtZLfgjjHu35cgR3pxRhPiMznLXQhLBPPYBVSD9j9rmHjWGYzhAMmwnYfFCeeR19UAk52n15TmnBJX5fYAm",
  "key31": "3feQ2Ybj57Z93HgBJrbTYRwXDt9LJDgiPDMepp5J1jWXEJeMYyuLqJBQFtEftg31pX8Vp75JskHq5xQkD6agHfGD",
  "key32": "123SSLeDHNKaaB5yQBfJHcGtaa1iK9ZaDqjerzZD6iWfH7kyMesiX5agrKRHzptNjhHcducpZVDqdUnYvARrEzfw",
  "key33": "2YZTVax66SMUmmrf5dYEx6Uqegpxb9TEVDiVykAnfYwrzSfA66YqCtKTLwFdL6HuaFVxbqJW8HwuJVgL62euw7e9",
  "key34": "5nH6d5rJPAQZPBariaUZxgeHC9Tk1L4TEqzL7WKNGe7o9kBaNXZ4cT4frN4NHU2bxmkGAyQAAUhD4aMcDsEdvocT",
  "key35": "2seFbCyXoKsL6ZXuojec8uNCx7oTU1x5X3PpPDobjYdHc3ps5ECixFnYahLsz7GYuZUgKbih5EJu1WzWSSHkSS4j",
  "key36": "4wby2v5Ut9XpVtuFc4pmFYwHyaBPDtU8f8in7p4sxCEhgSVNLQBBgMYPQbL25JHHzJMzoFYNPeUuxRnCoE9VotMH",
  "key37": "2MnacX3HcMVJjQdE8EjiiMcu719iUyRpDxQUjsYoym7Q9R4ejTL86xvypLoLgKokV2pC5oqFaHSEhnRSWUhTwUZZ",
  "key38": "6187CNvZzFPN7G1RGKaoWqjNFMNZfMqwNXSASaKthTm2MTxcdUBiNzDd1zZ4LtFLky4FkUkpLTqxCjeXmuRtXEJJ",
  "key39": "5kWGQ1dDgZQSgTmtGcwThZLrn6o35k8aPmZjq15U4dgbkwR5ccRZCKBFy63P8zWoyNFhaUN3cNTJQV9a8nrfjQgP",
  "key40": "67Z5WHY4Ajm6dA34nNWvAWJGqL5gyXwfmrtjgqR2nn9C56vpxvymwrA12XFBaVWsQqfquYdAHZsPiusXaMmJi6PB",
  "key41": "dHaZLeNwvvvg5tCHAa8t3rvWzAmc6xz6JSP8UBEG72CyyjwVoZcD9PuFNBpsJjjcKkiL7rce3XJ1EhtB21RH6Dx",
  "key42": "2MN16cCBTNAKHXERk59Fja4wppAgpm43T1b58RrkuDqbNpgnp4PXAFDQMiDCxhkRZEFEvkbsqUaWNeEYwfxTZA1T",
  "key43": "5yi7ZLAfaX4oDmZqwRst1o9yWDHs9L1rBfFNVkW7WeJMxadLK7CZ4riLHgCVhCNQ18SJuyzZNYDzoMLcbwobVSHK",
  "key44": "5RspwVQaw3ZF9EQNBJMDEsGHCxxUSbf2Gk1cYpNTM5zHJgdLo71khqBjhJW22FB6ACrG1ENzgBxYsEiZwwcWF1wq",
  "key45": "h5pqs9zjzq4aFkKggwx4P3B9bnFTMJhyUqzBiB274UPDH76N6hfvaM8thUAeDVf8bg8kXb9oXfwQrom23KWFYdJ",
  "key46": "3UZHGGVUhWvVL5zWush7YwsTEKPt1SHdsznnpgvf7VQkVpS28sbvVQbhAKXE1bf9ybZN3Hm7PndF4K7Vu99o2a5x",
  "key47": "2JpHyvsabtwMdUndJVfqYJWyT3jS8PcyT1ZVXznuTKu1vFHUY59FAASD6djCxqwAW9YYzwGLzuBdKwadnKHyPM8j"
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

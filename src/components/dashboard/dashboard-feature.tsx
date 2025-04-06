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
    "oEdSZYdPzJjhjAketN8XzqNDuHfJfcyYPKYQwh1xVznk4K3Q6KHCYmCbSN1ruj9uUvg7LPm47a3A1owmzFEba4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yn13myDLUfnjxrXeFLjCLyAvpKVNiTuDeLkduAMwFoXgdQBH5reK3qwmfe5ELqV6nzWvvZVMRPKWiRSxMMsDJJ",
  "key1": "2VE7sn5GQ9uccoS35ojsaTg6a8c6RZYDWa9oWTCkg217dphjPupkmbqWRPT2eKTyRkW66YK6VHg6WPYb98iWi9Nq",
  "key2": "3reMyYgyyBzuooFkbJtJB4RQBchmMeqFeGYLaRV6yRHREqvspaqb6frCS4EXmka7VizuVqQGUteixfTeHXV4BvUJ",
  "key3": "5DtWuCQgBUnrwtiBsVWEuEfDKFt5jj9VTV13r5QPWU5apvRLwYkTjKhNSS2NSdnvvswSpzbd5sjQ63dx6BDhs5g4",
  "key4": "27RDV1jbEo9Po3aWA5SozGASoSJkdcgaqxWxvunSLn25Z6nmyw63KskDaReGXMbT9J5StEuRVFpqsagmZ7fxeemq",
  "key5": "497hYZt6JSJ3e2zR1BiM4nAB89gUxCuU3AyaFk5Ea1uFH6njfcsfu4tgAgsbczfsyeeNo1fAVEuTwGmDvYqqyZuM",
  "key6": "5Nzc9SFQxuhBeUBGGg5wjNkc8dpbgM2AVHjfh5KK5jdxsra1ECsaDAKhJLhXpLBFN5tJam5hyQY2bmcRfvPNyRWh",
  "key7": "5RGHFq2o5UHos1xaAYWwHGes82D4SySQQzMhdy2wnEALv9pvYFc9Nwtvg1o6iFppdArWnQj4jPh2iYAvucLHS8nW",
  "key8": "5RsUkbRdRevdaMfoLcsQ9B8KooD8AjdFzxmRCaji4FE7KZZNjmBgGRumV7JJXDMCfh74hXcAbLxiX4xfFYwU56ci",
  "key9": "2KACpF4wt3owt1wUci8ATVGVf6iVFTT4JXQPs12vLojZK2AYb7pcLSTMokLFtmDFQ962ngo48TitAwWeYWKjenfz",
  "key10": "64cYjEso9HFn4MzWHrbXKnS5G1ihcEhitPhHkSz3u29MBS9y6E5Y9BGkJKpW5iRdKPTiLVf8tVXZj6bMNJKJYmae",
  "key11": "3LMW8Y8QQhWXCeGGmRsDE2TWQQGZJgvsW7WzLr9jZL34iLfhmPMyMvpuuKVHSfn22jxDSxtE9AQApZFqKiyZAryy",
  "key12": "4RcR69CuD2vZyin7ABMBB9fYiL2Lt7uU3Yx19GBa8Bpm2Z6aPmhaV1jzsBkFXw1ixG1iWWrT45uHDF8wrDpZGHpH",
  "key13": "2X9ddaVnCGa7nGEu4EswmftyPQzcDHBkZWnwRKCT7wFJMe5ZLeRdsKKzhqtoVw4TdSPk9E8yCwtVAeKbRuGnGWgy",
  "key14": "5z4F8NcAZmeGEgyoCCjZLQLZdjGunMjdKrz1SNinw1efqdybfjZFYkdRydP1YCPP1R7ZDefaskFaYuWgcM5WMUJj",
  "key15": "5RhxMu7j3oJ1qkTJ68c9HaYa9W6CVFTQ3HXuEAbSXrxxVhzVJG2U3zKHn2nVePToGdevTGLyKpKJgrFYeEvzvtE4",
  "key16": "e6bSEpa4JrWLZJKjEwqHfM1rSLSWmmWcedTwbpMdA4bAZmLSKtDFco31JtGxErjzxYiFXWmzCDjETHQkbmypGp1",
  "key17": "eYPczB5VM4xc7h5su6aULRrignkpyh2uaiU9zade41wz2e3NenxwVbiGgxbgecgayokc4VyETpmTTzSjuiaE94b",
  "key18": "4o5fLuSda3SWj6kRXswCuU64X7mmuxExzNyicv1QL2hgQopxmDca7mVNRFq6GqoWvbbrFzieosBTbsqLkHSy2YkV",
  "key19": "34XpWAu29jiBN2LWPtQWe7Sex2AeU436ckBNWPRSaY2GpRUfC1Q9oerL22DmjozhVHTdyLMAFGpKVFrhnYjFmzSz",
  "key20": "49Dyhrtazz3EUG2P6hSgRZF9aDgnFBaKrtP9Nd6wwrDdzaFVYLCxWnm89Fof3CgqMvqsSQA97dTu3W8yQUR84N6P",
  "key21": "3wPVHLip9ALmWXL9MJgXqJiT2hq8up3fGssvowoMpWkHRZhx68P8qmVuP5Yv1Jgus7cgmDDSVZmvQ3xAQNEMWW6P",
  "key22": "3oiajjzJ1mzb6s8v4DTkDfDmkCmSpUsXPiTzr5c7woYQTLAbTm1C3bRp8KSnukEJSJY6B5KmA8MB8dWB1dUaLYrW",
  "key23": "5uofRDHQiSk2dzJeZfnVU1G6t9GYTMYKxqKf6zXURjfUh7qXuL4Emv9WpCLg1CCw53iPDKUq2GNF4Y55wAYVgMmh",
  "key24": "3PGAbN2XkLKUiACUdAGRm8AN6NTBBRuq3FC8sSreE3EQ8otqSiizKopPy8vW3hvDYnUiXSQVEnk1gz1hJvEqXMpq",
  "key25": "38NNdh5FnVnbuG9pyses4udXX8vv5RGXiBXrAtXcBoaeLKdwKdW1htujGuFrxJS3dg8fyVVdGisibYQdy5AbZ1XA",
  "key26": "5oo6bTv5FqWzqpjmRYTRaxiwmCSzXruRfUisB7JeCyyevu1zganiaka3njqDLHCFpUihSVCb6wAPiDLTD32dHSAQ",
  "key27": "y3SrMsvSUkawSmZy1ggR1neuJjGUzSESYqauYi42vt6PyYKnbthPgc13rin57X9Re7gSsiNtusMYWryYA71zwga",
  "key28": "2aEMgpj7kwfciRCBf4WwMveGwPXysdiLmANkjuFaf9BQduDepSdSzTqu4dMw3DSsSd5HjNQvrZSFjcuRsPzaDLEo",
  "key29": "3HAsrWjf27vjxER2s3Cfs9rpqwjkSeALeBXxZVZHVm2hnQt1tNnUs2dpTsgKXj2vAtjSrL1JNTRiGVu542zpLU43",
  "key30": "2WoRCdJLUmKFHYmusmJc4FJD1UoZYU44N8HYVdojWVQct2FsvWkr9DqDHYkNHTU3aA2LkZPmiuRqwTaG7rVgerf7",
  "key31": "2xg6FcvNMNtMJGEoRL9PFhcsPsZ3KLDftdYrzbT2RdeNgETZXssVCEYJ5He4yGBfQjStfoF5JfyD3WmF5WfxwMX8",
  "key32": "3z3iPQoCzSJUEepDVDk2TTaNqr6G8PBTzHRnRWMJg7ytS1vHvoMoS7Dy6GogwFSNZN2FBaK3fL8JJFCCnU66RVwp",
  "key33": "5oeKvwZvo8TJLmv5ZVTbVmzM6oAjDrVzwU7e1ohn1vNvdE35MCqr9dGUJyzz1vVb1w9CVHHu8vaMzKyEyUXA7D1J",
  "key34": "3oDCvjr2SAjsEDUVuFzP2DLqxKoTtYxzQ1EQqhgpLTnzBHCm18YML8jH7Q6HLr84oJTqkE8xdNnrNXyfVDMwiSNk",
  "key35": "5sKY2AgkZFnqH989J9Ap7THPxCxcmr7Caw4VDCYnK4sUYhcCkfbf1DJtqdi7up5SfSkRwf1unVtSvbkkD7i2CWfD",
  "key36": "2hZbDDpAJpSJHYDs6ZKhvKNhBvwsdAQr1k32ybcD4RyuhijcEMSuWY59QACZ9Q51SyajYv9ZN2f63Qw8BMwGwb6U",
  "key37": "5SAiUYKoDPbACHbAJHKTYHJKKYLvHr4deKkvfYjQeyfGQiYKPoVXqjYdSxskDoVmcuUtQMj88SYxHLYUYrXbbuz3",
  "key38": "3d5etxvrBu3ohuELdLo5jTavEnKZfigjza4S2va7m8Z5b8uePSYGNRWf9KhnFrBDtdMQ4s7bcKz2za2mBWa13f66",
  "key39": "5x2nxXjuXroqnzinuBEUqSxAc7cvLxhjvhfDeVuX1X9E5qRRrS8timAPXEWAVCqEStH8xUAXsMgiv2xxsj3SBCGB",
  "key40": "fcC4Zof3f1HNrSYy5FcrjnKLpUtRSTR5dHZ4vU7wmTUUp2NTHySg2nV6QFB46cnVJTjyj2KwBEbmLuNdCooEErG",
  "key41": "5smL5Roy1FKhNZmm7ngvUHYDJnREAYedQ2jPJEyNPv3m9ynT4PeNuPw7qcE5jo6RB1ENLZ9eLwQ8DoRvDZVtHJju"
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

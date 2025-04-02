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
    "57bVmJJk9zxVn2hwR84TSUfKrkEXJQUfMZAhWmbaG8ytckbLSDWNH5sJQwccCnTZcBVPD9jcx3bX9UVZabTtK5Sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ShmJx64HDx9jsyuMeKdCX37fxGwFiu3p6Nrd1oGmwVjzq55VAVZRMwvqh19xj2KhjwyVa1g4yFvmY1xwKa3QeiH",
  "key1": "23KAgzGGBxGVW9rh1yVsBEY3JdB7RoEjwb2ag2LPYfRrFBytEWtB3XVBfhr5GkiJCWHTKEz1MuvJ4pCxgwXvnAiA",
  "key2": "9bKdYeDFECh5wwHkMGqfW9kpWxFySD4G3j74D7cSfWKd1torL6uJoX7WVAECYMVX8ENkgdaF6XAhSeMoC1gnb1c",
  "key3": "3aWN2b4q1GFWACgLDZBjEiaCG4NNvA5KYsVgH6e7KAM8axBDaezyy72ctACqweGSLaLomt9zpbPge7yuscFj9eEx",
  "key4": "3zz3PHUMS19QmM5jVskJ5u3KRCxp8qGNwa5LDpfXqhNLkafG3BJV5u5xaSxDnsjGSsoF8SRYVBuaTrF33TfXF8ph",
  "key5": "2RGufsf1riQB9Pkyr6bPVbf5TXKX63FHz83qLkyeYwTwp9qbU1VbGDCDtCc9BGZKYVNmvyzK6ZxLqWxZsgrRedq9",
  "key6": "5vVWSs4XVkdEjMm67UNi7hc1jwqwirpPBrLDdCjUaT4DWXFNRsfdZX9paZHVMomUf6Nur5xjXMHTKcThw41E3LRD",
  "key7": "wFjK4MLU5k5VBz1CosfwrqWCDwKuBzfWwyF8PyWKY6wdmrhpPMaCzr2HHKike1D4VK89NgmzJQkpWVdMkPdLbui",
  "key8": "3ju4ohi9kufosdSuVh16BoWxdbMpFwXyZb2CZGcFQtRqUCBPAnCcnxu4N7eRucggEN1VP8d63Cw5Js2sopYYBuwN",
  "key9": "453P2xjMKreSwa8UViCp46VcVFGCn2KpBa7R8PSyWZSQpGsEw1ot8CLyLPGZss4CTizR58wqgjxvcbCj5GJtQNgs",
  "key10": "2zoW57tCAfxnH7yewL7imPgUF4nCoSruYcwwDnk8t9cNujuP6m6sViMzJ8JpprJsnXyxbHrMY7zC7pyVjsQZcnrn",
  "key11": "892RMWFdmoKH4Z1J2KKdZ4szUuwChDPVCsehv8cNsLYAgkYxSPfLHPeUwNyi3v2nFPqH6KQS9SGDjkpXGcGatQc",
  "key12": "3FQAiecjvNCtivSyJKjgdhJG9L9FqfUXi8GCkwysfK5QEYwXNyvSyu1WQKdtNUK1VcaLBQXER3BaVeorF3YZgetZ",
  "key13": "unoun6DPf8JJ7KtukYG4h68xys2EqvpBcuKZepWU2fuGieGvnJAMiawuyMWrHLcWUJrAssX2GrneuTQFHEnKDn5",
  "key14": "2AEXcpfZAnbUZPMJBGqJw5JKcNjnoYAzhrc2q4tWatiHcscMcr4HQ6JR7rDyV3vU4Ae8AsSiZgFveQZa8reBvg58",
  "key15": "4rvUVrBYFMwgr4zx5RXZfq7CLNdJgZd9Pa8KUxeZgHnZjCWe63K58wAjL6QL5H2rXermNfcsSZn6o9oapKsUMY6p",
  "key16": "2JK8SoeSvXeXX2HSZkUi71HcV1WtCNtB1nYhPdh2APWewkqkyV9B86YyetvjdM3zGZYiKxT2Ahs3KpMajpvmUtBa",
  "key17": "4zW5NNeV9T3rgUSgzRo5nh2pdHBPLeYBi4mFDHgMudmRGXZesUmChXpYKsoeAaGTSHGNsfnqAGxgnmEzk35dFBAG",
  "key18": "3QiduV6vKxXNG5ShioMG7fd6tDqynEJopBhxYeq5nFeEnYJiCgGh3vnnmBAK6mouwVYPHKGRHaJP8oVMAtCSTYeG",
  "key19": "4LEX36XeKcZFm1btkLRPFGhJY7p4qcF8cponv6cBrhRjfuZ3QDtkwETfu4YP7zDgdFDUJRKiRoPaHuHCqJZM6FJf",
  "key20": "3g3C9r1GmqpqYG8eLurRAne5XNeGEQki7DthPv5h5ycFepGCHXY7VxiVLhvQSzY1Jqqf7BHyfwubmqSKvMurMcY7",
  "key21": "5Swcq4gpxHbj4urWSDhW7wGiWB9sXQW6kYRHR4kcDk9fqhz5mWceLNpU4pgBEgWj7ox5ZU44m2rVu35q2S9siETG",
  "key22": "2Bw1zi2QNXFEyf8Mfqjy3sWqV81AHCboefTTRZ2iHYQb6zGmAop95LYUCkuTgEWRiUhoWqBHC9KMqHA7KJ69KbA",
  "key23": "54a2SeME1Na7zK1ndGo3HVhDaAwR255qgdQ961KL496kJrWttkuWfAwS7HPs33Jc9PdPoFsDRP6uN8iTpQND3JTW",
  "key24": "4zbiF1F8trisA4dtAetQNLKBsHUAPN46V5eDe1eUc7XdK4NFfQAjA4aPuAKjLbZqPD2bn8JtA5bKyu12A2eLXGbZ",
  "key25": "3nJhrZfNwX1CtMZWVfhKRvJCRMKs4ujrPANHH39DJy7LChS8mvaJu6n7joGKvNYVd1uz3RcwYUA54EzwwKu5RY6c",
  "key26": "5cbcL3gaCAWzpJH9LCgZKNQFkYxXqDBJmfnjs17nMNxSQ9DszFaT2XGJy4mFLoct5X3rSdF1AV3CL72jiFP8jjBf",
  "key27": "5HuuavgHYY6Mm3kJVqWztybSKPMZgJ7QKt9eZCeqZrKK44UQqcYX8qYpmV3J2QMVcYJ1SWFuRWrxysoHSFn965fM",
  "key28": "27f2kfMrJTViRnCv9Q6i2S4uQQK6xrbepXM6w6oK9JWAmvdfnn1wzmLQyGQ2H5ix4bqgHLcrdBPUufLiVjVS1nee",
  "key29": "4S1z1ztAqykXqz9aHN6qK5Ud6d1A4hdc2DA5NQkpBCEghjhELBNckiinvbD4LQfektLZNM3h8zrZdNjuunrX8WY4",
  "key30": "2Q7q4KvdKNvsCzLDC5hyVfq5tJthyZXjGCU3xNcSyR9to3izoieTvm6UeNHV3Rx1yVayhYA6vLvbv7ZkXYHiBEFd",
  "key31": "ndAtYipE76xQZnqfmQwLnMANsfpuXG7NZfj29buotsLo9WChJAhN8VQkGmGfq8U7REHcjgHvHxqd8YLpxQb7oQu",
  "key32": "wSYLRo2JStZgdbvBg4u28dpRoxyjWBVGDwTmY5RyxnhytfPq9cQpYxo28e8z5SkfhjpA8LDmybRGDs1yMBE55MA",
  "key33": "2oiRCXLghZi7pviFLxMR3fyrmM5eKQxHdHbuyJDcCFu6NKkgK5yh9d8HE8uHV95tf6888vV3bhF9hGUdxa87PaJs",
  "key34": "5vtbrydo386tMEKF7ukZ2p4UHH8ZSKo97JSpdNZET2CUGsjDadYMcqPK3AzqRNARChEdiHnp33iS8RD8KcPzhmrs",
  "key35": "9Log5R2ZDvA39EcFmojYDbQWYmZ51xhwBcCq25rfDPETCMiCSo9DkT6wXMMLzNTMU1kdGhSBmXAcx4vhhP4oybN",
  "key36": "4yd7iqytBHA1s8bxWFUYbzgVjPgzzxfwCn76GBadY9aWx9b98VQPEqtQqteoc3SwqFUcFBYArh6WuW87orWy9not",
  "key37": "5VHimQ74Gdk5xda9S1QWy5rAmkGNQbBhY7NyzrS8KPyKEg1LZZvp9P1rvwHT31RU476jJdmy3JQuE7q7HXepW4Ur",
  "key38": "32kwTpByRaT3m5qWkxyoKNtsc9TRsCW2m3wPYre8adoauaG9imxcUNuedappt6UjeykG3a8x6FDDVvsgWbzYCpU1",
  "key39": "5aLZoX2yM59VTMa4ivLVWXNo1yW28n65fKUeyNUDoa53w8NKi7jeegyfSGEi2crUnv3v7RQm9KuFR8wgtJfZJUPk",
  "key40": "mAUrK8Dy7yDrUSzkGZSgwv89u44XokXDgaGz81fGzZigq4WoPCacwiEWn9d3tYtneXK6kqo7J6fPGgyemazpZwj",
  "key41": "2HAy8BCM1JetG3s2acE6xjR4dmihMAzxq2d2nceja9R1tEjTSBsjB5YHt28mLE2JPZ9KwxEHKF5p9QgHemcZQNzC",
  "key42": "5LkQCxoh71DuyXXBjwtshY8Fds4A2Qfs4sHXChDCMNQDwpGeK5n6YT17XiTL1jTQHRXLUYgyRNsByirU1pnPkaNU",
  "key43": "362QiFhLfiJLHpKq1fcrX3cnDnXsai331xbaeUWF7zmw1H33NipHYZstcY3tstdiK6Hs7r6qTfW1iFtmZRgBzfmg",
  "key44": "4XVPAFw8PUonp19UTkBr9KBECmMQQuH4JTd8vQTs1ZTSHMCSEuKhAzLqMcWAFuGSJCgVocgTn5SGQh8K4JZGEvRC",
  "key45": "3CL2mhtRYy5Gm57GWUwB8foPDSbf35MuVDN3CDBcBRz98ccxaAjE2JNWAQZ5zz9UFteft4RDUUsPnVQoCU2yu54V",
  "key46": "4DGQ1LNd4LJ8VEz8RhPzVJ56MGKufEBCNZn5Ft5rBT9WexdMeLAgWbbegyksAYGtVtmfYAEJmvLnvegwpXSy1G5S",
  "key47": "5QCJrEkL55aEqnzzwdMVTfdHPQdKTeAP2sc5fmnP7t3o317cMEcsA5mGNHEJqUzebf7FyA7FGwn6DJ9LbR8a2p1R"
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

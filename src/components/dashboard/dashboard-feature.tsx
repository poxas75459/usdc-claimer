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
    "2vniNfg3iASc56XUbRS2YdoZKpB6kckuxXZiqxkfR95GPWyBaooEBJfk5Yrwp9BggZEEjXPfH4T6nVos2fLCZdtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZ12aGRsuDosp6e35hKMF1eRvfh6dudzyfAXm9NqP4ccXoF3sRb5Pr1K71Y3b89kWEsCTCfNwL7GqAic6UQ49Y4",
  "key1": "2akB2bmGcrcrsYMPnyCbp8FgVLSGpyEnrzhVvHHQUfDVgmqusdrWFzsrN3KBoeVNb64yM26g7ZCXYBXnFoKQKxXt",
  "key2": "3Vb9gwqgNM7Guz8nnczfdmuqUGfLBQNSDb9Qos9tADoj2F5SatkAJ2HLRSJpyEiYC1Z4u3pga4XwpxznGCshbPcJ",
  "key3": "5ijpUMYkUfXnakPvFPmQtJs63954GpHkx4zMpTT7enos8eS3tN9P1UsPys88azFH5nmFgdfSbqdz3NNo4saQKrKk",
  "key4": "2TF7iK7G63Zuk4QnwfmWs8ipGSpbzSawQEaCYaKQqZZyfXjzEwPJUeHz4kBdrGjw7GPPCboECjD22bUv5Fktv1WG",
  "key5": "55C5Jz7jHKTnWJunAmXNybHGXdj9qPkivQZV2MuxDfWtEAXaQwMrQT1yYddLtaqR3Bc7qTArVkzhfeEpB5xWrxpF",
  "key6": "5b84wokspNA46fZSw45fZ1vSaWN7mqL7wzXM69xhuKaQdoy22NH74Q6E5KgXHucMF45yTkZWdqxUnTmdgwKHicb6",
  "key7": "4tbm9NwfnAi6FrNQiwbUer3rtm64k6awDFU5Xy2qrTNvFwNz9qihHUet4yyUn1Aq6ZmgkJYafGabZfGaKMEBNTeF",
  "key8": "3p3QANMUCPDcVoaXRhLjG3hcGxnGggGH5HPxyd6Md1svTGwpSi8mEdadh7HmqfFJePZ9JuSpxar5gup1QzZgs3cM",
  "key9": "3XaszXdJCnVgTSUobC7ovnc5L5Le2pGWq2zdar2bgrEHQMuSg84jzGhonbDyeFdovyet1qsbTu4ZVptGcznKfnV3",
  "key10": "3fGpSFeRsFA4LsZmTFxczBqiGUcCrcCDWzYCUtAwZFuWY84CvaDSmMz4HBjyfXEVWhKxpVW4d31C8X352ouHoZJ4",
  "key11": "iDmYgS8tL9KFAeaMrSWQjjSk1TaNzHERGxvuThgPMQ19VRSZmHRPrxn5qstEL6vLCcrKy3kVFwEGfQrZf7wFuNb",
  "key12": "3XwoNxFghHJ1q9gJ4r5WFFQVvEfaKhTsPbWG4kGho96wWXrUFcaEsKfwaBdD5wHFxhV6ScZZPEQVCu1cQkY78Pau",
  "key13": "2uRCSug9Nqsj52daZRGuGbbagWMxx4ccPrwj3ihFpjTGsp9A8EV4xmzZLd9uXnePuPtTpioDZpoJCUCwkXhHtdkh",
  "key14": "2wcTkmUxpiWMuCHyLAH2huTJPD2anNVukHVNKGFu4jPosqTK4nLuKXekEHZeqHUvAUYVjJSj9eoNQmDg2AMpUUxk",
  "key15": "5R5StEu6JsxKxmaUexS3k8TTwKem54VhxzdQBPBTDKJ49Vey3NhQWPr2txzqM1nPoMthXkaLruQ9UFVDB9rpjWnK",
  "key16": "4k1BZEGwRPsHtgHbrvrqx4TGHHzHhR16QcmmTSf7sDENQ361Ksm9ejM92vtFYeTPc6VBh7QYJH6QnYPkRtzCzhLD",
  "key17": "5sJDdUjUPwKnQArg7M3M8L6Hj513XqXPYKgh6W9s8YuYJwU9hXx7udT8oaSBmqPPkMCE7vHFNr3vxFRHKJFiQwtZ",
  "key18": "vg9mHJdtGthkepamyB3EECYXNTyegjz7LiHYHp3NyNmurY9AK9TeboHGvvG7k8UiUgdAwRbziM4ps5QoXK1Ze4z",
  "key19": "2jsE4f5H7pnffFTvBYB5x6cHaYiEbAYXABUpYhiaxYQbpSttsmHfWaeufWbQM9FguiARBZ8MBBYKr6foJ24mYcAS",
  "key20": "yxL9JGAsrk5h6j1DZc4oy2ZsGBuDgGcfMnyTYryw9LHBfmFpYS4aXhX9P4UXfyFGjRybtEutiRYFXUkpMvjh7Z3",
  "key21": "3DSfkxwdWvrPXpArBNZk4Xo4QauGhzWUAhVBLuJwXTL9KPvRidG8T4APB1eSCY8ZgJAAh16bGvGzoNNkwJNy5nZ4",
  "key22": "48zwogVQZqsiPwn5D6aysJPtBytnZQAKJQG6gPSXWq9kSoW3h5oonsnH3VNwcgsxvQ2szccxbTMV8yzyR6YzRZBB",
  "key23": "5J1kwu4DyuukMF79i2kmvjV6t1DmwHqZ22mGNSt6uqdNBS6RLoWyc2n9EEhyYpJu6G3eNZMRVrG3Noe2P3b3eENh",
  "key24": "446ACmhhUnZe1j86YMTnw3vxbuxUWhmF8EBzWmuVisCnMgyGQWtNfSaTTtZEoSacwj7QNdv3qtqyRHMmhT76bQfB",
  "key25": "53ZEj6vw7WZE8riEkufQPeiM8ETpE8sShCpuje1AAXxzEp3xGNp26tgzjYqtEEJjP6wG6Ny5QdChE3wVWBRaCkaf",
  "key26": "4XbH3m5xGBWFLQmRzMufBBPMu1WPKwtvV8CDTfDnow63ZRF6Hwgwv1aLegcsdyjD5exVAAB4PNm14rtfBBWv2WyS",
  "key27": "tDFrJS3wBsLz4QyhhbxizUGGVmp9aCiBRJMPFr9jpgJe3G3n6u4dffLGV3xYz67GnbRR35oz12cBCSjRTXQGdja",
  "key28": "NJQrqvFTbF27ADPZep9uQGUYu6yJkgGtGkGzsjT1hiwHAdtb2MMqamru8jVCYYbtPE6nH2zxAxCQXLFpwQqv67d",
  "key29": "27KVvLdKUuu57Msizhdz6rgGUSTEANarGu7aDgLYPCs6yzMTdTvTUv4yhdBubXTCDJ4LPW6aS3ssaDjFsUNsbrg4",
  "key30": "3kcTotikL9WmLxB6Poma4cwmuASqn7fMXz1ufQ6NVB38DdDtQDjxc2Gm9PHX4xYsWa7raXvoMF9kbbHGtSoKEgPs",
  "key31": "59qLRQoUWnXcWH2W2np7eKWUjgVt4ZiWe5wJp9CMtHkDLkPipETzpeD2yscXRTDnDUkaU44WUmLwwF8jxC3RRJEb",
  "key32": "4VJnoL1pbhW62Kh1gd1KpznPgJBsCpJXEbcvhwyCWL9cLmFruqsN5NTzns37x5RRB5zLgkHW7i1voTt4d1wNPsbp",
  "key33": "2GMpG2bm6jTvpSWRTnCHkJMaYr6oNQ6q7VrEGbqZB7sBqwEeFCUiujpMVFcp5raPvaDYYZtPSvCXJc1TZCyGXEo8",
  "key34": "5PecXwVPgT7P7n9tLGuZKmD6N3evRkWCPd5Af79FdxA1p6QL6js5j14JupWFqjyyhXX9n5KGzic9U15SUjxDJSs5",
  "key35": "AcGDJbviaJb9NgDXPWUYty4hV9NybyqviDaanYPJ6BKQwdNHuTgLyRQAtbr4VBpLmNRqFn9SLoBz4L9sS8oLdob",
  "key36": "2dQXQKCy3S51Tv8rqcYondPbpmnXLnqaQNWWshCjfZ3oh33X4o4dEvt6xAXwWdD6BJKCwbyet1keZ4sUfjamnjyr",
  "key37": "4TuGrDuXugQfaSWEwbvnhLTGpwvWHAyyLAJSTiqeDsQbdeaZxqF72ARpXZsa6iyyHPSPV4aRpW692jK6AWcqwtib"
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

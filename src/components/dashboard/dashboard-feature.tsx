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
    "567ND6YAu26VcsJ5ffE71aJtitZtCG2BCC6mQG2y8RWvS42T9wF2SqNPoABVZ5yTRqBSCdLpu1VPSk56eDXpktio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X8aDGmw1L5qHzJjHqKNpRZt9UqH8x57zfggUvM4jm4EioqQCBBjtjJuEJSuRoddv3mvToev6PVjxZN2k7y51c2S",
  "key1": "3r9Haok9HmTJyDkzE5FcJ8wUZ6pqiHDGdgEafLTByqbS7TDs7TBZY1bBhHHEkFixdDbp5Q3SVewARReTRjosRJQd",
  "key2": "4s1pehQFLiuhbLKqwK1XrSzZMBRwoQkzjwCET4crqraX3C9zKkRcWAeTNSrS2XiEfhjxaRJQcRsQogKd5RNibJdQ",
  "key3": "3TKwJXs4AyFxzNxmU6dSreFrQFYrTf2EvgCY68GN3f1hptesmKRqAA3b5m841j3a51yZsUrg9eVgJfVv28nJBuCC",
  "key4": "5voyq1vuR4VgfiocPSS5MBNju6KnqW7CQqvZ75riYEW9HEJqtqPJDZYoxhpbZLa4Uvmou7sMBQdtrifSUPvi4BEp",
  "key5": "479cfnqmKa2nYEnxaUtvFpSQDc9pU7UWH7o7UpAiRRnp3kxGCqQ7BfM2KcBHonxQFX9Wpe9KypX9tX5xyiGunsLi",
  "key6": "3jDsXfQS3zSbci2qAmNCAPcSiJjPY9UxXem2MEuD5Y52fXyiY44jjTzJVcsMppmmH9mkjYdZmGc2DMXcDYAHqsq8",
  "key7": "T3jPComo8BaLEFUzZqUCSrCzNaoz3LznCE1NURzfmxPTQjcmu8bWkqh8JpSPqya1T4x8fghjf3py98D39uTt1Dj",
  "key8": "WBC8njFubU5Yfgos9m8xqJtRgAPztCdzKDQKCGMojAB8va6RxFaFRJP3NGQQz1wSXg7hm4paQLxEBWr4QF7AKjg",
  "key9": "2eYpKNZETbUuhttZWqHkkvPJJrS3ztDEALKV85S3ebPC8AyZtj2KJH92jFMyjrPa8cqVna7hNx41yfp9rmL8LFKN",
  "key10": "2k1LSphdEEmX3RYbZ2gMpAmctUKXqBDzJYLfXv35DSBNv7HktK7z4jPEVtH4JVSW7mrWWVjjqDk4Ay56tFkK1aNm",
  "key11": "egH3EMXU5zHfunavmd1d9QSZtNZvwZCpBcY9r1bUznynHrEskCGypszKJ4TZjA7dkP6NDmJcSMz9aWLbjxFiNKo",
  "key12": "64XnAencA7nsStnXCkG6cWsNKw7MUp4X6ryq6KHFhEWF3dyvTvXQhXbMhcDZvoGEDRuQ1iAm7jmJEm34JoBatugR",
  "key13": "4jQq9REfj6rMk6bJnf2PmbtesYFZpAji3GN8s4swyugFSsLH383EkrwCrPg2oF2DpnWAz4QXyAxD97Upr9AzJEyX",
  "key14": "3PgxsQgXCprHus1MJ1DBwjZPkeXZxWrV2AUbf6rzNAwGSiwGFEqt1P97rdKp5hXokkQPTCUx5kn1dXwHJwNtRuqN",
  "key15": "5u9R6gmMPtsDQETW3M4BkuMNPh6uCNoC7QxbEk37oEiN6c5XysPDE7Y2pJeYBifk2o71dNMdRzkPfQcPZNdyqscg",
  "key16": "2QeeqmbDNnn7H46M2h2VyBVxyxG3SGwCrMeLFjqedWHYeppTJu7TErAPFo5bHYu1DdB631HmWzz9bmLd74wxeNzr",
  "key17": "m4hP9CQHfiLfd5tf4zsbaLbvCgq9vH9yvmfuGf2uhtSnxbYUVsyzAZaaudzvkzGrhRdSaPJBcJB8yQG9em59dVg",
  "key18": "3dat8uKqi4MaRgX1phLmSNr1buhieGh55d8LeuCL2CRosPkxBDNTknCBKSCS7zL51in6Yfzfh83s5ywiuCHvV1MD",
  "key19": "5TZM1ZzjS1v2svRHsFTQCExwvnQZB5xyNBx54s8hS76eAGDfFTFytEzor63jNR1FZZ4EdWcgfZwtmbt5wM1suaUQ",
  "key20": "3sHJFnURm9TAr3ysA5ah7SBN9w9cvjMnBGExDNz3Pnax7kX6mQWs2YjBoQpyJtf5dEi1Ki6v1tnNnH6qUtQqATHq",
  "key21": "4itH6wp3ftucuuE7EmtaC6xHaVAzwunPBHEwcgp44L3CpQMNh5afaFU1UvCyBPzuUNFhiFCongoFMnH8MBiQgJp7",
  "key22": "4sEfGNHJZXQPA97UsscnBqMYsaZeSun8tGy2JXokNg8Rmbkj3oJ412RuTeLvGP1Njm4zidQghbfWPDNPQcQGMCnH",
  "key23": "29WbZPMZtvufmQeA35PxPTERo7KJtgvUd6sj9nAmFf8kiXWXhKnQ9YXX3ryb2stQLwFj9Jv9TdDFNJd9oZKx4xD4",
  "key24": "kGuD1Vg2TBoMT7avwcr3QXnPHhfZvYHps36fTW2iJBgWKh6HhwyGHcnni54xuVdM7nts17nMbJWXBjn7MmmS1QH",
  "key25": "41dQq5rUD6WdMVgGtMgUgnMer2d71iXNshDhnUX1efGgejtj6UgS4bKkKBZbKXZja9Cfv2SATLAK5ZEEGHh8yUEe",
  "key26": "48mZ51BVkTzuu1JEFHkgWcaLyJYK4NiWDRZ5V5xzxYxRs3RjhHWhXQCsppPmC6hWZiH2njqyuixV2MXTh2NjodW2",
  "key27": "fdfLpXsFN2YiddSE4zdLQgzC6hSgGCvX1qa1Z6ZSR1auhMsRtPF2tNsWK9cuKRNdCkmjXYsuqq9U2E6Kf37aicf",
  "key28": "35nHKcmDEu7b3QYQnPusxz2opxbMUpR2R5qr7zAfqw6fEWBQGXXhUQXQRHuUuGUq8LPD7gBNsp3mh1rHnsK9hhHd",
  "key29": "22hiUyZaTfSCKitJDDmU5uDRTbeUYJXviJgrmVemP8FAu8BVfMYMPee9wVf86LhKSPro2DaFkgkyhBvgLyiC3jhc",
  "key30": "c45ZRkP9ev3oAXyV1dYk2sMKM9M63y3128A3xHfWjF6TYouonn4eq5Ma2exheT19PytsH8PKqKC7iF5BoxHa2nR",
  "key31": "3jJjP1boSTPcHoDdFGzeRqYd9hYTzx8dxQCFiPHCNuoyQGu6xsuk9ad9DYHeHzkiYiNXzfodz94tNN7iTZj8J7qY",
  "key32": "27WgpbrpCK1buXAp9DuEdRQRpUXWv3XbmYWVzwdxmYAUHE1n1P7mn1guUCWhprzVVXAPCkSQkSy6bNYNZHmwnKWs",
  "key33": "4urmhTHQu8QtFarTze61dmazWAmNzPxHRH97ZTUYGfENp3GpH3HK4ujR6xWJf4db8LnoXgGu2abSgcRs7NT31MAB",
  "key34": "CSLFnqSMxKGBBG7QFLDh9wB8mkFJ6G3xrUEaH3Cx5XRgbzXZ2mZb8CHNUfJ4xm4KzCqmE5i4XaqcPi8r9VMsLzH"
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

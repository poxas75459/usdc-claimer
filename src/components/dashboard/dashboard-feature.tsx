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
    "3q5EgPfa5m47vJp1qfFHKgu5HNjkZgSr71LmWcWyMdUSkgjfzJBXwnaTVEkoajyVFTzG8jcXGq6kDEGT2ThxJfJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m5Z2c1dth2LMszAo8k65yzvZivBKUVkDuwYLwNFrmsQk4HaiiG7zT6J3X7Vuba3WdTv56gzEiyYXusLGq9Z6zzL",
  "key1": "oUhxD1ADMFrmwV8HiPnUEKNyRTG7X1hcyq9tWZDcrqGu49GK6uAPgzEfKrGtBRGnzhppU4KHnVWrjzPZcHrBqBb",
  "key2": "39rL2MBputdxmCNCk3XW7U7X3K6WpvFYZ3AtEbaHJC6UEocDA2U1t9HKn3Fy1Epf5bqSfeiWhssTECpJ81tDzuXf",
  "key3": "46M9bE4rjLPRELqtzevi99yy72zKLVV8p2Ftm5JMtFrSDvWwjAnCc3YqL2DbKSSwnvM4mfeoGZYEA4zgoZisP8Bh",
  "key4": "5aoVLCqAV5c3ZNHpHTGoEasQzgNMP6CqxMGPMmg5YyUierHKhDHVmzPchNXo7Chr49DfFCCQsnkkFw79WH9kDrbP",
  "key5": "3UntcVKpGGbj7CER7sggZzgzQ2qK7EKwwvKJSHb2ZSJWBy3kgC1LEEFu8mnPGP5NLQvY7maQJsFRKsyXmeyCGmB4",
  "key6": "5FXXPMDy9DmoiG4EpHzUa5wCWCMfnSBEvpehXDReFhBtKf1pn4aPDHFJFgPeqrzzGsFerGswPNgv5kgkoLNe1TxZ",
  "key7": "29fTbJZWBEifJKavNFm2zt1h84nS8Ss7qXD5PcGYc1eCuF2qUv1eemtkV6dHyjBGhA6aqgKFqiXwP4cPuEL3MUt5",
  "key8": "i3Rc21sJKwz7z9ngoJ5z6fGR7umcT1qzmSssNX37D1guAZdxqf6xejgCuwCfHcnpWhPWdWAtnF2D8b31dmUxRBP",
  "key9": "4dTVyAuDVyA7wc15icsqVZPaV2r8Wa4BoVQ6WEaDWTRso8x5xLHUy9SiJf1SGKJsyqiLkggSQYPjqnTtFd1mF2Nj",
  "key10": "GMNDdpjLsA2gJxqfsgaVYDNWwiAUjsjHFK9zUxNd81zy6LqmRHmLBsuhk1nKWgDv4eXyZDNAphwML7b34kjKqvX",
  "key11": "3g3PNk6tg9eH8sqiEMuwh6ucFjsnGB8oMZU4LqYq4BWUoXP6JL5CxK9fR2dm8LoyndFNxgQbwsN5qXHJSCXNQEbu",
  "key12": "5m73Gspn4CzxvK1RikFpQHXVt9Hvf4rKzxJ8h4JJY9xNCCR8f7Cjb4bPGgyFYkS4Q2Nzykz8NWq8V4KWnYYQt9PZ",
  "key13": "w45W3PdfJY69ed67MVGrYPjAk86NryCgvRRNHQWfxVseiSGPuT3u69YLhq7gLy5nigJsrMSNs77UtkYPnc2MB9n",
  "key14": "XBuaX3z8APBWuUF3gTsvWw1DU7DMZW7XDMeFecEjas5YioydYyafe9AFbPk3a5soMa8N4dofDuKsPsNsGPEvZa6",
  "key15": "z5GezP9SKCnokiFYyq2wwdfqddtn2B6uycAUKrpBBSb9GTa7cVfLPe6X46t3PhGq72z7zYq1DRhRHJzP9X7KrWq",
  "key16": "3KuMDmgpoqt84JVsmSjGwfGRRkzc46Vh3ZmDSwrj5DKcTxNSskGXzGaUUjM3WVKSCGufJePvxDQJhpg6z27RJge9",
  "key17": "5JzpQJwig27u7aMmCydzuXwTwpTgPstwX4sjopBvN9TVyUXiMzeJno9SLms4rfA8QFAhFvzkw2kufVhpJL2C6fc6",
  "key18": "4zpvyJK4G35irLjhN6qA7PDqwtM2Nd3qVbL1eyC9DQBZaCmWj34V6K6yxNSrDk3p6DSL4ocZSbhrpmAdsx4Jstu1",
  "key19": "23ta71iEFVzoAjUaowrY5crHunjhYfgAvFBEzM35TUmdi2PseDWFGDgyvqrPhVeqXMT8xN1WELHBzQ78PMdMPN3S",
  "key20": "f7SZdfoT6VLqnFp9QFhHYfdWta6MKQT4yE1fgAer3Lu9FmhsVWpow8gR1BWQodVNZFtDatby5QFW2SA429nGFT3",
  "key21": "4rjGkqS3zmPbjYgVaJfwm45EDWVGKyFvMQ96rejtf89jcnNaMxXUqEvKXWrw8Emecgi3NzqSEMwijkxBeHGF91hr",
  "key22": "Au4qqnqEYyMnJZQKDe5x7aCjAAfCYvcF4CsthmRVASkyvWpffrNM58kFdUpCtu18soAJSPunbHGrByV7HvByBGL",
  "key23": "55YWFJ1uVUXhrHH9afXKt5cc6ZvYccndnrzegs2LNK2JxKEvrgw9KUd3taBpvechB9UZzee5SaoELHhSzzpn6J9k",
  "key24": "eJb8Pt6fPBbgfignqAKUaFJcS3bh9M4Fdku3FLs8XFmz9t4RS1cDJSa9Zd3dLpfnQdL18cpyHBkBygY3ATcAYR9",
  "key25": "3kKd86B8XcksGfNaNyPqyRD28ydJuJoNkDpF1xmYDTA7zn2tCBiVoWmW65oanwP4cDvUMLJqN6wouGm5o97KyfX4",
  "key26": "4SicCjdsvxGgRJ3hudvvvV7PBAQB5tDb8KytKhchC8HdvcpCMFQ69kEr6wQuSPZFcdn6WQGYz729cuHee9Eqofiz",
  "key27": "31MpwBokEGHGxkuopuLSxRDgjCpqdUhv1sKxDBuGYTUCyXToWcxvQgoMnFR9bXCsk5WeU1GQ85akxQcto2he6Jyz",
  "key28": "2vAGDb6v53i4R1EymoKDqYHAmiv69n26e8hTh5XFveCKdcxiH2uueKrYPNkgqHY9sUGh9fWj5uPzUnzqpCShLFLQ",
  "key29": "3X1iDoWBqdAPumHopVqZ9Nm481Pzb9gMpcKoZqrJCD1yUETL22NxpB43Ku3Cbr9Tw8xh2SC5x1tdoQgdW9a6j3Kj",
  "key30": "4vCN9dqb1MEnYA8Z33BrCP3EJVoYuAV21fef2mkEfTHLTPxwJ1VcTj1h1jv4A11VAuFEugywtCqvrLsBUPAMhYLy",
  "key31": "3zECd5cAWuBiqhzibodxtjRrQbupurub5s2DttrBd8AnAFP5y1qZcK8kQNnpHBwujQEco6yKqteoYRECBj3oiZ9f",
  "key32": "2XJhbLbKQ5zCEyQCbzKsbyR5Q9NspSsDieN8DKEvKApVawd9JBeNdFh2WbFtnYkxCAA3CBQmGe1wdTkfiBqx5tGj",
  "key33": "2wcgfLUgkqxYEP8Eiu6MAn95tc3KGuB3usHobRvW8VuT5nJEcraL875sqaeZq882xVBtJpZhPmCwmzuNYzfpZZa9",
  "key34": "42oBSpFmwAY5J6zMQSnZciVtwKRzDMceHzSgR9YXtFMGRkuz54EbTc3bCEjuqUyFV7Jdb76qio7Uxugc8kL52hWW",
  "key35": "2QeqLzfkdRLobh6JC5xdSk1YLi3kCPuounRC1CGSH21SVsp9kzA3gcZ6H4jvgjV5SFcxTABqzNVPcstg68sKRwo1",
  "key36": "C36FTaMTrY8QKuBZcZDw5zxbSHyQAmsfXpmvu68WNJR94jBxpgghc8yNCh8veHwocxtdEJUiDxwYyj9UrD28TDM",
  "key37": "YdP7hCXXeh2LsTCLuvbwbg8A8qNvyc7fZEsxdtXA1EJSQtCj5Jd1SrJN44VRm4ozkEm4L9Ym3UoLoenK6qcQ4Tj",
  "key38": "5gQ7NNLyi57zLVg3V8k1tq7SUKY42bKfgP5ETxV5jfPbiAB4o6JYDiF61KN2MeWd83xHctTEfFakYBaR2fwwad6s",
  "key39": "21pptzgtQ4k265xp8uawqwoFm6g1WjKGicLvhuz8XoddKY7h91tf6McMA5ZhVfqwKvj4pFAimdhToEMBU2oAXRFF",
  "key40": "3GYqRtLxJ6VSK3ktVdgfsbkavceBAnRsu3LxyC1fRSR8TQtX3F6K9aKZBSDXyS5npHkbun6tbdDR5VN31QKV6nSV",
  "key41": "4eLgsyD28siPS2xT2HCjCr5oYSzwrkLPrtA9c7n936SdquTgqz4s7tnzfcwR5spP7dvB3daL9ymiEX8iRw1PaxWe",
  "key42": "2XcKvGGna5R8yMxULkrxsiTjaU4gciiSf9QAozmmMd5p3zuSGAXyCp9hg772xXUUjSCPwFbPpHoEXYd7YaJeWsJj",
  "key43": "5YJ6SsiVgzQGcSjBF1xS7kW2BJjh42KEU9F34DPTbiux4A3ceCgMbNfac6Zrrpuuh6oBWJepcAE6Nhuf1J9KtzeJ",
  "key44": "2KY2SXYP4Tc4GoYAkeXmstWitjfDBnNfFKhoN8ve2JXciDHcKojvAPbhxuEgBcMjSBaBvLbQiJkAnBqHK3LHWxAx",
  "key45": "hBYK7Tte3AsSiaU3Rq4VVxCm7nHZoqpUNbEpQu4HxhjD3mSSsUS9GJPWcA4ThgNWsUXkfPsTVGNVLsh1G5MdnpU",
  "key46": "5HRKymxQ5J25tc8cSe6Y99PCLnJN8tmz3McZhryMjm327eeF6nS8aaLNAqfrfn3fLXmBukzpmsjWsEBvPJnGkHoo"
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

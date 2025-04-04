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
    "3vsfbLakdMFySmVtTfGzPfo7J8akG2NR6WTAkh1FctgVR2EgVutBKchc8g3qLxL4EQWXCHNrPyBfjcrpMyCX7G83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKPJCLDxq21xthQubsu8So3cLPxh7Po3VtaMB2K7rzehT615MeXt5w8JLcMcpn6C5fC3ezwfxDNmWK5xCUdgX19",
  "key1": "3wzdfe7FJwnCJjYzVpWCTTyNTwqYLFqB73sySyrGKb8vtgzNSE1QxfSD3DXnnARRhwCQGYMk2D5dsSnp257QekWy",
  "key2": "5THnizv8feTZyVpzzNDkjuUFGnGf7sJmA4BvWprjVt7A6NjLSX2bcsSrw95jSwwM5XCFZAFPjmzy3xvPkwk2jXMe",
  "key3": "2GuMEtseScwz2U8qPQVGoDgL5qppJQuTknm8cNGbjUUChLNHigNWvUrhCxXzF2UaQ7K82rWnWHSqWpEGgxPwyEvQ",
  "key4": "3PY7f2NqjZ7BwzDgiT9kctFUGVtoZRhYaLDgkuh5TaCdxp2PK7LpPFAQgvY639y67nBpRYTEFUscktuUEQFCbBy4",
  "key5": "5KFFp98YaF6MUQHzNqJ5k3uCpCqdXpfPFdmccNmBuNUZJcbdR4ykNgK6GU1MThXjzdX5KWX8gsYGzfxgxErQ7PEJ",
  "key6": "21mdbr9AVL4aBp2etGfMhViFUrn9eCSfyWVK6hZ7MTzRqFvex8SffPLD2BZUEwc4pw2TgezLNJZwMa2G9nghmtpE",
  "key7": "HMPKKQe4KTk87znGuJeFSkinN6KfMmKvrWY4YfGhKBMMRcBX6K6nUZyu2sss8gbxGKDNJJveS2d8A2cTEzn3itk",
  "key8": "eJjvHzzganQXhb8Emu35CW6GsVHMXeMkApboi2WCd2NMhTqWCQMmVBM3R8Kuu4SRckT8ud1cFtFLqSAcgbPfExs",
  "key9": "49Fdx2ywPsRqjNeZjhPTPh13XTsUhSq4TPc2cEU6joPDQnSVXArrXioGBGGPMw2Wk9LQZYzepvY9mM2Wcgsa9pfh",
  "key10": "3AcKd7ga66tHW2DqoMCkv2iQGhB39WYMH4ekzBAvBkBiZs34M5gAoRnQyVd8PsQH1iK6EZ1SwhAwuFxyBegQEAgn",
  "key11": "2nq3BpPxCJbn961jP4zwftVRnQ7uCc8E5igbmCSc6SuFu4GEiPMpUKg7ruCkWBqgStyYSkEeiahQoSsuUHphmTVE",
  "key12": "2BEnD5DiwGTjJcsQe9hK3a8L3etXtXPZQZoC4oJPszvga3GGfmk1N6bMTPyW2gxWMs3766chSruBrzwK2X9B2hWP",
  "key13": "51H7dWsUc8VX4woyd78srpjtmHz6yqUSjBgxGgriggWvFfoWvQqAkvxfQDq6KqwUYrhMLroXeHonM7LLmoWUbwuY",
  "key14": "5DX98Feqezt8JJYzkTwbCE4LzxtPYo3kSwaR2MQfvVd7JxagqGde6qH2Qm5TmREQ6NViN9NLEkkVaT81gJJkS1fo",
  "key15": "4R3344VAETCQrndVxikpHa6rgx6wrFB45wstKCCzHH7u1JoYG88cp9w6vtLkmLge9R5SajWYjc4qB6qYVwDe2qMV",
  "key16": "3ZgwP8xDAXpZTEcJ87enBooEvZmSndRp7FZVmxuporUybXGCgceLHf7chTe69ckRskBbtcVXhAgM5vU4NN7qVM6X",
  "key17": "5yEVY3CzitDvQQipiKt8mhKAhwfwLvEEMzNLZrFaMhwC1hoNjskjnpekw3CWTgUKZmdWLVwJa3zuiFdaxiuEADaj",
  "key18": "3u4pKUdDjdXowsgqvHiq3LhnYi9hSwuRbN6tHmGCwyvcMUiVCYmx4iicWDqXdJERfh9rZphyhGfagYtvmfCWuc4X",
  "key19": "TYGNpu8orQVBndARh37D8tJHEsiU95XdsLJ5QpyuQnRdAFVZxUhpFR37nRXGap1Y4JYvqcsQ3FvXzojv2e3PCib",
  "key20": "3zpNujbM7bTciEs6SgZRMhR3k8W6NU4wJvz8FnREuGLp8gNgwYXkF4c83XjrNqDSKjjohX9h4FBjyYQPKdNthE66",
  "key21": "2bGHckLhytJCQJRAVYy1DTZv9fjjtVRBSBZsjF2gZyTRVt47stEmE3HSioFbWPRJJVnWwi3jfNEW1Qew5izFskno",
  "key22": "39iYJLcJLjmVTdFzVngJnnxJoUu43o79pJZxu5ZKZhU3Vj2wUkTQor3UHzhSogqEVo8RofygbxE7MVjeveVC9hpE",
  "key23": "2KANoMi2B2bX9cpJnEhLQtvHMQUwfAAmme2JEhqiVVwH8sAR64FCehCnbMcHTxD1o36EnS95qoJXEVVofEN4mqNZ",
  "key24": "5fTtDPrSx9T5E3AkeVXSFoufN717HZMR8vqrgPez1pvZwHCJca4oNbTjvxAzyWUPWg1pJv5ooJic76qzyG1vk3Zs",
  "key25": "61BrNijfYNLQUKjqgfzBCsf52xSchjrH2RCpfTNJbFkP5PDWvHCNodVV8243Yr5MaSRLiuAtZYrqNPoxwegHFfu9",
  "key26": "5bvbp55K1i8jj7Ydhn2fTsCi3ZKCBkajPwU6iJWDkjXfyPAQTxrWkJqpdduyhNZgL8KAPELotZuZRDBB3ta2HoGM",
  "key27": "kG7vFyDMtBsthcqfMqDnVoD1Vixds2rvq1Rfpueq1duX7LddxpshMHRYpBzcxTxyBWjviUw7SNn8Ctz71qeb6FB",
  "key28": "59NbV57m3QGp5PpE1udLdhNpNEe7cGapXwDe8SdvXq6N5ugNcaXStdxjHvkheJe5SkrHJZrnWVVM7k66huN5VJQN",
  "key29": "4qEWA5q1hGbvnuTfja84UAKBLRCpSn1pTRU4FZBMMua3K3pGc2SUZYZ7G5GfcBxgm7aKEuZ9ztJkJmEY66bQ5g6m",
  "key30": "4Mb8VsX5QV9BWRvbiYqi2zRVN3xnrZFpncgK29hrpqTjGvSipfw4qXjLc9yv744HQQoeskiHiSnwWcf8VtEgaWAu",
  "key31": "3SYTn8hxcv3J5o1Uo2PR7aY8FPoNh6xWBnc1Rkk2K8EkvYLHfLsUZg5KairvwqootUiLyGS1eHasUXNx1qe6YVvk",
  "key32": "52kS2FxFAXrUpZG1dFWcg41V6z5FcFDD3sWvjfovGA2BFVrzmndh8wnBTzJ9V6phSbWfLAFgZmJhjis8TiTQb1tJ",
  "key33": "2qJ8o6ohy9CV9woiJmJ63YpW12D5tyebZ2ZAuZEii5hX8uAWRfir56UB3KZMhYbpEt35jbYTMVNfYYy6dvUmQMX7",
  "key34": "4Swx6D16yiBn2yknytZ9tG4Xh2WqvTZ3qoMs7cZZTcAooiu6QiKKsAN9jqNStYG47Ht7SSspBVoqQQHhv7mEWVuk",
  "key35": "4oyy2DuCWanK82McRttMJFRBuJicSykbCi8J49uhUwwLT64sHJxkWBtD2FDZKEQvj6tXV5vdH8eDe7tZ4mMvNLfJ",
  "key36": "3YADJsSLtx2pk6V35ZcUeQXSx9gP2U8NmQ5BuvD1tTThJ32uVYd5bUJQb4zwygDpq2x9CqTGpHfGAq6SZN13fxFf",
  "key37": "2qLHMUgDy1GjqgZ9byjRH9uJBfYuj9rz1Cx9vcfeniCWTKt32FFKQM8149EF5VdLu2atFUBjLmxmhiS6DovMmbiN",
  "key38": "5E5KvzcT3wYatLgD7F28ECEHQcsvkQ8K7sjwAFZz2j9Ci4ReAy1jHzEtWTyJqPTJf6TVinsX3iUA4ELuqLrsTfof",
  "key39": "52DXfHuikQGL9rfFnjDqAeasdhnMHVFjYeQWki5pgarEZaWhoXMQZj2UBGCBuzwoykiLvM9212BJwvrRyBv1F3E5",
  "key40": "2Z43HyZMNKRMcRhC3vNNeYgDqtQZTDa5zoUayED17biwY2wH83Wj63gW4H75WcZkFMzTaaK8EtxoH8jDvkwJAtyE",
  "key41": "2Dj7V3zf1uW5dyNdWXTuV2eM3Z5gL66ZGaLKFeCeWGv6XGr6k5S5jH2Dd93DjUiAkBQnHnESGAfQ57AsXKrMpq9H",
  "key42": "2F4zj4r4yfP3j5UFHskfdfAjFsAR23ZS7nt2HvE5rDdpV1m3EhtVY1tHAtEvvMSTfjos6a5bTctDqJ7MQysPWDyq",
  "key43": "3sS9DxMrY3LrqFK3ueWUaJXvisrvsg2kszCcKkdZdVrzLeVJr9sQuPMLzdEBEq5eSZzPUfNVCTmGigpFdd3gBj1X",
  "key44": "5p9qucEMom8f5wAHb3kbHBCVn5MGe7gvxg1QP4LQaYrqtH2As6tuRdto5xf1rVbQmC1U1H1nWV8DMKVF7vW81tk1",
  "key45": "38KfoHHGDy14jedbaPtx5kK2n1H37TxAegojuNhTjiP59fEnPfroQJmavi9jWdyLoy9PEZTazx1DoVR9jd5pG35z",
  "key46": "3ZD7gF52aJj6Meq1jrNHvgmbPZxFjL6JnXGJp8kqMPVQWZy2YzkCBa5M4yN3hArC9SVtZ1LxVxXys7q8cvCLjSua",
  "key47": "2rGMNeZgrNyiKDrnEjL3X1DeGRmFfq6hzqjVgxyHpqLbWHkQ76P62aMq4thcBQTKY5wKtW4esYjn6R8vPwoW3MoX",
  "key48": "4tMuyXBReTGe96nSW9Pb8vq8D1bS2wyMp6MmHabFHgA1K2zJtAx4P5zebd4WRmaoKfJdZ6fPgphsVx3Pb8AH8ZxS"
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

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
    "2QyGdE4EjT8EjyjAr862zAz5oXdTuU5GsBeiHGKRicrx7PMAoF4jyqRd4qXG9UngaX46g8ZhfFSfBeqBscZDwxD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gAVUq1q7R7EmubaJ4YF2cmuFJGyfQQQWgwaju4ZUyNaqvoJNaTU7oK9nzr8javqQ76f6jFS2njQaMgjbFxwWMvF",
  "key1": "3CQXUf6FSkUCyVNhbvUFGAhN6rxbYxKKj7JXV2ksxsCHspUMkuEmnwxt6tRacwF4FHxY3KFntVg3UB5zkN7iyQ6u",
  "key2": "46VgFVZYi51dTd8BqWZU8uh87W3QALXm1Mta4T6Am5NNXoqPPSFAbyo7g7Vf5tNC1yenDg1k4M4jVW82t7QKxyWF",
  "key3": "NZCZNEuiUnF73U7HeBgBMHqQJi1pWtrPkidxiPGSwqfCU4BeLvgUVRwrXngf4yfjnp5ysaKRi53s6LDXjkMvpUn",
  "key4": "55eRYXGrHS9HynunpWmMaiB2k7eTVDhs8AwKFG6b2pt2JqMqnUPVA5hyG2hXFCbsserwbEdU7w9DxvvGr9dRybdu",
  "key5": "394nHotnDV173kn6wqJ6j5fCCFwvWHhMgXW7tMz7RfqRJUiEbKw6h2yhNWfjsRn4gyarK6SyyczuHUsoQngG7VT6",
  "key6": "3YLPTkRYiPnYytjnUUAbJCe9Xb6AwxMjRPiPHF89nEjnP25tkS4iqFSNjKTkV72t1XkpofbnetFqLmTwm7xovCyK",
  "key7": "2g7Wevowb7yoGVGD2Qcyw6q6vQd2yjm2LbsR5mvQi93Uc6cGxK4HM8tvUwxibKvfGcm7bw2eeppn22sYAkE4ZdH9",
  "key8": "3bNzVt2R7Wz3WNjVGjhXiFSVXTcntNY1Tz6oqqt2TocFj9NKrHXdUFH5fBLB38VAp1azMVFwB1ke8F5p3FW3443T",
  "key9": "49Aifp4ixQxnzPiC3JedeQSYgkqAcrRZiw7nHeWLGpt16gSkjrBapo1uPbHwwMGdKEz2qpJnETXcpTXpCPsWjmdN",
  "key10": "3F91Lqxu18EgZorHwVDAhnf7CSA2RgdQkAuD6CnN4wUK6smnDybfDBww1k52yZvYnB9Dxp6GkmAqE9H8ojhpgBSj",
  "key11": "4VTcHJTXHmawMS4oKPs4zNynY9H8Eqcm69v9oX5KnkyEFeFjZW8yh87SPEbKBRW8R3DmuER8z6SQByw4u4xUbYS8",
  "key12": "5ikW1PHzo6KXp5Bz4sAPKjdvnLwn2fd3XLXts1YjmVyLxmfmeucTsLrj7NaNd31vsVjcV5QcwU5VFTmf4h61sihg",
  "key13": "62zFS8Fz8onRWCh8sRwZWMoLGiVRYpWY8ihMkxDJJS3JQ2KrcERadQJahyD1amTey82iY4SDnPWW8BZGTSwQ9FDF",
  "key14": "L35Kh6LKDK6PzMshaFvDHaxjGKJxi1MFjvC71esWC1D7CsQjxLd4D1HJrKCUDLcZeVSxcgi4Nt9rDo6Lpkk87vq",
  "key15": "5A6buZkWQdhe9f6Y4ssRmKVDvAqM2quYaBXrTX48u8d47dGUo244gPXspK6X3trtYdevR7xwWPYMGw2s3o4avmMq",
  "key16": "4LkhBkFkdWcJesVncoqUeELntphQgNJRC4FXhSkBMc9wW6tjKqhJPhMB3NeZrywDkvKEKtTNjgarqnE8h1ygNDCj",
  "key17": "4inXuzigz8wgGvj17YbxkXWw4ss3PGJret9eA9NeDzahspL7UV8xdC51TB1TMvt8aaWqDj394ZaDPBfB2hR8kLm3",
  "key18": "ewYjDJu2BLcN67eSdsFAmH6Lag9e8oWsuL71KHf6apMeXxFwvqAL1wv9fQcUSrKgNyPWKLqN7dyGiwbv3XvYqFe",
  "key19": "2SJvyi7p16jxCVAnzDQgGRokuEXFS3JqXMZS9g2k6fnUW3Vm8sjbkhxodZnVWtcKMF3KrFByYqDsH1bgy8Ydj6Bg",
  "key20": "5Lp327FcuAJFpQXdJ4ftFsEYavjYCWTvDyvkTUikhE6QWdekM1Vn8maPPFqcpP1S6tDU48Vqqjrc6hK1GXj4ZAGA",
  "key21": "52caVmWML4bpSmUifMFmPBE44j1BmYDSb3BJk7QSG7DhLaMfKcaeH2JBeNkXSyS6fqsQBesGr6JhPbJhEjQhQgjS",
  "key22": "61KCZKPbZsx5UTE1VHNDfWMQQS7PJ9UjcJDkCUAExg4p5HAWHtfEdmicTuMufF1Q3H7mMLfgDVA2uJK3PdTzoUQY",
  "key23": "3871RG7JRCmKkHcZsW9c2WsevL3Q6Maw3og4RD7c2mvWWaAN9Dk3mgbo6XtRBF4dp6PZ5LSpkR6xFqHNUQNrPzRj",
  "key24": "4UjzmJPy3jX4ikuUm1NKGju1ReLDt6KNfhsDNcPPBFXEhaRA4t6XdqtozVh5QGgB8Gq1ZWwfKXBn2h62ZxEdGCkh",
  "key25": "eappPrc1qy8rP4tGaxusvk8dZdFro9PH1AZSPsFYdGKLRmFoR2CirRqj5ESnxCxoJtJkzPttSRyvSc1sExSEAC9",
  "key26": "ZoWYwKTWADbK8ywfPeCp3d1xRRvHZVoyhPPVUpibNW1KKENHunbdSQG9PDJ5gj5ias7j6MhyAwoq2jdyNQQVzgT",
  "key27": "5BE3RyLii1Du6VEMFLRums7am5JmnWha2eE9BJ3gEfMSURnEgo2ZJdYHBxZtZxom4wBWF2dvpm9VMxKJsJqbZGBb",
  "key28": "3o9TsWidTfimq3j2NPgJ8LAaJLmCof75gooCD3FoCXnwkD4ZUoKRG1kvaHsyotEBZffqRB9cXnf6H1jZGJHjyzb4",
  "key29": "2AU9kYLts8WP4y4vfvPFkJTnG8zzKo7dk9SsZLZVAKjxZW4ozcUioqiasLEViZMZjubwjbmTvaNsRMa6Pnn9Tpn9",
  "key30": "37jQULTdeBpGQHjeKPk3K6Kr2ynXfXuwp6AS48KuqhcG8153y3MLfz1KfbtiruV4s8wmH2bs72sXWZbYJTVtsEd8",
  "key31": "hBnFijx6ebJSQU8on8SZoQ9he6dJt6nbYeRc39AXnyvEPPUURbnRGvUUi6U6T6kcMVMRhpNNmBf6XHpG75afNUp",
  "key32": "zJHKqnXQAhsZ7rbTCsU46yRTYYFPCQwXvjC8MsWGWdjNNUUXh5cYnMan4djJcBs869Z6PsUp4wr1T2A9qFuMuBG",
  "key33": "5iYsNMaxRHrqtcFkr8dzKUjvg3LgcUybckMCneFzmtcB35upnXafHH4t3RRNxHwxTTmcCWpwX28TpwM26Tqt9KU3",
  "key34": "NFSpFoxEtjzKd9wdN8BsAd2DGhf3xG8hBtQi26X5aBKGuaJC6AGpwtL2w6bXtdZuWEmExkxF9e3Yf9CJgR4rD7s",
  "key35": "4vEHrtt2T5Wa592avMMHaMDuJdzSbMmaBWmb8eYyLRKtyLBtQ67CDRpNpM98D4TfLvkuFdipTfe4gP1mRS1hzw1z",
  "key36": "2t56GqJh7P3FznhmzfP3fJBL7hBTxrXhooTczfCyBHYcEU25fsimRGm2N6WBD3Hkqh9PnRjbzCAGrXBfL8GEUrbc",
  "key37": "SjxDmYU2WUmvBzEvLx5Acst5JDTNY3jML3fbvi4kd4t4EVZcfF2KN6VrZ923iCJGAHTPfwFXJscoESWoeYtZ45f",
  "key38": "5QGkRDsXcaeRmfUWKx3QnxQP9Nz9U9GwgqUDgqwopxX5fcCVSKZabVoJNFHZBWRC2Ap8rYWTWXaxk5gF5pp2BeTr",
  "key39": "49zzkyXojvXreexxSMj4xu1Pu4ytfKTz9zqHJc74ogvKT8ycJBR4Ki78dxamP1BRcx4ppZ5UdmxoVKr6ETzbuezC",
  "key40": "4VLm28G3UCC8BTDSyJL9NLaC9xupwYbivCeY1CCRx1uABXgQnwBs42ppnThM9oEcytERqqPjvREndqoXgv2Hncss",
  "key41": "5BDvQ99r2CCY11dzQNdhSdkMzXZHenacLZX3LpApsfeTF4xHwnRpvt8Xwv37cq4fb6EcvSWdbJgNt2M6knWK3oU6",
  "key42": "2ugEhoNqe7webY6USiUKCyovssMm7ATJ7CxZbbUZDjrakPCGsBMexxhj3eZ6teVwmrrmVf8nRCu6wfGTE2W4yJBX",
  "key43": "28w55x7PZPciioHnajREYmXutn5M8FecNLujqNKBgB4bx8oHBzjCQhzfwxe3FT3nKQPUeBP16mHEMPnuY8FVcgfd",
  "key44": "Hi371hJmjPXPze5we64pk3VBeDoe1mkeEGMh85F3wGFZC6EqffTTe6no3EJCoGZtae22ukGFxDAKsMDhLS3HGXs",
  "key45": "2kZJ2HxAfrfGZQshLzw9AEkhhG1rfLbiEL3W1ujSgQsRxMkxbkq67S8K77gnrviKjc3jGYNJXLMVfF6oLfdVhwuM",
  "key46": "fHuKtAbQqh3Br6UyC3EGzYwaC59zwJAW2WKhsno5aGFRk6JyeEu2Kdwqm6XzixghAdbzZcyLBCUpEcS8f8MpP2T",
  "key47": "4ybZyqRnodT3asAs5dFDm1PbzjwLtP87KEZbPu2fctE2W8c9CEbyATXqx8wX27a3MKJE9VLdBSLQmsAyC2xuStDh",
  "key48": "C7uSKeSja6ZRkEZuMsVGnTvodu6ctbEw9iVWTys7KczsQefd1cWUgGDXJQkdFWnx3vbL8sc5FZYkMRPh2pDzKWo",
  "key49": "3BWN5N8qRrYuN72Drd4QqSRgQDtNXN8z9ZqydeYUnh9TFVvZrye9qsChcWNUeLVDwAokRcLiU35d1SdEUL5MAsjU"
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

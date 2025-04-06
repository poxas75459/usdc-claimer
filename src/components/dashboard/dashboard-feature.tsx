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
    "2s5398K2HjSHeez77uQjitCBzBt2QjcGMGCpmw5MczrUEDAbtr9e9JWz1PaU1jL3uMToUkaZffqwTWBQffdokeeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qda3ckKtamBegxm2Q9N64JsHW8rYRMBQobo7ddjmVVE4zPM3bRdnsLbbfXkvsPTfGiQYqtpPe8ioPsj6Z5TK4hm",
  "key1": "3jzj1EMHBzwbiKFE3WEnpE6RNVYEUnSVJbmC3ZvhyRExcQoa26DpJuRxY7aKvmZyNJJWjQoQ74wkmRqrG3RGQNzU",
  "key2": "2KGbLSQfZdm8WsuMazpta4RY7H1mi58HDxnJCurREsUDC6BnjE6tsx2BeoYCMhaS5dMEuvHcSqZyCFC6MHVXxevT",
  "key3": "4ftUTM8bBjccpXLvnS21Ugvv3S9fqWQZ4F4HPTEYBNqMTq69rukgmVUTLQvjBSWvdkA855E5dE3zJc9BuehFQA4o",
  "key4": "iSK427V29oqcpgb8jkjDQhVC1KQScTcJsbXZb7oawu3y5MYjAuBej3QpSgwpac36WE12ymadask153YbSyE8QNi",
  "key5": "5SYoH2qZLnbDX2SUX5GKBf5RnSwFcHozwz4QV6qFFDg3Fru8wS6k7nBEw8hMii6ocYSSNMLV29PW46ZTHbGNU37x",
  "key6": "5e9X6eNRdV7SY92DT9mRWMFRyQyi273DpvDzBRzmavbWYJobkA5toLJ2sYtVsNJinEJCFEhYhypHSN8NbmYTuT3M",
  "key7": "5ff1pF8gxuswSte5uUspLgb2Tz9EEZfZcSGjsSNMFaGeBmE3YSy2J8qqKS2mBm3ApwGwGCnyyCFNZDsPD5MLKzkC",
  "key8": "2A7BuzbbNtfgWabeYQ9Q7Xy1HTd6Gk79dH74xRk11Z69bpmVANdceJvdgQuXTWgvgySYiiWKxhnHqAwJ8ckuKYeA",
  "key9": "4PThHVqkZgd5WDjRts2ynXo4rivrx3u7SEu6Fe7tqATvTvoYogLmDrcezXGF6XmUkr9A7XCPb4y9vftxoUHZ5VDi",
  "key10": "5sBMyoKAiXmv9F69EQG3RtTVfj45TWVTZSqcmLWAaLMGnEtLTke7FPiS5Pzv3hN1CbfDgCKaJnPf8sArGZ3tbNZ2",
  "key11": "5A4brW6tVw2aG5TLVBo6iK3CjKkGeXKfhyVdV9swPKnd7ZMLGRTxuKwSYQSYJhV6vXrDGgpK2BS3wDvicusfaoQt",
  "key12": "67Da7ACAaA4sq6w1PRPVbosarDKSrGYGCUQH2EJKCKFBfKhFWB3ZqXgHuitVMffRG7MeduR7YaiGCGXLZrsNTWa6",
  "key13": "2VW5PEnv8Jddo9DQCfmub7GrBgeTj7hEoEbfk95ZD3iu6NbFPLYTf6Gvr8KS8dqpH6C8XQ4Hs2zNZZHjHu4CGqni",
  "key14": "3tfTPuwtDvfqeQ6mz1pQY7feqzqxza6s7L5s1dHBcjLAd77An5GW5TeVLEBgADFSomsxnXyFTC9bPGdi4SdwGWJP",
  "key15": "3K6U8aRKZsjpWqSQ9Xhxv2j8rLaRbKdyBjHDaHfftXyTqvbiDCNy9PtV6kKyoZboBkqg77NPnLKHxsVzEzQFnxDY",
  "key16": "ojm45SGA5Do65mSoZ91ByRGsBUhzox6vuBba6UyeNfNiorsPMmaAX9o55NTRCyHszUN2gokLMVdSoxuXfSb3mEw",
  "key17": "2Y471kLcoPuor4BYef3moAAxYkpUsnEnqZhLxCTbBMHpQXqLyj9Az4cywAZDYXkvFyJmHEGLwGeft4hnZxER9FBr",
  "key18": "5HfA8WPhBUJTsNbxm45BNPS2EZecDFLiTQW69R3VDG9WGPxN8aMRae8vuh6J7oYnFjYLcv9kgpdxwSAiZ9ji1Mho",
  "key19": "5hQ4qqHxDq2FpjiPvtocdZ9MehiBYSwEKig1tjtpV6ckP6gpX4XAp4rSwEwFY9bzwk2ph799ymHFAeY2jV4uCFcN",
  "key20": "qHpMxGK7xBayhKnrheQN2JMjXb4YzDo4hb5eepyYptLhVPFCGUNT7Ygv8kK8BFABdAUaycJ75r7S91hWW9eiSGC",
  "key21": "2syHjcZXPjHJUZg8nuEqDkY5GujifRkSQmJRKhTsfCYYdF2GVog2BPfz2qiQXJ3n39aRYtju8m3yGjBbQZQ9U44N",
  "key22": "3pYpGCN5U14GimYCJTA2jm9amStg6cQ5fEFrUDDQVJtTiVsYyRdFsvubKKfE3A6yWgdyZLNNmDbpnxmyiUngUyyL",
  "key23": "5aWzq3EcGRZb7m2LnFwpeiuivxaMucTWchndkewUUYP17kxRYHS2LfBGVBhz3PapLsP8zF6TUJ2p5BmZeCjwLv9S",
  "key24": "4nxoNjgdwMjtisWSwTvqT6T7oqJPbNmdC2YWsvtZpa1k4kZ52JQCqyGjFtrpMQttGvwb6Sg4NqfLHKxEwV466nf4",
  "key25": "4B4Ne4dWpMviSGZZcfJ9T2GsW9nnuCGY1RQfURVi2rEW2xVzsLZAW4gouZXeHqfw1ypfeHEkvcHYFmiuAEKDXk7u",
  "key26": "56MPnL2YA8eZckC9qv1BcojiSu2z2SsTa8kYvDtUQxgczF1c1o6Gq5v9rk9HHEawmEXbyRP3CDZmQTwwJB37cUnu",
  "key27": "3VQGFwLR4QH5hhkUrbX7D7JZTF1qS7QkoL4G2DiejKqKFGoZzc9RjkL2PhL6JB74tWEGmqXe6VWoekGFf9xMiwSU",
  "key28": "4eFknMgoZNBB1EbhkQBtCZ61zYtr1GY4yHAneqMUvmUbT9WVAcRE9Qa4381ZrpDmajTVTSze3CptqrdGDcRfcv9T",
  "key29": "CDwTgFTv3hRiy6P2XyL6RMBEPHyCN99NcAVLyzKTJV4ST7k9A8UZ652876EsBX4XKK3sVvijcHG3mEpWacPhVfS",
  "key30": "5yig5yLzXCXuvCwwYdtsGj6CtJuMHoN5qJ6CB1syaJeSnEbKAByY23ScrddeHk1HLMQtviP9goebnqnAxPw1Jgsg",
  "key31": "NRkZQpd1J7bT4KSuE2hojfAo5v3JBDUcdxo5eLZG1GVycNrqMhS8h8JGUA1VMuwo5ZCKdruKsamW7F66turHFdv",
  "key32": "3jNpcxy2y7b7DRC6xvBhppB3H9mQVAKY9iDQ8WgCHaYxwuMGWDnScezGbZ75cdAmdyfB7rBz5W9LPBkjNth3ikLi",
  "key33": "2Nb1KRGCKuepoze5x1r4h3vj2xjA8rSgWiRUJvrquBNVLMNrgAqbeZ8V3opnQhbt38fyVBiJV4NXkz8bFQjumnm7",
  "key34": "43RT1ETJgNzJNYhyGaU4hJPCLSeSUX6Hpfix3na8FUw66Jx2RUmu19oPQrmmUEpctbdtxDh8byRAbvyZrBjgh1oT",
  "key35": "3G1HiZi9kcewtkE8aJdRqUqwgtKiM7WVdFmms4oEpFQNkvj8tKSKimBUc3cXYf5sGDXtLNipBFmn1bAnHoc3RNBT",
  "key36": "2mEXEVNLbmrcDCGK8M386uCjzVWv9XqAmwKf1Y7izwTD7wdB9hqQSxg5mKygkEZXc8GS9iNj7zn2aKYQbBPKSnoy",
  "key37": "EwoZLWwLNhiuZKsbvvwJrNBZhcLvXSAwgXN6GaAqaCsTjpk4ZPs4sGpUxBxFjBqpv1hLg68fuXDfkUdhBksCd21",
  "key38": "3g5JDT8zmL4zjquiJSNQ3o64oj5JvKLBNiGC3dG4XRKC1fjaH4PR6NQkycgKj8Gqjy6p2RpK69cv9RK8JGKWqN8J",
  "key39": "5qW8LCx5EnQFHPJChouVSwK9Cg6hLVPAsPbLf4Ddo6D8BdpYCFtQbCraABUSJLJZkzDVPt8aB7njT3qvKrT5HcDJ"
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

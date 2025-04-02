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
    "p1BHD99XTquGimxdDFhdueCQK3wfQ8LkGK3SNV9SaeuWNoYidH8bL2osWfCwAQbNkHdncni3MDGmRtQcKaNuhux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fArT3PVD1LbFKrzgqJreoVUpoow5KbQHZTE618eKTMNCT6b5oeppMmcJV6t3QfwP3kwQuspmVdy8QwSZu5v8ceW",
  "key1": "4Xcf2WTpZn3VbTbqrNNYHZJp1Mfk2rCUDgw1WrS3oykLeZyVkhAftB9WgQiZd7mr1LbTVKhhYcvYSndQ2uGfDtP5",
  "key2": "3o6CMSdC8pt8jqeKmYM4cLC26aYrf3zEGpn6e5yS8awSQ6tzEcXYm2324h6BLcmUCmvnDZhoz8gh1rd5B4CKKG6S",
  "key3": "5JMUUVMKSuC6jt8eCzXaP9q3th8sN9j68AiP5AxaCPSNzoiX72caF5rbnKKmmWsjbkedx18puut8H5Gwe9c7npQ4",
  "key4": "qRkLq63kzRZNPi6rnK9AH9xFci8WeovLthytmtiEpJ2uMUZmBa7mSRjUaxXBipGFiAgaDbYhWX4S59HFvxjkpLX",
  "key5": "5Bhxscf3tz95soAxgSXxUQ5G7UsKgb66mwdeKHE5g5UeWYkYsEqTmsjPvt1C5C8XhYWJZ2MAMbH8UouWo4sfQqQv",
  "key6": "oVbvn835PYmModqJNgGp4DqnXxJTsXksKYz7ZoMS7EWzGVPtYoMcHLCBWsGAYAmP8oxiMK5XvaBZ7xkMjSXYixG",
  "key7": "39fJXjW2Q57PkG9H4S1yB84dPuQVQhdadBrrPa3dB1krnqdNiT58PSpSCv9n9XsYvGejUUyxcER9ZNxxoKhHA6kB",
  "key8": "28cmS1t6hA5jnwbvguFsMyxH9ZjphHK88B2HjRHtmaYAurfh87RsoogKG3cjG6VzjzFeGdmhWkGYqV1x9iCvrU5N",
  "key9": "4FX9bRtDHoq5C2Y6g3Ck6qpEkHLind4AJyATcyEZ46vouDnaSzGRKn4XP4uDkUuXeGD5d3yL1o5qsCJEoy2nMdtz",
  "key10": "55ewrcnkwhyYhHHQc1yj1opYwUpw32wkJTXxGNdpK7yyW2HDCWYpEMi5rPJM5mZgaS22joVNSQdi2ZTmwiY4xZHt",
  "key11": "9eUAW9Nhi1bbpQxcXY2dnt3eqG1JncSuTDmyWNCAFdHmXd9GYi9bqUGQV4fu9nBi5RVimc8YhQjNSZR2NBCto1W",
  "key12": "DiVvkVu7LnpamXiwcpMbe56UYhT4W6HbE7V4Ys3zNpSUSVKTRTmfCbfUnp3nExrXfMXbbsKZF9ZnsbjsXyXnbpc",
  "key13": "3vnBgYVTwnY61dLXzsb5bh8dYeKmiNe9AfLrm7daCSeNvucARjF1ZsxsJBDauNdB2STAniBM43yNEVRU1uvQBRuM",
  "key14": "JA5WeFLBWyW6QpN61G3GcqW6Ru3TQu5ZPqpEqZEaE9XR9nCUnRYZfa88HY7pRoRBSpz3Mq1A5nJZRuPui5gWCcp",
  "key15": "2WnU85FhTeAMT6AnssmUkAFsdEyUVyKMSFSCVqXxvx9k1LGs5ra4bdRRSxfCgmiuq3LLggvyjPNx6A85Upywdd6F",
  "key16": "peswWgNx8cJ2fqNpmbPuzi53wpx6qbjoHgQc23fgmxgnjWsPZc4yL3TTNZTzVMcpHZXN3hrMWoxqMtjuTDSSgW7",
  "key17": "2xepyQ33L89rqa9fzfPLexHAgL9Xntn63TBGN2hZ39CZHtmF6DeuGakXzpS2r31DKxXJoSQWLsSq1eB8nvy8rxK7",
  "key18": "4jWsagPngVkp6PpHP4YKaXd7fdUriRRWHvpwdBYqDG3XEHawboYWLfLhtY9r1mAWaMeCY6jHVWfqMt3woxr2EosC",
  "key19": "4QhAmyCLso13rMMSv9VreVLP7RpQq2FewyyJoFMAJ3sijaarixzwbeQLZuDNsNemiDbuSTSvwuJY9iGWfkyAgFcN",
  "key20": "2HS8en4MZD1tJLMyXPQS97nn5LBD6aJvXdsDT9cRnt4cwyKkj17w3U7QJRVciEuk6XVnxmQ7B1QWbAEkjLeDX7WH",
  "key21": "55AgNqTWa29VgpghUfZ8CFaHCY1Hq1vARNYgEigQqWbZGeqAKUg5KXDks2nd5vdaqzorvtsotPMwmGMkLRjU75gz",
  "key22": "3GcGgJhWYJaSJUVHxgUYTjZMUu6kRUSXeii8GVKvp58ZocFViHFTC8CVkQAGCtmi72PPZuLPx3tiynrkpGv3yVKr",
  "key23": "mRm7Zn9kcu59ZDJWwvGrkCLZMwAv2HWfBaZYsTksDBPuTwSsnRFGV5WDpdLwU2ad6n7sxU4mxUXDo2CzxRCcv9z",
  "key24": "332Tb1QKABzvGWQsexEMXfWLxpYKXpCqtC3rqWt7T7KGvos1pki9pP8HNWiZGhxEsVncCpU4PLJFxgHUDZCP5EeL",
  "key25": "2jQRSyKd9HSZPPiCUKZ3P5kiPMizn3njKzGByDzsTzf8WSGuTrayL1NUdSWSYZnw5jR5DgWkuhoyWJnwjzMNTvTb",
  "key26": "4JA1fjbC8wAtYigBjHqh25HGd4TZaBJkpRyzpfA7osNotLXHC8SLHC3bJKhrUZXkWSLjWAJNjkiV7DmhSxR2sG2S",
  "key27": "3JvYLkkhiC39tbupJg9XVTLBxKLYZ3ZuTbRQxGLf1yCiXPGo95k1ofYifwip6fCuiiZYep7VckR4TCoxdsWdwmsR",
  "key28": "2RXpiSXSjxqoYx9hcpvumTB2xFoaSyWmyZE9U6dkiNCWNrj8xc7uDcQN5yk8eJUbFjjcxSa1oPUwKogisGCcSzkB",
  "key29": "fEn24pHq8wit1TonDXtw6h6PniHZGQm2kjq6nzbHizYTCBzFRAzNXLu4QBUrHixgsX98vKNX8Gu6wdUKYCnrvch",
  "key30": "2vNqP775xAafLyufWHo3Vma7nwUKP1RGmE6McYbwXmYXgsjE8j8DAC6NbwcUYQtYqpbsn7YcokxreuxANi2eRB92",
  "key31": "5K17hUiokjuJyTx8qRUuNxUmxVZcXURReeiVDAYS5k1nuDbMn4BsvqVFRnbPhRjSxgRUta9DkhmB2nu5Shretopb",
  "key32": "423xRpjS6zGVotj7PPVpybxoKpahjf9evu99eFTPAeKqeQiDufdFmTrvdPptYX8mBDJcmYu9Pd8j4xqJSvrLrSmj",
  "key33": "5BjWbt1L4EKatV7iVCxiC6DMKG99mAkdf5aFA9BFT79E8RYBcS1F5y51u9QsL6zanaSvmXG9uNj4Xow1dWBdbyMV",
  "key34": "36HdT34wUcTcxhTHqaXnN7c8CFiqjdkZTnuzgtawSuXR5JhK1PJUy3gE7HWx4g4cot9mV8wsHCuzbAx2PJqMosC9",
  "key35": "3ZjPQqvEpPzhi6a4uWb9WaX7SG49bS5f3jYLMzFPAVPPtSJ4DXmCB5fCW2E5AVgbnvtBpZYLPEmdUCF11zKXYBHn",
  "key36": "txtrjNAbQvGwncxQNtJTkacAWYNmH92CEvHKKEUjBXYPUB4jGkZdanJJnrFaVg13RDS5fHwJcUuSVP3AoucUrJh",
  "key37": "2nYh9rM56SFjydMwPCtDuavjB9PSf4HdPhEZ9TdvvMvuJ864jvB7JaATGgYGo98Faex5c2zhHyMeEr3b54g7ric4",
  "key38": "3HRLwaNx4Kct5j6DbEAE7wFqj61pDgkVBeGMYKqhTGyJkLHMYmQWvLLyYEjsxqoirXx3wMBX4DS82pxJpz7WZcSo",
  "key39": "2JQUeUCLnRMrLsycWakMaw6xGt4LHDtcBkLxPtqV6HXNyeU5oqv2LNPM2qUHmV84zyitYou4aYbgueZaRXghrmBW",
  "key40": "4GhgieU7CPSPfcJytC4Y42vG1TekVbx8Ukiog6WMZPW2F5WfidEufVYVirer25SUfNWJg9CdLPvnpxNWR7Ry5wQc",
  "key41": "2L5b5xahUqWE1aEXr8SEBa8BZEzbJpvCpNe762S5QpCXTxMWXzFYq7Gv5iybVm1JtDWNLcJP3mWmWELmRKGk2MX9",
  "key42": "4D8a4eki1VVcBweKqsjjfm3cJKPaBnkusBRrPGso9fYjm1seKFztQrFaRUxJM9i75zeR1XGAacKnEr8KyECkjbMA",
  "key43": "5pd1a8TAtWTf5CyEFUz9W2MoqcM24kgTc96H3fPQVKysXqF1kDNuQuum4GuvbJ43DzgRMZmp4b8unaqRKrWoUoiq",
  "key44": "3RsJN4uegmv4xd2wbPbVBFJv9PvA8wAd7LSdNCMtSZnTmdBcfDAdFyWmKGUHaTKGp9hGpcHhtxZhvoRpq4rKxAie"
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

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
    "5CTcbiGXkTDaor5CTXnfopHeFBWLdUHUK41ppmiESxUhyxhFRxjCss5haFeGvACGYGiHAHhJsJvJekMeSbjx6ziG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qYcNz4WRmYA3dy393m2S4ZUgnPtNMhwQmtggfXqgo9byut8rYGcz6myDEFGGitkFnyGnsrPNRV2sHKMjNGrbMme",
  "key1": "4bko57bUNasTokDAfFqbnpU4ny7LgReJKrJyHKeKTTCAdjhRkote81f5Zd8geeCLp66BXvUtDmWfCEuLyRQzzeX2",
  "key2": "2jqaR6unoBvRxLhmvaeeSjStneDRtCxU6pBz1MonASFL6yYvEdFm39sMJFKHDUqesWMveaqCqaMgbQyArfwGcoPr",
  "key3": "27ycADyV2EiQGs8szKvD9wVYo5tD4RmbNH62vMtRannGxnbHdebxFVmXZy7ehnjpjLa7CrQ3w26JittdsyoT8yzH",
  "key4": "4LVdA2Rxw4f4PLNehLA6zAdMaEWEcEHaWPLGBmLD96GpJTG69BMftC7FJfkcoWgkkb1St9pw3j8DfZBiYbZfijit",
  "key5": "2V2cDr43jaJ5JK7AZi9RiC97qEcFeeKt3XiAJo8LthrZExgCfwwZXBvtT5mpDrB7k1RytTHKuddj5rhUp5YaTzZA",
  "key6": "y8WQnbHVS5E6x84H9ugxyM72A3x4HYxuUrHaa2Qe38MpQDxRWVL8BvhFVEGs2zmwikiWn2qEWtAfuzHBBFD4Fho",
  "key7": "5rBfuCSHwfn2FJM6HkniiDtgd3JvYJjVqadYg6zvbSK6myF6QvCpcLje47kp5JYVQbEJkSnsE7uAQZMjWp19V8U5",
  "key8": "4PBuqAQmbR1tkn3RGtHAjFDa4icJi4WWgdeNqGo85xpP7HRnW5ftY5vPB7gJm292kRx24nxe4bGdBDi5PpSSheDF",
  "key9": "4AD97au1Udfcbtt8p8CZpcNKUJRDk5iYiQBJkAwALwmkrQFE35rAS5bji29kZcZgURBzX8SPS6JQfmP5Z8zSEVp8",
  "key10": "VrLBWMMJcoJSGWApBock6Vqhsf4kyJDojxMo9azyD5fut1iCUU3sV8uWWSJT5FUF8nbn86hvcDiZ4eHw5fqRSX5",
  "key11": "4g6YtktZPpRS5SDpvBeuMcQ7xmQkBoeBrdLcv57cppskAy6NcDWLeKbytKaYMstKdhJZmAjRQ4JnCC8vckmtJm5D",
  "key12": "DFbC91z3osFpSwFLLv5Uuxaz6Qa1xGXw98K8NkG4UEtGk6cn5vpQHt7Lxpi2rdRvFpRRize9VF6iUtfTyJvxNP9",
  "key13": "xdv51uaDu9FNdixvWwRC5FGQhX3pSLg2CP8UeGWr49CU9YTfZPDSPdECzReqeA2h5DeeJdooAxNZL6wW9Yajnwj",
  "key14": "4p8jP2P9GZRCawUkz8wWMoHs9VBf2mGdVcXYatqdiGWxehZPZT7j6JkHubnXutFFJrhk2VrRQfhYVDeC3LE7Mkd2",
  "key15": "5FK6MHG7TKSXtoXq6jn1N44qpnUNNXDx9SPL3srd4ofbqRQFuVoyVgvtMTD5gMT9dZ7MN1hnGxQxjpwV9uB1ZqoT",
  "key16": "2u9GVWmdJ3eBPz6jWRrGSqKoTsh7t8WDdmxbYeKUC4Wwh8epYwCa9bRXj2TBdNmTwpLhRbhCxRYknRiWZSPKbdu6",
  "key17": "4W8NoJbgW2aexSWsS1bRG4KdCEvciSZoegiKNcxSroLc4EsZMnDM8BYzqzK5QXHqztzijVun16DjBREBT793xBFQ",
  "key18": "3WWpeD7N96M5nBMbExSsp7tYYp6ZrQYUrdHZwKnpwj5hzfzu5f1Cuvk5Gab9K1Z3kXzseC1sXauN4kg1dZ9jLmWE",
  "key19": "YPRBRcUPRSj3kWQo8n6VXGVwkaEqQ9VJ127VcHkztgu88KD86vBGfFj2NCQvxRHiev5uTehD4kZ2W38v45wyVsZ",
  "key20": "44BUX5LXAukY1HfrLQgWDJCKfxjJAuYH5zjPn1GZ2XoXjL2tAXBuzTHfPZSgw7iGZ557oZyKLx2PT5PHhmWzMVQp",
  "key21": "3aARsn7bSAqzHYHvHuGfJqHLP3aWDa5nowRMmo25Jp5FHE9j9SEsv4bNJdfv6QSPHueKqXKqV7oVLtYgnitXPmX7",
  "key22": "2MZytbRTuPELvRMPB5sWoCg6QKab2HgEiZR8FmHt69pGPUNhf8GNicbJXBgyxfsC2PiaeoRpU46arUynkP4r53hX",
  "key23": "3xThF94s7FzjjZP5BqSWYgL5nzbzck5fHQ3gVDUKU3SvwM6oJbUAW7WgniMvteSRDskzVoHUkjMcvFaEdqr3rnJ3",
  "key24": "2tgraMbqFWV8DY4Vew5QB9rCy7MaZEtfY2zmC2yjG4ynHgpjuzXFkeBuy46kMwxM47am2V7S2BeZvNhSwwKVAv7q",
  "key25": "4HqaU6rYBLK6XKM3QnqjdGsjFGhrqSEaNyT7136Rcf5w9uDgCUmTHd1BHrVHb3gggudBKcAR7o4misgK6Wa8pgah",
  "key26": "2FrDfm7sbE8VTCUB58mDFFJQtJxuJ1GfAeScVgxxojtvgLG6rn8ehGXt1ufAFSjqyoYsQZzkq1WLgdvDtNQGLSR3",
  "key27": "x98H99MsTB7HzC8SfTDnsgPbNsQ1knv66RYvTc9ANDrRWhfq2GLwmGchtdQk7cr6VhG5c19kUzu9khxDM41dX5W",
  "key28": "3HhpHaa4KKgHGzjQTK8qvhJxCHwMinpZE8xUaQpe2jWWSYKpJmuw6rofsdczbmCsSou1oZLv5wD9kM8kN1ftGFjj",
  "key29": "2rZFX9UH6JdraytgFhp8WRmX36jg7kjcrVSj7zTmQKaEeN2NM6X98YKWUgcGoXgdbHdaB76Y4nT2YJQfn7nRL9Ea",
  "key30": "4f7sMTSdsJ6cXjYUfhJ3DBBE8wfADRgzb5H2zq6BQJEede2JM1ZB7pyAqtVscQLHSnX7RMoNxpsHFRuV2QhCQq21",
  "key31": "4K1Q3HGX9UPjGXXBE1cM6MWjHCffQXMSpAfTom3w6QHbv6sTbLUVh9uNCmih4kF5G7bVYLKpp7LECg1bu77wnHD6",
  "key32": "5NsVuRxWCiCRss7HLSjCaMCt8C86vhCtnHkxTpBS6qqHFh7gq2WcHjYgczqfNrB7ZfcRxDK9vV8hiBYP2YoMNh1Z",
  "key33": "3RoJwKhNpt7mHMj2eMsJECfVDAZFEETe3SdHuqAjRPos6iAh88zutF3SDW4xjvbPu8uTbFbeuMitqWiup1gfYC7K",
  "key34": "4JWQxP3VJkPFvQdAWa8ZJFDUCmQj9525PH6qprbprVxRmj3nJ65XzrArRze4NM1rrWsEJjHabN1nr1nF129rtmkt",
  "key35": "3JE8xqqKinLugqphjPiB7B3smFzwhZuin4XWdk2cZz3SqL1NRnZuxMTUpGkzhh4YMfoBcWqHPrhEyRnWbTuvygfM",
  "key36": "3Dp1RPEvSUukFMKme9jx1FMpUhhfjEdv4CBCZaiLsh4r4YGfGQgQjgRm2rDKho4mXTowDY4nT8VSMrU6Dgx2gswc",
  "key37": "5ywonWt99ZCCwEzXvnKo2H4hnod4q5CBGCmPa1jkx1kdniMATXT2zAzFATT8e69T9QVaujx2daXT9V9eTVMrDgwe",
  "key38": "67aoFYQMnLFmVTZKUwHUiZUhtMzgLMHpZ5DEmNbXFJyheVFXyiK3c5MGxurfiPM1JfdHRr5Doii3nGubEGRKiQ53",
  "key39": "3BZajbrnugZHC5QpRCGTVeT2xS48eS1k4GkHQfgF6EwRsoTdbWVg6EcksQAvuS9pD7aoZZiH9qkw4r2fRG4apGeG",
  "key40": "XG2c4hUb16MkDXKEGHqiU9CG7w8gTexbTfZwt76xKyvxCfRerAiDW6EQbsYTVTWnVMXHManAPmb3jx4rNDCB9jD",
  "key41": "zpqhXDwP7rGECAVwnjE2GecRfwSzUykkcREsh3xDQkMHutpQGNRqmRpcWFtxbbT9AptS6ca2daBNvhgDRkwrUJv",
  "key42": "xGGzSBdRKxzWyzCdxwEYwnTCfUf8UjFqtJQh5N51D6tAUrEb9aHXMNuBbd2yRnFj1sTmwPFQTv1eJvc3w8SBDMS",
  "key43": "57UgvECagitzjzwfnwDcYrhDNLUfxYeRV9uaEguy7NNzh3STCAw3t6Y4G3dmsvnceXrZBqjMXVcWJp6tsfT96KHb"
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

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
    "4KcLxxKrUhnRwiPZTV82FxdLdThV1K5N77vbzjwAc2zXJdL4pdkoBRQx41zSJGp8KgzRqjf7ScCXgFNZiuR4KR8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C6TWm6dvpn1pjDGLyQzeVK2ePapnWaKnSUugFmF4N4y6CARFEaf6Rooub3GUeotL49WDYRfJ4yjgCmqCqN3BwLB",
  "key1": "3vLwGyaoSmSF7WWrFjbVUhbB8GKZiEd3iNN98DLxT27asQ9jY9jxkdWjLhTbtDQzT6JVttYDD976aAp44kmTNigx",
  "key2": "cisAn1Wc7RSndqEb55bmGA318QMKSy6XYUeTEzSAt2SWJvgE1bqgFBpYyzQi1VtWc49iCc8caae7ZqLLa7z4ZNR",
  "key3": "64JDcWsJQCJBbT9Df1PwpYR3P5CVmE5PzidnmnYiXTH8qjRcWiUnbrLq5oDoCX72fqoMJD3cbAMXrgXAPtWtSpQg",
  "key4": "PdieWMi8DdTzbVBZWGUhRqjNE86Q2umyLjNNwtFfGCjaCnCyXpVt4qrQdVW1Mra8cTXGsSgfnRDgNtPkCyNUJhM",
  "key5": "dAWtRgoxpiDY6U8fTPpZNy5FBb5AET86HTvPXJxBGcfwrKBgJJZq9aPWo1u7Bh2fWHLDPqLtHMGqxyM35iCyS7s",
  "key6": "2TEF7oZ1DjKr4WhyZufCTPKcWshGLUoEqwHBFp1QMiucnuu3cMhVVy8hKMh8CPmHHKC9rNuh2XDUdLG9VBAzNhGg",
  "key7": "26rSikj9ix6SdtxeHG3VbggVdKsxaYb1pnsDQeyiUEVRLAa5xFRJ1UfTigAEvUQ4eVwzveeKQcASYWqgL86CRpyx",
  "key8": "3cCgdMp49qWw8bVUzj2rvWcNWHQkSXV9ggSRmghqPXN4y5VpJWBJ11QYpwJQFu2qE2Rw2R9fjnBg1WsGzx7YbVim",
  "key9": "Mp7kEqGCXgXJg6XT7VgNnDKQGrpDcrEHS1KZB9vyKN8ewmjqWFa1moYeDfpeSVBmSfQGDFABiEFWmGtwnta5USE",
  "key10": "4TkXo9dMpjusJs44szVbcE3YGwyu74Q9H6JkQyvwPL7UrpAH26pJWCUXaD3Jn6SfSHbWUsJqapvXuDq9BGDoTpGg",
  "key11": "4mBYHKJfwdG7Ud4neDaEdz9HHNb6NCE37vULMqsEj3NEXo3JcAee5ashRZYfhdBhHCHRTGGj7C6VReV8XcTiVfgr",
  "key12": "4E5iRwX78GDU9vBZtBUV6W4MFMprX8vPahuDTcWrxgCMdfpfJao62SWrYaH6vFQfVWACvBBGcvRkjyaw6zsBesSy",
  "key13": "2z7PJptMcdBnXxUHPdXRSD9Wg2XtsVj18fsXYPvzZ1gwRLXGkYVQxDHNceWH2Y1khZWEQbAt7HyZ9TdwYi1JytPA",
  "key14": "5jx3GhUrjA9TX2W7zueu2MRrWQB2nd7qsAS4aq7zhSz2mYaTBngQcY3L2UPpekorBqCHRoN5ySsVdbYFi3FccssB",
  "key15": "3z9BYUedpfToWHK9Te454XYJH3Y5fSjfgUTtxaEhbpc96NfNGV5U64kpAyDFtCXjvGbfAZdZ4qEoHU7C2gmYh2C7",
  "key16": "2HpUKQbpEXvy7Zt5opRRBSWWUu3oU2eXknHREnDN2HMR4XBpSGH21K9gTHoj5Ydvd2Y91zCQ4YLeGEhnFbC4mDf2",
  "key17": "2WurzkLCnwVx61TFwYQKqaN6MD4BokprVYz8q5R2oupNnfnQ9DzNHwcuy4YG6MVJ8bHzCn42pD3xAFB9MYvy5ba",
  "key18": "2AtSPR6wCzHVe6yyhcMaCs5zFjPuhQYDHxemVuvL8by9DB2EdESnuqAQefXRBQC76fQSdKVdUWCTXBDfJFvG9Kzn",
  "key19": "2YFbod3gX5qtxyRt6xtebxn4pCjd2MndMfNaqyUtVUMqdSyn3fwYeraARG6uWfG1GuNvKMbZpstPiCDUXpUdZYvU",
  "key20": "3sWWwBQCHYHqcVGeLPPw7qpv9jHsneSaixUuCpAHsZrGh63QvWk9Hcs4Nwu5wco9wTN8mhgaiRxwgN4gDW2Jsonw",
  "key21": "63WWDRF7SfWSqPjJ1F2L13DGVYdu8zuAoYnKYny5sJByoP7f5KBJP3eH2sxKhogTY2qriLGQVufWcheiiun3dQC7",
  "key22": "3FrKxcZfus2oid7TcudpwB1tkSpQGyEdcgggXrmky4bsGPmF7a9Wk5CN8a2AxKHAUUKH7NmnT9W6unnDDoAtWzWf",
  "key23": "57xqFANygpzNQ2WLsF2Z8ge8TqZ5UgMw987pTrCjy4GWJujQcKvWCuDWucb2PRY99CwjaAX9JJW2kMQbeRSMtnPR",
  "key24": "3KYgXe8E7HdLpxWSVX3wGp1gjtANb3zzMjjRD2aBWweogAtCTmgsqLHXGAnhRuHxhUsVYvUT6YvuPBo5B7TMmB48",
  "key25": "5AsvTJJySSjEHjkoEed71dvc3VRN9USdFYEo1pxoW76qWbLP7UX7TVokHj3pCEQjX99UsSEv8vpn2vbaS18mTZtw",
  "key26": "K5ek32r8oQB7fmoNubJdqkivBKKFbb1qKWecHTemzhxbX4b99fBC4JcXSSaa2HWKarEAjxB4vQMRtTWyHcqEZts",
  "key27": "j11dPdcJoApueWHykuaW226VaRpGzBF4esHgjxisxTy2CTJXoRABKSQgCWvfkuaQiGSqnGjnbTohB8792VKNdim",
  "key28": "2CBGcBHp4Su92VYKCZkYsiUHAFSrLMBw38qKR8dXcPwXFsdCPV5H2z5grVuak9g5hhiWFBGvW1b6PYfq51FMGgY8",
  "key29": "aTvB49qXDwoQSPsBx1fDbZ5VAXKNXqbLpAPeLS9NvD7Lm75eVr6pw9Xn6n1m1Eq6GyP1ieaykupBFnp5jYjnFmd",
  "key30": "42qA5V9NiFEFKd3Hrb6ZW6rrtQKvK1p1ECqpK3N3KLJha1LZjrRKDdj6aeiXKHTvtZohYqjJfkgofaAbmLPZtbSv",
  "key31": "2zaom1UdXUX4Hy6Z8dCrFpeNs9NF3Xfexg6ohcLwkSK7sjGY5a11mku66cvRXGzH5Xx5npP2EGgy8gbeWP6JXQiJ",
  "key32": "4NZq2aebXqhQnDF4eQkP8My8CkbqQMZkZKSWKCDRdcNdrkazvfHZwYCbWnU8k7rRpQnRP7BTu5ZXjVpELTuGWZMx",
  "key33": "4dNUg1jE6WTPnX7kuW1h2hjPBy8XmMSZtEhAhCqTp7KeJ8LD13MN9bdhQU2G4yRVXe3oWC6AoqqSBKvDeCH2vrXT",
  "key34": "5stGjM8kYsTw1KWQXh6kJZ5k1sdUzEdPHhzbb6i9XRFaZN6egjUvX3Ym8BxMcPW9WkeHViVm49j4bZfinwADCn57",
  "key35": "65YCrAvSsWR5XFs9XxuuRWE9ntU8F9apDecVHBR7hLkDr9hcV98qf3Pw8i3wzEsvtU5bnFwJgYg6G37eDidDevbF",
  "key36": "4He6jBzwutuYaHVgxijmeEefMYFznoSFW22fjUMYU1H57Bfxod2SMY6qHYLD6G45anXi7aFAXzBjcWjs7QM7LrQs",
  "key37": "2uaCgMrq11amuPLCbpPvC5393L75xiphNUAEHnWz3EW39P8ocRhXJL7bQDzk6czfJSwrd1gGstDXsX8FS33Kt5LB",
  "key38": "3T5Mf1LZmh1nyrSqXpAXqtRnccoMtQsMSwtCupFxKewzyvrgNanf44Bk8PRqmFAjXWyi37s8AvT4hXjQXe2fawkN",
  "key39": "4rvJjWkNzh18jmFcKw3WS49feSFcofsUxqvo7pz91LKMATisqxKtVEZTEttqFw67wcC5DubbPtyj2YrTVha9e6FL",
  "key40": "34T81R3XQR6mJv4NVr75gZ6Aq1zNSRZREtcex99bhAusxC8SmKBqypgfaoXtuniEd7erbHHC2vmyvb6WZniPbHkg",
  "key41": "2NFmX5SGQy7hxg7yrAMdA5HQ8UTZnjoTx3VJGqdAmn1HkFNRtZr8f1eF9fFikG7hS7kSd8oTnSP5BiMLv25y9r3N",
  "key42": "4fQEDCLzmg7QkbdDPHRMFRDy9QiQixXKSbscp2VwRpKaJMzQM8Q4Pe2TGaL9tqMD5vEHbzdgc8rQXHrg35qebhB4",
  "key43": "5iGWDxwfRzHDm52arovLXzZ4jnhWZt9iHHvqEHJwzyQ59K1hVy7XfCyMBdgpjqASuk2rwt9ENJRAJ5SaNy1Qq9nr",
  "key44": "5AeqVZAhQszKZnqhhqhEKk9Y26upv4zaRuiCbgWUgJSLWetWq1WjABKQ3ftFgxnX62qgdEUV8RnsCAomRXAXsZz5"
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

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
    "24tmKG93YeRwtLxdbnQ5meR9ve3bMqkzYL9X4y7uhSo3KdtDBFZtKRDARuBfSxxtpjo9tPZks8nRhh8tMW4NrTL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YLpDsyxvFpvJUB2ivoBBg2PPDkmaHedr2p5K1UvCK2GCDTPNRRZG48zG9vqWqwKViNnN9Jhn4DwDJo2aD94fpjt",
  "key1": "2cZjPzy9tWfTp94gkLXSo1yCRETXWVa6tbdHWiKxpQfC3CtzLfnHaFG66AL5B6Nz7wF7H458qE6FgUyJ93ytMAje",
  "key2": "52aNeaSbAjCQyo9x2KawHFY269uF46f5MQUtkvHq2fUcSQL7ASADPw3PVVAPT1g8KdUr794P95DojJ7pjWNBn8eh",
  "key3": "2rdD9ghxqxRFGWxpqkZ6o7S6dtMjmpE1RQq9KYTf6foxW6C1Tu5mcuwt3yXaVDc487S3wdCSMdangP99tmwh2jwf",
  "key4": "2VP8zAuvzG8eVuyvP6n2nYRQ4ScZVmDRQTVr6DM9uyfLi6ChQHXRrUTMP7f9gsXa4pwi9D4DSMZMJmpedJAKaYcs",
  "key5": "5VHPP3LLjoBcLA7BaPRjan9V7269QFRMvsMASaNeHBVK9UkxxXvv3fpdbNsEuCoyyDimDNFcTTdXzWPTJQmvwNbo",
  "key6": "ubgBydJ56v2h2zZzPv2KgRcixBKHntxAxdVJenigR45WWhiBp6PvUHeuKGEKkayUur9knuSVjbcGhmf4MuumXYJ",
  "key7": "5NRnfVABZHQ2hqRPkeAjcNGpzAhBuzuVhH3E2hgGxvPNcdNTxgASMJpSCPcvbjsDvnDHRfM9aoifFLLzriW5usnm",
  "key8": "QKFkw27UZaXfryGhgQpCSDhmBbWFukxvAAxfrKq5zoSRxdWsTMDLKdS3Xvycz5fzMTPW5QPiBZ1x8Y99ra3Rzu4",
  "key9": "2iDgWvSTMGPKKwhoH7CfeFQ6kL9oXXTmRDimxburVE5aozQdTCkGmU4jRsvUpVznXayRHiiwVb98QPrJtoc1K7NS",
  "key10": "4iyRF33tqzhb4KQvYXNNkfxvTDDmtqgiYz8KrzbvSqSDxwS96j1NrLbuvMPgxp2KW7rCjV6jNd6q2YGkB3NLQ5jG",
  "key11": "2RpcrsbW3Fe6Hc3ZSNet4N2yz4vYJBzSptazqpW7eqPSvBYmWLoLVqgtKxX49RtxvP5inoCVuWHmBh9f9fGVK28p",
  "key12": "aAzfT3adz3bErUMa6sFxuzWJ55hhCbBxciQoUt71Ms47FsPKZ2jMMnBTecdZg5XwkpqVN9c8FbZPZBxses3umMe",
  "key13": "2itzP324xzMpwvDVX7mREZCx1YrzVQppdPdJsQEeyPGMtYqKFRZ8YennphwPu5JyvEmvtrBmp2rWvwFr6sKb7GsF",
  "key14": "27jPw4jrnUBJ7VK2WkMpEowBTqdx1WmdUaJDXWs31Wyd2KjJUkccodMt2fzPRQtUoh31iyEMKDpbFPtZLQ7eZrHZ",
  "key15": "3wEmU6f8mbpLkiaz14kByStBD45PK9iGJhtNfLbyvYGM5iFpqD5uGrn1eGPT1x2iLPDFgZRHy66fXA5AmhrtmJFN",
  "key16": "Q2yvZshCsahagybLKEZaGEbXgqyCLMUaab2JJ4R4PNKj8YMj9xk3NEp4LsvAkPuMrAJdMukdA7mzdj9E8yef9BU",
  "key17": "3XyqaPw2QDSgcuqCiFtdKZuUBW9WwRYwvRHGkVuygVJwSADGt4eR7ya1vRPFn2kQc6WhXum4orCUKRDhyRQu72c6",
  "key18": "3S5JhYVi2gfpAhkHoxtxZBMfE7ZKgoKc3K7PKSjkoVGpfEUCr5Vns9DWouygL4LGmE9vouBjwZj1H2VUsardaUnv",
  "key19": "62jCKuRf9K6uHwVxuTNAWm78CW5tQuCKHqidoRtTXWKaEr4V7HZyhDSaZ9uQrKAKjXXHJvt5vDUqd2TM27TSkryN",
  "key20": "5dJoYJmAmXJ8jz7r8hsAuEbeUR1AZJLQBFBaoR3cJiyedXgbPtzCCAwNLTyfaYtQ6dMgPAeoZzrSYy8ifmQcqTPa",
  "key21": "44paFGRT3kVPHvcbZ4kXcsMnwFJGTvG9TJhYRiG5tKzDeVPq8aKnsEB5g1hpJuC9XUfnjfsTPvw5HVGUR6omxrPm",
  "key22": "2pCTTmnsAWRSJvU3Cn15GvZp9SL3mxsdS628Ue64drpvhzx7F1j22idwxemjG9YeU3fxZc5TzkAswoZZQpqS7fE1",
  "key23": "5YehN3yYXQAeyV43X2zLw3TZbshqF7d2WyLxzTPfKdnw7sQHDfGvre2Tn2Xem26Q1g6BvzzbhCzFeuNtL8UTYayK",
  "key24": "5VE3tszSEMvkiNnTKeKbXh3JJyp1FP1AuXVjQ5ByP57XAH7MXoawyjWruqAJT4ctWsEbZZFb5G6pRDpX89XgMbDo",
  "key25": "bhwZFWThewGzrqBs8c5gQGziyxp7AAsKM1AtVpvApZGJwZhPecXcekm96SEAHbHdyvRRnBffsGFeXyzCw5tuiLX",
  "key26": "5hET8X5i9yrzGk9u4Dxiq4AfmXfXoatcBvmrR5tUukzeQxxato1hseCuwJnSp6V95fckdCTNaKN3sh6HNXedodKD",
  "key27": "KMarRoxcw5mfw8Ud72sRJbgG4dDLmGNRHeDTtkLacZaZu6qif28AbRusP2iKhKuSG4UjGXjewS5borRykmwFZno",
  "key28": "4CSNbkoyU5r3XWAjtv31EQGBzdpz3ammEi6y2W1LkrJK5mrVP9D2s1ZtrirfUnb1wpFQqRdm4sF3haazYDUGuhQi",
  "key29": "3neA1oN7zxcJu9QsWgz6yN52RexA3nj1JebvYRurGoP6mq4QBLkMzJS2zqNU9faRPeBxy2YWErPPCuh2sWjk6Zq7",
  "key30": "2X9t4w5qqFZRKCFN8FxBBtirskjJaLNG1dTGk55TgdyVAt1QoAiuRz6dQfaFG7eF3dvCDtBgsoYsS1u4mWNb4LhU",
  "key31": "52TAwC14x92HBWrdkri7xLkcocRxJhNeWLSTNJuoC5UeiyyCBMWqv1ZFsZj6h6yXXYrY4npf5NnrFSqL4J39xdcu",
  "key32": "7r8rcRy74dV91fpeLdS21y21fiCKEsv6e8BTWg3b1nYvzGasKb45mqop5X3pz3mmVVBJYQGi1aYE59hnUQ8B56w",
  "key33": "4VDmtzofBmUrLg2aenYKBFnVSmNnD229ikoFgwxUYS2PfkFziE7NLAWbKHsyhEYZDv9j1GfsTAnD36qLoAQjKjHo",
  "key34": "Pc8bJPPCkFuPABD69f1jrs7yHYYZT9bv8GyPQCPE9jyVCJcZkiucAi9nkeMJrpXXTrQSKJtyM5ZYLRh4mQTzAXD",
  "key35": "4m2RA5dSJ1Evw7vqQaMeaKgRE7izAzRJ2Z38gsmHD7kf7MFiKgBxuoohnYLZZrDn79gMhLtdBt55GjWoQD4shJCh",
  "key36": "PgyYqcNfrN4Qg2qohCuBBKR4bTtKSTnb38YajysRgJyLEUKVv6ivuttZqJsHi86rnxFcGD5jZhEmXjdtVfgoQzQ",
  "key37": "3cvXzuGouxtCeNa3QXskkPX5ytEcqf5fmmJCL2oFz7TuoC25miRy7sSXcnmLyptDaSQ242wGUxv5sSX3QjzvLgHV",
  "key38": "2YHzYQ94mSifJV5U9JuGvUhaSvKPZKPbYpunXvYHYceJxCm8HpMgtPbRFhq6VYoj8URsFWAR3DnVWpqnrXhGvsFo",
  "key39": "36MzPzU6K1FfnYcwfWhUwG5XjiBNYvt96TXVB5GT8v8Z5QENqagkV3YVjX9FembgFrTBRWLg57UNcDGzk5XDwLks",
  "key40": "4EWG7uSpvDqaGYHt9d4RWxnr9PohFfKBCCf4G8ARQ8EA9tm7n9EFKhLo4ev5XLBUPvXGav8ZWXrbM14MsV1Yj2Aa",
  "key41": "4ysZun4mcW2jX7KWgiwCqUwqQnWehbHFo11nmtiitLsNVsrSbtLitRYsuUFx73DYFPXxVJhPgXT4XMa15cwdY9Go",
  "key42": "hCh5BAg3JBiEHKv7GVe76riV4z5TBtGAEdvpvStdwnY2LmdLbkZqzfQUZoCMHzaffzhdVSr7dzrRMfGY4gWDQYC",
  "key43": "2p69X8utUe7SbMpeX8xaTZEYskFeh3MeSp19GLRK2hkop9ypyg9znC1j3fx794QAo7aRX41YF25jJV7AwfniEA4h",
  "key44": "52CXWmmjZE9TmWJ3q3egf8tCaFj6JkTNvPmT1hV85g6LBcXHxUtdbT7uTwugy36z1XK8jw1VtpGmwVkdCapCdzDk",
  "key45": "3MSYTX2rcMXi2mDfZrBnXGbuhgN54y4ueRw2jDmM1HFiKGZ4TXtqYvwBH5XB4uQ7o9rEjUchyfGqqT73ApPDCYAd",
  "key46": "3SXBsED3dYrgGJhaFnDnn6ubhKknMX8PNKdpymkEq24vQz8XnnduzdSpxqR8yFmbXgnAqfjiUunS9w7GmRqSiyny"
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

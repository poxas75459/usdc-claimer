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
    "5xKFEVNhSm7kcfm1FPCrtqR53C5iBbhq3TwUcx1htue6Jnyf9qNLYq65owLXp3fkBUpz1nhAU8vGf4KuaQna385N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TSohdcBVtHVfzH9XT5P3ERr35E4qZZa8rQXKWh6hbyzrEs73BX6KnoJqdR2YzjU5PDKR89ruQGRXtrg33LA3yZf",
  "key1": "fa1iCNvHwjUU3Kmb7UN3YHWskYS6CoFbFwjz86Z1me6xMMAc4CYTSrhEf5jbR8azYuDk3W2ddJb6rwiAtR6Yv8k",
  "key2": "H1XF7ZVyU425nntP2HKrfQP3BBfGhQcP5X1dpqoHHsiNhBCe5VMSYYWnv8ELuWRci4ngqZZVc2bUwkrvsctucW2",
  "key3": "3z5Cs3xRaLu5DP5RoVZBFV6pX5kqpF53Y4zj1VD79R31DSp6XTQZCmhWsiTnZd2Ho2KpnHFhrKFYQCKDnhD2wipt",
  "key4": "62jM43KPhjEAAymkz48XuZAHsniHritfWdz5oeKjpaBUKsGXdGWQXHgDvGZj1NqFCqaKyXyzNtd3FBk4jaHb84GV",
  "key5": "5Ejqp87YEvkeBKGesz8Yh3y9HveHpRtDk6eorD7ZuMVib3AVBvGpSgmJyVkKmK9z2cAy9iEaQXmcHHb9vVHqsS8s",
  "key6": "5UKrzgujqK579ooUFUDQ4W6Gn8dLVJcDWuQgYQsrUBTh2m3zkhyTy8soKRY2knkJvUprpuQsPfxBgtp35xDG6jb4",
  "key7": "31XBfJqdXAkg66QtR7LtrxRKrx4RjyB2KR1yhHqBfR1Z88hZPB8ZqhhsBrRt4Gftw9yRE8TcE1fqbxRiZGM88Ear",
  "key8": "521vDGjS3t5PreVhFCQrERby8SQSNyt15YxAuCwsnpH3RXG7kzh9pH7TsHZE2r65x7GVeZGjRMiSNYZjjezaDtM",
  "key9": "4QWjnCyntqkZKxY4zyDFgWRuwdoVrUkGGsvJZtLirooP4zGn1Jsx5VW1JDrNhwk6qcW6eJrqqNWEmZrQkYapENMQ",
  "key10": "2oHPyVCKUrPzV2Qf9kVGzN52JojSWYYe4CUKt88h4A7SUP9BmnAxXdEuom3nwQaYGN4Dk4WW9oi3XKN4nHWhfmig",
  "key11": "274BpPGp9LEXL5VwgPmhRVgvNDj3pXNC4HwYTD5VU9LqbXL3WN5epf9foc62NZFaSwtKUHAdZ1W5RUaySniLASAB",
  "key12": "2wmm46QhbYkM4QHrhEpq7pVpTAqM4b1MxNX1y3CCi8YqhRCm3zK7wpXwu9AcGpGeoPUEWyLZdq97VDvyU4dGsHPo",
  "key13": "3Dbspy8zWVsaDBbGMFCQj8R2n9cCcc9BFa7m3JomKWWBY7oDzPNCGknC4ug8obpjp8oRxsgC3XcSoH3cZyQyi5Jc",
  "key14": "3sTHaoNQcF2mvCSqrVcp4MZPz7dsWYb89KbctAKR3QkqpdyeT7GaAZYt8zhFY6a4xMdBRPdSv6LNzUc2MnfrupmB",
  "key15": "eCyFkMvUzYUDaKpveVx5upiTE1LmsRxtEbnCS4U7cGtcW5emfv9JKVT2BvULDYs8Xq6BZpALr7vduuARxrXyemr",
  "key16": "2fpqR4bAY4WwVpUUajEJjhqCckDEfXZFnnzCwz5z2VEPXjrApj8Watwb7CsCW3akW3AA6JgnX5pMS3hb9t4jKeTF",
  "key17": "5ZVyhTR4wxj9XJ1U32ZXLnaY4A4gTDAYD4nqU4sXq8xvYq58iSGgwo9YvLuauQX2wmMkWej1rSynTsh4Mg5Ci5wE",
  "key18": "54bTHL5Dn9gTN7Zmc349a53fNf5QtLGACnbapGDKncAVQvABKUag8gncoWEL5qNdS3NtXQFxjebbybbhPP7UyqUc",
  "key19": "4FYcUZ9k4bCNos9jzpYBWNvPoTUViRcm4i2aN9WwCywBzGZb8HXKzsK9xAjGqZUPLSSP82YARazDECWt7n6h8e7W",
  "key20": "PCcxS54tuR4HPn5RGoD3jZcuyTxiJmX74HmMYXT5MmCc7nYZMJF3TPMeYqCeNxeZFrCXCJ1hJo5w91xh5JT6GhA",
  "key21": "4qvPFPUuSnzvZMp6jNj71SXhg5XGVnwcsh7NLzdbTZ3GfnHQzkimP5EhvFYNSXWdUPLky6zyYBoyKaHFm4ctjYEW",
  "key22": "4PEcfPVDnykpVP7YbTejBur3MW71JbUtv5MpPHt8wH36yMU5KQwLywSfJVUhF3Mh1mKMi3meSBz59rthLNdzHwUJ",
  "key23": "5EjWrguTzEyaPf33eUoK2Jhk8TqUU1HpQotiRSDtsWNcC1w6U4tnuE6TN3UEY1TXdd2kf9Pv7uwPnSVqJsQkjbKY",
  "key24": "2oVM4TbJYKvB7XHmNCdNPJ9aHBVDpZRwrvJd572ctXo9pX8ykc7BwTsgiugrHU3AKboU4SZKjPxzMGxPHKo75dzH",
  "key25": "UAaiNL6pmyYJDvYRjpQFVukBjFsw4DRuRpXiQoCVgH18G6tMZ2rQoKMTnapjPGU3y3ZXAgcmXmWXk4cXGpkuiY8",
  "key26": "5NskKgsvmt2iHB6fdpRTYhZjFpqVMV3brEwmNPayiK3xNahJxgvbMcFQZRUbXRtnKgqbLQ4hnwujVnkoy8xmr9xD",
  "key27": "5yVXm8BAxF1wtUdaekzAXe8oroHmtHKFW992JhLn8EgxDqCHEvhi3yGDYy7CsnXAtaNxgihytVpCsZd2STPi3zoM",
  "key28": "3itnvXuS6hHnNdrgTxLCXm8C3MEunPihdxFczC9KFJZevXM2sSF4ZntSgKC4vS5Y7tX4TpEJN8tPcfLgm1AbnSPV",
  "key29": "7GgUAQZ4dpJkP7JbULW9p1teA21xUh6npyjCusEyhoVobtUoQSEhsymU8zfTv1gGcvkzpRZY9kztRMsTMqBCE3N",
  "key30": "KJYHuVbVAdiynMP4DMg31hHA9bWozAAL5RF5fHX4h6LGUFLXrRj3EyX7uxpL8t53NH6r7FwD2EWuWvR1unkN3RE",
  "key31": "KaT7ti4K5qivQ6gyXZxaUpfcs4UTmgtKs2C2XPZybELUQvygVay1Z7WpvSwJrMgNXPo3QAoghu9VxXyCm5raN6X",
  "key32": "5hyRLS2p2M4Z9WGmuNK3BTYR3UqE68pLVZQPy5KCp2gpPizvZDSAkErNLDoEveoLS1s9DmSVNCgUK3SDQnrqgmY1",
  "key33": "ddjooQT7GS8ftBAAaAGgmdANPad9yvmecBsfsc1xsEQAjUUyrCAJik6kjkuPks2T3R6oU7GZJNAY6zqAVPcknVw",
  "key34": "5hM2mxcKbNHKLD7BRspeKsvB7raELUZc8rGqzaNPi8F5nwHNXKe3MwfKxw3AoJ9H32deeXiYkMBTj9WRkhsaS5ou",
  "key35": "2ubpYWMV93fh2wjA3a9HhHrHfhjCVQ2tjKdysjfpgxrNghBwEdkrunSpXYzQXmQdRugrktTsLtdtgxd41pfyw3C6",
  "key36": "2Tft2Ceqv2Pt3wGMaM46cdJdkLVrpmTVoMq3bEagShFNy5gPRyDjoKEsczihQVfRjh7xe9jcf8DxcChCCUmWrFh6",
  "key37": "3n5KdJCBCjWWSe3grJfc2p6JUuZs41AkkvyNxPESdEuTeZ5yeXgwWwV9dmRKJXTafvvLr8jNw4eougJCmrUpFAEx",
  "key38": "TjnyfzRybznpheFSWUdsT3FG4Gts31kSN56waUbYmtCo831CMVVWpvzc13gww38htWCz2vgq1vobm2GSrQW1nZd",
  "key39": "3sL1LrN84a1LUjfwEsbKtE8UYZrVgCRcu9q1ctCybeuVyNDmHBc3rmB1mVUPgKckPjzvEenkNfKnQqrtmuzKsZHD",
  "key40": "5FurVifUfaF19FYNzQnQ7H5RHCxfS8ABKwcv8Qt7yTcwzWrXJStwKRqLJ3XmxrMR9miqo145ekcjXA6VX2gQxbu7",
  "key41": "uUfmqHx2ec1SjLTKG1s47xpVmxjAFymtqvtjf4SCr8JBhexZJc369cZj24xuChbk88ozBAH7rkdC5PMYVbGSaHN"
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

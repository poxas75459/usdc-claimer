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
    "4Z9Q3RLFQW3DH9uc1ZMTTmVYLrSfTLHg7nfUfgmRM6pRVhENkMRNmj8wW5vUv22kEgqMqshB7EjF9inCwoQFnqkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YdHpNftdejMJjGqdifCYjpYuH9BRoAz1F2UDoixeAoLaq7onpXmNjWFYGxNaZUEfYgD3j2sJkTWL3T2xqJdfsN1",
  "key1": "3UUSNKA9367xKZG5uk5D7XfzDCe3wJFW5VmVcRYhmZF4RNVpRuU13EBYusHwsFjcisQ6SW6zBXKkU7ZUX6fWbbGL",
  "key2": "2BAk9BSN7NYbJSiFoNu8hdeToNWqcRuDpYH7KNBRgErxjwPWTeCThHhRV9rFYwHBXxqLFG2GmPCmMzL3onybKg6W",
  "key3": "3jfqZAg1aTcsGaBAxbUGEtpE6Ya5jK4sJahxd8if4pTX9Dm8ERXha9T5JgbEscDscBZdMByC3fd2B6VGQVTbz7PE",
  "key4": "2fn8Mj5ogKRjfLLnR1bSRbNhVLnVRYoow5fQL3KzbshskGmedNxH8E7smrnseZ4WVEKYjVtbpW7XDiXcnPqvzaEg",
  "key5": "hmBGYFC3rSnUXiFWe8mdah6zacoqEeqBPkYtr5wbEEMFKBTrdnjRPfLkKKkaV32WkGYGGRQxboaM7BXnPa2ZvYw",
  "key6": "33p5XG2k9ZN7ykXWHTKV2ctWkbDw95zCzNvhFuwwdvQQEWuCoA9Z2SHtSuLC7WxEZn64EsYEB2KXZnWTvZaYiVqs",
  "key7": "4y1mMxQ7PGx8roo9iVtrN3AAVmVaY2nu2knfgvRXyZqatChW7c8kpgUeEUAwEDk7VEQKWy3y71FpJMDdZMA13S3N",
  "key8": "xrn79pGjNctLfgWy4q2MdEtcAbYEiNFvaeKb3Z4qYwLTq4JtmcaeeLhPTjyA6YtjGamRdCR4JWjjARrqHY7rKdU",
  "key9": "4yMYDJvFAYBzHbCbDMpTW18iLhs2yquXfbJmu1Vex9xuAYD3GUUovWpMV8wJg9UZpwc92jPPx4Ng6ruyDE6Me8xi",
  "key10": "5VdWAXNfa9HTb8H42sKydMQgCpw3W2WpzWEntp8WtVFLEMy5hJNAUyjUNtU7h2KsquWZEtxNo4H7R6dzQwKwUmPR",
  "key11": "2ueeuDgckc48xwCCPjgF7wUMKEj8t1rXEqYZUbyuqZkWoNurVwCv1cvRT34Un9FhpvD7VANGuaGJfVYkUj8damBE",
  "key12": "GqYiTN82NmGs81BJixtW8cUUUwMe4WzY7awqSHEFt7YDV5hcSAHX2MvGFGdgwvZa7ppEmAiFxWGvg2UiMpxhtwi",
  "key13": "3Brx2WnQyK6B9NC5oN4fAGgj4wAk7c3Gdqh2AJvByNM1ys4h6QYYCQnPdPxM2B8oEeCYvbPfn5BKyRWcigGxgnis",
  "key14": "3CLG923ggcA84uYgZuUgMVMfZidmZ6QVmewUyuzddbdt5SLDeqXuEiEoMUXw9E5DfTCYpLno6LB153mFLESC54d2",
  "key15": "4dngj99pokYdpXLC1udGrVJk8CAqzEgtQDv41zQq1XfPTbNrmJnPidd43s4tDnH2pr5nibBHkk9wfUu6YJ6ERdF5",
  "key16": "3SGnfCx4vrfbRMXPakh53mGoeEXMasz3d8dPd3iqERAcWwmJsiZVTmaNJ4TnwrH2bNQkPybfLDhxfphovn74Wd2q",
  "key17": "4CopwDzReFMhohs6knGeJPt4xHbhMxFcb5gPKEw26iggDtDB71otiYYTQvmzdi5SVUYchSk3YSXeeKfxgCbqMD9c",
  "key18": "gUcKic5xDWuKa1YTixVspzfN5w37ANJ6KPosR8sujgGhFN2xASotXurbYbhKTRLQcmqRN8jtmJNukyu4dQEseoD",
  "key19": "4cK7Wg2523eRMVUjcDdaEmiUScd2C4tDxik4kCiw4vWPciVCd6r9W3p16JL91fsqqQvrPsXPs6AKpXwEtTDPneUq",
  "key20": "2XjrpWWycer4qd3gS69hLmdECrPutgLqwJGkhorFmZP1VREhHqZCzbqJaUZ5PUgJ9gSC66YvjsKkNsDipcjdayPR",
  "key21": "fJzZpyaZeS873Znhrho81FSM79YF2Y4rzGU7KkwY2Lw5Gzxrk7VF382CpN3Wa6kuCnULFTNaVpzeWWDBBbLsyyD",
  "key22": "PkLwrUPG75eeSDV7p668Mjpq5KDcve485StnG7aCfjjyHM3WAhHhcqq8frWy53HCMZrG82Gsys3pCCx2jWZWYeQ",
  "key23": "32yUPRZq157MMnyL4YmFU7Ppy84ZapmgkNNQYFqUFjcP11ywP2C2efNNxdDWhvjDTsYp5Q4W6ikAmzz87oppiasb",
  "key24": "2jjQTPMEvns1ihoyn7dPSTn6VWqAYvJxSfiLfvwNP8a34gssPj7MxghnujYFVq3PtamE9jdNTHFHZNRc8Ur3gWVs",
  "key25": "3fQgs3PCAQ63jVHHtPuNeNcaGgN8QWgqmcXKUJ6ps5Q3Ey5t7nTFfJT6GsGuLi7jihoCMbGD1HofdnQXiw1wutSK",
  "key26": "25W8Dfxxe3xGgAsvvLoL1SmauckgvNGrJS2qWCoWjBkkwXV2Cnbb4GSQjowPT4HB72w4ZtG7zXpEAcs97iZqsh94",
  "key27": "3yV556qWx8iMptPxf2i9PFWTG4gTN86RMKqqmLTRxT5hMsAX6SA5qNecvMJ5c7KF8YYt5QHeyqxWw7WeA1u9XE94",
  "key28": "4rKbEqrZrtrBDWgaaCmYqkh5smctQLPCG5y3oZqzYQxNHgVyXRc5tant69joFHyrCHexsDJEngLL6QbJXig5CMHJ",
  "key29": "4vXXfeSqTA1uXyawN2UHXT7gwJjShjjdPfJ6kxxSBqnjV1rUrv4QNrn6zwxyLF1NHq2RwLUBtk5metpyMcScTiPo",
  "key30": "2fcfTkGw7te7oCo19pr8yA17Ae34K5ScFx7G7merPW3dnDFgYBKf6AheVxDqBmc9rGFZAFimty9swpGwabNJXUHQ",
  "key31": "5iueJNMj8dfBqYdY4Bzo5m4UPE5Q5P9Qxk7kKYvk4FxafpRU9c8yd8h4PmoRQSrVcWbxDkN9Aa3eRH7RevJwedm1",
  "key32": "yvg9Fhf54eFtpcRzyvnSXqrBVnWhqmNsN2B9D6N6n172pJBKYuCdAtK13VexroBVvHGtZ9DABnk4KHCsXjrLywS",
  "key33": "3tpLK2sCgyywspvxvSgBTjqsmmKFEQRo7QJV9aMZcJZcz4zsmmGir7TG2U8Rz7GhYkqf1YUEpRNGzWyPQpMwNLNZ",
  "key34": "3wXsvKUGqPvdWJQ1pfNAuGBpTVVwzA9kEM9LPkdDqbaAVUCGyf3B2npKHftkEbWHchiieUBXFpjUtovPf3XLyhcy"
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

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
    "3jm1EVyE9z9DSwEWT4L2Fug3mWxEoorAQcLhhR5X6gpHWbprcKW7J7x8AbwQENDotK1Y5o3F6BxAmDj9pFnJRcFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NzuZV4cZ2zarfpWoEQGBAzYw5hiRLQn4iEA4fNdmL8BJ5GQG6bdeDgFJo8UHgAxgGSUUxnBhV9UkvXciuYuf1cD",
  "key1": "3RRMWoyDHVfxyiRxmiY3fEiFTk4bzE29vX38JGvA1SH2jMgHxcAeRcdFzTLF6nVyFmPxnfcyr97TL4UG6aMQgwn6",
  "key2": "3nFuJmmLUH2PoSh5e2ZWFqXyLzorQ6D91jaZRq7q2NsiTDxrLteGiNexAmYPyzAzKSqZBiv2Z1aak3gaiaR1Aa4B",
  "key3": "5vktUCMCz6aABZ3mZKkK7Zfu4zpt3paZHNcUeSBdbzsthVEWMDomxqhgZVPvkqTnuhFZkfKVBNDYZMhJEXgbKfwD",
  "key4": "2f1Pd9BYzS3GuHw56wx1P53dgmHB5zsvNaZ245StiCkynxL91QxFX46n3Di6SBquo5S4ExKGZMXyca3gLXaKhmfi",
  "key5": "hcwoSnKumaZCgMxmZp2ZjDMFVk7aWtHjueBwp7RpGeMAR6AiMMJyVg6rHRatJU6kGk4FurCQtP4HViQfhv3rG9n",
  "key6": "aVmoJSTmqmqWYWt7p3wYASthy9o5XsRrJfaTdFwu7WxythF3FWvEio8yXkLpkrwYriczk75BHT5c6UueYYHev7c",
  "key7": "4Ukj6VTzkw4nGxgaJPpYY1ssjhUzze2FKe8vEzPGv9Y25wDkYyQGoj94KtTBvrfxkP1PL3dDpoUC9WPH2mXW86Fv",
  "key8": "5c9UQYQpawfpmMtTEHP8HhkKwJMyKzik2CEHdgkW2YmArZsGa44jL3APFNkpcRQYWMKm3Mo6WZUfyqJbv86ks36A",
  "key9": "2GCtdf4Kys5CjjuE5P6yPbp9p5u5an31yjVTsHwqZYoGXjtU5NRaty83vMcDUSMQmWqt9Kb6hSDRfGygrvpokfNQ",
  "key10": "5jb274uH3Z4kZJdBbG5jQCDXq17MgM2TLCE5wiiA9tumsxKLnsgL7AHEHyVnNUTPbJqxeSgNBqCNUKFHWZnuw5Ab",
  "key11": "4wWtxRJf8UB64fR1CXKevXAx3CU8EjHvp1Cum5Kq7png1wJKK6zASGL8rGiiQxp82fvZzFzZTD13oE5ApDph8k6V",
  "key12": "5hfwUpxYqGPHNYqZGvF8Yj8Eq35kBBZmRu1DpLVAwbg37DFKVh4P6dwJAf4xuKuoknLBxDcPqBM8174MxXJXLtzx",
  "key13": "jBrqum1Uy1iCnzxjM2eRtS92Lju4m3PEUFs1WmzSTRCvWmbgqDDykNrSjeM4ekS1JbRrym5wNqcgvwAniHhejgB",
  "key14": "5dbwMbqdKC1GW8KfKrdbuYwwFGsXpDd79b9shgJmmzq7yRAYaTukH8rFm2LznZJb4LGqLX3ze4fRf4oAYJNucNiN",
  "key15": "L31dit2EZYyGWMjwheQv1jUnZ8QcXka2wG2GZBFksyu12i1XEVvPKFu5VuQhQ77NuUatut5MUa3PDVqRuSRt4GR",
  "key16": "3dc1xBzF3T6mznHat9eAgdxEhijqwnUC18C5B1kWskSe8p81yBuV4SqDZjTnWSEYaN1NUBzfuz98UHgsnFtfLzhg",
  "key17": "4CAtfV7bTXZx28tnyfcdgQHdvvndrfM3VVuBUWiwan6A6mfFSLPirBzw2JG3YdQBoYZ4CVAcRTJsCBqVeXfsoTZL",
  "key18": "g26UGzca8FfZVeqvHLTnseeEbLGx2QB48w3b45t1aV6jJ727synUFs1UVbp9yQsjivkSp9BpbXCua2dmvpxuxxF",
  "key19": "3YDDDkT4tZNGnbXZW1Md5jW3rq9gdE79gXkoGNvxDu44vGxd8YnYDcihcETLpAFAuLJkUY3qoA1NDKQGDVRtRTgz",
  "key20": "5ncA8UBSpaHSaUV7exQ7yT7PaKzH54BpxEPGgQgT3LSn97LjAJ3hq6R8nJdNpw6EDZcYrdT7EW5u1rnNCrKL95GH",
  "key21": "3T3956oQpwFxtWaQQ5sA42NsNRXnXFhQXrLdJJesoWA54BisdHbecT4aPwKKpNQTfPqD6isKCwe9aQ93AdFyuaus",
  "key22": "4Aa7rDfpfNnbtAj2eayN9SFMWS3zU986mZkCsT36JX154WmtHae6waAEDVxG9Vg5BpuBLj86WvTyEfBrr74iseg",
  "key23": "YqikdHa3epEn6eim1ZtKCZK9x8wdWgBzGiwCvdYjEZ9bqwdH3LUzuP25KzpPrtpJUMLUApzsqooXPzT75w4otaP",
  "key24": "3iFzdibnChKQcxk8WE3mzzuEqAEYtFg8kRJo53J1tSxMxnoADDPxSgXQbwSyM45iq9743cigHdbzwEtzaSj77xY7",
  "key25": "42renRRW9CCMThjwqHQUUUnUshmmGSpeajzVgzkcbJREu1CgUxVn82t8wNDxxJaMyCMd4mkp6pFAxCWM5cGRaBt1",
  "key26": "2romvbzebFsumHEvqeMQpSk7Tyc1rp3enYhN9UfQCctCA2zQURxaZnbbJzL29QNLV5zhGRofXe8jZdE7M6TzREzZ",
  "key27": "56yb6BLYe4ZZhSUVWPyxXJJJuDk9VXg5nZzM4uPSY97gcGCs9CDJkkncZV2vTYmFxZqDCJDwbkNe8QzamaFyibV5",
  "key28": "3JUXhYPbveNUzrzHAxjV1cR31jDt9ArzDYKFRWoDkMtpK27GW6PckK4spMR2hEXcejgWC6i4PandQDtZYgNWDMYN",
  "key29": "5TaVD2qhRKPCNBntuiTCuK8SZ5kQN67fBDw7fQX4tV4Q9At4KD2KzDzBJSxzuRHQtLjaQWV1ejNnbNbFqnrSnSjZ",
  "key30": "5W7xf5Uis8ZekCF3oSX27Jjjtp3vnqfSSuk27idzLdimcb6RqWsvrbGi2XLLXqkj9uvXErjVjr2Z2R7cVDfVwKFd",
  "key31": "47oDH8pyuwKn3xBmN2ZvnMhpGAGhVpDZ7Rei2icWiBMkpbaYAU3pbCzYX5jnzKWspU1XBsL7cL86wWEjwGxiYd34",
  "key32": "b9QpgUY8yGE1ktHNqXzebC3Mgs6R5EgaQjrT2ZbDKyaxn9iwYwEKjvLzNyvFWz6nCtsUD8AvLQKjryYgAC9Ct5L",
  "key33": "4Ayxf63AxiWwieDNGFdN6MzcXUxkmKNUdK3YMiLuqpww3DkgWiwdRYFGuJ4VNqxgtE3U9eRdxTveevBd6e9fhptg",
  "key34": "5FPhbkgL8n51vA5decxHCdkG3mwS3asu1PXwmJ9g4vQBYRzBvQ11xUtFbqYoxfTdNu2bRi17i6oTKuV1Q1MhvJw9",
  "key35": "5URLuQbEM2yuZLwVHNnk6xxoWepyxLzV11nwwrbMtsR8zHYthjAKeDEfAn8zUUQATijSjVaGo5wgp1fQgi3rozFj",
  "key36": "2sB7uyJMcy6kHnkMCEinMVu9Fb5t9Wq8mEDwNFCekH1SB1Faj9Rk14W4JRDB9FKo3vnCKWRUEqpDcWpX3DzKjstE",
  "key37": "MkPCtvQihcZdbFXkpbyqa5Ykh85GqditvCbbjmiHxALhx5c3SLpCo5dT5Ar16unkLVJHPAXdEGT4H772f39bzKa",
  "key38": "2MCAhd1ZHDCkRjhea3akqNHbvFfUzBrQwVyZcVzmmhAPWMuGct3wRSuKzhLR678izX7rfNygT9e9aMKdkW5J5H7U"
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

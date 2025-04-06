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
    "2iKkfZJZz9gKmdGkk163heMm5NJHiN9xjRbyErWPrVHM7SwW15jaENywDizCpcPrzHVUcZfxS5maiTYBTuUMfDET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NXGVmVwPypfCCaerqezwU9AdxasrB23h8KbB1zBRYaRHVp9RdDRZBwqS9cxvwhDtBbYWCzVph5Cnahb6ysB2xhV",
  "key1": "3yjoghya5JJwiddnfScr5cPVk6tM34tmfQubHHKArWi4NmJAMhUGeanRrTjtY2r1nVoH47HzNay4eXtoedZ46tgz",
  "key2": "5u9UXNq9xYTTxJBoGjU6G9t9KJM82kGdEdACsFShBFrq8U79zSVnh649fjcA3f47pE5AbenWQ49odrbLw6KapcR1",
  "key3": "5jzNQ27Y1gv4GN3gSakvDLtBFHeTUtePWKA5PhG1oFeDMuwxfwTYNYhaxRA8ZEQ9bTM7VRZJn2ARN7RgTXLYzbSy",
  "key4": "5SsMDGfUoDWSATmkK79J36bj4CUcu9XPPAeqsLvYHBGofbf2erEgtJyDnUn4mQM9pLpkAruuSZqjPTML4YZibhXE",
  "key5": "4QVzkJPM1BQDHGNSQB5WXwYZ5ghvtHmkLVG6ij99LC7HXmrSP5aL8SgNsodPuyTNu4hQYYWnh5mfFaokxCSaEs8r",
  "key6": "2DECe79zy4FJT5YodKbiBrbp3uGbXgg95QJfq3ERPCuz5CWLrY73MnCy8pJfCJZLKYAbATU6iiRQpWjpkqxVzdpG",
  "key7": "4Vk1hjXBZ4ePns4Jhr965UWJ6cQjwTu1tgWytonbsF4vVTaMm3jfwG4drUMZxNi6FrSbr3TJsnFLYCrCFSB5iSyN",
  "key8": "8F1fhYcPFV6Z4372g5QjGyZSRDqB3h4S3hhd39QB8aomm2AAYxbVAgysvo7wWpF1Q6ykdGyvCCi4ioZfNaZ8gBx",
  "key9": "5H63qpdHKh484tdqEFjFsrykshXRLhXUTdbRnHD253eajZrR9RUbDEaHBDNFcyhgdXvcDW3jouG1mfmcifFqNCrW",
  "key10": "3ssgnWgDuAsbkrRjK6EUXNcX4ezn8Vhsm5MXNWkZTVeLbC2e8EyEin9EzLLXL5qytGqYNJP6TY9c2kTMkBsHuak6",
  "key11": "4WbdFRFD9LqUmZ8DCfZpdhedD2szKZTdAoJ77f4maFsJkfSN1R5RHZLEU4ECPrkvqnsnALPP2JHzJ2wHiwQNna3q",
  "key12": "38wMRJ1GFAEioERBaqn8jLS3XsvCCSimifTGvqnXHnfqjAFQ6rqAgbAi1xdgxuZcjSd8aR4V1Sz7xh9n6J9FjPVX",
  "key13": "eqa41gDt9aHAdie8m2ZVMLrsqagigtkodoaM65WHe6aYKSGmKSwUatbXKqdkmU8toQwfpPnBPpt9gzvGyaHnQna",
  "key14": "5a7UkQ9iHKqRb5UKcrFgKSRBea1q58asA3jQchAWJTpV5yNYCZVZ6Z81RYTk3cvjHZYDFFF7aMET7qp2mkiiPUp",
  "key15": "3UBvA7c4j9JxLc5KBcKxWgQHJiSDWTeY2t27PJ8B8rWm6Pw2WRLdNPoFLJr2RQHodAUdfvfTsqGdqCjP9jctDq2T",
  "key16": "FMbmes2ZNgTYUW232ykZycvd6XZgaDQGrX5b6hFYY1uVgYkBthwAFJfxmxzDDRx5fkJ2mas5nz9AURMLQpGUCNq",
  "key17": "4HgNr6uensFAhJX5JjqaUsYqRLC2VuVQPC9YmJk7vHtEtZyosdaF6RUeAfHripjsxjnJFupJXJajDWBWkLtGtfds",
  "key18": "2z5S5jcfXc74SdnouVFB6484jRh77mwX4sDhiqc6aHwvW1voTcsRJftGoqtcuggSMyFhpKp5DayAhTb3q3zwsgcA",
  "key19": "3sfNMs7KhvaVMj1pPiWbhHXoFrNZv8axxfrjmbh8HFEnayTHWE9vvWpfgfkkF7iwmpR2ZLXfk9XS8Qn4FcqZ2ptH",
  "key20": "4YwkTdrqQWNDn32zzutrPxxhJMLvGwof5JAa4xNuUkvd9nRVCqicZ3q1GRrGbSYp2mpaPKn1pzuGoHu4iTGvF5M",
  "key21": "NSSqZDG6Zj3J3BsiPtSkUudFnVfXotUHfxjVEtW98odX8dh1cM1z9x4dBcbYXTxShV8mrZ2UMwXGmdgbnmTTFVQ",
  "key22": "5od3zUGb44bpvRHHyHG17HNyWXrpNfiaT2cqUWbXFF4ktsNQ3HbifFGCijYmHszjsnaWJsiJgx6wqkH6UYUruJxn",
  "key23": "3DsCQ6pbNJHX6q1bWwNGuVPkrQiHsGqTKZshRhK4tzft1bEoAmQUaqK914U7W6dCFqeSLh9UCD7H4JTTfTn1gw1Y",
  "key24": "5g2QYz6vw3VDPUYbzFf4unCM2FnYS8KWDEP1YoRR93nhbYeLVkwcmTNoJyNYYWXCxQKthLhSSRRNmwn9LBoBoFDJ",
  "key25": "3TXgSAng7L56beKuK7K7ZYxoDWP8dhNrvejxn3FaNaMtxgWcZFfP7RDVJ8VbTtoXn6ExXS18RyJB7Qpgdgru9ev2",
  "key26": "5LGsAvLqQQnTZCT2j35VWkoNmiLkyNFTQykwefvhQamSFVzbqAwZ6Hphv3PSsqrTcTjokJjxsSmBzYSvffq44BLn",
  "key27": "2tZrGr1Q4gERKWFhpuPGPMqAuXoU4wUbWiTUgGdX85hwXe1p9sTMEbEBVAVTNtrdcsVjaPMLcVWp5Bcv31ZXHGae",
  "key28": "2KCsw8FnG4xBXQ919JEF7ZVmL2cvmmDvxSjS2T2jiZMySHEdLRt9maT4bRyAzMuvpgYACFpvQ8UXgELAW3giaA6F",
  "key29": "64bbJ6hZNQkPidqDayeGmzuJhx8MLaeDx5F8y3KCq2tmQfPecivjgHobVjqxsjK3cWSejhqnhqZ5BxBTwJMhUcnL",
  "key30": "4woMrqavyoN6WW78yk9GH4hGwDXv1tXCyJaM95pU9zmDCckmi1hx8RWvVKYwutPthL2gmLFpptEV47HdzCyNkWhf",
  "key31": "2R43f3tdJfC8FFhLsVWJfrrBKieAo1Q8EpuiRxdxnC2urn7x1y1wMHeZ7y43pvtAdLV9Z9Jvfb3EPTEsxbp6Qa7c",
  "key32": "FiJG8PgcYiYEwVGRFnVfsZzyXGZBudoSGQFSBKFhG7NwWH5WWZSA1yABY9SdUkinPyLrVuVxQbPBWKRwJamRsKp",
  "key33": "84rmrpgfYAATRwSfa35sER5vwBy5fE6miy4dD6CjoAnDe8i8yTwWCoDamQknw3uxc72uvnHASbRsTtMJzTQQZSj",
  "key34": "35KJsGG4PyPnjFdVxngepGJiVLPwz8kVDhq4S2yY4St5YVNYjQYtVY3sffd4VeV4QhPp9b6KJoJiRdk2SdDq9C3Z",
  "key35": "9vGMuPcZ5ienbixoEg1i7xff3TG4MuVVJvGadvg6GHtKkU9B3uXV8vqLjmeRvcGe7eFZMU4FTKE95tBaPrtfbwC",
  "key36": "2njoJ3XHFH3sTfmCTHbBnNAUQimHGYnxZR6iEyDHqF8u5xcGicLcWrk4bLiBF11B1yLoEwfFi57NYg8xsqxZiNza"
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

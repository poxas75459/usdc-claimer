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
    "ug2mpEyTDy1keo1oiRkdF4uqkPeqj2r1wCAbAUrJgNUbScNj9LzZHfPhczE3BZgr4x7mX7VxLtfCAcYwPADBcab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AvrMYLR37wyA5HeMA2EfG3iAnpSi9x6ZQFh1z1HrBr2j1x5namxJh2kx9L1N2vxs5p5vTMtA5w6549fKBrBySCz",
  "key1": "m3v9NLgF976c9oZbJBH9v7a7HjGjUSTFtEKiMUFoTCcZqgvZZVE5RfhueEHn3tZToW1rnj2Vz8RmuLRtZRJMkE1",
  "key2": "5dVrvj5BXogfphim6fB2Erwg8zetJgKxuQB2Nd2SX3xfnDih7x6r5PGi82UF8Hb4taQxkJbcbgWFobvQNEZeVdmi",
  "key3": "uVWCHHeprU5Xw5oAGa2W3PP2NzTfw6pRaiaUXrKNFwLJ1Nq3GhqKmcHLAG64eAdN46SrSbAJVP7pDDNho9m853H",
  "key4": "4V4fP4LX8RkEXthJ4dfmZuqToR2yKtwc3PhgKvzYzAu9DtLy7rJjbyeoDGEjs4yDgFx8udBm4gGNDsuQQJxU8o8u",
  "key5": "Gv9n7MBoT1uTHbyPcQ2ioXSVHi2VN5MvBuLir6q6ATTrHRgwkyNcT52nCiRhAy37A8QbSP5PrhhL9YTf6NQeD5B",
  "key6": "LYiJFRAqSsQHvfZz2z3Nff9vz4hucZit6yysZ8JZS9eb37Cb5xmich2PPSbaz6tVk5jnjineVaNE6mzAWZfBdmn",
  "key7": "DRSgTdo8EMDLnCufThSLhTwN9JSHG1ANvj3eohDnvcfQ1oau6FyQA42jHwb2xyw1frez23pgEWwvi7PgYBQQa5M",
  "key8": "3uXL22whsHQxp4VXxt1SknxGLKcA1WkUbuG2YjZpADB7jTwGYZ6vAd9jxqxLNxfs2Fnd2Bw2uupVhbeuYaMjStFN",
  "key9": "LXwfRNtUixiJbzTCVJSoBUq6ZvdqF7goj5SmQUK1eeqdnQUFnzn5GEshMbtqQT9KUpzeUiZGWrEkegLKNUqcNeW",
  "key10": "37fJNPn6vBUUUFcXENm3UU75TMmCQXeS77a7gssgKHGyjHSkGU9y8dBB5DC5TkEv9fx5GVdJgTMHfYmFAqXU1CKn",
  "key11": "3Qec8cfQripyrkJH1oaDRp8xFVuSdvFStt4QGymFF434LFyv8BsGQJKFYf46rJgU67QgXLfYxawMzpvgmY6aMfv5",
  "key12": "4A44nNBtX5L6pXEPLL2YDrtmznPjfkRErfMK1mEPyhesh8Crvst8KqUjPyMoYQaqVM5MBDdHxex5ME4rm6YHZiGN",
  "key13": "4wGWbdMxAWUNwh6L8u1QzpxxMXmEWjSMwuqP46jEWsH8PKURv58kzcMfehEmnpNDRg4MB7YADVvwJngnv5okPnZt",
  "key14": "5xf6VAkwaoa6Gs7JHTtdqL6s2AXRhq3PYzGp4jDG4XckZch55ntNzZVemN1nPxym1ATw5XEXdXCq2sB2uu16qZp2",
  "key15": "4TQzpxmhgc9afV75Q322PhvVH47oii35DYB7ran9jX7E3gju9vJpqygoZHGL2ZRAUWsqbt8tgfTPCRxvyy9HmmUh",
  "key16": "3DUgsG7Jgf2TM1QScdu7799FJoHDVo9aHCzseq7V3nkgqTJiJBeg2Vz7ebuzftohPQTsUNpWpbbwa1NBsQvgSzHB",
  "key17": "4RhUKJpqBTARkSCaFDtpUiCdNpdVXuDri3465zN4RbBKFCFaTTXxeyVT7pgooXdkbH8iPpSa1Ehsa4MriyoKSikL",
  "key18": "2epPTyVr5N7aA68BMdR7yzNGMCWZtRXEURG5y7DtqdfxDKv8bYdHkydXyKomahiwAALbPAZwKLJxTVovmh1sd8c7",
  "key19": "5vHDa2PgHKiZUU7XJFL4ky81qBrUqgAatCt9qXtaxU2THTjKRp3JotHhjZArvKY7uzPRg1iY6zvjCPJXrTTxRXrE",
  "key20": "2utgtZYgNyhfspJVYuZdrr23mFvk6DtBqJudTvcy3cbDaqQdhWPrvstnu3r3LteTAmw3iTXFG6DSciyXVB9J5F36",
  "key21": "5KqnZw4myKPJGty342szXBhFj8y7HyG4pEK3tuJNmh2Cx5osPt6FKHUfnP11R4fzJYCcfk7StnGrnUJdc9wPxc9V",
  "key22": "P91cxnzS3rkLYjkhTSGYqmwf8EVomSRmD6PJW6wG5UADgz3vdTLTobU85pAUWCexMvnomPe58kkL3ohathv7v4q",
  "key23": "chd97HZXBxwjh2h2WngM35av75uB5B7AC6pfAqKm5zRYdxu8WRFRgrXvxhCiHHvFWnsgbFUopWYSM4KMkkZHfsh",
  "key24": "3xMebzxSoppLXNVhvorjHycx2oeu3A3bR9hxVvhhsFsGi3BXjmm6Q7ex28FXubbNN7CMZhoM6ZNTZ6mhYLqsohCt",
  "key25": "3nKh5rMivXYWfUTVLV4xGkA2d9Fcpfm4vDhGKCWkPZq4c2vyZnZ3UJvh57D9Xc3uwrVrgh7T7SdqUNBtUwBeDdux",
  "key26": "4HnQJ9LFtby2ii3aiLQC8dtKBxSoLAz3j7iqSCY1DvTpP1RZi8uj35vn9m63KzyCL6RimiR1Mq2vs6ggkPJm3d5Q",
  "key27": "31p56gNveJtneY7JhVPajskjGiB6dbYmuKuNhx8w7yqFpHEPRdWzmbjHK6Cvc1zjHu6KQyw1i2KyVV3TyXjTnPCG",
  "key28": "5AEsQRM4YWEGN7rMs42CbtE8c5KvcGs4B44WF6EfqEoR4KAZKVsSi2pBgHUaXb5rtFuy2C9aeXqPcKUrtqg1Rgqa",
  "key29": "ph5QfkBEqg7MMewuDo1JVfoCAbhmxpnK1kgURwBkq89Zg11oPvTdFK9seUYPJMqj57C1JGs28vRoTkMYDaHnwxx",
  "key30": "33uCajcuUMXDcWyz9UwWyXiAXyAQqsJTTNqfVsMbGhSQiRhJSVk2DKDEWscDdBqEQEKEhq1w2EodJM3GKN9kZb3Q",
  "key31": "N9gLbS8mwRSuvcBDfzUYAa2dcZjYuszRVt43pZRowpQg8eRZfpeyBEjYkfRCBVHLGnLFr9SoKHBE3nxAjT4quBd",
  "key32": "Zt9FinZ6CSwDBEZnWKosWmZXh1h2gHXuX71CXc7oEi74UzGBvUaKsw4y2fbEb7xbb74nmrMCJKnTao7xKhEuhj6",
  "key33": "622XMxT7bMSkzU2FMKqQYKTiVfgeyWrq5uwnEE9wsCuQKwd2Un4BXCU5u6yCEJATNNtZazS17wF2G5NLRNfGzT2f",
  "key34": "2i8d4AdeVJFABCdUv8nXTZcSgmv4Z1vpbNtH56hsaCP8ub6EvkqCfxfenwEnvUcwoeSBZx4rHUfo8vLBjdDrJccP",
  "key35": "2tMsix2nYBNSp9KxW7y7HzXtjFoLZZYrADYoEBRwLQLDBLsjfYGS7beNrcHrjEB738SBx55puwHwiTnaPEwB17NJ",
  "key36": "qxCz4DGyqpLkCXDJ75qs9EDX4HWUBCvhMTvWrEf7SYqU8G1WWVo6oTaTeboQGRs93CFbL9BoJz6AiDNdS7twtnx"
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

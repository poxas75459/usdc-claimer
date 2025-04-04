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
    "2Na9sJm4P6ZEvJhhuosnNttMW65qbTvng4VKUcxJE7K6vWt6PZ8MazSGRcN3CZzutNZQXYrGprs4f2hYrTn9zvqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tHhnK3i1Zk6fVJSTkDV2pq7MLSKzhDWSGmD94vChnErtCruNTajJDHb4qgeB2j5TubLZQv5crhowLiWLqeZBUW8",
  "key1": "5wJubYTt7ZM1t3Q8J3iBUc9tNTwB9V8CVfPvztPzMLyQho9zCmkBbWXFxbEKMPCVhDYRmxDo6kbi7HZE6HmEPTvX",
  "key2": "4WQ7qihoY9KdA1JZKFCbNiYuyAfYUX2ZpFmxg1YZa3FMBg4G45L8m3CtntThE3dNx9xWw6TxwcczR8SAbnpU1hyg",
  "key3": "2imJnvaiP9yCWw6QstJjTPCdSaJKLC7xNuyd47sDfFkt543jB1dssMGW4TeRgU63y6ECQa9xaLbtqC82fzwU2DGW",
  "key4": "2XoRMrHx9WjYkkeDEZVmAtbAzfqW2JGuFTvDV68JsnLJ6pmt5jdD8KEwWSYS4zdLvvNNFnaXfDiRVHGaYrHa9f5r",
  "key5": "3k3Gg1DtTsgPVAnepHZvq35WAyrkgN4rhqkU7ia6gBW91YSaJG42r7dQvPdxEyBJvWEL5Y6ZXVFCRp9sMa7FgF6E",
  "key6": "31GsaNdakpxRe7CGpr2GR9ny9UGtBLCmugucPMKR1smdfMCLkvwXETJvY7b7pVRrqbx14uq4R3Khh933pNoK6hKy",
  "key7": "3AVWJUZzeiQY8jDJEnRby1xesPq4c3qAcqY4YvMgp3iD4y98r3hYAdf8YZ1y1LVmVGb6DvFBgTtTdimro2qvZmh4",
  "key8": "4nunr3F8VdcopKLNJKGxi92SXafMbnkF3RseybhmX46uwmYDU2JBJhFTyM7dLVMQxc3JQt5j4x4j1Jfnty8rVY7d",
  "key9": "56DQ81yqiik8jKX3VG23ynf9jGvzMar3GaUoCdSgmdUwcL9mYxnQpXtpGcrMTUPVxdBTTqXDVRBMPr3jsyEAJqtR",
  "key10": "swYpLgs9Tzj4a5YM1pFEng4vs2C7JF3WMbA8DhqEtNJvPZW6vAXMocjHWpXoJcVvAbX9BQQ44cidn1QnwfL5d8h",
  "key11": "28453V1r5wLiSQ39qenqRfR9Z5ug2jmGmbsKxev4NMnGyZTm2NYyNyhZYLnvNxjLEhqGqCZBV8ovtr8BdQA8KXWK",
  "key12": "z8AwEQWecxcxeVadFdfvRMQpvXPtaj24uV5WiKd94NWTAJhvNpNFCkFZ7SRyFhTozNeM6VnVShmEjBVRDw77j6C",
  "key13": "3qiKL4PxDdjoU9diZq7KBXUSY1kSvF327mWHfoXTwxE3eJceWsZnYv3mJYSkke3yS1rhipacQMEVM49wbyh7CSja",
  "key14": "66jX3nhVR8UEojv6wJinXwJpWcEyTtweS8xd3sVA2LPN6htuFPKTpCXdChXXV5KmJvdWKDPnewwETqprLCBt3MKS",
  "key15": "3mpKdH61nJaffRhApNW7tTPffhFszdUwg5FtY8yAd5cw3Fk2dFWieWyB62upvW9mHfDKbgY1PfUhsUu8VkCaZUvi",
  "key16": "5gqwG6qS8bqW5x3nT9RUCCrHjfGCSsWaZ9cPTtQVSLsRFPV6p7xPif5SimCWqMpbApP6UWnbguSf5v4crYX9dDJ",
  "key17": "gc2xipQnGQsYh6vTctArdcSnc6gegcGssfHQAofrqUMtYdupdg7c8X9a4F6A7GUPW7bthSkpk23PAMNBShRgmyQ",
  "key18": "3eb1LY4KupCgGt2NGYcQ5KfBm2WoFKM72WxKbPBo9oLJoyRWuk7g2MQbyaoTeVRPg6nSD1zoBiqmPpEN9hXXsVQ4",
  "key19": "5gSHeaMzL8hPYepwezQoqkVPchEYe8suYv9BzoH6DzthRSjNnqfSUBm99ztgC9j9ovRH2KWawomRSeSAsWNJT6xu",
  "key20": "3idJAoAM9UhM9hBmvS4Hhd57FHMwXwpEMBYJ99Prahi3QEafphiTadm2Shzgd4f5DdWXVPgVPK55vVQLBDrRWx4u",
  "key21": "4z1PfgtB2GrqP7oKpVG8CHZSoa5U7BkwWhiS5suGAE69sewfDsrAcbK4tZeeX1NP1jogk471ZBjVm1YSLbGDQivP",
  "key22": "2R4jbaEWLveWLsEPuRfDEQqrfzVLS3pkMrN5SJtYEwivMqLvkGcU95B9Dg8V7QU1ruYCFZMcHMiT1YV2pkJoMghs",
  "key23": "5EBHeUZnvcEnmzteqZXJtChdxFyQMtkcjShqxbpn1dPi6mEJA3eJYbxeFR9FYW3oWxhM1F9kuKunUsLkpd67ADZW",
  "key24": "4qD66bjRwDpFgEvi4Vhf9HJdTa8AhA83HhAQPP4gf9Vpjejpu5gM3AWiT1SNuueaphwDDGAbE8fL66uYEqjgJZ4C",
  "key25": "5c7oh22qWQXwdAn6y2nmMwAHcK8K4xQLTRUHRh5z1N8hEY6Xd8W2NLzHefW4C8MUuVGXT1YYctFJ4Pj5weRuFpXM",
  "key26": "an6AeCqqJ6pnxwg1sjTkxnLLWRyAtaf7Yo3UVApxzfWRbL5t95afU8vVSFjn7GJZvcYsmhV8sXegugEThtGxq58",
  "key27": "4VJMGKBifuSJSBVd28YUY2m8sBFn7YjNNcZCDa2wZaxTVr2WqRUkRFYhfZWsnUQ3kRShUrG7Rc9hJPPC2gR5hkSS",
  "key28": "5DfK4N1Abo6sWaVXJxxoVHrEyvrtRoRRU8NYNJtESjM3iPcBK1bKYwTavHzLT1PakydewdAe9dZ77x65yu8u6Fh6",
  "key29": "4J4bERGgKFFwfSNVw73esawqM6X7iSSvDSeve1zGiaTaanqnPgsNxGdJLT6ssTVJpuBddVgTMR9VQq9w3UkdCPL4",
  "key30": "5Q8H1DvhH9ew2HJfRryGffk3vRwatLeAgEdLdDcbVycQ7BCRYN4nxGkrGFPq3RDv9BcgizrFKwaSoEdJWmqNkRVb",
  "key31": "3q3VZ7GmH8XCbyEXCSxAG2n4HruB9KjvM96BpjSaWLNc8VB9dqPot1Ag3vNmJfC3MLkBHG1tEkf5tUv8YvFuo3pv",
  "key32": "5Tpjvr3o4bk6C3su7HPYhnBmwkKddikCaTjXKSn9KemWdrxkdGdaJFbNZV6Lw7bq8skgdkvsWi2qysAN5UjpMeVx",
  "key33": "2W6gLYWsKRWn5aQkPC6N2LN2db2Ry6jyaQsAPyRBtr2SfFB2itqczEhCUvt9aqr5cJWpXhfsNKjnN3bJDFUqxRf9",
  "key34": "J2ro2bfBJ2xWwWGkYQsXtHEj6UnqPUKn7aoG9KSUjYWmSirkChtczhC2oonqVyWs3p8Db2fSRBeE65MX6d2krL5",
  "key35": "3A7SCfmBwYkLXWtQ6DhSthCTbrzUw6WpdoAVmiH8VSMxXUUCSshsHpnE14y9Vb75Cb8aX9VJBQGmEfBjThVMSBE"
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

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
    "3FtJz3uspUmWv7Ngd8M7f247fnNUk7PiUuMQ6sJPf4pLbx7Rtb6HgVzGMUXKjLC6MReXRb8HuLWxwHFkVL64NDXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vn9CojWtyiBVd225ufxF7ifbP2i6yABLvtD4Bf6z3SB9cUwBZzzVQKh8sswAwTZGjQVBUE2voVAQkGx2xt5JaRh",
  "key1": "4rTQ3eBE96xsWdkiDwwCJLZQq62rpF4cMeLhySPcWNNotJjH7VkmAzNTrwbENDgdj6hkDeYsy55tWpu77WAkSmJv",
  "key2": "3ADNFrYdAMmsotjz4G8musXWA6fUw7GXZyrtTwEJMuQb4t7jTcBxHHgZiSZHmwRUKRAaRqrmbQjKtca7139eh7zg",
  "key3": "f57SvbPwmyRgPFTamMbRhYUFBrvF3uawhC3UJn3AH1pm4Y5LnQh6wEvJ3no38UD5i5jDk8w4VxqazYYg3tRazNm",
  "key4": "2NsRVwRmGttwqLRrLpKmrAYsCHDeShg74KgKAPHNTs5MtzW3vvcfkiW5em1EUa1KWMnMLzaxTm8mn8SGbCCA5BHH",
  "key5": "4T7eEZGVMQ1n3bVesafavnzg42YH36XyNo8pxhJuFwHo5uZk8owhvUWAZFhHoD5kpXx5nLCVfrKAh7VGDU1QHmoe",
  "key6": "3wQEmc8MVM43xxAexN1RhmSbQfxDHkEBVsDQz8CYtL3WoEmgByuGwuTgqvzBn6vojHZexrQFJa8kayn35nsaWdpP",
  "key7": "4Yc4f64emmufc9stUXJsbmLE1rio4SToCzxNGpzrmawCVxHPH6pHM3W5nCsxPeLgA7kRoFRVAvoTHVnL9qw5WuRs",
  "key8": "3NHRDN4E6t3fXbthGhJHvXAngXH3LX7cGGUxztyhG9RhAz3n7sxa6J12LgTc7Y3qJnVkRR3jeo5C6PqnsBXu4ECo",
  "key9": "5h4jdwTK66atR1p6AHQ49nYGnXY2D3jFoELXPAvoLbtCGaF8qWSkDoasqdjpFXivPc9DZ6QKHrm4fcmcfCqBuvom",
  "key10": "29PKTJrLgpCefxhLDkVv9Cj3gcsJdemscfmrQhtuLGRFwiuWQhV5BUZemKfo2sKUTvELsCzXAazfEUTtWRmgajWd",
  "key11": "4kp5nsqKzyRfr9EVmqUr1KtqqpTK4vViZ1hJKRLVFGdBZBm4tguPgSAmKJohWN8eoZ5MruzsFR3nafCRXj8dhU1X",
  "key12": "4z4YZjMxbPg17MMEveNjvUck9wWF61T2JeLQCkhfb6Bw2p3bpN7Qry12Nohouncb3jN27R3a4qC6YY4eRXXj6kK2",
  "key13": "5UApcxWMCkUWtUtrKj64yQKHA9AyyZy22aS8H5gQXndpx5DHYyFtRhVGS4kGBzQnnAuBi7Dp11WYnvvvjwqnta3Q",
  "key14": "2cdfwnZzNddEh2AigcY2r8cx5EqPnE5QYG8wnK4d8fqvyrgv7PjRjNdTFC6guVsWETNG1MsEJo3FMhL25vUF6hm3",
  "key15": "65Rss5MYJQiVjZFWMsR5bPbUYwnAXt3ymVMjkgd7J56aRJPN2R5ec1Y7JUrKD2CXcgsH9ouytsEtoEnwh5q2wcWN",
  "key16": "2vdB7JzWNpUh22s4VW4SXjWpMc28UrB86y2NXsw7V3ccdf1WFuU5v9hsdPN4PtsQZzVB9W1YVmPCmYgEAAYjFwPB",
  "key17": "4aXSB2h5b8kBV9b8MwYuGznn1vpmtyq4jkx6wRk9atfSPMinbsKh3iM6Tez97Qt7wnWfoD51tANwp5SKMporUdKF",
  "key18": "4xTQMKvMz4XGtfUTu4Wt3M3R1Z9KRgWBqJ3Mj76fa6TG7WBhFKyy7AoAiXPh7ypyj32dtP2JdXCJ5j65Vj86qwBh",
  "key19": "249xWLDT97G8UTTP4YcJ7frLVumY8vWeNxsScABp9xstWJv4bumeBY6TNqUU4KzxZVjdnc7ksPfnoNkvau5EXbQk",
  "key20": "33B4ejNrj98gS1uFaS7ptWcjGyr43ku4cPZKfAg5g1BrUjhvcgvrVv8eFQggA2at9EjRjUdHpiysAu4G1aS4JPL4",
  "key21": "4tLVrMafzdpprRDnzjbTKhKxWYZhbrVb3RWGJCGVspGUPES7BZ1BAhm1vAENbryuDcDbt57mKW2EjuJg9Ncii5Qh",
  "key22": "wTA2fd74BbXmsYqitZLAyREvsNorAbiFJzcs4ZXP7NZVb6o5T3Fh3mzHNfeHUwafz4nXXmDd5pHikEsygpMG8Ls",
  "key23": "2YYmf4Npp4R2cFKnQ9EPM8sSH7HHkGQMVnUjqGHJy31zHP6tqL8QdNHzWU8ZEnB5MDB9yEZee7Si43W72fFBGBkK",
  "key24": "21SWXEwBDf1SdKKCFnH73cMEQfHxhegY57QkyGgnPNnUkD8CMJsh2HwfAdv8yWCXpp7ZZdrRAUFdWopwctbxWjAB",
  "key25": "3srYC6AuHXsp9yXuEBVJWu2wEmwrwXZ1L7khpLEp9w5c53gspLF9GbJeafGPD1vf9kTz5HqkM44Hqab55uzPH4xx",
  "key26": "3tqU4DZESyQQxUyMJ2sZpvTystb3S1yytA7o4jUaCrpHi3r54VhCowrmFmdidfpK9CfABzEN84uwy8K4QLujW4dw",
  "key27": "3ps1MmKvETuK2wjDFWM3zHYSfgSyFB4frP55tNPmurHDUadYahGPDXooKjGZoK2wyWta1351YbL5y3ehoDuvNvqu",
  "key28": "2rL9axAJEHN7fK6n4v4Fz8uLX7HuxqVY5U26siMuWkwEqUHBcrxDtEHM558uf2iC4jpr9uJkqzmDFYoyq6ZgMp45",
  "key29": "2LvGmVj4bdsriX7jdscmbaGjvoGcpYKxJL2DVRXKa2mMzAUJgbShmCmhUSDx8zao5qRVMpQaPKJTSCq4ro6DtMKR",
  "key30": "5nNjFxhYHaEJMHP6Lb5McsxFHZv5Tf8fPx2m92UD2vUa9twaEP1rZZDPa4urtp8HF1bRpWpCDiqwTVLP31Xgwon6",
  "key31": "2vYb97nkLYZkRdU4mfChxt9rAv7Qt8Fqye5a2wEhB7hxdWshHwXDMyi1GuiiYFbZVukGNpYaQEUWotbEC5yHi74d",
  "key32": "2v9AABwoXjTKx385pN8XmUmaqUjQfJiS6DjnZnn9gJauv2dJ8ZHJTcKjgpsYhVn84dJukiAWd8ggwiHmmnTRzNub",
  "key33": "5L12kBr7AD2G2oPQSa2dudVWtpFFydTx3CBELxSjiXNJ9hVfXKvevfddeKdHR8Hb8fVwLQeS6xrNVWHhz5iai1EE",
  "key34": "2ftVSGUuupLJpTCzxGuHXHSZNEDrekSfTJLA9M5WhoKN3Dn27a43Qeo76RVGWyaH6ubihMntjZyGsSNAvuKwbaMZ",
  "key35": "5E7JFWstWo7zoxUVKiouuy4S1gcF8ewrw3KuqYBfNXJF8A2pnXV77oSPZ8ktg1hKpGMRQ2k9nMudy4EeR9jzMmzP",
  "key36": "65QQrzftLqxbwrPziY4unUnuzb1q4GNoDUJ8mBT2WhSRSQMTGdFFc2aMupgz3Ec4dnKRNrEDcqs5FbGUV1djRWcJ"
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

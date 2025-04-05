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
    "5VRkx1YfJKfqcktdxgFegVrM247eBvntiAcB5dts2zSK59h4KzkaNSMZTpqGJRJzDb5ePNMtDzL3uM85S43Cdyzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AEV4VhaQQNGZMo5JH5tUHaFFFeU7Krp3phmUhTZLxL7rk6bLCiuMDCr92QvFeT3gkP6dxzBE8Z4kDFAo8bMAGDS",
  "key1": "5Js6ReM1vhA2eSunCoWtXWykotmTNUi13LT1RtKetrRWP9HhudN1VC1Q858ZwrBVLjQGpaMu2W6g9Sf8nAu2FFp4",
  "key2": "4tA4iMKW6Hrwy7H3Netw64eetfuRrjw9jq2BawbpQ8HUumxBLQQTkyVsf52Kw6vgwbW79rwWaMhmqBVuTNnWM2sM",
  "key3": "4UybgyWe8WgDo64hXmJ96F6ds3rG6KX4Zd51WQ9UrbcBnd4S4Uwvpxkyq7nNqEjPqodW8KiVqoRpaN69rBQJNVu",
  "key4": "vmKpVGFGgkrsDJ3rRVpskXtxFn8JRV37qHVufYvMGNz38VHLmVQJ5U7sAAXWVQfGqmy9Ba874D8dcWBH8K2sZcU",
  "key5": "2BVC59Jy8rV55aNkbMN5NNeTmpEYrA4ARNKmsUmjJ4HXBbtbo4mePoU6Hu1fku9JYdxYiXQjwJiE4TMufVtjydkw",
  "key6": "2nfNf5dpmnQjfVKY4n9qnUa4eXSwzPzDM8NizA5PjD8uGgrjVu6kAuyGFnqwBdprjRcBk4Z2mhCBiiMEaG1AwUfj",
  "key7": "33Ru8U9156MHJ7h4JCf6Nk2a6ZfFFH8yCneVCLzipDwVRThsnt77LJ6mBZVbtrnB5XhAnkfizMLHyx98QW9WZv2k",
  "key8": "2fM7YeJmezTwW1gzPb2bCmgpb1KYYaSbPztDB6oeJtBJDpdfYYShMKGQAbpddJC389EUrFYecf9Z2cSG2z7mxzoC",
  "key9": "51jLju6k95kD9bPj1ax86gm3F8WfZyvYdiQ8cbjQ4CphiRsAdoX6ou2JqWZbqZNj1DL4M8GUiCdj4GCjAHvERcyL",
  "key10": "2x4GnLKndmbbkpjYj6kEarpNrPapr7SPqHpCKVRqRB2MX5bfYmeaSyT7caGphFc9ktGDTS8SMsfz3XUXdnhQwiaN",
  "key11": "4P9M4v4Td1j3UEUccgUooiHJDvnvJ1P4mxNaYRJgZRXJ7k6jNgywDZK9SpLjcXaeSsXJDywLosCszuZF5S3nt5YB",
  "key12": "3PcuKSHYpMhdhc71EYBfxDS5Ty8AwFcT5pM1qrZoK5Ac8SEg7iJU5g2JSJYo4KY2DEBWgXfja4ingAKZizKSeeXs",
  "key13": "2vDK9zjmyXa9iFFkC1W2wZLap6knMjLKVqcnzsoA7h4c3SxGGR1wYye89vZTYdHpkkLvxpBhMHgFDw5WRaDw4Ciq",
  "key14": "5aQKF23WQzgAanUTdmyJ7jYdz7dSU5QaRy3RsYvGbtNczNK3nTduPj8kibQnB8eLjBXdPVRUGKP3bgLyXxGAb628",
  "key15": "39rmsizMwgstmNhtRab8ucrs7jtumUaUJAU4vtdsNjLgwDf37Fn8Yry8wD3D7WRujo5qzwEV9fLhKQGkJLLoY7re",
  "key16": "5DF7veeMK6dpaE8dhz6o3XBybAcjDULvTWJH8ocLdXS5gZamonQ7tyT3Gvx2KyYHikqpUGSLSYvoQonuxmnvixNF",
  "key17": "QtQ1xNcmWZZiBL4J4rnGce6LJ1nJR8ezN5DqjTGiRF2seNPoa844YJanhJSg3A8G72G4FvEig997ZH1BjUSzy4K",
  "key18": "29rf2DhBpyNgzU1zXw7TaopwYbzdjNXZjoAzPK8TvxyBkg4j7R1YP8bJXYgLprriRtGN79BqtrAyCcvvvx2iNqVx",
  "key19": "BLtV6JNEh9J9xpCdUQbj8zeXRrPLnEgHnMT6bPDUPY4uujkuHGKfvipmN3S8mMF7i7iK8B8LMhTai9uJ1mKMCYY",
  "key20": "3amzcJVz4kQ7V5U3qc8Vq76a3Uw9HJZ5wTEy74b7P9bZtznokuSomQWWx7FerFKiLdFReyKh2Lr2vLoyE7Zirg2R",
  "key21": "3LWRkjuJ2hTMmz8NV3tDDAeDTZxyS2TfFrJ6qPJqzLT5HZGzbJHogfJmcpAL3XpGcGYcUi8um65dNzbiWiChggFy",
  "key22": "5VpNs5oALk6eRi8L3JPE5KwhnudTTMtfEoKSLFePFESc8M9Frzcv6KzqWBhhvGaZf3Nb8HSSx8oPVBXuuXVMFwtZ",
  "key23": "5a4EE5CQUwLxCk5ER8yHRJiMmqHW3jrPtLd2jJShGWk7L7Jy3nPy5XqgXDTc8opjUE7Di4hgjg1Ww2w1o3kUzbWV",
  "key24": "376FZXJvjdMpxuzo5EfyMciZDJbkkQUTVVGzbx7FPmQEgmcssqJndZdSeTyLLstvZsCDGSYGLqaEKvzni1vQ32h1",
  "key25": "235dgzLKx2VibM38ZsM5mL279xkVJKDLFeJ94A6FYCjV756cjtKYp6Lix8TsHeGcdUzmKaSbysdTvwYWMNtqAxQ7",
  "key26": "3QogGrunuCBqyPUZ3CQb7T2J5W1QveYGVoye8AG9s8jhjrkSKg3GqD2zxUTFb5PVkXzLLskygYVC4ai6k6g21mqY",
  "key27": "2YzsibqP1jGpBsP5pJJxUrVsgiRbaSbUGxa9NGVXe9FEt5a7NYbbASnPgHoSNHLg4bC5roWr6V9W25FSmrTsHjCy",
  "key28": "5TVg122R3PCyMVjnkyRJdo9dYZTrwQeKv4yHQeYMMxDtW2m84rTPfM2ghZnEXZdf6wc2ebRpcLezEd1nAxE5MAHZ",
  "key29": "2rMepn8DMN4uY1JYcjztTaicyGbwtvZZbMZ4fX4JpZBUVMctx6qGHGtQKMgFH3CNki5LzwsNHuJMXTBJ2ktNvAw5",
  "key30": "3Hx5CGTwU7kYxseRHTsSy9r9z2UEESLXLRbDbjaGuHmHoKMwM2PHZe5VQuEwJqv86F6LHp4XwrpudNMckP5kDpTZ",
  "key31": "2UV1hNcpPzJjshK7osxnpXeysrgr65N447Kju32HFJHbX32Yqd3cRn71rMuEy34n1r7BheTrhbCbAPHHsUPZT5XY",
  "key32": "48oPngsfYogZkVE6xPbtVNGEirebTdFXfi1Sxto3aVcJYFeXQyKviJbYA4w3rm4U2FsXY4PVCg1uftRs1xN12oue",
  "key33": "2z17atNM9we99qbrbbwFNoDTHHHppGZEtQknN7TyDgxTWq2MftySLSEfS5ywq2GviWmKghzp8rryrVCGVepc5WYQ",
  "key34": "5MiaRjrrk8EBg8fnBa4S7iMnmxhtkgVKowb51uSMxjQNkzhbLd5Z7PwPmfArsyf72Lykg4jEy4AvDaAkksLeaWZS",
  "key35": "3frHVdJPLCRBCvwsPwUkZ86nCia8HgBWPAntC86V93JVs86AEJ3s91oTJ94j8fys8acWehvxRbGMxfepS1m8E4Dy",
  "key36": "5LMYeefEhGb3xtLgXvTSHMJx5PM3BScrkRnXHpcQZFwQfpxmzFzVKH7cPBAekZGTAVciJ7L8gCprzmfa8Z9T77tz",
  "key37": "48NptBpVzw8MHeSMEE9e2rdcmpKpthZPTA58sWsJqC5wqsHZS9Wm6oDc93qwMUQKy3mTQVJ8bh5pV9onLkWESShs",
  "key38": "F4LUUKcxC63QbcgnqJSgYuLarxALL1w4RKtyfz2muifv346JyLtswcaR9Ktgv3voJAtc2UVqGvhmKVvmRTy8x5i",
  "key39": "4oBKtGXLpjHTbiv3PHk1d9q76hcLtvxFpu6uBq4WmqynJ6TD1DQFcsSsueguXQxwuGoXu3gE1SZPpTJfoWTVtd7Z",
  "key40": "4kqteNuEqAERTw36vWbHwPrw1SpyQ3vY68JDfQt6foCYdGwnQ7TWHyGt3pSBvKaW8EJoSGUVFEd6dftZ9CMD9jBL",
  "key41": "xZRm7vw14h52KhYdU8hDKya9gVQs5B2tbHzGBsiYGe18wKKnw42F1ow8ey76WxvL9UVkJLBg7A8tzAUza8RE5zN"
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

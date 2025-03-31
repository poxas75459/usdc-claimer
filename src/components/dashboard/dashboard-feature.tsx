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
    "2L1otfToLK9baJv1MK3eQRQNoNU2hsEKzUPfLFF84AHHwNuFBKwojnNGEGcwDzN5xhQkEwarjL5Q6xCProdGuX4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JwVsGyokVi73jpfP5oPTvhJi1syBncuaM8wVi4PeSGsXb6FsV8D5N54mkPMndAvxmX5Xodye46YcrzhPnWo3dUs",
  "key1": "RuaonXymyUwp1VQaMZXPP9Gf5QJvP39cYS7aJCKgPzfGBxqurREjxFuC42sZv9weGkem6nYNUBY7LniDdNNFVui",
  "key2": "5w5rBHsfH9iP4Z38xYUuugpMDxEMkwTpJk9T6pZaZwHLDdXuFg8x71yqvFyuAubyeVyA3Pdje7iWjWRSmNMpjP1u",
  "key3": "2m3Dz8q1rrFFgrkdUgZEoFaMAP94qrpnVbmiJ68d756ph4e1mEAZLUf4my8r1k4tSCkZHPNXM2Q3ofyT9AhUUXnY",
  "key4": "2DGyER56VFUy3ZuJ8nJN1iPc1xhw559vuH3Y4NuPvfnAXrifCLTbayUAc8YHoT38BtmdufNK5NnH5GrJEH2SZNC1",
  "key5": "5AkrLWrU5YitZ3BAmMogtXyiZ3EG6s9zD3s86aqbgsX5ooLWNQhJLW8vd6CgJ3dgijjTxabppKSaTTN2Yb23wt7G",
  "key6": "62cnijzqZUYQbhHqK45SzVK8z9wcgDEd3f15w8AJhDKy1mq67CNCWFbHZCJdu9QZi1adERec3RtCcat3Kdae2JYx",
  "key7": "2hHcrQ54jvGc6JFv8u6KyQhL9fg2ngWkiSL26P15pAvGyBgtKf7EcWxRGEsAJeGQRZATtxtsA8rvpTKMy77YuQCa",
  "key8": "KMEqpcNgtrs4RVDmx1fW3pRYQb37AtLa9Qr1Say1vLxz2spbEZDP3RRC7GWhdN6VRqSETKxwEqybfYCquBXTEg1",
  "key9": "2h8Ju39xRGbkXmWatiWhTTrBSfMKsTayrLadZK1a8cYDGwFk8u11YfiMjjtSFusaajdcvt131DNUmsjPEX2dqLUb",
  "key10": "64ZLjGa6XPmocoLog79WmPoVA3tQkGSdgixH43ZnQc7rRaK7Kxb1gGFonR4cj86QBawrPktY3X3XEPtuMpdRoEYW",
  "key11": "dwXbkaKjeKxdVso2LVBYZ2a6WpoJarzRrgsUoAeBu6vWD1d82p5KQdNifX1NhvXXQu9adjpLwAVLpDSyDnq6Gs3",
  "key12": "5AEnhJjuAck9iSUBkdhjvQtG4CjNVHZpyPEdsqaLRhVEgwGFTM6Dw1STTpXnVSnXmBmaCgBQfdieT7FzCJRAWhdZ",
  "key13": "5edrfd46tWRoK7iRpivDgKMgg4bm6cu42hjpMht6WhTnv4zqpcLq4W5brCnPDBmG3zjQ1TU24Y7Cqt1YGWdMABeK",
  "key14": "5nTrKi2EqyG94YMV9QMAN34STxncFkmeSEuHSMtXAzazmpXF8fi2cYaHb5PFkth2RC1n2YZmbpRsPDRRrDYv57Cy",
  "key15": "3Gof2LiXcn3TX1rC2iMN5nBG8esRcFJRiEVGvBUrUCqmei82GdvZXyNRaRaZVL3oqMTM7H2uDMdiTk9K4iCRP9xF",
  "key16": "2JUfnSD5DB6Vffv469fbKmhTuW4A4qysqwAqffxh2VDvLmunmFuKyYp4ohjJbcRAfUuaZwNDDa6yY4FxkXrBzLKx",
  "key17": "5M2wUj9pF5HjK9UPYY6FWgKJqGvLW98D2vF4E3Ee2hGhbVAz9GEFse3YfRc2KBsmzjXhJF4ReU2NcTpBf99ygYU3",
  "key18": "EU2XV6rmp9cM5SJLzPMwNZUu5t3a9qK7BN4JoJefGQ7wRYxBhikZ88mA1tdPXu6p83NzXyfepAhEbPd5qKJjTaH",
  "key19": "5vh3YjnpuWexHfh2FtPtbqadjK9APhUQG1kwZasvMjzMw7ANZLxm82jeExZBauQxQCXqm6S3Baju7YhmBHoyLW7m",
  "key20": "323mHyAVnhXuc2kbYVxUeui9wuCqzJMSMMdbWcfhYQiHh8ai3nmfLrQxmgnn2Y7ZuF5xX5pWpzKQpXVcLYu2d721",
  "key21": "3JgYS99roxCWNorZonvWUcKRPRjhDeQxRGiKdZQkmoS5qQeXY7LSvopigL81k8NjAKgBdFNiZbt9XAHqVekDjr1h",
  "key22": "5CGsAMJukJNqWkFQijZDgHAiq2sBDJt1Lc8zUmY6Q7XFpyDNrV15EcBeH5waLCArAMVr2WoujsCv6A5TanJexazW",
  "key23": "3Czkfw32CivyxVctkTFYTkdvshiHLuacQgfJTDuLYqipGWwZR7AQRjVYm89FUXBuuSxca8PK8TbxAY4fABNCxseu",
  "key24": "t2QwKijGWf7idfkLTTaz4zybDSDVuCs3TjBk6bxeheexoxjAjEoZwETwTQaD8F4fYsQnmArDCwsLjXtpHjv6qqg",
  "key25": "2BQagwb3mw5uc9BN7NESULTqzjurSS2kYnpVZrHwnHn3tryEXiiy7tCJpvn5UHLchj4JWwKiuXUbzfPzMKhCRxAf",
  "key26": "5893xapoWBskb2Aot3u5KoyVZPASWL1d7WNpPBriPGYvmssgFfDTYSmXEQFxBxKG4JngUdQp1xxHvtxW5Cqmqk1W",
  "key27": "5Zdwbegk2GzDtfdSUgfHeJekWLYUzNFmKC1BW768yPUXL573YvZX3hNLcuCBioUQpZvtLfWsXGzuyW9WnVH2VoZF",
  "key28": "36XyZbHAwkkDhjxS3m7RuzDwQpDB5xEtEz44tqEz6MtZTrQxFiu2PF3Y4jsneYko7r3XFq594pCm9dJjCYrPypyX",
  "key29": "3bic4qzzmVu9VAh7jYBKHm13CdL4MZiVqPANqWVbk8HAfuZPAcpb9WUejKt9X5HQoy1H6jxBbFyxYHK5gxGzNXDa",
  "key30": "2QF4tZVcU6dCDWwHp6jeyJW9ivHgSmrgTksTHV8CWU7wruoWsF215ZC3LfcGX6DJK3FKUKZhx6XAhnXeKsXm34oH",
  "key31": "5XbGNznFSPzkdXcf6gLQ1hG8enD4WMMJKGPy2KxbjNSWU2xQ5g9byqT8LqbtK4rmUENdeQYdFgCqP765aR9AXocf",
  "key32": "5XPTj44KXViwowDUTSrk2pPUsj5KXXNZ9LkvGWadcQetgALECFcueYMuzQzmU5Rh6aga1WQMWNyVEA8QrHfhBTVi",
  "key33": "5s5aGvdCAmACshySgisxGYi2KhV5iempbWHg7JTt2ki762FeA1yPmBocrZrXe9rAgjpJdH6gyegY329a6ufvtvp5",
  "key34": "5g82DfmrtWFicDp4t5xBkCwjx6LrFqi6P3Dyvft7dEBw4P8WgYDixdCswGr8ccv7NbfrnhH8dBid5zK2uYvWy5Av"
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

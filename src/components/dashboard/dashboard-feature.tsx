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
    "2TjzgBSqH3MExSV4yUrNJ9UYS5q39ynVjv3Xt26wX3EvekkbXnAzWHVF7c4oi3RjDisFgtEJrzQuiEw4LDMG5spt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XsEFX5UGujqsd1qtyD8RX6Q44k9sghG4EAQHKDF3nBR9VzZH4ExDww6JmxvqJzYLxsZhsCCidjqthC8R61m1U4F",
  "key1": "XD7XKsh68ztVh2dcMWwQtxG7UNRCmiDhJDuqaufCR7ZTraMSfgsy5Mh3vXaH9UuF58yB2Z8fyvini64vmpc35xU",
  "key2": "22mHFB414RZmifEKcoqmT9tTEQ5CDgZRdednzQDPZUJHJMipV6zNHPMiWeouxMtPCnLwbRt2otL7ZDb2TLeR9f4Y",
  "key3": "3T9X5zBQ4eXDRDwc7NDtJZDTSEz7eJrg4GGtQ6qYsr2v7aWFMkTucBqifpPNbQQ6qYeJETS1gUbkunMghWXC2rqv",
  "key4": "3gLt3cHguBpHnCZY9H1rwBYB51WtUYAbBr176yS2YntkyJq2G6cFZ6CUw28wUWYcL6x8pZncA19ZqNbpqHaA5c6R",
  "key5": "2ZVHUt2UfXp15tsfUZQeprMCaTLYsqifeDpBt9GM5rK8yT7RcFvia5WUzZ2Dm6tmULLyv4kekZGzu8FhEPt292mV",
  "key6": "2uEUHrZmEWb5DrKvcuYV1SuyH4kpiY4VXLotxt75zxGBySYDCvTDBmXhM1NiUJ39i2KgN8SZHPjTyypvUfigUwew",
  "key7": "k4jJ4FP3aYiMpgQQpVEwEc6SFNbtA2MNwWKvXXAEbKSzYtED6Tk5BNRtR6BcrpzBru5pMD716y1yUrZ4toyrwgS",
  "key8": "6319QQSkXz3gHkLTUdVP7R9ojNyPMfmakDMuLxAfWbjvj2anXaLdhzNGUgHA3QxLjYncBLKGYXvfeC6i9i6Ph3kh",
  "key9": "bspeGfBWWjH3npjy4oPZf5QuJ7ibZQjJsEGBStKVSdYX7Sa4GSezzRwqA1mMRVYBsmrv5qd9FHhtHTM6VA4J9dd",
  "key10": "5bRwCucK5LBLL23NTcv3y8H4jwCGQ8E552fG3AzgwSRGE5cCQtoEA2gYsxS5qmT2Yx38NAhczXJZSrwh8FQD8gW9",
  "key11": "3tYQKqk1AajiMQtsAzr53RuEjbX5tEX2qVSj8bDhVmuvqPE4f4zmyq47ASUdotzyBX6JyaMVvdC7UTy4CVLA4ycm",
  "key12": "3F3Swp644DKyBByQGUYrKS9JVqY7HnuQd2oYcoJPfMT5QxsL8EWG6JB4wSEivjZQ8K4fbwmAfadjLfjqNYriG6nE",
  "key13": "45UNbvukW4RvM6q4nanM8HSLHbZBKz9KZ5JCiZTdJvwfRoSfk9rkARgCG7ULAgHbovFQtLC35EE6rC2D3TqG94HT",
  "key14": "3HyCjkMMG3xYYCXxwzePTLpZTq1528FFgfP9DrHiUExfYpuQHmzFDgiEiFBKPwKuVvS5nEba2XgxXCBjCobvFkuz",
  "key15": "3DAesJNRMqqGpZC9itmp98SaPmXptGupbiM3nBmLjc2ujf1dAbLtM3qMr2dVM54MuToaDJBLy6UvijPBmwQvHxXT",
  "key16": "3S8HKSajrFohXVzEWFQryX718B5w8arTTLahQzFwBcWoGnVs7Zy3QnYCvR9JFdYE5A8skmPMHXC8rmyQb3YqVUeG",
  "key17": "4dCCetsCWHNb1LFDtCze4HHzZJE7Pymq31ho6W4ThLcyJRGcqvA2TBuUMb9UA2p3FD1jbo5xEjwFq29U2grkBWZD",
  "key18": "62S941X5rsdj8c8for7xWFzX1HkquFvNPGT31t268weAv6oQTrvNaToWpEoMs5c6bJdU4k6ftPC7Zt4coF4vT65e",
  "key19": "2fMQZR2xrbyg66FqAcHZ5CYe5hptp1tZGVdNxANrwNwdLt9MvVu8esJdVjvJrXFfdi6WKmJgLhLFKMDWmifZcpMP",
  "key20": "3hbcMAKukCnHpWNs1bvtZ9zsGc6d9F8ZtTc1nYXSqQKYwpj8LQ6bYEczFzL9vnaMBE9HwYDkbaFKfn5uK4j4QZVw",
  "key21": "LvrU15b9DHCraEntqBTDJid3gDvWxRrX3TUnCFZ6p1SqxisSpi17VeHKiCdMANWkHpmcrmpQXuEffRfLceGVhy2",
  "key22": "2H9Qa1Tg6rp9bLwqyDaD9DRZqq1tPgz4DQx4nZuhTkLGffHfDXfWPDQvEWLCdFALsKRfrjmGQTDa3gyMphbB8sNi",
  "key23": "3psAx9dzPxHXQSuq39E8my43gFtNVe8K51UMzHXGCDzQUWTVX3G3FvzBHFLPqyXffgvP1Wfj5Kuduqp2bu35mtwQ",
  "key24": "5ceXgG36cNrUUf3aiDa3cNZPDFzaT7jHHX8BNANhi3HYxRf6fT8hkwcbp5RCoBBMCc6uSrLvfMhDVhJxukiiqtaq",
  "key25": "2Y49Bod6G2TaDj8oRzsFYAa28qFVaE6Uvzpt43PiacvkFodY1aqnVxSHH5Ng9astyMJJzKoF4hE5nxyZCnRASW5g",
  "key26": "2id7JqNpHw19NJhq44B8eubYL2UUPmJ4jTnxCtK4HUiGZzNubdWGojtey2cap9aW8jAiGotJNGuwmRoCr7odn8VB",
  "key27": "3vHaFZN59HuU5ymqNikjiCDxwNtJJnERP3JymHz6BAwL4Jhc9WCV3YDpAnNjUQLWrD25h7u6Ud5YKjzjXbPLisi1",
  "key28": "3tLFk1712jeGACb6YVywHFEx8865cyJ11wQ53MkD1QQ5SrFUC5Qd2ZZV3ne6aqjBSVKyQJdn1ibPihv9E2Bo1Jpj",
  "key29": "2a5b3SuPgJGK8iug7H44MBFccLuDKmGSVSBBVi8BXegP9qaGwX9sqLtfKwQWC5gVWYvs2sDcodGVUhtWfircfhnn",
  "key30": "NxSf6CZzrLzwo5stcfshdnifK86mjjJaatdfns2pxdnUP1VYQ2rzfCSHzqRZY2krvCYMJthC9uruzTrw3CUbNfj",
  "key31": "2ZtMw8WNXvkC6mSJrS8KqibLK96LwAGyD2yz7jhXnTtxVoiq2pYuMmMJ1vxu35kCm6vbDdksjaJdrFxb9vfMFi5v",
  "key32": "2vjHkG4B7txv88zmNKfhS2Ho9E6rThZApbjhN94WaK4Q3KnsA7TuGeQDpgd2FRcPCRd4jfNVqHCmvBM44BQEro25",
  "key33": "3GkrBpgfrjVpto5k6C1sZ2vQAAHjLTgYeVpHuksdB6b71sYhzY9kzCgfct6qdTrJpfuHSGw2oeM8fxVPzhhuV6ck"
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

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
    "3JPxkM7ni1GPpYu7ExNWBnAhF2GyAJB264DcP6MBCZ6gwpsuonoYxfuPEH9gUF9kcbDYXdVMxT7KLiBX24rpphtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Jx1aEm82jV3QmbgiXjttbYzTRGw9CSX81E1kdyV3mDtYmpKRHqNsYZDvLJ3hknZjmTAi42DxswhrFvgiA4kFt4",
  "key1": "tteeEBTbbNMsWaMvexQqY4NqhHFyRMpohjbcK5q6zjCHJGtZtpTC13a7iViKjXEYP3CwNE9FYNQaKU1dk9t1zUC",
  "key2": "5CRibb2vXd8boCsdJ19oPvQTx7zJ4EaYTndyTXnGQDmmeTmtxJGhWvC3Hg4tSQBAvQKyLMgE5MKa7Fp6KQYZavvV",
  "key3": "2uKb6hWbz1F3zHoEaEq4AkMnWpbCoEqXsZeX7BKvt961dQtekpYwPAx8inLfMR6Vg1hQPfRsCSA36c2n5cdRDwcn",
  "key4": "583KzZ7KhGHCyxo3zkJXMgfPNNPqqNKB9JmhiD5QYxW4qf1enitJgDst4JU59YNfJDR6MoCWCN8zYMiBkbQzr7B3",
  "key5": "5xoKTWDLJUrVSiXCgmpZmAAouK8iuYGPSVeKyhcfmvoBbSKCsjtdYPfRRu6VJRRveg4LQPS9XiuSzxVhHGWhgcfP",
  "key6": "56yTu36aJmu7ibLWrnt3Rpk6ggjFMgrSNm5dw6Vb9WdpwavismDcosBkdBH9hCMEUfW7tzUQnLJpz45HdWvnFoZw",
  "key7": "RavWLjqhVSnsR2ik9wSFHixivPkjbxB1BBgEjbgToWJk2YL1QYRV3uvU49Thn1n98dL79zqXacMvh2GYJpcumeN",
  "key8": "3rFXKNY2Yd721jpu5UtgjWDd474c9xhua1RxpWeAJXFTEPLrtBRKbL6ZHyRa88FkuZe9gGu52dr8QqAwWT4TKCBE",
  "key9": "3uoKpFaEJ9Q5p6twkcxuNB5cFacgRqyzZd9LE3Crfxc8fUdpdvteh8EwCz5mKJ9gAdxsYhQBkHUmbmvjFhnPNV86",
  "key10": "4pTXtxqyh5MNqfcRnUpsPxMvexsQpamUFAKrhMhNjsBmiBjdJMcNdi6oKBVKUzvQPejaW8VCPcLxDBAM2et5VLJp",
  "key11": "2UGYrv7xSxMwecLhfbhe2C3dw91nPnmcEzAzzM95t9Kn7JXbgRajieH8rzbTNWmtvoLGgtfbzEguZQ9HaHZwVK4o",
  "key12": "4siyHrrVyvFizXPMHoq7sHWwHkA1Ku8vZyerZKgdGXbPR7CgrBKynApsmz5j5bU86pYuAXUyC8ETpDkB8EFJKwPe",
  "key13": "66Bfd1FXNCRZeMXL99oqZoKyGTYmDr46M58NaHR8yXh9Bh6jmpNU5BLFDBBXw9Rot127qFhKeWNTrcLoYf3MQFCo",
  "key14": "ojssCf4Y3jvUE4u1oicbqsy6KiQqvkGgdnxTAPvW8wvmfR3CLcdVfUNXWJo1H5aWQEJihoYtHKjKv7JdcL4Qo8Z",
  "key15": "58tMqtutYjVxdvPkrtupNAaXF5DRXuLPjFs4xzpVjzRrrfKWvukZchceEYrtVPkEAr2PqZdmmpmHuu3fBiDLCxUt",
  "key16": "213WhkR6AwEuNpufNVURVDTxEKN9XM3ZEYeXjrgRqLCmkGPhcv4Kd9msW1GjiyzAnap4hPTssvkVnQhMac53fcZq",
  "key17": "3JW8bR8b6rXBbv2y1MFqHUAs4GMWSC3suH2c1WgvfabDBMFKHnhoCPGzJaNhmMtnGYkrBSnjnBwAouq4qfKDkZvE",
  "key18": "2EWPMZ7hdYUxoNtpGJNawMv9Yypw8X9Am52wJ8D71mpTJHReGGpruWm4VanZwir7tjEesv96JVLwnVvPqDvr1N6D",
  "key19": "MCwmPhgpjVbfRRMJRsFhwdMLWBhWCVLUqGNTvasJUm9yZJ7EyPmUQXxDoPbMxUugKZygXvvgDkSD6KFd4czYTQ7",
  "key20": "4sR37CNofWGadYaSKviiNp8PAQ8zy4QV7iqphnTAntaEFhCHPzXMkkNaGm8Uhsc68pEhwx8DLRstwAGc6HnzVj5T",
  "key21": "2Nm28mB8wnBWdCg5LLPhBpsw6AcDyqSKyi45WR64teZwV3MKYjDAQD4C5u84BUmKjvxhxX1ithT46Lp9T1gPSRxb",
  "key22": "2HLSsMhVdXnike5ubrUz5LoREScJr7LykXsNGxdtq9htncZxALNprL9k6jcmCvRvmryQ8NMg9CvoVrvFUwG5qudg",
  "key23": "HjsPE6nHoQzEaQKNu56syf421VvKxWJvHXByZV4WzZiphb6iW38VTx186Mm6wComNrE4pHjMoYTuV2sanQ5avu8",
  "key24": "7H8X8ZPzU9Nw8qh4drTgovTNNJRmQTXqvAhpUhB5PWfEEw8FXwutzvxQKGbqrJhrq7LU5wEB3pdLXAmbsquTGnt",
  "key25": "1NYfQFatNsHokFzeiZrwHA7yQtDnBBYp5k1kpxvaivv2PkN1jGUL9C4rjjgsLWQPcfzdE8k6662YhgX9wPyfxrF",
  "key26": "ZmSbh9sNXnSUo62EJMQML7nJqbD8W6BnD28qmBhsxhcTzQMu3bMm9rFgp4Jfbvwtq1azxXHGyyHNWayZrme8jgM",
  "key27": "AmYbQy3xbGmxVdtwUcrcfGGKkV3pgXPw44V3Wvckd17ikw68xETnBYh4VqWebxr9q9sUswU3NgPyht7RxMSi1Jd",
  "key28": "67P3pC17gfKPPC4ibYGXKXP42GN4rdaqncL2ceE2SEXjwTKDxV43ZSYPcRgyD48DcSJrzR45dMkUKtjL3BdR4zZy",
  "key29": "APMQcb4WEc9JH4A46AZtXjoVtKvZnWFBwi4r94baUCcSyYTNY6wAH5isXynirQajySBncFVVvuRf1VVwPAXBSEx",
  "key30": "2XPSksacm52ViTuKY3f3LC162t5jDdfkqhDjrJGoTammFE1z2fntGQEkYuqsjuMoczF94zNg1KSztkDove4Rxo4q",
  "key31": "RHXcmBPw6ULRsKZG2JCxbtgCidRCxhbBsAc5Pdgx9sS1WRp1zqzXHP4fdWBkc9EKSRxQddZq89NeN4K1DUXRX8L",
  "key32": "42sck5SWcD79AsMexNzhBLDMX38tuVtmMA5ZjnJnDBj1MMANkaMo3FU7AsXoCSBWSDf78waMYdHhbLdWh496C56p",
  "key33": "5q7hSTRJEGgY4RLLnHyU61Yete4vtwyysGAydwaiXCMea6YoFvigbk5BXC87rm1icVyZ99y9TJKoUTUzFMA8rNZ2",
  "key34": "4kCkyGdvG9HiTpZxvFzikvviEBCjkAmf9dmsrL7UEYNctShqLEfVSwxYLrK2H51tmuWbtDDyFp3j1ehddCFnmXv7",
  "key35": "4Txchd4cn49NVofu5pJE3BLGWSZLf22LwJedMguJNwbNpvATfCm6FSDLRrHAUGCtxUTbPNUgaCatWY7nCkTBuFt8",
  "key36": "3JfhVwTh1go9U8agpcRzBnQjMHUfk73VNPLgzszZgqVNbCpQuP7v2EW5WmxbKD27Xq74ZG7A9T7bKwokWw3Vi1H",
  "key37": "61z6HFjgLDT2uXxDM3hBe36R8Xq6Ty2yGsuqEiHLW49NYvcHksdoPgAsBep2MLxDxNoBb2osLMJkn8FJogG2w2Sz",
  "key38": "32VJCoVbPZkoS7TmPhM6cZdyi4mn4Qyjfo47PraJRavDGkcYirHHC61LoruXhiD632TyKJgJwcZe6u4XG1TZ2Khi",
  "key39": "5wGw7pt6hfWEGtwGyeEwxnGHEp3hAcgkCG86KWzSx96C1UST86v6HtLrMstNdr6dctQb3BVQoMh723u4UTppSWH7",
  "key40": "2JsWiSMXe5yNxY6ftA3tSkutJsK6ZR15EYwwEwqgCGJJAjabpyLHfptoLcqAwWCci7oiSg5TLDYKpAAbe5MtjPMN",
  "key41": "3V7GgT2tDPEEQV4Sj9KKbmwQ1WLwCShTkG4RYMZs3P7zU641TigCLpzmvYjWjPP6R78Zg6Yd1arQHJg8RnH7w5Fc",
  "key42": "5tHJd3D8WGbhVSxqHZkTLm8s6qWdg628pnkCLiaShZh5boCiidiEUKCg5JSyRwJZkfRu1Va77SPGtvjsUsuvd3Dq",
  "key43": "5g7phThFpfpHUa5aL4DARzCsv5gmDv9AJFdnKYMPo9Ms2T6sz1SUW1WqzvEx46G9aeNHw9zU4aJywNPWQjezFfFS"
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

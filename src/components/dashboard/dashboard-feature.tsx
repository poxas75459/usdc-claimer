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
    "2zgTJKi51HxU1VrbFe4Q3XGcwMCehiwTnXJUovb8de34gU69pkg122GJR1PkZmqCdDCusVtuy8UQrpxjFDx1DB2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3woWxUhgiLY8zoQ7bF28VH6ajJGkrYs3i86miG3RN3FLodXYztGb9DwxDais48dcUFju67CESYhqhR5bCtXa3VjC",
  "key1": "2C6MgQy3GqR2SK3eUmdENbEBqKEoRyJCUufF4zG6uCEmRzHNZbz9AbZpJaRdYH6iUZGwfrsY5qfLZH4QHNdunhon",
  "key2": "3ot68X5FoXuG9tH6BMJbfX2JNHCBAUpHfUCH6rLvR5U1tFCym2vaUbRa66aT5pxsKHMmGcPXn85yEBt6v4DoPPx1",
  "key3": "5dc9PPHnk9oEZcv2RMxs8vF4P12d8bbcs16JvukEecXpawYuKbvSCwggHsbyRD5Wj59Z8NzhgTtq9qy25Q5oH7rt",
  "key4": "5asquBsipz7ip8WqwzsF8ybdSRo1BYeYmeiNf72u4LkHc6FvzTQ4z6YM2nZ6JNQ5QZmVXgfRdZdDuBZ7v9iRvMX4",
  "key5": "45ifveBRKdnG2ywqfNXvCYJ4smQpHbvC3KdsYvLNLYjsx1TS4Tr5EGf8jStwdq9sxyKPrNEzawVe9cFUFo3xFX3R",
  "key6": "82r1JRSNY1bra4sNZn1kmHLxZqrcgVh1LQ1PVR1tSL4HJTzYsmYmoKDZuQGQx7jBvcqahn1RfvPHBpQEvKAJcPC",
  "key7": "4yuJoVwEsJy1Z4AyU2sBncCpLSuBpPwCJ5UyVrRXdpgFjpsxtKLtfRusVZXSWZTKa7ta888Hr6EU4r1D4SLkrdr7",
  "key8": "qtZxFwSMHVcc25Q542UjkatDxkzsMzSbUQ9PkqmzxUXv8ssyaXmM7eZn9xFFtw87XahiYhdQUtFB1mGe5wGSBnP",
  "key9": "3j4e8zWu5dx6JebNePkuYztSSnod25mF2bEweFpEhHvmehPnXtcPTMovJgZDgaLXrXtxjDdYzQ4RLJVywN3NrNhS",
  "key10": "423u9fN5szQfERxNUCXbBb3bj48i23SWqtj5q576xGzNXdSoH1VCr7VXbnvVvgFrfkYV8jjGDGuyEEFNxKQJLcyP",
  "key11": "34ns7VeoedCFN7gVq7UpLZJMf6QFZCTnmd6WTSMZueUZuDG7vMNmwS2qTg8L8zHRwBzPGi7RL8W7t3HhNu99cFzo",
  "key12": "5imNf7q8NGjxRJYUsLPgFvJAFuSKhL6BQErcnewvSHThWwdtMwvGZzFrCccYcseEsrhEpuD9dsgn5DH9to2qm7TM",
  "key13": "3GdL3v5U17qbKb4CsD2DQAdzY2AswefFMSkkHs5zx88U5grnEu9kJfrEgWRC7aYbUxXaqvPtbFFMa782peB1t2pG",
  "key14": "4572C2StzX7ifBLt7BbYhaLG9iV8eYkjvy5zTyhEauh4hXS6YG8FfFxU9w97YtMrwRaSGwrDMyn6VDdhFiCvwHzP",
  "key15": "4Axgyveu1sdQx1BV7fzu35tmQjp9C4hxZzEyCECGxG4CH3vBpNy8SLz31o9Xapx5BbeVibrC6RKC9V54EtDdt3bx",
  "key16": "uR2VTWYiZtyLbtiGM6JqGn558go9FF8XhEsiJhLS4BR1yj1z8B9JooDcDWW3gUf4M58UpLM5cevfkB9DxdHPsKp",
  "key17": "KGLGxMzT2QsANgZaTM8Mt73bmzyvNJFtEipTGWYHz9MUWjRyvrELBDcZkxsE3doVMx6xnL4RmToVDrSbFuqBPJv",
  "key18": "4qSZHXe13NjHodwPMevWPCRQ3qfAqBzZ2Vi5zh9wV3hzLTPTNtbPLqF5WnFt4HXcZXKcXX53SdLUjPB76YrjHbf3",
  "key19": "5DfxGBrpsHSsyKNvDtdY2rhpiZxEchUebKeCfdxYBViwBp5TZRMe2vRLBuXnRvXSEUPELVLJF4doChdt58zgBfKh",
  "key20": "663HHAXmiL4BRtnZznEGdVbzqDpebudYqohDB9fEWCYxw8bfiAwpy2BARyuRYmemFUQPuEVwz874yqwrd3EtCAYg",
  "key21": "5HJjkbmFzcrc9cEKTWwqjxXPpaWswGAnukDzt6KnmXKbRJYaqFxQmzSivHkPq6EmhXPhixwLHTrxJoycE7pixxhR",
  "key22": "kwPfRWdWandBsuqCsS5VSye6tLFLHDjcK6cjhym97A6wmdbfsG5zkRKpz4YvGzSn4Fyf83fjUqJ3aBqBp1rWPoq",
  "key23": "5TD3swq8DakUUYdLZmWtcitBTeY9fSRt4e71boGvFrUEJJKVUha1XcgvAkWWQP1crb7RWo3dyHNxQ8xr3DbfedW",
  "key24": "YQsHNu13a1a7yprdVYsdcj1vwH3766G9ZaDkfdLYbDTmZiJv4X8UWpDgt2FQkAAx9DN6DCVC2puANitRszCGRpA",
  "key25": "TwNmAe1cPxnLcg4wDeXUmhwxarqMigpipMPuPEvC6ktdukgNpHLE1hqGDHBLFAE4dF4crQbp2qLes7zAK25LbLu",
  "key26": "3qschscYgda8gt9nuKExTGpfK8gUUC7Y3Hs3xpeyVmpcKA9F1VahDVf8fWvPrZ9en6sqc9niutbDVAQR87zCuDkY",
  "key27": "FD8WJ17P78oKJcKuZvr7HA7v167gCZTctrYPY3gm1c2SuiPCeeGqUzdohg5MmfSYZUYUiAdPh1DB5rHCb5mYzfu",
  "key28": "3t6Hz3YXuUj7k6entjnfjGUAPs7X1Ne5hcsbiHFzmanGGNyLgQ7m61YS78co7WGy3uKeWVswW4QvUQHZXwRsVgDf",
  "key29": "581ydBQhjaG1FjuF8x7YuGkmA1CJeaUqRdTuHne4Z12wMnfePG8EH4Ub8CYfEdgu3boTPfrsLbp1wHjWotL5Nqfs",
  "key30": "61U2ts7j5Pw6ayMACNku6Cnfisf8jRPHQ55dbRrMDuy3NamMFAdsegDwgbdrK8WS4y2j4ZJ2ypQsx3ZQLBuvPjy5",
  "key31": "2omaQCvCLxYiAEZorReUdqdkdPugYc88R34BdjNFmFdcRq7tnZVQ4fv5h9rvi4RGY8eUJzjHn1uwJ31npwPQGRVe",
  "key32": "5ubFkZBAWmx9RwwhSh6CyxRbXL6VmJT3xXiSSjXeL2zvTinmcSGm6WW3tbq3nhQR2mSp2QhbULB2mxLmfZEGFUeS",
  "key33": "o9862MYJNHJmfM6K2nq3mxUBGiD1LenQcMoiYdNCgQswwBPWVUQ45WoduYWHEVPv63nPTPR1nBi8zKfTuM1iCuH",
  "key34": "4b62W5XpAgrCunrQpe3QKCPQEAbx2dmoqcZU8aZzUGRihWvFmEVYdYkCsdx9jWwYeiWoVXVPwyFLe75Ai7QfPQaN",
  "key35": "5MiCk4784DTUtmPyPqwgueWfm8KKNykzf34MXfbKniUJVauHEzKhdKiVHjddiZN4LX7tsgvfZsVtsqtwGXY8XtWQ",
  "key36": "4PqWKhzKuLDFxwadxJeosU4X8USh1cEMxviCVhifvrZeiCSzJEzzPKZGKMCTPan91Qba2Ev7pucwamnmEnHWRGqi",
  "key37": "4c3SmC5NWBmtsb5Kp1YEb5oAntamFos5JurHCNDrhs1qgRTYTjvaJn4Q5QU79hUNcp9VCxpvXYCQUjkbhMFS7EP2",
  "key38": "5ydyt89ry7fcdU6yK6JJSNfqnsswXBcPeAJqGVB2Fp4E5HZ6KSXMjwXNGqGWNaz7nq5vsnG4g84AoLytoiP81mVU",
  "key39": "5xs7mGu37EmAXtApCASjmUCQA8SBfAbDsffBqDt73j2aB4ZjYUGCgdMZh9Rvxy5S89Ginxj7aezkpJxiLsf1y26K"
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

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
    "458xXFkdLCyP6C5F7XpG7ogrhvqr9pJA63rd368f4Cwk8JNnpd8jQV4yy8NuFnGxGqnhpEZVhTRbHvTnndLGUKrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61J6aPVNke89cMwycGjZVdmR1sXkggQ86py96bjTTTcAB9jjVeJkMfQqiXnHipNXdtJ2jEDBu5Fd6s2XxvYoyd3m",
  "key1": "2PgyEk4N4KDAi8tAm6GkqomA1DrTiWY2TCpyect6zUWmFMwfZyuRHHQRgbM3XWpfiQ2bpRtMYRMhPUEpjPHMZi18",
  "key2": "2mmDXzxKpW6eVqewuKkr29u3Y6SLPdy59wXSJwywKAWbaNwqpdnvrvYbGETvuh1yT99rqNwH6UTDsuaMnNWpuoAB",
  "key3": "5uhSM6jGmnHyj2XJKbmFU48YGNiQ9GQs5g4Q2GyrjDDcdCDCeRan4gyGUqQdxTUViEidx7vRhKe3k6HvLDwaAr4E",
  "key4": "3AvBGbPMFjVA3UfjbbYpr2hVjt8bLnVdj5vGN2eXcWHcaymRWuubpcd7p6AT76H4z9KjWmVxrxYfvxhqMcXFTX3v",
  "key5": "53xTYo2UoCv2hY5a2uWRBm1Cb5oXwSDctDqSRGdZv4fLG4a4mVJnqMhtkoSjcv8Fnkwwx7RXe7eLeMcrSUua3YTE",
  "key6": "uBBBLgpK5pr69Y9x2MpGSkjV2oNm4iDXYcjTKUwGmPbJjsVLadjCF5fr47uUCBwVPsnCQ6HWjAaykgvq9yxDHAg",
  "key7": "4c85J5X7j4XtgmyRtNysqEwWqmx5MGEoaH1XkMDBcqSTTg4wZbguFkL4kKhi5CZygD7h9ACu9bEgTchjcKQdrhzN",
  "key8": "2mhvtgyBoAY4M5ddDRWMAEswQxYdyeCvcqwjWivHR7GaFoVSpS8TQhTCG8VbnbEruYbbuJEeLdRCUU9yQAebe6h9",
  "key9": "4kjTJo5upSvpNWvbV6k36iBBxQcTJitKireAbmRBUDuiN8cqret2gLDJSVvivEazaQzuhJ1UoDSkJfPhWfwMiT9H",
  "key10": "3R9LDrB9qqKnJoZPZrTLHFQcfGbqSHQkR6PhxmR7f7veJjbTtSZzHy8RGaZuqVaev1aopandQr5ZS46n86YYQux9",
  "key11": "298Eot9ac5fmrjbqwjAnVPysTt55THxCy7ZikwCWA8zY5cL6YsiAPyLmbP1j67apUyQmNm76kGuAsuGLZ1grfL7L",
  "key12": "d7Nt8JSEJSmPk9MbjEE6Vr8rXC8LQforaWJ752oroVmV5jvg35gDpfCJMLNmVaXDB6bhXgdXd7P6cqVHyTD3bfY",
  "key13": "2Hsqv68VtqYUAWPhYNEUGkihjfJ2hqbaXF5iWuUALxna281PRzKY53iwX1LYeZBpMKBKHjJVo626GQSogtY59QdM",
  "key14": "4DTqE94UBS4ULLjKMQtumvEJAj5yYrYfh2WscZ2UM45GsPv7t7GqLUPYcKwSxXPvC1nmZ7C4pnbEihkCxyiUDvpU",
  "key15": "ci4qsbfPrRbLdUzHw1M8eTxuEB4UXtsACrAFf4yej18czjc6HK4NEQ8MkdfUgkikSh7NXKUud5KgMokhs6djZUe",
  "key16": "51vMx5uLFA7bGMdQRtB6kdb5aJhF1RG3BTuSHwiHwFReQHJpWcbM3YAAmaUeS1pr5tD74sQ1ugssdKvLjXAarpBH",
  "key17": "2DW1HzwtG1GQ2tt3NJnx7VW9hcYVFWKKYgVprA8ZEsZmxcBTJvKNhkMbEuLu4tkgHTMDYa4dEczEmVNaRWdAnewy",
  "key18": "4JSv5y9DwQkBY3aQyLLgCMaabBagjWkGxH9Ap68kQiT7kor7M21Qx3KQFH9rHcSjXAJiTXJXKWcYBHRs8P41sF5K",
  "key19": "3X1DJvLHRkaNNRjekDpiV9K8TswaWaRFd3Wu2zocGFKqGqYMhA44BHRipvPHH1etw2iLRfubdRu4inLHVWURb4we",
  "key20": "5RWFA9yDeJiPsyi5EZZuH9xFSQ9EVGtKDwwcF8w1y26oXiTvtnRpMvK8PL2WhrUzM9928JaWp2Lz1CdBCBKFxTkG",
  "key21": "4BiWiugyQBSrbbhAxwgqNSDMmvkP56ij7RZFLXfmQQLpMe6ZzBcY8J9gM7sxsPNU9mqwYUmDKSEYqgHkVSGWh5Th",
  "key22": "5ySqxGQPehG42JqYvJJhQuMWqKWva8d92GyukQsQFBNcCiZPB3L5162GNgEBksYuyRpyayoKMovmQT6V8gD2SyFM",
  "key23": "33B73yqDCUpeEeU5jjoarY9mafvD42D1KcFCcXjXDF2DCWDW7HcufppJHdLUJX2UTtWznHP5qYTXSGrhU9CzWAqA",
  "key24": "4h57Tvue2VAc45U8ZEMNtq9MzhsDDBdtWahDZJ4fVYzmnzvKzNqKgBoJhDLRhCAAv2ZappiJRanWJuccjeqFZr28",
  "key25": "4gG15xki2bYACWiMKfK9BDnBFRDJSW97y3AFFZ3AchHgDw6GPVSLdHvZGZDEmm1qchuex8kwj6AL2KbdvhDcYSiJ",
  "key26": "2xc9aDGQ9hD2tbFDToMvpYiMcA69atBNdRpXVy1m3wbwMr8Ct4dRZUGtCggwNZWCR9CHyxn19kiCZv9c9DwFV8vQ",
  "key27": "3YWHBUCTP7MFCenP5GKYZYfNjWVFWqmwERpqZnKyg9FX5ykZKDxkv5T93bDZ8AmXh8pZ4TZ3Ka8kdYK57stQ1o3p",
  "key28": "5VHsgGQ1ZtPruxWQeynZwLddC9bn7XhxmvaHfXdonQSqDaiPvxfXRUCwnzswYm7DZ5wScAqMv5BaFi1iH523xqiy",
  "key29": "bHMPz7umtnrKrg7TfVt5FMEnm3mVTUDaXVT1PkuUXZVAmWoDSp3zA3nQMiqgUoQ7oZErMwebdZwm51tKFAQKBX4",
  "key30": "wbYHZ8jNzqdfaDPAMd371M1sqW9tsjj85EBeZ9P2ZoKAFbxRgLAwtBSCz8TR3PRpB4W5Q47CFBpv4y1skorrQtM",
  "key31": "zAt7bcZvpirhDcg4Nj2oi3TkXmxK3JRjLDbnaLXFxoCB8TEtCGQ4QrDAts8TvZayTiCRWErvRFnoin2dWBup4GX",
  "key32": "4e8cEpcxqvUaD6AT3JGz5BT3bxxbSkooGTdLoAqWCsmMU7NE7LscU5BCnx2LVAUaVMHP7tkY5X9nPcWqsigvASCt",
  "key33": "4g3swAvaGx2eiVZGXAmRgb37UrFnLpTZmfko2t5r98RSu7V423m7eimxGuhDuuRgjmHgNUMXR7Dz9zrLNrxEy4z3",
  "key34": "gCALodP4E2zWzfjWvtEzinisN1QQysoxs21DQXJjPqdNSBzXtcTuAheLaMBxi9RyqmwGNH7XVipC6KkHjbowpNh",
  "key35": "4weg4Y2yqH45vnLNErjkiLyEakXeJxHuEhbyr6JUtjbxhjQuSr3Y3AuXQqaL4Db7Ld2da54Tz2vJ17XF1vFEpXv",
  "key36": "2ggqyT4DUQCZHoZYZNcABsLtySAfkwH1f9nBSfDr3Kqy9K3qHCXdf97yATNaJVkZVF5xcXD2vyAiFebYoQnjworJ",
  "key37": "4msU7mijVgHVVi7VuCyK8Jd2QuUoWJsBNM7RC3gEKaRPYeov8EHx35aqhj8c1pieqw1bx6S9P5kpjZvUKstRWpaH",
  "key38": "5o9ZL1iiLGHJFynQ2a2uFHXf3Gbocny9RLTWEaaq6L7AR2Fy9VWqCv6x5d8XozuQNieTLxTjgW6ernV2HtFPnkhn",
  "key39": "5DZ6hQMYuwkUD9pkaX1cR6mMDZoyw4eP6468Z7FZYoqC6ykfkGSyw8R8Vsn6zFUZwZYWFEFJn56gBiEwvetihz6z",
  "key40": "4CZNe4hdyKBZjxumtvxoCNQ19UsG4SPSdqwc3Q86vSCy72cpK8TRkPqxeurmFpV1ko2o71WqWcvYTMTMr3ahiyiv"
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

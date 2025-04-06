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
    "4n8hbU8KoDUT1GKTbFcajatsU3sUmw4ys3WQfMbWMLRNSzC9vrpnAGWhhSu7vr4bAz3AtMxQSrPWMKjMWMHP2F5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmpSyUonCtMQWYmXppDYvNVNw2PUKLvymXmAYotL7LH6cxkhy4b4NB3eFGNGa59VxJUkokLmrVWXuUY2MzpLgBf",
  "key1": "664bNLLyM5xoSwFDgC4cjSrrikjx7khTcRs2p2aVchyScNzaVyP3GpWWJhPZNA5Rcu3GZ4Mg5KypMU9bAMy4LCA8",
  "key2": "4UqMdGRRWBq2SWSWg4cM1qPv1AmXS7zYLiLX3NRGjugWUDJAw4FFnS8MDwdcumZWL6iw1ocAPcqyHsggdKfk2hJ",
  "key3": "2wa5J28DG6e4vnV9smkXPKo7LXpaKEYxEtEno1khk8TPRnPtW3SYpBDTvn4msiznYBEamoKKGdRLLYGZvaqA3BLP",
  "key4": "4aoDrJJvLny9QgMXv5cVbs5A8PYphjwgauuzEohRvHfv12mMyN1KDSi6J9LjixghyKRR86MNrT8coAEPoeqD5VP7",
  "key5": "42NhbUNaN9WcdNa8LYuci6ThaKurtKyouLEJG3cmkpELPUjvnkiRow9cHNA8Kg5DWM1kLmAH6cQ5wKMESFA5uway",
  "key6": "33cLPZtzZf2ahSAnZLCK7zVENpRZTP7a4KRconjet3i56i3uxVacBTpPVR636ZPJDNFnmaFEfMhzevopW8En9Rhu",
  "key7": "58XQv8SrMysVmzTkMD1LGzkNB65JYdfvd57Sf3cUh5mYBbSb27GPC7Fd4WuTkzmgG8kofvrJkD6WMox5EEjWEDqe",
  "key8": "S2BS4Y8FaLBWkj55btbUazehGRgirdpAfycDt1fSBmj6GDTXSWDLNjbN6GzfcR875zx5ZuVHsJqybfSaJiJ6H6A",
  "key9": "5tcEBGL7gDFRLh2gwJm2yxo4fFwjS8KHmGMRNNxzEYuYwQM4Duz2uqo7PWtsjx96NcLdVu6SqyZ8TX2TTE7sdt7R",
  "key10": "3mrPF67AEYn4DebQChVcbEr42Gj3ASwxPzpZz935EtxHGHV2Cej9AgkSqzRVf29oaCRnftjCmrab2D3G54JfaDP7",
  "key11": "36MHvPaPVfC4oJXZbzj3uR4rvU2uKLcW7LY71HquPEyvT36eWuWZAsXXbGs7ntNfH7kDZyfZ19APNmbu24q7NpFy",
  "key12": "g39RTkuJCo8pAtqxgoXKbTvREidqkjCFQHSa8CgC3JSUyKAYVVKPerQzSYAQB2idAe1ck5P543e5cABdVZPqX1m",
  "key13": "teJgXHcysa857o6KWfMZunmQLBDKyNLbMuNsAMmJrKcfAEhkkyqGmeE9mCBKtvzWjdNerJqDspSJHENakqD936i",
  "key14": "5ULZRyYwW9RNKGMWJTqqmkkBtwT9nHWkGnudbNCNeXs6HQC8xnwMQ7rNgWrrTBKdeoQNwq7pzV66UCc1YyBtZGrY",
  "key15": "5YtgL3Vbq5U6iwMHPsFuTjNU6WYeH6a7yuAoXGj9MafQ8x4TjEYeTkmac7hEzhgX5KrFVwhw99oY43cpY1VyTim6",
  "key16": "4DwhYuYQvZ3Rr3RCSkyPj5tw3AQxmeveUKWQY7UnVjmFxCj6JBZWVKgv4HbBsmzV7yQMUUcahZdgGHqqa4xE6YQd",
  "key17": "5psyczztyCHfE6M4BBQ7Xq674miHtSJkpenyYLqXBcpQnjWyFjqbf4fpyfUjhKji3eNKKFzJWxBZLbPpwBuABpYd",
  "key18": "4SWTmUuTk12sM6SgFvX7bTUi1eL1TutYfDm7xsiPxQgF5iDMDJtmR9BBfeJZ2R6c6einB2chxzATWEgB13ZJgzsh",
  "key19": "3BLfAPMgBk1oD3CFXYMKc9ch2fPD8jszcRX3wmRzYQqGZbS1eDjMTmjk7GHNyopekbMYXJz8W15aMDhm1JLPBVqe",
  "key20": "ZhyGh2zXtV1vZdjAr4wUSHz41vpcjtmpv45CuwfKic8hoWBJssLX7WffX2ZfyKHhDcy4YCSYx5zxYvK8P2LYphG",
  "key21": "5jLz7sgZZRQKVzu6j4CvgMNG9iw2eD2b8b8WKzy6e2rUkYyzPBc14HCuRXy7yL2TAngXmeFv7fnGqFbDyxS4Z6X2",
  "key22": "PKH6GALAaHZCSyt1Wa1R7emvKavQN3Rfh3cXo93uEptSsxnAz5KnJK29GX5EsqdmvwDtAKq8Dzx3NMHmzpPtTjX",
  "key23": "3mGemVWccVe2CbjPLAVgQNLtyKGSwSVfJPPmJkz2EbuAc6ah1ZwWoN6M4BcjbJJPPBVSEKPKesDw6f8m93WFYcBy",
  "key24": "4gdCS9LMP92nqnhAu53bguEUHEheT9RcMCJwobUqPGUA361bqi1aiMhferYMeBN3FfTQTuPqdWqgSdksCMPZiUjB",
  "key25": "zRquE6m6UB87SBUtszCRGNQPd7xbRSvYBxw2W6ZfKkgGpQ73uPABspHYZopJdqn3FobHve1d5VKG6Qr2yxAeo2u",
  "key26": "CxGf5jzLJH5VFzdxBqDd1egsrocVd2WbK5mer429XjXCR1At7yFVa5pTMon9qD3oLXpC88qDQ8csc5GCeUv45Qn",
  "key27": "49h3JUoLCXvRBfgnFzWkT58a5Ay4YBH6i4BFDbABtCSAo6zqdxfMFMnrn3Vd6en5UyqpNZ5JDLEi4YtDQYSegNyf",
  "key28": "2tVjW9ZhL4x8gsoEr73G9yDzBVxvL8ysqsdEHxNMFYmDxya45okTRBX458j9g2Jm9Yei34YQbs5bVyPE6YeoC8CC",
  "key29": "5WSxM8DghBJ2vSY2YxC4Bghx4ECLvYrdEEtZEV7LtcvjSubftRTj1sZ4ARriB3ZNkVkA6Kp2iEF5af3znXzky2Q7",
  "key30": "uekXo46VBWCMRmm2BsSP73sfPeWkxeusgidJudME8S45G6v6PJBz9WdXaJZjwoH4Feb5vh2RE1TAXQwM58sC5QU",
  "key31": "3Bz99JRVXGNGQgQXqBB7R3C5trVGPLsgLcnZ3pZaya4ctN9attfELJUKCjhRZLGQRjknjHfMDXtNbgoKFo2pMWDD",
  "key32": "5ArkUNQd5pXFVnZ6qQwPC2GydEkqy32AVdX4w77MSqRMLh81sgD4yix41W3Ff5z3sBojvtusD6owu3doihZ7uZUP"
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

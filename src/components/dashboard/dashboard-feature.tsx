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
    "4DLLWAgzQmiwxUGhv2SGAuiLFCmhH6foZzpcvnKtvxcXNgsa3HFgAYB3MrmeDwsfZWHBVjXeQGjy9q23AcRk8qBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f9cxLgymFWXTdtHFa27CJ3RxRzq1KUr111VrUCXwDRWSuKP27ipxqAf7qYVHKzSxuSW324Ld45Vt2eRVQNGHhK7",
  "key1": "5t3nikJyRYdgyuvNKNbJZ398xgNQJfyET7e7mjwkmPLfmFDXKz4rVJ61oNjd4FfCk3UKEcDoZHYC4tFhfo1U4E56",
  "key2": "4BFDra31AKwJM9eFytFobnPAvdoENjNYQMmUhTZUFFdTh4YTPRmKLz2hdUB8AJk8YDpqG1jnZPLRLFxrNAcgKS9r",
  "key3": "3etZHwp4J4rokHobxUtVWDfcCfwXP1HtygUWmGLCzfMwrq44mnDMZWZj9YEPxV82AQ3Hd4HYjxBzRJbPQ3w5LFqS",
  "key4": "A15c2KtRoq34ansYZ2XQFvjb25zYdp4CfMWAu8D2NcixHGApEg73DasDNyRWdzB6CjxPNLTC5gnr5BViCHGv1Yb",
  "key5": "2hjFdYi9NCrtqdLrVsLR5QPQe2EHufwaEyvNsCe66Y3UM9eJjVHdviUsnBKhdSWC5iFvC1PQmjsr4QDwtsesC5Qc",
  "key6": "JsS1YjDKn52hQ6mLB2onXqzSQfhHtRWxkJxEqVCiw6RgU7tyPTPnW5ubBkEV6Zsw5pzRM6ikLMKmJz1Tb4iTfDx",
  "key7": "5dP6pX4RZuPV7f67LH3ty4kz51sS2nttLkugwrsqai2BVnUHgtjYZQ5xs9Xug9Zc6Sbz7qbKZiQAt22DkSxFLHnm",
  "key8": "5GEVxPZcpic4XHkbV1494WngFtQM6yScTqoXNjSimV7KUPCrQKZPQoTH8fhtQHoGFcvtGSMEMBLAd2wEd7BirDjm",
  "key9": "2B3zJySfBpYFtzWzBnLqWAnRTxuMPMVTE2tZxA8ZYcwoDecaAQa8k1nWR59Vn7YUmHHUdgmeur1YFjvsBA3Wo6o1",
  "key10": "3gXrpvzj98mcNmFNGMoeb5M5TTai4qQxoaQmnHmX2wugSCRV5kv8zeSHaGczSuN1crNZEWFLjpBCWufHPhSMpsYB",
  "key11": "3ooRf8XDeakhrfNdh7Fe5tHCaEBTMpLVSrJDAghkY93oDYaeMZEWGXQFyLZyvEbagKZ4YTQoCwucinw1VXDoz6mV",
  "key12": "2V6F6H9HnBDzdYDUB2V2MakKuiHS5ymtm2L6MGcStXnkZvnjXq2nvQ4cQaF2WbEtatW6xNGvvLgBY9hhnFnmnRgm",
  "key13": "J7wm8N7UuFnewVR7ULzQg9vNq7DJ2gc2JLV7yydKaUrSKgcoZmLBiHSS4MP9fS58N1T5w1tY2M4KHHhj12AYTXX",
  "key14": "5Zd2qonKbDdqozPt7Dow9UVih1qXXvtzF87u7q6RCXcwDzquoTUJowaBRYHfKa3R2dLUfu9KMVxK6jUELhNDHpKq",
  "key15": "3iMsgGJBRY4x4FmbDjjZ9pDvvz21hLyvHVr2vkmLAFiQmCjLpsrBabnwaCvFcd5M3TmVVDxBE5dswTt5YPipnQ18",
  "key16": "52ozYjk4cH8HsXSDLX6yENKDw1fKmPQEfkzGxot5z4ixU4se5tSVzbFt83UQZehJz6e3Z6MrVska6Ri8SkTMJzhU",
  "key17": "28wJ5BCrcon7wnrBXJb5xbDxqDcmnowCQBRwTJLT91ySxDjzQCPndo7QiYJGgZPqAVVuFFESvMThhFVgZmbsnZ6k",
  "key18": "3cMFsihLmD3E36KyrvunCUU5cVwbSa4gEnDFu5wtCKeu4SM4GwwmJ8jTTWEkzeUfZuAUrUGestdQZYgEXtjLDWx2",
  "key19": "3VTugVkVXdHTSxVd9HRfQ1E7LAzFxFDxnN3YHWtX5QsrDd99ydLE5s4ivkr4aQJrDiAvVPYLDT631n6MRwUUEoWs",
  "key20": "4mFFd6DrNwdYpibFG3kRpqDXKPmBGqnAYZm2AUPq4rYwfqLyktqrXS1QtyaFHrpsFPUcKc2MABHd2W2VEzX4bpUR",
  "key21": "5KpXwiAacbWMzx282wyRfy9ANGjVvmq1m9yTZYRc9q3N2GpqsYSu4QGeH7RrFk3fscmCz4xWSJ3adPmkRBnXBpXm",
  "key22": "4US9PG8KaAW3dzYE1geZ6E2FRsMvA5qPushcdQoZyceXpRTCC5xBnTepj4hmes9YyxYfZivRSLTah7TRHGSb4Qtj",
  "key23": "3sVAaRFMDUouuDdBZdCxRxeSb6Lr8QDbxqJeb2d3CYmuyjRHtUWrgz6h43utfALU1outatJuamDtfdQrFkmLZStZ",
  "key24": "642FUfNkeGH5UMp6BnYErw4Nt3EeTfMPEbSLaAUreaJ8jjYSp3mCcC1CK7TCk8p38QCSvQBWvQ5ucYGfiMEyvp9Y",
  "key25": "5oa8sEWseMaA5UsGdZjMo5G8TGCyXhVBi43M8ynWfrS7tgrtMVow6RMGUQgLmEG4t5VZZTKYYRz5YRvDzYVkou8x",
  "key26": "52SbzsPGxAcQEYB2UYn9AQTtAmUifFREemzkckk5LZhXTXDKPR1a9G1VCVFXNd8uNVvoPxbfDFnUW4tfsUXWz7EG",
  "key27": "Ku4wVNgCXgcG3n84PTEoQFHQEipAasBFQFRPCwUPJmJwwkV9uAwCAYu4C8LXTgMxLxueTSDn9W2YthtZsx7JLAn",
  "key28": "43jiKc2Tv4UAhkJr9uvuN45hXqHBXmGvpLdkyoqZGj2PdWS4Zis6EuwE6EmpSAEfCV6nUA24SdNJ3i79cMqvHBm1",
  "key29": "3HbuxEXi76zABYoUJkdoPd3vdMQAzmhVzQrrmCoLX8wrp2b9VDnV4L5nhhmbFGxtnSajj8fvaDskpwt83hQe9WSu",
  "key30": "4YxPd8K4p9ETTprahxm5VRhH3GEY7HmoZgaDgMPAWRsf9kECGxcth5pKnBAeRY3ePTVnrrofMYhgZJLWDnckN1Jq",
  "key31": "21NM8VXgBNJd3i62454BVLCkwPNfjqWxJH4ZnhWf8omWRcTBVsY82YCSZCUQDf3mEgdWKKcCHcFLgZ2hxmDxYAae",
  "key32": "5LhivSgpgg2gbBjQproSASRiATgh2bfwA9WmFo7m2brafctp7FGwdG3ovGYtktEhyMo2jymAUdEYepcz4nRg2QfZ",
  "key33": "8UPz3N4jqQkii9jVXnXvDJ6YpzUkaC5s3gbzBkqDBHvmerxkHf3QM827GGk1w4az3sZTDmsoQNbUFajUrw2ydvQ",
  "key34": "2A9Hd3P7xFxqcXSZJvx99PJMu2AE9EvCj71tgp9MkUiRRc178tKZokpbCzVtgzJx7XTPcseKhWRcv99Pq1EKNpiP",
  "key35": "5ycbjMC9ettkQcQ7KEGW5DR8WSg5DDbGSfttowsH8TWk21fm9guW8MdHN7LwZd7RDDZkGvvbMkzD5uLyuyfMoisi",
  "key36": "2cEi5dHrRLv4oXqk8TM65RNR9Hdb1VScuCy2naEGV43ZfYM5ssdqTr6tXgrd8m1ZVnEmBWAscQnaGH8HvhGy4vve",
  "key37": "4n4E44EqE2Wij7YqkHtvTPvS9EjAJNbFEuBCPyg1U8EQsvSrtxgEQtt8AzgigWBVQ3MJsiJgFk8fMkEXVFoJmFfP",
  "key38": "5emP4BFB6XDwBFsVHZF2sRYqHajBNJyTk2u1cxE22gXLLvkjokhhdoYPFLwuTQgfa8JTV2XaJ1jDg7EyXimr99jr",
  "key39": "2JRwtakLQVrKti2ucPPttHaFizPRZJBE3qZ6ANjZjso9T7cS79FhwgE8ciBfXgo7cR29XigEMzvo4vbTzVdxusL5",
  "key40": "2o6tDCiqMD8hbQMhRXqSriJbo73PSrdaG6SXeTAgPZ6P2xfiDw8T7PXrsGNnGrXLFM5aeksosroi4vxpRRLBdabM",
  "key41": "43Vodvrm5Ct7Vdqq2TGWmnPix4Za73sbnSF7haxXSbv13CQse7jjFXVCbiitSLakrxFsu7iQCzWQWvpx2hDmghgS",
  "key42": "RB888KcB2zTWpmGvxGnaqP6C7AT5azFbNZhaiiNbJ1mbHbGxc87B6FWWNJy8JNs8SYKC2gfSXq8nZz5DYdBTF9c",
  "key43": "63PBowSwfHHGYH5wYhzd2kCTTTeQS8DaF944UXgPTrAMxJVxCmwPeneNcAyoYqE6PTySptVmigf4wGoFi4216xaJ",
  "key44": "2kL6fHc7dspFS7PwmfycmXNPdDWh8FCMkG4ZDM28Xj9n2g5xVWh3uupxhgiLkh8quxFq8T2THb7rnTkYNup3T8Ue",
  "key45": "2jHbsKUDJmREeG6HqBi8ok8er2mcVPTMQHVAMpXpDBgwQYMUhfXJc268BjPADcYKvBBMHpoR8cKKxdRziAgeCdeF",
  "key46": "4V4nGK3beyooDQ8V5VYesRHubBd9gTHg459omo522tna2FMSuMAbo1XGi8ViusASme8ugZAwdXDiDHfVVKCCZiTS",
  "key47": "jYautMPdiwZse3yWUU1PmRTWzD1a9pVn88nsWQfyVZXJGXW7SCUYrJf3sQQmQmNdY8YBiiivTV8qtkKWVYieNzy",
  "key48": "3nk33tkPLGmMSLda3wqhy6pLuHq3nUA6rs5kRK9Qo4iaaHHC1qBCyEExjVJSkBAEBmmCdPyaRPmCTXfj6PgB54hJ",
  "key49": "2hZzPw8LT76VEc8nHn27kd73tAGfCEtWrZPzKHSbvp51cNdrD9BLJVsS234Momp4ioRApa8sQyChUqXqrsGFb4pL"
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

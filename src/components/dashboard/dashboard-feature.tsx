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
    "5kCt8mdsDJMKub8dpCu6dth1gmDBLrgSnaCFX7JudrtsBJj15CNEJMqDb15pVigNkd2wSG7RzwTmxJ91jAWZ9KXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g2a7GT11EjTbjfK2L3qb8wkZVaMsV3pwvp2Hv7w9L7RkbJ47EjhT3hTVnnGZYFckdVgUoZeKFMRSK3UpeEwTLW7",
  "key1": "xTo4zK6Nf5Qezrnfcjcb2uk226EHEYBq4Xd8bNx3fNK2Xo7jXFgn1sSky14F7Y1zLySwkQzeXiBj3zbU1Qa6mnB",
  "key2": "69bwqnNhrtFQ2zdxvYRf8Esb5XhCRVp925oF1B766PgTX9TsdudzAXLP8CRVtZNjDfEgVe3ZcfDMFMUCkQ691QZ",
  "key3": "4otdXfCfF6dWek6r18nJLtCuvQrY5bfFA65DJj4tYqfPGgUY2YcZi6DVnkmMQmfNstyr7qbtGNPef8qcKhN9AYt3",
  "key4": "5mdN6TDYK9Z9ydjTcdbwTCXx4yp4g9uJt6qSKYbzMSHbTG47Uftn8WioC2V5FkHsPnm5Gk3SYEhJwruXxxMt48z2",
  "key5": "5bbiTqkZeMCm2PUcKMpNgRaRvVAJB2yecu1QwWxMksVpGakBcxbWtvYSd1nT9V4YJ6qDCKMzgdBUMZdNH1LyX4GP",
  "key6": "sz3UQjgZnbejRemQk9CXjMN274aj52cdL2Vvc7hGwbgbDDtuW54eDi5nX8WpY8MpCUtJ5jqKELg6YMDjNxPCD1Z",
  "key7": "61dd4DFHjraMZPYJN1cstqgySWVeiWnmhEsMmQmCru56WUTd5XPQWRgLqr9R1EHx12WWVkxxd5Mmm3smNo8cAzjv",
  "key8": "2dANygdbvGfCcSgKRa4wv7Qqtti1uX4cHJ9JdwfLspMHAZ3Y2td7R2Z9N62Npdtmz3duJdBJsPBBjhsPS3TCwdDo",
  "key9": "4bPWZfTFn9Vu75CnsVgVsNkB3b5V1y6z5Ug8fnwRNdoCMujZMgbv85gj7dWq47two9ZQaFzjw8vWVruSasevTvmQ",
  "key10": "4yzUyihwN7RgyrejJDS8Ch2MzUd41TiTohebeZZZgpJsVgMgNCco7AaD3NRHPNmvmhRkoFqwpMk2TM5UYTjj1zE8",
  "key11": "BAVYbLk8A52HGXP5N16ii7daHVrbiEVn3y2sZ6XP8GNVSKC1yp3a8SjAAypLCg6TLt5m1jgLLu1EMg9m9V7JcR9",
  "key12": "3onPysyUZeoUADS27saeywRxDRX6k5276ZafKtYhXymyGCZANyVmSkTDFyQhB3uU5k12H7kpt2E7qzMcAKh14Df",
  "key13": "4JmUiLLEJmuHMyJmH2AYzgikvnySJW8FTBWGmf9u7bGL6uPYWJL9bA2aR3BmwEJU5G91gt7XWUr5F4bNmsfLhFVB",
  "key14": "3h3XEFo6wh7jVdcG3yGtKZKGYe8XTiWS6RH1ewv6wQwy9maqvCMD4t9VSJCeynwi5chLpgeQVuCs1J77LXQz8KkV",
  "key15": "48LGBVjgM2pK5zNMHakpLphC7M5nLKzBkvViFDEcJV5DGeaFmCNdrfL73uBhDDS7Mpwgu7RNv4K9bXvHA4chnzDr",
  "key16": "4bX5NSGnRLXTipQk3vUyZp7j3bmv3Pog5TUzNuTLRGuQvLYzEqG39BgtzM5S9jsYwyDJkEU5FGtq6SnbCFCUBGAH",
  "key17": "2io6aX5oxHJviLWmj3j8M6JuMg1aSMReJu6hKUmkmXTHHMGaEaMMtwpZgvXeCswY37rab4oE9JaXUFhtKQRt2KhE",
  "key18": "NRB553hgXAig7vvRcmYqWRmBDRei2TghJ8kDpeTkojVyoGULPsoc6ofJgXSL8ErxfH4Nm8RjjbTojQnGyQNCmQw",
  "key19": "38JwPvtz96Wz2Z1ihb8dEpNpVwBH118m1PJmNLmKeB39WzC6RxQxPwTJgu1BEndPjuMqZigJ6EC7Rqmbk6TdmDRS",
  "key20": "2uYmHvR79tt4p6iEiadS9PDE4kPAr2VyeAaLhksF3q9NzoEQrRQgtpnxziYNbfGSerzDW94DhBhhSpavdp1vZNhW",
  "key21": "5KFm43JJDFi8nPriZdYYE91JKte93aJVrmTvgJczubqoB6GtyFCaLacdUXMYPCnKT6S24G8cPkVLhgZi7voX3RfU",
  "key22": "521DyDwhCGZWFjshDspfgjWmQ1Me8aJReMCfEk67UUTjP1e1cDHvbJnz5fRWXxudWM41H1MoHdfo7kifpx7xP3Si",
  "key23": "erA715HPA3oV8jwotJWBMfnLvxkRxmKEoxrdac1ULZxEe3jBq1kWPVjVZSkAZKuKApGRe9gwrdvmYPTqQUrKNEb",
  "key24": "5HYVAMroBJAcr4UrTJdjRscDb61T9yzbP1K7jpjayR8Bd52APHg4ZaEaHMZrZQs94dY8t5qhQPVCsR9T3GEDRjdL",
  "key25": "2gatbB1P2unJTU5TJHWncG9Phrqfv1e7PKBPY6oZQ2iThuC12fpA3fjjy2gnSHL8BgAN5E18LUde6oRomu7KVuin",
  "key26": "28xEbHNbd3AD9LgJrrrE8h7R691RrBdRDvYAUFot71s7jzJJU2nJMMCr4rpziSMa4n3Ermbcv1Rx7uhV6f14mZK7",
  "key27": "3VAqdv4Eho9ofeynL3TUK6A5ho6BjXqiXmpjvRsaesqvwPAoWSrpoK5tFuobPzQaF8DVwbdNhrYzfYSs7y2o6H68",
  "key28": "2iBeuAuj3FgnkmANqePUX2xqZHPtP36ZmHEVXQKSL4bL5JcGGcwUjPoEAR9Tidoq5Wf1kXmGDJ7FxA9HfK3kFjeN",
  "key29": "38U6KrmPLJPrdoiw3i3WmYa5fZUsDALqG13MWvG1uhz24jMxdpM5FXHywtfYF1fdKPZGMLNByGTthnh9P7jvEbjv",
  "key30": "u9cVTNjjQxE6vPTWp7BoxDRpHLJGqyvjzo3wxxVE7f8idyzkLJBpoWuTvuASNjzVUSQ4cwsCvh2Xn5QxV2Z6FrB",
  "key31": "26QkK43ivLEvMZCwzpRVGV9tQoRXzdzQv5f1gF2beJv9fdV8TghkXEYvGz8s9KWsCu51qqyk7wCLo6nYDBGuyvaK",
  "key32": "45qmLn5ihUnQMvqypL73ykkXrKHtKRbgUZwEKXDhcTLzuKtt6Py7ddx7z5kCoHguY3qLbtAoJGRfjSvFvTCXaF5a",
  "key33": "2ausAExeEnLuyAufVT2DbW68hnN1nPEGMi243tcvjxjw9gpMAMAnKFiwdrubA9xE3fzj4ppwJWupCMMKC5mEe83u",
  "key34": "4FvUXnPaoEzbfdGuKgiVakkbpVhozxBZH2e4SRVvXzXH1XWGcsYhy4AzGZUqqc4ZU1Nk22dUjoVKE3MzyZkFnjYH",
  "key35": "2Q2uHPajGF4fwBZFh8f6vcayS1p2qiVqBfgjo5tJds2DMJEYtyUVcVjNQuDvnbeoxoT3NL6S1UNAwFNChSMWJFz2",
  "key36": "2tppiiqmuNkwCPibgxFaVL4ChVYwc94KA7hHcBrWvWB4dvVmSVvTHNX4bjJnHisTGayjrahxFDYMRg6sv78SoGqs",
  "key37": "65ni1bpxM9MdmLg5Uhgt5M2n2CkQewkGkEQa3J8KkGESZP8pz5ZVGo5rh4WfenXCTwmasbNwAkdvaixJeUQWQPf",
  "key38": "2WV9ULWWYwLv3wr7NafHiHLXYb8ts4o7nEMi3a89yLKMvGNGCJ7ZZACm6MkiAMP2NLjjRE5AcyozymMbiFCSwpxv",
  "key39": "wLZeCEBFvroyFMnQAhsuAkiGT5nFWNCvWDA87fJY1myHtAxLU5dK6UAgSKYEMggxELJpep3WChnBiAujowsYFMG",
  "key40": "4RHtKXS3H4Auspw9xYzHFk93dPEpNayT9UPm6ShVc8WC5ZvvMRejAXKhDKzmGZCTtKfTEadUensiu3rX7BTnxZcA",
  "key41": "33N2DbYkt8z4qJiTAUAQ7H4R6zxWBUnMPtmVNZU4ZQdkR6WUgfvta61y8MW11CvhMqQ1Lu4mJtPUM9CJZic8aAFa"
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

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
    "M84fEfhURCZpKuH3bSy3HBoAm1jfqyPgdSuxTMULYAHejtrPJt6M3KkjRrREyuaHzanyUMeQcFigLi7epqYqLj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21tDVkc1DWeKmpXg6H1tJ3FtVn1doQrk1KATxmz2EkL8su5a7Pf9c5NX1PMBMrQQaxjYtVfbjfHfxSyCaiwsYix8",
  "key1": "3oLziGvJmsRWhsv9iPjdvaUy4F3iJGWvnmNYbhD1stj1j7mFF6DQV7SgkTZzmeq5t1kTBFLGrUN8BfpQ6iFMNaGa",
  "key2": "5Vjtm3CD3qLyQekUMRGLtZaLppLdrCZYTE7UBWh7NZJvieGcecaz8jxpLnqyKjiVb7FxbN3jyZHFDwFMy5oVk2Md",
  "key3": "2VML3S2GfNM9jijnEkdv7ArxSeHniWRHGvny79E2WgEGBnhNQ1JyXiP88FBwciQmnZWd7esZACvDz5G1eZEzDYUq",
  "key4": "5wvzkmjTafJg1trqEjPK28aaDnSzB5K7Q5T9zECGgHJtiX9LpmYKNY6UJfe8rVGsKhduubesAecdDFTivGvn7AK",
  "key5": "2zoyoaibKNRSVjX3S3BjETsgB6Sv6NRPLdLpFr6b4wNp1qdhd8ryP82vKs7cd49XLzuVmTT3uEEEqtEvtPHedbkq",
  "key6": "3ZbFZ658x1wRXj5QPnqBWpF4U6m4kDovSDzM3g7ZDhA3SmRxExm1srkbKLHBRb3b9ucUFqLLssBfD3Ff1N8YSiWB",
  "key7": "hkrbk79ivw6tCU2RpMTxtRZpZ2wAfof7hnd2K5TNVMMNW9MdDsR1yn9ecncF5xrMxfgh7aAynNKZXZY5g8411VY",
  "key8": "4ocR15xK55mqsS5GUx4s9HJ7fjKZ2zJYe56coYuWqHiMkPD8mYAC8uKdVaSCVva9vGJ3tsX1MuGjojPEE8wk9wX9",
  "key9": "3PncYDZA17jdk4hN2yURMqjphgAyuscx1TZGKbNdk7DZNEeb61NHe6E9wLiYCgvDg4i5eafrWcaEs3kDJRSora6T",
  "key10": "62MDg25dS6MdvMGHrhyPCxH89rSPgdXM2QYN4JfYsrvmwXZdZ1crPJgeaS7fzh6t7e4jpsKQPTcPF2aazKtFg2DJ",
  "key11": "4jwvmF2Z4kUHmkug3DxBnxYEqvk1b2xHdAxf19gabTf8QME6aMH6aExM2qcKFXEaNQS5NsYB3xSmc1iSbCnVfA37",
  "key12": "3Me4LJNLMNPs3aAtysepXip6jq1VW7xg9HEC9iZGH2ydZzHFdEnL4TNbRsMcJHqBewqUhdkTfetv8taf1FUWyM1u",
  "key13": "4hCS934VAQ7GaDhb18p5ung6ABQejS5My7ZWP8nHSGSUFvhMxPWLq4cV7bRSiMpZijLsg1jKnT8KTovb8Z8bDxkr",
  "key14": "3mS2i4qgqDBEjkN41ro5FynY3iGn5iCFcF1x57rEjEk73J8VK5LpEGzSp8tDsK4vNqM3DnpegJ7q5FEsye4dzqus",
  "key15": "33JMg4KuDHGM4AVeYHWqF2oFr7YGz3YwiaELZyqBEEAgaHuNRGZjvnbfWc4QfCRV2Bs1FMK3Z1L9PRnJFzYKdHjk",
  "key16": "21zPFyFNeUtBCCYnAKgJzSUSXR5Laq6tUwEEo3G3UNjUUs2uo5toDKfBLv6riofb1yhzubuQDpYPrGZhBHzTkhY3",
  "key17": "PELtJgSmpmt2E9uW6Gjszq3ABoyboCKyF5THSWSR4fgmavJQ1d2fHodpvCCaAZ51rzqX7gjz92EwpZYgqfG7Q1L",
  "key18": "2ZaBHeQkwP5WBGvSFDyCRmLj1JPAzZgy3Uoy9MVgNVp7e8PYWy8JP9V2gFtH2baJMVRdsPnUCTQzQFP2CJdWTbZF",
  "key19": "29BsJprRhkw4fgttDFhPYFZe5YD8MoXLhhPTT1LmF2uyuLyHNEsHminyYuRCRpmXNQLVbYh5mF5TTixXEPCmMgG6",
  "key20": "2J9hVTeLWv75aAC2xFfL3vSZrsUutNdVd4qG5XM99hj5cPvBxXByMdmtsCBNhp7dHbtTUKC8814hRwWw4aev1auX",
  "key21": "3mjVd47QFgxW1XV8KupNkQmyt5zEPx6NZgodzxxt8bYEMEgAqre9KTYfkEhTQTozTptLePL1Sha3LGK3a3556g1o",
  "key22": "4TMNnjFnCm5z4VPTnNKJ1ot9SZXqaar1BRZNAizNLtfbvWChzx3W1ZBQ8TAsG1Fp1CfVdQ8EtGpPW3KgmMTTriq7",
  "key23": "4avSaySLbUaoD17eS6vHDqGc1YqhrcS1eMkHEmZ6v41KNcr2vVajkSsWH2yUPP7P4JzyLaaiz3W27rT8dWzhuPES",
  "key24": "KeeVTA3hpFTmkLYqYkss97Vq3W37Ew6GMfRwEyoCxuYaYMZZ4pNBhTJbeasK7gEfspMo5KTU2vKsQgbigZe7od6",
  "key25": "2cWwDAZPhsrCnfirdRzDZ2dV3LcJpAuQipMv2nCjyLc3ur12bhQZiQUYqHHA36wwL9AifKjA3oNiiMu7ZxqoTQe9",
  "key26": "SpXMe9cy5MP5F8dfdDLsY4Nsk39FnjCvupVE5AYqRzodPsxPHwGqiscuHmHYyWf6qEtDjZtRWinCy5vS7DxJpxE",
  "key27": "4yFVZdHwNscU91PQLiSawVk6aYwrKPv7icHi7K5abWwMxYDJ2WgJxCv5jvejnw21FN3RkheUdaVqZXZKPqH3QrQ",
  "key28": "617yxxTnQLepsJ8eXxhoEFsFvz5VWCyurm6CQDiys3jKdqpdNFvN53Wu6RfJYtQx76TcwBGQbTNa4ox2SzzTigbN",
  "key29": "5xDBMRBektZxvqiNXWCh74PLLJVAfqLXxr44g4MXfnAs44in4NZ3w7tQBRtVLFAW1VtSx4qGhTE3HT3pGfpNhUM4",
  "key30": "5VF5nXtSHnS5MWgZFjvpSThsG5v55nq6yoNPBCTMS9qRox8uahyLyGaxKgdqzYgLbmLv3vKWqmf8VRSuP26A6pid",
  "key31": "2ExQM1ffTPYPvZQw7DDgWUQ7Pmnnry7DYsu4AnAgKxZsyP9DbctH1ZuCPgarGGyJM5m3GS1XzRnbWt1pBERzuQ4m",
  "key32": "eySGeTJR372y2tqQuJPgDVgcozi6dEQSMd88V98BvHT9Z2B5FA5UuJWTuSioVGDpZYJ16bqfnKJqBzXqXbt1m97",
  "key33": "GoTqDcYu5E8MJDhYPt8wzjUZqoqNi7nbhp79V8qHLSC3w4GfQfgBVyexvmLL32p6eVDfYM9nsr8G4DVucbq53xG",
  "key34": "7u3zvn3JWPUuzNipbzmdRMy6ULMCaaNVTpL7AKRmp41T4ffk8qf3VAqSMk6dWMFQZeysFFBsgKu2Kojt32ncXJe",
  "key35": "2Qw62rRKL7K8NtpaodETA8JZT37HFmXCWABxyKbCYkSZpbV7Xwzpvt98PFD8mxoVVBvLpbKVYU4Ci7CskTih73SV",
  "key36": "5HEMazmCrvDi4utQ1bxVsr4RF3x1LsZqM11bwRhHvzcyK6dnqNzEi1YeSYeXQSdGcRqTTuVsQQTVGVePAVnxodNd",
  "key37": "5hjSbzLjRVcDDEfMAzn3WgkCYPtDgbY8ovmCe1mAZDLqoZA3rD6Fq8hmouUzQb1FjW2iRCybWih1Rk6KyMdceFxH",
  "key38": "3Posr59t6wYVS51mzxEVjAASsepYyntdacW3idcunC4dM7M868cWFu2f9yCVpL47S1se67eTEQg81Uiu63ahUr4p",
  "key39": "3a8pBSLpytxpXQ743McEaiYerFKSn8jsTybta2MpHuNNN7dPG1ZGQts9nXgsagW9wf9r7jg7KbiX6mJy2Cwccmqh",
  "key40": "2fSBG1k1FjD2kXzFAoTfqqnc6KmNNpUeR24JwBVCa1FSfvUnevUHyHfQtxjf5f9DJJQKfz2e6G19bcSSeNXVpQc7",
  "key41": "41rXJBqe9dFGfhP8XSgM2AueKXxtPW1fuFQUMSrfWiZh9RcKBRLyET6RS8ctBeq7fVhpch4Q17bxQASyZp2ZAnQ9"
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

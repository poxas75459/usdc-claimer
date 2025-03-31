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
    "4oACZc3sPx2TANQrF39sPXyRdU9ouscWHzqtNCxmY31VrPZLiiRtTUvxzVbcqwbJ5eavwWMkrxCcPm5T1CA7Eguu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XzyVdjAYizes9PS2kLiv1wX2TdBACQ1PP4mTBtTBse1QvSf25mQvxQV4EkeXdEfnW8emt8cmD7dBkGxpYQ4pH82",
  "key1": "22URcNRvgK2EwQEopZ4APkMHV5dxmEVnbsLR6vp1doA2H7BUFEmPchx6AFJAo3iXPcw7oFWxB4C5Ce6EdnkCXaYg",
  "key2": "2WAGmeXhp4Rj7mLuiw3WdkT8ebZTq171jicHFYgCfxegWmUn6DVyi5HLAEwwgAWxa5TKkLiawyPQTXwea2d3j9yk",
  "key3": "82Ywi2YPZELbe85cQRAkkjsMHKiSUvnLMg2jA8VrWrC9oshHxjyuWvDoAnWSmpCJZehRrmpyFpSqp51fDQDyWsa",
  "key4": "tGYYVoJt4xqrWPk5D7UdhT6Jp9YF9eX8p41ENAwuEWDYAUupcwvVW9sPMkccugQ1UFPZCWtxPH1AmbBHLHQRG7p",
  "key5": "51bXqYE5SMuk5N8ZUHGEm6GtkHxTfuJ5veyDeXMC12XYKK9HChvhVv19sRXpcFSsLzGUeYfGqTfRTykp7YQRTfoS",
  "key6": "3K2ibuaxBwqiuFfBcrZ5GDMNNcje8s7g9VAojatiCbFLTMtwzdaw5tqYpdbNE64PJDV7NwRLq24s7zNbAZKXJmoL",
  "key7": "ubJVFai1jNAeLMdbffM6xKRT6VXXXrEyCv1EdK7T8CdfYwAzoMmmSywGT8JA9s5pQWANDhkJckuXgFGvoXWS78m",
  "key8": "5aBfFyqf9uYHsaSowtfdJhrjJzbV7Hq4YSPuqjpFB9BCLAbJxfS2wK2Y16kSEaJ7NSD275TsA9m9YyL7h4fVaoJK",
  "key9": "LnRqCKjfuv1nFG9hAgeqauD1q12CizHfnSno2Fqkrro2JBD46GTv2WPopRt7cruRNCssMDaTigexV6g1ZCCHn9W",
  "key10": "5VnQ2YLRGsPpNqjVKm8caYxJKGa6zFHd4ngwAYzvcrgLzdLDXaB6mmMpDgudnDCaopvn5iKgTBs93mNMq4zbmLKE",
  "key11": "47u48NiTwoUr5GaQDXXrAXEf7pbzPLLoKt6MKGrQ8AxwrotDv5WXB2bQ8SaobuAaf5qiCv6DBMriFKVkykzK9d9S",
  "key12": "672jwboQN14ieHxLcBCpfLChL2L6E74fAXgAq9Mj8sXVv4uAWsyy53ww3XGHqraj1G5T3GpdaAqjKq72XssvnJPa",
  "key13": "4QLBgQb8nNZN7H2FbYLaaYj3oBPeCAAdyDJjFneR9QpL6S7GgctdY1mpbnLr2o96hJJdHY7QFoVar2MbSeSKkQRv",
  "key14": "2ZbNHtCFQQMPUyEemCAj1NULzEcX55bLfGhphkZJaYFMofbH9s7FiPHe4qcKWEi87Bk5SPJhgvT1MwGXadkSc68s",
  "key15": "4YvbiVVkvSVrTd5VWKT9A4fRMgp4nZjG3asfJg2D3KFqanNxrFbD5pZYTc46yPXzG9dpZVwthvZ7Umay7cEkjPr4",
  "key16": "4gHjrQSQ89FGKfyarDtzUnbwe13JTwLxsDiRPp78qVgrs8v4wMiK6bMf3NMVKV8k46SpAdC6nu4XQE78TC1bpt3J",
  "key17": "458b6o5zi3UjmSD17hLJbT6mcptXbPAJjzPxQt3SGULSwPkhDnHzV1GAQ6UHSVYDAMhmJ56T9UJR2hiQmzAzwgxY",
  "key18": "2nGQTJCuUQZviB45WyQFjh7gpGzasqoCris4YcbrQqabYf4GNdTU1NdCRXEDoiPMLuHFa7HLmXdqciEi7qqmumnE",
  "key19": "5m9kSNEKYgnx1gJZVowZR3T8pVr7LdjyEDbrVETtik9oaam1hws6gZDneC6YfkvHFugZiuZ9dimvkurnqM2Wy8Qm",
  "key20": "5kn2naHY2FDq452sKmSA69RBF1NAf1BJXRgqgtXoYicfUWBjAhLQnvRzMk4XPZQMfDaWPEVVZdKwBp5JydaiyVyK",
  "key21": "2YXyRhfBPBhQueVGYPuGugQkTAjoDZ2JEz4zfZrTCaLEbkmh2nqE1HbQFGdgbAvtePEGrRyQBRsWBp3YvTjCUbi2",
  "key22": "546gQPVcTJPMRCjDy9qWPMD8gPyvVDBD8beBpCBFLfB5fbsLijXXLkAZ4aeafoDe7mDd3Lk3Tadi47SwgPtEMZW",
  "key23": "UEn6vcmtCfXmYMGY489nSRf8LAoVnWMDiC8oBeYw6nfszMwBiAT6bGnCta2zzSQQwVbVirDDZHBBFoJA7t1cZ3c",
  "key24": "21xerZWWmiC5AvBtBvxE7iboxKsfisSiCY4inwVLraKu9onyFFe4Ye42ULCuamMHzwV9gsvR5hZ2US2CtCDCjMyd",
  "key25": "WoCVpwHvZjmheHYgMyyu2PSfZgCwW1B2qaWVwPxjBTLxENi6w5cYGKeneHe658uXEVdewAK5RxJXSpbnhxzr5c9",
  "key26": "4mCwAyo9VfXbX2fogGbTDzBdb4eHD9CaiiccjJKsKttSSniqBKcMmNJHjLhqXfN9MZmwu1zVfhqMEQ1T9Y7rXfYp",
  "key27": "3pyBjEaGJKcjYF3xCXC6Hi1WMFxzXeFNpZw3Cfj186sDKbudJCVaENVa7PAMWzqu8rF1g1pTmo2dK8tj6qWWwFWH",
  "key28": "3tEXrVjQs5XsSHeoVwZvkqdF8NR6bDhivA5pZBvu9hSh1PmQtumPKf9qFMVRCJopwYsf2ofXobEgxe13pgZMBvrY",
  "key29": "3YQYfZDL8zeYu9ZmiJVPntn2Q2wBhj3DRghQTXScPztxYTbM7NestyDN1dd3SW7XrtygqYPmXrA8yDKQARJvTLts",
  "key30": "5aawuBXTLKRPmS72ZZSvyReNVis5fhg5s3t4c6f3yTtobkeaaNRc7HTBU8asBgVivn4QwCz6wUC5ZHad3c5b8yxh",
  "key31": "3bWFXzsML3sao7hxopTMb6dGEWPnS9EUKErR18YLBeAJhXV8Mc35n5bPNfVmGrLJxLqhHUyiCwCrUUVggD6SyCom",
  "key32": "3DFw3JW7SEof9gqN4p2tYtVZuNcovLjoFGSSVba2zzRdR32woCuPH3Ty9nNeyKy9ck8S5w6dDFXn9VndnTuLUKxJ",
  "key33": "3es1DpPiUgdJxW9R8DLCHeAmKkLSE6gK53J7oApmeAuxo6ahKTkxvwrJFQ5RyRqc5B31jTdDLnbxwRGQMjKthFB1",
  "key34": "5eMERmdzSpr4MQHV66jDsdYmpW4bHsAeNqchnX65FfXA8t5EB2kgTd1H6MDmnNzUtpmzL1JSp7odQJfekmdfAPh6",
  "key35": "5dAjEkbCnDwhMxeASFCaKLkizdu6kS8d41UcXYvpBE4m4nRpsoVe4tV5gdKr3zmeaxN5b1udgtFPwhmQHQBdL9oB",
  "key36": "4m9Qs73p7W3E21T56Bu41cResjCHn1nKiNmfZUvCy8SFQYdb19R2KYgFYLcDpozfXpSqtEV4z8CzDi3H2k7xX2AZ"
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

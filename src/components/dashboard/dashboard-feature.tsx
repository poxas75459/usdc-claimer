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
    "51PoYiPJcveZ3H3fC4KWLc1coca8Z9nYKSUNHMBGNcGiwLGe2vcQ92PYkVCJMuVJdsnb7BnMr2HWCRMmk2wDG74R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sYYAHzh4sUSt2yWoZnFjbDW7vvGmY4tRVmUkfnYjATG86Nce4T61Jmcd7eSYFUXv8mwibjBtSV9Y7sSzXHLGxX8",
  "key1": "4kjN8dr8SWHKVdAuqWQb1YusdDUSmyoCH85CjNUfT6iVttuwJMcZ6ZHv9DAv2usnwJ6iLDyjZPtCGMNZC2hcQUy2",
  "key2": "3wqkF1iCmQPMVh7biZyCbnLs1uuPM7YbPmmnkzDgZBV2S7j53gpFzHLhiUFBNgmyxaKLzuKp24jZUU1354dDu7v9",
  "key3": "33vNuAboGtd8KHttRtyfg3oS92DkTtkZk6YXzpczvZ66fEMVCugWL7RuAQHYvQrU7kizshhqCv2LHTt5VXVWSB3y",
  "key4": "55xMxtNiP83KLT4Q5MrwT54woeAy4T6BpjESJEjJehpNPdhUQnrNWE2hLeKtcCbd8RDrNuKESfohacZjAqFgzQaA",
  "key5": "35FRtp7rmJGQNxn3BVrDggeareq6tXRjrxfZrSiPyPS33yx6zBb7s8VQT7wVgtMTyFdbouqsXfK6ya38D7fdeYzw",
  "key6": "QaqSwuypLywYxXE3fR9s2bW2tKo9qCAWHd5u7tg9JiTXUmTR7NVgc1RWED3jAdXYp43x5rrjMaTgh3DVQK4nQxR",
  "key7": "3q4qtHucdnPf5jUwPUcWBRzNC2bL1HFkpcYEBtFjLXnfHRwFmFHZ2L7dpeW1MnxiKidNED3vB7tUGvVHbmSZQPy9",
  "key8": "27D7QNoKoF28CyoSWYmDqftZ9NLFS3kw189qYFU38Fp7zXX8WznzAFbqo6bjek15rr2wYo8bgV5D9ed2yEaTCMjT",
  "key9": "5ngdSq5jrVwXSSrTQqtDDpPm97wRUf7htsHMewxYiXyfLG4pqyrP4xanMG3cQKRUW4zyep2n2BaPDGv6WhBa1iXP",
  "key10": "3T5eLAyUiEp1JPmDV4mXioRspC4sDYzWtrn7m3LRV5m1zXZrYvgshyhJg6jVj31WCvfLnxWqV5Q5VUdyX7UVRyXU",
  "key11": "64xWp7EJgtPfhjNBT1kUKRnayeua8JbemwTc6NAJQ8wapdMa8gWo1kK19YMzgT6rdnyL6qyJF1Cb4Y9jATQNe61c",
  "key12": "5ZJhk2LjUgbpEzY1PiX18KXLN3VwU5uVKoaGp7a1D595WVBrFif7Pu7aePFXwqxdFCfso4gBTQ5GumAKUxxF8TFN",
  "key13": "FuESGZkX4a55KbqH46N4FEcbyitoHWeEWZSyNsEo7UERGLFgvv9LkvDnG38JYChMd4N5C3AndoKnC8bFNoUhnSF",
  "key14": "2Sp6259QraqAgSzAfD8WCJ5pjCZxZCC83DeorGBqsYd9x5fNeLcxXfNsQeo25EYVJ7kvwyY3pqR36nekS5o9JmhG",
  "key15": "2DNjX7CcqZasW4LZSxu9VyhvYEGFsLhoTsEvABYdNSyuDhfVB3ABTWZ8JCgb16PLFdMeG7iK6YPJxTRfYzhxVak4",
  "key16": "4WRNdqT7KpnBCYdzeETQAEKsbpxSXNNpXb8nHK9DLtxoiQY9oWg8ePYfHnLbxrAUnjheeBF5pVpd2kDCJN1CQ2WY",
  "key17": "2Rt9Z6YtyqE2BSDfv4JtbWihdsXrAaLjvaF7PQn5dZRf77sSjkqVYcsPDnHb1FEp8VNfCNTVfNEu84ptkz5H4756",
  "key18": "afWP9tqFcRBnKDTKe6pa4R1U7oSPfZoBow3AZQSYNmdyfHrLaDQbRhHPJyv1b1NHfeA3uyWLDwrwmwPBGCEVzck",
  "key19": "5VM3ofmMpwqvaianZZk2RRY5QoQ1KchVbB2vqALrfKpPNNYHhF7p86Yck8Ft2UWE4A3gCj67qJCT9a3ZsTrifHAy",
  "key20": "5VX5Mjmy9qeUZjw1435iQ18HpviXT8WkPHmrtz2FdEMAoWFkkfRzzSEN9ArZk4QSMBmhzFCG7yv73roPwH5zLpXh",
  "key21": "2LckECLjJ3Wh17LyGST4RMN9sNo4yhkhJAP9kTbMj27SqUY8gJt9Rckzi2EWRqSV4dwG1xwV1hQWAcj3W4ybPyQQ",
  "key22": "4skkxdS7LtpvTj3DdCndXT9DtBMhMxfemEnEVRnTxmpBxpB4YP6kmpT6WrJqSSEFBNobBTdnm4NeEcfASummiVKN",
  "key23": "3ZgEnkm2cTcUnf5MAcYxD7PpgEWFwnnLDUtnQ8oDZAc93La7fsjoiJpzGWquCCFmdAX47X4ayzU6eKV1F6hFGbPg",
  "key24": "5GnQB7jfw42PdBSuuz6dLbDh8ZE3Ly5fc16R8YUuqi7upjgmBQfjwE86u5Dbm1E14MebyH6cbvg5tcYL9Cq4eqUL",
  "key25": "2yaJR9GjCG6diYfKFAHxNnQpGMisAqnjjYZBsJNPRVr9BD73c3xh7sthT1PAvJaXfdhHgtoEcPNJ59XXyu2fH2Qu",
  "key26": "3og2u439eKvZULCuJfsppEQGix5CFKyMNmtj3ZUN2cSKEtRYfSSMNaPmztS7iaoA5qwYyjtkBhZ8cTyypxpPcni2",
  "key27": "57Nk7SoqkvNqJy9HnafHxtEVZyJbJbz7raCx5yYjB9SwUPGs5woxw8LZzmZUFZfeTH2saEJekFiuCdo3jCqQDgV5",
  "key28": "pAtJWekgYpH25CQw7oPv6YqQruhqbX49DPvMoSuoc6xZMLfbmg7hC8AiTt4y1U8XL5R14NGqeZXHvs6kLEZcV85",
  "key29": "UCC42DNUDVQBcKPwYGKbHarPDUZWT3DKXvmg3caEwQbRuxpUiFmaDJq5RPpn6xsGsyER1r6BPBkRPwvsPvrro1r",
  "key30": "3TSyRza7HShVqDVr2eWPaXsHXwLb1S7VtiSTefDv9jysvtGnjsqpsLabMMeazAF37PVRiF4tBifD9vxFJWDjaZnr",
  "key31": "2tAwYypscCeN6w6UdE5dXbZKayDdXaJTcxvc9jufKUDB2rv6Yf6MHnf5PRfujLHEP1eFoJUzGLUkadpNK8snNf7Y",
  "key32": "4EFeBJ2MxQGReyvqpHDhoCYAErCWURRFwYR3W8WSGxRk6P5N8EoXUNfYpFY8pAqk5MSNGjq16wcZvX8TB2GLLskb",
  "key33": "N7kj2ZQCaN1p8gHENChG5rpzrWAJvc6ZD3k6ji3zaoZotBrjhxBE3H68C9UpzUYbgMxVan56cDnzb9wXW9kmvBo",
  "key34": "2K5pt52X1wQiG2X8wnCyfztaK47AocAo2nSxAGmBYcZZSmvsGvAb99HxzMnfY3545oRt4AF9tjk5Y8Pq6RcCHBfo",
  "key35": "4MKugUayCMasfXudukyhfSTDoErrpov8zrCm2hw15GzjyzYj6nUpGBN7eyY3AZJyYB2s63Ef2mPfhjsr9cp5JNda",
  "key36": "3Q98yKuGVi8b27rFsJJKsiSygr8oGFuMp6A2RFvoT8QEg8cqWLzPDP8ZYkGyMc6uEVUHNcKRPNqsUFD3tymVRNQo",
  "key37": "5X1mZgp2J6rotELDC6DdQd1KdYVUhN6f8JixuXRMmvW61t9Kxtm94EU2gT3J5rtEVMMuWFNNt2xy1JA96h2N7aQ2"
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

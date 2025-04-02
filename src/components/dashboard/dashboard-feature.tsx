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
    "4vYiS2nuvJFiD53Qohbp19fsifXa2fYajFswCdNK9BuCx9HzCcEWitLfiqCk2S1QvwyvUsaeShA9asXwHGQxehiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Az6MpALoafeZQRYDVg7HVDTXvCmtLz7BkR9PDqAsLT9QmwrYUoPUA1c4jkprQvGM2RcrMEkQ3MHbK1mq4ydkKZX",
  "key1": "2qbCK5NhEf8dUNhde8FFotRhMfg7f9umHMWaS1yU8Ur7Hy8AS36zggERHDuoXi6MmKYWMzubH3XpY3aSSp184TUU",
  "key2": "5GoXD5zRVLaMn1mjprQkrUR2YjhVdUJDQ2dp9uc1sgBLgiBZCRhiAgF9u9NvwKyttxYrCwEFizZSgPZWwfkVbKEV",
  "key3": "3Bq4VpXRfBnGdMtpZQuS5ya9bS8cFYQewXNRUvD8qLuM6euzLdCqsqSD4kZnR8XodjVgnFnAb6qg3zbfcZeHwhrd",
  "key4": "usWTq1NzUrnCxgLJiEa4CwhYPvVYXCHY7cpDcqvtaZMTqhHhG1UyjYf4PgDr3LbqcyTiRCeALWoHb5PoWNQBXRR",
  "key5": "2DFEEJRs82vE7FEUv3LimbfWGjnsSip24Y76bANjwx3dsivqpsKCSYLqG4TcsJbkgrdsLwUDSyemph9dTisLmpK8",
  "key6": "2TfKUn6e9FgQJki8HHhvW5nq95Rvfsm2uwdoi2wCxjWrR2uKKqqnzHPrMPcjowRhYNTyPyWCKktbxaeyhQXZ2H2J",
  "key7": "4VuEFtcfurxtD67o46X8j1wJvoXW5BPQPmFfEXojF468Kpw49Bfw8uEvJPBA3RsJG4kP7FRkqm22g4VGLPvJUkQA",
  "key8": "4W7nGcbsL1AsCbf1qWNw1rCEfJHNZmpBsAqB1CJ8eCjNMFdnxooUw7akXn89hdxaRupLTE7zAsmEDS7A3pjMCtRU",
  "key9": "5x1QNuWUFP69KPaM6YmSZKHNvQJn6NXkyLcnfYNeyk73kfuTtMLSqriDXvXXCXrMkrRkkv3kkBbdXhGa9YjmEtXr",
  "key10": "5jqpkorYaRue8PZuKXuDDa47joBnnuQrFF6EjUVGMKQGfpqZaxnSjH9hKiKs6k1KjoanUgfkbS6cTKtRLFXTAzFA",
  "key11": "5KjB8A8ccQGqTMgK6aq4KT73PVhMdJTdiyNFEiECPmATyC89g3uFkyv6i2pin7sWTFxwjoSY76pPo6s2Jt8naeFU",
  "key12": "3tp4q6YRDrxFMKicXPuM5tTgYG6WiccgtjPdXoPtBntZuwpomKDuvZoQxvbitgg7A5ZT3DhpQz5Rspz5ozxbSkQw",
  "key13": "it7FLZrCLQ1SSebCsCn7RSRPsR84ZcwkceLM6h4rzKzZCm2VHFx4oB59FQkxT6b6vZbWaCW5GZNbjSMXKAsmDwu",
  "key14": "2dheaxt4mu26rrVBXzdHEuyHyC4Lktu52d5B3e7whot2S3gQ7BFp26QmyeR1RmmUBUtKPUQjvhLudSdRzP1smybX",
  "key15": "4DdsiXJc2umBqRUWqTay6pKsykTUynCqiBTYdFiyeVo16jLCYJSWkkciwNrqfEoH2xx6mmEaEV1pZfp49TtGfAX8",
  "key16": "5g9im5xTeApxixkCp7NB9V5XnNoeb1umVqnGZKAAt8aDBKy5ZPQXShnrwHhMdmpnCucew8zvx2MHxM8ziEqfTNzA",
  "key17": "3RYLrBoe9nnhtT4kX81kPsjAafv1PY396HDMT5RRj7dGEJvbPyMTjzJjHfgSVeTgtPqhQiibptJDm81xsgDWcvFz",
  "key18": "5zKaPMTwoWbLGaKVQ4NGX7XLTDM5KHEdMNJ2Ms97xU3ao4jspzHwvakEFj82c2QV1sJtyv9FaYES8J5GGrXh9y5S",
  "key19": "4ufoLT9x5vWSKYXKRgAcefibnadKFokqtq7kwZEsdqEHyyuGHPigeTEyVAY9UWMsWFX4edjdnbfqGMLFtPdnfCfy",
  "key20": "26ceq5uuLUK1QGCzNenH9utMboPYLdDaB2Ek9VQone3TNmyv6V5SCXugpeEsoEH6LN7XDB6cb3pwKZAGXZNc6zGc",
  "key21": "3JMXFwwtLBzZwN6FovN1iDcMZ8rrPx21v48Xv66jMfQeQQqF19EvCQQq3GuRdm7QXefar43kLejEewB9ym7Ju8E7",
  "key22": "b6y4PNiEnHJ7q2MNyEEx5uybz9M65eV4S6SR7h4AYDroUcGfxL2Azx9JM1L88kLb1ExDoDSXQvxzunouth8CbZr",
  "key23": "5SHRw1UWNpj2RjzFkGMBpLNHcNt31rNBSbd2PX2an9uTFwrvfZLeD4qJ2fPg6TXLBtbQiG1zjpqiZzkg1MhfA8w2",
  "key24": "5pWCGB3SwQMvbjkxpoKowqcBwoitXgUSmJDDFXLHZtZYec7ncrsB6oaR9wbGBUxMB63d6Ebd1bQrhx64J7ShKMfF",
  "key25": "59ya4AmWCqHWyZeznhSCBmH9PvWdrMM7yEd3vSDhahTyo86cwkJRm1ZiG5mKuVhChc3f4PTKaVhn25koJXGp7p3x",
  "key26": "WGQoTY5zenAJEDEVNVXAtCbDYhyYK4LaxNctsWdW2tLbsSv7GcezpvLpxPRtQzkzmjBegiQ16EUADNXwBPpsaZV",
  "key27": "4yJAGqb6ZA9LDkjBSmgqmfAToEXX8Kx5WJHriZJaf3wGhEKVCTRx6wapXNaomMfCPV61oGSXf2wCjVVxYyv6GBqN",
  "key28": "Eyx2HF1S1t6wB8xGoxEP1FxNczkuopzEYCuX9HuJNwtTy1yiToKA7HKvYeD6g5zDatUUf6zVJBN2sdQbLcvhPiV",
  "key29": "22VaZT5r2Ud5kjhPScxPjjJNVetP3Sactwx4LFD1JmjRiiYXqAS4Nydf1quU5d5swbHxm1UdAGXTJ4aYYgUBGezT",
  "key30": "2tMWNWNtr3Xj7dKKkGdmHBDZmrjCGEG1ZYaVmWrf2UuntMX33DbgGtuH84CCssNSZAh4wcjR6k5eFfctM7vsnXFd",
  "key31": "PwqWhVrS7TzD84KuD5KEeXpSPMfgAuc8BAwHj87mH1TYRyfzihdK7SZtsPaPwGAxATspC59kjmvQvaPK1y7KftW",
  "key32": "234N6v4fF1jnGJ7UL5bvi57rE63LB5rtUPM9AdSmcAy5Fd5H4pGHiPrEq2bxSnpxNFWBZytfw73FDuTzJNgKPYM3"
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

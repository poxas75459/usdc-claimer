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
    "3e7TQaVS5XtuzhQe96yMPJFVSn2rjVux1WixxYG19AHNdm53P135g3c92y4Ro4N3iwnt6HJJv6ujije1KPryR5e6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8NP7K34Ggkwx6779LzK9grLGbsuM2XtLLDwdHvSMngNibA6hZyLLVuFdnPqMgSZsVCKKuPEaqdoEMrYi8Bs3Cgm",
  "key1": "3Kbn1vkmYoD95bSCRYyujjjxBfLNvfADT5mCfJQDwT4A71E5BsYhHFa4RC73Vub9eNMboxbwkRwBXtjXVSopmvh1",
  "key2": "31ZYWW9u75trGzmBsN5pkD89M1gzK9vJSHZCdt1scogSVL7aaVoy7RUMT9XZBKs9byJ8Tke9Ep8MKe4xxWDdj9Yk",
  "key3": "5Xm3qpt3qc4F5rUkxhwc79ugAt6iqVws1oJMBtoBJzddKz6R6JbquPY2BycCsLYq6R8cXqTmbdQME1B1eb9c2k9Z",
  "key4": "cSZpZhZRV7QpESuQfziW9UChMBKR4AxqC4WeLxJbUPQC8gkrZUCGTyPHyZXnpWnh6anTJqV6u8JfPP6uSjWaxMx",
  "key5": "3DDAZSeqyMt296p5sPps6NZyaEgzgjbSn5kZDNqiyRMThAEcJPYW7wxTX71PadFEgV3XdpdoPy7EjMPK7UpCnsVf",
  "key6": "5X9SRQJUfNE4HNhnAttgBunjXeWHYqoXh3JxvkVL5QnWVv1xYTdVTYDre6dgMXm1kiWQZetKts7jDheCCiXZeSHF",
  "key7": "3UCgMtbcmwnmggPdtvuewRzory2m5uWH1iAkbshyESEYuLxpqNw3TRUiK3BD7hDp9uNcYvCSNrfr8KAwAJA1v7EC",
  "key8": "sQJLcJ6ZbY8tt3LDKTkqEd3bw7qRtZfBKB2sew2pX3x3pGmf2hNxUL2aPqBhZmqyDiMd4s7jmDqsu4EdHtBG2AZ",
  "key9": "4Noz3oJ7jUqb1PzabBpoJoMiL99w1vtiZa6zYqEn3diXhRS8oZ3qevsaNoVopYuPtbjcfPbTVdeC6tfGo2ZSNowZ",
  "key10": "3CBzm15BgQqYNWJvmcpGBzeoBVoGPEzAUhFwubyCo679gU5kMCVfvjwqdDgBfXU1p1VM2FP228TmJRYyp7WeYNNy",
  "key11": "TNFczk1H4jEua8XSeH4WwtmMts6uox2btR8C3jB6BcbwTnfABVwAY3r17Gf3SvaG68ETwJhqLV4msZ49qqFNMtG",
  "key12": "5RJPvzijhAGJ1HdhyY2kgAjfh8LbM61eRRiQMKnxoyDkStfG3cYBkjkkMCkNKEcmirwymSoX9Liqn3Wp18UeHvQT",
  "key13": "3oLyCWRnBdTg1UoK15CywDBQdbZPHEGn6FmLCets1UzhEZxsPSvRr44auxsyzyZGDj8VLLKKr2BZWSazF44FoD5H",
  "key14": "3QQRgb8Ni7AQHFyimULik3RNvpz9e5CUGGRSERrgFDxj5WhquiN17pbMRXqCjYVJjBDPDsVUdLdJy6U1K6S43THq",
  "key15": "UKPkM4zoji6RTFHsBS5iNyqVwnhWscvvxe5GrhrYYxhG36XSxhWgwUEFmJTY82i1gjG2SWmhBkbjPezgTiNfM8u",
  "key16": "2pE7GFcvW9zsSHeqLyGQeDJ4fpwAhTgPyyZC3V5acQRXguwgbiujgqnBxMmMQL4P2g5RKVMRBNG2D1Suc5gMHmnm",
  "key17": "4patNxxDjVVVEmkpMJu2WKwxqg4HYdcwJcxGbJjYMJkEbNi53W8LnDarhPUgJ52KymFUi6ZCr8oVCTzAyXz6Xhfd",
  "key18": "4xxEZw1vjbVrs4KxpFbuXYpfugr3ZrTUTjydmm2fNdRXjHxfohRjMx2qy6WvVauNzpsvejcjRTX2t7UX4obPthep",
  "key19": "5Yb38m47t41stZN9gfeR6rumeNp6yHx3L61u6PWRdHgCKyWLBdBQaN9bfSSzVYrUQkVvqhr7RiWShebvV21b9j1s",
  "key20": "21HQXnwDWy7Qs6sUHzYMS8E3kRkBVt8WL6cTHguGe5PKQcT6XzRk8DWJYwsvYTdEWVo3dDyFZ1bP7vm34jet9Hww",
  "key21": "maEdHdxxjLwzm22BiZ3DT1wVYiRYqpoTmQZTGdG3nS3dH6QzKzqNRBoqTsHUa2X2JGQFvFAsFnrzFaHdPacc7L2",
  "key22": "5f5XuZweKGc5ZAxsRs8iCRDoWN5osGXZAZFUbXbmU7uGWWcTr4erbwfdt3Tk8jeFUYngCBwKK8k33QHjL8VoP4XR",
  "key23": "1EWTLdLGK43SS9j1LZmxRJsuXsax24LgLvZon4ygpcyHRuNPN5mpEJRPsZG5cUWNzQHQRVJPE6pHiDyoMYXzBka",
  "key24": "2rYPSTceFJ3o8Zz3M1wCUQD3Aeo2N5mmptyVmAbFKvoKXhA9DiSYPJrM6m8U32B2Jj1mng42ABoPbqys3UPw3Un",
  "key25": "WEP5UxyBp1qbBxhkp6ZYReqmjZU8fg8WRsX6MkXwoEgheG54r3dmJVNUBPZQj65NkPZUeXRJBrmhCBAhW9epcRv",
  "key26": "61Te1DthNxBq9QL3N58b6hCxa2hFTBM9NCZpsfMQ8yKK1PiBP1XooMdgjoHLz38C79tM4139ABKdvYNGbCYZBzYG",
  "key27": "5gKsvGSPm1xBtzX2KWGCkaKbpnzVhQkzxd6PDiHF4ix4CWKCFmFJuxuGpD2NZM6hLKPNEYtmLPMb7vkx7hMfLn3Q",
  "key28": "2TcRzVfmhzvZ5CGpSZW23hmHqYBLScgWaLV2yEf6P8CT5VWqnaGo2V2yXKhscdcXyx9C22MfxC23Tr59bzEB8mgU",
  "key29": "4ifVFQmxeW5USa4GuKFLkWxf2G1KCaR1tWrahi4zxyhjMMPwXfKJ88C353FoSdKoSzH94jkX8dBbLnDZCJtYbkEu",
  "key30": "4fihBEwNNcNxHKDnxfo6KCn7Sw7zuFUbK7UFWtB9QndyrzJF93w7ZhZGepWNZQkUCQr5W4EKinsmxtfbHh4YutHp"
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

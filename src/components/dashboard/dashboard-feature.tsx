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
    "5XU54fBQk9xQ7KeRX5TrcodthouDnESxwjymAJkoNfPSRAGK92ZhgAY2KRtXNKeyG8UmfnCJuciSxoS3SvEQ4KBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sQodAhti9mZivW1EYj5xb6sHy7rnbh3fcmBH8s5w5nJagPbAVHiRr7FdXjUxKKnxmCm8sK2w6wxnq8HY5V2nqBS",
  "key1": "5t5uZfgQfnD5wDQm7ecsgCuMAL1J3gTo66RY9cSTxt4AKguh4B6mHp4FmbCvixhfxuyJehDf1zj8PhNaR21f2XJH",
  "key2": "54HiGekE8rdP4zrWLSsWue5gWESfbwmAQjwdDF9YnU9XaxwGDVLRKoYJe7VdKG7TejrqHB5uB5SzGZwJTs5Qc5KC",
  "key3": "676hiejtmdAkmFiJg22MJ3yzWksUUYvt1ZtwV1DszuqZGqA6XNX7mdnGU52wS9y2yajkJ92oGw1vTb6Kx7gPNUzb",
  "key4": "5ENMZabovPMDVQQbZGokXPF9vWPC9DBkkGNd7Nx3Z7tmpU3qK3e5JXqzd1s1HLeSVdhHQqqkPwcdJ8wuqr2SFYu3",
  "key5": "fPWeSzudttRiYKdJWisA61fnDuytXAwLfPLUGrUhusx2Ep5sj2njY2EeCHz9EmLKMbCH4NLbRgzRNtWu9o2R6WN",
  "key6": "2vVN3b6EsaLLHQAU1L9xoZ2HUby2g61UPWwwrH7NGJ5z8h57xfhH2v8CcZT8A7fcSqujdFTzf4Mx6vzk4pHvT1MU",
  "key7": "4BpeybaSSesErq74bYwBUaz91eykdsydcyn1NnTAncUSwcxym83yMYGJfdsbzMVo4e4tL3f9bkNGvrdq3ZNTNVig",
  "key8": "5rZ9GBXZJmQkn4f6FTAmEc5yDJWMeHL73t1PEbFBF7hAnzDQ1jrWNGLULFppGE1G5bXeaqUCVx5ujwnJYbCNFhqJ",
  "key9": "2S7MRJyhcX8DocxDr7ePZJPUSxJoe9x1sDFuaJmwFv6ffxVUDALi19yEz7g4rRp9RbmaXhe4Z448vpwL6mGqJDdD",
  "key10": "56sNassibR2kvxDPg7tu1mB165TVPcaVF4H8ieK19375KPiS3XFTz77q5xYgBTNor4Djmdo1kSZm6Wt3WCqPWeNe",
  "key11": "yatU4aCoqb3MtNen232D9rViNTfZnALjrnR5DZSP3Z9qxBEF7iyR9ZojoxqjhZF7GRoP3B4By4YjJPtrYdJ56JE",
  "key12": "34XNug1JfNig8CBBAKyzqB4karMa6p9Dq8b4wjJn6KwUQeFeN7vQwqXFxp24anxbTbwKRkRRxHq1AUWKfmfUpWay",
  "key13": "4zC61Zy8ZH5WjB729BKufdUarK2PUcnReoJKZW6oTvcZAG8iq91aR9748n9QXn14imKnTzg26LHAi15FSpZd3PgT",
  "key14": "4NGtKSQYZ6ULcaYwVmvvS4Nx3Q8RiGVaonM1zyj93g8GSDtmDMQXqMbdraL9ZThwxGqgTMkFVwMwS5thvqL49bDT",
  "key15": "65Ft98bv6shgW2cC5B2EviM8ZRZR9A9UN1rSyQzBagMrn8eMDXDHvSLgKNLZxh7ybMMTEApurE7eWf7ptcPfVczT",
  "key16": "5TRhXRUeQ7up9u1xuqTrJLHQQRzDUt6tcz57YksonqpRkAKxV8pcb2QbHPP1mqfvB6F3DSSq5dJYnfJyd51NnCNp",
  "key17": "2AYYa4PwNFWvMvgLwFRkBZFh1WszZ5RovFxy3iCsBRGAonoubp5kfPDC5Usn3Ah3jovjifDB72887r78zAZ3Pj94",
  "key18": "3jdjqifjRrFnsp9NjD6iERouyWQdtyghRGF2vUc28M35FcnwmYjL2QzJ6qFWR9ZU2e8rpsNYKoZAfUZL1pMBody6",
  "key19": "2EXHXEPst1CH6PDapABQy2VuyYhUZ1fujW9WghnVdCA8MEjAX8LNYrhB7x4bSQQA8bhThVWLD1Nr4948h6Hd1Jis",
  "key20": "28KwJha3aig2FME4b8zD4MCF5D6Wz4oXmXWF1A5XrN3behRkgg9eEtprU4YjGhd3AYTXZTWzeVUCUVwJ7paMhAQN",
  "key21": "371jywoerPHMTBWurGFRSc66BdYFSEFwr5Ky3L5Ac7tLnFxKNysxDcuRxNvGYFXWYbpP6v16maYGagAeVHHiqvFH",
  "key22": "2uHPYr6PuX7WWbByvwyFNrvKetStxwz9pH4prgVt6KDxEQ7opz9CLp3HWtGxsiku6AEkRaQcSZN2CXrfFLWjuxSb",
  "key23": "2HoRGgzUN8o6BkD3dHjHKxmVuoGjEZAzjPTJJRAh3cAmf8GdvxirSGbyiF8z1U8oVX6DiKbzu15YCX4Ftc4XetAb",
  "key24": "1r1WtCxYVcLk6DX6QgS1NguswuXBZfStfzFdbVbJxgQ1iZM8kLuPSv8eBEvBv5WungFjsP8j9coh34b94cPvdSs",
  "key25": "3u2RqxvZ9z9C6Y7DPt8GWowzoGAyjCWMYjghGLqJdFdpTuAK19py2Hu7cpUyj4vKgmFTvSrd3RDtJ4sq67uLcnF9",
  "key26": "3ER92k16A26ZsdtSuBDeWEh47D11cd629M5EvDQYzX2N8ySp2C7YDUd7gAtX9qttPKWAZGZcynjT7f82ExvfsKaz",
  "key27": "261RBRmyTDcukA1pSHN8LWq6de2cwC7R6v6HWnieBcBgYmWvbgYSmY1H2QWk6pyrf4LbvMmPMUQgcnS5eSa3S16s",
  "key28": "247LKxS87zGyfePXWYEDtrkULYxxNAZNZmoRau3eXPCTa5XcoE5ekjFVtDu6sVNxeVZirwswuNSXCfA2Sg3vocbD",
  "key29": "3vKDYULpNJxmyJdLzrmEdwERSvM6sq4VBaCY9rqpZPkUg5KjmbTpc4q3GdFtaVcSPWLpavuu6MG6hHrT6nNBZmwq",
  "key30": "DMQeofC2iqMAkcCe9r4zN2Wxnj2PAZkiHbhN23f3xAS2yFyUba1J19zAXnMRNrUUE8fS5HkZ9PDGLreBvGBJgAp",
  "key31": "2MWbo6PtcUS3RnhLuMopUGpVYtH9wmJbpR9aRfjVdwJ6xtfvnMuoLFVux1Mqz5APvp5r38HVXuk4NqhD6JATPD88",
  "key32": "3Dm4rcvJ4Jrd5BxcLBXwZURME3ihK1oSHYqUzEb76CGSdmHiapgo64VEZNRpT2ihoMxFSZghhwdN8GDjVPSPpHGi",
  "key33": "4gSnxKCWQMWqqL3NPbC6DpbeFcUd2RNqnxPeiLE2R885PereCjQrz7c3PSyXu5hxCf7KxFPFigpyBAzih8eGzhHS"
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

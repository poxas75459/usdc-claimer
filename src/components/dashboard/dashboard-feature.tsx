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
    "224G7fAYoomntGsiG8evnbr57dXPQWyGJ6DcYGPSKaZQ2Wiw6KfemQUHXbr8NCqLXcMCi5iTtMagVE4VfB4TL63k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FSUqYDM2U7YEFu69fqhmTNaECvCsVaWFpC3puRu2KPy7JoUTNTyRkA6pqcqsyDGGQhwCfhy51iHyvU68RLzyjub",
  "key1": "kef3gz1Qu1CaVzMPRT9RE52gpg5pZSh4fCRy25FwtDsxGZ9gKWXmqxJmetiK379LKydVPYeQyVkvCBKr1wPSDdW",
  "key2": "4LFEgR4uAHbV95JjqZrjjpGTdCJSWfHhopViEpQb2yA3Ftn2ph4cmVLVwPz8yBrVZQ1WVPfLfbtega2bjrqAgM6K",
  "key3": "46qNcQgZEevBSJgCQPscrUskPmNUi4GFk8PnWCbrGFvq3NUq4BXTUWPMfkU8KYKsqJjaYq98QhQ94Gef5SqWpVCh",
  "key4": "3gvXTMNETgsDH5wACtw71nWSazuA8yMVNksvnkfEQBnnNJRGRJYHqSZphmpkWC7ErGn87jZ1inLWSa6HYP4z4iP",
  "key5": "QjDiaqxeCEFwFKbLGTo2TS1EdKeB5dEeLWxzy7ipxLj2EQbHS6CVfetN3mXHxF39deENyDT31aLJ6HPE9HYL1n6",
  "key6": "37ZbefCQTuyne69cdsqKbCoZ4cZ2Pw2u4fM4F1U9awcPTGeURbZEETEpjmpAAMH9XmE4VtDkGMbSm4oShWBi9BMm",
  "key7": "5EbbnYZ75N5rhk44qNChvpuzj2iXo262otcRvqNAdomTwewEqpeiWDe7rY9U4UAHxFGC7a6gGBKLrEVroGAR3XVd",
  "key8": "66caQepkMUyft1e12AG7JYGxRzfC5j91dzHpRSVttHib5vsi1a6sTs91peJC7s4Up94hhYapv9Ttek322fSrjfuK",
  "key9": "2D2t1qniANi4bx36JY6GooeP1rQtehJ7VDcyGtgEpPivwEpSHFrRTjft2FBTfZMRKgJLnyfemPxvcn33UKN1czGM",
  "key10": "4n6XM8iWifuKsYznKoPskdfpiN4GzxU6GzAcdWx3neSX27zpuRwy6JH9dSSjN2rpe6EXRcEorYuzrNCcjnXfaJGJ",
  "key11": "5jyEk9mjHwAHTRJ62pqZKGcNDxDiUwPiHVNuZaXJjTAxvk6dx76cxPMjFC8vHB74xeY78ALKhHXjk9yp5ribNpes",
  "key12": "46VxPT2SpTxn77wKYfUwcHDeApG99LaxwYZfiJDLaqDADSmdKmNHTH5iiZ31LpfGh81yCYT5uP5Q5wsxpoaWgE4B",
  "key13": "MVeFQLSJqZo3sj9bH57X24i3CGMgCzRsD7aHjQPESjq93Lcv3NpE2yiwKnU22x1xuD1fGqSHgSzqa86WxkK1h76",
  "key14": "4XVcfh7FMNyg1PqjzdmdnSk7Y1Y2SWvNhahCtEs4qn6ZhS9TyKPE3Ty5FP5ZxWsNe55dBjCnwwsHQZKbaVFAh3ZF",
  "key15": "HtM9yy74MdRPZJoms2Eb9VTMa8gkGkhSKHRtMJ2dBR79fm1cL3MWAHoFv8xBpBKUAJ6ayiubii1Zckh1zfg4XfL",
  "key16": "3ADmvTxMXjr89uDWUpkK9UTvuWb3ueUMYYFcvoGaAbotzq23Q6RGSrFjFAto9aby7hddb8Pr7xyNBt19eYzrVr6R",
  "key17": "s5kHFMqeNUcFK61kiZ3Cuje5M56QECPUJoPd92zvFbAX3YLREJsnyMLnarDcfqhD4xAHDjVhQKLpqbJMbQpkTSg",
  "key18": "5cDPQE5Ux2fa9k2yM4ATc8ar52kC6N843kDfuB96XHHqe4421G3qPAAJpFGHFBGQYgcxWvFGbdxpHPMaEHPVSGrC",
  "key19": "2JKAbCadrnCvgwoyqekin5cbvzKcovzec5Y42DykqrYkw3noSBqWsjJwtni4T2m7C7XCGd26azuPndkUVszD6CZE",
  "key20": "kT4vf9J8dTPbMeHbErZBedwBCuFKLFCreAEQyeN9eg3SrXShKS71zjxUSLPUk5Afc3krpXbHxndPeqhQLv8XeG2",
  "key21": "2S9nMMR3YRGF6ZW9osnf7zZ8bMUWMngfKVvXCFFBbRqQpxjpSx7iZKsrSdXqX2A61AEZZ2MuMS6rQThMKrSRR8Qg",
  "key22": "3otkUMxpX4ogyZ789bB2HQ574b385v4Dn2zDkgU3x7YfjDDV7WdGg2WKUZGJYBzcrcUzakaH91nSYFzpHDoXHhw7",
  "key23": "6754rPFCJmYbkiST72d9JyoRpGYGBd1un7yvC5uf8B2y7UxFP4sAGwhL1BTsdU6uzk9udhcJvvERQaJJQV79yhz7",
  "key24": "NqetAmkHRbDpcnGWFQxi8et8ShcfuHqQQZPE3EK1gbhrwhx7ZGmpLC4CqMq18zHovnAeX9YHkQ114CxtvzGGF79"
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

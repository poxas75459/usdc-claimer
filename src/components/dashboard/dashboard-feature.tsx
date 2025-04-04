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
    "4gAPaxd1MQffNKnHcTVUHg9pKT5VBHS44Di8NNGNt4xjfnY2fRhQrm732pa5Ur6KmQpFRi6cRrPaBk3p2gskkCSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VsXmzFB2sirBpKBF2cUSMuCfhxfEoyQdZiERwK2bdv37ZDqgeKPoNnFoJZbTMZ6BWutR4ApyLghtk7kxX7wd7aJ",
  "key1": "WKt7t7MfUpYXv7MBoL8fiqiYJ8WvDYiCZk9jVPV5pWQBqdrosyYgHb2PM6c5TAGRgHy1PD3PCKhH3JH5mMfCL86",
  "key2": "5zMWtjj1CfusoAEuAjMLThaKGj4HG4HmNSW9sSKXcAAtiRLaVpRzuoL8NNNchgYECWc96cTcE1Cr4gQeGveRnM1k",
  "key3": "2kKuycUzLwN7rTnZa7uo29yFcVZ5ZcuxC7jUaMe1raHetD2xemSTvKT9AqjrV5WcXLCbNtSyzhkUdGtpvKD5HFJQ",
  "key4": "2DFaHrSgVBHZ48e2apCugDpLqDw9aXwEnzGWWB4R5DsYtwpSy9mYHwqZmWF1we5syKjcfbPbpGDz7MvmPdweGw8M",
  "key5": "33sbbENtPrGyAvPFyFU3Uc8XvfRstNWHJd2PL96SvsjbL636NzGCmXUjDf5v1ux2XcMiRGXDUTXUuiq1tiL9E4vp",
  "key6": "3c8Nr6uektsFdEvwexKdEtTVqsoSC2FWU6qakEUKh6AJzZ9X33NUT8LkaqLGEaTkZ4q1kXwinTNLLfVsudKVNb5n",
  "key7": "3pfvZfxfr8Hy5dFuHLJ5dZvCptUzozVWgXL17Xs6LYJGdWFvVzphG5NT3psw3Aie35fVzrhCprcYptHdKrci8MeU",
  "key8": "3YvCpoPdHr9mpoFisVxg6Passtavbv65WwpBKgCpkqFM6GjHkBUHtMydqCcHusWc6dxDSExKVbjy4zrVFzG6xQ8W",
  "key9": "658hHiApXB2XeTLohdV9He1d3pbfkSXwWoRRmLV5LxHEVV1ChyBKT5pLZ2Q6Lc9ijDs78beWwpCToMHGYa4s8dvo",
  "key10": "5UC4i61XEBFPqxWQV2GkVch4wpks6nWkJYAECt51UbfvfoxJv5QZHFUFZZC2q2jHJSKsrxatoPaeSfUhb6TXQyBF",
  "key11": "4QsHh9hV9Kc1ESyP9bo3T8AjjQAzh5gN59q1HrmSnjBqwZP8A55BjGtdhBur73sx3m7rkLJcxKuG3pF3uKEYna9W",
  "key12": "5i2QvVvZrgUVJBTv59i1SCNNqD7oYTjbvnNdz5n7Md2N13DGxo2kYMVFhKPPjveMLcxzUhF95kDMXrHV8f34hQyw",
  "key13": "2L4ftAiAkneYE1YXxWtqzYzxehzoQGRtWH5oM6pEzpePiv2R1KAKEHuoVqozWJyTxTNrLjeX1EtNyEaKt281usRX",
  "key14": "58yyUfhQWmiEVz4a83QHPAq2XzFk422xArLNZ7e7oeRJpTBz2SHHk93LCj54ALKyADZ8y1XAXLqBxk6Ehm4dq7id",
  "key15": "3uGcojTMauvLiTFCx3uKhh8A1ZVHkUYS5nh8Uu27URfexcnEVLbdZBb9xrNovTeziSwTVpYTjzToMVVRCdURQNmo",
  "key16": "5RUXc6zLWa5BLbWTkc39X9XEbr7cjvktTc5p1eWpiAJK1kGrWP8MaXJR2CQYJui6b96pSk3psR3QPqfUpd6dtrBe",
  "key17": "57Dr4Woat9FECgCGQ4c4VRXRWAp1GFbjXmT84gmpe43D7ZyWoPzLamvpT9EELHsAw5k4vRqCT7Xvy6wnZzNyKLu2",
  "key18": "3zyPKCSoXqHS7FjQYxVwmT71PDYT9unfpnnCZWMWHEwLBACmd7uLxTnPQsXd9YPp1DiHmaQoZyjFFWnYwNjSKH2v",
  "key19": "5vJh7pBzSBjnPobAGDaN8Ue1gxqP3m7C6adc6wmk9Xkt1nZGsEDPCQ8AbXhMxGxuw1vK73UgqfNTkER38xTWmbiv",
  "key20": "5Ukcv1581BTeEHgf7Ke3MEH3ibs4wohTXWEwTom2P9tm9ZJr1PRDsFJBHgK9dbkFTk5MwvzNzYZoqgCvZTFbRd7D",
  "key21": "5CHDo9RqfpZguZ8u88pCb4FwNWP4BhTHtLGvW1V4hArUikpR1jwUjg3ZhBZgM2mdxDXQ5rvNW1im85afjBGmM6x2",
  "key22": "5TH1oNFcfe6NbDrMFxtfH3awWWnEF8CxLJaa3svj5ERooew1TXG4HzytjXipn75xqgMEf9TXTB1AT43RjPfz7scq",
  "key23": "4hnQVSTuiRLM6ryGhSVSzzqePqqc9F9g3Df3th6DkAJatJnx5tHQXyF3nEZNpZtw595bMoXfkpJ6EbJKNuDAvURQ",
  "key24": "57hev1P5xNqPQhPvvEvTeoKpjfLVtvskNYEnagLCGNWrhQQVqnKgeHLq6p1r8uEFbLgcfYrp96Q3yKvYm1gL7qL6",
  "key25": "3xPj7v8QegvFXoyeKGTr8tcmraMvhXXTkYVi8maE5pt7ARCS7gTMyXB94AANzjaDiJPB9Egcaj1XnW1x7PucnXSG",
  "key26": "5CzKEnxqwJh6wpDQq6vrTvmww85Awv2FkwTQXiJEqpPf6DYN3Gv1Xt62BuPmBt9Yxovby1wP3n9zbcjkuADij4PH"
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

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
    "NtxYAqW1yeURSKMyz2vMS2na2C1NEX5FsYg6opqiPU1eg9Fvai6n8g7UhaPQVqkHmvkC6HQV4RDcoytzjMgBp8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQJWS132JrFE9WecQA98HZM9pQ2LfD3H3ruZF8ZH3eDzcoNaFnHXn3oDUJ8M3RKbA74ewgk44C3cmpvHd3Us4y7",
  "key1": "D3qTZMZbCbCus1hX4yNg742Lh7uypZPK74sti5sCdod5oaD7QmAHTZHsgY38wFSXUmrcmPkBcpML4NrR78odtBe",
  "key2": "4AhxPpPR3UN95hdpErjTTQXxSuQdnw4f7veEYo4MKXGNMoJkBTXwMeXeYFgjYq23fWKvF4xBsBkbqTQmZydgBdC7",
  "key3": "2jCcmVkauKuc2Ks5FJHS5cB6D6GyD8Ezi59PfFYEC2dQG2KLqP22JNNm5dGE1LSbMRi8BThe28xzj39XC9c2SwjN",
  "key4": "37rgvsKT2xrX9WPT3RFEKRsnFTRt5NCoPcqEozrbfofiKVjeEzFSFdvHtq3FPRx1tgYehY544iNJALq495ctW71E",
  "key5": "5vDzyo9WS8g1xYo525WHmxXsb4JHwwRsAGnU7kXhiqCRWjHYTDE3wuUzn7ajxm7JEJvBiGjXuACCYN31yfTZa1bB",
  "key6": "4biiE8xEtryjKC4oX6ysKGdnquTAjMGGMAwHUXEdnsmettPoRjFg7ZcvZ6kaNsWiWsDp1CFbZoFbNdNXSzrUx4pe",
  "key7": "5qsQM2e9iSmZJDXoYRVqpszYYWdh1w9WdaF2huM7iz3mMAkYRL41B7Dp8iCsbW6RKvyzjYnf2M8qkXTSWNmvb6vv",
  "key8": "3KwAz9ZLgkyRzV6bHJ86q7Twg6E3MtLcBZoM3c1VTPJP5xa4Cxbwvgqx4gDgjf3Gy1ZJcoan47ae7JRDgNFXzRoD",
  "key9": "3TdU2JAcJeh5KPsuvD6XJKHsiWfxJ66T8rBn3ZwJBTZk72oXsKP67VHR682iVJJj3GCGobnjNtsRGVR7t2Aez3N1",
  "key10": "4FAsfJe5GT6RDqPda5UTk95Sw5yPdruqQzEr1CMRuuCxpiNtFtFQGWpb8Y2BVUhqQJVZJ9zEz2tNTxivEnykXuVU",
  "key11": "FaZvbNYpJbaismhdT7AsNt2MJubVNUR3RTHy9c3nT5ZtNt1K6njFRx1RkiBVSPbvFUaRviwc4GcTBmtSiJRvp33",
  "key12": "iaY3oBb8wWbiD1XcYcazH29kBq47mDv67Auk7zXEY3koevgv9V57FNUzbgARvJ56Y6CTe292iHGNsdQpoRjBDgf",
  "key13": "3dqKHg9NzYvAyeyrLWEpX2dmnovJsrFvvmWXTy7LsyVB4WLetEd9cLGowQadtopZ2R5c3jiATf5XfQADkoqTHTYG",
  "key14": "8n3JVQFvqKc7t6USiCCUjkPvgARH5RdwQFrLPERfbJYHwkTYstJSXTWsTSuaEUvN6TF5zNtYVRrxVqHPKj8YCnQ",
  "key15": "3hEF8HYF9dhMXLbyB9HkhxWseNKoS5yTZNCZHZVXt6URtbyNBVgerDSaHjyvJbpuV3WiCjF2DSQgKKoS93fEWvmT",
  "key16": "265ggW1u6gGRmFAWu5raKMwyiL5X8udf1WgBH2bB3UW3F3mLnXbWgM4eHKcfuYQjaHrbgXKrMEgbbXekVhzwJ6YE",
  "key17": "2CyAGJ2TLRtNwqmW8mAd5Pi8qRixygrd5BgaUAjE4CD7e3YqhiBmk6hEhQpEwjAjs2ssRwjvECE1nXSW8icTVzAG",
  "key18": "34hK5hT8YzijNhcyTMMAEv4ZjWSP6PHb9WSjQvDWmaMyGQqTg9gWyCBZa5hzCxSTsgC54nFEnT8mzdB5H87L34Vr",
  "key19": "4fn4VcbfXKoZLZYEdWH8fPFmWv2YXougWcCBnpJNG28zQksuApzCXgjrS4QUL2nnG7VftJ9KLoWkDvByBxtkBVbF",
  "key20": "4PMsEnV2BJDawhKLse3BS1TBDaBspw6tUeiXFeXMmSTfjVpTAJCWxzZGfUGuYa4gDpABaQGxjdQhd82JAb3mFPGn",
  "key21": "3Y5qFjpLXWsrXZqJsEZzWKNKM3a5cPJSoYzydxcz5jw1wZ1zyJhM5fGu6qQmULGcxBbedcTyaYAYUanMsshxEse1",
  "key22": "UVb8JvhWQA1nQgmVmqBaMHyH94GU6TPagfjmVjQJQ8BD6msNdZA95hmKE9iZgTFckLosTn8BdpqrYH1BDApZ5uo",
  "key23": "2bTMQT5BWAagGFHurABzPfKntCUkQev5PoHxi1H5xTHuB2hahtWt2y89To5WeWjhTa53NCyahmbLuPs3qA7ZHrqt",
  "key24": "EgrDFpbTs2coqAaoxjE1wwPazQkiHmDSVHPHvvfyqCX3yenJ6jVBuCN7bQg3B5uPw6qB8VmsyWMaLWHTQvyLhcy",
  "key25": "2dSQCUe7gwfYwmTzviZpXYpeYD4xoFkYZVneH2Dyb57UvzouNCLhkhNRLcReo7yNiBZk3hYcF4ArstSqicEB1Dpc",
  "key26": "5FzC56Vn8wbZk54E8VDVY6fu7vRPxTourHRtzAecKQjGoV3QpWEZUWbJvQawtkvXPestfc3P7yRR3LnCSPswX7V4",
  "key27": "4ZzZZpCj9PMHdAPhC3PgHUyJezRdosaoAp4Bg1W9isomNo8bP28xkULgd2VzKrDKCfXYtD6zX5uacNuFQ3a3F4Jc",
  "key28": "4izWgPH4mxqCAaqTNcGiJN7oDZENoG4v8aS279a4vQsWNVPrHbpY9xab1rAVjnAXpdh9RuLBpZRniHNYbYvgqfWo",
  "key29": "5Y8GsgXiz1jY6SdA9rZQKBDmYBaxukHsq7UBvmLTuRRTb3LftL4PHNWDjpXceikTGbcndWfRtfAns8T1jCg7ZVC4",
  "key30": "5eRTHpSFgGEdTXP7dXQss3Ebu6sJRgELiCokQSeYeGMPMm4BirpXnSDSserwBpFMECCXVEiDFeY5AgNVY3im5Kza",
  "key31": "57bhS5hL1vZfvxTXQh5NidncaRgHGr6e97eXukUEDq2sXN2yUw2QscxgqGKmULstmsZzWF3tAQ6EREGxRgzgcmXe",
  "key32": "66m1ob1wP8QyGK49KdVxQvhazfyis3F6HZLiQp3iPPXWLYRka4ieRNsJGmQLF7y1Q6NhgKDKCgBTKbvUVSiSojU5",
  "key33": "2Rzxkz8rtnGiQcgjq79Km1hXW1x8C1Ycg6ByWpgDK4q8W4tK3zR7C8HURBo4ZbVtGPtNieymCH4nQHjtFMfdavux"
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

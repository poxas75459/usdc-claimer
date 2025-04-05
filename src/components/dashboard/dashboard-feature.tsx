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
    "21o9vvhmw7ZBgmNc21cGLbZkuYhT6fSrZ6JbwwfvKGHk8dGUGZyLNoupfhC81XGWkwW3967iWtns8QuYe2jENeXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dG7bSvqnvby3hZCLCAEwoXfghVxhzjLw8RZVE6bspsPCeVFhoByZmqT6s5r64qVVdioJH4XrA7abTqRCySZkY9u",
  "key1": "2EKUZ6UGwQE6VbqyfatqvPGQ4CotKEqq1yd98GbwGQw7teV2XkN5ZLxPaNUfdbkkbDGFup4dN6F5Zqasv8CMuE6u",
  "key2": "98m6bkykWJhq6CdeyHctvUHaBhZvZ3nxaQGxMURasQMfBJCBUGcU9EdYaFwvrZWJMdYkjGyrPvQvT6bHWG3J7PV",
  "key3": "3FkrqMHmBGCtdftbrnZ3DmsiSxSD3CaCMtvhbeEMQVyerVvN3AvzkuogtHDjfoH8zvQEo3geegE8Td212Xg65ZCk",
  "key4": "Wy1Ghv8qx7aAkmqUUvRX1QVqtCcvtxfk3k1T4tToEUMUPQ3DGGzv1UATAqbrrHsAFabgSjZZFGVDjfWzaEZ3PhS",
  "key5": "3CQhuC1ya3oNoPanCsNFqpurVxpiNDqV8asV8RYZhemPgLb8V7KGQVz8WAuP1T3v3cnsAnHrqdJqTo6bN4wBpLcV",
  "key6": "43WWLVLSbHKTRTixRHq3ByGvruyutNRZjdWSJUkVHqHSSZxggShJ4tukkQfDivWVCSLH6PvPEnqBhZDR3LdFYckw",
  "key7": "3sfPrTmnVokPyzv36bz2pyB7LFQfg2cEVxZynKUcYNujXMdXdEkL24GWGec7woxVouuYw133D1NYjS6jw7MhVcnv",
  "key8": "3rFwEjXwNE1auvP3b4vLYC1AGEVwRVEMzoKw72XgpUMaMd3pFjfUrA4cUTkMNH41D7y2yBKSK8WvRArhJXx1jxpy",
  "key9": "4YSuEMyZbxeXY7FNia2wCUWJzt8oYqrjAs6qHmYNejDBgD193QeMR4KCVXpVAXWGzznxtJuvw6nmp7X4kzZsrUjo",
  "key10": "3kt2GErTSUxE5LrpjaQrnDSUKCFBwKthNZaHyE7Tdr38xBPuFjmXGJjwjLzLR75BFxmzjGCD2PXmwWCqt67HH5js",
  "key11": "3QyXQZAqgQakiK7vCxNvrjKyFeZcmLRNfsR3kruPbixe17dPzRmiXRiwvxwYphdSozy6dNQSBjkv52y8CNCbvXnz",
  "key12": "5iqW855amx5x35a1wdLn7LUuaFmoGR9aWpEno4bu4ofPujw3FSq8aek7jvjpUSd9EBmyM4h2xBCtVsy9kbaso26j",
  "key13": "rqFotUWsbS5kmNnQJ1WF575CuqrctQMTre2tv7KyKom6UjDPBTpdsYW8uDwDi6zLjrPNW3aM5Ef76xGfngQuEsZ",
  "key14": "2ptANFNiCTPCH8PY1eVT11AxQkL5Geum1WQQ5atuK3ZpwXU29Cz8wWLM2yy9s9fSCagWms8yWXAiqPsekFtdUtUY",
  "key15": "2qnz3dcYZeZfBAX7AhkJPRK5cNbYvYPypBpBQvqzh7Pwtw8bxsT3dfDfRjLsJTVEdnq5hYeve2L3cRxqWozzfbP5",
  "key16": "5kmGrsTAF2AsSFNH9bvEv6Nzg83UN7ZQjfBUzn5bmWqs5hwbXwyWMvmMvzvhzAZ3sDUUadCHRK3MyQ4PvKGcDtVu",
  "key17": "3kk9jgyf1v7LyMDEmw3UBxmJV7HFiqFPmLAq1o7xLUxjUQVRVoaZUfQnLLQbfyhbB4wQs6f1DkVz81D6t2WCDnPy",
  "key18": "5krFefUxPDjeGcXMeGRsxEuM54rYq5q3HKm2QVtcFEDZPTjt6PXmPzrHDhcg3H8KtdhHgn7AWjQfH93K4MAjEFZx",
  "key19": "Az213CT7TbiTpQBRWHSSX4o5J1sWUXuRxrAXyy13KgyeZksAi3AXTiVVbsvx45kAUj6VrnV53Xsw5ocbQ6XAgGi",
  "key20": "3GcxGCkhLQ3WLJwrqBsRu4nka6wsVFNN9U7Bd7jByTn6esaXChzAG9GaoQYgKgTeQGwAwS1A3c9XWSihn5X43t6Z",
  "key21": "3p6obsUi5wLFfbjJPtUn1fQfYn5PZQggHMQ7ANebDgHcphr5i2WEQ4jyRxzuHGVv4yKyj5PS3QE8Z56Y2E2QyYmb",
  "key22": "3hNZaYw7QUBDuYWixqUJ9AwSFoYnqNk7adkVqmS3W6DYnLxVbeLUjzG8Unkj1mKpQGs8uz1s75jed4iq9CvCavyv",
  "key23": "5NbRCvcWyAb4mPy2sALw5D3kLCR1ufbD9eHxPNdw2ydPSVY9NQkdbnAAjzTSSsQBVsB88ChHydTn7WyMyr2xXcRS",
  "key24": "36vLGjrkBYrk18fz9WmqG2vyM3SPfNf2476TinH6odcjYMoaxm2NkE6yacGs6CMc1ZCVXQ6agVMkxubakPJt4zXf",
  "key25": "MtqqaJdNuPQYxCF4SRYdEeuwrprr8LLNqNPtwxRxj44yxCtu2jttZL7Hns85s73w3QNVUsSyjqw2NgJs3Ezneho",
  "key26": "LHt4SVakXZeJbf5ogPiWpWcqeGVyiHkx6XuWBwfofLsuZammir7UPeH2TPwdxsrAPERfEdW37kjPCFPkPfe4d2z",
  "key27": "4imF9jE5RyfcYekLzs3QSQr6cxPzMJmU3VUfZdnuZMtkkMJrPXCtWfKobh5BYUYSoVMiYgvxPwCr3XQGCq8m8Q6y",
  "key28": "2d6ZY1SRiwTFUpknzRwwVuBpoFragVh6GsGw9pCkuvEAVwpeskkpohMUvXUoZcA6ibpumCLLiVnsE4Qv3s62SPGa",
  "key29": "33U7zQzFmTw393Hm41foWJKVxV8MNQaUwbfrovx72WZnmjuEw7r6J6vByScjyN3kpfAy1LdRP2n3AmFuQrALNChZ",
  "key30": "2YTEmckaBX3vwRe7LnKtd7cWRjAeURiyPJpUX416Y2kpARezv319hhX3pm4YaxyLKxzQ3Ag3G3ptsyu8N7VHdmQD",
  "key31": "25j2RMMj5mVGaDxEMZJCUTkhtvWue1TDMhzTLUuELeZyQJsKLLM9ZEVacUD5HjHUcF74BciqmWhDRAiopUtvG2ca",
  "key32": "3YtvPDjHA9PX9ZEpUCuMx5adAFafmjvCcYBJq7Ejt2xzoCTRcABJEwQotiDtPmG82qjzs222eomGTnsVYnp9LoPk",
  "key33": "28Nm9Ado2wAbjVhun8Vm9magANnQCbyu6ec23oire2c8kEBKFFKZTYVLoik2wHBH5b77VnxBfEKNCNGT1SvKXgEn",
  "key34": "2hkoVFU5wpmZPzGTaHBGb9VY9z1baGnKD72U1N5qzyJW2BBaN8Rfp9iRkmp9RgYs2mmmKo6PxQr5hmr4nbpQcfu1",
  "key35": "2gRWKotvNhCmsM8JBy2J2VG6xG369Ww4H24GvHBcNq19YMThysL7UhNYihvCXyX6HW5n3sxrXJjw7vGMoTJa5JkH",
  "key36": "5Aq5ZnQ1aNjp6DuyF6bj8NEDGJwqhp8jzAawJs9NgXGY9SB2xLFWyZTaH3qb6RX1NRHApd79GxkNhJSf44iUqK8j",
  "key37": "Yat94bNUVJ5v1P6FDy71rA12ZYTfzEw4dm1bRHhHUA2DSATTjWAg7qtzSvGShwmtD6UyxLnkQ3mzqu7V2QwLMNz",
  "key38": "37K7CGvuNeewkCZiAW1433Z3798EvxFScdHXLdexJyiCAefSdS7bFsqD7Wt9uExBXMuBskMfukZm4rLn7XMEtcsF",
  "key39": "495XDW3qYa9FYakfQLJWSoZEFbGEDk5P65fJaeYEVz5Te5qy55SKwCnNtvfLYwgeVXZvKvPVScSdN3ysujWQL9fo",
  "key40": "2NLwH5BLkFWpH9Pxkqqr8fTyw79rL3xnNG37tbxNnajfednVFeopPGCkaBAHNdfHFWSfMgaQKhZwo3sDxmxSE4wH",
  "key41": "4Jyzx3udKLKksCi3ZwXejTWHu6qFWqKBX8LgKCM9usWimc9JuYrwTvkb59mVPe6yt4y3jECdxkMjqbbkUReVvJw2",
  "key42": "5XTP1wqdASfHhHSUWheMTUyBmRZbKLJUaT4HpZ9ouyUPMv5Uc6Sfc2SGsvY4g56H3xKUrP46dnqGnaEw9bDCQtZm",
  "key43": "5vpdwuiv7F8bL5pvuQjApL1CJjgiYqwFN6kgLjMrzgtu8nq3hSJsfQnr3inFowMgGxAe2CRTGJmHmLL5xkKh2AoQ",
  "key44": "3LTvR6hDJeMtGFGrTX1MQkLZqemLujCWbRN2QrLmTNmYsVSLkzR5Np9wvLVLVde5fcMxCuzcHGUmiy8LGXk73ocs",
  "key45": "3eyfaV1xGJ9UePuqe3hpsooHDUA2zzRkNjdFE9H3KY18RdHLTnM8xRxNJ8mKDCVxrfSofn9PW97B27uUM9f4KKin"
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

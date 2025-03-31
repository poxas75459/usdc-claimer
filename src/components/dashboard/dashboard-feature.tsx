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
    "xBsaYyHRETBpuxs2BaRZ5tiT6aeLmQVHmvUdwc82oxCL1y3BCtmKjGJX4hXmvFhNqx579yN7vGUfntkLbtXAdxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M5xB2xehmBWowynCF4YSyLZDqU5eqzjc9AtosoqJNPn9Qs86Li3QrjvmzzteDU9yptZABLiT8jf4TyjUheUEFVi",
  "key1": "3vVze8bPGbNnajNrkgsNE2PSs5axL2F3TV6GM1D88ZQQL7SKGawF3KgRWtuWdAwV4NERJ5VXsZFtzP3vny9WNwCa",
  "key2": "3saKB2mvVTjwXDzxjxZK2KuzHDpxWzUh53kckD9ozh8m1fHVn1eaFZ1HeUL1ysqJMqmdvwkZPAASRcQN6XBP8Xnx",
  "key3": "58uxUBdrLoiTcLE2B4YTC1GERcs7WAjtabcQoj9w67mf3ehsFbGwmW7WiWiu6aNTYkrKcPEQegJXTUzNwv6StBFM",
  "key4": "a5KkgbJLyux8ngHoE7DVuNQrC6YQQU2vE5uTsNJqMEHMw6fpAjxBrRwTxSF1sqnwmuGsmwm4tAZzkCxXzubffZU",
  "key5": "3LDDxqJP233Agq84zimjXceoRF5Tfm7RB3iwBqRpdjyE5bom7kQBBuuaimYwLB4HW56iMkGX829f1BSff4hfuixD",
  "key6": "5Zc6vgngUxidiL6hdZGtw25KHuVeSD869QZef6Qy64P6F2dgmDK7zS9VDRLzZB7anPtavAVphDR64rq3zARfPQo5",
  "key7": "GHV62MxDWua89Rw7n6prKkBp3UXdVWQzx9PgYKjFG5PUnbH8WnZ9nF1Gx16X6PcxswzSutFiRHgwfQGxFLkCqTf",
  "key8": "4ZGPHS6QHNgik55PJXFBMMvTtyeKWn2dpwuoWm3PiGWPKNSdHLhrjXyCPHUKzp6Mpz5xMWpEzRZxfyN3nRsgiKd6",
  "key9": "4MQLn7Qj1pG8C7x8NBi7Bh9kGLCW6Cxc2EPGvN6zSyExTQd7vRWhLVu25GZdj27ujagqRnqCE8ihkcTVTXmbod5W",
  "key10": "2okVZLctwUqGU5BPki5bgJxdRHG8WJLrt87j6heU7N8YrqzovgVodr2jn7LW3YqvJsb4sTNNo7T162s8YEHGHXYa",
  "key11": "5GKw9iaViHufnZYaCFP22qJe6c9nfrGY3LmPrBTV7bNerZdLAcBz69yYtByTwUczzM2HN3hBd7m5o8f3uTDJ877",
  "key12": "2KuRQzCsRSLDmHudyXVgLFWBTb8AuB5BThGgwJmG6yLkmNLC9x1eSeYpdXWmTiwqFPDngK97GwRdX171wD6EkZdB",
  "key13": "24tr3b1MuE4dBx5uxfEEhFUaq9JQw9YWQs15516i7Y3iGReu1J86kX2geGs3qmfUxNiGpfa7o9aKY8G5SxUtxdHR",
  "key14": "3eLXGnENC5tt6DghdCKvCHuR133E9wybr2jPh9xbVXh1DNsHSvfbuGtXwSgEG6z99DCyT7sTFHcemCtu5RxYXJ1S",
  "key15": "5YeN7HfFwqMFPYAjPMqU7tJBBGV3suK6W1bGStu8TrkiHE5HYQPFyEm8pKYhAbR4aCLoSqRvE8ndttzxnt4gjfUy",
  "key16": "2BhParNkBeKWviCrycqyRh5ZekUTpzg1TB35qZgXBiGegT8T8N5XJFbyyufzwzZdN3cAV6wyXpxQc3T9smxyVGD",
  "key17": "2fWvEr4BtCTEVFBm1xfuh3c73KLmwMrcyCLNMo5dkaLcZ7biza2wPYTLywygYERnKZkvHQHh5NEb8qjwD53asLTy",
  "key18": "4fi9mQopd76p9XgaM3GLLSpdAmAMH9MVTGMivq8iTweejF4LdQymmdCVEE47TX1JPDFvfMr9SUizo35N6jFN37QD",
  "key19": "qroWRANg68iYQpxt7ziYDwcx7vnKdxXuzTVguPiY8NPNoG1ii6PG3k3ma7HsyuwjqKtPvjKQ438LMbTSUAxBHmn",
  "key20": "4W8DRjiAo4uXGLgsg39iVDnW4HKp1e2A5UxqiNb37m3hu9nc85RQBWM6pAHkuHbT3uAwZ6Cs8xSQY4kuoX2Lw75o",
  "key21": "sF2Fuq8FSiqVnL5dCXRvddt6USVWcrZfqBVQbh3fv95PgN4UH7cFPPwGN8WEdJaeSSvoZqpij4qeucuzL5yV8Ez",
  "key22": "uw6wyBzyPKHqSHBSf3JG8i1b8ckheeNEpL67gNTgc9QoJRmHpD9j1EBfgjrM6xjPZzCy14vDoEVbXsdhgZQkMd3",
  "key23": "4KLvDyrW7zzUY6x2h9994MmE8ruBdejJ6P96MXzYfhJHJcn4qGLb34obgrK89pRaengqucy5EgUoL12f5n8nUd3L",
  "key24": "475CogNrtWrbcMzG4JeVkukhhVGaHuoA4Vs3urXDn7uYf78rJ5XR3fFYJmEKRusLr5o4zrP46UPcTXxfAUm6jvDB",
  "key25": "4xqgXmzSNxY4Uz5ShbR4ZL1WsWGCXkLwJs3RuUSzgt2nfouoSfzHuBq2jJPxrUYAD4yzx4Mkw2zmqpWFZJLW6J14",
  "key26": "MNPc5VCb3k5BJQPLvsZnN5sHRQUBt9ABAA27W3onNEUpMgTrQiXBhCEegR7tUPvhB5mb9MNHggf2hhbpZUZ2Th4",
  "key27": "2XJ5SUcBg41n2gA489SnQSa6nRrDTigA7xEnB9zRYGyG9WkrhPLJiLwMGx59Pi2ubTSCiFPbLCqEXc7bxTkpa3LL",
  "key28": "26TYrCkAPDWy6zQKKeHfKYokwM4boc5xofTRxvZfWLzLaVY4suoY26xbqwzWwuySeuUZjern6S2qGFBnd9kESpzx",
  "key29": "4t4qKqkzborNWdQi4Js3jodS6RWijT8ymoPezwPRrfsLebZXPpUtC2wrDHLdpw4NC6aWFDir866cu7eK95V4JouD",
  "key30": "2A1uaoTZ3tVpqLgLENtvnhDJ13ZKfxBDKwxWR4pt3TTM1LsSgwiYsPku9V7M9gTc11YRtc1TXvi675B71WdKDtcc",
  "key31": "3fCAmeo3YHjvqrkp9GFDVpDw9m9GuuDfm59xU8jAN5ZYnsSVVyN2ggwd1xcyCHAQ7FK4win2d5MkUAE4Cr6HPrGd",
  "key32": "N9yEcrFSmPMUHmUvhjViJYinwwzGmvUqViLhzuVms6ajNYsastT3vS5ccwp3QSNZCN5sGpd5DrhVvfj4ASYq899",
  "key33": "5BWWhRxNekXRb2RymBdvF3CyDaAJ9YxxRN2DYeV5EkBS3AKEsoCMYEjBZZjxm6zeQNWHwYJRTv8FTZxiMCFk724w",
  "key34": "ehn7WgXRwBF6x4L3xUv7CDiPB2RcDQQwcG5QfwJnqkdR6x5yRSdamW7NaNwB4D8zTzRtjhX4tjpVDum4exXxYvp",
  "key35": "5yFU3ExrPHgKZLp8ZUMYGpfyv5wMSjY5RQoi3kF7pCQr9Tx8r2b69Lm64PtuXbCJd4TNjX3LJ5W8xTYqZRZoZX3S",
  "key36": "3Rd8ZNTb2w4o3ckvWnoVsvFTrMj877k2dnWaqd8F8qpFQkjwV5EsnYJqsAcCrPK8jVEExNbXDvwxih5CSFiYrd1P",
  "key37": "2E1sHnoL3reFXLfibTkBRASbKSytHjree2RHKGJDXdfBqYZfNsro1Rcqxr1xY6RRzjUyanW4NqGjkPAGRHkp2ocq",
  "key38": "3B21vLJtxh8a28M8SmEsw7MZGGhs7WMdw9VGPq3w7rDqvo3xet4uMdv2iUcWaQHuxRvzNNW9WvtvTvj7mnvNbSth",
  "key39": "34pgx8EYC73n9x6RixtvGXvxPT59YCnt8LCLvFWA67Ps3ShxUSrNySCLeU62vEcZDmMGsp7mCKf4Vw4rE4kevEYL",
  "key40": "dfpFnionWT9rYhE5jCuoAYfuq73cCjZFCNoZDoYyaK49Qa6EWHuWrbJ2vR9YPpGibRnz8NuxS2DYzsC466VJWMx",
  "key41": "5b1D6sUEBN98v4LTQU7zSEPthCnf9aLibCBS11oPGvvWs38uNSgSu538zjaJWFeNQ38hXKE67TqvfRmoUxxC9WZJ",
  "key42": "4yxWA72yTQiDVYc39eyCyS4tjisqXL54SwkEKGkfwF5BzqGczb5h6FENfB1EV3UAnFj65jMCht1dGuHASLNm2QfG",
  "key43": "5t4XVBfAGig18Lq6a4bFDeWHJvhFRp9aUfo1k9GMDekbJfqipvxSRV4khYixdsr3HTYg2wjfXHWLGHGhuUdckzZ1",
  "key44": "3aou2vt9xg8qzi5FKuW9527mwGcscJgMjRn1mW2M535uU6UDUHTidmJDWj5F63PvyrMrDWgUAdg3q8PxzHe3oxyk",
  "key45": "5QP7K9tuRJazAQeTtNZgsQTeEJU1mcugJTfdDEEeqPHscKMrhksj64DCsbmm3TsQhv2uhLei4nqC4aPGUPmUCxk6",
  "key46": "afarx16EmauY2nf5s7QwKBjXWaZA5eZvXcjTBz4XqV7V57A2yqFQo98AV99JmS8ycbJpK74A9ojLa3AvapcrENe",
  "key47": "4aJ49hsv3tMD4fWkiy7mJcom2pDhi7vWuodaYrovo9FKtwDxU1R55gtsCvt196qCPii9XmCTCciKjvYDB9H6tmWy",
  "key48": "2xauzK2eWB2QFF7KRro4JTbfVnjFqkjxu44ADSRL9RXbHNerFNBxgYBLLGSHPCbE6vgbwdHzszyp8ks7fdrFyfUz",
  "key49": "oC2mWzFm8UhwRPeNaXKCcFpgy8FHwa7XTUi5c9xqpseK9RknzgcYH9eim3ab4MV134Q9kxZtc7Coxe99TE4PyAF"
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

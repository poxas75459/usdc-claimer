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
    "2xzmhjTuemTMtCydU4Mcst7JhTm5dJ6GWNnQrJPU8Rt8NNzFaCBWvvTsXPtDtwMPT6qEEVeMBSSQt8f7ELSWhyrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45VeDER2eDT2fsVP9Z72QbaHSyHXUPB42gDepyNfqS6LHDYHYLhopajeSp5Dx74Kwr8Y1vwJ71zFAW86xBJKpVKs",
  "key1": "2yecNZzAK22jMxX7GQCC1b1qqrrXRvaw8WuXzPVCxo4Udz8Y5uciPLqYLPDU7iTNF6HGSckmGEXffxPBNa58DafT",
  "key2": "3ozetbmr1T2i5QcjjHvLfawEUusnsyHCc9mJFMe7HNnEaMCAM4439JFNzC7YXJTxmgg4xpmZhTDfs5wmFm2uakui",
  "key3": "4SiEN4UFLC2UeV6m5zffoPFAnTHXAUQ7gKTarTLLh2ywpLnfa3bZm7ygHmq4JPCePkdq46E4vajLJ7LdBi7embet",
  "key4": "5MqwME9GMkBk6rwpCytyDHFGktqnr8de77U52xCUo1LaLxnmE5JNgn9VSUtPHQ8mA2dHDxEFR1D5FswAtE9PBa1y",
  "key5": "3LnQdeeu9h2ovavcqUjupNVnyX6CqyNKMx9xa1VEZuSiLC2AkYPXbrhJ2bKmv1zBtmDCrWuoEeTagtPK2NztdQhn",
  "key6": "hM8C4RqkDwCxQcixV2bYiNdsMupo4NKEENs7XTCNC9cdq8bEjQA2i4wJ5tLdQMNhAd6B22Voy1MyLHNZvpvd4Nd",
  "key7": "2tyhAWVSMqVo4wiHxFhYU6xn63XiSW1d1DR2iMRseqkykekARCDsmdUbeHqBosL4ux3foo2sGGJzj2fMneD9DyrT",
  "key8": "2F6bJVEA4Zzi6YcNqQqrosHuyP1SCUcWgoYrTFiMeiddvV2FYNkxhtbYP6mJxYx4nLfvKnfKpSxx9kpbed6VCuCf",
  "key9": "2DjCk49J7r1EiqL1J19vF2gRPy93LbNxNTdfz6wtmCtYrjXP4c5V7Z9mNRrByQV1bh6CD6Q5yxKfXq5aGNJbBWK7",
  "key10": "3C7ZZBfH9oKbQ1rmiPPC33BcQ1nSRycyX7m8uAsUzJy2yehDmaB4EJhsiNXCt2d3SyDwaoPTnrJpRWXDCYAapcSD",
  "key11": "5SqfNCmq2WpXuJBMRnT96UiFmUwj7RiegsTa3KKmbUWj5fyWHa4AiqZQXjrFpNZvMw4oweC8qr56pYmwHFuJsxGX",
  "key12": "2kGoemeKGEoYiggNyDZsh4zE3KsHxCaPPL9mLLXzxYbKhk6tGtqPCgLQnSJ9tzhjSMULGnHnZmGx7jWgnVgjQvKn",
  "key13": "GdD6ixvQjvBPGr7W5MomqKvHgG65D1gptjJ2xs2gAsZoMD6AhNeMYffQdwy21NFfWbxZY8mzbSpvWZssTnqrvtM",
  "key14": "2KC3XqCir9eJgryMKLJhiRh1vEzAfPWW7FimkdoFdwQay13HgGe2eK8DpGbNXCBFFPWoH1kDoTX5wY3rP2dBvC5d",
  "key15": "4MybbdkuvkzyqYNgHfroekZWwZisEeABPD38xeZ1SgPsUncuHsvXwkrFzJRaT6Bt9vD1KZWNqSb4D6WN9KMD6KAf",
  "key16": "5PoRGAQh4KqR46RXLwk7eAKx6TAajTeE8zhg6bNMZg7E6tJCotyQpYtugfxPkLZTKKZn9w1XeqW53tyDK19gf1KK",
  "key17": "36gAh8xL7PHrffuDxW5amaFNZm3DoAXxG6as6zM4DSEa1mSH7wFPxjJQEWjJpK6YCA82vfFwfkQXf6G8mFtu8T42",
  "key18": "3kaRTUzyZbejvghSNVFH14EJiYKxnutCr5RaEhVT95asdUTxEokNsEkUUPGEbMzQgQXaS7QqdX6YM4XBdfqjG2XV",
  "key19": "43a3svT9NJ441oRmfBYo35Xh83Hi2HsU4fG7PYz1xzRwGNcFm3ZkLduzmpkrWytwd9U5nVUXE4PTdsQGNqvikx3J",
  "key20": "3Cwds5FjzBjXRxXBHXCFvZJoyarekuK4p3XsQx98dfT9WnSgXW8wf6zRj11edGj5Q8qvfKr3arJUEWkUL6yyAwqS",
  "key21": "3YR6NQU5trYcpXepaUUMqMSbgXcURhLiz6WziNgTT49HWBd1unQhrsSfSQ2BhDQn4f3N9zsy3FDvMJ8SYCjoJX76",
  "key22": "2bxRAEqCgZRxipV9G3WamkTMFsfHCfSBHRsB13PaKQvoWSBP2PYVnKeAiPPHdKebj5ogKZrQcYDuK7iToCe5nKzh",
  "key23": "3Yv5hkSpb5c3RFDpZaQxHpWmy1NG3QN4TCV9Vdqg3Gu1nRvtmPRXFPfDSzEyqwwKuAxdQjmz8Uk2vwZ3LfoJhv4J",
  "key24": "5AbhnA9bw8Ueajzy34EqSGtHwfxzT6SucBwiLxqDvmXAXS7VrGbWKNmxMNxXTiHJea58Qwcz2W5mM6PXmYQDzGiC",
  "key25": "4BF1Bcq9Q4x73AdRu7c3QjKZZP2XHBh9YawJwjhkMLMoDVCYyZpT7c3EJx7tPQwZj8nC7qHG9ps4b8icF2iqiPFW",
  "key26": "gBPH2rVxwWUC8TTWsLSCnwfwuDGibTKn6qky2Vq364QATbK7AxDtRLp8GvgG4kb9aTYf8h2mK4ksYTEwtyjEXys",
  "key27": "2WSxozzQ669LgWvFCRPaemo3ktmouREWGj4YGweW9ZJwAtwrChf4ztsBWnqutVS98b2P2JZWjjWSJWVhvkqjSRqt",
  "key28": "2UCcZSrVoXurqWwCc6uJSQFqe6LVQuAbiFSjVqrmYYQW7Rt7qf9HGDanAzzcZxsF5u3P9R1K9xupTkTSSk47tEbm",
  "key29": "43Dc6Tvkym8K8UNRBAHExpfYLXcrMU4EemiUCBfVzkAzzVCZp9LcBNiGidBJ17ghBB8uvfXpPQBiPXkeDPJeCJiH",
  "key30": "3nhDhxftPMReQ3afHsPWy1wEwcuD5YC66kmuky2pbeo2sP28i3gmhARH2tXn6A3YR8cw9Mym31ZypU9tKQFWqxR2",
  "key31": "2s2JA4FDBU1LAxzJgKQ41ZkddSdJzNazGzst652YGffuZuxbCHGxiRe5bzHY9C5jP51TLQd1tjbjZyjAQAXAbwHk",
  "key32": "45rKLi5Wvqf1AwYAqxXgx6mnTB6cD2zZT7oyzivC686jmKnVRsy7iFhd985NaeQFFwn3bqgtH5xJHE3bzYSgMm8D",
  "key33": "G6CTf98nFcH4GdVCbXTdEgXyuSyMHLMqxJemQ3w4EVtP91L1fiqSAmbaRQGixLZreeMpKYX1H7j1UqfhYN1PNfd",
  "key34": "eQoqyCbBQRg73whY3KcLntEmHjpgAeFcGgi3Zr5W2KoV44ufgU8jh7Z2EvJv97usXdJju8SqCiVZq2UYBggTv8e",
  "key35": "2VtQaJESWNUpsACHxfiue8pjxN4hfwWePrP6Ztemu3st7urCSeaavsGXgrX9Ad4rkR7abarGgsvD2Dg7sceG3z67",
  "key36": "5fk9GvvPpnmqmT33beDZTjJPLtsQCvpFr2G52BzAncAbjbY5MPSnS4XTTCPMagqEFQrqDSgUfhi266Tbi6eZqW8M",
  "key37": "DGuUoCUtdrJ5t4iXU8oEUUtekT4vWvWdWgkHff4WeT6US4UGsazp7inT3CcxzPbHoCYG2sM78aXv3HvQmsuX4XM",
  "key38": "5dcXzb7T84zUTXpV2ddZj7omPCtLyLJPASAJgMhjvV22PM1iXJ5Sa7jA9SKq5RkGLeD6kn3Qsn9yWyf1MCSt74hp",
  "key39": "2b3ZgoMzr1BtiJ6bugzMoZL9DwFUiUAmceNmVpa5gq1zsL3JboyuHTusy3tPzDKfbEJD2TH6Zucj6sbZKjJtyzGy",
  "key40": "2XVKHWq63VWbQKY1jpaQbVaRK26ntirUodab89wrEY8H3RSjFrgFgPFvoCcSjehaYZHmnKjoTkjYeFr5Gjg6vTUc",
  "key41": "3zK9VQZggFaNC1JebXYN9H5UMKrQg8jucs2MVDGJtth4MHMER4ebdDnmzuQWa8tB1PzNrjkDynFcJrixvD4tMDqq"
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

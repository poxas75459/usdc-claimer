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
    "2t4suTBtPtA9PsM4KAtgFkNESeCQLBgRE3p2QeY9GG8QLh9nFWcUWy7B97ijehYEGEJqreP8jtMDQNz6pkAkh34u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LPtL5rS3Q6dFc9on79pNn1Qv6PU4XcGQVxU1MyL1oXYjT6GETWZ2JC1Wrvycbh6KuncZdYnhaFpiiUnbGAgbYM6",
  "key1": "4UC5DNsqKjTkFUEUXCUMGXLuGzvDbpzdq9HYFx1Hdo5oUdCgnWMnpzUktfSksfj7STAyEHPPnx4sLoVFFGJGK5EB",
  "key2": "3iRx9EezyoKtDbmQqzUhzQ4rxNPsjTRqAM1KpDowcXhC6VgK3yFqHLhfnLF3r1ia6Q214HtfxBMpo9Vvna8BvSKq",
  "key3": "jMcaXQv9uS8TpX5VvCKrhfumRd6TReKjnHaDrtDSSwXqdFpAx45VvqWZ6WGizV4TVyNdxwAsjiwHTkUgWw3B4Nb",
  "key4": "2AT543TBnaCE5X39FTtejG4X3MM9siCAhH34zpratmKjQiP9qpehutDGrtyxcAqYRPsp3tR8eVNKMLN3Au9Qu1zG",
  "key5": "5kqpoKTUsyTrRK8R73Bi63raeH1PeWzTrFCRjNzRpQK6L8AbzBR11TuSqDJuqG53Nn8uvFdGujLXVyvB2nU1B6p5",
  "key6": "36mEWDiZJrFYd4s7Yg9tEtXRWsSGTnszceRi6XcEQqRrBBfpcNdWSSJGYjU2JKRoLjtJ2Zr62uAs5JCRBy2skLht",
  "key7": "5WHswxSqxa5B6PftsQnRfqtG9AaV8uKDeXPiRrkLLcrKFg6Q56fkXEKDD8wAxx5Y6c38C8JZHME6LCvtpSGo23pA",
  "key8": "5NbzHzpAgQnkRDxja75MNAHF47HtrhPQJDJVE2sJVnKncbPUhwvdvXENE6LEmrwDxmsxJMzAyAEE8kYytNwPJJwC",
  "key9": "3gCPmxcZ8Ucd713PcaTgLXoc6hN4MsrB4GymaYynofDMFVGi7XRoutZS9y9jSfgA9sREAyrTgiJYNRUJaTPPchKQ",
  "key10": "22kH46kSz34RG8qtnP2GNP5rNyXshEMmLWuBvwD264fPnNyZeDb88rCj3UoN3Af9gZbaKiEuL8A2tRGcdnwbTahm",
  "key11": "5tMJ28BCDtsDDTsrNzc7fuAPJB4SZY8yJYrFHZ6VPEMF2bF1ivG23RkkTyWU2qH26ALpULY7FnMEjwrRToTq8ir1",
  "key12": "5ULzp9a5sQHM5iyT5aMxcnChhoAeXq57TaKiyE3ZzTGPqEBnoFrmnCkCYyjEftu62E128CbY21u47Po7roLpNgUV",
  "key13": "39h9GwbqaWM2U9xHTbFuSGkJaPpZ5Xs64fkBis3sj8qv5chdk3vwkRvffH8AwkVgJMTJd9bpLFpTo71hotcqAAs",
  "key14": "46GjVsRZdpWnnBDBDSH66nFHYhoT8x79cpT7w1obswmnfxVSK1LuRHywyj3nRdJnAyvo3LLoEGeZQvSjMheFRj3H",
  "key15": "62puiq2LKo8wSQgNAvTFSjkTHBWk7Libm1iGiMDhqCaKRBH6fNyz4rk4eTcyU3gFNcZAmYt7bNkQ4LPMx1sN6jSM",
  "key16": "YrmqiaCke16GSPPwoPgQQLyyS2d1h7rHmF5ueDmB8Y6K4pfEkRcDcpwSHYSFzfYXCoCzXUt3anmKZ6NWFPWNJ1x",
  "key17": "4445YdHDTfvy5CDnvjp4Hvjsacutg2VT1Yc9nh8VHYJkXU3ao46ssky8eFyy2V6KtLy4sHzBTXHPSuMhqnqjXKrP",
  "key18": "R2fcKggzWDxb8LPHkQf5f5tcUg1R3k1qyqMyjjTsWMo84nwHBZvfXorkHmqryfACepRmCRPxxzVX6dGkgCvBQNb",
  "key19": "52spdRfG3d2DeqUUX2TnfmZV3ZL2HH8NipTqS6ENJwhP24sZsc7q1n5wbJeSdTiLtxtg27MY39onMRFtkAopxHbL",
  "key20": "2m1Uk2mnw4vQkKSftgwnAD4NAVy1jLXqeggauo4BSXsagS6tZoFK4A7ucKtKw2HoUSTrxUPq7VoH4ZXgtt41BYoZ",
  "key21": "3XAMdwrvk5PXnk4jpCgVFvaZVybqLKTf11J5sSNBhtsY2VDA6KRm5qpeLkZsvz7zyrXeNhREmRfy4X4nzEYkfwMe",
  "key22": "qNu7evrPXaR8MzmoRj3zYK8KC2nb1KTgUtjqSqVCbnvLcTZFK7X9veGUY3qttxBYDjZD5bLSmFHUmeYHKDU9qQT",
  "key23": "5xnZH92QBZrgfYEaMYKaHQHBtSqYwfHxL7MZr7uXLukassbmCx5D3yEEvfJu2XjYEEkm9Wppp1MopVUWaKnmNZFs",
  "key24": "2gkJkF76S9rprNWzJed15zKh621x7ycYkVYgSaf4qPntQRstqGvCQ5cUXTVB1DQekqvm8qNkf8iyj5K8ELf7XRYv",
  "key25": "3tGvHW4kYzg1bE2SsNUCrABCPddSkom5uyXAWscTitDfox2hByc56k7SD7ZpkPwH3oJhi8stp3U5jLX1RtMxToAU",
  "key26": "5usbD8JRP6JjWLu8wGpWmeRohdDdforZ9sNP7jqZ89f9Kqx6tJweaXRxDeEvBnuvmggbCXo8D9SUG4E9oobtnCR6",
  "key27": "2LoA7vHNUDSHJEmNwDKZjARsj3sStFbTMbNgyoLH6PosGG5G3XeVyLZ7V72g1UcBdb6keoGgqyn8v45mjNofUR4a",
  "key28": "GPYN3Nczao8HgiL17BCW5h5Muk7aCDFQmRHx8gYd9PDu22BYvAjnT4ZM2tkS8m427SkrbGZQsak6jmrCoNqLNpk",
  "key29": "4UJCKmL5unRZNk5PzN4fn3R5vPGCiwwiRFXfaNfJFmMzExB1zciEnSWvj9S8oJWLfjayyn48L42cJ2MAQnGUJogM",
  "key30": "3eEpEksepm2tvaBv9K6RbR3CXtn2vSRzJmFtRAUaai7EEvkrnQ5naRNnX3j1AgupfG4923vRCUfPrZAZ9xwKrPdQ",
  "key31": "4ygG8XgmgyCc38ShxzJeV1sw1q8GamoG9vGzuBRGmxaELvhdQNUfHoCJLyu9EdZpF1yxkh2oi8pgCgKZojXjw5CL",
  "key32": "4hcMNB14ZcDMgmBrQ2dGiuEBVq2hhVooikMZRTThZsKBdoeB6HbT938SWdYnnmXYsHjBz9S9RrGV9RfUkx47NLJR",
  "key33": "2kWh81XVL8JcWusoy1roADBxhexuMBbXzpuPKVpvm7uDngxqWzqoQE7chMzujWf3bwA1FU5qSEMUFDBmsoM9unRB",
  "key34": "2TuCk2zae5joYoZY1eTYccaCcE8mGYBUXrTS6FGr1PHiWPnnWGacSxKq6RPVCATvBTu9XRcq2B7AK4avvjFoBZjL",
  "key35": "3yiZJhyFtY2nsotnx7UzT9qbmaWWYwFmyYxoLx4dj8cUogryWRTSNjqtGi7qzsuDBGB9R5v5wwsWGz7zpshvqMX1",
  "key36": "UEuUhiAbrtjyg7wEsQwPUYe6wjAtoNRjqXko6j3s5KmKZKunyNR76sm77wsiNXjzuR9ZgexYEFyhHAzMSV5a9Yc",
  "key37": "3R4MSWfMHaSpeodjw3mw9u6DAyXwiuFs7QcYi1TuCHNMCdHn6L1weuwLdwX11pDmTRgHUEfikqJLkwkxSpr4JaZG",
  "key38": "2M2emxerFX9ipL9nHVD6atD9WWMPiGkqzps5Tm5TnJW2cv7nspyt7e7wRkYh2L5srfNuRxdsGQTgR3qjvpX8ZxJt",
  "key39": "Gyg73bMQRim86wkrJvpd9XWy56khH81JCfv9VwXxFQYB2RDp1VwKRC9HGQiH4D27NzP8s1pKcLFLZ3TM9xHRUQQ",
  "key40": "Cs4FbjLFdwFPykmBSRXJZmzUaq1Hv1iT5VDDCdoqykBoP83TcnizWpAydGg4FPFCmPJHEzvgJiQZKPaJiM7SMA8",
  "key41": "4Ug5E8k3nzp3fgoPodHFYMUBF1bZbj1N4KdyMQMZ72dVgCjpLv9JKrZJCfexxarQdDgnYuHh1WqbQBLrw7vN1xnC",
  "key42": "2nzFGNMNmERhQQWfdWQEFsksZgbV8ezvYJRZBcFETTybr73hqUw8x8vvbfkmqBq9pfpP64QHbTmXWpCQBUMGsUzD",
  "key43": "3Zv6zj1qa7KkEGtdEZWkXGitpZoMuoYLUcftpZpvzurKA8LPiPtuvMVMqp6oAZgSx2fMBm2si19Vim8Tj5iCFeQP",
  "key44": "4tBhZFjfGRHC6EnyNCy2sTLmK2dERLnqppQoa34hFgnJBHqbx6Vypj6SK1YFkXRFzQ5RhiVhcVRA9C6QsK4PEBiH",
  "key45": "3p9wqVBjLP4Vdc4odFEpi6P5EZrmMZB55SCMTtef69hLafbpoeq5y3fvvbwaLUWrjqYUTmQE2UpicpKayj9N6XTA",
  "key46": "4ULVifx64VcHnUFYLxV4aSN7Y7vXur89Zsx42DWsKn3d9QEpsir18GcrQNHsTvSyWLcUSRpnSJYFbhJubsNVNbH",
  "key47": "3XeB8tr69a5z5iD5axowWKjcnar99tZYN3xRvZmYUsuETrNWg8ea4oDwG555mnK8QsiS9qBY1QcTnsyAWkAqDDiL"
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

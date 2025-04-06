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
    "3PV9Bvo2ggMh85DnCef4j4MYXCqQajQjMeFkTcDhekopTx1jbwmxEbkjRyZxTz9hB92S94JZZVofKYjXEWubsqGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "299T7eauq4zFrWmGm7unZr6ZNZeCDnwG9wA11dtVC9Ghr1XSwCQunj9ZTob8c1L4em2Rrdtdfmg7unh6PjAFyEg5",
  "key1": "3JDqma5yx5YJdXdxhf6qLPNFrMcDi6rbGqYWz4p2csrrGWCTouwCKUba3D8qA2UZHt2FUvBtAnBYo4rtpyngpeKu",
  "key2": "26CSfxL129M8xaRcpFeh3CiQTraYRQZRHGQ8ifRLrQJtMREF3JF8J7PbuUUjWuKecYyURNms32oMGg1FWYdf4vSx",
  "key3": "2rtfpkVbHcgBJKJHyKcpDntpm81aMeSLv6Bpzqie2aHpoGxFqmXSBNHu6qTdpqbHjofawWFQKDQ9EBoknfs2auYR",
  "key4": "28m2cntkrFthPJYCTUDhnNYUui8L4WkscdvciNxBNUghM997eeZDh192RwkDeAURmapNCTM2JMjthhAhD7x6nvUK",
  "key5": "5PDq4CxvNkJt1HV6Jg1CKCZ7oSP7xWQGMzX3hLwBHZ7H5CPrVBvQuvCbDSjsbL4PuoHutexpsXPNQdEzJVH4qACq",
  "key6": "2Nv8LEtKHYdfXB1NGJ9GzN5GwVDSonUuzzvk3Cc5JBW7HG6wyqSLmsbZj4nHE74HqfQ8FYyiXn2Y8Yo5Wj869BrC",
  "key7": "5EvPnjT4JXYey9cMztpbecu4nGw8GfB2SdHtSch3NKNcnN51B4WKFfLK4R59z63AYYkq9UMhUewfCDjW8wTYBh2W",
  "key8": "58G8mq9sVNp29359JyjPysTQrrpF5G5KdWe1nd9KrR1BxYpdCS1oDPsPZGx99gYdToEdYtUW9o1Gf5v1s6FaHza4",
  "key9": "2vJht5cP682Lq8biFUtnXuQhJ9VcjFdr8kTtt5wLqxGrfSGnryPPXzZSEFNRG3EUdxruptvtAxavDEdiy6Y4VtSU",
  "key10": "GF3xXpVnQG6Ha9Et3u85MMTRyUiiGaQSaYVHRWXBNnAobgG92E4baDvJhmSNN1N2ziJwLR1q5sdcS4KurVjBuc8",
  "key11": "35ZhpkZpZHiSi7odAW4YEsdrB1fqN2tyxrV3UD7uobemznk5Vns8pPukE38r1sakhuyRqY4kcSn7RbiaWZp7Xntx",
  "key12": "316du8Yo7ZxiifB45E9ZHQpFcf1r7fkbyg3XukJpysCd7ob2Tg7k2kaiznrsgbXk3Dr2qpdhSSBr34W9qeCoSGQF",
  "key13": "66H98MjRf6kNH8bZiMX5Y3v2xyfuXzK7Ug2pPanF5cATdPXidRiPeqSqUbwBpWVmqjpK4KvGdyExcCSwSW3LjsG1",
  "key14": "UmiDKdwcK4ytLQxGLUgRGXDGu5cpa67fXqLeURvfbLouPjfxgdNYyDNnqNGyAss9vW51KknPUDKZThvHnqhXQuW",
  "key15": "sYmHahxhHTK2xXCHKRqkzSSPaGGan6twuWXqUnCE6W9f7HT4qDTWH9TkqJQckbBxjx2epLfFWTrdtBGEJWRfYJU",
  "key16": "cgNXsmUeyThR2dvcfKUw9RwQk1P51GLm5nWmmrtADSgsfehAh67UrdSP1fdYZgtN8kAAsgBJCfJAoG2X6vjSkjh",
  "key17": "38yng9uupUfspXtyccVHyDhXPe5BYPRKC34Wr4PchqSxaWTyb2T3W8pKiq1BKwcDJKvspX773dSSHAXMMypG1Ux4",
  "key18": "8NoMiTvnBYwjUKVJG5NE1uZdYkf32dMNBWCcJ3ak7KRNjPvGA1C1FEsCsF3NhMtziSN4M5Nukr35xomp1AM4zFP",
  "key19": "2UHdTVTAHB6uvrky3E83UkSAn8WFkbZ64Reoun9pbsG3Bu1pTxzYmNjWYUsgMvngFfainsgLBLcHzjQgdL55gegM",
  "key20": "3AMVzoLT8fSLHpSjpfdvdgSW4HW2XWfRSV4pc3ndMUXpgPk3UWqAcRfjZixnWdwsoHb7HHqD6WUuQVtvEandpGnJ",
  "key21": "585R6oDJEdhTJXsKS5nBcttTw5UwbSWGhhq4EVCwGnR5bwK8abR5LrVgsAir1H8gLHfQ6iyzCNC4iXvLNkXNmDVS",
  "key22": "tbce4hXaQVVobGPoMYZHukDoMpzaVosN8UbUYKDULKzzM7XsVRHtNB2k2ZUPgSCqFZFLgfWanJHEuJhBEYzP88w",
  "key23": "vev43HYdgQdCsv11qk4pLGDbpccHeUf5iYjAuq7KuUHioBMSBaZLTt2TfRrfcWGtWCewVqz8McdT2QtH2sUHFcB",
  "key24": "3P3y78dpLrchqvhzxm4RXd4phyqJAcRjx8NFGRR8iuoihpRtqffvYDLwdbYfnENN1QQ7TMqiqDzZohaPDaVRFTF",
  "key25": "2QbAsDuR691dqqMnd2V3WbYnrVCRQpwv1viJnwRoALT8R8BodUJgf5rYvQPE6gUAaYsVmfigLs8cjKsWkMxWzsNj",
  "key26": "4URthq4tghieV3N88yegieGrD9UNdLKyEh6JqzAXAxgDyo9YDFAVNev9qfVj7rpyPPcr2F3KK5T185NoZ86FNGu9",
  "key27": "5Gdc4e12BAccJAVqGq8kV77AtqAhSrQe9LideCmHqGiDypsDjn2XyVr8j66HBHLqLWD1Nhbn7ZZ2JuqPdwGUq9Mq",
  "key28": "2RuF1ZsBkzxejh6CDY4jnWqfXZ4PhE9k5TnUewvuKFJnVRn2HyeDWs2BptzZmvMV4aLb7U3t34vKg6a52mtM1Dq4",
  "key29": "4VmCwy78ga8YR2KAgexmXprMuuqpPzXWdsCgEPUDMvpvK468mArAGLhNJGQC3tMppv5XH3gevncA3mc1cERPGVD9",
  "key30": "2y3krgjLDMnWzWZSML5dvH5KVJR54wnkbHj4QVYubzLH47T2heu1ki6PtXk98muDr94TTaJLDQzhLS79keJJpukK",
  "key31": "3eT4y7QZAdxhTncXM6ngHy8be7CTRtym9XGiVRyUihq1bQ68fB2zqLrTL9dnqv7WE17aedPWpLreZjBihQYuMQaC",
  "key32": "42VsqibedqYrm8mew4MMuZmEqZzbzhGJeX1MWymb6vdCy97ASzUgr74LySMGAyAjmkdL7esGEnWsvW33ZorYSE6M",
  "key33": "3frMjKgvKy5jPnfXkLucEzuYuPZc83kKAGV2fpa5SnKLCKdTbd7T8Rr4cKtthH7PfnuY9jyr9Mgeat1Hjb1z2aTN",
  "key34": "2eFfvPEJFU6uubL8GhxhJ1z8ipk3jPMGH8bSZXVYgYzZ6rKEY8M6LsAKAJ8gcaq4w1Vet1y3VDxyavB6MVxxdh1y",
  "key35": "2fwTisUi1prdniTCf6q9iW3Q1ZUNaWfX2pbwrNAs73VuJ5wF7VK6QBytZNFcyCKb38jbEqthXbJBQhHcdBsFVQM1",
  "key36": "3nHgsmtpyEn3T5UgvSChwy2Nufzhx9Z6Gd7RoUcGdcEcofmu1Ro7kC855QwM1JHCwM4jca2t5RkgdLtbWnF2LeVX",
  "key37": "3bmShjN38PSBWRxFpf7s7txAx2ZriQiNEMAxsdvLAM7duJxrd8PJJqb5vhCeQQXwWrsq9Uf4jCiu3rccdavrB9TF",
  "key38": "JLCPqbRtWLLJ9TZxWW3XzWumnhPa7ZiBSYeGAdWsVK5KWBGbGHkyYgs3j52HU4wwHex6UbYigEuEpHomzYZe7Uw",
  "key39": "33Dj1Rh5sLmizetCSdKeZ6j9CaXtFVa5pYcTA1zSNewJPshfjF3JF24TJHCw7iUAyTXKL4PUX395oQUg3h4mJF76",
  "key40": "5d5dW87mvHV5DtKpctEc225u2x3YeNV3VeULFKmNKqSwdWsQtSgFQ5A2AgqcUEHbtHpjUJLtLKJGsEGmywiPddDY",
  "key41": "53bfmzczamMgW7be9hoViwSVtgGgGUqvzeosS4G6dC3eNseSx1a5hwVBmUD4VhZ1J5EJSkYDGMnqXr519gfpYn9J"
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

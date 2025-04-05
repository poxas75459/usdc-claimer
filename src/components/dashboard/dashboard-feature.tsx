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
    "2vgXnW6CtvGu8PGo5pVA9U69bBTwHS1JLTQZhnwsDfQ9Ys3YWricj8NTFDySx7ZQ2tDD7BB4FaWzJ7uvw4Zaqx2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRSA7crCrsjoSJncD5bJP5KTAJjQH7ceBRrnV2fNpw2UbmQJqwtpzeEKDYzhCETdeCfypbiuwF9gAHwo5UfS2Vq",
  "key1": "2ZiwD6r5hWtnkLYbsV9izVcpRrbcTAncGN42YMDixfp2covcCJ6qGHdGd1MnsUZhWscoxwLUBH7PXd7Gv1aK5ofv",
  "key2": "62JczNA5eqn68qT73q1rW8ahW2SZ7kuGYr9rv45ska88FQuxmRQVsVT8Tzyk8RLxmCkpzY8S3oWG3CYME1NsfNrz",
  "key3": "21fNYnvR9K57fgqMkor2TNz4V98JLUG9K5o4E5WFU1AwvpBc2NHon1djURhfakwfryHeey2NoXfystvcjievFDau",
  "key4": "4GPBgs5uiWrubYzKkcRuq6DzcQGtfg77Z4eheWxrtBNXFW9y5jvJqTy5c9VUgKy6SnZTjUeexgnmn4A4cUNfmCgk",
  "key5": "28GdLoK3oXNDNLm9t8htmnbPfQ53veqV4TSbGvWuS9dMEkHv9kS3HBnTsRpy2cksfqq4a6DMcyPH4ZSLwjMZ3REF",
  "key6": "3bYB36uAVLPs8BroqKR1XqhodNr21CCK9wRfoGcX8PEkGsf7hGEwfgRdbd3oKgWJbEwUH6Gb3rYdGrtQJQCaZafg",
  "key7": "PGtze4YnoFxEBjs5p3yumM6D2kAYU6WEVc8fuDeeXLv1hqifv4zSGiE6V3ikQBevoWCsTeCGUDqePmAhM81dV6N",
  "key8": "2k416u864d8tYdYLtPjn5MPNUhT2zC3Kihs6qYy4s95HHVwqiYViJBqWQPFoURvPXY9U3fsvWtpMqCZXuxogieyF",
  "key9": "5sxqS2HEmJYdLswGpym2RngCCvERm9pv5bAC7pGUUTcnMGK1iAprBckqpMpHa59TpZJDnLv6tTQQKq25d1g6J7fN",
  "key10": "2ZcxyEu7LmNSqM6umndgHFha8CVvaNPiaGAt2KpM2zNb5BJPqmTUmqa8GgEwoGJKeogFFcw5ZUcZQQNwSpDL2q5w",
  "key11": "U9xybWtu4aSEdb7nUn5CJbhBEUJKVAeBWP26R983ym5igem4rBntApC91532cHhixFfiNLWt5zjyexcofW3rYv5",
  "key12": "3KKbpmdUrXppjYBMLDXpviMx5gJYRYcRagMHccybeGDkaTnhYZkQ8bCSLqzVgufe7UoupQ3kRECqL6oqA5ZaZwgh",
  "key13": "2R7YZnqpt49D3QdY7p5DfA4GaYtp9JLXZ9PVzMqvAQ44tDcj3tNrFg86Nf3jDsEkwRAhrYaKZ9gh6roe8saEh82s",
  "key14": "4JpBY41BFsVLXmPQo9KF9M1xYvTGbimBWZRjXYuBPMk13Fwz3JmepLsMkRJt3eXVDkb2B8zvSCA8zywCsoSySuHB",
  "key15": "K7BpQGPkYtw9mLhBeN7Q5SCpL1Ztn5ZDFdfjQgDuFbbfuqXD78CWvUCVR6BMpA3qnu24rezURMESc47pUR1QgiB",
  "key16": "vZywRB8GVKaGW3KAeXSL2zvTME2ANZra3bAc1PHGCBePdW43tSgRELyGRDdrbyD43P725VLEsceqUb5N1i1JtTy",
  "key17": "2YnEL9uoqDE3MmUmqrGQWwRsmMiA5Jr7S2DwY21NFGEpxxsiB4PhVh4epvkin18Qne8KLMJRMhmibruEcpyGvQp9",
  "key18": "4s42AdzSygqdtqsVUczYnjdigyL8NQG4oh5mK46rTidjf5ukX2NAUxBVVoza4JLbsMNqfWvWLrNu6ziahzTS5zio",
  "key19": "3rHkRXwT4SokN3yHDzetCCjQVpPL4F8XaMD3HY6gJK7McMT9JduWV7tcF8njGuaDmt179oVPTFUdSRnAyQMYDxJW",
  "key20": "3gUwiTvp875iS7QaskxsGcSWso8CvTsGaTsf24b14cHUKG992Cj7n4Xp13DxikX5eSbRbodVodbJfyvswQ23P54d",
  "key21": "2jatiFvdFA7if3aF2bW18mGjdrk4aKag5f21953mAJT2NE6x5cqazuanKdYyp7HpRvMAiqafZjkkxJrFbE26ERmh",
  "key22": "3Z98GjFn3L5gNxxThonE9W585XWoARKhUJB5oj7B9RxLJbTxg2ryKVcc2XxJKxrcAZdPuSJEy5NSdVb76y3zi124",
  "key23": "4jHyQXnnV5PSMR2CoA2ehs6virP3iWqqXAz8MyH8E59HJEExvAgP7wnD82VQKTsAqwLo2zWFgvLRVb5cij2XfM1W",
  "key24": "2cFizbjwJYv391qW25a4CB8E9oBAcqayZcfqMRtiv47zPkkVrrG7e5Mqot6MagrmLoLbwA61i7jwErjHmqmVMery",
  "key25": "5j8xPbm3Sg4TrHrLFHC1xjvgxGCMx9L2CwETeJz7dTuQPwhjttnc6vpax2dwzVB67vB1eQ36Rf1MBiG4ueHRbaqR",
  "key26": "BNoyvRBynFzMayuMs2a6QtQqpK23WB3PUcTyFxRy3QruuH2TazDzZEAFd6EcwFv1s9HbEnhPMaCJMGrzdNDeU28",
  "key27": "r1xRaZXNNfgYwVohCf76BYAihubgq8ErTHUMtNSby4q5ErCnEZ2b7dNw1Edg695ZpGtLvEoChE2sWnT2ESjh5vd",
  "key28": "5NRp1hyumcTmuCDymvLMzvokDs4rqVnA2mtdXmcu26bb7QmitBSu2unF6yT2mjzCP7HUcJGTFR5jRpNcUVhZkL3d",
  "key29": "2fzuVmFRfZNrciVKH9z5D4yqj5rNKZaiZhYRQcy6pnQ5Ny1h5rSPFT7tB7pZXeV6LwpZdXbea8PRRnDNgMjHPbre",
  "key30": "CPqDyMU6Db8iWziUPQBn3npjmi1r5ytkfsQAWGrgw7XrKhe4BPBar35kTQpJo4kRHiDJptKcgHiQEQ8PBrYdkvM",
  "key31": "NT9v2HikY3tobKjio2zXMuLxMyXCjLLM9Zhqvw8A146UhhqNrUnfJ1hVb71twhPQ7PkCqtrRH6cUp36nXsPGSet",
  "key32": "5xMz6QEDiyE5eLR1Ysek6FiHLiL75uHhwTeeeFBRW1afWP8V5LUx3uKQz4oUKbnqhsQSfjC2UsThQHpD3KMUxLPN",
  "key33": "ASEyMjESqkQmNbSyM1RucPRsVUrpEGSQJYFZ1sxxjUFShSz8qvZ8skTZdNWAcc59LrCf8St3nT5zTcjcghWdzYF",
  "key34": "hoeT4pP1P1H3JEpn8azvK8CcSWYxg265cdBYAvYpYnCaYkpdtLGTPThvumPbXkfvRGTRx4MrLC3ZogCH6HJCQ7X",
  "key35": "66QFY4JLATGQ1MA4dskdAiHAyoc5aFkByMUh9TNJGtYvTHPuAPvr3jVvmFkxB4SEdqJYTHhn1tMzVAJgpLT5dyyx",
  "key36": "5bkDgxLyrvnkgk4fjyM3nNZbC6EdqqCfeVGpYn4vTKWg2sKLvsFVPeuWPptKUEFCocXVKBCc5cfYFFa2PDYHQ129",
  "key37": "imL7HCDRwKgzTgkz3QPZMsZ1tdP4zRyPu3295qdhpTm9qJAnJPBtaepFv3WyyQEJXpdo665UXFAYJZQMyYDzVdB",
  "key38": "54pQvV8xjtonaRUR3DK29E2T2N1ry8SfnRSd4YvATSKuqWv6Qm3aZp8eCKHYtZJKKcQN1664y3pU7sjhNjpRpLuN",
  "key39": "3cLue7rExHxYtetXp1XBaazk3eLD9WTcA8zUES5U8Z8KegpU8Qghy6Jct1cT7fCG1KetD8Yb8iM86LywLtAUYfFH",
  "key40": "5Ttc5bxZz7S4HrF22oKVAiQHeEayq8ocYAwqS2svmETw3AtRHMG3QqBQyDTtpKaP9r55sajwG4o3XBte7a5ivPjf",
  "key41": "3x5CWUsg8kufm5ESPSWdpz9hTo7ervjvnptC2HtUwCk7r6JDAyqtNRdByk1DRkxcV6uaQZCELqgfGutWEVqoKqwh",
  "key42": "4c8qeYb7NqAmM9F1aFECAdMRM4Xeudvubi7JVAmeyY7hdqJoc5S5VEaSPcpeV8L9MJ2GS6fNy4AA5SPhqpHVSHsx"
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

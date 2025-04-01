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
    "EorisZp1J4bvsnmdrH7TwprorX9EqVk6vc8vYje2kRPnr8Zk5czCUdDhPP3wEDRgJb7JPVJJidoqrE8EkaQzkwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35UzRi5qX5GCgRBRivtUa87Wi4AaPpJ7oKybtCQSkfEv2goZ2RX3u9zgqHujxQU5Lwp3Hz4TwhHQLQovAhgBgr3M",
  "key1": "5mdCT6xb94ft2MeraatpAfHGoKnJznZrG6gRppx25GWtsbzs5b1QuvbsUo616tXzUB2TD8HW5GJq13ZY6wupahGr",
  "key2": "5RqrBRHMeh4H8hSBxsGgXVtvK5m9uaZ1yUWJUum9CUPwKrE9TacDvh1yH4eMrjFw26stXuZ6t5e4baqG9Jcigz43",
  "key3": "3NBWM3w5i78sNs8E3pfa32YUg3vMYX4wNyesJzk9yom6ANL6CBQB7wzy2ypS6X2uP7yAFSB3nn87UhhtMw6hX8ht",
  "key4": "5b7HzFDxDam9raiQNM8dEKFpLVHd2eA34aHPuAXzfYDQDFNmfzmv7CqZrGh8ToY7Rt31heHQqaPTcBnSTikLhaUG",
  "key5": "3hnNYj8bo8BcDLgKGzXgJH9R1QQaXptvukQyADhZypaMhWejt8DJYhDSthTuNcRBjDkFf5PPKMm4Cu6gRSN3U3Qc",
  "key6": "2zT93i4HWdJwuwg2qQyrdLqodYXTd4XmWLFSvz141nssHc9PDH26DmJtSo21w26sAmNP7Wc1ArkABmhAAMGEnr91",
  "key7": "2PKSJ3MaTreCfF1K4PE81AwSiUB8TWevYwDm7wStDMxSFhB6TdMWHyWkWMEwxtS8m2Rd7kcsXAPqFyrFmh7bg7rK",
  "key8": "5LMe6y2W9uAEb8KMs7rrycEMJ56WUueHAxoP5HecDu8xq8pPa7neXJdVUZokDXcwSFEou1ctThzErFJbnMa8DmPm",
  "key9": "46MCN5TaU2xbuBHmcpSN6x3GAtecqE1YtawwJ2wuqwnP1wWzMkHwukZVgV7KMdyfNaY8z2ok8SCegrBP87baMDRj",
  "key10": "55JqxscNgoW5WJjwiYVY8E3fPVkTdZaiBN5wfnvpZL4V15QHSRqur6cPtWmPYkxtNjtHZr5QaiBYWPaf73VHihW6",
  "key11": "X3xTVNmrn79gpHVAuyEdjC7d9xDj8AriMwXbQsoLB3opN8dRNy9JASdJ6ofiPwAQ2HjcDBaoKk8oWGgwaRvmvpH",
  "key12": "2qMECwKWpRECuWhcu71kwszPXLdqxpEx1JwTkHGycAvFjfXrtVZTcXXpXSbJNc7mcfAMGw3a3P1zSYdmR5xQL73j",
  "key13": "2LFkpYvTSN77UJGTd3ToM7ZKGxPSBTVnPDN32FFLFfYq5J5prw7VJZVd2bT56dbL7e4Bp85qoeAeCM6CPmFM2Gag",
  "key14": "5fGsn4EnmGBUPcRLach3f6yG4cHJZ67heWnEiy5kYiRB8NsxNQNjigzh2GaSbrXj8FS2gTamJECRAfECitw48g1o",
  "key15": "3u1R4Gbnao1oQHBbNzDdaxwUi4ntAqbte5uEJNdzTuTrMZQotpA5Jtu64bUB9CU4T1e86L3QNPEX9ANwQNdBiuwz",
  "key16": "5rYu17CVT2yvk1sJwSbdT6Seq1kALUWyWra1wKmzkDMdf5WQxuBFEqkiUuYTKSxBvHaeqeTuReXn2FUn68CLaRDF",
  "key17": "5yiVou85RQrbZ13bTRJXkntfVsjehkfx8nwRwrubYaBjRvyLu7CQswjjjkVYmqeuCypgrkEPJDuHBPkTnhvAZCkt",
  "key18": "2ANYmDKK1iPdjKhnrdbK6UfjGtqFbMLeMdap1GbHuTkcEKwdWhGdYawcruufGd55eL5WZY3G1QQv9N2WKS1NcrXo",
  "key19": "dzitQ66vg3gThtm1EujCQzy8naovMtGFDHi8NoizwNrzGAEsVEsUiejomSaF4ugTfCzz6PRMqtrHNFzUsfAQfAH",
  "key20": "2eoy2AwusVJaaDBUp5N2RQuJdYRQ9gPGtHoQRQJFs5Q1G3Q2qthnJo1DuD1YSG2gDMhPPgLR46D8gXFybDHL774g",
  "key21": "q3SgbknjyzXPNzMv7aNgr3n24byBAvHg8Zv3Qw9N5pgoHE5dpxvVKYJ2LVq4PTyK9BanxpGYEDNo1yZBeovE69T",
  "key22": "3KAFqvEmzSs5W16Yt3JJiJa6eCdenhoRaGmrumGx2oHT6asgiAEWUheQvchW1bbB9Kk76FMzv7gHz7GgdabKVzuJ",
  "key23": "23zoFhMpmujSiuiLZjaXRwUssKYMnDKpLUSPnefSruhBZ8bfbpk1YRzZKEroJHdJvj3SUroS3gZjiytKWXo4ikEo",
  "key24": "3ifcgL7XFxpqxewZo7uedbUMGCw6Ua9PwPo9cPhUGys2fE7pjLZaHnuvWcZfycEzjZagqZmLRuQjJCfzAFkQn3UE",
  "key25": "5JwpSrU23Gn5cCMP2X9GmokNRhkNrY5YPSjVFp7WXYzK65D9xjYwVXVMZhVJSuZ2ajdNF4bodr25djqiJ9ZDqPqM",
  "key26": "S6n9yts2PTAVQHp6hXnE2CWhRJm5Eb5NUcQTuZZhdKZrnSyDViu1mSghfVJCdk6aBJk1Jinrwdy81KWdhaKqNeW",
  "key27": "5Y7EbtVz5GNCJ3YY3j6bTZbfTPhdEhVx2fseEMVZ4BNKpEdhYmBgLPjRevHTVKZyeDhaQcjw6NdDvvYE4fC9dcnN",
  "key28": "4jRsaUKTGh7AZddzn6WXkdrdfhZNUPLGVMPfR3cFmf9JXGGUpjcRmDDu4wGssw3DAPFP8PNbsAmYq3m6jCsvqoK1",
  "key29": "539XhQWQLCTVa5FHz9jt9HdBYZwu1iZn6kJ5EMnHQ2E3zxD9vSEFNTZCakqwUxQNrK5WfGmWTDjnAFXjK5ErsW5K",
  "key30": "4r3ckgU6LakQHd7w3qHssLm1U7nqa8PG2Ng455Dc8N2ERnqXdbhabcKhVbra9D2cGHTFJAw3yRZhbeYJt7nijFZe",
  "key31": "5KDtuFwwcmfZK1i4a5HpfNyWZSfMqhiQzQ98aUPKsgXq3Xxb6ge7V7B5vRc841JkWHm6wC1EnkNtztzdjKLUutGw",
  "key32": "4NmZXVRfMvHJ5paW3uWUGLkLbLX9uuHpsjbjte2aZ6UVkZCjyjGH61MUnNCGU8vBSo5oUs5JEZwkitpYnBGYADhs",
  "key33": "4oB2fZGkwj75CdKfTWc4ahLaKJyae1zRQE5R2NTsaddC9Ufe2L7q62MHVzkdX8AZjJN4nE1eHsGGsfRZSYF9k5PF",
  "key34": "2tyZ3yfnMVwbzvPmL5ff8Jbg4toc2YEb4KMospmqczhgp5rJbgUzmHax5tCgDKQRrYARcBdrUcDBdKvpSgFAoi8u",
  "key35": "doSkg9DC5ViR9nM3qNy1epooCPiJQBPTAgcPbPEmAUPomJXBBQ9D554T8dq2CELs2xAZX2APP1MyTZJziet4aG2",
  "key36": "64iWZRGJEz4NeNXND1jBM3XDQ3L9tdG78zoreVmYqarja59LfsWD81eJi3CfkCaXdHtFrx7Sqn5hUU396Yv6qJoX",
  "key37": "5S3d3HjgSJ9r8LUY53AnPbY84Y8P5PVArM1YULfUkdyVUMELFWjmMNpMTumJPyWS4XSjHXPaxmv2hfUpBEzquynu",
  "key38": "2o64zZyLZdVgd5FVZQSRPgXL5ZshiEay6wEzQzrNVT1rv8N2xYgtMSGNRg4N5JiX6Cgr3q6SBREBSryoqLhZn279",
  "key39": "FNeUcCrkqVZpwhbV51zKeCUWCw22ARnE5V3rz1F6LUuMReXWcXftAMTBSF358wnygeW5cqYzgF8Y8ENi5gMR5dK",
  "key40": "RuhiDKgMLsYXDBkq5BgoCW1jSob9vdo2i5njEZXNwAPQUa89JcxoVKfHBdBdb8Lu2auxMohQoP7v8khxaACGQRu",
  "key41": "3gG3yzxo4XnhMLSC6gRf9ZewuSuVn6Lo1vbtxovMRpTi3LtoN1QfECeMPUp1fawq8a4sf6GE6rVJXKGqPHMfd5wN",
  "key42": "BGFCKyWiFXAd12SZCqmErcXrKokdC8ZPJNHHsnErt22btXeqcLLW4Wq1Yo1QMYJCnQuuHQEznrhoHJXsvEAarVW",
  "key43": "NQiPu64RkLtNammgcZY15utQ3fVhsXjrRM9BUP6KudHibPKcyHiVHzysfzQG14UWp5nWtMy42Shyz5ASbnuXgqQ",
  "key44": "4zciM9eojTgvfqdUV4xwGmubGzQJwzZ2yz11to6anoX8j9urHCLGBF75dKLrKTziL34LJxQ13K9it9SffJUx7F3s",
  "key45": "3aBpye3F5UWebEwnoUeBscNNUyjnXsLE3biKLyxuEhBrThsDa8L7K5GpK86TsKjHtXLENzcQhViV6ViaDZTvu3AH",
  "key46": "2DBrQ8fza3bW3ArdnSrhahYJvzsgSxs81vUoMSmWFUqzBRzGxsjwqDQw9AkYbJp9KMTLg2BdNy4QX4micsMoEQ87",
  "key47": "31RoAKyQzcdwrxvsCnn6LH8gvoP1QasCnvQtW4aegQNpB9wW3c4MbPsyZU1XDsDji3XZgSxQnyU1hjmBSRsDckEK",
  "key48": "2owTcrWYwHtJ3MKvg65uPjeGH7zBgffS4r3uJGXZfnE7t5qNPifAGg5QhCCiAtmaeRt9DfGXCWmHhmZuFboryZAx"
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

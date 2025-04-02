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
    "2cMt89fRxWGG28p9fAaTykKsoLKMhETL2dUF2FHkZeSj6sdUt8QtshHKPwUQ7qYM5v3wXo4KDycVfiXkyTbUJMiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mxrcZJWXVNfkBtdSMv3AVVmWPiyCRjTVVmeS17sATupSJ45QL2sPdXphsSAqBoidYyymnAhFU9oUKY2djAsPkae",
  "key1": "4ErDvuwVhJkBpwwLe5ibmbaGis4G361BY8voEcdnGdMup3Qx6ce6sJEeyXb1Te3DjJUebuG1w3xUsfaztiLjx3PM",
  "key2": "3rj5PQAwNGVAN8QbhfqXTpzeJJvSkxk6bfpWc5wYmrhivk5bkuAGpKguoek7dCWyKV9BkC3DV5mS4pHfN7bxTPJi",
  "key3": "4oELrb2aBR9BGGdANLQrbXdm1Tkv2FMEEYaiNGf8i4uKjk2AZCPXbqSwGtDjtB9yDZFLNuaNXyWyAnhLuLaabSin",
  "key4": "5KavxDfF2wczya2nwMoDHAnUZ7jMQbMxVaLSexW22ysVQJoqiZiFRsgpCZVSaZsQzJjwk3fXkuqvK5GG7VZDYEcg",
  "key5": "5wnB1hm6MtbLXN6XL9wFuwXprrESyrVoPUN2CoMD9HfN5WZknHYgsw7Jeg1fxsmzaf9e8E2taHWFzoYoUgRVRKbC",
  "key6": "3asoLfat5iQzXW5x3veeXwz72bGZNgWYzTrpVTj1PiSc67uJ1anni74LLXjUxTnyNFmHipQwLJ5pM1HD7Gxt9Vvj",
  "key7": "5x84aEkYU3w7BibVac4jJKazsgvAza2CdgkZtJkEsdo7zkbZLNRdcFFvMDSPGUm1Kcazt6qKiTL9rb8SuLzCAzA2",
  "key8": "3gK5PS7J7eQSxsMXSagyDn5U6BdwjpgpnnRrTKnTY232SgGpHXBzPtG9ZHF7zx8WT5kwhs4hnjEhWrGSop9Qukxs",
  "key9": "yekK2fmApzkYAaHC483itMkSbjaT7LZN1wyfG4dsTsftXaLws3GamHbLVXN3S6LRuHmoejwqAFNnW2qwpiRuqxY",
  "key10": "4oMYnMKgPQCNxnkzstXdFhW6CmzqLpUYV8jnLZ5qzQ55mquECA7zqj8a58X5yYuQmTjvAKrYdg7xjrdEED4PvyNC",
  "key11": "3bzusC5S7SCU32KxvBTpTc2PYXSqP5sk4rKGfRcfnCKF4AFDvj1M9raDRzX8A2c6hcMXeNj8sJh2TUh4Vv65TVr",
  "key12": "5SazLkvvToqwim9fCS5u6v4Qmsv1ZFn7SFG9D89ANtgfi9unYv2S38wLAaTeyc5SWPKTjXiLt7Z6oo1QesKGmXJs",
  "key13": "4wh8X33Svfa9ytejeHVjgCf15TahDsm9YLeUj249HkK5St2g7MufVSH5e5cUSzN16RHRe8HXz6KVYDB6dEoc2uMn",
  "key14": "P1okwLVGHJYB4gww2wN1GDw7vVSPgX9o4EKEsa6gW6UZmw1U7uAQQpqSx4SghU5TcT3YAq8G47qnoFq74SFVUBn",
  "key15": "58SFkqg9Q6jmq7by9yF55ReaYPtNciD4YtBPqiqyoyzVYRMvT5n2j9D1P9rSRwXyjCrZuxc2JGPL4sSiBV3aufi4",
  "key16": "4TSH2sj1K3om3qmQXtj4JkR1j1aCsvf6zz4rFuG9AXzZgYaaTHtV4aq1eXSgQ6hti7wb63p4fUCar1e7ys3tekZ7",
  "key17": "3XSDBJjvWTDu1dv4FtMNJTSnWAWp1WjEwX8PnHqyxGzKGTDkVwFZghZ1XA6NJSmRJH9c7VFQEogcVgsza95Uswpi",
  "key18": "5y7yZMNTckDSfQFDeumkpxfWAZdiyUwUz8Qn9XhvovEczFMkLgBa54DMa8ZjajBsHqeGkBrTvegsG6YPdzUJsVrt",
  "key19": "BMAgJhDnx1dMAge5jqQtPaVsES1bMiaRwfYxQTNAt6gVNMm6ZjahmERjAuM4jixB6Z8bE9LFYEtS5kLkyfrWi9Z",
  "key20": "5zrwxjSq2Y31hv7QVegj1NsqMkt5njfMRVjFvYgw9wEZHbd3igpQr1NoE6j75RHnP8ohhqtg2MMyjw9ZkkbGeuiU",
  "key21": "Va3xwp2q5kRfjXHTNEjSCganH3b6XzGZdG5i12EtC4FnTYKrYAQQ26r9Avqzx2Wy9JnQskMs8hdbW6pwQJgzmup",
  "key22": "2neHDVCdhLsfo5b6UXWB8cZwNnSw9jL2wRgEBoCmChy3FT6x4sPjBYJZjyDvNhtEveTYc3ZWdvHN9Poj1Ju5eZCY",
  "key23": "48vbQGfPAFr4msUQGxoFjDEgKDD3XosaoxFUZrbbtogarJuXZLoxGnDYk4uh9iaCDLkW9W7Hc5VLQWb1RX6Wv7Hi",
  "key24": "48aDWmZAr52tkKBiE9hTatwu1T3EqPfgtYLCNNqB58YPPc4s9vQWCnFR5aFtjfjuvML9nJzCXjDQ2GR27tNQ7vho",
  "key25": "4gEiARZ34mX5Q1DnexntMhDENHnCZBLVJJEHjgKLx7kEZxZntBg5BFG7ZGuvK5QLdZaGoXS1jZAN9BKJRUHqYmNf",
  "key26": "jiUbZTEtGztgiUc6myjRBkN6jHkEiWzH2rfjQa4hJHcNm6UQEBnRYxW2zSrGuz9ezDutM1MAR4mqmvzxkLstByq",
  "key27": "36t49MCQgthQvmE5UVQztfT7kxPTHzZJfPuQbLrK3fp5VrCJQCZsTzKQoTADuisxieFPgv1ssMexfo4XEdaUQyaZ",
  "key28": "4bhgt5T6QUCf85thSqrH8XrDhGBuVhCVVgYBNnBQ7TSVSLoxmcFHf4h44oaxPzuFrz75VZszFzo4gRFDwLpzx6p7",
  "key29": "4MPppGAksp6a7JDo1nwtigztbRRDAYRAPNypATZeqY1JPD7THuu9dQX3u6m64pTwst8NnCqWVNmkm76gVv4gECcH",
  "key30": "3xdwsnxz1ARbX3hPYCJhTonfogr5196xaxWF2wMrKizJvVN5VuAFVyQcERryQNexKEMoekmkmnAQMJBKp4FcwQbn",
  "key31": "2o1wz9vBhbZvikJQuEkwthgjyZJiCMgfYCKaWGA9LqLebZR2qCwNGoWQQSCJXB5nATcib4H9js68xSmfJpX8xUrK",
  "key32": "RsxQprEfD9pdhTQ96VQf4KcKJB2WvQzhaSKueUdh9hMHbEyFv2S98hkgnMrETYskzoJQLchjVyjzxeedkmGQUqX",
  "key33": "2hmPQy8czzzNNuBjDrgba6eGuHKv7MwXYgTHwVxY7nKfhMhpb4jyViyvQmyco6CWNFeCioQex61i76ZFNXKPv6Hg",
  "key34": "KCjWgMg7dU1HdDF7UXNCBPFY1p4F7P7qK3QMWo6o544pg2SgAz9QtCCDexBRkKyGyrv8BdGnixRTAJh2yyXKM8N",
  "key35": "3zCf1QLCUJGLQFKsQAsycrX6GfmKhJ1iaM3dWSSLs9N3kmZSRu29ssH2JcsxSZghsPBAuLBE64mYUmqkwa4agSP",
  "key36": "4nrNQcf3P8MAZbAugCvGsGQHzcizE29jzvWhAbuCsAfzDpBeco46K4k74KJdQGKbJmNgk49Bv2wYmWMdBNkRAFMp",
  "key37": "2m2ub1bAdzGVnjg6aCtcvWe3VUfEegeohHHPPmx5GV8utTVPKHpLS4RnYFduHrDkcchqNZ5CEztrVhtwge3WmgYN",
  "key38": "m6i1kyDxqJNPMffbm2XumFTzH7K8nGRTTgD5QdoFE1G5FzQLnt9Td39UdcKHBUL4pUDwnWfxZWMVSZDqc2PvDSv",
  "key39": "2xDfxNkXrJtu6MJiGor3JFCfV8SK44KrymBRdQc2LMS5mbpfpYyxb3PiJxGTswJx3ZGjTe96N2r5645MCyPwJh69",
  "key40": "4BcS3ziyJYjP3jY9HA9YhEBwUU1AaLpHEkxYuMQLNjyEGPAq5je5NFKYEsbfr6oWkZuQdarPsRGnrhDushnRxsAi",
  "key41": "58HbgejE2uo4WBcu4FhFYioAXboWdCwBJVtQvPVZj4Aq8z9XPrpAYJ5y2GhWEJgFnZvDr9mvrJ5wnpX66ibh8hNQ",
  "key42": "2hwVCXdfBbbUBnZg7wMmb9cYKx8nNoYaf9Mq5LqQyA1VgwH3CYLdfxLuNvFnWvVTceu2X57aV5KNLw1gayXpX1rU",
  "key43": "3xCE27ZWRcb91F7ddrrQFo7EzbFHz2R2aVJ63CZTZf3oHxYZJAUGu9YkzMB8m1NKhWkzQbzWLqs2kwoTQzDbJynf",
  "key44": "5tkj4fa2GAZKKHhYEN7oTxRaUtAgpFCjeUfrkcSpi1FZZWCVmMN7epsJaV5pJMi5cTSUyWArCqWuo9x3yqZ5fDpA",
  "key45": "3A3CTqyx5FkWQPTq9jREMN6ukCCmzUBBYPc83M7cr9VaxdgWgD1NeMEpAiTah4AknAB22XhsmqmZRwv9ZW1dF9E1",
  "key46": "2VgCaLMDr6ipXUYT2HeQBcPH99RCQ9QWSKAxKBtNYaj8c9ZL7vdDAsfAgSayVXWK8DDwykhwCJrE69NJW4mSijRq"
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

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
    "21QXgzKR8EnbTjKybXiu1zxuJskY7KqPJforPJaKg6CjzJ7L1WXo62324tDcLbWAZaUqSYppGw9Ahq7T3GSk2F9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GRZfxAsHbfqpv4mTGzKbkARZeK7JuY5qT9xFmNGocZXoDzkQjFuKNcyDMk6RLYE3J4aMaXfvsiDp2A5uxLTv2Yx",
  "key1": "uvgjwXTKxBy8kUo61tvBPszcCkKSSLY4X21ooL5XzCPgq6fww9kjiBvxCxQVyiQkqzV3gEB8XPriHBzGzaPr1WK",
  "key2": "4gxPKmmjjWFomeedKit1LYCLxbCqw5GtaXq4GmRbQc73vwyw6PmJaASvzybidkEUTGvu4w1z12qGRJRV9YZint7d",
  "key3": "5f9a565aGuxVPmofdVtd4KKrNXKZzWuF9SutYUTBQLfJZccN1u14NuDsQ6KfYXE4XZri8EkVLNdG6qUZZC1QQfbu",
  "key4": "358bgcZ27CWaczkym5DH1orThkUu9TRSeHuKK28887Zkow1Ng75eoRz5xqX3jR4Dga5bEKuchJ1d5PfKFrAbMYyH",
  "key5": "EmDjY2cTqy9fDreWqcDym8k7sW6Zg2jq9YrNqwftFkNHHQtj47EtFSyn8fa9znFSxiYYDRA7YNbHs9R4Y6RfVhG",
  "key6": "2S1iYbZkAuj2zGzE54EUtraABxgN4PcvtBX5Q2Tc6Snt8Y2eHwfonm9K6h5fZWFJ1zsK9RLgAd8UuG9y8bxtv3gz",
  "key7": "3fNK2LQTxLzRab2CEvngKuMQkVyQfLSneuXfseBhoYrdDHX7bqDQM2jStySY6ikbYrTzFVv92Ye4a3SLH9UqPWvP",
  "key8": "3ApkewemJ3DAPzyCWPR4VqcFYWEL37KHkXnfeG2A8yvaHkFMhhqpphSYPiLyJqfMpb78RyRwr6omu4yhNYBWScht",
  "key9": "4UqDxYvqsB4becn3zSaVLyUMWga2KUMrKFrbZDEtZaxQG45HY6buNMFLMcXVK7u2Uv3PxapBWQhHvRv8mFcLygNF",
  "key10": "oTVv54Xedv7Npub5Eb1ncV83UGqhq7pw9rWWZQQmJ9sFa9GaERMwTrymBAvxxMWLMyJJN8rj4vsBjHiAJF8CjDN",
  "key11": "WRHcibPwBaxtFzAtsSiFG41zvhWXtxV6qoxdBpZGMYsRS4ZttbvmbcDT4rXeP2D7zPyTLp5k7wNYQLa8SazCEgJ",
  "key12": "2TK489dN6gBQtDRSzYXGCF3d3co98PDwkd79bdKLN3DwWTiGE9dt4PgU2W5sdJkodrAme8cto8pe3ehXjPu1PHTE",
  "key13": "324EdUdVdAccVGDrYJVHTf1ExBrTxZz9kjVhhUsZsm6kjg6pPPiXStipGZoqL4Vp4oewUp17dY62W7xKddHfyX8E",
  "key14": "5N7jAuPcqdgzk2Ei9hVUJhdd9DxT4q5fGfw57kyiuAb57DrJJJYckgHHTnQHjKwiyvTVTJ4Zkz4wEn92TtXBJDXd",
  "key15": "3CXBEPhXiv3xbEzrjK4J6sSbNYSd6HUAEDRJewcVyJirVxVXNK9hAciJ8x7QxnEzQXWCLZhGWRNjc4ovcBZiU2JP",
  "key16": "3Bac7VGBTRBaakF4NpcBAeDmjjebvUFncr2Hrztb8LnaufJPFEZMQD6KvPxdvdrQgY7z7jbth1uNS5if6HdVac1r",
  "key17": "sVEWj8Fcg9eBqj7zvnhbJgaoJ5J6GNC65T2R7C75eyia6G3wmpxNbuoNEdppk5QMbdhNfDthXuYpv4uR1Pm8ScR",
  "key18": "3Wqj5sswo2KAggyKS9sX1DpGXLoCTuPJJKN4CP8bWPLKZAxgNNUxusBwWWoMg1uhkiqcXTEZjTr9u8CKGAmsibXU",
  "key19": "23L4P6S4WNADnLH96ZpgF8CvPuxBmzn5cgA64R8zxHMcZ81w5wLCrQckShBV3Di33wYm1J5943mg7zUsiwEsN81P",
  "key20": "5fhfeYUPpArPvCNtCoafVuM65qmVX1osUEa9WYc4ewfqF9ELt8jU2VDWHXDShP5zchksZufgULfGdKXVwbC3gFQZ",
  "key21": "3gaxm71XyWTrKUz49wvKFYX5SGpK5UbkRT9QihcmLBVoZRQ4H4Fj8yUjZ9Kd14RbUdZvqDoiGwvERLemjCx7NFDd",
  "key22": "3YB7MQny2JnBRbg9DAF2wLcUKXR1n1PwC3gagATMnKpWCcjvCoLc94pt7QZDPjLvBr6JJ9fqzF8a7JxbNeC6scU4",
  "key23": "3zaRhFQ8gh1arruYfd324Fo5EnNr2bG5ssnFsM548MjtBUUTojoK982ntKHLsPLjhCy7zjiKwyzyXBzsCgDiUMPA",
  "key24": "24JbyH8L32ybw6RjXJFAGojjvNrXj3kyDnN6pUpSFgjGTyf2m2BEEDiHEPv26uyK5XvsajXmLvHz8gYoBcrptP8f",
  "key25": "5vf8vYNH5TcsyJDHjgqG97JBU5JSy2RaL1dRK5dhfjaFZg6NEivR8fj67o85RPAM9hy1nydefrZHY3zUQWXKW9qH",
  "key26": "2XsfNhtn47q347CaE3yMcammo1tsML27HLderLDpdPRm5F54MY7UAZvSfBBzsjGi8KokVkQpMQ1DHZ53BSxtynvQ",
  "key27": "4knau5DR3BdQ1FKoiEdLs34UJ6jGVy7S151UeEqueUZtwJbHVcvxywXZWfhinrBPmNo9J8jxr6NT7UzQj7V18ZV1",
  "key28": "4GZqbVRtC1PKAesHM7u2AdqCQ5Jt18LQe4v23A8PJWsRh1ENZkFpytyr1W7NbWZwLxB99Lu19rRnUboiJVHx8jS9",
  "key29": "2KCcZia4Erq7TVNDvNRwsxr4LsVE2gshGxaeoZQGrmu9RK9YsG9VF4pi7TX7YSMZi1ix5HvnGRUytBtxi2UnWnWd",
  "key30": "Z1tmKPQNMm9CF5q9N6wbS6MYcxB7SLAnJo5tyTq4XpFewaMBNFPnE8G9JJBd1XeMEbh9dsTUNWPaLVzSvvvdskg",
  "key31": "5g4zV3BemmNfceMBrLBaj7JUC2q5FLr24efHxW4dD8w23BgjeuvMWTtpujcfsCdDFsG4GjG8Lqapo5mF63opj4pT",
  "key32": "21GK4BXdyzqpVweYF6tcNwyaYU9LPPLNuwr9ctDDt36PR3xFCsoa4mNqZKB1THLbHNfjJKvXt165UqJraEu8obSD",
  "key33": "3Mm6gE3P3ExSrBU8DUt2fKJ9WEhb1ESoMr88BGkPtcNRaUs8uARnUhcFKdqwvDsjenwkQAscq1LCTJ3ZAk4cSXv3",
  "key34": "3vt2JpXfjxJHBVsCtMnTHp1XWScwjMayha5caqd7tnKN3bDJx86MbGBrCVrB7tw4NCGsHzSdDE8kEfLs3saSDCQu",
  "key35": "yYi9DQpwD9S5gUHsiumDaszqTC13qohyv67RE9dXzcd1saRPViVjX2nqY5bAPuJ2MvJU7dGKdk7dwMLefzY4tvt",
  "key36": "66a5gMJP5RiGCMqNcNxqwfHzXVGrAnTbKNkqfPmCHmfCj9B89zihV7vmz23RXbLQL8XS1pRP4ZGDd6JyzRDys76X",
  "key37": "4bpUdytpNnQoZ4f66njYAxra9exBtVVddwh4S53QYWznUwgNNqHoZA9jG3SB51uY6yPXkyQw529cQGmbYS6V2CKC",
  "key38": "4ehu8BkoDyWGEFgAvGSffZ1QszbTiNFRT6GU5jGjJ8ahGNNUPJg5oZdoQtjCk9fLGvQBV34TukTo5xwwTru7NTqH",
  "key39": "5XV5PghYJaMRDV3scppKHwA51d72XFEzVJNNsr3rajbDofQqsQKudzcBcXxVQjng6r8zDXRRdchsicgRbHEkKJvX",
  "key40": "5uWfVMiwjR2FTBRtW11UwCzhNWWAMZxtZZQBPQWYMCtMEdnkiNgFmq3wEQkbXSmrsjorZ8qXJrGLbMUBxpyMTcwj"
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

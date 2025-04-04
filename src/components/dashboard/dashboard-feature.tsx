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
    "4UZLwHeRoDD5oDDERp6Ju7VwZQ1EQJMc7WxLiMthy8JfRY8mz1w92RQoD3V5PFcsyLunE8S3XSySkkmnxVa7kxt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2828pgEmuuAX1TxfAEZMk63q9Sz6fRbBvBWtpff96bZuRgSt7H5ySka1oZuN5QhaYLg6U47SVn4GZZcZYcUUV4BV",
  "key1": "5MVeeV8qvHVBrK3qb4m5uo7Lr8cDgvzNqnJU31RaYJuiHQzYqJCdVYTHj1WPcFweE12L6UhUbxdTSxDh8d3JopAN",
  "key2": "28pXi1X48D9Jm3SswjdkHBCKG4vygmAL3V8rQ47LyBrc24evAzqFwqo7WkXUY3WBP5F3mEV9fC5aZsdtPe1pJpPS",
  "key3": "51DzCdnb4ZvyHAEdpx2EbUiMv3j7ft2RXTaAUKDRhNz2xmdQcBgwoNn9Tv9YzkZ9ucDnKmbiNpoz431AZd7TwVzS",
  "key4": "2WPgUY6aqbDYdMckpWsLQTKP8G65e2d6KGrPifzoZVJ8XMQkoL6SSuL6vYg1ZssoxmhqeT8eT7yxouexuj3bWWtM",
  "key5": "kMBZPrceg3wHZN8MxG8gw4XkjEfsW2guGb2onzUujCRGNWDkJrs37uDGdhif7wKLVKXXJwMNuUQzb7AK166A1g5",
  "key6": "3XBP9G1hCM5GXxhdWzfqxRVTrxF2eSvNCJKd2tbysQyZGRqMhfA7pXFi6C5gLF67qD2k92KxUBpayP1hmGmwnbPa",
  "key7": "Zbjkcx7nwGSJdMhraNb545ahnF5Ptzp5Q2DnSgZ9k31xdLduZ3TRrTEw29o73KGJTtZyQ1eDqDfPhx8rPTp4C1a",
  "key8": "2kR73tXsHnkv2t4qrvSi2UVizYuNb1HeXMGut9AyoCSMEvhQd1bEp39MuYe1Srtw1qQ58uQq46aCDKYLWzL4uHBn",
  "key9": "3gTfi6htCWR27DBLR7GM3K2sNKKeEgCD7qAVw11LcAU5C5aosSFfuwfCta4SRRjTndpCCzQUYCTXjqpnfdLLaf6V",
  "key10": "4jRSY5xPXzvHj9eAeEzpzkLjENuKPJvRied5MQWbTaceqpjeAyDu4GLCurySqSLdxQf24Xj5DpFwx5fr1Z8N5tMk",
  "key11": "5g9mbN6EKUDvAyhfNdASzvkKry4sfCv7BhuZTRFteeV1bVJjUyFTYBkSyta5MbwVQ8nuBmWYqHmjba5JuDXnyu15",
  "key12": "4zM4Pa1waD46NUYJuZ9KzrtGPs5YggWnf6q2fK9StESzgztdQgUPvHprnbw4K43DiJ8UXyggaW2n1FFqGrKa7YxL",
  "key13": "4YwheZLiPXDGtK5RsYF26JQSAKZyq7Nk9PP9Wf3iUrSNYhf25KfdzXVFsyCh8qUJ2uAELY9r9PFZ5HfEfkPBiQrj",
  "key14": "cJ2NZzYmXHxLA9PjYynH6V239PV6sK2QUXvmrGD6WRLXV8Bx5n46GznmTKdgE2giUL7szg5GRh4jECgKKsx6Htr",
  "key15": "4b2H6YWsvLfZ6qcewTdebdVaPNguvtRoxDi8tsHi3XbdbhbqerxqTM6ygoyy38qMsYUWj8BV2YVxuLfE5e85FVDf",
  "key16": "4uDjodm1ymCfdUK5jxUJFB6L9Ftip6H76NXUvhUZM9WupmXZvA8cyn5WZt7EsDJaGnwP3ot9Uuo1rauqsvaPDPp8",
  "key17": "5EkB3y11wuKBGcGCv9fPRkWPw6HSw7cZXSxW4CzTF9eFzEY1AahFtEE4EwPVu6KZD2y1obVU5y1gSJBvqgUprCTA",
  "key18": "3wXuWk5ETQTjoWaP3sEY6pzDDWcGszK6MUxBSwu4YHXzSBmG72nmnYeFaKA2ejNHpAKxXrhqnQfJUPtsBoxamk15",
  "key19": "2LnF4wvgeU274hyK3DYodE6jzS9BGxeR6peKLqVmnDAGxKNyE3RYD4Rqe8Nd5cL4pHAVtMEPbd9kCjZjYTdXsLbS",
  "key20": "3L4qiFFHeoggZ8ySZTFP8nrqJ8g8SeDsyGLZPobKoXot4wjughQZcTnjnW7azMVcf48HjALRL1kFd1x2HjzZokCk",
  "key21": "338chrFUNHQnQsRuyYUaEEPhkj3wbup3PKFvQ2EFXVJDkJwy14LxPk2J7PPfyXMbGMdJ2rm6XdsMQm5XGdutWBtw",
  "key22": "KuwHma4EXRet9aZvFpzJtc3gbBVQiQsHfMt97XLzse9YRNdY2VbZgnkZQcVw695MoUhKNKE1J5i1swYPa3ofKZ2",
  "key23": "5JybdrLC3Jz58XphX9diYrV4w1bkYGDwpUaFZjmpzTt9hEbWxaLMDwqSq9CCC5iExoicmJEnh4ggSkt6h3ucRwkY",
  "key24": "5T2LSSwC79sjgV72jk15umqQH1diAQnVDwssyoTFVQPhvGrCDQ4d1GR7mKDUUE9c1VvXEspzvQ5vmtiFyE85uG8T",
  "key25": "2VfrFDf5UEHVPCtk9W8qs9jJrhUu1QtRfFQH3H5QQ9STmu973J1WScEVwpJZzLaFowns1yHJFqkixPYX7eFrzPk5",
  "key26": "3vTmdSXxGGBg2RSXHers2iNGs8uQWvnnoQUet716sXWWgnyp5fQfptJ4GcLpWqijGVAr9F9scCxJQXCTPuR4WUSH",
  "key27": "3B93rd37Yoz8ocSGqZEqRPsv3v8Wyp9dtgvHj86dtjdm7KW7gt6ANRePFkneyDbhZciGQ6TRz7QbbQyF3MvVATAr",
  "key28": "3qZfM7f7x9C4KsT1QKTUJwG1X2FW5r8KMUskeZwQ3BYzCP6qwCMrkfMNmCjYrmT2hqdY1YpCoG3Zg1wn2PcqftYe",
  "key29": "48C3wgEXFbaQD9UYXmnHBiPwyjiv7Q9cuarUtNCgA3Pe3qvX7rkSxYfuJtnYem9VQe5KqwU8HNQ35JsTWU1c3jr",
  "key30": "4oGNgrtHoDj7mTRexwvTghSbyzGW2P6m6RG9gYtwojacYMZg3xdXUqDPPczEDFnHXdFJK1CKo3oa3uRHFQ1GzGjV",
  "key31": "2wdXGt7asUZ18UJx5bqZp9JiUZUxGPhNEswebJWaFoAd5WCKayxbbJ4vKesnVvtKpr39uhzF6RRfw1cCPQhRJZEo",
  "key32": "5vVRdhR3T443C7muRBz7XVTTRvgaDXvY9R4JDVTSnLqeMVDAkjZT1go2WMvWPavokKooe2tCPraEEoz4QTSsZ5WB",
  "key33": "4sk8YZB8VXVBDXkcuHnqwnbPQrpqxDmujxaHExQcSTxP9ZGbbgittmyYNdCJ7Dc26awnPys8DcsRHsiVqRcC3Gf6",
  "key34": "4py4GvmqZ3eSrvxhwHBaUKvNQqemBLrEmVdn6JHcDjJgQsEafPmTcEDd6UmcW1DBUohm4Ma29ricnudS3BnnP5aa",
  "key35": "it5HFMQq2edQjDXZQBB5AQHvEGfq1fJLxhRua14F74HiayeR7FYTtdkgBrJ4rMQYP176RXEGexMDgPG44MMf9Ea",
  "key36": "66k8fnf8cmrUHdXBaCwvNHA9EQPpnDJ5UNRc2oZRb9yizNV4b4G6mmZmyxCKBwaauqiwfuNG8Jrw5Dc2BYnxAY8z",
  "key37": "jL3ywqGjEYMueEtT1dHZW9DJ2NCf9Fr6nfMzGu2arT8gxKQtB6p9qbFwJPBzdXW3eG4hdBdtEej9wDSGnw9dHPz",
  "key38": "4o1i6KeB9mcNb87YPxhLiRWFXnf5Z8UrBRQ59hPQiJEMM1vGCTq2716RHQbN3PgiDFMEMUEy4RFa9SHYH7YsXQtC",
  "key39": "2VCksXGG2BrnTTKJ5s2Wuj6riXs2zTyLisZiGjSbAYS4QzYoUhhNwAEH8reSx6wVeboMXnZEnFxKXQGHV3CVJrNT",
  "key40": "5ZXMEqi5cY28oVPeUf5cfmEAdCnxW9egZ5MdXXoSTHUtR2fzH6wVRBqpNd2VNmr6D36knstJabgi2qxFq7zUzzkS"
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

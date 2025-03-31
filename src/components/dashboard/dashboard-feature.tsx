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
    "2zoZHr4Ujgridg6k1HzpyNSjyJrD7vjZxL3nHnfadNFw1ZpXnR7LLH1yoMrtuHWWsgwob9QXPadjqvGfb457g7aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4awoZEQHW4F1ej4jCdJRydSbzTqGni3qtSnCm1ochvPdxqdnc33Epu5VAG5Np1LKPJoPf6NXyrnJAxJtTMyqxyeB",
  "key1": "656VGQzXNjYzV5WcbYz5Km4BK9yYVdzyMhNFfV9rGMeJnZxtMmrnHHfHayheuM6aqFv2QWdPLvCFhBzDTKxZyp3B",
  "key2": "3TbvdaXf3grLXij3F2Cbg3zunbbMkFqxJJGEARainxCPZ7JrjTksuC6CeT2mKYYxxBZX7LbeMz7fVJ5mAu4ppKUi",
  "key3": "3rLXcHe3uTCVAzTC2qZ81K6oSyqfzMCH56YfEmKR4zLiGrAAYTCsoyVqtYmx2BjpyD2WmJx2RpBdk89pqE34CnDE",
  "key4": "3CSd8n6d1bccQr1QnnhQB4MuZEzDhmx3PX5LYcpuimYUiMn2P2eLpSehA8n67JuoqRkz7aUXGEFqMzmPgbUPuhbS",
  "key5": "DzgL38cVW1K1fbRjn1osgHd2ewVTg2DEPVacwaaFAw4ihDoQdA4sK6m6obMsC8cJJLaTyAcb2GwzdiXoJYfFPke",
  "key6": "2rmZikjesVD7PU4m47TREkHBWmzQnmo5YGkrRTVyF8SvdGnknc9uj8kvcUb1ivXF7sHiG6npF2dbrBAprE9otuts",
  "key7": "5BmgPUubuAcfUotMH63pUBXBXZ5XxLa4zXBs7kMajrZMTUpx4npr8HXCi2Kd9FZBuqrAKkZN3HoKRNAdaLXNcxCa",
  "key8": "2BJGg9pVRpeNy2YECF7ym2m7FssvKz6DS9RDRtpD1ufY7iXp6Wx8cMsqapztao2Xokm9PpW3a664wW11ocxpWijf",
  "key9": "5nN9Kdb5QnU3iHTVu4Gph43NTKVDDuqEjSyFVsb1c7LiWydgzfPBmM87KmRsJrn2GhxW8yYznmiKCfvYa42jxNEh",
  "key10": "55fKTrPULPnqEfJg48WLiHhB3iSsMMN7eJN5q8VkDPmyWzpMzQJbh49Y4VSgY1bnWtBkvk7SWBBhBkBp8EGHJ1o8",
  "key11": "R8XqYCmQKydvAJxXf9k9cuYgdAT3YaqzezWYkcrTAb2xxDtpTi2GwqUWM74LrLpEysLQK6fCjPBbr2yDxGisKKv",
  "key12": "mvMG9wyD5Xg5MaZV44ZgNtLbDE2CX4LaXJ6vZdg3oLPSmpc4TbCfCGkXPPQYnajuu6vLS3N8k3xb2BLNUCaAwNU",
  "key13": "2e9wTrg5Gxgfc93WG9XX2q9ULLPi91oGL48DDLyQqZMpk63d3QtL8CuzwsRKhnXB1Av13bBuNHX1oeLiVNVDq4pM",
  "key14": "2X8K2XhtrpfHmfzDQA6cSvqRUsAEY1BG1S2pLeMkvxHTMqReBQM8zZ3bgt2zgUF9333FsimsPQ9koiyi9poTfT2b",
  "key15": "2L1Mrqy9pPgHYrc6MpMnMST57pWr7BKXxKfnXqeGq9Tq4uPbwfp8fzBtYeBa49dSwfBvLUkdi7Re4nXSZbRuG5Gh",
  "key16": "41TauHA3r2yEsGTbmQXRThJ3WaLtqJCiKV4CLcsT1Mygs1nm8JGLpHg9xXtjVjQmAfQxs74uQ2FzFHdGUMiBjdwM",
  "key17": "ESefe9WuVGDBKf7rsjGFbWoxfnZB1bCgEwizocNaP7WyRuitq7BeyUKnAfruwvrYyypEQ4wV6mTGkVRRGjswbFd",
  "key18": "5nENi5pWtQSDvfcVPba3EbtLxHDWgM9HSASvf1Fi68UaBeQkumWd5Lp1pqnXY33NNLhHxuFFg7L34qpkb7Hqw7UC",
  "key19": "p139a725CknULQXqX6qyzBowG2fT7TAUKWrAn7MezjvgWere1qo38oHha3Dowm9HyZqyXBGgrHTUMWgZXbhxWZw",
  "key20": "2Jff581ZZG9YK18ofACoTZCjukZCivPaFAFckfogtXCPkHk22fw3qsckYWDC3FRKELzcZ1hamPkWfd5G49Q6oXHt",
  "key21": "3y43SZgomyEE9QofKj2RyhMDoTH2hhjoLA6VYoAbcTTQPjb5eBDRfopFczSrswXvcekGzUNSwoZv9W6nt4dhgXhg",
  "key22": "36nw2yjboLL9pPSyV9m38D2cMoPKnHfLf7mK6rTGxCZamwpH7Dw9WGYfUnPfwu6ZwaWEY6CPoAksUaeJw8JtkEPg",
  "key23": "2mjjfpatUgKDPvS9qjAmXxLUqanGWnPyM1A26iqgsn4KxTMNgyKCRpjQ3o75zFrTUHtesRnRKZ81Kh8GxMQfq3iL",
  "key24": "5Qhycv7Y7hdCSUE7oiygUqbt5LEfJ7FSAsUE8vY5HdphQKat7s79zkb3g2tmBDYTZDKbh968ATxw4ToUoUe5RjKF",
  "key25": "vDm7EmnqxRovxWShDijd44ZRZ5obao7FTimuSJFrgzkYnPNKCDyani5hTwfCaZYPbry8T5qdswG9nKrw7sAe4KQ",
  "key26": "4gcnCCRDoeqBBvNAcH9SNoGZYGZJpx81xfxn7zwUNDCSPJYC4E65k3VvykL7HyvWioji9KfugLYEWHZ9q6BxoMs3",
  "key27": "fXCc2vBoDJJFaTrrHCiUrLLYJGUukAHQ1J8Vkwb3xSHBaWT66EcjeP7XBJYqEXgKS9p5r73v6GtVsezsTprao7F",
  "key28": "3Vf5hRggfy6FknbdrZ9Q3JvjU7f7z37sLPp2eqCMhqkc1YTrQMg2QxD1v4Y5ksWmCtWiQFQ7i44fa3DvjAf8ZcE2",
  "key29": "3tE95iMUH6RSGjsozo8Bew5FQQjFc1Nt6qwWNbVBJEhstyRDyfF1J4YNGq7AcGVk9o9YrbAg3YnGJNTtujdw6KU5",
  "key30": "5P63iKevRsHQG3NB67rLAbfezQ6GEB1ZjdDmq4wyiQTxCxmfkkvZv6kuVJn3aBakTLQxgvTmDzdj6ioiKeg7J2jD",
  "key31": "3gRphwUNTUDLzRkgqv8ry8X2QSAchB4zQ2xjZeLpA7nbXBzp78hN55zapYLFa3rnFFo3ZDKKAZwL53XcznRxfrE3",
  "key32": "4AQNU6RJwAUTYPFzfV4pNkrFro2Spiz8ScmDxbnDFQwT8Mts1D2ArEH75mytGQTGXoddYK9gqwttoyFoA9kyBYy2",
  "key33": "47xdYVBKwveKDhphXNMAna2PW9hk8Y1nEtU5PWywvTB1wakBUKiBkuFn5fkv7M72yUMAjLxYNMKnpvQnscjZgBwH",
  "key34": "5ZVsYPXpjvK8ZgGTMWBBmGzwcVU5eJGQGsncR7r6iEFFk9GxbazT7bTNoJTwWqU5ABtxbdkHR15kesn1iTTJHCHw",
  "key35": "5TGWe3gknXuxKwEmeyYmuUK3k48eQGW2ixPb8vyv24WAYj7x9NEoB4YsKuUBqA2zghtASTDeFyFvTuhXcuxKvNjU",
  "key36": "5aWZBMdemCNxnBRkKJsS7mfjLcu6GdWiVJnz7h9Wc6cm5wSnxgWVksDUNeWmdKuy234eVdYJ6Fw6YaDRvJJ3LxrG",
  "key37": "4WWXAjHZPbTi6gbSK4uFzAC23YX6Ss1udD9si788h5rYr244gYtztnHpWx847fypTSYFXETMNsbLP9FvN3gm5P7c",
  "key38": "3FyvqM5vSvRXwnGnrTYedg1ZiPzRsZHa77sy6giZn9VC5uSQuTkBvx5Zk1uAxaif5Gm3L1vwWTH65GErBViHrF9J",
  "key39": "24bm9HmeCiDrwJud6eMCaCViQZTSWjrdpNDQ2dD19uQpjcyyPZUKVmpQN52MipHuEFCR8FTMT4CAqQC9ZfQZdbgD",
  "key40": "5krpGiVHK8qHJ9sqQfNk8omKZm1p5oRrUMMZfxiRogEWbAm11KN1NvpmkL6tbHYqUnQYtXFmVNoUoWcCWo9G7qKh",
  "key41": "3rcxyitN4q74o9rjeWRW1g6ZsPBq1XRjFQHEJDjtLBozsfawPVopJxgpX1HUYQuahSAyY6EitMSaFhZGndxfZDfF",
  "key42": "3ntPEkcGDghsKsvtamDUJzGyNxBnpsktQ1W51nnJ84PCnKGHuQ41Phw1d1FE92MzAwHq8BrVdG2GvUAc9SyGto4v",
  "key43": "2qaSn2nN45cpMBVKLuDbdyEM3ohR2pJ8sFHGQLw2F525PJs69fZqDQMfj6sg5HzfExR8WvBBjUXNYA1q4Gr9C6tw"
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

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
    "4knHpywEyCkg4iA1erqfrwsJKXKfx1c3142dyQzP5nwBHXy49Cjup1T5QGPV1JMofosEmgXRw6gHRdhatH5j5icm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J5RY8fpGVmrrsmCTfYkWJxSZ4ks6kZExq9Eb2VWgjMghdqjVmNDiLp3zkUvMghV9mpget35yJnngVL72p7inJNr",
  "key1": "bugUr4R7MjS8MC38gYa3pHD7NNqe5EcdXmWpmSJB3nLADM1tAFhUCs5chgjtnGAbYGwgfBoo1hUd6yCJ3e8HJTQ",
  "key2": "y9Fgua67FQHn8YfzM7Sp6qJxQhipBRrppay2VegxNUuvFWypDnp3KqZPHwTyjMzT8AJjpBsE3Lt44jn1r5nKhxR",
  "key3": "3qtZ86GJCoRevGsAzX893hmitgwQuZHFqZEbbiLzaLJNDg1rNqeD3cWFpey1yosEJrJHSWnejFWgKXixbVDvXqcD",
  "key4": "2SgyZnMYY6LXEug3nLRvFL1Y42WsXfjagFv17nT7npsRxsDpfRBowjgqCoRKjatV3g8Szqb2YtjxL7MLBhsD4jDN",
  "key5": "XV31kEFw68N1JmgWzCmxeF3mhUkUWa5KqpQVg5gBPTjpS2S3jgxVL314xDDC5psTLkPNcVVe2HkT9vyy7uCmyWf",
  "key6": "tbLqN7WFLmNVGakH3xKnoMy98qmZxeHvhEa9TCxexQtXvVg2aUmQumQ2xcXxEV3xupmUqeq1UHnq51gCF9SumWE",
  "key7": "3DFdru1kZ7QJKGSXvZNiU5do7hcZoqC64mMzXYqovQTy8RkF6YhPX9YuTDv3p2Freg9ktDdyq4GY4ANSRsc7U9t3",
  "key8": "57vwB78zEXNyEnkuWxjZg5vfyWbXUXGwAAaQPdZxn91mygeaCA9oCbjBpz1hpEoocxbUzgS1QMeiE2vhCD9Xxfr5",
  "key9": "2bAsGJ9LFwtBFSZVPbhUdNbVfx99Rf9coptnZBwstctujE18J7KuiqHoQBAsNbYg1bDWDqLcdsoYPkcbMw5ww65G",
  "key10": "5amhh9RnyFvwt5sExa1JPzvRNQSJ1Ci5VKtQsTq5M25ZyNJTS3HTA9PuSzdgqCSk3SxhiVdk6y1G4tS3fQtrgeXC",
  "key11": "5qiYTQEf3ePP7XMUcAMQ6FCiT4ris3xDpiFVtmxLjD1gmzWaY3y1m6GGs3UH5bP57JSZm47ZGjzVJ82V2S8xKDBd",
  "key12": "4e97vuHi7zUBv2t3fQGC9gL3BJVz9jq2MeYnTzJCtYT8ecXsq8H8T4NQ6vbCN1mUHYZMkPXLquJwKaQhJquXqBiE",
  "key13": "3uD4BicYNk1qVD6K2svJbGi3tQRyFH19ozJKmrxkuVPjvBJVgvwGXa8TEKWYVatTuDFATcSXtqzPRibFx3Vt2KVP",
  "key14": "3LenUZ2LxgBYR73XrvWvFeHW3zPMmjiFFVnWoPSj4b2VUkfhWzyo4Ve63bh4HND9VC2myZqaJnajKoQctAGrrf2r",
  "key15": "5MP9zERXEY7aVgpP1uQLjjXwisrK79tnDq5pcdtVPFfKdiEuq4KZMAoFUE86aPR3b1HF3R4ASY2BxnA9gE2Tp9pJ",
  "key16": "4zUeDsh5VCrMq3SDEE9GLxY53css6nckmnUhR43zGqqADEYHKCFmvMh2yJWjjXKByAte9TZrfhk27Lw4LaLNAtga",
  "key17": "273Qm4dL5NfMYPH8PFsGD6z3Zb9RHXAcpFG3p6SNNBLbWgenNKG2R2aa4KASPjtWgDnJNGqhcAbX9xZriBJudFA7",
  "key18": "3Uc8szweDdLMDAdpfTZ7MTopvEgKUhXv5R6TNV3UPdJNyUd4nRmnjbPkNxSgqPTMiMweSh8H2FeVdUp5CivQhogm",
  "key19": "4iYkv3kzRg1Fdb6EuaocZRjgCBDRew5Eiq2DD8hVREu7zJMDGayL7w3wRHFW7BBLoL8uLz4pjsYHhac2uwq57VqK",
  "key20": "XvyDiCxKY4fLyWhvA9kXPNwRgnJFvuSSq5R93xAPQQhcu1r4BxkC4UEcTWoq2g3cTTb6Hpsj6dxHTqojC3Ejjat",
  "key21": "3Mhz8Jj8bX8GHWujH3NnBjTf1Hy8TvtRCxsXjmV7raaPM1UT2grPMN12dXqqRWVqGurYujuz4pgbCXTD6MYhMGmf",
  "key22": "1237NkLuoxrmQYPX1WvTnisr7hFWpqCTitntt8Cus1c7G9CHW3V6aKW1KGo418dk9Ef715B4PuhpNJhAWhW6wJ4e",
  "key23": "5Swx6x5e5dtq5V8sozZhwCbVrmzbULpD1rkDC6Qq3HMP4e958iyRYg9nYywNrSJCJ9f8njk2CNVPht1ajdRodNAD",
  "key24": "2PPSTdvbuo9jh1CTvGmJqMneMAr3i5MsuwW5QYSdsruvwEDSEPKiNKAHdWKYoy3zsoYnqqjA9eQzJLUa3NSb4yKj",
  "key25": "2XG8uie6uXv46GLudEJQaeLNTd4QojbtVTjNkC36tyofPu8nbFBLwdevNAbNxAzMmgsifownCSavNGcHJSWfhgxy",
  "key26": "3NWEbnQdPcp6pcQSPyGP7hbtSyZUtSGvmGeiy8r1PFB61biztaSbUUyU3isNnXQB7UMdn8MyYAmhLxzc3UxooWo",
  "key27": "3tPmsfPpiCuWnvxEfeF4xKeZA85vZM8zPdf2sDN7Uc3njLe7VcasiwPVA5DhdvvGrx2yUGm8GNs24mNxtkuERjvt",
  "key28": "X6iE8B68EHsiqAyH8QJC4T5xLXPgVM712m9uqdQDDkeAJPrgUQssmLAPAJnghgEUBHqt2DuTAeBdvh77i77ZQFc",
  "key29": "59xQwCXDKjg5W719B7fm89LGcxiy2zTzioqoXWQrTAYn4PHadwebf33jhf3eXECZJcrpDneY8vtWuyE2FyC21gk9",
  "key30": "3Xc9v22PFMH7sPZWgvWrkvs5ykeKQPpGw3Ztjd3tcgUTpvHbqLXG59B71R32XiZs9e24zmCWPPnXTDeAZuxLf4Gg",
  "key31": "26XGoGdVahpnwTP5QQyTnH5cKeYRDsgmASXwBXqFkGmeRLq5DwpMaQVUURn85cuBKEf9uZniorWPzpdVAFcFiCVn",
  "key32": "5gABck5xJo4TjjjGYWA9WvtwkQJ9y71pFUpBszeqGjg7iEkW5Mu9BZbZnQnAXwYymUywQXsjtxW3Xw4peaqurCZU",
  "key33": "4QZPUYJRmGqtmW9XFrPhfzSRgWj2N85vrXTdFKpW647nr2urwMJMpamSEwDEfWaTwB3MjwtWSpyBHVV7z8uGELZ8",
  "key34": "5nsWHS3sxLWs6MpCKZCyonegszf6Ge9CS8qPAUdSb9Xugr39En7VnBk6gu18jtbxFS9zkhpdumjzNkLav68nqV6K",
  "key35": "4mSAzKikSxswVP3XQVQ1guTszxGAWxoUpbPF2pk5A9MMZSaemxzGi5ZWQE5H2EhDRnWbBmPrNyKnpUUxVWyQWxc",
  "key36": "4BFVoGyLXTKjw1CnHEgQKGxjAC3xtYtHMvr2nXt2npRUxVEDp2afuVPueTtVDVApmd2SJPn6hq9iiELbmW8ymsY7",
  "key37": "4EzkCt6reDMXt4eUXCxaeqjaG73AhnJt6RStdMrKiczt2MGJnK5k9pQFsw3Kftpdu5SsQUqkJC9apLdLE9aKnY1K",
  "key38": "5GjyvbtTseC5C72v1F2eo7EMMqbu5BRYzGV64YinWknddjQuVaTqdbCykVQ2F13G8Rr5k5iwJkAQfRtGTHV99fRZ",
  "key39": "oX8A5kBHWf5yGYHEfowSezZG95KPPZ2VZQdjBsVHGu6zguW5Hc63KcfTqhBvmrz122p7pTP5LZHBQx9gnZaqxeh",
  "key40": "3WfAX4jwaZ6pCenqHHnwqZ2wVkv4MCg5R394a8K1tcKrTQ2F2XcF1qicahWRrsLm7Ln7dV6gFj8rnpri7xggK94J",
  "key41": "dLKut3dq5xJF8TNaRyjequHSBwghHN91KkqwpEPJGZbwGhSvomQE8HRqPaTMeiG8k2WCtoGzPzGBeyxhgvjAN6y",
  "key42": "27ApKrjvMmGy9jEpBz1DkJPeXvP2Hz1yz9Pr7HXFjovqxVx4uMvCErKU5zFfxVB2GHg9kb63wwQKDZ67nEjmPNsd",
  "key43": "4RFZz6uCVA2cn6eUkgTCDpmva4pYVc6pz2vsoQXD7dmaB7aaTrP1QPLNQoBVoyquoNHuLpDDaavsGwGDRsdAKg1U",
  "key44": "3dBznUG8eTdC16Ezv7x2Y1FH6QpAe8xjQM882JkPY1qrKS1CpVRjW6goNGjxphmXHbhDzkqn6iK5trKzLBbSTMuZ",
  "key45": "4XMn5R7pQGW1thtNJdxQn2r2sgZTQr8cBkCWrLqNPZFj9Qry2Tu8mG1VDVGvaWyFDVzAekwYod9icWyw8kGxirG3",
  "key46": "3PLS4ecb12bHCXMSNFVfXSh3tb9nvB9sKeScgD2DVPoybFNFjjcJBiMJS9u9j8j6gRBLEK2Didu8FJPLDrgNG66g"
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

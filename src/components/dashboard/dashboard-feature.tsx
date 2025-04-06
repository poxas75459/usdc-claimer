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
    "2vrfFpRAiMsNpnXzkkppZxDsEBZ5ssjwkxCPTwZfiVZWsNsM79RsSz1LHDfAUBZUw9GMpwM8DKaCv7fuQ8EY5TLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CSTkJKG5hYEw7UWYMcT2F5higfq9rPnbzN6sFtk2o9XFsoXeKrHr2EbFZPytvN47Qo1xdjpmBc21Pn2eTVMDYYT",
  "key1": "3hrLYunuebr5rmA6Xa2WoRbE4DbPik1jkWEGGH1c5D89FmF44qyB2DanrusoQUP91m8eimb96yd7ebdPJiZkhhMd",
  "key2": "664KJs7Z5JnnBFscqvNyxMv8FmMAzBUs9db4xpCb49p1ScS16ve9MMzf2GS2HddRcWtSSyx1hSkYit7YMCbcVpHx",
  "key3": "4QbyXU8YkSnvTzNQDMnphDLWKH4DM8i2fkPCFW71c9kNFo2NuMSxzUnrDRBz9jZVnxyu41PKqgUHfqjVVKpjenxD",
  "key4": "zcLfPE3FkY1SJP2iUKyqjRNkNVqhSkBbtApsyCWKivwyVkL3SwV7CQy9yYHCdebrbDoyzorq5uN2L2oi1n99UDP",
  "key5": "3FBAeAtC75JDRpgpifuhprncBvs86WFdT6ZxaSCKjSeuxGAcuLvYDdLpCZgcL1zNWxbQMxQGe7af2CjLkWNUV9F2",
  "key6": "5TXjQAFxWqL1jcFuUzzSJq1LbnJQWtRNADwjsYowvyJMruNfJjgv5Nmdkg49NNJHnZQFYVKyP6GpR1EdCj4soQ1E",
  "key7": "7W5tkYgVJhwq6hv7JvjFrK8Lt6TVFkRhJQFS1e2LdmzAuS3F8k6gQAkibYFZTo3wMSZFxSS2xmqz1na8oVNCcE8",
  "key8": "4mydSiS1VyrubRczArig1fTn9pdftJ1VYAGdRFyfKqzmeFhTwL6SKLKYx7qp7NUCxfcZXYybUAWUuC13i2dWaikS",
  "key9": "9KxGiBaP7ndaeuxPaNRkGp2SstREXLvteWhhjJQNWSkxKXnH5jTaaJgvZmfSz9GmaxAxEuHLQ4PGAVHi1X1x556",
  "key10": "3suUGdQkY2B5DtD6cgPkjsrbFNXqUCCpWPdwGsW6XMr7VLHH3YnAkVA5WKgCbnAzvCS1KK6tv1h5PdhXdeTKRti3",
  "key11": "8E4k4MFihemnSSFoLgA2xqT4LjmUkgafgbanTAcXVgcmKfDnxUKdDVBASMRkrzoBwVsMbJKbQbb4QEE2AzenaFF",
  "key12": "2PtTKF3eesyr4iVbt6eMEFx7Uy3JnnviEj6pmJ4qs2TTJU9aMDA22LGXfwpydsywZB776W22YRNvrHG8WBqScSza",
  "key13": "2ZghG8vvMVX5oAgT4D2RVDtyut21xx6FBNvWKLKeAneEv3HQwKW9XdBbJAznkgyVuy1MUz6Z4WQa9dmK63X9DTEg",
  "key14": "5a6gafXKPjkTGRRLRjwWXmcbzq4a3NaqsVJB5ThQoJGD35CQMNJA5XfaHzfox84BkFs4KfockafS2QdZnGSiHFvw",
  "key15": "5uAPyzJMxQAqjNHo5cShfRxxySbAmEtCyhPBckzrh1gsdLTJzmiVMDkw1ZXK8UswfcvBmNPQ9TuB89iYnStTG68e",
  "key16": "4ZSeKv6NePsGkcYCce3rKzUXHjZqfRuftUq2S7P4ExxEGDek9MeZHL7jrCp9ox8DvECjX8yCs6TSCtpubqZc8Dow",
  "key17": "X7FiUqEZ1Yzuf3DxHznErHVafuNUE5uaKk9PzWGF7kCJzQdheCFrZt6mh4LsBwNAGhPV3rBTYN9NxWqrz4NwwKz",
  "key18": "3SfHRPaMMMGVKaVi2JZpykWjdPQFVQQKB7yfEcJg73AtX3FVFAvC2wmUozt3aKxH2Jx9KSpJ6np5uD7gcBeKowZ1",
  "key19": "36626exXw483MdSXGkdH3sViKuuS3pbE56U2mt32jptzdqGmtbidU7LbVSzpUCsseWB2d8s1E354VN4eqkUAXcCm",
  "key20": "61i5wYwXbUdmEuYZZMGejT64FXp2KyHrQtfTTCVEnozmQC8DcHF5JXRZzZE9RGPZe797eDS2PBWhgpneUBJCTqBP",
  "key21": "2ELpgHeVwXgoH6cURCpc9Re97dfaUJGFhvpHR2PrsyEuRbod46V3wprxiX15JUU7q1UmkNMCySNcHgtMScGcmqsn",
  "key22": "nA7PnVKN2FwBwGFMMw9K2pT4DPkGfRy9C2AJDkaDCdAhxKpq3a1ghpt9DKMYQVidLUNEEmpwmZY1S6YkuQbRwUk",
  "key23": "ZnthpUwWLNK3sQDEBMLDnDX2ftGUjLpDzjDFb6UFXjsDMPh9R59uJPM9tED6zNTmU6hbWsqiPDCc53Arwa857mA",
  "key24": "52PBYJiuzjTFUbLGEgAFyR18Bd3vWBJstiTD7861rU5Y52Gx4Y4Z49X1eMdm3ocxhKbzaW3HjepmTQDkWgvkNhUj",
  "key25": "3LX5jcCFfwZhhSxWwVgbkd6v17cqQwxrz7cJk7C68wLctgy1qgUyatXz1kiuGD5H2hhecM59hHze7yN9GwBp7WA2",
  "key26": "65sjsePR3dyxBxSXmg1DXBSggNEGYAHFe2ECxHeVdFL17qvXAH1yEQ7oXQ1afJia9nQuFeDVuijwRRFcF1EPcabH",
  "key27": "5V2ipkCDJQMCshKujmLoJKLVGyJki6udkkwVhJDycLG1xpLuqsFyXqeqcbtsxPcPnNs8NdMKeY1izK5TxgvRyiRs",
  "key28": "2bMbZjdo4jSvTQFCNqDL5PzQK5fufC8M6QPzbjB8UnWByaF5dJXGp5FcrP3dXYCAj5n5JeGzqGoQHC9Hh8jmibAJ",
  "key29": "2QHpGb8EN1CMNUtyEc6MwnAgrHJexSCdqpoTaCzLTBSc4W9yPpkfCDRLhsN68FzSchfPzsX5SGZx82ftYpEr2e1g",
  "key30": "4V8xcbEfRZuSdVQ4G6vPLrCv4orUJRAHfLy2QkzdyVEUUnwfkKkA4t1y3sivfj9A5sWD2SRyLzKLM5CVgeuHDgkM",
  "key31": "2YdRGtMD5W4fx7Ns1BLwc5yUbFB5FsFR69bCs64L6K6vTUSvhnNEWCCa6q5tN2ix6fmaGxXjubwYaBRvAcwSFZab",
  "key32": "4qwukzP2YTFEsTC9uuAyknvf12F6rdch5SZGeNF6tQMkNRF4EtHArccACU5Lbn9SasGZMvUButwD93maGSSjAvZ",
  "key33": "55z26oDy3Z3PmSLYyJaa4dJtvTdHUG363yURhSh53bJVFP9U9kujdkcUZsyWaTEcj8WNP8WShVdgydgLotdTTx7D",
  "key34": "4geJM1XxFN3XHTnVwwaMmQWSU2bJLBRqi4GHufb53jmVEZXUZRUty8Tv5nKNGSQcKEWzQx9XavaEn9kZcMZx5BiK",
  "key35": "4K1dq5xVHJ14oq3kvFNFJ2LvHu9GyZgtvjdT3HBFLT5eP2XDgvKornU3apTLGonRoeR57zKQwBML2e8iof83Xufi",
  "key36": "dwNpviNpLfYLe9vTXfzjuVzjtTYitUcu7AKecLBJgc7xxdhzFPqygMCaJ8V6nBsyJbE4d74U8ihPdUdtfLYWQg5",
  "key37": "2D59288FpSSZ9D8CVR8B3G1UQ2oheNJcKDoaP29X79U5284kxBjLc3xp6svaEJ2o3fcSDBNTNRGhaRxW8bSsjjyd",
  "key38": "2YZDXVtzhRxf6MMB129sgBKWKgtmj34Ps4BoTJqBtAiGZEfkcGWkgcWq2Tdpx9bXdNr2AiFbXWhQwitht5W9qvoZ",
  "key39": "3Mw2ooiBn3stfe2zT4QLyGpT2rUMhS25FYj3iQABkatwN16Djk4zBUkbPPfZrv7yJWDiB9Go7nepQiWMbrckMoW4",
  "key40": "5ftEZ9FAGpV8r6sjJ71d2y4ZYw4hEFUcEM2VqgfUhgYpvbkfRZaYpyP96hHmj2w2MjJXwJ2nLGo4j86m4QpdtUjo",
  "key41": "zActYL751mQW32D4EarLjYf4wu8g5rma3pJZK61yyHH64n7jMKD7MJYQYHBf1SoURAM34Xx3ft5vjad2kxY2sEV",
  "key42": "5MDMi95wX7dkfzwWeL4F7TnnJnywW8FPtkEH1GVd7SDJo7rbJueQjze27L9r4TsgvpZTKJFopwM84Xdp5AzBHFto",
  "key43": "5mBrnf4bUhgSvjYcYDFphyecFRFK56TLAf8oEVqMVzv8LnrPaoN3vdFKckDuzYFgfK9ZShyhTx9LfJYyEXq7bueJ",
  "key44": "4UVizmPB3ANntK6wv7rUGTyVbMRKL9LRrtefzpPXigpdGJDmsMLyBpp9HPDF1sEsSCwQsAG7C6WLTgjBmGrG7Cdx",
  "key45": "3bbgtza3npGPHGb15kJjDvqBhR4TXAWSxukSDsfoa2kPBtH3o4aPP5crTeUPTXWRcY81nLiNk9QmXnLtT38Phftg",
  "key46": "LVkSebiSkDQwNpoAPtbB5VEgYhptGNPRnA7H998ZmcEfPLfUhncE96ENQuAPdAdtBffjLagSmhyzAGq61yY8ary",
  "key47": "GGYNeWGsgBa51TA9QJHfoyJ6aQqX4yMjzGFwXF19Y7MWWGxDuPWrKoy96jL8kqmQH8ytz4UUP7RjttZrJCzaNuC",
  "key48": "3JwN7qHyDBjoKAp6rBJe4niVfoea3xcyqvhpUnfEbvXw2XfnWcHeGXXGg2Tfa1Z3Ys6QSUcKGiraHhWnoMTd6PJH",
  "key49": "5o648knLSg7WDLRPt1BZ58iMrJigV8TzcUz2EeTSGcKfkGATfoFH9HQUKpbfcTawTLVhnLbs6G3isaucdxbrnCE8"
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

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
    "4Hzqxm5C9rMjK2RBukXc7HfxNgC6BPwwRzmNaxjk2pTNDEp22RThfUff2ADkJN6jpNiLZkCBtFhrHuAh4jZmcuck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TXcr5FySnTd79hLK5JmC5DnkmC8VfnpP3x634dipv1wuc8gERbGvpSGGvf4HMqFDjf2XfhfZ3VzJLNMttwwBwRy",
  "key1": "5daJNtVygixLXfssDGXvUH8b4hXgmb3qK4RvzYxp5BF51v5gQDoGu2RK4Z9369ajjjoT3pBuS1zUsHqhQdHQ1Lke",
  "key2": "1fbHR49JiJ9pRtdYzZTy5PSHgSXpztfbHR8cWCzk1EmWe2ymzcqjuMoEfbKLoazvpfJMjcCjemtP8K9ZD5vEHji",
  "key3": "2cEcSKQjWXuZtA2E4nZDPEMgupCUk4qytBHx7VSTwRNtn42q7mo9y2x1rRXTGn8XefqSSqa3pWhDkfBKu99okxC9",
  "key4": "4HdsYWeJo84J7fWG6GB31jfoqj9MSaCo773LVGsNQ247ZDQa1iv7yVARyrWK4pMczapp22Nf6Ljxmir6mCctMmrv",
  "key5": "5Dp1eqVaDQcMhP8j17RCbCdYTcBePEyS7AsPeAvqY4nQXRUqQwbdSdt4e81hrJfh1VLeWpeAhRKmRAprMRxJCVw7",
  "key6": "2FBKCZz4V2i6ze4Ch7FHbef33Tjk5qf3w8LzcPykZK4J61zCHn3Tv1Q8fBPPxdg1qsqYpxk6oiY76fU295MG4NAy",
  "key7": "3rzNuUp6b5hKYo2XFwfZc5a72uZJEqU6ZJELPGmwMk2EHqBEF7xf3WmcpXz5bSBxkbrrz9cBAdgezVTjxiqfBtJm",
  "key8": "5vpECFpbXHzPy3QMGKgX7Nccpthzo62ZUFhmBKcYnjAmGQKRWoRmL7uMedT8K1ZVS8g6g8SMxxhXLqTS6uahhW1m",
  "key9": "4ecqtES76an7no1Totrx3jwEKnLSiRD8zh2PVwDDm1474h6n3jwPXwkT3Nvz9aZDyySCNqYcDNLRYkQSjg9JhfvZ",
  "key10": "3NknPzwjVDFfkkXEdCkVJ2pyusQHJyMTnuxMWM3QtsiDE6KrJPD2EB93JP9nity7zNbN3Q7jmrAZpVxsfEeazssX",
  "key11": "2b3euTYedo7xs2HBkir2nB3XcF94d94yoBywRUT5STS6sbuXWmxfyBRTkQMkkBJaMH7U4p2SThaK29jwNYA4bhz6",
  "key12": "2g9jksTMJh6X3st5Aix4M7ywhStAyztSzwUnDGcnEH1aGu7hDSvAaPoGSYnyAWdM8haMerxEokjcKUrwG6EkvmpH",
  "key13": "3pJhCSBDp9msTAgmTgqcetY262XR7LLv9pEjsxhXRfe2urwmAptAknUTkKY9xk4agFfy6kteNc6VNtZVnb5bnd8a",
  "key14": "29ChN5eLm8ri4yUba5uWBEPJNWyPhv3RTscZJGmn3U1Voy22WTXHyQtQBgGFJTDw7dxf3aGtWG6zG6omMHeKnMwx",
  "key15": "3WczW8VtNRHJ74yynehiDa91VGMmtbD9ehcuBoWma1tFj9BCgnC2Fkz2Jm7cScKUj2zFWrC6yr9LJmdrAhVRpQbm",
  "key16": "3KjNboBZM7pQyvGHsFT1hCCzfNi1XxJojxShgTRFL8iiHMk4e3rWns4SUw6PsPzDLqssyhy5tn7fmsWm4dEitA4u",
  "key17": "4bwrn7Lr1qRWHgAURfjg6JDFSHBbxgSc226dBB7x1QzDaNj78JZ6We8tdGGWwydRwhfNqUJ57kCS5D2eAZJ7tszk",
  "key18": "8CFzrjL6kTqxWNdB6qeTmMPHwA4kNjtJbAC6Z7TQvMwwtoNsb1Qgx4N4aMasiC8AC8VcTNYYJdkxXwoaq4bR9ym",
  "key19": "piP2jB94kW3AatLcgUZoBVywi5pj7gSzpEiMrkz7nSxP8zXroDHQVPHkyLB3uVzNSxtBTa5F3Yjn9p5Njs5DELd",
  "key20": "3t9kFcXtJjFZzJuj6ueuKfXHrD5JzGznv5syzemFKU2PkXBSghhF3qbv3AbZvq6XA3vsPqw4terjEtPy5WQLEjy",
  "key21": "31Q7brXNpFz3arKnj9Du4QQKUYXWcm89kozzJpCzdcESUnRD7g9MZDAq9QDY1BfDCQsuJDnESo2jox17oV6Rma3R",
  "key22": "2EtChbsNZATkJnUXzwRGUtGsB2LA8UN8Naoqwt9zHbxbHg1TwNZTqt8KggvKEc3V2F9HUxmqK36zVYuGhA1btJLX",
  "key23": "5TYYQbajfY51gysiPW7Tg3HXSMFjWsZbe1Ua8BKx6sQSNtdQeLsx19FkMGFuYRMzXhugUtKghgkXAyMQRRGiyiSC",
  "key24": "4EnEF3ZGK1kPK7UFNsv6yP7Xc5vU6Jrh4TCKDQ4B8THmrbXqwj3fTakqbRpvQxhmCFrHLQoaFVbpnfsnfGuruZWe",
  "key25": "3KyfAHjt1GyCrXZytEbcicevv3ucypGFEqpaxg5mwf1AKksBAfM71muPivQk8atmmJtzqFyaYGNBy1MpJqzqFjAa",
  "key26": "24erbd36SJu4t5pNA6gcvjGewzmxLJKHMd9AQRothqrpkQAphotzpZSVx8GbXGoTZVPmjFwYRbSa7irhZcBtz2Ac",
  "key27": "VPdyi6Az9b8RcQDsC1v14Lw6PaUcXjsqbeVvbEG4FCyfGJGAUKWuzYpfruMYut9CiG5JA1H6QPqZFf1BshkiAJU",
  "key28": "3waKdH2tGDk4cpLUBzBrfS8Uod6SWysjmDyGHNGZzLJA3gDP6y5RYHtgYryU48qNoioVsu1YyygRnkcXzqLfKayj",
  "key29": "3dHQMsz5F5MQjWw9QHqyi8vi39Je4MRsAiUm33eAgd4tpKcwk491kLmKSqW33UCFfzEWhF1H32pmUfUXPcFEqwLm",
  "key30": "css9ZZ8kmQpiNrg5CrSq4kKCHuBtDLgAZpeMcBMxYYnaPZeAsQ1MHRkTktVac5WeSPfd7doD7CWqLj84JhVnK4t",
  "key31": "4opWVKLVGpAda9NfFbtoJmT2VnxWup4YzPHyFEURGJWtmTyqs8WCd9xWu218YhCRjsUWX9RwLUL5NY5XnUULfsCx",
  "key32": "66PzLt1uBvPp8QjGXv4JZHUFZfrHMEtEQT7SbVzKeDWe2jzfSEVcHYPuPnZJkcWCTY3btuXMbng5fn9JNvpEok6a",
  "key33": "3V9XiHBBhg5V6ozeS9Bb65AtedGZUik1Wh41etTmX6Yj9ARr5fKLanDHWucjErGTeiUCuPiJ1hpoVinvG4eqL3PR",
  "key34": "3QdhqJ1CsGsYpoDVtRSygCumMFf8aB3ov7512KVBh335cQjZ4LNkTi3mk5yVwpT3SC9wnuqfkbmgt6EJUXjoasWh",
  "key35": "5JjpzYVzzaLoigFCH83ntF8yzh4ChML4vwP6XgXT8tQDpfkEJjCyTtAhmbaKEVxDNrfLqTs7iPzXbG1xbCZ8kbNW",
  "key36": "2BBTSsFWwYsvjLzZc7tcY2wXVdrdMPBKQ9nBjiw1thKB6V4CUgaoQ1dxpE7DAE7yGAkuNWXEbCLYBYZmwWfZJoew",
  "key37": "4GNtEyfXSNZ5Tv9UZ4UWYG4QYGHk9mK7mxawP1NoR6NyRSq3byHnpjukbKsgJzVpsCf8azE3nRuRk1qyiucKFsHM",
  "key38": "5UvNRFZbgMZhNSdYPxVc16QqWUy29YwwmMd3VgA89ZJewoTfiHTGnaQ6SNHFeY9fM33hNoo2CpEt42JAiWQtDtvt"
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

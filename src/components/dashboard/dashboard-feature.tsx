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
    "26JkVYnddZqycxdnRSxVeaa4xjZ4A8ELvKWWodi7N1tPm33KeHdkUoUeEawCztoRt4pmuQtBd823PxTqCiLjZXVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pg9q5EmvhtY2hXvLLGY2esvHNg1dwc2JT9Nh46wkNJqoef1xEjAwEFd76Jmw42tm5pgLDmGToaGYGDPbGV6tbZU",
  "key1": "5SVV8gMfcb4mS6XBdVixPDRspK3Faubp155PGhpDL9grZ1iMfgZEBrX89DMcpiCRKNurVzjB1tx6HpYcVPiHBaij",
  "key2": "4FUeNdDVDyJiTgjLSscssZT5C39cgwHWC5DUfhm6fekPS19Mbjj7YDf4YFdYDhHr4J8ucuyMwBDeU42rvhf5uVJR",
  "key3": "4rqFtQFn7ggk8vZK9GwHuQUFPvtDh4tJHTmKRBdhyfwFbfki741TzPMqsUZYyDWfjLdvLjxZ2gq9Xv8tuwW1n7qd",
  "key4": "tQFjync7yTXVeeco666zS9ok3nTxtGiRsCruDJavQvcfnGW4AeSRFc3uNyEERnB8TXmaT7n9yfFW6gZZF6h62hv",
  "key5": "4w6yaFAEYL4HT1i4Ac8rpWdutDSCwRVwpHD2vDYECtqVJfhsf3ruFKA3v8tuC9MxcuKcQHT7zxdzG1nw1uXZZ4Br",
  "key6": "2pn4Z4pSb2QRRWDNr1vVGWcz6mzqnP8vFxJjvcKNZAZ24N9CBWNSm5gxEs15M9apP4bifxpSEgRtZhU9KAcQpxer",
  "key7": "4sNrvSWqgCDQBMZDXk7rLVaJojp9i597fnzuJZQiqtKdmWz7ZnQQDwRcYKNRpc8ZqVwM17j4LWGkhpVVihszG291",
  "key8": "2LTn8PDuAAk8ydkRnccxY8BLCTkHK84V4WQgrv6Jm4V4qYTiGAaRkzR9UkYAovYc6dUdRy1MgNvuqC6siSoy4Zau",
  "key9": "qVERSEUBox2rFhYSVMpovt6E7nWBzqVjkoon1uRip3FaMj3iHQALaJv9QJ8mGvCRcQcFFPLPtM9B4iT75Wp81jq",
  "key10": "3UQZ2SpbYsMx4T6mq5RpwXDhygg4N9hGjzNXe416z6bUu43H6LCNCvrkDrH2VvfxJZgfAcCqd6CYntyGJAwScH7b",
  "key11": "25jByEXpMUAombB7djd3JqJaJuY3HkAzNLNkc98zYmNws83XXvESkYzYdzomvNYx6w5oUCD2mfmuPtrCVGMwtbnE",
  "key12": "23j4jdgat1xDE9zz7gb8Uu1P48MhnzDQPuoPGBxVHeTZbUaFzACVMUetZrMb1jGEgoWgvAxbb6zNfuw7smab1apw",
  "key13": "41wtZE71Rhhcc8ntFGivXPJP9AVueuznHpQueP8owpoFKBR2iF3o5JsRbtdWQLSkTEBtH5zAKnUfcmfVcRG4yCK8",
  "key14": "5hNgMiqYTGD2xbrDSpqVcdp9Xit3xD44pYzZ3Mghvny8GaaLwqv1qtyMKAV6kmzQn1FEkeqQVKhAkFnjee4nK7SN",
  "key15": "4s3C7TSanmRzqh5aHSznXzWnU53v7nUJSHd31nFeEGectYuKaPiQi2U64t2pR6W3cdntK5p6En3R7p99gFhwXjh8",
  "key16": "4eU79gicGwwGqwudd2GEHhkkENg951yoWpJ8EhD9rmU5STXCBdFsLPkT29EqHXWGDnsg2TdpyT4Ub4UUXkPZtjK",
  "key17": "Q4pB1pCF2z53ZXBR92FiA8pRg9Dgux8T1VGL6A2H4ArgSfLAwxxdownnXvr11tCu5qhisxG26sZg2bLbzzcx57j",
  "key18": "31jLJa1NmXUgFndyKUahv1TKfKGvL9atX2vAjpWar8uXpm4JQRdvFhtUrPsVEhSozNnPFWT1Z8pDX8uthEggJfu9",
  "key19": "SQFWs6tB11VCbPLQQ98aZipCNgDZqbkaNz7E4RZdB5ZkNgDdZWoyvAt3bTv4SWoTkyZactRsvgGHEYvCY95WG25",
  "key20": "5xku4ts8hwv57rGdnQvA6HqDPv4tU3q9zriKTwGbSSgdU3fDUXcp3Rut7xrbvPMRAyFu4RcYst4zg8JbNQbitmrA",
  "key21": "2CBWayGdamBjL9s8h1v1BEBYqiwkWvdbtA1PLFmvCLPPtYxaweck5KmUGieVgtkQjVMoakXWgtZwq4CWsnJTutq1",
  "key22": "3fxvrupEa4spsHNt28DT6xptNkxbF3KpottAqonNaMxhbYNgZyZFRDEBwgKCX6DJw4A71rCwSPENNQuErGgonksq",
  "key23": "67KyW8nquJ2VPdNoPiu6DMYnhXShDkjt2T7RYxoDLAptenv8dkFH9e9d5LaGAQc6nRpiecds8ihKqorvrtE5ioMA",
  "key24": "3U8tSevz935QWnxS2DgPBZuCmE1qciFuX7DiXBrwrd5f9FsbmvujVJCX7TJopQeqepQ3LR5gVABh8MgiNLMrKDVp",
  "key25": "51w2hv8iuoDsMk4riSxFTptAKmFU7b7igDZxwuDJJYtJ5ij95fNLSpBxnjw74V6W8tyBkRmK6caD2T5uM1Prf1Cs",
  "key26": "5nPnfZ7Y2bUSenwhbKpNpBBjqwn75WxVakfceBPUn7rTWY3kuaeKzmAcQxkhnrWuWVrPnN2F6NUVrMDqUoh3VBiz",
  "key27": "34gehbrLf5C6xGuUcHTXVsu5bLn1sxUz5SNKN1mhKwnmU6utpPBD7Mj7LSbF1xdQbFhGrmD312G4pZ9Zj9T799JS",
  "key28": "4gUESokZju3ooBhzHY5FNsNAibQ57jbyNhRCF8uzogeVqxsX5CfvaHoh8mLDTSUj5yjfuDkSd5L8b7Hvq4qNrpWL",
  "key29": "5nsZ3Qn11zTRZkwj8Nsm1Me7SHpDEoXRBq5YEq4BWmz5nAxAKrcPrTPB4tiJQ3oWt5i4azsZvpDsZQsJRct2ms7G",
  "key30": "5RJ2CxeUJsBdK1Wk6d7qAHqkUHm9j4bLQjkQCZ9odSBGy3gazcNBaD2tnYBpBt7eBTzZCq1YXSfa6m6UuUGwgdNG",
  "key31": "4CS6o4hhRsqc4zBzEEZyadfse1SUtDZuj3aPNJodTfUe4Sw61CdVzEvrWLW7mZQVPFtkxt5DjF6vx2CtkRuvA1Xr",
  "key32": "2tjgLLCVYGu45YkrAXTnaQwajjfpMXyYzHK8RgiUR9AsCtjwngUnmVeLTkkVadSZkxY8p334M3LDHym38aR8RwqS",
  "key33": "3AneqmWqNP4vc9vyeTtYcGC6GAo2pb1dRu3Zo9YXEjYAvZxSJagexES97F8DP9uQ2yPC19y6YgD5po9PvmYc1Phv",
  "key34": "3JQJPexmBtV1XUVGP8knmXMHn6F4HiT1UXTqse9Vmgao1dUsSJaYvjjxKiYzGemdG8M1QspG3dNx1eLnda2z7qFg",
  "key35": "Q39ntJ23dDFBUZKKJSyKbcGY3mJE8yi21GXKX4D3AwGBA2sMkxHBjMf2dHBDDZQD96gVXEopyy3NamMEd1rYb6H",
  "key36": "4jFDmMNM8b3VAda1Yk47ZSMu7eavZUxR2PUuBkXBsLe9FfTC3yvn1b2vPZJirHJF6eZhw1ECuqyjpiRk4r2fpoDz",
  "key37": "3SjU84AeajrGmQ2QcbzcTJUQ9dH1v2L6JubgiLE768EvCtJHgdVTiqwXKEScHHgrj5XaRvNyBTzmmv4Cokn6HtrQ",
  "key38": "29S4Jzqz69SHeTnqtBzC2xMsLpvyzUBCcAiEJ4wGvbnZDDspLeUt4s6NxwFf1VNM8RY8f7j9kMCQ9jA2Sw33EXpc",
  "key39": "375YPwFjn3qvsqyhE7HnyCq7TqRW9psWAjU4osTVk5Ray8bnudiBnQnxrPByeBe3hHQM7ZJChD86cbEJ7Z8bpc5s",
  "key40": "29UVS9rfqTgTCxkj1JQiwNYo6rd2zdEEj4b9vTWHRKAWokJp8uz4DWQWZbzYVmgcm6ma3RAeGjc4JqTdKbubpidZ",
  "key41": "2R6XCakXp6RgsqJwQXJ2ecs8oWehTjpZL79ZDA8tG5t5V4KDxempGuQPkofY8mqUU5T3aNYJdXeUuha57Xra4uJk",
  "key42": "4grjdp3bNNgWvqzAUuj6R3zmskFq85hTLkqyMbg3ZpBWPsuWsADcB9FX2tKYeJ4JYQ56M3SNkpgdGYugZtRzo1A2",
  "key43": "Lyn2ELJBVJ84eZXVkoNjnmbYCd89apdmMgwmMiYr3qw4oVkSajrYyLXQjQTqGswnKXfmSi6hSj1brVz7u4PoTwD",
  "key44": "4AWS8oGHiFAefom3aiLU3r13ABC9tscidRGerJbWdLXPBbm9NnwvAmSN6M3yFwRzibS52PQS1Aq8RPJ7TiNZRYBa",
  "key45": "5JqgXUYdLQvifLpLrEhS2g55EmxJRW1E9seQgvvpDahgxJ4EHP4A9tzEz4pQAp7RPrbqpZA61MtUK17DAv7Mumye",
  "key46": "aBXYRTSeDLRKnqoDg3KDLxJB4StvenDVnwHhNvDuvExh6Dhiy4punuEQe6zwDwKs63ToigL22hYi2VubxhBfdrT",
  "key47": "4jHP9B5YBpZqWDAegh7X9wBSuChQEsPEjQEdA4uABrrd5oMjZAhYRM6EYK3VKm4M5uQZFEoQYUgzTaWYR4dSkW9U"
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

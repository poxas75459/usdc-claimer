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
    "3iF1UnirABQXt33Vem1b5qBZMrT3rrs6ui5SNDJzEoLoM5Hf5rttZtC5BeZxR7SGmoNcEQGviqb97ooTBJyGqaPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59oVHqw2NiJHGVs8dFn1BtrQeHtekaQUekiQxDcDLjpYekBemH2ruU95yKdL7dxVGEFHg1A4NDdcW6A87bKNSLNC",
  "key1": "2imbCkB7MJc51YsSQiEc6Kp2i2ZinVd7ALxBYjLE3Cyb5VFhYj55A1LReDgdRWW8GftVUy5rMHSAwEJdMo12RooK",
  "key2": "5MZ5D8bkPB3teE4fnQ8Rpb9bs1aJyC4osKHM1HxuVtwGoy37aEP2punmSZuhcjDuZdWLKRRmuDvJjAaBvuEoNmC4",
  "key3": "42sKMkujKbJJhD7HLbswiMFyVR4nbDpWjoWumLbHghwuCuLnQLRz1apWjoLZA2YihYtpNfyuLUgmiZ8UFc6rLjuQ",
  "key4": "5u1dD9ZDR8w2tgar8z9Go9io2NH1xChr7khhckHsNk1MoJ9pDqmYRDvi9VKTMwsoWRWAPGLAsHMJ33UjC5gcUYNQ",
  "key5": "62E8DtbZzLXd3a6LfVNUH5mxfXWqua2kzgbPewMDhCNL5BF7ZsvRDH3Zv5TtUGaYeGUv3KkqFFn4JoGEMdayj46N",
  "key6": "2zcafr61k2vhHddFUECbz7xfn5fNrNeALGLYi8EAHFgcdQ4RqKAbZAhpvFsWe2LPEXmT2AAw7xWgL9FbRd524H7q",
  "key7": "5SVgWWJJ9f7NLY7LewswXWwigzFsmmvGzRJYUd3dVUXvk1rNkpukkn8DizBYDqCWNwTaBVF6sdF4rhUzSDXPCBTu",
  "key8": "2fZs2VzoVt4HpxinMVxcfCP6qvu582uc4EJJGiC8gniCe68ro7oFW7r1adsdiYhYS94NhYvodPisQnBjhJpdNHFW",
  "key9": "rtPGLC7hhiXo1jf8Jv9djH7veADH74mUcJtuuX1zyDv9ZpBjnjTv9HWwXq5ZfmW9y1QczJ9HFooxwpwrUq9tKBu",
  "key10": "5KsJZXGRh8JxW5Bo9VJ1pGXdGyZe4jAgAYFdPJNU291KeUFCySZkN9GReaDSUGBN2BUPVFgzo19j8TAChjS3Ygam",
  "key11": "c6eN41PDAnw36iQVNY9VDygzb8JFBYcMgyEdkvuV1qgKqSodhUzkCng1M19AHKoxSrVjZEzTjwLT2FgtqRLT2Tu",
  "key12": "4op6ZtwYELLK3DXB1VQaeCH4GFCvntkHPHxd9siP6u9GUUKUMKEUzaK134etBLQ22ouQVEbiDm1UMiFJV8BDYicb",
  "key13": "4F37uapANMYL1CUQTGL34czNX71kmfpJGfo1w1ANfhSMeXcFeLYNowsUrCMMaNVb4Si359uvbMpsfQoogeqrZa2W",
  "key14": "5TWvqDM7J1vqP4V6Tn37gmAqEQYq8dFTxSd4fMS8ac3Mb8aL7DTzKY9jELdV3Vc2QbffQkUT54z7bY2CQhhbLz6k",
  "key15": "4sY1vJ3ASFXCgzhAWPCaFQ4zaHVqSK5m9ACSzYtK5npFvdKGEktn7R4dva6sW5BagKDfAPymqiiHtZVBMxbfZ3d3",
  "key16": "639yffRcBBY7FadkQMwifyX9vE38sbHQQBpB2uP9VjPQcQMP4xD81HAXKtrcv37ktSLkgsVASv9LakxQfPwwMkbk",
  "key17": "5LZtxQjHb9Mq1CtgAGJ9jXwpB7SQU1VHZHFTKpQ1d3QrgtXrydem24P7pFCQEGRi1k153JXuxANPx5fokZLVvpqT",
  "key18": "3DQUHxTMPXG9qZ6vVZnmUQt5EdMaBAAPwsU6WFz6DRgVVmXmCe9rkQczYKKXJv2uUzcZUwLh57aJcwx82Yzk6AA9",
  "key19": "2FDiPhJdofzyGYY5rfxSboc5qnjLvv4TzDRNZnxrUxf1e9AEXCBJf1TtXqZwF3SjtCuAPXX5KPNSK3kpGxpXJHMQ",
  "key20": "5wNqSkd98ZhyDESnCPNH9t3QSDYk5i2CNGDnRURARYmyRf8fSXsXx46huUD2abfHNegbLsTsfqHzvHqTdz1yyH9F",
  "key21": "8e9JeJBEbHZ7yYsV6s3wRgFGWz99p6vPNBqiTKqdGGJjYgR1VF5UhWoHL3geAyNeNLFdc5yKxMWbPRmy3hCXAnS",
  "key22": "yQxwMVLcboeE1oStGssE6c9VNqQy2YQgtHnHDiTx13Ps7n2JfXGaxF5Mwj5RWrUdvQtRSLqcxAZFJBjg9ddAZ3q",
  "key23": "4Tjch4fLpaU9M4ipRJ1dmoqARycMSUyBd7u76cdDeT5uoWJKfg1MyXGSQXJb4GPVUWo2BosYaX9H41nb8sSqFJvi",
  "key24": "3XpDWWMUTarguesVB9rbAQfVajsGPCnBFSJg3qsgArFcXoCMHN7tYt9u3ePMp424my9qErErEv2GmY9msMcyB8WK",
  "key25": "262ER8cD2Y1XHbHGYvY2kNBXiWKwqsNc7YpUUsXm4TuTYE1nTNdTafq1CG4pXifABy5LMMP4aYXCGUhQHKXA3Wed",
  "key26": "44gMWCa9GgDkBQctrura34Fwgpgqf8aaJurmQBdrpYvzfjqaTC8HvUKBi7y6DMHeT2Pd6z947Tu7eQCQ7BpN8to2",
  "key27": "6E7dzWRGo6CqRwRp1vZhMddicHAwV7XKbbmReWNbURha1H89TgmRPRtGGRQ5AV3nn4Hz5NDSKAoA5Hu6RdprS7a",
  "key28": "TUHq9W3EXo8LtnZ95TMAd1egCSQR7eTqwbfsJhqmoL9mghSWZ4TyQPNhz4Q7ZVYUo213ui3UNxop34SHBrzRo2H",
  "key29": "5ovyQen1ZCtL7PgH4x7RRHSRAhjAryLgZTSchMiJPUhVFfHqEsLLoAcE6NCViGXmzo7o4h3swbEoftiQRJcXVDRv",
  "key30": "648ZVr19qxpaKFTY23Ri3aDFE1sfTF2SzVch1ogUUNg9Eza126FWDNNdgm4ALJAmQ2341qEbDWz8TNt7SqsnuXv4",
  "key31": "4DjrNVVVfcAg3vAJwzR1nBo4EvKrXaUG6QAcbLEcpSBcg28vXspG37A7tQfEh6U3zxbvuvt76kh3D862WbUSytW9",
  "key32": "2T4tAZXQ3aGSw78qvh4t7ouvjZxYjbfwHEcXR4JeqANDqUHKFkrh8ZY63dBNbSrzLxng3xGAp35jpxAZmuvtCpxA",
  "key33": "4h8S3qw4EMhbSPZbxU1jTdW171j3jsjmtH7QtS9jt4RxS8DofZnFqBLnatXiHsdxFymxtgeJEBwJ4osXs5c7ab3F",
  "key34": "2sr92hrnAHgUAbkefpQn9YncpMn2AyiqHHiAfv5zbo8SKoHk9h6pnKsk9Re5XonKN6DUEAX1ZwG5bCiAB3G6SzJH",
  "key35": "63QiP9cBdxUBmS9wXPHsAf1t83AqfgEoXvwjBi3DBVaYfKyLTT2qJkodBPgxtfC6o3YHoj1Amf25MjNsssG7UqZ8",
  "key36": "HLFT5GJTx5hB72WTfX67tc1NNZLPcUeyRRHadQBD9ywCqkvfyypEmgjt6F7kipStMPHngQuyVb6gDEuoXL3m1jc",
  "key37": "5yaMafx1RdaG4niVxWNHvbXcMU9KmB9gfJTh6SP4MVrcxxiVACWZGZur89ekxtSLa25dmKiRG3vWg8SqwPhgwUB2",
  "key38": "97fAp83Y1wvc9tCQh1CtxRRdKR1jVLNf6PdBUs4hKq3TX3aEJ6hos4M4R8jwQ96nfLMdJ3rs9Fzm24WeNshryyA",
  "key39": "fr3qhJDqhePYa8L7Hdb4ZQ43D6eExdscUws6WyXv33PYKxSghXHVTXJAKFFzfCcUKYcNNS3kbS2FeiHTpUH5puX"
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

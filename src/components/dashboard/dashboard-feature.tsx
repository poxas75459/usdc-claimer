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
    "48uTGD4hGrgMbruGsYf2fcf92GXVFwaDRjH6UGBQz12mrCxM6LrYeWAyuYMJW6djjpaBL7Enzpe6TzMHRTTy9TR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gS9mjh4GsNUEsmWBJrbGefHF9Tij2Sb717HNYk7JLzQc2qF9muT5XSTKGrUrtUqAGx4dAbkx13MgoiREzSLMa6x",
  "key1": "5PtfkYqrYKvZzafsUWVa4Rk1Nq1pZr8h7wpivjdgTbwUh4SSnwKSWdUCc3WpEpVqq2xyDYGuVEXfxAgYWapFWC6e",
  "key2": "2zaH9Ss3Bf5D9TZtceVEekP581xWYFYu573YvXQVRQ5SfYc1tFKk2F83MgV5fHhqzLXshyYxR3gJgDwt76DC9C6h",
  "key3": "4EMGmY5uWPioxnzSG5VcaWkXX78zR5ym7fXmFHmXAZFP3FTQLKqnzTCenwavJU1Y95mQt2cJTXmrcFqPezmxQ5uc",
  "key4": "gnf5pUqQkGcJVXXMhXonXQtq7npU6YVLD9LUTBk9kBDeMzxJsApEd4cfMPWWFsCxKG8FuYaUJegnBXcYxgYEKTi",
  "key5": "5yypMffvXjjZhr5Lsv1qtahPE7vcQEdpVQVtpHEUD6LQZD2qHdDPZgXmGwYwGReTYBCTMEAnGBnaAivrTbx8kCYa",
  "key6": "3w1e2JRDnsTzXD9pYDKujtdazNXfYAB4VFhPtMESg8TmJU6V1bNfwoSfwLxyoBqVB3F2cXsC8zEXqTvtWJ1eXsSc",
  "key7": "32EAxpez7g9enNNDS4qni4661JqFrZf6y6E2aHbAyVu9bJkHv4J8LyC5NJstBxE6LFgDUbj1jGjeQ9QY68EUtnkH",
  "key8": "2nJs14o2QbKfSgXewBs2sWnzxeie1fgqCY3U8JVhzy4AvJCxk9a5uSz3cypPhCogkTUqPiWWLWnjyV4xuBr1vHDj",
  "key9": "2SVLyZ3pJTHcp7eJfZrhHU6UGRUUV247eujJXLuhzgixda5g2nT7D6JyuXpeWV2HuqytuJCoS3ATNFXiheE5fJst",
  "key10": "47zuKpY5fksQ87wAwDZzuadfRgRPFDt9w1L1Y7A7CKnik6aVWU6PxUyn4mkikmmz6XoHCLaiPFLduFi4KRiVqJBK",
  "key11": "2ojY1hy6ECy1tbRCzB7f4rAHE67vJDxBcBVhSmRFJttjD1rRQdZ1nSDGA71jRRAHxg5yR9JvSdpadXy6vuUdGNQW",
  "key12": "VhzU8bijCSFSvKdNVpPEEXpHK5mrJSrctKGREX8zMMbcVkz6tYy9FqqnbTttJ3FFYbpbUsK4RsZtViQiLxzB5XH",
  "key13": "5Spz8LJ8RbWNKtGqAdrJLx76HfQbBCgXwSFWFNE42Tjswvm2JHrbWCa9gGZVchVHXAK8uZXSH7bAKMcqd4KJoBwc",
  "key14": "5UcSHziUeNg7dS4ibvD6471ANg5EVs8wy6dF9MqwGrhRAPpgb3z8LU7bwgguKUfj19GRUXGXWrsoMCR3Zz5aGBSv",
  "key15": "515awuyVsZHHarc92XnuM4TpAPUD4CnFbm2ujQ6bHFCJjdRTpnz8bC7kgYSxotG5YZXjTsQPC5JZTa4BXxsfuEiu",
  "key16": "2VfawFey7H6EEDoeryVQBtnRAhbZCGmgDXSgL8tDkBB2BPZ91zkMmQWcDi3MrhXQ4kZMXqDcdbYXoVKjNwkedqy2",
  "key17": "5ujqaYFJUDtZKzy6Xrm5PbX6rHnDBNmqEBWpvhJmeBFModtuWWZTGNJhBm69eCECmh1bbXPBjt1uRRkdfa6mWEor",
  "key18": "2CVy4a57ruL2d6J163sVikfpskqtUB7gxTUv452ksnfbES8Rs9kEeZHoWpPSn6MMWbadLkGVoEHqzE9AP6CmLY1G",
  "key19": "Za4tKhLt91Dyi6wB2WnU6qHnq6BKApaZ9ZFgFFixspn87fi83bCRrErev3wfPaEuUYN72BKvot9ss9gPR55VPJ1",
  "key20": "21gGNRiJXK4ETKpS2i5Jxxqhod6Nx9KCRCbdxmA5e4uoZ2TLxpNPPhXHJ8D3e1opyWwNJBzevZQJwUdWMQRvgArg",
  "key21": "n6wgt6o2UcYEtXoBBeHNA7ntduiu5vtx7UsFrxgWpJEiR7bo7QnVnqTDki7inPrpCghHxPtRriX9wfnGuEnDAy8",
  "key22": "3beTSH53FWPmQ2R34a4fsvMh3pGo8gPJgvrK7aF3k9LwV8vRfygJzoAh2rkgFTpS8vaXTCN7VcRF1mFr37Dg8yE4",
  "key23": "2tzpvoGsVYP4zD4s9HM5oLdNqKQR2VVGNM7j4qk7gAzLTS6mrgKETP6jCvp79PMbu7V1y9XhXFZP3y8yweYAPwPK",
  "key24": "63eapYT4nQhATsv4i9do8mCBbSymxWpoR5FDAAdo6nyruq55c9BSxojLhkZbkBdPVtS7xRKaocZRUdY2suaZkwuB",
  "key25": "2jZfhz8Uz4fSBidDTk5fgmmKVkTuthVh9gKt7iVQ5CRcTxt6k3PEsJpiSXgws4NhFGjD8qLSP9v9eytTcuEU7mcz",
  "key26": "3f2nuep4N58jz8k8zwM41VZWEEh5U4Pn64pkTGVfiKifwb8DefUZ5SCqFGPP51BeS6BiYeMxZoYMycV7vo8KcQNX",
  "key27": "4FzEnX1Jmf5o2ZWcSiRZ6SP1v937Q2RqTXCGmcJMEyXuJwwZVAzhJeSGCgUPZnpHw8a9N3cuCnFJC9D93UUWHvnH",
  "key28": "2GYV28dyk1AJkQ1gLftPSuc1FvsDWYtFLfAadzQ8mv8HHVDGRyVFrvw3U3fDJHK88AFVkjfzLwQ5ov5HXUH8duBS",
  "key29": "2FK2XP4z43zYXioaSEcDCvGP4xw5DW4bRwFsbzKxaGuHbjVTu7moDeysPVxPUw1CEyaFkUGkU7FgyJi9XPuCdgXt",
  "key30": "3EkuHHReBKL1V88QW4PQPuUo4FeavRMxnhf4LR76pEndzJSgfgequnp7reJ2Lfj5hzqenE4XmMHRsPMYDYVkTGCT",
  "key31": "5DPYsRr8fo5KZYggA87pSM57RWFRt4YKbxGNZzokaXZv3HoyZVUGt5hYsNCVrRM5BZ5ft6LjqH9SWKtqzPfKmaTC",
  "key32": "4KrXwjqb7dBdXpjFC7HT5ngSF3hWAhLp6QPQuaF3JNk6EYdKknnNDaQH2W1ebXPss9qAdmDoS8AcsH96dhoYkVYz",
  "key33": "4F7jLEU7TCJUC9fc6eCvEySbXgciVP2qbpF3rnPatYAG38iDzNz6Yrpmz8Xpf2GvTAKGutKGEt2BsC6rhhjjcYXo",
  "key34": "2KrBuCiaaxwECNwqEuJJxbcC3L8iY5FvrWRh6ckJ5ge8ueYvVYuiykHSRKFcqQ2bTHgL1hk86SkToPeaDnBydjsQ",
  "key35": "2kmE6saK81jNni3BNxTe6ZuFR98P1VWx4JkkMMxy1BYiKbUrMq13yGXKhejeGKy6BaPFaYLq2UU7dVgcvHLHre1S",
  "key36": "ogDAifoNZfKhn4SuGWMnzjNCBpipFrBuzby5osjmxjSWAs9R4ZVfPDrdpFPj26f4zy8r1TbgZHz2KUENzByqALW",
  "key37": "5iqbCj8NmiYm9N9L4i6qGQit8ugtYZicyEwYn4JF62j4VKTRFdJ4KrGDbTPP9eNGsPZBuxR5DqDWawnN5oCLE9yX",
  "key38": "5QekhZ6fWhN2pxBHzo3Bcnf9Brmmfrr5ZwFMoGf6DXpfBjFk68qmy9UzY68DCvd2gdAdVWYYimayNYFBue7L2ioW",
  "key39": "DWQnKai9NkroV7G3opYVPKqptbMExbAWuX5hEbRn5TAudmk4uyfRzp6PYstLtJfUCXYnwj9G9oMLruAsg39rGnc",
  "key40": "3Xknzr6pGN21L5uiwES5b5cmEjG1qF4MT8RescZY4KAeKzRvp6UAvPBd9XrE1AErD2SHcFDzdtaxD2zRiVMcWUoA",
  "key41": "iFvDwkz4GZixHH8ejQ7JEensJexwEVmaHC9t9VDpJiw2RtUVyNo3QLexR82SDAXbJSGmah7yzZtcaKuU6v8GUJt",
  "key42": "4hU6zkoVUaBv1CEqciQJn9xJBKwv9uCo6AfkeRWRyfffjbJbqmLgnp8KkwemPY8m3RtE8LhfSKk1mEe7ufMnw1Fu",
  "key43": "5ygLJ4tPR1pHpcRbKih7gULocoKUSVkVRyfbN9p2T1pTEZpfNtC37a6yQM5EWhmuU9eMJkXGvF7ZKdEaBaNGwE68",
  "key44": "44jeZEBN6THowqZu643VofNhxfmdffKkRLmiy2sgrcsrbpW3953ZsYGxzRYQvSWJdbP82pUHo5iofMELcRKyrNQt",
  "key45": "vc4XT14Z3Wa64jSJAtJet1Bn87fiotELnVkHfQvoL71BDb65tVHtxd54bMJ9dXLkAURTrz76ZgfiZZnXiLA9bdE",
  "key46": "3ZpmbsdUgJxjC4i67R1sqs8Ttr8PDQoFekXzPeP1vq7QmqAUr15SY8eA1QefVXc4hEzwH3fiPH5LACzmixkbYQu8"
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

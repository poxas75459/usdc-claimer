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
    "24k1VfnSDVVq54XDwoQLXogmxpN6STiGSZpoJhUcGSjRvw5ZKjFRhr6dKKjBUW53yDfUh9g7gh1BuwY8MBVK4WB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jrDRyoZCQUPii21xPnhdoX6hTAHYePAXsB94GJN2vZZB5oB6HRTMSa4NMQVAWW8o9PFQUW9hnMUmmc4xk4u52Ut",
  "key1": "3p54sNvDAa77kLpXcMCkxgAVr5Xjoxzi7vZGU9YUuJFYV5bmUCZZp4D93VVd6wDCH5AqZj3taicd5tf6fwtd8E6U",
  "key2": "67BXAatYJfUixsUj4XwVUs5pHWCohmAPMGrwKHetRmTpzPmm48y2i2pfKpr1iHSkzTfaXf6JpN8KhrZLTdVqbwjD",
  "key3": "2m2P9hx2P76YgofZhfCuVMpwM79qsrDR7Wd8qEGg3RviEgEPjpHdi3syuvAHz9osnXgQ88WcLrYTiowuExmpe5xp",
  "key4": "2aSKM7jh8mJNnWHMwkSnrgFh162MQW9b8iEYGkByGrsMFTqRzD9jQgv7xZvhDLiuvi7KiE6nc58eqoZvTkmR6keA",
  "key5": "4sKrRnUeK5JMySPUE9pG5Y2QnN1QvM3DY23z4G3b2Hw5hDp4mqGdFNco8oysRypdkwj8EtGS4kisEBJ8W39Yzhko",
  "key6": "28r1d77B6r4TWtYTatdYfwQBwwnyDkyn1kjRhc72yjD5FyBLe41iCaDHDxaLLCyusnAMdYuchCS8NuVn4rgrb1Ms",
  "key7": "5xQFUh11mYVrRtmVKQuwsd9rEtJdbJWhHqq7kPdU5uH1tASqXFwjh63ed2G4WXSNfzPGqCQJxgnW4g8U3AeXMjy4",
  "key8": "5bGH8H4Kc1Q8VgkZd6wn2Y1CxfFXU818cuubU5QehZoULo7JN6CNp2DyYfhjNJhjH62t8QPhnNCao193WR2uz7cZ",
  "key9": "3hdyvFp81Xc9QY3vGkchA3fFRB5CkRw2JQJfqDtgqhv9GNJNJqnz3EyusU1HCsoqXvwJKeVdvJgVPMWsT3NhRFvi",
  "key10": "6yWKcCDYedWH7ob9n9NBemKkaY4ssYRdChNvHQK3KYCJnM3Wi4DSPXb28yi2KkxbzKGLPTGMqkuXRV6o5XuC9QK",
  "key11": "c81b8WN6bzWAbippvpU7mEyFyxWnLTEgezprtYy8KcsNbg7DWycGr1drRgyEQDPo1xC1Umt6W7v5FzNGYZ6tuX3",
  "key12": "25GkXcofhLr3VCVCwkB4y3RuBn26bEnKV6NHrUzEXMvgapqB9eWfPwz1ya4jVBHKdARR7n43FdLGGMtHCUxsBHrq",
  "key13": "29Ft92m49nYkAAbQkT6qQSyHiWuFXB2rt22psDiMzobLpYqLrhrRg1KCwLxzHY978iTy3juFptJrdf8XsE2yEDBy",
  "key14": "2zatYPD6KsXFSo6PmkM4WfVBxtUGPUhzwh3uG85G3bJbt8soAAm547rzBdeMDUgtcMJTFDLBW77X6AtYHcrxaCpm",
  "key15": "5eFyZ8hnP4s8keubH7ovKVopvHCCagEkoMaL4nRnsfHTAVkGYncwg4CtnwUanHbC45VD6foSSLSJ4zb5Mq3MHnri",
  "key16": "3imkLmFRwnPrs2AmDVRpAmTjvxfpZnFau3d37JraALsgsfHxjsk5UV9hDB8xoPUUHjU2v7UzqBUfFwwg7UPQp3uB",
  "key17": "2DzggndNnybvzsnYbEJVfucevSpcWKRXwMkjke6YiHRZEJS7XcSMzthGLhF7HnYykYof5obpaKXiPrxCjnJcxRPB",
  "key18": "pWUsy4jQXMFczPJbaWbAYf3JH5MVWBszi5Eh8h1VLMYj9MwdwBoXGsPgcJtkQJ7TtyYxz1Cmf7fQF2pE5QCPATQ",
  "key19": "663UnW8d33q5HPQyyCexGVFf89c4VV3xHABrWHWmMEniSMYxjniPFZTD2rREQwmSZ1iywojEeNqkNs1jPLHJbxRf",
  "key20": "2eCTCznhABbyyZATSnMND7cDsZZyUTGnZYBHePB982g5q3QsNzVQ3zEkJJHiicUrjeHEtGUSKG2x9hBPxe8LKsLA",
  "key21": "5tqUW4CibcA62y2Cq3ik9FdFXEQwesCCNQYqgWLBEcDa4waLXxzAouSvtq1X15BXNFMja6msohNS3VCqoWbzPQyH",
  "key22": "5zips9GC3LDXEm68Xgf4TkDju1jjQYzKRrF3G7b3J1K3QnxV2HJKzovFogPfd933meg9MnJa89Hitfz5YZnPudSD",
  "key23": "2SS2grcDMa1xEsU52zQZtTf5We6hv65LiGTBDeKhnkh2SQAex2MFtcyzg9tTfbZbFMXfGoSxW4kMf1sgZpjV92ev",
  "key24": "3CWxAPCz35NT7idpGY8NibXG8kzYxQXfSXQt6nqsVTirLE64exTxFCMQFGapJ7udP4dg7ecpG7ryAwqryQzvLASb",
  "key25": "4dRybQdUMtYUj2nEYxa8oDS777fZAnFUvPgL1ttogayjdwWt5oXudxfH3B4NRtiiTdCjM894nGiwrcvQtBE6yYMv",
  "key26": "4ivo1wNQpwBAku7Zsiv9P55xjZFSaZtaikKVH4Zc8XEeqr4PqeC9ZCf8i662DEyfwEx2zx6feNBAgwvgb6QmHdts",
  "key27": "2y91Q43caAf1BKxxVWWnjdmQNbFWioGiJnVpaYmsBrhNDKzKokHdPSt1r88qh2vGCiE3z6ZfqUCPM51iH5gWG3KB",
  "key28": "5y36yEVTLF8vEiyZk4NE2tYrJtqN5Au8kQnukEr2eyeGq4R488y6vxmjUcNELEELhi2kYT13GR28z8aB7q9MWUC1",
  "key29": "511fWxCKcXP3aUYPmgrWEmric8sDxK244kUZj2jEU8vuM9WSMCdxawHJAVKBVJULrNSR668kioTCh6cXWXb4BRUC",
  "key30": "4AgUMCY6BReEq9xfkEUsSrNktv9PwZsw1wc4DmkQdJ11vXKSZdUyGLby7Dx9DUgFz5wCsPPLjzdSfMDRdmNMJbbH",
  "key31": "4HsByFvmDd8GLPdSyBXddH3vneKSvADXcdgkmFEg1WsSV1jiS6T3DofHionPGrMzh2PiKLkT8JWgpdHmdVFjwLub",
  "key32": "3xr2HgYde46aLKh561HU1TurfmTCsn8ApTjBcsK1sv6VPCkQdSFPDDSKe36fEWcMYaKGTCAG5RVv5xHHWuuj5tJN",
  "key33": "5eQxQzjrRyJuXXm1UtS3kRrWAQFvZkdWJL2qfoBqA1CfnJhLpf11TpJxk7UCogxr1ayYFjiq26amsAywk9awVf1r",
  "key34": "2UNUK12x18SxXwa5z2NkntMdE926614243FGNwHke2SX4cK6XzUF5PEMPB8REBRFAmyWzjik5vxDeaP1TNwPYQ2f",
  "key35": "3VCZPDPdfEjKrCpn38yQuirgdkfEHN53PX7nbarxsn81gm6PMnq5uB2yE9pd7zXy3ZZCcW8Uhz8CCLfz2M9sV3me",
  "key36": "5ReAfKzBFU3dWrhF5jManE3aBDaJTpU1URBscEDCaFKLRVWfXqMyDt7MheTuiQpsaWLTYVxPrjPSXtN19i9Miv2Y",
  "key37": "WVnty7MbsCoscGM3NRXSoVxP4iUPErxo7TfDEwGANRgRndo1jnqjce87TrCx8APsvg6W2x3G4hBLjA3Wy5YbD3z",
  "key38": "3nYHZmzvJBFw7RSY7P7QWU6EeMudbEAmbsfcfL9EWXb8j9DSnRkftnCuvfZ2fXmmaA7QMc3nCjTLcVnHHT3uNwYu",
  "key39": "5jTnxqY6syuDTnno4LzUniQ42sG8ZBRF7QL9PKVCeqrvwqTK2gCG7DynnFq4thwSEmRSGRdCBVUJN8BPQuheXRfg",
  "key40": "2KHq6mkdSbbVAgrWB47tWhzbnoPqLTXyRTMrA5dG8wbWgDGyg88w7AkXTbtdmBzBtjYCBzaBLkdqyiAFUA84feaG",
  "key41": "3LUroHHEtQED59nM1ytvphsciPDYgVucUioCqRxif3FDRgEHRMJy88hnxaEUaDLYNT8JuxDv99aVxoWyHpPgWwcV",
  "key42": "36AiFvJ9yzkkVyMNaTDtKseNb68FKxwakAvjFcsVB7TbHAaoAZ6r6Qf2iFp356qzZP4DzeypUiFz2KKGZkptMYwf"
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

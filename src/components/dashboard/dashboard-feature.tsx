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
    "5BNQtZ4vNvy59miQGSMaTABvBTiJYaRGKp3R26LKtLru4VTg32Th9UetU7bn1bSorjZoJTA5KrgqXkcV3q2S8sLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42bcy85Vu1pL78PRGhwUknkbaFnLqdU1HVuQJTTcJhzZH3JX6p6gE3bHmWQfGxVDLU6HZMJVNiTbrqrdneLqsrb5",
  "key1": "35ZcvNJsqFTMGseW64FSJeqRWctEWkPkrf2ZDuLrTN9DtgQW1vXi7jJZ2MFchWhj4iE8Z9tFGop15UwzWMXoi6h2",
  "key2": "C3kgrX2Cb4KKc7x382BWVeKVqJQkd7ZcUvzrNM9J88eyizHKejwWNFaBMK9bSWfe6Tra4sEwpwVAzJHXgAB5i1g",
  "key3": "2UBmLuju4jL79fAuU7wzpGixdSYQMgSasxAR5uXMYgD4WyQvQVR5Qyd9WWoeMJKuqmuzF4fuw8DLgYPtM7wTpQy9",
  "key4": "37eDWmwyoTcMaX9yM5gPswCzzpFxb73txA4jDf2fhVvCFYShU9jGWi121ifoJYpXrTGVqQRSx6XZ9VmtNSYwj5p9",
  "key5": "MGavUNbcwLC4id33eWhYWcriz6ze4v41KnLxmvFL57R3e2W8yoHGie8SokJd7o1aUyd4EsGWzYZUMXq3EmKhoKj",
  "key6": "4Tk81WuAfLjWYT1GGLtdUypKDEiDZYEz7TuFvLwTGqEqU4RH5ZgytDgvuebRG5CefztS36msqthRHedqKzULpkKq",
  "key7": "5P6qGQmU7XBjsQNGAbJ5inwZXuJ8275vnPBfADxj1z6GaRLh7FSMD1DqnAQAmxJzecohUbqyNEyhJhqyirfaGeUA",
  "key8": "5yebq8L9oxpuwpoBJ6iCy8WsKbBuvx6SrcZ9B2eHob9VjPvT9gBRi7uVyYMkGC3jJWE3LKQ2kbX1KjTama32f8t9",
  "key9": "3ukrSwMjUhNSou62NnPAKn65Y3HeFSskNaLdXWDA4JibySbYwfCvweMkxctqyNdx3KTxYySSzY8CZp52TmhELmw2",
  "key10": "5i8Lvit9Aht5A5RVm96pFnPgT5ka5px62dk9pbuJWoVo3x8obnBbkKS5xVjjPsogFsT4MSx2ieg1jokQKaK4T9s9",
  "key11": "4fiHgq9aiYcrcJKRnodS6V52AFREFqAm4HwSTHSbwkCSrufDQmdnATVeCGbzKovUrL7obahMwSD82YKuY3HLD2C6",
  "key12": "5a9N6rDx4Ki9nBkFC7bjRxiy29cvfeqsNNyg87ZyyyqriPhZV5yRREbnRTx5zdj9gaucX6LQLpkfNEgHnGyBBgek",
  "key13": "2yphUvcEiZmZ7u3dwFnAoCceRexHWkFHxFCXENr17vaihqSvGMXsmwaD64UxyonAYcah2C2ybkYfvNuyveE7DnSQ",
  "key14": "4pojRkWBgWC4U2XuimvmsjhdFZHUkkPSKThazLX5VWXjga82saJFMv55jdte18snZBLxWWCws24Davu9VUN4XHs7",
  "key15": "2iFoyRdfJ4J9p2qLCkfkk2dPZJSq7VxDJJ6QgP94X1SxwtZTzkNKp4wPcb2zTtfPuq5suwWQBR4b69T34GaEA2Zu",
  "key16": "3QWy8VR8RfUqYvqE4m8bamLufdX5T8KBNtLTZJNDsuYWGTdXY7bja7K6UHSzbuNN9yvVQqZFKUgAAx63rpN87HUh",
  "key17": "2keS5bq359WP3SoR8DGXcsyfeGLsYuwcpMjX4nHoMktw9NkuBsX79ZYez729QJCVi6a5S1i14tw1647iUXP6wtoV",
  "key18": "3DSYDFhXbvNcdqf8qDt9qk7JjV6foxNYKqhQYeZbjoUEqPrhaVza8b69pRUiBuTtWWfykaJxdpxPG67wKtBiJJSp",
  "key19": "4Rp4AP3FWf2WmpTehLmQjZ257upLsxrvgVbUSos9Y1JuQubL6j1kndqWqerRNArHLDjAigsikF2agMRzptGEY1Sq",
  "key20": "4YqT3NViFTtC3ZZ4YR32pYPmMua6p8KuE42epT23qtVT5adsqLnpN4rumjDvn9Z12sQCp58xEm7Evyh5EQ5YRBn1",
  "key21": "32VUUjoPgWp6XXQBFwL7TmMNSJM5G2tT9KLproqFkRnYo4s2VJRauoGLFhE3y1WUm5AhpKuR6Cyg6zrqMSpqqqDJ",
  "key22": "5HyjKJs6qMS3drBZy6DQfz725GuEURfM9TK1BsqnTBxCM9aYYXudfGqqvTJc8nZBih1ZxGfhREJKsayjz9ywA7Ua",
  "key23": "4THeHsnyjfhzST52cx69bE8Wvo8fQxiY17abwMPe8m6n2uj1zJExZ6fKov8HFg7gkEdxZUsJk8Szt9aF1Qs3ixBV",
  "key24": "55hRJMmmLDnVYMQqixSxfehdHCoBRNSbde9cphFPLKASdDBPW2J6aKuFuJa531GpcEqhVCRP75YGs1r3r4dT4CHb",
  "key25": "MnEyijRggJ5q7CUqBavtYhUWKgkRNTAAxyhinJ6fPr5nkJZt2WBqFwixsrsoVrcHLAUEsFuzcy58BGHvj2HMDsR",
  "key26": "3frejV6rTbeAYh9dERmpG6sLUi59CVhoZnZGPzGzCXVCxitd2dz2JqXTk6p7TKzQWexg8NsfSzhB3zv3pGq2rGgJ",
  "key27": "4kNoDeFTEiRyjY3imD4bMFvJ8RQPEtccn7nWeDgDcPgWQaL8EbUmepdYy7UvERL8kJXS1sJjfFTGtuzGTksDmW83",
  "key28": "eZoRZUksWwYMLoeMYJomeSquZtCAPUMAbTUEq7SyD3BbW5ZKJhFTY9apSA2ugPEM5Dtbnw1AVMHHH1hP9Rustpt",
  "key29": "4nBJcTEe8dsNUfWmSCoWgY2EcB5LxqAs8sRTyBD8hNpn44ucwxJZHYYhPyhQE75TCNNBH6ZNyWrLVnqUkjXMhbdd",
  "key30": "2e56yVEVu84Jt7woNKtr7JBsD62SLkDbcCoAgNavU1f97QfAPPu9JTSNtRrzrmvwytxFF8MGsXNGLKhRvsj7YWdy",
  "key31": "3jXuk9a1yzaqajNnMM6e1X11REEPKicnUiAPPWcKaTi3ZMie7RN6tBWhnXarzYdtBD5mSNezTcsEkxmsU73fAjbh",
  "key32": "3kNDEzdPd7pKxPNX5NTnmhzqz115BVPQRKCXx7HxNPNQ81PXr8MzrSgzRruam3vUS63t7oWKDJ34vLjwHP5vXLsS",
  "key33": "5sDc3rKPn5mC3ioTJmecfY1dkwk9vGNBTvFVWiHZkn6cNXdA9x43FS7pKf6BNs74sf9V4XpSB78JJz6kbSYij2C2",
  "key34": "2DVU6gjHvuTe2AjpJAmbhtHECDMX1ZxhqRrPRZdF82Ki5FRax4aNK6KzDcdKRdKCiRE3QAu7AyTjNsDGEAsC65TK",
  "key35": "3xqBZYhPYHiedCSuDodiup3Aoh6ESXFhbHRr5D8zGHAtWnsYDcE3ZHKA8SbYMUBuSjUC2rni2knFLWBFskCRUCUq",
  "key36": "4W3LgDwcAqSdrQz2cejnWqxLc9JsDsZnc8YJTh5Dxeh6G22mr4jyisXj8jLJmqb28SVZmSadf51HzcWKZu2FTveP",
  "key37": "4TZm2facGgaywRA2XGvvcs8hUKvFLMwtRJtjTfEbgVxWx2x88FBb7mbSrxojvKq6pMuUT9Vi5KTxff1QCLtvMvAE",
  "key38": "B1h14QvTZ9MVm22pxNGCu1DSMs4d2ggaoRfjkDDankN8M1EViCvWoUcfNWzAY7RTzDDAX2SYrV6726K1MLDnyRk",
  "key39": "59teKTZGtC2mHQNVxV9wcsTcdgxxbfK5WoJCGEUPvmi13o9pusqxNtWVngbGQ3SZwdwLVeymKGskV8ggoDnK61yS",
  "key40": "3yrfxk8zdihViAqzd1xEj6XvuQfu56u2pap4oiCYq9nSCNSUJJSDGra7mCFREKvCzcNMSjJykwm4CNV3ZbpwhMwN",
  "key41": "bpTVQu6pbq5YReahwjbEbZBt8QM16fgyWPUDqds5dUgFV8Rn5F51EMCzzeoZpNoQVmJvAjwucQFAB8LripPbzeC",
  "key42": "3kMpcvRJuhjRS5727FWHxQCxHSmwMcsh6XhLkeMKkeyzitGiYepkFoN3KCz2L96TAk9gRxyv4SESVVPzPV4RGuqY"
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

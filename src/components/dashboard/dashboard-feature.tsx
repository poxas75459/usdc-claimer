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
    "5XiFjKHadvMC8GahHeDFixLF3L1D71dGrfPtHjPZ9wdSLns7VGgwJedLAhWikWsojnck3L4txZea8BgTREhoepmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EcMHpBqqFks6ogau4t5NqiwkjfYavNSgGA2otNoTyTmt74MGAd7X1rDecL8p5fmgXkrPEo2SbiPdR64EdGMWrnP",
  "key1": "5bcU4mr8U6pyRqpYqiEEaMb8Soh8Doh4tCJVP7ZkLZoU8sKNwDd5TfW1kKNHNrbDyP1NFKWh53b3DDtdr5bVpyyy",
  "key2": "hnYXsH6W8Yg7N7gpqohAPQdGVcRsp8D1J49jNFg53RSEyhtjSR4B5ESTLuFLZSXFpcNsQL7WLGAKbZtBfaN9g9o",
  "key3": "2QeaZFTCngUvCvEUi1UzcZVfPZVYh6hy32jzJv17RuK9SjvrtSDVyUC4f28Gf9mCh3V8LVPkyso7q7mdm5V5pHJr",
  "key4": "43h5UguZMEjwM19RU1c9KzpMpZPjEZT5oyFTMYULUkDGKuHm6n12uNNuM2qW1p6Pnf2eJ4113UHMsrE4TNNBR3no",
  "key5": "2mcyvpN7AQpP4Hoy8jYXTp2eUY6UTeXQbYfGWaar5cMbgf6uPGvaRG72AmQQZyju44bPv6oS34utuijmZLAZfJ98",
  "key6": "oLckY9W5v81RgfmPhTirJxoqiMhbCbb9qHMG7yKCG9j44M6iis6KPDkxwLVemw2AzNYizStAGsog3StxAdw6Ev1",
  "key7": "4ccf6LqkakE1gXErU1U2kDBYDdrAmrMSEpdNFmtqkgoQahiu7vKLsFXxi8UVYsBfyv9m4itn1pnMbXscCk6WfvgD",
  "key8": "3ksuLqgbwY5qLdiAiYGfwKEWnkDVBMfFDek3gJ1dGKm8ersRVg72MUaAFM9R2AsLHiP2saGWUN3LrLKf2afHJnec",
  "key9": "DjmWfGvTDmbsKSA4GZjEQESpXFEijWVTNsU126vBPQtNPFTaWjAH9Knui1D74CwjBHFWEF54ERZ1geLhF5ykFDA",
  "key10": "5SejfGXn9ZSYwHVBJHYazNVTAuMwqXKwaSZuQh9pX1ke9RkTobcL5HSJsRVTW4BTzwguzd4UUkRjKspQkWDQg9ah",
  "key11": "2CxDgofGBLbbP1PStBtGYPjMeGFZTsAY6HgkF5Bfu8AHXzUyfj1TPCc9LMnJExHS8xiZR11dQwet72rsoKM7fVKK",
  "key12": "4rm8KBu6Uzi1yhh2y6LkZMzgdFJw9FP5TL3c71eM5PJ4skjELBuNXvFpabBPJK4GR3SNEP4DKat2KZvws6tmcVDJ",
  "key13": "3dvBXzqrZrTrVVQDfSt8CiSYr6EN6pgjAPSfJWJrGGKBM7BWnGKZnphLqBcXbJkv2iqLnbLU9bTrPgw2MAmrveBE",
  "key14": "3id6pHatS91cHycchjsQeK83Y9bq4K7T1JZnkxXvoVppzG5De4MpSBnqQCJ7GZ3Hx4n6wofzuzM9RzeUMZdzqG52",
  "key15": "9KX21aoWoc4mhouvPEMW2EDCDE2uVSojbjt4dmmahHCdh6j1BDmvB6JbrmczDLKE1MVDn9Z2Yo8XSP5paasMoj2",
  "key16": "5NngvoseKMMsbRytP9iZYeLB75u164b43Z6zbHj4ySy7JGsaFsFwTmydWExmbBXZKW6J2H4DW8FcSmNP1V7w1dmM",
  "key17": "4hvJ9Xg8h4TTrSuCQyz3nRvV2jPBmtSoWUppPMpNP6YA1BrXAF18rKaWCp3fG8NVXtxtX7nYVhLZLJ7L4ixEKowb",
  "key18": "hnQjmJpXQF8nStVe9BpC9wjTw9tpv1edLeYqQtGYad1iaP5oybUbFjZekj2jc2tabUtroJKM5Rcqahcqa1DhuVL",
  "key19": "5Yg2eotGtzeEUhiwAPcmooY4Qu2VJ4vLNPn2phy4pbtB3EymiazgoKMu4FTbRHRgRwG2JrgmJjHBzn8Qkk6SxiTK",
  "key20": "4JiPYFEEQ61VF6H8eEcQe48A4QSUGLifsHeHcvpxnRwEnQXWa3n1BJXXvjKmuSbe9ZRErE6wiKrPLf6tSWCFXXFm",
  "key21": "2jXPLkuYqt9Qa3DfUQFmdbta6rSshjgR3eqKWUcaQaJtVUEPSZvCMEa42PzbACx3S6y7FWfwcDsw4X4pSjY9N5TA",
  "key22": "2kt7Qg8MW7Q2qBddmQxKtTV6Dury2AKj565zrvAmhai7eAg6ExrYWuEnXHEmTSX5fLCBdbE6KVU5ViJ8icvuqPmz",
  "key23": "29W6EfcAy68xzEax5zMsygAaK9e31k2cnnhGJCdeCq19Mitgmnss4WM6dbQ85Yd1Yf3ktYBiyNGoRws1E62oYL5g",
  "key24": "29PgaYQoK4RdhrTGqxxJ5iYeJh9mQR1jBAHpFYdnXumfBpXSdpUZcYdxmxjCqJEuDbKnzFTckyJ4skFrJmwtSaUW",
  "key25": "FtMaZfVbgfg4hsQc33hgiZze6AJH1UuiRYQMiSrgrFoEpLnWfPBcia21nVPr8v9xpwS2GoGaHe6kcsEJseQemC3",
  "key26": "SxDvY5AqgA6yVBZYH5MgkshXrMZSwTxCEVcHib4jAnogw47UsT8JbS3LHsaH4y4KjM9sbMSSzXeh5oT8HYG5Zxi",
  "key27": "52RBWi3c4R4hPa2k6SiR4z2wRpqpkDNWjUSp69sFuRGGAXRL5ZAYTrLEAEp8zPpNygYpYxG8N5XZdm9qyMWSPPkp",
  "key28": "idtdrfvNDhXQNdyDgaEdfenCYiHHbftpNozR7VK2BrLWYmC16WWEtpm35BpZ5qr7Hfv9Mu7w9odj59TwJ1oq2gL",
  "key29": "Dbpm1pWNxG1XMKr7neKFVs7tczBJPU2Ep52YyY6wAXtmLtLyoMJWR1z9ZKKBtfDWzCHmwsW1tUL1eNMkUxMzZNy",
  "key30": "2CRNjGxsQZLADs8hxR6JcpZJeZirSpFDafE3iAhX5iSseG7PS8WMWjQrtCzEDv4kgS4uUdC52L4ePDxfsnW6pxuQ",
  "key31": "3NEZBNrxpaQ55rZuwARkzqWkEfsTNyBiQDJCnN6LVV9vNyKx6rij6ahxCHa16V1EHmg1PPpw6Fs3gSsc9L7ratAu",
  "key32": "4z8K56sabX16NMZdRPNAuoVEE6maLPCzoD1o1KJP2cxr58yN61M1tQnnEv7Uyws8CtxkxzrhMzqy3ozfKGtAFoX9",
  "key33": "4tjVUVrmAF4rESTU7VGuPtFiSQ3EqCfP3s2dnQqBHXUFGjdUL1vLh7YmSBaXeTqkNXfjxxAVv9tjC4CSvyhES7en",
  "key34": "2nnfwynxQDKX1J3sPd1K5vbcBVkcjUoCrmN7SGZJxiJZLFTr1i4vBfNEtxrsbZ26Q33xbbx88iiH2CPjgwxtJeDi",
  "key35": "2T7YmXkHVkHoeXDh4APJPp5qSz152mE3dNGfv3hJkBWdgc7am8HriFkkqWzjTXN6dsmdAfTpeprS1Pdn3e4WMexs",
  "key36": "hneBX8emyzPsegiS8Wd1p7xDj3BJqbY1ncQWzouZ24TsreSLKPg2n668SYuV9ooDGss1gfqZDFCqPj1g1jxtQ2S",
  "key37": "53GnS5fwoMZr54HpAy8yFcxqoB7evzVWJV4a8NwBm1QFGih8ox6xrfwPG2dcbTXAfEJzrps3PFq57gcHPWtjHR7G",
  "key38": "2pZ2owP2aoRxSovBbnC6FWs245GXTGEyh9frsp3tiKbzDwM8Ts5SFqGcWvTFFgqXstsWMvmK5pUnyKt5oqfx8Qk2",
  "key39": "54kWNPHGTjxyQxdZb8Hr3U2w6qHdxLazEBBkWBS41p2c9Vjj264EZceGLjno7Wz8jt1MkVy3Eyh8BDu3SnuWuWTr",
  "key40": "fCMYuouxwEKRR3vCJhPppXMZ1piCQY5hZYhkNZuX8GLfbzqZSmGwSKUcpibJqCXi3VzE6k6xHpJZ4VaeQni1Tta",
  "key41": "4GH7VvLt8SWyuxqyNFM9BvxyyGHFtvWFP7umzNPu6mVzbn7NgEW53wrWoFPPkmuLojQaxKSYRjgQh7HFiysmc9qN",
  "key42": "4pf85wXY1xeyTV52SSxFXDuoY7jj1DJXKcqYzzGPRNdtabk1DxEuiAMetoV63AR2GVzPw7zyXxQUcxXR7txWjHz2",
  "key43": "2dFR7h3hjxPyG9wEJRs35cyBPh3khaJHwtqknDiw1HzWJFJNvGrtjKupyQkbAiNfzGx3NRZSGfEEYDTphus5co6A",
  "key44": "2QC8Civm937Tw6HZ5Vf5rutqc2QnJ33SaV9siGVuwGs1gHVmeXNkVyU2BrUdy7dNs7LvuZ8TCf8Jp8Mu1uvG8tK8",
  "key45": "2cTnBy2KJoX53taAn4P5MgggCr8yg2Np61NabMcutg44JTU7hviuZRgQZ1r9LJxcgmEo679JwHjh82kasL48uUqK",
  "key46": "3dDThMtXp3MMWEhW9f5Y8moirtzZdYFRtX5oP2VmxbcRMZPCXeGpN7t9jha12fjXhEL6Qh7rA948NHEp7NGA6xSq",
  "key47": "4EnFkcPQTXtt1ZZp2UsDLYMYHmZJugHp3uAVRmShspSznE9UUuGgT7NJ6VK8Q7AwAyu7cxAvzBcxmBSFr8VYDbU7"
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

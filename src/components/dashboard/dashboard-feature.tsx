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
    "RXfrw9TaYL7uJSNQSJRUMH8CjqJox7jBUJwnLF2ZjxKTnbvvZynRqgWEX3cg6SVyTWkn1nVi58mctRu9Eg5D49w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kwCc5k55e4o6m17K4cSdgNkUGGhCr3mGDhiyXopP31kGT2sCM8iceJz88NFKx7fM4Rxp683dXmue1p2tBwDvo5f",
  "key1": "34RUqc1o7s1utuomiypFrBXYvWo4fhECG8Hjrrb4o3Nx98YTYXoUiT8qZEcVSUAmnUDSX9dko5ABRXB78vndd9EM",
  "key2": "dfBwD3LdXRdf5N4vCEJYwtDuaTUgvpxyXkKDpaZRUS1gJ8kc2muYahsyuTG3xoGZofutoPPriQirXyzDYMrHEhi",
  "key3": "3QEkFrhKYnTvCiUspD7bNhZYo7XMeQznANCQoPbkHD7z1yE53C1PS34dAJRcQVVAEJ3btbEtk67k9mHPr2naSaPy",
  "key4": "34r8p2hjRb7VgH3tVwxhidwUxSN5VQiQGj735qL9CcYoWWgJKPKmcfEMZuHmEt3wvBgfftZesiYhREExZUEBuZe7",
  "key5": "5adZMRPqbbSmTtAJJMwsJPz1yZuvkUF6goHgtwm82y5ZZoC84yY6KkRqm5N1uff7tUDL7vwPm62YyxXC9jQ6SGL8",
  "key6": "FQTJcLuthnDhZ36LyyQEE5npvs3YPD4scL9yh2GnWYaDwpW78xiFpSHbrBVgNh4dSKwSYLat1bvUeH1xBHbDhxq",
  "key7": "3ehYBikx939zqJttaZz55we6HXTmsbHDo2LvafjkEfvATMRjz3TGsTCsVuL69UoE5wxmZb9Sn3DTsZBx4W3TJMLg",
  "key8": "5EcZPEF8EndGw7avHZL2VyUYsJx4J4hS3m3GG6TiyNFruyKtutxNCmE7SzXyDjz9Ye1s51rs5oJFqTJxfnLevSgd",
  "key9": "3dA8UwLrccMyCq8vGteAkygN61uToe1p1feDTsZ8fhVhRFBeJ5UWQ5aeGA4DnrPn1aGGBv9cFRDFUZ3pNA8jbaJT",
  "key10": "63boeEfz7yQh9T297eiFEYemmfRQ1pQkAKMnxJmu1ZcUfgi9Y2yw7crS8FAGBCvSCCsrGBq4YdoGLgcYWgDqycnV",
  "key11": "3QmsA8QZwPKwruDMG8txchwsBbbmKCM4dwcKFxQocViYoUjz8QRQjuJ7FN6vY1c6c3yVikVs5tP2LNM4ocNw1oGg",
  "key12": "4vNQinxoyUXtv4M53uTQbeSTHmcJHgKZjcXk6bsky5t8Tz8oWPwaMJkWXwUdvQfkHZAg7NCdned8EJoQankcMkZU",
  "key13": "3CwQq6LoiZatgMnUxtmG6hpw3pJmj77unLWGALrnW5nbbUXH6Wb3ju6YrqyYiofSG1Z6VBTJJiDkyLLbcTNjBtb7",
  "key14": "5wYf5qeDiPFa47oVMceZcpfCc1JsqpjMVUkiMxpzLqaAJ51kReAPhLpChUAbeVFSeYJSZA7ZFXXEosBunkDz14K1",
  "key15": "3YKiWuvg2tbMCFBumHHQ8exPneHRbnmoiBGmythQ7yXwdJebUGpapfsKFyFii7XVKf4FmCQMDtTy51Jff6HxtZKF",
  "key16": "54q23RSGX6CfjFBtjpzeTMcgZpFBDecBnZvTShMiGK7Z9erexjk8XtsaNJxr9bCZruMwGuoVYWck5rP4JbLUWTuG",
  "key17": "4VAQ5vfRUKw8EH9fJtdnm7b6YM12wCr7XLueAkMzeSWKbvzVcw6N6d35dcJ68suF9aajUaR7b9p324RGFbw55Xcp",
  "key18": "TcjkDmcgwTQPNDrRyCo5n42wndsmcD6QRRYbwF5ReQ99QxiaaUdgL8GXWLxuEzMNcnKvdfbmNVU5DBDqnUUbmiy",
  "key19": "2JWEVEv1SYZ3nUpGHMuWf1XdoVumGukaKssWzgon57gPjhkbH67EugAzcr832kdmkBn3gvroidrPF7QBqpxnRmzz",
  "key20": "49CViN4g3xJu6dvfYfshkEUFHGte35uEH3b5eeX9HhYeL4E4v4fro3LM8Zz1HGjqUTH8AnnYqwQquiV86xKrktap",
  "key21": "oPHrydbWUYtJNYkB2Y8hUn26TkLQ7XkNzGq8tsXWAMtxwETwJ1B8dJKCXYWbnY9iYQxymmn7ReMGG7uMJTzF6zB",
  "key22": "4JsdtGSykd9frLTes8GXycf9g47UPeU6C3SbBd6HXcw7kaGDRdXtuPZvnanNqo74LHfizMZVRMtw35q1JG5TKM3V",
  "key23": "4Grb7KpVajHW7J8BMJg1HtBS3HuruYueXAzrriyKWhakFjhddutoqVfPLeVj9AmmeEFrXAfDLrZcr3e4mTupWFWJ",
  "key24": "4DUud3LKm4fpbPM3FqFhGWeHMNWDwZzf1MJKDJ1DR7B6JJtx5cR4EsfB6PAVta6Ndin1CyTDkTuPt1YREngtRBVV",
  "key25": "48XQudfAt5JnsEZYu7ruLDXeCMnECiUffQA8CvhxHGtMHC4DrTfgFAT3fjZgBcedZMM1txQ44FRec1m8fZPBMm1k",
  "key26": "3iHznHT4C83ZAZSYqutjTZsTwdHQTJoqfbeDhofGKgGhCAWs72VZ155e7cPzPohYRgTpwHA59JvjRYUaPxhhnXAS",
  "key27": "62biZ6BJm6dqcUvkpcuHJoKutWa2LHxWi2ShTEshLHAhU9vXHc5kWbZzCQKPCmKxgthqYkHEKNXL3KdyvQy1J4mj",
  "key28": "4v6EprwkBj71iwxvUoqiWefxRGHZWs193HBT1JFieoM5BsJmaQDGFYqKDhE2u7kfEdv9r939nJ5i9f3PXhvcc9f7",
  "key29": "nHWPvdZ6sdjiXMZw5XWjojqCCrw8tpGgDMRBKdfY3eHbnH8rjBSxgBeTULC2W93LmkZQTEXNcfruKBJnz5vGqyC",
  "key30": "45UrkJPtXLQ42F1Eya5X5wd6iHbAiguiK4dJpz7MQkBDMJTfCqPxCuuNRdtGGJtuAFWBiJ4kUD2S4aPjKMo2vK5J",
  "key31": "46gJLPh34VAdSK8SfsVnoEatNgLtfgufg7YkAoJzFee2BFjxNvNqMbUU9huRXdBsiQtb1NaURZkectb7P8LhpQQF",
  "key32": "yd38QWLyV8AjTk8MeJzwwzANSoduQhbiQUB9i5ZcdQf3Ga1PEh1NZhCPjzCSWFx7mxTGu29BsTtbhMhRKG4yYDb",
  "key33": "5PN1H5tykLVGjBtni7v5BkNUvDYHt387BnewAyJrG8CDEPYdZgTPyQaVqX2L3Fzxf8MebsKaE4sbhwge5T6iCkNj",
  "key34": "8Vm2HJqJ9duvKZzMsRjHQQBTq8ZqqBRhsdDdiMDExAZFZgqZBuoabsMKnrrKJrPy4dYDfUiS35LVEUQJ6rbD7Nb",
  "key35": "S4sNYRNPmn2XmizaCZWrZxEg16Gs8QPGPHzLELcevdaEmgbUFoT5Bmq59ASyLknCoSmC2iHKXQHKQ1YUfX8ZXnv",
  "key36": "5NBBC38LNTtrMxvJ9o7ZiEzzCgt2f1qxn7DG4aQYYtvXAvTABqhZ6nroHAf2KqezFPuW5wBGUWnCuRXCPV21wT5o",
  "key37": "UVtCX7Myu2bSMQgHZ3ZKz89TWmLzVG23Zd77wnexwTgzPktt1chbW1HVQRapc7rY35yCfs255y1s7tKwCDrZRgU",
  "key38": "5m3AwhLGgSDd74uTjpXjfCcsxtjCwKWPGPSDC8BsBGFx6J7fYzVjmPiqEisznTkgcgW2Zq9gF2ynqxXH3ypKdYh3",
  "key39": "3r5zeG2QHtbCHC9k3uBr55LM4vwTWmymDPzcheRUe1Zcxe7VZZz7DNBJ9orhZXZcrX4mHbCp8C4uwHeHWqA6eHwX",
  "key40": "2ovwURZPPqTQtjfHo52FA4L6zEzeD6eKa2GWB1ogB51rbm9BfzPcmokt6YRmMtxEwkTCbrV46ExWErcv82rGrHDn",
  "key41": "34m23TYkL5dGV5aV1XYeX4hqk6WGByBGLfUYD3LRbp8B7xWDqDSFccHEcazLTevD7P1oo148QNTcLjYKY95sZDqY",
  "key42": "39vcs2h4ow3gVgmwPBsXMuvhvZVHULwvBNLJa7LBY4Lmyn6bUuqzpPLqGUioQNTVB5HVvHhWxB9m66Y33NGT3Mog",
  "key43": "3ZiAMcnDh46SFex7x6bLheeYdmYdnowd9PBp6DWVAPZ7Db4zVLpG8d1EThFbbiQ8KYSDxrWXZmwtxovat2ZNedsP",
  "key44": "4h8f7xXUoKpDCBbDqcwdBXRdgMMDRChrScVkkCTLHvGWNaeQcsa2oVXkLEaUEERPeKkgf5A6Awbnt9LNp3WUoSUm",
  "key45": "3QnajVu2AvBpc1XtePeVVH9U28LKUNhEZ1B55L9GWCBZQYtuVzQ8M9LuCUVVmAwTR37URqyArVxyYreReNuinZvW",
  "key46": "4Hi9mdCP9pfiEypSj1cvoquK7AoT32DnZPXHdT89KQWj1CP6eW7w4cY6vD3xfbjk61qHE5akMEvr8L1S3aiSJr8F",
  "key47": "53ijhLPNqBNUhhrFixbR1DQV2CuoKUfehh4zLjf4uaCmvFuvCmnXAag4SePrShV8BfV2U9uWzjC26yABEnQzMgTQ"
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

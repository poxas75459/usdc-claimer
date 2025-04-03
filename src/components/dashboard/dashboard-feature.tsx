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
    "2KihMX5iDnfe8S2RGxrn2ccoDExa2qjd5aXSJw9Wvhmtks5yfzWLtfEy29BuHZzGc4tJ8zpvSSsFw9TZM7tVEhKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yzxwK1i2f729L1vUrCTC2cQ6dZbHj9c558TpwBXzCaPo3sY3Fs8doK68t5PoHeuD6TeytiXkWC7D88ZDorjGg9U",
  "key1": "5rwXPnLN38jDBB1rE8ETpKAU3GRZd6jBxVM6FfxusyEbuthr98ESL5TBnpw3XcDvFCATmVL674vFspE6NQnXPSZD",
  "key2": "2JZtoWHycqvxaUnQq8MuS8XQKvHnXoG1YmGW25NdX9k3vfmHXV1UfHntBcqvTC7TnsZhaX9pvVJE8ej6jrYmmZuo",
  "key3": "3inADGFEp6mXbUkwY8ZNJePrXGvciEAceiBXw7snFnx4S4FP1uLiAgL8S6VVEWe9q5wi1Fmpy6Hp1r3tWeJnmuVv",
  "key4": "5tZYtcjDVppwvRgg5PCAzjTxDdfgkzNTy3poUtVW5kWuzNZSo6NU6z8qjXWRnxbfmx8zBZHexJWBduYCjCGb9Xot",
  "key5": "5ZyDtetQFrFAryqAfbUfNewGuZsRPZn9Ys1qoZ3BMx6LghMaKQ7hFsPYcLjkWfULxvb2SmdNudWKC16FZYWSjYUb",
  "key6": "62SiGtA4xy2xtDXDW5vBeqtuDvwVxWdJJ6KGcTJNxTsqoKpZXJCZJ1LvPYm9JZiPdjJdo6ASfffdW3aDaC637vyG",
  "key7": "fHS3ZQYrCzng1Eui9ECUuCGaNhhvhq3qE7pYrobzsQpLhcWwWBZGctWEyQGcDrEkKUVTx68mb8BCGXVdpAPq7a1",
  "key8": "XnprGgPGJsTD2WdQBARdUrVNyW44oguFm1pbxvgXiHjsiesaYTaSwvC9gBj3XFKjgHC6R1fdofoKwjSH85QQCT1",
  "key9": "nN1v1Rm5YxNWeqKUDjtpTkvWGzBx6Qw1mD9Qg23W1iuKWjzftnB6Pg5qfw8vAHTkTQ2LW9R8dVv9Wuz9tdbWok1",
  "key10": "5RvGKZZ4BiJTt8LsuZtvHggvqHJ1iVCG8MbG7FmoFhmsAYT4uQJ5mMzybn1kt5xPrJq5FythFEiEG9iDXrvVpJKF",
  "key11": "3UazTRQznhgBkZ6FnWnwJv9wak6Ncwvt1YAYNf6L8jqwhzDqWVPKZtdZqqT8Quyrea7cuGBHsmTPL1aWxSCHxWKR",
  "key12": "8aZqpebgUwmPVnZBgCyhLxhMJqq7v42ir8b8D1jJ9KjLNmUhkVCBByupmuKyRkcDM2cANGZ979eMjsg9uodnTZT",
  "key13": "5KSV4oxanbKJTTN7b4U7po5QFxpRdYUBAPBxjJTd1wh7PJBezcH2yXGkbcheDK7MctFcxuA9JCjfLnwrWhWPBDMt",
  "key14": "cp795jTzhFJkdALFUwTaMhvxR6Mqta2kAW4xS8ugEKz7ernPqeQsEsTKbb6nwq3ww1bGGiGttARxMiBXY1s1YiU",
  "key15": "5Jz8nPveVU9655k1fjaTsm5Ee5tyGNWuiSQMsmtuBCujHFSHavyDziDdEMLsakdnfVUSC7F9bSZNbYSppbZB75mX",
  "key16": "NuufDPDXU1hea2Cx2nY1KrposQRXQmvTX9Kc7583inzzcKKwDA98wqh2sTUSRNJSEC3bXp8oZBNGYRZeBEXy7zk",
  "key17": "3EYjQx4oLMMJ5NAgtomB9rT1nMgpWHRC8A8NzJpQHqEjoYewv5QVVf5H7pf5cswTtBRSaGDpfJdF9TVuV3TpzgZ5",
  "key18": "52JBWQfMeo7uVuahJYKerkvj9yuevP7BJ4nwa66tgpkkUqAdaDgDif36PEcuZt9UkBxJECyirJnRKxUC8K8cCiVe",
  "key19": "2F92jyYqkaTbFX64kMstnmg18CSY2DMfraQYD6HEqJzxTb6wpDTz6HFDo95Zj2DkiSH1oLRgUGd3mqAsb9z9oPBh",
  "key20": "5rtxMw6oTn5nEKLQN2dmHAvt23RkKCvuCB2zdyfqDn63e3EFo1wTKQFhdTZSXQP2xFfQ43pcbS7GYSj7ESfPCEgJ",
  "key21": "35vExukxhYM7bpE4VLpzfUpmGDGYzNTnTwVLpk8EzN7qxdroPsxYAeuo6iHj74YY72MGhNkwLCj9DT791QxCa8G4",
  "key22": "618pLnA4d6HHFmFtv3xQG4AjmQsd81QRUnsst3QaVAn27JgWQHtohtdZMCfskiTjzWEuRfnPbsHeDEDpb6GUyuoH",
  "key23": "4XwHPKA4CM34P2qMg6MZixV5txxQ5Uf4GDFZLejpeikdwWieEGz5B9ynnDpCUoLkU5tdKprajSLf9uji9SYpQRh",
  "key24": "vTUWnrfJZvV7qRdzWCDWQyKb4qB63SmqVP2wMQUofegP8rQnpJ4Bs148kS1ndVhzextzY46Y3X7wV49JqSEZB1J",
  "key25": "BRPBcy13Bp2wb8KmzNNDsm9sLhf91Mpa1uXBbvjwmyefbm1FVPoV5rwp94uEt55h6FgZRwxJZrx7ZiWBdPJaVNE",
  "key26": "5YM95B86gFz1YTogBFPudtcqRTYFYQUvpo5qt8M5zo3rqHsu8ZSk5wJCAwffeUPgoJZND1zv3bwG1sBedvbKTb6J",
  "key27": "4o4VhbTthV1XKA5DRA2ptKNnZohh3DkNy3bpxxAc7enU8zaB8y8CFwqNHis23y7zBE7ER399ZfKokmxAyCTyRWyY",
  "key28": "2o5dF8Lm4yEJQKF3CJfNs9FKGV128y7DxSfA4FLJ9GMH7ERChHAKW7VHCfKe78Lp667MAuDCgkyvHX6k63CgR8Tg",
  "key29": "33bNmywKtuGHeQdcejPXUpko2gNFMcgWZyNfJHcdRyMqA6i4gRYtmTZAb6WDhk5n7rQdwiJBvPYRw6VA3VT85fnf",
  "key30": "2cooXAqH18WAAXnpbDcrAMg3KBS9WvvswCjvA95fR97iw34pp6Z7KNuA7LkhVrXMjVnfq5pcWBwdJ1Kzn79zgpLP",
  "key31": "Hxzc1dKudnoy6hKwSXimHaohB8kzBnF1m3Q3uRVR69PMoq4BaaxdsF3h6pbnrpdrdw2Atck2ffafHY6y6bccnYy",
  "key32": "3rMgmDuD7eVb7rohUq4NGwF6cpvjP5AfpncpMkuDJD84e7fGDqx4FbszJcZ6C4tJHdkdXg2oX19Zyu9AfiAhWDeR",
  "key33": "A8ZidRTBAJy4btx6msES6GhHsXP3WmdrvPJPjYxh3metVDcvp7bHxTGVXPjNsQyfeXiUqm3HBbCj5qVnbVEXt4x",
  "key34": "3nuZDBdDkC76yJoSU4RbfB9WE738MG1TyqybtZWVRyqMGvJ2Rq1cWQuFBQtodEfJMxofN2ZqR1KLyZXFfsoi8ReM",
  "key35": "5EFEhoiMsFhgQmWDMTmTxNfTq8zgerEuiySEc1rJYRR57Yk95bjDbWhxzP9XE7Lxd6h8B4iyLZz3RkHFNfXTfC92",
  "key36": "4tLhXthxYRypaX6nLubgwJjQNy9CASkbfVZHEdC6AfmftCGZhjeDVPn2aD1rXMwcQ4wCBqDyJoTEMyDWGJX5p5dW",
  "key37": "3SotuvnBB6PEKPUqQDH6jR2y8XxdzCKRvHtbY5g3KmowRXxLhqY4TwGzqKpjoJA9fV6rxAMucQgdfpTcYdiKeuax",
  "key38": "4mzAv7TFbRLhLW1TJfTCWFfBDfNqrisW413ySuKAcAMr2tZbxgSLo7zyzzrpuFXE1JDXF6Spen29WSDaxmP6wmqs",
  "key39": "2kHfPcV3sfAhAKT4wgaHKd9LVEVUghA35VWZ4sddVTq8w62as7MM4ifbjzr6Q3xhVNGcninhr4Hrow4fsVBdLYdj",
  "key40": "5iVRF5eZsu47nPiZPTMXHoyFi9UfpLSJd9fPdS3HoucsisvxRktSrbJMMf6Kw7csVkGMqtHbZCLWcjkgmmJsKeDi",
  "key41": "5LjuCERinWNzMkJpehVpDv4p5EKHHiQN5N38hyrL3tvd2ee5iPMpz8qiXNBSuNVQuShE5NC2TzWFmSNwWwmJbHig",
  "key42": "5MWWZK4sMDHPyuCeLetio7yvRoMwtyVsu7fyqVR1ThJHu47fagsXNKDSz3uxf8v9o75uGBw4TxUPjeQS9iQmXZRS",
  "key43": "dSgMf7mXCWxzTaUhuuh1ZWdExhr2gV3wq9QNuHWTayxGdBAKfijADWiWQRgonRJLHMNmpgG177GskWYgPvUyBQ3",
  "key44": "5eUopmkJyw5W8CN5ATNUZVyJMgcwAvTfHRdwRfxKLJrbXWuJNTq2XDdy2foQ27DFK13SEMJeS346ZVSHA7N2Fyuo",
  "key45": "29Y5ByiPy85PE7YcSLrRSu1qbbKWuM6nJuLDM59LqQrZH1FvEL8ZRJbRxYH3RMakRBtKXScZ2uTZZ9B6wTwZumAA",
  "key46": "4cCa9xr3732ddq233vp8S8iYjdT7ipF5ki9NvNQym6m2d9nNDgBg5pYATT7BLK7AQTp8GWdr3TPVRHDPuK6XUdtJ"
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

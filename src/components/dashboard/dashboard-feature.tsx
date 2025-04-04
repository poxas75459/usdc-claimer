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
    "3y6KWU3KyiUE1hsZujbL3fWdNnU2z8iSsRonquLKSWuwhtPGyHK9VDpDx9Gao1qRajbixuokhyNZLR85SdxqUXpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "anq9GBBJYvbadqKSvotErsPb9rS4A4cyW2z4HCKuoomBXRDBdZe52YJ9eTws3LMSPQrvaWxvgWVHz3Zu2mLWthN",
  "key1": "2DwBvob39WhhmDgK8CHE7P5NJaw7RjitXp6cDrQ48CCD2iZQihv2Nb46VTzxMmaQZuTmeBaoc4YdJeJS9n5U5UN5",
  "key2": "3QYUNVRecWneZnwzKverZFsge6CtAJM71gT6C5fiZYMmHY5xCfULozoM8AMbtUWjNg1EwqKhj52Gxd5dD6tXa3VS",
  "key3": "C9G5bstGMAqcQmM1WsX6jSy9W9H35wYBmsnyJH99qoLW151Bo9q6m5knfhNdhYjX7Y5rExSV7A64HZnya1giFpB",
  "key4": "RQ6UkKdvRFFgrCeHiCemSgio73ghaGew3gRd8EARKLTobvNvzm3uPBJw9wNAjRc3u1cuddNhmLKpdRM1abcZdsf",
  "key5": "2uR6TA9gVUByQSjEaREVhETGktYn64qMEKvNygQb5AazgFP5yz2BiBC3nkrm3KLbtBTMWn1WKiujdqUydDmMRspp",
  "key6": "ULkRv4LRV6y2JvsGD9kBAeEb6ipnhvNLkFQxKTyXN3AGPyRT9jEg76K6LKmiYJHeP9JP2nzZ69zTa7zEWhCBr1u",
  "key7": "39ggJGvrg8NfQBt5gDypdJQtUXFSqhDYjDk2KSuR4JBYWFhhfy5FVj3n1gYjT7ftQPHUDzFzGYbMtSNWfK6DmaQc",
  "key8": "4tux6iRu5PqSgCotyJQunBPV6RkraEF12YZpDEs8cEvhtpHJUxgfPMsFEhyeZW4EhLxqmFYp8TqcFNZJyz62vgKy",
  "key9": "374UT5osihNf2gbn3gXKcP9LCaVjpJ81HtceNQocedEBex59Kdo3CXnnYRRS8q5wyiicG14BReoEkJGFqk3oU4xe",
  "key10": "LEtspvVTuNsEfmRmtfmZDv8fesRKqGCz15tfjnax9CqgzeR2FbWdc17Zr1QUt18jxUhX8xdHgSyFkBhuYp9wkan",
  "key11": "4SKv3K8YTLJQF2SW3CSF4aYsGtX6TCu64yXLihAVgkhsn8VFjEd2VTHAFWRsuk7tDZEsDf7af71TQGiehWi6mZLf",
  "key12": "2RVrzb9nypv8Saghub7vwbXvUms7Qk5Cm2LucfhnucPE4JLQgnBnWbXBk6Qq2o7eJhmiLfypjyx49MwSmaNCqHRi",
  "key13": "5qXtSw67prvnNUjPXnotSSGbsdN4LVWvhkgSZwMYRKLsSFMs6wiD7Fc5DeQeWie5eqzVLKawkjt4G85hZZA8YDrm",
  "key14": "3do38uU5e2WaBbVZWRjjmDwKgQDK3KapxPJocrgwPyko49tEWP5UWWHqz87FaqQsUqiyBLDSQNTNFoShnjAuvuQe",
  "key15": "5hT9TTa93wvWbc3uFETDwV3FdkGoXtP59BuS956pU6d3EPw58aqQ5X3FVy1KYnDotnSwmufGz3YeTkEDvZWNKSjy",
  "key16": "2T3NRcLLEsxufDGG2vmRJyFk7cYiUH1JhXgjqMkT4jzrWsv6vYtvLxfRtx4QUT3L8SPg5XWCU4bxMC21RGvpKfqL",
  "key17": "5CPh3uYPeryrzjeAyNmmYrzCeiG5Gsr7i8oSvjwxaSXJZ5jbJ3qi27xJY4j8F1Hij69drE9psCJxso5HgfBMHVQU",
  "key18": "291yaKjxvXQifSHEFEXZjRLPd6U8KaiUpHvKpLub9iiPtR2i2noYS1mxDyzGBiMM7UekFJxfc4iN1kxK9vcB3baN",
  "key19": "3qFQHWJ69erR28sqQdvveC29ZNPN4fsbdbjY6FCsuFSMuMtyBJu1eGr6VETeP6Dz2BGC9R13un8iRyjzqTePLYeo",
  "key20": "4g9i8LsbitNgU7mNmJi1CgHxDs2dAAhjEyVD1ym6MzvjgFf2siGNMMQv8kExnqQQcBRXaHJp7BPTvSr3J6UdjYYB",
  "key21": "5B1scfVQGtq1q4v3LWFD6678BCvtuvd749qGa9RsPxGF76RZUpUiFt3DCBHp5TV19VMtkcNmre51k4FUYVoUXEKn",
  "key22": "spnseXMPYK5HVMmQgna2VN9cV7H1cNVNzu232Uus27HMiMKrEnJhQ6phGQX5m126Fvon4LEgizTuggvBmFSffcq",
  "key23": "5jnZGTf6jaL6b9akWof8rydjJuhseztEyGxiCpVzs89VLCoCa7m4fJAePK1u1d7qngNXED53PBMnftnJDGuMZfQP",
  "key24": "VM7ycdZe6zdznw2H1ATeNKxqdkTrrQCTw6ZHQLVov4yBNZkQEqVkT93QCdH5dEBwaonEdq3PvZUbKUQVFZBfLFN",
  "key25": "3x9adXm3LQ5dPhMBnmcuRvWfpXkmPbAsUhJLqdSBXLadhYBuL7xtHBpugBWMcaPMLX2H7Jn8mCjZqbCoTyEDie2B",
  "key26": "4UBDN3MbWuoZj4anJq82hQB7wUT9tSBNYhCF1k867RycNfoMo5Qnwe6yqBpMuJvydo8GGfPeFfh437ZcJiZ7M81R",
  "key27": "3QPDRJMqSjEDfAsT2yAMwLPb2DMrCVumGnWBeuLeuT4i1QpYuJmYPFDgxL3e1166dnMXgseNCcEio2cQmZj8CwWw",
  "key28": "5WW6g6gS3s4532swj2QvpBax1g7oGujCmyiT1po8eay8zd5KwDB8NNm3UMoaCvjzPsutwehnNWEj9jACFVqWzS8s",
  "key29": "4WT43NU8QYaUi9Hk2hD95HFrU8pBPPi8fw5CznvNvvy1DaL9CnG5B64i1qrkXqwtdGVxqUr9ULEUm7KSCB1DEJA8",
  "key30": "3BoexFWA7Q5nfrmKBJ2f3PDUs7BMB2YwME7KwS2Si6kLbhmkWvGHZeHJFaSuVGz6boZcPaX8bWvyZd18R8yZdDjG",
  "key31": "31DjNgPwh4jETQmGoYrhMB1kjqghq59x5yH3a7MnKE8SAgsL9jENLydwCbdRBG5KRb8KQdJ7dxuyvxCwk3R1DMfN",
  "key32": "3Y9inrS3G56ATVUd6F1wsdfFo8knq8oR44o38eRe7UadPDtssFvtoxyTHchpeQs2LJBQZxVRHtW7JPjo2WvPWzeJ",
  "key33": "4uD5twrA7Yfjk3xPsHWNeQycmmJwJsGbigBFVnbs599jisny7bG4uNPWJZcJV1coP2jQfMxpdw8ezMaJY5TMg5G6",
  "key34": "32Wiy1wk6pvjb59bs9TqAysPBn1EMtEA32xxn9ocAMMCbqMs4xKM9SmCzt9iigeStUfdgC3V2N2jF6Vst8U6Q1rS",
  "key35": "2Cg9gD89tGWcdK8VQYmxFn12pLhGyhMe1yN3yKkYSigoGM5Fv6br5kfmErb4NzYoFjFmjaSxM8Cr1raXMpWQhPNE",
  "key36": "2yeV8hKgN2Z8MvDhBKzrqLYBG1dxGASVznyvvCTo1L6tpiGCkEHNNmonzNdWfzHYjr6EyK9bjRccovM3xqxNz8N9",
  "key37": "3GVq2pLz2u2JcAxAH1Yrkmd34xBu6Rp4wMSsQd6BfmfYDWg9wuMDAqqFWrbckc5EJX5CWHt2HBRF5z29VD3FRYRe",
  "key38": "4CeHdD6MVfz88do2bdzUDVyabBZRTPNsnVCjbkPyFbZQgFGLLaxvrP5ahpvWSjwWo1RviA7fMMuJQp9u5HuJJDh4"
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

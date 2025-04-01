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
    "5uwch7VjTyNMyhiQTuniMn7vNiPEMpjFEixcRkm71PSxw7WdDDrxFtKYgrs4FqBKpKnDqfrTJVzMY4Q77guwLUAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZzTRPBCiLYt9hFctb7x5dVy5xWi3L4xgDnXmgFnZdNMyaT9FmWvu1fhar7tKvGTTaqHUb3mVkqa4YcirxmcxS8Z",
  "key1": "5MDCfLEs4tYS8XrHAt2MsD8z6PLpNiWBZD5ksrz18oPcBwtYyB8h2YyyWUB87LiE7iiu9Xt3QhKoW7Rqo1MyfLtP",
  "key2": "ZFqrNNbTGKC6tRG3PdiNuvAygjmVGZm3J5vMG5fxSJe3iGPVVXQxBWB6pkAo5yeNcN7sEAgSQkmtmHhFBttweZ1",
  "key3": "61FpsE5AEEe621s5a3AhBJKCwmbRej5oHnSJ18AVf9nbDJWi7qhAe95e4TmXEdQM4aKu9WkZiHLwH2qkcuERFXZq",
  "key4": "3LeCz5nd3gXGXkCrYn5UN7bJy77QUw1pEBwSRCruJjed6zb2zujJHZPr42qcFhJYVvS47ZrVrJqu7rBaJ93ipvGe",
  "key5": "3pXB8uAdz224F2CMRMzSvUCxVrT7dXYsBWvQ4FL1PGHK5T2Je1RmpGyTmpf8PwEE2aK4nFR2U4hjCvUfui8kWUhh",
  "key6": "3EqCEZeGxGtArfXup11h1bsA5iVkrQReS4rLjZjjjSqjQPC36XcKYVc6fNjtR6yJjfjH6sVfxU8UazLr8E5ZWVZt",
  "key7": "4D8wXFPGauuaY2x3hy1zJ6FVdENvifMcUyZ7fa6qjHXjjiMfKMMxKR7gqgNT1JaDeZ7LJQwEYZz3J6jAaesDoGT5",
  "key8": "2z4N77Qsx9nReyX1FdumfDpvsWbTQNawM2jTvoJdadVt6bcj1q7uy95bZqisoA1w1nbjeTyokSnKJMGdXgV9Pws",
  "key9": "55oX5fT4oG85uXehwoErtmDS9oWZrMActdmfDb37UBiY3Wm2o8ew2RvX5XzMNEDUZSTKvNsw3TDctTbcVr8evPZs",
  "key10": "29vyivzYRMaL8q9mLvbTGxs1Lpj2jpzY5spMPrFfvHhPswJTcLWr7bdbA8JVWth2QFAw8TcX7kL94GYPo9H8fizi",
  "key11": "4WbXHSQ9J4tJqtSVfc6c3Y1T1BqQj1ooH6yGfrHrXwkNoEewRg9Aczby2Gpq9tSpeRR2vESEagvb3YdjKj55KNfE",
  "key12": "62XkAKVq2kWrJYXcxGA5Q9gbzydHo3Qo4YHtciqA1tPkoMmTCXiKKNnrMBhJGN3WDJewvYENr4S4kTWstYQKoAqt",
  "key13": "2U4dGcdXnexMKaSFuMg8Wq4kr2FpkQ9FcLkBvFb3WhbHSfZ6BPzvNohoQzdx6FLJTPLKbaj2zkfNb4Hy35CTtnKP",
  "key14": "2MB47u2mihFWcucvpii8bVMZzhv8FBcdQcqezt6kWk6rYMQrCiWZSkkVei3A3yjRinfK5WNpgyiSVWkyxg1TEKgk",
  "key15": "2JW5o7CuZs2jwdzTm52qwe7CFUKLoDpZ9yyxfZucCE89heoSBrXjREEK1fDDZ5HUSy3it3tSTahYaaoPxqsfsSpx",
  "key16": "5AS85L1mt5TmzPMCEw88xvqBnvp1pZWP35rMPxgLkgPoe4ChUMh3XSsEhQsfEbu5FmjtvzhecmWFKLPjQyRdBmbT",
  "key17": "3R8iB3s7DKo9uY3BKXx4XP9bTHvWEkJyfEdA8CTFEcptNUHRLS1srnSXuCCRKFzQnhjyVGXaSUyxWDQ1VePmR7pt",
  "key18": "usUp63ej1xw3Cmmi2zZgpQ2CdaqQ9U5XtvFM5kpwhFT52CGZBX9eLvquoHWrH77c2JG6PEG57TTEs5BwfHvAqsy",
  "key19": "2cAez659BsmohFCUova5DypzNvoyNxd8mQQY8zWtAAG7RwCx5aaoF2JtE3AXgutLTDECyjWnZqtqRetWBpvoErS1",
  "key20": "BZy9bSfeS5KC2VidxBssimEuoU2rT41vUTPxkc2YXtAmnocJGroLuQ3pc5A5Km4QTykgN2YFymjf9B1god4naXb",
  "key21": "2bMzkoPZKK2EqhD7YR7wfyHobnqoRRB84Lve7LYvkT9dQ7ariD7yK44ad5yZZtntoSLPERKbZcaeoWR66kaUqDta",
  "key22": "5HsrZiSuHpJ6e3f9Nu5AfubLPpKUHybucsyuFE2yqbqYTg4jBtjJyzoEBsGUhYrM43KiqgdZHXfuqS5xa3WZ4P16",
  "key23": "3dEXpvS16FuSpnH9nTwYZyPU2Q7ePKBjjK7eBcgU59ZdHZNEnnWFXy5zmLdVnnxoXaWh3jxk93opAEdrxo5rGBSj",
  "key24": "3a9K6zMpouY9coVKxBbhaoAcCafWbQUvLbCnwvpFgk7LVh8MXSakCgBLrM4SDGPcMvYUDDdysDXbouH2k9fQvQeo",
  "key25": "5A13LAA9M6SW3QR2P1RxX89Gc36Tt6yVUefdLZh7425ty4dmwoe3yuAhwf7gT8EZBTqmjfux2DwAoLcNYjQ9Uc44",
  "key26": "2p1xuHDXbzBgDsPTiA1rfLBUozmCHQAnpvptKaFAvk5uhb7kkq9kGBx3jqzXF4QrDWZPDP7HrePBbNqHTM2kkC9n",
  "key27": "3NHdAzof61f98xuary8vyqs5Rpc4Lzsem2JS1EaeWnk1hG3JSiidspBRFGozsKW3KksJPXLm6FWXmsPkhUTE3CKc",
  "key28": "3i2ayRBMZRCM5bXHww5yqWFrsAmMJikj8Crj6DQwGTe1waxoPBrkZDEEfT3gMWFwCVWvUjjBys46nozKkGjiGC8V",
  "key29": "2Z1jnCaBNQ8xVoQdf61PboLBWjm7bBJvr7wTGCrouPk1dCHrqpSSDNS5U9q4LUEuJLZFP5VFG6ccvQgThQ8eiHU4",
  "key30": "671BrJJhdsmkX5sfgjYkshem6tpAPNpNMGjv6bqsd4sSqQVqeQoKvB51g9GEE8EtzH8yQoVxfy3vUMB5mfo53pJe",
  "key31": "63H9aQr4Dkji5YFUg9HD7ufwyxKmRVxYQHxVgBKP2jS4uKV3njjSaF2PWRHepVhUroEgg8rcuSXqDq91qYmiSDV1",
  "key32": "4jCnN9mkqjgTGe7LoxvkL3zvaapZFdbN9JN9iVhomNxKKkmQqamhczHtagRyCmHeSRBNEUAK9E169h2GrFvUeVcn",
  "key33": "3oKYVUJqm8ckv2HFofp54QeDtwnnmwmfETrzqxtoKpVVJMp7LKpvc5di4KZwZcFSRiDqJFNVgr7dbdgUmiqgCE8R",
  "key34": "2xFLJGVwxhJs75JKe982RNrZTccSC2Qou6pVA4AQr1DrUGgGJVh622odH9sqU5E5oLXsi3XjpunnpEvqgjbQTpax",
  "key35": "2v8CC95U9wkY771iNuenk7Xh2cf6uVLD64NGct45WauondvoQqoyb92diQFp41D6yTex1cgxgFkZxuQVxT3WF3es",
  "key36": "28sf1u2bwNR78bpsJmXZCAkUzghKB77kceNMU2tmFfupLfTknZDJ7yjP1KvExvJSLjaoW3iCRWn2fTKcNCKStEf7",
  "key37": "4mMJZwf1q5cFBru67JwNUQz2McA61NV1mwbJxDC5S3nF8m1zGDbyCDVsgXrb8qopJX3w82wPGnccivSoKRDMLGSn",
  "key38": "2qXw65yjCz3ejNUE57XcDb6TsZodNtLqjVFYFVfUk9X9rD8RDVLiRPjDRNKXdAimLiGhmCdA6ogicFMHv23B7CyG",
  "key39": "67pGcuprhhsCutBqVigXTpLJExjBJ2CuiTV774zx3nETDz62snrA4Xih6PL1MrAiZHnrvZwmmkLr5gVgH6eZubrB",
  "key40": "2JVjL25LHqpEb4X4MMWmGQNyaYy5fQTUAstP73weAn4t7Mk39UVhvsdtpuypuHmyTW5bZJcjptJybXyHYiHoWeqM",
  "key41": "25CerDS2UTefmX3dKmnDN8Wz7ELuazkLfavJX15icpJuJpymoQmtLjY3VtHdn6XshAw29ALZ3LQwBcokcQzVZzbU",
  "key42": "3sHmvjUUcMmaaMabVqGgAGVVD6CEfB6epBRp9isa21qFzWqFYrDa3Az4aAyqSCmbd2noVcaTVnWYK9mt9Sj3CPqq",
  "key43": "2jWJL3S3iHQj6vSXMSn531jR14kiWfN5nmJCSAh9jngzhYLBKU9ARb2VbKtwPvBYGRfYoNJaRnWPrqgAxQBUVjFK",
  "key44": "51XTPDSrggCEwcyt8MfpFc5HvypZ7PdakgSUZ2j4pxcBaSY9tYRNgE5CgExb5RBQUB3TaMZi1geKpQvsSPR1VFpG"
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

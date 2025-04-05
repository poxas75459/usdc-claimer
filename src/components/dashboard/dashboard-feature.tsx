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
    "44Nb65ukbQ5WLFJj9BpvhAnAeDzbxTCBnkAQMMTqtG9XnusgCWUFBgPg9zzS1wRSwTWQEHD1uHEkM3XhvBVD9HS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "628wRx9ktsR21xmgXDNKcqrfDMR2gHC2etvWu636izsinarK98T2zYABcHiDHLv4tzYicMyVXTBKN1guuvPT48kf",
  "key1": "3V19Pysb45aLxeDo5PFDLRZmHC2LEvYYZEuWe3aJnpMRPyvNs9HnZZjmpNsSXsvDrnWs9hrdBJ4syr47q96cFaEP",
  "key2": "J63wZdv8AwrK8bAhjPLLg9GK8TTk19VosWMg1RzVtnWownkeBPMTzdjLSaGRZuEKnH6JJqXZou13Wh2d7ibHJSX",
  "key3": "mghEMNUtzgSSCdsUQRD3mf1EZjiShrpucFmz4RjEavzK4LswzXwFSz49qYNBfJTiihFEsJ2keon5BfCC4hXk4SE",
  "key4": "5c5TMo3iECFdEHzdmQfD6Krgrybs6EcuFtjQxkBF8hhbY7r5GdU6nxUARyxoXfZM5is9QVPHBB113WSeKYwS6GJk",
  "key5": "5uAdUTX4fJTdqm7gUMZGrSgU4NAj4w5me8Uu5CDssJB7k1KABQ3e5h8TYMQVs8GBwzF1F8bytSJmUPD6G3Comsaq",
  "key6": "sw4RFHnnz7NiNAqNiZaAkdqfzVJ9zi7pM69dncE7hE6RxBLQBYH3vaMJtfouCEDM7tbhkf7HmQi8ErBK5maCrFZ",
  "key7": "45j5pUqsNq6pDcTCHPXKgckozJK2GYUF5Eu1hSSNbmkuMzwYsGBXH8AtNbN23gmsBJhHnu8z5FkhUjSKn7MWMFiY",
  "key8": "5JreKrdpXxRAnT8ncbd6bpX6LDw4dyeF8f8jgE4iEfqUeYZrpk8uNE2Jy8oJ3MxmHwkHH5jAZmpYMP2vuKqHTocm",
  "key9": "Xh7TjaUGDnq9CaDdAfdB2gss14aonZ7hxnx96tq9YUXBrAZciieiuFekrDfwgiHKKsSPFCpsN5p15DMM1m34HKC",
  "key10": "4EdXKSgnEMCWRfZRqArHeARB5hx6BfeUGsEAquTJ1iwsg4F57mUU7Vj7W1brXQMaJwuHnf5ckc5cPYV8u1eHc59y",
  "key11": "55ABSbzEQrcSRUXYsw7Y65n115Mhte43ZabXxD2YKY3kvMwrYPohNWVxPoUrrvwqJjg5hceJs9JS6d658QuUBtmo",
  "key12": "URDrprUHxv8juPi5oHoJygRMLGXpk5FgbMJj5BEWH7sC3yYE6DgXkQE24RWbEhwdM4jBpJ1cdTRXGaFLj4oxwo7",
  "key13": "3E38QaKbFf5H474KW2U64CPLG1VuZTzxJz8d6Gj9ddyprpqs7sBxNdq2Kc878QeypSMjgkFVscoSEkTxBPxbFEmq",
  "key14": "zVM7qw1vHpn57SEU5rFcY8neFz8PrDq5UqiYwp8SvZ2LY8eyUubFMj3N4popW1UgsEjLfJ3QfSAJTejfYSwYvAL",
  "key15": "5qrp8itJqGhZYMEaXMZvJkzAhxukRrQZtrzgSEiHf1XhstotazZ65G5Dy472sdHoib9NyhAFxQiEM7sm8Y4SNcyG",
  "key16": "2isPPHCi92fcA9DTLUwctnRknZ52wHeCbBzYap7yZZT2YwKovZHpaK9UTxKS1UbPq3AAfqULJdaFehyyPrNUNpRd",
  "key17": "3GJ2wmSG56UgvjQp9DBqrS37U7oLSqM2F8AexoKpYPfvs126TYpG1daKVwXDKEQFCCGEi3krx44qHzq7dx8YtWjj",
  "key18": "2hcReN18xVZubdqiNcDaFLJ3XivPcYfhSjxJQqShKNCp1ivKgDs6rEPaM9Wms85WRDdYwosPfH2M5LnWhyJHG5Cd",
  "key19": "f7HsuC7H1vqVgs6fXYg645nkjP9SbH9ycceeRd8EHYY5Q8EtYGTLrsi2mSmQrKdkkHE49UmDAPx5hN9GXU1Wap7",
  "key20": "3ejniC2dMBWve7M2XSs9nEXA8g5NBSEMgoCqWmQBAim39UJdbMw16hmGMonhfLboFi2HZAgpPDMF8SHKqkTVjTEe",
  "key21": "43VHdXDcEHpRGwZgU9L1Qo1Fa54fPRWx8iA5Wghb5ZZMjvpoWkByVRJze2ahgqdoQr9i7N3Daugb5t8d9Av2espa",
  "key22": "2VEFBrWZ9dRrVEWArTCapmu9qs3YS5RXXPeQaifaFAfm32t2EY8ApwBzuZfm58w5uQTZbtzRhKuZQrswQsv2aAoG",
  "key23": "3AxKjzSaikSTk5ZThxkzz81McwMuxrDRsaJ9sXUjFBnhxLXkbCbxVbJDW3DKD6bK3zSPQkCVqL9CaHCXPSTic8cn",
  "key24": "t8zjb4o4ThsvmQMq8fwNmjc3i4VtFZxYNqJJijjNXaqZEypWVWfArhtKYUqAV5YphSF1cMXNF2ssuyprXxwmHcF",
  "key25": "mBZiZj4FmUZa2YKKgqnsTB5S9z5hzSSfnXmFmWcTkBDF2EDUsrL1YCJyWbbgHdLAHF7s2omxYsUDMt3Th7fWxJx",
  "key26": "4fiPaZqtkfmgejNYexRcV1t8HQWAajg6e3WLMDDHjrdQdv28L75KY3RAeg2jfKkErs3eYBpk5oioueM2fJAVtXor",
  "key27": "3pbw9QFeCSSe9XPXLUH3zhcfuMb1mgFscc5SJgyf7KKmhQRwRyzofVw9sMKtMvhyKecMFQMrUi53uGVQAFTzY5nW",
  "key28": "419m9tzFuzbZW3FWNTcErBoTpU6bP1Y7ZAUhdYsjAftaC2iDuezPfb1T5di71UCBqfMPXLahxmHwBs28k5bZJ81F",
  "key29": "2nKKpocfA2cnig2v27z49u8fvzpJ2neSXg5WoYTUaMgCXzhdU4pDzMUmsSQqYF8wSdyowdZsECJTPWK7JPg7ZsNe",
  "key30": "2cq9FXcqWAiPiJnVYxUsivpYsbJox4cys8cDvAHGyxXScDp4EVrdkujoSELXVF3FDuVfeM7V3RxvNx3yuAoqcnh5",
  "key31": "3DVtK2EztX8d3atJrwH6xkhJwS5TW4RfCNhmhyBQXjzWWq6SzvQ1zPV2SqNEAaJtue2BShTXWPjAGjz5yDUdsBQe",
  "key32": "3K2DHKQ47S9piFjMo4XXQjsKSes8AbPM2HG7BVEwNdRKZAgCTGZ3rncokWQV4NFS4bZQuVN9DqzsXns5SnkBmWbz",
  "key33": "PCekmP6yQMpgW23YtwkYQpHKEnpvCawJVP4gX94G8qyfeiUTEMo3vChagtmHKnM2dBrnPG5YjbqFUgFYrBWm1Qf",
  "key34": "3Z3XK6tGHMH8JhAbGwRXifN7TcVXoXSy3XRjZwSPn1qPRu22BsDzBNdQ8reb8smx8ucmor43cQjSu4KNqeKvXN7Q",
  "key35": "zFpnemVuU61bBLJ4QMEPXeMAKA8QERK95iVptRNMxv5wM6ND9QvL7hqYy8JJ51Sc4uprKGLyoQAyU95EgZkJerJ",
  "key36": "5Qk6kyQAu7ZbPoo9gjLNLm3STCnX12VUXSvz5a8bCuGFFrQKadMUAJ9grA7BQWTMLjrU7Y9eUEbSJ8XqF1qFWKen",
  "key37": "X6iaiKBudrdzjUgH6DRr5tiZjtzzJdBAcbY5LYcHDmAnrUya1FhXDZuN5TqX6cuj7sSgDya69jwXxhk7yKXuRnD",
  "key38": "39MTtg4yiagpgDTn5PRCDs9RKRHk7qxfZbWE8wbhNxuuQRwJSed9W6GrMaL5WL7z9wiPqNMa9Hwu2fjX7BtiToSn",
  "key39": "5MYrTRc6WjK89GipstPL3Eo1GLvmgCFtuNfzM8vVBwCvFNXSX98gUNyADS5fuc7PpP8Csy2EkhvjAkHJGVdgXZ4i",
  "key40": "33383siHUNMRGzHQCuaZbCuFZzmuFHcUuVgii7jxU1AabuAHGzRmyaggBRzsSvwf2obbHYmLgAeta43BbfPhxH9E",
  "key41": "2Gaumz9eQZ83NbjSHGw2pM1adW8YgTs4cM46VaVMzqjPoVTTURtBvcMBsrWyKNpPrPNk26z6Kiv79KsHEesJDzSY"
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

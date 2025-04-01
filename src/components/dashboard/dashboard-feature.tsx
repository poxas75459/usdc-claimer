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
    "2K9Sd7Hc1HtG796k3KvR2BtBYAD2JR3Ck63Tbaan1PuRE9hUzBzpg4Rom6L26EFPEBAb21SGQkp63juwJXwf6hMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uNpGkdSysqEe153go8QQ347ePZ133xqbaKRWCtDjC2QrU2KNRi2eVBpcCyxs2KrAuZjRpRxidfVHkGcQ4CB1YNv",
  "key1": "4xSQnhut3UaJ3nXBBAmUBDJKmR97NewPpiA63f7iP48MZnb3d177HqaW7PkpGXPWLiksQJRvxVCHs2Mu87yDmS1C",
  "key2": "2sga4v9zEouPpUzeAyDBcUGokKHkFwTEx6KLQ962zj3ZcGXfQLmGpprnRuE6FZkKGE9mKfkzAsgKG3BCbQ4xznhu",
  "key3": "4hdigCR5oK5bQ7VC5A4WCyr59xTHLjVhF7pPny1kKWTV3crbpfKNaaxH3fJgHKCFn4fqLiasS63c8Gip1mSf6hh3",
  "key4": "ZFfQTVhNYUQ9u8dVHRD1fT3cbRZ6nWfVBYDW6La54Qy71skZimQmM1s7nXZ23jk5jHJeEGKfzfouZ2iDi9kUMtR",
  "key5": "3248FyBGTAiKRnQo5uoWZKYjMDnSs7pUQfYoSrMVn6fpxx9Crk1rT4FHer6eGw59EBmoLEkSYTeMJKoRJdubK1mU",
  "key6": "55fsUEHrK14BXhS1py9fMR5aLiztsMnQx31dv6pVgqxfsrm8nnTYDUwABZ7SvJH2LdCAkUEV9g4TC4WE7VByUzKa",
  "key7": "5QCpFJfDziUgbgNNYXBkmyAvPXB46RUuaedjPnnH7AP1hQa1sm5eVApuDD85qTdvMFpA1FCaksWC43BnrPoxCun4",
  "key8": "2CanfgGk36cyPxiWAyhfrVFcMPAbCte5JYUXrvvzM7HudD6J7o9uhA1LaBSTj94YgnPiTvhmHbR89jovkQDVKohV",
  "key9": "2hTvvA5tQDTkYfhJyrs66foszBsJWo7e4W5tbV8GJ6jiPFGNZJtCY6bLbMTo1jr65eUMh5B8zPijVZhikfnehkqP",
  "key10": "3cBdmn5uCQ6TKcPZqpd3dShK8vTWcm6ioZK9RrjGbY8dV5gyZMtqSWoaCwq6Tj9r1Yi5XqDK2zSM4hcuKUjqoanW",
  "key11": "33qJwHth2Vmt5rAfYVuczGnRqsvdU2tdRHZM3W9vaE68RETyntrdH2sohVa18hYUE7ZadkqWZSqLPotioE83BBSR",
  "key12": "264YcxBeMPz6hBAZFKFBM2c4FdLYdH2MpF4iXX9YjAdiqruJ6ya14VaLrdWoiCavDTTfzGfRdqHvzaF7uBr8FiPD",
  "key13": "qPQx9KgpptWAocmqL7PUfsDz3iQJDgXG5iNjstz86uHEWY9NwujbRhr7w7z2ZV476Ut4UaXyTqYCqLWNh1jxC3Q",
  "key14": "2PsMb8dUgKRu36UpHijhdij2SWgY741W8Sr5W4Ft1LXJ9w5BoDYhLdY2Vd7FAz298gpmi37GT66bpEa3vrt6vs8p",
  "key15": "5PcrpAgN9E4f3rGZaHjVvjYDhJTnok54wZRZ5CD9wsKJqmTM8ZYdqJfa3HLTTjYSMegN8MtBoA8XwNHyWCsdrGtp",
  "key16": "5sTk1ccViMURvzdGcQkguwq7XpWkutYvmYi1ENnQnKxaxgMZX2ULuQuedpw5SigV7e3avXog9n28DW18GNuT3ez7",
  "key17": "DNfucPkJY6mC6DkoY2XBNqKCRbRi2thkhUXwxvrprSBbLidG4LydXrjL278Qc9Tw3kjKpBD7XzRffn6Hzy811c2",
  "key18": "2hgMq9UR2BjVaQ8NNug3ZmhHDLX1hXSo8xbg3e7fmxBAttXnSfecU5EAohYBymTPKEDpwNpRcfSBPAxf3HX5B1Ht",
  "key19": "5C7bTfFFK9JwNNr97baQMPZkUJPqPR4SjDcxZmmgN3MBMSMffNzCiiLL7PxNTY2t6bNHxVrFZuW3rAjcrMeMHoJr",
  "key20": "4Gad44BTMRV2Gn7V3et1mfzKiW1832YErX2N6fZhdCLUfi5YgReLTxaVDG4s4gECn32hRUL5G7vQWLfMM4mYPjGA",
  "key21": "3Ri7XVkNZeRKPa9zy8ZBu6NAQN6YbMrA52SVYvrLCkvTSzog8yePtBAhbcWC3EfGRj4DqoKYRNzmzc3j6jj92iqB",
  "key22": "3dphAo4csD4UzLLTMXwzWkMeZwMBxBiJyGCQM1thfz6V7gZzBxsKW4iTr6VJmUegsyKQANDeKXVUtCLB4zHEDNPQ",
  "key23": "5piy5EwuHEaapCgeDiNaqWJfJM6E6bbZErz1SQ9JCFM7MHMSj5b9dxPGRHmpDiRM88AumgjV98xC682Wb9t3CSWW",
  "key24": "4M9bURig3sAPzka8Xd91Vtwhi76U3HVGizxTwCHaQgA5DBZSgzSH2TmKLBT7cu8hykFnKWzjgEmKTg65BtoURcUW",
  "key25": "5cwBhk4nJCCzmCujhe9sn33NZhmgue6XyugwqWtzY769Yyc5M3xwRnUSPHNDAchY9MYSCvvXYkG8ZiMm4QuP5ePs",
  "key26": "2yoMFHzrjuem42QDw2Qbjj3PX9GK4k9NM9tArMupsXTxN9CmExw6TJqnLf312a6cCUs5JAF1m52nezPszRQ3w9o8",
  "key27": "296GqpTXuPbFAsAQPtcrnLobY4MWbGgxRBAy1qW6y7nBEJy38tbpizrB9F4zvBAHHkxbbmgDHzk8Fp8JM4bREqaU",
  "key28": "5fddezdzcoq1J6cL9ysx74zJDqUZwPQW5qkfFApz4pFBJg5yFWo8jfc9UVUZw1UPCmCedf53RubweeC5vHgKcTTX"
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

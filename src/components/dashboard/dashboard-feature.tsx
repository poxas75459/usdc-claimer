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
    "zNaQWaXUqdpnrpfBCzUAuuY75prFoXnFhECNHV9BfC5u7CfPowWhgvszsas13KD2Co3BtHwLmZLe6DGAFrqwTd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tyDymV9qY6hmzEa46zkhWocvTBKVNjdrPGoPaKqnbgQySqMnaYvecR4MZMv9hDru5a5TzjYs7xFrJLawsjr7Ajs",
  "key1": "4DwkyYTnVWyr9FqMnYGUHZcKnB3N26NPLVEcsjRHkmxQLHLo7e4LaYBsQUyVNh3xVZSQKDpF6SB1WUrCbTvMY5a",
  "key2": "3gdBS4bs7Wf2FrkjMrh7GpyPEiXzXDc5vCzPDSLfoc2mMYVq9eaPtC3CNhtMB5af1xqxfkECTqF162G4FaLrTNc",
  "key3": "4mS56PacXisuXvm9kKiA55G4Et2jXJ8YttjtmZM9uW5JW6xevkDnXREg4Wf6Uq41RFVBc9Ep7xcPqdBsLWDHhrYm",
  "key4": "31BRWU2Ry6nc7F2sf4XmMwhuKeqyugFr43Ebjx9JUTQFU8CNmsCmbZMzrQBvQAgoA8iNBaGcntSayEsFzV3UqcRo",
  "key5": "2xth5bxKxqTPbmak3mi1Zk6gVtqw4VgBwjTenEjida51AQjXeLXAfuKXQdzzo6FL4H7DCTXVUYNS2KFos8K3Dfhs",
  "key6": "3HXPBm1WNMRoRZq2jRMcu9TpBKZ7QhxLrPcX27FKWBo3YVU9km3MrJnu9kar8FQ3UnoZbpjXTmCewbwGGX4h9qxP",
  "key7": "5R75wRUvSp9oABojNabEXqhFpDg3piNsyMTzZytBiRiDiUaTpfes5GZf3HtAwcciiRWHiEzqMk3ko5DUJ3Bcz78s",
  "key8": "phgZixgKJ6qs4ZYRLMFGPFVG26T4ARoVJB7TEy2jr8HaMDuPbRW4q35tfLj3E6XZZurrg5RxDaJen2dg1NmDim6",
  "key9": "58XK1tVz34DnbK3noM1L4tFTtjDC6g17RsHJH2ZQM12yUw8RJuMt2nL3qstSxVmkz9MHJyyUMvK1PeFcjdZdTwgY",
  "key10": "3ef39PZRp24BwqVM2QkYmKPzrbbbWE3oq6xQ58oP8HvwBgHfCK9HcT1hFpUUu4DWGq37gZZZ1d5cMCU9tJHqcgby",
  "key11": "gpHXcG9x3BwtuGLT6zUD34mS4VSUSnTqQprnGXQbNtYEJ1U42f8xjCLE1bpszG3REe5KQxbwokedxfksnXJRdtJ",
  "key12": "dGv8BDhfEFcCvTTqtsa7P7ZUcfXNQZMBvm289sZGS38T6baPmMFeYtYswPwpoDkxkm63fLfToW2B2oCV8PggohP",
  "key13": "5BJXnQtnE4XZwoQQv8tzTNiHaWHNfsTMbgAiBegAGdF8qdTsJHDD7Ve7AWb5Ny4zeXN6LM6e1NFDvv7quu4zfRkp",
  "key14": "5jrtrqbiRpDNqcHigXrrTNyswJv1g9nKVX7wN2Yk6XwzqSCxCTSUCcbmYAR23jDNW7asKPDvXYGmrZabSvjLJXKo",
  "key15": "71bdPMpzcULfVq1GYVAh4TnxXmdbmV1HCfhCS3cpSYbqaCpbUk78o3CV6hLp1Bi3qEeFcyeTR88qCuxxewboKHH",
  "key16": "25Dgqa9XZoeJuEFntUcL55k6DV2xphnaRymVgNQVFfggdSprf7xy2qs9iHYzdcJDjw32QUSyXM41E1FYJzwYSCup",
  "key17": "2kDVnHxtMvW16JZgfufKcdnrummPGRGWkUCveUBJk9L5jfQa2KHssucEnuWS9pEchSgzxWUsVNCMiAWAKHDQjh6",
  "key18": "5JMd3wyDGxsqMGdj8zX5MGxf7gAFfgBTnRFp2TUpUxY9z1idSoVVBHGmsTKyhBHueUnWAg1GxZPYrXviwfARBNLZ",
  "key19": "4hWMQjba19cEsckpHgWNwNNmjZjXbPmT1hpgNn9GSZLNDwunC1sbLBced9xyddv7QCaQ36yG8Jyv1dLo7RxiXGYR",
  "key20": "34pztt9s5o1Lt4jEHuSwxUPbMPqsyKj45p9W69du3bXy77dWsoxNtJFaaBDuT69hq6WTajQkhdfR3RmXAuNJqsqA",
  "key21": "5AHJPNZfXWLLWMot3gaXb3NNZ4TpNvVijqroCwEM7onnx8L4tRRzutMRN74UL42AWk3Xv7pXfPmrxZo82jk6bzAT",
  "key22": "5hH6tYrmGcYK3aDnP3Vx67CMF2t2zv2eq5D4KBd4R96dkiWdjy352VmjnyhdGUaNYaPwos8kCEUJ3NQr1QgFEW7W",
  "key23": "9dT11EbiD2audsdLrbyUNMNnjh7T53dAjdyDU3DY6Tuiqd3wrVWK3EYX9aJ9mkc5xuTGzcumVrXGFyE1Ug8B36K",
  "key24": "2WZvkavW7yHRNR8q6eJ3zK9vscTceK2QvUv2QULNNTVu4MvMzftttri8gcSgaZVFndpt3hA5GuhuAKWjmhK2fFeN",
  "key25": "55qznh3NBtw1PVYsK4pdeRWGKabRk8j4UmZiTTHwGveHZrwtu6NoFUrzbW7VyRYUEwL5Rj1G5gKkHWbaxbY7HmYC",
  "key26": "cSEvZkjZTiPTF9x9aYpmcYRu4dFWRXriW24DPVmQidSvtbXvjfSXafPmto5dqvtTvAfkukgfhQBguv6YNZbkV8b",
  "key27": "4pGPAWBUatBQrDbhE7BjqH7GR4Hjp1nydFz63TdasAgfkMbirU41vy9crUzZyb4pkEm2ryDHj9uXXDNh5aLM5wZX",
  "key28": "3ynpfTT2nupBeEP9qFTDNMUNZUEmGJWjVT3PZV4ZwTWGKCRqMR2YXoJZKLZYDBqypWjj8kJaXoFh8jQ4ryUsD4Qv",
  "key29": "57bgZD5naDCsdmxn34pYwFqmnRr36HTbPAcJyKkVHn8EKAMYQEQE6eK7FJihifhzHB6tmb9TY5SEB5CtVHHrrG2A",
  "key30": "3K9beWJPtz4BNkHhEiqYcJ9qXpk77WCwC5QbAB2MozaZnNDfYTLf2RMfrKUyGseqZsLzH4SjsdCotectnrrDnziS",
  "key31": "5reYFGaDoF9NGbJuRtY8adXdq9j6ccChzdNXavvVirGWcMY48bC2DwcCV1BSer3Nvfnv5dhF4mwJK7dtKMFkQLmn",
  "key32": "2kVKQdDSasN6umKU1xktqGXbtZcAyzxfm3DZLE8FWLrdbAoBQvVEf4xJnHe7tPB6noERKDmvzL1prMhLCACpTR2C",
  "key33": "2cQFqTA9TAKLXiAkqYCEVemhnctHDFxMAwF8va9YY5mzc5JEpLEwpSvLjYafMqEzARnhhVTQS4cyEfyogThQKpLk"
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

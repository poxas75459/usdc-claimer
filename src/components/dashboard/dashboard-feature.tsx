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
    "3r1YvM9vnkwpkNSVXcxhchgp96kvAg5mYTwm6zH5bwQZ9QEKvyMStNxKQ3gWPdXzJjvZCDBMiTQUGW4r1d7mbBNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fG2gQ4nc7pHkhhZBvUpGxqGqQFU46BEZPAqoAjMRbimRbDYup2vwXzRUwwqGuGDVx1mbBLvRyVqtFmWgT3cFJZb",
  "key1": "4dgnNMyhxEwMqK7pLE9LF9jY8x4CECvXTAh7Mbuaxp5ayGfh6fTZCqzTZ82kuj9yUAeAC8Y38nU6pHF4xF4ZdfJT",
  "key2": "2EZYjgnEmPyicK8FPdKedXUKXBxZKMMiyApec72p4xxG18KTZMfJrwWY8Bs9NjtjVhbiWrcuZxibpmSWrWyJ6zva",
  "key3": "NoETtXprmKdWir9txTedXujn2CrS2NTQfHLS1aXSXGD29VVwx6e1iasVNkTqRtwTEcLR7BDbdLmHCUifGPoG4kA",
  "key4": "5qdKABgoytacvoH5DAqubvtKqi1KBaPpHCZdGxcTvuV7PcCwCtMGQrCqtdndx2sayV2CczTVFDttALgDinUmKnem",
  "key5": "4nKtbBsHCWp374oRWPZibu9DqaHeLqjUspGqmGLc6JM92yFKwTKQb9HhogCd8WBLZsXueZZNDPz21qZne6vpsbkc",
  "key6": "5tSTojC4fbHMk56fjWqz9T4HNSTe9hZYDYuDhZCUZGFcNY2pHRYAuVQWW4pJWrS9U6jxaeJYkd3QdUx8KBUPwWHN",
  "key7": "43PJ7ZKrqp8WmWta2ND8NEMaxwFhZcCtfRynoiSGZmvBfUFGphe1ynrtEawMzzH3v3sjJfF92wt3WYstHqUFX97s",
  "key8": "2jM4J5bY7rK1Cmurg1hYb9pLHWkP9oViT21YAiVYeDgbMD9Y4NXrRpXkk71jz4k19msQwcxTg91fxhGFCoLWLN5N",
  "key9": "47qSfNZCtmKAHsAUZh6kXJzCASExgyKPVET6rW9rkWwYVnZyQooCMiKQr9x9xQL5XbSvu67VYdKez53zXsjT3Cv3",
  "key10": "4nAEVjXN9JcD7GQLTa4V1DhiqCE8ibVDuxjyRuWBYoq1o7qKYUoUR6pPjQdZrGB2iV8vWaUn2but2vpVyY38C84P",
  "key11": "4iLLrrnPEcDAzQKbfyWApzjjiYST6NguZ9FBo7mfHGw2FYGe2iJypqTRbpWNRfRWb2HXBwdFRd3MJWLvfFD9NAuX",
  "key12": "4tX1HVWG97SCYqPWeCy3WFB4iVBqEUEAsVSij2zV6LtWrXjpyWqBmBECbPb4dypn4crrCqUHYqdMQGc8yupbHnLt",
  "key13": "41gRSdg194desM6vCLK2nGtBkvRhktCDjVydVnxYN1r3fEJiazvVUeK8QNG4wHr2w5gYZ2asnZLEVxMQC8JwSHYA",
  "key14": "4tHza3uDeK5ziE53EU5Lce6czZzrLBfKEVgd9wZ3jHg5eLk3TADztJLbePXSQknmFsnXcjid3LoGEVAvGSfv5AwY",
  "key15": "3dxihXgRUL6BJdic4JDQZe7vP5GiHCVoyhF8WfdLn7LYXX1PdnkBsLXFVc3futsbFEHQqa5DbfrFfJqJvV1vt4MG",
  "key16": "5F2qKJyagHRVuVhuCUrtMafxnESf9NQvx5JC4FCQsVRfksndrMn94wcsAunEeZVA5SWuqK9oUXGmLAWoSuhBgLUj",
  "key17": "2kpRRpV1nxNnYF1rabzciR2r3qp1r65QgkzTwr63QxxtwL54nPztSdacVqpJZ389ZoXtfR66QX4FuBYmkdb4hnmy",
  "key18": "3ZnWAsJ2QsNK2XhNya5qrGiLuEmpgeWfXpwRV7FJZMGWf2cKMQnbWtsteZ3tSxt7wp6FcAP8qSsDxPdHwA7agENY",
  "key19": "29vjoU86t1WTwovXPa34MVmSYUVo8VaAc8FZisdDEWsTQBCP7v9TsuRtJEPBa4BNDuCgz4GT1UWge8VP3PUY2vGa",
  "key20": "3BqPJZHxGkUGHjiDbBbg946dq3M6STXNxW3roSvtLXtSqmirqrYbZuqhh8JZwENmiG61SQJvbUpDdTyGem99sygt",
  "key21": "3oayQYK7bpQYdpEaaJdpNdiPZdqoaaaSbHhBPhNqULw4TgwHyzG3p91qScK9vya9yDrctV8MRcu5SW6yLGnqawU9",
  "key22": "TFJ1q9XpM8QvrdVD9TzxU2oA7t8M64be32hZzUHWzCLQS5dbe42V2He3sFE1rbkRMYFQJpe4YKRaus9cizamqYZ",
  "key23": "NstSZqsDFvBnR2SZvsVDaiHU5N8YkX8MDwrz9nMvERvtFoWGQXPBvkX7ZCymHcX2NYggj2G8nJnypr9acuPVWiX",
  "key24": "61AGoc9viCBJSfiCEUpuF93bKeyChupbG5rJD2fh1LAzdh4WVVZBpUNgn31SjE1rtXGy6cXsXNRkfQmkjvBTNxMV",
  "key25": "5oCDUeRDYmbDrSBZ8YF2vE1GyLEkQsFzknyrUJWnBuGvcs8f2smMSRSFih1UGeA3PiDBDw1dia42U4dKvkGBHcha",
  "key26": "5uqbFg5EgrM3Q8MpzaoUF55G19QvTCVvi81J7PsKsdnHBM4roXMr7dsppuU1dhsvdiXM1EK5ouNL8WnbKMSH8x3V",
  "key27": "4jqaxcjgarAboYgmh76HtGWU74RaPKE51V75NnnV7CcxRKLgkYJ83uVwmNvXZXneaLXdRcLs3PnHUWUr9uQ6rH8S",
  "key28": "5b773LFtrsYHr1VHsCDJ9cfFETzqZi3t9omJa6QwGD3WtvBstmsNkamBZu1kw5uh97PHQRM55do8HuPgZGH8o1rY",
  "key29": "2QAzM9NMXLtTLSTRPwqSiVLQ8ind476gFZ5NyA5LxuPJ7zmeZEXTGPkXKsPNfPyUNCGJvRpfsyYt3Ur1Srs4X81J",
  "key30": "55poYQT58ztP6wc4iMa2v24KJDMiisATqWdSjYRRwhET6Tnx9kJWJyWnrEPT87YLQqahuXND7osx1ATHoPfHj8hb",
  "key31": "5PfD9W2deuJ5d3ynuW98vPgSJELkLvk9HFZpx46NaBoWFXQhx82jXskHepQP7YyGUt3pqrNFgUi4oZo77wF2v4SZ",
  "key32": "3yKaYZvBrGqA457gzytw1ZHdCV11CSCFzGa28ZZ1nWq3kQjZ6eYcWKhyACVNwnUSiimY13AZnsbjyTdoqef1S3tP",
  "key33": "331bdkNEmSGKc2BRN4nNuzcqLsxmwniRWXdt4hoTZYHma2MRf7i7Dan9zJsLrRDSFevLoVBWiNrsjP3DsmJZLRmc",
  "key34": "2QWKYpmK8HT32L17AQ8SuVTqpiTyxtFFS87kLgmjUmDYMuC5MHHNMFLkRi2pa4VBCoTJgfJ2oPrdSuKWgaygW8Gd",
  "key35": "541NkwaAKtVAYkwaAeCbiEEaprPxPpb8X1CqF39j1zSHLdi35D4e4Pr5WJeqwdpg5yGRacKzFGvYiSgbd9DmpUNw",
  "key36": "28NtdudgExa8WbprbMQsGnDhh3rrPPZvqyAaw6bGB6qmPMgFZezkc7xf2zdLYrPX1weWGS18qSjZwY2CNYk7sDhj",
  "key37": "2DuFpeHBCyez6W7ARfgVrU7ZwXiYC9J9tJswg1yuLZdCzcBTXjt2P85Y72X8w1TtnAouCqVW8mpeddeKVeZdo7Ww",
  "key38": "2cUswuHu8HdmPstGSEsHhGN9PnQQuzmhsg7SbXctQxtuvBSagDaUVU34itovWnDa43ZZYAEmLxBaq6rzaiVmDGCZ",
  "key39": "46Fv97k7YvE7qM1YfUMhJ1NwpnJVgQaFpJ4AcmAZv6okN5Mk72QiHoSeZcTBjMtruVJwqVtvLXS2pNZiG9A4QZiL",
  "key40": "nvrBiXSL8okpoLHhMu8VKyuCWeynXrThSd16ziZZbFhuFVPmx6SGpVvhc6qZm2MeDpgGrjJzCcitjsDSxTyQ6J3",
  "key41": "4FhPUVQYWb8fcVsMK5Cjf7jzfS5nE68UoDZeSLH3hw7Pd3LZ4NR2FyvWwYm2NgjnPNi4RTT9H9HdDiTTX2Bfwh7Y",
  "key42": "GCvLZS7tZieFdY5oq39vhqw4TncSPCiUhYNXSrzAdgx6aU4VW69sUYJoCdSuyM1EXYUHnDxmriE6ifEsSDskkmb",
  "key43": "67aSYeCYevMch6qFtm9gkGnvAUZ1Wt94YNdchJmUHfh4TRZjm2zWaFaBeMYoZYnW8cSexZT55ah4hguPxcdtrvLY",
  "key44": "4BgKRn1SpbLMAoiDB4RZqDPrnFrpGBENy51h5BTk9XT2A6czW6WscTqG4b9kk7KSugph843zjLpdcVVG9iCApSk3",
  "key45": "2G2sKN1GdskVVmNTHNgNVaGGYsFArE5NnKkSL63fwUpQPgpC84XBR7scH5fMvhXkmmvJ8TuJoQkabKQ6z9LLFird",
  "key46": "3Wcs8Kgbu6xsoQAxwmnAkiFzg77WQoHyv5Gi5u8V9xwPfewPoQonq6GxBJX4QLZE3qYXyopeWGrBUKk4NoAAooBR",
  "key47": "4M6VQphmx7Po9kqYvjjJqCLdB7zEpiXvvt6pTAawdCtsGbwNq9Ygwu9pJTEEQioNG1rgNvBAbUTo1RLB14Hawti",
  "key48": "3dozx3SAzJXzNHzKhmViCAEYJR3Gh8oh5GnMuXrfVfR1tiXkKJm344bMVPnzx1419zCtvr2FHrGNxp4Q2r2tdg5a",
  "key49": "4i9KLfVsr97mpKbXkKgKF6Aaxgez4voi2X9UxbhBr6EmejBoHoo2YehLyaa8SM9txdjtECH5KeeugYdK8gJGKNy9"
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

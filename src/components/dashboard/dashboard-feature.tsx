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
    "45d9Gv76v35mkr8KVBPfcAt32DGXz3tRXFkVX3XKoMebVHrhsYtaX5m2fyTpMFsSBnSX7A1MbgXQaARpMwdeChLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vDEzSpo5Chu5kArmirrYALMkpBUEbFu4sBKFu1CtRM7ZH6Qhx6se5PCsHMBYHnNLE1T9Gz1ATNGiDDdjm2H9Bst",
  "key1": "5kXPQr8cFWgfLyzNsh2AyxqS7mjLMHB6zNdiKer6Yt5KtGCyyKgyURzGPY2M1Y5PA6ZrHGu7YcWzDXabAVC9QJxV",
  "key2": "5uE7ej4Bgq28E8ipx3pJDmWG9HmUTGfzVZHpJmk437CmXwBxPrYb4BYegqYxusjwvcs7oR5wY1WtJuVFnD6CyTLq",
  "key3": "47CTSy4gYr2ZPmS299PcHZ1fJRkS4nHrd1f34MhdLJCo53VtDukUZENNyCYg9TuHk6bwfaKvCN5cgqb6F6eh6cYQ",
  "key4": "5c1an4ceknQyTK2gptt4wQ4T3oKJmKPJB2t3hVgUf5dH4TF1io3mvCvM6T138dBrUJAPxMBDe5fSnRqVsJZ3aqKs",
  "key5": "27W2dma7fyyJxqrdesnxFM21xRWvwMpM3o1SR8af9bjHrRrGCv1pQ1Y9KSAjKH1m3xhz7Jvz7Sjzzsi4dTAoANua",
  "key6": "5nLDWH3yJWYXkGYJKyFG8zopH6TBFQpnTeN3UxGhq8XP1Yxscbo1DQHWhTKt3maMkz6fKhKFSP6cxHonMaZQRQnd",
  "key7": "5AmmA2Ttb426tk51yW6JY6X8yDzmvtGrVKbUsNhSotKL5pztyMuqr2Uov2zf8bVKq5gNYovpmYUxc12AwonTb3os",
  "key8": "4FLmcGdRGjR3ejj2CZmCYr4AMJ2WdeWTYxgtBmGD85GbXYrvjZBQSmoWTpyZnhrvdPJ36gTZ757n3vdGGReXL7cG",
  "key9": "5YwD8B1QY93C63gzxQ56QD8oSW8Eky8nFfqFug7xAvSG6hhioFAcmPBKy6uJEeJJ99efUUcuFe19trWFQg5LC7EB",
  "key10": "3VVJ3ME2ZNbV55pWbiPB5wYazafx9UnWCStGCgji4iKuFYkp3jxo66syNGzsBQ1fQf83f1f9d5uW7wfUmeh1izkh",
  "key11": "2RgGhVRGzeyq1S4P9t9yiKvZmt6ciXKCvgH3o3aYbbQL2hzSBWJuvh1sqHJpcosEBMGryyRgjjJJTDVeuc5cHEnt",
  "key12": "18yeNaJfxzYuFnVALqDz6HWE8Y93jFS1Rh3ZnGrDHFUvC1yeCttNYhaTSZMXVkPEKuhcHmGhZLHiBErFDgYiSRn",
  "key13": "2QP2dKjrXPkyzS6RZ3BXd3R41yitvoZNUCnymXWDTg725gtaxSX5ksskTwFXF5LwXvd2CD2PGcpjrbXHPBdjJ4iw",
  "key14": "2RixKamP2QD3YcQ52SYALa5S7kANT5JdzUGujJ6WYAoTLFK63NwazEmss5eG6rHSvqNskBYhmhntuDd7Y6RtwTKX",
  "key15": "2Lnso6XAqx9yqFrZ4u3ru4ikfnPdjEke2EXdNXUdiBNvWYRmgchLLp4PHLacefXUpya1Z8WeJbz3LcqUpTxuhKw",
  "key16": "4nhKG7FuszqvW5avzuTrvebdoBP1z6MYbDuQWnfHsyKt6YDZcEsB1CiLtvrqiGTfzfbctK8uwjpbmrNGAdePswZs",
  "key17": "3ypVsxXftHrbXbUHZejxQJfVkTsbQdgZsxQHdCzt3Xr3TMcrkLyfAxVzboeuDe7Y1rnNpyYVBkRWPuza8xf87gaf",
  "key18": "2EWfEYrf9AfZezV7Ex9oKqMAnjKZUvDCrv99bHX2F75Qbt8hyxFKytYveNkHRZA4W2gW1VBYj2dsNsaJGMtAwQ12",
  "key19": "2bqo7CvQKKVYcYDcWqic5Vm27NPmfpyPi3P5EyrMwyB2Pgov7yPW2mrrKtF9zcZasy8U1bW558FKU4gMEfuykqhG",
  "key20": "26RFGJWtgFMRbZAjuiZYtFm3dh7jTLTCJ6KZRnzsQdHLdC9Th1avCF72MsY3pWPPjmdq5u7pe8yrdCPLKxS3c1EY",
  "key21": "oj75FKuqNKihbtFFkrKuduWHrmhaHcEP24bbCGTAo7vSVF4eoxhfuHvufJaxLSsnsPadfNQzJs6tHHqMojwNHau",
  "key22": "3AvyKsZA726cSRxLW6zqupER65Y4VDcQcaTounnHFKvEXpYHCnZzxCNwCv4qE74hKKUppe8z3SkCAhbBY3fA4WhB",
  "key23": "4n7m2gwTCMhrMnQRVJ5CJQR427Zkkz6jA3eEMpKiAHK16b5RYtomYFtAfMocvcEKwMNQUYh2b6i2grNDYPGYWTxx",
  "key24": "3sc2mfh4zZZWKLeBF5Dui5CzEMpFedqZxFSrerPLdpr6UnRv92AvmhR549a6QWWGKpcpPK6S2pxsng12oNcofsSt",
  "key25": "33TZdssfFQfUgP3oZFrLytQwHcrBr4eNeFBEUFtsr79NrWQRHLv4kq73ihDAPaF24ZryxWdtqApRCMZUpqdcfG2T",
  "key26": "5WTBs19zuVkrbespqDd87p4jdqfpkVh1uwW7UAFkbGTM5xME2ZH4XmQQbaFEijrSrKd4KCfpagmv52Xi3vbhsLPq",
  "key27": "4tbFmjSKSzC7X4MTiorGQsjjb2NanfZi8MBsumoRXk5jLLhScbjkZ5nBx9W8YTr7w7DzsYwv6JNydZedu12TtEFN",
  "key28": "38dYUfVvcwq8xLdzqBcLgTMgaQwp1GpExfoHviN5Ccra1XXjuvQuuSQuXxgA5qBNv7oqqMys6iRHTYKsnCG1C4Hw",
  "key29": "4GWqyeXu4eJQKJ19FA3qVDWvs3aCVAF7cc6ctk9iYQcrJ7JfZ5jpsbzXNrh9txFkx67u7sWpb1yt8vahh3cmtRj5",
  "key30": "2Wrq9BoAEdNFJBvjpM3ZRGyTYroE1QofueTthrN6BuLcY4xLDe23icqNRQ9ueKLqkEmmPUoa8k65muntSxdQptmz",
  "key31": "3jtTNgYveZLa6w6MpyBFo3qdTXdz7Z8eysZV6WwAeWqhyuK6jT6EqrK7vNH6LQS9MpD9mLUPD3tiDZKUYrJsQT8D",
  "key32": "5HrhSsUQZAkzZ1HLtoycuiWPqxJEh2LnFUxtArA2A8r7xTswruVfPcAZLC5ijPDFHqRGmJM3pdUDGUkfaxcPKvtd",
  "key33": "5NhCFmTWUiKvFBfLTp5UEy5xhQEXtZPArGciwWn4HcjTR6iVKY7EH4H9K6osDwTbvDnvo9cGm4dfVTraDmhiYg6v",
  "key34": "4UvWyrLD6K2Ya3Evu3KLXMXud4aRenPodYF3jAinkREviY8P7zgaToghJpwXbxiCkCN48EkHWWrPTfG8cPGHFQbW",
  "key35": "5faxrTNQDMEfFkKsZHyRdf9bC7xUyAUC1FfLQWCEa4UatwXUDVnybp5CWcm2qx2HXjEs1zX6FGj9PkpD6qRqc7ki",
  "key36": "5ZZz7Hd4X3qLCUswUeRBy3ZSdFZDVAFNCuqX1iftSzzL8Ae7FhBJ4Hin7xMnUWYzwVvJm7Y7A1HpPZTvJfnTZKYR",
  "key37": "4kD3ue8MhnbhcaDY2NMvF42hrMdGB7Cj7Gz8tSHw96DppbxynsttkXLE9kXy8R75fRkCSu9vFkmW1oo5YgFfCkAH",
  "key38": "WPqqhBm1AmQA9CG2hg2JP5FKPzv8Bi2XcEJR55hEG1BouEZBovtLV96Q1KDwvp6gc4pWxgVG9AGnZiY7GMgS7kr",
  "key39": "42EtRHr3weshhkyTErGpWoMKaHhASAqj3kFm5BPdMvNmS8BqfRXzqKNaEBoJZxk4NSq967Ah5MGB3d7krrGgAEuu",
  "key40": "5mKakK486twuErKag65cfnCvwiSTWmBkHh19eKWsJ4S4oiDtYk3huVDTCCh1WV1HJtCj3z68G5ASc8UcFHzH6ZHT",
  "key41": "GcVfKFNq7j88caSPjGGoSDX5MwqRUHJ4mca6YvH5oPVEQE1RWRpuHAnQJY5pjcaPcEnVEMXw7Jg4rQtXW2LnsvE",
  "key42": "65Nm49y2upZiR5mhpHsncRJtUhwZt1e7wKeD9XD1r718KGXiHyY3QZU4hGmk4yKtgwVXRrk9shVpRZQKnaxzShTK",
  "key43": "3g71kqYkVuNQfZtQsrnTvWaqGHeLw2LtaKGRbBME3v8niQXsCManzw53wMrXB9z6Wcba7zN6bjTZGdVBdqRN8Bic"
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

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
    "8sK2bmPvc7kVXrjGgLVdwFVB4wLPxQcWrKK6hNq5hjj43ZxQkoTruAXY3xnT43ypgX2BivhChHtv3iyM76WkHpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yhBvdnU6kJJo4hdT5MPUEoTkye9RqivR2qdL8THgTbDhyp6KGVitA6q66yc3jw73MtBXUqN8pcs2tYfru4o9C5N",
  "key1": "4VTAy6zLYK1R67HrLvkEQ57WtkXSn79Wrek4GS9UgapvgDU3geLaXAzezpJt2JDn7env4TzwDi8npi9up588c54p",
  "key2": "64RjbQWgFbXjaYiGqXbof8NTXNidjX1uZLcNhtkNbGNz6oACW5DCnqVjHvvwgtM1U5fXgzYd4g628sBb9nFpJBuA",
  "key3": "3VMCiNYertbH3KrCkRTEZiTVSgroFQyF5VnvAaZTjFLQZ6PcSxn7wd9gz3bK5Cd8jfybJuxkYhBH2TA7FBVzv375",
  "key4": "3j9Nsqm9A81P1cGMQh1x8nNEPhmSn7YbNNcdvau7iUVSH5yfgcQRVH99puZaU36DrLtdYwn1xf7z27uz1VdrTjfU",
  "key5": "unX7NnkRgLExjUsFbJSMM3hwr7TwZAV3JwoB9hycQFQ7Wk3DbwRAMAy6FhCvRb45ef1nm544GJQT2E7QMZVRYTH",
  "key6": "45H43j3GAUihuAvzkNxRDj3iDrbQPjCxwM5u9krPmowZAr2U8iQ2oXD7gJas266pVc8U4JMweRPpz2dtsQjSSJUW",
  "key7": "tpVcpu81J7J3MDf8yHeyHFJg82KQhYSmzAVZ4WTE5jquKQzkrcgH7q7JkQbmSQaDifz5LPrCCFjcmjyCNiXPmjB",
  "key8": "5A4qgxqRiqpi5NHFhxGtQeZTuR2f5jAKWcpyze6Twi8FMmLQvBMeeMevKyUhbfWWbi4bfCcVyX4MeaVvkDYTyJo6",
  "key9": "57qRNUYqWanjXNLnrKHXiBRjR4wufahr3y5M3LYge6qzkzJw7VcnRRrp1QRYx9BHe6B5aMf7CrHQYdr7hhv1mD9w",
  "key10": "4HhxVYTy6WGP4aLWjL8fPszfD8agsSYMyjZY1ZzHVEUwtPS2RwmNX74ZRX5zMfDVT8z32Tnk5CSKeu7VZKAgBcSx",
  "key11": "4v5jy22tQz2Gj5jh5CsCaHGGDCjHQK4c29b3LNAgpZonYeLvAREXLMfyiCWMywVDJdw3y2BBsvayZMEVnnSneZQZ",
  "key12": "2HdjXY2V49DiigarPb5GTDcdxWW7f6gwnLQyxwtPewxsRHjJGL7Kb6DpMaYqj947SgiJFH8wQMSsSFrpnZidZc4k",
  "key13": "4EWcbwC93hpR8wqmFQV8uoEbbWyJL8KdZhzwGsWRWUBA1SNykpaqphnoWfFSzakXU8Ee41a9zAfYZhuruBp4FPo",
  "key14": "2GjzCZJGmmwNubw9ngKD9sx2T33NApR9hgWDjv5QwDGi1S7QkRxhTHbfr2MEN3XgB1P9knKJNmq2qog5yh1TZ9j9",
  "key15": "4vuTd1JRKELVXKo7oJKjJtDQkdZi4Fm4E91s99kSCgShgooYorzikDWa3PBeRY4AgoqL2FA9ZTJiZ4YSFu4Fd6uy",
  "key16": "276YnyMptYkjnqL5vVZaFcSRbP7ETKR5oqMkH18p4BiQ6y9Hbjuxi37fzQN6a2mBDJyjYTZwNKpGDJecpSQFDVHb",
  "key17": "67Nq6jZ1i1TmAPGQoSiXeNvkPMN1nSUVzt62z5dxyWvdKre22uoBR6vtxvSCPPDMoY15HWpKwVCCDYHSVN4T3Rwk",
  "key18": "4em3d5VjeW62yE8kHVp65tMPCkre3pnmzfasrB5uBXSTYrB4wZjCqhmyMRiKVMXbDEwKsqPGpfJ9mF1TRSfSqLWE",
  "key19": "33WYK1kF9U1pmZVmNztCqR7AjffPLGTC3SuV4UAZ9TgF8wEe9DAN4ApagFdZX92moyvDa5R9ngm6MBsdYku6YnSa",
  "key20": "zmUbRjUTsnCceP2d2bXC3Hd1vKRKsaKZb3dtmeABRynoqhpKosg5SHYjB1w1K97fYfPiZqMAVK7BHkNbe9eE1wq",
  "key21": "8tzZjfUdwZrZpsqGWeMhsxUFqSmBfB4eaCs62ahTy32wpNVXTsF55XYC9ozaspNZjMURd49DJHSw3xtQpAdudYA",
  "key22": "5zQt9pYaz6QxG1w4DRRai6ibpBnaeACAkFF6eYWkW7P7TYAA5CkQPvwpP2jfwSP9D6557hswkBKsTh5nrEYrrtzt",
  "key23": "2rvbJwHHstRamVXfuE9nfZGJkg7n1iHVidrf1JH7U4qi2QM4p8o4XCh5rPpbLvTj33r9rbtS5xon6A2bzr6NGdkY",
  "key24": "5PRcgPREY6qcLCznboFBwi939AbyrA6Hq7sKVJt6CgTepckfmBUbvHSZHMf6KDEXQvao7XD6NgPgG9m8BPRyirMZ",
  "key25": "wseaBocq6AMWMD9mJcVqEbexBTjqkjtbkQ5mvvuYPB6uZVj5ytSQ8Bkjj3C3LQYB4vDFXpRViu7YgE8gRvXz3MA",
  "key26": "3bKwEVhJoG99DGc6Kjf4qsxqgkUEeznyWaHJTZGktHyKMhuSt9qHMq5Ki1KdBMCfLCPbqSALJWd3i9VxJhewbrNx",
  "key27": "32JvkmxUdKVRKJEGSZCyJpNhhHKA3Jv5ces7fR4FLYPaSafyhPpBS8LE83Q5Ue5mZ4b2BEmBepQM3ae2oe1uS73o",
  "key28": "4mDCPEgDjsyVoTuKeNUYMuJvd1kkm1pJzUwBNByDogp1J3KPthL2gYY9PGohYLJGnNEsQe65HcydrZQTfaiciG7Z",
  "key29": "f5oratpZDL7XfQaBoDHScNXWgoHYwWvzxxuJ6hUU8xd3YNMJB3vTzRoiW78RVkNr4Wpih3Nhpu4dYaY62pLY5K3",
  "key30": "5q2fdqQjXoKjq9G64iYkg88YrWee8PzX89oynPXsrmKPddPBV1xmFpLGcLhz5nYQXAcSfy6s6gvV6aeAkVQxjD3r",
  "key31": "65xraKo8UzmX57sfdXCifJM49P4gMmy8QZ2vsSsnBBHh1NVva6wyXP3SxmrPHeT7NDtDxwmteiy17xLEQsgtdnKU",
  "key32": "5etvkQaWs89psjocMgcBVnH3SXpPFncoFHhrgCkashgCUJRGiSGJScrii17Heje3xp5GuzEhFEToGnFohwQuGQWj",
  "key33": "YCNjTj6vAWNaKHezScXb4euZFxg6nm3QwMVb84X53kFybzfoKffki4UiwLcAycdZJa5dRcRpXtNXWDKURwPkY2p",
  "key34": "5YZ1KEKqc7SYv6ERoGQff7TEuAJyaZ6aWCJZp96aZPy7rNrMdpgFCQiH48sTtaQa9uTezJMYZQkuA8Uz1GiFLaRn",
  "key35": "3AJh5dPCZvot6mWjRTeTsj73rWvN8NvVw5UMnzbdVwkTxM5XqK82LoFB5TEECdUhsvGLPHrjtW2rq2breTeyCpAH",
  "key36": "3acHFG267HsUsmn2wj4gDWUFHyVySLrk3KgifKLf2nd5TD9Kaj75iXDFPe4Lkf1BSEe9cWiJpTnDQ6Mgu9Y1NbAS",
  "key37": "4Ppov5Htw9JJvqwDN7qM6vx7KhsUyr3X4L8DjPPToWEgGo2Tow1xARugeyzJmVUg8BRPvJKT4YgmxgAJj3pgJuii",
  "key38": "255NH9keMCN7ZqGdAevM1MmEiM5fdRCxvhGR7psaB7CZiSpzZjgXfgc23NdqnsCvKHsWucAE1Ni9VyuZWsbWg63v",
  "key39": "5PBoXh1PcAhq7LQoHkiyQNxmzxy1LhKGP9hvJnEpA9jtKCV8dNUCCS5ZgVv6iND9ot8vwk3wC5Fj4B8UenqZAMD",
  "key40": "5o8ojf1aH86p59hSgbjedBQgYnZ45fFrRkr39VhdNfBPCmnEitgxxs6fQrt7gg9spc5uvHwbBZY6PdLAhpYu9tez",
  "key41": "CAFbNPnKmC4or6jjB18KCnrk67yF1wBUWDkoTWvgWVViQQbagYVvBwXDuHvf2juRfVwJtAv48LwiZfoUWrZi62i",
  "key42": "YJ9dRkTPZTuMe6BN81MqN2H73A1eGw6GbCNV6D3jnMxnHWy32yCi7XEdDgbsYHYScXtZJjSB4SVF43RgGYkpTaW",
  "key43": "5TNzMatmuFiJLPY8JMBbtN3jrP3GAZuwrsvFd4y3ECx6EVme7uaLCNtPkEvUqnLL8N33CAT7mAmfotLq1fqhxD1r",
  "key44": "5GWkXcujayqup9mdEh5WWS6GWLSQjUcvgF6zHzBtVLAzwU2rXETKh3LvEuWvLMXfR63GHnAjsSvLDE1kwpa8ZESC",
  "key45": "5E6BbDaMuQgnZroLkun6q188n8kTDmKAKczo78SzUL1sjt8zWthKWnacTsvM4Cv5vee5aFyD2jxe9Wf46coF16Pd",
  "key46": "4pZgRpis65RWDVGBsvQMdwLyNBZQ4B8X44sMguQtS5SQoTJGBcs9KhEvQ4iWXwHCkcnx11v1wqCKiAZruqYmnstm",
  "key47": "1stFsg5bXb5155BtE9Ffa76tFqPzzpdCdgrze9RoCLf79Wp2fCzmZgDZ9QD6jKjWAbaDM9LHSCbEcLxQMNAqvEU",
  "key48": "hfZPPXS6mftChe8ihHmk7R6xtDtuafadRsaXUpL44Qm9CXNxX84C437B8f9De41PhFvTM1kJRCT5nwrvuY1HMyX",
  "key49": "5i14VYnBxLCr7m6VHGm1aTkSu7KqJiGHaQXChihkS22ruT8qfXD26eYqro9B6YHJkG5GW27mn3o535Uxj5c6wyir"
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

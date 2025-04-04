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
    "4z3BcKUzKT5pWaFQWxUsf8akXhkS6a8v1BXzkSjfcHRsrHc3xSua1f8Y9TneebFvpo9pUZUiVTabyH5gwKqtNFxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pZ2CV5M4GaB5ibSesJiT9kGmgCJEzFdoFjmWMQN6uijUvijfpNKiknFvdh6J4qnkrnYLrshqaw8CkKKcc3m3a1D",
  "key1": "5N9qrt4FJhKJkuLQFA9wiQnf6pwRjPvqP7Yft4j9ppqd8RA56kwhxQrCtuvhtrsJAq64eLwMrVqeEVt27B5HVspG",
  "key2": "44T18DzYYRi69vZhbt8xCJt6vfLUWm6hbYLSFnaussJehxyBpmQqrW7ufsKnecPWEGqVhSUD6SDoHFPcpZ2xzz9W",
  "key3": "4zr4W4XDFvgcjzbjNTR5RDgKkr5VVugekqrUMUjCsfjZuXWS8ChB2zGzN2HpHnT6QEJ2vWqTaFKBqWdT84J9UgZ3",
  "key4": "4qByX9jVPWPY6WNG92oab27Fmvhyt3ehnnksYHP3wD8n2AgGPtkMrjwiUb8xzJa2952LCrcBrh518Ey9vqgUWLm7",
  "key5": "33ym8dpB9csjmUVs54Vh8jMhKSARkEr6bC2xtzrJ7gLZM192bxNVoYz9YMHK8cGgotwMT7s9e4Z7mxkrKUUgQGMz",
  "key6": "36AYfGiDNrvEAShTVbA5wp3R21j9xyMvusVHnVFjoeiMzoCYLs8Ht1tXoEPcUxTAX5YyUnTuAZNP4Kmdn18Zmx8K",
  "key7": "3adGL6mmQ7Dmyh1K2hNFU3FfnEveMvKDHz356CWSLTGzt3wMatNdHnxbFUvrm8kASw351nemtfNVZQky4SEpE5QB",
  "key8": "5d3nsme5UPy8eYEQrLXW7JCwtqJFfZ4yzcZPEwFBvEkgkXnNXVoVzifWuEBgDa8HGe2HPPm7wb54zAV1USgKng64",
  "key9": "5vbGAafaxgZvUfEn9y7172yQZJYCxUzKc3QafokXnuWRiGpkdWvkSe7xB8EApq6qutqpPiCe8oSqMumdfZEcCYFJ",
  "key10": "3tVkac5MATu2CPUUiPFRfFcdcn97Z4GsNMgTpxqZsZUq7Ff7xBf9iSwNVJCi1PUXV5YhZ6AT8cfyBjEtai5wm2m8",
  "key11": "j7jrvSuWMDcQxDzyzTEoMyC9oBvL4f7Xyr6mG2TeDazd8a8hsnuMqnov1mZgsbutaji5anBj2eGM5eEhrYiDXQL",
  "key12": "4KzAwxNyjznjC7WQEp7vGvb3mPzKKkUwyUz3MYmBXJRbu6m3UyExnPdcHr5HJvnhFy8aVDkxmtaZBG1oqmQDdGdX",
  "key13": "HgvDrNxWLwTNaPAM9FWaGueKVgs14x2hEEh7Qku6VrZbDDoK2STBim6ppJjurs7S5eYWy5zjXviDufvWR3TQbTz",
  "key14": "2mEo7uTSyPTWVbgmAtdAZWrnU62GvNNMFJ63cNhef4YU4ScAzh874i3ZyWKaHJzH1NKNLScdayAkvQdgQn5cYpyh",
  "key15": "5cstjcGPSMzX8ht3pJ9VS5rpRf5QNcCi9pcxRc3T1gWKPigAsQCJTKsyXkEwWaw5f96nF4DviKLsmELg3nyCaNg7",
  "key16": "fce9tLjoYP6HigfskBHfJnHyUsJBefPrYWYWa9DqjoSpQfT3TQLm4ac7Kue4prKyGQsFeKwHVAjAoei3LYLd8cS",
  "key17": "4QfzGno6Xwcu3g2kauMVLRtoydFiwvGDpszhUwDRhfTjuiyxs4biYWsgwDVvo2pGPYssXxRvL6n4q3pcBj6J3cew",
  "key18": "3HygzvfvduocATC99gECgFweQE6DrNfrPtroVQ2BpdjFPSqukdDPqGEByM1FQUfwk3LKkfuQy5ZFvFrncZXQiDpV",
  "key19": "5z4sNbW7kig2J7FZZxCHjzYsRy6sj8Ui1Hos6kRrYW5oxJW9UesH8dXW35JGP969sKbkvQRproX8ve4owUxSs85N",
  "key20": "28ZDmPyfXcpmPTL3EaaSVNssxGto5DoiQzdwXMpjq5mY5AESBhS4F4ZxD5fnNJQjkwDTFACzVD818QiXMwGEhnmt",
  "key21": "5TKkM44wyEwE2dvPLbFF6xTWECoHwWWpmr2gdnxBTwgD3WPZp1igeTEVY8sEKKq2pAkxisGRGVrkTLcN6BpMkTC4",
  "key22": "Go98VCyrrSjortFhNMweURpb98apwKPE2DmT4KjpPnNnZ1fdCLNsrEqWDty9389JTbDiRJ4wBBJWiBCAUWDabry",
  "key23": "3VpFPW1CxLLzX8oeizVEBFN2xPbfkPDDNCrfh5aXvLWMzqo2KT6EyR6pmeub7XZGkh5yNxuqpz2sn8mC6AWAeCMW",
  "key24": "3YkbGiVqFYdV7WUUXNMiaB8Y1nAUTAXAjesKXWJWDH7Q11b8CPTxBBoXdmBUMiJvrhCBGBndMRv2MC8Bp9ZbQDgs",
  "key25": "4KFveAqCV388eU7Ja1auqycgYJ6vokZB3NSML743P4mMQRiFt4JLdJLD3SB57ipUio94PZMirnF7LxjJvHxbLPJp",
  "key26": "66uWZuJXwEwU8SuZ3tPW1xCd8xbjCBWrsZnM8CcnDcKabhnv3rKZ7EsdLHyaEFVe88TPkyDRGH4wk97hKFkqDaSx",
  "key27": "4Swsq9PRZnQ2ymbNgnWCwHQMCEAHgdWJA4eSUU4ninpW2urfU8kGVmQG6FKxvoSoqdNjYyAzManAcLv6ZjMuoVn3",
  "key28": "5xD5FLZ3EH9eTqZYuH3pZ73xG8mBYjRPkcquVTpeqhLoSh8HKBwaWCJosWw2aht4vVCbucNzm2QyAzW3d36HRLZi",
  "key29": "4LgP2kyuQkRbNn1mqzUGRxHA7rUnnqZaZFjNa4TEoDY2sDvh1yKj4THBnzwz3so6fbhrKGYhsFPPh68ggBRryGKW",
  "key30": "2r6PpteNevBU1rxRaFznFyzx6Njgpb6FczYQmU7AMe95qTC91edhmcgWW66Sw9SU6xDCtMv3cxZFjTsjHbMgojC9",
  "key31": "rHynCxGLzDC8HeuNTHNLd2RNoYnjj41K79DQrqDW7kfEekR6UxmzCxMieSeg6cZWS2SvsSWXXPmRfThNtjFmMda",
  "key32": "UZ9Wd4pfJYtCAKRdz2mdcXR8BpgE5Q3sndCS4KtUUTvWsTEG42tyfzAYvFizg8MRnZZ6XvU4Hz1n5eEDxy2vrCE",
  "key33": "3V2EQ6g6t5M2bCygBenW1DyFne6UMkBG7fFTBqvT3mzNM6e97QgsdBVtxqLtkQVGdBmCd1Bh1S71tgmUgbrLmUEv",
  "key34": "5FL2wF6f253wqVJDSkzQp5EEYVgJTRQaCRdfYJzzajxBad1EbMPwcCktcAdRGWtnHVVBLuHtcpfn73L8a89CL6DG",
  "key35": "5yyvmFD3f45XhLPsfLcAPgqrTtFmbSkpvxQrMCTJUhLwKuoLUKwYUNFuhGE2EN7BXtmEq8tp2FtgPy7BAVU8LMNe",
  "key36": "JU84iZap5UFH9TKvqaDDymLadv9Ntx1bHCu34NgnNg2XpHpJt3P7V3gfAGLoiLxGaFtKsK9HRKdFjtTu3XfSxkZ",
  "key37": "3koi2dEtGbju1ScUPCDLnK3SJU3eAB7smcpydSEPBS3qNa17dV98LwvfDmvL872aLyvd55Yc7VV5sgZeavv6dVs3",
  "key38": "h6jh4mHf4dNhm4tHJrwsJxLeenK2Ky46jSe7VZKd7LAX2o9KGNWr7o3jQubuuVgG5DJ7W8oLhRAwVP9DzykDnQS",
  "key39": "4k8S7TmBBS2n5Q9HBdzN9LZpJwKAxadnfawaB7KSU44gJBtAcVHDwRwTLzVUUShYmH1TWjaxSvyUfvJd1Q8xfHXW",
  "key40": "33iw1QEPXXrVhT5KVCmsQYcrHJ5ssm8UoXPGqYBgD132vEihXH1mvEx7rq61RRACqvaxDFh9qSds4EgCFVDSBCU2",
  "key41": "5hywCUeSMZmkXAxeXwU7QBygg6xpnS3rq2vggX5LXaddUvaJmYowA65wS8gE6yRsNKAVgje1VK7uNtNbLEvSTWAm",
  "key42": "GCsZXtRPWWp2Cvki4xoZnTqSC7SvXcBcsQuksoTyXyLDGGXW89XBQSJZRYHcoNPB8q9mM7C26RvmxBHMQGZrUGy",
  "key43": "4T5goeJWexsL4rFfXTS23VJfogvaW3QEYQHPJ7wYJPxGiWyviLtZkMkf6GEhXBPgUZMWVZftCW2huSACYsqwSseH",
  "key44": "2meUKodkftX95HSmQmf1WqjRPLMmEg65h92tGfZ5M4Sf5vkAxJ9zRCPF6XuXmTq5fQqpNogYMA5rjoL8g6FsgRYV",
  "key45": "5nmsNynPt4RpYVk5Q5f2HXyjtEAAq2B8vhDdxhxzH34GbnTVJcPjbG5VNAGf1XeKy9DTgZmzFc2HsD72p6Yq4oqZ",
  "key46": "48kykriaM9PbfDqn3RxhC8359YypnmFjcNegmyqMmCRNKi8CdfzMD2SvXfb5mCUDdSRLnTaymsjHu7rx3dGG1fpx"
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

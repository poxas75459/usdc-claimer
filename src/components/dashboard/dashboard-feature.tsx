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
    "FGdjcbLQeGdbJNqXzcfLxoVa7S5nyiUeBvesmAFaK5YnfjScfVPo3zkjKuM5AVxyem8DipNnR1qBj46DftF4X9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kLMyRPdnTahJq4BgUFSwQD7r2eq5Rv6X7qmw48fSdcBvFgEfSBBTsarZqKJdFbZEm4KTqqFyyNd9vSMgNPD7D3g",
  "key1": "LHnoaXBeg1M9LGDE1jg7QHYnFpeBRGZGLHsQAH1k7riUzJJR6VxnUYe4K7pawZgtz7ZJ3zQ47QLhNLs2bT6qcvp",
  "key2": "4qs6FM7PcnbdRzkcFq7Z8QuybzJF9eJMUq6knXxGjV5cz64qxi6pEDbn21JGgsiF2KNecDh7V1unjGjZmkJVfrBU",
  "key3": "3zfhGPhgjV49puigAdNwtD69dgbdZ92LQyhaAPzNUCYpipPSbACem5vTCCwtP3TvAqPt8tai1GeqQ4udmxKTeQXZ",
  "key4": "4j6bn37HnHxZer1H6RQoVx1KGKrVuy3zGH4ieuxbHjfUdLxAbUKu3918hgKoufs8u37AxnaFcSr3KJKzgyAziG1g",
  "key5": "4XMatAxjQDJWDyqzymuiejR5DCiqXRRCbzQmVWqMvZDi6C96AEfpKdYatcxb1EXoWoRz9hThTrjALKD6fGoSdvZf",
  "key6": "3MTcx42uTCyCxPjTV3Ege1oktGwUNcrxtoyNXopnMJ4cznocKALCPsp1oXWaSa93ctyLS2Pf21cg5godzQBFzi1M",
  "key7": "39xice7WEHnRizRbY8Y7qYzrY3PWSMjcvCfKs5MYpvaA7k87CRsBjzG46zRavkEMXFnL89NHoJfRv9WAsXmfiJFv",
  "key8": "2wgHpqxiMcEYn1gwfgPftbZ6m4hThhxi5SqgGFJJcmcjz6C3aR6sg7CgejNEEZKaBfz855zibTgQCDfhzM29Pus1",
  "key9": "3KUyAQvi15PDn2Z5kKzyJET89898XprccQGeSkCZTcHRALTaKThxH7ttTHd5spKYyNhMkyNdBALb62UbvztK8k13",
  "key10": "2d7BHM6Th3qcUS4vtrahuu8eEAV6Fz7MHsuqhBmysDiwc8xRjfFcmR9BGY1otVfTSR8ZdomHn5yYBSbnWJnvYQ1U",
  "key11": "SDKyosjpqmLt5ujZgxDddWJyudhp1tvJLd4JmFh4px6nFEDuBtkf99cQDWUZHQwe8hjz7MZV65z6dtNwMJbnkRk",
  "key12": "2AbJUaQuExRvQRQSgYo6GdUEGF7EHxcReDxFhdJ2LtcpEu7ckxt837qX4JSzSgciJoFuPYDVdLKN26UhTvCcKqKh",
  "key13": "3rxdPmHeUQWTpY7GqXtTPxTQcRPv5YQZHRVkVe5Gog1Hyn9YrsC4Sn6afR8UHAZohBEXoj7xRKAGfjxtk9TaTzFx",
  "key14": "35Jkw3zd6CPQFDPZVE3uMADVN91kJJ6DxEcyDgVUbcUoso3zRfR4jnLiqSj1g3NogaXsQLHo5Pv24oqS5NbNycSe",
  "key15": "4S2nEEopAWLp34Sk9adnMUo1Vbjof6xtVN8brjm6KFvMEruS3QcvgVEgr12vw5PJW9EcqLyuCAEARgyxidVwnZic",
  "key16": "3jGRWRFAbYcAzdfHL5KFU3NvsaDC8KaAiyEBG3hBr4f2csjCmmNVLJgJ7edSndvK9xZxEmVzKmt6JNHRabZ8uaSw",
  "key17": "4wKY9gPnCejKmWt19VBRU8k7u7CNDf1jRhUKs3wjmPum7AqVR1o2K4rdhx6xGGD2feMgr4Hh7jDXDgvufjcCmRrG",
  "key18": "4fKcVaBVBH2oTtJK4qFWMCd9CKZeMX27GGWtxsNixbfkiVLDkXK4MY97yiFqdxL31kQhTu5bLU8WYK9FGM8QEwJA",
  "key19": "evX22dGfMNGCMP97hJ3zEVr1p3CGkJ9Nb7qYE7Gr5QKKDT6ppTuKWmzAVgQLU77pa3vyQDdoMNMAH8vkNEmhYpf",
  "key20": "2MWMhCX7QK4KQAVesWrCj7vH2xuc91fkN3vkYCU1DQYrVkSTi7ua33qGeDDbfRUoNJNUxsb3QaETRhLRvJioKjff",
  "key21": "633nMw8P51eGc2yLxmqRxDsnbyRieUhaiW8FKVUq4hG1yQ8otY3jBALMW8Nmbeu77bjC9u3B9RBQ4KbmyorkWth",
  "key22": "67Vtzm9SfD25FuCQSZkMrppxvELFjKkoeqJsPvS9mfeCnuNzNHHzqeHMBvPGeDEcrWNVE83Nna7RKcmdSohte5YS",
  "key23": "4xVw81xEWXgi9fSKrpXheU1bu7US3JijrjtGfJeNg8oNKCtJmdKbdf8f6YhWXKp4bbsUbZGUdSUenEY436RCGZ24",
  "key24": "2Uvd7cxcyK91GFLK7fk9nTFyqZvkdqEerkzxaqobMroVvQM2nQfdawzRjrk8Hk4NRQgBuH3ibW363xrUajViuURp",
  "key25": "2vBhMYZzMr1xgmM82mQpQz1T3yaDiwf99VuWEj9ZLqHgFpBxfDhpwCBDjDqqRdWtkuH5Si2m4mFWThot2uayrPAT",
  "key26": "3QSMiZDTbGTww44c2jgRgjQiQUWT6HabUJRdjAmJHe7jW7qtVsJ1LMLS2HwKABadRTQkNKLrrGTP2Pp7j2Jr2XbR",
  "key27": "2bqeW9fQvCiMzSUjW7Aty7uVqKVqVT3dhYCW3Uh6wDt47v6xeZuiQckND2yqby1DM4yTvxrkph4P1DX6s2dyy6wq",
  "key28": "4LncCRsykJjeh8ZMgSCP7h2wVnrJhTspompQ33avuq6uqnuGVKKpyf4pyEGzbK2Cpmxu341XaMiewdRN3XNduk7u",
  "key29": "3BAQDeyyK1xW5E9Coq6eNwKQadiMjbof1Z11vogPiYNYcehaj2S4v76cuW44eqTkRZidLGMiKSATMprvQZyRmGDZ",
  "key30": "2LmAzXVkfbVH6NhQQ2uZctbx2A9PnxCbQmz49gVPbCCSf1i6cLo9mg6L3iqFwqe21xdrioPerViMwwyP6XZBwmK3",
  "key31": "2RWxwhTskct1mM38k4aJv1R82gnRiMeECv2CrjFktVrb5GShBWF8qaY9zgTEWA1rDzLi9WmLq4rBitrTZGe3uNdS",
  "key32": "2uUL1ocxERbU1VZdHHRwjjcrvCTYCJko5zWhQ84Tbnqc4pBa81XLi7cikCwJLfv2LbCWwKnjPZRXAs2uvBnAX9Gb",
  "key33": "49nBWEGFAmLvNXaoj6kD1TKQNzrp2HgKskQP5vnfTXSHUsxbchMGEu2u9iA3QRLQ815vbRLwGUDYwmNJ5L1jzwTZ",
  "key34": "HVAj3zMwzVGS9n8VzQLfiZcMoxFMsm12qm77cTkMHf8xFSjfxJQYhW5Dp12cfsSMJUUz9t6ehyeTuSznvu94Q9R",
  "key35": "42xbQbQZ8UAzzok4mEL9RyDE8RTDwpqjrjr2kt5C8ZWFZuTFMa1GxkwNxcucB1cNJbk7qvEt5fGndCxQZqaTtae8",
  "key36": "4VE8kWKZbYe8mjWsyLoFAH1n7e9ANiLXJecR9oXGxtLKhHZ2ofJd3BeRzTbpq7SGbPdiSJKeCh8uXF8D4b2RF96B",
  "key37": "26UqPsVthddFtCKYqPPzWh1v3s428RjhNGdxm659bSNWcjoweGCLWu7CbvE1oaLM3NU4APy5gNjrz7344em6NQji",
  "key38": "5jm4PRkLsBtsJF4aY8LyP2Qg1gJxqHfBxsVo2mDL2UfyhDJGrvHsQnz9zK7VY3bP9W2e3X2JaFhhRXBRAGjLaGzL",
  "key39": "5FWMfE2uW88ZiAZYE5bPNwPbYpc2eaRXW4hQGBUP73XNQqH3a5JS5umauTfDxWsKFmajkx4g6NBqvqz18kNw5Xwh",
  "key40": "f9SojaU1gJHVsVutuAZAFzQtANpChcR14TbVkXsKWPbcWpnm2NZP5FUF9fMgaYDCZ6fthZ1rrbMpTocB9rsAqCW",
  "key41": "5iiHqscJ2sNHGAdyyPzqyJNGdN3gCujHNn2CTkoxSGKRvEYRZs4cmJxaBiw93tNHTWH587Gh19jBPB8C1822LZix",
  "key42": "5wzpwqoAJNwAiMtkxoxnyGga6kDAM3pdxaz9Eb1iwaU6Sm9Sgj2ynoBTfnp7tk6bQaSAKJu9yJtm749WkTHZJ8n2",
  "key43": "4Aauk2sahYvWjaxEYr9Aet4eNmcD1T7wNyKes5y8DVpsoLyoTsNCqC7SEG2Mtd659NUsYVFSpEqLcSjyN1MDzTT4",
  "key44": "K1nHk85YmVBk3fMySR81iZiFAxvquUkhN6ycMFxjrWeKpUpjw3brHLYJNizHuAcixdMnw5j2ZhxV4zFUxVTjKgQ",
  "key45": "3FaYhmGsWZP2gHzD81HkP1pShfgC8161BHMje836vkUzEp5oVL7Zekt6guL8Xea9VuDbbVpAnYP3nNzyUtSMfEJu",
  "key46": "eGWG7y5pMWZKke1zLJK1GHBe4hBH4hXMYy9fYRLJJRf542nmLGaXpH1XVbEF8hC5KU7x6StPxRFa82hjqnACsj9",
  "key47": "Vms2MVNzovxgaEKqxRwcvqnqwZt61vaY5wMwc4VQjcyfw63LTEZe9viZnFuNNpFHfJiZ5UaZdKv1nbnsraYcHzY",
  "key48": "WvYGKEbJRZtUcMwmvrYoDy9M94rszf7GviQs5mmDEnofwvFYSnsYyrKkrcXYnQ9sqydV6GdK9jfWxA8VivUUUv7",
  "key49": "3fcRGbXUBtsf9sV5TR4VPdFe6ramYYkjoMx765zQQbUzsdCHMQ79GQDbUa4QX5vp2La3arWbRjeeEtcCk9Tu6ioK"
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

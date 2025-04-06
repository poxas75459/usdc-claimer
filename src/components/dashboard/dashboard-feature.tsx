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
    "4k1drvNnHQpbZWapChYPUWqSDgtFP1GJPMFEFFf94sWzKm8VxbsTJL1MXCUrSZudRmSc9fnuGNf8xQeyUV7G2Tg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CKEsHrAUa3ZJ88Y5zsw7LW6xfvvYr1wguPHXKUnBGmf7YTKCPSRZBVreBKQZdqmKoC7VycZxhhr8XfAsFCgA9es",
  "key1": "3cvSBtmH2EcEJhG7JjVhK6pn8qP4gjQs2UHudJZwztKZKVGmgazfvNHFBeSuZCpf6TWhqxQoWxBK4dG65LeLqtYi",
  "key2": "4KmngKVacB6K9gATKdhr5MKBmuEjuKFDYknwNNLobPi6tCfswqe3TasZWwWS3onrLD9dYcnnJ2G4Jz9UXp1fGkeF",
  "key3": "3G39rMzBArV9Loz67kkQkNRzWjJBNehZfhpDSezW8xCYGDnUYjyaYumnykBqttqCxHBTb7qF1dGW1DtdHRnT7MZG",
  "key4": "2DCdcjSf3fWJwLRpNcXuFzQKujX4Ddk6CzwuZ7C2jXz8v68SnAFDdLXN4UNhmNbph6YxdfBzPteSpcRz6i4d8jz",
  "key5": "4RPvro9FFYQFyP9M7PM5qQhsiqSVGcnjpVusCBMnZitTeZd3xhVWi6417iVAfZSb2MfwwkoZ3He2fDfjLFGjyjAc",
  "key6": "3xeVAMY8ge15bmQ2KeCXhHHoBzCNK19brmiNiwMGWVKeEQZRDzBJdHkNX67AQBSLuykZbSA1qKEzopUFp4Sov5Aj",
  "key7": "nU7M2S9j32uY3DuwRthydHLHyXfESGq4Fky7Q3CVo5jT8PbRCVtCD7AML4HKkCDATWWd7ZoogQDPoZt679ZYEiq",
  "key8": "5yiCvnRHhDL8mPrWt5gTFbcJtDP6XEikRfiUNvbK9DZvsdRuigFcGh2Kr1aREk1Lbjw8rbnDWRqHQN5sV61FVjhb",
  "key9": "5GsNGLSwTLw3Q3FhDioN1PnEuKqh9ThTV7AP6NQMkxiHSyCbqP2k7UhJSCaaTbWxi7YttiiXwSVReimMvUkQPm1T",
  "key10": "2YEosFkTpk6sq7ducTYiJ2VsnZVCgKAGHvaZew8KXzyGP69ShnUKmpxeJ9jmpVAKgpve9ib4dG3ieMJUtnBKeZeC",
  "key11": "p8FGhTt9qckyxCXcrZQZHHyA3wAx471SifqiUqETMoPmgpZFJB9pqau6xxjM5brLd9itd1zMUQDknzCvAutM4vv",
  "key12": "4fXPHccoJfDaRRR5iJMMdauxmoyeqFK8UxgowFS2vrNAG6zWf8YEv9a7w9E5amGHwp67cCFsNZuF8vpsfSr11nCo",
  "key13": "624Mihm77FimGBjbiGjF1XuxvEt7CCXoXWrQbxDExhyH4rB6WZaKe6ioM6piCzkwpcPhNp3QeA7T57TEgJ3vF5WW",
  "key14": "FEhQ7tViajyymyLCbLtrSSJ3Li7ujV1BWvffDUnKJ1iapi3YuGXGqHmATc2LfZBxYtcRm4Af7cjK7PahfJDgWeo",
  "key15": "35RE1KhUe5vH6wxf8s22NPpJZdnkVMFZBoPvyMcnomGxZRExeybyrTM1yLK3ZzPJ7VbvgTVn2g7zGtXXbRwWqpo9",
  "key16": "56JSoiL2LGeZL1o9piwCuZtgo64AozPDHfBjfJcGyqHZecVdUX2fCQktP73io7dkFpWfLBstg9B6FJsMxoyc9QFm",
  "key17": "a3mASNfUpt7XA28BPGF75TiaWjCfoaWN1XJPmTCLif91YByYFrTxPaeRXZxwjCeW9VVUpzRuryzuFtTqBPkVFyV",
  "key18": "2MXQRYEBDubqo79F4AYY6UCs9tku7gUs2jPiPRAxK3BaQa3E88FkmiMKdJvceptZQpWXdz9M1L5uWXov2s8rcVxw",
  "key19": "KWfqoVC9BisYWdpk9a5PBGacZuSavtXnsaWPZEf8xEg5H7djUjZS1T5GPizDP3BB2yteZNepy6QZ8PofmaDPkpo",
  "key20": "57J4qpqw1gwXn33RZGM2miS9yWr3hTFUCM5QHAMEpBsTgxFdc2MAddpXB2u7Z71G2uKJazi37jNHw3mDCBrByvQT",
  "key21": "3GGGMNk5snpJrCMkK8zUqokEc7hDkyAmZ4zU3XFK5yHn2GXfPN79Ra895UiNQm7jkKjK1jRKx3PBtCV1hfpiajSj",
  "key22": "MQoAhrXenGn8t4FufX5rBKQ8uuVgrHL3RH4zjR1n32ZdVFFmSPy1wCXRFFAFXnhy8NuTczMJ5SJJ8LTTzthAaNm",
  "key23": "252RH8pjPGoSvvGMd1WHpSJAK4nN3GzPN4EcfLsizTwZYSLR29mGkJch3zL1SM84YEZgN5z52uZ379miYxa1YvCp",
  "key24": "4DFna9mxfFU3ahmB4oKeVET3ZHpuT4JWjpxPvN8YPFXCE6W6y79gS9gJzGJCDh636JFW9916219LS7HcEuqYTUpb",
  "key25": "654xKxFd8L8HW1F2ognadgSzUkZ2ZspZpA7AGdU72u9y2rti4NDBsdoMvTGwkjwMp5SMgiDnoqKaSTqX5Weh5JAo",
  "key26": "5bvCkuCL2HnLJxXPb2yuGiU6LbmGN7PAD7vjMekEmM9zMMbYCaUMQVh1mkpj72annTzG5DbAzo2j82SErQF5SbnW",
  "key27": "5axy6CsFf6W7ZyLPj4KH7tXErs9wuzjWwfeHJ1Bcp2HZoFTQYQZ9XK6obUwjxFXbGa6dFcv8GBSrCzvFKq1zhoSL",
  "key28": "hRrbikaxyYHNZVoUiGckHm8ueFEHpTSEbUwYyd1DGkpeqrkDwVxWp1xJJS5rrpZ4WVx1L94tnjFyFR8SmhtpgGZ",
  "key29": "3Ci5sFv9Lyk6Xko4thjWC6c3yqXXts7zuTJ35zARKjT6ZQZxGcdnSrUYS67mN8eDRhERivL8eZcsk5w6ZezQwc7q",
  "key30": "56rVJtamvgeEemkvzYpe7nYuAYq2bFNxo5Ecf1BrhgL1KwUr5LkoM59BgnUi9vzSinpApTVA5bD1jpndg5qjR44r",
  "key31": "2EeTYSxxEmp61Gppo6mRygZdEp6i1wbH2HAXPqbe8BCZe1gybCd4A88pUqk6UpzbsdDXBrpHwHefG6S9ycNSWc5d",
  "key32": "hU6vtuVjz8LR4uMiL2qQAa1DLDvaXhm5eeordNA6jyJF7PhGEKyxdJgeJRn44YTfLVvqB9VPpmA7FNbnxyzMLgJ",
  "key33": "5KMrYiU1QzHoBtHuEUx3WZmkTXRuVeG4NrunajPm4mXV6q8cy5EGdjiDyWuhUawtN4ezh11nXhXteFiN4qHPJVMa"
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

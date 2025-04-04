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
    "4uAbZtiAooWNAB3LMqUmwtcnh4dhLZdoG24v4im7ruALByNt47eUkuinznM5xA7A5fgG53o3hDw2UK41SsXRcpWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wUFphEbW3escC19EzhcJAG7NaJqRayp76oLPaMSqz3ujjc7JkVCqWitosTXHnU93PB5F3Wws6voJJdzYHFqUbVV",
  "key1": "29fvD6U5dxZ9Ey2jZsjDEf7weodGb89zJsiofvPuKzHfHCYDK8DFVWnsV637p9Pf4iK21UFCJ3maiXqZApgW2nhj",
  "key2": "3hg27Q8SQgLii9vnGGw67bKCrMtHD6k5rSwAciVBCWz7pdHXuFp4Dpa6ZEaBLpTr972BHS2hzGDgDLme5epsPRiJ",
  "key3": "228NSS4AMdw41S1S37Lau7E89V26BRdBKXVTdzKMbFQqhLwzTBd8HXiTh5kpcff4rqxKzXziZd7rf2s5KohRyaiX",
  "key4": "2XpwHa15kdSuksTDbPqSCaFnrhXeVkR4sUEGkMqaXRXKt3Hrxto8vGBKAL4ZcpYxgpAPqNCCEaJ2PgUUzp2eTdcn",
  "key5": "3JFqHbbcznejDr4i5vxhDbaLuifDtdEVWFTe5jNW1xhdhJc7q9LmBKwNGeS7z68HrBS7g2khBw4nV9KZBxcvtErM",
  "key6": "v9XXE8PrEV3QWoaqqCcWe3WRmsPgyDPKCMkYtHYMbzmJpTEZ2bDnqcP4B6p9M61WWyjFXsyrwS8eZTGNH8HJdDp",
  "key7": "YPgsazC51t7u7j4vzDmu5XLfV4G7R1i7a1Rd2CxYVvMiWXRkjocaipXpdqFj7GoR2pvpRZtGaavXW9j64zc9tZX",
  "key8": "5zoZf7zFcTjtTa1bjLM8sLwNXwAHdbGfJqqf7PZwrc6KNUx9XWB2hQ5LhKRf1aPrgw9iubudBQ3h9k9h47SR9nZ2",
  "key9": "65DMXJmKiKi8A7Sx1qLVNPRSKpxyT1Q7Xs2Ebf5dq72C3i2QU7Zt494gSaSLkdinn6D4L1UYGQzFpSr8bFr3JFww",
  "key10": "uZu73TtyUiwKeQK8RcoZR7mjEYhjSsrLWucs6UFArReTk1r63Qvqrf9wLFVAjuCZ3zxSeUeyz2HUqj8JmUMuxqt",
  "key11": "2yVK13KuGfTQAKPTfwZ8PorHbfz6LxLemFrWtzceuQxZxyogetzYtczWp71fTTY8gbsvqctsjJDjTvRfwBDSpzYZ",
  "key12": "JiY67enSKdFkTbM4Ar6YhaRMSE7VApc2pYrPowNccdF89jmzzQsmWJz9RmiHoHo7Z9ZVUwzSw7yDFgq1FrSdng5",
  "key13": "4nwhiQqaMwidWFabKH6at5EQwzzrxWQEeGQquG1wm8Pn28eZ7tN7qmBhoYnrJxgRZsypcmX8wBHWEVPWLNQKvHJw",
  "key14": "3Wt2AEJwZobPCLA5amwxJUCKSDefhMLbg3jgPaMZLo8JufLBEv2pyC6d1zkyu1Mn6dJPiXtoungcE9H1gTn7Rthf",
  "key15": "2j5FiivuDW93WasC3te6WKhkR3H3DVRoEbF7PAKRvwX1DBpZKcuVxdpYdsqpxxgpCVuupDAaxhoHeZuJ4GE47M4M",
  "key16": "2cqJmmAN5Gy1ywbKuU6w3C3YfPFAP2D6io6wNn4SS6gENDxnfwk4gn8VhxykUaZCyVgBnDfdCyaQHSdDiUA9AFzV",
  "key17": "2qciE3X4cxaHnrdjfsN2ypzJrSrENY6J7RXa8AcD3uRmQVTtNFRed3x4ZSsLQAJU63CJucNferuzz6Xi2dgoxzRL",
  "key18": "2JHruhpvtopjBUUErhEFaEwG4q4xTrY3rJspRnseaCx6zK2Kca5RRAjQoJJYsEx7Vbkv9e6UseZ9Kz9kfhySninb",
  "key19": "5jcfcgqvgkBM2pKpu8JMfQF8bYighFf4iSk5sXjBU9R1VyqBEQwGU8YkBRFU3heADtGjkWBnuDchyYHcfjp7GqZG",
  "key20": "4sfXAXJyJYk9eq2ECnASQ7Hmgx6UiYPQtnqTr3cSJVTGxto1MXGq8w5kWczoTXvBhE4K4DRNQyZCuZRxazfyngHE",
  "key21": "4JgQiMxNQgMAdFfwG4T876o2CUf7UVF8HZDW8k9h48wkyywxoBmWzguGe3yh41CD8DeyBkfkEtVH4DTiSfw16s8T",
  "key22": "3vkkAQuSQU3cTSWDzNLS1WUn4aWF4w5XSsk6Dxsj5EVekj8arQzLq1JCMxXecmf5Ajnuemy2KJtjn8KrpsCLoC3r",
  "key23": "4Lf53GAMnLiHfqHUxe1fTAoVTMDyYJ5MvxxUwV7obUJ6TQ15yM2bQouDgq99aHUC4pnwfgs3zWSauUfbZkWA1oEn",
  "key24": "2B2zWR5QG8Rco9nQjtwnVn4T8PVAjSSJN6zD8yH3CUwF9v2RT28f7bvuDBZHycvuDahRDecjSL2aD5PGcKPCsTq6",
  "key25": "2xQcF7HM9WCS2vG39s4uw1yQUEXpaHGWsmfR3QdLhw33zbXae4PioQeaRfGUPBjDYwc4tiKtif1EmKm8YpqJaUtn",
  "key26": "2U1jA8gPHRhZjfsYCE7LeJ2VGzEi9fwvy7C4D5B2f1XrWBuyeaKXnYtoZkMzLowmEwVuztjm54J9137ZHuPdRWpi",
  "key27": "4bkggTeFBiqzneguamXx9KuXxqQnnrwbp9gkCv4bSfhY1kA6BMpy3cACi9nDzogz6ShhwF1Ui7tqP2Udjvvjpfyj",
  "key28": "3AAptjinaF6L9VPvfzJPUJD3wrsaXx2XLf8JkEkJPovEjYC6S76cLs1FkvVbKtuZbK7hoPG4ELmBHqc6tmC1nTms",
  "key29": "2j8N32oJjdGasNiSH69Jn2gwpMr5KukZvXTzx9i9Efx8XAfCpB4Qk2BHrqCZ9sYLHFEWJqFEM3n2n8Z3sBECLWDh",
  "key30": "FPzZHj8JHMBgrund2QQCNT4m4xHaaQQpDTNZTw4Py1QhGMbDrPSfecFn7ifCEwozuBC6KkvQe9Mtyozc4CUqTnM",
  "key31": "4nirjLuSHUKZ5wbahhrG86JRdLdp9BM5iyaKJ855CyZNryU3ncACq4pe2dhhn9DJJjcSc8hsMAkMQtjzTB3rpn5J",
  "key32": "58qoC48MGzwdHSQbjiYiDc87n7STgXWyzHoxSAHm1kogjLhDwfuaG4yGqtENfH4vjKpb51eeWzC4mGL1vBXn9e3w",
  "key33": "4Sgz2aHqZvymKP4DXqEF2W1Ke2KZFwTensp9DXgZ1hE6wzuwRd21N3Ldd7GKipfGdCqQnXUdAmjcDZQR953u14Jh",
  "key34": "5xUQimrXzi5aFD2kGH8EfXjkbp33u6H6yvFBgXoxfUuXgz8QWaXVF4vnJX9VSVxCgoFgRa8bjcLrxUXhUpqpjKoN",
  "key35": "4CMZcWf9sBrPZpHQsZAqwZ1Gs6ST7SZGZaoHdvGRwWCkiL7kRXaEv7WeJb8i7AtUnaNHP8hXW8om9NrxvyG9QnDW",
  "key36": "4QkWyFJeAkGBvA6wXFen5mZDKAUSq94nx16nWob7GPdKSiETLcfqas4aQv9npWtzgaPWvxrDJumFDdmsNPDXt7jn",
  "key37": "48uGgFFbZThqcVavGKhGsGnX8Lz3GG5w9sfkjs1kfcgxgeFwQVwhyCw3D77z46ZgCSc1VrYuB8dVGq6iPMwj13Wx"
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

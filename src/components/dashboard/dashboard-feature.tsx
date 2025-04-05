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
    "5EKdHG6ELRuXup6uUjp5VnLgJG2nZVwtzFtygCC1gL4LPcWwm13PCzRYRPCLz1vYpTHgDBhipvoq3k3oVNbevaGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FS6kMguEvBJMRuf6Dz5zPkAjVEijtLvuRtUUrMFCYgocmnAR3ZiSwQ3jVc5bvxQBAwzboyMrKK3Ms4aw7RH2ubW",
  "key1": "5mKF6TbQiqirG9A8jbCBzhKLatdM3SpaBwF8kVsGjYMf1bbEZp1WujbXERW7GateUENhE9qHYUn7TXmtTaJnEJoN",
  "key2": "2cKW4QKgkPksuWNghcnrCwnGnkzuZwX62md1qLBSXLP2qzgTY6qAFg8CY5AD965vVKcEYrtqaucrmyaCGExyUg37",
  "key3": "2G7hNpVmEJXPxFDB4cGcA6R82N2QeB8eFRCAf3qtMVhVSwGmKw3UPytbnP7aMv31dL2k6kPfBFbPEoQ9xxMLBoiC",
  "key4": "3x2g8f8PcM8UoaDD7oHDZkbaE9et91yqu35KT5h4LiRqCpk1H9aCEjNGBxfmTL4JxBrkKKTHSWn4z7x3jMKN9owi",
  "key5": "4mWXUXMwUhTRM2N6ZbL5CxzahxzSVNJLy2Fh4S8cCZEkHxzeyE58sHMqHa9CLDZcfHKCoBqvHD15VPW4Fpy8keNx",
  "key6": "2sk44UQGa9ZyrVUhEVqkPsVAeuyv7BiYVzxnbETgHnAVZNPzFLwrjdnBSgfrcCNig9UUY4UV9sF5thH5qvctxkW4",
  "key7": "3UtYUgdjZP612N9rwoA2kWuVSGYER82y1xBU5pRLZSdVXjVS6LwRGMYqfGUV9e33qVaqk6sKLmHpWou5E7zP8R5P",
  "key8": "3szzQVXJvGeHT5nxjW67WWugpTQy4C5yU3RYcZVPFrtpjtsXzzE4t8ma5iQJYGJVVQLMfh2aneg4NB7B67kNcGBc",
  "key9": "3FnwrX3Nh9W5mr4MQ41Tz12GEoGjqpmr98d3CGRDufr9oyBrY1XUMmn3BcEZTgNdfwVG6sMsvu5dnR5bDvkfynha",
  "key10": "xa3ZRpvJUttGZNKh72qZ3mrFU9SkWCsbrBrjUnqTvS2Hi39sg5haQpk3hQxGW3a3G4ykzwoX62fDTP4iVdt55oP",
  "key11": "EeWx9huwyBg3CCYaSsMPjrrJ7UBfCSn1n5BopQRUU4pncjSyKXKrdMttcUR7KYTmQZuN85ubAHqkw39ZkajZDM3",
  "key12": "5sRrk4kEYdPLvEpu1RguuEnbqL4YW5c1U7YPPt8YtZHrLb92DQa2yMx5p9MVJvktQBG8C2RJAaj8cBQpEnzzdN4v",
  "key13": "2yVVgxh7sU6ihNw9ou2hVJFDzstwzaMHrPTomuUsdsfN41fLgmDxExP6fy8ChEsJj9HmkggnYhBkbE2wRuo8333K",
  "key14": "3UKuM6fK9VJju7K9bjXSsnZoi8xwB89sGJ6zbPCYquLbspcMU34Q1aUZ22vpQiBBr6c5xJHHiSTohR8uDPPPrr6S",
  "key15": "5ibyNMnkVUWMHHFMeDixCyo9tThvGng4Eb3AgGSGdqunoQkX4UdzsKTq4Ab4giMG5imBDprDZzw2TwEwZp3HgYuA",
  "key16": "C4fHUsm3cLQuQpjAoU88nfx81BGsExy435ivmERfz7pFu5rDMa5FueqQCZJoHVgYLGFDXeMUBdmXocXz68KSqSw",
  "key17": "2TJi5oxJ8GzsrurBifXWLM6nLibvBdH5nhu8P73W6bRFUss7FCfqVevAX7MxhBGZrUtjYC46Q3jifnJph7KT5Et8",
  "key18": "5wqtQnYkPGLJpv5kbuDa3usEsdigRZjAxMjiCKLb4L4FDDutTTuaGc1QqwkD7gm9Y6G84XZVnRNSDw6memn65isj",
  "key19": "3DXVMh4UQQfdYjKobQ68Fc1CiVpAkPBc222iGoEaB5H622akgwnexts4XTzDFSxAdx4KhrLW2AuydmjAsYv4C1zh",
  "key20": "4Ju1FurZrgyHnVhZeZ5gEpt9a7PxNSeTXhrNePErSBV5RkSD1SFZceQ62wahjbcwjymdoSHr9exKuW1TS5B3i6cr",
  "key21": "3XRNqi4o7YryWDRKfiGkJ2GinebeXJG3HUkTe6ZwdDvJj9C62BdUu2KXHNKSjVJpEqL5UYxN1pUQu8WiqmERP9dZ",
  "key22": "2P3mSKQx1T7cnApy6w8LGBBT75WwR27bz2r65dFJ8n9XjuZ3Cus6tBaZLpia4Ki2vfoC4uBnDRRJrkxGsuXMDGC7",
  "key23": "24brwgtiquyDxMzy4JXrMhmdK62DSqyNBkbKSVVJUxeo4fm8KC7HH4rA4qMX4WQ3SARLMMwaaCqHCjQ1WPkAZTfk",
  "key24": "5YejgxEBprgWotsggkjnL8oZzGcxHiRurQTm8CMtQGJhsBEpAWT1auve3Vtk6235WQDpKckKgpr7gJ6Ye7rF5irF",
  "key25": "2g3sbLmGN4vTUSG1XSNGXmbcnhwU25ouN8CwiiiLaNque9pGRH3LRuFG43Xup9MCboNgNcsymKwtiqmqBcVJJbJs",
  "key26": "4wZLk5dnwmtAqDaW98E7ncUuDZvv9tENCYGrULHfDpPXSkTS6Nf3EL89pfmRebC5RsW2qYNPSVi8mtagoANRJHkj",
  "key27": "5EGr1SpXD536c63KB6NgSRvhAP6sw2nDC4bXuEEe41zz8RACf2h5tFCM5dcs77TT9hqLUF3ryghnDrkvk2iYajXW",
  "key28": "53rj3UUn5YavSasMJsTKPkp7cbu9s1BoP5BPX9M1sYfx6thGzRNkSsaKep4tm29prcWqu87CqFoP7e68cqWd53nN",
  "key29": "2njYUWePqZEJAuC4eCXGfwapxEdmYVSRqYbS8jhe9q7LoaDtvs6LiK9Bk5eaymG447xZjFgsq471gKyPduW5x5ur",
  "key30": "3AQ4h4scE79qiEz5Dd92McK3MA9RoYgevmRct5p9La7KktZjFnvPeA32LTjyspuAu626ozHuaDYu9iZdAmvpB9En",
  "key31": "5UzqNgVU138TzKwi2dcWXsTUxrW9tMEM8kUxQx633rey32SGbzU8mF5CvmQVvVpRnyWKMxo3vGrAZ4fX6QriLf71",
  "key32": "629fsJbUJjZaiWs5soSMe3CxPyS2WAubBGuEBerftKiJqLMmKqEEgogVh23hr9LzdaZDJ5nATMGcY7uL5EMM1DKF",
  "key33": "5ToAzCeiQUbWDLXKBKU1uQKw6aNhB8YpvcKkEtBK2pJbJKAr34bu3K8R3WYUgEkzSG1n1YY4YPmy5K8xN7dJQCVR",
  "key34": "5UNG8WMLxkpUU6z5NqFfH9hnstGjsQxuFyHsnMkkDptB2YqkEvE8gEybPCNMFyWjzdrM9VX9LQJr8L2spnaFL3QW",
  "key35": "gRrxWAJw1QVKvW76yuhvPPJQpZubMbtKpCeU2xRYJXcZUfHsAb25R5fm831gg7tc4Zwa9cep77vg4mAfWwuE8z7",
  "key36": "JMzaRERdurSKcdrsWSj4Y7uVbCazPamVMcdu5nCm3GYho8KbbPEUTAQ6wHn3ksqeG7uJTZSnKNDjY7ViwsRyezv",
  "key37": "2vyvFLBq6geSdoB22eqmBSm6t8iVwhcRVbQyJXoasJu3HMZ5dN3ZWvW1Y8zt2KnDc4XX7nFNDfkonNNVSqET4G7Y",
  "key38": "46QgEheBTCqPqBvcYh5njZKnJtcs967peiZrpZgpFV5VgdFUk9JkfSjKWxHrew4fquFKsFyUe4cJJR6qfgkdWng4",
  "key39": "46YPbPok8RcCgzLutgQUfdxb5GegZbksYpCQ9ctSwxLuzq4g22waNqwyde8WuM61th2mDE8jb7tuNptmazriNRaW",
  "key40": "5JDBR15Zs1QDTW9EBQs9JZUtAwRNH4QZWW2vGQf5qofiXNeAj4cd1v8wGagCgNtYvtdBSXDZ4XYWCdAc2tAoRy2e",
  "key41": "r2fr3M8ZxecpLQ3TWV4EKTCWeq2EY6Fu4xcSK15kbYkCAacY4SJEj25G3gD4dt8ruarFa9Eb2MG52TBkmjT9CHV",
  "key42": "4Z1J8WLCFPv2ZXgac4dtfbkwLmAxXSmy2dG3ggeQZNg2KMpoeQtLUp79GUBeiTYgVzEcRfi5th9dccbCJJYbQ8FH",
  "key43": "AYYNe6tCtbYdiqaq68oKQ7SemC4fsbTa7ZCRMyP3ZvLCB7b3acw2yo7zMDsXehLy1GohJpfnjcKQxuhXGCY4Ga9",
  "key44": "2ZBJupVXacg4guQArd6bGvoUSTaKQcnF9i5RoHKFaK4nryfpZSqD8u6USPrvgy7igmqjbc9axXk6bHTuQCWrmuSa",
  "key45": "4RjWJynnYB1RjN8hV8xzLv8KsfH6pEV7zjZYqE4tdoSF1nhqvcevogeDEtiagfh4GC6hbH5CmoCF6dSSVifoEBhY",
  "key46": "4z8Lam5xf8kpBY1kVCMP6q8coBZUsCtS3cd9e6V7MuqkCxwjPM1xBQC3VCvzm9B3kDztHhC7uoryG2ajgbxtpehs",
  "key47": "2cb6veDJD53xUXMxYw5df8g9Yix2iP3LwczhLrnoNEKxw1esEjptceKyq4kfpfvhjRzCHm1vTdnutFRYQm8iXUtx"
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

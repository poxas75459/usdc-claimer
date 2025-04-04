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
    "PnkGwVSAc5z5LCp3edHc6AEWb3R7nKeZEm2NhfTB4pK2VfTaTwwGxDqEMhLk61eCnZTpWg79W7BC3DfGpLUJfK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33HMnew7RNwAHr1A92VSNjU8TWzhzN4UXtU5y2PVhdXQurtH3HagCkc1wbSZ3G5rBimvvbBRG3kd7e9dyvaPandF",
  "key1": "5ggqE5oGprzWzakivDc3dwYYYS65QQextaMepTwQEDRnJYznsJornPwHZ2ahpG7r7yyATJgBF6UkhtnETz2j7Y5W",
  "key2": "2LAUDBaNfCMVB7ZU8yDdbUmQNHeXirvcvSAugHjVcDmjnScrXX1SWNfa5BP7z6ECcivrqCdhcSoKcTXpyLAGhHGM",
  "key3": "5KE3T8GPNJAQtFhP3JXMp71a5wH9jjtXLrs9spAmvDcvH9sLWDWD7a8vyvfDbqFGiWaFizfwFkJPifwTFMD7VUeu",
  "key4": "2hj3918bSe73b4AzTE88wTkgptxCfdu8yyZCL74qgWfKLbGq9U2GowneKNAqs1uKhhYx3pregwL6RqFEpZgE56fC",
  "key5": "5Vzaxf7rZLH3FwdkcPBFQyT1oSSDxBgoMpgtQ15Rfw5uv2sZC4Ahxfvx1zd3WgN34Bnyt9Kbp3MrGFS5tYQfH7ud",
  "key6": "35ZvwARy7guwx6wMH1zqQ1vf5LKfuQGufGVZVeffsVqXQb4AKauTcEcZgVendLnt5JF7Qyqxsj3i3exmTHMFcAGm",
  "key7": "3VeLqdp9ZNxaL9rJWVkbNrrPSRHhoGTryg7yv1LX8ntHuaaRfKfUfW2fuFivrMYSZe9NATbWFU5q2ELdb5mHcN7T",
  "key8": "4QVRkSgB1p7ZoV7Nnqoo81fF4JFNaE7Ciyo9ECRKLbTHPpqKTnyvEpEvkUfpTszfpgpY1zcMQrxBRfJ3NUmHKrPd",
  "key9": "4hEZRy9ezG2u1LsHVEZuXFzNe8emZxdXjzJkepm3GSUcAC2ThwpQg5qYeXATDKhShJ1fT1UCmGBhDMumozW8nbyT",
  "key10": "44bo5ocTqAFKsRhvtWs5AvkMLAkdMS1JyoyKfto19kHYJCeghhgxxoJwQDjnGkup8mD6TRkMyARxjvCLRfTEkn95",
  "key11": "d6KuB7qji7stt9dyQTGq79nkbdnoxmfibvK6BnbjJy3PAR6Ca37ecMfzTxq4T7d8hJfRraZuvt4PEHNdbnMVNmf",
  "key12": "2Q5GdmEJ23LJUKuY1hzWPuEU1Qp3M29ZgBeespigg5ToEGAhm5aHU91QpJCAsb8EL6yvT6w9QGyH8MHWbEQjM9hV",
  "key13": "3hq5uvdJzvpvyr47LpTu9W5VZXYNGuEjbQTQTEcsZFW1NtLwXYVs3Y4QPKCpFD7ynZbS8sJC88he4QT4Ea1KuebN",
  "key14": "vCjuz2Z7PPz8YaP5BfrTPFwqJk59Yug42EzHjnsnFUz81nTc2vWHQ7mM5RwMtXusmkRPj94YNrnJD1KwCviZVw8",
  "key15": "3TBzNGkBNtQitKKxm8m9nTLoQNa8VskdSKvgxEnyqtPiE4BXRzJidATuBzhF6tSDtaJeZkh2jduJ5c5mRAJwSQEY",
  "key16": "5qSoaFT7UMb2nwMKzX5tYfcBmbcFurnwg1wpXAuCFeQVtfSdp2JRAurggRUJDvd9sUB4ViT6mDkn9FucemtUTiwS",
  "key17": "4ZRFwLQEJULTeX9yHUMxnd36tXuLSHdBW64BVEsL7UGP22JZFUzvgqcEDSyVVvgp7gGAKLXKaUBVzNn8o8Sh4neM",
  "key18": "5b1yfmoB199eYhXBWgDoHKQnPrmY4N5uDRnTR8ngZdPLbx8r1E7AKEAAkXhuzewSgJhAaeaTUwtj8YiE3gCWWgoe",
  "key19": "aWzWbLekrYAo6cPPdhg7TgXzVbQFxquUu8PndcofRZ3ebWWpJE8fysBCGhybZEt3yPgRjvZywh3B6bujh5Thu4P",
  "key20": "43NSZVFPHZdgi3XSoZbe7T6h9iPFBevWFD436YzK8TFPJW6WQ5BXRifbmYYfPFWEpoBD6LZEyAxG8PT7fWfetsj2",
  "key21": "5Dy9Lw3irLYKqdDvfT6WRxZswpYb7fg2ANbnfozZdda3LvTV2F7TwuVzKiFhsbG33pFpcBh6bk11t4Dct6r3Najk",
  "key22": "23M5iKHWTd8LGT5PaRuvvqtFej87k3HkqLjvDckK7NnD7CdUVo7fvkn62bEaj5sP9a2P8D4EgHJE4bs5uXqjFzT1",
  "key23": "2cY2wvUr1pbW7FGL6vHdRnWXMkppeXne4xHdLj2SDSCYWnMHsSHDKdNTTfMfeaF9FMk5oFGhzggEaJYm4nXP1NtL",
  "key24": "5sZTJ4xdk1wUe7a99264SeaKGV12GCrApPkdzzsSFU7jqLLrFqG3D9NV5ptcnnjEbvGLtGxyF4p7BadNCC6XzRh7",
  "key25": "pnAD6Vcdf2xyQ1toUs4H6e24kQCZR8KKqGZReimzvC7fBaRFn1YcUEWgAQvL6YKjGNdKxYyeS24HqqrSFVD7YPZ",
  "key26": "5Ef9r7TjFtrRFESrdFw9UAGEimHGRbtTmAQZ3LWMtHLaoeRhxMimJFBVHiuUzyDAX8WiuA8hvkVdbQy1hPy2hCYj",
  "key27": "2Z6ST2htCSAXgZgsGqwHAbFL4PweDckWLydntbzECid7XPDrmSfCSweQj2kxMXUtqKCNfy52HuEZpgncjdniFaoy",
  "key28": "5VSabyjhbi4Kpbno2hDCke7AdoSHgG1t3RvHXrko4PW61HFWxdUqLv4yBiRAQftUEo1u3LRd99KjqtA7t226pZeC",
  "key29": "4hQ1JBMbuVAVCgj85XfK6D3KEonYkM7oZXFMTfJceV1fpwVZxHLUF7it6rdPvA6dFeayonPBcMUo2X12s8FbpwhS",
  "key30": "5Rm4kUP5GfNgrAaFq1J8Rysy5GdJTUovxmuc53rsFLC5iXDoqMFeen2M4aD3WbAcLnwZ9PPQHko8eDiaWVHd6ibv",
  "key31": "53tvWkpQfUvhw8j5jiVWf918hEk4ALMB3LZmuuu6GBQ15jHWaXrkycqPjFLg4vnpWi3PdrofjfcHihJN9uKgrccU",
  "key32": "5mPG2YgujE3Dtb3stFsqCsfkERMAnUE9xSNELXzjjLn2766auL5ywd7SGCWY3WWsdkaKzRbfjbBLq7AUyZLEnUze",
  "key33": "mxwVsiJY4KYdSd8fwKpuDvFhkoMhtXUetoWWBQ8zKKbVL7pqNhHpiYU6HxMxtA26ZbzeJugXsDyr3i2SJ4tXtY8",
  "key34": "3p1JoJRjgYmmB861UUKosdtbqorPSXGzzWp28UhQASLPi1fKyAM44Xze4rGpqsU2M7pddiVa9fMn2zMirU59cyMS",
  "key35": "8UfBN2HuWicCa96HqDzdprEcQypxc3inr9ZWwQQ6zrLsaHJisuvWmCC4hrnnE8Cx5xFWcmucPpK2rARj2TX8FJe",
  "key36": "4so1rscDz8YCJwnyMtvMGctDghNyw3vzVskahhAtWcUArfAUiSDZxeKua5L9SEvynUNe9znaa3k4yU5XHjDv3W6j",
  "key37": "5mg747cmbFAD8yys9Vk8FFDvN8MkuEAVYUW9bSUtWpqazfR7NyaHzTVBTD1QjEFSiFvwZXpuY4wD1xEJ1vzxfrJs",
  "key38": "iR3mhJtaT8wZd6NoSaqvFzs4Yjg8zZGHv83vaKkyhs95PHeabjaEgLA94k8w9tMCy8YFdZEZBBYZ33UmfoNuhar",
  "key39": "ip7eGNFbfhyorhYpF2BLJhRyWJmhtR152UeUTz9DLyLonVMLdnbNy3LAXWAErdtxkRGsb9D4VpoNUXFdwCNuhFy",
  "key40": "2PiXbhK4p8zsq61Z9bzYMn7fQEaz6NM5AD4eDTpx3MzXEw1aRkhJ6JSeFDg1ckU6V4ubeAqzfgDpjhTb2VjvEGfn",
  "key41": "3a6AqdXtLRpmHsXWiihHKEefwctQWWmBRPKQaAKuBhUpZxoVMTF6WEiSqJcAFCGaRLE23v4yjThcheJMztfpgwba",
  "key42": "2AGiRZcEw9e88cPSFwgM9XdgtrjxMC32eMi88WRsn1sJ5NSccVvx7ZZVgRxrNG3ZywcGyygp25XxSdW6HbjtSwsT",
  "key43": "5dim6qqwTHaFkNjsgaXA5yoUZM4EZ9hJWRh9JpC2ysf3TMAYXRjoPQCPu7sQrkMqz4RWJw9NxsCqeoSJ5UzS7y2f",
  "key44": "5ANuhaZ4NAN6RurAvG9mzKXoof84r7ZgZve3AxNGymR1NYgMbXmoZZwa2xJZg1bG8cR2uzvQxJvTbh7zRVRMqShy",
  "key45": "QMmihao2Rw67fJMY11NmnridrtKY2fLkYbFsr9cg6Px6XvCampGD61KG8gmiJJT1HLhMMkh7LgLz13kk9xeyjs1"
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

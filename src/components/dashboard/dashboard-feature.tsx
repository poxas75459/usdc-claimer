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
    "2oP4ov6oFCwSUEVub6xRMhGnuXykMmGb7MdqkeytUiMcZYGaqsFLQZCVuxqeug67H3BRtzcZLBWZo98yyU2mqMSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sedRTZ8v9k3DnnBLTBy7JRYzn9nbq4gB2rhYKyUKuMcg6FQ4phPTKWMRvBi5szrvcqqycoLVoqpSeXyStw6P3GB",
  "key1": "3oRjqCqVkZ5972ay8qbzFeA5rBaY9866cvr2CBaiBQSWMQ2RV3UStMvwVd9DNcog3mW3UA5FpGqARDAMD3gCpEbH",
  "key2": "5uvipCeiaZKQxyGFHgfyRTYhziA1rDoZMdJpjQKGm8ePd3Uf8ZDrD9AFZK83tDPDkPLKkn37DginyikFQk22EqNR",
  "key3": "CHcR67RQg3B6uBrcmac1gH1tZ3R2pJABS2PckdE2USbwzV6SozfVugtMsuyDKQXMTmcUYrFjfuk7gmVdoRmGYbh",
  "key4": "4Hd1Rtb8UcHjH4QpnSEPq1wGoCeBnDpmDjH86eCriSREefKEd25EdMthN2yHi7DojYnFoXRUsSu7x7xSUspbwSAF",
  "key5": "2YbvMYgATkBtsBTzF1hjRnXDRFMf3HUZAJaNc2UtNnDTa8av4L6Muz6YNbV7DYVh9AGD8bWhXbr2dRZNxS8yZS2x",
  "key6": "4qPMyk8Nnfiuwia3aGWC69JEhbYAN2mc2vnbr4c6puywaeWiHNdneEfJxQi8nnqgkKG91rDgc4dYKC58tEhoUj8A",
  "key7": "49WnHjD6kyK7AeXCtDUoffYshHpD3Ui4PLmNG1ZXdMVQAfPq5hQ7nXrRoSmjwGs3uUuiM5HUCanRRHybNCqmBXmq",
  "key8": "3UBojWJysFkVhvuWMx8kS5eQWuUtDmLiEgntLw2Hsxu7qaCYmhEnTYUaZYHSYg6fUVG5MU4qvcke1YxLA1oZdrWD",
  "key9": "4NVRyKN413AXYHwiwrceknP9MtziUZQbfZJA5Vn3C3cmG9LGgPKQuKQoRVq5AktqB5Le63MhyXh2Lg4dHT83yadV",
  "key10": "5duu6MPqrLxcN12tmxhrpcEV1DUca2TEdhMa6zR27MnzzWJBsMUyvDZwWjeLJo3yShSwLXuVPkanhHkJBuZhNhzk",
  "key11": "msGaGNyhwvPTVyxhu2xfRpwpu3zFk6VqnU9X7wknFyx2dQJntPdX7YNrbdPcgfLb74PDQ9A7eJYRujkhzAwshVG",
  "key12": "4VZ9uZXvPT7fsPHYagGHWh4tGDKjczGG8zYuCyTPw5NyWYxDEs21jVu1RnXqQ7z26CjDxt7ybXFVTxFBET2medYE",
  "key13": "5xjPoiLDtdQWXMK1nMLfiUFfYHFzDA1yExY75PHqdh73EhxQurtZgPjCKrskNjGvy7Zx9gsvYJZw5VZNW82Hu5sX",
  "key14": "ty1kf92U1Ff1o3hiVn3NK5Wn22rJKG42BByNeZSKr77vZewBaBzAUp1LTCtdK7LSemycaxVdzGyYQELftdnaZ1i",
  "key15": "RBKoFbe6hfhmZE4p9cU8mxs1Rmu6qa8YKyej3FtVgAkdbqKNnBKkuwuHzMYGacvhtBKfZ75i3heLBvdfGAiKwwz",
  "key16": "4HBzBhj9RVvgFVmLHGiGmhvEYp5JTPJvxjujC9f7UfdCEz4hMjUrgRzMtReb2ZtzKDKauNirKucZjUFHaE1SN3Gm",
  "key17": "41YEypJdjuRCE2REtc6AxF1iggfnkvs8mzRQ3VxEpVuNv2aSohS6pt4L7MrK3ZtwZ7g5m82nxgSvZsuBvvSBhewC",
  "key18": "2LscgxKUS7yA3jrvA353VNVoyfUNBeGpyZtPSh1HKUze51BoEK5FohNhMh77pjPqGi37nLTiHTTqoxDnkPSBZKr5",
  "key19": "2isJhdJ7XPwYpw5rHUp8q1ukKDZSwVWFaR6AjN6xkkWdsFAUhqNXqtMBC1GF57scgmVBiodQednX8Zf4xcfJH5B2",
  "key20": "2v9ezDFQmbFXMfDTHs4pNLBt1bK8ZQTF4vrAkDUx9Zp6xpk7nJRDcYETTCrCt6YSTsVa3rXUtroJBVmuR7rkASsh",
  "key21": "4SpLqKfgPHZpv7iZo3Vt15CXPUxVqEp3D7BTiSrJfR1HbrzoFiWrXj6Phx9CtqUb59jxkGq7uKGUwss2GYdRyZi4",
  "key22": "5rf2Yo3rTBtUAQYnryUW8k4FNk1EJRrsfxEnbZs5YQ4eTWVpSJUnEJ7878p9Ph2A7cpujENcKneJGS8RxZNSyfBL",
  "key23": "4PpwhnFKhzLvNrWy4S3uzahCwpHu4A9Vd9SmGpw1GPcKCE5CDAaza6NGh4QfBibL8DyWpMGchY7HRX1doBMiqgXV",
  "key24": "4UptkkYsxBXGvLdu5bK7sbD7FXJVa48gqxnKhMdsPSuDddrdQ77fKm3q1nFA33YgBPLiqdAsUUNdFxi5U89nFN5K",
  "key25": "4CSYU1AKXm6Vo4EVqXgM31n2K1nLvDByQ6JrrSryU1GiywqgS1MGF14d16rcapXpEqxcAPuHw6y25sQtjXg2u5Z8",
  "key26": "5b6VPMQUqjtmnFkocuCsY4FG5Yb19qm3RBzUXr89h5DQD3cJCfDrCNJtxKXZ16AKQ2um4aEskPVSfkXyXspfAMGK",
  "key27": "52tMDJbxX7h2eQPg6s2N2CGt1mVXddCPEt9wYFyyYJC7YjK7fCH5CEckm3xUj4dTAq1uaYVDULqcLbMkhfmrAM1b",
  "key28": "2VZPwerJwEupmpBHoiZy5PKnkGNdS5USSFBJ9Qjzsb1hCJZSQwh29DmsSfJ25tnJVG2QAPmqptwY49zRpEVGUqXv",
  "key29": "PPGcKVw9RnVYBNCwJiK3JiCDvbWhPUu4xt7tQ3i9BKzZSWo7LdpgUgEk9wmuSRraiNrQ1kfPq8mtmvZcRhhqhgk",
  "key30": "5Jy45ZcjjWzBfUiNhkFtfZoezeA96sbEriMocKykyqSRd66iCPgJcLKtu8msFmnmwDAh9qYiNG4THUbhzvSsXfV8",
  "key31": "51MwEX2pVAnnjubd9TFJ9onj1KqVChS1cwnnkM379AHaJCa6TtLEax5YTH9p7295DuJRjGQB8CEZLPqcT3ubXHSg",
  "key32": "2hLAhUPLYS8s1KPsuZCYWBtnat74JQyWJrBCPozRvF7wa4rwLBPHKsg3kVt2Nq2Gp16cuTGCKno9nGyi2pzRUKXz",
  "key33": "5XiFSHv6V25Ut3D7euqijsumBKx9mVn4bCv12d34uTrkSMR7WtuNpFjQb9AHnfMbKE4JQwuaSGtzKoiK3LbS9Cjc",
  "key34": "66GrMtK3Bz7MYzghBnUyn1sEfHmBtkRJG1WRADrgMDLG2asiFxAsVkTkva9fWaKbyfgReTn9goJc67acESEgMt13",
  "key35": "3VtSJPgdFMhS2P2krf7qWzXh9SU3ELjreB7xRP1mBHm1ZXhSHZyw5FmxkwhM1KWGZF4WpYZ9YpYnb1EwVHvfDEUh",
  "key36": "1ThoabMPth6Hcvqez8MWVRtAQrjrHMNYpXGkSLEekg9wrUV3o1dB3xS4RAFqE4SFkCtBt4uzYPQrXk6PRHNd1kU",
  "key37": "3rwoiYXz7Qmcwrcn5fc6fGvkRHoAzVZHnDaHd2sVwQWMsS9PELdTKKTvLde1tYHVN9x2Nd8uMwhgGgNS9zUHjP9Z",
  "key38": "5wAd1U1np95JrWfiwdDWkhYePDfd2oL96J164rq33qE99ABbj6kQwGeMg3M7yaj3JhWDDihAkvLjv8Dcy664pmU7",
  "key39": "5JLJ9anuDqmodvQs2nyWZzK2yQtKVJrMwBzoJSwJungJXF3g7pabZd5FVovrebzx5BdFtiM3hiFGTi2bveEsUpmp",
  "key40": "3Gzh3SyMFb4ro4shY1QWdwixbkv2AJmAhQCjZvnyEaaohGpWdxhizBmPea8CMJAszcBGMNovyRPUTxc1ovdrjmtE",
  "key41": "3cgEVNTZUJCfqNx5fJVnG79aqPLcVKzxmyKmu21m7MkP3eK8LLTq82TGbheBZxE4nVDVwL6X5LyZGH3xppwL4Gtm",
  "key42": "49pReaMwTPf8WBpFS1GPU5wuSeJByg6J1WEAEze4fUXs1V4Uaitjocjt4zHhLYSkQrbBdQu9K7wH4jbPbgqHEWn2"
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

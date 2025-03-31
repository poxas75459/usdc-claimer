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
    "5ZLcGtpH5XRRAXoWjHSQutHyCcssDyyDDs6v4HyeKDuPMgaMuTd1BJzEJVE1P8WFKkXVs67q1UNv2bRrYnonQJt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KSLhpyNKz9h1mNV5yEf4KkErEhEoutY9JDeihFPAqvG8FkJ7gGgCYhEMMcKfjpPdPPCkVqSXdJQ9H6KMF3GKP6X",
  "key1": "5ijL12Scs5gSBVkKEsqUU8CLPzg6YdZL4PFuccTizqy99KqxmfE4qXfLDCvcGAPuhxeoH2Yq4CUz9Z1weJvPybeq",
  "key2": "4hVQwNpSJRWWxJvhQAp4cVwRnqEBGriukbPZA7TsF7csbfbEVeLif1RqwcnYC6uNEiiSJyWyYFJpiuXGtXgB6ctc",
  "key3": "4z6rYTV6c2a6qDNQBYR3aFyewzxTtEmVRe4QBRfGR79xPsXUKXZsedYZZeqXHxyhuPRzg2zPiScUA3yYN6oMoMY6",
  "key4": "maxUCswAELGLPMdnBNwavVFrKSg9E7BLWXRdZWNS8NYYcWscvnFRB9A3Pk7tNaswPk8vVa7LHaEqWsj1CeaxTbm",
  "key5": "5Kti7TBZ2fCEkKf6CAsoEK6oBVjvJLiCYHu2sQ8wQFJXNJPi5nvDCcLHVnRFbjuqsXa6QRBhSyE8nXGBhvfxeckb",
  "key6": "3hpetb9cfrv4KsQaUnie2Mbzx4Fgjnwmjnbug8y1Lnw724MXCJLsugJKzPhoBKwEKvLiVgRdxSv9JNjt9yCq9J4x",
  "key7": "611jTrKG454hP4HEngWG5Xgw1FTS5AYq98LDFvprNa5tc5PHHev3AUUmyyJYqKhqcfyYWnFM3ZiSxyRJEYs94qS8",
  "key8": "24jUCxQGFv8tybtUdLKGWbEBHJwSEfo7bUNzrvQrkaRXwjGbpMgjYefJCEnwXrDUNDxC5SXRFMvVSeefxAokURUR",
  "key9": "6tsvdh2tes6kmf9d74q3TSL6hcmGPboYVui5Z7zqRA6A8ti66UDpwYr17Dh9Q3MbBZcVf17m73EErEC8XgV4wso",
  "key10": "uyRWSayxy8BLpJTKaapwkun9kFTThwj1s8zkY5k4hEzgCfS5EfaxMXPDB4R35S59MdDQYAbZEVi6z6wZBcboSUB",
  "key11": "QeKdW1dzWNnkaLW2eF86PC71Jg873WRG85LkSNQKbnpqTRBRMvAEQ8PrGDVJJ7tZNpJmygBZZFbqPRosExnF5up",
  "key12": "5v1XuBCtnSmX3LZoTmCsKUEDDFKedbnSA1nXbpaKRhJn7Aqnxuf7JywWBH7um4WBzsYeAt7dzzSfDVF9oHCsJJSo",
  "key13": "62BiMb4S653VBoLLBRzpcSTxtveJSz4MWktXDG1aS9pn5YSqqbRw8MR1FjAQecr1sfxmQtxvayPRt9HAL8NbPm2G",
  "key14": "gjQktVrdgw7uTzjrATpRg2KmsL5qZLeomn7qSr5DX4pkVpDGHTKiSfiq9imuHLaFYkcZfHwHZYQTyCMDNNYSSfL",
  "key15": "52L5pehwXSPEGb5tER56tvdBytBrfZitmyJhtHAfZqmFGeaBfQENk8Gy8D3u7253KBqceS7Eef7fDGUjV2fvHUhc",
  "key16": "4RgiEukHEDLTCvMefJPah6N9veqBP5S2HbDkA49JUEwcQ3tNigDCmHWG4cmtSpR9od92bgQyUbM9N6nFShnELrg9",
  "key17": "2CKKFhbSB9XiFHyAhoibk84bL7Uu5Spf8Ej7X8AW7tPKJ6RcQAyQxdM9o5hzbfjxaQQet3HQoQ2RcjtR4vw97L2x",
  "key18": "57fRyCJYiVNqGVza7xwrgCLuipnmY52vztDTBrUywJDnkiBFPC7oRfhRyTC3wrsJHzNswdNuWHAi1LbyMY4j9G2A",
  "key19": "44qocvcHKgNWsPWrGm4tv4hPhFuLk9uH6TPFN12mKecQpo8e58tkZWAWzFnNrK8WTSHafUoXgcx8t7XvHH4mU5LZ",
  "key20": "5gYSnVQvBUeubjCFcHjQaezyiJfTkddbTxSWVwrnJkkyg7bSVbteTZzEsvkQBRupT1DByu42G6YFvJi2iznBXNht",
  "key21": "67nXCrX4QfRLgGJYByL8LG3jKS7bPQ176mJHGRqrigUsYmRt4B2dKmoLy1j7mNU1ExF8KEF1SJhxZeGdLx1KjroV",
  "key22": "2WGQKuNe8QQWUhqp9PwoRprmibAasVKURaqpL1oSZKDp3KpcRoZ5zXeXJZHrdABWkx9TUQoRhxCwqvqrmGRTF3uA",
  "key23": "2fvmVwhsvzfURZmcdxdB1nsXNEnpPXPj7eogcXsZCCPDWwfDkcGMV7QjpFjXbBmN5LKNEygrfUoRErtmrgY2FNsh",
  "key24": "4nT5VFENYMXBP6u7biGvgq6hMefzdubKnmkMVX97ecJuSLGWzMW9AwUrPxamUvZno2ixEhUpNu4Qja4HPzxMCA96",
  "key25": "3fWsNDd1HGve6vkmQg4erbD5ijwZCzgok9u7tgJE3w43rxTYqiNfXApfNu7s9S2iheCbBhxuSpCHeYS2X7FeeaQG",
  "key26": "5zyxUkEwqQt6yx2yosVHSf3J5qMFvPTaas8wzvaURdTH2gSytifPXZCPgnCXvyXapGmA2h9qnUXQLNoD9quZiWox",
  "key27": "5LDdSzt7JChHZNDCHsvm3LVJcvdnaPtoQGbCvKaQSoV3b3X6vh4sUthhf3RwN5dnBs7UQFY7aRpMVwy7bwmN4vCB",
  "key28": "RshZbySmq6o4hcp6sCTuZfXGPesN7omXZKQh8oQ6ZtCGzi5VCgf5J5Y9d2thPxBDBisocs6YqzTdXU4ioUE4ctL",
  "key29": "3fUzef18VajUuhy8kceDpMFyD7EDFmvqQWhKcWpj5HnYqvTg8nFDM3Ahg3R8K4MjFeMvkt1xmwankNtVPVkfG1YE",
  "key30": "XnJZDhabe2kWwcmGecdDf61EoHFVcGH7fmXtHyma4Ksrhs8dV5JQinr6zbo4eKchThtYaea5TeqrvVVhXtL7jxf",
  "key31": "dthrNkmNqAHc3REK7fyEniJS7dom8vGFKnjGo4QedSLmijAJN7JhoFJY2ZNNd2JZCH61RzUwnAKPTMdef5PLkjt",
  "key32": "3VqYhMH8HhQHQcuk2qLrfcypJAkC3KS4sXgCnGVHiizzMJq6zMV6YLXaHHhnLmP1qAZyJND71j3HEnk18aHHxo1L",
  "key33": "2r6PQ2f4WHPdbqQCoQB4hu7wmuHyotMTF1kXipARqcr5HGwKb6jNAuj8tLQRtvydGhc9ER7WKaWXS8Tgn18m86SW",
  "key34": "2nWgEoBEzdYrbmAPrrrFUoGtgeF37KWvWTSm1fBua5trqDcmuJ7FjUajqdQ8eRvmZWgnzZ1Hn6vxM3CCqUxwj9NN",
  "key35": "4YgYf1sBhGvxKRTjsYW7Kh4uNHCrNezkdrUDnEh5SbJEvTgNoBRUxfNWddWo4gQMpFRME2cgjsLsCDwGK7wh56HN",
  "key36": "2Lbcg18V5e25QPNu3YhoU2EvLq2AN9Qv1CMSoCPTG91dxd5yVc7NETg7WGKE2ayHFg3nJ74zUg6LwmDWM4WwrENj"
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

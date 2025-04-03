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
    "4C4jXohF2HPTUtgbQVcJULmYP8vQvhSGv75N2ku9Pfy2RDKpqYwbZCAwCFNcXdThVeGJJU3dHDVkMzFh22oBGGyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nyumtAbnvKW9NmC9qfKiHyGAjT24xzyH1KHuXvo3RiSLp5UFRWjvqA9HTsE2ZZePvCrDPDod8UJXdfWxep3Fc3Y",
  "key1": "2BymvtHFDyk1zjyGk5A6X2Df9E7o4grz58eCQwyhYnDXeso2ufjLv81amo5tyvmLYF6cXLovs9SjP8jCk2H17d2b",
  "key2": "RGFr118TvkHrSJjoGNVJ5og78Wi1pm1vUfU7FvFtftUJ2bt4KjWbPzXjPM6NuBJpcuEuP9XnFrtaCx7Wyagk4EV",
  "key3": "4eELUAT5S4pThyNBSYMQYVriRbCg9tJ1fSgCY93W2dLaiLtftK5rU68ZWLEUL1YuRvC1GcDKqE2PYoybHUTPgwmu",
  "key4": "3gtvAkh6rxy1XrAPTZPyJxoPTRraBUPUgxUYxPSHp8FrNw5gwq6rTMEENNUqmkfEsGcEmaopLYMZw6yu6kx439dK",
  "key5": "2rbSSveTZ5H2bvQ5rFj5UCwgVGxjcNSVEAk1jj8SNgK5j7N4GG8mzxwzxgLw6tC1CirxYxkkNJKeN7uM6Q4AasKv",
  "key6": "24FYTsm3eHWZ6mBJcRhgjxt3SBEVJiGP8Rtxc5GPJgd2KHsDucJowzrTPAi3pbaScg5xo7pvCo3KKDbPTnYeDW1Z",
  "key7": "4WjjHw6AZJcYBig7bvX7BmFGfYMH41JyAvborpqDN1z9APEhmTbTQxD7YPNRCR5tYEx22ryQzPhTyQAGhN2XEPde",
  "key8": "5k2K3Q58rsWQo9RoTaaDfYzexX3dKkaBmuq7Tvuj9QZkAfJt82EANFGMXyXRq5oGNgdnRox4r11mu7NPSpc8UtVK",
  "key9": "4eya8gMv4sWrn41rMr3zqfDSigqyEqyo627qpWiEDQ6EMjKpaX3VweE8mT4xgAz8sY1BEvQb1XNwNbi84t84GbB9",
  "key10": "4MQggA4j3D6JhEzBSJ4hRTJkHy23VxwCke85EmiH8VxnSvV2QeG7Jfa4o53kCsP74uGGvBemZ37peHvNrS1Nz9Ew",
  "key11": "ynhdxaxpjTUgjQkifmBv4drEmaZx8kqUjuLwKtNvhcQ59tGFxMwnYWfddQPR6nYBbAWsRuxHEYpYKceaECRvYEs",
  "key12": "rA9vSHfDs9WLU6YqLNTQKZBkRXuUNASgo7fSJoQ46qJ8u18BTgCup8XA7QR3jKLSqnLE6h7QKMFhaW9f741BkNL",
  "key13": "5SzXzQNuweY5gieuDTPSFYvEyLVuGm5EmdMKxitgEYruoXogXxnaJ8UW8v9dHmtSYVaCUwnXv4yR31FobZNvmFxz",
  "key14": "53MhqVXUUaNcGv9qfsoCjSQm15s9xMi2caGkquBnRM7ERiTya4ZVe5qSeArFNVJwVM1akUXcHmH3FZAUhc7fHx7f",
  "key15": "3USWVsRsHfLRpb1iM2er924hmzJosnNBWf7LXorkBydWb3ftzTgKFEc7ojydVy8SyE8fCvWFtbnHGTXuNAH91eoL",
  "key16": "rCAVZtn7G5PresyNBYz8s2H54N2Y1W9XvjgTwWMzSzRvG6nXbRGSi2KdZG6kqm4hs82gHSNmvHmcRbCUqjYvCbx",
  "key17": "2p8a5CQ6TSjXe1HfDPfAt8j5ovu3ab184VVY4qRJCm24xuXn4UK5bYaMHCgY19cUV8jgDoYNsecm5zZc5GQjLJGA",
  "key18": "33oPUw9WKnpaVidsCCYgfPZe8j8UA9Uiw96pVVkr1o1u9sfHBkTY7tuD9AHwZxjrdDk836Q4CUjmgo4NsaT4bzVE",
  "key19": "EUpTkc3n6rrF9Zqbg5WRLTyY4NgEjzC8wEd9z5Ruvb2566hwSg7Q4u35WCf8jWkcP7PH7Rq9qhzug2WyMRzT37y",
  "key20": "3BNY2iTnJPX5ffivCPo8oNzGTCAmGrT1r4aSSGheYZJzu9Ti3aWHWKJe5iX4pJF1GF4EH6Ak7fw5i8ti4UshzQzA",
  "key21": "aY3PP1WiwEUkdP3qPHB5mqDthfpenmUeE14RxMnYYrZXtKWC9MmSNnFBTriMCzJQqEpUr1qorn2Lt2xayBK2pgE",
  "key22": "3fP9y3xZJKF6ef1S5ngTmWQGjaUx4xY8rJACfavcrSNdjZw3LzZp6Y44wWA4rgxYaSK8zq41R92WLFYYuGowSAQh",
  "key23": "4yYYM8bXLi8paB2ULCmWk8g4S13B6gY4bSY4xAUBQ5h8xxGrBpTB1WqKeWfwQeeC3kdA2urFQbS5CmjRpWsjA7W2",
  "key24": "27Ti5FiXwzbKkdYdAVLyCZGcr9G2yDsYDLg3r4iUDj59U9p4MzhLLZsqWEhEmatFEBXcqpVxmRenkrVzyuV8c3fR",
  "key25": "esvWRNNeUmt4QusXsKQtZuVCA7xZkFcq9tBDYd2ohX5T1aus9SZixYgg3tWVzCp9ZEjXGV1c3pDVb4upZspR6DP",
  "key26": "4aJngxFLQpx15LsqE7KnzNbQ9z3vLU1HnCYgE2pWnWxi9PEiNBWr9UQGCq954zm5hk35zEMif3BL752aTjueYv7b",
  "key27": "43QNw2dpjyrDsbRWEfxpajywvYujvsw8o32L9yPaX9trc18u3r6vrn2838CBv3WaWvuDwqXvbo8t7XPAZYxiPLND",
  "key28": "kmuLf1VhghDTgF9LtnH2wUiHAKpH1q9MBkJ6scAcGfyYzYbMqzshyUHjPrqcQ3nJMD1ZQCGeKjhue3N4Zk3Ctj4",
  "key29": "4mcgjKUJZTMpS2sdgZuiBfkcRXFjSxD61phK1GNHM3CKoKgfyitVHq7Au4ghPwT7hdYvV95HeA6vh6osPn53jErB",
  "key30": "4f8HQaAGeD35VzeiUozXqeLeMLjMhbFWjguMvc1TkPybgt3mkvhtH3AQe9QnURUWf9fRNufuk2tvJaVyg6PhcGmc",
  "key31": "5vZJCSCcwH2Hquvchisq8nT5Yup9QcVmXCGsBpJbnw8Mb9mbvh5nqFFaMhmx7tfBbwXy63uRZnMitVRqQrcf1ij1",
  "key32": "zhigtG8MLZQy7p3CuYXQxxk3tEDYxCRKcBYE8j5Y4NvTNAzPjpTQvKNtfEWbecGUg7xAHLe91eUaYbTRBPBGAbt",
  "key33": "fWBcNfw8vJNp2qUHVmfc1gKvVCow7fByW9q1gLF9VV1HWuj4JxPxzUrogbNww1DHcQtoWWdMacjya5UkNFmt9fU",
  "key34": "225RtTnBcsdtKrhywCecdhvrJYv3BeZW9pkRkhBGp1k3rDtXGSrLFkTsn9iCHVSEvpVYnfBbthj1Vd5HZ34zXRJQ",
  "key35": "4xNaxn5A9NhfyCFBQLb6tGYYFvZgQnS7ArAqABTp8qVWW3GE8jp3SSwQBMvVUdrQB8csaDB76zaLyyUkPBTWjbLn",
  "key36": "26DvPveus7Gb37fxnpw76rDfPcDx5uhZhkBbcG6yFJpuy82r2RufWHCiNo4KQJ7tiiFPKuNBKT8jTvu5RfvfvPue",
  "key37": "3QWHwcPoy74JQDQRguug2urhwkCjPmAC5hVGcFgbxHuNSX1qb5H4DL3t6EDfAMhu3fTkJyCrp5dYad6PyJrngThY",
  "key38": "39etnKRbfdaSMvmStgq5uGBSU2bMiR9EbRWm45wXiDJGcaJNXa94RtM9hvotzytmnES4GQ385dSFQYekYDrebqkw",
  "key39": "3wfUEucdPYtsryNxk65oeXrFimm3d7M5dqX9t2AAKxuAfw1AF7Hd2Aat8dwEpzFbpwgEUpkGTMNnyLGxTg2M7iuP",
  "key40": "5UgDVTHsJSX9RU9wiYzSDjz66FcNq792TaicZu33mdBSDkSN1CW4hrbwFqBtPdqm9NEjgF4RDvde9zxhwR6PiGMd"
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

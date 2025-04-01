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
    "3fFhJM8Mg4pucmtSi2gS85byidRtGx2SYrAMRdAc8NJhXYa4k5a7hi5sduDXk6Yk7jKCfYNbJuNkMGBRNt8z3v9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xRjaEtekReYVnBomcE7XhxNp4APyHBd7bVnkdycerbzsET5VLecpXXpsGAgH7ixuySp44M5HmvtA6iGPRax2cQU",
  "key1": "2YF6yyWBKndKvsTkqg1VZrWBMV9p5Sa617tsD12uD89mTeWVm1jY51yFvhVuErgjZ4yPu4X9Gfu4cCf6zMQk2UPp",
  "key2": "4v9Dt3AVJ2pMap63XE678RCRFWLko4S4ky3xt3saNTuAkhWCRQmMiWFraHrYFu5yLXN2zK1QWt719hyr7KupNUzR",
  "key3": "wkwGXuF9SnwrMQEGQsbdtM3at7pTbgcinck12Ao6Mhb37FjoYgtwvjtS2EwggK189AAFbim9nxrH8FCQJJGTvBi",
  "key4": "3oZMHcDYUb9tFiv6bRGVLUgedDaUbr3NPgie5JwBdBBNeQYyPHcu4UNnV6Qh8JGCGACzGHTcxkbSnhxnW2ogQrkZ",
  "key5": "2X7kaFQY2ANHpaiVnPSr2K4aMsJe1s3R9cU7xYpuWrCdN8DjBLRX5jRjePDbZjjccYX8A29SbmoZqgCurU6uQcc7",
  "key6": "5RHVnFVCBHsPmcmHkM3HnvYsTjB9WsjecvjypFHZdQrcQ93LKZGU5ouZTtmNE2sHQeRGZJgKLdmXBvwpU5fePbSi",
  "key7": "xf2ZoCJi96quNEVfESjXCvQEH7PXaDgovmF3j4W4DzdaKtbJkKPrmi6n1VahnY92QL7ymWsrYLJT856xLg94dAZ",
  "key8": "28KzfC1wFBkBLnMh7hbxp45cNxUcH3qWSexWWnzYFLVGB1QrQCboXgTfw9wFuFLrNGJuZ5ExouEDGywAco9GsJod",
  "key9": "3Q1zMsuncRCZYroKwYG754MS5E1Rn2cH5zYw7vQ9rLkZdu6eho2YzfTEhchVGDdiFUEpVzQMDWWdoKQ99xx8kamF",
  "key10": "3hqXu2r5SLKoF6Qv1wfHmVq8J77wKdkh9RCRXoMTvZciUU9iy5CvjRVZFsvEBXgJZQJhDeV5kCUEpY6R9zvJ3rxG",
  "key11": "3vBkEQKGXsVMSX23VFt5nursYcQzB6HV7ZLTdvhseyjJNMzAyJMmM2W6zQJ5dkLPkHnSCw6z18KsvFnrRY2YpbTJ",
  "key12": "4ivUuiam1GfMejVgPq7SvWdPvx9jxwFDZiBxLD2Pm7BMR1QLHZ7A1VKYeSM3HuHwcNnamF9hU4yz3XNhaEkxgQLU",
  "key13": "5gu6qCutZJButkugmyLTNAHgMWZwPZ3GF8MBX4x7cDVfrTKJy5A5fNHf8L8huf6bMSdhR1E5hzAnwxHuCmSGBCce",
  "key14": "VVh2axsJaT9XoLWm9VbEThAKZCtWnv2UspRNnmVvKD2bZtCzH6zedCwWm2pDXqGG38DRBrefej32fYwQvDarXPB",
  "key15": "bRxWFmNRqoQ7Tpwt9WXYTDpZ5z8ufvkX8NRVdPFvNjfgLWoRCNgiqzi3wGTV7j2KGxdgcJ4YH9yeYkyN3iw4F55",
  "key16": "2HuRn4pDAyqk6qJt7i8togtpzZaNLFDg9tYKopxhcaPfj31DAGDyi33Bdspe8ow78k9MoBkgh6XXQktsSVn83Q5T",
  "key17": "54ib25ioD8X1Kzji981ZPzXTnXtcdgwTKntqTszmfxptUsPeoCik6TfwkF37WtAYYLGChg2dxNTyvwd7pzUZCM5W",
  "key18": "4ikV9uaqNfGj39AtR6qcTbzq84rXta79PgL1wRVQhdtXkz59kg7kgvTLZcCMk7sEdZ8ZRsSmVw5KSFy4Zom1suwT",
  "key19": "3Du3mSfffT11TSDCLifbMxvhfchoUyRztWt7pxb3Bxu3gsf5oiAWhc1NdRLsUR1eZFzrpKNm8NBBiaLk7HPSxkHf",
  "key20": "5xMCmWkdurDYkrKEuPqBgHFeakvfq8rfm5851XmxG3Zt4yGdHSyLmmQ48hEowGwGovt2uPVhu4JRefxjdgzxKVKs",
  "key21": "25fBjKHGoWrgM7oGbkmhigQ6MXHA8HXDRSk5SkUrb4ECa8MJhToEtWEcJm7Knwq2kS9Xw6SYuhJC3UfNNpdKe27k",
  "key22": "28FywqB5E6SibvzZHaYseqaKiKUCAL8ah7we9urozHTJJuTXqVrzpGDzcfQq5yMtRQ6DotRBuF7MDAfKF8FZJeWL",
  "key23": "5yqQA5y1ZY4mLQTJBLKRDtFi8gF69eBV9puaH1vraUioDXjXmsspYaNbr3snuWiXu6ynkMTNhwHi5RWj1G5M6WcK",
  "key24": "QR5wi9sdhWuT6W5KBzDosZEhN4Y7sUjwQx5R5gwvCbJHhKN4f1LmW2vVnTK2QNPHXyg3QZDsawxoqQMXvSU47vj",
  "key25": "513WNdPi3nJU73ru5fU6aGZHUpcuAes2c5xtjUoBDwwcZeGd6fX5zsw6VCLno5XRLe74aWGJdWUVLmwxaLgrTqAy",
  "key26": "3h66Nd85v8XoVjnoKwbwTM1KZ815z9nfSir1QYdKT33tigq9q3yXLyXj7N4njtoPd7oraisvqSFCuApimUuFsXS2",
  "key27": "i3WhbUqDGahEn8GMGdWQ6Rt6nkncpsk3PzJYhr4aqKSgG7b9yZX1FuFAsNwQU4D7CKpJswYxokCDYyR3ERQ6WR6",
  "key28": "2GTLBcXNkqzcGRdi3rocqSTwyXkd7bZjKaNsR2ZrcEyCLSedcyAaBCqQE4YuXjH8UhQ4KegvJ85JTfWKVcMDXgWD",
  "key29": "3EF1JLjwrU62dmZ2vbMzB6m2h23X8zy8F2j6seGS71vgKwWKnSkyiJKdUL5XTxkXz5RUxDH9M1C9NY9buA3H5jfi",
  "key30": "2cgTLdscG3Rs2k4yuTB2u8NZh43Zt1qNNqouC4ZgZAkp3QP25mrqytw7fhTu3mBKEnEc4CHC6qfsV7gDJG3hWtP4",
  "key31": "3xXPXAkRkSM7T38QmdQBps7yXu6yUqaz1VPyMp5TYgDpDvs9riWKGctrmiQfUsbLprY36K5kWQ6MzM4rVCAgonPG",
  "key32": "4Mn6jK2v8f8okcUfKsZcrehcWwgVp52WZd9r9gKJrCDP8ses8vpb8Lbntv3zzCBhhhsMpTzLLTtGghzezSc1nqwa",
  "key33": "4hCYx4FU1DZAAxDzHrniqVyEoSYBHNaZVVtyeVMT46y1x1qmcbbBzMqeZ47waWFgwN46LX54BpdVpPFLWLQyyB8Z",
  "key34": "5AVSponZeWYQ82gqawTqaVcGYUWMDWY8mSPFm5YoeNAbB12NNvJc6tGSTaQDVLxAB6QkxCUZHHC31FScVntTZr9C",
  "key35": "41pogSiawH5eaQEx2hWnbULvAKY9cMme2FVi66KHwYwjWYRCUHtHFWiWtL2XmefyWCL5v27UCGhXF37Jkoiy5Ly6"
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

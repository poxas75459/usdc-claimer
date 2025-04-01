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
    "45p6njgq1SF7YkGgZMGFT9LkdurxhFCNKr69NaSs8Y69BapSdLvSvAt6FLnsNBSXJzD554cKCZS9hk9Lsy9qy2Bz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ccewxe5VXHprC6ALZtVCDhJPN4NkxQqQ18Jurw9eGAbgNHL5NobjLFzrd9MNs3Y6RG3jneuBEuB3GuaadZrUDrw",
  "key1": "4eSQZsot5m4zBt8YUNiEwehAyxnd3MoDkJhYpfuqhL4KfpdG5himkP3mw4uXd5Q7ZbuLdETntFcYBMRL6yzTQrWK",
  "key2": "17zqpX1Yd5Sag7pi2K8dSF5ZZpVKUFPWSgH9JqRiWrQLoSw18H7vyDVLo8pNFiYbfkhPJVSPevd9tWRheqbRqcS",
  "key3": "2iWGpUUDu5YRHAf5xUKzsvD7k2Qo4PTtm4BNvxkf3xBu4MraE8BnJuBmA1FqL3tTyiP2RJf2wuJDtHPVudKa6Ldn",
  "key4": "3sqXyxtnWEYt2Fr7QdHw2kyPzgmKY6wggHGo3jzPfkpkGiiuJ6sN7EvpJTxhdWRHJGnsa2J7K6SN6emADp1sKx59",
  "key5": "58Ar9eydJV1QsZQC6B4FucZ2G9pa4jF8386zd9HRv4wPsqKgqXV2oARN8KdbdMij6prFgP5pbWD4Yy7i5A4jJ8dX",
  "key6": "gHWzyRrjHVbzzzyxHEgTPMBHee6kMGZCP33xo8rKHbi7XaXZdzP4ER411s8QG4RmCM7zAwS9YhRhjZoLnZyjgTz",
  "key7": "b8a8quDvR2NzWyKEgkp9tYjok3FA5qrZHk39d23FR2QizgBN2TjUuHpeGhsjFHuxuKvu8Q1myvk9dm8yAxUUUpb",
  "key8": "3aQCotkkQ8w3ZDVDr3NZUiwwGM7sNYWwvmHnRWx7XtXaiLoNXgz1FDrC42PBGfs4QMmppkVAJRTKc7qH9s8uKD7t",
  "key9": "5AAHazdSPMhuCt2pwMLJyxTGe7PUywbaiuUMHvY3ZdxqbXxo4v78d864WcNmxJrK7NP5ofF2nzjRcxd7iwFGDBL8",
  "key10": "V9yBuFJcAdk4m2Bmyd9uU69nnfxrw8N6HoYrpq1ikAg1sEpVxEFYveD12r4geCRJo9XJg5cN98nUc2XjrvgFjrP",
  "key11": "2pKPhCBKm6oaRJsdyQ2Nptx5EPB7iPTkcZmh9FyQ2hF7nKhqDgf2fhmXEiyZvxTk45QF1Mcp9YjAXKyF8oKzEoCU",
  "key12": "3mGus9CWPvt34DDKaecmyZLVzJZvzvy6vr9WKiAnwaeWJXReEW7qJSRXMGs4Pzpp9koePyrRFz4VLpPp6nvcyUBD",
  "key13": "3z3PMkzfYg3CDojxw1ZHzziMRdTJg2VGoyBcaBbrNWrpoNMt4ugQ1KXmHgSmwGy697WiLCzkhBmw9shvbfh8fHg4",
  "key14": "5EmMMY4hjYVswaFqS4JhHUX9TTrfBtASN1XT9ShMcPZkBnfJpa69Mc79fKwTnTzvAb9vUSq2UjG9mdrF4Lghef1d",
  "key15": "66JjdLg3R8Bffg4GUhsF4UM5ghqCDzSMmKDEc8SpBi5qzEazEyn95uyJ5DEdXK8b9udeUtir8qvGH4sGzLSDgNL2",
  "key16": "4BtxodS46DvBFpuG5jdqhJsa6ZV6qdoCoS3cbeKeVMWn9tnE7TkoGtEmsYJpbVsjCyG1LDVdj4FTqrjDC5ZZATZZ",
  "key17": "5VfybsAHbsGK65bvVvXSRv3YnuEaoXMzkpqmLKyYiXhZntQ6U6Vg9LPsQtEgamicYqN7fwQ9K5PSYB8goBmdyL2e",
  "key18": "2SouZ28MvtjxGhMtT1aEpzK5Ly5B7GrEBHvWi4MQfaDNrabS5M7qYmaExkhoirs5Qdie4mrmYEWEFDjKjgXhZ8YD",
  "key19": "vjgdcoP3XT9gZXv3ZfMEpQLDmqDzaGaTw55EdAQwxR1L5wrbSnNRp7cmYwGsLoJ1jVK2V9EFxw2kEcx4qHRpTde",
  "key20": "5V7DPH7gK1cDiToYdjjR2sMDAK8jtF17KZgwXgar7xhKreSciQ2aQPpDaoGrwNmVamgeF2bL4Bz6dNRueP4XBXCn",
  "key21": "4VhNCW6sKgmFg7hPTss8NVQA9pnKtE33KYNLRTKNZRoZbkuqgXyJ11ewHYzGi5X6uPdN1s9g3hBAKsiaRrJ354gB",
  "key22": "4tv32SZjRkRPeEe4viFo69NkSzjcsG4xN16MTMT9b6idtwWu3aXwfThqqHDXGPDyUhqsy5wgTu5ctDQ9knbEakJT",
  "key23": "48g6jGqs64dQQHcJxsLmrwDJXq6eqpMSJu6HnWK1u8Jy9wY6eTckW7TwJDaakvgzwPpi8SgaSGbeQyPLdE3f5pH3",
  "key24": "5KEch5ZR6Tbsi1zh7A7xfY5Gb3h85QCKqMYXaWGCV4wCcsT2E6mpZ8SzVH1GnECm51uHpKD7CYFc55GMdsLhGLjj",
  "key25": "vpim5ZvWWb1CUcHPrKNZstPGwwr2FrZ69Xk3jGyAPNkSCU9VMWaGpQAQqsZ8xGQUqfirqbioLg3rpYoXKe7pj1b",
  "key26": "51kguB18822Wxa9BkbnbTYn3tTPnrboYd9ZAFLmqwFasRVYdi2xoZP2py2epWV2qC5VH1hzTBdkgsyiEmbbF2g5Z",
  "key27": "3gFmmw2cSeV3VkZ7eXtHWs8pt68fbkqt8kBKjHnt4yoGjp8Kq878zgHZ8xYtCSxMQngKdAngy5QbobyKJ7LQ1XCz",
  "key28": "51S33zktVnZArhpkfXkCUgS9BgYyN95D7o1KzQHAjtbYivWd1avGhJx6GMG8ugyZuiQgqHyRK3Uo8SYzQ2jvG3go",
  "key29": "3vbrnvQ3u5E5V6nQaQr4HA5CzE6F36WkmTstDWTFWTzDugRe1SuTH2gD6xyJBJt1F6cuG42ePM3YJNa5ccWsL97k",
  "key30": "mWCFf4WyDpY4yM5VWKPX2J4DfZ1sk4CFk2SNvoSarDdhumR3hvBHPTdAUddALwSv6m3LTDKifVTe2LLkdSWu7Z3",
  "key31": "2s1C8g5bYv79xoA81BAjSTBoX2pxVkrRJBF6bRn9fTbS5jzD2tECLbVVq86okxRNfw6sQruejUBKyWnusgnWsQ9W",
  "key32": "5yakRgxELNX25qknThn3iL2Rmq72PKWREND7AwptgNH27iY7okijRvctyPAJyv3GGBkafueBDtsfqFDq2PHqEcVa",
  "key33": "2TNaGeSRWJdbqoPZUEKGdAj11exAQL99HFePaebiEDc1xVre6dQy8FEHtwQhry49W4L1Fh4NLUqSvtP6XF7D2XZn",
  "key34": "4qfm4DgFHW7eFJNSoPR5x2TQtLe9yp4P9F65CwkPScTbaan9Hr1UdKaiTRXxCUpXyxViwZ1aCz4dFa2RGLwVTfAH",
  "key35": "2uBaJHfaKQFWHAJHXvUz4E6KmK8tuTrRjayRfMdHJdDuXXE7hTavAaaU52fH9kwbkaQeUaVbkzp1eDWNpqQvdkSe",
  "key36": "5PiCvFtomgvwYFHTuv1UJmFLtN88TMkrb5TxnmfGk4gRFDKMyqn7LyqP5nhnoxbYKVsnCLhPrt5Kpny8qCZ47BBc",
  "key37": "3aTdMFUdQ4TW4UNJ1hEUpQzjDo7cpmCLqdBojKMsiu1H8xLu2dNnYXeeQacmABLJcRVmQkALm1uMmws8U6YR8x8Y",
  "key38": "3vqDfirgEoZFjgQ3B3vWMotz7nz8zfxD51QVU8mye8qiQvdnGyjsQNGZqMbzMoUjmiAd1btqe8sDQsHCW6FrCJTb",
  "key39": "xDEDrwR5mCq5eYrSgsaeqW7E6EMPbLePQDYxzcJrX3bEoJnJS1RN4yFKBQWQAhAXQRc5LPGYhbww6DptYimAZXo",
  "key40": "2TqAhQWusEoQaTTAaC1VuEQbgB3sHWXrH2gNvuaQfijrckwib545xJxziv5Mv7wNGseXdmzcr7wKrtqj8vFCKh48"
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

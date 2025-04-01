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
    "N3oqE5Wm4RSpHzg4r1Sza9N4saB7dKYLpHPyjT34cLFx1yyUht1w57vgckwKmEtFozbA4Z12fXGERPVHnpiLemE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N1tWcW8gqyCcPfsDTcjiAmhQ7BubK1mj3GU3Kr5qeqNGMuSUfZw576oy48BtHLW2hGFsLC6VnHGRnYm7sG2FFSq",
  "key1": "261WEn6YjW2xTQo5gv2C4r3m8AVyLM7w2UYb1so3V9xK5a2xGJAMMdgquhu4997eMmbcHKt9tekxaeNTFvFxU8Vq",
  "key2": "2vePnZTyEE5y3MGP77EW38bumKr9qZtdrnGSJ5yj3tTw2e3SMAdb2ZEJVbLktJHCC4Qrw5zF2uXSWemC9sngMJrP",
  "key3": "RcRwtLsXgtymMx839n3yoNkpDwtqL4PcznCtg5iNg8BsDwoqNYsQTB2FzgDcB6NbA8PC2NiPAw8CmX7L5HqXMfd",
  "key4": "4uCJeohczH5oHp4xrfnZhhZwXf2zEAxc3hsjy85cqYSJ7cLGuTk1jfHgRCBggE5kaQnnHdWMbG9JA5LvRCGSJbb4",
  "key5": "4yNMbnJxbJzJHupx4pTUn4Hn8ZHCQmqdrbwbQFuBMQEZDHtbhQPpanS5aXMnqA9qMgjkJXAZ4tSChwdqN9CQTMzN",
  "key6": "XG5YK8dmbUPqyhXZ7Kwu4Mb6N13NrS1zKMLHNFrmVTVoSz8qTk61zBR2yGTf4S1md4co7j9yzkyTQbp5KVXTet1",
  "key7": "9iH7popoM165U3N2ZUGsw3wMkjcohsa27QPBFKF46WGP73CKqsxtRrj7y7XygPjh7uiUiXGWhTUM9Vw1UvxkDzQ",
  "key8": "53KU4Ft61k9yxp64AhP2LihuJoN9NL2iqLjbWKfpYxPDJuAxFPtWZVrZkELKj9fRkosPGLKHwtaQEr6YTkmtkwS3",
  "key9": "65cui3PYnwSJA19R1hZUzbAYwgCuAa9D12Z7rryNNQNN1hzpwt7nLpWeZrjy3HG1ut1hdHsPoSe1va4pKymYyvsH",
  "key10": "2afsj17KpxTEtzYxmNfPvLCzvcDUFjpsAjYrMv1buZNTNbXaY5ztM9a5dH2zeeSzXxoCeRVHcagN9K6St7dWz5qi",
  "key11": "AyTV381BzNGikbwg3kS42FhgpagiPDcE2YA3VRn29JNurXvTxqPG6L32d8mtSDrMfqE7jBuLt1yTNzMojHva4mf",
  "key12": "59Pj8kzz49wXM8EAK4X21NQk7GaCWuoEhURLtpFGXMC2GwbG5iWKyN2RWEthhbS9MZGU1rB6bQDN7eSSmQXVcN6y",
  "key13": "5os2b9NpWxMWWeMDjLFkHKzShuyHp55pDUxr5J1Fyz4iu2qyiXUwwxaAdig1URiyL6ServSGXxGZpZ9xqLYwkUh9",
  "key14": "3q9TNKVeybkHENeGoZ6F6KZQSEz1Rw59vhGd1nxH3PsAERRJkQp3CCV3Mfde45Juipve75nHizK4cifoEheTVdSZ",
  "key15": "28pP8P6SvYz9fgA6JLswfjF8ACFbqqTHioEK93eENxwcXoBH9B9n6BccqzF3qit7UXSc9hTMXYVmJJXMoLYqGg87",
  "key16": "3Z7YpERQ5N3zmS9ru4KsaFSxWHkudfkAS7SvH739CMgnB3uC2pRGH3Aoe9AciaNArrg6cScduRFzc8obSCi1Xvju",
  "key17": "41N3oN8LAuaeqmvuEP8dYGAKdKJuJbGV9otvXJPdnjWpksythGqpbQaYZRFJT5wb4py2HLF8CksP2MWHvdKope1N",
  "key18": "ojLssK4Q53oG64DRE3HyHSQKoCMHUpB44Mms5pYThsEgMgoXLjmhe1HhKt3RnZqb778UhntEFYhbAjEEG1rzoQk",
  "key19": "ZS1STGpTdqucFASdQNRwuWrsnKB9H8Z8r4xnrYJJsVnsoBaW8NeEY2gfJgyGzPznV4MMcpLEUn6qFCBH5E6RZTP",
  "key20": "c8tBNtzNCoTihqqiTiPtDznoX3ESG9zhdh6Qp9m6f8y3EXKFM114eH8CCVNisJZhYrmBA4UK2oVbgXSFrUzEcVN",
  "key21": "21j8HCnEkN979k1csU2hjrff5qT5Q5gsgYmuc5fvUafKF7TpTYWNFgzcAVg4xVUymSEUPRe1wmomu2it39Sb62S2",
  "key22": "3doXkq1haW6MLrYNvBvFoVL9H3uFYSiFh8Q1uvcvmwmk8quFzo9s5tijTdsvttRreS5PkUj79TnUG7oWjDSZEPjy",
  "key23": "5bE3kEyyMs7vvnXFeQpGfU44dWvzRUGwZ1NWUQRgcmu3BakQDSf5djPuQ4F3fFJ4wfRoDhmiy6DNDa9Ls5YCwMSj",
  "key24": "22fz4CMZ91iihqyfDd6Tjr9fySqwro9pyyJPT1S4ju2aFcvCwzXeuomxgdYKJzXSs2hpjDEUvGrCJFXHky8Yqcz4",
  "key25": "GHFXwRy4Yud6g3BrZZWAj9veizsJ11kHJjnDaSs696jTkwhdT3322P3FCUdmN5ZZbb1hdidGCbF9MFnfpsLu8mQ"
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

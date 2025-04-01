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
    "2yAgaZBPrMeaEYaCAnjuHJFJ3inmpp7NfpNSR8YwRyVj9QrRNGzyKSnBXqYtY7Kwjv3p1MTH4a5q9moRDvaByuMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "suN6uN5v6tTRRoY38zcW9LMxoRzrXSha9HobYQXM5hgPnqAp2dxmevNQsqT9FFhk8jFUkBMq8R5k9p37eoDuaZt",
  "key1": "4nnjfHhBg3P2TYv3D1gs7PYimm3xCNCiDAdVLJvysQAKnJLkBE8ZYr4Zfs28tajBpdQxyBUEm7AkxULhXTYcV8Ev",
  "key2": "2vQGHEVBEH5syT4XBkqXyifQYcz86WToDxHGizkQ7QJpuRP6d8zCjAwHDDLPnSqwNvqSE7n5Dpt6TvT2VJJkDJeU",
  "key3": "5LvKcNw7A87QMNvv6X8uF1k5jM4ExWSXnGZagZCKWgdt8jswcKbNiPuYdkE6x76QVihxNx1qTfNkWrM3CMtjR3Nh",
  "key4": "2qFey8wvzdJENRM5UahToJFkiA1aiSFPe1nnkzaJmX3dnQ3R3qGuRkZn2Jw95wxRs4U1V8AsaVFR9gFKBEynfGUd",
  "key5": "5vy1ZBtnXiMiEtaS5mirwLekE9pYpvUM4hoVFCVQWziuqKjFKyUkyyct3JFcCvaoiM3HFn6SRB6rWwzHo7opxkQP",
  "key6": "4ykj6TiFYFZyDWh1UDo41gs9Jpxygrb6vWn77JAMRt6ZwkAXf2o4Xckzpo8L97MYVnBuVfS1ELx9AdY2Acnsoq4f",
  "key7": "4nMvNCQXCSXsEuV1kYtwUmsduKLwC5auT4RFpde3zhXdyTzGZimcvxoFx4FnTb6FQP2uf2B4YJQAW3gZ6vrxmm5P",
  "key8": "dqbEsvAVsU8YNHXxyiLi9Vi1nMj9TmvXHSB2V2K1bDozs2aufQLBhocXCskEJUnFZaELrBEAqkWsHN2YPwbQm7t",
  "key9": "26Mr76eyPq8N8HR7jwvGPhhzaRzpp37FsUVPuxjXrrj6EM6RwpdKjqBZV7N9hq7er6Ce9WWj2d2nzdsvQgmVbpFC",
  "key10": "2pN42bowDaU9QgJ6PUcgQw66PZrjLs4WuZQ5dUwk2f4LDgnFDDbDQ2VF1cGxAtwV9WV3ve1vVVxqgsgqmjuLkDtJ",
  "key11": "5RCxkdcwWqrRT2H9rLL9UJXHegqvWRF8QcWguQGqp436Q3Sw4X8k2Dm2tVfM2G41rNE5bBEcPY7B5UCQySZtJyXL",
  "key12": "29UxG4dDoYZoK37tW8WmtbnXitzpfytwzRU22LcbTfbxJndFhi1od2xxpNc8cVwy6m2yUHqZsy9zRsqqEwCWnnFp",
  "key13": "5ekRw9nv3jkpBKsorNYbmb8kKY3f9stdQeUNBxQgDhsvDBxHPJ2G4bDuwv8bLmcQFDvbsL8Co4RBugekiLwRy1j6",
  "key14": "5KWBUXK6bupr5iwUSUrtpwRA3NoUe4TmBdX1Shp9d3DjGEhgaZR3HxnyUvSUERM1HEQLF5fQRPsswsjaueNZsbrK",
  "key15": "5eF7SL5YfyYzxtGAS5fptXa6pB7fnA79G8qmtx7R5Xeqh4dwzmmBLVx5xXqPBCRMdzEY5Z5hExHKWkYWy8HoxRkh",
  "key16": "26xDHTR94kwNALwLga3e2rmysQDL62KoeZBc2Nhc7BK6Eb3qovVGtLu1YfDAqmiLq2zBNZBw2z4mhAgrFMTKgTzJ",
  "key17": "29B8wavMXhwpamAt3NJxLGpwpQWHgCRn5sXqJvWwdzp5ipAJsfAZ5ozqMFQVFfsGcFTNNq94rUi9mRBg31zF3Kxf",
  "key18": "5y7riULj1hERCBGyrvUpzq626JgavKMfLBNaj6HXxmW8gbz1Wi96zEsgbjHbrB7pw7gKKsPvpifoGxCiLfMgQ8XP",
  "key19": "5WqCTxodDETC87cgoSCUutGwmwuqaVUTDmwiC5fjE51TNLAr2kznzLSU83seJQEKqGoPjTGQY2PJabs577HY9Yup",
  "key20": "33onghTrXiuRPFRxL3b8LzVzEMg4tRYf6j79ALS1NiXXEVVKh66MZCmbvBfB4tfQFSfBo9YT7tFoyq6D4oB8MmUM",
  "key21": "41ZowpSEA3BD3eGUxfgCC8L8T6SLTkeM8M1SA5faMZPLX8X7xYhKvekkR8SzNXkYMw7X9HBsVJYUT2vcFfNQxufa",
  "key22": "vd1enoqYbFntTGkatfdwR8VJ78ykx4di1vLcuFMv2XbiA2qoiYHsMwPxpcAkCkCqyYuuvA4ktmBLHC7TJbeZvkF",
  "key23": "4TQSSCyxhs7AYLQtZnEzntqieFvZFCpCTSNS8eemFEsQd8XWPWDhGGH16xJUmwdhTTBKjcpCGaG9he92SQJHHE34",
  "key24": "48Hog7Yx4A1kL184VLeosSMiu7jLQEwdpDZM5xnrvBcS1biXoPZuFm9aPohMqdLtTZKTMfBotM8GWq9oGXZBa7ks",
  "key25": "42GWD8DovhGu55t6fHHGHu4TrjztaazhjwTyNUU8q6VnvrDpup9MDEi9fBaxRwTx7jxmKkUrPFFXWsX9p96RiM7Z",
  "key26": "rvKmutenKK7Ki8KBZuayxjpL8YgSsVtRnT1yqSEvbnkxvwDmdG4AEBVM39nEPXDMLsbj14VrerekrANvreY3rVC",
  "key27": "5VzTC59MKnGx5kLMcEfGAdj4UyAQA38jrXVMhrQ9HmsTxHQxbg8vZYntJeze9UvSJemBWKU7gryMv3ur8JhB6Mmi",
  "key28": "2S63fixgwpJms9VrdKCgm2awr4Q7hGgXN9PMWFzcornUnGa9pna22we9soz4RQL9q9S77BRuBpEbQ7GzjPQCCboA",
  "key29": "f91rDewSe5DzaxGdjwQdZ7CfCRFWkP6bpzjd2XYdmqwJv4mDLg4T8dC68o8UBJC8dWLpaXkuV98L48RbMjkUSpb",
  "key30": "2v7RtRYh2pAeqnwx65rBdst87gLRiFwD5tj3fE1u7VfpQSxuVhY5a35ZVPYGTyGoHWPJsJ7wQe7hzaqiHt79t2Vn",
  "key31": "3XypE5WiANry44xiNThLCX5apWd6KrzEHV4N9DzcqMLFprcLP6jqqj1dYezSwUHyxTBfrATE837zeCkeZ3XnUR1f",
  "key32": "sMzzYdD7xhKNfk8BGqqcmwtbaAuJENsMe5tZq2tcibEgcQUncwXwGmfLYoLNSNaTtK3fAEZknT2GXa1Ra3ozZHR",
  "key33": "2Ehv3w74eBrUEscmshnoYy36pA9TphC6yjEhrbbXVcP4CAYaskWHkdo7Xnt2FAC5uH8BfBREpUdru4XPUEXgrSPE",
  "key34": "54aMx31vZq8DGzK6PRD5agzfp8Nh9hfrmMoQXuysKgX3rKNs7JgZPa4n3CPSrrSiFSXXR5AL7KBWBdoQ9W7yokpi",
  "key35": "3n4qbrzAEnejn4NdoenRk4bP33XK72v92Qqymsa9fJERSsMC8YZeZRuH46MyZJUy1JbUkaPevsbtTHHR6owL3Ss1",
  "key36": "4T8H2pynAtCXgMHAHQokELmv8UWtwnVbcKGpc5p5waaEiBafx6nJfezJKChAMFUWLsFa186pNBeFqrcKHurGneFc",
  "key37": "oknSBhvRdb7c9UNgS5Cz876VrX4zb2wFmzZ1ywjRr4pTEi1xNEZc787KVgPE8y7h97D6kkUw1B4Txagn3vn5U8i",
  "key38": "5oRRQW5xoy5o4paGke3Se9iRkf8wbVA7SDCc4gSo2npgTxbbXpbmdLgPKLD51myfnHnByxYfprRnmMkSAnNhf4tP",
  "key39": "3RYMqgWvnRfZwruthNxXBbsYY4s9vwdYySQyHXnEpJMZWw8qTVTVNpJfSvQKdJTkH8JbG4kncNPiMosFV1mTWqMf",
  "key40": "2Y9uaKWXQU6KfhUVeUMMYH12ExTTitoVo7SiPcgGu5S3xzDCenQtvABnWP17c8vxZLxxQZNZCp9U7hvueUwSHTwe",
  "key41": "2tysMXgUFZ8aAHnsg9XiBXdKCqUC1PcMz9cCeMFh4inpGhC3m1QDJkKEuiUiWxDZojxZqLcMPgCZg2c8rtPCBLMk"
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

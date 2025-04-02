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
    "4Vih8ceERRMrT9SyyqtSDHTt1THt1YjKejFQSUfXtounL28YRoe6fjqnE2giUcE7Cdo2MrC2zN6NpqJbhyMnHuiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qraV4b46BhD8EHbuC923dqskpzpMVaVui5S34Wkyd4KnCiU4NUTgVhHhB5WUZjjeYEyLiU8LyFTAb4ETd1DvLww",
  "key1": "3t6oKaBP4VzkWpSD9xM5iihEPxYVXmGq7ioaNnduRQANGUswp7DszFoDaiikWS4uw8KdFLn7JhodSFdfUdqziS8A",
  "key2": "gLGSJsHGRaVeB6jmAUoDKVcTJvqmWkaa6LvydhkREiGyD9Zd11pKxGPXmBqp4cZuzxDLs5kvMQngPue3Fh1WLot",
  "key3": "9PC7ZfNxrXFm3GkpGH6PSaMEYetwacKCHVt5rmyoLR7RHRHRfSGSFZSkQxBH1qrJHQMvGwDQroNjWKpAxdTMtGX",
  "key4": "4neACacDeUysUdqwyHArZ396g2Sn9iFNcVWtcDKwwLjrf6V8odwTggThhwyrGVVngnDRJnBSbdNQBaWfmNHqzU6f",
  "key5": "2tzhCvLaCMbB6KQ8HWm5Ld7kPzmTLf2gjQPgKQtxP6Hhp6NhhnkPn58WvcUTB5iGCWk9tvYrLQDofCm8LN277bhj",
  "key6": "4bDeL8mUj1RVHDAVbS2MYLyBWBPKS8phKRs41bjnpSt3x5hSuRjHpm2B3dcntChz2CLDV6vJQ63xUjKRWoXp497E",
  "key7": "Ue4JbyvEvVxhm1opqKjabkhMBhmoRzcRLTUR1ENVDp6F56WfYvF3dqLdnTvjD7vCczExYwbx4Sgy9GavAE6hGQo",
  "key8": "19jfomPCaqeK4zbz52VF8HdyYnwCs3JsiiAP5RVtoHRSeZFCRtWLsL8hfjSTxDKxwgg9wSiz9FGucYjqFS2nRHD",
  "key9": "3DGhZg82DSfJ7hqHwQzUgfWDEuyJjPfszqPfCjNEymVLjRUgQ8P8f1yHzsL1taynKxm62yqChcCAHeYANKw5V47A",
  "key10": "2FdywmtiSQLPXdFs9GMFBe42Xox6D1bBeNJYrmsQgF5CfxUbwwXoTxGpQTJ29yJRAoJ1ZtWSvHvahUjfsiozGvZV",
  "key11": "622biBkhY7qH8AZwHnZzzikHHzKUpDF7PrqqPMcLaDy8eSvWXmLtooo7skhVpoj2L8Cy64DSLdFEZpVnwsYnTvU7",
  "key12": "5GWWg5eaFbYFwpTaZa6HNaQ69u8yfohm36JXvL6eb7f5M4nqzJHFGjAwyfdGTZ177XtZbor5K7ap91kboSeR19UK",
  "key13": "Q9odAJf1TNH4KQsrnTTDN4cFxJ76KGQMSwpxByXTnTKwVCjStA8sEYzbjmpN46dAyR891BJSqH55ZLQ4ARH5K9D",
  "key14": "7nDQMCxjVXDsZaaC2wGisYypGz1JvQuA59mayX8AydMrvUxvWJf1RqVg7FVe6mCUKvf2MCQHFPuP7xHecudCFAJ",
  "key15": "5DcUP2jLkQvMaiQ71T5fCGjSk9K651hgEdRLiWr4pUAHPQvh953mcfAZjLxRPTrEb4Rp6Uqm7JFq6AmZWmaTXo27",
  "key16": "2jsUBTcEH3u1JeSiU18oMcwdYEYL6vF28kDLuWBueahadce4hx7WL2bSKm4fmYbibDqZ7G5wmAN94f18cCh4viau",
  "key17": "v8Rg1LJP48UxXpDEMF57iE7DQy6V6sMPr13HRAVLBYza1xLdKFubWftMKWmScXFeeXTeDwbFfMtwZ6jEMLtRa65",
  "key18": "SNNkxZGQLUDRPzULo7AAEq2q9HH19f8QqaghWFB9XruReNKhpkCRkwYsKPcH6MNuMDmBrNnEtD8FETPNQWxx8Rt",
  "key19": "4rwHxb9wmxssCV8s68gTRwEPtoAGjTyUQ9EY8TQfi9NGtnZSjeJJpDLrjPYhxXZKEyH3tJwaEvEZRdLzwHteMsmm",
  "key20": "3AkT3K6ehYzcaxxxG4mzV2KwZFQ3pxRhRrk5MhJNv5vkmx9uRagmiGMxDW3FdBaUi65sMspExzL9QRLoF4DjCcn1",
  "key21": "Mcvv13J2Ruaft4T7o6WGgALHCBszzBRqNzqkNMbk6kj9KKsXWqjbpTEiNzCmPo7CLPPgHsKxybmKvxwES1Pq6M9",
  "key22": "5znT3xQiBknCDL41vCuijnfdxPo32LY4MUk6kFzM81kdyBtSgsCmxMQbwbafKW4ywuqBnuyiKR3d2VDxkjhXeugy",
  "key23": "28iYbYGMy7AambhhyUahohLCQqZfgeymhtpfEUfDGVeuY3jfgGp2dm1HjxHWXFNwovvVRjFmyq7ft6qeVVnrdExc",
  "key24": "2YYDvLjjy91aGTRGtigPHAM1tLAUpJvBRT7fS4QD11f8jX2zMS556xgQSBLQ9dKnR9nLBDvV2NSxT7yYALMwX38V",
  "key25": "2VAtNSHV91fTKhiQEsj2wt6rFj54zhGreV7MsfqYSwWvwbpKjs56gjurB5yeiAayoe8JNwixYCPV8abhpGMz18xq",
  "key26": "2zGpK92CBBP1ECrWoKy4Paqxz9qiqEpBk9a6yTc422sUfhuiKN7nUpnxQzdHV6YHn5vyYaVA2BsUpeBDE9dLkYo9",
  "key27": "5fBFCxebAx43ddYsSbgu66upw3oijvvajVQQe1ackhyYEoTiahkhGDZ8E8EiVrmsgsAf2rv7nUox1LPni9QimFgD",
  "key28": "4fS1aNBFPCh6NXzEZXby761r5X1grtd5DqMZ1WzKRJ5CbCkuyqasJ3JdUKCebLCrPcTJjDdcTGviJ5JnFJxAV1PV",
  "key29": "5hx8RuW6yHHbWVo9crhdT39PTo7TzzV9qEx26FDtc1Wv8nvY7bcMG9mbVzC1t7eo1ux7QAN38CQiCrHxkUHupUE5",
  "key30": "5F3rVmqLkfQpjsiGedT6VJDvzyUfLq6pAY7kGEx12k1w3TyFNTfYAtqB5ZxSxpgSpXvb8SMFfyVeo1s3fVTrBFFX",
  "key31": "8tp4MBNRyvwdauWGLTyoASw96GNWSMdrBHNLyCV6wYnPLkhdoXRxEtuZFxHoTnHRuhavvJFeeEj5zjisQocLQ6N"
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

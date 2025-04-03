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
    "ES5p3QV9KRU3D7obX4oqu91Q26JVsAD1yK8zaYvn1ahkmpp5wpEnojsXAmR3sdEBV6nV6ksEsB8DnfXTt4hRGe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tEeFCCNYWb5rwfymQCJ1b3DzVFkJLcoUXVhakAs4ThAewUWfEp3qTXLTx4fWBWcwxWDAgvp4CfEmTUbfcDswPDj",
  "key1": "5tESDdvPbXbmpxubfcLT56gSqyoDyuU6iRewUF4JEfvRbEREZ1fr8ECgVdhTpDVviJmouX8de1i7ffVVw9e8uHnC",
  "key2": "4h38yb2RQqetbqBk2GnHT1VRdHgu8qJKe4jdvxbPfcteXGvSHdBRzM9RW4eWT5CXV6FJnfqsv9PPPtA9Mdc9VdAP",
  "key3": "5UALGnntX5amv49Mh5vZGVmSr8rvtA1v35tpZGgmArmRRu3BZTWrj1b99KYumgzUWpPYpWBcYa3ZEZLmobrJjXo",
  "key4": "5PcRis8ZGR2Xw7hCqb6vv7XfLpBhNmpPQryNFYMAv6ixJ4bXpx1kARnWuhSG2XmNwWd5cbwG33vYnG1Ffrazt7df",
  "key5": "vetexqu4YBcF3JMhtVoFuqKMpkqN1noYBbj42eLMVCp1tbtMw4J8UxVebc5VhMYK3yjzmHocn7hP72iMaQ5cAxp",
  "key6": "qE3arx8X9uKyNzso3EzjhLfxhVsWiSBUNBck2BTnLndJDZrbv83xXsAf2FufkU7sGM8Gqr1B8PWZzmaGmRkhaYs",
  "key7": "516P6yh71fvgwZi1EJmNCvAc3NHWL5rPE4mkYALMFHw6uSMqDyvC9tgtqukZh7JbZSMarxHvQquZbDgXjHBJ7M1d",
  "key8": "3DPejHMRhgbNZdK7pQntcj3xDoDZUsLYVNkL7L2sM7CjPKFJPppLfnTuVsSwfAuhfbcVHFAGojqjmfXt75JiG7R9",
  "key9": "5xeDgHwfdQSrBo8MevYgGK7fueRuUPRzWvP2zKzJuJ8fvvURWvkxvBKmgHYBSgT5XBA3wDfz8xJtXp7C84iiSyac",
  "key10": "3uhU5D6a1oTMqW32bXdqaL28FivkVKHWpGztvavFTbBVTcU7qy8eHCKDJY5MF5PHsXuywgUotyXBabBru3Dqg382",
  "key11": "5CyrMF6HZF86Bz2rBgUnzGoWup9HjtEMN2JS3WvNRQnxZAKViLcgHNnq8cr2bKTZvd5vBng35SXSWmb39PEzKs73",
  "key12": "yFRtCU18YnEZukZ8Erakg4xjk3HW5fdJggFJzCmiZm5EhkGsDyzNRMTBz5etz3MqPD6cgcdWEXQevDGxLEDHJX6",
  "key13": "828DX9DemQh5DNtUNKAu7rEc3oLAFvT4zFejmAXhguSVajNuR273yFhcqL2E4V9ysmaAWwBZRDmAcf5cgNa6vEN",
  "key14": "23BWFvPMVorqvNS1fdBigf3c6TdHqYkhcEWxUNYcy4J3rXQJ4owKDNHT7DaewF14W5zSPR3UCrbVorJiX5ekDHqk",
  "key15": "48qZHhyhSWJVHx2nxxEfpBfPSoKjqzW15BHoCq3exwoYn5cBQFgsEdsULZrS4xbTDg42XMAuGp1fD233C6xYVLe7",
  "key16": "3EDoC3qKai9AFXy61SqrY5TCVFqH9KJaACzL2wxynceHLn1avRzia8NRoaArBRckVb6JK1yzGodS8h25jzDh7Hnu",
  "key17": "5YEQqqe7QgoEJzejvJzMVQzutsdTGb7ShPd1oLkm2uhYxEApWT11h7nimsoDKaDgaysmgVYRFXPpimdAiyu8eiXy",
  "key18": "4uiWCTdVWbeekSQmCJVYWqHGKrL1jytqR11Qi4EroLVQKokYxmMkDZWcWZBdtr4vrgweBp5ytuTtuFSVcQKicFsk",
  "key19": "66NGCov3ZBmKeE136Bw97xoWGPMueQvz18tiH3LMWachKdVvHEhSWQ8q3cdKHvqGkSZmMQxZHygWspMvESr3TcpE",
  "key20": "on95UW1eje8LWn6D2KT8jBLVoeCovEgc4UaVhNVvT8rfdrpjEeZSJaCnD7fPGryUkYnjsYHmBgZtDJfWUWF14FB",
  "key21": "2WZaz6VLZAEe5so2YvECynoiHpf28LEYoBHCgV8gSF7yA4GQiudUaRsgRkPpERvenA7kagurKSyFsDGpocdUqD8T",
  "key22": "29QvSYFrujvST8qj8oBDdCao6ZddHrYP3pRUp8Rtp3R1goLxd5wfSFLjnAr6Y4zTCndZHmWuPkGk17cyqjxJJCRV",
  "key23": "5PKaXtWZjreigbvMxAipAyJaiPCkXmdsfuCcEPtg1guiqCAWra3c4tpVq5PXM9oji73exfRQ4Z1Dny1AR9yd97q9",
  "key24": "54GrVc99EKR2NvYyvXodEiQY4YFevwJJ6np3KFbQnQTcRAZNN6ciQGxfqduJAgmwQh1eY2itpo1CV1jbRr4pQ2kD",
  "key25": "5CdTdTYETazddHKs15pZrUapvkAudkD4bZ5viv5PwYz9nNnw2ZuymX2CZMHw19G23m6oD73h68wVzk3jceEjRVS6",
  "key26": "SCijFaL1jwSLsE58y6NxneLJ2yvr6eLru7n4WnSfNnoewANPoyDWDdy3DwxnaTKFCbNd79HAPiJbEF4gj8xkbLz",
  "key27": "46voZZZrsTmDZG1mJ5bFSmhdchu69uyAC9NJuWxD2DyrtZEBHYzYmH2355HEdhuDJxcqZNqMj4BwJFtp465kHqGv",
  "key28": "2HCHr4UYG23mNgkRwSNBRCE1FsDS5XvxgF2sM1uqFZoWdTqvZGcGzDbjc8kP16F3Rv8xMmXrmvmN2SWpfSeKXhZ2"
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

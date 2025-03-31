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
    "2XPbvk9CvKVJvVUi4DvSSdoKckVBk2GBRasHWFQd6rNzu8QyX9rYRDnbfgrPM64uZUfBiaaVSpCcBwpe9CgBREck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zc6PYiDt1cawx6nCLmkBb69RY2KJt4gGWTv9GJwit9e6MKtKYhML5bbEwqXfxD2GM4b8drd5XZpaP7ta4p7CPhU",
  "key1": "33msMg4XkrPPTUxgx2K7Zm94besd17difcD1n42ZvYzNB8M4dqkX2rTErt9HS7P7Cwbsxa2UaPvZCjp3TEx4kWNt",
  "key2": "5p9aLgWgp8YXG3r8dhfXQC1uaWQocRLtKftbA2crhK7KJLSd6zxRUDaEycQcRiZhdfjmAQ5aczejRg376aPzajUh",
  "key3": "3uPtMrcxiUNAxjgcdkiu53uSoFZXB4kpiSV5HRidRQqHfEDMtj8m5pxkC5VhwEeNv7Z4tiL8V7qoekHrQNmemSNA",
  "key4": "4yVr91XjWYE26eTcLWX2HYHs3CM4JMaCVZEGt4SVAagQTgvSoVzfnoEi1i53SZwDho54VC5vJ78jN6g4JL4CL253",
  "key5": "35hN4gCizPeBQWBmNG9UbVF1oZb3MyMX4LJn1seisSZCrY9kTf4q8qZaE52Cjc1GvqD8vHJCMN9TF1pSjukjvd1c",
  "key6": "DtShvfKYsnrEPHLMayxxZVKp9aoBLqEGZbWDEMfefEtbCXdr5dAEQfVd3t2FW9pwnXKTKLJcSDSyjtp11K6tHop",
  "key7": "3Bk623MGeHVS3D5dmPUorF9iYWKnjVYKgZ16Uv4A7v2mvvMhKM1u6CFx2EJZyL48G7GaY6uHYJgFqjQ7SsZHWfhL",
  "key8": "4crYetUZvuyHDEsL81qj7H4E6dvHx4jnBuufVCR4gaNE2oGyEiw1X99dSW6We3jwPh6BisxAbkAuGx2LYSTWtz5e",
  "key9": "29nQfPAWQpFexWaGqiWRRCLc7E9AUAKFXKAMCXxKrnvi2qisd6USSJxLHVXnqUjpAnc2Mb18QWoDe7YyHNg6RyAq",
  "key10": "dXam9iUUgHJD473WXpjvNGympwg2ySyxKCL5ygdSzXvWZSPQvY6RYh32MmZBSrboFSJgj4kTRDKci6p3kzNm6KG",
  "key11": "LUj9Z6eLMULpUJL5oX4jjUF6BU92vLhteZJgRU8MVEWFpShx9LAevmAqDko4co7BGrXUytUYzjC3LtKe5c11zcu",
  "key12": "5A6BfuLuT4ATUqax2mQtte3BAaeQf2WPPNsP6MK1Jv91eHZMPmMB3EBGk6DWbocvfYQA3sZW15LeA1ydTYJT8cw5",
  "key13": "5oFb2K8R4FiRkGJK2Ht4SaM6iFLUdXtA2FctQEg8U8Cq1SqyEYitqybMWJQWg6f14ZuqRinB5tMVpr3W1w99YyHn",
  "key14": "577s6uzJqhmr1ksdUfZcB1dhxczE5dB1qYEYegUETvxpS7c4Mkoxi7LBPYPWCvy7ZmyPDFhUAxFVKhfywY8QsjEF",
  "key15": "2vZs3ADUHVcjZEvDGG7tkdGj1bHuh3ws1bKgV3DFaEbA6fotzECvm1g1L1uUKroChMGVMRQFtdRkQQ3dtmNYzsaF",
  "key16": "UkMCQQX8BtGVMX8pKa9fpPvz57qWwBPgpz5kAtBpae1dFZZwRmQtnFsdu9bgtxJd7U8m4CVtznoyQ5tkaa6fToD",
  "key17": "67eEVm5QsiarDtk6ttpkLNCKvvntcndJfa1dnqRkjQvU47dBkHne3ZMi5SUnpv7fYwyegW8jMrABk9sxoJG5ayfU",
  "key18": "4u3yg1QUkheG7GFpx4wUSBg3vcc1aaECTfHtFtcfqd4zTydPnV9a1W3qE1i8f6RRwT7GUE8cpUdT7EN8LnYpdLqA",
  "key19": "4tox4aEg5ZMzuuz1S4cucx5Zhz7z2FT3uqr1CNZGuCVASQhr55xkir1tM64567xpntLkNRF8mDYyFytxniQdB4j7",
  "key20": "5BFJZ55xrr6Es6mogJAPVb72bykcUg6JDMg8U5rs6xz52wdjLQb1m5gzUZtNzdsq1JquvCAFkNY5oDFPCg1AqGL3",
  "key21": "2KJF116bc9mZJdmWJJXYuCSoWHGa4QZBiCWYYdfowTj4o8Ta3nMvZmni9JhJat5QJ7gbEcAaKKjtQrCDwRvGww7v",
  "key22": "58oS74a7h73dMqZKkkMhbPRcHAwnoWN1NKmVfYL4kngYeMKyP4D5te8sqMFc3pfWJ1vCBWLQq7cyaQcstpD8rku9",
  "key23": "65GNvF937SHLqvW9bC49AAww1eZ3aV5JaGuhguRCiE4dqxJR8dYjDgzbcY6GoapRnzFC7ctAGY4Z7UEWREotfLtE",
  "key24": "5DKbF7M4qe7eP4GYC2biC1PCEtfwuAocc53DJSkGUijvdroLwQmHvc1YYAfdo44WGxSorTkhQTxgMBuf4FXr7UzE",
  "key25": "4Uc6ZmHLu3JVKxjb9mCmZy7ZhJNqUZcq4fhqCVaa2sSq93ivDCJFDCnV9nHyfJ9VmHAqKEyr7uzhyFfuod3xKQSE",
  "key26": "36jqQRydEmHrDM2gYFHDBNPUMZ6Gi6FVahqqRCRcvVX9q2pEsa9fYtJvECQ6NTGm6wweR2JVEoQFMj48jbYK8f96",
  "key27": "2Tsw3NmzDUQxYQU7XkMeGrD9MukBvt3d1oM9YdKQVB3QHbEhNvvMHygzRT3hd25eC7ynY17uihqLF8vH6kHbhKYd",
  "key28": "hht7ZYdNgDFMgE63XzSWVL9eChvg4HupC4VpX7WkWEswFtJ7B5dnmeZernHPpA1puDrst36kEXS5B4kFdZG2wUy",
  "key29": "495k5fHybDnneW6zaK2q6AibAGXb4JRsbBoydW4hKghzTiFS75xLuDQNhaPc14SB21RiWGpAtm7GAqm9SbjTeSws",
  "key30": "36PaKDvBLxw1G8t4NnVzUPBki7ocNyW9Y3nZ3YmTTQsfwdKSdqmqGKjK4S9uzS3UYRXoTvSyMdvSQuLUf58ZADbq",
  "key31": "5tpMfPrLpbcAGLEx4wD4tAXr25699c9HzZPbXMgSPvomqBNX8adAZ5UktujSN1m7GR1P2t9edie59os2DG8hcHJE",
  "key32": "5uyrL7xpwKtvBXnh3V4SG7qK1N3uNLabxSrHDzJ27WB4hsD6umYfjbLq5Gfemhvr2rVJqo3oBn3DArfke8PpwF8F",
  "key33": "2psG2sDtGeWhD58UwHnzRn99a9rn26HbNj8M5eKXXH9hwpay5vCrSfijBDx9Z4DDBYMKV5jnvh7RtotVwXzTehvM",
  "key34": "5BrWCu1j9sc1gjMdJtaGdFWHgRd4Rnt1qriDyLNGrJkCCPvxiw71Qbnnd4EqQ7mrRxqTLnRYf6WKCZo91aJcpCVE",
  "key35": "2UKRg9CVsHq9Pm4XC7otXWqnWX4RTVBgKdDv8BZSBca5dLnTZNvsovvpzSjqQhPX5VnnrUmbATM7VnsXLgGT4GHh",
  "key36": "5twKw7qPKv9e44WNW9DpCAWU9xUy9NPZTK8sNFTx1WA5ZQmu1nytMRp47wqFeq8f296FRHSrfoNdca8xHYK7stUU",
  "key37": "3WCuYrcyBj1tKbEuczL9n6w4HtqHfoJuW55NQ2MeoDjVJjPsAmW2MQ3TYgnWZKdijQUMeq1iisyxxoBJq71ChvRR",
  "key38": "CG6mWmhxWBSg7AvEfuHvXuYNrbsaG3um14TjJmwnrhedpaSnxmMoXUC7iTHnnVHdgpsfNQju8QL8apXZbv6pn5Y",
  "key39": "4cCeMm9godjU3VXVNG7vNJ9sGcQ5862KP3jfwW9vjKdEF1wJ1hi4g8mmX7QxQeCceseAzzXjJ8tjMTP6JScnFmKW",
  "key40": "NMrUXjs4CFKQYSj3EsNi7RB2GbMvry3zMVygrU3rrVLK3HYQZHoa3fKxVgxB6LRsB2XNeuZrybeAEuGMCQpzoTS",
  "key41": "3o4zbHYaDKjrDX2yZ5fE2v8PjF2t63tcHFuUsZsiHVMnnrPfob3YmshqFdK98Tvru9GnH1gJqRuEyo2fzdq98oNF",
  "key42": "46Qmj5xjedT2FdePsgMFMpy9vscsWBQp5GZm3m5XsFSXnE725EpEwr85DmM3p75hbyX3D8XywRvpdFQDmMDF62iQ",
  "key43": "GfA3PzoY38Q5YwGAMexyGScbkc8ANnJLXU9WBGp2Gg5xuZ3oCEkHPDU2jvQGTZRZq85sb9Ka1Su6aSRVT8htzEB",
  "key44": "3MWLQnQdQoLHJMsU7y1UAaevSHUyCQARQTQ2nUKWrJoAkHY7hjxUjqgGcMA3y3dMidpTYjAfVzkx6TRKFubeNuVq"
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

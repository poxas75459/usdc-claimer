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
    "2mvaN3o85hZemu2fQ39rbQ5ibo2q4u1p2zSHjJ8vqVgAxqMjDNS8JU6bH6DRn58SMfKRk7ybinobMeQvVVUudN3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t6NR7ZzYsUPQ1WcN2YFAsjepXFyrkpAjKmZVqn75A9mndzvb9qVVDkAmWCnVjZw7jy4VcNDgWM6a99h6We2csAb",
  "key1": "29yN4BNv2YJ3mY5pqPVM9KEp5DpymyeErmHsxoWnzQtBkWjKo4v8WH7FKhHDsf4Brq3kcVNnVpZaVuXKQAidz8j2",
  "key2": "3QRc5zJXcRQoUmLSBPdMXWGzU2rV35BQw4JYjrUBoqgpRfLUX2pa6ydqioN7gzKjYWvRXuqeJNEBMWxS9qeE6Mo4",
  "key3": "5wTKgXCjRycGFzQMAWXtXZKw2e2gXf1RzLre64AFNz6Nfwttg4SP3XTsRaczDPfXQAEXRQGDqEGThDnbgd4hYNjA",
  "key4": "4KkqtCTtioLLZQ5qVKyn2TrVb8GCX5VE4gZh4B2WECidmWWaDELDRWhzwHWFV2BadX5Qq3mmZfhPH5Lrwi7U35qE",
  "key5": "2o7kQSPm76Dex7qu1pvU39bMMGh8dwPDg6MrKDxjmFYSqXJuuivwKwa21CPwn6m3Tv4B92wkienSr8b526R5Jw2o",
  "key6": "4QwTeWT88xz2YVruE5NpmKDrwvUKsMrDG9ch18m2Act9HRN7Lzji9CCgrCBks5TMDv4YxqVrq7vAM9cemyRudxdh",
  "key7": "oKM8trAuN4wkgUL3SuUSA4mLGp7nNuX174LKBXzENeFVtkXgwnJ66dHf723Hbc9W3xNiDxaqL6GeBDcc9FtQD2B",
  "key8": "4mkzYo14KSC1dzPuQupzr2hnZ7W2KAcfzCd7zX2FYx1JPrKGg8nn3GJRSPUa82nyC9piP9RqiUSVs7deZo8KP18M",
  "key9": "5zVQ4QrMpjDqsXie3reKkbMbneG2eYgWsFELUhPkUrQSnDUEH8tuCyG1TQgtPCECbBh5KK1ZEWgxpHXgH446wLpA",
  "key10": "3Cz3fBnft1FhA8NXhfzwvMHqzY2zm43ibXnpiXpXCrDjiu6jXdyBGP6LUcUbz9sB5NFSaw65X8vXfvtcneRiVdVh",
  "key11": "538UMZxMAkxwCZfqKhfAvzdYBfEqCA7izvE65W1nH4rAcpj7bHbmLHs1ecaDTHBRkL8U9Z9538uKmdzkpKz22gbq",
  "key12": "5zHVcmELiYjHvXtD8fZifscAXPK4WaAHg8qwXQC9BPLDQBiRD3p2jqRwuTEBVA3XPVbNpYRHnMiUWmjTDWvCBR7J",
  "key13": "63oUv4H6qi53dFWF5JDVfN9jouwvJoPNjUVfHBzLsbkt7T6rsWuToEezWhSKxF5KrmJTuJrEEGnLZStGcFPizdcv",
  "key14": "a7XGchPXWg3JdFBpzLrAMLjzJ3Ks1QfFYdMjK2M9udwdP4Qh9EnqwZttEksBwXxszkRYiCAcBg4KdVqNxyeBBNu",
  "key15": "2DgBeWwSCQdM1M3tZQ97sjLJZHmvoEnVGMHmQdgXBrPd7f9F4KVqnAxSsHB35JHcnMu5yZ6rHY1mHmwA9szwRG87",
  "key16": "2u1NPnPB4i3iX5FfLCUtACF85eX5KDNRAHzcyymfxEtrqkMhk36abMsza2fxnEvUC8hpVCLjVK6nYx6jT5iy3sx6",
  "key17": "5j3VJp7wBQd3wPUE1dYZWGiVQxGs1srPodPjxgfyZQxrFbpF4tpzjhCFmupk3QMYXe2NjVBvit1vi42xnGfnfxCX",
  "key18": "25BzfGWdZHEApPpCAtgTii8SCoQZT9g1Cjy1LSLuLKzE3KyBGh7kdE1caiNJn6ChNtwJszt6WB4aSQdtqULdkYUs",
  "key19": "VSNveGpc2oWXqvtrM9dvkq7xZiKDREfBf58Rh7Epemcrh5bNDEDXw1b6knDoHKbPvAeYk4QKXEwAftWsFAtSNG9",
  "key20": "2884zLFPi447pHKfp2vCfz2nzLWPNJSqK2XD6X29odH2MLpgGf1So37d319bviiNPbHY1s2uWSWhUtsPiPf9HMna",
  "key21": "4fwSYkcHdUAvBSYDS8NpoKoQijtzbhw5mPP6mATcxtEy2MM2sKCrKzzYh4RJ8jJYW4jcSH7rcifJ2EXKcSS6X52L",
  "key22": "5vLGGQckNvFCjcnWNyAnbAhh6fRj5DmnVZPYmbrNT9VaEp8VvS1s8tVtZGthfrVoX4J1GLS7qtXHWPYK89oasrPG",
  "key23": "4AH5Atgu9MT3C2e8sFh5N7Q5ar5qDrdRpn6mUd6YVMj2dsU2R92Qi5wk2EDc5pvWSVr4mPUWHqAb75sKPJ1peXsz",
  "key24": "2TfzGhqXdZ8zSTNx5AG5dT2PwBdU46rEMMVJyKEbwvBaZc7X4c21bcZjwcQpQjR9u1FqZUi9UGVw7R6XohftAfqo",
  "key25": "5qivs4VCs8pjKy4k1LeQhrgV4nhCVdL46ZqjURbBpbGXX2aXB9dAD4hS4WJo85S5W2JC2JNTGBbyxofj5EqCRRx",
  "key26": "HDYiYnzD6PMyKKsCmvN4mXKVwAmGV2TdZEhZkMW6LfHFRW1LXiJ37kzVst1eXgznhq97sAFkm3sFjtBD3c2ep6b",
  "key27": "2Wuzz7eUfSGKjhjFdfejGRLaNxVFUM3SQHgtYpHrmvCPk17QCXwgmocb74R2dynxJ36qaXECob3kEeFjFo9i81fe",
  "key28": "3zGf1r6pY9589UcAH81tsQ9wXBycQzWA5LGtoEdzGYWsuRDag6Q4duUSrXEbLKus1P86NGATH58LK8X1A7CxTLKj",
  "key29": "3vkzznzK1TF52N1SimJvFL7b5HZ427T7Y3pCAfWBncaCzvdUhzfLtygAGkpPqVBKUtnXSUiM7gZfmdaSRKCseU4x",
  "key30": "5wVTGSXwC5LXkWBqA8VJZeuRMocjGGqkkqXbwEvGx1ztNCH2AqSv1MDb3mCYaXtD352dHGYwuY7i328Y8yLmckcK",
  "key31": "4FWsDu6bTdQT89ZE4yNU3wGe1ZmXUxjnA12sVxxrwenceXzTmQCfYqqxii5KsyR1pEpphHTqCuPmGR4J3m9nNhKK",
  "key32": "2jTFf8jNq8BaXPRcme61NPFXECAbPCw8gVhkbhdVAFZNNv8fX37KNyd7jsCtRJGNiGiimbJ7yRukTp8jkuJNUWbm",
  "key33": "2QtPeqJKDzzLWVLjEKzM6SxLWVVzyLNJYtwwaZoSWr1MccJAvvbqzuMgPvDVdxQMxpCvLeUzYWL8FUh64Ncrxosc",
  "key34": "31QbRCJP3SYw8xuLx2UXpwS8ycwRJUub4ueGQAzT4KiuenXeCkNndaoccEAcSRxa3YF6KutGd1D61jWE1DWjZFT",
  "key35": "eMw7ZViFSPpGFNT6cfxLWusmNoatATu3f1QKmSYMDyAiZfA1HmkP7T3XHsoWbh4A3M734xHPqU5oHDTeWjwhLnr",
  "key36": "3kHygxMBCq4ABBPhD7wxCvg1XNSvZEoGk4NnKpP8s6dUu9z68gGyLDEUYwcEJBsRm5XomACbQMRuMLfWDxHRKFQc",
  "key37": "3MUW7Fb1YRFqw5mnV2xRDHqfcyXcfdsCT9qNU7NGAyGz22LB5cbA3jvDHXLgjrViqTandgfLD9Qa2RPtRi4h7w3n",
  "key38": "2jLpCrCKAEcjj3Yhy9QXyKcfAbz52vxddKdxpjt27UDjgnaUiMbuSkjQrFHvWZEhDZrNvSjTXBe8jVFL7d9s6Btd",
  "key39": "2e9eqyr1JCoL2UnUwSE9TmRffJ82XMyCozuE2SKFypKQRP3gahferxtqFzvAFZJUfDkuMMboz7NdaoMGKsQEyaT5",
  "key40": "3rtVWYRjcLx1jQ3QHx1fSkrsDiKFi2ePu7RzQBXBovgoqojsVRryPsdht6BpwdJXgpkqvsn6GnESiTtJ7uU6kMuU",
  "key41": "5caTQT2oogSshrRddBhPrbjnqSz3q4jvbQ3FwVjbVRMWnFfBdVn6pwELRpiXdEQvtbQ6HFzytE75JqKD1BhD5Hos"
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

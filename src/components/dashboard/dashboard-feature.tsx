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
    "5X2KTvj5cwKNDvSsk6DmFFMmKJsDaukoAsajvUAnyzbzMf7bUdMVBiAy3Cb39AioG9cSd9mWaorwJq2zxEKexEic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66QHTqPYg2RpZMN5BJzfctCt8Rez8PehFoYmM2DD7qLHTsyawxNEqr5Mv7GNMdx5Ur6gvdFhYk1W5yU3xV6aVsj8",
  "key1": "4R6xaV72Wj5kQcPeDdtwU1A81UwgscxzkT4PhvYJKkQUP28dwiWP9GbatSuVznxPzp1S973Bwjb6wmXxA6NSkKne",
  "key2": "5p3wU5BHiqWPmV61puFBuXFBedTcdeMcaE7qFTycQvazLWuQnj2EcE1C7pUz3SibQSr1dG1rWdJE6QnNYZXZ4Bnr",
  "key3": "hvo3bgxMbc2yxNkDRJupFTcJdtB7AzKmSUMizsDdkfLZEhkmT7gJxJE1pMnpTXN3Bv4qHttFW9uxk3dzfMukx4c",
  "key4": "3rXQT79mVUxKSuw2Yh186X2r5qvEtVTyJefEzM8EM6xrLXiPzduAhMHT1AzfExdR6pEKgfeyNCq7VVxTUjmv5cQf",
  "key5": "2SU8aEtPQc7p9amMtHoFbWyRfcNJS85DFpecDsFV3W3BNTmRkCYgTyvjXZGsfqStEou5E9XEd7K71g5Djcx8e1Av",
  "key6": "3PJqpokUU7rTqF9y4L6Z1K6A5tgUwW5YBKEExHQGYH5moq2C8P5WAfKdS7v6SRfSWutL3Ypu7dB2eNaqjiizvhEW",
  "key7": "2XAwMMQujPeV7HKLm5S8fB2DzeySqnq1sxGXijBQxVJcaPwLqQiisR1WjkQ2Z2yKJeZHdnN8EP1Z9u98hrwyf7gx",
  "key8": "5WJhpXCioZY8zKf6UAFyRWHwusuEvU6QMGyAoYYjVjr5nb7NLkGAD19sRWkubx8AQu1EXFZ3fiWKpKeF3DhvQHWi",
  "key9": "5eJkDGrjii5o5yXX4snLAkxc64C4eSkFapuib6cPvRFpztYabPFW21qLLvqTDaivZRky294EnbY7pwACNCUc3oYi",
  "key10": "4FBG6LG3ddhGEZyTVPLaBYoYhhrMChm4qBJtG1UHCcCeyfkBDhK2C4kQb4BKo2SMv1psErEnPic8gzyfDEhEU73o",
  "key11": "3rKXtmEJ817yYiTF9VYU6ZZ6YkzzYrnqinsXBMwQLDGHkSKnn2QA79qpPBQhg9ab9CRsRuH946wrtD6csC6ocQvp",
  "key12": "2AjqMsZdfY1zTqMnm4VF5ih6v91LWoJaV71Zr1cmUM5ZgsEnwAap4b7BdCi1HoiJDuJMFGoeFUPKdwkaLDootGTk",
  "key13": "58rujcFFXWiugQ569VNKpmicdV4vzqkEuRtuZhanndZA6yLuJfiPz9oZYnYX65TqijogTBxC66zgaeKFusKM2bWQ",
  "key14": "JHKBTg3pGqD9ErH8au9hZAtC7HY5VgA7yTpJ6URCRohLbJwtuojb3eaWEJv1WBNiDaL2YcZYo5L7yCXXYUTdUf4",
  "key15": "2xAmJXNEGFNziDn6AVWXPyx1hFHEyR9zLSnCQqBXhWfmCPNd8uwD19a7xm3xWqGNWmyzkXTMGvmGUJXip37aGiJ8",
  "key16": "4LrsF2QbSEaqcsXCMLww9X9ndjvy9KTVc3cn6BKnptU4MPcVk36uVL9GEE1c6yKopw1s3RnjZ3eKDJHqAWyhaZcJ",
  "key17": "5692QyfFdK57L8ngVoRWfqfJXSoHzSKnqqj5E9UoRzo7k8R6Wm1Drtns8YtP32mcQy144LVagq5BcZzUZBBfuir4",
  "key18": "2dvSDXxAkXx4i7jtNzzdoEQBgqmMow46r6kMKJvij485zKo8T4TNXUNNY8vaV6z6zNSAPcqKPKxnQCEC9qvcuAoU",
  "key19": "3YtNeDoKAzZ2aE7DR3GZzfhVJgPwMUdvSjgK86jvRqymkZj3USpW4wicX8FYfW2Bs7pgTGRnGUsQWW73f9tSfrVh",
  "key20": "3Bso9nNcdGWx1AhoEKEVfeXe7nZnPespy9YrxGyeGqa7rtQdS3mWex7B7KNtafMiPu6oAQPQVZa65DWTiGAVDs1Q",
  "key21": "2jw4XrBr2Vi295KVtHxRCCguEZ3ZfhuQP5MEeHCiham75NdnhEsgbPfYqytGqHtyWrVknGxuBVfbqcqHm9urnUQG",
  "key22": "2X5WHZErkwRkK4qXsVA6yiXgL3Mf5PGeuX3aEYvuzL7xyxvnG7zUR1QRdVzFqrz5rdCgvXunHvgUeGzNfVtsuKYS",
  "key23": "4CACFZxe4MVLTuW3RhbYQy7HJJucQvGfbKYuCB53kgRCo7RKLFjxeTv9kAr1FLgxvXDABtkhWzSskTegNvJ5fhLJ",
  "key24": "4prZEXuyAfybNCpCiRyS3hB221VKQKNGT1pAy8vvAuCcNNrLhWgTAexFHTqappLjH7VRVKEnHnXtVYfrkYsfMAXw",
  "key25": "63j1VCmrWCu2oG2d5pCE3WmmcSZJBcLfMbjD6pvCejz8YKGaFKdrKYW9eAJJPjcxNUHo19XqQ9hd7QztDyJd8FXu",
  "key26": "2DqZmt4rjoAXbVRBmfGNHvcNryVGeahCyKf6ucLVu7MvBCcvTuQsVEsuRGHjbaX4gBthyGdQmCgT8SmBiNhCSiHx",
  "key27": "4GSTwqhrNfydJjNmsdp7vfbFRkkbauWmzTHyKwRatJbD8uBeg8ioGRhCUx1CZNKLkuRimBtMKtPzwkTwq4WiREXH",
  "key28": "4FRn4MCKg6o2pyoY82vDuumnFpJz9gLi9K7aTrjbiiZcUEgg7uKpyqEc2xwmCdg2bceu6Y4oftvraAdAUu1fGski",
  "key29": "4Scg1cGG6EDPqJzqCi7XPnrb4LjSZzMM2JmpoKng4nBQSV6MDBADmuPnrwWVnGZX4eFRVjLkYdzjZF9pud22LSEw",
  "key30": "XVrpqvLzLizw5VJ9YrSeqsFN5anjVrHFX1yo6qTpQCRosHM1fdHCit9jeyB73wYzgr8By17zDUcRdk6C11qX842",
  "key31": "48KHZyTvmTj5igizynVWzoXtq3KJUD8wkgf4r7YfJRPLZYE3edrTjkGXoXjPizDcZHbBeZN38KYSct6Hc6oNdrcx",
  "key32": "33EFPmKxRE14iUCuCFkqw54SKYjNp84oK3pcfCwRP9S82nw17NSZZTQbCeMk7jSHoNsL9KvgGqhkmjhUpLcPES6w",
  "key33": "3vh5qgcLXpXE8NiEt84vf22tRYT39j8w1UHoB8RvqvPisk8XRppe68L9H6Yp5Fb2mFUyJx6ehxKBDh3dVVe1rnSm",
  "key34": "ywDp8ksvtNbxJav4583ujhJkroiENCNNPUzG5bmavxftae2Vb332nrh1KxfY1CJgZ5EuT9BK2m6CUbnN6U5AP1X"
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

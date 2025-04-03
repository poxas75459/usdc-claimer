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
    "2j9Yfc82U9g7PE5p9GynsiAczZHzfNFXjdq7JyVRtdxYANc3J8DbV5inwJZs8qnRx6NKAypcWovrNNeUEhX1V5VB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Hpkw3ZjGDXnomjkWhX9NuYV3NHx87TN28xk5HyaeckcLvaSzLPyGt9VXHjQp4g8qYcs31yoLro7cDbaizLqBoU",
  "key1": "4PW2MRHdnc2SjaaB9LVXQbbzw66EvxtdpZ6mGXwyF4isUQ9Z8fWPqSKfNHUykRB8YAiSVohX5xzCR6rUK757z2nd",
  "key2": "5jjZFaKDpeNUX1rtN8PQFFPnNtNwrfGBaXBZJz1DcpK5G3Luwt31cVuquD97whcPZHjPJvixkWworee6FvTuM3Ka",
  "key3": "46jhE83mxUWL5xTjxzfbHgKPvXiLJLkZGmK4ppdCt37edLDY7hzEWNNRknbgvfdqHnMh4Z99FLsaeQVnhncJhreD",
  "key4": "2WKYiMEUQPsiCYDrPrRjPvmvtvArXa8kfsJ1trcPkQrRwJSdbSJnJShKmRKXCRHRqXBG7Eq2J1BTq92SxXPfRD6p",
  "key5": "3LuCLLGAJVVRsXkb4nMqXxptNh1XWceDGp9YmekL6BDuSn53BRStrmSCQisD4H78TBpkW5rXPoGEpa5J5fcpi7Ve",
  "key6": "2bzZSDKsKdxFGSbKtFopw4DCz5UbJ2JMPJzZ8Jmg5WehqxjNscNvswcuXg3Yn9vTaPK4yomjKDdAonRBvJM14cu3",
  "key7": "52TzCdePFj1yAbQmHoBj6vWbzXFCJa5S3U2wgiuyXwWeS1PckPt1SPeL5Kkcqu9ftU9nZ6LYrmLxU2HxbGzFoCHy",
  "key8": "dG5r7CbHmjVzgtCvML9Efq19aavRpVuw1GCiQ5YfT1GFtxD72QzWe1SsBLFm8bUdtTyFxyyyGtb9xWYrYUUeCjL",
  "key9": "2xibLBkfQ3dgShKbUzn7TRnpQCiCYtFGzBbz4kFVtX3gxhmS4oKdKQgkbRmPvHFFLGZ4YxwS3GRPEAKRvyERUc4a",
  "key10": "3WavgvjuS1Hz4yfZs2iQfugHN65ah3HpxJC6QZjrAGNc4YpBHUowfnBMR8uJidkn7cAiJPsyvdHecPQQGkn94FZh",
  "key11": "67iLG3CN3yfVXQXMFcEN9sV7zwM2D5Cu7bSUHJzDinqaE7oankFMHt7BwmjH8QoAp9XSHLhV9mPH9jLqdJG8YGxb",
  "key12": "XsXvQX4vae1NUk2Ei5TTuPxY4ychJpp8pH5v9gzJZhDxf48Hntw6DzKnxzUCVvGb57FjfTZYCJFVAfpy2oMneBE",
  "key13": "2Gs3C8a6j3BzgXLZ6jXNC9MgoTM9nqiiDgph64yLVYn2f8vvvVjoNucsbDWem1odY73Pf5YQb4az6S6qMEwRZc4T",
  "key14": "291GSNxjaxGaSH8NqytG6X2akKAStnD7EohcSBsC7MZSvDR1FkoRZ9sNK8vqrNWSvETng5FKJwAjbT4ftq2EyyHg",
  "key15": "3hFgQXkFU1jacsTN8PugqEo9B1Ndt5LM76XgwQwdS5AvDrqMpmMQ6C5r4rek7JskSDMzQBdeceXuzMtKuapo1nUH",
  "key16": "5br9oUdprQUj4dKxZkhXwyZ3R3zgNU7cAXovvpHxkHzVtS4ug7ZEj9KTGiVPxfVwgZReaQk2pZ1tYKE5wJgyMdgB",
  "key17": "wD9etaQwFY7UAvAoypzX7rLqZs4mAqTXuppdE43PBwzit8tBykg7wPrMYht3iGFL7jVcB5iawbp7LwGrHMtJL2R",
  "key18": "xuCBBjRq5HWY5X5yY6fhj8rAKNFh2u4iRxu25oREq7W3VWqZvo78FcsriFBsvBPNyH379FCDJXYeRqH4sXvZcfM",
  "key19": "5a3L8Abqqw3M6WVvBUWsUv16Kb71Brq7EBjR6kB8dK1c7eq6poKY9Jk5vLwpeH7kdmU3es6FC9MTS5tbkHpo9KLG",
  "key20": "4u1egMv9kigNDg45qnkdbpwNwZaK2whfDRZdyJE99DdCbnc9kueX7wcSWirMXHRUb4UuZCq259qh728nEyQpVVE9",
  "key21": "3B4kmAw5p3f2xojxZgr6p82efhEYyb7nLb2SoLrMiYu4LCDiwak7VPk4PLgAtZ3xF2ykeK1RzQQKytREscHHGUTQ",
  "key22": "38Kms7xFULGKSfQ28CqzFdgwgnxc86x6raumaycKxhdcxSCkbG8LRLGRsbCVbJdwzR7ZFAQLfbEzN3HsVWf6n4w7",
  "key23": "rqFam8ruBDsCmPYfVcEz2o4M9qexyyCGWBQA9Rqs4jRwNVcRkfrftFsm5ucEs5CitbdHn1ww1AqDRM3rAUX2PJB",
  "key24": "4nwv5czPYVHowdxZVrj12uSjnPPjbgR1JMpjY6oiofCmRMV11z7VyE3QDdbNraMKvv7iz45cYU8KZqjR8iTC8Dra",
  "key25": "2DXuSCVNhDAzAWnd1QPHTgxFMhawxyUZa8iVRDZRZG9K2B4WQVBHfWLVLKNGmisy7ubF94rjAdRyJJ34tNXEqwx9",
  "key26": "66SgAafjShpaBJEA8EkEe6vgqEAYn2snKsgVBu9e6NboRCjGXhdcbb6VFLJVpVHahJreFFSSbaUccWEAJNx9R7uL",
  "key27": "49rB1HE4YH5wguAdpHSSabWimpuH22cuas4mniWBAu12bCrfBTXNStqTANGeyy4AkVv2eGLfwUUZc9GUqoM5uA2R"
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

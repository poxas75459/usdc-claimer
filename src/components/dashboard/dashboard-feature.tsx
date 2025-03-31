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
    "9h3AgHkkys2A5XQDu1sQSdrAV65gTZ4czhTBJEomWwA97Lyx5aawuSBASQ2NqxBp8D3PLpPBqSn3Yqy3rY7jPzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QYQqDHaDx9EW3vjwfz99mBVPopeERcbekU1XkSLWJ9FgvARu6UHNnDe4jHSyABgpXkdbtuvmwcDLZb4dNL9AHvX",
  "key1": "4ccs1mnGNVidrJsuTAWQ1CWXj9zby5v1F9pDqZ1cXKAEc5UfXhKLaDBPvZjUqggV2rJnHPKmmp8dnxjamzCC1boY",
  "key2": "4cfBksXJcWDe93Xn1BxMhfMnQToKprNutWiysfapgDDTNV2XUPDbGzQoZazNdpcfc8qcSUnsy9GQuQmzJfBNHWPb",
  "key3": "51Pi8TDJphAc6NNtaMkC63iFxudEGgXfXWZ3TFTvuQPo9ue6wzVWavcVYPMDXZu2DHszBPhEUtkiZKj33nsazAfE",
  "key4": "FDDAAeRGf5UPnPs1VD6YMzUExaXQN8YQe5SqZFZSQGapURDDpTdkeFeL2ofJG65AqSzb5fQit7PvwsFKu6fiLzB",
  "key5": "2dLV5gx2J8TqsjvfmKb9JRNL5GwzP87SWAQKtwVTvr9GeyfRQBTZPMjyaYu8F2Hyhk7X1CvJbEacz3VYPDyJQALG",
  "key6": "5CFhUdynKCytaXXVewNoprDuEChdUShDZzMvYJ1vYWwmCC92JbB2sxbuvJTeNbB5m2Zr6PeS92rxG43BsrvaQKAw",
  "key7": "A1ZnYYYmZW4fn1RQuiPqWRp3M9dQEpQvSeTJeCndBYSyc5RZFmgbFYZCA8XWUpq3gUMyn8ZAdt9AVmNMUzvCDKT",
  "key8": "2LHye5QmM5imwSzZAYHT2N7UpKVXuQMV31dQdY1BiHtn7dSLti6fwqubyptRX41mh2hBJsPU6jBKXTbcSgyWWxoL",
  "key9": "2t3WRJWz482EesPoED5yBZGK5f3eSANS3RMAKMowyrtAJXoT3YFCKLQLFdGFFJhXRLqmN3eKwiMsphw9zsjyvY84",
  "key10": "tjyqW1riDoqeud28Zjhvq855xws7vyYwqfiZi3TKRAmz6rSHpSbt1pJLWzCzQpF5tpwzZ9RfyPmp5v9D7qx2bgY",
  "key11": "2CV6QPbY65ztd3wCE5JQfz3uqsfVMRUedFodQ5nkAeSsrmEWdMyN2koEy6wruM8ncmNjW29ah8W9LE4JAPV5Ghmx",
  "key12": "3SHGWgpJoapLkE5CrfEtx8MqTYTgyeNW19dreH3wUyBP8qmUQDhGQdttBZzLsDQtiKNuSM4YURMLCVrWnq3sqqeT",
  "key13": "4jTHda6d2ENX4p2owVs4dSHtLQWaKLJbXXFHMet2ai9NrUW4QYJdhzwcpfrzgrttFUjfNYis9s8bsiNwFGkqN9jB",
  "key14": "3D8FS3ngZ3HJsSUBwmyaRfkDJmUQvAKNFnrEHqV8jJhE1RBdRnjKd4GnNRu8AiELXXq3Lq1tiF3hobjtGyzz21Re",
  "key15": "3cCxpmHvy6rijPW8aqk6HvSPv1VhGyeTnbvrM5XDpEh4v4Cc9XL8qHZkSo7t6o7zA6RbGCjXuQv6Q47iQm9Frd44",
  "key16": "3o6jWXByoLuQdYigGNxS6AKTqgLptyGuo4NCENR8cwvYUUQ5s6LUDseA3udYQmsfzXA8aAPoNK5ov3wXZTiSC5aA",
  "key17": "2UNKCoEbosapMedzx1KnF576y26jDf8GVrq6Jjh3iiwWgjNKoWNYEWYcDZiH1yuGBU15zvwGjJ1JLKeNWgMnKfhY",
  "key18": "2pr9FyBGTeyAFGNxnN2EY8oJsej1US9ojq4HMsJKYcRgv7z9WCpaB7e7msMwhzY3LuUFJrk9YtZjhKDiSf83fWR2",
  "key19": "52qk6fjAKAzsCr5UqJRLAE9JahuCQqKgijruxqY4xwjnvsvaCyCD99N5W42524UYHDpfid4Qhdsq4NayjoU37WT9",
  "key20": "31qA9My61jBTuhW14jDuKGm6YcPfv4hGh1KtFQrqd5hRbibWfsLkpREWsVLtC29TrRnui9PKKEtJi1anAXp49RAv",
  "key21": "5XVTMD82i6oR9MaKr9vugDt71g6RoAN4R4crT75PGc9UQ6sz3QPnas5QmE3yijRM5cjVMHRGLxpnKgog48XFpXpK",
  "key22": "5kWKJoBFwAUJS3Z76mpTx6vqk4Sz6BffeHY7PbJoKk6Gbg5XhLUpp4vMFpvrBks4FzMBgEEVz87xbbmVM75x72dE",
  "key23": "trVpn6td9eyuw3HhWQvJiyZGjptF6YFTKAX72rFuUbQVAzHv4UGoZoYsNMkAvybHmcj2XzsPhttrshLREKrhu5r",
  "key24": "2qN6j7wT4VRmNU5to5wfPuxg3AosvZB38s3xRrHF7pmXPwwgBnqgS8XcH1QM7FF7phSNxzQu35hna36TKHUMNNrW",
  "key25": "4XBYf9q7GkHUti8DWNZEaHU3UvhaFmxn1KGjWF7Fqisiat1jgDMUtuvAyyCForRhoLCU1qYQYxfZZ6oiXA4vzAJJ",
  "key26": "2C1pJcYsatGByTpmGjcbWcUpwQWJ3x4g6NvArZK2drT9xfDWAAidDGAFQ2iY6bpR6fE5KXvAiKHAXXWR4Yp2NRes",
  "key27": "5VRjsCccFgaWgbpDzGiEM8UYkDxXaTVANiouuWrQAgdjjnna5ve6j2rTwGttxb9LmmnH1hSbv2BxKaEpYHJgZYaQ",
  "key28": "5VjSaAVQG56BDiCxtpQ38cRdapaBpeuWy3gqckq6Ytk7qVJQ9b3krkVrq87WZssFKo4Xj44YZuRs8wafefkUetBD",
  "key29": "2EKPQBYhrjLy2k2uAacL9ZUocMuJ2sqgA5z4xCfevxoxB7EijGEnxV2qBASLmA1mRJ7w2mv5ZERrfE25sts1dqWn",
  "key30": "5yzGjWsznjuypWbAMwVFuxZZPAZwx4EHf1oRVBjVgwMAcz5wsGWEwQ2W6Tj5Jx6S2woSKLr8f8s2M6osBAm3doe4",
  "key31": "sDGBJBYg6Jw1hM3Uxtc6EL3SRTANH6yHQM3N7UWaonzj6t1Xixa4Q6md2Ayx6TB6TwpjxfYvzE8ri8AkUf44z8W",
  "key32": "2LVZnedQrJR6H6PkdEsHRx3tPSBRCka8V1PQtwvM5ZJnLsbUkdoCc1Ph5xncThqAEvoU85ukA3rdbiJnJow8S36o",
  "key33": "55V6GtSmtyQ9uKKBP2qXzKrJ6WD7W73v9PbZQRbTnBhvXGXB7Kr2GHnv4t48t9NchARMgmmUzUCcmaPBB71bfGBw"
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

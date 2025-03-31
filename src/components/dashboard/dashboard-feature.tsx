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
    "MgEM6DKzARCYvzvF5eettjBdZDepd8YBpjUBDTCcEJ4oV6fE8uq4rnQRDaiCiJp276teMdoNXdArBHPgFcJgwzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oDjHdxAvDx8P8Mt8xeRTnQ3mB11S6m7UWxj1UPGD1KjhiiELWyfF23xV151dDCU9ZBcHVTLZnoJ9rTomj7C1CzH",
  "key1": "wSHvtPEYs8NQRkKjBZtAFnMjwL3Z6oMHQwR4W5ioasXE7T8T3fcUL2xBXhQuNGUe4cMHQmEt4W4Y5TyVi2ZUdeJ",
  "key2": "5rfxCnQN6MhwZuHtZNmGF6yf4EuzYicPTmCKrykLWQwba377NS7HrNjSfRW546ChpnZwYKL49GM2cTjKxHdUCq1n",
  "key3": "mztbHxbXpjwajyE1huTWNA2j2ZEPk931S6K4z2rMwNDhbHnaZ6Sx29KeM5M914p3oTkRbACAZkCkU3pM5WxKzGK",
  "key4": "4fbRGt4CSc1u9H7AZvTafDT87iDYuNp9XReQ1m6pN5YVBJ8vG11d3DHrXx4cwheoz3oRCBi49VVQdgNnYAjR4VRe",
  "key5": "5CLqSkAwWesq9P5vVNvEC8V3rvQ8XqKvERCnTPWz3puC2mbYyXXq68qvJzaAEBy2maZj9dtXrMe7jaQDnExY4ydQ",
  "key6": "XMMPaKa74dSit53fupeWXQt3mv5zhFtsaSWgDufyCRDzztAAkKVKpjvQALwyb5quoP2tg8u6oDPrZ3qCMTJfrxN",
  "key7": "243yrfx7z38FFZSWLchVn69f5vDjywgDkkQQnQ1MAZyghphanjD6j5d3WtagkbjvFBPo7UpNDTCJ8nuMgVM9ikoZ",
  "key8": "27hTJQRqpLfEY1j74Ze74QdvjJR6V2rMzgkcKopoPYJoGxNUnt3bFfYg5rgQyDbi3KKL8ZW6MUE8dpHqtzrxMJu6",
  "key9": "2iXdbAPidavhNve7psKcQkhD5A58eur8vD93cp1JB31UggkmvKntW2Jzod3Zgn8nPehi8nu5EExuV1C5USmD2XJg",
  "key10": "2Bcr1v8xKdspFqgYv4njbaS8o2Gk97nXTZrBMpxZeuQft53YmMF6woE3zNHqdFe7EuxSw56R62odVWkdwffPqogR",
  "key11": "TGsJovPyq7s5YUD3RvhYkYKDym8uC3F3Nfk7UEDsXCR1WjRCrCq35D3R5yokJrcGkL37JuNkGoiZGTDnxHmYb9K",
  "key12": "QNPfgQ8Eb5i26Z7fU5ySu3RaLiFemthvaY561mVeRKsarpidxgFz6DEpKC2CJ9auiDXgyTyZ1fT1LXFSe6B9Xsx",
  "key13": "4TGtsGsgojTxQ3DyUoL8VH6aueS5R8Xwu8aVGMzAQA1qFjePnHDkcjVr36wGKnYGEqnFPmqnZ8fpWBSaUvuzyQmY",
  "key14": "jeVcNjz1LfFdP2xyDzoRVMB418WyoqRb6CLkTNDD6P3Nwhu1J1KudohghU4nfxaUpteyGrkLu1FjyWpWk1soaoX",
  "key15": "5mE1fc2h9AY3fFiDF57KrLvQLs8gpeLjah73MzhzyzW2rP2k5Eua2jLR5d8gWceQY4mtKz7deQaHKgx3ufuqNuMv",
  "key16": "53gv6MQ6kQ3j7Cr2YZGUAS7Qaf8yJo6GiLwVsy2LZvoKZoosKDUew6eZ2UjdotbEP9XdHRSQmTnoJboHG8tmXd9Y",
  "key17": "3cniFKS3Korv9TYy5QTCyLrqAK9NrCdbmJjYuhW7ALknvu6bB81GtvD76KfeWuKiutrRmLv47xH5yVe5uE8F3obd",
  "key18": "3bqksdERyRM5nAvPoFWBHrhxQTXqiD9rkCCaRa22yXYpZB6X7RRA3C8PLw2S1PgxMpfqJaTkHQ6qZsfuSJCXLyVx",
  "key19": "4pv65ANVFwYAEPsgAotALDNHMBdktkT3tgs4WfDW7Tn5kh95B57nxXYLzFb9MbYT5JMa4qXuBLku3UW2sVmsXrac",
  "key20": "2fzEyrJT9G6twtGKRaDwwvxeJWmacG9QXWWe99q7hJaFtnYEiT4hnueN8dun1nhRFo8xAdETWf3Dr7ehDaCef6oK",
  "key21": "4D85hRtaSxtcQpYXa7XGLeo3X5YcTva9ER5iUo5pHQz2sVUavkAUakFLcUijw1YZYDupJcbEX5w57jNh6wJGV9ej",
  "key22": "3d71r6zADWfmwYiFtv3ic4xnSQoXeRX19NnSifsXQLyrmqoZ25SdExdAMAx8Lkgdf3ohgfTicDkhMQQdgpgt4me5",
  "key23": "4mfoSfr95sXepjC8pGuEcN9FiNAE2QoqJstSy6tHYs3V7BMDAeQBdhr8Qj18HHniDgU5Ka4jrgCAyzGbyNnM8xkM",
  "key24": "2Tn7cPViUrLxANaJSVmfCN4DDLSAFkpP9xbw9bTdsniPkKAqmbuxC8iLe3CHrubBnZHg4rMY3R6oXi7STHrN78Fn"
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

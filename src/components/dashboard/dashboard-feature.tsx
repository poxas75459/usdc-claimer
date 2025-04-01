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
    "4eCNhLwUs2cDLkhuRare9JspCRMN7bz4BMsH7G4gY5f4BSst6rx4kf6YjrPuNNMqBijbu9macgzwQrJup5Fp57Vp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBS8RJNoA5BLFnDjjS2tjNjDJJq9TdDQs7fycdHAxEQGa6ZPDJNugwSbtaYZQ7HEKVUCWZm5D5kfUXerzchn9Cs",
  "key1": "yYEmHYJh7rLtiYPVvYTQbmukHydnzxeznm4BqpgXP47LC6xRx91BXRsqcHjCjn6y3xSDRKGU1arWUkTgSm9n4UB",
  "key2": "4JN3QisXWEeaXtUhdH241cYWJe5gZyqnKX67p7fmu7JrpCZ5A7WU1m4KxzoTv985JsGGMbKwWHbdh2jcVbvKSMZk",
  "key3": "5bP6WjNkeANuHnc9W3yjuAbNJGHE1GqD7jP2b9qu2eQ5wiEgMH4QW4PPsVzQs5EugRYbiEDRXFyhYkFnRca3K5fg",
  "key4": "4pS4rZXPWYewXuU7gaEAyBvxmQToEwDQWeDLNLnEthLytUgj77jFuAyfKajwkDR63zUUw2P5zqJEdAV4soKcUcgE",
  "key5": "39eo2Uyg67o2QDGg7EGPM93GBBtmQP4z1SYfdEnWJ5TyteoEsw2eV7HXow7X3yabv8hJz31HNRnSjZzyGxyCHLWU",
  "key6": "4tdxYHmCEMx7ox5GkNr5ZJFeYja1PaqNHU91QQEjUiPhAx6wcaG7aDM797R2Gtvzso23tKnbpEPddkxNX9YyVLyP",
  "key7": "bAPHcUYnzuUVuBEFgp4SW4uqFPZupKFaWZqyWwtaJHUKwkFARAAmRn6sWFKjQEeFTTb4kvtDoWn88h1xYNSNKXm",
  "key8": "5kcFyvY9qdmsoaAdmUAquaLdrbgvqVNmjtBGj6cA1vGVZKvxnH4VEhqqi12xPkdfv4AtHJdH4rj45zPPt9TMns3K",
  "key9": "YZ3yuzdtKhPzWWhNevwXQiSNzZdt5G3mVA9dFDmsTe1LNyE3d8LNNGDca2STzQCT7vb8cLGu9enaSL122Ju5yEB",
  "key10": "2rd8x5N1qhRgF3B1FtErZ3H7EGbNZjPu1sQ1r3jVWPuPgBcEQVLmxGjeQz9sYUqKgjB4LBN5ZAQhKDH3HfqtoyEg",
  "key11": "5oPQR3u2Co9qaZ2mtYzgZv51FAnS1XNq8LUF4MSDJQQwu3vjn3QAS9Trpqo4v7u9ERNZ3uqwFu2cEta37f83itoJ",
  "key12": "3UFDyRTwtbbhbQCvKEMyvNzYyR3WVgGJpB1gUd3qjWiqMmDJWgTNWTLJbEP5rsTkAPbWVZ7VfQBJiLqw98bC6dZX",
  "key13": "3Yfnm6AScEY5nVBrTWDiHA9SgPMgvhfNA3YuPLYBKDxJGjwbeCvVLFDcVyL8PmwAcnERrBdcrDKEebjbVCUgB1mb",
  "key14": "3taND4qUqWjrP4bXNZpgvY9soCiuYXyQAfi2vnZG5oqZBvsrbYcaAXP5QFqsfGZaSpN238SppNxGqJjz16cA63oh",
  "key15": "2Z7FhnGSQJKFwYM7SoRbgb9pEpXy4NdhHAK3fi81SigqVNTAEGwPvpdjjx2N6GUcsZr55xs88zeQyqBssoMNRtFn",
  "key16": "4yeTwMWTcp4jHFrxVg2ea3wbog5eaFAkRoFKxF83erQVjhwdETej47jphM1gebsNu9YdB8SrBKsCcqHAxK8CfXLM",
  "key17": "6tXRD9Mz14KfqgnujUKS9YDKiYrG8xvnkae276T4HHUhc9bcMZVu7fzYNony4W1gLRdz6dE9Fme1gdkxnHpQXfC",
  "key18": "5aGFPyGkFGqsg17Jenm5No25d6uspwKBdNZCfdEuuha5MzDTvWFAPFLprhuppgSKwhPsgJhoCd2Y5ThFrhaWHH1q",
  "key19": "8NsmzuTdcgXyiUSgBZZY2EpyxSphvY2JwcQf5bqwZQxWkaK9KTDugfeTgr79D158Bh72gQspzt2QZLVrRtRptSX",
  "key20": "3imXnaM2zjBum7wFAkGhmaH9yynrmS1kAibvhcFWESaBAG9DEzzGdzy4YU3tHb4upGxqjZkBgdTVEmUJpHvCitmK",
  "key21": "3avYUboccnMmpzwfmA8Mj7fUpvXCfuAaACLwhaUjzLVEjH2dd1fwx8T3Vt8vjRWTjZqbrMHUCuCfs1Xgv76vsykX",
  "key22": "4kXKib4vne5wDDHBqS2zygP2r9MzUgv4Zga6u8gZYCTnGTzD3u71hA5JrHLaXVcKrEZYyRuEmpCp1R7YwD9v9PDU",
  "key23": "5bdZVMgF8ahHMDDwoExKzpQz2AQGmCxEv2SG4uzo6CB5W4pjPZjsZtvufHVpKemJP7ZGxoHf9HPazSuCwJgfndFY",
  "key24": "3FBPZMz5AVuJ9yrRSBD38LiK8C8R2ghaqrGVXDY6XBq2SAXjkRyhYyWkKnWtz79gLUjmjUahXRa9CA3fiir6EXzr",
  "key25": "22tJS5wrSmb9VmXVtLnEoVZ7eymNtEFa4dakUzx2ixVBhtJXqxetEi9bBJ9dZGkovUEh4LhdY1Koxh9Yn5iH92fR",
  "key26": "5Ve2aJQ3QJze6jXWUtJ8YxEuM4GijX9iDvVoGpSWfzVaSXdxd54PNzKg9y2bsJNd4QVwhdRDvDALV6QHcxJyYMG8",
  "key27": "3CiQomg6yLJUhBaroEgFe3sn8VHsFRXcTu4QDvCGepfR9VW8xowQCQ3NgEX25e8GVBKE16AfRvqi2dYZe8NJccf6"
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

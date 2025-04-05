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
    "5m7mawTRxRnCHzyEJvKSduSKVvxxS2QSXX72jwGNwPcjgk64woLqJ3RkGDgpYADCxL7Kg14DHTYzNHYn1vpAAuZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NXXQP4GZegmfHowuCYisR8qqKFe7chohDtf5DMgjG5kLa3JwFyAgJZXVuvVhjj2JqMxXX45LMTuF6kmMt71XSUC",
  "key1": "2S3ZQAXUxKVaqMv5o6BNnLVvyQLBVhRUHXq6x88wYsWXx5iyG22RYVJ8ggwvXKPQHunJmkLphWTZyTE67a6WHccG",
  "key2": "5TdVWi4pvsyfjkfqxc7qTHxQ1KHZAJsYSLv1kyZ25SvzmSmDb4XE3UMqwWMhpfwKmYKCcqNBb8WV65XrB7kyKNNF",
  "key3": "2opXdRqzJcQiUNW6wJKTwirYwwUjp6TibdJ69m1eGXLUa5DERBaCdPsr4LHCqdnYWPCsJeFt8wzmCtKQ4uU5mLdw",
  "key4": "4kR21nXKj9svtcwXvA1FfBQjBuuSM5UmWyVH136TdPwnoMXs8oQn8gUn6hQNAKvcoCjx2SdHsf4D9DH1i38XotAi",
  "key5": "m9yjADjEupgsXJeaMC9RtybCps9g2ZSQv6JTqL38E7dajuvabv1VHPncU7FmNkYKWxB6Cc76mo1ZtjWbgbMHtR5",
  "key6": "xW4WEYzQPeEr4L9shjgusVQbU15sfZSi5Bx1y5nz1kRYq9GTRTJYYT3qxVVD1CqkfAPGYAZpy2bQAjr8hQWKnRV",
  "key7": "32QsE9tHohgbAzGu7FYJd3x9r2ZebWkiA47WUs6YWfJhqriGnn1cDimThvqGuY93XjadJtxwfGDgSveB8qzrQU4e",
  "key8": "cUcfjmWaFCUgorNLmWMRVGvkNRPByFQ9Pczv6Ucz8Fd4p84Rpu1tWLeirwcaaXxfA9aLG4ya6qaLa2KgqavUL7o",
  "key9": "5MLyrRNEAnayKeeKzN8ekxjyW9DCJ9hihL4wLqNQbbtV4o9FAySQZx1EAaU3YDND8oKa2W3oHm1VogzVKQ46SAhx",
  "key10": "5myM7PUfwuzhCcmK82pz3H7E8BntCYDLuJsEvBBFnNyQARrJ8x4xwpY2h7kUYUEfFuGJNAFCeUbApCGi4tB3TryB",
  "key11": "5YkXuN9Fmdf12cYDCRg6YWYjpNcUN5ZoHaTQZtsGuQ1UpqvoagNEeYTs2cetwi2jBwgkPdu57UH7xkFdQQNPgS37",
  "key12": "36QNzvetVZZQokV2JPFsF4ZcFA7nJFtjGn465xxPtF38UNmwA3QpfXnkrUhZ8j4mTDgng2dwsPhUYRR2xAYGaXCB",
  "key13": "5CqgftXofnVsJMcyzGneQbjWaN3vZhNuR5Y6yoSTgSXFcFjqqTwPrJnoXhP3QGn8eFuEQHGYAUhREJbYaScNGZ6s",
  "key14": "5Qt9dZ92YZs4Ps2aMKoJkpcvWRSdZ9229yt4aGV4YBnDyTSzEJPVcugHM3juSucoPa9zS4KT95erTCLeDG4wwAbN",
  "key15": "3AHkzhxRWVzZ8VZF46MtJpHy69ohinsky7U7PE5kvdcNeG5Z6A3wEAZuTbj9dfRtoXqReiSc9Mx6hGg6Ze1D1pDa",
  "key16": "Lg4ax6T5d67ETjaNo5ZZKYgwQw2GcUr5BDyG1RSFz5NdPfDUvBPvF8srNabfHfvFmKWFzt4KKii3vQV7gdPAPJL",
  "key17": "3wo4BhRoUGhNxhiUZDMqPCnZ1eFZMuS2JX3xgwYLPEwuuXcuixdL4AXmKx74srQq58JYsYSZgVCHNbn3MHUyL8x2",
  "key18": "5dgSfayjndbibT9NJAduyeYm3Wg9UdvXxciwSyW2z5heY4nJjzwiH9TPjb2CZa7bwokZo3Pnj8w9u4LjV8awqbDn",
  "key19": "2xopkaZ6GNkVQcXAxoTVb7Ggv1eLnhvUR9aNYwgQcLisELAh7aXYYsPH12wauNsKegcTvLbFGV4B6haKuHdtzeCG",
  "key20": "4F3Xh8sYtPMMqPg8f4SZM7xesxyG3UtAcDJwmqQkEJimtKku8epG465hFgU85sSwqqgCnURYoTY2W1dJce2dY4MA",
  "key21": "5GBMnssBX9sWfajtU6hq45W9Dw3x9Ap4qUpAEBYefk5TSq72PNmzKqLfqBn85JfJUzHFYjEyvQvrRUL1GRXeRVDZ",
  "key22": "4Yp9uLuoWhAXXMHzAwuJj7ZNQmAqnTGZ84vJw2opHN3sLcrYDCUBAwxuUcdx9CPmHzRoGauEryYxq4bSnTGARZMD",
  "key23": "3YPDZ9fF18hrfvfbgGocYDkfeDFKfSahvDqySGXJtSoLrfbYjGxsS6eGRhHp2copvDrPS1cCVmBUzrdBgk19RhTq",
  "key24": "5hH4zMkPEsrJrGFQ5ifakzbv4VrMrwKLnFVPEetAdFyaq3ZMTUt7pMUA1m5SR2XHXcG3RNhFxX1aLTHDr4DseYUa",
  "key25": "5HREdpbZrojpME13j53xJYm8ctXhpYiuwDxgEgsB6v85Vy7pvN7oGbVqXy6J4NhqLP9Ejon8MwVzrbfP7Xv2T2Er"
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

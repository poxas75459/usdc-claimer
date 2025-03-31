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
    "3rratT5CdjYLhyQvqSA8ivRnEiELyzcZ7UQCHD6bCuWKLA8dRUAX2EVnoDWgMuVdFjasxaCDGY3jCQF5m4rzEfsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PwqVQesu7mrbghTPEyNgmJ33zvQrXDF5E4YaxrbCwYQDtZnnDBbpbmAgf7i8RpXhFBdd7PSpEx4TQPx3nR2wA2G",
  "key1": "39W8n4rxTvUfuNHmx7xsLcTprodo7mdUAFHKbyLWBEHiFVQN4h7mevSwSAsLuCpdyTrvUbcUU48RXSzZwd9AMck2",
  "key2": "3G7QjtKU3zpfe1ukkHsWvhq1mWT8iP2wYa64Kkf4CWN4s4RicyFJCESxLq1KFHmFKr2sfCaCEY88X3Qk7yHyXotZ",
  "key3": "2aZmVV6RnSjSPCVfuJ8otABDSkn2V6fLMYhpbT9rh6mCjWhj6jw4Qpq8TH68uRWS5a9EgMmxKNSSWgG3mvZx3ius",
  "key4": "wE3bGFG1rWdkJDNp1P7C2hZiKE4X5BLTytivnz3Vm1anoK2qaf1o7mhFm54xWxypFsCkYWEWS16JvHWu5igV1Hi",
  "key5": "5fFjcDZbbkTRAJf2kDfCjRyffT9z3QYstzcjZ44PPmdygq5QzXvhf6yCFr94LMyFHGoQake36vRhs4Ww8chbHPXd",
  "key6": "4s641xnNfbi3uUZN3btDnDcdCAYK44pHQugPJzfdoQCKqmsAAaZXPwHBSLi9fesHjeQMm5P2fjNoBfwbGbwYVpys",
  "key7": "LpD8ohtX8Lxv9WJtHM7MEggfsT5gBBsW7jk59CqGdFqvHwq5tWvhpWdjTMxzRWHnuUtWVRByfgRGyJRBP1hbizE",
  "key8": "55KTU7o355Kq4yNGy1cWZt6dN5xjYgnToNLCYntLMnDHJYatdrndSFVBftGGHbnS8Bzjs8K998hKSxkWJmgKdVCQ",
  "key9": "4KgXaqgGU3TmyLict78aJ7318uxuQ9QdqNs2UqxAHToGhDzagYMq6JqJh1QLEXmvEdqCrwHc5uTfWU84QN33N95Z",
  "key10": "2G7ZwacK9LweD377RR7VUARxiy2mZhB4tZSY9PswQw6sMxamFyknL1XQyvTkpQBS97UL9GmY2UQFTtGuLzSrNhvZ",
  "key11": "5MvFL6rxa8X3qdyQkRzKTxpCKaEUfvzhyK8ayn15LiumZ7UWkfN7zFt3hpC7ccVnmmZnbScAgCh2cZMKjCBKWUpi",
  "key12": "2Uq3xpKm3vykk2Rz2Ff2qUnNmvoSwLA297Nw6Yu3JfDPfY26ASivpWk1my9iFfu3fs4FqyMiSKe5sun97JFYmaac",
  "key13": "3d5wXnYE5ZDkwwSrzq5wxWaaoR9DtVyQC4vzoNjo7YLkZjKdYC2JZ7Lt4Sn7T6GDoY534oC3AmjJcXbeaC8H3BbD",
  "key14": "jcbYftCNGCbsc4hDEk9kWqWDTyKvHKXEEydoCPWUDsm6oSk7YHC8hKWuLfEmZEr3q16S3AyJUHFh6i9nVpXMtHn",
  "key15": "3r8Jis9a2fctzN3AHEiw16e2E1VCm6vPUz2tgMmkggpCwy2gHTqjQ889iyTGrjutTogHNfrkZvWqh79paY71wfum",
  "key16": "4Hqq2rkgSYZPus22rK9RwVWnGpngR8xC6qe91eNThsLvB6bNJUZ28B2ZPV5HPKiFPgk54LPU3cpaxDp3xoK1VohV",
  "key17": "48TykK39gmFcynHbso7t4JGLafjth574Z1XbhHzasCv3aGLpiht4unpeAhcL3TGKfYRK381gW7P9JM4AXRfrGMGz",
  "key18": "3Dh6vdbqyNfrxn1GHFqLDUe12s7SiLbSqQ1sTi6KArCxcpAFpCvk8zxwSEXxCubVpU8tRAaZtksnAnWcN3mTt6fm",
  "key19": "tT3MvfXXrHtg51hEBm55kwkATcWq1H1oCE2p3XUwFgHA4nwFVdcpzfMxrs1CWPHgoBnfYJN57ZQwtoCdiQ2o5WZ",
  "key20": "JNBHxUUG7A8PFeHnLEGsy22W33qtf6biynAGuhk1pNDscDmZ3MzXmgvVHwXt9GQMmAYLN6YDcS77yjKLFEoXPJd",
  "key21": "4gqhgsYGgAtQ7a29pDZmPS77Sopcrfqm6GJgAohpACDhf3fB4FXhmBU5wng88du9Yp7c3xvRJnvrAc8EEx5HASai",
  "key22": "3jRiM13AMhGXgQs2rd32BNzgo5Gr1wRgWxSAjAamespAw8YZz4H7Va9LXBhT6A3DH2bGyQ1TeBXsZN8HMDGNw8ma",
  "key23": "53ruiLCKfgASjMBJQTekvUXP2ej2eZpbePd4qoQWGpWGHzXk2idvgyoLbAXfjbZ2EmwEhjoYUyiEhQeH3XP4ceWk",
  "key24": "YgixBj2aumwow4Z6mpm2nmz6CPi8dtpRKtxdLfFvfdkznKk96bEGrWCB4p5pDgaJLj73BK5SvigR2op9MV1ipQf",
  "key25": "4iP5b16o2B6EQkSt5r1dNw7UM2CQ6Ryop5kdEk1uDTfKdEpnSUd4xygTCE68QVp1Mf68GHLPYsMp99ARmiCAXasQ",
  "key26": "3Jo34YtmFBkNSqJ8hqDLHH8LY5CE6LT2vYZVHp1wVk8S8RL7AqKPij3wxEJdxhRFQHBBjKdRh42QLs9BE6ZjLGiC",
  "key27": "4RAA25qDoybxJwoJn5Ene2iwTFNh84JkiaMoNTFgUFbKQt4pZBmFpvjFmEGkoa7HgKAHTrdet93XAH7E2gd4FFMa",
  "key28": "4U2gpEJG7kYjHH4tEWfvQSdv1cTJ5dDrxQ4LrX4FRADJ1MnLJc2Jm4UwvUce4vH5MdxFzfoFD3FAPazTW2q4dBY5",
  "key29": "41QYENdkXCJwJuwfXfMXsVyLnHRiEZb9ffcjmHkNkKSimE5ZSgsi4pZpzrLLDLsrJ5ZG1sWCGn63WNyGnRtZuUYj",
  "key30": "4AY3vEkA6yqBcD9fxFGobsoSqfz3JiQjZ6C11EsaEQCo4BUsgHmWM6iKJaXRLTTW8QmNJbHz96ed4tDkgvh3o4yL"
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

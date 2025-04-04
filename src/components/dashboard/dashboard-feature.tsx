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
    "5uqs2vxiNeNRva5WApiTt9Nj8ctuMBY6M3S9b38Yurezppkykucn5z2unnaW2H5Lr98rQqWWve8FefAWPjitKRMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RRdniSRkYV5s3Aq9yoCoJ4MLfrysS5bvUK3XuctrooC15J4vCpZFkS3PHSMtA6YJVHcb1nWHi7hi14fEV4GYS8e",
  "key1": "3y5KEce5j8FADmVBxDRcnZ8gNP4aguX7quahR21WCwy5JsS414tPPnvPh3swfmBouPQxoK5gGGEUuPkEi63nx4Xj",
  "key2": "21gUie2HT1RVqufNNjjwSiQH8Pf5xYHDdHa2wynYwkcr7X3PMcGpqfYYv1Vp9yasLcKjyiJCTKnsMxmQ2avSxUsQ",
  "key3": "23EyzQGXeGRBEFV9t2ngxnvUQV6aMwi8BxE9cCCmU2H2eeLPkChpmTdd7V26fvN4W8C4q2QCAtGGyT8oe9BfAYgQ",
  "key4": "BPchT3NUSAcTE2mScyWiPdocrLr6fQqnx4JAGEnMSPmJc29E43M4WZBUTGiRbd1QU4eWrMNmmmH2DXyAjPa6u6j",
  "key5": "4ZX8NnbP5ee5tQJThsyyqxVsZLFttZMUy4LVHJSf4Ypc2WNmSTEv4T8bwzevd3XjQh1JQQRQ1ahZ8K3h9HkgiDWx",
  "key6": "2j46g3JaJYNLxDS1JmEjXcFbNoxHG4y98hSMU3f3z498yU5gajCa8SP3Eek55S8Yajao67SLFpowomNSCetZtyPE",
  "key7": "4SCrdoZifxfcydQbLqiLCb6YLVq7dfVRc6WViZrNJdeEQzDjJYLNqh9CEHyrkHArMysFzV36UkCXHp756ibdbjPn",
  "key8": "4mdaJvKV2crGUjNf7oBApvBoFxizwErRjbsCJVoCj7bU2zm65gVo78V7tfdU5iYs1Gd273zxv7LSwkVyi4VCwbaB",
  "key9": "4yAteWan2RGKKA3AJP3utPNPPYkyUQGKztjVD3EwdrbX5FrynCgZy5Wy68XmdV8QHMM7K66dVupG5kYALa9pmcke",
  "key10": "5ep6URPvQGWgxRdnjNhQzf5NrStmKf8kKqSizmNdYKDjGyyF8TaULRZRUT52Z87kiPHXFSkHz2c9KD7DUuKPFEws",
  "key11": "BysEXRTGXnNaV3LTekNnnTrCw4eFfZKaB75mTfmCChwsDKkatqynAdoFQd3ktr8RRKUKtKGPP5dXwMGQxYSD41x",
  "key12": "2a3XUyF2adyFHyNTk8LzhRDyvKgXf8F1QZirE3rJL5as6TeeR9DeGRxUALxEPP7zjp2DyrwCZjtkgFvMwmNJ9kmp",
  "key13": "4gy7NvRKBdJaYz36x9f8RjuTPVZ68AYMw4F41cU7vWnuyTLCZZKDFzXq5pram3VFMnnVqiZP8pf3GWCVKmSsYzh4",
  "key14": "BRkktYsVddAVz4VAgUJEDcDScp31bZom45GP1pPssUfQzxogwtFQ8ayVGdUhDpv7kuhvwBKLJS9yA1DCbUwP4of",
  "key15": "iXtG9r6n65tEWqyCXtTz6WecYg35Z1epEHCY6wwnjr6tZ8gmEbBsvTvihMXBpF61mBd6VvxYe4Z44j4fZJw6Hgr",
  "key16": "Jqm1vqb3AhzcASzvoqsHFT9V2QqzXzMSZDRn1uWqmCppoCanrkvcGnTdArqgwpHSxUxWzkxeKrbsDnm5diT3fR6",
  "key17": "338eUMyajxxc23NQESj9P2HAUmti9zCLkQSQHbk9pyRLjqd1AyzDDkvp5hDa5JVdVQBSkAz5JUkW1n1wdbk4vpsG",
  "key18": "4sFxusQpwZmZeVbtYXcuMF8dtRH7itcRYPoKgPMTB6uQmkcb5WhoRbApDWG7mgr4CVZoJg69W6i6kUiJCu3dj3ge",
  "key19": "522LgqQe6EUMWTf3BetenSrUuGyCy8C9CMjc2SwMwuuSepAuA7RkTG7Ymbme96vY5wnWutr8wBxZek6j6ATLKKSW",
  "key20": "2FK3VUWTP3CecfCvocULXyi9gQGsqm5ohydjcmqyuaCDt55wt1HP2Tm1Yysm8AKRWMS5Y2d3KRf35rzfQYWnfgQJ",
  "key21": "2qCBee5zY4aKLWP6XwjzcSw26TxoSL6ocFYZ1C64wYnt1LsquUd1RMkeEww5YqTvTXaZ5efoVt1jpSH5W8uqWmVD",
  "key22": "4BpXWN3ucS7z4CSFWqTpetQy9XezcD4FsaQiRpS5aC9JiEKb2yeWvpZRnZuWa5mzeP8cSgWRvu9xutDYYJfoMjbh",
  "key23": "PAF38LtwfeoNXJCA5Jzi6Ej7kDK7uqQZaJLUSfWtdfBZfpEbAF638SCzozYaVJe3gB6En1d7DAtk6kkm4QeLBoQ",
  "key24": "Sf8nn74fLQNG92QsRmNrpHcChtZ8PnZPzpWLjSPLoUfhtZuYFEjCZsWC7RHGxpCr8tLzQNnpxcMStRPnAtYU94j",
  "key25": "2ry1KiEPgMWgenhve9aD2fr9AKKh8E46BUR7uTtPKVxpTdAFFvTxpZEiaqWh1Kr3UpVonoPMZYhta2Cz2zjed81a",
  "key26": "2B5FFCZ6xN8EbAfrTqvLYET7abG2H3quDYbY8RmFHCXbRasKTDPPTG7KTqG7bqmQWzX6WXF3VDiTCyHoQ1YD4N8d",
  "key27": "47pXwd5qQS17TBrHL14ZrGHtNePw4sjV7KdwtHkGGpT32dn3FBKoc8RStMXM6nBTdWPBMW2hu5d8yzMtwxBc2PTa",
  "key28": "2i6S4VV8NHaQHnrWJthFEtnK5k4kGbNbmioikmRNy38EdXAuD754pgQBbxDZztQQBCQuiLPz1u4BpBmrzdjW6sUu",
  "key29": "2ikFPR2Fsgp1miUBDoQuJanhKEMzaK2Q5LkSHqVnejvU4Rp4wrFGjkpji2EgLmY7ygy9bvZJvMoZHVebDCe6Wvn1",
  "key30": "2tKYqxUTjxddGhQu17F5oEooq87sKsnSDsCqt16n3kKvidFke6YymeTYFZW1uTb1Nyi6MwQXegFyGEo23tHczopT",
  "key31": "3DDqogtKfS2U2fzFzMq1UNrECerBkS5mZKrYPqSXQzzA5C2uWg5KeZKEi1tuQexXycG9ZDzuha3rJqRx59VPHpVM",
  "key32": "4nBXgptLdoQTZp9BFZj6PZF9un6YmdcAZr6dSBujQUNYtaXG2y2coMVAbD6ePBVDQS4T8DvatXt44rNa6JTWW8XY",
  "key33": "3hHFuxSju1wtJCongBTbuTLhX4KrXkEttJ2Cnf2Gkfebmz2YxSGvaneKK1iiMEDFssKPfCvqvq9XwocfmvbNKx6B",
  "key34": "2Qcm1XzeBz2DZVdX7YdZaCx57Qw8xK9BDx8F5ztGmvvyuH6EBoHPoTzY9m7WXy5BjdGQH2naSkCSmHrNxUSLNdQn",
  "key35": "dsQPXmx5wDgUT4ANyErbA1iNMsfMXSo3wkZfr95WtYYtrz1484pNc5GChS55TZ7F9A1M7kDx9WgaaxErSEC9bEW",
  "key36": "2JnyPLmpB83qJbeMqHLH7asGPKYVMWGVpmjngQ58YGHMCbF1YZE5YXq1gFiMbaVCdSJF8e6MQSpToCPg8Gpyk8VG",
  "key37": "4PzBvmGdSrR6Cn1JnjZiRpuMnyb9Am9YR2wyBLpUFGyYXcWV8Q2Kc5wzC2sYVVXBRqS5CriMPXd3nefWXLsZQjVx",
  "key38": "3QwEWtdSB8f5yh6EFKjxBt2ihmvkKSHXRW7V7d2JreoDnQHKfYxF3FP6zFbeCRaDHghnn1mTKJmTZB8pjsaHjdCG",
  "key39": "3WbCEkKWuFv7ZEaqnYNr7qYzmLfYi13gfXPfjrET8cgWHuYXHxRJdJ54dDyCjfpTd6mip5Lw7qHTHwPLh7inY7VE",
  "key40": "zT4eWbQNUU7wieXvrwGS2VtcLaYZftkCng9MNpv9fRmHETdfRBG7quL6Ncc7GrP8YWFQ2KdHTrQo6MqM1BotZFf"
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

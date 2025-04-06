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
    "2oxETo2SWkgua7BTGQR5Cc3MPo39iTLqSck5eRuXE3Kfn6AVWCQVemJj25des7ky734zJpUAr1pwWebGsEZTKftn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k7JRijsFY2JiHStbtU2ob6a8Bj7xTpwnhcPzzBTA6f223CEssKnUcKNMsWW6Q7iTie7dEsP45Bg6ckDiTJk9U2Z",
  "key1": "3UL7eFznLskoX2hRTxobxAvrzb25L185KDUGmv4mxT1BjKdRwGcbhGYunoLyhvV9xYSgfgz94ncS5ADBFVSn9KKu",
  "key2": "2RyGBcAtpxhbYqPQP7juaPjtngJH5NbYqxdBzY33oK2xqFZTCs4kqh6yh9imzxyAND5Jwn34ZMbUCvBooym645uX",
  "key3": "mPwzPUJZzhphuxS1C8TFpjedgA16c9PS8NJhKqaM2iivhzjDSaCqaxVKugRNwiPQMhm4REjj2P34ftPVkycqYbJ",
  "key4": "3A4NVcb2RiBWAzzcK3ewyV6P8XCzjSWUZVHN9mHhVVZhrLkLNfeaoWPByfZX6ZG3qo9cipFbSizQk8dDeFkJpzGH",
  "key5": "5ni7oRGfkx6hsU1MdUZLfQSK1U9rVywNQfSjbMZBhoAGtLXAMvU9HjPVUqCvgFmAxgdRJ3kPtZyBS1y2Jy4TALjj",
  "key6": "4HPugabWhdA5JZdT4oEZmBwdEjjpwRCdshcTssQifvdNbnyhy9HyaYgUc4Q9igtVxhWr2XtsdGcMqRTDqyh9Cmd3",
  "key7": "5cQaUMKTBprse2VFTp6TfifceWEjnnawrm4S6qqdkDN3WfwSVwdVJeM8ARCXMU5UWXutWjDVhZdg4qZZ6z9wEXBB",
  "key8": "5wEFv4GsJQYKywZwEsNn1smBQ6CMwmXe7rDoncMDxFLyeujMBJ3FVzkdnp7xaYR5ycCJw28er27oQXN8JrfyQEgH",
  "key9": "3xqSXgdYykUYvEPvb9JZpsHDyDnvvgiwptuGYxUjqWazfgQUEAtMrEg3umtc4K78sK81n5HCtNYKrXMrpSHyfPAf",
  "key10": "3GZet2vj7iyCyaq2Tw6pWwZsW2kvD9Gwv9Wir4LWGtCihMrTrkHYhwdCrRAQGVHEhEJJ8H1HZMmXSKREMqx6qsNh",
  "key11": "4yYQvWswpzRgtnhxjW7ejFA9j1N9dDUGuc3Bho4f8YVt5z6gfmNeikA7Q4WsJ4sGm2EurE9JPptiU5J877XYCQXV",
  "key12": "oXJ3671cbKdM6pte4AwoAQyESbqnbQYB1E7EdTG1npYdQJpZ8jHPpDV4eqjGzCeZS3eQuMgxUGQVuMbu5pHNx5R",
  "key13": "G7Ybci11R9c6f9dx144Cs9CcpmJMPYMCGZs6zhzkSxRQfRwNUwZjzSVUBPibjKaaTAvv7JUvhnGDaWucJmfGr8L",
  "key14": "31jPuSdBeTmkcqpMHtb8eYs8AHNuMW8gae9bnwQn8xvZnYTZvbLVSCWrrVbhW11KKui4TWnaJHLufnBbUP4c1F2r",
  "key15": "23Y2nkdyeKCbTbE1e4AALiikdZWqqoZsHf6mXHwknE2HcxyYPtGeDVayJgCDqk8AhmT1qZ1ykBWzx5pSK8XFqBQF",
  "key16": "2nF3LiF7HWgpCyHURw42LXqAs3Wd2PGNLg8HMrjHX1SvXLH1afnBFXxRRdFcmER4HfboHD1jZLt3psN5eBVHxZNr",
  "key17": "4WwmqJ1PbntBKaobMtrbJABUnC9VTPYRN7dambixykQi8NPfHrRKzqwHKvEmCW4bhTrF2jzo1v9kJxUP8obojwix",
  "key18": "3kbGnFj9qsTSPtfq6nPqyNvwL6Fqi73kx6BH8xrype7Yj8GhgKMFJshE5p1xroYQXjHS9JottVpoVfq84mQoy6ua",
  "key19": "67h6wNUEMZp2qJJxqr82fMukN3K2PRgNMw74PorPwXecLFBc8KsGBxw4J2LHCQSeiXC83C6jNJD5tnWPaF21M2Rr",
  "key20": "5aESzsQLeWCRA4SSLudv3uc6Nr1iXrCEs6JrfzeFDoJwXVroX78nYXpA1tDCxuWrWwnTQCQ3sRDgWrzMsnDaFRMU",
  "key21": "4MP7ZFh5itPAKSWdr8ArKJHfwBmcEXq8Ko9xdBBjXtDzhdUZZeHgg3zpuDdxRStVLgueEVZ9wfFdDp9TLT3Nr8xp",
  "key22": "2R2uVgjULzKivGNWqswHn7o6zHjqUVVUmbkcK5iUuMM7bn46hM6X5Rufi1aN3Vse4s69npjPW1MbjgtHv6GJaQsL",
  "key23": "3eMPSffYi2RNzjpsPPhxVUSr7YKmx8VkAMwNcbka3W9zMeKSgkusgyTWWgLxP1T3HTLA2GifEkADLJysx41yYWrp",
  "key24": "qQvCr2VCLpwHhNRmfAS4DQq41MXg7YSJMn3b2vMR6wia2nEXzSUVb7WpAX7chCqCJd9X7r1kFGJALuvgJkmMKsP",
  "key25": "51H4hKZDEZhbWaZbzi5XMrkng3HgWgAtPKAPfnHfuAefVVjiUsRXXKjbhDF56XdDq7ahhJn5EvzGziYpPCmEjA5k",
  "key26": "2ErvjsKQJiyY2zQw2WnDjdgxeUFytiZYzZARe17sHsdm4oB7LWfAecdr7aDJE1GgXzgGTkqXHoZEgc7unEd6c8HS",
  "key27": "5wxBhCTJquGJY4MHmNXZSpGFvGJqVDwQR7EMrXiTLYLSr8gppBemrgNukjZSK9E3QVqVLWBM8f4H29qc22b7e6F2",
  "key28": "P1LxMuMfNqwu21s2QYWGwk2k29vthvmtTy2rXiwZuKZ83yQdT7FvSQNesfibjFjiUNHUo6yJWQ8ky76uK4JnqF4",
  "key29": "ak3yNs9qHY4w6pS5GBbKopZmjEYyXi3bazwPU3dizbskyB7KKiG6tidZGCsKAqiZPeiiSSVEcVKwXh9oPA8fxXi",
  "key30": "3DcgeheESnshyTvSC4RDnnn5aFnZKBqJm31BS3J7kW3vrrRkpKoK69J44AnMHY5hR7e2m8aTHbvAT7Jh3P3SXw3Y",
  "key31": "3Q4aFy3rGMQhJ9WuTrSqBDEpq1uBkd7ZQEd8K3QfEdFe8dCxnnQpPHS81y96WxeREZGR66Rx7eFkWJV1YVNp37Ur",
  "key32": "4sy8XZ1aVwfQxGfXiVUYpJ3gaWGrovj9Vspi8vqPdT1iU2Bkt5XDmRUkstZ9zGEjMcsVNJZHihZUYEmvg8f3e92q",
  "key33": "35RF6pzB6rajwWb6rLe7SyiucTEqz9nPFjvN9yCPf6538Kf9CxvQqtmibA8mL9zheZiCdSvS6okvqU8EkuvaEfKK",
  "key34": "5JNGrwSDQgH2PAs8cNeLTdezBEUcjmzhmaPHVHXgAT586g8asWfeEoWhr61eJ9Kvd5S3uQ5z8eimXhTjD48NSqgt",
  "key35": "4gkWTaWZuro5HVsjqtFgFWDz2R77aJZV8PzJzh1VrAcH1eGQcRm3oGvunyTSsLsCTHUACjcgjCMeeDYpKQyHnCzv",
  "key36": "2PsLPvVGoc1Z2atPqK4nJeW5SU4e6rcjfCVcPVXUAeFsWKkGCp2qVhKmpD5CU6g9UB5t3GPKUjkjrBy8H1b4TmFv",
  "key37": "64qVDRymz4GfiSBngyneaWrw7QobmtG3fYWvvy4rYpFwwcPveDbQLgYbEUHVwUn3qQvkYjDPRwmnteKatgkuiYE3",
  "key38": "3PDMwyBZBLGE6rMDFuVUmaw8jXLgBevp5NVGCmy8F6J9TGTEBs1aBwZ6HA5ccfE3iPgQcM62vrarNsMDpge9ggPG"
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

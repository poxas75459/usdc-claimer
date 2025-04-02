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
    "65yczcm4nHfbE1dRvHi7NfTKHtn9Nm738mHhKQjfF3uMs5m3JisziS5thArn6EUenrWzc1fST3vE91tqvSta2oxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m9EhnUbp5ir57MxRFqMTQ9CBbFtw8KTUiUSiGFMHUyeXf4TrQaccRxdrWKkt8zwTmnhiujb4DDLCNZFRoBUD95u",
  "key1": "4prqmjGcurCGijD8Aw67mhghKgVrTxHYeL51ZNjpuQyhNsK3Fc1Bp7tYqZMvzddV5LsvrtgD7DH28oxkEt8HCqWq",
  "key2": "4LG3D7MaZm43RAw2uv8T9Wi7kUCPaqmSeVaUMFF5YyTwF9R9ziVH1SZFPRN9YF3nuapbMuCTAj4q7F5NGvhbQaTx",
  "key3": "4NXXRck5Q3ErUp7cU2A7ymzxBpWWqFSQNtXKdqtk25kEtdMKV18W7MXub5wTeYYN8Rx8Hk3G7jQSZ9Jb9UVpNthC",
  "key4": "3MRCZgaFg57LcesnYgFbSZzGStMib8P9pX7nAEfQFHzH5n61FfA8cN7jT15UD5aVGzeqsrfW7tx87EYHuJRfdxkA",
  "key5": "j6Tp2Hgn3c7SBJk2XsE8VV9uozkNvtBMEykoRYcDLJqzjjqrvJHAvvbsmzCHzUmRE3YZ1P8GY2iE2XnsEZbeNxh",
  "key6": "5QmMR4EuvSBqnSjgjfNzc3QQvdYSynESBx4JGjS14L3kL4wDFaY3ksfvaQ8zgRagQtYNAs9ADZ8vUfFtZkxPpWyu",
  "key7": "4fgNcVaT2ggpaAA9qpnKussfQQVG7xsHVJv1tsaNZd2RQfBaUCUphvfjdGdHqdLxnyoGvJ1yxUjnToeLbq6ZKiAx",
  "key8": "2dCzyqdztahKZ8d36p8hUtJEGxAJ2XrNa9ZNTYgk9q5wJr6kaRF4uDzX78vwfGVwQuixi5XkPQDYjywoRwmuvnyM",
  "key9": "66CeBpoNtan7BQsKNbv6epNtSVQg7XwkdzZD6DXJXg2pxi1BTUszve8ht1C2GDn8SbtuiiM7NAwFnJZzK9Y27wy9",
  "key10": "3S2bUgrXPkNkRmS3ZuAMMcQKtiwNUZHT9kyXxfnpmAPYKUopoBKL3J82NM1dVXa6d8uKb8RyVXcQVmDsEneD6zNX",
  "key11": "49WfJCr1MHsMtxuemC5eJK5t3VsKFKi9vkrTNEucmrf6XQVaUFCT1ZEB3HSLqaSvZxdLmg8eEpNKNfgjJmqb3DJY",
  "key12": "4BQTxZHE3JfpdGz92mroJJh3BuMHwozzsDQJswPUNHQvqYKcZmQr75VTvHaJcvAc4eL3TwupJawwd2WLigWhnyUk",
  "key13": "Xfb92baRibrmfr8AeREeka6JkF3egn9Wy86WFNkRWRcb8ASey3Q17j9HiQ62ZtJRGqQgftC8L8mL9G2QjnFpjQg",
  "key14": "43cX54aEkYsK6Bf2dFfeHVcr8EKJ7To9juvXT1ihdDZynruHkgqs785nY6fzAm6oubMRFbBjyhEjatk1TAJyGcg7",
  "key15": "2qQJaoxk1ZWqo9JuDxszJr9dYxki71XRdka4X2YQVf5kvLhPgZEo71k23hCbhi5tevknigKwzELBcv8zF8A3gwr9",
  "key16": "5HbpaF2iJ53PSPavnPXWD8ALXMjgkAKtMQPHzBV32ctPqhmAok7F2FJUjBBfkh3B51LNWFzbRJYWM2YQc2uokz7Z",
  "key17": "Vu3MRCnUyoVoXuvSmP3R8qXmzSgE7LpsCPruC43gmDwd7m9UcHQp2QNZkZW5WyjVJmbkKggZDAsQy9szPJeMz1K",
  "key18": "4o8gqvtdbz3x3RSFCLs1VoZ6pMoxjgogBbX3cpw7vBBLcWJHbUqp14PZh4EWAuxCoJWpukjCa488XWzwWEKCg9zF",
  "key19": "3nQ7gHkBXk6P52ZfJz4MHqWPukCCENFpamLvFcuC2xjGHPXN7XvSnVbH9fGJbhjj4mtAM1PkRhuntdN3jVR2B5GM",
  "key20": "552SvHwfR1X7jZ3jwEGaVEvHJo6iDt5diL5XnrSRFL7rqvK6VUUpKppha9rrCN2ZyR4vnWyzHSMGBWTCdjhSfjps",
  "key21": "iTw3pcT4fVX7hciPHVTWojw4WTwhYiuyBbe4tWragv1PQoDcUaNoc52kHdYPnYcv9ZDAKD14MyAy6g5FoAUNqDW",
  "key22": "DzAR7An4JGphoBESCbNf4G6AtBT9wf9EBn3guUE1cUQu4kG1LVQ5xxH9GWz73zM7c8hjemYRvy9e5c9eXuCB5hX",
  "key23": "297MpApdLD6KeFMvh5GpRQ1WiVKNK77K8m8bbE17AjLHrxHd41AP6cs4qsTXa5EXzDZq1TG9JDS6oqmT6bTCzXRM",
  "key24": "npjXNe2cVuJL8Apk7Bsi2DipAJCfFUGEoW5HSLetCUToFdZJ2vzB7D3rZ9fMrnHkNnATvEnjNLxAf2ibjCxfhuo",
  "key25": "463xYy16wCutUL3g6AC7CVqfmUhHTJ4r27Gb4RqqS2rjvUBPHge9pUnQwm3g1mMivtxGsZSjX8UUVX5LUtUw6FtQ",
  "key26": "2g7kBJSUVmh5Tyxf52byGR5w1hyu5vmZhxi3P2LoitDtxRUnsQ65po4uoPCE33eWXMQL7ECWJyqVyrD8FijyJXe3",
  "key27": "4drFowi6v9AvvytDSthHmkL2VRvLeBCw4rFejjEGYVbSBMLELZ5LedXhgqxf5CyLeuzRirBk4okQrHyY6D9ZX6WC",
  "key28": "4Si77qR3vg1h6tGEqaeqz1GZU9athfC12wBnK9A3Da4TKCtGxuSSgiun6uM8VNGZH1a2nCCtYHNdeRqn75yaEW39",
  "key29": "4559FHrUpdaT6Chqm8QbvS141U72pCJYSUz6EzQQzACgnHBdr5HMnKWuNPkr2aV5t4v2UiWEoqCm8B6Kr4agGJ7c",
  "key30": "5Xt4ymhp5RfcKzu3LsiRW6XhKgoAybJGrPWrvAZXQiyZBozdAdwTC4XFwiZgL4eJPq28nq17Ksy3YP8HWJAVp6dS"
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

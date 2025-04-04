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
    "2bSYwhDC7K7w6aij1QUvp7oGyGLnXhgZbLX444moMwFS1F217NkX6xDpaMHmMZAHuNXg12hW9eR5xrPd1DNYQaZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pgui6viQs7eqQ5MrjXJpJnSp6PAjtDQfru9tcKgRWSMhzJqrAshRxsLukbdZY4FrwDm1K9CWVQYqQey9oVtdALp",
  "key1": "5c2QV16XmJC7j8ioduLbphmRobzDWsjCbaNXcZA3CCSQxjbAbL79yQDpf5CGyDjQLZcVXi36cwXHYSQMW4JiC4Gw",
  "key2": "2ijY63wGUpzshwWvRLzsz5WHcwwZudLyM42wdskR3EKER2HfvCzJLmFA9jd8HbepRPMsdyKgEqgdTEDUxJAaQANU",
  "key3": "58WPBS4Hzew6QA1ioB4P7G5zVUBr3kMLxWDk1sCfJNNGviS651qYAs5rjfJL3E5ecegpAaLDuSDnraci8MY3VNhd",
  "key4": "4Tf65zAgUSh3PfY1u8mNC8aMAeXaMRsDzjYKEbRkkJHZmLg22E66dhFUuW4DjtoEyAnnSKZeJALXE4PzQA7tKfYu",
  "key5": "3GBdX77hZMgxsTu8pkpkcemN82ZsUcrNNumr7W1Ra6u16xjz3EANjcKNbPpVXrbQzNWpJ39W1VaUisLK8MXjKHET",
  "key6": "3cReDxeD8MfgrGGphnvhw1JHZuRUFubwnspXsyjcT48RFPQvoX9J4DQW8W3RrpXm2u5pQAxPRXysJoxzBVQ3MZPM",
  "key7": "4LJKqnVtK83vi5v2E3eeGvcqLwzU9hisWroSKvUPJ9BW6RGWJ2HjYxgjDY4VEsgdRBj31RzihvxdVNkztVMuHWge",
  "key8": "2qKxXWcQWQBK7PuphtAebzbGy1S2eyt43YRMp4bjoczeXz7TTCLE6xYFRo4UEawRdVfved1xvXwWp9bNxgaoHYMr",
  "key9": "2BKnrJq2FcxY6uvtPjon4wipznxszb24oKAgY3pfHKz3ztxiheFhVpvVQztnAeBNW3ZExtAyWBbc71qXbQDzoNJg",
  "key10": "sBhFx5HJviadC3yxYBvXQKQEkX71ZnQLHfTHMCZyjqmbWBVaXx2QZMJhuoAWuK145X1d4kKeka64T7E2LgCVBtC",
  "key11": "tsPozwRyoGBVZJ3cNwUYTr8jjQRToyXyCTZafwPLRZf1xg5qr2mT4nDnazkgcXJMSpEoCkz69k77kJMbPpd7En4",
  "key12": "42smtJZXUEGXRjnyZmD2KroC2czTUvJW4nTKhFdj3MLxczWya1UrQJJneY9Vy1fEoNhYjfwh9JgeMFuYf7ibD7GW",
  "key13": "3vZzAbeR78BvvqeYCNt3d12Mj9PGA5VNzyjJAaVP2CkLySRbm25aMKx7QoSavQoT5AgwzaGsc84J5nw6f9dzV3J7",
  "key14": "4SiL5vHeKVMyrVxBWYT5aC7sSJhbG42zBJVMditGQefKusW7rkkvuHX6SosLueVDRufZV6HVNX25BkEEk3qaXdM3",
  "key15": "2awdrQpZvr3tKfKm84jpvKHrX3rGCTJ6ziu6pq4uv2tFuVTA6mcMeutaBt2t8WE1sgTE258FTG8Nn2gKtbD5sdBD",
  "key16": "4n8TmUiPdqkhaKDtMSJWoSrekhHXAUCdtgZb8uXegTPRYYjVz4Wci8Wfs25JiWhtTLCGRYh652XzzjeJZ36fSkkY",
  "key17": "3wy2ianB2xFfKA8R12WmZFu4X2KkVYALo7qKXcveff2SSkmvR5Ee8dyxgvN8iySGqMgd8ovnT7uxpKJ288R19X3H",
  "key18": "2BygmcpEJTbGy5ZKH62mwsmupCoexHyqjewy1Wi28kgpbNHt4KSbp6aizSUbG9jEHnsNeeGArhJDnYq8sgHarS35",
  "key19": "SuAAA3KbeiSRgwWTYJfDYxmjHjQJmdGX8j8Rq7Qsv5nBetNMbQU1AWFpwspg32syfsh3HobGyPE9kyKRNoUaPgy",
  "key20": "utV9PuqLkBWatSqRM4g7C3avEjSfctScWW2KdfcvZSRbpsa1tkwQdZxq4iuLU2HzgTd6yws6L7RD6XjAcDV62Ns",
  "key21": "TVAsH4Kfvh3YyiQGLcztbTBcb71dWEXTcy4185A6PkeUbTajR8iaNKMi3umdyDHaJgJ3Y7d7vAvKk4i34HaSVM1",
  "key22": "5CcB6gwxQbBTt88QWmVXi4FqECnVkv8zyXvGb14oWV2nsVVY2cnAgwymhAQFz3BCKZJSCWEDK2TKjXMbgkT2Lnrx",
  "key23": "5USrck4dwdyyE7asAxw6Twjf6pQTzcTkHvCAryGJSFkuwvpExUUL2uTNkPLggX6G29jWDQL6nhuHz3rTQYaxN6vM",
  "key24": "47Fj3UwCu9RvahLrQS6to78cvPERzjWh8Mk4YyXJm8CbtLmNYK6RMM5SiraxpsAoEiU8cvZX9HEvkjCuCJP7UPed",
  "key25": "3PNDQN4ArKmjx1hVNS1hBtZ7v4P5RaEbsBuzMz76GveMC5unYGMigtdzzjzRSugiUuG3gqQzyawMWCJNTgKkxJy8",
  "key26": "5j5Cszodup4YrtTStFRi31ngjuqnYV8enBfkdv2Cd9FV43b1PzyCcD6yZbS4QcAJ22M2yjHLcfAZy5LxUXkHgiws",
  "key27": "29bBGECRb1NLwY2fJ5gUWnPsVzvKEqNQSjWAbyg64YCRiYzfH63Xfocy9A5GeSoNTCGKpojWmyDXy7eDAkZeGqZ4",
  "key28": "5dwikvYYP2upvKSdJaznzCBU8Z2AxAfx19TeA87XqDkfgXWymiBSv92wr3yGW3WrKKM4WW1G8RzVMFTtNg4gfZto",
  "key29": "5nv4fVMocvDbhpF5XJUmdZVvx5mpbQpPv8a1WF5WBy5z1bFJYKaAjJ4CMjzTRy3Wq1Hg5nncjdqB666DpfeDwigf"
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

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
    "D8Lskp5BiioZGUqHFs5THuTrinhVgnEByaBrzxqM2wDAzFXp2XSbXNPitE29bHqgq9hYbSD9bW1ExJ9caCWYVtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xcYSJAsLQmp3tP2E4ZwQEdNFh2Fhks8iQZULom9Rd1gQYbmsnRhyRMQLjTMtaudbkRveR5SrHM9U889Nz3oL8e7",
  "key1": "2f366t9cfrF5aJCW4VxfJsCgnUSYPXciZjdZALAVtRjByktKUdtrJZrk3ZKXBUmVfp2noDhZpUeBvEE9NZpSFVfT",
  "key2": "287yxe8VqQmKrMUUDVLyR443w9zCNvZXcdEhVsnnfAjVuxSKJE86rLUBTKgbLXy7ma8cR9AEZMA9jcvqsLJLpmzd",
  "key3": "fXdbNLEvJZuKrytEAPQjawatUn7Bb2vx3PgZ6xzCR5bs6MAgBioxzNpZFgeJTwgSqQt8AGw59ddHwL5AT2QRLMR",
  "key4": "67A1ffYFSTsR7Hes7qH3Xxtu1NZyneYwUHyrCK524jSiAdxHD5PkSaWd71yUTaDX9mwPPTQohkSyHm7ipMFsXdVq",
  "key5": "e4kaDuGJ1RihsoY7tPTDPrzvKvobAoKnmW9mYEdH2GBhZfqoqSbDPw9xnGcGvFW3DG5JW5LbxotKDyArJ9RYto5",
  "key6": "2jTk52Z7Ff2nqJ2vejvZoYriaok76qhPocJC3oVLjKMP4tNwiDL77CkV7inDdLT72VoLjG66gPqVPR13dXe9fzkh",
  "key7": "2LEpCi8py7JcVWDKV1u728GKy7M8cJWq4bCSfYKty8gfoEEna1uTHQgfnCAYRVaKN27wCmSUHSDfDcbJzNC6VCo3",
  "key8": "4RYLTbWpkwzT8zpedtQwqjv2vVt5TzkwyzxEsriJkKdHb2koSDUy5BLxw2wedHpa6oPyUN8MPJYf7tyv4gYX2bHv",
  "key9": "Hic6nQmo7FiemSFtZzu6Dx8o1TvhEAZqsBoa3UFunEwB1xQNn3ak1DiXU7gvktAxzjpCpmzjXSTd3bZrbhuEhhh",
  "key10": "3UkzDo3zZrPGHKDcakPKgiM2qiGsj6WsgGm6hsxcrYqn9zeX4dzmJWumAN7shdvCoeFxC4QY3mMuiaowxJdyZAzx",
  "key11": "4TvXn1rSuKSxVAsDW2Ls1Tuu8g7aQgXriYGHk3L6VhT6xe5jsjuUrYL8HWwkMzqWGi3bPY9DuKjfQsuakwuMx1WY",
  "key12": "3JHgj9eaoDd9CREap52a5vSnzfzTNtpvn6UWXnSKbFShF7JJCbZjYBmVWEbgwEqeco6Rdfmgtgb6N3NhwVpnLxEG",
  "key13": "5kQtap2b46RZpZrFS3DgpAcGBjMfseLXm1vFo7jnH6HitXdrquvx68n2pzPQfK47FKJYKhbQTdTzqjE9tEs4XGE",
  "key14": "TzRLs15dgLqTQK8qm3jocBp5dUN63pJaEW6zfbqBNaMFvc3SpxRipQYDZN7ZSXVrHty7S9nQJoyXcitk6qhWG9u",
  "key15": "46jWCrFfqmxFbqqZ8j1V6FZvqGHcXoB6gWrTtccVgXC6ysrdrERoiW5DXtsjfsdC2DCQ9dq7KsQQDqsHhdcJ4Tgf",
  "key16": "3DqWmF89HCBvVHNxBeojYQ4YddakyEVcEkrJ9spojd8R2bD49Df34dncizCRhsxYDrsp7XYV1Avoe7p4Sc2YjXLC",
  "key17": "3XBVFVhT1m7pj8aCguprZF4uvjdzSJMjhnh8D45jBposQHcGYY7VFfQK35GKfmREzG5CNAdy8mU4W87jE4J52bu",
  "key18": "3CUZcZ1XHsJdZbMqKrJgmrYwRcqcoHgexRdiM1NsAuwPSzTP5JdLBzxfRMyE695sTC4SS3ZyXCVjpSEaYQ6kcvPG",
  "key19": "2BKbnuNQJwohX6K52E3aArhLJLmmWJ13gxMivErUzZ4rQKNYTfVFKCbPJTKE7NBoPStaj9RWg2hw2SQmsDv9a4qC",
  "key20": "5558BtD1EcNAtKZaJaRrGgdMr4SS9xdsjyCciu2V463RwNEhB5oyERw5Axq7XRjjq5qPK3UpyJxKaBiFAMHiTCHz",
  "key21": "2v1fzk8SuoqF4jfPpvZChrmvkciY2VLiLCWuJQ2ZC5Cm3FhZXLVzFVJ7f9EHNovH84eugkxMi2Esso69knpo4yJh",
  "key22": "4HkePE9nriDQnBCFwk9Bvo8DhYGvu5Rd9GtYYUsL2QqJDJVY1JeLYA6wQiHCjEBvkEueUPMwrt8JP6xKAt4wNiL2",
  "key23": "27oza1MWkpoEZVctTSn81DNFj8F6dt2G5tXsg7axL12hziPWEyUrX9FDab9BuKCQxtKQTMRxNwCqv7HTBQyDKKXt",
  "key24": "2H7DFo1gqJsebSDx66gLEYPkrgREPhnttotnVq4kry1aZbjNNuY1zCuie6ksrJmR5Pnqp7XA7zqN8KWMZqZYQ9i9",
  "key25": "5R4KvLxg1BrNHPmk8fvGyv8EgqJnQ9Vdtyz62bpMMuTXks2mvgdWMaUpNJSGwuycTBrENMQzfE2h68cZhCKTdzZ4",
  "key26": "3VgTv6B9F8FxYwxeMf7D971yLv7wTVvKnGw42TWFFxY3xr5jgGED8kSkEaWZmxf6GEg3sN6iuRgByve4DTdMFvrh",
  "key27": "36DonyaDE6Wi8Rkie4Jmgv1Y4Tsn7KFRZxiUnc8YuFCsE31L1gLMnrVBapNYanw4EXyMmiWWQH3MLEVkDVPZ7Qzg",
  "key28": "4cdivRn1ZJX8Qjccmf4myzsYriFLQWwVnTReHAcRFTT5CyfqJq3WBjenS8uDE4KaA68rtHji6MBeWnTpYUfUzmAY",
  "key29": "5755FC28LoaJe25hMB3n25RS3dZAMBMzBfSmTVcDyWBuCfV8ceDgN9Ro2ekKG41kBTSY5ukWSCnh1ckpinP8fAuG",
  "key30": "5cxTzwC94FwAXAuBaVLkaedBHPHDwHFro6gypCRZHn8gWnq2zNtJnPSZgpba7ENhY94GduxfFdcLmH7F4yPVsdWM",
  "key31": "3s7B5TT8jH86GDqmepcunLmWDmp6vWwYPyfKnweQEERXpi1FkNHnLbfNr3WQZBRcXfQ4jCGrSnw2pQKg7SKFnYLV",
  "key32": "4v5QGE6yDfUNdrojESaEQRYTe1Ng3WYMmC64xfsdCX21HhrgpRf69L1TVELrTPEsFtydPRrTmTc12fug1ah4u5G8"
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

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
    "4XsteMwSv1jY3T4Jy4WBaeuBt6724U4hpToba3U3zbiWfGsqQz7Eft2c2QJnV7FarBKNiqZ5rYod5o2hAmCRxiKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n4zc3toXiECFpJupscGTfryRhEif4jt6X1c23BHByqKS1decN7dY1zVAjEgeSi8gneHpDhVGizXvQ5M8ivYaHA1",
  "key1": "27ZQakqdMEXvFH3PPipD4zj473KvSwBtaYc5pdPdiRLtWTASEdLTQDB7wMV3LnbRgnPYXSLFSd7gpUj54WCHc74u",
  "key2": "4DBz2Ww7361gaaxPijMQpGAxXYRjQPdq5a5tSLUp5obPJLbCBE8ZxPEUniZJohRDeUn24utSsdcoDaVFR9e7oFoW",
  "key3": "4QeuCcjrGY1xpVpMEgZ96gWAHruSiwkSc5oH3hj7Mj1XN2svUkh8GcR6HLtPNXfLKVRNpsvgZGn61tFrMuPkHqax",
  "key4": "3amSZ6e9VNfJBXDFBXsqEcTiVdBjzFB4HBhrtBjRyLD8ZBzaYUT2V95FJvoep4kkd2WHMcE1aCJH17rWNbfF133C",
  "key5": "4U6figA4HDYge5VB4yj6fozMR21yHcek1JJ9aZVFfrpLfqPh3y1kEnSYdDtMZeU4BNReA4vzKaHdsBuFtyBrUNFm",
  "key6": "88Vsm3tAp3Tn7UoHhWRpLGKoviCr7pdM2cKm9EEuM4KRHgWs9SSgQi8xoHVHzML9ShUZugBLyqaoVY2pmoDxQcw",
  "key7": "3vFvuz15BV3wHv57F8csEGFNAf5TziZxVmw2R2iY5CXUREW8u2VVcGtjQDZ9GXzBaTGnpACq72dRSfvhcpa3Hxj3",
  "key8": "K6xFGLw4neJCEe6BmAvgRFDUtja7cJKm76HqkQw9UQrTYa7E6qdoQ8QfQ1SKNCpyGh8mmJ5Sajz7yYMANXMZPXX",
  "key9": "3mddgyVtxXiBqhsUA7SD9Geawwts64UexgHYdndAssggwMHjFLDux3BJPspRem6AHXtEYecefWMjtBvT3DzSwbet",
  "key10": "3Cs4bTvVhpbj9aKHYh5LZpnfjQ5QjEhDzw9s4hpj8ZDa7nYpB4zUyWDfrUCTCcnaFWVnSHopoWsm6Dshtxe3jttm",
  "key11": "2gi5t8P7FvJDTpShAxAiroNw6UwtHN9ZTB4xgPmk4iUp1ofeR7ZLGTV4VmMjHfZ9BuLkSmqvi9D75zC6ysk7Hz2P",
  "key12": "2vJG7Pf3TArNiYnD6LhXPn8vW79VHmXAdT4cUornsMGViNtDUo8EuuRezaajfxYjx9JMuzHKLSwdY8DNQgkXBzcN",
  "key13": "3moUk53JKPKs7tKSA5JGoYY8TPJotEKczGdVC98LL7XyNHJYrLJPVfHNv2BfM5KaRjfwZy5etcDyoNtuKfgh3CTf",
  "key14": "3VsWVweHw8gJs75KKZz3mupkQ4mvboYgwS3SeZCAghAh7XUjaTZMVhbJCD9e3xpokaLFJP236C3mbB4BN1v2thZK",
  "key15": "32wP9dSaKd26DjLrtDkDqCwdKn2RZk6bojcomvJX28uZgMi8RcqKzq2wX5aDX9xofBLq37gv8arh4tp2LpqXNUp3",
  "key16": "VLcT3MN55T6yV3gCV3DyGrXQjBoQRUhMSwFt6X3ZKxowCw4zrmQRVinLFHynSdytT9xp8Bhb5hxbd8rJWqcfNTp",
  "key17": "kMZGNrPknQ7w5khknyLytNmaMKQgndMGRmzZE1XUfiy9W6gV4eMgbHV7tViK1BcawzSyk3ZTKSypr6rUt8Kkhtw",
  "key18": "2Frw4QFTBTYyS6ojbdz3RR5igSyV4bYgR7qVZ3HcmcBpHCDmgmb4hwPam2kk1GeX4cLtJ8DYy7KWi4g3FAaYoa8U",
  "key19": "pZbngwVwaNkspCCgSWGrpm1LmNGAtxjbVRrCuVfqZhTtfWBiv9Rx9LKj4bT9EDwjkFFyzCKsne7e7HB8WPUQ1LY",
  "key20": "3BgVVU8FHJrJwzd2TKBzJuoVkiUqHa47YjqZBUcEdfPH5fvGQZdikFqQCeUwu1nqGowAxXQn3zYAtCkrL7aUkHeX",
  "key21": "45zZ9nViY6fr4K8imwdkmCUtjJkCHhSWSpx3yVJzCcXs6dPhRdMRECZ2JkPawkM4QhCTYTqYfKTtaudRe3WNf3Wk",
  "key22": "5GbfDMT78MPm5Ukd9FizLR7t7PYGbxDtTTS14ME8a8LquKJwHH1JTAVKAVq29fegjnAzmQPZeJd3o5hAPHEMytzR",
  "key23": "2n47oLA4ppomXxb3QNPYeaw7Mk4EGwH5jyKxQV2RbMpJ43Zhy3ETAxqDVr7DkcMr24JHKrWXSUTak9T5fSpRsLK5",
  "key24": "4w1BGTkqtVVhxNjLi3F4WU5iv7xmWPW1rr3Bs7sTh3t647tguT1mb9V5FuSLFA68pKcuthQapGLacG95x22YC6iT",
  "key25": "5uSZE5wMX3jaFxwXdNd7owVvkPGvZeVDC1kfRB7Y5cnTD3LnU8hwDWCeoQ4xRbWHPQifuRjQPvFZs1odob6mzTkU",
  "key26": "rxMJoR5XHxzs5LC3sy5j95g6rXLvkpxUA9v9HT5DEa1VD1PUi6SjUkpZZgbzoH2rgqQSbnwutoe3kZaeYPqtX7F",
  "key27": "2AW2ceTQ9CSiazLdmHa1QW9K4me2111RhvuRPHngz7fb28dsEiLw17Qyxc87fHVRmRQAQt2ZiNeiaQUkQ3vwC5Nw",
  "key28": "4LTtXFYjJfGsKPRA755H2er5drQxhZVAZfdb9GuiEeYu63VqagT1KWEz8SAE8q5w59c5MadLyQ6V5bgRECqQZ5GQ",
  "key29": "JDS6ACQ1rx8NZXHud7MwbZE9FSPa71fg7dsv21VnQShVy2a5HTrQYHYonsANLf1tvcEvovYwBpRNi3SqtpM5Q9e",
  "key30": "321sygidu9tGPuYuA6vd23p5vmuyzbRaUq5d78jwbmDp9Dn8MkUCEyNWPVT5VZsvsSHDUbgERBxEPbS1emcGLQZw",
  "key31": "5UY5MzZMSzJenSZhgGbB7vELWVNv3LnyXCZaocm1VJY6HBps6AsTgAo9FsEeNLWZeNvg9YJBQeBQ3orX7dUXWHUv",
  "key32": "4eStvVZXgVhXTYiT2VK5ZgectMxHFu9qoSahBRYbK4y4GN9yjspkBuqvvZh1npB5Pmh7mvcXYniPLX6VXw7tu6RW",
  "key33": "2KURdKckWSghs26z6Nb4kXNpBmo2sFMjy4zDka3jRmdwuDB1bALhrbkkVNm2Fy3NLNKr1PwQfxD5fU7DS1zYuS4o",
  "key34": "B8NrWw7tysLL26g8kbwQ2XThfDJiXHxqmU8d9jU5SijRqjbsVAV7w9RmvzUZVGYkjuNC2SbauSK4oDFvvg9snhg",
  "key35": "pdXNkMXyDhMAJms1poWLE22azSBduakMDdw4HhQ1V9mCT7NFUQU6ADiSNZq3AWU9zrLVKJ6ao8j3cUtPSSJ9YhN",
  "key36": "54xkzShnx3MUQr54s3oPMksziLson8emvDkvdwBUXxjh1BxUMoH1AHdfNyfmymjnYvntmsLhJcQ2TYw5ctXyZ6o2",
  "key37": "46CJyNiJUmtcTAhphBVw9JWijegwHKvgtz7DxnShuj6cbAGT5hyqgsuvjLwekgPTFrk1orcohZphH485fQivkGj5",
  "key38": "5jYHuKaeoserhxAaZCT4KsqVkM1Ed8SUzN5aCecoTfSpkVGDeTTaAeoh1spRVDfmkGbLunoJ8ioC3nGEBXViNN8M",
  "key39": "5NS8HfnqxhdcG8dGzX4uzDT5nFi668JZcCEkmipT773chibBDch9CqtRTWd94UDduoNBEFHAtipkgXi97Y7whYsu"
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

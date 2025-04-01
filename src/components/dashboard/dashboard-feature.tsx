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
    "3iLx1gBK4rzD5oRhjT8Qrk4zZ3pAVdftvmX3BytaAaE4yiRaPD7ZpP45kNJwQbXMWhnLfUMpgg6ChCYeLtWddNSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xum1YQpEkKGjM3hoGyyXmpDxSsUCN85mXkKDUff9QantDmTuz55dAHC8qApRf5Qgp2CqHGbho53AVUXpgqFu231",
  "key1": "5fyCSFs5PkkkRXUj7vew3ef1XNm3MXikWUZemU8NR5nXyDLGVcNkB1NWZ4voTmWaaFiuq3HDCyUKc9a2cFn7JaSD",
  "key2": "3h31araFP6DMTfaFS3CkpVJnZx4gnDeYgUqiWGL8qMyCzfNwLF1vWEnJA4ZXzgG3xVpB4jRQPhvAHZd3CtnnxcVi",
  "key3": "4tJPvhL6gz69AqoWppDna7Nf9kkAnmBKQDm8MzitGVZJpbXthMhwEP46JyddqZY2SGrfSBGfY3rgDkhvc91uf7PE",
  "key4": "3KGkPgkJV36F6XRT6Gk1JTVJUi9FSqdsMf6u8qQQdjhXQijxWKrREBeH3JvC1yaoWxiaJvjKPwCma79KcZKTBi4y",
  "key5": "5YyStij5GWBrsB2fFzgVDXVnYwzeRJMRFxZPrQW1uYmmnZRsnccMJXXwAWHJe8ighkz6AtjoXF6bdzLgqxWchA9T",
  "key6": "3sb2mnd3EqdzTYgXipZfJ1WhtWi158DXfdHJP7GYmhTBtMQCHvydr3DfZ9yGBHC8viSn75zRLG9e9BAuwQJKJhi3",
  "key7": "2LyDJWaQBWWjT78YwKYk5bhK6K9Vr9Bvrd6M2ry5oHYxmqgsKEHeTeVDqJj6PUcX53t7uZuLgfeBQt2R2UtM9Qo",
  "key8": "4GFbENfvhzLvEWExMWqEKniSVJCa1tCaetBd5ai2pPo5snkaUJJEtoWHJ5rZoZVAzu2pW9yo9icHQ3UzLUaFT4bm",
  "key9": "btbS9LBVELg8bQ8VbwoRMnBZiAQn4sA25TpFXD4hxEiRu4BNrH4KSk1VLWwEb3Zqqijbqx6cqkWKnMn9YfBNQFb",
  "key10": "2kHhwKfVNhiFy44gda6otjrZgTMb7kQZ4NY87xuFYm191nM234RTgaGpURZwrtPrTe91ZztbWASVme9hqTAi8pcz",
  "key11": "KAc1iX38hGczQnpGhMhayQzHhGUbDtko32VLfvxq4DU3fGEXo6iJm776TC7GuGf5MiUpnwfTLzB63iv8NeCZcTC",
  "key12": "jrijk1GNkDYZ49NyNkHJ6xJ9wyriUMixuw6erbmPrgFWXPJvboyKRAa8rUvrmFx9CCYNZXP3Q8mNxjCeEGK4PF7",
  "key13": "3B4CHQ64k1V4KzAKgpuHVb2atsjoTyHfo4Em3NSNoaC6EtXxkH7s3q7pwqSGwJrNrDhuV5yJhXX2pUxCsjFHSpZ9",
  "key14": "5srj1UPTZQ4LUtar73gJFA7FCDz8BkQJ5bEt8iDJqGkq8Z7ZP2sFwV4FdzMKnSd71ttCV3iowDLqZvNWvn1o5qMV",
  "key15": "E3T7szrPG2tgDtmn7ufGHZrbD6LPvMg6qmjv8HSq7N1cjq1A6YjE1FuJrHdpCP1dWcwtB53PieTQPpHu6HzGn47",
  "key16": "3BgfdPncZioXrKaRbjjzrv1gJpXEbgz5YAcwg5pQ2skS73AQNxQLGULXntBmahk9Nw9r4G6QLazbw3ygMXqa4CB",
  "key17": "3ZUFTNxieKr4YQUF2exV5Be6HGFwH9m8JpSw2QWvsGxGYQV2XsNGtg8j6M4mCJXXcaZLT5opEdw8X5jgThmsurJ7",
  "key18": "5g61Gny7K9juqTFRo7k3vQbWGY5JzN74DF9qSsYNyi3UtwTcFCs4EuaeZSXnJXAsxcEKfBUkrUFS8UavixYuK71T",
  "key19": "5xxcsKHJUHUQqzCXJj4bX7rLg9QKAKL6gpk9C2rATRjQRXHBeDjZ7Xie3SJYVu1NLogNMCmYT8v6a997ygab1nPA",
  "key20": "CeitU36yNixEPMcsDg3VQv9Gc4aMaGPdr6n7JEmoPANwfE1zkuyeNdKU9BnhdPuBez1TmQok23qSZK8ocFSb9Dx",
  "key21": "5eaThf8GndBcyR1Et8obe2iLC7Vh5fQPQNSZjPoy32vyzNfzjUDMQiq3kwKMefpGktJg3iAwjyABjEmgtnRyENGM",
  "key22": "555fH9fNAmAsXJor9uDdDxULCVzXpR6uUUcuzUdLLm2ksSNkmDkEEsGuoDY7LdEgP2chocL2aeDocFimMiEUJA1S",
  "key23": "yfTzHAfLELBVx1fWKjhmRGis7m2qCnRpehzr99cGVTYy6RYoTXnwwSk4gC9a85cyAGNMpofFi15TKgSZC8GZHUv",
  "key24": "2DgwqoBgcyoG3cjNChGc73gLsdHnuYeMYw3cjahNUZ9fvpGncHV2bctyhbLRGA6uhfx4T4DewuBaXpNjG33jRXkx",
  "key25": "2NV8VHNdHkGnzMb2wwYR57vLdeFPaGADBHwDjvEtGpAVScbtQdyij6BTnCccTvh7opBRuZy6QQbBv4VVEJNEY7Z8",
  "key26": "3r29MXLhMJwYT2XwRMZ53ZZ9TcKspGuzkc2Ho7PxGPxQnBnYpCGBR3SgwLWVBCALuKacYqcCogo1LHTnJ8AozuJy",
  "key27": "P818M1SET3GubjC69VFZghmYUetHEnkV2mvQKyFHoTEe7GSCSAk3m7j18F7aENM832FKAk391GkzR7qaDQjSwQS",
  "key28": "iiW6vPS3JCHkjLggHxTiuKFNnWpPrQfoPaM8DfVbDrq5V335wrUU1ajVnchA8oxxsegbYHQfzPCpaJCS4PNBmmP",
  "key29": "65U5AysRGeCguxRRbwuunGd2QcFFSY5UYSAN5PF1Q2dDLAiEYTcfrSERjCvyKsghCEmAyzN6dQECUK5wqKCREHTS",
  "key30": "2EnHHebYkstRNZb3CCdnMmV1fqrjJCLwxvXsn6nwzwPoZLQEsN7Guo3zbVJgSacZH9LAXijK5NVoZXgnoKqhHpCD",
  "key31": "3PrS3SeLiQsAZvEySjEzUm5kLd6HZcRM1JWt7gGoibxpicT2hdB9MbqMiBex8pQbZ9EXTjnktJhG5pCPsEry7mtk",
  "key32": "4bEBUQ4fJKwuvTEaP4Suj7xLjFUZENWErsph2dX1qFFqhNxtsaFr9ZGBbrxni3cACmzC9vYkQFVAJ99Ezd9LLKPr",
  "key33": "23PsRRSPcXk7jJHAGkMARcsXRzoFYVGuoRpHAHYcKhaeKwthKXgqkfmthpHN4WtrWruxLRudN934jQK27ZqiEekN",
  "key34": "geesL57r9DxoLtrDZsovrRSormXy1UCfp6PZvKruWBvfDPk91rPkbscVsvXPo28LqTCuQnhrVe1XnmMone3Mv1V",
  "key35": "ck7k2tPbJqHLrtVkngwg1NU7RN7oUbb9iQC3NJotkAdZvaqSoqTzaBpq3EbKs1G6ozpaXaeGN6VHRsXhHJ58jqs",
  "key36": "5HQAesSsva98hjZNPeE7f7gPz6FVtWQbW7UKjj7S5HsZV3qGYovb5RfQ4m9DViJMaTpGhvUcy2oCayLRRWZ7Wcru",
  "key37": "nWgXNjbY9fk47jX45u5Y3d5gvWEzmNHJH447Tp4HH9oJxrckwKY3QUDohFYYLoqCB1tSx8p8QgLFZkEQKc8TaER",
  "key38": "2EFMbkQZyaqGK1i1GqqQzALeun4W8DHMSVKr3mpaqmfBLJaZ8brae8Cba9wdXPzSz93AmD14PmAHXuoNgv6VhuVQ",
  "key39": "5jogsSGhaR4bNuhhtPt2whPWsxwhEF8ovYdgauaxRNjrPs9HAymJxcRJoBUX45gQDGV7T619TfnQdveH91xfkFYE",
  "key40": "5mLqrU8vhfbUDfoGg1CdU3pCxFVahtp77ejr8C3NxqnBe1cNHeMav52AStic2nzRMLdzxszUxXf6vT236xeQSNkU"
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

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
    "5c7AoR6WgHcy633aCAc9Yu389KYi1TTGwMx8jTSstnZd3VNxXH6evtgmxBJ6Vt9EvCgreMXp4mrJkR74kgwdPQmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGDdD4dPrF7rqCrK6wQSNabVmHZesm398mNrqi1VH9vTUU3254Ny5TZLfYXZWfwB3niXcLRwxJ5iJdZe41W1sRG",
  "key1": "5Cy2YxQu2qxQyiNZTWtfcztgCUeQzo8HfA6rHppdXYrWn8MhD43uu3mkCnrvevuFbPZ1w1WTjH2JLimPhjLPV4Um",
  "key2": "no69AvLt6upm2KRsgvx7K1JjD9GfxTwReZAbKC66zwAZmdFQP5JwmrLYsUBJsYhiqjW9ar3TSjC26E3YjhzGhkh",
  "key3": "46drLE3xmwv9bcDSqGLAHzsJKX9R9NMPqFuT9W6TuRDFVxsiq3FDScbWRnFLatkzFjrskcVLwMUEssCAWsiQMU9E",
  "key4": "582N9m8WhFZHHfLL3NUDHvBhJT5WkpwRC2sRLXQohzJCL7GdGqVtrU3TNrrHBTHkChm6y4SB1vaHhsv8Yr1YeUJm",
  "key5": "v7vaSevhvyrZ9Ykqh2F5dqxo9FLaY4SXpj8QkewnyDPj1bNXk8WzZbrLHrGWxoA1nVNtG92GegLEGMEApAJP1xV",
  "key6": "4npJMyATpBuFrUkbioagqW53hiRAR2AftLcizahWsFxFsctKCwTVN8wWFafQAdAH48TeDFyiAwpRfY2MHVD92imu",
  "key7": "5xUK3ZVDdNp5q3PBVFjJuFT32sx2TCWahB3YeSBabjvP9j9m8T5yH38bpDSGtRgkxxQW6RkSbJLrNmQwD4CACJjr",
  "key8": "3tGmaMMEpKa3uuA4aXctNzGPggCJdAjX9Y4Dx5MEXEjVM4DkzGtKkvbyoicMRHqrGEkg95LEtNoB46SN6UDHoe5J",
  "key9": "2k5iESMLZgsgRiWbABZAAgExzArHY3aBuSWFJPszfWWFfgu5BBgtHfybh7Dv5maQhVLFem3wsT47wjbek1k8yFzg",
  "key10": "2b8QHCtRdDsMDEjzBLDtYRG6L2tM4PuN3ir58NVkwbiozSuzjKuJwPGZbCYaWDPCNZQkrxrC8sFb6psRbczAuhVD",
  "key11": "4wR5ra4wohPPwdqLpxZ6831bNde5Fvir3vXvfjBevwH4QcXFgiWEGBwfAZwoTy2reoeH6jiiLSyjsifFaV1M7Sna",
  "key12": "2o87f1iLe3gQ5ZbWDAJy7w3UiMYuTLB24Xtg6eV9EnvogbaAo8eHdzZBYUo7baJWU6KyskdZ5satiKUnewdynZXr",
  "key13": "sRmMY4qe4CQinubp8H3wznAZdhT4pQkXJ989tqj8sUNcKxfBCp4v39k4XX39Ka9EqeJ3Lv9xjErcHXbg6que7CC",
  "key14": "4QpN5Uoo8nNNpPuqFnezEEgXqyx785nPypmGaqkpfYUGzz1PwbjxcV3nitsnAo4KQNYvogVNpcDWyj9LgBM5Tn7r",
  "key15": "KmjQmgtEbqagnP76zy4k57t7JxCDz8tpbCiTJPaPW78ut6oxFSR2FrDiJzGvqBAFKJrd7zWxJK52W3Umdi2Yf3q",
  "key16": "2YfBh2fbYmEHpNUReazS4VzJUEYnUCe8w2Yx6NBVXye4kVkBhuX27bTSeBMcpQar2xYi4adP4Aczp4o6bHDZZ42u",
  "key17": "vqQhBVCXETPFQL7ZGUNnfPqAKtBnz2JMYSXevNf4tFhcUXF2jJpVMBCC8DqnJtivS1iaYgUUPxPemfGTjW4udF1",
  "key18": "63wRpVUA3rE3bY2sxfaCscQT9fPqHNJgvtL26KWU84E1EabYRiCnqgCDMduzEfLGFsdba69xEe128qJHnMJP19mh",
  "key19": "5stvWgZoKmy5Y3HriKvGhR9wJEWrmiJZYeYdmAeUErGPJ32BsraEk1H3P5WevfDkQhSkZhdhWNvpzJ46tYNLBPW",
  "key20": "4Xt3b7Eubn5akKrKvM9SF1uz5WX1V4AQYwK96CZuXbpJqX3smchoR72WtyxiPVw7U3xZFQVbMepntjbczmBbLLsM",
  "key21": "2YGDTu6nUBKe1PUSaKzqfLEXzKEqPS2QBgMUePEV2q15HcStoXat1XxdqUS8VMuJMm1Zua8jUF6fdf94PTWTYquF",
  "key22": "3ELjoxECH94r27ZsPsYv4cxqcwnZytTb2Wk3zK4z7nV7N4GckgDX9EjFk46YNVL5oEgArNxqZJ55vxyVjhFDYpxU",
  "key23": "FsjKdDxj1AgaT4jgqy1aLW9TX5BLx3Pgsv2haeQHhhw52s3CzaKCNMccDTwJBZedzTSn6K4FATP23L4UX4JrAh8",
  "key24": "3PoU6pXn9CSDvQVcXSix5HVZx4w1LcWg26P3s2A68Fspgw4tjVqnrUcKr57uFmZEynT1TbdwhjqyeGYhTKyGb9CL",
  "key25": "54gkhx2em95SJSJVEW6PMwNyNMBkoKuBw8pQJeNXfUEEgCcxETkn47zWbF2q3Dg9R8TieerEoAQhvXC957EykeWo",
  "key26": "etENYfTb6PkCTNMaHXraPp6SUG2edvb8gk5Pa2d9UriwKSPjxwCTjRLEwXsR7jvWba52fbt61sExVBAsgP8R65p",
  "key27": "2G1A22Yenwt3W1rk3sxYMG1Z1nz8k4Bvof1JZKLsoG4KqwanhzKovyHbvNKqRZ6xL3edM2NZEGpJKn5W1kFuUjiY",
  "key28": "2Lch1mzvS6er2HEKELjfz1uwENB6fPPvtGVkrEBA7x7zXYkFWuzu3uWFz6ThXzcDvjFoBBBFCRnQFWpaS1XT5LyD",
  "key29": "56Z4nL37QJ8RVjbwbGgGMNiPve4pBqcFtYVThkXqQwUsDrPX8vhPtaZRdCdkM9zvBz5SNt7D1ms1aWQEK4tUU7aB",
  "key30": "5nYuEftd4wpqJ2Pv4sJVBpMG6cJ5xbsdEyAdr3eD6japwkZd1wNqmxEECTsZhDkSezKGNLdk2QopGbioM6m998hF",
  "key31": "34FwhB9nep9wY5GZALRAjxXDKFNMB8THE3N9TyuxehNEwjaE7VT4JWVDkxknDo5XCHEr8u1vj184i6FV4yntW6TW",
  "key32": "3f6tYaJR5K75UgK2kXpXBH1iM23uEQYSfDW5RsC46QxDGrbypvU5PP6dmrjTaXD8P4edY1779g4TdZgTNhj3M3Mx",
  "key33": "2c3aUTMMJZiohThpZbCKd9oC3ZQJ9jY3PsbGbWXgcvC9R5T9f5a9AvBRKGFr8vXtECGiBeUEqasiZFh48WKoGTDJ",
  "key34": "4QzqB62Xd57XztGum91EtApSbNjSmvm9ph3S5Nsq8obkZG678WxkLZaYt97dp3k4Uvsb72Qn9TeVUrpanNUqRERv",
  "key35": "5PC3Ehq83P768rd4XhzdDConmTVUzwY9rhxk4Dt4KxmwchGNsiVHdHboqhxXGPxbQYhGiwh3cc7scz89TGMp55bu",
  "key36": "3CeChmcCDRULuS7x5QPQaSY4pbpje3KY3fmbwRp9SL52BZFGKWVGYuJJqrJW8hqFhV3vvFQDCJQsqZHLnWKXTftt",
  "key37": "4YJPAbHenBpL3pB99wDdqGN1hizA2jPuCee529gU6fkDZnMdDqjnQyr1uYULkM17YRjbkhXfXgvXJfLKonZePgQt",
  "key38": "3fUxM58i5d1y6wAg1br6DWqdub2jwJatLfbVKgXvoadmGc5WSFzVUTy2NqSaKtNYuaGmk5zmKX7YvmaYynYBkA2C",
  "key39": "49j5TxGPJcoKuHu4msYQpNCvx3nCdn3dVxtdYtRDc1C46Sj5xQjAFFKbzrGzxtzdVx8wxcJb9Eq7yj7ias1xTpjK",
  "key40": "2Djxn64ptA6NUKCFYBdde3FeaiA2E8amfeSX7mpodcBu2iR7FUaRWgnt3TBdHqtPewHch4Cjd2qvDKtfURAddqY8",
  "key41": "3pm4jxvXagXA39xQLFDRpMGfqKkZ4tD8wQrEPuKWQNUsaahvecwhcyTZDHEnvo5HrTvXLT15LzpceH4wcAyxyN8P",
  "key42": "GZyPAFuxwBzDTex27WwD2td5qERxxfSnfaCiCXYAZmhJoHS5JoxmCpUU1a82ohPYo8r8AgCtqEwPK63PdTqXeVC",
  "key43": "3cWTUau9JytPhuegHyJd68De7TkYzm1A2PgbSatbZNgwkxskEchaaF25d1ubyMTHt9uuG2fR311NgKFWRCdqnM5V"
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

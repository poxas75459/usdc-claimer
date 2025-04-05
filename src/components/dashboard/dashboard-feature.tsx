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
    "4x8uUC2wr5CaWKeNhG5ekR27ePZGjAwm3PDxENtK7HCKHbjKgBbRies2U7qMMNDMmYdZSLMLnWAAr3YPUEZNH9Zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33gQNSdQqmAy8L24nJEFNy4RPRAAxf7nGPHjbDdPZNfCP5tf4A7ddws7RA4oE8FyCXiSXVrUDdXHYEgNbBxa2vaZ",
  "key1": "3PLKJ2JHjZE6qkPvZyJEdMauLjXtmg5kZp3ah77DjAYpwS2ZPVsPV5cNmYokCjoNjCkPfGWQtAe9JZE5TnFweRbK",
  "key2": "4jRkBFzmVcpuhFAGahaPf2LwuVkNojT8EBwsthn4m6y8hhEUUSYLsKXVvyQkiQ2rtmVX8KVJHt821t1GdGNLSLWZ",
  "key3": "5GZzZmg3SPXBggCayP8eQx3F61UqPnK3jnGg4PsUYQ6DyeWZAJJ62NSYkqdzSrZjvTQZpqxeDwWw4aLhSm35bJ9c",
  "key4": "3BBXSdU42swZvVo6EGvtB1yfFkRvTyJfcSaGMiYXoHbpnwqYRaLC8WqcTgZv3SGrcaR52PxR9hKajkqS9E1TCruS",
  "key5": "5XsjcMApVnvV6v9E15V4RMbPVfpmqvFzaQuF6iEgsUhZZBS5rDaprNzTRM7edZ8vLPmpuCaoPAny3PcA7Mxs1kCe",
  "key6": "4GpgMYX9SFWDw2PSJ8xTbVbAcQsrjUM4mZqajnEfTqNVyNBCp6Wi5p6DYywGuQyBK9iJhyae6eHbNwZWr34du5uw",
  "key7": "2mJgcQh7gUqxZXnVbP6KFUKUFVauqTKPYfqdnuPaPf5H2CFWwPJMgtbHSB3QEUiJPffHYghNYAfo8qYQngY9bPLH",
  "key8": "45CTtw7Az3asRaa7A9YawWAMgRYKXeWF1YGy5GaswuwjhneSeHD5tJDWaQdRMZFYZKqfkeX7JkP6SEuMj2jPPyaK",
  "key9": "GE2XpekfftbHxXGn8w54fMiE2kEotD1rvs58WsjncYoZPbAwzF2jvRCDKVD8P32RPKp1bhHqftL81LVpu2vB7W1",
  "key10": "2xCjzf13Bf2Hgwu5gUM3un85WhGUKDMqLpT7rTt2x93XB3YokCsHrmtzChu9ZVBw4GzdvriwVZ3RCXeC6RtodoNd",
  "key11": "3W6TAFWSRXoKChrFMJ18C7XEbVxUnXWKFCW2K74H24mDa2tHHq9tJyRCAzh8xgKF8DWom6uPVuDS3Bgb2hCCh4tQ",
  "key12": "2aqEKD91trHmCU1odPWsLpcGHaWnRvs16UVd4svVX7T1JR5Vxze53H2D9f96sC8okDNbfbR8Ax39rLeJ33frahdi",
  "key13": "66De3Rkb5WaPwzgWpXdmaSN5fNNaQx13E2T1QSc96eM63rBeB8Zga7MB6iqnt8G7nZM95jvdVcKNVSyYguPxsveW",
  "key14": "i9NcTRuG899XKJzrTaPbDbV5DYAbJJy7eoDDZ7YEBUHWQXrMYL5UnG8BqFbGmoRKWdAwGdcouRAafWYDTWJdweR",
  "key15": "5VTFG7y79GRDj8hkVj5UBN15U1fHfUoEMs98SS32jmcfCet4fP3oRE38ABGJigJx8MvMvsF4SSQqmbc9mkDNWVDX",
  "key16": "2adh3QJ6QzXXyXZ3T12eZYhRhwgbJViLJftpnwnFFmPY29LczBoCWrQUBkdJ1xv6G1uuu7XUZGmgAS7eHr7fdwxq",
  "key17": "4eUPtuNAfW4CFeVzEcmp7E4yxrS9p4yhEkzpc9GYxAf2FGrjjd5xmS9hNWRfVet1kRVVarj93eBa9Agc6saJCqEV",
  "key18": "63jeJuHvikbGUc6aGiRkMammWxg2UNKJ2K9Ng1PmjfBVNW1HXQsmaruV1PQN2PqCQLGWa9kEgBodpvACM5skxc36",
  "key19": "5ZYpsekWrWgGmVsKWPpaLwRuzFxEENFeAh1D6KXPhycgKYmycJain1iY5dhnYRGpaZiERNHgRG8qATSECJ97h4z1",
  "key20": "45r3CbQvWCegHkhUsqzbeTWgPqUUpNn3gwSCVT6fK65LWWKTytiL9YCcbyoGNQwhQRSchxhDU3H2fAKX5JY1WXjt",
  "key21": "533JHmF9CQ16NgFxuLzrL1Mg9J3Rq8nGaB5E3M67h4AK5KvtFE3uAdA5ByRgKXsk2eZPeqhWh6imN2Ay4mJv1LBg",
  "key22": "L4YQhtoHHvLZBvzAoidg7B6xfozcN26ExzQ7oGnbiN7mVaFgezsTUmLdTBmMQkQVzuUhHgGro63LhqukuYjGxNn",
  "key23": "3uasJeCaonHVTcCj9UNhcRXLE1XXyg2Xs9Q3KpPGQAkVojetp8SwaoqCx98M7YgHNsAhH4mtwFCDHTymTV7s1Fez",
  "key24": "2EbJt5ivo4znnVfJAoZBuiJs7JCB9ze3uwk1oKC3TpeS1uQtm3SXQcfdNYNGdK9Zj8mJosGtKFz9rkFSenE3JDnd",
  "key25": "3PkmJJFWQ9HGtBKwqgj1WeMkZq5vfstCSdPzJ6Aa61upAH6hncbDP3yKZXACH7QwpQQb6ZUczJe1doPkK3uGqUXn",
  "key26": "5NTYducX2zCFT8Tfj97LhdAUMnhoQf9HWQJZDFswvBbA7hwexp3tAsm7wiH2WD25zgJGTXTBo8HRn9diW5R8U4wj",
  "key27": "onML2TgzPeEQe5HVyCgLepm1jotBpWdnMU2UikakmuvnCrQw5B9D3efeKtDEYGPipT4d1VbWAKNzeAZfdgBhHtT",
  "key28": "ZeC1HC4A5FUaC8nBj1GVLdYsM7DmoPt963WoXS9BfWjhyVEZ8tnZz9ZiGA28c6BdhR2Z7ud2ZSaDveKTCUDi6FQ",
  "key29": "2NfxiG7xq4FmaNNgYdzQ1mYFCGYpCvSUmhdQwSCmKaMMEhXdJtF4zfNJWgdcVpZ6FKkJ5D2FiFSEHVxvLuVH2Rzu",
  "key30": "4HKY3bNpmbamPM9tKr687YX4q3UKHgkuGPxFGBJ6rZMk7pADf1RioZeQHtX3SPfCpPQtpwz1ZMHLoYu8cy7XYU26",
  "key31": "2dvgEQxhJ2F8wJrwgVFcybeidXfrhP72UL2feHZ1EM86HgPfPuZmzWEgwbQkecGEZYdL5yVAQ1ANwxYMrmKKPAEt",
  "key32": "3AHqPHXGngtjVNrRZgjoUecDpEEsVtpKysRniWjbevWxjnCo8Te91X1tKspQsodn95BoedsP8A4KvAhvcfpMj4Gh",
  "key33": "4rTq42emaveiQ33ydj5kJWwsuovpV3azXUynt3Ek7vsFdvCJLXmtJr2PX9Ye9GBYmYofju5De14YWfSGcYkYGchh",
  "key34": "5pJtmC4DJaj1CQexTGayL41VcUymSjGeGKe5MK6hUpwudxWtmgGzE6cJZUNT5DRAs2rpJMEo2MaAPL78AFZueUps",
  "key35": "3w2u9xbD19yEtUQPgmHPCpLiMCSS4BQQ5U8GijojVqvLDtiRrLwA9QhxtdFFhmXni3EXES2uRT7iabv9VKGo5rQM",
  "key36": "4B6EmMuUV9nfReZtVP1MxwZDUe5szU2y3edivvteoyKHcbWKFauW4KEFrze3CLvt71fbXHQt2XqihFD5Bm7EbmHZ",
  "key37": "46fLBXq8Cn1SRohVBpK2F1FBFUr7w89b92Px1HtDcUDVStyBscRJaNXvcwMDx6ZG1PmETvnQWQMzRucVS3H31Xa2",
  "key38": "518sPRvdbFwpP5gbMzRe9bLcFqbCoLSC3YwcTsNSSNjy7h4FTyjX8LiEQXAhJmMaRhMvXGdido7csDwqBK2u7y8",
  "key39": "xCNXWg6gkuuoFXsG2GX82QfNkbNXTvFg55XcPRF3TXNgcu9qwGojcy3LNq4sbeasYPP173GG3yt4Zu9wnqi6ytW",
  "key40": "5Y5ioUFEvJDm8AFQa8VKdupbC2zNaSqCen7Q4Uazr8Uf6eLaD6itjM8vUH18aWUQsfXGKRKLUhv7U1V9pMZjU1Sa",
  "key41": "3xZD3mHdxBTpiRCPxKwzx7y8Uth5DSHtzuwnvo6yjzKv1Tgd6eUVW7MPQBbBWprN9A47YXGV1iMbvXaK8Qa1c7NT",
  "key42": "3c2s4UjbmJj24CK1k7BkRMZTTzgctymkKXiuuQr7n87vJphM8ez8q4Lb3hT16YiQxJfcZoj63JVBa8iizpHNX4tp",
  "key43": "DEppdKzWV45seeovEVSscnqd1notA2immQCro8n6f9U3LfWfoA8wKaHNLmxHiKr2EixfZiGE3WSXuhCXweygWza",
  "key44": "2QsiZK8XuxbPwqKd8eRdvQpJijBEnPApekqkrS9e5vEthBPa3BUFAzFZVp4DkLDgmWYa68NW5Jt5K53kTBvp8XMe",
  "key45": "AHxWz4FrSsXQrkQcv2wD6YxuRfSHiFELtq3GMrauvw8ggyBgYn4q3pNWegmGYm2Tpz7XSQCR93X4P9Hd9DiAJAK",
  "key46": "5s381idwuXuaXKuEUkhSyGP8ihPjnT2oHsaBaWrxCUrfjzhuZQiKwJC1JsMg3qib94txFDyrHTmneBVNe7hQjKYn",
  "key47": "2QZe3wguScNbeKqYDRcUXPUwRT4A34Gp8HDGS8EXJYFmMSTwkZo5zedvyPGRES4GJdYmRzJ4nY8nogp3kVf1F1eG",
  "key48": "42ZGyra5iPhsYGmBA5Po8NMeZif31xMEH6NXZ7fYqK1FzfodhFkVRYWCdFNnon2Rn94d5V77USHa4yiXjqpVnpKF",
  "key49": "51gzHnTyYd5DtNcaywxcMU5U3sd156ZWnaiNBKf7NxDLfVASQcabsUSVuEYWcjLNc6SLb3bdbptUENjjRAbySzws"
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

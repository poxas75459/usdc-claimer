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
    "3HYEco9Cjro6zer83prRtf6BKsXTcNWfR19khMKVgTns6U3Ad8FdNmBhEn3B2acuPSnF8ZgE2pgwTojBmANs2hXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MbGWQuKRfwGUEcCnXTa6votjprrSbC6JbfNYFaXjE5RArXyM4kCzErx8hGEF5LpjCTqTvzSPNJoVuLWs8KXQRez",
  "key1": "3QMBuUNp4DMrqBLbm2jW1cqdVJYrr9T96m7433HPKqUnrsCecXhc9JEuRUU1RJ8PtH7qGXJ33uRZ8oxBUWfjPpLE",
  "key2": "2REZ6APYMRXF2aWDyHkJKc3p5Rn7PtduCxXAoUibTuFG9hgVtMNR5ub7Neg9B3QjDuiHZ2BfGLnAd2tQMXvUaK3o",
  "key3": "34DP5KZCWa8PACmAJWfr9sxPEQcsNwGhoZhEDA6BfrkkY3jbjwHzoLVhgv3W3ar52FJBVkkUNwnpfPRgw89FAfRd",
  "key4": "45hMLBuR2bjZbgeeCwEWBJsmcXSUdiw8Wr8vsC1XNWTF5jZNLhbEo8kfsSvjjpCCfxhUfjDGkfKN2kSEUMFeV1p8",
  "key5": "4DqAzajESZbBVfpWMcvZY1iyE5mHMnkGEjfScyvpQGhTWrWkdGdAjiDscHJUGXtZoV44w95FwGzEgNxsvUbhrFjb",
  "key6": "4WhGZASQ8BNC8gmXfp98vD8gWRqqVojLFq8asNAzWB6qYJbxaYRjzdecB4FXoHGusrWboBfxVc4YTHeihRLR9uQp",
  "key7": "DJEhY8FwSxtoQdQ3saEcKmzXpgGy2wjaL7pAM5oSXedHGuvBNBxMp3fqtvzX6UPqWrqtt3j4mg6oHCC41Qtvtj8",
  "key8": "4uJ7e2hBMiGt5NVa4f3qoWJpW1j8L2ZJh3pzPz8bkBVsEN5UDxaBsH1xBEFeXYsj77Bsm4QPo5jkkZag8zer25Yw",
  "key9": "CecUPxvCVGEFWaFbYnnE48TwYxY3HaifciurDhw5UqnmaY2VSW4wMfLSnx1tPSwWg7JBHhsRCZQeob6c5ovtSx5",
  "key10": "WvgYn8HTBAM36n7ZCrtLhv9DUybid2h35HDyoHHUUkhR7Eop43GuSiQuAxzkRA9rMn8vv1MWY1Sk4zk8KefSoPN",
  "key11": "ce4R8REtbyXF3aUxgbKYxpE7A8A5r2ob18rG4179Z7DmyUK7o9wtHRFXebLmM3wqrre1ZYQi7Zn5jrAZLdHSpYM",
  "key12": "58AWHAaAKT2pYRebPmmyrxruSNDP52nKq87Gc2m1mVBRibLjfKbeu97dfRnRB62Hce1JQA7759dtuopfwQLDWm8k",
  "key13": "4hroVybjYtckWW7dvTSY2tM4yKdDogzX1xFM683B91oCTXuzP8gYyVGayFz4eJNQBboiBKUKQ6APzBgEw2emi2QB",
  "key14": "36PzZHVs5XrkhcxPkwVd5Cgmar39GkRPsBLL5DrPgHfEU8UVdAeK1DAL9BAd7ZtutpwFqbQm3big1AP5Z16zGzTi",
  "key15": "2v3wZU372FBjtcRQwwBzbrA4h7Ztriz6V9qaouEgpHdqE8cddgwe8LBLfyWkdAQGnpKd5J2kUxat2nrRwpcTTwam",
  "key16": "5zpJMCit26ofsZ1j8cp7zaJXn3h3T8zXtpFwsH7kqBQaKbE4eZastGMpmsU3UiMU787HY4QRbtvdzwv7u9s8e6T9",
  "key17": "67Cj46LtZ1G9qTc2gDACvPWqgfbqsWoTPHyXSXdC1ZyDJsF4sJbs5Rj8WKi8RNgSxEDkMFPtdA4gYSrJHAwz3naN",
  "key18": "YGNrde4tVremoy6rmyWLUqxkSoR4ZKYLjKjKfMGyFt3RBGSgQjzYoBwa4uwi7Neaurxa3m3cn89UHhKwiaz3XAB",
  "key19": "41JBGVqH3cDPES4L4WN36CdU8YSokKLuPW8DqMpcDyxGMtVvpv3nbzSvgrDNAS6RJwHfCBCjTPzbPu8JEVPhdK4c",
  "key20": "3Nkh5nXWzArXjyXERKoWTUVDYant8BLVLQFuKkD746QAKvoj4W2iBMj3PyqmC1viaQ9tCMnU9PZqVnhhwBpj1EdA",
  "key21": "4oXsG3PMVHjFftopqxRJQX82K2jnztqw8p1AS6a7xpMP9HHErALahWDaew2E8J8F8AHHmkscrHURsuWkzBg7H43",
  "key22": "2ASX7UmiYRCzWt4pmYSrwjvMAeLnK3GSVWZ7tPKcHF3DUCjNJPucUYuQtWAU6ALuBM6o7KtWSEz96ohtS3pRuRhx",
  "key23": "2urQxKceLZ5QVNaMmpykHAPbQigQE2zGVmCwB5xxmPTuM2tzbAHuQBTpv2vjk9iHd1tzgAHq2SnfxLA14L7JUEtA",
  "key24": "LmvhtHgAYtLtyiPRhQa8bYKfx6LmBVvDe1htqZNST8ndF6Ui2ZhKdcPwcZZbWERuJMk6NkU922AKrEJ3xaAZSxf",
  "key25": "4Q9goWTvSuKQwK5h7jQMpxJYk1ECrSvHnTwtANQVBJAXANU5iXKMzxRBQuLK4QMdy4kb7V7LAjboC3QiBwgv3wKJ",
  "key26": "qsLesAmhsk9pqvxaxrpctAktXi9kqsFMmarbnmTvEDAs8zvWoMwsMe9AjKXdtJcMNpS7q3BuGGUJ3og5H8Macc7",
  "key27": "524swnKx3JVpJVofJYjiqA8jPPmucKKTNzde2R2zQhQr94BV7korn6J338bEMK4M9NBLHY7UDNvUa5U5rB5b95rx",
  "key28": "2E8JRhMT3Af5YZiCNJLVPeZrJGncVcq15gxapbVXQaf9XiCja7pp2ByXBhKtDKP27x66RwDTC5HT7bpzc5i3aEC2",
  "key29": "4TANxz8SuSwisYKjeMwv72D5W1c1ycg8FUjBa4kVVsYvYDpsbHtg7Lmds6Dx3kJD2WPfjvQ7ux5ins8jCiumrRcp",
  "key30": "4fimJyEgPZBkZNQm9CLRMerQduSEY8tvCUNgEQf9ZefznPoLFhyLFJZ4j1tR4twSbATyFuCdb4fg5etgEC6PjGEz",
  "key31": "3adi3eV1ctf7VCbvFbKhptFPYxkAm7ucL82Rt6RN6xyiwxTZ7D49LZv6tgH74qUpobiYm5tx8giBee2hWBpfGXD4",
  "key32": "57LUqvJDnRTu38SUnqFc6KEefup7ZETGE2EjypzdKQLPrH1YBr4eiw5dnMCxyYsGeT8GA4xtyNiSXizZk8XXMEpk",
  "key33": "3DNivCaCrpg1GVYhPFRHaFefXdAdwotcs7hGHgnZ2rVfB86nfrUFL9MHFhNJSzfpvVw8MRRVcqFrH3aLSFscJmDi",
  "key34": "5h5T7QbZqSaY2jwbMPZExGy1nGNJQL7dFbNustJKpv5aQvVDGJiXRLnJyE7NNWa584qg6SY2nUYzcUGjUeEaGtfu",
  "key35": "z7SRF8zTVpiiPhc54nnoHQGgp1KfRrcUmgrFniA6iddVjH8wNE5gQoGvWg73KWQaURB5261j3aNHFzHhV5se1Y1",
  "key36": "4vxe1pniZ6GkmWW4fUToC1JGNivH7kkT7fkmrYqMrE4XsSeSjPd648iYzTVoac476aLoQBCwDJT9HjMD4q6z6xan",
  "key37": "3AMdoDWph5sqb6as6LJAo5kURTqNtYMXaDNMoPWwChQQZGFx9JinYkrkaLQbA9Cw7pXdDAoaq1CfgbQ9WiKCoufW",
  "key38": "4SvrLzquZof5ULdpLNb9ukbMtRsuRva68MYs8MRkVYx7D4dLqsEEm1r8xHVsqYqaFojXjFESyDLmmdDZiCxEy9Zu",
  "key39": "4H1BmHgLb4KJRvwPjxVqDRxb3HoMrGSFGLdBgYTXYCqZZASuTN7bWLdDbJgb1ax63DxxzjEbCbnVDEQDiNREW2jG",
  "key40": "3XqNBq8ELuqjbCuJS62ZYJJHHi4LcQ5zEbccNpCp1kNoJg1sEbrX8MDPpX9pz4d4gUDoY5Wh1Bqb7mrkS4HMBe2W",
  "key41": "2XyWBt5j2UgAat9trgonzvMMYL5j89oVxqy955GAo7tA4RKDWrocbsVzM9bCN8A2K6EMpLvigp4XMDEpJR4vR5H5",
  "key42": "4JvR5YAnaCSb7EBnZDD9cpffZUTENh1appnjgcGwLg61bpURbM5mbkGVq43VZV1nUgbeVC9VtW7XGdTdu2YNNnaV",
  "key43": "379GNMdo6nhuALPAn28o7Mw2RPJdy3Lg4Pc1FswUQpX1jq5EyG6xLzLgyqEuybGenndRyvyyWiEtrYUg11PftuXe",
  "key44": "4ceqvQk18PhyjruCEMk72HN9dqHYQpDiPoLtssN2btTb6T3DoM68T2Jy2Eettq11fnf3Zy4Tu1h4SzftRT8akV97",
  "key45": "2ZQoFCfCCz6iaRj511Hq8kANNS3bWWvJYpc3STkLLMfjcpEoaiepMrBWXyQNx5foNQgUJrt8bryYwCAV2kYKmFt4",
  "key46": "5cw6PBmhQudoEqre4M5nLh13LZXVkNcWK5iMXk9gPh6vFeEse3WAvSy5qN77MqbqwLfp6Y5sPy6vCHLGCKg3DjWf",
  "key47": "2pQzd9jghc1TBR2BbrrkCx5dU3vLDzfkEjCHAZUUXbT8W1Vxg2svjWByFXPUSijd3a38WHANuVfjDHJEZNcpMNpr",
  "key48": "5ro9t8LPqNasTZTHCJY6vAnKBZeY43RpfedejvTVSEbrhsjWjaGrjYCU1t2DX11PjJYrHek5y5vQPk9APraQYhvS",
  "key49": "4o7q4JxR5KBEsrYsFbVWPb7HZRDYwtP68mDDojQLGNhNa4QeXYUo1cUFCHUbAbqqMZW7tVUyiDYmd1799DWbqdAz"
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

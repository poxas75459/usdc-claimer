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
    "2kqfzdw2ZDpRHP4ed8zUMBC6Li3xikKzcThjrX9MhHqGkrNEibNHoZVcWnMMD7MK8hbmMVhLhjX788QRb5wNQK8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nZkWLJbH7Wk1Gt9FBMjkrHtjEUAr1iuV7AV93DW2MzU28QnYhygABMw2tfyZM5uDKth7EzJmEy92J4VWWoBDvmi",
  "key1": "5qre5h3UTESeKrw8xMgJ19UeSMozxE2skLUJbs7EudSxevJaAxqreuv5qwtWM7sB3aSMvhZNaqbniBx9jmb6bFVC",
  "key2": "3Mrk9iq2RYrXEQ1dFyGVXuUbqeM3rBiEGJsngJUMMzUBkCoqdmHJYYkkFju9Y2C7Vwv1wqSLvgKEe1HMAMkTAc32",
  "key3": "qYQGCub8i1NBgr4c8JY7SvmMi8PvDJXkSNAgR8Woz3nT9zYcyJ72sicf47R9p2R3KfMS27JUY2a7FpsWiF5jyNb",
  "key4": "5BNAm4erDntjCrjETxaeStdf9aEseE3xAX5dbzEpfhyYZt65krWTS7ABn89wEdrnea9acmzKxGB69FDEEcRQKAq9",
  "key5": "qFz4sWzTMTxe3e9Hyjma5xR6dd9xkyXYGwXScJGtBc2YAPtf9w8S6QdQs3mGc3Hw46hKEW1hSXo7je9KrZwpwoZ",
  "key6": "3Tq7Kt13EVSD2WS46kJatcBoERcwxrrWcfXKcpF1Cj6wWvhCSTCi1tgsbGpGe4gtMkpTpskiu4FKosJVku3HNitr",
  "key7": "41REUBrsybysJ3RfSbABbArV95nYfqS9enVHE1XWgTd8tkrzfx2jU9vguaGFBLT7emHwi7KHHK6Tuerztkya4qQG",
  "key8": "5qBvwXUMghuVk5uSvD1TVtngewtvGBxpbYmKJ7AdNn8j1pvEKTv1zJu7dWPVho5tXaKRfUoUHkfsvxU1mJgVkfZt",
  "key9": "4kJcxxHAW7ZGucwYiEd3NihZSH8sJ5DJ3qDukXZYr89q43iCQvfwsn3Nib6pMtvCzy3sSqsBwX8pAybaK64k9qza",
  "key10": "XBhcJnhTx89Ad2oYaGV572u2a9QpVFzA9KG2jonQsuGtiQ4DGH4Qk8Z4Qdid9tYTxmtbcUQhKugrPVMAUKezRL6",
  "key11": "3s5PFy5zg3L8TEao3Y6o9HmbvTXVBLVN1sd6VYWKCzDNTu55u8Wpe586npgfEWCjoWZuhcn1LyQ3RP3aHqLpV6Vs",
  "key12": "5591SdQGVn7FNtZbd7YWA1aUtxZRbsFKXRZCswfmcXnt5FfHju5ifQtvwiFxUjRMqGPYmy8CbUZYA7x1CEwoWqhP",
  "key13": "25J73PrUxrQbLtJy1SRTWPuKkQTF9KBwjc8u4qZXS7MotV7ck2XeeztQRnuyRb6BkPz1S3LeqEUiWRxqLZUnrHaR",
  "key14": "2GS9sE8WNbF1W8j2rqu9ujsJJ73Xb6DM8W5GQHuGugSEkVcfku17DJhQhUtVgJACkyFRt3wiWAyRcDrSzAW7Dxhh",
  "key15": "47kN3k8Z4FhofoJ8yWBi35nYQFuqf6ci8doxUsMYSScfFtJbqpRkcSvBnjCymFJPUbMscVXJrJWyENVADb4PgqQ3",
  "key16": "4PhKvszmgqp7EdEDFhCGjv16s3PorLXByMHYnZNCDFT8v5YEUae1hs4xQeWYmVc7egRk92ocU27zuqX48UoZfKA4",
  "key17": "53dW6gY4zSxwcaEUxcGZyp855mFYbH5Mg88u9KTowT7dNForkFZndJ1uwSdbFaDBiLMpedBCuZidKK2uthcCajEM",
  "key18": "5WL3RYMnurVzDY9ofEHnCiLgFpc7wfyVKXWbWDvuGXxxASfnsJRPVRLckv14RSMLWA19shh93gPPStAc4DqnKYp8",
  "key19": "5VYxBtJVCbm7rnU51QFzPrtLGdUYZfc4pwnFkPKfdiE9wZAYHfigkT9C2MoEsvKfiV6drX7nXKdVdLjMKTqWzqQ1",
  "key20": "3BdkUdNAtt9UzJGcK6ghpag2jRWeE4jxtbQBAtn9z6j9uph64Po3ofyA2T5D7LGY5FYo48wzsqD8aYpiNPayyBcA",
  "key21": "3dCbKzsP2GkUKucdnWD8niBY7qHoYcUZ4nCQWqHiPGvGo4NNASyLRasmCRhUKdrrasF1M36s4fjiJjRrrvcQuEsZ",
  "key22": "3ocec9z3JMku81uLy6E6x2sU53Xr9kyH2okMXb7Dxsnmv2zZBuhU9JW51kjWbs31V1TGsN18jbtMNLZe76X8wDSn",
  "key23": "3jwq8NJSuKov9w5NhmsebmaZGehRo5axmfeoLXRzpPocfd2TDLV2NVqwprJTPsDSJ8jvxivgaxwzLt4FxmufZx1Y",
  "key24": "4RbfJBaTnPpDGn9HoGdo2WbKctxdNeiX58vvC8iQQPcviwWk5U7YuYzngDVCDf42vKArETHrQwRiug8AheaDmHvY",
  "key25": "Tu1EVCb7tdm8T5SBS8PkFHPRpZVveFGJYxShpbLikZhYajwjFM7ECFHdwA6JuhD9yoEVbxM5hxSQUUcLM15Y278",
  "key26": "4ArTAxK7m3ZV6jHcAX7U72dWVHS2XpNuDj9wUjEfneDbiMn1LYxsVvnL5q672qnBXuCdMwruGQeQbqAUD44Hqd54",
  "key27": "B5A8gwBEJPWPNxci21jDhoUyd9Joh9TNqTqd45unCBeAcNDP2aRGDJdPWhy9i9XqPtAga19kogFWAtCuMu51Ny8",
  "key28": "3nLwF5UzaLmr2d67iwBR2aAMRKHZeFXvxwLr3nk97nJxLJsZCUE5F6uAZKXVy5nXEyjYZje4H1CK53xahRJVMZAg",
  "key29": "4U2gp6g9rL8GN3WTGSNzd7K8fEcTodwTxbvVMLygzh624xQyhqk9ocK6kcyvthbFbm7DiHbg7B46YMUGDbsGceon",
  "key30": "3Zjd3wj3fUjD2KKNZRSVcRQaqiWsUZ34mZggeybH5dLJd2aJhiYke1W8yMQmGQuZJnL8PKbgGm8pwZZBEbA1pibY",
  "key31": "3nwqsPtD9jWp5UcS6e5zetYjoy8fcJJtTGa2PdxD4Kxp7ENa4WivaXcHDrR57aCvs7KwGtrFnaeGh6jcaANpvZXn",
  "key32": "5krnJybF5SSyx2A2Wab4Q4XvepsS75HTS3LPPjCuHVTbEMwcN78A6BWnB6J1NMTyK1UTrhpuMU74BNWACZY5pdSF",
  "key33": "5GeJztU7qyKEbMrPUsvYZuonhjAG3UtruWzZ9J4a9swo6YUkVTNqRrrhW1MtjyZM9YJbYWajVsNZxBVvVXJMhdv2",
  "key34": "4WAsoRLdrAJFSXtttSDDWG8kp7qjURp79BEp2ec3fsYB3JF26ygjoWpWd2CdYuqJCLxX9EfqTwHA176fC79GsGxc",
  "key35": "2dq3NFhuPRGyibStSA6idnjXcedJ3yLusmcBCgLorsFrSzxU4ZFeuergKLFFuzkATMY76dWuneSYy8RppMmfeRfC",
  "key36": "3W631JqvZq4ngmUnt8D6XUG1eUQscwvfHYJT1xYyuG1Cd2qCgs4f4S3bniZVrTr5rmUDEQ4BwmNmKnsJnsM62b7E",
  "key37": "4ivHk3ccwUiiUWRM11dnzdh7ooYQAhvKjs44zkxTH6FLAgTbRtLomV1kRa4yjA5mdCd2sfVfNn21hiqXax9RfQCj",
  "key38": "2FzchH5gSbTWc3HCnxzTEXnxeFnufe3TeXkYwGjP4MW7xvkRaCZDSE5Z1woYWbJ7xQp2a6X5qsb2LkjG7yzWPNc5",
  "key39": "5CodpCGFnAtr2nJ8zcqBKSvMngQuzZH2wLURJUCt18AtWAuRWWibPAPj83tXbfruTy5EiTwB1ExmWoBCxWyqTYBt",
  "key40": "4TAbVkGoJ1EZK34nAS6EjmtcdksfsnE5Jv19PptZyXMNHnpnUJuKLEnssduWvz5eRYYLGGE89LhTXU5o5DHhuzLq",
  "key41": "R2xdWBH3xBgUWrSWWu7dSvEdKdSyFCx9buVYuYdstUc9o6y8XfDW2gDfm7L6JFFfbMo1uXEaiJHVzdmmXsfw7ZT",
  "key42": "2sYpQYjhjAEvshcLP3THfTs3uyJm1VZE9tSrFy55wgbydAD2fLvmweZjiCzoeP2D7hJzESnqE1m2V8kuaZok682f",
  "key43": "5LhxNzg1LLFFLQ6UnntyWFagUDhrF4Dde3XJCMYfDUQ4UeEnzhSQAPJHeGpFdSDg5Lv24fN4bvGRkrRbqbHgjtM3",
  "key44": "4WdfT7NcDQheLvAQJrBFfj7BM9e34R5bJ8b5vvqQQiCJh89L8JFCBW5y7toUCGTBhaHrgHFSGNyaWmrfscqh5X5T",
  "key45": "34up6EadUt4p8ioWH9ZfcGx79QCTLzpaKGF6YhSagrbpbyVTLmAQT1iy2xotbr98YZjqP251pof6buLp2fvT1J3W",
  "key46": "4F2NkRi5Xqu32RnakDx47qqPxPF1QXJodzAkM8LiBJXxy8pytQ5J8S4Lf7G9Tjh4BnbCXXHWvKgB5aPKVCjSK9jD",
  "key47": "4K1qwTEkzbY6r2M4eKqn19WqgfZfGAHV2a5PDBUUj5VPRGQt6rUZKQT1zw4eHeQ2rAjaGzSk4xUyP32SEuyze7m9",
  "key48": "4dJkc3EYywsXeuAvVNbZcgTGgYXSzFkkjEnGfWafMWBMzCgtxV5M1Fvtr3AgMrtWY4GcVwPjStpy63D9FzwqkYU"
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

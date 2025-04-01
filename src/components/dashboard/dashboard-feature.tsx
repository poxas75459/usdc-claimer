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
    "4zcjqrxwWyayS7afUJFBvyGh6r2SboLwJAveMX1VoJyWBr24Whg8RqfvmXB2mafNdUbRKK4nMnumvuykcf9bpgua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V8KMHKEpaPPs9UCxr25c5qW3Xzjmwmxy3xxXtE1BCt1WhqsVez6hFQjDk6sLE7eByuNkXWEK3JzBRWYgdxwqThs",
  "key1": "3VHtktuJ1kpYQzfX9XqjwgQQQbkyVEKeoVrrrQpWiU1g8VYLQW7d4U6F5tbtLvGcborhVMsU6Z2gtskUuaVBmrru",
  "key2": "3TmBb7XuwtXKwDMquryxemaUytJ5RRX8K7Dc9m2vKBERSVDFEVqUoeBeoUgRfwzbjRAiDN3RQY5RppG1nnXz8u7z",
  "key3": "2UYvjhjfhFbfRgY9sYpS1jab7BnEbK3QrNbddDAwWneec5bEyN3HsUAnm8rBn9emsqbp4rg8rphTAEJA65H6ST7Y",
  "key4": "3W4M6c1AkJCcYPpjxTWJerU7YUWaMmBgHt4BGh9T3xVZRXT2AbaTaB3eM4FAmd5MzuVtYJN4Ewh8wN8sazBw7kQT",
  "key5": "39e5BZ4BbPtuKBKfAyb5eDr5ymm9jzDACDu8C9UGXMQTcQjipATdNE7catMQW5GzAQvRkTmHNTmMvfbhLZAmy9dT",
  "key6": "fHrK461W9ChKeGFCFK3usZh2yN4CBgcQK9a9uojN7gBsYxCZYbxXeReHpdrB5g4c6FE8yvTdHGW9xfE12cxkk7M",
  "key7": "4QpHquHWEtQb8ULcjT8AKp4xCa7wF4iPme5NxVREm8VEriK8nry9FaqTX6VFLF5iTymeEDDwWfVQ5Kh4F1UX1GaK",
  "key8": "5XFWUtA4XcifRsTF76DEMhXwv7nEXkSxLYNDccHDuXZPt2df1DPqqq8QVXbR2ZGAKeZqQq4ZmwJjSbc4DzkrCaRL",
  "key9": "N2FDTJ24gFbHhEu2ptNhxHpLkHXxh1YYMRx6x69y95pochfe7rMLo1Uk9BNDxp2F3AKcfdGcM2qekFik961mwQE",
  "key10": "41DnTpqxkWeaUdpSvaBmhVpV7zoituaMtC2sw95RDkBCZU3P9artuzG25XLGzYCiNVUwR86J9vbMrwFwRWByf9oY",
  "key11": "5MS5643cXRHS6Y2FQCyU1nsnoYyxunHTmMtvqqrTefb29vQxox9g8cGQWWrtnbPN4zWuUbUjXod4grpnaAoNSyNH",
  "key12": "4GRBmRJ72aRz4Z2Fdc1NuuQ46QkGSKp9tTWYisvGuKsLT2NSffLJRMpp1JwJfcet2Nt4rsfaihLCe1dvYaSCKMey",
  "key13": "3yZDHLfXRGMwNxDmmS8MQw9TXLcD4rYcfETu9uW5Efxrjg5MTQctY87CAXssY3oFsXewH3oT83rFeRLJhuUUaS9r",
  "key14": "pePmghXmJ5uB7nd5ZoNVpxgHD3sRRTTEp4ckajXLXPvcSyeCCknyfvL5fahBtM9SgKHMYsEGSAn3c1YpaYnkD4y",
  "key15": "3VAMnoKHoTg4C6NDoQK7jAXe9iTT3Q2DpYsj6e2fbSzNxSCxEmVRs5tBbjrEaXMnT72cJVTBBAvwSvKgXQbohCt3",
  "key16": "2rTBgyi2rMj5544ugk6VjtcJVodeuRojppweFnhEoXe4Nfz5Qjd234GLaDMDmTsrE99vx9U1P5QnNVSWyWcasLTU",
  "key17": "2es5dDL13eJtcEK8RSA2vUjMYQXEfPRojAcFcQat2aiBPozoQYNTewmpQERwkWoCr6L1KKWbhB9pY1wgLrJn85Vh",
  "key18": "34FrRi8pTj8jDbRfH7vtLx9qFktJzfaXP8W8drGYsPPMdAMvRWQJ6gZ5XbJVnp3YiA3nSDzwP7amef4Uk65fjji4",
  "key19": "U5WwbNyrJmLRFbRkrUhqEya7tTD81DCHAWtPgNxcJrK7dchA1E1B5QCoK9jZDrAXTNRLPeYmLW1dhAGc1mDkEc4",
  "key20": "4ZpVe55T5Zw7H7UkmuYnwKC4Kyd4WuzvzKmghTvFDAhMYJViWSHxPNsSWPChAo2FiCUSrgJPMdRHH4ExeMdm5MxL",
  "key21": "5rSvCjB4DVWEHoJhxBdv57YADtuLe5bVeLkGJVjKWGuAXqM7jg959mZufgaDFBz48cbUKgGP7iPUUihTfm6DgdDL",
  "key22": "2PuVrUZRFFD3tpWiiyiDLmYxGQUNtyPKT4PKtVXtdRJ1KG2J6VezBwrWXYfSGdQ2tsruQQ4S7cejvgqPC5s4MAka",
  "key23": "3EK3a7bE3jDY7nNZM7sKm2T8gjSGR4Ecoz7jcKhDx8oCc3TJUQvK8udLtaqMMzbFUniEu1wV98aYsoxaf1CRahdR",
  "key24": "3aF1hj71f1KJfpWH3tCNAumyxPx2L4qiBJa3ULAaDjig3hYorE6qCQUYzxi4XqXwTy5JSPH4kYnSx7Crfjf17nX4",
  "key25": "vufDrLUKw6xigw8YgSmrypLyqyPe5EUcNhYquLxutq7WpcJU7ckrz8LeLCvhr5wxBKHAsjiygnUnescLfrimPzU",
  "key26": "Ln6bhwFRcHFfNfWrYe8TUnvmMyRrRFueVi5nTphVbWzZkfFu4HrBswA9KMi5GkAjh4JqbUu7iK5jM4Wydq7XFWk",
  "key27": "RSzYJ9dADsHe9My3nftZxAsLmfTgyGBobE4sEB8AYdFFk7aqmAsEjyNvf37i192yZ9oVjexKkdjRKspg8ygY69J",
  "key28": "46zEo1Rg5fYJakZuEEACohHGzPWURBpkzCELaUigdcMU3rYqAqSqaMMmzs3JpDNt99cDddkKP2zm6Ljy1uLcjvhZ",
  "key29": "4LXr288gTbE8SxqXmFxkc755LNAfKsEs6J3NgRHocsssbqyrwjZ171rEG9BPC8PU8gSt7jHcU4eajUzuRqaac7qa",
  "key30": "3jXiuow4AEwReBnpbu7HyLqTCp137qoQwxJjzdzyuUdEYHY7tsJdcwxYJdFzmuhbApJvoKtPCvTgEmPc46HnJXeC",
  "key31": "339MUKRrqGJvNGKTP6EnKZavWdLU7iYEph8DNfXba1uK3rfh1pcTdMT4ePrsC7cJkx7EiZHdB11rxbmRr9xaA2UL",
  "key32": "54Lo7bZrWeDuULzpEeUrNUnQDcQKoHaRhG9vCWi9RmqzigyNkoRUY8DWjvUizTgNPVPFScgpPswG7fPXJkTXkNX",
  "key33": "2vPeDiUYhz6xKjNAi8A8HPAwTxSnDPxXZMoEWyfwH93MZCxn5sdAW1YVDTCB2VUyxX3P4moUidyVzbYpNM8jDRuK",
  "key34": "3VZsPs4bBu1rXfJiTiMBMhaTVag8Syfr7FnqtDweorX9qLrBdGj3AejgHRNrSzriBQa5bGwrYEdHzypUtz7Ep7MP",
  "key35": "58xpPqUJFSsF292HKEqg8UMynXKQJ71Zssp4xaebe989QaufL9JC6VsZq8ubQxiK2bEqGmJtidPRJT9eBMxZ9fNW",
  "key36": "CpwtCMw1ZYHUVx9gT3apJS6uQWeH5yE6mp73LDYuuiYk2rVvJH1LBbskYvH9bc44uEsUB3ahHirJ5daH6dahuxy",
  "key37": "2h74SLG3GtW5eZicVBLiU1nZ3vtomyNQLPtzaBfttT5PHte52HkiWR5KuMPQFkQBUXZQ1f73A49Jdxvtd6u5zpf4",
  "key38": "4iPw2yg6ZAnfAJRv3PQ3AzTxiPrFsrnryaXQCTnzUnwFJ8W75Sj747zTypLNezihEAwNCDSjU4QadiL4WA9Qaoza",
  "key39": "De8Hhb4zff5uvWRpboMkMyTY5MwGXuw5yjyVA1cKz7rFp4eVBUVAvw4KCCm15UrPSnJ3V5MKYo2iyb5LgAFEr6F",
  "key40": "2Er3z3eFuiJYUijqC6wmL6Jt9nDrvq54d8s9hDtEZVpsUuR6rJ9GnE1sjr7qtw9pHTGHVtn4ZLuLavxzrWSzsjg5",
  "key41": "2uwQvZekxWQvcEQdFV2RC5pBHPVYNKvuwgQaomQ452J4Xm7PcmL9pP3rrHLj7a7DFdwgxrTMDKKwBHqgU384W2if",
  "key42": "424iDV6C1oSXcrtqPLy8vHY7W4mHRMhrnxsiG7XHcx1gqzLivKc5fJ1bMY8H4LNpWDbF7NpLdCrpxF36Rkq3sECp",
  "key43": "62652b4wf36EhWBgzTv9q8K9fPHsESdNNksMFKk1yMFyi56HzqBNa9vXnWhtxXeYx1LxFMSBQp2KzEohar4DDUne",
  "key44": "3i1ZXsZbfwymmo1ydKdFuMn4xHFwVHDvEwFaoM9DM2JX3Z54q3GyMPDBuB5KRthPfpjcedL5M8zASsC3WqguUXf4",
  "key45": "GL5yhHQ8TLJLwUQr7bxuYVzGdfHtDvcWXxiqBc12FkgiVy4jafR8kRHevkSiEjJwFP3CvXtYtC61ghm6ytsqUKz"
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

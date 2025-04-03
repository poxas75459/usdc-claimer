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
    "baR71CyySoAFbkJCeSraxdEgSc963rr2ibx2AJTuvqm7SBkVoim5mv3BGTGUvZfwXsf9iuq9ANiqHXr2giiu8k2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xHu95rTUReXkn3uxwYaQZHGe4JV5TECjGoJ7jPZrtP4UkmZDaVq33jPR4Wns9gYHWxZPCNVYo3nG3xMpw1i3iAR",
  "key1": "3CwCtw279nLThf22m6Y66sKr96YnmkB1vmvVU8XnWb6QQX1RLaJjubb2yjSmSt3SA6zkgamXU6AaaPXKopswUvQj",
  "key2": "2VnTm4ErqJ52mC5bfkBkWW4XrZuT8azodgygmw1B9nzJxYXA1x4uq86nWh8tMynGMvt1HRNyC1RGNDWAbrzDzq3X",
  "key3": "2T7Wm5Zzp9FvoZGFZ1QZNB88SJCc54djczzm1MTTEa7NjQLDfGtKXR9UoM4Ci9w4hFeTBA9ppeMn5f9Rgzxw2pZa",
  "key4": "deSi7FnhwZ1NWXrfeuHaEjG8PZ9x5BBQnNuGLsnCyfFnRx8dHzAioaqHEv5eidVYrk4LE9T48eaCywp77p7sGLA",
  "key5": "5pxyFn6nQBYen6aes79ajKps1VFRD5uQav8bbS9Zi1gRdHbL1enUEfMcqApfsQccGvvq81W8TtyFVgwwTuA9JsxN",
  "key6": "5Maghsd9FavFHLXXVLzQSKosP9bSsZWbAXib3k78eXp9QHV7fXtNnerZXPCZmmShcigp5MuK3trzYyyLneh54g6F",
  "key7": "3d1bxXVAXephtQU6LK4msSbu2TBDG7MfPo7P7tWbCzoHuTkftjtKuiFZPsvD466pbDrh2U78mRK9cWrmft4HeKLe",
  "key8": "2bZPioCJimdRCnvP1cC5NqKoax4mK1ZzjDgAwj2F8yW6U9KFssVL1th9PkraVkAWjAufZNRvft9CQ6DA7QJ5mJLa",
  "key9": "52J5iAKpEBZe94bG3WaJX8NcnKAS8VXJQPdMrqrLgNoJ7WDwHxWhi96HPQrMo5ShSVB5iqfMF73EpapLQ8HYuq94",
  "key10": "4CGBWDZsmV8VTGeainmPd3AQCBoE4F1SQg4iStAjuzDr2ZdJcXS7Ybdq4ndoHWBaTgFJJcBmkgDkuAZddQyAc99v",
  "key11": "BmgEkezEZXNRS7eSZS7cjJPsgLENpAdVnZQyXiggGYTNCqHqst8PHGLWwQNNv44nzCZU6qubDB4FRYLQBDedJbv",
  "key12": "622S2E13MKtZgQx1keNZvEHowMkwHvHwNTdwbUGRuF3PhS2BsVoDi411XMpYgTSRJ1Px4aP4hKFELk5R7byaV2fV",
  "key13": "4jZ1y9fn8pF4G7z5p5kVoxphY3euMMPqM6yHG2ZuhBPryAmujH9fjXbLj4VirchGwJLvEZfv9HBURMYFvzxJdR99",
  "key14": "2UAyrB27aecQR4sT8rq2Gh8XhrwtoN5niV2Ri1tq7qRrakZPp1X4unnJz884o3qMpEyyrLiQzEJR2szujXUivDR4",
  "key15": "4KgsFYy57Z6Xb4oo6PUNSGrHh8MzxhQdxzsw9pD189CocMZdBetkW9P3Ypu5TZuR5THPkALme5G6GCsPYoNEfjGF",
  "key16": "413iw3AEWPF5aALbwhax47bStEjerhWc5Aw7JhiZA1aMUAWprnHuFxjVxnkAtCWpkUpkqxchVPuZ9SE9n6j1iqFq",
  "key17": "2rQuJwFHh8hV5WLcpqZoBvr7ms2fma19VX6VZ1faQXKZGEgFNyYaZLjAiYo32zo93vg9ufcLX5mhr99FAQ2ZgRJ9",
  "key18": "5f3igVuRNd96NZbUbsEAytzxX6oB2nemEECVpERKEPaHANuE2y44gfRWSUHQw8ekmMmkgVJYRu4FhZYxwxgLgx4F",
  "key19": "3g2z5jRrsCLyNvH3DjGPw3rXjh54wpXTSWxGB7RE3jaCFeeYdqPjuKq4o7rg2JmNBhiSXmHGacE6zaguogEdKU6m",
  "key20": "4DHq3to6Si7eJndeETmUcqPwqbF1shENM1MchWdNFQe8sMe2QBuXw8oCBWJHwxByJNJYWLxmDGqgRKak3ScsiSpN",
  "key21": "2sQpxmSkxt8sND32jLZkm8rPXhQay2UinSPcib5TXSdHbj5iFSEEfjW95a3G2WNUobE3BX1RqreSMiqFrXZPv7Gu",
  "key22": "22YM7hDngQbps4kqYkh2w5d2wF4LVXKDe8Pp67QaMnkgrjAJo6wy1AKQfWWdK3pfzn4KhFuujNgT6rt4atdPAkEE",
  "key23": "56i3WcEjtVt8RyrYY3oWaQibiKCgoeHBeVwXYE3BJCJ73RHaEKwwCcrfhEmbwn5K3rz6RGNwF9hJjmbfp8R7KEK2",
  "key24": "2XDtCLryCvHdaQUdzK4NKBTGJBD8Fzy3iPPduKUETwkAMqnCYsF4cvLraKQAxKa7YDDXVPpkSMX1P6iWNEESD1gF",
  "key25": "3Z3gZHLHdtwNenm6RXqM2oQW6MM8ocUVzFD2DNDeB5ar64Mmmq2EcU3QLhJazaWLX8nErZXpx7PqomoUWAHW7ofQ",
  "key26": "5CkEG8m563hr4rmHQN7V6SMLFpiHp1mC9GdYHAKjR7uLFvWaih8UvmxWy2ZphW6tkt81sdLePaj7mQe1oB1cVq5N",
  "key27": "5YPUsFydqeCXr5zpe5BmE3wLDxuCtmbmrNWuQ3Ho2RQaLdnMGiZGKyyvgWevdsPH6ASyijG7zumVy5h8ZTtFQcf1",
  "key28": "3gcjaG2eiUP8rBsyFrzjHDPGVeys2ohNdCuhG3j1miV4jTfJw8ZZXotMXownZsL4xXHrVCvmZ2GvcbJgoATHY8d1",
  "key29": "4bNijhjJTAPiNZiREWunWDFuWtyZEwfbR36TgtJfkB2HP1AHER97k6dwFDMXibhcFHAQenyEquhCvgLgMLNU7wfN",
  "key30": "5j74kFrXVRxzKwaeFZNhridmRXQyRWRowmhB3UkzhdpXHWLDa6naAMhS46wv68dVfzDZ8NsdhtQXDzWMH23CyBQX",
  "key31": "2vPwma3r7VShgVocSbb4fLgvVijF15spMFgPPpMAgDG54wa6Uggb6vr6T2jcqrQueFZWZMFW5YAhdpH5kZqgJeNW",
  "key32": "57qGqMqSF3RdXFfw3Kd2QwG5dLpZQrr9RmSU8tBWKZ1h4Yg3xB3Aev7AVUTiL5M8mEqw5sPvkT5c5szw9zwnyL1b",
  "key33": "HmnZrBwY7Ze5Tv2tPrSxUBEBPdSBgUw86CSuNyS2BkkMudaJkiVBq1B656ypCDUmNziuPT4hQZT9bq55upuATvg",
  "key34": "FaPqub3ZFTPCjqMK3sVKW6FYxsfSehdYPueMMzQie32XTP1YsGSiRK72A2kVzeu6jyoa7h2nipdRXRCLFUUpDT2",
  "key35": "44dbdzgwwLqs4aE7NjnZpbZoPMYDjteQmnimG3ErGAto9iXFpwFFpe8bHSCSaWZi6zRhTrwBRHNWF2s3mrJN64QA",
  "key36": "3ozAKbyawUwcSKmpdhwQfWFqbaQPiHhV9yj8uEdq9JFNo1vA2qN9roq2zmo3AFavbyh4RVaUG61L3jv9Dz4Juvx7",
  "key37": "JTqUFWhXyFw4e8cxxJqVqb9LaoFyvk3KaE7Ad5WVc4xYpZy7b8Lc1NQJD3gmhz5zYnXVofCyfbxoZR1huJCxE5f",
  "key38": "xE9AmFi7ybiPE8vkEfncK2kLEjo7vHGeyysAUZw15U9tKJNt1qZrNGQ9VkSzhm5vzUdsrvNSztRCB7wxaULysvF",
  "key39": "3soSxQ9ZXFxqYxst7TYuip1zLA1nZx15RWZHkTmCcEBghv3VmXsLSeLgjFmkbkugMmwLpRZgNq1BmQ6RyQ3QVhdG",
  "key40": "66QBd8aE8yDpj8D4aiHpCV4efjXV5vsf1cBUVH9nHYqzkJ6cCGT7GgyDCx15SrzBe1qquQPWN8ZcBX5FshYD5Ndt",
  "key41": "rAAsjjEUQU9GaKEraf7B4xFpdQsLnsW2AHZwerHScLsK1GtWo9BZYzJZjaCikNdQTzddFatibo4a8PwTsGe9X7R",
  "key42": "38wzsFcXYsvMTV3D7PrmVA3Hu25v72zc99LpHyzhSaqecdgcwJpnS9m6GrDg9HBTj8qP3pxDipsK8WM8NeAQM3VL",
  "key43": "4JSHEEAhfGqcoTfNSbF62URmmtFRVqiroAucbPh1tDFqVGucz6iZYjBrSakfuiSQ3JUA47sdzJ3SL9sfYKrJ3AoH",
  "key44": "3TRNii5pN7Jy9QKtpw9VnYaP9QdbE8vnoXcGP51qujRWA6PosVJ5PTxou7zMNHWUiZo9MpnexMKHJdQidAt48U27",
  "key45": "62yNhSsMn8K4j14cJxmN6ryZGnw5V1i3JAyuSru3fZruExhpQKVEGfAG4An7WMiZo3UGKbkeVjuwTPRsdmX6isoM",
  "key46": "NXgFvSgZkM9H8nGw4Q3CNq3ZRuZHWTgBKsj2m8fPspakquiDPBD8YreJgtHWnLZd1TSzjoMcU5PtGrfmj61TsUD",
  "key47": "2CGPo2iEHPk8poyLx4T9jKZ29feaQUAxb4EgzS2MrZud4d4QTbuWHnGQS5gBPza3XAaQnJmCnpk7KLSkvNKWx5nR",
  "key48": "3ARBAgmgjGBLDGoCrvxkirjRbf6Rqvbk7j8AVaQJemGuUpLKxW6FJMFaSyQbL3NNgXgx7AqLPuCF86CeaSt21369"
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

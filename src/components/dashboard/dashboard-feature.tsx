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
    "3bkC71ERVw9HQF3vJn7jMdJyd91ZHzuSbDQED1BECLGnXHPg46h3tcdtbTb49eEh34AhuRjNRAtcuo6GUZQ7DQtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4omaHqL1cjioYZAuTCXmQmCwXEM3A7zxW6sJRD8SEhgukJNSNYxYGL4sBwyAuuwPraHBdTP9Rqx5RTNyAUiGXirK",
  "key1": "44GiNZeH2mEe3iTptv1EthHcFTFGMy5DBHW3WjcodD9Hz3btofkLSCmNUzeLwyt39359PoF5RSpHnU8qABZMiyJJ",
  "key2": "396nXiNR5HuuN9GGJMWDfYxj3FfyCgpq7LrVMucnLiUQXVA3erFMbvMKhwpfQW1mUzbBYxjwpWTGNBQ5WDepAnzZ",
  "key3": "2BgTHAePpBuRKyVZa8asLhugxSATzPeyJSYSp2XaY8GKxXVbAY59XJB6gqV9Y1JaAVzQdKXVTiVWwhmKETagiATH",
  "key4": "48MwDeFFPNz84MQxADW69E43mnKy8VreHz9KfDxRk5iiAYUvPF4d19e5yv85EFaDg65cjaxxN4XdoEZV7ovvcfyQ",
  "key5": "5eXNScV3RxoZwvaqPPvhjw1Ac7YVu23ft5PcadYyWLBET9dZZ66KngzyCvfZHdkbySRGHLe4qPmkkRK6vCx144Yx",
  "key6": "46MsspMVNGhMxQV8ptazrYcLoQaTY2dKmcRsnP1SwdacunWZxvJNyMNCpmRanTk2KGcyLREqiVKfuWey3fWCSzrB",
  "key7": "3t1VqrJsTYKFCUnipUtfXhRSmRCq5Dc2zezvX9DG3ku441pLZ43Dg3fdFMUrvejd3UrxDV1ymjNrYAdhDmK5qTP6",
  "key8": "jtfthxWNiTMCK8eKryp8KTzL1EXaHhHKnwtvnqSaUYrXrembvq9tUSc77dan2UnktW4apEwCCtFGU6jo6dJ7MFM",
  "key9": "5yhdmT3LZ8JHd48VDkx2jUoZFLWCU1UxTmWLcvDZ4fSpoqvugvwKLxtvTJ2gyCcd6rj4Bz6XAvBy3669GwYXH4vx",
  "key10": "3wfiq67gdobnumhxb91X9MCEbwDTWge3drpSeT6tDMXHAoRYidypo87iHHEkDNPVSZdAutcEB6Dn7V2yAzmAEZPT",
  "key11": "5E1ChGaNeYLBZG8JoUnMtp3bepN23czRb3QeqaW7mYniTxMKw4839kxSS3io8NooXpyVk6ZUohTzi39TJUGxztor",
  "key12": "2d1VtcY4XfEAzzLYk3toiZ1XM1wkPh4XhTbgkf66otY7DakkgduaBxfcaKrMZGrTqhZCWxnWZYDeaeSu49ZXKntm",
  "key13": "2vmjaofsCiZcJUPSkjMfYin1WeTBzCtPF346gcFHETsarDozfXivjyzR4PdS4KXSRTZKuBZDdLxjptYbudbzr4iw",
  "key14": "4G5XnHSxcktAo5HJ48Bo4FpRR58yLmYRQi8tRWt4WrZA7fBjCCzJBGapY4DswyBvuzD4yqDdbBcRwtowZnhSrE23",
  "key15": "3KhkEnE19yopdFt9T9juBP81MovqpNDWhjcP9AtnH95PRuUrxxn5vao1pvDHQWwjSozVKKsLDJXMRyj71Ks3hi6J",
  "key16": "34JjKZjieRppmXdZcnXo5oDnZMHwpmpGGKjbgge2NB7sEK1cw575SLpYoS1QqWzDo5imFD7Jt7E8Qew5uhM2GVWx",
  "key17": "56HYNpRptqMUJHWagFhUMuaTzoAJUdeo6WK56gSbXsNBpui4TPGWJDwAE8LZUKP7dMA5U6Ar1SEcnCZ2pzxB932H",
  "key18": "33D51sqFFaDJZZJjdRBzCJ5BMJas137m5FMg7EzfyfZAaSZ3AojjDC2dkn4om889LnvMnsmLGNBX8dthFZYtMSq2",
  "key19": "515cxMTexkrgWx1Vv9PdmLS3Qvj5TDkmQgUUkEBpda9Jb2gNbDG52wPPuKo8wghpcE32Fwz5UPsrvVqoKpGT7rVf",
  "key20": "2KqKTtwp1jCHux9XDRJqMTGFpQQ8g8NwTd6r9a16PA2GK7xzKU3yBGXo32HWVwKdznjc69ooW3nPSSsU6AmV1DzB",
  "key21": "4iDdfcB2cbbBJjdqVgkfJV34NjDVCwE2hJzAMGSHya4E4Eimq7zNdSZwHoKwv97PkDAypqyU61zpZuPkiQdtjhH8",
  "key22": "3yCmRFGkgyzpfmXaKtCg15UTwDj5R7rcVnFYrYZSYQnk6HQNVEffx3bzNt5DKgqbwkL2fnN8t8kH3kauRuAtkqsn",
  "key23": "2zDjnZiNzoZvQ6cDfjgL8zezJGyL76p8e4Dc5Vk1bpyXaKkDeckyCUFkQf3gb42UnvMKuZYtRWHHTjyfQPyoFhWJ",
  "key24": "YoVhrrqVWgqP17kwE93o3zhkHDpbj2grNqTMLBPKFVyC39LsZLZodFwMtSJ9n7UBoRweQFTw6kmyEYVaepXznSp",
  "key25": "5GnvLpAVoGjR5v5UBJjv4a64FUGLkujP9AjdDE3ZLggdQZ5M6cSFH1ae84Y16kzoswEj2NhYDDJZbHTBR2YHnUKD",
  "key26": "LhnjnKTtzgUCK3fBVuoagRS5h6mpWeiohGVUPV7GXUFR78RM7B5itCsWANG1u4W6KJqfeueEnNkfC5QP2oxjqBf",
  "key27": "5q3qqzxv2vbiiiXSnudYNRTUpb57k5FwFRTMrzguAviURz8d8mchV5BAhUQE5adzWBuEsVejbxWuLGQSxRhFNF3W",
  "key28": "2NbxmQ5KZjdi89Wb4xs3e6ep6FBQyZJU9PyPK2a9vDyZytiqMqn4WmL8ZHmvFNXf5rLFGf6UFEMK4Mz6Yp3QZD83",
  "key29": "Pab1M4EtLwRYoi1eg1wMaHTWxoveGmqepfyKQ7rJXLFbb4g9ryuLsJMfEzRHTgG9PaNy3pktxc6MTk8KMgDrfTL",
  "key30": "4iyXjKtzN5RcSNRFbYsPhQNiUPKurkUJwdffwiQDBkhWKhLBsbGQJb51sGcBWqJKpoZi2KpCZEQNFMbh6u1f7Q6f",
  "key31": "5sYZCUsNwmAc7BsqfyATXC96f9yx2icrxZjHKvNQ5t5MFwznEJVupoUS8LfcxaQfGXrNCr2Sq37jwm8EoUBGK2EP",
  "key32": "4J6mmH17VkcXQJ8XHFAxXDyVRhmpAh3fNrRunKNE4o9xrmxdJDps9N87e2DELCjSFHoR4esGGL77rGoq9JgR6Z7h",
  "key33": "5ScbAuhwDULmkkXj1Ue4mgSXF5mLgZP1rsq3iSyJKKwdKRLrbPh8ipuC37sKgpoey3ZzYXe9MRfWPN9UsedCWnu4",
  "key34": "7cnMDeSzoan2jjJibtCDi3T8mBfmWNELaKNATtRZTq2UQm8M9U5cBvXnchTyZvHYRCjxGnYfaPbSp12yKRtxbfa",
  "key35": "2v5dfXYUcjhJW9RDDXy5LmGB8SCFn3jNLV3XyTW9RDnWq2JL93DdXqcxqS3Fe1nGVz2vK38uUV1ugCm4EyCR5Nyi",
  "key36": "BFx8FNM9bhAVreQ7QrAb1VdvBiNBKD2hzQvMuwcWMfyA29U9MNMTrZm4b6kwDhxSddUMbMMzxEzVHrdri9XVnoM",
  "key37": "31hBKf2kcx6cKvijJ77WRdvbCcKKMohBCbRo9JRk2MbchsGuLvNmgC8yY2YfiCb6tsTMNS2PaS5RZyKrwg3ZFaWd",
  "key38": "64eTfXh4SSXn2ENbeaWdXXkPFCqzZQpodnGz12AyNdq6oTpGeCeQ4nSuVnhhjNC2FWbFiitcXdk8absABzovZcEt",
  "key39": "3i7cDotmumjQeZdQ4ywtHifUBNrESAhkdJ8FQZwnUVh9xfhi1FochHSXJ9PRVotwTp3TzaQi33rTC62v3eoaJPyX",
  "key40": "33p5JxVVq7wdEPq5J6GFubDbD4YEE5Atqqcs1Xc7hCfQ4HUJEiSEdbHc5pPMStK7uKEbXkemj827WdDcekDFiRq4",
  "key41": "4d2VuCunnfCCBKXC7UpuAKsDC6K1ocwsgS1WtLb7jFMAqKAU5LRm3VKNsvxGxvwos7KyjpLXwu6rtn8RMoYhHhHk",
  "key42": "2kGxyKffkZ2KQd2RrofKvvXjZuoGoaGTzZrV1yar4QBAE56iUBtovthLTMs8b3ykKS63X7UKUgNzayApzQojLkJM",
  "key43": "4AKW9UKvugYuSc4w5KnywTkhaYPQ46DojnsxcXUP5vhHLWXSGcpDQwd4pTZMS7BkC62pD4EEvuPqgM1BSGUT5ixG",
  "key44": "CMauHZurW85hm3iGdNntNLppbkoLA2vp3QosJDUm5pc9PJKJ7jSF1enUihqBJEYqaKzjafzM58RCPVm9w3Wqaqn",
  "key45": "3J1HyVRJ7s4PBt2m5et7x1x9vpW85pswoJVsKuALdD3D6YntDZp9J1w9rNL729ndoQgnLzMujEhLbacjuBNBJVfS"
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

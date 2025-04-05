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
    "4i5dnEfCJFwvJN8v4j7LNRcvfBGffw4L77LQXNxWNFZVgHwxWEz9moQJBoogFo44dF8cxEFDfpfsrsND4bFwLTki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FotUuyJo1nU6QUBqrMTcUE86E9c56ayNgvRzptDPhTvF7Cs6hwAdnpLJht73GTD96KqEE7dCERGZJQR3oCKDmx",
  "key1": "vSbqP9Hr5T8JCMoJHyhGhGAKNkc5FPHG9AHdysP8sybf1v47BAgj7vsFHd1Vo2c76t2xTsjzUBMf9TWMkYveS9W",
  "key2": "3hZgUDuKsrXAFdVcfoS7jpT1GEgrMzKoA4QzFXcjt74L5x9f9Ut93d4wgZ579MuoPWswqEfgSMoEbcbiaxXDLMNN",
  "key3": "5usHYcgyPvCbnX8WDBi7tzeTqLz98zRvvXWGoTjbr6pCrjoHk4F8GVCKV3DDqPrbAjya58dwqMHAwQ3DEFZt6puu",
  "key4": "4cBrHoMdngShp7wQ6t27H47CFpMySKV4KZruvgxHhQ1w3G8PVrqLAzMnHo1iY5cBozYqcmppJM778Xjxtn6Hhzmm",
  "key5": "4a3FGZkGbXinvtxpBPZgm3ahSUuHbgNXQrSChpQ484MQ4EqNBS9Ukkgm6wShEgyuHiDTkiiDDPjaP3Nxv5HrHEgy",
  "key6": "426QwGrwfoMbeF2pKzkN4aPvNhGB4PyGDUeCGcEtrb9hLG2EzyzWAeJi2uWpcgAZmz1QWxSahKobgwHwMofjn3nd",
  "key7": "1TRw5otSszCm2BL4mDkP6yc7xPm6gHHaMTy12cLtriuAZJBm7DtSpv6PSXExm64MA2umU25VmN8P8Ez7iaPqWUs",
  "key8": "65RFzkR5Qnf8bK5qtC61stZeAZapEnhHr3V6KSwQFcTMu5H5tuVU3wjSHbUPNfY2eB5Exx2rGQTfG1KjmurueMhP",
  "key9": "2HpLrazUtKYZUyFY9uxvyWeENzV4isGbrivf215VTcHE51gaX4X9GPjZqAUYktuwDnNQfsDj5v3BJLrkiRsYSc6v",
  "key10": "47PyXuehqv3vpkev6G6NtV9MjMRGiLCyws7pAKNCGR4NoTcSyWMRZMy37byJyeHPUNNbtMkFL8KVUzEcRUQXFaLW",
  "key11": "5XjVcmkP4KguV86rJ71B8ESzJvSJJTwv8voNfwsGLri5pPViwP9KsCeHinmqhctfomMwgeXmuMR5eXwfZmEQQPFr",
  "key12": "2d9c1L4Xrv4DvMqLXh5fZt9pmf8uH2i4MrVjpKpPKTkGzx2wLbrRF8hdGujLVAMF81PR9q5CWJhZQJbaGNJpoD7P",
  "key13": "3N4Lnk5CtU8biKHzDDduEK4Pd6qmzqxGEoRZWgFjBfWrwojnBdM2E218L2CqCw6WJX8uTr5vjB5xoSDEWH6zPo4x",
  "key14": "RhYVdwRMicc6S7MnhCDj8v7uGtzZA3ZwKvv1UAGAKBYsVAUM6rQQrqUBPAYySfYnbApjnQsgxkWoZhGNXPNsKrd",
  "key15": "5i8s987pzLVk5Cv26Em7de646hBToVf7UUnvkxPAUbpoaTzwpFLPo3tQkUp1SGFLGfMYGJsZy8ydXj1Mi2TU6hUx",
  "key16": "4EhTPPuguDq3CZaiAEdLPfLu6yyBxrgNvL26PzhSwP9jmZbw9aZ9xh9w4tpwsLQtmq1avuwPuTN7GJJRoqgREkEE",
  "key17": "5dmK5xhmife8dCoqifskQow8TQ5GNsbARRhpfHFZAWMptDdbvsFCU1rDREwyXUiAYyqTAumrSekNyiYc5BJiF5fX",
  "key18": "21NdH8yE66p6TYUGoEvyA6S2Bsh9j9CTgAVstDX9jJVEcKaoGpayf7new5JJH1QWRSmuxxaxepvyLBus87ctmkFG",
  "key19": "2Ja5xDALQ9UbWf8kW5kZ7uhGkbxcKtC3ZrRJiiADkvbBEAt3u8QaiWAwpcHvBdKfryQVR4P134jvfsxPdJ5SaNYG",
  "key20": "3DjsXe1s7gG5rwx9zJEvJpYbDxVirYPrD9yhyFbjw3k31R8LQMZtvBA1YTWvo5kw8r77UjbrA7TwrD7NZZ41HtdT",
  "key21": "48N8wkZemcVzNscxJYL4V1Zrqh4KXh5ynEbGAEjhqL7QDMCM9j88Nm3YfKXMam2cxHiDR3EBpThZ3YaMaHUuh947",
  "key22": "2dAtVqBmr5hFZUYYSLMUVNjaZQpoh1H2jZgngt3QkV6WAhUrSaUcPfGSEWe6aMb9R7jDwbxHjsm2NUoXi9omXh6e",
  "key23": "56RGctAt8GLBg63RF7WEzUGQqZt6bnjDqHv9NHKZBc1v4oQyNms8MWnG4KXsb6Au2E5Nq2ThHgKB9XCBggHJwu1g",
  "key24": "fAcLkAQ9ort5SMegwe3KUGCKBu4oUEPPWrPtWjQJ99TxB5YEhXSCwnJz8mmaqW6ug2EhN5aqjVsV7o5czz1t5RU",
  "key25": "2fWqpznmE35vk4CXzw22hzv6Sc3BwR36Gn4in2ND2vH2jQYCy9kp46dPiqnJZHv5LG8aVvmirZCaQQSUuishSdTt",
  "key26": "21uYXeQkiPBrmewfq279kDy85XFGyAiuddrbeBxP64cm98VY6HcydZhkiv3qhpNBUiRqzLHnvRN6tryNtUb4X5z8",
  "key27": "2eSatiCd9qPZJGkh865PBWH8Ma95KwfJ1a7BPvj3dhXX7JpJS2pJtt8fcFYJWh1ejnypDed749iGaQ5yLjvuApfP",
  "key28": "4b2fpV9zCcuKPY26Cb1DfCCDgfPzc6qnQHgTfMbeJKuwH4LeZaVpNG9keXidUwKKWKCFHDTZJtinchBaNfixPbs2",
  "key29": "sA8HV2gwWoNKth5PZDdAzcWFNf3YMwV8GYCnpxfL8NKrWExbto7yKfzhqdrABvVUhPn8SGyQA2efhY9b9zkdtFM",
  "key30": "5f5JjmK5dd7ZzzZ626obcn53jauAB44G8abeY9PvFS9ynjeqtA7isTiJbYVVrrd5fd1PxWrhhauSHp1T3RVLNqeE",
  "key31": "5L4fRu5F9Hboi1AAGpbARbCyabTtS7sRviodJvLXBdoFtzLbb9LsfhJCU65S5QAXHcsXjxSMWcBSEhKegqZhPReo",
  "key32": "4UkeG8ks62mvHHyzRcEm5AinGPpFqdZ6pGzAQ8WUvgC2xzSKK5vWgG9YcipYw6kCFxo43dLY6hj6zrnyLW7GJvJX",
  "key33": "5vSBQGeJJfpydGoQvfuM9odRUm9VJwgmf22b8xQuA1QtzZuPcvj5PmAABgUdAH6wBGHo84HRyEXWJrbo8evPbFDT",
  "key34": "4hJNsoNWB7Kg5pZHVD8v4FkzeQV5eTDLo2UerLxJPMTCqYby8G83mdMUv1tLH49m49eAso3SVmXq7BLADN65yifp",
  "key35": "3ZLWuN7bBc7wqVSbyb1PB2gXHtnmTycEP7UatLctW4iBXFLvTTVQaA993yx2k2iZHcFMMLNQppeTjedVqVV9urhE",
  "key36": "2zBvpAZ3E5dE4mKpeuvkFCdcBVC9FJs6czypFxML2fg7WqyEDNBJARKkpVzL7L2KKeVzhhmZxcsRbHFFiL6UqeWN",
  "key37": "41SmNu6T5Kdcoo4aQ7VRoiPPfYnq16Ph2XPxXRakdYDcN5ZYJPVk8eNJn7xunzLPB4uTLiUp2fySJcV9SCEdScR6",
  "key38": "2bxpchaJHYA8A8i7qYyhB6Ck8NGhKCp2khBXNT3XH9YPdHJVTkQQ7jaGjtK7xeu45RtQ3YmYdanUNTPWd81JnXdr",
  "key39": "3uhrpXtxjGZZTCq9PcYxHmvu4wj76XMERkpv8NkZbZ6M9WPmNi7b6rCZJBpkSDxozCDm5c1QrykKH4MtkvtDHGYi",
  "key40": "2W5N8LVv4FZxqiZ5fzbzdV4VhjwSbChzLWgKJoXY8PeLuASdkoFVnJVYfPDdadUa77MKGSfV2TjCgQn5naLg4h47",
  "key41": "4f3UAZs4sU75j2L1y2gm2Jg86Nzb5Zd73V4HCm91nPtc99Ky6nsB73xGXS5n6prkxGsiitS9968cmY3pYRGyguV",
  "key42": "23HcQDY12q7dCcKo3W13KBeoN4TXikf6rD8dfzAKCZZweGrKGYwrN6TS59wCU6QbALgCVLiZSMstFniRSEKBRPeN",
  "key43": "FDYz1unEKA3C9e75FNw4egK8c3xfu7svzEXVmZeG4abfr13utqu7P6y2XyfTzTKAHHcSqYKrPTiH5NauKfRsY8u",
  "key44": "3KTtae8whd8mSiaa1B4DM8ADrGQA9uZzW2eDHzd11BTES9JEjaj98Cg4w46fi5WsEvLm6Djeg9bxW1PqdCmHbBPX"
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

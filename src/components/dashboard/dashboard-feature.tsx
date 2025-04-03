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
    "5yb67XFSEzs2rB5GjsusSbzAaVEGLXLzXrPbBe9WTor2w8K8vnPTS2BuSDhyy6gBput82Si2j17V63Hk4GMj7rHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KD91UXLf7zvVGryWZk5JKgDjegvbai59W4dVDQyzt48SqzSot4PRKn5KzVyaWmW1CZt3na9uY4y8RfnPi6UJJ1U",
  "key1": "3r4iAwnB1jaW3B6FmTSs46bYJ8NquHUefzRgZVdi9YoWBt7P6STgTL7ox2RjK9uZ7ZnxJyeLtaxerX8VT87GuFt2",
  "key2": "fh6Pu3U2JBBKWuqxKdPMnqrCzXznvigpwPGBMkkXPKMXymSMWCf43uDxUNTUbrSKZbFBrHEypHNm9r48Dca61Xp",
  "key3": "3GSTJ6KoHPUuRhr5LZrFKgRHu86WHYgMv9mTRaHhkUEX7d3KMXCbVpS7iZkJ7bfmkUpSoEmpUEDLtHDAN1PCzetb",
  "key4": "4kHBksPtLh5ohg6mFE2xUKqxFcbwbVEWAGEuV1N1hQazTQLgh5bUzZZD6V2hyRZn3unZH4SRTMNihLnvQoSrmPJf",
  "key5": "3xvpQQw1Zu2FZrnhzo66TPD1dTLFeStf3p9zuBTCXy78SzewYhfioFD67Nn9rKiZZk5cLVx1BaUkhZMXjVV3tsAo",
  "key6": "2xs2rda5c8a2JenbHHCLUNAEfgmZDSMTrmmnch7Yx6a3pw1J5dMCHixym8Kzy3NF6wdSZhSMKX4XgGFb3oxcVvLJ",
  "key7": "2t1GUqtCABtdmtd3zmBm4MmPN3cewxqW5ziYeYxwYjuoCkfjYVZhb8qcDhN6UwWLxEYzeBEzBqFcVdu9GLvASxkJ",
  "key8": "FbekfEWLUQRFpVppeckjVqjqDTMiiXxUwuWYTGHh1HTdQRQEkqUVEPwRSq134yT18MRqQhMVuUapC6G5wLbkwBC",
  "key9": "5DrQ2wb7fjvxCdtL17pvBPDsVQ9CBUcHek9CrQCm4qjCpxSy2J8CRnJdR95NGorYNJ5vshMNRrtuCNPRnS1JUboL",
  "key10": "4a8bGqivLswBmcDB6rg23TYQ7SGg6Xr86L2UvnFPtNtcTrzY3g2WRgFPkhB7PFuoqqkYAHmBcTKh6mfnc4UHfoB3",
  "key11": "49PEbfRFDsPGWqKNmbLpS48Caqzty6k4mFaAVUsNoQD7yX7ox18h7VExfzb6dtbmAPRAaFvdzGvUY5MgBrFSPePq",
  "key12": "4Eh6Yuszv8pSHDUizjfpqQrBEF7xPtRGqVtnPTcP96CpAahN9zCNbLAAXcxUA3xGJhe3aTXFEJz85oErB97WUugg",
  "key13": "3rE7x4CbW5X1dMxkfYdpQYbkRMkAxWYAbwsJsaPJe3GXUKbWzPpnYW5E4Lq6Roj6NGDA7Qo3SXWcx5JReyB5rAje",
  "key14": "4ty6PENsPFie42GHpXFuppZEp7UwrXFUYaWYWYxPH81kmqMaGQEH1r4goY8Vy2nVqKjJt8myaigxVd7uDu5Kd9KZ",
  "key15": "4sDjRui5eG9DpUA32pTHWgt8LYLZqxR7D3ZGnFq77BYEUQAsVMgAsaCCPPkuknA1uMAR5qn1fiF6FBzCEyA3mNv4",
  "key16": "5ty8AhMt3r4iKSWTwrJkgm4kJRtdP4tqePQ2L6hHpCw1FqvB2nAWhpdoF9Y2GXkVYH8LzWSpnDxtbJnrPktSxaT7",
  "key17": "2Sak68EGtxsoDgpwwPQTppyQWsWqKtFNZMmDBkmnqviLTxrB4X2z9KBc3JYKvt2RHSDUnhgs7vPN3LqvhNg68bUE",
  "key18": "64ETx4FKBfQuFnnEM5yko4qqAZ2w6bbi7nEmuD7qekPTWNurDsYpN71288HTWUG3AvkdkH9QZA7pji8bu315ppQw",
  "key19": "4i3a5rwhGftWkQpK5uWoLempMzgd2VJaW1E1ZFM8PkRGs4ZADyVpNNPJLS1WiL7SumxpV2JPZ4WmNXmruS1B5CA6",
  "key20": "4abHCd4X8snmXimrXFUj3TDS3HF7vdf4TZ3m4VurJrJGSZ66bQtnspRAgrrhfU8CZCpMB4ReLewaLkfzeDSfEcqq",
  "key21": "3oVa7oJaYMU31Xz32Rop65em18g6LymmzafdkqbhNDqMNkh2cLxKyS52RHbh2Jjfw6zvztkUVLMX5ozaCE8kU8gg",
  "key22": "2miBC5KK5RUuaPBUpEFidMYzTRiPM3udL1KFE2CJwnMi6J8AYLGPSvAnLBvL549nQKSxZwfcKZcoYEfeAv3n7cp4",
  "key23": "5VCFi4jf2KCHYgTPZKawWYGE2wbLKFRvJHahbEPKqT9S5cwN4QwvEDvpECmExBjcwmuM6V5nvG6FNo94RMyV3Xc3",
  "key24": "3HzLX3XJC1PhhKarX2qnvCiDJBtuiL2io38AN1pz6C1FftTzE5c95cKP76no5tGYPvdVbjEM87S9mU9FevfECkBQ",
  "key25": "3eH6sxFfjNzW3VJ31FSeZ1RZ9tx6mJRtZtUVVyKQLE6Pr8GjFzXLA6DKHsUEEDhUtcEtUAjM4LJpBpVW9buj3Un1",
  "key26": "61exc4mPZV4vNxPG5qJZzJHokLUTi93YMm9h9UenjdUZdjicoxtbwYw3ww6qPoLsT3kEw3KP9Krg1qEH1mhE55e",
  "key27": "4vaoAoedsaHeTNG6JH35sMSDcoEF3kV74spmXvB8p4DjCDpqb6KeKjVopAe8xVUYdKwt8eMv9QNMtbo3U4R8Sw9R",
  "key28": "257RKUY99Yt71KhZQw62JFnXRWErbWhP6SDY6YY6v77QoB192kBxtdrEk2AJjif7sDEEVFqQGRwWQja6gweEc74v",
  "key29": "4arF598s6i23KEANG5KeTpJu2xg3U2zzhEkKayF2kzgFaJaddEx5G6YnhEkLAhu2zrjNZ1cWfvvxTTPKv6z3KuDW",
  "key30": "3d1sscfrzjXpTRnD9SW8L7imsBbqx4ky7MiDTVd4itAg98hdaWknBhEa4V8Vw249fxAkuDttErvdyrBEXByukNu",
  "key31": "5x7PPnkmWZRGQvkeq1ZRc6HfghxkmddkmBCFDPNRJc8dkAsjy8UbdziLcAcWi67XyXzWEtWUMwZXkY6z3Ycx4NY2",
  "key32": "2yS9PbfEnwsvMEDqnZNE52YyNQMHyqmtmfKFWkf3L47AbGTtK49iZbNAWbT3xkPxufRFxyR33p4EAkKikiepsq2t",
  "key33": "5LwCiNxLdZct1sm3W19EADn4DdLfuynfTQPpWbSYEyNHV996FMUJ3ooZkjqxrBAzLUNyX21cnyUipJrCJK7Me7Yy",
  "key34": "SqJq3ApGrgXwJKrttKv3YjM7NN3bQi5G3USLiD49epR4WkhXpvedmDSq1tbs7eZribqyoMANKpdHxrLcQs4MFjN",
  "key35": "5iMiJdEtsMYCa91jevvnDQDVwMMXDKVLgABGWFiPWd95QjrdHjtjUpncyVmTax3PK182B1nZ2JwBt48swFUZB24j",
  "key36": "26HEZ94SYyjLSEJMDVnTjSgKqSV2aHh4MfyaaXZApGf1qjTts95bGuSbTYvoUruVu5pcRXzLVUYNV2ZFa6bmdDGB",
  "key37": "3bWjX1V4sCZaNAs5BJvuWXcdn91zAkdGkAn2sHGySZHTKhBvnDSJR1HtNyFewDttyKasaxrQSmnWbvMhtuTJL6dL",
  "key38": "53LwHWXq8ACTELnvctWZz2e1dW7wKosUyLfNf3qmrrW63wjWEHBzcgTBEDcPQiMxMahtoCi6nJZAm1Rxo6NfZif4",
  "key39": "3JijfRvVi2gfZr3iQBAL4aerPKVb87vJk4ptSb5TXFNH5EUjcBbuweFu8AeN83GVGxo8hbznkPwfaa9PNhVzURJ6",
  "key40": "SmS6XksKJ82BSgAsXwhXV8j2seynnVVzP6f8K5Swoup2S1a8qnQRLcTETGpnSq723Lw99nTNjVQ26MCmZiPLSMz",
  "key41": "A3o2q18NgJgALqkfrsZQmFVFqBCP682Ph4sdBiV5VrEoVacGfZoW8C3HB6pevZj7zSEaC4fQEpD5MXno4WY85D4",
  "key42": "629zNEqtotNAmMEVTL95VGWZZ8qGZ4vVtrP1EnH3pDmdPjZ6tLxkmAY39vm5GFE5wPgPocDfXKqfxCecpuxsxxaq",
  "key43": "3s6n2bZwGSbgjVWSMtZzCD681aNt6ZP9adshEZ5qCiQSmZ1Z9uVqY55vzPmwhkiwDDPM6ZNsJ4kg2CdWxzEnNkUc",
  "key44": "4iErXbQsV88cEQpRSj25zgU75bUb97JF7G1W454e3RhdmzdpdWdHwRCRvdpeKnkFNeM2sgvTY815w8cErgqyhymH",
  "key45": "2WnWj7QVSCrXhmHosVUj6XsNNqcMSDQEctmyq2MnFj7tU5f8y65t1wWvJgbtfUKVkagPsN3xG8pczWesqeqp3Fqt"
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

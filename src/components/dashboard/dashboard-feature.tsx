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
    "Vf9QTWwdTccBb823Uwqv3e93QtQnTVeGEEkeGzCJc2Meb3TjqzDW6pCfq352gBfTrqRCXXqviGfeGUgX9cDDRBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GwcFVPbM7yp5hDTTbH7f1WkdyPuG8M2kEQPPKDyBDgkW9A9pVNwEtzAivwU7zWw2dPVJR8rfSKYWvasPq3bxnh6",
  "key1": "59NWSo65NHUtL6G5CNB9vnifZ8EDzPN8LxWGJqz2AgsqkY2Fh2uareB9oB2jxZkTkQWh1ufVrisKToYxZL7bkHrZ",
  "key2": "5gYRXaUFpw3Wt8yewrbxsrTHJcuNLope2rRW5Z4huX7JJ4nSUPhLSTEh1N946ma4u9aT5MuSiQBQc2sYMryNHkPj",
  "key3": "rbKfp4wSG6qBVfcKpXHbaonjAKCYHZbWb9UZETJAvosBFR8JpDb87DJznoNwAXF9N8h1sVqBmJkmwsZdA1knNSN",
  "key4": "4PTjT5UGvDSDW3JWVXNHot9HQiew5yDcFZKAY85UE2R2F5edpKpBqXfoAX6rqAk7xDNVdamsJ5mftc14iWuRRrwn",
  "key5": "2yRNr8UYKLyaKB5SUKrrTuZeN96Dy53rp2jfPWuinCYyPvUKfaMojSgvwLkp2rESRtK6ehGvjUTbtCZ2cCidSJ83",
  "key6": "2hbYEywhhxA1zeWSqFFpFjoeyXc7xcLnDm2mzYyznAw9x3EvH8DcrcXWq9cNvovQVWGV9EP62TxM1ULc36GZcMSn",
  "key7": "4R2zsdSaG643UnPzUZG3LzswLnQJuEoE6r5cByXhvs3TianJn6UhZVFPQBr5Uf8nTEJ9TmYCH6w69LMFiYdQSkVV",
  "key8": "2TQdvFeXq4wFAoDhDybERDtPUQk5o1HrtZ8bttqz3EUqpEbZ1z7kCCoCaNKgD9GzTVr51ZfV9Y9bm4YJqhA2ScEQ",
  "key9": "2DsZgsqpYp7S7ugMobH94g8Tvpy4BddcUUP8DkZFAWPw3gW7wwBkGxqC2L8xdEohpzUtocrDgKiXd2jwSBLC8N8a",
  "key10": "4HgYXR2BStpwbQ5Q64UTaWLoSVHXx64Hc4GLaRtSnSxmM7sbRaqJ54sneEiC3QDyLpk5kRxo37fhs84L5qaXDuoS",
  "key11": "3Cz5ijttq1UyRXBXFG4QZKEXAFodvkyM1oxkcQpDkZn35XyyGgMCxBQSXxbZ4Yu6REnpLvmYc2am4wgMGje1Ezjd",
  "key12": "4WqVhxr6wKdQ6EQ7KRKh6xKoDNpjgVcfPPQLyTrsfkt738RzmRsv5wukW89K9RHLcAx3og4nnToP3okSxvAi5kod",
  "key13": "5vd1CqB74ufcKiftFEovTCVxeV8avGBXsbSuD4Y9q1Y9mBnFMPgHm55ydecQjjjrUgaYEi8xYnfmaJJoQTWds5h2",
  "key14": "J3NMAmKnCNtJCtg5yZg5AfJ96kTkxsQcRpQrQ54yXK4M2eaF33KD88iuFmSPvptN2x6TFhaRy1WTR4hvgDDTC4G",
  "key15": "2ouevNFPk7uusgPJRmVJQ3dYLaFY24u9cufLubj1i2hPS2pLqvU41SB4qWDtiKUMkkcyhArmbErvjhAjYET7qpZP",
  "key16": "4J13mwZ48mDM2TcEy3Y5WienbcAXAMfkQaF1AaAU9pUk2w8Az9QCEUXDrUsNt3iohkKVxT9aaxkEoRBsfKefqkbQ",
  "key17": "2AgRDACBXdrzDcj9x8xQ5BP913ULkndQEbDpimReBqXunzzb7mUze52LWXgySv8pUWFevxSgJXMrJbocqGqbZipe",
  "key18": "24a2GhbG74EdzQuT5oiPBnHB3KhQwDT2xuQcvzhqEpiTrdq3ecyN6PqmxPYrerWrucaAKDbiRjQxas39rCbRUrBJ",
  "key19": "rpnZAVci7A6px6DvvLzr1nL5ctGrsXfHQENFptduDf4hupSKqqgKsvJaccrvhXMq81aJpH655qSLVMTx2uZQ7Na",
  "key20": "V4SFBBgg7EYbqZrDHcXuJqtnS8d72xgkMqNVDZ9W1nZ2cmatcGg4iUQPgTN1FeYzeMWbNcpoGbkZmyvfaQGFCKa",
  "key21": "4QKU2QYpcR5M5F3y46b7Ya2v2vA48rStaWMvx8VWfzderQQu5VhQwYcPzoymV2ERu3FomioBsiFJkfUNBDQ2bxsL",
  "key22": "2WHX7Eo3dKEbMVuRHSgYTcoiu5LNA7Qfojvv3Sz4kMebZpF4DbZtKvMdicP3TAHMMZopndX4h9x8zKmCvuoeYVUC",
  "key23": "g88awVsdmPdoHcyBvkkdFTSbwMFp3zr2jBqbdH2oaXqcZZfjqCzVuhy11QqLCtVGXMpa1gEts8iYGPgfjwHfidP",
  "key24": "2EzKNoPv5FayzYCWp8TRTzSuSshEYjNRLFsjJVzHm73oCHhnMYW3iwXkuH4721URBLtymeoi8gSAQkwKhZJqdFMh",
  "key25": "5stdDUu6Dm4mPpvK7EF2pE5Rxq4m4rEtaQJSf7Ls6ULEz352fJoKyHY5h7b9GYnVwY93GrdPSAXWt7u73WKn2BXy",
  "key26": "5J2wvJDrUYzrsoRK3cjZQx6MzzBjFFLW6zBox9559shqTUJ4aJv5VCsTx1irSZojgVYabbq8PikvWQwYT9ufQzwb",
  "key27": "4beTq42KoFjCvMbX91282xLmFhs3JF3EiLqkt37vzFrbRdyjMxhXMmDpyx8hvmR2U5Jj6f3d4e2sxEKChRraykZD",
  "key28": "4YaEyHYqh7PcyNB1rTka7eG3VcHuwanGfwCsETzAJJ8fpbhh6DLoEsfFg3MYL7XRnPbB26HqLprZtS4GyJuvD4Ge",
  "key29": "2qp4uyDMbfzQU1AuVVNx8MWmHnZCAH3aD8aZ1SzWrfYzhQkbtkALchcDCp7zDSAGPAsT3BL7udQ3k1YPtGAqa1Dw",
  "key30": "kCAmKba1PCA4WVQGedvHNkNQ3CtRRCHLTbMSDUAujjB2pLzmiP1585hSsC5EE7Cxp9HYrm5ZLHkm2vW1NVJNA3x",
  "key31": "2p8QCcLAb8mSQd3qtdXLRG6Y7c4LUcJgpQCE7mUshnkGhtKyEXYayWBsrHd2QudnxgU86v2MimxhpVgmEXt1PkQz",
  "key32": "3vq6TNv4P49yBwX2qc1hryUd6xHEEMY2dwPYBVP1xfDzBXVv2bH1yAsRBCLnQTT5yqNL4TsAfcPqHTAqraJPwT6j",
  "key33": "39JvoJduBbHKaQUEs232f4EckwGkeEN3PmCX8e4BfqwGr3EPyg37Dff2N96Cnv9E6EPH7B3eFptMTyczodVA4PwF",
  "key34": "2SVQgvFVaDEQNDeycfm3x9ZjxWwBXPpkhP9mg635CJq6e76HsF8mHHcd7WXwvYNMaisq3PEue47iw4KEkQk4K28s",
  "key35": "2rooKrjgibpNQgf3pNaWCsUG3oz5HfwoXeF8bEHoDAB4XskQnfrTXWY7NBSJHaKSuB23y3AKiuHinNRqX1juNzaV",
  "key36": "7cvNJzcHo7VE77yDcGzFLYbhdLZd7k7YWNGzkiAVxGpV9CTv8SicCfyueUUf8vKzwkBNRGEBFPCtmGNVEdViR8T",
  "key37": "3Hvc4egDL7cA35ptWe47NCEw8QgVyFW5ubfh5aPWJm3nbkhKgyBFV3DAYqfyAkozBXbstDitZCw6gVRAi2veWDZ2",
  "key38": "WPHLPT4NfsyP5UbKuveDkujaaRgbuvhLxMgsr71UFUmhcj9N2X3hzyBbfzZRhk57LAgbsrujjbdYb51UpeGGx3A",
  "key39": "2yzSV6nkVZphhkhVtKYVS9E4DxxT6uECg2max5MYeMj9scWhoGh8RzRQyX2Xj6XRU6Mg4E5bCD7t9kdftFFjRZRR",
  "key40": "ayTWSEt7p7pfWyKUrd9fpAaVdz1uTxv18e57WBtZwDnjnHUyTDDE9ziFdj4TgaWMhgdVmvKFBPQADt4c5ut91FE",
  "key41": "55meTVVaWiZ8XWpNRqxUovuDSpQxDze2TkpeQ3QqJKSGNwMorFP1jP2QLAQzBhc1J7BtPe8iXRkEcCvRoNLfcBmH",
  "key42": "5DAPL9HT4pyHUGDjGWri731L5eaTTMQxt5DoPRtadzasZJgBbosBrsxtLqQGYm4Rk7hu7Cxj7p7TRStj6jffhTYj"
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

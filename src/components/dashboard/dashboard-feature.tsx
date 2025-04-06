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
    "32Kigqm6xCnSn9hsy92xzRaRLCbJZExN7GVAe4DAy1yvFWVmnQazj1pg4Woseu3taAfRtTDoywGps2J7pXhDY9XQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43FcxSv1SuPAt7aEdDq6FJrKemMMnHDqvJ7KxdFomfSE5xCdPQn1NV9YpayW83KK4vECq7d7enLcGMD1KbBGfzTs",
  "key1": "61ttDVa7tA7zZGt6LaazwZMuJNAHwRT4Qk1mFDGWK88G4rUL8SqcBLMK4c5fsMuaPC6eWyawPhwTRF6Xa1wvys6V",
  "key2": "M651Tjy9q1R6ZxaVBU1DJ7h66bSvXZxvQU2zN31UcpzEsDMFwJXc8Z27KEZfSZmrbEuKQZjfcfKQN9f8PZCyNLA",
  "key3": "z1Gt2t3qPdY2sgLwAaBecrDPrKFweRbdMQekdSqG4Himkh32n5hFNYaiDRRV4L4LDd4LWxtpPFmVgmjC8hBZkjA",
  "key4": "2jwBV6G9HWig1XeZMZSzYaRcWEHonsRkthaqw1izNUzJC3UWyrotmwWAf8Akk1GkBdgP4kxRFmGu1ao8YWbgU1TB",
  "key5": "3huyukuFaxQRLchNy6zCnMLWDWUwifG9MgH7UZVQjhpCnxNrbkyZt6vVyDsbyu6mhZMvQFR4354Q3XYrVdENgpbb",
  "key6": "xBMrSpnzQx5WG7XPmQF5ZFNqeZfzRXmg59v3fHDYFheDNzbGpyFsoyqAK6sjBt9ibxMVo7vGEXRkovn9Rv7xtm3",
  "key7": "jseDa525J8TQ2PWGhTn6c2Nzho64wmSRYYkw7EfNZ4aQqzcHNLjprQ5CSUtKAwk7kr3Fxpg6cF51msfnT3XMC66",
  "key8": "2GpZX6yktrLJDsSbsYffT4HFU6KmjLyn8q5ur5huq2HRBaKTBgbsauAC31yMWLsguRKLY7uPwtZYotXfpm3wvf8J",
  "key9": "2C7jRefhvti2KRd9T7RQroh3FzdCEPXqLwJxtHAn1BuXnsG819UUDY3wCNkGvVdWgg3N7aYNFFuevFGeZSPosVSn",
  "key10": "KCqpNw1o3mYwLPCwFBQRzmnxhfCDeCxtDRTZCBQorCPigQLDNVQpTfRfqbbDNY2TRNSwqd2KtwpF3aHuMQDVLJn",
  "key11": "4uNz7bRdxx5a4JfQTUWg4r9Xksq82xKujqGRsJeQqFh1NYmME9Fz14Gz4cVtFsSfbpjY1DNpkDhL3ZAYYo7nec2W",
  "key12": "5NrhnEosm2kjTwHDcPnh5GWbFb3DZgeNLzWRL8etVhcDK2Bs6xFS87RXXBk16YBPU1qrQetqxfFXX4n1d2n8sAfb",
  "key13": "5ivcZEgoEe1yD3jDQXqAWYEun5Zi7CgFEJW971u1RvfFEQ37ZyRwmcjWDNycnssvGGNbiFTdvzWZyaQ3STTcrdyZ",
  "key14": "5WiAVdzduo8iJsKmxhoVb65sSYxw5hDLXagoC2sB6ah235zHLHz2Wy6ec1VHdXkM5tbF9AawL5uF3w5XyW7cf2xm",
  "key15": "cGte9SDoTof4ojKtQEXmmLrjHsM2p7YMMpxWq2u992QKvTnEcY5raeDc27kzz5v41bD8ZcFVWwUS3Rgo9MNRX9t",
  "key16": "2y3CqDSh2CvbPYiyMymv11Mmc8hpUc3sW3LXgw3vCXFCduChGYtMnyyZ8upQvwRmBtrkAH5B5vy86kDWS8xgBiAN",
  "key17": "63tLWhfiQFTuxTKju4P9QW3ZYL4gBADWvCqucQXEUpfvWoGtTrLw3GhEcqXR8Qc2Y8xiCfC2BeDBfyc7QpZMMsXU",
  "key18": "3eAb7e6M8QnWMNXjELcUx4uutpCrPHZX7B4WrsKf7YDjYfTmNQy2fgTwdeVTw3DioEtUPCRjrFTbfgvGhjFh6zjp",
  "key19": "4C5VTPuXZK4cCSrymvdaofoLgbEr3mm2vDoL46CUZqZtepf18BQPhvKJZR6ZEPnbbzjkkbY4R32qRWgUfnRJ8jcY",
  "key20": "3wmnBdjjQF6Z8qGCbEQ2PV9PZFUZaQBj2ie486yeiYsfN48EAoAQKB7rZ4vE6CXDBwZScbArbfFQzKKZ1vAov6Gb",
  "key21": "2sTkAWxbxf1H44S9fwUtUu7S3k8xjXsGuYUp7GdtjKmGUnaxa1We38eeyFCa1ZNMWbBZwQAxDKvawPneRB9asKci",
  "key22": "BZcAvsv9Cuj8vxB3k3ezaiGbT2qJAcKjWr1CBLRf6baxUL3tcwMUrbXUnTaFHbMMLCopyQHYizpBhSPbiozzeHo",
  "key23": "2f2axq7sXDRiDpyXiWqpo4VfzKKVprNuTx85cEN7xGFX1S4ndD9LzGspWtUEx2r8zUBBbZWNZuRKxJWuAv7Ysufg",
  "key24": "kZChywekUUNvKXM55YUuxAk12rQ79DWCnPXND6Zo1kDFe2S6LpYBzMybBMCgVhMtBNJqyEWDTJoVCHKybwKn4ZB",
  "key25": "3bgMFYCDVdRtEZXaLWocqL4z9cZ47oEPCL3bUmD6HxYDK1Xj4i8uzihorgeahEg2uaCkuLhNDGm6zJqPVJLsdKvr",
  "key26": "5GBPGtEFn88opPwpw854CiKep6SMfp5W6uZFedwgD8gydV2ongv9zHVdMqQjgY8JFVhGoPNjqYvXEW4AhnEFXStV",
  "key27": "46Bp1M5bRZReq2MV9bvtSZZ8hMdzMFdD1qVM6KeFQTn4so9aLMgcNfkgDxwkijNvWcxpaNsqyD5LBGb2pj6qMHzj",
  "key28": "2gs7qjUcNJrCfhnBwLALWsUste5DNMss6Fzpji51PSrZtLS7e8XsR5WfhYvgUTfBi2GK83v3DLXxEhdMX36qxUdx",
  "key29": "3Ef151RueKCPvSzqMDBD5tTCV9qFqAWoP934EJY8RPiikpaGBSdhFUeNmjtN9Fm95cmvH2JKHkWy96bPfe87Bc91",
  "key30": "35RJwqXt8cEDDraPPdugo8c8pYFWDwBsscLPTc6ia2d4E4VhvypYuVKFudg24hPq6fTiBiwAHRGhA3DkZ74HseHV",
  "key31": "5MpwALC96oSa6X4ZCJLobaYToxRLAnx8jdY7Cgx7Rxn44fzp1LKTtHFTMAu7P7tQ9aBp3jN4eFnya4QDsL2syDa3",
  "key32": "3kBVChva1e19G6BMaP7477xZGhmLvkcb7Cm7azJFRFMBSE6rEf7aT9SkNJtVpFgYL839q9BSTMMzqUHXcDGJ5kHr",
  "key33": "iQH4So9SYRtas7aqGC4tmi6ZyNoyfUausWLv6WTmo5ufebzdwVo5QBqsGnqPiDfhjtK3YxCYXv2iyJcaxJrkwdZ",
  "key34": "zGPVvmQWYR1ZQg9cc8F7UhAQfB3xzNqPZ7dVMe4Mwi6WaNcmzF8y6CctJqEE3mumSK7DisTW1qNdwZ4BT7RTmkj",
  "key35": "5nA2oxvoVuTLcBianLCrYGoQuiqTH3aSiFNe8ntFWB8HYAzwfFWCkGjLE84QNuopQJtsjyC9csudMvTbTfezFkY6",
  "key36": "UtGFagra4hFXJii9AMhUuN24k9dJiQXJxKJhcSRyX9c36JSJ1YMdcMwpmFkXfz6noewFCa5zBQfGYANGj9wqm9U",
  "key37": "4ApHh5rseYbKY1vinjQvFq4gYNrygn4oPFbks8c9zhCkCFfGQmBZVtGT8f2nw3Yhxx3XBpbav3KwABdEpw4dEeY5",
  "key38": "4ft8c3kgjeqWLbUFYRGoVzKPqzgHP3kNjHLssvGpPH2noYa97SYrUbtsR9waoi74oerR8fmrtVFU1gmvWzZRYpR2",
  "key39": "3zMBa1YLKXctjt5MKhHq6ATJQaLMRjnpe7rUXf8WmtdNqrawqqTPfhKz1Yhjh1nu5hzQFf3Jnh7AmYTJEiyPjcUY",
  "key40": "4p8YWiQdFcPsYKXr7dXRaga3xgpiSPZwjSPPwaDkhXUvMropacy1g8rp2naf4cVSmvfN58Yaoj3vb1ESUzRAuH76",
  "key41": "2WjNvScF6Db1D7D8f6P61rENiZDwKomVY7MUJbJK8F9hPCFQbhPZuqzSGqBHUtT22BV3Ss24L6fnbNSybjSW76QC",
  "key42": "dBoDomLrjKa4TS6V7r6ULMqSCu1xsQvHoxuwQQao2rUf9yoGpCVYwSCP8218aX7ep3i2wAhREptxarZAKdx7E38"
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

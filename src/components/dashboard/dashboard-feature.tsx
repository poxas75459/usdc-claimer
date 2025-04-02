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
    "67pCZT7TiQFnjfdmK7r3qy3WwhaUcK2uvQoF3N1FXHYkpzBZf4eB78QAMn33uvViCpN6i5ajKLkiqfMsBbwxsf1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LV6NG8qYq9Qgn3iamJVtdmEifqSUFvyvEpVoS2u84ZHxpksLNpTBuFj6SGcpj189E14WgeW7fY5npr6jmAeqQZy",
  "key1": "32i7T9CckFmxxHnJ7ip4iHTLZUYjhMKMnBizqmbvp2NtCKEg2qoUcSJ2VQW7qKU2Zm87GDuGkTikhCcr6fvAJdwr",
  "key2": "3tyoahJA9GVDwtZ5HMo5Wj9q5HvcrYyZJNcna48widRVrVyiBWNzzZ7gWkeXWZGXeZZLQ2kw2v3TzW1gMLYKsiFA",
  "key3": "4PSjubH8C6ezeucWtRXzmTHSV4eei7nFkguJkn2WSBZHUcpNVQm3Jpypciz3LpZyYSNbYKTNuCbhK5UTCNp7MwHN",
  "key4": "5LC8d6GNsrED97GFRGzP81rySiKdZBg5aNf46DHekXHiD8CGmJJzis7sEw54tiySAQjZzRd3nyBQYq2cMkVLV9TU",
  "key5": "xjtmjZv4NmnKBa2L2UwuaSqXZpj6V2RypyVLrTLbi9o1a6Umm6r4KRykUbQNCmeKJXbXCTbFQN9L3wVj6RjaTP6",
  "key6": "MnHsL658LYk2kNY5hqpn7UDM6moHY2HR51pSaqE3kXFagHL2hEfyPh863dEA3Pw8Qv1qyC4gdD4xS5CKfR79765",
  "key7": "3Vn2H1aLSbhyNjg9qS88gh55H7Gi46nTrhUMbHGg6AtSAsytFFLeVwR2ECVo7vTZGFmDtZsALYPFKQaniTHMarTf",
  "key8": "65d8CGWtR5KFHSBwqKZMdbUpzvs4ekebp7yXc2JFaqvz5Xk6tMSkkcfgvWHR17BwGSQ42szD7z9Y76ryaHuBswLj",
  "key9": "53uXjMC9PzNKjcuMWsC2dphw4t6FhWGBr5JDgcTrwPZrtAVEtCk87HZz2JEeKtgTjb3robXQdNUSUmDrtdfWLq9d",
  "key10": "49V41P12U7fRiz5NgiKw7qSHfJQyfBZL3yNHMUvDdga9tpPX257J27v6eGhfaZYB4yK67kejg64kPKg7mb3SKmmr",
  "key11": "3Cm8XhuUjtt9vP2TzodzEcLLSqjsBNyn2VzUhAJqk3mimJUGHcB7KgLGgdg58XkEaQtn8ShGt26xfnNMF7ATB6BH",
  "key12": "2fSjn38g73xFp2A7a9FX3qNmSZ4qQWyxUeib7gM1PN7cBRDJ4oPUm3qJ2dajMjmbevnn2jiTRzfiaZH4nHGeUcA4",
  "key13": "3qUYgQgwvBRd5Hv6jHqSN6mWUnrKS6yRk2Y8ed8oRTD2ZJUGXz8m4MYPAb7SsvGv8YptP4CTzMtXdY6WVSPmiF1H",
  "key14": "2wpCLWP3SjTvnFmKBZTSPjDW1fRLsqP1v3M8szTHwaknpodUCSNW57HMKWcregMbzUnQjiujBYx2zfjjrLoRQ7th",
  "key15": "5r68xVWmGxAWztPRudWe5H6y1LQVTWM4c7BAJcBqMomtEtQ5diGdAQYfdB52vRiKf72BHsd3ND25bmZf8G3AhQJ4",
  "key16": "3t6ZRK7fspAX8yZRvCUXJZ55avet59yka4Eg5QeW7x54YUbk3JPyUV1RARDraaUPby1wNbLkc6bmWokFzHWjvc73",
  "key17": "3Krpet254hm7WYmsor2q5SwQmg2pfY2y3QNpJyd4RdUR4x8J4GSu1urTVB4ZoSGXDGotr9DZTSj6UBYTifENhv1E",
  "key18": "KMFupuV3P1t4n8ehtRambRiUH3yEZycdM9xc3Neico8uGmSTtRJ7EzU4BPmmK8Rq5VSPjgRxPXBuM8sXBEmajU8",
  "key19": "4uEEpRkR6sjNQFQ78gBs2Guipw4GwCtXxf7Zv8idx1w3GRVyxwqsKDcEwSi9pZdKxn7rgjy2qJpmHB6CV6LfZ3E4",
  "key20": "5xFDwcUQwyT1RasSVihDY6vweZouBaU68wxJtzb3iyYMT1Tkn6ZQoQoPsehkQmxzZ3qQ3QKXfmC61gDarK7EXwJF",
  "key21": "4YDUgKhAxvSfEcBU1WgkGAaqi83ZYYtwptgdYEpvEdRb1KuV1w8QxsnfhSuo1gy8RXLeus9HDEpxQX75njbMfkXB",
  "key22": "4UsbdjrYfUDSugyMS6TDYQkeWPgdPWksLomRCtVpFbV6FWetkzmZmGMW7U3pateTHbCmNFQ4cdRk5PvnEZSaftbj",
  "key23": "4rWah3Hmr4aBmRFMFT2w21rWjyCoXd3Az3CRxLDbayYbSA6a6W2MdajXt6oMZxUxq45UCepNp5WCGjTjvfUSsdZ",
  "key24": "4BnTJ7bPHVessCdiasJCQTCQrAJUB1mYt87aMdMq3w1mYbWBhTfLfaXnPLT9XRthSm2o6jDfKybDineXoUDZ97GG",
  "key25": "28rvkNXUAeDVXw6VXkTLcNJS7jPCjJtqepSmroV2c69Fnnpi6ftq5YR9u1R9jJt13Moba4NoUXhL64aWiDV2yhcn",
  "key26": "eFswL65yaAnz1H4s4z5gij5D3v8DonVYMxdWyvcKAzPp6sJhxUMkEZjVRJRRQ9oKr85PRxKjAbun58JJGergeEW",
  "key27": "5QyemKDR5JwE6FpBGHBHXsUkbWLgFDthP9kum3J1PA5euj7gqtqVUYs4pBfFUe3W75FrPitTmoqkbTSnhufLYd4w",
  "key28": "5oSU6KESP21Mjpz66zgWHEXNUqc4NnbSR2ZA8vk7p9AT4p7N3XN64B1kFavUQzzGGdpV6FPtpVzXfBjDFyfGLGsk",
  "key29": "2ACBbKX6v41rkkQ1SVUeSvWLRMBFRJmy67G4KLt4y5MCK2J8Sk9YpNYaYmxufd8zJJQ9KRL8rXpEkKHJdFdB7oHD",
  "key30": "4fVp43nQKidBoAz4WQzegAx53Y7FgvRUs1biR8eHEmkEvR6Ay43fhmeBV9DN5LFiAg4cLacagSNjgrT4utmuPYvA",
  "key31": "31fRqqkf5V34SxaFGu8P8AcrDD9DFZiqsWg2cb2wBE6vMRYYbp1LF7rDWajMQTZ8dgf1c71eSEDGW9wS9Q2SSkMX",
  "key32": "3FTuUvF8Eo8TVXhMqCbeoGUxgcDMyt2ePc62UrNxdDPSqFoEQBtCNfb6vUY4h5oUTyfpXm9RXiv11dZ8GK5UmRDp",
  "key33": "42bTxumiNUoQTqUVgvbYXpvrkdgvf7vJAreKNZjGQRSiuuxisBeaXeWipZjhU5hNtvVbaYJFtCM8F2x8UDpWjS5S",
  "key34": "5utQBGUXHqwxGpdpXDqQdGmME2mFiWUiTkDVWPQsDzXdD3u78Wkh8M3GKZZ45pN6sNgGeTTUWDWcEvZngtJh8Faf",
  "key35": "5yRiGwWWZS357FVW7siKN5HEs1Hbk3vD8AGih9wJrnhQZP2jJahqW8pWqtveQHpCFgqAP3tXboi4PZKyrTZKcVrp",
  "key36": "2fKfb5KDmjXBjyE8BiRR9sPbYuoGYmgm5wBvvMF8fEYrfKV5xH5Td5XxXZJfb5f3UM8mdpf91hbP6HdLZemuQoS8",
  "key37": "479u1m1rTxQWKZuaNes52RwsguMbxkKUdk8cwv8JzFMEPiLw8mARtb1LzxNSo69uVNM5sQ2rig8wEkPkFMu7sguE",
  "key38": "2y6isNefMdh61QBZT2BhFhYbYPMUufApbRvpV1Ek8GeKrdMtuPF8UzMQKvDkaSa6AkJiExABBXKHAEExcQGKTpBz",
  "key39": "3xaPFDek4SwYp1AxBnFz9ko9eBj56pRkzLqsuPEkzijPnGhLbdFkUzP3p91riZbbsML89nS95sskD4GodPWNghLb",
  "key40": "QeQsxQC9h8RwK6NLnrHKB1YhfqVMbMe6dizTvKZdaa9ZYU7QSVvDQYyUSyzniQzhy6XSoia6HPUBU6rFvoM35vo",
  "key41": "3AKGtAgqzATNNU1jcona2jAdkrCFSeEJPTvs3kDK2Mvv6aEEPP3DMWzRyFNFLvX3CUhGq1WhMMrjcHs2FNVguAUS",
  "key42": "5Z8JyovVGWPAV4EVaFfg8GK4McDaWunSR3LgwGnzuifcAX8bSZbpvpXkzfSooxMEQn9m5FkK6sst686wk2FNXiTD",
  "key43": "44EHmhrF9Zm3odG19PLSi1LX4UbC2dShshaVoXxMUMbTqPEQv5F5nVjzzoXJorsgW1mTVdpMogb23Y3cNHZF444j",
  "key44": "4xLQukCTp1s2hZM3RdNRpFAyef1rbbkQStBtqpdtwyvERPfzxsMFqT1mfqsNrfHMUVcq7Xr5nsDt2XXH2KNoshzp",
  "key45": "5QQ4hvz9Y4WxeqiAHE8FnpsnykZX97gP8gAi3vvjbdJKca2JcLqvtkRBZ5L7pLdAWF6araLH75YtDDaXSqsQaVVQ"
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

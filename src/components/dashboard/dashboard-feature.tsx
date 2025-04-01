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
    "5n6QSwGdP3nt8e5AXs9wEsYTBcrKP4RTowxx5ZKsh1DT58Vf8yUHvnqM45AtELqAH4yT51XpRsEq55fam7C8Z1mG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wv3u3Lj5CPRAxUQdBySo5XCdVQwBX8kuyoiBnbMNNQS9NfidzuibUfiQgiQXdBKA3mEPJa57R2D69hbUDQ7eJNC",
  "key1": "36XepLQiN2pB3s7BUNxr4FrmDRU6TCShrAZjxgetXBkjNJhkrw3oigR8JWkzbVBbE5PBYyG7hPz4FADkZGsuCHeS",
  "key2": "5LLJzPiiq3XbYHaSv54dKmFi9eTt9hi2TbNmipyUiFPYoTR7uTnJPuowx53jCA77sphsx9TRaGhmByhiNrNaAa1J",
  "key3": "2hf5NTy77z9KUMHecW8X8KjrgSm79dbnsKFBLHdpKhpduJcFMQDHahnCPyg5nRNfj1BAmDn2NZDWssepQxTbfo9i",
  "key4": "5cqSmWV2U4SHE1nkfCxEXL3ZhhkgzUVr2ByMQseztZLVAY3cuLETmpYbZnT1hDKNVKreEi2Z75VYmuTeMA5thtuW",
  "key5": "5KgSLCtm4Y8RHP76ci1og5MG2dauqeXStLAmodEUakE6KVYfET3GaND6djn7SDQ7bHbCKZLo3PVXYzzyHxd392L3",
  "key6": "2GMwWqWNaxQm9CGHcTMoWkR97Xz7y85pXocdajVS961R53Zer2CaD6bv9HZLoACbjaiw2jaSZ4wQZRTy5TEHmrPt",
  "key7": "44uGCuTi22cwUxbhT3nEksV2W5LDzjQYN1gBWsyYyKQYXmyjMQA4MiEQSyNUoQ38hyL8XZHd1u7H52oauWK3ihau",
  "key8": "4BcJdTk5KkmNuMqGUbqaFnW9vYHuH7b4bic2F3JctPb2Br3SMRHGeNuwKq2UMpT5P5zxX5jeB9L4ei1unyWVpAKA",
  "key9": "3bmr8GiyGcBB3DVrtqUvpGmkMAd76jJG3yz57PNwnVaBwFDrHnWAnwLHssiVVALDTLTNZ1NirumrueAiW5FweMeD",
  "key10": "4CBXC6S51RAgV2P8tKA7EpSqzaWJpkGmfU2uYcGh2aF4giQr3tUbxBruprAWD5uQV9vDDkMASszi1SJi5g8va74M",
  "key11": "272reMaKVDB2F2MRHRt3G1DZkiX5ss6SfPnToFdLVJUySWhvLLmHv7ufiTrwiv8FSV3xUUTXBVM7cVAo4PH67CXi",
  "key12": "2aAdKXrGoQeZ3PZt3riPcfaiZwhjurZp9cx2jDvDhBMFtnb9LMezH4h3U8hLU88CZHGArTTRPWwzfbCYzcQYH6i8",
  "key13": "4PgtHchgpj2T4NE5HQn4wnPFREy94u27ipJPdBCgtbNCc5mGt24h9LvRMgHWnsDjFtj44o48jq4S76ZTiSnaAuYV",
  "key14": "2kCBJ4TjtNVFz6s1wr6uMQxRtkdtkUX1xprk421tbWsaiQjqcXfzszBCAKVj6qRyuYLSQ7ix8SWsbZg6ZFSE3exD",
  "key15": "42rF27ekauEzNK8o4gxf6XzE2LD3Nh19nyyn7BKAZ6XVUYUmTTFJPwkCuRi2LXyzjtXxWD2KJXixVUB8hcdoRPg5",
  "key16": "4cuPsrtPdP84rhZGhVPai4iPAmF1LvQqGFYBZTbsRj5JsrTWb8qPjgoDDzsbpSdjNWe24FHSubhySfGJb7UWgJ9R",
  "key17": "4Wig5m3ugoipSJwtV4yen6PpBZPzAud4mkL5c9kbcB5kCd2qY1CPaG2yjo1qsCVmEMPG6xehTaKHm8hWgiVsHJ2d",
  "key18": "YV5di3kg9nLtcxnczUXGq5a2B8NTP7B5NTmKxRpUhWLExHmMzGFfTC18ajbQd33hoxn1AqkBkEdS3cAoQmELEXY",
  "key19": "3vhiUEKComr5riLY2sGr5L4DzC7eg3vtFw4x8CEo6LGGym7Pn4JmPT8ZiP9FyYazKN15quG5wD3YvsyWEBRHJP4L",
  "key20": "3sSsTWQkqpKVa7psMXHAcUSpf8WtGrJUcuVMAncfdQ5ogxj8Xfm9Si2HKtToUYs558CdXsE4ht92p5Gn7g29vcbP",
  "key21": "4DJw1RenmjoS6uJG1sFk3TGHXMgdCNxLpLcuehXKp8jLmhUMJcPH27xXN1bDCWj1xwr7LpghhFn1awirC6ExZt1S",
  "key22": "4NwFcceaV5THw8ifhSPx4G4Ma2WFejLsHvaXYD6oQWLQjtTTkiGekNDTWdtpWAoGYrFsE82p1PJX3vs9Hu89H3kC",
  "key23": "5RyV6vQu2pJYEUjWS7o2M9qJHzs7wFqqFvbcW9ZiCTDSWjjSYWeTaqx6dipytFf8JUtaieTURJUrgaqejst82giz",
  "key24": "3VzVmkjEtu8Cwh1sKK51VqHTfQXYPaRXk1RqEHZ3i31J3gvrULHMTQMktFfy8mgUVpDnb1RRucrjY7Vy2xMk56Y",
  "key25": "28gjo763NZaxTWsaDXwme92YVajpfvKnC5oQd2vyyZXoVBQ7rQVWUDwezrNVf8Kdzs59XsVEnrfsJ2MLsSaF9P7f",
  "key26": "4r7QVJQh35UmfxbjVjY1RbzAM7Y7jDBB7iLKJ1SCMVmwcoe5yH8NnKk1ygznGsm2RcffPSTS1AVK6DPDNJ7EA1sg",
  "key27": "JvxysoSuKPYgF7kfVrgvVXwm3HwMZJqo13bNWyyW7dXicHCEyaCrfs1XyQYqr2v98mL5k64vdFCVCnHczxxD1Te",
  "key28": "5HAQwi12eEugzaKR14cA43P5v8TGUHUegq8Bme66oJWPWkyj8wonrZTTQQe4nhTtHqbt7WunoS6SsezCd8Z4gLxY",
  "key29": "3HuttbtzBtCJHhyZfS8sJVtBsqbeVm3maSga6iKFR6CjuMRJmFNbTuj8wVNstNt39FvEymxhv5tzAxuwiLD6Wx5D",
  "key30": "WfHMgXoN9RpwfkbRFqEbL34EUdDMYqRUZjbnmSHAJNpAHhCaguWhZsHdyVTtHJDAJjUgGxt78gBEKFW81Bu4FLe",
  "key31": "5y6ba83rd99kAjFSDFgjDPToiGsHvepGCb79taaj27CG5PV3YBWwgV8LRdpUCfYBJbsrS92AJRNWMn6Efu6j8i2v",
  "key32": "5aGDDXfshgQ4DnqNYTcBb4cE8SWpcghsTZGqsd7Qbr6uiQb3mVDWEmvRUNdTmMuCHcxYFnVXizaMuzJrGzXMdKHh",
  "key33": "2TFpQJCtakR27VBDaFAD8kYB1XLyfGVaC31xFiRidP7bTDSqzPbPPuUV5TkDNtpxsVKrVpcFFFCX8gy6cZfY2CKt",
  "key34": "5eEPmz33if7BRHZsv4N6p3aMwHGnEDadEYbEcPF8k8C2EScaEtkMdEPDX9KDmxKzPTphDzpeM5rvwkiNrWeHpN8r",
  "key35": "ac7gDnwHAAgY4tco4vJo2thnkgro8fstJSUVsePjQSufZHpxvzGUwvEfbETiyMtufEgveUFwdpXBAVG1ARYez8V",
  "key36": "3uib3uxN8V9jmRHfCX4vnxU4rGKiv6TNshLWAwwHQtKXY7q1ajdAwqtLUnGt7LkFC7hmctkFEMGoU65aAdLLMX5t",
  "key37": "5xLweEmK2yFkFWvohVgC5DeAxaDoD9yer5RXseSfDGuqP8jWP4NVzfYPGSohrHfT89QvHEVHeqpKMgbx98mZHjAJ",
  "key38": "2AbaVpKWmDtANbnDaNAEVCa5M5JLsemfBd9rSEu558Dk2etiEbAQ5c1TPwsyGdAUojbcztnE5xBvdwLV98G1zE6Z",
  "key39": "5DysD3AGdPZ3GQ8tg6kcFRL9hnMbUcLX2xR6t6CaVXZNgu18wGK8P6b2wUSRrsxJUZDuF3CPzckhj7ogRuUuHZUU",
  "key40": "3KrnZx25AKZqppCbGbwQuk2g4f9yVvVQL4jE2RXGEz332uXZwG7coLT97enpupx8jXrudZKa6hJ4sMuddVJZV9QL",
  "key41": "5RQg9Krm143rfb3CnGjPX6EVM3J2HWhTmfzehGLhPt8hutYQ61A8CjaHJJZGqNyjwHJt9EEVKNAvkiRPjY66VmWF",
  "key42": "2BZVMHKfkQbEmFnsEnGMNxYBi7NnQ4M5UcdjxdH8ALKd8eDSj5SBNv9ee1GVuPwRy6nME1LX5WxAUXYvKoLWiGhu",
  "key43": "3yiNbfubE81T5HtKm8ijTJxrgHndbMvNvRyHs8kYJg4zvBS6X5utQZqxQGGixWKRYJu7vCfCWUoi6NTw4S8YdtPH",
  "key44": "5Gh8Qhn1dndA5SQG63recpcqVx8t6wBhgULw6VyTswf41J1vDWKakVrMUS61V3hiZV9cAcUNGXjmzKLz55qr1z7S",
  "key45": "5tsd52kjACTZhSPQb35ovyDmbESXU7Cc9zN6mwq9NDMtQvyCZ5kq2jKbpAqnFUzZu76M5BChLQ7ZbZsE5i5coHAJ"
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

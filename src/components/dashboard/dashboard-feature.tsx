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
    "33NuzxiwPKp2E2eRAmZ8bJg56eakuEAcj7KDqZNd1kCqamKxxAf3qqRHZcUWd2wBfZg6wZwnsh9wKFtx6a6G7hPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHj7MSiSfbAomZ9VL5UNSuckkLdh8fVVME4Vf8x7K9yM17xPYqpLaKj2Z3teau3kJgzwDuh46LaU4LjY5EMZmrD",
  "key1": "2tbxfFeeGfNd6ZDjZ6ZVLVJmVwHADQvwXtDTvuGiy9qts68WB3fWuDXmVVqg3vsiXBQ3NUfG6LafMLjz5yKKBJJZ",
  "key2": "47b4yPv7nsqF6VwPe4YwxrtZT5LCjEMMVL2vVb5JYLHm26W4wN3F3NqVkZKhM6Bd3hUqxC8Ssox6mqFSW6iiisKh",
  "key3": "4FWrMcmRvCA7BifuoNS74Un4ARuS9NoYnqhohevrCSyTmCrNwMvR6PopWeZu2wt5Gxij9t8eeNfCuWJkJjhW3zj1",
  "key4": "a2cvRSutiVdnZ2xxDFc6J87e7LRh4GeSmNtMn11Nm8ApE6w7zF4WkrP27tPuRueJCCaAxTtUfHidB2Lcd2vdBP7",
  "key5": "2LAn2qte2oQbG3bPgw7rfXyoUedudDkcF9Y8AB55QkMws6yBJbgp6RfT1mupxvoigtHmC488vaKQ4NghD15xUkM",
  "key6": "yna7afmmEJBQ7zPZaVUuPkEMePY4Gc9HbNbCY5bvShuB4RN4R6ptk6o6rEQyQoToPFvLaQdXpCuzCWLRAu18owm",
  "key7": "4UUtmcrtdxw4JfHqxSypEshcTHMH5K1ZUM5Gs1JUfAnDQCXtxE65K7e5T1iqN2zAqMfhYBLuEJW8Zbdt1B8Zfba3",
  "key8": "4NMTQg5giLeneBdod9xBgjXfDmDdQwicgxvoWLxoGCmiAJQdJ5g8DxHJZKr86Ny2bpRXzGkNDQL2TxESAn65jg1k",
  "key9": "5pmDciTftuf2gJU4XhYKXESVk1WjyZppVdEaggPWaCMjvkbhwEnzBBiEXGTNQ8ZVbFr5Tzc8JCtLM4GKfVVydBQa",
  "key10": "267qCw1AKG8kGEyvBV2z53i7yZSpKp3RpSU2tjJmAcJrv8Yp8KTGsPs6HoBym8vd865uFE4PMv7Xuy26gzUk4QKn",
  "key11": "4UtcAftTGoWtWmTGYCjrcoUbzdpNurWvxKjVm3MabKQW8z9VSmw85TL5rAsyEjqhf7N89uizPs7as6p6y2NUWdMF",
  "key12": "4u2JJ4RW41yCdWv7kxhcHWwkb1gBLEnAwi7cSWtLpWh3A1BV4ExpC7kCBnZ6QsGkYRexTcZGF6ZWwLiLk3yTFPgN",
  "key13": "YugitY7G2DphCGKxjDRWizyHZgm81WEYdME33K4C19aCquackcD9VSaJQdkg7vu7kpNikthpUoJWcgyE8KDxL1x",
  "key14": "7HcHg9zb3ATrU2TVfGGzSfMhwQnvPXN7vrXpzAhg3ktdbrbm4oKCVyuKwzYiyF5iYtM8UgHzPzyQvtRaqY3ibhb",
  "key15": "4V8AoudZB2VdNxg6vbY4gyYjDSgWA271gd6qfe233qQrDBDpWTLYSGsfBtmLsBcyhPXCLiFBoQ4ZMqbeBN1msTFQ",
  "key16": "3xeDRk1VjectfHsePgvTsyvruMdcrqtidnYgimYioLpcLkRRVrxGqp6Y3H66HneTHrZan7iwFdWfPFAQrRY97Yx2",
  "key17": "4bJG9sZpKQFwdA6JSjCTJuKGRXg6zYA4TP8NJNmPE3AMAEv5HJC96CnGfTu5AkW18nWdbRHRdagfSGcEsCEtb33e",
  "key18": "2x4K3o4rr6iVHv9wBq7YYMMxBWHNyiDLWSNGQQoVXenhjqmkGJGSbcH2ciHZQRATpox9youaLFHuDBtJ9jjMsDYL",
  "key19": "4xNyLbR6DMz3Kg8c5pTWVqc9BBn2LMXdpSEjnPFd3uwX6HCP3vsQvDYCT1yof89FANGdL118stmPUWxcDoy5fCAL",
  "key20": "iy8ftSBe2w2vjq2uuTNVHmXbsZtuy9QbaQ2oQFCLLx2QtHHKFC29Rn76z6YETGGhucTND1P2C24bg8aekTv9pZp",
  "key21": "2cQQpZVvWhsNcFVJ4U7a56RihEyq7YXS7nNam5N7MSHn3tgo914gco9PKFRSHtVdY4J1MvVEmAD6p7AQkvFgPr6N",
  "key22": "5APRJTdwgq2qq8fi8QMMYAy2gLsifYgCEXUaxVH9NjZeS4Kttyqh1NovAz2ZtYKM6XwDevQCsrFD3nuaUUwyjVWS",
  "key23": "4hxgwqTqCrDH86RQL94ccJ2v3erDRy6cdjHue33HupFbbYMdrAxb6cKi2ANRK1AmwhYo7nmC4YNtgMU79Ho1Kpg1",
  "key24": "3XZ6t9MM4Y3z23dVefLT4KGYMFhwxqB8eu9HBCofdmYrxVvKxNessbVcCpk1gHgxNH1enhitALuxwvLvbaCzpojz",
  "key25": "2VZfxxsoKWiBBgJ6z6AozV2xFbtdiA8G2ujvzJJ7dqErYaKJbJTQqqKBUhPDR8DxKfbSxnDuSP2iaTRcu3Nx1MUM",
  "key26": "3LmgxFuk18bHBgDKzJ2gTefivAgBaX29btSXcv8XngUroMMxTktXVqNueJ3LxXZbT7iDf25pLw2Z5fagmkiTKjJm",
  "key27": "3WkY7a2nXtzsFy1pUdsVdy3mHqw4cMiBrzfKp5vFTXmqPuXgeVHAUJoVWphvic2ZKmb7vDm7MQD6ydX6fi8Wyzmh",
  "key28": "2DbP9PUZWVCYniH4CsnPQHYx5fvN78JJSMZjCx13ST6dBLiZ1xTBpkTpxYtPVMofK2ioNCV2rFgXu5frU6V4sdiU",
  "key29": "aqShejsB9ETPa4wYKcbzpYGGPusZqGRkZkYUncU7z9uC8KXYa73B6KjiAaoUsDU53Wd3Z9VQ56Ydkp4Eh4XpPmW",
  "key30": "3ayge1nDANo4D28kMS2yq7iGtiW3tbbaSFCv94YG1SHfKf1cMiSypLMYx4HVNEBFyF7bbDDUr6rNVwA8zWsNiYD4",
  "key31": "5ZJEYMchmKDmEtLPh5Ma45XGAW2NeizYu37sWJuFcYUnu7mBK1kygNuPbAVC2FFDddZjUK6aE4PuJwgT53D2XW1",
  "key32": "38vVt6DFhPbSPFJ8DL4efJ9UusvLQBdWgNmmhqbL51m9P9MxCAVD6f8pRuaTWGEE732uTeoWqqEZDL5GbhHiR6mZ",
  "key33": "4npqx3D3pDyyDKeApTzGNDH6g16QQVtuT81kVN67s7rJUT6bynmHJAa74PZY193Y3c3QU1PumCQkdux3isNNLVDZ",
  "key34": "4QKmGd4q2jMhFNPGUj79hpR1a1vowSfV4pzV9mq4qAHDhzGmKaGdXr8iMdFVatzoXo8bXhDxqScDNggTCzSgGgBD",
  "key35": "yhJvQXBhU4PW2Lfz4U6rf6yeZsbocA3G2ut291HmkvRdhuGLcMphj1eaqtNMLWZEiZSxhuei46HMzpd9FHjAwtB",
  "key36": "3HpXf3mMBQXTQKW6oue7sEJzEJiasCECzrjfDiKhG7Hv6MXtb1JaDkCGaUo4u5jMecyr1n2p9YCG15tA5QxZdTdC",
  "key37": "5iH6HuNc9PDTEdEJtj5dgqcWxAxxcmiS8ys561Pca5JFNFGNRH5QBt5V5jxAovFgQaNsEoaBtgedHsB7zFqgvWhk",
  "key38": "4tGPbvc5GwDRGThWeWLygYRjs1HtN921K74w3fvE6MTym6aehdtVSNtvedWewsHLUQFHfeSWRjL7DRRy5BENZifb",
  "key39": "45TW65NYNzm9SbkALbw5ch7jz5jmjNf717tbe4u2TPVWkWyjm8nC1Uhbizy3wmRVqxCRFTZ1GRY64ANrvEBRQ7bj",
  "key40": "3Zw824vPXGZmfX4DKCgTE9xSZXwm8idAK24QXrBswka8kdVktMikVhVEX2nQUv1e7WsUxvFMmm8HBfkyXHw4kDdT",
  "key41": "5XPGC9bAF7XUJn3vZTejBVReepm8MuGCKNWHL6dMD3rkTgF5gHQdmFmZZHJYs6DP5gyzAVDT3WuMFngyUcpbrLjC",
  "key42": "3U6W1CPsYyatGjwkdLKXNFGKE3ojSixnhdiXmZX9YmRDpUMdnx946qCif27nF1PjkEie4XLNXjsrrfMucvpEbdXQ",
  "key43": "3Z5B6MdAa5n1hNx59SdT6M1JcWFGxn1tLAbYJGYntEiXBb7ggewKYgEkFQwwhp8E894hNoq1KD34gfCj1QWRgrWX",
  "key44": "5Xah8MFZuxMhyGczSmtuiK9omZZSW6wP93bEUJyn4hdoxqnX9GzfhngDuskyrJvq5xfnAz1P6d78Y9DtXebJ5ym8",
  "key45": "3TRibgNbh7VpzxZ7sMW4LXujYzCSest9cSP3TosuRxD3RNzwZTiNE65XZzHA29AhkNDJKhkwAbbU8M5NoTxsF5df"
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

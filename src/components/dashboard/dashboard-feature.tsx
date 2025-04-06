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
    "63Q1AB8Rq9n1PGTZ82dD5kQY6KPZufKAStkuVPGiLGjkRpAhhH71Su4r6BJFimaQsPZb5PYF8qfnQC1JN9mGSvS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rrWMFBrHpK4mGoyS3LPGSoeMHUK7ySKjChaYKFtqgJmQBCdz5xUJo8YFMdjLMr93YRVQnoKk3N5w5r8x3zFXxTi",
  "key1": "3ZwvtQ72khRsrdnCtGFg6RsJXbWEtDkecdwsTiXLMV2YRWV52c38oV9Abfv8LcMf3Net5Qmxw5sGBtNS6U9XnNrM",
  "key2": "5zmkp62rMxmoi6FTVuGUM1ZSEXK2bqxPaax44Q5s4yXeJQydt3pGASSvENnUtxPmvkA2NHxGWXfR5iDV1H8Upoq",
  "key3": "5WujXV7v8TP1rxKVLHcqZujFGrdNHwiWgZkJo1gE9kYA4McQ5DCxo1HWrnmivXtjWxSaKS3HZukdPsnWrC98tQmH",
  "key4": "2snx5RHswJDRWRjQZV3zpjdJAMkFFd7qaWAJCVWWwqtHCGSRs6Q52N8ddhDtwB8hv4L2thoTisigEKMDH51xVbt",
  "key5": "36oKww4J2LehjiSJ3gh4F9AFj4zUZd2sJdC2Xh92oHr2uZDbDD2z3cbVAbPjaTQQTRvq6so5hLAyUwRGXcc3UYFG",
  "key6": "Y2CDboseWu5QRXdPFWVpm7Jk6fGX8M6hb51HQ6uwhUzYUapegeWPk4mWEAZ4SWMEikTjs4xviG2sU9ojs8Ngyuy",
  "key7": "34P7Y8T7ymLwT7UHdNgfiQVTWXVYatP3aGzvb3bFyxb4QcAhe3AjodVhp1zezBaxnG5NDVRnCdNYAVgHEVSMbYVF",
  "key8": "sNo9LSG7tio6DPHxvYgHHAZrVUxJGSN6g3JQbxxyQ9sCJ3EsH8epkpAxUk55Q985WoLQndFvhqTrnvUW8eTyEov",
  "key9": "2oTx5qj3hBz8aejLUW2Yuc74Gv9b2PQfZ6AVQcbPwkj8gVr1EkujLzdyNnuAequhkNX5YBA8Co4u8F7Ww2X3J9GM",
  "key10": "66f9RXodZ3MSjYqwc4tB8dvbG5Q3p5mMWrEsHijFeeundTZvFtK6GkbB1M1nJd1ECh1sZPk8C6o2dQxvsh3WYojK",
  "key11": "27EBFRBR8ZdA9wywcjmJgkDW6GbzLq9cRXkwTs9qEa4UoRkp7JJhpM91DM5nZe3HX6MGD1biF3Mcub8i3gYuVa3s",
  "key12": "5f8iRzhDnfzGFeL4KKFC9dCFP2HVY8aRKneQjZHjqDUq4c6mw9uJaA7VJFTJViAdg8TcPFEgsBNhGCiAxPk5pu6r",
  "key13": "43xWdAsZtQixKBkfNPh5qSe2mg3vMV43nyZBJHSXSjhRiim1wctxAup5fRwmVYAHrdj3jKixZVKGiQLucoTyHpcF",
  "key14": "4EpZVcebaaz4dt11JMsdEPKkx9KWUHe8QNQ1PhfFSmozvndZRy1YtPwYrXczMmRE4kPcUMkbSeVMKdkRKoLvY1Wr",
  "key15": "3D67Mztnjbx5W1n4jCaSuyfpkwhMzMC9waBhAZvxZXL27h6osQM1k5Sc5MVzS4WGFMsqC4ipFALdA3dFvfmWZvpL",
  "key16": "gHHXeLgmXcBnAf6UtLoczYQK1yZpBwC3zPa8gb4QnLSxxGZetasQtWoRg1jnhUrxJXL1V7YgiKccdR595huXzuE",
  "key17": "4VPi6U7v3sb6mCwydXZ8xkc6yXpF73kG8Z2b8gVVzppDNdfLKkyTSSWFAwFLLiDFGttPBeveaqYyp2fFhdMgsW9v",
  "key18": "3K2GJPqQzivVRco4VRu1Vf3iJYj4RASpNi4B7ybPVKz389dPdQWHELvmgeBNeEF5eT2iqTdPnMrvd6WjmeTtaGKF",
  "key19": "5vjcn7y8Ysr1mQKrkRAgidMdikN23zbUJBnvQtYvyTKhRLACFurB2YQMqEksWUjtM7NvfRikJM66SWrUAZfdzVKV",
  "key20": "VZZXkyzBKvrEyL4Pxe54DiG2XB1Doi1mMczgA6vuvXhEJMpXipx16vHytC6o74fQhQTj3UC5StCQjw36bSXMgSX",
  "key21": "623hZh8joEW5U37F5BeQEMFoJUNR32DBZnPiiisSUG8vneC4JGtZ4mFMMBAA6z95uczuwFWcbFQpvWwcpopr5ZP5",
  "key22": "4hT3VxDSQLuM7eo1tbd5eekCNph76yKzhQymmPHxQG1yCfyqHXpmBdeN39deFNGJ1VPSDBbWqLHpqGbuheB8JC85",
  "key23": "5HRSGVsU7kEgsLTMDDUo68jC4ZGsJL9YtnsV9WSLt3w858fXSR2FA4Ew4NeKNnAmJ248c2JcKECPxJLFcX4JTxY9",
  "key24": "qtJDAi2cQhc7R45e2k3R471aoNLVuuTacJKUU3NCV5SYDsvUb7JFa2yXazMiF6ozkQXGJEttpb97o95ogGXE5jB",
  "key25": "3PYhUUqrW6uiUCxePuNjjtyfa9mzKaqhfs28BiE6qMQkiybv8XuzGMR95Uh1afRRs7zTGNqFdHcPHDVXp17CACUh",
  "key26": "nePtRxPYExQHQc145ziG4Yc3CdezwUufMpfsZjNJLNMsy24SekR2a6xQczQ8rqLJD23LPMQCrERWms1ZRXbThEn",
  "key27": "5xA3GrgysttpqCjwGWmJ5BBASrDpyP1TqSdEUr8bBp4K84CkMEynJcEmVai8c5qhuipPne5NzUFKQReGqNzf6SVA",
  "key28": "2xL1cTKeddjvDhLWPiHctNFHrW4AXJBD8HM9rtHx4aw5Mp5eaFn3uvPd66Bm9jevusBrh4WG7hnVnWS5vhB77sBp",
  "key29": "Dk5wmp7J6UtxJrNbcENAYfKSLZmfG8yAeht4YFaCkSM7npyBhrrpLjvNZBmYMrshqwhzoUy69YvAZyyLJhRDPJL",
  "key30": "5pQSg48899mGAncydFpTbfiDQGgnfYxEhzuT3csAFuFcPMh6ror1Xe1yEUT9PCeWfK6WL9UniEm5JgdeF9YXJa4j",
  "key31": "Vgb1PkKgZQCXNsUznFCXFrTeAHABotf5o6g2rQq6r3gsuWaPFzLDeBWXASf5KM7aMYFjgcRYsVnEjcHWRSNVLGE",
  "key32": "5jYsP58E5sHGhk6tvHU3GgeWMszG6vkrdDiFBAHqsaDbC9egncsm3mNkdSmwBm5fKm3Cc4nTNxyZYgHjqMusEHwg",
  "key33": "2TjN5XAA2wV4YgavrF6ebi8yGhuGhTRdnciNhd56MXxFxvfJngfadJjDysFziN8E9uqJA9m8cqXm2oT6j6zhqNvf",
  "key34": "5DwHEYyE4WDM9KxD2tBnDy136eBaxpfhYohXZmZ7kLTLBJ1xY69dq8XTRid2RRH8LRLg9eU59TxQuM9i9RuPniZr",
  "key35": "5ujhXCTFdyPr2wTVzwqYWmHGBeFM9DQmquUbqqgvFEA6tqX1fSemRxiEaSYUgdn7vbuPuACVwgcy9gAj12u1t6nk",
  "key36": "2dxk5J3J197QxKdDM4LwK5fzboMaBxn6jv3hxt1oCfsLwtgQ1z9K8QaDB3fNE3DxTyEgts1nfAhHt5QPDWm89YX6",
  "key37": "4WEtDHVjpfws6a2ZWDGhrsrRKuqeLrAsomaoh46SoHqopBrVuChVTeuSScqLGJvgUgQb5bhtgWehRSnrr8brycGG"
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

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
    "5ib2tMJSgsBEgyXydyqjdXasrA1j57cZebTb1uYMeg8FUBa1qyLu1hEgEHSy5x4ymnksmYi87AN6WgnQiixeqyeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zjbe4axwV7sbJb6YGobDQAsYk1HzYiGRzfFBnXytuqXUP5j4VVjdgmPhSHrYwRiv5vMu8spS95JyWkekLqGeeTc",
  "key1": "2eBPxCXcTnMNiAMzMauYQuwcRg5higCUvwPL19s4s7c6uoiqoJ3Gzbx14AaERRv3uEAFP8asfHo7w8QBrs59QBCU",
  "key2": "5GLYHX3VFp5ompAqkqGaGBtiGiSQLQ2o25TCMsP9YSV9maw6BWrta2MG1oaV1bLQDpP3UZbCWR2Qpdn5xSMCD3jk",
  "key3": "4dsLthnuoMjwE53s331UehkK3P98K9P7DTJFSNwwkZANhz8f7u6PpeeMaKd4USTx5bjL28FjWAwMtVkfqqsbY4kn",
  "key4": "9RCzoWPEU6qL17dVEvw5FWoB9EptB9enD2ubsj5F4JtpGjFRGqWU6jkGS5aTcauhhrqfZwNXevZREsEAGv1GqqL",
  "key5": "3aztk2aA2JMZVGCvQ6MAraqKs3KJXa3QVRRVpKAUDmMnoTQtBb1XTbw9oHTjkQtwzF5rLU6uUBtMYPJcmoK2pZLa",
  "key6": "ED8y6nv7hroBLbFaBVRoFbsNvhBvWHPucKBA9YhdqPEa8xTRa8v3WPePrSGUmbpBKiQB48echRSZ55syM75weAj",
  "key7": "4RUCEvuikuF9FroEqxmcXxtuGu1k9AqQ1G7vysZ6GSxxGEyS9CR3hbpsyvvXLt35rPMJHyi6ssRso77EVByZQSQz",
  "key8": "5MtmGAxvxfxRgnqqMYLaARmbb1C25NWEF64XdpsajA8GCRGdEmSNoT67F28mG28D6hwQtVR6ubwvnkJYG1HuUoz2",
  "key9": "hRHCj8cpWViFVy4ZcMMtQz8HDnYnETAPd6LXvBjRLX7ymafHAQo1wuqD9f9ehtMyLvAj8G9Hx1TwWNd3SBHq6Fp",
  "key10": "2zCkXwrhYBevpcGsyYCE1HDcwfuCG2ryNPxLf5YsWs2WcjswaHQ5DRwFCVFF8K1NK62Ef5eXCD43HtexrhQzUYCZ",
  "key11": "3hdTCs11GsbwHRFg75GsqAkofApitqRqJum4sHt9EtVEMyWB1UDpBVTkCPc4ddx8yj83CWjDHbuqhQTi6BsKM8jg",
  "key12": "qaHt7xySXnGSdEmND59ghffCXuF1ofpoVLLQg3j8XbaidaANmJbXPM1dpbJnxDPMS68H25nvJgrZ7HFWYbL973x",
  "key13": "7jjjQ1PSN558LREkBgGAZoqxre7S42t8KTQMDfFCYPogDDe686dB69bAXbfZgtSrSzRX9ZCQeh8d8nSnGviM9KG",
  "key14": "4X3GYss7GBSZNqCwwujhdbfhyKZkbanAdRoKrkiLSECMT5XYc1nLEq6QzJxxhXsmweSDN7vUJMRMWvgHkNZpAL7S",
  "key15": "6132DUQh4pENJKFCbfhoszLCPMqBK2uRg34YtPPMwTKadwB9g2ngJtaPyHbW2egQu6EcvwXYErhjaBWXMSyBC8ZQ",
  "key16": "4H3zn74NEeetVeNYXHprsMb1s2RvVHUs4CrQQB9AHTYXUb9AeFBT7hCprJ7JGKKQn7CRaqLwcxDiGSriX3YBMLw5",
  "key17": "3kkLcp94KNSV98afAMf3c1m9MsCc2Ak9drT5UhTpeakTsU6qRXrxD3FKsgAZ4ufPiU4RPLQjCzTVT1JEcSPCTpbc",
  "key18": "4TKvh7WkpwywfWLPSZA79sxhnMkYPHT1PQhnfBEFawkopPyyF8mPdKujDJvoqZKGS2pvZ58wq4ijv9BWLibJi1Kz",
  "key19": "5VRDDQ1c44C7VPTFAFLThQjYQCfhukcnm6ncLmkdAMm4f9PcBDxokK8X6GnHpZ6GS9fJ5fpauparbJYSKZXMMyQZ",
  "key20": "ZEQ3rrcSUJh4aUdtRvvgPTThnXhEjJs9AoK5rUEZG2dMiKySJTmCjigDW1ep3BmsJqi9PLh7WB2xP94J7Qki9Nb",
  "key21": "3gS1Bn9uHmyMKX9hCXUMtLva3NyY9jpMSUUgonFxs3moV9CdrBc8iWEPfF3sGCQmy983QU4yNJHx6Ca7dQbXotwe",
  "key22": "54ihSzLmD89Nj3iQCPWSPFX4SzyiDEAF13dS5EVFxK5DZQ9FWgDdC9GT5bxCw9hJQYeaAzEhzd4MJfbJr2wDUVGk",
  "key23": "4bLADu8dVqoGFfow8DQ7hPjfWapP5d3f7xgh6veZ1gym3AKsKt7HEgsuhCd3bezVxWwJ2roe8J8KQpUANgb8KouT",
  "key24": "3giTFnmFxTfgCfKKmimEfKQ3YjufFhpaCY4iGduW83cHW7S3XUgAxj6cPeY583y7bBNZ5anCp7c5fUZNEpErVBQ5",
  "key25": "3eEqMmo493CypexvuMD22h4R6sLmn27cKFmozz6qZEre4LwRahMDCjdMjet2QstroaZUvCnHH56vLExwF3KBraeY",
  "key26": "3C1msyqiqiStLyEnBsVjcmBT247PQxZ23gVrW8LWAthTwjVR6LFKjsrDaSUdi4aujARGCLZ1i6szru741nKueGLj",
  "key27": "5zTP7NHSFdNmU7GyYQCGW92feNALQxsmRpULeT4hCN2SFFWR4cNrJRToVHGWEcxcszGPb8BYjUPvg3Y1cMsCmLK5",
  "key28": "5U8N3QNo2DeWUhML3XuarhzuZMrFM84XBagbWAWSMTH6X3YCtYSwkqGaX3M7QLKmPbNJpxjCTTShu19XWi2v3L5J",
  "key29": "4W66YtLkNU736WwyWhSP1wzhmJyoxBPmKexBfJfGNYTLPAtJYarkGpcM9iXbdkKBqfptdZ1ph7PtZ3eKeWhGDnmD",
  "key30": "27U115JxACoAz8NAnVwfbUbxbSgCQ6ENHzxYuhRvJnYE8DPuMPRp9WhA8XbUF7iiMSF9LGNpTyGb3ZsbZRqX1eZU",
  "key31": "zHDCJ498mZmG78wNJyta9NM2jv5tVrGA9LuPznzvxnH2qKURiSeJrQxgJ2gGF3xxKoCBkZJdzah52t6R79mNHE7",
  "key32": "2Pi21qtBPBwn1oo6jiTBdoQajqXzy2tBkbDtRQ68bXXjYGCxbrpMwUUo1tmUZXW9gZ3BSfejbiWh9Ypub9NAGE3V",
  "key33": "3wurSrQu5Q25a9qLCkoNpSbbzVR49dTePbZ5rxULiuvhjcasvTKibMCZByBoEqxBqyUG9kB9aDBKUxkXLgpnk7yA",
  "key34": "5eQ7EfFrm8bDGvdZam2y9SHoXGpQPhBebjri5zHed2JfVhzBdLV3Ci24mS3uvRbQCyT2R8PHReg24SpJFivf166k"
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

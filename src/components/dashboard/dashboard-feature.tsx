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
    "5t8pZZcga9N2oMrbwCYkRh5FeU623EoJd976RvDM86eyiWKPcysM5ZuwMFQEt2s7TQDTY7HBkQrwfvu5Mk3pGzwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Mo2DaoSfFE9xCQi2JwU4Yx6XMdkRQquA4BZeadh1QQsvpKLbjfhzMekcYQFFRX1b4DN1mubFLYTjti9a1hNBDx",
  "key1": "4oepmiqBLduLjWLEFVFCnsjMzM8j8oguw3hMkym5Yk2HmN8MLwk8SnfWLfDJh9xynAp7pC4A4SGxEEx84RrNYgm6",
  "key2": "tYkyhjgPcDZakJkkQ7jvYVUFUEWZQX2LBswexHGHfVXZrBu1RnVvXWDYb6P7A3DbTPjmyKewYWL5DopkN9KCFDi",
  "key3": "2q8JWpihjao1R8gitjZfNY6B9FE4hhdM8UtwiJm9D8XnhkzRGLwgrgrYQLBq4D6kNg5hqoW5d1PmiakkspBr8du",
  "key4": "3eGbBvEvN4WhDMdkhN3uTF93gBRFZm3kzWHBJSixvsgcALZqJg7gxQjBpBDDMLX57Lv37cgvgzmAjByCVAhNjg7a",
  "key5": "4p6pf8F742ZWquyrW5HMR7h95RKggmwBkpsikC38L4Xvv91YdfFV6bNuxk6CpfFHqrcMAgu3S4rT7EvHsWZDde6F",
  "key6": "4zdFVxar6ZfRQQbz6Z8me5rpsaDJkAZqbHbUAPBcxp25Wq2TG7BLBU2druJukgoYUC2FCi3T4AAPWxxMNGBqSTEi",
  "key7": "28jKj2z4bFcUiWrnXyfdKYrprqQq5D6ZfUdLDV4hLVjuiM4KuYLWAe21Kt4juhPXv3xfh8wGVUEHXLECpLPtAQhc",
  "key8": "5NB6U8jj8uSkT66dKXcri1wuzJ7DGx9yfuSm18T8p67iTsQ7LvtsoneSGcGwjP2JZGCARJJj75dASKFqTPJeJvwm",
  "key9": "4Z78QcbWhGPsmADMoSU4RtkCcxn9tEPS1VJ1scXjsQfJq9Ur68CUVr9kSKAsZQuHkdVbGmpBw6sMgTemBMdAA3Ef",
  "key10": "5Y4yDGntnJ7QYWY7P5nha2iruPHy4LxjTFyxW31wG5MzGi5UkgPWBQcEpoDPbB4pPcqE7jVSfNLRqAbJPatszUkk",
  "key11": "XxzkALtbczAwvg3LzcjFk8sRaJbq1q5JCFhytyANpQ8t1zcQZjFiaNb3A7Y54ihRX2wn2XbJ9Fie9PjsahZAdBL",
  "key12": "2aAH54QptvhJ3SKvexzBg663ok8TnCCSw18utHf5FuE16GVzAW3ZXpLmrKFFafjURKg5HCAnJPjmMV7aUGn9KZmK",
  "key13": "4nMLacGtFEkHn6mpxrSgtrheiNnuHv1PwdM6Krs5JmAEo9pkQ3tn79Di87YxpBiXT3xoWZRPsQNT75yTj4MqQPZ9",
  "key14": "3jvnvsBK5iueoU3tnD1TfYhz3TZs2Y6qYrwrXvY5DotMBfMrEFpd2hncidFS4JeF24JjSnMBmPv37xKdGxKE4jGw",
  "key15": "jjsaDoQnEQ6Yh93eBSyHSg7cHzYoekZkxmAEmRyoyABJhM3AXKHayJPE7vEeizNb9yxGKeboFkPfjbHE2DfdVam",
  "key16": "4d3VPY5oNbo4jVAQeeqN71VcYHU37NcFk931RbzKGZDbeguAj2vvAk3HMWa9gezRgbkKetoqb2B2EiXgwsxkxuR",
  "key17": "S8xCQLCdQJNJidxmbUT4cZb2W9yEs1zCW4fZpcCmg7Fzj3PvFKPAhy82ZCwckcxWe39ioEPoxQYWYe664d15d4u",
  "key18": "3TL1BE9g8sbSEcK7GerwkhVYGmjBezz85HS5a4yRcwxVTYh6wp6zRiJUTr3RR3egCnubCrNhAVV8YqPAsjdwgcnp",
  "key19": "3auTAhDHD1B7GX5jwYGr3PtgGiC9PbueGr7BfJYyRaYcfYgr7ADBxvJSxiBy9iSKs9r3puamKP1BsT5ZE5LgT8JZ",
  "key20": "2QBMr3czT574kwDPiffGm4JajwZGXDCV5hpwUmMvpc36gx1BXCAXE8krFcmzk6x8TAs8dW8ELwVTrE7ymRNtHwKJ",
  "key21": "4egVEZ5a65PxUnMYoiW5Hvjim4TqNJZn6BQrB9qVM4TbzGkSjFYeYP72voShRhgD9sXQ8mfq2QuDYxd5CvmPQxrX",
  "key22": "4str7HPXUfbJPiXaA3eh1dZTT3JfE6APocFrFxG3mC1c8cfScq51acVzndcZYZVQTuoWH7j86qTYzRPSdxVEvw3s",
  "key23": "3EiVba2jsRehvHmWPdV64eEWJ6Z7KGpngGSXyBWR4EnNGy9GLcrHCoZMsJN3LKR6nLbMv44VWn2Qs56nBEiajLS",
  "key24": "5Q5m6msyWdDLRN9ZMYjbtmsU9VgBqJsiYT2cLGUNrCkXpzPhMMbQSturFA3pRRxdSBRQCrB4h5pPhTepQCL7hnA3",
  "key25": "4xDRe9HahprUE2BwCF6mU1VNQ4JmnHStet1bKD9EHUz5vbVPP6vx1eMn9DvvntDMoqU3CZiSBsHGHLVALY86zS93",
  "key26": "z182w5drVPge5YQZ2uYP5GSXaqsxK3Sij8jC152x8DkuWJTV5cHJsb52D7X21z4wibkUzMWTT1YZJ5N73f4fnp7",
  "key27": "2QWAhwmGwagbYFpkApfhK6aHR2dGq7EMsE9xZRMKnjKL6yfLQkUYkbpygbyx6vkVy22Nfp4kJekkXpx755u6DXQ1",
  "key28": "4vR2qTD8udg19Bapy6EAMdxzB6XVLHrJxbptU4hZh8cT57ZUQ9fpVJwJnTUaYjPCxYvaErXnseWgGoDohBBJVw2K",
  "key29": "4Gzh19moPTxPckKynZmz1c87rhBBhPdidPv3xtQSq2ZeKQk51aDAaqQzByUW2qUxHtJrfzPJmqkFUgSxPgCKeGrt",
  "key30": "2LrdWS3RjrvgvKs63H4FumaesHTpanJr2ewpGyM9sypg8dFCvLMT84d11PVRsbnfducwZK4QuAoErLvrM6K5SZEL",
  "key31": "2G2mehQrPoPxHiAvkbKJBkQyHZ3nnLLfuVtyjC3H7eDtQ9UCXRa3AaHxuikjFY8d8utceQyGFpyZZaBDwLp7HzZQ",
  "key32": "58PD5KCmPq1QJmXb9JxpEYsUgJoaL8VaV4PzqsBaeP3rv4NrFjH4WK5WBodL6qD8oyC197BZmde3yJEkd2sPrvdj",
  "key33": "5ityqiyj144vfGh83yE86xgkByDRcXH8EWCD69EgMLQVyJD9b4qhubg4oW2rZrBWjM7JpRys4oA8t1sznTdVms9D",
  "key34": "566NTxMFQfSW3Zm2oZozw61oRFhZpnCvy78XCfpfA2fDDi5AB1mbDanguLgYpjmqjShLy3PJBtvA7WmkRex1SXxZ",
  "key35": "7QyT5Sa13mBZ5BuCwgudCtFMFsXE45uz1aXqheLEcUFmdbcM7VCvw5PAL5Mhs7bDgvTB6D77RMDNNkrc3zBNGNU",
  "key36": "2oNsETy3Ms7QxrybcWVDJvTYRDWLPqM5ifkDzm9cQt4NsaEzD8Pvp2LprHk62exSvprMJB8FVF9ujjMuHTiqCetX",
  "key37": "1bGUaHwewvvLPQaL85HcMwSk3ZatjUAktkNCmp45WJb13bWTfF5vPyhchpwgLSXi2v7UBRgmaA9DEcoPYBg3ddp",
  "key38": "4dpk3bEMeXvYwECGcBNjFikpjxedzB13PJ6ANVApb6XpAATMXRiB6zBtHVh8drWZTBaqxii2AgqLcW95h8edqoUH",
  "key39": "37LCCjVpa4Tcjv6tdo3jzWT8tueu2sPy1jGBdbf7v6zToUvJMYJi3hQsxnnKcn1WGgySPLWvGAhkShKdnKPNscUa",
  "key40": "82b1uDfv3A8VQjpzEwNDS1AHaBYwcLsiPa3dF99CWshdgjHLUxRHgp3EUoHGTCiGP2xdHQ8jghoNasfFteWhA6L",
  "key41": "5mBsTXpYhi2yxQb9h1sMd1dNM4P3w5iBSKqT3aPSP832WCfbRXSmW8CNMFNeny56FEDJnVpMMcQpLu8otdWrsnCC",
  "key42": "4rt3UFPLF7X664UWDpeaJBgb61Yu7saU5Ps5oxmQoRzT5C2vZ2jewvNAgpejpYmj25GGZDEsyTYfgfAWVatPkRbX",
  "key43": "2SrD5CA9KzYSGDbG6bHMUJNFhjrobytErxUes1ThJuuLuLotXMTELC8evmiZBu36HAsd4UBLVT919mzB7Bf2gyLk",
  "key44": "sRxWsUrwBjDVUyfHPKxL1rZ8wxWoK3sewNqEbCKicnixRSG72MZWidxDrxPXQvK7CVFHSKEcLfX3Jn2YZCFYiiw",
  "key45": "4J6BcrjCazYdETSBhFwE3QA3taDiZJVFTLMp9wjDud34dm87R1qcdLy2QQX9jdcHQTZtZZXFmhL47aiFe91AHHUr",
  "key46": "HhAxim98j5EgAPZCVeAF6AqT6L7gBAo2amKiXaeoPDV3825NM6VhYiJNEvcPseThQioSBMJTSPhkC4EYNXHQBYZ",
  "key47": "3gCXpB7y4pNKxcqQrWcTm7e18bf3c55xMjzjybvUut7V1HEYzPz9DdUh5ZgHvKbTkfsmAxDa4wgG5eunpLDe6yHp"
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

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
    "oamfGbcnBe7Q5MYa4nBN44S7mLSPU3aMmFMxkuB9Gt15DUUXQHVhGoHviM77xS4dRSMenfbjrGKsKko8dmj1WCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26H9xdaifcFfnuGdYixoywp4grfEs9sKf3A825veA16hhBRTN4i6Z1qNnHbyGwJL2gVfisFLcpqgBTSSWebtDM2T",
  "key1": "2s12rVBmZ6XhFzmQBxfdkxrKhshLc1A7cG4hEcY5xHEXnpzM47JjfVHvJqooDHqQkLHy6DcpU6sBDLNDHkMztfRV",
  "key2": "6129X7JRhNSSoSHsx9Zbx3vmGoRVvFsR5iFoMiQ1SzACi9zu2v3pgZPZAEUhRs3ngvBr9pgy5P4Lin3VvvbD3Phy",
  "key3": "5NbGStDBVTxcjK5SMH1gtLLGH2QVe5F85VyRVEAgyU59y4mnNpN3599T56s3kZAtz7DfBWP4zvE9RmTs4oCbApuB",
  "key4": "TypM9GwnNzrhKacrZPnuMtQYZKDS3EMH5mKF3GQpoiSR28r2Uf4DxCTc9T7M85hgL6gwhKB56GXk78MzJ4r3zQc",
  "key5": "45jfGVjM1rXG6J2JLg6HoMEvx5dXPddN6kdC78U8S5cUGrs1i3iUzxvPYiYUDZcnrFr5hVXafctZSWH7P6eeAhm9",
  "key6": "44tTBGv5QRKCbPG1JWp6Z8eZhRLK6FswgpccT7L1Z59tz5VLbLba2vi8uqq1hAoUNBQRE9jQ7Cm3TN6AqcjzaPGa",
  "key7": "3M4N8jeVHdrfKtz2MtUzTJzUyqshXDGbeqzvf6CzhKDgqVNa7JD3XY361ZrBYzZY6wpzEwgBZ54tX3G2Z1dcSbhC",
  "key8": "4rnzq92qgr2zwzvrwvP6DM8hgHaoLwsVNavgFY1h2bBp2k5URQWHdqnsJdEVDxnXpUwf6QSkwLhoapqPT2uGotpp",
  "key9": "4EGVUu5zzfgQpStn2PnStqPSUswPeFvFwN1PvXFMANytPvdcGpGEGPtQEqsK856sj6MPAPxjEyWxd1nEvjztaBdn",
  "key10": "4SB9ZZ4EZptVUHq5khnT34CXvxtFZ8LPfStEwLfcaRZMUVX79bjqsx3evkMB5B91FG5tW4Ascadg2QfoK2bq2rRV",
  "key11": "9JcU9VqEwrr9ChJQ8iX35SarrnkZb519RQUqLQfVYaXxHMEatYkkZHD3B8E9dRzFKwGyZ6AP84y6Hknue67vjjo",
  "key12": "3X8xt3BUCrXpBLEDbcWB3gax31HqmeY1gkRxjHXTkzYrSbZFiDQNu9GAMuv9RCGob86knjSC3baepWPWqrQrfxvZ",
  "key13": "5VoV5eBk2J7fZxYxozLhLcHUJnNmdTAuNtBjcQarhVb6rbuADheMtqMeWQjZNpSoHreZNSSqaU6YHywJwDDZc8pQ",
  "key14": "29NomJXCeEaQXPUyq46CcSq4MiBh3uzsKRyXuAUAPtbkTr5REorqSMDdRw8tvYK4RSYR3pGCiD2rcG8pxRvs3bcG",
  "key15": "2mjL7K2KsG7MNWoaQnXQnnTJ25iHwR2CA98xc84gjYkFJxJqW12KG6Ms1Qeupi9kc3Go2sYJFPenizL3rmAKjSYZ",
  "key16": "2TUBRhSQWn97bwfg96omJnWqK2QoegJafeXknfUenVQurATLRVFa1wSwYpL4PV4tim5tC3izbmXWz3dsk32vkHaz",
  "key17": "2vEdaedCzq8gtUDekYBcGN2J2j4dfCQEXkjbRVPRJXqdkarwQ1fxe4ZLvYokJogdMNRddGsEMVYFQnCEtChQ8tXb",
  "key18": "5siG4vZ8Yr4DuUkdSTqpRrZLc5YP4VqatfcWjn96uFuZ6YMQxwiDGfwnNCY97gnm2DLhpEC4a7D3fRRHqBGecs3V",
  "key19": "568L3pPCnG7Jnt5YyVsmPnzzBqhaqJmrR6bpc14JpoNy9KQvYTEz4xUhJe7naV1gSpeBDoD5iiFhGz3NUz8wCTw2",
  "key20": "39gKV9ZJms9LbRcCTHMyucHNMH454MTRaKr8bADJGJHjErJ8hjJ9UW8Y645K2qCMTHNFJSgHtm7pGkd2aESsfk1j",
  "key21": "4whMBNuqfDUDSLDoeMAxBpWrt7AgqAH8vsp55AdjBmqXBpXrhR7bX9S8b6ZWcF75T3Hs92PbNxNSGUhqXyxVYbsm",
  "key22": "3uokjnpuqFrU6rTHyrspKFvvu61A4aY9qHDbyugPatarQxgcdXpviPzzoUHF2r65w96pfezikyRFqmzRt3kXe4WN",
  "key23": "3BTMGyy7XFMQfhYqiBRA8cxB5ZfTuxwDcxpvmf1FX16gSCiytmKWWfMvJkUZqpyf2TGFc4JqECKUWaQD7kpPiFyH",
  "key24": "3jjAp3DHMx7USH5Qyc6ZyEJQP4QGPoocyz9nbDXzE6tNfiSigUvqXG8dv5zwdjpfH3NGMxMtP1us5PUbrJMviPpR",
  "key25": "2GNbuh1zPvBV8jd6KntZp8qhCkE1AnUmz9pRoBnmUz865zpzErn89WR9QPc4S7LpWPTisSFc8655ZZ27bL8dvx7A",
  "key26": "KEvYx2JYyXpv9cnp8Uqp5cL72VbAuAB2CUSonZ2nws21MzoouiUrF9BJ6SXae48koNtKrzT1UwqEoZKZwWPcq6g",
  "key27": "44cATfDaDcsH8P5GuQ9QVzY2BGD6ZcaCQ4aa3J135GnvpzfAK1PAtzVQN3p1a55CnpjaMDMURJWoe9QcLFUTE6AC",
  "key28": "4gjC4mfGhTwV8TCTwoMccehvvvKascz9FbMVpU9d8LvCdFZ9LYixNhvMS4T1ZVMiRp1AHEpHFSDchnq1UWS4b4XE",
  "key29": "3J7sbyPiWwFhzzJb9zKCr3mwV4Y4pqqm6vLu5CCr8cHsfixTLmYBEVZCMFXAsfCoJ7mjG6gju9RiYDQfPwpyZPE8",
  "key30": "2BTwa9NohrtXYVy2zkctdi7hQCPpmv4Ze5ZDePUXfjSyShYc7TvxLPTcqad4DZqB2ezMY8dTcmrPBaGGXECFVUyV",
  "key31": "4vu61mErt9J2eN3FB7VDiMjrQdk51D9W9LpCgBMBef3MKviQexo4BY7QP9rJH3rhA5YZzE4WWq3aSCsTvamAKyW1",
  "key32": "cXzefXvx6TJLxnfrqWbb4c2UVYx8wJzpf9SPcard5diet96rmFDoxJXEDof3Bw6bDAVwuFdKGoa38XT2vzFmY6U",
  "key33": "4M3okVj9hvCVyGxjAdnpGRT2rFhDhW3LTqPswXN4Vh7wTfc4FSS4JYrp7XGRn7Emv78WdizaDnBRssTkxaFvGwJN",
  "key34": "1224svEukPk2esyVdkn2hrxWirzHSekhvvq3gFuKsreXWspJXMKya7YwfDkqubcfrG4C5a6Ncs4PfUY2Mbcaavv6",
  "key35": "5TSmTfcwaY8JS3m3gfiBZkknDGGULgSXqZbKTF2VKmqGq4nbxj5EWC1g8YAC2YJ5yCaKhQgDyjFurv4Fg87knv1K",
  "key36": "3T6X6bDukdKmS7HGsuuovcCFfdfmCWKMnhVQzcmycpKrXqYdZWar94ZaNsUGRL3F4efwKoJLbMAnfeUZVLMJ8N5c",
  "key37": "3m7TwKGaPNPHzL5R9U2kmzgXDQvXgKQwqUUJDR16rXEdr98fxf4BH3gfFitBHeWCPgHaVLKyN6KeA5bjcACg4AxQ",
  "key38": "2ExuGcs9CadnatgGEjACgHecoKJ9YhAtv9Qo3LYcDgCo995H5uvzzSAxs56WDF9SNrfHxRML34JBzLTcKg2GCmyX",
  "key39": "2dVnhNrULPHDkhFn5Hp7gLTyhZjJuUVEDQzjjBqqE49VsKh8Zsqm5HUwKBKJWRfMngVVZ9SJwkZLaqnHtnM9Kgmb"
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

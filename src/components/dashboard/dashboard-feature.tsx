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
    "5FMPGBKELGgwCmHfdmfuVaoJwSqEbZR768dD1eZ4xeaDJUh4VDBmgufLvgXVWfD5GrFhoGaAsWmUEbJ3Wbxi11VE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2odgiDPnEjdZu7JF7jy1nJoz7WHPBx4xCnvxXQB2qoYE2vpVQsUTwwqqojXXY6MGbQTGZfWarAe16yAKmXAmDMps",
  "key1": "2MKaqZG4jFduoBYexggeLQqADU57WDoq8LbKeUqeXB6RR3XUMc2xLqpMbcr89u9Zu7AVyTwwAsrUUrQCq2J5SGXa",
  "key2": "34RBYXEn4JHqE6UTNv2bmbztojbiECtP2mX1o44yYNZmwC9P1QkwtWLKh9aYgPbwdvYNyTyPQ63tS93RxU2T87Ss",
  "key3": "4hnyE1W9sFe8VhPnckBaRD5Kk1iejG36R22aj2GsdqbrpEHNv536xqHQRb7rvrnAboYi4CoaN81ZrmTS8gtpUS5z",
  "key4": "2D5uz1PzxesketzrXq4kHSDTLTXTF4fMyTjkjHx3eXWfvNqkZZrFjgP1nDmL4kPxXzy9y2TBeZpYGY8gFkqiss4k",
  "key5": "5CtSpBpPSDGkb5oRV2QwVepC3pYWLv66AR8SFqo7Aax7MFssMs6uGi4US8PL9HGNJsDwLtRf3nAyi42camWz19xv",
  "key6": "5tehkQfBqjrRxQifZQCiD6vmNxhDSKhymRZFT5EEq4BW7ZvrbwsMrp3PpX6w28qMgnZCXc7srxZ6reybBqhZ8Rzr",
  "key7": "2gcPtHZAdvN37wSN1PDnp1V5tEseu2nri82YeEEcjVTPDLMy6x5KJX1YEhotBr3C5Cmawj8WJZdA15bgz7DEgGim",
  "key8": "3cWjKuSqgxT5K93S62HPg5wejRy89WTEoCsAqtR8co635CQjT5qcN4axzCgt3cEaKTa5vnczqoeBRUsZzakeNbjK",
  "key9": "3ginJ9AzKbBSLy67R4bfY8cUFPNiCabEatiEikHAx9ttinxpwiGCGuk37nF2gcWWMTyud8Zbkdbc7HHQ4QJQBiE",
  "key10": "4zBETaPq8Zna6FvbXqCsigBxdCdXUFk4cXg2vuEtLdWWzrobmZgU3r2q1sawWVGTSeREZEVNbGy28SRcLGXo2swz",
  "key11": "5ppFU4iFbtN5PHYMpeFUv2sVxqQRqSRE736xX6gLTVwsirsAzbgFXqz89Bxw3kVSAJ2uhEdijnSGPnSFCyici7EE",
  "key12": "5RGfVBDTD4k3cjzVLRa8UEoStcEyN7JRvd2ZLCVzW29HPpP3ugyJNawcsiVXmbpx5nZHdgbzURchp6MJcn7fB6r9",
  "key13": "5kMWNnZc9ty7s8jeVxTxDp2LrsMjqtujtp5PPLHUeNSXToZnTwTqhWYfYteAbCkFNVg7t6eEDtJXgtCoKRjDkcPw",
  "key14": "5NBbQyCTAoNUv13h8KvMhkbmf75nrauLSNHdtyWxagNtv4XZc22LgdSiYXap3s3VeJHTvjatxZ5PEv35TjfeYtMK",
  "key15": "2hWeETpKANXsdMg2aASZKsuDh1nAYCV221V9P47qQfx19xUzhCq8DrbmuQa9jSheYMenXbktpr6CKX4KsmpmJXoQ",
  "key16": "3mRDFdJ2WneMvXrDjmqztE9WS7xu22VWRDvRYMUgzPvFsXpKwdDJ7T8jnztBNZVTd4kDijedpEk3b6nfKNJGz46Q",
  "key17": "qHJLEneFGg9r72sQoYVcyb7HvkHLvpDdSAKRzTqe6YWwe8tgszdhHmtW9MP1B1C9fi2EN9FQKq9qN8E2AoGoBna",
  "key18": "2yVxaTJ3huFJL323opZ8dMncrB6Lns2AShLot8V7ufQn2XNhhU7oSUPzaEQ3zM7pwpMMyULDtX4EFg8yXa4WuEBv",
  "key19": "41sGPsupLWnBaZGmSBTuWHmqvHPjfiDpCgBzV1ZAppWMFjYnTpd32iLVEkQZ3tUMQTDzD8wsfyDsJpKuLJWfPsQd",
  "key20": "4uxHYuEFUSykz4b7pWg3678xtLEmt1pLVww53hAYPSMZxJHf1r7jvUNQPMHQSy1KanrxNC1vvuNmvdpmSUPGg6MX",
  "key21": "5C2vDpeTaUrc9Su6yjnw5qN9NYcb5u3Q9JcDGU6jLxD38SkMohMjzyHTmUjgdErBmHBWpcs5HKumVyUbDPZxiQMf",
  "key22": "4VY3vjSUe8mwUPMdt1QjJXk144Dqcxri9bJAk8uRB9F2zozNf7DH1MT7dbMWko8DK3D6PJ3eqTe5kSm9K4iCYLuj",
  "key23": "8jxgFGq1UbQqd7DMAyvixzeaiy5eXo6PsW8cisUsQ6PyAHCcvQsUENzrFHjtkWuKZcbYrYoWSRQpqcSUSNotTLX",
  "key24": "3zygJNKYxoP8bcp3rHoh2iDM3UeSibzE3YNEb9fg8TTK71e5jhDDo6rFGM2oXAYJhPBNW64ooQqsEH64ackvdyct",
  "key25": "44tiHLaNW1AZJ7gy4XuBAKTJXEYu1rUsZTa6dWBSxvhjeRH6HDophXWGw1idtwN1zGLrFLrsWyxVxgqgDXd5n6mk",
  "key26": "392kd6KXcdMxBUvoeqZcrumqxFu2E6Ti8qc8zuF8n98bX24Xu3m8c7ks4qFgqkLQ7mnvCfQczzqWA4noujk8Fgt1",
  "key27": "3AAhteWKPTZRHMSq9JG6VcEaBq3xF1yRvYC4tPqP2SWMyoDB7JyrzoVDHBfHNcDihs52xb9xHFuS5ewZZU1TnV7R",
  "key28": "4nMS6yVnys8afx83pjVm6m1AzWjaTDPGwXkcngj7tFk41Td6x1hew71S9kgNVFVz6ZhvLaDt6G3Qz1MmAT44y8U6",
  "key29": "3riSBVUdc1LVYBBnz2tsd42TrmtqGhVD6F3xNJEdGEuvw7zgFmUvz4PRPSVuiGZ4WDcTLdUdxqQivq6KM5AyvNfq",
  "key30": "2VxKpAjPSEAcmgxgJPVLFx6nwYfT1s31VDRxaG8D911qDyqExTpXJaqF2LYoHkbJPz4mWq9YyVSaYLpK8trccydF",
  "key31": "3hVBL3ABZbFtoNFvSujKyQHxv1bG9KoySghYa1YdQqFSyuaGCtRrAFgReWmKjVnEHiLWxWcc5RwsXiYbhU7QxrjF",
  "key32": "2ZGSe89zRTgxpdc2oePAqTf4DQ5GUEkLmZoZSJRaHdUnU4aCgPHiMqJPdW6azmLwSrhySxr3ybF6ggc9ogYaL1VC",
  "key33": "66DiAchRiZHqvcZum4h2PBSh2EB6kPhRJ4vHxYSHbNHF3Hzy3SxDhKNLNKfqLK4V2hYSbjeKKJYgkDAKeB2eN4ih",
  "key34": "2YDafH2oDQxj3TCtG1HbjevxHJf1Zs2cvcZ8QyCKmJYfA1cgTCcy8mmYVrQgn1JsBKBrZ9eacRjUMZXoictJ784G",
  "key35": "3rmCo9YrmK95mDbsahFtny3DzdjoYHMXHhaN5yZLFfvPxjGJhZJdbHY2zaqiinP6uUi4KwnEYVT7h8CZ4Z3sUi6w",
  "key36": "313J3ZkGAd87sK1uJqjtkdDmY4KjvpNPjH69KTRupxt5vtBaEiYPuYzy2QwZLivRviXsG7Xpfhqo3y97TmNC9u9v",
  "key37": "3A5Q7kcmynMuVkxa7BkTNRgd9qr7GX87qrXiZkYAnKmFgZEfGsce1kGXzteMaTZg2bAR195c5fcoA9Jubu8tDZ8W",
  "key38": "4SZ33FQYEWXXCofqmeNSig2j3CJC2bHJZ4SpistWT9U7mFahEhuWsxaiddNWMhEGAurXNKhhprPDeUUoxCC7UyWt",
  "key39": "3otMEngQmedaa3WAM1LCmmeQGbFvF3AWpdjJZURBhnXveJV1xRigdcRwHJSUEa3Kv3SNE6MFpUV5nNnb5sZSkSyp",
  "key40": "5hyJeg8wKuxYTUyC3Ei2y5WWcqhVv3gjo8smLSHTtuDC36EtKbaiSFrAf9kP4wqY254ATnFirFrZW6NiZAmboZxa"
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

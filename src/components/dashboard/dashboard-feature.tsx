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
    "4V42khsiyqXsLobGqyMmSCv54Q9UYpeAszCShEHKFtvjvqfMxDpw639REvkL86KVXPWuuDEjv39C3Wa3xqjhidYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SoR3nDsbwBMYdjQPzBgvBbkazAJMvuakMWqnBe6AYcpNvHtLCJXpTkKwxR5nN4xu4ZXhrDwvZpUvAh8mxpj52qn",
  "key1": "ZtPaYdRwNjzNuitXTrRndAh13fLH2PEn3RhxycaSvxThqP6j4ZBYN4AQZuWNvgfuEu558E3YzH7Cq9kcLXz8aGy",
  "key2": "3VUMERXu8pJBdcUVxBYJb1HdeqFLrC4sBD5tPS9fvu7pEH1pumZBphPY6UAAQ83B3DaaNLiyZY8SKE9aT9XTyPRz",
  "key3": "5Rv8r2qJTe66ErNhLK5JBSsuNVnxdrGHTS2MqB2FHYrWHx77oTPtV1wUJQxcvrJPVsGtYubsNf9FVSSNCuAu5hUw",
  "key4": "59QLA7xAH6tbjGsdKiPLzECTfFubBoUa4Beo9kZw4EGKTmPVxS3TijPgDpTuaSArUsBp4PZdZkhafm6FyAx9Nox5",
  "key5": "2aPAmMw928RFXDGgF7iQyFVk414Ks2dbxJwJdMcjJKN7T5hATHpJWS5zn9qELkCWYArMzsyuiwygTMCm2vJp1f5t",
  "key6": "2kNoC7gzS8VUDvSi1Aa8ntFXHFMi4L18BMLtyhcHb3dfYBjFbauqzpJD1kZLPDYMWuD2pB5Admd9mNgbJfQwTxWR",
  "key7": "4chyQWmV2LdAgspJwt3cPqaSYnqMfdLUnCkqrjSWAi7DaDjNLGm7C2fPfsRZ3zphS3R6M2GPPCTJCMKvdLxgtnBQ",
  "key8": "3k7nmi5HQPkkBR61hAvBsg616z1f9RK4LZPZ7CuR1FNBCaPJW2tnPPvtvcwwa2Qm3HN3p5Fy2cLbGxmwXmh2tQtn",
  "key9": "4vdAEoKvZ33964nESZ4AS5tBgX69L5PZtg1UUD6TnXxUDVp6YPZywPRLFGbr4oMi2V22q1JBFQ9TJjMHRyyVtREW",
  "key10": "3nyd4nHhpGGPz7PUk9woaWgTxTGvqYndqLNXrn36NDPtEd8ha3mRFjWeh1E2YNCt2mH91d3DVv1AyuGbyUzKpoqz",
  "key11": "4ezw3DhGQAdiK4dUWFMMUwkbLd98dYoThjv1jxShKFEkHPiJ9meDMkEZp3hGuYmbSXr42XnAV7ZjwNaaoUCaweaH",
  "key12": "2qbFLkbNavY1ia79aCK7ECZdwWJyRoqtsvvm8AMgqHxnbFH16KXtiPZoGiLyT9mmwmyJytp49vEoiXFRDDR1fWZX",
  "key13": "3mduLvMB1pTzDPZARwpb7vZxBDx6Tm4NdfbGEEVkVVWUutNTeaQk3r2y71SZswiTmEsZnSkLm4QVAS7NiQVLQqMV",
  "key14": "3Lxd75Lwy8dTjJo1u8MhrFEE6zBXPVKDLcMWBvto7EXkwRCG6T17PhiApvFY3oLDQvaHGqyJqampKhPrtegK5qxc",
  "key15": "GeBuYUDXponQzK1fRqgk6G7boy9L4np67ZR2fQpMeZSx5J1rZXbzZSvbTuMy3L5V3ai578Evp6Zt99RZFq1fbJT",
  "key16": "65SVXABKVB9ypiuxEz2UBa3hvC1SbdxPURBP6ompbkgHbejFXTge6SQv6nLRSYpqcaJzTrZW74EhAYSQ2ntbZmWp",
  "key17": "3x7h1SCiWtV3EQKhApn5pYVmLjEw7n68n9X2E4Lo23CixWP37iBWVGVWLR19eELaMCMX4SWdXH4SQyJxT8wJe2oA",
  "key18": "5otcj8r4d3A1s7AUzVXUuJA4wK4DodrAbDQe5Ht6eju5S5mW48sq9Tyjgg8cDRPs45zsEsYVv1hHzZ3PFRmqpfqe",
  "key19": "4NSSfZGUU7qYYPgC4AXDjdGZ7v3m4hE9DNcY3kbKbqFPrYSEwB4NZv18yN3ssGSS39DYcnZAPeRir2i9LhB3vcEU",
  "key20": "4EkQ5keQ6pWTDXgK1izfC7gmHjb9adadZzsE2r3T58pdFS5Q7F2N832t6oPL32qDKgGc6tN2kYKv11m32H9FUnQy",
  "key21": "26M6U1apfQ653zjTEgvuQcGsCMwMvwRhLzyVpmexdaCK1ERjfFEM2LL8JyPQskXwgEHnvg2F3dqca1LxaAqJpMat",
  "key22": "J3NovhNG79jeUnbmDhujpKir1zESNAdutVGhKQPt9uMKDSrFf3Kq87QfEsWHEaJAW17CPqzJMPQHmmQQAfY5tS2",
  "key23": "5rtrC8Wkum3BwtyBErXeWt5Nzs6jmZBr8mu1FuQgaraLoVfrWkgUEBkJGJDHY1LiVB3MYojbNswKhjRCfJmNsQ9z",
  "key24": "Fms1ecZbfXW6A78WgyTyHafND3bGJHXbj9EphmVYRCpTUHGQyDptRyGoshngDe6gvYzWdi2vHEJXxDPK117rHxR",
  "key25": "5GBMFn374jPnM4B33d7dbdn3jhsZbB47JrYXshgsdwsQyzXSCePT7SgSZptcoRXbc63qkeBG2kY8ew5eVSN6eGk1",
  "key26": "2vEALZ3dzGCUpbJvnvJyHosDoHE32GupNoszo9oBgPtebTPBfEJWdsRRzttbfmWxfKHgxmQfatj8dFasKS1g8yog",
  "key27": "4JcQSENYqRugpDMtFAfdLnZhuNRSexmHc7exsAbHMiiBS3iqvUh4uPt1UgTCJPG1ZisRJBWooLVBBfSd85JUq2uw",
  "key28": "2HvKS2hVamXsSQP9xGqFUKSpjBMWzNBKZxgzMEFyp4d13YyvUcveAutANSicYqWwUQ3UQ6ECnH4wg6vyeKSvk1Nf",
  "key29": "3cWcq1vXSKqKCuR5sk6vw26CJaaEc3av9ywiQzhrT9xr9n3kfQGdK5QiSTYAyZUHeMB24iAR7x3dWaRqszWTcauq",
  "key30": "56BYHgWmUpH5po2nggHh4TLAsaTxhqWiuGpGGpuFe7F9Jmtnr2KDyPDbbQgndFvaXQuAPzmjoVRcGK2panV5HMP3",
  "key31": "5yL6nagBMVBX5dsB5m4eb3GVMHMwithbsziDXN4RVzVv28qStzy749RHrhRKULStZpU7qNhuMtxf7pzH3X69ER94",
  "key32": "47s5UuUrpqQrVsGuBYssr2qgRHXxVXQK8VzZUJBztg6Wdt4ZQc2ckTDQJERAiJVDngHP4yY1DNDnPQPFEeFwjEeJ",
  "key33": "4XdSh1hQ8YcTvvA1RcgsvE9ZcAPW2PDnwaf41MpbbF4YtwhZ8XdzJaNQipEiwmUYbw3ZA8Refpfr9YJBFMpBpoXn",
  "key34": "37ji5ink9f5KirpvajFarD4NJ5Wqfspw86J537fsCR2YZef6cDA2usSqU6LpPL5t4LqwEw7Z5tcsFh5JUNfx2gUM",
  "key35": "4znUSin2tMWMpgeGbU82a949Q3xYsJfwg7F3Esvo65LkHj8jtKaFDqvpzVcUXZF4Fej4bRYkefPMP6J5uy773Umm",
  "key36": "moBgt8hAfobazBbm8NUJhVLAeLmJBGTpEUpnF2RSEqoV71BU3TJQfB9iVEPJxg1Wf2DfBJuKuT8ZrCpbRcufiwz",
  "key37": "4P35Ni3wsS27ReEApeNWQRuRuDr5WpneL7Fu3X2zsbQjabcK1uoWkDNU8L9Li31RBtPmNC6vdAuYNGREpuj4SRaZ",
  "key38": "53H7WEta9Hq6KWZJvdDSjcjQ9SRCbZioZ8cpQk8n4nTHTVDAqXFCzJThRzNiATSqEYQWm5qkCmEutVKobngEstUj",
  "key39": "5ZTUSJ9MFuNTYgp731sVK6SYGFA99HtntCBkBjwS8wbSB8v1ovonDBaBPMift6w9CnfAhDa6d8dv6dJExeJXjvp7",
  "key40": "5sr5XsqWgX3yFD28fPZrRuQzf2dMWvysmw22rHhMQh1VZRaoE2J5prDVEEGFj2nxFUMgamvfNFHEWVsNhsqvApN2",
  "key41": "5oHjqbR12GJEh6W7xdzGxzg6VTPhZ7bR5ei9AJaTBB1ERCGir1UbXgCX5EDBhY7kvGmws83ZTHjMVk7aDQuYEptX",
  "key42": "Jheb5sgW6jiCBvEEWE24uSJ6aTsHfXvjgSsaSaa1TwDgbCurehwko47pACVWkfbX4QBacWQAZGLE8htsoxmgqLV",
  "key43": "2PFBWtpjaer8y7N9PmVnwm5A1QxNUC4RfDGhZkkaAHUn1PQnx6n9f1YJZU8hhBT6iincdnxzCzdvwznEQAP5GrJm",
  "key44": "45qyrxEd9RpHCXfnLcu6AXdBfmJQPf1phyrX9QMQ8chKTPqwyEgPXLR6LVakvbKQ2MrDFMRvbSKfBpZURUKJuXG1",
  "key45": "AYSypAjs8dKZrZJZWj9SWBgr8WRKLjQkuru59bZgchDA7TkJoNCF9A5zcHZwpc1ktYX5APY59RbzxxwVJiQLs6F",
  "key46": "3Fxw7XqBLfTEP6LUSDzUZPPkECy69Q6dWZRMftVk7xiFcgx2aJJevSMocHxuPdestjQUCmQWgLFaxRWxopovAhjL",
  "key47": "2CLbab5xRkjpVPH9SyaJN8uBJw37PGFTP1m7xtQ2E89TxMpLF2kUMPAJWJSJFRkjCp7Umn8Wd1uxe4Myj5Ebo5PP",
  "key48": "3uqXdfpS2yeimqMEddSuHaZJV81z2SGA8iDZdWwvpWG8fckfTHGFeHbbKkRScfT1TMZvq4qZrg7ayKMhyKTc3LGm",
  "key49": "3tnB2gVPgWB44LAu1yJiz1H5VV4TSUy61ZtLv2nZfSp6hx7PgqrfAbyJ4JXKs2VE6XsEEUNAcUYizNQxj1QJHq2M"
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

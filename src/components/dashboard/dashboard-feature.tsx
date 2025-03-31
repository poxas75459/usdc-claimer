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
    "3nLtSP1iRaCHd6FKmrYTU1wUXtHAxKQJv1G2Jd7znAZiF7nCiZjicNmtGmvFTvyxWvKEiTLLf2H2y9me361vn1DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aAjrsRdL4XfySf1xKmeeo3An1yh27QbYg5DQzpzAxYMVDX3ahzYHdSGwWy66YD3x1ZLKczLZjXDbH3ULMkzKUvh",
  "key1": "4pETKw89ZMXNgFXmP71Mku5vbgMESiMAp3sYxJZXEpDoFG45STNMfoH225gQnVFQb14vSRFct3WodcyGURL28p2R",
  "key2": "2bbaPTdo6XvwRmg7dEXMmZDyGkQsAW3NKFcxPf37R77Wt9paDGaKTqAP2aeJLbkN77KtoDpCqAq5VMVtGTC5CvBR",
  "key3": "2Hc9UESzFLzZDhL1HJZZiiibQNYJ31HmtGueDps2BXqxCh2khivZCWYGXdy8FViJ3PCQwjWtMrWb57h1vzP7HMab",
  "key4": "SLeXZZp2V96ScTNKpfjWAtecojbN2rZHK5uYt6Gq7J1urDEMqxvKYC8LJj3n8Tw3KVDyqvjAbYHivvcSosdNosG",
  "key5": "3jrHvuTS3MeTkifycuq6km5RHUC5TKkaBfx96CZayc9GvCLJrm2NbxaEQPAn1QgHgWLnAc9eY2NaAu29Chbm25XA",
  "key6": "2ZMKJgqfSPRQYxT8fEAo1TSr2zwxr4YnSTvxATY4G6iRPmnDJ8L3tvjLSZyquiutGnbCrCbX1k5ZD2HpcEPjneKG",
  "key7": "5SCRJxverhhdARktJvuXk1vS3TLhyjHpxoZEdSrTJeu5TotfdoJ1QZjExpndqxuU7bPNnRwQtxM75SFbQMQ7eY2Z",
  "key8": "46U77WFYbQNJrCArL2nXWqatkD3fDKmj6RXNUoL9wPpJHkp2wL5LDLHb34pVTxuGagNi9un4nXcG9Y6VUfMFQ75k",
  "key9": "639XiQ9mMsGGoRYUbRM28mVJ5sPv8ZJAH4g18N2QbRzHBttswwuEp16Gp8gqA3MTrM8vp1oT3BZgY9gJCfpZYoHA",
  "key10": "61rVFSqtvwU4V1tKEg4rm6qckyCac8KXPvr7wXjyaNeLitMnLCiLTzFcyRkemcjmd8CXm65oUAYXvwH5wy7fjXP4",
  "key11": "5qnrm9vRJFhtYc4m8eP7NsRTL85PjFcZtUMMGNjNvpBMCBfMLedhUH8Cjpi5aMZRLLybevLPmb2AmcWzoC1rkoV7",
  "key12": "2TDtM3ckiwPv57dbLPYw5gE7tv1A3Sh5kZXCLHtYLFe5ZeWDivsbGnUrms2fuYUYuivfS6mJdeJNDjof7Lajue8h",
  "key13": "42DeYoAsXhaxFTUyM98ssaG1XhJSJY1RwkfhADfukSyTYh4cfg4bU2NuN3rGHVYeq97t9reivA5BM6Gf7Qi5eGaA",
  "key14": "2wnBFWTTKeaHun3GSBfAxVtwZf9i1FKqZyNLtJRXkGqgpnqhJdCnQwjohUu35HANxD9kXqmDRmD1A8afci8Ku4kM",
  "key15": "zNmUzHAhpJngkUa4h2gDH8iQNNAcBwuR5fKw8AsY2ixM9GnLjqdxQR65N4ju5MfJ2z2TigZKde812TDuHkmoJQ3",
  "key16": "5ZcAYziHCnuBSuAt6KXX5egBitcpF6hKWkRXrKCQE3nkY6bjjbpecEyW3aDWu859kWDF3dJgAE32acDN9ByNCDex",
  "key17": "38JHGWa372uxBYeEBFsECu7UMV1qCAUDXgTyvrYEPwF5bYnytBRmoKG7wkSc6NfG3diYoiXfmJa5q3n8ifnx1Nps",
  "key18": "YwEq8fUV1DViWHMPqgKA19o8qbNfqat8C2aUdDLqxM31LcGf7vpefcq1CkVwdtNd4yrVNS7CWgeDSfeMRc7MtJL",
  "key19": "wWMQWLR5XBS7d4ai1niVgruFXXZxQhUj9foskyeP75QG3ght44QaGzpP4UqncJM3JZGAFC9pbbViDRnFxS8fgQj",
  "key20": "mLdcL2zmGaqepbmvgksm7zmao7ThBXopDbMj3YckEdhxfcnc6ejbwFU6fevmRbfPDmH4dxfQFPFwaMigBpAxBYa",
  "key21": "4UqA3bCQ7FUuVriVpZV4UCgrpLdyNJXnEwcbmjwyQEpJJZbQix9kZaYgL8w2ss7aZghjYHonz1yHFSUVyVFy63KG",
  "key22": "453jbG4mrZ9WvaacW2ueb27MgP5ZKygtEbXr5Piwbh6uHfqNjb4fx81uDvySZYdjtSkM5cqty5LQrcxmyDUyaxFo",
  "key23": "2NwUd5krd2JJK6vHTNHK3A3HWGWKt1jcGvaP32cKzdXWfGZCiWK9mP7mGZM32fv9Z2P5Nn5wqJqEA7uTFrnJgwkc",
  "key24": "3VazzuLzHRZvVVKB2ZyBbUsiB9jAgNj3bctpRAPVJsxQ3N9x4qt79Q5Vrb2oyadRmCRQi2aZ7KWc2EKBYLfeVdPw",
  "key25": "5DBHG1jmm1Fa1baG5Hu3gv4wifLio6Eq2Ugo8daotpKd5uz3Mo6YruGG4qA54k1L4r9JKS8jGDcxvVjjYy1pZRNW",
  "key26": "CqkoRXxmUNLJePHZScygfap2SNEBMPw8r3cFvfHchpMMPUADuRcWTJASGhihoyFZmD28gUFnWFzqYvrFyxvri76",
  "key27": "3zBj9qSmNjA1f1gKqEaaNPEuT2h4xSZXCJCqMjccLKLjFXWnz8gFAkbPGiMtDmZu6SENVLtW62jbjzrU9yyHwUVB",
  "key28": "5F5oUzkPhMceTawLxCY1bBrj5CHGsDzxAsUwmpV1EeUZVZM3VEP5Qx7skzGqZt3STBUfsMUqRmqqTNxt1TaAzYs",
  "key29": "gNN2xcHHon9fc2KyB3Xh5Lm3UKQFTpgr4ucBA8dcmNyBSMCpK5jsGRGCUhBQabL9JhxxBR53WutDfjgy3daaRd6",
  "key30": "4cEXg6jKzbt5wmhAm4x11TT87GsW6xpS5sa4STnoKQQMbrKJMYCEcJQz5akTmGn9RdEQX9HDpfDHWBYvNc8AVj9W",
  "key31": "5e6XVVfrdqqMjNS9rMCE8hbdwt6ALj18SoH8niBajGx8cxLhrLCgy9vt5YQPJpQtNXLt2kDM1T2Vn9g9a3cUYNCK",
  "key32": "3LGVbriDgGDUuDGcxU2koGEHmmVHu9JK85jAD8kEEjVr7KZSSCfiwTNUaWu4SRUrwppz9TwYqrjqKR7MW6uLHsYg",
  "key33": "4ZjURyYrmPRA4GTBTTLggKxUbB9xVNAyrgUxV1HBFtQnon5bE6Vf1rn3Y6n6weWzL1usXrU6u6m4RVUDAtRJj6uX",
  "key34": "2M6Si4So28yEw3X2TTEFUzk8fpgMfWj5Db9yFmLisxz62XP8nL3aSKAaE9tQVksB1eQS8RxveZGouDa8TDLdGx4k",
  "key35": "6aSm3uVWwCRPkcXt3okcULQWjtaNoacxqVWevUzC6dFLa16irs65CWCq6hvB9RUAXXBgRkcet2b8KUC2u1yboUg",
  "key36": "5ZmpbtW8kbPoYgDiBfqQUtiB7bnJ8d6zbB5scEMrpq6hPnYtwj9uemvu9F2WWKHdVted7PHZgn6BqDBHnGwpkWpS",
  "key37": "33BCRKpxtWT7BtnE3j9CMNXtzarDncTXUhAkhSC1CEFHq1D8f8EDQTDEwcXWQD7dUutGxWKYjyhUgrLzFRyo8ARD",
  "key38": "37GUeGvGx8kNtCJpQ9PcyNNwoHAgjrVSUCgAkrt1nnBc4Huc7KHr5Xo3Vsw6SdBHwBDos9UNsjxWXBLNrX8MuRQz",
  "key39": "iNumociNyHARBHVy7PdRNWViCvfVdVLvVEXY9Rmxz7Mu9FPrQHz2xrqvuhrAK8qjXLiZ7Lo3nQXn4jnmbUEuovw",
  "key40": "3hX5X3gKH4nybUUX3UsSBX8wzHKAhai6y77GDj6UZ4SovCukmGNCjhh3v67qAMbNcaLSPS46nDs7pVt1steSD85P"
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

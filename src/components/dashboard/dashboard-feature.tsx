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
    "5mZFvv3kbbqyRU1xEYcVz7owfRpEV8j6YbLyKhWimaqkVYSx1JLx1JSWgnXaeTrbbQgY3UyWSyP5FRXSqiEaPVuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQg7bT7Wbitw2vwVLg6u1t8WuxzvcsTdxfpZUdXhBBMjxx8Lj2R2mw63uxL9EMtq5siqahtSKpf9HVcSiN6Wwc4",
  "key1": "3QSqR36Ksck1peonwEW3whsoQ4JodyrHKhoVS2VBKnMTJKswKTdvmV9nzAEugpCDLJDp99M825uMhZvaatFPyihe",
  "key2": "2Uhm4ufeyiFBFX78wSfzqBXXXrSUCXeTz3crLQzR98ycNcnajght92cCAt69VXJKWteJ1jB5hgJkBAGVDK9Xfm7E",
  "key3": "Pzt2EKq2N4KGTWLqGaKsf5FatjBfoj9nsD1BZ5Ydf7nUBtojZHADRd4A25kvGm2xSveTEU4A5dKuGPFGFvMkNwc",
  "key4": "5Vbj4Fc5nTzd5SfraBhpqmkX56yJybdR2egQDSaSZWcHNbRmL45L8239gv8d1tZaxvv97H6c42gX1ibC1fm3siek",
  "key5": "wC7GBHaSQtmC6uABYQCfoAP1bzWgh15Dr8nsGb3Nk5yXxia5vuwDLhgM64DsTokWrnkoC3NHHJuMfGSN1TvEZ9R",
  "key6": "42iAJhuEM4jqeH6atnbLzdhzCFhY6LQjFr6Mrboe1fR9rTeS1DCxtjzQNByYQptqZ7Nn7HBJdvYtKC1cwvMNzyEA",
  "key7": "23233g5D3iDrWLDCfQbeANw8k8zLvpAvGonsumQMawVaV6jvaz91bd35dmUrScMJwxANE9URJ75UYnMciZUKMA6G",
  "key8": "4WT1Jjf49kkscsb8V8GRZXTm7yTBkcVEez3Pq6rSx9882nYm1QfLfTYCwoeVuV4SWqc4kpL2R4CdPrF1CPyozraU",
  "key9": "5hX8zGF5nSsz1dPWVEZYbvB4T6qgq7WB5G3XSbonkQJg5pxHxYmqrMsixmJV4jmxELCcb3TGMQ5As5njCiGM2wBB",
  "key10": "3wNEKWTkuU8CYkc89D8f5sJvuaayAJNtBdszzzqh2keqZoakv6Uno6MSGrztd3MC1zgPq2gdQ4LtdmDoFQQEHRQ7",
  "key11": "5JbVUWWzk1cAwr3wbj2f2k62XTgiZJfwSo46CZaPXWQ5vnxr3sexCe17bV4rc4UepSSdyMmrRfJw4q4cAksDUiz9",
  "key12": "eBkUWbSZr4YeZYyG3xkc28N4BVXcwL2inwHwY7p8KHyPfuAkgP2BxF41dARqSdobfGyEAmzgkt1ZfJtV64urra4",
  "key13": "27o7XUGFPE3y55uDi9NMxbv6c2Wk5CGabtkMrAMdEkMg4wMpDrwm2B3AkfwTYD3kBHpwovq47fHs97cyx5M7z7SW",
  "key14": "5FQfkzZbup3RSi6DLCoMVpFium6GXGygZSFtyLnabaXK1qxfHwvS8KVTjKAHK8j8WAgdmYVvSWsuqEtrZCeUeUjw",
  "key15": "2ReGYhKFtSbtTbzyyFUsRKBsSWNxG1vJedN9D7SCzGWGtVSrcqAmTuZ3TVc4TmZk8N8CnQQVZZkdNzV8k1znB1fc",
  "key16": "4WyqVyAjsy6vFNvamDWrpoi3hbg4euVzBJNEZ2unYxBfxNd25PLbAT2kcQPrRuCVPSYVnxZzNRtN2TaDHPZh9yyb",
  "key17": "36WAA2Ls5sjLMcNaHtTqzCmtpEzs9v71uYU2mBQRF9my9amgSZB9iFmKjQvjaH7oSJ2N9DXBvodzxJtyG7BKuMDh",
  "key18": "3PLHPQCSiLfCxot6nbfidyvN74k4CKx8w4S9diwzoWZ7B9Z1n5DBtotxZb1BmSuvyySBALgvU3KoKmMw8bgDVVX1",
  "key19": "3VDpB8t2fNAjuHckUf41GtTovCkLt9Qh3wTzfJT9ghGRm73AgcsY39BEVFQKDBktTALLPLhPCs6Zwxbe9qhzpTYK",
  "key20": "4C1Ayqqf2yarwZuZcKruZxCgZNJqDBf8MH74g9U7SisaahLHP3w2R4GktQ5WDsejjL5HfzKoFEeBFCG1PRay53df",
  "key21": "4atwVzzfhNXybKqAyotc4BfvG6ksbAGszCFxP5SAixp8wmn49bBTKRLgMQsPmPgBxqHG7mdM4xV9ba7q1tv3FxEV",
  "key22": "4Ao38DKF9WQsM3TASCkRknZt9LBWT4HdJCDyCe5VoiDpL4etKJQCs7zMrLwaD5RJnWsfzK8sgJmmFJE6aKsgYKC2",
  "key23": "2uKZms1ragrZinBfBvhQp4bwcLMUXdGfQwGCz74rvoA6YHV1VHVqHgSurQAa9iF6cdh1KxyzYKS1bnW5yFnV4z8r",
  "key24": "667mJHYfGEz6GpUxMuPMZU5srCiEoqn2ThVj6GE7yXK5v58UF2hbTZ5aTjTjDss23R6AtsoV8ikbnkjNXADMg1kv",
  "key25": "3hZbxGXdbmQ7vhFuxih62MAXm1paKjCDuvc929Ys2zga9eCjsUyb7QYWeJQWpymQWtkiFYU5uANpxJPcKNi9uNSo",
  "key26": "3YLDQUK1psYLotkePEXMVW8e14r1GgZeQHymV1ymVp3WP1GXVT3b1KJy43pCftuGE2iLHWRQXWZukiuHbYvQzv7p",
  "key27": "4CyJu6QEzWRa6VYPWXw2VKoPqS7QsyHNHdz4dHdiQx75W99ZNP8S7iSZKEUPbPozYE9nxDbwsTxgnvG6Tg72FzCK",
  "key28": "59QX3sEKhThh84XQgBP4Guws6ZFzgC1YMYahnAf8wqc4XY3nDnuqz95ZJqCRNev8erHWSaNhGQh6qv7oFttDK8LF",
  "key29": "2dwfoBY8bdPG7EzG2PPupmDZ9Nv315ZAEjGAmwWu7gguurYSz1Kqr3XyuFvyY2seLZ847XxuxWvvbxyjQ2H5C4bE",
  "key30": "2iagZ35tKA1AgTQrvNWcJE258CnbvEH3RYv2Tiu36xsvtY1maxm8Hkfr6edqomAkQFEryJJZiXG8P9XtUMTpGxqd",
  "key31": "4ASNwruJGVCMYqfz5wWjBQemwBHBCML9P6CzXmZUsp3Pz9k9R47qHK5STYT5Zp1pezMoLMDL6KxnKj4YhnD2HraL",
  "key32": "4PcWHDMtSCmmLGkXRmK4tgSsAn1ZGPCrpN97YJf9fpK5HWze56vEpNTcQr5twr7j1aeiTWP2T1UU5mGBtAiMMR27",
  "key33": "28t2oocEysvuP6Do7Lz3ZAZ52m69oLFW8FvjizZkikLEQJKUZJw9DuuzoPiQuYZWp9dnaZQ7s7rnk8y9KpCfysi2",
  "key34": "4D4SSJWMdBnd2ZZAXFT7MTodKqT3LRcRwqhp1MS2L11e8JucaUQC9sFWY5ugCx6y73dggxavxRaHhBYYhcMoPh4E",
  "key35": "CS1L1dctpwmankgY3CnzRwC2FG5QHxDi5nwuZ7xaDKhXkZkdLgy2MCKzb9SqijeQHoUureBwnJHnPdzQZ8h5E9b",
  "key36": "2LeNAJCxipaRqCc2ZZZHHS49mZzJYrkkmRjsLKpfUXcnGN3HAKiKUEQN9nq1hoAXwN41jP1up8Dwn8vwqAw73hMF",
  "key37": "3cTPfgHJigFDAmBkypGW6CZxQ6zwSZpBPoa1tQWv2msBmSs985JsUMn9B8juerSAGf8QyvC3nWEcW9R4fcyM9wWN",
  "key38": "4NwabKasSxvCUdJTpG5sHDzSQBZHuNQauvTE2rNXoxFWMHNTCojiwbbt8riAxLAvqY5FmC1fesZbQo2ZWFd8VpC5",
  "key39": "2WXAbXgrtsrge8kS6aEmZBDb9btVjE6KdXdKK7zYKSi4axF1DTtwDv7KXEWYq3N4sGXFX4XyqjtDWWJRC7mNVCqV",
  "key40": "3xzA8psk7BFzMYnZTxyoqUbGs3fwap6Fqzd37DSDwfAcLGJdbA7jqrCnfZWHTtCfzh7QgYMa6pdwG77NLDCjx95n",
  "key41": "5mHCgRokEbfKBXkViojmpVMMMqis52ywFaXoJHNj9rj9oK9TXBi4rA38VPmqKyE4S2UbbmySwW6P3PDhubqQJtyF",
  "key42": "4bCCztZirYSgWE7RUysPWyR1YKEZ4uFs3uyzae2XmRHpoVhxRiqYbBufeQcFGw33E7URhc8us5hi664sF3VZsa3e",
  "key43": "aqiuk8eGE7WSSB4cpvLiFd55Nm9YCLntjqWEgJQKjTEHYBZahqmPkb6JLBNMCd2AAK1NRpAyM7QvquG51p3XoWP",
  "key44": "2MvhiV2U1ZPKHPZMUcnnR3FfD7hvMy2NBqLA32hftfhVEuF7mAQL9VKcGPFXr3gkAp7X4VUFUQT47DHGmgcr2Vov",
  "key45": "4bJzqj1G5rZU7hoiEiFFGVzEpj4on593bQGjKbQuZY2EjQUuuj5HwRgGSqbWTFTiYajAFYkFMjEMzfNveuAwn2aS",
  "key46": "4B5Vp9zs2CjeoFeyyREvxcCbY6mGo5SgqtAKJbeEga97KGYnNgh3YgDssrt8HTTxAzVSVHcSz36DS42hv7vYQGNc",
  "key47": "4caYusipWM3EDZeLpw1km4NkFke1J18qmEckyhe9YhKxCoxoVuHRziDmeeUbMw6EJDoYKZqcgNtuCSNPtLvpotL2",
  "key48": "5XWhEJkJxFJAc7x9oXMdSo8AuPn7FPw2cgca8CaxRmMaV2tAgSAxh6raYXYNCRYRseziqdWEZvWRAn3yQS3w2f3D",
  "key49": "5sGHxxBBRPyNN4KEMesUP53JnkGkA2nhBSHKn4hnMhQZoCyTigBtAYUs5jNfTg9hkky9HQ7xsJJiqNt1s1XSQLKu"
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

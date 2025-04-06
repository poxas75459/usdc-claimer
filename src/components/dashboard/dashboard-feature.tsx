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
    "2Yr3BzGYqD3tdrHSMt4uZWNZ3hc7bNviGp98DK9JJgrr1abiWHB7zyQ5cAchBjsKrPpz3MTdQm5mLu8RqmS1TsMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gEf35rwm21i23LHfdXGDsmv1VHpLDNLcM8hu5EJuHTxj9xMqPNjEEKAPYgcp9EY5SD73W7ZSA1qWM3LzLNhvPs7",
  "key1": "3Lnd7QmNSXidf7acHHRJEtsmcy7Vt44uYffqMbFQ6kWsxCPtSJsRNu7yGs7kF2Ese5G82fG3mM1Zwz1JYkMnJKQv",
  "key2": "5ps3VhqcXgiCdnY4Tg1wohFHKKHLADnkJtACxk25cFaTRkhxsqwzuQCdjrVqa838NiVjCedLWbrLd5AjLKq4crxp",
  "key3": "58vKg7mcQB1XghjV6WNjCFEcjeFU8hV5xxq2yuUmeoZP8pbfYo994CaxixD66fCRMArk6BnVJAXVKy91cy93kVNs",
  "key4": "49TAoCXx2Vn6R3o9D7VnzsV2WPyusZWVuns5GtSSMZ6hLeCDeFNe4qiqkoaqDaKpiELGu1SCnEUmT5eJRwp4UDWc",
  "key5": "5t7kSTUmrT4HJBjPaa9qiuA8pHZLemsGctDakJB8B4mbN72bBLNw32RENbiFe9VSgDWs8Pk5GSBFyV3eS615qTH4",
  "key6": "5gkiRvkSdkCUVQCwaPR9x73w74UwL4YJcK2XjhdY6HzgSrCSB4YThUwKEbgoFZC7qgU7UppiMYDfVNsLqzLzRGzi",
  "key7": "ezgAwezQohZJxGQToHw3WBXBJ29AcY76MnNoBH9LB9kFxb3bDvhjRf8MoxvMiLF3eStr5eem39Vy41TynmbNyfQ",
  "key8": "5nDujY7FqSovigcMcQnxPdNWCydNdn91m89p8NycPJL64pyz3wRBecsYb4BPw3s4CnkA82ASeCny5Z2ozLshSJGN",
  "key9": "4pcdLj2KXUXrdzspWy5TS278LCNiDcUJYQfMc18xcnkDf1zjAxQN8pPwiVMrmEoAPtbuwq8rNzuABoAmRosCeJgZ",
  "key10": "2KY7quBtFsEoQuCnkNsAnqdDG5sEKi5McuT371tRBy8B1EZAwc52tsRRHbssJvCnSMATaHYrDCvmKkN9reoJHxff",
  "key11": "5zdScYRCpcBquatKZncpQar6uE37X1oymPRW7SVZPMgKafKKEQMKz85URq5uZpQj5Xdz3aCcnuke1c5Wrbba7mqm",
  "key12": "7ykkZt3Wk7omPtX6CpK7S46FshmGjQRpHzydSZv3HV8QgVsCUsifrX68shRYhLxoqv2nBbjrdk6yZUit7h4EYAR",
  "key13": "2ftWNgtppNCzDAHCjLGY3a52VWP1uVUKGuNKKD7xkmJFWBGEGHmWa34UisHKLFmAbGWUbyhoYK48RYo17iuMXL1L",
  "key14": "3Wk9gj5BMxd23QZQv9UJcJdaoWndgK58q91n5XZonCcBMrp4vCBZLjZ8H6YmmxJTkMVggi95ryBh7MzWRbX9ZX9p",
  "key15": "5UnwGvK2qBYGUMpsCJUXgcgogozpNo2zmPAGaPdoR3C4AyUDU3EfPKVsrirznM6mp7AGHd5m8JJiYimeQMczFuxq",
  "key16": "4qWsP2kk5cVHYzJbMrBFzathvvrAiQSTmCwGrDae5cSmGpxfsqvJ7y8mGjYEwrURz7fGn5xQDPos94TRqBh2a6LV",
  "key17": "38W5vu5vg6VZnhnedMfrroq2CKtXgkbn3zszY8B8qBHCwSLVQ9zCEoN4JF36P2rLBYnvavSYSKurVqiBxnKifobx",
  "key18": "2nUnTK15izvTBCbt1JivdB9MLNhSV6Ke8WnQsGEpcXDFDmE7iWxhi8V5iW8K7AU33KX2FDJSq5DNPds5uzta22o8",
  "key19": "4uS62pKnGGZ8R7KcxEEkALeaGi5Tk7J4EVnniihAf8w2dgxpKQSwsSjF66QoyGVbAM3FuGzPvYrgBnTgzHcTCFuJ",
  "key20": "4bNtpjbrzXNyoddTjYC2b4Va3XAQhNwrwz9jNu6FSa9iUvK66ef3E6LGdsUKQJ7sgVVzRwPz6DZWeM98HC8Tu3wx",
  "key21": "4EeAenmhUsEpcPAs9XoKQBuLGBgpBtazM9PeGKyoZGHtadBmou79dtwF9eEazAKKtJgALimofZBgotHEvQJWdpYE",
  "key22": "3pR3VwqpjvALw1pU8aTMTY7UkTkv3aTAyjAXK23YmZ6KviRHogVqBuMH8XfA2fazUxxFb2f3xarqTWT7r3ycodMo",
  "key23": "5YyBUKLyCxmdwKyfhRGJLxkafUqRqC968TBffWqarAWXp2vh5eQxyx2FpAsqKJYdx2HFX62Fjp1YR6qLey4wGgJQ",
  "key24": "59TpMX8uF3gX4XhaNSziDgKePwg51BobMaQYZSkr2Bu187W3rf6nQzRkeMfCKYR58kPEzG56CMnD1sWscK3r14Ea",
  "key25": "3RQC3VWyzVAM2jz8XbxzaV7Aan4GG2jT5kBtgcDJUunJLhfXXir86q32WQHFiVAPz5bDDs4BhAGevW8peyRfYPBw",
  "key26": "3E5kYh284SfaFJpuF5R196fSV9oX1geEJPLJhMxH971hBUY18SXroFAoX93bXG6p3MsxGBjFQagyLDGugvHVeHnB",
  "key27": "5nbHy9zg1xPvuKLQFjFH7vbBSmmC2yAbxMRM4SMgZ48hwXUsbhjdsP2UMeNkftPaXFRre2HzWfenrL4PL2EnykWo",
  "key28": "57XrabLSKxpUyYU2zFMJsDLq7uvx5ihkvd5LBRHMes4zapWcNu327pChhzn2ChPa86gx66nF6Gh3u5TCejSM6mJH",
  "key29": "3ypoAhH3KC23WyDhLqyYdVN1Le693F376S7Pzvca3eV6riGGA1B9z5sJCixoNT7MEwwdkN9123qPVHRjRqooxBJh",
  "key30": "2QKs2LAuTYaXmgcQQjeUaWVXp5wqurnwkn4BG7ty4ZNwA3BnddmvjByHZURuuiTs6jyh3bMnUAg5XGvTjYB1JUSK",
  "key31": "4477rMiPeZjWnXk2MmCuYKXz9EigeNx6sqBukkNpgfNLYtdrjrMjRwPP696kwQZ1BegqmbxCcSTH7ZfPLJvqQSdC",
  "key32": "2nL4ZWnL2xiAsnmP4dFQp8ncdFjJwXpyfeo6XCJ46kdG3BvNyb28rrdzXkepfTJbPgL43GXuLVxGhFgXn6UWVLDw",
  "key33": "3Eir32xHwZBNPSK357Ctpm389o7egPg5pd5GJFknNFADQxwcbquY95Po1mjyxgWA783MDdCoYibWsaXEabe11Hg2",
  "key34": "RLvNgDAs9KNexvWDGP7WYnvYwpJ6p6LmQ9zwySP3ceRVMZsux7euBCGQrpQt5N9VXNRfYamAmEV3vavMiCdQ3Jx",
  "key35": "1zz7MavVTQ6cKq7X3bfubC6hEUgPFjgUX3xQiAa1Vynyiuyb5QUS7675bPwpcHEKNf4yn5KC1DqV1rJCksL8EZU",
  "key36": "3f7reBmp66jqEUNncvcLUvpAcHj7PfLZkog3iF7KPv38TZVaEg9PbX3hDXSKGkAQTyRierTu6Dos6iTLm2LdZ9fK",
  "key37": "pbGjGXYyJEPHQVWdRrgmiYChwV8pfRe6RB4GkUVmh2eVoFjha6grD2fNmc5fF1Bejod2HWk3U3xLDP517on1Wfs",
  "key38": "5TRTRk1kirErwq2qDcASvaX4DsFKcsdBQpyEdYtrJRrX1nohPSoKYCMgnsVSTa46mRZrXkKJjm7wx9VWgPsBKbgv",
  "key39": "5XzoBDZDk4Rkt36zJEPgoGoADWdwFKzEHTWUGdt35dT15DwE9uyx14yoMzK59kCB7138UQaDz6DgYfyLAptVN99B",
  "key40": "54k31Gyj9trqzEscLXD6HcfMNCeQ3yMseVZaU9WsvBS4jfKEXdTrdRX2LJ6HdmwSyW1Kqeeq2BXsRorUAZuSGbxg",
  "key41": "26T9eTHdfoodA39uQpjEhEyRMCyVXqh5b33SETHkxmYfn1aDSEui4Y4sDpT2RrCTS5L5wuALCC7yTszPrQKjfMEj",
  "key42": "2LDNG9cjU9imbcYEQsfrhmJEpgbyZrsM52wniZ7AHhu9jPHPe1rskTnysSBtG3EZM63mDUXZbcC3R5LX2Kxc8JmZ",
  "key43": "3vy8BrpGpRNVrBdfQCxw6Jsyrb8281P551qihSFLjqP5iRJg7LNhY9MKxjRWc2mvkF5L5ThBZ2BEQM2wgZbJj3Rk",
  "key44": "4yZhfRwWW5nLKmzWVgNXBHGMvwd9RLw2CXfqm4A9vDBhhk4B39okHAgxstURJpJJGdVVBYh2TFmSktr3vNhAQ9PJ",
  "key45": "4zF7MFmF3bLKTa94R2Vhqgh8CExKLvMWbGt7R77ur29n9fdJkXDpPGQZuKM9KMiyHBiB95ntoApK1KSbhi55ri3U"
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

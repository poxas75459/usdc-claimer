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
    "45zsQz44wkszG3dHw3BnCfrp5v5G9FYDk8VnjdgAEjhQmK1Lyd6q61PpjqUYh6m6cQjxxgntMCgcfWuGkJsUxwLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UtnP41mmHL1EgQxQasxPrwLsWDaAbVrWadtXBS83Bzn7iTUENuB2fVkktAX72V3157nkpXMDpyhMEMfGrjqPrmn",
  "key1": "5jPXMJ4DqtsgiCdh9iTMWGXzXNmtnxyMmfgdsP36smaosFLeFLKN872M8ea6q8nF3tohLxnaW3HVqk56EBzFWQng",
  "key2": "4PcDc27D625J4xmKF2pMAPETsq7ehPSyetSi8wQHhhuFLykdfq2uSHwNK6aykDaybKKLQQjRMrSS4j4HNVHCDaKx",
  "key3": "2dyGLAvcwK5vUWQNWfFqtand4JmiMuqquajSF1RAksduq5qwA9yTw49g316cSC22JcfLgg9aQ2PoegEGbKbu7RgB",
  "key4": "32QuGhMjP15c9QDZ48gJukP33Dc5nbg7kon5E7jWUF12Ec9bV7BXJs7yea6YPtRmKnShJxbHbntP8UpHKoBTAk6y",
  "key5": "3PTmoipNub78GPk3BKTuHBXmj2faUvwpK9UxCvrpz73Z9krsryvc6TKibHWB8R2v5p4wzowkzz8AYJPoyMK85nf5",
  "key6": "Dt8v7cMjotNNfQfw3UHfTZXxGyPoNJ3RSFafRz2U8VCGSB8dBRttigHzuPRLYTHf2VxSfpogigiWrZYhFjpjuV4",
  "key7": "23ZDFV5LRDwUVyUWpUUkYfMKaFFDtfzJnTsDjLMDpKJx6svJd6JdraaWSXeGVD8dJzncqBhxy6FMmmBXEgpEoGZD",
  "key8": "37HLCvSMKoykYQrNJ4FwB1mG7cyBAkRoCuqhXM1YEYopkaGeNozJETvLMXRaM1c1G7UdFgWkGbVfq9TaV6UxFK5y",
  "key9": "3D4USeUGPPY89MNqEYWFEkiiT9XB8gZZPwpH4RCzj3FS6aN22LDhbbMqwN5RUSvchDiQ82tLPc6TfhYo4fG3i1LJ",
  "key10": "4JRWH1fztz8KrE6UBGS9GarKzGguCyFAQhkn4dtwFMb9WPxvTnnCBztkpynxqB5jDuvS1bQL8triCDe929Hst6ko",
  "key11": "3bTbBCAZPBP4xnr1BFtubMknvB1tjJ3B8BTC9iVipvYD2sUipekiZkqafyD6r7CGMP9j6Szzz6Hvq34pogcFR288",
  "key12": "2wU7Vinkeo21JH17atLXtYuLcekXxij1Wr6jHnDLF6YyDUV3s8Hbt8ew2hZwoHrMx5cvtha3mfbe5J9ABf5VuW4T",
  "key13": "42G89zcwG3CNPi2yaDzcuUYNMoqTdxtLag2CYjggnDuF7MvfHDJp6HD7xBaygN8WKJLjaf4i3HoRC26atNGr2exk",
  "key14": "5vNG7djFny3Vd2VBhHaNGBpep6n7797vQyTLCXbayMEqEpXAS2JBA18X1sVcmXgL5qYbJzRLUk4DrUv5nYYAzoWo",
  "key15": "3ZeLrYEJarSLsx8xiU3giBELH2Y3mUQjWkrAThpQ4umMhgMKSnKqbcVCajgME1p7izKHo6J6zCnrs9s8CBweoL8N",
  "key16": "EU4QAXQo3eMYF6iuqoBmhAqZmohNc9w72qo7r1fmk3xRSYnTPgjkSrw5uceAzPbzdGeoQjVq5ABbmZiws2P1owJ",
  "key17": "4AGgZmVqMzi8hJL9GZzk29rnAJtJe3434WkTf9YWoNfzKaFz83whReBonhHRAe7UasdNgmSdRFZBrrhqKQkQFyce",
  "key18": "9vFAHr9zXHSTNdd2aFcEpfUu4xuUKgzCDcKy86LJQeWFBTMFw7kYQG1UhMQHxXPeEx2feWYnJLFBE3q5Rwnkdti",
  "key19": "4nNLwAUf4MqtLQKd9DXtWkSEvnXhWdYe1SxHVKCCEW4UyhhTMBaXDsaaGw3ZmyJeJR9N7hX5f5DFY4JXceciDut8",
  "key20": "nUL8T3ZHigGkvko5g53vgD8jdRSDSJtWQwperhRBfT8Q393jHK8LadLLnocUCLy44Q2rYr4GKpqWrD4tsuE2hLT",
  "key21": "58cqDES6TToZZHkyJrdjtCFngyQ2uXE2FFirCjFGYpbwWmvRk2FsyQwYv8HVqSzrTgHByBifNiyzpACtmeKH7ywS",
  "key22": "5bq9Wd1L3xdgCRqys2o4Lz3A49VyhoUZ5v5mgkgxDDWNuvBopyuxCj3kN77LhoTzL5minb2uXV57PWJQ6tus7NKi",
  "key23": "4RsHmyiwnNzaN7wwKBi2W87VdZUqMzTG1CvrJeytdTNGKyeGSLdpAr4zxVtLb4asycb2Cn2NgFPFLeZC27yCQafE",
  "key24": "4ZghuEyN4EhVEVtRXpVLJVibA7Y5Zw3XTHgq84QU19jgNh2J8PXRGzzFAusrFy1EVQTNh78h8D6ffKb1EBPqHXKr",
  "key25": "65SkxiHefrQ48vuGDXBxFpwumP2n7sBTcM7qvvuLCFkrM5gcnXB5APmWYQBnb4yLWRYrBAT1fFG17ZF7TcH3bKs9",
  "key26": "QvsCxCR5Un989W8rWAhpWoGidDkWbcgEwqQNzC82VQAbsS5HdJSKivZdbgfbwMtpeQUdA424m9cttf1pvDTxitL",
  "key27": "3D5Pi1o7Rp7hvtCXApXHTrKqrvMirs6GubbQPMZcnN8J37dJwJAUxeuj6GC2Nipe2mghJ6nhTxSc2tE9N5a9C6hT",
  "key28": "59S8DJNuTdcfqU1mggZRayyf2iD3RxA9TiXWfrUsUizQ5ut4jmcRPAQ1K8sfbHYWyH3dfTbb8WHwnSLuPsNPxJYz",
  "key29": "3CZSdNF7g1SSmsubAVcBGXMSyF4T9gx2fheA48F4fv9S8sgXdZesaZMcwmoZTPEtMFtcG2ZRcv8cz4dqXsVmR7At",
  "key30": "2mXU9BmwXVL3cdijPmA85kGQ86xEbxetPJMWMCvPsuJ1vhGgRVpN7ERDU4LbRZmXeNYMkfWjPiVwgYTcvT15oJzr",
  "key31": "5Z64t3HGK3quP3fEng7By9mhyyGz3zBWXipR88haFa1JqTeSKgt2xEAtd6D2J4vaTuF15eqsVTUdTsUsLLbgqzig",
  "key32": "5gZtt7sRMVgHmdnqX7sw8pGha8bukFdhKUWhgg4X8SDMAccNvucrkcUDcER95XBagTT8YzCBv3XebUybdmkmWC3t",
  "key33": "2mtGoLdzgCr8Huv6UpRusknHdnRFJZFi8coCJv4aT62zeHdKYEyTELnhCWsw8EA5Ss4GqJCkYgTVY4AKu1uyuqc",
  "key34": "3iNQKC6dYyDqQBoFnv8Vmmd8HYzv2PmPF2VxjTGD2PRnHzzCycpFLUhmSYRKpu7VPDoFHzz51SmZzShVdsKhAWPD",
  "key35": "4u1PU4PBgxgcy2VfR8sz5NEhLoMqDYNAPD6UkLwPox2dPkX4RCMUtWgFHLNkv8KAE6e8oS2ZsMnF7FGRFpNWMff1",
  "key36": "5ncPJ5j7oLYe9WjYzu3QAkscdLs6N9iCZvaxg6yj4b5Kk3krprSgtKrFxpb43meieo2jP29JjicPWNuYRFGNY8vw",
  "key37": "B7oNskaAZNXsc4VzHXf2qBTd48cJkCz2iAmhQL4C1QUna6DX5xTqBa3MjwW5bkmWwXuPvfeq6GohXB3hsGHkEjx",
  "key38": "5mHKMdFZZ4gbHCwKP8sEpTYKnH14boVBwR27fs2R8YZu4WUUBxM4QSGgYEc7UmDNQwJUjw9R6URq44D8ozSvX8fN",
  "key39": "3HLHwJ13GiH5TdD2pZojn8QeAzsgizPpqbQB3MCtJX4APfVbW8NwpJ1z2VHkad18NTvWpB62nw83W6sEtKkHqsUC",
  "key40": "2WZSyFqtSRdQj5QhAsDqGYezJ6X3JnhuPFDvjWQpjnqnPVKQW7vSEz2zG2BAixnqJwTmMyVbZbAX9oXFpQ5EpxVK",
  "key41": "54DPTEquzzWJkzhjLD4yX7Js5xjgfv31qvgQcYh7qEBiFLnoyFTEGbNih48T38GLEvJ75gVkhKKTx6KCHvCFp5FM",
  "key42": "XMWKWcetaXDWDizn9LDYQghXa9Q92pCM1aQtBg9GPsaSz7YYTv2WyewWT34E8sYA5AhUiDnmz6x37bwcCoA5Fkv",
  "key43": "23L86TdtKd9y9X1wNqCG629hRnEyH4CGGvSd44Pxvie9owRgY4cnsYGj7RFYNq885KGtorYQUjpsfr1fo83GisZx",
  "key44": "4FfdZRxFMPrJYCgEpfGBJUmm86KNzxYEtRk9W7ty5d1xP9YNJks1xbBq8NiuPRoxUMbtRdgTHuAFr61ua9brk2UV",
  "key45": "4FAt6WM9S6yZ1tz3ZKg5MfWfRXK4MkL9h7mBnTXqNKdsnUFJxUNEAMhWmG8uDV8yMNFyw3n5T48K9sPDaH7ec9Fj",
  "key46": "kw4Bj62P3fbxoLNWtMRVrzxi6rD8noA9VpCqh1nxzu2kxQsxDFcLWpx65ov2yoXTHow4UH3EPSGrMbxajGJHAr9",
  "key47": "5sBCQVMi5nVFLkw4gBpQZPRkD1CUg3uSieGSEarzUZNSWaFUFZQSEN95fu1H1oq3s9ZiZYTj75ne9tmTGZtz5Sac"
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

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
    "3ryT8hJwoYoNsuc3QoHyUtXJXsSt6H3DbJdx2LK88XQ9nbGLgDFBrFd2KRZdR1Q8eTfVg8sr7vyCuEgEDn4NE7Am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c2Y4faoRCRp62r7UtQXkjPtc2h4pnnF9NZNhX2pQ9ZENnb6goh1LeyefdTmGgqTfdV7yRnrvYuvChFaW83c4G7t",
  "key1": "5e3pRtSG2BBjuXMPzjfSNSy2uGZte4nsTtrVCvAj4jgvnC4Vjuhcu1EArbLGpbhTmJEfJUMfoz3AyaY7dyK3pC78",
  "key2": "4qfEz3XbPcjJm9hu2DnnPRzQVhTrELiKH2fNT6dZtotzM7Yb98mkMoePV582mqxZ7hZH4JhcoWCDvRujyifsJnkX",
  "key3": "3C97ShGxehFWzXLVwvjqVHRPDyhLZ66cVKE1EaaL3ANVHghXvGCP7YQaMa65W9Bdu6ZejVQM6igaqr9sSg7HgND4",
  "key4": "2XipyST3vUUtjuBRpjFhV3TZMDbeKSaAEMcsTGtvjvUFbpdRX1p95CKWUR9xzwJdP5wTuUSy9XYrFopiBteqJcc5",
  "key5": "vnjQj2BuK8dF6wPnMsHo5cAAoeZKD1vQ2u6vRK7kZAvKubr6t9LuJ9uir5fv5iMqnM2eB9vnmhrG9YEccD9MfPu",
  "key6": "2tqw42KUq4KxiF19GCzzhbpbwtPyPJnFff46i5AePY1cAHC9CnNJCQfCSxt8rvCKLcsho1Wb7ZaFKd1Z1HH18xqc",
  "key7": "2C1j5ADjAcdjyfACD7MVUzxUNgP1stokN9QLK3JFeNGFsNEX38t5X11Eogs6yQN8PxMVDaHdbniRFiJgwoD5TqQM",
  "key8": "5Y5r1qtR9QkJubmzeGPxGbjnT9nGjQ17jcb9T84Wa3dimGfdi1aZMFTUo6WWj39Zaf3BgSjVR53SnZVEUm6tr83B",
  "key9": "5H7Gi3nTQXqMZcaDTx14wjcRXj1UsVxwPtXhZc8qjGQLmsjP544JpeZ559mrSHYM2ZyyQug15mcKTiA9F8gkRUmw",
  "key10": "2CA29E9AVon7coexyULNEkAGtB1zuAUrN5mcY5B2oNd8p86Rc13XErtxKxPjan783hAQJ1qndDL6SzfetzfrFznd",
  "key11": "5rHpm6QDwYnMue4CL3WSWYPLLUNwKpWSUGEJZ5axJNTQtPYXKvbQYq4W4z99tkKKp2cfCAiGAgZWAR9iheYRm25i",
  "key12": "3YwFVeCXasjwwRk54Y6w1wmMvvK4T6Sy4YCsYocvyuksieVrFzzyXiUXZwzoVmRrud5Qs2gf2ZSYarQB7ByhEzw7",
  "key13": "5aRxadw9BvV3B2t8pKme8RRcR3qeMZHxTTN6WJ767MgpBnqfgES7JeyP7TLZiU8hdNVVGFZiApkkQmvZ2i21Kz1z",
  "key14": "4sqKmzYbd4G6tKA7PDi2vxYbikPnRmo1e6UN2kyzRLCpXttjuxZmaGi93ji8VjY2Ny5aip7kZxeNHkLuFEGt9K69",
  "key15": "5CaCPymtcZbn8jFJ4PWxvy34Nd3N2LMCN3i3Noiu4kH6fsovGg4MfFkayHaxjxvMbfwJ5DRjM6FUG4p9FeA6Pin3",
  "key16": "3xoQR6buPQ1U2L2vuz95ZZRERVLJfi4p5F13ts75VULbr3YbgXFvYDzpYUHdgunsGJT4mgokMGcFVVsD4GuBFi3g",
  "key17": "2FnXq1JUQA9uRNbmkd7ECGkBpT7NmjFAe4HQ6SL86M8xYmwf9aQW15nYmMH9HGcDRzyjPjbfzdiSMP4oDQuPt5rS",
  "key18": "3x4Rv6FTUyqYHePrwRPcQH8MKKNRp1q8gQLrsgeohgkv4v4nZZ28KATedBzcQgxQn5XTUXj6SbkLDaDkBzmvuxGq",
  "key19": "51jhQLvmRznKyHBg8jeBiGbMSaVio2Qz1DGGWh2pjP2Hp4WcCAdj1RKLtPVP45ukAhgEt22RaRLDvUSYAiLWJdsu",
  "key20": "5GNXV3s83BKRBk7b3k7u4y5DXCDBxXNpUX6tHLuGK8HCHp7Kg9twC5bsTPubApYXeACuGBAbDENxwwtWunuFBMyF",
  "key21": "VrWZ9D4ih7HXGqyizrrusypVMFhrJwM3vzZnKMK8qTs5fYpqYCciDobPrdWALik6AgSEcEbexfXMCc5iPmdbV7M",
  "key22": "3dBU2knvidJAFXNkoHMa73Wf23ZiqD6yEEq8HcCUQKirXFStdDV46YQWW1wgbdTcJBXeHyJoLWoFCou42z9TwzGU",
  "key23": "4Go4dVV1F3rXeddFzxxkZ9BDQgHWWDvUS2NK1uHvDzSnqADDi3a3uaaeDJoS7WDDoWBhXVe1iintw2K9PWgtmC6T",
  "key24": "4aKHSMeRGoQ5sfNMWHyR9pSbyYQYS97SmK37Nw47qv5z6M9aCGM7krWShz9P4CXPVP69hXbEEk7gbzZH4Sb87QYW",
  "key25": "3JJVKjevMwEDNgCkNTVihEJHP9RW4fQ4ZYtkQhC91JVGhLDTXoub35gBitePybfS2CPSMqP8M49x454G6CQgkhjb",
  "key26": "2JAqY8HN9fndTMffo7DBDFC9Y4szKq2rFxwM9vnTMwP9N9YZ3RCTJ2TPNfiaycHsNYnfoSXQiw72taq151xrXcPB",
  "key27": "2BC4pSkwuPUhMQqSgJRf8zvw1CxqbYaBgpiCdkeLZPovxm2YopAQALD4jZ2EEvqwRNMktJ6T36VcSWRshKJqZwT7",
  "key28": "4yYpQZAYvLwmbsAefRfVB589dXHr55pBXRpcdXwEjjSPGFYqdABSYBc7Tvdnbs9V5begNLvAxTRZjemATx5rtmP1",
  "key29": "3HbPwq7EZRiSQVTAqBaA9q6t2xFPB7tLkgCdNPqnEgbX2FB9LduEks4BwHK1nv9TVX4cpMxXBXBPQfZ3o9wH1yo2",
  "key30": "2YXcmSKRtC1A7zAaZSxgvutKLp7rCDU2Zjevruw8ndxNBH5HifffmTDsbAGVfLsExLGfEZp2F7w3edhvv7rMpiD3",
  "key31": "jdJPPj1ZUAQUHiQBVC4ecTYNTrTmWe6UWtfKcJcd5HHjMbgPyKYWEkS9YLFyzyTGYyHfYDaD15PigqnhNEa2SY9",
  "key32": "2mNbdz3vV4j2C93mq8sW8Zn5Pmr5C4XKYvUQWVApFiy6vsT9V8UtNF8TzyU73Lf79ZznQGNwXCCpZ2wXqUssrjm4",
  "key33": "5rCyruY8swfkLVuFgYRq1CBNP64X8GQqzsmQ3e7Z7YkpRNf2pjAKa2pgentmsBtRS4MyxpTHYwyojGCQWTuPzEW2",
  "key34": "4d3kFQvnu52cna17V55oTCgVD52SenpcFj79TPjHMsVUCvBoWnvqjeyf9rD3DPdp5BFfzkCpBRmakrCvvz1hSATS",
  "key35": "2oEaNLueJ8HazxxACFFmDss4AhdqdimXSrqWm2oWdQWJeSqmmb3AmczMFbYzhPQQjfkqKxQLFJxZdjbbR58iJJGv",
  "key36": "4XTtSZyQnUqLjPhszWN4whSJ2wGdrWJAEZyc2AN52VbkfrMiXU7b5m8jBRSkUK4z8D9j6XaLfpCBSVo1kExPk7wE",
  "key37": "4onTNmqH2t9NSQrsyeW5bb14EGXr5NmPNCTzHF8NiCQzcZSnrWj2p95BVixcyV3FFV5fVTeQgHaetVue6F5kcmR6",
  "key38": "54UmXLFtSAwSxV8oG18iPtzAGZ1tvfFtqHfVKs1gT6nkQcA5tkhG1xk2V5R2wFd9jGgcwMR4GFVrw2rBeTD5eSbv",
  "key39": "4JqFdYtYHX4yDie4qCjcfUUSg7iaL4zvHrYitkKWdJCRrA389Atg9WLg6LYEtYAo9nDdyfkMxkEgwWb4rjs5LWkC",
  "key40": "2C5mMqfoXQH3S12hJfuu5wKSQK5S7D2qjZSFxonNXufB4resiBZCtKMcTcJ2TWBwKWZoqEJk2iEZd6A7QsGGxY5y",
  "key41": "3qzUhq2cSyAmffGp9EM77wqymaFTSrQhop9Kuj1gsuqxgwX4GFCapUcRfFjMLumezrDtPyab3c6m9iQEEScSLx6i",
  "key42": "3hwShetbFzdf77i7VL2p84rQX9uQFTWoJUzBnaaZhxiqHzkXG3LVHGNcwGLhDYfc1eFg1TcwoDFx9CzCadhusus5",
  "key43": "2a1HMYTH8ME3FLRvaCUZu9Eykf4pzvMQYqYkmyYVeNgp46UBkqYmSLuWMizGBfUGqpTqXSRP63jLN1rKiCxgizK1",
  "key44": "3bgBMXbCmx1z2wC92SnuusDwVobyD12PU2LTbyq9DUefv7t3XtsWudHF5TfNmGMj9GuxrPoukxTdS6h8FQHzw9mg",
  "key45": "Xh9FgAfTBdQxkGr3MBptw4knR635hptQatNkgUi5pczdnxh41b1sLfu9mevWL9obDYExUCA3nd4AAWXxwXdBgEB",
  "key46": "3qrP3jCAKk4B1ae2KyEZnrL9F9RsJzz3h1gL6iqx1NiCxKVoLkxc4D9iUmBSje4AQRtYUUkd7hwKWqtCkwVtHSCh",
  "key47": "5CSwHpehEqqoHHwPNwEinj1QxRkJDUZ3aGC5uF3yyw2x8z9GRStC45cBb4jHM34dbmPJuu7yHXYoVKSjaspYmFXH",
  "key48": "2fQwVAVSXmCEyYmxrfx17rBswtjDHg1gKLoPF3PAoE1XH3ThHcXcvKBeKQw2UQJ3GHeRZnsWfn9xCBpXoANesuA9"
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

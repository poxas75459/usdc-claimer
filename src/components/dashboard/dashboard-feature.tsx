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
    "2bYFf5JJre8mYGNfAjqmnZdcaFLFnrqUffTo73vHjek4jMy7KMw7qdGKn9G1LccEuVRJRXSTqxcE2F7mBLYY3a6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VWJpyBwTb4NtuAh4kLXA7bK5Brtj76HZv2kB3BNYhuZVZJFeEb7rkPtisUn4ppRo92bhSKSuu4k5QuPykQmrJVE",
  "key1": "5NJR7b7U2dM7u1Mnbz7QQNXPUpAttoUXoCwoDh4oKoDFzd3RUw3xBtmzqLSRBMyAEYCmtRRLkP7uzm4JfdLLAJuQ",
  "key2": "3iujZVL9i3K5sa4fFS43G3BfrYvbPVxvcE3VhxHDPFvvoc5uA6N4kEzPUFFBtPkkuQuAAvV7LKd7tQy71qM2ZkCV",
  "key3": "HuySGU1bvp1dhJFXa342c2UZhePHu7SbLJx8FiWRXFn7WXadEBZNjjhCvmypRibMdyDhoTuvCmqdqDx6z9LwR9i",
  "key4": "2XCjmWXCwFGUpzQwewHq76ZsvXSH1ET6maeUvTDLmJrsLfE2gP4GEoe67ykKe3E7P3y6w2ve4Hqg8jo2JwQY46bz",
  "key5": "4LwKAGVzQ4TW8ZcnEayaudwutUPruxN84kHnuF3sD8QGae8XNwbxJUAdxGYHrhpyAxjYCF1sfsiPS3dRweZragK2",
  "key6": "5UzSaqQhCJjVg1725urVEaDhdsB8Y6Ca35LTxGa9VuPBx2FXAJzfVZinntpCFVQRhtd5LVruaUuxBujW1WwSjWgp",
  "key7": "5HRg5kAfvxKw229jmkaUtF5SDhFFiwxhbeZSmDtuPNFrVgnm3Wsxt3gRX8fy1w8nAyHEnGnWqFkcXZhEvgtU7Daz",
  "key8": "5ztTPLKA1W5MNzbHGiEoVKmLSkaADCfu5UxmijxLF6ZBUgtxovzJrJmKy6rVtaqyQaz2fYcgWHgHdKNT9n52V1Vt",
  "key9": "5tExHSZNBMinBa2SfQD3jKQQfpmNZqDBAqgEMiNCopausG18dKB9sMaNWotSiLLR1bhV9VUQgV282C6MJXJupEXA",
  "key10": "4WjRri95KiuEyuUZ7AjDgaCNxWzUBd1TNPhihVmg9XyE1sAUcFBnioeTKtXAojacCg8TqZLonPUzi2kc8XkBooWy",
  "key11": "27jsWxZ37YH6WL927Zgd9jDJoCSTwsozdsipk16YevdxQrxANixuu6mezFRTSGGtrwGEcQZxENLP3TuoVe7P55oL",
  "key12": "2WBKd8UgDGG45v2yW9KMAPBjpqFw1TBqGAujBYQVPdpS4BPmAPMGph7Tg3RE29ozBbKBL1Km2gMWcSzSdpYwsorz",
  "key13": "4t4QqwRPDx3C41Pfcp6xa3M6essY1vouqqa9ZsatCCAer47Ck5diF65ak55KVYXhG7oSLnivJcGBNJkZdwg6eoBR",
  "key14": "5AtiPrCCKAFdeFNhQFoHMDo1TP8WbQ6nBmr1VyV9Es1vsbStR2c8exEQ2DR6f18DaCS71jvQehKpTQPk5GmkQkYT",
  "key15": "4yy3WTrKUvaSwC1LRnadxqV4YJzcyznyGc6zzofMx5B2X7ury2kpyTJfTS1WCfCvUiaUw1LwWZcfxgvHa3y1e1FX",
  "key16": "Dn5UUXs2peZd9SmUfgSwUSc5BHTHQsNRBTYRi2R8CY1VRuHestUYnStCGTq8rDcqnxPEJqqPUpFAFM5SZiZxETH",
  "key17": "522dDRc9JaCNfVYZkkw862RJLaJ1r6cM6B5UFcmrtZVK138pVXUHf9b5SNz954EushTbFspaxUU4RXAriYW8Wyqt",
  "key18": "ubZ38JZXdi3DkTi44vLrAQkRoYzw4VLdK71eUpJnbe9mf5QZ6b3vu6v7Ssez9PtboAnRnqYGsTHcmQoephiRy1K",
  "key19": "2SPgRFpsBzhF18T8zynauBpFAtaXcpVi3JMhp6rSMuT4mh9JRnwLRWmjsqLykaiqdQWebmJYXfQaMvLBJin68J7E",
  "key20": "4Usrv3Pq8nFo1Q6AsPexfDwKi346cWyQAaguix6yQA9kE6PEAxdxjLzh5ytw8wz1LbMsuusGcvCdTtvFbsAtyhgG",
  "key21": "5ivKNeAoJZHWTUDjfzMSnqJtF5JQr5HZCo5eXDksEAGd1tVGZ3YwUQh7Tnjdrf2ooncGGHQmRVLM5M3SM35c12Zz",
  "key22": "2rirxnWjDJJGAWrDy5xhE3dBG8XQaX9qgY2Ts2h3t7x4hEpcUYEmvxnytix9HQiL2KjiModmvqbfbKvKRgGetHJa",
  "key23": "4S2QYNhUvqLviG1sP3ShzbHA9dcAmmnH2hsg6PUyHpxPDDPRLgLf7W1eGqLa49x8rciFhuRpGYGj33kyLpKYWZt5",
  "key24": "8xfhotiGdRtPzjrJ7CDFihjepw8kEpAfhaTtHPHfcrcKoXWp7YV2hNPNuz23vqfSFzGhpc37vLkUKtej4QdAFa7",
  "key25": "2fz5yagMxNxyhGLmSdNZZQcvhYuttKQtzpi7GMAyK1JNBLCfyULQ6zFMsyZVnfgEXvnq9s7JbBKq7gkuKizDE1Q9",
  "key26": "2NbTfFqDRNt47KHxc4E3BR3wZcFBmKifSRWBcWHybVenZfCatXShJA2Fq4rdRd3BAtSBiWBs8SMzZCpHT7Wmje78",
  "key27": "3DwzLW5ij3SRgB1PbypaNuPrUvKW98b5t9ZBtFbaGmVau4L3MRhw465cWCyjPS2qBSes4JsfdYkPMm89Ziktm8kT",
  "key28": "2HpKHa6cNVNYLYaPLCtggfodQAKFHKei6kWgs6qM2H5t2yZ7ghWHVATug1Fc8XAcS9yZmTCfBS4henjecFQDRXPx",
  "key29": "5k8rNbsjH2f4GTxx99cpTTbECooASjPDpfLETu287pApVRyRZ1AGabBS7YyA2koFnfjzqU1UGW1JQ5Wh25Sg9m8e",
  "key30": "vDDPGhJAHjzU2swW5VHoUkDFRktmZBdY8hmkhnGLUf6hfAMAD9nTnT9sP7KbUxgwgaDsvrkWRfjQiUfxCx1R5w9",
  "key31": "QdzvjfYwDMndFGM9aLHV8PEMFybTFo1kmAAJc1Xfx6Rpj7MdNpwt4hoWchdeRhv9L7RCSRaPxEnycq6RZrz5FAN",
  "key32": "5iunGPzytHyev3UA1NKXEeEAW54gxfi746Vu3zZ9xfcBZP8WVPzzf1784TEBJPF8LzsN1PzpHU4GAZCTy77eHufa",
  "key33": "3jU7Nk7ZhCT97CCks7s6pAh7wuQWDnMdLBta8kRFTrNoasj7xrQAB7wuh42jtwRwbyBQ7zu3s54t4ZnU5H5ZQ83Y",
  "key34": "51S6pwwcKftT1hqfeKFcUJaC5sV74b99miNbRMKrUYqG97RbbsT96wkuQwEZTy2ZBN9k2dimTbYyWnDQR3vBaeht",
  "key35": "2Gt7CxeXDhGqfguGF8wdtjJnK4s4xpv4QcaWJFs8KYyVhTi4a1LrxMJMn9KXczQTA2o8XSzz2wiqXYizDfPdQvW",
  "key36": "3vXJYo7jK8Q85j4kgbUjpUFG13mdyCyMbJjxwtYZcXLCnrnuh2KRQdsEaS8DLSfLLnoHvQtGhG92PcQiyf5mDWQc",
  "key37": "4j9UPhiG2cbnEyot1Dobgz6gSZJi2trSLi7UR6FwRErdodYzNBJmz6PXycqVjMhL4V3mSMCy2ZWcYuyvNtXMtMTj"
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

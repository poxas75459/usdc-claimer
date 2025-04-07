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
    "qkR289VyqZdkXMQLaZNmeym9jFH1EN6RYQN4kWpjxGhQBUeV8gG9n1NXz3oYL3n2Fa2F8Jx2FLPXgVxwEnbYQTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BLTCPM78t7Zp74CgvTcnNejpHnYWp2H9MwA2x9fmKh7b61mdf5V4JpSzpiEeUazbdmUNg71yHjYBYyEdNysJyhj",
  "key1": "3ULk42sgUnYNVmnysknABmNj6BkftBoZx2HZSBBPh3kNs4R2LqVmRvzbMQSc8RaNzRFC2xosz1nvwAnxnAgnj76z",
  "key2": "5R9nAnVqRDvMwAXbPqvmbhgtWForNpo8dfScdai2kEsbo4B8aRMeTxBjXTPghnQ19eCmX9VSx9xLjXoC3AX8YQbr",
  "key3": "3VWTRKCWoaGXKq2XCwjtodFSbJYydLQLmjghQsqLjDTiUKWdRLKWq9EYPKxnFfVMjqXDqntwuCoNR8DSGazfSZEM",
  "key4": "2BCQoMYUMoPZFZQqJWsx8c8g8nFwBBKoGqDn6KQ65bucBhMwFbfrrfSDRwXeACjdt34T5W23ZdmU9np9oNyTXccH",
  "key5": "PZGov3gVi4k2qbbfjAajSqZcCqqN7Hv5XsxqMPqQBAEP8VnENovMLYPXiXebzHsFLqiiWghNiMiXg7AqqvcMyqF",
  "key6": "4HDgFrcdZpkFq8eejwpri56i9Lfr8M8tz2qvr8LmsdZHFLBV4VqXmP8zxDUWP1MtGwKRqTteWsjMSpA5wPUZAhrP",
  "key7": "PssvXMZcGQdQhF8kN83A69sQHPtgU3GW6q2mfDAerKpC83DnrdqDxN3gJfkgQh3WnjRKezuEoqrcK9K2PqFWoWK",
  "key8": "588RGVeNe7k8J54wcbwwknDuQZAPG1XhFNbmxfB2KL37wZTXoX7ehLgfCtZvucMC9ZWVaTNrZqGLXAjV8jdA4DRm",
  "key9": "4ZVi4uJNRxnB93HdpWCcYPvMbpdrATdrAydTMxBnZx2vadCLC7Sjn5wcCzPj8HC3A5njZqGUqykwfkwNWdcEguEV",
  "key10": "3411ydiURPyPUw5JLvEiCixqQxNC7n3hJYhjGcWeGVKviSvfiHrYonmqSnEcdtHyE42WzJhbic1GCLstftymxsuU",
  "key11": "4Aqmwk6Xebp1DSJTdbAxnP5V86Fk43myfHiX1W2MBrbNLSfNs95mFpMqMuTyzU6s5jRraxhcdEDbF8Nr6tRcis14",
  "key12": "24m9nA1T3dK6Bfo6DfoUPdHdmKJRcZjijjHJYfJNVpXfX53mvUHMdRB7qFaRsfQRas71jmx21s7ozjigxBWMcruq",
  "key13": "34hhCcHR7YZbypgryzhsb13mT9WiEGtXzbXrpEG4JMPM1zkgpq6thzsnd1MntSJkmxsS6AkmdFYbxW6totZ5h8Vr",
  "key14": "9jnTPcgQxPASgDwTJ1hdXKgjVfMfmw5yNxPrxZKNrL5fSELrJ7qzmsBHMAQeo6yjUW36ZCoq7B2bak75C7B4c9x",
  "key15": "3bZqcijtv7FedtLt2eL9Hj58tVmuDVDV2jLjT8FHHnmoiHroctBN7YFEEM2Rx5iyk1ryNeAjF4A1MH5aV6V7vZbH",
  "key16": "2X9cMvdBkexHLja4JQALyFifwnDaMB4C5p111uRxbN7cH48sL22WmZfjA8rCmkuBVQUX9zi5NGimeCoN9NDfnCJE",
  "key17": "q7vLYML9B4xzcEXgXcgE3Wqnp6XgzJLYZSDZyN1BS9AraG4zWbZ9G82VFdHmmkQMog88NPMGaxXmsehPih8ruFv",
  "key18": "NsGH7bPLjZWGTBSNz9nKfUtWcm7HJTi1S15Hcwiu2wa56769yKgvs5vLAu8TXctEYaQJexy1RpcbXmGJcJq4cfv",
  "key19": "3UfT5ogj6CPbrHb5umNJWuDXmsJPCzKw3tWRhZGT9xh4qQde53ZLva69hTaQYqxR9pwk1druHH9YFoc7sWnGE9VZ",
  "key20": "tYBtf8FinL63Fdyk1HDGS8DHRLc8A7hkBAEA7FtVg6fyuUNkazsXCktkyshq163YSBchWDs2XeZhEV9eZsoZkci",
  "key21": "4afqNdEvGTsvB7GUj7XKaGH6ACiKiprJYE43CP2wd27pFtYym8devGur9ywbezrb13evmRze8Cwi2wWenrXZU6GV",
  "key22": "2hrBQ8pRgb1PwTSbW2wP4hcXDFeX1jAzhUqgp7ZYYuamM1wSDzry5YdNVfjSwG2NpF77iA2z8HFyirUcUXhdtdec",
  "key23": "3GZWXWDysjYegtrRWwyshPCjXcHFA8v35j2fRRecnyGo7C7iEZmi7sNbFzyVy4KnwFvqME75METQdJTjt3FPvjRE",
  "key24": "uaCcto2TUQ34ufSxh5PnXMmyZzAkupxQz1GKkeVSPQhZjhzdeKhNhqjTMcYF1J8wNsN3Y2UPy6Z7jrutZcuMKWV",
  "key25": "3NYe2AWHi6oLiX5FBh2Mjt1eM1jkm2jWwoaawg3ScqVouxqybPXuXNELQMfsB5zn2h5EEuRYXDkVoHgALw5f6urb",
  "key26": "52sJHBAK6mNW18fshmZMyzhGasyrRmJzQaEZuJFKZsFCq87BrHNswdxjns2sRBv145mwUMtfUfzEdbiChNE1Bb1X",
  "key27": "5mR7RGNpMa2xsrSsNHGRUX2vgrguirkz2esS5oAwDHaftLpRv3MJ44DxsNpdpupDTPBFBavUVQ3uRHw8xaasRrNt",
  "key28": "63i4gAjennoBq8RSvzSDVyXw2N9VGa7F1cm1XszfWfaZVsjv2V9d8tRdGdBpUT5uvZuxAam6qSfxKZdYEfzGkpo9",
  "key29": "61Kx4hu6LB23pcnSNA8UN1mayahYJNJSRCWUXerCqLJCmqsM96wbJpw8k3UKx2dZdCeQJkpxNW9p8HmpF2CTPAji",
  "key30": "4oUX6MojuXUweZNQ5326fbKvqNnddpYRTwJc2Q6snFyWQKLuNLt1HiezgwF1KhMqEwQ2Z32zjVVjNkuRdNgPAi3h",
  "key31": "3pb117vg32VTdpYrCEefuW8K5jnhnSHtdVapVEyosavKUN3Sf1UPWAGgvSgkuHxfmSsU3sRpRep9jjhXe1WAuMbt",
  "key32": "wHfBWx37eRoKFeH5XZJnYrqjaRGCuwoYAQyDV3MQj45vGuRpCfQj7r5Lqdvs4RSZU6PnoZWjBp3W2LCMYpWMF6z",
  "key33": "42kiTfqoU4qLEr7VisBbkZtzomcAHgfBqLWhv1pGznb1HJCJsYkrysRmEnLtB3EKomgkK2x3KpBXxG4JTWTh8kYN",
  "key34": "fR2P5CxsNbBQqA3LE1DsmfFzkg1bRnYDL7dDUxNUaGAQy7kUYhw65rkxU7mYcQ2YTi8AEDhttg8SVhbsJ25HynP",
  "key35": "67Z1i7aTgobLDpiu3MLVxpv5mwbCmgA8FUJwEYYM1qC6SCShU255kxAj9hvaJP8o1Ei7Y8mjsNaaPJ4dR726TJqc",
  "key36": "129kCZY68x1dn7GWSi8cKoCAB52mprXrHFaXaFH2RxQNSJsCSBHZh8Wpm7NUHjQWDhTeyaTtHNo4BkrBntvKz5VY",
  "key37": "Wkg1azbKq87P13Rk4uk98gz67WhXT1NG4NsNTW33xWngCDGkp3ZdP2ECxsyDCEGYB4wzg2yLNcn12HrsJXwAHsJ",
  "key38": "42ymbUowJy2fH6rPCSq424m2UxFJEWmM9s6cHE7hUSYPBCKr74wjMf2ddBVwrWfu1gdJQXDwapm1Ccdk2GBDq65T",
  "key39": "3rhhiFBdP288u4ThZCyBJ4z52M2A6QRYD2zKM1wWmrxf1Uh3vtfn9w3e9kwTz1iGEMNrt69viGt8adj7w9PX71Z3",
  "key40": "33qXBVnXBPfTUbywGRiT3vETa5a3JY6Qih7R5YEnjrPfeWp9f6aRMFbVei3hPTMCFWKDtsrxVCYVev5QfiEKemVi",
  "key41": "4rxoT9tYg798ghUznuKBRQS2FJT4ccHQ7CDFvzHf1F4LipuWTsaqcLumBH9Gvkj6BxQQeRXAYAdP1q8bX7csvtZT",
  "key42": "2wWDmqhgHy6sDCdufoQPRJ4HNk9kvYTmPJdzN47p8821yYFnGLsRj5v4YFym4SZrfoQWgbN3U1gQv9mTGaWKwvxS",
  "key43": "5D1dgKZxprDrV8BPcncNUwyB8reNXCZAnXwAzdr9bMKQacR4G9ANFw1oktk5QBpbg89MSeBUwhFG9PtGhcCgqPuZ",
  "key44": "5YVkE5ypJBthVRdamQ1avAZqxK4NfcoCNSko194s8M8BF6dnLbnUyffmE4utmM8W3TDbk1VfC2B1Po1vdcE2KJXf"
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
